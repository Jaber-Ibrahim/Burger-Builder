/* eslint-disable react/prop-types */


import classes from "./Toolbar.module.css"
import { Logo , NavigationItems } from "./../../importComponents"

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
        <div className={classes.Bars} onClick={props.handler}>
          <span className={classes.Span}></span>
          <span className={classes.Span}></span>
          <span className={classes.Span}></span>
        </div>
        <Logo height = {props.height}/>
        <nav className={classes.DisplayNone}>
            <NavigationItems/>
        </nav>
    </header>
  )
}

export default Toolbar