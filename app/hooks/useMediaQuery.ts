"use client";
import { useState, useEffect } from "react";

export const useIsDesktop = (breakpoint = 640): boolean => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkIsDesktop();

    window.addEventListener("resize", checkIsDesktop);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, [breakpoint]);

  return isDesktop;
};
