import React from 'react';
import { shallow } from 'enzyme';
import Description, { descRender } from './Description';
import Editable from '../../Editable';

describe('Description component', () => {
  const noop = () => {};
  it('should render <Editable /> component', () => {
    const wrapper = shallow(
      <Description desc="desc" onUpdate={noop} />
    );
    expect(wrapper.find(Editable).length).toEqual(1);
  }); 

  it('should render description in view mode', () => {
    const wrapper = shallow(
      descRender({ inEditMode: false, value: 'description', handleOnChange: noop })
    );
    expect(wrapper.find('p.card-text').text()).toEqual('description');
  });

  it('should render textarea field in edit mode', () => {
    const wrapper = shallow(
      descRender({ inEditMode: true, value: 'description', handleOnChange: noop })
    );
    expect(wrapper.find('textarea').length).toEqual(1);
  });   
})