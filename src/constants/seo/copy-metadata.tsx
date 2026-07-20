import { type Locale } from "@/i18n/config";
import { ROUTES } from "../routes/routes";

type RoutesType = (typeof ROUTES)[number];

type PageMetadata = {
  title: string;
  description: string;
  keywords: string[];
};

type CopyMetadataType = Record<RoutesType, Record<Locale, PageMetadata>>;

/**
 * Metadata copy is optimised for three audiences:
 *   - Humans (title fits ~60 chars, description ~155)
 *   - Classic SEO (keywords include intent + long-tail)
 *   - AI search / SGE (description answers the who/what/where in one sentence)
 */
const homeMeta: Record<Locale, PageMetadata> = {
  en: {
    title:
      "Fulvio Coach · Spanish Method Tennis Academy in Phuket · Vamos",
    description:
      "Fulvio Coach is an Italian tennis coach based in Phuket, Thailand, who teaches the Spanish tennis method (zones 3-2-1, footwork, intensity) in private and junior sessions for adults and competitive players.",
    keywords: [
      "Spanish tennis method",
      "tennis coach Phuket",
      "private tennis lessons Phuket",
      "junior tennis Phuket Thailand",
      "Sanchez-Casal method",
      "Rafa Nadal style training",
      "Italian tennis coach Thailand",
      "Fulvio Coach",
      "Vamos",
    ],
  },
  es: {
    title:
      "Fulvio Coach · Academia de Tenis Método Español en Phuket · Vamos",
    description:
      "Fulvio Coach es un entrenador italiano afincado en Phuket, Tailandia, que enseña el método español de tenis (zonas 3-2-1, desplazamiento, intensidad) en sesiones privadas y para juniors.",
    keywords: [
      "método español de tenis",
      "entrenador de tenis en Phuket",
      "clases privadas de tenis Tailandia",
      "tenis juniors Phuket",
      "método Sanchez-Casal",
      "entrenar como Rafa Nadal",
      "entrenador italiano tenis",
      "Fulvio Coach",
      "Vamos",
    ],
  },
  it: {
    title:
      "Fulvio Coach · Accademia Tennis Metodo Spagnolo a Phuket · Vamos",
    description:
      "Fulvio Coach è un coach italiano di stanza a Phuket, Thailandia, che insegna il metodo spagnolo del tennis (zone 3-2-1, footwork, intensità) in sessioni private e per junior.",
    keywords: [
      "metodo spagnolo tennis",
      "coach tennis Phuket",
      "lezioni private tennis Thailandia",
      "tennis junior Phuket",
      "metodo Sanchez-Casal",
      "allenarsi come Rafa Nadal",
      "coach italiano tennis Thailandia",
      "Fulvio Coach",
      "Vamos",
    ],
  },
  th: {
    title:
      "Fulvio Coach · เมธอดเทนนิสสเปนที่ภูเก็ต · Vamos",
    description:
      "Fulvio Coach คือโค้ชเทนนิสอิตาเลียนประจำภูเก็ต ประเทศไทย สอนเมธอดสเปน (โซน 3-2-1, ฟุตเวิร์ก, ความเข้มข้น) เซสชันส่วนตัวสำหรับผู้ใหญ่และจูเนียร์แข่งขัน",
    keywords: [
      "เมธอดเทนนิสสเปน",
      "โค้ชเทนนิสภูเก็ต",
      "เรียนเทนนิสส่วนตัวภูเก็ต",
      "เทนนิสจูเนียร์ภูเก็ต",
      "เมธอด Sanchez-Casal",
      "ฝึกแบบ Rafa Nadal",
      "โค้ชเทนนิสอิตาเลียน",
      "Fulvio Coach",
      "Vamos",
    ],
  },
  zh: {
    title:
      "Fulvio Coach · 普吉西班牙方法网球学院 · Vamos",
    description:
      "Fulvio Coach 是常驻泰国普吉的意大利网球教练，教授西班牙网球方法（3-2-1 分区、步法与强度），提供成人与竞技青少年的私人课程。",
    keywords: [
      "西班牙网球方法",
      "普吉 网球教练",
      "普吉 私人网球课",
      "普吉 青少年 网球",
      "Sanchez-Casal 方法",
      "像 Rafa Nadal 一样训练",
      "意大利 网球教练 泰国",
      "Fulvio Coach",
      "Vamos",
    ],
  },
  ru: {
    title:
      "Fulvio Coach · Испанская школа тенниса на Пхукете · Vamos",
    description:
      "Fulvio Coach — итальянский тренер по теннису в Пхукете, Таиланд. Преподаёт испанский метод (зоны 3-2-1, работа ног, интенсивность) на индивидуальных и юниорских тренировках.",
    keywords: [
      "испанский метод тенниса",
      "тренер по теннису Пхукет",
      "частные тренировки теннис Таиланд",
      "юниорский теннис Пхукет",
      "метод Sanchez-Casal",
      "тренировки как Рафаэль Надаль",
      "итальянский тренер теннис",
      "Fulvio Coach",
      "Vamos",
    ],
  },
};

export const COPY: CopyMetadataType = {
  "": homeMeta,
};
