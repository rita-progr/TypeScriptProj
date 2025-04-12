import cls from './ArticleCardItem.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Article, ArticleBlockType, ArticleTEXTBlocks, ArticleViews} from "../../model/types/ArticleSchema";
import {Card} from "shared/ui/Card/Card";
import {Text} from "shared/ui/Text/Text";
import {Icon} from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/eyeIcon.svg";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {ArticleTextBlockComponent} from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";

interface ArticleCardItemProps {
    className?: string;
    article: Article;
    view: ArticleViews
    target?: string
}

export const ArticleCardItem = ({className, article, view, target}: ArticleCardItemProps) => {
    const {t} = useTranslation('article');

    const views = (
        <div className={cls.views}>
            <Text text={String(article?.views)}/>
            <Icon Svg={EyeIcon}/>
        </div>
    )

    const types = (
        <Text text={article.type.join(',  ')} className={cls.types}/>
    )


    if (view == ArticleViews.BIG) {
        const textBlock = article.blocks.find((item) => item.type === ArticleBlockType.TEXT) as ArticleTEXTBlocks
        return (
            <div className={classNames(cls.ArticleCardItem, {}, [className, cls[view]])}>
                <CustomLink to={`${RoutePath.article_details}${article.id}`}  target={target}>
                    <Card className={cls.card}>
                        <div className={cls.userInfo}>
                            <Avatar img={article.user?.avatar} height={30} width={30}/>
                            <Text text = {article.user?.username}/>
                        </div>
                        <Text title={article.title} className={cls.title}/>
                        {types}
                        <img src={article.img} alt="" className={cls.ImgWrapper}/>
                        {textBlock && <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        /> }
                     <div className={cls.footer}>
                         <CustomButton theme={ThemeButton.OUTLINE}>{t('Читать далее...')}</CustomButton>
                         {views}
                     </div>
                    </Card>
                </CustomLink>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleCardItem, {}, [className, cls[view]])}>
            <CustomLink to={`${RoutePath.article_details}${article.id}`} target={target}>
                <Card className={cls.card}>
                    <div className={cls.ImgWrapper}>
                        <img src={article?.img} alt=""/>
                        <Text className={cls.date} text={article?.createdAt}/>
                    </div>
                    <div className={cls.TypesWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text title={article?.title} className={cls.title}/>
                </Card>
            </CustomLink>
        </div>
    )
}