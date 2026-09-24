(() => {
  const trigger = document.querySelector('.menu-trigger');
  const menu = document.getElementById('journalMenu');
  const close = document.querySelector('.menu-close');
  const scrim = document.querySelector('.menu-scrim');
  if (!trigger || !menu || !scrim) return;
  const setMenu = open => {
    document.body.classList.toggle('menu-open', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    trigger.setAttribute('aria-expanded', String(open));
    scrim.hidden = !open;
    if (open) close?.focus();
  };
  trigger.addEventListener('click', () => setMenu(true));
  close?.addEventListener('click', () => setMenu(false));
  scrim.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false);
  });
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
})();
