import Link from "next/link";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  footerText: string;
  footerNav: string;
  footerHref: string;
}
export default function FormLayout({
  title,
  description,
  children,
  footerText,
  footerHref,
  footerNav,
}: Props) {
  return (
    <div className="max-w-sm w-full">
      <h1 className="text-foreground font-mono tracking-tight font-bold text-3xl">
        {title}
      </h1>
      <p className="text-secondary40 text-sm tracking-wide mb-8">
        {description}
      </p>

      {children}

      {/* FOOTER */}
      <div className="flex items-center justify-center text-[10px] mx-auto mt-4 tracking-widest">
        <span className="text-secondary40">{footerText}</span>
        <Link href={footerHref} className="text-primary">
          {footerNav}
        </Link>
      </div>
    </div>
  );
}
