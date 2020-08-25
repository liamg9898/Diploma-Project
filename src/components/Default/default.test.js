import React from 'react';
import { shallow } from 'enzyme';
import Default from './index';

it('renders without crashing', () => {
  shallow(<Default />);
});