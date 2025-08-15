'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Content from '../components/Content';
import Pagination from '../components/Pagination';

export default function Main({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.switcherReducer.isDark);

  return (
    <div className={theme ? 'main-wrapper dark' : 'main-wrapper'}>
      <div className="main-left">
        <Content />
        <Pagination />
      </div>
      <div className="main-right">{children}</div>
    </div>
  );
}
