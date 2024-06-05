import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string;
};

function HomeCard({ img, title, description, handleClick, className }: Props) {
  return (
    <div
      className={cn(
        "flex min-h-[260px] w-full cursor-pointer flex-col justify-between rounded-[14px] px-4 py-6 xl:max-w-[270px]",
        className,
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} width={27} height={27} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-black">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
