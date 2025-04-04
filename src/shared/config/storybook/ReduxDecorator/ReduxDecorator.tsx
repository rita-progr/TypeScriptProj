import {StoreProvider} from "app/providers/StoreProveder";
import {profileReducer} from "entities/Profile/model/slice/profileSlice";
import {ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {loginReducer} from "features/AuthByUserName";
import {ArticleReducer} from "entities/Article/model/slice/ArticleSlice";

// const defaultAsyncReducers: ReducersList = {
//     login:  loginReducer,
//     profile: profileReducer,
//     articles: ArticleReducer,
// };


export const ReduxDecorator = (Story : React.ComponentType) => (
        <StoreProvider >
            <Story />
        </StoreProvider>
);