// Shared content data: phases, chapters, books, mindset, and basics

export interface Phase {
  id: number;
  name: { en: string; de: string };
  description: { en: string; de: string };
  icon: string;
  chapterRange: [number, number];
}

export interface Chapter {
  id: number;
  phase: number;
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

export interface MindsetItem {
  id: number;
  excuse?: { en: string; de: string };
  reframe: { en: string; de: string };
}

export interface BasicsItem {
  id: number;
  emoji: string;
  label: { en: string; de: string };
  oneLiner: { en: string; de: string };
}

export const mindsetItems: MindsetItem[] = [
  {
    id: 1,
    excuse: { en: "I'll talk to her next time.", de: 'Ich sprech sie beim n\u00e4chsten Mal an.' },
    reframe: { en: 'There is no next time.', de: 'Es gibt kein n\u00e4chstes Mal.' },
  },
  {
    id: 2,
    excuse: { en: 'What if she says no?', de: 'Was wenn sie Nein sagt?' },
    reframe: { en: 'What if she says yes?', de: 'Was wenn sie Ja sagt?' },
  },
  {
    id: 3,
    excuse: { en: "I'm not ready yet.", de: 'Ich bin noch nicht bereit.' },
    reframe: { en: "You'll never be ready. Go anyway.", de: 'Du wirst nie bereit sein. Geh trotzdem.' },
  },
  {
    id: 4,
    excuse: { en: "She's out of my league.", de: 'Sie ist nicht in meiner Liga.' },
    reframe: { en: "Leagues don't exist. Energy does.", de: 'Ligen gibt es nicht. Energie schon.' },
  },
  {
    id: 5,
    excuse: { en: "I don't want to be weird.", de: 'Ich will nicht komisch wirken.' },
    reframe: { en: 'A genuine hello is never weird.', de: 'Ein ehrliches Hallo ist nie komisch.' },
  },
  {
    id: 6,
    reframe: { en: 'A no is better than not knowing.', de: 'Ein Nein ist besser als Ungewissheit.' },
  },
];

export const basicsItems: BasicsItem[] = [
  {
    id: 1,
    emoji: '\ud83d\udebf',
    label: { en: 'Hygiene', de: 'Hygiene' },
    oneLiner: { en: 'Shower. Cologne. Clean nails. Done.', de: 'Duschen. Parfum. Saubere N\u00e4gel. Fertig.' },
  },
  {
    id: 2,
    emoji: '\ud83d\udde3\ufe0f',
    label: { en: 'Voice', de: 'Stimme' },
    oneLiner: { en: 'Slower. Deeper. From the chest.', de: 'Langsamer. Tiefer. Aus der Brust.' },
  },
  {
    id: 3,
    emoji: '\ud83e\uddcd',
    label: { en: 'Posture', de: 'Haltung' },
    oneLiner: { en: 'Shoulders back. Head up. Take up space.', de: 'Schultern zur\u00fcck. Kopf hoch. Nimm Raum ein.' },
  },
  {
    id: 4,
    emoji: '\ud83d\udc54',
    label: { en: 'Style', de: 'Stil' },
    oneLiner: { en: "Clothes that fit. That's literally it.", de: 'Klamotten die passen. Das war\u2019s.' },
  },
  {
    id: 5,
    emoji: '\ud83e\udd1d',
    label: { en: 'Manners', de: 'Umgangsformen' },
    oneLiner: { en: 'Eye contact. Listen. Put your phone away.', de: 'Blickkontakt. Zuh\u00f6ren. Handy weg.' },
  },
  {
    id: 6,
    emoji: '\ud83d\udcaa',
    label: { en: 'Discipline', de: 'Disziplin' },
    oneLiner: { en: 'Gym. Sleep. Eat right. Everything else follows.', de: 'Training. Schlaf. Ern\u00e4hrung. Alles andere folgt.' },
  },
  {
    id: 7,
    emoji: '\ud83d\udcda',
    label: { en: 'Read', de: 'Lesen' },
    oneLiner: { en: 'Books, not tweets. Have something to say.', de: 'B\u00fccher, keine Tweets. Hab was zu sagen.' },
  },
  {
    id: 8,
    emoji: '\ud83d\udd25',
    label: { en: 'Confidence', de: 'Selbstbewusstsein' },
    oneLiner: { en: 'Not a feeling. A habit.', de: 'Kein Gef\u00fchl. Eine Gewohnheit.' },
  },
];

export const phases: Phase[] = [
  {
    id: 1,
    name: { en: 'Foundation', de: 'Grundlagen' },
    description: {
      en: 'Body language, confidence & self-awareness',
      de: 'Körpersprache, Selbstbewusstsein & Selbstwahrnehmung',
    },
    icon: '🏗️',
    chapterRange: [1, 4],
  },
  {
    id: 2,
    name: { en: 'Conversation', de: 'Konversation' },
    description: {
      en: 'Openers, small talk & humor',
      de: 'Gesprächseröffner, Smalltalk & Humor',
    },
    icon: '💬',
    chapterRange: [5, 8],
  },
  {
    id: 3,
    name: { en: 'Connection', de: 'Verbindung' },
    description: {
      en: 'Reading signals, emotional intelligence & storytelling',
      de: 'Signale lesen, emotionale Intelligenz & Storytelling',
    },
    icon: '🔗',
    chapterRange: [9, 12],
  },
  {
    id: 4,
    name: { en: 'Flirting', de: 'Flirten' },
    description: {
      en: 'Tension, compliments & playful teasing',
      de: 'Spannung, Komplimente & spielerisches Necken',
    },
    icon: '😏',
    chapterRange: [13, 16],
  },
  {
    id: 5,
    name: { en: 'Mastery', de: 'Meisterschaft' },
    description: {
      en: 'Dates, rejection & long-term skills',
      de: 'Dates, Ablehnung & Langzeit-Fähigkeiten',
    },
    icon: '🎓',
    chapterRange: [17, 20],
  },
];

export const chapters: Chapter[] = [
  // Phase 1: Foundation
  {
    id: 1,
    phase: 1,
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
    phase: 1,
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
    phase: 1,
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
    phase: 1,
    slug: 'presence-and-energy',
    icon: '✨',
    title: { en: 'Presence & Energy', de: 'Präsenz & Energie' },
    subtitle: { en: 'How you make people feel', de: 'Wie du Menschen fühlen lässt' },
    summary: {
      en: 'Your energy walks into the room before you do. Learn to cultivate the kind of presence that makes people want to be around you — without trying too hard.',
      de: 'Deine Energie betritt den Raum vor dir. Lerne die Art von Präsenz zu kultivieren, die Menschen dazu bringt, in deiner Nähe sein zu wollen — ohne es zu erzwingen.',
    },
  },
  // Phase 2: Conversation
  {
    id: 5,
    phase: 2,
    slug: 'starting-conversations',
    icon: '🗣️',
    title: { en: 'Starting Conversations', de: 'Gespräche beginnen' },
    subtitle: { en: 'The first word', de: 'Das erste Wort' },
    summary: {
      en: 'The hardest part of any interaction is the beginning. Learn proven conversation openers that feel natural and create genuine interest — no pickup lines needed.',
      de: 'Der schwierigste Teil jeder Interaktion ist der Anfang. Lerne bewährte Gesprächseröffner, die sich natürlich anfühlen und echtes Interesse wecken — keine Anmachsprüche nötig.',
    },
  },
  {
    id: 6,
    phase: 2,
    slug: 'small-talk-mastery',
    icon: '☕',
    title: { en: 'Small Talk Mastery', de: 'Smalltalk meistern' },
    subtitle: { en: 'Make it interesting', de: 'Mach es interessant' },
    summary: {
      en: 'Small talk doesn\'t have to be painful. Learn to turn boring pleasantries into engaging conversations that make people remember you.',
      de: 'Smalltalk muss nicht schmerzhaft sein. Lerne, langweilige Höflichkeiten in fesselnde Gespräche zu verwandeln, die Menschen dazu bringen, sich an dich zu erinnern.',
    },
  },
  {
    id: 7,
    phase: 2,
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
    id: 8,
    phase: 2,
    slug: 'active-listening',
    icon: '👂',
    title: { en: 'Active Listening', de: 'Aktives Zuhören' },
    subtitle: { en: 'The most attractive skill', de: 'Die attraktivste Fähigkeit' },
    summary: {
      en: 'People are drawn to those who truly listen. Master the art of active listening — asking better questions, reflecting back, and making others feel genuinely heard.',
      de: 'Menschen fühlen sich zu denen hingezogen, die wirklich zuhören. Meistere die Kunst des aktiven Zuhörens — bessere Fragen stellen, reflektieren und anderen das Gefühl geben, wirklich gehört zu werden.',
    },
  },
  // Phase 3: Connection
  {
    id: 9,
    phase: 3,
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
    id: 10,
    phase: 3,
    slug: 'emotional-intelligence',
    icon: '🧠',
    title: { en: 'Emotional Intelligence', de: 'Emotionale Intelligenz' },
    subtitle: { en: 'Feel the room', de: 'Den Raum spüren' },
    summary: {
      en: 'Social intelligence means knowing when to engage and when to step back. Learn to read social dynamics, energy levels, and the unspoken signals that guide every interaction.',
      de: 'Soziale Intelligenz bedeutet zu wissen, wann man sich einbringt und wann man sich zurückhält. Lerne soziale Dynamiken, Energieniveaus und die unausgesprochenen Signale zu lesen.',
    },
  },
  {
    id: 11,
    phase: 3,
    slug: 'storytelling',
    icon: '📖',
    title: { en: 'The Art of Storytelling', de: 'Die Kunst des Erzählens' },
    subtitle: { en: 'Be memorable', de: 'Sei unvergesslich' },
    summary: {
      en: 'Great conversationalists are great storytellers. Learn to share experiences in a way that\'s captivating, vulnerable, and makes people feel connected to you.',
      de: 'Großartige Gesprächspartner sind großartige Geschichtenerzähler. Lerne, Erfahrungen auf eine Weise zu teilen, die fesselnd, verletzlich und verbindend ist.',
    },
  },
  {
    id: 12,
    phase: 3,
    slug: 'building-rapport',
    icon: '🤝',
    title: { en: 'Building Rapport', de: 'Vertrauen aufbauen' },
    subtitle: { en: 'Going deeper', de: 'Tiefer gehen' },
    summary: {
      en: 'Surface-level attraction fades. Learn how to build genuine emotional connection through vulnerability, shared experiences, and the art of progressive intimacy.',
      de: 'Oberflächliche Anziehung verblasst. Lerne, wie du durch Verletzlichkeit, gemeinsame Erfahrungen und die Kunst der progressiven Intimität eine echte emotionale Verbindung aufbaust.',
    },
  },
  // Phase 4: Flirting
  {
    id: 13,
    phase: 4,
    slug: 'creating-tension',
    icon: '⚡',
    title: { en: 'Creating Tension', de: 'Spannung erzeugen' },
    subtitle: { en: 'The push and pull', de: 'Das Hin und Her' },
    summary: {
      en: 'Attraction lives in the space between people. Learn to create magnetic tension through timing, pauses, and the art of leaving them wanting more.',
      de: 'Anziehung lebt im Raum zwischen Menschen. Lerne, magnetische Spannung durch Timing, Pausen und die Kunst zu erzeugen, sie nach mehr verlangen zu lassen.',
    },
  },
  {
    id: 14,
    phase: 4,
    slug: 'the-compliment',
    icon: '💎',
    title: { en: 'The Compliment', de: 'Das Kompliment' },
    subtitle: { en: 'Genuine, not generic', de: 'Ehrlich, nicht generisch' },
    summary: {
      en: 'A well-placed compliment can make someone\'s day. Learn the difference between genuine appreciation and flattery, and how to compliment with sincerity and style.',
      de: 'Ein gut platziertes Kompliment kann jemandem den Tag verschönern. Lerne den Unterschied zwischen ehrlicher Wertschätzung und Schmeichelei, und wie du mit Aufrichtigkeit und Stil Komplimente machst.',
    },
  },
  {
    id: 15,
    phase: 4,
    slug: 'playful-teasing',
    icon: '😏',
    title: { en: 'Playful Teasing', de: 'Spielerisches Necken' },
    subtitle: { en: 'Flirting with finesse', de: 'Flirten mit Finesse' },
    summary: {
      en: 'There\'s an art to teasing that creates chemistry without crossing lines. Learn playful banter, callback humor, and how to keep things fun and flirty.',
      de: 'Es gibt eine Kunst des Neckens, die Chemie erzeugt, ohne Grenzen zu überschreiten. Lerne spielerisches Geplänkel, Callback-Humor und wie du die Dinge lustig und flirty hältst.',
    },
  },
  {
    id: 16,
    phase: 4,
    slug: 'digital-game',
    icon: '📱',
    title: { en: 'Digital Game', de: 'Digitales Spiel' },
    subtitle: { en: 'Texting & dating apps', de: 'Texten & Dating Apps' },
    summary: {
      en: 'The digital world has its own rules. Master the art of crafting profiles that stand out, writing messages that get replies, and transitioning from screen to real life.',
      de: 'Die digitale Welt hat ihre eigenen Regeln. Meistere die Kunst, Profile zu erstellen, die auffallen, Nachrichten zu schreiben, die Antworten bekommen, und den Übergang vom Bildschirm ins echte Leben.',
    },
  },
  // Phase 5: Mastery
  {
    id: 17,
    phase: 5,
    slug: 'the-first-date',
    icon: '🌹',
    title: { en: 'The First Date', de: 'Das erste Date' },
    subtitle: { en: 'Planning & execution', de: 'Planung & Durchführung' },
    summary: {
      en: 'The first date sets the tone for everything that follows. Learn how to choose the right venue, create the right atmosphere, and be the kind of date people rave about.',
      de: 'Das erste Date setzt den Ton für alles, was folgt. Lerne, den richtigen Ort zu wählen, die richtige Atmosphäre zu schaffen und die Art von Date zu sein, von der die Leute schwärmen.',
    },
  },
  {
    id: 18,
    phase: 5,
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
    id: 19,
    phase: 5,
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
    phase: 5,
    slug: 'the-graduation',
    icon: '🎓',
    title: { en: 'The Graduation', de: 'Der Abschluss' },
    subtitle: { en: 'You made it', de: 'Du hast es geschafft' },
    summary: {
      en: 'Congratulations — you\'ve completed the journey. This final chapter celebrates your growth, helps you reflect on how far you\'ve come, and prepares you for the beautiful connections ahead.',
      de: 'Herzlichen Glückwunsch — du hast die Reise abgeschlossen. Dieses letzte Kapitel feiert dein Wachstum, hilft dir zu reflektieren, wie weit du gekommen bist, und bereitet dich auf die wunderschönen Verbindungen vor.',
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
  {
    id: 11,
    title: 'The Like Switch',
    author: 'Jack Schafer',
    emoji: '🧲',
    description: {
      en: 'An ex-FBI agent reveals the science of making people like you — from first impressions to lasting rapport.',
      de: 'Ein Ex-FBI-Agent enthüllt die Wissenschaft, wie man Menschen für sich gewinnt — vom ersten Eindruck bis zur dauerhaften Beziehung.',
    },
  },
  {
    id: 12,
    title: 'Captivate',
    author: 'Vanessa Van Edwards',
    emoji: '🌟',
    description: {
      en: 'The science of succeeding with people — backed by behavioral research on what makes conversations click.',
      de: 'Die Wissenschaft des Erfolgs mit Menschen — gestützt auf Verhaltensforschung darüber, was Gespräche zum Klicken bringt.',
    },
  },
];
