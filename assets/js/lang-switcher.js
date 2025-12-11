/**
 * Language Switcher Enhancement
 * Provides enhanced interaction experience for language switcher
 * including touch optimization, slide-to-close, and accessibility improvements
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    breakpoint: 767, // Mobile breakpoint
    animationDuration: 300, // Animation duration in ms
    touchThreshold: 44, // Minimum touch target size
    slideThreshold: 50 // Slide distance to trigger close
  };

  // Utility functions
  const isMobile = () => window.innerWidth <= CONFIG.breakpoint;
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Language Switcher Handler
   */
  class LangSwitcher {
    constructor() {
      this.dropdownToggles = document.querySelectorAll('.lang-switcher-toggle');
      this.dropdownMenus = document.querySelectorAll('.lang-dropdown-menu');
      this.init();
    }

    init() {
      this.bindEvents();
      this.enhanceAccessibility();
      this.optimizeForTouch();
    }

    /**
     * Bind event listeners
     */
    bindEvents() {
      // Dropdown toggle events
      this.dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => this.handleToggleClick(e));
        toggle.addEventListener('keydown', (e) => this.handleToggleKeydown(e));
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => this.handleDocumentClick(e));

      // Close dropdown on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAllDropdowns();
        }
      });

      // Handle window resize
      window.addEventListener('resize', debounce(() => {
        if (!isMobile()) {
          this.closeAllDropdowns();
        }
      }, 250));
    }

    /**
     * Handle dropdown toggle click
     */
    handleToggleClick(e) {
      e.preventDefault();
      const toggle = e.currentTarget;
      const dropdown = toggle.closest('.lang-switcher-dropdown');
      const menu = dropdown.querySelector('.lang-dropdown-menu');

      // Check if already open
      const isOpen = menu.classList.contains('show');

      // Close all other dropdowns
      this.closeAllDropdowns();

      if (!isOpen) {
        this.openDropdown(toggle, menu);
      }
    }

    /**
     * Handle keyboard navigation
     */
    handleToggleKeydown(e) {
      const toggle = e.currentTarget;
      const dropdown = toggle.closest('.lang-switcher-dropdown');
      const menu = dropdown.querySelector('.lang-dropdown-menu');

      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          this.handleToggleClick(e);
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!menu.classList.contains('show')) {
            this.openDropdown(toggle, menu);
          }
          this.focusFirstItem(menu);
          break;
        case 'Escape':
          this.closeAllDropdowns();
          toggle.focus();
          break;
      }
    }

    /**
     * Handle document click (close dropdowns when clicking outside)
     */
    handleDocumentClick(e) {
      const isClickInsideDropdown = e.target.closest('.lang-switcher-dropdown');
      if (!isClickInsideDropdown) {
        this.closeAllDropdowns();
      }
    }

    /**
     * Open dropdown
     */
    openDropdown(toggle, menu) {
      menu.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');

      // Add animation class for mobile
      if (isMobile()) {
        menu.style.maxHeight = CONFIG.animationDuration + 'ms';
      }

      // Focus management
      this.focusFirstItem(menu);
    }

    /**
     * Close dropdown
     */
    closeDropdown(toggle, menu) {
      menu.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }

    /**
     * Close all dropdowns
     */
    closeAllDropdowns() {
      this.dropdownMenus.forEach(menu => {
        menu.classList.remove('show');
      });
      this.dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
      });
    }

    /**
     * Focus first item in dropdown
     */
    focusFirstItem(menu) {
      const firstItem = menu.querySelector('.lang-dropdown-item');
      if (firstItem) {
        setTimeout(() => firstItem.focus(), 100);
      }
    }

    /**
     * Enhance accessibility
     */
    enhanceAccessibility() {
      this.dropdownToggles.forEach(toggle => {
        // Ensure proper ARIA attributes
        if (!toggle.hasAttribute('aria-haspopup')) {
          toggle.setAttribute('aria-haspopup', 'true');
        }
        if (!toggle.hasAttribute('aria-expanded')) {
          toggle.setAttribute('aria-expanded', 'false');
        }

        // Add keyboard navigation to dropdown items
        const dropdown = toggle.closest('.lang-switcher-dropdown');
        const items = dropdown.querySelectorAll('.lang-dropdown-item');
        
        items.forEach((item, index) => {
          item.setAttribute('tabindex', '-1');
          
          item.addEventListener('keydown', (e) => {
            switch (e.key) {
              case 'ArrowDown':
                e.preventDefault();
                const next = items[index + 1] || items[0];
                next.focus();
                break;
              case 'ArrowUp':
                e.preventDefault();
                const prev = items[index - 1] || items[items.length - 1];
                prev.focus();
                break;
              case 'Escape':
                this.closeAllDropdowns();
                toggle.focus();
                break;
            }
          });
        });
      });
    }

    /**
     * Optimize for touch devices
     */
    optimizeForTouch() {
      if (!('ontouchstart' in window)) return;

      this.dropdownToggles.forEach(toggle => {
        // Ensure minimum touch target size
        const rect = toggle.getBoundingClientRect();
        if (rect.width < CONFIG.touchThreshold || rect.height < CONFIG.touchThreshold) {
          toggle.style.minWidth = CONFIG.touchThreshold + 'px';
          toggle.style.minHeight = CONFIG.touchThreshold + 'px';
        }

        // Add touch feedback
        toggle.addEventListener('touchstart', () => {
          toggle.style.transform = 'scale(0.95)';
        });

        toggle.addEventListener('touchend', () => {
          setTimeout(() => {
            toggle.style.transform = '';
          }, 100);
        });
      });

      // Mobile slide-to-close functionality
      if (isMobile()) {
        this.enableSlideToClose();
      }
    }

    /**
     * Enable slide-to-close on mobile
     */
    enableSlideToClose() {
      let touchStartY = 0;
      let touchEndY = 0;

      this.dropdownMenus.forEach(menu => {
        menu.addEventListener('touchstart', (e) => {
          touchStartY = e.changedTouches[0].screenY;
        });

        menu.addEventListener('touchend', (e) => {
          touchEndY = e.changedTouches[0].screenY;
          this.handleSwipe(menu, touchStartY, touchEndY);
        });
      });
    }

    /**
     * Handle swipe gesture
     */
    handleSwipe(menu, startY, endY) {
      const swipeDistance = startY - endY;
      
      // Close if swiped up (negative distance) beyond threshold
      if (swipeDistance < -CONFIG.slideThreshold) {
        const dropdown = menu.closest('.lang-switcher-dropdown');
        const toggle = dropdown.querySelector('.lang-switcher-toggle');
        this.closeDropdown(toggle, menu);
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new LangSwitcher();
    });
  } else {
    new LangSwitcher();
  }

  // Expose to global scope for debugging
  window.LangSwitcher = LangSwitcher;

})();
