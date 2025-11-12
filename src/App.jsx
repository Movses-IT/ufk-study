import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";
import UFKLogo from './assets/UFK.png';


// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      results: "Achievements",
      courses: "Courses",
      testimonials: "Reviews",
      contact: "Contact",
    },
    hero: {
      title: "Learn. Grow. Succeed with UFK Study",
      subtitle:
        "UFK Study — an international educational platform where discipline, innovation, and knowledge lead to real success.",
      cta: "Start Learning",
    },
    about: {
      title: "About UFK Study",
      description:
        "UFK Study helps students unlock their full potential through practical education and modern technology. Our mission is to create disciplined, confident, and skilled professionals ready for the future.",
      mission:
        "We believe education should be more than theory — it should be a path to real results, self-growth, and global opportunities.",
    },
    results: {
      title: "Our Achievements",
      students: "Active Students",
      success: "Success Rate",
      courses: "Completed Courses",
      satisfaction: "Student Satisfaction",
    },
    coursesSection: {
      title: "Our Courses",
      subtitle:
        "Modern and career-oriented programs that help you grow faster and achieve your goals",
      readMore: "Explore",
    },
    testimonialsSection: {
      title: "What Our Students Say",
      subtitle:
        "Real feedback from learners who built their future with UFK Study",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Have a question or want to start learning? Get in touch with our team today.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      info: "Contact Information",
      address: "123 Education Street, Learning City, LC 12345",
      phone: "+374 033003024",
      emailLabel: "ufkcompanystudy@gmail.com",
    },
    footer: {
      copyright: "© 2025 UFK Study. All rights reserved.",
      tagline: "Education. Discipline. Success.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      results: "Достижения",
      courses: "Курсы",
      testimonials: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      title: "Учись. Развивайся. Добивайся успеха с UFK Study",
      subtitle:
        "UFK Study — международная образовательная платформа, где дисциплина, инновации и знания ведут к реальным результатам.",
      cta: "Начать обучение",
    },
    about: {
      title: "О компании UFK Study",
      description:
        "UFK Study помогает студентам раскрывать свой потенциал через практическое образование и современные технологии. Мы создаем среду, где формируются уверенные, дисциплинированные и успешные личности.",
      mission:
        "Мы верим, что образование — это не просто теория, а путь к личному росту, уверенности и глобальным возможностям.",
    },
    results: {
      title: "Наши достижения",
      students: "Активные студенты",
      success: "Процент успеха",
      courses: "Пройдено курсов",
      satisfaction: "Удовлетворённость студентов",
    },
    coursesSection: {
      title: "Наши курсы",
      subtitle:
        "Современные и практические программы, направленные на развитие навыков и ускорение вашего роста",
      readMore: "Подробнее",
    },
    testimonialsSection: {
      title: "Отзывы студентов",
      subtitle: "Реальные истории успеха с UFK Study",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Задайте вопрос или начните обучение уже сегодня — мы всегда на связи.",
      name: "Ваше имя",
      email: "Ваш Email",
      message: "Ваше сообщение",
      send: "Отправить",
      info: "Контактная информация",
      address: "ул. Образования 123, Город Знаний, 12345",
      phone: "+374 033003024",
      emailLabel: "ufkcompanystudy@gmail.com",
    },
    footer: {
      copyright: "© 2025 UFK Study. Все права защищены.",
      tagline: "Образование. Дисциплина. Успех.",
    },
  },
  hy: {
    nav: {
      home: "Գլխավոր",
      about: "Մեր մասին",
      results: "Ձեռքբերումներ",
      courses: "Դասընթացներ",
      testimonials: "Կարծիքներ",
      contact: "Կապ",
    },
    hero: {
      title: "Սովորիր․ Զարգացիր․ Հասիր հաջողության UFK Study-ի հետ",
      subtitle:
        "UFK Study — միջազգային կրթական հարթակ, որտեղ կարգապահությունը, նորարարությունը և գիտելիքը տանում են իրական հաջողության։",
      cta: "Սկսել ուսուցումը",
    },
    about: {
      title: "UFK Study-ի մասին",
      description:
        "UFK Study-ն օգնում է ուսանողներին բացահայտել իրենց ներուժը՝ առաջարկելով գործնական և ժամանակակից կրթություն։ Մենք ձգտում ենք ձևավորել ինքնավստահ, կարգապահ և հաջողակ անհատներ։",
      mission:
        "Մեր նպատակն է կրթությունը դարձնել ոչ միայն գիտելիք, այլ նաև իրական արդյունքների, անձնական աճի և գլոբալ հնարավորությունների ուղի։",
    },
    results: {
      title: "Մեր ձեռքբերումները",
      students: "Ակտիվ ուսանողներ",
      success: "Հաջողության տոկոս",
      courses: "Ավարտված դասընթացներ",
      satisfaction: "Ուսանողների բավարարվածություն",
    },
    coursesSection: {
      title: "Մեր դասընթացները",
      subtitle:
        "Ժամանակակից և մասնագիտական ծրագրեր՝ ձեր աճն արագացնելու և հմտությունները զարգացնելու համար",
      readMore: "Տեսնել ավելին",
    },
    testimonialsSection: {
      title: "Ուսանողների կարծիքները",
      subtitle: "Իրական պատմություններ UFK Study-ի հաջողության ճանապարհից",
    },
    contact: {
      title: "Կապվեք մեզ հետ",
      subtitle:
        "Ունե՞ք հարցեր կամ ցանկանում եք սկսել ուսուցումը։ Մենք միշտ պատրաստ ենք օգնելու։",
      name: "Ձեր անունը",
      email: "Ձեր էլ. հասցեն",
      message: "Ձեր հաղորդագրությունը",
      send: "Ուղարկել",
      info: "Կապի տվյալներ",
      address: "Կրթության փողոց 123, Գիտելիքների քաղաք, 12345",
      phone: "+374 033003024",
      emailLabel: "ufkcompanystudy@gmail.com",
    },
    footer: {
      copyright: "© 2025 UFK Study. Բոլոր իրավունքները պաշտպանված են։",
      tagline: "Կրթություն․ Կարգապահություն․ Հաջողություն։",
    },
  },
};


// Courses
const coursesData = [
  {
    id: 1,
    title: { en: "Web Development", ru: "Веб-разработка", hy: "Վեբ ծրագրավորում" },
    description: {
      en: "Build real projects and master modern technologies like HTML, CSS, JavaScript, and React.",
      ru: "Создавайте реальные проекты и осваивайте современные технологии: HTML, CSS, JavaScript и React.",
      hy: "Կառուցեք իրական նախագծեր և տիրապետեք ժամանակակից տեխնոլոգիաներին՝ HTML, CSS, JavaScript և React։",
    },
  },
  {
    id: 2,
    title: { en: "Cybersecurity", ru: "Кибербезопасность", hy: "Կիբերանվտանգություն" },
    description: {
      en: "Learn how to protect systems, networks, and data from cyber threats.",
      ru: "Научитесь защищать системы, сети и данные от киберугроз.",
      hy: "Սովորեք պաշտպանել համակարգերը, ցանցերը և տվյալները կիբերվտանգներից։",
    },
  },
  {
    id: 3,
    title: {
      en: "Free Career Consultations",
      ru: "Бесплатные консультации по профессии",
      hy: "Անվճար մասնագիտական խորհրդատվություններ",
    },
    description: {
      en: "Get personalized guidance to find a career you truly enjoy and suits your passion.",
      ru: "Получите персональные рекомендации, чтобы найти профессию по душе и интересам.",
      hy: "Ստացեք անհատական խորհրդատվություն՝ գտնելու այն մասնագիտությունը, որը իսկապես ձեզ համար է։",
    },
  },
];


// Отзывы студентов
// const testimonialsData = [
//   {
//     id: 1,
//     name: "Anna Petrosyan",
//     role: { en: "Web Developer", ru: "Веб-разработчик", hy: "Վեբ ծրագրավորող" },
//     text: {
//       en: "UFK Study gave me confidence and practical skills. The learning approach is structured and focused on real results.",
//       ru: "UFK Study дал мне уверенность и практические навыки. Подход к обучению чёткий и направлен на реальные результаты.",
//       hy: "UFK Study-ն ինձ տվեց վստահություն և գործնական հմտություններ։ Ուսուցման մոտեցումը կառուցված է իրական արդյունքների վրա։",
//     },
//     avatar: "AP",
//   },
//   {
//     id: 2,
//     name: "David Martirosyan",
//     role: {
//       en: "Data Analyst",
//       ru: "Аналитик данных",
//       hy: "Տվյալների վերլուծաբան",
//     },
//     text: {
//       en: "A professional and inspiring environment. I built a strong foundation for my career.",
//       ru: "Профессиональная и вдохновляющая среда. Я получил прочную основу для своей карьеры.",
//       hy: "Պրոֆեսիոնալ և ոգեշնչող միջավայր։ Ես կառուցեցի ամուր հիմք իմ կարիերայի համար։",
//     },
//     avatar: "DM",
//   },
//   {
//     id: 3,
//     name: "Maria Grigoryan",
//     role: {
//       en: "Marketing Specialist",
//       ru: "Маркетолог",
//       hy: "Մարքեթինգի մասնագետ",
//     },
//     text: {
//       en: "High-quality education with real value. UFK Study helped me think strategically and act confidently.",
//       ru: "Качественное образование с реальной пользой. UFK Study помог мне мыслить стратегически и действовать уверенно.",
//       hy: "Որակյալ կրթություն՝ իրական արժեքով։ UFK Study-ն օգնեց ինձ մտածել ռազմավարական և գործել վստահորեն։",
//     },
//     avatar: "MG",
//   },
// ];

const useCounter = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldStart) return;
    let startTime, animationFrame;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);
  return count;
};

const useInView = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return [ref, isInView];
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(0);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resultsRef, resultsInView] = useInView();

  const t = translations[language];
  const studentCount = useCounter(10, 2000, resultsInView);
  const successRate = useCounter(98, 2000, resultsInView);
  const coursesComplete = useCounter(2, 2000, resultsInView);
  const satisfaction = useCounter(99, 2000, resultsInView);

  const nextCourse = () =>
    setCurrentCourse((prev) => (prev + 1) % coursesData.length);
  const prevCourse = () =>
    setCurrentCourse(
      (prev) => (prev - 1 + coursesData.length) % coursesData.length
    );
  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("https://formspree.io/f/xrbrgoke", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  if (response.ok) {
  setNotification({ message: "Message sent successfully!", type: "success" });
  setFormData({ name: "", email: "", message: "" });
} else {
  setNotification({ message: "Failed to send message.", type: "error" });
}

  } catch (error) {
    alert("Error: " + error.message);
  }
};


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const colors = {
    bg: darkMode ? "#111827" : "#ffffff",
    bgAlt: darkMode ? "#1f2937" : "#f9fafb",
    text: darkMode ? "#f9fafb" : "#1f2937",
    textSecondary: darkMode ? "#d1d5db" : "#4b5563",
    border: darkMode ? "#374151" : "#f5f5f5",
    card: darkMode ? "#1f2937" : "#ffffff",

    heroGradient: darkMode
      ? "linear-gradient(135deg, #0c1a2b 0%, #17203a 50%, #0c1a2b 100%)" 
      : "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 50%, #d1d5db 100%)", 

    sectionGradient: darkMode
      ? "linear-gradient(135deg, #111827 0%, #1b2738 100%)"
      : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)", 
  };

  return (
    <div
      className="min-h-screen transition-all duration-500"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <header
        className="fixed top-0 w-full backdrop-blur-md shadow-lg z-50 transition-all duration-500"
        style={{
          backgroundColor: darkMode
            ? "rgba(31, 41, 55, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
        }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-linear-to-br from-[#004aad] to-[#3cb371] bg-clip-text text-transparent ml-4">
              UFK STUDY
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "results",
                "courses",
                // "testimonials",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="hover:text-orange-500 transition-colors"
                  style={{ color: colors.textSecondary }}
                >
                  {t.nav[section]}
                </button>
              ))}

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent rounded-xl px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#044aad] transition-all"
                style={{
                  border: `1px solid ${colors.border}`,
                  color: colors.textSecondary,
                }}
              >
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="hy">HY</option>
              </select>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-linear-to-br from-[#004aad] to-[#3cb371] text-white hover:bg-linear-to-br hover:from-[#004aad] hover:to-[#3cb371] transition-all transform hover:scale-110 shadow-lg"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-[#004aad]/60 text-sm font-medium rounded-xl px-3 py-1.5 text-white hover:border-[#004aad] focus:outline-none focus:ring-2 focus:ring-[#004aad] transition-all duration-300 cursor-pointer"
              >
                <option value="en" className="text-gray-900">
                  EN
                </option>
                <option value="ru" className="text-gray-900">
                  RU
                </option>
                <option value="hy" className="text-gray-900">
                  HY
                </option>
              </select>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-linear-to-tr from-[#004aad] to-[#3cb371] text-white shadow-lg"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ color: colors.textSecondary }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {[
                "home",
                "about",
                "results",
                "courses",
                // "testimonials",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 hover:text-orange-500 transition-colors"
                  style={{ color: colors.textSecondary }}
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="pt-24 pb-20 transition-all duration-500"
        style={{ background: colors.heroGradient }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-br from-[#004aad] via-[#3cb371] to-[#3cb371] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl mb-8" style={{ color: colors.textSecondary }}>
              {t.hero.subtitle}
            </p>
            <a href="https://www.instagram.com/ufkstudy/" target="_blank" rel="noopener noreferrer">
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 bg-linear-to-br from-[#004aad] to-[#3cb371] text-white rounded-2xl font-semibold hover:from-[#004aad] hover:to-[#3cb371] transition-all transform hover:scale-105 shadow-xl"
            >
              {t.hero.cta}
            </button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-20 transition-all duration-500"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-linear-to-br from-[#004aad] to-[#3cb371] bg-clip-text text-transparent">
                  {t.about.title}
                </h2>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {t.about.description}
                </p>
                <p
                  className="leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {t.about.mission}
                </p>
              </div>

              {/* Image section */}
              <div className="relative">
                <div
                  className="w-full h-80 md:h-96 rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    background: darkMode
                      ? "linear-gradient(135deg, #7c2d12 0%, #be123c 100%)"
                      : "linear-gradient(135deg, #fed7aa 0%, #fbcfe8 100%)",
                  }}
                >
                  <img
                    src={UFKLogo}
                    alt="UFK Study"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="results"
        ref={resultsRef}
        className="py-20 transition-all duration-500"
        style={{ background: colors.sectionGradient }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-br from-[#004aad] to-[#3cb371] bg-clip-text text-transparent">
              {t.results.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  count: studentCount,
                  suffix: "+",
                  color: "#f97316",
                  label: t.results.students,
                },
                {
                  count: successRate,
                  suffix: "%",
                  color: "#ec4899",
                  label: t.results.success,
                },
                {
                  count: coursesComplete,
                  suffix: "+",
                  color: "#a855f7",
                  label: t.results.courses,
                },
                {
                  count: satisfaction,
                  suffix: "%",
                  color: "#eab308",
                  label: t.results.satisfaction,
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 shadow-xl text-center transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: colors.card }}
                >
                  <div
                    className="text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.count.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div style={{ color: colors.textSecondary }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 
      

      <section
        id="courses"
        className="py-20 transition-all duration-500"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-[#004aad] to-[#3cb371] bg-clip-text text-transparent">
                {t.coursesSection.title}
              </h2>
              <p style={{ color: colors.textSecondary }}>
                {t.coursesSection.subtitle}
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentCourse * 100}%)` }}
                >
                  {coursesData.map((course) => (
                    <div key={course.id} className="w-full shrink-0 px-4">
                      <div
                        className="rounded-2xl p-8 shadow-xl h-64 flex flex-col justify-between"
                        style={{
                          background: darkMode
                            ? "linear-gradient(135deg, #374151 0%, #1f2937 100%)" // тёмный градиент
                            : "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)", // мягкий светлый серо-белый градиент
                        }}
                      >
                        <div>
                          <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: colors.text }}
                          >
                            {course.title[language]}
                          </h3>
                          <p style={{ color: colors.textSecondary }}>
                            {course.description[language]}
                          </p>
                        </div>
                        <a href="https://www.instagram.com/ufkstudy/" target="_blank" rel="noopener noreferrer">
                        <button className="px-6 py-3 bg-linear-to-br from-[#004aad] to-[#3cb371] text-white rounded-xl font-semibold hover:from-[#004aad] hover:to-[#3cb371] transition-all transform hover:scale-105 w-fit shadow-lg">
                          {t.coursesSection.readMore}
                        </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevCourse}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.card }}
              >
                <ChevronLeft style={{ color: "#3cb371" }} size={24} />
              </button>

              <button
                onClick={nextCourse}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.card }}
              >
                <ChevronRight style={{ color: "#3cb371" }} size={24} />
              </button>

              <div className="flex justify-center mt-6 space-x-2">
                {coursesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCourse(index)}
                    className="rounded-full transition-all"
                    style={{
                      width: index === currentCourse ? "32px" : "12px",
                      height: "12px",
                      backgroundColor:
                        index === currentCourse ? "#3cb371" : colors.border,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        id="testimonials"
        className="py-20 transition-all duration-500"
        style={{ background: colors.sectionGradient }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-[#004aad] to-[#3cb371] bg-clip-text text-transparent">
                {t.testimonialsSection.title}
              </h2>
              <p style={{ color: colors.textSecondary }}>
                {t.testimonialsSection.subtitle}
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}
                >
                  {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="w-full shrink-0 px-4">
                      <div
                        className="rounded-2xl p-8 shadow-xl"
                        style={{ backgroundColor: colors.card }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-linear-to-br from-[#004aad] to-[#3cb371] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4
                              className="font-bold text-lg"
                              style={{ color: colors.text }}
                            >
                              {testimonial.name}
                            </h4>
                            <p style={{ color: colors.textSecondary }}>
                              {testimonial.role[language]}
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-lg leading-relaxed italic"
                          style={{ color: colors.textSecondary }}
                        >
                          "{testimonial.text[language]}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.card }}
              >
                <ChevronLeft style={{ color: "#3cb371" }} size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                style={{ backgroundColor: colors.card }}
              >
                <ChevronRight style={{ color: "#3cb371" }} size={24} />
              </button>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className="rounded-full transition-all"
                    style={{
                      width: index === currentTestimonial ? "32px" : "12px",
                      height: "12px",
                      backgroundColor:
                        index === currentTestimonial
                          ? "#3cb371"
                          : colors.border,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
{notification.message && (
  <div
    className={`fixed top-5 right-5 z-60 px-6 py-4 rounded-xl shadow-lg text-white transition-all duration-500 transform ${
      notification.type === "success" ? "bg-green-500" : "bg-red-500"
    } ${notification.message ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
  >
    {notification.message}
    <button
      className="ml-4 font-bold"
      onClick={() => setNotification({ message: "", type: "" })}
    >
      ×
    </button>
  </div>
)}

      <section
        id="contact"
        className="py-20 transition-all duration-500"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-linear-to-br from-[#004aad] to-[#3cb371] bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p style={{ color: colors.textSecondary }}>
                {t.contact.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-[#004aad] transition-all outline-none"
                      style={{
                        backgroundColor: colors.bgAlt,
                        color: colors.text,
                      }}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t.contact.email}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-[#004aad] transition-all outline-none"
                      style={{
                        backgroundColor: colors.bgAlt,
                        color: colors.text,
                      }}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={t.contact.message}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows="5"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-transparent focus:border-[#004aad] transition-all outline-none resize-none"
                      style={{
                        backgroundColor: colors.bgAlt,
                        color: colors.text,
                      }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-linear-to-br from-[#004aad] to-[#3cb371] text-white rounded-2xl font-semibold hover:from-[#004aad] hover:to-[#3cb371] transition-all transform hover:scale-105 shadow-xl"
                  >
                    {t.contact.send}
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: colors.text }}
                  >
                    {t.contact.info}
                  </h3>
                  <div className="space-y-4">
                    {/* <div className="flex items-start space-x-4">
                      <div className="bg-linear-to-br from-[#004aad] to-[#3cb371] p-3 rounded-xl shadow-lg">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: colors.text }}
                        >
                          Address
                        </h4>
                        <p style={{ color: colors.textSecondary }}>
                          {t.contact.address}
                        </p>
                      </div>
                    </div> */}

                    <div className="flex flex-col space-y-4">
                      <div className="flex items-start space-x-4">
                        <a href={`tel:${t.contact.phone}`}>
                          <div className="bg-linear-to-br from-[#004aad] to-[#3cb371] p-3 rounded-xl hover:scale-110 transition-transform shadow-lg">
                            <Phone className="text-white" size={24} />
                          </div>
                        </a>
                        <div>
                          <h4
                            className="font-semibold mb-1"
                            style={{ color: colors.text }}
                          >
                            Phone
                          </h4>
                          <a
                            href={`tel:${t.contact.phone}`}
                            style={{
                              color: colors.textSecondary,
                              textDecoration: "none",
                            }}
                          >
                            {t.contact.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <a href={`mailto:${t.contact.emailLabel}`}>
                          <div className="bg-linear-to-br from-[#004aad] to-[#3cb371] p-3 rounded-xl hover:scale-110 transition-transform shadow-lg">
                            <Mail className="text-white" size={24} />
                          </div>
                        </a>
                        <div>
                          <h4
                            className="font-semibold mb-1"
                            style={{ color: colors.text }}
                          >
                            Email
                          </h4>
                          <a
                            href={`mailto:${t.contact.emailLabel}`}
                            style={{
                              color: colors.textSecondary,
                              textDecoration: "none",
                            }}
                          >
                            {t.contact.emailLabel}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4
                    className="font-semibold mb-4"
                    style={{ color: colors.text }}
                  >
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/19tkozNiiN/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-linear-to-br from-[#004aad] to-[#3cb371] p-3 rounded-xl hover:scale-110 transition-transform shadow-lg"
                    >
                      <Facebook className="text-white" size={24} />
                    </a>
                    <a
                      href="https://www.instagram.com/ufkstudy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-linear-to-br from-[#004aad] to-[#3cb371] p-3 rounded-xl hover:scale-110 transition-transform shadow-lg"
                    >
                      <Instagram className="text-white" size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: darkMode
            ? colors.heroGradient // градиент для тёмного режима
            : "#004aad", // синий однотонный для светлого
        }}
        className="text-white py-12 transition-all duration-500"
      >
        {" "}
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold mb-2">UFK Study</div>
                <p className="text-orange-100">{t.footer.tagline}</p>
              </div>

              <div className="flex space-x-6">
                <a href="https://www.facebook.com/share/19tkozNiiN/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <Facebook size={28} />
                </a>
                <a href="https://www.instagram.com/ufkstudy/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                  <Instagram size={28} />
                </a>
              </div>
            </div>

            <div
              className="border-t-2 mt-8 pt-8 text-center text-orange-100"
              style={{ borderColor: "#3cb371" }}
            >
              {" "}
              {t.footer.copyright}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s backwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          transition-property: background-color, border-color, color;
          transition-duration: 500ms;
        }
      `}</style>
    </div>
  );
};

export default App;
