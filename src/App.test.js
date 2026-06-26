import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  expect(screen.getAllByText(/yash bhawarkar/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
  expect(screen.getByText(/currently seeking 2026 software engineering/i)).toBeInTheDocument();
});
