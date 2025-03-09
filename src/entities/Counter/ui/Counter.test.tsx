import {renderComponents} from "shared/lib/tests/renderComponent/RenderComponents";
import {screen} from "@testing-library/react";
import {Counter} from "./Counter";

describe('Counter',()=>{
    test('test render',()=>{
        renderComponents(<Counter/>, {
            initialState: {counter: {value: 10}},
        });
        expect(screen.getByTestId('counter')).toHaveTextContent('10');
    })

})