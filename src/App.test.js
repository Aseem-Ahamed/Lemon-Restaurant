// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon heading', () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    level: 1,
    name: /little lemon/i,
  });
  expect(headingElement).toBeInTheDocument();
});
