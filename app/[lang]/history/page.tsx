"use client";

import React from "react";
import Ancient from "@/history/Ancient";
import Kotsyubiev from "@/history/Kotsyubiev";
import Hajibey from "@/history/Hajibey";
import Imperial from "@/history/Imperial";
import Revolution from "@/history/Revolution";
import WorldWarTwo from "@/history/WorldWarTwo";
import Ussr from "@/history/Ussr";
import ModernUA from "@/history/ModernUA";
import SidebarHystory from "@/history/SidebarHystory";
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function History() {
  return (
    <div className="w-full pt-16">
      <div className="flex w-full flex-row justify-between">
        <SidebarHystory />
        <div className="w-full lg:w-3/4">
          <Ancient />
          <Kotsyubiev />
          <Hajibey />
          <Imperial />
          <Revolution />
          <WorldWarTwo />
          <Ussr />
          <ModernUA />
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
