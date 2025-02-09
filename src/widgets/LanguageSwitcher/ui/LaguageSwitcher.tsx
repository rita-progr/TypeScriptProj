import cls from './LanguageSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps{
    className?: string;
}

export const LanguageSwitcher = ({className}:LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <CustomButton
            className={classNames(cls.LanguageSwitcher, {},[className])}
            onClick={toggle}
        >
            {t('translate')}
        </CustomButton>
    )
}