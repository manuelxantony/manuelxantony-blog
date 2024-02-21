'use client';

import { useEffect, useRef } from 'react';

export default function ProjectCard({
  id,
  name,
  description,
  url,
  github,
}: {
  id: number;
  name: string;
  description: string;
  url: string;
  github: string;
}) {
  console.log(github);
  const cardsContainer = useRef<HTMLDivElement>(null);

  const applyOverlayMask = (e: PointerEvent) => {
    if (!cardsContainer.current) {
      return;
    }

    const x = e.pageX - cardsContainer.current.offsetLeft;
    const y = e.pageY - cardsContainer.current.offsetTop;

    cardsContainer.current.setAttribute(
      'style',
      `--x: ${x}px; --y: ${y}px; --opacity: 1`
    );
  };

  useEffect(() => {
    document.body.addEventListener('pointermove', (e) => {
      applyOverlayMask(e);
    });
    return () => {
      document.body.removeEventListener('pointermove', (e) => {
        applyOverlayMask(e);
      });
    };
  }, []);

  const openNewTab = (urlToOpen: string) => {
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  };

  return (
    // card design
    <div className="relative" ref={cardsContainer}>
      {/* main card */}
      <div className="rounded-3xl border border-solid border-1 border-[#eceff133]  h-[320px] mb-5 p-4  ">
        {/* card content layout */}
        <div className="h-full width flex flex-col justify-center items-center text-gray-100">
          <h2 className="font-bold mb-4">{name}</h2>
          <h4>{description}</h4>
          <div className="flex flex-row gap-4 mt-4">
            <button
              className="btn mt-5 w-[128px] h-[50px]"
              onClick={() => {
                openNewTab(github);
              }}
            />
            <button
              className="btn mt-5 w-[128px] h-[50px]"
              onClick={() => {
                openNewTab(url);
              }}
            />
          </div>
        </div>
      </div>

      {/* twin card */}
      <div
        className="rounded-3xl border border-solid border-1 border-[#ffffffa9] h-[320px] mb-5 p-4 transition-colors bg-[#00000000] text-transparent absolute inset-0  select-none pointer-events-none"
        style={{
          opacity: 'var(--opacity, 0)',
          mask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 60%
                )`,
          WebkitMask: `
                radial-gradient(
                  25rem 25rem at var(--x) var(--y),
                  #000 1%,
                  transparent 60%
                )`,
        }}
      >
        {/* card content layout */}
        <div className="h-full width flex flex-col justify-center items-center text-white">
          <h2 className="font-bold mb-4">{name}</h2>
          <h4>{description}</h4>
          <div className="flex flex-row gap-4 mt-4">
            <div className="btn mt-5 w-[128px] h-[50px] bg-[#303030]">
              Github
            </div>
            <div className="btn mt-5 w-[128px] h-[50px] bg-[#212121] ">
              View
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
