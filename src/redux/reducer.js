import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addToDoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //? Adding ToDos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //? Remove
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //? UpdateTodos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos } = addToDoReducer.actions;
export const reducer = addToDoReducer.reducer;
