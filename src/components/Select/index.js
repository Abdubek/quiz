import React from 'react';
import clsx from "clsx";

const Select = React.forwardRef(({ children, error, ...props }, ref) => {
  let cls = 'appearance-none w-48 rounded-full border border-gray-500 shadow-inner px-4 font-open-sans font-light'
  if (error) {
    cls = clsx(cls, 'bg-red-100 border-red')
  }
  return (
    <div className='relative inline-block'>
      <select {...props} ref={ref} className={cls}>
        <option/>
        {children}
      </select>
      <img src='/arrow2.svg' className='absolute top-3 right-3' />
    </div>
  );
});

export default Select;
