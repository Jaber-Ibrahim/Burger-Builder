/* eslint-disable react/prop-types */

import classes from "./BurgerControl.module.css"

const BurgerControl = (props) => {
  return (
    <div className={classes.BuildControl}>
        <p className={classes.Label}>{props.label}</p>
        <button className={classes.Less} onClick={props.removed} disabled = {props.disabled}>Less</button >
        <button className={classes.More} onClick={props.added} >More</button>
    </div>
  )
}

export default BurgerControl