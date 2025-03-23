import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useCallback, useEffect} from "react";
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

    useEffect(()=>{
        dispatch(fetchProfileData());
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


     return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {},[className])}>
                <ProfilePageHeader/>
                <ProfileCard isLoading={isLoading}
                             error={error}
                             data={formData}
                             onChangeLastname={onChangeLastname}
                             onChangeFirstname={onChangeFirstname}
                             onChangeAge={onChangeAge}
                             onChangeCity={onChangeCity}
                             readOnly={readOnly}/>
            </div>
       </DynemicModuleLoader>
    )
}
export default ProfilePage;