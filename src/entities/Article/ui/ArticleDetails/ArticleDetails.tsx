import cls from './ArticleDetails.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useCallback, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchArticleById} from "entities/Article/model/services/fetchArticleById";
import {DynemicModuleLoader} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {ArticleReducer} from "../../model/slice/ArticleSlice";
import {getArticleData, getArticleError, getArticleIsLoading} from "../../model/selectors/ArticleSelectors";
import {useSelector} from "react-redux";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Icon} from "shared/ui/Icon/Icon";
import EyeIcon from 'shared/assets/eyeIcon.svg';
import CalendarIcon from 'shared/assets/calendarIcon.svg';
import {ArticleBlocks, ArticleBlockType} from "../../model/types/ArticleSchema";
import {ArticleCodeBlockComponent} from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleTextBlockComponent} from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {ArticleImageBlockComponent} from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers = {
    articles: ArticleReducer
}

export const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
    const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)
    const data = useSelector(getArticleData)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id]);

    let content;

    const renderBlocks = useCallback((block: ArticleBlocks)=>{
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent block={block}  className={cls.block}/>
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent block={block} className={cls.block}/>
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent block={block} className={cls.block}/>
            default:
                return null;
        }
    },[])

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
                <>
                    <div className={cls.avatarWrapper}>
                        <Avatar img={data?.img} height={150} width={150}/>
                    </div>
                    <Text title={data?.title}/>
                    <Text title={data?.subtitle}/>
                    <div className={cls.info}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text text={String(data?.views)}/>
                    </div>
                    <div className={cls.info}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text text={data?.createdAt}/>
                    </div>
                    {data?.blocks.map(renderBlocks)}
                </>
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