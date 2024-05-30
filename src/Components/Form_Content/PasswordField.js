import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PasswordField = ({ name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} type="password" />
    <ErrorMessage name={name} component="div" className='error' />
  </div>
);

export default PasswordField;
