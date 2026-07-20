import { pickLocale } from "@/i18n/config";

import Navbar from "@/components/basic/navbar";
import Footer from "@/components/basic/footer";
import Hero from "@/components/fulvio/hero";
import Manifesto from "@/components/fulvio/manifesto";
import SpanishSystem from "@/components/fulvio/spanish-system";
import TrainingFlow from "@/components/fulvio/training-flow";
import Programs from "@/components/fulvio/programs";
import Coach from "@/components/fulvio/coach";
import Videos from "@/components/fulvio/videos";
import Gallery from "@/components/fulvio/gallery";
import Reviews from "@/components/fulvio/reviews";
import Faq from "@/components/fulvio/faq";
import ContactCta from "@/components/fulvio/contact-cta";
import JsonLd from "@/components/fulvio/json-ld";
import styles from "@/styles/FulvioLanding.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const raw = (await params).lang;
  const lang = pickLocale(raw);

  return (
    <div className={styles["page"]}>
      <JsonLd lang={lang} />
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Manifesto lang={lang} />
        <SpanishSystem lang={lang} />
        <Programs lang={lang} />
        <Coach lang={lang} />
        <Videos lang={lang} />
        <Reviews lang={lang} />
        <Faq lang={lang} />
        <ContactCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
