// AlphaAcademy — Python for Finance — lesson content
//
// To add a new lesson, just append a new object to this LESSONS array
// (don't forget the comma after the previous lesson's closing "}").
// The HTML file reads this array automatically — no other changes needed.
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
      text: "Python has become the programming language of choice for data driven and AI first finance. Some of the largest investment banks and hedge funds now use Python and its ecosystem for building core trading and risk management systems. In the second edition of this guide, Yves Hilpisch shows developers and quantitative analysts how to use Python packages and tools for financial data science, algorithmic trading, and computational finance."
    },
    fa: {
      text: "پایتون به زبان برنامه‌نویسی منتخب برای مالی داده‌محور و مبتنی بر هوش مصنوعی تبدیل شده است. برخی از بزرگ‌ترین بانک‌های سرمایه‌گذاری و صندوق‌های پوشش ریسک اکنون از پایتون و اکوسیستم آن برای ساخت سیستم‌های اصلی معاملاتی و مدیریت ریسک استفاده می‌کنند. ایوز هیلپیش در ویرایش دوم این راهنما نشان می‌دهد که چگونه توسعه‌دهندگان و تحلیل‌گران کمّی می‌توانند از پکیج‌ها و ابزارهای پایتون برای علم داده مالی، معاملات الگوریتمی و مالی محاسباتی استفاده کنند."
    }
  },
  {
    type: "list",
    en: {
      lead: "Python and finance: get started with Python for interactive financial analytics and application development.",
      items: [
        { title: "Mastering the basics", desc: "Learn Python data types and structures, NumPy, pandas and its DataFrame class, and object-oriented programming." },
        { title: "Financial data science", desc: "Explore Python techniques and packages for financial time series data, I/O operations, stochastics, and machine learning." },
        { title: "Algorithmic trading", desc: "Use Python for backtesting and deploying automated algorithmic trading strategies." },
        { title: "Derivatives analytics", desc: "Develop a flexible and powerful Python package for options and derivatives pricing and risk management." }
      ]
    },
    fa: {
      lead: "پایتون و مالی: شروع کار با پایتون برای تحلیل مالی تعاملی و توسعه‌ی اپلیکیشن.",
      items: [
        { title: "تسلط بر مبانی", desc: "یادگیری انواع و ساختارهای داده در پایتون، NumPy، pandas و کلاس DataFrame آن، و برنامه‌نویسی شی‌گرا." },
        { title: "علم داده مالی", desc: "بررسی تکنیک‌ها و پکیج‌های پایتون برای داده‌های سری زمانی مالی، عملیات ورودی و خروجی، فرآیندهای تصادفی و یادگیری ماشین." },
        { title: "معاملات الگوریتمی", desc: "استفاده از پایتون برای بک‌تست و پیاده‌سازی استراتژی‌های معاملاتی الگوریتمی خودکار." },
        { title: "تحلیل ابزارهای مشتقه", desc: "توسعه‌ی یک پکیج پایتون انعطاف‌پذیر و قدرتمند برای قیمت‌گذاری اختیار معامله، ابزارهای مشتقه و مدیریت ریسک." }
      ]
    }
  },
  {
    type: "paragraph",
    en: {
      text: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed."
    },
    fa: {
      text: "پایتون یک زبان برنامه‌نویسی تفسیری، شی‌گرا و سطح بالا با معناشناسی پویا است. ساختارهای داده‌ی سطح بالای درونی آن، همراه با تایپینگ پویا و بایندینگ پویا، آن را برای توسعه‌ی سریع اپلیکیشن (RAD) و همچنین استفاده به‌عنوان یک زبان اسکریپت‌نویسی یا اتصال‌دهنده برای پیوند دادن اجزای موجود به یکدیگر، بسیار جذاب می‌سازد. نحو ساده و آسان‌فهم پایتون بر خوانایی تأکید دارد و در نتیجه هزینه‌ی نگهداری برنامه را کاهش می‌دهد. پایتون از ماژول‌ها و پکیج‌ها پشتیبانی می‌کند که ماژولار بودن برنامه و استفاده‌ی مجدد از کد را تشویق می‌کند. مفسر پایتون و کتابخانه‌ی استاندارد گسترده‌ی آن به‌صورت سورس یا باینری برای همه‌ی پلتفرم‌های اصلی به‌صورت رایگان در دسترس است و می‌توان آن را آزادانه توزیع کرد."
    }
  }
];