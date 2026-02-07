/**
 * Language Switcher Enhancement
 * Refactored interaction logic with robust click/keyboard handling
 */

(function () {
  "use strict";

  const CONFIG = {
    breakpoint: 767, // Mobile breakpoint
  };

  const isMobile = () => window.innerWidth <= CONFIG.breakpoint;

  class LangSwitcher {
    constructor() {
      this.dropdowns = Array.from(document.querySelectorAll(".lang-switcher-dropdown"));
      this.toggles = this.dropdowns.map((dropdown) => dropdown.querySelector(".lang-switcher-toggle")).filter(Boolean);
      this.menus = this.dropdowns.map((dropdown) => dropdown.querySelector(".lang-dropdown-menu")).filter(Boolean);
      this.lastToggle = null;
      this.init();
    }

    init() {
      this.bindEvents();
      this.enhanceAccessibility();
    }

    bindEvents() {
      this.toggles.forEach((toggle) => {
        toggle.addEventListener("click", (e) => this.handleToggleClick(e));
        toggle.addEventListener("keydown", (e) => this.handleToggleKeydown(e));
      });

      document.addEventListener("click", (e) => this.handleDocumentClick(e), true);
      document.addEventListener("keydown", (e) => this.handleDocumentKeydown(e));
      window.addEventListener("resize", () => this.handleResize());
    }

    handleToggleClick(e) {
      e.preventDefault();
      e.stopPropagation();

      const toggle = e.currentTarget;
      const dropdown = toggle.closest(".lang-switcher-dropdown");
      const menu = dropdown?.querySelector(".lang-dropdown-menu");

      if (!dropdown || !menu) return;

      const isOpen = dropdown.classList.contains("is-open");
      this.closeAll();

      if (!isOpen) {
        this.open(dropdown, toggle, menu, false);
      }
    }

    handleToggleKeydown(e) {
      const toggle = e.currentTarget;
      const dropdown = toggle.closest(".lang-switcher-dropdown");
      const menu = dropdown?.querySelector(".lang-dropdown-menu");

      if (!dropdown || !menu) return;

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          this.handleToggleClick(e);
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!dropdown.classList.contains("is-open")) {
            this.open(dropdown, toggle, menu, true);
          } else {
            this.focusFirstItem(menu);
          }
          break;
        case "Escape":
          this.closeAll();
          toggle.focus();
          break;
        default:
          break;
      }
    }

    handleDocumentClick(e) {
      const path = typeof e.composedPath === "function" ? e.composedPath() : [];
      const clickedInside = this.dropdowns.some((dropdown) => {
        if (path.length) return path.includes(dropdown);
        return e.target && e.target.closest && e.target.closest(".lang-switcher-dropdown");
      });

      if (!clickedInside) {
        this.closeAll();
      }
    }

    handleDocumentKeydown(e) {
      if (e.key === "Escape") {
        this.closeAll();
        if (this.lastToggle) {
          this.lastToggle.focus();
        }
      }
    }

    handleResize() {
      this.closeAll();
    }

    open(dropdown, toggle, menu, shouldFocus) {
      dropdown.classList.add("is-open");
      menu.classList.add("show");
      toggle.setAttribute("aria-expanded", "true");
      menu.setAttribute("data-mode", isMobile() ? "inline" : "floating");
      this.lastToggle = toggle;

      if (shouldFocus) {
        this.focusFirstItem(menu);
      }
    }

    close(dropdown) {
      const toggle = dropdown.querySelector(".lang-switcher-toggle");
      const menu = dropdown.querySelector(".lang-dropdown-menu");
      if (menu) menu.classList.remove("show");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      dropdown.classList.remove("is-open");
    }

    closeAll() {
      this.dropdowns.forEach((dropdown) => this.close(dropdown));
    }

    focusFirstItem(menu) {
      const items = menu.querySelectorAll(".lang-dropdown-item");
      if (!items.length) return;
      items.forEach((item, index) => item.setAttribute("tabindex", index === 0 ? "0" : "-1"));
      setTimeout(() => items[0].focus(), 0);
    }

    enhanceAccessibility() {
      this.toggles.forEach((toggle) => {
        if (!toggle.hasAttribute("aria-haspopup")) {
          toggle.setAttribute("aria-haspopup", "true");
        }
        if (!toggle.hasAttribute("aria-expanded")) {
          toggle.setAttribute("aria-expanded", "false");
        }

        const dropdown = toggle.closest(".lang-switcher-dropdown");
        const items = dropdown?.querySelectorAll(".lang-dropdown-item") || [];

        items.forEach((item, index) => {
          item.setAttribute("tabindex", "-1");
          item.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "ArrowDown": {
                e.preventDefault();
                const next = items[index + 1] || items[0];
                next.focus();
                break;
              }
              case "ArrowUp": {
                e.preventDefault();
                const prev = items[index - 1] || items[items.length - 1];
                prev.focus();
                break;
              }
              case "Home":
                e.preventDefault();
                items[0]?.focus();
                break;
              case "End":
                e.preventDefault();
                items[items.length - 1]?.focus();
                break;
              case "Escape":
                this.closeAll();
                toggle.focus();
                break;
              default:
                break;
            }
          });
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new LangSwitcher();
    });
  } else {
    new LangSwitcher();
  }

  window.LangSwitcher = LangSwitcher;
})();
