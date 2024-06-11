import { useState, useRef, useEffect } from 'react';

const useColorChangeOnPress = <T extends HTMLElement>() => {
    const [isPressed, setIsPressed] = useState(false);
    const elementRef = useRef<T | null>(null);

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            element.addEventListener('mousedown', handleMouseDown);
            element.addEventListener('mouseup', handleMouseUp);
            element.addEventListener('mouseleave', handleMouseUp);
            element.addEventListener('touchstart', handleMouseDown);
            element.addEventListener('touchend', handleMouseUp);

            return () => {
                element.removeEventListener('mousedown', handleMouseDown);
                element.removeEventListener('mouseup', handleMouseUp);
                element.removeEventListener('mouseleave', handleMouseUp);
                element.removeEventListener('touchstart', handleMouseDown);
                element.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, []);

    return {
        isPressed,
        elementRef,
    };
};

export default useColorChangeOnPress;
