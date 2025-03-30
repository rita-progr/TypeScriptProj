import {validateData} from "./validateData";
import {validateProfileErrors} from "../../types/ProfileSchema";


const data = {
    first: 'Рита',
    lastname: 'Афанасьева',
    age: 17 ,
    city: 'Санкт-Петербург',
    username: '@ritaaa969',
}

describe('validateData.test', () => {

    test('success return data', async ()=>{
        const result = validateData(data);
        expect(result).toEqual([])
    })

    test('validateData without lastname and firsnamet', async ()=>{
        const result = validateData({...data, lastname: '', first: ''});
        expect(result).toEqual([
            validateProfileErrors.INCORRECT_USERDATA
        ])
    })

    test('validateData without age', async ()=>{
        const result = validateData({...data, age: undefined });
        expect(result).toEqual([
            validateProfileErrors.INCORRECT_AGE
        ])
    })


    test('validateData without data', async ()=>{
        const result = validateData({});
        expect(result).toEqual([
            validateProfileErrors.INCORRECT_USERDATA,
            validateProfileErrors.INCORRECT_AGE,
        ])
    })
})