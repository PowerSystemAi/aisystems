import React from 'react';

export function CircuitNodes() {
  const nodePositions = [
    { className: '-left-5 top-1/2 -translate-y-1/2' },
    { className: '-right-5 top-1/2 -translate-y-1/2' },
    { className: 'left-1/2 -top-5 -translate-x-1/2' },
    { className: 'left-1/2 -bottom-5 -translate-x-1/2' }
  ];

  return (
    <>
      {nodePositions.map((pos, index) => (
        <div
          key={index}
          className={`absolute w-1.5 h-1.5 rounded-full bg-[#00F0FF] transform ${pos.className}`}
        />
      ))}
    </>
  );
}