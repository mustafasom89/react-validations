import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    /*
    A login page containing input for:
        ■ An email address
        ■ A password with a minimum length of 8 characters
    */
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const LoginPage = () => {

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('Email: ', values.email);
    console.log('Password: ', values.password);
  };
  
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label className="login-label" htmlFor="email">Email</label>
          <Field className="login-input" type="email" id="email" name="email" />
          <ErrorMessage className="login-error" name="email" component="div" />
        </div>

        <div>
          <label className="login-label" htmlFor="password">Password</label>
          <Field className="login-input" type="password" id="password" name="password" />
          <ErrorMessage className="login-error" name="password" component="div" />
        </div>

        <button className="login-button" type="submit">Login</button>
      </Form>
    </Formik>
  );
};

return (
    <div  className="login-form">
      <h2>Login</h2>
      <Login />
    </div>
  );
};

export default LoginPage;