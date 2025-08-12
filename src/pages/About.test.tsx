import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About component', () => {
  it('renders the title', () => {
    render(<About />);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  it('renders personal text info', () => {
    render(<About />);
    expect(screen.getByText(/my name is ivan/i)).toBeInTheDocument();
  });

  it('renders link to RS School', () => {
    render(<About />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://rs.school/courses/reactjs');
    expect(link).toHaveTextContent(/react at school/i);
  });

  it('renders RS logo image', () => {
    render(<About />);
    const img = screen.getByAltText(/rs-logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src');
  });
});
