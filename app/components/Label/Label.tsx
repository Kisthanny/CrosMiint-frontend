import { FunctionComponent, ReactNode } from "react";

interface LabelProps {
  name?: string;
  children?: ReactNode;
  className?: string;
}

const Label: FunctionComponent<LabelProps> = ({
  name,
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative flex h-[34px] items-center justify-center rounded-lg border border-gray-300 ${className}`}
    >
      <p className="text-sm font-medium">{children}</p>
      <div className="absolute -top-2 rounded-md bg-gray-600 px-[6px] text-[10px] text-white">
        {name}
      </div>
    </div>
  );
};

export default Label;
