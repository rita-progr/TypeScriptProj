import cls from './Main.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Counter} from "entities/Counter";


const Main = () => {
    const {t} = useTranslation('main')

    return (
        <div className={classNames(cls.Main,{},[])} data-testId = "main">
            {t('main')}
            <Counter />
        </div>
    )
}
export default Main;