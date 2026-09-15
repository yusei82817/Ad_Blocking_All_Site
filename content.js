(() => {
  const selectors = [
    '[id*="ad-"]',
    '[id*="-ad"]',
    '[id^="ad_"]',
    '[class*="ad-"]',
    '[class*="-ad"]',
    '[class^="ad_"]',
    '[id*="advert"]',
    '[class*="advert"]',
    '[id*="sponsor"]',
    '[class*="sponsor"]',
    '[data-ad]',
    '[data-ad-slot]',
    '[aria-label*="Advertisement"]',
    '[aria-label*="広告"]'
  ];

  const hideAds = () => {
    document.querySelectorAll(selectors.join(',')).forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.setProperty('display', 'none', 'important');
      }
    });
  };

  hideAds();

  const observer = new MutationObserver(hideAds);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
