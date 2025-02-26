import cls from './Main.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation('main')

    return (
        <div className={classNames(cls.Main,{},[])}>
            {t('main')}
        </div>
    )
}
export default Main;