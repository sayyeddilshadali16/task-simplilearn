import React from "react";

const Button = ({ type = 'button', title = '', icon, variant = '', full = false }, className) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''} ${className}`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={20} height={20} />}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
