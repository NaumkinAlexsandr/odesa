"use client";

import React from "react";
import Hotels from "@/attractions/Hotels";
import Houses from "@/attractions/Houses";
import Other from "@/attractions/Other";
import Street from "@/attractions/Street";
import Monuments from "@/attractions/Monuments";
import Museum from "@/attractions/Museum";
import Temples from "@/attractions/Temples";
import Parks from "@/attractions/Parks";
import Leisure from "@/attractions/Leisure";
import Theaters from "@/attractions/Theaters";
import SidebarAttractions from "@/attractions/SidebarAttractions";
import ArrowUp from "@/ui/ArrowUp";

export default function Attractions() {
  return (
    // Увеличен pt-16 для мобильных, чтобы не заходить под fixed header
    <div className="w-full pt-16 lg:pt-8">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="w-full">
          <SidebarAttractions />
        </aside>

        <main className="w-full min-w-0 overflow-hidden">
          <Theaters />
          <Hotels />
          <Museum />
          <Temples />
          <Parks />
          <Leisure />
          <Houses />
          <Street />
          <Monuments />
          <Other />
        </main>
      </div>
      <ArrowUp />
    </div>
  );
}
