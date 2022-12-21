import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";
import {showTest} from "../../service/testCategory";
const initialState = {
    listTest : []
}
const testSlice = createSlice({
    name: 'test',
    initialState ,
    extraReducers: builder => {
        builder.addCase(showTest.fulfilled, (state, action) => {
            state.listTest = [...action.payload]

        })
    }
})
export default testSlice.reducer