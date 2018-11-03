import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Idea from '../Idea'
import CreateForm from '../Idea/CreateForm'
import { sortIdeas } from '../../utils/idea'
import Field from '../Field';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: props.ideas || [],
      showCreateForm: false,
      sortByKey: 'createdTime'
    };    
    this.updateIdea = this.updateIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);    
    this.saveIdea = this.saveIdea.bind(this);
    this.handleOnCreate = this.handleOnCreate.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSort = this.handleOnSort.bind(this);
  }

  deleteIdea(uuid) {
    const { ideas } = this.state;
    const newIdeas = ideas.filter(idea => idea.uuid !== uuid)
    this.setState({ ideas: newIdeas })
  }

  updateIdea(updatedIdea) {
    const { ideas, sortByKey } = this.state;
    const updatedIdeas = ideas.map(idea => {
      return idea.uuid === updatedIdea.uuid ? { ...idea, ...updatedIdea } : idea;
    })
    this.setState({ ideas: sortIdeas(updatedIdeas, sortByKey) });
  }

  saveIdea(newIdea) {
    const { ideas, sortByKey } = this.state;
    this.setState({ 
      ideas: sortIdeas([...ideas, newIdea], sortByKey),
      showCreateForm: false,
    });
  }  

  handleOnCreate(e) {
    this.setState({ showCreateForm: true });
  }
  
  handleOnCancel(e) {
    this.setState({ showCreateForm: false });
  }

  handleOnSort(e) {
    const { ideas } = this.state;
    const sortByKey = e.target.value;
    this.setState({
      sortByKey,
      ideas: sortIdeas(ideas, sortByKey),
    });
  }

  render() {
    const { ideas, showCreateForm, sortByKey } = this.state
    return (
      <div className="board">
        <div className="sort-ctr">
          <Field 
            type="select" 
            label="Sort Idea Board"
            id="sort-board"
            value={sortByKey}
            onValChange={this.handleOnSort}
            options={[
              { name: 'Alphabetically', value: 'title' }, 
              { name: 'Creation date', value: 'createdTime' },
            ]}
            />
        </div>
        {
          ideas.map(
            idea => <Idea 
                      key={idea.uuid} 
                      idea={idea} 
                      onDelete={this.deleteIdea} 
                      onUpdate={this.updateIdea}
                    />
          )          
        }
        {
          showCreateForm ? <CreateForm onSave={this.saveIdea} onCancel={this.handleOnCancel} /> : 
            <button type="button" name="create-idea" className="btn btn-sm btn-primary" onClick={this.handleOnCreate}>
              Create Idea
            </button>
        }
      </div>
    )
  }
}

Board.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      createdTime: PropTypes.number.isRequired, 
      updatedTime: PropTypes.number.isRequired, 
    })
  ),
}

export default Board;
