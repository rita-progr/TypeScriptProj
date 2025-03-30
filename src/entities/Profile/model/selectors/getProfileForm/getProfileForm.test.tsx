import {StateSchema} from "app/providers/StoreProveder";
import {getProfileForm} from "./getProfileForm";



describe('getProfileForm', () => {
    test('should return correct object', ()=>{

        const data = {
            first: 'Рита',
            lastname: 'Афанасьева',
            age: 17 ,
            city: 'Санкт-Петербург',
            username: '@ritaaa969',
        }
        const state: Partial<StateSchema> = {
            profile:{
                form:data
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);

    })
})