import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FieldWrapper extends Component {
  render() {
    const { id, label, children } = this.props;
    return (
      <div className={`form-group row ${id}`}>
        <label htmlFor={id} className="col-sm-2 col-form-label">{label}: </label>
        <div className="col-sm-7">
          { children }
        </div>
      </div>    
    )
  }
}

FieldWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,  
  children: PropTypes.node,
}

export default FieldWrapper;

