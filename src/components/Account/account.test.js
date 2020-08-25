import React from 'react';
import { shallow } from 'enzyme';
import Account from './index';

it('renders without crashing', () => {
  shallow(<Account />);
});