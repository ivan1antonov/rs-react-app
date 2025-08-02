import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const ContentBox = () => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const navigate = useNavigate();

  const onItemClick = (url: string) => {
    if (!url) return;
    const id = url.split('/').filter(Boolean).pop();
    navigate(`/details/${id}`);
    // console.log(id);
  };
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
