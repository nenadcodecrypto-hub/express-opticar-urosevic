const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");

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

window.addEventListener("load", () => {
  const target = getHashTarget(window.location.hash);

  if (target) {
    requestAnimationFrame(() => scrollToTarget(target, window.location.hash, false));
  }
});
