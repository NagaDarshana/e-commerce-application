import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';

function Navbar() {

  const quantity = useSelector((store) => {return store.cartReducer.cartQuantity})

  return (
    <div className = "Navbar-head">
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/cart">
      <div className = "cart-container">
        <MdOutlineShoppingCart />
        <div className="cart-quantity">{quantity}</div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar