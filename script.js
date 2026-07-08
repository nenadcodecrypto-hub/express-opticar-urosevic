const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const languageSwitch = document.querySelector(".language-switch");
const languageButtons = [...document.querySelectorAll("[data-lang-option]")];

const translations = {
  sr: {
    lang: "sr",
    title: "Express Optičar Urošević | Optičarska radnja u Beogradu",
    description:
      "Porodična optičarska radnja u Beogradu od 1984. godine. Dioptrijski i sunčani okviri, dioptrijska stakla, servis naočara i provera dioptrije.",
    menuToggle: "Otvori meni",
    switchLabel: "Izbor jezika",
    items: [],
  },
  en: {
    lang: "en",
    title: "Express Opticar Urosevic | Optical shop in Belgrade",
    description:
      "A family optical shop in Belgrade since 1984. Prescription and sunglasses frames, optical lenses, glasses repair and eyesight checks.",
    menuToggle: "Open menu",
    switchLabel: "Language selection",
    items: [
      ["body .brand", { attr: "aria-label", value: "Express Opticar Urosevic home" }],
      [".brand-logo--light", { attr: "alt", value: "Express Opticar Urosevic" }],
      [".main-nav", { attr: "aria-label", value: "Main navigation" }],
      [".main-nav a:nth-child(1)", "About us"],
      [".main-nav a:nth-child(2)", "Glasses repair"],
      [".main-nav a:nth-child(3)", "Frames"],
      [".main-nav a:nth-child(4)", "Prescription lenses"],
      [".main-nav a:nth-child(5)", "Lens fitting"],
      [".main-nav a:nth-child(6)", "Contact lenses"],
      [".main-nav a:nth-child(7)", "Eye test"],
      [".main-nav a:nth-child(8)", "Contact"],
      [".hero", { attr: "aria-label", value: "Introduction" }],
      [".hero-kicker", "Family optical shop in Belgrade"],
      [".hero h1", "Traditional optics, a modern view."],
      [
        ".hero-content > p",
        "Since 1984, we have nurtured craft precision, trust and an individual approach when choosing frames, lenses and glasses repair.",
      ],
      [".hero-proof", { attr: "aria-label", value: "Quick information" }],
      [".hero-proof div:nth-child(1) dd", "year founded"],
      [".hero-proof div:nth-child(2) dd", "years of experience"],
      [".hero-proof div:nth-child(3) dt", "Locations"],
      [".hero-proof div:nth-child(3) dd", "Bulevar kralja Aleksandra 305 and 297"],
      [".hero-visual img", { attr: "alt", value: "Shopfront and entrance to Express Opticar Urosevic" }],
      [".intro-grid h2", "More than four decades of expertise, trust and careful work."],
      [
        ".intro-copy p:nth-child(1)",
        "Our family optical shop has been operating since 1984, preserving a tradition of skilled craft, expertise and the trust we have built with our clients for more than four decades.",
      ],
      [
        ".intro-copy p:nth-child(2)",
        "Through years of experience, we aim to give every customer an individual approach, quality service and the best solution for their needs.",
      ],
      [".intro-icons", { attr: "aria-label", value: "Main services" }],
      [".intro-icons a:nth-child(1) strong", "Glasses repair"],
      [".intro-icons a:nth-child(2) strong", "Frames"],
      [".intro-icons a:nth-child(3) strong", "Prescription lenses"],
      [".intro-icons a:nth-child(4) strong", "Lens fitting"],
      [".intro-icons a:nth-child(5) strong", "Contact lenses"],
      [".intro-icons a:nth-child(6) strong", "Eye test"],
      [".services-band", { attr: "aria-label", value: "Services" }],
      [".repair-tabs-section", { attr: "aria-label", value: "Glasses repair tabs" }],
      [".repair-tabs-heading h3", "Repairs, adjustments and precise interventions."],
      [
        ".repair-tabs-heading p",
        "We provide all types of glasses repair and servicing, regardless of frame type or model. Many repairs are completed quickly and efficiently.",
      ],
      [".repair-tab-list", { attr: "aria-label", value: "Types of glasses repairs" }],
      ["#tab-lemljenje", "Welding and micro-welding"],
      ["#tab-delovi", "Parts replacement"],
      ["#tab-centriranje", "Frame adjustment and centering"],
      ["#tab-intervencije", "Larger interventions"],
      [
        "#panel-centriranje img",
        { attr: "alt", value: "Frame adjustment and centering on an optician's workbench" },
      ],
      ["#panel-centriranje h3", "Frame adjustment and centering"],
      [
        "#panel-centriranje p",
        "Frames should sit securely, but without pressure. We adjust the width, angle, temples and nose position so the glasses follow the face and allow a natural lens position.",
      ],
      ["#panel-centriranje li:nth-child(1)", "Frame centering to the face"],
      ["#panel-centriranje li:nth-child(2)", "Temple and bridge adjustment"],
      ["#panel-centriranje li:nth-child(3)", "Comfort during longer wear"],
      ["#panel-delovi img", { attr: "alt", value: "Spare parts for glasses repair" }],
      ["#panel-delovi h3", "Parts replacement"],
      [
        "#panel-delovi p",
        "When glasses loosen, the cause is often small parts: screws, nose pads, pad arms, hinges or temple tips. We replace damaged and worn parts, check frame stability and assess whether the glasses can safely continue to be used.",
      ],
      ["#panel-delovi li:nth-child(1)", "Tightening and replacing screws"],
      ["#panel-delovi li:nth-child(2)", "Replacing nose pads and silicone pads"],
      ["#panel-delovi li:nth-child(3)", "Hinges, temple tips and smaller spare parts"],
      ["#panel-delovi li:nth-child(4)", "Replacing spring hinges on temples"],
      ["#panel-delovi li:nth-child(5)", "Checking frame stability after intervention"],
      ["#panel-lemljenje img", { attr: "alt", value: "Welding and micro-welding a metal frame" }],
      ["#panel-lemljenje h3", "Frame welding and micro-welding"],
      [
        "#panel-lemljenje p",
        "Metal frames require a careful approach, especially around joints, the bridge or temples. We perform micro-welding on titanium frames and precise interventions on delicate metal parts. Before work begins, we check the material and damage so we can assess whether the repair can be strong, neat and long-lasting.",
      ],
      ["#panel-lemljenje li:nth-child(1)", "Welding joints on metal and titanium frames"],
      ["#panel-lemljenje li:nth-child(2)", "Precise work while protecting the lenses"],
      ["#panel-lemljenje li:nth-child(3)", "Advice when replacing the frame is the better option"],
      [
        "#panel-intervencije img",
        { attr: "alt", value: "Optician inspecting several frames and more complex glasses service" },
      ],
      ["#panel-intervencije h3", "Minor and larger interventions on glasses"],
      [
        "#panel-intervencije p",
        "Some repairs are done quickly, while others require more assessment and work. That is why we first inspect every pair of glasses, explain what is possible and suggest a solution that makes sense for the frame, lenses and way they are worn.",
      ],
      ["#panel-intervencije li:nth-child(1)", "Quick interventions and tightening"],
      ["#panel-intervencije li:nth-child(2)", "More complex repairs and combined replacements"],
      ["#panel-intervencije li:nth-child(3)", "Clear advice before work begins"],
      ["#frames-title", "Prescription and sunglasses frames"],
      [
        ".frames-copy p:nth-of-type(1)",
        "Our range includes a wide selection of prescription and sunglasses frames for women, men and children.",
      ],
      [
        ".frames-copy p:nth-of-type(2)",
        "We carefully choose models that follow modern trends while meeting high standards of quality, comfort and durability. Whether you are looking for a classic, elegant or modern frame, we will help you find the model that best suits your face, style and needs.",
      ],
      [".frame-products--sun", { attr: "aria-label", value: "Sunglasses frame models" }],
      [".frame-products--sun .frame-product:nth-child(1) img", { attr: "alt", value: "Ray-Ban RB3025 Aviator sunglasses" }],
      [".frame-products--sun .frame-product:nth-child(2) img", { attr: "alt", value: "Ray-Ban Wayfarer sunglasses" }],
      [".frame-products--sun .frame-product:nth-child(3) img", { attr: "alt", value: "Vogue VO5565S W44/11 sunglasses" }],
      [".frame-products--sun .frame-product:nth-child(4) img", { attr: "alt", value: "Armani Exchange AX2030S sunglasses" }],
      [".frame-showcase--sun .frame-story span", "Sunglasses frames"],
      [".frame-showcase--sun .frame-story h3", "Models for protection, style and everyday wear."],
      [
        ".frame-showcase--sun .frame-story p:nth-of-type(1)",
        "We choose sunglasses frames according to face shape, comfort and build quality, with models that work well in the city and while traveling.",
      ],
      [
        ".frame-showcase--sun .frame-story p:nth-of-type(2)",
        "It is important to us that glasses are stable, light and comfortable for longer wear, while also providing good protection from sun and glare during everyday activities.",
      ],
      [
        ".frame-showcase--sun .frame-story p:nth-of-type(3)",
        "That is why we also consider frame width, lens color, nose position and how the model fits your style.",
      ],
      ["#frames-brands-title", "Sunglasses and prescription frame brands"],
      [".frame-brand-carousel", { attr: "aria-label", value: "Sunglasses and prescription frame brands available" }],
      [".frame-products--optical", { attr: "aria-label", value: "Prescription frame models" }],
      [".frame-products--optical .frame-product:nth-child(1) img", { attr: "alt", value: "Vogue VO5326 W44 women's prescription frame" }],
      [".frame-products--optical .frame-product:nth-child(2) img", { attr: "alt", value: "Ray-Ban RB8412 Optics prescription frame" }],
      [".frame-products--optical .frame-product:nth-child(3) img", { attr: "alt", value: "Benetton F BE 1208 women's prescription frame" }],
      [".frame-products--optical .frame-product:nth-child(4) img", { attr: "alt", value: "Armani Exchange AX3115 men's prescription frame" }],
      [".frame-showcase--optical .frame-story span", "Prescription frames"],
      [".frame-showcase--optical .frame-story h3", "Frames that follow the face, prescription and habits."],
      [
        ".frame-showcase--optical .frame-story p:nth-of-type(1)",
        "With prescription frames, we pay attention to weight, stability, bridge width and how the chosen model will carry the lenses you need.",
      ],
      [
        ".frame-showcase--optical .frame-story p:nth-of-type(2)",
        "A good frame should sit calmly on the face, without pressure behind the ears or on the nose, especially when glasses are worn all day.",
      ],
      [
        ".frame-showcase--optical .frame-story p:nth-of-type(3)",
        "Along with appearance, we check dimensions, temple shape, space for prescription lenses and comfort while reading, working at a computer and moving through the day.",
      ],
      [".lens-section", { attr: "aria-label", value: "Types of prescription lenses" }],
      [".lens-content h2", "Prescription lenses adapted to your vision, frame and habits."],
      [
        ".lens-content p",
        "We work with leading global manufacturers of prescription lenses to provide quality vision, wearing comfort and durability.",
      ],
      [".lens-lead img", { attr: "alt", value: "Glasses with clear single-vision prescription lenses on an optician's table" }],
      [".lens-lead figcaption", "Lenses are chosen according to your prescription, frame and the way you actually wear them."],
      [".lens-list", { attr: "aria-label", value: "Types of prescription lenses" }],
      [".lens-list article:nth-child(1) img", { attr: "alt", value: "Single-vision prescription lenses in an elegant frame" }],
      [".lens-list article:nth-child(1) h3", "Single-vision lenses"],
      [
        ".lens-list article:nth-child(1) p",
        "The most common choice for clear vision at one distance: far, near or a specific everyday task.",
      ],
      [".lens-list article:nth-child(2) img", { attr: "alt", value: "Progressive prescription lenses with discreet measuring marks" }],
      [".lens-list article:nth-child(2) h3", "Progressive lenses"],
      [
        ".lens-list article:nth-child(2) p",
        "One pair of glasses for distance, intermediate distance and reading, with precise centering according to the frame and way of wearing.",
      ],
      [".lens-list article:nth-child(3) img", { attr: "alt", value: "Office prescription lenses on a desk beside a screen" }],
      [".lens-list article:nth-child(3) h3", "Office lenses"],
      [
        ".lens-list article:nth-child(3) p",
        "Comfortable for computer work, documents and meetings, when near and intermediate distances matter most.",
      ],
      [".lens-list article:nth-child(4) img", { attr: "alt", value: "Glasses with blue light protection beside a screen" }],
      [".lens-list article:nth-child(4) h3", "Blue light protection"],
      [
        ".lens-list article:nth-child(4) p",
        "For days spent with screens, with a coating that reduces glare and helps viewing feel calmer.",
      ],
      [".lens-list article:nth-child(5) img", { attr: "alt", value: "Photochromic prescription lenses in sunlight near a shop window" }],
      [".lens-list article:nth-child(5) h3", "Photochromic lenses"],
      [
        ".lens-list article:nth-child(5) p",
        "Lenses that adapt to light: clearer indoors and darker outside for more comfortable time in the sun.",
      ],
      [".lens-list article:nth-child(6) img", { attr: "alt", value: "Individual prescription lenses on an optician's table" }],
      [".lens-list article:nth-child(6) h3", "Individual lenses"],
      [
        ".lens-list article:nth-child(6) p",
        "Made according to your measurements: we consider facial appearance, eye position and frame parameters so the lenses precisely match the way you wear them.",
      ],
      [".lens-brands", { attr: "aria-label", value: "Prescription lens brands available" }],
      [".lens-brands h3", "Prescription lens brands in our range"],
      [".installation-figure--machine img", { attr: "alt", value: "Essilor Mister Blue 2.0 machine for precise prescription lens fitting" }],
      [".installation-figure:not(.installation-figure--machine) img", { attr: "alt", value: "Software for digital centering and lens-shape processing" }],
      [".installation-figure:not(.installation-figure--machine) figcaption", "Digital system for lens centering and processing"],
      [".installation-copy > span", "Lens fitting"],
      ["#installation-title", "Top precision for your vision: fitting lenses into every type of frame"],
      [
        ".installation-copy > p",
        "In our workshop, we combine craft precision with the latest technology. We fit all types of lenses into any frame type you choose:",
      ],
      [".installation-list", { attr: "aria-label", value: "Frame types for lens fitting" }],
      [".installation-list li:nth-child(1)", "Full-rim frames (plastic and metal)"],
      [".installation-list li:nth-child(2)", "Nylon frames (semi-rimless)"],
      [".installation-list li:nth-child(3)", "Drilled frames (rimless)"],
      [".installation-list li:nth-child(4)", "Sports frames (highly curved bases)"],
      [".installation-block:nth-of-type(1) h3", "Technology without compromise: Essilor Mister Blue 2.0"],
      [
        ".installation-block:nth-of-type(1) p",
        "Lens fitting is done on a latest-generation machine, Essilor Mister Blue 2.0. This digital edging system guarantees micrometer-level accuracy, perfect lens seating in the frame without tension and flawless aesthetics, even with the most demanding shapes and complex sports frames.",
      ],
      [".installation-block:nth-of-type(2) h3", "A reliable partner for customers and other optical shops"],
      [".installation-block:nth-of-type(2) p:nth-of-type(1)", "Our services are adapted to all market requirements:"],
      [
        ".installation-block:nth-of-type(2) p:nth-of-type(2)",
        {
          html:
            "<strong>For end customers:</strong> Fast, precise fitting and an impeccable aesthetic finish for your glasses.",
        },
      ],
      [
        ".installation-block:nth-of-type(2) p:nth-of-type(3)",
        {
          html:
            "<strong>For optical shops (B2B):</strong> We provide service edging and fitting for other optical shops. If your shop does not have equipment for specific fittings such as drilling or sports bases, we are your reliable partner who respects deadlines and guarantees top quality.",
        },
      ],
      [".contact-lenses-copy > span", "Contact lenses"],
      [
        "#contact-lenses-title",
        "Contact lenses from leading global brands - always fresh and matched to your prescription",
      ],
      [
        ".contact-lenses-copy > p",
        "In our optical shop you can find soft, semi-rigid and rigid contact lenses from leading global manufacturers. Whether you use daily, monthly, astigmatism or progressive contact lenses, we are here to provide exactly what your eyes need.",
      ],
      [".contact-lenses-block:nth-of-type(1) h3", "How does buying from us work?"],
      [".contact-lenses-block:nth-of-type(1) p", "We sell all contact lenses exclusively by order."],
      [".contact-lenses-block:nth-of-type(2) h3", "Why is that an advantage for you?"],
      [
        ".contact-lenses-block:nth-of-type(2) p",
        "Lenses do not sit on shelves for a long time. This way, we guarantee that you receive a completely new, original product with the maximum expiry date, directly from the factory and exactly according to your prescription parameters.",
      ],
      [".contact-lenses-products", { attr: "aria-label", value: "Examples of contact lenses available" }],
      [
        ".contact-lenses-products img:nth-child(1)",
        { attr: "alt", value: "Bausch + Lomb SofLens contact lenses" },
      ],
      [
        ".contact-lenses-products img:nth-child(2)",
        { attr: "alt", value: "Alcon Air Optix and Dailies contact lenses" },
      ],
      [
        ".contact-lenses-products img:nth-child(3)",
        { attr: "alt", value: "Bausch + Lomb Ultra contact lenses" },
      ],
      ["#vision-title", "Eye test"],
      [
        ".vision-heading p",
        "A precise vision check helps ensure the frame and lenses are aligned with your eyes, habits and everyday way of seeing.",
      ],
      [".vision-visual img", { attr: "alt", value: "Optometrist checking a patient's prescription with a trial frame" }],
      [".vision-copy span", "Vision exam"],
      [".vision-copy h3", "A clear image starts with good measurement."],
      [
        ".vision-copy p:nth-of-type(1)",
        "During an eyesight check, we carefully follow how you see at distance, near and intermediate ranges, because needs differ for driving, reading, computer work and everyday tasks.",
      ],
      [
        ".vision-copy p:nth-of-type(2)",
        "After measuring, we talk about your habits and previous experience with glasses so we can recommend lenses that make sense for the way you really use them.",
      ],
      [
        ".vision-copy p:nth-of-type(3)",
        "The goal is not only for the prescription to be accurate, but for the glasses to be comfortable, natural to wear and well matched with the selected frame.",
      ],
      [".contact-copy h2", "Two locations, the same careful eye for your glasses."],
      [
        ".contact-copy > p",
        "Visit us in Zvezdara for prescription and sunglasses frames, lens advice, an eyesight check and precise glasses repair.",
      ],
      [".contact-card--address:nth-child(1) > span", "Address 1"],
      [".contact-card--address:nth-child(1) > a", "Open in Google Maps"],
      [".contact-card--address:nth-child(1) .contact-hours span", "Working hours"],
      [".contact-card--address:nth-child(1) .contact-hours p:nth-of-type(1)", "Weekdays 09:00 - 18:00"],
      [".contact-card--address:nth-child(1) .contact-hours p:nth-of-type(2)", "Saturdays 09:00 - 14:00"],
      [".contact-card--address:nth-child(2) > span", "Address 2"],
      [".contact-card--address:nth-child(2) > a", "Open in Google Maps"],
      [".contact-card--address:nth-child(2) .contact-hours span", "Working hours"],
      [".contact-card--address:nth-child(2) .contact-hours p:nth-of-type(1)", "Weekdays 09:00 - 16:00"],
      [".contact-card--address:nth-child(2) .contact-hours p:nth-of-type(2)", "Saturdays 09:00 - 14:00"],
      [".contact-card--wide > span", "Phone numbers"],
      [".contact-visual", { attr: "aria-label", value: "Location map" }],
      [".map-card iframe", { attr: "title", value: "Map of Express Opticar Urosevic locations" }],
      [".site-footer p", "© 2026 Express Opticar Urosevic. All rights reserved."],
      [".site-footer a", "Back to top"],
    ],
  },
};

const originalContent = new Map();

const rememberOriginal = (selector, descriptor) => {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  const key = descriptor.attr ? `${selector}::${descriptor.attr}` : selector;

  if (originalContent.has(key)) {
    return;
  }

  originalContent.set(key, descriptor.attr ? element.getAttribute(descriptor.attr) || "" : element.innerHTML);
};

translations.en.items.forEach(([selector, value]) => {
  rememberOriginal(selector, typeof value === "object" ? value : {});
});

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("express-opticar-language");
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem("express-opticar-language", language);
  } catch {
    // The switch still works when storage is unavailable.
  }
};

const setTranslatedValue = (selector, value) => {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  if (typeof value === "object" && value.attr) {
    element.setAttribute(value.attr, value.value);
    return;
  }

  if (typeof value === "object" && value.html) {
    element.innerHTML = value.html;
    return;
  }

  element.textContent = value;
};

const restoreSerbian = () => {
  originalContent.forEach((value, key) => {
    const [selector, attr] = key.split("::");
    const element = document.querySelector(selector);

    if (!element) {
      return;
    }

    if (attr) {
      element.setAttribute(attr, value);
    } else {
      element.innerHTML = value;
    }
  });
};

const setLanguage = (language) => {
  const nextLanguage = translations[language] ? language : "sr";
  const dictionary = translations[nextLanguage];

  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;
  document.querySelector("meta[name='description']")?.setAttribute("content", dictionary.description);
  toggle.setAttribute("aria-label", dictionary.menuToggle);
  languageSwitch?.setAttribute("aria-label", dictionary.switchLabel);
  languageSwitch?.setAttribute("data-active-lang", nextLanguage);

  if (nextLanguage === "sr") {
    restoreSerbian();
  } else {
    dictionary.items.forEach(([selector, value]) => setTranslatedValue(selector, value));
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(nextLanguage);
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const getScrollOffset = () => {
  return header.getBoundingClientRect().height;
};

const getHashTarget = (hash) => {
  if (!hash || hash === "#") {
    return null;
  }

  return document.getElementById(decodeURIComponent(hash.slice(1)));
};

const scrollToTarget = (target, hash, updateHistory = true) => {
  const top = target.id === "pocetna" ? 0 : target.getBoundingClientRect().top + window.scrollY - getScrollOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });

  if (updateHistory) {
    history.pushState(null, "", hash);
  }
};

const closeMenu = () => {
  nav.classList.remove("is-open");
  header.classList.remove("menu-visible");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
};

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("menu-visible", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langOption));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');

  if (!link) {
    return;
  }

  const target = getHashTarget(link.hash);

  if (!target) {
    return;
  }

  event.preventDefault();
  closeMenu();
  scrollToTarget(target, link.hash);
});

const tabsRoot = document.querySelector("[data-tabs]");

if (tabsRoot) {
  const tabs = [...tabsRoot.querySelectorAll("[role='tab']")];
  const panels = [...tabsRoot.querySelectorAll("[role='tabpanel']")];

  const activateTab = (tab, shouldFocus = false) => {
    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      panel.hidden = panel.id !== tab.dataset.tab;
      panel.classList.toggle("is-active", panel.id === tab.dataset.tab);
    });

    if (shouldFocus) {
      tab.focus();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));

    tab.addEventListener("keydown", (event) => {
      const previousKeys = ["ArrowLeft", "ArrowUp"];
      const nextKeys = ["ArrowRight", "ArrowDown"];
      let nextIndex = index;

      if (previousKeys.includes(event.key)) {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (nextKeys.includes(event.key)) {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
setLanguage(getStoredLanguage() || "sr");

window.addEventListener("load", () => {
  const target = getHashTarget(window.location.hash);

  if (target) {
    requestAnimationFrame(() => scrollToTarget(target, window.location.hash, false));
  }
});
