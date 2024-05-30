import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../Components/Form_Content/TextField';
import PasswordField from '../Components/Form_Content/PasswordField';
import SelectField from '../Components/Form_Content/SelectField';
import RadioField from '../Components/Form_Content/RadioField';
import CheckboxField from '../Components/Form_Content/CheckBoxField';
import FileField from '../Components/Form_Content/FileField';
import './FormComponent.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormComponent = ({ config }) => {
  const initialValues = {};
  const validationSchema = {};

  config.forEach((field) => {
    initialValues[field.name] = '';
    if (field.required) {
      validationSchema[field.name] = Yup.string().required('This field is required');
      if (field.regex) {
        validationSchema[field.name] = validationSchema[field.name].matches(
          new RegExp(field.regex),
          'Invalid format'
        );
      }
    }
  });

  return (
    <div className="form-container">
      <h1>Dynamic-Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchema)}
        onSubmit={(values, formikBag) => {
          console.log(values);
          toast.success('Form submitted successfully');
          formikBag.resetForm();
        }}
      >
        {() => (
          <Form>
            {config.map((field) => (
              <div className="form-group" key={field.id}>
                {(() => {
                  switch (field.type) {
                    case 'text':
                      return <TextField name={field.name} label={field.name} />;
                    case 'password':
                      return <PasswordField name={field.name} label={field.name} />;
                    case 'select':
                      return (
                        <SelectField
                          name={field.name}
                          label={field.name}
                          options={field.options}
                          multiple={field.multiplSelect}
                        />
                      );
                    case 'radio':
                      return (
                        <RadioField
                          name={field.name}
                          label={field.name}
                          options={field.options}
                        />
                      );
                    case 'checkbox':
                      return (
                        <CheckboxField
                          name={field.name}
                          label={field.name}
                          options={field.options}
                        />
                      );
                    case 'file':
                      return <FileField name={field.name} label={field.name} />;
                    default:
                      return null;
                  }
                })()}
              </div>
            ))}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
