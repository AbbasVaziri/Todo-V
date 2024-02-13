import {createSlice} from "@reduxjs/toolkit";

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
                    complete: false
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
        }
    },
})

export const {addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer