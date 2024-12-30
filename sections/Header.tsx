// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { UserButton } from "@clerk/nextjs";

// import Link from "next/link";
// import MainNav from "../components/MainNav";
// import Container from "@/components/Container";
// import { useEffect, useState } from "react";

// interface HeaderProps {
//   userId: string | null;
// }

// const Header = ({ userId }: HeaderProps) => {
//   const [scrolled, setScrolled] = useState(false);

//   // handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={cn(
//         "relative z-50 h-[12rem] w-full border border-[#315e33] transition duration-300",
//         scrolled ? "fixed left-0 top-0 bg-green-900" : "bg-transparent",
//       )}
//     >
//       <Container className="relative mt-4 flex flex-col justify-end">
//         <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12">
//           {/* logo */}
//           <Link href={"/"} className="gap-x-4 text-primary">
//             <div className="flex flex-col items-center justify-center border-r border-[#315e33] p-3">
//               {/* <div className="items center flex flex-row justify-between"> */}
//               <p className="mb-5 gap-x-2 text-nowrap font-mono text-4xl font-semibold uppercase tracking-wider text-neutral-700 md:text-xl">
//                 Bon Appetite{" "}
//               </p>

//               <div className="flex flex-nowrap items-center justify-between sm:flex-nowrap sm:gap-0">
//                 <img
//                   src="/assets/logos/logo-taco-1.svg"
//                   alt="taco logo"
//                   className="object-fit h-20 w-20"
//                 />

//                 <img
//                   src="/assets/logos/logo-pizza-3.svg"
//                   alt="pizza logo"
//                   className="object-fit h-20 w-20"
//                 />

//                 <img
//                   src="/assets/logos/logo-pasta-4.svg"
//                   alt="pasta logo"
//                   className="h-20 w-20 object-cover"
//                 />
//                 <img
//                   src="/assets/logos/logo-burger-2.svg"
//                   alt="taco logo"
//                   className="object-fit h-20 w-20"
//                 />
//                 <img
//                   src="/assets/logos/logo-asian-6.svg"
//                   alt="asian food logo"
//                   className="h-20 w-20 object-cover"
//                 />
//               </div>
//             </div>
//           </Link>
//           {/* main nav bar */}
//           <div>
//             <MainNav scrolled={scrolled} className="" />
//           </div>

//           <div>
//             {userId ? (
//               <div className="flex items-center">
//                 <UserButton afterSignOutUrl="/" />
//               </div>
//             ) : (
//               <div className="ml-4 flex items-center">
//                 <Link href={"/sign-in"}>
//                   <Button variant={"outline"}>Sign In</Button>
//                 </Link>
//                 <Link href={"/sign-up"}>
//                   <Button className="bg-green-500 text-black hover:bg-green-900">
//                     Sign Up
//                   </Button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;

"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import MainNav from "../components/MainNav";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

interface HeaderProps {
  userId: string | null;
}

const Header = ({ userId }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 167) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "z-50 w-full transition-all",
        scrolled
          ? "sticky left-0 top-0 border-b bg-slate-300 shadow-lg"
          : "bg-slate-300",
      )}
    >
      <Container>
        {/* lg:px-8 */}
        <div className="relative flex items-center px-4 sm:px-6">
          {/* full logo section */}
          <Link href={"/"} className="text-primary">
            <div className="flex flex-col items-center border-r border-[#315e33] p-3">
              <p className="mt-4 gap-x-2 font-poppins text-2xl font-extrabold uppercase tracking-widest text-green-900 md:text-5xl">
                Bon Appetite
              </p>
              {/* logo characters */}
              <div className="mt-4 flex flex-nowrap items-center justify-between sm:flex-nowrap sm:gap-0 md:gap-3">
                <img
                  src="/assets/logos/logo-taco-1.svg"
                  alt="taco logo"
                  className="object-fit h-[4rem] w-[4rem]"
                />

                <img
                  src="/assets/logos/logo-pizza-3.svg"
                  alt="pizza logo"
                  className="object-fit h-[4rem] w-[4rem]"
                />

                <img
                  src="/assets/logos/logo-pasta-4.svg"
                  alt="pasta logo"
                  className="h-20 w-20 object-cover"
                />
                <img
                  src="/assets/logos/logo-burger-2.svg"
                  alt="taco logo"
                  className="object-fit h-20 w-20"
                />
                <img
                  src="/assets/logos/logo-asian-6.svg"
                  alt="asian food logo"
                  className="h-[4rem] w-[4rem] max-md:hidden"
                />
              </div>
            </div>
          </Link>

          {/*  main nav bar */}
          <MainNav scrolled={scrolled} className="hidden md:flex" />
          {/* sign-up sign-in button container */}

          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="ml-4 flex items-center space-x-2">
              <Link href={"/sign-in"}>
                <Button
                  variant={"outline"}
                  className="bg-green-400 text-black hover:bg-green-900"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-green-400 text-black hover:bg-yellow-300">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
