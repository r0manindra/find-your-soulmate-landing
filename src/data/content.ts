// Shared content data — chapters and books

export interface Chapter {
  id: number;
  slug: string;
  icon: string;
  title: { en: string; de: string };
  subtitle: { en: string; de: string };
  summary: { en: string; de: string };
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: { en: string; de: string };
  emoji: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    slug: 'the-mirror',
    icon: '🪞',
    title: { en: 'The Mirror', de: 'Der Spiegel' },
    subtitle: { en: 'Know yourself first', de: 'Erkenne dich selbst zuerst' },
    summary: {
      en: 'Before you can connect with someone else, you need to understand who you are. This chapter guides you through honest self-reflection — your values, your patterns, and what you truly want.',
      de: 'Bevor du dich mit jemand anderem verbinden kannst, musst du verstehen, wer du bist. Dieses Kapitel führt dich durch ehrliche Selbstreflexion — deine Werte, deine Muster und was du wirklich willst.',
    },
  },
  {
    id: 2,
    slug: 'confidence-bootcamp',
    icon: '💪',
    title: { en: 'Confidence Bootcamp', de: 'Selbstbewusstsein Bootcamp' },
    subtitle: { en: 'Body language & posture', de: 'Körpersprache & Haltung' },
    summary: {
      en: 'Confidence isn\'t something you\'re born with — it\'s something you build. Learn the fundamentals of body language, posture, and how to project quiet confidence in any room.',
      de: 'Selbstbewusstsein ist nichts, womit man geboren wird — es ist etwas, das man aufbaut. Lerne die Grundlagen der Körpersprache, Haltung und wie du in jedem Raum ruhiges Selbstbewusstsein ausstrahlst.',
    },
  },
  {
    id: 3,
    slug: 'eye-contact',
    icon: '👁️',
    title: { en: 'The Art of Eye Contact', de: 'Die Kunst des Blickkontakts' },
    subtitle: { en: 'Making connection', de: 'Verbindung herstellen' },
    summary: {
      en: 'Eye contact is the most powerful tool in your social arsenal. Learn the difference between creepy staring and confident, warm eye contact that draws people in.',
      de: 'Blickkontakt ist das mächtigste Werkzeug in deinem sozialen Arsenal. Lerne den Unterschied zwischen aufdringlichem Starren und selbstbewusstem, warmem Blickkontakt, der Menschen anzieht.',
    },
  },
  {
    id: 4,
    slug: 'starting-conversations',
    icon: '💬',
    title: { en: 'Starting Conversations', de: 'Gespräche beginnen' },
    subtitle: { en: 'The first word', de: 'Das erste Wort' },
    summary: {
      en: 'The hardest part of any interaction is the beginning. Learn proven conversation openers that feel natural and create genuine interest — no pickup lines needed.',
      de: 'Der schwierigste Teil jeder Interaktion ist der Anfang. Lerne bewährte Gesprächseröffner, die sich natürlich anfühlen und echtes Interesse wecken — keine Anmachsprüche nötig.',
    },
  },
  {
    id: 5,
    slug: 'the-approach',
    icon: '🚶',
    title: { en: 'The Approach', de: 'Die Annäherung' },
    subtitle: { en: 'Walking up with confidence', de: 'Mit Selbstbewusstsein zugehen' },
    summary: {
      en: 'There\'s an art to approaching someone you\'re interested in. This chapter breaks down timing, context, and how to make it feel effortless rather than forced.',
      de: 'Es gibt eine Kunst, auf jemanden zuzugehen, der dich interessiert. Dieses Kapitel erklärt Timing, Kontext und wie du es mühelos statt erzwungen wirken lässt.',
    },
  },
  {
    id: 6,
    slug: 'reading-the-room',
    icon: '🎯',
    title: { en: 'Reading the Room', de: 'Die Situation lesen' },
    subtitle: { en: 'Social awareness', de: 'Soziales Bewusstsein' },
    summary: {
      en: 'Social intelligence means knowing when to engage and when to step back. Learn to read social dynamics, energy levels, and the unspoken signals that guide every interaction.',
      de: 'Soziale Intelligenz bedeutet zu wissen, wann man sich einbringt und wann man sich zurückhält. Lerne soziale Dynamiken, Energieniveaus und die unausgesprochenen Signale zu lesen.',
    },
  },
  {
    id: 7,
    slug: 'active-listening',
    icon: '👂',
    title: { en: 'Active Listening', de: 'Aktives Zuhören' },
    subtitle: { en: 'The most attractive skill', de: 'Die attraktivste Fähigkeit' },
    summary: {
      en: 'People are drawn to those who truly listen. Master the art of active listening — asking better questions, reflecting back, and making others feel genuinely heard.',
      de: 'Menschen fühlen sich zu denen hingezogen, die wirklich zuhören. Meistere die Kunst des aktiven Zuhörens — bessere Fragen stellen, reflektieren und anderen das Gefühl geben, wirklich gehört zu werden.',
    },
  },
  {
    id: 8,
    slug: 'humor-and-wit',
    icon: '😄',
    title: { en: 'Humor & Wit', de: 'Humor & Schlagfertigkeit' },
    subtitle: { en: 'Making them laugh', de: 'Sie zum Lachen bringen' },
    summary: {
      en: 'Humor is the ultimate social lubricant. Learn how to be genuinely funny, use timing, and develop your own style of wit without trying too hard.',
      de: 'Humor ist das ultimative soziale Schmiermittel. Lerne, wie du wirklich lustig bist, Timing nutzt und deinen eigenen Stil der Schlagfertigkeit entwickelst, ohne es zu übertreiben.',
    },
  },
  {
    id: 9,
    slug: 'the-compliment',
    icon: '✨',
    title: { en: 'The Compliment', de: 'Das Kompliment' },
    subtitle: { en: 'Genuine, not creepy', de: 'Ehrlich, nicht aufdringlich' },
    summary: {
      en: 'A well-placed compliment can make someone\'s day. Learn the difference between genuine appreciation and flattery, and how to compliment with sincerity and style.',
      de: 'Ein gut platziertes Kompliment kann jemandem den Tag verschönern. Lerne den Unterschied zwischen ehrlicher Wertschätzung und Schmeichelei, und wie du mit Aufrichtigkeit und Stil Komplimente machst.',
    },
  },
  {
    id: 10,
    slug: 'digital-game',
    icon: '📱',
    title: { en: 'Digital Game', de: 'Digitales Spiel' },
    subtitle: { en: 'Texting & dating apps', de: 'Texten & Dating Apps' },
    summary: {
      en: 'The digital world has its own rules. Master the art of crafting profiles that stand out, writing messages that get replies, and transitioning from screen to real life.',
      de: 'Die digitale Welt hat ihre eigenen Regeln. Meistere die Kunst, Profile zu erstellen, die auffallen, Nachrichten zu schreiben, die Antworten bekommen, und den Übergang vom Bildschirm ins echte Leben.',
    },
  },
  {
    id: 11,
    slug: 'first-date',
    icon: '🌹',
    title: { en: 'The First Date', de: 'Das erste Date' },
    subtitle: { en: 'Planning & execution', de: 'Planung & Durchführung' },
    summary: {
      en: 'The first date sets the tone for everything that follows. Learn how to choose the right venue, create the right atmosphere, and be the kind of date people rave about.',
      de: 'Das erste Date setzt den Ton für alles, was folgt. Lerne, den richtigen Ort zu wählen, die richtige Atmosphäre zu schaffen und die Art von Date zu sein, von der die Leute schwärmen.',
    },
  },
  {
    id: 12,
    slug: 'conversation-flow',
    icon: '🌊',
    title: { en: 'Conversation Flow', de: 'Gesprächsfluss' },
    subtitle: { en: 'Never run out of things to say', de: 'Nie wieder sprachlos' },
    summary: {
      en: 'Great conversations feel like a dance. Learn techniques to keep conversations flowing naturally, transition between topics, and create the kind of talks that last for hours.',
      de: 'Großartige Gespräche fühlen sich wie ein Tanz an. Lerne Techniken, um Gespräche natürlich fließen zu lassen, zwischen Themen zu wechseln und die Art von Gesprächen zu führen, die stundenlang dauern.',
    },
  },
  {
    id: 13,
    slug: 'touch-and-proximity',
    icon: '🤝',
    title: { en: 'Touch & Proximity', de: 'Berührung & Nähe' },
    subtitle: { en: 'Physical escalation', de: 'Körperliche Annäherung' },
    summary: {
      en: 'Physical touch is a natural part of human connection. Learn the ladder of escalation — from casual touch to romantic — always respecting boundaries and reading consent.',
      de: 'Körperliche Berührung ist ein natürlicher Teil menschlicher Verbindung. Lerne die Stufen der Annäherung — von beiläufig bis romantisch — immer Grenzen respektierend und Einverständnis lesend.',
    },
  },
  {
    id: 14,
    slug: 'handling-rejection',
    icon: '🛡️',
    title: { en: 'Handling Rejection', de: 'Mit Ablehnung umgehen' },
    subtitle: { en: 'Grace under fire', de: 'Anmut unter Druck' },
    summary: {
      en: 'Rejection is not failure — it\'s redirection. Learn to handle rejection with grace, maintain your dignity, and use every "no" as fuel for growth.',
      de: 'Ablehnung ist kein Scheitern — es ist Umleitung. Lerne, mit Ablehnung würdevoll umzugehen, deine Würde zu bewahren und jedes „Nein" als Treibstoff für Wachstum zu nutzen.',
    },
  },
  {
    id: 15,
    slug: 'the-follow-up',
    icon: '📩',
    title: { en: 'The Follow-Up', de: 'Das Follow-Up' },
    subtitle: { en: 'After the first date', de: 'Nach dem ersten Date' },
    summary: {
      en: 'What you do after the first date matters as much as the date itself. Learn the right timing, tone, and approach for follow-up messages that build anticipation.',
      de: 'Was du nach dem ersten Date tust, ist genauso wichtig wie das Date selbst. Lerne das richtige Timing, den richtigen Ton und die richtige Herangehensweise für Follow-Up-Nachrichten.',
    },
  },
  {
    id: 16,
    slug: 'building-connection',
    icon: '🔗',
    title: { en: 'Building Connection', de: 'Verbindung aufbauen' },
    subtitle: { en: 'Going deeper', de: 'Tiefer gehen' },
    summary: {
      en: 'Surface-level attraction fades. Learn how to build genuine emotional connection through vulnerability, shared experiences, and the art of progressive intimacy.',
      de: 'Oberflächliche Anziehung verblasst. Lerne, wie du durch Verletzlichkeit, gemeinsame Erfahrungen und die Kunst der progressiven Intimität eine echte emotionale Verbindung aufbaust.',
    },
  },
  {
    id: 17,
    slug: 'reading-signals',
    icon: '📡',
    title: { en: 'Reading Signals', de: 'Signale lesen' },
    subtitle: { en: 'Is she/he interested?', de: 'Ist sie/er interessiert?' },
    summary: {
      en: 'Learn to decode the subtle signals of interest and disinterest. From body language cues to texting patterns, understand what people are really telling you.',
      de: 'Lerne, die subtilen Signale von Interesse und Desinteresse zu entschlüsseln. Von Körpersprache bis Texting-Mustern — verstehe, was Menschen dir wirklich sagen.',
    },
  },
  {
    id: 18,
    slug: 'relationship-talk',
    icon: '💑',
    title: { en: 'The Relationship Talk', de: 'Das Beziehungsgespräch' },
    subtitle: { en: 'When to commit', de: 'Wann man sich festlegt' },
    summary: {
      en: 'Knowing when and how to have "the talk" is crucial. Learn to navigate the transition from dating to relationship with clarity, confidence, and emotional intelligence.',
      de: 'Zu wissen, wann und wie man „das Gespräch" führt, ist entscheidend. Lerne den Übergang vom Daten zur Beziehung mit Klarheit, Selbstbewusstsein und emotionaler Intelligenz zu meistern.',
    },
  },
  {
    id: 19,
    slug: 'keeping-the-spark',
    icon: '🔥',
    title: { en: 'Keeping the Spark', de: 'Die Flamme am Leben halten' },
    subtitle: { en: 'Long-term flirting', de: 'Langzeit-Flirten' },
    summary: {
      en: 'The real challenge isn\'t finding love — it\'s keeping it exciting. Learn how to maintain attraction, surprise your partner, and keep flirting alive in a long-term relationship.',
      de: 'Die wahre Herausforderung ist nicht, Liebe zu finden — sondern sie aufregend zu halten. Lerne, wie du Anziehung aufrechterhältst, deinen Partner überraschst und das Flirten in einer Langzeitbeziehung am Leben hältst.',
    },
  },
  {
    id: 20,
    slug: 'the-graduation',
    icon: '🎓',
    title: { en: 'The Graduation', de: 'Der Abschluss' },
    subtitle: { en: 'You found your soulmate', de: 'Du hast deinen Seelenverwandten gefunden' },
    summary: {
      en: 'Congratulations — you\'ve completed the journey. This final chapter celebrates your growth, helps you reflect on how far you\'ve come, and prepares you for the beautiful relationship ahead.',
      de: 'Herzlichen Glückwunsch — du hast die Reise abgeschlossen. Dieses letzte Kapitel feiert dein Wachstum, hilft dir zu reflektieren, wie weit du gekommen bist, und bereitet dich auf die wunderschöne Beziehung vor.',
    },
  },
];

export const books: Book[] = [
  {
    id: 1,
    title: 'Models',
    author: 'Mark Manson',
    emoji: '🎯',
    description: {
      en: 'An honest approach to attracting women through genuine confidence and vulnerability rather than manipulation.',
      de: 'Ein ehrlicher Ansatz, Frauen durch echtes Selbstbewusstsein und Verletzlichkeit anzuziehen, statt durch Manipulation.',
    },
  },
  {
    id: 2,
    title: 'The Art of Seduction',
    author: 'Robert Greene',
    emoji: '🎭',
    description: {
      en: 'A deep dive into the psychology of attraction and influence throughout history.',
      de: 'Ein tiefer Einblick in die Psychologie der Anziehung und des Einflusses im Laufe der Geschichte.',
    },
  },
  {
    id: 3,
    title: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    emoji: '🤝',
    description: {
      en: 'The timeless classic on social skills, building rapport, and making genuine connections.',
      de: 'Der zeitlose Klassiker über soziale Fähigkeiten, Beziehungsaufbau und das Knüpfen echter Verbindungen.',
    },
  },
  {
    id: 4,
    title: 'Attached',
    author: 'Amir Levine',
    emoji: '🔗',
    description: {
      en: 'Understanding attachment styles and how they shape your relationships and dating patterns.',
      de: 'Verstehen von Bindungsstilen und wie sie deine Beziehungen und Dating-Muster formen.',
    },
  },
  {
    id: 5,
    title: 'The Way of the Superior Man',
    author: 'David Deida',
    emoji: '⚡',
    description: {
      en: 'A guide to living with masculine presence, purpose, and authentic polarity in relationships.',
      de: 'Ein Leitfaden für ein Leben mit maskuliner Präsenz, Zielstrebigkeit und authentischer Polarität in Beziehungen.',
    },
  },
  {
    id: 6,
    title: 'Come as You Are',
    author: 'Emily Nagoski',
    emoji: '💫',
    description: {
      en: 'A science-based exploration of desire, arousal, and intimacy that transforms how you understand connection.',
      de: 'Eine wissenschaftlich fundierte Erkundung von Verlangen, Erregung und Intimität, die dein Verständnis von Verbindung verändert.',
    },
  },
  {
    id: 7,
    title: 'No More Mr Nice Guy',
    author: 'Robert Glover',
    emoji: '🦁',
    description: {
      en: 'Breaking free from people-pleasing patterns and learning to prioritize your own needs in relationships.',
      de: 'Sich von People-Pleasing-Mustern befreien und lernen, die eigenen Bedürfnisse in Beziehungen zu priorisieren.',
    },
  },
  {
    id: 8,
    title: 'The 5 Love Languages',
    author: 'Gary Chapman',
    emoji: '💝',
    description: {
      en: 'Discover how people give and receive love differently, and learn to speak your partner\'s language.',
      de: 'Entdecke, wie Menschen Liebe unterschiedlich geben und empfangen, und lerne, die Sprache deines Partners zu sprechen.',
    },
  },
  {
    id: 9,
    title: 'Mating in Captivity',
    author: 'Esther Perel',
    emoji: '🔥',
    description: {
      en: 'Reconciling the need for security with the desire for passion in long-term relationships.',
      de: 'Das Bedürfnis nach Sicherheit mit dem Verlangen nach Leidenschaft in Langzeitbeziehungen vereinen.',
    },
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: 'Mark Manson',
    emoji: '🤷',
    description: {
      en: 'Learn to focus on what truly matters, stop caring about the wrong things, and embrace honest self-improvement.',
      de: 'Lerne, dich auf das zu konzentrieren, was wirklich zählt, hör auf, dich um die falschen Dinge zu kümmern, und umarme ehrliche Selbstverbesserung.',
    },
  },
];
