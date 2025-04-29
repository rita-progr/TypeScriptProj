import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {Text} from "shared/ui/Text/Text";
import {ArticleCardList} from "entities/Article";
import {rtkApi} from "shared/api/rtkApi";
import {HStack} from "shared/ui/Stack";

interface ArticleRecommendationListProps {
    className?: string;
}

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

const useGetArticleRecommendationList = recommendationsApi.useGetArticleRecommendationListQuery

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { data, isLoading} = useGetArticleRecommendationList(3);
    console.log(data);
    const { t } = useTranslation();

    if(isLoading){
        return null;
    }
    return (
        <>
            <Text title={t('Рекомендации')}/>
            <ArticleCardList articles={data}  target={`_blank`}/>
        </>
    );
});