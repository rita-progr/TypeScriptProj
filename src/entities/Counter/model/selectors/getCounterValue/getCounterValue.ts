import {StateSchema} from "app/providers/StoreProveder";


export const getCounterValue = (state:StateSchema) => state.counter.value;