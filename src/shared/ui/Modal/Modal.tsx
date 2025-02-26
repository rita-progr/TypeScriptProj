import cls from './Modal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps{
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props:ModalProps) => {
    const ANIMATION_DELAY = 300;
    type Timeout = ReturnType<typeof setTimeout>;
    const timerRef = useRef<Timeout|null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const {
        children,
        className,
        isOpen,
        onClose,
    } = props;

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(()=>{
                onClose();
                setIsClosing(false);
            },ANIMATION_DELAY)
        }
    }, [onClose]);

    const onKeyDown = useCallback( (e:KeyboardEvent) => {
        if(e.key === 'Esc'){
            closeHandler();
        }
    },[closeHandler, isOpen]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(()=>{

        if(isOpen){
            window.addEventListener("keydown", onKeyDown);
        }

        return ()=>{
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        }
    },[isOpen, onKeyDown]);

    const mods:Record<string,boolean>={
        [cls.opened] : isOpen,
        [cls.isClosing]:isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods,[className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.modalContent} onClick={onContentClick}>
                    {children}
                </div>
            </div>
            </div>
        </Portal>
    )
}