import cls from './Notification.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {useGetNotificationQuery} from "@/entities/Notification/api/NotificationApi";
import {VStack} from "@/shared/ui/Stack";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";
import {Text} from '@/shared/ui/Text/Text'
import {NotificationItem} from "@/entities/Notification/ui/NotificationItem/NotificationItem";

interface NotificationProps {
    className?: string;
}

export const Notification = ({className}: NotificationProps) => {

    const {data, isLoading} = useGetNotificationQuery(null)

    if(isLoading || !data){
        return (
            <VStack className={classNames(cls.Notification, {}, [className])}>
                <Skeleton border={"8"} height={30} width={300}/>
                <Skeleton border={"8"} height={30} width={300}/>
                <Skeleton border={"8"} height={30} width={300}/>
            </VStack>
            )
    }

    return (
        <VStack className={classNames(cls.Notification, {}, [className])}>
            {data?.map(item=>(
              <NotificationItem item={item} key={item.id}/>
            ))}
        </VStack>

    )
}