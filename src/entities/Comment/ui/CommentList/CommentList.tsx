import cls from './CommentList.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CommentCard} from "../CommentCard/CommentCard";
import {Comment} from '../../model/types/commentSchema';
import {Text} from 'shared/ui/Text/Text'
import {useTranslation} from "react-i18next";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ?
                comments?.map((comment: Comment) => (
                    <CommentCard comment={comment} key={comment.id} isLoading = {isLoading}/>
                )) :
                <Text text={t('Комментарии отсутствуют')}/>}

        </div>
    )
}