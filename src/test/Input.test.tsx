import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Input from '../components/Input';

describe('Input - Text Type', () => {
  it('renders placeholder correctly', () => {
    render(
      <Input
        placeholder="Type here"
        newValue={() => {}}
        value=""
        type="text"
        onEnter={() => {}}
        className="input"
      />
    );
    const inputElement = screen.getByPlaceholderText('Type here') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it('calls newValue when text is typed', () => {
    const mockNewValue = vi.fn();
    render(
      <Input
        placeholder="Enter text"
        newValue={mockNewValue}
        value=""
        type="text"
        onEnter={() => {}}
        className="input"
      />
    );
    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'test input' } });
    expect(mockNewValue).toHaveBeenCalledWith('test input');
  });

  it('calls onEnter when Enter key is pressed', () => {
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
    const input = screen.getByPlaceholderText('Press enter');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(mockOnEnter).toHaveBeenCalled();
  });
});

describe('Input - Checkbox Type', () => {
  it('renders checkbox and calls onChange when clicked', () => {
    const mockOnChange = vi.fn();
    render(
      <Input
        className="checkbox"
        type="checkbox"
        isChecked={false}
        onChange={mockOnChange}
        placeholder="Checkbox test"
      />
    );

    const checkbox = screen.getByPlaceholderText('Checkbox test') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.type).toBe('checkbox');

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
