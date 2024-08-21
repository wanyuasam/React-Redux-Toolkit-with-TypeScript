import { configureStore } from "@reduxjs/toolkit";
import {PersonSlice} from './features/personSlice'
import { useDispatch } from "react-redux";


export const store =  configureStore({
    reducer: {
        person : PersonSlice.reducer,
    }
});

export const useAppDispatch: () => typeof store.dispatch=useDispatch