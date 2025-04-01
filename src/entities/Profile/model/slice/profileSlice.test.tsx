// import {profileReducer, profileActions} from "./profileSlice";
// import {ProfileSchema} from "entities/Profile";
// import {validateProfileErrors} from "../types/ProfileSchema";
// import {updateProfileData} from "entities/Profile/model/services/updateProfileData/updateProfileData";
//
// const data = {
//     first: 'Рита',
//     lastname: 'Афанасьева',
//     age: 17 ,
//     city: 'Санкт-Петербург',
//     username: '@ritaaa969',
// }
//
// describe('profileSlice.test', () => {
//     test('readonly', ()=>{
//         const state: Partial<ProfileSchema> = {
//             readonly:false
//         }
//         expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({readonly :true});
//     })
//
//     test('pending service', ()=>{
//         const state: Partial<ProfileSchema> = {
//             isLoading:false,
//             validateErrors: [validateProfileErrors.SERVER_DATA]
//         }
//         expect(profileReducer(state as ProfileSchema,updateProfileData.pending)).toEqual({isLoading:true,validateErrors:[]});
//     })
//
//     test('fullfiled service', ()=>{
//         const state: Partial<ProfileSchema> = {
//             isLoading:true,
//         }
//         expect(profileReducer(state as ProfileSchema,updateProfileData.fulfilled(data,''))).toEqual({isLoading:false,
//             validateProfileErrors: undefined,
//             readonly:true,
//         form:data,
//         data:data});
//     })
//
//     // test('decrement', ()=>{
//     //     const state: CounterSchema = {
//     //         value: 10,
//     //     }
//     //     expect(profileReducer(state, profileActions.decrement())).toEqual({value: 9});
//     // })
//     //
//     // test('should work with empty state', ()=>{
//     //     expect(profileReducer(undefined, profileActions.increment())).toEqual({value: 1});
//     // })
// })