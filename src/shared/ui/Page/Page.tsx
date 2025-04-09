import cls from './Page.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {RefObject, useRef} from "react";
import {useInfinityScroll} from "shared/lib/hooks/useInfinityScroll/useInfinityScroll";

interface PageProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({className, children, onScrollEnd}: PageProps) => {
    const wrapperRef = useRef<HTMLElement|null>(null) as RefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLElement|null>(null) as RefObject<HTMLDivElement>;
    useInfinityScroll({
       triggerRef,
        wrapperRef,
        callback : onScrollEnd
    })

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div ref={triggerRef} className={cls.trigger}/>
        </section>
)
}