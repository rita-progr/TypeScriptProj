import cls from './UserModal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {UserFormAsync} from "../UserForm/UserForm.async";
import {Modal} from "shared/ui/Modal/Modal";
import {Suspense} from "react";


export interface UserModalProps{
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}
 const UserModal = ({className, isOpen, onClose}:UserModalProps) => {

    return (
        <Modal className={classNames(cls.UserModal, {},[className])}
        isOpen={isOpen}
        onClose={onClose}>
            <Suspense fallback={""}>
                <UserFormAsync/>
            </Suspense>
        </Modal>
    )
}
export default UserModal;