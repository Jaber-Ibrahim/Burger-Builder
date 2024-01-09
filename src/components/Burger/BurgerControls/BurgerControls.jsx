/* eslint-disable react/prop-types */
import classes from "./BurgerControls.module.css"
import BurgerControl from "./BurgerControl/BurgerControl"


const controls = [
    {label : 'Salad' , type : 'salad'},
    {label : 'Bacon' , type : 'bacon'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Meat' , type : 'meat'}
]
const BurgerControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {/* i add abs method because it retuens negative zero sometimes */}
      <p>Current Price : <strong>{Math.abs(props.price).toFixed(2)} $</strong></p>
        {controls.map(el => {
            return <BurgerControl
            key = {el.label}
            label = {el.label}
            added = {() => props.add(el.type)}
            removed = {() => props.remove(el.type)}
            disabled = {props.disabled[el.type]}/>
        })}
      <button className={classes.OrderButton}
       disabled={!props.purchasable} 
       onClick={props.showorder}>order now</button>
    </div>
  )
}

export default BurgerControls