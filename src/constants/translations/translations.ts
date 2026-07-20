import type { Locale } from "@/i18n/config";

export type FulvioDictionary = {
  brand_name: string;
  brand_descriptor: string;
  nav_method: string;
  nav_programs: string;
  nav_coach: string;
  nav_reviews: string;
  nav_faq: string;
  nav_contact: string;
  nav_cta: string;
  lang_switch_label: string;

  hero_tag: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_vamos: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_badge_label: string;
  hero_badge_value: string;
  hero_marquee_1: string;
  hero_marquee_2: string;
  hero_marquee_3: string;
  hero_marquee_4: string;
  hero_marquee_5: string;

  manifesto_eyebrow: string;
  manifesto_quote_1: string;
  manifesto_quote_accent: string;
  manifesto_quote_2: string;
  manifesto_paragraph: string;
  manifesto_value_1: string;
  manifesto_value_2: string;
  manifesto_value_3: string;
  manifesto_value_4: string;
  manifesto_value_5: string;

  trust_1_label: string;
  trust_1_value: string;
  trust_2_label: string;
  trust_2_value: string;
  trust_3_label: string;
  trust_3_value: string;
  trust_4_label: string;
  trust_4_value: string;

  system_eyebrow: string;
  system_title: string;
  system_lead: string;
  system_body: string;
  zone_3_num: string;
  zone_3_label: string;
  zone_3_title: string;
  zone_3_text: string;
  zone_2_num: string;
  zone_2_label: string;
  zone_2_title: string;
  zone_2_text: string;
  zone_1_num: string;
  zone_1_label: string;
  zone_1_title: string;
  zone_1_text: string;
  system_principle_1: string;
  system_principle_2: string;
  system_principle_3: string;
  system_principle_4: string;
  system_principle_5: string;
  system_principle_6: string;

  flow_eyebrow: string;
  flow_title: string;
  flow_lead: string;
  flow_1_label: string;
  flow_1_text: string;
  flow_2_label: string;
  flow_2_text: string;
  flow_3_label: string;
  flow_3_text: string;
  flow_4_label: string;
  flow_4_text: string;
  flow_5_label: string;
  flow_5_text: string;

  programs_eyebrow: string;
  programs_title: string;
  programs_lead: string;
  program_1_num: string;
  program_1_title: string;
  program_1_text: string;
  program_2_num: string;
  program_2_title: string;
  program_2_text: string;
  program_3_num: string;
  program_3_title: string;
  program_3_text: string;

  coach_eyebrow: string;
  coach_tag: string;
  coach_name: string;
  coach_role: string;
  coach_bio_1: string;
  coach_bio_2: string;
  coach_bio_3: string;
  coach_fact_1_label: string;
  coach_fact_1_value: string;
  coach_fact_2_label: string;
  coach_fact_2_value: string;
  coach_fact_3_label: string;
  coach_fact_3_value: string;
  coach_fact_4_label: string;
  coach_fact_4_value: string;

  videos_eyebrow: string;
  videos_title: string;
  videos_lead: string;
  video_zones_title: string;
  video_intensity_title: string;
  video_review_en_title: string;
  video_review_ru_title: string;
  video_play: string;

  gallery_eyebrow: string;
  gallery_title: string;
  gallery_lead: string;
  gallery_alt_training: string;
  gallery_alt_intensity: string;
  gallery_alt_drill: string;
  gallery_alt_footwork: string;
  gallery_alt_session: string;
  gallery_alt_pointplay: string;
  gallery_alt_tarzan: string;

  reviews_eyebrow: string;
  reviews_title: string;
  reviews_lead: string;
  review_ben_quote: string;
  review_ben_name: string;
  review_ben_origin: string;
  review_ben_flag: string;
  review_thomas_quote: string;
  review_thomas_name: string;
  review_thomas_origin: string;
  review_thomas_flag: string;
  review_gleb_quote: string;
  review_gleb_name: string;
  review_gleb_origin: string;
  review_gleb_flag: string;
  review_watch: string;

  faq_eyebrow: string;
  faq_title: string;
  faq_lead: string;
  faq_1_q: string;
  faq_1_a: string;
  faq_2_q: string;
  faq_2_a: string;
  faq_3_q: string;
  faq_3_a: string;
  faq_4_q: string;
  faq_4_a: string;
  faq_5_q: string;
  faq_5_a: string;
  faq_6_q: string;
  faq_6_a: string;
  faq_7_q: string;
  faq_7_a: string;

  contact_eyebrow: string;
  contact_title: string;
  contact_signature: string;
  contact_lead: string;
  contact_whatsapp_label: string;
  contact_email_label: string;
  contact_instagram_label: string;
  contact_youtube_label: string;
  contact_cta: string;

  footer_tagline: string;
  footer_nav_title: string;
  footer_contact_title: string;
  footer_follow_title: string;
  footer_lang_title: string;
  footer_copyright: string;
  footer_note: string;

  whatsapp_message: string;
};

const en: FulvioDictionary = {
  brand_name: "Fulvio Coach",
  brand_descriptor: "Spanish Method Tennis Academy",
  nav_method: "The Method",
  nav_programs: "Programs",
  nav_coach: "Coach",
  nav_reviews: "Reviews",
  nav_faq: "FAQ",
  nav_contact: "Contact",
  nav_cta: "WhatsApp",
  lang_switch_label: "Language",

  hero_tag: "Phuket, Thailand",
  hero_title_1: "Train the",
  hero_title_2: "Spanish way.",
  hero_vamos: "Vamos.",
  hero_subtitle: "One Italian coach. The Spanish tennis method. Twenty-five years on court across three continents. Personal sessions in Phuket for players who want to fight for every point.",
  hero_cta_primary: "Message on WhatsApp",
  hero_cta_secondary: "See the method",
  hero_badge_label: "Now training in",
  hero_badge_value: "Phuket · Thailand",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "Zone 3 · Zone 2 · Zone 1",
  hero_marquee_3: "Fight for every point",
  hero_marquee_4: "Spanish method · High performance",
  hero_marquee_5: "One more",

  manifesto_eyebrow: "The Vamos manifesto",
  manifesto_quote_1: "Tennis is not about hitting the ball. It is about",
  manifesto_quote_accent: "reading it, moving to it, and choosing what happens next.",
  manifesto_quote_2: "",
  manifesto_paragraph: "Every session breathes the fighting spirit that made Spanish tennis a school of its own. Discipline in the warm-up. Balance in the recovery. Intensity in the last ball of the day. Nothing shouted, everything built \u2014 one point, one drill, one more.",
  manifesto_value_1: "Discipline",
  manifesto_value_2: "Balance",
  manifesto_value_3: "Intensity",
  manifesto_value_4: "Resilience",
  manifesto_value_5: "Humility",

  trust_1_label: "Base",
  trust_1_value: "Phuket, Thailand",
  trust_2_label: "Coaching",
  trust_2_value: "Personal, on court",
  trust_3_label: "Players",
  trust_3_value: "Juniors \u00b7 Adults",
  trust_4_label: "Method",
  trust_4_value: "Spanish system",

  system_eyebrow: "The method",
  system_title: "Three zones. One complete point.",
  system_lead: "The Spanish tennis method is built on a simple map of the court: three zones, three intentions, three ways to be the one who decides how the point ends.",
  system_body: "Every drill in Fulvio\u2019s sessions lives inside this map. Where does the ball come from, where do you meet it, where do you send it next. Once the map is yours, technique stops being ten thousand isolated shots and becomes a language you speak on the run.",
  zone_3_num: "3",
  zone_3_label: "Zone 3 \u00b7 Baseline",
  zone_3_title: "Defence & consistency",
  zone_3_text: "Deep, heavy balls from behind the line. Read the incoming shot, recover, stay in the point. This is where matches are refused to be lost.",
  zone_2_num: "2",
  zone_2_label: "Zone 2 \u00b7 Transition",
  zone_2_title: "Approach & control",
  zone_2_text: "Move forward with intention, take time away, prepare the winning ball. The middle of the court is where the point is really decided.",
  zone_1_num: "1",
  zone_1_label: "Zone 1 \u00b7 Attack",
  zone_1_title: "Finish & net",
  zone_1_text: "Take the ball early, close the distance, finish the point. Offensive forehand, backhand, volley \u2014 aggression with a clear head.",
  system_principle_1: "Footwork & positioning",
  system_principle_2: "Balance & recovery",
  system_principle_3: "Offensive patterns",
  system_principle_4: "Defensive patterns",
  system_principle_5: "Repetition with intention",
  system_principle_6: "Point play & match habits",

  flow_eyebrow: "How we train",
  flow_title: "Five steps, every session.",
  flow_lead: "The Spanish method is a loop, not a checklist. Every ball goes through the same five stages until they run at the speed of instinct.",
  flow_1_label: "Read",
  flow_1_text: "See the ball, see the court, see the intention behind the shot.",
  flow_2_label: "Move",
  flow_2_text: "Split-step, cross-step, recovery. Feet before hands, always.",
  flow_3_label: "Build",
  flow_3_text: "Set up the point with the shot that belongs to the situation.",
  flow_4_label: "Attack",
  flow_4_text: "Take time away when the ball invites you. No hesitation, no drama.",
  flow_5_label: "Reset",
  flow_5_text: "Recover on the diagonal. The last ball is already old. Next one.",

  programs_eyebrow: "Programs",
  programs_title: "Three ways to train with Fulvio.",
  programs_lead: "The same method, adapted to your level, age and how much time you have on the island. Sessions and packages are confirmed directly on WhatsApp.",
  program_1_num: "01",
  program_1_title: "Private coaching",
  program_1_text: "One-to-one sessions. Full attention on your technique, your footwork and the patterns your game is missing. For adults and juniors who want to build something serious.",
  program_2_num: "02",
  program_2_title: "Junior performance",
  program_2_text: "Structured training for competitive juniors. Zones, intensity, point play and the small habits that separate a talented kid from a competitor.",
  program_3_num: "03",
  program_3_title: "Camps & clinics",
  program_3_text: "Short intensive blocks for visitors in Phuket. High-energy Spanish drills, a proper sweat, and a tropical setting that makes every session feel like a small holiday.",

  coach_eyebrow: "The coach",
  coach_tag: "Italian in Phuket",
  coach_name: "Fulvio Scian",
  coach_role: "International tennis coach \u00b7 Spanish method \u00b7 Phuket",
  coach_bio_1: "Italian by birth, coach by vocation, Phuket by choice. Fulvio has spent more than two decades on court \u2014 from academies in Spain and Italy to programs in Central America, the Caribbean and Southeast Asia \u2014 always teaching the same thing: the Spanish tennis method, adapted to whoever is on the other side of the net.",
  coach_bio_2: "In Phuket he trains juniors, adults and visitors on a single principle: intensity with a plan. No shortcuts, no rockstar drills, no talk that does not translate into a better ball. When the session ends, he goes home on his motorbike with Tarz\u00e1n, his dog and unofficial assistant coach. When it starts again, it is Vamos, again.",
  coach_bio_3: "Credentials are presented here as professional training received, not as an official endorsement by third parties.",
  coach_fact_1_label: "Based in",
  coach_fact_1_value: "Phuket, Thailand",
  coach_fact_2_label: "Coaching since",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "Method",
  coach_fact_3_value: "Spanish system",
  coach_fact_4_label: "Sidekick",
  coach_fact_4_value: "Tarz\u00e1n the dog",

  videos_eyebrow: "See the work",
  videos_title: "The method, on court.",
  videos_lead: "Clips and reviews from the Fulvio Coach channel. Zones, drills, and players from four continents.",
  video_zones_title: "Spanish system \u00b7 Zones 3, 2, 1",
  video_intensity_title: "High-intensity session",
  video_review_en_title: "Player review \u00b7 Ben (England)",
  video_review_ru_title: "Player review \u00b7 Gleb (Russia)",
  video_play: "Play",

  gallery_eyebrow: "On court",
  gallery_title: "Sweat, footwork, Tarz\u00e1n.",
  gallery_lead: "Everyday work in Phuket. From baseline drills to the ride home on the motorbike with a dog in the box.",
  gallery_alt_training: "Fulvio coaching a Spanish method drill on court in Phuket",
  gallery_alt_intensity: "High-intensity tennis session with a junior player",
  gallery_alt_drill: "Sanchez-Casal style offensive drill",
  gallery_alt_footwork: "Footwork and hand-feed drill",
  gallery_alt_session: "High performance training session in Phuket",
  gallery_alt_pointplay: "Point play scenario on court",
  gallery_alt_tarzan: "Tarz\u00e1n, Fulvio\u2019s dog, on the way to training",

  reviews_eyebrow: "Reviews",
  reviews_title: "What players say.",
  reviews_lead: "Words from players who trained with Fulvio in Phuket \u2014 in their own language, on his YouTube channel.",
  review_ben_quote: "He made my footwork click. Suddenly I understood where I was supposed to be, not just where the ball was going.",
  review_ben_name: "Ben",
  review_ben_origin: "England",
  review_ben_flag: "EN",
  review_thomas_quote: "Fulvio is the master of the Spanish drill. Two weeks with him in Phuket and my game had a spine again.",
  review_thomas_name: "Thomas",
  review_thomas_origin: "International visitor",
  review_thomas_flag: "TM",
  review_gleb_quote: "The Spanish method, exactly the way I hoped it would feel. Serious work, warm coach, a lot of vamos.",
  review_gleb_name: "Gleb",
  review_gleb_origin: "Russia",
  review_gleb_flag: "RU",
  review_watch: "Watch on YouTube",

  faq_eyebrow: "Answers",
  faq_title: "Frequently asked questions.",
  faq_lead: "Everything most players ask before their first session with Fulvio in Phuket.",
  faq_1_q: "What is the Spanish tennis method?",
  faq_1_a: "The Spanish tennis method is a training approach developed in Spain and applied at academies such as Sanchez-Casal and by figures around Rafa Nadal\u2019s coaching lineage. It organises the court into three zones \u2014 defence, transition and attack \u2014 and builds every drill around footwork, balance, intensity and repeated point-like patterns. Fulvio applies this method personally, with his own experience, and does not represent any specific academy or federation.",
  faq_2_q: "Where does Fulvio Coach train players?",
  faq_2_a: "Fulvio trains in Phuket, Thailand. Sessions take place on partner courts around the island. Exact location and times are confirmed on WhatsApp once the level and program are agreed.",
  faq_3_q: "Who is the academy for?",
  faq_3_a: "Competitive juniors, ambitious adults and visitors passing through Phuket who want serious tennis. The method is the same for everyone; the intensity, drills and packages are adapted to your level and your goals.",
  faq_4_q: "How much does it cost?",
  faq_4_a: "Rates depend on the program (private coaching, junior performance, camps and clinics), how many sessions you book and where they take place. Ask on WhatsApp and you will get a straight answer in the same conversation \u2014 no forms, no funnels.",
  faq_5_q: "Do I need to be a strong player already?",
  faq_5_a: "No. The method fits improvers, intermediate players and competitive juniors. Complete beginners are welcome too when Fulvio\u2019s schedule allows \u2014 the same principles simply start from step one.",
  faq_6_q: "How is this different from a normal tennis lesson?",
  faq_6_a: "Everything is inside a structure: three zones on court, five stages per point, and drills that come back over weeks so the movement becomes automatic. You are not paying for a hitting partner; you are paying for someone who has spent decades teaching this exact system on three continents.",
  faq_7_q: "Who is Tarz\u00e1n?",
  faq_7_a: "Tarz\u00e1n is Fulvio\u2019s dog and unofficial assistant coach. He rides in the motorbike box, watches the sessions from the shade and occasionally chases loose balls. If you come to Phuket, you will probably meet him.",

  contact_eyebrow: "Ready?",
  contact_title: "Book your first session.",
  contact_signature: "Vamos.",
  contact_lead: "One conversation on WhatsApp is enough to check availability, agree on the format and get you on court. No forms. No follow-up funnels. Just tennis.",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "Email",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "Message on WhatsApp",

  footer_tagline: "Spanish Method Tennis Academy \u00b7 Phuket \u00b7 Vamos.",
  footer_nav_title: "Explore",
  footer_contact_title: "Talk to Fulvio",
  footer_follow_title: "Follow",
  footer_lang_title: "Language",
  footer_copyright: "All rights reserved.",
  footer_note: "Coaching by Fulvio Scian. This site is independent and not affiliated with Rafa Nadal, the Rafa Nadal Academy, Sanchez-Casal or any federation named above.",

  whatsapp_message: "Hi Fulvio, I would like to train with the Spanish method in Phuket. Could you share availability and rates?",
};

const es: FulvioDictionary = {
  ...en,
  brand_descriptor: "Academia de Tenis · Método Español",
  nav_method: "El Método",
  nav_programs: "Programas",
  nav_coach: "Entrenador",
  nav_reviews: "Reseñas",
  nav_faq: "Preguntas",
  nav_contact: "Contacto",
  lang_switch_label: "Idioma",

  hero_tag: "Phuket, Tailandia",
  hero_title_1: "Entrena al",
  hero_title_2: "estilo español.",
  hero_vamos: "Vamos.",
  hero_subtitle: "Un entrenador italiano. El método español de tenis. Veinticinco años de pista en tres continentes. Sesiones personales en Phuket para jugadores que quieren luchar cada punto.",
  hero_cta_primary: "Escribir por WhatsApp",
  hero_cta_secondary: "Ver el método",
  hero_badge_label: "Entrenando ahora en",
  hero_badge_value: "Phuket · Tailandia",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "Zona 3 · Zona 2 · Zona 1",
  hero_marquee_3: "Cada punto se pelea",
  hero_marquee_4: "Método español · Alto rendimiento",
  hero_marquee_5: "Una más",

  manifesto_eyebrow: "El manifiesto Vamos",
  manifesto_quote_1: "El tenis no va de pegarle a la bola. Va de",
  manifesto_quote_accent: "leerla, correr hacia ella y decidir qué pasa después.",
  manifesto_quote_2: "",
  manifesto_paragraph: "Cada sesión respira el espíritu combativo que convirtió al tenis español en una escuela propia. Disciplina en el calentamiento. Equilibrio en la recuperación. Intensidad en la última bola del día. Nada gritado, todo construido — un punto, un ejercicio, una más.",
  manifesto_value_1: "Disciplina",
  manifesto_value_2: "Equilibrio",
  manifesto_value_3: "Intensidad",
  manifesto_value_4: "Resiliencia",
  manifesto_value_5: "Humildad",

  trust_1_label: "Base",
  trust_1_value: "Phuket, Tailandia",
  trust_2_label: "Coaching",
  trust_2_value: "Personal, en pista",
  trust_3_label: "Alumnos",
  trust_3_value: "Juniors · Adultos",
  trust_4_label: "Método",
  trust_4_value: "Sistema español",

  system_eyebrow: "El método",
  system_title: "Tres zonas. Un punto completo.",
  system_lead: "El método español de tenis se construye sobre un mapa simple de la pista: tres zonas, tres intenciones, tres formas de ser quien decide cómo acaba el punto.",
  system_body: "Cada ejercicio en las sesiones de Fulvio vive dentro de este mapa. De dónde viene la bola, dónde la encuentras, dónde la mandas. Cuando el mapa es tuyo, la técnica deja de ser diez mil golpes sueltos y se convierte en un idioma que hablas en carrera.",
  zone_3_num: "3",
  zone_3_label: "Zona 3 · Fondo",
  zone_3_title: "Defensa y consistencia",
  zone_3_text: "Bolas profundas y pesadas desde detrás de la línea. Lee la bola, recupera, sostén el punto. Aquí los partidos se niegan a perderse.",
  zone_2_num: "2",
  zone_2_label: "Zona 2 · Transición",
  zone_2_title: "Aproximación y control",
  zone_2_text: "Avanza con intención, quita tiempo al rival, prepara la bola que gana. El centro de la pista es donde se decide de verdad el punto.",
  zone_1_num: "1",
  zone_1_label: "Zona 1 · Ataque",
  zone_1_title: "Finalizar y red",
  zone_1_text: "Toma la bola pronto, cierra distancia, termina el punto. Derecha ofensiva, revés, volea — agresividad con cabeza fría.",
  system_principle_1: "Desplazamiento y posición",
  system_principle_2: "Equilibrio y recuperación",
  system_principle_3: "Patrones ofensivos",
  system_principle_4: "Patrones defensivos",
  system_principle_5: "Repetición con intención",
  system_principle_6: "Juego de puntos y hábitos de partido",

  flow_eyebrow: "Cómo entrenamos",
  flow_title: "Cinco pasos, cada sesión.",
  flow_lead: "El método español es un bucle, no una lista. Cada bola pasa por las mismas cinco etapas hasta que corren a velocidad de instinto.",
  flow_1_label: "Leer",
  flow_1_text: "Ver la bola, ver la pista, ver la intención del golpe contrario.",
  flow_2_label: "Mover",
  flow_2_text: "Split-step, cruce, recuperación. Los pies antes que las manos, siempre.",
  flow_3_label: "Construir",
  flow_3_text: "Prepara el punto con el golpe que le corresponde a la situación.",
  flow_4_label: "Atacar",
  flow_4_text: "Quita tiempo cuando la bola te lo pide. Sin dudas, sin drama.",
  flow_5_label: "Resetear",
  flow_5_text: "Recupera en la diagonal. La última bola ya es vieja. Siguiente.",

  programs_eyebrow: "Programas",
  programs_title: "Tres formas de entrenar con Fulvio.",
  programs_lead: "El mismo método, adaptado a tu nivel, edad y cuánto tiempo tienes en la isla. Sesiones y paquetes se cierran directamente por WhatsApp.",
  program_1_num: "01",
  program_1_title: "Coaching privado",
  program_1_text: "Sesiones uno a uno. Atención total a tu técnica, a tu desplazamiento y a los patrones que le faltan a tu juego. Para adultos y juniors que quieren construir algo serio.",
  program_2_num: "02",
  program_2_title: "Rendimiento junior",
  program_2_text: "Entrenamiento estructurado para juniors competitivos. Zonas, intensidad, juego de puntos y los pequeños hábitos que separan a un talento de un competidor.",
  program_3_num: "03",
  program_3_title: "Camps y clínicas",
  program_3_text: "Bloques intensivos para visitantes en Phuket. Drills españoles con energía, sudor real y un entorno tropical que convierte cada sesión en unas mini-vacaciones.",

  coach_eyebrow: "El entrenador",
  coach_tag: "Italiano en Phuket",
  coach_bio_1: "Italiano de nacimiento, entrenador por vocación, en Phuket por elección. Fulvio ha pasado más de dos décadas en pista — de academias en España e Italia a programas en Centroamérica, el Caribe y el sudeste asiático — enseñando siempre lo mismo: el método español de tenis, adaptado a quien esté al otro lado de la red.",
  coach_bio_2: "En Phuket entrena a juniors, adultos y visitantes bajo un mismo principio: intensidad con plan. Sin atajos, sin ejercicios de postureo, sin discurso que no se traduzca en una mejor bola. Cuando la sesión acaba, vuelve a casa en la moto con Tarzán, su perro y ayudante extraoficial. Cuando empieza otra vez, es Vamos, otra vez.",
  coach_bio_3: "Las credenciales aquí se presentan como formación profesional recibida, no como aval oficial de terceros.",
  coach_fact_1_label: "Base",
  coach_fact_1_value: "Phuket, Tailandia",
  coach_fact_2_label: "En pista desde",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "Método",
  coach_fact_3_value: "Sistema español",
  coach_fact_4_label: "Ayudante",
  coach_fact_4_value: "Tarzán, el perro",

  videos_eyebrow: "Míralo en pista",
  videos_title: "El método, en la pista.",
  videos_lead: "Clips y reseñas del canal Fulvio Coach. Zonas, drills y jugadores de cuatro continentes.",
  video_zones_title: "Sistema español · Zonas 3, 2, 1",
  video_intensity_title: "Sesión de alta intensidad",
  video_review_en_title: "Reseña · Ben (Inglaterra)",
  video_review_ru_title: "Reseña · Gleb (Rusia)",
  video_play: "Reproducir",

  gallery_eyebrow: "En pista",
  gallery_title: "Sudor, footwork, Tarzán.",
  gallery_lead: "El día a día en Phuket. De los drills de fondo al camino a casa en moto con un perro en la caja.",
  gallery_alt_training: "Fulvio dirigiendo un drill del método español en pista en Phuket",
  gallery_alt_intensity: "Sesión de tenis de alta intensidad con un jugador junior",
  gallery_alt_drill: "Drill ofensivo estilo Sanchez-Casal",
  gallery_alt_footwork: "Ejercicio de desplazamiento y alimentación manual",
  gallery_alt_session: "Sesión de alto rendimiento en Phuket",
  gallery_alt_pointplay: "Situación de juego de puntos en pista",
  gallery_alt_tarzan: "Tarzán, el perro de Fulvio, camino del entrenamiento",

  reviews_eyebrow: "Reseñas",
  reviews_title: "Lo que dicen los jugadores.",
  reviews_lead: "Palabras de jugadores que han entrenado con Fulvio en Phuket — en su propio idioma, en su canal de YouTube.",
  review_ben_quote: "Me hizo entender el footwork. De repente sabía dónde tenía que estar, no solo hacia dónde iba la bola.",
  review_ben_origin: "Inglaterra",
  review_thomas_quote: "Fulvio es el maestro del drill español. Dos semanas con él en Phuket y mi juego volvió a tener columna.",
  review_thomas_origin: "Visitante internacional",
  review_gleb_quote: "El método español, exactamente como esperaba sentirlo. Trabajo serio, entrenador cercano, mucho vamos.",
  review_gleb_origin: "Rusia",
  review_watch: "Ver en YouTube",

  faq_eyebrow: "Respuestas",
  faq_title: "Preguntas frecuentes.",
  faq_lead: "Todo lo que la mayoría de jugadores pregunta antes de su primera sesión con Fulvio en Phuket.",
  faq_1_q: "¿Qué es el método español de tenis?",
  faq_1_a: "El método español de tenis es un enfoque de entrenamiento desarrollado en España y aplicado en academias como Sanchez-Casal y por figuras cercanas al linaje de entrenadores de Rafa Nadal. Organiza la pista en tres zonas — defensa, transición y ataque — y construye cada ejercicio en torno al desplazamiento, el equilibrio, la intensidad y patrones repetidos con estructura de punto. Fulvio aplica este método de forma personal, con su propia experiencia, y no representa oficialmente a ninguna academia ni federación.",
  faq_2_q: "¿Dónde entrena Fulvio Coach?",
  faq_2_a: "Fulvio entrena en Phuket, Tailandia. Las sesiones se dan en pistas colaboradoras de la isla. La ubicación exacta y los horarios se confirman por WhatsApp una vez acordados el nivel y el programa.",
  faq_3_q: "¿Para quién es la academia?",
  faq_3_a: "Juniors competitivos, adultos ambiciosos y visitantes de paso por Phuket que quieren tenis en serio. El método es el mismo para todos; la intensidad, los drills y los paquetes se adaptan a tu nivel y a tus objetivos.",
  faq_4_q: "¿Cuánto cuesta?",
  faq_4_a: "Depende del programa (coaching privado, rendimiento junior, camps y clínicas), del número de sesiones y de dónde se den. Pregunta por WhatsApp y recibirás una respuesta directa en la misma conversación — sin formularios, sin embudos.",
  faq_5_q: "¿Necesito ser buen jugador para entrenar?",
  faq_5_a: "No. El método funciona con jugadores intermedios, en progresión y juniors competitivos. Los principiantes también son bienvenidos cuando la agenda lo permite — los mismos principios empiezan desde el paso uno.",
  faq_6_q: "¿En qué se diferencia esto de una clase de tenis normal?",
  faq_6_a: "Todo va dentro de una estructura: tres zonas en pista, cinco etapas por punto y drills que vuelven durante semanas para que el movimiento se automatice. No pagas por un compañero de peloteo; pagas por alguien que lleva décadas enseñando este sistema exacto en tres continentes.",
  faq_7_q: "¿Quién es Tarzán?",
  faq_7_a: "Tarzán es el perro de Fulvio y su ayudante extraoficial. Viaja en la caja de la moto, mira las sesiones desde la sombra y a veces persigue alguna bola suelta. Si vienes a Phuket, seguramente lo conocerás.",

  contact_eyebrow: "¿Listo?",
  contact_title: "Reserva tu primera sesión.",
  contact_signature: "Vamos.",
  contact_lead: "Una conversación por WhatsApp basta para ver disponibilidad, acordar el formato y ponerte en pista. Sin formularios. Sin embudos. Solo tenis.",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "Email",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "Escribir por WhatsApp",

  footer_tagline: "Academia de Tenis Método Español · Phuket · Vamos.",
  footer_nav_title: "Explora",
  footer_contact_title: "Habla con Fulvio",
  footer_follow_title: "Síguenos",
  footer_lang_title: "Idioma",
  footer_copyright: "Todos los derechos reservados.",
  footer_note: "Coaching por Fulvio Scian. Este sitio es independiente y no está afiliado a Rafa Nadal, la Rafa Nadal Academy, Sanchez-Casal ni ninguna federación mencionada.",

  whatsapp_message: "Hola Fulvio, me gustaría entrenar con el método español en Phuket. ¿Puedes indicarme disponibilidad y tarifas?",
};

const it: FulvioDictionary = {
  ...en,
  brand_descriptor: "Accademia di Tennis · Metodo Spagnolo",
  nav_method: "Il Metodo",
  nav_programs: "Programmi",
  nav_coach: "Coach",
  nav_reviews: "Recensioni",
  nav_faq: "Domande",
  nav_contact: "Contatto",
  lang_switch_label: "Lingua",

  hero_tag: "Phuket, Thailandia",
  hero_title_1: "Allenati alla",
  hero_title_2: "spagnola.",
  hero_vamos: "Vamos.",
  hero_subtitle: "Un coach italiano. Il metodo spagnolo del tennis. Venticinque anni di campo in tre continenti. Sessioni personali a Phuket per chi vuole giocare ogni punto.",
  hero_cta_primary: "Scrivi su WhatsApp",
  hero_cta_secondary: "Vedi il metodo",
  hero_badge_label: "In campo ora a",
  hero_badge_value: "Phuket · Thailandia",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "Zona 3 · Zona 2 · Zona 1",
  hero_marquee_3: "Ogni punto si combatte",
  hero_marquee_4: "Metodo spagnolo · Alta intensità",
  hero_marquee_5: "Ancora una",

  manifesto_eyebrow: "Il manifesto Vamos",
  manifesto_quote_1: "Il tennis non è colpire la palla. È",
  manifesto_quote_accent: "leggerla, correrle incontro e decidere cosa succede dopo.",
  manifesto_quote_2: "",
  manifesto_paragraph: "Ogni sessione respira lo spirito combattivo che ha reso il tennis spagnolo una scuola a sé. Disciplina nel riscaldamento. Equilibrio nel recupero. Intensità nell'ultima palla della giornata. Nulla urlato, tutto costruito — un punto, un esercizio, ancora una.",
  manifesto_value_1: "Disciplina",
  manifesto_value_2: "Equilibrio",
  manifesto_value_3: "Intensità",
  manifesto_value_4: "Resilienza",
  manifesto_value_5: "Umiltà",

  trust_1_label: "Base",
  trust_1_value: "Phuket, Thailandia",
  trust_2_label: "Coaching",
  trust_2_value: "Personale, in campo",
  trust_3_label: "Giocatori",
  trust_3_value: "Junior · Adulti",
  trust_4_label: "Metodo",
  trust_4_value: "Sistema spagnolo",

  system_eyebrow: "Il metodo",
  system_title: "Tre zone. Un punto completo.",
  system_lead: "Il metodo spagnolo del tennis si costruisce su una mappa semplice del campo: tre zone, tre intenzioni, tre modi di essere chi decide come finisce il punto.",
  system_body: "Ogni esercizio nelle sessioni di Fulvio vive dentro questa mappa. Da dove arriva la palla, dove la incontri, dove la mandi dopo. Quando la mappa è tua, la tecnica smette di essere diecimila colpi isolati e diventa una lingua che parli in corsa.",
  zone_3_num: "3",
  zone_3_label: "Zona 3 · Fondo",
  zone_3_title: "Difesa & consistenza",
  zone_3_text: "Palle profonde e pesanti dietro la linea. Leggi il colpo, recupera, resta nel punto. Qui le partite si rifiutano di perderle.",
  zone_2_num: "2",
  zone_2_label: "Zona 2 · Transizione",
  zone_2_title: "Avvicinamento & controllo",
  zone_2_text: "Avanza con intenzione, togli tempo, prepara la palla che chiude. Il centro del campo è dove si decide davvero il punto.",
  zone_1_num: "1",
  zone_1_label: "Zona 1 · Attacco",
  zone_1_title: "Chiudere & rete",
  zone_1_text: "Prendi la palla presto, chiudi la distanza, finisci il punto. Dritto offensivo, rovescio, volée — aggressività a mente fredda.",
  system_principle_1: "Footwork e posizionamento",
  system_principle_2: "Equilibrio e recupero",
  system_principle_3: "Schemi offensivi",
  system_principle_4: "Schemi difensivi",
  system_principle_5: "Ripetizione con intenzione",
  system_principle_6: "Point play e abitudini di match",

  flow_eyebrow: "Come si allena",
  flow_title: "Cinque passi, ogni sessione.",
  flow_lead: "Il metodo spagnolo è un loop, non una lista. Ogni palla attraversa le stesse cinque fasi finché non corrono a velocità di istinto.",
  flow_1_label: "Leggi",
  flow_1_text: "Vedi la palla, vedi il campo, vedi l'intenzione dietro il colpo.",
  flow_2_label: "Muovi",
  flow_2_text: "Split-step, cross-step, recupero. I piedi prima delle mani, sempre.",
  flow_3_label: "Costruisci",
  flow_3_text: "Prepara il punto con il colpo che appartiene alla situazione.",
  flow_4_label: "Attacca",
  flow_4_text: "Togli tempo quando la palla te lo chiede. Senza esitazione, senza drammi.",
  flow_5_label: "Reset",
  flow_5_text: "Recupera sulla diagonale. L'ultima palla è già vecchia. Prossima.",

  programs_eyebrow: "Programmi",
  programs_title: "Tre modi di allenarsi con Fulvio.",
  programs_lead: "Lo stesso metodo, adattato al tuo livello, età e a quanto tempo hai sull'isola. Sessioni e pacchetti si chiudono direttamente su WhatsApp.",
  program_1_num: "01",
  program_1_title: "Coaching privato",
  program_1_text: "Sessioni uno a uno. Attenzione totale sulla tua tecnica, sul footwork e sugli schemi che al tuo gioco mancano. Per adulti e junior che vogliono costruire qualcosa di serio.",
  program_2_num: "02",
  program_2_title: "Performance junior",
  program_2_text: "Allenamento strutturato per junior competitivi. Zone, intensità, point play e le piccole abitudini che separano un talento da un vero competitor.",
  program_3_num: "03",
  program_3_title: "Camp & clinic",
  program_3_text: "Blocchi intensivi per chi passa da Phuket. Drill spagnoli ad alta energia, sudore vero e un ambiente tropicale che rende ogni sessione una mini-vacanza.",

  coach_eyebrow: "Il coach",
  coach_tag: "Italiano a Phuket",
  coach_bio_1: "Italiano di nascita, coach per vocazione, a Phuket per scelta. Fulvio ha passato più di vent'anni in campo — da accademie in Spagna e Italia a programmi in America Centrale, Caraibi e Sud-Est asiatico — insegnando sempre la stessa cosa: il metodo spagnolo, adattato a chi sta dall'altra parte della rete.",
  coach_bio_2: "A Phuket allena junior, adulti e visitatori con un unico principio: intensità con un piano. Niente scorciatoie, niente drill da rockstar, niente discorsi che non si traducano in una palla migliore. Quando la sessione finisce, torna a casa in moto con Tarzán, il suo cane e vice-coach ufficioso. Quando ricomincia, è di nuovo Vamos.",
  coach_bio_3: "Le credenziali qui sono presentate come formazione professionale ricevuta, non come endorsement ufficiale di terzi.",
  coach_fact_1_label: "Base",
  coach_fact_1_value: "Phuket, Thailandia",
  coach_fact_2_label: "In campo dal",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "Metodo",
  coach_fact_3_value: "Sistema spagnolo",
  coach_fact_4_label: "Assistente",
  coach_fact_4_value: "Tarzán, il cane",

  videos_eyebrow: "Guarda il lavoro",
  videos_title: "Il metodo, in campo.",
  videos_lead: "Clip e recensioni dal canale Fulvio Coach. Zone, drill e giocatori da quattro continenti.",
  video_zones_title: "Sistema spagnolo · Zone 3, 2, 1",
  video_intensity_title: "Sessione ad alta intensità",
  video_review_en_title: "Recensione · Ben (Inghilterra)",
  video_review_ru_title: "Recensione · Gleb (Russia)",
  video_play: "Guarda",

  gallery_eyebrow: "In campo",
  gallery_title: "Sudore, footwork, Tarzán.",
  gallery_lead: "Il quotidiano a Phuket. Dai drill di fondo al ritorno a casa in moto con un cane nel box.",
  gallery_alt_training: "Fulvio guida un drill del metodo spagnolo in campo a Phuket",
  gallery_alt_intensity: "Sessione di tennis ad alta intensità con un junior",
  gallery_alt_drill: "Drill offensivo stile Sanchez-Casal",
  gallery_alt_footwork: "Esercizio di footwork e hand-feed",
  gallery_alt_session: "Sessione di alta performance a Phuket",
  gallery_alt_pointplay: "Situazione di point play in campo",
  gallery_alt_tarzan: "Tarzán, il cane di Fulvio, in viaggio verso l'allenamento",

  reviews_eyebrow: "Recensioni",
  reviews_title: "Cosa dicono i giocatori.",
  reviews_lead: "Parole di giocatori allenati con Fulvio a Phuket — nella loro lingua, sul suo canale YouTube.",
  review_ben_quote: "Mi ha fatto capire il footwork. Improvvisamente sapevo dove dovevo essere, non solo dove andava la palla.",
  review_ben_origin: "Inghilterra",
  review_thomas_quote: "Fulvio è il maestro del drill spagnolo. Due settimane con lui a Phuket e il mio gioco è tornato ad avere una spina dorsale.",
  review_thomas_origin: "Visitatore internazionale",
  review_gleb_quote: "Il metodo spagnolo, esattamente come speravo di sentirlo. Lavoro serio, coach vicino, molto vamos.",
  review_gleb_origin: "Russia",
  review_watch: "Guarda su YouTube",

  faq_eyebrow: "Risposte",
  faq_title: "Domande frequenti.",
  faq_lead: "Tutto quello che i giocatori chiedono prima della prima sessione con Fulvio a Phuket.",
  faq_1_q: "Che cos'è il metodo spagnolo di tennis?",
  faq_1_a: "Il metodo spagnolo è un approccio di allenamento sviluppato in Spagna e applicato in accademie come Sanchez-Casal e da figure vicine alla scuola dei coach di Rafa Nadal. Organizza il campo in tre zone — difesa, transizione e attacco — e costruisce ogni drill attorno a footwork, equilibrio, intensità e schemi ripetuti simili al punto reale. Fulvio applica questo metodo in modo personale, con la propria esperienza, e non rappresenta ufficialmente nessuna accademia o federazione.",
  faq_2_q: "Dove allena Fulvio Coach?",
  faq_2_a: "Fulvio allena a Phuket, Thailandia. Le sessioni si tengono su campi partner sull'isola. Posizione esatta e orari si confermano su WhatsApp una volta concordati livello e programma.",
  faq_3_q: "A chi si rivolge l'accademia?",
  faq_3_a: "Junior competitivi, adulti ambiziosi e visitatori di passaggio a Phuket che vogliono tennis serio. Il metodo è lo stesso per tutti; intensità, drill e pacchetti si adattano al tuo livello e ai tuoi obiettivi.",
  faq_4_q: "Quanto costa?",
  faq_4_a: "Dipende dal programma (coaching privato, performance junior, camp e clinic), dal numero di sessioni e da dove si svolgono. Chiedi su WhatsApp e riceverai una risposta diretta nella stessa conversazione — senza form, senza funnel.",
  faq_5_q: "Devo già giocare bene per allenarmi?",
  faq_5_a: "No. Il metodo funziona per giocatori intermedi, in crescita e junior competitivi. Anche i principianti sono benvenuti quando l'agenda lo permette — gli stessi principi partono dal passo uno.",
  faq_6_q: "Cosa lo distingue da una normale lezione di tennis?",
  faq_6_a: "Tutto vive dentro una struttura: tre zone in campo, cinque fasi per punto e drill che tornano nelle settimane perché il movimento diventi automatico. Non paghi un partner di palleggio; paghi qualcuno che insegna questo esatto sistema da decenni in tre continenti.",
  faq_7_q: "Chi è Tarzán?",
  faq_7_a: "Tarzán è il cane di Fulvio e il suo vice-coach ufficioso. Viaggia nel box della moto, osserva le sessioni dall'ombra e ogni tanto rincorre qualche palla vagante. Se vieni a Phuket, probabilmente lo incontrerai.",

  contact_eyebrow: "Pronto?",
  contact_title: "Prenota la prima sessione.",
  contact_signature: "Vamos.",
  contact_lead: "Una conversazione su WhatsApp basta per verificare la disponibilità, decidere il formato e portarti in campo. Niente form. Niente funnel. Solo tennis.",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "Email",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "Scrivi su WhatsApp",

  footer_tagline: "Accademia di Tennis Metodo Spagnolo · Phuket · Vamos.",
  footer_nav_title: "Esplora",
  footer_contact_title: "Parla con Fulvio",
  footer_follow_title: "Segui",
  footer_lang_title: "Lingua",
  footer_copyright: "Tutti i diritti riservati.",
  footer_note: "Coaching a cura di Fulvio Scian. Questo sito è indipendente e non è affiliato a Rafa Nadal, Rafa Nadal Academy, Sanchez-Casal o alle federazioni citate.",

  whatsapp_message: "Ciao Fulvio, vorrei allenarmi con il metodo spagnolo a Phuket. Puoi indicarmi disponibilità e tariffe?",
};

const ru: FulvioDictionary = {
  ...en,
  brand_descriptor: "Теннисная академия · Испанский метод",
  nav_method: "Метод",
  nav_programs: "Программы",
  nav_coach: "Тренер",
  nav_reviews: "Отзывы",
  nav_faq: "Вопросы",
  nav_contact: "Контакт",
  lang_switch_label: "Язык",

  hero_tag: "Пхукет, Таиланд",
  hero_title_1: "Тренируйся по-",
  hero_title_2: "испански.",
  hero_vamos: "Vamos.",
  hero_subtitle: "Итальянский тренер. Испанский метод тенниса. Двадцать пять лет на корте на трёх континентах. Персональные тренировки в Пхукете для игроков, которые готовы бороться за каждый мяч.",
  hero_cta_primary: "Написать в WhatsApp",
  hero_cta_secondary: "Смотреть метод",
  hero_badge_label: "Сейчас тренирую в",
  hero_badge_value: "Пхукете · Таиланд",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "Зона 3 · Зона 2 · Зона 1",
  hero_marquee_3: "Каждый мяч — борьба",
  hero_marquee_4: "Испанский метод · Высокий уровень",
  hero_marquee_5: "Ещё один",

  manifesto_eyebrow: "Манифест Vamos",
  manifesto_quote_1: "Теннис — это не про удар. Это про то, как",
  manifesto_quote_accent: "прочитать мяч, добежать до него и решить, что будет дальше.",
  manifesto_quote_2: "",
  manifesto_paragraph: "Каждая тренировка дышит боевым духом, который сделал испанский теннис отдельной школой. Дисциплина в разминке. Баланс в восстановлении. Интенсивность в последнем мяче дня. Ничего показного — всё выстраивается: один розыгрыш, одно упражнение, ещё один.",
  manifesto_value_1: "Дисциплина",
  manifesto_value_2: "Баланс",
  manifesto_value_3: "Интенсивность",
  manifesto_value_4: "Стойкость",
  manifesto_value_5: "Скромность",

  trust_1_label: "База",
  trust_1_value: "Пхукет, Таиланд",
  trust_2_label: "Формат",
  trust_2_value: "Персонально, на корте",
  trust_3_label: "Игроки",
  trust_3_value: "Юниоры · Взрослые",
  trust_4_label: "Метод",
  trust_4_value: "Испанская система",

  system_eyebrow: "Метод",
  system_title: "Три зоны. Один полный розыгрыш.",
  system_lead: "Испанский метод строится на простой карте корта: три зоны, три намерения, три способа быть тем, кто решает, чем закончится розыгрыш.",
  system_body: "Каждое упражнение у Фульвио живёт внутри этой карты. Откуда пришёл мяч, где ты его встречаешь, куда отправляешь дальше. Когда карта твоя, техника перестаёт быть десятью тысячами отдельных ударов и становится языком, на котором ты говоришь на бегу.",
  zone_3_num: "3",
  zone_3_label: "Зона 3 · Задняя линия",
  zone_3_title: "Защита и стабильность",
  zone_3_text: "Глубокие тяжёлые мячи из-за линии. Читай удар, восстанавливайся, оставайся в розыгрыше. Здесь матчи отказываются проигрывать.",
  zone_2_num: "2",
  zone_2_label: "Зона 2 · Переход",
  zone_2_title: "Подход и контроль",
  zone_2_text: "Двигайся вперёд с намерением, забирай время у соперника, готовь выигрышный мяч. Середина корта — там, где розыгрыш решается по-настоящему.",
  zone_1_num: "1",
  zone_1_label: "Зона 1 · Атака",
  zone_1_title: "Завершение и сетка",
  zone_1_text: "Бери мяч рано, сокращай дистанцию, закрывай розыгрыш. Атакующий форхенд, бэкхенд, воля — агрессия с холодной головой.",
  system_principle_1: "Работа ног и позиционирование",
  system_principle_2: "Баланс и восстановление",
  system_principle_3: "Атакующие схемы",
  system_principle_4: "Защитные схемы",
  system_principle_5: "Повторение с намерением",
  system_principle_6: "Игра очков и матчевые привычки",

  flow_eyebrow: "Как мы тренируемся",
  flow_title: "Пять шагов, каждая сессия.",
  flow_lead: "Испанский метод — это цикл, а не список. Каждый мяч проходит одни и те же пять этапов, пока они не заработают на скорости инстинкта.",
  flow_1_label: "Читай",
  flow_1_text: "Видь мяч, видь корт, видь намерение соперника.",
  flow_2_label: "Двигайся",
  flow_2_text: "Split-step, кросс-шаг, восстановление. Ноги раньше рук, всегда.",
  flow_3_label: "Строй",
  flow_3_text: "Настраивай розыгрыш ударом, который принадлежит ситуации.",
  flow_4_label: "Атакуй",
  flow_4_text: "Забирай время, когда мяч даёт. Без сомнений, без драмы.",
  flow_5_label: "Сброс",
  flow_5_text: "Восстанавливайся по диагонали. Последний мяч уже старый. Следующий.",

  programs_eyebrow: "Программы",
  programs_title: "Три способа тренироваться с Фульвио.",
  programs_lead: "Один и тот же метод — под ваш уровень, возраст и время на острове. Занятия и пакеты согласуются напрямую в WhatsApp.",
  program_1_num: "01",
  program_1_title: "Персональный коучинг",
  program_1_text: "Занятия один на один. Полное внимание вашей технике, работе ног и схемам, которых не хватает вашей игре. Для взрослых и юниоров, кто хочет построить что-то серьёзное.",
  program_2_num: "02",
  program_2_title: "Юниорский перформанс",
  program_2_text: "Структурированная подготовка для конкурентных юниоров. Зоны, интенсивность, игра очков и маленькие привычки, которые отделяют талант от бойца.",
  program_3_num: "03",
  program_3_title: "Кэмпы и клиники",
  program_3_text: "Короткие интенсивные блоки для гостей Пхукета. Испанские drill'ы с высокой энергией, честный пот и тропическая обстановка.",

  coach_eyebrow: "Тренер",
  coach_tag: "Итальянец в Пхукете",
  coach_bio_1: "Итальянец по рождению, тренер по призванию, в Пхукете по выбору. Фульвио провёл более двадцати лет на корте — от академий в Испании и Италии до программ в Центральной Америке, Карибах и Юго-Восточной Азии — и всегда учил одному: испанскому методу тенниса, адаптированному под того, кто стоит с другой стороны сетки.",
  coach_bio_2: "В Пхукете он тренирует юниоров, взрослых и гостей по одному принципу: интенсивность с планом. Никаких обходных путей, никаких показных упражнений, никакой болтовни, которая не превращается в лучший мяч. Когда занятие заканчивается, он возвращается домой на мотоцикле с Тарзаном — своим псом и неофициальным помощником. Когда начинается снова — снова Vamos.",
  coach_bio_3: "Указанные квалификации представлены как полученное профессиональное обучение, а не как официальная поддержка третьих лиц.",
  coach_fact_1_label: "База",
  coach_fact_1_value: "Пхукет, Таиланд",
  coach_fact_2_label: "На корте с",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "Метод",
  coach_fact_3_value: "Испанская система",
  coach_fact_4_label: "Ассистент",
  coach_fact_4_value: "Пёс Тарзан",

  videos_eyebrow: "Смотрите работу",
  videos_title: "Метод, на корте.",
  videos_lead: "Клипы и отзывы с канала Fulvio Coach. Зоны, drill'ы и игроки с четырёх континентов.",
  video_zones_title: "Испанская система · Зоны 3, 2, 1",
  video_intensity_title: "Тренировка с высокой интенсивностью",
  video_review_en_title: "Отзыв · Ben (Англия)",
  video_review_ru_title: "Отзыв · Глеб (Россия)",
  video_play: "Смотреть",

  gallery_eyebrow: "На корте",
  gallery_title: "Пот, работа ног, Тарзан.",
  gallery_lead: "Ежедневная работа в Пхукете. От drill'ов на задней линии до дороги домой на мотоцикле с псом в багажнике.",
  gallery_alt_training: "Фульвио проводит drill испанского метода на корте в Пхукете",
  gallery_alt_intensity: "Теннисная тренировка высокой интенсивности с юниором",
  gallery_alt_drill: "Атакующий drill в стиле Sanchez-Casal",
  gallery_alt_footwork: "Упражнение на работу ног с ручной подачей",
  gallery_alt_session: "Тренировка высокого уровня в Пхукете",
  gallery_alt_pointplay: "Разыгрывание очка на корте",
  gallery_alt_tarzan: "Тарзан, пёс Фульвио, по пути на тренировку",

  reviews_eyebrow: "Отзывы",
  reviews_title: "Что говорят игроки.",
  reviews_lead: "Слова тех, кто тренировался с Фульвио в Пхукете — на их языке, на его канале YouTube.",
  review_ben_quote: "Он заставил мои ноги наконец заработать. Я вдруг понял, где я должен быть, а не только куда летит мяч.",
  review_ben_origin: "Англия",
  review_thomas_quote: "Фульвио — мастер испанского drill'а. Две недели с ним в Пхукете, и у моей игры снова появился стержень.",
  review_thomas_origin: "Международный гость",
  review_gleb_quote: "Испанский метод — именно так, как я его себе представлял. Серьёзная работа, тренер рядом, много vamos.",
  review_gleb_origin: "Россия",
  review_watch: "Смотреть на YouTube",

  faq_eyebrow: "Ответы",
  faq_title: "Частые вопросы.",
  faq_lead: "Всё, о чём обычно спрашивают до первой тренировки с Фульвио в Пхукете.",
  faq_1_q: "Что такое испанский метод тенниса?",
  faq_1_a: "Испанский метод тенниса — это подход к тренировкам, разработанный в Испании и применяемый в академиях вроде Sanchez-Casal и в кругу тренеров, связанных с линией Рафаэля Надаля. Корт делится на три зоны — защита, переход и атака — и каждое упражнение строится вокруг работы ног, баланса, интенсивности и повторяемых игровых схем. Фульвио применяет этот метод лично, опираясь на собственный опыт, и официально не представляет ни одну академию или федерацию.",
  faq_2_q: "Где тренирует Fulvio Coach?",
  faq_2_a: "Фульвио тренирует в Пхукете, Таиланд. Занятия проходят на партнёрских кортах острова. Точное место и время подтверждаются в WhatsApp после согласования уровня и программы.",
  faq_3_q: "Для кого академия?",
  faq_3_a: "Для конкурентных юниоров, амбициозных взрослых и гостей Пхукета, которые хотят серьёзного тенниса. Метод одинаковый для всех; интенсивность, drill'ы и пакеты адаптируются под ваш уровень и цели.",
  faq_4_q: "Сколько это стоит?",
  faq_4_a: "Зависит от программы (персональный коучинг, юниорский перформанс, кэмпы и клиники), количества занятий и места. Напишите в WhatsApp — получите прямой ответ в том же разговоре, без форм и воронок.",
  faq_5_q: "Нужно ли уже хорошо играть?",
  faq_5_a: "Нет. Метод работает для игроков среднего уровня, растущих игроков и конкурентных юниоров. Начинающие тоже добро пожаловать, когда позволяет расписание — те же принципы просто начинаются с шага один.",
  faq_6_q: "Чем это отличается от обычного урока тенниса?",
  faq_6_a: "Всё живёт внутри структуры: три зоны на корте, пять этапов на розыгрыш и drill'ы, которые возвращаются неделями, чтобы движение стало автоматическим. Вы платите не за партнёра по раскату, а за того, кто десятилетиями преподаёт именно эту систему на трёх континентах.",
  faq_7_q: "Кто такой Тарзан?",
  faq_7_a: "Тарзан — пёс Фульвио и его неофициальный помощник. Ездит в багажнике мотоцикла, наблюдает за тренировками из тени и иногда гоняется за случайными мячами. Если приедете в Пхукет, скорее всего с ним познакомитесь.",

  contact_eyebrow: "Готов?",
  contact_title: "Запишись на первую тренировку.",
  contact_signature: "Vamos.",
  contact_lead: "Одного разговора в WhatsApp достаточно, чтобы узнать расписание, договориться о формате и выйти на корт. Никаких форм. Никаких воронок. Только теннис.",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "Email",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "Написать в WhatsApp",

  footer_tagline: "Теннисная академия испанского метода · Пхукет · Vamos.",
  footer_nav_title: "Обзор",
  footer_contact_title: "Связаться с Фульвио",
  footer_follow_title: "Соцсети",
  footer_lang_title: "Язык",
  footer_copyright: "Все права защищены.",
  footer_note: "Тренер — Фульвио Шан. Сайт независимый и не аффилирован с Рафаэлем Надалем, Rafa Nadal Academy, Sanchez-Casal или упомянутыми федерациями.",

  whatsapp_message: "Привет, Фульвио! Хочу тренироваться по испанскому методу на Пхукете. Подскажите, пожалуйста, расписание и стоимость.",
};

const th: FulvioDictionary = {
  ...en,
  brand_descriptor: "สถาบันเทนนิส · เมธอดสเปน",
  nav_method: "เมธอด",
  nav_programs: "โปรแกรม",
  nav_coach: "โค้ช",
  nav_reviews: "รีวิว",
  nav_faq: "คำถาม",
  nav_contact: "ติดต่อ",
  lang_switch_label: "ภาษา",

  hero_tag: "ภูเก็ต ประเทศไทย",
  hero_title_1: "ฝึกในแบบ",
  hero_title_2: "สเปน",
  hero_vamos: "Vamos.",
  hero_subtitle: "โค้ชอิตาเลียนหนึ่งคน เมธอดเทนนิสสเปน ยี่สิบห้าปีบนคอร์ตในสามทวีป ฝึกส่วนตัวที่ภูเก็ตสำหรับผู้เล่นที่ต้องการสู้ทุกแต้ม",
  hero_cta_primary: "ทักทาย WhatsApp",
  hero_cta_secondary: "ดูเมธอด",
  hero_badge_label: "ตอนนี้สอนที่",
  hero_badge_value: "ภูเก็ต · ประเทศไทย",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "โซน 3 · โซน 2 · โซน 1",
  hero_marquee_3: "สู้ทุกแต้ม",
  hero_marquee_4: "เมธอดสเปน · ระดับสูง",
  hero_marquee_5: "อีกหนึ่ง",

  manifesto_eyebrow: "แถลงการณ์ Vamos",
  manifesto_quote_1: "เทนนิสไม่ใช่แค่ตีลูก แต่คือการ",
  manifesto_quote_accent: "อ่านลูก วิ่งไปหา และตัดสินใจว่าจะเกิดอะไรต่อ",
  manifesto_quote_2: "",
  manifesto_paragraph: "ทุกเซสชันหายใจด้วยจิตวิญญาณนักสู้ที่ทำให้เทนนิสสเปนกลายเป็นสำนักของตัวเอง วินัยในการวอร์ม สมดุลในการฟื้นตัว ความเข้มข้นในลูกสุดท้ายของวัน ไม่มีการตะโกน มีแต่การก่อร่างสร้าง — หนึ่งแต้ม หนึ่งดrilลล์ อีกหนึ่ง",
  manifesto_value_1: "วินัย",
  manifesto_value_2: "สมดุล",
  manifesto_value_3: "ความเข้มข้น",
  manifesto_value_4: "ความอึด",
  manifesto_value_5: "ความถ่อมตน",

  trust_1_label: "ฐาน",
  trust_1_value: "ภูเก็ต ประเทศไทย",
  trust_2_label: "การสอน",
  trust_2_value: "ส่วนตัว บนคอร์ต",
  trust_3_label: "ผู้เล่น",
  trust_3_value: "จูเนียร์ · ผู้ใหญ่",
  trust_4_label: "เมธอด",
  trust_4_value: "ระบบสเปน",

  system_eyebrow: "เมธอด",
  system_title: "สามโซน แต้มเดียวที่สมบูรณ์",
  system_lead: "เมธอดเทนนิสสเปนสร้างขึ้นบนแผนที่คอร์ตแบบเรียบง่าย: สามโซน สามความตั้งใจ สามวิธีที่จะเป็นคนตัดสินว่าแต้มจะจบอย่างไร",
  system_body: "ทุกดรริลล์ในเซสชันของ Fulvio อยู่ภายในแผนที่นี้ ลูกมาจากไหน คุณเจอลูกที่ไหน ส่งลูกไปที่ไหนต่อ เมื่อแผนที่เป็นของคุณ เทคนิคจะไม่ใช่ช็อตหมื่นครั้งกระจัดกระจาย แต่เป็นภาษาที่คุณพูดได้ในระหว่างวิ่ง",
  zone_3_num: "3",
  zone_3_label: "โซน 3 · เส้นหลัง",
  zone_3_title: "การรับ & ความสม่ำเสมอ",
  zone_3_text: "ลูกลึกและหนักจากด้านหลังเส้น อ่านลูก ฟื้นตัว อยู่ในแต้ม ที่นี่คือที่ที่แมตช์ปฏิเสธที่จะแพ้",
  zone_2_num: "2",
  zone_2_label: "โซน 2 · ช่วงต่อ",
  zone_2_title: "เข้าใกล้ & ควบคุม",
  zone_2_text: "เคลื่อนที่ไปข้างหน้าด้วยความตั้งใจ ตัดเวลาให้คู่ต่อสู้ เตรียมลูกที่จะจบ กลางคอร์ตคือที่ที่แต้มถูกตัดสินจริง",
  zone_1_num: "1",
  zone_1_label: "โซน 1 · จู่โจม",
  zone_1_title: "จบ & เน็ต",
  zone_1_text: "ตีลูกเร็ว ลดระยะ จบแต้ม โฟร์แฮนด์รุก แบ็คแฮนด์ วอลเลย์ — เชิงรุกด้วยหัวที่เย็น",
  system_principle_1: "ฟุตเวิร์ก & ตำแหน่ง",
  system_principle_2: "สมดุล & ฟื้นตัว",
  system_principle_3: "แพทเทิร์นรุก",
  system_principle_4: "แพทเทิร์นรับ",
  system_principle_5: "ทำซ้ำอย่างมีเจตนา",
  system_principle_6: "เล่นแต้ม & นิสัยแมตช์",

  flow_eyebrow: "วิธีที่เราฝึก",
  flow_title: "ห้าขั้น ทุกเซสชัน",
  flow_lead: "เมธอดสเปนคือวง ไม่ใช่ลิสต์ ทุกลูกผ่านห้าขั้นเดียวกันจนกว่ามันจะวิ่งด้วยความเร็วสัญชาตญาณ",
  flow_1_label: "อ่าน",
  flow_1_text: "เห็นลูก เห็นคอร์ต เห็นความตั้งใจของคู่ต่อสู้",
  flow_2_label: "ขยับ",
  flow_2_text: "Split-step, cross-step, ฟื้นตัว เท้าก่อนมือ เสมอ",
  flow_3_label: "สร้าง",
  flow_3_text: "ตั้งแต้มด้วยลูกที่เหมาะกับสถานการณ์",
  flow_4_label: "จู่โจม",
  flow_4_text: "ตัดเวลาเมื่อลูกเชิญ ไม่ลังเล ไม่ดราม่า",
  flow_5_label: "รีเซ็ต",
  flow_5_text: "ฟื้นตัวตามแนวทแยง ลูกที่แล้วเก่าไปแล้ว ลูกถัดไป",

  programs_eyebrow: "โปรแกรม",
  programs_title: "สามวิธีฝึกกับ Fulvio",
  programs_lead: "เมธอดเดียวกัน ปรับตามระดับ อายุ และเวลาที่คุณมีบนเกาะ เซสชันและแพ็กเกจตกลงผ่าน WhatsApp",
  program_1_num: "01",
  program_1_title: "โค้ชส่วนตัว",
  program_1_text: "เซสชันตัวต่อตัว ใส่ใจเทคนิค ฟุตเวิร์ก และแพทเทิร์นที่เกมของคุณขาด สำหรับผู้ใหญ่และจูเนียร์ที่ต้องการสร้างอย่างจริงจัง",
  program_2_num: "02",
  program_2_title: "จูเนียร์เพอร์ฟอร์แมนซ์",
  program_2_text: "ฝึกอย่างมีโครงสร้างสำหรับจูเนียร์แข่งขัน โซน ความเข้มข้น เล่นแต้ม และนิสัยเล็กๆ ที่แยกคนมีพรสวรรค์ออกจากนักแข่ง",
  program_3_num: "03",
  program_3_title: "แคมป์ & คลินิก",
  program_3_text: "บล็อกเข้มข้นสั้นสำหรับผู้มาเยือนภูเก็ต ดรริลล์สเปนพลังสูง เหงื่อจริง และบรรยากาศเขตร้อน",

  coach_eyebrow: "โค้ช",
  coach_tag: "คนอิตาเลียนในภูเก็ต",
  coach_bio_1: "อิตาเลียนโดยกำเนิด โค้ชโดยแรงบันดาลใจ ภูเก็ตโดยการเลือก Fulvio ใช้เวลามากกว่ายี่สิบปีบนคอร์ต — จากอะคาเดมีในสเปนและอิตาลี สู่โปรแกรมในอเมริกากลาง แคริบเบียน และเอเชียตะวันออกเฉียงใต้ — สอนสิ่งเดียวกันเสมอ: เมธอดเทนนิสสเปน ปรับให้กับคนที่ยืนอยู่อีกฝั่งของเน็ต",
  coach_bio_2: "ในภูเก็ตเขาสอนจูเนียร์ ผู้ใหญ่ และผู้มาเยือนด้วยหลักเดียว: ความเข้มข้นที่มีแผน ไม่มีทางลัด ไม่มีดรริลล์โชว์ตัว ไม่มีคำพูดที่ไม่แปลเป็นลูกที่ดีขึ้น เมื่อเซสชันจบ เขากลับบ้านด้วยมอเตอร์ไซค์กับ Tarzán หมาของเขาและผู้ช่วยโค้ชอย่างไม่เป็นทางการ เมื่อเริ่มใหม่ก็ Vamos อีกครั้ง",
  coach_bio_3: "คุณสมบัติที่ระบุนำเสนอในฐานะการฝึกอบรมทางวิชาชีพที่ได้รับ ไม่ใช่การรับรองอย่างเป็นทางการจากบุคคลที่สาม",
  coach_fact_1_label: "ฐาน",
  coach_fact_1_value: "ภูเก็ต ประเทศไทย",
  coach_fact_2_label: "สอนตั้งแต่",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "เมธอด",
  coach_fact_3_value: "ระบบสเปน",
  coach_fact_4_label: "ผู้ช่วย",
  coach_fact_4_value: "หมา Tarzán",

  videos_eyebrow: "ดูการทำงาน",
  videos_title: "เมธอดบนคอร์ต",
  videos_lead: "คลิปและรีวิวจากช่อง Fulvio Coach โซน ดรริลล์ และผู้เล่นจากสี่ทวีป",
  video_zones_title: "ระบบสเปน · โซน 3, 2, 1",
  video_intensity_title: "เซสชันความเข้มข้นสูง",
  video_review_en_title: "รีวิว · Ben (อังกฤษ)",
  video_review_ru_title: "รีวิว · Gleb (รัสเซีย)",
  video_play: "เล่น",

  gallery_eyebrow: "บนคอร์ต",
  gallery_title: "เหงื่อ ฟุตเวิร์ก Tarzán",
  gallery_lead: "ชีวิตประจำวันในภูเก็ต จากดรริลล์เส้นหลังถึงทางกลับบ้านด้วยมอเตอร์ไซค์และหมาในกล่อง",
  gallery_alt_training: "Fulvio นำดรริลล์เมธอดสเปนบนคอร์ตในภูเก็ต",
  gallery_alt_intensity: "เซสชันเทนนิสความเข้มข้นสูงกับผู้เล่นจูเนียร์",
  gallery_alt_drill: "ดรริลล์รุกสไตล์ Sanchez-Casal",
  gallery_alt_footwork: "ฝึกฟุตเวิร์กพร้อมป้อนลูกด้วยมือ",
  gallery_alt_session: "เซสชันฝึกสูงในภูเก็ต",
  gallery_alt_pointplay: "สถานการณ์เล่นแต้มบนคอร์ต",
  gallery_alt_tarzan: "Tarzán หมาของ Fulvio ระหว่างทางไปฝึก",

  reviews_eyebrow: "รีวิว",
  reviews_title: "เสียงจากผู้เล่น",
  reviews_lead: "คำพูดจากผู้เล่นที่ฝึกกับ Fulvio ที่ภูเก็ต — ในภาษาของพวกเขาเอง บนช่อง YouTube ของเขา",
  review_ben_quote: "เขาทำให้ฟุตเวิร์กผมเข้าที่ ทันใดนั้นผมเข้าใจว่าต้องอยู่ตรงไหน ไม่ใช่แค่ว่าลูกไปทางไหน",
  review_ben_origin: "อังกฤษ",
  review_thomas_quote: "Fulvio คือมาสเตอร์ของดรริลล์สเปน สองอาทิตย์กับเขาที่ภูเก็ต เกมของผมมีกระดูกสันหลังอีกครั้ง",
  review_thomas_origin: "ผู้มาเยือนต่างชาติ",
  review_gleb_quote: "เมธอดสเปนตามที่หวังจะรู้สึก งานจริงจัง โค้ชอบอุ่น มี vamos เยอะ",
  review_gleb_origin: "รัสเซีย",
  review_watch: "ดูบน YouTube",

  faq_eyebrow: "คำตอบ",
  faq_title: "คำถามที่พบบ่อย",
  faq_lead: "ทุกอย่างที่ผู้เล่นส่วนใหญ่ถามก่อนเซสชันแรกกับ Fulvio ที่ภูเก็ต",
  faq_1_q: "เมธอดเทนนิสสเปนคืออะไร?",
  faq_1_a: "เมธอดเทนนิสสเปนคือแนวทางฝึกที่พัฒนาในสเปนและใช้ในอะคาเดมีอย่าง Sanchez-Casal และโดยบุคคลใกล้ชิดสายโค้ชของ Rafa Nadal จัดคอร์ตเป็นสามโซน — รับ, ช่วงต่อ, และจู่โจม — และสร้างทุกดรริลล์รอบฟุตเวิร์ก สมดุล ความเข้มข้น และแพทเทิร์นซ้ำที่เหมือนการเล่นจริง Fulvio ใช้เมธอดนี้อย่างเป็นส่วนตัว จากประสบการณ์ตัวเอง และไม่ได้เป็นตัวแทนอย่างเป็นทางการของอะคาเดมีหรือสหพันธ์ใด",
  faq_2_q: "Fulvio Coach สอนที่ไหน?",
  faq_2_a: "Fulvio สอนที่ภูเก็ต ประเทศไทย เซสชันจัดในคอร์ตพาร์ทเนอร์ทั่วเกาะ สถานที่และเวลาที่แน่นอนยืนยันผ่าน WhatsApp หลังตกลงระดับและโปรแกรม",
  faq_3_q: "อะคาเดมีเหมาะกับใคร?",
  faq_3_a: "จูเนียร์แข่งขัน ผู้ใหญ่ที่ตั้งใจ และผู้มาเยือนภูเก็ตที่ต้องการเทนนิสจริงจัง เมธอดเหมือนกันสำหรับทุกคน ความเข้มข้น ดรริลล์ และแพ็กเกจปรับตามระดับและเป้าหมายของคุณ",
  faq_4_q: "ราคาเท่าไหร่?",
  faq_4_a: "ขึ้นกับโปรแกรม (โค้ชส่วนตัว, จูเนียร์เพอร์ฟอร์แมนซ์, แคมป์และคลินิก), จำนวนเซสชัน และสถานที่ ถาม WhatsApp แล้วรับคำตอบตรงๆ ในบทสนทนาเดียวกัน — ไม่มีฟอร์ม ไม่มีฟันเนล",
  faq_5_q: "ต้องเล่นเก่งอยู่แล้วไหม?",
  faq_5_a: "ไม่ เมธอดเหมาะกับผู้เล่นระดับกลาง กำลังพัฒนา และจูเนียร์แข่งขัน ผู้เริ่มต้นก็ยินดีต้อนรับเมื่อตารางเอื้อ — หลักการเดียวกันเริ่มจากขั้นที่หนึ่ง",
  faq_6_q: "ต่างจากคลาสเทนนิสทั่วไปยังไง?",
  faq_6_a: "ทุกอย่างอยู่ในโครงสร้าง: สามโซนบนคอร์ต ห้าขั้นต่อแต้ม และดรริลล์ที่กลับมาซ้ำเป็นสัปดาห์เพื่อให้การเคลื่อนไหวเป็นอัตโนมัติ คุณไม่ได้จ่ายค่าคู่ตี คุณจ่ายค่าคนที่สอนระบบนี้มาหลายทศวรรษในสามทวีป",
  faq_7_q: "Tarzán คือใคร?",
  faq_7_a: "Tarzán เป็นหมาของ Fulvio และผู้ช่วยโค้ชอย่างไม่เป็นทางการ นั่งกล่องมอเตอร์ไซค์ ดูเซสชันจากในร่ม และบางครั้งวิ่งไล่ลูกที่หลุด ถ้ามาภูเก็ตน่าจะได้เจอเขา",

  contact_eyebrow: "พร้อมมั้ย?",
  contact_title: "จองเซสชันแรก",
  contact_signature: "Vamos.",
  contact_lead: "บทสนทนาเดียวใน WhatsApp พอที่จะเช็กคิว ตกลงรูปแบบ และพาคุณลงคอร์ต ไม่มีฟอร์ม ไม่มีฟันเนล มีแต่เทนนิส",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "Email",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "ทัก WhatsApp",

  footer_tagline: "สถาบันเทนนิสเมธอดสเปน · ภูเก็ต · Vamos.",
  footer_nav_title: "สำรวจ",
  footer_contact_title: "คุยกับ Fulvio",
  footer_follow_title: "ติดตาม",
  footer_lang_title: "ภาษา",
  footer_copyright: "สงวนลิขสิทธิ์",
  footer_note: "สอนโดย Fulvio Scian เว็บนี้เป็นอิสระ ไม่ได้เกี่ยวข้องกับ Rafa Nadal, Rafa Nadal Academy, Sanchez-Casal หรือสหพันธ์ที่กล่าวถึง",

  whatsapp_message: "สวัสดี Fulvio ผม/ดิฉันอยากฝึกเมธอดสเปนที่ภูเก็ต ขอทราบคิวและราคาได้ไหมครับ/คะ?",
};

const zh: FulvioDictionary = {
  ...en,
  brand_descriptor: "网球学院 · 西班牙方法",
  nav_method: "方法",
  nav_programs: "课程",
  nav_coach: "教练",
  nav_reviews: "评价",
  nav_faq: "常见问题",
  nav_contact: "联系",
  lang_switch_label: "语言",

  hero_tag: "泰国普吉",
  hero_title_1: "以西班牙",
  hero_title_2: "方式训练。",
  hero_vamos: "Vamos.",
  hero_subtitle: "一位意大利教练。西班牙网球方法。二十五年球场经验，横跨三大洲。在普吉一对一，为愿意为每一分而战的球员而设。",
  hero_cta_primary: "WhatsApp 联系",
  hero_cta_secondary: "了解方法",
  hero_badge_label: "当前授课地",
  hero_badge_value: "泰国普吉",
  hero_marquee_1: "Vamos",
  hero_marquee_2: "3 区 · 2 区 · 1 区",
  hero_marquee_3: "每一分都要拼",
  hero_marquee_4: "西班牙方法 · 高水平",
  hero_marquee_5: "再来一个",

  manifesto_eyebrow: "Vamos 宣言",
  manifesto_quote_1: "网球不是击球，而是",
  manifesto_quote_accent: "读懂来球、跑到位、决定下一步。",
  manifesto_quote_2: "",
  manifesto_paragraph: "每一次训练都呼吸着让西班牙网球自成一派的战斗精神。热身要有纪律。回位要有平衡。日终的最后一球要有强度。不喊口号，一切都由此建立——一分、一组、再来一个。",
  manifesto_value_1: "纪律",
  manifesto_value_2: "平衡",
  manifesto_value_3: "强度",
  manifesto_value_4: "韧性",
  manifesto_value_5: "谦逊",

  trust_1_label: "驻地",
  trust_1_value: "泰国普吉",
  trust_2_label: "形式",
  trust_2_value: "私人 · 场上",
  trust_3_label: "对象",
  trust_3_value: "青少年 · 成人",
  trust_4_label: "方法",
  trust_4_value: "西班牙体系",

  system_eyebrow: "方法",
  system_title: "三区。一分完整。",
  system_lead: "西班牙网球方法建立在一张简洁的球场地图上：三个区、三种意图、三种方式决定一分如何结束。",
  system_body: "Fulvio 的每一个训练都活在这张地图里。球从哪里来，你在哪里迎球，下一球送到哪里。当地图属于你，技术就不再是一万个孤立的击球，而是你在奔跑中说的一种语言。",
  zone_3_num: "3",
  zone_3_label: "3 区 · 底线",
  zone_3_title: "防守与稳定",
  zone_3_text: "底线之后的深沉重球。读球、回位、留在分里。这里是拒绝输掉比赛的地方。",
  zone_2_num: "2",
  zone_2_label: "2 区 · 过渡",
  zone_2_title: "上前与控制",
  zone_2_text: "有意向前，压缩对手时间，准备致胜球。中场才是真正决定一分的地方。",
  zone_1_num: "1",
  zone_1_label: "1 区 · 进攻",
  zone_1_title: "完成与网前",
  zone_1_text: "早点击球、缩短距离、结束这一分。攻击正手、反手、截击——冷静的进攻。",
  system_principle_1: "步法与位置",
  system_principle_2: "平衡与回位",
  system_principle_3: "进攻套路",
  system_principle_4: "防守套路",
  system_principle_5: "有意图的重复",
  system_principle_6: "对抗与比赛习惯",

  flow_eyebrow: "训练方式",
  flow_title: "五个步骤，每次训练。",
  flow_lead: "西班牙方法是一个循环，不是清单。每颗球都要走过同样的五个阶段，直到它们以本能的速度运行。",
  flow_1_label: "读",
  flow_1_text: "看清球、看清场、看清对手的意图。",
  flow_2_label: "动",
  flow_2_text: "分腿、交叉步、回位。永远是脚先于手。",
  flow_3_label: "搭",
  flow_3_text: "用符合情境的那一球构建这一分。",
  flow_4_label: "攻",
  flow_4_text: "当球给你机会，就压缩时间。不犹豫，不做戏。",
  flow_5_label: "复位",
  flow_5_text: "沿对角回位。上一球已经是旧的。下一颗。",

  programs_eyebrow: "课程",
  programs_title: "三种和 Fulvio 训练的方式。",
  programs_lead: "同一套方法，根据水平、年龄和你在岛上的时间来适配。课程与套餐直接在 WhatsApp 上敲定。",
  program_1_num: "01",
  program_1_title: "私人教练",
  program_1_text: "一对一课程。全部注意力在你的技术、步法和你游戏所缺的套路上。给愿意认真投入的成人与青少年。",
  program_2_num: "02",
  program_2_title: "青少年竞技",
  program_2_text: "为竞技青少年设计的结构化训练。分区、强度、对抗以及区分天赋与竞争者的小习惯。",
  program_3_num: "03",
  program_3_title: "训练营与短训",
  program_3_text: "为普吉访客设计的高强度短期训练。西班牙式高能训练、真实汗水、热带氛围。",

  coach_eyebrow: "教练",
  coach_tag: "在普吉的意大利人",
  coach_bio_1: "生于意大利，因志业而成为教练，因选择而在普吉。Fulvio 在球场上度过了二十多年——从西班牙、意大利的学院，到中美、加勒比与东南亚的项目——始终教着同一件事：西班牙网球方法，因人而调。",
  coach_bio_2: "在普吉他训练青少年、成人与访客，遵循一个原则：带着计划的强度。没有捷径，没有花活，没有转化不成好球的空谈。训练结束，他骑摩托车回家，带着 Tarzán——他的狗兼非正式助理教练。下一次开始，又是 Vamos。",
  coach_bio_3: "本页所列资格均以所接受的专业培训呈现，不代表第三方的官方背书。",
  coach_fact_1_label: "驻地",
  coach_fact_1_value: "泰国普吉",
  coach_fact_2_label: "执教起始",
  coach_fact_2_value: "1998",
  coach_fact_3_label: "方法",
  coach_fact_3_value: "西班牙体系",
  coach_fact_4_label: "助理",
  coach_fact_4_value: "爱犬 Tarzán",

  videos_eyebrow: "看现场",
  videos_title: "方法，在场上。",
  videos_lead: "来自 Fulvio Coach 频道的片段与评价。分区、训练、来自四大洲的球员。",
  video_zones_title: "西班牙体系 · 3, 2, 1 区",
  video_intensity_title: "高强度训练",
  video_review_en_title: "球员评价 · Ben（英国）",
  video_review_ru_title: "球员评价 · Gleb（俄罗斯）",
  video_play: "播放",

  gallery_eyebrow: "在球场",
  gallery_title: "汗水、步法、Tarzán。",
  gallery_lead: "普吉的日常。从底线训练到骑摩托车带狗回家的那一段路。",
  gallery_alt_training: "Fulvio 在普吉球场带西班牙方法训练",
  gallery_alt_intensity: "与青少年球员的高强度训练",
  gallery_alt_drill: "Sanchez-Casal 风格的进攻训练",
  gallery_alt_footwork: "步法与手喂球训练",
  gallery_alt_session: "普吉的高水平训练",
  gallery_alt_pointplay: "场上对抗情境",
  gallery_alt_tarzan: "Fulvio 的爱犬 Tarzán 前往训练的路上",

  reviews_eyebrow: "评价",
  reviews_title: "球员怎么说。",
  reviews_lead: "在普吉与 Fulvio 训练过的球员的话——用他们的母语，在他的 YouTube 频道上。",
  review_ben_quote: "他让我的步法终于对上了。突然我懂得该站在哪，而不只是知道球去哪。",
  review_ben_origin: "英国",
  review_thomas_quote: "Fulvio 是西班牙训练的大师。在普吉两周，我的球又有了脊柱。",
  review_thomas_origin: "国际访客",
  review_gleb_quote: "西班牙方法，正是我期待的感觉。认真的工作、亲切的教练、很多 vamos。",
  review_gleb_origin: "俄罗斯",
  review_watch: "在 YouTube 观看",

  faq_eyebrow: "解答",
  faq_title: "常见问题。",
  faq_lead: "大多数球员在第一次和 Fulvio 训练前会问的一切。",
  faq_1_q: "什么是西班牙网球方法？",
  faq_1_a: "西班牙网球方法是一种在西班牙发展起来的训练体系，被 Sanchez-Casal 等学院以及 Rafa Nadal 教练体系周边的人物所采用。它把球场分成三个区——防守、过渡与进攻——每一项训练都围绕步法、平衡、强度以及贴近实战的重复套路展开。Fulvio 以其个人经验运用这一方法，并未正式代表任何具体学院或联合会。",
  faq_2_q: "Fulvio Coach 在哪里训练？",
  faq_2_a: "Fulvio 在泰国普吉训练。课程在岛上的合作球场进行。具体地点与时间在双方就水平和课程达成一致后，通过 WhatsApp 确认。",
  faq_3_q: "学院面向谁？",
  faq_3_a: "面向竞技青少年、有目标的成人以及路过普吉、想要认真打球的访客。方法对所有人相同；强度、训练与套餐会根据你的水平与目标调整。",
  faq_4_q: "费用如何？",
  faq_4_a: "取决于所选课程（私人、青少年竞技、训练营与短训）、课时数量以及场地。请在 WhatsApp 询问，在同一对话中即可得到直接答复——没有表单，没有漏斗。",
  faq_5_q: "需要已经打得很好吗？",
  faq_5_a: "不需要。这套方法适用于中级、进步中和竞技青少年球员。日程允许时也欢迎完全的初学者——同样的原则从第一步开始。",
  faq_6_q: "这和普通的网球课有什么不同？",
  faq_6_a: "一切都在一个结构里：场上三区、每一分五个阶段，以及会在数周内反复出现、直到动作自动化的训练。你付的不是陪练费，而是有人在三大洲用几十年时间教这套体系的费用。",
  faq_7_q: "Tarzán 是谁？",
  faq_7_a: "Tarzán 是 Fulvio 的爱犬，也是他的非官方助理教练。它坐在摩托车后箱里，在阴凉处观察训练，偶尔会去追一颗漏球。如果你来普吉，多半会遇到它。",

  contact_eyebrow: "准备好了吗？",
  contact_title: "预约你的第一次训练。",
  contact_signature: "Vamos.",
  contact_lead: "一次 WhatsApp 对话足以确认档期、约定形式，让你上场。没有表单。没有漏斗。只有网球。",
  contact_whatsapp_label: "WhatsApp",
  contact_email_label: "邮箱",
  contact_instagram_label: "Instagram",
  contact_youtube_label: "YouTube",
  contact_cta: "WhatsApp 联系",

  footer_tagline: "西班牙方法网球学院 · 普吉 · Vamos.",
  footer_nav_title: "浏览",
  footer_contact_title: "联系 Fulvio",
  footer_follow_title: "关注",
  footer_lang_title: "语言",
  footer_copyright: "保留所有权利。",
  footer_note: "由 Fulvio Scian 执教。本网站独立运营，不隶属于 Rafa Nadal、Rafa Nadal Academy、Sanchez-Casal 或所提及的任何联合会。",

  whatsapp_message: "你好 Fulvio，我想在普吉学习西班牙方法网球。请问档期和费用如何？",
};

export const TranslationTexts: Record<Locale, FulvioDictionary> = {
  en,
  es,
  it,
  th,
  zh,
  ru,
};

export type TranslationDictionary = FulvioDictionary;
