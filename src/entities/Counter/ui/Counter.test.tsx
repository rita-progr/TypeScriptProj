
import {screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {renderComponents} from "shared/lib/tests/renderComponent/RenderComponents";

describe('Counter',()=>{
    test('test render',()=>{
        renderComponents(<Counter/>, {
            initialState: {counter: {value: 10}},
        });
        expect(screen.getByTestId('counter')).toHaveTextContent('10');
    })

})