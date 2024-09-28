
import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../components/TaskSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    }
});