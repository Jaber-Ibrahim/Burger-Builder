/* eslint-disable react/prop-types */
import { Logo , NavigationItems } from "../../importComponents"
import classes from "./SideBar.module.css"
import {Backdrop } from "./../../importComponents"
import { MyAux } from "../../../hoc/importHoc"


const SideBar = (props) => {
  return (
    <MyAux>
      <Backdrop show = {props.open} clicked = {props.handler}/>
      <div className={props.open ? `${classes.SideBar} ${classes.Open}`:`${classes.SideBar} ${classes.Close}`}>
        <Logo height = {props.height}/>
        <nav>
        <NavigationItems/>
        </nav>
    </div>
    </MyAux>
  )
}

export default SideBar