import React from 'react';

interface resultsType {
  name: string;
  text: string;
}

interface ContentBoxProps {
  data: resultsType[];
}

export default class ContentBox extends React.Component<ContentBoxProps> {
  render() {
    return (
      <>
        <div className="title">
          <div className="title_name">Имя</div>
          <div className="title_text">Описание</div>
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
