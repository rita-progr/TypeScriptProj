import {createSelector} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProveder";


export const getTrottlingScroll = (state: StateSchema) => state.trottling.scroll
export const getScrollSelector = createSelector(
    getTrottlingScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
)