import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const baseUrl = __IS_DEV__ ? "http://localhost:8000" : "http://server";

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: headers => {
        const token = localStorage.getItem(USER_LOCALSTORAGE_KEY || '');
        if(token){
            headers.set('Authorization', token);
        }
        } }),
    endpoints: (build) => ({
    }),
})
