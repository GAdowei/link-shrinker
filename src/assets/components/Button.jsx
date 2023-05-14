import React from "react";

const Button = ({text, icon, onClick}) => {
  return (
   <button
    className='flex bg-violet-400 hover:bg-sky-300 active:bg-sky-400 ml-4 p-3 rounded-lg items-center'
    text={text}
    icon={icon}
    onClick={onClick}>
    {text}
    {icon}
   </button>
  );
};

export default Button;
