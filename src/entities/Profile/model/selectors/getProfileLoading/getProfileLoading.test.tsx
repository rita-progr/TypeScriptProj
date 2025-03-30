import {StateSchema} from "app/providers/StoreProveder";
import {getProfileLoading} from "./getProfileLoading";



describe('getProfileLoading', () => {
    test('should return correct object', ()=>{


        const state: Partial<StateSchema> = {
            profile:{
                isLoading: true,
            }
        }

        expect(getProfileLoading(state as StateSchema)).toEqual(true);
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual("");

    })

    test('loading should be false', ()=>{


        const state: Partial<StateSchema> = {
            profile:{
                isLoading: false,
            }
        }

        expect(getProfileLoading(state as StateSchema)).toEqual("");
    })
})