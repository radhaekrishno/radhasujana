(() => {
  // Preserve links shared before the camp became the homepage.
  const legacy = {'#memories':'photos/', '#pre-wedding':'films/#pre-wedding', '#film':'films/#film', '#our-blogs':'journal/#our-blogs', '#latest':'journal/#latest'};
  const destination = legacy[window.location.hash];
  if (destination) {
    const prefix = document.documentElement.lang === 'te' ? '/te/' : '/';
    window.location.replace(prefix + destination);
    return;
  }

  const toggle = document.querySelector('.help-button');
  toggle?.addEventListener('click', () => {
    const on = document.body.classList.toggle('show-labels');
    toggle.setAttribute('aria-pressed', String(on));
    toggle.textContent = on ? toggle.dataset.hide : toggle.dataset.show;
  });
  const viewport = document.querySelector('.scene-scroll');
  // Start at the couple on narrow screens; the full scene remains pannable.
  if (viewport && window.matchMedia('(max-width:650px)').matches) {
    viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
  }
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
})();
