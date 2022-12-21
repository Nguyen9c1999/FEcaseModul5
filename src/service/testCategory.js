import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const createTest = createAsyncThunk(
    'test/createTest',
    async (data)=>{
        const res = await axios.post('http://localhost:8080/tests',data)
        return res.data
    }
)

export const showTest = createAsyncThunk(
    'test/showTest',
    async (data)=>{
        const res = await axios.get('http://localhost:8080/tests')
        return res.data
    }
)
