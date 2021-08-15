var gCurrLang = 'en';

var gTranslations = {
  english: {
    en: 'English',
    he: 'אנגלית',
  },
  hebrew: {
    en: 'Hebrew',
    he: 'עברית',
  },
  gallery: {
    en: 'Gallery',
    he: 'גלריה',
  },
  memes: {
    en: 'Memes',
    he: 'ממים שמורים',
  },
  about: {
    en: 'About',
    he: 'בואו נכיר',
  },
  'search-typing': {
    en: 'Enter search keyword',
    he: 'הכנס מילת חיפוש',
  },
  funny: {
    en: 'funny',
    he: 'מצחיק',
  },
  celebrity: {
    en: 'celebrity',
    he: 'סלבריטי',
  },
  politic: {
    en: 'politic',
    he: 'פוליטיקה',
  },
  cute: {
    en: 'cute',
    he: 'חמוד',
  },
  animal: {
    en: 'animal',
    he: 'חיה',
  },
  happy: {
    en: 'happy',
    he: 'שמח',
  },
  books: {
    en: 'books',
    he: 'ספרים',
  },
  comics: {
    en: 'comics',
    he: 'קומיקס',
  },
  cartoon: {
    en: 'cartoon',
    he: 'מצוייר',
  },
  baby: {
    en: 'baby',
    he: 'תינוק',
  },
  kid: {
    en: 'kid',
    he: 'ילד',
  },
  love: {
    en: 'love',
    he: 'אהבה',
  },
  sport: {
    en: 'sport',
    he: 'ספורט',
  },
  dog: {
    en: 'dog',
    he: 'כלב',
  },
  cat: {
    en: 'cat',
    he: 'חתול',
  },
  drinks: {
    en: 'drinks',
    he: 'שתייה',
  },
  movie: {
    en: 'movie',
    he: 'סרט',
  },
  tv: {
    en: 'tv',
    he: 'טלוויזיה',
  },
  more: {
    en: 'more...',
    he: 'עוד...',
  },
  rights: {
    en: 'all rights reserved 2019',
    he: 'כל הזכויות שמורות 2019',
  },
  'about-name': {
    en: 'Marshall Eriksen',
    he: 'מרשל אריקסן',
  },
  'about-info': {
    en:
      ' Marshall Eriksen (born 1978) is one of the five main characters of How I Met Your Mother, portrayed by Jason Segel',
    he:
      'מרשל אריקסן (נולד ב -1978) הוא אחד מחמש הדמויות הראשיות של איך פגשתי את אמא שלך , שתואר על ידי גייסון.',
  },
  'switch-text': {
    en: 'Switch Text',
    he: 'החלף שורת טקסט',
  },
  'change-text': {
    en: 'Change Text',
    he: 'שנה טקסט',
  },
  'new-text': {
    en: 'Add New Text',
    he: 'הוסף שורת טקסט חדשה',
  },
  'delete-text': {
    en: 'Delete Text',
    he: 'מחק שורת טקסט',
  },
  'upload-img': {
    en: 'Upload image',
    he: 'העלה תמונה',
  },
  increase: {
    en: 'Increase',
    he: 'הגדל',
  },
  decrease: {
    en: 'Decrease',
    he: 'הקטן',
  },
  align_left: {
    en: 'Align Left',
    he: 'יישור לשמאל',
  },
  align_center: {
    en: 'Align Center',
    he: 'יישור למרכז',
  },
  align_right: {
    en: 'Align Right',
    he: 'יישור לימין',
  },
  font: {
    en: 'Choose Font',
    he: 'בחר פונט',
  },
  'outline-color': {
    en: 'Choose Outline color',
    he: 'בחר צבע למסגרת',
  },
  'fill-color': {
    en: 'Choose color',
    he: 'בחר צבע',
  },
  stickers: {
    en: 'Choose Stickers',
    he: 'בחר מדבקות',
  },
  save: {
    en: 'Save ',
    he: 'שמירה',
  },
  download: {
    en: 'Download',
    he: 'הורדה',
  },
  share: {
    en: 'Share on FB',
    he: 'שיתוף בפייסבוק',
  },
};

const setLang = (lang) => {
  setCurrLang(lang);
  gCurrLang = getCurrLang();
  doTrans();
};

const doTrans = () => {
  const els = document.querySelectorAll('[data-trans]');
  els.forEach((el) => {
    const txt = getTrans(el.dataset.trans);
    if (el.title) el.title = txt;
    else if (el.placeholder) el.placeholder = txt;
    else el.innerText = txt;
  });
};

function getTrans(transKey) {
  const langMap = gTranslations[transKey];
  let txt = langMap[gCurrLang];
  if (!txt) txt = langMap['en'];
  return txt;
}
