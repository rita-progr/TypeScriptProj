import {classNames} from "shared/lib/classNames/classNames";
import {Text} from "shared/ui/Text/Text";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "entities/User";
import {HStack} from "shared/ui/Stack";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getReadOnly} from "../../model/selectors/getReadOnly/getReadOnly";
import {profileActions} from "../../model/slice/profileSlice";
import {updateProfileData} from "../../model/services/updateProfileData/updateProfileData";

interface ProfilePageHeaderProps{
    className?: string;
}

export const ProfilePageHeader = ({className}:ProfilePageHeaderProps) => {
    const profileData = useSelector(getProfileData);
    const authData = useSelector(getUserAuthData);
    const edit = profileData?.id  === authData?.id
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
        <HStack max align={"center"} justify={"between"} className={classNames("", {}, [className])}>
                <Text title={t('Профиль')}/>
            {edit && (
                <>
                    {readOnly ? (
                        <CustomButton theme={ThemeButton.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </CustomButton>
                    ):(
                        <HStack gap={"32"}>
                            <CustomButton theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit} className={""}>
                                {t('Отменить')}
                            </CustomButton>
                            <CustomButton theme={ThemeButton.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </CustomButton>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    )
}