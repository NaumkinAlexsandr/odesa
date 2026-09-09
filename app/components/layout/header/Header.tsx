"use client";
import React, { useState, useEffect } from "react";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const isDesktop = useIsDesktop();
  const [hasMounted, setHasMounted] = useState(false);

  const fixedClasses =
    "fixed top-0 left-0 z-50 w-full border-b border-zinc-400 bg-white shadow-sm";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <div id="header" className={fixedClasses} />;
  }

  return (
    <div id="header" className={fixedClasses}>
      {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
    </div>
  );
}
