/* eslint-disable react/prop-types */
import classes from './Logo.module.css'
import logo from "./../../assets/burger-logo.png"
const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{height : props.height}}>
        <img src={logo} alt="burger " />
    </div>
  )
}

export default Logo