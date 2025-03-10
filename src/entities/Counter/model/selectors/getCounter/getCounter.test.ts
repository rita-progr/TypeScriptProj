import {StateSchema} from "app/providers/StoreProveder";
import {getCounter} from "./getCounter";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

describe('getCounter', () => {
    test('should return correct object', ()=>{
        const state: DeepPartial<StateSchema> = {
            counter: {value: 10}
        }

        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    })
})