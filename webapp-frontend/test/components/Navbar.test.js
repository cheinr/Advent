import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import Navbar from '../../src/components/Navbar';

describe('<Navbar />', () => {
  it('the component should have two Link attributes', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
});
