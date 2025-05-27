import {rtkApi} from "@/shared/api/rtkApi";

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
            query: () => ({
                url:'/articles',
                params:{
                    _limit:3
                }
            })
        }),
    }),
    overrideExisting: false,
})

export const useGetArticleRecommendationList = recommendationsApi.useGetArticleRecommendationListQuery