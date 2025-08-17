import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import {action} from "../redux/slices/cartSlice";
import { useDispatch, useSelector} from 'react-redux';

function ProductList(props) {
    const {productList} = props
    const cartProducts = useSelector((store) => {return store.cartReducer.cartProducts})
    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
        dispatch(action.addToCart(product))
    };
    const handleRemoveProduct = (product) => {
        dispatch(action.deleteFromCart(product))
    };

  return (
    <>
    {productList == null ? <h2>Loading...</h2> : productList.map((product) => {
            return(
                <div key = {product.id} className = "product">
                    <img src = {product.image} alt = "product_image"/>
                    <div className = "productsData">
                        <p className = "product_title">{product.title}</p>
                        <p className = "product_price">${product.price}</p>
                    </div>
                    <div className = "addAndRemoveCont">
                    <div className="removefromcart">
                        <RiSubtractFill onClick = {() => handleRemoveProduct(product) }/>
                    </div>
                    <div className="currentCartCount">{PrintCount({ cartProducts, id : product.id})}</div>
                    <div className="addtocart">
                        <IoMdAdd onClick = {() => handleAddProduct(product) } />
                    </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

function PrintCount(props){
    const { cartProducts,id} = props;
    let quantity = 0;
    for (let i=0;i<cartProducts.length;i++){
        if(cartProducts[i].id == id){
            quantity = cartProducts[i].indQuantity
        }
    }
    return (<>{quantity}</>)
}

export default ProductList