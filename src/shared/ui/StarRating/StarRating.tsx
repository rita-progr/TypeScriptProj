import cls from './StarRating.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import StarIcon from '@/shared/assets/Star.svg'
import {Icon} from "@/shared/ui/Icon/Icon";
import {useState} from "react";

interface StarRatingProps {
    className?: string;
    onSelect?: (selectedNam: number) => void;
    selectedStars?: number;
    size?: number;
}

const stars = [1,2,3,4,5]

export const StarRating = (
    {className, selectedStars = 0, onSelect, size = 30}:
    StarRatingProps) => {

    const [isSelected, setIsSelected] = useState(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(0);

    const onHover = (starsCount: number) => () => {
        if(!isSelected) {
            setCurrentStarsCount(starsCount)
        }
    }

    const onLeave =  () => {
        if(!isSelected) {
            setCurrentStarsCount(0)
        }
    }

    const onClick = (starsNum: number) => () => {
        onSelect?.(starsNum);
        setCurrentStarsCount(starsNum);
        setIsSelected(true);

    }

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map(item=>(
                <Icon className={classNames(cls.icon, {[cls.hovered]: currentStarsCount >= item, [cls.selected]: isSelected})}
                      Svg={StarIcon}
                      width={size}
                      height={size}
                      key={item}
                onMouseLeave={onLeave}
                onMouseEnter={onHover(item)}
                onClick={onClick(item)}/>
            ))}
        </div>
    )
}