import {CustomButton, ThemeButton} from "shared/ui/CustomButton/CustomButton";
import {render, screen} from "@testing-library/react";

describe('CustomButton',()=>{
    test('test render',()=>{
       render(<CustomButton >Test</CustomButton>)
        expect(screen.getByText('Test')).toBeInTheDocument();
       screen.debug();
    })
    test('test clear theme',()=>{
        render(<CustomButton theme = {ThemeButton.CLEAR}>Test</CustomButton>)
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    })
})

