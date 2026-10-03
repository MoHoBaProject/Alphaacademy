// AlphaAcademy — Retrieval-Augmented Generation (RAG) — lesson content
//
// To add a new lesson, just append a new object to this LESSONS array
// (don't forget the comma after the previous lesson's closing "}").
// index.html reads this array automatically — no other changes needed.
//
// Three lesson types are supported:
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
//
// 3) type: "diagram" -> a titled flow diagram made of one or more stages,
//    each stage rendered as a row of boxes connected by arrows.
//    Per box: { text: "..." }  (use "\n" for a line break inside the box)
//    Optional flags: accent: true (highlighted/violet box), data: true (dashed, muted box)
//    {
//      type: "diagram",
//      en: { title: "...", stages: [ { label: "...", items: [ {text:"..."}, ... ] }, ... ] },
//      fa: { title: "...", stages: [ { label: "...", items: [ {text:"..."}, ... ] }, ... ] }
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
  },
  {
    type: "paragraph",
    en: {
      text: "Let's say you're working at a company with 100s of internal documents (like policy guidelines, technical specs, customer support documents, etc). Now, if you have a question that could be answered by one of these documents, it would be unrealistic to dump all 100 files into the LLM and ask that question. It is unrealistic because LLMs have a \"context window\", meaning a limited number of information it can process at a given time. But with LLM + RAGs, this process can be streamlined. So the next time when you have a question, you can just ask the RAG system in simple English and it retrieves the most relevant info from those documents and uses it to give you an accurate answer."
    },
    fa: {
      text: "فرض کنید در شرکتی کار می‌کنید که صدها سند داخلی دارد (مثل دستورالعمل‌های سیاستی، مشخصات فنی، اسناد پشتیبانی مشتری و غیره). حالا اگر سوالی داشته باشید که یکی از این اسناد بتواند پاسخش را بدهد، غیرمنطقی است که همه‌ی صد فایل را به LLM بدهید و آن سوال را بپرسید. این کار غیرمنطقی است چون LLMها یک «پنجره‌ی context» دارند، یعنی مقدار محدودی از اطلاعات که می‌توانند در یک زمان مشخص پردازش کنند. اما با ترکیب LLM و RAG، این فرآیند می‌تواند ساده‌تر شود. پس دفعه‌ی بعد که سوالی داشتید، کافی‌ست از سیستم RAG به زبان ساده بپرسید و آن مرتبط‌ترین اطلاعات را از میان آن اسناد بازیابی می‌کند و از آن برای دادن پاسخی دقیق استفاده می‌کند."
    }
  },
  {
    type: "list",
    en: {
      lead: "What are tokens?",
      items: [
        { title: "Definition", desc: "In the context of language models, a token is a unit of text that the LLM model processes. Tokens can be as short as one character or as long as one word, depending on the language and structure of the text." },
        { title: "Example", desc: "For example, the word \"hello\" is one token, while the phrase \"I'm\" is typically broken down into two tokens: \"I\" and \"'m.\" You can basically think of one token as one English word." },
        { title: "Context window", desc: "A context window is like the amount of information that an LLM can process at a given time. Understanding tokens matters because LLMs have a limit on how many they can handle at once, called the \"context window\"." },
        { title: "Why it matters", desc: "This means that if we have a PDF that's 10 million tokens long, we can't feed it to the model in one go — this is exactly the kind of problem RAG solves." }
      ]
    },
    fa: {
      lead: "توکن چیست؟",
      items: [
        { title: "تعریف", desc: "در زمینه‌ی مدل‌های زبانی، توکن واحدی از متن است که مدل LLM آن را پردازش می‌کند. توکن‌ها می‌توانند به کوتاهی یک حرف یا به بلندی یک کلمه باشند، بسته به زبان و ساختار متن." },
        { title: "مثال", desc: "برای مثال، کلمه‌ی «hello» یک توکن است، در حالی‌که عبارت «I'm» معمولاً به دو توکن تقسیم می‌شود: «I» و «'m». می‌توانید یک توکن را تقریباً معادل یک کلمه‌ی انگلیسی در نظر بگیرید." },
        { title: "پنجره‌ی context", desc: "پنجره‌ی context مثل مقدار اطلاعاتی است که یک LLM می‌تواند در یک زمان مشخص پردازش کند. فهمیدن توکن‌ها مهم است چون LLMها محدودیتی روی تعداد توکن‌هایی که هم‌زمان می‌توانند پردازش کنند دارند." },
        { title: "چرا اهمیت دارد", desc: "یعنی اگر یک PDF داشته باشیم که ۱۰ میلیون توکن طول دارد، نمی‌توانیم آن را یک‌جا به مدل بدهیم — این دقیقاً همان مشکلی است که RAG حل می‌کند." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Embeddings",
      items: [
        { title: "What is an embedding?", desc: "A vector embedding is a mathematical representation of words, sentences or even images. It converts English passages or words into its associated vector representation - a list of numbers, like [34, 21, 7.5] for the word \"cat\"." },
        { title: "Dimensions", desc: "Each number in the vector embedding is called a dimension. Basically, each of these numbers can represent a certain aspect of the word \"cat\", like \"small\", \"furry\", etc." },
        { title: "Similarity", desc: "Words with similar semantic meaning tend to have dimensions closer to each other. Example: Cat - [34, 8, 7.5], Kitten - [33, 8, 2], Dog - [47, 8, 2], Elephant - [2, 62, 2]. Notice Cat and Kitten are much closer to each other than to Elephant." }
      ]
    },
    fa: {
      lead: "Embeddingها",
      items: [
        { title: "embedding چیست؟", desc: "یک vector embedding نمایش ریاضی از کلمات، جمله‌ها یا حتی تصاویر است. متن یا کلمات انگلیسی را به یک بردار عددی تبدیل می‌کند، مثلاً [34, 21, 7.5] برای کلمه‌ی «cat»." },
        { title: "بُعدها (dimensions)", desc: "هر عدد در vector embedding یک «بُعد» نامیده می‌شود. اساساً هر کدام از این اعداد می‌تواند یک جنبه از کلمه‌ی «cat» را نشان دهد، مثل «کوچک»، «پرمو» و غیره." },
        { title: "شباهت", desc: "کلماتی که معنای معنایی مشابه دارند، بُعدهایشان به هم نزدیک‌تر است. مثال: Cat - [34, 8, 7.5]، Kitten - [33, 8, 2]، Dog - [47, 8, 2]، Elephant - [2, 62, 2]. دقت کنید Cat و Kitten خیلی به هم نزدیک‌ترند تا به Elephant." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Embedding models in practice",
      items: [
        { title: "Real embedding size", desc: "In reality, popular embedding models like OpenAI's \"text-embedding-3-large\" transform text to up to 3,072 dimensions in each vector embedding - even a small word like \"cat\" or a large paragraph always gets one vector embedding output with 3,072 dimensions." },
        { title: "Trade-off", desc: "The advantage of using higher dimensional embedding models is it captures more semantic information. The downside is it is slightly more expensive to embed and store." },
        { title: "Important distinction", desc: "An embedding model is NOT the same as an LLM model. An embedding model specializes in a completely different thing: it converts English passages or words or sentences into its vector representation, or a mathematical representation." }
      ]
    },
    fa: {
      lead: "مدل‌های embedding در عمل",
      items: [
        { title: "اندازه‌ی واقعی embedding", desc: "در واقعیت، مدل‌های embedding محبوب مثل «text-embedding-3-large» شرکت OpenAI متن را به تا ۳٬۰۷۲ بُعد در هر vector embedding تبدیل می‌کنند - حتی یک کلمه‌ی کوچک مثل «cat» یا یک پاراگراف بزرگ همیشه یک خروجی vector embedding با ۳٬۰۷۲ بُعد می‌گیرد." },
        { title: "مصالحه (trade-off)", desc: "مزیت استفاده از مدل‌های embedding با بُعد بالاتر این است که اطلاعات معنایی بیشتری را ثبت می‌کند. عیبش این است که ذخیره و embed کردن کمی گران‌تر تمام می‌شود." },
        { title: "تمایز مهم", desc: "یک مدل embedding با یک مدل LLM یکی نیست. مدل embedding در یک کار کاملاً متفاوت تخصص دارد: متن، کلمات یا جملات انگلیسی را به نمایش برداری یا نمایش ریاضی‌شان تبدیل می‌کند." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Popular Embedding Models",
      items: [
        { title: "OpenAI: text-embedding-3-small (most popular choice)", desc: "1536 dimensions (default). Great for most use cases. Can reduce to 512, 1024, or any size ≤ 1536." },
        { title: "OpenAI: text-embedding-3-large", desc: "3072 dimensions (default). Best performance, but costs more. Can reduce to 256, 512, 1024, 1536, or any size ≤ 3072." },
        { title: "Reducing dimensions", desc: "Both OpenAI models let you reduce dimensions to save storage costs without losing much quality." },
        { title: "Cohere", desc: "Strong multilingual support, good for international applications." },
        { title: "Voyage AI", desc: "Often performs well in benchmarks. Current models include voyage-3-large, voyage-3.5 and voyage-3.5-lite." },
        { title: "Mistral", desc: "Open-source option that's been showing impressive results." }
      ]
    },
    fa: {
      lead: "مدل‌های embedding محبوب",
      items: [
        { title: "OpenAI: text-embedding-3-small (محبوب‌ترین انتخاب)", desc: "۱۵۳۶ بُعد (پیش‌فرض). برای اغلب موارد استفاده عالی است. می‌توان آن را به ۵۱۲، ۱۰۲۴ یا هر اندازه‌ی ≤ ۱۵۳۶ کاهش داد." },
        { title: "OpenAI: text-embedding-3-large", desc: "۳۰۷۲ بُعد (پیش‌فرض). بهترین عملکرد، اما هزینه‌ی بیشتر. می‌توان آن را به ۲۵۶، ۵۱۲، ۱۰۲۴، ۱۵۳۶ یا هر اندازه‌ی ≤ ۳۰۷۲ کاهش داد." },
        { title: "کاهش بُعد", desc: "هر دو مدل OpenAI اجازه می‌دهند بُعدها را کم کنید تا هزینه‌ی ذخیره‌سازی کاهش یابد، بدون اینکه کیفیت زیاد افت کند." },
        { title: "Cohere", desc: "پشتیبانی چندزبانه‌ی قوی، مناسب برنامه‌های بین‌المللی." },
        { title: "Voyage AI", desc: "اغلب در بنچمارک‌ها عملکرد خوبی دارد. مدل‌های فعلی شامل voyage-3-large، voyage-3.5 و voyage-3.5-lite هستند." },
        { title: "Mistral", desc: "گزینه‌ی متن‌باز که نتایج چشمگیری نشان داده است." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Embeddings and Vector DBs",
      items: [
        { title: "Vector DB definition", desc: "A database built to store all the vector embeddings is considered a vector database." },
        { title: "Specialised vector databases", desc: "To store the vectors, we can use specialised vector databases - Pinecone, Weaviate, ChromaDB, FAISS." },
        { title: "Regular SQL database", desc: "Or a regular SQL database - offers structured data storage and retrieval." }
      ]
    },
    fa: {
      lead: "Embeddingها و Vector DBها",
      items: [
        { title: "تعریف Vector DB", desc: "پایگاه داده‌ای که برای ذخیره‌ی همه‌ی vector embeddingها ساخته شده باشد، یک پایگاه داده‌ی برداری (vector database) محسوب می‌شود." },
        { title: "Vector DBهای تخصصی", desc: "برای ذخیره‌ی بردارها می‌توانیم از پایگاه‌های داده‌ی برداری تخصصی استفاده کنیم - Pinecone، Weaviate، ChromaDB، FAISS." },
        { title: "پایگاه داده‌ی SQL معمولی", desc: "یا یک پایگاه داده‌ی SQL معمولی - که ذخیره‌سازی و بازیابی داده‌های ساختاریافته را ارائه می‌دهد." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Consistency is key",
      items: [
        { title: "Same model everywhere", desc: "You MUST use the same embedding model for both your documents AND your user queries." },
        { title: "Analogy", desc: "Think of embeddings like different languages. If you embed your documents using text-embedding-3-small but embed user queries using text-embedding-3-large, they literally can't understand each other." },
        { title: "Same dimensions", desc: "Even within the same model, you must use the exact same dimensions everywhere." },
        { title: "Example", desc: "If you embed your documents using text-embedding-3-large with 1536 dimensions, you MUST also embed user queries with text-embedding-3-large at exactly 1536 dimensions." },
        { title: "Pick one and stick with it", desc: "Pick one embedding model at the start and stick with it throughout your entire RAG pipeline. If you want to switch later, you'll need to re-embed ALL your documents." }
      ]
    },
    fa: {
      lead: "ثبات و یکسان بودن مدل کلیدی است",
      items: [
        { title: "همه‌جا یک مدل", desc: "باید برای هر دو مورد، یعنی اسناد و پرسش‌های کاربر، از یک مدل embedding یکسان استفاده کنید." },
        { title: "تشبیه", desc: "embeddingها را مثل زبان‌های مختلف در نظر بگیرید. اگر اسنادتان را با text-embedding-3-small و پرسش‌های کاربر را با text-embedding-3-large امبد کنید، آن‌ها به معنای واقعی نمی‌توانند همدیگر را بفهمند." },
        { title: "بُعد یکسان", desc: "حتی درون یک مدل هم باید در همه‌جا دقیقاً همان تعداد بُعد را استفاده کنید." },
        { title: "مثال", desc: "اگر اسنادتان را با text-embedding-3-large و ۱۵۳۶ بُعد embed کردید، باید پرسش‌های کاربر را هم با text-embedding-3-large و دقیقاً ۱۵۳۶ بُعد embed کنید." },
        { title: "یکی را انتخاب کنید و پایبند بمانید", desc: "در ابتدا یک مدل embedding انتخاب کنید و در کل پایپ‌لاین RAG به آن پایبند بمانید. اگر بعداً بخواهید مدل را عوض کنید، باید همه‌ی اسنادتان را دوباره embed کنید." }
      ]
    }
  },
  {
    type: "diagram",
    en: {
      title: "The RAG pipeline (1/3): Chunking",
      stages: [
        {
          label: "1. Knowledge-base construction (Ingestion pipeline)",
          items: [
            { text: "Source Documents\n(~10M tokens)" },
            { text: "Chunking\n(~1K tokens)" },
            { text: "Chunks\n(10,000)" }
          ]
        }
      ]
    },
    fa: {
      title: "پایپ‌لاین RAG (۱/۳): Chunking",
      stages: [
        {
          label: "۱. ساخت پایگاه دانش (Ingestion)",
          items: [
            { text: "اسناد منبع\n(~۱۰ میلیون توکن)" },
            { text: "Chunking\n(~۱ هزار توکن)" },
            { text: "Chunkها\n(۱۰٬۰۰۰)" }
          ]
        }
      ]
    }
  },
  {
    type: "diagram",
    en: {
      title: "The RAG pipeline (2/3): Embedding and storage",
      stages: [
        {
          label: "1. Knowledge-base construction (Ingestion pipeline)",
          items: [
            { text: "Chunks\n(10,000)" },
            { text: "Embedding" },
            { text: "Vector Embeddings\n(2,000)", data: true },
            { text: "Vector DB", accent: true }
          ]
        }
      ]
    },
    fa: {
      title: "پایپ‌لاین RAG (۲/۳): Embedding و ذخیره‌سازی",
      stages: [
        {
          label: "۱. ساخت پایگاه دانش (Ingestion)",
          items: [
            { text: "Chunkها\n(۱۰٬۰۰۰)" },
            { text: "Embedding" },
            { text: "بردارهای Embedding\n(۲٬۰۰۰)", data: true },
            { text: "Vector DB", accent: true }
          ]
        }
      ]
    }
  },
  {
    type: "diagram",
    en: {
      title: "The RAG pipeline (3/3): Retrieval",
      stages: [
        {
          label: "2. Retrieval Pipeline",
          items: [
            { text: "Query" },
            { text: "Embedding" },
            { text: "Query Vector", data: true },
            { text: "Retriever", accent: true },
            { text: "Vector DB\n(lookup)" },
            { text: "Top Chunks\n(1, 2, 3)" },
            { text: "Chunks + Question\n\u2192 LLM", accent: true },
            { text: "Answer" }
          ]
        }
      ]
    },
    fa: {
      title: "پایپ‌لاین RAG (۳/۳): Retrieval",
      stages: [
        {
          label: "۲. پایپ‌لاین Retrieval",
          items: [
            { text: "پرسش (Query)" },
            { text: "Embedding" },
            { text: "بردار پرسش", data: true },
            { text: "Retriever", accent: true },
            { text: "Vector DB\n(جست‌وجو)" },
            { text: "Chunkهای برتر\n(۱، ۲، ۳)" },
            { text: "Chunkها + سوال\n\u2192 LLM", accent: true },
            { text: "پاسخ" }
          ]
        }
      ]
    }
  }
];
