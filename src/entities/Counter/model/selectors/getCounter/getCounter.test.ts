import {StateSchema} from "app/providers/StoreProveder";
import {getCounter} from "./getCounter";


describe('getCounter', () => {
    test('should return correct object', ()=>{
        const state: Partial<StateSchema> = {
            counter: {value: 10}
        }

        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    })
})