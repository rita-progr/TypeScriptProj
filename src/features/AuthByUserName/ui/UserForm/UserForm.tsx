import cls from './UserForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../model/selectors/getAuthByUserName/getAuthByUserName";

import {loginByUsername} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import {useCallback} from "react";
import {ColorButton, CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {AppDispatch} from "app/providers/StoreProveder";
import {loginActions} from "../../model/slice/AuthByUserName";
import {Text, TextTheme} from "shared/ui/Text/Text";


interface UserFormProps{
    className?: string;
}

export const UserForm = ({className}:UserFormProps) => {
    const {t} = useTranslation();
    const {username, password, error, isLoading} = useSelector(getLogin);
    const dispatch: AppDispatch = useDispatch();


    const onUserNameChange = (value:string) => {
        dispatch(loginActions.setUserName(value));
    }

    const onPasswordChange = (value:string) => {
        dispatch(loginActions.setPassword(value));
    }

    const onLoginClick = useCallback(() => {
        dispatch( loginByUsername ({ username, password}))
    },[dispatch, password, username])

    return (
        <div className={classNames(cls.UserForm, {}, [className])}>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <div className={cls.Input}>
                <Input placeholder={'Введите логин'}
                value={username}
                onChange={onUserNameChange}/>
                <Input placeholder={'Введите пароль'}
                value={password}
                onChange={onPasswordChange}/>
            </div>
            <CustomButton color={ColorButton.INVERTED}
                          theme={ThemeButton.BACKGROUND_INVERTED}
                          className={cls.userBtn}
                          onClick={onLoginClick}
            disabled={isLoading}>
                {t("Войти")}
            </CustomButton>
        </div>
    )
}