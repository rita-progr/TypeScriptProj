import cls from './ArticleDetails.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "entities/Article/model/services/fetchArticleById";
import {DynemicModuleLoader} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {ArticleReducer} from "../../model/slice/ArticleSlice";
import {getArticleData, getArticleError, getArticleIsLoading} from "../../model/selectors/ArticleSelectors";
import {useSelector} from "react-redux";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers = {
    articles: ArticleReducer
}

export const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
    // const isLoading = useSelector(getArticleIsLoading)
    const isLoading = true;
    const error = useSelector(getArticleError)
    const data = useSelector(getArticleData)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id]);

    let content;

    if(isLoading){
        content = (
            <div>
                <Skeleton className = {cls.avatar} width={100} height={100} border = {'50%'} />
                <Skeleton className = {cls.title} width={300} height={32} />
                <Skeleton className = {cls.title} width={300} height={32} />
                <Skeleton className = {cls.title} width={'100%'} height={200} />
                <Skeleton className = {cls.title} width={'100%'} height={200} />
            </div>
        )
    }else if(error){
        content = (
            <Text title = {error} theme={TextTheme.ERROR} align={TextAlign.CENTER}></Text>
        )
    }else{
        content = (
            <div>details</div>
        )
    }

    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynemicModuleLoader>
        )
   }