
import {fireEvent, screen} from "@testing-library/react";
import {SideBar} from "./SideBar";
import {renderComponents} from "shared/lib/tests/renderComponent/RenderComponents";



describe('CustomButton',()=>{
    test('test render',()=>{
        renderComponents(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('test toggle',()=>{
        renderComponents(<SideBar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})