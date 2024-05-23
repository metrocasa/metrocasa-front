export const HeroSection = ({ title }: { title: string }) => {
  return (
    <div
      rel="preload"
      className="bg-main-red h-[350px] mt-[75px] flex flex-col gap-8 justify-center items-center bg-red-hero-bg bg-cover bg-no-repeat"
    >
      <h1 className="text-slate-50 font-bold text-3xl">{title}</h1>
    </div>
  );
};
