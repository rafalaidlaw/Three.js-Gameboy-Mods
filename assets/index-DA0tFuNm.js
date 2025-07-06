(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const r of s) if (r.type === "childList") for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function e(s) {
    const r = {};
    return s.integrity && (r.integrity = s.integrity), s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(s) {
    if (s.ep) return;
    s.ep = true;
    const r = e(s);
    fetch(s.href, r);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const va = "176", ui = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ci = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Wl = 0, Wa = 1, Xl = 2, nl = 1, Yl = 2, hn = 3, Tn = 0, we = 1, un = 2, yn = 0, di = 1, Xa = 2, Ya = 3, qa = 4, ql = 5, Bn = 100, $l = 101, jl = 102, Kl = 103, Zl = 104, Jl = 200, Ql = 201, tc = 202, ec = 203, Tr = 204, Ar = 205, nc = 206, ic = 207, sc = 208, rc = 209, ac = 210, oc = 211, lc = 212, cc = 213, hc = 214, wr = 0, Rr = 1, Cr = 2, pi = 3, Pr = 4, Lr = 5, Dr = 6, Ur = 7, xa = 0, uc = 1, dc = 2, bn = 0, fc = 1, pc = 2, mc = 3, gc = 4, _c = 5, vc = 6, xc = 7, il = 300, mi = 301, gi = 302, Ir = 303, Nr = 304, Fs = 306, Fr = 1e3, Hn = 1001, Or = 1002, $e = 1003, Mc = 1004, Ki = 1005, Ze = 1006, Gs = 1007, kn = 1008, tn = 1009, sl = 1010, rl = 1011, Ni = 1012, Ma = 1013, Gn = 1014, dn = 1015, Gi = 1016, Sa = 1017, Ea = 1018, Fi = 1020, al = 35902, ol = 1021, ll = 1022, Ye = 1023, Oi = 1026, Bi = 1027, cl = 1028, ya = 1029, hl = 1030, ba = 1031, Ta = 1033, ys = 33776, bs = 33777, Ts = 33778, As = 33779, Br = 35840, zr = 35841, Hr = 35842, kr = 35843, Vr = 36196, Gr = 37492, Wr = 37496, Xr = 37808, Yr = 37809, qr = 37810, $r = 37811, jr = 37812, Kr = 37813, Zr = 37814, Jr = 37815, Qr = 37816, ta = 37817, ea = 37818, na = 37819, ia = 37820, sa = 37821, ws = 36492, ra = 36494, aa = 36495, ul = 36283, oa = 36284, la = 36285, ca = 36286, Sc = 3200, Ec = 3201, Aa = 0, yc = 1, En = "", De = "srgb", _i = "srgb-linear", Ls = "linear", Zt = "srgb", jn = 7680, $a = 519, bc = 512, Tc = 513, Ac = 514, dl = 515, wc = 516, Rc = 517, Cc = 518, Pc = 519, ja = 35044, Ka = "300 es", fn = 2e3, Ds = 2001;
class Yn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? false : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const s = n[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, t);
      t.target = null;
    }
  }
}
const xe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Rs = Math.PI / 180, ha = 180 / Math.PI;
function Wi() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xe[i & 255] + xe[i >> 8 & 255] + xe[i >> 16 & 255] + xe[i >> 24 & 255] + "-" + xe[t & 255] + xe[t >> 8 & 255] + "-" + xe[t >> 16 & 15 | 64] + xe[t >> 24 & 255] + "-" + xe[e & 63 | 128] + xe[e >> 8 & 255] + "-" + xe[e >> 16 & 255] + xe[e >> 24 & 255] + xe[n & 255] + xe[n >> 8 & 255] + xe[n >> 16 & 255] + xe[n >> 24 & 255]).toLowerCase();
}
function Ft(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Lc(i, t) {
  return (i % t + t) % t;
}
function Ws(i, t, e) {
  return (1 - e) * i + e * t;
}
function yi(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Te(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Dc = { DEG2RAD: Rs };
class Tt {
  constructor(t = 0, e = 0) {
    Tt.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Ft(this.x, t.x, e.x), this.y = Ft(this.y, t.y, e.y), this;
  }
  clampScalar(t, e) {
    return this.x = Ft(this.x, t, e), this.y = Ft(this.y, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ft(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ft(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Dt {
  constructor(t, e, n, s, r, a, o, l, c) {
    Dt.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c);
  }
  set(t, e, n, s, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = o, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], m = n[5], g = n[8], v = s[0], p = s[3], d = s[6], T = s[1], b = s[4], S = s[7], I = s[2], R = s[5], w = s[8];
    return r[0] = a * v + o * T + l * I, r[3] = a * p + o * b + l * R, r[6] = a * d + o * S + l * w, r[1] = c * v + h * T + u * I, r[4] = c * p + h * b + u * R, r[7] = c * d + h * S + u * w, r[2] = f * v + m * T + g * I, r[5] = f * p + m * b + g * R, r[8] = f * d + m * S + g * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return e * a * h - e * o * c - n * r * h + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = h * a - o * c, f = o * l - h * r, m = c * r - a * l, g = e * u + n * f + s * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return t[0] = u * v, t[1] = (s * c - h * n) * v, t[2] = (o * n - s * a) * v, t[3] = f * v, t[4] = (h * e - s * l) * v, t[5] = (s * r - o * e) * v, t[6] = m * v, t[7] = (n * l - c * e) * v, t[8] = (a * e - n * r) * v, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -s * c, s * l, -s * (-c * a + l * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Xs.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Xs.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Xs.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Xs = new Dt();
function fl(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return true;
  return false;
}
function zi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Uc() {
  const i = zi("canvas");
  return i.style.display = "block", i;
}
const Za = {};
function Cs(i) {
  i in Za || (Za[i] = true, console.warn(i));
}
function Ic(i, t, e) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
function Nc(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Fc(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Ja = new Dt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Qa = new Dt().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Oc() {
  const i = { enabled: true, workingColorSpace: _i, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === Zt && (s.r = pn(s.r), s.g = pn(s.g), s.b = pn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Zt && (s.r = fi(s.r), s.g = fi(s.g), s.b = fi(s.b))), s;
  }, fromWorkingColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === En ? Ls : this.spaces[s].transfer;
  }, getLuminanceCoefficients: function(s, r = this.workingColorSpace) {
    return s.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(s) {
    Object.assign(this.spaces, s);
  }, _getMatrix: function(s, r, a) {
    return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  } }, t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [_i]: { primaries: t, whitePoint: n, transfer: Ls, toXYZ: Ja, fromXYZ: Qa, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: De }, outputColorSpaceConfig: { drawingBufferColorSpace: De } }, [De]: { primaries: t, whitePoint: n, transfer: Zt, toXYZ: Ja, fromXYZ: Qa, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: De } } }), i;
}
const Yt = Oc();
function pn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function fi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Kn;
class Bc {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      Kn === void 0 && (Kn = zi("canvas")), Kn.width = t.width, Kn.height = t.height;
      const s = Kn.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = Kn;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = zi("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = pn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(pn(e[n] / 255) * 255) : e[n] = pn(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let zc = 0;
class wa {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: zc++ }), this.uuid = Wi(), this.data = t, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(Ys(s[a].image)) : r.push(Ys(s[a]));
      } else r = Ys(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ys(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Bc.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Hc = 0;
class Se extends Yn {
  constructor(t = Se.DEFAULT_IMAGE, e = Se.DEFAULT_MAPPING, n = Hn, s = Hn, r = Ze, a = kn, o = Ye, l = tn, c = Se.DEFAULT_ANISOTROPY, h = En) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Hc++ }), this.uuid = Wi(), this.name = "", this.source = new wa(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Tt(0, 0), this.repeat = new Tt(1, 1), this.center = new Tt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Dt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isTextureArray = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isTextureArray = t.isTextureArray, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== il) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Fr:
        t.x = t.x - Math.floor(t.x);
        break;
      case Hn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Or:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Fr:
        t.y = t.y - Math.floor(t.y);
        break;
      case Hn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Or:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
Se.DEFAULT_IMAGE = null;
Se.DEFAULT_MAPPING = il;
Se.DEFAULT_ANISOTROPY = 1;
class oe {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    oe.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = s;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, s, r;
    const l = t.elements, c = l[0], h = l[4], u = l[8], f = l[1], m = l[5], g = l[9], v = l[2], p = l[6], d = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(c + m + d - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const b = (c + 1) / 2, S = (m + 1) / 2, I = (d + 1) / 2, R = (h + f) / 4, w = (u + v) / 4, N = (g + p) / 4;
      return b > S && b > I ? b < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), s = R / n, r = w / n) : S > I ? S < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(S), n = R / s, r = N / s) : I < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(I), n = w / r, s = N / r), this.set(n, s, r, e), this;
    }
    let T = Math.sqrt((p - g) * (p - g) + (u - v) * (u - v) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - g) / T, this.y = (u - v) / T, this.z = (f - h) / T, this.w = Math.acos((c + m + d - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Ft(this.x, t.x, e.x), this.y = Ft(this.y, t.y, e.y), this.z = Ft(this.z, t.z, e.z), this.w = Ft(this.w, t.w, e.w), this;
  }
  clampScalar(t, e) {
    return this.x = Ft(this.x, t, e), this.y = Ft(this.y, t, e), this.z = Ft(this.z, t, e), this.w = Ft(this.w, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ft(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class kc extends Yn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth ? n.depth : 1, this.scissor = new oe(0, 0, t, e), this.scissorTest = false, this.viewport = new oe(0, 0, t, e);
    const s = { width: t, height: e, depth: this.depth };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ze, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, multiview: false }, n);
    const r = new Se(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), t !== null && (t.renderTarget = this), this._depthTexture = t;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let e = 0, n = t.textures.length; e < n; e++) {
      this.textures[e] = t.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
      const s = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new wa(s);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Wn extends kc {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class pl extends Se {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = $e, this.minFilter = $e, this.wrapR = Hn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Vc extends Se {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = $e, this.minFilter = $e, this.wrapR = Hn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Xn {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  static slerpFlat(t, e, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], h = n[s + 2], u = n[s + 3];
    const f = r[a + 0], m = r[a + 1], g = r[a + 2], v = r[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = g, t[e + 3] = v;
      return;
    }
    if (u !== v || l !== f || c !== m || h !== g) {
      let p = 1 - o;
      const d = l * f + c * m + h * g + u * v, T = d >= 0 ? 1 : -1, b = 1 - d * d;
      if (b > Number.EPSILON) {
        const I = Math.sqrt(b), R = Math.atan2(I, d * T);
        p = Math.sin(p * R) / I, o = Math.sin(o * R) / I;
      }
      const S = o * T;
      if (l = l * p + f * S, c = c * p + m * S, h = h * p + g * S, u = u * p + v * S, p === 1 - o) {
        const I = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= I, c *= I, h *= I, u *= I;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], u = r[a], f = r[a + 1], m = r[a + 2], g = r[a + 3];
    return t[e] = o * g + h * u + l * m - c * f, t[e + 1] = l * g + h * f + c * u - o * m, t[e + 2] = c * g + h * m + o * f - l * u, t[e + 3] = h * g - o * u - l * f - c * m, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(s / 2), u = o(r / 2), f = l(n / 2), m = l(s / 2), g = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "YXZ":
        this._x = f * h * u + c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u + f * m * g;
        break;
      case "ZXY":
        this._x = f * h * u - c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "ZYX":
        this._x = f * h * u - c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u + f * m * g;
        break;
      case "YZX":
        this._x = f * h * u + c * m * g, this._y = c * m * u + f * h * g, this._z = c * h * g - f * m * u, this._w = c * h * u - f * m * g;
        break;
      case "XZY":
        this._x = f * h * u - c * m * g, this._y = c * m * u - f * h * g, this._z = c * h * g + f * m * u, this._w = c * h * u + f * m * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], u = e[10], f = n + o + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (r - c) * m, this._z = (a - s) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + c) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / m, this._x = (r + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ft(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + a * o + s * c - r * l, this._y = s * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - s * o, this._w = a * h - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + s * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - e;
      return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * s + e * this._y, this._z = m * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - e) * h) / c, f = Math.sin(e * h) / c;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class U {
  constructor(t = 0, e = 0, n = 0) {
    U.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(to.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(to.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * s - o * n), h = 2 * (o * e - r * s), u = 2 * (r * n - a * e);
    return this.x = e + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = s + l * u + r * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Ft(this.x, t.x, e.x), this.y = Ft(this.y, t.y, e.y), this.z = Ft(this.z, t.z, e.z), this;
  }
  clampScalar(t, e) {
    return this.x = Ft(this.x, t, e), this.y = Ft(this.y, t, e), this.z = Ft(this.z, t, e), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ft(n, t, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return qs.copy(this).projectOnVector(t), this.sub(qs);
  }
  reflect(t) {
    return this.sub(qs.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ft(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const qs = new U(), to = new Xn();
class qn {
  constructor(t = new U(1 / 0, 1 / 0, 1 / 0), e = new U(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Ve.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Ve.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Ve.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Ve) : Ve.fromBufferAttribute(r, a), Ve.applyMatrix4(t.matrixWorld), this.expandByPoint(Ve);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Zi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Zi.copy(n.boundingBox)), Zi.applyMatrix4(t.matrixWorld), this.union(Zi);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Ve), Ve.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(bi), Ji.subVectors(this.max, bi), Zn.subVectors(t.a, bi), Jn.subVectors(t.b, bi), Qn.subVectors(t.c, bi), mn.subVectors(Jn, Zn), gn.subVectors(Qn, Jn), Ln.subVectors(Zn, Qn);
    let e = [0, -mn.z, mn.y, 0, -gn.z, gn.y, 0, -Ln.z, Ln.y, mn.z, 0, -mn.x, gn.z, 0, -gn.x, Ln.z, 0, -Ln.x, -mn.y, mn.x, 0, -gn.y, gn.x, 0, -Ln.y, Ln.x, 0];
    return !$s(e, Zn, Jn, Qn, Ji) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$s(e, Zn, Jn, Qn, Ji)) ? false : (Qi.crossVectors(mn, gn), e = [Qi.x, Qi.y, Qi.z], $s(e, Zn, Jn, Qn, Ji));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ve).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ve).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(sn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const sn = [new U(), new U(), new U(), new U(), new U(), new U(), new U(), new U()], Ve = new U(), Zi = new qn(), Zn = new U(), Jn = new U(), Qn = new U(), mn = new U(), gn = new U(), Ln = new U(), bi = new U(), Ji = new U(), Qi = new U(), Dn = new U();
function $s(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    Dn.fromArray(i, r);
    const o = s.x * Math.abs(Dn.x) + s.y * Math.abs(Dn.y) + s.z * Math.abs(Dn.z), l = t.dot(Dn), c = e.dot(Dn), h = n.dot(Dn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const Gc = new qn(), Ti = new U(), js = new U();
class Xi {
  constructor(t = new U(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Gc.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++) s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    Ti.subVectors(t, this.center);
    const e = Ti.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ti, s / n), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (js.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ti.copy(t.center).add(js)), this.expandByPoint(Ti.copy(t.center).sub(js))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const rn = new U(), Ks = new U(), ts = new U(), _n = new U(), Zs = new U(), es = new U(), Js = new U();
class Os {
  constructor(t = new U(), e = new U(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, rn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = rn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (rn.copy(this.origin).addScaledVector(this.direction, e), rn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, s) {
    Ks.copy(t).add(e).multiplyScalar(0.5), ts.copy(e).sub(t).normalize(), _n.copy(this.origin).sub(Ks);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(ts), o = _n.dot(this.direction), l = -_n.dot(ts), c = _n.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, m, g;
    if (h > 0) if (u = a * l - o, f = a * o - l, g = r * h, u >= 0) if (f >= -g) if (f <= g) {
      const v = 1 / h;
      u *= v, f *= v, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
    } else f = r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f = -r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f <= -g ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -l), r), m = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c);
    else f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Ks).addScaledVector(ts, f), m;
  }
  intersectSphere(t, e) {
    rn.subVectors(t.center, this.origin);
    const n = rn.dot(this.direction), s = rn.dot(rn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (t.min.x - f.x) * c, s = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, s = (t.min.x - f.x) * c), h >= 0 ? (r = (t.min.y - f.y) * h, a = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h, a = (t.min.y - f.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (t.min.z - f.z) * u, l = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, l = (t.min.z - f.z) * u), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, rn) !== null;
  }
  intersectTriangle(t, e, n, s, r) {
    Zs.subVectors(e, t), es.subVectors(n, t), Js.crossVectors(Zs, es);
    let a = this.direction.dot(Js), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    _n.subVectors(this.origin, t);
    const l = o * this.direction.dot(es.crossVectors(_n, es));
    if (l < 0) return null;
    const c = o * this.direction.dot(Zs.cross(_n));
    if (c < 0 || l + c > a) return null;
    const h = -o * _n.dot(Js);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ie {
  constructor(t, e, n, s, r, a, o, l, c, h, u, f, m, g, v, p) {
    ie.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c, h, u, f, m, g, v, p);
  }
  set(t, e, n, s, r, a, o, l, c, h, u, f, m, g, v, p) {
    const d = this.elements;
    return d[0] = t, d[4] = e, d[8] = n, d[12] = s, d[1] = r, d[5] = a, d[9] = o, d[13] = l, d[2] = c, d[6] = h, d[10] = u, d[14] = f, d[3] = m, d[7] = g, d[11] = v, d[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ie().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / ti.setFromMatrixColumn(t, 0).length(), r = 1 / ti.setFromMatrixColumn(t, 1).length(), a = 1 / ti.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * h, m = a * u, g = o * h, v = o * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = m + g * c, e[5] = f - v * c, e[9] = -o * l, e[2] = v - f * c, e[6] = g + m * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const f = l * h, m = l * u, g = c * h, v = c * u;
      e[0] = f + v * o, e[4] = g * o - m, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = m * o - g, e[6] = v + f * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const f = l * h, m = l * u, g = c * h, v = c * u;
      e[0] = f - v * o, e[4] = -a * u, e[8] = g + m * o, e[1] = m + g * o, e[5] = a * h, e[9] = v - f * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const f = a * h, m = a * u, g = o * h, v = o * u;
      e[0] = l * h, e[4] = g * c - m, e[8] = f * c + v, e[1] = l * u, e[5] = v * c + f, e[9] = m * c - g, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      e[0] = l * h, e[4] = v - f * u, e[8] = g * u + m, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = m * u + g, e[10] = f - v * u;
    } else if (t.order === "XZY") {
      const f = a * l, m = a * c, g = o * l, v = o * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = f * u + v, e[5] = a * h, e[9] = m * u - g, e[2] = g * u - m, e[6] = o * h, e[10] = v * u + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Wc, t, Xc);
  }
  lookAt(t, e, n) {
    const s = this.elements;
    return Ce.subVectors(t, e), Ce.lengthSq() === 0 && (Ce.z = 1), Ce.normalize(), vn.crossVectors(n, Ce), vn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ce.x += 1e-4 : Ce.z += 1e-4, Ce.normalize(), vn.crossVectors(n, Ce)), vn.normalize(), ns.crossVectors(Ce, vn), s[0] = vn.x, s[4] = ns.x, s[8] = Ce.x, s[1] = vn.y, s[5] = ns.y, s[9] = Ce.y, s[2] = vn.z, s[6] = ns.z, s[10] = Ce.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], m = n[13], g = n[2], v = n[6], p = n[10], d = n[14], T = n[3], b = n[7], S = n[11], I = n[15], R = s[0], w = s[4], N = s[8], y = s[12], M = s[1], C = s[5], G = s[9], z = s[13], $ = s[2], j = s[6], Y = s[10], Z = s[14], k = s[3], it = s[7], ht = s[11], _t = s[15];
    return r[0] = a * R + o * M + l * $ + c * k, r[4] = a * w + o * C + l * j + c * it, r[8] = a * N + o * G + l * Y + c * ht, r[12] = a * y + o * z + l * Z + c * _t, r[1] = h * R + u * M + f * $ + m * k, r[5] = h * w + u * C + f * j + m * it, r[9] = h * N + u * G + f * Y + m * ht, r[13] = h * y + u * z + f * Z + m * _t, r[2] = g * R + v * M + p * $ + d * k, r[6] = g * w + v * C + p * j + d * it, r[10] = g * N + v * G + p * Y + d * ht, r[14] = g * y + v * z + p * Z + d * _t, r[3] = T * R + b * M + S * $ + I * k, r[7] = T * w + b * C + S * j + I * it, r[11] = T * N + b * G + S * Y + I * ht, r[15] = T * y + b * z + S * Z + I * _t, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], u = t[6], f = t[10], m = t[14], g = t[3], v = t[7], p = t[11], d = t[15];
    return g * (+r * l * u - s * c * u - r * o * f + n * c * f + s * o * m - n * l * m) + v * (+e * l * m - e * c * f + r * a * f - s * a * m + s * c * h - r * l * h) + p * (+e * c * u - e * o * m - r * a * u + n * a * m + r * o * h - n * c * h) + d * (-s * o * h - e * l * u + e * o * f + s * a * u - n * a * f + n * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], f = t[10], m = t[11], g = t[12], v = t[13], p = t[14], d = t[15], T = u * p * c - v * f * c + v * l * m - o * p * m - u * l * d + o * f * d, b = g * f * c - h * p * c - g * l * m + a * p * m + h * l * d - a * f * d, S = h * v * c - g * u * c + g * o * m - a * v * m - h * o * d + a * u * d, I = g * u * l - h * v * l - g * o * f + a * v * f + h * o * p - a * u * p, R = e * T + n * b + s * S + r * I;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return t[0] = T * w, t[1] = (v * f * r - u * p * r - v * s * m + n * p * m + u * s * d - n * f * d) * w, t[2] = (o * p * r - v * l * r + v * s * c - n * p * c - o * s * d + n * l * d) * w, t[3] = (u * l * r - o * f * r - u * s * c + n * f * c + o * s * m - n * l * m) * w, t[4] = b * w, t[5] = (h * p * r - g * f * r + g * s * m - e * p * m - h * s * d + e * f * d) * w, t[6] = (g * l * r - a * p * r - g * s * c + e * p * c + a * s * d - e * l * d) * w, t[7] = (a * f * r - h * l * r + h * s * c - e * f * c - a * s * m + e * l * m) * w, t[8] = S * w, t[9] = (g * u * r - h * v * r - g * n * m + e * v * m + h * n * d - e * u * d) * w, t[10] = (a * v * r - g * o * r + g * n * c - e * v * c - a * n * d + e * o * d) * w, t[11] = (h * o * r - a * u * r - h * n * c + e * u * c + a * n * m - e * o * m) * w, t[12] = I * w, t[13] = (h * v * s - g * u * s + g * n * f - e * v * f - h * n * p + e * u * p) * w, t[14] = (g * o * s - a * v * s - g * n * l + e * v * l + a * n * p - e * o * p) * w, t[15] = (a * u * s - h * o * s + h * n * l - e * u * l - a * n * f + e * o * f) * w, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, h * o + n, h * l - s * a, 0, c * l - s * o, h * l + s * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, s, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, h = a + a, u = o + o, f = r * c, m = r * h, g = r * u, v = a * h, p = a * u, d = o * u, T = l * c, b = l * h, S = l * u, I = n.x, R = n.y, w = n.z;
    return s[0] = (1 - (v + d)) * I, s[1] = (m + S) * I, s[2] = (g - b) * I, s[3] = 0, s[4] = (m - S) * R, s[5] = (1 - (f + d)) * R, s[6] = (p + T) * R, s[7] = 0, s[8] = (g + b) * w, s[9] = (p - T) * w, s[10] = (1 - (f + v)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, n) {
    const s = this.elements;
    let r = ti.set(s[0], s[1], s[2]).length();
    const a = ti.set(s[4], s[5], s[6]).length(), o = ti.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], Ge.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return Ge.elements[0] *= c, Ge.elements[1] *= c, Ge.elements[2] *= c, Ge.elements[4] *= h, Ge.elements[5] *= h, Ge.elements[6] *= h, Ge.elements[8] *= u, Ge.elements[9] *= u, Ge.elements[10] *= u, e.setFromRotationMatrix(Ge), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, s, r, a, o = fn) {
    const l = this.elements, c = 2 * r / (e - t), h = 2 * r / (n - s), u = (e + t) / (e - t), f = (n + s) / (n - s);
    let m, g;
    if (o === fn) m = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === Ds) m = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, s, r, a, o = fn) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (n - s), u = 1 / (a - r), f = (e + t) * c, m = (n + s) * h;
    let g, v;
    if (o === fn) g = (a + r) * u, v = -2 * u;
    else if (o === Ds) g = r * u, v = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const ti = new U(), Ge = new ie(), Wc = new U(0, 0, 0), Xc = new U(1, 1, 1), vn = new U(), ns = new U(), Ce = new U(), eo = new ie(), no = new Xn();
class je {
  constructor(t = 0, e = 0, n = 0, s = je.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = s;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const s = t.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], u = s[2], f = s[6], m = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ft(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ft(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ft(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ft(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return eo.makeRotationFromQuaternion(t), this.setFromRotationMatrix(eo, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return no.setFromEuler(this), this.setFromQuaternion(no, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
je.DEFAULT_ORDER = "XYZ";
class ml {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Yc = 0;
const io = new U(), ei = new Xn(), an = new ie(), is = new U(), Ai = new U(), qc = new U(), $c = new Xn(), so = new U(1, 0, 0), ro = new U(0, 1, 0), ao = new U(0, 0, 1), oo = { type: "added" }, jc = { type: "removed" }, ni = { type: "childadded", child: null }, Qs = { type: "childremoved", child: null };
class me extends Yn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Yc++ }), this.uuid = Wi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = me.DEFAULT_UP.clone();
    const t = new U(), e = new je(), n = new Xn(), s = new U(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new ie() }, normalMatrix: { value: new Dt() } }), this.matrix = new ie(), this.matrixWorld = new ie(), this.matrixAutoUpdate = me.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ml(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return ei.setFromAxisAngle(t, e), this.quaternion.multiply(ei), this;
  }
  rotateOnWorldAxis(t, e) {
    return ei.setFromAxisAngle(t, e), this.quaternion.premultiply(ei), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(so, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ro, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(ao, t);
  }
  translateOnAxis(t, e) {
    return io.copy(t).applyQuaternion(this.quaternion), this.position.add(io.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(so, t);
  }
  translateY(t) {
    return this.translateOnAxis(ro, t);
  }
  translateZ(t) {
    return this.translateOnAxis(ao, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(an.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? is.copy(t) : is.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), Ai.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? an.lookAt(Ai, is, this.up) : an.lookAt(is, Ai, this.up), this.quaternion.setFromRotationMatrix(an), s && (an.extractRotation(s.matrixWorld), ei.setFromRotationMatrix(an), this.quaternion.premultiply(ei.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(oo), ni.child = t, this.dispatchEvent(ni), ni.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(jc), Qs.child = t, this.dispatchEvent(Qs), Qs.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), an.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), an.multiply(t.parent.matrixWorld)), t.applyMatrix4(an), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(oo), ni.child = t, this.dispatchEvent(ni), ni.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ai, t, qc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ai, $c, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.geometryInfo = this._geometryInfo.map((o) => ({ ...o, boundingBox: o.boundingBox ? { min: o.boundingBox.min.toArray(), max: o.boundingBox.max.toArray() } : void 0, boundingSphere: o.boundingSphere ? { radius: o.boundingSphere.radius, center: o.boundingSphere.center.toArray() } : void 0 })), s.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), s.availableInstanceIds = this._availableInstanceIds.slice(), s.availableGeometryIds = this._availableGeometryIds.slice(), s.nextIndexStart = this._nextIndexStart, s.nextVertexStart = this._nextVertexStart, s.geometryCount = this._geometryCount, s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.matricesTexture = this._matricesTexture.toJSON(t), s.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = { center: this.boundingSphere.center.toArray(), radius: this.boundingSphere.radius }), this.boundingBox !== null && (s.boundingBox = { min: this.boundingBox.min.toArray(), max: this.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(t.shapes, u);
        }
        else r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(t.materials, this.material[l]));
      s.material = o;
    } else s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), u = a(t.shapes), f = a(t.skeletons), m = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const s = t.children[n];
      this.add(s.clone());
    }
    return this;
  }
}
me.DEFAULT_UP = new U(0, 1, 0);
me.DEFAULT_MATRIX_AUTO_UPDATE = true;
me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const We = new U(), on = new U(), tr = new U(), ln = new U(), ii = new U(), si = new U(), lo = new U(), er = new U(), nr = new U(), ir = new U(), sr = new oe(), rr = new oe(), ar = new oe();
class Xe {
  constructor(t = new U(), e = new U(), n = new U()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), We.subVectors(t, e), s.cross(We);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, s, r) {
    We.subVectors(s, e), on.subVectors(n, e), tr.subVectors(t, e);
    const a = We.dot(We), o = We.dot(on), l = We.dot(tr), c = on.dot(on), h = on.dot(tr), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const f = 1 / u, m = (c * l - o * h) * f, g = (a * h - o * l) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, ln) === null ? false : ln.x >= 0 && ln.y >= 0 && ln.x + ln.y <= 1;
  }
  static getInterpolation(t, e, n, s, r, a, o, l) {
    return this.getBarycoord(t, e, n, s, ln) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, ln.x), l.addScaledVector(a, ln.y), l.addScaledVector(o, ln.z), l);
  }
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return sr.setScalar(0), rr.setScalar(0), ar.setScalar(0), sr.fromBufferAttribute(t, e), rr.fromBufferAttribute(t, n), ar.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(sr, r.x), a.addScaledVector(rr, r.y), a.addScaledVector(ar, r.z), a;
  }
  static isFrontFacing(t, e, n, s) {
    return We.subVectors(n, e), on.subVectors(t, e), We.cross(on).dot(s) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return We.subVectors(this.c, this.b), on.subVectors(this.a, this.b), We.cross(on).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Xe.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Xe.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, s, r) {
    return Xe.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  containsPoint(t) {
    return Xe.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Xe.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    ii.subVectors(s, n), si.subVectors(r, n), er.subVectors(t, n);
    const l = ii.dot(er), c = si.dot(er);
    if (l <= 0 && c <= 0) return e.copy(n);
    nr.subVectors(t, s);
    const h = ii.dot(nr), u = si.dot(nr);
    if (h >= 0 && u <= h) return e.copy(s);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0) return a = l / (l - h), e.copy(n).addScaledVector(ii, a);
    ir.subVectors(t, r);
    const m = ii.dot(ir), g = si.dot(ir);
    if (g >= 0 && m <= g) return e.copy(r);
    const v = m * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0) return o = c / (c - g), e.copy(n).addScaledVector(si, o);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0) return lo.subVectors(r, s), o = (u - h) / (u - h + (m - g)), e.copy(s).addScaledVector(lo, o);
    const d = 1 / (p + v + f);
    return a = v * d, o = f * d, e.copy(n).addScaledVector(ii, a).addScaledVector(si, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const gl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, xn = { h: 0, s: 0, l: 0 }, ss = { h: 0, s: 0, l: 0 };
function or(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Pt {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = De) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Yt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, s = Yt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Yt.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, n, s = Yt.workingColorSpace) {
    if (t = Lc(t, 1), e = Ft(e, 0, 1), n = Ft(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = or(a, r, t + 1 / 3), this.g = or(a, r, t), this.b = or(a, r, t - 1 / 3);
    }
    return Yt.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = De) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = De) {
    const n = gl[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = pn(t.r), this.g = pn(t.g), this.b = pn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = fi(t.r), this.g = fi(t.g), this.b = fi(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = De) {
    return Yt.fromWorkingColorSpace(Me.copy(this), t), Math.round(Ft(Me.r * 255, 0, 255)) * 65536 + Math.round(Ft(Me.g * 255, 0, 255)) * 256 + Math.round(Ft(Me.b * 255, 0, 255));
  }
  getHexString(t = De) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Yt.workingColorSpace) {
    Yt.fromWorkingColorSpace(Me.copy(this), e);
    const n = Me.r, s = Me.g, r = Me.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Yt.workingColorSpace) {
    return Yt.fromWorkingColorSpace(Me.copy(this), e), t.r = Me.r, t.g = Me.g, t.b = Me.b, t;
  }
  getStyle(t = De) {
    Yt.fromWorkingColorSpace(Me.copy(this), t);
    const e = Me.r, n = Me.g, s = Me.b;
    return t !== De ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(xn), this.setHSL(xn.h + t, xn.s + e, xn.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(xn), t.getHSL(ss);
    const n = Ws(xn.h, ss.h, e), s = Ws(xn.s, ss.s, e), r = Ws(xn.l, ss.l, e);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Me = new Pt();
Pt.NAMES = gl;
let Kc = 0;
class en extends Yn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Kc++ }), this.uuid = Wi(), this.name = "", this.type = "Material", this.blending = di, this.side = Tn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Tr, this.blendDst = Ar, this.blendEquation = Bn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Pt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = pi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = $a, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = jn, this.stencilZFail = jn, this.stencilZPass = jn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const s = this[e];
      if (s === void 0) {
        console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== di && (n.blending = this.blending), this.side !== Tn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Tr && (n.blendSrc = this.blendSrc), this.blendDst !== Ar && (n.blendDst = this.blendDst), this.blendEquation !== Bn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== pi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== $a && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== jn && (n.stencilFail = this.stencilFail), this.stencilZFail !== jn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== jn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const r = s(t.textures), a = s(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const s = e.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
}
class _l extends en {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Pt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new je(), this.combine = xa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const he = new U(), rs = new Tt();
let Zc = 0;
class Je {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Zc++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = ja, this.updateRanges = [], this.gpuType = dn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[t + s] = e.array[n + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) rs.fromBufferAttribute(this, e), rs.applyMatrix3(t), this.setXY(e, rs.x, rs.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) he.fromBufferAttribute(this, e), he.applyMatrix3(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) he.fromBufferAttribute(this, e), he.applyMatrix4(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) he.fromBufferAttribute(this, e), he.applyNormalMatrix(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) he.fromBufferAttribute(this, e), he.transformDirection(t), this.setXYZ(e, he.x, he.y, he.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = yi(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Te(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = yi(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = yi(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = yi(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = yi(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Te(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array), s = Te(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Te(e, this.array), n = Te(n, this.array), s = Te(s, this.array), r = Te(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== ja && (t.usage = this.usage), t;
  }
}
class vl extends Je {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class xl extends Je {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class _e extends Je {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Jc = 0;
const Fe = new ie(), lr = new me(), ri = new U(), Pe = new qn(), wi = new qn(), pe = new U();
class ze extends Yn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Jc++ }), this.uuid = Wi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (fl(t) ? xl : vl)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Dt().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Fe.makeRotationFromQuaternion(t), this.applyMatrix4(Fe), this;
  }
  rotateX(t) {
    return Fe.makeRotationX(t), this.applyMatrix4(Fe), this;
  }
  rotateY(t) {
    return Fe.makeRotationY(t), this.applyMatrix4(Fe), this;
  }
  rotateZ(t) {
    return Fe.makeRotationZ(t), this.applyMatrix4(Fe), this;
  }
  translate(t, e, n) {
    return Fe.makeTranslation(t, e, n), this.applyMatrix4(Fe), this;
  }
  scale(t, e, n) {
    return Fe.makeScale(t, e, n), this.applyMatrix4(Fe), this;
  }
  lookAt(t) {
    return lr.lookAt(t), lr.updateMatrix(), this.applyMatrix4(lr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ri).negate(), this.translate(ri.x, ri.y, ri.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const a = t[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new _e(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let s = 0; s < n; s++) {
        const r = t[s];
        e.setXYZ(s, r.x, r.y, r.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new qn());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new U(-1 / 0, -1 / 0, -1 / 0), new U(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, s = e.length; n < s; n++) {
        const r = e[n];
        Pe.setFromBufferAttribute(r), this.morphTargetsRelative ? (pe.addVectors(this.boundingBox.min, Pe.min), this.boundingBox.expandByPoint(pe), pe.addVectors(this.boundingBox.max, Pe.max), this.boundingBox.expandByPoint(pe)) : (this.boundingBox.expandByPoint(Pe.min), this.boundingBox.expandByPoint(Pe.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Xi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new U(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Pe.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r];
        wi.setFromBufferAttribute(o), this.morphTargetsRelative ? (pe.addVectors(Pe.min, wi.min), Pe.expandByPoint(pe), pe.addVectors(Pe.max, wi.max), Pe.expandByPoint(pe)) : (Pe.expandByPoint(wi.min), Pe.expandByPoint(wi.max));
      }
      Pe.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++) pe.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(pe));
      if (e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) pe.fromBufferAttribute(o, c), l && (ri.fromBufferAttribute(t, c), pe.add(ri)), s = Math.max(s, n.distanceToSquared(pe));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Je(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < n.count; N++) o[N] = new U(), l[N] = new U();
    const c = new U(), h = new U(), u = new U(), f = new Tt(), m = new Tt(), g = new Tt(), v = new U(), p = new U();
    function d(N, y, M) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, y), u.fromBufferAttribute(n, M), f.fromBufferAttribute(r, N), m.fromBufferAttribute(r, y), g.fromBufferAttribute(r, M), h.sub(c), u.sub(c), m.sub(f), g.sub(f);
      const C = 1 / (m.x * g.y - g.x * m.y);
      isFinite(C) && (v.copy(h).multiplyScalar(g.y).addScaledVector(u, -m.y).multiplyScalar(C), p.copy(u).multiplyScalar(m.x).addScaledVector(h, -g.x).multiplyScalar(C), o[N].add(v), o[y].add(v), o[M].add(v), l[N].add(p), l[y].add(p), l[M].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: t.count }]);
    for (let N = 0, y = T.length; N < y; ++N) {
      const M = T[N], C = M.start, G = M.count;
      for (let z = C, $ = C + G; z < $; z += 3) d(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2));
    }
    const b = new U(), S = new U(), I = new U(), R = new U();
    function w(N) {
      I.fromBufferAttribute(s, N), R.copy(I);
      const y = o[N];
      b.copy(y), b.sub(I.multiplyScalar(I.dot(y))).normalize(), S.crossVectors(R, y);
      const C = S.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, b.x, b.y, b.z, C);
    }
    for (let N = 0, y = T.length; N < y; ++N) {
      const M = T[N], C = M.start, G = M.count;
      for (let z = C, $ = C + G; z < $; z += 3) w(t.getX(z + 0)), w(t.getX(z + 1)), w(t.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Je(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new U(), r = new U(), a = new U(), o = new U(), l = new U(), c = new U(), h = new U(), u = new U();
      if (t) for (let f = 0, m = t.count; f < m; f += 3) {
        const g = t.getX(f + 0), v = t.getX(f + 1), p = t.getX(f + 2);
        s.fromBufferAttribute(e, g), r.fromBufferAttribute(e, v), a.fromBufferAttribute(e, p), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let f = 0, m = e.count; f < m; f += 3) s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) pe.fromBufferAttribute(t, e), pe.normalize(), t.setXYZ(e, pe.x, pe.y, pe.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, f = new c.constructor(l.length * h);
      let m = 0, g = 0;
      for (let v = 0, p = l.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = l[v] * o.data.stride + o.offset : m = l[v] * h;
        for (let d = 0; d < h; d++) f[g++] = c[m++];
      }
      return new Je(f, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new ze(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], m = t(f, n);
        l.push(m);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const m = c[u];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && (s[l] = h, r = true);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const s = t.attributes;
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let f = 0, m = u.length; f < m; f++) h.push(u[f].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const co = new ie(), Un = new Os(), as = new Xi(), ho = new U(), os = new U(), ls = new U(), cs = new U(), cr = new U(), hs = new U(), uo = new U(), us = new U();
class qe extends me {
  constructor(t = new ze(), e = new _l()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      hs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (cr.fromBufferAttribute(u, t), a ? hs.addScaledVector(cr, h) : hs.addScaledVector(cr.sub(e), h));
      }
      e.add(hs);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), as.copy(n.boundingSphere), as.applyMatrix4(r), Un.copy(t.ray).recast(t.near), !(as.containsPoint(Un.origin) === false && (Un.intersectSphere(as, ho) === null || Un.origin.distanceToSquared(ho) > (t.far - t.near) ** 2)) && (co.copy(r).invert(), Un.copy(t.ray).applyMatrix4(co), !(n.boundingBox !== null && Un.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, Un)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], T = Math.max(p.start, m.start), b = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = T, I = b; S < I; S += 3) {
        const R = o.getX(S), w = o.getX(S + 1), N = o.getX(S + 2);
        s = ds(this, d, t, n, c, h, u, R, w, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const T = o.getX(p), b = o.getX(p + 1), S = o.getX(p + 2);
        s = ds(this, a, t, n, c, h, u, T, b, S), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], T = Math.max(p.start, m.start), b = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = T, I = b; S < I; S += 3) {
        const R = S, w = S + 1, N = S + 2;
        s = ds(this, d, t, n, c, h, u, R, w, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const T = p, b = p + 1, S = p + 2;
        s = ds(this, a, t, n, c, h, u, T, b, S), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
  }
}
function Qc(i, t, e, n, s, r, a, o) {
  let l;
  if (t.side === we ? l = n.intersectTriangle(a, r, s, true, o) : l = n.intersectTriangle(s, r, a, t.side === Tn, o), l === null) return null;
  us.copy(o), us.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(us);
  return c < e.near || c > e.far ? null : { distance: c, point: us.clone(), object: i };
}
function ds(i, t, e, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, os), i.getVertexPosition(l, ls), i.getVertexPosition(c, cs);
  const h = Qc(i, t, e, n, os, ls, cs, uo);
  if (h) {
    const u = new U();
    Xe.getBarycoord(uo, os, ls, cs, u), s && (h.uv = Xe.getInterpolatedAttribute(s, o, l, c, u, new Tt())), r && (h.uv1 = Xe.getInterpolatedAttribute(r, o, l, c, u, new Tt())), a && (h.normal = Xe.getInterpolatedAttribute(a, o, l, c, u, new U()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new U(), materialIndex: 0 };
    Xe.getNormal(os, ls, cs, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class Yi extends ze {
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, r, 0), g("z", "y", "x", 1, -1, n, e, -t, a, r, 1), g("x", "z", "y", 1, 1, t, n, e, s, a, 2), g("x", "z", "y", 1, -1, t, n, -e, s, a, 3), g("x", "y", "z", 1, -1, t, e, n, s, r, 4), g("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new _e(c, 3)), this.setAttribute("normal", new _e(h, 3)), this.setAttribute("uv", new _e(u, 2));
    function g(v, p, d, T, b, S, I, R, w, N, y) {
      const M = S / w, C = I / N, G = S / 2, z = I / 2, $ = R / 2, j = w + 1, Y = N + 1;
      let Z = 0, k = 0;
      const it = new U();
      for (let ht = 0; ht < Y; ht++) {
        const _t = ht * C - z;
        for (let Nt = 0; Nt < j; Nt++) {
          const Qt = Nt * M - G;
          it[v] = Qt * T, it[p] = _t * b, it[d] = $, c.push(it.x, it.y, it.z), it[v] = 0, it[p] = 0, it[d] = R > 0 ? 1 : -1, h.push(it.x, it.y, it.z), u.push(Nt / w), u.push(1 - ht / N), Z += 1;
        }
      }
      for (let ht = 0; ht < N; ht++) for (let _t = 0; _t < w; _t++) {
        const Nt = f + _t + j * ht, Qt = f + _t + j * (ht + 1), W = f + (_t + 1) + j * (ht + 1), tt = f + (_t + 1) + j * ht;
        l.push(Nt, Qt, tt), l.push(Qt, W, tt), k += 6;
      }
      o.addGroup(m, k, y), m += k, f += Z;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Yi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function vi(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const s = i[e][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s;
    }
  }
  return t;
}
function ye(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = vi(i[e]);
    for (const s in n) t[s] = n[s];
  }
  return t;
}
function th(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function Ml(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Yt.workingColorSpace;
}
const eh = { clone: vi, merge: ye };
var nh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ih = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class An extends en {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = nh, this.fragmentShader = ih, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = vi(t.uniforms), this.uniformsGroups = th(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[s] = { type: "m4", value: a.toArray() } : e.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Sl extends me {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ie(), this.projectionMatrix = new ie(), this.projectionMatrixInverse = new ie(), this.coordinateSystem = fn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mn = new U(), fo = new Tt(), po = new Tt();
class Be extends Sl {
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = ha * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(Rs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return ha * 2 * Math.atan(Math.tan(Rs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    Mn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Mn.x, Mn.y).multiplyScalar(-t / Mn.z), Mn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Mn.x, Mn.y).multiplyScalar(-t / Mn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, fo, po), e.subVectors(po, fo);
  }
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Rs * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, e -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const ai = -90, oi = 1;
class sh extends me {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Be(ai, oi, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Be(ai, oi, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Be(ai, oi, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Be(ai, oi, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Be(ai, oi, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Be(ai, oi, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === fn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === Ds) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = false;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, l), t.setRenderTarget(n, 4, s), t.render(e, c), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(u, f, m), t.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class El extends Se {
  constructor(t = [], e = mi, n, s, r, a, o, l, c, h) {
    super(t, e, n, s, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class rh extends Wn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new El(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : Ze;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, s = new Yi(5, 5, 5), r = new An({ name: "CubemapFromEquirect", uniforms: vi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: we, blending: yn });
    r.uniforms.tEquirect.value = e;
    const a = new qe(s, r), o = e.minFilter;
    return e.minFilter === kn && (e.minFilter = Ze), new sh(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, s = true) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class Ci extends me {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const ah = { type: "move" };
class hr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ci(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ci(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new U(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new U()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ci(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new U(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new U()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = true;
        for (const v of t.hand.values()) {
          const p = e.getJointPose(v, n), d = this._getHandJoint(c, v);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = true, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        c.inputState.pinching && f > m + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(ah)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Ci();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Ra extends me {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new je(), this.environmentIntensity = 1, this.environmentRotation = new je(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
const ur = new U(), oh = new U(), lh = new Dt();
class Sn {
  constructor(t = new U(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const s = ur.subVectors(n, e).cross(oh.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(ur), s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || lh.getNormalMatrix(t), s = this.coplanarPoint(ur).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = new Xi(), fs = new U();
class Ca {
  constructor(t = new Sn(), e = new Sn(), n = new Sn(), s = new Sn(), r = new Sn(), a = new Sn()) {
    this.planes = [t, e, n, s, r, a];
  }
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = fn) {
    const n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], h = s[5], u = s[6], f = s[7], m = s[8], g = s[9], v = s[10], p = s[11], d = s[12], T = s[13], b = s[14], S = s[15];
    if (n[0].setComponents(l - r, f - c, p - m, S - d).normalize(), n[1].setComponents(l + r, f + c, p + m, S + d).normalize(), n[2].setComponents(l + a, f + h, p + g, S + T).normalize(), n[3].setComponents(l - a, f - h, p - g, S - T).normalize(), n[4].setComponents(l - o, f - u, p - v, S - b).normalize(), e === fn) n[5].setComponents(l + o, f + u, p + v, S + b).normalize();
    else if (e === Ds) n[5].setComponents(o, u, v, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(In);
  }
  intersectsSprite(t) {
    return In.center.set(0, 0, 0), In.radius = 0.7071067811865476, In.applyMatrix4(t.matrixWorld), this.intersectsSphere(In);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < s) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (fs.x = s.normal.x > 0 ? t.max.x : t.min.x, fs.y = s.normal.y > 0 ? t.max.y : t.min.y, fs.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(fs) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Di extends en {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Pt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Us = new U(), Is = new U(), mo = new ie(), Ri = new Os(), ps = new Xi(), dr = new U(), go = new U();
class ch extends me {
  constructor(t = new ze(), e = new Di()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++) Us.fromBufferAttribute(e, s - 1), Is.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += Us.distanceTo(Is);
      t.setAttribute("lineDistance", new _e(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ps.copy(n.boundingSphere), ps.applyMatrix4(s), ps.radius += r, t.ray.intersectsSphere(ps) === false) return;
    mo.copy(s).invert(), Ri.copy(t.ray).applyMatrix4(mo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += c) {
        const d = h.getX(v), T = h.getX(v + 1), b = ms(this, t, Ri, l, d, T, v);
        b && e.push(b);
      }
      if (this.isLineLoop) {
        const v = h.getX(g - 1), p = h.getX(m), d = ms(this, t, Ri, l, v, p, g - 1);
        d && e.push(d);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += c) {
        const d = ms(this, t, Ri, l, v, v + 1, v);
        d && e.push(d);
      }
      if (this.isLineLoop) {
        const v = ms(this, t, Ri, l, g - 1, m, g - 1);
        v && e.push(v);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function ms(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (Us.fromBufferAttribute(o, s), Is.fromBufferAttribute(o, r), e.distanceSqToSegment(Us, Is, dr, go) > n) return;
  dr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(dr);
  if (!(c < t.near || c > t.far)) return { distance: c, point: go.clone().applyMatrix4(i.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i };
}
const _o = new U(), vo = new U();
class ua extends ch {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2) _o.fromBufferAttribute(e, s), vo.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + _o.distanceTo(vo);
      t.setAttribute("lineDistance", new _e(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Pi extends en {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Pt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const xo = new ie(), da = new Os(), gs = new Xi(), _s = new U();
class fr extends me {
  constructor(t = new ze(), e = new Pi()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), gs.copy(n.boundingSphere), gs.applyMatrix4(s), gs.radius += r, t.ray.intersectsSphere(gs) === false) return;
    xo.copy(s).invert(), da.copy(t.ray).applyMatrix4(xo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let g = f, v = m; g < v; g++) {
        const p = c.getX(g);
        _s.fromBufferAttribute(u, p), Mo(_s, p, l, s, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
      for (let g = f, v = m; g < v; g++) _s.fromBufferAttribute(u, g), Mo(_s, g, l, s, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Mo(i, t, e, n, s, r, a) {
  const o = da.distanceSqToPoint(i);
  if (o < e) {
    const l = new U();
    da.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class yl extends Se {
  constructor(t, e, n = Gn, s, r, a, o = $e, l = $e, c, h = Oi) {
    if (h !== Oi && h !== Bi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, s, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: t, height: e }, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new wa(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class Bs extends ze {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: s };
    const r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, h = l + 1, u = t / o, f = e / l, m = [], g = [], v = [], p = [];
    for (let d = 0; d < h; d++) {
      const T = d * f - a;
      for (let b = 0; b < c; b++) {
        const S = b * u - r;
        g.push(S, -T, 0), v.push(0, 0, 1), p.push(b / o), p.push(1 - d / l);
      }
    }
    for (let d = 0; d < l; d++) for (let T = 0; T < o; T++) {
      const b = T + c * d, S = T + c * (d + 1), I = T + 1 + c * (d + 1), R = T + 1 + c * d;
      m.push(b, S, R), m.push(S, I, R);
    }
    this.setIndex(m), this.setAttribute("position", new _e(g, 3)), this.setAttribute("normal", new _e(v, 3)), this.setAttribute("uv", new _e(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Bs(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Le extends en {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Pt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Aa, this.normalScale = new Tt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new je(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class hh extends en {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Pt(16777215), this.specular = new Pt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Pt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Aa, this.normalScale = new Tt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new je(), this.combine = xa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class uh extends en {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Sc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class dh extends en {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Ns = { enabled: false, files: {}, add: function(i, t) {
  this.enabled !== false && (this.files[i] = t);
}, get: function(i) {
  if (this.enabled !== false) return this.files[i];
}, remove: function(i) {
  delete this.files[i];
}, clear: function() {
  this.files = {};
} };
class fh {
  constructor(t, e, n) {
    const s = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, f = c.length; u < f; u += 2) {
        const m = c[u], g = c[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h)) return g;
      }
      return null;
    };
  }
}
const ph = new fh();
class qi {
  constructor(t) {
    this.manager = t !== void 0 ? t : ph, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(s, r) {
      n.load(t, s, e, r);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
qi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const cn = {};
class mh extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class gh extends qi {
  constructor(t) {
    super(t), this.mimeType = "", this.responseType = "";
  }
  load(t, e, n, s) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = Ns.get(t);
    if (r !== void 0) return this.manager.itemStart(t), setTimeout(() => {
      e && e(r), this.manager.itemEnd(t);
    }, 0), r;
    if (cn[t] !== void 0) {
      cn[t].push({ onLoad: e, onProgress: n, onError: s });
      return;
    }
    cn[t] = [], cn[t].push({ onLoad: e, onProgress: n, onError: s });
    const a = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = cn[t], u = c.body.getReader(), f = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), m = f ? parseInt(f) : 0, g = m !== 0;
        let v = 0;
        const p = new ReadableStream({ start(d) {
          T();
          function T() {
            u.read().then(({ done: b, value: S }) => {
              if (b) d.close();
              else {
                v += S.byteLength;
                const I = new ProgressEvent("progress", { lengthComputable: g, loaded: v, total: m });
                for (let R = 0, w = h.length; R < w; R++) {
                  const N = h[R];
                  N.onProgress && N.onProgress(I);
                }
                d.enqueue(S), T();
              }
            }, (b) => {
              d.error(b);
            });
          }
        } });
        return new Response(p);
      } else throw new mh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === "") return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), f = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return c.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((c) => {
      Ns.add(t, c);
      const h = cn[t];
      delete cn[t];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(c);
      }
    }).catch((c) => {
      const h = cn[t];
      if (h === void 0) throw this.manager.itemError(t), c;
      delete cn[t];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onError && m.onError(c);
      }
      this.manager.itemError(t);
    }).finally(() => {
      this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class _h extends qi {
  constructor(t) {
    super(t);
  }
  load(t, e, n, s) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, a = Ns.get(t);
    if (a !== void 0) return r.manager.itemStart(t), setTimeout(function() {
      e && e(a), r.manager.itemEnd(t);
    }, 0), a;
    const o = zi("img");
    function l() {
      h(), Ns.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function c(u) {
      h(), s && s(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o;
  }
}
class bl extends qi {
  constructor(t) {
    super(t);
  }
  load(t, e, n, s) {
    const r = new Se(), a = new _h(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      r.image = o, r.needsUpdate = true, e !== void 0 && e(r);
    }, n, s), r;
  }
}
class Tl extends me {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Pt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
const pr = new ie(), So = new U(), Eo = new U();
class vh {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Tt(512, 512), this.mapType = tn, this.map = null, this.mapPass = null, this.matrix = new ie(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Ca(), this._frameExtents = new Tt(1, 1), this._viewportCount = 1, this._viewports = [new oe(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    So.setFromMatrixPosition(t.matrixWorld), e.position.copy(So), Eo.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Eo), e.updateMatrixWorld(), pr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(pr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(pr);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.autoUpdate = t.autoUpdate, this.needsUpdate = t.needsUpdate, this.normalBias = t.normalBias, this.blurSamples = t.blurSamples, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
  }
}
class Al extends Sl {
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = s + e, l = s - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class xh extends vh {
  constructor() {
    super(new Al(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Pa extends Tl {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(me.DEFAULT_UP), this.updateMatrix(), this.target = new me(), this.shadow = new xh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class La extends Tl {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class Mh extends Be {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
class yo {
  constructor(t = 1, e = 0, n = 0) {
    this.radius = t, this.phi = e, this.theta = n;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Ft(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(Ft(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Sh extends ua {
  constructor(t = 1) {
    const e = [0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t], n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], s = new ze();
    s.setAttribute("position", new _e(e, 3)), s.setAttribute("color", new _e(n, 3));
    const r = new Di({ vertexColors: true, toneMapped: false });
    super(s, r), this.type = "AxesHelper";
  }
  setColors(t, e, n) {
    const s = new Pt(), r = this.geometry.attributes.color.array;
    return s.set(t), s.toArray(r, 0), s.toArray(r, 3), s.set(e), s.toArray(r, 6), s.toArray(r, 9), s.set(n), s.toArray(r, 12), s.toArray(r, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class Eh extends Yn {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(t) {
    if (t === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = t;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function bo(i, t, e, n) {
  const s = yh(n);
  switch (e) {
    case ol:
      return i * t;
    case cl:
      return i * t / s.components * s.byteLength;
    case ya:
      return i * t / s.components * s.byteLength;
    case hl:
      return i * t * 2 / s.components * s.byteLength;
    case ba:
      return i * t * 2 / s.components * s.byteLength;
    case ll:
      return i * t * 3 / s.components * s.byteLength;
    case Ye:
      return i * t * 4 / s.components * s.byteLength;
    case Ta:
      return i * t * 4 / s.components * s.byteLength;
    case ys:
    case bs:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ts:
    case As:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case zr:
    case kr:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Br:
    case Hr:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case Vr:
    case Gr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Wr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Xr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Yr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case qr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case $r:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case jr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Kr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Zr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Jr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Qr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case ta:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ea:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case na:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case ia:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case sa:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case ws:
    case ra:
    case aa:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case ul:
    case oa:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case la:
    case ca:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function yh(i) {
  switch (i) {
    case tn:
    case sl:
      return { byteLength: 1, components: 1 };
    case Ni:
    case rl:
    case Gi:
      return { byteLength: 2, components: 1 };
    case Sa:
    case Ea:
      return { byteLength: 2, components: 4 };
    case Gn:
    case Ma:
    case dn:
      return { byteLength: 4, components: 1 };
    case al:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: va } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = va);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function wl() {
  let i = null, t = false, e = null, n = null;
  function s(r, a) {
    e(r, a), n = i.requestAnimationFrame(s);
  }
  return { start: function() {
    t !== true && e !== null && (n = i.requestAnimationFrame(s), t = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    i = r;
  } };
}
function bh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, h), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (i.bindBuffer(c, o), u.length === 0) i.bufferSubData(c, 0, h);
    else {
      u.sort((m, g) => m.start - g.start);
      let f = 0;
      for (let m = 1; m < u.length; m++) {
        const g = u[f], v = u[m];
        v.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, v.start + v.count - g.start) : (++f, u[f] = v);
      }
      u.length = f + 1;
      for (let m = 0, g = u.length; m < g; m++) {
        const v = u[m];
        i.bufferSubData(c, v.start * h.BYTES_PER_ELEMENT, h, v.start, v.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var Th = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Ah = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, wh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Rh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Ch = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ph = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Lh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Dh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Uh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Ih = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Nh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Fh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Oh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Bh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, zh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Hh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, kh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Vh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Gh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Wh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Xh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Yh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, qh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, $h = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, jh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Kh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Zh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Jh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Qh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, tu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, eu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", nu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, iu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, su = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, ru = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, au = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, ou = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, lu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, cu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, hu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, uu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, du = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, fu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, pu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, mu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, gu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, _u = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, vu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, xu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Mu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Su = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Eu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, yu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, bu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Tu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Au = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, wu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Ru = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Cu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Pu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Lu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Du = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Uu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Iu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Fu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Ou = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Bu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, zu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Hu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, ku = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Vu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Gu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Wu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Xu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Yu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, qu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, $u = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ju = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ku = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Zu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ju = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Qu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, td = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ed = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, nd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, id = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, sd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, rd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, ad = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, od = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, ld = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, cd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, hd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ud = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, dd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, fd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, pd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, md = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, gd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, _d = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, vd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, xd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Md = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Sd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Ed = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, yd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Td = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ad = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, wd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Rd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Cd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Pd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Ld = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, Dd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Ud = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Nd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Fd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Od = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Bd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, zd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Hd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, kd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Vd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Gd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Xd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Yd = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, qd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $d = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, jd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Kd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Zd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Jd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Qd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, tf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, ef = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, nf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, sf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, It = { alphahash_fragment: Th, alphahash_pars_fragment: Ah, alphamap_fragment: wh, alphamap_pars_fragment: Rh, alphatest_fragment: Ch, alphatest_pars_fragment: Ph, aomap_fragment: Lh, aomap_pars_fragment: Dh, batching_pars_vertex: Uh, batching_vertex: Ih, begin_vertex: Nh, beginnormal_vertex: Fh, bsdfs: Oh, iridescence_fragment: Bh, bumpmap_pars_fragment: zh, clipping_planes_fragment: Hh, clipping_planes_pars_fragment: kh, clipping_planes_pars_vertex: Vh, clipping_planes_vertex: Gh, color_fragment: Wh, color_pars_fragment: Xh, color_pars_vertex: Yh, color_vertex: qh, common: $h, cube_uv_reflection_fragment: jh, defaultnormal_vertex: Kh, displacementmap_pars_vertex: Zh, displacementmap_vertex: Jh, emissivemap_fragment: Qh, emissivemap_pars_fragment: tu, colorspace_fragment: eu, colorspace_pars_fragment: nu, envmap_fragment: iu, envmap_common_pars_fragment: su, envmap_pars_fragment: ru, envmap_pars_vertex: au, envmap_physical_pars_fragment: _u, envmap_vertex: ou, fog_vertex: lu, fog_pars_vertex: cu, fog_fragment: hu, fog_pars_fragment: uu, gradientmap_pars_fragment: du, lightmap_pars_fragment: fu, lights_lambert_fragment: pu, lights_lambert_pars_fragment: mu, lights_pars_begin: gu, lights_toon_fragment: vu, lights_toon_pars_fragment: xu, lights_phong_fragment: Mu, lights_phong_pars_fragment: Su, lights_physical_fragment: Eu, lights_physical_pars_fragment: yu, lights_fragment_begin: bu, lights_fragment_maps: Tu, lights_fragment_end: Au, logdepthbuf_fragment: wu, logdepthbuf_pars_fragment: Ru, logdepthbuf_pars_vertex: Cu, logdepthbuf_vertex: Pu, map_fragment: Lu, map_pars_fragment: Du, map_particle_fragment: Uu, map_particle_pars_fragment: Iu, metalnessmap_fragment: Nu, metalnessmap_pars_fragment: Fu, morphinstance_vertex: Ou, morphcolor_vertex: Bu, morphnormal_vertex: zu, morphtarget_pars_vertex: Hu, morphtarget_vertex: ku, normal_fragment_begin: Vu, normal_fragment_maps: Gu, normal_pars_fragment: Wu, normal_pars_vertex: Xu, normal_vertex: Yu, normalmap_pars_fragment: qu, clearcoat_normal_fragment_begin: $u, clearcoat_normal_fragment_maps: ju, clearcoat_pars_fragment: Ku, iridescence_pars_fragment: Zu, opaque_fragment: Ju, packing: Qu, premultiplied_alpha_fragment: td, project_vertex: ed, dithering_fragment: nd, dithering_pars_fragment: id, roughnessmap_fragment: sd, roughnessmap_pars_fragment: rd, shadowmap_pars_fragment: ad, shadowmap_pars_vertex: od, shadowmap_vertex: ld, shadowmask_pars_fragment: cd, skinbase_vertex: hd, skinning_pars_vertex: ud, skinning_vertex: dd, skinnormal_vertex: fd, specularmap_fragment: pd, specularmap_pars_fragment: md, tonemapping_fragment: gd, tonemapping_pars_fragment: _d, transmission_fragment: vd, transmission_pars_fragment: xd, uv_pars_fragment: Md, uv_pars_vertex: Sd, uv_vertex: Ed, worldpos_vertex: yd, background_vert: bd, background_frag: Td, backgroundCube_vert: Ad, backgroundCube_frag: wd, cube_vert: Rd, cube_frag: Cd, depth_vert: Pd, depth_frag: Ld, distanceRGBA_vert: Dd, distanceRGBA_frag: Ud, equirect_vert: Id, equirect_frag: Nd, linedashed_vert: Fd, linedashed_frag: Od, meshbasic_vert: Bd, meshbasic_frag: zd, meshlambert_vert: Hd, meshlambert_frag: kd, meshmatcap_vert: Vd, meshmatcap_frag: Gd, meshnormal_vert: Wd, meshnormal_frag: Xd, meshphong_vert: Yd, meshphong_frag: qd, meshphysical_vert: $d, meshphysical_frag: jd, meshtoon_vert: Kd, meshtoon_frag: Zd, points_vert: Jd, points_frag: Qd, shadow_vert: tf, shadow_frag: ef, sprite_vert: nf, sprite_frag: sf }, et = { common: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Dt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Dt() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Dt() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Dt() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Dt() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Dt() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Dt() }, normalScale: { value: new Tt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Dt() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Dt() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Dt() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Dt() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Pt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 }, uvTransform: { value: new Dt() } }, sprite: { diffuse: { value: new Pt(16777215) }, opacity: { value: 1 }, center: { value: new Tt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Dt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 } } }, Ke = { basic: { uniforms: ye([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.fog]), vertexShader: It.meshbasic_vert, fragmentShader: It.meshbasic_frag }, lambert: { uniforms: ye([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Pt(0) } }]), vertexShader: It.meshlambert_vert, fragmentShader: It.meshlambert_frag }, phong: { uniforms: ye([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Pt(0) }, specular: { value: new Pt(1118481) }, shininess: { value: 30 } }]), vertexShader: It.meshphong_vert, fragmentShader: It.meshphong_frag }, standard: { uniforms: ye([et.common, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.roughnessmap, et.metalnessmap, et.fog, et.lights, { emissive: { value: new Pt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag }, toon: { uniforms: ye([et.common, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.gradientmap, et.fog, et.lights, { emissive: { value: new Pt(0) } }]), vertexShader: It.meshtoon_vert, fragmentShader: It.meshtoon_frag }, matcap: { uniforms: ye([et.common, et.bumpmap, et.normalmap, et.displacementmap, et.fog, { matcap: { value: null } }]), vertexShader: It.meshmatcap_vert, fragmentShader: It.meshmatcap_frag }, points: { uniforms: ye([et.points, et.fog]), vertexShader: It.points_vert, fragmentShader: It.points_frag }, dashed: { uniforms: ye([et.common, et.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: It.linedashed_vert, fragmentShader: It.linedashed_frag }, depth: { uniforms: ye([et.common, et.displacementmap]), vertexShader: It.depth_vert, fragmentShader: It.depth_frag }, normal: { uniforms: ye([et.common, et.bumpmap, et.normalmap, et.displacementmap, { opacity: { value: 1 } }]), vertexShader: It.meshnormal_vert, fragmentShader: It.meshnormal_frag }, sprite: { uniforms: ye([et.sprite, et.fog]), vertexShader: It.sprite_vert, fragmentShader: It.sprite_frag }, background: { uniforms: { uvTransform: { value: new Dt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: It.background_vert, fragmentShader: It.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Dt() } }, vertexShader: It.backgroundCube_vert, fragmentShader: It.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: It.cube_vert, fragmentShader: It.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: It.equirect_vert, fragmentShader: It.equirect_frag }, distanceRGBA: { uniforms: ye([et.common, et.displacementmap, { referencePosition: { value: new U() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: It.distanceRGBA_vert, fragmentShader: It.distanceRGBA_frag }, shadow: { uniforms: ye([et.lights, et.fog, { color: { value: new Pt(0) }, opacity: { value: 1 } }]), vertexShader: It.shadow_vert, fragmentShader: It.shadow_frag } };
Ke.physical = { uniforms: ye([Ke.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Dt() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Dt() }, clearcoatNormalScale: { value: new Tt(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Dt() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Dt() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Dt() }, sheen: { value: 0 }, sheenColor: { value: new Pt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Dt() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Dt() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Dt() }, transmissionSamplerSize: { value: new Tt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Dt() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Pt(0) }, specularColor: { value: new Pt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Dt() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Dt() }, anisotropyVector: { value: new Tt() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Dt() } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag };
const vs = { r: 0, b: 0, g: 0 }, Nn = new je(), rf = new ie();
function af(i, t, e, n, s, r, a) {
  const o = new Pt(0);
  let l = r === true ? 0 : 1, c, h, u = null, f = 0, m = null;
  function g(b) {
    let S = b.isScene === true ? b.background : null;
    return S && S.isTexture && (S = (b.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function v(b) {
    let S = false;
    const I = g(b);
    I === null ? d(o, l) : I && I.isColor && (d(I, 1), S = true);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(b, S) {
    const I = g(S);
    I && (I.isCubeTexture || I.mapping === Fs) ? (h === void 0 && (h = new qe(new Yi(1, 1, 1), new An({ name: "BackgroundCubeMaterial", uniforms: vi(Ke.backgroundCube.uniforms), vertexShader: Ke.backgroundCube.vertexShader, fragmentShader: Ke.backgroundCube.fragmentShader, side: we, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(R, w, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(h)), Nn.copy(S.backgroundRotation), Nn.x *= -1, Nn.y *= -1, Nn.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === false && (Nn.y *= -1, Nn.z *= -1), h.material.uniforms.envMap.value = I, h.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(Nn)), h.material.toneMapped = Yt.getTransfer(I.colorSpace) !== Zt, (u !== I || f !== I.version || m !== i.toneMapping) && (h.material.needsUpdate = true, u = I, f = I.version, m = i.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new qe(new Bs(2, 2), new An({ name: "BackgroundMaterial", uniforms: vi(Ke.background.uniforms), vertexShader: Ke.background.vertexShader, fragmentShader: Ke.background.fragmentShader, side: Tn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Yt.getTransfer(I.colorSpace) !== Zt, I.matrixAutoUpdate === true && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (u !== I || f !== I.version || m !== i.toneMapping) && (c.material.needsUpdate = true, u = I, f = I.version, m = i.toneMapping), c.layers.enableAll(), b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function d(b, S) {
    b.getRGB(vs, Ml(i)), n.buffers.color.setClear(vs.r, vs.g, vs.b, S, a);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(b, S = 1) {
    o.set(b), l = S, d(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(b) {
    l = b, d(o, l);
  }, render: v, addToRenderList: p, dispose: T };
}
function of(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = false;
  function o(M, C, G, z, $) {
    let j = false;
    const Y = u(z, G, C);
    r !== Y && (r = Y, c(r.object)), j = m(M, z, G, $), j && g(M, z, G, $), $ !== null && t.update($, i.ELEMENT_ARRAY_BUFFER), (j || a) && (a = false, S(M, C, G, z), $ !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get($).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(M) {
    return i.bindVertexArray(M);
  }
  function h(M) {
    return i.deleteVertexArray(M);
  }
  function u(M, C, G) {
    const z = G.wireframe === true;
    let $ = n[M.id];
    $ === void 0 && ($ = {}, n[M.id] = $);
    let j = $[C.id];
    j === void 0 && (j = {}, $[C.id] = j);
    let Y = j[z];
    return Y === void 0 && (Y = f(l()), j[z] = Y), Y;
  }
  function f(M) {
    const C = [], G = [], z = [];
    for (let $ = 0; $ < e; $++) C[$] = 0, G[$] = 0, z[$] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: C, enabledAttributes: G, attributeDivisors: z, object: M, attributes: {}, index: null };
  }
  function m(M, C, G, z) {
    const $ = r.attributes, j = C.attributes;
    let Y = 0;
    const Z = G.getAttributes();
    for (const k in Z) if (Z[k].location >= 0) {
      const ht = $[k];
      let _t = j[k];
      if (_t === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (_t = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (_t = M.instanceColor)), ht === void 0 || ht.attribute !== _t || _t && ht.data !== _t.data) return true;
      Y++;
    }
    return r.attributesNum !== Y || r.index !== z;
  }
  function g(M, C, G, z) {
    const $ = {}, j = C.attributes;
    let Y = 0;
    const Z = G.getAttributes();
    for (const k in Z) if (Z[k].location >= 0) {
      let ht = j[k];
      ht === void 0 && (k === "instanceMatrix" && M.instanceMatrix && (ht = M.instanceMatrix), k === "instanceColor" && M.instanceColor && (ht = M.instanceColor));
      const _t = {};
      _t.attribute = ht, ht && ht.data && (_t.data = ht.data), $[k] = _t, Y++;
    }
    r.attributes = $, r.attributesNum = Y, r.index = z;
  }
  function v() {
    const M = r.newAttributes;
    for (let C = 0, G = M.length; C < G; C++) M[C] = 0;
  }
  function p(M) {
    d(M, 0);
  }
  function d(M, C) {
    const G = r.newAttributes, z = r.enabledAttributes, $ = r.attributeDivisors;
    G[M] = 1, z[M] === 0 && (i.enableVertexAttribArray(M), z[M] = 1), $[M] !== C && (i.vertexAttribDivisor(M, C), $[M] = C);
  }
  function T() {
    const M = r.newAttributes, C = r.enabledAttributes;
    for (let G = 0, z = C.length; G < z; G++) C[G] !== M[G] && (i.disableVertexAttribArray(G), C[G] = 0);
  }
  function b(M, C, G, z, $, j, Y) {
    Y === true ? i.vertexAttribIPointer(M, C, G, $, j) : i.vertexAttribPointer(M, C, G, z, $, j);
  }
  function S(M, C, G, z) {
    v();
    const $ = z.attributes, j = G.getAttributes(), Y = C.defaultAttributeValues;
    for (const Z in j) {
      const k = j[Z];
      if (k.location >= 0) {
        let it = $[Z];
        if (it === void 0 && (Z === "instanceMatrix" && M.instanceMatrix && (it = M.instanceMatrix), Z === "instanceColor" && M.instanceColor && (it = M.instanceColor)), it !== void 0) {
          const ht = it.normalized, _t = it.itemSize, Nt = t.get(it);
          if (Nt === void 0) continue;
          const Qt = Nt.buffer, W = Nt.type, tt = Nt.bytesPerElement, pt = W === i.INT || W === i.UNSIGNED_INT || it.gpuType === Ma;
          if (it.isInterleavedBufferAttribute) {
            const st = it.data, St = st.stride, qt = it.offset;
            if (st.isInstancedInterleavedBuffer) {
              for (let At = 0; At < k.locationSize; At++) d(k.location + At, st.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = st.meshPerAttribute * st.count);
            } else for (let At = 0; At < k.locationSize; At++) p(k.location + At);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let At = 0; At < k.locationSize; At++) b(k.location + At, _t / k.locationSize, W, ht, St * tt, (qt + _t / k.locationSize * At) * tt, pt);
          } else {
            if (it.isInstancedBufferAttribute) {
              for (let st = 0; st < k.locationSize; st++) d(k.location + st, it.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = it.meshPerAttribute * it.count);
            } else for (let st = 0; st < k.locationSize; st++) p(k.location + st);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let st = 0; st < k.locationSize; st++) b(k.location + st, _t / k.locationSize, W, ht, _t * tt, _t / k.locationSize * st * tt, pt);
          }
        } else if (Y !== void 0) {
          const ht = Y[Z];
          if (ht !== void 0) switch (ht.length) {
            case 2:
              i.vertexAttrib2fv(k.location, ht);
              break;
            case 3:
              i.vertexAttrib3fv(k.location, ht);
              break;
            case 4:
              i.vertexAttrib4fv(k.location, ht);
              break;
            default:
              i.vertexAttrib1fv(k.location, ht);
          }
        }
      }
    }
    T();
  }
  function I() {
    N();
    for (const M in n) {
      const C = n[M];
      for (const G in C) {
        const z = C[G];
        for (const $ in z) h(z[$].object), delete z[$];
        delete C[G];
      }
      delete n[M];
    }
  }
  function R(M) {
    if (n[M.id] === void 0) return;
    const C = n[M.id];
    for (const G in C) {
      const z = C[G];
      for (const $ in z) h(z[$].object), delete z[$];
      delete C[G];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const C in n) {
      const G = n[C];
      if (G[M.id] === void 0) continue;
      const z = G[M.id];
      for (const $ in z) h(z[$].object), delete z[$];
      delete G[M.id];
    }
  }
  function N() {
    y(), a = true, r !== s && (r = s, c(r.object));
  }
  function y() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: y, dispose: I, releaseStatesOfGeometry: R, releaseStatesOfProgram: w, initAttributes: v, enableAttribute: p, disableUnusedAttributes: T };
}
function lf(i, t, e) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, h) {
    i.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let m = 0;
    for (let g = 0; g < u; g++) m += h[g];
    e.update(m, n, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < c.length; g++) a(c[g], h[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
      let g = 0;
      for (let v = 0; v < u; v++) g += h[v] * f[v];
      e.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function cf(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const w = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(w) {
    return !(w !== Ye && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const N = w === Gi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== tn && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && w !== dn && !N);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === true, f = e.reverseDepthBuffer === true && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), I = g > 0, R = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: f, maxTextures: m, maxVertexTextures: g, maxTextureSize: v, maxCubemapSize: p, maxAttributes: d, maxVertexUniforms: T, maxVaryings: b, maxFragmentUniforms: S, vertexTextures: I, maxSamples: R };
}
function hf(i) {
  const t = this;
  let e = null, n = 0, s = false, r = false;
  const a = new Sn(), o = new Dt(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const m = u.length !== 0 || f || n !== 0 || s;
    return s = f, n = u.length, m;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, f) {
    e = h(u, f, 0);
  }, this.setState = function(u, f, m) {
    const g = u.clippingPlanes, v = u.clipIntersection, p = u.clipShadows, d = i.get(u);
    if (!s || g === null || g.length === 0 || r && !p) r ? h(null) : c();
    else {
      const T = r ? 0 : n, b = T * 4;
      let S = d.clippingState || null;
      l.value = S, S = h(g, f, b, m);
      for (let I = 0; I !== b; ++I) S[I] = e[I];
      d.clippingState = S, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, f, m, g) {
    const v = u !== null ? u.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = l.value, g !== true || p === null) {
        const d = m + v * 4, T = f.matrixWorldInverse;
        o.getNormalMatrix(T), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let b = 0, S = m; b !== v; ++b, S += 4) a.copy(u[b]).applyMatrix4(T, o), a.normal.toArray(p, S), p[S + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return t.numPlanes = v, t.numIntersection = 0, p;
  }
}
function uf(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Ir ? a.mapping = mi : o === Nr && (a.mapping = gi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ir || o === Nr) if (t.has(a)) {
        const l = t.get(a).texture;
        return e(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new rh(l.height);
          return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", s), e(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const hi = 4, To = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], zn = 20, mr = new Al(), Ao = new Pt();
let gr = null, _r = 0, vr = 0, xr = false;
const On = (1 + Math.sqrt(5)) / 2, li = 1 / On, wo = [new U(-On, li, 0), new U(On, li, 0), new U(-li, 0, On), new U(li, 0, On), new U(0, On, -li), new U(0, On, li), new U(-1, 1, -1), new U(1, 1, -1), new U(-1, 1, 1), new U(1, 1, 1)], df = new U();
class Ro {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = df } = r;
    gr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), vr = this._renderer.getActiveMipmapLevel(), xr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const l = this._allocateTargets();
    return l.depthBuffer = true, this._sceneToCubeUV(t, n, s, l, o), e > 0 && this._blur(l, 0, 0, e), this._applyPMREM(l), this._cleanup(l), l;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Lo(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Po(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(gr, _r, vr), this._renderer.xr.enabled = xr, t.scissorTest = false, xs(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === mi || t.mapping === gi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), gr = this._renderer.getRenderTarget(), _r = this._renderer.getActiveCubeFace(), vr = this._renderer.getActiveMipmapLevel(), xr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Ze, minFilter: Ze, generateMipmaps: false, type: Gi, format: Ye, colorSpace: _i, depthBuffer: false }, s = Co(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Co(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = ff(r)), this._blurMaterial = pf(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new qe(this._lodPlanes[0], t);
    this._renderer.compile(e, mr);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const l = new Be(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, m = u.toneMapping;
    u.getClearColor(Ao), u.toneMapping = bn, u.autoClear = false;
    const g = new _l({ name: "PMREM.Background", side: we, depthWrite: false, depthTest: false }), v = new qe(new Yi(), g);
    let p = false;
    const d = t.background;
    d ? d.isColor && (g.color.copy(d), t.background = null, p = true) : (g.color.copy(Ao), p = true);
    for (let T = 0; T < 6; T++) {
      const b = T % 3;
      b === 0 ? (l.up.set(0, c[T], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x + h[T], r.y, r.z)) : b === 1 ? (l.up.set(0, 0, c[T]), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y + h[T], r.z)) : (l.up.set(0, c[T], 0), l.position.set(r.x, r.y, r.z), l.lookAt(r.x, r.y, r.z + h[T]));
      const S = this._cubeSize;
      xs(s, b * S, T > 2 ? S : 0, S, S), u.setRenderTarget(s), p && u.render(v, l), u.render(t, l);
    }
    v.geometry.dispose(), v.material.dispose(), u.toneMapping = m, u.autoClear = f, t.background = d;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === mi || t.mapping === gi;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Lo()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Po());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new qe(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    xs(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, mr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = wo[(s - r - 1) % wo.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, s, "latitudinal", r), this._halfBlur(a, t, n, n, s, "longitudinal", r);
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new qe(this._lodPlanes[s], c), f = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * zn - 1), v = r / g, p = isFinite(r) ? 1 + Math.floor(h * v) : zn;
    p > zn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zn}`);
    const d = [];
    let T = 0;
    for (let w = 0; w < zn; ++w) {
      const N = w / v, y = Math.exp(-N * N / 2);
      d.push(y), w === 0 ? T += y : w < p && (T += 2 * y);
    }
    for (let w = 0; w < d.length; w++) d[w] = d[w] / T;
    f.envMap.value = t.texture, f.samples.value = p, f.weights.value = d, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = g, f.mipInt.value = b - n;
    const S = this._sizeLods[s], I = 3 * S * (s > b - hi ? s - b + hi : 0), R = 4 * (this._cubeSize - S);
    xs(e, I, R, 3 * S, 2 * S), l.setRenderTarget(e), l.render(u, mr);
  }
}
function ff(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - hi + 1 + To.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > i - hi ? l = To[a - i + hi - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, v = 3, p = 2, d = 1, T = new Float32Array(v * g * m), b = new Float32Array(p * g * m), S = new Float32Array(d * g * m);
    for (let R = 0; R < m; R++) {
      const w = R % 3 * 2 / 3 - 1, N = R > 2 ? 0 : -1, y = [w, N, 0, w + 2 / 3, N, 0, w + 2 / 3, N + 1, 0, w, N, 0, w + 2 / 3, N + 1, 0, w, N + 1, 0];
      T.set(y, v * g * R), b.set(f, p * g * R);
      const M = [R, R, R, R, R, R];
      S.set(M, d * g * R);
    }
    const I = new ze();
    I.setAttribute("position", new Je(T, v)), I.setAttribute("uv", new Je(b, p)), I.setAttribute("faceIndex", new Je(S, d)), t.push(I), s > hi && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Co(i, t, e) {
  const n = new Wn(i, t, e);
  return n.texture.mapping = Fs, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function xs(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function pf(i, t, e) {
  const n = new Float32Array(zn), s = new U(0, 1, 0);
  return new An({ name: "SphericalGaussianBlur", defines: { n: zn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function Po() {
  return new An({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function Lo() {
  return new An({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: yn, depthTest: false, depthWrite: false });
}
function Da() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function mf(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === Ir || l === Nr, h = l === mi || l === gi;
      if (c || h) {
        let u = t.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new Ro(i)), u = c ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || h && m && s(m) ? (e === null && (e = new Ro(i)), u = c ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function gf(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return t[n] = s, s;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const s = e(n);
    return s === null && Cs("THREE.WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function _f(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && t.remove(f.index);
    for (const g in f.attributes) t.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete s[f.id];
    const m = r.get(f);
    m && (t.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, f) {
    return s[f.id] === true || (f.addEventListener("dispose", a), s[f.id] = true, e.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const m in f) t.update(f[m], i.ARRAY_BUFFER);
  }
  function c(u) {
    const f = [], m = u.index, g = u.attributes.position;
    let v = 0;
    if (m !== null) {
      const T = m.array;
      v = m.version;
      for (let b = 0, S = T.length; b < S; b += 3) {
        const I = T[b + 0], R = T[b + 1], w = T[b + 2];
        f.push(I, R, R, w, w, I);
      }
    } else if (g !== void 0) {
      const T = g.array;
      v = g.version;
      for (let b = 0, S = T.length / 3 - 1; b < S; b += 3) {
        const I = b + 0, R = b + 1, w = b + 2;
        f.push(I, R, R, w, w, I);
      }
    } else return;
    const p = new (fl(f) ? xl : vl)(f, 1);
    p.version = v;
    const d = r.get(u);
    d && t.remove(d), r.set(u, p);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function vf(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i.drawElements(n, m, r, f * a), e.update(m, n, 1);
  }
  function c(f, m, g) {
    g !== 0 && (i.drawElementsInstanced(n, m, r, f * a, g), e.update(m, n, g));
  }
  function h(f, m, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, g);
    let p = 0;
    for (let d = 0; d < g; d++) p += m[d];
    e.update(p, n, 1);
  }
  function u(f, m, g, v) {
    if (g === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let d = 0; d < f.length; d++) c(f[d] / a, m[d], v[d]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, v, 0, g);
      let d = 0;
      for (let T = 0; T < g; T++) d += m[T] * v[T];
      e.update(d, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function xf(i) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: s, update: n };
}
function Mf(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new oe();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let M = function() {
        N.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      var m = M;
      f !== void 0 && f.texture.dispose();
      const g = o.morphAttributes.position !== void 0, v = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], T = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let S = 0;
      g === true && (S = 1), v === true && (S = 2), p === true && (S = 3);
      let I = o.attributes.position.count * S, R = 1;
      I > t.maxTextureSize && (R = Math.ceil(I / t.maxTextureSize), I = t.maxTextureSize);
      const w = new Float32Array(I * R * 4 * u), N = new pl(w, I, R, u);
      N.type = dn, N.needsUpdate = true;
      const y = S * 4;
      for (let C = 0; C < u; C++) {
        const G = d[C], z = T[C], $ = b[C], j = I * R * 4 * C;
        for (let Y = 0; Y < G.count; Y++) {
          const Z = Y * y;
          g === true && (s.fromBufferAttribute(G, Y), w[j + Z + 0] = s.x, w[j + Z + 1] = s.y, w[j + Z + 2] = s.z, w[j + Z + 3] = 0), v === true && (s.fromBufferAttribute(z, Y), w[j + Z + 4] = s.x, w[j + Z + 5] = s.y, w[j + Z + 6] = s.z, w[j + Z + 7] = 0), p === true && (s.fromBufferAttribute($, Y), w[j + Z + 8] = s.x, w[j + Z + 9] = s.y, w[j + Z + 10] = s.z, w[j + Z + 11] = $.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: u, texture: N, size: new Tt(I, R) }, n.set(o, f), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let g = 0;
      for (let p = 0; p < c.length; p++) g += c[p];
      const v = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", v), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Sf(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (s.get(u) !== c && (t.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const Rl = new Se(), Do = new yl(1, 1), Cl = new pl(), Pl = new Vc(), Ll = new El(), Uo = [], Io = [], No = new Float32Array(16), Fo = new Float32Array(9), Oo = new Float32Array(4);
function xi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Uo[s];
  if (r === void 0 && (r = new Float32Array(s), Uo[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, i[a].toArray(r, o);
  }
  return r;
}
function de(i, t) {
  if (i.length !== t.length) return false;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return false;
  return true;
}
function fe(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function zs(i, t) {
  let e = Io[t];
  e === void 0 && (e = new Int32Array(t), Io[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function Ef(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function yf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2fv(this.addr, t), fe(e, t);
  }
}
function bf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (de(e, t)) return;
    i.uniform3fv(this.addr, t), fe(e, t);
  }
}
function Tf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4fv(this.addr, t), fe(e, t);
  }
}
function Af(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix2fv(this.addr, false, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    Oo.set(n), i.uniformMatrix2fv(this.addr, false, Oo), fe(e, n);
  }
}
function wf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix3fv(this.addr, false, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    Fo.set(n), i.uniformMatrix3fv(this.addr, false, Fo), fe(e, n);
  }
}
function Rf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (de(e, t)) return;
    i.uniformMatrix4fv(this.addr, false, t), fe(e, t);
  } else {
    if (de(e, n)) return;
    No.set(n), i.uniformMatrix4fv(this.addr, false, No), fe(e, n);
  }
}
function Cf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function Pf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2iv(this.addr, t), fe(e, t);
  }
}
function Lf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3iv(this.addr, t), fe(e, t);
  }
}
function Df(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4iv(this.addr, t), fe(e, t);
  }
}
function Uf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function If(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (de(e, t)) return;
    i.uniform2uiv(this.addr, t), fe(e, t);
  }
}
function Nf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (de(e, t)) return;
    i.uniform3uiv(this.addr, t), fe(e, t);
  }
}
function Ff(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (de(e, t)) return;
    i.uniform4uiv(this.addr, t), fe(e, t);
  }
}
function Of(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (Do.compareFunction = dl, r = Do) : r = Rl, e.setTexture2D(t || r, s);
}
function Bf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || Pl, s);
}
function zf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || Ll, s);
}
function Hf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Cl, s);
}
function kf(i) {
  switch (i) {
    case 5126:
      return Ef;
    case 35664:
      return yf;
    case 35665:
      return bf;
    case 35666:
      return Tf;
    case 35674:
      return Af;
    case 35675:
      return wf;
    case 35676:
      return Rf;
    case 5124:
    case 35670:
      return Cf;
    case 35667:
    case 35671:
      return Pf;
    case 35668:
    case 35672:
      return Lf;
    case 35669:
    case 35673:
      return Df;
    case 5125:
      return Uf;
    case 36294:
      return If;
    case 36295:
      return Nf;
    case 36296:
      return Ff;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Of;
    case 35679:
    case 36299:
    case 36307:
      return Bf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return zf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hf;
  }
}
function Vf(i, t) {
  i.uniform1fv(this.addr, t);
}
function Gf(i, t) {
  const e = xi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Wf(i, t) {
  const e = xi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Xf(i, t) {
  const e = xi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Yf(i, t) {
  const e = xi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, e);
}
function qf(i, t) {
  const e = xi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, e);
}
function $f(i, t) {
  const e = xi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, e);
}
function jf(i, t) {
  i.uniform1iv(this.addr, t);
}
function Kf(i, t) {
  i.uniform2iv(this.addr, t);
}
function Zf(i, t) {
  i.uniform3iv(this.addr, t);
}
function Jf(i, t) {
  i.uniform4iv(this.addr, t);
}
function Qf(i, t) {
  i.uniform1uiv(this.addr, t);
}
function tp(i, t) {
  i.uniform2uiv(this.addr, t);
}
function ep(i, t) {
  i.uniform3uiv(this.addr, t);
}
function np(i, t) {
  i.uniform4uiv(this.addr, t);
}
function ip(i, t, e) {
  const n = this.cache, s = t.length, r = zs(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2D(t[a] || Rl, r[a]);
}
function sp(i, t, e) {
  const n = this.cache, s = t.length, r = zs(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || Pl, r[a]);
}
function rp(i, t, e) {
  const n = this.cache, s = t.length, r = zs(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || Ll, r[a]);
}
function ap(i, t, e) {
  const n = this.cache, s = t.length, r = zs(e, s);
  de(n, r) || (i.uniform1iv(this.addr, r), fe(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || Cl, r[a]);
}
function op(i) {
  switch (i) {
    case 5126:
      return Vf;
    case 35664:
      return Gf;
    case 35665:
      return Wf;
    case 35666:
      return Xf;
    case 35674:
      return Yf;
    case 35675:
      return qf;
    case 35676:
      return $f;
    case 5124:
    case 35670:
      return jf;
    case 35667:
    case 35671:
      return Kf;
    case 35668:
    case 35672:
      return Zf;
    case 35669:
    case 35673:
      return Jf;
    case 5125:
      return Qf;
    case 36294:
      return tp;
    case 36295:
      return ep;
    case 36296:
      return np;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return ip;
    case 35679:
    case 36299:
    case 36307:
      return sp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return rp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ap;
  }
}
class lp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = kf(e.type);
  }
}
class cp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = op(e.type);
  }
}
class hp {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const Mr = /(\w+)(\])?(\[|\.)?/g;
function Bo(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function up(i, t, e) {
  const n = i.name, s = n.length;
  for (Mr.lastIndex = 0; ; ) {
    const r = Mr.exec(n), a = Mr.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Bo(e, c === void 0 ? new lp(o, i, t) : new cp(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new hp(o), Bo(e, u)), e = u;
    }
  }
}
class Ps {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      up(r, a, this);
    }
  }
  setValue(t, e, n, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    const s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(t, l.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function zo(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const dp = 37297;
let fp = 0;
function pp(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Ho = new Dt();
function mp(i) {
  Yt._getMatrix(Ho, Yt.workingColorSpace, i);
  const t = `mat3( ${Ho.elements.map((e) => e.toFixed(4))} )`;
  switch (Yt.getTransfer(i)) {
    case Ls:
      return [t, "LinearTransferOETF"];
    case Zt:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function ko(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + pp(i.getShaderSource(t), a);
  } else return s;
}
function gp(i, t) {
  const e = mp(t);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
function _p(i, t) {
  let e;
  switch (t) {
    case fc:
      e = "Linear";
      break;
    case pc:
      e = "Reinhard";
      break;
    case mc:
      e = "Cineon";
      break;
    case gc:
      e = "ACESFilmic";
      break;
    case vc:
      e = "AgX";
      break;
    case xc:
      e = "Neutral";
      break;
    case _c:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Ms = new U();
function vp() {
  Yt.getLuminanceCoefficients(Ms);
  const i = Ms.x.toFixed(4), t = Ms.y.toFixed(4), e = Ms.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function xp(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Li).join(`
`);
}
function Mp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Sp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: i.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function Li(i) {
  return i !== "";
}
function Vo(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Go(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Ep = /^[ \t]*#include +<([\w\d./]+)>/gm;
function fa(i) {
  return i.replace(Ep, bp);
}
const yp = /* @__PURE__ */ new Map();
function bp(i, t) {
  let e = It[t];
  if (e === void 0) {
    const n = yp.get(t);
    if (n !== void 0) e = It[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return fa(e);
}
const Tp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wo(i) {
  return i.replace(Tp, Ap);
}
function Ap(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Xo(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function wp(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === nl ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Yl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === hn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Rp(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case mi:
    case gi:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case Fs:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function Cp(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case gi:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function Pp(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case xa:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case uc:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case dc:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function Lp(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function Dp(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = wp(e), c = Rp(e), h = Cp(e), u = Pp(e), f = Lp(e), m = xp(e), g = Mp(r), v = s.createProgram();
  let p, d, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Li).join(`
`), p.length > 0 && (p += `
`), d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Li).join(`
`), d.length > 0 && (d += `
`)) : (p = [Xo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Li).join(`
`), d = [Xo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== bn ? "#define TONE_MAPPING" : "", e.toneMapping !== bn ? It.tonemapping_pars_fragment : "", e.toneMapping !== bn ? _p("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", It.colorspace_pars_fragment, gp("linearToOutputTexel", e.outputColorSpace), vp(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Li).join(`
`)), a = fa(a), a = Vo(a, e), a = Go(a, e), o = fa(o), o = Vo(o, e), o = Go(o, e), a = Wo(a), o = Wo(o), e.isRawShaderMaterial !== true && (T = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, d = ["#define varying in", e.glslVersion === Ka ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Ka ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
  const b = T + p + a, S = T + d + o, I = zo(s, s.VERTEX_SHADER, b), R = zo(s, s.FRAGMENT_SHADER, S);
  s.attachShader(v, I), s.attachShader(v, R), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === true && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const G = s.getProgramInfoLog(v).trim(), z = s.getShaderInfoLog(I).trim(), $ = s.getShaderInfoLog(R).trim();
      let j = true, Y = true;
      if (s.getProgramParameter(v, s.LINK_STATUS) === false) if (j = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, v, I, R);
      else {
        const Z = ko(s, I, "vertex"), k = ko(s, R, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + G + `
` + Z + `
` + k);
      }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (z === "" || $ === "") && (Y = false);
      Y && (C.diagnostics = { runnable: j, programLog: G, vertexShader: { log: z, prefix: p }, fragmentShader: { log: $, prefix: d } });
    }
    s.deleteShader(I), s.deleteShader(R), N = new Ps(s, v), y = Sp(s, v);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && w(this), N;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && w(this), y;
  };
  let M = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = s.getProgramParameter(v, dp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = fp++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = I, this.fragmentShader = R, this;
}
let Up = 0;
class Ip {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Np(t), e.set(t, n)), n;
  }
}
class Np {
  constructor(t) {
    this.id = Up++, this.code = t, this.usedTimes = 0;
  }
}
function Fp(i, t, e, n, s, r, a) {
  const o = new ml(), l = new Ip(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let m = s.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function v(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function p(y, M, C, G, z) {
    const $ = G.fog, j = z.geometry, Y = y.isMeshStandardMaterial ? G.environment : null, Z = (y.isMeshStandardMaterial ? e : t).get(y.envMap || Y), k = Z && Z.mapping === Fs ? Z.image.height : null, it = g[y.type];
    y.precision !== null && (m = s.getMaxPrecision(y.precision), m !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", m, "instead."));
    const ht = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, _t = ht !== void 0 ? ht.length : 0;
    let Nt = 0;
    j.morphAttributes.position !== void 0 && (Nt = 1), j.morphAttributes.normal !== void 0 && (Nt = 2), j.morphAttributes.color !== void 0 && (Nt = 3);
    let Qt, W, tt, pt;
    if (it) {
      const Kt = Ke[it];
      Qt = Kt.vertexShader, W = Kt.fragmentShader;
    } else Qt = y.vertexShader, W = y.fragmentShader, l.update(y), tt = l.getVertexShaderID(y), pt = l.getFragmentShaderID(y);
    const st = i.getRenderTarget(), St = i.state.buffers.depth.getReversed(), qt = z.isInstancedMesh === true, At = z.isBatchedMesh === true, le = !!y.map, se = !!y.matcap, Bt = !!Z, A = !!y.aoMap, Ue = !!y.lightMap, kt = !!y.bumpMap, zt = !!y.normalMap, vt = !!y.displacementMap, ee = !!y.emissiveMap, gt = !!y.metalnessMap, E = !!y.roughnessMap, _ = y.anisotropy > 0, F = y.clearcoat > 0, X = y.dispersion > 0, K = y.iridescence > 0, V = y.sheen > 0, mt = y.transmission > 0, rt = _ && !!y.anisotropyMap, Et = F && !!y.clearcoatMap, yt = F && !!y.clearcoatNormalMap, J = F && !!y.clearcoatRoughnessMap, ut = K && !!y.iridescenceMap, bt = K && !!y.iridescenceThicknessMap, Rt = V && !!y.sheenColorMap, dt = V && !!y.sheenRoughnessMap, Ht = !!y.specularMap, Ut = !!y.specularColorMap, te = !!y.specularIntensityMap, P = mt && !!y.transmissionMap, at = mt && !!y.thicknessMap, H = !!y.gradientMap, q = !!y.alphaMap, lt = y.alphaTest > 0, ot = !!y.alphaHash, Lt = !!y.extensions;
    let re = bn;
    y.toneMapped && (st === null || st.isXRRenderTarget === true) && (re = i.toneMapping);
    const ve = { shaderID: it, shaderType: y.type, shaderName: y.name, vertexShader: Qt, fragmentShader: W, defines: y.defines, customVertexShaderID: tt, customFragmentShaderID: pt, isRawShaderMaterial: y.isRawShaderMaterial === true, glslVersion: y.glslVersion, precision: m, batching: At, batchingColor: At && z._colorsTexture !== null, instancing: qt, instancingColor: qt && z.instanceColor !== null, instancingMorph: qt && z.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: st === null ? i.outputColorSpace : st.isXRRenderTarget === true ? st.texture.colorSpace : _i, alphaToCoverage: !!y.alphaToCoverage, map: le, matcap: se, envMap: Bt, envMapMode: Bt && Z.mapping, envMapCubeUVHeight: k, aoMap: A, lightMap: Ue, bumpMap: kt, normalMap: zt, displacementMap: f && vt, emissiveMap: ee, normalMapObjectSpace: zt && y.normalMapType === yc, normalMapTangentSpace: zt && y.normalMapType === Aa, metalnessMap: gt, roughnessMap: E, anisotropy: _, anisotropyMap: rt, clearcoat: F, clearcoatMap: Et, clearcoatNormalMap: yt, clearcoatRoughnessMap: J, dispersion: X, iridescence: K, iridescenceMap: ut, iridescenceThicknessMap: bt, sheen: V, sheenColorMap: Rt, sheenRoughnessMap: dt, specularMap: Ht, specularColorMap: Ut, specularIntensityMap: te, transmission: mt, transmissionMap: P, thicknessMap: at, gradientMap: H, opaque: y.transparent === false && y.blending === di && y.alphaToCoverage === false, alphaMap: q, alphaTest: lt, alphaHash: ot, combine: y.combine, mapUv: le && v(y.map.channel), aoMapUv: A && v(y.aoMap.channel), lightMapUv: Ue && v(y.lightMap.channel), bumpMapUv: kt && v(y.bumpMap.channel), normalMapUv: zt && v(y.normalMap.channel), displacementMapUv: vt && v(y.displacementMap.channel), emissiveMapUv: ee && v(y.emissiveMap.channel), metalnessMapUv: gt && v(y.metalnessMap.channel), roughnessMapUv: E && v(y.roughnessMap.channel), anisotropyMapUv: rt && v(y.anisotropyMap.channel), clearcoatMapUv: Et && v(y.clearcoatMap.channel), clearcoatNormalMapUv: yt && v(y.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: J && v(y.clearcoatRoughnessMap.channel), iridescenceMapUv: ut && v(y.iridescenceMap.channel), iridescenceThicknessMapUv: bt && v(y.iridescenceThicknessMap.channel), sheenColorMapUv: Rt && v(y.sheenColorMap.channel), sheenRoughnessMapUv: dt && v(y.sheenRoughnessMap.channel), specularMapUv: Ht && v(y.specularMap.channel), specularColorMapUv: Ut && v(y.specularColorMap.channel), specularIntensityMapUv: te && v(y.specularIntensityMap.channel), transmissionMapUv: P && v(y.transmissionMap.channel), thicknessMapUv: at && v(y.thicknessMap.channel), alphaMapUv: q && v(y.alphaMap.channel), vertexTangents: !!j.attributes.tangent && (zt || _), vertexColors: y.vertexColors, vertexAlphas: y.vertexColors === true && !!j.attributes.color && j.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!j.attributes.uv && (le || q), fog: !!$, useFog: y.fog === true, fogExp2: !!$ && $.isFogExp2, flatShading: y.flatShading === true, sizeAttenuation: y.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: St, skinning: z.isSkinnedMesh === true, morphTargets: j.morphAttributes.position !== void 0, morphNormals: j.morphAttributes.normal !== void 0, morphColors: j.morphAttributes.color !== void 0, morphTargetsCount: _t, morphTextureStride: Nt, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: y.dithering, shadowMapEnabled: i.shadowMap.enabled && C.length > 0, shadowMapType: i.shadowMap.type, toneMapping: re, decodeVideoTexture: le && y.map.isVideoTexture === true && Yt.getTransfer(y.map.colorSpace) === Zt, decodeVideoTextureEmissive: ee && y.emissiveMap.isVideoTexture === true && Yt.getTransfer(y.emissiveMap.colorSpace) === Zt, premultipliedAlpha: y.premultipliedAlpha, doubleSided: y.side === un, flipSided: y.side === we, useDepthPacking: y.depthPacking >= 0, depthPacking: y.depthPacking || 0, index0AttributeName: y.index0AttributeName, extensionClipCullDistance: Lt && y.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Lt && y.extensions.multiDraw === true || At) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: y.customProgramCacheKey() };
    return ve.vertexUv1s = c.has(1), ve.vertexUv2s = c.has(2), ve.vertexUv3s = c.has(3), c.clear(), ve;
  }
  function d(y) {
    const M = [];
    if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0) for (const C in y.defines) M.push(C), M.push(y.defines[C]);
    return y.isRawShaderMaterial === false && (T(M, y), b(M, y), M.push(i.outputColorSpace)), M.push(y.customProgramCacheKey), M.join();
  }
  function T(y, M) {
    y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking);
  }
  function b(y, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function S(y) {
    const M = g[y.type];
    let C;
    if (M) {
      const G = Ke[M];
      C = eh.clone(G.uniforms);
    } else C = y.uniforms;
    return C;
  }
  function I(y, M) {
    let C;
    for (let G = 0, z = h.length; G < z; G++) {
      const $ = h[G];
      if ($.cacheKey === M) {
        C = $, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new Dp(i, M, y, r), h.push(C)), C;
  }
  function R(y) {
    if (--y.usedTimes === 0) {
      const M = h.indexOf(y);
      h[M] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function w(y) {
    l.remove(y);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: d, getUniforms: S, acquireProgram: I, releaseProgram: R, releaseShaderCache: w, programs: h, dispose: N };
}
function Op() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, l) {
    i.get(a)[o] = l;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: s, dispose: r };
}
function Bp(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function Yo(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function qo() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(u, f, m, g, v, p) {
    let d = i[t];
    return d === void 0 ? (d = { id: u.id, object: u, geometry: f, material: m, groupOrder: g, renderOrder: u.renderOrder, z: v, group: p }, i[t] = d) : (d.id = u.id, d.object = u, d.geometry = f, d.material = m, d.groupOrder = g, d.renderOrder = u.renderOrder, d.z = v, d.group = p), t++, d;
  }
  function o(u, f, m, g, v, p) {
    const d = a(u, f, m, g, v, p);
    m.transmission > 0 ? n.push(d) : m.transparent === true ? s.push(d) : e.push(d);
  }
  function l(u, f, m, g, v, p) {
    const d = a(u, f, m, g, v, p);
    m.transmission > 0 ? n.unshift(d) : m.transparent === true ? s.unshift(d) : e.unshift(d);
  }
  function c(u, f) {
    e.length > 1 && e.sort(u || Bp), n.length > 1 && n.sort(f || Yo), s.length > 1 && s.sort(f || Yo);
  }
  function h() {
    for (let u = t, f = i.length; u < f; u++) {
      const m = i[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: s, init: r, push: o, unshift: l, finish: h, sort: c };
}
function zp() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new qo(), i.set(n, [a])) : s >= r.length ? (a = new qo(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function Hp() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new U(), color: new Pt() };
        break;
      case "SpotLight":
        e = { position: new U(), direction: new U(), color: new Pt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new U(), color: new Pt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new U(), skyColor: new Pt(), groundColor: new Pt() };
        break;
      case "RectAreaLight":
        e = { color: new Pt(), position: new U(), halfWidth: new U(), halfHeight: new U() };
        break;
    }
    return i[t.id] = e, e;
  } };
}
function kp() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Tt() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Tt() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Tt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[t.id] = e, e;
  } };
}
let Vp = 0;
function Gp(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Wp(i) {
  const t = new Hp(), e = kp(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new U());
  const s = new U(), r = new ie(), a = new ie();
  function o(c) {
    let h = 0, u = 0, f = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let m = 0, g = 0, v = 0, p = 0, d = 0, T = 0, b = 0, S = 0, I = 0, R = 0, w = 0;
    c.sort(Gp);
    for (let y = 0, M = c.length; y < M; y++) {
      const C = c[y], G = C.color, z = C.intensity, $ = C.distance, j = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) h += G.r * z, u += G.g * z, f += G.b * z;
      else if (C.isLightProbe) {
        for (let Y = 0; Y < 9; Y++) n.probe[Y].addScaledVector(C.sh.coefficients[Y], z);
        w++;
      } else if (C.isDirectionalLight) {
        const Y = t.get(C);
        if (Y.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Z = C.shadow, k = e.get(C);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = C.shadow.matrix, T++;
        }
        n.directional[m] = Y, m++;
      } else if (C.isSpotLight) {
        const Y = t.get(C);
        Y.position.setFromMatrixPosition(C.matrixWorld), Y.color.copy(G).multiplyScalar(z), Y.distance = $, Y.coneCos = Math.cos(C.angle), Y.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), Y.decay = C.decay, n.spot[v] = Y;
        const Z = C.shadow;
        if (C.map && (n.spotLightMap[I] = C.map, I++, Z.updateMatrices(C), C.castShadow && R++), n.spotLightMatrix[v] = Z.matrix, C.castShadow) {
          const k = e.get(C);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, n.spotShadow[v] = k, n.spotShadowMap[v] = j, S++;
        }
        v++;
      } else if (C.isRectAreaLight) {
        const Y = t.get(C);
        Y.color.copy(G).multiplyScalar(z), Y.halfWidth.set(C.width * 0.5, 0, 0), Y.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[p] = Y, p++;
      } else if (C.isPointLight) {
        const Y = t.get(C);
        if (Y.color.copy(C.color).multiplyScalar(C.intensity), Y.distance = C.distance, Y.decay = C.decay, C.castShadow) {
          const Z = C.shadow, k = e.get(C);
          k.shadowIntensity = Z.intensity, k.shadowBias = Z.bias, k.shadowNormalBias = Z.normalBias, k.shadowRadius = Z.radius, k.shadowMapSize = Z.mapSize, k.shadowCameraNear = Z.camera.near, k.shadowCameraFar = Z.camera.far, n.pointShadow[g] = k, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = C.shadow.matrix, b++;
        }
        n.point[g] = Y, g++;
      } else if (C.isHemisphereLight) {
        const Y = t.get(C);
        Y.skyColor.copy(C.color).multiplyScalar(z), Y.groundColor.copy(C.groundColor).multiplyScalar(z), n.hemi[d] = Y, d++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = et.LTC_FLOAT_1, n.rectAreaLTC2 = et.LTC_FLOAT_2) : (n.rectAreaLTC1 = et.LTC_HALF_1, n.rectAreaLTC2 = et.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== m || N.pointLength !== g || N.spotLength !== v || N.rectAreaLength !== p || N.hemiLength !== d || N.numDirectionalShadows !== T || N.numPointShadows !== b || N.numSpotShadows !== S || N.numSpotMaps !== I || N.numLightProbes !== w) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = S + I - R, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, N.directionalLength = m, N.pointLength = g, N.spotLength = v, N.rectAreaLength = p, N.hemiLength = d, N.numDirectionalShadows = T, N.numPointShadows = b, N.numSpotShadows = S, N.numSpotMaps = I, N.numLightProbes = w, n.version = Vp++);
  }
  function l(c, h) {
    let u = 0, f = 0, m = 0, g = 0, v = 0;
    const p = h.matrixWorldInverse;
    for (let d = 0, T = c.length; d < T; d++) {
      const b = c[d];
      if (b.isDirectionalLight) {
        const S = n.directional[u];
        S.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), u++;
      } else if (b.isSpotLight) {
        const S = n.spot[m];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(p), S.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), S.direction.sub(s), S.direction.transformDirection(p), m++;
      } else if (b.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(p), a.identity(), r.copy(b.matrixWorld), r.premultiply(p), a.extractRotation(r), S.halfWidth.set(b.width * 0.5, 0, 0), S.halfHeight.set(0, b.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const S = n.point[f];
        S.position.setFromMatrixPosition(b.matrixWorld), S.position.applyMatrix4(p), f++;
      } else if (b.isHemisphereLight) {
        const S = n.hemi[v];
        S.direction.setFromMatrixPosition(b.matrixWorld), S.direction.transformDirection(p), v++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function $o(i) {
  const t = new Wp(i), e = [], n = [];
  function s(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function Xp(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new $o(i), t.set(s, [o])) : r >= a.length ? (o = new $o(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const Yp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, qp = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function $p(i, t, e) {
  let n = new Ca();
  const s = new Tt(), r = new Tt(), a = new oe(), o = new uh({ depthPacking: Ec }), l = new dh(), c = {}, h = e.maxTextureSize, u = { [Tn]: we, [we]: Tn, [un]: un }, f = new An({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Tt() }, radius: { value: 4 } }, vertexShader: Yp, fragmentShader: qp }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new ze();
  g.setAttribute("position", new Je(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const v = new qe(g, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = nl;
  let d = this.type;
  this.render = function(R, w, N) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || R.length === 0) return;
    const y = i.getRenderTarget(), M = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(yn), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    const z = d !== hn && this.type === hn, $ = d === hn && this.type !== hn;
    for (let j = 0, Y = R.length; j < Y; j++) {
      const Z = R[j], k = Z.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === false && k.needsUpdate === false) continue;
      s.copy(k.mapSize);
      const it = k.getFrameExtents();
      if (s.multiply(it), r.copy(k.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / it.x), s.x = r.x * it.x, k.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / it.y), s.y = r.y * it.y, k.mapSize.y = r.y)), k.map === null || z === true || $ === true) {
        const _t = this.type !== hn ? { minFilter: $e, magFilter: $e } : {};
        k.map !== null && k.map.dispose(), k.map = new Wn(s.x, s.y, _t), k.map.texture.name = Z.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const ht = k.getViewportCount();
      for (let _t = 0; _t < ht; _t++) {
        const Nt = k.getViewport(_t);
        a.set(r.x * Nt.x, r.y * Nt.y, r.x * Nt.z, r.y * Nt.w), G.viewport(a), k.updateMatrices(Z, _t), n = k.getFrustum(), S(w, N, k.camera, Z, this.type);
      }
      k.isPointLightShadow !== true && this.type === hn && T(k, N), k.needsUpdate = false;
    }
    d = this.type, p.needsUpdate = false, i.setRenderTarget(y, M, C);
  };
  function T(R, w) {
    const N = t.update(v);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = true, m.needsUpdate = true), R.mapPass === null && (R.mapPass = new Wn(s.x, s.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(w, null, N, f, v, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(w, null, N, m, v, null);
  }
  function b(R, w, N, y) {
    let M = null;
    const C = N.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (C !== void 0) M = C;
    else if (M = N.isPointLight === true ? l : o, i.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
      const G = M.uuid, z = w.uuid;
      let $ = c[G];
      $ === void 0 && ($ = {}, c[G] = $);
      let j = $[z];
      j === void 0 && (j = M.clone(), $[z] = j, w.addEventListener("dispose", I)), M = j;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, y === hn ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : u[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, N.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const G = i.properties.get(M);
      G.light = N;
    }
    return M;
  }
  function S(R, w, N, y, M) {
    if (R.visible === false) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && M === hn) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, R.matrixWorld);
      const z = t.update(R), $ = R.material;
      if (Array.isArray($)) {
        const j = z.groups;
        for (let Y = 0, Z = j.length; Y < Z; Y++) {
          const k = j[Y], it = $[k.materialIndex];
          if (it && it.visible) {
            const ht = b(R, it, y, M);
            R.onBeforeShadow(i, R, w, N, z, ht, k), i.renderBufferDirect(N, null, z, ht, R, k), R.onAfterShadow(i, R, w, N, z, ht, k);
          }
        }
      } else if ($.visible) {
        const j = b(R, $, y, M);
        R.onBeforeShadow(i, R, w, N, z, j, null), i.renderBufferDirect(N, null, z, j, R, null), R.onAfterShadow(i, R, w, N, z, j, null);
      }
    }
    const G = R.children;
    for (let z = 0, $ = G.length; z < $; z++) S(G[z], w, N, y, M);
  }
  function I(R) {
    R.target.removeEventListener("dispose", I);
    for (const N in c) {
      const y = c[N], M = R.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const jp = { [wr]: Rr, [Cr]: Dr, [Pr]: Ur, [pi]: Lr, [Rr]: wr, [Dr]: Cr, [Ur]: Pr, [Lr]: pi };
function Kp(i, t) {
  function e() {
    let P = false;
    const at = new oe();
    let H = null;
    const q = new oe(0, 0, 0, 0);
    return { setMask: function(lt) {
      H !== lt && !P && (i.colorMask(lt, lt, lt, lt), H = lt);
    }, setLocked: function(lt) {
      P = lt;
    }, setClear: function(lt, ot, Lt, re, ve) {
      ve === true && (lt *= re, ot *= re, Lt *= re), at.set(lt, ot, Lt, re), q.equals(at) === false && (i.clearColor(lt, ot, Lt, re), q.copy(at));
    }, reset: function() {
      P = false, H = null, q.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let P = false, at = false, H = null, q = null, lt = null;
    return { setReversed: function(ot) {
      if (at !== ot) {
        const Lt = t.get("EXT_clip_control");
        ot ? Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.ZERO_TO_ONE_EXT) : Lt.clipControlEXT(Lt.LOWER_LEFT_EXT, Lt.NEGATIVE_ONE_TO_ONE_EXT), at = ot;
        const re = lt;
        lt = null, this.setClear(re);
      }
    }, getReversed: function() {
      return at;
    }, setTest: function(ot) {
      ot ? st(i.DEPTH_TEST) : St(i.DEPTH_TEST);
    }, setMask: function(ot) {
      H !== ot && !P && (i.depthMask(ot), H = ot);
    }, setFunc: function(ot) {
      if (at && (ot = jp[ot]), q !== ot) {
        switch (ot) {
          case wr:
            i.depthFunc(i.NEVER);
            break;
          case Rr:
            i.depthFunc(i.ALWAYS);
            break;
          case Cr:
            i.depthFunc(i.LESS);
            break;
          case pi:
            i.depthFunc(i.LEQUAL);
            break;
          case Pr:
            i.depthFunc(i.EQUAL);
            break;
          case Lr:
            i.depthFunc(i.GEQUAL);
            break;
          case Dr:
            i.depthFunc(i.GREATER);
            break;
          case Ur:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        q = ot;
      }
    }, setLocked: function(ot) {
      P = ot;
    }, setClear: function(ot) {
      lt !== ot && (at && (ot = 1 - ot), i.clearDepth(ot), lt = ot);
    }, reset: function() {
      P = false, H = null, q = null, lt = null, at = false;
    } };
  }
  function s() {
    let P = false, at = null, H = null, q = null, lt = null, ot = null, Lt = null, re = null, ve = null;
    return { setTest: function(Kt) {
      P || (Kt ? st(i.STENCIL_TEST) : St(i.STENCIL_TEST));
    }, setMask: function(Kt) {
      at !== Kt && !P && (i.stencilMask(Kt), at = Kt);
    }, setFunc: function(Kt, He, nn) {
      (H !== Kt || q !== He || lt !== nn) && (i.stencilFunc(Kt, He, nn), H = Kt, q = He, lt = nn);
    }, setOp: function(Kt, He, nn) {
      (ot !== Kt || Lt !== He || re !== nn) && (i.stencilOp(Kt, He, nn), ot = Kt, Lt = He, re = nn);
    }, setLocked: function(Kt) {
      P = Kt;
    }, setClear: function(Kt) {
      ve !== Kt && (i.clearStencil(Kt), ve = Kt);
    }, reset: function() {
      P = false, at = null, H = null, q = null, lt = null, ot = null, Lt = null, re = null, ve = null;
    } };
  }
  const r = new e(), a = new n(), o = new s(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, T = null, b = null, S = null, I = null, R = null, w = new Pt(0, 0, 0), N = 0, y = false, M = null, C = null, G = null, z = null, $ = null;
  const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = false, Z = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(k)[1]), Y = Z >= 1) : k.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(k)[1]), Y = Z >= 2);
  let it = null, ht = {};
  const _t = i.getParameter(i.SCISSOR_BOX), Nt = i.getParameter(i.VIEWPORT), Qt = new oe().fromArray(_t), W = new oe().fromArray(Nt);
  function tt(P, at, H, q) {
    const lt = new Uint8Array(4), ot = i.createTexture();
    i.bindTexture(P, ot), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Lt = 0; Lt < H; Lt++) P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(at, 0, i.RGBA, 1, 1, q, 0, i.RGBA, i.UNSIGNED_BYTE, lt) : i.texImage2D(at + Lt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, lt);
    return ot;
  }
  const pt = {};
  pt[i.TEXTURE_2D] = tt(i.TEXTURE_2D, i.TEXTURE_2D, 1), pt[i.TEXTURE_CUBE_MAP] = tt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), pt[i.TEXTURE_2D_ARRAY] = tt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), pt[i.TEXTURE_3D] = tt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), st(i.DEPTH_TEST), a.setFunc(pi), kt(false), zt(Wa), st(i.CULL_FACE), A(yn);
  function st(P) {
    h[P] !== true && (i.enable(P), h[P] = true);
  }
  function St(P) {
    h[P] !== false && (i.disable(P), h[P] = false);
  }
  function qt(P, at) {
    return u[P] !== at ? (i.bindFramebuffer(P, at), u[P] = at, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = at), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = at), true) : false;
  }
  function At(P, at) {
    let H = m, q = false;
    if (P) {
      H = f.get(at), H === void 0 && (H = [], f.set(at, H));
      const lt = P.textures;
      if (H.length !== lt.length || H[0] !== i.COLOR_ATTACHMENT0) {
        for (let ot = 0, Lt = lt.length; ot < Lt; ot++) H[ot] = i.COLOR_ATTACHMENT0 + ot;
        H.length = lt.length, q = true;
      }
    } else H[0] !== i.BACK && (H[0] = i.BACK, q = true);
    q && i.drawBuffers(H);
  }
  function le(P) {
    return g !== P ? (i.useProgram(P), g = P, true) : false;
  }
  const se = { [Bn]: i.FUNC_ADD, [$l]: i.FUNC_SUBTRACT, [jl]: i.FUNC_REVERSE_SUBTRACT };
  se[Kl] = i.MIN, se[Zl] = i.MAX;
  const Bt = { [Jl]: i.ZERO, [Ql]: i.ONE, [tc]: i.SRC_COLOR, [Tr]: i.SRC_ALPHA, [ac]: i.SRC_ALPHA_SATURATE, [sc]: i.DST_COLOR, [nc]: i.DST_ALPHA, [ec]: i.ONE_MINUS_SRC_COLOR, [Ar]: i.ONE_MINUS_SRC_ALPHA, [rc]: i.ONE_MINUS_DST_COLOR, [ic]: i.ONE_MINUS_DST_ALPHA, [oc]: i.CONSTANT_COLOR, [lc]: i.ONE_MINUS_CONSTANT_COLOR, [cc]: i.CONSTANT_ALPHA, [hc]: i.ONE_MINUS_CONSTANT_ALPHA };
  function A(P, at, H, q, lt, ot, Lt, re, ve, Kt) {
    if (P === yn) {
      v === true && (St(i.BLEND), v = false);
      return;
    }
    if (v === false && (st(i.BLEND), v = true), P !== ql) {
      if (P !== p || Kt !== y) {
        if ((d !== Bn || S !== Bn) && (i.blendEquation(i.FUNC_ADD), d = Bn, S = Bn), Kt) switch (P) {
          case di:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Xa:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case Ya:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case qa:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        else switch (P) {
          case di:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Xa:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case Ya:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case qa:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        T = null, b = null, I = null, R = null, w.set(0, 0, 0), N = 0, p = P, y = Kt;
      }
      return;
    }
    lt = lt || at, ot = ot || H, Lt = Lt || q, (at !== d || lt !== S) && (i.blendEquationSeparate(se[at], se[lt]), d = at, S = lt), (H !== T || q !== b || ot !== I || Lt !== R) && (i.blendFuncSeparate(Bt[H], Bt[q], Bt[ot], Bt[Lt]), T = H, b = q, I = ot, R = Lt), (re.equals(w) === false || ve !== N) && (i.blendColor(re.r, re.g, re.b, ve), w.copy(re), N = ve), p = P, y = false;
  }
  function Ue(P, at) {
    P.side === un ? St(i.CULL_FACE) : st(i.CULL_FACE);
    let H = P.side === we;
    at && (H = !H), kt(H), P.blending === di && P.transparent === false ? A(yn) : A(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), r.setMask(P.colorWrite);
    const q = P.stencilWrite;
    o.setTest(q), q && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), ee(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === true ? st(i.SAMPLE_ALPHA_TO_COVERAGE) : St(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function kt(P) {
    M !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = P);
  }
  function zt(P) {
    P !== Wl ? (st(i.CULL_FACE), P !== C && (P === Wa ? i.cullFace(i.BACK) : P === Xl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : St(i.CULL_FACE), C = P;
  }
  function vt(P) {
    P !== G && (Y && i.lineWidth(P), G = P);
  }
  function ee(P, at, H) {
    P ? (st(i.POLYGON_OFFSET_FILL), (z !== at || $ !== H) && (i.polygonOffset(at, H), z = at, $ = H)) : St(i.POLYGON_OFFSET_FILL);
  }
  function gt(P) {
    P ? st(i.SCISSOR_TEST) : St(i.SCISSOR_TEST);
  }
  function E(P) {
    P === void 0 && (P = i.TEXTURE0 + j - 1), it !== P && (i.activeTexture(P), it = P);
  }
  function _(P, at, H) {
    H === void 0 && (it === null ? H = i.TEXTURE0 + j - 1 : H = it);
    let q = ht[H];
    q === void 0 && (q = { type: void 0, texture: void 0 }, ht[H] = q), (q.type !== P || q.texture !== at) && (it !== H && (i.activeTexture(H), it = H), i.bindTexture(P, at || pt[P]), q.type = P, q.texture = at);
  }
  function F() {
    const P = ht[it];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function X() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function K() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function V() {
    try {
      i.texSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function mt() {
    try {
      i.texSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function rt() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Et() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function yt() {
    try {
      i.texStorage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function J() {
    try {
      i.texStorage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ut() {
    try {
      i.texImage2D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function bt() {
    try {
      i.texImage3D(...arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Rt(P) {
    Qt.equals(P) === false && (i.scissor(P.x, P.y, P.z, P.w), Qt.copy(P));
  }
  function dt(P) {
    W.equals(P) === false && (i.viewport(P.x, P.y, P.z, P.w), W.copy(P));
  }
  function Ht(P, at) {
    let H = c.get(at);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), c.set(at, H));
    let q = H.get(P);
    q === void 0 && (q = i.getUniformBlockIndex(at, P.name), H.set(P, q));
  }
  function Ut(P, at) {
    const q = c.get(at).get(P);
    l.get(at) !== q && (i.uniformBlockBinding(at, q, P.__bindingPointIndex), l.set(at, q));
  }
  function te() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, it = null, ht = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, T = null, b = null, S = null, I = null, R = null, w = new Pt(0, 0, 0), N = 0, y = false, M = null, C = null, G = null, z = null, $ = null, Qt.set(0, 0, i.canvas.width, i.canvas.height), W.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: st, disable: St, bindFramebuffer: qt, drawBuffers: At, useProgram: le, setBlending: A, setMaterial: Ue, setFlipSided: kt, setCullFace: zt, setLineWidth: vt, setPolygonOffset: ee, setScissorTest: gt, activeTexture: E, bindTexture: _, unbindTexture: F, compressedTexImage2D: X, compressedTexImage3D: K, texImage2D: ut, texImage3D: bt, updateUBOMapping: Ht, uniformBlockBinding: Ut, texStorage2D: yt, texStorage3D: J, texSubImage2D: V, texSubImage3D: mt, compressedTexSubImage2D: rt, compressedTexSubImage3D: Et, scissor: Rt, viewport: dt, reset: te };
}
function Zp(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Tt(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return m ? new OffscreenCanvas(E, _) : zi("canvas");
  }
  function v(E, _, F) {
    let X = 1;
    const K = gt(E);
    if ((K.width > F || K.height > F) && (X = F / Math.max(K.width, K.height)), X < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const V = Math.floor(X * K.width), mt = Math.floor(X * K.height);
      u === void 0 && (u = g(V, mt));
      const rt = _ ? g(V, mt) : u;
      return rt.width = V, rt.height = mt, rt.getContext("2d").drawImage(E, 0, 0, V, mt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + V + "x" + mt + ")."), rt;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + K.width + "x" + K.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function d(E) {
    i.generateMipmap(E);
  }
  function T(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function b(E, _, F, X, K = false) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let V = _;
    if (_ === i.RED && (F === i.FLOAT && (V = i.R32F), F === i.HALF_FLOAT && (V = i.R16F), F === i.UNSIGNED_BYTE && (V = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.R8UI), F === i.UNSIGNED_SHORT && (V = i.R16UI), F === i.UNSIGNED_INT && (V = i.R32UI), F === i.BYTE && (V = i.R8I), F === i.SHORT && (V = i.R16I), F === i.INT && (V = i.R32I)), _ === i.RG && (F === i.FLOAT && (V = i.RG32F), F === i.HALF_FLOAT && (V = i.RG16F), F === i.UNSIGNED_BYTE && (V = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RG8UI), F === i.UNSIGNED_SHORT && (V = i.RG16UI), F === i.UNSIGNED_INT && (V = i.RG32UI), F === i.BYTE && (V = i.RG8I), F === i.SHORT && (V = i.RG16I), F === i.INT && (V = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGB8UI), F === i.UNSIGNED_SHORT && (V = i.RGB16UI), F === i.UNSIGNED_INT && (V = i.RGB32UI), F === i.BYTE && (V = i.RGB8I), F === i.SHORT && (V = i.RGB16I), F === i.INT && (V = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGBA8UI), F === i.UNSIGNED_SHORT && (V = i.RGBA16UI), F === i.UNSIGNED_INT && (V = i.RGBA32UI), F === i.BYTE && (V = i.RGBA8I), F === i.SHORT && (V = i.RGBA16I), F === i.INT && (V = i.RGBA32I)), _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5), _ === i.RGBA) {
      const mt = K ? Ls : Yt.getTransfer(X);
      F === i.FLOAT && (V = i.RGBA32F), F === i.HALF_FLOAT && (V = i.RGBA16F), F === i.UNSIGNED_BYTE && (V = mt === Zt ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1);
    }
    return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && t.get("EXT_color_buffer_float"), V;
  }
  function S(E, _) {
    let F;
    return E ? _ === null || _ === Gn || _ === Fi ? F = i.DEPTH24_STENCIL8 : _ === dn ? F = i.DEPTH32F_STENCIL8 : _ === Ni && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Gn || _ === Fi ? F = i.DEPTH_COMPONENT24 : _ === dn ? F = i.DEPTH_COMPONENT32F : _ === Ni && (F = i.DEPTH_COMPONENT16), F;
  }
  function I(E, _) {
    return p(E) === true || E.isFramebufferTexture && E.minFilter !== $e && E.minFilter !== Ze ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
  }
  function R(E) {
    const _ = E.target;
    _.removeEventListener("dispose", R), N(_), _.isVideoTexture && h.delete(_);
  }
  function w(E) {
    const _ = E.target;
    _.removeEventListener("dispose", w), M(_);
  }
  function N(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const F = E.source, X = f.get(F);
    if (X) {
      const K = X[_.__cacheKey];
      K.usedTimes--, K.usedTimes === 0 && y(E), Object.keys(X).length === 0 && f.delete(F);
    }
    n.remove(E);
  }
  function y(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const F = E.source, X = f.get(F);
    delete X[_.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const _ = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(_.__webglFramebuffer[X])) for (let K = 0; K < _.__webglFramebuffer[X].length; K++) i.deleteFramebuffer(_.__webglFramebuffer[X][K]);
      else i.deleteFramebuffer(_.__webglFramebuffer[X]);
      _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(_.__webglFramebuffer)) for (let X = 0; X < _.__webglFramebuffer.length; X++) i.deleteFramebuffer(_.__webglFramebuffer[X]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer), _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer), _.__webglColorRenderbuffer) for (let X = 0; X < _.__webglColorRenderbuffer.length; X++) _.__webglColorRenderbuffer[X] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let X = 0, K = F.length; X < K; X++) {
      const V = n.get(F[X]);
      V.__webglTexture && (i.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(F[X]);
    }
    n.remove(E);
  }
  let C = 0;
  function G() {
    C = 0;
  }
  function z() {
    const E = C;
    return E >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + s.maxTextures), C += 1, E;
  }
  function $(E) {
    const _ = [];
    return _.push(E.wrapS), _.push(E.wrapT), _.push(E.wrapR || 0), _.push(E.magFilter), _.push(E.minFilter), _.push(E.anisotropy), _.push(E.internalFormat), _.push(E.format), _.push(E.type), _.push(E.generateMipmaps), _.push(E.premultiplyAlpha), _.push(E.flipY), _.push(E.unpackAlignment), _.push(E.colorSpace), _.join();
  }
  function j(E, _) {
    const F = n.get(E);
    if (E.isVideoTexture && vt(E), E.isRenderTargetTexture === false && E.version > 0 && F.__version !== E.version) {
      const X = E.image;
      if (X === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        W(F, E, _);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function Y(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      W(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _);
  }
  function Z(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      W(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _);
  }
  function k(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      tt(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const it = { [Fr]: i.REPEAT, [Hn]: i.CLAMP_TO_EDGE, [Or]: i.MIRRORED_REPEAT }, ht = { [$e]: i.NEAREST, [Mc]: i.NEAREST_MIPMAP_NEAREST, [Ki]: i.NEAREST_MIPMAP_LINEAR, [Ze]: i.LINEAR, [Gs]: i.LINEAR_MIPMAP_NEAREST, [kn]: i.LINEAR_MIPMAP_LINEAR }, _t = { [bc]: i.NEVER, [Pc]: i.ALWAYS, [Tc]: i.LESS, [dl]: i.LEQUAL, [Ac]: i.EQUAL, [Cc]: i.GEQUAL, [wc]: i.GREATER, [Rc]: i.NOTEQUAL };
  function Nt(E, _) {
    if (_.type === dn && t.has("OES_texture_float_linear") === false && (_.magFilter === Ze || _.magFilter === Gs || _.magFilter === Ki || _.magFilter === kn || _.minFilter === Ze || _.minFilter === Gs || _.minFilter === Ki || _.minFilter === kn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, it[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, it[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, it[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ht[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ht[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, _t[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === $e || _.minFilter !== Ki && _.minFilter !== kn || _.type === dn && t.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Qt(E, _) {
    let F = false;
    E.__webglInit === void 0 && (E.__webglInit = true, _.addEventListener("dispose", R));
    const X = _.source;
    let K = f.get(X);
    K === void 0 && (K = {}, f.set(X, K));
    const V = $(_);
    if (V !== E.__cacheKey) {
      K[V] === void 0 && (K[V] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), K[V].usedTimes++;
      const mt = K[E.__cacheKey];
      mt !== void 0 && (K[E.__cacheKey].usedTimes--, mt.usedTimes === 0 && y(_)), E.__cacheKey = V, E.__webglTexture = K[V].texture;
    }
    return F;
  }
  function W(E, _, F) {
    let X = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (X = i.TEXTURE_3D);
    const K = Qt(E, _), V = _.source;
    e.bindTexture(X, E.__webglTexture, i.TEXTURE0 + F);
    const mt = n.get(V);
    if (V.version !== mt.__version || K === true) {
      e.activeTexture(i.TEXTURE0 + F);
      const rt = Yt.getPrimaries(Yt.workingColorSpace), Et = _.colorSpace === En ? null : Yt.getPrimaries(_.colorSpace), yt = _.colorSpace === En || rt === Et ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, yt);
      let J = v(_.image, false, s.maxTextureSize);
      J = ee(_, J);
      const ut = r.convert(_.format, _.colorSpace), bt = r.convert(_.type);
      let Rt = b(_.internalFormat, ut, bt, _.colorSpace, _.isVideoTexture);
      Nt(X, _);
      let dt;
      const Ht = _.mipmaps, Ut = _.isVideoTexture !== true, te = mt.__version === void 0 || K === true, P = V.dataReady, at = I(_, J);
      if (_.isDepthTexture) Rt = S(_.format === Bi, _.type), te && (Ut ? e.texStorage2D(i.TEXTURE_2D, 1, Rt, J.width, J.height) : e.texImage2D(i.TEXTURE_2D, 0, Rt, J.width, J.height, 0, ut, bt, null));
      else if (_.isDataTexture) if (Ht.length > 0) {
        Ut && te && e.texStorage2D(i.TEXTURE_2D, at, Rt, Ht[0].width, Ht[0].height);
        for (let H = 0, q = Ht.length; H < q; H++) dt = Ht[H], Ut ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, bt, dt.data) : e.texImage2D(i.TEXTURE_2D, H, Rt, dt.width, dt.height, 0, ut, bt, dt.data);
        _.generateMipmaps = false;
      } else Ut ? (te && e.texStorage2D(i.TEXTURE_2D, at, Rt, J.width, J.height), P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, J.width, J.height, ut, bt, J.data)) : e.texImage2D(i.TEXTURE_2D, 0, Rt, J.width, J.height, 0, ut, bt, J.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        Ut && te && e.texStorage3D(i.TEXTURE_2D_ARRAY, at, Rt, Ht[0].width, Ht[0].height, J.depth);
        for (let H = 0, q = Ht.length; H < q; H++) if (dt = Ht[H], _.format !== Ye) if (ut !== null) if (Ut) {
          if (P) if (_.layerUpdates.size > 0) {
            const lt = bo(dt.width, dt.height, _.format, _.type);
            for (const ot of _.layerUpdates) {
              const Lt = dt.data.subarray(ot * lt / dt.data.BYTES_PER_ELEMENT, (ot + 1) * lt / dt.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, ot, dt.width, dt.height, 1, ut, Lt);
            }
            _.clearLayerUpdates();
          } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ut, dt.data);
        } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, H, Rt, dt.width, dt.height, J.depth, 0, dt.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ut ? P && e.texSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ut, bt, dt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, H, Rt, dt.width, dt.height, J.depth, 0, ut, bt, dt.data);
      } else {
        Ut && te && e.texStorage2D(i.TEXTURE_2D, at, Rt, Ht[0].width, Ht[0].height);
        for (let H = 0, q = Ht.length; H < q; H++) dt = Ht[H], _.format !== Ye ? ut !== null ? Ut ? P && e.compressedTexSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, dt.data) : e.compressedTexImage2D(i.TEXTURE_2D, H, Rt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ut ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, bt, dt.data) : e.texImage2D(i.TEXTURE_2D, H, Rt, dt.width, dt.height, 0, ut, bt, dt.data);
      }
      else if (_.isDataArrayTexture) if (Ut) {
        if (te && e.texStorage3D(i.TEXTURE_2D_ARRAY, at, Rt, J.width, J.height, J.depth), P) if (_.layerUpdates.size > 0) {
          const H = bo(J.width, J.height, _.format, _.type);
          for (const q of _.layerUpdates) {
            const lt = J.data.subarray(q * H / J.data.BYTES_PER_ELEMENT, (q + 1) * H / J.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, J.width, J.height, 1, ut, bt, lt);
          }
          _.clearLayerUpdates();
        } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, ut, bt, J.data);
      } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Rt, J.width, J.height, J.depth, 0, ut, bt, J.data);
      else if (_.isData3DTexture) Ut ? (te && e.texStorage3D(i.TEXTURE_3D, at, Rt, J.width, J.height, J.depth), P && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, ut, bt, J.data)) : e.texImage3D(i.TEXTURE_3D, 0, Rt, J.width, J.height, J.depth, 0, ut, bt, J.data);
      else if (_.isFramebufferTexture) {
        if (te) if (Ut) e.texStorage2D(i.TEXTURE_2D, at, Rt, J.width, J.height);
        else {
          let H = J.width, q = J.height;
          for (let lt = 0; lt < at; lt++) e.texImage2D(i.TEXTURE_2D, lt, Rt, H, q, 0, ut, bt, null), H >>= 1, q >>= 1;
        }
      } else if (Ht.length > 0) {
        if (Ut && te) {
          const H = gt(Ht[0]);
          e.texStorage2D(i.TEXTURE_2D, at, Rt, H.width, H.height);
        }
        for (let H = 0, q = Ht.length; H < q; H++) dt = Ht[H], Ut ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, ut, bt, dt) : e.texImage2D(i.TEXTURE_2D, H, Rt, ut, bt, dt);
        _.generateMipmaps = false;
      } else if (Ut) {
        if (te) {
          const H = gt(J);
          e.texStorage2D(i.TEXTURE_2D, at, Rt, H.width, H.height);
        }
        P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ut, bt, J);
      } else e.texImage2D(i.TEXTURE_2D, 0, Rt, ut, bt, J);
      p(_) && d(X), mt.__version = V.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function tt(E, _, F) {
    if (_.image.length !== 6) return;
    const X = Qt(E, _), K = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const V = n.get(K);
    if (K.version !== V.__version || X === true) {
      e.activeTexture(i.TEXTURE0 + F);
      const mt = Yt.getPrimaries(Yt.workingColorSpace), rt = _.colorSpace === En ? null : Yt.getPrimaries(_.colorSpace), Et = _.colorSpace === En || mt === rt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Et);
      const yt = _.isCompressedTexture || _.image[0].isCompressedTexture, J = _.image[0] && _.image[0].isDataTexture, ut = [];
      for (let q = 0; q < 6; q++) !yt && !J ? ut[q] = v(_.image[q], true, s.maxCubemapSize) : ut[q] = J ? _.image[q].image : _.image[q], ut[q] = ee(_, ut[q]);
      const bt = ut[0], Rt = r.convert(_.format, _.colorSpace), dt = r.convert(_.type), Ht = b(_.internalFormat, Rt, dt, _.colorSpace), Ut = _.isVideoTexture !== true, te = V.__version === void 0 || X === true, P = K.dataReady;
      let at = I(_, bt);
      Nt(i.TEXTURE_CUBE_MAP, _);
      let H;
      if (yt) {
        Ut && te && e.texStorage2D(i.TEXTURE_CUBE_MAP, at, Ht, bt.width, bt.height);
        for (let q = 0; q < 6; q++) {
          H = ut[q].mipmaps;
          for (let lt = 0; lt < H.length; lt++) {
            const ot = H[lt];
            _.format !== Ye ? Rt !== null ? Ut ? P && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, 0, 0, ot.width, ot.height, Rt, ot.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, Ht, ot.width, ot.height, 0, ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ut ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, 0, 0, ot.width, ot.height, Rt, dt, ot.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, Ht, ot.width, ot.height, 0, Rt, dt, ot.data);
          }
        }
      } else {
        if (H = _.mipmaps, Ut && te) {
          H.length > 0 && at++;
          const q = gt(ut[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, at, Ht, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if (J) {
          Ut ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, ut[q].width, ut[q].height, Rt, dt, ut[q].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ht, ut[q].width, ut[q].height, 0, Rt, dt, ut[q].data);
          for (let lt = 0; lt < H.length; lt++) {
            const Lt = H[lt].image[q].image;
            Ut ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, 0, 0, Lt.width, Lt.height, Rt, dt, Lt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, Ht, Lt.width, Lt.height, 0, Rt, dt, Lt.data);
          }
        } else {
          Ut ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, Rt, dt, ut[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Ht, Rt, dt, ut[q]);
          for (let lt = 0; lt < H.length; lt++) {
            const ot = H[lt];
            Ut ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, 0, 0, Rt, dt, ot.image[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, Ht, Rt, dt, ot.image[q]);
          }
        }
      }
      p(_) && d(i.TEXTURE_CUBE_MAP), V.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function pt(E, _, F, X, K, V) {
    const mt = r.convert(F.format, F.colorSpace), rt = r.convert(F.type), Et = b(F.internalFormat, mt, rt, F.colorSpace), yt = n.get(_), J = n.get(F);
    if (J.__renderTarget = _, !yt.__hasExternalTextures) {
      const ut = Math.max(1, _.width >> V), bt = Math.max(1, _.height >> V);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? e.texImage3D(K, V, Et, ut, bt, _.depth, 0, mt, rt, null) : e.texImage2D(K, V, Et, ut, bt, 0, mt, rt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), zt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, K, J.__webglTexture, 0, kt(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, K, J.__webglTexture, V), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function st(E, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const X = _.depthTexture, K = X && X.isDepthTexture ? X.type : null, V = S(_.stencilBuffer, K), mt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, rt = kt(_);
      zt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, rt, V, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, rt, V, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, V, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, mt, i.RENDERBUFFER, E);
    } else {
      const X = _.textures;
      for (let K = 0; K < X.length; K++) {
        const V = X[K], mt = r.convert(V.format, V.colorSpace), rt = r.convert(V.type), Et = b(V.internalFormat, mt, rt, V.colorSpace), yt = kt(_);
        F && zt(_) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, yt, Et, _.width, _.height) : zt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, yt, Et, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Et, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function St(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = n.get(_.depthTexture);
    X.__renderTarget = _, (!X.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), j(_.depthTexture, 0);
    const K = X.__webglTexture, V = kt(_);
    if (_.depthTexture.format === Oi) zt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (_.depthTexture.format === Bi) zt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function qt(E) {
    const _ = n.get(E), F = E.isWebGLCubeRenderTarget === true;
    if (_.__boundDepthTexture !== E.depthTexture) {
      const X = E.depthTexture;
      if (_.__depthDisposeCallback && _.__depthDisposeCallback(), X) {
        const K = () => {
          delete _.__boundDepthTexture, delete _.__depthDisposeCallback, X.removeEventListener("dispose", K);
        };
        X.addEventListener("dispose", K), _.__depthDisposeCallback = K;
      }
      _.__boundDepthTexture = X;
    }
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      const X = E.texture.mipmaps;
      X && X.length > 0 ? St(_.__webglFramebuffer[0], E) : St(_.__webglFramebuffer, E);
    } else if (F) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[X]), _.__webglDepthbuffer[X] === void 0) _.__webglDepthbuffer[X] = i.createRenderbuffer(), st(_.__webglDepthbuffer[X], E, false);
      else {
        const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer[X];
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, V);
      }
    } else {
      const X = E.texture.mipmaps;
      if (X && X.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), st(_.__webglDepthbuffer, E, false);
      else {
        const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, V = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, V), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, V);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function At(E, _, F) {
    const X = n.get(E);
    _ !== void 0 && pt(X.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && qt(E);
  }
  function le(E) {
    const _ = E.texture, F = n.get(E), X = n.get(_);
    E.addEventListener("dispose", w);
    const K = E.textures, V = E.isWebGLCubeRenderTarget === true, mt = K.length > 1;
    if (mt || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()), X.__version = _.version, a.memory.textures++), V) {
      F.__webglFramebuffer = [];
      for (let rt = 0; rt < 6; rt++) if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer[rt] = [];
        for (let Et = 0; Et < _.mipmaps.length; Et++) F.__webglFramebuffer[rt][Et] = i.createFramebuffer();
      } else F.__webglFramebuffer[rt] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let rt = 0; rt < _.mipmaps.length; rt++) F.__webglFramebuffer[rt] = i.createFramebuffer();
      } else F.__webglFramebuffer = i.createFramebuffer();
      if (mt) for (let rt = 0, Et = K.length; rt < Et; rt++) {
        const yt = n.get(K[rt]);
        yt.__webglTexture === void 0 && (yt.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && zt(E) === false) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let rt = 0; rt < K.length; rt++) {
          const Et = K[rt];
          F.__webglColorRenderbuffer[rt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[rt]);
          const yt = r.convert(Et.format, Et.colorSpace), J = r.convert(Et.type), ut = b(Et.internalFormat, yt, J, Et.colorSpace, E.isXRRenderTarget === true), bt = kt(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, bt, ut, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + rt, i.RENDERBUFFER, F.__webglColorRenderbuffer[rt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), st(F.__webglDepthRenderbuffer, E, true)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (V) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture), Nt(i.TEXTURE_CUBE_MAP, _);
      for (let rt = 0; rt < 6; rt++) if (_.mipmaps && _.mipmaps.length > 0) for (let Et = 0; Et < _.mipmaps.length; Et++) pt(F.__webglFramebuffer[rt][Et], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + rt, Et);
      else pt(F.__webglFramebuffer[rt], E, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + rt, 0);
      p(_) && d(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (mt) {
      for (let rt = 0, Et = K.length; rt < Et; rt++) {
        const yt = K[rt], J = n.get(yt);
        e.bindTexture(i.TEXTURE_2D, J.__webglTexture), Nt(i.TEXTURE_2D, yt), pt(F.__webglFramebuffer, E, yt, i.COLOR_ATTACHMENT0 + rt, i.TEXTURE_2D, 0), p(yt) && d(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let rt = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (rt = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(rt, X.__webglTexture), Nt(rt, _), _.mipmaps && _.mipmaps.length > 0) for (let Et = 0; Et < _.mipmaps.length; Et++) pt(F.__webglFramebuffer[Et], E, _, i.COLOR_ATTACHMENT0, rt, Et);
      else pt(F.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, rt, 0);
      p(_) && d(rt), e.unbindTexture();
    }
    E.depthBuffer && qt(E);
  }
  function se(E) {
    const _ = E.textures;
    for (let F = 0, X = _.length; F < X; F++) {
      const K = _[F];
      if (p(K)) {
        const V = T(E), mt = n.get(K).__webglTexture;
        e.bindTexture(V, mt), d(V), e.unbindTexture();
      }
    }
  }
  const Bt = [], A = [];
  function Ue(E) {
    if (E.samples > 0) {
      if (zt(E) === false) {
        const _ = E.textures, F = E.width, X = E.height;
        let K = i.COLOR_BUFFER_BIT;
        const V = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, mt = n.get(E), rt = _.length > 1;
        if (rt) for (let yt = 0; yt < _.length; yt++) e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
        const Et = E.texture.mipmaps;
        Et && Et.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, mt.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, mt.__webglFramebuffer);
        for (let yt = 0; yt < _.length; yt++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (K |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (K |= i.STENCIL_BUFFER_BIT)), rt) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, mt.__webglColorRenderbuffer[yt]);
            const J = n.get(_[yt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, J, 0);
          }
          i.blitFramebuffer(0, 0, F, X, 0, 0, F, X, K, i.NEAREST), l === true && (Bt.length = 0, A.length = 0, Bt.push(i.COLOR_ATTACHMENT0 + yt), E.depthBuffer && E.resolveDepthBuffer === false && (Bt.push(V), A.push(V), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, A)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Bt));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), rt) for (let yt = 0; yt < _.length; yt++) {
          e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.RENDERBUFFER, mt.__webglColorRenderbuffer[yt]);
          const J = n.get(_[yt]).__webglTexture;
          e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.TEXTURE_2D, J, 0);
        }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function kt(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function zt(E) {
    const _ = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function vt(E) {
    const _ = a.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function ee(E, _) {
    const F = E.colorSpace, X = E.format, K = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || F !== _i && F !== En && (Yt.getTransfer(F) === Zt ? (X !== Ye || K !== tn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function gt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = G, this.setTexture2D = j, this.setTexture2DArray = Y, this.setTexture3D = Z, this.setTextureCube = k, this.rebindTextures = At, this.setupRenderTarget = le, this.updateRenderTargetMipmap = se, this.updateMultisampleRenderTarget = Ue, this.setupDepthRenderbuffer = qt, this.setupFrameBufferTexture = pt, this.useMultisampledRTT = zt;
}
function Jp(i, t) {
  function e(n, s = En) {
    let r;
    const a = Yt.getTransfer(s);
    if (n === tn) return i.UNSIGNED_BYTE;
    if (n === Sa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ea) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === al) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === sl) return i.BYTE;
    if (n === rl) return i.SHORT;
    if (n === Ni) return i.UNSIGNED_SHORT;
    if (n === Ma) return i.INT;
    if (n === Gn) return i.UNSIGNED_INT;
    if (n === dn) return i.FLOAT;
    if (n === Gi) return i.HALF_FLOAT;
    if (n === ol) return i.ALPHA;
    if (n === ll) return i.RGB;
    if (n === Ye) return i.RGBA;
    if (n === Oi) return i.DEPTH_COMPONENT;
    if (n === Bi) return i.DEPTH_STENCIL;
    if (n === cl) return i.RED;
    if (n === ya) return i.RED_INTEGER;
    if (n === hl) return i.RG;
    if (n === ba) return i.RG_INTEGER;
    if (n === Ta) return i.RGBA_INTEGER;
    if (n === ys || n === bs || n === Ts || n === As) if (a === Zt) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === ys) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === bs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Ts) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === As) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === ys) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === bs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Ts) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === As) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Br || n === zr || n === Hr || n === kr) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Br) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === zr) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Hr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === kr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Vr || n === Gr || n === Wr) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === Vr || n === Gr) return a === Zt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Wr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Xr || n === Yr || n === qr || n === $r || n === jr || n === Kr || n === Zr || n === Jr || n === Qr || n === ta || n === ea || n === na || n === ia || n === sa) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Xr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Yr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === qr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === $r) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === jr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Kr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Zr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Jr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Qr) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === ta) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === ea) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === na) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === ia) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === sa) return a === Zt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === ws || n === ra || n === aa) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === ws) return a === Zt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === ra) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === aa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === ul || n === oa || n === la || n === ca) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === ws) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === oa) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === la) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ca) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Fi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Qp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, tm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class em {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const s = new Se(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new An({ vertexShader: Qp, fragmentShader: tm, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new qe(new Bs(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class nm extends Yn {
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, f = null, m = null, g = null;
    const v = new em(), p = e.getContextAttributes();
    let d = null, T = null;
    const b = [], S = [], I = new Tt();
    let R = null;
    const w = new Be();
    w.viewport = new oe();
    const N = new Be();
    N.viewport = new oe();
    const y = [w, N], M = new Mh();
    let C = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new hr(), b[W] = tt), tt.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new hr(), b[W] = tt), tt.getGripSpace();
    }, this.getHand = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new hr(), b[W] = tt), tt.getHandSpace();
    };
    function z(W) {
      const tt = S.indexOf(W.inputSource);
      if (tt === -1) return;
      const pt = b[tt];
      pt !== void 0 && (pt.update(W.inputSource, W.frame, c || a), pt.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function $() {
      s.removeEventListener("select", z), s.removeEventListener("selectstart", z), s.removeEventListener("selectend", z), s.removeEventListener("squeeze", z), s.removeEventListener("squeezestart", z), s.removeEventListener("squeezeend", z), s.removeEventListener("end", $), s.removeEventListener("inputsourceschange", j);
      for (let W = 0; W < b.length; W++) {
        const tt = S[W];
        tt !== null && (S[W] = null, b[W].disconnect(tt));
      }
      C = null, G = null, v.reset(), t.setRenderTarget(d), m = null, f = null, u = null, s = null, T = null, Qt.stop(), n.isPresenting = false, t.setPixelRatio(R), t.setSize(I.width, I.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(W) {
      if (s = W, s !== null) {
        if (d = t.getRenderTarget(), s.addEventListener("select", z), s.addEventListener("selectstart", z), s.addEventListener("selectend", z), s.addEventListener("squeeze", z), s.addEventListener("squeezestart", z), s.addEventListener("squeezeend", z), s.addEventListener("end", $), s.addEventListener("inputsourceschange", j), p.xrCompatible !== true && await e.makeXRCompatible(), R = t.getPixelRatio(), t.getSize(I), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pt = null, st = null, St = null;
          p.depth && (St = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, pt = p.stencil ? Bi : Oi, st = p.stencil ? Fi : Gn);
          const qt = { colorFormat: e.RGBA8, depthFormat: St, scaleFactor: r };
          u = new XRWebGLBinding(s, e), f = u.createProjectionLayer(qt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, false), T = new Wn(f.textureWidth, f.textureHeight, { format: Ye, type: tn, depthTexture: new yl(f.textureWidth, f.textureHeight, st, void 0, void 0, void 0, void 0, void 0, void 0, pt), stencilBuffer: p.stencil, colorSpace: t.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const pt = { antialias: p.antialias, alpha: true, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(s, e, pt), s.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, false), T = new Wn(m.framebufferWidth, m.framebufferHeight, { format: Ye, type: tn, colorSpace: t.outputColorSpace, stencilBuffer: p.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        T.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Qt.setContext(s), Qt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v.getDepthTexture();
    };
    function j(W) {
      for (let tt = 0; tt < W.removed.length; tt++) {
        const pt = W.removed[tt], st = S.indexOf(pt);
        st >= 0 && (S[st] = null, b[st].disconnect(pt));
      }
      for (let tt = 0; tt < W.added.length; tt++) {
        const pt = W.added[tt];
        let st = S.indexOf(pt);
        if (st === -1) {
          for (let qt = 0; qt < b.length; qt++) if (qt >= S.length) {
            S.push(pt), st = qt;
            break;
          } else if (S[qt] === null) {
            S[qt] = pt, st = qt;
            break;
          }
          if (st === -1) break;
        }
        const St = b[st];
        St && St.connect(pt);
      }
    }
    const Y = new U(), Z = new U();
    function k(W, tt, pt) {
      Y.setFromMatrixPosition(tt.matrixWorld), Z.setFromMatrixPosition(pt.matrixWorld);
      const st = Y.distanceTo(Z), St = tt.projectionMatrix.elements, qt = pt.projectionMatrix.elements, At = St[14] / (St[10] - 1), le = St[14] / (St[10] + 1), se = (St[9] + 1) / St[5], Bt = (St[9] - 1) / St[5], A = (St[8] - 1) / St[0], Ue = (qt[8] + 1) / qt[0], kt = At * A, zt = At * Ue, vt = st / (-A + Ue), ee = vt * -A;
      if (tt.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(ee), W.translateZ(vt), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), St[10] === -1) W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);
      else {
        const gt = At + vt, E = le + vt, _ = kt - ee, F = zt + (st - ee), X = se * le / E * gt, K = Bt * le / E * gt;
        W.projectionMatrix.makePerspective(_, F, X, K, gt, E), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function it(W, tt) {
      tt === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(tt.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (s === null) return;
      let tt = W.near, pt = W.far;
      v.texture !== null && (v.depthNear > 0 && (tt = v.depthNear), v.depthFar > 0 && (pt = v.depthFar)), M.near = N.near = w.near = tt, M.far = N.far = w.far = pt, (C !== M.near || G !== M.far) && (s.updateRenderState({ depthNear: M.near, depthFar: M.far }), C = M.near, G = M.far), w.layers.mask = W.layers.mask | 2, N.layers.mask = W.layers.mask | 4, M.layers.mask = w.layers.mask | N.layers.mask;
      const st = W.parent, St = M.cameras;
      it(M, st);
      for (let qt = 0; qt < St.length; qt++) it(St[qt], st);
      St.length === 2 ? k(M, w, N) : M.projectionMatrix.copy(w.projectionMatrix), ht(W, M, st);
    };
    function ht(W, tt, pt) {
      pt === null ? W.matrix.copy(tt.matrixWorld) : (W.matrix.copy(pt.matrixWorld), W.matrix.invert(), W.matrix.multiply(tt.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = ha * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return l;
    }, this.setFoveation = function(W) {
      l = W, f !== null && (f.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(M);
    };
    let _t = null;
    function Nt(W, tt) {
      if (h = tt.getViewerPose(c || a), g = tt, h !== null) {
        const pt = h.views;
        m !== null && (t.setRenderTargetFramebuffer(T, m.framebuffer), t.setRenderTarget(T));
        let st = false;
        pt.length !== M.cameras.length && (M.cameras.length = 0, st = true);
        for (let At = 0; At < pt.length; At++) {
          const le = pt[At];
          let se = null;
          if (m !== null) se = m.getViewport(le);
          else {
            const A = u.getViewSubImage(f, le);
            se = A.viewport, At === 0 && (t.setRenderTargetTextures(T, A.colorTexture, A.depthStencilTexture), t.setRenderTarget(T));
          }
          let Bt = y[At];
          Bt === void 0 && (Bt = new Be(), Bt.layers.enable(At), Bt.viewport = new oe(), y[At] = Bt), Bt.matrix.fromArray(le.transform.matrix), Bt.matrix.decompose(Bt.position, Bt.quaternion, Bt.scale), Bt.projectionMatrix.fromArray(le.projectionMatrix), Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(), Bt.viewport.set(se.x, se.y, se.width, se.height), At === 0 && (M.matrix.copy(Bt.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), st === true && M.cameras.push(Bt);
        }
        const St = s.enabledFeatures;
        if (St && St.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && u) {
          const At = u.getDepthInformation(pt[0]);
          At && At.isValid && At.texture && v.init(t, At, s.renderState);
        }
      }
      for (let pt = 0; pt < b.length; pt++) {
        const st = S[pt], St = b[pt];
        st !== null && St !== void 0 && St.update(st, tt, c || a);
      }
      _t && _t(W, tt), tt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: tt }), g = null;
    }
    const Qt = new wl();
    Qt.setAnimationLoop(Nt), this.setAnimationLoop = function(W) {
      _t = W;
    }, this.dispose = function() {
    };
  }
}
const Fn = new je(), im = new ie();
function sm(i, t) {
  function e(p, d) {
    p.matrixAutoUpdate === true && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, Ml(i)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function s(p, d, T, b, S) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? r(p, d) : d.isMeshToonMaterial ? (r(p, d), u(p, d)) : d.isMeshPhongMaterial ? (r(p, d), h(p, d)) : d.isMeshStandardMaterial ? (r(p, d), f(p, d), d.isMeshPhysicalMaterial && m(p, d, S)) : d.isMeshMatcapMaterial ? (r(p, d), g(p, d)) : d.isMeshDepthMaterial ? r(p, d) : d.isMeshDistanceMaterial ? (r(p, d), v(p, d)) : d.isMeshNormalMaterial ? r(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? l(p, d, T, b) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = false);
  }
  function r(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, e(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, e(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === we && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, e(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === we && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, e(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, e(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, e(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const T = t.get(d), b = T.envMap, S = T.envMapRotation;
    b && (p.envMap.value = b, Fn.copy(S), Fn.x *= -1, Fn.y *= -1, Fn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (Fn.y *= -1, Fn.z *= -1), p.envMapRotation.value.setFromMatrix4(im.makeRotationFromEuler(Fn)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap && (p.lightMap.value = d.lightMap, p.lightMapIntensity.value = d.lightMapIntensity, e(d.lightMap, p.lightMapTransform)), d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, e(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, e(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function l(p, d, T, b) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * T, p.scale.value = b * 0.5, d.map && (p.map.value = d.map, e(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function c(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.rotation.value = d.rotation, d.map && (p.map.value = d.map, e(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function h(p, d) {
    p.specular.value.copy(d.specular), p.shininess.value = Math.max(d.shininess, 1e-4);
  }
  function u(p, d) {
    d.gradientMap && (p.gradientMap.value = d.gradientMap);
  }
  function f(p, d) {
    p.metalness.value = d.metalness, d.metalnessMap && (p.metalnessMap.value = d.metalnessMap, e(d.metalnessMap, p.metalnessMapTransform)), p.roughness.value = d.roughness, d.roughnessMap && (p.roughnessMap.value = d.roughnessMap, e(d.roughnessMap, p.roughnessMapTransform)), d.envMap && (p.envMapIntensity.value = d.envMapIntensity);
  }
  function m(p, d, T) {
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, e(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, e(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, e(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, e(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, e(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === we && p.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (p.dispersion.value = d.dispersion), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, e(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, e(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, e(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, e(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, e(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, e(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, e(d.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, d) {
    d.matcap && (p.matcap.value = d.matcap);
  }
  function v(p, d) {
    const T = t.get(d).light;
    p.referencePosition.value.setFromMatrixPosition(T.matrixWorld), p.nearDistance.value = T.shadow.camera.near, p.farDistance.value = T.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function rm(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(T, b) {
    const S = b.program;
    n.uniformBlockBinding(T, S);
  }
  function c(T, b) {
    let S = s[T.id];
    S === void 0 && (g(T), S = h(T), s[T.id] = S, T.addEventListener("dispose", p));
    const I = b.program;
    n.updateUBOMapping(T, I);
    const R = t.render.frame;
    r[T.id] !== R && (f(T), r[T.id] = R);
  }
  function h(T) {
    const b = u();
    T.__bindingPointIndex = b;
    const S = i.createBuffer(), I = T.__size, R = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, I, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, S), S;
  }
  function u() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const b = s[T.id], S = T.uniforms, I = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let R = 0, w = S.length; R < w; R++) {
      const N = Array.isArray(S[R]) ? S[R] : [S[R]];
      for (let y = 0, M = N.length; y < M; y++) {
        const C = N[y];
        if (m(C, R, y, I) === true) {
          const G = C.__offset, z = Array.isArray(C.value) ? C.value : [C.value];
          let $ = 0;
          for (let j = 0; j < z.length; j++) {
            const Y = z[j], Z = v(Y);
            typeof Y == "number" || typeof Y == "boolean" ? (C.__data[0] = Y, i.bufferSubData(i.UNIFORM_BUFFER, G + $, C.__data)) : Y.isMatrix3 ? (C.__data[0] = Y.elements[0], C.__data[1] = Y.elements[1], C.__data[2] = Y.elements[2], C.__data[3] = 0, C.__data[4] = Y.elements[3], C.__data[5] = Y.elements[4], C.__data[6] = Y.elements[5], C.__data[7] = 0, C.__data[8] = Y.elements[6], C.__data[9] = Y.elements[7], C.__data[10] = Y.elements[8], C.__data[11] = 0) : (Y.toArray(C.__data, $), $ += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, G, C.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(T, b, S, I) {
    const R = T.value, w = b + "_" + S;
    if (I[w] === void 0) return typeof R == "number" || typeof R == "boolean" ? I[w] = R : I[w] = R.clone(), true;
    {
      const N = I[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (N !== R) return I[w] = R, true;
      } else if (N.equals(R) === false) return N.copy(R), true;
    }
    return false;
  }
  function g(T) {
    const b = T.uniforms;
    let S = 0;
    const I = 16;
    for (let w = 0, N = b.length; w < N; w++) {
      const y = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let M = 0, C = y.length; M < C; M++) {
        const G = y[M], z = Array.isArray(G.value) ? G.value : [G.value];
        for (let $ = 0, j = z.length; $ < j; $++) {
          const Y = z[$], Z = v(Y), k = S % I, it = k % Z.boundary, ht = k + it;
          S += it, ht !== 0 && I - ht < Z.storage && (S += I - ht), G.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = S, S += Z.storage;
        }
      }
    }
    const R = S % I;
    return R > 0 && (S += I - R), T.__size = S, T.__cache = {}, this;
  }
  function v(T) {
    const b = { boundary: 0, storage: 0 };
    return typeof T == "number" || typeof T == "boolean" ? (b.boundary = 4, b.storage = 4) : T.isVector2 ? (b.boundary = 8, b.storage = 8) : T.isVector3 || T.isColor ? (b.boundary = 16, b.storage = 12) : T.isVector4 ? (b.boundary = 16, b.storage = 16) : T.isMatrix3 ? (b.boundary = 48, b.storage = 48) : T.isMatrix4 ? (b.boundary = 64, b.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T), b;
  }
  function p(T) {
    const b = T.target;
    b.removeEventListener("dispose", p);
    const S = a.indexOf(b.__bindingPointIndex);
    a.splice(S, 1), i.deleteBuffer(s[b.id]), delete s[b.id], delete r[b.id];
  }
  function d() {
    for (const T in s) i.deleteBuffer(s[T]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: d };
}
class am {
  constructor(t = {}) {
    const { canvas: e = Uc(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: f = false } = t;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let p = null, d = null;
    const T = [], b = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = bn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let I = false;
    this._outputColorSpace = De;
    let R = 0, w = 0, N = null, y = -1, M = null;
    const C = new oe(), G = new oe();
    let z = null;
    const $ = new Pt(0);
    let j = 0, Y = e.width, Z = e.height, k = 1, it = null, ht = null;
    const _t = new oe(0, 0, Y, Z), Nt = new oe(0, 0, Y, Z);
    let Qt = false;
    const W = new Ca();
    let tt = false, pt = false;
    const st = new ie(), St = new ie(), qt = new U(), At = new oe(), le = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let se = false;
    function Bt() {
      return N === null ? k : 1;
    }
    let A = n;
    function Ue(x, L) {
      return e.getContext(x, L);
    }
    try {
      const x = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${va}`), e.addEventListener("webglcontextlost", q, false), e.addEventListener("webglcontextrestored", lt, false), e.addEventListener("webglcontextcreationerror", ot, false), A === null) {
        const L = "webgl2";
        if (A = Ue(L, x), A === null) throw Ue(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let kt, zt, vt, ee, gt, E, _, F, X, K, V, mt, rt, Et, yt, J, ut, bt, Rt, dt, Ht, Ut, te, P;
    function at() {
      kt = new gf(A), kt.init(), Ut = new Jp(A, kt), zt = new cf(A, kt, t, Ut), vt = new Kp(A, kt), zt.reverseDepthBuffer && f && vt.buffers.depth.setReversed(true), ee = new xf(A), gt = new Op(), E = new Zp(A, kt, vt, gt, zt, Ut, ee), _ = new uf(S), F = new mf(S), X = new bh(A), te = new of(A, X), K = new _f(A, X, ee, te), V = new Sf(A, K, X, ee), Rt = new Mf(A, zt, E), J = new hf(gt), mt = new Fp(S, _, F, kt, zt, te, J), rt = new sm(S, gt), Et = new zp(), yt = new Xp(kt), bt = new af(S, _, F, vt, V, m, l), ut = new $p(S, V, zt), P = new rm(A, ee, zt, vt), dt = new lf(A, kt, ee), Ht = new vf(A, kt, ee), ee.programs = mt.programs, S.capabilities = zt, S.extensions = kt, S.properties = gt, S.renderLists = Et, S.shadowMap = ut, S.state = vt, S.info = ee;
    }
    at();
    const H = new nm(S, A);
    this.xr = H, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = kt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = kt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return k;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (k = x, this.setSize(Y, Z, false));
    }, this.getSize = function(x) {
      return x.set(Y, Z);
    }, this.setSize = function(x, L, O = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Y = x, Z = L, e.width = Math.floor(x * k), e.height = Math.floor(L * k), O === true && (e.style.width = x + "px", e.style.height = L + "px"), this.setViewport(0, 0, x, L);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Y * k, Z * k).floor();
    }, this.setDrawingBufferSize = function(x, L, O) {
      Y = x, Z = L, k = O, e.width = Math.floor(x * O), e.height = Math.floor(L * O), this.setViewport(0, 0, x, L);
    }, this.getCurrentViewport = function(x) {
      return x.copy(C);
    }, this.getViewport = function(x) {
      return x.copy(_t);
    }, this.setViewport = function(x, L, O, B) {
      x.isVector4 ? _t.set(x.x, x.y, x.z, x.w) : _t.set(x, L, O, B), vt.viewport(C.copy(_t).multiplyScalar(k).round());
    }, this.getScissor = function(x) {
      return x.copy(Nt);
    }, this.setScissor = function(x, L, O, B) {
      x.isVector4 ? Nt.set(x.x, x.y, x.z, x.w) : Nt.set(x, L, O, B), vt.scissor(G.copy(Nt).multiplyScalar(k).round());
    }, this.getScissorTest = function() {
      return Qt;
    }, this.setScissorTest = function(x) {
      vt.setScissorTest(Qt = x);
    }, this.setOpaqueSort = function(x) {
      it = x;
    }, this.setTransparentSort = function(x) {
      ht = x;
    }, this.getClearColor = function(x) {
      return x.copy(bt.getClearColor());
    }, this.setClearColor = function() {
      bt.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return bt.getClearAlpha();
    }, this.setClearAlpha = function() {
      bt.setClearAlpha(...arguments);
    }, this.clear = function(x = true, L = true, O = true) {
      let B = 0;
      if (x) {
        let D = false;
        if (N !== null) {
          const Q = N.texture.format;
          D = Q === Ta || Q === ba || Q === ya;
        }
        if (D) {
          const Q = N.texture.type, nt = Q === tn || Q === Gn || Q === Ni || Q === Fi || Q === Sa || Q === Ea, ct = bt.getClearColor(), ft = bt.getClearAlpha(), Ct = ct.r, wt = ct.g, xt = ct.b;
          nt ? (g[0] = Ct, g[1] = wt, g[2] = xt, g[3] = ft, A.clearBufferuiv(A.COLOR, 0, g)) : (v[0] = Ct, v[1] = wt, v[2] = xt, v[3] = ft, A.clearBufferiv(A.COLOR, 0, v));
        } else B |= A.COLOR_BUFFER_BIT;
      }
      L && (B |= A.DEPTH_BUFFER_BIT), O && (B |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", q, false), e.removeEventListener("webglcontextrestored", lt, false), e.removeEventListener("webglcontextcreationerror", ot, false), bt.dispose(), Et.dispose(), yt.dispose(), gt.dispose(), _.dispose(), F.dispose(), V.dispose(), te.dispose(), P.dispose(), mt.dispose(), H.dispose(), H.removeEventListener("sessionstart", Oa), H.removeEventListener("sessionend", Ba), Cn.stop();
    };
    function q(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = true;
    }
    function lt() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = false;
      const x = ee.autoReset, L = ut.enabled, O = ut.autoUpdate, B = ut.needsUpdate, D = ut.type;
      at(), ee.autoReset = x, ut.enabled = L, ut.autoUpdate = O, ut.needsUpdate = B, ut.type = D;
    }
    function ot(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Lt(x) {
      const L = x.target;
      L.removeEventListener("dispose", Lt), re(L);
    }
    function re(x) {
      ve(x), gt.remove(x);
    }
    function ve(x) {
      const L = gt.get(x).programs;
      L !== void 0 && (L.forEach(function(O) {
        mt.releaseProgram(O);
      }), x.isShaderMaterial && mt.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, L, O, B, D, Q) {
      L === null && (L = le);
      const nt = D.isMesh && D.matrixWorld.determinant() < 0, ct = Bl(x, L, O, B, D);
      vt.setMaterial(B, nt);
      let ft = O.index, Ct = 1;
      if (B.wireframe === true) {
        if (ft = K.getWireframeAttribute(O), ft === void 0) return;
        Ct = 2;
      }
      const wt = O.drawRange, xt = O.attributes.position;
      let Vt = wt.start * Ct, $t = (wt.start + wt.count) * Ct;
      Q !== null && (Vt = Math.max(Vt, Q.start * Ct), $t = Math.min($t, (Q.start + Q.count) * Ct)), ft !== null ? (Vt = Math.max(Vt, 0), $t = Math.min($t, ft.count)) : xt != null && (Vt = Math.max(Vt, 0), $t = Math.min($t, xt.count));
      const ce = $t - Vt;
      if (ce < 0 || ce === 1 / 0) return;
      te.setup(D, B, ct, O, ft);
      let ae, Gt = dt;
      if (ft !== null && (ae = X.get(ft), Gt = Ht, Gt.setIndex(ae)), D.isMesh) B.wireframe === true ? (vt.setLineWidth(B.wireframeLinewidth * Bt()), Gt.setMode(A.LINES)) : Gt.setMode(A.TRIANGLES);
      else if (D.isLine) {
        let Mt = B.linewidth;
        Mt === void 0 && (Mt = 1), vt.setLineWidth(Mt * Bt()), D.isLineSegments ? Gt.setMode(A.LINES) : D.isLineLoop ? Gt.setMode(A.LINE_LOOP) : Gt.setMode(A.LINE_STRIP);
      } else D.isPoints ? Gt.setMode(A.POINTS) : D.isSprite && Gt.setMode(A.TRIANGLES);
      if (D.isBatchedMesh) if (D._multiDrawInstances !== null) Cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), Gt.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
      else if (kt.get("WEBGL_multi_draw")) Gt.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
      else {
        const Mt = D._multiDrawStarts, ge = D._multiDrawCounts, jt = D._multiDrawCount, ke = ft ? X.get(ft).bytesPerElement : 1, $n = gt.get(B).currentProgram.getUniforms();
        for (let Re = 0; Re < jt; Re++) $n.setValue(A, "_gl_DrawID", Re), Gt.render(Mt[Re] / ke, ge[Re]);
      }
      else if (D.isInstancedMesh) Gt.renderInstances(Vt, ce, D.count);
      else if (O.isInstancedBufferGeometry) {
        const Mt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, ge = Math.min(O.instanceCount, Mt);
        Gt.renderInstances(Vt, ce, ge);
      } else Gt.render(Vt, ce);
    };
    function Kt(x, L, O) {
      x.transparent === true && x.side === un && x.forceSinglePass === false ? (x.side = we, x.needsUpdate = true, ji(x, L, O), x.side = Tn, x.needsUpdate = true, ji(x, L, O), x.side = un) : ji(x, L, O);
    }
    this.compile = function(x, L, O = null) {
      O === null && (O = x), d = yt.get(O), d.init(L), b.push(d), O.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), x !== O && x.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), d.setupLights();
      const B = /* @__PURE__ */ new Set();
      return x.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
        const Q = D.material;
        if (Q) if (Array.isArray(Q)) for (let nt = 0; nt < Q.length; nt++) {
          const ct = Q[nt];
          Kt(ct, O, D), B.add(ct);
        }
        else Kt(Q, O, D), B.add(Q);
      }), d = b.pop(), B;
    }, this.compileAsync = function(x, L, O = null) {
      const B = this.compile(x, L, O);
      return new Promise((D) => {
        function Q() {
          if (B.forEach(function(nt) {
            gt.get(nt).currentProgram.isReady() && B.delete(nt);
          }), B.size === 0) {
            D(x);
            return;
          }
          setTimeout(Q, 10);
        }
        kt.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let He = null;
    function nn(x) {
      He && He(x);
    }
    function Oa() {
      Cn.stop();
    }
    function Ba() {
      Cn.start();
    }
    const Cn = new wl();
    Cn.setAnimationLoop(nn), typeof self < "u" && Cn.setContext(self), this.setAnimationLoop = function(x) {
      He = x, H.setAnimationLoop(x), x === null ? Cn.stop() : Cn.start();
    }, H.addEventListener("sessionstart", Oa), H.addEventListener("sessionend", Ba), this.render = function(x, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(L), L = H.getCamera()), x.isScene === true && x.onBeforeRender(S, x, L, N), d = yt.get(x, b.length), d.init(L), b.push(d), St.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), W.setFromProjectionMatrix(St), pt = this.localClippingEnabled, tt = J.init(this.clippingPlanes, pt), p = Et.get(x, T.length), p.init(), T.push(p), H.enabled === true && H.isPresenting === true) {
        const Q = S.xr.getDepthSensingMesh();
        Q !== null && ks(Q, L, -1 / 0, S.sortObjects);
      }
      ks(x, L, 0, S.sortObjects), p.finish(), S.sortObjects === true && p.sort(it, ht), se = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, se && bt.addToRenderList(p, x), this.info.render.frame++, tt === true && J.beginShadows();
      const O = d.state.shadowsArray;
      ut.render(O, x, L), tt === true && J.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = p.opaque, D = p.transmissive;
      if (d.setupLights(), L.isArrayCamera) {
        const Q = L.cameras;
        if (D.length > 0) for (let nt = 0, ct = Q.length; nt < ct; nt++) {
          const ft = Q[nt];
          Ha(B, D, x, ft);
        }
        se && bt.render(x);
        for (let nt = 0, ct = Q.length; nt < ct; nt++) {
          const ft = Q[nt];
          za(p, x, ft, ft.viewport);
        }
      } else D.length > 0 && Ha(B, D, x, L), se && bt.render(x), za(p, x, L);
      N !== null && w === 0 && (E.updateMultisampleRenderTarget(N), E.updateRenderTargetMipmap(N)), x.isScene === true && x.onAfterRender(S, x, L), te.resetDefaultState(), y = -1, M = null, b.pop(), b.length > 0 ? (d = b[b.length - 1], tt === true && J.setGlobalState(S.clippingPlanes, d.state.camera)) : d = null, T.pop(), T.length > 0 ? p = T[T.length - 1] : p = null;
    };
    function ks(x, L, O, B) {
      if (x.visible === false) return;
      if (x.layers.test(L.layers)) {
        if (x.isGroup) O = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(L);
        else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || W.intersectsSprite(x)) {
            B && At.setFromMatrixPosition(x.matrixWorld).applyMatrix4(St);
            const nt = V.update(x), ct = x.material;
            ct.visible && p.push(x, nt, ct, O, At.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || W.intersectsObject(x))) {
          const nt = V.update(x), ct = x.material;
          if (B && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), At.copy(x.boundingSphere.center)) : (nt.boundingSphere === null && nt.computeBoundingSphere(), At.copy(nt.boundingSphere.center)), At.applyMatrix4(x.matrixWorld).applyMatrix4(St)), Array.isArray(ct)) {
            const ft = nt.groups;
            for (let Ct = 0, wt = ft.length; Ct < wt; Ct++) {
              const xt = ft[Ct], Vt = ct[xt.materialIndex];
              Vt && Vt.visible && p.push(x, nt, Vt, O, At.z, xt);
            }
          } else ct.visible && p.push(x, nt, ct, O, At.z, null);
        }
      }
      const Q = x.children;
      for (let nt = 0, ct = Q.length; nt < ct; nt++) ks(Q[nt], L, O, B);
    }
    function za(x, L, O, B) {
      const D = x.opaque, Q = x.transmissive, nt = x.transparent;
      d.setupLightsView(O), tt === true && J.setGlobalState(S.clippingPlanes, O), B && vt.viewport(C.copy(B)), D.length > 0 && $i(D, L, O), Q.length > 0 && $i(Q, L, O), nt.length > 0 && $i(nt, L, O), vt.buffers.depth.setTest(true), vt.buffers.depth.setMask(true), vt.buffers.color.setMask(true), vt.setPolygonOffset(false);
    }
    function Ha(x, L, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[B.id] === void 0 && (d.state.transmissionRenderTarget[B.id] = new Wn(1, 1, { generateMipmaps: true, type: kt.has("EXT_color_buffer_half_float") || kt.has("EXT_color_buffer_float") ? Gi : tn, minFilter: kn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Yt.workingColorSpace }));
      const Q = d.state.transmissionRenderTarget[B.id], nt = B.viewport || C;
      Q.setSize(nt.z * S.transmissionResolutionScale, nt.w * S.transmissionResolutionScale);
      const ct = S.getRenderTarget();
      S.setRenderTarget(Q), S.getClearColor($), j = S.getClearAlpha(), j < 1 && S.setClearColor(16777215, 0.5), S.clear(), se && bt.render(O);
      const ft = S.toneMapping;
      S.toneMapping = bn;
      const Ct = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), d.setupLightsView(B), tt === true && J.setGlobalState(S.clippingPlanes, B), $i(x, O, B), E.updateMultisampleRenderTarget(Q), E.updateRenderTargetMipmap(Q), kt.has("WEBGL_multisampled_render_to_texture") === false) {
        let wt = false;
        for (let xt = 0, Vt = L.length; xt < Vt; xt++) {
          const $t = L[xt], ce = $t.object, ae = $t.geometry, Gt = $t.material, Mt = $t.group;
          if (Gt.side === un && ce.layers.test(B.layers)) {
            const ge = Gt.side;
            Gt.side = we, Gt.needsUpdate = true, ka(ce, O, B, ae, Gt, Mt), Gt.side = ge, Gt.needsUpdate = true, wt = true;
          }
        }
        wt === true && (E.updateMultisampleRenderTarget(Q), E.updateRenderTargetMipmap(Q));
      }
      S.setRenderTarget(ct), S.setClearColor($, j), Ct !== void 0 && (B.viewport = Ct), S.toneMapping = ft;
    }
    function $i(x, L, O) {
      const B = L.isScene === true ? L.overrideMaterial : null;
      for (let D = 0, Q = x.length; D < Q; D++) {
        const nt = x[D], ct = nt.object, ft = nt.geometry, Ct = nt.group;
        let wt = nt.material;
        wt.allowOverride === true && B !== null && (wt = B), ct.layers.test(O.layers) && ka(ct, L, O, ft, wt, Ct);
      }
    }
    function ka(x, L, O, B, D, Q) {
      x.onBeforeRender(S, L, O, B, D, Q), x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), D.onBeforeRender(S, L, O, B, x, Q), D.transparent === true && D.side === un && D.forceSinglePass === false ? (D.side = we, D.needsUpdate = true, S.renderBufferDirect(O, L, B, D, x, Q), D.side = Tn, D.needsUpdate = true, S.renderBufferDirect(O, L, B, D, x, Q), D.side = un) : S.renderBufferDirect(O, L, B, D, x, Q), x.onAfterRender(S, L, O, B, D, Q);
    }
    function ji(x, L, O) {
      L.isScene !== true && (L = le);
      const B = gt.get(x), D = d.state.lights, Q = d.state.shadowsArray, nt = D.state.version, ct = mt.getParameters(x, D.state, Q, L, O), ft = mt.getProgramCacheKey(ct);
      let Ct = B.programs;
      B.environment = x.isMeshStandardMaterial ? L.environment : null, B.fog = L.fog, B.envMap = (x.isMeshStandardMaterial ? F : _).get(x.envMap || B.environment), B.envMapRotation = B.environment !== null && x.envMap === null ? L.environmentRotation : x.envMapRotation, Ct === void 0 && (x.addEventListener("dispose", Lt), Ct = /* @__PURE__ */ new Map(), B.programs = Ct);
      let wt = Ct.get(ft);
      if (wt !== void 0) {
        if (B.currentProgram === wt && B.lightsStateVersion === nt) return Ga(x, ct), wt;
      } else ct.uniforms = mt.getUniforms(x), x.onBeforeCompile(ct, S), wt = mt.acquireProgram(ct, ft), Ct.set(ft, wt), B.uniforms = ct.uniforms;
      const xt = B.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (xt.clippingPlanes = J.uniform), Ga(x, ct), B.needsLights = Hl(x), B.lightsStateVersion = nt, B.needsLights && (xt.ambientLightColor.value = D.state.ambient, xt.lightProbe.value = D.state.probe, xt.directionalLights.value = D.state.directional, xt.directionalLightShadows.value = D.state.directionalShadow, xt.spotLights.value = D.state.spot, xt.spotLightShadows.value = D.state.spotShadow, xt.rectAreaLights.value = D.state.rectArea, xt.ltc_1.value = D.state.rectAreaLTC1, xt.ltc_2.value = D.state.rectAreaLTC2, xt.pointLights.value = D.state.point, xt.pointLightShadows.value = D.state.pointShadow, xt.hemisphereLights.value = D.state.hemi, xt.directionalShadowMap.value = D.state.directionalShadowMap, xt.directionalShadowMatrix.value = D.state.directionalShadowMatrix, xt.spotShadowMap.value = D.state.spotShadowMap, xt.spotLightMatrix.value = D.state.spotLightMatrix, xt.spotLightMap.value = D.state.spotLightMap, xt.pointShadowMap.value = D.state.pointShadowMap, xt.pointShadowMatrix.value = D.state.pointShadowMatrix), B.currentProgram = wt, B.uniformsList = null, wt;
    }
    function Va(x) {
      if (x.uniformsList === null) {
        const L = x.currentProgram.getUniforms();
        x.uniformsList = Ps.seqWithValue(L.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ga(x, L) {
      const O = gt.get(x);
      O.outputColorSpace = L.outputColorSpace, O.batching = L.batching, O.batchingColor = L.batchingColor, O.instancing = L.instancing, O.instancingColor = L.instancingColor, O.instancingMorph = L.instancingMorph, O.skinning = L.skinning, O.morphTargets = L.morphTargets, O.morphNormals = L.morphNormals, O.morphColors = L.morphColors, O.morphTargetsCount = L.morphTargetsCount, O.numClippingPlanes = L.numClippingPlanes, O.numIntersection = L.numClipIntersection, O.vertexAlphas = L.vertexAlphas, O.vertexTangents = L.vertexTangents, O.toneMapping = L.toneMapping;
    }
    function Bl(x, L, O, B, D) {
      L.isScene !== true && (L = le), E.resetTextureUnits();
      const Q = L.fog, nt = B.isMeshStandardMaterial ? L.environment : null, ct = N === null ? S.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : _i, ft = (B.isMeshStandardMaterial ? F : _).get(B.envMap || nt), Ct = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, wt = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), xt = !!O.morphAttributes.position, Vt = !!O.morphAttributes.normal, $t = !!O.morphAttributes.color;
      let ce = bn;
      B.toneMapped && (N === null || N.isXRRenderTarget === true) && (ce = S.toneMapping);
      const ae = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Gt = ae !== void 0 ? ae.length : 0, Mt = gt.get(B), ge = d.state.lights;
      if (tt === true && (pt === true || x !== M)) {
        const Ee = x === M && B.id === y;
        J.setState(B, x, Ee);
      }
      let jt = false;
      B.version === Mt.__version ? (Mt.needsLights && Mt.lightsStateVersion !== ge.state.version || Mt.outputColorSpace !== ct || D.isBatchedMesh && Mt.batching === false || !D.isBatchedMesh && Mt.batching === true || D.isBatchedMesh && Mt.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && Mt.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && Mt.instancing === false || !D.isInstancedMesh && Mt.instancing === true || D.isSkinnedMesh && Mt.skinning === false || !D.isSkinnedMesh && Mt.skinning === true || D.isInstancedMesh && Mt.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && Mt.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && Mt.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && Mt.instancingMorph === false && D.morphTexture !== null || Mt.envMap !== ft || B.fog === true && Mt.fog !== Q || Mt.numClippingPlanes !== void 0 && (Mt.numClippingPlanes !== J.numPlanes || Mt.numIntersection !== J.numIntersection) || Mt.vertexAlphas !== Ct || Mt.vertexTangents !== wt || Mt.morphTargets !== xt || Mt.morphNormals !== Vt || Mt.morphColors !== $t || Mt.toneMapping !== ce || Mt.morphTargetsCount !== Gt) && (jt = true) : (jt = true, Mt.__version = B.version);
      let ke = Mt.currentProgram;
      jt === true && (ke = ji(B, L, D));
      let $n = false, Re = false, Ei = false;
      const ne = ke.getUniforms(), Ie = Mt.uniforms;
      if (vt.useProgram(ke.program) && ($n = true, Re = true, Ei = true), B.id !== y && (y = B.id, Re = true), $n || M !== x) {
        vt.buffers.depth.getReversed() ? (st.copy(x.projectionMatrix), Nc(st), Fc(st), ne.setValue(A, "projectionMatrix", st)) : ne.setValue(A, "projectionMatrix", x.projectionMatrix), ne.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const be = ne.map.cameraPosition;
        be !== void 0 && be.setValue(A, qt.setFromMatrixPosition(x.matrixWorld)), zt.logarithmicDepthBuffer && ne.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && ne.setValue(A, "isOrthographic", x.isOrthographicCamera === true), M !== x && (M = x, Re = true, Ei = true);
      }
      if (D.isSkinnedMesh) {
        ne.setOptional(A, D, "bindMatrix"), ne.setOptional(A, D, "bindMatrixInverse");
        const Ee = D.skeleton;
        Ee && (Ee.boneTexture === null && Ee.computeBoneTexture(), ne.setValue(A, "boneTexture", Ee.boneTexture, E));
      }
      D.isBatchedMesh && (ne.setOptional(A, D, "batchingTexture"), ne.setValue(A, "batchingTexture", D._matricesTexture, E), ne.setOptional(A, D, "batchingIdTexture"), ne.setValue(A, "batchingIdTexture", D._indirectTexture, E), ne.setOptional(A, D, "batchingColorTexture"), D._colorsTexture !== null && ne.setValue(A, "batchingColorTexture", D._colorsTexture, E));
      const Ne = O.morphAttributes;
      if ((Ne.position !== void 0 || Ne.normal !== void 0 || Ne.color !== void 0) && Rt.update(D, O, ke), (Re || Mt.receiveShadow !== D.receiveShadow) && (Mt.receiveShadow = D.receiveShadow, ne.setValue(A, "receiveShadow", D.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Ie.envMap.value = ft, Ie.flipEnvMap.value = ft.isCubeTexture && ft.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && L.environment !== null && (Ie.envMapIntensity.value = L.environmentIntensity), Re && (ne.setValue(A, "toneMappingExposure", S.toneMappingExposure), Mt.needsLights && zl(Ie, Ei), Q && B.fog === true && rt.refreshFogUniforms(Ie, Q), rt.refreshMaterialUniforms(Ie, B, k, Z, d.state.transmissionRenderTarget[x.id]), Ps.upload(A, Va(Mt), Ie, E)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (Ps.upload(A, Va(Mt), Ie, E), B.uniformsNeedUpdate = false), B.isSpriteMaterial && ne.setValue(A, "center", D.center), ne.setValue(A, "modelViewMatrix", D.modelViewMatrix), ne.setValue(A, "normalMatrix", D.normalMatrix), ne.setValue(A, "modelMatrix", D.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Ee = B.uniformsGroups;
        for (let be = 0, Vs = Ee.length; be < Vs; be++) {
          const Pn = Ee[be];
          P.update(Pn, ke), P.bind(Pn, ke);
        }
      }
      return ke;
    }
    function zl(x, L) {
      x.ambientLightColor.needsUpdate = L, x.lightProbe.needsUpdate = L, x.directionalLights.needsUpdate = L, x.directionalLightShadows.needsUpdate = L, x.pointLights.needsUpdate = L, x.pointLightShadows.needsUpdate = L, x.spotLights.needsUpdate = L, x.spotLightShadows.needsUpdate = L, x.rectAreaLights.needsUpdate = L, x.hemisphereLights.needsUpdate = L;
    }
    function Hl(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, L, O) {
      const B = gt.get(x);
      B.__autoAllocateDepthBuffer = x.resolveDepthBuffer === false, B.__autoAllocateDepthBuffer === false && (B.__useRenderToTexture = false), gt.get(x.texture).__webglTexture = L, gt.get(x.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(x, L) {
      const O = gt.get(x);
      O.__webglFramebuffer = L, O.__useDefaultFramebuffer = L === void 0;
    };
    const kl = A.createFramebuffer();
    this.setRenderTarget = function(x, L = 0, O = 0) {
      N = x, R = L, w = O;
      let B = true, D = null, Q = false, nt = false;
      if (x) {
        const ft = gt.get(x);
        if (ft.__useDefaultFramebuffer !== void 0) vt.bindFramebuffer(A.FRAMEBUFFER, null), B = false;
        else if (ft.__webglFramebuffer === void 0) E.setupRenderTarget(x);
        else if (ft.__hasExternalTextures) E.rebindTextures(x, gt.get(x.texture).__webglTexture, gt.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const xt = x.depthTexture;
          if (ft.__boundDepthTexture !== xt) {
            if (xt !== null && gt.has(xt) && (x.width !== xt.image.width || x.height !== xt.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(x);
          }
        }
        const Ct = x.texture;
        (Ct.isData3DTexture || Ct.isDataArrayTexture || Ct.isCompressedArrayTexture) && (nt = true);
        const wt = gt.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(wt[L]) ? D = wt[L][O] : D = wt[L], Q = true) : x.samples > 0 && E.useMultisampledRTT(x) === false ? D = gt.get(x).__webglMultisampledFramebuffer : Array.isArray(wt) ? D = wt[O] : D = wt, C.copy(x.viewport), G.copy(x.scissor), z = x.scissorTest;
      } else C.copy(_t).multiplyScalar(k).floor(), G.copy(Nt).multiplyScalar(k).floor(), z = Qt;
      if (O !== 0 && (D = kl), vt.bindFramebuffer(A.FRAMEBUFFER, D) && B && vt.drawBuffers(x, D), vt.viewport(C), vt.scissor(G), vt.setScissorTest(z), Q) {
        const ft = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + L, ft.__webglTexture, O);
      } else if (nt) {
        const ft = gt.get(x.texture), Ct = L;
        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ft.__webglTexture, O, Ct);
      } else if (x !== null && O !== 0) {
        const ft = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ft.__webglTexture, O);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(x, L, O, B, D, Q, nt) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ct = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && nt !== void 0 && (ct = ct[nt]), ct) {
        vt.bindFramebuffer(A.FRAMEBUFFER, ct);
        try {
          const ft = x.texture, Ct = ft.format, wt = ft.type;
          if (!zt.textureFormatReadable(Ct)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!zt.textureTypeReadable(wt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= x.width - B && O >= 0 && O <= x.height - D && A.readPixels(L, O, B, D, Ut.convert(Ct), Ut.convert(wt), Q);
        } finally {
          const ft = N !== null ? gt.get(N).__webglFramebuffer : null;
          vt.bindFramebuffer(A.FRAMEBUFFER, ft);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, L, O, B, D, Q, nt) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ct = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && nt !== void 0 && (ct = ct[nt]), ct) if (L >= 0 && L <= x.width - B && O >= 0 && O <= x.height - D) {
        vt.bindFramebuffer(A.FRAMEBUFFER, ct);
        const ft = x.texture, Ct = ft.format, wt = ft.type;
        if (!zt.textureFormatReadable(Ct)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!zt.textureTypeReadable(wt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const xt = A.createBuffer();
        A.bindBuffer(A.PIXEL_PACK_BUFFER, xt), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), A.readPixels(L, O, B, D, Ut.convert(Ct), Ut.convert(wt), 0);
        const Vt = N !== null ? gt.get(N).__webglFramebuffer : null;
        vt.bindFramebuffer(A.FRAMEBUFFER, Vt);
        const $t = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return A.flush(), await Ic(A, $t, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, xt), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(xt), A.deleteSync($t), Q;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, L = null, O = 0) {
      const B = Math.pow(2, -O), D = Math.floor(x.image.width * B), Q = Math.floor(x.image.height * B), nt = L !== null ? L.x : 0, ct = L !== null ? L.y : 0;
      E.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, nt, ct, D, Q), vt.unbindTexture();
    };
    const Vl = A.createFramebuffer(), Gl = A.createFramebuffer();
    this.copyTextureToTexture = function(x, L, O = null, B = null, D = 0, Q = null) {
      Q === null && (D !== 0 ? (Cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = D, D = 0) : Q = 0);
      let nt, ct, ft, Ct, wt, xt, Vt, $t, ce;
      const ae = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (O !== null) nt = O.max.x - O.min.x, ct = O.max.y - O.min.y, ft = O.isBox3 ? O.max.z - O.min.z : 1, Ct = O.min.x, wt = O.min.y, xt = O.isBox3 ? O.min.z : 0;
      else {
        const Ne = Math.pow(2, -D);
        nt = Math.floor(ae.width * Ne), ct = Math.floor(ae.height * Ne), x.isDataArrayTexture ? ft = ae.depth : x.isData3DTexture ? ft = Math.floor(ae.depth * Ne) : ft = 1, Ct = 0, wt = 0, xt = 0;
      }
      B !== null ? (Vt = B.x, $t = B.y, ce = B.z) : (Vt = 0, $t = 0, ce = 0);
      const Gt = Ut.convert(L.format), Mt = Ut.convert(L.type);
      let ge;
      L.isData3DTexture ? (E.setTexture3D(L, 0), ge = A.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (E.setTexture2DArray(L, 0), ge = A.TEXTURE_2D_ARRAY) : (E.setTexture2D(L, 0), ge = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, L.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, L.unpackAlignment);
      const jt = A.getParameter(A.UNPACK_ROW_LENGTH), ke = A.getParameter(A.UNPACK_IMAGE_HEIGHT), $n = A.getParameter(A.UNPACK_SKIP_PIXELS), Re = A.getParameter(A.UNPACK_SKIP_ROWS), Ei = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, ae.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ae.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ct), A.pixelStorei(A.UNPACK_SKIP_ROWS, wt), A.pixelStorei(A.UNPACK_SKIP_IMAGES, xt);
      const ne = x.isDataArrayTexture || x.isData3DTexture, Ie = L.isDataArrayTexture || L.isData3DTexture;
      if (x.isDepthTexture) {
        const Ne = gt.get(x), Ee = gt.get(L), be = gt.get(Ne.__renderTarget), Vs = gt.get(Ee.__renderTarget);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, be.__webglFramebuffer), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, Vs.__webglFramebuffer);
        for (let Pn = 0; Pn < ft; Pn++) ne && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(x).__webglTexture, D, xt + Pn), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(L).__webglTexture, Q, ce + Pn)), A.blitFramebuffer(Ct, wt, nt, ct, Vt, $t, nt, ct, A.DEPTH_BUFFER_BIT, A.NEAREST);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, null), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (D !== 0 || x.isRenderTargetTexture || gt.has(x)) {
        const Ne = gt.get(x), Ee = gt.get(L);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, Vl), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, Gl);
        for (let be = 0; be < ft; be++) ne ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Ne.__webglTexture, D, xt + be) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Ne.__webglTexture, D), Ie ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Ee.__webglTexture, Q, ce + be) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Ee.__webglTexture, Q), D !== 0 ? A.blitFramebuffer(Ct, wt, nt, ct, Vt, $t, nt, ct, A.COLOR_BUFFER_BIT, A.NEAREST) : Ie ? A.copyTexSubImage3D(ge, Q, Vt, $t, ce + be, Ct, wt, nt, ct) : A.copyTexSubImage2D(ge, Q, Vt, $t, Ct, wt, nt, ct);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, null), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else Ie ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(ge, Q, Vt, $t, ce, nt, ct, ft, Gt, Mt, ae.data) : L.isCompressedArrayTexture ? A.compressedTexSubImage3D(ge, Q, Vt, $t, ce, nt, ct, ft, Gt, ae.data) : A.texSubImage3D(ge, Q, Vt, $t, ce, nt, ct, ft, Gt, Mt, ae) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, Vt, $t, nt, ct, Gt, Mt, ae.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, Vt, $t, ae.width, ae.height, Gt, ae.data) : A.texSubImage2D(A.TEXTURE_2D, Q, Vt, $t, nt, ct, Gt, Mt, ae);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, jt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ke), A.pixelStorei(A.UNPACK_SKIP_PIXELS, $n), A.pixelStorei(A.UNPACK_SKIP_ROWS, Re), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ei), Q === 0 && L.generateMipmaps && A.generateMipmap(ge), vt.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, L, O = null, B = null, D = 0) {
      return Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, L, O, B, D);
    }, this.initRenderTarget = function(x) {
      gt.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), vt.unbindTexture();
    }, this.resetState = function() {
      R = 0, w = 0, N = null, vt.reset(), te.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return fn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Yt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Yt._getUnpackColorSpace();
  }
}
const jo = { type: "change" }, Ua = { type: "start" }, Dl = { type: "end" }, Ss = new Os(), Ko = new Sn(), om = Math.cos(70 * Dc.DEG2RAD), ue = new U(), Ae = 2 * Math.PI, Jt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, Sr = 1e-6;
class lm extends Eh {
  constructor(t, e = null) {
    super(t, e), this.state = Jt.NONE, this.target = new U(), this.cursor = new U(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ui.ROTATE, MIDDLE: ui.DOLLY, RIGHT: ui.PAN }, this.touches = { ONE: ci.ROTATE, TWO: ci.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new U(), this._lastQuaternion = new Xn(), this._lastTargetPosition = new U(), this._quat = new Xn().setFromUnitVectors(t.up, new U(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new yo(), this._sphericalDelta = new yo(), this._scale = 1, this._panOffset = new U(), this._rotateStart = new Tt(), this._rotateEnd = new Tt(), this._rotateDelta = new Tt(), this._panStart = new Tt(), this._panEnd = new Tt(), this._panDelta = new Tt(), this._dollyStart = new Tt(), this._dollyEnd = new Tt(), this._dollyDelta = new Tt(), this._dollyDirection = new U(), this._mouse = new Tt(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = hm.bind(this), this._onPointerDown = cm.bind(this), this._onPointerUp = um.bind(this), this._onContextMenu = vm.bind(this), this._onMouseWheel = pm.bind(this), this._onKeyDown = mm.bind(this), this._onTouchStart = gm.bind(this), this._onTouchMove = _m.bind(this), this._onMouseDown = dm.bind(this), this._onMouseMove = fm.bind(this), this._interceptControlDown = xm.bind(this), this._interceptControlUp = Mm.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(t) {
    super.connect(t), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(jo), this.update(), this.state = Jt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    ue.copy(e).sub(this.target), ue.applyQuaternion(this._quat), this._spherical.setFromVector3(ue), this.autoRotate && this.state === Jt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Ae : n > Math.PI && (n -= Ae), s < -Math.PI ? s += Ae : s > Math.PI && (s -= Ae), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (ue.setFromSpherical(this._spherical), ue.applyQuaternion(this._quatInverse), e.copy(this.target).add(ue), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = ue.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new U(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new U(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = ue.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Ss.origin.copy(this.object.position), Ss.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ss.direction)) < om ? this.object.lookAt(this.target) : (Ko.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ss.intersectPlane(Ko, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > Sr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Sr || this._lastTargetPosition.distanceToSquared(this.target) > Sr ? (this.dispatchEvent(jo), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Ae / 60 * this.autoRotateSpeed * t : Ae / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    ue.setFromMatrixColumn(e, 0), ue.multiplyScalar(-t), this._panOffset.add(ue);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? ue.setFromMatrixColumn(e, 1) : (ue.setFromMatrixColumn(e, 0), ue.crossVectors(this.object.up, ue)), ue.multiplyScalar(t), this._panOffset.add(ue);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      ue.copy(s).sub(this.target);
      let r = ue.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ae * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ae * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-Ae * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const n = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Ae * this._rotateDelta.x / e.clientHeight), this._rotateUp(Ae * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new Tt(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function cm(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function hm(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function um(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Dl), this.state = Jt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function dm(i) {
  let t;
  switch (i.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case ui.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = Jt.DOLLY;
      break;
    case ui.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Jt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Jt.ROTATE;
      }
      break;
    case ui.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = Jt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = Jt.PAN;
      }
      break;
    default:
      this.state = Jt.NONE;
  }
  this.state !== Jt.NONE && this.dispatchEvent(Ua);
}
function fm(i) {
  switch (this.state) {
    case Jt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case Jt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case Jt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function pm(i) {
  this.enabled === false || this.enableZoom === false || this.state !== Jt.NONE || (i.preventDefault(), this.dispatchEvent(Ua), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(Dl));
}
function mm(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function gm(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ci.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = Jt.TOUCH_ROTATE;
          break;
        case ci.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = Jt.TOUCH_PAN;
          break;
        default:
          this.state = Jt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ci.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = Jt.TOUCH_DOLLY_PAN;
          break;
        case ci.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = Jt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = Jt.NONE;
      }
      break;
    default:
      this.state = Jt.NONE;
  }
  this.state !== Jt.NONE && this.dispatchEvent(Ua);
}
function _m(i) {
  switch (this._trackPointer(i), this.state) {
    case Jt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case Jt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case Jt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case Jt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = Jt.NONE;
  }
}
function vm(i) {
  this.enabled !== false && i.preventDefault();
}
function xm(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Mm(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/
class Qe {
  constructor(t, e, n, s, r = "div") {
    this.parent = t, this.object = e, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(s), this.$name = document.createElement("div"), this.$name.classList.add("name"), Qe.nextNameID = Qe.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++Qe.nextNameID, this.$widget = document.createElement(r), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(t) {
    return this._name = t, this.$name.innerHTML = t, this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(t = true) {
    return this.disable(!t);
  }
  disable(t = true) {
    return t === this._disabled || (this._disabled = t, this.domElement.classList.toggle("disabled", t), this.$disable.toggleAttribute("disabled", t)), this;
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(t) {
    const e = this.parent.add(this.object, this.property, t);
    return e.name(this._name), this.destroy(), e;
  }
  min(t) {
    return this;
  }
  max(t) {
    return this;
  }
  step(t) {
    return this;
  }
  decimals(t) {
    return this;
  }
  listen(t = true) {
    return this._listening = t, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    t !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = t;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(t) {
    return this.object[this.property] = t, this._callOnChange(), this.updateDisplay(), this;
  }
  updateDisplay() {
    return this;
  }
  load(t) {
    return this.setValue(t), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class Sm extends Qe {
  constructor(t, e, n) {
    super(t, e, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function pa(i) {
  let t, e;
  return (t = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), !!e && "#" + e;
}
const Em = { isPrimitive: true, match: (i) => typeof i == "string", fromHexString: pa, toHexString: pa }, Hi = { isPrimitive: true, match: (i) => typeof i == "number", fromHexString: (i) => parseInt(i.substring(1), 16), toHexString: (i) => "#" + i.toString(16).padStart(6, 0) }, ym = { isPrimitive: false, match: Array.isArray, fromHexString(i, t, e = 1) {
  const n = Hi.fromHexString(i);
  t[0] = (n >> 16 & 255) / 255 * e, t[1] = (n >> 8 & 255) / 255 * e, t[2] = (255 & n) / 255 * e;
}, toHexString: ([i, t, e], n = 1) => Hi.toHexString(i * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, bm = { isPrimitive: false, match: (i) => Object(i) === i, fromHexString(i, t, e = 1) {
  const n = Hi.fromHexString(i);
  t.r = (n >> 16 & 255) / 255 * e, t.g = (n >> 8 & 255) / 255 * e, t.b = (255 & n) / 255 * e;
}, toHexString: ({ r: i, g: t, b: e }, n = 1) => Hi.toHexString(i * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, Tm = [Em, Hi, ym, bm];
class Am extends Qe {
  constructor(t, e, n, s) {
    var r;
    super(t, e, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (r = this.initialValue, Tm.find((a) => a.match(r))), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const a = pa(this.$text.value);
      a && this._setValueFromHexString(a);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const e = this._format.fromHexString(t);
      this.setValue(e);
    } else this._format.fromHexString(t, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return this._setValueFromHexString(t), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class Er extends Qe {
  constructor(t, e, n) {
    super(t, e, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (s) => {
      s.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class wm extends Qe {
  constructor(t, e, n, s, r, a) {
    super(t, e, n, "number"), this._initInput(), this.min(s), this.max(r);
    const o = a !== void 0;
    this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay();
  }
  decimals(t) {
    return this._decimals = t, this.updateDisplay(), this;
  }
  min(t) {
    return this._min = t, this._onUpdateMinMax(), this;
  }
  max(t) {
    return this._max = t, this._onUpdateMinMax(), this;
  }
  step(t, e = true) {
    return this._step = t, this._stepExplicit = e, this;
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let e = (t - this._min) / (this._max - this._min);
      e = Math.max(0, Math.min(e, 1)), this.$fill.style.width = 100 * e + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? t : t.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const t = (h) => {
      const u = parseFloat(this.$input.value);
      isNaN(u) || (this._snapClampSetValue(u + h), this.$input.value = this.getValue());
    };
    let e, n, s, r, a, o = false;
    const l = (h) => {
      if (o) {
        const u = h.clientX - e, f = h.clientY - n;
        Math.abs(f) > 5 ? (h.preventDefault(), this.$input.blur(), o = false, this._setDraggingStyle(true, "vertical")) : Math.abs(u) > 5 && c();
      }
      if (!o) {
        const u = h.clientY - s;
        a -= u * this._step * this._arrowKeyMultiplier(h), r + a > this._max ? a = this._max - r : r + a < this._min && (a = this._min - r), this._snapClampSetValue(r + a);
      }
      s = h.clientY;
    }, c = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
    this.$input.addEventListener("input", () => {
      let h = parseFloat(this.$input.value);
      isNaN(h) || (this._stepExplicit && (h = this._snap(h)), this.setValue(this._clamp(h)));
    }), this.$input.addEventListener("keydown", (h) => {
      h.code === "Enter" && this.$input.blur(), h.code === "ArrowUp" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h))), h.code === "ArrowDown" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h) * -1));
    }), this.$input.addEventListener("wheel", (h) => {
      this._inputFocused && (h.preventDefault(), t(this._step * this._normalizeMouseWheel(h)));
    }, { passive: false }), this.$input.addEventListener("mousedown", (h) => {
      e = h.clientX, n = s = h.clientY, o = true, r = this.getValue(), a = 0, window.addEventListener("mousemove", l), window.addEventListener("mouseup", c);
    }), this.$input.addEventListener("focus", () => {
      this._inputFocused = true;
    }), this.$input.addEventListener("blur", () => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    });
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const t = (f) => {
      const m = this.$slider.getBoundingClientRect();
      let g = (v = f, p = m.left, d = m.right, T = this._min, b = this._max, (v - p) / (d - p) * (b - T) + T);
      var v, p, d, T, b;
      this._snapClampSetValue(g);
    }, e = (f) => {
      t(f.clientX);
    }, n = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", e), window.removeEventListener("mouseup", n);
    };
    let s, r, a = false;
    const o = (f) => {
      f.preventDefault(), this._setDraggingStyle(true), t(f.touches[0].clientX), a = false;
    }, l = (f) => {
      if (a) {
        const m = f.touches[0].clientX - s, g = f.touches[0].clientY - r;
        Math.abs(m) > Math.abs(g) ? o(f) : (window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c));
      } else f.preventDefault(), t(f.touches[0].clientX);
    }, c = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c);
    }, h = this._callOnFinishChange.bind(this);
    let u;
    this.$slider.addEventListener("mousedown", (f) => {
      this._setDraggingStyle(true), t(f.clientX), window.addEventListener("mousemove", e), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (f) => {
      f.touches.length > 1 || (this._hasScrollBar ? (s = f.touches[0].clientX, r = f.touches[0].clientY, a = true) : o(f), window.addEventListener("touchmove", l, { passive: false }), window.addEventListener("touchend", c));
    }, { passive: false }), this.$slider.addEventListener("wheel", (f) => {
      if (Math.abs(f.deltaX) < Math.abs(f.deltaY) && this._hasScrollBar) return;
      f.preventDefault();
      const m = this._normalizeMouseWheel(f) * this._step;
      this._snapClampSetValue(this.getValue() + m), this.$input.value = this.getValue(), clearTimeout(u), u = setTimeout(h, 400);
    }, { passive: false });
  }
  _setDraggingStyle(t, e = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", t), document.body.classList.toggle("lil-gui-dragging", t), document.body.classList.toggle("lil-gui-" + e, t);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: e, deltaY: n } = t;
    return Math.floor(t.deltaY) !== t.deltaY && t.wheelDelta && (e = 0, n = -t.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), e + -n;
  }
  _arrowKeyMultiplier(t) {
    let e = this._stepExplicit ? 1 : 10;
    return t.shiftKey ? e *= 10 : t.altKey && (e /= 10), e;
  }
  _snap(t) {
    const e = Math.round(t / this._step) * this._step;
    return parseFloat(e.toPrecision(15));
  }
  _clamp(t) {
    return t < this._min && (t = this._min), t > this._max && (t = this._max), t;
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Rm extends Qe {
  constructor(t, e, n, s) {
    super(t, e, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(s) ? s : Object.values(s), this._names = Array.isArray(s) ? s : Object.keys(s), this._names.forEach((r) => {
      const a = document.createElement("option");
      a.innerHTML = r, this.$select.appendChild(a);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const t = this.getValue(), e = this._values.indexOf(t);
    return this.$select.selectedIndex = e, this.$display.innerHTML = e === -1 ? t : this._names[e], this;
  }
}
class Cm extends Qe {
  constructor(t, e, n) {
    super(t, e, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (s) => {
      s.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
let Zo = false;
class Ia {
  constructor({ parent: t, autoPlace: e = t === void 0, container: n, width: s, title: r = "Controls", injectStyles: a = true, touchStyles: o = true } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      l.code !== "Enter" && l.code !== "Space" || (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), o && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !Zo && a && (function(l) {
      const c = document.createElement("style");
      c.innerHTML = l;
      const h = document.querySelector("head link[rel=stylesheet], head style");
      h ? document.head.insertBefore(c, h) : document.head.appendChild(c);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), Zo = true), n ? n.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(t, e, n, s, r) {
    if (Object(n) === n) return new Rm(this, t, e, n);
    const a = t[e];
    switch (typeof a) {
      case "number":
        return new wm(this, t, e, n, s, r);
      case "boolean":
        return new Sm(this, t, e);
      case "string":
        return new Cm(this, t, e);
      case "function":
        return new Er(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, a);
  }
  addColor(t, e, n = 1) {
    return new Am(this, t, e, n);
  }
  addFolder(t) {
    return new Ia({ parent: this, title: t });
  }
  load(t, e = true) {
    return t.controllers && this.controllers.forEach((n) => {
      n instanceof Er || n._name in t.controllers && n.load(t.controllers[n._name]);
    }), e && t.folders && this.folders.forEach((n) => {
      n._title in t.folders && n.load(t.folders[n._title]);
    }), this;
  }
  save(t = true) {
    const e = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof Er)) {
        if (n._name in e.controllers) throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        e.controllers[n._name] = n.save();
      }
    }), t && this.folders.forEach((n) => {
      if (n._title in e.folders) throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      e.folders[n._title] = n.save();
    }), e;
  }
  open(t = true) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  show(t = true) {
    return this._hidden = !t, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(t = true) {
    return this._closed = !t, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const e = this.$children.clientHeight;
      this.$children.style.height = e + "px", this.domElement.classList.add("transition");
      const n = (r) => {
        r.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const s = t ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !t), requestAnimationFrame(() => {
        this.$children.style.height = s + "px";
      });
    }), this;
  }
  title(t) {
    return this._title = t, this.$title.innerHTML = t, this;
  }
  reset(t = true) {
    return (t ? this.controllersRecursive() : this.controllers).forEach((e) => e.reset()), this;
  }
  onChange(t) {
    return this._onChange = t, this;
  }
  _callOnChange(t) {
    this.parent && this.parent._callOnChange(t), this._onChange !== void 0 && this._onChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  onFinishChange(t) {
    return this._onFinishChange = t, this;
  }
  _callOnFinishChange(t) {
    this.parent && this.parent._callOnFinishChange(t), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: t.object, property: t.property, value: t.getValue(), controller: t });
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((t) => t.destroy());
  }
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return this.folders.forEach((e) => {
      t = t.concat(e.controllersRecursive());
    }), t;
  }
  foldersRecursive() {
    let t = Array.from(this.folders);
    return this.folders.forEach((e) => {
      t = t.concat(e.foldersRecursive());
    }), t;
  }
}
const Pm = /^[og]\s*(.+)?/, Lm = /^mtllib /, Dm = /^usemtl /, Um = /^usemap /, Jo = /\s+/, Qo = new U(), yr = new U(), tl = new U(), el = new U(), Oe = new U(), Es = new Pt();
function Im() {
  const i = { objects: [], object: {}, vertices: [], normals: [], colors: [], uvs: [], materials: {}, materialLibraries: [], startObject: function(t, e) {
    if (this.object && this.object.fromDeclaration === false) {
      this.object.name = t, this.object.fromDeclaration = e !== false;
      return;
    }
    const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
    if (this.object && typeof this.object._finalize == "function" && this.object._finalize(true), this.object = { name: t || "", fromDeclaration: e !== false, geometry: { vertices: [], normals: [], colors: [], uvs: [], hasUVIndices: false }, materials: [], smooth: true, startMaterial: function(s, r) {
      const a = this._finalize(false);
      a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
      const o = { index: this.materials.length, name: s || "", mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "", smooth: a !== void 0 ? a.smooth : this.smooth, groupStart: a !== void 0 ? a.groupEnd : 0, groupEnd: -1, groupCount: -1, inherited: false, clone: function(l) {
        const c = { index: typeof l == "number" ? l : this.index, name: this.name, mtllib: this.mtllib, smooth: this.smooth, groupStart: 0, groupEnd: -1, groupCount: -1, inherited: false };
        return c.clone = this.clone.bind(c), c;
      } };
      return this.materials.push(o), o;
    }, currentMaterial: function() {
      if (this.materials.length > 0) return this.materials[this.materials.length - 1];
    }, _finalize: function(s) {
      const r = this.currentMaterial();
      if (r && r.groupEnd === -1 && (r.groupEnd = this.geometry.vertices.length / 3, r.groupCount = r.groupEnd - r.groupStart, r.inherited = false), s && this.materials.length > 1) for (let a = this.materials.length - 1; a >= 0; a--) this.materials[a].groupCount <= 0 && this.materials.splice(a, 1);
      return s && this.materials.length === 0 && this.materials.push({ name: "", smooth: this.smooth }), r;
    } }, n && n.name && typeof n.clone == "function") {
      const s = n.clone(0);
      s.inherited = true, this.object.materials.push(s);
    }
    this.objects.push(this.object);
  }, finalize: function() {
    this.object && typeof this.object._finalize == "function" && this.object._finalize(true);
  }, parseVertexIndex: function(t, e) {
    const n = parseInt(t, 10);
    return (n >= 0 ? n - 1 : n + e / 3) * 3;
  }, parseNormalIndex: function(t, e) {
    const n = parseInt(t, 10);
    return (n >= 0 ? n - 1 : n + e / 3) * 3;
  }, parseUVIndex: function(t, e) {
    const n = parseInt(t, 10);
    return (n >= 0 ? n - 1 : n + e / 2) * 2;
  }, addVertex: function(t, e, n) {
    const s = this.vertices, r = this.object.geometry.vertices;
    r.push(s[t + 0], s[t + 1], s[t + 2]), r.push(s[e + 0], s[e + 1], s[e + 2]), r.push(s[n + 0], s[n + 1], s[n + 2]);
  }, addVertexPoint: function(t) {
    const e = this.vertices;
    this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2]);
  }, addVertexLine: function(t) {
    const e = this.vertices;
    this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2]);
  }, addNormal: function(t, e, n) {
    const s = this.normals, r = this.object.geometry.normals;
    r.push(s[t + 0], s[t + 1], s[t + 2]), r.push(s[e + 0], s[e + 1], s[e + 2]), r.push(s[n + 0], s[n + 1], s[n + 2]);
  }, addFaceNormal: function(t, e, n) {
    const s = this.vertices, r = this.object.geometry.normals;
    Qo.fromArray(s, t), yr.fromArray(s, e), tl.fromArray(s, n), Oe.subVectors(tl, yr), el.subVectors(Qo, yr), Oe.cross(el), Oe.normalize(), r.push(Oe.x, Oe.y, Oe.z), r.push(Oe.x, Oe.y, Oe.z), r.push(Oe.x, Oe.y, Oe.z);
  }, addColor: function(t, e, n) {
    const s = this.colors, r = this.object.geometry.colors;
    s[t] !== void 0 && r.push(s[t + 0], s[t + 1], s[t + 2]), s[e] !== void 0 && r.push(s[e + 0], s[e + 1], s[e + 2]), s[n] !== void 0 && r.push(s[n + 0], s[n + 1], s[n + 2]);
  }, addUV: function(t, e, n) {
    const s = this.uvs, r = this.object.geometry.uvs;
    r.push(s[t + 0], s[t + 1]), r.push(s[e + 0], s[e + 1]), r.push(s[n + 0], s[n + 1]);
  }, addDefaultUV: function() {
    const t = this.object.geometry.uvs;
    t.push(0, 0), t.push(0, 0), t.push(0, 0);
  }, addUVLine: function(t) {
    const e = this.uvs;
    this.object.geometry.uvs.push(e[t + 0], e[t + 1]);
  }, addFace: function(t, e, n, s, r, a, o, l, c) {
    const h = this.vertices.length;
    let u = this.parseVertexIndex(t, h), f = this.parseVertexIndex(e, h), m = this.parseVertexIndex(n, h);
    if (this.addVertex(u, f, m), this.addColor(u, f, m), o !== void 0 && o !== "") {
      const g = this.normals.length;
      u = this.parseNormalIndex(o, g), f = this.parseNormalIndex(l, g), m = this.parseNormalIndex(c, g), this.addNormal(u, f, m);
    } else this.addFaceNormal(u, f, m);
    if (s !== void 0 && s !== "") {
      const g = this.uvs.length;
      u = this.parseUVIndex(s, g), f = this.parseUVIndex(r, g), m = this.parseUVIndex(a, g), this.addUV(u, f, m), this.object.geometry.hasUVIndices = true;
    } else this.addDefaultUV();
  }, addPointGeometry: function(t) {
    this.object.geometry.type = "Points";
    const e = this.vertices.length;
    for (let n = 0, s = t.length; n < s; n++) {
      const r = this.parseVertexIndex(t[n], e);
      this.addVertexPoint(r), this.addColor(r);
    }
  }, addLineGeometry: function(t, e) {
    this.object.geometry.type = "Line";
    const n = this.vertices.length, s = this.uvs.length;
    for (let r = 0, a = t.length; r < a; r++) this.addVertexLine(this.parseVertexIndex(t[r], n));
    for (let r = 0, a = e.length; r < a; r++) this.addUVLine(this.parseUVIndex(e[r], s));
  } };
  return i.startObject("", false), i;
}
class Na extends qi {
  constructor(t) {
    super(t), this.materials = null;
  }
  load(t, e, n, s) {
    const r = this, a = new gh(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(o) {
      try {
        e(r.parse(o));
      } catch (l) {
        s ? s(l) : console.error(l), r.manager.itemError(t);
      }
    }, n, s);
  }
  setMaterials(t) {
    return this.materials = t, this;
  }
  parse(t) {
    const e = new Im();
    t.indexOf(`\r
`) !== -1 && (t = t.replace(/\r\n/g, `
`)), t.indexOf(`\\
`) !== -1 && (t = t.replace(/\\\n/g, ""));
    const n = t.split(`
`);
    let s = [];
    for (let o = 0, l = n.length; o < l; o++) {
      const c = n[o].trimStart();
      if (c.length === 0) continue;
      const h = c.charAt(0);
      if (h !== "#") if (h === "v") {
        const u = c.split(Jo);
        switch (u[0]) {
          case "v":
            e.vertices.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])), u.length >= 7 ? (Es.setRGB(parseFloat(u[4]), parseFloat(u[5]), parseFloat(u[6]), De), e.colors.push(Es.r, Es.g, Es.b)) : e.colors.push(void 0, void 0, void 0);
            break;
          case "vn":
            e.normals.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3]));
            break;
          case "vt":
            e.uvs.push(parseFloat(u[1]), parseFloat(u[2]));
            break;
        }
      } else if (h === "f") {
        const f = c.slice(1).trim().split(Jo), m = [];
        for (let v = 0, p = f.length; v < p; v++) {
          const d = f[v];
          if (d.length > 0) {
            const T = d.split("/");
            m.push(T);
          }
        }
        const g = m[0];
        for (let v = 1, p = m.length - 1; v < p; v++) {
          const d = m[v], T = m[v + 1];
          e.addFace(g[0], d[0], T[0], g[1], d[1], T[1], g[2], d[2], T[2]);
        }
      } else if (h === "l") {
        const u = c.substring(1).trim().split(" ");
        let f = [];
        const m = [];
        if (c.indexOf("/") === -1) f = u;
        else for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g].split("/");
          p[0] !== "" && f.push(p[0]), p[1] !== "" && m.push(p[1]);
        }
        e.addLineGeometry(f, m);
      } else if (h === "p") {
        const f = c.slice(1).trim().split(" ");
        e.addPointGeometry(f);
      } else if ((s = Pm.exec(c)) !== null) {
        const u = (" " + s[0].slice(1).trim()).slice(1);
        e.startObject(u);
      } else if (Dm.test(c)) e.object.startMaterial(c.substring(7).trim(), e.materialLibraries);
      else if (Lm.test(c)) e.materialLibraries.push(c.substring(7).trim());
      else if (Um.test(c)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
      else if (h === "s") {
        if (s = c.split(" "), s.length > 1) {
          const f = s[1].trim().toLowerCase();
          e.object.smooth = f !== "0" && f !== "off";
        } else e.object.smooth = true;
        const u = e.object.currentMaterial();
        u && (u.smooth = e.object.smooth);
      } else {
        if (c === "\0") continue;
        console.warn('THREE.OBJLoader: Unexpected line: "' + c + '"');
      }
    }
    e.finalize();
    const r = new Ci();
    if (r.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === true) for (let o = 0, l = e.objects.length; o < l; o++) {
      const c = e.objects[o], h = c.geometry, u = c.materials, f = h.type === "Line", m = h.type === "Points";
      let g = false;
      if (h.vertices.length === 0) continue;
      const v = new ze();
      v.setAttribute("position", new _e(h.vertices, 3)), h.normals.length > 0 && v.setAttribute("normal", new _e(h.normals, 3)), h.colors.length > 0 && (g = true, v.setAttribute("color", new _e(h.colors, 3))), h.hasUVIndices === true && v.setAttribute("uv", new _e(h.uvs, 2));
      const p = [];
      for (let T = 0, b = u.length; T < b; T++) {
        const S = u[T], I = S.name + "_" + S.smooth + "_" + g;
        let R = e.materials[I];
        if (this.materials !== null) {
          if (R = this.materials.create(S.name), f && R && !(R instanceof Di)) {
            const w = new Di();
            en.prototype.copy.call(w, R), w.color.copy(R.color), R = w;
          } else if (m && R && !(R instanceof Pi)) {
            const w = new Pi({ size: 10, sizeAttenuation: false });
            en.prototype.copy.call(w, R), w.color.copy(R.color), w.map = R.map, R = w;
          }
        }
        R === void 0 && (f ? R = new Di() : m ? R = new Pi({ size: 1, sizeAttenuation: false }) : R = new hh(), R.name = S.name, R.flatShading = !S.smooth, R.vertexColors = g, e.materials[I] = R), p.push(R);
      }
      let d;
      if (p.length > 1) {
        for (let T = 0, b = u.length; T < b; T++) {
          const S = u[T];
          v.addGroup(S.groupStart, S.groupCount, T);
        }
        f ? d = new ua(v, p) : m ? d = new fr(v, p) : d = new qe(v, p);
      } else f ? d = new ua(v, p[0]) : m ? d = new fr(v, p[0]) : d = new qe(v, p[0]);
      d.name = c.name, r.add(d);
    }
    else if (e.vertices.length > 0) {
      const o = new Pi({ size: 1, sizeAttenuation: false }), l = new ze();
      l.setAttribute("position", new _e(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (l.setAttribute("color", new _e(e.colors, 3)), o.vertexColors = true);
      const c = new fr(l, o);
      r.add(c);
    }
    return r;
  }
}
const Mi = new Ra();
Mi.background = new Pt(15592941);
const Nm = new La(16777215, 1);
Mi.add(Nm);
const Ul = new Pa(16777215, 1);
Ul.position.set(5, 10, 7.5);
Mi.add(Ul);
let ki = null, Ui = null, ma = null;
const Fm = new bl(), Ot = "/Three.js-Gameboy-Mods/";
Fm.load(Ot + "substance_standardSurface1_BaseColor.png", (i) => {
  ma = i;
  const t = i.image, e = document.createElement("canvas");
  e.width = t.width, e.height = t.height;
  const n = e.getContext("2d");
  if (n) {
    n.drawImage(t, 0, 0);
    const r = n.getImageData(0, 0, e.width, e.height);
    for (let a = 0; a < r.data.length; a += 4) {
      const o = (r.data[a] + r.data[a + 1] + r.data[a + 2]) / 3;
      r.data[a] = o, r.data[a + 1] = o, r.data[a + 2] = o;
    }
    n.putImageData(r, 0, 0), Ui = new Se(e), Ui.needsUpdate = true;
  } else console.error("Could not get 2D context from canvas.");
  new Na().load(Ot + "model_0.obj", (r) => {
    ki = r, r.traverse((a) => {
      a.isMesh && (a.material = new Le({ map: Ui }));
    }), r.scale.set(1 / 8, 1 / 8, 1 / 8), Mi.add(r);
  }, (r) => {
    console.log(r.loaded / r.total * 100 + "% loaded");
  }, (r) => {
    console.error("An error happened while loading the OBJ:", r);
  });
}, void 0, (i) => {
  console.error("Texture failed to load", i);
});
function Fa(i) {
  ki && ki.traverse((t) => {
    t.isMesh && (t.material = i);
  });
}
function Om() {
  Ui && Fa(new Le({ map: Ui }));
}
function Bm() {
  ma && Fa(new Le({ map: ma }));
}
function zm() {
  Fa(new Le({ wireframe: true }));
}
const Si = new Ra();
Si.background = new Pt(15592941);
const Hm = new La(16777215, 0.6);
Si.add(Hm);
const Il = new Pa(16777215, 0.8);
Il.position.set(5, 10, 7.5);
Si.add(Il);
let ga = null;
const Wt = new bl(), Xt = { gbSilverAlbedo: Wt.load(Ot + "sp_textures/GB_Silver_Base_albedo.png"), gbSilverNormal: Wt.load(Ot + "sp_textures/GB_Silver_Base_normal.png"), gbSilverRoughness: Wt.load(Ot + "sp_textures/GB_Silver_Base_roughness.png"), gbSilverMetallic: Wt.load(Ot + "sp_textures/GB_Silver_Base_metallic.png"), buttonBlackAlbedo: Wt.load(Ot + "sp_textures/Button_Black_Glossy_albedo.png"), buttonBlackRoughness: Wt.load(Ot + "sp_textures/Button_Black_Glossy_roughness.png"), buttonBlackAO: Wt.load(Ot + "sp_textures/Button_Black_Glossy_AO.png"), buttonLightGreyAlbedo: Wt.load(Ot + "sp_textures/Buttons_Light_Grey_albedo.png"), buttonLightGreyNormal: Wt.load(Ot + "sp_textures/Buttons_Light_Grey_normal.png"), buttonLightGreyRoughness: Wt.load(Ot + "sp_textures/Buttons_Light_Grey_roughness.png"), buttonLightGreyMetallic: Wt.load(Ot + "sp_textures/Buttons_Light_Grey_metallic.png"), buttonLightGreyAO: Wt.load(Ot + "sp_textures/Buttons_Light_Grey_AO.png"), screenBlackAlbedo: Wt.load(Ot + "sp_textures/Screen_Black_albedo.png"), screenBlackNormal: Wt.load(Ot + "sp_textures/Screen_Black_normal.png"), screenBlackRoughness: Wt.load(Ot + "sp_textures/Screen_Black_roughness.png"), screenBlackMetallic: Wt.load(Ot + "sp_textures/Screen_Black_metallic.png"), screenGlassAlbedo: Wt.load(Ot + "sp_textures/Screen_Glass_albedo.png"), screenGlassRoughness: Wt.load(Ot + "sp_textures/Screen_Glass_roughness.png"), screenGlassMetallic: Wt.load(Ot + "sp_textures/Screen_Glass_metallic.png"), screenGlassOpacity: Wt.load(Ot + "sp_textures/Screen_Glass_opacity.png"), screenEmissive: Wt.load(Ot + "sp_textures/Screen_emissive.png"), batteryLightEmissive: Wt.load(Ot + "sp_textures/Battery_Light_emissive.png"), portMetalAlbedo: Wt.load(Ot + "sp_textures/Port_Metal_albedo.png"), portMetalNormal: Wt.load(Ot + "sp_textures/Port_Metal_normal.png"), portMetalRoughness: Wt.load(Ot + "sp_textures/Port_Metal_roughness.png"), portMetalMetallic: Wt.load(Ot + "sp_textures/Port_Metal_metallic.png"), pokemonRubyCoverAlbedo: Wt.load(Ot + "sp_textures/Pokemon_Ruby_Cover_albedo.png"), pokemonRubyCoverRoughness: Wt.load(Ot + "sp_textures/Pokemon_Ruby_Cover_roughness.png"), pokemonRubyCoverMetallic: Wt.load(Ot + "sp_textures/Pokemon_Ruby_Cover_metallic.png"), pokemonRubyCartridgeAlbedo: Wt.load(Ot + "sp_textures/Pokemon_Ruby_Cartridge_albedo.png"), blackTextBackgroundMetallic: Wt.load(Ot + "sp_textures/Black_TEXT_Background_metallic.png"), buttonBlackAOAlt: Wt.load(Ot + "sp_textures/Button_Black_AO.png") }, km = new Na();
km.load(Ot + "Gameboy-SP.obj", (i) => {
  ga = i, i.traverse((n) => {
    if (n.isMesh) {
      const s = n, r = s.name.toLowerCase();
      let a;
      r.includes("gb_silver") || r.includes("body") ? a = new Le({ map: Xt.gbSilverAlbedo, normalMap: Xt.gbSilverNormal, roughnessMap: Xt.gbSilverRoughness, metalnessMap: Xt.gbSilverMetallic, normalScale: new Tt(1, 1) }) : r.includes("button_black") || r.includes("black_button") ? a = new Le({ map: Xt.buttonBlackAlbedo, roughnessMap: Xt.buttonBlackRoughness, aoMap: Xt.buttonBlackAO, normalScale: new Tt(1, 1) }) : r.includes("button_light") || r.includes("light_grey") ? a = new Le({ map: Xt.buttonLightGreyAlbedo, normalMap: Xt.buttonLightGreyNormal, roughnessMap: Xt.buttonLightGreyRoughness, metalnessMap: Xt.buttonLightGreyMetallic, aoMap: Xt.buttonLightGreyAO, normalScale: new Tt(1, 1) }) : r.includes("screen_black") || r.includes("screen") ? a = new Le({ map: Xt.screenBlackAlbedo, normalMap: Xt.screenBlackNormal, roughnessMap: Xt.screenBlackRoughness, metalnessMap: Xt.screenBlackMetallic, emissiveMap: Xt.screenEmissive, emissive: new Pt(65280), emissiveIntensity: 0.2, normalScale: new Tt(1, 1) }) : r.includes("screen_glass") || r.includes("glass") ? a = new Le({ map: Xt.screenGlassAlbedo, roughnessMap: Xt.screenGlassRoughness, metalnessMap: Xt.screenGlassMetallic, alphaMap: Xt.screenGlassOpacity, transparent: true, opacity: 0.8 }) : r.includes("port_metal") || r.includes("port") ? a = new Le({ map: Xt.portMetalAlbedo, normalMap: Xt.portMetalNormal, roughnessMap: Xt.portMetalRoughness, metalnessMap: Xt.portMetalMetallic, normalScale: new Tt(1, 1) }) : r.includes("pokemon") || r.includes("cartridge") ? a = new Le({ map: Xt.pokemonRubyCoverAlbedo, roughnessMap: Xt.pokemonRubyCoverRoughness, metalnessMap: Xt.pokemonRubyCoverMetallic }) : a = new Le({ map: Xt.gbSilverAlbedo, normalMap: Xt.gbSilverNormal, roughnessMap: Xt.gbSilverRoughness, metalnessMap: Xt.gbSilverMetallic }), s.material = a;
    }
  });
  const e = new qn().setFromObject(i).getCenter(new U());
  i.position.x = -e.x - 0.04, i.position.y = -e.y + 0.65, i.position.z = -e.z + 0.7, i.scale.set(0.21, 0.21, 0.21), Si.add(i);
}, (i) => {
  console.log("SP Model: " + i.loaded / i.total * 100 + "% loaded");
}, (i) => {
  console.error("An error happened while loading the SP model:", i);
});
const wn = new Ra();
wn.background = new Pt(15592941);
const Vm = new La(16777215, 0.6);
wn.add(Vm);
const Nl = new Pa(16777215, 0.8);
Nl.position.set(5, 10, 7.5);
wn.add(Nl);
let _a = null;
const Gm = new Na();
Gm.load(Ot + "Gameboy-Color.obj", (i) => {
  _a = i, i.traverse((n) => {
    n.isMesh && (n.material = new Le({ color: 8947848, metalness: 0.3, roughness: 0.7 }));
  });
  const e = new qn().setFromObject(i).getCenter(new U());
  i.position.x = -e.x, i.position.y = -e.y, i.position.z = -e.z, i.scale.set(0.07, 0.07, 0.07), wn.add(i);
}, (i) => {
  console.log("GBC Model: " + i.loaded / i.total * 100 + "% loaded");
}, (i) => {
  console.error("An error happened while loading the GBC model:", i);
});
const Wm = new Sh(0.5);
wn.add(Wm);
const Vi = new Be(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
Vi.position.z = 1.5;
const Rn = new am();
Rn.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Rn.domElement);
window.addEventListener("resize", () => {
  Vi.aspect = window.innerWidth / window.innerHeight, Vi.updateProjectionMatrix(), Rn.setSize(window.innerWidth, window.innerHeight);
});
new lm(Vi, Rn.domElement);
let Ii = false;
Rn.domElement.addEventListener("mouseenter", () => {
  Ii = true;
});
Rn.domElement.addEventListener("mouseleave", () => {
  Ii = false;
});
Rn.domElement.addEventListener("mousemove", (i) => {
  i.clientX, i.clientY;
});
let Vn = wn;
const br = { sceneA: () => {
  Vn = Mi;
}, sceneB: () => {
  Vn = Si;
}, sceneC: () => {
  Vn = wn;
} }, Fl = new Ia();
Fl.title("Mods");
const Hs = Fl.addFolder("Color");
Hs.add({ Greyscale: Om }, "Greyscale").name("Greyscale");
Hs.add({ Color: Bm }, "Color").name("Original Color");
Hs.add({ Wireframe: zm }, "Wireframe").name("Wireframe");
Hs.open();
window.addEventListener("DOMContentLoaded", () => {
  const i = document.getElementById("btn-gba"), t = document.getElementById("btn-gba-sp"), e = document.getElementById("btn-gbc");
  i && i.addEventListener("click", () => br.sceneA()), t && t.addEventListener("click", () => br.sceneB()), e && e.addEventListener("click", () => br.sceneC());
});
function Ol() {
  requestAnimationFrame(Ol), Vn === Mi && ki && !Ii && (ki.rotation.y += 4e-3), Vn === Si && ga && !Ii && (ga.rotation.y += 4e-3), Vn === wn && _a && !Ii && (_a.rotation.y += 4e-3), Rn.render(Vn, Vi);
}
Ol();
