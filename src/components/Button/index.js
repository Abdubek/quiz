import React from 'react';
import clsx from "clsx";

const Button = ({ variant = 'default', className, children }) => {

  const cls = 'border-blue w-48 h-10 text-md rounded-lg shadow-md focus:outline-none hover:shadow-sm font-arial uppercase'

  return (
    <button className={clsx(
      cls,
      className,
      {'border-blue border-opacity-100 border': variant === 'default'},
      {'bg-gradient-to-r from-blue to-blue-100 text-white': variant === 'primary'}
    )}>
      {children}
    </button>
  );
};

export default Button;
