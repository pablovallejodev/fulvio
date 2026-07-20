import Link from "next/link";
import styles from "@/styles/Footer.module.css";

import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";
import LangSwitcher from "@/components/basic/lang-switcher";
import { CONTACT, whatsappUrl } from "@/constants/site";

export default function FooterComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const year = new Date().getFullYear();

  return (
    <footer className={styles["footer"]}>
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["grid"]}>
          <div className={styles["colBrand"]}>
            <Link href={`/${lang}` as never} className={styles["brand"]}>
              <span className={styles["brandName"]}>{t.brand_name}</span>
              <span className={styles["brandDescriptor"]}>
                {t.brand_descriptor}
              </span>
            </Link>
            <p className={styles["tagline"]}>{t.footer_tagline}</p>
          </div>

          <div className={styles["col"]}>
            <h4 className={styles["colTitle"]}>{t.footer_nav_title}</h4>
            <ul className={styles["list"]}>
              <li>
                <Link
                  href={{ pathname: `/${lang}`, hash: "method" }}
                  className={styles["link"]}
                >
                  {t.nav_method}
                </Link>
              </li>
              <li>
                <Link
                  href={{ pathname: `/${lang}`, hash: "programs" }}
                  className={styles["link"]}
                >
                  {t.nav_programs}
                </Link>
              </li>
              <li>
                <Link
                  href={{ pathname: `/${lang}`, hash: "coach" }}
                  className={styles["link"]}
                >
                  {t.nav_coach}
                </Link>
              </li>
              <li>
                <Link
                  href={{ pathname: `/${lang}`, hash: "faq" }}
                  className={styles["link"]}
                >
                  {t.nav_faq}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles["col"]}>
            <h4 className={styles["colTitle"]}>{t.footer_contact_title}</h4>
            <ul className={styles["list"]}>
              <li>
                <a
                  href={whatsappUrl(t.whatsapp_message)}
                  className={styles["link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp · {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={styles["link"]}>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div className={styles["col"]}>
            <h4 className={styles["colTitle"]}>{t.footer_follow_title}</h4>
            <ul className={styles["list"]}>
              <li>
                <a
                  href={CONTACT.instagram}
                  className={styles["link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram · {CONTACT.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.youtube}
                  className={styles["link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube · @VamosFulvioCoach
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["bottom"]}>
          <div className={styles["bottomLeft"]}>
            <span className={styles["copy"]}>
              © {year} {t.brand_name}. {t.footer_copyright}
            </span>
          </div>
          <div className={styles["bottomRight"]}>
            <span className={styles["langLabel"]}>{t.footer_lang_title}</span>
            <LangSwitcher current={lang} variant="footer" />
          </div>
        </div>

        <p className={styles["note"]}>{t.footer_note}</p>
      </div>
    </footer>
  );
}
