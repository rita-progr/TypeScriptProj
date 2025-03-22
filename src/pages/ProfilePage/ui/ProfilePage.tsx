import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useEffect} from "react";
import {fetchProfileData, ProfileCard} from "entities/Profile";
import {DynemicModuleLoader} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";
import {profileReducer} from "entities/Profile/model/slice/profileSlice";

const reducers = {
    profile: profileReducer,
}

interface ProfilePageProps{
    className?: string;
}

 const ProfilePage = ({className}:ProfilePageProps) => {

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchProfileData());
    },[dispatch]);

    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {},[className])}>
                <ProfileCard/>
            </div>
       </DynemicModuleLoader>
    )
}
export default ProfilePage;