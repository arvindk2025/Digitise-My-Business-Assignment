import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextField = ({ name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} type="text" />
    <ErrorMessage name={name} component="div" className="error" />
  </div>
);

export default TextField;
