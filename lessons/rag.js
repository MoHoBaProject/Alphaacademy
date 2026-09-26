// AlphaAcademy — Retrieval-Augmented Generation (RAG) — lesson content.
//
// To add a new lesson, just append a new object to this LESSONS array
// (don't forget the comma after the previous lesson's closing "}").
// index.html reads this array automatically — no other changes needed.
//
// Two lesson types are supported:
//
// 1) type: "paragraph"  -> a plain paragraph, English on top, Persian below
//    { type: "paragraph", en: { text: "..." }, fa: { text: "..." } }
//
// 2) type: "list"  -> a lead line + a bullet list, English block on top,
//    Persian block below
//    {
//      type: "list",
//      en: { lead: "...", items: [ { title: "...", desc: "..." }, ... ] },
//      fa: { lead: "...", items: [ { title: "...", desc: "..." }, ... ] }
//    }

const LESSONS = [
  {
    type: "list",
    en: {
      lead: "Retrieval Augmented Generation (RAGs)",
      items: [
        { title: "Definition", desc: "RAGs is a method where we combine LLMs with a retrieval system." },
        { title: "How it works", desc: "This retrieval system can search through vast sources of external information - like documents, databases, or knowledge bases whenever the LLM needs additional knowledge to give you better answers." },
        { title: "Efficiency", desc: "At the same time, it also makes sure the LLM is not overloaded with bigger prompts." }
      ]
    },
    fa: {
      lead: "تولید تقویت‌شده با بازیابی (RAGs)",
      items: [
        { title: "تعریف", desc: "RAGs روشی است که در آن مدل‌های زبانی بزرگ (LLM) را با یک سیستم بازیابی ترکیب می‌کنیم." },
        { title: "نحوه‌ی عملکرد", desc: "این سیستم بازیابی می‌تواند از میان منابع گسترده‌ای از اطلاعات خارجی - مانند اسناد، پایگاه‌های داده یا پایگاه‌های دانش - جست‌وجو کند تا هر وقت LLM به دانش اضافی نیاز داشت، پاسخ بهتری به شما بدهد." },
        { title: "بهینه بودن", desc: "در عین حال، این روش تضمین می‌کند که LLM با پرامپت‌های بزرگ‌تر بیش از حد بارگذاری نشود." }
      ]
    }
  }
];