"use client";

import { ScheduleIcon, Icons } from "@shared-components/graphics/icons";
import Link from "next-intl/link";
import CopyToClipboardComponent from "./copy-to-clipboard";

interface CopyCardProps {
  title: string;
  value_string: string;
}

export function CopyCard({ title, value_string }: CopyCardProps) {
  return (
    <div className="flex items-center transition duration-200 border-separator border my-2 p-4 bg-transparent rounded-md">
      <span className="flex-1">{title}</span>
      <span className="text-standard-hover mr-4">{value_string}</span>
      <CopyToClipboardComponent copy_text={value_string} />
    </div>
  );
}

export function DiscordCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-transparent md:hover:bg-[#5865F2] md:hover:text-standard-hover rounded-md"
      href="https://discord.gg/G2eAUj3y"
      target="_blank"
    >
      <span className="flex">
        <Icons.DiscordIcon className="h-7 w-auto text-standard-hover md:group-hover:text-white" />
      </span>
      <span className="text-standard-hover md:group-hover:text-white ml-4">
        {title}
      </span>
    </Link>
  );
}

export function ScheduleMeetingCard({ title }: { title: string }) {
  return (
    <Link
      className="flex items-center transition duration-200 border-separator border p-4 group bg-standard-hover md:hover:bg-background-hover md:hover:text-background rounded-md"
      href="https://cal.com/streamify/30min"
      target="_blank"
    >
      <span className="flex">
        <ScheduleIcon className="h-7 w-auto text-background md:group-hover:text-standard-hover" />
      </span>
      <span className="text-background md:group-hover:text-standard-hover ml-4">
        {title}
      </span>
    </Link>
  );
}
