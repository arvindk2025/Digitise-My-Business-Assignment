import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FileField = ({ name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} type="file" />
    <ErrorMessage name={name} component="div" className='error'/>
  </div>
);

export default FileField;
