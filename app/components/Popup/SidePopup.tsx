import { ReactNode, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const SidePopup = ({
  children,
  position,
  isOpen,
  onClose,
  onClickOverlay,
}: {
  children: ReactNode;
  position: "bottom" | "left" | "top" | "right";
  isOpen: boolean;
  onClose?: () => void;
  onClickOverlay?: () => void;
}) => {
  const DURATION = 300;
  const [hasBeenOpen, setHasBeenOpen] = useState(false);

  const positionClasses = {
    top: "top-0 left-0 right-0 w-screen max-h-[80%]",
    left: "left-0 top-0 h-screen max-w-[80%]",
    bottom: "bottom-0 left-0 right-0 w-screen max-h-[80%]",
    right: "right-0 top-0 h-screen max-w-[80%]",
  };

  const animationClasses = {
    left: "transition-transform transform",
    right: "transition-transform transform",
    top: "transition-transform transform",
    bottom: "transition-transform transform",
  };

  const animationInClasses = {
    left: "translate-x-0",
    right: "translate-x-0",
    top: "translate-y-0",
    bottom: "translate-y-0",
  };

  const animationOutClasses = {
    left: "-translate-x-full",
    right: "translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full",
  };

  useEffect(() => {
    if (isOpen) {
      setHasBeenOpen(true);
    } else if (hasBeenOpen && onClose) {
      setHasBeenOpen(false);
      const timer = setTimeout(() => {
        onClose();
      }, DURATION);
      return () => clearTimeout(timer);
    } else {
      setHasBeenOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <Transition
        show={isOpen}
        enter={`transition-opacity duration-${DURATION}`}
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave={`transition-opacity duration-${DURATION}`}
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClickOverlay}
        ></div>
      </Transition>
      <Transition
        show={isOpen}
        enter={`${animationClasses[position]} duration-${DURATION}`}
        enterFrom={animationOutClasses[position]}
        enterTo={animationInClasses[position]}
        leave={`${animationClasses[position]} duration-${DURATION}`}
        leaveFrom={animationInClasses[position]}
        leaveTo={animationOutClasses[position]}
      >
        <div
          className={`fixed bg-white shadow-lg z-50 ${positionClasses[position]}`}
        >
          {children}
        </div>
      </Transition>
    </>
  );
};

export default SidePopup;
