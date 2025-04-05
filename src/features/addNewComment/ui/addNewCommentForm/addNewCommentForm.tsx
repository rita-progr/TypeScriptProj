import cls from './addNewCommentForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getAddCommentFormError, getAddCommentFormText} from "../../model/selectors/getAddComment";
import {addNewCommentActions, addNewCommentReducer} from "../../model/slices/addNewCommentSlice";
import {DynemicModuleLoader, ReducersList} from "shared/lib/components/DynemicModuleLoader/DynemicModuleLoader";

export interface addNewCommentFormProps {
    className?: string;
    sendNewComment: (text: string)=>void;
}

const reducers: ReducersList = {
    newComment : addNewCommentReducer,
}

const AddNewCommentForm = ({className, sendNewComment}: addNewCommentFormProps) => {
    const dispatch = useAppDispatch();

    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)

    const addNewComment = useCallback((value: string)=>{
        dispatch(addNewCommentActions.setText(value));
    },[dispatch])

    const onSendHandler = useCallback(()=>{
        sendNewComment(text || '');
        addNewComment('')
    },[addNewComment, sendNewComment, text])


    return (
        <DynemicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addNewCommentForm, {}, [className])}>
                <Input placeholder="Add a new comment" value={text} onChange={addNewComment}/>
                <CustomButton onClick = {onSendHandler}>Send</CustomButton>
            </div>
        </DynemicModuleLoader>

    )
}
export default AddNewCommentForm