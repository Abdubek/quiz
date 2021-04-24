import React from 'react';
import clsx from "clsx";

const Radio =  React.forwardRef(({ id, label, error, ...props }, ref) => {

  let cls = "inline-block ml-2 rounded-full flex-no-shrink"
  if (error) {
    cls = clsx(cls, 'radio-error')
  }

  return (
    <div className="flex items-center ml-4">
      <input id={id} type="radio" name="radio" className="hidden" {...props} ref={ref}/>
      <label htmlFor={id} className="flex items-center cursor-pointer text-md font-bold">
        {label}
        <span className={cls} />
      </label>
    </div>
  );
});

export default Radio;
