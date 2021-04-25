import React from 'react';
import clsx from "clsx";

const Radio =  React.forwardRef(({ id, label, error, className, labelClassName, ...props }, ref) => {

  let cls = "inline-block ml-2 rounded-full flex-no-shrink"
  if (error) {
    cls = clsx(cls, 'radio-error')
  }

  return (
    <div className={clsx(className, "flex items-center")}>
      <input id={id} type="radio" name="radio" className="hidden" {...props} ref={ref}/>
      <label htmlFor={id} className={clsx(labelClassName, "flex items-center cursor-pointer text-base font-bold uppercase")}>
        {label}
        <span className={cls} />
      </label>
    </div>
  );
});

export default Radio;
