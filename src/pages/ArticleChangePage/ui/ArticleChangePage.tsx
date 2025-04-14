import cls from './ArticleChangePage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useParams} from "react-router-dom";

interface ArticleChangePageProps {
    className?: string;
}

const ArticleChangePage = ({className}: ArticleChangePageProps) => {
    const id = useParams<{id:string}>()
    const isEdit = Boolean(id.id);
    console.log(isEdit);
    return (
        <div className={classNames(cls.ArticleChangePage, {}, [className])}>
            {isEdit ? "Редактирование страницы " : "Создание страницы"}
        </div>
    )
}
export default ArticleChangePage;