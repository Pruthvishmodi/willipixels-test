import React from 'react'
import { FastField, Form, Formik } from 'formik'

const CustomForm = ({fields, ...props}) => {
  return (
    <Formik {...props}>
        {({ isValid, dirty, isSubmitting}) => {
           return <Form>
                {
                    fields.map(x => <FastField key={x.id} {...x} />)
                }
                <button type='submit' disabled={isSubmitting || !(dirty && isValid) }>Submit</button>
            </Form>
        }}
      </Formik>
  )
}

export default CustomForm
