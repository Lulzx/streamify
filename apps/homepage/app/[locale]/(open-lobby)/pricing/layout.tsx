interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default function PricingLayout({ children }: PlatformLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
