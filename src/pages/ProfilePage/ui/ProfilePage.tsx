import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useCallback, useEffect} from "react";
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getReadOnly,
    ProfileCard
} from "entities/Profile";
import {DynemicModuleLoader} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {profileActions, profileReducer} from "entities/Profile/model/slice/profileSlice";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {
    getProfileValidateError
} from "entities/Profile/model/selectors/getProfileValidateError/getProfileValidateError";

const reducers = {
    profile: profileReducer,
}

interface ProfilePageProps{
    className?: string;
}

 const ProfilePage = ({className}:ProfilePageProps) => {

    const dispatch = useAppDispatch();

     const formData = useSelector(getProfileForm);
     const error = useSelector(getProfileError);
     const isLoading = useSelector(getProfileLoading) || false;
     const readOnly = useSelector(getReadOnly) || false;
     const validateErrors = useSelector(getProfileValidateError);

    useEffect(()=>{
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchProfileData());
        }
    },[dispatch]);

    const onChangeFirstname = useCallback((value:string)=>{
        dispatch(profileActions.updateProfile({first:value}));
    },[dispatch])

     const onChangeLastname = useCallback((value:string)=>{
         dispatch(profileActions.updateProfile({lastname:value}));
     },[dispatch])

     const onChangeAge = useCallback((value:string)=>{
         dispatch(profileActions.updateProfile({age:Number(value)}));
     },[dispatch])

     const onChangeCity = useCallback((value:string)=>{
         dispatch(profileActions.updateProfile({city:value}));
     },[dispatch])

     const onChangeAvatar = useCallback((value:string)=>{
         dispatch(profileActions.updateProfile({avatar:value}));
     },[dispatch])

     const onChangeCurrency = useCallback((value:Currency)=>{
         dispatch(profileActions.updateProfile({currency:value}));
     },[dispatch])

     const onChangeCountry = useCallback((value:Country)=>{
         dispatch(profileActions.updateProfile({country: value}));
     },[dispatch])

     return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {},[className])}>
                <ProfilePageHeader/>
                {validateErrors &&
                    (validateErrors.map((error)=>(
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
            </div>
       </DynemicModuleLoader>
    )
}
export default ProfilePage;