import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
let initialState={
    todo : [{id:"uniquw",todo:"This is my Note."}],

}

const TODOAPP = createSlice({
    name:"todos",
    initialState,
    reducers:{

        addtodo:(state, action)=>{
            if(action.payload){
                state.todo.push({id:nanoid(), todo:action.payload})
            }
            else{
                console.log("empty")
            }
        },

        removetodo:(state, action)=>{
           let data = state.todo.filter((list)=>
                list.id !== action.payload
            )
            state.todo=data
        },

        clearall:(state)=>{
            state.todo = []
        }
    }
})



export const {addtodo, removetodo, clearall} = TODOAPP.actions;
export default TODOAPP.reducer;
