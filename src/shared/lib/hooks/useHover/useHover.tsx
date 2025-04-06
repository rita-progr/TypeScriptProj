import {useCallback, useMemo, useState} from "react";


export const useHover = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(()=>{
        setIsHover(true);
    },[])

    const onMouseLeave = useCallback(()=>{
        setIsHover(false);
    },[])

    return useMemo(() => [isHover, {onMouseEnter, onMouseLeave}],[isHover, onMouseEnter, onMouseLeave])
}