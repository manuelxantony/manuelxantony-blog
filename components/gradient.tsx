import React from 'react';

export default function GradientText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-block">
      <span className="text-transparent bg-gradient-to-r from-gray-500 to-white bg-clip-text animate-gradient">
        {children}
      </span>
    </div>
  );
}
