import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import Field from '../Field';
import Idea from '../Idea';
import CreateForm from './CreateForm';

describe('Board component', () => {
  let wrapper;

  const sortOptions = [
    { name: 'Alphabetically', value: 'title' }, 
    { name: 'Creation date', value: 'createdTime' },
  ];

  const ideas = [
    {
      uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
      title: "Z First Idea",
      desc: "What else can I say about this? Its brilliant!",
      createdTime: 1541258930814,
      updatedTime: 1541258930814,
    },
    {
      uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
      title: "Second Idea",
      desc: "This is not as good as first one. But it should work!",
      createdTime: 1541258930814,
      updatedTime: 1541258930814,
    },
  ]

  const eventObj = { preventDefault: () => {} };

  beforeEach(() => {
    wrapper = shallow(
      <Board 
        ideas={ideas}
      />
    ); 
  })

  const clickOnCreate = () => {
    wrapper.find('button[name="create-idea"]').simulate('click', eventObj);
  }
  
  it('should render sort <Field /> with options as "Alphabetically" and "Creation date"', () => {
    expect(wrapper.find(Field).prop('options')).toEqual(sortOptions);
  });

  it('should render <Idea /> components', () => {
    expect(wrapper.find(Idea).length).toEqual(2);
  });  

  it('should render "Create Idea" button by default', () => {
    expect(wrapper.find('button[name="create-idea"]').length).toEqual(1);
  });
  
  it('should render <CreateForm /> component onclick of "Create Idea" button', () => {
    clickOnCreate();
    expect(wrapper.find(CreateForm).length).toEqual(1);
  });
  
  it('handleOnCancel() should set state showCreateForm to false', () => {
    clickOnCreate();
    wrapper.instance().handleOnCancel(eventObj);
    expect(wrapper.state('showCreateForm')).toEqual(false);
  });
  
  it('handleOnSort() should set sorted ideas in state', () => {
    const expectedIdeas = [
      {
        uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
        title: "Second Idea",
        desc: "This is not as good as first one. But it should work!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "Z First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },      
    ]
    wrapper.instance().handleOnSort({ target: { value: 'title' } });
    expect(wrapper.state('sortByKey')).toEqual('title');
    expect(wrapper.state('ideas')).toEqual(expectedIdeas);
  });

  it('deleteIdea() should remove idea from state', () => {
    const expectedIdeas = [
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "Z First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },      
    ]
    wrapper.instance().deleteIdea("1371cd20-50be-44a1-95b7-93e7c3641beb");
    expect(wrapper.state('ideas')).toEqual(expectedIdeas);
  });  

  it('updateIdea() should update idea in state', () => {
    const expectedIdeas = [
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "Z First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },      
      {
        uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
        title: "Second Idea updated",
        desc: "This is not as good as first one. But it should work!",
        createdTime: 1541258930814,
        updatedTime: 1541258930819,
      },      
    ]
    const updatedIdea = {
      uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
      title: "Second Idea updated",
      updatedTime: 1541258930819,
    }
    wrapper.instance().updateIdea(updatedIdea);
    expect(wrapper.state('ideas')).toEqual(expectedIdeas);
  });
  
  it('saveIdea() should update idea in state', () => {
    const expectedIdeas = [         
      {
        uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
        title: "Z First Idea",
        desc: "What else can I say about this? Its brilliant!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      }, 
      {
        uuid: "1371cd20-50be-44a1-95b7-93e7c3641beb",
        title: "Second Idea",
        desc: "This is not as good as first one. But it should work!",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },
      {
        uuid: "abc12345-50be-44a1-95b7-93e7c3641beb",
        title: "Some new idea",
        desc: "New idea description.",
        createdTime: 1541258930814,
        updatedTime: 1541258930814,
      },                    
    ]
    const idea = {
      uuid: "abc12345-50be-44a1-95b7-93e7c3641beb",
      title: "Some new idea",
      desc: "New idea description.",
      createdTime: 1541258930814,
      updatedTime: 1541258930814,
    }
    wrapper.instance().saveIdea(idea);
    expect(wrapper.state('ideas')).toEqual(expectedIdeas);
  });    
});