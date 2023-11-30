import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cartData : []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const data = action.payload
            state.cartData.push(data)
        },
        setInitialData: (state, action) => {
            state.cartData = action.payload
        },
        updateStatus: (state, action) =>{
            state.cartData = action.payload
        }
    }
})

export const {addItem, setInitialData, updateStatus} = cartSlice.actions
export default cartSlice.reducer