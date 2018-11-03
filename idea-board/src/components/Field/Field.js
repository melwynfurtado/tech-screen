import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, label, id, value, onValChange, ...rest }) => {
  switch(type) {
    case 'textarea':
      return (
        <div className={`form-group row ${id}`}>
          <label htmlFor={id} className="col-sm-2 col-form-label">{label}: </label>
          <div className="col-sm-7">
            <textarea {...{ id, value }} onChange={onValChange} className="form-control" {...rest} />        
          </div>
        </div>
      );
    case 'select':
      return (
        <div className={`form-group row ${id}`}>
          <label htmlFor={id} className="col-sm-2 col-form-label">{label}: </label>        
          <div className="col-sm-7">
            <select {...{ id, value }} onChange={onValChange} className="form-control" {...rest}>
              <option value="">Please select</option>
              {
                rest.options.map(({value, name}) => <option key={value} value={value}>{name}</option>)
              }
            </select>        
          </div>
        </div>
      )        
    default:
      return (
        <div className={`form-group row ${id}`}>
          <label htmlFor={id} className="col-sm-2 col-form-label">{label}: </label>        
          <div className="col-sm-7">
            <input type="text" {...{ id, value }} onChange={onValChange} className="form-control" {...rest} />        
          </div>
        </div>
      )
  }
}

Field.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onValChange: PropTypes.func.isRequired,
  value: PropTypes.string, 
}

Field.defaultProps = {
  type: 'text',
  value: '',
}

export default Field;
