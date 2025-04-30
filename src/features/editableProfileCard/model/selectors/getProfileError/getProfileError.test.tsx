import {StateSchema} from "app/providers/StoreProveder";
import {getProfileError} from "./getProfileError";



describe('getProfileError', () => {
    test('should return correct object', ()=>{

        const state: Partial<StateSchema> = {
            profile:{
                error: '123'
            }
        }

        expect(getProfileError(state as StateSchema)).toEqual('123');
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual("");

    })
})