// import React from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { cuisines } from "@/constants";

// import Container from "@/components/Container";
// import Link from "next/link";
// import Image from "next/image";
// const CuisinesCarousel = () => {
//   return (
//     <Container className="mx-auto">
//       <Carousel>
//         <CarouselContent>
//           {cuisines.map((cuisine) => (
//             <CarouselItem key={cuisine.id} className="basis-1/2">
//               <Link href={cuisine.href}>
//                 <Image
//                   src={cuisine.imageUrl}
//                   alt={cuisine.label}
//                   className="object-contain"
//                   width={50}
//                   height={50}
//                 />
//                 <p>{cuisine.label}</p>
//               </Link>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//       <div className="w-90 relative my-6 flex flex-col rounded-full border border-slate-200 bg-white shadow-sm">
//         <div className="relative m-2.5 h-56 overflow-hidden rounded-md text-white">
//           <img
//             src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
//             alt="card-image"
//             className="h-[100px] w-[auto] rounded-full"
//           />
//         </div>
//         <div className="rounded-full border">
//           <h6 className="mb-2 text-xl font-semibold text-slate-800">
//             Website Review Check
//           </h6>
//         </div>
//         <div className="mt-2 px-4 pb-4 pt-0">
//           <button
//             className="rounded-md border border-transparent bg-slate-800 px-4 py-2 text-center text-sm text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"
//           >
//             Read more
//           </button>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default CuisinesCarousel;
// trail 2
//
// "use client";
// import React from "react";
// import { cuisines } from "@/constants";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import dynamic from "next/dynamic";

// const Slider = dynamic(() => import("react-slick"), { ssr: false });
// import type { Settings } from "react-slick";
// import Container from "@/components/Container";

// const CuisinesCarousel: React.FC = () => {
//   const settings: Settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };
//   return (
//     <Container>
//       <div className="z-20 mx-auto flex h-[250px] w-5/6 items-center justify-center">
//         <div className="flex flex-row gap-4">
//           <div className="slider-container">
//             <Slider {...settings}>
//               {cuisines.map((cuis) => {
//                 return (
//                   <div
//                     key={cuis.id}
//                     className="h-[15rem] rounded-xl bg-white text-red-600"
//                   >
//                     <div className="flex h-56 items-center justify-center rounded-t-xl bg-white">
//                       <img
//                         src={cuis.imageUrl}
//                         alt={cuis.label}
//                         className="h-44 w-44 rounded-full"
//                       />
//                     </div>
//                     <div className="gap flex flex-col items-center justify-center gap-4">
//                       <p className="text-nowrap font-mono text-xl font-semibold">
//                         {" "}
//                         {cuis.label}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };
// export default CuisinesCarousel;

// trail 3

"use client";
import Container from "@/components/Container";
import { cuisines } from "@/constants";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CuisinesCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 8,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="gap-30 h-[400px] w-full">
      <Carousel responsive={responsive} autoPlay={false}>
        {cuisines.map((cuisine) => (
          <div className="group relative flex max-w-xs flex-col items-center justify-center gap-4 rounded-lg bg-transparent p-6 shadow-md transition-transform duration-300 ease-out hover:scale-105">
            <div className="overflow-hidden rounded-full">
              <img
                src={cuisine.imageUrl}
                alt={cuisine.label}
                className="h-36 w-36 rounded-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
              />
            </div>

            <div>
              <p className="mt-4 font-mono text-lg font-semibold text-red-600 transition-colors duration-300 group-hover:text-green-800">
                {cuisine.label}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CuisinesCarousel;
