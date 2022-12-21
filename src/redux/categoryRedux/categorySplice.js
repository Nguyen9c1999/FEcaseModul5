import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/userService";
import {CategoryTest} from "../../service/categoryTestService";
let initialState = {category:[]}

const categorySplice = createSlice({
    name: 'category',
    initialState  ,
    extraReducers: builder => {
        builder.addCase(CategoryTest.fulfilled, (state, action) => {
            state.category = [...action.payload]
            localStorage.setItem('category',JSON.stringify(action.payload))

        })
    }
})
export default categorySplice .reducer