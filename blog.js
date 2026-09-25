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

  const galleryGrid = document.querySelector('.gallery-grid[data-gallery-label]');
  const galleryDetails = document.getElementById('galleryDetails');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  let currentPhotoIndex = 0;

  if (galleryGrid && lightbox && lightboxImage && lightboxCaption) {
    const galleryLabel = galleryGrid.dataset.galleryLabel;
    const isTelugu = document.documentElement.lang === 'te';
    for (let index = 1; index <= 15; index += 1) {
      const number = String(index).padStart(2, '0');
      const button = document.createElement('button');
      button.className = 'gallery-item';
      button.type = 'button';
      button.dataset.galleryIndex = String(index - 1);
      button.setAttribute('aria-label', `${galleryLabel} ${index}`);

      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.srcset = `/assets/engagement/${number}.webp`;
      source.type = 'image/webp';
      const photo = document.createElement('img');
      photo.src = `/assets/engagement/${number}.jpg`;
      photo.alt = `Sujana and Radha Krishna engagement photograph ${index}`;
      photo.loading = index < 3 ? 'eager' : 'lazy';
      photo.decoding = 'async';
      photo.draggable = false;
      photo.width = index === 8 ? 1400 : 1280;
      photo.height = index === 8 ? 934 : index === 11 ? 854 : 853;
      picture.append(source, photo);

      const watermark = document.createElement('span');
      watermark.className = 'gallery-watermark';
      watermark.textContent = 'SR · radhasujana.com';
      button.append(picture, watermark);
      galleryGrid.append(button);
    }

    const galleryImages = [...galleryGrid.querySelectorAll('img')];
    const showPhoto = index => {
      currentPhotoIndex = (index + galleryImages.length) % galleryImages.length;
      const source = galleryImages[currentPhotoIndex];
      lightboxImage.src = source.currentSrc || source.src;
      lightboxImage.alt = source.alt;
      lightboxCaption.textContent = isTelugu
        ? `ఫోటో ${currentPhotoIndex + 1} / ${galleryImages.length}`
        : `Photo ${currentPhotoIndex + 1} of ${galleryImages.length}`;
    };
    const closeLightbox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    };
    galleryGrid.querySelectorAll('.gallery-item').forEach(button => {
      button.addEventListener('click', () => {
        showPhoto(Number(button.dataset.galleryIndex));
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
        document.getElementById('lightboxClose')?.focus();
      });
      button.addEventListener('contextmenu', event => event.preventDefault());
    });
    document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev')?.addEventListener('click', () => showPhoto(currentPhotoIndex - 1));
    document.getElementById('lightboxNext')?.addEventListener('click', () => showPhoto(currentPhotoIndex + 1));
    lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', event => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
      if (event.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
    });
    document.querySelectorAll('a[href="#memories"]').forEach(link => {
      link.addEventListener('click', () => { galleryDetails.open = true; });
    });
  }

  document.getElementById('filmPlayButton')?.addEventListener('click', () => {
    const host = document.getElementById('filmLite');
    host.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/2CMnmL-LB4U?autoplay=1&amp;rel=0" title="Sujana and Radha Krishna engagement film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });

  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
})();
