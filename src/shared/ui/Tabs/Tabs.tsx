import cls from './Tabs.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";
import {Card, CardTheme} from "shared/ui/Card/Card";

export interface TabsType {
    value: string;
    content:ReactNode;
}

interface TabsProps {
    className?: string;
    value:string;
    tabs:TabsType[];
    onTabCLick: (tab: TabsType) => void;
}

export const Tabs = ({className, tabs, onTabCLick, value}: TabsProps) => {

    const onClickTab = (tab: TabsType) => {
        return () => {
            onTabCLick(tab);
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