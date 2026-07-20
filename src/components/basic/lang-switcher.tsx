"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  LOCALES,
  LOCALE_COOKIE,
  LOCALE_FULL_LABELS,
  type Locale,
  isLocale,
} from "@/i18n/config";
import styles from "@/styles/LangSwitcher.module.css";

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

export default function LangSwitcher({
  current,
  variant = "navbar",
}: {
  current: Locale;
  variant?: "navbar" | "footer" | undefined;
}) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const segments = pathname.split("/").filter(Boolean);
  const rest = isLocale(segments[0] ?? "") ? segments.slice(1) : segments;
  const tail = rest.length ? `/${rest.join("/")}` : "";

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  function switchLocale(locale: Locale) {
    setLocaleCookie(locale);
    setOpen(false);
    const hash = window.location.hash;
    router.push(`/${locale}${tail}${hash}` as never);
  }

  return (
    <div
      ref={rootRef}
      className={`${styles["root"]} ${variant === "footer" ? styles["footer"] : ""} ${open ? styles["open"] : ""}`}
    >
      <button
        type="button"
        className={styles["trigger"]}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{LOCALE_FULL_LABELS[current]}</span>
        <svg
          className={styles["chevron"]}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <ul className={styles["menu"]} role="listbox" aria-label="Languages">
          {LOCALES.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                role="option"
                aria-selected={locale === current}
                className={`${styles["menuItem"]} ${locale === current ? styles["active"] : ""}`}
                onClick={() => switchLocale(locale)}
              >
                {LOCALE_FULL_LABELS[locale]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
