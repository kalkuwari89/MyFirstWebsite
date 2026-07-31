// ==========================================================
// 1. MOBILE MENU TOGGLE
// Clicking the hamburger button adds/removes the "open" class,
// which style.css uses to slide the menu in and animate the icon.
// ==========================================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

// Close the mobile menu automatically after clicking a link,
// so the menu doesn't stay open once the page has scrolled.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});

// ==========================================================
// 2. LANGUAGE SWITCHER (English / Arabic)
// The actual <html lang> and <html dir> attributes are already set by the
// inline script in index.html's <head> (it runs first to avoid a flash of
// the wrong language). Here we translate the text: every element carrying
// a data-i18n="key" attribute gets its content replaced using the
// dictionary below, and data-i18n-placeholder does the same for input
// placeholders. dir="rtl" (set automatically for Arabic) is what flips
// the whole layout mirror-image — the CSS needs almost no extra rules.
// ==========================================================
const translations = {
  en: {
    name: "Khalfan",
    nav_home: "Home",
    nav_about: "About",
    nav_goals: "Goals",
    nav_interests: "Interests",
    nav_contact: "Contact",
    hero_greeting: "Hello, I'm",
    hero_tagline: "Learning to Code &middot; AI Enthusiast &middot; Real Madrid Fan",
    hero_cta: "Learn More About Me",
    about_title: "About Me",
    about_p1: "Hi! I'm <strong>Khalfan</strong>. I love travelling with my family, watching Real Madrid, learning about AI, and improving my English.",
    about_p2: "I'm currently learning programming with Claude Code, and this website is one of the first steps on that journey.",
    skill_travel: "Travelling",
    skill_madrid: "Real Madrid",
    skill_football: "Football",
    skill_ai: "AI",
    skill_english: "English",
    skill_claude: "Claude Code",
    goals_title: "My Goals",
    goals_subtitle: "A few things I'm working towards.",
    goal1_title: "Master Programming",
    goal1_desc: "Build real projects using Claude Code and grow as a developer.",
    goal2_title: "Improve My English",
    goal2_desc: "Practice every day until I can speak and write fluently.",
    goal3_title: "Learn AI",
    goal3_desc: "Dive deeper into artificial intelligence and how it works.",
    goal4_title: "Travel More",
    goal4_desc: "Explore new places with my family and create memories.",
    interests_title: "My Interests",
    interests_subtitle: "Things I love outside of code.",
    interest1_title: "Football",
    interest1_desc: "I enjoy watching Real Madrid and learning about football tactics.",
    contact_title: "Contact Me",
    contact_subtitle: "Have a question or just want to say hi? Send me a message below.",
    label_name: "Name",
    label_email: "Email",
    label_message: "Message",
    placeholder_name: "Your name",
    placeholder_message: "Write your message here...",
    btn_send: "Send Message",
    footer_rights: "All rights reserved.",
    form_error: "Please fill in every field before sending.",
    form_success: "Thanks, {name}! Your message has been received.",
  },
  ar: {
    name: "خلفان",
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_goals: "أهدافي",
    nav_interests: "اهتمامات",
    nav_contact: "تواصل",
    hero_greeting: "مرحباً، أنا",
    hero_tagline: "أتعلّم البرمجة &middot; شغوف بالذكاء الاصطناعي &middot; مشجع ريال مدريد",
    hero_cta: "اعرف المزيد عني",
    about_title: "نبذة عني",
    about_p1: "مرحباً! أنا <strong>خلفان</strong>. أحب السفر مع عائلتي، ومشاهدة ريال مدريد، وتعلّم الذكاء الاصطناعي، وتحسين لغتي الإنجليزية.",
    about_p2: "أتعلّم حالياً البرمجة باستخدام Claude Code، وهذا الموقع هو أولى خطواتي في هذه الرحلة.",
    skill_travel: "السفر",
    skill_madrid: "ريال مدريد",
    skill_football: "كرة القدم",
    skill_ai: "الذكاء الاصطناعي",
    skill_english: "اللغة الإنجليزية",
    skill_claude: "Claude Code",
    goals_title: "أهدافي",
    goals_subtitle: "بعض الأشياء التي أسعى لتحقيقها.",
    goal1_title: "إتقان البرمجة",
    goal1_desc: "بناء مشاريع حقيقية باستخدام Claude Code والنمو كمطوّر برمجيات.",
    goal2_title: "تحسين لغتي الإنجليزية",
    goal2_desc: "الممارسة يومياً حتى أتمكن من التحدث والكتابة بطلاقة.",
    goal3_title: "تعلّم الذكاء الاصطناعي",
    goal3_desc: "التعمّق أكثر في الذكاء الاصطناعي وكيفية عمله.",
    goal4_title: "السفر أكثر",
    goal4_desc: "استكشاف أماكن جديدة مع عائلتي وصنع ذكريات جميلة.",
    interests_title: "اهتماماتي",
    interests_subtitle: "أشياء أحبها خارج البرمجة.",
    interest1_title: "كرة القدم",
    interest1_desc: "أستمتع بمشاهدة ريال مدريد وتعلّم تكتيكات كرة القدم.",
    contact_title: "تواصل معي",
    contact_subtitle: "لديك سؤال أو تريد فقط أن تقول مرحباً؟ أرسل لي رسالة أدناه.",
    label_name: "الاسم",
    label_email: "البريد الإلكتروني",
    label_message: "الرسالة",
    placeholder_name: "اسمك",
    placeholder_message: "اكتب رسالتك هنا...",
    btn_send: "إرسال الرسالة",
    footer_rights: "جميع الحقوق محفوظة.",
    form_error: "يرجى تعبئة جميع الحقول قبل الإرسال.",
    form_success: "شكراً لك، {name}! تم استلام رسالتك.",
  },
};

const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  const dict = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  langToggle.textContent = lang === "ar" ? "English" : "العربية";
}

const currentLang = document.documentElement.getAttribute("lang") || "en";
applyLanguage(currentLang);

langToggle.addEventListener("click", () => {
  const nextLang = document.documentElement.getAttribute("lang") === "ar" ? "en" : "ar";
  localStorage.setItem("lang", nextLang);
  applyLanguage(nextLang);
});

// ==========================================================
// 3. DARK MODE TOGGLE
// The theme itself is already set on <html data-theme="..."> by the
// small inline script in index.html's <head> (it runs first to avoid
// a flash of the wrong theme). Here we just make the button switch
// it and remember the choice for next time.
// ==========================================================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function updateThemeIcon() {
  themeToggle.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  updateThemeIcon();
});

// ==========================================================
// 4. SCROLL-IN ANIMATIONS
// Any element with the "reveal" class starts hidden (see style.css).
// IntersectionObserver watches the page and tells us the moment each
// one enters the visible part of the screen, so we can add "visible"
// and let the CSS transition play. unobserve() stops the check once
// an element has revealed, since it only needs to happen once.
// ==========================================================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ==========================================================
// 5. CONTACT FORM
// This site has no server, so we can't actually send an email
// from here. Instead we show a friendly confirmation message.
// To make this form really send emails, connect it to a free
// service like Formspree (https://formspree.io) or EmailJS,
// or build a small backend later.
// ==========================================================
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const dict = translations[document.documentElement.getAttribute("lang")];

  if (!name || !email || !message) {
    formStatus.textContent = dict.form_error;
    formStatus.className = "form-status error";
    return;
  }

  // In a real site, this is where you'd send the data to a server.
  console.log("Form submitted:", { name, email, message });

  formStatus.textContent = dict.form_success.replace("{name}", name);
  formStatus.className = "form-status success";
  contactForm.reset();
});

// ==========================================================
// 6. FOOTER YEAR
// Automatically fills in the current year so the copyright
// notice never needs to be updated by hand.
// ==========================================================
document.getElementById("year").textContent = new Date().getFullYear();
