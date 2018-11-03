import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title'
import format from 'date-fns/format'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import Description from './Description/Description';
import './Idea.css';

class Idea extends Component {
  constructor(props) {
    super(props);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  handleOnDelete(e) {
    const { idea, onDelete } = this.props;
    onDelete(idea.uuid);
  }
  
  render() {
    const { idea: { title, desc, uuid, createdTime, updatedTime }, onUpdate } = this.props;

    return (
      <div className="idea card">
        <div className="card-body">
          <Title {...{ title, uuid, onUpdate }} />
          <small className="text-muted">{format(createdTime, 'Do MMM, YYYY')}</small>
          <Description {...{ desc, uuid, onUpdate }} />
          <div className="text-right"><button type="button" onClick={this.handleOnDelete} className="btn btn-sm btn-danger">Delete</button></div>
          <p className="card-text text-center"><small className="text-muted">Last updated {distanceInWordsToNow(updatedTime)}</small></p>
        </div>
      </div>
    );
  }
}

Idea.propTypes = {
  idea: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    createdTime: PropTypes.number.isRequired, 
    updatedTime: PropTypes.number.isRequired,   
  }),
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,  
};

export default Idea;
