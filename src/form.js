import React, { useCallback } from 'react';

import CustomForm from './components/customForm';
import Input from './components/input';
import { useDispatch } from 'react-redux';

const registerFields = [
    {
        id: "firstName",
        name: "firstName",
        label: 'First Name',
        placeholder: 'Enter First Name',
        autoComplete:'given-name',
        component: Input,
        validate: (value) => {
            if(!value) return "First Name Required";
            return ""
        }
    },
    {
        id: "lastName",
        name: "lastName",
        label: 'Last Name',
        placeholder: 'Enter Last Name',
        autoComplete:'family-name',
        component: Input,
        validate: (value) => {
            if(!value) return "Last Name Required";
            return ""
        }
    },
    {
        id: "email",
        name: "email",
        type: 'email',
        label: 'Email',
        placeholder: 'Enter Email',
        autoComplete:'email',
        component: Input,
        validate: (value) => {
            if(!value) return "Email Required";
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return "Please enter valid email"
            return ""
        }
    }
]

const registerInitialValues = {
    firstName: '',
    lastName: '',
    email: ''
}

const Register = () => {
  const dispatch =  useDispatch();

  const register = useCallback(
    (values, actions) => {
        dispatch({ type: "CREATE_USER_REQUEST", payload: values, meta:actions})
    },
    [],
  );
  return (
    <CustomForm fields={registerFields} initialValues={registerInitialValues} onSubmit={register}  />
  );
}

export default Register;
