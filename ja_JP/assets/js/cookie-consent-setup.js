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
    title: "Cookieを使用しています",
    description: "このウェブサイトは、お客様の体験を向上させ、サイトのトラフィックを分析するためにCookieを使用しています。「すべて受け入れる」をクリックすると、Cookieの使用に同意したことになります。",
    acceptAllBtn: "すべて受け入れる",
    acceptNecessaryBtn: "すべて拒否する",
    showPreferencesBtn: "個別設定を管理"
  },
  preferencesModal: {
    title: "Cookie設定を管理",
    acceptAllBtn: "すべて受け入れる",
    acceptNecessaryBtn: "すべて拒否する",
    savePreferencesBtn: "現在の選択を承認",
    closeIconLabel: "モーダルを閉じる",
    sections: [
      {
        title: "Cookieの使用",
        description: "ウェブサイトの基本的な機能を確保し、オンライン体験を向上させるためにCookieを使用しています。各カテゴリについて、いつでもオプトイン/オプトアウトを選択できます。"
      },
      {
        title: "厳密に必要なCookie",
        description: "これらのCookieは、ウェブサイトの適切な機能に不可欠です。これらのCookieがないと、ウェブサイトは正しく動作しません。",
        linkedCategory: 'necessary'
      },
      {
        title: "分析Cookie",
        description: "これらのCookieにより、トラフィックを測定し、お客様の行動を分析してサービスを改善することができます。",
        linkedCategory: 'analytics'
      },
      {
        title: "詳細情報",
        description: "Cookieに関するポリシーや選択肢についてのご質問は、<a class="cc-link" href="{{ site.url }}{{ site.baseurl }}/#contact">お問い合わせください</a>。"
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

