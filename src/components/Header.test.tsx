import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders header container and into Input and Button components', () => {
    const mockNewValue = vi.fn();
    const mockOnSearch = vi.fn();

    render(<Header value="test" newValue={mockNewValue} onSearch={mockOnSearch} />);
    const headerDiv = document.querySelector('.header');
    expect(headerDiv).toBeInTheDocument();
    const input = screen.getByDisplayValue('test');
    expect(input).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Search/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
