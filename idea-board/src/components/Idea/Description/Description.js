import React from 'react';
import PropTypes from 'prop-types';
import Editable from '../../Editable';
import Field from '../../Field';

const Description = ({ desc, uuid, onUpdate }) => (
  <Editable 
    uuid={uuid}
    name="desc"
    value={desc}
    onUpdate={onUpdate} 
    render={({ inEditMode, value, handleOnChange }) => (
      inEditMode ?
        <Field value={value} type="textarea" label="Description" id="title" onValChange={handleOnChange} />
      :
        <p className="card-text">{desc}</p>
    )}
  />
);

Description.propTypes = {
  desc: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Description;