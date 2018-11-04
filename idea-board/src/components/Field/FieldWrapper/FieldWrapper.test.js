import React from 'react';
import { shallow } from 'enzyme';
import FieldWrapper from './FieldWrapper';

describe('FieldWrapper component', () => {
  it('should render provided label', () => {
    const wrapper = shallow(
      <FieldWrapper label="title" id="title">
        <span>Hello!</span>
      </FieldWrapper>
    );
    expect(wrapper.find('label').text()).toEqual('title: ');
  }); 

  it('should render provided children nodes', () => {
    const wrapper = shallow(
      <FieldWrapper label="title" id="title">
        <span>Hello!</span>
      </FieldWrapper>
    );
    expect(wrapper.find('span').length).toEqual(1);
  });   
})