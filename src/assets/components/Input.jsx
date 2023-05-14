import React from "react";

const Input = ({placeholder, onChange, value, readOnly}) => {
  return (
   <input
    className='border-slate-600 border rounded-full grow px-4 mx-2'
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    readOnly={readOnly}
   />
  );
};

Input.defaultProps = {
  type: 'text'
}

export default Input;