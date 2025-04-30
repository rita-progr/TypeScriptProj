import {StateSchema} from "app/providers/StoreProveder";
import {getProfileData} from "./getProfileData";
// import avatar from "shared/assets/test/haker.jpeg";


describe('getProfileData', () => {
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
                data:data
            }
        }

        expect(getProfileData(state as StateSchema)).toEqual(data);
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined);

    })
})