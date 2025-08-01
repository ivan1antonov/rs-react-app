import Content from '../components/Content';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import type { ContentBoxProps } from '../types/types';
// import { UseSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';

// import type { RootState } from '../store';

// interface mainProps extends ContentBoxProps {
//   shouldThrow: boolean;
//   isLoading: boolean;
//   pagination: number;
//   getNewData: (value: string, page?: number) => Promise<void>;
//   createError: () => void;
// }

const Main = () => {
  // const [searchParams] = useSearchParams();
  // const pageNumber = Number(searchParams.get('page')) || 1;
  // const navigate = useNavigate();
  // const { id } = useParams();
  // const isDetailOpen = Boolean(id);

  // useEffect(() => {
  //   const prevSearch = localStorage.getItem('results') || '';
  //   getNewData(prevSearch, pageNumber);
  // }, [pageNumber]);

  // const handleItemClick = (url: string) => {
  //   if (!url) return;
  //   const id = url.split('/').filter(Boolean).pop();
  //   navigate(`/details/${id}`);
  //   // console.log(id);
  // };
  // const isLoading = useSelector((state: RootState) => state.loaderReducer.isLoader);
  // <div className={`main-right ${!isDetailOpen ? 'hidden' : ''}`}>
  //   </div>

  return (
    <div className="main-wrapper">
      <div className="main-left">
        <Content />
        <Pagination />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
