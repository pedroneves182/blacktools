import { toolsList } from "@/lib/tools";
import React from "react";
import DropdownToolCard from "./dropdown-tool-card";

export default function DropdownToolGrid() {
  return (
    <div className="bg-primary z-50 grid-cols-2 absolute top-[60px] rounded-md border border-white/20 grid gap-3 p-3 max-w-screen-sm">
      {toolsList.map((tool) => (
        <DropdownToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  );
}
