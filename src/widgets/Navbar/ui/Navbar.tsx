import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ColorButton, CustomButton} from "shared/ui/CustomButton/CustomButton";
import {Modal} from "shared/ui/Modal/Modal";
import {useCallback, useState} from "react";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {

    const [isAutModalOpen, setIsAutModalOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAutModalOpen(!isAutModalOpen)
    }, [isAutModalOpen]);

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {},[className])}>
            <CustomButton onClick={onToggleModal} color={ColorButton.INVERTED}>
                {t("Войти")}
            </CustomButton>
            <Modal isOpen={isAutModalOpen} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, voluptatibus?
            </Modal>
        </div>
    )
}
