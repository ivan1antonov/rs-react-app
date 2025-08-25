import type { ContentBoxProps, resultsType } from '../types/types';

interface ClickDetails extends ContentBoxProps {
  onItemClick: (url: string) => void;
}

interface ItemProps {
  el: resultsType;
  onItemClick: (url: string) => void;
}

const ContentBox = ({ data, onItemClick }: ClickDetails) => {
  const Header = () => (
    <div className="title grid column">
      <div className="title_name">Name</div>
      <div className="title_text">Description</div>
    </div>
  );

  const Item = ({ el, onItemClick }: ItemProps) => (
    <div className="content grid row" onClick={() => onItemClick(el.url)}>
      <div className="content_name">{el.name}</div>
      <div className="content_disc">{el.text}</div>
    </div>
  );
  return (
    <>
      <Header />
      {data.map((el) => (
        <Item key={el.name} el={el} onItemClick={onItemClick} />
      ))}
    </>
  );
};

export default ContentBox;
