/* eslint-disable no-undef */
import { useState } from "react"
import { ErrorHandler, MyAux } from "../../hoc/importHoc"
import { Burger, BurgerControls , Modal, OrderSummary} from "./../../components/importComponents"
import axiosInstance from "../../axios/axios"
import Spinner from "../../components/UI/Spinner/Spinner"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"



const INGREDIENT_PRICES = {
  salad : 0.3,
  cheese : 0.4,
  meat : 1.1,
  bacon : 0.5
}
const BurgerBuilder = () => {
  const [burger , setBurger] = useState({
    // ingredients :{
    //   salad : 0 ,
    //   meat : 0 , 
    //   bacon : 0 ,
    //   cheese : 0 
    // }, 
    ingredients : null , 
    totalPrice : 0,
    purchasable : false,
    showOrder : false ,
    
  })

  const [error , setError] = useState(false)

  useEffect(() => {
    axiosInstance.get("/ingredients.json")
        .then((response)=> {
          const ingredients = response.data
          setBurger({...burger,ingredients : {...ingredients}})
          // console.log(burger)
        })
        .catch((error) => setError(true))
  } , [])

  const [loading , setLoading] = useState(false)

  const addElement = (type) => {
    const oldCount = burger.ingredients[type]
    const newCount = oldCount + 1;
    // can use this line instead
    // const newCount = burger.ingredients[type] + 1;
    const updatedIngredients = {
      ...burger.ingredients
    }
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = burger.totalPrice;
    const newPrice = oldPrice + priceAddition;
    updatePurchaseState(updatedIngredients , newPrice)
    // console.log(burger.totalPrice)
    // console.log(burger.ingredients)
    }

  const removeElement = (type) => {
    const oldCount = burger.ingredients[type]
    const newCount = oldCount - 1;

    // can use this line instead
    // const newCount = burger.ingredients[type] + 1;    
    // Maximilain always does this method and it is easy to get
    //by making a copy of the main state

    const updatedIngredients = {
      ...burger.ingredients
    }
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = burger.totalPrice;
    const newPrice = oldPrice - priceAddition;
    updatePurchaseState(updatedIngredients , newPrice)
    // console.log(burger.newPrice)
    // console.log(burger.ingredients)
  }
  
  const updatePurchaseState = (ingredients , price , show ) => {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum,el) => {
      return sum + el;
    },0)
    setBurger({ingredients : {...ingredients}, totalPrice : price , purchasable : sum>0 , showOrder : show})
    // console.log(burger)
    // console.log(sum)
  }

  const ShowModal = () =>{
    updatePurchaseState(burger.ingredients , burger.totalPrice , true)
    // console.log("first")
    // console.log(burger.ingredients)
    // console.log(burger.totalPrice)
    // setBurger({ingredients : {...ingredients}, totalPrice : price , purchasable : sum>0,showOrder : true} )
  }

  const closeModal = () => {
    updatePurchaseState(burger.ingredients , burger.totalPrice , false)
    // console.log("click the backdrop")
  }

  const location = useLocation()
  const navigate = useNavigate()
  const continueOrderHandler = (paramValue) => {
    // console.log(location)
    // first convert them to json them encode and to get them you have to convert them again
    const serializeParams = JSON.stringify(paramValue)
    navigate(`/checkout/${encodeURIComponent(serializeParams)}/:${burger.totalPrice}`)
    // navigate(`/checkout/${serializeParams}`)
  }
    //transfer the turn object into boolean object 
    const disabledIngredient = {...burger.ingredients}
    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0 ;
    }
    // console.log(disabledIngredient)
    // {salad: true, meat: true, bacon: true, cheese: true}


    let orderSummary = null ;

    let myBurger ;

    // if(burger.ingredients==!null){
    if(burger.ingredients){
      // console.log(burger.ingredients)
      orderSummary = (
        <OrderSummary 
        ingredients = {burger.ingredients}
        price = {burger.totalPrice}
        cancel = {closeModal}
        continue = {() => continueOrderHandler(burger.ingredients)}/>
        // continue = {continueOrderHandler(burger.ingredients)}/>
      )
      myBurger= (
        <>
        <Burger ingredients = {burger.ingredients}/>
        <BurgerControls
        add = {addElement}
        remove = {removeElement}
        disabled = {disabledIngredient}
        price = {burger.totalPrice}
        purchasable = {burger.purchasable}
        showorder = {ShowModal}
        />
        </>
      ) 
    }
    
    if (burger.ingredients === null) {
      // console.log(burger.ingredients)
      myBurger = error ? <p>there is something went wrong</p>:<Spinner/>
    } 

    if(loading) {
      orderSummary = <Spinner/>
    }
    return (
    <MyAux>
        <Modal show={burger.showOrder} close={closeModal}>
          {/* we will delete the module too after posting the order so we change the showorder state to false in the right places */}
          {orderSummary}
        </Modal>
        {myBurger}
    </MyAux>
  )
}

export default ErrorHandler(BurgerBuilder,axiosInstance)