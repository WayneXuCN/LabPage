---
permalink: /assets/js/cookie-consent-setup.js
---
/**
 * Cookie Consent Configuration
 * Documentation: https://cookieconsent.orestbida.com/
 *
 * GDPR-Compliant Approach:
 * - Analytics scripts use type="text/plain" data-category="analytics"
 * - The library blocks all marked scripts until user consents
 * - Scripts NEVER run until explicit consent is given
 * - Google Consent Mode is used for Google Analytics privacy mode before consent
 * - Other analytics (Cronitor, Pirsch, OpenPanel) are blocked until consent given
 *
 * Supported Analytics Providers:
 * - Cronitor RUM
 * - Google Analytics (GA4)
 * - OpenPanel Analytics
 * - Pirsch Analytics
 */

// Initialize Google Consent Mode BEFORE any tracking
// This tells Google services to operate in privacy mode until user consents
window.dataLayer = window.dataLayer || [];

// Reuse existing global gtag if it was already defined (e.g. by other GA scripts)
// to avoid redefining it multiple times when consent is granted.
if (typeof window.gtag !== 'function') {
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
}

// Local alias for convenience in this file
var gtag = window.gtag;
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied'
});

// Get translations from Jekyll data
var cookieConsentTranslations = {
  consentModal: {
    title: "{{ site.data[site.active_lang].strings.cookie_consent.title }}",
    description: "{{ site.data[site.active_lang].strings.cookie_consent.description }}",
    acceptAllBtn: "{{ site.data[site.active_lang].strings.cookie_consent.accept_all }}",
    acceptNecessaryBtn: "{{ site.data[site.active_lang].strings.cookie_consent.reject_all }}",
    showPreferencesBtn: "{{ site.data[site.active_lang].strings.cookie_consent.manage_preferences }}"
  },
  preferencesModal: {
    title: "{{ site.data[site.active_lang].strings.cookie_consent.preferences_title }}",
    acceptAllBtn: "{{ site.data[site.active_lang].strings.cookie_consent.accept_all }}",
    acceptNecessaryBtn: "{{ site.data[site.active_lang].strings.cookie_consent.reject_all }}",
    savePreferencesBtn: "{{ site.data[site.active_lang].strings.cookie_consent.save_preferences }}",
    closeIconLabel: "{{ site.data[site.active_lang].strings.cookie_consent.close_modal }}",
    sections: [
      {
        title: "{{ site.data[site.active_lang].strings.cookie_consent.cookie_usage }}",
        description: "{{ site.data[site.active_lang].strings.cookie_consent.cookie_usage_description }}"
      },
      {
        title: "{{ site.data[site.active_lang].strings.cookie_consent.necessary_cookies }}",
        description: "{{ site.data[site.active_lang].strings.cookie_consent.necessary_cookies_description }}",
        linkedCategory: 'necessary'
      },
      {
        title: "{{ site.data[site.active_lang].strings.cookie_consent.analytics_cookies }}",
        description: "{{ site.data[site.active_lang].strings.cookie_consent.analytics_cookies_description }}",
        linkedCategory: 'analytics'
      },
      {
        title: "{{ site.data[site.active_lang].strings.cookie_consent.more_info }}",
        description: "{{ site.data[site.active_lang].strings.cookie_consent.more_info_description }}"
      }
    ]
  }
};

// Wait for the library to be available
var cookieConsentRetryCount = 0;
var COOKIE_CONSENT_MAX_RETRIES = 50; // 5 seconds max wait time

function initializeCookieConsent() {
  // Check if CookieConsent is available
  if (!window.CookieConsent) {
    if (cookieConsentRetryCount++ < COOKIE_CONSENT_MAX_RETRIES) {
      // Library not yet loaded, try again after a short delay
      setTimeout(initializeCookieConsent, 100);
    } else {
      console.error('CookieConsent library failed to load');
    }
    return;
  }

  window.CookieConsent.run({
    categories: {
      necessary: {
        enabled: true,
        readOnly: true
      },
      analytics: {}
    },

    language: {
      default: 'en',
      translations: {
        en: cookieConsentTranslations
      }
    },

    // Callback when user accepts/rejects consent
    onFirstConsent: function(consentData) {
      updateConsentMode(consentData);
    },

    // Callback when user changes preferences
    onChange: function(consentData) {
      updateConsentMode(consentData);
    }
  });

  /**
   * Update Google Consent Mode based on user preferences
   * This ensures Google services respect user choices
   */
  function updateConsentMode(consentData) {
    // Handle both callback data structures
    var categories = consentData.categories || consentData;

    // Ensure categories is an object
    if (!categories || typeof categories !== 'object') {
      console.warn('Invalid consent data structure:', consentData);
      return;
    }

    gtag('consent', 'update', {
      'analytics_storage': categories.analytics ? 'granted' : 'denied',
      'ad_storage': 'denied',
      'functionality_storage': 'denied',
      'personalization_storage': 'denied'
    });

    if (categories.analytics) {
      console.debug('✓ Analytics consent granted - tracking enabled for all providers');
      // Analytics scripts with data-category="analytics" will automatically run
      // when the library re-evaluates them after this consent update
    } else {
      console.debug('✗ Analytics consent denied - no tracking data collected');
      // Analytics scripts are already blocked by the library (type="text/plain")
      // No tracking will occur for:
      // - Cronitor RUM
      // - Google Analytics (GA4)
      // - OpenPanel Analytics
      // - Pirsch Analytics
    }
  }
}

// Initialize when the library is available
initializeCookieConsent();

