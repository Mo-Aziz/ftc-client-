"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { TruckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import ft from "../assets/images/ft.webp";

interface HeaderProps {
  userId: string | null;
}

const Header = ({ userId }: HeaderProps) => {
  console.log(userId, "userId");
  return (
    <header className={cn("z-50 w-full transition")}>
      <Container className="m-6">
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-12">
          {/* logo */}
          <Link href={"/"} className="text-2xl font-bold text-primary">
            <p className="flex gap-x-2 font-bold uppercase text-neutral-700">
              Yummy On Wheels{" "}
            </p>

            {/* <TruckIcon size={50} /> */}
          </Link>

          {/* main nav bar */}
          {userId ? (
            <div className="ml-4 flex items-center space-x-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="ml-4 flex items-center space-x-2">
              <Link href={"/sign-in"}>
                <Button variant={"outline"}>Sign In</Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-green-500 text-black hover:bg-green-900">
                  Sign Out
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
