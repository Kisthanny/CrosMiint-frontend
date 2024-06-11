import { ReactNode, useEffect, useRef } from "react";

const CardPopup = ({
  children,
  position,
}: {
  children: ReactNode;
  position:
    | "bottomLeft"
    | "bottomRight"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "left"
    | "top"
    | "right";
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (popupRef.current) {
      const parent = popupRef.current.parentElement;
      if (parent && window.getComputedStyle(parent).position !== "relative") {
        console.warn("The parent component should have position: relative");
      }
    }
  }, []);

  const positionClasses = {
    bottomRight: "top-full left-0 transform translate-y-2",
    bottomLeft: "top-full right-0 transform translate-y-2",
    topRight: "bottom-full left-0 transform -translate-y-2",
    topLeft: "bottom-full right-0 transform -translate-y-2",
    top: "bottom-full left-1/2 transform -translate-y-2 -translate-x-1/2",
    left: "top-1/2 right-full transform -translate-x-2 -translate-y-1/2",
    bottom: "top-full left-1/2 transform translate-y-2 -translate-x-1/2",
    right: "top-1/2 left-full transform translate-x-2 -translate-y-1/2",
  };

  return (
    <div
      ref={popupRef}
      className={`absolute bg-white shadow-lg rounded-lg z-50 ${positionClasses[position]}`}
    >
      {children}
    </div>
  );
};

export default CardPopup;
