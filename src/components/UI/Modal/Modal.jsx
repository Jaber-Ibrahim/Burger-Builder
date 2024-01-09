/* eslint-disable react/prop-types */
import { MyAux } from "../../../hoc/importHoc"
import classes from "./Modal.module.css"
import Backdrop from "./../Backdrop/Backdrop";
const Modal = (props) => {
  return (
    <MyAux>
      <Backdrop show={props.show} clicked={props.close}/>
      <div className= {props.show ? `${classes.Modal} ${classes.show}` : `${classes.Modal}`}>
        {props.children}
      </div>
    </MyAux>
  )
}

export default Modal