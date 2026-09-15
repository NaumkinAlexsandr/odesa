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
import ArrowUp from "@/ui/ArrowUp";
import SidebarHistory from "@/components/history/SidebarHystory";

export default function History() {
  return (
    <div className="w-full pt-14 lg:pt-8">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="w-full">
          <SidebarHistory />
        </aside>

        <main className="w-full min-w-0 overflow-hidden">
          <Ancient />
          <Kotsyubiev />
          <Hajibey />
          <Imperial />
          <Revolution />
          <WorldWarTwo />
          <Ussr />
          <ModernUA />
        </main>
      </div>
      <ArrowUp />
    </div>
  );
}
