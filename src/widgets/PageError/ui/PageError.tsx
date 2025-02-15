import cls from './PageError.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";

interface PageErrorProps{
    className?: string;
}

export const PageError = ({className}:PageErrorProps) => {

    const {t} = useTranslation();

    const onReload = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {},[className])}>
            <div>{t('Something went wrong')}</div>
            <CustomButton
            onClick={onReload}>{t('Reload page')}
            </CustomButton>
        </div>
    )
}