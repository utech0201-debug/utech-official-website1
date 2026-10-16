import Link from "next/link";

type Variant = "primary" | "secondary" | "text";
interface Props {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: React.ReactNode;
}

export default function Button({ href, variant = "primary", external, children }: Props) {
  const cls = `btn btn-${variant}`;
  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link className={cls} href={href}>{children}</Link>;
}
