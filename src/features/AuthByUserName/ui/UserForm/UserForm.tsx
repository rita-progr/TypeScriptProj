import cls from './UserForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input";
import { useSelector} from "react-redux";
import {getUsername} from "../../model/selectors/getAuthByUserName/getAuthByUserName";

import {loginByUsername} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import {memo, useCallback} from "react";
import {ColorButton, CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {loginActions, loginReducer} from "../../model/slice/AuthByUserName";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getPassword} from "../../model/selectors/getAuthByPassword/getAuthByPassword";
import {getLoading} from "../../model/selectors/getAuthByLoading/getAuthByLoading";
import {getError} from "../../model/selectors/getAuthByError/getAuthByError";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";


export interface UserFormProps{
    className?: string;
    onSuccess?:() => void;
}

const intialReducer: ReducersList = {
    login: loginReducer
}

const UserForm = memo( function UserForm({className, onSuccess}:UserFormProps) {
    const {t} = useTranslation();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const dispatch = useAppDispatch();


    const onUserNameChange = (value:string) => {
        dispatch(loginActions.setUserName(value));
    }

    const onPasswordChange = (value:string) => {
        dispatch(loginActions.setPassword(value));
    }

    const onLoginClick = useCallback( async () => {
        const res = await dispatch( loginByUsername ({ username, password}))
        if(res.meta.requestStatus === 'fulfilled'){
            if (onSuccess) {
                onSuccess();
            }
        }
    },[dispatch, onSuccess, password, username])



    return (
        <DynemicModuleLoader reducers={intialReducer}>
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
        </DynemicModuleLoader>

    )
})
export default UserForm;