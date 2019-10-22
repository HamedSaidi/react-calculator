import React from 'react';
import { shallow } from 'enzyme';

import ButtonPanel from '.';

describe('ButtonPanel', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'error');
    });

    it('renders the ButtonPanel component and matches snapshot', () => {
        const component = shallow(<ButtonPanel clickHandler={() => {}} />);

        expect(component).toMatchSnapshot();
    });

    it('shows no errors on console', () => {
        expect(consoleSpy).not.toHaveBeenCalled();
    });
});
