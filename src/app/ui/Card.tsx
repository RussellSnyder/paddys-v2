import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg">
      <div className="p-md-6">{children}</div>
    </div>
  );
};
