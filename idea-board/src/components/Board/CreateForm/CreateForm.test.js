import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import CreateForm from './CreateForm';
import Field from '../../Field';
import * as utils from '../../../utils/idea';

describe('CreateForm component', () => {
  let wrapper;
  const onSaveSpy = sinon.spy();
  const onCancelSpy = sinon.spy();
  const buttons = '.button-group input';
  const createForm = 'form.create-idea';
  const eventObj = { preventDefault: () => {} };

  beforeEach(() => {
    wrapper = shallow(
      <CreateForm 
        onSave={onSaveSpy} 
        onCancel={onCancelSpy}
      />
    ); 
  })
  
  it('should render form', () => {
    expect(wrapper.find(createForm).length).toEqual(1);
  });
  
  it('should render form fields', () => {
    expect(wrapper.find(Field).length).toEqual(2);
    expect(wrapper.find(Field).at(0).prop('type')).toEqual('text');
    expect(wrapper.find(Field).at(1).prop('type')).toEqual('textarea');
  });

  
  it('should render form buttons', () => {
    expect(wrapper.find(buttons).length).toEqual(2);
    expect(wrapper.find(buttons).at(0).prop('type')).toEqual('button');
    expect(wrapper.find(buttons).at(1).prop('type')).toEqual('submit');
  });
  
  it('should not call onSave() when form submitted if idea is invalid', () => {
    wrapper.find(createForm).simulate('submit', eventObj);
    expect(onSaveSpy.calledOnce).toEqual(false);
  });  

  it('should call onSave() when form submitted if idea is valid', () => {
    const expObj = {
      uuid: '12345',
      title: 'new title',
      createdTime: 78900,
      updatedTime: 78900,
    }    
    const addToIdeaStub = sinon.stub(utils, 'addToIdea');
    addToIdeaStub.returns(expObj);

    wrapper.setState({ title: 'test', desc: 'test' });
    wrapper.find(createForm).simulate('submit', eventObj);
    expect(onSaveSpy.calledWith(expObj)).toEqual(true);
  });

  it('should call onCancel() when user cancels create idea form', () => {
    wrapper.find(`${buttons}[type="button"]`).simulate('click', eventObj);
    expect(onCancelSpy.calledOnce).toEqual(true);
  });

  it('handleOnChange() should set field value in state', () => {
    wrapper.instance().handleOnChange({ target: { type: 'textarea', value: 'new description' } });
    expect(wrapper.state('desc')).toEqual('new description');
  });  
})