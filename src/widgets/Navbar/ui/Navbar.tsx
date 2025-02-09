import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomLink} from "shared/ui/CustomLink/CustomLink";

interface NavbarProps{
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {},[className])}>
            <CustomLink to={'/'}>
                Главная
            </CustomLink>
            <CustomLink to={'/about'}>
                О нас
            </CustomLink>
        </div>
    )
}
