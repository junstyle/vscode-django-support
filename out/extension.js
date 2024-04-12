var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../prettier-plugin-django/out/index.js
var require_out = __commonJS({
  "../prettier-plugin-django/out/index.js"(exports, module) {
    "use strict";
    var $S = Object.create;
    var jn = Object.defineProperty;
    var JS = Object.getOwnPropertyDescriptor;
    var zS = Object.getOwnPropertyNames;
    var QS = Object.getPrototypeOf;
    var ZS = Object.prototype.hasOwnProperty;
    var i = (e, t) => jn(e, "name", { value: t, configurable: true });
    var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var $l = (e, t) => {
      for (var r in t)
        jn(e, r, { get: t[r], enumerable: true });
    };
    var Jl = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let s of zS(t))
          !ZS.call(e, s) && s !== r && jn(e, s, { get: () => t[s], enumerable: !(n = JS(t, s)) || n.enumerable });
      return e;
    };
    var W = (e, t, r) => (r = e != null ? $S(QS(e)) : {}, Jl(t || !e || !e.__esModule ? jn(r, "default", { value: e, enumerable: true }) : r, e));
    var eF = (e) => Jl(jn({}, "__esModule", { value: true }), e);
    var Ot = l((vG, zl) => {
      var tF = zl.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = tF);
    });
    var jt = l((SG, Ql) => {
      var rF = {}.hasOwnProperty;
      Ql.exports = function(e, t) {
        return rF.call(e, t);
      };
    });
    var Hr = l((FG, Zl) => {
      Zl.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    });
    var hr = l((CG, ec) => {
      ec.exports = !Hr()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Ke = l((BG, tc) => {
      var nF = tc.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = nF);
    });
    var nc = l((bG, rc) => {
      rc.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    });
    var ac = l((OG, sc) => {
      var iF = nc();
      sc.exports = function(e, t, r) {
        if (iF(e), t === void 0)
          return e;
        switch (r) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, s) {
              return e.call(t, n, s);
            };
          case 3:
            return function(n, s, a) {
              return e.call(t, n, s, a);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    });
    var Xr = l((NG, uc) => {
      uc.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    });
    var $r = l((_G, oc) => {
      var sF = Xr();
      oc.exports = function(e) {
        if (!sF(e))
          throw TypeError(e + " is not an object!");
        return e;
      };
    });
    var ru = l((IG, cc) => {
      var lc = Xr(), tu = Ot().document, aF = lc(tu) && lc(tu.createElement);
      cc.exports = function(e) {
        return aF ? tu.createElement(e) : {};
      };
    });
    var nu = l((RG, pc) => {
      pc.exports = !hr() && !Hr()(function() {
        return Object.defineProperty(ru()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var ns = l((PG, fc) => {
      var rs = Xr();
      fc.exports = function(e, t) {
        if (!rs(e))
          return e;
        var r, n;
        if (t && typeof (r = e.toString) == "function" && !rs(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !rs(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !rs(n = r.call(e)))
          return n;
        throw TypeError("Can't convert object to primitive value");
      };
    });
    var Dr = l((Ec) => {
      var dc = $r(), uF = nu(), oF = ns(), lF = Object.defineProperty;
      Ec.f = hr() ? Object.defineProperty : i(function(t, r, n) {
        if (dc(t), r = oF(r, true), dc(n), uF)
          try {
            return lF(t, r, n);
          } catch {
          }
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported!");
        return "value" in n && (t[r] = n.value), t;
      }, "defineProperty");
    });
    var Un = l((LG, mc) => {
      mc.exports = function(e, t) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
      };
    });
    var yr = l((kG, hc) => {
      var cF = Dr(), pF = Un();
      hc.exports = hr() ? function(e, t, r) {
        return cF.f(e, t, pF(1, r));
      } : function(e, t, r) {
        return e[t] = r, e;
      };
    });
    var Jr = l((MG, yc) => {
      var is = Ot(), iu = Ke(), Dc = ac(), fF = yr(), dF = jt(), ss = "prototype", Re = i(function(e, t, r) {
        var n = e & Re.F, s = e & Re.G, a = e & Re.S, u = e & Re.P, c = e & Re.B, p = e & Re.W, f = s ? iu : iu[t] || (iu[t] = {}), h = f[ss], D = s ? is : a ? is[t] : (is[t] || {})[ss], d, x, C;
        s && (r = t);
        for (d in r)
          x = !n && D && D[d] !== void 0, !(x && dF(f, d)) && (C = x ? D[d] : r[d], f[d] = s && typeof D[d] != "function" ? r[d] : c && x ? Dc(C, is) : p && D[d] == C ? function(O) {
            var g = i(function(j, $, re) {
              if (this instanceof O) {
                switch (arguments.length) {
                  case 0:
                    return new O();
                  case 1:
                    return new O(j);
                  case 2:
                    return new O(j, $);
                }
                return new O(j, $, re);
              }
              return O.apply(this, arguments);
            }, "F");
            return g[ss] = O[ss], g;
          }(C) : u && typeof C == "function" ? Dc(Function.call, C) : C, u && ((f.virtual || (f.virtual = {}))[d] = C, e & Re.R && h && !h[d] && fF(h, d, C)));
      }, "$export");
      Re.F = 1;
      Re.G = 2;
      Re.S = 4;
      Re.P = 8;
      Re.B = 16;
      Re.W = 32;
      Re.U = 64;
      Re.R = 128;
      yc.exports = Re;
    });
    var su = l((jG, Ac) => {
      Ac.exports = yr();
    });
    var Yn = l((UG, xc) => {
      var EF = 0, mF = Math.random();
      xc.exports = function(e) {
        return "Symbol(".concat(e === void 0 ? "" : e, ")_", (++EF + mF).toString(36));
      };
    });
    var gc = l((YG, Tc) => {
      var Ar = Yn()("meta"), hF = Xr(), au = jt(), DF = Dr().f, yF = 0, as = Object.isExtensible || function() {
        return true;
      }, AF = !Hr()(function() {
        return as(Object.preventExtensions({}));
      }), uu = i(function(e) {
        DF(e, Ar, { value: { i: "O" + ++yF, w: {} } });
      }, "setMeta"), xF = i(function(e, t) {
        if (!hF(e))
          return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!au(e, Ar)) {
          if (!as(e))
            return "F";
          if (!t)
            return "E";
          uu(e);
        }
        return e[Ar].i;
      }, "fastKey"), TF = i(function(e, t) {
        if (!au(e, Ar)) {
          if (!as(e))
            return true;
          if (!t)
            return false;
          uu(e);
        }
        return e[Ar].w;
      }, "getWeak"), gF = i(function(e) {
        return AF && vF.NEED && as(e) && !au(e, Ar) && uu(e), e;
      }, "onFreeze"), vF = Tc.exports = { KEY: Ar, NEED: false, fastKey: xF, getWeak: TF, onFreeze: gF };
    });
    var Vn = l((KG, vc) => {
      vc.exports = true;
    });
    var us = l((WG, Bc) => {
      var SF = Ke(), Sc = Ot(), Fc = "__core-js_shared__", Cc = Sc[Fc] || (Sc[Fc] = {});
      (Bc.exports = function(e, t) {
        return Cc[e] || (Cc[e] = t !== void 0 ? t : {});
      })("versions", []).push({ version: SF.version, mode: Vn() ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    });
    var Nt = l((HG, Oc) => {
      var ou = us()("wks"), FF = Yn(), lu = Ot().Symbol, bc = typeof lu == "function", CF = Oc.exports = function(e) {
        return ou[e] || (ou[e] = bc && lu[e] || (bc ? lu : FF)("Symbol." + e));
      };
      CF.store = ou;
    });
    var os = l((XG, _c) => {
      var BF = Dr().f, bF = jt(), Nc = Nt()("toStringTag");
      _c.exports = function(e, t, r) {
        e && !bF(e = r ? e : e.prototype, Nc) && BF(e, Nc, { configurable: true, value: t });
      };
    });
    var ls = l((Ic) => {
      Ic.f = Nt();
    });
    var cs = l((JG, Pc) => {
      var OF = Ot(), Rc = Ke(), NF = Vn(), _F = ls(), IF = Dr().f;
      Pc.exports = function(e) {
        var t = Rc.Symbol || (Rc.Symbol = NF ? {} : OF.Symbol || {});
        e.charAt(0) != "_" && !(e in t) && IF(t, e, { value: _F.f(e) });
      };
    });
    var ps = l((zG, qc) => {
      var RF = {}.toString;
      qc.exports = function(e) {
        return RF.call(e).slice(8, -1);
      };
    });
    var Lc = l((QG, wc) => {
      var PF = ps();
      wc.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return PF(e) == "String" ? e.split("") : Object(e);
      };
    });
    var fs = l((ZG, kc) => {
      kc.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    });
    var xr = l((ej, Mc) => {
      var qF = Lc(), wF = fs();
      Mc.exports = function(e) {
        return qF(wF(e));
      };
    });
    var ds = l((tj, Gc) => {
      var LF = Math.ceil, kF = Math.floor;
      Gc.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? kF : LF)(e);
      };
    });
    var Uc = l((rj, jc) => {
      var MF = ds(), GF = Math.min;
      jc.exports = function(e) {
        return e > 0 ? GF(MF(e), 9007199254740991) : 0;
      };
    });
    var Vc = l((nj, Yc) => {
      var jF = ds(), UF = Math.max, YF = Math.min;
      Yc.exports = function(e, t) {
        return e = jF(e), e < 0 ? UF(e + t, 0) : YF(e, t);
      };
    });
    var Wc = l((ij, Kc) => {
      var VF = xr(), KF = Uc(), WF = Vc();
      Kc.exports = function(e) {
        return function(t, r, n) {
          var s = VF(t), a = KF(s.length), u = WF(n, a), c;
          if (e && r != r) {
            for (; a > u; )
              if (c = s[u++], c != c)
                return true;
          } else
            for (; a > u; u++)
              if ((e || u in s) && s[u] === r)
                return e || u || 0;
          return !e && -1;
        };
      };
    });
    var Es = l((sj, Xc) => {
      var Hc = us()("keys"), HF = Yn();
      Xc.exports = function(e) {
        return Hc[e] || (Hc[e] = HF(e));
      };
    });
    var cu = l((aj, Jc) => {
      var $c = jt(), XF = xr(), $F = Wc()(false), JF = Es()("IE_PROTO");
      Jc.exports = function(e, t) {
        var r = XF(e), n = 0, s = [], a;
        for (a in r)
          a != JF && $c(r, a) && s.push(a);
        for (; t.length > n; )
          $c(r, a = t[n++]) && (~$F(s, a) || s.push(a));
        return s;
      };
    });
    var ms = l((uj, zc) => {
      zc.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    });
    var Kn = l((oj, Qc) => {
      var zF = cu(), QF = ms();
      Qc.exports = Object.keys || i(function(t) {
        return zF(t, QF);
      }, "keys");
    });
    var pu = l((Zc) => {
      Zc.f = Object.getOwnPropertySymbols;
    });
    var hs = l((ep) => {
      ep.f = {}.propertyIsEnumerable;
    });
    var rp = l((fj, tp) => {
      var ZF = Kn(), eC = pu(), tC = hs();
      tp.exports = function(e) {
        var t = ZF(e), r = eC.f;
        if (r)
          for (var n = r(e), s = tC.f, a = 0, u; n.length > a; )
            s.call(e, u = n[a++]) && t.push(u);
        return t;
      };
    });
    var ip = l((dj, np) => {
      var rC = ps();
      np.exports = Array.isArray || i(function(t) {
        return rC(t) == "Array";
      }, "isArray");
    });
    var Ds = l((mj, sp) => {
      var nC = fs();
      sp.exports = function(e) {
        return Object(nC(e));
      };
    });
    var up = l((hj, ap) => {
      var iC = Dr(), sC = $r(), aC = Kn();
      ap.exports = hr() ? Object.defineProperties : i(function(t, r) {
        sC(t);
        for (var n = aC(r), s = n.length, a = 0, u; s > a; )
          iC.f(t, u = n[a++], r[u]);
        return t;
      }, "defineProperties");
    });
    var cp = l((yj, lp) => {
      var op = Ot().document;
      lp.exports = op && op.documentElement;
    });
    var As = l((Aj, fp) => {
      var uC = $r(), oC = up(), pp = ms(), lC = Es()("IE_PROTO"), fu = i(function() {
      }, "Empty"), du = "prototype", ys = i(function() {
        var e = ru()("iframe"), t = pp.length, r = "<", n = ">", s;
        for (e.style.display = "none", cp().appendChild(e), e.src = "javascript:", s = e.contentWindow.document, s.open(), s.write(r + "script" + n + "document.F=Object" + r + "/script" + n), s.close(), ys = s.F; t--; )
          delete ys[du][pp[t]];
        return ys();
      }, "createDict");
      fp.exports = Object.create || i(function(t, r) {
        var n;
        return t !== null ? (fu[du] = uC(t), n = new fu(), fu[du] = null, n[lC] = t) : n = ys(), r === void 0 ? n : oC(n, r);
      }, "create");
    });
    var Eu = l((dp) => {
      var cC = cu(), pC = ms().concat("length", "prototype");
      dp.f = Object.getOwnPropertyNames || i(function(t) {
        return cC(t, pC);
      }, "getOwnPropertyNames");
    });
    var Dp = l((vj, hp) => {
      var fC = xr(), Ep = Eu().f, dC = {}.toString, mp = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], EC = i(function(e) {
        try {
          return Ep(e);
        } catch {
          return mp.slice();
        }
      }, "getWindowNames");
      hp.exports.f = i(function(t) {
        return mp && dC.call(t) == "[object Window]" ? EC(t) : Ep(fC(t));
      }, "getOwnPropertyNames");
    });
    var xp = l((Ap) => {
      var mC = hs(), hC = Un(), DC = xr(), yC = ns(), AC = jt(), xC = nu(), yp = Object.getOwnPropertyDescriptor;
      Ap.f = hr() ? yp : i(function(t, r) {
        if (t = DC(t), r = yC(r, true), xC)
          try {
            return yp(t, r);
          } catch {
          }
        if (AC(t, r))
          return hC(!mC.f.call(t, r), t[r]);
      }, "getOwnPropertyDescriptor");
    });
    var Cs = l(() => {
      "use strict";
      var gs = Ot(), Oe = jt(), xu = hr(), Pe = Jr(), Tp = su(), TC = gc().KEY, Cu = Hr(), Bu = us(), bu = os(), gC = Yn(), Xn = Nt(), vC = ls(), SC = cs(), FC = rp(), CC = ip(), Tu = $r(), BC = Xr(), bC = Ds(), vs = xr(), Ou = ns(), gu = Un(), Hn = As(), Fp = Dp(), Cp = xp(), Ss = pu(), Bp = Dr(), OC = Kn(), bp = Cp.f, Tr = Bp.f, Op = Fp.f, Ue = gs.Symbol, Ts = gs.JSON, xs = Ts && Ts.stringify, Ut = "prototype", je = Xn("_hidden"), gp = Xn("toPrimitive"), NC = {}.propertyIsEnumerable, Wn = Bu("symbol-registry"), _t = Bu("symbols"), $n = Bu("op-symbols"), Je = Object[Ut], zr = typeof Ue == "function" && !!Ss.f, mu = gs.QObject, vu = !mu || !mu[Ut] || !mu[Ut].findChild, Su = xu && Cu(function() {
        return Hn(Tr({}, "a", { get: function() {
          return Tr(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(e, t, r) {
        var n = bp(Je, t);
        n && delete Je[t], Tr(e, t, r), n && e !== Je && Tr(Je, t, n);
      } : Tr, vp = i(function(e) {
        var t = _t[e] = Hn(Ue[Ut]);
        return t._k = e, t;
      }, "wrap"), Fu = zr && typeof Ue.iterator == "symbol" ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        return e instanceof Ue;
      }, Fs = i(function(t, r, n) {
        return t === Je && Fs($n, r, n), Tu(t), r = Ou(r, true), Tu(n), Oe(_t, r) ? (n.enumerable ? (Oe(t, je) && t[je][r] && (t[je][r] = false), n = Hn(n, { enumerable: gu(0, false) })) : (Oe(t, je) || Tr(t, je, gu(1, {})), t[je][r] = true), Su(t, r, n)) : Tr(t, r, n);
      }, "defineProperty"), Np = i(function(t, r) {
        Tu(t);
        for (var n = FC(r = vs(r)), s = 0, a = n.length, u; a > s; )
          Fs(t, u = n[s++], r[u]);
        return t;
      }, "defineProperties"), _C = i(function(t, r) {
        return r === void 0 ? Hn(t) : Np(Hn(t), r);
      }, "create"), Sp = i(function(t) {
        var r = NC.call(this, t = Ou(t, true));
        return this === Je && Oe(_t, t) && !Oe($n, t) ? false : r || !Oe(this, t) || !Oe(_t, t) || Oe(this, je) && this[je][t] ? r : true;
      }, "propertyIsEnumerable"), _p = i(function(t, r) {
        if (t = vs(t), r = Ou(r, true), !(t === Je && Oe(_t, r) && !Oe($n, r))) {
          var n = bp(t, r);
          return n && Oe(_t, r) && !(Oe(t, je) && t[je][r]) && (n.enumerable = true), n;
        }
      }, "getOwnPropertyDescriptor"), Ip = i(function(t) {
        for (var r = Op(vs(t)), n = [], s = 0, a; r.length > s; )
          !Oe(_t, a = r[s++]) && a != je && a != TC && n.push(a);
        return n;
      }, "getOwnPropertyNames"), Rp = i(function(t) {
        for (var r = t === Je, n = Op(r ? $n : vs(t)), s = [], a = 0, u; n.length > a; )
          Oe(_t, u = n[a++]) && (!r || Oe(Je, u)) && s.push(_t[u]);
        return s;
      }, "getOwnPropertySymbols");
      zr || (Ue = i(function() {
        if (this instanceof Ue)
          throw TypeError("Symbol is not a constructor!");
        var t = gC(arguments.length > 0 ? arguments[0] : void 0), r = i(function(n) {
          this === Je && r.call($n, n), Oe(this, je) && Oe(this[je], t) && (this[je][t] = false), Su(this, t, gu(1, n));
        }, "$set");
        return xu && vu && Su(Je, t, { configurable: true, set: r }), vp(t);
      }, "Symbol"), Tp(Ue[Ut], "toString", i(function() {
        return this._k;
      }, "toString")), Cp.f = _p, Bp.f = Fs, Eu().f = Fp.f = Ip, hs().f = Sp, Ss.f = Rp, xu && !Vn() && Tp(Je, "propertyIsEnumerable", Sp, true), vC.f = function(e) {
        return vp(Xn(e));
      });
      Pe(Pe.G + Pe.W + Pe.F * !zr, { Symbol: Ue });
      for (hu = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Du = 0; hu.length > Du; )
        Xn(hu[Du++]);
      var hu, Du;
      for (yu = OC(Xn.store), Au = 0; yu.length > Au; )
        SC(yu[Au++]);
      var yu, Au;
      Pe(Pe.S + Pe.F * !zr, "Symbol", { for: function(e) {
        return Oe(Wn, e += "") ? Wn[e] : Wn[e] = Ue(e);
      }, keyFor: i(function(t) {
        if (!Fu(t))
          throw TypeError(t + " is not a symbol!");
        for (var r in Wn)
          if (Wn[r] === t)
            return r;
      }, "keyFor"), useSetter: function() {
        vu = true;
      }, useSimple: function() {
        vu = false;
      } });
      Pe(Pe.S + Pe.F * !zr, "Object", { create: _C, defineProperty: Fs, defineProperties: Np, getOwnPropertyDescriptor: _p, getOwnPropertyNames: Ip, getOwnPropertySymbols: Rp });
      var IC = Cu(function() {
        Ss.f(1);
      });
      Pe(Pe.S + Pe.F * IC, "Object", { getOwnPropertySymbols: i(function(t) {
        return Ss.f(bC(t));
      }, "getOwnPropertySymbols") });
      Ts && Pe(Pe.S + Pe.F * (!zr || Cu(function() {
        var e = Ue();
        return xs([e]) != "[null]" || xs({ a: e }) != "{}" || xs(Object(e)) != "{}";
      })), "JSON", { stringify: i(function(t) {
        for (var r = [t], n = 1, s, a; arguments.length > n; )
          r.push(arguments[n++]);
        if (a = s = r[1], !(!BC(s) && t === void 0 || Fu(t)))
          return CC(s) || (s = i(function(u, c) {
            if (typeof a == "function" && (c = a.call(this, u, c)), !Fu(c))
              return c;
          }, "replacer")), r[1] = s, xs.apply(Ts, r);
      }, "stringify") });
      Ue[Ut][gp] || yr()(Ue[Ut], gp, Ue[Ut].valueOf);
      bu(Ue, "Symbol");
      bu(Math, "Math", true);
      bu(gs.JSON, "JSON", true);
    });
    var qp = l((Nj, Pp) => {
      Cs();
      Pp.exports = Ke().Object.getOwnPropertySymbols;
    });
    var Lp = l((_j, wp) => {
      wp.exports = { default: qp(), __esModule: true };
    });
    var Mp = l((Ij, kp) => {
      kp.exports = function() {
      };
    });
    var jp = l((Rj, Gp) => {
      Gp.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    });
    var Jn = l((Pj, Up) => {
      Up.exports = {};
    });
    var Kp = l((qj, Vp) => {
      "use strict";
      var RC = As(), PC = Un(), qC = os(), Yp = {};
      yr()(Yp, Nt()("iterator"), function() {
        return this;
      });
      Vp.exports = function(e, t, r) {
        e.prototype = RC(Yp, { next: PC(1, r) }), qC(e, t + " Iterator");
      };
    });
    var Xp = l((wj, Hp) => {
      var wC = jt(), LC = Ds(), Wp = Es()("IE_PROTO"), kC = Object.prototype;
      Hp.exports = Object.getPrototypeOf || function(e) {
        return e = LC(e), wC(e, Wp) ? e[Wp] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? kC : null;
      };
    });
    var Iu = l((Lj, ef) => {
      "use strict";
      var $p = Vn(), Nu = Jr(), MC = su(), Jp = yr(), zp = Jn(), GC = Kp(), jC = os(), UC = Xp(), zn = Nt()("iterator"), _u = !([].keys && "next" in [].keys()), YC = "@@iterator", Qp = "keys", Bs = "values", Zp = i(function() {
        return this;
      }, "returnThis");
      ef.exports = function(e, t, r, n, s, a, u) {
        GC(r, t, n);
        var c = i(function(re) {
          if (!_u && re in D)
            return D[re];
          switch (re) {
            case Qp:
              return i(function() {
                return new r(this, re);
              }, "keys");
            case Bs:
              return i(function() {
                return new r(this, re);
              }, "values");
          }
          return i(function() {
            return new r(this, re);
          }, "entries");
        }, "getMethod"), p = t + " Iterator", f = s == Bs, h = false, D = e.prototype, d = D[zn] || D[YC] || s && D[s], x = d || c(s), C = s ? f ? c("entries") : x : void 0, O = t == "Array" && D.entries || d, g, j, $;
        if (O && ($ = UC(O.call(new e())), $ !== Object.prototype && $.next && (jC($, p, true), !$p && typeof $[zn] != "function" && Jp($, zn, Zp))), f && d && d.name !== Bs && (h = true, x = i(function() {
          return d.call(this);
        }, "values")), (!$p || u) && (_u || h || !D[zn]) && Jp(D, zn, x), zp[t] = x, zp[p] = Zp, s)
          if (g = { values: f ? x : c(Bs), keys: a ? x : c(Qp), entries: C }, u)
            for (j in g)
              j in D || MC(D, j, g[j]);
          else
            Nu(Nu.P + Nu.F * (_u || h), t, g);
        return g;
      };
    });
    var nf = l((Mj, rf) => {
      "use strict";
      var Ru = Mp(), bs = jp(), tf = Jn(), VC = xr();
      rf.exports = Iu()(Array, "Array", function(e, t) {
        this._t = VC(e), this._i = 0, this._k = t;
      }, function() {
        var e = this._t, t = this._k, r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, bs(1)) : t == "keys" ? bs(0, r) : t == "values" ? bs(0, e[r]) : bs(0, [r, e[r]]);
      }, "values");
      tf.Arguments = tf.Array;
      Ru("keys");
      Ru("values");
      Ru("entries");
    });
    var qu = l(() => {
      nf();
      var KC = Ot(), WC = yr(), sf = Jn(), af = Nt()("toStringTag"), uf = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
      for (Os = 0; Os < uf.length; Os++)
        Ns = uf[Os], Pu = KC[Ns], _s = Pu && Pu.prototype, _s && !_s[af] && WC(_s, af, Ns), sf[Ns] = sf.Array;
      var Ns, Pu, _s, Os;
    });
    var lf = l((Uj, of) => {
      var HC = ds(), XC = fs();
      of.exports = function(e) {
        return function(t, r) {
          var n = String(XC(t)), s = HC(r), a = n.length, u, c;
          return s < 0 || s >= a ? e ? "" : void 0 : (u = n.charCodeAt(s), u < 55296 || u > 56319 || s + 1 === a || (c = n.charCodeAt(s + 1)) < 56320 || c > 57343 ? e ? n.charAt(s) : u : e ? n.slice(s, s + 2) : (u - 55296 << 10) + (c - 56320) + 65536);
        };
      };
    });
    var wu = l(() => {
      "use strict";
      var $C = lf()(true);
      Iu()(String, "String", function(e) {
        this._t = String(e), this._i = 0;
      }, function() {
        var e = this._t, t = this._i, r;
        return t >= e.length ? { value: void 0, done: true } : (r = $C(e, t), this._i += r.length, { value: r, done: false });
      });
    });
    var pf = l((Kj, cf) => {
      var Lu = ps(), JC = Nt()("toStringTag"), zC = Lu(function() {
        return arguments;
      }()) == "Arguments", QC = i(function(e, t) {
        try {
          return e[t];
        } catch {
        }
      }, "tryGet");
      cf.exports = function(e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = QC(t = Object(e), JC)) == "string" ? r : zC ? Lu(t) : (n = Lu(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
      };
    });
    var df = l((Hj, ff) => {
      var ZC = pf(), eB = Nt()("iterator"), tB = Jn();
      ff.exports = Ke().getIteratorMethod = function(e) {
        if (e != null)
          return e[eB] || e["@@iterator"] || tB[ZC(e)];
      };
    });
    var mf = l((Xj, Ef) => {
      var rB = $r(), nB = df();
      Ef.exports = Ke().getIterator = function(e) {
        var t = nB(e);
        if (typeof t != "function")
          throw TypeError(e + " is not iterable!");
        return rB(t.call(e));
      };
    });
    var Df = l(($j, hf) => {
      qu();
      wu();
      hf.exports = mf();
    });
    var Qn = l((Jj, yf) => {
      yf.exports = { default: Df(), __esModule: true };
    });
    var xf = l((zj, Af) => {
      var ku = Jr(), iB = Ke(), sB = Hr();
      Af.exports = function(e, t) {
        var r = (iB.Object || {})[e] || Object[e], n = {};
        n[e] = t(r), ku(ku.S + ku.F * sB(function() {
          r(1);
        }), "Object", n);
      };
    });
    var Tf = l(() => {
      var aB = Ds(), uB = Kn();
      xf()("keys", function() {
        return i(function(t) {
          return uB(aB(t));
        }, "keys");
      });
    });
    var vf = l((tU, gf) => {
      Tf();
      gf.exports = Ke().Object.keys;
    });
    var Mu = l((rU, Sf) => {
      Sf.exports = { default: vf(), __esModule: true };
    });
    var bf = l((nU, Bf) => {
      var Ff = Ke(), Cf = Ff.JSON || (Ff.JSON = { stringify: JSON.stringify });
      Bf.exports = i(function(t) {
        return Cf.stringify.apply(Cf, arguments);
      }, "stringify");
    });
    var Is = l((sU, Of) => {
      Of.exports = { default: bf(), __esModule: true };
    });
    var _f = l((aU, Nf) => {
      Cs();
      Nf.exports = Ke().Symbol.for;
    });
    var Rf = l((uU, If) => {
      If.exports = { default: _f(), __esModule: true };
    });
    var Rs = l((Y) => {
      "use strict";
      Y.__esModule = true;
      Y.NOT_LOCAL_BINDING = Y.BLOCK_SCOPED_SYMBOL = Y.INHERIT_KEYS = Y.UNARY_OPERATORS = Y.STRING_UNARY_OPERATORS = Y.NUMBER_UNARY_OPERATORS = Y.BOOLEAN_UNARY_OPERATORS = Y.BINARY_OPERATORS = Y.NUMBER_BINARY_OPERATORS = Y.BOOLEAN_BINARY_OPERATORS = Y.COMPARISON_BINARY_OPERATORS = Y.EQUALITY_BINARY_OPERATORS = Y.BOOLEAN_NUMBER_BINARY_OPERATORS = Y.UPDATE_OPERATORS = Y.LOGICAL_OPERATORS = Y.COMMENT_KEYS = Y.FOR_INIT_KEYS = Y.FLATTENABLE_KEYS = Y.STATEMENT_OR_BLOCK_KEYS = void 0;
      var oB = Rf(), Pf = lB(oB);
      function lB(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(lB, "_interopRequireDefault");
      var oU = Y.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"], lU = Y.FLATTENABLE_KEYS = ["body", "expressions"], cU = Y.FOR_INIT_KEYS = ["left", "init"], pU = Y.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"], fU = Y.LOGICAL_OPERATORS = ["||", "&&"], dU = Y.UPDATE_OPERATORS = ["++", "--"], cB = Y.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="], pB = Y.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="], fB = Y.COMPARISON_BINARY_OPERATORS = [].concat(pB, ["in", "instanceof"]), dB = Y.BOOLEAN_BINARY_OPERATORS = [].concat(fB, cB), EB = Y.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"], EU = Y.BINARY_OPERATORS = ["+"].concat(EB, dB), mB = Y.BOOLEAN_UNARY_OPERATORS = ["delete", "!"], hB = Y.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"], DB = Y.STRING_UNARY_OPERATORS = ["typeof"], mU = Y.UNARY_OPERATORS = ["void"].concat(mB, hB, DB), hU = Y.INHERIT_KEYS = { optional: ["typeAnnotation", "typeParameters", "returnType"], force: ["start", "loc", "end"] }, DU = Y.BLOCK_SCOPED_SYMBOL = (0, Pf.default)("var used to be block scoped"), yU = Y.NOT_LOCAL_BINDING = (0, Pf.default)("should not be considered a local binding");
    });
    var wf = l(() => {
      var qf = Jr();
      qf(qf.S, "Object", { create: As() });
    });
    var kf = l((vU, Lf) => {
      wf();
      var yB = Ke().Object;
      Lf.exports = i(function(t, r) {
        return yB.create(t, r);
      }, "create");
    });
    var Gf = l((FU, Mf) => {
      Mf.exports = { default: kf(), __esModule: true };
    });
    var ju = l((Ps) => {
      "use strict";
      Ps.__esModule = true;
      var AB = Gf(), xB = vB(AB);
      Ps.getBindingIdentifiers = Gu;
      Ps.getOuterBindingIdentifiers = SB;
      var TB = It(), Qr = gB(TB);
      function gB(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(gB, "_interopRequireWildcard");
      function vB(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(vB, "_interopRequireDefault");
      function Gu(e, t, r) {
        for (var n = [].concat(e), s = (0, xB.default)(null); n.length; ) {
          var a = n.shift();
          if (a) {
            var u = Qr.getBindingIdentifiers.keys[a.type];
            if (Qr.isIdentifier(a)) {
              if (t) {
                var c = s[a.name] = s[a.name] || [];
                c.push(a);
              } else
                s[a.name] = a;
              continue;
            }
            if (Qr.isExportDeclaration(a)) {
              Qr.isDeclaration(a.declaration) && n.push(a.declaration);
              continue;
            }
            if (r) {
              if (Qr.isFunctionDeclaration(a)) {
                n.push(a.id);
                continue;
              }
              if (Qr.isFunctionExpression(a))
                continue;
            }
            if (u)
              for (var p = 0; p < u.length; p++) {
                var f = u[p];
                a[f] && (n = n.concat(a[f]));
              }
          }
        }
        return s;
      }
      i(Gu, "getBindingIdentifiers");
      Gu.keys = { DeclareClass: ["id"], DeclareFunction: ["id"], DeclareModule: ["id"], DeclareVariable: ["id"], InterfaceDeclaration: ["id"], TypeAlias: ["id"], OpaqueType: ["id"], CatchClause: ["param"], LabeledStatement: ["label"], UnaryExpression: ["argument"], AssignmentExpression: ["left"], ImportSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportDefaultSpecifier: ["local"], ImportDeclaration: ["specifiers"], ExportSpecifier: ["exported"], ExportNamespaceSpecifier: ["exported"], ExportDefaultSpecifier: ["exported"], FunctionDeclaration: ["id", "params"], FunctionExpression: ["id", "params"], ClassDeclaration: ["id"], ClassExpression: ["id"], RestElement: ["argument"], UpdateExpression: ["argument"], RestProperty: ["argument"], ObjectProperty: ["value"], AssignmentPattern: ["left"], ArrayPattern: ["elements"], ObjectPattern: ["properties"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id"] };
      function SB(e, t) {
        return Gu(e, t, true);
      }
      i(SB, "getOuterBindingIdentifiers");
    });
    var Uf = l((bU, jf) => {
      wu();
      qu();
      jf.exports = ls().f("iterator");
    });
    var Vf = l((OU, Yf) => {
      Yf.exports = { default: Uf(), __esModule: true };
    });
    var Kf = l(() => {
    });
    var Wf = l(() => {
      cs()("asyncIterator");
    });
    var Hf = l(() => {
      cs()("observable");
    });
    var $f = l((wU, Xf) => {
      Cs();
      Kf();
      Wf();
      Hf();
      Xf.exports = Ke().Symbol;
    });
    var zf = l((LU, Jf) => {
      Jf.exports = { default: $f(), __esModule: true };
    });
    var Vu = l((Yu) => {
      "use strict";
      Yu.__esModule = true;
      var FB = Vf(), Qf = Zf(FB), CB = zf(), Yt = Zf(CB), Uu = typeof Yt.default == "function" && typeof Qf.default == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Yt.default == "function" && e.constructor === Yt.default && e !== Yt.default.prototype ? "symbol" : typeof e;
      };
      function Zf(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Zf, "_interopRequireDefault");
      Yu.default = typeof Yt.default == "function" && Uu(Qf.default) === "symbol" ? function(e) {
        return typeof e > "u" ? "undefined" : Uu(e);
      } : function(e) {
        return e && typeof Yt.default == "function" && e.constructor === Yt.default && e !== Yt.default.prototype ? "symbol" : typeof e > "u" ? "undefined" : Uu(e);
      };
    });
    var t0 = l((GU, e0) => {
      (function() {
        "use strict";
        function e(u) {
          if (u == null)
            return false;
          switch (u.type) {
            case "ArrayExpression":
            case "AssignmentExpression":
            case "BinaryExpression":
            case "CallExpression":
            case "ConditionalExpression":
            case "FunctionExpression":
            case "Identifier":
            case "Literal":
            case "LogicalExpression":
            case "MemberExpression":
            case "NewExpression":
            case "ObjectExpression":
            case "SequenceExpression":
            case "ThisExpression":
            case "UnaryExpression":
            case "UpdateExpression":
              return true;
          }
          return false;
        }
        i(e, "isExpression");
        function t(u) {
          if (u == null)
            return false;
          switch (u.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return true;
          }
          return false;
        }
        i(t, "isIterationStatement");
        function r(u) {
          if (u == null)
            return false;
          switch (u.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return true;
          }
          return false;
        }
        i(r, "isStatement");
        function n(u) {
          return r(u) || u != null && u.type === "FunctionDeclaration";
        }
        i(n, "isSourceElement");
        function s(u) {
          switch (u.type) {
            case "IfStatement":
              return u.alternate != null ? u.alternate : u.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return u.body;
          }
          return null;
        }
        i(s, "trailingStatement");
        function a(u) {
          var c;
          if (u.type !== "IfStatement" || u.alternate == null)
            return false;
          c = u.consequent;
          do {
            if (c.type === "IfStatement" && c.alternate == null)
              return true;
            c = s(c);
          } while (c);
          return false;
        }
        i(a, "isProblematicIfStatement"), e0.exports = { isExpression: e, isStatement: r, isIterationStatement: t, isSourceElement: n, isProblematicIfStatement: a, trailingStatement: s };
      })();
    });
    var Ku = l((UU, r0) => {
      (function() {
        "use strict";
        var e, t, r, n, s, a;
        t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, e = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
        function u(g) {
          return 48 <= g && g <= 57;
        }
        i(u, "isDecimalDigit");
        function c(g) {
          return 48 <= g && g <= 57 || 97 <= g && g <= 102 || 65 <= g && g <= 70;
        }
        i(c, "isHexDigit");
        function p(g) {
          return g >= 48 && g <= 55;
        }
        i(p, "isOctalDigit"), r = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
        function f(g) {
          return g === 32 || g === 9 || g === 11 || g === 12 || g === 160 || g >= 5760 && r.indexOf(g) >= 0;
        }
        i(f, "isWhiteSpace");
        function h(g) {
          return g === 10 || g === 13 || g === 8232 || g === 8233;
        }
        i(h, "isLineTerminator");
        function D(g) {
          if (g <= 65535)
            return String.fromCharCode(g);
          var j = String.fromCharCode(Math.floor((g - 65536) / 1024) + 55296), $ = String.fromCharCode((g - 65536) % 1024 + 56320);
          return j + $;
        }
        for (i(D, "fromCodePoint"), n = new Array(128), a = 0; a < 128; ++a)
          n[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 36 || a === 95;
        for (s = new Array(128), a = 0; a < 128; ++a)
          s[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 36 || a === 95;
        function d(g) {
          return g < 128 ? n[g] : t.NonAsciiIdentifierStart.test(D(g));
        }
        i(d, "isIdentifierStartES5");
        function x(g) {
          return g < 128 ? s[g] : t.NonAsciiIdentifierPart.test(D(g));
        }
        i(x, "isIdentifierPartES5");
        function C(g) {
          return g < 128 ? n[g] : e.NonAsciiIdentifierStart.test(D(g));
        }
        i(C, "isIdentifierStartES6");
        function O(g) {
          return g < 128 ? s[g] : e.NonAsciiIdentifierPart.test(D(g));
        }
        i(O, "isIdentifierPartES6"), r0.exports = { isDecimalDigit: u, isHexDigit: c, isOctalDigit: p, isWhiteSpace: f, isLineTerminator: h, isIdentifierStartES5: d, isIdentifierPartES5: x, isIdentifierStartES6: C, isIdentifierPartES6: O };
      })();
    });
    var i0 = l((VU, n0) => {
      (function() {
        "use strict";
        var e = Ku();
        function t(d) {
          switch (d) {
            case "implements":
            case "interface":
            case "package":
            case "private":
            case "protected":
            case "public":
            case "static":
            case "let":
              return true;
            default:
              return false;
          }
        }
        i(t, "isStrictModeReservedWordES6");
        function r(d, x) {
          return !x && d === "yield" ? false : n(d, x);
        }
        i(r, "isKeywordES5");
        function n(d, x) {
          if (x && t(d))
            return true;
          switch (d.length) {
            case 2:
              return d === "if" || d === "in" || d === "do";
            case 3:
              return d === "var" || d === "for" || d === "new" || d === "try";
            case 4:
              return d === "this" || d === "else" || d === "case" || d === "void" || d === "with" || d === "enum";
            case 5:
              return d === "while" || d === "break" || d === "catch" || d === "throw" || d === "const" || d === "yield" || d === "class" || d === "super";
            case 6:
              return d === "return" || d === "typeof" || d === "delete" || d === "switch" || d === "export" || d === "import";
            case 7:
              return d === "default" || d === "finally" || d === "extends";
            case 8:
              return d === "function" || d === "continue" || d === "debugger";
            case 10:
              return d === "instanceof";
            default:
              return false;
          }
        }
        i(n, "isKeywordES6");
        function s(d, x) {
          return d === "null" || d === "true" || d === "false" || r(d, x);
        }
        i(s, "isReservedWordES5");
        function a(d, x) {
          return d === "null" || d === "true" || d === "false" || n(d, x);
        }
        i(a, "isReservedWordES6");
        function u(d) {
          return d === "eval" || d === "arguments";
        }
        i(u, "isRestrictedWord");
        function c(d) {
          var x, C, O;
          if (d.length === 0 || (O = d.charCodeAt(0), !e.isIdentifierStartES5(O)))
            return false;
          for (x = 1, C = d.length; x < C; ++x)
            if (O = d.charCodeAt(x), !e.isIdentifierPartES5(O))
              return false;
          return true;
        }
        i(c, "isIdentifierNameES5");
        function p(d, x) {
          return (d - 55296) * 1024 + (x - 56320) + 65536;
        }
        i(p, "decodeUtf16");
        function f(d) {
          var x, C, O, g, j;
          if (d.length === 0)
            return false;
          for (j = e.isIdentifierStartES6, x = 0, C = d.length; x < C; ++x) {
            if (O = d.charCodeAt(x), 55296 <= O && O <= 56319) {
              if (++x, x >= C || (g = d.charCodeAt(x), !(56320 <= g && g <= 57343)))
                return false;
              O = p(O, g);
            }
            if (!j(O))
              return false;
            j = e.isIdentifierPartES6;
          }
          return true;
        }
        i(f, "isIdentifierNameES6");
        function h(d, x) {
          return c(d) && !s(d, x);
        }
        i(h, "isIdentifierES5");
        function D(d, x) {
          return f(d) && !a(d, x);
        }
        i(D, "isIdentifierES6"), n0.exports = { isKeywordES5: r, isKeywordES6: n, isReservedWordES5: s, isReservedWordES6: a, isRestrictedWord: u, isIdentifierNameES5: c, isIdentifierNameES6: f, isIdentifierES5: h, isIdentifierES6: D };
      })();
    });
    var s0 = l((qs) => {
      (function() {
        "use strict";
        qs.ast = t0(), qs.code = Ku(), qs.keyword = i0();
      })();
    });
    var l0 = l((ze) => {
      "use strict";
      ze.__esModule = true;
      var BB = Mu(), bB = Ls(BB), OB = Vu(), ws = Ls(OB), NB = Qn(), u0 = Ls(NB);
      ze.isBinding = qB;
      ze.isReferenced = wB;
      ze.isValidIdentifier = LB;
      ze.isLet = kB;
      ze.isBlockScoped = MB;
      ze.isVar = GB;
      ze.isSpecifierDefault = jB;
      ze.isScope = UB;
      ze.isImmutable = YB;
      ze.isNodesEquivalent = Wu;
      var _B = ju(), IB = s0(), a0 = Ls(IB), RB = It(), We = PB(RB), o0 = Rs();
      function PB(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(PB, "_interopRequireWildcard");
      function Ls(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Ls, "_interopRequireDefault");
      function qB(e, t) {
        var r = _B.getBindingIdentifiers.keys[t.type];
        if (r)
          for (var n = 0; n < r.length; n++) {
            var s = r[n], a = t[s];
            if (Array.isArray(a)) {
              if (a.indexOf(e) >= 0)
                return true;
            } else if (a === e)
              return true;
          }
        return false;
      }
      i(qB, "isBinding");
      function wB(e, t) {
        switch (t.type) {
          case "BindExpression":
            return t.object === e || t.callee === e;
          case "MemberExpression":
          case "JSXMemberExpression":
            return t.property === e && t.computed ? true : t.object === e;
          case "MetaProperty":
            return false;
          case "ObjectProperty":
            if (t.key === e)
              return t.computed;
          case "VariableDeclarator":
            return t.id !== e;
          case "ArrowFunctionExpression":
          case "FunctionDeclaration":
          case "FunctionExpression":
            for (var s = t.params, r = Array.isArray(s), n = 0, s = r ? s : (0, u0.default)(s); ; ) {
              var a;
              if (r) {
                if (n >= s.length)
                  break;
                a = s[n++];
              } else {
                if (n = s.next(), n.done)
                  break;
                a = n.value;
              }
              var u = a;
              if (u === e)
                return false;
            }
            return t.id !== e;
          case "ExportSpecifier":
            return t.source ? false : t.local === e;
          case "ExportNamespaceSpecifier":
          case "ExportDefaultSpecifier":
            return false;
          case "JSXAttribute":
            return t.name !== e;
          case "ClassProperty":
            return t.key === e ? t.computed : t.value === e;
          case "ImportDefaultSpecifier":
          case "ImportNamespaceSpecifier":
          case "ImportSpecifier":
            return false;
          case "ClassDeclaration":
          case "ClassExpression":
            return t.id !== e;
          case "ClassMethod":
          case "ObjectMethod":
            return t.key === e && t.computed;
          case "LabeledStatement":
            return false;
          case "CatchClause":
            return t.param !== e;
          case "RestElement":
            return false;
          case "AssignmentExpression":
            return t.right === e;
          case "AssignmentPattern":
            return t.right === e;
          case "ObjectPattern":
          case "ArrayPattern":
            return false;
        }
        return true;
      }
      i(wB, "isReferenced");
      function LB(e) {
        return typeof e != "string" || a0.default.keyword.isReservedWordES6(e, true) || e === "await" ? false : a0.default.keyword.isIdentifierNameES6(e);
      }
      i(LB, "isValidIdentifier");
      function kB(e) {
        return We.isVariableDeclaration(e) && (e.kind !== "var" || e[o0.BLOCK_SCOPED_SYMBOL]);
      }
      i(kB, "isLet");
      function MB(e) {
        return We.isFunctionDeclaration(e) || We.isClassDeclaration(e) || We.isLet(e);
      }
      i(MB, "isBlockScoped");
      function GB(e) {
        return We.isVariableDeclaration(e, { kind: "var" }) && !e[o0.BLOCK_SCOPED_SYMBOL];
      }
      i(GB, "isVar");
      function jB(e) {
        return We.isImportDefaultSpecifier(e) || We.isIdentifier(e.imported || e.exported, { name: "default" });
      }
      i(jB, "isSpecifierDefault");
      function UB(e, t) {
        return We.isBlockStatement(e) && We.isFunction(t, { body: e }) ? false : We.isScopable(e);
      }
      i(UB, "isScope");
      function YB(e) {
        return We.isType(e.type, "Immutable") ? true : We.isIdentifier(e) ? e.name === "undefined" : false;
      }
      i(YB, "isImmutable");
      function Wu(e, t) {
        if ((typeof e > "u" ? "undefined" : (0, ws.default)(e)) !== "object" || (typeof e > "u" ? "undefined" : (0, ws.default)(e)) !== "object" || e == null || t == null)
          return e === t;
        if (e.type !== t.type)
          return false;
        for (var r = (0, bB.default)(We.NODE_FIELDS[e.type] || e.type), a = r, n = Array.isArray(a), s = 0, a = n ? a : (0, u0.default)(a); ; ) {
          var u;
          if (n) {
            if (s >= a.length)
              break;
            u = a[s++];
          } else {
            if (s = a.next(), s.done)
              break;
            u = s.value;
          }
          var c = u;
          if ((0, ws.default)(e[c]) !== (0, ws.default)(t[c]))
            return false;
          if (Array.isArray(e[c])) {
            if (!Array.isArray(t[c]) || e[c].length !== t[c].length)
              return false;
            for (var p = 0; p < e[c].length; p++)
              if (!Wu(e[c][p], t[c][p]))
                return false;
            continue;
          }
          if (!Wu(e[c], t[c]))
            return false;
        }
        return true;
      }
      i(Wu, "isNodesEquivalent");
    });
    var p0 = l(() => {
      var c0 = Jr();
      c0(c0.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    });
    var d0 = l((zU, f0) => {
      p0();
      f0.exports = 9007199254740991;
    });
    var m0 = l((QU, E0) => {
      E0.exports = { default: d0(), __esModule: true };
    });
    var Hu = l((ZU, h0) => {
      var VB = typeof global == "object" && global && global.Object === Object && global;
      h0.exports = VB;
    });
    var rt = l((eY, D0) => {
      var KB = Hu(), WB = typeof self == "object" && self && self.Object === Object && self, HB = KB || WB || Function("return this")();
      D0.exports = HB;
    });
    var ks = l((tY, y0) => {
      var XB = rt(), $B = XB.Symbol;
      y0.exports = $B;
    });
    var g0 = l((rY, T0) => {
      var A0 = ks(), x0 = Object.prototype, JB = x0.hasOwnProperty, zB = x0.toString, Zn = A0 ? A0.toStringTag : void 0;
      function QB(e) {
        var t = JB.call(e, Zn), r = e[Zn];
        try {
          e[Zn] = void 0;
          var n = true;
        } catch {
        }
        var s = zB.call(e);
        return n && (t ? e[Zn] = r : delete e[Zn]), s;
      }
      i(QB, "getRawTag");
      T0.exports = QB;
    });
    var S0 = l((iY, v0) => {
      var ZB = Object.prototype, eb = ZB.toString;
      function tb(e) {
        return eb.call(e);
      }
      i(tb, "objectToString");
      v0.exports = tb;
    });
    var gr = l((aY, B0) => {
      var F0 = ks(), rb = g0(), nb = S0(), ib = "[object Null]", sb = "[object Undefined]", C0 = F0 ? F0.toStringTag : void 0;
      function ab(e) {
        return e == null ? e === void 0 ? sb : ib : C0 && C0 in Object(e) ? rb(e) : nb(e);
      }
      i(ab, "baseGetTag");
      B0.exports = ab;
    });
    var Xu = l((oY, b0) => {
      function ub(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      i(ub, "overArg");
      b0.exports = ub;
    });
    var Ms = l((cY, O0) => {
      var ob = Xu(), lb = ob(Object.getPrototypeOf, Object);
      O0.exports = lb;
    });
    var Vt = l((pY, N0) => {
      function cb(e) {
        return e != null && typeof e == "object";
      }
      i(cb, "isObjectLike");
      N0.exports = cb;
    });
    var R0 = l((dY, I0) => {
      var pb = gr(), fb = Ms(), db = Vt(), Eb = "[object Object]", mb = Function.prototype, hb = Object.prototype, _0 = mb.toString, Db = hb.hasOwnProperty, yb = _0.call(Object);
      function Ab(e) {
        if (!db(e) || pb(e) != Eb)
          return false;
        var t = fb(e);
        if (t === null)
          return true;
        var r = Db.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && _0.call(r) == yb;
      }
      i(Ab, "isPlainObject");
      I0.exports = Ab;
    });
    var q0 = l((mY, P0) => {
      var xb = gr(), Tb = Vt(), gb = "[object RegExp]";
      function vb(e) {
        return Tb(e) && xb(e) == gb;
      }
      i(vb, "baseIsRegExp");
      P0.exports = vb;
    });
    var ei = l((DY, w0) => {
      function Sb(e) {
        return function(t) {
          return e(t);
        };
      }
      i(Sb, "baseUnary");
      w0.exports = Sb;
    });
    var ni = l((ti, Zr) => {
      var Fb = Hu(), L0 = typeof ti == "object" && ti && !ti.nodeType && ti, ri = L0 && typeof Zr == "object" && Zr && !Zr.nodeType && Zr, Cb = ri && ri.exports === L0, $u = Cb && Fb.process, Bb = function() {
        try {
          var e = ri && ri.require && ri.require("util").types;
          return e || $u && $u.binding && $u.binding("util");
        } catch {
        }
      }();
      Zr.exports = Bb;
    });
    var j0 = l((AY, G0) => {
      var bb = q0(), Ob = ei(), k0 = ni(), M0 = k0 && k0.isRegExp, Nb = M0 ? Ob(M0) : bb;
      G0.exports = Nb;
    });
    var V0 = l((nt) => {
      "use strict";
      nt.__esModule = true;
      var _b = m0(), Ib = ii(_b), Rb = Is(), U0 = ii(Rb), Pb = Qn(), Ju = ii(Pb);
      nt.toComputedKey = jb;
      nt.toSequenceExpression = Ub;
      nt.toKeyAlias = vr;
      nt.toIdentifier = Y0;
      nt.toBindingIdentifierName = Yb;
      nt.toStatement = Vb;
      nt.toExpression = Kb;
      nt.toBlock = Wb;
      nt.valueToNode = Hb;
      var qb = R0(), wb = ii(qb), Lb = j0(), kb = ii(Lb), Mb = It(), M = Gb(Mb);
      function Gb(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(Gb, "_interopRequireWildcard");
      function ii(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(ii, "_interopRequireDefault");
      function jb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key || e.property;
        return e.computed || M.isIdentifier(t) && (t = M.stringLiteral(t.name)), t;
      }
      i(jb, "toComputedKey");
      function Gs(e, t, r) {
        for (var n = [], s = true, c = e, a = Array.isArray(c), u = 0, c = a ? c : (0, Ju.default)(c); ; ) {
          var p;
          if (a) {
            if (u >= c.length)
              break;
            p = c[u++];
          } else {
            if (u = c.next(), u.done)
              break;
            p = u.value;
          }
          var f = p;
          if (s = false, M.isExpression(f))
            n.push(f);
          else if (M.isExpressionStatement(f))
            n.push(f.expression);
          else if (M.isVariableDeclaration(f)) {
            if (f.kind !== "var")
              return;
            for (var d = f.declarations, h = Array.isArray(d), D = 0, d = h ? d : (0, Ju.default)(d); ; ) {
              var x;
              if (h) {
                if (D >= d.length)
                  break;
                x = d[D++];
              } else {
                if (D = d.next(), D.done)
                  break;
                x = D.value;
              }
              var C = x, O = M.getBindingIdentifiers(C);
              for (var g in O)
                r.push({ kind: f.kind, id: O[g] });
              C.init && n.push(M.assignmentExpression("=", C.id, C.init));
            }
            s = true;
          } else if (M.isIfStatement(f)) {
            var j = f.consequent ? Gs([f.consequent], t, r) : t.buildUndefinedNode(), $ = f.alternate ? Gs([f.alternate], t, r) : t.buildUndefinedNode();
            if (!j || !$)
              return;
            n.push(M.conditionalExpression(f.test, j, $));
          } else if (M.isBlockStatement(f)) {
            var re = Gs(f.body, t, r);
            if (!re)
              return;
            n.push(re);
          } else if (M.isEmptyStatement(f))
            s = true;
          else
            return;
        }
        return s && n.push(t.buildUndefinedNode()), n.length === 1 ? n[0] : M.sequenceExpression(n);
      }
      i(Gs, "gatherSequenceExpressions");
      function Ub(e, t) {
        if (!(!e || !e.length)) {
          var r = [], n = Gs(e, t, r);
          if (n) {
            for (var u = r, s = Array.isArray(u), a = 0, u = s ? u : (0, Ju.default)(u); ; ) {
              var c;
              if (s) {
                if (a >= u.length)
                  break;
                c = u[a++];
              } else {
                if (a = u.next(), a.done)
                  break;
                c = a.value;
              }
              var p = c;
              t.push(p);
            }
            return n;
          }
        }
      }
      i(Ub, "toSequenceExpression");
      function vr(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key, r = void 0;
        return e.kind === "method" ? vr.increment() + "" : (M.isIdentifier(t) ? r = t.name : M.isStringLiteral(t) ? r = (0, U0.default)(t.value) : r = (0, U0.default)(M.removePropertiesDeep(M.cloneDeep(t))), e.computed && (r = "[" + r + "]"), e.static && (r = "static:" + r), r);
      }
      i(vr, "toKeyAlias");
      vr.uid = 0;
      vr.increment = function() {
        return vr.uid >= Ib.default ? vr.uid = 0 : vr.uid++;
      };
      function Y0(e) {
        return e = e + "", e = e.replace(/[^a-zA-Z0-9$_]/g, "-"), e = e.replace(/^[-0-9]+/, ""), e = e.replace(/[-\s]+(.)?/g, function(t, r) {
          return r ? r.toUpperCase() : "";
        }), M.isValidIdentifier(e) || (e = "_" + e), e || "_";
      }
      i(Y0, "toIdentifier");
      function Yb(e) {
        return e = Y0(e), (e === "eval" || e === "arguments") && (e = "_" + e), e;
      }
      i(Yb, "toBindingIdentifierName");
      function Vb(e, t) {
        if (M.isStatement(e))
          return e;
        var r = false, n = void 0;
        if (M.isClass(e))
          r = true, n = "ClassDeclaration";
        else if (M.isFunction(e))
          r = true, n = "FunctionDeclaration";
        else if (M.isAssignmentExpression(e))
          return M.expressionStatement(e);
        if (r && !e.id && (n = false), !n) {
          if (t)
            return false;
          throw new Error("cannot turn " + e.type + " to a statement");
        }
        return e.type = n, e;
      }
      i(Vb, "toStatement");
      function Kb(e) {
        if (M.isExpressionStatement(e) && (e = e.expression), M.isExpression(e))
          return e;
        if (M.isClass(e) ? e.type = "ClassExpression" : M.isFunction(e) && (e.type = "FunctionExpression"), !M.isExpression(e))
          throw new Error("cannot turn " + e.type + " to an expression");
        return e;
      }
      i(Kb, "toExpression");
      function Wb(e, t) {
        return M.isBlockStatement(e) ? e : (M.isEmptyStatement(e) && (e = []), Array.isArray(e) || (M.isStatement(e) || (M.isFunction(t) ? e = M.returnStatement(e) : e = M.expressionStatement(e)), e = [e]), M.blockStatement(e));
      }
      i(Wb, "toBlock");
      function Hb(e) {
        if (e === void 0)
          return M.identifier("undefined");
        if (e === true || e === false)
          return M.booleanLiteral(e);
        if (e === null)
          return M.nullLiteral();
        if (typeof e == "string")
          return M.stringLiteral(e);
        if (typeof e == "number")
          return M.numericLiteral(e);
        if ((0, kb.default)(e)) {
          var t = e.source, r = e.toString().match(/\/([a-z]+|)$/)[1];
          return M.regExpLiteral(t, r);
        }
        if (Array.isArray(e))
          return M.arrayExpression(e.map(M.valueToNode));
        if ((0, wb.default)(e)) {
          var n = [];
          for (var s in e) {
            var a = void 0;
            M.isValidIdentifier(s) ? a = M.identifier(s) : a = M.stringLiteral(s), n.push(M.objectProperty(a, M.valueToNode(e[s])));
          }
          return M.objectExpression(n);
        }
        throw new Error("don't know how to turn this value into a node");
      }
      i(Hb, "valueToNode");
    });
    var K0 = l((si) => {
      "use strict";
      si.__esModule = true;
      si.createUnionTypeAnnotation = Jb;
      si.removeTypeDuplicates = zu;
      si.createTypeAnnotationBasedOnTypeof = zb;
      var Xb = It(), Le = $b(Xb);
      function $b(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i($b, "_interopRequireWildcard");
      function Jb(e) {
        var t = zu(e);
        return t.length === 1 ? t[0] : Le.unionTypeAnnotation(t);
      }
      i(Jb, "createUnionTypeAnnotation");
      function zu(e) {
        for (var t = {}, r = {}, n = [], s = [], a = 0; a < e.length; a++) {
          var u = e[a];
          if (u && !(s.indexOf(u) >= 0)) {
            if (Le.isAnyTypeAnnotation(u))
              return [u];
            if (Le.isFlowBaseAnnotation(u)) {
              r[u.type] = u;
              continue;
            }
            if (Le.isUnionTypeAnnotation(u)) {
              n.indexOf(u.types) < 0 && (e = e.concat(u.types), n.push(u.types));
              continue;
            }
            if (Le.isGenericTypeAnnotation(u)) {
              var c = u.id.name;
              if (t[c]) {
                var p = t[c];
                p.typeParameters ? u.typeParameters && (p.typeParameters.params = zu(p.typeParameters.params.concat(u.typeParameters.params))) : p = u.typeParameters;
              } else
                t[c] = u;
              continue;
            }
            s.push(u);
          }
        }
        for (var f in r)
          s.push(r[f]);
        for (var h in t)
          s.push(t[h]);
        return s;
      }
      i(zu, "removeTypeDuplicates");
      function zb(e) {
        if (e === "string")
          return Le.stringTypeAnnotation();
        if (e === "number")
          return Le.numberTypeAnnotation();
        if (e === "undefined")
          return Le.voidTypeAnnotation();
        if (e === "boolean")
          return Le.booleanTypeAnnotation();
        if (e === "function")
          return Le.genericTypeAnnotation(Le.identifier("Function"));
        if (e === "object")
          return Le.genericTypeAnnotation(Le.identifier("Object"));
        if (e === "symbol")
          return Le.genericTypeAnnotation(Le.identifier("Symbol"));
        throw new Error("Invalid typeof value");
      }
      i(zb, "createTypeAnnotationBasedOnTypeof");
    });
    var W0 = l((exports, module) => {
      "use strict";
      module.exports = i(function toFastproperties(o) {
        function Sub() {
        }
        i(Sub, "Sub"), Sub.prototype = o;
        var receiver = new Sub();
        function ic() {
          return typeof receiver.foo;
        }
        return i(ic, "ic"), ic(), ic(), o;
        eval("o" + o);
      }, "toFastproperties");
    });
    var X0 = l((FY, H0) => {
      function Qb() {
        this.__data__ = [], this.size = 0;
      }
      i(Qb, "listCacheClear");
      H0.exports = Qb;
    });
    var Qu = l((BY, $0) => {
      function Zb(e, t) {
        return e === t || e !== e && t !== t;
      }
      i(Zb, "eq");
      $0.exports = Zb;
    });
    var ai = l((OY, J0) => {
      var eO = Qu();
      function tO(e, t) {
        for (var r = e.length; r--; )
          if (eO(e[r][0], t))
            return r;
        return -1;
      }
      i(tO, "assocIndexOf");
      J0.exports = tO;
    });
    var Q0 = l((_Y, z0) => {
      var rO = ai(), nO = Array.prototype, iO = nO.splice;
      function sO(e) {
        var t = this.__data__, r = rO(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : iO.call(t, r, 1), --this.size, true;
      }
      i(sO, "listCacheDelete");
      z0.exports = sO;
    });
    var ed = l((RY, Z0) => {
      var aO = ai();
      function uO(e) {
        var t = this.__data__, r = aO(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      i(uO, "listCacheGet");
      Z0.exports = uO;
    });
    var rd = l((qY, td) => {
      var oO = ai();
      function lO(e) {
        return oO(this.__data__, e) > -1;
      }
      i(lO, "listCacheHas");
      td.exports = lO;
    });
    var id = l((LY, nd) => {
      var cO = ai();
      function pO(e, t) {
        var r = this.__data__, n = cO(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      i(pO, "listCacheSet");
      nd.exports = pO;
    });
    var ui = l((MY, sd) => {
      var fO = X0(), dO = Q0(), EO = ed(), mO = rd(), hO = id();
      function en(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(en, "ListCache");
      en.prototype.clear = fO;
      en.prototype.delete = dO;
      en.prototype.get = EO;
      en.prototype.has = mO;
      en.prototype.set = hO;
      sd.exports = en;
    });
    var ud = l((jY, ad) => {
      var DO = ui();
      function yO() {
        this.__data__ = new DO(), this.size = 0;
      }
      i(yO, "stackClear");
      ad.exports = yO;
    });
    var ld = l((YY, od) => {
      function AO(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      i(AO, "stackDelete");
      od.exports = AO;
    });
    var pd = l((KY, cd) => {
      function xO(e) {
        return this.__data__.get(e);
      }
      i(xO, "stackGet");
      cd.exports = xO;
    });
    var dd = l((HY, fd) => {
      function TO(e) {
        return this.__data__.has(e);
      }
      i(TO, "stackHas");
      fd.exports = TO;
    });
    var tn = l(($Y, Ed) => {
      function gO(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      i(gO, "isObject");
      Ed.exports = gO;
    });
    var Zu = l((zY, md) => {
      var vO = gr(), SO = tn(), FO = "[object AsyncFunction]", CO = "[object Function]", BO = "[object GeneratorFunction]", bO = "[object Proxy]";
      function OO(e) {
        if (!SO(e))
          return false;
        var t = vO(e);
        return t == CO || t == BO || t == FO || t == bO;
      }
      i(OO, "isFunction");
      md.exports = OO;
    });
    var Dd = l((ZY, hd) => {
      var NO = rt(), _O = NO["__core-js_shared__"];
      hd.exports = _O;
    });
    var xd = l((eV, Ad) => {
      var eo = Dd(), yd = function() {
        var e = /[^.]+$/.exec(eo && eo.keys && eo.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function IO(e) {
        return !!yd && yd in e;
      }
      i(IO, "isMasked");
      Ad.exports = IO;
    });
    var to = l((rV, Td) => {
      var RO = Function.prototype, PO = RO.toString;
      function qO(e) {
        if (e != null) {
          try {
            return PO.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      i(qO, "toSource");
      Td.exports = qO;
    });
    var vd = l((iV, gd) => {
      var wO = Zu(), LO = xd(), kO = tn(), MO = to(), GO = /[\\^$.*+?()[\]{}|]/g, jO = /^\[object .+?Constructor\]$/, UO = Function.prototype, YO = Object.prototype, VO = UO.toString, KO = YO.hasOwnProperty, WO = RegExp("^" + VO.call(KO).replace(GO, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function HO(e) {
        if (!kO(e) || LO(e))
          return false;
        var t = wO(e) ? WO : jO;
        return t.test(MO(e));
      }
      i(HO, "baseIsNative");
      gd.exports = HO;
    });
    var Fd = l((aV, Sd) => {
      function XO(e, t) {
        return e?.[t];
      }
      i(XO, "getValue");
      Sd.exports = XO;
    });
    var Kt = l((oV, Cd) => {
      var $O = vd(), JO = Fd();
      function zO(e, t) {
        var r = JO(e, t);
        return $O(r) ? r : void 0;
      }
      i(zO, "getNative");
      Cd.exports = zO;
    });
    var js = l((cV, Bd) => {
      var QO = Kt(), ZO = rt(), eN = QO(ZO, "Map");
      Bd.exports = eN;
    });
    var oi = l((pV, bd) => {
      var tN = Kt(), rN = tN(Object, "create");
      bd.exports = rN;
    });
    var _d = l((fV, Nd) => {
      var Od = oi();
      function nN() {
        this.__data__ = Od ? Od(null) : {}, this.size = 0;
      }
      i(nN, "hashClear");
      Nd.exports = nN;
    });
    var Rd = l((EV, Id) => {
      function iN(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      i(iN, "hashDelete");
      Id.exports = iN;
    });
    var qd = l((hV, Pd) => {
      var sN = oi(), aN = "__lodash_hash_undefined__", uN = Object.prototype, oN = uN.hasOwnProperty;
      function lN(e) {
        var t = this.__data__;
        if (sN) {
          var r = t[e];
          return r === aN ? void 0 : r;
        }
        return oN.call(t, e) ? t[e] : void 0;
      }
      i(lN, "hashGet");
      Pd.exports = lN;
    });
    var Ld = l((yV, wd) => {
      var cN = oi(), pN = Object.prototype, fN = pN.hasOwnProperty;
      function dN(e) {
        var t = this.__data__;
        return cN ? t[e] !== void 0 : fN.call(t, e);
      }
      i(dN, "hashHas");
      wd.exports = dN;
    });
    var Md = l((xV, kd) => {
      var EN = oi(), mN = "__lodash_hash_undefined__";
      function hN(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = EN && t === void 0 ? mN : t, this;
      }
      i(hN, "hashSet");
      kd.exports = hN;
    });
    var jd = l((gV, Gd) => {
      var DN = _d(), yN = Rd(), AN = qd(), xN = Ld(), TN = Md();
      function rn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(rn, "Hash");
      rn.prototype.clear = DN;
      rn.prototype.delete = yN;
      rn.prototype.get = AN;
      rn.prototype.has = xN;
      rn.prototype.set = TN;
      Gd.exports = rn;
    });
    var Vd = l((SV, Yd) => {
      var Ud = jd(), gN = ui(), vN = js();
      function SN() {
        this.size = 0, this.__data__ = { hash: new Ud(), map: new (vN || gN)(), string: new Ud() };
      }
      i(SN, "mapCacheClear");
      Yd.exports = SN;
    });
    var Wd = l((CV, Kd) => {
      function FN(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      i(FN, "isKeyable");
      Kd.exports = FN;
    });
    var li = l((bV, Hd) => {
      var CN = Wd();
      function BN(e, t) {
        var r = e.__data__;
        return CN(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      i(BN, "getMapData");
      Hd.exports = BN;
    });
    var $d = l((NV, Xd) => {
      var bN = li();
      function ON(e) {
        var t = bN(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      i(ON, "mapCacheDelete");
      Xd.exports = ON;
    });
    var zd = l((IV, Jd) => {
      var NN = li();
      function _N(e) {
        return NN(this, e).get(e);
      }
      i(_N, "mapCacheGet");
      Jd.exports = _N;
    });
    var Zd = l((PV, Qd) => {
      var IN = li();
      function RN(e) {
        return IN(this, e).has(e);
      }
      i(RN, "mapCacheHas");
      Qd.exports = RN;
    });
    var tE = l((wV, eE) => {
      var PN = li();
      function qN(e, t) {
        var r = PN(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      i(qN, "mapCacheSet");
      eE.exports = qN;
    });
    var ro = l((kV, rE) => {
      var wN = Vd(), LN = $d(), kN = zd(), MN = Zd(), GN = tE();
      function nn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(nn, "MapCache");
      nn.prototype.clear = wN;
      nn.prototype.delete = LN;
      nn.prototype.get = kN;
      nn.prototype.has = MN;
      nn.prototype.set = GN;
      rE.exports = nn;
    });
    var iE = l((GV, nE) => {
      var jN = ui(), UN = js(), YN = ro(), VN = 200;
      function KN(e, t) {
        var r = this.__data__;
        if (r instanceof jN) {
          var n = r.__data__;
          if (!UN || n.length < VN - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new YN(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      i(KN, "stackSet");
      nE.exports = KN;
    });
    var aE = l((UV, sE) => {
      var WN = ui(), HN = ud(), XN = ld(), $N = pd(), JN = dd(), zN = iE();
      function sn(e) {
        var t = this.__data__ = new WN(e);
        this.size = t.size;
      }
      i(sn, "Stack");
      sn.prototype.clear = HN;
      sn.prototype.delete = XN;
      sn.prototype.get = $N;
      sn.prototype.has = JN;
      sn.prototype.set = zN;
      sE.exports = sn;
    });
    var oE = l((VV, uE) => {
      function QN(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
          ;
        return e;
      }
      i(QN, "arrayEach");
      uE.exports = QN;
    });
    var cE = l((WV, lE) => {
      var ZN = Kt(), e_ = function() {
        try {
          var e = ZN(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }();
      lE.exports = e_;
    });
    var no = l((HV, fE) => {
      var pE = cE();
      function t_(e, t, r) {
        t == "__proto__" && pE ? pE(e, t, { configurable: true, enumerable: true, value: r, writable: true }) : e[t] = r;
      }
      i(t_, "baseAssignValue");
      fE.exports = t_;
    });
    var io = l(($V, dE) => {
      var r_ = no(), n_ = Qu(), i_ = Object.prototype, s_ = i_.hasOwnProperty;
      function a_(e, t, r) {
        var n = e[t];
        (!(s_.call(e, t) && n_(n, r)) || r === void 0 && !(t in e)) && r_(e, t, r);
      }
      i(a_, "assignValue");
      dE.exports = a_;
    });
    var ci = l((zV, EE) => {
      var u_ = io(), o_ = no();
      function l_(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var a = -1, u = t.length; ++a < u; ) {
          var c = t[a], p = n ? n(r[c], e[c], c, r, e) : void 0;
          p === void 0 && (p = e[c]), s ? o_(r, c, p) : u_(r, c, p);
        }
        return r;
      }
      i(l_, "copyObject");
      EE.exports = l_;
    });
    var hE = l((ZV, mE) => {
      function c_(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      i(c_, "baseTimes");
      mE.exports = c_;
    });
    var yE = l((tK, DE) => {
      var p_ = gr(), f_ = Vt(), d_ = "[object Arguments]";
      function E_(e) {
        return f_(e) && p_(e) == d_;
      }
      i(E_, "baseIsArguments");
      DE.exports = E_;
    });
    var gE = l((nK, TE) => {
      var AE = yE(), m_ = Vt(), xE = Object.prototype, h_ = xE.hasOwnProperty, D_ = xE.propertyIsEnumerable, y_ = AE(function() {
        return arguments;
      }()) ? AE : function(e) {
        return m_(e) && h_.call(e, "callee") && !D_.call(e, "callee");
      };
      TE.exports = y_;
    });
    var Us = l((iK, vE) => {
      var A_ = Array.isArray;
      vE.exports = A_;
    });
    var FE = l((sK, SE) => {
      function x_() {
        return false;
      }
      i(x_, "stubFalse");
      SE.exports = x_;
    });
    var so = l((pi, an) => {
      var T_ = rt(), g_ = FE(), bE = typeof pi == "object" && pi && !pi.nodeType && pi, CE = bE && typeof an == "object" && an && !an.nodeType && an, v_ = CE && CE.exports === bE, BE = v_ ? T_.Buffer : void 0, S_ = BE ? BE.isBuffer : void 0, F_ = S_ || g_;
      an.exports = F_;
    });
    var NE = l((uK, OE) => {
      var C_ = 9007199254740991, B_ = /^(?:0|[1-9]\d*)$/;
      function b_(e, t) {
        var r = typeof e;
        return t = t ?? C_, !!t && (r == "number" || r != "symbol" && B_.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      i(b_, "isIndex");
      OE.exports = b_;
    });
    var ao = l((lK, _E) => {
      var O_ = 9007199254740991;
      function N_(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= O_;
      }
      i(N_, "isLength");
      _E.exports = N_;
    });
    var RE = l((pK, IE) => {
      var __ = gr(), I_ = ao(), R_ = Vt(), P_ = "[object Arguments]", q_ = "[object Array]", w_ = "[object Boolean]", L_ = "[object Date]", k_ = "[object Error]", M_ = "[object Function]", G_ = "[object Map]", j_ = "[object Number]", U_ = "[object Object]", Y_ = "[object RegExp]", V_ = "[object Set]", K_ = "[object String]", W_ = "[object WeakMap]", H_ = "[object ArrayBuffer]", X_ = "[object DataView]", $_ = "[object Float32Array]", J_ = "[object Float64Array]", z_ = "[object Int8Array]", Q_ = "[object Int16Array]", Z_ = "[object Int32Array]", eI = "[object Uint8Array]", tI = "[object Uint8ClampedArray]", rI = "[object Uint16Array]", nI = "[object Uint32Array]", pe = {};
      pe[$_] = pe[J_] = pe[z_] = pe[Q_] = pe[Z_] = pe[eI] = pe[tI] = pe[rI] = pe[nI] = true;
      pe[P_] = pe[q_] = pe[H_] = pe[w_] = pe[X_] = pe[L_] = pe[k_] = pe[M_] = pe[G_] = pe[j_] = pe[U_] = pe[Y_] = pe[V_] = pe[K_] = pe[W_] = false;
      function iI(e) {
        return R_(e) && I_(e.length) && !!pe[__(e)];
      }
      i(iI, "baseIsTypedArray");
      IE.exports = iI;
    });
    var LE = l((dK, wE) => {
      var sI = RE(), aI = ei(), PE = ni(), qE = PE && PE.isTypedArray, uI = qE ? aI(qE) : sI;
      wE.exports = uI;
    });
    var uo = l((EK, kE) => {
      var oI = hE(), lI = gE(), cI = Us(), pI = so(), fI = NE(), dI = LE(), EI = Object.prototype, mI = EI.hasOwnProperty;
      function hI(e, t) {
        var r = cI(e), n = !r && lI(e), s = !r && !n && pI(e), a = !r && !n && !s && dI(e), u = r || n || s || a, c = u ? oI(e.length, String) : [], p = c.length;
        for (var f in e)
          (t || mI.call(e, f)) && !(u && (f == "length" || s && (f == "offset" || f == "parent") || a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || fI(f, p))) && c.push(f);
        return c;
      }
      i(hI, "arrayLikeKeys");
      kE.exports = hI;
    });
    var Ys = l((hK, ME) => {
      var DI = Object.prototype;
      function yI(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || DI;
        return e === r;
      }
      i(yI, "isPrototype");
      ME.exports = yI;
    });
    var jE = l((yK, GE) => {
      var AI = Xu(), xI = AI(Object.keys, Object);
      GE.exports = xI;
    });
    var YE = l((AK, UE) => {
      var TI = Ys(), gI = jE(), vI = Object.prototype, SI = vI.hasOwnProperty;
      function FI(e) {
        if (!TI(e))
          return gI(e);
        var t = [];
        for (var r in Object(e))
          SI.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      i(FI, "baseKeys");
      UE.exports = FI;
    });
    var oo = l((TK, VE) => {
      var CI = Zu(), BI = ao();
      function bI(e) {
        return e != null && BI(e.length) && !CI(e);
      }
      i(bI, "isArrayLike");
      VE.exports = bI;
    });
    var Vs = l((vK, KE) => {
      var OI = uo(), NI = YE(), _I = oo();
      function II(e) {
        return _I(e) ? OI(e) : NI(e);
      }
      i(II, "keys");
      KE.exports = II;
    });
    var HE = l((FK, WE) => {
      var RI = ci(), PI = Vs();
      function qI(e, t) {
        return e && RI(t, PI(t), e);
      }
      i(qI, "baseAssign");
      WE.exports = qI;
    });
    var $E = l((BK, XE) => {
      function wI(e) {
        var t = [];
        if (e != null)
          for (var r in Object(e))
            t.push(r);
        return t;
      }
      i(wI, "nativeKeysIn");
      XE.exports = wI;
    });
    var zE = l((OK, JE) => {
      var LI = tn(), kI = Ys(), MI = $E(), GI = Object.prototype, jI = GI.hasOwnProperty;
      function UI(e) {
        if (!LI(e))
          return MI(e);
        var t = kI(e), r = [];
        for (var n in e)
          n == "constructor" && (t || !jI.call(e, n)) || r.push(n);
        return r;
      }
      i(UI, "baseKeysIn");
      JE.exports = UI;
    });
    var Ks = l((_K, QE) => {
      var YI = uo(), VI = zE(), KI = oo();
      function WI(e) {
        return KI(e) ? YI(e, true) : VI(e);
      }
      i(WI, "keysIn");
      QE.exports = WI;
    });
    var em = l((RK, ZE) => {
      var HI = ci(), XI = Ks();
      function $I(e, t) {
        return e && HI(t, XI(t), e);
      }
      i($I, "baseAssignIn");
      ZE.exports = $I;
    });
    var sm = l((fi, un) => {
      var JI = rt(), im = typeof fi == "object" && fi && !fi.nodeType && fi, tm = im && typeof un == "object" && un && !un.nodeType && un, zI = tm && tm.exports === im, rm = zI ? JI.Buffer : void 0, nm = rm ? rm.allocUnsafe : void 0;
      function QI(e, t) {
        if (t)
          return e.slice();
        var r = e.length, n = nm ? nm(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      i(QI, "cloneBuffer");
      un.exports = QI;
    });
    var um = l((wK, am) => {
      function ZI(e, t) {
        var r = -1, n = e.length;
        for (t || (t = Array(n)); ++r < n; )
          t[r] = e[r];
        return t;
      }
      i(ZI, "copyArray");
      am.exports = ZI;
    });
    var lm = l((kK, om) => {
      function eR(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n; ) {
          var u = e[r];
          t(u, r, e) && (a[s++] = u);
        }
        return a;
      }
      i(eR, "arrayFilter");
      om.exports = eR;
    });
    var lo = l((GK, cm) => {
      function tR() {
        return [];
      }
      i(tR, "stubArray");
      cm.exports = tR;
    });
    var Ws = l((UK, fm) => {
      var rR = lm(), nR = lo(), iR = Object.prototype, sR = iR.propertyIsEnumerable, pm = Object.getOwnPropertySymbols, aR = pm ? function(e) {
        return e == null ? [] : (e = Object(e), rR(pm(e), function(t) {
          return sR.call(e, t);
        }));
      } : nR;
      fm.exports = aR;
    });
    var Em = l((YK, dm) => {
      var uR = ci(), oR = Ws();
      function lR(e, t) {
        return uR(e, oR(e), t);
      }
      i(lR, "copySymbols");
      dm.exports = lR;
    });
    var co = l((KK, mm) => {
      function cR(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n; )
          e[s + r] = t[r];
        return e;
      }
      i(cR, "arrayPush");
      mm.exports = cR;
    });
    var po = l((HK, hm) => {
      var pR = co(), fR = Ms(), dR = Ws(), ER = lo(), mR = Object.getOwnPropertySymbols, hR = mR ? function(e) {
        for (var t = []; e; )
          pR(t, dR(e)), e = fR(e);
        return t;
      } : ER;
      hm.exports = hR;
    });
    var ym = l((XK, Dm) => {
      var DR = ci(), yR = po();
      function AR(e, t) {
        return DR(e, yR(e), t);
      }
      i(AR, "copySymbolsIn");
      Dm.exports = AR;
    });
    var fo = l((JK, Am) => {
      var xR = co(), TR = Us();
      function gR(e, t, r) {
        var n = t(e);
        return TR(e) ? n : xR(n, r(e));
      }
      i(gR, "baseGetAllKeys");
      Am.exports = gR;
    });
    var Tm = l((QK, xm) => {
      var vR = fo(), SR = Ws(), FR = Vs();
      function CR(e) {
        return vR(e, FR, SR);
      }
      i(CR, "getAllKeys");
      xm.exports = CR;
    });
    var vm = l((eW, gm) => {
      var BR = fo(), bR = po(), OR = Ks();
      function NR(e) {
        return BR(e, OR, bR);
      }
      i(NR, "getAllKeysIn");
      gm.exports = NR;
    });
    var Fm = l((rW, Sm) => {
      var _R = Kt(), IR = rt(), RR = _R(IR, "DataView");
      Sm.exports = RR;
    });
    var Bm = l((nW, Cm) => {
      var PR = Kt(), qR = rt(), wR = PR(qR, "Promise");
      Cm.exports = wR;
    });
    var Eo = l((iW, bm) => {
      var LR = Kt(), kR = rt(), MR = LR(kR, "Set");
      bm.exports = MR;
    });
    var Nm = l((sW, Om) => {
      var GR = Kt(), jR = rt(), UR = GR(jR, "WeakMap");
      Om.exports = UR;
    });
    var Hs = l((aW, Lm) => {
      var mo = Fm(), ho = js(), Do = Bm(), yo = Eo(), Ao = Nm(), wm = gr(), on = to(), _m = "[object Map]", YR = "[object Object]", Im = "[object Promise]", Rm = "[object Set]", Pm = "[object WeakMap]", qm = "[object DataView]", VR = on(mo), KR = on(ho), WR = on(Do), HR = on(yo), XR = on(Ao), Sr = wm;
      (mo && Sr(new mo(new ArrayBuffer(1))) != qm || ho && Sr(new ho()) != _m || Do && Sr(Do.resolve()) != Im || yo && Sr(new yo()) != Rm || Ao && Sr(new Ao()) != Pm) && (Sr = i(function(e) {
        var t = wm(e), r = t == YR ? e.constructor : void 0, n = r ? on(r) : "";
        if (n)
          switch (n) {
            case VR:
              return qm;
            case KR:
              return _m;
            case WR:
              return Im;
            case HR:
              return Rm;
            case XR:
              return Pm;
          }
        return t;
      }, "getTag"));
      Lm.exports = Sr;
    });
    var Mm = l((oW, km) => {
      var $R = Object.prototype, JR = $R.hasOwnProperty;
      function zR(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && JR.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      i(zR, "initCloneArray");
      km.exports = zR;
    });
    var jm = l((cW, Gm) => {
      var QR = rt(), ZR = QR.Uint8Array;
      Gm.exports = ZR;
    });
    var Xs = l((pW, Ym) => {
      var Um = jm();
      function e2(e) {
        var t = new e.constructor(e.byteLength);
        return new Um(t).set(new Um(e)), t;
      }
      i(e2, "cloneArrayBuffer");
      Ym.exports = e2;
    });
    var Km = l((dW, Vm) => {
      var t2 = Xs();
      function r2(e, t) {
        var r = t ? t2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      i(r2, "cloneDataView");
      Vm.exports = r2;
    });
    var Hm = l((mW, Wm) => {
      var n2 = /\w*$/;
      function i2(e) {
        var t = new e.constructor(e.source, n2.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      i(i2, "cloneRegExp");
      Wm.exports = i2;
    });
    var Qm = l((DW, zm) => {
      var Xm = ks(), $m = Xm ? Xm.prototype : void 0, Jm = $m ? $m.valueOf : void 0;
      function s2(e) {
        return Jm ? Object(Jm.call(e)) : {};
      }
      i(s2, "cloneSymbol");
      zm.exports = s2;
    });
    var eh = l((AW, Zm) => {
      var a2 = Xs();
      function u2(e, t) {
        var r = t ? a2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      i(u2, "cloneTypedArray");
      Zm.exports = u2;
    });
    var rh = l((TW, th) => {
      var o2 = Xs(), l2 = Km(), c2 = Hm(), p2 = Qm(), f2 = eh(), d2 = "[object Boolean]", E2 = "[object Date]", m2 = "[object Map]", h2 = "[object Number]", D2 = "[object RegExp]", y2 = "[object Set]", A2 = "[object String]", x2 = "[object Symbol]", T2 = "[object ArrayBuffer]", g2 = "[object DataView]", v2 = "[object Float32Array]", S2 = "[object Float64Array]", F2 = "[object Int8Array]", C2 = "[object Int16Array]", B2 = "[object Int32Array]", b2 = "[object Uint8Array]", O2 = "[object Uint8ClampedArray]", N2 = "[object Uint16Array]", _2 = "[object Uint32Array]";
      function I2(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case T2:
            return o2(e);
          case d2:
          case E2:
            return new n(+e);
          case g2:
            return l2(e, r);
          case v2:
          case S2:
          case F2:
          case C2:
          case B2:
          case b2:
          case O2:
          case N2:
          case _2:
            return f2(e, r);
          case m2:
            return new n();
          case h2:
          case A2:
            return new n(e);
          case D2:
            return c2(e);
          case y2:
            return new n();
          case x2:
            return p2(e);
        }
      }
      i(I2, "initCloneByTag");
      th.exports = I2;
    });
    var sh = l((vW, ih) => {
      var R2 = tn(), nh = Object.create, P2 = function() {
        function e() {
        }
        return i(e, "object"), function(t) {
          if (!R2(t))
            return {};
          if (nh)
            return nh(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();
      ih.exports = P2;
    });
    var uh = l((FW, ah) => {
      var q2 = sh(), w2 = Ms(), L2 = Ys();
      function k2(e) {
        return typeof e.constructor == "function" && !L2(e) ? q2(w2(e)) : {};
      }
      i(k2, "initCloneObject");
      ah.exports = k2;
    });
    var lh = l((BW, oh) => {
      var M2 = Hs(), G2 = Vt(), j2 = "[object Map]";
      function U2(e) {
        return G2(e) && M2(e) == j2;
      }
      i(U2, "baseIsMap");
      oh.exports = U2;
    });
    var dh = l((OW, fh) => {
      var Y2 = lh(), V2 = ei(), ch = ni(), ph = ch && ch.isMap, K2 = ph ? V2(ph) : Y2;
      fh.exports = K2;
    });
    var mh = l((NW, Eh) => {
      var W2 = Hs(), H2 = Vt(), X2 = "[object Set]";
      function $2(e) {
        return H2(e) && W2(e) == X2;
      }
      i($2, "baseIsSet");
      Eh.exports = $2;
    });
    var Ah = l((IW, yh) => {
      var J2 = mh(), z2 = ei(), hh = ni(), Dh = hh && hh.isSet, Q2 = Dh ? z2(Dh) : J2;
      yh.exports = Q2;
    });
    var Sh = l((RW, vh) => {
      var Z2 = aE(), e8 = oE(), t8 = io(), r8 = HE(), n8 = em(), i8 = sm(), s8 = um(), a8 = Em(), u8 = ym(), o8 = Tm(), l8 = vm(), c8 = Hs(), p8 = Mm(), f8 = rh(), d8 = uh(), E8 = Us(), m8 = so(), h8 = dh(), D8 = tn(), y8 = Ah(), A8 = Vs(), x8 = Ks(), T8 = 1, g8 = 2, v8 = 4, xh = "[object Arguments]", S8 = "[object Array]", F8 = "[object Boolean]", C8 = "[object Date]", B8 = "[object Error]", Th = "[object Function]", b8 = "[object GeneratorFunction]", O8 = "[object Map]", N8 = "[object Number]", gh = "[object Object]", _8 = "[object RegExp]", I8 = "[object Set]", R8 = "[object String]", P8 = "[object Symbol]", q8 = "[object WeakMap]", w8 = "[object ArrayBuffer]", L8 = "[object DataView]", k8 = "[object Float32Array]", M8 = "[object Float64Array]", G8 = "[object Int8Array]", j8 = "[object Int16Array]", U8 = "[object Int32Array]", Y8 = "[object Uint8Array]", V8 = "[object Uint8ClampedArray]", K8 = "[object Uint16Array]", W8 = "[object Uint32Array]", ce = {};
      ce[xh] = ce[S8] = ce[w8] = ce[L8] = ce[F8] = ce[C8] = ce[k8] = ce[M8] = ce[G8] = ce[j8] = ce[U8] = ce[O8] = ce[N8] = ce[gh] = ce[_8] = ce[I8] = ce[R8] = ce[P8] = ce[Y8] = ce[V8] = ce[K8] = ce[W8] = true;
      ce[B8] = ce[Th] = ce[q8] = false;
      function $s(e, t, r, n, s, a) {
        var u, c = t & T8, p = t & g8, f = t & v8;
        if (r && (u = s ? r(e, n, s, a) : r(e)), u !== void 0)
          return u;
        if (!D8(e))
          return e;
        var h = E8(e);
        if (h) {
          if (u = p8(e), !c)
            return s8(e, u);
        } else {
          var D = c8(e), d = D == Th || D == b8;
          if (m8(e))
            return i8(e, c);
          if (D == gh || D == xh || d && !s) {
            if (u = p || d ? {} : d8(e), !c)
              return p ? u8(e, n8(u, e)) : a8(e, r8(u, e));
          } else {
            if (!ce[D])
              return s ? e : {};
            u = f8(e, D, c);
          }
        }
        a || (a = new Z2());
        var x = a.get(e);
        if (x)
          return x;
        a.set(e, u), y8(e) ? e.forEach(function(g) {
          u.add($s(g, t, r, g, e, a));
        }) : h8(e) && e.forEach(function(g, j) {
          u.set(j, $s(g, t, r, j, e, a));
        });
        var C = f ? p ? l8 : o8 : p ? x8 : A8, O = h ? void 0 : C(e);
        return e8(O || e, function(g, j) {
          O && (j = g, g = e[j]), t8(u, j, $s(g, t, r, j, e, a));
        }), u;
      }
      i($s, "baseClone");
      vh.exports = $s;
    });
    var Ch = l((qW, Fh) => {
      var H8 = Sh(), X8 = 4;
      function $8(e) {
        return H8(e, X8);
      }
      i($8, "clone");
      Fh.exports = $8;
    });
    var bh = l((LW, Bh) => {
      var J8 = "__lodash_hash_undefined__";
      function z8(e) {
        return this.__data__.set(e, J8), this;
      }
      i(z8, "setCacheAdd");
      Bh.exports = z8;
    });
    var Nh = l((MW, Oh) => {
      function Q8(e) {
        return this.__data__.has(e);
      }
      i(Q8, "setCacheHas");
      Oh.exports = Q8;
    });
    var Ih = l((jW, _h) => {
      var Z8 = ro(), eP = bh(), tP = Nh();
      function Js(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new Z8(); ++t < r; )
          this.add(e[t]);
      }
      i(Js, "SetCache");
      Js.prototype.add = Js.prototype.push = eP;
      Js.prototype.has = tP;
      _h.exports = Js;
    });
    var Ph = l((YW, Rh) => {
      function rP(e, t, r, n) {
        for (var s = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < s; )
          if (t(e[a], a, e))
            return a;
        return -1;
      }
      i(rP, "baseFindIndex");
      Rh.exports = rP;
    });
    var wh = l((KW, qh) => {
      function nP(e) {
        return e !== e;
      }
      i(nP, "baseIsNaN");
      qh.exports = nP;
    });
    var kh = l((HW, Lh) => {
      function iP(e, t, r) {
        for (var n = r - 1, s = e.length; ++n < s; )
          if (e[n] === t)
            return n;
        return -1;
      }
      i(iP, "strictIndexOf");
      Lh.exports = iP;
    });
    var Gh = l(($W, Mh) => {
      var sP = Ph(), aP = wh(), uP = kh();
      function oP(e, t, r) {
        return t === t ? uP(e, t, r) : sP(e, aP, r);
      }
      i(oP, "baseIndexOf");
      Mh.exports = oP;
    });
    var Uh = l((zW, jh) => {
      var lP = Gh();
      function cP(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && lP(e, t, 0) > -1;
      }
      i(cP, "arrayIncludes");
      jh.exports = cP;
    });
    var Vh = l((ZW, Yh) => {
      function pP(e, t, r) {
        for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
          if (r(t, e[n]))
            return true;
        return false;
      }
      i(pP, "arrayIncludesWith");
      Yh.exports = pP;
    });
    var Wh = l((tH, Kh) => {
      function fP(e, t) {
        return e.has(t);
      }
      i(fP, "cacheHas");
      Kh.exports = fP;
    });
    var Xh = l((nH, Hh) => {
      function dP() {
      }
      i(dP, "noop");
      Hh.exports = dP;
    });
    var xo = l((sH, $h) => {
      function EP(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n) {
          r[++t] = n;
        }), r;
      }
      i(EP, "setToArray");
      $h.exports = EP;
    });
    var zh = l((uH, Jh) => {
      var To = Eo(), mP = Xh(), hP = xo(), DP = 1 / 0, yP = To && 1 / hP(new To([, -0]))[1] == DP ? function(e) {
        return new To(e);
      } : mP;
      Jh.exports = yP;
    });
    var Zh = l((oH, Qh) => {
      var AP = Ih(), xP = Uh(), TP = Vh(), gP = Wh(), vP = zh(), SP = xo(), FP = 200;
      function CP(e, t, r) {
        var n = -1, s = xP, a = e.length, u = true, c = [], p = c;
        if (r)
          u = false, s = TP;
        else if (a >= FP) {
          var f = t ? null : vP(e);
          if (f)
            return SP(f);
          u = false, s = gP, p = new AP();
        } else
          p = t ? [] : c;
        e:
          for (; ++n < a; ) {
            var h = e[n], D = t ? t(h) : h;
            if (h = r || h !== 0 ? h : 0, u && D === D) {
              for (var d = p.length; d--; )
                if (p[d] === D)
                  continue e;
              t && p.push(D), c.push(h);
            } else
              s(p, D, r) || (p !== c && p.push(D), c.push(h));
          }
        return c;
      }
      i(CP, "baseUniq");
      Qh.exports = CP;
    });
    var tD = l((cH, eD) => {
      var BP = Zh();
      function bP(e) {
        return e && e.length ? BP(e) : [];
      }
      i(bP, "uniq");
      eD.exports = bP;
    });
    var Rt = l((Ce) => {
      "use strict";
      Ce.__esModule = true;
      Ce.DEPRECATED_KEYS = Ce.BUILDER_KEYS = Ce.NODE_FIELDS = Ce.ALIAS_KEYS = Ce.VISITOR_KEYS = void 0;
      var OP = Qn(), Qs = go(OP), NP = Is(), ln = go(NP), _P = Vu(), IP = go(_P);
      Ce.assertEach = GP;
      Ce.assertOneOf = jP;
      Ce.assertNodeType = UP;
      Ce.assertNodeOrValueType = YP;
      Ce.assertValueType = iD;
      Ce.chain = VP;
      Ce.default = KP;
      var RP = It(), nD = PP(RP);
      function PP(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(PP, "_interopRequireWildcard");
      function go(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(go, "_interopRequireDefault");
      var qP = Ce.VISITOR_KEYS = {}, wP = Ce.ALIAS_KEYS = {}, LP = Ce.NODE_FIELDS = {}, kP = Ce.BUILDER_KEYS = {}, MP = Ce.DEPRECATED_KEYS = {};
      function zs(e) {
        return Array.isArray(e) ? "array" : e === null ? "null" : e === void 0 || typeof e > "u" ? "undefined" : (0, IP.default)(e);
      }
      i(zs, "getType");
      function GP(e) {
        function t(r, n, s) {
          if (Array.isArray(s))
            for (var a = 0; a < s.length; a++)
              e(r, n + "[" + a + "]", s[a]);
        }
        return i(t, "validator"), t.each = e, t;
      }
      i(GP, "assertEach");
      function jP() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, a, u) {
          if (t.indexOf(u) < 0)
            throw new TypeError("Property " + a + " expected value to be one of " + (0, ln.default)(t) + " but got " + (0, ln.default)(u));
        }
        return i(n, "validate"), n.oneOf = t, n;
      }
      i(jP, "assertOneOf");
      function UP() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, a, u) {
          for (var c = false, h = t, p = Array.isArray(h), f = 0, h = p ? h : (0, Qs.default)(h); ; ) {
            var D;
            if (p) {
              if (f >= h.length)
                break;
              D = h[f++];
            } else {
              if (f = h.next(), f.done)
                break;
              D = f.value;
            }
            var d = D;
            if (nD.is(d, u)) {
              c = true;
              break;
            }
          }
          if (!c)
            throw new TypeError("Property " + a + " of " + s.type + " expected node to be of a type " + (0, ln.default)(t) + " " + ("but instead got " + (0, ln.default)(u && u.type)));
        }
        return i(n, "validate"), n.oneOfNodeTypes = t, n;
      }
      i(UP, "assertNodeType");
      function YP() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, a, u) {
          for (var c = false, h = t, p = Array.isArray(h), f = 0, h = p ? h : (0, Qs.default)(h); ; ) {
            var D;
            if (p) {
              if (f >= h.length)
                break;
              D = h[f++];
            } else {
              if (f = h.next(), f.done)
                break;
              D = f.value;
            }
            var d = D;
            if (zs(u) === d || nD.is(d, u)) {
              c = true;
              break;
            }
          }
          if (!c)
            throw new TypeError("Property " + a + " of " + s.type + " expected node to be of a type " + (0, ln.default)(t) + " " + ("but instead got " + (0, ln.default)(u && u.type)));
        }
        return i(n, "validate"), n.oneOfNodeOrValueTypes = t, n;
      }
      i(YP, "assertNodeOrValueType");
      function iD(e) {
        function t(r, n, s) {
          var a = zs(s) === e;
          if (!a)
            throw new TypeError("Property " + n + " expected type of " + e + " but got " + zs(s));
        }
        return i(t, "validate"), t.type = e, t;
      }
      i(iD, "assertValueType");
      function VP() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n() {
          for (var u = t, s = Array.isArray(u), a = 0, u = s ? u : (0, Qs.default)(u); ; ) {
            var c;
            if (s) {
              if (a >= u.length)
                break;
              c = u[a++];
            } else {
              if (a = u.next(), a.done)
                break;
              c = a.value;
            }
            var p = c;
            p.apply(void 0, arguments);
          }
        }
        return i(n, "validate"), n.chainOf = t, n;
      }
      i(VP, "chain");
      function KP(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.inherits && rD[t.inherits] || {};
        t.fields = t.fields || r.fields || {}, t.visitor = t.visitor || r.visitor || [], t.aliases = t.aliases || r.aliases || [], t.builder = t.builder || r.builder || t.visitor || [], t.deprecatedAlias && (MP[t.deprecatedAlias] = e);
        for (var a = t.visitor.concat(t.builder), n = Array.isArray(a), s = 0, a = n ? a : (0, Qs.default)(a); ; ) {
          var u;
          if (n) {
            if (s >= a.length)
              break;
            u = a[s++];
          } else {
            if (s = a.next(), s.done)
              break;
            u = s.value;
          }
          var c = u;
          t.fields[c] = t.fields[c] || {};
        }
        for (var p in t.fields) {
          var f = t.fields[p];
          t.builder.indexOf(p) === -1 && (f.optional = true), f.default === void 0 ? f.default = null : f.validate || (f.validate = iD(zs(f.default)));
        }
        qP[e] = t.visitor, kP[e] = t.builder, LP[e] = t.fields, wP[e] = t.aliases, rD[e] = t;
      }
      i(KP, "defineType");
      var rD = {};
    });
    var sD = l(() => {
      "use strict";
      var WP = It(), HP = $P(WP), Zs = Rs(), y = Rt(), k = XP(y);
      function XP(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(XP, "_interopRequireDefault");
      function $P(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i($P, "_interopRequireWildcard");
      (0, k.default)("ArrayExpression", { fields: { elements: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeOrValueType)("null", "Expression", "SpreadElement"))), default: [] } }, visitor: ["elements"], aliases: ["Expression"] });
      (0, k.default)("AssignmentExpression", { fields: { operator: { validate: (0, y.assertValueType)("string") }, left: { validate: (0, y.assertNodeType)("LVal") }, right: { validate: (0, y.assertNodeType)("Expression") } }, builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Expression"] });
      (0, k.default)("BinaryExpression", { builder: ["operator", "left", "right"], fields: { operator: { validate: y.assertOneOf.apply(void 0, Zs.BINARY_OPERATORS) }, left: { validate: (0, y.assertNodeType)("Expression") }, right: { validate: (0, y.assertNodeType)("Expression") } }, visitor: ["left", "right"], aliases: ["Binary", "Expression"] });
      (0, k.default)("Directive", { visitor: ["value"], fields: { value: { validate: (0, y.assertNodeType)("DirectiveLiteral") } } });
      (0, k.default)("DirectiveLiteral", { builder: ["value"], fields: { value: { validate: (0, y.assertValueType)("string") } } });
      (0, k.default)("BlockStatement", { builder: ["body", "directives"], visitor: ["directives", "body"], fields: { directives: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Directive"))), default: [] }, body: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Statement"))) } }, aliases: ["Scopable", "BlockParent", "Block", "Statement"] });
      (0, k.default)("BreakStatement", { visitor: ["label"], fields: { label: { validate: (0, y.assertNodeType)("Identifier"), optional: true } }, aliases: ["Statement", "Terminatorless", "CompletionStatement"] });
      (0, k.default)("CallExpression", { visitor: ["callee", "arguments"], fields: { callee: { validate: (0, y.assertNodeType)("Expression") }, arguments: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Expression", "SpreadElement"))) } }, aliases: ["Expression"] });
      (0, k.default)("CatchClause", { visitor: ["param", "body"], fields: { param: { validate: (0, y.assertNodeType)("Identifier") }, body: { validate: (0, y.assertNodeType)("BlockStatement") } }, aliases: ["Scopable"] });
      (0, k.default)("ConditionalExpression", { visitor: ["test", "consequent", "alternate"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, consequent: { validate: (0, y.assertNodeType)("Expression") }, alternate: { validate: (0, y.assertNodeType)("Expression") } }, aliases: ["Expression", "Conditional"] });
      (0, k.default)("ContinueStatement", { visitor: ["label"], fields: { label: { validate: (0, y.assertNodeType)("Identifier"), optional: true } }, aliases: ["Statement", "Terminatorless", "CompletionStatement"] });
      (0, k.default)("DebuggerStatement", { aliases: ["Statement"] });
      (0, k.default)("DoWhileStatement", { visitor: ["test", "body"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("Statement") } }, aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"] });
      (0, k.default)("EmptyStatement", { aliases: ["Statement"] });
      (0, k.default)("ExpressionStatement", { visitor: ["expression"], fields: { expression: { validate: (0, y.assertNodeType)("Expression") } }, aliases: ["Statement", "ExpressionWrapper"] });
      (0, k.default)("File", { builder: ["program", "comments", "tokens"], visitor: ["program"], fields: { program: { validate: (0, y.assertNodeType)("Program") } } });
      (0, k.default)("ForInStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, y.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("ForStatement", { visitor: ["init", "test", "update", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"], fields: { init: { validate: (0, y.assertNodeType)("VariableDeclaration", "Expression"), optional: true }, test: { validate: (0, y.assertNodeType)("Expression"), optional: true }, update: { validate: (0, y.assertNodeType)("Expression"), optional: true }, body: { validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("FunctionDeclaration", { builder: ["id", "params", "body", "generator", "async"], visitor: ["id", "params", "body", "returnType", "typeParameters"], fields: { id: { validate: (0, y.assertNodeType)("Identifier") }, params: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("LVal"))) }, body: { validate: (0, y.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, y.assertValueType)("boolean") }, async: { default: false, validate: (0, y.assertValueType)("boolean") } }, aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"] });
      (0, k.default)("FunctionExpression", { inherits: "FunctionDeclaration", aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"], fields: { id: { validate: (0, y.assertNodeType)("Identifier"), optional: true }, params: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("LVal"))) }, body: { validate: (0, y.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, y.assertValueType)("boolean") }, async: { default: false, validate: (0, y.assertValueType)("boolean") } } });
      (0, k.default)("Identifier", { builder: ["name"], visitor: ["typeAnnotation"], aliases: ["Expression", "LVal"], fields: { name: { validate: i(function(t, r, n) {
        HP.isValidIdentifier(n);
      }, "validate") }, decorators: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Decorator"))) } } });
      (0, k.default)("IfStatement", { visitor: ["test", "consequent", "alternate"], aliases: ["Statement", "Conditional"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, consequent: { validate: (0, y.assertNodeType)("Statement") }, alternate: { optional: true, validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("LabeledStatement", { visitor: ["label", "body"], aliases: ["Statement"], fields: { label: { validate: (0, y.assertNodeType)("Identifier") }, body: { validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("StringLiteral", { builder: ["value"], fields: { value: { validate: (0, y.assertValueType)("string") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NumericLiteral", { builder: ["value"], deprecatedAlias: "NumberLiteral", fields: { value: { validate: (0, y.assertValueType)("number") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NullLiteral", { aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("BooleanLiteral", { builder: ["value"], fields: { value: { validate: (0, y.assertValueType)("boolean") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("RegExpLiteral", { builder: ["pattern", "flags"], deprecatedAlias: "RegexLiteral", aliases: ["Expression", "Literal"], fields: { pattern: { validate: (0, y.assertValueType)("string") }, flags: { validate: (0, y.assertValueType)("string"), default: "" } } });
      (0, k.default)("LogicalExpression", { builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Binary", "Expression"], fields: { operator: { validate: y.assertOneOf.apply(void 0, Zs.LOGICAL_OPERATORS) }, left: { validate: (0, y.assertNodeType)("Expression") }, right: { validate: (0, y.assertNodeType)("Expression") } } });
      (0, k.default)("MemberExpression", { builder: ["object", "property", "computed"], visitor: ["object", "property"], aliases: ["Expression", "LVal"], fields: { object: { validate: (0, y.assertNodeType)("Expression") }, property: { validate: i(function(t, r, n) {
        var s = t.computed ? "Expression" : "Identifier";
        (0, y.assertNodeType)(s)(t, r, n);
      }, "validate") }, computed: { default: false } } });
      (0, k.default)("NewExpression", { visitor: ["callee", "arguments"], aliases: ["Expression"], fields: { callee: { validate: (0, y.assertNodeType)("Expression") }, arguments: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Expression", "SpreadElement"))) } } });
      (0, k.default)("Program", { visitor: ["directives", "body"], builder: ["body", "directives"], fields: { directives: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Directive"))), default: [] }, body: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Statement"))) } }, aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"] });
      (0, k.default)("ObjectExpression", { visitor: ["properties"], aliases: ["Expression"], fields: { properties: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty"))) } } });
      (0, k.default)("ObjectMethod", { builder: ["kind", "key", "params", "body", "computed"], fields: { kind: { validate: (0, y.chain)((0, y.assertValueType)("string"), (0, y.assertOneOf)("method", "get", "set")), default: "method" }, computed: { validate: (0, y.assertValueType)("boolean"), default: false }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        y.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, decorators: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Decorator"))) }, body: { validate: (0, y.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, y.assertValueType)("boolean") }, async: { default: false, validate: (0, y.assertValueType)("boolean") } }, visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"], aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"] });
      (0, k.default)("ObjectProperty", { builder: ["key", "value", "computed", "shorthand", "decorators"], fields: { computed: { validate: (0, y.assertValueType)("boolean"), default: false }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        y.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, value: { validate: (0, y.assertNodeType)("Expression", "Pattern", "RestElement") }, shorthand: { validate: (0, y.assertValueType)("boolean"), default: false }, decorators: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Decorator"))), optional: true } }, visitor: ["key", "value", "decorators"], aliases: ["UserWhitespacable", "Property", "ObjectMember"] });
      (0, k.default)("RestElement", { visitor: ["argument", "typeAnnotation"], aliases: ["LVal"], fields: { argument: { validate: (0, y.assertNodeType)("LVal") }, decorators: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Decorator"))) } } });
      (0, k.default)("ReturnStatement", { visitor: ["argument"], aliases: ["Statement", "Terminatorless", "CompletionStatement"], fields: { argument: { validate: (0, y.assertNodeType)("Expression"), optional: true } } });
      (0, k.default)("SequenceExpression", { visitor: ["expressions"], fields: { expressions: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Expression"))) } }, aliases: ["Expression"] });
      (0, k.default)("SwitchCase", { visitor: ["test", "consequent"], fields: { test: { validate: (0, y.assertNodeType)("Expression"), optional: true }, consequent: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Statement"))) } } });
      (0, k.default)("SwitchStatement", { visitor: ["discriminant", "cases"], aliases: ["Statement", "BlockParent", "Scopable"], fields: { discriminant: { validate: (0, y.assertNodeType)("Expression") }, cases: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("SwitchCase"))) } } });
      (0, k.default)("ThisExpression", { aliases: ["Expression"] });
      (0, k.default)("ThrowStatement", { visitor: ["argument"], aliases: ["Statement", "Terminatorless", "CompletionStatement"], fields: { argument: { validate: (0, y.assertNodeType)("Expression") } } });
      (0, k.default)("TryStatement", { visitor: ["block", "handler", "finalizer"], aliases: ["Statement"], fields: { body: { validate: (0, y.assertNodeType)("BlockStatement") }, handler: { optional: true, handler: (0, y.assertNodeType)("BlockStatement") }, finalizer: { optional: true, validate: (0, y.assertNodeType)("BlockStatement") } } });
      (0, k.default)("UnaryExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: true }, argument: { validate: (0, y.assertNodeType)("Expression") }, operator: { validate: y.assertOneOf.apply(void 0, Zs.UNARY_OPERATORS) } }, visitor: ["argument"], aliases: ["UnaryLike", "Expression"] });
      (0, k.default)("UpdateExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: false }, argument: { validate: (0, y.assertNodeType)("Expression") }, operator: { validate: y.assertOneOf.apply(void 0, Zs.UPDATE_OPERATORS) } }, visitor: ["argument"], aliases: ["Expression"] });
      (0, k.default)("VariableDeclaration", { builder: ["kind", "declarations"], visitor: ["declarations"], aliases: ["Statement", "Declaration"], fields: { kind: { validate: (0, y.chain)((0, y.assertValueType)("string"), (0, y.assertOneOf)("var", "let", "const")) }, declarations: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("VariableDeclarator"))) } } });
      (0, k.default)("VariableDeclarator", { visitor: ["id", "init"], fields: { id: { validate: (0, y.assertNodeType)("LVal") }, init: { optional: true, validate: (0, y.assertNodeType)("Expression") } } });
      (0, k.default)("WhileStatement", { visitor: ["test", "body"], aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("BlockStatement", "Statement") } } });
      (0, k.default)("WithStatement", { visitor: ["object", "body"], aliases: ["Statement"], fields: { object: { object: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("BlockStatement", "Statement") } } });
    });
    var aD = l(() => {
      "use strict";
      var T = Rt(), me = JP(T);
      function JP(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(JP, "_interopRequireDefault");
      (0, me.default)("AssignmentPattern", { visitor: ["left", "right"], aliases: ["Pattern", "LVal"], fields: { left: { validate: (0, T.assertNodeType)("Identifier") }, right: { validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, me.default)("ArrayPattern", { visitor: ["elements", "typeAnnotation"], aliases: ["Pattern", "LVal"], fields: { elements: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Identifier", "Pattern", "RestElement"))) }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, me.default)("ArrowFunctionExpression", { builder: ["params", "body", "async"], visitor: ["params", "body", "returnType", "typeParameters"], aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"], fields: { params: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("LVal"))) }, body: { validate: (0, T.assertNodeType)("BlockStatement", "Expression") }, async: { validate: (0, T.assertValueType)("boolean"), default: false } } });
      (0, me.default)("ClassBody", { visitor: ["body"], fields: { body: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ClassMethod", "ClassProperty"))) } } });
      (0, me.default)("ClassDeclaration", { builder: ["id", "superClass", "body", "decorators"], visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"], aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"], fields: { id: { validate: (0, T.assertNodeType)("Identifier") }, body: { validate: (0, T.assertNodeType)("ClassBody") }, superClass: { optional: true, validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, me.default)("ClassExpression", { inherits: "ClassDeclaration", aliases: ["Scopable", "Class", "Expression", "Pureish"], fields: { id: { optional: true, validate: (0, T.assertNodeType)("Identifier") }, body: { validate: (0, T.assertNodeType)("ClassBody") }, superClass: { optional: true, validate: (0, T.assertNodeType)("Expression") }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, me.default)("ExportAllDeclaration", { visitor: ["source"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { source: { validate: (0, T.assertNodeType)("StringLiteral") } } });
      (0, me.default)("ExportDefaultDeclaration", { visitor: ["declaration"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { declaration: { validate: (0, T.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression") } } });
      (0, me.default)("ExportNamedDeclaration", { visitor: ["declaration", "specifiers", "source"], aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"], fields: { declaration: { validate: (0, T.assertNodeType)("Declaration"), optional: true }, specifiers: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ExportSpecifier"))) }, source: { validate: (0, T.assertNodeType)("StringLiteral"), optional: true } } });
      (0, me.default)("ExportSpecifier", { visitor: ["local", "exported"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") }, exported: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, me.default)("ForOfStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, T.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, T.assertNodeType)("Expression") }, body: { validate: (0, T.assertNodeType)("Statement") } } });
      (0, me.default)("ImportDeclaration", { visitor: ["specifiers", "source"], aliases: ["Statement", "Declaration", "ModuleDeclaration"], fields: { specifiers: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"))) }, source: { validate: (0, T.assertNodeType)("StringLiteral") } } });
      (0, me.default)("ImportDefaultSpecifier", { visitor: ["local"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, me.default)("ImportNamespaceSpecifier", { visitor: ["local"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") } } });
      (0, me.default)("ImportSpecifier", { visitor: ["local", "imported"], aliases: ["ModuleSpecifier"], fields: { local: { validate: (0, T.assertNodeType)("Identifier") }, imported: { validate: (0, T.assertNodeType)("Identifier") }, importKind: { validate: (0, T.assertOneOf)(null, "type", "typeof") } } });
      (0, me.default)("MetaProperty", { visitor: ["meta", "property"], aliases: ["Expression"], fields: { meta: { validate: (0, T.assertValueType)("string") }, property: { validate: (0, T.assertValueType)("string") } } });
      (0, me.default)("ClassMethod", { aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"], builder: ["kind", "key", "params", "body", "computed", "static"], visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"], fields: { kind: { validate: (0, T.chain)((0, T.assertValueType)("string"), (0, T.assertOneOf)("get", "set", "method", "constructor")), default: "method" }, computed: { default: false, validate: (0, T.assertValueType)("boolean") }, static: { default: false, validate: (0, T.assertValueType)("boolean") }, key: { validate: i(function(t, r, n) {
        var s = t.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
        T.assertNodeType.apply(void 0, s)(t, r, n);
      }, "validate") }, params: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("LVal"))) }, body: { validate: (0, T.assertNodeType)("BlockStatement") }, generator: { default: false, validate: (0, T.assertValueType)("boolean") }, async: { default: false, validate: (0, T.assertValueType)("boolean") } } });
      (0, me.default)("ObjectPattern", { visitor: ["properties", "typeAnnotation"], aliases: ["Pattern", "LVal"], fields: { properties: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("RestProperty", "Property"))) }, decorators: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Decorator"))) } } });
      (0, me.default)("SpreadElement", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, T.assertNodeType)("Expression") } } });
      (0, me.default)("Super", { aliases: ["Expression"] });
      (0, me.default)("TaggedTemplateExpression", { visitor: ["tag", "quasi"], aliases: ["Expression"], fields: { tag: { validate: (0, T.assertNodeType)("Expression") }, quasi: { validate: (0, T.assertNodeType)("TemplateLiteral") } } });
      (0, me.default)("TemplateElement", { builder: ["value", "tail"], fields: { value: {}, tail: { validate: (0, T.assertValueType)("boolean"), default: false } } });
      (0, me.default)("TemplateLiteral", { visitor: ["quasis", "expressions"], aliases: ["Expression", "Literal"], fields: { quasis: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("TemplateElement"))) }, expressions: { validate: (0, T.chain)((0, T.assertValueType)("array"), (0, T.assertEach)((0, T.assertNodeType)("Expression"))) } } });
      (0, me.default)("YieldExpression", { builder: ["argument", "delegate"], visitor: ["argument"], aliases: ["Expression", "Terminatorless"], fields: { delegate: { validate: (0, T.assertValueType)("boolean"), default: false }, argument: { optional: true, validate: (0, T.assertNodeType)("Expression") } } });
    });
    var oD = l(() => {
      "use strict";
      var uD = Rt(), G = zP(uD);
      function zP(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(zP, "_interopRequireDefault");
      (0, G.default)("AnyTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ArrayTypeAnnotation", { visitor: ["elementType"], aliases: ["Flow"], fields: {} });
      (0, G.default)("BooleanTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("BooleanLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("NullLiteralTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ClassImplements", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ClassProperty", { visitor: ["key", "value", "typeAnnotation", "decorators"], builder: ["key", "value", "typeAnnotation", "decorators", "computed"], aliases: ["Property"], fields: { computed: { validate: (0, uD.assertValueType)("boolean"), default: false } } });
      (0, G.default)("DeclareClass", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareFunction", { visitor: ["id"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareInterface", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareModule", { visitor: ["id", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareModuleExports", { visitor: ["typeAnnotation"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareTypeAlias", { visitor: ["id", "typeParameters", "right"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareOpaqueType", { visitor: ["id", "typeParameters", "supertype"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareVariable", { visitor: ["id"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("DeclareExportDeclaration", { visitor: ["declaration", "specifiers", "source"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("ExistentialTypeParam", { aliases: ["Flow"] });
      (0, G.default)("FunctionTypeAnnotation", { visitor: ["typeParameters", "params", "rest", "returnType"], aliases: ["Flow"], fields: {} });
      (0, G.default)("FunctionTypeParam", { visitor: ["name", "typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("GenericTypeAnnotation", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("InterfaceExtends", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("InterfaceDeclaration", { visitor: ["id", "typeParameters", "extends", "body"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("IntersectionTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("MixedTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"] });
      (0, G.default)("EmptyTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"] });
      (0, G.default)("NullableTypeAnnotation", { visitor: ["typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("NumericLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("NumberTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("StringLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("StringTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ThisTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("TupleTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeofTypeAnnotation", { visitor: ["argument"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeAlias", { visitor: ["id", "typeParameters", "right"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("OpaqueType", { visitor: ["id", "typeParameters", "impltype", "supertype"], aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"], fields: {} });
      (0, G.default)("TypeAnnotation", { visitor: ["typeAnnotation"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeCastExpression", { visitor: ["expression", "typeAnnotation"], aliases: ["Flow", "ExpressionWrapper", "Expression"], fields: {} });
      (0, G.default)("TypeParameter", { visitor: ["bound"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeParameterDeclaration", { visitor: ["params"], aliases: ["Flow"], fields: {} });
      (0, G.default)("TypeParameterInstantiation", { visitor: ["params"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ObjectTypeAnnotation", { visitor: ["properties", "indexers", "callProperties"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ObjectTypeCallProperty", { visitor: ["value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeIndexer", { visitor: ["id", "key", "value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeProperty", { visitor: ["key", "value"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("ObjectTypeSpreadProperty", { visitor: ["argument"], aliases: ["Flow", "UserWhitespacable"], fields: {} });
      (0, G.default)("QualifiedTypeIdentifier", { visitor: ["id", "qualification"], aliases: ["Flow"], fields: {} });
      (0, G.default)("UnionTypeAnnotation", { visitor: ["types"], aliases: ["Flow"], fields: {} });
      (0, G.default)("VoidTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
    });
    var lD = l(() => {
      "use strict";
      var fe = Rt(), Qe = QP(fe);
      function QP(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(QP, "_interopRequireDefault");
      (0, Qe.default)("JSXAttribute", { visitor: ["name", "value"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, fe.assertNodeType)("JSXIdentifier", "JSXNamespacedName") }, value: { optional: true, validate: (0, fe.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer") } } });
      (0, Qe.default)("JSXClosingElement", { visitor: ["name"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, fe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") } } });
      (0, Qe.default)("JSXElement", { builder: ["openingElement", "closingElement", "children", "selfClosing"], visitor: ["openingElement", "children", "closingElement"], aliases: ["JSX", "Immutable", "Expression"], fields: { openingElement: { validate: (0, fe.assertNodeType)("JSXOpeningElement") }, closingElement: { optional: true, validate: (0, fe.assertNodeType)("JSXClosingElement") }, children: { validate: (0, fe.chain)((0, fe.assertValueType)("array"), (0, fe.assertEach)((0, fe.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement"))) } } });
      (0, Qe.default)("JSXEmptyExpression", { aliases: ["JSX", "Expression"] });
      (0, Qe.default)("JSXExpressionContainer", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, fe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXSpreadChild", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, fe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXIdentifier", { builder: ["name"], aliases: ["JSX", "Expression"], fields: { name: { validate: (0, fe.assertValueType)("string") } } });
      (0, Qe.default)("JSXMemberExpression", { visitor: ["object", "property"], aliases: ["JSX", "Expression"], fields: { object: { validate: (0, fe.assertNodeType)("JSXMemberExpression", "JSXIdentifier") }, property: { validate: (0, fe.assertNodeType)("JSXIdentifier") } } });
      (0, Qe.default)("JSXNamespacedName", { visitor: ["namespace", "name"], aliases: ["JSX"], fields: { namespace: { validate: (0, fe.assertNodeType)("JSXIdentifier") }, name: { validate: (0, fe.assertNodeType)("JSXIdentifier") } } });
      (0, Qe.default)("JSXOpeningElement", { builder: ["name", "attributes", "selfClosing"], visitor: ["name", "attributes"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, fe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") }, selfClosing: { default: false, validate: (0, fe.assertValueType)("boolean") }, attributes: { validate: (0, fe.chain)((0, fe.assertValueType)("array"), (0, fe.assertEach)((0, fe.assertNodeType)("JSXAttribute", "JSXSpreadAttribute"))) } } });
      (0, Qe.default)("JSXSpreadAttribute", { visitor: ["argument"], aliases: ["JSX"], fields: { argument: { validate: (0, fe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXText", { aliases: ["JSX", "Immutable"], builder: ["value"], fields: { value: { validate: (0, fe.assertValueType)("string") } } });
    });
    var fD = l(() => {
      "use strict";
      var cD = Rt(), pD = ZP(cD);
      function ZP(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(ZP, "_interopRequireDefault");
      (0, pD.default)("Noop", { visitor: [] });
      (0, pD.default)("ParenthesizedExpression", { visitor: ["expression"], aliases: ["Expression", "ExpressionWrapper"], fields: { expression: { validate: (0, cD.assertNodeType)("Expression") } } });
    });
    var dD = l(() => {
      "use strict";
      var it = Rt(), ft = eq(it);
      function eq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(eq, "_interopRequireDefault");
      (0, ft.default)("AwaitExpression", { builder: ["argument"], visitor: ["argument"], aliases: ["Expression", "Terminatorless"], fields: { argument: { validate: (0, it.assertNodeType)("Expression") } } });
      (0, ft.default)("ForAwaitStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, it.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, it.assertNodeType)("Expression") }, body: { validate: (0, it.assertNodeType)("Statement") } } });
      (0, ft.default)("BindExpression", { visitor: ["object", "callee"], aliases: ["Expression"], fields: {} });
      (0, ft.default)("Import", { aliases: ["Expression"] });
      (0, ft.default)("Decorator", { visitor: ["expression"], fields: { expression: { validate: (0, it.assertNodeType)("Expression") } } });
      (0, ft.default)("DoExpression", { visitor: ["body"], aliases: ["Expression"], fields: { body: { validate: (0, it.assertNodeType)("BlockStatement") } } });
      (0, ft.default)("ExportDefaultSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, it.assertNodeType)("Identifier") } } });
      (0, ft.default)("ExportNamespaceSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, it.assertNodeType)("Identifier") } } });
      (0, ft.default)("RestProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, it.assertNodeType)("LVal") } } });
      (0, ft.default)("SpreadProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, it.assertNodeType)("Expression") } } });
    });
    var ED = l(() => {
      "use strict";
      Rt();
      sD();
      aD();
      oD();
      lD();
      fD();
      dD();
    });
    var mD = l((cn) => {
      "use strict";
      cn.__esModule = true;
      cn.isReactComponent = void 0;
      cn.isCompatTag = nq;
      cn.buildChildren = sq;
      var tq = It(), di = rq(tq);
      function rq(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(rq, "_interopRequireWildcard");
      var PH = cn.isReactComponent = di.buildMatchMemberExpression("React.Component");
      function nq(e) {
        return !!e && /^[a-z]|\-/.test(e);
      }
      i(nq, "isCompatTag");
      function iq(e, t) {
        for (var r = e.value.split(/\r\n|\n|\r/), n = 0, s = 0; s < r.length; s++)
          r[s].match(/[^ \t]/) && (n = s);
        for (var a = "", u = 0; u < r.length; u++) {
          var c = r[u], p = u === 0, f = u === r.length - 1, h = u === n, D = c.replace(/\t/g, " ");
          p || (D = D.replace(/^[ ]+/, "")), f || (D = D.replace(/[ ]+$/, "")), D && (h || (D += " "), a += D);
        }
        a && t.push(di.stringLiteral(a));
      }
      i(iq, "cleanJSXElementLiteralChild");
      function sq(e) {
        for (var t = [], r = 0; r < e.children.length; r++) {
          var n = e.children[r];
          if (di.isJSXText(n)) {
            iq(n, t);
            continue;
          }
          di.isJSXExpressionContainer(n) && (n = n.expression), !di.isJSXEmptyExpression(n) && t.push(n);
        }
        return t;
      }
      i(sq, "buildChildren");
    });
    var It = l((A) => {
      "use strict";
      A.__esModule = true;
      A.createTypeAnnotationBasedOnTypeof = A.removeTypeDuplicates = A.createUnionTypeAnnotation = A.valueToNode = A.toBlock = A.toExpression = A.toStatement = A.toBindingIdentifierName = A.toIdentifier = A.toKeyAlias = A.toSequenceExpression = A.toComputedKey = A.isNodesEquivalent = A.isImmutable = A.isScope = A.isSpecifierDefault = A.isVar = A.isBlockScoped = A.isLet = A.isValidIdentifier = A.isReferenced = A.isBinding = A.getOuterBindingIdentifiers = A.getBindingIdentifiers = A.TYPES = A.react = A.DEPRECATED_KEYS = A.BUILDER_KEYS = A.NODE_FIELDS = A.ALIAS_KEYS = A.VISITOR_KEYS = A.NOT_LOCAL_BINDING = A.BLOCK_SCOPED_SYMBOL = A.INHERIT_KEYS = A.UNARY_OPERATORS = A.STRING_UNARY_OPERATORS = A.NUMBER_UNARY_OPERATORS = A.BOOLEAN_UNARY_OPERATORS = A.BINARY_OPERATORS = A.NUMBER_BINARY_OPERATORS = A.BOOLEAN_BINARY_OPERATORS = A.COMPARISON_BINARY_OPERATORS = A.EQUALITY_BINARY_OPERATORS = A.BOOLEAN_NUMBER_BINARY_OPERATORS = A.UPDATE_OPERATORS = A.LOGICAL_OPERATORS = A.COMMENT_KEYS = A.FOR_INIT_KEYS = A.FLATTENABLE_KEYS = A.STATEMENT_OR_BLOCK_KEYS = void 0;
      var aq = Lp(), uq = Cr(aq), oq = Qn(), dt = Cr(oq), lq = Mu(), Fr = Cr(lq), cq = Is(), hD = Cr(cq), Be = Rs();
      Object.defineProperty(A, "STATEMENT_OR_BLOCK_KEYS", { enumerable: true, get: i(function() {
        return Be.STATEMENT_OR_BLOCK_KEYS;
      }, "get") });
      Object.defineProperty(A, "FLATTENABLE_KEYS", { enumerable: true, get: i(function() {
        return Be.FLATTENABLE_KEYS;
      }, "get") });
      Object.defineProperty(A, "FOR_INIT_KEYS", { enumerable: true, get: i(function() {
        return Be.FOR_INIT_KEYS;
      }, "get") });
      Object.defineProperty(A, "COMMENT_KEYS", { enumerable: true, get: i(function() {
        return Be.COMMENT_KEYS;
      }, "get") });
      Object.defineProperty(A, "LOGICAL_OPERATORS", { enumerable: true, get: i(function() {
        return Be.LOGICAL_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "UPDATE_OPERATORS", { enumerable: true, get: i(function() {
        return Be.UPDATE_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.BOOLEAN_NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "EQUALITY_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.EQUALITY_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "COMPARISON_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.COMPARISON_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.BOOLEAN_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.BOOLEAN_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "NUMBER_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.NUMBER_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "STRING_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.STRING_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Be.UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "INHERIT_KEYS", { enumerable: true, get: i(function() {
        return Be.INHERIT_KEYS;
      }, "get") });
      Object.defineProperty(A, "BLOCK_SCOPED_SYMBOL", { enumerable: true, get: i(function() {
        return Be.BLOCK_SCOPED_SYMBOL;
      }, "get") });
      Object.defineProperty(A, "NOT_LOCAL_BINDING", { enumerable: true, get: i(function() {
        return Be.NOT_LOCAL_BINDING;
      }, "get") });
      A.is = Aq;
      A.isType = gD;
      A.validate = vD;
      A.shallowEqual = Tq;
      A.appendToMemberExpression = gq;
      A.prependToMemberExpression = vq;
      A.ensureBlock = Sq;
      A.clone = SD;
      A.cloneWithoutLoc = Fq;
      A.cloneDeep = Cq;
      A.buildMatchMemberExpression = Bq;
      A.removeComments = bq;
      A.inheritsComments = Oq;
      A.inheritTrailingComments = FD;
      A.inheritLeadingComments = CD;
      A.inheritInnerComments = BD;
      A.inherits = Nq;
      A.assertNode = _q;
      A.isNode = bD;
      A.traverseFast = ea;
      A.removeProperties = ND;
      A.removePropertiesDeep = Rq;
      var AD = ju();
      Object.defineProperty(A, "getBindingIdentifiers", { enumerable: true, get: i(function() {
        return AD.getBindingIdentifiers;
      }, "get") });
      Object.defineProperty(A, "getOuterBindingIdentifiers", { enumerable: true, get: i(function() {
        return AD.getOuterBindingIdentifiers;
      }, "get") });
      var Et = l0();
      Object.defineProperty(A, "isBinding", { enumerable: true, get: i(function() {
        return Et.isBinding;
      }, "get") });
      Object.defineProperty(A, "isReferenced", { enumerable: true, get: i(function() {
        return Et.isReferenced;
      }, "get") });
      Object.defineProperty(A, "isValidIdentifier", { enumerable: true, get: i(function() {
        return Et.isValidIdentifier;
      }, "get") });
      Object.defineProperty(A, "isLet", { enumerable: true, get: i(function() {
        return Et.isLet;
      }, "get") });
      Object.defineProperty(A, "isBlockScoped", { enumerable: true, get: i(function() {
        return Et.isBlockScoped;
      }, "get") });
      Object.defineProperty(A, "isVar", { enumerable: true, get: i(function() {
        return Et.isVar;
      }, "get") });
      Object.defineProperty(A, "isSpecifierDefault", { enumerable: true, get: i(function() {
        return Et.isSpecifierDefault;
      }, "get") });
      Object.defineProperty(A, "isScope", { enumerable: true, get: i(function() {
        return Et.isScope;
      }, "get") });
      Object.defineProperty(A, "isImmutable", { enumerable: true, get: i(function() {
        return Et.isImmutable;
      }, "get") });
      Object.defineProperty(A, "isNodesEquivalent", { enumerable: true, get: i(function() {
        return Et.isNodesEquivalent;
      }, "get") });
      var Pt = V0();
      Object.defineProperty(A, "toComputedKey", { enumerable: true, get: i(function() {
        return Pt.toComputedKey;
      }, "get") });
      Object.defineProperty(A, "toSequenceExpression", { enumerable: true, get: i(function() {
        return Pt.toSequenceExpression;
      }, "get") });
      Object.defineProperty(A, "toKeyAlias", { enumerable: true, get: i(function() {
        return Pt.toKeyAlias;
      }, "get") });
      Object.defineProperty(A, "toIdentifier", { enumerable: true, get: i(function() {
        return Pt.toIdentifier;
      }, "get") });
      Object.defineProperty(A, "toBindingIdentifierName", { enumerable: true, get: i(function() {
        return Pt.toBindingIdentifierName;
      }, "get") });
      Object.defineProperty(A, "toStatement", { enumerable: true, get: i(function() {
        return Pt.toStatement;
      }, "get") });
      Object.defineProperty(A, "toExpression", { enumerable: true, get: i(function() {
        return Pt.toExpression;
      }, "get") });
      Object.defineProperty(A, "toBlock", { enumerable: true, get: i(function() {
        return Pt.toBlock;
      }, "get") });
      Object.defineProperty(A, "valueToNode", { enumerable: true, get: i(function() {
        return Pt.valueToNode;
      }, "get") });
      var vo = K0();
      Object.defineProperty(A, "createUnionTypeAnnotation", { enumerable: true, get: i(function() {
        return vo.createUnionTypeAnnotation;
      }, "get") });
      Object.defineProperty(A, "removeTypeDuplicates", { enumerable: true, get: i(function() {
        return vo.removeTypeDuplicates;
      }, "get") });
      Object.defineProperty(A, "createTypeAnnotationBasedOnTypeof", { enumerable: true, get: i(function() {
        return vo.createTypeAnnotationBasedOnTypeof;
      }, "get") });
      var pq = W0(), xD = Cr(pq), fq = Ch(), dq = Cr(fq), Eq = tD(), mq = Cr(Eq);
      ED();
      var pn = Rt(), hq = mD(), Dq = yq(hq);
      function yq(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(yq, "_interopRequireWildcard");
      function Cr(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Cr, "_interopRequireDefault");
      var w = A;
      function TD(e) {
        var t = w["is" + e];
        t || (t = w["is" + e] = function(r, n) {
          return w.is(e, r, n);
        }), w["assert" + e] = function(r, n) {
          if (n = n || {}, !t(r, n))
            throw new Error("Expected type " + (0, hD.default)(e) + " with option " + (0, hD.default)(n));
        };
      }
      i(TD, "registerType");
      A.VISITOR_KEYS = pn.VISITOR_KEYS;
      A.ALIAS_KEYS = pn.ALIAS_KEYS;
      A.NODE_FIELDS = pn.NODE_FIELDS;
      A.BUILDER_KEYS = pn.BUILDER_KEYS;
      A.DEPRECATED_KEYS = pn.DEPRECATED_KEYS;
      A.react = Dq;
      for (DD in w.VISITOR_KEYS)
        TD(DD);
      var DD;
      w.FLIPPED_ALIAS_KEYS = {};
      (0, Fr.default)(w.ALIAS_KEYS).forEach(function(e) {
        w.ALIAS_KEYS[e].forEach(function(t) {
          var r = w.FLIPPED_ALIAS_KEYS[t] = w.FLIPPED_ALIAS_KEYS[t] || [];
          r.push(e);
        });
      });
      (0, Fr.default)(w.FLIPPED_ALIAS_KEYS).forEach(function(e) {
        w[e.toUpperCase() + "_TYPES"] = w.FLIPPED_ALIAS_KEYS[e], TD(e);
      });
      var LH = A.TYPES = (0, Fr.default)(w.VISITOR_KEYS).concat((0, Fr.default)(w.FLIPPED_ALIAS_KEYS)).concat((0, Fr.default)(w.DEPRECATED_KEYS));
      function Aq(e, t, r) {
        if (!t)
          return false;
        var n = gD(t.type, e);
        return n ? typeof r > "u" ? true : w.shallowEqual(t, r) : false;
      }
      i(Aq, "is");
      function gD(e, t) {
        if (e === t)
          return true;
        if (w.ALIAS_KEYS[t])
          return false;
        var r = w.FLIPPED_ALIAS_KEYS[t];
        if (r) {
          if (r[0] === e)
            return true;
          for (var a = r, n = Array.isArray(a), s = 0, a = n ? a : (0, dt.default)(a); ; ) {
            var u;
            if (n) {
              if (s >= a.length)
                break;
              u = a[s++];
            } else {
              if (s = a.next(), s.done)
                break;
              u = s.value;
            }
            var c = u;
            if (e === c)
              return true;
          }
        }
        return false;
      }
      i(gD, "isType");
      (0, Fr.default)(w.BUILDER_KEYS).forEach(function(e) {
        var t = w.BUILDER_KEYS[e];
        function r() {
          if (arguments.length > t.length)
            throw new Error("t." + e + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + t.length));
          var n = {};
          n.type = e;
          for (var s = 0, c = t, a = Array.isArray(c), u = 0, c = a ? c : (0, dt.default)(c); ; ) {
            var p;
            if (a) {
              if (u >= c.length)
                break;
              p = c[u++];
            } else {
              if (u = c.next(), u.done)
                break;
              p = u.value;
            }
            var f = p, h = w.NODE_FIELDS[e][f], D = arguments[s++];
            D === void 0 && (D = (0, dq.default)(h.default)), n[f] = D;
          }
          for (var d in n)
            vD(n, d, n[d]);
          return n;
        }
        i(r, "builder"), w[e] = r, w[e[0].toLowerCase() + e.slice(1)] = r;
      });
      var xq = i(function(t) {
        var r = w.DEPRECATED_KEYS[t];
        function n(s) {
          return function() {
            return console.trace("The node type " + t + " has been renamed to " + r), s.apply(this, arguments);
          };
        }
        i(n, "proxy"), w[t] = w[t[0].toLowerCase() + t.slice(1)] = n(w[r]), w["is" + t] = n(w["is" + r]), w["assert" + t] = n(w["assert" + r]);
      }, "_loop");
      for (yD in w.DEPRECATED_KEYS)
        xq(yD);
      var yD;
      function vD(e, t, r) {
        if (e) {
          var n = w.NODE_FIELDS[e.type];
          if (n) {
            var s = n[t];
            !s || !s.validate || s.optional && r == null || s.validate(e, t, r);
          }
        }
      }
      i(vD, "validate");
      function Tq(e, t) {
        for (var r = (0, Fr.default)(t), a = r, n = Array.isArray(a), s = 0, a = n ? a : (0, dt.default)(a); ; ) {
          var u;
          if (n) {
            if (s >= a.length)
              break;
            u = a[s++];
          } else {
            if (s = a.next(), s.done)
              break;
            u = s.value;
          }
          var c = u;
          if (e[c] !== t[c])
            return false;
        }
        return true;
      }
      i(Tq, "shallowEqual");
      function gq(e, t, r) {
        return e.object = w.memberExpression(e.object, e.property, e.computed), e.property = t, e.computed = !!r, e;
      }
      i(gq, "appendToMemberExpression");
      function vq(e, t) {
        return e.object = w.memberExpression(t, e.object), e;
      }
      i(vq, "prependToMemberExpression");
      function Sq(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "body";
        return e[t] = w.toBlock(e[t], e);
      }
      i(Sq, "ensureBlock");
      function SD(e) {
        if (!e)
          return e;
        var t = {};
        for (var r in e)
          r[0] !== "_" && (t[r] = e[r]);
        return t;
      }
      i(SD, "clone");
      function Fq(e) {
        var t = SD(e);
        return delete t.loc, t;
      }
      i(Fq, "cloneWithoutLoc");
      function Cq(e) {
        if (!e)
          return e;
        var t = {};
        for (var r in e)
          if (r[0] !== "_") {
            var n = e[r];
            n && (n.type ? n = w.cloneDeep(n) : Array.isArray(n) && (n = n.map(w.cloneDeep))), t[r] = n;
          }
        return t;
      }
      i(Cq, "cloneDeep");
      function Bq(e, t) {
        var r = e.split(".");
        return function(n) {
          if (!w.isMemberExpression(n))
            return false;
          for (var s = [n], a = 0; s.length; ) {
            var u = s.shift();
            if (t && a === r.length)
              return true;
            if (w.isIdentifier(u)) {
              if (r[a] !== u.name)
                return false;
            } else if (w.isStringLiteral(u)) {
              if (r[a] !== u.value)
                return false;
            } else if (w.isMemberExpression(u)) {
              if (u.computed && !w.isStringLiteral(u.property))
                return false;
              s.push(u.object), s.push(u.property);
              continue;
            } else
              return false;
            if (++a > r.length)
              return false;
          }
          return true;
        };
      }
      i(Bq, "buildMatchMemberExpression");
      function bq(e) {
        for (var n = w.COMMENT_KEYS, t = Array.isArray(n), r = 0, n = t ? n : (0, dt.default)(n); ; ) {
          var s;
          if (t) {
            if (r >= n.length)
              break;
            s = n[r++];
          } else {
            if (r = n.next(), r.done)
              break;
            s = r.value;
          }
          var a = s;
          delete e[a];
        }
        return e;
      }
      i(bq, "removeComments");
      function Oq(e, t) {
        return FD(e, t), CD(e, t), BD(e, t), e;
      }
      i(Oq, "inheritsComments");
      function FD(e, t) {
        So("trailingComments", e, t);
      }
      i(FD, "inheritTrailingComments");
      function CD(e, t) {
        So("leadingComments", e, t);
      }
      i(CD, "inheritLeadingComments");
      function BD(e, t) {
        So("innerComments", e, t);
      }
      i(BD, "inheritInnerComments");
      function So(e, t, r) {
        t && r && (t[e] = (0, mq.default)([].concat(t[e], r[e]).filter(Boolean)));
      }
      i(So, "_inheritComments");
      function Nq(e, t) {
        if (!e || !t)
          return e;
        for (var s = w.INHERIT_KEYS.optional, r = Array.isArray(s), n = 0, s = r ? s : (0, dt.default)(s); ; ) {
          var a;
          if (r) {
            if (n >= s.length)
              break;
            a = s[n++];
          } else {
            if (n = s.next(), n.done)
              break;
            a = n.value;
          }
          var u = a;
          e[u] == null && (e[u] = t[u]);
        }
        for (var c in t)
          c[0] === "_" && (e[c] = t[c]);
        for (var h = w.INHERIT_KEYS.force, p = Array.isArray(h), f = 0, h = p ? h : (0, dt.default)(h); ; ) {
          var D;
          if (p) {
            if (f >= h.length)
              break;
            D = h[f++];
          } else {
            if (f = h.next(), f.done)
              break;
            D = f.value;
          }
          var d = D;
          e[d] = t[d];
        }
        return w.inheritsComments(e, t), e;
      }
      i(Nq, "inherits");
      function _q(e) {
        if (!bD(e))
          throw new TypeError("Not a valid node " + (e && e.type));
      }
      i(_q, "assertNode");
      function bD(e) {
        return !!(e && pn.VISITOR_KEYS[e.type]);
      }
      i(bD, "isNode");
      (0, xD.default)(w);
      (0, xD.default)(w.VISITOR_KEYS);
      function ea(e, t, r) {
        if (e) {
          var n = w.VISITOR_KEYS[e.type];
          if (n) {
            r = r || {}, t(e, r);
            for (var u = n, s = Array.isArray(u), a = 0, u = s ? u : (0, dt.default)(u); ; ) {
              var c;
              if (s) {
                if (a >= u.length)
                  break;
                c = u[a++];
              } else {
                if (a = u.next(), a.done)
                  break;
                c = a.value;
              }
              var p = c, f = e[p];
              if (Array.isArray(f))
                for (var d = f, h = Array.isArray(d), D = 0, d = h ? d : (0, dt.default)(d); ; ) {
                  var x;
                  if (h) {
                    if (D >= d.length)
                      break;
                    x = d[D++];
                  } else {
                    if (D = d.next(), D.done)
                      break;
                    x = D.value;
                  }
                  var C = x;
                  ea(C, t, r);
                }
              else
                ea(f, t, r);
            }
          }
        }
      }
      i(ea, "traverseFast");
      var OD = ["tokens", "start", "end", "loc", "raw", "rawValue"], Iq = w.COMMENT_KEYS.concat(["comments"]).concat(OD);
      function ND(e, t) {
        t = t || {};
        for (var r = t.preserveComments ? OD : Iq, a = r, n = Array.isArray(a), s = 0, a = n ? a : (0, dt.default)(a); ; ) {
          var u;
          if (n) {
            if (s >= a.length)
              break;
            u = a[s++];
          } else {
            if (s = a.next(), s.done)
              break;
            u = s.value;
          }
          var c = u;
          e[c] != null && (e[c] = void 0);
        }
        for (var p in e)
          p[0] === "_" && e[p] != null && (e[p] = void 0);
        for (var f = (0, uq.default)(e), d = f, h = Array.isArray(d), D = 0, d = h ? d : (0, dt.default)(d); ; ) {
          var x;
          if (h) {
            if (D >= d.length)
              break;
            x = d[D++];
          } else {
            if (D = d.next(), D.done)
              break;
            x = D.value;
          }
          var C = x;
          e[C] = null;
        }
      }
      i(ND, "removeProperties");
      function Rq(e, t) {
        return ea(e, ND, t), e;
      }
      i(Rq, "removePropertiesDeep");
    });
    var J = l((V) => {
      "use strict";
      Object.defineProperty(V, "__esModule", { value: true });
      var Pq = It(), Q = i(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }, "classCallCheck"), ie = i(function(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }, "inherits"), se = i(function(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e;
      }, "possibleConstructorReturn"), _D = /* @__PURE__ */ Object.create(null), ta = /* @__PURE__ */ Object.create(null), ID = Symbol(), Ei = /* @__PURE__ */ Object.create(null), ae = function() {
        function e() {
          Q(this, e), this.loc = { source: null, start: { line: 0, column: 0 }, end: { line: 0, column: 0 } }, this[ID] = [];
        }
        return i(e, "Node"), e.prototype.toJSON = i(function() {
          var r = this;
          return Object.getOwnPropertyNames(this).reduce(function(n, s) {
            if (s === "loc" || s === "parent")
              return n;
            var a = r[s];
            return Array.isArray(a) ? n[s] = a.map(function(u) {
              return u.toJSON();
            }) : n[s] = a && a.toJSON ? a.toJSON() : a, n;
          }, { type: this.type });
        }, "toJSON"), e.registerType = i(function(r) {
          e["is" + r] || (e["is" + r] = function(n) {
            return ra(n, r);
          });
        }, "registerType"), e;
      }();
      ae.registerType("Scope");
      function ra(e, t) {
        return e ? e.type === t || Ei[t] && Ei[t][e.type] || Pq.is(t, e) : false;
      }
      i(ra, "is");
      function Ae(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          r[n - 1] = arguments[n];
        e.prototype.visitorKeys = r;
      }
      i(Ae, "visitor");
      function he(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
          r[n - 1] = arguments[n];
        e.prototype.aliases = r;
        for (var s = 0, a = r.length; s < a; s++) {
          var u = r[s];
          ta[u] || (ta[u] = []), ta[u].push(e.prototype.type), Ei[u] || (Ei[u] = {}), Ei[u][e.prototype.type] = true, ae.registerType(u);
        }
      }
      i(he, "alias");
      function Z(e, t) {
        e.prototype.type = t, _D[t] = e, ae.registerType(t);
      }
      i(Z, "type");
      var na = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "Fragment"), t;
      }(ae);
      Z(na, "Fragment");
      he(na, "Statement");
      Ae(na, "value");
      var ia = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintExpressionStatement"), t;
      }(ae);
      Z(ia, "PrintExpressionStatement");
      he(ia, "Statement", "PrintStatement");
      Ae(ia, "value");
      var sa = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintTextStatement"), t;
      }(ae);
      Z(sa, "PrintTextStatement");
      he(sa, "Statement", "PrintStatement");
      Ae(sa, "value");
      var Br = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "ConstantValue"), t.prototype.toString = i(function() {
          return "Const(" + this.value + ")";
        }, "toString"), t;
      }(ae);
      Z(Br, "ConstantValue");
      he(Br, "Expression", "Literal", "Immutable");
      var Fo = function(e) {
        ie(t, e);
        function t() {
          return Q(this, t), se(this, e.apply(this, arguments));
        }
        return i(t, "StringLiteral"), t;
      }(Br);
      Z(Fo, "StringLiteral");
      he(Fo, "Expression", "Literal", "Immutable");
      var Co = function(e) {
        ie(t, e);
        function t() {
          return Q(this, t), se(this, e.apply(this, arguments));
        }
        return i(t, "NumericLiteral"), t;
      }(Br);
      Z(Co, "NumericLiteral");
      he(Co, "Expression", "Literal", "Immutable");
      var Bo = function(e) {
        ie(t, e);
        function t(r) {
          return Q(this, t), se(this, e.call(this, r));
        }
        return i(t, "BooleanLiteral"), t;
      }(Br);
      Z(Bo, "BooleanLiteral");
      he(Bo, "Expression", "Literal", "Immutable");
      var bo = function(e) {
        ie(t, e);
        function t() {
          return Q(this, t), se(this, e.call(this, null));
        }
        return i(t, "NullLiteral"), t;
      }(Br);
      Z(bo, "NullLiteral");
      he(bo, "Expression", "Literal", "Immutable");
      var Oo = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.name = r, n;
        }
        return i(t, "Identifier"), t;
      }(ae);
      Z(Oo, "Identifier");
      he(Oo, "Expression");
      var aa = function(e) {
        ie(t, e);
        function t(r, n) {
          Q(this, t);
          var s = se(this, e.call(this));
          return s.operator = r, s.argument = n, s;
        }
        return i(t, "UnaryExpression"), t;
      }(ae);
      Z(aa, "UnaryExpression");
      he(aa, "Expression", "UnaryLike");
      Ae(aa, "argument");
      var mi = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.operator = r, a.left = n, a.right = s, a;
        }
        return i(t, "BinaryExpression"), t;
      }(ae);
      Z(mi, "BinaryExpression");
      he(mi, "Binary", "Expression");
      Ae(mi, "left", "right");
      var ua = function(e) {
        ie(t, e);
        function t(r, n) {
          Q(this, t);
          var s = se(this, e.call(this, "~", r, n));
          return s.wasImplicitConcatenation = false, s;
        }
        return i(t, "BinaryConcatExpression"), t;
      }(mi);
      Z(ua, "BinaryConcatExpression");
      he(ua, "BinaryExpression", "Binary", "Expression");
      Ae(ua, "left", "right");
      var oa = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.test = r, a.consequent = n, a.alternate = s, a;
        }
        return i(t, "ConditionalExpression"), t;
      }(ae);
      Z(oa, "ConditionalExpression");
      he(oa, "Expression", "Conditional");
      Ae(oa, "test", "consequent", "alternate");
      var la = function(e) {
        ie(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          Q(this, t);
          var n = se(this, e.call(this));
          return n.elements = r, n;
        }
        return i(t, "ArrayExpression"), t;
      }(ae);
      Z(la, "ArrayExpression");
      he(la, "Expression");
      Ae(la, "elements");
      var ca = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.object = r, a.property = n, a.computed = s, a;
        }
        return i(t, "MemberExpression"), t;
      }(ae);
      Z(ca, "MemberExpression");
      he(ca, "Expression", "LVal");
      Ae(ca, "object", "property");
      var pa = function(e) {
        ie(t, e);
        function t(r, n) {
          Q(this, t);
          var s = se(this, e.call(this));
          return s.callee = r, s.arguments = n, s;
        }
        return i(t, "CallExpression"), t;
      }(ae);
      Z(pa, "CallExpression");
      he(pa, "Expression", "FunctionInvocation");
      Ae(pa, "callee", "arguments");
      var fa = function(e) {
        ie(t, e);
        function t(r, n) {
          Q(this, t);
          var s = se(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "NamedArgumentExpression"), t;
      }(ae);
      Z(fa, "NamedArgumentExpression");
      he(fa, "Expression");
      Ae(fa, "name", "value");
      var da = function(e) {
        ie(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          Q(this, t);
          var n = se(this, e.call(this));
          return n.properties = r, n;
        }
        return i(t, "ObjectExpression"), t;
      }(ae);
      Z(da, "ObjectExpression");
      he(da, "Expression");
      Ae(da, "properties");
      var Ea = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.key = r, a.value = n, a.computed = s, a;
        }
        return i(t, "ObjectProperty"), t;
      }(ae);
      Z(Ea, "ObjectProperty");
      he(Ea, "Property", "ObjectMember");
      Ae(Ea, "key", "value");
      var ma = function(e) {
        ie(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          Q(this, t);
          var n = se(this, e.call(this));
          return n.expressions = r, n;
        }
        return i(t, "SequenceExpression"), t.prototype.add = i(function(n) {
          this.expressions.push(n), this.loc.end = n.loc.end;
        }, "add"), t;
      }(ae);
      Z(ma, "SequenceExpression");
      he(ma, "Expression", "Scope");
      Ae(ma, "expressions");
      var ha = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.target = r, a.start = n, a.end = s, a;
        }
        return i(t, "SliceExpression"), t;
      }(ae);
      Z(ha, "SliceExpression");
      he(ha, "Expression");
      Ae(ha, "source", "start", "end");
      var Da = function(e) {
        ie(t, e);
        function t(r, n, s) {
          Q(this, t);
          var a = se(this, e.call(this));
          return a.target = r, a.name = n, a.arguments = s, a;
        }
        return i(t, "FilterExpression"), t;
      }(ae);
      Z(Da, "FilterExpression");
      he(Da, "Expression");
      Ae(Da, "target", "arguments");
      var ya = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.name = r, n.attributes = [], n.children = [], n.selfClosing = false, n;
        }
        return i(t, "Element"), t;
      }(ae);
      Z(ya, "Element");
      he(ya, "Expression");
      Ae(ya, "attributes", "children");
      var No = function(e) {
        ie(t, e);
        function t(r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          Q(this, t);
          var s = se(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "Attribute"), t.prototype.isImmutable = i(function() {
          return ra(this.name, "Identifier") && ra(this.value, "Immutable");
        }, "isImmutable"), t;
      }(ae);
      Z(No, "Attribute");
      Ae(No, "name", "value");
      var _o = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "TwigComment"), t;
      }(ae);
      Z(_o, "TwigComment");
      Ae(_o, "value");
      var Io = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "HtmlComment"), t;
      }(ae);
      Z(Io, "HtmlComment");
      Ae(Io, "value");
      var Ro = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.declarationType = r, n.parts = [], n;
        }
        return i(t, "Declaration"), t;
      }(ae);
      Z(Ro, "Declaration");
      Ae(Ro, "parts");
      var RD = function(e) {
        ie(t, e);
        function t(r) {
          Q(this, t);
          var n = se(this, e.call(this));
          return n.tagName = r, n.parts = [], n.sections = [], n;
        }
        return i(t, "GenericTwigTag"), t;
      }(ae);
      Z(RD, "GenericTwigTag");
      var PD = function(e) {
        ie(t, e);
        function t(r, n) {
          Q(this, t);
          var s = se(this, e.call(this));
          return s.tokenType = r, s.tokenText = n, s;
        }
        return i(t, "GenericToken"), t;
      }(ae);
      Z(PD, "GenericToken");
      V.TYPE_MAP = _D;
      V.ALIAS_TO_TYPE = ta;
      V.PATH_CACHE_KEY = ID;
      V.Node = ae;
      V.is = ra;
      V.visitor = Ae;
      V.alias = he;
      V.type = Z;
      V.Fragment = na;
      V.PrintExpressionStatement = ia;
      V.PrintTextStatement = sa;
      V.ConstantValue = Br;
      V.StringLiteral = Fo;
      V.NumericLiteral = Co;
      V.BooleanLiteral = Bo;
      V.NullLiteral = bo;
      V.Identifier = Oo;
      V.UnaryExpression = aa;
      V.BinaryExpression = mi;
      V.BinaryConcatExpression = ua;
      V.ConditionalExpression = oa;
      V.ArrayExpression = la;
      V.MemberExpression = ca;
      V.CallExpression = pa;
      V.NamedArgumentExpression = fa;
      V.ObjectExpression = da;
      V.ObjectProperty = Ea;
      V.SequenceExpression = ma;
      V.SliceExpression = ha;
      V.FilterExpression = Da;
      V.Element = ya;
      V.Attribute = No;
      V.TwigComment = _o;
      V.HtmlComment = Io;
      V.Declaration = Ro;
      V.GenericTwigTag = RD;
      V.GenericToken = PD;
    });
    var wo = l((sX, LD) => {
      var Lq = typeof global == "object" && global && global.Object === Object && global;
      LD.exports = Lq;
    });
    var At = l((aX, kD) => {
      var kq = wo(), Mq = typeof self == "object" && self && self.Object === Object && self, Gq = kq || Mq || Function("return this")();
      kD.exports = Gq;
    });
    var Si = l((uX, MD) => {
      var jq = At(), Uq = jq.Symbol;
      MD.exports = Uq;
    });
    var jD = l((oX, GD) => {
      function Yq(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
          s[r] = t(e[r], r, e);
        return s;
      }
      i(Yq, "arrayMap");
      GD.exports = Yq;
    });
    var xt = l((cX, UD) => {
      var Vq = Array.isArray;
      UD.exports = Vq;
    });
    var WD = l((pX, KD) => {
      var YD = Si(), VD = Object.prototype, Kq = VD.hasOwnProperty, Wq = VD.toString, Fi = YD ? YD.toStringTag : void 0;
      function Hq(e) {
        var t = Kq.call(e, Fi), r = e[Fi];
        try {
          e[Fi] = void 0;
          var n = true;
        } catch {
        }
        var s = Wq.call(e);
        return n && (t ? e[Fi] = r : delete e[Fi]), s;
      }
      i(Hq, "getRawTag");
      KD.exports = Hq;
    });
    var XD = l((dX, HD) => {
      var Xq = Object.prototype, $q = Xq.toString;
      function Jq(e) {
        return $q.call(e);
      }
      i(Jq, "objectToString");
      HD.exports = Jq;
    });
    var An = l((mX, zD) => {
      var $D = Si(), zq = WD(), Qq = XD(), Zq = "[object Null]", ew = "[object Undefined]", JD = $D ? $D.toStringTag : void 0;
      function tw(e) {
        return e == null ? e === void 0 ? ew : Zq : JD && JD in Object(e) ? zq(e) : Qq(e);
      }
      i(tw, "baseGetTag");
      zD.exports = tw;
    });
    var xn = l((DX, QD) => {
      function rw(e) {
        return e != null && typeof e == "object";
      }
      i(rw, "isObjectLike");
      QD.exports = rw;
    });
    var Sa = l((AX, ZD) => {
      var nw = An(), iw = xn(), sw = "[object Symbol]";
      function aw(e) {
        return typeof e == "symbol" || iw(e) && nw(e) == sw;
      }
      i(aw, "isSymbol");
      ZD.exports = aw;
    });
    var Fa = l((TX, iy) => {
      var ey = Si(), uw = jD(), ow = xt(), lw = Sa(), cw = 1 / 0, ty = ey ? ey.prototype : void 0, ry = ty ? ty.toString : void 0;
      function ny(e) {
        if (typeof e == "string")
          return e;
        if (ow(e))
          return uw(e, ny) + "";
        if (lw(e))
          return ry ? ry.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -cw ? "-0" : t;
      }
      i(ny, "baseToString");
      iy.exports = ny;
    });
    var ay = l((vX, sy) => {
      function pw(e, t, r) {
        var n = -1, s = e.length;
        t < 0 && (t = -t > s ? 0 : s + t), r = r > s ? s : r, r < 0 && (r += s), s = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var a = Array(s); ++n < s; )
          a[n] = e[n + t];
        return a;
      }
      i(pw, "baseSlice");
      sy.exports = pw;
    });
    var Lo = l((FX, uy) => {
      var fw = ay();
      function dw(e, t, r) {
        var n = e.length;
        return r = r === void 0 ? n : r, !t && r >= n ? e : fw(e, t, r);
      }
      i(dw, "castSlice");
      uy.exports = dw;
    });
    var ly = l((BX, oy) => {
      function Ew(e, t, r, n) {
        for (var s = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < s; )
          if (t(e[a], a, e))
            return a;
        return -1;
      }
      i(Ew, "baseFindIndex");
      oy.exports = Ew;
    });
    var py = l((OX, cy) => {
      function mw(e) {
        return e !== e;
      }
      i(mw, "baseIsNaN");
      cy.exports = mw;
    });
    var dy = l((_X, fy) => {
      function hw(e, t, r) {
        for (var n = r - 1, s = e.length; ++n < s; )
          if (e[n] === t)
            return n;
        return -1;
      }
      i(hw, "strictIndexOf");
      fy.exports = hw;
    });
    var ko = l((RX, Ey) => {
      var Dw = ly(), yw = py(), Aw = dy();
      function xw(e, t, r) {
        return t === t ? Aw(e, t, r) : Dw(e, yw, r);
      }
      i(xw, "baseIndexOf");
      Ey.exports = xw;
    });
    var hy = l((qX, my) => {
      var Tw = ko();
      function gw(e, t) {
        for (var r = e.length; r-- && Tw(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(gw, "charsEndIndex");
      my.exports = gw;
    });
    var yy = l((LX, Dy) => {
      function vw(e) {
        return e.split("");
      }
      i(vw, "asciiToArray");
      Dy.exports = vw;
    });
    var xy = l((MX, Ay) => {
      var Sw = "\\ud800-\\udfff", Fw = "\\u0300-\\u036f", Cw = "\\ufe20-\\ufe2f", Bw = "\\u20d0-\\u20ff", bw = Fw + Cw + Bw, Ow = "\\ufe0e\\ufe0f", Nw = "\\u200d", _w = RegExp("[" + Nw + Sw + bw + Ow + "]");
      function Iw(e) {
        return _w.test(e);
      }
      i(Iw, "hasUnicode");
      Ay.exports = Iw;
    });
    var by = l((jX, By) => {
      var Ty = "\\ud800-\\udfff", Rw = "\\u0300-\\u036f", Pw = "\\ufe20-\\ufe2f", qw = "\\u20d0-\\u20ff", ww = Rw + Pw + qw, Lw = "\\ufe0e\\ufe0f", kw = "[" + Ty + "]", Mo = "[" + ww + "]", Go = "\\ud83c[\\udffb-\\udfff]", Mw = "(?:" + Mo + "|" + Go + ")", gy = "[^" + Ty + "]", vy = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sy = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gw = "\\u200d", Fy = Mw + "?", Cy = "[" + Lw + "]?", jw = "(?:" + Gw + "(?:" + [gy, vy, Sy].join("|") + ")" + Cy + Fy + ")*", Uw = Cy + Fy + jw, Yw = "(?:" + [gy + Mo + "?", Mo, vy, Sy, kw].join("|") + ")", Vw = RegExp(Go + "(?=" + Go + ")|" + Yw + Uw, "g");
      function Kw(e) {
        return e.match(Vw) || [];
      }
      i(Kw, "unicodeToArray");
      By.exports = Kw;
    });
    var jo = l((YX, Oy) => {
      var Ww = yy(), Hw = xy(), Xw = by();
      function $w(e) {
        return Hw(e) ? Xw(e) : Ww(e);
      }
      i($w, "stringToArray");
      Oy.exports = $w;
    });
    var Ca = l((KX, Ny) => {
      var Jw = Fa();
      function zw(e) {
        return e == null ? "" : Jw(e);
      }
      i(zw, "toString");
      Ny.exports = zw;
    });
    var Iy = l((HX, _y) => {
      var Qw = /\s/;
      function Zw(e) {
        for (var t = e.length; t-- && Qw.test(e.charAt(t)); )
          ;
        return t;
      }
      i(Zw, "trimmedEndIndex");
      _y.exports = Zw;
    });
    var qy = l(($X, Py) => {
      var eL = Fa(), tL = Lo(), rL = hy(), Ry = jo(), nL = Ca(), iL = Iy();
      function sL(e, t, r) {
        if (e = nL(e), e && (r || t === void 0))
          return e.slice(0, iL(e) + 1);
        if (!e || !(t = eL(t)))
          return e;
        var n = Ry(e), s = rL(n, Ry(t)) + 1;
        return tL(n, 0, s).join("");
      }
      i(sL, "trimEnd");
      Py.exports = sL;
    });
    var Ly = l((zX, wy) => {
      var aL = ko();
      function uL(e, t) {
        for (var r = -1, n = e.length; ++r < n && aL(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(uL, "charsStartIndex");
      wy.exports = uL;
    });
    var Gy = l((ZX, My) => {
      var oL = Fa(), lL = Lo(), cL = Ly(), ky = jo(), pL = Ca(), fL = /^\s+/;
      function dL(e, t, r) {
        if (e = pL(e), e && (r || t === void 0))
          return e.replace(fL, "");
        if (!e || !(t = oL(t)))
          return e;
        var n = ky(e), s = cL(n, ky(t));
        return lL(n, s).join("");
      }
      i(dL, "trimStart");
      My.exports = dL;
    });
    var zo = l((k$, SA) => {
      function DL(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n; ) {
          var u = e[r];
          t(u, r, e) && (a[s++] = u);
        }
        return a;
      }
      i(DL, "arrayFilter");
      SA.exports = DL;
    });
    var CA = l((G$, FA) => {
      function yL(e) {
        return function(t, r, n) {
          for (var s = -1, a = Object(t), u = n(t), c = u.length; c--; ) {
            var p = u[e ? c : ++s];
            if (r(a[p], p, a) === false)
              break;
          }
          return t;
        };
      }
      i(yL, "createBaseFor");
      FA.exports = yL;
    });
    var bA = l((U$, BA) => {
      var AL = CA(), xL = AL();
      BA.exports = xL;
    });
    var NA = l((Y$, OA) => {
      function TL(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      i(TL, "baseTimes");
      OA.exports = TL;
    });
    var IA = l((K$, _A) => {
      var gL = An(), vL = xn(), SL = "[object Arguments]";
      function FL(e) {
        return vL(e) && gL(e) == SL;
      }
      i(FL, "baseIsArguments");
      _A.exports = FL;
    });
    var Qo = l((H$, qA) => {
      var RA = IA(), CL = xn(), PA = Object.prototype, BL = PA.hasOwnProperty, bL = PA.propertyIsEnumerable, OL = RA(function() {
        return arguments;
      }()) ? RA : function(e) {
        return CL(e) && BL.call(e, "callee") && !bL.call(e, "callee");
      };
      qA.exports = OL;
    });
    var LA = l((X$, wA) => {
      function NL() {
        return false;
      }
      i(NL, "stubFalse");
      wA.exports = NL;
    });
    var Zo = l((Oi, Cn) => {
      var _L = At(), IL = LA(), GA = typeof Oi == "object" && Oi && !Oi.nodeType && Oi, kA = GA && typeof Cn == "object" && Cn && !Cn.nodeType && Cn, RL = kA && kA.exports === GA, MA = RL ? _L.Buffer : void 0, PL = MA ? MA.isBuffer : void 0, qL = PL || IL;
      Cn.exports = qL;
    });
    var el = l((J$, jA) => {
      var wL = 9007199254740991, LL = /^(?:0|[1-9]\d*)$/;
      function kL(e, t) {
        var r = typeof e;
        return t = t ?? wL, !!t && (r == "number" || r != "symbol" && LL.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      i(kL, "isIndex");
      jA.exports = kL;
    });
    var ba = l((Q$, UA) => {
      var ML = 9007199254740991;
      function GL(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ML;
      }
      i(GL, "isLength");
      UA.exports = GL;
    });
    var VA = l((eJ, YA) => {
      var jL = An(), UL = ba(), YL = xn(), VL = "[object Arguments]", KL = "[object Array]", WL = "[object Boolean]", HL = "[object Date]", XL = "[object Error]", $L = "[object Function]", JL = "[object Map]", zL = "[object Number]", QL = "[object Object]", ZL = "[object RegExp]", e6 = "[object Set]", t6 = "[object String]", r6 = "[object WeakMap]", n6 = "[object ArrayBuffer]", i6 = "[object DataView]", s6 = "[object Float32Array]", a6 = "[object Float64Array]", u6 = "[object Int8Array]", o6 = "[object Int16Array]", l6 = "[object Int32Array]", c6 = "[object Uint8Array]", p6 = "[object Uint8ClampedArray]", f6 = "[object Uint16Array]", d6 = "[object Uint32Array]", Ee = {};
      Ee[s6] = Ee[a6] = Ee[u6] = Ee[o6] = Ee[l6] = Ee[c6] = Ee[p6] = Ee[f6] = Ee[d6] = true;
      Ee[VL] = Ee[KL] = Ee[n6] = Ee[WL] = Ee[i6] = Ee[HL] = Ee[XL] = Ee[$L] = Ee[JL] = Ee[zL] = Ee[QL] = Ee[ZL] = Ee[e6] = Ee[t6] = Ee[r6] = false;
      function E6(e) {
        return YL(e) && UL(e.length) && !!Ee[jL(e)];
      }
      i(E6, "baseIsTypedArray");
      YA.exports = E6;
    });
    var WA = l((rJ, KA) => {
      function m6(e) {
        return function(t) {
          return e(t);
        };
      }
      i(m6, "baseUnary");
      KA.exports = m6;
    });
    var XA = l((Ni, Bn) => {
      var h6 = wo(), HA = typeof Ni == "object" && Ni && !Ni.nodeType && Ni, _i = HA && typeof Bn == "object" && Bn && !Bn.nodeType && Bn, D6 = _i && _i.exports === HA, tl = D6 && h6.process, y6 = function() {
        try {
          var e = _i && _i.require && _i.require("util").types;
          return e || tl && tl.binding && tl.binding("util");
        } catch {
        }
      }();
      Bn.exports = y6;
    });
    var rl = l((iJ, zA) => {
      var A6 = VA(), x6 = WA(), $A = XA(), JA = $A && $A.isTypedArray, T6 = JA ? x6(JA) : A6;
      zA.exports = T6;
    });
    var ZA = l((sJ, QA) => {
      var g6 = NA(), v6 = Qo(), S6 = xt(), F6 = Zo(), C6 = el(), B6 = rl(), b6 = Object.prototype, O6 = b6.hasOwnProperty;
      function N6(e, t) {
        var r = S6(e), n = !r && v6(e), s = !r && !n && F6(e), a = !r && !n && !s && B6(e), u = r || n || s || a, c = u ? g6(e.length, String) : [], p = c.length;
        for (var f in e)
          (t || O6.call(e, f)) && !(u && (f == "length" || s && (f == "offset" || f == "parent") || a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || C6(f, p))) && c.push(f);
        return c;
      }
      i(N6, "arrayLikeKeys");
      QA.exports = N6;
    });
    var tx = l((uJ, ex) => {
      var _6 = Object.prototype;
      function I6(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || _6;
        return e === r;
      }
      i(I6, "isPrototype");
      ex.exports = I6;
    });
    var nx = l((lJ, rx) => {
      function R6(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      i(R6, "overArg");
      rx.exports = R6;
    });
    var sx = l((pJ, ix) => {
      var P6 = nx(), q6 = P6(Object.keys, Object);
      ix.exports = q6;
    });
    var ux = l((fJ, ax) => {
      var w6 = tx(), L6 = sx(), k6 = Object.prototype, M6 = k6.hasOwnProperty;
      function G6(e) {
        if (!w6(e))
          return L6(e);
        var t = [];
        for (var r in Object(e))
          M6.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      i(G6, "baseKeys");
      ax.exports = G6;
    });
    var Oa = l((EJ, ox) => {
      function j6(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      i(j6, "isObject");
      ox.exports = j6;
    });
    var nl = l((hJ, lx) => {
      var U6 = An(), Y6 = Oa(), V6 = "[object AsyncFunction]", K6 = "[object Function]", W6 = "[object GeneratorFunction]", H6 = "[object Proxy]";
      function X6(e) {
        if (!Y6(e))
          return false;
        var t = U6(e);
        return t == K6 || t == W6 || t == V6 || t == H6;
      }
      i(X6, "isFunction");
      lx.exports = X6;
    });
    var il = l((yJ, cx) => {
      var $6 = nl(), J6 = ba();
      function z6(e) {
        return e != null && J6(e.length) && !$6(e);
      }
      i(z6, "isArrayLike");
      cx.exports = z6;
    });
    var Na = l((xJ, px) => {
      var Q6 = ZA(), Z6 = ux(), e3 = il();
      function t3(e) {
        return e3(e) ? Q6(e) : Z6(e);
      }
      i(t3, "keys");
      px.exports = t3;
    });
    var dx = l((gJ, fx) => {
      var r3 = bA(), n3 = Na();
      function i3(e, t) {
        return e && r3(e, t, n3);
      }
      i(i3, "baseForOwn");
      fx.exports = i3;
    });
    var mx = l((SJ, Ex) => {
      var s3 = il();
      function a3(e, t) {
        return function(r, n) {
          if (r == null)
            return r;
          if (!s3(r))
            return e(r, n);
          for (var s = r.length, a = t ? s : -1, u = Object(r); (t ? a-- : ++a < s) && n(u[a], a, u) !== false; )
            ;
          return r;
        };
      }
      i(a3, "createBaseEach");
      Ex.exports = a3;
    });
    var Dx = l((CJ, hx) => {
      var u3 = dx(), o3 = mx(), l3 = o3(u3);
      hx.exports = l3;
    });
    var Ax = l((BJ, yx) => {
      var c3 = Dx();
      function p3(e, t) {
        var r = [];
        return c3(e, function(n, s, a) {
          t(n, s, a) && r.push(n);
        }), r;
      }
      i(p3, "baseFilter");
      yx.exports = p3;
    });
    var Tx = l((OJ, xx) => {
      function f3() {
        this.__data__ = [], this.size = 0;
      }
      i(f3, "listCacheClear");
      xx.exports = f3;
    });
    var sl = l((_J, gx) => {
      function d3(e, t) {
        return e === t || e !== e && t !== t;
      }
      i(d3, "eq");
      gx.exports = d3;
    });
    var Ii = l((RJ, vx) => {
      var E3 = sl();
      function m3(e, t) {
        for (var r = e.length; r--; )
          if (E3(e[r][0], t))
            return r;
        return -1;
      }
      i(m3, "assocIndexOf");
      vx.exports = m3;
    });
    var Fx = l((qJ, Sx) => {
      var h3 = Ii(), D3 = Array.prototype, y3 = D3.splice;
      function A3(e) {
        var t = this.__data__, r = h3(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : y3.call(t, r, 1), --this.size, true;
      }
      i(A3, "listCacheDelete");
      Sx.exports = A3;
    });
    var Bx = l((LJ, Cx) => {
      var x3 = Ii();
      function T3(e) {
        var t = this.__data__, r = x3(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      i(T3, "listCacheGet");
      Cx.exports = T3;
    });
    var Ox = l((MJ, bx) => {
      var g3 = Ii();
      function v3(e) {
        return g3(this.__data__, e) > -1;
      }
      i(v3, "listCacheHas");
      bx.exports = v3;
    });
    var _x = l((jJ, Nx) => {
      var S3 = Ii();
      function F3(e, t) {
        var r = this.__data__, n = S3(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      i(F3, "listCacheSet");
      Nx.exports = F3;
    });
    var Ri = l((YJ, Ix) => {
      var C3 = Tx(), B3 = Fx(), b3 = Bx(), O3 = Ox(), N3 = _x();
      function bn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(bn, "ListCache");
      bn.prototype.clear = C3;
      bn.prototype.delete = B3;
      bn.prototype.get = b3;
      bn.prototype.has = O3;
      bn.prototype.set = N3;
      Ix.exports = bn;
    });
    var Px = l((KJ, Rx) => {
      var _3 = Ri();
      function I3() {
        this.__data__ = new _3(), this.size = 0;
      }
      i(I3, "stackClear");
      Rx.exports = I3;
    });
    var wx = l((HJ, qx) => {
      function R3(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      i(R3, "stackDelete");
      qx.exports = R3;
    });
    var kx = l(($J, Lx) => {
      function P3(e) {
        return this.__data__.get(e);
      }
      i(P3, "stackGet");
      Lx.exports = P3;
    });
    var Gx = l((zJ, Mx) => {
      function q3(e) {
        return this.__data__.has(e);
      }
      i(q3, "stackHas");
      Mx.exports = q3;
    });
    var Ux = l((ZJ, jx) => {
      var w3 = At(), L3 = w3["__core-js_shared__"];
      jx.exports = L3;
    });
    var Kx = l((ez, Vx) => {
      var al = Ux(), Yx = function() {
        var e = /[^.]+$/.exec(al && al.keys && al.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function k3(e) {
        return !!Yx && Yx in e;
      }
      i(k3, "isMasked");
      Vx.exports = k3;
    });
    var ul = l((rz, Wx) => {
      var M3 = Function.prototype, G3 = M3.toString;
      function j3(e) {
        if (e != null) {
          try {
            return G3.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      i(j3, "toSource");
      Wx.exports = j3;
    });
    var Xx = l((iz, Hx) => {
      var U3 = nl(), Y3 = Kx(), V3 = Oa(), K3 = ul(), W3 = /[\\^$.*+?()[\]{}|]/g, H3 = /^\[object .+?Constructor\]$/, X3 = Function.prototype, $3 = Object.prototype, J3 = X3.toString, z3 = $3.hasOwnProperty, Q3 = RegExp("^" + J3.call(z3).replace(W3, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function Z3(e) {
        if (!V3(e) || Y3(e))
          return false;
        var t = U3(e) ? Q3 : H3;
        return t.test(K3(e));
      }
      i(Z3, "baseIsNative");
      Hx.exports = Z3;
    });
    var Jx = l((az, $x) => {
      function e5(e, t) {
        return e?.[t];
      }
      i(e5, "getValue");
      $x.exports = e5;
    });
    var Lr = l((oz, zx) => {
      var t5 = Xx(), r5 = Jx();
      function n5(e, t) {
        var r = r5(e, t);
        return t5(r) ? r : void 0;
      }
      i(n5, "getNative");
      zx.exports = n5;
    });
    var _a = l((cz, Qx) => {
      var i5 = Lr(), s5 = At(), a5 = i5(s5, "Map");
      Qx.exports = a5;
    });
    var Pi = l((pz, Zx) => {
      var u5 = Lr(), o5 = u5(Object, "create");
      Zx.exports = o5;
    });
    var rT = l((fz, tT) => {
      var eT = Pi();
      function l5() {
        this.__data__ = eT ? eT(null) : {}, this.size = 0;
      }
      i(l5, "hashClear");
      tT.exports = l5;
    });
    var iT = l((Ez, nT) => {
      function c5(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      i(c5, "hashDelete");
      nT.exports = c5;
    });
    var aT = l((hz, sT) => {
      var p5 = Pi(), f5 = "__lodash_hash_undefined__", d5 = Object.prototype, E5 = d5.hasOwnProperty;
      function m5(e) {
        var t = this.__data__;
        if (p5) {
          var r = t[e];
          return r === f5 ? void 0 : r;
        }
        return E5.call(t, e) ? t[e] : void 0;
      }
      i(m5, "hashGet");
      sT.exports = m5;
    });
    var oT = l((yz, uT) => {
      var h5 = Pi(), D5 = Object.prototype, y5 = D5.hasOwnProperty;
      function A5(e) {
        var t = this.__data__;
        return h5 ? t[e] !== void 0 : y5.call(t, e);
      }
      i(A5, "hashHas");
      uT.exports = A5;
    });
    var cT = l((xz, lT) => {
      var x5 = Pi(), T5 = "__lodash_hash_undefined__";
      function g5(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = x5 && t === void 0 ? T5 : t, this;
      }
      i(g5, "hashSet");
      lT.exports = g5;
    });
    var fT = l((gz, pT) => {
      var v5 = rT(), S5 = iT(), F5 = aT(), C5 = oT(), B5 = cT();
      function On(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(On, "Hash");
      On.prototype.clear = v5;
      On.prototype.delete = S5;
      On.prototype.get = F5;
      On.prototype.has = C5;
      On.prototype.set = B5;
      pT.exports = On;
    });
    var mT = l((Sz, ET) => {
      var dT = fT(), b5 = Ri(), O5 = _a();
      function N5() {
        this.size = 0, this.__data__ = { hash: new dT(), map: new (O5 || b5)(), string: new dT() };
      }
      i(N5, "mapCacheClear");
      ET.exports = N5;
    });
    var DT = l((Cz, hT) => {
      function _5(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      i(_5, "isKeyable");
      hT.exports = _5;
    });
    var qi = l((bz, yT) => {
      var I5 = DT();
      function R5(e, t) {
        var r = e.__data__;
        return I5(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      i(R5, "getMapData");
      yT.exports = R5;
    });
    var xT = l((Nz, AT) => {
      var P5 = qi();
      function q5(e) {
        var t = P5(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      i(q5, "mapCacheDelete");
      AT.exports = q5;
    });
    var gT = l((Iz, TT) => {
      var w5 = qi();
      function L5(e) {
        return w5(this, e).get(e);
      }
      i(L5, "mapCacheGet");
      TT.exports = L5;
    });
    var ST = l((Pz, vT) => {
      var k5 = qi();
      function M5(e) {
        return k5(this, e).has(e);
      }
      i(M5, "mapCacheHas");
      vT.exports = M5;
    });
    var CT = l((wz, FT) => {
      var G5 = qi();
      function j5(e, t) {
        var r = G5(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      i(j5, "mapCacheSet");
      FT.exports = j5;
    });
    var Ia = l((kz, BT) => {
      var U5 = mT(), Y5 = xT(), V5 = gT(), K5 = ST(), W5 = CT();
      function Nn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(Nn, "MapCache");
      Nn.prototype.clear = U5;
      Nn.prototype.delete = Y5;
      Nn.prototype.get = V5;
      Nn.prototype.has = K5;
      Nn.prototype.set = W5;
      BT.exports = Nn;
    });
    var OT = l((Gz, bT) => {
      var H5 = Ri(), X5 = _a(), $5 = Ia(), J5 = 200;
      function z5(e, t) {
        var r = this.__data__;
        if (r instanceof H5) {
          var n = r.__data__;
          if (!X5 || n.length < J5 - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new $5(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      i(z5, "stackSet");
      bT.exports = z5;
    });
    var ol = l((Uz, NT) => {
      var Q5 = Ri(), Z5 = Px(), ek = wx(), tk = kx(), rk = Gx(), nk = OT();
      function _n(e) {
        var t = this.__data__ = new Q5(e);
        this.size = t.size;
      }
      i(_n, "Stack");
      _n.prototype.clear = Z5;
      _n.prototype.delete = ek;
      _n.prototype.get = tk;
      _n.prototype.has = rk;
      _n.prototype.set = nk;
      NT.exports = _n;
    });
    var IT = l((Vz, _T) => {
      var ik = "__lodash_hash_undefined__";
      function sk(e) {
        return this.__data__.set(e, ik), this;
      }
      i(sk, "setCacheAdd");
      _T.exports = sk;
    });
    var PT = l((Wz, RT) => {
      function ak(e) {
        return this.__data__.has(e);
      }
      i(ak, "setCacheHas");
      RT.exports = ak;
    });
    var wT = l((Xz, qT) => {
      var uk = Ia(), ok = IT(), lk = PT();
      function Ra(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new uk(); ++t < r; )
          this.add(e[t]);
      }
      i(Ra, "SetCache");
      Ra.prototype.add = Ra.prototype.push = ok;
      Ra.prototype.has = lk;
      qT.exports = Ra;
    });
    var kT = l((Jz, LT) => {
      function ck(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e))
            return true;
        return false;
      }
      i(ck, "arraySome");
      LT.exports = ck;
    });
    var GT = l((Qz, MT) => {
      function pk(e, t) {
        return e.has(t);
      }
      i(pk, "cacheHas");
      MT.exports = pk;
    });
    var ll = l((eQ, jT) => {
      var fk = wT(), dk = kT(), Ek = GT(), mk = 1, hk = 2;
      function Dk(e, t, r, n, s, a) {
        var u = r & mk, c = e.length, p = t.length;
        if (c != p && !(u && p > c))
          return false;
        var f = a.get(e), h = a.get(t);
        if (f && h)
          return f == t && h == e;
        var D = -1, d = true, x = r & hk ? new fk() : void 0;
        for (a.set(e, t), a.set(t, e); ++D < c; ) {
          var C = e[D], O = t[D];
          if (n)
            var g = u ? n(O, C, D, t, e, a) : n(C, O, D, e, t, a);
          if (g !== void 0) {
            if (g)
              continue;
            d = false;
            break;
          }
          if (x) {
            if (!dk(t, function(j, $) {
              if (!Ek(x, $) && (C === j || s(C, j, r, n, a)))
                return x.push($);
            })) {
              d = false;
              break;
            }
          } else if (!(C === O || s(C, O, r, n, a))) {
            d = false;
            break;
          }
        }
        return a.delete(e), a.delete(t), d;
      }
      i(Dk, "equalArrays");
      jT.exports = Dk;
    });
    var YT = l((rQ, UT) => {
      var yk = At(), Ak = yk.Uint8Array;
      UT.exports = Ak;
    });
    var KT = l((nQ, VT) => {
      function xk(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n, s) {
          r[++t] = [s, n];
        }), r;
      }
      i(xk, "mapToArray");
      VT.exports = xk;
    });
    var HT = l((sQ, WT) => {
      function Tk(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n) {
          r[++t] = n;
        }), r;
      }
      i(Tk, "setToArray");
      WT.exports = Tk;
    });
    var QT = l((uQ, zT) => {
      var XT = Si(), $T = YT(), gk = sl(), vk = ll(), Sk = KT(), Fk = HT(), Ck = 1, Bk = 2, bk = "[object Boolean]", Ok = "[object Date]", Nk = "[object Error]", _k = "[object Map]", Ik = "[object Number]", Rk = "[object RegExp]", Pk = "[object Set]", qk = "[object String]", wk = "[object Symbol]", Lk = "[object ArrayBuffer]", kk = "[object DataView]", JT = XT ? XT.prototype : void 0, cl = JT ? JT.valueOf : void 0;
      function Mk(e, t, r, n, s, a, u) {
        switch (r) {
          case kk:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return false;
            e = e.buffer, t = t.buffer;
          case Lk:
            return !(e.byteLength != t.byteLength || !a(new $T(e), new $T(t)));
          case bk:
          case Ok:
          case Ik:
            return gk(+e, +t);
          case Nk:
            return e.name == t.name && e.message == t.message;
          case Rk:
          case qk:
            return e == t + "";
          case _k:
            var c = Sk;
          case Pk:
            var p = n & Ck;
            if (c || (c = Fk), e.size != t.size && !p)
              return false;
            var f = u.get(e);
            if (f)
              return f == t;
            n |= Bk, u.set(e, t);
            var h = vk(c(e), c(t), n, s, a, u);
            return u.delete(e), h;
          case wk:
            if (cl)
              return cl.call(e) == cl.call(t);
        }
        return false;
      }
      i(Mk, "equalByTag");
      zT.exports = Mk;
    });
    var e1 = l((lQ, ZT) => {
      function Gk(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n; )
          e[s + r] = t[r];
        return e;
      }
      i(Gk, "arrayPush");
      ZT.exports = Gk;
    });
    var r1 = l((pQ, t1) => {
      var jk = e1(), Uk = xt();
      function Yk(e, t, r) {
        var n = t(e);
        return Uk(e) ? n : jk(n, r(e));
      }
      i(Yk, "baseGetAllKeys");
      t1.exports = Yk;
    });
    var i1 = l((dQ, n1) => {
      function Vk() {
        return [];
      }
      i(Vk, "stubArray");
      n1.exports = Vk;
    });
    var u1 = l((mQ, a1) => {
      var Kk = zo(), Wk = i1(), Hk = Object.prototype, Xk = Hk.propertyIsEnumerable, s1 = Object.getOwnPropertySymbols, $k = s1 ? function(e) {
        return e == null ? [] : (e = Object(e), Kk(s1(e), function(t) {
          return Xk.call(e, t);
        }));
      } : Wk;
      a1.exports = $k;
    });
    var l1 = l((hQ, o1) => {
      var Jk = r1(), zk = u1(), Qk = Na();
      function Zk(e) {
        return Jk(e, Qk, zk);
      }
      i(Zk, "getAllKeys");
      o1.exports = Zk;
    });
    var f1 = l((yQ, p1) => {
      var c1 = l1(), e9 = 1, t9 = Object.prototype, r9 = t9.hasOwnProperty;
      function n9(e, t, r, n, s, a) {
        var u = r & e9, c = c1(e), p = c.length, f = c1(t), h = f.length;
        if (p != h && !u)
          return false;
        for (var D = p; D--; ) {
          var d = c[D];
          if (!(u ? d in t : r9.call(t, d)))
            return false;
        }
        var x = a.get(e), C = a.get(t);
        if (x && C)
          return x == t && C == e;
        var O = true;
        a.set(e, t), a.set(t, e);
        for (var g = u; ++D < p; ) {
          d = c[D];
          var j = e[d], $ = t[d];
          if (n)
            var re = u ? n($, j, d, t, e, a) : n(j, $, d, e, t, a);
          if (!(re === void 0 ? j === $ || s(j, $, r, n, a) : re)) {
            O = false;
            break;
          }
          g || (g = d == "constructor");
        }
        if (O && !g) {
          var Me = e.constructor, Xe = t.constructor;
          Me != Xe && "constructor" in e && "constructor" in t && !(typeof Me == "function" && Me instanceof Me && typeof Xe == "function" && Xe instanceof Xe) && (O = false);
        }
        return a.delete(e), a.delete(t), O;
      }
      i(n9, "equalObjects");
      p1.exports = n9;
    });
    var E1 = l((xQ, d1) => {
      var i9 = Lr(), s9 = At(), a9 = i9(s9, "DataView");
      d1.exports = a9;
    });
    var h1 = l((TQ, m1) => {
      var u9 = Lr(), o9 = At(), l9 = u9(o9, "Promise");
      m1.exports = l9;
    });
    var y1 = l((gQ, D1) => {
      var c9 = Lr(), p9 = At(), f9 = c9(p9, "Set");
      D1.exports = f9;
    });
    var x1 = l((vQ, A1) => {
      var d9 = Lr(), E9 = At(), m9 = d9(E9, "WeakMap");
      A1.exports = m9;
    });
    var b1 = l((SQ, B1) => {
      var pl = E1(), fl = _a(), dl = h1(), El = y1(), ml = x1(), C1 = An(), In = ul(), T1 = "[object Map]", h9 = "[object Object]", g1 = "[object Promise]", v1 = "[object Set]", S1 = "[object WeakMap]", F1 = "[object DataView]", D9 = In(pl), y9 = In(fl), A9 = In(dl), x9 = In(El), T9 = In(ml), kr = C1;
      (pl && kr(new pl(new ArrayBuffer(1))) != F1 || fl && kr(new fl()) != T1 || dl && kr(dl.resolve()) != g1 || El && kr(new El()) != v1 || ml && kr(new ml()) != S1) && (kr = i(function(e) {
        var t = C1(e), r = t == h9 ? e.constructor : void 0, n = r ? In(r) : "";
        if (n)
          switch (n) {
            case D9:
              return F1;
            case y9:
              return T1;
            case A9:
              return g1;
            case x9:
              return v1;
            case T9:
              return S1;
          }
        return t;
      }, "getTag"));
      B1.exports = kr;
    });
    var w1 = l((CQ, q1) => {
      var hl = ol(), g9 = ll(), v9 = QT(), S9 = f1(), O1 = b1(), N1 = xt(), _1 = Zo(), F9 = rl(), C9 = 1, I1 = "[object Arguments]", R1 = "[object Array]", Pa = "[object Object]", B9 = Object.prototype, P1 = B9.hasOwnProperty;
      function b9(e, t, r, n, s, a) {
        var u = N1(e), c = N1(t), p = u ? R1 : O1(e), f = c ? R1 : O1(t);
        p = p == I1 ? Pa : p, f = f == I1 ? Pa : f;
        var h = p == Pa, D = f == Pa, d = p == f;
        if (d && _1(e)) {
          if (!_1(t))
            return false;
          u = true, h = false;
        }
        if (d && !h)
          return a || (a = new hl()), u || F9(e) ? g9(e, t, r, n, s, a) : v9(e, t, p, r, n, s, a);
        if (!(r & C9)) {
          var x = h && P1.call(e, "__wrapped__"), C = D && P1.call(t, "__wrapped__");
          if (x || C) {
            var O = x ? e.value() : e, g = C ? t.value() : t;
            return a || (a = new hl()), s(O, g, r, n, a);
          }
        }
        return d ? (a || (a = new hl()), S9(e, t, r, n, s, a)) : false;
      }
      i(b9, "baseIsEqualDeep");
      q1.exports = b9;
    });
    var Dl = l((bQ, M1) => {
      var O9 = w1(), L1 = xn();
      function k1(e, t, r, n, s) {
        return e === t ? true : e == null || t == null || !L1(e) && !L1(t) ? e !== e && t !== t : O9(e, t, r, n, k1, s);
      }
      i(k1, "baseIsEqual");
      M1.exports = k1;
    });
    var j1 = l((NQ, G1) => {
      var N9 = ol(), _9 = Dl(), I9 = 1, R9 = 2;
      function P9(e, t, r, n) {
        var s = r.length, a = s, u = !n;
        if (e == null)
          return !a;
        for (e = Object(e); s--; ) {
          var c = r[s];
          if (u && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
            return false;
        }
        for (; ++s < a; ) {
          c = r[s];
          var p = c[0], f = e[p], h = c[1];
          if (u && c[2]) {
            if (f === void 0 && !(p in e))
              return false;
          } else {
            var D = new N9();
            if (n)
              var d = n(f, h, p, e, t, D);
            if (!(d === void 0 ? _9(h, f, I9 | R9, n, D) : d))
              return false;
          }
        }
        return true;
      }
      i(P9, "baseIsMatch");
      G1.exports = P9;
    });
    var yl = l((IQ, U1) => {
      var q9 = Oa();
      function w9(e) {
        return e === e && !q9(e);
      }
      i(w9, "isStrictComparable");
      U1.exports = w9;
    });
    var V1 = l((PQ, Y1) => {
      var L9 = yl(), k9 = Na();
      function M9(e) {
        for (var t = k9(e), r = t.length; r--; ) {
          var n = t[r], s = e[n];
          t[r] = [n, s, L9(s)];
        }
        return t;
      }
      i(M9, "getMatchData");
      Y1.exports = M9;
    });
    var Al = l((wQ, K1) => {
      function G9(e, t) {
        return function(r) {
          return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      i(G9, "matchesStrictComparable");
      K1.exports = G9;
    });
    var H1 = l((kQ, W1) => {
      var j9 = j1(), U9 = V1(), Y9 = Al();
      function V9(e) {
        var t = U9(e);
        return t.length == 1 && t[0][2] ? Y9(t[0][0], t[0][1]) : function(r) {
          return r === e || j9(r, e, t);
        };
      }
      i(V9, "baseMatches");
      W1.exports = V9;
    });
    var qa = l((GQ, X1) => {
      var K9 = xt(), W9 = Sa(), H9 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, X9 = /^\w*$/;
      function $9(e, t) {
        if (K9(e))
          return false;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || W9(e) ? true : X9.test(e) || !H9.test(e) || t != null && e in Object(t);
      }
      i($9, "isKey");
      X1.exports = $9;
    });
    var z1 = l((UQ, J1) => {
      var $1 = Ia(), J9 = "Expected a function";
      function xl(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new TypeError(J9);
        var r = i(function() {
          var n = arguments, s = t ? t.apply(this, n) : n[0], a = r.cache;
          if (a.has(s))
            return a.get(s);
          var u = e.apply(this, n);
          return r.cache = a.set(s, u) || a, u;
        }, "memoized");
        return r.cache = new (xl.Cache || $1)(), r;
      }
      i(xl, "memoize");
      xl.Cache = $1;
      J1.exports = xl;
    });
    var Z1 = l((VQ, Q1) => {
      var z9 = z1(), Q9 = 500;
      function Z9(e) {
        var t = z9(e, function(n) {
          return r.size === Q9 && r.clear(), n;
        }), r = t.cache;
        return t;
      }
      i(Z9, "memoizeCapped");
      Q1.exports = Z9;
    });
    var tg = l((WQ, eg) => {
      var e4 = Z1(), t4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r4 = /\\(\\)?/g, n4 = e4(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(t4, function(r, n, s, a) {
          t.push(s ? a.replace(r4, "$1") : n || r);
        }), t;
      });
      eg.exports = n4;
    });
    var Tl = l((HQ, rg) => {
      var i4 = xt(), s4 = qa(), a4 = tg(), u4 = Ca();
      function o4(e, t) {
        return i4(e) ? e : s4(e, t) ? [e] : a4(u4(e));
      }
      i(o4, "castPath");
      rg.exports = o4;
    });
    var wi = l(($Q, ng) => {
      var l4 = Sa(), c4 = 1 / 0;
      function p4(e) {
        if (typeof e == "string" || l4(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -c4 ? "-0" : t;
      }
      i(p4, "toKey");
      ng.exports = p4;
    });
    var gl = l((zQ, ig) => {
      var f4 = Tl(), d4 = wi();
      function E4(e, t) {
        t = f4(t, e);
        for (var r = 0, n = t.length; e != null && r < n; )
          e = e[d4(t[r++])];
        return r && r == n ? e : void 0;
      }
      i(E4, "baseGet");
      ig.exports = E4;
    });
    var ag = l((ZQ, sg) => {
      var m4 = gl();
      function h4(e, t, r) {
        var n = e == null ? void 0 : m4(e, t);
        return n === void 0 ? r : n;
      }
      i(h4, "get");
      sg.exports = h4;
    });
    var og = l((tZ, ug) => {
      function D4(e, t) {
        return e != null && t in Object(e);
      }
      i(D4, "baseHasIn");
      ug.exports = D4;
    });
    var cg = l((nZ, lg) => {
      var y4 = Tl(), A4 = Qo(), x4 = xt(), T4 = el(), g4 = ba(), v4 = wi();
      function S4(e, t, r) {
        t = y4(t, e);
        for (var n = -1, s = t.length, a = false; ++n < s; ) {
          var u = v4(t[n]);
          if (!(a = e != null && r(e, u)))
            break;
          e = e[u];
        }
        return a || ++n != s ? a : (s = e == null ? 0 : e.length, !!s && g4(s) && T4(u, s) && (x4(e) || A4(e)));
      }
      i(S4, "hasPath");
      lg.exports = S4;
    });
    var fg = l((sZ, pg) => {
      var F4 = og(), C4 = cg();
      function B4(e, t) {
        return e != null && C4(e, t, F4);
      }
      i(B4, "hasIn");
      pg.exports = B4;
    });
    var Eg = l((uZ, dg) => {
      var b4 = Dl(), O4 = ag(), N4 = fg(), _4 = qa(), I4 = yl(), R4 = Al(), P4 = wi(), q4 = 1, w4 = 2;
      function L4(e, t) {
        return _4(e) && I4(t) ? R4(P4(e), t) : function(r) {
          var n = O4(r, e);
          return n === void 0 && n === t ? N4(r, e) : b4(t, n, q4 | w4);
        };
      }
      i(L4, "baseMatchesProperty");
      dg.exports = L4;
    });
    var hg = l((lZ, mg) => {
      function k4(e) {
        return e;
      }
      i(k4, "identity");
      mg.exports = k4;
    });
    var yg = l((pZ, Dg) => {
      function M4(e) {
        return function(t) {
          return t?.[e];
        };
      }
      i(M4, "baseProperty");
      Dg.exports = M4;
    });
    var xg = l((dZ, Ag) => {
      var G4 = gl();
      function j4(e) {
        return function(t) {
          return G4(t, e);
        };
      }
      i(j4, "basePropertyDeep");
      Ag.exports = j4;
    });
    var gg = l((mZ, Tg) => {
      var U4 = yg(), Y4 = xg(), V4 = qa(), K4 = wi();
      function W4(e) {
        return V4(e) ? U4(K4(e)) : Y4(e);
      }
      i(W4, "property");
      Tg.exports = W4;
    });
    var Sg = l((DZ, vg) => {
      var H4 = H1(), X4 = Eg(), $4 = hg(), J4 = xt(), z4 = gg();
      function Q4(e) {
        return typeof e == "function" ? e : e == null ? $4 : typeof e == "object" ? J4(e) ? X4(e[0], e[1]) : H4(e) : z4(e);
      }
      i(Q4, "baseIteratee");
      vg.exports = Q4;
    });
    var Cg = l((AZ, Fg) => {
      var Z4 = zo(), e7 = Ax(), t7 = Sg(), r7 = xt();
      function n7(e, t) {
        var r = r7(e) ? Z4 : e7;
        return r(e, t7(t, 3));
      }
      i(n7, "filter");
      Fg.exports = n7;
    });
    var bl = l((Gee, Xg) => {
      "use strict";
      var s7 = require("os");
      Xg.exports = s7.homedir || i(function() {
        var t = process.env.HOME, r = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
        return process.platform === "win32" ? process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || t || null : process.platform === "darwin" ? t || (r ? "/Users/" + r : null) : process.platform === "linux" ? t || (process.getuid() === 0 ? "/root" : r ? "/home/" + r : null) : t || null;
      }, "homedir");
    });
    var Ol = l((Uee, $g) => {
      $g.exports = function() {
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = function(r, n) {
          return n;
        };
        var t = new Error().stack;
        return Error.prepareStackTrace = e, t[2].getFileName();
      };
    });
    var Jg = l((Yee, Li) => {
      "use strict";
      var a7 = process.platform === "win32", u7 = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/, Nl = {};
      function o7(e) {
        return u7.exec(e).slice(1);
      }
      i(o7, "win32SplitPath");
      Nl.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = o7(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0] === t[1] ? t[0] : t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      var l7 = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/, _l = {};
      function c7(e) {
        return l7.exec(e).slice(1);
      }
      i(c7, "posixSplitPath");
      _l.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = c7(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      a7 ? Li.exports = Nl.parse : Li.exports = _l.parse;
      Li.exports.posix = _l.parse;
      Li.exports.win32 = Nl.parse;
    });
    var Il = l((Kee, ev) => {
      var Zg = require("path"), zg = Zg.parse || Jg(), Qg = i(function(t, r) {
        var n = "/";
        /^([A-Za-z]:)/.test(t) ? n = "" : /^\\\\/.test(t) && (n = "\\\\");
        for (var s = [t], a = zg(t); a.dir !== s[s.length - 1]; )
          s.push(a.dir), a = zg(a.dir);
        return s.reduce(function(u, c) {
          return u.concat(r.map(function(p) {
            return Zg.resolve(n, c, p);
          }));
        }, []);
      }, "getNodeModulesDirs");
      ev.exports = i(function(t, r, n) {
        var s = r && r.moduleDirectory ? [].concat(r.moduleDirectory) : ["node_modules"];
        if (r && typeof r.paths == "function")
          return r.paths(n, t, function() {
            return Qg(t, s);
          }, r);
        var a = Qg(t, s);
        return r && r.paths ? a.concat(r.paths) : a;
      }, "nodeModulesPaths");
    });
    var Rl = l((Hee, tv) => {
      tv.exports = function(e, t) {
        return t || {};
      };
    });
    var nv = l((Xee, rv) => {
      "use strict";
      var p7 = "Function.prototype.bind called on incompatible ", Pl = Array.prototype.slice, f7 = Object.prototype.toString, d7 = "[object Function]";
      rv.exports = i(function(t) {
        var r = this;
        if (typeof r != "function" || f7.call(r) !== d7)
          throw new TypeError(p7 + r);
        for (var n = Pl.call(arguments, 1), s, a = i(function() {
          if (this instanceof s) {
            var h = r.apply(this, n.concat(Pl.call(arguments)));
            return Object(h) === h ? h : this;
          } else
            return r.apply(t, n.concat(Pl.call(arguments)));
        }, "binder"), u = Math.max(0, r.length - n.length), c = [], p = 0; p < u; p++)
          c.push("$" + p);
        if (s = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(a), r.prototype) {
          var f = i(function() {
          }, "Empty");
          f.prototype = r.prototype, s.prototype = new f(), f.prototype = null;
        }
        return s;
      }, "bind");
    });
    var sv = l((Jee, iv) => {
      "use strict";
      var E7 = nv();
      iv.exports = Function.prototype.bind || E7;
    });
    var uv = l((zee, av) => {
      "use strict";
      var m7 = sv();
      av.exports = m7.call(Function.call, Object.prototype.hasOwnProperty);
    });
    var ov = l((Qee, h7) => {
      h7.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], "inspector/promises": [">= 19"], "node:inspector/promises": [">= 19"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "test/reporters": ">= 19.9 && < 20.2", "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"], "node:test": [">= 16.17 && < 17", ">= 18"], timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"], "node:wasi": [">= 18.17 && < 19", ">= 20"], worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var ki = l((Zee, pv) => {
      "use strict";
      var D7 = uv();
      function y7(e, t) {
        for (var r = e.split("."), n = t.split(" "), s = n.length > 1 ? n[0] : "=", a = (n.length > 1 ? n[1] : n[0]).split("."), u = 0; u < 3; ++u) {
          var c = parseInt(r[u] || 0, 10), p = parseInt(a[u] || 0, 10);
          if (c !== p)
            return s === "<" ? c < p : s === ">=" ? c >= p : false;
        }
        return s === ">=";
      }
      i(y7, "specifierIncluded");
      function lv(e, t) {
        var r = t.split(/ ?&& ?/);
        if (r.length === 0)
          return false;
        for (var n = 0; n < r.length; ++n)
          if (!y7(e, r[n]))
            return false;
        return true;
      }
      i(lv, "matchesRange");
      function A7(e, t) {
        if (typeof t == "boolean")
          return t;
        var r = typeof e > "u" ? process.versions && process.versions.node : e;
        if (typeof r != "string")
          throw new TypeError(typeof e > "u" ? "Unable to determine current node version" : "If provided, a valid node version is required");
        if (t && typeof t == "object") {
          for (var n = 0; n < t.length; ++n)
            if (lv(r, t[n]))
              return true;
          return false;
        }
        return lv(r, t);
      }
      i(A7, "versionIncluded");
      var cv = ov();
      pv.exports = i(function(t, r) {
        return D7(cv, t) && A7(r, cv[t]);
      }, "isCore");
    });
    var Ev = l((tte, dv) => {
      var Mr = require("fs"), x7 = bl(), Fe = require("path"), T7 = Ol(), g7 = Il(), v7 = Rl(), S7 = ki(), F7 = process.platform !== "win32" && Mr.realpath && typeof Mr.realpath.native == "function" ? Mr.realpath.native : Mr.realpath, fv = x7(), C7 = i(function() {
        return [Fe.join(fv, ".node_modules"), Fe.join(fv, ".node_libraries")];
      }, "defaultPaths"), B7 = i(function(t, r) {
        Mr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isFile() || s.isFIFO());
        });
      }, "isFile"), b7 = i(function(t, r) {
        Mr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isDirectory());
        });
      }, "isDirectory"), O7 = i(function(t, r) {
        F7(t, function(n, s) {
          n && n.code !== "ENOENT" ? r(n) : r(null, n ? t : s);
        });
      }, "realpath"), Mi = i(function(t, r, n, s) {
        n && n.preserveSymlinks === false ? t(r, s) : s(null, r);
      }, "maybeRealpath"), N7 = i(function(t, r, n) {
        t(r, function(s, a) {
          if (s)
            n(s);
          else
            try {
              var u = JSON.parse(a);
              n(null, u);
            } catch {
              n(null);
            }
        });
      }, "defaultReadPackage"), _7 = i(function(t, r, n) {
        for (var s = g7(r, n, t), a = 0; a < s.length; a++)
          s[a] = Fe.join(s[a], t);
        return s;
      }, "getPackageCandidates");
      dv.exports = i(function(t, r, n) {
        var s = n, a = r;
        if (typeof r == "function" && (s = a, a = {}), typeof t != "string") {
          var u = new TypeError("Path must be a string.");
          return process.nextTick(function() {
            s(u);
          });
        }
        a = v7(t, a);
        var c = a.isFile || B7, p = a.isDirectory || b7, f = a.readFile || Mr.readFile, h = a.realpath || O7, D = a.readPackage || N7;
        if (a.readFile && a.readPackage) {
          var d = new TypeError("`readFile` and `readPackage` are mutually exclusive.");
          return process.nextTick(function() {
            s(d);
          });
        }
        var x = a.packageIterator, C = a.extensions || [".js"], O = a.includeCoreModules !== false, g = a.basedir || Fe.dirname(T7()), j = a.filename || g;
        a.paths = a.paths || C7();
        var $ = Fe.resolve(g);
        Mi(h, $, a, function(L, K) {
          L ? s(L) : Me(K);
        });
        var re;
        function Me(L) {
          if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t))
            re = Fe.resolve(L, t), (t === "." || t === ".." || t.slice(-1) === "/") && (re += "/"), /\/$/.test(t) && re === L ? ge(re, a.package, Xe) : Ct(re, a.package, Xe);
          else {
            if (O && S7(t))
              return s(null, t);
            ct(t, L, function(K, xe, X) {
              if (K)
                s(K);
              else {
                if (xe)
                  return Mi(h, xe, a, function($e, Te) {
                    $e ? s($e) : s(null, Te, X);
                  });
                var De = new Error("Cannot find module '" + t + "' from '" + j + "'");
                De.code = "MODULE_NOT_FOUND", s(De);
              }
            });
          }
        }
        i(Me, "init");
        function Xe(L, K, xe) {
          L ? s(L) : K ? s(null, K, xe) : ge(re, function(X, De, $e) {
            if (X)
              s(X);
            else if (De)
              Mi(h, De, a, function(ye, Ge) {
                ye ? s(ye) : s(null, Ge, $e);
              });
            else {
              var Te = new Error("Cannot find module '" + t + "' from '" + j + "'");
              Te.code = "MODULE_NOT_FOUND", s(Te);
            }
          });
        }
        i(Xe, "onfile");
        function Ct(L, K, xe) {
          var X = K, De = xe;
          typeof X == "function" && (De = X, X = void 0);
          var $e = [""].concat(C);
          Te($e, L, X);
          function Te(ye, Ge, Bt) {
            if (ye.length === 0)
              return De(null, void 0, Bt);
            var mr = Ge + ye[0], pt = Bt;
            pt ? Ie(null, pt) : ne(Fe.dirname(mr), Ie);
            function Ie(Gt, Wr, bt) {
              if (pt = Wr, Gt)
                return De(Gt);
              if (bt && pt && a.pathFilter) {
                var es = Fe.relative(bt, mr), ts = es.slice(0, es.length - ye[0].length), Gn = a.pathFilter(pt, Ge, ts);
                if (Gn)
                  return Te([""].concat(C.slice()), Fe.resolve(bt, Gn), pt);
              }
              c(mr, Zi);
            }
            i(Ie, "onpkg");
            function Zi(Gt, Wr) {
              if (Gt)
                return De(Gt);
              if (Wr)
                return De(null, mr, pt);
              Te(ye.slice(1), Ge, pt);
            }
            i(Zi, "onex");
          }
          i(Te, "load");
        }
        i(Ct, "loadAsFile");
        function ne(L, K) {
          if (L === "" || L === "/" || process.platform === "win32" && /^\w:[/\\]*$/.test(L) || /[/\\]node_modules[/\\]*$/.test(L))
            return K(null);
          Mi(h, L, a, function(xe, X) {
            if (xe)
              return ne(Fe.dirname(L), K);
            var De = Fe.join(X, "package.json");
            c(De, function($e, Te) {
              if (!Te)
                return ne(Fe.dirname(L), K);
              D(f, De, function(ye, Ge) {
                ye && K(ye);
                var Bt = Ge;
                Bt && a.packageFilter && (Bt = a.packageFilter(Bt, De)), K(null, Bt, L);
              });
            });
          });
        }
        i(ne, "loadpkg");
        function ge(L, K, xe) {
          var X = xe, De = K;
          typeof De == "function" && (X = De, De = a.package), Mi(h, L, a, function($e, Te) {
            if ($e)
              return X($e);
            var ye = Fe.join(Te, "package.json");
            c(ye, function(Ge, Bt) {
              if (Ge)
                return X(Ge);
              if (!Bt)
                return Ct(Fe.join(L, "index"), De, X);
              D(f, ye, function(mr, pt) {
                if (mr)
                  return X(mr);
                var Ie = pt;
                if (Ie && a.packageFilter && (Ie = a.packageFilter(Ie, ye)), Ie && Ie.main) {
                  if (typeof Ie.main != "string") {
                    var Zi = new TypeError("package \u201C" + Ie.name + "\u201D `main` must be a string");
                    return Zi.code = "INVALID_PACKAGE_MAIN", X(Zi);
                  }
                  (Ie.main === "." || Ie.main === "./") && (Ie.main = "index"), Ct(Fe.resolve(L, Ie.main), Ie, function(Gt, Wr, bt) {
                    if (Gt)
                      return X(Gt);
                    if (Wr)
                      return X(null, Wr, bt);
                    if (!bt)
                      return Ct(Fe.join(L, "index"), bt, X);
                    var es = Fe.resolve(L, bt.main);
                    ge(es, bt, function(ts, Gn, Xl) {
                      if (ts)
                        return X(ts);
                      if (Gn)
                        return X(null, Gn, Xl);
                      Ct(Fe.join(L, "index"), Xl, X);
                    });
                  });
                  return;
                }
                Ct(Fe.join(L, "/index"), Ie, X);
              });
            });
          });
        }
        i(ge, "loadAsDirectory");
        function le(L, K) {
          if (K.length === 0)
            return L(null, void 0);
          var xe = K[0];
          p(Fe.dirname(xe), X);
          function X(Te, ye) {
            if (Te)
              return L(Te);
            if (!ye)
              return le(L, K.slice(1));
            Ct(xe, a.package, De);
          }
          i(X, "isdir");
          function De(Te, ye, Ge) {
            if (Te)
              return L(Te);
            if (ye)
              return L(null, ye, Ge);
            ge(xe, a.package, $e);
          }
          i(De, "onfile");
          function $e(Te, ye, Ge) {
            if (Te)
              return L(Te);
            if (ye)
              return L(null, ye, Ge);
            le(L, K.slice(1));
          }
          i($e, "ondir");
        }
        i(le, "processDirs");
        function ct(L, K, xe) {
          var X = i(function() {
            return _7(L, K, a);
          }, "thunk");
          le(xe, x ? x(L, K, X, a) : X());
        }
        i(ct, "loadNodeModules");
      }, "resolve");
    });
    var mv = l((nte, I7) => {
      I7.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], "inspector/promises": [">= 19"], "node:inspector/promises": [">= 19"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "test/reporters": ">= 19.9 && < 20.2", "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"], "node:test": [">= 16.17 && < 17", ">= 18"], timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"], "node:wasi": [">= 18.17 && < 19", ">= 20"], worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var Av = l((ite, yv) => {
      "use strict";
      var R7 = ki(), hv = mv(), Dv = {};
      for (Ga in hv)
        Object.prototype.hasOwnProperty.call(hv, Ga) && (Dv[Ga] = R7(Ga));
      var Ga;
      yv.exports = Dv;
    });
    var Tv = l((ste, xv) => {
      var P7 = ki();
      xv.exports = i(function(t) {
        return P7(t);
      }, "isCore");
    });
    var Sv = l((ute, vv) => {
      var q7 = ki(), Gr = require("fs"), we = require("path"), w7 = bl(), L7 = Ol(), k7 = Il(), M7 = Rl(), G7 = process.platform !== "win32" && Gr.realpathSync && typeof Gr.realpathSync.native == "function" ? Gr.realpathSync.native : Gr.realpathSync, gv = w7(), j7 = i(function() {
        return [we.join(gv, ".node_modules"), we.join(gv, ".node_libraries")];
      }, "defaultPaths"), U7 = i(function(t) {
        try {
          var r = Gr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && (r.isFile() || r.isFIFO());
      }, "isFile"), Y7 = i(function(t) {
        try {
          var r = Gr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && r.isDirectory();
      }, "isDirectory"), V7 = i(function(t) {
        try {
          return G7(t);
        } catch (r) {
          if (r.code !== "ENOENT")
            throw r;
        }
        return t;
      }, "realpathSync"), Gi = i(function(t, r, n) {
        return n && n.preserveSymlinks === false ? t(r) : r;
      }, "maybeRealpathSync"), K7 = i(function(t, r) {
        var n = t(r);
        try {
          var s = JSON.parse(n);
          return s;
        } catch {
        }
      }, "defaultReadPackageSync"), W7 = i(function(t, r, n) {
        for (var s = k7(r, n, t), a = 0; a < s.length; a++)
          s[a] = we.join(s[a], t);
        return s;
      }, "getPackageCandidates");
      vv.exports = i(function(t, r) {
        if (typeof t != "string")
          throw new TypeError("Path must be a string.");
        var n = M7(t, r), s = n.isFile || U7, a = n.readFileSync || Gr.readFileSync, u = n.isDirectory || Y7, c = n.realpathSync || V7, p = n.readPackageSync || K7;
        if (n.readFileSync && n.readPackageSync)
          throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
        var f = n.packageIterator, h = n.extensions || [".js"], D = n.includeCoreModules !== false, d = n.basedir || we.dirname(L7()), x = n.filename || d;
        n.paths = n.paths || j7();
        var C = Gi(c, we.resolve(d), n);
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t)) {
          var O = we.resolve(C, t);
          (t === "." || t === ".." || t.slice(-1) === "/") && (O += "/");
          var g = re(O) || Xe(O);
          if (g)
            return Gi(c, g, n);
        } else {
          if (D && q7(t))
            return t;
          var j = Ct(t, C);
          if (j)
            return Gi(c, j, n);
        }
        var $ = new Error("Cannot find module '" + t + "' from '" + x + "'");
        throw $.code = "MODULE_NOT_FOUND", $;
        function re(ne) {
          var ge = Me(we.dirname(ne));
          if (ge && ge.dir && ge.pkg && n.pathFilter) {
            var le = we.relative(ge.dir, ne), ct = n.pathFilter(ge.pkg, ne, le);
            ct && (ne = we.resolve(ge.dir, ct));
          }
          if (s(ne))
            return ne;
          for (var L = 0; L < h.length; L++) {
            var K = ne + h[L];
            if (s(K))
              return K;
          }
        }
        i(re, "loadAsFileSync");
        function Me(ne) {
          if (!(ne === "" || ne === "/") && !(process.platform === "win32" && /^\w:[/\\]*$/.test(ne)) && !/[/\\]node_modules[/\\]*$/.test(ne)) {
            var ge = we.join(Gi(c, ne, n), "package.json");
            if (!s(ge))
              return Me(we.dirname(ne));
            var le = p(a, ge);
            return le && n.packageFilter && (le = n.packageFilter(le, ne)), { pkg: le, dir: ne };
          }
        }
        i(Me, "loadpkg");
        function Xe(ne) {
          var ge = we.join(Gi(c, ne, n), "/package.json");
          if (s(ge)) {
            try {
              var le = p(a, ge);
            } catch {
            }
            if (le && n.packageFilter && (le = n.packageFilter(le, ne)), le && le.main) {
              if (typeof le.main != "string") {
                var ct = new TypeError("package \u201C" + le.name + "\u201D `main` must be a string");
                throw ct.code = "INVALID_PACKAGE_MAIN", ct;
              }
              (le.main === "." || le.main === "./") && (le.main = "index");
              try {
                var L = re(we.resolve(ne, le.main));
                if (L)
                  return L;
                var K = Xe(we.resolve(ne, le.main));
                if (K)
                  return K;
              } catch {
              }
            }
          }
          return re(we.join(ne, "/index"));
        }
        i(Xe, "loadAsDirectorySync");
        function Ct(ne, ge) {
          for (var le = i(function() {
            return W7(ne, ge, n);
          }, "thunk"), ct = f ? f(ne, ge, le, n) : le(), L = 0; L < ct.length; L++) {
            var K = ct[L];
            if (u(we.dirname(K))) {
              var xe = re(K);
              if (xe)
                return xe;
              var X = Xe(K);
              if (X)
                return X;
            }
          }
        }
        i(Ct, "loadNodeModulesSync");
      }, "resolveSync");
    });
    var Cv = l((lte, Fv) => {
      var ja = Ev();
      ja.core = Av();
      ja.isCore = Tv();
      ja.sync = Sv();
      Fv.exports = ja;
    });
    var TG = {};
    $l(TG, { EXPRESSION_NEEDED: () => U, FILTER_BLOCK: () => Ui, GROUP_TOP_LEVEL_LOGICAL: () => Yr, INSIDE_OF_STRING: () => St, IS_ROOT_LOGICAL_EXPRESSION: () => Vr, NEWLINES_ONLY: () => Yi, OVERRIDE_QUOTE_CHAR: () => ji, PRESERVE_LEADING_WHITESPACE: () => jr, PRESERVE_TRAILING_WHITESPACE: () => Ur, STRING_NEEDS_QUOTES: () => R, countNewlines: () => lt, createTextGroups: () => Gl, findParentNode: () => dr, firstValueInAncestorChain: () => Ft, getDeepProperty: () => Hi, hasAtLeastTwoNewlines: () => eM, hasNoNewlines: () => Ha, indentWithHardline: () => kn, isContractableNodeType: () => Ki, isEmptySequence: () => jl, isHtmlCommentEqualTo: () => Xi, isInlineElement: () => Ji, isMelodyNode: () => qn, isMultipartExpression: () => Wi, isNotExpression: () => Ll, isRootNode: () => Ml, isTwigCommentEqualTo: () => $i, isValidIdentifierName: () => kl, isWhitespaceNode: () => wn, isWhitespaceOnly: () => Kr, languages: () => pG, normalizeHtmlComment: () => Ja, normalizeTwigComment: () => za, options: () => xG, parsers: () => mG, printChildBlock: () => _e, printChildGroups: () => Mn, printers: () => AG, quoteChar: () => Pn, registerContractableNodeType: () => Q7, removeSurroundingWhitespace: () => Ln, setDeepProperty: () => wv, shouldExpressionsBeWrapped: () => Ka, someParentNode: () => Va, stripHtmlCommentChars: () => Xa, stripTwigCommentChars: () => $a, testCurrentAndParentNodes: () => Z7, testCurrentNode: () => Iv, walkParents: () => _v, wrapExpressionIfNeeded: () => ke, wrapInEnvironment: () => Rv, wrapInStringInterpolation: () => Wa });
    module.exports = eF(TG);
    var S = W(J());
    var z = Symbol();
    var qq = Symbol();
    function I(e, { pos: { index: t, line: r, column: n } }) {
      return e.loc.start = { line: r, column: n, index: t }, e;
    }
    i(I, "setStartFromToken");
    function b(e, { pos: { line: t, column: r }, end: n }) {
      return e.loc.end = { line: t, column: r, index: n }, e;
    }
    i(b, "setEndFromToken");
    function Po(e, t, { pos: { index: r, line: n, column: s } }) {
      return e[t] = { line: n, column: s, index: r }, e;
    }
    i(Po, "setMarkFromToken");
    function Ye(e, { loc: { start: { line: t, column: r, index: n } } }) {
      return e.loc.start.line = t, e.loc.start.column = r, e.loc.start.index = n, e;
    }
    i(Ye, "copyStart");
    function ve(e, t) {
      return e.loc.end.line = t.loc.end.line, e.loc.end.column = t.loc.end.column, e.loc.end.index = t.loc.end.index, e;
    }
    i(ve, "copyEnd");
    function fn(e, { loc: { start: t, end: r } }) {
      return e.loc.start.line = t.line, e.loc.start.column = t.column, e.loc.start.index = t.index, e.loc.end.line = r.line, e.loc.end.column = r.column, e.loc.end.index = r.index, e;
    }
    i(fn, "copyLoc");
    function N(e, t, ...r) {
      return b(I(new e(...r), t), t);
    }
    i(N, "createNode");
    function ee(e) {
      return e.text.endsWith("-");
    }
    i(ee, "hasTagStartTokenTrimLeft");
    function te(e) {
      return e.text.startsWith("-");
    }
    i(te, "hasTagEndTokenTrimRight");
    var m = {};
    $l(m, { ASSIGNMENT: () => _r, COLON: () => ut, COMMA: () => $t, COMMENT: () => qt, DECLARATION_START: () => hi, DOT: () => hn, ELEMENT_END: () => ot, ELEMENT_START: () => Ir, ENTITY: () => yi, EOF: () => He, EOF_TOKEN: () => Pr, ERROR: () => Dn, ERROR_TABLE: () => Aa, EXPRESSION_END: () => Ve, EXPRESSION_START: () => Ze, FALSE: () => xi, HTML_COMMENT: () => br, INTERPOLATION_END: () => En, INTERPOLATION_START: () => dn, LBRACE: () => Nr, LBRACKET: () => mn, LPAREN: () => Dt, NULL: () => Ti, NUMBER: () => Rr, OPERATOR: () => Or, PIPE: () => Jt, QUESTION_MARK: () => gi, RBRACE: () => at, RBRACKET: () => Xt, RPAREN: () => Ht, SLASH: () => yt, STRING: () => ht, STRING_END: () => mt, STRING_START: () => tt, SYMBOL: () => Ne, TAG_END: () => et, TAG_START: () => st, TEXT: () => Wt, TRUE: () => Ai, WHITESPACE: () => Di });
    var Ze = "expressionStart";
    var Ve = "expressionEnd";
    var st = "tagStart";
    var et = "tagEnd";
    var dn = "interpolationStart";
    var En = "interpolationEnd";
    var tt = "stringStart";
    var mt = "stringEnd";
    var hi = "declarationStart";
    var qt = "comment";
    var Di = "whitespace";
    var br = "htmlComment";
    var Wt = "text";
    var yi = "entity";
    var Ne = "symbol";
    var ht = "string";
    var Or = "operator";
    var Ai = "true";
    var xi = "false";
    var Ti = "null";
    var Nr = "[";
    var at = "]";
    var Dt = "(";
    var Ht = ")";
    var mn = "{";
    var Xt = "}";
    var ut = ":";
    var $t = ",";
    var hn = ".";
    var Jt = "|";
    var gi = "?";
    var _r = "=";
    var Ir = "<";
    var yt = "/";
    var ot = ">";
    var Rr = "number";
    var He = "EOF";
    var Dn = "ERROR";
    var Pr = { type: He, pos: { index: -1, line: -1, pos: -1 }, end: -1, length: 0, source: null, text: "" };
    var Aa = { [Ve]: 'expression end "}}"', [Ze]: 'expression start "{{"', [st]: 'tag start "{%"', [et]: 'tag end "%}"', [dn]: 'interpolation start "#{"', [En]: 'interpolation end "}"' };
    var xa = W(J());
    var vi = { name: "genericTwigTag", parse(e) {
      let t = e.tokens, r = t.la(-2), n, s = new xa.GenericTwigTag(t.la(-1).text);
      for (; (n = t.la(0)) && n.type !== et; )
        try {
          s.parts.push(e.matchExpression());
        } catch (a) {
          if (a.errorType === "UNEXPECTED_TOKEN")
            s.parts.push(new xa.GenericToken(a.tokenType, a.tokenText)), t.next();
          else
            throw a;
        }
      return t.expect(et), s.trimLeft = ee(r), s.trimRight = te(n), s;
    } };
    var wq = i((e, t) => {
      for (let r = 0; r < t.length; r++)
        if (e.test(Ne, t[r]))
          return true;
      return false;
    }, "tagMatchesOneOf");
    var qD = i((e, t = []) => ({ name: "genericTwigMultiTag", parse(r, n) {
      let s = r.tokens, a = s.la(-1);
      t.length === 0 && t.push("end" + e);
      let u = vi.parse(r, n), c = e, p = t[t.length - 1];
      for (; c !== p; ) {
        u.sections.push(r.parse((h, D, d) => D.type === st && wq(d, t))), s.next();
        let f = vi.parse(r);
        u.sections.push(f), c = f.tagName;
      }
      return I(u, a), b(u, s.la(0)), u;
    } }), "createMultiTagParser");
    var wD = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    var Ta = Symbol();
    var qo = Symbol();
    var ga = Symbol();
    var va = Symbol();
    var yn = class {
      static {
        i(this, "Parser");
      }
      constructor(t, r) {
        this.tokens = t, this[Ta] = {}, this[qo] = {}, this[ga] = {}, this[va] = {}, this.options = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreDeclarations: true, decodeEntities: true, preserveSourceLiterally: false, allowUnknownTags: false, multiTags: {} }, r), Object.keys(this.options.multiTags).length > 0 && (this.options.allowUnknownTags = true);
      }
      applyExtension(t) {
        if (t.tags)
          for (let r of t.tags)
            this.addTag(r);
        if (t.unaryOperators)
          for (let r of t.unaryOperators)
            this.addUnaryOperator(r);
        if (t.binaryOperators)
          for (let r of t.binaryOperators)
            this.addBinaryOperator(r);
        if (t.tests)
          for (let r of t.tests)
            this.addTest(r);
      }
      addUnaryOperator(t) {
        return this[Ta][t.text] = t, this;
      }
      addBinaryOperator(t) {
        return this[qo][t.text] = t, this;
      }
      addTag(t) {
        return this[ga][t.name] = t, this;
      }
      addTest(t) {
        this[va][t.text] = t;
      }
      hasTest(t) {
        return !!this[va][t];
      }
      getTest(t) {
        return this[va][t];
      }
      isUnary(t) {
        return t.type === Or && !!this[Ta][t.text];
      }
      getBinaryOperator(t) {
        return t.type === Or && this[qo][t.text];
      }
      parse(t = null) {
        let r = this.tokens, n = I(new S.SequenceExpression(), r.la(0));
        for (; !r.test(He); ) {
          let s = r.next();
          if (n || (n = I(new S.SequenceExpression(), s)), t && t(r.la(0).text, s, r))
            return b(n, s), n;
          switch (s.type) {
            case Ze: {
              let a = this.matchExpression(), u = new S.PrintExpressionStatement(a), c = r.expect(Ve);
              I(u, s), b(u, c), b(n, c), u.trimLeft = !!a.trimLeft, u.trimRight = !!a.trimRight, n.add(u);
              break;
            }
            case st:
              n.add(this.matchTag());
              break;
            case Wt: {
              let a = N(S.StringLiteral, s, s.text), u = N(S.PrintTextStatement, s, a);
              n.add(u);
              break;
            }
            case yi: {
              let a = N(S.StringLiteral, s, s.text), u = N(S.PrintTextStatement, s, a);
              n.add(u);
              break;
            }
            case Ir:
              n.add(this.matchElement());
              break;
            case hi: {
              let a = this.matchDeclaration();
              this.options.ignoreDeclarations || n.add(a);
              break;
            }
            case qt:
              if (!this.options.ignoreComments) {
                let a = N(S.StringLiteral, s, s.text), u = N(S.TwigComment, s, a);
                n.add(u);
              }
              break;
            case br:
              if (!this.options.ignoreHtmlComments) {
                let a = N(S.StringLiteral, s, s.text), u = N(S.HtmlComment, s, a);
                n.add(u);
              }
              break;
          }
        }
        return n;
      }
      matchDeclaration() {
        let t = this.tokens, r = t.la(-1), n = null, s = null;
        (n = t.nextIf(Ne)) || this.error({ title: "Expected declaration start", pos: r.pos, advice: "After '<!', an unquoted symbol like DOCTYPE is expected" });
        let a = new S.Declaration(n.text);
        for (; s = t.next(); )
          if (s.type === Ne) {
            let u = N(S.Identifier, s, s.text);
            a.parts.push(u);
          } else if (s.type === tt) {
            let u = t.expect(ht);
            a.parts.push(N(S.StringLiteral, u, u.text)), t.expect(mt);
          } else if (s.type === Ze) {
            let u = this.matchExpression();
            a.parts.push(fn(new S.PrintExpressionStatement(u), u)), t.expect(Ve);
          } else {
            if (s.type === ot)
              break;
            this.error({ title: "Expected string, symbol, or expression", pos: s.pos, advice: "Only strings or symbols can be part of a declaration" });
          }
        return I(a, r), b(a, s), a;
      }
      matchElement() {
        let t = this.tokens, r = t.la(0), n = t.la(-1), s;
        (s = t.nextIf(Ne)) || this.error({ title: "Expected element start", pos: r.pos, advice: t.lat(0) === yt ? `Unexpected closing "${t.la(1).text}" tag. Seems like your DOM is out of control.` : "Expected an element to start" });
        let a = new S.Element(s.text);
        if (this.matchAttributes(a, t), t.nextIf(yt))
          t.expect(ot), a.selfClosing = true;
        else if (t.expect(ot), wD[s.text])
          a.selfClosing = true;
        else if (s.text.toLowerCase() == "script") {
          let u = t.next(), c = u;
          for (; !t.test(He); ) {
            if (u.type === Ir && t.lat(0) === yt) {
              let O = t.la(1);
              if (O.type === Ne && O.text === s.text) {
                t.next(), t.next(), t.expect(ot);
                break;
              }
            }
            u = t.next();
          }
          t.test(He) && this.error({ title: "Expected <\/script>, but not found", pos: r.pos, advice: "Script tag must have an end tag" });
          let { pos: { index: p, line: f, column: h } } = c, D = u.end - 1, d = { pos: { index: p, line: f, column: h }, end: D }, x = N(S.StringLiteral, d, t.input.input.input.slice(p, D)), C = N(S.PrintTextStatement, d, x);
          a.children.push(C);
        } else
          a.children = this.parse(function(u, c, p) {
            if (c.type === Ir && p.lat(0) === yt) {
              let f = p.la(1);
              if (f.type === Ne && f.text === s.text)
                return p.next(), p.next(), p.expect(ot), true;
            }
            return false;
          }).expressions;
        return I(a, n), b(a, t.la(-1)), Po(a, "elementNameLoc", r), a;
      }
      matchAttributes(t, r) {
        for (; r.lat(0) !== yt && r.lat(0) !== ot; ) {
          let n = r.nextIf(Ne);
          if (n) {
            let s = new S.Identifier(n.text);
            if (I(s, n), b(s, n), r.nextIf(_r)) {
              let a = r.expect(tt), u = true, c = [], p;
              for (; !r.test(mt); )
                if (u && (p = r.nextIf(ht)))
                  c[c.length] = N(S.StringLiteral, p, p.text), u = false;
                else if (p = r.nextIf(Ze))
                  c[c.length] = this.matchExpression(), r.expect(Ve), u = true;
                else if (p = r.nextIf(st))
                  c[c.length] = this.matchTag(), u = true;
                else
                  break;
              if (r.expect(mt), !c.length) {
                let D = N(S.StringLiteral, a, "");
                c.push(D);
              }
              let f = c[0];
              for (let D = 1, d = c.length; D < d; D++) {
                let { line: x, column: C } = f.loc.start;
                f = new S.BinaryConcatExpression(f, c[D]), f.loc.start.line = x, f.loc.start.column = C, ve(f, f.right);
              }
              c.length > 1 && (f.wasImplicitConcatenation = true);
              let h = new S.Attribute(s, f);
              Ye(h, s), ve(h, f), t.attributes.push(h);
            } else
              t.attributes.push(fn(new S.Attribute(s), s));
          } else
            r.nextIf(Ze) ? (t.attributes.push(this.matchExpression()), r.expect(Ve)) : this.error({ title: "Invalid token", pos: r.la(0).pos, advice: "A tag must consist of attributes or expressions. Twig Tags are not allowed." });
        }
      }
      error(t, r = {}) {
        this.tokens.error(t.title, t.pos, t.advice, 1, r);
      }
      getGenericParserFor(t) {
        return this.options.multiTags[t] ? qD(t, this.options.multiTags[t]) : vi;
      }
      matchTag() {
        let t = this.tokens, r = t.la(-1), n = t.expect(Ne), s = this[ga][n.text], a = false;
        s || (this.options.allowUnknownTags ? (s = this.getGenericParserFor(n.text), a = true) : t.error(`Unknown tag "${n.text}"`, n.pos, `Expected a known tag such as
- ${Object.getOwnPropertyNames(this[ga]).join(`
- `)}`, n.length));
        let u = s.parse(this, n), c = t.la(-1);
        return a || (u.trimLeft = r.text.endsWith("-"), u.trimRight = c.text.startsWith("-")), I(u, r), b(u, c), Po(u, "tagNameLoc", n), u;
      }
      matchExpression(t = 0) {
        let r = this.tokens, n = r.la(0), s, a, u = false;
        r.la(-1).type === Ze && r.la(-1).text.endsWith("-") && (u = true);
        let c = this.getPrimary();
        for (; (s = r.la(0)) && s.type !== He && (a = this.getBinaryOperator(s)) && a.precedence >= t; ) {
          let h = r.next();
          if (a.parse)
            c = a.parse(this, h, c);
          else {
            let D = this.matchExpression(a.associativity === z ? a.precedence + 1 : a.precedence);
            c = a.createNode(s, c, D);
          }
          s = r.la(0);
        }
        var p = c;
        t === 0 && (b(c, r.la(-1)), p = this.matchConditionalExpression(c), s = r.la(0)), s.type === Ve && s.text.startsWith("-") && (p.trimRight = true), u && (p.trimLeft = u);
        let f = r.la(-1);
        return I(p, n), b(p, f), p;
      }
      getPrimary() {
        let t = this.tokens, r = t.la(0);
        if (this.isUnary(r)) {
          let n = this[Ta][r.text];
          t.next();
          let s = this.matchExpression(n.precedence);
          return this.matchPostfixExpression(n.createNode(r, s));
        } else if (t.test(Dt)) {
          t.next();
          let n = this.matchExpression();
          return t.expect(Ht), this.matchPostfixExpression(n);
        }
        return this.matchPrimaryExpression();
      }
      matchPrimaryExpression() {
        let t = this.tokens, r = t.la(0), n;
        switch (r.type) {
          case Ti:
            n = N(S.NullLiteral, t.next());
            break;
          case xi:
            n = N(S.BooleanLiteral, t.next(), false);
            break;
          case Ai:
            n = N(S.BooleanLiteral, t.next(), true);
            break;
          case Ne:
            t.next(), t.test(Dt) ? (n = new S.CallExpression(N(S.Identifier, r, r.text), this.matchArguments()), Ye(n, n.callee), b(n, t.la(-1))) : n = N(S.Identifier, r, r.text);
            break;
          case Rr:
            n = N(S.NumericLiteral, r, Number(t.next()));
            break;
          case tt:
            n = this.matchStringExpression();
            break;
          default:
            r.type === Nr ? n = this.matchArray() : r.type === mn ? n = this.matchMap() : this.error({ title: 'Unexpected token "' + r.type + '" of value "' + r.text + '"', pos: r.pos }, { errorType: "UNEXPECTED_TOKEN", tokenText: r.text, tokenType: r.type });
            break;
        }
        return this.matchPostfixExpression(n);
      }
      matchStringExpression() {
        let t = true, r, n = this.tokens, s = [], a = n.expect(tt);
        for (; !n.test(mt); )
          if (t && (r = n.nextIf(ht)))
            s[s.length] = N(S.StringLiteral, r, r.text), t = false;
          else if (r = n.nextIf(dn))
            s[s.length] = this.matchExpression(), n.expect(En), t = true;
          else
            break;
        let u = n.expect(mt);
        if (!s.length)
          return b(N(S.StringLiteral, a, ""), u);
        let c = s[0];
        for (let p = 1, f = s.length; p < f; p++) {
          let { line: h, column: D } = c.loc.start;
          c = new S.BinaryConcatExpression(c, s[p]), c.loc.start.line = h, c.loc.start.column = D, ve(c, c.right);
        }
        return s.length > 1 && (c.wasImplicitConcatenation = true), I(c, a), b(c, u), c;
      }
      matchConditionalExpression(t) {
        let r = this.tokens, n = t, s, a;
        for (; r.nextIf(gi); ) {
          r.nextIf(ut) ? (s = null, a = this.matchExpression()) : (s = this.matchExpression(), r.nextIf(ut) ? a = this.matchExpression() : a = null);
          let { line: u, column: c } = n.loc.start;
          n = new S.ConditionalExpression(n, s, a), n.loc.start = { line: u, column: c }, ve(n, a || s);
        }
        return n;
      }
      matchArray() {
        let t = this.tokens, r = new S.ArrayExpression(), n = t.expect(Nr);
        for (I(r, n); !t.test(at) && !t.test(He) && (r.elements.push(this.matchExpression()), !(!t.test(at) && (t.expect($t), t.test(at)))); )
          ;
        return b(r, t.expect(at)), r;
      }
      matchMap() {
        let t = this.tokens, r, n = new S.ObjectExpression(), s = t.expect(mn);
        for (I(n, s); !t.test(Xt) && !t.test(He); ) {
          let a = false, u, c;
          t.test(tt) ? (u = this.matchStringExpression(), S.is(u, "StringLiteral") || (a = true)) : (r = t.nextIf(Ne)) ? u = N(S.Identifier, r, r.text) : (r = t.nextIf(Rr)) ? u = N(S.NumericLiteral, r, Number(r.text)) : t.test(Dt) ? (u = this.matchExpression(), a = true) : this.error({ title: "Invalid map key", pos: t.la(0).pos, advice: "Key must be a string, symbol or a number but was " + t.next() }), t.expect(ut), c = this.matchExpression();
          let p = new S.ObjectProperty(u, c, a);
          if (Ye(p, u), ve(p, c), n.properties.push(p), !t.test(Xt) && (t.expect($t), t.test(Xt)))
            break;
        }
        return b(n, t.expect(Xt)), n;
      }
      matchPostfixExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(He); )
          if (r.test(hn) || r.test(Nr))
            n = this.matchSubscriptExpression(n);
          else if (r.test(Jt))
            r.next(), n = this.matchFilterExpression(n);
          else
            break;
        return n;
      }
      matchSubscriptExpression(t) {
        let r = this.tokens;
        if (r.next().type === hn) {
          let s = r.next(), a = false, u;
          s.type === Ne ? u = N(S.Identifier, s, s.text) : s.type === Rr ? (u = N(S.NumericLiteral, s, Number(s.text)), a = true) : this.error({ title: "Invalid token", pos: s.pos, advice: "Expected number or symbol, found " + s + " instead" });
          let c = new S.MemberExpression(t, u, a);
          if (Ye(c, t), ve(c, u), r.test(Dt)) {
            let p = new S.CallExpression(c, this.matchArguments());
            return Ye(p, c), b(p, r.la(-1)), p;
          }
          return c;
        } else {
          let s, a;
          if (r.test(ut) ? (r.next(), a = null) : (s = this.matchExpression(), r.test(ut) && (a = s, s = null, r.next())), s)
            return b(Ye(new S.MemberExpression(t, s, true), t), r.expect(at));
          {
            let u = new S.SliceExpression(t, a, r.test(at) ? null : this.matchExpression());
            return Ye(u, t), b(u, r.expect(at)), u;
          }
        }
      }
      matchFilterExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(He); ) {
          let a = r.expect(Ne), u = N(S.Identifier, a, a.text), c;
          var s = false;
          r.test(Dt) ? c = this.matchArguments() : r.test(ut) ? (c = this.matchDjangoFilterArguments(), s = true) : c = [];
          let p = new S.FilterExpression(n, u, c);
          if (Ye(p, n), p.arguments.length ? ve(p, p.arguments[p.arguments.length - 1]) : ve(p, n), n = p, n.isDjango = s, !r.test(Jt) || r.test(He))
            break;
          r.next();
        }
        return n;
      }
      matchArguments() {
        let t = this.tokens, r = [];
        for (t.expect(Dt); !t.test(Ht) && !t.test(He); ) {
          if (t.test(Ne) && t.lat(1) === _r) {
            let n = t.next();
            t.next();
            let s = this.matchExpression(), a = new S.NamedArgumentExpression(N(S.Identifier, n, n.text), s);
            ve(a, s), r.push(a);
          } else
            r.push(this.matchExpression());
          if (!t.test($t))
            return t.expect(Ht), r;
          t.expect($t);
        }
        return t.expect(Ht), r;
      }
      matchDjangoFilterArguments() {
        let t = this.tokens, r = [];
        for (t.expect(ut); !t.test(Jt) && !t.test(Ve) && !t.test(et); )
          r.push(this.matchExpression());
        return t.expect([Jt, Ve, et]), t.index--, r;
      }
    };
    var Yo = W(qy());
    var jy = W(Gy());
    var wt = Symbol();
    var Uo = Symbol();
    var Tn = class {
      static {
        i(this, "TokenStream");
      }
      constructor(t, r) {
        this.input = t, this.index = 0;
        let n = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreWhitespace: true, applyWhitespaceTrimming: true }, r);
        if (this[wt] = EL(t, n), this[Uo] = this[wt].length, this[wt].length && this[wt][this[wt].length - 1].type === Dn) {
          let s = this[wt][this[wt].length - 1];
          this.error(s.message, s.pos, s.advice, s.endPos.index - s.pos.index || 1);
        }
      }
      la(t) {
        var r = this.index + t;
        return r < this[Uo] ? this[wt][r] : Pr;
      }
      lat(t) {
        return this.la(t).type;
      }
      test(t, r) {
        let n = this.la(0);
        return n.type === t && (!r || n.text === r);
      }
      next() {
        if (this.index === this[Uo])
          return Pr;
        let t = this[wt][this.index];
        return this.index++, t;
      }
      nextIf(t, r) {
        return this.test(t, r) ? this.next() : false;
      }
      expect(t, r = null, n = null) {
        let s = this.la(0);
        if (Array.isArray(t) || (t = [t]), t.includes(s.type) && (!r || s.text === r))
          return this.next();
        var a = t[0], u = Aa[a] || a || r;
        u != r && u + "" + r;
        var c = s.pos;
        c.line == -1 && n && (c = n.pos), this.error("Invalid Token", c, `Expected ${u} but found ${Aa[s.type] || s.type || s.text} instead.`, s.length);
      }
      error(t, r, n, s = 1, a = {}) {
        let u = `ERROR: ${t}. `;
        n && (u += n);
        let c = new Error(u + " 	 ");
        throw Object.assign(c, a), c.loc = { start: { line: Math.max(1, r.line || 0), column: Math.max(0, r.column || 0) + 1 }, end: { line: Math.max(1, r.line || 0) + 1, column: 1 } }, c;
      }
    };
    function EL(e, t) {
      let r, n = [], s = false, a = false;
      for (; (r = e.next()) !== Pr; ) {
        let u = a;
        if (a = false, s)
          switch (r.type) {
            case Ze:
            case st:
              r.text[r.text.length - 1] === "-" && (n[n.length - 1].text = (0, Yo.default)(n[n.length - 1].text));
              break;
            case Ve:
            case et:
              r.text[0] === "-" && (a = true);
              break;
            case qt:
              n[n.length - 1].type === Wt && (n[n.length - 1].text = (0, Yo.default)(n.text)), a = true;
              break;
          }
        if (u && (r.type === Wt || r.type === ht) && (r.text = (0, jy.default)(r.text)), (r.type !== qt || !t.ignoreComments) && (r.type !== Di || !t.ignoreWhitespace) && (r.type !== br || !t.ignoreHtmlComments) && (n[n.length] = r), s = t.applyWhitespaceTrimming, r.type === Dn)
          return n;
      }
      return n;
    }
    i(EL, "getAllTokens");
    var qe = Symbol();
    var Ci = class {
      static {
        i(this, "CharStream");
      }
      constructor(t) {
        this.input = String(t), this.length = this.input.length, this.index = 0, this.position = { line: 1, column: 0 };
      }
      get source() {
        return this.input;
      }
      reset() {
        this.rewind({ line: 1, column: 0, index: 0 });
      }
      mark() {
        let { line: t, column: r } = this.position, n = this.index;
        return { line: t, column: r, index: n };
      }
      rewind(t) {
        this.position.line = t.line, this.position.column = t.column, this.index = t.index;
      }
      la(t) {
        var r = this.index + t;
        return r < this.length ? this.input.charAt(r) : qe;
      }
      lac(t) {
        var r = this.index + t;
        return r < this.length ? this.input.charCodeAt(r) : qe;
      }
      next() {
        if (this.index === this.length)
          return qe;
        var t = this.input.charAt(this.index);
        return this.index++, this.position.column++, t === `
` && (this.position.line += 1, this.position.column = 0), t;
      }
      match(t) {
        let r = this.mark();
        for (let n = 0, s = t.length; n < s; n++) {
          let a = this.next();
          if (a !== t.charAt(n) || a === qe)
            return this.rewind(r), false;
        }
        return true;
      }
    };
    var oe = { TEXT: "TEXT", EXPRESSION: "EXPRESSION", TAG: "TAG", INTERPOLATION: "INTERPOLATION", STRING_SINGLE: "STRING_SINGLE", STRING_DOUBLE: "STRING_DOUBLE", ELEMENT: "ELEMENT", ATTRIBUTE_VALUE: "ATTRIBUTE_VALUE", DECLARATION: "DECLARATION" };
    var gn = Symbol();
    var Ba = Symbol();
    var mL = Symbol();
    var Uy = { "[": Nr, "]": at, "(": Dt, ")": Ht, "{": mn, "}": Xt, ":": ut, ".": hn, "|": Jt, ",": $t, "?": gi, "=": _r, "/": yt };
    var vn = class {
      static {
        i(this, "Lexer");
      }
      constructor(t, { preserveSourceLiterally: r = false } = {}) {
        this.input = t, this[gn] = [oe.TEXT], this[Ba] = [], this[mL] = null, this.options = { preserveSourceLiterally: r === true };
      }
      applyExtension(t) {
        t.unaryOperators && this.addOperators(...t.unaryOperators.map((r) => r.text)), t.binaryOperators && this.addOperators(...t.binaryOperators.map((r) => r.text));
      }
      reset() {
        this.input.reset(), this[gn] = [oe.TEXT];
      }
      get source() {
        return this.input.source;
      }
      addOperators(...t) {
        this[Ba].push(...t), this[Ba].sort((r, n) => r.length > n.length ? -1 : 1);
      }
      get state() {
        return this[gn][this[gn].length - 1];
      }
      pushState(t) {
        this[gn].push(t);
      }
      popState() {
        this[gn].length--;
      }
      createToken(t, r) {
        let n = this.input, s = n.mark(), a = s.index;
        return { type: t, pos: r, endPos: s, end: a, length: a - r.index, source: n.input, text: n.input.substr(r.index, a - r.index), toString: function() {
          return this.text;
        } };
      }
      next() {
        let t = this.input, r, n;
        for (; (n = t.la(0)) !== qe; ) {
          if (r = t.mark(), this.state !== oe.TEXT && this.state !== oe.STRING_DOUBLE && this.state !== oe.STRING_SINGLE && this.state !== oe.ATTRIBUTE_VALUE && Vo(n)) {
            for (t.next(); (n = t.la(0)) !== qe && Vo(n); )
              t.next();
            return this.createToken(Di, r);
          }
          if (n === "{" && t.la(1) === "#")
            for (t.next(), t.next(), t.la(0) === "-" && t.next(); (n = t.la(0)) !== qe; ) {
              if (n === "#" && t.la(1) === "}" || n === "-" && t.la(1) === "#" && t.la(2) === "}")
                return n === "-" && t.next(), t.next(), t.next(), this.createToken(qt, r);
              t.next();
            }
          if (this.state === oe.TEXT) {
            let s;
            if (n === "<") {
              if (t.la(1) === "{" || qr(t.lac(1)) || t.la(1) === "/")
                return t.next(), this.pushState(oe.ELEMENT), this.createToken(Ir, r);
              if (t.la(1) === "!" && t.la(2) === "-" && t.la(3) === "-") {
                for (t.next(), t.next(), t.next(), t.next(); (n = t.la(0)) !== qe; ) {
                  if (n === "-" && t.la(1) === "-") {
                    t.next(), t.next(), !(n = t.next()) === ">" && this.error("Unexpected end for HTML comment", t.mark(), `Expected comment to end with '>' but found '${n}' instead.`);
                    break;
                  }
                  t.next();
                }
                return this.createToken(br, r);
              } else
                return t.la(1) === "!" && (qr(t.lac(2)) || Vo(t.la(2))) ? (t.next(), t.next(), this.pushState(oe.DECLARATION), this.createToken(hi, r)) : this.matchText(r);
            } else
              return n === "{" ? this.matchExpressionToken(r) : n === "&" && (s = this.matchEntity(r)) ? s : this.matchText(r);
          } else {
            if (this.state === oe.EXPRESSION)
              return n === "}" && t.la(1) === "}" || n === "-" && t.la(1) === "}" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(Ve, r)) : this.matchExpression(r);
            if (this.state === oe.TAG)
              return n === "%" && t.la(1) === "}" || n === "-" && t.la(1) === "%" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(et, r)) : this.matchExpression(r);
            if (this.state === oe.STRING_SINGLE || this.state === oe.STRING_DOUBLE)
              return this.matchString(r, true);
            if (this.state === oe.INTERPOLATION)
              return n === "}" ? (t.next(), this.popState(), this.createToken(En, r)) : this.matchExpression(r);
            if (this.state === oe.ELEMENT)
              switch (n) {
                case "/":
                  return t.next(), this.createToken(yt, r);
                case "{":
                  return this.matchExpressionToken(r);
                case ">":
                  return t.next(), this.popState(), this.createToken(ot, r);
                case '"':
                  return t.next(), this.pushState(oe.ATTRIBUTE_VALUE), this.createToken(tt, r);
                case "=":
                  return t.next(), this.createToken(_r, r);
                default:
                  return this.matchSymbol(r);
              }
            else {
              if (this.state === oe.ATTRIBUTE_VALUE)
                return n === '"' ? (t.next(), this.popState(), this.createToken(mt, r)) : this.matchAttributeValue(r);
              if (this.state === oe.DECLARATION)
                switch (n) {
                  case ">":
                    return t.next(), this.popState(), this.createToken(ot, r);
                  case '"':
                    return t.next(), this.pushState(oe.STRING_DOUBLE), this.createToken(tt, r);
                  case "{":
                    return this.matchExpressionToken(r);
                  default:
                    return this.matchSymbol(r);
                }
              else
                return this.error(`Invalid state ${this.state}`, r);
            }
          }
        }
        return Pr;
      }
      matchExpressionToken(t) {
        let r = this.input;
        switch (r.la(1)) {
          case "{":
            return r.next(), r.next(), this.pushState(oe.EXPRESSION), r.la(0) === "-" && r.next(), this.createToken(Ze, t);
          case "%":
            return r.next(), r.next(), this.pushState(oe.TAG), r.la(0) === "-" && r.next(), this.createToken(st, t);
          case "#":
            return r.next(), r.next(), r.la(0) === "-" && r.next(), this.matchComment(t);
          default:
            return this.matchText(t);
        }
      }
      matchExpression(t) {
        let r = this.input, n = r.la(0);
        switch (n) {
          case "'":
            return this.pushState(oe.STRING_SINGLE), r.next(), this.createToken(tt, t);
          case '"':
            return this.pushState(oe.STRING_DOUBLE), r.next(), this.createToken(tt, t);
          default: {
            if (Tt(r.lac(0)))
              return r.next(), this.matchNumber(t);
            if (n === "t" && r.match("true") || n === "T" && r.match("TRUE"))
              return this.createToken(Ai, t);
            if (n === "f" && r.match("false") || n === "F" && r.match("FALSE"))
              return this.createToken(xi, t);
            if (n === "n" && (r.match("null") || r.match("none")) || n === "N" && (r.match("NULL") || r.match("NONE")))
              return this.createToken(Ti, t);
            let { longestMatchingOperator: s, longestMatchEndPos: a } = this.findLongestMatchingOperator(), u = r.lac(0);
            if (u === 95 || qr(u) || Tt(u)) {
              r.next();
              let c = this.matchSymbol(t);
              return c.text.length <= s.length ? (r.rewind(a), this.createToken(Or, t)) : c;
            } else
              return s ? (r.rewind(a), this.createToken(Or, t)) : Uy.hasOwnProperty(n) ? (r.next(), this.createToken(Uy[n], t)) : n === "\xA0" ? this.error("Unsupported token: Non-breaking space", t) : this.error(`Unknown token ${n}`, t);
          }
        }
      }
      findLongestMatchingOperator() {
        let t = this.input, r = t.mark(), n = "", s = null;
        for (let a = 0, u = this[Ba], c = u.length; a < c; a++) {
          let p = u[a];
          if (p.length > n.length && t.match(p)) {
            let f = t.lac(0);
            (p.indexOf(" ") === -1 || !(qr(f) || Tt(f))) && (n = p, s = t.mark()), t.rewind(r);
          }
        }
        return t.rewind(r), { longestMatchingOperator: n, longestMatchEndPos: s };
      }
      error(t, r, n = "") {
        let s = this.createToken(Dn, r);
        return s.message = t, s.advice = n, s;
      }
      matchEntity(t) {
        let r = this.input;
        if (r.next(), r.la(0) === "#")
          if (r.next(), r.la(0) === "x") {
            r.next();
            let n = r.la(0);
            for (; "a" <= n && n <= "f" || "A" <= n && n <= "F" || Tt(r.lac(0)); )
              r.next(), n = r.la(0);
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else if (Tt(r.lac(0))) {
            do
              r.next();
            while (Tt(r.lac(0)));
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else
            return r.rewind(t), null;
        else {
          for (; qr(r.lac(0)); )
            r.next();
          if (r.la(0) === ";")
            r.next();
          else
            return r.rewind(t), null;
        }
        return this.createToken(yi, t);
      }
      matchSymbol(t) {
        let r = this.input, n = this.state === oe.ELEMENT, s;
        for (; (s = r.lac(0)) && (s === 95 || qr(s) || Tt(s) || n && (s === 45 || s === 58)); )
          r.next();
        var a = r.mark();
        return t.index === a.index ? this.error("Expected an Identifier", t, n ? `Expected a valid attribute name, but instead found "${r.la(0)}", which is not part of a valid attribute name.` : `Expected letter, digit or underscore but found ${r.la(0)} instead.`) : this.createToken(Ne, t);
      }
      matchString(t, r = true) {
        let n = this.input, s = this.state === oe.STRING_SINGLE ? "'" : '"', a;
        if (r && n.la(0) === "#" && n.la(1) === "{")
          return this.pushState(oe.INTERPOLATION), n.next(), n.next(), this.createToken(dn, t);
        if (n.la(0) === s)
          return n.next(), this.popState(), this.createToken(mt, t);
        for (; (a = n.la(0)) !== s && a !== qe; )
          if (a === "\\" && n.la(1) === s)
            n.next(), n.next();
          else {
            if (r && a === "#" && n.la(1) === "{")
              break;
            n.next();
          }
        var u = this.createToken(ht, t);
        return this.options.preserveSourceLiterally || (u.text = u.text.replace(new RegExp("(?:\\\\)(" + s + ")", "g"), "$1")), u;
      }
      matchAttributeValue(t) {
        let r = this.input, n = this.state === oe.STRING_SINGLE ? "'" : '"', s;
        if (r.la(0) === "{")
          return this.matchExpressionToken(t);
        for (; (s = r.la(0)) !== n && s !== qe; )
          if (s === "\\" && r.la(1) === n)
            r.next(), r.next();
          else {
            if (s === "{")
              break;
            if (s === n)
              break;
            r.next();
          }
        var a = this.createToken(ht, t);
        return this.options.preserveSourceLiterally || (a.text = a.text.replace(new RegExp("(?:\\\\)(" + n + ")", "g"), "$1")), a;
      }
      matchNumber(t) {
        let r = this.input, n;
        for (; (n = r.lac(0)) !== qe && Tt(n); )
          r.next();
        if (r.la(0) === "." && Tt(r.lac(1)))
          for (r.next(); (n = r.lac(0)) !== qe && Tt(n); )
            r.next();
        return this.createToken(Rr, t);
      }
      matchText(t) {
        let r = this.input, n;
        for (; (n = r.la(0)) && n !== qe; ) {
          if (n === "{") {
            let s = r.la(1);
            if (s === "{" || s === "#" || s === "%")
              break;
          } else if (n === "<") {
            let s = r.la(1);
            if (s === "/" || s === "!" || qr(r.lac(1)))
              break;
            if (r.la(1) === "{") {
              let a = r.la(1);
              if (a === "{" || a === "#" || a === "%")
                break;
            }
          }
          r.next();
        }
        return this.createToken(Wt, t);
      }
      matchComment(t) {
        let r = this.input, n;
        for (; (n = r.next()) !== qe; )
          if (n === "#" && r.la(0) === "}") {
            r.next();
            break;
          }
        return this.createToken(qt, t);
      }
    };
    function Vo(e) {
      return e === `
` || e === " " || e === "	";
    }
    i(Vo, "isWhitespace");
    function qr(e) {
      return 65 <= e && e <= 90 || 97 <= e && e <= 122;
    }
    i(qr, "isAlpha");
    function Tt(e) {
      return 48 <= e && e <= 57;
    }
    i(Tt, "isDigit");
    var Se = W(J());
    var Ko = [];
    var Bi = [];
    var Sn = [];
    var Wo = Jo("not", "UnaryNotExpression", 50);
    var Yy = Jo("-", "UnaryNeqExpression", 500);
    var Vy = Jo("+", "UnaryPosExpression", 500);
    var Ky = de({ text: "or", type: "BinaryOrExpression", precedence: 10, associativity: z });
    var Wy = de({ text: "and", type: "BinaryAndExpression", precedence: 15, associativity: z });
    var Hy = de({ text: "b-or", type: "BitwiseOrExpression", precedence: 16, associativity: z });
    var Xy = de({ text: "b-xor", type: "BitwiseXOrExpression", precedence: 17, associativity: z });
    var $y = de({ text: "b-and", type: "BitwiseAndExpression", precedence: 18, associativity: z });
    var Jy = de({ text: "==", type: "BinaryEqualsExpression", precedence: 20, associativity: z });
    var zy = de({ text: "!=", type: "BinaryNotEqualsExpression", precedence: 20, associativity: z });
    var Qy = de({ text: "<", type: "BinaryLessThanExpression", precedence: 20, associativity: z });
    var Zy = de({ text: ">", type: "BinaryGreaterThanExpression", precedence: 20, associativity: z });
    var eA = de({ text: "<=", type: "BinaryLessThanOrEqualExpression", precedence: 20, associativity: z });
    var tA = de({ text: ">=", type: "BinaryGreaterThanOrEqualExpression", precedence: 20, associativity: z });
    var rA = de({ text: "not in", type: "BinaryNotInExpression", precedence: 20, associativity: z });
    var nA = de({ text: "in", type: "BinaryInExpression", precedence: 20, associativity: z });
    var iA = de({ text: "matches", type: "BinaryMatchesExpression", precedence: 20, associativity: z });
    var sA = de({ text: "starts with", type: "BinaryStartsWithExpression", precedence: 20, associativity: z });
    var aA = de({ text: "ends with", type: "BinaryEndsWithExpression", precedence: 20, associativity: z });
    var uA = de({ text: "..", type: "BinaryRangeExpression", precedence: 25, associativity: z });
    var oA = de({ text: "+", type: "BinaryAddExpression", precedence: 30, associativity: z });
    var x$ = de({ text: "-", type: "BinarySubExpression", precedence: 30, associativity: z });
    Bi.push({ text: "~", precedence: 40, associativity: z, createNode(e, t, r) {
      let n = new Se.BinaryConcatExpression(t, r);
      return Ye(n, t), ve(n, r), n;
    } });
    var lA = de({ text: "*", type: "BinaryMulExpression", precedence: 60, associativity: z });
    var cA = de({ text: "/", type: "BinaryDivExpression", precedence: 60, associativity: z });
    var pA = de({ text: "//", type: "BinaryFloorDivExpression", precedence: 60, associativity: z });
    var fA = de({ text: "%", type: "BinaryModExpression", precedence: 60, associativity: z });
    Bi.push({ text: "is", precedence: 100, associativity: z, parse(e, t, r) {
      let n = e.tokens, s = false;
      n.nextIf(m.OPERATOR, "not") && (s = true);
      let a = hL(e), u = null;
      n.test(m.LPAREN) && (u = e.matchArguments());
      let c = a.createNode(r, u);
      return I(c, t), b(c, n.la(-1)), s ? fn(new Wo(c), c) : c;
    } });
    function hL(e) {
      let t = e.tokens, r = t.la(0);
      r.type !== m.NULL ? t.expect(m.SYMBOL) : t.next();
      let n = r.text;
      if (!e.hasTest(n)) {
        let s = t.expect(m.SYMBOL);
        n += " " + s.text, e.hasTest(n) || e.error({ title: `Unknown test "${n}"`, pos: r.pos });
      }
      return e.getTest(n);
    }
    i(hL, "getTest");
    var dA = de({ text: "**", type: "BinaryPowerExpression", precedence: 200, associativity: z });
    var EA = de({ text: "??", type: "BinaryNullCoalesceExpression", precedence: 300, associativity: z });
    var mA = Lt("even", "TestEvenExpression");
    var hA = Lt("odd", "TestOddExpression");
    var DA = Lt("defined", "TestDefinedExpression");
    var Ho = Lt("same as", "TestSameAsExpression");
    Sn.push({ text: "sameas", createNode(e, t) {
      return new Ho(e, t);
    } });
    var Xo = Lt("null", "TestNullExpression");
    Sn.push({ text: "none", createNode(e, t) {
      return new Xo(e, t);
    } });
    var $o = Lt("divisible by", "TestDivisibleByExpression");
    Sn.push({ text: "divisibleby", createNode(e, t) {
      return new $o(e, t);
    } });
    var yA = Lt("constant", "TestConstantExpression");
    var AA = Lt("empty", "TestEmptyExpression");
    var xA = Lt("iterable", "TestIterableExpression");
    function Lt(e, t) {
      let r = class extends Se.Node {
        static {
          i(this, "TestExpression");
        }
        constructor(n, s) {
          super(), this.expression = n, this.arguments = s;
        }
      };
      return (0, Se.type)(r, t), (0, Se.alias)(r, "Expression", "TestExpression"), (0, Se.visitor)(r, "expression", "arguments"), Sn.push({ text: e, createNode(n, s) {
        return new r(n, s);
      } }), r;
    }
    i(Lt, "createTest");
    function de(e) {
      let { text: t, precedence: r, associativity: n } = e, s = class extends Se.BinaryExpression {
        static {
          i(this, "BinarySubclass");
        }
        constructor(u, c) {
          super(t, u, c);
        }
      };
      (0, Se.type)(s, e.type), (0, Se.alias)(s, "BinaryExpression", "Binary", "Expression"), (0, Se.visitor)(s, "left", "right");
      let a = { text: t, precedence: r, associativity: n };
      return e.parse ? a.parse = e.parse : e.createNode ? a.createNode = e.createNode : a.createNode = (u, c, p) => new s(c, p), Bi.push(a), s;
    }
    i(de, "createBinaryOperatorNode");
    function Jo(e, t, r) {
      let n = class extends Se.UnaryExpression {
        static {
          i(this, "UnarySubclass");
        }
        constructor(s) {
          super(e, s);
        }
      };
      return (0, Se.type)(n, t), (0, Se.alias)(n, "Expression", "UnaryLike"), (0, Se.visitor)(n, "argument"), Ko.push({ text: e, precedence: r, createNode(s, a) {
        let u = new n(a);
        return I(u, s), ve(u, a), u;
      } }), n;
    }
    i(Jo, "createUnaryOperator");
    var v = W(J());
    var zt = class extends v.Node {
      static {
        i(this, "AutoescapeBlock");
      }
      constructor(t, r) {
        super(), this.escapeType = t, this.expressions = r;
      }
    };
    (0, v.type)(zt, "AutoescapeBlock");
    (0, v.alias)(zt, "Block", "Escape");
    (0, v.visitor)(zt, "expressions");
    var kt = class extends v.Node {
      static {
        i(this, "BlockStatement");
      }
      constructor(t, r) {
        super(), this.name = t, this.body = r;
      }
    };
    (0, v.type)(kt, "BlockStatement");
    (0, v.alias)(kt, "Statement", "Scope", "RootScope");
    (0, v.visitor)(kt, "body");
    var Fn = class extends v.Node {
      static {
        i(this, "BlockCallExpression");
      }
      constructor(t, r = []) {
        super(), this.callee = t, this.arguments = r;
      }
    };
    (0, v.type)(Fn, "BlockCallExpression");
    (0, v.alias)(Fn, "Expression", "FunctionInvocation");
    (0, v.visitor)(Fn, "arguments");
    var Qt = class extends v.Node {
      static {
        i(this, "MountStatement");
      }
      constructor(t, r, n, s, a, u) {
        super(), this.name = t, this.source = r, this.key = n, this.argument = s, this.async = a, this.delayBy = u, this.errorVariableName = null, this.body = null, this.otherwise = null;
      }
    };
    (0, v.type)(Qt, "MountStatement");
    (0, v.alias)(Qt, "Statement", "Scope");
    (0, v.visitor)(Qt, "name", "source", "key", "argument", "body", "otherwise");
    var Zt = class extends v.Node {
      static {
        i(this, "DoStatement");
      }
      constructor(t) {
        super(), this.value = t;
      }
    };
    (0, v.type)(Zt, "DoStatement");
    (0, v.alias)(Zt, "Statement");
    (0, v.visitor)(Zt, "value");
    var er = class extends v.Node {
      static {
        i(this, "EmbedStatement");
      }
      constructor(t) {
        super(), this.parent = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false, this.blocks = null;
      }
    };
    (0, v.type)(er, "EmbedStatement");
    (0, v.alias)(er, "Statement", "Include");
    (0, v.visitor)(er, "argument", "blocks");
    var tr = class extends v.Node {
      static {
        i(this, "ExtendsStatement");
      }
      constructor(t) {
        super(), this.parentName = t;
      }
    };
    (0, v.type)(tr, "ExtendsStatement");
    (0, v.alias)(tr, "Statement", "Include");
    (0, v.visitor)(tr, "parentName");
    var rr = class extends v.Node {
      static {
        i(this, "FilterBlockStatement");
      }
      constructor(t, r) {
        super(), this.filterExpression = t, this.body = r;
      }
    };
    (0, v.type)(rr, "FilterBlockStatement");
    (0, v.alias)(rr, "Statement", "Block");
    (0, v.visitor)(rr, "filterExpression", "body");
    var wr = class extends v.Node {
      static {
        i(this, "FlushStatement");
      }
      constructor() {
        super();
      }
    };
    (0, v.type)(wr, "FlushStatement");
    (0, v.alias)(wr, "Statement");
    var nr = class extends v.Node {
      static {
        i(this, "ForStatement");
      }
      constructor(t = null, r = null, n = null, s = null, a = null, u = null) {
        super(), this.keyTarget = t, this.valueTarget = r, this.sequence = n, this.condition = s, this.body = a, this.otherwise = u;
      }
    };
    (0, v.type)(nr, "ForStatement");
    (0, v.alias)(nr, "Statement", "Scope", "Loop");
    (0, v.visitor)(nr, "keyTarget", "valueTarget", "sequence", "condition", "body", "otherwise");
    var gt = class extends v.Node {
      static {
        i(this, "ImportDeclaration");
      }
      constructor(t, r) {
        super(), this.key = t, this.alias = r;
      }
    };
    (0, v.type)(gt, "ImportDeclaration");
    (0, v.alias)(gt, "VariableDeclaration");
    (0, v.visitor)(gt, "key", "value");
    var ir = class extends v.Node {
      static {
        i(this, "FromStatement");
      }
      constructor(t, r) {
        super(), this.source = t, this.imports = r;
      }
    };
    (0, v.type)(ir, "FromStatement");
    (0, v.alias)(ir, "Statement");
    (0, v.visitor)(ir, "source", "imports");
    var vt = class extends v.Node {
      static {
        i(this, "IfStatement");
      }
      constructor(t, r = null, n = null) {
        super(), this.test = t, this.consequent = r, this.alternate = n;
      }
    };
    (0, v.type)(vt, "IfStatement");
    (0, v.alias)(vt, "Statement", "Conditional");
    (0, v.visitor)(vt, "test", "consequent", "alternate");
    var sr = class extends v.Node {
      static {
        i(this, "IncludeStatement");
      }
      constructor(t) {
        super(), this.source = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false;
      }
    };
    (0, v.type)(sr, "IncludeStatement");
    (0, v.alias)(sr, "Statement", "Include");
    (0, v.visitor)(sr, "source", "argument");
    var ar = class extends v.Node {
      static {
        i(this, "UrlStatement");
      }
      constructor(t) {
        super(), this.name = t, this.arguments = [], this.as = null;
      }
    };
    (0, v.type)(ar, "UrlStatement");
    (0, v.alias)(ar, "Statement", "Url");
    (0, v.visitor)(ar, "name", "arguments");
    var Mt = class extends v.Node {
      static {
        i(this, "WithStatement");
      }
      constructor(t) {
        super(), this.arguments = [], this.body = t;
      }
    };
    (0, v.type)(Mt, "WithStatement");
    (0, v.alias)(Mt, "Statement", "Scope", "RootScope");
    (0, v.visitor)(Mt, "body");
    var ur = class extends v.Node {
      static {
        i(this, "MacroDeclarationStatement");
      }
      constructor(t, r, n) {
        super(), this.name = t, this.arguments = r, this.body = n;
      }
    };
    (0, v.type)(ur, "MacroDeclarationStatement");
    (0, v.alias)(ur, "Statement", "Scope", "RootScope");
    (0, v.visitor)(ur, "name", "arguments", "body");
    var or = class extends v.Node {
      static {
        i(this, "VariableDeclarationStatement");
      }
      constructor(t, r) {
        super(), this.name = t, this.value = r;
      }
    };
    (0, v.type)(or, "VariableDeclarationStatement");
    (0, v.alias)(or, "Statement");
    (0, v.visitor)(or, "name", "value");
    var lr = class extends v.Node {
      static {
        i(this, "SetStatement");
      }
      constructor(t) {
        super(), this.assignments = t;
      }
    };
    (0, v.type)(lr, "SetStatement");
    (0, v.alias)(lr, "Statement", "ContextMutation");
    (0, v.visitor)(lr, "assignments");
    var cr = class extends v.Node {
      static {
        i(this, "SpacelessBlock");
      }
      constructor(t = null) {
        super(), this.body = t;
      }
    };
    (0, v.type)(cr, "SpacelessBlock");
    (0, v.alias)(cr, "Statement", "Block");
    (0, v.visitor)(cr, "body");
    var pr = class extends v.Node {
      static {
        i(this, "AliasExpression");
      }
      constructor(t, r) {
        super(), this.name = t, this.alias = r;
      }
    };
    (0, v.type)(pr, "AliasExpression");
    (0, v.alias)(pr, "Expression");
    (0, v.visitor)(pr, "name", "alias");
    var fr = class extends v.Node {
      static {
        i(this, "UseStatement");
      }
      constructor(t, r) {
        super(), this.source = t, this.aliases = r;
      }
    };
    (0, v.type)(fr, "UseStatement");
    (0, v.alias)(fr, "Statement", "Include");
    (0, v.visitor)(fr, "source", "aliases");
    var TA = { name: "autoescape", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, a, u, c;
      r.nextIf(m.TAG_END) ? (u = r.la(-1), s = null) : (a = r.nextIf(m.STRING_START)) ? (s = r.expect(m.STRING).text, r.nextIf(m.STRING_END) || e.error({ title: "autoescape type declaration must be a simple string", pos: r.la(0).pos, advice: `The type declaration for autoescape must be a simple string such as 'html' or 'js'.
I expected the current string to end with a ${a.text} but instead found ${m.ERROR_TABLE[r.lat(0)] || r.lat(0)}.` }), u = r.la(0)) : r.nextIf(m.FALSE) ? (s = false, u = r.la(0)) : r.nextIf(m.TRUE) ? (s = true, u = r.la(0)) : e.error({ title: "Invalid autoescape type declaration", pos: r.la(0).pos, advice: `Expected type of autoescape to be a string, boolean or not specified. Found ${r.la(0).type} instead.` });
      let p = new zt(s);
      I(p, t);
      let f;
      return p.expressions = e.parse((h, D, d) => D.type === m.TAG_START && d.nextIf(m.SYMBOL, "endautoescape") ? (c = D, f = d.expect(m.TAG_END, "", n), true) : false).expressions, b(p, f), p.trimRightAutoescape = te(u), p.trimLeftEndautoescape = ee(c), p;
    } };
    var bi = W(J());
    var gA = { name: "block", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(m.SYMBOL), a, u, c;
      if (u = r.nextIf(m.TAG_END)) {
        if (a = new kt(N(bi.Identifier, s, s.text), e.parse((p, f, h) => {
          let D = !!(f.type === m.TAG_START && h.nextIf(m.SYMBOL, "endblock"));
          return D && (c = f), D;
        }).expressions), r.nextIf(m.SYMBOL, s.text) && r.lat(0) !== m.TAG_END) {
          let p = r.next();
          e.error({ title: "Block name mismatch", pos: p.pos, advice: p.type == m.SYMBOL ? `Expected end of block ${s.text} but instead found end of block ${r.la(0).text}.` : `endblock must be followed by either '%}' or the name of the open block. Found a token of type ${m.ERROR_TABLE[p.type] || p.type} instead.` });
        }
      } else
        a = new kt(N(bi.Identifier, s, s.text), new bi.PrintExpressionStatement(e.matchExpression()));
      return I(a, t), b(a, r.expect(m.TAG_END, null, n)), a.trimRightBlock = u && te(u), a.trimLeftEndblock = !!(c && ee(c)), a;
    } };
    var vA = { name: "do", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new Zt(e.matchExpression());
      return I(s, t), b(s, r.expect(m.TAG_END, "", n)), s;
    } };
    var Bg = W(J());
    var bg = W(Cg());
    var Og = { name: "embed", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new er(e.matchExpression());
      r.nextIf(m.SYMBOL, "ignore") && (r.expect(m.SYMBOL, "missing"), s.ignoreMissing = true), r.nextIf(m.SYMBOL, "with") && (s.argument = e.matchExpression()), r.nextIf(m.SYMBOL, "only") && (s.contextFree = true), r.expect(m.TAG_END);
      let a = r.la(-1), u;
      return s.blocks = (0, bg.default)(e.parse((c, p, f) => {
        let h = !!(p.type === m.TAG_START && f.nextIf(m.SYMBOL, "endembed"));
        return h && (u = p), h;
      }).expressions, Bg.Node.isBlockStatement), I(s, t), b(s, r.expect(m.TAG_END, "", n)), s.trimRightEmbed = te(a), s.trimLeftEndembed = u && ee(u), s;
    } };
    var Ng = { name: "extends", parse(e, t) {
      let r = e.tokens, n = new tr(e.matchExpression());
      return I(n, t), b(n, r.expect(m.TAG_END)), n;
    } };
    var _g = W(J());
    var Ig = { name: "filter", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = N(_g.Identifier, t, "filter"), a = e.matchFilterExpression(s);
      r.expect(m.TAG_END);
      let u = r.la(-1), c, p = e.parse((h, D, d) => {
        let x = D.type === m.TAG_START && d.nextIf(m.SYMBOL, "endfilter");
        return x && (c = D), x;
      }).expressions, f = new rr(a, p);
      return I(f, t), b(f, r.expect(m.TAG_END, "", n)), f.trimRightFilter = te(u), f.trimLeftEndfilter = c && ee(c), f;
    } };
    var Rg = { name: "flush", parse(e, t) {
      let r = e.tokens, n = new wr();
      return I(n, t), b(n, r.expect(m.TAG_END)), n;
    } };
    var wa = W(J());
    var Pg = { name: "for", parse(e, t) {
      let r = e.tokens, n = new nr(), s = r.la(-2), a = r.expect(m.SYMBOL);
      if (r.nextIf(m.COMMA)) {
        n.keyTarget = N(wa.Identifier, a, a.text);
        let h = r.expect(m.SYMBOL);
        n.valueTarget = N(wa.Identifier, h, h.text);
      } else
        n.keyTarget = null, n.valueTarget = N(wa.Identifier, a, a.text);
      r.expect(m.OPERATOR, "in"), n.sequence = e.matchExpression(), r.nextIf(m.SYMBOL, "if") && (n.condition = e.matchExpression()), r.expect(m.TAG_END);
      let u = r.la(-1), c, p;
      n.body = e.parse((h, D, d) => {
        let x = D.type === m.TAG_START && (d.test(m.SYMBOL, "else") || d.test(m.SYMBOL, "endfor"));
        return x && d.test(m.SYMBOL, "else") && (c = D), x;
      }), r.nextIf(m.SYMBOL, "else") && (r.expect(m.TAG_END), p = r.la(-1), n.otherwise = e.parse((h, D, d) => D.type === m.TAG_START && d.test(m.SYMBOL, "endfor")));
      let f = r.la(-1);
      return r.expect(m.SYMBOL, "endfor", s), I(n, t), b(n, r.expect(m.TAG_END)), n.trimRightFor = te(u), n.trimLeftElse = !!(c && ee(c)), n.trimRightElse = !!(p && te(p)), n.trimLeftEndfor = ee(f), n;
    } };
    var vl = W(J());
    var qg = { name: "from", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      r.expect(m.SYMBOL, "import");
      do {
        let u = r.expect(m.SYMBOL), c = u;
        r.nextIf(m.SYMBOL, "as") && (c = r.expect(m.SYMBOL));
        let p = new gt(N(vl.Identifier, u, u.text), N(vl.Identifier, c, c.text));
        if (I(p, u), b(p, c), s.push(p), !r.nextIf(m.COMMA))
          break;
      } while (!r.test(m.EOF));
      let a = new ir(n, s);
      return I(a, t), b(a, r.expect(m.TAG_END)), a;
    } };
    var wg = { name: "if", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = e.matchExpression(), a = null;
      r.expect(m.TAG_END);
      let u = r.la(-1), c = new vt(s, e.parse(Sl).expressions), p, f, h, D;
      do {
        if (r.nextIf(m.SYMBOL, "else"))
          p = r.la(-2), r.expect(m.TAG_END), f = r.la(-1), (a || c).alternate = e.parse(i7).expressions;
        else if (r.nextIf(m.SYMBOL, "elseif")) {
          h = r.la(-2), s = e.matchExpression(), r.expect(m.TAG_END), D = r.la(-1);
          let x = e.parse(Sl).expressions;
          a = (a || c).alternate = new vt(s, x), a.trimLeft = ee(h), a.trimRightIf = te(D);
        } else if (r.nextIf(m.SYMBOL, "elif")) {
          h = r.la(-2), s = e.matchExpression(), r.expect(m.TAG_END), D = r.la(-1);
          let x = e.parse(Sl).expressions;
          a = (a || c).alternate = new vt(s, x), a.trimLeft = ee(h), a.trimRightIf = te(D), a.isElif = true;
        }
        if (r.nextIf(m.SYMBOL, "endif"))
          break;
      } while (!r.test(m.EOF));
      let d = r.la(-2);
      return I(c, t), b(c, r.expect(m.TAG_END, "", n)), c.trimRightIf = te(u), c.trimLeftElse = !!(p && ee(p)), c.trimRightElse = !!(f && te(f)), c.trimLeftEndif = ee(d), c;
    } };
    function Sl(e, t, r) {
      if (t.type === m.TAG_START) {
        let n = r.la(0).text;
        return n === "else" || n === "endif" || n === "elseif" || n == "elif";
      }
      return false;
    }
    i(Sl, "matchConsequent");
    function i7(e, t, r) {
      return t.type === m.TAG_START && r.test(m.SYMBOL, "endif");
    }
    i(i7, "matchAlternate");
    var Lg = W(J());
    var kg = { name: "import", parse(e, t) {
      let r = e.tokens, n = e.matchExpression();
      r.expect(m.SYMBOL, "as");
      let s = r.expect(m.SYMBOL), a = new gt(n, N(Lg.Identifier, s, s.text));
      return I(a, t), b(a, r.expect(m.TAG_END)), a;
    } };
    var Mg = { name: "include", parse(e, t) {
      let r = e.tokens, n = new sr(e.matchExpression());
      return r.nextIf(m.SYMBOL, "ignore") && (r.expect(m.SYMBOL, "missing"), n.ignoreMissing = true), r.nextIf(m.SYMBOL, "with") && (n.argument = e.matchExpression()), r.nextIf(m.SYMBOL, "only") && (n.contextFree = true), I(n, t), b(n, r.expect(m.TAG_END)), n;
    } };
    var Fl = W(J());
    var Gg = { name: "macro", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(m.SYMBOL), a = [];
      for (r.expect(m.LPAREN); !r.test(m.RPAREN) && !r.test(m.EOF); ) {
        let D = r.expect(m.SYMBOL);
        a.push(N(Fl.Identifier, D, D.text)), !r.nextIf(m.COMMA) && !r.test(m.RPAREN) && e.error({ title: 'Expected comma or ")"', pos: r.la(0).pos, advice: "The argument list of a macro can only consist of parameter names separated by commas." });
      }
      r.expect(m.RPAREN);
      let u = r.la(0), c, p = e.parse((D, d, x) => {
        let C = !!(d.type === m.TAG_START && x.nextIf(m.SYMBOL, "endmacro"));
        return C && (c = d), C;
      });
      if (r.test(m.SYMBOL)) {
        var f = r.next();
        s.text !== f.text && e.error({ title: `Macro name mismatch, expected "${s.text}" but found "${f.text}"`, pos: f.pos });
      }
      let h = new ur(N(Fl.Identifier, s, s.text), a, p);
      return I(h, t), b(h, r.expect(m.TAG_END, "", n)), h.trimRightMacro = te(u), h.trimLeftEndmacro = ee(c), h;
    } };
    var Cl = W(J());
    var jg = { name: "mount", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, a = null, u = null, c = false, p = 0, f = null;
      if (r.test(m.SYMBOL, "async") && r.la(1).type === m.STRING_START && (c = true, r.next()), r.test(m.STRING_START))
        a = e.matchStringExpression();
      else {
        let O = r.expect(m.SYMBOL);
        s = N(Cl.Identifier, O, O.text), r.nextIf(m.SYMBOL, "from") && (a = e.matchStringExpression());
      }
      r.nextIf(m.SYMBOL, "as") && (u = e.matchExpression()), r.nextIf(m.SYMBOL, "with") && (f = e.matchExpression()), c && r.nextIf(m.SYMBOL, "delay") && (r.expect(m.SYMBOL, "placeholder"), r.expect(m.SYMBOL, "by"), p = Number.parseInt(r.expect(m.NUMBER).text, 10), r.nextIf(m.SYMBOL, "s") ? p *= 1e3 : r.expect(m.SYMBOL, "ms"));
      let h = new Qt(s, a, u, f, c, p), D, d, x, C;
      if (c) {
        if (r.expect(m.TAG_END), D = r.la(-1), h.body = e.parse((O, g, j) => g.type === m.TAG_START && (j.test(m.SYMBOL, "catch") || j.test(m.SYMBOL, "endmount"))), r.nextIf(m.SYMBOL, "catch")) {
          d = r.la(-2);
          let O = r.expect(m.SYMBOL);
          h.errorVariableName = N(Cl.Identifier, O, O.text), r.expect(m.TAG_END), x = r.la(-1), h.otherwise = e.parse((g, j, $) => j.type === m.TAG_START && $.test(m.SYMBOL, "endmount"));
        }
        r.expect(m.SYMBOL, "endmount"), C = r.la(-2);
      }
      return I(h, t), b(h, r.expect(m.TAG_END, "", n)), h.trimRightMount = !!(D && te(D)), h.trimLeftCatch = !!(d && ee(d)), h.trimRightCatch = !!(x && te(x)), h.trimLeftEndmount = !!(C && ee(C)), h;
    } };
    var Ug = W(J());
    var Yg = { name: "set", parse(e, t) {
      let r = e.tokens, n = [], s = [], a, u;
      do {
        let f = r.expect(m.SYMBOL);
        n.push(N(Ug.Identifier, f, f.text));
      } while (r.nextIf(m.COMMA));
      if (r.nextIf(m.ASSIGNMENT))
        do
          s.push(e.matchExpression());
        while (r.nextIf(m.COMMA));
      else
        n.length !== 1 && e.error({ title: "Illegal multi-set", pos: r.la(0).pos, advice: "When using set with a block, you cannot have multiple targets." }), r.expect(m.TAG_END), a = r.la(-1), s[0] = e.parse((f, h, D) => {
          let d = !!(h.type === m.TAG_START && D.nextIf(m.SYMBOL, "endset"));
          return d && (u = h), d;
        }).expressions;
      n.length !== s.length && e.error({ title: "Mismatch of set names and values", pos: t.pos, advice: `When using set, you must ensure that the number of
assigned variable names is identical to the supplied values. However, here I've found
${n.length} variable names and ${s.length} values.` });
      let c = [];
      for (let f = 0, h = n.length; f < h; f++)
        c[f] = new or(n[f], s[f]);
      let p = new lr(c);
      return I(p, t), b(p, r.expect(m.TAG_END)), p.trimRightSet = !!(a && te(a)), p.trimLeftEndset = !!(u && ee(u)), p;
    } };
    var Vg = { name: "spaceless", parse(e, t) {
      let r = e.tokens, n = r.la(-2);
      r.expect(m.TAG_END);
      let s = r.la(-1), a, u = e.parse((p, f, h) => {
        let D = !!(f.type === m.TAG_START && h.nextIf(m.SYMBOL, "endspaceless"));
        return a = f, D;
      }).expressions, c = new cr(u);
      return I(c, t), b(c, r.expect(m.TAG_END, "", n)), r.expect(m.SYMBOL, "endfor", n), c.trimRightSpaceless = te(s), c.trimLeftEndspaceless = !!(a && ee(a)), c;
    } };
    var La = W(J());
    var Kg = { name: "url", parse(e, t) {
      let r = e.tokens, n = new ar(e.matchExpression()), s = [];
      for (; !r.test(m.EOF) && !r.test(m.TAG_END); ) {
        if (r.test(m.SYMBOL) && r.lat(1) === m.ASSIGNMENT) {
          let a = r.next();
          r.next();
          let u = e.matchExpression(), c = new La.NamedArgumentExpression(N(La.Identifier, a, a.text), u);
          ve(c, u), s.push(c);
        } else
          s.push(e.matchExpression());
        r.test(m.SYMBOL) && r.lat(0) === "as" && (r.next(), n.as = this.matchExpression());
      }
      return n.arguments = s, I(n, t), b(n, r.expect(m.TAG_END)), n;
    } };
    var Bl = W(J());
    var Wg = { name: "use", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      if (r.nextIf(m.SYMBOL, "with"))
        do {
          let u = r.expect(m.SYMBOL), c = N(Bl.Identifier, u, u.text), p = c;
          if (r.nextIf(m.SYMBOL, "as")) {
            let h = r.expect(m.SYMBOL);
            p = N(Bl.Identifier, h, h.text);
          }
          let f = new pr(c, p);
          Ye(f, c), ve(f, p), s.push(f);
        } while (r.nextIf(m.COMMA));
      let a = new fr(n, s);
      return I(a, t), b(a, r.expect(m.TAG_END)), a;
    } };
    var ka = W(J());
    var Hg = { name: "with", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s, a, u, c = [];
      for (; !r.test(m.EOF) && !r.test(m.TAG_END); )
        if (r.test(m.SYMBOL) && r.lat(1) === m.ASSIGNMENT) {
          let p = r.next();
          r.next();
          let f = e.matchExpression(), h = new ka.NamedArgumentExpression(N(ka.Identifier, p, p.text), f);
          ve(h, f), c.push(h);
        } else {
          let p = r.next();
          e.error({ title: "with arguments mismatch", pos: p.pos, advice: "eg: {% with alpha=1 beta=2 %}" });
        }
      return (a = r.nextIf(m.TAG_END)) ? s = new Mt(e.parse((p, f, h) => {
        let D = !!(f.type === m.TAG_START && h.nextIf(m.SYMBOL, "endwith"));
        return D && (u = f), D;
      }).expressions) : s = new Mt(new PrintExpressionStatement(e.matchExpression())), s.arguments = c, I(s, t), b(s, r.expect(m.TAG_END, null, n)), s.trimRightBlock = a && te(a), s.trimLeftEndblock = !!(u && ee(u)), s;
    } };
    var Ma = { tags: [TA, gA, vA, Og, Ng, Ig, Rg, Pg, qg, wg, kg, Mg, Kg, Hg, Gg, Yg, Vg, Wg, jg], unaryOperators: Ko, binaryOperators: Bi, tests: Sn };
    var Ua = W(require("path"));
    var Bv = W(Cv());
    var Ya = i((e) => e.twigMelodyPlugins && Array.isArray(e.twigMelodyPlugins) ? e.twigMelodyPlugins.map((t) => t.trim()) : [], "getPluginPathsFromOptions");
    var H7 = i(() => {
      let e = __dirname.split(Ua.default.sep), t = e.length - 1, r = e[t];
      for (; r !== "node_modules" && t > 0; )
        t--, r = e[t];
      t === 0 && (t = e.length - 2);
      let n = e.slice(0, t), s = Ua.default.join(...n), a = __dirname.indexOf(s);
      return __dirname.slice(0, a) + s;
    }, "getProjectRoot");
    var X7 = i((pluginPath) => {
      try {
        let projectRoot = H7(), requirePath = Bv.default.sync(Ua.default.resolve(projectRoot, pluginPath));
        return eval("require")(requirePath);
      } catch (e) {
        console.error("Could not load plugin path " + pluginPath);
        return;
      }
    }, "tryLoadPlugin");
    var ql = i((e) => {
      let t = [];
      return e && Array.isArray(e) && e.forEach((r) => {
        let n = X7(r);
        n && t.push(n);
      }), t;
    }, "loadPlugins");
    var bv = i((e) => {
      let t = [];
      return ql(e).forEach((n) => {
        t = t.concat(n.melodyExtensions);
      }), t.filter((n) => !!n);
    }, "getAdditionalMelodyExtensions");
    var R = Symbol("STRING_NEEDS_QUOTES");
    var ji = Symbol("OVERRIDE_QUOTE_CHAR");
    var U = Symbol("EXPRESSION_NEEDED");
    var St = Symbol("INSIDE_OF_STRING");
    var Ui = Symbol("FILTER_BLOCK");
    var jr = Symbol("PRESERVE_LEADING_WHITESPACE");
    var Ur = Symbol("PRESERVE_TRAILING_WHITESPACE");
    var Yi = Symbol("NEWLINES_ONLY");
    var Yr = Symbol("GROUP_TOP_LEVEL_LOGICAL");
    var Vr = Symbol("IS_ROOT_LOGICAL_EXPRESSION");
    var be = W(J());
    function Vi(e) {
      if (typeof e != "string") {
        if (Array.isArray(e)) {
          for (let t of e)
            Vi(t);
          return;
        }
        if (!(e && typeof e.type == "string"))
          throw new Error("Value " + JSON.stringify(e) + " is not a valid document");
      }
    }
    i(Vi, "assertDoc");
    function E(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          Vi(t);
      return { type: "concat", parts: e };
    }
    i(E, "concat");
    function P(e) {
      return process.env.NODE_ENV !== "production" && Vi(e), { type: "indent", contents: e };
    }
    i(P, "indent");
    function F(e, t = {}) {
      return process.env.NODE_ENV !== "production" && Vi(e), { type: "group", id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
    }
    i(F, "group");
    function Rn(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          Vi(t);
      return { type: "fill", parts: e };
    }
    i(Rn, "fill");
    var Ov = { type: "break-parent" };
    var $7 = { type: "line", hard: true };
    var J7 = { type: "line", hard: true, literal: true };
    var B = { type: "line" };
    var H = { type: "line", soft: true };
    var q = E([$7, Ov]);
    var dte = E([J7, Ov]);
    var Ete = { type: "cursor", placeholder: Symbol("cursor") };
    function ue(e, t) {
      let r = [];
      for (let n = 0; n < t.length; n++)
        n !== 0 && r.push(e), r.push(t[n]);
      return E(r);
    }
    i(ue, "join");
    var z7 = ["title", "h1", "h2", "h3", "h4", "h5", "h6", "a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dd", "dfn", "em", "i", "img", "kbd", "label", "mark", "q", "s", "u", "samp", "strike", "strong", "sup", "sub", "small", "span", "time", "tt", "var"];
    var wl = ["ObjectExpression", "BinaryExpression", "ConditionalExpression", "ArrayExpression"];
    var Q7 = i((e) => {
      wl.push(e);
    }, "registerContractableNodeType");
    var Ki = i((e) => {
      for (let t = 0; t < wl.length; t++) {
        let n = "is" + wl[t];
        if (be.Node[n] && be.Node[n].call(null, e))
          return true;
      }
      return !!be.Node.isUnaryLike(e);
    }, "isContractableNodeType");
    var Ll = i((e) => be.Node.isUnaryLike(e) && e.operator === "not", "isNotExpression");
    var Wi = i((e) => be.Node.isBinaryExpression(e) || be.Node.isConditionalExpression(e) || be.Node.isUnaryLike(e), "isMultipartExpression");
    var _v = i((e, t, r = false) => {
      let n = e.stack.length - 1;
      for (r || (n -= 1); n >= 0; ) {
        let s = e.stack[n];
        if (qn(s) && t(s) === false)
          return;
        n--;
      }
    }, "walkParents");
    var Ft = i((e, t, r) => {
      let n = e.stack.length - 2;
      for (; n >= 0; ) {
        let s = e.stack[n];
        if (qn(s) && s[t] !== void 0)
          return s[t];
        n--;
      }
      return r;
    }, "firstValueInAncestorChain");
    var Pn = i((e) => e && e.twigSingleQuote ? "'" : '"', "quoteChar");
    var kl = i((e) => typeof e == "string" && /^[A-Z][0-9A-Z_$]*$/i.test(e), "isValidIdentifierName");
    var qn = i((e) => {
      let t = e.__proto__;
      return typeof e == "object" && t.type && typeof be.Node["is" + t.type] == "function";
    }, "isMelodyNode");
    var dr = i((e) => {
      let t = e.stack.length - 2;
      for (; t >= 0; ) {
        let r = e.stack[t];
        if (qn(r))
          return r;
        t--;
      }
      return null;
    }, "findParentNode");
    var Ml = i((e) => dr(e) === null, "isRootNode");
    var Z7 = i((e, t) => Iv(e, t) || Va(e, t), "testCurrentAndParentNodes");
    var Iv = i((e, t) => {
      let r = e.stack.length - 1;
      if (r >= 0) {
        let n = e.stack[r];
        return qn(n) && t(n);
      }
      return false;
    }, "testCurrentNode");
    var Va = i((e, t) => {
      let r = e.stack.length - 2;
      for (; r >= 0; ) {
        let n = e.stack[r];
        if (qn(n) && t(n))
          return true;
        r--;
      }
      return false;
    }, "someParentNode");
    var Ka = i((e) => {
      let t = false;
      return _v(e, (r) => {
        if (r.tagName != null)
          return false;
        if (r[St] === true)
          return t = St, false;
        if (r[U] === true)
          return t = U, false;
        if (r[U] === false || r[St] === false)
          return false;
      }), t;
    }, "shouldExpressionsBeWrapped");
    var ke = i((e, t, r = {}) => {
      let n = Ka(e);
      return n === U ? Rv(t, r.trimLeft, r.trimRight) : n === St && Wa(t), t;
    }, "wrapExpressionIfNeeded");
    var Rv = i((e, t = false, r = false) => {
      let n = t ? "{{-" : "{{", s = r ? "-}}" : "}}";
      e.unshift(n, B), e.push(B, s);
    }, "wrapInEnvironment");
    var Wa = i((e) => {
      e.unshift("#{"), e.push("}");
    }, "wrapInStringInterpolation");
    var Kr = i((e) => typeof e == "string" && e.trim() === "", "isWhitespaceOnly");
    var lt = i((e) => (e.match(/\n/g) || "").length, "countNewlines");
    var Ha = i((e) => lt(e) === 0, "hasNoNewlines");
    var eM = i((e) => lt(e) >= 2, "hasAtLeastTwoNewlines");
    var Pv = i((e) => e.split(/([\s\n]+)/gm), "splitByWhitespace");
    var qv = i((e, t = " ") => Pv(e).filter((r) => !Kr(r)).join(t), "unifyWhitespace");
    var tM = i((e) => {
      let t = lt(e);
      return t > 0 ? t > 1 ? [q, q] : [q] : [B];
    }, "normalizeWhitespace");
    var Gl = i((e, t, r) => {
      let n = Pv(e), s = [], a = [], u = n.length;
      return n.forEach((c, p) => {
        if (c !== "")
          if (Kr(c)) {
            let f = s.length === 0 && a.length === 0, h = p === u - 1 || p === u - 2 && n[u - 1] === "";
            f && t || h && r ? a.push(...tM(c)) : !f && !h && (lt(c) <= 1 ? a.push(B) : (s.push(a), a = []));
          } else
            a.push(c);
      }), a.length > 0 && s.push(a), s.map((c) => Rn(c));
    }, "createTextGroups");
    var wn = i((e) => be.Node.isPrintTextStatement(e) && Kr(e.value.value) || be.Node.isStringLiteral(e) && Kr(e.value), "isWhitespaceNode");
    var jl = i((e) => be.Node.isSequenceExpression(e) && e.expressions.length === 0, "isEmptySequence");
    var Ln = i((e) => {
      if (!Array.isArray(e))
        return e;
      let t = [];
      return e.forEach((r, n) => {
        (n === 0 || n === e.length - 1) && wn(r) || t.push(r);
      }), t;
    }, "removeSurroundingWhitespace");
    var Hi = i((e, ...t) => {
      let r = e;
      return t.forEach((n) => {
        r = r[n];
      }), r;
    }, "getDeepProperty");
    var wv = i((e, t, ...r) => {
      let n = e, s = r.length;
      for (let a = 0; a < s - 1; a++)
        n = n[r[a]];
      n[r[s - 1]] = t;
    }, "setDeepProperty");
    var _e = i((e, t, r, ...n) => {
      let s = Hi(e, ...n);
      wv(e, Ln(s), ...n);
      let a = Mn(e, t, r, ...n);
      return P(F(E([q, ...a])));
    }, "printChildBlock");
    var rM = i((e) => {
      e.length > 0 && e.push(q);
    }, "addNewlineIfNotEmpty");
    var nM = i((e) => e.endsWith("-->"), "endsWithHtmlComment");
    var iM = i((e, t) => (r) => {
      let n = r;
      return n.startsWith(e) && (n = n.slice(e.length)), n.endsWith(t) && (n = n.slice(0, 0 - t.length)), n;
    }, "stripCommentChars");
    var Xa = iM("<!--", "-->");
    var $a = i((e) => {
      let t = e;
      return t.startsWith("{#") && (t = t.slice(2)), t.startsWith("-") && (t = t.slice(1)), t.endsWith("#}") && (t = t.slice(0, -2)), t.endsWith("-") && (t = t.slice(0, -1)), t;
    }, "stripTwigCommentChars");
    var Ja = i((e) => {
      let t = Xa(e);
      return "<!-- " + qv(t) + " -->";
    }, "normalizeHtmlComment");
    var za = i((e, t, r) => {
      let n = $a(e), s = t ? "{#-" : "{#", a = r ? "-#}" : "#}";
      return s + " " + qv(n) + " " + a;
    }, "normalizeTwigComment");
    var Xi = i((e) => (t) => t.constructor.name === "HtmlComment" && t.value.value && Ja(t.value.value) === "<!-- " + e + " -->", "isHtmlCommentEqualTo");
    var $i = i((e) => (t) => t.constructor.name === "TwigComment" && t.value.value && za(t.value.value) === "{# " + e + " #}", "isTwigCommentEqualTo");
    var sM = i((e) => {
      if (!be.Node.isPrintTextStatement(e))
        return false;
      let t = typeof e.value.value == "string" && e.value.value.trim();
      return !nM(t);
    }, "isInlineTextStatement");
    var Ji = i((e) => be.Node.isElement(e) && z7.indexOf(e.name) >= 0 || be.Node.isPrintExpressionStatement(e) || sM(e), "isInlineElement");
    var Nv = i((e) => be.Node.isTwigComment(e) || be.Node.isHtmlComment(e), "isCommentNode");
    var aM = i((e) => e.map((t) => Ji(t)), "createInlineMap");
    var uM = i((e) => {
      e.forEach((t) => {
        be.Node.isPrintTextStatement(t) && (t[Yi] = true);
      });
    }, "textStatementsOnlyNewlines");
    var oM = i((e, t) => {
      t.forEach((r, n) => {
        let s = n > 0 && Nv(t[n - 1]), a = n < t.length - 1 && Nv(t[n + 1]);
        be.Node.isPrintTextStatement(r) && ((n > 0 && e[n - 1] || s) && (r[jr] = true), (n < e.length - 1 && e[n + 1] || a) && (r[Ur] = true));
      });
    }, "addPreserveWhitespaceInfo");
    var kn = i((e) => P(E([q, e])), "indentWithHardline");
    var Mn = i((e, t, r, ...n) => {
      let s = Hi(e, ...n), a = aM(s);
      oM(a, s), uM(s);
      let u = t.map(r, ...n), c = [], p = [];
      return u.forEach((f, h) => {
        a[h] ? c.push(f) : (c.length > 0 && (p.push(Rn(c)), c = []), p.length > 0 && !a[h - 1] && rM(p), p.push(f));
      }), c.length > 0 && p.push(Rn(c)), p;
    }, "printChildGroups");
    var Lv = W(J());
    var lM = { ",": true };
    var kv = i((e, t, r) => {
      let s = [e.trimLeft ? "{%-" : "{%", " ", e.tagName], a = t.map(r, "parts");
      a.length > 0 && s.push(" ", a[0]);
      let u = [];
      for (let p = 1; p < e.parts.length; p++) {
        let f = e.parts[p], D = Lv.Node.isGenericToken(f) && lM[f.tokenText] ? "" : B;
        u.push(D, a[p]);
      }
      e.parts.length > 1 && s.push(P(E(u)));
      let c = e.trimRight ? "-%}" : "%}";
      return s.push(B, c), F(E(s));
    }, "printSingleTwigTag");
    var Qa = "ORIGINAL_SOURCE";
    var cM = i((e, ...t) => {
      let r = new vn(new Ci(e));
      for (let n of t)
        n.unaryOperators && r.addOperators(...n.unaryOperators.map((s) => s.text)), n.binaryOperators && r.addOperators(...n.binaryOperators.map((s) => s.text));
      return r;
    }, "createConfiguredLexer");
    var pM = i((e, ...t) => {
      for (let r of t) {
        if (r.tags)
          for (let n of r.tags)
            e.addTag(n);
        if (r.unaryOperators)
          for (let n of r.unaryOperators)
            e.addUnaryOperator(n);
        if (r.binaryOperators)
          for (let n of r.binaryOperators)
            e.addBinaryOperator(n);
        if (r.tests)
          for (let n of r.tests)
            e.addTest(n);
      }
    }, "applyParserExtensions");
    var fM = i((e, t, ...r) => {
      let n = new yn(new Tn(cM(e, ...r), { ignoreWhitespace: true, ignoreComments: false, ignoreHtmlComments: false, applyWhitespaceTrimming: false }), { ignoreComments: false, ignoreHtmlComments: false, ignoreDeclarations: false, decodeEntities: false, multiTags: t, allowUnknownTags: true });
      return pM(n, ...r), n;
    }, "createConfiguredParser");
    var dM = i((e = []) => e.reduce((t, r) => {
      let n = r.split(",");
      return t[n[0].trim()] = n.slice(1).map((s) => s.trim()), t;
    }, {}), "getMultiTagConfig");
    var Mv = i((e, t, r) => {
      let n = Ya(r), s = dM(r.twigMultiTags || []), a = [Ma, ...bv(n)], c = fM(e, s, ...a).parse();
      return c[Qa] = e, c;
    }, "parse");
    var Gv = i((e, t, r) => E([t.call(r, "name"), " as ", t.call(r, "alias")]), "printAliasExpression");
    var jv = i((e, t, r) => {
      e[R] = true;
      let n = t.map(r, "elements"), s = E([H, ue(E([",", B]), n)]);
      return F(E(["[", P(s), H, "]"]));
    }, "printArrayExpression");
    var Za = W(J());
    var EM = i((e) => ["id", "class", "type"].indexOf(e) > -1, "mayCorrectWhitespace");
    var mM = i((e) => e.replace(/\s+/g, " ").trim(), "sanitizeWhitespace");
    var hM = i((e, t, r, ...n) => {
      let s = [], a = e, u = n;
      for (; Za.Node.isBinaryConcatExpression(a); )
        s.unshift(t.call(r, ...u, "right")), u.push("left"), a = a.left;
      return s.unshift(t.call(r, ...u)), E(s);
    }, "printConcatenatedString");
    var Uv = i((e, t, r = r) => {
      e[U] = false;
      let n = [t.call(r, "name")];
      if (e[U] = true, e[R] = false, e.value) {
        if (n.push('="'), Za.Node.isBinaryConcatExpression(e.value) && e.value.wasImplicitConcatenation)
          n.push(hM(e.value, t, r, "value"));
        else {
          let s = Za.Node.isStringLiteral(e.value);
          EM(e.name.name) && s && (e.value.value = mM(e.value.value)), n.push(t.call(r, "value"));
        }
        n.push('"');
      }
      return E(n);
    }, "printAttribute");
    var DM = i((e, t) => E([e.trimLeft ? "{%-" : "{%", " autoescape ", Pn(t), e.escapeType || "html", Pn(t), " ", e.trimRightAutoescape ? "-%}" : "%}"]), "createOpener");
    var Yv = i((e, t, r, n) => {
      let s = [DM(e, n)];
      return s.push(_e(e, t, r, "expressions")), s.push(q, e.trimLeftEndautoescape ? "{%-" : "{%", " endautoescape ", e.trimRight ? "-%}" : "%}"), E(s);
    }, "printAutoescapeBlock");
    var Er = W(J());
    var Vv = Symbol("ALREADY_INDENTED");
    var yM = Symbol("OPERATOR_PRECEDENCE");
    var AM = [".."];
    var Ul = Ma.binaryOperators.reduce((e, t) => (e[t.text] = t.precedence, e), {});
    var xM = i((e, t, r, n) => {
      e[R] = false, e[St] = true;
      let s = ['"'], a = e, u = [];
      for (; Er.Node.isBinaryConcatExpression(a); )
        s.unshift(t.call(r, ...u, "right")), u.push("left"), a = a.left;
      return s.unshift(t.call(r, ...u)), s.unshift('"'), E(s);
    }, "printInterpolatedString");
    var TM = i((e) => AM.indexOf(e) < 0, "operatorNeedsSpaces");
    var gM = i((e) => e.operator === "or" || e.operator === "and", "hasLogicalOperator");
    var Kv = i((e, t) => {
      let r = e[t], n = Er.Node.isBinaryExpression(r), s = Ul[e.operator], a = n ? Ul[e[t].operator] : Number.MAX_SAFE_INTEGER;
      return a < s || a > s && n && gM(r) || Er.Node.isFilterExpression(r) || Er.Node.isBinaryConcatExpression(e) && Er.Node.isConditionalExpression(r);
    }, "otherNeedsParentheses");
    var vM = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = Er.Node.isBinaryExpression(e.right), s = ["and", "or"].indexOf(e.operator) > -1, a = TM(e.operator), u = Ft(t, Vv, false);
      !u && n && (e.right[Vv] = true);
      let c = Ft(t, Vr, false), f = dr(t)[Yr] !== false;
      c || (e[Vr] = true);
      let h = c ? Ft(t, "operator") : "";
      e[yM] = Ul[e.operator];
      let D = t.call(r, "left"), d = t.call(r, "right"), x = [], C = Kv(e, "left"), O = Kv(e, "right");
      C && x.push("("), x.push(D), C && x.push(")");
      let g = [a ? B : H, e.operator, a ? " " : ""];
      O && g.push("("), g.push(d), O && g.push(")");
      let j = u ? E(g) : P(E(g)), $ = E(ke(t, [...x, j], e)), re = !c && f, Me = s && e.operator !== h;
      return re || !s || c && Me ? F($) : $;
    }, "_printBinaryExpression");
    var eu = i((e, t, r, n) => Er.Node.isBinaryConcatExpression(e) && e.wasImplicitConcatenation ? xM(e, t, r, n) : vM(e, t, r), "printBinaryExpression");
    var Wv = W(J());
    var Hv = i((e, t, r, n) => {
      e[U] = false;
      let s = Array.isArray(e.body), a = n.twigOutputEndblockName === true;
      if (s) {
        let u = t.call(r, "name"), p = [E([e.trimLeft ? "{%-" : "{%", " block ", u, e.trimRightBlock ? " -%}" : " %}"])];
        if (e.body.length > 0) {
          let h = _e(e, t, r, "body");
          p.push(h);
        }
        return p.push(q), p.push(e.trimLeftEndblock ? "{%-" : "{%", " endblock", a ? E([" ", u]) : "", e.trimRight ? " -%}" : " %}"), F(E(p));
      } else if (Wv.Node.isPrintExpressionStatement(e.body)) {
        let u = [e.trimLeft ? "{%-" : "{%", " block ", t.call(r, "name"), " ", t.call(r, "body", "value"), e.trimRight ? " -%}" : " %}"];
        return E(u);
      }
    }, "printBlockStatement");
    var Xv = W(J());
    var $v = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = t.map(r, "arguments"), s = [t.call(r, "callee"), "("];
      return e.arguments.length === 0 ? s.push(")") : e.arguments.length === 1 && Xv.Node.isObjectExpression(e.arguments[0]) ? s.push(n[0], ")") : s.push(P(E([H, ue(E([",", B]), n)])), H, ")"), ke(t, s, e), F(E(s));
    }, "printCallExpression");
    var Jv = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = [B, "?"];
      e.consequent && n.push(E([" ", t.call(r, "consequent")])), e.alternate && n.push(B, ": ", t.call(r, "alternate"));
      let s = [t.call(r, "test"), P(E(n))];
      return ke(t, s, e), F(E(s));
    }, "printConditionalExpression");
    var zv = i((e, t, r) => {
      e[R] = true, e[ji] = '"';
      let n = "<!" + (e.declarationType || "").toUpperCase(), s = t.map(r, "parts");
      return Rn([n, " ", ue(" ", s), ">"]);
    }, "printDeclaration");
    var Qv = i((e, t, r) => E([e.trimLeft ? "{%-" : "{%", " do ", t.call(r, "value"), e.trimRight ? " -%}" : " %}"]), "printDoStatement");
    var Yl = i((e, t, r) => {
      let n = "<" + e.name, s = SM(t, r, "", "attributes"), a = e.selfClosing ? " />" : ">";
      return e.attributes && e.attributes.length > 0 ? E([n, P(E([" ", s])), a]) : E([n, a]);
    }, "printOpeningTag");
    var SM = i((e, t, r, n) => ue(E([r, B]), e.map(t, n)), "printSeparatedList");
    var Zv = i((e, t, r) => {
      e[U] = true;
      let n = F(Yl(e, t, r));
      e[U] = false, e[R] = false;
      let s = e.name.toLowerCase();
      if (s == "script" || s == "style") {
        let { value: u } = e.children?.[0]?.value || {};
        return u ? [n, u, E(["</", e.name, ">"])] : [n, E(["</", e.name, ">"])];
      }
      if (!e.selfClosing) {
        e.children = Ln(e.children);
        let u = Mn(e, t, r, "children"), c = E(["</", e.name, ">"]), p = [n], f = E(u);
        if (Ji(e))
          p.push(P(E([H, f])), H);
        else {
          let h = [];
          var a = e.children.findIndex((D) => D.type != "PrintExpressionStatement" && D.type != "PrintTextStatement") == -1;
          u.length > 0 && (a || h.push(q)), h.push(f), p.push(P(E(h))), u.length > 0 && (a || p.push(q));
        }
        return p.push(c), Ji(e) ? F(E(p)) : E(p);
      }
      return n;
    }, "printElement");
    var FM = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " embed ", t.call(r, "parent")];
      return e.argument && n.push(P(E([B, "with ", t.call(r, "argument")]))), n.push(E([B, e.trimRightEmbed ? "-%}" : "%}"])), F(E(n));
    }, "printOpener");
    var eS = i((e, t, r) => {
      let n = _e(e, t, r, "blocks"), s = FM(e, t, r), a = E([q, e.trimLeftEndembed ? "{%-" : "{%", " endembed ", e.trimRight ? "-%}" : "%}"]);
      return E([s, n, a]);
    }, "printEmbedStatement");
    var tS = W(J());
    var rS = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = e.trimLeft ? "{{-" : "{{", s = e.trimRight ? "-}}" : "}}", a = Ki(e.value) && !tS.Node.isObjectExpression(e.value), u = a ? " " : B, c = E([u, t.call(r, "value")]), p = a ? c : P(c);
      return F(E([n, p, u, s]));
    }, "printExpressionStatement");
    var nS = i((e, t, r) => (e[R] = true, E([e.trimLeft ? "{%-" : "{%", " extends ", t.call(r, "parentName"), e.trimRight ? " -%}" : " %}"])), "printExtendsStatement");
    var CM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%- " : "{% "], s = t.call(r, "filterExpression");
      return n.push(s, B, e.trimRightFilter ? "-%}" : "%}"), F(E(n));
    }, "printOpeningGroup");
    var iS = i((e, t, r) => {
      e[Ui] = true;
      let n = CM(e, t, r), s = _e(e, t, r, "body"), a = E([q, e.trimLeftEndfilter ? "{%-" : "{%", " endfilter ", e.trimRight ? "-%}" : "%}"]);
      return E([n, s, a]);
    }, "printFilterBlockStatement");
    var Vl = W(J());
    var BM = i((e) => Va(e, (t) => t[Ui] === true), "isInFilterBlock");
    var bM = i((e, t, r, n) => {
      if (!(e.arguments && e.arguments.length > 0))
        return "";
      let a = t.map(r, ...n, "arguments");
      return e.arguments.length === 1 && Vl.Node.isObjectExpression(e.arguments[0]) ? e.isDjango ? F(E([":", a[0]])) : F(E(["(", a[0], ")"])) : e.isDjango ? F(E([":", P(E([H, ue(E([",", B]), a)])), H])) : F(E(["(", P(E([H, ue(E([",", B]), a)])), H, ")"]));
    }, "printArguments");
    var sS = i((e, t, r, n) => {
      let s = bM(e, t, r, n), a = t.call(r, ...n, "name");
      return E([a, s]);
    }, "printOneFilterExpression");
    var OM = i((e, t = "") => ue(E([t === "" ? H : B, "|", t]), e), "joinFilters");
    var aS = i((e, t, r, n) => {
      let s = e;
      e[U] = false, e[R] = true;
      let a = n.twigFollowOfficialCodingStandards === false, u = a ? " " : "", c = ["target"], p = [sS(e, t, r, [])];
      for (; Vl.Node.isFilterExpression(s.target); )
        p.unshift(sS(s.target, t, r, c)), c.push("target"), s = s.target;
      let f = t.call(r, ...c), h = BM(t), D = Wi(Hi(e, ...c)), d = [];
      if (D && d.push("("), d.push(f), D && d.push(")"), h && (d.push(E([" ", p[0]])), p = p.slice(1)), p.length === 1)
        d.push(`${u}|${u}`, p[0]);
      else if (p.length > 1) {
        let C = E([a ? B : H, `|${u}`, OM(p, u)]);
        d.push(P(C));
      }
      let x = Ka(t);
      return x === U ? (d.push(" }}"), d.unshift("{{ ")) : x === St && Wa(d), F(E(d));
    }, "printFilterExpression");
    var uS = i((e, t, r) => {
      let n = e.trimLeft ? "-" : "", s = e.trimRight ? "-" : "";
      return `{%${n} flush ${s}%}`;
    }, "printFlushStatement");
    var NM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " for "];
      return e.keyTarget && n.push(t.call(r, "keyTarget"), ", "), n.push(t.call(r, "valueTarget"), " in ", t.call(r, "sequence")), e.condition && n.push(P(E([B, "if ", t.call(r, "condition")]))), n.push(E([" ", e.trimRightFor ? "-%}" : "%}"])), F(E(n));
    }, "printFor");
    var oS = i((e, t, r) => {
      e[U] = false;
      let n = [NM(e, t, r)], s = e.body.expressions.length === 0 || e.body.expressions.length === 1 && wn(e.body.expressions[0]), a = t.call(r, "body");
      if ((!s || e.otherwise) && n.push(kn(a)), e.otherwise) {
        n.push(q, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}");
        let u = t.call(r, "otherwise");
        n.push(kn(u));
      }
      return n.push(s ? "" : q, e.trimLeftEndfor ? "{%-" : "{%", " endfor ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printForStatement");
    var _M = i((e) => {
      let t = [e.key.name];
      return e.key.name !== e.alias.name && t.push(" as ", e.alias.name), E(t);
    }, "printImportDeclaration");
    var lS = i((e, t, r) => {
      e[R] = true;
      let n = e.imports.map(_M), s = P(E([B, ue(E([",", B]), n)]));
      return F(E([e.trimLeft ? "{%-" : "{%", " from ", t.call(r, "source"), " import", s, B, e.trimRight ? "-%}" : "%}"]));
    }, "printFromStatement");
    var cS = i((e, t, r) => e.tokenText, "printGenericToken");
    var pS = W(J());
    var fS = i((e, t, r) => {
      e[R] = true;
      let s = [kv(e, t, r)], a = t.map(r, "sections");
      return e.sections.forEach((u, c) => {
        pS.Node.isGenericTwigTag(u) ? s.push(E([q, a[c]])) : jl(u) || s.push(kn(a[c]));
      }), E(s);
    }, "printGenericTwigTag");
    var dS = i((e, t, r) => {
      let n = Xa(e.value.value || "");
      return lt(n) === 0 ? Ja(n) : E(["<!-- ", n, " -->"]);
    }, "printHtmlComment");
    var ES = i((e, t) => {
      e[U] = false;
      let r = [e.name];
      ke(t, r, e);
      let n = E(r);
      return r.length === 1 ? n : F(n);
    }, "printIdentifier");
    var zi = W(J());
    var mS = Symbol("IS_ELSEIF");
    var hS = i((e, t, r) => {
      e[U] = false;
      let n = Array.isArray(e.alternate) && e.alternate.length > 0, s = zi.Node.isIfStatement(e.alternate), a = e[mS] === true, u = e.consequent.length === 0, c = e.consequent.length === 1, p = e.consequent[0], f = !a && !e.alternate && (u || c && !zi.Node.isElement(p) && (!zi.Node.isPrintTextStatement(p) || Ha(p.value.value)));
      c && zi.Node.isPrintTextStatement(p) && Ha(p.value.value) && (p[jr] = true, p[Ur] = true);
      let h = F(E([e.trimLeft ? "{%- " : "{% ", a ? e.isElif ? "elif" : "elseif" : "if", P(E([B, t.call(r, "test")])), " ", e.trimRightIf ? "-%}" : "%}"])), D = f ? u ? "" : t.call(r, "consequent", "0") : _e(e, t, r, "consequent"), d = [h, D];
      return n ? (d.push(q, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}"), d.push(_e(e, t, r, "alternate"))) : s && (e.alternate[mS] = true, d.push(q), d.push(t.call(r, "alternate"))), a || d.push(f ? "" : q, e.trimLeftEndif ? "{%-" : "{%", " endif ", e.trimRight ? "-%}" : "%}"), E(d);
    }, "printIfStatement");
    var DS = i((e, t, r) => (e[R] = true, F(E([e.trimLeft ? "{%-" : "{%", " import ", t.call(r, "key"), P(E([B, "as ", t.call(r, "alias")])), B, e.trimRight ? "-%}" : "%}"]))), "printImportDeclaration");
    var yS = i((e, t, r) => {
      e[R] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " include ", t.call(r, "source")];
      if (e.argument) {
        let s = t.call(r, "argument");
        n.push(" with "), n.push(s);
      }
      return e.contextFree && n.push(" only"), n.push(e.trimRight ? " -%}" : " %}"), F(E(n));
    }, "printIncludeStatement");
    var IM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " macro ", t.call(r, "name"), "("], s = t.map(r, "arguments"), a = ue(E([",", B]), s);
      return n.push(P(E([H, a]))), n.push(")", B, e.trimRightMacro ? "-%}" : "%}"), F(E(n));
    }, "printOpener");
    var AS = i((e, t, r) => {
      let n = [IM(e, t, r)];
      return n.push(P(E([q, t.call(r, "body")]))), n.push(q, e.trimLeftEndmacro ? "{%-" : "{%", " endmacro ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printMacroDeclarationStatement");
    var xS = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = [t.call(r, "object")];
      return n.push(e.computed ? "[" : "."), n.push(t.call(r, "property")), e.computed && n.push("]"), ke(t, n, e), F(E(n));
    }, "printMemberExpression");
    var RM = i((e) => "" + e / 1e3 + "s", "formatDelay");
    var PM = i((e, t, r) => {
      let n = [], s = [e.trimLeft ? "{%-" : "{%", " mount"];
      e.async === true && s.push(" async"), e.name && s.push(" ", t.call(r, "name")), e.name && e.source && s.push(" from"), e.source && s.push(" ", t.call(r, "source")), e.key && s.push(P(E([B, "as ", t.call(r, "key")]))), n.push(F(E(s))), e.argument && n.push(P(E([" with ", t.call(r, "argument")]))), e.delayBy && n.push(P(E([B, "delay placeholder by ", RM(e.delayBy)])));
      let a = e.body || e.otherwise ? e.trimRightMount : e.trimRight;
      return n.push(E([B, a ? "-%}" : "%}"])), F(E(n));
    }, "buildOpener");
    var qM = i((e, t) => P(E([q, e.call(t, "body")])), "buildBody");
    var wM = i((e, t, r) => {
      let n = [];
      return n.push(E([q, e.trimLeftCatch ? "{%-" : "{%", " catch "])), e.errorVariableName && n.push(t.call(r, "errorVariableName"), " "), n.push(e.trimRightCatch ? "-%}" : "%}"), n.push(P(E([q, t.call(r, "otherwise")]))), E(n);
    }, "buildErrorHandling");
    var TS = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = [PM(e, t, r)];
      return e.body && n.push(qM(t, r)), e.otherwise && n.push(wM(e, t, r)), (e.body || e.otherwise) && n.push(E([q, e.trimLeftEndmount ? "{%-" : "{%", " endmount ", e.trimRight ? "-%}" : "%}"])), E(n);
    }, "printMountStatement");
    var gS = i((e, t, r) => {
      e[R] = true;
      let n = t.call(r, "name"), s = t.call(r, "value");
      return E([n, "=", s]);
    }, "printNamedArgumentExpression");
    var vS = i((e, t, r, n) => {
      if (e.properties.length === 0)
        return "{}";
      e[U] = false;
      let s = t.map(r, "properties"), a = n.twigAlwaysBreakObjects ? q : B, u = E([B, ue(E([",", a]), s)]), c = ["{", P(u), a, "}"];
      return ke(t, c, e), F(E(c));
    }, "printObjectExpression");
    var SS = W(J());
    var FS = i((e, t, r, n) => {
      e[R] = !e.computed && SS.Node.isStringLiteral(e.key) && !kl(e.key.value);
      let s = e.key.wasImplicitConcatenation, a = e.computed && !s, u = [];
      return a && u.push("("), u.push(t.call(r, "key")), a && u.push(")"), u.push(": "), e[R] = true, u.push(t.call(r, "value")), E(u);
    }, "printObjectProperty");
    var CS = i((e, t, r) => {
      e[R] = false, e.expressions = Ln(e.expressions);
      let n = Mn(e, t, r, "expressions");
      return Ml(t) ? E([...n, q]) : E(n);
    }, "printSequenceExpression");
    var Kl = W(J());
    var LM = i((e) => Kl.Node.isObjectExpression(e) || Ll(e) || Kl.Node.isArrayExpression(e), "shouldAvoidBreakBeforeClosing");
    var kM = i((e, t, r, n) => {
      let s = e.assignments[n];
      s[Yr] = false;
      let a = LM(s.value);
      return F(E([e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", n), a ? " " : B, e.trimRight ? "-%}" : "%}"]));
    }, "buildSetStatement");
    var MM = i((e) => Array.isArray(e.assignments) && e.assignments.length === 1 && Array.isArray(e.assignments[0].value), "isEmbracingSet");
    var GM = i((e, t, r) => {
      let n = [];
      return Array.isArray(e.assignments) && e.assignments.length > 0 && e.assignments.forEach((a, u) => {
        n.length > 0 && n.push(q), n.push(kM(e, t, r, u));
      }), E(n);
    }, "printRegularSet");
    var jM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", "0", "name"), e.trimRightSet ? " -%}" : " %}"];
      e[R] = false;
      let s = _e(e, t, r, "assignments", "0", "value");
      return n.push(s), n.push(q, e.trimLeftEndset ? "{%-" : "{%", " endset ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printEmbracingSet");
    var BS = i((e, t, r) => (e[R] = true, MM(e) ? jM(e, t, r) : GM(e, t, r)), "printSetStatement");
    var bS = i((e, t, r) => {
      let n = t.call(r, "target"), s = e.start ? t.call(r, "start") : "", a = e.end ? t.call(r, "end") : "";
      return E([n, "[", s, ":", a, "]"]);
    }, "printSliceExpression");
    var OS = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " spaceless ", e.trimRightSpaceless ? "-%}" : "%}"];
      return n.push(_e(e, t, r, "body")), n.push(q), n.push(e.trimLeftEndspaceless ? "{%-" : "{%", " endspaceless ", e.trimRight ? "-%}" : "%}"), F(E(n));
    }, "printSpacelessBlock");
    var UM = i((e, t) => t === 0 || e[t - 1] !== "\\", "isUnmaskedOccurrence");
    var NS = i((e) => (t) => {
      let r = t.indexOf(e);
      for (; r >= 0; ) {
        if (UM(t, r))
          return true;
        r = t.indexOf(e, r + 1);
      }
      return false;
    }, "containsUnmasked");
    var YM = NS("'");
    var VM = NS('"');
    var KM = i((e, t) => YM(e) ? '"' : VM(e) ? "'" : Pn(t), "getQuoteChar");
    var _S = i((e, t, r, n) => {
      let s = Ft(t, R, false), a = Ft(t, ji, null);
      if (s) {
        let u = a || KM(e.value, n);
        return u + e.value + u;
      }
      return e.value;
    }, "printStringLiteral");
    var IS = { TestNullExpression: "null", TestDivisibleByExpression: "divisible by", TestDefinedExpression: "defined", TestEmptyExpression: "empty", TestEvenExpression: "even", TestOddExpression: "odd", TestIterableExpression: "iterable", TestSameAsExpression: "same as" };
    var WM = i((e) => e.constructor.name === "UnarySubclass" && e.operator === "not", "isNegator");
    var RS = i((e, t, r) => {
      let n = e.__proto__.type, s = [t.call(r, "expression"), " is "], a = dr(t), u = Array.isArray(e.arguments) && e.arguments.length > 0;
      if (WM(a) && s.push("not "), IS[n] ? s.push(IS[n]) : console.error("TestExpression: No text for " + n + " defined"), u) {
        let c = t.map(r, "arguments"), p = ue(E([",", B]), c);
        s.push(F(E(["(", P(E([H, p])), H, ")"])));
      }
      return E(s);
    }, "printTestExpression");
    var HM = i((e, t = true) => {
      let r = lt(e);
      return r === 0 ? t ? B : "" : r === 1 ? q : E([q, q]);
    }, "newlinesOnly");
    var PS = i((e, t, r) => {
      let n = e[jr] === true, s = e[Ur] === true, a = t.call(r, "value");
      if (Kr(a) && e[Yi])
        return HM(a);
      let u = Gl(a, n, s);
      return ue(E([q, q]), u);
    }, "printTextStatement");
    var qS = i((e) => {
      let t = e.value.value || "", r = $a(t), n = t.length >= 3 ? t[2] === "-" : false, s = t.length >= 3 ? t.slice(-3, -2) === "-" : false;
      return lt(r) === 0 ? za(r, n, s) : E([n ? "{#-" : "{#", r, s ? "-#}" : "#}"]);
    }, "printTwigComment");
    var wS = i((e, t, r) => {
      e[U] = false, e[R] = true;
      let n = [e.operator, t.call(r, "argument")];
      return ke(t, n, e), F(E(n));
    }, "printUnaryExpression");
    var LS = W(J());
    var XM = i((e) => Wi(e), "argumentNeedsParentheses");
    var $M = i((e) => e === "not", "isLogicalOperator");
    var JM = i((e, t, r) => {
      let n = Ft(t, Vr, false);
      n || (e[Vr] = true);
      let a = dr(t)[Yr] !== false, u = [e.operator, " "], c = XM(e.argument), p = t.call(r, "argument");
      c ? u.push("(", P(E([H, p])), E([H, ")"])) : u.push(p);
      let f = E(u);
      return !n && a ? F(f) : f;
    }, "printLogicalExpression");
    var kS = i((e, t, r) => {
      let n = [], s = LS.Node.isTestExpression(e.argument);
      return $M(e.operator) && !s ? JM(e, t, r) : (s || n.push(e.operator, " "), n.push(t.call(r, "argument")), E(n));
    }, "printUnarySubclass");
    var MS = i((e, t, r) => {
      e[R] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " url ", t.call(r, "name")];
      if (e.arguments && e.arguments.length > 0) {
        n.push(" ");
        let s = t.map(r, "arguments"), a = F(E([E([H, ue(" ", s)]), H]));
        n.push(a);
      }
      return n.push(e.trimRight ? " -%}" : " %}"), E(n);
    }, "printUrlStatement");
    var GS = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", ' use "', t.call(r, "source"), '"'];
      if (e.aliases && e.aliases.length > 0) {
        n.push(" with");
        let a = t.map(r, "aliases");
        n.push(P(E([B, ue(E([",", B]), a)]))), n.push(B);
      } else
        n.push(" ");
      return n.push(e.trimRight ? "-%}" : "%}"), F(E(n));
    }, "printUseStatement");
    var jS = i((e, t, r) => {
      let n = t.call(r, "name");
      e[R] = true;
      let s = t.call(r, "value"), u = Ki(e.value) ? E([" ", s]) : P(E([B, s]));
      return E([n, " =", u]);
    }, "printVariableDeclarationStatement");
    var US = i((e, t, r) => {
      e[U] = false;
      let n;
      if (e.arguments && e.arguments.length > 0) {
        let a = t.map(r, "arguments");
        n = F(E([E([H, ue(" ", a)]), H]));
      }
      if (Array.isArray(e.body)) {
        let u = [E([e.trimLeft ? "{%-" : "{%", " with ", n, e.trimRightBlock ? " -%}" : " %}"])];
        if (e.body.length > 0) {
          let p = _e(e, t, r, "body");
          u.push(p);
        }
        return u.push(q), u.push(e.trimLeftEndblock ? "{%-" : "{%", " endwith", e.trimRight ? " -%}" : " %}"), F(E(u));
      } else if (Node.isPrintExpressionStatement(e.body)) {
        let a = [e.trimLeft ? "{%-" : "{%", " with ", n, " ", t.call(r, "body", "value"), e.trimRight ? " -%}" : " %}"];
        return E(a);
      }
    }, "printWithStatement");
    var _ = {};
    var zM = i((e) => {
      if (e && e.printers)
        for (let t of Object.keys(e.printers))
          _[t] = e.printers[t];
    }, "applyPlugin");
    var QM = i((e) => {
      let t = Ya(e);
      ql(t).forEach((n) => {
        zM(n);
      });
    }, "applyPlugins");
    var ZM = Xi("prettier-ignore");
    var eG = Xi("prettier-ignore-start");
    var tG = Xi("prettier-ignore-end");
    var rG = $i("prettier-ignore");
    var nG = $i("prettier-ignore-start");
    var iG = $i("prettier-ignore-end");
    var sG = i((e) => ZM(e) || rG(e), "isIgnoreNextComment");
    var aG = i((e) => eG(e) || nG(e), "isIgnoreRegionStartComment");
    var uG = i((e) => tG(e) || iG(e), "isIgnoreRegionEndComment");
    var Hl = "";
    var Qi = false;
    var Wl = false;
    var YS = i((e) => {
      Wl = Wl && !VS(e) || sG(e), Qi = Qi || aG(e);
    }, "checkForIgnoreStart");
    var oG = i((e) => {
      Qi && uG(e) && (Qi = false);
    }, "checkForIgnoreEnd");
    var VS = i((e) => !wn(e), "shouldApplyIgnoreNext");
    var KS = i((e, t, r) => {
      QM(t);
      let n = e.getValue(), s = n.constructor.name;
      n[Qa] && (Hl = n[Qa]), t.twigPrintWidth && (t.printWidth = t.twigPrintWidth), oG(n);
      let a = VS(n) && Wl || Qi, u = _[s];
      return !a && u ? (YS(n), _[s](n, e, r, t)) : (u || console.warn(`No print function available for node type "${s}"`), YS(n), cG(n) ? lG(n) : "");
    }, "print");
    var lG = i((e) => Hl.substring(e.loc.start.index, e.loc.end.index), "getSubstringForNode");
    var cG = i((e) => Hl && e.loc && e.loc.start && e.loc.end && e.loc.start.index && e.loc.end.index, "canGetSubstringForNode");
    _.SequenceExpression = CS;
    _.ConstantValue = (e) => e.value;
    _.StringLiteral = _S;
    _.Identifier = ES;
    _.UnaryExpression = wS;
    _.BinaryExpression = eu;
    _.BinarySubclass = eu;
    _.UnarySubclass = kS;
    _.TestExpression = RS;
    _.ConditionalExpression = Jv;
    _.Element = Zv;
    _.Attribute = Uv;
    _.PrintTextStatement = PS;
    _.PrintExpressionStatement = rS;
    _.MemberExpression = xS;
    _.FilterExpression = aS;
    _.ObjectExpression = vS;
    _.ObjectProperty = FS;
    var WS = i((e) => "" + e.value, "returnNodeValue");
    _.Fragment = (e, t, r) => t.call(r, "value");
    _.NumericLiteral = WS;
    _.BooleanLiteral = WS;
    _.NullLiteral = () => "null";
    _.ArrayExpression = jv;
    _.CallExpression = $v;
    _.NamedArgumentExpression = gS;
    _.SliceExpression = bS;
    _.UseStatement = GS;
    _.AliasExpression = Gv;
    _.BlockStatement = Hv;
    _.SpacelessBlock = OS;
    _.AutoescapeBlock = Yv;
    _.FlushStatement = uS;
    _.IncludeStatement = yS;
    _.UrlStatement = MS;
    _.WithStatement = US;
    _.IfStatement = hS;
    _.MountStatement = TS;
    _.ForStatement = oS;
    _.BinaryConcatExpression = eu;
    _.SetStatement = BS;
    _.VariableDeclarationStatement = jS;
    _.DoStatement = Qv;
    _.ExtendsStatement = nS;
    _.EmbedStatement = eS;
    _.FilterBlockStatement = iS;
    _.ImportDeclaration = DS;
    _.FromStatement = lS;
    _.MacroDeclarationStatement = AS;
    _.TwigComment = qS;
    _.HtmlComment = dS;
    _.Declaration = zv;
    _.GenericTwigTag = (e, t, r, n) => {
      let s = e.tagName;
      return _[s + "Tag"] ? _[s + "Tag"](e, t, r, n) : fS(e, t, r, n);
    };
    _.GenericToken = cS;
    _.String = (e) => e;
    var HS = W(J());
    function XS(e, t, r, n) {
      let s = e.getValue();
      if (n.embeddedLanguageFormatting == "auto" && s instanceof HS.Element) {
        let a = s.name.toLowerCase();
        if (a == "script" || a == "style") {
          let u = a == "script" ? "babel" : "css", { value: c } = s.children?.[0].value;
          if (c) {
            let p = F(Yl(s, e, t)), f = P([H, r(c, { ...n, parser: u }, { stripTrailingHardline: true })]);
            return [p, f, q, E(["</", s.name, ">"])];
          }
        }
      }
      return false;
    }
    i(XS, "embed");
    var pG = [{ name: "melody", parsers: ["melody"], group: "Melody", tmScope: "melody.twig", aceMode: "html", codemirrorMode: "clike", codemirrorMimeType: "text/melody-twig", extensions: [".melody.twig", ".html.twig", ".twig", ".django", ".jinja"], linguistLanguageId: 0, vscodeLanguageIds: ["twig", "django", "django-html"] }];
    function fG() {
      return false;
    }
    i(fG, "hasPragma");
    function dG() {
      return -1;
    }
    i(dG, "locStart");
    function EG() {
      return -1;
    }
    i(EG, "locEnd");
    var mG = { melody: { parse: Mv, astFormat: "melody", hasPragma: fG, locStart: dG, locEnd: EG } };
    function hG(e) {
      return e.ast_type && e.ast_type !== "comment";
    }
    i(hG, "canAttachComment");
    function DG(e) {
      let t = e.getValue();
      switch (t.ast_type) {
        case "comment":
          return t.value;
        default:
          throw new Error("Not a comment: " + JSON.stringify(t));
      }
    }
    i(DG, "printComment");
    function yG(e, t) {
      delete t.lineno, delete t.col_offset;
    }
    i(yG, "clean");
    var AG = { melody: { print: KS, embed: XS, printComment: DG, canAttachComment: hG, massageAstNode: yG, willPrintOwnComments: () => true } };
    var xG = { twigMelodyPlugins: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Provide additional plugins for Melody. Relative file path from the project root." }, twigMultiTags: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Make custom Twig tags known to the parser." }, twigSingleQuote: { type: "boolean", category: "Global", default: true, description: "Use single quotes in Twig files?" }, twigAlwaysBreakObjects: { type: "boolean", category: "Global", default: true, description: "Should objects always break in Twig files?" }, twigPrintWidth: { type: "int", category: "Global", default: 80, description: "Print width for Twig files" }, twigFollowOfficialCodingStandards: { type: "boolean", category: "Global", default: true, description: "See https://twig.symfony.com/doc/2.x/coding_standards.html" }, twigOutputEndblockName: { type: "boolean", category: "Global", default: false, description: "Output the Twig block name in the 'endblock' tag" } };
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var import_vscode3 = require("vscode");

// src/formatting.ts
var import_prettier = require("prettier");
var htmlPlugin = __toESM(require("prettier/parser-html"));
var import_vscode = require("vscode");
var djangoPlugin = __toESM(require_out());
function formatting(document, diagnosticCollection) {
  const options2 = {
    "tabWidth": 2,
    "printWidth": 5e3,
    "semi": false,
    "singleQuote": true,
    "trailingComma": "none",
    "twigPrintWidth": 5e3,
    "twigMultiTags": [
      "with,endwith"
    ],
    "twigAlwaysBreakObjects": false,
    "twigSingleQuote": true,
    "parser": "melody",
    "plugins": [],
    "htmlWhitespaceSensitivity": "ignore",
    "embeddedLanguageFormatting": "auto"
  };
  Object.assign(options2, import_prettier.resolveConfig.sync(document.uri.fsPath) ?? []);
  options2.twigSingleQuote = true;
  options2.plugins = [djangoPlugin];
  options2.parser = "melody";
  options2.htmlWhitespaceSensitivity = "ignore";
  options2.embeddedLanguageFormatting = "off";
  const doc = { text: document.getText() };
  try {
    doc.text = (0, import_prettier.format)(doc.text, options2);
    if (!doc.text) {
      throw new Error("django-html: formatting failed");
    }
    formatStyleAndScript(doc, options2);
    diagnosticCollection?.clear();
  } catch (error) {
    if (diagnosticCollection && error.loc) {
      diagnosticCollection.clear();
      const loc = error.loc;
      if (!loc.end) {
        loc.end = { line: loc.start.line, column: loc.start.column + 1 };
      }
      let line = loc.start.line - 1, col = loc.start.column - 1;
      let line2 = loc.end.line - 1, col2 = loc.end.column - 1;
      let range = new import_vscode.Range(line, col, line2, col2);
      setTimeout(() => diagnosticCollection.set(document.uri, [new import_vscode.Diagnostic(range, error.message.split(" 	 ")[0].split("\n")[0], 0)]), 250);
    } else {
      console.log(error);
    }
  }
  return doc.text;
}
function formatStyleAndScript(doc, options2) {
  let indent = "  ";
  if (options2.useTabs) {
    indent = "	";
  } else {
    if (options2.tabWidth) {
      indent = " ".repeat(options2.tabWidth);
    }
  }
  let eol = doc.text.includes("\r\n") ? "\r\n" : "\n";
  let result = htmlPlugin.parsers.html.parse(doc.text, null, {});
  let incrChars = 0;
  let incrLines = 0;
  const doFormat = (root) => {
    if (!root.children)
      return;
    for (let i2 = 0; i2 < root.children.length; i2++) {
      const node = root.children[i2];
      if (node.type == "element" && (node.name == "script" || node.name == "style")) {
        if (node.children.length == 0) {
          continue;
        }
        if (node.prev && node.prev.value) {
          let pv = node.prev.value.trim();
          if (pv.endsWith("{# prettier-ignore #}") || pv.endsWith("{% comment %}")) {
            continue;
          }
        }
        let child = node.children[0];
        let ctext = child.value;
        if (ctext.trim()) {
          options2.parser = node.name == "script" ? "babel" : "css";
          let tagOffset = node.sourceSpan.start.offset;
          let tagOffset2 = tagOffset;
          while (tagOffset2 > -1) {
            if (doc.text[tagOffset2 + incrChars] == "\n") {
              break;
            }
            tagOffset2--;
          }
          let tagIndent = doc.text.slice(tagOffset2 + 1 + incrChars, tagOffset + incrChars).replace(/\S/g, " ");
          ctext = "\n".repeat(child.sourceSpan.start.line + incrLines) + " ".repeat(child.sourceSpan.start.col) + child.value;
          ctext = eol + (0, import_prettier.format)(ctext, options2).trim().split(eol).map((line) => tagIndent + indent + line).join(eol) + eol + tagIndent;
        } else {
          ctext = "";
        }
        const start = child.sourceSpan.start.offset;
        doc.text = doc.text.slice(0, start + incrChars) + ctext + doc.text.slice(start + child.value.length + incrChars);
        incrChars += ctext.length - child.value.length;
        incrLines += ctext.split("\n").length - child.value.split("\n").length;
      } else {
        doFormat(node);
      }
    }
  };
  doFormat(result);
}

// src/virtualDocument.ts
var import_vscode2 = require("vscode");
var virtualDocumentContents = /* @__PURE__ */ new Map();
var virtualDocumentPaths = /* @__PURE__ */ new Map();
import_vscode2.workspace.registerTextDocumentContentProvider("dj-embedded-content", {
  provideTextDocumentContent: (uri) => {
    const i2 = uri.path.lastIndexOf("/");
    const originalUri = uri.path.slice(1).slice(0, i2 - 1);
    const decodedUri = decodeURIComponent(originalUri);
    return virtualDocumentContents.get(decodedUri);
  }
});
function registerTextDocumentEvents(context, languageIds2) {
  context.subscriptions.push(import_vscode2.workspace.onDidChangeTextDocument((event) => {
    if (languageIds2.includes(event.document.languageId)) {
      virtualDocumentPaths.delete(event.document.uri.toString());
    }
  }));
  context.subscriptions.push(import_vscode2.workspace.onDidCloseTextDocument((doc) => {
    if (doc.languageId == "html") {
      virtualDocumentContents.delete(doc.uri.toString());
    }
  }));
  context.subscriptions.push(import_vscode2.workspace.onDidRenameFiles((event) => {
    event.files.forEach((f) => {
      virtualDocumentContents.delete(f.oldUri.toString());
    });
  }));
}
function createVirtualDoc(document, languageId) {
  languageId = languageId ?? "html";
  let originalUri = document.uri.toString();
  if (languageId != "html") {
    originalUri += "." + languageId;
  }
  virtualDocumentContents.set(originalUri, document.getText());
  let path;
  if (virtualDocumentPaths.has(originalUri)) {
    path = virtualDocumentPaths.get(originalUri);
  } else {
    path = `/${encodeURIComponent(originalUri)}/${Math.random()}.${languageId}`;
    virtualDocumentPaths.set(originalUri, path);
  }
  return import_vscode2.Uri.from({
    scheme: "dj-embedded-content",
    authority: "django-html",
    path
  });
}
function clearVirtualDocumentContents() {
  virtualDocumentContents.clear();
}

// src/extension.ts
var languageIds = ["django-html"];
function activate(context) {
  registerTextDocumentEvents(context, languageIds);
  const diagnosticCollection = import_vscode3.languages.createDiagnosticCollection("django");
  context.subscriptions.push(diagnosticCollection);
  context.subscriptions.push(import_vscode3.languages.registerDocumentFormattingEditProvider("django-html", {
    provideDocumentFormattingEdits: async (document, options2, token) => {
      const otext = document.getText();
      if (!otext) {
        return;
      }
      let newDoc = document;
      const text = formatting(newDoc, diagnosticCollection);
      if (text && text != otext) {
        const range = new import_vscode3.Range(document.positionAt(0), document.positionAt(otext.length));
        return [new import_vscode3.TextEdit(range, text)];
      } else {
        return [];
      }
    }
  }));
  context.subscriptions.push(import_vscode3.languages.registerCompletionItemProvider(languageIds, {
    provideCompletionItems: async (document, position, token, context2) => {
      const vdocUri = createVirtualDoc(document);
      return await import_vscode3.commands.executeCommand(
        "vscode.executeCompletionItemProvider",
        vdocUri,
        position,
        context2.triggerCharacter
      );
    }
  }, ".", "(", ":", "<"));
  context.subscriptions.push(import_vscode3.languages.registerHoverProvider(languageIds, {
    provideHover: async (document, position, token) => {
      const vdocUri = createVirtualDoc(document);
      const hs2 = await import_vscode3.commands.executeCommand(
        "vscode.executeHoverProvider",
        vdocUri,
        position
      );
      return hs2?.[0];
    }
  }));
}
function deactivate() {
  clearVirtualDocumentContents();
  return void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
