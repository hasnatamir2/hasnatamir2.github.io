import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const RoundedButton = ({ children, onClick }: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      className="group inline-flex cursor-pointer overflow-hidden rounded-full border px-5 py-4
            hover:opacity-50 "
    >
      <span className="group-hover:animate-top-to-bottom">{children}</span>
    </a>
  );
};

export default RoundedButton;
