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
import { buttonVariants } from "@shared-components/ui/button";
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

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user: User | null;
  isComponentOpen: boolean;
}

export default function NavigationMain({
  items,
  children,
  user,
  isComponentOpen,
}: MainNavProps) {
  const segment = useSelectedLayoutSegment();
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
      <Menu>
        <MenuTrigger asChild>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full sm:hidden bg-transparent border border-separator"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <MenuIcon className="h-6 w-auto text-primary-muted" />
          </button>
        </MenuTrigger>
        <MenuContent title="Menu" side="right" className="h-full">
          {items && (
            <div className="animate-in slide-in-to-bottom-80 bg-background border-transparent fixed inset-x-0 bottom-0 top-[3.5rem] z-50 mt-px grid grid-flow-row auto-rows-max overflow-y-auto border-t pb-32 duration-300 lg:static lg:block">
              <PlatformContainer>
                <div className="relative z-20 grid gap-4">
                  <nav className="no-scrollbar font-regular mt-3 grid grid-flow-row auto-rows-max items-center overflow-y-auto">
                    {items.map((item, index) => (
                      <>
                        <MenuClose asChild>
                          <Link
                            onClick={closeMobileMenu}
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                              buttonVariants({
                                variant: "ghostButton",
                                size: "navigationSize",
                              }),
                              "my-2 flex w-full items-center justify-between",
                              item.disabled && "cursor-not-allowed opacity-60",
                              item.restricted &&
                                "text-primary sm:hover:text-primary-transparent",
                            )}
                          >
                            <p>{item.title}</p>
                            <Icons.chevronRight className="text-standard h-5 w-auto" />
                          </Link>
                        </MenuClose>
                      </>
                    ))}
                  </nav>
                  <Separator className="my-2" />
                  <div>
                    <ul className="bottom-20 flex flex-col gap-4">
                      <MenuClose asChild>
                        {user ? (
                          <Link
                            className={cn(
                              buttonVariants({
                                variant: "ghostButton",
                                size: "avatarSize",
                              }),
                              "justify-between",
                            )}
                            onClick={closeMobileMenu}
                            href="/dashboard"
                          >
                            <Avatar>
                              <AvatarImage
                                src={user.imageUrl}
                                alt={user.username ?? ""}
                              />
                              <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                            {email}
                          </Link>
                        ) : (
                          <Link
                            href="/subscribe"
                            className={cn(
                              buttonVariants({
                                variant: "actionButton",
                                size: "defaultSize",
                              }),
                            )}
                          >
                            {/* <PrimaryLogo className="text-background md:hover:text-primary h-8 w-auto" /> */}
                            {/* <TertiaryLogo className="text-background md:hover:text-primary h-12 w-auto" /> */}
                            Create now
                          </Link>
                        )}
                      </MenuClose>
                      <Separator className="my-2" />
                      <MenuClose asChild>
                        {user ? (
                          <Link
                            href="/signout"
                            className={cn(
                              buttonVariants({
                                variant: "secondaryButton",
                                size: "defaultSize",
                              }),
                            )}
                          >
                            <Icons.LogOutIcon
                              className="mr-2 h-4 w-4"
                              aria-hidden="true"
                            />
                            Sign out
                          </Link>
                        ) : (
                          <Link
                            href="/signin"
                            className={cn(
                              buttonVariants({
                                variant: "secondaryButton",
                                size: "defaultSize",
                              }),
                            )}
                          >
                            Sign in
                          </Link>
                        )}
                      </MenuClose>
                    </ul>
                  </div>
                  <Separator className="my-2" />
                  {/* <LocaleChoose /> */}
                  <ThemeSelect light={""} dark={""} system={""} />
                  {children}
                </div>
              </PlatformContainer>
            </div>
          )}
        </MenuContent>
      </Menu>
      {/* </div> */}
    </div>
  );
}
