import {
    NUMBERS,
    PLUS,
    MINUS,
    EQUAL,
    COMMA,
} from '../constants';

import {
    isNumber,
    doNothing,
    operate,
    handleCommaInput,
    handleEqualInput,
    handleOperationInput,
    handleAcClick,
} from './helpers';

describe('Helpers: doNothing', () => {
    it('should return an empty object', () => {
        expect(doNothing()).toEqual({});
    });
});

describe('Helpers: isNumber', () => {
    it('should return true if param is a number', () => {
        NUMBERS.split('').forEach((number) => {
            expect(isNumber(number)).toBeTruthy();
        });
    });

    it('should return false if param is not a number', () => {
        [PLUS, MINUS, EQUAL, COMMA].forEach((value) => {
            expect(isNumber(value)).toBeFalsy();
        });
    });
});

describe('Helpers: operate', () => {
    it('should work properly for PLUS and MINUS', () => {
        expect(operate('1', '1', PLUS)).toBe('2');
        expect(operate('1', '1', MINUS)).toBe('0');
    });
});

describe('Helpers: handleOperationInput', () => {
    it('should update total and set operation', () => {
        expect(handleOperationInput({
            current: '1',
            total: null,
            operation: null,
        }, MINUS)).toEqual({
            current: '0',
            total: '1',
            operation: MINUS,
        });
    });

    it('should allow multiple operations', () => {
        expect(handleOperationInput({
            current: '1',
            total: '1',
            operation: PLUS,
        }, MINUS)).toEqual({
            current: '0',
            total: '2',
            operation: MINUS,
        });
    });

    it('should do nothing if current and total are not set', () => {
        expect(handleOperationInput({
            current: null,
            total: null,
            operation: PLUS,
        }, MINUS)).toEqual({});
    });

    it('should do update total and set operation if current is set', () => {
        expect(handleOperationInput({
            current: '1',
            total: null,
            operation: PLUS,
        }, MINUS)).toEqual({
            current: '0',
            total: '1',
            operation: MINUS,
        });
    });
});

describe('Helpers: handleCommaInput', () => {
    it('should do nothing if current is Null', () => {
        expect(handleCommaInput({ current: null })).toEqual({ current: '0.' });
        expect(handleCommaInput({ current: '0' })).toEqual({ current: '0.' });
        expect(handleCommaInput({ current: '1' })).toEqual({ current: '1.' });
    });
});

describe('Helpers: handleEqualInput', () => {
    it('should work properly', () => {
        expect(handleEqualInput({ current: '1', total: '1', operation: '+' })).toEqual({
            current: null,
            operation: null,
            total: '2',
        });
    });

    it('should do nothing if current or operation is not null', () => {
        expect(handleEqualInput({ current: null, total: '1', operation: '+' })).toEqual({});
        expect(handleEqualInput({ operation: null, total: '1', current: '+' })).toEqual({});
    });
});

describe('Helpers: handleAcClick', () => {
    it('should return the initial state', () => {
        expect(handleAcClick()).toEqual({
            current: null,
            total: null,
            operation: null,
        });
    });
});
