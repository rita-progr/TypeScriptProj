import {StateSchema, StoreProvider} from "app/providers/StoreProveder";
import {profileReducer} from "entities/Profile/model/slice/profileSlice";
import {ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {loginReducer} from "features/AuthByUserName";

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
};



export const ReduxDecorator = (state: Partial<StateSchema>, asyncReducers?: ReducersList)=> (StoryComponent: React.ComponentType) => (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent />
        </StoreProvider>
);