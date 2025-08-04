import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import Input from './Input';
import { callAction } from '../utils/dispatch';

const ContentBox = () => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const navigate = useNavigate();
  const page = useSelector((state: RootState) => state.pageReducer);
  const selectItems = useSelector((state: RootState) => state.selectReducer);
  console.log(selectItems);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectReducer.items);
  const { removeSelect, addSelect } = callAction(dispatch);
  const onItemClick = (id: number) => {
    if (!id) return;
    const detail = `${id}.json`;
    navigate(`/details/id/${detail}`);
  };
  return (
    <>
      {data.slice((Number(page) - 1) * 10, Number(page) * 10).map((el) => {
        const isChecked = selectedItems.some((item) => item.id === el.id);

        const handleCheckboxChange = () => {
          if (isChecked) {
            removeSelect(el);
          } else {
            addSelect(el);
          }
        };

        return (
          <div className="wramper_contentbox" key={el.id}>
            <Input className="checkbox" type="checkbox" onChange={handleCheckboxChange} />
            <div className="content" onClick={() => onItemClick(el.id)}>
              <div className="content_img">
                <img src={el.image} alt="person image" />
              </div>
              <div className="content_name">{el.name}</div>
              <div className="content_disc">{`Height: ${el.height}, Mass: ${el.mass}`}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ContentBox;
