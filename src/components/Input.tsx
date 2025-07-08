import React from 'react';

interface InputProps {
  placeholder?: string;
}

export default class Input extends React.Component<InputProps> {
  render() {
    return <input {...this.props} />;
  }
}
