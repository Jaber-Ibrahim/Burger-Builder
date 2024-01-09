import { useNavigate, useParams } from "react-router-dom"
import { Button ,Spinner } from "../../../components/importComponents"
import classes from "./ContactData.module.css"
import { useState } from "react"
import axiosInstance from "../../../axios/axios"

const ContactData = () => {
  const navigate =useNavigate()
    const {param , price} = useParams()
    let myParesdIngredients = JSON.parse(param)

    const [loading , setLoading] = useState(false)

    const [order , setOrder] = useState({
    ingredients : myParesdIngredients ,
      totalPrice : price,
      //   price     : burger.totalPrice,
        customer  : {
          name    : "",
          address :  {
            city    :  "",
            postal : ""
          },
          email : ""
        }
    })


    const handleInputChange = (e,val) => {
      // console.log(e)
      // console.log("value" , val)
      setOrder((prevState) => ({
        // ...prevState ,
        // ingredients : {...prevState.ingredients}, 
        ingredients : myParesdIngredients, 
        totalPrice : price,
        customer : {
          ...prevState.customer , 
          name : val=="name" ? e.target.value : prevState.customer.name ,
          address : {
            city : val=="city" ? e.target.value : prevState.customer.address.city,
            postal : val=="postal" ? e.target.value : prevState.customer.address.postal,
          },
          email : val=="email" ? e.target.value : prevState.customer.email, 
        }
      }))
      // console.log(order)
    }
    const orderHandler = (event) => {
      event.preventDefault()
      axiosInstance.post("/orders.json",order)
            .then((res) => {
              if(res.status==200) {
                setLoading(true)
                // alert("Your Order was sent successfully")
              }
            }
            )
            .catch(error => {
              alert(error)
            })
            .finally(() => {
              try {
                // console.log("hello from finally");
                navigate("/");
              } catch (error) {
                alert(error)
              }
            });
      // console.log(order)
    }

    let form = (
      <div className={classes.ContactData}>
      <h4>Enter Your Contact Data</h4>
      <form className={classes.Form} action="">
        {/* <input onChange={(e) => handleInputChange(e,order.customer.name)} type="text" name={order.customer.name} placeholder="Your Name" /> */}
        <input onChange={(e) => handleInputChange(e,"name")} type="text" name={order.customer.name} placeholder="Your Name" />
        <input onChange={(e) => handleInputChange(e,"email")} type="email" name={order.customer.email} placeholder="Your Email" />
        <input onChange={(e) => handleInputChange(e,"city")} type="text" name={order.customer.address.city} placeholder="Street" />
        <input onChange={(e) => handleInputChange(e,"postal")} type="text" name={order.customer.address.postal} placeholder="Postal Code" />
        <Button btnType="Success" clicked={(e) => orderHandler(e)}>ORDER</Button>
      </form>
    </div>
    )

    if (loading) {
      form = <Spinner/>
    }
  return (
    form
  )
}

export default ContactData
