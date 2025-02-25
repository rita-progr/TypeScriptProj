import {classNames} from "shared/lib/classNames/classNames";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps{
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = ({className, short}:LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <CustomButton
            className={classNames("", {},[className])}
            onClick={toggle}
        >
            {short ? t('translate_short'):t('translate') }
        </CustomButton>
    )
}