import { cn } from "@/lib/utils";

export const HeroSection = ({
  title,
  children,
  styles,
}: {
  title?: string;
  children?: React.ReactNode;
  styles?: string;
}) => {
  return (
    <div
      rel="preload"
      className={cn(
        "bg-white-hero-bg h-[500px] mt-[75px] flex flex-col gap-8 justify-center items-center bg-cover bg-center bg-no-repeat mb-5",
        styles
      )}
    >
      {title && <h1 className="text-slate-50 font-bold text-3xl">{title}</h1>}
      {children}
    </div>
  );
};
