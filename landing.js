/* One entrance per tab session; loaded in the head to avoid a page flash. */
(() => {
  const root = document.documentElement;
  const key = 'sr-landing-v1';
  try { if (sessionStorage.getItem(key)) return; } catch (_) {}
  root.classList.add('landing-active');
  let overlay, children = [], finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    root.classList.remove('landing-active');
    root.classList.remove('landing-mounted');
    children.forEach(([node, inert]) => { node.inert = inert; });
    overlay?.remove();
    document.removeEventListener('keydown', onKey);
  };
  const onKey = event => { if (event.key === 'Escape') finish(); };
  // Even a missing image or interrupted animation must release the page.
  const safetyTimer = window.setTimeout(finish, 7500);
  document.addEventListener('keydown', onKey);
  window.addEventListener('pagehide', finish, { once: true });
  const start = () => {
    if (finished) return;
    overlay = document.createElement('div');
    overlay.className = 'sr-landing';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `<div class="sr-landing__backdrop"></div><div class="sr-landing__mark">
      <svg viewBox="260 30 930 930" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <path id="sr-letter-s" d="M710 205 C650 204 578 167 511 204 C430 243 414 333 460 401 C496 452 576 490 651 542 C738 600 773 708 718 774 C663 844 546 853 456 803 C371 754 355 681 386 619 C416 557 478 530 537 557 C602 584 607 636 573 677 C558 696 533 702 525 680 C529 654 508 634 482 645 C442 665 477 719 524 722 C595 728 650 665 614 601 C568 517 435 508 382 593 C304 713 382 831 505 850 C608 869 715 840 771 783 C839 708 815 609 759 550 C711 497 598 445 531 395 C460 340 456 274 519 243 C586 212 642 229 699 297 L710 205 Z"/><path id="sr-letter-r" d="M589 285 L792 288 C875 286 943 326 955 403 C969 483 919 532 841 538 C885 564 921 622 950 664 C983 711 1017 755 1046 758 C1093 766 1105 726 1079 709 C1060 698 1036 709 1046 725 C998 712 1024 657 1070 661 C1128 666 1139 738 1101 765 C1044 808 973 767 932 715 L826 589 L775 603 L703 548 L704 700 C704 730 713 738 719 752 L590 759 L590 739 C624 732 643 717 643 683 L643 572 L699 611 L699 698 C699 716 703 730 716 744 L609 744 C635 735 651 716 651 683 L651 572 L643 341 C643 310 623 301 590 301 Z M707 320 L707 482 C762 521 835 526 873 476 C913 426 878 347 826 325 Z"/>
          <clipPath id="sr-letter-clip"><use href="#sr-letter-s"/><use href="#sr-letter-r"/></clipPath>
          <mask id="sr-vine-mask" maskUnits="userSpaceOnUse" x="260" y="30" width="930" height="930">
            <g fill="none" stroke="white" stroke-width="105" stroke-linecap="round" stroke-linejoin="round">
              <path class="sr-vine sr-vine--top" pathLength="1" d="M700 262 C611 181 517 154 490 177 C579 84 681 148 719 100 C763 75 739 169 753 160 C820 83 929 156 866 221 C817 247 784 187 847 172 M869 242 C916 215 924 151 948 191 C1009 208 1010 215 977 212"/>
              <path class="sr-vine sr-vine--left" pathLength="1" d="M484 442 C342 459 404 279 447 230 M450 456 C437 518 398 577 356 617 C309 685 323 523 309 584 M548 524 C475 467 417 527 348 510 C301 486 283 541 365 518"/>
              <path class="sr-vine sr-vine--right" pathLength="1" d="M919 377 C935 280 1031 213 1073 296 C1122 390 1060 477 1006 520 C1100 477 1184 443 1118 394 M976 438 C1012 332 1057 347 1055 410 M900 551 C973 549 1032 510 1105 520 C1163 484 1152 569 1085 555 M974 547 C1004 569 1053 610 1077 590 M968 557 C935 590 981 661 998 639 M1103 577 C1144 644 1075 659 1082 623"/>
              <path class="sr-vine sr-vine--bottom" pathLength="1" d="M683 821 C752 902 861 779 869 748 M802 817 C774 875 809 935 872 890 C934 847 883 799 850 822 M726 846 C647 895 561 897 516 871 M742 883 C709 933 766 948 767 890 M948 796 C1030 829 1084 787 1084 785 M938 817 C966 875 981 826 961 813"/>
            </g>
            <use href="#sr-letter-s" fill="black"/><use href="#sr-letter-r" fill="black"/>
          </mask>
          <mask id="sr-gold-mask" maskUnits="userSpaceOnUse" x="260" y="30" width="930" height="930" style="mask-type:alpha"><image href="/assets/sr-names-raised-gold.webp" width="1378" height="1141"/></mask>
          <linearGradient id="sr-light"><stop offset="0" stop-color="#fff7d1" stop-opacity="0"/><stop offset=".45" stop-color="#fff7d1" stop-opacity="0"/><stop offset=".5" stop-color="#fffef3" stop-opacity=".6"/><stop offset=".55" stop-color="#fff7d1" stop-opacity="0"/><stop offset="1" stop-color="#fff7d1" stop-opacity="0"/></linearGradient>
        </defs>
        <image class="sr-landing__letters" href="/assets/sr-names-raised-gold.webp" width="1378" height="1141" clip-path="url(#sr-letter-clip)"/>
        <image href="/assets/sr-names-raised-gold.webp" width="1378" height="1141" mask="url(#sr-vine-mask)"/>
        <image class="sr-landing__complete" href="/assets/sr-names-raised-gold.webp" width="1378" height="1141"/>
        <g mask="url(#sr-gold-mask)"><rect class="sr-landing__light" x="-700" y="30" width="1500" height="930" fill="url(#sr-light)"/></g>
        <g class="sr-landing__spark" transform="translate(710 220)"><path d="M0 -12 L2 -2 L12 0 L2 2 L0 12 L-2 2 L-12 0 L-2 -2Z" fill="#fff8df"/></g>
        <g class="sr-landing__spark sr-landing__spark--second" transform="translate(1000 540)"><path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2Z" fill="#fff8df"/></g>
      </svg></div>`;
    children = [...document.body.children].filter(node => !['SCRIPT','STYLE','LINK'].includes(node.tagName)).map(node => [node, node.inert]);
    children.forEach(([node]) => { node.inert = true; });
    document.body.append(overlay);
    root.classList.add('landing-mounted');
    const image = new Image();
    let begun = false;
    const begin = () => {
      if (begun || finished) return;
      begun = true;
      try { sessionStorage.setItem(key, '1'); } catch (_) {}
      overlay.classList.add('is-playing');
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.setTimeout(() => { window.clearTimeout(safetyTimer); finish(); }, reduced ? 550 : 5300);
    };
    image.onload = begin;
    image.onerror = finish;
    image.src = '/assets/sr-names-raised-gold.webp';
    if (image.complete && image.naturalWidth) begin();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
