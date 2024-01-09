/* eslint-disable react/prop-types */
import {MyAux} from "./../../../hoc/importHoc"
import { Button } from "../../importComponents"


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (<li
                    key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>)
    })  
  return (
    <MyAux>
        <h3>Your Order</h3>
        <p>Your tasty Burger has the following ingredients : </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>
          TOTAL PRICE : <strong>{Math.abs(props.price).toFixed(2)}$</strong>
        </p>
        <p>Continue to checkout ?</p>
        <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
    </MyAux>
  )
}

export default OrderSummary