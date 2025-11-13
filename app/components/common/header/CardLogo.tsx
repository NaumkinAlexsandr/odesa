import Image from "next/image";
import React from "react";
import gerb from "@/images/icons/logo/gerb.png";
import logo from "@/images/icons/logo/logo.png";

export default function CardLogo() {
  return (
    <div className="group perspective-1000 relative h-10 w-10">
      <div className="transform-style-3d animate-spin-y-180 relative h-full w-full transition-transform duration-700">
        <div className="absolute h-full w-full backface-hidden">
          <Image src={gerb} alt="gerb" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute h-full w-full rotate-y-180 backface-hidden">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
