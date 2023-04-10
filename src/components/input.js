import React from 'react'

const Input = ({
    field, 
    form: { touched, errors },
    meta,
    id,
    label,
    ...props
}) => {
    const error = touched[field.name] && errors[field.name];
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} {...field}  {...props} />
        {error && <p>{error}</p> }
    </div>
  )
}

export default Input