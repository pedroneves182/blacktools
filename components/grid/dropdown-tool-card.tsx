import React from "react";
import { ToolType } from "@/lib/tools";
import Image from "next/image";
import Link from "next/link";

export default function DropdownToolCard({ tool }: { tool: ToolType }) {
  return (
    <Link href={tool.link} className="rounded-md hover:bg-secondary p-3 flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div className="rounded-md p-2 bg-offwhite w-12">
          <Image src={tool.iconPath} width={32} height={32} alt={tool.name} />
        </div>
        <h3 className="font-semibold text-base">{tool.name}</h3>
      </div>
      <p className="text-sm">{tool.description}</p>
    </Link>
  );
}
