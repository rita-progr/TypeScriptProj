import { useTranslation } from 'react-i18next';
import {memo, useCallback} from 'react';
import {ProfilePageHeader} from "../ProfilePageHeader/ProfilePageHeader";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {ProfileCard} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {profileActions, profileReducer} from "../../model/slice/profileSlice";
import {useSelector} from "react-redux";
import {getProfileForm} from "../../model/selectors/getProfileForm/getProfileForm";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {getProfileLoading} from "../../model/selectors/getProfileLoading/getProfileLoading";
import {getReadOnly} from "../../model/selectors/getReadOnly/getReadOnly";
import {
    getProfileValidateError
} from "../../model/selectors/getProfileValidateError/getProfileValidateError";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {DynemicModuleLoader} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers = {
    profile: profileReducer,
}

export const EditableProfileCard = memo(function EditableProfileCard(props: EditableProfileCardProps) {
    const {className, id} = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading) || false;
    const readOnly = useSelector(getReadOnly) || false;
    const validateErrors = useSelector(getProfileValidateError);

    useInitEffect(() => {
        if (id != null) {
            dispatch(fetchProfileData(id));
        }
    })

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({first: value}));
    }, [dispatch])

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({lastname: value}));
    }, [dispatch])

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({age: Number(value)}));
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({city: value}));
    }, [dispatch])

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({avatar: value}));
    }, [dispatch])

    const onChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({currency: value}));
    }, [dispatch])

    const onChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({country: value}));
    }, [dispatch])
    return (
        <DynemicModuleLoader reducers={reducers}>
            <ProfilePageHeader/>
            {validateErrors &&
                (validateErrors.map((error:string)=>(
                    <Text text={error} theme={TextTheme.ERROR} key = {error}/>
                )))
            }
            <ProfileCard isLoading={isLoading}
                         error={error}
                         data={formData}
                         onChangeLastname={onChangeLastname}
                         onChangeFirstname={onChangeFirstname}
                         onChangeAge={onChangeAge}
                         onChangeCity={onChangeCity}
                         onChangeAvatar={onChangeAvatar}
                         onChangeCurrency={onChangeCurrency}
                         onChangeCountry={onChangeCountry}
                         readOnly={readOnly}/>
        </DynemicModuleLoader>
    );
});