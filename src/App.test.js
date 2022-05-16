import { render, screen } from '@testing-library/react';
import App from './App';
import Data from './Components/Data';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Left/i);
  expect(linkElement).toBeInTheDocument();
});


test('should render Data component', () => { 
  render(<Data/>)
 })