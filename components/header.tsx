"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import DropdownToolGrid from "./grid/dropdown-tool-grid";

export default function Header() {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);

  return (
    <header className="border-b border-white/20 px-8 h-[70px] flex items-center">
      <nav className="w-full max-w-screen-2xl mx-auto flex justify-between">
        <div className="flex gap-4">
          <Image
            src="/images/logo.png"
            width={144}
            height={40}
            alt="BlackTools"
            className="h-10"
          />
          <div className="">
            <Button
              variant="ghost"
              size={"lg"}
              onClick={() => setShowToolsDropdown((prev) => !prev)}
            >
              <span>Tools</span>
              <ChevronDown className="!w-6 !h-6" />
            </Button>
            {showToolsDropdown && <DropdownToolGrid />}
          </div>
        </div>

        <div />
      </nav>
    </header>
  );
}
