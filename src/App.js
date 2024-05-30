import React from 'react';
import FormComponent from '../src/Components/DynamicForm';
import formConfig from '../src/Components/FormConfig';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
       {/* <h1>Dynamic Form</h1> */}
      <FormComponent config={formConfig} />
      <ToastContainer/>
    </div>
  );
};

export default App;
