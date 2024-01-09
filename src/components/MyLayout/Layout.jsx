import { BurgerBuilder, Checkout, ContactData, Orders } from "../../containers/importContainers"
import {MyAux} from "../../hoc/importHoc"
import classes from "./Layout.module.css"
import { Toolbar ,SideBar} from "../importComponents"
import { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"


const Layout = () => {
  const [open , setOpen] = useState(false)
  const sideBarHandler = () => {
    setOpen(!open);
  }

// const location = useLocation()
  return (
  <MyAux>
    <Toolbar height = "80%" open = {open} handler = {sideBarHandler}/>
    <SideBar height = "10%" open = {open} handler ={sideBarHandler} />
    <main className={classes.Content}>
        {/* <BurgerBuilder/>
        <Checkout/> */}

          {/* both are true */}
          {/* <Route path="/" Component={BurgerBuilder}/>
          <Route path="/checkout" Component={Checkout}/> */}
          <Routes>
            <Route path="/" element={<BurgerBuilder/>}/>
            <Route path="/checkout/:param/:price" element={<Checkout/>}>
              <Route path="contact-data" element={<ContactData/>}/>
            </Route>
            <Route path="/orders" element={<Orders/>}/>
        </Routes>
    </main>
  </MyAux>
  )
}

export default Layout