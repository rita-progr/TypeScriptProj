import {StateSchema} from "app/providers/StoreProveder";

describe('getAuthByError.test', () => {
    test('success error', ()=>{
        const state:Partial<StateSchema> = {
            login: {
                error:'error'
            }
        }
        expect(state).toEqual({login:{error:'error'}});
    })
    test('empty error', ()=>{
        const state:Partial<StateSchema> = {
            login: {
                error:''
            }
        }
        expect(state).toEqual({login:{error:''}});
    })
})