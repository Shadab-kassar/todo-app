import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice'
import todosliceReducer from './todoSlice'

export const store = configureStore({
    reducer:{
        todoapp : todoReducer,
        todoslice: todosliceReducer
           
    }
})