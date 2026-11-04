/* Degradê vivo do header da Home ("Olá, Maria! Vamos começar?"): o Dark.mp4 do Arthur convertido numa folha de 75 quadros,
   tocado em palíndromo (vai e volta, loop sem corte) com crossfade entre quadros, mais a rampa azul em multiply.
   Portado do protótipo da Home; aqui ele pinta o fundo do histórico. Uso: const p=HeroPlane.mount(canvas,{w,h}); p.destroy() */
(function(){
  const SH = { cols:9, rows:9, count:75, fw:320, fh:394, pad:2 };
  const CELL_W = SH.fw + SH.pad * 2, CELL_H = SH.fh + SH.pad * 2;
  const STEPS_PER_SEC = 2.5;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DPR = Math.min(devicePixelRatio || 1, 1.5);
  // o mesmo enquadramento do header: pluma clara no topo, caindo p/ azul forte
  const HERO = { cx:201, cy:175, s:1.45, rot:0, flipY:false };
  const TINT = [[0, '#a8dcff'], [0.5, '#5f9de8'], [1, '#223f8c']];
  const SEQ = []; for (let i = 0; i < SH.count; i++) SEQ.push(i); for (let i = SH.count - 2; i >= 1; i--) SEQ.push(i);

  const sheet = new Image(); let ready = false; const waiting = new Set();
  sheet.onload = () => { ready = true; waiting.forEach(f => f()); waiting.clear(); };
  sheet.src = 'hist/plane-sheet.jpg';

  const cellOf = i => ({ sx: (i % SH.cols) * CELL_W + SH.pad, sy: ((i / SH.cols) | 0) * CELL_H + SH.pad });
  // um quadro no espaço do plano, com as bordas esticadas p/ nunca faltar cor
  function paintFrame(ctx, idx, alpha) {
    const { sx, sy } = cellOf(idx), { fw, fh } = SH, hw = fw / 2, hh = fh / 2, EXT = 1400;
    ctx.globalAlpha = alpha;
    ctx.drawImage(sheet, sx, sy, fw, fh, -hw, -hh, fw, fh);
    ctx.drawImage(sheet, sx, sy + 2, fw, 1, -hw, -hh - EXT, fw, EXT);
    ctx.drawImage(sheet, sx, sy + fh - 3, fw, 1, -hw, hh, fw, EXT);
    ctx.drawImage(sheet, sx + 2, sy, 1, fh, -hw - EXT, -hh, EXT, fh);
    ctx.drawImage(sheet, sx + fw - 3, sy, 1, fh, hw, -hh, EXT, fh);
    ctx.drawImage(sheet, sx + 2, sy + 2, 1, 1, -hw - EXT, -hh - EXT, EXT, EXT);
    ctx.drawImage(sheet, sx + fw - 3, sy + 2, 1, 1, hw, -hh - EXT, EXT, EXT);
    ctx.drawImage(sheet, sx + 2, sy + fh - 3, 1, 1, -hw - EXT, hh, EXT, EXT);
    ctx.drawImage(sheet, sx + fw - 3, sy + fh - 3, 1, 1, hw, hh, EXT, EXT);
    ctx.globalAlpha = 1;
  }
  function paintPlane(ctx, w, h, fr, phase) {
    const i0 = Math.floor(phase) % SEQ.length, frac = phase - Math.floor(phase);
    const a = SEQ[i0], b = SEQ[(i0 + 1) % SEQ.length];
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.clearRect(0, 0, w, h);
    ctx.translate(fr.cx, fr.cy); if (fr.rot) ctx.rotate(fr.rot); ctx.scale(fr.s, fr.flipY ? -fr.s : fr.s);
    paintFrame(ctx, a, 1); if (frac > 0.001) paintFrame(ctx, b, frac);
    // rampa azul do Arthur (mix-blend hue no Figma): sem ela o miolo da pluma estoura em branco
    const hw = SH.fw / 2, hh = SH.fh / 2, EXT = 1400, g = ctx.createLinearGradient(0, -hh, 0, hh);
    for (const [stop, color] of TINT) g.addColorStop(stop, color);
    ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = g; ctx.fillRect(-hw - EXT, -hh - EXT, SH.fw + EXT * 2, SH.fh + EXT * 2);
    ctx.globalCompositeOperation = 'source-over'; ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  function mount(cv, { w = 402, h = 874, framing = HERO } = {}) {
    cv.width = Math.round(w * DPR); cv.height = Math.round(h * DPR);
    const ctx = cv.getContext('2d'); let raf = 0, last = 0, on = true;
    const frame = now => { if (!on) return; raf = requestAnimationFrame(frame);
      if (now - last < 32) return; last = now; // ~30fps é de sobra p/ um degradê lento
      paintPlane(ctx, cv.width, cv.height, framing, REDUCED ? 18 : (now / 1000) * STEPS_PER_SEC % SEQ.length); };
    const start = () => { if (on) raf = requestAnimationFrame(frame); };
    if (ready) start(); else waiting.add(start);
    return { destroy() { on = false; cancelAnimationFrame(raf); waiting.delete(start); } };
  }
  window.HeroPlane = { mount };
})();
