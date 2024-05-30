import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectField = ({ name, label, options, multiple }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field as="select" id={name} name={name} multiple={multiple}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className='error'/>
  </div>
);

export default SelectField;
