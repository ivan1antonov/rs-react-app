import React from 'react';
import ContentBox from './ContentBox';
import Button from './Button';
import type { ContentProps } from '../types/types';

export default class Content extends React.Component<ContentProps> {
  render() {
    if (this.props.shouldThrow) {
      throw new Error('Error inside to Content');
    }
    return (
      <>
        <main className="results">
          <ContentBox data={this.props.data} />
          <Button className="create error" onClick={this.props.isError} text="break the universe" />
        </main>
      </>
    );
  }
}
