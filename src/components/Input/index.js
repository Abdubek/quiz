import React from 'react';
import clsx from "clsx";

const Input = React.forwardRef(({ error, ...props }, ref) => {
  let cls = 'appearance-none w-48 rounded-full border border-gray-500 shadow-inner px-4 font-open-sans font-light'
  if (error) {
    cls = clsx(cls, 'bg-red-100 border-red')
  }
  return (
    <input className={cls} {...props} ref={ref} />
  );
});

export default Input;
