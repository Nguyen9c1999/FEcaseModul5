import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createAnswerService = createAsyncThunk(
    'answer/createAnswerService',
    async (data)=>{
        const res = await axios.post('http://localhost:8080/answers',data)
        return res.data
    }
)

export const findAnswerByIdQuestion = createAsyncThunk(
    'answer/findAnswerByIdQuestion',
    async (id)=>{
        const res = await axios.get('http://localhost:8080/answers/'+id)
        return res.data
    }
)