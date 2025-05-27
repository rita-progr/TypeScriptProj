import cls from './NotificationItem.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Text} from "@/shared/ui/Text/Text";
import {NotificationSchema} from "../../model/types/NotificationSchema";

interface NotificationItemProps {
    className?: string;
    item: NotificationSchema;
}

export const NotificationItem = ({className, item}: NotificationItemProps) => {

    if(item.href){
        return (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
                <div className={classNames(cls.NotificationItem, {}, [className])}>
                    <Text text={item.title}/>
                    <Text text={item.description}/>
                </div>
            </a>

        )
    }

    return (
        <div className={classNames(cls.NotificationItem, {}, [className])}>
            <Text text={item.title}/>
            <Text text={item.description}/>
        </div>
    )
}