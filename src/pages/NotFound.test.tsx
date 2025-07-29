import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('renders the not found title', () => {
    render(<NotFound />);
    expect(screen.getByText(/sorry, this page is not exist/i)).toBeInTheDocument();
  });

  it('renders the 404 image', () => {
    render(<NotFound />);
    const image = screen.getByAltText(/404page/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
  });
});
