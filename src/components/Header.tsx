import React from 'react';
import Button from './Button';
import Input from './Input';

interface HeaderProps {
  newValue: (value: string) => void;
  onSearch: () => void;
  value: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <>
        <header className="header">
          <Input
            type="text"
            value={this.props.value}
            newValue={this.props.newValue}
            onEnter={this.props.onSearch}
            placeholder="Do you want find anyone?"
          />
          <Button text="Search" onClick={this.props.onSearch} />
        </header>
      </>
    );
  }
}
