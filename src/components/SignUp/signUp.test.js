import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './index';

it('renders without crashing', () => {
  shallow(<SignUp />);
});