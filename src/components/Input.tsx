import React from 'react';

interface InputProps {
  placeholder?: string;
  newValue: (value: string) => void;
  value: string;
  type: string;
  onEnter: () => void;
  className: string;
}

export default class Input extends React.Component<InputProps> {
  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && this.props.onEnter) {
      this.props.onEnter();
    }
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.newValue(e.target.value);
  };
  render() {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        value={this.props.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
