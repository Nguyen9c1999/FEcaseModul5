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

export const findTest = createAsyncThunk(
    'test/FindTest',
    async (data) => {
        const res = await axios.get('http://localhost:8080/tests/findTest?name=' + data.nameTest + '&&id=' + data.idCategory)
        return res.data
    }
)

export const deleteTest = createAsyncThunk(
    'test/deleteTest',
    async (idTest)=>{
        const res = await axios.delete('http://localhost:8080/tests/'+idTest)
        return res.data
    }
)

