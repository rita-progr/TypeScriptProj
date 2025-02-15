
import {fireEvent, render, screen} from "@testing-library/react";
import {SideBar} from "widgets/SideBar/SideBar";



describe('CustomButton',()=>{
    test('test render',()=>{
        render(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('test toggle',()=>{
        render(<SideBar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})