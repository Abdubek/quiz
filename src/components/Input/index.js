import React from 'react';
import clsx from "clsx";

const Input = React.forwardRef(({ error, className, textarea, ...props }, ref) => {
  let cls = 'appearance-none w-48 border border-gray-500 shadow-inner px-4 font-open-sans font-light'
  if (error) {
    cls = clsx(cls, 'bg-red-100 border-red')
  }
  if (textarea) {
    return <textarea rows={5} className={clsx(cls, 'rounded-lg py-2', className)} {...props} ref={ref} />
  }
  return (
    <input className={clsx(cls, 'rounded-full', className)} {...props} ref={ref} />
  );
});

export default Input;
