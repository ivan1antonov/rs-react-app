'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Pagination = ({ count }: { count: number }) => {
  const [pages, setPages] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (count) {
      const totalPages = Math.ceil(count / 10);
      setPages(Array.from({ length: totalPages }, (_, i) => i + 1));
    }
  }, [count]);

  const handleClick = (page: number) => {
    router.push(`/?page=${page}`);
  };

  if (pages.length <= 1) return null;

  return (
    <div className="pagination">
      {pages.map((el) => (
        <button key={el} className="pagination_item" onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
