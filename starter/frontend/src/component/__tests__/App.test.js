import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';

test('renders Movie List heading', () => {
  render(<App />);
  const heading = screen.getByText('Movie List');
  expect(heading).toBeInTheDocument();
});
