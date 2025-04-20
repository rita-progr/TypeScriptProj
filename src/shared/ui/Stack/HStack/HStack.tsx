import {Flex, FlexProps} from "../Flex/Flex";

type HStackProps = Omit<FlexProps, 'direction'>
export const HStack = (props:HStackProps) => {
    const {align = "start"} = props
    return (
        <Flex {...props} direction='row' align={align}/>
    )
}