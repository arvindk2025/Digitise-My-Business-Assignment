import React from 'react';
import { Field, ErrorMessage } from 'formik';

const CheckboxField = ({ name, label, options }) => (
  <div>
    <label>{label}</label>
    {options.map((option) => (
      <label key={option.value}>
        <Field type="checkbox" name={name} value={option.value} />
        {option.label}
      </label>
    ))}
    <ErrorMessage name={name} component="div" className='error'/>
  </div>
);

export default CheckboxField;
