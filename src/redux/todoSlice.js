import {createSlice} from "@reduxjs/toolkit";

// const endDay = (date) => {
//     let h = date.getHours();
//     let m = date.getMinutes();
//     let s = date.getSeconds();
//     return (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s
// }

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        {id: 1, text: "10 push Up", complete: false},
        {id: 2, text: "do homework", complete: false},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Math.random(),
                text: action.payload,
                complete: false,
            })
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.complete = !todo.complete
            }
        },
        toggleDefault: (state) => {
            state.complete = !state.complete;
        }
    },
})

export const {addTodo, deleteTodo, toggleTodo, toggleDefault} = todoSlice.actions
export default todoSlice.reducer