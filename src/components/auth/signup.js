import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = 'Mismatch password'
  }

  console.log(values);
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && error && <div className="error">{error}</div>}
    </div>
  </div>
)

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      <Field name="passwordConfirm" type="password" component={renderField} label="Confirm password"/>
      <div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup',  // a unique identifier for this form
  validate                 // <--- validation function given to redux-form
})(SyncValidationForm)
