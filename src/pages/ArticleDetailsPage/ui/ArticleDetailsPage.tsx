import cls from './ArticleDetailsPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ARTICLES
        </div>
    )
}

export default ArticleDetailsPage;