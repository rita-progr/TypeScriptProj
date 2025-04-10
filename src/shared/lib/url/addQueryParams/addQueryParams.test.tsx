import {getQueryParams} from "./addQueryParams";

describe('addQueryParams', () => {
    beforeEach(() => {
        global.window = {
            location: {
                search: '',
            },
            history: {
                pushState: jest.fn()
            }
        } as any;
    });

    afterEach(() => {
        // Очищаем мок после каждого теста
        delete (global as any).window;
    });
    test('one param', ()=>{
        const params = getQueryParams({
            test: 'value'
        });
        expect(params).toBe('?test=value');
    })

    test('two param', ()=>{
        const params = getQueryParams({
            test: 'value',
            map: 'one',
        });
        expect(params).toBe('?test=value&map=one');
    })
})