import React from 'react';
import { shallow } from 'enzyme';
import Modal from './index';

it('renders without crashing', () => {
  shallow(<Modal />);
});