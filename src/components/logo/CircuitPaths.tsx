import React from 'react';

export function CircuitPaths() {
  return (
    <>
      <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-[#00F0FF]" />
      <div className="absolute -right-4 top-1/2 w-4 h-0.5 bg-[#00F0FF]" />
      <div className="absolute left-1/2 -top-4 h-4 w-0.5 bg-[#00F0FF]" />
      <div className="absolute left-1/2 -bottom-4 h-4 w-0.5 bg-[#00F0FF]" />
    </>
  );
}