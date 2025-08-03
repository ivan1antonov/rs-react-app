import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
// import Input from './Input';
// import { callAction } from '../utils/dispatch';

const ContentBox = () => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const navigate = useNavigate();
  const page = useSelector((state: RootState) => state.pageReducer);
  // const dispatch = useDispatch();
  // console.log(page);
  // const selectedItems = useSelector((state: RootState) => state.selectReducer.items);
  // const { removeSelect, addSelect } = callAction(dispatch);

  // const isChecked = selectedItems.some((el) => el.id === item.id);

  // const handleCheckboxChange = () => {
  //   if (isChecked) {
  //     addSelect(item.id);
  //   } else {
  //     removeSelect(item);
  //   }
  // };

  const onItemClick = (id: number) => {
    if (!id) return;
    const detail = `${id}.json`;
    navigate(`/details/id/${detail}`);
    // console.log(id);
  };
  return (
    <>
      {data.slice((Number(page) - 1) * 10, Number(page) * 10).map((el) => (
        <div className="content" key={el.name} onClick={() => onItemClick(el.id)}>
          <div className="content_img">
            <img src={el.image} alt="person image" />
          </div>
          <div className="content_name">{el.name}</div>
          <div className="content_disc">{`Height: ${el.height}, Mass: ${el.mass}`}</div>
        </div>
      ))}
    </>
  );
};

export default ContentBox;
