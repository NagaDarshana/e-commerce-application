import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import User from "./pages/User"
import ProductDetails from "./components/ProductDetails"
import Cart from "./pages/Cart"
import PaginationProvider from "./Contexts/PaginationContext"
import {Route,Routes,Navigate} from "react-router-dom"
import "./App.css"

function App() {

  return (
    <>
    <PaginationProvider>
    <Navbar></Navbar>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/home" element = {<Navigate to = "/" ></Navigate>}></Route>
      <Route path = "/cart" element = {<Cart/>}></Route>
      <Route path = "/user" element = {<User/>}></Route>
      <Route path = "/product/:id" element = {<ProductDetails/>}></Route>
      <Route path = "*" element = {<PageNotFound/>}></Route>
    </Routes>
    </PaginationProvider>
    </>
  )
}

export default App
