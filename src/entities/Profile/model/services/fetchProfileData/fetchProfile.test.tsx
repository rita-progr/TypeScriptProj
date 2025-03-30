import axios from 'axios';
import {fetchProfileData} from "./fetchProfileData";
import {TestAsyncThunk} from "../../../../../shared/lib/testAsuncThunk/TestAsyncThunk";

jest.mock('axios');
const axiosMock = axios as  jest.Mocked<typeof axios>;

const data = {
    first: 'Рита',
    lastname: 'Афанасьева',
    age: 17 ,
    city: 'Санкт-Петербург',
    username: '@ritaaa969',
}

describe('fetchProfileData.test', () => {

    test('success return data', async ()=>{
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();
        // expect(axiosMock.post).toHaveBeenCalledTimes(3)
        expect(result.meta.requestStatus).toBe('fulfilled')
        // expect().toEqual();
    })

})