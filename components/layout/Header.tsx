"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { CldImage } from "@/components/ui/cloudinary";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MutableRefObject,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { IMAGES } from "@/lib/images";
import { mainNav, type NavItem } from "@/lib/site";

type HeaderProps = { siteName?: string };

function useScrollPast(threshold: number) {
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const evaluate = () => setPinned(window.scrollY > threshold);
    evaluate();

    window.addEventListener("scroll", evaluate, { passive: true });
    return () => window.removeEventListener("scroll", evaluate);
  }, [threshold]);

  return pinned;
}

function matchesPath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function matchesWellbeingChild(pathname: string, href: string) {
  if (href === "/wellbeing") return pathname === "/wellbeing";
  return matchesPath(pathname, href);
}

function DesktopWellbeingSplitNav({
  item,
  pathname,
  open,
  setOpen,
}: {
  item: NavItem;
  pathname: string;
  open: boolean;
  setOpen: (next: boolean) => void;
}) {
  const panelId = useId();
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const handleMouseEnter = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer, setOpen]);

  const handleMouseLeave = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 150);
  }, [clearCloseTimer, setOpen]);

  const wellbeingActive = pathname.startsWith("/wellbeing");
  const hubCurrent = pathname === "/wellbeing";

  const menuLinkClass =
    "block cursor-pointer px-4 py-3 text-sm text-plum transition-colors hover:bg-pink-pale hover:text-pink-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pink-hot";

  return (
    <div
      className="relative z-[60]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`inline-flex shrink-0 items-stretch overflow-hidden rounded-full text-[10px] font-semibold uppercase tracking-wide lg:text-xs ${
          wellbeingActive
            ? "bg-plum text-blush shadow"
            : "bg-transparent text-muted hover:text-pink-hot"
        }`}
      >
        <Link
          href={item.href}
          aria-current={hubCurrent ? "page" : undefined}
          className={`pointer-events-auto inline-flex items-center whitespace-nowrap rounded-l-full px-2 py-1 pl-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot lg:px-3 ${
            wellbeingActive ? "text-blush" : ""
          }`}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className={`pointer-events-auto inline-flex items-center rounded-r-full px-2 py-1 pr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot lg:pr-3 ${
            wellbeingActive ? "text-blush" : "text-plum"
          }`}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls={panelId}
          aria-label={`${item.label} submenu`}
          onMouseEnter={handleMouseEnter}
          onClick={() => {
            clearCloseTimer();
            setOpen(!open);
          }}
        >
          <ChevronDown
            className={`size-3 transition lg:size-4 ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="wellbeing-desktop-menu"
            id={panelId}
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-auto absolute left-0 top-full z-[100] min-w-[200px] pt-2"
          >
            <div className="rounded-2xl border border-pink-soft bg-white py-2 shadow-xl">
              {item.children!.map((child, index) => (
                <Link
                  key={child.href}
                  role="menuitem"
                  href={child.href}
                  className={`${menuLinkClass} ${
                    index === 0
                      ? "mb-1 border-b border-pink-soft font-medium"
                      : ""
                  } ${
                    matchesWellbeingChild(pathname, child.href)
                      ? "bg-pink-pale/80 text-pink-hot"
                      : ""
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MobileWellbeingNav({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const [expanded, setExpanded] = useState(() =>
    pathname.startsWith(item.href),
  );

  const hubActive = pathname.startsWith(item.href);

  return (
    <div className="overflow-hidden rounded-xl">
      <button
        type="button"
        className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot focus-visible:ring-offset-2 focus-visible:ring-offset-blush ${
          hubActive ? "bg-plum text-blush shadow-md hover:bg-plum" : "bg-plum/90 text-blush hover:bg-plum"
        }`}
        aria-expanded={expanded}
        onClick={() => setExpanded((e) => !e)}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      {expanded ? (
        <div className="border-t border-pink-soft bg-blush py-2">
          {item.children!.map((child) => (
            <Link
              key={`${child.label}-${child.href}`}
              href={child.href}
              onClick={onNavigate}
              className={`block py-2 pl-6 text-sm text-plum/70 transition-colors hover:bg-pink-pale hover:text-plum ${
                matchesWellbeingChild(pathname, child.href)
                  ? "font-semibold text-pink-hot"
                  : ""
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileAccordion({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="space-y-2">
      {mainNav.map((item) =>
        item.children && item.splitDropdown ? (
          <MobileWellbeingNav
            key={item.label}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ) : item.children ? (
          <details
            key={item.label}
            className="rounded-xl border border-pink-soft"
          >
            <summary className="cursor-pointer px-4 py-3 font-semibold text-plum hover:bg-pink-pale">
              {item.label}
            </summary>
            <div className="space-y-1 border-t border-pink-soft bg-blush px-4 py-3">
              {item.children.map((child) => (
                <Link
                  key={`${child.label}-${child.href}`}
                  href={child.href}
                  onClick={onNavigate}
                  className={`block rounded-lg px-2 py-1 text-sm ${
                    matchesPath(pathname, child.href)
                      ? "font-semibold text-pink-hot"
                      : "text-muted"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </details>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className={`block rounded-xl px-4 py-3 text-sm font-semibold tracking-wide uppercase ${
              matchesPath(pathname, item.href)
                ? "bg-plum text-blush shadow-md"
                : "bg-plum/90 text-blush hover:bg-plum"
            }`}
          >
            {item.label}
          </Link>
        ),
      )}
    </div>
  );
}

function LogoMark() {
  return (
    <span className="relative inline-flex">
      <CldImage
        src={IMAGES.brand.logoPink}
        alt="Mumma Chelles"
        width={360}
        height={120}
        className="h-24 w-auto object-contain"
        priority
      />
    </span>
  );
}

function HeaderInteractive({
  siteName = "Mumma Chelles",
  pathname,
}: HeaderProps & { pathname: string }) {
  const compact = useScrollPast(50);
  const [openMenu, setOpenMenu] = useState(false);
  const [wellbeingMenuOpen, setWellbeingMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  const containerRef =
    useRef<HTMLDivElement | null>(
      null,
    ) as MutableRefObject<HTMLDivElement | null>;

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (!wellbeingMenuOpen) return;

      const node = containerRef.current;
      if (node?.contains(event.target as Node)) {
        return;
      }

      setWellbeingMenuOpen(false);
    },
    [wellbeingMenuOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, [handleDocumentClick]);

  useEffect(() => {
    setWellbeingMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-pink-soft backdrop-blur transition ${compact ? "bg-white/90 shadow-md shadow-pink-soft/30" : "bg-blush/90"}`}
      ref={containerRef}
      onKeyDown={(event: ReactKeyboardEvent<HTMLElement>) => {
        if (event.key === "Escape") {
          setWellbeingMenuOpen(false);
          setOpenMenu(false);
        }
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-xl px-1 py-0.5 text-plum decoration-pink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
        >
          <LogoMark />
          <span className="sr-only">{siteName}, home</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0.5 overflow-visible xl:flex xl:gap-1"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            if (!item.children) {
              const active = matchesPath(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot lg:px-3 lg:text-xs ${
                    active
                      ? "bg-plum text-blush shadow"
                      : "text-muted hover:text-pink-hot"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.splitDropdown) {
              return (
                <DesktopWellbeingSplitNav
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  open={wellbeingMenuOpen}
                  setOpen={setWellbeingMenuOpen}
                />
              );
            }

            return null;
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/members"
            className="hidden whitespace-nowrap rounded-full border border-plum px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-plum transition hover:bg-pink-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot xl:inline-flex xl:text-xs"
          >
            Members Login
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-plum px-3 py-2 text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot xl:hidden"
            onClick={() => setOpenMenu(true)}
            aria-expanded={openMenu}
            aria-controls="mobile-navigation"
          >
            <Menu className="mr-2 size-4 shrink-0" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-wide">
              Menu
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMenu ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenMenu(false)}
          >
            <motion.aside
              className="ml-auto flex h-full w-full max-w-sm flex-col bg-blush px-6 py-10 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-10 flex items-center justify-between">
                <p className="font-display text-2xl text-plum">{siteName}</p>
                <button
                  type="button"
                  className="rounded-full border border-plum px-4 py-2 text-sm uppercase text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
                  onClick={() => setOpenMenu(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="inline size-6" aria-hidden />
                </button>
              </div>
              <MobileAccordion
                pathname={pathname}
                onNavigate={() => setOpenMenu(false)}
              />
              <div className="mt-10 space-y-3">
                <Link
                  href="/members"
                  className="inline-flex w-full items-center justify-center rounded-full border border-plum px-4 py-3 text-sm font-semibold uppercase tracking-wide text-plum transition hover:bg-pink-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
                  onClick={() => setOpenMenu(false)}
                >
                  Members Login
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-pink-hot px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-hot"
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function Header(props: HeaderProps) {
  const pathname = usePathname();
  return <HeaderInteractive key={pathname} pathname={pathname} {...props} />;
}
