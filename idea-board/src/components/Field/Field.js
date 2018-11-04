import React from 'react';
import PropTypes from 'prop-types';
import FieldWrapper from './FieldWrapper'

const Field = ({ type, label, id, value, onValChange, ...rest }) => {
  switch(type) {
    case 'textarea':
      return (
        <FieldWrapper {...{id, label}}>
          <textarea {...{ id, value }} onChange={onValChange} className="form-control" {...rest} />
        </FieldWrapper>
      );
    case 'select':
      return (
        <FieldWrapper {...{id, label}}>
          <select {...{ id, value }} onChange={onValChange} className="form-control" {...rest}>
            <option value="">Please select</option>
            {
              rest.options.map(({value, name}) => <option key={value} value={value}>{name}</option>)
            }
          </select>        
        </FieldWrapper>
      )        
    default:
      return (
        <FieldWrapper {...{id, label}}>
          <input type="text" {...{ id, value }} onChange={onValChange} className="form-control" {...rest} />        
        </FieldWrapper>
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
