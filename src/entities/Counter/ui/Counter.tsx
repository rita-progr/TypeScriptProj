import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "entities/Counter/model/slice/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";
import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";

export const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1 data-testid="counter">value = {counter}</h1>
            <CustomButton theme={ThemeButton.OUTLINE} data-testid="btn-inc" onClick = {increment}>+</CustomButton>
            <CustomButton theme={ThemeButton.OUTLINE} data-testid="btn-dec" onClick = {decrement}>-</CustomButton>
        </div>
    )
}