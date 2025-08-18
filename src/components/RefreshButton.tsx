'use client';

import { useTransition } from 'react';
import invalidatePage from './serverAction/InvalidatePage';

export default function RefreshButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button className="refresh" onClick={() => startTransition(() => invalidatePage())}>
      {isPending ? 'loading...' : 'refresh data'}
    </button>
  );
}
