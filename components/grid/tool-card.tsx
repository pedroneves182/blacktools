import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ToolType } from "@/lib/tools";
import { useRouter } from "next/navigation";

type ToolCardProps = {
  tool: ToolType;
  className?: string;
};

export default function ToolCard({ tool, className }: ToolCardProps) {

  const router = useRouter()

  return (
    <div
      className={cn("rounded-md bg-primary p-8 flex flex-col gap-7", className)}
    >
      <div className="flex flex-col gap-4 justify-between">
        <div className="rounded-md p-2 bg-offwhite w-12">
          <Image src={tool.iconPath} width={32} height={32} alt={tool.name} />
        </div>
        <h3 className="font-semibold text-2xl">{tool.name}</h3>
        <p>{tool.description}</p>
      </div>
      <Button size={'lg'} className="mt-auto w-fit rounded-md" onClick={() => router.push(tool.link)}>
        <span>Access</span>
      </Button>
    </div>
  );
}
