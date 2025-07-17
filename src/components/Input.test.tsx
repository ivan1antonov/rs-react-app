import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('render component placeholder with correct text', () => {
    render(
      <Input
        placeholder="World can click me"
        newValue={() => {}}
        value=""
        type="text"
        onEnter={() => {}}
        className="input"
      />
    );
    const inputElement = screen.getByPlaceholderText('World can click me');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls newValue when text is entered', () => {
    const mockNewValue = vi.fn();
    render(
      <Input
        placeholder="World can click me"
        newValue={mockNewValue}
        value=""
        type="text"
        onEnter={() => {}}
        className="input"
      />
    );
    const input = screen.getByPlaceholderText('World can click me');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(mockNewValue).toHaveBeenCalledWith('hello');
  });

  it('call Enter when Enter is pressed', () => {
    const mockOnEnter = vi.fn();
    render(
      <Input
        placeholder="Press enter"
        newValue={() => {}}
        value=""
        type="text"
        onEnter={mockOnEnter}
        className="input"
      />
    );
    screen.debug();
    const input = screen.getByPlaceholderText('Press enter');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockOnEnter).toHaveBeenCalled();
  });
});
