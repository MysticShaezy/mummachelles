import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

type Shared = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
};

export type AnchorButtonProps = Shared &
  Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    | "download"
    | "hrefLang"
    | "ping"
    | "referrerPolicy"
    | "target"
    | "rel"
  > & {
    href: string;
  };

export type NativeButtonProps = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variants: Record<Variant, string> = {
  primary:
    "bg-pink-hot text-white shadow hover:bg-[#cf3f6f] disabled:opacity-60",
  secondary:
    "border-2 border-plum bg-transparent text-plum hover:bg-pink-pale disabled:opacity-60",
  ghost:
    "border border-transparent bg-transparent text-plum hover:bg-pink-pale disabled:opacity-60",
};

const shell =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush disabled:cursor-not-allowed";

export function Button(props: NativeButtonProps | AnchorButtonProps) {
  if ("href" in props && props.href) {
    const {
      variant = "primary",
      className = "",
      children,
      style,
      href,
      ...anchor
    } = props;

    const classNames = `${shell} ${variants[variant]} ${className}`;
    return (
      <Link href={href} className={classNames} style={style} {...anchor}>
        {children}
      </Link>
    );
  }

  const btn = props as NativeButtonProps;
  const {
    variant = "primary",
    className = "",
    children,
    style,
    type = "button",
    ...native
  } = btn;

  const classNames = `${shell} ${variants[variant]} ${className}`;

  return (
    <button type={type} className={classNames} style={style} {...native}>
      {children}
    </button>
  );
}
