import { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axios'
import { Order, Spinner } from '../../components/importComponents'
import classes from './Orders.module.css'
import { ErrorHandler } from '../../hoc/importHoc'



const Orders = () => {
    const [orders,setOrders] = useState([])

    useEffect(()=>{
        axiosInstance.get("orders.json")
         .then((res) =>  {
            let fetchedOrders = []
            // console.log(res.data)
            for (let key in res.data) {
                fetchedOrders.push({
                    ...res.data[key],
                    id : key
                })
            }
            setOrders(fetchedOrders)
            // console.log(fetchedOrders)
            // setOrders(res.data)
         })
         .catch(error => {
            console.log(error)
         }) 
    },[])


    const deleteHandler = (id) => {
        console.log("delete order which has an id : ",id)
    }

     
    let myOrders = <Spinner/>
    // loading ? myOrders = <Spinner/> : myOrders = orders.map((order) =>
    if(myOrders.length > 0) {
        myOrders = orders.map((order) => 
        // console.log(typeof(order.totalPrice))
            <Order 
                key = {order.key}
                price = {order.totalPrice}
                delete = {deleteHandler(order.key)} 
                ingredients = {order.ingredients}/>
                )
    } 
            return (
            <div>
                {myOrders}
            </div>
            )
        }

export default ErrorHandler(Orders,axiosInstance)
