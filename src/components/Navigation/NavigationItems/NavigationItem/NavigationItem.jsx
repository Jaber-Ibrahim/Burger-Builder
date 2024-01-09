import { NavLink, useMatch} from "react-router-dom"
import classes from "./NavigationItem.module.css"

const NavigationItem = (props) => {
  const isActive = useMatch(props.link);
  // console.log(props.link)
  // console.log("isActive" , isActive)
  // console.log("##########################################")
  return (
    <li className={classes.NavigationItem}>
      <NavLink 
      to={props.link}
      className={isActive ? classes.active : ""}
      >{props.children}</NavLink>
    </li>
  )
}

export default NavigationItem