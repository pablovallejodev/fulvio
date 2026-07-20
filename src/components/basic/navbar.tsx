import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/basic/lang-switcher";
import { whatsappUrl } from "@/constants/site";

export default function NavbarComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const navItems = [
    { hash: "method", label: t.nav_method },
    { hash: "programs", label: t.nav_programs },
    { hash: "coach", label: t.nav_coach },
    { hash: "reviews", label: t.nav_reviews },
    { hash: "faq", label: t.nav_faq },
    { hash: "contact", label: t.nav_contact },
  ] as const;

  return (
    <header className={styles["header"]}>
      <div className={`df-shell ${styles["shell"]}`}>
        <Link href={`/${lang}` as never} className={styles["brand"]}>
          <span className={styles["brandName"]}>{t.brand_name}</span>
          <span className={styles["brandDescriptor"]}>{t.brand_descriptor}</span>
        </Link>

        <nav className={styles["nav"]} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              href={{ pathname: `/${lang}`, hash: item.hash }}
              className={styles["navLink"]}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles["actions"]}>
          <LangSwitcher current={lang} />
          <a
            href={whatsappUrl(t.whatsapp_message)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["cta"]}
          >
            {t.nav_cta}
          </a>
        </div>
      </div>
    </header>
  );
}
