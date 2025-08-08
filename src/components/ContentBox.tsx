import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import Input from './Input';
import { callAction } from '../utils/dispatch';
import Button from './Button';
import Loader from './Loader';

const ContentBox = () => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const navigate = useNavigate();
  const page = useSelector((state: RootState) => state.pageReducer);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectReducer.items);
  const { removeSelect, addSelect, clearSelect } = callAction(dispatch);
  const handleDownload = () => {
    const csvContent = selectedItems
      .map((item) => `${item.name},${item.height},/detail/${item.id}`)
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${selectedItems.length}_items.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const onItemClick = (id: number) => {
    if (!id) return;
    const detail = `${id}`;
    navigate(`detail/${detail}`);
  };
  return (
    <>
      {!data.length ? (
        <Loader />
      ) : (
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
                <Input
                  className="checkbox"
                  type="checkbox"
                  isChecked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="content" onClick={() => onItemClick(el.id)}>
                  {/* <div className="content_img">
                    <img src={el?.image} alt="person image" />
                  </div> */}
                  <div className="content_name">{el.name}</div>
                  <div className="content_disc">{`Height: ${el.height}, Mass: ${el.mass}`}</div>
                </div>
              </div>
            );
          })}

          {selectedItems.length > 0 && (
            <div className="flyout">
              <p className="item_select">{selectedItems.length} items are selected</p>
              <div>
                <Button className="button-clear_select" text="Unselect all" onClick={clearSelect} />
                <Button className="download_select" text="Download" onClick={handleDownload} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ContentBox;
