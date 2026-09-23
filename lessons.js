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
  },
  {
    type: "list",
    en: {
      lead: "Key characteristics of Python (part 1):",
      items: [
        { title: "Open source", desc: "Python and the majority of supporting libraries and tools available are open source and generally come with quite flexible and open licenses." },
        { title: "Interpreted", desc: "The reference CPython implementation is an interpreter of the language that translates Python code at runtime to executable byte code." },
        { title: "Multiparadigm", desc: "Python supports different programming and implementation paradigms, such as object orientation and imperative, functional, or procedural programming." },
        { title: "Multipurpose", desc: "Python can be used for rapid, interactive code development as well as for building large applications; it can be used for low-level systems operations as well as for high-level analytics tasks." }
      ]
    },
    fa: {
      lead: "ویژگی‌های کلیدی پایتون (بخش اول):",
      items: [
        { title: "متن‌باز", desc: "پایتون و اکثر کتابخانه‌ها و ابزارهای پشتیبان موجود، متن‌باز هستند و معمولاً با لایسنس‌های نسبتاً انعطاف‌پذیر و باز عرضه می‌شوند." },
        { title: "تفسیری", desc: "پیاده‌سازی مرجع CPython یک مفسر زبان است که کد پایتون را در زمان اجرا به بایت‌کد قابل اجرا ترجمه می‌کند." },
        { title: "چندالگویی", desc: "پایتون از پارادایم‌های مختلف برنامه‌نویسی و پیاده‌سازی، مانند شی‌گرایی و برنامه‌نویسی دستوری، تابعی یا رویه‌ای پشتیبانی می‌کند." },
        { title: "چندمنظوره", desc: "پایتون هم برای توسعه‌ی سریع و تعاملی کد و هم برای ساخت اپلیکیشن‌های بزرگ قابل استفاده است؛ می‌توان از آن برای عملیات سیستمی سطح‌پایین و همچنین تحلیل‌های سطح‌بالا استفاده کرد." }
      ]
    }
  },
  {
    type: "list",
    en: {
      lead: "Key characteristics of Python (part 2):",
      items: [
        { title: "Cross-platform", desc: "Python is available for the most important operating systems, such as Windows, Linux, and macOS. It is used to build desktop as well as web applications, and it can be used on the largest clusters and most powerful servers as well as on such small devices as the Raspberry Pi." },
        { title: "Dynamically typed", desc: "Types in Python are in general inferred at runtime and not statically declared as in most compiled languages." },
        { title: "Indentation aware", desc: "In contrast to the majority of other programming languages, Python uses indentation for marking code blocks instead of parentheses, brackets, or semicolons." },
        { title: "Garbage collecting", desc: "Python has automated garbage collection, avoiding the need for the programmer to manage memory." }
      ]
    },
    fa: {
      lead: "ویژگی‌های کلیدی پایتون (بخش دوم):",
      items: [
        { title: "چندسکویی", desc: "پایتون برای مهم‌ترین سیستم‌عامل‌ها مانند ویندوز، لینوکس و macOS در دسترس است. از آن برای ساخت اپلیکیشن‌های دسکتاپ و وب استفاده می‌شود و می‌توان آن را هم روی بزرگ‌ترین کلاسترها و قدرتمندترین سرورها و هم روی دستگاه‌های کوچکی مانند Raspberry Pi به کار برد." },
        { title: "تایپ پویا", desc: "انواع داده در پایتون معمولاً در زمان اجرا استنتاج می‌شوند و برخلاف بیشتر زبان‌های کامپایلی، به‌صورت استاتیک تعریف نمی‌شوند." },
        { title: "تورفتگی‌محور", desc: "برخلاف اکثر زبان‌های برنامه‌نویسی دیگر، پایتون برای مشخص کردن بلوک‌های کد از تورفتگی استفاده می‌کند، نه پرانتز، براکت یا سمی‌کالن." },
        { title: "جمع‌آوری زباله", desc: "پایتون دارای جمع‌آوری خودکار زباله است و نیازی به مدیریت حافظه توسط برنامه‌نویس ندارد." }
      ]
    }
  },
  {
    type: "paragraph",
    en: {
      text: "Python itself already comes with a large set of packages and modules that enhance the basic interpreter in different directions, known as the Python Standard Library. For example, basic mathematical calculations can be done without any importing, while more specialized mathematical functions need to be imported through the math module."
    },
    fa: {
      text: "پایتون به‌خودی‌خود دارای مجموعه‌ی بزرگی از پکیج‌ها و ماژول‌ها است که مفسر پایه را در جهت‌های مختلف تقویت می‌کنند و به آن‌ها کتابخانه‌ی استاندارد پایتون (Python Standard Library) گفته می‌شود. برای مثال، محاسبات ریاضی ساده بدون نیاز به هیچ importی قابل انجام هستند، در حالی که توابع ریاضی تخصصی‌تر باید از طریق ماژول math وارد (import) شوند."
    }
  },
  {
    type: "paragraph",
    en: {
      text: "The code examples presented so far use interactive Python environments: IPython and Jupyter, respectively. These are probably the most widely used interactive Python environments."
    },
    fa: {
      text: "مثال‌های کدی که تا اینجا ارائه شدند از محیط‌های تعاملی پایتون استفاده می‌کنند: IPython و Jupyter. این‌ها احتمالاً پرکاربردترین محیط‌های تعاملی پایتون هستند."
    }
  },
  {
    type: "paragraph",
    en: {
      text: "IPython originally came in two popular versions: a shell version and a browser-based version (the Notebook). The Notebook variant proved so useful and popular that it evolved into an independent, language-agnostic project now called Jupyter."
    },
    fa: {
      text: "IPython در ابتدا در دو نسخه‌ی محبوب ارائه می‌شد: یک نسخه‌ی شل و یک نسخه‌ی مبتنی بر مرورگر (Notebook). نسخه‌ی Notebook آن‌قدر مفید و محبوب بود که به یک پروژه‌ی مستقل و مستقل از زبان تبدیل شد که امروز Jupyter نام دارد."
    }
  },
  {
    type: "list",
    en: {
      lead: "There is a certain set of packages that is collectively labeled the scientific stack. This stack comprises, among others, the following packages:",
      items: [
        { title: "NumPy", desc: "NumPy provides a multidimensional array object to store homogeneous or heterogeneous data; it also provides optimized functions/methods to operate on this array object." },
        { title: "SciPy", desc: "SciPy is a collection of subpackages and functions implementing important standard functionality often needed in science or finance; for example, one finds functions for cubic splines interpolation as well as for numerical integration." },
        { title: "matplotlib", desc: "This is the most popular plotting and visualization package for Python, providing both 2D and 3D visualization capabilities." },
        { title: "pandas", desc: "pandas builds on NumPy and provides richer classes for the management and analysis of time series and tabular data; it is tightly integrated with matplotlib for plotting and PyTables for data storage and retrieval." },
        { title: "scikit-learn", desc: "scikit-learn is a popular machine learning (ML) package that provides a unified application programming interface (API) for many different ML algorithms, such as for estimation, classification, or clustering." },
        { title: "PyTables", desc: "PyTables is a popular wrapper for the HDF5 data storage package; it is a package to implement optimized, disk-based I/O operations based on a hierarchical database/file format." }
      ]
    },
    fa: {
      lead: "مجموعه‌ای از پکیج‌ها وجود دارد که در مجموع به آن‌ها «استک علمی» (scientific stack) گفته می‌شود. این استک، از جمله، شامل پکیج‌های زیر است:",
      items: [
        { title: "NumPy", desc: "NumPy یک شیء آرایه‌ی چندبعدی برای ذخیره‌ی داده‌های همگن یا ناهمگن ارائه می‌دهد؛ همچنین توابع/متدهای بهینه‌شده‌ای برای کار با این شیء آرایه فراهم می‌کند." },
        { title: "SciPy", desc: "SciPy مجموعه‌ای از زیرپکیج‌ها و توابع است که قابلیت‌های استاندارد مهمی را که اغلب در علم یا مالی مورد نیازند پیاده‌سازی می‌کند؛ برای مثال، توابعی برای درون‌یابی اسپلاین مکعبی و همچنین انتگرال‌گیری عددی در آن یافت می‌شود." },
        { title: "matplotlib", desc: "این محبوب‌ترین پکیج رسم نمودار و بصری‌سازی برای پایتون است که هم قابلیت‌های بصری‌سازی دوبعدی و هم سه‌بعدی را فراهم می‌کند." },
        { title: "pandas", desc: "pandas بر پایه‌ی NumPy ساخته شده و کلاس‌های غنی‌تری برای مدیریت و تحلیل داده‌های سری زمانی و جدولی ارائه می‌دهد؛ این پکیج به‌طور نزدیک با matplotlib برای رسم نمودار و PyTables برای ذخیره و بازیابی داده یکپارچه شده است." },
        { title: "scikit-learn", desc: "scikit-learn یک پکیج محبوب یادگیری ماشین (ML) است که یک رابط برنامه‌نویسی کاربردی (API) یکپارچه برای بسیاری از الگوریتم‌های مختلف ML، مانند تخمین، طبقه‌بندی یا خوشه‌بندی، فراهم می‌کند." },
        { title: "PyTables", desc: "PyTables یک wrapper محبوب برای پکیج ذخیره‌سازی داده‌ی HDF5 است؛ این پکیج برای پیاده‌سازی عملیات ورودی/خروجی بهینه‌شده و دیسک‌محور، بر پایه‌ی یک فرمت پایگاه‌داده/فایل سلسله‌مراتبی، به کار می‌رود." }
      ]
    }
  }
];