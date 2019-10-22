import React from 'react';
import { shallow } from 'enzyme';

import {
    EQUAL, PLUS, MINUS, AC, NUMBERS,
} from '../../constants';
import Button from '.';

describe('Button', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'error');
    });

    it('renders the Button component and matches snapshot', () => {
        const component = shallow(<Button name="test" clickHandler={jest.fn()} />);

        expect(component).toMatchSnapshot();
    });

    it('renders the PLUS and MINUS button with lightBlue class', () => {
        [PLUS, MINUS].forEach((name) => {
            const component = shallow(<Button name={name} clickHandler={jest.fn()} />);

            expect(component.find('.lightBlue')).toHaveLength(1);
            expect(component.find('.equalSign')).toHaveLength(0);
        });
    });

    it('renders numbers buttons without lightBlue and equalSign classes', () => {
        NUMBERS.split('').forEach((name) => {
            const component = shallow(<Button name={name} clickHandler={jest.fn()} />);

            expect(component.find('.lightBlue')).toHaveLength(0);
            expect(component.find('.equalSign')).toHaveLength(0);
        });
    });

    it('renders the EQUAL button with lightBlue and equalSign classes', () => {
        const component = shallow(<Button name={EQUAL} clickHandler={jest.fn()} />);

        expect(component.find('.lightBlue')).toHaveLength(1);
        expect(component.find('.equalSign')).toHaveLength(1);
    });

    it('renders the AC button with red class', () => {
        const component = shallow(<Button name={AC} clickHandler={jest.fn()} />);

        expect(component.find('.red')).toHaveLength(1);
    });

    it('shows no errors on console', () => {
        expect(consoleSpy).not.toHaveBeenCalled();
    });
});
