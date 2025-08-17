import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cartSlice",
    initialState : {
        cartQuantity : 0,
        cartProducts : []
    },
    reducers:{
        addToCart:(state,action) => {
            state.cartQuantity++;
            const productToBeAdded = action.payload;
            const requiredProduct = state.cartProducts.find((cProduct) => {return cProduct.id == productToBeAdded.id});
            if(requiredProduct == undefined){
                productToBeAdded.indQuantity = 1;
                state.cartProducts.push(productToBeAdded)
            }
            else{
                requiredProduct.indQuantity ++;
            }

        },
        deleteFromCart:(state,action) => {
            const productToBeAdded = action.payload;
            const productIdx = state.cartProducts.findIndex((cProduct) => {return cProduct.id == productToBeAdded.id})

            if(productIdx == -1){
                return;
            }
            else{
                let product = state.cartProducts[productIdx]
                if(product.indQuantity == 1){
                    state.cartProducts.splice(productIdx,1)
                }
                else{
                    state.cartProducts[productIdx].indQuantity -= 1;
                }
                state.cartQuantity -= 1;
            }
        }
    }
})

export const action = cartSlice.actions
export default cartSlice