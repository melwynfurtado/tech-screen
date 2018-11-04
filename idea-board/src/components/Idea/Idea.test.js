import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Idea from './Idea';
import Title from './Title';
import Description from './Description/Description';

describe('Idea component', () => {
  let wrapper;
  const onUpdateSpy = sinon.spy();
  const onDeleteSpy = sinon.spy();
  const eventObj = { preventDefault: () => {} };

  const idea = {
    uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
    title: "Z First Idea",
    desc: "What else can I say about this? Its brilliant!",
    createdTime: 1541258930814,
    updatedTime: 1541258930814,
  }

  beforeEach(() => {
    wrapper = shallow(
      <Idea 
        idea={idea}
        onUpdate={onUpdateSpy} 
        onDelete={onDeleteSpy}
      />
    ); 
  })
  
  it('should render <Title /> component', () => {
    expect(wrapper.find(Title).length).toEqual(1);
  });
  
  it('should render <Description /> component', () => {
    expect(wrapper.find(Description).length).toEqual(1);
  });

  it('should render createdTime', () => {
    expect(wrapper.find('.card .card-body > .text-muted').text()).toEqual("3rd Nov, 2018");
  });  

  it('should render updatedTime', () => {
    const lastUpdateText = `Last updated ${distanceInWordsToNow(1541258930814)}`;
    expect(wrapper.find('.card .card-body .card-text .text-muted').text()).toEqual(lastUpdateText);
  });    

  it('should render delete button', () => {
    expect(wrapper.find('button').prop('type')).toEqual('button');
  });

  it('should call onDelete() when user deletes an idea', () => {
    wrapper.find('button').simulate('click', eventObj);
    expect(onDeleteSpy.calledWith(idea.uuid)).toEqual(true);
  });
})