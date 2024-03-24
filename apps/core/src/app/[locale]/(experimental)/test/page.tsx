import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import {
  ThemeIconToggleTabs,
  ThemeSelect,
  ThemeTextToggleTabs,
} from "@shared-components/components/theme-switcher";
import ShortLocaleLink from "@/components/short-locale-link";
import { Link } from "@shared-components/ui/link";
import { buttonVariants } from "@shared-components/ui/button";
import { cn } from "@shared-components/lib/utils";
import Newsletter from "@shared-components/forms/email/newsletter";
import { getTranslations } from "next-intl/server";
import { LanguagePicker } from "@/components/language-picker";
import { ExperimentalComponent } from "@/components/experiemental-component";
import { GithubGlobe } from "@/components/github-globe";
import CopyToClipboardComponent from "@shared-components/components/copy-to-clipboard";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "verify" });

  return {
    title: t("title"),
  };
}

export default function Page({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const curLocale = useLocale();
  const t = useTranslations("LocaleSwitcher");
  const u = useTranslations("mode-theme");
  const v = useTranslations("signin");
  const w = useTranslations("newsletter");

  return (
    <div className="flex-1 space-y-4">
      <ShortLocaleLink locale="en" href="/test" />
      <ShortLocaleLink locale="de" href="/test" />
      <Link
        aria-label="Reset password"
        href="/signin"
        className={cn(
          buttonVariants({
            variant: "primaryButton",
            size: "defaultSize",
          }),
          "sm:text-sm",
        )}
      >
        {v("signin")}
      </Link>
      <Newsletter
        notification={w("notification")}
        placeholder={w("placeholder")}
        newsletterbutton={w("newsletterbutton")}
      />
      <LanguagePicker
        buttonContent={t("locale", { locale: curLocale })}
        href="/test"
        title={t("title")}
        description={t("description")}
        activeLocale={curLocale}
      />
      <ThemeTextToggleTabs
        light={u("light")}
        dark={u("dark")}
        system={u("system")}
      />
      <ThemeIconToggleTabs />
      <ThemeSelect light={u("light")} dark={u("dark")} system={u("system")} />
      <ExperimentalComponent />
      {/* <GithubGlobe /> */}
      <CopyToClipboardComponent copy_text="Successfully copied to your clipboard" />
    </div>
  );
}
