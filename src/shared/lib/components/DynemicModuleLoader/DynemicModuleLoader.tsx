import {FC, ReactNode, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {AppDispatch, ReduxWithStoreManager} from "app/providers/StoreProveder";
import {Reducer} from "@reduxjs/toolkit";
import {StateSchemaKeys} from "app/providers/StoreProveder/config/StateSchema";

export type ReducersList = {
    [name in StateSchemaKeys]?: Reducer
}



interface DynemicModuleLoaderProps{
    children?: ReactNode;
    reducers?: ReducersList;
}

export const DynemicModuleLoader: FC<DynemicModuleLoaderProps> = (props) => {
    const {children, reducers = {}} = props;
    const store = useStore() as ReduxWithStoreManager;
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name,reducer])=>{
            store.reducerManager.add(name as StateSchemaKeys , reducer);
            dispatch({type: `@INIT ${name} reducer`});
        })

        return ()=>{
            Object.entries(reducers).forEach(([name])=>{
                store.reducerManager.remove('login');
                dispatch({type: `@DESTROY ${name} reducer`});
            })

        }
        //eslint-disable-next-line
    }, []);
    return (
    <>
        { children }
    </>
    )
}