import {StateSchema} from "app/providers/StoreProveder";

export const getAddCommentFormText = (state: StateSchema) => state.newComment?.text || ''
export const getAddCommentFormError = (state: StateSchema) => state.newComment?.error || null