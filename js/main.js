/* ── Barber Data ──────────────────────────────────────────── */
// TODO: Replace placeholder social URLs (#) with real barber social media links once confirmed
const BARBERS = {
  lard: {
    name: 'Lard',
    hashtag: '#GroomedByLARD',
    role: 'Senior Barber',
    image: 'https://placehold.co/600x800/1a1a1a/c9a227',
    bio: 'Specialty cuts, shampoo & hairdry, quick massage, tonic services and styling with local or imported products. Book the full ₱999 / 1hr signature experience.',
    highlights: [
      { caption: 'Skin fade + textured top',    img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Classic taper',               img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Pompadour with tonic finish', img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
    ],
    social: [
      { platform: 'instagram', url: '#', label: '@barber.lard' },
      { platform: 'tiktok',    url: '#', label: '@barber.lard' },
    ],
  },
  jobie: {
    name: 'Jobie',
    hashtag: '#GroomedbyJOBIE',
    role: 'Senior Barber',
    image: 'https://placehold.co/600x800/1a1a1a/c9a227',
    bio: 'Specialty cuts, shampoo & hairdry, tonic services, quick massage and styling with local or imported products. ₱999 / 1hr.',
    highlights: [
      { caption: 'Crew cut with line up',  img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Mid fade + beard trim',  img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Slick back styling',     img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
    ],
    social: [
      { platform: 'instagram', url: '#', label: '@barber.jobie' },
      { platform: 'tiktok',    url: '#', label: '@barber.jobie' },
    ],
  },
  fred: {
    name: 'Fred',
    hashtag: '#GroomedByFRED',
    role: 'Senior Barber',
    image: 'https://placehold.co/600x800/1a1a1a/c9a227',
    bio: 'Specialty cuts, shampoo & hairdry, quick massage, tonic services and styling with local or imported products. ₱999 / 1hr.',
    highlights: [
      { caption: 'High fade + design', img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Textured quiff',     img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Classic side part',  img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
    ],
    social: [
      { platform: 'instagram', url: '#', label: '@barber.fred' },
      { platform: 'tiktok',    url: '#', label: '@fredbarber26' },
    ],
  },
  josh: {
    name: 'Josh',
    hashtag: '#GroomedByJOSH',
    role: 'Senior Barber',
    image: 'https://placehold.co/600x800/1a1a1a/c9a227',
    bio: 'Specialty cuts, shampoo & hairdry, quick massage and styling with local or imported products. ₱999 / 1hr.',
    highlights: [
      { caption: 'Low fade + fringe', img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Buzz cut clean up', img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Modern mullet',     img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
    ],
    social: [
      { platform: 'instagram', url: '#', label: '@barber.josh' },
      { platform: 'tiktok',    url: '#', label: '@barber.josh' },
    ],
  },
  jc: {
    name: 'JC',
    hashtag: '#GroomedByJC',
    role: 'Junior Barber',
    image: 'https://placehold.co/600x800/1a1a1a/c9a227',
    bio: 'Apprentice services guided by our senior barbers to assure quality. Specialty cuts, shampoo & hairdry, quick massage and styling. ₱499 / 1hr.',
    highlights: [
      { caption: 'Basic fade',           img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Trim & clean up',      img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
      { caption: 'Student showcase cut', img: 'https://placehold.co/450x600/1a1a1a/c9a227' },
    ],
    social: [
      { platform: 'instagram', url: '#', label: '@barber.jc' },
      { platform: 'tiktok',    url: '#', label: '@barber.jc' },
    ],
  },
};

/* ── Booking Modals ───────────────────────────────────────── */
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('booking-modal-close').focus();
}

function closeBookingModal() {
  document.getElementById('booking-modal').setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function openGumBookingModal() {
  const modal = document.getElementById('gum-booking-modal');
  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('gum-booking-modal-close').focus();
}

function closeGumBookingModal() {
  document.getElementById('gum-booking-modal').setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initBookingModals() {
  // Close buttons
  document.getElementById('booking-modal-close')?.addEventListener('click', closeBookingModal);
  document.getElementById('gum-booking-modal-close')?.addEventListener('click', closeGumBookingModal);

  // Backdrop click (outside the modal box)
  document.getElementById('booking-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeBookingModal();
  });
  document.getElementById('gum-booking-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeGumBookingModal();
  });

  // Escape key — close whichever booking modal is open
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!document.getElementById('booking-modal')?.hasAttribute('hidden')) closeBookingModal();
    if (!document.getElementById('gum-booking-modal')?.hasAttribute('hidden')) closeGumBookingModal();
  });
}

/* ── Profile Modal ────────────────────────────────────────── */
function openProfile(id) {
  const data = BARBERS[id];
  if (!data) return;

  const modal    = document.getElementById('profile-modal');
  const avatar   = document.getElementById('modal-avatar');
  const name     = document.getElementById('modal-barber-name');
  const role     = document.getElementById('modal-role');
  const bio      = document.getElementById('modal-bio');
  const cutsGrid = document.getElementById('modal-cuts');

  avatar.src = data.image;
  avatar.alt = `${data.name}, ${data.role} at Pomade Cartel`;
  // Show placeholder label on the avatar's parent container
  const avatarWrap = avatar.parentElement;
  let avatarLabel = avatarWrap.querySelector('.placeholder-label');
  if (!avatarLabel) {
    avatarLabel = document.createElement('span');
    avatarLabel.className = 'placeholder-label';
    avatarLabel.setAttribute('aria-hidden', 'true');
    avatarLabel.style.cssText = 'font-size:0.55rem;padding:0.25rem 0.6rem;';
    avatarWrap.style.position = 'relative';
    avatarWrap.appendChild(avatarLabel);
  }
  avatarLabel.textContent = `${data.name} — portrait`;
  name.textContent = data.name;
  role.textContent = data.role;
  bio.textContent  = data.bio;

  // Social pills
  const socialRow = document.getElementById('modal-social');
  socialRow.innerHTML = (data.social || []).map(({ platform, url, label }) => `
    <a href="${url}" class="social-pill" data-platform="${platform}"
       target="_blank" rel="noopener noreferrer" aria-label="${label} on ${platform}">
      ${platform.charAt(0).toUpperCase() + platform.slice(1)} &#8599;
      <span class="social-pill__handle">${label}</span>
    </a>
  `).join('');

  cutsGrid.innerHTML = data.highlights.map(({ img, caption }) => `
    <div class="cut-card">
      <div class="img-wrap">
        <img src="${img}" alt="${caption}" class="cut-card__img" loading="lazy" />
        <span class="placeholder-label" aria-hidden="true">${data.name} — ${caption}</span>
      </div>
      <p class="cut-card__caption">${caption}</p>
    </div>
  `).join('');

  modal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  // Return focus to close button when modal opens
  document.getElementById('modal-close').focus();
}

function closeProfile() {
  const modal = document.getElementById('profile-modal');
  modal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

function initBarbers() {
  // Open on card click
  document.querySelectorAll('.barber-card[data-barber]').forEach((card) => {
    card.addEventListener('click', () => openProfile(card.dataset.barber));
  });

  // Close on × button
  document.getElementById('modal-close')?.addEventListener('click', closeProfile);

  // Close on backdrop click (outside .modal box)
  document.getElementById('profile-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeProfile();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('profile-modal');
      if (!modal?.hasAttribute('hidden')) closeProfile();
    }
  });
}

/* ── Scroll Reveal ────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-group');

  // For reduced-motion users, mark everything visible immediately
  if (!shouldAnimate()) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

/* ── Nav ──────────────────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const links = document.querySelector('.nav__links');

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile toggle
  hamburger?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  links?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Mark active link by current page
  const current = location.pathname.split('/').pop() || 'index.html';
  links?.querySelectorAll('a[href]').forEach((a) => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

/* ── Before / After Slider ────────────────────────────────── */
function initBeforeAfterSlider() {
  const slider  = document.getElementById('ba-slider');
  const before  = document.getElementById('ba-before');
  const handle  = document.getElementById('ba-handle');
  if (!slider || !before || !handle) return;

  let pos = 50; // percentage
  let dragging = false;

  function setPos(pct) {
    pos = Math.min(100, Math.max(0, pct));
    before.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    handle.style.left     = `${pos}%`;
    handle.setAttribute('aria-valuenow', Math.round(pos));
  }

  function getPct(clientX) {
    const rect = slider.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  // Mouse
  slider.addEventListener('mousedown', (e) => {
    dragging = true;
    setPos(getPct(e.clientX));
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    setPos(getPct(e.clientX));
  });

  window.addEventListener('mouseup', () => { dragging = false; });

  // Touch
  slider.addEventListener('touchstart', (e) => {
    dragging = true;
    setPos(getPct(e.touches[0].clientX));
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    setPos(getPct(e.touches[0].clientX));
  }, { passive: true });

  window.addEventListener('touchend', () => { dragging = false; });

  // Keyboard (arrow keys on the handle)
  handle.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  { setPos(pos - 2); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPos(pos + 2); e.preventDefault(); }
  });

  // Hide hint after first interaction
  const hint = handle.querySelector('.ba-hint');
  slider.addEventListener('mousedown',  () => { if (hint) hint.style.animation = 'none'; }, { once: true });
  slider.addEventListener('touchstart', () => { if (hint) hint.style.animation = 'none'; }, { once: true, passive: true });

  // Reduced-motion: disable the hint pulse only (slider still works)
  if (!shouldAnimate() && hint) {
    hint.style.animation = 'none';
    hint.style.opacity   = '0.55';
  }
}

/* ── Final CTA Parallax ───────────────────────────────────── */
function initCtaParallax() {
  if (!shouldAnimate()) return;

  const ctaBg = document.querySelector('.final-cta__bg');
  if (!ctaBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const rect = ctaBg.parentElement.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        ctaBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Reveal: skip all if reduced-motion ──────────────────── */
function shouldAnimate() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initBeforeAfterSlider();
  initCtaParallax();
  initBarbers();
  initBookingModals();
});
