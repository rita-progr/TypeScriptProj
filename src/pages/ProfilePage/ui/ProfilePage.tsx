import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ProfilePageProps{
    className?: string;
}

 const ProfilePage = ({className}:ProfilePageProps) => {
    return (
        <div className={classNames(cls.ProfilePage, {},[className])}>
            <p>PROFILE PAGE</p>
        </div>
    )
}
export default ProfilePage;