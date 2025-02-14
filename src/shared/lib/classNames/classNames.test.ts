import {classNames} from "./classNames";
describe('classNames',()=>{
    test('isCorrectly',()=>{
        expect(classNames('someFn')).toBe('someFn');
    })
    test('checkClassNames mode',()=>{
        const expected = 'class hovered selected';
        expect(classNames('class', {hovered:true, selected: true})).toBe(expected);
    })
    test('checkClassNames mode false',()=>{
        const expected = 'class hovered';
        expect(classNames('class', {hovered:true, selected: false})).toBe(expected);
    })
    test('checkClassNames mode undefined',()=>{
        const expected = 'class hovered';
        expect(classNames('class', {hovered:true, selected: undefined})).toBe(expected);
    })

})

