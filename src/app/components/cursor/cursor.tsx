"use client";
import { FC, useState, useEffect, useRef } from "react";
import { Linear, gsap } from "gsap";

const Cursor: FC = () => {
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
    };

    const mMove = (el: MouseEvent) => {
      gsap.to(mouseRef.current, {
        x: el.clientX,
        y: el.clientY,
        duration: 0.3,
        ease: Linear.easeNone,
      });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);
  return <div className="custom-cursor" ref={mouseRef} />;
};

export default Cursor;
