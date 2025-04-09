import cls from './Page.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {RefObject, useRef, UIEvent} from "react";
import {useInfinityScroll} from "shared/lib/hooks/useInfinityScroll/useInfinityScroll";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getScrollSelector, trottlingActions} from "features/trottlingScroll";
import {useLocation} from "react-router-dom";
import {useInitEffect} from "shared/lib/hooks/useInitEffect/useInitEffect";
import {useSelector} from "react-redux";
import {StateSchema} from "app/providers/StoreProveder";
import {useThrottle} from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

export const Page = ({className, children, onScrollEnd}: PageProps) => {
    const wrapperRef = useRef<HTMLElement|null>(null) as RefObject<HTMLDivElement>;
    const triggerRef = useRef<HTMLElement|null>(null) as RefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector((state: StateSchema)=>getScrollSelector(state, pathname))

    useInfinityScroll({
       triggerRef,
        wrapperRef,
        callback : onScrollEnd
    })

    useInitEffect(()=>{
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(trottlingActions.setScroll({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }))
    }, 500)

    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])} onScroll={onScroll}>
            {children}
            <div ref={triggerRef} className={cls.trigger}/>
        </section>
)
}