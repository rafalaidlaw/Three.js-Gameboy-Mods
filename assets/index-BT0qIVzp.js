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
const ha = "176", ii = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ei = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Fl = 0, Ua = 1, Ol = 2, $o = 1, Bl = 2, an = 3, Sn = 0, Te = 1, on = 2, xn = 0, si = 1, Na = 2, Fa = 3, Oa = 4, zl = 5, Ln = 100, Hl = 101, Vl = 102, kl = 103, Gl = 104, Wl = 200, Xl = 201, Yl = 202, ql = 203, xr = 204, Mr = 205, $l = 206, jl = 207, Kl = 208, Zl = 209, Jl = 210, Ql = 211, tc = 212, ec = 213, nc = 214, Sr = 0, Er = 1, yr = 2, ai = 3, br = 4, Tr = 5, Ar = 6, wr = 7, ua = 0, ic = 1, sc = 2, Mn = 0, rc = 1, ac = 2, oc = 3, lc = 4, cc = 5, hc = 6, uc = 7, jo = 300, oi = 301, li = 302, Rr = 303, Cr = 304, Cs = 306, Pr = 1e3, Un = 1001, Dr = 1002, Ge = 1003, dc = 1004, Vi = 1005, qe = 1006, Os = 1007, Nn = 1008, Ke = 1009, Ko = 1010, Zo = 1011, Ai = 1012, da = 1013, Fn = 1014, ln = 1015, Ii = 1016, fa = 1017, pa = 1018, wi = 1020, Jo = 35902, Qo = 1021, tl = 1022, Ve = 1023, Ri = 1026, Ci = 1027, el = 1028, ma = 1029, nl = 1030, ga = 1031, _a = 1033, ps = 33776, ms = 33777, gs = 33778, _s = 33779, Lr = 35840, Ir = 35841, Ur = 35842, Nr = 35843, Fr = 36196, Or = 37492, Br = 37496, zr = 37808, Hr = 37809, Vr = 37810, kr = 37811, Gr = 37812, Wr = 37813, Xr = 37814, Yr = 37815, qr = 37816, $r = 37817, jr = 37818, Kr = 37819, Zr = 37820, Jr = 37821, vs = 36492, Qr = 36494, ta = 36495, il = 36283, ea = 36284, na = 36285, ia = 36286, fc = 3200, pc = 3201, va = 0, mc = 1, vn = "", be = "srgb", ci = "srgb-linear", bs = "linear", $t = "srgb", Vn = 7680, Ba = 519, gc = 512, _c = 513, vc = 514, sl = 515, xc = 516, Mc = 517, Sc = 518, Ec = 519, za = 35044, Ha = "300 es", cn = 2e3, Ts = 2001;
class zn {
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
const me = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], xs = Math.PI / 180, sa = 180 / Math.PI;
function Ui() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (me[i & 255] + me[i >> 8 & 255] + me[i >> 16 & 255] + me[i >> 24 & 255] + "-" + me[t & 255] + me[t >> 8 & 255] + "-" + me[t >> 16 & 15 | 64] + me[t >> 24 & 255] + "-" + me[e & 63 | 128] + me[e >> 8 & 255] + "-" + me[e >> 16 & 255] + me[e >> 24 & 255] + me[n & 255] + me[n >> 8 & 255] + me[n >> 16 & 255] + me[n >> 24 & 255]).toLowerCase();
}
function Ft(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function yc(i, t) {
  return (i % t + t) % t;
}
function Bs(i, t, e) {
  return (1 - e) * i + e * t;
}
function mi(i, t) {
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
function Ee(i, t) {
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
const bc = { DEG2RAD: xs };
class Ct {
  constructor(t = 0, e = 0) {
    Ct.prototype.isVector2 = true, this.x = t, this.y = e;
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
  constructor(t, e, n, s, r, a, o, c, l) {
    Dt.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l);
  }
  set(t, e, n, s, r, a, o, c, l) {
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = o, h[3] = e, h[4] = r, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], f = n[2], m = n[5], g = n[8], v = s[0], p = s[3], d = s[6], T = s[1], b = s[4], S = s[7], U = s[2], R = s[5], w = s[8];
    return r[0] = a * v + o * T + c * U, r[3] = a * p + o * b + c * R, r[6] = a * d + o * S + c * w, r[1] = l * v + h * T + u * U, r[4] = l * p + h * b + u * R, r[7] = l * d + h * S + u * w, r[2] = f * v + m * T + g * U, r[5] = f * p + m * b + g * R, r[8] = f * d + m * S + g * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
    return e * a * h - e * o * l - n * r * h + n * o * c + s * r * l - s * a * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, f = o * c - h * r, m = l * r - a * c, g = e * u + n * f + s * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return t[0] = u * v, t[1] = (s * l - h * n) * v, t[2] = (o * n - s * a) * v, t[3] = f * v, t[4] = (h * e - s * c) * v, t[5] = (s * r - o * e) * v, t[6] = m * v, t[7] = (n * c - l * e) * v, t[8] = (a * e - n * r) * v, this;
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
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(n * c, n * l, -n * (c * a + l * o) + a + t, -s * l, s * c, -s * (-l * a + c * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(zs.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(zs.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(zs.makeTranslation(t, e)), this;
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
const zs = new Dt();
function rl(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return true;
  return false;
}
function Pi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Tc() {
  const i = Pi("canvas");
  return i.style.display = "block", i;
}
const Va = {};
function Ms(i) {
  i in Va || (Va[i] = true, console.warn(i));
}
function Ac(i, t, e) {
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
function wc(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Rc(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const ka = new Dt().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Ga = new Dt().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Cc() {
  const i = { enabled: true, workingColorSpace: ci, spaces: {}, convert: function(s, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === $t && (s.r = hn(s.r), s.g = hn(s.g), s.b = hn(s.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ), s.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === $t && (s.r = ri(s.r), s.g = ri(s.g), s.b = ri(s.b))), s;
  }, fromWorkingColorSpace: function(s, r) {
    return this.convert(s, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(s, r) {
    return this.convert(s, r, this.workingColorSpace);
  }, getPrimaries: function(s) {
    return this.spaces[s].primaries;
  }, getTransfer: function(s) {
    return s === vn ? bs : this.spaces[s].transfer;
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
  return i.define({ [ci]: { primaries: t, whitePoint: n, transfer: bs, toXYZ: ka, fromXYZ: Ga, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: be }, outputColorSpaceConfig: { drawingBufferColorSpace: be } }, [be]: { primaries: t, whitePoint: n, transfer: $t, toXYZ: ka, fromXYZ: Ga, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: be } } }), i;
}
const Gt = Cc();
function hn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function ri(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let kn;
class Pc {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      kn === void 0 && (kn = Pi("canvas")), kn.width = t.width, kn.height = t.height;
      const s = kn.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), n = kn;
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Pi("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = hn(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(hn(e[n] / 255) * 255) : e[n] = hn(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Dc = 0;
class xa {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Dc++ }), this.uuid = Ui(), this.data = t, this.dataReady = true, this.version = 0;
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
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(Hs(s[a].image)) : r.push(Hs(s[a]));
      } else r = Hs(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Hs(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Pc.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Lc = 0;
class _e extends zn {
  constructor(t = _e.DEFAULT_IMAGE, e = _e.DEFAULT_MAPPING, n = Un, s = Un, r = qe, a = Nn, o = Ve, c = Ke, l = _e.DEFAULT_ANISOTROPY, h = vn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = Ui(), this.name = "", this.source = new xa(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ct(0, 0), this.repeat = new Ct(1, 1), this.center = new Ct(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Dt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isTextureArray = false, this.pmremVersion = 0;
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
    if (this.mapping !== jo) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Pr:
        t.x = t.x - Math.floor(t.x);
        break;
      case Un:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Dr:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Pr:
        t.y = t.y - Math.floor(t.y);
        break;
      case Un:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Dr:
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
_e.DEFAULT_IMAGE = null;
_e.DEFAULT_MAPPING = jo;
_e.DEFAULT_ANISOTROPY = 1;
class se {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    se.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = s;
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
    const c = t.elements, l = c[0], h = c[4], u = c[8], f = c[1], m = c[5], g = c[9], v = c[2], p = c[6], d = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - v) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + v) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + d - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const b = (l + 1) / 2, S = (m + 1) / 2, U = (d + 1) / 2, R = (h + f) / 4, w = (u + v) / 4, N = (g + p) / 4;
      return b > S && b > U ? b < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(b), s = R / n, r = w / n) : S > U ? S < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(S), n = R / s, r = N / s) : U < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(U), n = w / r, s = N / r), this.set(n, s, r, e), this;
    }
    let T = Math.sqrt((p - g) * (p - g) + (u - v) * (u - v) + (f - h) * (f - h));
    return Math.abs(T) < 1e-3 && (T = 1), this.x = (p - g) / T, this.y = (u - v) / T, this.z = (f - h) / T, this.w = Math.acos((l + m + d - 1) / 2), this;
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
class Ic extends zn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = n.depth ? n.depth : 1, this.scissor = new se(0, 0, t, e), this.scissorTest = false, this.viewport = new se(0, 0, t, e);
    const s = { width: t, height: e, depth: this.depth };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: qe, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, multiview: false }, n);
    const r = new _e(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
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
      this.textures[e].source = new xa(s);
    }
    return this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class On extends Ic {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class al extends _e {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ge, this.minFilter = Ge, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Uc extends _e {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ge, this.minFilter = Ge, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Bn {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  static slerpFlat(t, e, n, s, r, a, o) {
    let c = n[s + 0], l = n[s + 1], h = n[s + 2], u = n[s + 3];
    const f = r[a + 0], m = r[a + 1], g = r[a + 2], v = r[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = g, t[e + 3] = v;
      return;
    }
    if (u !== v || c !== f || l !== m || h !== g) {
      let p = 1 - o;
      const d = c * f + l * m + h * g + u * v, T = d >= 0 ? 1 : -1, b = 1 - d * d;
      if (b > Number.EPSILON) {
        const U = Math.sqrt(b), R = Math.atan2(U, d * T);
        p = Math.sin(p * R) / U, o = Math.sin(o * R) / U;
      }
      const S = o * T;
      if (c = c * p + f * S, l = l * p + m * S, h = h * p + g * S, u = u * p + v * S, p === 1 - o) {
        const U = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= U, l *= U, h *= U, u *= U;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], c = n[s + 1], l = n[s + 2], h = n[s + 3], u = r[a], f = r[a + 1], m = r[a + 2], g = r[a + 3];
    return t[e] = o * g + h * u + c * m - l * f, t[e + 1] = c * g + h * f + l * u - o * m, t[e + 2] = l * g + h * m + o * f - c * u, t[e + 3] = h * g - o * u - c * f - l * m, t;
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
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(s / 2), u = o(r / 2), f = c(n / 2), m = c(s / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "YXZ":
        this._x = f * h * u + l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u + f * m * g;
        break;
      case "ZXY":
        this._x = f * h * u - l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "ZYX":
        this._x = f * h * u - l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u + f * m * g;
        break;
      case "YZX":
        this._x = f * h * u + l * m * g, this._y = l * m * u + f * h * g, this._z = l * h * g - f * m * u, this._w = l * h * u - f * m * g;
        break;
      case "XZY":
        this._x = f * h * u - l * m * g, this._y = l * m * u - f * h * g, this._z = l * h * g + f * m * u, this._w = l * h * u + f * m * g;
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
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], f = n + o + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (r - l) * m, this._z = (a - s) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + l) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - l) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / m, this._x = (r + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
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
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
    return this._x = n * h + a * o + s * l - r * c, this._y = s * h + a * c + r * o - n * l, this._z = r * h + a * l + n * c - s * o, this._w = a * h - n * o - s * c - r * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + s * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const m = 1 - e;
      return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * s + e * this._y, this._z = m * r + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, f = Math.sin(e * h) / l;
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
class I {
  constructor(t = 0, e = 0, n = 0) {
    I.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
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
    return this.applyQuaternion(Wa.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Wa.setFromAxisAngle(t, e));
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
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * s - o * n), h = 2 * (o * e - r * s), u = 2 * (r * n - a * e);
    return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - r * u, this.z = s + c * u + r * h - a * l, this;
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
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = s * c - r * o, this.y = r * a - n * c, this.z = n * o - s * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Vs.copy(this).projectOnVector(t), this.sub(Vs);
  }
  reflect(t) {
    return this.sub(Vs.copy(t).multiplyScalar(2 * this.dot(t)));
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
const Vs = new I(), Wa = new Bn();
class Ni {
  constructor(t = new I(1 / 0, 1 / 0, 1 / 0), e = new I(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Oe.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Oe.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Oe.copy(e).multiplyScalar(0.5);
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
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Oe) : Oe.fromBufferAttribute(r, a), Oe.applyMatrix4(t.matrixWorld), this.expandByPoint(Oe);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), ki.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ki.copy(n.boundingBox)), ki.applyMatrix4(t.matrixWorld), this.union(ki);
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
    return this.clampPoint(t.center, Oe), Oe.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(gi), Gi.subVectors(this.max, gi), Gn.subVectors(t.a, gi), Wn.subVectors(t.b, gi), Xn.subVectors(t.c, gi), un.subVectors(Wn, Gn), dn.subVectors(Xn, Wn), Tn.subVectors(Gn, Xn);
    let e = [0, -un.z, un.y, 0, -dn.z, dn.y, 0, -Tn.z, Tn.y, un.z, 0, -un.x, dn.z, 0, -dn.x, Tn.z, 0, -Tn.x, -un.y, un.x, 0, -dn.y, dn.x, 0, -Tn.y, Tn.x, 0];
    return !ks(e, Gn, Wn, Xn, Gi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !ks(e, Gn, Wn, Xn, Gi)) ? false : (Wi.crossVectors(un, dn), e = [Wi.x, Wi.y, Wi.z], ks(e, Gn, Wn, Xn, Gi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Oe).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Oe).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Qe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Qe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Qe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Qe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Qe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Qe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Qe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Qe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Qe), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Qe = [new I(), new I(), new I(), new I(), new I(), new I(), new I(), new I()], Oe = new I(), ki = new Ni(), Gn = new I(), Wn = new I(), Xn = new I(), un = new I(), dn = new I(), Tn = new I(), gi = new I(), Gi = new I(), Wi = new I(), An = new I();
function ks(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    An.fromArray(i, r);
    const o = s.x * Math.abs(An.x) + s.y * Math.abs(An.y) + s.z * Math.abs(An.z), c = t.dot(An), l = e.dot(An), h = n.dot(An);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return false;
  }
  return true;
}
const Nc = new Ni(), _i = new I(), Gs = new I();
class Fi {
  constructor(t = new I(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Nc.setFromPoints(t).getCenter(n);
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
    _i.subVectors(t, this.center);
    const e = _i.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(_i, s / n), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Gs.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(_i.copy(t.center).add(Gs)), this.expandByPoint(_i.copy(t.center).sub(Gs))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tn = new I(), Ws = new I(), Xi = new I(), fn = new I(), Xs = new I(), Yi = new I(), Ys = new I();
class Ps {
  constructor(t = new I(), e = new I(0, 0, -1)) {
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
    return this.origin.copy(this.at(t, tn)), this;
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
    const e = tn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (tn.copy(this.origin).addScaledVector(this.direction, e), tn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, s) {
    Ws.copy(t).add(e).multiplyScalar(0.5), Xi.copy(e).sub(t).normalize(), fn.copy(this.origin).sub(Ws);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Xi), o = fn.dot(this.direction), c = -fn.dot(Xi), l = fn.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, m, g;
    if (h > 0) if (u = a * c - o, f = a * o - c, g = r * h, u >= 0) if (f >= -g) if (f <= g) {
      const v = 1 / h;
      u *= v, f *= v, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l;
    } else f = r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
    else f = -r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
    else f <= -g ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -c), r), m = -u * u + f * (f + 2 * c) + l) : f <= g ? (u = 0, f = Math.min(Math.max(-r, -c), r), m = f * (f + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -c), r), m = -u * u + f * (f + 2 * c) + l);
    else f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(Ws).addScaledVector(Xi, f), m;
  }
  intersectSphere(t, e) {
    tn.subVectors(t.center, this.origin);
    const n = tn.dot(this.direction), s = tn.dot(tn) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
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
    let n, s, r, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (t.min.x - f.x) * l, s = (t.max.x - f.x) * l) : (n = (t.max.x - f.x) * l, s = (t.min.x - f.x) * l), h >= 0 ? (r = (t.min.y - f.y) * h, a = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h, a = (t.min.y - f.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (t.min.z - f.z) * u, c = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, c = (t.min.z - f.z) * u), n > c || o > s) || ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, tn) !== null;
  }
  intersectTriangle(t, e, n, s, r) {
    Xs.subVectors(e, t), Yi.subVectors(n, t), Ys.crossVectors(Xs, Yi);
    let a = this.direction.dot(Ys), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    fn.subVectors(this.origin, t);
    const c = o * this.direction.dot(Yi.crossVectors(fn, Yi));
    if (c < 0) return null;
    const l = o * this.direction.dot(Xs.cross(fn));
    if (l < 0 || c + l > a) return null;
    const h = -o * fn.dot(Ys);
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
class te {
  constructor(t, e, n, s, r, a, o, c, l, h, u, f, m, g, v, p) {
    te.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, h, u, f, m, g, v, p);
  }
  set(t, e, n, s, r, a, o, c, l, h, u, f, m, g, v, p) {
    const d = this.elements;
    return d[0] = t, d[4] = e, d[8] = n, d[12] = s, d[1] = r, d[5] = a, d[9] = o, d[13] = c, d[2] = l, d[6] = h, d[10] = u, d[14] = f, d[3] = m, d[7] = g, d[11] = v, d[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new te().fromArray(this.elements);
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
    const e = this.elements, n = t.elements, s = 1 / Yn.setFromMatrixColumn(t, 0).length(), r = 1 / Yn.setFromMatrixColumn(t, 1).length(), a = 1 / Yn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(s), l = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * h, m = a * u, g = o * h, v = o * u;
      e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = m + g * l, e[5] = f - v * l, e[9] = -o * c, e[2] = v - f * l, e[6] = g + m * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const f = c * h, m = c * u, g = l * h, v = l * u;
      e[0] = f + v * o, e[4] = g * o - m, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = m * o - g, e[6] = v + f * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const f = c * h, m = c * u, g = l * h, v = l * u;
      e[0] = f - v * o, e[4] = -a * u, e[8] = g + m * o, e[1] = m + g * o, e[5] = a * h, e[9] = v - f * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const f = a * h, m = a * u, g = o * h, v = o * u;
      e[0] = c * h, e[4] = g * l - m, e[8] = f * l + v, e[1] = c * u, e[5] = v * l + f, e[9] = m * l - g, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const f = a * c, m = a * l, g = o * c, v = o * l;
      e[0] = c * h, e[4] = v - f * u, e[8] = g * u + m, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = m * u + g, e[10] = f - v * u;
    } else if (t.order === "XZY") {
      const f = a * c, m = a * l, g = o * c, v = o * l;
      e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = f * u + v, e[5] = a * h, e[9] = m * u - g, e[2] = g * u - m, e[6] = o * h, e[10] = v * u + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Fc, t, Oc);
  }
  lookAt(t, e, n) {
    const s = this.elements;
    return we.subVectors(t, e), we.lengthSq() === 0 && (we.z = 1), we.normalize(), pn.crossVectors(n, we), pn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? we.x += 1e-4 : we.z += 1e-4, we.normalize(), pn.crossVectors(n, we)), pn.normalize(), qi.crossVectors(we, pn), s[0] = pn.x, s[4] = qi.x, s[8] = we.x, s[1] = pn.y, s[5] = qi.y, s[9] = we.y, s[2] = pn.z, s[6] = qi.z, s[10] = we.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], f = n[9], m = n[13], g = n[2], v = n[6], p = n[10], d = n[14], T = n[3], b = n[7], S = n[11], U = n[15], R = s[0], w = s[4], N = s[8], y = s[12], M = s[1], C = s[5], G = s[9], z = s[13], $ = s[2], j = s[6], Y = s[10], Z = s[14], V = s[3], it = s[7], ht = s[11], _t = s[15];
    return r[0] = a * R + o * M + c * $ + l * V, r[4] = a * w + o * C + c * j + l * it, r[8] = a * N + o * G + c * Y + l * ht, r[12] = a * y + o * z + c * Z + l * _t, r[1] = h * R + u * M + f * $ + m * V, r[5] = h * w + u * C + f * j + m * it, r[9] = h * N + u * G + f * Y + m * ht, r[13] = h * y + u * z + f * Z + m * _t, r[2] = g * R + v * M + p * $ + d * V, r[6] = g * w + v * C + p * j + d * it, r[10] = g * N + v * G + p * Y + d * ht, r[14] = g * y + v * z + p * Z + d * _t, r[3] = T * R + b * M + S * $ + U * V, r[7] = T * w + b * C + S * j + U * it, r[11] = T * N + b * G + S * Y + U * ht, r[15] = T * y + b * z + S * Z + U * _t, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], f = t[10], m = t[14], g = t[3], v = t[7], p = t[11], d = t[15];
    return g * (+r * c * u - s * l * u - r * o * f + n * l * f + s * o * m - n * c * m) + v * (+e * c * m - e * l * f + r * a * f - s * a * m + s * l * h - r * c * h) + p * (+e * l * u - e * o * m - r * a * u + n * a * m + r * o * h - n * l * h) + d * (-s * o * h - e * c * u + e * o * f + s * a * u - n * a * f + n * c * h);
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
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], f = t[10], m = t[11], g = t[12], v = t[13], p = t[14], d = t[15], T = u * p * l - v * f * l + v * c * m - o * p * m - u * c * d + o * f * d, b = g * f * l - h * p * l - g * c * m + a * p * m + h * c * d - a * f * d, S = h * v * l - g * u * l + g * o * m - a * v * m - h * o * d + a * u * d, U = g * u * c - h * v * c - g * o * f + a * v * f + h * o * p - a * u * p, R = e * T + n * b + s * S + r * U;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return t[0] = T * w, t[1] = (v * f * r - u * p * r - v * s * m + n * p * m + u * s * d - n * f * d) * w, t[2] = (o * p * r - v * c * r + v * s * l - n * p * l - o * s * d + n * c * d) * w, t[3] = (u * c * r - o * f * r - u * s * l + n * f * l + o * s * m - n * c * m) * w, t[4] = b * w, t[5] = (h * p * r - g * f * r + g * s * m - e * p * m - h * s * d + e * f * d) * w, t[6] = (g * c * r - a * p * r - g * s * l + e * p * l + a * s * d - e * c * d) * w, t[7] = (a * f * r - h * c * r + h * s * l - e * f * l - a * s * m + e * c * m) * w, t[8] = S * w, t[9] = (g * u * r - h * v * r - g * n * m + e * v * m + h * n * d - e * u * d) * w, t[10] = (a * v * r - g * o * r + g * n * l - e * v * l - a * n * d + e * o * d) * w, t[11] = (h * o * r - a * u * r - h * n * l + e * u * l + a * n * m - e * o * m) * w, t[12] = U * w, t[13] = (h * v * s - g * u * s + g * n * f - e * v * f - h * n * p + e * u * p) * w, t[14] = (g * o * s - a * v * s - g * n * c + e * v * c + a * n * p - e * o * p) * w, t[15] = (a * u * s - h * o * s + h * n * c - e * u * c - a * n * f + e * o * f) * w, this;
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
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, h = r * o;
    return this.set(l * a + n, l * o - s * c, l * c + s * o, 0, l * o + s * c, h * o + n, h * c - s * a, 0, l * c - s * o, h * c + s * a, r * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, s, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, h = a + a, u = o + o, f = r * l, m = r * h, g = r * u, v = a * h, p = a * u, d = o * u, T = c * l, b = c * h, S = c * u, U = n.x, R = n.y, w = n.z;
    return s[0] = (1 - (v + d)) * U, s[1] = (m + S) * U, s[2] = (g - b) * U, s[3] = 0, s[4] = (m - S) * R, s[5] = (1 - (f + d)) * R, s[6] = (p + T) * R, s[7] = 0, s[8] = (g + b) * w, s[9] = (p - T) * w, s[10] = (1 - (f + v)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, n) {
    const s = this.elements;
    let r = Yn.set(s[0], s[1], s[2]).length();
    const a = Yn.set(s[4], s[5], s[6]).length(), o = Yn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], Be.copy(this);
    const l = 1 / r, h = 1 / a, u = 1 / o;
    return Be.elements[0] *= l, Be.elements[1] *= l, Be.elements[2] *= l, Be.elements[4] *= h, Be.elements[5] *= h, Be.elements[6] *= h, Be.elements[8] *= u, Be.elements[9] *= u, Be.elements[10] *= u, e.setFromRotationMatrix(Be), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, s, r, a, o = cn) {
    const c = this.elements, l = 2 * r / (e - t), h = 2 * r / (n - s), u = (e + t) / (e - t), f = (n + s) / (n - s);
    let m, g;
    if (o === cn) m = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === Ts) m = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, e, n, s, r, a, o = cn) {
    const c = this.elements, l = 1 / (e - t), h = 1 / (n - s), u = 1 / (a - r), f = (e + t) * l, m = (n + s) * h;
    let g, v;
    if (o === cn) g = (a + r) * u, v = -2 * u;
    else if (o === Ts) g = r * u, v = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -f, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -m, c[2] = 0, c[6] = 0, c[10] = v, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
const Yn = new I(), Be = new te(), Fc = new I(0, 0, 0), Oc = new I(1, 1, 1), pn = new I(), qi = new I(), we = new I(), Xa = new te(), Ya = new Bn();
class We {
  constructor(t = 0, e = 0, n = 0, s = We.DEFAULT_ORDER) {
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
    const s = t.elements, r = s[0], a = s[4], o = s[8], c = s[1], l = s[5], h = s[9], u = s[2], f = s[6], m = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(Ft(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ft(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ft(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Ft(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(Ft(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ft(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Xa.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Xa, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Ya.setFromEuler(this), this.setFromQuaternion(Ya, t);
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
We.DEFAULT_ORDER = "XYZ";
class ol {
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
let Bc = 0;
const qa = new I(), qn = new Bn(), en = new te(), $i = new I(), vi = new I(), zc = new I(), Hc = new Bn(), $a = new I(1, 0, 0), ja = new I(0, 1, 0), Ka = new I(0, 0, 1), Za = { type: "added" }, Vc = { type: "removed" }, $n = { type: "childadded", child: null }, qs = { type: "childremoved", child: null };
class de extends zn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Bc++ }), this.uuid = Ui(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = de.DEFAULT_UP.clone();
    const t = new I(), e = new We(), n = new Bn(), s = new I(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new te() }, normalMatrix: { value: new Dt() } }), this.matrix = new te(), this.matrixWorld = new te(), this.matrixAutoUpdate = de.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ol(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
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
    return qn.setFromAxisAngle(t, e), this.quaternion.multiply(qn), this;
  }
  rotateOnWorldAxis(t, e) {
    return qn.setFromAxisAngle(t, e), this.quaternion.premultiply(qn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis($a, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ja, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Ka, t);
  }
  translateOnAxis(t, e) {
    return qa.copy(t).applyQuaternion(this.quaternion), this.position.add(qa.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis($a, t);
  }
  translateY(t) {
    return this.translateOnAxis(ja, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Ka, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(en.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? $i.copy(t) : $i.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), vi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? en.lookAt(vi, $i, this.up) : en.lookAt($i, vi, this.up), this.quaternion.setFromRotationMatrix(en), s && (en.extractRotation(s.matrixWorld), qn.setFromRotationMatrix(en), this.quaternion.premultiply(qn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Za), $n.child = t, this.dispatchEvent($n), $n.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Vc), qs.child = t, this.dispatchEvent(qs), qs.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), en.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), en.multiply(t.parent.matrixWorld)), t.applyMatrix4(en), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Za), $n.child = t, this.dispatchEvent($n), $n.child = null, this;
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
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(vi, t, zc), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(vi, Hc, t), t;
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
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c)) for (let l = 0, h = c.length; l < h; l++) {
          const u = c[l];
          r(t.shapes, u);
        }
        else r(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let c = 0, l = this.material.length; c < l; c++) o.push(r(t.materials, this.material[c]));
      s.material = o;
    } else s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        s.animations.push(r(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), f = a(t.skeletons), m = a(t.animations), g = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = s, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
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
de.DEFAULT_UP = new I(0, 1, 0);
de.DEFAULT_MATRIX_AUTO_UPDATE = true;
de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const ze = new I(), nn = new I(), $s = new I(), sn = new I(), jn = new I(), Kn = new I(), Ja = new I(), js = new I(), Ks = new I(), Zs = new I(), Js = new se(), Qs = new se(), tr = new se();
class He {
  constructor(t = new I(), e = new I(), n = new I()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), ze.subVectors(t, e), s.cross(ze);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, s, r) {
    ze.subVectors(s, e), nn.subVectors(n, e), $s.subVectors(t, e);
    const a = ze.dot(ze), o = ze.dot(nn), c = ze.dot($s), l = nn.dot(nn), h = nn.dot($s), u = a * l - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const f = 1 / u, m = (l * c - o * h) * f, g = (a * h - o * c) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, sn) === null ? false : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getInterpolation(t, e, n, s, r, a, o, c) {
    return this.getBarycoord(t, e, n, s, sn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, sn.x), c.addScaledVector(a, sn.y), c.addScaledVector(o, sn.z), c);
  }
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return Js.setScalar(0), Qs.setScalar(0), tr.setScalar(0), Js.fromBufferAttribute(t, e), Qs.fromBufferAttribute(t, n), tr.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(Js, r.x), a.addScaledVector(Qs, r.y), a.addScaledVector(tr, r.z), a;
  }
  static isFrontFacing(t, e, n, s) {
    return ze.subVectors(n, e), nn.subVectors(t, e), ze.cross(nn).dot(s) < 0;
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
    return ze.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), ze.cross(nn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return He.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return He.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, s, r) {
    return He.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  containsPoint(t) {
    return He.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return He.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    jn.subVectors(s, n), Kn.subVectors(r, n), js.subVectors(t, n);
    const c = jn.dot(js), l = Kn.dot(js);
    if (c <= 0 && l <= 0) return e.copy(n);
    Ks.subVectors(t, s);
    const h = jn.dot(Ks), u = Kn.dot(Ks);
    if (h >= 0 && u <= h) return e.copy(s);
    const f = c * u - h * l;
    if (f <= 0 && c >= 0 && h <= 0) return a = c / (c - h), e.copy(n).addScaledVector(jn, a);
    Zs.subVectors(t, r);
    const m = jn.dot(Zs), g = Kn.dot(Zs);
    if (g >= 0 && m <= g) return e.copy(r);
    const v = m * l - c * g;
    if (v <= 0 && l >= 0 && g <= 0) return o = l / (l - g), e.copy(n).addScaledVector(Kn, o);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0) return Ja.subVectors(r, s), o = (u - h) / (u - h + (m - g)), e.copy(s).addScaledVector(Ja, o);
    const d = 1 / (p + v + f);
    return a = v * d, o = f * d, e.copy(n).addScaledVector(jn, a).addScaledVector(Kn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const ll = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, mn = { h: 0, s: 0, l: 0 }, ji = { h: 0, s: 0, l: 0 };
function er(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Ut {
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
  setHex(t, e = be) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Gt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, s = Gt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Gt.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, n, s = Gt.workingColorSpace) {
    if (t = yc(t, 1), e = Ft(e, 0, 1), n = Ft(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = er(a, r, t + 1 / 3), this.g = er(a, r, t), this.b = er(a, r, t - 1 / 3);
    }
    return Gt.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = be) {
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
  setColorName(t, e = be) {
    const n = ll[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = hn(t.r), this.g = hn(t.g), this.b = hn(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = ri(t.r), this.g = ri(t.g), this.b = ri(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = be) {
    return Gt.fromWorkingColorSpace(ge.copy(this), t), Math.round(Ft(ge.r * 255, 0, 255)) * 65536 + Math.round(Ft(ge.g * 255, 0, 255)) * 256 + Math.round(Ft(ge.b * 255, 0, 255));
  }
  getHexString(t = be) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Gt.workingColorSpace) {
    Gt.fromWorkingColorSpace(ge.copy(this), e);
    const n = ge.r, s = ge.g, r = ge.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a) c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          c = (r - n) / u + 2;
          break;
        case r:
          c = (n - s) / u + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = h, t;
  }
  getRGB(t, e = Gt.workingColorSpace) {
    return Gt.fromWorkingColorSpace(ge.copy(this), e), t.r = ge.r, t.g = ge.g, t.b = ge.b, t;
  }
  getStyle(t = be) {
    Gt.fromWorkingColorSpace(ge.copy(this), t);
    const e = ge.r, n = ge.g, s = ge.b;
    return t !== be ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(mn), this.setHSL(mn.h + t, mn.s + e, mn.l + n);
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
    this.getHSL(mn), t.getHSL(ji);
    const n = Bs(mn.h, ji.h, e), s = Bs(mn.s, ji.s, e), r = Bs(mn.l, ji.l, e);
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
const ge = new Ut();
Ut.NAMES = ll;
let kc = 0;
class Ze extends zn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: kc++ }), this.uuid = Ui(), this.name = "", this.type = "Material", this.blending = si, this.side = Sn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = xr, this.blendDst = Mr, this.blendEquation = Ln, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ut(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ai, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Ba, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Vn, this.stencilZFail = Vn, this.stencilZPass = Vn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== si && (n.blending = this.blending), this.side !== Sn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== xr && (n.blendSrc = this.blendSrc), this.blendDst !== Mr && (n.blendDst = this.blendDst), this.blendEquation !== Ln && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ai && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ba && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Vn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Vn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Vn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
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
class cl extends Ze {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ut(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.combine = ua, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const oe = new I(), Ki = new Ct();
let Gc = 0;
class $e {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Gc++ }), this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = za, this.updateRanges = [], this.gpuType = ln, this.version = 0;
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
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) Ki.fromBufferAttribute(this, e), Ki.applyMatrix3(t), this.setXY(e, Ki.x, Ki.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) oe.fromBufferAttribute(this, e), oe.applyMatrix3(t), this.setXYZ(e, oe.x, oe.y, oe.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) oe.fromBufferAttribute(this, e), oe.applyMatrix4(t), this.setXYZ(e, oe.x, oe.y, oe.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) oe.fromBufferAttribute(this, e), oe.applyNormalMatrix(t), this.setXYZ(e, oe.x, oe.y, oe.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) oe.fromBufferAttribute(this, e), oe.transformDirection(t), this.setXYZ(e, oe.x, oe.y, oe.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = mi(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Ee(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = mi(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Ee(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array), s = Ee(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Ee(e, this.array), n = Ee(n, this.array), s = Ee(s, this.array), r = Ee(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== za && (t.usage = this.usage), t;
  }
}
class hl extends $e {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class ul extends $e {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Me extends $e {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Wc = 0;
const Le = new te(), nr = new de(), Zn = new I(), Re = new Ni(), xi = new Ni(), ue = new I();
class Xe extends zn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Wc++ }), this.uuid = Ui(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (rl(t) ? ul : hl)(t, 1) : this.index = t, this;
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
    return Le.makeRotationFromQuaternion(t), this.applyMatrix4(Le), this;
  }
  rotateX(t) {
    return Le.makeRotationX(t), this.applyMatrix4(Le), this;
  }
  rotateY(t) {
    return Le.makeRotationY(t), this.applyMatrix4(Le), this;
  }
  rotateZ(t) {
    return Le.makeRotationZ(t), this.applyMatrix4(Le), this;
  }
  translate(t, e, n) {
    return Le.makeTranslation(t, e, n), this.applyMatrix4(Le), this;
  }
  scale(t, e, n) {
    return Le.makeScale(t, e, n), this.applyMatrix4(Le), this;
  }
  lookAt(t) {
    return nr.lookAt(t), nr.updateMatrix(), this.applyMatrix4(nr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Zn).negate(), this.translate(Zn.x, Zn.y, Zn.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const a = t[s];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Me(n, 3));
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
    this.boundingBox === null && (this.boundingBox = new Ni());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new I(-1 / 0, -1 / 0, -1 / 0), new I(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, s = e.length; n < s; n++) {
        const r = e[n];
        Re.setFromBufferAttribute(r), this.morphTargetsRelative ? (ue.addVectors(this.boundingBox.min, Re.min), this.boundingBox.expandByPoint(ue), ue.addVectors(this.boundingBox.max, Re.max), this.boundingBox.expandByPoint(ue)) : (this.boundingBox.expandByPoint(Re.min), this.boundingBox.expandByPoint(Re.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Re.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r];
        xi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ue.addVectors(Re.min, xi.min), Re.expandByPoint(ue), ue.addVectors(Re.max, xi.max), Re.expandByPoint(ue)) : (Re.expandByPoint(xi.min), Re.expandByPoint(xi.max));
      }
      Re.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++) ue.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(ue));
      if (e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r], c = this.morphTargetsRelative;
        for (let l = 0, h = o.count; l < h; l++) ue.fromBufferAttribute(o, l), c && (Zn.fromBufferAttribute(t, l), ue.add(Zn)), s = Math.max(s, n.distanceToSquared(ue));
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
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new $e(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let N = 0; N < n.count; N++) o[N] = new I(), c[N] = new I();
    const l = new I(), h = new I(), u = new I(), f = new Ct(), m = new Ct(), g = new Ct(), v = new I(), p = new I();
    function d(N, y, M) {
      l.fromBufferAttribute(n, N), h.fromBufferAttribute(n, y), u.fromBufferAttribute(n, M), f.fromBufferAttribute(r, N), m.fromBufferAttribute(r, y), g.fromBufferAttribute(r, M), h.sub(l), u.sub(l), m.sub(f), g.sub(f);
      const C = 1 / (m.x * g.y - g.x * m.y);
      isFinite(C) && (v.copy(h).multiplyScalar(g.y).addScaledVector(u, -m.y).multiplyScalar(C), p.copy(u).multiplyScalar(m.x).addScaledVector(h, -g.x).multiplyScalar(C), o[N].add(v), o[y].add(v), o[M].add(v), c[N].add(p), c[y].add(p), c[M].add(p));
    }
    let T = this.groups;
    T.length === 0 && (T = [{ start: 0, count: t.count }]);
    for (let N = 0, y = T.length; N < y; ++N) {
      const M = T[N], C = M.start, G = M.count;
      for (let z = C, $ = C + G; z < $; z += 3) d(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2));
    }
    const b = new I(), S = new I(), U = new I(), R = new I();
    function w(N) {
      U.fromBufferAttribute(s, N), R.copy(U);
      const y = o[N];
      b.copy(y), b.sub(U.multiplyScalar(U.dot(y))).normalize(), S.crossVectors(R, y);
      const C = S.dot(c[N]) < 0 ? -1 : 1;
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
      if (n === void 0) n = new $e(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new I(), r = new I(), a = new I(), o = new I(), c = new I(), l = new I(), h = new I(), u = new I();
      if (t) for (let f = 0, m = t.count; f < m; f += 3) {
        const g = t.getX(f + 0), v = t.getX(f + 1), p = t.getX(f + 2);
        s.fromBufferAttribute(e, g), r.fromBufferAttribute(e, v), a.fromBufferAttribute(e, p), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, v), l.fromBufferAttribute(n, p), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
      }
      else for (let f = 0, m = e.count; f < m; f += 3) s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) ue.fromBufferAttribute(t, e), ue.normalize(), t.setXYZ(e, ue.x, ue.y, ue.z);
  }
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, f = new l.constructor(c.length * h);
      let m = 0, g = 0;
      for (let v = 0, p = c.length; v < p; v++) {
        o.isInterleavedBufferAttribute ? m = c[v] * o.data.stride + o.offset : m = c[v] * h;
        for (let d = 0; d < h; d++) f[g++] = l[m++];
      }
      return new $e(f, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Xe(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const c = s[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const f = l[h], m = t(f, n);
        c.push(m);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const s = {};
    let r = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, f = l.length; u < f; u++) {
        const m = l[u];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && (s[c] = h, r = true);
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
    for (const l in s) {
      const h = s[l];
      this.setAttribute(l, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const h = [], u = r[l];
      for (let f = 0, m = u.length; f < m; f++) h.push(u[f].clone(e));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Qa = new te(), wn = new Ps(), Zi = new Fi(), to = new I(), Ji = new I(), Qi = new I(), ts = new I(), ir = new I(), es = new I(), eo = new I(), ns = new I();
class ke extends de {
  constructor(t = new Xe(), e = new cl()) {
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
      es.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c], u = r[c];
        h !== 0 && (ir.fromBufferAttribute(u, t), a ? es.addScaledVector(ir, h) : es.addScaledVector(ir.sub(e), h));
      }
      e.add(es);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Zi.copy(n.boundingSphere), Zi.applyMatrix4(r), wn.copy(t.ray).recast(t.near), !(Zi.containsPoint(wn.origin) === false && (wn.intersectSphere(Zi, to) === null || wn.origin.distanceToSquared(to) > (t.far - t.near) ** 2)) && (Qa.copy(r).invert(), wn.copy(t.ray).applyMatrix4(Qa), !(n.boundingBox !== null && wn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, wn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], T = Math.max(p.start, m.start), b = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = T, U = b; S < U; S += 3) {
        const R = o.getX(S), w = o.getX(S + 1), N = o.getX(S + 2);
        s = is(this, d, t, n, l, h, u, R, w, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const T = o.getX(p), b = o.getX(p + 1), S = o.getX(p + 2);
        s = is(this, a, t, n, l, h, u, T, b, S), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
    else if (c !== void 0) if (Array.isArray(a)) for (let g = 0, v = f.length; g < v; g++) {
      const p = f[g], d = a[p.materialIndex], T = Math.max(p.start, m.start), b = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
      for (let S = T, U = b; S < U; S += 3) {
        const R = S, w = S + 1, N = S + 2;
        s = is(this, d, t, n, l, h, u, R, w, N), s && (s.faceIndex = Math.floor(S / 3), s.face.materialIndex = p.materialIndex, e.push(s));
      }
    }
    else {
      const g = Math.max(0, m.start), v = Math.min(c.count, m.start + m.count);
      for (let p = g, d = v; p < d; p += 3) {
        const T = p, b = p + 1, S = p + 2;
        s = is(this, a, t, n, l, h, u, T, b, S), s && (s.faceIndex = Math.floor(p / 3), e.push(s));
      }
    }
  }
}
function Xc(i, t, e, n, s, r, a, o) {
  let c;
  if (t.side === Te ? c = n.intersectTriangle(a, r, s, true, o) : c = n.intersectTriangle(s, r, a, t.side === Sn, o), c === null) return null;
  ns.copy(o), ns.applyMatrix4(i.matrixWorld);
  const l = e.ray.origin.distanceTo(ns);
  return l < e.near || l > e.far ? null : { distance: l, point: ns.clone(), object: i };
}
function is(i, t, e, n, s, r, a, o, c, l) {
  i.getVertexPosition(o, Ji), i.getVertexPosition(c, Qi), i.getVertexPosition(l, ts);
  const h = Xc(i, t, e, n, Ji, Qi, ts, eo);
  if (h) {
    const u = new I();
    He.getBarycoord(eo, Ji, Qi, ts, u), s && (h.uv = He.getInterpolatedAttribute(s, o, c, l, u, new Ct())), r && (h.uv1 = He.getInterpolatedAttribute(r, o, c, l, u, new Ct())), a && (h.normal = He.getInterpolatedAttribute(a, o, c, l, u, new I()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = { a: o, b: c, c: l, normal: new I(), materialIndex: 0 };
    He.getNormal(Ji, Qi, ts, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class Oi extends Xe {
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let f = 0, m = 0;
    g("z", "y", "x", -1, -1, n, e, t, a, r, 0), g("z", "y", "x", 1, -1, n, e, -t, a, r, 1), g("x", "z", "y", 1, 1, t, n, e, s, a, 2), g("x", "z", "y", 1, -1, t, n, -e, s, a, 3), g("x", "y", "z", 1, -1, t, e, n, s, r, 4), g("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(c), this.setAttribute("position", new Me(l, 3)), this.setAttribute("normal", new Me(h, 3)), this.setAttribute("uv", new Me(u, 2));
    function g(v, p, d, T, b, S, U, R, w, N, y) {
      const M = S / w, C = U / N, G = S / 2, z = U / 2, $ = R / 2, j = w + 1, Y = N + 1;
      let Z = 0, V = 0;
      const it = new I();
      for (let ht = 0; ht < Y; ht++) {
        const _t = ht * C - z;
        for (let Nt = 0; Nt < j; Nt++) {
          const Kt = Nt * M - G;
          it[v] = Kt * T, it[p] = _t * b, it[d] = $, l.push(it.x, it.y, it.z), it[v] = 0, it[p] = 0, it[d] = R > 0 ? 1 : -1, h.push(it.x, it.y, it.z), u.push(Nt / w), u.push(1 - ht / N), Z += 1;
        }
      }
      for (let ht = 0; ht < N; ht++) for (let _t = 0; _t < w; _t++) {
        const Nt = f + _t + j * ht, Kt = f + _t + j * (ht + 1), W = f + (_t + 1) + j * (ht + 1), tt = f + (_t + 1) + j * ht;
        c.push(Nt, Kt, tt), c.push(Kt, W, tt), V += 6;
      }
      o.addGroup(m, V, y), m += V, f += Z;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Oi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function hi(i) {
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
function xe(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = hi(i[e]);
    for (const s in n) t[s] = n[s];
  }
  return t;
}
function Yc(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function dl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Gt.workingColorSpace;
}
const qc = { clone: hi, merge: xe };
var $c = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, jc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class En extends Ze {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = $c, this.fragmentShader = jc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = hi(t.uniforms), this.uniformsGroups = Yc(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
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
class fl extends de {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new te(), this.projectionMatrix = new te(), this.projectionMatrixInverse = new te(), this.coordinateSystem = cn;
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
const gn = new I(), no = new Ct(), io = new Ct();
class Ue extends fl {
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = sa * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(xs * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return sa * 2 * Math.atan(Math.tan(xs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    gn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(gn.x, gn.y).multiplyScalar(-t / gn.z), gn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(gn.x, gn.y).multiplyScalar(-t / gn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, no, io), e.subVectors(io, no);
  }
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(xs * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * s / c, e -= a.offsetY * n / l, s *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Jn = -90, Qn = 1;
class Kc extends de {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Ue(Jn, Qn, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Ue(Jn, Qn, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Ue(Jn, Qn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Ue(Jn, Qn, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Ue(Jn, Qn, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Ue(Jn, Qn, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === cn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === Ts) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), g = t.xr.enabled;
    t.xr.enabled = false;
    const v = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, c), t.setRenderTarget(n, 4, s), t.render(e, l), n.texture.generateMipmaps = v, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(u, f, m), t.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class Ma extends _e {
  constructor(t = [], e = oi, n, s, r, a, o, c, l, h) {
    super(t, e, n, s, r, a, o, c, l, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Zc extends On {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Ma(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : qe;
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
			` }, s = new Oi(5, 5, 5), r = new En({ name: "CubemapFromEquirect", uniforms: hi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Te, blending: xn });
    r.uniforms.tEquirect.value = e;
    const a = new ke(s, r), o = e.minFilter;
    return e.minFilter === Nn && (e.minFilter = qe), new Kc(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e = true, n = true, s = true) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
class Si extends de {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Jc = { type: "move" };
class sr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Si(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Si(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new I(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new I()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Si(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new I(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new I()), this._grip;
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
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = true;
        for (const v of t.hand.values()) {
          const p = e.getJointPose(v, n), d = this._getHandJoint(l, v);
          p !== null && (d.matrix.fromArray(p.transform.matrix), d.matrix.decompose(d.position, d.rotation, d.scale), d.matrixWorldNeedsUpdate = true, d.jointRadius = p.radius), d.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && f > m + g ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !l.inputState.pinching && f <= m - g && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, r.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = false, r.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = false));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Jc)));
    }
    return o !== null && (o.visible = s !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Si();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class Sa extends de {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new We(), this.environmentIntensity = 1, this.environmentRotation = new We(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
const rr = new I(), Qc = new I(), th = new Dt();
class _n {
  constructor(t = new I(1, 0, 0), e = 0) {
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
    const s = rr.subVectors(n, e).cross(Qc.subVectors(t, e)).normalize();
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
    const n = t.delta(rr), s = this.normal.dot(n);
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
    const n = e || th.getNormalMatrix(t), s = this.coplanarPoint(rr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
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
const Rn = new Fi(), ss = new I();
class Ea {
  constructor(t = new _n(), e = new _n(), n = new _n(), s = new _n(), r = new _n(), a = new _n()) {
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
  setFromProjectionMatrix(t, e = cn) {
    const n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], c = s[3], l = s[4], h = s[5], u = s[6], f = s[7], m = s[8], g = s[9], v = s[10], p = s[11], d = s[12], T = s[13], b = s[14], S = s[15];
    if (n[0].setComponents(c - r, f - l, p - m, S - d).normalize(), n[1].setComponents(c + r, f + l, p + m, S + d).normalize(), n[2].setComponents(c + a, f + h, p + g, S + T).normalize(), n[3].setComponents(c - a, f - h, p - g, S - T).normalize(), n[4].setComponents(c - o, f - u, p - v, S - b).normalize(), e === cn) n[5].setComponents(c + o, f + u, p + v, S + b).normalize();
    else if (e === Ts) n[5].setComponents(o, u, v, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Rn);
  }
  intersectsSprite(t) {
    return Rn.center.set(0, 0, 0), Rn.radius = 0.7071067811865476, Rn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Rn);
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
      if (ss.x = s.normal.x > 0 ? t.max.x : t.min.x, ss.y = s.normal.y > 0 ? t.max.y : t.min.y, ss.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(ss) < 0) return false;
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
class Ss extends Ze {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ut(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const As = new I(), ws = new I(), so = new te(), Mi = new Ps(), rs = new Fi(), ar = new I(), ro = new I();
class eh extends de {
  constructor(t = new Xe(), e = new Ss()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++) As.fromBufferAttribute(e, s - 1), ws.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += As.distanceTo(ws);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), rs.copy(n.boundingSphere), rs.applyMatrix4(s), rs.radius += r, t.ray.intersectsSphere(rs) === false) return;
    so.copy(s).invert(), Mi.copy(t.ray).applyMatrix4(so);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += l) {
        const d = h.getX(v), T = h.getX(v + 1), b = as(this, t, Mi, c, d, T, v);
        b && e.push(b);
      }
      if (this.isLineLoop) {
        const v = h.getX(g - 1), p = h.getX(m), d = as(this, t, Mi, c, v, p, g - 1);
        d && e.push(d);
      }
    } else {
      const m = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let v = m, p = g - 1; v < p; v += l) {
        const d = as(this, t, Mi, c, v, v + 1, v);
        d && e.push(d);
      }
      if (this.isLineLoop) {
        const v = as(this, t, Mi, c, g - 1, m, g - 1);
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
function as(i, t, e, n, s, r, a) {
  const o = i.geometry.attributes.position;
  if (As.fromBufferAttribute(o, s), ws.fromBufferAttribute(o, r), e.distanceSqToSegment(As, ws, ar, ro) > n) return;
  ar.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(ar);
  if (!(l < t.near || l > t.far)) return { distance: l, point: ro.clone().applyMatrix4(i.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i };
}
const ao = new I(), oo = new I();
class lo extends eh {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2) ao.fromBufferAttribute(e, s), oo.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + ao.distanceTo(oo);
      t.setAttribute("lineDistance", new Me(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Ei extends Ze {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ut(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const co = new te(), ra = new Ps(), os = new Fi(), ls = new I();
class or extends de {
  constructor(t = new Xe(), e = new Ei()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), os.copy(n.boundingSphere), os.applyMatrix4(s), os.radius += r, t.ray.intersectsSphere(os) === false) return;
    co.copy(s).invert(), ra.copy(t.ray).applyMatrix4(co);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), m = Math.min(l.count, a.start + a.count);
      for (let g = f, v = m; g < v; g++) {
        const p = l.getX(g);
        ls.fromBufferAttribute(u, p), ho(ls, p, c, s, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
      for (let g = f, v = m; g < v; g++) ls.fromBufferAttribute(u, g), ho(ls, g, c, s, t, e, this);
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
function ho(i, t, e, n, s, r, a) {
  const o = ra.distanceSqToPoint(i);
  if (o < e) {
    const c = new I();
    ra.closestPointToPoint(i, c), c.applyMatrix4(n);
    const l = s.ray.origin.distanceTo(c);
    if (l < s.near || l > s.far) return;
    r.push({ distance: l, distanceToRay: Math.sqrt(o), point: c, index: t, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class pl extends _e {
  constructor(t, e, n = Fn, s, r, a, o = Ge, c = Ge, l, h = Ri) {
    if (h !== Ri && h !== Ci) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super(null, s, r, a, o, c, h, n, l), this.isDepthTexture = true, this.image = { width: t, height: e }, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.source = new xa(Object.assign({}, t.image)), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
class Ds extends Xe {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: s };
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(s), l = o + 1, h = c + 1, u = t / o, f = e / c, m = [], g = [], v = [], p = [];
    for (let d = 0; d < h; d++) {
      const T = d * f - a;
      for (let b = 0; b < l; b++) {
        const S = b * u - r;
        g.push(S, -T, 0), v.push(0, 0, 1), p.push(b / o), p.push(1 - d / c);
      }
    }
    for (let d = 0; d < c; d++) for (let T = 0; T < o; T++) {
      const b = T + l * d, S = T + l * (d + 1), U = T + 1 + l * (d + 1), R = T + 1 + l * d;
      m.push(b, S, R), m.push(S, U, R);
    }
    this.setIndex(m), this.setAttribute("position", new Me(g, 3)), this.setAttribute("normal", new Me(v, 3)), this.setAttribute("uv", new Me(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ds(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class Ls extends Ze {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ut(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = va, this.normalScale = new Ct(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class nh extends Ze {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Ut(16777215), this.specular = new Ut(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ut(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = va, this.normalScale = new Ct(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new We(), this.combine = ua, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class ih extends Ze {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = fc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class sh extends Ze {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Rs = { enabled: false, files: {}, add: function(i, t) {
  this.enabled !== false && (this.files[i] = t);
}, get: function(i) {
  if (this.enabled !== false) return this.files[i];
}, remove: function(i) {
  delete this.files[i];
}, clear: function() {
  this.files = {};
} };
class rh {
  constructor(t, e, n) {
    const s = this;
    let r = false, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      o++, r === false && s.onStart !== void 0 && s.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, s.onProgress !== void 0 && s.onProgress(h, a, o), a === o && (r = false, s.onLoad !== void 0 && s.onLoad());
    }, this.itemError = function(h) {
      s.onError !== void 0 && s.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, f = l.length; u < f; u += 2) {
        const m = l[u], g = l[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h)) return g;
      }
      return null;
    };
  }
}
const ah = new rh();
class ui {
  constructor(t) {
    this.manager = t !== void 0 ? t : ah, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
ui.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const rn = {};
class oh extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class lh extends ui {
  constructor(t) {
    super(t), this.mimeType = "", this.responseType = "";
  }
  load(t, e, n, s) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = Rs.get(t);
    if (r !== void 0) return this.manager.itemStart(t), setTimeout(() => {
      e && e(r), this.manager.itemEnd(t);
    }, 0), r;
    if (rn[t] !== void 0) {
      rn[t].push({ onLoad: e, onProgress: n, onError: s });
      return;
    }
    rn[t] = [], rn[t].push({ onLoad: e, onProgress: n, onError: s });
    const a = new Request(t, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
        const h = rn[t], u = l.body.getReader(), f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), m = f ? parseInt(f) : 0, g = m !== 0;
        let v = 0;
        const p = new ReadableStream({ start(d) {
          T();
          function T() {
            u.read().then(({ done: b, value: S }) => {
              if (b) d.close();
              else {
                v += S.byteLength;
                const U = new ProgressEvent("progress", { lengthComputable: g, loaded: v, total: m });
                for (let R = 0, w = h.length; R < w; R++) {
                  const N = h[R];
                  N.onProgress && N.onProgress(U);
                }
                d.enqueue(S), T();
              }
            }, (b) => {
              d.error(b);
            });
          }
        } });
        return new Response(p);
      } else throw new oh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === "") return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), f = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(f);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      Rs.add(t, l);
      const h = rn[t];
      delete rn[t];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const h = rn[t];
      if (h === void 0) throw this.manager.itemError(t), l;
      delete rn[t];
      for (let u = 0, f = h.length; u < f; u++) {
        const m = h[u];
        m.onError && m.onError(l);
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
class ml extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, s) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, a = Rs.get(t);
    if (a !== void 0) return r.manager.itemStart(t), setTimeout(function() {
      e && e(a), r.manager.itemEnd(t);
    }, 0), a;
    const o = Pi("img");
    function c() {
      h(), Rs.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function l(u) {
      h(), s && s(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      o.removeEventListener("load", c, false), o.removeEventListener("error", l, false);
    }
    return o.addEventListener("load", c, false), o.addEventListener("error", l, false), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o;
  }
}
class ch extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, s) {
    const r = new Ma();
    r.colorSpace = be;
    const a = new ml(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function c(l) {
      a.load(t[l], function(h) {
        r.images[l] = h, o++, o === 6 && (r.needsUpdate = true, e && e(r));
      }, void 0, s);
    }
    for (let l = 0; l < t.length; ++l) c(l);
    return r;
  }
}
class gl extends ui {
  constructor(t) {
    super(t);
  }
  load(t, e, n, s) {
    const r = new _e(), a = new ml(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      r.image = o, r.needsUpdate = true, e !== void 0 && e(r);
    }, n, s), r;
  }
}
class _l extends de {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ut(t), this.intensity = e;
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
const lr = new te(), uo = new I(), fo = new I();
class hh {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ct(512, 512), this.mapType = Ke, this.map = null, this.mapPass = null, this.matrix = new te(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Ea(), this._frameExtents = new Ct(1, 1), this._viewportCount = 1, this._viewports = [new se(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    uo.setFromMatrixPosition(t.matrixWorld), e.position.copy(uo), fo.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(fo), e.updateMatrixWorld(), lr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(lr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(lr);
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
class vl extends fl {
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
    let r = n - t, a = n + t, o = s + e, c = s - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
class uh extends hh {
  constructor() {
    super(new vl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class dh extends _l {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(de.DEFAULT_UP), this.updateMatrix(), this.target = new de(), this.shadow = new uh();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class fh extends _l {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class ph extends Ue {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = t;
  }
}
class po {
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
class mh extends zn {
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
function mo(i, t, e, n) {
  const s = gh(n);
  switch (e) {
    case Qo:
      return i * t;
    case el:
      return i * t / s.components * s.byteLength;
    case ma:
      return i * t / s.components * s.byteLength;
    case nl:
      return i * t * 2 / s.components * s.byteLength;
    case ga:
      return i * t * 2 / s.components * s.byteLength;
    case tl:
      return i * t * 3 / s.components * s.byteLength;
    case Ve:
      return i * t * 4 / s.components * s.byteLength;
    case _a:
      return i * t * 4 / s.components * s.byteLength;
    case ps:
    case ms:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case gs:
    case _s:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ir:
    case Nr:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Lr:
    case Ur:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case Fr:
    case Or:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Br:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case zr:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Hr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Vr:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case kr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Gr:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Wr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Xr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Yr:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case qr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case $r:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case jr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Kr:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Zr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Jr:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case vs:
    case Qr:
    case ta:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case il:
    case ea:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case na:
    case ia:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function gh(i) {
  switch (i) {
    case Ke:
    case Ko:
      return { byteLength: 1, components: 1 };
    case Ai:
    case Zo:
    case Ii:
      return { byteLength: 2, components: 1 };
    case fa:
    case pa:
      return { byteLength: 2, components: 4 };
    case Fn:
    case da:
    case ln:
      return { byteLength: 4, components: 1 };
    case Jo:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ha } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ha);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function xl() {
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
function _h(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, h = o.usage, u = l.byteLength, f = i.createBuffer();
    i.bindBuffer(c, f), i.bufferData(c, l, h), o.onUploadCallback();
    let m;
    if (l instanceof Float32Array) m = i.FLOAT;
    else if (l instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) m = i.SHORT;
    else if (l instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) m = i.INT;
    else if (l instanceof Int8Array) m = i.BYTE;
    else if (l instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: f, type: m, bytesPerElement: l.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, c, l) {
    const h = c.array, u = c.updateRanges;
    if (i.bindBuffer(l, o), u.length === 0) i.bufferSubData(l, 0, h);
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
        i.bufferSubData(l, v.start * h.BYTES_PER_ELEMENT, h, v.start, v.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const l = t.get(o);
    if (l === void 0) t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
var vh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, xh = `#ifdef USE_ALPHAHASH
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
#endif`, Mh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Eh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, yh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, bh = `#ifdef USE_AOMAP
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
#endif`, Th = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ah = `#ifdef USE_BATCHING
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
#endif`, wh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Rh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Ch = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ph = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Dh = `#ifdef USE_IRIDESCENCE
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
#endif`, Lh = `#ifdef USE_BUMPMAP
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
#endif`, Ih = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Uh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Nh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Fh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Oh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Bh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, zh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Hh = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Vh = `#define PI 3.141592653589793
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
} // validated`, kh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Gh = `vec3 transformedNormal = objectNormal;
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
#endif`, Wh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Xh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Yh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, qh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, $h = "gl_FragColor = linearToOutputTexel( gl_FragColor );", jh = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Kh = `#ifdef USE_ENVMAP
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
#endif`, Zh = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Jh = `#ifdef USE_ENVMAP
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
#endif`, Qh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, tu = `#ifdef USE_ENVMAP
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
#endif`, eu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, nu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, iu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, su = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ru = `#ifdef USE_GRADIENTMAP
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
}`, au = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, ou = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, cu = `uniform bool receiveShadow;
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
#endif`, hu = `#ifdef USE_ENVMAP
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
#endif`, uu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, du = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, fu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, pu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, mu = `PhysicalMaterial material;
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
#endif`, gu = `struct PhysicalMaterial {
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
}`, _u = `
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
#endif`, vu = `#if defined( RE_IndirectDiffuse )
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
#endif`, xu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Mu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Su = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Eu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, yu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, bu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, Tu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Au = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, wu = `#if defined( USE_POINTS_UV )
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
#endif`, Ru = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Cu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Pu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Du = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Lu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Iu = `#ifdef USE_MORPHTARGETS
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
#endif`, Uu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Nu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Fu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Ou = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Bu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Hu = `#ifdef USE_NORMALMAP
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
#endif`, Vu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ku = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Gu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Wu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Xu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Yu = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, qu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, $u = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, ju = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Ku = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Zu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Ju = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Qu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, td = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, ed = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, nd = `float getShadowMask() {
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
}`, id = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sd = `#ifdef USE_SKINNING
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
#endif`, rd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, ad = `#ifdef USE_SKINNING
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
#endif`, od = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ld = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, cd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hd = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, ud = `#ifdef USE_TRANSMISSION
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
#endif`, dd = `#ifdef USE_TRANSMISSION
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
#endif`, fd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, pd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, md = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, gd = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const _d = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, vd = `uniform sampler2D t2D;
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
}`, xd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Md = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Ed = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yd = `#include <common>
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
}`, bd = `#if DEPTH_PACKING == 3200
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
}`, Td = `#define DISTANCE
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
}`, Ad = `#define DISTANCE
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
}`, wd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Rd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Cd = `uniform float scale;
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
}`, Pd = `uniform vec3 diffuse;
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
}`, Dd = `#include <common>
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
}`, Ld = `uniform vec3 diffuse;
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
}`, Id = `#define LAMBERT
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
}`, Ud = `#define LAMBERT
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
}`, Nd = `#define MATCAP
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
}`, Fd = `#define MATCAP
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
}`, Od = `#define NORMAL
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
}`, Bd = `#define NORMAL
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
}`, zd = `#define PHONG
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
}`, Hd = `#define PHONG
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
}`, Vd = `#define STANDARD
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
}`, kd = `#define STANDARD
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
}`, Gd = `#define TOON
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
}`, Wd = `#define TOON
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
}`, Xd = `uniform float size;
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
}`, Yd = `uniform vec3 diffuse;
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
}`, qd = `#include <common>
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
}`, $d = `uniform vec3 color;
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
}`, jd = `uniform float rotation;
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
}`, Kd = `uniform vec3 diffuse;
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
}`, It = { alphahash_fragment: vh, alphahash_pars_fragment: xh, alphamap_fragment: Mh, alphamap_pars_fragment: Sh, alphatest_fragment: Eh, alphatest_pars_fragment: yh, aomap_fragment: bh, aomap_pars_fragment: Th, batching_pars_vertex: Ah, batching_vertex: wh, begin_vertex: Rh, beginnormal_vertex: Ch, bsdfs: Ph, iridescence_fragment: Dh, bumpmap_pars_fragment: Lh, clipping_planes_fragment: Ih, clipping_planes_pars_fragment: Uh, clipping_planes_pars_vertex: Nh, clipping_planes_vertex: Fh, color_fragment: Oh, color_pars_fragment: Bh, color_pars_vertex: zh, color_vertex: Hh, common: Vh, cube_uv_reflection_fragment: kh, defaultnormal_vertex: Gh, displacementmap_pars_vertex: Wh, displacementmap_vertex: Xh, emissivemap_fragment: Yh, emissivemap_pars_fragment: qh, colorspace_fragment: $h, colorspace_pars_fragment: jh, envmap_fragment: Kh, envmap_common_pars_fragment: Zh, envmap_pars_fragment: Jh, envmap_pars_vertex: Qh, envmap_physical_pars_fragment: hu, envmap_vertex: tu, fog_vertex: eu, fog_pars_vertex: nu, fog_fragment: iu, fog_pars_fragment: su, gradientmap_pars_fragment: ru, lightmap_pars_fragment: au, lights_lambert_fragment: ou, lights_lambert_pars_fragment: lu, lights_pars_begin: cu, lights_toon_fragment: uu, lights_toon_pars_fragment: du, lights_phong_fragment: fu, lights_phong_pars_fragment: pu, lights_physical_fragment: mu, lights_physical_pars_fragment: gu, lights_fragment_begin: _u, lights_fragment_maps: vu, lights_fragment_end: xu, logdepthbuf_fragment: Mu, logdepthbuf_pars_fragment: Su, logdepthbuf_pars_vertex: Eu, logdepthbuf_vertex: yu, map_fragment: bu, map_pars_fragment: Tu, map_particle_fragment: Au, map_particle_pars_fragment: wu, metalnessmap_fragment: Ru, metalnessmap_pars_fragment: Cu, morphinstance_vertex: Pu, morphcolor_vertex: Du, morphnormal_vertex: Lu, morphtarget_pars_vertex: Iu, morphtarget_vertex: Uu, normal_fragment_begin: Nu, normal_fragment_maps: Fu, normal_pars_fragment: Ou, normal_pars_vertex: Bu, normal_vertex: zu, normalmap_pars_fragment: Hu, clearcoat_normal_fragment_begin: Vu, clearcoat_normal_fragment_maps: ku, clearcoat_pars_fragment: Gu, iridescence_pars_fragment: Wu, opaque_fragment: Xu, packing: Yu, premultiplied_alpha_fragment: qu, project_vertex: $u, dithering_fragment: ju, dithering_pars_fragment: Ku, roughnessmap_fragment: Zu, roughnessmap_pars_fragment: Ju, shadowmap_pars_fragment: Qu, shadowmap_pars_vertex: td, shadowmap_vertex: ed, shadowmask_pars_fragment: nd, skinbase_vertex: id, skinning_pars_vertex: sd, skinning_vertex: rd, skinnormal_vertex: ad, specularmap_fragment: od, specularmap_pars_fragment: ld, tonemapping_fragment: cd, tonemapping_pars_fragment: hd, transmission_fragment: ud, transmission_pars_fragment: dd, uv_pars_fragment: fd, uv_pars_vertex: pd, uv_vertex: md, worldpos_vertex: gd, background_vert: _d, background_frag: vd, backgroundCube_vert: xd, backgroundCube_frag: Md, cube_vert: Sd, cube_frag: Ed, depth_vert: yd, depth_frag: bd, distanceRGBA_vert: Td, distanceRGBA_frag: Ad, equirect_vert: wd, equirect_frag: Rd, linedashed_vert: Cd, linedashed_frag: Pd, meshbasic_vert: Dd, meshbasic_frag: Ld, meshlambert_vert: Id, meshlambert_frag: Ud, meshmatcap_vert: Nd, meshmatcap_frag: Fd, meshnormal_vert: Od, meshnormal_frag: Bd, meshphong_vert: zd, meshphong_frag: Hd, meshphysical_vert: Vd, meshphysical_frag: kd, meshtoon_vert: Gd, meshtoon_frag: Wd, points_vert: Xd, points_frag: Yd, shadow_vert: qd, shadow_frag: $d, sprite_vert: jd, sprite_frag: Kd }, et = { common: { diffuse: { value: new Ut(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Dt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Dt() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Dt() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Dt() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Dt() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Dt() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Dt() }, normalScale: { value: new Ct(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Dt() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Dt() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Dt() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Dt() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ut(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ut(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 }, uvTransform: { value: new Dt() } }, sprite: { diffuse: { value: new Ut(16777215) }, opacity: { value: 1 }, center: { value: new Ct(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Dt() }, alphaMap: { value: null }, alphaMapTransform: { value: new Dt() }, alphaTest: { value: 0 } } }, Ye = { basic: { uniforms: xe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.fog]), vertexShader: It.meshbasic_vert, fragmentShader: It.meshbasic_frag }, lambert: { uniforms: xe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Ut(0) } }]), vertexShader: It.meshlambert_vert, fragmentShader: It.meshlambert_frag }, phong: { uniforms: xe([et.common, et.specularmap, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.fog, et.lights, { emissive: { value: new Ut(0) }, specular: { value: new Ut(1118481) }, shininess: { value: 30 } }]), vertexShader: It.meshphong_vert, fragmentShader: It.meshphong_frag }, standard: { uniforms: xe([et.common, et.envmap, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.roughnessmap, et.metalnessmap, et.fog, et.lights, { emissive: { value: new Ut(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag }, toon: { uniforms: xe([et.common, et.aomap, et.lightmap, et.emissivemap, et.bumpmap, et.normalmap, et.displacementmap, et.gradientmap, et.fog, et.lights, { emissive: { value: new Ut(0) } }]), vertexShader: It.meshtoon_vert, fragmentShader: It.meshtoon_frag }, matcap: { uniforms: xe([et.common, et.bumpmap, et.normalmap, et.displacementmap, et.fog, { matcap: { value: null } }]), vertexShader: It.meshmatcap_vert, fragmentShader: It.meshmatcap_frag }, points: { uniforms: xe([et.points, et.fog]), vertexShader: It.points_vert, fragmentShader: It.points_frag }, dashed: { uniforms: xe([et.common, et.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: It.linedashed_vert, fragmentShader: It.linedashed_frag }, depth: { uniforms: xe([et.common, et.displacementmap]), vertexShader: It.depth_vert, fragmentShader: It.depth_frag }, normal: { uniforms: xe([et.common, et.bumpmap, et.normalmap, et.displacementmap, { opacity: { value: 1 } }]), vertexShader: It.meshnormal_vert, fragmentShader: It.meshnormal_frag }, sprite: { uniforms: xe([et.sprite, et.fog]), vertexShader: It.sprite_vert, fragmentShader: It.sprite_frag }, background: { uniforms: { uvTransform: { value: new Dt() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: It.background_vert, fragmentShader: It.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Dt() } }, vertexShader: It.backgroundCube_vert, fragmentShader: It.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: It.cube_vert, fragmentShader: It.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: It.equirect_vert, fragmentShader: It.equirect_frag }, distanceRGBA: { uniforms: xe([et.common, et.displacementmap, { referencePosition: { value: new I() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: It.distanceRGBA_vert, fragmentShader: It.distanceRGBA_frag }, shadow: { uniforms: xe([et.lights, et.fog, { color: { value: new Ut(0) }, opacity: { value: 1 } }]), vertexShader: It.shadow_vert, fragmentShader: It.shadow_frag } };
Ye.physical = { uniforms: xe([Ye.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Dt() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Dt() }, clearcoatNormalScale: { value: new Ct(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Dt() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Dt() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Dt() }, sheen: { value: 0 }, sheenColor: { value: new Ut(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Dt() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Dt() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Dt() }, transmissionSamplerSize: { value: new Ct() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Dt() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ut(0) }, specularColor: { value: new Ut(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Dt() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Dt() }, anisotropyVector: { value: new Ct() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Dt() } }]), vertexShader: It.meshphysical_vert, fragmentShader: It.meshphysical_frag };
const cs = { r: 0, b: 0, g: 0 }, Cn = new We(), Zd = new te();
function Jd(i, t, e, n, s, r, a) {
  const o = new Ut(0);
  let c = r === true ? 0 : 1, l, h, u = null, f = 0, m = null;
  function g(b) {
    let S = b.isScene === true ? b.background : null;
    return S && S.isTexture && (S = (b.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function v(b) {
    let S = false;
    const U = g(b);
    U === null ? d(o, c) : U && U.isColor && (d(U, 1), S = true);
    const R = i.xr.getEnvironmentBlendMode();
    R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(b, S) {
    const U = g(S);
    U && (U.isCubeTexture || U.mapping === Cs) ? (h === void 0 && (h = new ke(new Oi(1, 1, 1), new En({ name: "BackgroundCubeMaterial", uniforms: hi(Ye.backgroundCube.uniforms), vertexShader: Ye.backgroundCube.vertexShader, fragmentShader: Ye.backgroundCube.fragmentShader, side: Te, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(R, w, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(h)), Cn.copy(S.backgroundRotation), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, U.isCubeTexture && U.isRenderTargetTexture === false && (Cn.y *= -1, Cn.z *= -1), h.material.uniforms.envMap.value = U, h.material.uniforms.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(Cn)), h.material.toneMapped = Gt.getTransfer(U.colorSpace) !== $t, (u !== U || f !== U.version || m !== i.toneMapping) && (h.material.needsUpdate = true, u = U, f = U.version, m = i.toneMapping), h.layers.enableAll(), b.unshift(h, h.geometry, h.material, 0, 0, null)) : U && U.isTexture && (l === void 0 && (l = new ke(new Ds(2, 2), new En({ name: "BackgroundMaterial", uniforms: hi(Ye.background.uniforms), vertexShader: Ye.background.vertexShader, fragmentShader: Ye.background.fragmentShader, side: Sn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(l)), l.material.uniforms.t2D.value = U, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = Gt.getTransfer(U.colorSpace) !== $t, U.matrixAutoUpdate === true && U.updateMatrix(), l.material.uniforms.uvTransform.value.copy(U.matrix), (u !== U || f !== U.version || m !== i.toneMapping) && (l.material.needsUpdate = true, u = U, f = U.version, m = i.toneMapping), l.layers.enableAll(), b.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function d(b, S) {
    b.getRGB(cs, dl(i)), n.buffers.color.setClear(cs.r, cs.g, cs.b, S, a);
  }
  function T() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose(), h = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(b, S = 1) {
    o.set(b), c = S, d(o, c);
  }, getClearAlpha: function() {
    return c;
  }, setClearAlpha: function(b) {
    c = b, d(o, c);
  }, render: v, addToRenderList: p, dispose: T };
}
function Qd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = false;
  function o(M, C, G, z, $) {
    let j = false;
    const Y = u(z, G, C);
    r !== Y && (r = Y, l(r.object)), j = m(M, z, G, $), j && g(M, z, G, $), $ !== null && t.update($, i.ELEMENT_ARRAY_BUFFER), (j || a) && (a = false, S(M, C, G, z), $ !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get($).buffer));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(M) {
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
    return Y === void 0 && (Y = f(c()), j[z] = Y), Y;
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
    for (const V in Z) if (Z[V].location >= 0) {
      const ht = $[V];
      let _t = j[V];
      if (_t === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (_t = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (_t = M.instanceColor)), ht === void 0 || ht.attribute !== _t || _t && ht.data !== _t.data) return true;
      Y++;
    }
    return r.attributesNum !== Y || r.index !== z;
  }
  function g(M, C, G, z) {
    const $ = {}, j = C.attributes;
    let Y = 0;
    const Z = G.getAttributes();
    for (const V in Z) if (Z[V].location >= 0) {
      let ht = j[V];
      ht === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ht = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ht = M.instanceColor));
      const _t = {};
      _t.attribute = ht, ht && ht.data && (_t.data = ht.data), $[V] = _t, Y++;
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
      const V = j[Z];
      if (V.location >= 0) {
        let it = $[Z];
        if (it === void 0 && (Z === "instanceMatrix" && M.instanceMatrix && (it = M.instanceMatrix), Z === "instanceColor" && M.instanceColor && (it = M.instanceColor)), it !== void 0) {
          const ht = it.normalized, _t = it.itemSize, Nt = t.get(it);
          if (Nt === void 0) continue;
          const Kt = Nt.buffer, W = Nt.type, tt = Nt.bytesPerElement, pt = W === i.INT || W === i.UNSIGNED_INT || it.gpuType === da;
          if (it.isInterleavedBufferAttribute) {
            const st = it.data, St = st.stride, Wt = it.offset;
            if (st.isInstancedInterleavedBuffer) {
              for (let Tt = 0; Tt < V.locationSize; Tt++) d(V.location + Tt, st.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = st.meshPerAttribute * st.count);
            } else for (let Tt = 0; Tt < V.locationSize; Tt++) p(V.location + Tt);
            i.bindBuffer(i.ARRAY_BUFFER, Kt);
            for (let Tt = 0; Tt < V.locationSize; Tt++) b(V.location + Tt, _t / V.locationSize, W, ht, St * tt, (Wt + _t / V.locationSize * Tt) * tt, pt);
          } else {
            if (it.isInstancedBufferAttribute) {
              for (let st = 0; st < V.locationSize; st++) d(V.location + st, it.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = it.meshPerAttribute * it.count);
            } else for (let st = 0; st < V.locationSize; st++) p(V.location + st);
            i.bindBuffer(i.ARRAY_BUFFER, Kt);
            for (let st = 0; st < V.locationSize; st++) b(V.location + st, _t / V.locationSize, W, ht, _t * tt, _t / V.locationSize * st * tt, pt);
          }
        } else if (Y !== void 0) {
          const ht = Y[Z];
          if (ht !== void 0) switch (ht.length) {
            case 2:
              i.vertexAttrib2fv(V.location, ht);
              break;
            case 3:
              i.vertexAttrib3fv(V.location, ht);
              break;
            case 4:
              i.vertexAttrib4fv(V.location, ht);
              break;
            default:
              i.vertexAttrib1fv(V.location, ht);
          }
        }
      }
    }
    T();
  }
  function U() {
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
    y(), a = true, r !== s && (r = s, l(r.object));
  }
  function y() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: y, dispose: U, releaseStatesOfGeometry: R, releaseStatesOfProgram: w, initAttributes: v, enableAttribute: p, disableUnusedAttributes: T };
}
function tf(i, t, e) {
  let n;
  function s(l) {
    n = l;
  }
  function r(l, h) {
    i.drawArrays(n, l, h), e.update(h, n, 1);
  }
  function a(l, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, l, h, u), e.update(h, n, u));
  }
  function o(l, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let m = 0;
    for (let g = 0; g < u; g++) m += h[g];
    e.update(m, n, 1);
  }
  function c(l, h, u, f) {
    if (u === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < l.length; g++) a(l[g], h[g], f[g]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, u);
      let g = 0;
      for (let v = 0; v < u; v++) g += h[v] * f[v];
      e.update(g, n, 1);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function ef(i, t, e, n) {
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
    return !(w !== Ve && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const N = w === Ii && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== Ke && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && w !== ln && !N);
  }
  function c(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = e.logarithmicDepthBuffer === true, f = e.reverseDepthBuffer === true && t.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), d = i.getParameter(i.MAX_VERTEX_ATTRIBS), T = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), b = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), U = g > 0, R = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: a, textureTypeReadable: o, precision: l, logarithmicDepthBuffer: u, reverseDepthBuffer: f, maxTextures: m, maxVertexTextures: g, maxTextureSize: v, maxCubemapSize: p, maxAttributes: d, maxVertexUniforms: T, maxVaryings: b, maxFragmentUniforms: S, vertexTextures: U, maxSamples: R };
}
function nf(i) {
  const t = this;
  let e = null, n = 0, s = false, r = false;
  const a = new _n(), o = new Dt(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
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
    if (!s || g === null || g.length === 0 || r && !p) r ? h(null) : l();
    else {
      const T = r ? 0 : n, b = T * 4;
      let S = d.clippingState || null;
      c.value = S, S = h(g, f, b, m);
      for (let U = 0; U !== b; ++U) S[U] = e[U];
      d.clippingState = S, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += T;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, f, m, g) {
    const v = u !== null ? u.length : 0;
    let p = null;
    if (v !== 0) {
      if (p = c.value, g !== true || p === null) {
        const d = m + v * 4, T = f.matrixWorldInverse;
        o.getNormalMatrix(T), (p === null || p.length < d) && (p = new Float32Array(d));
        for (let b = 0, S = m; b !== v; ++b, S += 4) a.copy(u[b]).applyMatrix4(T, o), a.normal.toArray(p, S), p[S + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = true;
    }
    return t.numPlanes = v, t.numIntersection = 0, p;
  }
}
function sf(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Rr ? a.mapping = oi : o === Cr && (a.mapping = li), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Rr || o === Cr) if (t.has(a)) {
        const c = t.get(a).texture;
        return e(c, a.mapping);
      } else {
        const c = a.image;
        if (c && c.height > 0) {
          const l = new Zc(c.height);
          return l.fromEquirectangularTexture(i, a), t.set(a, l), a.addEventListener("dispose", s), e(l.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const ni = 4, go = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], In = 20, cr = new vl(), _o = new Ut();
let hr = null, ur = 0, dr = 0, fr = false;
const Dn = (1 + Math.sqrt(5)) / 2, ti = 1 / Dn, vo = [new I(-Dn, ti, 0), new I(Dn, ti, 0), new I(-ti, 0, Dn), new I(ti, 0, Dn), new I(0, Dn, -ti), new I(0, Dn, ti), new I(-1, 1, -1), new I(1, 1, -1), new I(-1, 1, 1), new I(1, 1, 1)], rf = new I();
class xo {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
    const { size: a = 256, position: o = rf } = r;
    hr = this._renderer.getRenderTarget(), ur = this._renderer.getActiveCubeFace(), dr = this._renderer.getActiveMipmapLevel(), fr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(t, n, s, c, o), e > 0 && this._blur(c, 0, 0, e), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Eo(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = So(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(hr, ur, dr), this._renderer.xr.enabled = fr, t.scissorTest = false, hs(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === oi || t.mapping === li ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), hr = this._renderer.getRenderTarget(), ur = this._renderer.getActiveCubeFace(), dr = this._renderer.getActiveMipmapLevel(), fr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: qe, minFilter: qe, generateMipmaps: false, type: Ii, format: Ve, colorSpace: ci, depthBuffer: false }, s = Mo(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Mo(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = af(r)), this._blurMaterial = of(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new ke(this._lodPlanes[0], t);
    this._renderer.compile(e, cr);
  }
  _sceneToCubeUV(t, e, n, s, r) {
    const c = new Ue(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], h = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, m = u.toneMapping;
    u.getClearColor(_o), u.toneMapping = Mn, u.autoClear = false;
    const g = new cl({ name: "PMREM.Background", side: Te, depthWrite: false, depthTest: false }), v = new ke(new Oi(), g);
    let p = false;
    const d = t.background;
    d ? d.isColor && (g.color.copy(d), t.background = null, p = true) : (g.color.copy(_o), p = true);
    for (let T = 0; T < 6; T++) {
      const b = T % 3;
      b === 0 ? (c.up.set(0, l[T], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + h[T], r.y, r.z)) : b === 1 ? (c.up.set(0, 0, l[T]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + h[T], r.z)) : (c.up.set(0, l[T], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + h[T]));
      const S = this._cubeSize;
      hs(s, b * S, T > 2 ? S : 0, S, S), u.setRenderTarget(s), p && u.render(v, c), u.render(t, c);
    }
    v.geometry.dispose(), v.material.dispose(), u.toneMapping = m, u.autoClear = f, t.background = d;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === oi || t.mapping === li;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Eo()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = So());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new ke(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    hs(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, cr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = vo[(s - r - 1) % vo.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, s, "latitudinal", r), this._halfBlur(a, t, n, n, s, "longitudinal", r);
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new ke(this._lodPlanes[s], l), f = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * In - 1), v = r / g, p = isFinite(r) ? 1 + Math.floor(h * v) : In;
    p > In && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${In}`);
    const d = [];
    let T = 0;
    for (let w = 0; w < In; ++w) {
      const N = w / v, y = Math.exp(-N * N / 2);
      d.push(y), w === 0 ? T += y : w < p && (T += 2 * y);
    }
    for (let w = 0; w < d.length; w++) d[w] = d[w] / T;
    f.envMap.value = t.texture, f.samples.value = p, f.weights.value = d, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: b } = this;
    f.dTheta.value = g, f.mipInt.value = b - n;
    const S = this._sizeLods[s], U = 3 * S * (s > b - ni ? s - b + ni : 0), R = 4 * (this._cubeSize - S);
    hs(e, U, R, 3 * S, 2 * S), c.setRenderTarget(e), c.render(u, cr);
  }
}
function af(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - ni + 1 + go.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let c = 1 / o;
    a > i - ni ? c = go[a - i + ni - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, f = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, v = 3, p = 2, d = 1, T = new Float32Array(v * g * m), b = new Float32Array(p * g * m), S = new Float32Array(d * g * m);
    for (let R = 0; R < m; R++) {
      const w = R % 3 * 2 / 3 - 1, N = R > 2 ? 0 : -1, y = [w, N, 0, w + 2 / 3, N, 0, w + 2 / 3, N + 1, 0, w, N, 0, w + 2 / 3, N + 1, 0, w, N + 1, 0];
      T.set(y, v * g * R), b.set(f, p * g * R);
      const M = [R, R, R, R, R, R];
      S.set(M, d * g * R);
    }
    const U = new Xe();
    U.setAttribute("position", new $e(T, v)), U.setAttribute("uv", new $e(b, p)), U.setAttribute("faceIndex", new $e(S, d)), t.push(U), s > ni && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Mo(i, t, e) {
  const n = new On(i, t, e);
  return n.texture.mapping = Cs, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function hs(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function of(i, t, e) {
  const n = new Float32Array(In), s = new I(0, 1, 0);
  return new En({ name: "SphericalGaussianBlur", defines: { n: In, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: ya(), fragmentShader: `

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
		`, blending: xn, depthTest: false, depthWrite: false });
}
function So() {
  return new En({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ya(), fragmentShader: `

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
		`, blending: xn, depthTest: false, depthWrite: false });
}
function Eo() {
  return new En({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ya(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: xn, depthTest: false, depthWrite: false });
}
function ya() {
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
function lf(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Rr || c === Cr, h = c === oi || c === li;
      if (l || h) {
        let u = t.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new xo(i)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const m = o.image;
          return l && m && m.height > 0 || h && m && s(m) ? (e === null && (e = new xo(i)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++) o[h] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function cf(i) {
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
    return s === null && Ms("THREE.WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function hf(i, t, e, n) {
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
  function c(u) {
    const f = u.attributes;
    for (const m in f) t.update(f[m], i.ARRAY_BUFFER);
  }
  function l(u) {
    const f = [], m = u.index, g = u.attributes.position;
    let v = 0;
    if (m !== null) {
      const T = m.array;
      v = m.version;
      for (let b = 0, S = T.length; b < S; b += 3) {
        const U = T[b + 0], R = T[b + 1], w = T[b + 2];
        f.push(U, R, R, w, w, U);
      }
    } else if (g !== void 0) {
      const T = g.array;
      v = g.version;
      for (let b = 0, S = T.length / 3 - 1; b < S; b += 3) {
        const U = b + 0, R = b + 1, w = b + 2;
        f.push(U, R, R, w, w, U);
      }
    } else return;
    const p = new (rl(f) ? ul : hl)(f, 1);
    p.version = v;
    const d = r.get(u);
    d && t.remove(d), r.set(u, p);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && l(u);
    } else l(u);
    return r.get(u);
  }
  return { get: o, update: c, getWireframeAttribute: h };
}
function uf(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, m) {
    i.drawElements(n, m, r, f * a), e.update(m, n, 1);
  }
  function l(f, m, g) {
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
    if (p === null) for (let d = 0; d < f.length; d++) l(f[d] / a, m[d], v[d]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, v, 0, g);
      let d = 0;
      for (let T = 0; T < g; T++) d += m[T] * v[T];
      e.update(d, n, 1);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function df(i) {
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
function ff(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new se();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
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
      let U = o.attributes.position.count * S, R = 1;
      U > t.maxTextureSize && (R = Math.ceil(U / t.maxTextureSize), U = t.maxTextureSize);
      const w = new Float32Array(U * R * 4 * u), N = new al(w, U, R, u);
      N.type = ln, N.needsUpdate = true;
      const y = S * 4;
      for (let C = 0; C < u; C++) {
        const G = d[C], z = T[C], $ = b[C], j = U * R * 4 * C;
        for (let Y = 0; Y < G.count; Y++) {
          const Z = Y * y;
          g === true && (s.fromBufferAttribute(G, Y), w[j + Z + 0] = s.x, w[j + Z + 1] = s.y, w[j + Z + 2] = s.z, w[j + Z + 3] = 0), v === true && (s.fromBufferAttribute(z, Y), w[j + Z + 4] = s.x, w[j + Z + 5] = s.y, w[j + Z + 6] = s.z, w[j + Z + 7] = 0), p === true && (s.fromBufferAttribute($, Y), w[j + Z + 8] = s.x, w[j + Z + 9] = s.y, w[j + Z + 10] = s.z, w[j + Z + 11] = $.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: u, texture: N, size: new Ct(U, R) }, n.set(o, f), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let g = 0;
      for (let p = 0; p < l.length; p++) g += l[p];
      const v = o.morphTargetsRelative ? 1 : 1 - g;
      c.getUniforms().setValue(i, "morphTargetBaseInfluence", v), c.getUniforms().setValue(i, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function pf(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, u = t.get(c, h);
    if (s.get(u) !== l && (t.update(u), s.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === false && c.addEventListener("dispose", o), s.get(c) !== l && (e.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, i.ARRAY_BUFFER), s.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== l && (f.update(), s.set(f, l));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
const Ml = new _e(), yo = new pl(1, 1), Sl = new al(), El = new Uc(), yl = new Ma(), bo = [], To = [], Ao = new Float32Array(16), wo = new Float32Array(9), Ro = new Float32Array(4);
function di(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = bo[s];
  if (r === void 0 && (r = new Float32Array(s), bo[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, i[a].toArray(r, o);
  }
  return r;
}
function ce(i, t) {
  if (i.length !== t.length) return false;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return false;
  return true;
}
function he(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function Is(i, t) {
  let e = To[t];
  e === void 0 && (e = new Int32Array(t), To[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function mf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function gf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ce(e, t)) return;
    i.uniform2fv(this.addr, t), he(e, t);
  }
}
function _f(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (ce(e, t)) return;
    i.uniform3fv(this.addr, t), he(e, t);
  }
}
function vf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ce(e, t)) return;
    i.uniform4fv(this.addr, t), he(e, t);
  }
}
function xf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    i.uniformMatrix2fv(this.addr, false, t), he(e, t);
  } else {
    if (ce(e, n)) return;
    Ro.set(n), i.uniformMatrix2fv(this.addr, false, Ro), he(e, n);
  }
}
function Mf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    i.uniformMatrix3fv(this.addr, false, t), he(e, t);
  } else {
    if (ce(e, n)) return;
    wo.set(n), i.uniformMatrix3fv(this.addr, false, wo), he(e, n);
  }
}
function Sf(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (ce(e, t)) return;
    i.uniformMatrix4fv(this.addr, false, t), he(e, t);
  } else {
    if (ce(e, n)) return;
    Ao.set(n), i.uniformMatrix4fv(this.addr, false, Ao), he(e, n);
  }
}
function Ef(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function yf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ce(e, t)) return;
    i.uniform2iv(this.addr, t), he(e, t);
  }
}
function bf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ce(e, t)) return;
    i.uniform3iv(this.addr, t), he(e, t);
  }
}
function Tf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ce(e, t)) return;
    i.uniform4iv(this.addr, t), he(e, t);
  }
}
function Af(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function wf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (ce(e, t)) return;
    i.uniform2uiv(this.addr, t), he(e, t);
  }
}
function Rf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (ce(e, t)) return;
    i.uniform3uiv(this.addr, t), he(e, t);
  }
}
function Cf(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (ce(e, t)) return;
    i.uniform4uiv(this.addr, t), he(e, t);
  }
}
function Pf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (yo.compareFunction = sl, r = yo) : r = Ml, e.setTexture2D(t || r, s);
}
function Df(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || El, s);
}
function Lf(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || yl, s);
}
function If(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Sl, s);
}
function Uf(i) {
  switch (i) {
    case 5126:
      return mf;
    case 35664:
      return gf;
    case 35665:
      return _f;
    case 35666:
      return vf;
    case 35674:
      return xf;
    case 35675:
      return Mf;
    case 35676:
      return Sf;
    case 5124:
    case 35670:
      return Ef;
    case 35667:
    case 35671:
      return yf;
    case 35668:
    case 35672:
      return bf;
    case 35669:
    case 35673:
      return Tf;
    case 5125:
      return Af;
    case 36294:
      return wf;
    case 36295:
      return Rf;
    case 36296:
      return Cf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Pf;
    case 35679:
    case 36299:
    case 36307:
      return Df;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Lf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return If;
  }
}
function Nf(i, t) {
  i.uniform1fv(this.addr, t);
}
function Ff(i, t) {
  const e = di(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function Of(i, t) {
  const e = di(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Bf(i, t) {
  const e = di(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function zf(i, t) {
  const e = di(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, e);
}
function Hf(i, t) {
  const e = di(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, e);
}
function Vf(i, t) {
  const e = di(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, e);
}
function kf(i, t) {
  i.uniform1iv(this.addr, t);
}
function Gf(i, t) {
  i.uniform2iv(this.addr, t);
}
function Wf(i, t) {
  i.uniform3iv(this.addr, t);
}
function Xf(i, t) {
  i.uniform4iv(this.addr, t);
}
function Yf(i, t) {
  i.uniform1uiv(this.addr, t);
}
function qf(i, t) {
  i.uniform2uiv(this.addr, t);
}
function $f(i, t) {
  i.uniform3uiv(this.addr, t);
}
function jf(i, t) {
  i.uniform4uiv(this.addr, t);
}
function Kf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  ce(n, r) || (i.uniform1iv(this.addr, r), he(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2D(t[a] || Ml, r[a]);
}
function Zf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  ce(n, r) || (i.uniform1iv(this.addr, r), he(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || El, r[a]);
}
function Jf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  ce(n, r) || (i.uniform1iv(this.addr, r), he(n, r));
  for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || yl, r[a]);
}
function Qf(i, t, e) {
  const n = this.cache, s = t.length, r = Is(e, s);
  ce(n, r) || (i.uniform1iv(this.addr, r), he(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || Sl, r[a]);
}
function tp(i) {
  switch (i) {
    case 5126:
      return Nf;
    case 35664:
      return Ff;
    case 35665:
      return Of;
    case 35666:
      return Bf;
    case 35674:
      return zf;
    case 35675:
      return Hf;
    case 35676:
      return Vf;
    case 5124:
    case 35670:
      return kf;
    case 35667:
    case 35671:
      return Gf;
    case 35668:
    case 35672:
      return Wf;
    case 35669:
    case 35673:
      return Xf;
    case 5125:
      return Yf;
    case 36294:
      return qf;
    case 36295:
      return $f;
    case 36296:
      return jf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kf;
    case 35679:
    case 36299:
    case 36307:
      return Zf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Jf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qf;
  }
}
class ep {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Uf(e.type);
  }
}
class np {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = tp(e.type);
  }
}
class ip {
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
const pr = /(\w+)(\])?(\[|\.)?/g;
function Co(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function sp(i, t, e) {
  const n = i.name, s = n.length;
  for (pr.lastIndex = 0; ; ) {
    const r = pr.exec(n), a = pr.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === s) {
      Co(e, l === void 0 ? new ep(o, i, t) : new np(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new ip(o), Co(e, u)), e = u;
    }
  }
}
class Es {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      sp(r, a, this);
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
      const o = e[r], c = n[o.id];
      c.needsUpdate !== false && o.setValue(t, c.value, s);
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
function Po(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const rp = 37297;
let ap = 0;
function op(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Do = new Dt();
function lp(i) {
  Gt._getMatrix(Do, Gt.workingColorSpace, i);
  const t = `mat3( ${Do.elements.map((e) => e.toFixed(4))} )`;
  switch (Gt.getTransfer(i)) {
    case bs:
      return [t, "LinearTransferOETF"];
    case $t:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [t, "LinearTransferOETF"];
  }
}
function Lo(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + op(i.getShaderSource(t), a);
  } else return s;
}
function cp(i, t) {
  const e = lp(t);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
function hp(i, t) {
  let e;
  switch (t) {
    case rc:
      e = "Linear";
      break;
    case ac:
      e = "Reinhard";
      break;
    case oc:
      e = "Cineon";
      break;
    case lc:
      e = "ACESFilmic";
      break;
    case hc:
      e = "AgX";
      break;
    case uc:
      e = "Neutral";
      break;
    case cc:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const us = new I();
function up() {
  Gt.getLuminanceCoefficients(us);
  const i = us.x.toFixed(4), t = us.y.toFixed(4), e = us.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function dp(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(yi).join(`
`);
}
function fp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function pp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: i.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function yi(i) {
  return i !== "";
}
function Io(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Uo(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const mp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function aa(i) {
  return i.replace(mp, _p);
}
const gp = /* @__PURE__ */ new Map();
function _p(i, t) {
  let e = It[t];
  if (e === void 0) {
    const n = gp.get(t);
    if (n !== void 0) e = It[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return aa(e);
}
const vp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function No(i) {
  return i.replace(vp, xp);
}
function xp(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Fo(i) {
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
function Mp(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === $o ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Bl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === an && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function Sp(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case oi:
    case li:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case Cs:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function Ep(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case li:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function yp(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case ua:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case ic:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case sc:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function bp(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function Tp(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = Mp(e), l = Sp(e), h = Ep(e), u = yp(e), f = bp(e), m = dp(e), g = fp(r), v = s.createProgram();
  let p, d, T = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(yi).join(`
`), p.length > 0 && (p += `
`), d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(yi).join(`
`), d.length > 0 && (d += `
`)) : (p = [Fo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(yi).join(`
`), d = [Fo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + l : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + c : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Mn ? "#define TONE_MAPPING" : "", e.toneMapping !== Mn ? It.tonemapping_pars_fragment : "", e.toneMapping !== Mn ? hp("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", It.colorspace_pars_fragment, cp("linearToOutputTexel", e.outputColorSpace), up(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(yi).join(`
`)), a = aa(a), a = Io(a, e), a = Uo(a, e), o = aa(o), o = Io(o, e), o = Uo(o, e), a = No(a), o = No(o), e.isRawShaderMaterial !== true && (T = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, d = ["#define varying in", e.glslVersion === Ha ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Ha ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
  const b = T + p + a, S = T + d + o, U = Po(s, s.VERTEX_SHADER, b), R = Po(s, s.FRAGMENT_SHADER, S);
  s.attachShader(v, U), s.attachShader(v, R), e.index0AttributeName !== void 0 ? s.bindAttribLocation(v, 0, e.index0AttributeName) : e.morphTargets === true && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v);
  function w(C) {
    if (i.debug.checkShaderErrors) {
      const G = s.getProgramInfoLog(v).trim(), z = s.getShaderInfoLog(U).trim(), $ = s.getShaderInfoLog(R).trim();
      let j = true, Y = true;
      if (s.getProgramParameter(v, s.LINK_STATUS) === false) if (j = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, v, U, R);
      else {
        const Z = Lo(s, U, "vertex"), V = Lo(s, R, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + G + `
` + Z + `
` + V);
      }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (z === "" || $ === "") && (Y = false);
      Y && (C.diagnostics = { runnable: j, programLog: G, vertexShader: { log: z, prefix: p }, fragmentShader: { log: $, prefix: d } });
    }
    s.deleteShader(U), s.deleteShader(R), N = new Es(s, v), y = pp(s, v);
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
    return M === false && (M = s.getProgramParameter(v, rp)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = ap++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = U, this.fragmentShader = R, this;
}
let Ap = 0;
class wp {
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
    return n === void 0 && (n = new Rp(t), e.set(t, n)), n;
  }
}
class Rp {
  constructor(t) {
    this.id = Ap++, this.code = t, this.usedTimes = 0;
  }
}
function Cp(i, t, e, n, s, r, a) {
  const o = new ol(), c = new wp(), l = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.vertexTextures;
  let m = s.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function v(y) {
    return l.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function p(y, M, C, G, z) {
    const $ = G.fog, j = z.geometry, Y = y.isMeshStandardMaterial ? G.environment : null, Z = (y.isMeshStandardMaterial ? e : t).get(y.envMap || Y), V = Z && Z.mapping === Cs ? Z.image.height : null, it = g[y.type];
    y.precision !== null && (m = s.getMaxPrecision(y.precision), m !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", m, "instead."));
    const ht = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, _t = ht !== void 0 ? ht.length : 0;
    let Nt = 0;
    j.morphAttributes.position !== void 0 && (Nt = 1), j.morphAttributes.normal !== void 0 && (Nt = 2), j.morphAttributes.color !== void 0 && (Nt = 3);
    let Kt, W, tt, pt;
    if (it) {
      const qt = Ye[it];
      Kt = qt.vertexShader, W = qt.fragmentShader;
    } else Kt = y.vertexShader, W = y.fragmentShader, c.update(y), tt = c.getVertexShaderID(y), pt = c.getFragmentShaderID(y);
    const st = i.getRenderTarget(), St = i.state.buffers.depth.getReversed(), Wt = z.isInstancedMesh === true, Tt = z.isBatchedMesh === true, re = !!y.map, ee = !!y.matcap, Ot = !!Z, A = !!y.aoMap, Ce = !!y.lightMap, Ht = !!y.bumpMap, Bt = !!y.normalMap, vt = !!y.displacementMap, Jt = !!y.emissiveMap, gt = !!y.metalnessMap, E = !!y.roughnessMap, _ = y.anisotropy > 0, F = y.clearcoat > 0, X = y.dispersion > 0, K = y.iridescence > 0, k = y.sheen > 0, mt = y.transmission > 0, rt = _ && !!y.anisotropyMap, Et = F && !!y.clearcoatMap, yt = F && !!y.clearcoatNormalMap, J = F && !!y.clearcoatRoughnessMap, ut = K && !!y.iridescenceMap, bt = K && !!y.iridescenceThicknessMap, wt = k && !!y.sheenColorMap, dt = k && !!y.sheenRoughnessMap, zt = !!y.specularMap, Lt = !!y.specularColorMap, Zt = !!y.specularIntensityMap, P = mt && !!y.transmissionMap, at = mt && !!y.thicknessMap, H = !!y.gradientMap, q = !!y.alphaMap, lt = y.alphaTest > 0, ot = !!y.alphaHash, Pt = !!y.extensions;
    let ne = Mn;
    y.toneMapped && (st === null || st.isXRRenderTarget === true) && (ne = i.toneMapping);
    const pe = { shaderID: it, shaderType: y.type, shaderName: y.name, vertexShader: Kt, fragmentShader: W, defines: y.defines, customVertexShaderID: tt, customFragmentShaderID: pt, isRawShaderMaterial: y.isRawShaderMaterial === true, glslVersion: y.glslVersion, precision: m, batching: Tt, batchingColor: Tt && z._colorsTexture !== null, instancing: Wt, instancingColor: Wt && z.instanceColor !== null, instancingMorph: Wt && z.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: st === null ? i.outputColorSpace : st.isXRRenderTarget === true ? st.texture.colorSpace : ci, alphaToCoverage: !!y.alphaToCoverage, map: re, matcap: ee, envMap: Ot, envMapMode: Ot && Z.mapping, envMapCubeUVHeight: V, aoMap: A, lightMap: Ce, bumpMap: Ht, normalMap: Bt, displacementMap: f && vt, emissiveMap: Jt, normalMapObjectSpace: Bt && y.normalMapType === mc, normalMapTangentSpace: Bt && y.normalMapType === va, metalnessMap: gt, roughnessMap: E, anisotropy: _, anisotropyMap: rt, clearcoat: F, clearcoatMap: Et, clearcoatNormalMap: yt, clearcoatRoughnessMap: J, dispersion: X, iridescence: K, iridescenceMap: ut, iridescenceThicknessMap: bt, sheen: k, sheenColorMap: wt, sheenRoughnessMap: dt, specularMap: zt, specularColorMap: Lt, specularIntensityMap: Zt, transmission: mt, transmissionMap: P, thicknessMap: at, gradientMap: H, opaque: y.transparent === false && y.blending === si && y.alphaToCoverage === false, alphaMap: q, alphaTest: lt, alphaHash: ot, combine: y.combine, mapUv: re && v(y.map.channel), aoMapUv: A && v(y.aoMap.channel), lightMapUv: Ce && v(y.lightMap.channel), bumpMapUv: Ht && v(y.bumpMap.channel), normalMapUv: Bt && v(y.normalMap.channel), displacementMapUv: vt && v(y.displacementMap.channel), emissiveMapUv: Jt && v(y.emissiveMap.channel), metalnessMapUv: gt && v(y.metalnessMap.channel), roughnessMapUv: E && v(y.roughnessMap.channel), anisotropyMapUv: rt && v(y.anisotropyMap.channel), clearcoatMapUv: Et && v(y.clearcoatMap.channel), clearcoatNormalMapUv: yt && v(y.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: J && v(y.clearcoatRoughnessMap.channel), iridescenceMapUv: ut && v(y.iridescenceMap.channel), iridescenceThicknessMapUv: bt && v(y.iridescenceThicknessMap.channel), sheenColorMapUv: wt && v(y.sheenColorMap.channel), sheenRoughnessMapUv: dt && v(y.sheenRoughnessMap.channel), specularMapUv: zt && v(y.specularMap.channel), specularColorMapUv: Lt && v(y.specularColorMap.channel), specularIntensityMapUv: Zt && v(y.specularIntensityMap.channel), transmissionMapUv: P && v(y.transmissionMap.channel), thicknessMapUv: at && v(y.thicknessMap.channel), alphaMapUv: q && v(y.alphaMap.channel), vertexTangents: !!j.attributes.tangent && (Bt || _), vertexColors: y.vertexColors, vertexAlphas: y.vertexColors === true && !!j.attributes.color && j.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!j.attributes.uv && (re || q), fog: !!$, useFog: y.fog === true, fogExp2: !!$ && $.isFogExp2, flatShading: y.flatShading === true, sizeAttenuation: y.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: St, skinning: z.isSkinnedMesh === true, morphTargets: j.morphAttributes.position !== void 0, morphNormals: j.morphAttributes.normal !== void 0, morphColors: j.morphAttributes.color !== void 0, morphTargetsCount: _t, morphTextureStride: Nt, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: y.dithering, shadowMapEnabled: i.shadowMap.enabled && C.length > 0, shadowMapType: i.shadowMap.type, toneMapping: ne, decodeVideoTexture: re && y.map.isVideoTexture === true && Gt.getTransfer(y.map.colorSpace) === $t, decodeVideoTextureEmissive: Jt && y.emissiveMap.isVideoTexture === true && Gt.getTransfer(y.emissiveMap.colorSpace) === $t, premultipliedAlpha: y.premultipliedAlpha, doubleSided: y.side === on, flipSided: y.side === Te, useDepthPacking: y.depthPacking >= 0, depthPacking: y.depthPacking || 0, index0AttributeName: y.index0AttributeName, extensionClipCullDistance: Pt && y.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Pt && y.extensions.multiDraw === true || Tt) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: y.customProgramCacheKey() };
    return pe.vertexUv1s = l.has(1), pe.vertexUv2s = l.has(2), pe.vertexUv3s = l.has(3), l.clear(), pe;
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
      const G = Ye[M];
      C = qc.clone(G.uniforms);
    } else C = y.uniforms;
    return C;
  }
  function U(y, M) {
    let C;
    for (let G = 0, z = h.length; G < z; G++) {
      const $ = h[G];
      if ($.cacheKey === M) {
        C = $, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new Tp(i, M, y, r), h.push(C)), C;
  }
  function R(y) {
    if (--y.usedTimes === 0) {
      const M = h.indexOf(y);
      h[M] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function w(y) {
    c.remove(y);
  }
  function N() {
    c.dispose();
  }
  return { getParameters: p, getProgramCacheKey: d, getUniforms: S, acquireProgram: U, releaseProgram: R, releaseShaderCache: w, programs: h, dispose: N };
}
function Pp() {
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
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: s, dispose: r };
}
function Dp(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function Oo(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Bo() {
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
  function c(u, f, m, g, v, p) {
    const d = a(u, f, m, g, v, p);
    m.transmission > 0 ? n.unshift(d) : m.transparent === true ? s.unshift(d) : e.unshift(d);
  }
  function l(u, f) {
    e.length > 1 && e.sort(u || Dp), n.length > 1 && n.sort(f || Oo), s.length > 1 && s.sort(f || Oo);
  }
  function h() {
    for (let u = t, f = i.length; u < f; u++) {
      const m = i[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: s, init: r, push: o, unshift: c, finish: h, sort: l };
}
function Lp() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new Bo(), i.set(n, [a])) : s >= r.length ? (a = new Bo(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function Ip() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new I(), color: new Ut() };
        break;
      case "SpotLight":
        e = { position: new I(), direction: new I(), color: new Ut(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new I(), color: new Ut(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new I(), skyColor: new Ut(), groundColor: new Ut() };
        break;
      case "RectAreaLight":
        e = { color: new Ut(), position: new I(), halfWidth: new I(), halfHeight: new I() };
        break;
    }
    return i[t.id] = e, e;
  } };
}
function Up() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ct() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ct() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ct(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[t.id] = e, e;
  } };
}
let Np = 0;
function Fp(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Op(i) {
  const t = new Ip(), e = Up(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new I());
  const s = new I(), r = new te(), a = new te();
  function o(l) {
    let h = 0, u = 0, f = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let m = 0, g = 0, v = 0, p = 0, d = 0, T = 0, b = 0, S = 0, U = 0, R = 0, w = 0;
    l.sort(Fp);
    for (let y = 0, M = l.length; y < M; y++) {
      const C = l[y], G = C.color, z = C.intensity, $ = C.distance, j = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) h += G.r * z, u += G.g * z, f += G.b * z;
      else if (C.isLightProbe) {
        for (let Y = 0; Y < 9; Y++) n.probe[Y].addScaledVector(C.sh.coefficients[Y], z);
        w++;
      } else if (C.isDirectionalLight) {
        const Y = t.get(C);
        if (Y.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Z = C.shadow, V = e.get(C);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = C.shadow.matrix, T++;
        }
        n.directional[m] = Y, m++;
      } else if (C.isSpotLight) {
        const Y = t.get(C);
        Y.position.setFromMatrixPosition(C.matrixWorld), Y.color.copy(G).multiplyScalar(z), Y.distance = $, Y.coneCos = Math.cos(C.angle), Y.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), Y.decay = C.decay, n.spot[v] = Y;
        const Z = C.shadow;
        if (C.map && (n.spotLightMap[U] = C.map, U++, Z.updateMatrices(C), C.castShadow && R++), n.spotLightMatrix[v] = Z.matrix, C.castShadow) {
          const V = e.get(C);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.spotShadow[v] = V, n.spotShadowMap[v] = j, S++;
        }
        v++;
      } else if (C.isRectAreaLight) {
        const Y = t.get(C);
        Y.color.copy(G).multiplyScalar(z), Y.halfWidth.set(C.width * 0.5, 0, 0), Y.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[p] = Y, p++;
      } else if (C.isPointLight) {
        const Y = t.get(C);
        if (Y.color.copy(C.color).multiplyScalar(C.intensity), Y.distance = C.distance, Y.decay = C.decay, C.castShadow) {
          const Z = C.shadow, V = e.get(C);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, V.shadowCameraNear = Z.camera.near, V.shadowCameraFar = Z.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = C.shadow.matrix, b++;
        }
        n.point[g] = Y, g++;
      } else if (C.isHemisphereLight) {
        const Y = t.get(C);
        Y.skyColor.copy(C.color).multiplyScalar(z), Y.groundColor.copy(C.groundColor).multiplyScalar(z), n.hemi[d] = Y, d++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = et.LTC_FLOAT_1, n.rectAreaLTC2 = et.LTC_FLOAT_2) : (n.rectAreaLTC1 = et.LTC_HALF_1, n.rectAreaLTC2 = et.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const N = n.hash;
    (N.directionalLength !== m || N.pointLength !== g || N.spotLength !== v || N.rectAreaLength !== p || N.hemiLength !== d || N.numDirectionalShadows !== T || N.numPointShadows !== b || N.numSpotShadows !== S || N.numSpotMaps !== U || N.numLightProbes !== w) && (n.directional.length = m, n.spot.length = v, n.rectArea.length = p, n.point.length = g, n.hemi.length = d, n.directionalShadow.length = T, n.directionalShadowMap.length = T, n.pointShadow.length = b, n.pointShadowMap.length = b, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = T, n.pointShadowMatrix.length = b, n.spotLightMatrix.length = S + U - R, n.spotLightMap.length = U, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, N.directionalLength = m, N.pointLength = g, N.spotLength = v, N.rectAreaLength = p, N.hemiLength = d, N.numDirectionalShadows = T, N.numPointShadows = b, N.numSpotShadows = S, N.numSpotMaps = U, N.numLightProbes = w, n.version = Np++);
  }
  function c(l, h) {
    let u = 0, f = 0, m = 0, g = 0, v = 0;
    const p = h.matrixWorldInverse;
    for (let d = 0, T = l.length; d < T; d++) {
      const b = l[d];
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
  return { setup: o, setupView: c, state: n };
}
function zo(i) {
  const t = new Op(i), e = [], n = [];
  function s(h) {
    l.camera = h, e.length = 0, n.length = 0;
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
  function c(h) {
    t.setupView(e, h);
  }
  const l = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: s, state: l, setupLights: o, setupLightsView: c, pushLight: r, pushShadow: a };
}
function Bp(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new zo(i), t.set(s, [o])) : r >= a.length ? (o = new zo(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
const zp = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Hp = `uniform sampler2D shadow_pass;
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
function Vp(i, t, e) {
  let n = new Ea();
  const s = new Ct(), r = new Ct(), a = new se(), o = new ih({ depthPacking: pc }), c = new sh(), l = {}, h = e.maxTextureSize, u = { [Sn]: Te, [Te]: Sn, [on]: on }, f = new En({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ct() }, radius: { value: 4 } }, vertexShader: zp, fragmentShader: Hp }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Xe();
  g.setAttribute("position", new $e(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const v = new ke(g, f), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = $o;
  let d = this.type;
  this.render = function(R, w, N) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || R.length === 0) return;
    const y = i.getRenderTarget(), M = i.getActiveCubeFace(), C = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(xn), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    const z = d !== an && this.type === an, $ = d === an && this.type !== an;
    for (let j = 0, Y = R.length; j < Y; j++) {
      const Z = R[j], V = Z.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      s.copy(V.mapSize);
      const it = V.getFrameExtents();
      if (s.multiply(it), r.copy(V.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / it.x), s.x = r.x * it.x, V.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / it.y), s.y = r.y * it.y, V.mapSize.y = r.y)), V.map === null || z === true || $ === true) {
        const _t = this.type !== an ? { minFilter: Ge, magFilter: Ge } : {};
        V.map !== null && V.map.dispose(), V.map = new On(s.x, s.y, _t), V.map.texture.name = Z.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const ht = V.getViewportCount();
      for (let _t = 0; _t < ht; _t++) {
        const Nt = V.getViewport(_t);
        a.set(r.x * Nt.x, r.y * Nt.y, r.x * Nt.z, r.y * Nt.w), G.viewport(a), V.updateMatrices(Z, _t), n = V.getFrustum(), S(w, N, V.camera, Z, this.type);
      }
      V.isPointLightShadow !== true && this.type === an && T(V, N), V.needsUpdate = false;
    }
    d = this.type, p.needsUpdate = false, i.setRenderTarget(y, M, C);
  };
  function T(R, w) {
    const N = t.update(v);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = true, m.needsUpdate = true), R.mapPass === null && (R.mapPass = new On(s.x, s.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(w, null, N, f, v, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(w, null, N, m, v, null);
  }
  function b(R, w, N, y) {
    let M = null;
    const C = N.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (C !== void 0) M = C;
    else if (M = N.isPointLight === true ? c : o, i.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === true) {
      const G = M.uuid, z = w.uuid;
      let $ = l[G];
      $ === void 0 && ($ = {}, l[G] = $);
      let j = $[z];
      j === void 0 && (j = M.clone(), $[z] = j, w.addEventListener("dispose", U)), M = j;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, y === an ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : u[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaToCoverage === true ? 0.5 : w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, N.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const G = i.properties.get(M);
      G.light = N;
    }
    return M;
  }
  function S(R, w, N, y, M) {
    if (R.visible === false) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && M === an) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, R.matrixWorld);
      const z = t.update(R), $ = R.material;
      if (Array.isArray($)) {
        const j = z.groups;
        for (let Y = 0, Z = j.length; Y < Z; Y++) {
          const V = j[Y], it = $[V.materialIndex];
          if (it && it.visible) {
            const ht = b(R, it, y, M);
            R.onBeforeShadow(i, R, w, N, z, ht, V), i.renderBufferDirect(N, null, z, ht, R, V), R.onAfterShadow(i, R, w, N, z, ht, V);
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
  function U(R) {
    R.target.removeEventListener("dispose", U);
    for (const N in l) {
      const y = l[N], M = R.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const kp = { [Sr]: Er, [yr]: Ar, [br]: wr, [ai]: Tr, [Er]: Sr, [Ar]: yr, [wr]: br, [Tr]: ai };
function Gp(i, t) {
  function e() {
    let P = false;
    const at = new se();
    let H = null;
    const q = new se(0, 0, 0, 0);
    return { setMask: function(lt) {
      H !== lt && !P && (i.colorMask(lt, lt, lt, lt), H = lt);
    }, setLocked: function(lt) {
      P = lt;
    }, setClear: function(lt, ot, Pt, ne, pe) {
      pe === true && (lt *= ne, ot *= ne, Pt *= ne), at.set(lt, ot, Pt, ne), q.equals(at) === false && (i.clearColor(lt, ot, Pt, ne), q.copy(at));
    }, reset: function() {
      P = false, H = null, q.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let P = false, at = false, H = null, q = null, lt = null;
    return { setReversed: function(ot) {
      if (at !== ot) {
        const Pt = t.get("EXT_clip_control");
        ot ? Pt.clipControlEXT(Pt.LOWER_LEFT_EXT, Pt.ZERO_TO_ONE_EXT) : Pt.clipControlEXT(Pt.LOWER_LEFT_EXT, Pt.NEGATIVE_ONE_TO_ONE_EXT), at = ot;
        const ne = lt;
        lt = null, this.setClear(ne);
      }
    }, getReversed: function() {
      return at;
    }, setTest: function(ot) {
      ot ? st(i.DEPTH_TEST) : St(i.DEPTH_TEST);
    }, setMask: function(ot) {
      H !== ot && !P && (i.depthMask(ot), H = ot);
    }, setFunc: function(ot) {
      if (at && (ot = kp[ot]), q !== ot) {
        switch (ot) {
          case Sr:
            i.depthFunc(i.NEVER);
            break;
          case Er:
            i.depthFunc(i.ALWAYS);
            break;
          case yr:
            i.depthFunc(i.LESS);
            break;
          case ai:
            i.depthFunc(i.LEQUAL);
            break;
          case br:
            i.depthFunc(i.EQUAL);
            break;
          case Tr:
            i.depthFunc(i.GEQUAL);
            break;
          case Ar:
            i.depthFunc(i.GREATER);
            break;
          case wr:
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
    let P = false, at = null, H = null, q = null, lt = null, ot = null, Pt = null, ne = null, pe = null;
    return { setTest: function(qt) {
      P || (qt ? st(i.STENCIL_TEST) : St(i.STENCIL_TEST));
    }, setMask: function(qt) {
      at !== qt && !P && (i.stencilMask(qt), at = qt);
    }, setFunc: function(qt, Ne, Je) {
      (H !== qt || q !== Ne || lt !== Je) && (i.stencilFunc(qt, Ne, Je), H = qt, q = Ne, lt = Je);
    }, setOp: function(qt, Ne, Je) {
      (ot !== qt || Pt !== Ne || ne !== Je) && (i.stencilOp(qt, Ne, Je), ot = qt, Pt = Ne, ne = Je);
    }, setLocked: function(qt) {
      P = qt;
    }, setClear: function(qt) {
      pe !== qt && (i.clearStencil(qt), pe = qt);
    }, reset: function() {
      P = false, at = null, H = null, q = null, lt = null, ot = null, Pt = null, ne = null, pe = null;
    } };
  }
  const r = new e(), a = new n(), o = new s(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, T = null, b = null, S = null, U = null, R = null, w = new Ut(0, 0, 0), N = 0, y = false, M = null, C = null, G = null, z = null, $ = null;
  const j = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = false, Z = 0;
  const V = i.getParameter(i.VERSION);
  V.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(V)[1]), Y = Z >= 1) : V.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), Y = Z >= 2);
  let it = null, ht = {};
  const _t = i.getParameter(i.SCISSOR_BOX), Nt = i.getParameter(i.VIEWPORT), Kt = new se().fromArray(_t), W = new se().fromArray(Nt);
  function tt(P, at, H, q) {
    const lt = new Uint8Array(4), ot = i.createTexture();
    i.bindTexture(P, ot), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Pt = 0; Pt < H; Pt++) P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(at, 0, i.RGBA, 1, 1, q, 0, i.RGBA, i.UNSIGNED_BYTE, lt) : i.texImage2D(at + Pt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, lt);
    return ot;
  }
  const pt = {};
  pt[i.TEXTURE_2D] = tt(i.TEXTURE_2D, i.TEXTURE_2D, 1), pt[i.TEXTURE_CUBE_MAP] = tt(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), pt[i.TEXTURE_2D_ARRAY] = tt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), pt[i.TEXTURE_3D] = tt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), st(i.DEPTH_TEST), a.setFunc(ai), Ht(false), Bt(Ua), st(i.CULL_FACE), A(xn);
  function st(P) {
    h[P] !== true && (i.enable(P), h[P] = true);
  }
  function St(P) {
    h[P] !== false && (i.disable(P), h[P] = false);
  }
  function Wt(P, at) {
    return u[P] !== at ? (i.bindFramebuffer(P, at), u[P] = at, P === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = at), P === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = at), true) : false;
  }
  function Tt(P, at) {
    let H = m, q = false;
    if (P) {
      H = f.get(at), H === void 0 && (H = [], f.set(at, H));
      const lt = P.textures;
      if (H.length !== lt.length || H[0] !== i.COLOR_ATTACHMENT0) {
        for (let ot = 0, Pt = lt.length; ot < Pt; ot++) H[ot] = i.COLOR_ATTACHMENT0 + ot;
        H.length = lt.length, q = true;
      }
    } else H[0] !== i.BACK && (H[0] = i.BACK, q = true);
    q && i.drawBuffers(H);
  }
  function re(P) {
    return g !== P ? (i.useProgram(P), g = P, true) : false;
  }
  const ee = { [Ln]: i.FUNC_ADD, [Hl]: i.FUNC_SUBTRACT, [Vl]: i.FUNC_REVERSE_SUBTRACT };
  ee[kl] = i.MIN, ee[Gl] = i.MAX;
  const Ot = { [Wl]: i.ZERO, [Xl]: i.ONE, [Yl]: i.SRC_COLOR, [xr]: i.SRC_ALPHA, [Jl]: i.SRC_ALPHA_SATURATE, [Kl]: i.DST_COLOR, [$l]: i.DST_ALPHA, [ql]: i.ONE_MINUS_SRC_COLOR, [Mr]: i.ONE_MINUS_SRC_ALPHA, [Zl]: i.ONE_MINUS_DST_COLOR, [jl]: i.ONE_MINUS_DST_ALPHA, [Ql]: i.CONSTANT_COLOR, [tc]: i.ONE_MINUS_CONSTANT_COLOR, [ec]: i.CONSTANT_ALPHA, [nc]: i.ONE_MINUS_CONSTANT_ALPHA };
  function A(P, at, H, q, lt, ot, Pt, ne, pe, qt) {
    if (P === xn) {
      v === true && (St(i.BLEND), v = false);
      return;
    }
    if (v === false && (st(i.BLEND), v = true), P !== zl) {
      if (P !== p || qt !== y) {
        if ((d !== Ln || S !== Ln) && (i.blendEquation(i.FUNC_ADD), d = Ln, S = Ln), qt) switch (P) {
          case si:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Na:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case Fa:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case Oa:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        else switch (P) {
          case si:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case Na:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case Fa:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case Oa:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        T = null, b = null, U = null, R = null, w.set(0, 0, 0), N = 0, p = P, y = qt;
      }
      return;
    }
    lt = lt || at, ot = ot || H, Pt = Pt || q, (at !== d || lt !== S) && (i.blendEquationSeparate(ee[at], ee[lt]), d = at, S = lt), (H !== T || q !== b || ot !== U || Pt !== R) && (i.blendFuncSeparate(Ot[H], Ot[q], Ot[ot], Ot[Pt]), T = H, b = q, U = ot, R = Pt), (ne.equals(w) === false || pe !== N) && (i.blendColor(ne.r, ne.g, ne.b, pe), w.copy(ne), N = pe), p = P, y = false;
  }
  function Ce(P, at) {
    P.side === on ? St(i.CULL_FACE) : st(i.CULL_FACE);
    let H = P.side === Te;
    at && (H = !H), Ht(H), P.blending === si && P.transparent === false ? A(xn) : A(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), r.setMask(P.colorWrite);
    const q = P.stencilWrite;
    o.setTest(q), q && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), Jt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === true ? st(i.SAMPLE_ALPHA_TO_COVERAGE) : St(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ht(P) {
    M !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = P);
  }
  function Bt(P) {
    P !== Fl ? (st(i.CULL_FACE), P !== C && (P === Ua ? i.cullFace(i.BACK) : P === Ol ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : St(i.CULL_FACE), C = P;
  }
  function vt(P) {
    P !== G && (Y && i.lineWidth(P), G = P);
  }
  function Jt(P, at, H) {
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
  function k() {
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
  function wt(P) {
    Kt.equals(P) === false && (i.scissor(P.x, P.y, P.z, P.w), Kt.copy(P));
  }
  function dt(P) {
    W.equals(P) === false && (i.viewport(P.x, P.y, P.z, P.w), W.copy(P));
  }
  function zt(P, at) {
    let H = l.get(at);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), l.set(at, H));
    let q = H.get(P);
    q === void 0 && (q = i.getUniformBlockIndex(at, P.name), H.set(P, q));
  }
  function Lt(P, at) {
    const q = l.get(at).get(P);
    c.get(at) !== q && (i.uniformBlockBinding(at, q, P.__bindingPointIndex), c.set(at, q));
  }
  function Zt() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), h = {}, it = null, ht = {}, u = {}, f = /* @__PURE__ */ new WeakMap(), m = [], g = null, v = false, p = null, d = null, T = null, b = null, S = null, U = null, R = null, w = new Ut(0, 0, 0), N = 0, y = false, M = null, C = null, G = null, z = null, $ = null, Kt.set(0, 0, i.canvas.width, i.canvas.height), W.set(0, 0, i.canvas.width, i.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: st, disable: St, bindFramebuffer: Wt, drawBuffers: Tt, useProgram: re, setBlending: A, setMaterial: Ce, setFlipSided: Ht, setCullFace: Bt, setLineWidth: vt, setPolygonOffset: Jt, setScissorTest: gt, activeTexture: E, bindTexture: _, unbindTexture: F, compressedTexImage2D: X, compressedTexImage3D: K, texImage2D: ut, texImage3D: bt, updateUBOMapping: zt, uniformBlockBinding: Lt, texStorage2D: yt, texStorage3D: J, texSubImage2D: k, texSubImage3D: mt, compressedTexSubImage2D: rt, compressedTexSubImage3D: Et, scissor: wt, viewport: dt, reset: Zt };
}
function Wp(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new Ct(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, _) {
    return m ? new OffscreenCanvas(E, _) : Pi("canvas");
  }
  function v(E, _, F) {
    let X = 1;
    const K = gt(E);
    if ((K.width > F || K.height > F) && (X = F / Math.max(K.width, K.height)), X < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const k = Math.floor(X * K.width), mt = Math.floor(X * K.height);
      u === void 0 && (u = g(k, mt));
      const rt = _ ? g(k, mt) : u;
      return rt.width = k, rt.height = mt, rt.getContext("2d").drawImage(E, 0, 0, k, mt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + K.width + "x" + K.height + ") to (" + k + "x" + mt + ")."), rt;
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
    let k = _;
    if (_ === i.RED && (F === i.FLOAT && (k = i.R32F), F === i.HALF_FLOAT && (k = i.R16F), F === i.UNSIGNED_BYTE && (k = i.R8)), _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.R8UI), F === i.UNSIGNED_SHORT && (k = i.R16UI), F === i.UNSIGNED_INT && (k = i.R32UI), F === i.BYTE && (k = i.R8I), F === i.SHORT && (k = i.R16I), F === i.INT && (k = i.R32I)), _ === i.RG && (F === i.FLOAT && (k = i.RG32F), F === i.HALF_FLOAT && (k = i.RG16F), F === i.UNSIGNED_BYTE && (k = i.RG8)), _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RG8UI), F === i.UNSIGNED_SHORT && (k = i.RG16UI), F === i.UNSIGNED_INT && (k = i.RG32UI), F === i.BYTE && (k = i.RG8I), F === i.SHORT && (k = i.RG16I), F === i.INT && (k = i.RG32I)), _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RGB8UI), F === i.UNSIGNED_SHORT && (k = i.RGB16UI), F === i.UNSIGNED_INT && (k = i.RGB32UI), F === i.BYTE && (k = i.RGB8I), F === i.SHORT && (k = i.RGB16I), F === i.INT && (k = i.RGB32I)), _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (k = i.RGBA8UI), F === i.UNSIGNED_SHORT && (k = i.RGBA16UI), F === i.UNSIGNED_INT && (k = i.RGBA32UI), F === i.BYTE && (k = i.RGBA8I), F === i.SHORT && (k = i.RGBA16I), F === i.INT && (k = i.RGBA32I)), _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (k = i.RGB9_E5), _ === i.RGBA) {
      const mt = K ? bs : Gt.getTransfer(X);
      F === i.FLOAT && (k = i.RGBA32F), F === i.HALF_FLOAT && (k = i.RGBA16F), F === i.UNSIGNED_BYTE && (k = mt === $t ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (k = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (k = i.RGB5_A1);
    }
    return (k === i.R16F || k === i.R32F || k === i.RG16F || k === i.RG32F || k === i.RGBA16F || k === i.RGBA32F) && t.get("EXT_color_buffer_float"), k;
  }
  function S(E, _) {
    let F;
    return E ? _ === null || _ === Fn || _ === wi ? F = i.DEPTH24_STENCIL8 : _ === ln ? F = i.DEPTH32F_STENCIL8 : _ === Ai && (F = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Fn || _ === wi ? F = i.DEPTH_COMPONENT24 : _ === ln ? F = i.DEPTH_COMPONENT32F : _ === Ai && (F = i.DEPTH_COMPONENT16), F;
  }
  function U(E, _) {
    return p(E) === true || E.isFramebufferTexture && E.minFilter !== Ge && E.minFilter !== qe ? Math.log2(Math.max(_.width, _.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? _.mipmaps.length : 1;
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
      const k = n.get(F[X]);
      k.__webglTexture && (i.deleteTexture(k.__webglTexture), a.memory.textures--), n.remove(F[X]);
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
  function V(E, _) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      tt(F, E, _);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _);
  }
  const it = { [Pr]: i.REPEAT, [Un]: i.CLAMP_TO_EDGE, [Dr]: i.MIRRORED_REPEAT }, ht = { [Ge]: i.NEAREST, [dc]: i.NEAREST_MIPMAP_NEAREST, [Vi]: i.NEAREST_MIPMAP_LINEAR, [qe]: i.LINEAR, [Os]: i.LINEAR_MIPMAP_NEAREST, [Nn]: i.LINEAR_MIPMAP_LINEAR }, _t = { [gc]: i.NEVER, [Ec]: i.ALWAYS, [_c]: i.LESS, [sl]: i.LEQUAL, [vc]: i.EQUAL, [Sc]: i.GEQUAL, [xc]: i.GREATER, [Mc]: i.NOTEQUAL };
  function Nt(E, _) {
    if (_.type === ln && t.has("OES_texture_float_linear") === false && (_.magFilter === qe || _.magFilter === Os || _.magFilter === Vi || _.magFilter === Nn || _.minFilter === qe || _.minFilter === Os || _.minFilter === Vi || _.minFilter === Nn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, it[_.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, it[_.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, it[_.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ht[_.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ht[_.minFilter]), _.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, _t[_.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (_.magFilter === Ge || _.minFilter !== Vi && _.minFilter !== Nn || _.type === ln && t.has("OES_texture_float_linear") === false) return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const F = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())), n.get(_).__currentAnisotropy = _.anisotropy;
      }
    }
  }
  function Kt(E, _) {
    let F = false;
    E.__webglInit === void 0 && (E.__webglInit = true, _.addEventListener("dispose", R));
    const X = _.source;
    let K = f.get(X);
    K === void 0 && (K = {}, f.set(X, K));
    const k = $(_);
    if (k !== E.__cacheKey) {
      K[k] === void 0 && (K[k] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), K[k].usedTimes++;
      const mt = K[E.__cacheKey];
      mt !== void 0 && (K[E.__cacheKey].usedTimes--, mt.usedTimes === 0 && y(_)), E.__cacheKey = k, E.__webglTexture = K[k].texture;
    }
    return F;
  }
  function W(E, _, F) {
    let X = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY), _.isData3DTexture && (X = i.TEXTURE_3D);
    const K = Kt(E, _), k = _.source;
    e.bindTexture(X, E.__webglTexture, i.TEXTURE0 + F);
    const mt = n.get(k);
    if (k.version !== mt.__version || K === true) {
      e.activeTexture(i.TEXTURE0 + F);
      const rt = Gt.getPrimaries(Gt.workingColorSpace), Et = _.colorSpace === vn ? null : Gt.getPrimaries(_.colorSpace), yt = _.colorSpace === vn || rt === Et ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, yt);
      let J = v(_.image, false, s.maxTextureSize);
      J = Jt(_, J);
      const ut = r.convert(_.format, _.colorSpace), bt = r.convert(_.type);
      let wt = b(_.internalFormat, ut, bt, _.colorSpace, _.isVideoTexture);
      Nt(X, _);
      let dt;
      const zt = _.mipmaps, Lt = _.isVideoTexture !== true, Zt = mt.__version === void 0 || K === true, P = k.dataReady, at = U(_, J);
      if (_.isDepthTexture) wt = S(_.format === Ci, _.type), Zt && (Lt ? e.texStorage2D(i.TEXTURE_2D, 1, wt, J.width, J.height) : e.texImage2D(i.TEXTURE_2D, 0, wt, J.width, J.height, 0, ut, bt, null));
      else if (_.isDataTexture) if (zt.length > 0) {
        Lt && Zt && e.texStorage2D(i.TEXTURE_2D, at, wt, zt[0].width, zt[0].height);
        for (let H = 0, q = zt.length; H < q; H++) dt = zt[H], Lt ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, bt, dt.data) : e.texImage2D(i.TEXTURE_2D, H, wt, dt.width, dt.height, 0, ut, bt, dt.data);
        _.generateMipmaps = false;
      } else Lt ? (Zt && e.texStorage2D(i.TEXTURE_2D, at, wt, J.width, J.height), P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, J.width, J.height, ut, bt, J.data)) : e.texImage2D(i.TEXTURE_2D, 0, wt, J.width, J.height, 0, ut, bt, J.data);
      else if (_.isCompressedTexture) if (_.isCompressedArrayTexture) {
        Lt && Zt && e.texStorage3D(i.TEXTURE_2D_ARRAY, at, wt, zt[0].width, zt[0].height, J.depth);
        for (let H = 0, q = zt.length; H < q; H++) if (dt = zt[H], _.format !== Ve) if (ut !== null) if (Lt) {
          if (P) if (_.layerUpdates.size > 0) {
            const lt = mo(dt.width, dt.height, _.format, _.type);
            for (const ot of _.layerUpdates) {
              const Pt = dt.data.subarray(ot * lt / dt.data.BYTES_PER_ELEMENT, (ot + 1) * lt / dt.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, ot, dt.width, dt.height, 1, ut, Pt);
            }
            _.clearLayerUpdates();
          } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ut, dt.data);
        } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, H, wt, dt.width, dt.height, J.depth, 0, dt.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Lt ? P && e.texSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, dt.width, dt.height, J.depth, ut, bt, dt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, H, wt, dt.width, dt.height, J.depth, 0, ut, bt, dt.data);
      } else {
        Lt && Zt && e.texStorage2D(i.TEXTURE_2D, at, wt, zt[0].width, zt[0].height);
        for (let H = 0, q = zt.length; H < q; H++) dt = zt[H], _.format !== Ve ? ut !== null ? Lt ? P && e.compressedTexSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, dt.data) : e.compressedTexImage2D(i.TEXTURE_2D, H, wt, dt.width, dt.height, 0, dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Lt ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, dt.width, dt.height, ut, bt, dt.data) : e.texImage2D(i.TEXTURE_2D, H, wt, dt.width, dt.height, 0, ut, bt, dt.data);
      }
      else if (_.isDataArrayTexture) if (Lt) {
        if (Zt && e.texStorage3D(i.TEXTURE_2D_ARRAY, at, wt, J.width, J.height, J.depth), P) if (_.layerUpdates.size > 0) {
          const H = mo(J.width, J.height, _.format, _.type);
          for (const q of _.layerUpdates) {
            const lt = J.data.subarray(q * H / J.data.BYTES_PER_ELEMENT, (q + 1) * H / J.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, J.width, J.height, 1, ut, bt, lt);
          }
          _.clearLayerUpdates();
        } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, ut, bt, J.data);
      } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, wt, J.width, J.height, J.depth, 0, ut, bt, J.data);
      else if (_.isData3DTexture) Lt ? (Zt && e.texStorage3D(i.TEXTURE_3D, at, wt, J.width, J.height, J.depth), P && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, ut, bt, J.data)) : e.texImage3D(i.TEXTURE_3D, 0, wt, J.width, J.height, J.depth, 0, ut, bt, J.data);
      else if (_.isFramebufferTexture) {
        if (Zt) if (Lt) e.texStorage2D(i.TEXTURE_2D, at, wt, J.width, J.height);
        else {
          let H = J.width, q = J.height;
          for (let lt = 0; lt < at; lt++) e.texImage2D(i.TEXTURE_2D, lt, wt, H, q, 0, ut, bt, null), H >>= 1, q >>= 1;
        }
      } else if (zt.length > 0) {
        if (Lt && Zt) {
          const H = gt(zt[0]);
          e.texStorage2D(i.TEXTURE_2D, at, wt, H.width, H.height);
        }
        for (let H = 0, q = zt.length; H < q; H++) dt = zt[H], Lt ? P && e.texSubImage2D(i.TEXTURE_2D, H, 0, 0, ut, bt, dt) : e.texImage2D(i.TEXTURE_2D, H, wt, ut, bt, dt);
        _.generateMipmaps = false;
      } else if (Lt) {
        if (Zt) {
          const H = gt(J);
          e.texStorage2D(i.TEXTURE_2D, at, wt, H.width, H.height);
        }
        P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ut, bt, J);
      } else e.texImage2D(i.TEXTURE_2D, 0, wt, ut, bt, J);
      p(_) && d(X), mt.__version = k.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function tt(E, _, F) {
    if (_.image.length !== 6) return;
    const X = Kt(E, _), K = _.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + F);
    const k = n.get(K);
    if (K.version !== k.__version || X === true) {
      e.activeTexture(i.TEXTURE0 + F);
      const mt = Gt.getPrimaries(Gt.workingColorSpace), rt = _.colorSpace === vn ? null : Gt.getPrimaries(_.colorSpace), Et = _.colorSpace === vn || mt === rt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Et);
      const yt = _.isCompressedTexture || _.image[0].isCompressedTexture, J = _.image[0] && _.image[0].isDataTexture, ut = [];
      for (let q = 0; q < 6; q++) !yt && !J ? ut[q] = v(_.image[q], true, s.maxCubemapSize) : ut[q] = J ? _.image[q].image : _.image[q], ut[q] = Jt(_, ut[q]);
      const bt = ut[0], wt = r.convert(_.format, _.colorSpace), dt = r.convert(_.type), zt = b(_.internalFormat, wt, dt, _.colorSpace), Lt = _.isVideoTexture !== true, Zt = k.__version === void 0 || X === true, P = K.dataReady;
      let at = U(_, bt);
      Nt(i.TEXTURE_CUBE_MAP, _);
      let H;
      if (yt) {
        Lt && Zt && e.texStorage2D(i.TEXTURE_CUBE_MAP, at, zt, bt.width, bt.height);
        for (let q = 0; q < 6; q++) {
          H = ut[q].mipmaps;
          for (let lt = 0; lt < H.length; lt++) {
            const ot = H[lt];
            _.format !== Ve ? wt !== null ? Lt ? P && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, 0, 0, ot.width, ot.height, wt, ot.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, zt, ot.width, ot.height, 0, ot.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Lt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, 0, 0, ot.width, ot.height, wt, dt, ot.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt, zt, ot.width, ot.height, 0, wt, dt, ot.data);
          }
        }
      } else {
        if (H = _.mipmaps, Lt && Zt) {
          H.length > 0 && at++;
          const q = gt(ut[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, at, zt, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if (J) {
          Lt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, ut[q].width, ut[q].height, wt, dt, ut[q].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, zt, ut[q].width, ut[q].height, 0, wt, dt, ut[q].data);
          for (let lt = 0; lt < H.length; lt++) {
            const Pt = H[lt].image[q].image;
            Lt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, 0, 0, Pt.width, Pt.height, wt, dt, Pt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, zt, Pt.width, Pt.height, 0, wt, dt, Pt.data);
          }
        } else {
          Lt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, wt, dt, ut[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, zt, wt, dt, ut[q]);
          for (let lt = 0; lt < H.length; lt++) {
            const ot = H[lt];
            Lt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, 0, 0, wt, dt, ot.image[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, lt + 1, zt, wt, dt, ot.image[q]);
          }
        }
      }
      p(_) && d(i.TEXTURE_CUBE_MAP), k.__version = K.version, _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function pt(E, _, F, X, K, k) {
    const mt = r.convert(F.format, F.colorSpace), rt = r.convert(F.type), Et = b(F.internalFormat, mt, rt, F.colorSpace), yt = n.get(_), J = n.get(F);
    if (J.__renderTarget = _, !yt.__hasExternalTextures) {
      const ut = Math.max(1, _.width >> k), bt = Math.max(1, _.height >> k);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY ? e.texImage3D(K, k, Et, ut, bt, _.depth, 0, mt, rt, null) : e.texImage2D(K, k, Et, ut, bt, 0, mt, rt, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, E), Bt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, K, J.__webglTexture, 0, Ht(_)) : (K === i.TEXTURE_2D || K >= i.TEXTURE_CUBE_MAP_POSITIVE_X && K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, K, J.__webglTexture, k), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function st(E, _, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer) {
      const X = _.depthTexture, K = X && X.isDepthTexture ? X.type : null, k = S(_.stencilBuffer, K), mt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, rt = Ht(_);
      Bt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, rt, k, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, rt, k, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, k, _.width, _.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, mt, i.RENDERBUFFER, E);
    } else {
      const X = _.textures;
      for (let K = 0; K < X.length; K++) {
        const k = X[K], mt = r.convert(k.format, k.colorSpace), rt = r.convert(k.type), Et = b(k.internalFormat, mt, rt, k.colorSpace), yt = Ht(_);
        F && Bt(_) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, yt, Et, _.width, _.height) : Bt(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, yt, Et, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, Et, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function St(E, _) {
    if (_ && _.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, E), !(_.depthTexture && _.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const X = n.get(_.depthTexture);
    X.__renderTarget = _, (!X.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width, _.depthTexture.image.height = _.height, _.depthTexture.needsUpdate = true), j(_.depthTexture, 0);
    const K = X.__webglTexture, k = Ht(_);
    if (_.depthTexture.format === Ri) Bt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else if (_.depthTexture.format === Ci) Bt(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0, k) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Wt(E) {
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
        const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = _.__webglDepthbuffer[X];
        i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
      }
    } else {
      const X = E.texture.mipmaps;
      if (X && X.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer), _.__webglDepthbuffer === void 0) _.__webglDepthbuffer = i.createRenderbuffer(), st(_.__webglDepthbuffer, E, false);
      else {
        const K = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, k = _.__webglDepthbuffer;
        i.bindRenderbuffer(i.RENDERBUFFER, k), i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, k);
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Tt(E, _, F) {
    const X = n.get(E);
    _ !== void 0 && pt(X.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), F !== void 0 && Wt(E);
  }
  function re(E) {
    const _ = E.texture, F = n.get(E), X = n.get(_);
    E.addEventListener("dispose", w);
    const K = E.textures, k = E.isWebGLCubeRenderTarget === true, mt = K.length > 1;
    if (mt || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()), X.__version = _.version, a.memory.textures++), k) {
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
      if (E.samples > 0 && Bt(E) === false) {
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let rt = 0; rt < K.length; rt++) {
          const Et = K[rt];
          F.__webglColorRenderbuffer[rt] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[rt]);
          const yt = r.convert(Et.format, Et.colorSpace), J = r.convert(Et.type), ut = b(Et.internalFormat, yt, J, Et.colorSpace, E.isXRRenderTarget === true), bt = Ht(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, bt, ut, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + rt, i.RENDERBUFFER, F.__webglColorRenderbuffer[rt]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), st(F.__webglDepthRenderbuffer, E, true)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (k) {
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
    E.depthBuffer && Wt(E);
  }
  function ee(E) {
    const _ = E.textures;
    for (let F = 0, X = _.length; F < X; F++) {
      const K = _[F];
      if (p(K)) {
        const k = T(E), mt = n.get(K).__webglTexture;
        e.bindTexture(k, mt), d(k), e.unbindTexture();
      }
    }
  }
  const Ot = [], A = [];
  function Ce(E) {
    if (E.samples > 0) {
      if (Bt(E) === false) {
        const _ = E.textures, F = E.width, X = E.height;
        let K = i.COLOR_BUFFER_BIT;
        const k = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, mt = n.get(E), rt = _.length > 1;
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
          i.blitFramebuffer(0, 0, F, X, 0, 0, F, X, K, i.NEAREST), c === true && (Ot.length = 0, A.length = 0, Ot.push(i.COLOR_ATTACHMENT0 + yt), E.depthBuffer && E.resolveDepthBuffer === false && (Ot.push(k), A.push(k), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, A)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ot));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), rt) for (let yt = 0; yt < _.length; yt++) {
          e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.RENDERBUFFER, mt.__webglColorRenderbuffer[yt]);
          const J = n.get(_[yt]).__webglTexture;
          e.bindFramebuffer(i.FRAMEBUFFER, mt.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + yt, i.TEXTURE_2D, J, 0);
        }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, mt.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && c) {
        const _ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_]);
      }
    }
  }
  function Ht(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function Bt(E) {
    const _ = n.get(E);
    return E.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && _.__useRenderToTexture !== false;
  }
  function vt(E) {
    const _ = a.render.frame;
    h.get(E) !== _ && (h.set(E, _), E.update());
  }
  function Jt(E, _) {
    const F = E.colorSpace, X = E.format, K = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || F !== ci && F !== vn && (Gt.getTransfer(F) === $t ? (X !== Ve || K !== Ke) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), _;
  }
  function gt(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (l.width = E.naturalWidth || E.width, l.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (l.width = E.displayWidth, l.height = E.displayHeight) : (l.width = E.width, l.height = E.height), l;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = G, this.setTexture2D = j, this.setTexture2DArray = Y, this.setTexture3D = Z, this.setTextureCube = V, this.rebindTextures = Tt, this.setupRenderTarget = re, this.updateRenderTargetMipmap = ee, this.updateMultisampleRenderTarget = Ce, this.setupDepthRenderbuffer = Wt, this.setupFrameBufferTexture = pt, this.useMultisampledRTT = Bt;
}
function Xp(i, t) {
  function e(n, s = vn) {
    let r;
    const a = Gt.getTransfer(s);
    if (n === Ke) return i.UNSIGNED_BYTE;
    if (n === fa) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === pa) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Jo) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Ko) return i.BYTE;
    if (n === Zo) return i.SHORT;
    if (n === Ai) return i.UNSIGNED_SHORT;
    if (n === da) return i.INT;
    if (n === Fn) return i.UNSIGNED_INT;
    if (n === ln) return i.FLOAT;
    if (n === Ii) return i.HALF_FLOAT;
    if (n === Qo) return i.ALPHA;
    if (n === tl) return i.RGB;
    if (n === Ve) return i.RGBA;
    if (n === Ri) return i.DEPTH_COMPONENT;
    if (n === Ci) return i.DEPTH_STENCIL;
    if (n === el) return i.RED;
    if (n === ma) return i.RED_INTEGER;
    if (n === nl) return i.RG;
    if (n === ga) return i.RG_INTEGER;
    if (n === _a) return i.RGBA_INTEGER;
    if (n === ps || n === ms || n === gs || n === _s) if (a === $t) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === ps) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === ms) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === gs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === _s) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === ps) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === ms) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === gs) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === _s) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Lr || n === Ir || n === Ur || n === Nr) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Lr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Ir) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Ur) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Nr) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === Fr || n === Or || n === Br) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === Fr || n === Or) return a === $t ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Br) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === zr || n === Hr || n === Vr || n === kr || n === Gr || n === Wr || n === Xr || n === Yr || n === qr || n === $r || n === jr || n === Kr || n === Zr || n === Jr) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === zr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === Hr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === Vr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === kr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Gr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Wr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Xr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Yr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === qr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === $r) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === jr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Kr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Zr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === Jr) return a === $t ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === vs || n === Qr || n === ta) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === vs) return a === $t ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Qr) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === ta) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === il || n === ea || n === na || n === ia) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === vs) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === ea) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === na) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ia) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === wi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const Yp = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, qp = `
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
class $p {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const s = new _e(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new En({ vertexShader: Yp, fragmentShader: qp, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new ke(new Ds(20, 20), n);
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
class jp extends zn {
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, f = null, m = null, g = null;
    const v = new $p(), p = e.getContextAttributes();
    let d = null, T = null;
    const b = [], S = [], U = new Ct();
    let R = null;
    const w = new Ue();
    w.viewport = new se();
    const N = new Ue();
    N.viewport = new se();
    const y = [w, N], M = new ph();
    let C = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new sr(), b[W] = tt), tt.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new sr(), b[W] = tt), tt.getGripSpace();
    }, this.getHand = function(W) {
      let tt = b[W];
      return tt === void 0 && (tt = new sr(), b[W] = tt), tt.getHandSpace();
    };
    function z(W) {
      const tt = S.indexOf(W.inputSource);
      if (tt === -1) return;
      const pt = b[tt];
      pt !== void 0 && (pt.update(W.inputSource, W.frame, l || a), pt.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function $() {
      s.removeEventListener("select", z), s.removeEventListener("selectstart", z), s.removeEventListener("selectend", z), s.removeEventListener("squeeze", z), s.removeEventListener("squeezestart", z), s.removeEventListener("squeezeend", z), s.removeEventListener("end", $), s.removeEventListener("inputsourceschange", j);
      for (let W = 0; W < b.length; W++) {
        const tt = S[W];
        tt !== null && (S[W] = null, b[W].disconnect(tt));
      }
      C = null, G = null, v.reset(), t.setRenderTarget(d), m = null, f = null, u = null, s = null, T = null, Kt.stop(), n.isPresenting = false, t.setPixelRatio(R), t.setSize(U.width, U.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(W) {
      l = W;
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
        if (d = t.getRenderTarget(), s.addEventListener("select", z), s.addEventListener("selectstart", z), s.addEventListener("selectend", z), s.addEventListener("squeeze", z), s.addEventListener("squeezestart", z), s.addEventListener("squeezeend", z), s.addEventListener("end", $), s.addEventListener("inputsourceschange", j), p.xrCompatible !== true && await e.makeXRCompatible(), R = t.getPixelRatio(), t.getSize(U), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let pt = null, st = null, St = null;
          p.depth && (St = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, pt = p.stencil ? Ci : Ri, st = p.stencil ? wi : Fn);
          const Wt = { colorFormat: e.RGBA8, depthFormat: St, scaleFactor: r };
          u = new XRWebGLBinding(s, e), f = u.createProjectionLayer(Wt), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, false), T = new On(f.textureWidth, f.textureHeight, { format: Ve, type: Ke, depthTexture: new pl(f.textureWidth, f.textureHeight, st, void 0, void 0, void 0, void 0, void 0, void 0, pt), stencilBuffer: p.stencil, colorSpace: t.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const pt = { antialias: p.antialias, alpha: true, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(s, e, pt), s.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, false), T = new On(m.framebufferWidth, m.framebufferHeight, { format: Ve, type: Ke, colorSpace: t.outputColorSpace, stencilBuffer: p.stencil, resolveDepthBuffer: m.ignoreDepthValues === false, resolveStencilBuffer: m.ignoreDepthValues === false });
        }
        T.isXRRenderTarget = true, this.setFoveation(c), l = null, a = await s.requestReferenceSpace(o), Kt.setContext(s), Kt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
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
          for (let Wt = 0; Wt < b.length; Wt++) if (Wt >= S.length) {
            S.push(pt), st = Wt;
            break;
          } else if (S[Wt] === null) {
            S[Wt] = pt, st = Wt;
            break;
          }
          if (st === -1) break;
        }
        const St = b[st];
        St && St.connect(pt);
      }
    }
    const Y = new I(), Z = new I();
    function V(W, tt, pt) {
      Y.setFromMatrixPosition(tt.matrixWorld), Z.setFromMatrixPosition(pt.matrixWorld);
      const st = Y.distanceTo(Z), St = tt.projectionMatrix.elements, Wt = pt.projectionMatrix.elements, Tt = St[14] / (St[10] - 1), re = St[14] / (St[10] + 1), ee = (St[9] + 1) / St[5], Ot = (St[9] - 1) / St[5], A = (St[8] - 1) / St[0], Ce = (Wt[8] + 1) / Wt[0], Ht = Tt * A, Bt = Tt * Ce, vt = st / (-A + Ce), Jt = vt * -A;
      if (tt.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(Jt), W.translateZ(vt), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), St[10] === -1) W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse);
      else {
        const gt = Tt + vt, E = re + vt, _ = Ht - Jt, F = Bt + (st - Jt), X = ee * re / E * gt, K = Ot * re / E * gt;
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
      for (let Wt = 0; Wt < St.length; Wt++) it(St[Wt], st);
      St.length === 2 ? V(M, w, N) : M.projectionMatrix.copy(w.projectionMatrix), ht(W, M, st);
    };
    function ht(W, tt, pt) {
      pt === null ? W.matrix.copy(tt.matrixWorld) : (W.matrix.copy(pt.matrixWorld), W.matrix.invert(), W.matrix.multiply(tt.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(tt.projectionMatrix), W.projectionMatrixInverse.copy(tt.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = sa * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return c;
    }, this.setFoveation = function(W) {
      c = W, f !== null && (f.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return v.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return v.getMesh(M);
    };
    let _t = null;
    function Nt(W, tt) {
      if (h = tt.getViewerPose(l || a), g = tt, h !== null) {
        const pt = h.views;
        m !== null && (t.setRenderTargetFramebuffer(T, m.framebuffer), t.setRenderTarget(T));
        let st = false;
        pt.length !== M.cameras.length && (M.cameras.length = 0, st = true);
        for (let Tt = 0; Tt < pt.length; Tt++) {
          const re = pt[Tt];
          let ee = null;
          if (m !== null) ee = m.getViewport(re);
          else {
            const A = u.getViewSubImage(f, re);
            ee = A.viewport, Tt === 0 && (t.setRenderTargetTextures(T, A.colorTexture, A.depthStencilTexture), t.setRenderTarget(T));
          }
          let Ot = y[Tt];
          Ot === void 0 && (Ot = new Ue(), Ot.layers.enable(Tt), Ot.viewport = new se(), y[Tt] = Ot), Ot.matrix.fromArray(re.transform.matrix), Ot.matrix.decompose(Ot.position, Ot.quaternion, Ot.scale), Ot.projectionMatrix.fromArray(re.projectionMatrix), Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(), Ot.viewport.set(ee.x, ee.y, ee.width, ee.height), Tt === 0 && (M.matrix.copy(Ot.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), st === true && M.cameras.push(Ot);
        }
        const St = s.enabledFeatures;
        if (St && St.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && u) {
          const Tt = u.getDepthInformation(pt[0]);
          Tt && Tt.isValid && Tt.texture && v.init(t, Tt, s.renderState);
        }
      }
      for (let pt = 0; pt < b.length; pt++) {
        const st = S[pt], St = b[pt];
        st !== null && St !== void 0 && St.update(st, tt, l || a);
      }
      _t && _t(W, tt), tt.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: tt }), g = null;
    }
    const Kt = new xl();
    Kt.setAnimationLoop(Nt), this.setAnimationLoop = function(W) {
      _t = W;
    }, this.dispose = function() {
    };
  }
}
const Pn = new We(), Kp = new te();
function Zp(i, t) {
  function e(p, d) {
    p.matrixAutoUpdate === true && p.updateMatrix(), d.value.copy(p.matrix);
  }
  function n(p, d) {
    d.color.getRGB(p.fogColor.value, dl(i)), d.isFog ? (p.fogNear.value = d.near, p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density);
  }
  function s(p, d, T, b, S) {
    d.isMeshBasicMaterial || d.isMeshLambertMaterial ? r(p, d) : d.isMeshToonMaterial ? (r(p, d), u(p, d)) : d.isMeshPhongMaterial ? (r(p, d), h(p, d)) : d.isMeshStandardMaterial ? (r(p, d), f(p, d), d.isMeshPhysicalMaterial && m(p, d, S)) : d.isMeshMatcapMaterial ? (r(p, d), g(p, d)) : d.isMeshDepthMaterial ? r(p, d) : d.isMeshDistanceMaterial ? (r(p, d), v(p, d)) : d.isMeshNormalMaterial ? r(p, d) : d.isLineBasicMaterial ? (a(p, d), d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? c(p, d, T, b) : d.isSpriteMaterial ? l(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color), p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = false);
  }
  function r(p, d) {
    p.opacity.value = d.opacity, d.color && p.diffuse.value.copy(d.color), d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity), d.map && (p.map.value = d.map, e(d.map, p.mapTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.bumpMap && (p.bumpMap.value = d.bumpMap, e(d.bumpMap, p.bumpMapTransform), p.bumpScale.value = d.bumpScale, d.side === Te && (p.bumpScale.value *= -1)), d.normalMap && (p.normalMap.value = d.normalMap, e(d.normalMap, p.normalMapTransform), p.normalScale.value.copy(d.normalScale), d.side === Te && p.normalScale.value.negate()), d.displacementMap && (p.displacementMap.value = d.displacementMap, e(d.displacementMap, p.displacementMapTransform), p.displacementScale.value = d.displacementScale, p.displacementBias.value = d.displacementBias), d.emissiveMap && (p.emissiveMap.value = d.emissiveMap, e(d.emissiveMap, p.emissiveMapTransform)), d.specularMap && (p.specularMap.value = d.specularMap, e(d.specularMap, p.specularMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
    const T = t.get(d), b = T.envMap, S = T.envMapRotation;
    b && (p.envMap.value = b, Pn.copy(S), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === false && (Pn.y *= -1, Pn.z *= -1), p.envMapRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(Pn)), p.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = d.reflectivity, p.ior.value = d.ior, p.refractionRatio.value = d.refractionRatio), d.lightMap && (p.lightMap.value = d.lightMap, p.lightMapIntensity.value = d.lightMapIntensity, e(d.lightMap, p.lightMapTransform)), d.aoMap && (p.aoMap.value = d.aoMap, p.aoMapIntensity.value = d.aoMapIntensity, e(d.aoMap, p.aoMapTransform));
  }
  function a(p, d) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, d.map && (p.map.value = d.map, e(d.map, p.mapTransform));
  }
  function o(p, d) {
    p.dashSize.value = d.dashSize, p.totalSize.value = d.dashSize + d.gapSize, p.scale.value = d.scale;
  }
  function c(p, d, T, b) {
    p.diffuse.value.copy(d.color), p.opacity.value = d.opacity, p.size.value = d.size * T, p.scale.value = b * 0.5, d.map && (p.map.value = d.map, e(d.map, p.uvTransform)), d.alphaMap && (p.alphaMap.value = d.alphaMap, e(d.alphaMap, p.alphaMapTransform)), d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
  }
  function l(p, d) {
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
    p.ior.value = d.ior, d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen), p.sheenRoughness.value = d.sheenRoughness, d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap, e(d.sheenColorMap, p.sheenColorMapTransform)), d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap, e(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))), d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat, p.clearcoatRoughness.value = d.clearcoatRoughness, d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap, e(d.clearcoatMap, p.clearcoatMapTransform)), d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap, e(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap, e(d.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale), d.side === Te && p.clearcoatNormalScale.value.negate())), d.dispersion > 0 && (p.dispersion.value = d.dispersion), d.iridescence > 0 && (p.iridescence.value = d.iridescence, p.iridescenceIOR.value = d.iridescenceIOR, p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1], d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap, e(d.iridescenceMap, p.iridescenceMapTransform)), d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap, e(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), d.transmission > 0 && (p.transmission.value = d.transmission, p.transmissionSamplerMap.value = T.texture, p.transmissionSamplerSize.value.set(T.width, T.height), d.transmissionMap && (p.transmissionMap.value = d.transmissionMap, e(d.transmissionMap, p.transmissionMapTransform)), p.thickness.value = d.thickness, d.thicknessMap && (p.thicknessMap.value = d.thicknessMap, e(d.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = d.attenuationDistance, p.attenuationColor.value.copy(d.attenuationColor)), d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)), d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap, e(d.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = d.specularIntensity, p.specularColor.value.copy(d.specularColor), d.specularColorMap && (p.specularColorMap.value = d.specularColorMap, e(d.specularColorMap, p.specularColorMapTransform)), d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap, e(d.specularIntensityMap, p.specularIntensityMapTransform));
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
function Jp(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(T, b) {
    const S = b.program;
    n.uniformBlockBinding(T, S);
  }
  function l(T, b) {
    let S = s[T.id];
    S === void 0 && (g(T), S = h(T), s[T.id] = S, T.addEventListener("dispose", p));
    const U = b.program;
    n.updateUBOMapping(T, U);
    const R = t.render.frame;
    r[T.id] !== R && (f(T), r[T.id] = R);
  }
  function h(T) {
    const b = u();
    T.__bindingPointIndex = b;
    const S = i.createBuffer(), U = T.__size, R = T.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, S), i.bufferData(i.UNIFORM_BUFFER, U, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, b, S), S;
  }
  function u() {
    for (let T = 0; T < o; T++) if (a.indexOf(T) === -1) return a.push(T), T;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(T) {
    const b = s[T.id], S = T.uniforms, U = T.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, b);
    for (let R = 0, w = S.length; R < w; R++) {
      const N = Array.isArray(S[R]) ? S[R] : [S[R]];
      for (let y = 0, M = N.length; y < M; y++) {
        const C = N[y];
        if (m(C, R, y, U) === true) {
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
  function m(T, b, S, U) {
    const R = T.value, w = b + "_" + S;
    if (U[w] === void 0) return typeof R == "number" || typeof R == "boolean" ? U[w] = R : U[w] = R.clone(), true;
    {
      const N = U[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (N !== R) return U[w] = R, true;
      } else if (N.equals(R) === false) return N.copy(R), true;
    }
    return false;
  }
  function g(T) {
    const b = T.uniforms;
    let S = 0;
    const U = 16;
    for (let w = 0, N = b.length; w < N; w++) {
      const y = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let M = 0, C = y.length; M < C; M++) {
        const G = y[M], z = Array.isArray(G.value) ? G.value : [G.value];
        for (let $ = 0, j = z.length; $ < j; $++) {
          const Y = z[$], Z = v(Y), V = S % U, it = V % Z.boundary, ht = V + it;
          S += it, ht !== 0 && U - ht < Z.storage && (S += U - ht), G.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = S, S += Z.storage;
        }
      }
    }
    const R = S % U;
    return R > 0 && (S += U - R), T.__size = S, T.__cache = {}, this;
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
  return { bind: c, update: l, dispose: d };
}
class Qp {
  constructor(t = {}) {
    const { canvas: e = Tc(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: f = false } = t;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let p = null, d = null;
    const T = [], b = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = Mn, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const S = this;
    let U = false;
    this._outputColorSpace = be;
    let R = 0, w = 0, N = null, y = -1, M = null;
    const C = new se(), G = new se();
    let z = null;
    const $ = new Ut(0);
    let j = 0, Y = e.width, Z = e.height, V = 1, it = null, ht = null;
    const _t = new se(0, 0, Y, Z), Nt = new se(0, 0, Y, Z);
    let Kt = false;
    const W = new Ea();
    let tt = false, pt = false;
    const st = new te(), St = new te(), Wt = new I(), Tt = new se(), re = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let ee = false;
    function Ot() {
      return N === null ? V : 1;
    }
    let A = n;
    function Ce(x, D) {
      return e.getContext(x, D);
    }
    try {
      const x = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${ha}`), e.addEventListener("webglcontextlost", q, false), e.addEventListener("webglcontextrestored", lt, false), e.addEventListener("webglcontextcreationerror", ot, false), A === null) {
        const D = "webgl2";
        if (A = Ce(D, x), A === null) throw Ce(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (x) {
      throw console.error("THREE.WebGLRenderer: " + x.message), x;
    }
    let Ht, Bt, vt, Jt, gt, E, _, F, X, K, k, mt, rt, Et, yt, J, ut, bt, wt, dt, zt, Lt, Zt, P;
    function at() {
      Ht = new cf(A), Ht.init(), Lt = new Xp(A, Ht), Bt = new ef(A, Ht, t, Lt), vt = new Gp(A, Ht), Bt.reverseDepthBuffer && f && vt.buffers.depth.setReversed(true), Jt = new df(A), gt = new Pp(), E = new Wp(A, Ht, vt, gt, Bt, Lt, Jt), _ = new sf(S), F = new lf(S), X = new _h(A), Zt = new Qd(A, X), K = new hf(A, X, Jt, Zt), k = new pf(A, K, X, Jt), wt = new ff(A, Bt, E), J = new nf(gt), mt = new Cp(S, _, F, Ht, Bt, Zt, J), rt = new Zp(S, gt), Et = new Lp(), yt = new Bp(Ht), bt = new Jd(S, _, F, vt, k, m, c), ut = new Vp(S, k, Bt), P = new Jp(A, Jt, Bt, vt), dt = new tf(A, Ht, Jt), zt = new uf(A, Ht, Jt), Jt.programs = mt.programs, S.capabilities = Bt, S.extensions = Ht, S.properties = gt, S.renderLists = Et, S.shadowMap = ut, S.state = vt, S.info = Jt;
    }
    at();
    const H = new jp(S, A);
    this.xr = H, this.getContext = function() {
      return A;
    }, this.getContextAttributes = function() {
      return A.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = Ht.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = Ht.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (V = x, this.setSize(Y, Z, false));
    }, this.getSize = function(x) {
      return x.set(Y, Z);
    }, this.setSize = function(x, D, O = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      Y = x, Z = D, e.width = Math.floor(x * V), e.height = Math.floor(D * V), O === true && (e.style.width = x + "px", e.style.height = D + "px"), this.setViewport(0, 0, x, D);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(Y * V, Z * V).floor();
    }, this.setDrawingBufferSize = function(x, D, O) {
      Y = x, Z = D, V = O, e.width = Math.floor(x * O), e.height = Math.floor(D * O), this.setViewport(0, 0, x, D);
    }, this.getCurrentViewport = function(x) {
      return x.copy(C);
    }, this.getViewport = function(x) {
      return x.copy(_t);
    }, this.setViewport = function(x, D, O, B) {
      x.isVector4 ? _t.set(x.x, x.y, x.z, x.w) : _t.set(x, D, O, B), vt.viewport(C.copy(_t).multiplyScalar(V).round());
    }, this.getScissor = function(x) {
      return x.copy(Nt);
    }, this.setScissor = function(x, D, O, B) {
      x.isVector4 ? Nt.set(x.x, x.y, x.z, x.w) : Nt.set(x, D, O, B), vt.scissor(G.copy(Nt).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return Kt;
    }, this.setScissorTest = function(x) {
      vt.setScissorTest(Kt = x);
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
    }, this.clear = function(x = true, D = true, O = true) {
      let B = 0;
      if (x) {
        let L = false;
        if (N !== null) {
          const Q = N.texture.format;
          L = Q === _a || Q === ga || Q === ma;
        }
        if (L) {
          const Q = N.texture.type, nt = Q === Ke || Q === Fn || Q === Ai || Q === wi || Q === fa || Q === pa, ct = bt.getClearColor(), ft = bt.getClearAlpha(), Rt = ct.r, At = ct.g, xt = ct.b;
          nt ? (g[0] = Rt, g[1] = At, g[2] = xt, g[3] = ft, A.clearBufferuiv(A.COLOR, 0, g)) : (v[0] = Rt, v[1] = At, v[2] = xt, v[3] = ft, A.clearBufferiv(A.COLOR, 0, v));
        } else B |= A.COLOR_BUFFER_BIT;
      }
      D && (B |= A.DEPTH_BUFFER_BIT), O && (B |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", q, false), e.removeEventListener("webglcontextrestored", lt, false), e.removeEventListener("webglcontextcreationerror", ot, false), bt.dispose(), Et.dispose(), yt.dispose(), gt.dispose(), _.dispose(), F.dispose(), k.dispose(), Zt.dispose(), P.dispose(), mt.dispose(), H.dispose(), H.removeEventListener("sessionstart", wa), H.removeEventListener("sessionend", Ra), yn.stop();
    };
    function q(x) {
      x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), U = true;
    }
    function lt() {
      console.log("THREE.WebGLRenderer: Context Restored."), U = false;
      const x = Jt.autoReset, D = ut.enabled, O = ut.autoUpdate, B = ut.needsUpdate, L = ut.type;
      at(), Jt.autoReset = x, ut.enabled = D, ut.autoUpdate = O, ut.needsUpdate = B, ut.type = L;
    }
    function ot(x) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function Pt(x) {
      const D = x.target;
      D.removeEventListener("dispose", Pt), ne(D);
    }
    function ne(x) {
      pe(x), gt.remove(x);
    }
    function pe(x) {
      const D = gt.get(x).programs;
      D !== void 0 && (D.forEach(function(O) {
        mt.releaseProgram(O);
      }), x.isShaderMaterial && mt.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, D, O, B, L, Q) {
      D === null && (D = re);
      const nt = L.isMesh && L.matrixWorld.determinant() < 0, ct = Pl(x, D, O, B, L);
      vt.setMaterial(B, nt);
      let ft = O.index, Rt = 1;
      if (B.wireframe === true) {
        if (ft = K.getWireframeAttribute(O), ft === void 0) return;
        Rt = 2;
      }
      const At = O.drawRange, xt = O.attributes.position;
      let Vt = At.start * Rt, Xt = (At.start + At.count) * Rt;
      Q !== null && (Vt = Math.max(Vt, Q.start * Rt), Xt = Math.min(Xt, (Q.start + Q.count) * Rt)), ft !== null ? (Vt = Math.max(Vt, 0), Xt = Math.min(Xt, ft.count)) : xt != null && (Vt = Math.max(Vt, 0), Xt = Math.min(Xt, xt.count));
      const ae = Xt - Vt;
      if (ae < 0 || ae === 1 / 0) return;
      Zt.setup(L, B, ct, O, ft);
      let ie, kt = dt;
      if (ft !== null && (ie = X.get(ft), kt = zt, kt.setIndex(ie)), L.isMesh) B.wireframe === true ? (vt.setLineWidth(B.wireframeLinewidth * Ot()), kt.setMode(A.LINES)) : kt.setMode(A.TRIANGLES);
      else if (L.isLine) {
        let Mt = B.linewidth;
        Mt === void 0 && (Mt = 1), vt.setLineWidth(Mt * Ot()), L.isLineSegments ? kt.setMode(A.LINES) : L.isLineLoop ? kt.setMode(A.LINE_LOOP) : kt.setMode(A.LINE_STRIP);
      } else L.isPoints ? kt.setMode(A.POINTS) : L.isSprite && kt.setMode(A.TRIANGLES);
      if (L.isBatchedMesh) if (L._multiDrawInstances !== null) Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), kt.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
      else if (Ht.get("WEBGL_multi_draw")) kt.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
      else {
        const Mt = L._multiDrawStarts, fe = L._multiDrawCounts, Yt = L._multiDrawCount, Fe = ft ? X.get(ft).bytesPerElement : 1, Hn = gt.get(B).currentProgram.getUniforms();
        for (let Ae = 0; Ae < Yt; Ae++) Hn.setValue(A, "_gl_DrawID", Ae), kt.render(Mt[Ae] / Fe, fe[Ae]);
      }
      else if (L.isInstancedMesh) kt.renderInstances(Vt, ae, L.count);
      else if (O.isInstancedBufferGeometry) {
        const Mt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, fe = Math.min(O.instanceCount, Mt);
        kt.renderInstances(Vt, ae, fe);
      } else kt.render(Vt, ae);
    };
    function qt(x, D, O) {
      x.transparent === true && x.side === on && x.forceSinglePass === false ? (x.side = Te, x.needsUpdate = true, Hi(x, D, O), x.side = Sn, x.needsUpdate = true, Hi(x, D, O), x.side = on) : Hi(x, D, O);
    }
    this.compile = function(x, D, O = null) {
      O === null && (O = x), d = yt.get(O), d.init(D), b.push(d), O.traverseVisible(function(L) {
        L.isLight && L.layers.test(D.layers) && (d.pushLight(L), L.castShadow && d.pushShadow(L));
      }), x !== O && x.traverseVisible(function(L) {
        L.isLight && L.layers.test(D.layers) && (d.pushLight(L), L.castShadow && d.pushShadow(L));
      }), d.setupLights();
      const B = /* @__PURE__ */ new Set();
      return x.traverse(function(L) {
        if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite)) return;
        const Q = L.material;
        if (Q) if (Array.isArray(Q)) for (let nt = 0; nt < Q.length; nt++) {
          const ct = Q[nt];
          qt(ct, O, L), B.add(ct);
        }
        else qt(Q, O, L), B.add(Q);
      }), d = b.pop(), B;
    }, this.compileAsync = function(x, D, O = null) {
      const B = this.compile(x, D, O);
      return new Promise((L) => {
        function Q() {
          if (B.forEach(function(nt) {
            gt.get(nt).currentProgram.isReady() && B.delete(nt);
          }), B.size === 0) {
            L(x);
            return;
          }
          setTimeout(Q, 10);
        }
        Ht.get("KHR_parallel_shader_compile") !== null ? Q() : setTimeout(Q, 10);
      });
    };
    let Ne = null;
    function Je(x) {
      Ne && Ne(x);
    }
    function wa() {
      yn.stop();
    }
    function Ra() {
      yn.start();
    }
    const yn = new xl();
    yn.setAnimationLoop(Je), typeof self < "u" && yn.setContext(self), this.setAnimationLoop = function(x) {
      Ne = x, H.setAnimationLoop(x), x === null ? yn.stop() : yn.start();
    }, H.addEventListener("sessionstart", wa), H.addEventListener("sessionend", Ra), this.render = function(x, D) {
      if (D !== void 0 && D.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (U === true) return;
      if (x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === true && D.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(D), D = H.getCamera()), x.isScene === true && x.onBeforeRender(S, x, D, N), d = yt.get(x, b.length), d.init(D), b.push(d), St.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), W.setFromProjectionMatrix(St), pt = this.localClippingEnabled, tt = J.init(this.clippingPlanes, pt), p = Et.get(x, T.length), p.init(), T.push(p), H.enabled === true && H.isPresenting === true) {
        const Q = S.xr.getDepthSensingMesh();
        Q !== null && Ns(Q, D, -1 / 0, S.sortObjects);
      }
      Ns(x, D, 0, S.sortObjects), p.finish(), S.sortObjects === true && p.sort(it, ht), ee = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, ee && bt.addToRenderList(p, x), this.info.render.frame++, tt === true && J.beginShadows();
      const O = d.state.shadowsArray;
      ut.render(O, x, D), tt === true && J.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = p.opaque, L = p.transmissive;
      if (d.setupLights(), D.isArrayCamera) {
        const Q = D.cameras;
        if (L.length > 0) for (let nt = 0, ct = Q.length; nt < ct; nt++) {
          const ft = Q[nt];
          Pa(B, L, x, ft);
        }
        ee && bt.render(x);
        for (let nt = 0, ct = Q.length; nt < ct; nt++) {
          const ft = Q[nt];
          Ca(p, x, ft, ft.viewport);
        }
      } else L.length > 0 && Pa(B, L, x, D), ee && bt.render(x), Ca(p, x, D);
      N !== null && w === 0 && (E.updateMultisampleRenderTarget(N), E.updateRenderTargetMipmap(N)), x.isScene === true && x.onAfterRender(S, x, D), Zt.resetDefaultState(), y = -1, M = null, b.pop(), b.length > 0 ? (d = b[b.length - 1], tt === true && J.setGlobalState(S.clippingPlanes, d.state.camera)) : d = null, T.pop(), T.length > 0 ? p = T[T.length - 1] : p = null;
    };
    function Ns(x, D, O, B) {
      if (x.visible === false) return;
      if (x.layers.test(D.layers)) {
        if (x.isGroup) O = x.renderOrder;
        else if (x.isLOD) x.autoUpdate === true && x.update(D);
        else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
        else if (x.isSprite) {
          if (!x.frustumCulled || W.intersectsSprite(x)) {
            B && Tt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(St);
            const nt = k.update(x), ct = x.material;
            ct.visible && p.push(x, nt, ct, O, Tt.z, null);
          }
        } else if ((x.isMesh || x.isLine || x.isPoints) && (!x.frustumCulled || W.intersectsObject(x))) {
          const nt = k.update(x), ct = x.material;
          if (B && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Tt.copy(x.boundingSphere.center)) : (nt.boundingSphere === null && nt.computeBoundingSphere(), Tt.copy(nt.boundingSphere.center)), Tt.applyMatrix4(x.matrixWorld).applyMatrix4(St)), Array.isArray(ct)) {
            const ft = nt.groups;
            for (let Rt = 0, At = ft.length; Rt < At; Rt++) {
              const xt = ft[Rt], Vt = ct[xt.materialIndex];
              Vt && Vt.visible && p.push(x, nt, Vt, O, Tt.z, xt);
            }
          } else ct.visible && p.push(x, nt, ct, O, Tt.z, null);
        }
      }
      const Q = x.children;
      for (let nt = 0, ct = Q.length; nt < ct; nt++) Ns(Q[nt], D, O, B);
    }
    function Ca(x, D, O, B) {
      const L = x.opaque, Q = x.transmissive, nt = x.transparent;
      d.setupLightsView(O), tt === true && J.setGlobalState(S.clippingPlanes, O), B && vt.viewport(C.copy(B)), L.length > 0 && zi(L, D, O), Q.length > 0 && zi(Q, D, O), nt.length > 0 && zi(nt, D, O), vt.buffers.depth.setTest(true), vt.buffers.depth.setMask(true), vt.buffers.color.setMask(true), vt.setPolygonOffset(false);
    }
    function Pa(x, D, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[B.id] === void 0 && (d.state.transmissionRenderTarget[B.id] = new On(1, 1, { generateMipmaps: true, type: Ht.has("EXT_color_buffer_half_float") || Ht.has("EXT_color_buffer_float") ? Ii : Ke, minFilter: Nn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Gt.workingColorSpace }));
      const Q = d.state.transmissionRenderTarget[B.id], nt = B.viewport || C;
      Q.setSize(nt.z * S.transmissionResolutionScale, nt.w * S.transmissionResolutionScale);
      const ct = S.getRenderTarget();
      S.setRenderTarget(Q), S.getClearColor($), j = S.getClearAlpha(), j < 1 && S.setClearColor(16777215, 0.5), S.clear(), ee && bt.render(O);
      const ft = S.toneMapping;
      S.toneMapping = Mn;
      const Rt = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), d.setupLightsView(B), tt === true && J.setGlobalState(S.clippingPlanes, B), zi(x, O, B), E.updateMultisampleRenderTarget(Q), E.updateRenderTargetMipmap(Q), Ht.has("WEBGL_multisampled_render_to_texture") === false) {
        let At = false;
        for (let xt = 0, Vt = D.length; xt < Vt; xt++) {
          const Xt = D[xt], ae = Xt.object, ie = Xt.geometry, kt = Xt.material, Mt = Xt.group;
          if (kt.side === on && ae.layers.test(B.layers)) {
            const fe = kt.side;
            kt.side = Te, kt.needsUpdate = true, Da(ae, O, B, ie, kt, Mt), kt.side = fe, kt.needsUpdate = true, At = true;
          }
        }
        At === true && (E.updateMultisampleRenderTarget(Q), E.updateRenderTargetMipmap(Q));
      }
      S.setRenderTarget(ct), S.setClearColor($, j), Rt !== void 0 && (B.viewport = Rt), S.toneMapping = ft;
    }
    function zi(x, D, O) {
      const B = D.isScene === true ? D.overrideMaterial : null;
      for (let L = 0, Q = x.length; L < Q; L++) {
        const nt = x[L], ct = nt.object, ft = nt.geometry, Rt = nt.group;
        let At = nt.material;
        At.allowOverride === true && B !== null && (At = B), ct.layers.test(O.layers) && Da(ct, D, O, ft, At, Rt);
      }
    }
    function Da(x, D, O, B, L, Q) {
      x.onBeforeRender(S, D, O, B, L, Q), x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), L.onBeforeRender(S, D, O, B, x, Q), L.transparent === true && L.side === on && L.forceSinglePass === false ? (L.side = Te, L.needsUpdate = true, S.renderBufferDirect(O, D, B, L, x, Q), L.side = Sn, L.needsUpdate = true, S.renderBufferDirect(O, D, B, L, x, Q), L.side = on) : S.renderBufferDirect(O, D, B, L, x, Q), x.onAfterRender(S, D, O, B, L, Q);
    }
    function Hi(x, D, O) {
      D.isScene !== true && (D = re);
      const B = gt.get(x), L = d.state.lights, Q = d.state.shadowsArray, nt = L.state.version, ct = mt.getParameters(x, L.state, Q, D, O), ft = mt.getProgramCacheKey(ct);
      let Rt = B.programs;
      B.environment = x.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (x.isMeshStandardMaterial ? F : _).get(x.envMap || B.environment), B.envMapRotation = B.environment !== null && x.envMap === null ? D.environmentRotation : x.envMapRotation, Rt === void 0 && (x.addEventListener("dispose", Pt), Rt = /* @__PURE__ */ new Map(), B.programs = Rt);
      let At = Rt.get(ft);
      if (At !== void 0) {
        if (B.currentProgram === At && B.lightsStateVersion === nt) return Ia(x, ct), At;
      } else ct.uniforms = mt.getUniforms(x), x.onBeforeCompile(ct, S), At = mt.acquireProgram(ct, ft), Rt.set(ft, At), B.uniforms = ct.uniforms;
      const xt = B.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === true) && (xt.clippingPlanes = J.uniform), Ia(x, ct), B.needsLights = Ll(x), B.lightsStateVersion = nt, B.needsLights && (xt.ambientLightColor.value = L.state.ambient, xt.lightProbe.value = L.state.probe, xt.directionalLights.value = L.state.directional, xt.directionalLightShadows.value = L.state.directionalShadow, xt.spotLights.value = L.state.spot, xt.spotLightShadows.value = L.state.spotShadow, xt.rectAreaLights.value = L.state.rectArea, xt.ltc_1.value = L.state.rectAreaLTC1, xt.ltc_2.value = L.state.rectAreaLTC2, xt.pointLights.value = L.state.point, xt.pointLightShadows.value = L.state.pointShadow, xt.hemisphereLights.value = L.state.hemi, xt.directionalShadowMap.value = L.state.directionalShadowMap, xt.directionalShadowMatrix.value = L.state.directionalShadowMatrix, xt.spotShadowMap.value = L.state.spotShadowMap, xt.spotLightMatrix.value = L.state.spotLightMatrix, xt.spotLightMap.value = L.state.spotLightMap, xt.pointShadowMap.value = L.state.pointShadowMap, xt.pointShadowMatrix.value = L.state.pointShadowMatrix), B.currentProgram = At, B.uniformsList = null, At;
    }
    function La(x) {
      if (x.uniformsList === null) {
        const D = x.currentProgram.getUniforms();
        x.uniformsList = Es.seqWithValue(D.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function Ia(x, D) {
      const O = gt.get(x);
      O.outputColorSpace = D.outputColorSpace, O.batching = D.batching, O.batchingColor = D.batchingColor, O.instancing = D.instancing, O.instancingColor = D.instancingColor, O.instancingMorph = D.instancingMorph, O.skinning = D.skinning, O.morphTargets = D.morphTargets, O.morphNormals = D.morphNormals, O.morphColors = D.morphColors, O.morphTargetsCount = D.morphTargetsCount, O.numClippingPlanes = D.numClippingPlanes, O.numIntersection = D.numClipIntersection, O.vertexAlphas = D.vertexAlphas, O.vertexTangents = D.vertexTangents, O.toneMapping = D.toneMapping;
    }
    function Pl(x, D, O, B, L) {
      D.isScene !== true && (D = re), E.resetTextureUnits();
      const Q = D.fog, nt = B.isMeshStandardMaterial ? D.environment : null, ct = N === null ? S.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : ci, ft = (B.isMeshStandardMaterial ? F : _).get(B.envMap || nt), Rt = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, At = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), xt = !!O.morphAttributes.position, Vt = !!O.morphAttributes.normal, Xt = !!O.morphAttributes.color;
      let ae = Mn;
      B.toneMapped && (N === null || N.isXRRenderTarget === true) && (ae = S.toneMapping);
      const ie = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, kt = ie !== void 0 ? ie.length : 0, Mt = gt.get(B), fe = d.state.lights;
      if (tt === true && (pt === true || x !== M)) {
        const ve = x === M && B.id === y;
        J.setState(B, x, ve);
      }
      let Yt = false;
      B.version === Mt.__version ? (Mt.needsLights && Mt.lightsStateVersion !== fe.state.version || Mt.outputColorSpace !== ct || L.isBatchedMesh && Mt.batching === false || !L.isBatchedMesh && Mt.batching === true || L.isBatchedMesh && Mt.batchingColor === true && L.colorTexture === null || L.isBatchedMesh && Mt.batchingColor === false && L.colorTexture !== null || L.isInstancedMesh && Mt.instancing === false || !L.isInstancedMesh && Mt.instancing === true || L.isSkinnedMesh && Mt.skinning === false || !L.isSkinnedMesh && Mt.skinning === true || L.isInstancedMesh && Mt.instancingColor === true && L.instanceColor === null || L.isInstancedMesh && Mt.instancingColor === false && L.instanceColor !== null || L.isInstancedMesh && Mt.instancingMorph === true && L.morphTexture === null || L.isInstancedMesh && Mt.instancingMorph === false && L.morphTexture !== null || Mt.envMap !== ft || B.fog === true && Mt.fog !== Q || Mt.numClippingPlanes !== void 0 && (Mt.numClippingPlanes !== J.numPlanes || Mt.numIntersection !== J.numIntersection) || Mt.vertexAlphas !== Rt || Mt.vertexTangents !== At || Mt.morphTargets !== xt || Mt.morphNormals !== Vt || Mt.morphColors !== Xt || Mt.toneMapping !== ae || Mt.morphTargetsCount !== kt) && (Yt = true) : (Yt = true, Mt.__version = B.version);
      let Fe = Mt.currentProgram;
      Yt === true && (Fe = Hi(B, D, L));
      let Hn = false, Ae = false, pi = false;
      const Qt = Fe.getUniforms(), Pe = Mt.uniforms;
      if (vt.useProgram(Fe.program) && (Hn = true, Ae = true, pi = true), B.id !== y && (y = B.id, Ae = true), Hn || M !== x) {
        vt.buffers.depth.getReversed() ? (st.copy(x.projectionMatrix), wc(st), Rc(st), Qt.setValue(A, "projectionMatrix", st)) : Qt.setValue(A, "projectionMatrix", x.projectionMatrix), Qt.setValue(A, "viewMatrix", x.matrixWorldInverse);
        const Se = Qt.map.cameraPosition;
        Se !== void 0 && Se.setValue(A, Wt.setFromMatrixPosition(x.matrixWorld)), Bt.logarithmicDepthBuffer && Qt.setValue(A, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && Qt.setValue(A, "isOrthographic", x.isOrthographicCamera === true), M !== x && (M = x, Ae = true, pi = true);
      }
      if (L.isSkinnedMesh) {
        Qt.setOptional(A, L, "bindMatrix"), Qt.setOptional(A, L, "bindMatrixInverse");
        const ve = L.skeleton;
        ve && (ve.boneTexture === null && ve.computeBoneTexture(), Qt.setValue(A, "boneTexture", ve.boneTexture, E));
      }
      L.isBatchedMesh && (Qt.setOptional(A, L, "batchingTexture"), Qt.setValue(A, "batchingTexture", L._matricesTexture, E), Qt.setOptional(A, L, "batchingIdTexture"), Qt.setValue(A, "batchingIdTexture", L._indirectTexture, E), Qt.setOptional(A, L, "batchingColorTexture"), L._colorsTexture !== null && Qt.setValue(A, "batchingColorTexture", L._colorsTexture, E));
      const De = O.morphAttributes;
      if ((De.position !== void 0 || De.normal !== void 0 || De.color !== void 0) && wt.update(L, O, Fe), (Ae || Mt.receiveShadow !== L.receiveShadow) && (Mt.receiveShadow = L.receiveShadow, Qt.setValue(A, "receiveShadow", L.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Pe.envMap.value = ft, Pe.flipEnvMap.value = ft.isCubeTexture && ft.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (Pe.envMapIntensity.value = D.environmentIntensity), Ae && (Qt.setValue(A, "toneMappingExposure", S.toneMappingExposure), Mt.needsLights && Dl(Pe, pi), Q && B.fog === true && rt.refreshFogUniforms(Pe, Q), rt.refreshMaterialUniforms(Pe, B, V, Z, d.state.transmissionRenderTarget[x.id]), Es.upload(A, La(Mt), Pe, E)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (Es.upload(A, La(Mt), Pe, E), B.uniformsNeedUpdate = false), B.isSpriteMaterial && Qt.setValue(A, "center", L.center), Qt.setValue(A, "modelViewMatrix", L.modelViewMatrix), Qt.setValue(A, "normalMatrix", L.normalMatrix), Qt.setValue(A, "modelMatrix", L.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const ve = B.uniformsGroups;
        for (let Se = 0, Fs = ve.length; Se < Fs; Se++) {
          const bn = ve[Se];
          P.update(bn, Fe), P.bind(bn, Fe);
        }
      }
      return Fe;
    }
    function Dl(x, D) {
      x.ambientLightColor.needsUpdate = D, x.lightProbe.needsUpdate = D, x.directionalLights.needsUpdate = D, x.directionalLightShadows.needsUpdate = D, x.pointLights.needsUpdate = D, x.pointLightShadows.needsUpdate = D, x.spotLights.needsUpdate = D, x.spotLightShadows.needsUpdate = D, x.rectAreaLights.needsUpdate = D, x.hemisphereLights.needsUpdate = D;
    }
    function Ll(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === true;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(x, D, O) {
      const B = gt.get(x);
      B.__autoAllocateDepthBuffer = x.resolveDepthBuffer === false, B.__autoAllocateDepthBuffer === false && (B.__useRenderToTexture = false), gt.get(x.texture).__webglTexture = D, gt.get(x.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O, B.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(x, D) {
      const O = gt.get(x);
      O.__webglFramebuffer = D, O.__useDefaultFramebuffer = D === void 0;
    };
    const Il = A.createFramebuffer();
    this.setRenderTarget = function(x, D = 0, O = 0) {
      N = x, R = D, w = O;
      let B = true, L = null, Q = false, nt = false;
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
        const Rt = x.texture;
        (Rt.isData3DTexture || Rt.isDataArrayTexture || Rt.isCompressedArrayTexture) && (nt = true);
        const At = gt.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(At[D]) ? L = At[D][O] : L = At[D], Q = true) : x.samples > 0 && E.useMultisampledRTT(x) === false ? L = gt.get(x).__webglMultisampledFramebuffer : Array.isArray(At) ? L = At[O] : L = At, C.copy(x.viewport), G.copy(x.scissor), z = x.scissorTest;
      } else C.copy(_t).multiplyScalar(V).floor(), G.copy(Nt).multiplyScalar(V).floor(), z = Kt;
      if (O !== 0 && (L = Il), vt.bindFramebuffer(A.FRAMEBUFFER, L) && B && vt.drawBuffers(x, L), vt.viewport(C), vt.scissor(G), vt.setScissorTest(z), Q) {
        const ft = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, ft.__webglTexture, O);
      } else if (nt) {
        const ft = gt.get(x.texture), Rt = D;
        A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ft.__webglTexture, O, Rt);
      } else if (x !== null && O !== 0) {
        const ft = gt.get(x.texture);
        A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ft.__webglTexture, O);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(x, D, O, B, L, Q, nt) {
      if (!(x && x.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ct = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && nt !== void 0 && (ct = ct[nt]), ct) {
        vt.bindFramebuffer(A.FRAMEBUFFER, ct);
        try {
          const ft = x.texture, Rt = ft.format, At = ft.type;
          if (!Bt.textureFormatReadable(Rt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Bt.textureTypeReadable(At)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= x.width - B && O >= 0 && O <= x.height - L && A.readPixels(D, O, B, L, Lt.convert(Rt), Lt.convert(At), Q);
        } finally {
          const ft = N !== null ? gt.get(N).__webglFramebuffer : null;
          vt.bindFramebuffer(A.FRAMEBUFFER, ft);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, D, O, B, L, Q, nt) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ct = gt.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && nt !== void 0 && (ct = ct[nt]), ct) if (D >= 0 && D <= x.width - B && O >= 0 && O <= x.height - L) {
        vt.bindFramebuffer(A.FRAMEBUFFER, ct);
        const ft = x.texture, Rt = ft.format, At = ft.type;
        if (!Bt.textureFormatReadable(Rt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Bt.textureTypeReadable(At)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const xt = A.createBuffer();
        A.bindBuffer(A.PIXEL_PACK_BUFFER, xt), A.bufferData(A.PIXEL_PACK_BUFFER, Q.byteLength, A.STREAM_READ), A.readPixels(D, O, B, L, Lt.convert(Rt), Lt.convert(At), 0);
        const Vt = N !== null ? gt.get(N).__webglFramebuffer : null;
        vt.bindFramebuffer(A.FRAMEBUFFER, Vt);
        const Xt = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return A.flush(), await Ac(A, Xt, 4), A.bindBuffer(A.PIXEL_PACK_BUFFER, xt), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, Q), A.deleteBuffer(xt), A.deleteSync(Xt), Q;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, D = null, O = 0) {
      const B = Math.pow(2, -O), L = Math.floor(x.image.width * B), Q = Math.floor(x.image.height * B), nt = D !== null ? D.x : 0, ct = D !== null ? D.y : 0;
      E.setTexture2D(x, 0), A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, nt, ct, L, Q), vt.unbindTexture();
    };
    const Ul = A.createFramebuffer(), Nl = A.createFramebuffer();
    this.copyTextureToTexture = function(x, D, O = null, B = null, L = 0, Q = null) {
      Q === null && (L !== 0 ? (Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), Q = L, L = 0) : Q = 0);
      let nt, ct, ft, Rt, At, xt, Vt, Xt, ae;
      const ie = x.isCompressedTexture ? x.mipmaps[Q] : x.image;
      if (O !== null) nt = O.max.x - O.min.x, ct = O.max.y - O.min.y, ft = O.isBox3 ? O.max.z - O.min.z : 1, Rt = O.min.x, At = O.min.y, xt = O.isBox3 ? O.min.z : 0;
      else {
        const De = Math.pow(2, -L);
        nt = Math.floor(ie.width * De), ct = Math.floor(ie.height * De), x.isDataArrayTexture ? ft = ie.depth : x.isData3DTexture ? ft = Math.floor(ie.depth * De) : ft = 1, Rt = 0, At = 0, xt = 0;
      }
      B !== null ? (Vt = B.x, Xt = B.y, ae = B.z) : (Vt = 0, Xt = 0, ae = 0);
      const kt = Lt.convert(D.format), Mt = Lt.convert(D.type);
      let fe;
      D.isData3DTexture ? (E.setTexture3D(D, 0), fe = A.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (E.setTexture2DArray(D, 0), fe = A.TEXTURE_2D_ARRAY) : (E.setTexture2D(D, 0), fe = A.TEXTURE_2D), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment);
      const Yt = A.getParameter(A.UNPACK_ROW_LENGTH), Fe = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Hn = A.getParameter(A.UNPACK_SKIP_PIXELS), Ae = A.getParameter(A.UNPACK_SKIP_ROWS), pi = A.getParameter(A.UNPACK_SKIP_IMAGES);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, ie.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ie.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Rt), A.pixelStorei(A.UNPACK_SKIP_ROWS, At), A.pixelStorei(A.UNPACK_SKIP_IMAGES, xt);
      const Qt = x.isDataArrayTexture || x.isData3DTexture, Pe = D.isDataArrayTexture || D.isData3DTexture;
      if (x.isDepthTexture) {
        const De = gt.get(x), ve = gt.get(D), Se = gt.get(De.__renderTarget), Fs = gt.get(ve.__renderTarget);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, Se.__webglFramebuffer), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, Fs.__webglFramebuffer);
        for (let bn = 0; bn < ft; bn++) Qt && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(x).__webglTexture, L, xt + bn), A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, gt.get(D).__webglTexture, Q, ae + bn)), A.blitFramebuffer(Rt, At, nt, ct, Vt, Xt, nt, ct, A.DEPTH_BUFFER_BIT, A.NEAREST);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, null), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else if (L !== 0 || x.isRenderTargetTexture || gt.has(x)) {
        const De = gt.get(x), ve = gt.get(D);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, Ul), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, Nl);
        for (let Se = 0; Se < ft; Se++) Qt ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, De.__webglTexture, L, xt + Se) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, De.__webglTexture, L), Pe ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, ve.__webglTexture, Q, ae + Se) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ve.__webglTexture, Q), L !== 0 ? A.blitFramebuffer(Rt, At, nt, ct, Vt, Xt, nt, ct, A.COLOR_BUFFER_BIT, A.NEAREST) : Pe ? A.copyTexSubImage3D(fe, Q, Vt, Xt, ae + Se, Rt, At, nt, ct) : A.copyTexSubImage2D(fe, Q, Vt, Xt, Rt, At, nt, ct);
        vt.bindFramebuffer(A.READ_FRAMEBUFFER, null), vt.bindFramebuffer(A.DRAW_FRAMEBUFFER, null);
      } else Pe ? x.isDataTexture || x.isData3DTexture ? A.texSubImage3D(fe, Q, Vt, Xt, ae, nt, ct, ft, kt, Mt, ie.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(fe, Q, Vt, Xt, ae, nt, ct, ft, kt, ie.data) : A.texSubImage3D(fe, Q, Vt, Xt, ae, nt, ct, ft, kt, Mt, ie) : x.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, Q, Vt, Xt, nt, ct, kt, Mt, ie.data) : x.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, Q, Vt, Xt, ie.width, ie.height, kt, ie.data) : A.texSubImage2D(A.TEXTURE_2D, Q, Vt, Xt, nt, ct, kt, Mt, ie);
      A.pixelStorei(A.UNPACK_ROW_LENGTH, Yt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Fe), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Hn), A.pixelStorei(A.UNPACK_SKIP_ROWS, Ae), A.pixelStorei(A.UNPACK_SKIP_IMAGES, pi), Q === 0 && D.generateMipmaps && A.generateMipmap(fe), vt.unbindTexture();
    }, this.copyTextureToTexture3D = function(x, D, O = null, B = null, L = 0) {
      return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(x, D, O, B, L);
    }, this.initRenderTarget = function(x) {
      gt.get(x).__webglFramebuffer === void 0 && E.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? E.setTextureCube(x, 0) : x.isData3DTexture ? E.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? E.setTexture2DArray(x, 0) : E.setTexture2D(x, 0), vt.unbindTexture();
    }, this.resetState = function() {
      R = 0, w = 0, N = null, vt.reset(), Zt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return cn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = Gt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Gt._getUnpackColorSpace();
  }
}
const Ho = { type: "change" }, ba = { type: "start" }, bl = { type: "end" }, ds = new Ps(), Vo = new _n(), tm = Math.cos(70 * bc.DEG2RAD), le = new I(), ye = 2 * Math.PI, jt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, mr = 1e-6;
class em extends mh {
  constructor(t, e = null) {
    super(t, e), this.state = jt.NONE, this.target = new I(), this.cursor = new I(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: ii.ROTATE, MIDDLE: ii.DOLLY, RIGHT: ii.PAN }, this.touches = { ONE: ei.ROTATE, TWO: ei.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new I(), this._lastQuaternion = new Bn(), this._lastTargetPosition = new I(), this._quat = new Bn().setFromUnitVectors(t.up, new I(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new po(), this._sphericalDelta = new po(), this._scale = 1, this._panOffset = new I(), this._rotateStart = new Ct(), this._rotateEnd = new Ct(), this._rotateDelta = new Ct(), this._panStart = new Ct(), this._panEnd = new Ct(), this._panDelta = new Ct(), this._dollyStart = new Ct(), this._dollyEnd = new Ct(), this._dollyDelta = new Ct(), this._dollyDirection = new I(), this._mouse = new Ct(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = im.bind(this), this._onPointerDown = nm.bind(this), this._onPointerUp = sm.bind(this), this._onContextMenu = um.bind(this), this._onMouseWheel = om.bind(this), this._onKeyDown = lm.bind(this), this._onTouchStart = cm.bind(this), this._onTouchMove = hm.bind(this), this._onMouseDown = rm.bind(this), this._onMouseMove = am.bind(this), this._interceptControlDown = dm.bind(this), this._interceptControlUp = fm.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Ho), this.update(), this.state = jt.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    le.copy(e).sub(this.target), le.applyQuaternion(this._quat), this._spherical.setFromVector3(le), this.autoRotate && this.state === jt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += ye : n > Math.PI && (n -= ye), s < -Math.PI ? s += ye : s > Math.PI && (s -= ye), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (le.setFromSpherical(this._spherical), le.applyQuaternion(this._quatInverse), e.copy(this.target).add(le), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = le.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new I(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new I(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = le.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (ds.origin.copy(this.object.position), ds.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(ds.direction)) < tm ? this.object.lookAt(this.target) : (Vo.setFromNormalAndCoplanarPoint(this.object.up, this.target), ds.intersectPlane(Vo, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > mr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > mr || this._lastTargetPosition.distanceToSquared(this.target) > mr ? (this.dispatchEvent(Ho), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? ye / 60 * this.autoRotateSpeed * t : ye / 60 / 60 * this.autoRotateSpeed;
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
    le.setFromMatrixColumn(e, 0), le.multiplyScalar(-t), this._panOffset.add(le);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? le.setFromMatrixColumn(e, 1) : (le.setFromMatrixColumn(e, 0), le.crossVectors(this.object.up, le)), le.multiplyScalar(t), this._panOffset.add(le);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      le.copy(s).sub(this.target);
      let r = le.length();
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
    this._rotateLeft(ye * this._rotateDelta.x / e.clientHeight), this._rotateUp(ye * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-ye * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
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
    this._rotateLeft(ye * this._rotateDelta.x / e.clientHeight), this._rotateUp(ye * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
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
    e === void 0 && (e = new Ct(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
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
function nm(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function im(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function sm(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(bl), this.state = jt.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function rm(i) {
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
    case ii.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = jt.DOLLY;
      break;
    case ii.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = jt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = jt.ROTATE;
      }
      break;
    case ii.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = jt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = jt.PAN;
      }
      break;
    default:
      this.state = jt.NONE;
  }
  this.state !== jt.NONE && this.dispatchEvent(ba);
}
function am(i) {
  switch (this.state) {
    case jt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case jt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case jt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function om(i) {
  this.enabled === false || this.enableZoom === false || this.state !== jt.NONE || (i.preventDefault(), this.dispatchEvent(ba), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(bl));
}
function lm(i) {
  this.enabled !== false && this._handleKeyDown(i);
}
function cm(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ei.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = jt.TOUCH_ROTATE;
          break;
        case ei.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = jt.TOUCH_PAN;
          break;
        default:
          this.state = jt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ei.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = jt.TOUCH_DOLLY_PAN;
          break;
        case ei.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = jt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = jt.NONE;
      }
      break;
    default:
      this.state = jt.NONE;
  }
  this.state !== jt.NONE && this.dispatchEvent(ba);
}
function hm(i) {
  switch (this._trackPointer(i), this.state) {
    case jt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case jt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case jt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case jt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = jt.NONE;
  }
}
function um(i) {
  this.enabled !== false && i.preventDefault();
}
function dm(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function fm(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
var bi = function() {
  var i = 0, t = document.createElement("div");
  t.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", t.addEventListener("click", function(h) {
    h.preventDefault(), n(++i % t.children.length);
  }, false);
  function e(h) {
    return t.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < t.children.length; u++) t.children[u].style.display = u === h ? "block" : "none";
    i = h;
  }
  var s = (performance || Date).now(), r = s, a = 0, o = e(new bi.Panel("FPS", "#0ff", "#002")), c = e(new bi.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var l = e(new bi.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: t, addPanel: e, showPanel: n, begin: function() {
    s = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (c.update(h - s, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, l)) {
      var u = performance.memory;
      l.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    s = this.end();
  }, domElement: t, setMode: n };
};
bi.Panel = function(i, t, e) {
  var n = 1 / 0, s = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, c = 48 * a, l = 3 * a, h = 2 * a, u = 3 * a, f = 15 * a, m = 74 * a, g = 30 * a, v = document.createElement("canvas");
  v.width = o, v.height = c, v.style.cssText = "width:80px;height:48px";
  var p = v.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = e, p.fillRect(0, 0, o, c), p.fillStyle = t, p.fillText(i, l, h), p.fillRect(u, f, m, g), p.fillStyle = e, p.globalAlpha = 0.9, p.fillRect(u, f, m, g), { dom: v, update: function(d, T) {
    n = Math.min(n, d), s = Math.max(s, d), p.fillStyle = e, p.globalAlpha = 1, p.fillRect(0, 0, o, f), p.fillStyle = t, p.fillText(r(d) + " " + i + " (" + r(n) + "-" + r(s) + ")", l, h), p.drawImage(v, u + a, f, m - a, g, u, f, m - a, g), p.fillRect(u + m - a, f, a, g), p.fillStyle = e, p.globalAlpha = 0.9, p.fillRect(u + m - a, f, a, r((1 - d / T) * g));
  } };
};
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/
class je {
  constructor(t, e, n, s, r = "div") {
    this.parent = t, this.object = e, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(s), this.$name = document.createElement("div"), this.$name.classList.add("name"), je.nextNameID = je.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++je.nextNameID, this.$widget = document.createElement(r), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
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
class pm extends je {
  constructor(t, e, n) {
    super(t, e, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function oa(i) {
  let t, e;
  return (t = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? e = t[2] : (t = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? e = parseInt(t[1]).toString(16).padStart(2, 0) + parseInt(t[2]).toString(16).padStart(2, 0) + parseInt(t[3]).toString(16).padStart(2, 0) : (t = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (e = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), !!e && "#" + e;
}
const mm = { isPrimitive: true, match: (i) => typeof i == "string", fromHexString: oa, toHexString: oa }, Di = { isPrimitive: true, match: (i) => typeof i == "number", fromHexString: (i) => parseInt(i.substring(1), 16), toHexString: (i) => "#" + i.toString(16).padStart(6, 0) }, gm = { isPrimitive: false, match: Array.isArray, fromHexString(i, t, e = 1) {
  const n = Di.fromHexString(i);
  t[0] = (n >> 16 & 255) / 255 * e, t[1] = (n >> 8 & 255) / 255 * e, t[2] = (255 & n) / 255 * e;
}, toHexString: ([i, t, e], n = 1) => Di.toHexString(i * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, _m = { isPrimitive: false, match: (i) => Object(i) === i, fromHexString(i, t, e = 1) {
  const n = Di.fromHexString(i);
  t.r = (n >> 16 & 255) / 255 * e, t.g = (n >> 8 & 255) / 255 * e, t.b = (255 & n) / 255 * e;
}, toHexString: ({ r: i, g: t, b: e }, n = 1) => Di.toHexString(i * (n = 255 / n) << 16 ^ t * n << 8 ^ e * n << 0) }, vm = [mm, Di, gm, _m];
class xm extends je {
  constructor(t, e, n, s) {
    var r;
    super(t, e, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (r = this.initialValue, vm.find((a) => a.match(r))), this._rgbScale = s, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const a = oa(this.$text.value);
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
class gr extends je {
  constructor(t, e, n) {
    super(t, e, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (s) => {
      s.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class Mm extends je {
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
    const c = (h) => {
      if (o) {
        const u = h.clientX - e, f = h.clientY - n;
        Math.abs(f) > 5 ? (h.preventDefault(), this.$input.blur(), o = false, this._setDraggingStyle(true, "vertical")) : Math.abs(u) > 5 && l();
      }
      if (!o) {
        const u = h.clientY - s;
        a -= u * this._step * this._arrowKeyMultiplier(h), r + a > this._max ? a = this._max - r : r + a < this._min && (a = this._min - r), this._snapClampSetValue(r + a);
      }
      s = h.clientY;
    }, l = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", l);
    };
    this.$input.addEventListener("input", () => {
      let h = parseFloat(this.$input.value);
      isNaN(h) || (this._stepExplicit && (h = this._snap(h)), this.setValue(this._clamp(h)));
    }), this.$input.addEventListener("keydown", (h) => {
      h.code === "Enter" && this.$input.blur(), h.code === "ArrowUp" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h))), h.code === "ArrowDown" && (h.preventDefault(), t(this._step * this._arrowKeyMultiplier(h) * -1));
    }), this.$input.addEventListener("wheel", (h) => {
      this._inputFocused && (h.preventDefault(), t(this._step * this._normalizeMouseWheel(h)));
    }, { passive: false }), this.$input.addEventListener("mousedown", (h) => {
      e = h.clientX, n = s = h.clientY, o = true, r = this.getValue(), a = 0, window.addEventListener("mousemove", c), window.addEventListener("mouseup", l);
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
    }, c = (f) => {
      if (a) {
        const m = f.touches[0].clientX - s, g = f.touches[0].clientY - r;
        Math.abs(m) > Math.abs(g) ? o(f) : (window.removeEventListener("touchmove", c), window.removeEventListener("touchend", l));
      } else f.preventDefault(), t(f.touches[0].clientX);
    }, l = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", c), window.removeEventListener("touchend", l);
    }, h = this._callOnFinishChange.bind(this);
    let u;
    this.$slider.addEventListener("mousedown", (f) => {
      this._setDraggingStyle(true), t(f.clientX), window.addEventListener("mousemove", e), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (f) => {
      f.touches.length > 1 || (this._hasScrollBar ? (s = f.touches[0].clientX, r = f.touches[0].clientY, a = true) : o(f), window.addEventListener("touchmove", c, { passive: false }), window.addEventListener("touchend", l));
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
class Sm extends je {
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
class Em extends je {
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
let ko = false;
class Ta {
  constructor({ parent: t, autoPlace: e = t === void 0, container: n, width: s, title: r = "Controls", injectStyles: a = true, touchStyles: o = true } = {}) {
    if (this.parent = t, this.root = t ? t.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (c) => {
      c.code !== "Enter" && c.code !== "Space" || (c.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(r), o && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !ko && a && (function(c) {
      const l = document.createElement("style");
      l.innerHTML = c;
      const h = document.querySelector("head link[rel=stylesheet], head style");
      h ? document.head.insertBefore(l, h) : document.head.appendChild(l);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), ko = true), n ? n.appendChild(this.domElement) : e && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), s && this.domElement.style.setProperty("--width", s + "px"), this.domElement.addEventListener("keydown", (c) => c.stopPropagation()), this.domElement.addEventListener("keyup", (c) => c.stopPropagation());
  }
  add(t, e, n, s, r) {
    if (Object(n) === n) return new Sm(this, t, e, n);
    const a = t[e];
    switch (typeof a) {
      case "number":
        return new Mm(this, t, e, n, s, r);
      case "boolean":
        return new pm(this, t, e);
      case "string":
        return new Em(this, t, e);
      case "function":
        return new gr(this, t, e);
    }
    console.error(`gui.add failed
	property:`, e, `
	object:`, t, `
	value:`, a);
  }
  addColor(t, e, n = 1) {
    return new xm(this, t, e, n);
  }
  addFolder(t) {
    return new Ta({ parent: this, title: t });
  }
  load(t, e = true) {
    return t.controllers && this.controllers.forEach((n) => {
      n instanceof gr || n._name in t.controllers && n.load(t.controllers[n._name]);
    }), e && t.folders && this.folders.forEach((n) => {
      n._title in t.folders && n.load(t.folders[n._title]);
    }), this;
  }
  save(t = true) {
    const e = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof gr)) {
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
const ym = /^[og]\s*(.+)?/, bm = /^mtllib /, Tm = /^usemtl /, Am = /^usemap /, Go = /\s+/, Wo = new I(), _r = new I(), Xo = new I(), Yo = new I(), Ie = new I(), fs = new Ut();
function wm() {
  const i = { objects: [], object: {}, vertices: [], normals: [], colors: [], uvs: [], materials: {}, materialLibraries: [], startObject: function(t, e) {
    if (this.object && this.object.fromDeclaration === false) {
      this.object.name = t, this.object.fromDeclaration = e !== false;
      return;
    }
    const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
    if (this.object && typeof this.object._finalize == "function" && this.object._finalize(true), this.object = { name: t || "", fromDeclaration: e !== false, geometry: { vertices: [], normals: [], colors: [], uvs: [], hasUVIndices: false }, materials: [], smooth: true, startMaterial: function(s, r) {
      const a = this._finalize(false);
      a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
      const o = { index: this.materials.length, name: s || "", mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "", smooth: a !== void 0 ? a.smooth : this.smooth, groupStart: a !== void 0 ? a.groupEnd : 0, groupEnd: -1, groupCount: -1, inherited: false, clone: function(c) {
        const l = { index: typeof c == "number" ? c : this.index, name: this.name, mtllib: this.mtllib, smooth: this.smooth, groupStart: 0, groupEnd: -1, groupCount: -1, inherited: false };
        return l.clone = this.clone.bind(l), l;
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
    Wo.fromArray(s, t), _r.fromArray(s, e), Xo.fromArray(s, n), Ie.subVectors(Xo, _r), Yo.subVectors(Wo, _r), Ie.cross(Yo), Ie.normalize(), r.push(Ie.x, Ie.y, Ie.z), r.push(Ie.x, Ie.y, Ie.z), r.push(Ie.x, Ie.y, Ie.z);
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
  }, addFace: function(t, e, n, s, r, a, o, c, l) {
    const h = this.vertices.length;
    let u = this.parseVertexIndex(t, h), f = this.parseVertexIndex(e, h), m = this.parseVertexIndex(n, h);
    if (this.addVertex(u, f, m), this.addColor(u, f, m), o !== void 0 && o !== "") {
      const g = this.normals.length;
      u = this.parseNormalIndex(o, g), f = this.parseNormalIndex(c, g), m = this.parseNormalIndex(l, g), this.addNormal(u, f, m);
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
class Rm extends ui {
  constructor(t) {
    super(t), this.materials = null;
  }
  load(t, e, n, s) {
    const r = this, a = new lh(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(o) {
      try {
        e(r.parse(o));
      } catch (c) {
        s ? s(c) : console.error(c), r.manager.itemError(t);
      }
    }, n, s);
  }
  setMaterials(t) {
    return this.materials = t, this;
  }
  parse(t) {
    const e = new wm();
    t.indexOf(`\r
`) !== -1 && (t = t.replace(/\r\n/g, `
`)), t.indexOf(`\\
`) !== -1 && (t = t.replace(/\\\n/g, ""));
    const n = t.split(`
`);
    let s = [];
    for (let o = 0, c = n.length; o < c; o++) {
      const l = n[o].trimStart();
      if (l.length === 0) continue;
      const h = l.charAt(0);
      if (h !== "#") if (h === "v") {
        const u = l.split(Go);
        switch (u[0]) {
          case "v":
            e.vertices.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3])), u.length >= 7 ? (fs.setRGB(parseFloat(u[4]), parseFloat(u[5]), parseFloat(u[6]), be), e.colors.push(fs.r, fs.g, fs.b)) : e.colors.push(void 0, void 0, void 0);
            break;
          case "vn":
            e.normals.push(parseFloat(u[1]), parseFloat(u[2]), parseFloat(u[3]));
            break;
          case "vt":
            e.uvs.push(parseFloat(u[1]), parseFloat(u[2]));
            break;
        }
      } else if (h === "f") {
        const f = l.slice(1).trim().split(Go), m = [];
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
        const u = l.substring(1).trim().split(" ");
        let f = [];
        const m = [];
        if (l.indexOf("/") === -1) f = u;
        else for (let g = 0, v = u.length; g < v; g++) {
          const p = u[g].split("/");
          p[0] !== "" && f.push(p[0]), p[1] !== "" && m.push(p[1]);
        }
        e.addLineGeometry(f, m);
      } else if (h === "p") {
        const f = l.slice(1).trim().split(" ");
        e.addPointGeometry(f);
      } else if ((s = ym.exec(l)) !== null) {
        const u = (" " + s[0].slice(1).trim()).slice(1);
        e.startObject(u);
      } else if (Tm.test(l)) e.object.startMaterial(l.substring(7).trim(), e.materialLibraries);
      else if (bm.test(l)) e.materialLibraries.push(l.substring(7).trim());
      else if (Am.test(l)) console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
      else if (h === "s") {
        if (s = l.split(" "), s.length > 1) {
          const f = s[1].trim().toLowerCase();
          e.object.smooth = f !== "0" && f !== "off";
        } else e.object.smooth = true;
        const u = e.object.currentMaterial();
        u && (u.smooth = e.object.smooth);
      } else {
        if (l === "\0") continue;
        console.warn('THREE.OBJLoader: Unexpected line: "' + l + '"');
      }
    }
    e.finalize();
    const r = new Si();
    if (r.materialLibraries = [].concat(e.materialLibraries), !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === true) for (let o = 0, c = e.objects.length; o < c; o++) {
      const l = e.objects[o], h = l.geometry, u = l.materials, f = h.type === "Line", m = h.type === "Points";
      let g = false;
      if (h.vertices.length === 0) continue;
      const v = new Xe();
      v.setAttribute("position", new Me(h.vertices, 3)), h.normals.length > 0 && v.setAttribute("normal", new Me(h.normals, 3)), h.colors.length > 0 && (g = true, v.setAttribute("color", new Me(h.colors, 3))), h.hasUVIndices === true && v.setAttribute("uv", new Me(h.uvs, 2));
      const p = [];
      for (let T = 0, b = u.length; T < b; T++) {
        const S = u[T], U = S.name + "_" + S.smooth + "_" + g;
        let R = e.materials[U];
        if (this.materials !== null) {
          if (R = this.materials.create(S.name), f && R && !(R instanceof Ss)) {
            const w = new Ss();
            Ze.prototype.copy.call(w, R), w.color.copy(R.color), R = w;
          } else if (m && R && !(R instanceof Ei)) {
            const w = new Ei({ size: 10, sizeAttenuation: false });
            Ze.prototype.copy.call(w, R), w.color.copy(R.color), w.map = R.map, R = w;
          }
        }
        R === void 0 && (f ? R = new Ss() : m ? R = new Ei({ size: 1, sizeAttenuation: false }) : R = new nh(), R.name = S.name, R.flatShading = !S.smooth, R.vertexColors = g, e.materials[U] = R), p.push(R);
      }
      let d;
      if (p.length > 1) {
        for (let T = 0, b = u.length; T < b; T++) {
          const S = u[T];
          v.addGroup(S.groupStart, S.groupCount, T);
        }
        f ? d = new lo(v, p) : m ? d = new or(v, p) : d = new ke(v, p);
      } else f ? d = new lo(v, p[0]) : m ? d = new or(v, p[0]) : d = new ke(v, p[0]);
      d.name = l.name, r.add(d);
    }
    else if (e.vertices.length > 0) {
      const o = new Ei({ size: 1, sizeAttenuation: false }), c = new Xe();
      c.setAttribute("position", new Me(e.vertices, 3)), e.colors.length > 0 && e.colors[0] !== void 0 && (c.setAttribute("color", new Me(e.colors, 3)), o.vertexColors = true);
      const l = new or(c, o);
      r.add(l);
    }
    return r;
  }
}
const fi = new Sa();
fi.background = new Ut(15592941);
const Cm = new fh(16777215, 1);
fi.add(Cm);
const Tl = new dh(16777215, 1);
Tl.position.set(5, 10, 7.5);
fi.add(Tl);
let la = null, Ti = null, ca = null;
const Pm = new gl(), qo = "/Three.js-Gameboy-Mods/";
Pm.load(qo + "substance_standardSurface1_BaseColor.png", (i) => {
  ca = i;
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
    n.putImageData(r, 0, 0), Ti = new _e(e), Ti.needsUpdate = true;
  } else console.error("Could not get 2D context from canvas.");
  new Rm().load(qo + "model_0.obj", (r) => {
    la = r, r.traverse((a) => {
      a.isMesh && (a.material = new Ls({ map: Ti }));
    }), r.scale.set(1 / 8, 1 / 8, 1 / 8), fi.add(r);
  }, (r) => {
    console.log(r.loaded / r.total * 100 + "% loaded");
  }, (r) => {
    console.error("An error happened while loading the OBJ:", r);
  });
}, void 0, (i) => {
  console.error("Texture failed to load", i);
});
function Aa(i) {
  la && la.traverse((t) => {
    t.isMesh && (t.material = i);
  });
}
function Dm() {
  Ti && Aa(new Ls({ map: Ti }));
}
function Lm() {
  ca && Aa(new Ls({ map: ca }));
}
function Im() {
  Aa(new Ls({ wireframe: true }));
}
const Al = new Sa();
Al.background = new gl().load("https://sbcode.net/img/grid.png");
const wl = new Sa();
wl.background = new ch().setPath("https://sbcode.net/img/").load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
const Li = new Ue(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
Li.position.z = 1.5;
const Bi = new Qp();
Bi.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(Bi.domElement);
window.addEventListener("resize", () => {
  Li.aspect = window.innerWidth / window.innerHeight, Li.updateProjectionMatrix(), Bi.setSize(window.innerWidth, window.innerHeight);
});
new em(Li, Bi.domElement);
const Rl = new bi();
document.body.appendChild(Rl.dom);
let ys = fi;
const vr = { sceneA: () => {
  ys = fi;
}, sceneB: () => {
  ys = Al;
}, sceneC: () => {
  ys = wl;
} }, Um = new Ta(), Us = Um.addFolder("Mods");
Us.add({ Greyscale: Dm }, "Greyscale").name("Greyscale");
Us.add({ Color: Lm }, "Color").name("Original Color");
Us.add({ Wireframe: Im }, "Wireframe").name("Wireframe");
Us.open();
window.addEventListener("DOMContentLoaded", () => {
  const i = document.getElementById("btn-gba"), t = document.getElementById("btn-gba-sp"), e = document.getElementById("btn-gbc");
  i && i.addEventListener("click", () => vr.sceneA()), t && t.addEventListener("click", () => vr.sceneB()), e && e.addEventListener("click", () => vr.sceneC());
});
function Cl() {
  requestAnimationFrame(Cl), Bi.render(ys, Li), Rl.update();
}
Cl();
