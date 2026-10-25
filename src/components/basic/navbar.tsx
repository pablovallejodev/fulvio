import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

import { getT } from "@/i18n/dictionary";
import { Locale } from "@/i18n/config";

export default function NavbarComponent({ lang }: { lang: Locale }) {
  const t = getT(lang);

  return (
    <header className={styles["header"]}>
      <div className={`df-shell ${styles["shell"]}`}>
        <div className={styles["brand"]}>
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className={styles["brandIcon"]}
            priority
          />
          <span className={styles["brandText"]}>
            <span className={styles["brandName"]}>{t.brand_name}</span>
            <span className={styles["brandDescriptor"]}>{t.brand_descriptor}</span>
          </span>
        </div>
      </div>
    </header>
  );
}
