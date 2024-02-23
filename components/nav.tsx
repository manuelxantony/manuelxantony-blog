'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { log } from 'console';

export default function NavBar() {
  const sectionRefs = useRef([]);
  const [selectedButton, setSelectedButton] = useState('home');
  const [section, setSection] = useState('home');

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
        }
      });
    }, options);

    sectionRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  });

  const handleClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

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
    <nav className="flex">
      <div className="nav-container text-white md:ml-[120px]">
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
