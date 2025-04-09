import {RefObject, useEffect} from "react";

interface useInfinityScrollProps{
    callback?: () => void;
    triggerRef: RefObject<HTMLDivElement>
    wrapperRef: RefObject<HTMLDivElement>
}

export const useInfinityScroll = ({callback, triggerRef, wrapperRef}:useInfinityScrollProps) => {

    useEffect(() => {
        let observer: IntersectionObserver;
        if(callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 0.1
            }

             observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options)

            observer.observe(triggerRef.current)

            return () => {
                if (observer) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer?.unobserve(triggerRef.current)
                }
            }
        }
    },[callback, triggerRef, wrapperRef])

}