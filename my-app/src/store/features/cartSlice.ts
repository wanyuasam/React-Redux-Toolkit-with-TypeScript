import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product{
    id: number;
    name: string;
    price: number
}

export interface CartItem{
    product: Product;
    quantity: number

}

interface CartState{
    items: CartItem[]
}

const initialState: CartState ={
    items: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload)
        }
    }
});
export const {addToCart} = CartSlice.actions
export default CartSlice.reducer