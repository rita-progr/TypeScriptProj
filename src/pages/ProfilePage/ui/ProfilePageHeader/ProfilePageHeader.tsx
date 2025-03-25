import cls from './ProfilePageHeader.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Text} from "shared/ui/Text/Text";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getReadOnly} from "entities/Profile";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {profileActions} from "entities/Profile/model/slice/profileSlice";
import {updateProfileData} from "entities/Profile/model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps{
    className?: string;
}

export const ProfilePageHeader = ({className}:ProfilePageHeaderProps) => {

    const readOnly = useSelector(getReadOnly);
    const dispatch = useAppDispatch();
    const {t} = useTranslation('profile');

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    },[dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    },[dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    },[dispatch])


    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
                <Text title={t('Профиль')}/>
            {readOnly ? (
                <CustomButton theme={ThemeButton.OUTLINE} onClick={onEdit}>
                    {t('Редактировать')}
                </CustomButton>
            ):(
                <>
                    <CustomButton theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit} className={cls.cancel}>
                        {t('Отменить')}
                    </CustomButton>
                    <CustomButton theme={ThemeButton.OUTLINE} onClick={onSave}>
                        {t('Сохранить')}
                    </CustomButton>
                </>
            )}

        </div>
    )
}