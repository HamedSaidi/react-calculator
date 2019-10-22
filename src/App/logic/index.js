import { AC, COMMA, EQUAL } from '../constants';

import {
    handleAcClick,
    handleNumberInput,
    handleCommaInput,
    handleEqualInput,
    handleOperationInput,
    isNumber,
} from './helpers';

export default function (state, buttonName) {
    if (buttonName === AC) {
        return handleAcClick();
    }

    if (isNumber(buttonName)) {
        return handleNumberInput(state, buttonName);
    }

    if (buttonName === COMMA) {
        return handleCommaInput(state);
    }

    if (buttonName === EQUAL) {
        return handleEqualInput(state);
    }

    // buttonName is + or -
    return handleOperationInput(state, buttonName);
}
