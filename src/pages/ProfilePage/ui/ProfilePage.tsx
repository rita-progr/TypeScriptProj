import cls from './ProfilePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useParams} from "react-router-dom";
import {VStack} from "shared/ui/Stack";
import {EditableProfileCard} from "features/editableProfileCard";

interface ProfilePageProps{
    className?: string;
}

 const ProfilePage = ({className}:ProfilePageProps) => {
     const {id} = useParams<{id:string}>();

     if(!id){
         return null;
     }

     return (
            <VStack gap = {"16"} className={classNames(cls.ProfilePage, {},[className])}>
                <EditableProfileCard id = {id}/>
            </VStack>
    )
}
export default ProfilePage;