import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';
import FieldWrapper from './FieldWrapper';

describe('Field component', () => {
  it('should return input text field by default', () => {
    const wrapper = shallow(
      <Field 
        label="title"
        id="title"
        onValChange={()=>{}}
      />
    );
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('should return textarea field if field type is textarea', () => {
    const wrapper = shallow(
      <Field
        type="textarea" 
        label="desc"
        id="desc"
        onValChange={()=>{}}
      />
    );
    expect(wrapper.find('textarea').length).toEqual(1);
  });

  it('should return select field if field type is textarea', () => {
    const wrapper = shallow(
      <Field
        type="select" 
        label="desc"
        id="desc"
        options={[]}
        onValChange={()=>{}}
      />
    );
    expect(wrapper.find('select').length).toEqual(1);
  });
  
  it('should return <FieldWrapper /> component', () => {
    const wrapper = shallow(
      <Field 
        label="title"
        id="title"
        onValChange={()=>{}}
      />
    );
    expect(wrapper.find(FieldWrapper).length).toEqual(1);
  });  
})