import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}
