import cls from './Modal.module.scss';
import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "@/shared/ui/Portal/Portal";
import {useTheme} from "@/app/providers/ThemeProvider";
import {Overlay} from "@/shared/ui/Overlay/Overlay";
import {useModal} from "@/shared/lib/hooks/useModal/useModal";

interface ModalProps{
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props:ModalProps) => {
    const {theme} = useTheme();
    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;

   const {isClosing, closeHandler, onContentClick } = useModal({
       animationDelay: 300,
       onClose,
       isOpen,
   })


    const mods:Mods={
        [cls.opened] : isOpen,
        [cls.isClosing]:isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods,[className, theme])}>
                <Overlay onClick={closeHandler}/>
                <div className={cls.modalContent} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    )
}