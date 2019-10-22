import Big from 'big.js';

import {
    ZERO,
    PLUS,
    COMMA,
    NUMBERS,
} from '../constants';

export const isNumber = value => NUMBERS.includes(value);

export const doNothing = () => ({});

export const operate = (firstNumber, secondNumber, operation) => {
    const one = Big(firstNumber || ZERO);
    const two = Big(secondNumber || ZERO);

    if (operation === PLUS) {
        return one.plus(two).toString();
    }

    return one.minus(two).toString();
};

export const handleOperationInput = ({ current, total, operation }, buttonName) => {
    if (!current && !total) {
        return doNothing();
    }

    if (operation) {
        return {
            total: operate(total, current, operation),
            current: ZERO,
            operation: buttonName,
        };
    }

    // no operation yet, but the user typed one
    // The user hasn't typed a number yet, just save the operation
    if (!current) {
        return { operation: buttonName };
    }

    // save the operation and shift 'current' into 'total'
    return {
        total: current,
        current: ZERO,
        operation: buttonName,
    };
};

export const handleEqualInput = ({ current, total, operation }) => {
    if (current && operation) {
        return {
            total: operate(total, current, operation),
            current: null,
            operation: null,
        };
    }

    return doNothing();
};

export const handleCommaInput = ({ current }) => {
    if (current) {
        if (current.includes(COMMA)) {
            return doNothing();
        }

        return { current: current + COMMA };
    }

    return { current: ZERO + COMMA };
};

export const handleAcClick = () => ({
    total: null,
    current: null,
    operation: null,
});

export const handleNumberInput = ({ operation, current }, number) => {
    if (number === ZERO && current === ZERO) {
        return doNothing();
    }

    // If there is an operation, update current
    if (operation) {
        if (current) {
            return { current: current === ZERO ? number : current + number };
        }

        return { current: number };
    }

    // If there is no operation, update current and clear the value
    if (current) {
        return {
            current: current === ZERO ? number : current + number,
            total: null,
        };
    }

    return {
        current: number,
        total: null,
    };
};
