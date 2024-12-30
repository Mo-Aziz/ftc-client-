"use client";
import Container from "@/components/Container";
import PopularItems from "@/components/PopularItems";
import { Button } from "@/components/ui/button";
import { cuisines } from "@/constants";
import MultipleItems from "@/sections/CuisinesCarousel";
import CuisinesCarousel from "@/sections/CuisinesCarousel";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="px-4 py-4 md:py-12">
        <section className="grid-col-1 grid py-12 pt-16 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="rounded-full border border-gray-300 px-6 py-1 text-xl text-neutral-500">
              Hangry for a unique Taste??
              <span className="h-[6rem] w-[6rem] text-3xl">🤔</span>
            </p>
            <h2 className="my-4 text-4xl font-bold tracking-wider text-neutral-700">
              We got all <span className="text-green-600">Cuisines</span> for
              you in 1 place!
            </h2>
            <p className="my-4 text-center text-base text-neutral-500 md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique consectetur eaque aperiam, magnam a quae, illo nobis
              vitae molestias minima consequatur.
            </p>
            <div className="my-4 flex w-full justify-center gap-6 text-center md:w-auto">
              <Link href={"/menu"}>
                <Button className="rounded-full bg-hero px-8 py-4 md:px-16 md:py-6">
                  Order Now
                </Button>
              </Link>
              <Link href={"/"}>
                <Button
                  className="rounded-full px-8 py-4 md:px-16 md:py-6"
                  variant={"outline"}
                >
                  Explore More Cuisines
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="relative flex h-[35rem] w-full items-center justify-center">
              <Image
                src={"/assets/images/Food.png"}
                alt="meal image"
                className="absolute h-full w-full object-contain"
                fill
              />
            </div>
          </div>
        </section>
        {/* cuisines carousel choices */}
        <section className="ml-4 mt-[10rem]">
          <div className="flex flex-col gap-10">
            <div className="ml-4 p-4">
              <h3 className="font-mono text-4xl font-semibold tracking-wider text-green-800">
                Discover Our Cuisines
              </h3>
            </div>

            <CuisinesCarousel />
          </div>
        </section>

        {/* popular items */}
        <section className="my-4 grid grid-cols-1 gap-6 gap-y-20 py-12 md:grid-cols-4 md:gap-12">
          {cuisines.map((item) => (
            <PopularItems key={item.id} src={item.imageUrl} alt={item.label} />
          ))}
        </section>
      </div>
    </>
  );
};

export default HomePage;
