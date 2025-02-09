import cls from './Main.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
const Main = () => {
    return (
        <div className={classNames(cls.Main,{},[])}>
            Main Page
        </div>
    )
}
export default Main;