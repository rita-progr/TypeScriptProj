import cls from './UserModal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {UserForm} from "../UserForm/UserForm";
import {Modal} from "shared/ui/Modal/Modal";
import {ColorButton, CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";

interface UserModalProps{
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const UserModal = ({className, isOpen, onClose}:UserModalProps) => {
    const {t} = useTranslation();
    return (
        <Modal className={classNames(cls.UserModal, {},[className])}
        isOpen={isOpen}
        onClose={onClose}>
            <UserForm/>
            <CustomButton color={ColorButton.INVERTED} theme={ThemeButton.BACKGROUND_INVERTED} className={cls.userBtn}>
                {t("Войти")}
            </CustomButton>
        </Modal>
    )
}