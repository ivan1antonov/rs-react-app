import React from 'react';
import type { ContentBoxProps } from '../types/types';

export default class ContentBox extends React.Component<ContentBoxProps> {
  render() {
    return (
      <>
        <div className="title grid colomn">
          <div className="title_name">Name</div>
          <div className="title_text">Description</div>
        </div>
        {this.props.data.map((el) => (
          <div className="content grid row" key={el.name}>
            <div className="content_name">{el.name}</div>
            <div className="content_disc">{el.text}</div>
          </div>
        ))}
      </>
    );
  }
}
