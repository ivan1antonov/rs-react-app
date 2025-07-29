import type { ContentBoxProps } from '../types/types';

interface ClickDetails extends ContentBoxProps {
  onItemClick: (url: string) => void;
}

const ContentBox = ({ data, onItemClick }: ClickDetails) => {
  return (
    <>
      <div className="title grid colomn">
        <div className="title_name">Name</div>
        <div className="title_text">Description</div>
      </div>
      {data.map((el) => (
        <div className="content grid row" key={el.name} onClick={() => onItemClick(el.url)}>
          <div className="content_name">{el.name}</div>
          <div className="content_disc">{el.text}</div>
        </div>
      ))}
    </>
  );
};

export default ContentBox;
