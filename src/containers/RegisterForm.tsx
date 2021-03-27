import React, { FunctionComponent } from 'react'
import Form, { FormGroup, Input, Button, useForm } from '../components/Form'

interface IProps {
  onSubmit: React.FormEventHandler
}

const RegisterForm: FunctionComponent<IProps> = ({ onSubmit }) => {
  const { formData, formState, handleChange, handleSubmit } = useForm({
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    terms: false,
  })

  return (
    <Form testId="register-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          name="password-repeat"
          placeholder="Repeat Password"
          value={formData.passwordRepeat}
          onChange={handleChange}
        />
      </FormGroup>
      <Input
        type="checkbox"
        name="terms"
        label="Agree to terms"
        value={formData.terms}
        onChange={handleChange}
      />
      <Button testId="register-form-btn" disabled={formState.submitting} />
    </Form>
  )
}

export default RegisterForm
