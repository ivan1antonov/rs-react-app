import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Pagination = () => {
  const navigate = useNavigate();
  const pagination = useSelector((state: RootState) => state.paginationReducer.pagination);

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
              navigate(`/?page=${el}`);
            }}
          />
        ))}
      </div>
    );
  }
};

export default Pagination;
