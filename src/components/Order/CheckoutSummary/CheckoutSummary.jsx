import React from 'react'
import classes from "./CheckoutSummary.module.css"
import { Burger, Button } from '../../importComponents'


const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you like it !</h1>
      <div className={classes.Burger}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button clicked={props.checkoutCancelled} btnType="Danger" >Cancel</Button>
      <Button clicked={props.checkoutContinued} btnType="Success">Continue</Button>
    </div>
  )
}

export default CheckoutSummary
