import React from 'react';
import ContentBox from './ContentBox';

interface resultsType {
  name: string;
  text: string;
}

interface ContentBoxProps {
  data: resultsType[];
}

export default class Content extends React.Component<ContentBoxProps> {
  render() {
    return (
      <>
        <main className="Results">
          <ContentBox data={this.props.data} />
        </main>
      </>
    );
  }
}
