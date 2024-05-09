import clsx from "clsx";
import Link from "next/link";

type ContactLinkProps = {
  size?: "xxl" | "xl" | "lg"| "base" |"sm" | "xs";
  target?: "_blank" | "_parent" | "_self" | "_top";
  className?: string;
  href: string;
  children: React.ReactNode;
};

export default function ContactLink({
  size = "base",
  target = "_blank",
  className,
  children,
  href,
  ...restProps
}: ContactLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(
        "w-fit hover:text-primary-foreground transition duration-150 ease-out hover:ease-in",
        size === "xxl" && "text-2xl",
        size === "xl" && "text-xl",
        size === "lg" && "text-lg",
        size === "base" && "text-base",
        size === "sm" && "text-sm",
        size === "xs" && "text-xs",
        className
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
}
