import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from '../../Field';
import { addToIdea, isIdeaValid } from '../../../utils/idea'

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
    };
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleOnChange(e) {
    let fieldObj;
    switch (e.target.type) {
      case 'textarea':
        fieldObj = { desc: e.target.value };
        break;
      default:
        fieldObj = { title: e.target.value };
        break;
    }
    this.setState(fieldObj)
  }

  handleOnCancel(e) {
    this.props.onCancel(e);
  }  

  handleOnSave(e) {
    e.preventDefault();
    // Extract validation out into utils and show an error if not valid
    // For now, I am returning without calling the callback if empty
    const { title, desc } = this.state;
    if (!isIdeaValid(title, desc)) return;

    this.props.onSave(addToIdea({ title, desc }));
  }

  render() {
    const { title, desc } = this.state;

    return ( 
      <form name="create-idea" className="create-idea" onSubmit={this.handleOnSave}>
        <Field autoFocus={true} type="text" label="Title" id="title" onValChange={this.handleOnChange} value={title} />
        <Field type="textarea" label="Description" id="desc" onValChange={this.handleOnChange} value={desc} />
        <div className="button-group">
          <input type="button" value="Cancel" onClick={this.handleOnCancel} className="btn btn-sm btn-secondary" />
          <input type="submit" name="save-idea" value="Save Idea" className="btn btn-sm btn-primary" />        
        </div>
      </form>
    )
  }
}

CreateForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default CreateForm;