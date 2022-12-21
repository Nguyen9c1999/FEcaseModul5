import {createSlice} from "@reduxjs/toolkit";
import {findQuestionByIdTest} from "../service/questionService";


const initialState = {
    questionTest : []
}

const questionSlice = createSlice({
    name: 'question',
    initialState ,
    extraReducers: builder => {
        builder.addCase(findQuestionByIdTest.fulfilled, (state, action) => {
            state.questionTest = action.payload

        })
    }
})
export default questionSlice.reducer