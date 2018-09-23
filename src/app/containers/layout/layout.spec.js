import React from 'react';
import {shallow} from 'enzyme';
import Layout from './index.js';

describe('Layout', () => {
  it('should render a <main />', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find('main').length).toEqual(1);
  });
});