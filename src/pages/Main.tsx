import Content from '../components/Content';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import type { ContentBoxProps } from '../types/types';

interface mainProps extends ContentBoxProps {
  shouldThrow: boolean;
  isLoading: boolean;
  pagination: number;
  getNewData: (value: string, page?: number) => Promise<void>;
  createError: () => void;
}

const Main = ({ data, shouldThrow, createError, isLoading, pagination, getNewData }: mainProps) => {
  const [searchParams] = useSearchParams();
  const pageNumber = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();
  const { id } = useParams();
  const isDetailOpen = Boolean(id);

  useEffect(() => {
    const prevSearch = localStorage.getItem('results') || '';
    getNewData(prevSearch, pageNumber);
  }, [pageNumber]);

  const handleItemClick = (url: string) => {
    if (!url) return;
    const id = url.split('/').filter(Boolean).pop();
    navigate(`/details/${id}`);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="main-wrapper">
      <div className="main-left">
        <Content
          data={data}
          shouldThrow={shouldThrow}
          isError={createError}
          onItemClick={handleItemClick}
        />
        <Pagination pagination={pagination} />
      </div>
      <div className={`main-right ${!isDetailOpen ? 'hidden' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
