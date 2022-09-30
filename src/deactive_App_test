import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { TestStorage } from './data/providers/TestStorage';

test('renders learn react link', () => {
  render(<App myStorage={new TestStorage()} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
