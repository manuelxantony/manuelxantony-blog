'use client';

import NavBar from '@/components/nav';
import { useState } from 'react';

import {
  AiFillTwitterCircle,
  AiOutlineMail,
  AiFillGithub,
} from 'react-icons/ai';

export default function Header() {
  const [mailCopied, setMailCopied] = useState('');

  const openNewTab = (urlToOpen: string) => {
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  };
  return (
    <header className="sticky top-0 z-40 mt-5  flex justify-center">
      <div className="w-full flex justify-center">
        <NavBar />
      </div>
      <div className="flex flex-row items-center h-[36px] bt-5 mx-10 gap-5  ">
        <button
          onClick={() => {
            openNewTab('https://twitter.com/xmanuelxantony');
          }}
          className="text-[14px] font-medium"
        >
          <AiFillTwitterCircle size={22} color="white" />
        </button>

        {/* <button
          onClick={() => {
            navigator.clipboard.writeText('manuelxantony@gmail.com');
          }}
          className="text-[14px] font-medium"
        >
          <AiOutlineMail size={22} color="white" />
        </button> */}

        <button
          onClick={() => {
            openNewTab('https://github.com/manuelxantony');
          }}
          className="text-[14px] font-medium"
        >
          <AiFillGithub size={22} color="white" />
        </button>
      </div>
    </header>
  );
}
