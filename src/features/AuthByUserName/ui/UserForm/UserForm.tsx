import cls from './UserForm.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Input} from "shared/ui/Input/Input";

interface UserFormProps{
    className?: string;
}

export const UserForm = ({className}:UserFormProps) => {
    return (
        <div className={classNames(cls.UserForm, {}, [className])}>
            <div className={cls.Input}>
                <Input placeholder={'Введите логин'}/>
                <Input placeholder={'Введите пароль'}/>
            </div>
        </div>
    )
}