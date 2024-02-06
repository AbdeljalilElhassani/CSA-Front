import { render, screen } from '@testing-library/react';
import App from './App';

test('renders university login header', () => {
  render(<App />);
  const headerElement = screen.getByText(/University Login/i);
  expect(headerElement).toBeInTheDocument();
});
