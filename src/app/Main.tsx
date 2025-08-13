import Content from '../components/Content';
import Pagination from '../components/Pagination';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const Main = () => {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);
  const theme = useSelector((state: RootState) => state.switcherReducer.isDark);

  return (
    <div className={theme ? 'main-wrapper dark' : 'main-wrapper'}>
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
