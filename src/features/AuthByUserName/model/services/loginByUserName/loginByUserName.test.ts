import axios from 'axios';
import {loginByUsername} from "./loginByUserName";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProveder";

jest.mock('axios');
const axiosMock = axios as  jest.Mocked<typeof axios>;

describe('loginByUserName.test', () => {
    let dispatch:Dispatch;
    let getState: ()=>StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })

    test('success return data', async ()=>{
        axiosMock.post.mockReturnValue(Promise.resolve({data:{username: 'test', id: 1}}));
        const action = loginByUsername({username:'test', password:'test'});
        const result = await action(dispatch,getState, undefined);
        console.log(result);
        // expect().toEqual();
    })
})