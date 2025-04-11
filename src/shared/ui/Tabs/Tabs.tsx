import cls from './Tabs.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";
import {Card, CardTheme} from "shared/ui/Card/Card";

export interface TabsType<T extends string> {
    value: string;
    content:ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    value:T;
    tabs:TabsType<T>[];
    onTabClick: (tab: TabsType<T>) => void;
}

export const Tabs = <T extends string>({className, tabs, onTabClick, value}: TabsProps<T>) => {

    const onClickTab = (tab: TabsType<T>) => {
        return () => {
            onTabClick(tab as TabsType<T>);
        }
    }

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map(tab=>(
                <Card key = {tab.value}
                      className={cls.tab}
                      onClick={onClickTab(tab)}
                      theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}