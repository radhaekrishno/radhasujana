(() => {
  const trigger = document.querySelector('.menu-trigger');
  const menu = document.getElementById('journalMenu');
  const close = document.querySelector('.menu-close');
  const scrim = document.querySelector('.menu-scrim');
  if (!trigger || !menu || !scrim) return;
  menu.inert = true;
  const setMenu = open => {
    menu.inert = !open;
    document.body.classList.toggle('menu-open', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    trigger.setAttribute('aria-expanded', String(open));
    scrim.hidden = !open;
    if (open) close?.focus();
    else if (menu.contains(document.activeElement)) trigger.focus();
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
  let lastPhotoButton = null;
  if (lightbox) lightbox.inert = true;

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
      lightbox.inert = true;
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      lastPhotoButton?.focus();
    };
    galleryGrid.querySelectorAll('.gallery-item').forEach(button => {
      button.addEventListener('click', () => {
        lastPhotoButton = button;
        lightbox.inert = false;
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

  const videoDetails = document.querySelector('.video-details');
  const filmPoster = document.getElementById('filmLite')?.innerHTML;
  videoDetails?.addEventListener('toggle', () => {
    if (!videoDetails.open) {
      const host = document.getElementById('filmLite');
      if (host?.querySelector('iframe')) host.innerHTML = filmPoster;
    }
  });
  document.getElementById('filmLite')?.addEventListener('click', event => {
    if (!event.target.closest('#filmPlayButton')) return;
    const host = document.getElementById('filmLite');
    host.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/2CMnmL-LB4U?autoplay=1&amp;rel=0" title="Sujana and Radha Krishna engagement film" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const dialog = lightbox?.classList.contains('open') ? lightbox : menu.classList.contains('is-open') ? menu : null;
    if (!dialog) return;
    const items = [...dialog.querySelectorAll('a,button')];
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
})();


/* Hidden extra pull at the end of the journal. */
(() => {
  const threshold = 100;
  let gesture = null;
  let celebration = null;
  let isOpen = false;
  let dismissing = false;
  let previousFocus = null;
  let previousOverflow = '';
  let inertElements = [];
  const atEnd = () => window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 4;
  const unavailable = () => document.body.classList.contains('menu-open') || isOpen || dismissing;
  const closeCelebration = () => {
    if (!isOpen || dismissing) return;
    isOpen = false;
    dismissing = true;
    celebration.classList.remove('is-visible');
    inertElements.forEach(([element, inert]) => { element.inert = inert; });
    inertElements = [];
    document.body.style.overflow = previousOverflow;
    previousFocus?.focus({ preventScroll: true });
    window.setTimeout(() => {
      celebration.hidden = true;
      celebration.inert = true;
      dismissing = false;
    }, 380);
  };
  const buildCelebration = () => {
    const overlay = document.createElement('div');
    overlay.className = 'logo-celebration';
    overlay.hidden = true;
    overlay.inert = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', document.documentElement.lang === 'te'
      ? 'సుజన రాధా కృష్ణ లోగో' : 'Sujana and Radha Krishna logo');
    const logo = document.createElement('div');
    logo.className = 'logo-celebration__logo';
    const image = document.createElement('img');
    image.src = '/assets/sr-watermark-gold.png';
    image.alt = 'SR';
    image.width = 512;
    image.height = 512;
    image.draggable = false;
    logo.append(image);
    overlay.append(logo);
    const particles = document.createElement('div');
    particles.className = 'logo-celebration__particles';
    particles.setAttribute('aria-hidden', 'true');
    let goldPoints = [];
    const positionSparks = () => {
      particles.querySelectorAll('span').forEach(spark => {
        const angle = Math.random() * Math.PI * 2;
        const point = goldPoints.length
          ? goldPoints[Math.floor(Math.random() * goldPoints.length)]
          : [50 + Math.cos(angle) * 46, 50 + Math.sin(angle) * 46];
        spark.style.left = point[0] + '%';
        spark.style.top = point[1] + '%';
        spark.style.setProperty('--spark-delay', (Math.random() * 10).toFixed(2) + 's');
        spark.style.setProperty('--spark-size', (2 + Math.random() * 3).toFixed(1) + 'px');
      });
    };
    const sampleGold = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 80;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) return;
        context.drawImage(image, 0, 0, 80, 80);
        const pixels = context.getImageData(0, 0, 80, 80).data;
        goldPoints = [];
        for (let y = 1; y < 79; y += 1) {
          for (let x = 1; x < 79; x += 1) {
            if (pixels[(y * 80 + x) * 4 + 3] > 210) {
              goldPoints.push([(x + .5) / 80 * 100, (y + .5) / 80 * 100]);
            }
          }
        }
        positionSparks();
      } catch (_) { /* The existing ring remains the fallback for glint positions. */ }
    };
    for (let i = 0; i < 10; i += 1) particles.append(document.createElement('span'));
    logo.append(particles);
    overlay.positionSparks = positionSparks;
    image.addEventListener('load', sampleGold, { once: true });
    if (image.complete && image.naturalWidth) sampleGold();
    positionSparks();
    overlay.tabIndex = -1;
    let start = null;
    overlay.addEventListener('touchstart', event => {
      start = event.touches.length === 1 ? event.touches[0].clientY : null;
    }, { passive: true });
    overlay.addEventListener('touchmove', event => {
      if (start === null || event.touches.length !== 1) return;
      if (event.cancelable) event.preventDefault();
      if (event.touches[0].clientY - start > 65) {
        start = null;
        closeCelebration();
      }
    }, { passive: false });
    overlay.addEventListener('touchend', () => { start = null; }, { passive: true });
    overlay.addEventListener('touchcancel', () => { start = null; }, { passive: true });
    overlay.addEventListener('contextmenu', event => event.preventDefault());
    overlay.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeCelebration();
      if (event.key === 'Tab') { event.preventDefault(); overlay.focus(); }
    });
    document.body.append(overlay);
    return overlay;
  };
  const reveal = () => {
    if (unavailable()) return;
    celebration ||= buildCelebration();
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    inertElements = [...document.body.children]
      .filter(element => element !== celebration && !['SCRIPT', 'STYLE', 'LINK'].includes(element.tagName))
      .map(element => [element, element.inert]);
    inertElements.forEach(([element]) => { element.inert = true; });
    document.body.style.overflow = 'hidden';
    isOpen = true;
    celebration.positionSparks();
    celebration.hidden = false;
    celebration.inert = false;
    requestAnimationFrame(() => {
      if (isOpen) celebration.classList.add('is-visible');
    });
    celebration.focus({ preventScroll: true });
  };
  document.addEventListener('touchstart', event => {
    gesture = null;
    if (unavailable() || !atEnd() || event.touches.length !== 1 ||
        event.target.closest('button,input,textarea,select,iframe,[contenteditable="true"]')) return;
    const touch = event.touches[0];
    gesture = { x: touch.clientX, y: touch.clientY, pull: 0 };
  }, { passive: true });
  document.addEventListener('touchmove', event => {
    if (!gesture) return;
    if (event.touches.length !== 1 || !atEnd() || unavailable()) { gesture = null; return; }
    const touch = event.touches[0];
    const pull = gesture.y - touch.clientY;
    if (Math.abs(touch.clientX - gesture.x) > 45 || pull < -12) { gesture = null; return; }
    gesture.pull = pull;
    if (pull > 12 && event.cancelable) event.preventDefault();
  }, { passive: false });
  document.addEventListener('touchend', () => {
    const shouldReveal = gesture && gesture.pull >= threshold && atEnd();
    gesture = null;
    if (shouldReveal) reveal();
  }, { passive: true });
  document.addEventListener('touchcancel', () => { gesture = null; }, { passive: true });
})();
