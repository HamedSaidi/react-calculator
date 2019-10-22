import React from 'react';
import { shallow } from 'enzyme';

import Display from '.';

describe('Display', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'error');
    });

    it('renders the Display component and matches snapshot', () => {
        const component = shallow(<Display value="0" />);

        expect(component).toMatchSnapshot();
    });

    it('renders the Display component with overflow class when value length exceeds 60', () => {
        const value = '1'.repeat(61);
        const component = shallow(<Display value={value} />);

        expect(component.find('.overflow')).toHaveLength(1);
    });

    it('shows no errors on console', () => {
        expect(consoleSpy).not.toHaveBeenCalled();
    });
});
