import {updateProfileData} from "./updateProfileData";
import {TestAsyncThunk} from "../../../../../shared/lib/testAsuncThunk/TestAsyncThunk";


const data = {
    first: 'Рита',
    lastname: 'Афанасьева',
    age: 17 ,
    city: 'Санкт-Петербург',
    username: '@ritaaa969',
}

describe('fetchProfileData.test', () => {

    test('success return data', async ()=>{
        const thunk = new TestAsyncThunk(updateProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('fulfilled')

    })

})