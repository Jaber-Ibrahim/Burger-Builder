import React, { useEffect, useState } from 'react'
import { CheckoutSummary } from '../../components/importComponents'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { ContactData } from '../importContainers'

const Checkout = () => {
  const navigate = useNavigate()
  const {param} = useParams()
  // const location = useLocation()

  const [c,setC] = useState(true)
  
  // console.log(params)
  // console.log(location.pathname)
  const [ingredients , setIngredients] = useState({})
  useEffect(() => {
    try {
      // Parse the serialized parameter back to an object
      const parsedIngredients = JSON.parse(decodeURIComponent(param))
      setIngredients(parsedIngredients);
      // console.log(ingredients)
    } catch (error) {
      // console.error('Error parsing parameters:', error);
      // Handle parsing error or navigate to an error page
      navigate('/error');
    }
  }, [param]);


  // console.log("match path" ,match?.path)

  const checkoutCancelledHandler = () => {
    console.log("hello cancel")
    // go back one step
    navigate(-1)
  }
  const checkoutContinuedHandler = () => {
    // console.log("hello continue")
  //  here with out /
    navigate("contact-data")
    setC(false)
  }
    const outPut = c?(
    <CheckoutSummary 
    ingredients={ingredients}
    checkoutCancelled={checkoutCancelledHandler}
    checkoutContinued={checkoutContinuedHandler}/>
    )
    : 
    <Outlet/>
    return (
      <div>
        {outPut}
      </div> 
  )
}

export default Checkout
