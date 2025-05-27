
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {Text} from "@/shared/ui/Text/Text";
import {ArticleCardList} from "@/entities/Article";
import {useGetArticleRecommendationList} from "../../api/ArticleRecommendationApi";
interface ArticleRecommendationListProps {
    className?: string;
}



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