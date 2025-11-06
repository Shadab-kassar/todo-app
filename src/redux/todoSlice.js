import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchtodo = createAsyncThunk("fetchbyid",async()=>{
    const response = await fetch("https://dummyjson.com/todos");
    let data = await response.json();
    // console.log(data.todos)
    return data.todos;
})

const todoSlice = createSlice({
    name : "todoapi",
    initialState:{
        items:[],
        status:"idle",
        error:null
    },

    reducers: {
    cleardata: (state) => {
      state.items = [];
    },
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchtodo.fulfilled,(state,action)=>{
            state.status="succcess"
            // console.log(action)
            state.items=action.payload
        })
    } 
})

export const {cleardata} = todoSlice.actions;
export default todoSlice.reducer;

