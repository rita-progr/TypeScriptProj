import cls from './CommentCard.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Comment} from "../../model/types/commentSchema";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Text} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = ({className, comment, isLoading}: CommentCardProps) => {

    if(isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={40} height={40} border={"50%"}/>
                    <Skeleton width={100} height={20}/>
                </div>
                <Skeleton width={"100%"} height={40}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar && <Avatar img={comment?.user.avatar} width={30} height={30}/>}
                <Text title={comment?.user.username}/>
            </div>
            <Text text= {comment?.text}/>
        </div>
    )
}