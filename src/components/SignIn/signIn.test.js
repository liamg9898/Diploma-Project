import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './index';

it('renders without crashing', () => {
  shallow(<SignIn />);
});