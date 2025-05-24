import {rtkApi} from "shared/api/rtkApi";
import {NotificationSchema} from "../model/types/NotificationSchema";

export const NotificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotification: build.query<NotificationSchema[], null>({
            query: () => ({
                url: '/notifications',
            })
        })
    })
})

export const { useGetNotificationQuery } = NotificationApi