/* Discourage casual image saving; public images remain downloadable. */
(() => {
  const imageSurface = target => target instanceof Element &&
    target.closest('img,picture,.gallery-item,.gallery-grid,.lightbox figure,.featured-image,.article-hero,.film-lite,.honeymoon-milestone__figure');
  const blockImageAction = event => {
    if (imageSurface(event.target)) event.preventDefault();
  };
  document.addEventListener('contextmenu', blockImageAction, true);
  document.addEventListener('dragstart', blockImageAction, true);
  const markImages = root => {
    if (root instanceof HTMLImageElement) root.draggable = false;
    root.querySelectorAll?.('img').forEach(img => { img.draggable = false; });
  };
  markImages(document);
  new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(markImages));
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
