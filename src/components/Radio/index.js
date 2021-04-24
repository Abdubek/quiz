import React from 'react';

const Radio =  React.forwardRef(({ id, label, ...props }, ref) => {
  return (
    <div className="flex items-center ml-4">
      <input id={id} type="radio" name="radio" className="hidden" {...props} ref={ref}/>
      <label htmlFor={id} className="flex items-center cursor-pointer text-md font-bold">
        {label}
        <span className="inline-block ml-2 rounded-full flex-no-shrink" />
      </label>
    </div>
  );
});

export default Radio;
