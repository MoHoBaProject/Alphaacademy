// AlphaAcademy — Apache Tika — lesson content
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
      lead: "What is Apache Tika?",
      items: [
        { title: "Definition", desc: "Apache Tika is an open-source toolkit that detects file types and extracts text content and metadata from over a thousand different document formats, through a single, unified API." },
        { title: "Formats it handles", desc: "PDFs, Microsoft Office files (Word, Excel, PowerPoint), OpenDocument files, emails, images, audio, HTML, and many more — all accessed the same way, without writing a separate parser for each format." },
        { title: "Where it's used", desc: "Search engines, content management systems, data pipelines, and digital forensics tools use Tika to turn a pile of mixed, unstructured files into searchable text and structured metadata." }
      ]
    },
    fa: {
      lead: "Apache Tika چیست؟",
      items: [
        { title: "تعریف", desc: "Apache Tika یک جعبه‌ابزار متن‌باز است که نوع فایل را تشخیص می‌دهد و محتوای متنی و متادیتا را از بیش از هزار فرمت سند مختلف، از طریق یک API یکپارچه و واحد، استخراج می‌کند." },
        { title: "فرمت‌هایی که پشتیبانی می‌کند", desc: "فایل‌های PDF، فایل‌های مایکروسافت آفیس (Word، Excel، PowerPoint)، فایل‌های OpenDocument، ایمیل‌ها، تصاویر، صدا، HTML و بسیاری دیگر - همه با یک روش یکسان و بدون نیاز به نوشتن یک parser جداگانه برای هر فرمت." },
        { title: "کجا استفاده می‌شود", desc: "موتورهای جست‌وجو، سیستم‌های مدیریت محتوا، پایپ‌لاین‌های داده و ابزارهای پزشکی قانونی دیجیتال از Tika استفاده می‌کنند تا مجموعه‌ای از فایل‌های نامنظم و ساختارنیافته را به متن قابل جست‌وجو و متادیتای ساخت‌یافته تبدیل کنند." }
      ]
    }
  },
  {
    type: "paragraph",
    en: {
      text: "Let's say your company has a shared drive with thousands of files - some PDFs, some Word docs, some scanned images, some emails with attachments. You want to build a search feature so employees can find what they need. The problem is each format stores its text differently, and a PDF library can't read a Word file, a Word library can't read an email, and so on. Without Tika, you would need to write and maintain a separate parser for every single format, and keep up with every new version of every file type. With Tika, you hand it any file and ask one simple question - \"what's in here?\" - and it detects the format, picks the right parser internally, and gives you back the text and metadata in the same consistent shape every time."
    },
    fa: {
      text: "فرض کنید شرکت شما یک درایو مشترک با هزاران فایل دارد - بعضی PDF، بعضی فایل Word، بعضی تصاویر اسکن‌شده، بعضی ایمیل با پیوست. می‌خواهید یک قابلیت جست‌وجو بسازید تا کارمندها بتوانند چیزی که نیاز دارند پیدا کنند. مشکل این است که هر فرمت متنش را به شکل متفاوتی ذخیره می‌کند، و یک کتابخانه‌ی PDF نمی‌تواند فایل Word را بخواند، یک کتابخانه‌ی Word نمی‌تواند ایمیل را بخواند و الی آخر. بدون Tika، باید برای هر فرمت یک parser جداگانه می‌نوشتید و نگه می‌داشتید، و با هر نسخه‌ی جدید هر فرمت فایل هم‌قدم می‌شدید. با Tika، کافی‌ست هر فایلی را بدهید و یک سوال ساده بپرسید - «این فایل چی توشه؟» - و Tika فرمت را تشخیص می‌دهد، در پس‌زمینه parser درست را انتخاب می‌کند، و هر بار متن و متادیتا را با همان ساختار ثابت به شما برمی‌گرداند."
    }
  },
  {
    type: "list",
    en: {
      lead: "Core concepts: Detectors and Parsers",
      items: [
        { title: "Detector", desc: "A Detector figures out a file's MIME type (its real format), using clues like the file's \"magic bytes\" (the first few bytes of its content), its file extension, and for container formats (like .docx or .zip) even a peek inside the container." },
        { title: "Parser", desc: "Once the format is known, a Parser does the actual extraction for that specific format - for example, PDFParser for PDFs, OOXMLParser for modern Office files. Every parser implements the same interface, so the caller doesn't need to know which one ran." },
        { title: "AutoDetectParser", desc: "In practice, you almost always use AutoDetectParser: it runs the Detector first, then automatically routes the file to the right specific Parser - so from the outside it looks like Tika just \"understands\" every file." },
        { title: "Unified output", desc: "Whichever parser ran, Tika hands back the result in the same consistent shape: plain text (or structured XHTML) for the content, plus a Metadata object with fields like author, creation date, title, and content-type." }
      ]
    },
    fa: {
      lead: "مفاهیم اصلی: Detector و Parser",
      items: [
        { title: "Detector", desc: "یک Detector نوع MIME فایل (فرمت واقعی‌اش) را تشخیص می‌دهد، با استفاده از سرنخ‌هایی مثل «بایت‌های جادویی» فایل (چند بایت اول محتوا)، پسوند فایل، و برای فرمت‌های کانتینری (مثل .docx یا .zip) حتی یک نگاه به داخل کانتینر." },
        { title: "Parser", desc: "وقتی فرمت مشخص شد، یک Parser کار استخراج واقعی را برای همان فرمت خاص انجام می‌دهد - مثلاً PDFParser برای فایل‌های PDF، OOXMLParser برای فایل‌های مدرن آفیس. همه‌ی parserها یک interface یکسان را پیاده‌سازی می‌کنند، پس فراخواننده لازم نیست بداند کدام یکی اجرا شده." },
        { title: "AutoDetectParser", desc: "در عمل، تقریباً همیشه از AutoDetectParser استفاده می‌کنید: اول Detector را اجرا می‌کند، سپس فایل را به‌طور خودکار به Parser مخصوص همان فرمت می‌فرستد - پس از بیرون به نظر می‌رسد Tika فقط هر فایلی را «می‌فهمد»." },
        { title: "خروجی یکپارچه", desc: "هر parser که اجرا شده باشد، Tika نتیجه را با همان ساختار ثابت برمی‌گرداند: متن ساده (یا XHTML ساخت‌یافته) برای محتوا، به‌علاوه یک شیء Metadata با فیلدهایی مثل نویسنده، تاریخ ساخت، عنوان و content-type." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Ways to use Tika",
      items: [
        { title: "Embedded library", desc: "Add tika-core and tika-parsers as a Maven/Gradle dependency in a Java application, and call the Tika facade class directly in your code - the simplest way to parse files inside an existing JVM app." },
        { title: "Tika Server", desc: "Run the tika-server-standard jar as a standalone REST service. Any language can then send a file over HTTP and get back text or metadata - useful when your app isn't written in Java." },
        { title: "tika-python", desc: "A Python client library that talks to a running Tika Server over HTTP, so Python code can call parser.from_file(path) and get text/metadata back without touching Java directly." },
        { title: "Command line", desc: "The tika-app jar can be run directly from the terminal to extract text or metadata from a file - handy for quick checks or shell scripts." }
      ]
    },
    fa: {
      lead: "روش‌های استفاده از Tika",
      items: [
        { title: "کتابخانه‌ی embedded", desc: "tika-core و tika-parsers را به‌عنوان dependency در Maven/Gradle به یک اپلیکیشن Java اضافه کنید و کلاس facade به نام Tika را مستقیم در کد خودتان صدا بزنید - ساده‌ترین روش برای parse کردن فایل‌ها داخل یک اپ JVM موجود." },
        { title: "Tika Server", desc: "jar به نام tika-server-standard را به‌عنوان یک سرویس مستقل REST اجرا کنید. هر زبانی می‌تواند یک فایل را روی HTTP بفرستد و متن یا متادیتا پس بگیرد - مفید وقتی اپ شما با Java نوشته نشده." },
        { title: "tika-python", desc: "یک کتابخانه‌ی کلاینت پایتون که با یک Tika Server در حال اجرا روی HTTP صحبت می‌کند، تا کد پایتون بتواند parser.from_file(path) را صدا بزند و متن/متادیتا را بدون تماس مستقیم با Java پس بگیرد." },
        { title: "خط فرمان", desc: "jar به نام tika-app را می‌توان مستقیم از ترمینال اجرا کرد تا متن یا متادیتا از یک فایل استخراج شود - برای چک سریع یا اسکریپت‌های shell کاربردی‌ست." }
      ]
    }
  },
  {
    type: "diagram",
    en: {
      title: "How a file flows through Tika",
      stages: [
        {
          label: "1. Parsing a single file (embedded or CLI)",
          items: [
            { text: "Input File\n(any format)" },
            { text: "Detector\n(MIME type)" },
            { text: "AutoDetectParser", accent: true },
            { text: "Format-specific\nParser" },
            { text: "Text\n(or XHTML)" },
            { text: "Metadata", data: true }
          ]
        },
        {
          label: "2. Using Tika Server (REST API)",
          items: [
            { text: "Client\n(any language)" },
            { text: "HTTP PUT\n/tika", data: true },
            { text: "Tika Server", accent: true },
            { text: "Parsed Text\n+ Metadata" }
          ]
        }
      ]
    },
    fa: {
      title: "یک فایل چطور در Tika پردازش می‌شود",
      stages: [
        {
          label: "۱. parse یک فایل تکی (embedded یا CLI)",
          items: [
            { text: "فایل ورودی\n(هر فرمتی)" },
            { text: "Detector\n(نوع MIME)" },
            { text: "AutoDetectParser", accent: true },
            { text: "Parser مخصوص\nهمان فرمت" },
            { text: "متن\n(یا XHTML)" },
            { text: "Metadata", data: true }
          ]
        },
        {
          label: "۲. استفاده از Tika Server (REST API)",
          items: [
            { text: "کلاینت\n(هر زبانی)" },
            { text: "HTTP PUT\n/tika", data: true },
            { text: "Tika Server", accent: true },
            { text: "متن استخراج‌شده\n+ Metadata" }
          ]
        }
      ]
    }
  }
];
