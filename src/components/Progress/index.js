import React from 'react';
import clsx from "clsx";

const Progress = ({ className, percent = 10 }) => {
  return (
    <div className={clsx(className, 'w-full bg-gradient-to-r from-blue to-purple h-2.5 rounded-full')}>
      <div className='h-2.5 bg-gradient-to-r from-green to-green-100 z-10 rounded-full' style={{ width: `${percent}%` }} />
    </div>
  );
};

export default Progress;
