import cls from './Drawer.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {memo, ReactNode} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {Portal} from "shared/ui/Portal/Portal";
import {Overlay} from "shared/ui/Overlay/Overlay";

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

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});
