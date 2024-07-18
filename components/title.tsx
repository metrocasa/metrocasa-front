import { cn } from "@/lib/utils";
import { useContent } from "@croct/plug-react";

import { MoveRight } from "lucide-react";
import { Be_Vietnam_Pro } from "next/font/google";

const font = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
});

interface IProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export const Title = ({ children, title, subtitle, className }: IProps) => {
  return (
    <div className="w-full max-w-[1216px] mx-auto md:py-10 flex flex-col gap-4">
      <div className={cn("flex gap-2 text-main-red items-center", className)}>
        <MoveRight strokeWidth={1} className="w-14" />
        <h5 className={cn("text-lg font-bold", className)}>{subtitle}</h5>
      </div>

      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold",
          font.className,
          className
        )}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};
