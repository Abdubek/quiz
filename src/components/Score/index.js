import React from 'react';

const Score = ({ point = 0 }) => {
  return (
    <div className='w-10 h-10 bg-gradient-to-r from-purple to-blue rounded-full flex items-center justify-center text-lg text-white font-bold'>
      {point}
    </div>
  );
};

export default Score;
