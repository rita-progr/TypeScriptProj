import {StateSchema} from "app/providers/StoreProveder";
import {getCounterValue} from "./getCounterValue";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

describe('getCounterValue.test', () => {
    test('should return value', ()=>{
        const state:DeepPartial<StateSchema> = {
            counter:{
                value: 10
            }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    })
})