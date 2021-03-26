import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import RegisterForm from '../RegisterForm'


it('calls onSubmit with username, email, password and terms checked when submitted', async () => {
  const promise = Promise.resolve()
  const mockSubmit = jest.fn(() => promise)
  const { getByTestId } = render(<RegisterForm onSubmit={mockSubmit} />)

  fireEvent.submit(getByTestId('register-form'))

  await act(() => promise)

  expect(mockSubmit).toHaveBeenCalledTimes(1)
})
