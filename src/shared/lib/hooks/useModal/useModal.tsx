import {useCallback, useEffect, useRef, useState} from "react";

export interface ModalProps {
    onClose?: () => void;
    animationDelay: number;
    isOpen?: boolean;
}

export function useModal({onClose, animationDelay, isOpen}:ModalProps){
    const timerRef = useRef<Timeout|null>(null);
    const [isClosing, setIsClosing] = useState(false);
    type Timeout = ReturnType<typeof setTimeout>;

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timerRef.current = setTimeout(()=>{
                onClose();
                setIsClosing(false);
            },animationDelay)
        }
    }, [onClose]);

    const onKeyDown = useCallback( (e:KeyboardEvent) => {
        if(e.key === 'Esc'){
            closeHandler();
        }
    },[closeHandler]);

    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(()=>{

        if(isOpen){
            window.addEventListener("keydown", onKeyDown);
        }

        return ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            window.removeEventListener("keydown", onKeyDown);
        }
    },[isOpen, onKeyDown]);

    return {
        isClosing,
        onContentClick,
        closeHandler
    }
}