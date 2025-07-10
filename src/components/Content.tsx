import React from 'react';
import ContentBox from './ContentBox';
import type { ContentBoxProps } from '../types/types';

export default class Content extends React.Component<ContentBoxProps> {
  render() {
    return (
      <>
        <main className="results">
          <ContentBox data={this.props.data} />
        </main>
      </>
    );
  }
}
