import React from 'react';
import { render } from '@testing-library/react';
import RegisterForm from './containers/RegisterForm';

test('renders register form', () => {
  const mockFn = jest.fn()
  const { getByTestId } = render(<RegisterForm onSubmit={mockFn} />);
  const form = getByTestId('register-form');
  expect(form).toBeInTheDocument();
});
