import cls from './ArticlePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ArticlePageProps {
    className?: string;
}

const ArticlePage = ({className}: ArticlePageProps) => {
    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>

        </div>
    )
}
export default ArticlePage