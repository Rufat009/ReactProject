import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slicer';

const store = configureStore({
 reducer: {
    tasks: tasksReducer,
 },
});

export default store;