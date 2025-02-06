"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import HoverBackground from "./hover-background";
import { ToolType } from "@/lib/tools";
import ToolCard from "./tool-card";

type ToolsGridProps = {
  tools: ToolType[];
  className?: string;
};

export const ToolsGrid = ({ tools, className }: ToolsGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-3 gap-5 max-w-screen-2xl mx-auto", className)}>
      {tools.map((tool, idx) => (
        <div
          key={tool?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <HoverBackground active={hoveredIndex === idx} />
          <ToolCard tool={tool} className={'relative z-20 h-full'} />
        </div>
      ))}
    </div>
  );
};

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-8 overflow-hidden bg-muted/50 border border-slate-200 border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 dark:border-slate-800",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4
//       className={cn(
//         "text-zinc-100  tracking-wide  text-2xl font-medium mt-7 mb-3",
//         className
//       )}
//     >
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
