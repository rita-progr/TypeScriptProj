import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useCallback, useState} from "react";
import {UserModal} from "features/AuthByUserName";
import {ColorButton, CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";



interface NavbarProps{
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {

    const [isAutModalOpen, setIsAutModalOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAutModalOpen(false)
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAutModalOpen(true)
    }, []);

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {},[className])}>
            <UserModal onClose = {onCloseModal} isOpen={isAutModalOpen}/>
            <CustomButton onClick={onOpenModal} color={ColorButton.INVERTED}>
                {t("Войти")}
            </CustomButton>
        </div>
    )
}
