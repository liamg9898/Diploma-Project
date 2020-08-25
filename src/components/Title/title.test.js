import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

it('renders without crashing', () => {
  shallow(<Title />);
});