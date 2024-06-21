import { FunctionComponent, ReactNode } from "react";

interface MaskProps {
  maskImage: string;
  children?: ReactNode;
}

const Mask: FunctionComponent<MaskProps> = ({ maskImage, children }) => {
  return (
    <div
      style={{
        maskImage,
        maskSize: "100%",
        maskPosition: "center",
        maskRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};

export default Mask;
