import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { callAction } from '../store/services/dispatch';
import Input from './Input';
import Button from './Button';
import Loader from './Loader';
import type { RootState } from '../store';
import type { ApiResponse } from '../types/types';

const ContentBox = (data: ApiResponse) => {
  const search = useSelector((state: RootState) => state.searchReducer);
  const page = useSelector((state: RootState) => state.pageReducer);

  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectReducer.items);
  const { removeSelect, addSelect, clearSelect, setPagination } = callAction(dispatch);
  const navigate = useNavigate();
  const transformedData =
    data?.results?.map((el, index) =>
      page === 1
        ? {
            ...el,
            id: index + 1,
          }
        : {
            ...el,
            id: Number(`${page - 1}1`) + index + 1,
          }
    ) ?? [];
  useEffect(() => {
    if (data) {
      setPagination(Math.ceil(data.count / 10));
    } else {
      setPagination(0);
    }
  }, [data, setPagination]);

  if (isError) return <div>Возникла ошибка попробуйте позже снова направить запрос</div>;

  const onItemClick = (id: number) => {
    if (!id) return;
    const detail = `${id}`;
    navigate(`detail/${detail}`);
  };
  if (isLoading) return <Loader />;

  return (
    <>
      {transformedData.map((el) => {
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

            {selectedItems.length > 0 && (
              <a
                href={`data:text/csv;charset=utf-8,${encodeURIComponent(
                  selectedItems
                    .map((item) => `${item.name},${item.height},/detail/${item.id}`)
                    .join('\n')
                )}`}
                download={`${selectedItems.length}_items.csv`}
                className="download_select"
              >
                Download CSV
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentBox;
