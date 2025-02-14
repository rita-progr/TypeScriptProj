import cls from './NotFound.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface NotFoundProps{
    className?: string;
}

export const NotFound = ({className}:NotFoundProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.NotFound, {},[className])}>
            {t('Страница не найдена')}
        </div>
    )
}