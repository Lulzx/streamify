"use client";

import { getCookie } from "cookies-next";
import * as React from "react";
import { Link } from "@shared-components/ui/link";
import { cn } from "@shared-components/lib/utils";
import { PrimaryLogo } from "@shared-components/graphics/streamify";
import type { User } from "@clerk/nextjs/dist/types/server";
import { Button, buttonVariants } from "@shared-components/ui/button";
import NavigationBar from "./_components/navigation-bar";
import { homepageConfig } from "./_components/homepage";
import NavigationMain from "./_components/navigation-main";
import { useScroll } from "@shared-components/lib/use-scroll";
import DrawerMain from "./_components/drawer-main";

interface HeaderWebsiteProps {
  children?: React.ReactNode;
  user: User | null;
  products: string;
  templates: string;
  download: string;
  roadmap: string;
  pricing: string;
  signin: string;
  signup: string;
}

export function HeaderWebsite({
  children,
  user,
  products,
  templates,
  download,
  roadmap,
  pricing,
  signin,
  signup,
}: HeaderWebsiteProps) {
  const scrolled = useScroll(20);
  const initialIsComponentOpen = getCookie("navComponentOpen");
  const [isComponentOpen, setIsComponentOpen] = React.useState<boolean>(
    initialIsComponentOpen === "true" || !initialIsComponentOpen,
  );

  return (
    <header
      className={`sticky z-40 top-0 sm:top-6 sm:rounded-md rounded-none mx-0 sm:mx-8 ${
        scrolled
          ? "sm:bg-background bg-background border-separator border-b sm:border sm:border-separator "
          : "sm:bg-background bg-background border-transparent border-b sm:border sm:border-transparent"
      } `}
    >
      <nav className="px-8 sm:px-8">
        <div className="relative flex h-14 items-center justify-between">
          {/* <div className="sm:hidden flex items-center">
            Tin
          </div> */}
          <div className="sm:flex items-center gap-12">
            <Link href="/" className="items-center">
              <PrimaryLogo className="text-action sm:hover:text-action-muted h-7 w-auto sm:w-auto" />
            </Link>
            <NavigationBar
              products={products}
              templates={templates}
              download={download}
              roadmap={roadmap}
              pricing={pricing}
            />
          </div>
          <div className="hidden sm:block">
            <ul className="bottom-14 flex flex-row items-right justify-between gap-4">
              {children}
              {/* <LocaleChooseIcon /> */}
              <Link
                href="/signin"
                className={cn(
                  buttonVariants({
                    variant: "insentiveButton",
                    size: "headerSize",
                  }),
                )}
              >
                {signin}
              </Link>
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({
                    variant: "actionButton",
                    size: "headerSize",
                  }),
                )}
              >
                {signup}
              </Link>
              {/* <MenuBar /> */}
            </ul>
          </div>
          <div className="flex items-center gap-6 sm:hidden">
            <DrawerMain
              items={homepageConfig.mainNav}
              user={user}
              isComponentOpen={isComponentOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
