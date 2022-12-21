import {createSlice} from "@reduxjs/toolkit";
import {findAnswerByIdQuestion} from "../service/answerService";

const initialState = {
    answer : []
}

const answerSlice = createSlice({
    name: 'answer',
    initialState ,
    extraReducers: builder => {
        builder.addCase(findAnswerByIdQuestion.fulfilled, (state, action) => {
            state.answer.push(action.payload)

        })
    }
})
export default answerSlice.reducer