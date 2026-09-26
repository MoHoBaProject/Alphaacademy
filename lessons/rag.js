// AlphaAcademy — Retrieval-Augmented Generation (RAG) — lesson content
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
    type: "paragraph",
    en: {
      text: "Retrieval-Augmented Generation, or RAG, has become a core pattern for building large language model applications that stay grounded in real, up-to-date information. Rather than relying only on what a model memorized during training, a RAG system retrieves relevant documents from an external knowledge base and feeds them into the model's context before it generates a response. This course walks through the full pipeline: chunking and embedding documents, indexing them in a vector store, retrieving the most relevant passages for a given query, and combining that retrieved context with a language model to produce accurate, source-grounded answers."
    },
    fa: {
      text: "تولید تقویت‌شده با بازیابی یا RAG به یکی از الگوهای اصلی برای ساخت اپلیکیشن‌های مبتنی بر مدل‌های زبانی بزرگ تبدیل شده که پاسخ‌هاشون رو به اطلاعات واقعی و به‌روز متکی نگه می‌داره. به‌جای تکیه‌ی صرف به چیزی که مدل در زمان آموزش حفظ کرده، یک سیستم RAG اسناد مرتبط رو از یک پایگاه دانش خارجی بازیابی می‌کند و پیش از تولید پاسخ، آن‌ها را به context مدل اضافه می‌کند. این دوره کل پایپ‌لاین را پوشش می‌دهد: تکه‌تکه کردن (chunking) و embedding کردن اسناد، ایندکس کردن آن‌ها در یک vector store، بازیابی مرتبط‌ترین بخش‌ها برای یک پرسش مشخص، و ترکیب آن context بازیابی‌شده با یک مدل زبانی برای تولید پاسخ‌های دقیق و متکی به منبع."
    }
  },
  {
    type: "list",
    en: {
      lead: "RAG in practice: get started with building retrieval pipelines that ground language models in real data.",
      items: [
        { title: "Foundations of RAG", desc: "Understand why retrieval-augmented generation exists, how it differs from fine-tuning, and when to use each approach." },
        { title: "Embeddings and vector search", desc: "Learn how text is converted into embeddings and indexed for fast, relevant similarity search." },
        { title: "Building a retrieval pipeline", desc: "Chunk documents, build an index, and retrieve the most relevant context for a given query." },
        { title: "Evaluation and production RAG", desc: "Measure retrieval quality and answer accuracy, then harden the pipeline for real-world production use." }
      ]
    },
    fa: {
      lead: "RAG در عمل: شروع کار با ساخت پایپ‌لاین‌های بازیابی که مدل‌های زبانی را به داده‌ی واقعی متکی می‌کنند.",
      items: [
        { title: "مبانی RAG", desc: "بفهمید چرا تولید تقویت‌شده با بازیابی وجود دارد، چه تفاوتی با fine-tuning دارد، و هر کدام را کِی باید استفاده کرد." },
        { title: "Embedding و جست‌وجوی برداری", desc: "یاد بگیرید متن چطور به embedding تبدیل و برای جست‌وجوی شباهت سریع و مرتبط ایندکس می‌شود." },
        { title: "ساخت پایپ‌لاین بازیابی", desc: "اسناد را تکه‌تکه کنید، یک ایندکس بسازید، و مرتبط‌ترین context را برای یک پرسش بازیابی کنید." },
        { title: "ارزیابی و RAG در محیط عملیاتی", desc: "کیفیت بازیابی و دقت پاسخ را بسنجید، سپس پایپ‌لاین را برای استفاده‌ی واقعی در production مقاوم کنید." }
      ]
    }
  }
];
