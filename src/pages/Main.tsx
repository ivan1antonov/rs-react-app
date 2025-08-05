import Content from '../components/Content';
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchResultsThunk } from '../store/thunks/thunk';
import type { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';

const Main = () => {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);
  const dispatch = useDispatch<AppDispatch>();
  const results = 'all';
  // console.log('results: ', results);
  useEffect(() => {
    // console.log('first query');
    dispatch(fetchResultsThunk({ query: results }));
  }, []);

  return (
    <div className="main-wrapper">
      <div className="main-left">
        <Content />
        <Pagination />
      </div>
      <div className={`main-right ${!isDetailOpen ? 'hidden' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
