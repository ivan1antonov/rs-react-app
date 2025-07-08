import React from 'react';
import Button from './Button';
import Input from './Input';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <Input />
          <Button />;
        </header>
      </>
    );
  }
}
