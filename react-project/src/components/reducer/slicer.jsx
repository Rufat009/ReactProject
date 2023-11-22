import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const tasksSlice = createSlice({
 name: 'tasks',
 initialState: JSON.parse(localStorage.getItem("tasks")) || [],
 reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("tasks",JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      state.splice(action.payload,1);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    updateTask: (state, action) => {
        const index = state.findIndex(e => e.id === action.payload.id);
        state[index].name = action.payload.name;
        state[index].content = action.payload.content;
        state[index].isDone = action.payload.isDone;
        localStorage.setItem('tasks', JSON.stringify(state));
    },
 },
});

export const { addTask, deleteTask, updateTask } = tasksSlice.actions;



export default tasksSlice.reducer;
