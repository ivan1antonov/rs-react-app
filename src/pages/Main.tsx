import Content from '../components/Content';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
