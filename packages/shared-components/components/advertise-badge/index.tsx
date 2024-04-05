import { StreamifyBadge } from "@shared-components/graphics/badge";
import { PrimaryIcon } from "@shared-components/graphics/streamify";
import { badgeVariants } from "@shared-components/ui/badge";
import { Link } from "@shared-components/ui/link";

export default function AdvertiseBadge() {
  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-50 p-6">
      <Link
        className={badgeVariants({ variant: "outline" })}
        href="https://www.streamify.com"
        target="_blank"
        aria-label="Databrix ad"
      >
        <PrimaryIcon className="text-primary group sm:group-hover:text-action ml-2 h-4 w-4 p-2" />
        <span className="text-primary ">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span className="text-primary sm:group-hover:text-action">
          Created with Databrix
        </span>
      </Link>
    </div>
  );
}
