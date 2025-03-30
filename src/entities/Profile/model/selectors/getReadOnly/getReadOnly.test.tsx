import {StateSchema} from "app/providers/StoreProveder";
import {getReadOnly} from "./getReadOnly";



describe('getProfileLoading', () => {
    test('should return correct object', ()=>{


        const state: Partial<StateSchema> = {
            profile:{
                readonly: true,
            }
        }

        expect(getReadOnly(state as StateSchema)).toEqual(true);
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getReadOnly(state as StateSchema)).toEqual("");

    })

})