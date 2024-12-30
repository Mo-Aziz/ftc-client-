"use client";

import Image from "next/image";
import { Card } from "./ui/card";
interface PopularItemProps {
  alt?: string;
  src: string;
}

const PopularItems = ({ alt = "", src }: PopularItemProps) => {
  return (
    <Card className="relative flex max-h-[340px] w-full flex-col items-center justify-center rounded-md border-none bg-white py-6 pt-24 shadow-lg md:pt-36">
      <div className="bg-hero absolute -top-[4%] flex h-24 w-24 items-center justify-center overflow-hidden rounded-full p-1 md:-top-[20%] md:h-40 md:w-40 md:p-2">
        <div className="relative h-full w-full rounded-full bg-white">
          <Image
            className="h-full w-full rounded-full object-contain"
            src={src}
            alt={alt}
            layout="fill"
          />
        </div>
      </div>
    </Card>
  );
};

export default PopularItems;
