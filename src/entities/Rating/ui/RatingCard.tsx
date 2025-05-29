import cls from './RatingCard.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {HStack, VStack} from "@/shared/ui/Stack";
import {StarRating} from "@/shared/ui/StarRating/StarRating";
import {Text} from '@/shared/ui/Text/Text'
import {Modal} from "@/shared/ui/Modal/Modal";
import {useCallback, useState} from "react";
import {Button} from "@headlessui/react";
import {CustomButton, ThemeButton} from "@/shared/ui/CustomButton/CustomButton";
import {Input} from "@/shared/ui/Input/Input";
import {BrowserView, MobileView} from "react-device-detect";
import {Drawer} from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
    className?: string;
    hasFeedback?: boolean;
    onAccept?: (num: number, feedback?: string) => void;
    onCancel?: (num: number) => void;
    title?: string;
    titleFeedback?: string;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        hasFeedback,
        onAccept,
        onCancel,
        title,
        titleFeedback,
    } = props

    const [openModal, setOpenModal] = useState<boolean>(false)
    const [starsCount, setStarsCount] = useState<number>(0)
    const [feedBack, setFeedBack] = useState('')

    const onSelectStars = useCallback((starsNumber: number) => {
        setStarsCount(starsNumber)
        if(hasFeedback) {
            setOpenModal(true)
        }else{
            onAccept?.(starsNumber)
        }
    },[hasFeedback, onAccept])

    const acceptHandle = useCallback(()=>{
        setOpenModal(false)
        onAccept?.(starsCount, feedBack)
    },[onAccept, feedBack,starsCount ])

    const cancelHandle = useCallback(()=>{
        setOpenModal(false)
        onCancel?.(starsCount)
    },[onCancel,starsCount ])

    const modalContent = (
        <VStack gap={'32'} max align={"start"}>
            <Text title={titleFeedback}/>
            <Input placeholder={'Оставить отзыв'}/>
            <HStack gap={"8"} align={"center"} justify={'end'}>
                <CustomButton theme={ThemeButton.OUTLINE} onClick={cancelHandle}>
                    <Text text = {'Закрыть'}/>
                </CustomButton>
                <CustomButton theme={ThemeButton.OUTLINE} onClick={acceptHandle}>
                    <Text text = {'Отправить'}/>
                </CustomButton>
            </HStack>
        </VStack>
    )

    return (
        <div className={classNames(cls.RatingCard, {}, [className])}>
            <VStack gap={"32"} max align={"center"} >
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectStars}/>
            </VStack>
                <BrowserView>
                    <Modal isOpen={openModal}>
                        {modalContent}
                    </Modal>
                </BrowserView>

                <MobileView>
                    <Drawer isOpen={openModal} onClose={cancelHandle} >
                        {modalContent}
                    </Drawer>
                </MobileView>

        </div>
    )
}