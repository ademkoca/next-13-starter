'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MobileNav from './mobileNav';
import Link from 'next/link';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="w-[100%] h-8 px-10 py-10 flex justify-between">
        <div className="block sm:hidden order-2">
          <button onClick={toggleMenuOpen}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <h2 className="order-1">
          <Link href="/">LOGO</Link>
        </h2>
        <div className="hidden sm:block sm:order-2">
          <Link href="/login" className="bg-orange-500 rounded-2xl px-5 py-1">
            Login
          </Link>
        </div>
      </nav>

      <MobileNav menuOpen={menuOpen} onClick={toggleMenuOpen} />
    </>
  );
};

export default Nav;
