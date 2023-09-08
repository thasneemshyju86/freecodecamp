import {createSlice} from '@reduxjs/toolkit'
import cartItems from '../CartItems'

const initialState={
    cartItems:cartItems,
    amount:0,
    total:0,
    isLoading:true
}

const cartSlice=createSlice({
    name:'cart',
    initialState,

})

// console.log(cartSlice)

export default cartSlice.reducer