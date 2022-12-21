import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createQuestionService = createAsyncThunk(
    'question/createQuestionService',
    async (data)=>{
        const res = await axios.post('http://localhost:8080/questions',data)
        return res.data
    }
)
export const findQuestionByIdTest = createAsyncThunk(
    'question/findQuestionByIdTest',
    async (id)=>{
        const res = await axios.get('http://localhost:8080/questions/'+id)
        return res.data
    }
)