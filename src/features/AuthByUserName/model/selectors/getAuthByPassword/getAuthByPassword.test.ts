import {StateSchema} from "app/providers/StoreProveder";

describe('getAuthByPassword.test', () => {
    test('success password', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                password: 'test'
            }
        }
        expect(state).toEqual({login:{password: 'test'}});
    })

    test('undefined password', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                password: undefined
            }
        }
        expect(state).toEqual({login:{password: undefined}});
    })

    test('empty password', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                password: ""
            }
        }
        expect(state).toEqual({login:{password: ""}});
    })
})