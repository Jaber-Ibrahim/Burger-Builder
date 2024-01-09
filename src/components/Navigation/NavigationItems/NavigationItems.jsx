import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem"

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
        {/* <NavigationItem link = "/" active = {true}>Burger Builder</NavigationItem> */}
        {/* this and the one above are true */}
        <NavigationItem link = "/">Burger Builder</NavigationItem>
        <NavigationItem link = "/orders" >My Orders</NavigationItem>
    </ul>
  )
}

export default NavigationItems