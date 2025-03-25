import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const baseUrl = __IS_DEV__ ? "http://localhost:8000" : "http://server";

export const $api = axios.create({
    baseURL:baseUrl,
    headers:{
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})