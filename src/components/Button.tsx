import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  text?: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
