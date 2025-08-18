'use client';

import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../store';
import { callAction } from '../store/services/dispatch';
import Switcher from './Switcher';
import Image from 'next/image';
import logo from '../../public/star-wars.svg';
import Link from 'next/link';

const Header = () => {
  const value = useSelector((state: RootState) => state.valueReducer);
  const dispatch = useDispatch<AppDispatch>();

  const { clearValue, searchData } = callAction(dispatch);
  const navigate = useNavigate();

  function onSearch() {
    navigate('/');
    searchData(value);
    clearValue();
  }

  return (
    <>
      <div className="logo">
        <Image src={logo} />
      </div>
      <div className="header-box">
        <Input
          className="input"
          type="text"
          onEnter={onSearch}
          placeholder="Do you want find anyone?"
        />
        <Button className="button" text="Search" onClick={onSearch} />
        <Link href="/about" className="about_button">
          {' '}
          About author{' '}
        </Link>
        <Switcher />
      </div>
    </>
  );
};

export default Header;
