import React from 'react'
import { createSerializer } from '@emotion/jest'
import { render, fireEvent, cleanup, act } from '@testing-library/react'

import RegisterForm from '../RegisterForm'

afterEach(cleanup)

it('calls onSubmit with username, email, password and terms checked when submitted', async () => {
  // Arrange
  const fakeUser = {
    username: 'Matthew',
    email: 'Matt@test.com',
    password: '12345678',
    passwordRepeat: '12345678',
    terms: true,
  }
  const promise = Promise.resolve()
  const handleSubmit = jest.fn(() => promise)
  const { getByTestId, getByPlaceholderText, getByLabelText } = render(
    <RegisterForm onSubmit={handleSubmit} />
  )

  const submitNode = getByTestId('register-form-btn') as HTMLButtonElement

  const usernameNode = getByPlaceholderText('Username') as HTMLInputElement
  const emailNode = getByPlaceholderText('Email') as HTMLInputElement
  const passwordNode = getByPlaceholderText('Password') as HTMLInputElement
  const passwordRepeatNode = getByPlaceholderText(
    'Repeat Password'
  ) as HTMLInputElement
  const termsCheckNode = getByLabelText('Agree to terms') as HTMLInputElement

  // Act
  fireEvent.change(usernameNode, { target: { value: fakeUser.username } })
  fireEvent.change(emailNode, { target: { value: fakeUser.email } })
  fireEvent.change(passwordNode, { target: { value: fakeUser.password } })
  fireEvent.change(passwordRepeatNode, {
    target: { value: fakeUser.passwordRepeat },
  })
  fireEvent.click(termsCheckNode)

  submitNode.click()

  await act(() => promise)

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1)

  expect(handleSubmit).toHaveBeenCalledWith(fakeUser)

  expect(submitNode.type).toBe('submit')
})

expect.addSnapshotSerializer(createSerializer())

test('snapshot', () => {
  const { container } = render(<RegisterForm onSubmit={() => {}} />)
  expect(container.firstChild).toMatchSnapshot()
})
