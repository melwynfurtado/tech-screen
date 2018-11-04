import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Board from '../Board';

const ideas = [
  {
    uuid: "bdeb7b38-b5ae-4f01-a805-6b4681896e90",
    title: "First Idea",
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
];

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App ideas={ideas} />);
  });

  it('renders idea board heading', () => {
    const wrapper = shallow(<App ideas={ideas} />);
    expect(wrapper.find('h1').text()).toContain('Idea Board App');
  });

  it('renders one <Board /> component ', () => {
    const wrapper = shallow(<App ideas={ideas} />);
    expect(wrapper.find(Board).length).toEqual(1);
  })
})