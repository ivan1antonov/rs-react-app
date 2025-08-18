import Content from '../components/Content';
import Pagination from '../components/Pagination';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-left">
      <Content />
      {children}
      <Pagination />
    </div>
  );
}
