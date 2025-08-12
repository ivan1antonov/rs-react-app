import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Pagination = ({ pagination }: { pagination: number }) => {
  const navigate = useNavigate();

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
};

export default Pagination;
