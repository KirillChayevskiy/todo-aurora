import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../slice/notesSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
