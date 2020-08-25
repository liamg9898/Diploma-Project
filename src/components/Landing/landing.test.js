import React from 'react';
import { shallow } from 'enzyme';
import Landing from './index';

it('renders without crashing', () => {
  shallow(<Landing />);
});