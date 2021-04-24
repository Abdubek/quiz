import React from 'react';

const Select = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div className='relative inline-block'>
      <select {...props} ref={ref} className='appearance-none w-48 rounded-full border border-gray-500 shadow-inner px-4 font-open-sans font-light'>
        <option/>
        {children}
      </select>
      <img src='/arrow2.svg' className='absolute top-3 right-3' />
    </div>
  );
});

export default Select;
