import React from 'react';

interface InputProps {
  placeholder?: string;
  newValue: (value: string) => void;
  value: string;
  type: string;
  onEnter: () => void;
  className: string;
}

const Input = ({ className, type, value, newValue, onEnter, placeholder }: InputProps) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnter();
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    newValue(e.target.value);
  }

  return (
    <input
      id={'input'}
      className={className}
      type={type}
      value={value}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
