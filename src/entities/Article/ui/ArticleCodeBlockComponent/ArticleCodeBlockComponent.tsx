import cls from './ArticleCodeBlockComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = ({className}: ArticleCodeBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>

        </div>
    )
}