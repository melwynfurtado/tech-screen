import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Editable from './Editable';
import * as utils from '../../utils/idea';

describe('CreateForm component', () => {
  let wrapper;
  const renderSpy = sinon.spy();
  const onUpdateSpy = sinon.spy();
  const buttons = '.button-group input';
  const viewField = '.view-mode';
  const editableFieldForm = 'form.editable-field';
  const eventObj = { preventDefault: () => {} };

  beforeEach(() => {
    wrapper = shallow(
      <Editable 
        name="title"
        uuid="12345"
        render={renderSpy} 
        onUpdate={onUpdateSpy}
      />
    ); 
  })

  const makeFieldEditable = () => {
    wrapper.setState({ showEdit: true });
    wrapper.find(`${viewField} .edit-btn`).simulate('click', eventObj);    
  }
  
  it('should render in view mode by default', () => {
    expect(wrapper.find(viewField).length).toEqual(1);
  });

  it('should render in edit mode onclick of edit button', () => {
    makeFieldEditable();
    expect(wrapper.find(editableFieldForm).length).toEqual(1);
  }); 
  
  it('should render edit mode buttons in edit mode', () => {
    makeFieldEditable();
    expect(wrapper.find(`${editableFieldForm} ${buttons}`).length).toEqual(2);
    expect(wrapper.find(`${editableFieldForm} ${buttons}`).at(0).prop('type')).toEqual('button');
    expect(wrapper.find(`${editableFieldForm} ${buttons}`).at(1).prop('type')).toEqual('submit');    
  });    

  it('should call onUpdate() when editable field is saved', () => {
    const expObj = {
      uuid: '12345',
      title: 'new title',
      lastUpdatedTime: 78900,
    }    
    const updatedIdeaStub = sinon.stub(utils, 'updatedIdea');
    updatedIdeaStub.returns(expObj);
    
    makeFieldEditable();
    wrapper.setState({ value: 'new title' });
    wrapper.find(editableFieldForm).simulate('submit', eventObj);
    expect(onUpdateSpy.calledWith(expObj)).toEqual(true);
  });

  it('should reset state when user cancels editable mode', () => {
    makeFieldEditable();
    wrapper.find(`${buttons}[type="button"]`).simulate('click', eventObj);
    expect(wrapper.state()).toEqual({ inEditMode: false, showEdit: false, value: '' });
  });  
})