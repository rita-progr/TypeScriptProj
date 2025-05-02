// import {screen} from "@testing-library/react";
// import {userEvent} from "@testing-library/user-event";
// import {EditableProfileCard} from "./EditableProfileCard";
// import {renderComponents} from "shared/lib/tests/renderComponent/RenderComponents";
// import {Currency} from "entities/Currency";
// import {Country} from "entities/Country";
// import {profileReducer} from "features/editableProfileCard/model/slice/profileSlice";
//
//
// const options = {
//     initialState:{
//         profile:{
//             data:{
//                 id:'1',
//                 first: "admin",
//                 lastName: "admin",
//                 age:17,
//                 currency: Currency.USD,
//                 country: Country.RUSSIAN,
//                 city:'Russia'
//             }
//         },
//         user: {
//             authData:{
//                 id:'1',
//                 username:'admin'
//             }
//         }
//     },
//
// }
//
//
// describe('CustomButton',()=>{
//     test('test render', async ()=>{
//         renderComponents(<EditableProfileCard id={'1'}/>,{
//             initialState:{
//                 profile:{
//                     data:{
//                         id:'1',
//                         first: "admin",
//                         lastname: "admin",
//                         age:17,
//                         currency: Currency.USD,
//                         country: Country.RUSSIAN,
//                         city:'Russia'
//                     }
//                 },
//                 user: {
//                     authData:{
//                         id:'1',
//                         username:'admin'
//                     }
//                 }
//             },
//             asyncReducers:{
//                 profile: profileReducer
//             }
//
//         } )
//         await userEvent.click(screen.getByTestId('ProfileCard.EditButton'));
//         expect(screen.getByTestId('ProfileCard.CancelButton')).toBeInTheDocument()
//     })
//
//
// })