'use client';
import React from 'react';
import { useState } from 'react';

interface BaseProps {
  className: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  onEnter?: () => void;
}

const Input = (props: BaseProps) => {
  const { className, type, onEnter, placeholder } = props;
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === 'text') {
      setValue(e.target.value);
    } else if (type === 'checkbox') {
      setChecked((prev) => !prev);
    }
  }

  return (
    <input
      className={className}
      type={type}
      value={value}
      checked={checked}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;
