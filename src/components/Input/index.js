import React from 'react';

const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <input className='appearance-none w-48 rounded-full border border-gray-500 shadow-inner px-4 font-open-sans font-light' {...props} ref={ref} />
  );
});

export default Input;
