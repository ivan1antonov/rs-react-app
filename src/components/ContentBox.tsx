import React from 'react';
import type { ContentBoxProps } from '../types/types';

export default class ContentBox extends React.Component<ContentBoxProps> {
  render() {
    return (
      <>
        <div className="title">
          <div className="title_name">Name</div>
          <div className="title_text">Description</div>
        </div>
        <div className="content">
          {this.props.data.map((el) => (
            <div key={el.name}>
              <div className="content_name">{el.name}</div>
              <div className="content_disc">{el.text}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
