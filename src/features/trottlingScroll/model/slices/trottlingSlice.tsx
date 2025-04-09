import {TrottlingSchema} from "features/trottlingScroll";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: TrottlingSchema = {
    scroll: {}
}

export const trottlingSlice = createSlice({
    name : 'trottlingSlice',
    initialState,
    reducers: {
        setScroll : (state, {payload}: PayloadAction<{path: string; position: number}>) => {
            state.scroll[payload.path] = payload.position;
        }
    }
})

export const {reducer:trottlingReducer, actions: trottlingActions} = trottlingSlice;