"use client";

import * as React from "react";
import { Button } from "@shared-components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shared-components/ui/sheet";
import { Separator } from "@shared-components/ui/separator";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/feature/locale-switcher";
import { ModeSelection } from "@/components/mode-theme";
import {
  CopyCard,
  DiscordCard,
  ScheduleMeetingCard,
} from "@shared-components/components/menu-card";

export default function MenuBar() {
  const t = useTranslations("header-homepage");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghostButton" size="headerSize">
          {t("call-to-action.menu.name")}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col px-8 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>{t("call-to-action.menu.name")}</SheetTitle>
        </SheetHeader>
        <>
          <Separator className="bg-separator" />
          <ScheduleMeetingCard
            title={t("call-to-action.menu.schedule-a-call")}
          />
          <DiscordCard title={t("call-to-action.menu.join-our-discord")} />
        </>
        <>
          <div className="flex flex-1 flex-col gap-5 overflow-hidden" />
          <div className="grid gap-1.5 text-md">
            <Separator className="my-2" />
            <CopyCard
              title={t("call-to-action.menu.email-title")}
              value_string={t("call-to-action.menu.email-value")}
            />
            <Separator className="my-2" />
            <SheetFooter className="my-2 sm:justify-between">
              <SheetTrigger asChild>
                <LocaleSwitcher />
              </SheetTrigger>
              <SheetTrigger asChild>
                <Separator orientation="vertical" />
              </SheetTrigger>
              <SheetTrigger asChild>
                <ModeSelection />
              </SheetTrigger>
            </SheetFooter>
          </div>
        </>
      </SheetContent>
    </Sheet>
  );
}