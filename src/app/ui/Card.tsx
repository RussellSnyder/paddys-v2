import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return (
    <div className={`max-w-lg rounded overflow-hidden shadow-lg ${className}`}>
      <div className="p-md-6">{children}</div>
    </div>
  );
};
