import { getT } from "@/i18n/dictionary";
import { HREFLANG, Locale } from "@/i18n/config";
import { SITE } from "@/constants/routes/routes";
import { CONTACT, VIDEOS } from "@/constants/site";
import { faqItems } from "@/components/fulvio/faq";

function jsonLdScript(id: string, data: unknown) {
  return (
    <script
      key={`jsonLdScript-${id}`}
      type="application/ld+json"
      id={id}
      // Server-only serialization; keys are static so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function JsonLd({ lang }: { lang: Locale }) {
  const t = getT(lang);
  const url = `${SITE}/${lang}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: t.coach_name,
    jobTitle: t.coach_role,
    description: t.coach_bio_1,
    nationality: "Italian",
    knowsAbout: [
      "Tennis",
      "Spanish tennis method",
      "High performance coaching",
      "Junior tennis development",
    ],
    knowsLanguage: ["it", "en", "es", "th"],
    sameAs: [CONTACT.instagram, CONTACT.youtube],
    url,
    image: `${SITE}/icons/og-whatsapp.png`,
  };

  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${SITE}/#academy`,
    name: t.brand_name,
    alternateName: "Vamos Fulvio Coach",
    description: t.hero_subtitle,
    url,
    inLanguage: HREFLANG[lang],
    telephone: `+${CONTACT.whatsapp}`,
    email: CONTACT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phuket",
      addressCountry: "TH",
    },
    areaServed: [
      { "@type": "Place", name: "Phuket, Thailand" },
      { "@type": "AdministrativeArea", name: "Southeast Asia" },
    ],
    sport: "Tennis",
    sameAs: [CONTACT.instagram, CONTACT.youtube],
    founder: { "@id": `${SITE}/#person` },
    employee: { "@id": `${SITE}/#person` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Italian", "Spanish", "Thai"],
      telephone: `+${CONTACT.whatsapp}`,
      email: CONTACT.email,
    },
  };

  const programs = [
    {
      title: t.program_1_title,
      description: t.program_1_text,
      audienceType: "Adults and juniors",
    },
    {
      title: t.program_2_title,
      description: t.program_2_text,
      audienceType: "Competitive juniors",
    },
    {
      title: t.program_3_title,
      description: t.program_3_text,
      audienceType: "Visitors",
    },
  ].map((program, index) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE}/${lang}/#program-${index + 1}`,
    name: program.title,
    description: program.description,
    provider: { "@id": `${SITE}/#academy` },
    inLanguage: HREFLANG[lang],
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "In-person",
      location: {
        "@type": "Place",
        name: "Phuket, Thailand",
      },
    },
    audience: {
      "@type": "Audience",
      audienceType: program.audienceType,
    },
  }));

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/${lang}/#faq`,
    mainEntity: faqItems(t).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const videos = VIDEOS.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `https://www.youtube.com/watch?v=${video.id}`,
    name: `${t.brand_name} · ${video.principle}`,
    description: t.videos_lead,
    thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    uploadDate: "2024-01-01",
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    publisher: { "@id": `${SITE}/#academy` },
    inLanguage: HREFLANG[lang],
  }));

  const reviews = [
    { author: t.review_ben_name, origin: t.review_ben_origin, body: t.review_ben_quote },
    { author: t.review_thomas_name, origin: t.review_thomas_origin, body: t.review_thomas_quote },
    { author: t.review_gleb_name, origin: t.review_gleb_origin, body: t.review_gleb_quote },
  ].map((review, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${SITE}/${lang}/#review-${index + 1}`,
    itemReviewed: { "@id": `${SITE}/#academy` },
    reviewBody: review.body,
    author: {
      "@type": "Person",
      name: review.author,
      address: { "@type": "PostalAddress", addressCountry: review.origin },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  }));

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: t.brand_name,
    inLanguage: HREFLANG[lang],
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: t.brand_name,
    },
    about: { "@id": `${SITE}/#academy` },
    mainEntity: { "@id": `${SITE}/#academy` },
  };

  return (
    <>
      {jsonLdScript("ld-webpage", webpage)}
      {jsonLdScript("ld-person", person)}
      {jsonLdScript("ld-business", business)}
      {programs.map((program, index) =>
        jsonLdScript(`ld-program-${index}`, program),
      )}
      {jsonLdScript("ld-faq", faq)}
      {videos.map((video, index) =>
        jsonLdScript(`ld-video-${index}`, video),
      )}
      {reviews.map((review, index) =>
        jsonLdScript(`ld-review-${index}`, review),
      )}
    </>
  );
}
