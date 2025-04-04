import cls from './ArticleImageBlockComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ArticleIMAGEBlocks} from "entities/Article/model/types/ArticleSchema";
import {Text, TextAlign} from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleIMAGEBlocks
}

export const ArticleImageBlockComponent = ({className, block}: ArticleImageBlockComponentProps) => {
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.imgBlock}/>
            {block?.title && <Text text={block.title} align={TextAlign.CENTER}/>}
        </div>
    )
}