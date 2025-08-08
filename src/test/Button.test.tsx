import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { describe, it, expect, vi } from 'vitest';

describe('Button', () => {
  it('render with correct text', () => {
    render(<Button text="World can click me" onClick={() => {}} className="btn" />);
    expect(screen.getByText('World can click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handlerClick = vi.fn();
    render(<Button text="Click" onClick={handlerClick} className="btn" />);
    fireEvent.click(screen.getByText('Click'));
    expect(handlerClick).toHaveBeenCalledTimes(1);
  });
});
