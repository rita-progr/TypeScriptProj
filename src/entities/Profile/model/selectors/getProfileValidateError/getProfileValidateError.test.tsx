import {StateSchema} from "app/providers/StoreProveder";
import {getProfileValidateError} from "./getProfileValidateError";
import {validateProfileErrors} from "../../types/ProfileSchema";


describe('getProfileValidateError', () => {
    test('should return correct object', ()=>{

        const state: Partial<StateSchema> = {
            profile:{
                validateErrors: [
                    validateProfileErrors.SERVER_DATA,
                    validateProfileErrors.NO_DATA,
                    validateProfileErrors.INCORRECT_AGE,
                    validateProfileErrors.INCORRECT_USERDATA
                ]
            }
        }

        expect(getProfileValidateError(state as StateSchema)).toEqual( [
            validateProfileErrors.SERVER_DATA,
            validateProfileErrors.NO_DATA,
            validateProfileErrors.INCORRECT_AGE,
            validateProfileErrors.INCORRECT_USERDATA
        ]);
    })


    test('empty state', ()=>{
        const state: Partial<StateSchema> = {}
        expect(getProfileValidateError(state as StateSchema)).toEqual([]);

    })
})