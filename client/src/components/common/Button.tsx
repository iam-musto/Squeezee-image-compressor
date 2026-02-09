import React from "react";
import type { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "font-medium transition-all duration-200 border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-black text-stone-100 hover:bg-stone-900 active:scale-95",
    secondary: "bg-stone-100 text-black hover:bg-stone-200 active:scale-95",
    outline: "bg-transparent text-black hover:bg-stone-100 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
