import { useEffect, useState } from 'react'
import axiosInstance from '../../axios/axios'
import { Order, Spinner } from '../../components/importComponents'
import classes from './Orders.module.css'
import { ErrorHandler } from '../../hoc/importHoc'



const Orders = () => {
    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(true)

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
            setLoading(false)
        })
        .catch(error => {
             setLoading(false)
            console.log(error)
         }) 
    },[])


    const deleteHandler = (id) => {
        console.log("delete order which has an id : ",id)
    }

     

    let output 

    // loading ? myOrders = <Spinner/> : myOrders = orders.map((order) =>
    

    loading ? output = <Spinner/> : 
    orders.length === 0 ? output = <p className={classes.NoData}>you have not ordered yet !!</p>
    : 
    output = orders.map((order) => 
    // console.log(typeof(order.totalPrice))
        <Order 
            key = {order.key}
            price = {order.totalPrice}
            delete = {deleteHandler(order.key)} 
            ingredients = {order.ingredients}/>
            )



    // else {
    //     myOrders = <p>you have not ordered yet !!</p>
    // }
            return (
            <div>
                {output}
            </div>
            )
        }

export default ErrorHandler(Orders,axiosInstance)
