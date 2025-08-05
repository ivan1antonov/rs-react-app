import React from 'react';

interface BaseProps {
  className: string;
  type: 'text' | 'checkbox';
  placeholder?: string;
  onEnter?: () => void;
}

type TextInputProps = BaseProps & {
  type: 'text';
  value: string;
  newValue: (value: string) => void;
};

type CheckboxInputProps = BaseProps & {
  type: 'checkbox';
  isChecked: boolean;
  onChange: () => void;
};

type InputProps = TextInputProps | CheckboxInputProps;

const Input = (props: InputProps) => {
  const { className, type, onEnter, placeholder } = props;

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && onEnter) {
      onEnter();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (type === 'text' && 'newValue' in props) {
      props.newValue(e.target.value);
    } else if (type === 'checkbox' && 'onChange' in props) {
      props.onChange();
    }
  }

  return (
    <input
      className={className}
      type={type}
      value={type === 'text' ? props.value : undefined}
      checked={type === 'checkbox' ? props.isChecked : undefined}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;
