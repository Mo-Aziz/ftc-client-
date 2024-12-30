// "use client";

// import { useParams, usePathname } from "next/navigation";

// import { nav_links } from "@/constants";

// interface MainNavProps extends React.HTMLAttributes<HTMLDivElement> {
//   scrolled: boolean;
// }

// const MainNav = ({ className, scrolled, ...props }: MainNavProps) => {
//   const pathname = usePathname();
//   const params = useParams();
//   return (
//     <nav className="">
//       <ul className="gap-4 sm:hidden md:flex md:items-center md:justify-end md:gap-4">
//         {nav_links.map((link) => (
//           <li key={link.id}>
//             <a
//               href={link.href}
//               className={`black font-Chakra_Petch text-md font-light uppercase tracking-wide hover:text-green-500 ${
//                 pathname === link.href ? "text-green-500" : ""
//               }`}
//             >
//               {link.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default MainNav;

"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { act } from "react";

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {
  scrolled: boolean;
  className: string;
}
const MainNav = ({ className, scrolled, ...props }: MainNavProps) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    { href: "/", label: "home", active: pathname === "/" },
    { href: "/cuisines", label: "cuisines", active: pathname === "/cuisines" },
    { href: "/orders", label: "orders", active: pathname === "/orders" },
    { href: "/mission", label: "mission", active: pathname === "/mission" },
    {
      href: "/gratitude",
      label: "gratitude",
      active: pathname === "/gratitude",
    },
    { href: "/menu", label: "menu", active: pathname === "/menu" },
  ];
  return (
    <div className="ml-auto">
      <nav
        className={cn(
          "flex items-center space-x-4 pl-6 lg:space-x-12",
          className,
        )}
      >
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-base font-medium transition-colors hover:text-primary",
              route.active
                ? `${scrolled ? "text-hero font-bold" : "text-black"}`
                : `${scrolled ? "text-black" : "text-white"}`,
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
