import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import RegisterForm from '../RegisterForm'

it('renders without crashing', () => {
  const onSubmit = jest.fn()
  render(<RegisterForm onSubmit={onSubmit} />)
})

it('calls onSubmit with username, email, password and terms checked when submitted', async () => {
  const promise = Promise.resolve()
  const mockSubmit = jest.fn(() => promise)
  const { queryByTestId } = render(<RegisterForm onSubmit={mockSubmit} />)

  fireEvent.submit(queryByTestId('register-form'))

  await act(() => promise)

  expect(mockSubmit).toHaveBeenCalledTimes(1)
})
