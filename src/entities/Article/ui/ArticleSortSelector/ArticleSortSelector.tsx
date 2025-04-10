import cls from './ArticleSortSelector.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Select} from "shared/ui/Select/Select";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";
import {Options} from "shared/ui/Select/Select";
import {ArticleSortType} from "entities/Article";
import {OrderType} from "shared/types/orderTypes";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortType;
    onSortChange: (sort: ArticleSortType) => void;
    onOrderChange: (orderType: OrderType) => void;
    order: OrderType
}

export const ArticleSortSelector = ({
    className,
    sort,
    order,
    onSortChange,
    onOrderChange,
}: ArticleSortSelectorProps) => {
    const {t} = useTranslation();

    const SortFieldOptions = useMemo<Options<ArticleSortType>[]>(()=>[
        {
            value: ArticleSortType.CREATED,
            content: t("дате")
        },
        {
            value: ArticleSortType.TITLE,
            content: t("заголовку")
        },
        {
            value: ArticleSortType.VIEWS,
            content: t("просмотрам")
        },
    ],[t])

    const OrderFieldOptions = useMemo<Options<OrderType>[]>(()=>[
        {
            value: 'asc',
            content: t("возрастанию")
        },
        {
            value: 'desc',
            content: t("убыванию")
        },
    ],[t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select label={t("Сортировать по")} value={sort} options={SortFieldOptions} onChange={onSortChange}/>
            <Select label={t("по")} value={order} options={OrderFieldOptions} onChange={onOrderChange}/>
        </div>
    )
}