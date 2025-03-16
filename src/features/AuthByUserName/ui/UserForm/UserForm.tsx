import cls from './UserForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector, useStore} from "react-redux";
import {getUsername} from "../../model/selectors/getAuthByUserName/getAuthByUserName";

import {loginByUsername} from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import {memo, useCallback, useEffect} from "react";
import {ColorButton, CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {AppDispatch, ReduxWithStoreManager} from "app/providers/StoreProveder";
import {loginActions, loginReducer} from "../../model/slice/AuthByUserName";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getPassword} from "../../model/selectors/getAuthByPassword/getAuthByPassword";
import {getLoading} from "../../model/selectors/getAuthByLoading/getAuthByLoading";
import {getError} from "../../model/selectors/getAuthByError/getAuthByError";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";


export interface UserFormProps{
    className?: string;
}

const intialReducer: ReducersList = {
    login: loginReducer
}

const UserForm = memo(({className}:UserFormProps) => {
    const {t} = useTranslation();
    const name = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getLoading);
    const error = useSelector(getError);
    const dispatch: AppDispatch = useDispatch();


    const onUserNameChange = (value:string) => {
        dispatch(loginActions.setUserName(value));
    }

    const onPasswordChange = (value:string) => {
        dispatch(loginActions.setPassword(value));
    }

    const onLoginClick = useCallback(() => {
        dispatch( loginByUsername ({ name, password}))
    },[dispatch, password, name])



    return (
        <DynemicModuleLoader reducers={intialReducer}>
            <div className={classNames(cls.UserForm, {}, [className])}>
                {error && <Text text={error} theme={TextTheme.ERROR}/>}
                <div className={cls.Input}>
                    <Input placeholder={'Введите логин'}
                           value={name}
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
UserForm.displayName = 'UserForm';
export default UserForm;