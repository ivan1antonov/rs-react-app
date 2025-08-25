import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Pagination = ({ pagination }: { pagination: number }) => {
  const navigate = useNavigate();

  const pages = Array.from({ length: pagination }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((pageNumber) => (
        <Button
          key={pageNumber}
          className="pagination_item"
          text={String(pageNumber)}
          onClick={() => {
            navigate(`/?page=${pageNumber}`);
          }}
        />
      ))}
    </div>
  );
};

export default Pagination;
