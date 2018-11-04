import React from 'react';
import PropTypes from 'prop-types';
import Editable from '../../Editable';
import Field from '../../Field';

const Title = ({ title, uuid, onUpdate }) => (
  <Editable 
    uuid={uuid}
    name="title"
    value={title}
    onUpdate={onUpdate} 
    render={titleRender}
  />
);

const titleRender = ({ inEditMode, value, handleOnChange }) => (
  inEditMode ?
    <Field 
      autoFocus={true} 
      value={value} 
      type="text" 
      label="Title" 
      id="title" 
      onValChange={handleOnChange}
    />
  :
    <h4 className="card-title">{value}</h4>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export {
  titleRender,
};
export default Title;