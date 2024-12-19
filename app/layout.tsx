import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "../sections/Header";
import { auth } from "@clerk/nextjs/server";

const urbanist = Urbanist({
  variable: "--font-urbanist",
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
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-background antialiased", urbanist.variable)}>
          <Header userId={userId} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
