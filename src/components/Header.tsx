import React from 'react';
import Button from './Button';
import Input from './Input';

interface HeaderProps {
  newValue: (value: string) => void;
  onSearch: () => void;
  value: string;
}

const Header = ({ value, newValue, onSearch }: HeaderProps) => {
  return (
    <header className="header">
      <Input
        className="input"
        type="text"
        value={value}
        newValue={newValue}
        onEnter={onSearch}
        placeholder="Do you want find anyone?"
      />
      <Button className="button" text="Search" onClick={onSearch} />
    </header>
  );
};

export default Header;
