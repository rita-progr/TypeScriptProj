import axios from 'axios';
import {loginByUsername} from "./loginByUserName";
import {TestAsyncThunk} from "shared/lib/testAsuncThunk/TestAsyncThunk";

jest.mock('axios');
const axiosMock = axios as  jest.Mocked<typeof axios>;

describe('loginByUserName.test', () => {
    // let dispatch:Dispatch;
    // let getState: ()=>StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // })

    // test('success return data', async ()=>{
    //     const userValue = {name: 'test', id: 1}
    //     axiosMock.post.mockReturnValue(Promise.resolve({data:userValue}));
    //     const action = loginByUsername({name:'test', password:'test'});
    //     const result = await action(dispatch,getState, undefined);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.getAuthData(userValue))
    //     expect(axiosMock.post).toHaveBeenCalledTimes(3)
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     // expect().toEqual();
    // })
    //
    // test('error return data', async ()=>{
    //     const userValue = {name: 'test', id: 1}
    //     axiosMock.post.mockReturnValue(Promise.resolve({data:userValue}));
    //     const action = loginByUsername({name:'test', password:'test'});
    //     const result = await action(dispatch,getState, undefined);
    //
    //     expect(axiosMock.post).toHaveBeenCalledTimes(2)
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     // expect().toEqual();
    // })

    test('success return data', async ()=>{
        const userValue = {name: 'test', id: 1}
        axiosMock.post.mockReturnValue(Promise.resolve({data:userValue}));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username:'test', password:'test'});


        // expect(axiosMock.post).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
        // expect().toEqual();
    })

    test('error return data', async ()=>{
        axiosMock.post.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({username:'test', password:'test'});

        // expect(axiosMock.post).toHaveBeenCalledTimes(2)
        expect(result.meta.requestStatus).toBe('rejected')
        // expect().toEqual();
    })
})