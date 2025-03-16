import {StateSchema} from "app/providers/StoreProveder";

describe('getAuthByUserName.test', () => {
    test('success username', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                username: 'username'
            }
        }
        expect(state).toEqual({login:{username: 'username'}});
    })

    test('empty username', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                username: ''
            }
        }
        expect(state).toEqual({login:{username: ''}});
    })
    test('undefined username', ()=>{
        const state: Partial<StateSchema> = {
            login:{
                username: undefined
            }
        }
        expect(state).toEqual({login:{username: undefined}});
    })
})