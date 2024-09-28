
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state,action)=>{
            const { id, title, description } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.title = title;
                task.description = description;
            }
        },
        removeTask: (state,action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    }
})

export const { addTask, updateTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;