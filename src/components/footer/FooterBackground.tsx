import React from 'react';

export function FooterBackground() {
  return (
    <>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/[0.02] to-transparent pointer-events-none" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L60 48 L60 54' fill='none' stroke='%2300F0FF' stroke-width='0.5'/%3E%3Cpath d='M6 48 L0 48 L0 54' fill='none' stroke='%2300F0FF' stroke-width='0.5'/%3E%3Cpath d='M54 12 L60 12 L60 6' fill='none' stroke='%2300F0FF' stroke-width='0.5'/%3E%3Cpath d='M6 12 L0 12 L0 6' fill='none' stroke='%2300F0FF' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />
    </>
  );
}