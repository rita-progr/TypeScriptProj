import cls from './ArticleDetaisHeader.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {canEditArticle} from "pages/ArticleDetailsPage/model/selectors/canEditArticle";

interface ArticleDetaisHeaderProps {
    className?: string;
}

export const ArticleDetailsHeader = ({className}: ArticleDetaisHeaderProps) => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const backToList = useCallback(()=>{
        navigate(RoutePath.articles)
    },[navigate])
    const isEdit = useSelector(canEditArticle)
    return (
        <div className={classNames(cls.ArticleDetaisHeader, {}, [className])}>
            <CustomButton onClick={backToList} theme={ThemeButton.OUTLINE}>{t('Назад')}</CustomButton>
            { isEdit && <CustomButton onClick={backToList} className={cls.BtnEdit} theme={ThemeButton.OUTLINE}>{t('Редактировать')}</CustomButton>}
        </div>
    )
}