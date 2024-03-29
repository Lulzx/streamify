"use client";

import * as React from "react";
import { Link } from "@shared-components/ui/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@shared-components/types";
import { cn } from "@shared-components/lib/utils";
import { Icons, MenuIcon } from "@shared-components/graphics/icons";
import { PlatformContainer } from "@shared-components/ui/container";

import { Separator } from "@shared-components/ui/separator";
import type { User } from "@clerk/nextjs/dist/types/server";
import { Button, buttonVariants } from "@shared-components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shared-components/ui/avatar";
// import { LocaleChoose } from "@/components/locale-switcher";
import { ThemeSelect } from "@shared-components/components/theme-switcher";
import {
  Menu,
  MenuClose,
  MenuContent,
  MenuTrigger,
} from "@shared-components/ui/menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@shared-components/ui/drawer";
import { ScrollArea } from "@shared-components/ui/scroll-area";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user: User | null;
  isComponentOpen: boolean;
}

export default function DrawerMain({
  items,
  children,
  user,
  isComponentOpen,
}: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const closeMobileMenu = () => setShowMobileMenu(false);
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <div className="flex sm:gap-4">
      {items?.length ? (
        <nav className="hidden gap-8 sm:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "font-regular text-md sm:hover:text-primary flex items-center px-2 py-5 transition-colors",
                item.href.startsWith(`/${segment}`)
                  ? "text-action sm:border-action sm:border-b-2"
                  : "text-primary sm:border-b-2 sm:border-transparent",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <button className="flex h-9 w-9 items-center justify-center rounded-full sm:hidden bg-transparent border border-separator text-primary-muted">
            <MenuIcon className="h-5 w-auto text-primary-muted" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-auto">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader className="text-left">
              <DrawerTitle className="font-bold">Menu</DrawerTitle>
              <DrawerDescription>This is a description</DrawerDescription>
            </DrawerHeader>
            <MainSection />
            <DrawerFooter className="border-t border-separator">
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({
                    variant: "actionButton",
                    size: "defaultSize",
                  }),
                )}
              >
                Sign up
              </Link>
              <Link
                href="/signin"
                className={cn(
                  buttonVariants({
                    variant: "insentiveButton",
                    size: "defaultSize",
                  }),
                )}
              >
                Sign in
              </Link>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      {/* </div> */}
    </div>
  );
}

function MainSection() {
  return (
    <ScrollArea className="h-80 flex flex-col gap-2 my-4">
      <div className="flex-1 space-y-2"></div>
    </ScrollArea>
  );
}
