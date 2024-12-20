import React from 'react';

export function LogoSquare() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 border-2 border-[#00F0FF] rounded-lg" />
      <div className="text-[#00F0FF] text-4xl font-bold py-2">AI</div>
      
      {/* Top circuit pins */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-3 bg-[#00F0FF]" />
          ))}
        </div>
      </div>
      
      {/* Side circuit connectors */}
      <CircuitConnector position="left" />
      <CircuitConnector position="right" />
    </div>
  );
}

interface CircuitConnectorProps {
  position: 'left' | 'right';
}

function CircuitConnector({ position }: CircuitConnectorProps) {
  const isLeft = position === 'left';
  return (
    <div className={`absolute ${position}-0 top-1/2 transform -translate-y-1/2 ${isLeft ? '-translate-x-full' : 'translate-x-full'}`}>
      <div className="flex space-x-1">
        {isLeft ? (
          <>
            <div className="w-3 h-0.5 bg-[#00F0FF]" />
            <div className="w-1 h-1 rounded-full bg-[#00F0FF]" />
          </>
        ) : (
          <>
            <div className="w-1 h-1 rounded-full bg-[#00F0FF]" />
            <div className="w-3 h-0.5 bg-[#00F0FF]" />
          </>
        )}
      </div>
    </div>
  );
}