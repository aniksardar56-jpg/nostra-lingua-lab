/* Translate interface copy; uploaded titles and lessons retain their original language. */
(() => {
  const rows = [
    ['ইতালীয় ভাষা শিখুন আপনার ভাষায়', 'Learn Italian in your language', 'Impara l’italiano nella tua lingua'],
    ['— সহজ, পরিষ্কার এবং নিজের গতিতে', '— Simple, clear and at your own pace', '— In modo semplice, chiaro e al tuo ritmo'],
    ['কোর্স', 'Courses', 'Corsi'], ['ফিচার', 'Features', 'Caratteristiche'], ['ম্যাটেরিয়াল', 'Materials', 'Materiali'], ['ভিডিও', 'Videos', 'Video'],
    ['বাংলা সহায়তায় ইতালীয় ভাষা শিখুন', 'Learn Italian with Bangla support', 'Impara l’italiano con supporto in bengalese'],
    ['ইতালীয় ভাষা এখন', 'Italian, now', 'L’italiano, ora'], ['আপনার ভাষায়।', 'in your language.', 'nella tua lingua.'],
    ['দৈনন্দিন কথা বলা, কাজের জন্য দরকারি ইতালীয় এবং গ্রামার—একটি সহজ ও গোছানো শেখার পথে এগিয়ে যান।', 'Build your everyday conversation, workplace Italian and grammar with a simple, structured learning path.', 'Impara a conversare ogni giorno, a usare l’italiano al lavoro e a capire la grammatica con un percorso semplice e organizzato.'],
    ['শেখা শুরু করুন →', 'Start learning →', 'Inizia a imparare →'], ['WhatsApp সাপোর্ট', 'WhatsApp support', 'Supporto WhatsApp'],
    ['মোবাইলে পড়ুন · PDF নোটস পান · নিজের গতিতে শিখুন', 'Study on mobile · Get PDF notes · Learn at your own pace', 'Studia sul cellulare · Scarica appunti PDF · Impara al tuo ritmo'],
    ['আজ কী শিখতে চান?', 'What would you like to learn today?', 'Cosa vuoi imparare oggi?'], ['আজকের লেসন', 'Today’s lesson', 'La lezione di oggi'],
    ['দৈনন্দিন কথা', 'Everyday conversation', 'Conversazione quotidiana'], ['নতুন শব্দ', 'New words', 'Parole nuove'], ['শুনে শিখুন', 'Listen and learn', 'Ascolta e impara'], ['কুইজ দিন', 'Take a quiz', 'Fai un quiz'],
    ['ইতালীয় লেভেল', 'Italian levels', 'Livelli di italiano'], ['১০০০+', '1,000+', '1.000+'], ['দরকারি শব্দ', 'Useful words', 'Parole utili'], ['দ্বিভাষিক সহায়তা', 'Bilingual support', 'Supporto bilingue'], ['২৪/৭', '24/7', '24/7'], ['স্টাডি অ্যাকসেস', 'Study access', 'Accesso allo studio'],
    ['যা যা পাবেন', 'What you get', 'Cosa troverai'], ['ইতালীয় শেখার জন্য যা দরকার, সব এক জায়গায়', 'Everything you need to learn Italian, in one place', 'Tutto per imparare l’italiano, in un unico posto'],
    ['সহজ ব্যাখ্যা, ব্যবহারিক উদাহরণ ও নিয়মিত প্র্যাকটিসের সাহায্যে ধাপে ধাপে আত্মবিশ্বাস গড়ে তুলুন।', 'Build confidence step by step with clear explanations, practical examples and regular practice.', 'Acquista sicurezza passo dopo passo con spiegazioni chiare, esempi pratici ed esercizio regolare.'],
    ['কথা বলার ইতালীয়', 'Spoken Italian', 'Italiano parlato'], ['বাজার, অফিস, ডাক্তার বা দৈনন্দিন জীবনের দরকারি কথাগুলো শিখুন।', 'Learn useful phrases for shopping, work, doctor visits and daily life.', 'Impara frasi utili per la spesa, l’ufficio, il medico e la vita quotidiana.'],
    ['সহজ গ্রামার', 'Simple grammar', 'Grammatica semplice'], ['কঠিন নিয়মগুলো বাংলা ব্যাখ্যা ও ছোট উদাহরণ দিয়ে বুঝুন।', 'Understand difficult rules with Bangla explanations and short examples.', 'Comprendi le regole più difficili con spiegazioni in bengalese e brevi esempi.'],
    ['ভিডিওতে শিখুন', 'Learn with videos', 'Impara con i video'], ['ভিডিও লেসন দেখে উচ্চারণ, বাক্য গঠন ও ব্যবহার শিখুন।', 'Learn pronunciation, sentence structure and usage through video lessons.', 'Impara pronuncia, struttura delle frasi e uso della lingua con le videolezioni.'],
    ['আমাদের কোর্স', 'Our courses', 'I nostri corsi'], ['আপনার বর্তমান লেভেল থেকে শুরু করুন', 'Start at your current level', 'Inizia dal tuo livello attuale'], ['একদম শুরু থেকে কাজের উপযোগী ইতালীয় পর্যন্ত—আপনার জন্য সাজানো শেখার পথ।', 'From the basics to workplace Italian—a learning path designed for you.', 'Dalle basi all’italiano per il lavoro: un percorso pensato per te.'],
    ['ইতালীয় বেসিক', 'Italian basics', 'Italiano di base'], ['অভিবাদন, পরিচয়, সংখ্যা, সময় এবং দৈনন্দিন সহজ বাক্য।', 'Greetings, introductions, numbers, time and simple everyday sentences.', 'Saluti, presentazioni, numeri, orari e semplici frasi quotidiane.'], ['কোর্স দেখুন →', 'View course →', 'Scopri il corso →'],
    ['দৈনন্দিন ইতালীয়', 'Everyday Italian', 'Italiano quotidiano'], ['বাজার, বাসা ভাড়া, কাজ এবং সরকারি অফিসে কথা বলা শিখুন।', 'Learn to communicate when shopping, renting a home, working and visiting public offices.', 'Impara a comunicare nei negozi, per affittare casa, al lavoro e negli uffici pubblici.'],
    ['কাজের ইতালীয়', 'Italian for work', 'Italiano per il lavoro'], ['ইন্টারভিউ, ইমেইল, ডকুমেন্ট এবং আরও সাবলীল কথোপকথন।', 'Interviews, emails, documents and more fluent conversation.', 'Colloqui, email, documenti e conversazioni più scorrevoli.'],
    ['ক্লাসরুম', 'Classroom', 'In classe'], ['শেখার কিছু মুহূর্ত', 'Moments of learning', 'Momenti di apprendimento'], ['Admin Panel থেকে নিজের ক্লাস, বই বা শিক্ষার্থীদের ছবি যোগ করুন।', 'Add photos of classes, books or students from the Admin Panel.', 'Aggiungi foto di lezioni, libri o studenti dal pannello di amministrazione.'], ['আপনার ছবি এখানে দেখাবে', 'Your photos will appear here', 'Le tue foto appariranno qui'], ['Admin থেকে ছবি যোগ করুন', 'Add photos from Admin', 'Aggiungi foto dal pannello admin'],
    ['PDF লাইব্রেরি', 'PDF library', 'Biblioteca PDF'], ['নোটস সবসময় সঙ্গে রাখুন', 'Keep your notes with you', 'Porta sempre con te gli appunti'], ['দরকারি শব্দ, গ্রামার শিট ও প্র্যাকটিস নোটস মোবাইল থেকে খুলুন বা ডাউনলোড করুন।', 'Open or download vocabulary, grammar sheets and practice notes on your phone.', 'Apri o scarica vocaboli, schede di grammatica e appunti di esercitazione sul cellulare.'], ['সাহায্য লাগলে বলুন', 'Ask us for help', 'Chiedici aiuto'], ['ডাউনলোড ↗', 'Download ↗', 'Scarica ↗'],
    ['Italiano A1–A2 গ্রামার শিট', 'Italian A1–A2 grammar sheet', 'Scheda di grammatica italiana A1–A2'], ['দৈনন্দিন ৫০০টি ইতালীয় শব্দ', '500 everyday Italian words', '500 parole italiane di uso quotidiano'],
    ['ভিডিও লেসন', 'Video lessons', 'Videolezioni'], ['দেখে দেখে ইতালীয় শিখুন', 'Watch and learn Italian', 'Guarda e impara l’italiano'], ['Admin Panel থেকে YouTube বা অন্য embed ভিডিও লিংক যোগ করুন।', 'Add YouTube or other embedded video links from the Admin Panel.', 'Aggiungi link YouTube o altri video incorporati dal pannello di amministrazione.'], ['ভিডিও লেসন শিগগিরই আসছে', 'Video lessons coming soon', 'Videolezioni in arrivo'], ['Admin থেকে ভিডিও যোগ করুন', 'Add videos from Admin', 'Aggiungi video dal pannello admin'],
    ['আজই শুরু করুন', 'Start today', 'Inizia oggi'], ['আপনার ইতালীয় শেখার যাত্রা আজ থেকেই শুরু হোক', 'Start your Italian learning journey today', 'Inizia oggi il tuo percorso di italiano'], ['নিয়মিত ছোট ছোট লেসন নিন—কিছুদিনের মধ্যেই পার্থক্য অনুভব করবেন।', 'Take short lessons regularly and feel the difference over time.', 'Segui brevi lezioni con regolarità e vedrai i progressi nel tempo.'], ['WhatsApp-এ যোগাযোগ করুন →', 'Contact us on WhatsApp →', 'Contattaci su WhatsApp →'], ['ইতালীয় ভাষা শেখার সহজ প্ল্যাটফর্ম।', 'A simple platform for learning Italian.', 'Una piattaforma semplice per imparare l’italiano.'],
  ];
  const translations = new Map(rows.map(([bn, en, it]) => [bn, { bn, en, it }]));
  const extraRows = [
    ['ইতালীয় ভাষা এখনআপনার ভাষায়।', 'ইতালীয় ভাষা এখন আপনার ভাষায়।', 'Italian, now in your language.', 'L’italiano, ora nella tua lingua.'],
    ['LEARN ITALIAN · BANGLA SUPPORT', 'ইতালীয় শিখুন · বাংলা সহায়তা', 'LEARN ITALIAN · BANGLA SUPPORT', 'IMPARA L’ITALIANO · SUPPORTO IN BENGALESE'],
    ['Ciao, Anik!', 'হ্যালো, Anik!', 'Hello, Anik!', 'Ciao, Anik!'],
    ['Italiano per la vita', 'দৈনন্দিন জীবনের ইতালীয়', 'Italian for everyday life', 'Italiano per la vita'],
    ['il verbo avere e essere', 'avere ও essere ক্রিয়াপদ', 'The verbs avere and essere', 'I verbi avere ed essere'],
    ['verbo farcela', 'farcela ক্রিয়াপদ', 'The verb farcela', 'Il verbo farcela'],
    ['Admin', 'অ্যাডমিন', 'Admin', 'Amministrazione'],
    ['Admin Panel', 'অ্যাডমিন প্যানেল', 'Admin Panel', 'Pannello di amministrazione'],
    ['Admin Login', 'অ্যাডমিন লগইন', 'Admin Login', 'Accesso amministratore'],
    ['এখান থেকে আপনার সাইটের লেখা, ছবি, PDF ও ভিডিও ম্যানেজ করুন।', 'এখান থেকে আপনার সাইটের লেখা, ছবি, PDF ও ভিডিও ম্যানেজ করুন।', 'Manage your site’s text, photos, PDFs and videos here.', 'Gestisci qui testi, foto, PDF e video del sito.'],
    ['সাইটের তথ্য', 'সাইটের তথ্য', 'Site information', 'Informazioni del sito'],
    ['তথ্য সেভ করুন', 'তথ্য সেভ করুন', 'Save information', 'Salva informazioni'],
    ['ছবি যোগ করুন', 'ছবি যোগ করুন', 'Add photo', 'Aggiungi foto'],
    ['PDF যোগ করুন', 'PDF যোগ করুন', 'Add PDF', 'Aggiungi PDF'],
    ['ভিডিও যোগ করুন', 'ভিডিও যোগ করুন', 'Add video', 'Aggiungi video'],
    ['মুছুন', 'মুছুন', 'Delete', 'Elimina'],
    ['শুধু অনুমোদিত ব্যক্তির জন্য।', 'শুধু অনুমোদিত ব্যক্তির জন্য।', 'Authorized users only.', 'Solo utenti autorizzati.'],
    ['পাসওয়ার্ড', 'পাসওয়ার্ড', 'Password', 'Password'],
    ['আপনার পাসওয়ার্ড লিখুন', 'আপনার পাসওয়ার্ড লিখুন', 'Enter your password', 'Inserisci la password'],
    ['পাসওয়ার্ডটি সঠিক নয়। আবার চেষ্টা করুন।', 'পাসওয়ার্ডটি সঠিক নয়। আবার চেষ্টা করুন।', 'Incorrect password. Try again.', 'Password errata. Riprova.'],
    ['লগইন করুন', 'লগইন করুন', 'Log in', 'Accedi'],
    ['Hero title', 'প্রধান শিরোনাম', 'Main heading', 'Titolo principale'],
    ['Hero description', 'প্রধান বিবরণ', 'Main description', 'Descrizione principale'],
    ['WhatsApp number (e.g. +391234567890)', 'WhatsApp নম্বর (যেমন +391234567890)', 'WhatsApp number (e.g. +391234567890)', 'Numero WhatsApp (es. +391234567890)'],
    ['ছবির নাম', 'ছবির নাম', 'Photo title', 'Titolo della foto'],
    ['ছবির URL অথবা নিচের Upload ব্যবহার করুন', 'ছবির URL অথবা নিচের Upload ব্যবহার করুন', 'Photo URL or upload below', 'URL della foto o carica qui sotto'],
    ['PDF-এর নাম', 'PDF-এর নাম', 'PDF title', 'Titolo del PDF'],
    ['PDF link', 'PDF লিংক', 'PDF link', 'Link del PDF'],
    ['ভিডিওর নাম', 'ভিডিওর নাম', 'Video title', 'Titolo del video'],
    ['YouTube link অথবা embed URL', 'YouTube লিংক অথবা embed URL', 'YouTube link or embed URL', 'Link YouTube o URL di incorporamento'],
    ['আপনার লগইন সেশন শেষ হয়েছে। আবার লগইন করুন।', 'আপনার লগইন সেশন শেষ হয়েছে। আবার লগইন করুন।', 'Your session has expired. Log in again.', 'La sessione è scaduta. Accedi di nuovo.'],
    ['নাম এবং লিংক দিন।', 'নাম এবং লিংক দিন।', 'Enter a title and link.', 'Inserisci un titolo e un link.'],
  ];
  extraRows.forEach(([source, bn, en, it]) => translations.set(source, { bn, en, it }));
  const originals = new WeakMap();
  let language = 'bn';
  try { const saved = localStorage.getItem('nostroLinguaLanguage'); if (['bn', 'en', 'it'].includes(saved)) language = saved; } catch { /* Storage may be unavailable. */ }
  const selector = document.getElementById('languageSelect');
  function apply() {
    document.documentElement.lang = language;
    document.title = { bn: 'Nostro Lingua LAB | বাংলায় ইতালীয় শিখুন', en: 'Nostro Lingua LAB | Learn Italian', it: 'Nostro Lingua LAB | Impara l’italiano' }[language];
    selector.value = language;
    selector.setAttribute('aria-label', { bn: 'ভাষা নির্বাচন করুন', en: 'Choose language', it: 'Scegli la lingua' }[language]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest('script, style, select')) continue;
      if (!originals.has(node)) originals.set(node, node.textContent);
      const original = originals.get(node);
      const translated = translations.get(original.trim());
      if (translated) node.textContent = original.replace(original.trim(), translated[language]);
    }
    document.querySelectorAll('[placeholder]').forEach(element => {
      if (!originals.has(element)) originals.set(element, element.getAttribute('placeholder'));
      const original = originals.get(element);
      element.setAttribute('placeholder', translations.get(original)?.[language] || original);
    });
  }
  selector.addEventListener('change', () => {
    language = selector.value;
    try { localStorage.setItem('nostroLinguaLanguage', language); } catch { /* Keep switching without storage. */ }
    apply();
  });
  window.applySiteLanguage = apply;
  window.siteTranslate = text => translations.get(text)?.[language] || text;
  apply();
})();
