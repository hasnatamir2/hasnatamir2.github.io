"use client";
import { FC, useState, useEffect } from "react";

const Cursor: FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", mMove);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", mMove);
        };

        const mMove = (el: MouseEvent) => {
            setPosition({ x: el.clientX, y: el.clientY });
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);
    return (
        <div
            className='custom-cursor'
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default Cursor;
