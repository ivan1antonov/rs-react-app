import Content from '../components/Content';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { ContentBoxProps } from '../types/types';

interface mainProps extends ContentBoxProps {
  shouldThrow: boolean;
  isLoading: boolean;
  pagination: number;
  getNewData: (value: string, page?: number) => Promise<void>;
  createError: () => void;
}

const Main = ({ data, shouldThrow, createError, isLoading, pagination, getNewData }: mainProps) => {
  const { page = '1' } = useParams();
  const pageNumber = Number(page);

  useEffect(() => {
    const prevSearch = localStorage.getItem('results') || '';
    getNewData(prevSearch, pageNumber);
  }, [pageNumber]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Content data={data} shouldThrow={shouldThrow} isError={createError} />
      <Pagination pagination={pagination} />
    </>
  );
};

export default Main;
