import React from 'react';
import { shallow } from 'enzyme';
import Title, { titleRender } from './Title';
import Editable from '../../Editable';

describe('Title component', () => {
  const noop = () => {};
  it('should render <Editable /> component', () => {
    const wrapper = shallow(
      <Title title="title" onUpdate={noop} />
    );
    expect(wrapper.find(Editable).length).toEqual(1);
  }); 

  it('should render title in view mode', () => {
    const wrapper = shallow(
      titleRender({ inEditMode: false, value: 'title', handleOnChange: noop })
    );
    expect(wrapper.find('h4.card-title').text()).toEqual('title');
  });

  it('should render <Field /> component in edit mode', () => {
    const wrapper = shallow(
      titleRender({ inEditMode: true, value: 'title', handleOnChange: noop })
    );
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });   
})