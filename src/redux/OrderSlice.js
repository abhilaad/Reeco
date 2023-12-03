import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOrderApproved : false
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrderApproved: (state, action) => {
            state.isOrderApproved = action.payload
        }
    }
})

export const { setOrderApproved} = orderSlice.actions
export default orderSlice.reducer