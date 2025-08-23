'use client';
import Link from 'next/link';

export default function errorWrapper({ error }: { error: Error }) {
  return (
    <>
      <h1>Something wrong {error.message}</h1>
      <Link href="/"> Reload app </Link>
    </>
  );
}
