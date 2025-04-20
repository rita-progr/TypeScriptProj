import cls from './Flex.module.scss';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";


type JustifyType = 'center' | 'between' | 'start' | 'end';
type AlignType = 'center' | 'start' | 'end';
type DirectionType = 'row' | 'column';
type GapType = '8' | '16' | '32';

const JustifyClasses: Record<JustifyType, string> = {
        start: cls.justifyStart,
        end: cls.justifyEnd,
        center: cls.justifyCenter,
        between: cls.justifyBetween,
}

const AlignClasses: Record<AlignType, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
}

const DirectionClasses: Record<DirectionType, string> = {
    row : cls.directionRow,
    column: cls.directionColumn,
}

const GapClasses: Record<GapType, string> = {
    '8' : cls.gap8,
    '16': cls.gap16,
    '32': cls.gap32,
}


export interface FlexProps {
    className?: string;
    children?:ReactNode
    justify?: JustifyType;
    align?: AlignType;
    direction?:DirectionType;
    gap?:GapType;
    max?:boolean;
}

export const Flex = (props: FlexProps) => {
    const {children, justify = 'start', align = 'center', gap = '8', max = false, direction = 'row', className} = props;

    const classes = [
        className,
        JustifyClasses[justify],
        AlignClasses[align],
        GapClasses[gap],
        DirectionClasses[direction],
    ]

    const mods:Mods = {
        [cls.max]: max
    }
    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    )
}