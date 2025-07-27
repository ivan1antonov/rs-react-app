import type { ContentBoxProps } from '../types/types';

const ContentBox = ({ data }: ContentBoxProps) => {
  return (
    <>
      <div className="title grid colomn">
        <div className="title_name">Name</div>
        <div className="title_text">Description</div>
      </div>
      {data.map((el) => (
        <div className="content grid row" key={el.name}>
          <div className="content_name">{el.name}</div>
          <div className="content_disc">{el.text}</div>
        </div>
      ))}
    </>
  );
};

export default ContentBox;
