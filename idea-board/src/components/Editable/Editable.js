import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { updatedIdea } from '../../utils/idea';

class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inEditMode: false,
      value: props.value,
    };
    this.handleOnEdit = this.handleOnEdit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnCancel = this.handleOnCancel.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleOnEdit(e) {
    e.preventDefault();
    this.setState({ inEditMode: true });
  }  

  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }

  handleOnCancel(e) {
    this.setState({ 
      value: this.props.value,
      inEditMode: false,
    });
  }

  handleOnSave(e) {
    e.preventDefault();
    const { name, uuid, onUpdate } = this.props;
    const { value } = this.state;
    onUpdate(updatedIdea({ [name]: value, uuid }));
    this.setState({ inEditMode: false });
  }

  render() {
    const { inEditMode } = this.state;

    const rProp = this.props.render({
      ...this.state, 
      handleOnChange: this.handleOnChange,
    })

    return (
      inEditMode ?
      <form className="editable-field" onSubmit={this.handleOnSave}>
        { rProp }
        <div className="edit-btns button-group">
          <input type="button" value="Cancel" onClick={this.handleOnCancel} className="btn btn-sm btn-secondary" />
          <input type="submit" value="Save" className="btn btn-sm btn-primary" />
        </div>
      </form>
      :
      <div className="view-mode">
        { rProp }
        <button type="button" className="edit-btn btn btn-sm btn-primary" onClick={this.handleOnEdit}>Edit</button>
      </div>
    )
  }
}

Editable.propTypes = {
  render: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Editable.defaultProps = {
  value: '',
}

export default Editable;