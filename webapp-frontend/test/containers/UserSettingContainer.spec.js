import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import UserSettingContainer from '../../src/containers/UserSettingContainer';

describe('<UserSettingContainer />', () => {
  it('calls component did mount', () => {
    sinon.spy(UserSettingContainer.prototype, 'componentDidMount');
    const wrapper = mount(<UserSettingContainer />);
    expect(UserSettingContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
