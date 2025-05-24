import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {memo, useCallback, useState} from "react";
import {UserModal} from "features/AuthByUserName";
import {ColorButton, CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {DropDown, Popover} from "shared/ui/Popups";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Button} from "@headlessui/react";
import NotificationIcon from 'shared/assets/NotificationIcon.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {Notification} from "entities/Notification";



interface NavbarProps{
    className?: string;
}

export const Navbar = memo(function Navbar({className}:NavbarProps) {

    const [isAutModalOpen, setIsAutModalOpen] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAutModalOpen(false)
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAutModalOpen(true)
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const {t} = useTranslation();

    if(userData){
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Popover className={cls.popover} direction={'bottom left'} trigger={(
                    <Button>
                        <Icon Svg={NotificationIcon} inverted={true}/>
                    </Button>
                )}>
                    <Notification />
                </Popover>

                <DropDown items={[
                    {
                        content:t("Выйти"),
                        id:'12',
                        onClick: onLogout
                    },
                ]}
                trigger={<Avatar size = {30} img={userData.avatar}/>}/>

            </header>
                )
                }

        return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            {isAutModalOpen &&
                <UserModal onClose={onCloseModal} isOpen={isAutModalOpen}/>
            }
            <CustomButton onClick={onOpenModal} color={ColorButton.INVERTED}>
                {t("Войти")}
            </CustomButton>
        </header>
        )

        })
