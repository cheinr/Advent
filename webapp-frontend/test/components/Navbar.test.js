import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import NavbarContainer from '../../src/containers/NavbarContainer';

describe('<NavbarContainer />', () => {
  it('the component should have two Link attributes', () => {
    const wrapper = shallow(<NavbarContainer />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
});
