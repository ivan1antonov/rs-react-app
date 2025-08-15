'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { callAction } from '../store/services/dispatch';
import { useDispatch } from 'react-redux';

const Pagination = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pagination = useSelector((state: RootState) => state.paginationReducer.pagination);
  const { setPage } = callAction(dispatch);

  const handleClick = (el: string) => {
    router.push(el);
  };

  if (pagination > 1) {
    const pages = Array.from({ length: pagination }, (_, i) => i + 1);
    return (
      <div className="pagination">
        {pages.map((el) => (
          <Button
            key={el}
            className="pagination_item"
            text={String(el)}
            onClick={() => {
              setPage(el);
              handleClick(`/?page=${el}`);
            }}
          />
        ))}
      </div>
    );
  }
};

export default Pagination;
