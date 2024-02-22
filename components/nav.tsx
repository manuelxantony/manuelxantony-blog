'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [selectedButton, setSelectedButton] = useState('home');

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  console.log(selectedButton);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const ele = document.getElementById(targetId);
    ele?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="flex mt-5">
      <div className="nav-container">
        <div className="nav-container-stroke"></div>
        <button
          className={`nav-button  hover:text-white ${
            selectedButton == 'home' ? 'bg-[#95959562] text-white' : ''
          }`}
          onClick={() => {
            handleClick('home');
          }}
        >
          <Link href="#home" onClick={handleScroll}>
            Home
          </Link>
        </button>
        <button
          className={`nav-button  ${
            selectedButton == 'about' ? 'bg-[#95959562] text-white' : ''
          }`}
          onClick={() => {
            handleClick('about');
          }}
        >
          <Link href="#about" onClick={handleScroll}>
            About
          </Link>
        </button>

        <button
          className={`nav-button ${
            selectedButton == 'projects' ? 'bg-[#95959562] text-white' : ''
          }`}
          onClick={() => {
            handleClick('projects');
          }}
        >
          <Link href="#projects" onClick={handleScroll}>
            {' '}
            Projects
          </Link>
        </button>
        <button
          className={`nav-button  ${
            selectedButton == 'blog' ? 'bg-[#95959562] text-white' : ''
          }`}
          onClick={() => {
            handleClick('blog');
          }}
        >
          <Link href="#blog" onClick={handleScroll}>
            {' '}
            Blog
          </Link>
        </button>
      </div>
    </nav>
  );
}
