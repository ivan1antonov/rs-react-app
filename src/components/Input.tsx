import React from 'react';

interface InputProps {
  placeholder?: string;
  newValue?: (value: string) => void;
  value?: string;
  type: string;
  onEnter?: () => void;
  className: string;
  onChange: () => void;
}

const Input = ({
  className,
  type,
  value,
  newValue,
  onEnter,
  placeholder,
  onChange,
}: InputProps) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (onEnter) {
        onEnter();
      }
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === 'checkbox') {
      onChange();
    } else if (newValue) {
      newValue(e.target.value);
    }
  }

  return (
    <input
      id="input"
      className={className}
      type={type}
      value={type === 'checkbox' ? undefined : value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
