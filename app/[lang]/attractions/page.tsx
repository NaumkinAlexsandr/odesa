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
import ArrowUp from "@/components/common/ui/ArrowUp";

export default function Attractions() {
  return (
    <div className="w-full pt-15">
      <div className="flex w-full flex-row justify-between">
        <div className="mr-1 hidden lg:block lg:w-1/4">
          <SidebarAttractions />
        </div>

        <div className="w-full lg:w-3/4">
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
        </div>
      </div>
      <ArrowUp />
    </div>
  );
}
