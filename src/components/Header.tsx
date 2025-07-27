import React from 'react';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  newValue: (value: string) => void;
  onSearch: () => void;
  value: string;
}

const Header = ({ value, newValue, onSearch }: HeaderProps) => {
  const navigate = useNavigate();
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
      <Button className="about_button" text="About author" onClick={() => navigate('/about')} />
    </header>
  );
};

export default Header;
