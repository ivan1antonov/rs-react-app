import Content from '../components/Content';
import Pagination from '../components/Pagination';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { id } = useParams();
  const isDetailOpen = Boolean(id);

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
