/* Neon Light Loop — shaders extraídos verbatim de neon-light-loop.html (a tool do Arthur).
   Runtime mínimo: modo contínuo, sem partículas/prismas, mesmo pipeline scene → blur half-res → composite. */
(function(){
const VS = `#version 300 es
precision highp float;
out vec2 vUv;
void main(){
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;
const COMMON = `
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
`;
const NOISE = `
uniform float uPer;                          // base tiling period along the flow axis

float hash21(vec2 p){
  vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
// value noise, tileable along y with the given period, seeded by an integer offset
float vnoise(vec2 p, float per, vec2 so){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  vec2 a = vec2(i.x,       mod(i.y,       per)) + so;
  vec2 b = vec2(i.x + 1.0, mod(i.y,       per)) + so;
  vec2 c = vec2(i.x,       mod(i.y + 1.0, per)) + so;
  vec2 d = vec2(i.x + 1.0, mod(i.y + 1.0, per)) + so;
  return mix(mix(hash21(a), hash21(b), f.x),
             mix(hash21(c), hash21(d), f.x), f.y);
}
float fbm(vec2 p, float oct, vec2 so){
  float sum = 0.0, tot = 0.0, amp = 0.5, per = uPer;
  for(int i = 0; i < 6; i++){
    float w = clamp(oct - float(i), 0.0, 1.0);
    if(w <= 0.0) break;
    sum += amp * w * vnoise(p, per, so);
    tot += amp * w;
    p *= 2.0; per *= 2.0; amp *= 0.55;
  }
  return sum / max(tot, 1e-4);
}`;
const FS_SCENE = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform vec2  uRes;
uniform float uOff;        // noise scroll offset, already wrapped and signed
uniform float uOffT;       // turbulence scroll offset, independently wrapped
uniform float uSwayT;      // 0..1 sway clock
uniform float uEnvIn;      // envelope, computed on the CPU
uniform vec2  uSeedOff;
uniform float uSpread, uDensity, uDetail, uScale, uCurve, uTurb, uSoft, uCore, uBias;
uniform vec2  uFocus;
uniform float uSway, uBreathe;
uniform float uIntensity, uContrast, uBlackPt;
uniform float uDir, uReach;
uniform vec4  uTaps[4];      // x,y em uv · z idade (s) · w amplitude

${COMMON}
${NOISE}

void main(){
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  p = rot(uDir) * p;                         // flow direction
  vec2 F = vec2((uFocus.x - 0.5) * aspect, uFocus.y - 0.5);

  vec2 d = p - F;
  float r = length(d);
  float a = atan(d.x, -d.y);                 // 0 = straight down from the origin

  float tau = 6.28318530718;

  float env = pow(clamp(uEnvIn, 0.0, 1.0), 0.85);

  // ---- angular sway and breathing, both exactly periodic in uSwayT
  a += uSway * 0.22 * sin(uSwayT * tau) * smoothstep(0.0, 0.9, r);
  float breathe = 1.0 + uBreathe * 0.5 * sin(uSwayT * tau * 2.0);

  // ---- curvature: rays bow outward the further they travel
  a += uCurve * a * r * r;

  // ---- turbulent warp
  float off = uOff;
  if(uTurb > 0.0){
    float tn = fbm(vec2(a * 1.7 + 23.0, r * 1.1 - uOffT), 3.0, uSeedOff + vec2(91.0, 17.0));
    a += uTurb * 0.55 * (tn - 0.5) * r;
  }

  // ---- fan coordinate
  float spread = max(0.02, uSpread * mix(0.10, 1.0, env) * breathe);
  float u = a / spread;

  // ---- the light field itself
  float n = fbm(vec2(u * uDensity, r * uScale - off), uDetail, uSeedOff);
  n = clamp((n - 0.5) * uContrast + 0.5, 0.0, 1.0);
  n = max(0.0, n - uBlackPt) / max(1.0 - uBlackPt, 1e-3);

  float au = abs(u);
  float fan = (1.0 - smoothstep(1.0 - uSoft, 1.0 + uSoft * 0.35, au)) * exp(-pow(au, 3.0) * 0.55);
  float core = exp(-u * u * 5.0) * uCore;

  // ---- radial profile: near the origin it is a thin dim spike, far out it opens up
  float rr = clamp((r - 0.05) / uReach, 0.0, 1.0);
  float t = uBias * 0.5 + 0.5;
  float prof = mix(pow(1.0 - rr, 1.6), pow(rr, 1.15), t);
  prof *= smoothstep(0.0, 0.16, r);

  float v = (n * fan + core * fan) * prof * uIntensity * env;

  // ---- ondulação do toque: um anel lento e largo que atravessa o gás, mais um leve inchaço no centro.
  //      Multiplicativo, então só realça luz que já existe — nunca pinta por cima.
  float aspectR = uRes.x / uRes.y;
  for(int k = 0; k < 4; k++){
    vec4 tp = uTaps[k];
    if(tp.w <= 0.0) continue;
    vec2 dv = (uv - tp.xy) * vec2(aspectR, 1.0);
    float dist = length(dv);
    float age  = tp.z;
    // anel viaja até as bordas do cartão (~0.48 no espaço do frame) antes de se dissipar
    float ring = exp(-pow((dist - age * 0.30) / (0.13 + age * 0.05), 2.0));
    float swell = exp(-dist * dist / 0.10) * exp(-age * 1.6);
    float life = exp(-age * 0.35) * smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(1.9, 3.2, age));
    v *= 1.0 + tp.w * life * (0.32 * ring + 0.18 * swell);
    v += tp.w * life * ring * 0.035;
  }

  outColor = vec4(max(v, 0.0), 0.0, 0.0, 1.0);
}`;
const FS_BLUR = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uTex;
uniform vec2 uStep;                          // texel sized direction * radius
void main(){
  float w[5];
  w[0] = 0.2270270270; w[1] = 0.1945945946; w[2] = 0.1216216216;
  w[3] = 0.0540540541; w[4] = 0.0162162162;
  float s = texture(uTex, vUv).r * w[0];
  for(int i = 1; i < 5; i++){
    vec2 o = uStep * float(i);
    s += (texture(uTex, vUv + o).r + texture(uTex, vUv - o).r) * w[i];
  }
  outColor = vec4(s, 0.0, 0.0, 1.0);
}`;
const FS_COMP = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform sampler2D uSharp, uBlur;
uniform vec2  uRes;
uniform float uBlurMix, uGlow, uBrightness, uGamma, uShades;
uniform float uGrain, uVignette, uDither, uGrainSeed;
uniform vec3  uStops[8];
uniform float uStopCount;

// ---- prisms
uniform float uPmCount, uPmSize, uPmSizeVar, uPmSides, uPmElong;
uniform float uPmRefract, uPmDisperse, uPmEdge, uPmEdgeW, uPmSpec, uPmGlass;
uniform float uPmDrift, uPmRot, uPmSeed, uPmT;

${COMMON}

vec3 toLinear(vec3 c){ return pow(c, vec3(2.2)); }
vec3 toSRGB(vec3 c){ return pow(max(c, 0.0), vec3(1.0 / 2.2)); }

vec3 palette(float t){
  t = clamp(t, 0.0, 1.0);
  float n = max(uStopCount - 1.0, 1.0);
  float x = t * n;
  int i = int(min(floor(x), n - 1.0));
  float f = x - float(i);
  f = f * f * (3.0 - 2.0 * f);
  vec3 lo = uStops[0], hi = uStops[1];
  for(int k = 0; k < 7; k++){
    if(k == i){ lo = uStops[k]; hi = uStops[k + 1]; }
  }
  return mix(toLinear(lo), toLinear(hi), f);
}
float hash13(vec3 p){
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

/* the light field, read at any coordinate. Prisms are just this, sampled somewhere else. */
float fieldAt(vec2 uv){
  float sharp = texture(uSharp, uv).r;
  float blur  = texture(uBlur,  uv).r;
  float f = mix(sharp, blur, uBlurMix) + blur * uGlow;
  f = max(f, 0.0) * uBrightness;
  f = pow(f, 1.0 / uGamma);
  f = 1.0 - exp(-f);                          // soft shoulder, keeps highlights alive

  float aspect = uRes.x / uRes.y;
  vec2 q = (uv - 0.5) * vec2(aspect, 1.0);
  f *= mix(1.0, smoothstep(1.05, 0.28, length(q) * 1.25), uVignette);
  return f;
}
float quantize(float f){
  float N = uShades;
  if(N <= 1.5) return step(0.5, f);
  return floor(f * (N - 1.0) + 0.5) / (N - 1.0);
}
vec3 shadeAt(vec2 uv){ return palette(quantize(fieldAt(uv))); }

/* Exact signed distance to a convex regular polygon: project onto the plane of
   the facet whose outward direction is closest to the point. Returns the facet
   normal too, which is what bends the light. */
float sdFacet(vec2 q, float sides, float size, out vec2 nrm){
  float TAU = 6.28318530718;
  float seg = TAU / sides;
  float a   = atan(q.y, q.x);
  float af  = floor(a / seg + 0.5) * seg;
  nrm = vec2(cos(af), sin(af));
  return dot(q, nrm) - size;
}

void main(){
  float aspect = uRes.x / uRes.y;
  vec2  p = (vUv - 0.5) * vec2(aspect, 1.0);

  vec3 col = shadeAt(vUv);

  // ---------------------------------------------------------------- prisms
  if(uPmCount >= 1.0 && uPmGlass > 0.0){
    float bestD = 1e9;
    vec2  bestN = vec2(0.0, 1.0);
    vec2  bestW = vec2(1.0, 0.0);          // wedge axis of the winning prism
    float bestS = 1.0;

    for(int i = 0; i < 12; i++){
      if(float(i) >= uPmCount) break;
      float fi = float(i);
      float h1 = hash11(fi * 1.37 + uPmSeed);
      float h2 = hash11(fi * 2.71 + uPmSeed + 5.0);
      float h3 = hash11(fi * 3.93 + uPmSeed + 11.0);
      float h4 = hash11(fi * 5.11 + uPmSeed + 17.0);
      float TAU = 6.28318530718;

      // placement and motion, both exactly periodic in uPmT so the loop still closes
      vec2 c = vec2(0.12 + h1 * 0.76, 0.12 + h2 * 0.76);
      c += uPmDrift * 0.14 * vec2(sin(TAU * (uPmT + h3)), cos(TAU * (uPmT + h4)));
      vec2 cc = (c - 0.5) * vec2(aspect, 1.0);

      float ang  = h3 * TAU + TAU * floor(uPmRot + 0.5) * uPmT;
      float size = uPmSize * mix(1.0 - uPmSizeVar, 1.0 + uPmSizeVar, h4);

      vec2 q = rot(-ang) * (p - cc);
      q.x /= uPmElong;                      // elongate before measuring, so shards stay sharp

      vec2 n;
      float d = sdFacet(q, floor(uPmSides + 0.5), size, n);

      if(d < bestD){
        bestD = d;
        n.x /= uPmElong;
        bestN = normalize(rot(ang) * n);
        bestW = rot(ang) * vec2(cos(h4 * TAU), sin(h4 * TAU));
        bestS = size;
      }
    }

    float mask = smoothstep(uPmEdgeW, -uPmEdgeW, bestD);       // 1 inside the glass
    if(mask > 0.001){
      float thick = clamp(-bestD / max(bestS, 1e-3), 0.0, 1.0);

      // a wedge deviates light uniformly, a lens bends hardest at the rim. Both, mixed.
      vec2 disp = (bestW * 0.65 + bestN * (1.0 - thick) * 1.35) * uPmRefract;
      vec2 duv  = disp * vec2(1.0 / aspect, 1.0);

      // dispersion: three samples along the deviation, one channel taken from each
      float k = uPmDisperse * 0.35;
      vec3 cR = shadeAt(vUv + duv * (1.0 - k));
      vec3 cG = shadeAt(vUv + duv);
      vec3 cB = shadeAt(vUv + duv * (1.0 + k));
      vec3 refr = vec3(cR.r, cG.g, cB.b);

      /* Rim and sheen are lit BY the neon, not painted on top of it. Weighted by the
         field behind the glass, an edge crossing black stays dark, which is what
         stops a big off frame shard from drawing a bright line across nothing. */
      float lit = fieldAt(vUv + duv);

      float rim = smoothstep(uPmEdgeW * 2.5, 0.0, abs(bestD));
      refr += palette(1.0) * rim * uPmEdge * (0.10 + 0.90 * lit);

      float spec = pow(max(dot(bestN, normalize(vec2(-0.4, 0.9))), 0.0), 6.0);
      refr += palette(0.92) * spec * thick * uPmSpec * (0.15 + 0.85 * lit);

      col = mix(col, refr, mask * uPmGlass);
    }
  }

  float qz = quantize(fieldAt(vUv));
  if(uGrain > 0.0){
    float g = hash13(vec3(gl_FragCoord.xy, uGrainSeed)) - 0.5;
    col += g * uGrain * (0.25 + qz);
  }

  col = toSRGB(col);

  if(uDither > 0.5){
    float dth = hash13(vec3(gl_FragCoord.xy, 7.77)) - 0.5;
    col += dth / 255.0;
  }
  outColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

function hexToRGB(hex){ const n=parseInt(hex.slice(1),16); return [((n>>16)&255)/255,((n>>8)&255)/255,(n&255)/255]; }

window.NeonLightLoop = { mount(canvas, P){
  const gl = canvas.getContext('webgl2',{antialias:false,alpha:false,premultipliedAlpha:false});
  if(!gl||typeof gl.getExtension!=='function') return null;
  const HALF = !!gl.getExtension('EXT_color_buffer_float') || !!gl.getExtension('EXT_color_buffer_half_float'); gl.getExtension('OES_texture_float_linear');
  function compile(type,s){ const sh=gl.createShader(type); gl.shaderSource(sh,s); gl.compileShader(sh); if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh)); return sh; }
  function program(fs){ const p=gl.createProgram(); gl.attachShader(p,compile(gl.VERTEX_SHADER,VS)); gl.attachShader(p,compile(gl.FRAGMENT_SHADER,fs)); gl.linkProgram(p);
    if(!gl.getProgramParameter(p,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    const cache={}; const u=new Proxy({}, {get:(_,n)=>{ if(!(n in cache)) cache[n]=gl.getUniformLocation(p,n); return cache[n]; }}); return {p,u}; }
  let progScene,progBlur,progComp; try{ progScene=program(FS_SCENE); progBlur=program(FS_BLUR); progComp=program(FS_COMP);}catch(e){ console.warn('LightLoop shader',e); return null; }
  const vao=gl.createVertexArray();
  function makeTarget(w,h){ const tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex);
    gl.texImage2D(gl.TEXTURE_2D,0,HALF?gl.RGBA16F:gl.RGBA8,w,h,0,gl.RGBA,HALF?gl.HALF_FLOAT:gl.UNSIGNED_BYTE,null);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    const fbo=gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER,fbo); gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0); gl.bindFramebuffer(gl.FRAMEBUFFER,null); return {tex,fbo,w,h}; }
  function free(t){ if(t){gl.deleteTexture(t.tex);gl.deleteFramebuffer(t.fbo);} }
  const RT={scene:null,ping:null,pong:null,W:0,H:0,bw:0,bh:0};
  function setSize(w,h){ w=Math.max(2,Math.round(w)); h=Math.max(2,Math.round(h)); if(RT.W===w&&RT.H===h)return; canvas.width=w; canvas.height=h;
    free(RT.scene);free(RT.ping);free(RT.pong); const bw=Math.max(2,Math.round(w/2)),bh=Math.max(2,Math.round(h/2));
    RT.scene=makeTarget(w,h); RT.ping=makeTarget(bw,bh); RT.pong=makeTarget(bw,bh); RT.W=w;RT.H=h;RT.bw=bw;RT.bh=bh; }
  const drawQuad=()=>{ gl.bindVertexArray(vao); gl.drawArrays(gl.TRIANGLES,0,3); };
  const tilePeriod=()=>Math.max(1,Math.round(P.tile)); const frac=x=>x-Math.floor(x); const wrapP=x=>{const T=tilePeriod();return ((x%T)+T)%T;};
  const M={off:0,offT:0,swayT:0,env:1}; let frameIdx=0; const focus={x:P.focusX,y:P.focusY}; const taps=[];
  function render(){ const W=RT.W,H=RT.H;
    gl.bindFramebuffer(gl.FRAMEBUFFER,RT.scene.fbo); gl.viewport(0,0,W,H); gl.useProgram(progScene.p); const s=progScene.u;
    gl.uniform2f(s.uRes,W,H); gl.uniform1f(s.uPer,tilePeriod()); gl.uniform1f(s.uOff,M.off); gl.uniform1f(s.uOffT,M.offT); gl.uniform1f(s.uSwayT,M.swayT); gl.uniform1f(s.uEnvIn,M.env);
    gl.uniform2f(s.uSeedOff,Math.floor(P.seed)*13.0,Math.floor(P.seed)*57.0);
    gl.uniform1f(s.uSpread,P.spread); gl.uniform1f(s.uDensity,P.density); gl.uniform1f(s.uDetail,P.detail); gl.uniform1f(s.uScale,P.scale); gl.uniform1f(s.uCurve,P.curve);
    gl.uniform1f(s.uTurb,P.turb); gl.uniform1f(s.uSoft,P.soft); gl.uniform1f(s.uCore,P.core); gl.uniform1f(s.uBias,P.bias); gl.uniform2f(s.uFocus,focus.x,focus.y);
    gl.uniform1f(s.uSway,P.sway); gl.uniform1f(s.uBreathe,P.breathe); gl.uniform1f(s.uIntensity,P.intensity); gl.uniform1f(s.uContrast,P.contrast); gl.uniform1f(s.uBlackPt,P.blackPt);
    gl.uniform1f(s.uDir,P.dirAngle*Math.PI/180); gl.uniform1f(s.uReach,P.reach);
    const nowT=performance.now(); const tv=new Float32Array(16); for(let i=0;i<4;i++){ const tp=taps[i]; if(tp){ tv[i*4]=tp.x; tv[i*4+1]=tp.y; tv[i*4+2]=(nowT-tp.t)/1000; tv[i*4+3]=tp.amp; } }
    gl.uniform4fv(s['uTaps[0]'],tv); drawQuad();
    const radiusPx=P.blur*(H/1560); const passes=Math.max(1,Math.min(6,Math.ceil(radiusPx/26))); const perPass=radiusPx/Math.sqrt(passes)/4.0/2.0;
    gl.useProgram(progBlur.p); gl.uniform1i(progBlur.u.uTex,0); gl.activeTexture(gl.TEXTURE0);
    gl.bindFramebuffer(gl.FRAMEBUFFER,RT.ping.fbo); gl.viewport(0,0,RT.bw,RT.bh); gl.bindTexture(gl.TEXTURE_2D,RT.scene.tex); gl.uniform2f(progBlur.u.uStep,0.5/RT.bw,0.0); drawQuad();
    let src=RT.ping,dst=RT.pong;
    if(radiusPx>0.01){ for(let i=0;i<passes;i++){ gl.bindFramebuffer(gl.FRAMEBUFFER,dst.fbo); gl.bindTexture(gl.TEXTURE_2D,src.tex); gl.uniform2f(progBlur.u.uStep,perPass/RT.bw,0.0); drawQuad(); let t=src;src=dst;dst=t;
      gl.bindFramebuffer(gl.FRAMEBUFFER,dst.fbo); gl.bindTexture(gl.TEXTURE_2D,src.tex); gl.uniform2f(progBlur.u.uStep,0.0,perPass/RT.bh); drawQuad(); t=src;src=dst;dst=t; } }
    gl.bindFramebuffer(gl.FRAMEBUFFER,null); gl.viewport(0,0,W,H); gl.useProgram(progComp.p); const c=progComp.u;
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D,RT.scene.tex); gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D,src.tex);
    gl.uniform1i(c.uSharp,0); gl.uniform1i(c.uBlur,1); gl.uniform2f(c.uRes,W,H); gl.uniform1f(c.uBlurMix,P.blurMix); gl.uniform1f(c.uGlow,P.glow); gl.uniform1f(c.uBrightness,P.brightness);
    gl.uniform1f(c.uGamma,P.gamma); gl.uniform1f(c.uShades,Math.round(P.shades)); gl.uniform1f(c.uGrain,P.grain); gl.uniform1f(c.uVignette,P.vignette); gl.uniform1f(c.uDither,P.dither?1:0);
    gl.uniform1f(c.uGrainSeed,frameIdx%64); gl.uniform1f(c.uPmCount,0); gl.uniform1f(c.uPmGlass,0);
    const flat=new Float32Array(24); const cs=P.stops.map(hexToRGB); for(let i=0;i<8;i++){const col=cs[Math.min(i,cs.length-1)]; flat[i*3]=col[0];flat[i*3+1]=col[1];flat[i*3+2]=col[2];}
    gl.uniform3fv(c['uStops[0]'],flat); gl.uniform1f(c.uStopCount,Math.max(2,Math.min(8,cs.length))); drawQuad(); frameIdx++; }
  let raf=0,last=performance.now(),alive=true;
  function tick(now){ if(!alive)return; raf=requestAnimationFrame(tick); const dt=Math.min(.1,(now-last)/1000); last=now;
    for(let i=taps.length-1;i>=0;i--) if(now-taps[i].t>4500) taps.splice(i,1);
    const dir=P.reverse?-1:1; M.off=wrapP(M.off+P.speed*dir*dt); M.offT=wrapP(M.offT+P.speed*0.5*dir*dt); M.swayT=frac(M.swayT+P.speed/tilePeriod()*dt); M.env=1;
    const r={width:canvas.clientWidth,height:canvas.clientHeight}; /* client* ignora transforms CSS (canvas pode estar rotacionado) */ let dpr=Math.min(1.5,window.devicePixelRatio||1); if(P.maxH&&r.height*dpr>P.maxH) dpr=P.maxH/r.height; if(r.width>0) setSize(r.width*dpr,r.height*dpr); if(RT.W) render(); }
  raf=requestAnimationFrame(tick);
  return { setFocus(x,y){ focus.x=x; focus.y=y; }, tap(x,y,amp=1){ taps.unshift({x,y,t:performance.now(),amp}); if(taps.length>4)taps.length=4; }, destroy(){ alive=false; cancelAnimationFrame(raf); free(RT.scene);free(RT.ping);free(RT.pong); } };
}};
})();
