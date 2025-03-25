import {StateSchema} from "app/providers/StoreProveder";

describe('getAuthByLoading.test', () => {
    test('loading true', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                isLoading: true,
            }
        }
         expect(state).toEqual({login:{isLoading: true}});
    })

    test('loading false', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                isLoading: false,
            }
        }
        expect(state).toEqual({login:{isLoading: false}});
    })
})