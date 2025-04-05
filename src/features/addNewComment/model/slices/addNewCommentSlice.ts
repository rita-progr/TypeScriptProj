import {addNewCommentSchema} from "features/addNewComment";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: addNewCommentSchema = {}

export const addNewCommentSlice = createSlice({
    name : 'addNewCommentSlice',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
})

export const {reducer:addNewCommentReducer } = addNewCommentSlice;
export const {actions:addNewCommentActions } = addNewCommentSlice;