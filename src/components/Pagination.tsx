import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { callAction } from '../store/services/dispatch';
import { useDispatch } from 'react-redux';

const Pagination = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pagination = useSelector((state: RootState) => state.paginationReducer.pagination);
  const { setPage } = callAction(dispatch);

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
              navigate(`/?page=${el}`);
            }}
          />
        ))}
      </div>
    );
  }
};

export default Pagination;
