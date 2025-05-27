import cls from './Drawer.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {memo, ReactNode} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Portal} from "shared/ui/Portal/Portal";
import {Overlay} from "shared/ui/Overlay/Overlay";
import {useModal} from "shared/lib/hooks/useModal/useModal";

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        isOpen,
    } = props;
    const { theme } = useTheme();

    const {closeHandler, isClosing, onContentClick} = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    })

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]:isClosing
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
