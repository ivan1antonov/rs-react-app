'use client';

import Switcher from './Switcher';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get('query') || '');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/?query=${encodeURIComponent(query)}`);
  }

  return (
    <>
      <div className="logo">
        <Image src="/star-wars.svg" alt="star wars logo" width={56} height={12} />
      </div>
      <form className="header-box" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Do you want find anyone?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Link href="/about" className="about_button">
        About author
      </Link>
      <Switcher />
    </>
  );
};

export default Header;
