/* eslint-disable react/prop-types */
import classes from "./Burger.module.css"
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
// import propTypes, { object } from "prop-types"



const Burger = (props) => {
// const ddd = Array(props.ingredients["salad"])
// console.log(ddd) // تحويل الكيز بعدد مرات تكرارها الى مصفوفة فارغة مؤلفة من نفس عدد مرات تكرار السلطة


// const fff= [3,6,7,2,7]
// const ff= [2,6,4,2,8]
// console.log(fff.concat(ff)) // see what concat does



    // console.log(props.ingredients)
    let myIngrediens = Object.keys(props.ingredients)
            .map(igKey => {
                return [...Array(props.ingredients[igKey])]
            .map( (_,i) => {  // we use _ because we dont care about the first parameter
                return <BurgerIngredients key={igKey + i} type={igKey}/>
            })
        })
    //transfer to one array with many types with length of how many elements there are 
            .reduce((arr, el) => {
        //concat : to add the el element to the arr array
                return arr.concat(el)
            } , []);
    if (myIngrediens.length ===0 ) {
        myIngrediens = <p>please start order your sandwich</p>
    }

    
    // let f = Object.keys(props.ingredients)
    // // console.log("f" , f)
    // let ff =  f.map(key => {
    //   return [...Array(props.ingredients[key])]
    // })
    // // console.log("ff after first mapping" , ff)
    // let fff= ff.map((_,i) => {
    //     return <BurgerIngredients key={i} type={"bacon"}/>
    // })
    // console.log(fff)
    // let ffff = fff.reduce((arr,el) => {
    //     return arr.concat(el)
    // },[])
    // console.log(ffff)

  return (
    <div className={classes.Burger}>
        <BurgerIngredients type = "bread-top"/>
        {myIngrediens}
        <BurgerIngredients type = "bread-bottom"/>
    </div>
  )
}

// Burger.propTypes = {
//     type : propTypes.string
// }
export default Burger