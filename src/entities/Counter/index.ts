import type {CounterSchema} from "./model/types/CounterSchema";
import {Counter} from "./ui/Counter";
import {counterReducer, counterActions} from "./model/slice/counterSlice";

export {
    Counter,
    CounterSchema,
    counterReducer,
    counterActions,
}