import type { Metadata } from "next";
import { Urbanist, Chakra_Petch, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "../sections/Header";
import { auth } from "@clerk/nextjs/server";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const chakra_Petch = Chakra_Petch({
  variable: "--font-chakra-petch",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yummy On Wheels",
  description: "Healthy and delicious food",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // getting user data
  const { userId } = await auth();
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={cn(
            `bg-[#FFFFF0] antialiased ${urbanist.variable} ${chakra_Petch.variable} ${roboto.variable}`,
          )}
        >
          <img
            src="/assets/images/hero.svg"
            className="absolute right-0 top-0 -z-10 w-full md:w-[60%]"
          />
          <Header userId={userId} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
