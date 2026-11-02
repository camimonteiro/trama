/* Trama onboarding deck — interaction-driven motion with GSAP (DDR-0003). */
gsap.registerPlugin(Observer, Flip, DrawSVGPlugin, SplitText);

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
// Reduced motion: no movement, only short fades.
const dur = (s) => (RM ? 0.2 : s);
const dist = (px) => (RM ? 0 : px);

const slides = [...document.querySelectorAll('.slide')];
const total = slides.length;
const pad = (n) => String(n).padStart(2, '0');
const splits = new Map();
let cur = -1;
let tl = null;
let lastNav = 0;

/* ---------- Git rail ---------- */
const railEls = [...document.querySelectorAll('#rail [data-step]')];
railEls.forEach((el) => {
  el._on = false;
  if (el.tagName === 'path') gsap.set(el, { drawSVG: '0% 0%' });
  else gsap.set(el, { autoAlpha: 0, scale: 0, transformOrigin: '50% 50%' });
});

function railTo(state, timeline) {
  railEls.forEach((el) => {
    const on = state >= +el.dataset.step && (!el.dataset.until || state <= +el.dataset.until);
    if (on === el._on) return;
    el._on = on;
    if (el.tagName === 'path') {
      timeline.to(el, { drawSVG: on ? '0% 100%' : '0% 0%', duration: dur(0.9), ease: 'power2.inOut' }, on ? 0.15 : 0);
    } else {
      timeline.to(el, {
        autoAlpha: on ? 1 : 0, scale: on ? 1 : 0, duration: dur(0.5),
        ease: on ? 'back.out(2.2)' : 'power2.in',
      }, on ? 0.6 : 0);
    }
  });
}

/* ---------- Slide-specific motion ---------- */
const FX = {
  // Issue card travels Backlog → In progress → In review → Done
  kanban(slide) {
    const card = slide.querySelector('[data-flip-id="issue"]');
    const cols = [...slide.querySelectorAll('.kcol')];
    cols[0].append(card);
    const t = gsap.timeline();
    [1, 2, 3].forEach((i) => {
      t.add(() => {
        const state = Flip.getState(card);
        cols[i].append(card);
        Flip.from(state, { duration: dur(0.7), ease: 'expo.inOut' });
      }, i === 1 ? 0.6 : '+=0.9');
    });
    return t;
  },
  // A line runs through the steps and lights each one as it passes
  flow(slide) {
    const steps = [...slide.querySelectorAll('.step')];
    const line = slide.querySelector('.flowline');
    steps.forEach((s) => s.classList.remove('lit'));
    const t = gsap.timeline();
    const each = RM ? 0.05 : 0.45;
    t.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: each * steps.length, ease: 'none' }, 0.3);
    steps.forEach((s, i) => {
      t.call(() => s.classList.add('lit'), null, 0.3 + each * i);
      t.fromTo(s, { y: dist(10) }, { y: 0, duration: dur(0.4), ease: 'back.out(3)' }, 0.3 + each * i);
    });
    return t;
  },
};

/* ---------- Fit: scale a slide down when its content is taller than the space ---------- */
function fit(slide) {
  const inner = slide.querySelector('.inner');
  inner.style.transform = '';
  slide.style.alignItems = '';
  const cs = getComputedStyle(slide);
  const avail = slide.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  const h = inner.scrollHeight;
  if (h > avail) {
    slide.style.alignItems = 'flex-start';
    inner.style.transform = `scale(${Math.max(0.55, avail / h)})`;
  }
}
addEventListener('resize', () => { if (cur >= 0) fit(slides[cur]); });

/* ---------- Navigation ---------- */
function go(n) {
  n = Math.max(0, Math.min(total - 1, n));
  if (n === cur) return;
  if (tl) tl.progress(1);
  lastNav = Date.now();

  const dir = n > cur ? 1 : -1;
  const from = slides[cur];
  const to = slides[n];

  // Capture shared elements before the swap so Flip can morph between slides
  const fromFlip = from ? [...from.querySelectorAll('[data-flip-id="pr"]')] : [];
  const toFlip = [...to.querySelectorAll('[data-flip-id="pr"]')];
  const flipState = fromFlip.length && toFlip.length ? Flip.getState(fromFlip) : null;

  tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  if (from) {
    if (flipState) gsap.set(fromFlip, { autoAlpha: 0 });
    tl.to(from.querySelectorAll('.a, h1, h2'), {
      autoAlpha: 0, x: dist(-dir * 40), duration: dur(0.35), ease: 'power2.in', stagger: RM ? 0 : 0.015,
    }, 0);
    tl.set(from, { autoAlpha: 0, zIndex: 0 });
  }

  gsap.set(to, { autoAlpha: 1, zIndex: 1 });
  fit(to);
  const enterAt = from ? (RM ? 0.15 : 0.3) : 0;
  // Shared cards fade in normally when there is no matching card to morph from
  const items = [...to.querySelectorAll('.a'), ...(flipState ? [] : toFlip)];
  gsap.set(items, { autoAlpha: 0 });

  const heading = to.querySelector('h1, h2');
  const split = splits.get(to);
  if (heading) {
    gsap.set(heading, { autoAlpha: 1, x: 0 });
    if (split && !RM) {
      tl.fromTo(split.words, { yPercent: dir * 110 }, { yPercent: 0, duration: 0.9, stagger: 0.05 }, enterAt);
    } else {
      tl.fromTo(heading, { autoAlpha: 0 }, { autoAlpha: 1, duration: dur(0.6) }, enterAt);
    }
  }
  tl.fromTo(items, { autoAlpha: 0, x: dist(dir * 48) }, {
    autoAlpha: 1, x: 0, duration: dur(0.8), stagger: RM ? 0 : 0.07,
  }, enterAt + (RM ? 0 : 0.1));

  // Commit message "typed" in
  to.querySelectorAll('.type').forEach((el) => {
    tl.fromTo(el, { clipPath: 'inset(0 100% 0 0)' }, {
      clipPath: 'inset(0 0% 0 0)', duration: RM ? 0 : 1.1, ease: `steps(${el.textContent.length})`,
    }, enterAt + 0.5);
  });

  if (flipState) {
    gsap.set(toFlip, { autoAlpha: 1 });
    tl.add(Flip.from(flipState, { targets: toFlip, duration: dur(0.9), ease: 'expo.inOut', absolute: true }), 0);
  }

  const fx = FX[to.dataset.fx];
  if (fx) tl.add(fx(to), enterAt + 0.2);

  // Rail
  const state = +to.dataset.git;
  const railTl = gsap.timeline();
  railTo(state, railTl);
  tl.add(railTl, 0);
  tl.to('#rail', { autoAlpha: state > 0 ? 1 : 0, duration: dur(0.4) }, 0);

  cur = n;
  updateChrome();
}

function updateChrome() {
  document.getElementById('counter').textContent = `${pad(cur + 1)} / ${pad(total)}`;
  gsap.to('#progress', { scaleX: (cur + 1) / total, duration: dur(0.6), ease: 'expo.out' });
  history.replaceState(null, '', `#/${cur + 1}`);
  document.querySelectorAll('#indexList button').forEach((b, i) => b.setAttribute('aria-current', i === cur));
  document.title = `${slides[cur].dataset.title} · Onboarding Trama`;
}

const next = () => go(cur + 1);
const prev = () => go(cur - 1);

/* ---------- Index overlay ---------- */
const index = document.getElementById('index');
const indexBtn = document.getElementById('indexBtn');
function toggleIndex(open = !index.classList.contains('open')) {
  index.classList.toggle('open', open);
  indexBtn.setAttribute('aria-expanded', open);
  if (open) {
    index.querySelector('[aria-current="true"]')?.focus();
    gsap.fromTo('#indexList li', { autoAlpha: 0, y: dist(12) }, { autoAlpha: 1, y: 0, duration: dur(0.4), stagger: RM ? 0 : 0.015, ease: 'expo.out' });
  }
}
slides.forEach((s, i) => {
  const li = document.createElement('li');
  const b = document.createElement('button');
  b.textContent = s.dataset.title;
  b.addEventListener('click', () => { toggleIndex(false); go(i); });
  li.append(b);
  document.getElementById('indexList').append(li);
});
indexBtn.addEventListener('click', () => toggleIndex());
index.addEventListener('click', (e) => { if (e.target === index) toggleIndex(false); });

/* ---------- Theme ---------- */
const root = document.documentElement;
try { const t = localStorage.getItem('trama-theme'); if (t) root.dataset.theme = t; } catch (e) {}
document.getElementById('themeBtn').addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  try { localStorage.setItem('trama-theme', root.dataset.theme); } catch (e) {}
});

/* ---------- Input ---------- */
document.getElementById('nextBtn').addEventListener('click', next);
document.getElementById('prevBtn').addEventListener('click', prev);

document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === 'Escape') return toggleIndex(false);
  if (e.key === 'i' || e.key === 'I') return toggleIndex();
  if (index.classList.contains('open')) return;
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
  else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  else if (e.key === 'Home') go(0);
  else if (e.key === 'End') go(total - 1);
});

// Wheel and touch: one gesture = one slide
Observer.create({
  target: document.getElementById('deck'),
  type: 'wheel,touch',
  wheelSpeed: -1,
  tolerance: 12,
  preventDefault: true,
  onDown: () => { if (Date.now() - lastNav > 650) prev(); },
  onUp: () => { if (Date.now() - lastNav > 650) next(); },
});

addEventListener('hashchange', () => {
  const n = parseInt(location.hash.replace('#/', ''), 10) - 1;
  if (!Number.isNaN(n) && n !== cur) go(n);
});

/* ---------- Start (after fonts, so SplitText measures the right glyphs) ---------- */
function start() {
  if (!RM) {
    slides.forEach((s) => {
      const h = s.querySelector('h1, h2');
      if (h) splits.set(s, SplitText.create(h, { type: 'words', mask: 'words' }));
    });
  }
  const n = parseInt(location.hash.replace('#/', ''), 10) - 1;
  go(Number.isNaN(n) ? 0 : n);
}
Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1500))]).then(start);
