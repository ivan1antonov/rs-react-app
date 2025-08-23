'use client';

import type { ApiResponse } from '../types/types';
import type { RootState } from '../store';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { callAction } from '../store/services/dispatch';
import { useDispatch } from 'react-redux';

export default function ContentBox({ getPeople }: { getPeople: ApiResponse }) {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectReducer.items);
  const { removeSelect, addSelect, clearSelect } = callAction(dispatch);
  const transformedData =
    getPeople?.results?.map((el, index) => ({
      ...el,
      id: index + 1,
    })) ?? [];

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
            <input
              className="checkbox"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <Link href={`/detail/${el.id}`} className="content">
              <div className="content_name">{el.name}</div>
              <div className="content_disc">{`Height: ${el.height}, Mass: ${el.mass}`}</div>
            </Link>
          </div>
        );
      })}

      {selectedItems.length > 0 && (
        <div className="flyout">
          <p className="item_select">{selectedItems.length} items are selected</p>
          <div>
            <button className="button-clear_select" onClick={clearSelect}>
              Unselect all
            </button>

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
          </div>
        </div>
      )}
    </>
  );
}
