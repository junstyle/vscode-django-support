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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../node_modules/.pnpm/prettier-plugin-django@0.5.9/node_modules/prettier-plugin-django/out/index.js
var require_out = __commonJS({
  "../node_modules/.pnpm/prettier-plugin-django@0.5.9/node_modules/prettier-plugin-django/out/index.js"(exports, module) {
    "use strict";
    var jS = Object.create;
    var Gn = Object.defineProperty;
    var US = Object.getOwnPropertyDescriptor;
    var YS = Object.getOwnPropertyNames;
    var VS = Object.getPrototypeOf;
    var KS = Object.prototype.hasOwnProperty;
    var i = (e, t) => Gn(e, "name", { value: t, configurable: true });
    var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Kl = (e, t) => {
      for (var r in t)
        Gn(e, r, { get: t[r], enumerable: true });
    };
    var Hl = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let s of YS(t))
          !KS.call(e, s) && s !== r && Gn(e, s, { get: () => t[s], enumerable: !(n = US(t, s)) || n.enumerable });
      return e;
    };
    var W = (e, t, r) => (r = e != null ? jS(VS(e)) : {}, Hl(t || !e || !e.__esModule ? Gn(r, "default", { value: e, enumerable: true }) : r, e));
    var HS = (e) => Hl(Gn({}, "__esModule", { value: true }), e);
    var zu = l((yG, Xl) => {
      "use strict";
      var $S = require("os");
      Xl.exports = $S.homedir || i(function() {
        var t = process.env.HOME, r = process.env.LOGNAME || process.env.USER || process.env.LNAME || process.env.USERNAME;
        return process.platform === "win32" ? process.env.USERPROFILE || process.env.HOMEDRIVE + process.env.HOMEPATH || t || null : process.platform === "darwin" ? t || (r ? "/Users/" + r : null) : process.platform === "linux" ? t || (process.getuid() === 0 ? "/root" : r ? "/home/" + r : null) : t || null;
      }, "homedir");
    });
    var Qu = l((AG, $l) => {
      $l.exports = function() {
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = function(r, n) {
          return n;
        };
        var t = new Error().stack;
        return Error.prepareStackTrace = e, t[2].getFileName();
      };
    });
    var Jl = l((xG, Un) => {
      "use strict";
      var JS = process.platform === "win32", zS = /^(((?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?[\\\/]?)(?:[^\\\/]*[\\\/])*)((\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))[\\\/]*$/, Zu = {};
      function QS(e) {
        return zS.exec(e).slice(1);
      }
      i(QS, "win32SplitPath");
      Zu.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = QS(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0] === t[1] ? t[0] : t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      var ZS = /^((\/?)(?:[^\/]*\/)*)((\.{1,2}|[^\/]+?|)(\.[^.\/]*|))[\/]*$/, ea = {};
      function eF(e) {
        return ZS.exec(e).slice(1);
      }
      i(eF, "posixSplitPath");
      ea.parse = function(e) {
        if (typeof e != "string")
          throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e);
        var t = eF(e);
        if (!t || t.length !== 5)
          throw new TypeError("Invalid path '" + e + "'");
        return { root: t[1], dir: t[0].slice(0, -1), base: t[2], ext: t[4], name: t[3] };
      };
      JS ? Un.exports = Zu.parse : Un.exports = ea.parse;
      Un.exports.posix = ea.parse;
      Un.exports.win32 = Zu.parse;
    });
    var ta = l((TG, ec) => {
      var Zl = require("path"), zl = Zl.parse || Jl(), Ql = i(function(t, r) {
        var n = "/";
        /^([A-Za-z]:)/.test(t) ? n = "" : /^\\\\/.test(t) && (n = "\\\\");
        for (var s = [t], u = zl(t); u.dir !== s[s.length - 1]; )
          s.push(u.dir), u = zl(u.dir);
        return s.reduce(function(a, c) {
          return a.concat(r.map(function(p) {
            return Zl.resolve(n, c, p);
          }));
        }, []);
      }, "getNodeModulesDirs");
      ec.exports = i(function(t, r, n) {
        var s = r && r.moduleDirectory ? [].concat(r.moduleDirectory) : ["node_modules"];
        if (r && typeof r.paths == "function")
          return r.paths(n, t, function() {
            return Ql(t, s);
          }, r);
        var u = Ql(t, s);
        return r && r.paths ? u.concat(r.paths) : u;
      }, "nodeModulesPaths");
    });
    var ra = l((gG, tc) => {
      tc.exports = function(e, t) {
        return t || {};
      };
    });
    var nc = l((vG, rc) => {
      "use strict";
      var tF = "Function.prototype.bind called on incompatible ", na = Array.prototype.slice, rF = Object.prototype.toString, nF = "[object Function]";
      rc.exports = i(function(t) {
        var r = this;
        if (typeof r != "function" || rF.call(r) !== nF)
          throw new TypeError(tF + r);
        for (var n = na.call(arguments, 1), s, u = i(function() {
          if (this instanceof s) {
            var m = r.apply(this, n.concat(na.call(arguments)));
            return Object(m) === m ? m : this;
          } else
            return r.apply(t, n.concat(na.call(arguments)));
        }, "binder"), a = Math.max(0, r.length - n.length), c = [], p = 0; p < a; p++)
          c.push("$" + p);
        if (s = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(u), r.prototype) {
          var f = i(function() {
          }, "Empty");
          f.prototype = r.prototype, s.prototype = new f(), f.prototype = null;
        }
        return s;
      }, "bind");
    });
    var uc = l((SG, sc) => {
      "use strict";
      var iF = nc();
      sc.exports = Function.prototype.bind || iF;
    });
    var oc = l((FG, ac) => {
      "use strict";
      var sF = uc();
      ac.exports = sF.call(Function.call, Object.prototype.hasOwnProperty);
    });
    var lc = l((CG, uF) => {
      uF.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], "inspector/promises": [">= 19"], "node:inspector/promises": [">= 19"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "test/reporters": ">= 19.9 && < 20.2", "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"], "node:test": [">= 16.17 && < 17", ">= 18"], timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"], "node:wasi": [">= 18.17 && < 19", ">= 20"], worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var Yn = l((BG, fc) => {
      "use strict";
      var aF = oc();
      function oF(e, t) {
        for (var r = e.split("."), n = t.split(" "), s = n.length > 1 ? n[0] : "=", u = (n.length > 1 ? n[1] : n[0]).split("."), a = 0; a < 3; ++a) {
          var c = parseInt(r[a] || 0, 10), p = parseInt(u[a] || 0, 10);
          if (c !== p)
            return s === "<" ? c < p : s === ">=" ? c >= p : false;
        }
        return s === ">=";
      }
      i(oF, "specifierIncluded");
      function cc(e, t) {
        var r = t.split(/ ?&& ?/);
        if (r.length === 0)
          return false;
        for (var n = 0; n < r.length; ++n)
          if (!oF(e, r[n]))
            return false;
        return true;
      }
      i(cc, "matchesRange");
      function lF(e, t) {
        if (typeof t == "boolean")
          return t;
        var r = typeof e > "u" ? process.versions && process.versions.node : e;
        if (typeof r != "string")
          throw new TypeError(typeof e > "u" ? "Unable to determine current node version" : "If provided, a valid node version is required");
        if (t && typeof t == "object") {
          for (var n = 0; n < t.length; ++n)
            if (cc(r, t[n]))
              return true;
          return false;
        }
        return cc(r, t);
      }
      i(lF, "versionIncluded");
      var pc = lc();
      fc.exports = i(function(t, r) {
        return aF(pc, t) && lF(r, pc[t]);
      }, "isCore");
    });
    var mc = l((OG, Ec) => {
      var mr = require("fs"), cF = zu(), ve = require("path"), pF = Qu(), fF = ta(), dF = ra(), EF = Yn(), mF = process.platform !== "win32" && mr.realpath && typeof mr.realpath.native == "function" ? mr.realpath.native : mr.realpath, dc = cF(), hF = i(function() {
        return [ve.join(dc, ".node_modules"), ve.join(dc, ".node_libraries")];
      }, "defaultPaths"), DF = i(function(t, r) {
        mr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isFile() || s.isFIFO());
        });
      }, "isFile"), yF = i(function(t, r) {
        mr.stat(t, function(n, s) {
          return n ? n.code === "ENOENT" || n.code === "ENOTDIR" ? r(null, false) : r(n) : r(null, s.isDirectory());
        });
      }, "isDirectory"), AF = i(function(t, r) {
        mF(t, function(n, s) {
          n && n.code !== "ENOENT" ? r(n) : r(null, n ? t : s);
        });
      }, "realpath"), Vn = i(function(t, r, n, s) {
        n && n.preserveSymlinks === false ? t(r, s) : s(null, r);
      }, "maybeRealpath"), xF = i(function(t, r, n) {
        t(r, function(s, u) {
          if (s)
            n(s);
          else
            try {
              var a = JSON.parse(u);
              n(null, a);
            } catch {
              n(null);
            }
        });
      }, "defaultReadPackage"), TF = i(function(t, r, n) {
        for (var s = fF(r, n, t), u = 0; u < s.length; u++)
          s[u] = ve.join(s[u], t);
        return s;
      }, "getPackageCandidates");
      Ec.exports = i(function(t, r, n) {
        var s = n, u = r;
        if (typeof r == "function" && (s = u, u = {}), typeof t != "string") {
          var a = new TypeError("Path must be a string.");
          return process.nextTick(function() {
            s(a);
          });
        }
        u = dF(t, u);
        var c = u.isFile || DF, p = u.isDirectory || yF, f = u.readFile || mr.readFile, m = u.realpath || AF, D = u.readPackage || xF;
        if (u.readFile && u.readPackage) {
          var d = new TypeError("`readFile` and `readPackage` are mutually exclusive.");
          return process.nextTick(function() {
            s(d);
          });
        }
        var x = u.packageIterator, F = u.extensions || [".js"], O = u.includeCoreModules !== false, g = u.basedir || ve.dirname(pF()), j = u.filename || g;
        u.paths = u.paths || hF();
        var X = ve.resolve(g);
        Vn(m, X, u, function(L, K) {
          L ? s(L) : Me(K);
        });
        var Q;
        function Me(L) {
          if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t))
            Q = ve.resolve(L, t), (t === "." || t === ".." || t.slice(-1) === "/") && (Q += "/"), /\/$/.test(t) && Q === L ? ge(Q, u.package, Xe) : Bt(Q, u.package, Xe);
          else {
            if (O && EF(t))
              return s(null, t);
            ft(t, L, function(K, xe, H) {
              if (K)
                s(K);
              else {
                if (xe)
                  return Vn(m, xe, u, function($e, Te) {
                    $e ? s($e) : s(null, Te, H);
                  });
                var De = new Error("Cannot find module '" + t + "' from '" + j + "'");
                De.code = "MODULE_NOT_FOUND", s(De);
              }
            });
          }
        }
        i(Me, "init");
        function Xe(L, K, xe) {
          L ? s(L) : K ? s(null, K, xe) : ge(Q, function(H, De, $e) {
            if (H)
              s(H);
            else if (De)
              Vn(m, De, u, function(ye, Ge) {
                ye ? s(ye) : s(null, Ge, $e);
              });
            else {
              var Te = new Error("Cannot find module '" + t + "' from '" + j + "'");
              Te.code = "MODULE_NOT_FOUND", s(Te);
            }
          });
        }
        i(Xe, "onfile");
        function Bt(L, K, xe) {
          var H = K, De = xe;
          typeof H == "function" && (De = H, H = void 0);
          var $e = [""].concat(F);
          Te($e, L, H);
          function Te(ye, Ge, Ot) {
            if (ye.length === 0)
              return De(null, void 0, Ot);
            var Er = Ge + ye[0], dt = Ot;
            dt ? Ne(null, dt) : Z(ve.dirname(Er), Ne);
            function Ne(er, Xr, bt) {
              if (dt = Xr, er)
                return De(er);
              if (bt && dt && u.pathFilter) {
                var Qi = ve.relative(bt, Er), Zi = Qi.slice(0, Qi.length - ye[0].length), Mn = u.pathFilter(dt, Ge, Zi);
                if (Mn)
                  return Te([""].concat(F.slice()), ve.resolve(bt, Mn), dt);
              }
              c(Er, zi);
            }
            i(Ne, "onpkg");
            function zi(er, Xr) {
              if (er)
                return De(er);
              if (Xr)
                return De(null, Er, dt);
              Te(ye.slice(1), Ge, dt);
            }
            i(zi, "onex");
          }
          i(Te, "load");
        }
        i(Bt, "loadAsFile");
        function Z(L, K) {
          if (L === "" || L === "/" || process.platform === "win32" && /^\w:[/\\]*$/.test(L) || /[/\\]node_modules[/\\]*$/.test(L))
            return K(null);
          Vn(m, L, u, function(xe, H) {
            if (xe)
              return Z(ve.dirname(L), K);
            var De = ve.join(H, "package.json");
            c(De, function($e, Te) {
              if (!Te)
                return Z(ve.dirname(L), K);
              D(f, De, function(ye, Ge) {
                ye && K(ye);
                var Ot = Ge;
                Ot && u.packageFilter && (Ot = u.packageFilter(Ot, De)), K(null, Ot, L);
              });
            });
          });
        }
        i(Z, "loadpkg");
        function ge(L, K, xe) {
          var H = xe, De = K;
          typeof De == "function" && (H = De, De = u.package), Vn(m, L, u, function($e, Te) {
            if ($e)
              return H($e);
            var ye = ve.join(Te, "package.json");
            c(ye, function(Ge, Ot) {
              if (Ge)
                return H(Ge);
              if (!Ot)
                return Bt(ve.join(L, "index"), De, H);
              D(f, ye, function(Er, dt) {
                if (Er)
                  return H(Er);
                var Ne = dt;
                if (Ne && u.packageFilter && (Ne = u.packageFilter(Ne, ye)), Ne && Ne.main) {
                  if (typeof Ne.main != "string") {
                    var zi = new TypeError("package \u201C" + Ne.name + "\u201D `main` must be a string");
                    return zi.code = "INVALID_PACKAGE_MAIN", H(zi);
                  }
                  (Ne.main === "." || Ne.main === "./") && (Ne.main = "index"), Bt(ve.resolve(L, Ne.main), Ne, function(er, Xr, bt) {
                    if (er)
                      return H(er);
                    if (Xr)
                      return H(null, Xr, bt);
                    if (!bt)
                      return Bt(ve.join(L, "index"), bt, H);
                    var Qi = ve.resolve(L, bt.main);
                    ge(Qi, bt, function(Zi, Mn, Vl) {
                      if (Zi)
                        return H(Zi);
                      if (Mn)
                        return H(null, Mn, Vl);
                      Bt(ve.join(L, "index"), Vl, H);
                    });
                  });
                  return;
                }
                Bt(ve.join(L, "/index"), Ne, H);
              });
            });
          });
        }
        i(ge, "loadAsDirectory");
        function oe(L, K) {
          if (K.length === 0)
            return L(null, void 0);
          var xe = K[0];
          p(ve.dirname(xe), H);
          function H(Te, ye) {
            if (Te)
              return L(Te);
            if (!ye)
              return oe(L, K.slice(1));
            Bt(xe, u.package, De);
          }
          i(H, "isdir");
          function De(Te, ye, Ge) {
            if (Te)
              return L(Te);
            if (ye)
              return L(null, ye, Ge);
            ge(xe, u.package, $e);
          }
          i(De, "onfile");
          function $e(Te, ye, Ge) {
            if (Te)
              return L(Te);
            if (ye)
              return L(null, ye, Ge);
            oe(L, K.slice(1));
          }
          i($e, "ondir");
        }
        i(oe, "processDirs");
        function ft(L, K, xe) {
          var H = i(function() {
            return TF(L, K, u);
          }, "thunk");
          oe(xe, x ? x(L, K, H, u) : H());
        }
        i(ft, "loadNodeModules");
      }, "resolve");
    });
    var hc = l((bG, gF) => {
      gF.exports = { assert: true, "node:assert": [">= 14.18 && < 15", ">= 16"], "assert/strict": ">= 15", "node:assert/strict": ">= 16", async_hooks: ">= 8", "node:async_hooks": [">= 14.18 && < 15", ">= 16"], buffer_ieee754: ">= 0.5 && < 0.9.7", buffer: true, "node:buffer": [">= 14.18 && < 15", ">= 16"], child_process: true, "node:child_process": [">= 14.18 && < 15", ">= 16"], cluster: ">= 0.5", "node:cluster": [">= 14.18 && < 15", ">= 16"], console: true, "node:console": [">= 14.18 && < 15", ">= 16"], constants: true, "node:constants": [">= 14.18 && < 15", ">= 16"], crypto: true, "node:crypto": [">= 14.18 && < 15", ">= 16"], _debug_agent: ">= 1 && < 8", _debugger: "< 8", dgram: true, "node:dgram": [">= 14.18 && < 15", ">= 16"], diagnostics_channel: [">= 14.17 && < 15", ">= 15.1"], "node:diagnostics_channel": [">= 14.18 && < 15", ">= 16"], dns: true, "node:dns": [">= 14.18 && < 15", ">= 16"], "dns/promises": ">= 15", "node:dns/promises": ">= 16", domain: ">= 0.7.12", "node:domain": [">= 14.18 && < 15", ">= 16"], events: true, "node:events": [">= 14.18 && < 15", ">= 16"], freelist: "< 6", fs: true, "node:fs": [">= 14.18 && < 15", ">= 16"], "fs/promises": [">= 10 && < 10.1", ">= 14"], "node:fs/promises": [">= 14.18 && < 15", ">= 16"], _http_agent: ">= 0.11.1", "node:_http_agent": [">= 14.18 && < 15", ">= 16"], _http_client: ">= 0.11.1", "node:_http_client": [">= 14.18 && < 15", ">= 16"], _http_common: ">= 0.11.1", "node:_http_common": [">= 14.18 && < 15", ">= 16"], _http_incoming: ">= 0.11.1", "node:_http_incoming": [">= 14.18 && < 15", ">= 16"], _http_outgoing: ">= 0.11.1", "node:_http_outgoing": [">= 14.18 && < 15", ">= 16"], _http_server: ">= 0.11.1", "node:_http_server": [">= 14.18 && < 15", ">= 16"], http: true, "node:http": [">= 14.18 && < 15", ">= 16"], http2: ">= 8.8", "node:http2": [">= 14.18 && < 15", ">= 16"], https: true, "node:https": [">= 14.18 && < 15", ">= 16"], inspector: ">= 8", "node:inspector": [">= 14.18 && < 15", ">= 16"], "inspector/promises": [">= 19"], "node:inspector/promises": [">= 19"], _linklist: "< 8", module: true, "node:module": [">= 14.18 && < 15", ">= 16"], net: true, "node:net": [">= 14.18 && < 15", ">= 16"], "node-inspect/lib/_inspect": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_client": ">= 7.6 && < 12", "node-inspect/lib/internal/inspect_repl": ">= 7.6 && < 12", os: true, "node:os": [">= 14.18 && < 15", ">= 16"], path: true, "node:path": [">= 14.18 && < 15", ">= 16"], "path/posix": ">= 15.3", "node:path/posix": ">= 16", "path/win32": ">= 15.3", "node:path/win32": ">= 16", perf_hooks: ">= 8.5", "node:perf_hooks": [">= 14.18 && < 15", ">= 16"], process: ">= 1", "node:process": [">= 14.18 && < 15", ">= 16"], punycode: ">= 0.5", "node:punycode": [">= 14.18 && < 15", ">= 16"], querystring: true, "node:querystring": [">= 14.18 && < 15", ">= 16"], readline: true, "node:readline": [">= 14.18 && < 15", ">= 16"], "readline/promises": ">= 17", "node:readline/promises": ">= 17", repl: true, "node:repl": [">= 14.18 && < 15", ">= 16"], smalloc: ">= 0.11.5 && < 3", _stream_duplex: ">= 0.9.4", "node:_stream_duplex": [">= 14.18 && < 15", ">= 16"], _stream_transform: ">= 0.9.4", "node:_stream_transform": [">= 14.18 && < 15", ">= 16"], _stream_wrap: ">= 1.4.1", "node:_stream_wrap": [">= 14.18 && < 15", ">= 16"], _stream_passthrough: ">= 0.9.4", "node:_stream_passthrough": [">= 14.18 && < 15", ">= 16"], _stream_readable: ">= 0.9.4", "node:_stream_readable": [">= 14.18 && < 15", ">= 16"], _stream_writable: ">= 0.9.4", "node:_stream_writable": [">= 14.18 && < 15", ">= 16"], stream: true, "node:stream": [">= 14.18 && < 15", ">= 16"], "stream/consumers": ">= 16.7", "node:stream/consumers": ">= 16.7", "stream/promises": ">= 15", "node:stream/promises": ">= 16", "stream/web": ">= 16.5", "node:stream/web": ">= 16.5", string_decoder: true, "node:string_decoder": [">= 14.18 && < 15", ">= 16"], sys: [">= 0.4 && < 0.7", ">= 0.8"], "node:sys": [">= 14.18 && < 15", ">= 16"], "test/reporters": ">= 19.9 && < 20.2", "node:test/reporters": [">= 18.17 && < 19", ">= 19.9", ">= 20"], "node:test": [">= 16.17 && < 17", ">= 18"], timers: true, "node:timers": [">= 14.18 && < 15", ">= 16"], "timers/promises": ">= 15", "node:timers/promises": ">= 16", _tls_common: ">= 0.11.13", "node:_tls_common": [">= 14.18 && < 15", ">= 16"], _tls_legacy: ">= 0.11.3 && < 10", _tls_wrap: ">= 0.11.3", "node:_tls_wrap": [">= 14.18 && < 15", ">= 16"], tls: true, "node:tls": [">= 14.18 && < 15", ">= 16"], trace_events: ">= 10", "node:trace_events": [">= 14.18 && < 15", ">= 16"], tty: true, "node:tty": [">= 14.18 && < 15", ">= 16"], url: true, "node:url": [">= 14.18 && < 15", ">= 16"], util: true, "node:util": [">= 14.18 && < 15", ">= 16"], "util/types": ">= 15.3", "node:util/types": ">= 16", "v8/tools/arguments": ">= 10 && < 12", "v8/tools/codemap": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/consarray": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/csvparser": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/logreader": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/profile_view": [">= 4.4 && < 5", ">= 5.2 && < 12"], "v8/tools/splaytree": [">= 4.4 && < 5", ">= 5.2 && < 12"], v8: ">= 1", "node:v8": [">= 14.18 && < 15", ">= 16"], vm: true, "node:vm": [">= 14.18 && < 15", ">= 16"], wasi: [">= 13.4 && < 13.5", ">= 18.17 && < 19", ">= 20"], "node:wasi": [">= 18.17 && < 19", ">= 20"], worker_threads: ">= 11.7", "node:worker_threads": [">= 14.18 && < 15", ">= 16"], zlib: ">= 0.5", "node:zlib": [">= 14.18 && < 15", ">= 16"] };
    });
    var xc = l((NG, Ac) => {
      "use strict";
      var vF = Yn(), Dc = hc(), yc = {};
      for (es in Dc)
        Object.prototype.hasOwnProperty.call(Dc, es) && (yc[es] = vF(es));
      var es;
      Ac.exports = yc;
    });
    var gc = l((_G, Tc) => {
      var SF = Yn();
      Tc.exports = i(function(t) {
        return SF(t);
      }, "isCore");
    });
    var Fc = l((IG, Sc) => {
      var FF = Yn(), hr = require("fs"), _e = require("path"), CF = zu(), BF = Qu(), OF = ta(), bF = ra(), NF = process.platform !== "win32" && hr.realpathSync && typeof hr.realpathSync.native == "function" ? hr.realpathSync.native : hr.realpathSync, vc = CF(), _F = i(function() {
        return [_e.join(vc, ".node_modules"), _e.join(vc, ".node_libraries")];
      }, "defaultPaths"), IF = i(function(t) {
        try {
          var r = hr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && (r.isFile() || r.isFIFO());
      }, "isFile"), RF = i(function(t) {
        try {
          var r = hr.statSync(t, { throwIfNoEntry: false });
        } catch (n) {
          if (n && (n.code === "ENOENT" || n.code === "ENOTDIR"))
            return false;
          throw n;
        }
        return !!r && r.isDirectory();
      }, "isDirectory"), PF = i(function(t) {
        try {
          return NF(t);
        } catch (r) {
          if (r.code !== "ENOENT")
            throw r;
        }
        return t;
      }, "realpathSync"), Kn = i(function(t, r, n) {
        return n && n.preserveSymlinks === false ? t(r) : r;
      }, "maybeRealpathSync"), qF = i(function(t, r) {
        var n = t(r);
        try {
          var s = JSON.parse(n);
          return s;
        } catch {
        }
      }, "defaultReadPackageSync"), wF = i(function(t, r, n) {
        for (var s = OF(r, n, t), u = 0; u < s.length; u++)
          s[u] = _e.join(s[u], t);
        return s;
      }, "getPackageCandidates");
      Sc.exports = i(function(t, r) {
        if (typeof t != "string")
          throw new TypeError("Path must be a string.");
        var n = bF(t, r), s = n.isFile || IF, u = n.readFileSync || hr.readFileSync, a = n.isDirectory || RF, c = n.realpathSync || PF, p = n.readPackageSync || qF;
        if (n.readFileSync && n.readPackageSync)
          throw new TypeError("`readFileSync` and `readPackageSync` are mutually exclusive.");
        var f = n.packageIterator, m = n.extensions || [".js"], D = n.includeCoreModules !== false, d = n.basedir || _e.dirname(BF()), x = n.filename || d;
        n.paths = n.paths || _F();
        var F = Kn(c, _e.resolve(d), n);
        if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[/\\])/.test(t)) {
          var O = _e.resolve(F, t);
          (t === "." || t === ".." || t.slice(-1) === "/") && (O += "/");
          var g = Q(O) || Xe(O);
          if (g)
            return Kn(c, g, n);
        } else {
          if (D && FF(t))
            return t;
          var j = Bt(t, F);
          if (j)
            return Kn(c, j, n);
        }
        var X = new Error("Cannot find module '" + t + "' from '" + x + "'");
        throw X.code = "MODULE_NOT_FOUND", X;
        function Q(Z) {
          var ge = Me(_e.dirname(Z));
          if (ge && ge.dir && ge.pkg && n.pathFilter) {
            var oe = _e.relative(ge.dir, Z), ft = n.pathFilter(ge.pkg, Z, oe);
            ft && (Z = _e.resolve(ge.dir, ft));
          }
          if (s(Z))
            return Z;
          for (var L = 0; L < m.length; L++) {
            var K = Z + m[L];
            if (s(K))
              return K;
          }
        }
        i(Q, "loadAsFileSync");
        function Me(Z) {
          if (!(Z === "" || Z === "/") && !(process.platform === "win32" && /^\w:[/\\]*$/.test(Z)) && !/[/\\]node_modules[/\\]*$/.test(Z)) {
            var ge = _e.join(Kn(c, Z, n), "package.json");
            if (!s(ge))
              return Me(_e.dirname(Z));
            var oe = p(u, ge);
            return oe && n.packageFilter && (oe = n.packageFilter(oe, Z)), { pkg: oe, dir: Z };
          }
        }
        i(Me, "loadpkg");
        function Xe(Z) {
          var ge = _e.join(Kn(c, Z, n), "/package.json");
          if (s(ge)) {
            try {
              var oe = p(u, ge);
            } catch {
            }
            if (oe && n.packageFilter && (oe = n.packageFilter(oe, Z)), oe && oe.main) {
              if (typeof oe.main != "string") {
                var ft = new TypeError("package \u201C" + oe.name + "\u201D `main` must be a string");
                throw ft.code = "INVALID_PACKAGE_MAIN", ft;
              }
              (oe.main === "." || oe.main === "./") && (oe.main = "index");
              try {
                var L = Q(_e.resolve(Z, oe.main));
                if (L)
                  return L;
                var K = Xe(_e.resolve(Z, oe.main));
                if (K)
                  return K;
              } catch {
              }
            }
          }
          return Q(_e.join(Z, "/index"));
        }
        i(Xe, "loadAsDirectorySync");
        function Bt(Z, ge) {
          for (var oe = i(function() {
            return wF(Z, ge, n);
          }, "thunk"), ft = f ? f(Z, ge, oe, n) : oe(), L = 0; L < ft.length; L++) {
            var K = ft[L];
            if (a(_e.dirname(K))) {
              var xe = Q(K);
              if (xe)
                return xe;
              var H = Xe(K);
              if (H)
                return H;
            }
          }
        }
        i(Bt, "loadNodeModulesSync");
      }, "resolveSync");
    });
    var Bc = l((RG, Cc) => {
      var ts = mc();
      ts.core = xc();
      ts.isCore = gc();
      ts.sync = Fc();
      Cc.exports = ts;
    });
    var Nt = l((wG, Nc) => {
      var MF = Nc.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = MF);
    });
    var tr = l((LG, _c) => {
      var GF = {}.hasOwnProperty;
      _c.exports = function(e, t) {
        return GF.call(e, t);
      };
    });
    var Jr = l((kG, Ic) => {
      Ic.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    });
    var Tr = l((MG, Rc) => {
      Rc.exports = !Jr()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Ke = l((GG, Pc) => {
      var jF = Pc.exports = { version: "2.6.12" };
      typeof __e == "number" && (__e = jF);
    });
    var wc = l((jG, qc) => {
      qc.exports = function(e) {
        if (typeof e != "function")
          throw TypeError(e + " is not a function!");
        return e;
      };
    });
    var kc = l((UG, Lc) => {
      var UF = wc();
      Lc.exports = function(e, t, r) {
        if (UF(e), t === void 0)
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
            return function(n, s, u) {
              return e.call(t, n, s, u);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    });
    var zr = l((YG, Mc) => {
      Mc.exports = function(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      };
    });
    var Qr = l((VG, Gc) => {
      var YF = zr();
      Gc.exports = function(e) {
        if (!YF(e))
          throw TypeError(e + " is not an object!");
        return e;
      };
    });
    var ua = l((KG, Uc) => {
      var jc = zr(), sa = Nt().document, VF = jc(sa) && jc(sa.createElement);
      Uc.exports = function(e) {
        return VF ? sa.createElement(e) : {};
      };
    });
    var aa = l((HG, Yc) => {
      Yc.exports = !Tr() && !Jr()(function() {
        return Object.defineProperty(ua()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var ss = l((WG, Vc) => {
      var is = zr();
      Vc.exports = function(e, t) {
        if (!is(e))
          return e;
        var r, n;
        if (t && typeof (r = e.toString) == "function" && !is(n = r.call(e)) || typeof (r = e.valueOf) == "function" && !is(n = r.call(e)) || !t && typeof (r = e.toString) == "function" && !is(n = r.call(e)))
          return n;
        throw TypeError("Can't convert object to primitive value");
      };
    });
    var gr = l((Hc) => {
      var Kc = Qr(), KF = aa(), HF = ss(), WF = Object.defineProperty;
      Hc.f = Tr() ? Object.defineProperty : i(function(t, r, n) {
        if (Kc(t), r = HF(r, true), Kc(n), KF)
          try {
            return WF(t, r, n);
          } catch {
          }
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported!");
        return "value" in n && (t[r] = n.value), t;
      }, "defineProperty");
    });
    var $n = l(($G, Wc) => {
      Wc.exports = function(e, t) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t };
      };
    });
    var vr = l((JG, Xc) => {
      var XF = gr(), $F = $n();
      Xc.exports = Tr() ? function(e, t, r) {
        return XF.f(e, t, $F(1, r));
      } : function(e, t, r) {
        return e[t] = r, e;
      };
    });
    var Zr = l((zG, Jc) => {
      var us = Nt(), oa = Ke(), $c = kc(), JF = vr(), zF = tr(), as = "prototype", Ie = i(function(e, t, r) {
        var n = e & Ie.F, s = e & Ie.G, u = e & Ie.S, a = e & Ie.P, c = e & Ie.B, p = e & Ie.W, f = s ? oa : oa[t] || (oa[t] = {}), m = f[as], D = s ? us : u ? us[t] : (us[t] || {})[as], d, x, F;
        s && (r = t);
        for (d in r)
          x = !n && D && D[d] !== void 0, !(x && zF(f, d)) && (F = x ? D[d] : r[d], f[d] = s && typeof D[d] != "function" ? r[d] : c && x ? $c(F, us) : p && D[d] == F ? function(O) {
            var g = i(function(j, X, Q) {
              if (this instanceof O) {
                switch (arguments.length) {
                  case 0:
                    return new O();
                  case 1:
                    return new O(j);
                  case 2:
                    return new O(j, X);
                }
                return new O(j, X, Q);
              }
              return O.apply(this, arguments);
            }, "F");
            return g[as] = O[as], g;
          }(F) : a && typeof F == "function" ? $c(Function.call, F) : F, a && ((f.virtual || (f.virtual = {}))[d] = F, e & Ie.R && m && !m[d] && JF(m, d, F)));
      }, "$export");
      Ie.F = 1;
      Ie.G = 2;
      Ie.S = 4;
      Ie.P = 8;
      Ie.B = 16;
      Ie.W = 32;
      Ie.U = 64;
      Ie.R = 128;
      Jc.exports = Ie;
    });
    var la = l((QG, zc) => {
      zc.exports = vr();
    });
    var Jn = l((ZG, Qc) => {
      var QF = 0, ZF = Math.random();
      Qc.exports = function(e) {
        return "Symbol(".concat(e === void 0 ? "" : e, ")_", (++QF + ZF).toString(36));
      };
    });
    var ep = l((ej, Zc) => {
      var Sr = Jn()("meta"), eC = zr(), ca = tr(), tC = gr().f, rC = 0, os = Object.isExtensible || function() {
        return true;
      }, nC = !Jr()(function() {
        return os(Object.preventExtensions({}));
      }), pa = i(function(e) {
        tC(e, Sr, { value: { i: "O" + ++rC, w: {} } });
      }, "setMeta"), iC = i(function(e, t) {
        if (!eC(e))
          return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!ca(e, Sr)) {
          if (!os(e))
            return "F";
          if (!t)
            return "E";
          pa(e);
        }
        return e[Sr].i;
      }, "fastKey"), sC = i(function(e, t) {
        if (!ca(e, Sr)) {
          if (!os(e))
            return true;
          if (!t)
            return false;
          pa(e);
        }
        return e[Sr].w;
      }, "getWeak"), uC = i(function(e) {
        return nC && aC.NEED && os(e) && !ca(e, Sr) && pa(e), e;
      }, "onFreeze"), aC = Zc.exports = { KEY: Sr, NEED: false, fastKey: iC, getWeak: sC, onFreeze: uC };
    });
    var zn = l((tj, tp) => {
      tp.exports = true;
    });
    var ls = l((rj, sp) => {
      var oC = Ke(), rp = Nt(), np = "__core-js_shared__", ip = rp[np] || (rp[np] = {});
      (sp.exports = function(e, t) {
        return ip[e] || (ip[e] = t !== void 0 ? t : {});
      })("versions", []).push({ version: oC.version, mode: zn() ? "pure" : "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
    });
    var _t = l((nj, ap) => {
      var fa = ls()("wks"), lC = Jn(), da = Nt().Symbol, up = typeof da == "function", cC = ap.exports = function(e) {
        return fa[e] || (fa[e] = up && da[e] || (up ? da : lC)("Symbol." + e));
      };
      cC.store = fa;
    });
    var cs = l((ij, lp) => {
      var pC = gr().f, fC = tr(), op = _t()("toStringTag");
      lp.exports = function(e, t, r) {
        e && !fC(e = r ? e : e.prototype, op) && pC(e, op, { configurable: true, value: t });
      };
    });
    var ps = l((cp) => {
      cp.f = _t();
    });
    var fs = l((uj, fp) => {
      var dC = Nt(), pp = Ke(), EC = zn(), mC = ps(), hC = gr().f;
      fp.exports = function(e) {
        var t = pp.Symbol || (pp.Symbol = EC ? {} : dC.Symbol || {});
        e.charAt(0) != "_" && !(e in t) && hC(t, e, { value: mC.f(e) });
      };
    });
    var ds = l((aj, dp) => {
      var DC = {}.toString;
      dp.exports = function(e) {
        return DC.call(e).slice(8, -1);
      };
    });
    var mp = l((oj, Ep) => {
      var yC = ds();
      Ep.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return yC(e) == "String" ? e.split("") : Object(e);
      };
    });
    var Es = l((lj, hp) => {
      hp.exports = function(e) {
        if (e == null)
          throw TypeError("Can't call method on  " + e);
        return e;
      };
    });
    var Fr = l((cj, Dp) => {
      var AC = mp(), xC = Es();
      Dp.exports = function(e) {
        return AC(xC(e));
      };
    });
    var ms = l((pj, yp) => {
      var TC = Math.ceil, gC = Math.floor;
      yp.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? gC : TC)(e);
      };
    });
    var xp = l((fj, Ap) => {
      var vC = ms(), SC = Math.min;
      Ap.exports = function(e) {
        return e > 0 ? SC(vC(e), 9007199254740991) : 0;
      };
    });
    var gp = l((dj, Tp) => {
      var FC = ms(), CC = Math.max, BC = Math.min;
      Tp.exports = function(e, t) {
        return e = FC(e), e < 0 ? CC(e + t, 0) : BC(e, t);
      };
    });
    var Sp = l((Ej, vp) => {
      var OC = Fr(), bC = xp(), NC = gp();
      vp.exports = function(e) {
        return function(t, r, n) {
          var s = OC(t), u = bC(s.length), a = NC(n, u), c;
          if (e && r != r) {
            for (; u > a; )
              if (c = s[a++], c != c)
                return true;
          } else
            for (; u > a; a++)
              if ((e || a in s) && s[a] === r)
                return e || a || 0;
          return !e && -1;
        };
      };
    });
    var hs = l((mj, Cp) => {
      var Fp = ls()("keys"), _C = Jn();
      Cp.exports = function(e) {
        return Fp[e] || (Fp[e] = _C(e));
      };
    });
    var Ea = l((hj, Op) => {
      var Bp = tr(), IC = Fr(), RC = Sp()(false), PC = hs()("IE_PROTO");
      Op.exports = function(e, t) {
        var r = IC(e), n = 0, s = [], u;
        for (u in r)
          u != PC && Bp(r, u) && s.push(u);
        for (; t.length > n; )
          Bp(r, u = t[n++]) && (~RC(s, u) || s.push(u));
        return s;
      };
    });
    var Ds = l((Dj, bp) => {
      bp.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    });
    var Qn = l((yj, Np) => {
      var qC = Ea(), wC = Ds();
      Np.exports = Object.keys || i(function(t) {
        return qC(t, wC);
      }, "keys");
    });
    var ma = l((_p) => {
      _p.f = Object.getOwnPropertySymbols;
    });
    var ys = l((Ip) => {
      Ip.f = {}.propertyIsEnumerable;
    });
    var Pp = l((Tj, Rp) => {
      var LC = Qn(), kC = ma(), MC = ys();
      Rp.exports = function(e) {
        var t = LC(e), r = kC.f;
        if (r)
          for (var n = r(e), s = MC.f, u = 0, a; n.length > u; )
            s.call(e, a = n[u++]) && t.push(a);
        return t;
      };
    });
    var wp = l((gj, qp) => {
      var GC = ds();
      qp.exports = Array.isArray || i(function(t) {
        return GC(t) == "Array";
      }, "isArray");
    });
    var As = l((vj, Lp) => {
      var jC = Es();
      Lp.exports = function(e) {
        return Object(jC(e));
      };
    });
    var Mp = l((Sj, kp) => {
      var UC = gr(), YC = Qr(), VC = Qn();
      kp.exports = Tr() ? Object.defineProperties : i(function(t, r) {
        YC(t);
        for (var n = VC(r), s = n.length, u = 0, a; s > u; )
          UC.f(t, a = n[u++], r[a]);
        return t;
      }, "defineProperties");
    });
    var Up = l((Fj, jp) => {
      var Gp = Nt().document;
      jp.exports = Gp && Gp.documentElement;
    });
    var Ts = l((Cj, Vp) => {
      var KC = Qr(), HC = Mp(), Yp = Ds(), WC = hs()("IE_PROTO"), ha = i(function() {
      }, "Empty"), Da = "prototype", xs = i(function() {
        var e = ua()("iframe"), t = Yp.length, r = "<", n = ">", s;
        for (e.style.display = "none", Up().appendChild(e), e.src = "javascript:", s = e.contentWindow.document, s.open(), s.write(r + "script" + n + "document.F=Object" + r + "/script" + n), s.close(), xs = s.F; t--; )
          delete xs[Da][Yp[t]];
        return xs();
      }, "createDict");
      Vp.exports = Object.create || i(function(t, r) {
        var n;
        return t !== null ? (ha[Da] = KC(t), n = new ha(), ha[Da] = null, n[WC] = t) : n = xs(), r === void 0 ? n : HC(n, r);
      }, "create");
    });
    var ya = l((Kp) => {
      var XC = Ea(), $C = Ds().concat("length", "prototype");
      Kp.f = Object.getOwnPropertyNames || i(function(t) {
        return XC(t, $C);
      }, "getOwnPropertyNames");
    });
    var $p = l((Oj, Xp) => {
      var JC = Fr(), Hp = ya().f, zC = {}.toString, Wp = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], QC = i(function(e) {
        try {
          return Hp(e);
        } catch {
          return Wp.slice();
        }
      }, "getWindowNames");
      Xp.exports.f = i(function(t) {
        return Wp && zC.call(t) == "[object Window]" ? QC(t) : Hp(JC(t));
      }, "getOwnPropertyNames");
    });
    var Qp = l((zp) => {
      var ZC = ys(), eB = $n(), tB = Fr(), rB = ss(), nB = tr(), iB = aa(), Jp = Object.getOwnPropertyDescriptor;
      zp.f = Tr() ? Jp : i(function(t, r) {
        if (t = tB(t), r = rB(r, true), iB)
          try {
            return Jp(t, r);
          } catch {
          }
        if (nB(t, r))
          return eB(!ZC.f.call(t, r), t[r]);
      }, "getOwnPropertyDescriptor");
    });
    var Os = l(() => {
      "use strict";
      var Ss = Nt(), Oe = tr(), Sa = Tr(), Re = Zr(), Zp = la(), sB = ep().KEY, Na = Jr(), _a = ls(), Ia = cs(), uB = Jn(), ti = _t(), aB = ps(), oB = fs(), lB = Pp(), cB = wp(), Fa = Qr(), pB = zr(), fB = As(), Fs = Fr(), Ra = ss(), Ca = $n(), ei = Ts(), nf = $p(), sf = Qp(), Cs = ma(), uf = gr(), dB = Qn(), af = sf.f, Cr = uf.f, of = nf.f, Ue = Ss.Symbol, vs = Ss.JSON, gs = vs && vs.stringify, rr = "prototype", je = ti("_hidden"), ef = ti("toPrimitive"), EB = {}.propertyIsEnumerable, Zn = _a("symbol-registry"), It = _a("symbols"), ri = _a("op-symbols"), Je = Object[rr], en = typeof Ue == "function" && !!Cs.f, Aa = Ss.QObject, Ba = !Aa || !Aa[rr] || !Aa[rr].findChild, Oa = Sa && Na(function() {
        return ei(Cr({}, "a", { get: function() {
          return Cr(this, "a", { value: 7 }).a;
        } })).a != 7;
      }) ? function(e, t, r) {
        var n = af(Je, t);
        n && delete Je[t], Cr(e, t, r), n && e !== Je && Cr(Je, t, n);
      } : Cr, tf = i(function(e) {
        var t = It[e] = ei(Ue[rr]);
        return t._k = e, t;
      }, "wrap"), ba = en && typeof Ue.iterator == "symbol" ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        return e instanceof Ue;
      }, Bs = i(function(t, r, n) {
        return t === Je && Bs(ri, r, n), Fa(t), r = Ra(r, true), Fa(n), Oe(It, r) ? (n.enumerable ? (Oe(t, je) && t[je][r] && (t[je][r] = false), n = ei(n, { enumerable: Ca(0, false) })) : (Oe(t, je) || Cr(t, je, Ca(1, {})), t[je][r] = true), Oa(t, r, n)) : Cr(t, r, n);
      }, "defineProperty"), lf = i(function(t, r) {
        Fa(t);
        for (var n = lB(r = Fs(r)), s = 0, u = n.length, a; u > s; )
          Bs(t, a = n[s++], r[a]);
        return t;
      }, "defineProperties"), mB = i(function(t, r) {
        return r === void 0 ? ei(t) : lf(ei(t), r);
      }, "create"), rf = i(function(t) {
        var r = EB.call(this, t = Ra(t, true));
        return this === Je && Oe(It, t) && !Oe(ri, t) ? false : r || !Oe(this, t) || !Oe(It, t) || Oe(this, je) && this[je][t] ? r : true;
      }, "propertyIsEnumerable"), cf = i(function(t, r) {
        if (t = Fs(t), r = Ra(r, true), !(t === Je && Oe(It, r) && !Oe(ri, r))) {
          var n = af(t, r);
          return n && Oe(It, r) && !(Oe(t, je) && t[je][r]) && (n.enumerable = true), n;
        }
      }, "getOwnPropertyDescriptor"), pf = i(function(t) {
        for (var r = of(Fs(t)), n = [], s = 0, u; r.length > s; )
          !Oe(It, u = r[s++]) && u != je && u != sB && n.push(u);
        return n;
      }, "getOwnPropertyNames"), ff = i(function(t) {
        for (var r = t === Je, n = of(r ? ri : Fs(t)), s = [], u = 0, a; n.length > u; )
          Oe(It, a = n[u++]) && (r ? Oe(Je, a) : true) && s.push(It[a]);
        return s;
      }, "getOwnPropertySymbols");
      en || (Ue = i(function() {
        if (this instanceof Ue)
          throw TypeError("Symbol is not a constructor!");
        var t = uB(arguments.length > 0 ? arguments[0] : void 0), r = i(function(n) {
          this === Je && r.call(ri, n), Oe(this, je) && Oe(this[je], t) && (this[je][t] = false), Oa(this, t, Ca(1, n));
        }, "$set");
        return Sa && Ba && Oa(Je, t, { configurable: true, set: r }), tf(t);
      }, "Symbol"), Zp(Ue[rr], "toString", i(function() {
        return this._k;
      }, "toString")), sf.f = cf, uf.f = Bs, ya().f = nf.f = pf, ys().f = rf, Cs.f = ff, Sa && !zn() && Zp(Je, "propertyIsEnumerable", rf, true), aB.f = function(e) {
        return tf(ti(e));
      });
      Re(Re.G + Re.W + Re.F * !en, { Symbol: Ue });
      for (xa = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ta = 0; xa.length > Ta; )
        ti(xa[Ta++]);
      var xa, Ta;
      for (ga = dB(ti.store), va = 0; ga.length > va; )
        oB(ga[va++]);
      var ga, va;
      Re(Re.S + Re.F * !en, "Symbol", { for: function(e) {
        return Oe(Zn, e += "") ? Zn[e] : Zn[e] = Ue(e);
      }, keyFor: i(function(t) {
        if (!ba(t))
          throw TypeError(t + " is not a symbol!");
        for (var r in Zn)
          if (Zn[r] === t)
            return r;
      }, "keyFor"), useSetter: function() {
        Ba = true;
      }, useSimple: function() {
        Ba = false;
      } });
      Re(Re.S + Re.F * !en, "Object", { create: mB, defineProperty: Bs, defineProperties: lf, getOwnPropertyDescriptor: cf, getOwnPropertyNames: pf, getOwnPropertySymbols: ff });
      var hB = Na(function() {
        Cs.f(1);
      });
      Re(Re.S + Re.F * hB, "Object", { getOwnPropertySymbols: i(function(t) {
        return Cs.f(fB(t));
      }, "getOwnPropertySymbols") });
      vs && Re(Re.S + Re.F * (!en || Na(function() {
        var e = Ue();
        return gs([e]) != "[null]" || gs({ a: e }) != "{}" || gs(Object(e)) != "{}";
      })), "JSON", { stringify: i(function(t) {
        for (var r = [t], n = 1, s, u; arguments.length > n; )
          r.push(arguments[n++]);
        if (u = s = r[1], !(!pB(s) && t === void 0 || ba(t)))
          return cB(s) || (s = i(function(a, c) {
            if (typeof u == "function" && (c = u.call(this, a, c)), !ba(c))
              return c;
          }, "replacer")), r[1] = s, gs.apply(vs, r);
      }, "stringify") });
      Ue[rr][ef] || vr()(Ue[rr], ef, Ue[rr].valueOf);
      Ia(Ue, "Symbol");
      Ia(Math, "Math", true);
      Ia(Ss.JSON, "JSON", true);
    });
    var Ef = l((Ij, df) => {
      Os();
      df.exports = Ke().Object.getOwnPropertySymbols;
    });
    var hf = l((Rj, mf) => {
      mf.exports = { default: Ef(), __esModule: true };
    });
    var yf = l((Pj, Df) => {
      Df.exports = function() {
      };
    });
    var xf = l((qj, Af) => {
      Af.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    });
    var ni = l((wj, Tf) => {
      Tf.exports = {};
    });
    var Sf = l((Lj, vf) => {
      "use strict";
      var DB = Ts(), yB = $n(), AB = cs(), gf = {};
      vr()(gf, _t()("iterator"), function() {
        return this;
      });
      vf.exports = function(e, t, r) {
        e.prototype = DB(gf, { next: yB(1, r) }), AB(e, t + " Iterator");
      };
    });
    var Bf = l((kj, Cf) => {
      var xB = tr(), TB = As(), Ff = hs()("IE_PROTO"), gB = Object.prototype;
      Cf.exports = Object.getPrototypeOf || function(e) {
        return e = TB(e), xB(e, Ff) ? e[Ff] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? gB : null;
      };
    });
    var wa = l((Mj, Rf) => {
      "use strict";
      var Of = zn(), Pa = Zr(), vB = la(), bf = vr(), Nf = ni(), SB = Sf(), FB = cs(), CB = Bf(), ii = _t()("iterator"), qa = !([].keys && "next" in [].keys()), BB = "@@iterator", _f = "keys", bs = "values", If = i(function() {
        return this;
      }, "returnThis");
      Rf.exports = function(e, t, r, n, s, u, a) {
        SB(r, t, n);
        var c = i(function(Q) {
          if (!qa && Q in D)
            return D[Q];
          switch (Q) {
            case _f:
              return i(function() {
                return new r(this, Q);
              }, "keys");
            case bs:
              return i(function() {
                return new r(this, Q);
              }, "values");
          }
          return i(function() {
            return new r(this, Q);
          }, "entries");
        }, "getMethod"), p = t + " Iterator", f = s == bs, m = false, D = e.prototype, d = D[ii] || D[BB] || s && D[s], x = d || c(s), F = s ? f ? c("entries") : x : void 0, O = t == "Array" && D.entries || d, g, j, X;
        if (O && (X = CB(O.call(new e())), X !== Object.prototype && X.next && (FB(X, p, true), !Of && typeof X[ii] != "function" && bf(X, ii, If))), f && d && d.name !== bs && (m = true, x = i(function() {
          return d.call(this);
        }, "values")), (!Of || a) && (qa || m || !D[ii]) && bf(D, ii, x), Nf[t] = x, Nf[p] = If, s)
          if (g = { values: f ? x : c(bs), keys: u ? x : c(_f), entries: F }, a)
            for (j in g)
              j in D || vB(D, j, g[j]);
          else
            Pa(Pa.P + Pa.F * (qa || m), t, g);
        return g;
      };
    });
    var wf = l((Gj, qf) => {
      "use strict";
      var La = yf(), Ns = xf(), Pf = ni(), OB = Fr();
      qf.exports = wa()(Array, "Array", function(e, t) {
        this._t = OB(e), this._i = 0, this._k = t;
      }, function() {
        var e = this._t, t = this._k, r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, Ns(1)) : t == "keys" ? Ns(0, r) : t == "values" ? Ns(0, e[r]) : Ns(0, [r, e[r]]);
      }, "values");
      Pf.Arguments = Pf.Array;
      La("keys");
      La("values");
      La("entries");
    });
    var Ma = l(() => {
      wf();
      var bB = Nt(), NB = vr(), Lf = ni(), kf = _t()("toStringTag"), Mf = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
      for (_s = 0; _s < Mf.length; _s++)
        Is = Mf[_s], ka = bB[Is], Rs = ka && ka.prototype, Rs && !Rs[kf] && NB(Rs, kf, Is), Lf[Is] = Lf.Array;
      var Is, ka, Rs, _s;
    });
    var jf = l((Yj, Gf) => {
      var _B = ms(), IB = Es();
      Gf.exports = function(e) {
        return function(t, r) {
          var n = String(IB(t)), s = _B(r), u = n.length, a, c;
          return s < 0 || s >= u ? e ? "" : void 0 : (a = n.charCodeAt(s), a < 55296 || a > 56319 || s + 1 === u || (c = n.charCodeAt(s + 1)) < 56320 || c > 57343 ? e ? n.charAt(s) : a : e ? n.slice(s, s + 2) : (a - 55296 << 10) + (c - 56320) + 65536);
        };
      };
    });
    var Ga = l(() => {
      "use strict";
      var RB = jf()(true);
      wa()(String, "String", function(e) {
        this._t = String(e), this._i = 0;
      }, function() {
        var e = this._t, t = this._i, r;
        return t >= e.length ? { value: void 0, done: true } : (r = RB(e, t), this._i += r.length, { value: r, done: false });
      });
    });
    var Yf = l((Hj, Uf) => {
      var ja = ds(), PB = _t()("toStringTag"), qB = ja(function() {
        return arguments;
      }()) == "Arguments", wB = i(function(e, t) {
        try {
          return e[t];
        } catch {
        }
      }, "tryGet");
      Uf.exports = function(e) {
        var t, r, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = wB(t = Object(e), PB)) == "string" ? r : qB ? ja(t) : (n = ja(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : n;
      };
    });
    var Kf = l((Wj, Vf) => {
      var LB = Yf(), kB = _t()("iterator"), MB = ni();
      Vf.exports = Ke().getIteratorMethod = function(e) {
        if (e != null)
          return e[kB] || e["@@iterator"] || MB[LB(e)];
      };
    });
    var Wf = l((Xj, Hf) => {
      var GB = Qr(), jB = Kf();
      Hf.exports = Ke().getIterator = function(e) {
        var t = jB(e);
        if (typeof t != "function")
          throw TypeError(e + " is not iterable!");
        return GB(t.call(e));
      };
    });
    var $f = l(($j, Xf) => {
      Ma();
      Ga();
      Xf.exports = Wf();
    });
    var si = l((Jj, Jf) => {
      Jf.exports = { default: $f(), __esModule: true };
    });
    var Qf = l((zj, zf) => {
      var Ua = Zr(), UB = Ke(), YB = Jr();
      zf.exports = function(e, t) {
        var r = (UB.Object || {})[e] || Object[e], n = {};
        n[e] = t(r), Ua(Ua.S + Ua.F * YB(function() {
          r(1);
        }), "Object", n);
      };
    });
    var Zf = l(() => {
      var VB = As(), KB = Qn();
      Qf()("keys", function() {
        return i(function(t) {
          return KB(VB(t));
        }, "keys");
      });
    });
    var t0 = l((eU, e0) => {
      Zf();
      e0.exports = Ke().Object.keys;
    });
    var Ya = l((tU, r0) => {
      r0.exports = { default: t0(), __esModule: true };
    });
    var u0 = l((rU, s0) => {
      var n0 = Ke(), i0 = n0.JSON || (n0.JSON = { stringify: JSON.stringify });
      s0.exports = i(function(t) {
        return i0.stringify.apply(i0, arguments);
      }, "stringify");
    });
    var Ps = l((nU, a0) => {
      a0.exports = { default: u0(), __esModule: true };
    });
    var l0 = l((iU, o0) => {
      Os();
      o0.exports = Ke().Symbol.for;
    });
    var p0 = l((sU, c0) => {
      c0.exports = { default: l0(), __esModule: true };
    });
    var qs = l((Y) => {
      "use strict";
      Y.__esModule = true;
      Y.NOT_LOCAL_BINDING = Y.BLOCK_SCOPED_SYMBOL = Y.INHERIT_KEYS = Y.UNARY_OPERATORS = Y.STRING_UNARY_OPERATORS = Y.NUMBER_UNARY_OPERATORS = Y.BOOLEAN_UNARY_OPERATORS = Y.BINARY_OPERATORS = Y.NUMBER_BINARY_OPERATORS = Y.BOOLEAN_BINARY_OPERATORS = Y.COMPARISON_BINARY_OPERATORS = Y.EQUALITY_BINARY_OPERATORS = Y.BOOLEAN_NUMBER_BINARY_OPERATORS = Y.UPDATE_OPERATORS = Y.LOGICAL_OPERATORS = Y.COMMENT_KEYS = Y.FOR_INIT_KEYS = Y.FLATTENABLE_KEYS = Y.STATEMENT_OR_BLOCK_KEYS = void 0;
      var HB = p0(), f0 = WB(HB);
      function WB(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(WB, "_interopRequireDefault");
      var uU = Y.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"], aU = Y.FLATTENABLE_KEYS = ["body", "expressions"], oU = Y.FOR_INIT_KEYS = ["left", "init"], lU = Y.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"], cU = Y.LOGICAL_OPERATORS = ["||", "&&"], pU = Y.UPDATE_OPERATORS = ["++", "--"], XB = Y.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="], $B = Y.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="], JB = Y.COMPARISON_BINARY_OPERATORS = [].concat($B, ["in", "instanceof"]), zB = Y.BOOLEAN_BINARY_OPERATORS = [].concat(JB, XB), QB = Y.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"], fU = Y.BINARY_OPERATORS = ["+"].concat(QB, zB), ZB = Y.BOOLEAN_UNARY_OPERATORS = ["delete", "!"], eO = Y.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"], tO = Y.STRING_UNARY_OPERATORS = ["typeof"], dU = Y.UNARY_OPERATORS = ["void"].concat(ZB, eO, tO), EU = Y.INHERIT_KEYS = { optional: ["typeAnnotation", "typeParameters", "returnType"], force: ["start", "loc", "end"] }, mU = Y.BLOCK_SCOPED_SYMBOL = (0, f0.default)("var used to be block scoped"), hU = Y.NOT_LOCAL_BINDING = (0, f0.default)("should not be considered a local binding");
    });
    var E0 = l(() => {
      var d0 = Zr();
      d0(d0.S, "Object", { create: Ts() });
    });
    var h0 = l((xU, m0) => {
      E0();
      var rO = Ke().Object;
      m0.exports = i(function(t, r) {
        return rO.create(t, r);
      }, "create");
    });
    var y0 = l((TU, D0) => {
      D0.exports = { default: h0(), __esModule: true };
    });
    var Ka = l((ws) => {
      "use strict";
      ws.__esModule = true;
      var nO = y0(), iO = aO(nO);
      ws.getBindingIdentifiers = Va;
      ws.getOuterBindingIdentifiers = oO;
      var sO = Rt(), tn = uO(sO);
      function uO(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(uO, "_interopRequireWildcard");
      function aO(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(aO, "_interopRequireDefault");
      function Va(e, t, r) {
        for (var n = [].concat(e), s = (0, iO.default)(null); n.length; ) {
          var u = n.shift();
          if (!!u) {
            var a = tn.getBindingIdentifiers.keys[u.type];
            if (tn.isIdentifier(u)) {
              if (t) {
                var c = s[u.name] = s[u.name] || [];
                c.push(u);
              } else
                s[u.name] = u;
              continue;
            }
            if (tn.isExportDeclaration(u)) {
              tn.isDeclaration(u.declaration) && n.push(u.declaration);
              continue;
            }
            if (r) {
              if (tn.isFunctionDeclaration(u)) {
                n.push(u.id);
                continue;
              }
              if (tn.isFunctionExpression(u))
                continue;
            }
            if (a)
              for (var p = 0; p < a.length; p++) {
                var f = a[p];
                u[f] && (n = n.concat(u[f]));
              }
          }
        }
        return s;
      }
      i(Va, "getBindingIdentifiers");
      Va.keys = { DeclareClass: ["id"], DeclareFunction: ["id"], DeclareModule: ["id"], DeclareVariable: ["id"], InterfaceDeclaration: ["id"], TypeAlias: ["id"], OpaqueType: ["id"], CatchClause: ["param"], LabeledStatement: ["label"], UnaryExpression: ["argument"], AssignmentExpression: ["left"], ImportSpecifier: ["local"], ImportNamespaceSpecifier: ["local"], ImportDefaultSpecifier: ["local"], ImportDeclaration: ["specifiers"], ExportSpecifier: ["exported"], ExportNamespaceSpecifier: ["exported"], ExportDefaultSpecifier: ["exported"], FunctionDeclaration: ["id", "params"], FunctionExpression: ["id", "params"], ClassDeclaration: ["id"], ClassExpression: ["id"], RestElement: ["argument"], UpdateExpression: ["argument"], RestProperty: ["argument"], ObjectProperty: ["value"], AssignmentPattern: ["left"], ArrayPattern: ["elements"], ObjectPattern: ["properties"], VariableDeclaration: ["declarations"], VariableDeclarator: ["id"] };
      function oO(e, t) {
        return Va(e, t, true);
      }
      i(oO, "getOuterBindingIdentifiers");
    });
    var x0 = l((vU, A0) => {
      Ga();
      Ma();
      A0.exports = ps().f("iterator");
    });
    var g0 = l((SU, T0) => {
      T0.exports = { default: x0(), __esModule: true };
    });
    var v0 = l(() => {
    });
    var S0 = l(() => {
      fs()("asyncIterator");
    });
    var F0 = l(() => {
      fs()("observable");
    });
    var B0 = l((_U, C0) => {
      Os();
      v0();
      S0();
      F0();
      C0.exports = Ke().Symbol;
    });
    var b0 = l((IU, O0) => {
      O0.exports = { default: B0(), __esModule: true };
    });
    var Xa = l((Wa) => {
      "use strict";
      Wa.__esModule = true;
      var lO = g0(), N0 = _0(lO), cO = b0(), nr = _0(cO), Ha = typeof nr.default == "function" && typeof N0.default == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof nr.default == "function" && e.constructor === nr.default && e !== nr.default.prototype ? "symbol" : typeof e;
      };
      function _0(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(_0, "_interopRequireDefault");
      Wa.default = typeof nr.default == "function" && Ha(N0.default) === "symbol" ? function(e) {
        return typeof e > "u" ? "undefined" : Ha(e);
      } : function(e) {
        return e && typeof nr.default == "function" && e.constructor === nr.default && e !== nr.default.prototype ? "symbol" : typeof e > "u" ? "undefined" : Ha(e);
      };
    });
    var R0 = l((PU, I0) => {
      (function() {
        "use strict";
        function e(a) {
          if (a == null)
            return false;
          switch (a.type) {
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
        function t(a) {
          if (a == null)
            return false;
          switch (a.type) {
            case "DoWhileStatement":
            case "ForInStatement":
            case "ForStatement":
            case "WhileStatement":
              return true;
          }
          return false;
        }
        i(t, "isIterationStatement");
        function r(a) {
          if (a == null)
            return false;
          switch (a.type) {
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
        function n(a) {
          return r(a) || a != null && a.type === "FunctionDeclaration";
        }
        i(n, "isSourceElement");
        function s(a) {
          switch (a.type) {
            case "IfStatement":
              return a.alternate != null ? a.alternate : a.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return a.body;
          }
          return null;
        }
        i(s, "trailingStatement");
        function u(a) {
          var c;
          if (a.type !== "IfStatement" || a.alternate == null)
            return false;
          c = a.consequent;
          do {
            if (c.type === "IfStatement" && c.alternate == null)
              return true;
            c = s(c);
          } while (c);
          return false;
        }
        i(u, "isProblematicIfStatement"), I0.exports = { isExpression: e, isStatement: r, isIterationStatement: t, isSourceElement: n, isProblematicIfStatement: u, trailingStatement: s };
      })();
    });
    var $a = l((qU, P0) => {
      (function() {
        "use strict";
        var e, t, r, n, s, u;
        t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, e = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
        function a(g) {
          return 48 <= g && g <= 57;
        }
        i(a, "isDecimalDigit");
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
        function m(g) {
          return g === 10 || g === 13 || g === 8232 || g === 8233;
        }
        i(m, "isLineTerminator");
        function D(g) {
          if (g <= 65535)
            return String.fromCharCode(g);
          var j = String.fromCharCode(Math.floor((g - 65536) / 1024) + 55296), X = String.fromCharCode((g - 65536) % 1024 + 56320);
          return j + X;
        }
        for (i(D, "fromCodePoint"), n = new Array(128), u = 0; u < 128; ++u)
          n[u] = u >= 97 && u <= 122 || u >= 65 && u <= 90 || u === 36 || u === 95;
        for (s = new Array(128), u = 0; u < 128; ++u)
          s[u] = u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57 || u === 36 || u === 95;
        function d(g) {
          return g < 128 ? n[g] : t.NonAsciiIdentifierStart.test(D(g));
        }
        i(d, "isIdentifierStartES5");
        function x(g) {
          return g < 128 ? s[g] : t.NonAsciiIdentifierPart.test(D(g));
        }
        i(x, "isIdentifierPartES5");
        function F(g) {
          return g < 128 ? n[g] : e.NonAsciiIdentifierStart.test(D(g));
        }
        i(F, "isIdentifierStartES6");
        function O(g) {
          return g < 128 ? s[g] : e.NonAsciiIdentifierPart.test(D(g));
        }
        i(O, "isIdentifierPartES6"), P0.exports = { isDecimalDigit: a, isHexDigit: c, isOctalDigit: p, isWhiteSpace: f, isLineTerminator: m, isIdentifierStartES5: d, isIdentifierPartES5: x, isIdentifierStartES6: F, isIdentifierPartES6: O };
      })();
    });
    var w0 = l((wU, q0) => {
      (function() {
        "use strict";
        var e = $a();
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
        function u(d, x) {
          return d === "null" || d === "true" || d === "false" || n(d, x);
        }
        i(u, "isReservedWordES6");
        function a(d) {
          return d === "eval" || d === "arguments";
        }
        i(a, "isRestrictedWord");
        function c(d) {
          var x, F, O;
          if (d.length === 0 || (O = d.charCodeAt(0), !e.isIdentifierStartES5(O)))
            return false;
          for (x = 1, F = d.length; x < F; ++x)
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
          var x, F, O, g, j;
          if (d.length === 0)
            return false;
          for (j = e.isIdentifierStartES6, x = 0, F = d.length; x < F; ++x) {
            if (O = d.charCodeAt(x), 55296 <= O && O <= 56319) {
              if (++x, x >= F || (g = d.charCodeAt(x), !(56320 <= g && g <= 57343)))
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
        function m(d, x) {
          return c(d) && !s(d, x);
        }
        i(m, "isIdentifierES5");
        function D(d, x) {
          return f(d) && !u(d, x);
        }
        i(D, "isIdentifierES6"), q0.exports = { isKeywordES5: r, isKeywordES6: n, isReservedWordES5: s, isReservedWordES6: u, isRestrictedWord: a, isIdentifierNameES5: c, isIdentifierNameES6: f, isIdentifierES5: m, isIdentifierES6: D };
      })();
    });
    var L0 = l((Ls) => {
      (function() {
        "use strict";
        Ls.ast = R0(), Ls.code = $a(), Ls.keyword = w0();
      })();
    });
    var j0 = l((ze) => {
      "use strict";
      ze.__esModule = true;
      var pO = Ya(), fO = Ms(pO), dO = Xa(), ks = Ms(dO), EO = si(), M0 = Ms(EO);
      ze.isBinding = AO;
      ze.isReferenced = xO;
      ze.isValidIdentifier = TO;
      ze.isLet = gO;
      ze.isBlockScoped = vO;
      ze.isVar = SO;
      ze.isSpecifierDefault = FO;
      ze.isScope = CO;
      ze.isImmutable = BO;
      ze.isNodesEquivalent = Ja;
      var mO = Ka(), hO = L0(), k0 = Ms(hO), DO = Rt(), He = yO(DO), G0 = qs();
      function yO(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(yO, "_interopRequireWildcard");
      function Ms(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Ms, "_interopRequireDefault");
      function AO(e, t) {
        var r = mO.getBindingIdentifiers.keys[t.type];
        if (r)
          for (var n = 0; n < r.length; n++) {
            var s = r[n], u = t[s];
            if (Array.isArray(u)) {
              if (u.indexOf(e) >= 0)
                return true;
            } else if (u === e)
              return true;
          }
        return false;
      }
      i(AO, "isBinding");
      function xO(e, t) {
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
            for (var s = t.params, r = Array.isArray(s), n = 0, s = r ? s : (0, M0.default)(s); ; ) {
              var u;
              if (r) {
                if (n >= s.length)
                  break;
                u = s[n++];
              } else {
                if (n = s.next(), n.done)
                  break;
                u = n.value;
              }
              var a = u;
              if (a === e)
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
      i(xO, "isReferenced");
      function TO(e) {
        return typeof e != "string" || k0.default.keyword.isReservedWordES6(e, true) || e === "await" ? false : k0.default.keyword.isIdentifierNameES6(e);
      }
      i(TO, "isValidIdentifier");
      function gO(e) {
        return He.isVariableDeclaration(e) && (e.kind !== "var" || e[G0.BLOCK_SCOPED_SYMBOL]);
      }
      i(gO, "isLet");
      function vO(e) {
        return He.isFunctionDeclaration(e) || He.isClassDeclaration(e) || He.isLet(e);
      }
      i(vO, "isBlockScoped");
      function SO(e) {
        return He.isVariableDeclaration(e, { kind: "var" }) && !e[G0.BLOCK_SCOPED_SYMBOL];
      }
      i(SO, "isVar");
      function FO(e) {
        return He.isImportDefaultSpecifier(e) || He.isIdentifier(e.imported || e.exported, { name: "default" });
      }
      i(FO, "isSpecifierDefault");
      function CO(e, t) {
        return He.isBlockStatement(e) && He.isFunction(t, { body: e }) ? false : He.isScopable(e);
      }
      i(CO, "isScope");
      function BO(e) {
        return He.isType(e.type, "Immutable") ? true : He.isIdentifier(e) ? e.name === "undefined" : false;
      }
      i(BO, "isImmutable");
      function Ja(e, t) {
        if ((typeof e > "u" ? "undefined" : (0, ks.default)(e)) !== "object" || (typeof e > "u" ? "undefined" : (0, ks.default)(e)) !== "object" || e == null || t == null)
          return e === t;
        if (e.type !== t.type)
          return false;
        for (var r = (0, fO.default)(He.NODE_FIELDS[e.type] || e.type), u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, M0.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var c = a;
          if ((0, ks.default)(e[c]) !== (0, ks.default)(t[c]))
            return false;
          if (Array.isArray(e[c])) {
            if (!Array.isArray(t[c]) || e[c].length !== t[c].length)
              return false;
            for (var p = 0; p < e[c].length; p++)
              if (!Ja(e[c][p], t[c][p]))
                return false;
            continue;
          }
          if (!Ja(e[c], t[c]))
            return false;
        }
        return true;
      }
      i(Ja, "isNodesEquivalent");
    });
    var Y0 = l(() => {
      var U0 = Zr();
      U0(U0.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    });
    var K0 = l((jU, V0) => {
      Y0();
      V0.exports = 9007199254740991;
    });
    var W0 = l((UU, H0) => {
      H0.exports = { default: K0(), __esModule: true };
    });
    var za = l((YU, X0) => {
      var OO = typeof global == "object" && global && global.Object === Object && global;
      X0.exports = OO;
    });
    var rt = l((VU, $0) => {
      var bO = za(), NO = typeof self == "object" && self && self.Object === Object && self, _O = bO || NO || Function("return this")();
      $0.exports = _O;
    });
    var Gs = l((KU, J0) => {
      var IO = rt(), RO = IO.Symbol;
      J0.exports = RO;
    });
    var ed = l((HU, Z0) => {
      var z0 = Gs(), Q0 = Object.prototype, PO = Q0.hasOwnProperty, qO = Q0.toString, ui = z0 ? z0.toStringTag : void 0;
      function wO(e) {
        var t = PO.call(e, ui), r = e[ui];
        try {
          e[ui] = void 0;
          var n = true;
        } catch {
        }
        var s = qO.call(e);
        return n && (t ? e[ui] = r : delete e[ui]), s;
      }
      i(wO, "getRawTag");
      Z0.exports = wO;
    });
    var rd = l((WU, td) => {
      var LO = Object.prototype, kO = LO.toString;
      function MO(e) {
        return kO.call(e);
      }
      i(MO, "objectToString");
      td.exports = MO;
    });
    var Br = l((XU, sd) => {
      var nd = Gs(), GO = ed(), jO = rd(), UO = "[object Null]", YO = "[object Undefined]", id = nd ? nd.toStringTag : void 0;
      function VO(e) {
        return e == null ? e === void 0 ? YO : UO : id && id in Object(e) ? GO(e) : jO(e);
      }
      i(VO, "baseGetTag");
      sd.exports = VO;
    });
    var Qa = l(($U, ud) => {
      function KO(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      i(KO, "overArg");
      ud.exports = KO;
    });
    var js = l((JU, ad) => {
      var HO = Qa(), WO = HO(Object.getPrototypeOf, Object);
      ad.exports = WO;
    });
    var ir = l((zU, od) => {
      function XO(e) {
        return e != null && typeof e == "object";
      }
      i(XO, "isObjectLike");
      od.exports = XO;
    });
    var pd = l((QU, cd) => {
      var $O = Br(), JO = js(), zO = ir(), QO = "[object Object]", ZO = Function.prototype, eb = Object.prototype, ld = ZO.toString, tb = eb.hasOwnProperty, rb = ld.call(Object);
      function nb(e) {
        if (!zO(e) || $O(e) != QO)
          return false;
        var t = JO(e);
        if (t === null)
          return true;
        var r = tb.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && ld.call(r) == rb;
      }
      i(nb, "isPlainObject");
      cd.exports = nb;
    });
    var dd = l((ZU, fd) => {
      var ib = Br(), sb = ir(), ub = "[object RegExp]";
      function ab(e) {
        return sb(e) && ib(e) == ub;
      }
      i(ab, "baseIsRegExp");
      fd.exports = ab;
    });
    var ai = l((eY, Ed) => {
      function ob(e) {
        return function(t) {
          return e(t);
        };
      }
      i(ob, "baseUnary");
      Ed.exports = ob;
    });
    var ci = l((oi, rn) => {
      var lb = za(), md = typeof oi == "object" && oi && !oi.nodeType && oi, li = md && typeof rn == "object" && rn && !rn.nodeType && rn, cb = li && li.exports === md, Za = cb && lb.process, pb = function() {
        try {
          var e = li && li.require && li.require("util").types;
          return e || Za && Za.binding && Za.binding("util");
        } catch {
        }
      }();
      rn.exports = pb;
    });
    var Ad = l((tY, yd) => {
      var fb = dd(), db = ai(), hd = ci(), Dd = hd && hd.isRegExp, Eb = Dd ? db(Dd) : fb;
      yd.exports = Eb;
    });
    var gd = l((nt) => {
      "use strict";
      nt.__esModule = true;
      var mb = W0(), hb = pi(mb), Db = Ps(), xd = pi(Db), yb = si(), eo = pi(yb);
      nt.toComputedKey = Fb;
      nt.toSequenceExpression = Cb;
      nt.toKeyAlias = Or;
      nt.toIdentifier = Td;
      nt.toBindingIdentifierName = Bb;
      nt.toStatement = Ob;
      nt.toExpression = bb;
      nt.toBlock = Nb;
      nt.valueToNode = _b;
      var Ab = pd(), xb = pi(Ab), Tb = Ad(), gb = pi(Tb), vb = Rt(), M = Sb(vb);
      function Sb(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(Sb, "_interopRequireWildcard");
      function pi(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(pi, "_interopRequireDefault");
      function Fb(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key || e.property;
        return e.computed || M.isIdentifier(t) && (t = M.stringLiteral(t.name)), t;
      }
      i(Fb, "toComputedKey");
      function Us(e, t, r) {
        for (var n = [], s = true, c = e, u = Array.isArray(c), a = 0, c = u ? c : (0, eo.default)(c); ; ) {
          var p;
          if (u) {
            if (a >= c.length)
              break;
            p = c[a++];
          } else {
            if (a = c.next(), a.done)
              break;
            p = a.value;
          }
          var f = p;
          if (s = false, M.isExpression(f))
            n.push(f);
          else if (M.isExpressionStatement(f))
            n.push(f.expression);
          else if (M.isVariableDeclaration(f)) {
            if (f.kind !== "var")
              return;
            for (var d = f.declarations, m = Array.isArray(d), D = 0, d = m ? d : (0, eo.default)(d); ; ) {
              var x;
              if (m) {
                if (D >= d.length)
                  break;
                x = d[D++];
              } else {
                if (D = d.next(), D.done)
                  break;
                x = D.value;
              }
              var F = x, O = M.getBindingIdentifiers(F);
              for (var g in O)
                r.push({ kind: f.kind, id: O[g] });
              F.init && n.push(M.assignmentExpression("=", F.id, F.init));
            }
            s = true;
          } else if (M.isIfStatement(f)) {
            var j = f.consequent ? Us([f.consequent], t, r) : t.buildUndefinedNode(), X = f.alternate ? Us([f.alternate], t, r) : t.buildUndefinedNode();
            if (!j || !X)
              return;
            n.push(M.conditionalExpression(f.test, j, X));
          } else if (M.isBlockStatement(f)) {
            var Q = Us(f.body, t, r);
            if (!Q)
              return;
            n.push(Q);
          } else if (M.isEmptyStatement(f))
            s = true;
          else
            return;
        }
        return s && n.push(t.buildUndefinedNode()), n.length === 1 ? n[0] : M.sequenceExpression(n);
      }
      i(Us, "gatherSequenceExpressions");
      function Cb(e, t) {
        if (!(!e || !e.length)) {
          var r = [], n = Us(e, t, r);
          if (!!n) {
            for (var a = r, s = Array.isArray(a), u = 0, a = s ? a : (0, eo.default)(a); ; ) {
              var c;
              if (s) {
                if (u >= a.length)
                  break;
                c = a[u++];
              } else {
                if (u = a.next(), u.done)
                  break;
                c = u.value;
              }
              var p = c;
              t.push(p);
            }
            return n;
          }
        }
      }
      i(Cb, "toSequenceExpression");
      function Or(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.key, r = void 0;
        return e.kind === "method" ? Or.increment() + "" : (M.isIdentifier(t) ? r = t.name : M.isStringLiteral(t) ? r = (0, xd.default)(t.value) : r = (0, xd.default)(M.removePropertiesDeep(M.cloneDeep(t))), e.computed && (r = "[" + r + "]"), e.static && (r = "static:" + r), r);
      }
      i(Or, "toKeyAlias");
      Or.uid = 0;
      Or.increment = function() {
        return Or.uid >= hb.default ? Or.uid = 0 : Or.uid++;
      };
      function Td(e) {
        return e = e + "", e = e.replace(/[^a-zA-Z0-9$_]/g, "-"), e = e.replace(/^[-0-9]+/, ""), e = e.replace(/[-\s]+(.)?/g, function(t, r) {
          return r ? r.toUpperCase() : "";
        }), M.isValidIdentifier(e) || (e = "_" + e), e || "_";
      }
      i(Td, "toIdentifier");
      function Bb(e) {
        return e = Td(e), (e === "eval" || e === "arguments") && (e = "_" + e), e;
      }
      i(Bb, "toBindingIdentifierName");
      function Ob(e, t) {
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
      i(Ob, "toStatement");
      function bb(e) {
        if (M.isExpressionStatement(e) && (e = e.expression), M.isExpression(e))
          return e;
        if (M.isClass(e) ? e.type = "ClassExpression" : M.isFunction(e) && (e.type = "FunctionExpression"), !M.isExpression(e))
          throw new Error("cannot turn " + e.type + " to an expression");
        return e;
      }
      i(bb, "toExpression");
      function Nb(e, t) {
        return M.isBlockStatement(e) ? e : (M.isEmptyStatement(e) && (e = []), Array.isArray(e) || (M.isStatement(e) || (M.isFunction(t) ? e = M.returnStatement(e) : e = M.expressionStatement(e)), e = [e]), M.blockStatement(e));
      }
      i(Nb, "toBlock");
      function _b(e) {
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
        if ((0, gb.default)(e)) {
          var t = e.source, r = e.toString().match(/\/([a-z]+|)$/)[1];
          return M.regExpLiteral(t, r);
        }
        if (Array.isArray(e))
          return M.arrayExpression(e.map(M.valueToNode));
        if ((0, xb.default)(e)) {
          var n = [];
          for (var s in e) {
            var u = void 0;
            M.isValidIdentifier(s) ? u = M.identifier(s) : u = M.stringLiteral(s), n.push(M.objectProperty(u, M.valueToNode(e[s])));
          }
          return M.objectExpression(n);
        }
        throw new Error("don't know how to turn this value into a node");
      }
      i(_b, "valueToNode");
    });
    var vd = l((fi) => {
      "use strict";
      fi.__esModule = true;
      fi.createUnionTypeAnnotation = Pb;
      fi.removeTypeDuplicates = to;
      fi.createTypeAnnotationBasedOnTypeof = qb;
      var Ib = Rt(), Le = Rb(Ib);
      function Rb(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(Rb, "_interopRequireWildcard");
      function Pb(e) {
        var t = to(e);
        return t.length === 1 ? t[0] : Le.unionTypeAnnotation(t);
      }
      i(Pb, "createUnionTypeAnnotation");
      function to(e) {
        for (var t = {}, r = {}, n = [], s = [], u = 0; u < e.length; u++) {
          var a = e[u];
          if (!!a && !(s.indexOf(a) >= 0)) {
            if (Le.isAnyTypeAnnotation(a))
              return [a];
            if (Le.isFlowBaseAnnotation(a)) {
              r[a.type] = a;
              continue;
            }
            if (Le.isUnionTypeAnnotation(a)) {
              n.indexOf(a.types) < 0 && (e = e.concat(a.types), n.push(a.types));
              continue;
            }
            if (Le.isGenericTypeAnnotation(a)) {
              var c = a.id.name;
              if (t[c]) {
                var p = t[c];
                p.typeParameters ? a.typeParameters && (p.typeParameters.params = to(p.typeParameters.params.concat(a.typeParameters.params))) : p = a.typeParameters;
              } else
                t[c] = a;
              continue;
            }
            s.push(a);
          }
        }
        for (var f in r)
          s.push(r[f]);
        for (var m in t)
          s.push(t[m]);
        return s;
      }
      i(to, "removeTypeDuplicates");
      function qb(e) {
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
      i(qb, "createTypeAnnotationBasedOnTypeof");
    });
    var Sd = l((exports, module) => {
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
    var Cd = l((iY, Fd) => {
      function wb() {
        this.__data__ = [], this.size = 0;
      }
      i(wb, "listCacheClear");
      Fd.exports = wb;
    });
    var ro = l((sY, Bd) => {
      function Lb(e, t) {
        return e === t || e !== e && t !== t;
      }
      i(Lb, "eq");
      Bd.exports = Lb;
    });
    var di = l((uY, Od) => {
      var kb = ro();
      function Mb(e, t) {
        for (var r = e.length; r--; )
          if (kb(e[r][0], t))
            return r;
        return -1;
      }
      i(Mb, "assocIndexOf");
      Od.exports = Mb;
    });
    var Nd = l((aY, bd) => {
      var Gb = di(), jb = Array.prototype, Ub = jb.splice;
      function Yb(e) {
        var t = this.__data__, r = Gb(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : Ub.call(t, r, 1), --this.size, true;
      }
      i(Yb, "listCacheDelete");
      bd.exports = Yb;
    });
    var Id = l((oY, _d) => {
      var Vb = di();
      function Kb(e) {
        var t = this.__data__, r = Vb(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      i(Kb, "listCacheGet");
      _d.exports = Kb;
    });
    var Pd = l((lY, Rd) => {
      var Hb = di();
      function Wb(e) {
        return Hb(this.__data__, e) > -1;
      }
      i(Wb, "listCacheHas");
      Rd.exports = Wb;
    });
    var wd = l((cY, qd) => {
      var Xb = di();
      function $b(e, t) {
        var r = this.__data__, n = Xb(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      i($b, "listCacheSet");
      qd.exports = $b;
    });
    var Ei = l((pY, Ld) => {
      var Jb = Cd(), zb = Nd(), Qb = Id(), Zb = Pd(), eN = wd();
      function nn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(nn, "ListCache");
      nn.prototype.clear = Jb;
      nn.prototype.delete = zb;
      nn.prototype.get = Qb;
      nn.prototype.has = Zb;
      nn.prototype.set = eN;
      Ld.exports = nn;
    });
    var Md = l((fY, kd) => {
      var tN = Ei();
      function rN() {
        this.__data__ = new tN(), this.size = 0;
      }
      i(rN, "stackClear");
      kd.exports = rN;
    });
    var jd = l((dY, Gd) => {
      function nN(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      i(nN, "stackDelete");
      Gd.exports = nN;
    });
    var Yd = l((EY, Ud) => {
      function iN(e) {
        return this.__data__.get(e);
      }
      i(iN, "stackGet");
      Ud.exports = iN;
    });
    var Kd = l((mY, Vd) => {
      function sN(e) {
        return this.__data__.has(e);
      }
      i(sN, "stackHas");
      Vd.exports = sN;
    });
    var sn = l((hY, Hd) => {
      function uN(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      i(uN, "isObject");
      Hd.exports = uN;
    });
    var no = l((DY, Wd) => {
      var aN = Br(), oN = sn(), lN = "[object AsyncFunction]", cN = "[object Function]", pN = "[object GeneratorFunction]", fN = "[object Proxy]";
      function dN(e) {
        if (!oN(e))
          return false;
        var t = aN(e);
        return t == cN || t == pN || t == lN || t == fN;
      }
      i(dN, "isFunction");
      Wd.exports = dN;
    });
    var $d = l((yY, Xd) => {
      var EN = rt(), mN = EN["__core-js_shared__"];
      Xd.exports = mN;
    });
    var Qd = l((AY, zd) => {
      var io = $d(), Jd = function() {
        var e = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function hN(e) {
        return !!Jd && Jd in e;
      }
      i(hN, "isMasked");
      zd.exports = hN;
    });
    var so = l((xY, Zd) => {
      var DN = Function.prototype, yN = DN.toString;
      function AN(e) {
        if (e != null) {
          try {
            return yN.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      i(AN, "toSource");
      Zd.exports = AN;
    });
    var tE = l((TY, eE) => {
      var xN = no(), TN = Qd(), gN = sn(), vN = so(), SN = /[\\^$.*+?()[\]{}|]/g, FN = /^\[object .+?Constructor\]$/, CN = Function.prototype, BN = Object.prototype, ON = CN.toString, bN = BN.hasOwnProperty, NN = RegExp("^" + ON.call(bN).replace(SN, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function _N(e) {
        if (!gN(e) || TN(e))
          return false;
        var t = xN(e) ? NN : FN;
        return t.test(vN(e));
      }
      i(_N, "baseIsNative");
      eE.exports = _N;
    });
    var nE = l((gY, rE) => {
      function IN(e, t) {
        return e?.[t];
      }
      i(IN, "getValue");
      rE.exports = IN;
    });
    var sr = l((vY, iE) => {
      var RN = tE(), PN = nE();
      function qN(e, t) {
        var r = PN(e, t);
        return RN(r) ? r : void 0;
      }
      i(qN, "getNative");
      iE.exports = qN;
    });
    var Ys = l((SY, sE) => {
      var wN = sr(), LN = rt(), kN = wN(LN, "Map");
      sE.exports = kN;
    });
    var mi = l((FY, uE) => {
      var MN = sr(), GN = MN(Object, "create");
      uE.exports = GN;
    });
    var lE = l((CY, oE) => {
      var aE = mi();
      function jN() {
        this.__data__ = aE ? aE(null) : {}, this.size = 0;
      }
      i(jN, "hashClear");
      oE.exports = jN;
    });
    var pE = l((BY, cE) => {
      function UN(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      i(UN, "hashDelete");
      cE.exports = UN;
    });
    var dE = l((OY, fE) => {
      var YN = mi(), VN = "__lodash_hash_undefined__", KN = Object.prototype, HN = KN.hasOwnProperty;
      function WN(e) {
        var t = this.__data__;
        if (YN) {
          var r = t[e];
          return r === VN ? void 0 : r;
        }
        return HN.call(t, e) ? t[e] : void 0;
      }
      i(WN, "hashGet");
      fE.exports = WN;
    });
    var mE = l((bY, EE) => {
      var XN = mi(), $N = Object.prototype, JN = $N.hasOwnProperty;
      function zN(e) {
        var t = this.__data__;
        return XN ? t[e] !== void 0 : JN.call(t, e);
      }
      i(zN, "hashHas");
      EE.exports = zN;
    });
    var DE = l((NY, hE) => {
      var QN = mi(), ZN = "__lodash_hash_undefined__";
      function e_(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = QN && t === void 0 ? ZN : t, this;
      }
      i(e_, "hashSet");
      hE.exports = e_;
    });
    var AE = l((_Y, yE) => {
      var t_ = lE(), r_ = pE(), n_ = dE(), i_ = mE(), s_ = DE();
      function un(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(un, "Hash");
      un.prototype.clear = t_;
      un.prototype.delete = r_;
      un.prototype.get = n_;
      un.prototype.has = i_;
      un.prototype.set = s_;
      yE.exports = un;
    });
    var gE = l((IY, TE) => {
      var xE = AE(), u_ = Ei(), a_ = Ys();
      function o_() {
        this.size = 0, this.__data__ = { hash: new xE(), map: new (a_ || u_)(), string: new xE() };
      }
      i(o_, "mapCacheClear");
      TE.exports = o_;
    });
    var SE = l((RY, vE) => {
      function l_(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      i(l_, "isKeyable");
      vE.exports = l_;
    });
    var hi = l((PY, FE) => {
      var c_ = SE();
      function p_(e, t) {
        var r = e.__data__;
        return c_(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      i(p_, "getMapData");
      FE.exports = p_;
    });
    var BE = l((qY, CE) => {
      var f_ = hi();
      function d_(e) {
        var t = f_(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      i(d_, "mapCacheDelete");
      CE.exports = d_;
    });
    var bE = l((wY, OE) => {
      var E_ = hi();
      function m_(e) {
        return E_(this, e).get(e);
      }
      i(m_, "mapCacheGet");
      OE.exports = m_;
    });
    var _E = l((LY, NE) => {
      var h_ = hi();
      function D_(e) {
        return h_(this, e).has(e);
      }
      i(D_, "mapCacheHas");
      NE.exports = D_;
    });
    var RE = l((kY, IE) => {
      var y_ = hi();
      function A_(e, t) {
        var r = y_(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      i(A_, "mapCacheSet");
      IE.exports = A_;
    });
    var uo = l((MY, PE) => {
      var x_ = gE(), T_ = BE(), g_ = bE(), v_ = _E(), S_ = RE();
      function an(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(an, "MapCache");
      an.prototype.clear = x_;
      an.prototype.delete = T_;
      an.prototype.get = g_;
      an.prototype.has = v_;
      an.prototype.set = S_;
      PE.exports = an;
    });
    var wE = l((GY, qE) => {
      var F_ = Ei(), C_ = Ys(), B_ = uo(), O_ = 200;
      function b_(e, t) {
        var r = this.__data__;
        if (r instanceof F_) {
          var n = r.__data__;
          if (!C_ || n.length < O_ - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new B_(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      i(b_, "stackSet");
      qE.exports = b_;
    });
    var kE = l((jY, LE) => {
      var N_ = Ei(), __ = Md(), I_ = jd(), R_ = Yd(), P_ = Kd(), q_ = wE();
      function on(e) {
        var t = this.__data__ = new N_(e);
        this.size = t.size;
      }
      i(on, "Stack");
      on.prototype.clear = __;
      on.prototype.delete = I_;
      on.prototype.get = R_;
      on.prototype.has = P_;
      on.prototype.set = q_;
      LE.exports = on;
    });
    var GE = l((UY, ME) => {
      function w_(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
          ;
        return e;
      }
      i(w_, "arrayEach");
      ME.exports = w_;
    });
    var UE = l((YY, jE) => {
      var L_ = sr(), k_ = function() {
        try {
          var e = L_(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }();
      jE.exports = k_;
    });
    var ao = l((VY, VE) => {
      var YE = UE();
      function M_(e, t, r) {
        t == "__proto__" && YE ? YE(e, t, { configurable: true, enumerable: true, value: r, writable: true }) : e[t] = r;
      }
      i(M_, "baseAssignValue");
      VE.exports = M_;
    });
    var oo = l((KY, KE) => {
      var G_ = ao(), j_ = ro(), U_ = Object.prototype, Y_ = U_.hasOwnProperty;
      function V_(e, t, r) {
        var n = e[t];
        (!(Y_.call(e, t) && j_(n, r)) || r === void 0 && !(t in e)) && G_(e, t, r);
      }
      i(V_, "assignValue");
      KE.exports = V_;
    });
    var Di = l((HY, HE) => {
      var K_ = oo(), H_ = ao();
      function W_(e, t, r, n) {
        var s = !r;
        r || (r = {});
        for (var u = -1, a = t.length; ++u < a; ) {
          var c = t[u], p = n ? n(r[c], e[c], c, r, e) : void 0;
          p === void 0 && (p = e[c]), s ? H_(r, c, p) : K_(r, c, p);
        }
        return r;
      }
      i(W_, "copyObject");
      HE.exports = W_;
    });
    var XE = l((WY, WE) => {
      function X_(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      i(X_, "baseTimes");
      WE.exports = X_;
    });
    var JE = l((XY, $E) => {
      var $_ = Br(), J_ = ir(), z_ = "[object Arguments]";
      function Q_(e) {
        return J_(e) && $_(e) == z_;
      }
      i(Q_, "baseIsArguments");
      $E.exports = Q_;
    });
    var em = l(($Y, ZE) => {
      var zE = JE(), Z_ = ir(), QE = Object.prototype, eI = QE.hasOwnProperty, tI = QE.propertyIsEnumerable, rI = zE(function() {
        return arguments;
      }()) ? zE : function(e) {
        return Z_(e) && eI.call(e, "callee") && !tI.call(e, "callee");
      };
      ZE.exports = rI;
    });
    var Vs = l((JY, tm) => {
      var nI = Array.isArray;
      tm.exports = nI;
    });
    var nm = l((zY, rm) => {
      function iI() {
        return false;
      }
      i(iI, "stubFalse");
      rm.exports = iI;
    });
    var lo = l((yi, ln) => {
      var sI = rt(), uI = nm(), um = typeof yi == "object" && yi && !yi.nodeType && yi, im = um && typeof ln == "object" && ln && !ln.nodeType && ln, aI = im && im.exports === um, sm = aI ? sI.Buffer : void 0, oI = sm ? sm.isBuffer : void 0, lI = oI || uI;
      ln.exports = lI;
    });
    var om = l((QY, am) => {
      var cI = 9007199254740991, pI = /^(?:0|[1-9]\d*)$/;
      function fI(e, t) {
        var r = typeof e;
        return t = t ?? cI, !!t && (r == "number" || r != "symbol" && pI.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      i(fI, "isIndex");
      am.exports = fI;
    });
    var co = l((ZY, lm) => {
      var dI = 9007199254740991;
      function EI(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dI;
      }
      i(EI, "isLength");
      lm.exports = EI;
    });
    var pm = l((eV, cm) => {
      var mI = Br(), hI = co(), DI = ir(), yI = "[object Arguments]", AI = "[object Array]", xI = "[object Boolean]", TI = "[object Date]", gI = "[object Error]", vI = "[object Function]", SI = "[object Map]", FI = "[object Number]", CI = "[object Object]", BI = "[object RegExp]", OI = "[object Set]", bI = "[object String]", NI = "[object WeakMap]", _I = "[object ArrayBuffer]", II = "[object DataView]", RI = "[object Float32Array]", PI = "[object Float64Array]", qI = "[object Int8Array]", wI = "[object Int16Array]", LI = "[object Int32Array]", kI = "[object Uint8Array]", MI = "[object Uint8ClampedArray]", GI = "[object Uint16Array]", jI = "[object Uint32Array]", ce = {};
      ce[RI] = ce[PI] = ce[qI] = ce[wI] = ce[LI] = ce[kI] = ce[MI] = ce[GI] = ce[jI] = true;
      ce[yI] = ce[AI] = ce[_I] = ce[xI] = ce[II] = ce[TI] = ce[gI] = ce[vI] = ce[SI] = ce[FI] = ce[CI] = ce[BI] = ce[OI] = ce[bI] = ce[NI] = false;
      function UI(e) {
        return DI(e) && hI(e.length) && !!ce[mI(e)];
      }
      i(UI, "baseIsTypedArray");
      cm.exports = UI;
    });
    var mm = l((tV, Em) => {
      var YI = pm(), VI = ai(), fm = ci(), dm = fm && fm.isTypedArray, KI = dm ? VI(dm) : YI;
      Em.exports = KI;
    });
    var po = l((rV, hm) => {
      var HI = XE(), WI = em(), XI = Vs(), $I = lo(), JI = om(), zI = mm(), QI = Object.prototype, ZI = QI.hasOwnProperty;
      function eR(e, t) {
        var r = XI(e), n = !r && WI(e), s = !r && !n && $I(e), u = !r && !n && !s && zI(e), a = r || n || s || u, c = a ? HI(e.length, String) : [], p = c.length;
        for (var f in e)
          (t || ZI.call(e, f)) && !(a && (f == "length" || s && (f == "offset" || f == "parent") || u && (f == "buffer" || f == "byteLength" || f == "byteOffset") || JI(f, p))) && c.push(f);
        return c;
      }
      i(eR, "arrayLikeKeys");
      hm.exports = eR;
    });
    var Ks = l((nV, Dm) => {
      var tR = Object.prototype;
      function rR(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || tR;
        return e === r;
      }
      i(rR, "isPrototype");
      Dm.exports = rR;
    });
    var Am = l((iV, ym) => {
      var nR = Qa(), iR = nR(Object.keys, Object);
      ym.exports = iR;
    });
    var Tm = l((sV, xm) => {
      var sR = Ks(), uR = Am(), aR = Object.prototype, oR = aR.hasOwnProperty;
      function lR(e) {
        if (!sR(e))
          return uR(e);
        var t = [];
        for (var r in Object(e))
          oR.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      i(lR, "baseKeys");
      xm.exports = lR;
    });
    var fo = l((uV, gm) => {
      var cR = no(), pR = co();
      function fR(e) {
        return e != null && pR(e.length) && !cR(e);
      }
      i(fR, "isArrayLike");
      gm.exports = fR;
    });
    var Hs = l((aV, vm) => {
      var dR = po(), ER = Tm(), mR = fo();
      function hR(e) {
        return mR(e) ? dR(e) : ER(e);
      }
      i(hR, "keys");
      vm.exports = hR;
    });
    var Fm = l((oV, Sm) => {
      var DR = Di(), yR = Hs();
      function AR(e, t) {
        return e && DR(t, yR(t), e);
      }
      i(AR, "baseAssign");
      Sm.exports = AR;
    });
    var Bm = l((lV, Cm) => {
      function xR(e) {
        var t = [];
        if (e != null)
          for (var r in Object(e))
            t.push(r);
        return t;
      }
      i(xR, "nativeKeysIn");
      Cm.exports = xR;
    });
    var bm = l((cV, Om) => {
      var TR = sn(), gR = Ks(), vR = Bm(), SR = Object.prototype, FR = SR.hasOwnProperty;
      function CR(e) {
        if (!TR(e))
          return vR(e);
        var t = gR(e), r = [];
        for (var n in e)
          n == "constructor" && (t || !FR.call(e, n)) || r.push(n);
        return r;
      }
      i(CR, "baseKeysIn");
      Om.exports = CR;
    });
    var Ws = l((pV, Nm) => {
      var BR = po(), OR = bm(), bR = fo();
      function NR(e) {
        return bR(e) ? BR(e, true) : OR(e);
      }
      i(NR, "keysIn");
      Nm.exports = NR;
    });
    var Im = l((fV, _m) => {
      var _R = Di(), IR = Ws();
      function RR(e, t) {
        return e && _R(t, IR(t), e);
      }
      i(RR, "baseAssignIn");
      _m.exports = RR;
    });
    var Lm = l((Ai, cn) => {
      var PR = rt(), wm = typeof Ai == "object" && Ai && !Ai.nodeType && Ai, Rm = wm && typeof cn == "object" && cn && !cn.nodeType && cn, qR = Rm && Rm.exports === wm, Pm = qR ? PR.Buffer : void 0, qm = Pm ? Pm.allocUnsafe : void 0;
      function wR(e, t) {
        if (t)
          return e.slice();
        var r = e.length, n = qm ? qm(r) : new e.constructor(r);
        return e.copy(n), n;
      }
      i(wR, "cloneBuffer");
      cn.exports = wR;
    });
    var Mm = l((dV, km) => {
      function LR(e, t) {
        var r = -1, n = e.length;
        for (t || (t = Array(n)); ++r < n; )
          t[r] = e[r];
        return t;
      }
      i(LR, "copyArray");
      km.exports = LR;
    });
    var jm = l((EV, Gm) => {
      function kR(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, u = []; ++r < n; ) {
          var a = e[r];
          t(a, r, e) && (u[s++] = a);
        }
        return u;
      }
      i(kR, "arrayFilter");
      Gm.exports = kR;
    });
    var Eo = l((mV, Um) => {
      function MR() {
        return [];
      }
      i(MR, "stubArray");
      Um.exports = MR;
    });
    var Xs = l((hV, Vm) => {
      var GR = jm(), jR = Eo(), UR = Object.prototype, YR = UR.propertyIsEnumerable, Ym = Object.getOwnPropertySymbols, VR = Ym ? function(e) {
        return e == null ? [] : (e = Object(e), GR(Ym(e), function(t) {
          return YR.call(e, t);
        }));
      } : jR;
      Vm.exports = VR;
    });
    var Hm = l((DV, Km) => {
      var KR = Di(), HR = Xs();
      function WR(e, t) {
        return KR(e, HR(e), t);
      }
      i(WR, "copySymbols");
      Km.exports = WR;
    });
    var mo = l((yV, Wm) => {
      function XR(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n; )
          e[s + r] = t[r];
        return e;
      }
      i(XR, "arrayPush");
      Wm.exports = XR;
    });
    var ho = l((AV, Xm) => {
      var $R = mo(), JR = js(), zR = Xs(), QR = Eo(), ZR = Object.getOwnPropertySymbols, e2 = ZR ? function(e) {
        for (var t = []; e; )
          $R(t, zR(e)), e = JR(e);
        return t;
      } : QR;
      Xm.exports = e2;
    });
    var Jm = l((xV, $m) => {
      var t2 = Di(), r2 = ho();
      function n2(e, t) {
        return t2(e, r2(e), t);
      }
      i(n2, "copySymbolsIn");
      $m.exports = n2;
    });
    var Do = l((TV, zm) => {
      var i2 = mo(), s2 = Vs();
      function u2(e, t, r) {
        var n = t(e);
        return s2(e) ? n : i2(n, r(e));
      }
      i(u2, "baseGetAllKeys");
      zm.exports = u2;
    });
    var Zm = l((gV, Qm) => {
      var a2 = Do(), o2 = Xs(), l2 = Hs();
      function c2(e) {
        return a2(e, l2, o2);
      }
      i(c2, "getAllKeys");
      Qm.exports = c2;
    });
    var th = l((vV, eh) => {
      var p2 = Do(), f2 = ho(), d2 = Ws();
      function E2(e) {
        return p2(e, d2, f2);
      }
      i(E2, "getAllKeysIn");
      eh.exports = E2;
    });
    var nh = l((SV, rh) => {
      var m2 = sr(), h2 = rt(), D2 = m2(h2, "DataView");
      rh.exports = D2;
    });
    var sh = l((FV, ih) => {
      var y2 = sr(), A2 = rt(), x2 = y2(A2, "Promise");
      ih.exports = x2;
    });
    var yo = l((CV, uh) => {
      var T2 = sr(), g2 = rt(), v2 = T2(g2, "Set");
      uh.exports = v2;
    });
    var oh = l((BV, ah) => {
      var S2 = sr(), F2 = rt(), C2 = S2(F2, "WeakMap");
      ah.exports = C2;
    });
    var $s = l((OV, mh) => {
      var Ao = nh(), xo = Ys(), To = sh(), go = yo(), vo = oh(), Eh = Br(), pn = so(), lh = "[object Map]", B2 = "[object Object]", ch = "[object Promise]", ph = "[object Set]", fh = "[object WeakMap]", dh = "[object DataView]", O2 = pn(Ao), b2 = pn(xo), N2 = pn(To), _2 = pn(go), I2 = pn(vo), br = Eh;
      (Ao && br(new Ao(new ArrayBuffer(1))) != dh || xo && br(new xo()) != lh || To && br(To.resolve()) != ch || go && br(new go()) != ph || vo && br(new vo()) != fh) && (br = i(function(e) {
        var t = Eh(e), r = t == B2 ? e.constructor : void 0, n = r ? pn(r) : "";
        if (n)
          switch (n) {
            case O2:
              return dh;
            case b2:
              return lh;
            case N2:
              return ch;
            case _2:
              return ph;
            case I2:
              return fh;
          }
        return t;
      }, "getTag"));
      mh.exports = br;
    });
    var Dh = l((bV, hh) => {
      var R2 = Object.prototype, P2 = R2.hasOwnProperty;
      function q2(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && P2.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      i(q2, "initCloneArray");
      hh.exports = q2;
    });
    var Ah = l((NV, yh) => {
      var w2 = rt(), L2 = w2.Uint8Array;
      yh.exports = L2;
    });
    var Js = l((_V, Th) => {
      var xh = Ah();
      function k2(e) {
        var t = new e.constructor(e.byteLength);
        return new xh(t).set(new xh(e)), t;
      }
      i(k2, "cloneArrayBuffer");
      Th.exports = k2;
    });
    var vh = l((IV, gh) => {
      var M2 = Js();
      function G2(e, t) {
        var r = t ? M2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      i(G2, "cloneDataView");
      gh.exports = G2;
    });
    var Fh = l((RV, Sh) => {
      var j2 = /\w*$/;
      function U2(e) {
        var t = new e.constructor(e.source, j2.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      i(U2, "cloneRegExp");
      Sh.exports = U2;
    });
    var Nh = l((PV, bh) => {
      var Ch = Gs(), Bh = Ch ? Ch.prototype : void 0, Oh = Bh ? Bh.valueOf : void 0;
      function Y2(e) {
        return Oh ? Object(Oh.call(e)) : {};
      }
      i(Y2, "cloneSymbol");
      bh.exports = Y2;
    });
    var Ih = l((qV, _h) => {
      var V2 = Js();
      function K2(e, t) {
        var r = t ? V2(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      i(K2, "cloneTypedArray");
      _h.exports = K2;
    });
    var Ph = l((wV, Rh) => {
      var H2 = Js(), W2 = vh(), X2 = Fh(), $2 = Nh(), J2 = Ih(), z2 = "[object Boolean]", Q2 = "[object Date]", Z2 = "[object Map]", e8 = "[object Number]", t8 = "[object RegExp]", r8 = "[object Set]", n8 = "[object String]", i8 = "[object Symbol]", s8 = "[object ArrayBuffer]", u8 = "[object DataView]", a8 = "[object Float32Array]", o8 = "[object Float64Array]", l8 = "[object Int8Array]", c8 = "[object Int16Array]", p8 = "[object Int32Array]", f8 = "[object Uint8Array]", d8 = "[object Uint8ClampedArray]", E8 = "[object Uint16Array]", m8 = "[object Uint32Array]";
      function h8(e, t, r) {
        var n = e.constructor;
        switch (t) {
          case s8:
            return H2(e);
          case z2:
          case Q2:
            return new n(+e);
          case u8:
            return W2(e, r);
          case a8:
          case o8:
          case l8:
          case c8:
          case p8:
          case f8:
          case d8:
          case E8:
          case m8:
            return J2(e, r);
          case Z2:
            return new n();
          case e8:
          case n8:
            return new n(e);
          case t8:
            return X2(e);
          case r8:
            return new n();
          case i8:
            return $2(e);
        }
      }
      i(h8, "initCloneByTag");
      Rh.exports = h8;
    });
    var Lh = l((LV, wh) => {
      var D8 = sn(), qh = Object.create, y8 = function() {
        function e() {
        }
        return i(e, "object"), function(t) {
          if (!D8(t))
            return {};
          if (qh)
            return qh(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();
      wh.exports = y8;
    });
    var Mh = l((kV, kh) => {
      var A8 = Lh(), x8 = js(), T8 = Ks();
      function g8(e) {
        return typeof e.constructor == "function" && !T8(e) ? A8(x8(e)) : {};
      }
      i(g8, "initCloneObject");
      kh.exports = g8;
    });
    var jh = l((MV, Gh) => {
      var v8 = $s(), S8 = ir(), F8 = "[object Map]";
      function C8(e) {
        return S8(e) && v8(e) == F8;
      }
      i(C8, "baseIsMap");
      Gh.exports = C8;
    });
    var Kh = l((GV, Vh) => {
      var B8 = jh(), O8 = ai(), Uh = ci(), Yh = Uh && Uh.isMap, b8 = Yh ? O8(Yh) : B8;
      Vh.exports = b8;
    });
    var Wh = l((jV, Hh) => {
      var N8 = $s(), _8 = ir(), I8 = "[object Set]";
      function R8(e) {
        return _8(e) && N8(e) == I8;
      }
      i(R8, "baseIsSet");
      Hh.exports = R8;
    });
    var zh = l((UV, Jh) => {
      var P8 = Wh(), q8 = ai(), Xh = ci(), $h = Xh && Xh.isSet, w8 = $h ? q8($h) : P8;
      Jh.exports = w8;
    });
    var rD = l((YV, tD) => {
      var L8 = kE(), k8 = GE(), M8 = oo(), G8 = Fm(), j8 = Im(), U8 = Lm(), Y8 = Mm(), V8 = Hm(), K8 = Jm(), H8 = Zm(), W8 = th(), X8 = $s(), $8 = Dh(), J8 = Ph(), z8 = Mh(), Q8 = Vs(), Z8 = lo(), eP = Kh(), tP = sn(), rP = zh(), nP = Hs(), iP = Ws(), sP = 1, uP = 2, aP = 4, Qh = "[object Arguments]", oP = "[object Array]", lP = "[object Boolean]", cP = "[object Date]", pP = "[object Error]", Zh = "[object Function]", fP = "[object GeneratorFunction]", dP = "[object Map]", EP = "[object Number]", eD = "[object Object]", mP = "[object RegExp]", hP = "[object Set]", DP = "[object String]", yP = "[object Symbol]", AP = "[object WeakMap]", xP = "[object ArrayBuffer]", TP = "[object DataView]", gP = "[object Float32Array]", vP = "[object Float64Array]", SP = "[object Int8Array]", FP = "[object Int16Array]", CP = "[object Int32Array]", BP = "[object Uint8Array]", OP = "[object Uint8ClampedArray]", bP = "[object Uint16Array]", NP = "[object Uint32Array]", le = {};
      le[Qh] = le[oP] = le[xP] = le[TP] = le[lP] = le[cP] = le[gP] = le[vP] = le[SP] = le[FP] = le[CP] = le[dP] = le[EP] = le[eD] = le[mP] = le[hP] = le[DP] = le[yP] = le[BP] = le[OP] = le[bP] = le[NP] = true;
      le[pP] = le[Zh] = le[AP] = false;
      function zs(e, t, r, n, s, u) {
        var a, c = t & sP, p = t & uP, f = t & aP;
        if (r && (a = s ? r(e, n, s, u) : r(e)), a !== void 0)
          return a;
        if (!tP(e))
          return e;
        var m = Q8(e);
        if (m) {
          if (a = $8(e), !c)
            return Y8(e, a);
        } else {
          var D = X8(e), d = D == Zh || D == fP;
          if (Z8(e))
            return U8(e, c);
          if (D == eD || D == Qh || d && !s) {
            if (a = p || d ? {} : z8(e), !c)
              return p ? K8(e, j8(a, e)) : V8(e, G8(a, e));
          } else {
            if (!le[D])
              return s ? e : {};
            a = J8(e, D, c);
          }
        }
        u || (u = new L8());
        var x = u.get(e);
        if (x)
          return x;
        u.set(e, a), rP(e) ? e.forEach(function(g) {
          a.add(zs(g, t, r, g, e, u));
        }) : eP(e) && e.forEach(function(g, j) {
          a.set(j, zs(g, t, r, j, e, u));
        });
        var F = f ? p ? W8 : H8 : p ? iP : nP, O = m ? void 0 : F(e);
        return k8(O || e, function(g, j) {
          O && (j = g, g = e[j]), M8(a, j, zs(g, t, r, j, e, u));
        }), a;
      }
      i(zs, "baseClone");
      tD.exports = zs;
    });
    var iD = l((VV, nD) => {
      var _P = rD(), IP = 4;
      function RP(e) {
        return _P(e, IP);
      }
      i(RP, "clone");
      nD.exports = RP;
    });
    var uD = l((KV, sD) => {
      var PP = "__lodash_hash_undefined__";
      function qP(e) {
        return this.__data__.set(e, PP), this;
      }
      i(qP, "setCacheAdd");
      sD.exports = qP;
    });
    var oD = l((HV, aD) => {
      function wP(e) {
        return this.__data__.has(e);
      }
      i(wP, "setCacheHas");
      aD.exports = wP;
    });
    var cD = l((WV, lD) => {
      var LP = uo(), kP = uD(), MP = oD();
      function Qs(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new LP(); ++t < r; )
          this.add(e[t]);
      }
      i(Qs, "SetCache");
      Qs.prototype.add = Qs.prototype.push = kP;
      Qs.prototype.has = MP;
      lD.exports = Qs;
    });
    var fD = l((XV, pD) => {
      function GP(e, t, r, n) {
        for (var s = e.length, u = r + (n ? 1 : -1); n ? u-- : ++u < s; )
          if (t(e[u], u, e))
            return u;
        return -1;
      }
      i(GP, "baseFindIndex");
      pD.exports = GP;
    });
    var ED = l(($V, dD) => {
      function jP(e) {
        return e !== e;
      }
      i(jP, "baseIsNaN");
      dD.exports = jP;
    });
    var hD = l((JV, mD) => {
      function UP(e, t, r) {
        for (var n = r - 1, s = e.length; ++n < s; )
          if (e[n] === t)
            return n;
        return -1;
      }
      i(UP, "strictIndexOf");
      mD.exports = UP;
    });
    var yD = l((zV, DD) => {
      var YP = fD(), VP = ED(), KP = hD();
      function HP(e, t, r) {
        return t === t ? KP(e, t, r) : YP(e, VP, r);
      }
      i(HP, "baseIndexOf");
      DD.exports = HP;
    });
    var xD = l((QV, AD) => {
      var WP = yD();
      function XP(e, t) {
        var r = e == null ? 0 : e.length;
        return !!r && WP(e, t, 0) > -1;
      }
      i(XP, "arrayIncludes");
      AD.exports = XP;
    });
    var gD = l((ZV, TD) => {
      function $P(e, t, r) {
        for (var n = -1, s = e == null ? 0 : e.length; ++n < s; )
          if (r(t, e[n]))
            return true;
        return false;
      }
      i($P, "arrayIncludesWith");
      TD.exports = $P;
    });
    var SD = l((eK, vD) => {
      function JP(e, t) {
        return e.has(t);
      }
      i(JP, "cacheHas");
      vD.exports = JP;
    });
    var CD = l((tK, FD) => {
      function zP() {
      }
      i(zP, "noop");
      FD.exports = zP;
    });
    var So = l((rK, BD) => {
      function QP(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n) {
          r[++t] = n;
        }), r;
      }
      i(QP, "setToArray");
      BD.exports = QP;
    });
    var bD = l((nK, OD) => {
      var Fo = yo(), ZP = CD(), eq = So(), tq = 1 / 0, rq = Fo && 1 / eq(new Fo([, -0]))[1] == tq ? function(e) {
        return new Fo(e);
      } : ZP;
      OD.exports = rq;
    });
    var _D = l((iK, ND) => {
      var nq = cD(), iq = xD(), sq = gD(), uq = SD(), aq = bD(), oq = So(), lq = 200;
      function cq(e, t, r) {
        var n = -1, s = iq, u = e.length, a = true, c = [], p = c;
        if (r)
          a = false, s = sq;
        else if (u >= lq) {
          var f = t ? null : aq(e);
          if (f)
            return oq(f);
          a = false, s = uq, p = new nq();
        } else
          p = t ? [] : c;
        e:
          for (; ++n < u; ) {
            var m = e[n], D = t ? t(m) : m;
            if (m = r || m !== 0 ? m : 0, a && D === D) {
              for (var d = p.length; d--; )
                if (p[d] === D)
                  continue e;
              t && p.push(D), c.push(m);
            } else
              s(p, D, r) || (p !== c && p.push(D), c.push(m));
          }
        return c;
      }
      i(cq, "baseUniq");
      ND.exports = cq;
    });
    var RD = l((sK, ID) => {
      var pq = _D();
      function fq(e) {
        return e && e.length ? pq(e) : [];
      }
      i(fq, "uniq");
      ID.exports = fq;
    });
    var Pt = l((Fe) => {
      "use strict";
      Fe.__esModule = true;
      Fe.DEPRECATED_KEYS = Fe.BUILDER_KEYS = Fe.NODE_FIELDS = Fe.ALIAS_KEYS = Fe.VISITOR_KEYS = void 0;
      var dq = si(), eu = Co(dq), Eq = Ps(), fn = Co(Eq), mq = Xa(), hq = Co(mq);
      Fe.assertEach = Sq;
      Fe.assertOneOf = Fq;
      Fe.assertNodeType = Cq;
      Fe.assertNodeOrValueType = Bq;
      Fe.assertValueType = wD;
      Fe.chain = Oq;
      Fe.default = bq;
      var Dq = Rt(), qD = yq(Dq);
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
      function Co(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Co, "_interopRequireDefault");
      var Aq = Fe.VISITOR_KEYS = {}, xq = Fe.ALIAS_KEYS = {}, Tq = Fe.NODE_FIELDS = {}, gq = Fe.BUILDER_KEYS = {}, vq = Fe.DEPRECATED_KEYS = {};
      function Zs(e) {
        return Array.isArray(e) ? "array" : e === null ? "null" : e === void 0 || typeof e > "u" ? "undefined" : (0, hq.default)(e);
      }
      i(Zs, "getType");
      function Sq(e) {
        function t(r, n, s) {
          if (!!Array.isArray(s))
            for (var u = 0; u < s.length; u++)
              e(r, n + "[" + u + "]", s[u]);
        }
        return i(t, "validator"), t.each = e, t;
      }
      i(Sq, "assertEach");
      function Fq() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          if (t.indexOf(a) < 0)
            throw new TypeError("Property " + u + " expected value to be one of " + (0, fn.default)(t) + " but got " + (0, fn.default)(a));
        }
        return i(n, "validate"), n.oneOf = t, n;
      }
      i(Fq, "assertOneOf");
      function Cq() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          for (var c = false, m = t, p = Array.isArray(m), f = 0, m = p ? m : (0, eu.default)(m); ; ) {
            var D;
            if (p) {
              if (f >= m.length)
                break;
              D = m[f++];
            } else {
              if (f = m.next(), f.done)
                break;
              D = f.value;
            }
            var d = D;
            if (qD.is(d, a)) {
              c = true;
              break;
            }
          }
          if (!c)
            throw new TypeError("Property " + u + " of " + s.type + " expected node to be of a type " + (0, fn.default)(t) + " " + ("but instead got " + (0, fn.default)(a && a.type)));
        }
        return i(n, "validate"), n.oneOfNodeTypes = t, n;
      }
      i(Cq, "assertNodeType");
      function Bq() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n(s, u, a) {
          for (var c = false, m = t, p = Array.isArray(m), f = 0, m = p ? m : (0, eu.default)(m); ; ) {
            var D;
            if (p) {
              if (f >= m.length)
                break;
              D = m[f++];
            } else {
              if (f = m.next(), f.done)
                break;
              D = f.value;
            }
            var d = D;
            if (Zs(a) === d || qD.is(d, a)) {
              c = true;
              break;
            }
          }
          if (!c)
            throw new TypeError("Property " + u + " of " + s.type + " expected node to be of a type " + (0, fn.default)(t) + " " + ("but instead got " + (0, fn.default)(a && a.type)));
        }
        return i(n, "validate"), n.oneOfNodeOrValueTypes = t, n;
      }
      i(Bq, "assertNodeOrValueType");
      function wD(e) {
        function t(r, n, s) {
          var u = Zs(s) === e;
          if (!u)
            throw new TypeError("Property " + n + " expected type of " + e + " but got " + Zs(s));
        }
        return i(t, "validate"), t.type = e, t;
      }
      i(wD, "assertValueType");
      function Oq() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        function n() {
          for (var a = t, s = Array.isArray(a), u = 0, a = s ? a : (0, eu.default)(a); ; ) {
            var c;
            if (s) {
              if (u >= a.length)
                break;
              c = a[u++];
            } else {
              if (u = a.next(), u.done)
                break;
              c = u.value;
            }
            var p = c;
            p.apply(void 0, arguments);
          }
        }
        return i(n, "validate"), n.chainOf = t, n;
      }
      i(Oq, "chain");
      function bq(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.inherits && PD[t.inherits] || {};
        t.fields = t.fields || r.fields || {}, t.visitor = t.visitor || r.visitor || [], t.aliases = t.aliases || r.aliases || [], t.builder = t.builder || r.builder || t.visitor || [], t.deprecatedAlias && (vq[t.deprecatedAlias] = e);
        for (var u = t.visitor.concat(t.builder), n = Array.isArray(u), s = 0, u = n ? u : (0, eu.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var c = a;
          t.fields[c] = t.fields[c] || {};
        }
        for (var p in t.fields) {
          var f = t.fields[p];
          t.builder.indexOf(p) === -1 && (f.optional = true), f.default === void 0 ? f.default = null : f.validate || (f.validate = wD(Zs(f.default)));
        }
        Aq[e] = t.visitor, gq[e] = t.builder, Tq[e] = t.fields, xq[e] = t.aliases, PD[e] = t;
      }
      i(bq, "defineType");
      var PD = {};
    });
    var LD = l(() => {
      "use strict";
      var Nq = Rt(), _q = Rq(Nq), tu = qs(), y = Pt(), k = Iq(y);
      function Iq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Iq, "_interopRequireDefault");
      function Rq(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(Rq, "_interopRequireWildcard");
      (0, k.default)("ArrayExpression", { fields: { elements: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeOrValueType)("null", "Expression", "SpreadElement"))), default: [] } }, visitor: ["elements"], aliases: ["Expression"] });
      (0, k.default)("AssignmentExpression", { fields: { operator: { validate: (0, y.assertValueType)("string") }, left: { validate: (0, y.assertNodeType)("LVal") }, right: { validate: (0, y.assertNodeType)("Expression") } }, builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Expression"] });
      (0, k.default)("BinaryExpression", { builder: ["operator", "left", "right"], fields: { operator: { validate: y.assertOneOf.apply(void 0, tu.BINARY_OPERATORS) }, left: { validate: (0, y.assertNodeType)("Expression") }, right: { validate: (0, y.assertNodeType)("Expression") } }, visitor: ["left", "right"], aliases: ["Binary", "Expression"] });
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
        _q.isValidIdentifier(n);
      }, "validate") }, decorators: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("Decorator"))) } } });
      (0, k.default)("IfStatement", { visitor: ["test", "consequent", "alternate"], aliases: ["Statement", "Conditional"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, consequent: { validate: (0, y.assertNodeType)("Statement") }, alternate: { optional: true, validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("LabeledStatement", { visitor: ["label", "body"], aliases: ["Statement"], fields: { label: { validate: (0, y.assertNodeType)("Identifier") }, body: { validate: (0, y.assertNodeType)("Statement") } } });
      (0, k.default)("StringLiteral", { builder: ["value"], fields: { value: { validate: (0, y.assertValueType)("string") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NumericLiteral", { builder: ["value"], deprecatedAlias: "NumberLiteral", fields: { value: { validate: (0, y.assertValueType)("number") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("NullLiteral", { aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("BooleanLiteral", { builder: ["value"], fields: { value: { validate: (0, y.assertValueType)("boolean") } }, aliases: ["Expression", "Pureish", "Literal", "Immutable"] });
      (0, k.default)("RegExpLiteral", { builder: ["pattern", "flags"], deprecatedAlias: "RegexLiteral", aliases: ["Expression", "Literal"], fields: { pattern: { validate: (0, y.assertValueType)("string") }, flags: { validate: (0, y.assertValueType)("string"), default: "" } } });
      (0, k.default)("LogicalExpression", { builder: ["operator", "left", "right"], visitor: ["left", "right"], aliases: ["Binary", "Expression"], fields: { operator: { validate: y.assertOneOf.apply(void 0, tu.LOGICAL_OPERATORS) }, left: { validate: (0, y.assertNodeType)("Expression") }, right: { validate: (0, y.assertNodeType)("Expression") } } });
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
      (0, k.default)("UnaryExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: true }, argument: { validate: (0, y.assertNodeType)("Expression") }, operator: { validate: y.assertOneOf.apply(void 0, tu.UNARY_OPERATORS) } }, visitor: ["argument"], aliases: ["UnaryLike", "Expression"] });
      (0, k.default)("UpdateExpression", { builder: ["operator", "argument", "prefix"], fields: { prefix: { default: false }, argument: { validate: (0, y.assertNodeType)("Expression") }, operator: { validate: y.assertOneOf.apply(void 0, tu.UPDATE_OPERATORS) } }, visitor: ["argument"], aliases: ["Expression"] });
      (0, k.default)("VariableDeclaration", { builder: ["kind", "declarations"], visitor: ["declarations"], aliases: ["Statement", "Declaration"], fields: { kind: { validate: (0, y.chain)((0, y.assertValueType)("string"), (0, y.assertOneOf)("var", "let", "const")) }, declarations: { validate: (0, y.chain)((0, y.assertValueType)("array"), (0, y.assertEach)((0, y.assertNodeType)("VariableDeclarator"))) } } });
      (0, k.default)("VariableDeclarator", { visitor: ["id", "init"], fields: { id: { validate: (0, y.assertNodeType)("LVal") }, init: { optional: true, validate: (0, y.assertNodeType)("Expression") } } });
      (0, k.default)("WhileStatement", { visitor: ["test", "body"], aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"], fields: { test: { validate: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("BlockStatement", "Statement") } } });
      (0, k.default)("WithStatement", { visitor: ["object", "body"], aliases: ["Statement"], fields: { object: { object: (0, y.assertNodeType)("Expression") }, body: { validate: (0, y.assertNodeType)("BlockStatement", "Statement") } } });
    });
    var kD = l(() => {
      "use strict";
      var T = Pt(), me = Pq(T);
      function Pq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Pq, "_interopRequireDefault");
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
    var GD = l(() => {
      "use strict";
      var MD = Pt(), G = qq(MD);
      function qq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(qq, "_interopRequireDefault");
      (0, G.default)("AnyTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ArrayTypeAnnotation", { visitor: ["elementType"], aliases: ["Flow"], fields: {} });
      (0, G.default)("BooleanTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("BooleanLiteralTypeAnnotation", { aliases: ["Flow"], fields: {} });
      (0, G.default)("NullLiteralTypeAnnotation", { aliases: ["Flow", "FlowBaseAnnotation"], fields: {} });
      (0, G.default)("ClassImplements", { visitor: ["id", "typeParameters"], aliases: ["Flow"], fields: {} });
      (0, G.default)("ClassProperty", { visitor: ["key", "value", "typeAnnotation", "decorators"], builder: ["key", "value", "typeAnnotation", "decorators", "computed"], aliases: ["Property"], fields: { computed: { validate: (0, MD.assertValueType)("boolean"), default: false } } });
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
    var jD = l(() => {
      "use strict";
      var pe = Pt(), Qe = wq(pe);
      function wq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(wq, "_interopRequireDefault");
      (0, Qe.default)("JSXAttribute", { visitor: ["name", "value"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXNamespacedName") }, value: { optional: true, validate: (0, pe.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer") } } });
      (0, Qe.default)("JSXClosingElement", { visitor: ["name"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") } } });
      (0, Qe.default)("JSXElement", { builder: ["openingElement", "closingElement", "children", "selfClosing"], visitor: ["openingElement", "children", "closingElement"], aliases: ["JSX", "Immutable", "Expression"], fields: { openingElement: { validate: (0, pe.assertNodeType)("JSXOpeningElement") }, closingElement: { optional: true, validate: (0, pe.assertNodeType)("JSXClosingElement") }, children: { validate: (0, pe.chain)((0, pe.assertValueType)("array"), (0, pe.assertEach)((0, pe.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXSpreadChild", "JSXElement"))) } } });
      (0, Qe.default)("JSXEmptyExpression", { aliases: ["JSX", "Expression"] });
      (0, Qe.default)("JSXExpressionContainer", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXSpreadChild", { visitor: ["expression"], aliases: ["JSX", "Immutable"], fields: { expression: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXIdentifier", { builder: ["name"], aliases: ["JSX", "Expression"], fields: { name: { validate: (0, pe.assertValueType)("string") } } });
      (0, Qe.default)("JSXMemberExpression", { visitor: ["object", "property"], aliases: ["JSX", "Expression"], fields: { object: { validate: (0, pe.assertNodeType)("JSXMemberExpression", "JSXIdentifier") }, property: { validate: (0, pe.assertNodeType)("JSXIdentifier") } } });
      (0, Qe.default)("JSXNamespacedName", { visitor: ["namespace", "name"], aliases: ["JSX"], fields: { namespace: { validate: (0, pe.assertNodeType)("JSXIdentifier") }, name: { validate: (0, pe.assertNodeType)("JSXIdentifier") } } });
      (0, Qe.default)("JSXOpeningElement", { builder: ["name", "attributes", "selfClosing"], visitor: ["name", "attributes"], aliases: ["JSX", "Immutable"], fields: { name: { validate: (0, pe.assertNodeType)("JSXIdentifier", "JSXMemberExpression") }, selfClosing: { default: false, validate: (0, pe.assertValueType)("boolean") }, attributes: { validate: (0, pe.chain)((0, pe.assertValueType)("array"), (0, pe.assertEach)((0, pe.assertNodeType)("JSXAttribute", "JSXSpreadAttribute"))) } } });
      (0, Qe.default)("JSXSpreadAttribute", { visitor: ["argument"], aliases: ["JSX"], fields: { argument: { validate: (0, pe.assertNodeType)("Expression") } } });
      (0, Qe.default)("JSXText", { aliases: ["JSX", "Immutable"], builder: ["value"], fields: { value: { validate: (0, pe.assertValueType)("string") } } });
    });
    var VD = l(() => {
      "use strict";
      var UD = Pt(), YD = Lq(UD);
      function Lq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(Lq, "_interopRequireDefault");
      (0, YD.default)("Noop", { visitor: [] });
      (0, YD.default)("ParenthesizedExpression", { visitor: ["expression"], aliases: ["Expression", "ExpressionWrapper"], fields: { expression: { validate: (0, UD.assertNodeType)("Expression") } } });
    });
    var KD = l(() => {
      "use strict";
      var it = Pt(), mt = kq(it);
      function kq(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(kq, "_interopRequireDefault");
      (0, mt.default)("AwaitExpression", { builder: ["argument"], visitor: ["argument"], aliases: ["Expression", "Terminatorless"], fields: { argument: { validate: (0, it.assertNodeType)("Expression") } } });
      (0, mt.default)("ForAwaitStatement", { visitor: ["left", "right", "body"], aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"], fields: { left: { validate: (0, it.assertNodeType)("VariableDeclaration", "LVal") }, right: { validate: (0, it.assertNodeType)("Expression") }, body: { validate: (0, it.assertNodeType)("Statement") } } });
      (0, mt.default)("BindExpression", { visitor: ["object", "callee"], aliases: ["Expression"], fields: {} });
      (0, mt.default)("Import", { aliases: ["Expression"] });
      (0, mt.default)("Decorator", { visitor: ["expression"], fields: { expression: { validate: (0, it.assertNodeType)("Expression") } } });
      (0, mt.default)("DoExpression", { visitor: ["body"], aliases: ["Expression"], fields: { body: { validate: (0, it.assertNodeType)("BlockStatement") } } });
      (0, mt.default)("ExportDefaultSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, it.assertNodeType)("Identifier") } } });
      (0, mt.default)("ExportNamespaceSpecifier", { visitor: ["exported"], aliases: ["ModuleSpecifier"], fields: { exported: { validate: (0, it.assertNodeType)("Identifier") } } });
      (0, mt.default)("RestProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, it.assertNodeType)("LVal") } } });
      (0, mt.default)("SpreadProperty", { visitor: ["argument"], aliases: ["UnaryLike"], fields: { argument: { validate: (0, it.assertNodeType)("Expression") } } });
    });
    var HD = l(() => {
      "use strict";
      Pt();
      LD();
      kD();
      GD();
      jD();
      VD();
      KD();
    });
    var WD = l((dn) => {
      "use strict";
      dn.__esModule = true;
      dn.isReactComponent = void 0;
      dn.isCompatTag = jq;
      dn.buildChildren = Yq;
      var Mq = Rt(), xi = Gq(Mq);
      function Gq(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(Gq, "_interopRequireWildcard");
      var TK = dn.isReactComponent = xi.buildMatchMemberExpression("React.Component");
      function jq(e) {
        return !!e && /^[a-z]|\-/.test(e);
      }
      i(jq, "isCompatTag");
      function Uq(e, t) {
        for (var r = e.value.split(/\r\n|\n|\r/), n = 0, s = 0; s < r.length; s++)
          r[s].match(/[^ \t]/) && (n = s);
        for (var u = "", a = 0; a < r.length; a++) {
          var c = r[a], p = a === 0, f = a === r.length - 1, m = a === n, D = c.replace(/\t/g, " ");
          p || (D = D.replace(/^[ ]+/, "")), f || (D = D.replace(/[ ]+$/, "")), D && (m || (D += " "), u += D);
        }
        u && t.push(xi.stringLiteral(u));
      }
      i(Uq, "cleanJSXElementLiteralChild");
      function Yq(e) {
        for (var t = [], r = 0; r < e.children.length; r++) {
          var n = e.children[r];
          if (xi.isJSXText(n)) {
            Uq(n, t);
            continue;
          }
          xi.isJSXExpressionContainer(n) && (n = n.expression), !xi.isJSXEmptyExpression(n) && t.push(n);
        }
        return t;
      }
      i(Yq, "buildChildren");
    });
    var Rt = l((A) => {
      "use strict";
      A.__esModule = true;
      A.createTypeAnnotationBasedOnTypeof = A.removeTypeDuplicates = A.createUnionTypeAnnotation = A.valueToNode = A.toBlock = A.toExpression = A.toStatement = A.toBindingIdentifierName = A.toIdentifier = A.toKeyAlias = A.toSequenceExpression = A.toComputedKey = A.isNodesEquivalent = A.isImmutable = A.isScope = A.isSpecifierDefault = A.isVar = A.isBlockScoped = A.isLet = A.isValidIdentifier = A.isReferenced = A.isBinding = A.getOuterBindingIdentifiers = A.getBindingIdentifiers = A.TYPES = A.react = A.DEPRECATED_KEYS = A.BUILDER_KEYS = A.NODE_FIELDS = A.ALIAS_KEYS = A.VISITOR_KEYS = A.NOT_LOCAL_BINDING = A.BLOCK_SCOPED_SYMBOL = A.INHERIT_KEYS = A.UNARY_OPERATORS = A.STRING_UNARY_OPERATORS = A.NUMBER_UNARY_OPERATORS = A.BOOLEAN_UNARY_OPERATORS = A.BINARY_OPERATORS = A.NUMBER_BINARY_OPERATORS = A.BOOLEAN_BINARY_OPERATORS = A.COMPARISON_BINARY_OPERATORS = A.EQUALITY_BINARY_OPERATORS = A.BOOLEAN_NUMBER_BINARY_OPERATORS = A.UPDATE_OPERATORS = A.LOGICAL_OPERATORS = A.COMMENT_KEYS = A.FOR_INIT_KEYS = A.FLATTENABLE_KEYS = A.STATEMENT_OR_BLOCK_KEYS = void 0;
      var Vq = hf(), Kq = _r(Vq), Hq = si(), ht = _r(Hq), Wq = Ya(), Nr = _r(Wq), Xq = Ps(), XD = _r(Xq), Ce = qs();
      Object.defineProperty(A, "STATEMENT_OR_BLOCK_KEYS", { enumerable: true, get: i(function() {
        return Ce.STATEMENT_OR_BLOCK_KEYS;
      }, "get") });
      Object.defineProperty(A, "FLATTENABLE_KEYS", { enumerable: true, get: i(function() {
        return Ce.FLATTENABLE_KEYS;
      }, "get") });
      Object.defineProperty(A, "FOR_INIT_KEYS", { enumerable: true, get: i(function() {
        return Ce.FOR_INIT_KEYS;
      }, "get") });
      Object.defineProperty(A, "COMMENT_KEYS", { enumerable: true, get: i(function() {
        return Ce.COMMENT_KEYS;
      }, "get") });
      Object.defineProperty(A, "LOGICAL_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.LOGICAL_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "UPDATE_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.UPDATE_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.BOOLEAN_NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "EQUALITY_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.EQUALITY_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "COMPARISON_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.COMPARISON_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.BOOLEAN_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "NUMBER_BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.NUMBER_BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BINARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.BINARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "BOOLEAN_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.BOOLEAN_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "NUMBER_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.NUMBER_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "STRING_UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.STRING_UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "UNARY_OPERATORS", { enumerable: true, get: i(function() {
        return Ce.UNARY_OPERATORS;
      }, "get") });
      Object.defineProperty(A, "INHERIT_KEYS", { enumerable: true, get: i(function() {
        return Ce.INHERIT_KEYS;
      }, "get") });
      Object.defineProperty(A, "BLOCK_SCOPED_SYMBOL", { enumerable: true, get: i(function() {
        return Ce.BLOCK_SCOPED_SYMBOL;
      }, "get") });
      Object.defineProperty(A, "NOT_LOCAL_BINDING", { enumerable: true, get: i(function() {
        return Ce.NOT_LOCAL_BINDING;
      }, "get") });
      A.is = nw;
      A.isType = ey;
      A.validate = ty;
      A.shallowEqual = sw;
      A.appendToMemberExpression = uw;
      A.prependToMemberExpression = aw;
      A.ensureBlock = ow;
      A.clone = ry;
      A.cloneWithoutLoc = lw;
      A.cloneDeep = cw;
      A.buildMatchMemberExpression = pw;
      A.removeComments = fw;
      A.inheritsComments = dw;
      A.inheritTrailingComments = ny;
      A.inheritLeadingComments = iy;
      A.inheritInnerComments = sy;
      A.inherits = Ew;
      A.assertNode = mw;
      A.isNode = uy;
      A.traverseFast = ru;
      A.removeProperties = oy;
      A.removePropertiesDeep = Dw;
      var zD = Ka();
      Object.defineProperty(A, "getBindingIdentifiers", { enumerable: true, get: i(function() {
        return zD.getBindingIdentifiers;
      }, "get") });
      Object.defineProperty(A, "getOuterBindingIdentifiers", { enumerable: true, get: i(function() {
        return zD.getOuterBindingIdentifiers;
      }, "get") });
      var Dt = j0();
      Object.defineProperty(A, "isBinding", { enumerable: true, get: i(function() {
        return Dt.isBinding;
      }, "get") });
      Object.defineProperty(A, "isReferenced", { enumerable: true, get: i(function() {
        return Dt.isReferenced;
      }, "get") });
      Object.defineProperty(A, "isValidIdentifier", { enumerable: true, get: i(function() {
        return Dt.isValidIdentifier;
      }, "get") });
      Object.defineProperty(A, "isLet", { enumerable: true, get: i(function() {
        return Dt.isLet;
      }, "get") });
      Object.defineProperty(A, "isBlockScoped", { enumerable: true, get: i(function() {
        return Dt.isBlockScoped;
      }, "get") });
      Object.defineProperty(A, "isVar", { enumerable: true, get: i(function() {
        return Dt.isVar;
      }, "get") });
      Object.defineProperty(A, "isSpecifierDefault", { enumerable: true, get: i(function() {
        return Dt.isSpecifierDefault;
      }, "get") });
      Object.defineProperty(A, "isScope", { enumerable: true, get: i(function() {
        return Dt.isScope;
      }, "get") });
      Object.defineProperty(A, "isImmutable", { enumerable: true, get: i(function() {
        return Dt.isImmutable;
      }, "get") });
      Object.defineProperty(A, "isNodesEquivalent", { enumerable: true, get: i(function() {
        return Dt.isNodesEquivalent;
      }, "get") });
      var qt = gd();
      Object.defineProperty(A, "toComputedKey", { enumerable: true, get: i(function() {
        return qt.toComputedKey;
      }, "get") });
      Object.defineProperty(A, "toSequenceExpression", { enumerable: true, get: i(function() {
        return qt.toSequenceExpression;
      }, "get") });
      Object.defineProperty(A, "toKeyAlias", { enumerable: true, get: i(function() {
        return qt.toKeyAlias;
      }, "get") });
      Object.defineProperty(A, "toIdentifier", { enumerable: true, get: i(function() {
        return qt.toIdentifier;
      }, "get") });
      Object.defineProperty(A, "toBindingIdentifierName", { enumerable: true, get: i(function() {
        return qt.toBindingIdentifierName;
      }, "get") });
      Object.defineProperty(A, "toStatement", { enumerable: true, get: i(function() {
        return qt.toStatement;
      }, "get") });
      Object.defineProperty(A, "toExpression", { enumerable: true, get: i(function() {
        return qt.toExpression;
      }, "get") });
      Object.defineProperty(A, "toBlock", { enumerable: true, get: i(function() {
        return qt.toBlock;
      }, "get") });
      Object.defineProperty(A, "valueToNode", { enumerable: true, get: i(function() {
        return qt.valueToNode;
      }, "get") });
      var Bo = vd();
      Object.defineProperty(A, "createUnionTypeAnnotation", { enumerable: true, get: i(function() {
        return Bo.createUnionTypeAnnotation;
      }, "get") });
      Object.defineProperty(A, "removeTypeDuplicates", { enumerable: true, get: i(function() {
        return Bo.removeTypeDuplicates;
      }, "get") });
      Object.defineProperty(A, "createTypeAnnotationBasedOnTypeof", { enumerable: true, get: i(function() {
        return Bo.createTypeAnnotationBasedOnTypeof;
      }, "get") });
      var $q = Sd(), QD = _r($q), Jq = iD(), zq = _r(Jq), Qq = RD(), Zq = _r(Qq);
      HD();
      var En = Pt(), ew = WD(), tw = rw(ew);
      function rw(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t;
      }
      i(rw, "_interopRequireWildcard");
      function _r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      i(_r, "_interopRequireDefault");
      var w = A;
      function ZD(e) {
        var t = w["is" + e];
        t || (t = w["is" + e] = function(r, n) {
          return w.is(e, r, n);
        }), w["assert" + e] = function(r, n) {
          if (n = n || {}, !t(r, n))
            throw new Error("Expected type " + (0, XD.default)(e) + " with option " + (0, XD.default)(n));
        };
      }
      i(ZD, "registerType");
      A.VISITOR_KEYS = En.VISITOR_KEYS;
      A.ALIAS_KEYS = En.ALIAS_KEYS;
      A.NODE_FIELDS = En.NODE_FIELDS;
      A.BUILDER_KEYS = En.BUILDER_KEYS;
      A.DEPRECATED_KEYS = En.DEPRECATED_KEYS;
      A.react = tw;
      for ($D in w.VISITOR_KEYS)
        ZD($D);
      var $D;
      w.FLIPPED_ALIAS_KEYS = {};
      (0, Nr.default)(w.ALIAS_KEYS).forEach(function(e) {
        w.ALIAS_KEYS[e].forEach(function(t) {
          var r = w.FLIPPED_ALIAS_KEYS[t] = w.FLIPPED_ALIAS_KEYS[t] || [];
          r.push(e);
        });
      });
      (0, Nr.default)(w.FLIPPED_ALIAS_KEYS).forEach(function(e) {
        w[e.toUpperCase() + "_TYPES"] = w.FLIPPED_ALIAS_KEYS[e], ZD(e);
      });
      var vK = A.TYPES = (0, Nr.default)(w.VISITOR_KEYS).concat((0, Nr.default)(w.FLIPPED_ALIAS_KEYS)).concat((0, Nr.default)(w.DEPRECATED_KEYS));
      function nw(e, t, r) {
        if (!t)
          return false;
        var n = ey(t.type, e);
        return n ? typeof r > "u" ? true : w.shallowEqual(t, r) : false;
      }
      i(nw, "is");
      function ey(e, t) {
        if (e === t)
          return true;
        if (w.ALIAS_KEYS[t])
          return false;
        var r = w.FLIPPED_ALIAS_KEYS[t];
        if (r) {
          if (r[0] === e)
            return true;
          for (var u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, ht.default)(u); ; ) {
            var a;
            if (n) {
              if (s >= u.length)
                break;
              a = u[s++];
            } else {
              if (s = u.next(), s.done)
                break;
              a = s.value;
            }
            var c = a;
            if (e === c)
              return true;
          }
        }
        return false;
      }
      i(ey, "isType");
      (0, Nr.default)(w.BUILDER_KEYS).forEach(function(e) {
        var t = w.BUILDER_KEYS[e];
        function r() {
          if (arguments.length > t.length)
            throw new Error("t." + e + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + t.length));
          var n = {};
          n.type = e;
          for (var s = 0, c = t, u = Array.isArray(c), a = 0, c = u ? c : (0, ht.default)(c); ; ) {
            var p;
            if (u) {
              if (a >= c.length)
                break;
              p = c[a++];
            } else {
              if (a = c.next(), a.done)
                break;
              p = a.value;
            }
            var f = p, m = w.NODE_FIELDS[e][f], D = arguments[s++];
            D === void 0 && (D = (0, zq.default)(m.default)), n[f] = D;
          }
          for (var d in n)
            ty(n, d, n[d]);
          return n;
        }
        i(r, "builder"), w[e] = r, w[e[0].toLowerCase() + e.slice(1)] = r;
      });
      var iw = i(function(t) {
        var r = w.DEPRECATED_KEYS[t];
        function n(s) {
          return function() {
            return console.trace("The node type " + t + " has been renamed to " + r), s.apply(this, arguments);
          };
        }
        i(n, "proxy"), w[t] = w[t[0].toLowerCase() + t.slice(1)] = n(w[r]), w["is" + t] = n(w["is" + r]), w["assert" + t] = n(w["assert" + r]);
      }, "_loop");
      for (JD in w.DEPRECATED_KEYS)
        iw(JD);
      var JD;
      function ty(e, t, r) {
        if (!!e) {
          var n = w.NODE_FIELDS[e.type];
          if (!!n) {
            var s = n[t];
            !s || !s.validate || s.optional && r == null || s.validate(e, t, r);
          }
        }
      }
      i(ty, "validate");
      function sw(e, t) {
        for (var r = (0, Nr.default)(t), u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, ht.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var c = a;
          if (e[c] !== t[c])
            return false;
        }
        return true;
      }
      i(sw, "shallowEqual");
      function uw(e, t, r) {
        return e.object = w.memberExpression(e.object, e.property, e.computed), e.property = t, e.computed = !!r, e;
      }
      i(uw, "appendToMemberExpression");
      function aw(e, t) {
        return e.object = w.memberExpression(t, e.object), e;
      }
      i(aw, "prependToMemberExpression");
      function ow(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "body";
        return e[t] = w.toBlock(e[t], e);
      }
      i(ow, "ensureBlock");
      function ry(e) {
        if (!e)
          return e;
        var t = {};
        for (var r in e)
          r[0] !== "_" && (t[r] = e[r]);
        return t;
      }
      i(ry, "clone");
      function lw(e) {
        var t = ry(e);
        return delete t.loc, t;
      }
      i(lw, "cloneWithoutLoc");
      function cw(e) {
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
      i(cw, "cloneDeep");
      function pw(e, t) {
        var r = e.split(".");
        return function(n) {
          if (!w.isMemberExpression(n))
            return false;
          for (var s = [n], u = 0; s.length; ) {
            var a = s.shift();
            if (t && u === r.length)
              return true;
            if (w.isIdentifier(a)) {
              if (r[u] !== a.name)
                return false;
            } else if (w.isStringLiteral(a)) {
              if (r[u] !== a.value)
                return false;
            } else if (w.isMemberExpression(a)) {
              if (a.computed && !w.isStringLiteral(a.property))
                return false;
              s.push(a.object), s.push(a.property);
              continue;
            } else
              return false;
            if (++u > r.length)
              return false;
          }
          return true;
        };
      }
      i(pw, "buildMatchMemberExpression");
      function fw(e) {
        for (var n = w.COMMENT_KEYS, t = Array.isArray(n), r = 0, n = t ? n : (0, ht.default)(n); ; ) {
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
          var u = s;
          delete e[u];
        }
        return e;
      }
      i(fw, "removeComments");
      function dw(e, t) {
        return ny(e, t), iy(e, t), sy(e, t), e;
      }
      i(dw, "inheritsComments");
      function ny(e, t) {
        Oo("trailingComments", e, t);
      }
      i(ny, "inheritTrailingComments");
      function iy(e, t) {
        Oo("leadingComments", e, t);
      }
      i(iy, "inheritLeadingComments");
      function sy(e, t) {
        Oo("innerComments", e, t);
      }
      i(sy, "inheritInnerComments");
      function Oo(e, t, r) {
        t && r && (t[e] = (0, Zq.default)([].concat(t[e], r[e]).filter(Boolean)));
      }
      i(Oo, "_inheritComments");
      function Ew(e, t) {
        if (!e || !t)
          return e;
        for (var s = w.INHERIT_KEYS.optional, r = Array.isArray(s), n = 0, s = r ? s : (0, ht.default)(s); ; ) {
          var u;
          if (r) {
            if (n >= s.length)
              break;
            u = s[n++];
          } else {
            if (n = s.next(), n.done)
              break;
            u = n.value;
          }
          var a = u;
          e[a] == null && (e[a] = t[a]);
        }
        for (var c in t)
          c[0] === "_" && (e[c] = t[c]);
        for (var m = w.INHERIT_KEYS.force, p = Array.isArray(m), f = 0, m = p ? m : (0, ht.default)(m); ; ) {
          var D;
          if (p) {
            if (f >= m.length)
              break;
            D = m[f++];
          } else {
            if (f = m.next(), f.done)
              break;
            D = f.value;
          }
          var d = D;
          e[d] = t[d];
        }
        return w.inheritsComments(e, t), e;
      }
      i(Ew, "inherits");
      function mw(e) {
        if (!uy(e))
          throw new TypeError("Not a valid node " + (e && e.type));
      }
      i(mw, "assertNode");
      function uy(e) {
        return !!(e && En.VISITOR_KEYS[e.type]);
      }
      i(uy, "isNode");
      (0, QD.default)(w);
      (0, QD.default)(w.VISITOR_KEYS);
      function ru(e, t, r) {
        if (!!e) {
          var n = w.VISITOR_KEYS[e.type];
          if (!!n) {
            r = r || {}, t(e, r);
            for (var a = n, s = Array.isArray(a), u = 0, a = s ? a : (0, ht.default)(a); ; ) {
              var c;
              if (s) {
                if (u >= a.length)
                  break;
                c = a[u++];
              } else {
                if (u = a.next(), u.done)
                  break;
                c = u.value;
              }
              var p = c, f = e[p];
              if (Array.isArray(f))
                for (var d = f, m = Array.isArray(d), D = 0, d = m ? d : (0, ht.default)(d); ; ) {
                  var x;
                  if (m) {
                    if (D >= d.length)
                      break;
                    x = d[D++];
                  } else {
                    if (D = d.next(), D.done)
                      break;
                    x = D.value;
                  }
                  var F = x;
                  ru(F, t, r);
                }
              else
                ru(f, t, r);
            }
          }
        }
      }
      i(ru, "traverseFast");
      var ay = ["tokens", "start", "end", "loc", "raw", "rawValue"], hw = w.COMMENT_KEYS.concat(["comments"]).concat(ay);
      function oy(e, t) {
        t = t || {};
        for (var r = t.preserveComments ? ay : hw, u = r, n = Array.isArray(u), s = 0, u = n ? u : (0, ht.default)(u); ; ) {
          var a;
          if (n) {
            if (s >= u.length)
              break;
            a = u[s++];
          } else {
            if (s = u.next(), s.done)
              break;
            a = s.value;
          }
          var c = a;
          e[c] != null && (e[c] = void 0);
        }
        for (var p in e)
          p[0] === "_" && e[p] != null && (e[p] = void 0);
        for (var f = (0, Kq.default)(e), d = f, m = Array.isArray(d), D = 0, d = m ? d : (0, ht.default)(d); ; ) {
          var x;
          if (m) {
            if (D >= d.length)
              break;
            x = d[D++];
          } else {
            if (D = d.next(), D.done)
              break;
            x = D.value;
          }
          var F = x;
          e[F] = null;
        }
      }
      i(oy, "removeProperties");
      function Dw(e, t) {
        return ru(e, oy, t), e;
      }
      i(Dw, "removePropertiesDeep");
    });
    var re = l((V) => {
      "use strict";
      Object.defineProperty(V, "__esModule", { value: true });
      var yw = Rt(), J = i(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }, "classCallCheck"), ee = i(function(e, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }, "inherits"), te = i(function(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e;
      }, "possibleConstructorReturn"), ly = /* @__PURE__ */ Object.create(null), nu = /* @__PURE__ */ Object.create(null), cy = Symbol(), Ti = /* @__PURE__ */ Object.create(null), ie = function() {
        function e() {
          J(this, e), this.loc = { source: null, start: { line: 0, column: 0 }, end: { line: 0, column: 0 } }, this[cy] = [];
        }
        return i(e, "Node"), e.prototype.toJSON = i(function() {
          var r = this;
          return Object.getOwnPropertyNames(this).reduce(function(n, s) {
            if (s === "loc" || s === "parent")
              return n;
            var u = r[s];
            return Array.isArray(u) ? n[s] = u.map(function(a) {
              return a.toJSON();
            }) : n[s] = u && u.toJSON ? u.toJSON() : u, n;
          }, { type: this.type });
        }, "toJSON"), e.registerType = i(function(r) {
          e["is" + r] || (e["is" + r] = function(n) {
            return iu(n, r);
          });
        }, "registerType"), e;
      }();
      ie.registerType("Scope");
      function iu(e, t) {
        return e ? e.type === t || Ti[t] && Ti[t][e.type] || yw.is(t, e) : false;
      }
      i(iu, "is");
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
        for (var s = 0, u = r.length; s < u; s++) {
          var a = r[s];
          nu[a] || (nu[a] = []), nu[a].push(e.prototype.type), Ti[a] || (Ti[a] = {}), Ti[a][e.prototype.type] = true, ie.registerType(a);
        }
      }
      i(he, "alias");
      function z(e, t) {
        e.prototype.type = t, ly[t] = e, ie.registerType(t);
      }
      i(z, "type");
      var su = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "Fragment"), t;
      }(ie);
      z(su, "Fragment");
      he(su, "Statement");
      Ae(su, "value");
      var uu = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintExpressionStatement"), t;
      }(ie);
      z(uu, "PrintExpressionStatement");
      he(uu, "Statement", "PrintStatement");
      Ae(uu, "value");
      var au = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "PrintTextStatement"), t;
      }(ie);
      z(au, "PrintTextStatement");
      he(au, "Statement", "PrintStatement");
      Ae(au, "value");
      var Ir = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "ConstantValue"), t.prototype.toString = i(function() {
          return "Const(" + this.value + ")";
        }, "toString"), t;
      }(ie);
      z(Ir, "ConstantValue");
      he(Ir, "Expression", "Literal", "Immutable");
      var bo = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.apply(this, arguments));
        }
        return i(t, "StringLiteral"), t;
      }(Ir);
      z(bo, "StringLiteral");
      he(bo, "Expression", "Literal", "Immutable");
      var No = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.apply(this, arguments));
        }
        return i(t, "NumericLiteral"), t;
      }(Ir);
      z(No, "NumericLiteral");
      he(No, "Expression", "Literal", "Immutable");
      var _o = function(e) {
        ee(t, e);
        function t(r) {
          return J(this, t), te(this, e.call(this, r));
        }
        return i(t, "BooleanLiteral"), t;
      }(Ir);
      z(_o, "BooleanLiteral");
      he(_o, "Expression", "Literal", "Immutable");
      var Io = function(e) {
        ee(t, e);
        function t() {
          return J(this, t), te(this, e.call(this, null));
        }
        return i(t, "NullLiteral"), t;
      }(Ir);
      z(Io, "NullLiteral");
      he(Io, "Expression", "Literal", "Immutable");
      var Ro = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.name = r, n;
        }
        return i(t, "Identifier"), t;
      }(ie);
      z(Ro, "Identifier");
      he(Ro, "Expression");
      var ou = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.operator = r, s.argument = n, s;
        }
        return i(t, "UnaryExpression"), t;
      }(ie);
      z(ou, "UnaryExpression");
      he(ou, "Expression", "UnaryLike");
      Ae(ou, "argument");
      var gi = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.operator = r, u.left = n, u.right = s, u;
        }
        return i(t, "BinaryExpression"), t;
      }(ie);
      z(gi, "BinaryExpression");
      he(gi, "Binary", "Expression");
      Ae(gi, "left", "right");
      var lu = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this, "~", r, n));
          return s.wasImplicitConcatenation = false, s;
        }
        return i(t, "BinaryConcatExpression"), t;
      }(gi);
      z(lu, "BinaryConcatExpression");
      he(lu, "BinaryExpression", "Binary", "Expression");
      Ae(lu, "left", "right");
      var cu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.test = r, u.consequent = n, u.alternate = s, u;
        }
        return i(t, "ConditionalExpression"), t;
      }(ie);
      z(cu, "ConditionalExpression");
      he(cu, "Expression", "Conditional");
      Ae(cu, "test", "consequent", "alternate");
      var pu = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.elements = r, n;
        }
        return i(t, "ArrayExpression"), t;
      }(ie);
      z(pu, "ArrayExpression");
      he(pu, "Expression");
      Ae(pu, "elements");
      var fu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.object = r, u.property = n, u.computed = s, u;
        }
        return i(t, "MemberExpression"), t;
      }(ie);
      z(fu, "MemberExpression");
      he(fu, "Expression", "LVal");
      Ae(fu, "object", "property");
      var du = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.callee = r, s.arguments = n, s;
        }
        return i(t, "CallExpression"), t;
      }(ie);
      z(du, "CallExpression");
      he(du, "Expression", "FunctionInvocation");
      Ae(du, "callee", "arguments");
      var Eu = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "NamedArgumentExpression"), t;
      }(ie);
      z(Eu, "NamedArgumentExpression");
      he(Eu, "Expression");
      Ae(Eu, "name", "value");
      var mu = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.properties = r, n;
        }
        return i(t, "ObjectExpression"), t;
      }(ie);
      z(mu, "ObjectExpression");
      he(mu, "Expression");
      Ae(mu, "properties");
      var hu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.key = r, u.value = n, u.computed = s, u;
        }
        return i(t, "ObjectProperty"), t;
      }(ie);
      z(hu, "ObjectProperty");
      he(hu, "Property", "ObjectMember");
      Ae(hu, "key", "value");
      var Du = function(e) {
        ee(t, e);
        function t() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          J(this, t);
          var n = te(this, e.call(this));
          return n.expressions = r, n;
        }
        return i(t, "SequenceExpression"), t.prototype.add = i(function(n) {
          this.expressions.push(n), this.loc.end = n.loc.end;
        }, "add"), t;
      }(ie);
      z(Du, "SequenceExpression");
      he(Du, "Expression", "Scope");
      Ae(Du, "expressions");
      var yu = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.target = r, u.start = n, u.end = s, u;
        }
        return i(t, "SliceExpression"), t;
      }(ie);
      z(yu, "SliceExpression");
      he(yu, "Expression");
      Ae(yu, "source", "start", "end");
      var Au = function(e) {
        ee(t, e);
        function t(r, n, s) {
          J(this, t);
          var u = te(this, e.call(this));
          return u.target = r, u.name = n, u.arguments = s, u;
        }
        return i(t, "FilterExpression"), t;
      }(ie);
      z(Au, "FilterExpression");
      he(Au, "Expression");
      Ae(Au, "target", "arguments");
      var xu = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.name = r, n.attributes = [], n.children = [], n.selfClosing = false, n;
        }
        return i(t, "Element"), t;
      }(ie);
      z(xu, "Element");
      he(xu, "Expression");
      Ae(xu, "attributes", "children");
      var Po = function(e) {
        ee(t, e);
        function t(r) {
          var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          J(this, t);
          var s = te(this, e.call(this));
          return s.name = r, s.value = n, s;
        }
        return i(t, "Attribute"), t.prototype.isImmutable = i(function() {
          return iu(this.name, "Identifier") && iu(this.value, "Immutable");
        }, "isImmutable"), t;
      }(ie);
      z(Po, "Attribute");
      Ae(Po, "name", "value");
      var qo = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "TwigComment"), t;
      }(ie);
      z(qo, "TwigComment");
      Ae(qo, "value");
      var wo = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.value = r, n;
        }
        return i(t, "HtmlComment"), t;
      }(ie);
      z(wo, "HtmlComment");
      Ae(wo, "value");
      var Lo = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.declarationType = r, n.parts = [], n;
        }
        return i(t, "Declaration"), t;
      }(ie);
      z(Lo, "Declaration");
      Ae(Lo, "parts");
      var py = function(e) {
        ee(t, e);
        function t(r) {
          J(this, t);
          var n = te(this, e.call(this));
          return n.tagName = r, n.parts = [], n.sections = [], n;
        }
        return i(t, "GenericTwigTag"), t;
      }(ie);
      z(py, "GenericTwigTag");
      var fy = function(e) {
        ee(t, e);
        function t(r, n) {
          J(this, t);
          var s = te(this, e.call(this));
          return s.tokenType = r, s.tokenText = n, s;
        }
        return i(t, "GenericToken"), t;
      }(ie);
      z(fy, "GenericToken");
      V.TYPE_MAP = ly;
      V.ALIAS_TO_TYPE = nu;
      V.PATH_CACHE_KEY = cy;
      V.Node = ie;
      V.is = iu;
      V.visitor = Ae;
      V.alias = he;
      V.type = z;
      V.Fragment = su;
      V.PrintExpressionStatement = uu;
      V.PrintTextStatement = au;
      V.ConstantValue = Ir;
      V.StringLiteral = bo;
      V.NumericLiteral = No;
      V.BooleanLiteral = _o;
      V.NullLiteral = Io;
      V.Identifier = Ro;
      V.UnaryExpression = ou;
      V.BinaryExpression = gi;
      V.BinaryConcatExpression = lu;
      V.ConditionalExpression = cu;
      V.ArrayExpression = pu;
      V.MemberExpression = fu;
      V.CallExpression = du;
      V.NamedArgumentExpression = Eu;
      V.ObjectExpression = mu;
      V.ObjectProperty = hu;
      V.SequenceExpression = Du;
      V.SliceExpression = yu;
      V.FilterExpression = Au;
      V.Element = xu;
      V.Attribute = Po;
      V.TwigComment = qo;
      V.HtmlComment = wo;
      V.Declaration = Lo;
      V.GenericTwigTag = py;
      V.GenericToken = fy;
    });
    var Ho = l((eH, Fy) => {
      var Pw = typeof global == "object" && global && global.Object === Object && global;
      Fy.exports = Pw;
    });
    var vt = l((tH, Cy) => {
      var qw = Ho(), ww = typeof self == "object" && self && self.Object === Object && self, Lw = qw || ww || Function("return this")();
      Cy.exports = Lw;
    });
    var Li = l((rH, By) => {
      var kw = vt(), Mw = kw.Symbol;
      By.exports = Mw;
    });
    var by = l((nH, Oy) => {
      function Gw(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = Array(n); ++r < n; )
          s[r] = t(e[r], r, e);
        return s;
      }
      i(Gw, "arrayMap");
      Oy.exports = Gw;
    });
    var St = l((iH, Ny) => {
      var jw = Array.isArray;
      Ny.exports = jw;
    });
    var Py = l((sH, Ry) => {
      var _y = Li(), Iy = Object.prototype, Uw = Iy.hasOwnProperty, Yw = Iy.toString, ki = _y ? _y.toStringTag : void 0;
      function Vw(e) {
        var t = Uw.call(e, ki), r = e[ki];
        try {
          e[ki] = void 0;
          var n = true;
        } catch {
        }
        var s = Yw.call(e);
        return n && (t ? e[ki] = r : delete e[ki]), s;
      }
      i(Vw, "getRawTag");
      Ry.exports = Vw;
    });
    var wy = l((uH, qy) => {
      var Kw = Object.prototype, Hw = Kw.toString;
      function Ww(e) {
        return Hw.call(e);
      }
      i(Ww, "objectToString");
      qy.exports = Ww;
    });
    var Bn = l((aH, My) => {
      var Ly = Li(), Xw = Py(), $w = wy(), Jw = "[object Null]", zw = "[object Undefined]", ky = Ly ? Ly.toStringTag : void 0;
      function Qw(e) {
        return e == null ? e === void 0 ? zw : Jw : ky && ky in Object(e) ? Xw(e) : $w(e);
      }
      i(Qw, "baseGetTag");
      My.exports = Qw;
    });
    var On = l((oH, Gy) => {
      function Zw(e) {
        return e != null && typeof e == "object";
      }
      i(Zw, "isObjectLike");
      Gy.exports = Zw;
    });
    var Pu = l((lH, jy) => {
      var eL = Bn(), tL = On(), rL = "[object Symbol]";
      function nL(e) {
        return typeof e == "symbol" || tL(e) && eL(e) == rL;
      }
      i(nL, "isSymbol");
      jy.exports = nL;
    });
    var qu = l((cH, Hy) => {
      var Uy = Li(), iL = by(), sL = St(), uL = Pu(), aL = 1 / 0, Yy = Uy ? Uy.prototype : void 0, Vy = Yy ? Yy.toString : void 0;
      function Ky(e) {
        if (typeof e == "string")
          return e;
        if (sL(e))
          return iL(e, Ky) + "";
        if (uL(e))
          return Vy ? Vy.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -aL ? "-0" : t;
      }
      i(Ky, "baseToString");
      Hy.exports = Ky;
    });
    var Xy = l((pH, Wy) => {
      function oL(e, t, r) {
        var n = -1, s = e.length;
        t < 0 && (t = -t > s ? 0 : s + t), r = r > s ? s : r, r < 0 && (r += s), s = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var u = Array(s); ++n < s; )
          u[n] = e[n + t];
        return u;
      }
      i(oL, "baseSlice");
      Wy.exports = oL;
    });
    var Wo = l((fH, $y) => {
      var lL = Xy();
      function cL(e, t, r) {
        var n = e.length;
        return r = r === void 0 ? n : r, !t && r >= n ? e : lL(e, t, r);
      }
      i(cL, "castSlice");
      $y.exports = cL;
    });
    var zy = l((dH, Jy) => {
      function pL(e, t, r, n) {
        for (var s = e.length, u = r + (n ? 1 : -1); n ? u-- : ++u < s; )
          if (t(e[u], u, e))
            return u;
        return -1;
      }
      i(pL, "baseFindIndex");
      Jy.exports = pL;
    });
    var Zy = l((EH, Qy) => {
      function fL(e) {
        return e !== e;
      }
      i(fL, "baseIsNaN");
      Qy.exports = fL;
    });
    var tA = l((mH, eA) => {
      function dL(e, t, r) {
        for (var n = r - 1, s = e.length; ++n < s; )
          if (e[n] === t)
            return n;
        return -1;
      }
      i(dL, "strictIndexOf");
      eA.exports = dL;
    });
    var Xo = l((hH, rA) => {
      var EL = zy(), mL = Zy(), hL = tA();
      function DL(e, t, r) {
        return t === t ? hL(e, t, r) : EL(e, mL, r);
      }
      i(DL, "baseIndexOf");
      rA.exports = DL;
    });
    var iA = l((DH, nA) => {
      var yL = Xo();
      function AL(e, t) {
        for (var r = e.length; r-- && yL(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(AL, "charsEndIndex");
      nA.exports = AL;
    });
    var uA = l((yH, sA) => {
      function xL(e) {
        return e.split("");
      }
      i(xL, "asciiToArray");
      sA.exports = xL;
    });
    var oA = l((AH, aA) => {
      var TL = "\\ud800-\\udfff", gL = "\\u0300-\\u036f", vL = "\\ufe20-\\ufe2f", SL = "\\u20d0-\\u20ff", FL = gL + vL + SL, CL = "\\ufe0e\\ufe0f", BL = "\\u200d", OL = RegExp("[" + BL + TL + FL + CL + "]");
      function bL(e) {
        return OL.test(e);
      }
      i(bL, "hasUnicode");
      aA.exports = bL;
    });
    var hA = l((xH, mA) => {
      var lA = "\\ud800-\\udfff", NL = "\\u0300-\\u036f", _L = "\\ufe20-\\ufe2f", IL = "\\u20d0-\\u20ff", RL = NL + _L + IL, PL = "\\ufe0e\\ufe0f", qL = "[" + lA + "]", $o = "[" + RL + "]", Jo = "\\ud83c[\\udffb-\\udfff]", wL = "(?:" + $o + "|" + Jo + ")", cA = "[^" + lA + "]", pA = "(?:\\ud83c[\\udde6-\\uddff]){2}", fA = "[\\ud800-\\udbff][\\udc00-\\udfff]", LL = "\\u200d", dA = wL + "?", EA = "[" + PL + "]?", kL = "(?:" + LL + "(?:" + [cA, pA, fA].join("|") + ")" + EA + dA + ")*", ML = EA + dA + kL, GL = "(?:" + [cA + $o + "?", $o, pA, fA, qL].join("|") + ")", jL = RegExp(Jo + "(?=" + Jo + ")|" + GL + ML, "g");
      function UL(e) {
        return e.match(jL) || [];
      }
      i(UL, "unicodeToArray");
      mA.exports = UL;
    });
    var zo = l((TH, DA) => {
      var YL = uA(), VL = oA(), KL = hA();
      function HL(e) {
        return VL(e) ? KL(e) : YL(e);
      }
      i(HL, "stringToArray");
      DA.exports = HL;
    });
    var wu = l((gH, yA) => {
      var WL = qu();
      function XL(e) {
        return e == null ? "" : WL(e);
      }
      i(XL, "toString");
      yA.exports = XL;
    });
    var xA = l((vH, AA) => {
      var $L = /\s/;
      function JL(e) {
        for (var t = e.length; t-- && $L.test(e.charAt(t)); )
          ;
        return t;
      }
      i(JL, "trimmedEndIndex");
      AA.exports = JL;
    });
    var vA = l((SH, gA) => {
      var zL = qu(), QL = Wo(), ZL = iA(), TA = zo(), e6 = wu(), t6 = xA();
      function r6(e, t, r) {
        if (e = e6(e), e && (r || t === void 0))
          return e.slice(0, t6(e) + 1);
        if (!e || !(t = zL(t)))
          return e;
        var n = TA(e), s = ZL(n, TA(t)) + 1;
        return QL(n, 0, s).join("");
      }
      i(r6, "trimEnd");
      gA.exports = r6;
    });
    var FA = l((FH, SA) => {
      var n6 = Xo();
      function i6(e, t) {
        for (var r = -1, n = e.length; ++r < n && n6(t, e[r], 0) > -1; )
          ;
        return r;
      }
      i(i6, "charsStartIndex");
      SA.exports = i6;
    });
    var OA = l((CH, BA) => {
      var s6 = qu(), u6 = Wo(), a6 = FA(), CA = zo(), o6 = wu(), l6 = /^\s+/;
      function c6(e, t, r) {
        if (e = o6(e), e && (r || t === void 0))
          return e.replace(l6, "");
        if (!e || !(t = s6(t)))
          return e;
        var n = CA(e), s = a6(n, CA(t));
        return u6(n, s).join("");
      }
      i(c6, "trimStart");
      BA.exports = c6;
    });
    var al = l((uW, fx) => {
      function E6(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length, s = 0, u = []; ++r < n; ) {
          var a = e[r];
          t(a, r, e) && (u[s++] = a);
        }
        return u;
      }
      i(E6, "arrayFilter");
      fx.exports = E6;
    });
    var Ex = l((aW, dx) => {
      function m6(e) {
        return function(t, r, n) {
          for (var s = -1, u = Object(t), a = n(t), c = a.length; c--; ) {
            var p = a[e ? c : ++s];
            if (r(u[p], p, u) === false)
              break;
          }
          return t;
        };
      }
      i(m6, "createBaseFor");
      dx.exports = m6;
    });
    var hx = l((oW, mx) => {
      var h6 = Ex(), D6 = h6();
      mx.exports = D6;
    });
    var yx = l((lW, Dx) => {
      function y6(e, t) {
        for (var r = -1, n = Array(e); ++r < e; )
          n[r] = t(r);
        return n;
      }
      i(y6, "baseTimes");
      Dx.exports = y6;
    });
    var xx = l((cW, Ax) => {
      var A6 = Bn(), x6 = On(), T6 = "[object Arguments]";
      function g6(e) {
        return x6(e) && A6(e) == T6;
      }
      i(g6, "baseIsArguments");
      Ax.exports = g6;
    });
    var ol = l((pW, vx) => {
      var Tx = xx(), v6 = On(), gx = Object.prototype, S6 = gx.hasOwnProperty, F6 = gx.propertyIsEnumerable, C6 = Tx(function() {
        return arguments;
      }()) ? Tx : function(e) {
        return v6(e) && S6.call(e, "callee") && !F6.call(e, "callee");
      };
      vx.exports = C6;
    });
    var Fx = l((fW, Sx) => {
      function B6() {
        return false;
      }
      i(B6, "stubFalse");
      Sx.exports = B6;
    });
    var ll = l((ji, In) => {
      var O6 = vt(), b6 = Fx(), Ox = typeof ji == "object" && ji && !ji.nodeType && ji, Cx = Ox && typeof In == "object" && In && !In.nodeType && In, N6 = Cx && Cx.exports === Ox, Bx = N6 ? O6.Buffer : void 0, _6 = Bx ? Bx.isBuffer : void 0, I6 = _6 || b6;
      In.exports = I6;
    });
    var cl = l((dW, bx) => {
      var R6 = 9007199254740991, P6 = /^(?:0|[1-9]\d*)$/;
      function q6(e, t) {
        var r = typeof e;
        return t = t ?? R6, !!t && (r == "number" || r != "symbol" && P6.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      i(q6, "isIndex");
      bx.exports = q6;
    });
    var ku = l((EW, Nx) => {
      var w6 = 9007199254740991;
      function L6(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= w6;
      }
      i(L6, "isLength");
      Nx.exports = L6;
    });
    var Ix = l((mW, _x) => {
      var k6 = Bn(), M6 = ku(), G6 = On(), j6 = "[object Arguments]", U6 = "[object Array]", Y6 = "[object Boolean]", V6 = "[object Date]", K6 = "[object Error]", H6 = "[object Function]", W6 = "[object Map]", X6 = "[object Number]", $6 = "[object Object]", J6 = "[object RegExp]", z6 = "[object Set]", Q6 = "[object String]", Z6 = "[object WeakMap]", e3 = "[object ArrayBuffer]", t3 = "[object DataView]", r3 = "[object Float32Array]", n3 = "[object Float64Array]", i3 = "[object Int8Array]", s3 = "[object Int16Array]", u3 = "[object Int32Array]", a3 = "[object Uint8Array]", o3 = "[object Uint8ClampedArray]", l3 = "[object Uint16Array]", c3 = "[object Uint32Array]", de = {};
      de[r3] = de[n3] = de[i3] = de[s3] = de[u3] = de[a3] = de[o3] = de[l3] = de[c3] = true;
      de[j6] = de[U6] = de[e3] = de[Y6] = de[t3] = de[V6] = de[K6] = de[H6] = de[W6] = de[X6] = de[$6] = de[J6] = de[z6] = de[Q6] = de[Z6] = false;
      function p3(e) {
        return G6(e) && M6(e.length) && !!de[k6(e)];
      }
      i(p3, "baseIsTypedArray");
      _x.exports = p3;
    });
    var Px = l((hW, Rx) => {
      function f3(e) {
        return function(t) {
          return e(t);
        };
      }
      i(f3, "baseUnary");
      Rx.exports = f3;
    });
    var wx = l((Ui, Rn) => {
      var d3 = Ho(), qx = typeof Ui == "object" && Ui && !Ui.nodeType && Ui, Yi = qx && typeof Rn == "object" && Rn && !Rn.nodeType && Rn, E3 = Yi && Yi.exports === qx, pl = E3 && d3.process, m3 = function() {
        try {
          var e = Yi && Yi.require && Yi.require("util").types;
          return e || pl && pl.binding && pl.binding("util");
        } catch {
        }
      }();
      Rn.exports = m3;
    });
    var fl = l((DW, Mx) => {
      var h3 = Ix(), D3 = Px(), Lx = wx(), kx = Lx && Lx.isTypedArray, y3 = kx ? D3(kx) : h3;
      Mx.exports = y3;
    });
    var jx = l((yW, Gx) => {
      var A3 = yx(), x3 = ol(), T3 = St(), g3 = ll(), v3 = cl(), S3 = fl(), F3 = Object.prototype, C3 = F3.hasOwnProperty;
      function B3(e, t) {
        var r = T3(e), n = !r && x3(e), s = !r && !n && g3(e), u = !r && !n && !s && S3(e), a = r || n || s || u, c = a ? A3(e.length, String) : [], p = c.length;
        for (var f in e)
          (t || C3.call(e, f)) && !(a && (f == "length" || s && (f == "offset" || f == "parent") || u && (f == "buffer" || f == "byteLength" || f == "byteOffset") || v3(f, p))) && c.push(f);
        return c;
      }
      i(B3, "arrayLikeKeys");
      Gx.exports = B3;
    });
    var Yx = l((AW, Ux) => {
      var O3 = Object.prototype;
      function b3(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || O3;
        return e === r;
      }
      i(b3, "isPrototype");
      Ux.exports = b3;
    });
    var Kx = l((xW, Vx) => {
      function N3(e, t) {
        return function(r) {
          return e(t(r));
        };
      }
      i(N3, "overArg");
      Vx.exports = N3;
    });
    var Wx = l((TW, Hx) => {
      var _3 = Kx(), I3 = _3(Object.keys, Object);
      Hx.exports = I3;
    });
    var $x = l((gW, Xx) => {
      var R3 = Yx(), P3 = Wx(), q3 = Object.prototype, w3 = q3.hasOwnProperty;
      function L3(e) {
        if (!R3(e))
          return P3(e);
        var t = [];
        for (var r in Object(e))
          w3.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      i(L3, "baseKeys");
      Xx.exports = L3;
    });
    var Mu = l((vW, Jx) => {
      function k3(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      i(k3, "isObject");
      Jx.exports = k3;
    });
    var dl = l((SW, zx) => {
      var M3 = Bn(), G3 = Mu(), j3 = "[object AsyncFunction]", U3 = "[object Function]", Y3 = "[object GeneratorFunction]", V3 = "[object Proxy]";
      function K3(e) {
        if (!G3(e))
          return false;
        var t = M3(e);
        return t == U3 || t == Y3 || t == j3 || t == V3;
      }
      i(K3, "isFunction");
      zx.exports = K3;
    });
    var El = l((FW, Qx) => {
      var H3 = dl(), W3 = ku();
      function X3(e) {
        return e != null && W3(e.length) && !H3(e);
      }
      i(X3, "isArrayLike");
      Qx.exports = X3;
    });
    var Gu = l((CW, Zx) => {
      var $3 = jx(), J3 = $x(), z3 = El();
      function Q3(e) {
        return z3(e) ? $3(e) : J3(e);
      }
      i(Q3, "keys");
      Zx.exports = Q3;
    });
    var t1 = l((BW, e1) => {
      var Z3 = hx(), e5 = Gu();
      function t5(e, t) {
        return e && Z3(e, t, e5);
      }
      i(t5, "baseForOwn");
      e1.exports = t5;
    });
    var n1 = l((OW, r1) => {
      var r5 = El();
      function n5(e, t) {
        return function(r, n) {
          if (r == null)
            return r;
          if (!r5(r))
            return e(r, n);
          for (var s = r.length, u = t ? s : -1, a = Object(r); (t ? u-- : ++u < s) && n(a[u], u, a) !== false; )
            ;
          return r;
        };
      }
      i(n5, "createBaseEach");
      r1.exports = n5;
    });
    var s1 = l((bW, i1) => {
      var i5 = t1(), s5 = n1(), u5 = s5(i5);
      i1.exports = u5;
    });
    var a1 = l((NW, u1) => {
      var a5 = s1();
      function o5(e, t) {
        var r = [];
        return a5(e, function(n, s, u) {
          t(n, s, u) && r.push(n);
        }), r;
      }
      i(o5, "baseFilter");
      u1.exports = o5;
    });
    var l1 = l((_W, o1) => {
      function l5() {
        this.__data__ = [], this.size = 0;
      }
      i(l5, "listCacheClear");
      o1.exports = l5;
    });
    var ml = l((IW, c1) => {
      function c5(e, t) {
        return e === t || e !== e && t !== t;
      }
      i(c5, "eq");
      c1.exports = c5;
    });
    var Vi = l((RW, p1) => {
      var p5 = ml();
      function f5(e, t) {
        for (var r = e.length; r--; )
          if (p5(e[r][0], t))
            return r;
        return -1;
      }
      i(f5, "assocIndexOf");
      p1.exports = f5;
    });
    var d1 = l((PW, f1) => {
      var d5 = Vi(), E5 = Array.prototype, m5 = E5.splice;
      function h5(e) {
        var t = this.__data__, r = d5(t, e);
        if (r < 0)
          return false;
        var n = t.length - 1;
        return r == n ? t.pop() : m5.call(t, r, 1), --this.size, true;
      }
      i(h5, "listCacheDelete");
      f1.exports = h5;
    });
    var m1 = l((qW, E1) => {
      var D5 = Vi();
      function y5(e) {
        var t = this.__data__, r = D5(t, e);
        return r < 0 ? void 0 : t[r][1];
      }
      i(y5, "listCacheGet");
      E1.exports = y5;
    });
    var D1 = l((wW, h1) => {
      var A5 = Vi();
      function x5(e) {
        return A5(this.__data__, e) > -1;
      }
      i(x5, "listCacheHas");
      h1.exports = x5;
    });
    var A1 = l((LW, y1) => {
      var T5 = Vi();
      function g5(e, t) {
        var r = this.__data__, n = T5(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
      }
      i(g5, "listCacheSet");
      y1.exports = g5;
    });
    var Ki = l((kW, x1) => {
      var v5 = l1(), S5 = d1(), F5 = m1(), C5 = D1(), B5 = A1();
      function Pn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(Pn, "ListCache");
      Pn.prototype.clear = v5;
      Pn.prototype.delete = S5;
      Pn.prototype.get = F5;
      Pn.prototype.has = C5;
      Pn.prototype.set = B5;
      x1.exports = Pn;
    });
    var g1 = l((MW, T1) => {
      var O5 = Ki();
      function b5() {
        this.__data__ = new O5(), this.size = 0;
      }
      i(b5, "stackClear");
      T1.exports = b5;
    });
    var S1 = l((GW, v1) => {
      function N5(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      i(N5, "stackDelete");
      v1.exports = N5;
    });
    var C1 = l((jW, F1) => {
      function _5(e) {
        return this.__data__.get(e);
      }
      i(_5, "stackGet");
      F1.exports = _5;
    });
    var O1 = l((UW, B1) => {
      function I5(e) {
        return this.__data__.has(e);
      }
      i(I5, "stackHas");
      B1.exports = I5;
    });
    var N1 = l((YW, b1) => {
      var R5 = vt(), P5 = R5["__core-js_shared__"];
      b1.exports = P5;
    });
    var R1 = l((VW, I1) => {
      var hl = N1(), _1 = function() {
        var e = /[^.]+$/.exec(hl && hl.keys && hl.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
      function q5(e) {
        return !!_1 && _1 in e;
      }
      i(q5, "isMasked");
      I1.exports = q5;
    });
    var Dl = l((KW, P1) => {
      var w5 = Function.prototype, L5 = w5.toString;
      function k5(e) {
        if (e != null) {
          try {
            return L5.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      i(k5, "toSource");
      P1.exports = k5;
    });
    var w1 = l((HW, q1) => {
      var M5 = dl(), G5 = R1(), j5 = Mu(), U5 = Dl(), Y5 = /[\\^$.*+?()[\]{}|]/g, V5 = /^\[object .+?Constructor\]$/, K5 = Function.prototype, H5 = Object.prototype, W5 = K5.toString, X5 = H5.hasOwnProperty, $5 = RegExp("^" + W5.call(X5).replace(Y5, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function J5(e) {
        if (!j5(e) || G5(e))
          return false;
        var t = M5(e) ? $5 : V5;
        return t.test(U5(e));
      }
      i(J5, "baseIsNative");
      q1.exports = J5;
    });
    var k1 = l((WW, L1) => {
      function z5(e, t) {
        return e?.[t];
      }
      i(z5, "getValue");
      L1.exports = z5;
    });
    var Hr = l((XW, M1) => {
      var Q5 = w1(), Z5 = k1();
      function ek(e, t) {
        var r = Z5(e, t);
        return Q5(r) ? r : void 0;
      }
      i(ek, "getNative");
      M1.exports = ek;
    });
    var ju = l(($W, G1) => {
      var tk = Hr(), rk = vt(), nk = tk(rk, "Map");
      G1.exports = nk;
    });
    var Hi = l((JW, j1) => {
      var ik = Hr(), sk = ik(Object, "create");
      j1.exports = sk;
    });
    var V1 = l((zW, Y1) => {
      var U1 = Hi();
      function uk() {
        this.__data__ = U1 ? U1(null) : {}, this.size = 0;
      }
      i(uk, "hashClear");
      Y1.exports = uk;
    });
    var H1 = l((QW, K1) => {
      function ak(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      i(ak, "hashDelete");
      K1.exports = ak;
    });
    var X1 = l((ZW, W1) => {
      var ok = Hi(), lk = "__lodash_hash_undefined__", ck = Object.prototype, pk = ck.hasOwnProperty;
      function fk(e) {
        var t = this.__data__;
        if (ok) {
          var r = t[e];
          return r === lk ? void 0 : r;
        }
        return pk.call(t, e) ? t[e] : void 0;
      }
      i(fk, "hashGet");
      W1.exports = fk;
    });
    var J1 = l((eX, $1) => {
      var dk = Hi(), Ek = Object.prototype, mk = Ek.hasOwnProperty;
      function hk(e) {
        var t = this.__data__;
        return dk ? t[e] !== void 0 : mk.call(t, e);
      }
      i(hk, "hashHas");
      $1.exports = hk;
    });
    var Q1 = l((tX, z1) => {
      var Dk = Hi(), yk = "__lodash_hash_undefined__";
      function Ak(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = Dk && t === void 0 ? yk : t, this;
      }
      i(Ak, "hashSet");
      z1.exports = Ak;
    });
    var eT = l((rX, Z1) => {
      var xk = V1(), Tk = H1(), gk = X1(), vk = J1(), Sk = Q1();
      function qn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(qn, "Hash");
      qn.prototype.clear = xk;
      qn.prototype.delete = Tk;
      qn.prototype.get = gk;
      qn.prototype.has = vk;
      qn.prototype.set = Sk;
      Z1.exports = qn;
    });
    var nT = l((nX, rT) => {
      var tT = eT(), Fk = Ki(), Ck = ju();
      function Bk() {
        this.size = 0, this.__data__ = { hash: new tT(), map: new (Ck || Fk)(), string: new tT() };
      }
      i(Bk, "mapCacheClear");
      rT.exports = Bk;
    });
    var sT = l((iX, iT) => {
      function Ok(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      i(Ok, "isKeyable");
      iT.exports = Ok;
    });
    var Wi = l((sX, uT) => {
      var bk = sT();
      function Nk(e, t) {
        var r = e.__data__;
        return bk(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      i(Nk, "getMapData");
      uT.exports = Nk;
    });
    var oT = l((uX, aT) => {
      var _k = Wi();
      function Ik(e) {
        var t = _k(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      i(Ik, "mapCacheDelete");
      aT.exports = Ik;
    });
    var cT = l((aX, lT) => {
      var Rk = Wi();
      function Pk(e) {
        return Rk(this, e).get(e);
      }
      i(Pk, "mapCacheGet");
      lT.exports = Pk;
    });
    var fT = l((oX, pT) => {
      var qk = Wi();
      function wk(e) {
        return qk(this, e).has(e);
      }
      i(wk, "mapCacheHas");
      pT.exports = wk;
    });
    var ET = l((lX, dT) => {
      var Lk = Wi();
      function kk(e, t) {
        var r = Lk(this, e), n = r.size;
        return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
      }
      i(kk, "mapCacheSet");
      dT.exports = kk;
    });
    var Uu = l((cX, mT) => {
      var Mk = nT(), Gk = oT(), jk = cT(), Uk = fT(), Yk = ET();
      function wn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var n = e[t];
          this.set(n[0], n[1]);
        }
      }
      i(wn, "MapCache");
      wn.prototype.clear = Mk;
      wn.prototype.delete = Gk;
      wn.prototype.get = jk;
      wn.prototype.has = Uk;
      wn.prototype.set = Yk;
      mT.exports = wn;
    });
    var DT = l((pX, hT) => {
      var Vk = Ki(), Kk = ju(), Hk = Uu(), Wk = 200;
      function Xk(e, t) {
        var r = this.__data__;
        if (r instanceof Vk) {
          var n = r.__data__;
          if (!Kk || n.length < Wk - 1)
            return n.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new Hk(n);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      i(Xk, "stackSet");
      hT.exports = Xk;
    });
    var yl = l((fX, yT) => {
      var $k = Ki(), Jk = g1(), zk = S1(), Qk = C1(), Zk = O1(), e9 = DT();
      function Ln(e) {
        var t = this.__data__ = new $k(e);
        this.size = t.size;
      }
      i(Ln, "Stack");
      Ln.prototype.clear = Jk;
      Ln.prototype.delete = zk;
      Ln.prototype.get = Qk;
      Ln.prototype.has = Zk;
      Ln.prototype.set = e9;
      yT.exports = Ln;
    });
    var xT = l((dX, AT) => {
      var t9 = "__lodash_hash_undefined__";
      function r9(e) {
        return this.__data__.set(e, t9), this;
      }
      i(r9, "setCacheAdd");
      AT.exports = r9;
    });
    var gT = l((EX, TT) => {
      function n9(e) {
        return this.__data__.has(e);
      }
      i(n9, "setCacheHas");
      TT.exports = n9;
    });
    var ST = l((mX, vT) => {
      var i9 = Uu(), s9 = xT(), u9 = gT();
      function Yu(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new i9(); ++t < r; )
          this.add(e[t]);
      }
      i(Yu, "SetCache");
      Yu.prototype.add = Yu.prototype.push = s9;
      Yu.prototype.has = u9;
      vT.exports = Yu;
    });
    var CT = l((hX, FT) => {
      function a9(e, t) {
        for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
          if (t(e[r], r, e))
            return true;
        return false;
      }
      i(a9, "arraySome");
      FT.exports = a9;
    });
    var OT = l((DX, BT) => {
      function o9(e, t) {
        return e.has(t);
      }
      i(o9, "cacheHas");
      BT.exports = o9;
    });
    var Al = l((yX, bT) => {
      var l9 = ST(), c9 = CT(), p9 = OT(), f9 = 1, d9 = 2;
      function E9(e, t, r, n, s, u) {
        var a = r & f9, c = e.length, p = t.length;
        if (c != p && !(a && p > c))
          return false;
        var f = u.get(e), m = u.get(t);
        if (f && m)
          return f == t && m == e;
        var D = -1, d = true, x = r & d9 ? new l9() : void 0;
        for (u.set(e, t), u.set(t, e); ++D < c; ) {
          var F = e[D], O = t[D];
          if (n)
            var g = a ? n(O, F, D, t, e, u) : n(F, O, D, e, t, u);
          if (g !== void 0) {
            if (g)
              continue;
            d = false;
            break;
          }
          if (x) {
            if (!c9(t, function(j, X) {
              if (!p9(x, X) && (F === j || s(F, j, r, n, u)))
                return x.push(X);
            })) {
              d = false;
              break;
            }
          } else if (!(F === O || s(F, O, r, n, u))) {
            d = false;
            break;
          }
        }
        return u.delete(e), u.delete(t), d;
      }
      i(E9, "equalArrays");
      bT.exports = E9;
    });
    var _T = l((AX, NT) => {
      var m9 = vt(), h9 = m9.Uint8Array;
      NT.exports = h9;
    });
    var RT = l((xX, IT) => {
      function D9(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n, s) {
          r[++t] = [s, n];
        }), r;
      }
      i(D9, "mapToArray");
      IT.exports = D9;
    });
    var qT = l((TX, PT) => {
      function y9(e) {
        var t = -1, r = Array(e.size);
        return e.forEach(function(n) {
          r[++t] = n;
        }), r;
      }
      i(y9, "setToArray");
      PT.exports = y9;
    });
    var GT = l((gX, MT) => {
      var wT = Li(), LT = _T(), A9 = ml(), x9 = Al(), T9 = RT(), g9 = qT(), v9 = 1, S9 = 2, F9 = "[object Boolean]", C9 = "[object Date]", B9 = "[object Error]", O9 = "[object Map]", b9 = "[object Number]", N9 = "[object RegExp]", _9 = "[object Set]", I9 = "[object String]", R9 = "[object Symbol]", P9 = "[object ArrayBuffer]", q9 = "[object DataView]", kT = wT ? wT.prototype : void 0, xl = kT ? kT.valueOf : void 0;
      function w9(e, t, r, n, s, u, a) {
        switch (r) {
          case q9:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return false;
            e = e.buffer, t = t.buffer;
          case P9:
            return !(e.byteLength != t.byteLength || !u(new LT(e), new LT(t)));
          case F9:
          case C9:
          case b9:
            return A9(+e, +t);
          case B9:
            return e.name == t.name && e.message == t.message;
          case N9:
          case I9:
            return e == t + "";
          case O9:
            var c = T9;
          case _9:
            var p = n & v9;
            if (c || (c = g9), e.size != t.size && !p)
              return false;
            var f = a.get(e);
            if (f)
              return f == t;
            n |= S9, a.set(e, t);
            var m = x9(c(e), c(t), n, s, u, a);
            return a.delete(e), m;
          case R9:
            if (xl)
              return xl.call(e) == xl.call(t);
        }
        return false;
      }
      i(w9, "equalByTag");
      MT.exports = w9;
    });
    var UT = l((vX, jT) => {
      function L9(e, t) {
        for (var r = -1, n = t.length, s = e.length; ++r < n; )
          e[s + r] = t[r];
        return e;
      }
      i(L9, "arrayPush");
      jT.exports = L9;
    });
    var VT = l((SX, YT) => {
      var k9 = UT(), M9 = St();
      function G9(e, t, r) {
        var n = t(e);
        return M9(e) ? n : k9(n, r(e));
      }
      i(G9, "baseGetAllKeys");
      YT.exports = G9;
    });
    var HT = l((FX, KT) => {
      function j9() {
        return [];
      }
      i(j9, "stubArray");
      KT.exports = j9;
    });
    var $T = l((CX, XT) => {
      var U9 = al(), Y9 = HT(), V9 = Object.prototype, K9 = V9.propertyIsEnumerable, WT = Object.getOwnPropertySymbols, H9 = WT ? function(e) {
        return e == null ? [] : (e = Object(e), U9(WT(e), function(t) {
          return K9.call(e, t);
        }));
      } : Y9;
      XT.exports = H9;
    });
    var zT = l((BX, JT) => {
      var W9 = VT(), X9 = $T(), $9 = Gu();
      function J9(e) {
        return W9(e, $9, X9);
      }
      i(J9, "getAllKeys");
      JT.exports = J9;
    });
    var eg = l((OX, ZT) => {
      var QT = zT(), z9 = 1, Q9 = Object.prototype, Z9 = Q9.hasOwnProperty;
      function e4(e, t, r, n, s, u) {
        var a = r & z9, c = QT(e), p = c.length, f = QT(t), m = f.length;
        if (p != m && !a)
          return false;
        for (var D = p; D--; ) {
          var d = c[D];
          if (!(a ? d in t : Z9.call(t, d)))
            return false;
        }
        var x = u.get(e), F = u.get(t);
        if (x && F)
          return x == t && F == e;
        var O = true;
        u.set(e, t), u.set(t, e);
        for (var g = a; ++D < p; ) {
          d = c[D];
          var j = e[d], X = t[d];
          if (n)
            var Q = a ? n(X, j, d, t, e, u) : n(j, X, d, e, t, u);
          if (!(Q === void 0 ? j === X || s(j, X, r, n, u) : Q)) {
            O = false;
            break;
          }
          g || (g = d == "constructor");
        }
        if (O && !g) {
          var Me = e.constructor, Xe = t.constructor;
          Me != Xe && "constructor" in e && "constructor" in t && !(typeof Me == "function" && Me instanceof Me && typeof Xe == "function" && Xe instanceof Xe) && (O = false);
        }
        return u.delete(e), u.delete(t), O;
      }
      i(e4, "equalObjects");
      ZT.exports = e4;
    });
    var rg = l((bX, tg) => {
      var t4 = Hr(), r4 = vt(), n4 = t4(r4, "DataView");
      tg.exports = n4;
    });
    var ig = l((NX, ng) => {
      var i4 = Hr(), s4 = vt(), u4 = i4(s4, "Promise");
      ng.exports = u4;
    });
    var ug = l((_X, sg) => {
      var a4 = Hr(), o4 = vt(), l4 = a4(o4, "Set");
      sg.exports = l4;
    });
    var og = l((IX, ag) => {
      var c4 = Hr(), p4 = vt(), f4 = c4(p4, "WeakMap");
      ag.exports = f4;
    });
    var hg = l((RX, mg) => {
      var Tl = rg(), gl = ju(), vl = ig(), Sl = ug(), Fl = og(), Eg = Bn(), kn = Dl(), lg = "[object Map]", d4 = "[object Object]", cg = "[object Promise]", pg = "[object Set]", fg = "[object WeakMap]", dg = "[object DataView]", E4 = kn(Tl), m4 = kn(gl), h4 = kn(vl), D4 = kn(Sl), y4 = kn(Fl), Wr = Eg;
      (Tl && Wr(new Tl(new ArrayBuffer(1))) != dg || gl && Wr(new gl()) != lg || vl && Wr(vl.resolve()) != cg || Sl && Wr(new Sl()) != pg || Fl && Wr(new Fl()) != fg) && (Wr = i(function(e) {
        var t = Eg(e), r = t == d4 ? e.constructor : void 0, n = r ? kn(r) : "";
        if (n)
          switch (n) {
            case E4:
              return dg;
            case m4:
              return lg;
            case h4:
              return cg;
            case D4:
              return pg;
            case y4:
              return fg;
          }
        return t;
      }, "getTag"));
      mg.exports = Wr;
    });
    var Sg = l((PX, vg) => {
      var Cl = yl(), A4 = Al(), x4 = GT(), T4 = eg(), Dg = hg(), yg = St(), Ag = ll(), g4 = fl(), v4 = 1, xg = "[object Arguments]", Tg = "[object Array]", Vu = "[object Object]", S4 = Object.prototype, gg = S4.hasOwnProperty;
      function F4(e, t, r, n, s, u) {
        var a = yg(e), c = yg(t), p = a ? Tg : Dg(e), f = c ? Tg : Dg(t);
        p = p == xg ? Vu : p, f = f == xg ? Vu : f;
        var m = p == Vu, D = f == Vu, d = p == f;
        if (d && Ag(e)) {
          if (!Ag(t))
            return false;
          a = true, m = false;
        }
        if (d && !m)
          return u || (u = new Cl()), a || g4(e) ? A4(e, t, r, n, s, u) : x4(e, t, p, r, n, s, u);
        if (!(r & v4)) {
          var x = m && gg.call(e, "__wrapped__"), F = D && gg.call(t, "__wrapped__");
          if (x || F) {
            var O = x ? e.value() : e, g = F ? t.value() : t;
            return u || (u = new Cl()), s(O, g, r, n, u);
          }
        }
        return d ? (u || (u = new Cl()), T4(e, t, r, n, s, u)) : false;
      }
      i(F4, "baseIsEqualDeep");
      vg.exports = F4;
    });
    var Bl = l((qX, Bg) => {
      var C4 = Sg(), Fg = On();
      function Cg(e, t, r, n, s) {
        return e === t ? true : e == null || t == null || !Fg(e) && !Fg(t) ? e !== e && t !== t : C4(e, t, r, n, Cg, s);
      }
      i(Cg, "baseIsEqual");
      Bg.exports = Cg;
    });
    var bg = l((wX, Og) => {
      var B4 = yl(), O4 = Bl(), b4 = 1, N4 = 2;
      function _4(e, t, r, n) {
        var s = r.length, u = s, a = !n;
        if (e == null)
          return !u;
        for (e = Object(e); s--; ) {
          var c = r[s];
          if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
            return false;
        }
        for (; ++s < u; ) {
          c = r[s];
          var p = c[0], f = e[p], m = c[1];
          if (a && c[2]) {
            if (f === void 0 && !(p in e))
              return false;
          } else {
            var D = new B4();
            if (n)
              var d = n(f, m, p, e, t, D);
            if (!(d === void 0 ? O4(m, f, b4 | N4, n, D) : d))
              return false;
          }
        }
        return true;
      }
      i(_4, "baseIsMatch");
      Og.exports = _4;
    });
    var Ol = l((LX, Ng) => {
      var I4 = Mu();
      function R4(e) {
        return e === e && !I4(e);
      }
      i(R4, "isStrictComparable");
      Ng.exports = R4;
    });
    var Ig = l((kX, _g) => {
      var P4 = Ol(), q4 = Gu();
      function w4(e) {
        for (var t = q4(e), r = t.length; r--; ) {
          var n = t[r], s = e[n];
          t[r] = [n, s, P4(s)];
        }
        return t;
      }
      i(w4, "getMatchData");
      _g.exports = w4;
    });
    var bl = l((MX, Rg) => {
      function L4(e, t) {
        return function(r) {
          return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
        };
      }
      i(L4, "matchesStrictComparable");
      Rg.exports = L4;
    });
    var qg = l((GX, Pg) => {
      var k4 = bg(), M4 = Ig(), G4 = bl();
      function j4(e) {
        var t = M4(e);
        return t.length == 1 && t[0][2] ? G4(t[0][0], t[0][1]) : function(r) {
          return r === e || k4(r, e, t);
        };
      }
      i(j4, "baseMatches");
      Pg.exports = j4;
    });
    var Ku = l((jX, wg) => {
      var U4 = St(), Y4 = Pu(), V4 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, K4 = /^\w*$/;
      function H4(e, t) {
        if (U4(e))
          return false;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || Y4(e) ? true : K4.test(e) || !V4.test(e) || t != null && e in Object(t);
      }
      i(H4, "isKey");
      wg.exports = H4;
    });
    var Mg = l((UX, kg) => {
      var Lg = Uu(), W4 = "Expected a function";
      function Nl(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new TypeError(W4);
        var r = i(function() {
          var n = arguments, s = t ? t.apply(this, n) : n[0], u = r.cache;
          if (u.has(s))
            return u.get(s);
          var a = e.apply(this, n);
          return r.cache = u.set(s, a) || u, a;
        }, "memoized");
        return r.cache = new (Nl.Cache || Lg)(), r;
      }
      i(Nl, "memoize");
      Nl.Cache = Lg;
      kg.exports = Nl;
    });
    var jg = l((YX, Gg) => {
      var X4 = Mg(), $4 = 500;
      function J4(e) {
        var t = X4(e, function(n) {
          return r.size === $4 && r.clear(), n;
        }), r = t.cache;
        return t;
      }
      i(J4, "memoizeCapped");
      Gg.exports = J4;
    });
    var Yg = l((VX, Ug) => {
      var z4 = jg(), Q4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Z4 = /\\(\\)?/g, e7 = z4(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Q4, function(r, n, s, u) {
          t.push(s ? u.replace(Z4, "$1") : n || r);
        }), t;
      });
      Ug.exports = e7;
    });
    var _l = l((KX, Vg) => {
      var t7 = St(), r7 = Ku(), n7 = Yg(), i7 = wu();
      function s7(e, t) {
        return t7(e) ? e : r7(e, t) ? [e] : n7(i7(e));
      }
      i(s7, "castPath");
      Vg.exports = s7;
    });
    var Xi = l((HX, Kg) => {
      var u7 = Pu(), a7 = 1 / 0;
      function o7(e) {
        if (typeof e == "string" || u7(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -a7 ? "-0" : t;
      }
      i(o7, "toKey");
      Kg.exports = o7;
    });
    var Il = l((WX, Hg) => {
      var l7 = _l(), c7 = Xi();
      function p7(e, t) {
        t = l7(t, e);
        for (var r = 0, n = t.length; e != null && r < n; )
          e = e[c7(t[r++])];
        return r && r == n ? e : void 0;
      }
      i(p7, "baseGet");
      Hg.exports = p7;
    });
    var Xg = l((XX, Wg) => {
      var f7 = Il();
      function d7(e, t, r) {
        var n = e == null ? void 0 : f7(e, t);
        return n === void 0 ? r : n;
      }
      i(d7, "get");
      Wg.exports = d7;
    });
    var Jg = l(($X, $g) => {
      function E7(e, t) {
        return e != null && t in Object(e);
      }
      i(E7, "baseHasIn");
      $g.exports = E7;
    });
    var Qg = l((JX, zg) => {
      var m7 = _l(), h7 = ol(), D7 = St(), y7 = cl(), A7 = ku(), x7 = Xi();
      function T7(e, t, r) {
        t = m7(t, e);
        for (var n = -1, s = t.length, u = false; ++n < s; ) {
          var a = x7(t[n]);
          if (!(u = e != null && r(e, a)))
            break;
          e = e[a];
        }
        return u || ++n != s ? u : (s = e == null ? 0 : e.length, !!s && A7(s) && y7(a, s) && (D7(e) || h7(e)));
      }
      i(T7, "hasPath");
      zg.exports = T7;
    });
    var ev = l((zX, Zg) => {
      var g7 = Jg(), v7 = Qg();
      function S7(e, t) {
        return e != null && v7(e, t, g7);
      }
      i(S7, "hasIn");
      Zg.exports = S7;
    });
    var rv = l((QX, tv) => {
      var F7 = Bl(), C7 = Xg(), B7 = ev(), O7 = Ku(), b7 = Ol(), N7 = bl(), _7 = Xi(), I7 = 1, R7 = 2;
      function P7(e, t) {
        return O7(e) && b7(t) ? N7(_7(e), t) : function(r) {
          var n = C7(r, e);
          return n === void 0 && n === t ? B7(r, e) : F7(t, n, I7 | R7);
        };
      }
      i(P7, "baseMatchesProperty");
      tv.exports = P7;
    });
    var iv = l((ZX, nv) => {
      function q7(e) {
        return e;
      }
      i(q7, "identity");
      nv.exports = q7;
    });
    var uv = l((e$, sv) => {
      function w7(e) {
        return function(t) {
          return t?.[e];
        };
      }
      i(w7, "baseProperty");
      sv.exports = w7;
    });
    var ov = l((t$, av) => {
      var L7 = Il();
      function k7(e) {
        return function(t) {
          return L7(t, e);
        };
      }
      i(k7, "basePropertyDeep");
      av.exports = k7;
    });
    var cv = l((r$, lv) => {
      var M7 = uv(), G7 = ov(), j7 = Ku(), U7 = Xi();
      function Y7(e) {
        return j7(e) ? M7(U7(e)) : G7(e);
      }
      i(Y7, "property");
      lv.exports = Y7;
    });
    var fv = l((n$, pv) => {
      var V7 = qg(), K7 = rv(), H7 = iv(), W7 = St(), X7 = cv();
      function $7(e) {
        return typeof e == "function" ? e : e == null ? H7 : typeof e == "object" ? W7(e) ? K7(e[0], e[1]) : V7(e) : X7(e);
      }
      i($7, "baseIteratee");
      pv.exports = $7;
    });
    var Ev = l((i$, dv) => {
      var J7 = al(), z7 = a1(), Q7 = fv(), Z7 = St();
      function eM(e, t) {
        var r = Z7(e) ? J7 : z7;
        return r(e, Q7(t, 3));
      }
      i(eM, "filter");
      dv.exports = eM;
    });
    var dG = {};
    Kl(dG, { EXPRESSION_NEEDED: () => U, FILTER_BLOCK: () => Wn, GROUP_TOP_LEVEL_LOGICAL: () => Ar, INSIDE_OF_STRING: () => Et, IS_ROOT_LOGICAL_EXPRESSION: () => xr, NEWLINES_ONLY: () => Xn, OVERRIDE_QUOTE_CHAR: () => Hn, PRESERVE_LEADING_WHITESPACE: () => Dr, PRESERVE_TRAILING_WHITESPACE: () => yr, STRING_NEEDS_QUOTES: () => q, countNewlines: () => st, createTextGroups: () => Uo, findParentNode: () => ur, firstValueInAncestorChain: () => yt, getDeepProperty: () => Fi, hasAtLeastTwoNewlines: () => gw, hasNoNewlines: () => Su, indentWithHardline: () => An, isContractableNodeType: () => vi, isEmptySequence: () => Yo, isHtmlCommentEqualTo: () => Ci, isInlineElement: () => Oi, isMelodyNode: () => hn, isMultipartExpression: () => Si, isNotExpression: () => Mo, isRootNode: () => jo, isTwigCommentEqualTo: () => Bi, isValidIdentifierName: () => Go, isWhitespaceNode: () => Dn, isWhitespaceOnly: () => Rr, languages: () => nG, normalizeHtmlComment: () => Bu, normalizeTwigComment: () => Ou, options: () => fG, parsers: () => aG, printChildBlock: () => Pe, printChildGroups: () => xn, printers: () => pG, quoteChar: () => mn, registerContractableNodeType: () => xw, removeSurroundingWhitespace: () => yn, setDeepProperty: () => Ay, shouldExpressionsBeWrapped: () => gu, someParentNode: () => Tu, stripHtmlCommentChars: () => Fu, stripTwigCommentChars: () => Cu, testCurrentAndParentNodes: () => Tw, testCurrentNode: () => my, walkParents: () => Ey, wrapExpressionIfNeeded: () => ke, wrapInEnvironment: () => hy, wrapInStringInterpolation: () => vu });
    module.exports = HS(dG);
    function jn(e) {
      if (typeof e != "string") {
        if (Array.isArray(e)) {
          for (let t of e)
            jn(t);
          return;
        }
        if (!(e && typeof e.type == "string"))
          throw new Error("Value " + JSON.stringify(e) + " is not a valid document");
      }
    }
    i(jn, "assertDoc");
    function E(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          jn(t);
      return { type: "concat", parts: e };
    }
    i(E, "concat");
    function I(e) {
      return process.env.NODE_ENV !== "production" && jn(e), { type: "indent", contents: e };
    }
    i(I, "indent");
    function C(e, t = {}) {
      return process.env.NODE_ENV !== "production" && jn(e), { type: "group", id: t.id, contents: e, break: Boolean(t.shouldBreak), expandedStates: t.expandedStates };
    }
    i(C, "group");
    function $r(e) {
      if (process.env.NODE_ENV !== "production")
        for (let t of e)
          jn(t);
      return { type: "fill", parts: e };
    }
    i($r, "fill");
    var Wl = { type: "break-parent" };
    var WS = { type: "line", hard: true };
    var XS = { type: "line", hard: true, literal: true };
    var B = { type: "line" };
    var ne = { type: "line", soft: true };
    var P = E([WS, Wl]);
    var mG = E([XS, Wl]);
    var hG = { type: "cursor", placeholder: Symbol("cursor") };
    function Ee(e, t) {
      let r = [];
      for (let n = 0; n < t.length; n++)
        n !== 0 && r.push(e), r.push(t[n]);
      return E(r);
    }
    i(Ee, "join");
    var rs = W(require("path"));
    var Oc = W(Bc());
    var ns = i((e) => e.twigMelodyPlugins && Array.isArray(e.twigMelodyPlugins) ? e.twigMelodyPlugins.map((t) => t.trim()) : [], "getPluginPathsFromOptions");
    var LF = i(() => {
      let e = __dirname.split(rs.default.sep), t = e.length - 1, r = e[t];
      for (; r !== "node_modules" && t > 0; )
        t--, r = e[t];
      t === 0 && (t = e.length - 2);
      let n = e.slice(0, t), s = rs.default.join(...n), u = __dirname.indexOf(s);
      return __dirname.slice(0, u) + s;
    }, "getProjectRoot");
    var kF = i((pluginPath) => {
      try {
        let projectRoot = LF(), requirePath = Oc.default.sync(rs.default.resolve(projectRoot, pluginPath));
        return eval("require")(requirePath);
      } catch (e) {
        console.error("Could not load plugin path " + pluginPath);
        return;
      }
    }, "tryLoadPlugin");
    var ia = i((e) => {
      let t = [];
      return e && Array.isArray(e) && e.forEach((r) => {
        let n = kF(r);
        n && t.push(n);
      }), t;
    }, "loadPlugins");
    var bc = i((e) => {
      let t = [];
      return ia(e).forEach((n) => {
        t = t.concat(n.melodyExtensions);
      }), t.filter((n) => !!n);
    }, "getAdditionalMelodyExtensions");
    var q = Symbol("STRING_NEEDS_QUOTES");
    var Hn = Symbol("OVERRIDE_QUOTE_CHAR");
    var U = Symbol("EXPRESSION_NEEDED");
    var Et = Symbol("INSIDE_OF_STRING");
    var Wn = Symbol("FILTER_BLOCK");
    var Dr = Symbol("PRESERVE_LEADING_WHITESPACE");
    var yr = Symbol("PRESERVE_TRAILING_WHITESPACE");
    var Xn = Symbol("NEWLINES_ONLY");
    var Ar = Symbol("GROUP_TOP_LEVEL_LOGICAL");
    var xr = Symbol("IS_ROOT_LOGICAL_EXPRESSION");
    var Be = W(re());
    var Aw = ["title", "h1", "h2", "h3", "h4", "h5", "h6", "a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dd", "dfn", "em", "i", "img", "kbd", "label", "mark", "q", "s", "u", "samp", "strike", "strong", "sup", "sub", "small", "span", "time", "tt", "var"];
    var ko = ["ObjectExpression", "BinaryExpression", "ConditionalExpression", "ArrayExpression"];
    var xw = i((e) => {
      ko.push(e);
    }, "registerContractableNodeType");
    var vi = i((e) => {
      for (let t = 0; t < ko.length; t++) {
        let r = ko[t], n = "is" + r;
        if (Be.Node[n] && Be.Node[n].call(null, e))
          return true;
      }
      return !!Be.Node.isUnaryLike(e);
    }, "isContractableNodeType");
    var Mo = i((e) => Be.Node.isUnaryLike(e) && e.operator === "not", "isNotExpression");
    var Si = i((e) => Be.Node.isBinaryExpression(e) || Be.Node.isConditionalExpression(e) || Be.Node.isUnaryLike(e), "isMultipartExpression");
    var Ey = i((e, t, r = false) => {
      let n = e.stack.length - 1;
      for (r || (n -= 1); n >= 0; ) {
        let s = e.stack[n];
        if (hn(s) && t(s) === false)
          return;
        n--;
      }
    }, "walkParents");
    var yt = i((e, t, r) => {
      let n = e.stack.length - 2;
      for (; n >= 0; ) {
        let s = e.stack[n];
        if (hn(s) && s[t] !== void 0)
          return s[t];
        n--;
      }
      return r;
    }, "firstValueInAncestorChain");
    var mn = i((e) => e && e.twigSingleQuote ? "'" : '"', "quoteChar");
    var Go = i((e) => typeof e == "string" && /^[A-Z][0-9A-Z_$]*$/i.test(e), "isValidIdentifierName");
    var hn = i((e) => {
      let t = e.__proto__;
      return typeof e == "object" && t.type && typeof Be.Node["is" + t.type] == "function";
    }, "isMelodyNode");
    var ur = i((e) => {
      let t = e.stack.length - 2;
      for (; t >= 0; ) {
        let r = e.stack[t];
        if (hn(r))
          return r;
        t--;
      }
      return null;
    }, "findParentNode");
    var jo = i((e) => ur(e) === null, "isRootNode");
    var Tw = i((e, t) => my(e, t) || Tu(e, t), "testCurrentAndParentNodes");
    var my = i((e, t) => {
      let r = e.stack.length - 1;
      if (r >= 0) {
        let n = e.stack[r];
        return hn(n) && t(n);
      }
      return false;
    }, "testCurrentNode");
    var Tu = i((e, t) => {
      let r = e.stack.length - 2;
      for (; r >= 0; ) {
        let n = e.stack[r];
        if (hn(n) && t(n))
          return true;
        r--;
      }
      return false;
    }, "someParentNode");
    var gu = i((e) => {
      let t = false;
      return Ey(e, (r) => {
        if (r.tagName != null)
          return false;
        if (r[Et] === true)
          return t = Et, false;
        if (r[U] === true)
          return t = U, false;
        if (r[U] === false || r[Et] === false)
          return false;
      }), t;
    }, "shouldExpressionsBeWrapped");
    var ke = i((e, t, r = {}) => {
      let n = gu(e);
      return n === U ? hy(t, r.trimLeft, r.trimRight) : n === Et && vu(t), t;
    }, "wrapExpressionIfNeeded");
    var hy = i((e, t = false, r = false) => {
      let n = t ? "{{-" : "{{", s = r ? "-}}" : "}}";
      e.unshift(n, B), e.push(B, s);
    }, "wrapInEnvironment");
    var vu = i((e) => {
      e.unshift("#{"), e.push("}");
    }, "wrapInStringInterpolation");
    var Rr = i((e) => typeof e == "string" && e.trim() === "", "isWhitespaceOnly");
    var st = i((e) => (e.match(/\n/g) || "").length, "countNewlines");
    var Su = i((e) => st(e) === 0, "hasNoNewlines");
    var gw = i((e) => st(e) >= 2, "hasAtLeastTwoNewlines");
    var Dy = i((e) => e.split(/([\s\n]+)/gm), "splitByWhitespace");
    var yy = i((e, t = " ") => Dy(e).filter((r) => !Rr(r)).join(t), "unifyWhitespace");
    var vw = i((e) => {
      let t = st(e);
      return t > 0 ? t > 1 ? [P, P] : [P] : [B];
    }, "normalizeWhitespace");
    var Uo = i((e, t, r) => {
      let n = Dy(e), s = [], u = [], a = n.length;
      return n.forEach((c, p) => {
        if (c !== "")
          if (Rr(c)) {
            let f = s.length === 0 && u.length === 0, m = p === a - 1 || p === a - 2 && n[a - 1] === "";
            f && t || m && r ? u.push(...vw(c)) : !f && !m && (st(c) <= 1 ? u.push(B) : (s.push(u), u = []));
          } else
            u.push(c);
      }), u.length > 0 && s.push(u), s.map((c) => $r(c));
    }, "createTextGroups");
    var Dn = i((e) => Be.Node.isPrintTextStatement(e) && Rr(e.value.value) || Be.Node.isStringLiteral(e) && Rr(e.value), "isWhitespaceNode");
    var Yo = i((e) => Be.Node.isSequenceExpression(e) && e.expressions.length === 0, "isEmptySequence");
    var yn = i((e) => {
      if (!Array.isArray(e))
        return e;
      let t = [];
      return e.forEach((r, n) => {
        (n === 0 || n === e.length - 1) && Dn(r) || t.push(r);
      }), t;
    }, "removeSurroundingWhitespace");
    var Fi = i((e, ...t) => {
      let r = e;
      return t.forEach((n) => {
        r = r[n];
      }), r;
    }, "getDeepProperty");
    var Ay = i((e, t, ...r) => {
      let n = e, s = r.length;
      for (let u = 0; u < s - 1; u++)
        n = n[r[u]];
      n[r[s - 1]] = t;
    }, "setDeepProperty");
    var Pe = i((e, t, r, ...n) => {
      let s = Fi(e, ...n);
      Ay(e, yn(s), ...n);
      let u = xn(e, t, r, ...n);
      return I(C(E([P, ...u])));
    }, "printChildBlock");
    var Sw = i((e) => {
      e.length > 0 && e.push(P);
    }, "addNewlineIfNotEmpty");
    var Fw = i((e) => e.endsWith("-->"), "endsWithHtmlComment");
    var Cw = i((e, t) => (r) => {
      let n = r;
      return n.startsWith(e) && (n = n.slice(e.length)), n.endsWith(t) && (n = n.slice(0, 0 - t.length)), n;
    }, "stripCommentChars");
    var Fu = Cw("<!--", "-->");
    var Cu = i((e) => {
      let t = e;
      return t.startsWith("{#") && (t = t.slice(2)), t.startsWith("-") && (t = t.slice(1)), t.endsWith("#}") && (t = t.slice(0, -2)), t.endsWith("-") && (t = t.slice(0, -1)), t;
    }, "stripTwigCommentChars");
    var Bu = i((e) => {
      let t = Fu(e);
      return "<!-- " + yy(t) + " -->";
    }, "normalizeHtmlComment");
    var Ou = i((e, t, r) => {
      let n = Cu(e), s = t ? "{#-" : "{#", u = r ? "-#}" : "#}";
      return s + " " + yy(n) + " " + u;
    }, "normalizeTwigComment");
    var Ci = i((e) => (t) => t.constructor.name === "HtmlComment" && t.value.value && Bu(t.value.value) === "<!-- " + e + " -->", "isHtmlCommentEqualTo");
    var Bi = i((e) => (t) => t.constructor.name === "TwigComment" && t.value.value && Ou(t.value.value) === "{# " + e + " #}", "isTwigCommentEqualTo");
    var Bw = i((e) => {
      if (!Be.Node.isPrintTextStatement(e))
        return false;
      let t = typeof e.value.value == "string" && e.value.value.trim();
      return !Fw(t);
    }, "isInlineTextStatement");
    var Oi = i((e) => Be.Node.isElement(e) && Aw.indexOf(e.name) >= 0 || Be.Node.isPrintExpressionStatement(e) || Bw(e), "isInlineElement");
    var dy = i((e) => Be.Node.isTwigComment(e) || Be.Node.isHtmlComment(e), "isCommentNode");
    var Ow = i((e) => e.map((t) => Oi(t)), "createInlineMap");
    var bw = i((e) => {
      e.forEach((t) => {
        Be.Node.isPrintTextStatement(t) && (t[Xn] = true);
      });
    }, "textStatementsOnlyNewlines");
    var Nw = i((e, t) => {
      t.forEach((r, n) => {
        let s = n > 0 && dy(t[n - 1]), u = n < t.length - 1 && dy(t[n + 1]);
        Be.Node.isPrintTextStatement(r) && ((n > 0 && e[n - 1] || s) && (r[Dr] = true), (n < e.length - 1 && e[n + 1] || u) && (r[yr] = true));
      });
    }, "addPreserveWhitespaceInfo");
    var An = i((e) => I(E([P, e])), "indentWithHardline");
    var xn = i((e, t, r, ...n) => {
      let s = Fi(e, ...n), u = Ow(s);
      Nw(u, s), bw(s);
      let a = t.map(r, ...n), c = [], p = [];
      return a.forEach((f, m) => {
        u[m] ? c.push(f) : (c.length > 0 && (p.push($r(c)), c = []), p.length > 0 && !u[m - 1] && Sw(p), p.push(f));
      }), c.length > 0 && p.push($r(c)), p;
    }, "printChildGroups");
    var xy = W(re());
    var _w = { ",": true };
    var Ty = i((e, t, r) => {
      let s = [e.trimLeft ? "{%-" : "{%", " ", e.tagName], u = t.map(r, "parts");
      u.length > 0 && s.push(" ", u[0]);
      let a = [];
      for (let p = 1; p < e.parts.length; p++) {
        let f = e.parts[p], D = xy.Node.isGenericToken(f) && _w[f.tokenText] ? "" : B;
        a.push(D, u[p]);
      }
      e.parts.length > 1 && s.push(I(E(a)));
      let c = e.trimRight ? "-%}" : "%}";
      return s.push(B, c), C(E(s));
    }, "printSingleTwigTag");
    var gy = i((e, t, r) => {
      e[q] = false, e.expressions = yn(e.expressions);
      let n = xn(e, t, r, "expressions");
      return jo(t) ? E([...n, P]) : E(n);
    }, "printSequenceExpression");
    var dr = W(re());
    var Se = W(re());
    var S = W(re());
    var $ = Symbol();
    var Iw = Symbol();
    function R(e, { pos: { index: t, line: r, column: n } }) {
      return e.loc.start = { line: r, column: n, index: t }, e;
    }
    i(R, "setStartFromToken");
    function b(e, { pos: { line: t, column: r }, end: n }) {
      return e.loc.end = { line: t, column: r, index: n }, e;
    }
    i(b, "setEndFromToken");
    function Vo(e, t, { pos: { index: r, line: n, column: s } }) {
      return e[t] = { line: n, column: s, index: r }, e;
    }
    i(Vo, "setMarkFromToken");
    function Ye(e, { loc: { start: { line: t, column: r, index: n } } }) {
      return e.loc.start.line = t, e.loc.start.column = r, e.loc.start.index = n, e;
    }
    i(Ye, "copyStart");
    function qe(e, t) {
      return e.loc.end.line = t.loc.end.line, e.loc.end.column = t.loc.end.column, e.loc.end.index = t.loc.end.index, e;
    }
    i(qe, "copyEnd");
    function Tn(e, { loc: { start: t, end: r } }) {
      return e.loc.start.line = t.line, e.loc.start.column = t.column, e.loc.start.index = t.index, e.loc.end.line = r.line, e.loc.end.column = r.column, e.loc.end.index = r.index, e;
    }
    i(Tn, "copyLoc");
    function _(e, t, ...r) {
      return b(R(new e(...r), t), t);
    }
    i(_, "createNode");
    function se(e) {
      return e.text.endsWith("-");
    }
    i(se, "hasTagStartTokenTrimLeft");
    function ue(e) {
      return e.text.startsWith("-");
    }
    i(ue, "hasTagEndTokenTrimRight");
    var h = {};
    Kl(h, { ASSIGNMENT: () => Lr, COLON: () => ot, COMMA: () => cr, COMMENT: () => wt, DECLARATION_START: () => bi, DOT: () => Fn, ELEMENT_END: () => lt, ELEMENT_START: () => kr, ENTITY: () => _i, EOF: () => We, EOF_TOKEN: () => Gr, ERROR: () => Cn, ERROR_TABLE: () => bu, EXPRESSION_END: () => Ve, EXPRESSION_START: () => Ze, FALSE: () => Ri, HTML_COMMENT: () => Pr, INTERPOLATION_END: () => vn, INTERPOLATION_START: () => gn, LBRACE: () => wr, LBRACKET: () => Sn, LPAREN: () => Tt, NULL: () => Pi, NUMBER: () => Mr, OPERATOR: () => qr, PIPE: () => pr, QUESTION_MARK: () => qi, RBRACE: () => at, RBRACKET: () => lr, RPAREN: () => or, SLASH: () => gt, STRING: () => xt, STRING_END: () => At, STRING_START: () => tt, SYMBOL: () => be, TAG_END: () => et, TAG_START: () => ut, TEXT: () => ar, TRUE: () => Ii, WHITESPACE: () => Ni });
    var Ze = "expressionStart";
    var Ve = "expressionEnd";
    var ut = "tagStart";
    var et = "tagEnd";
    var gn = "interpolationStart";
    var vn = "interpolationEnd";
    var tt = "stringStart";
    var At = "stringEnd";
    var bi = "declarationStart";
    var wt = "comment";
    var Ni = "whitespace";
    var Pr = "htmlComment";
    var ar = "text";
    var _i = "entity";
    var be = "symbol";
    var xt = "string";
    var qr = "operator";
    var Ii = "true";
    var Ri = "false";
    var Pi = "null";
    var wr = "[";
    var at = "]";
    var Tt = "(";
    var or = ")";
    var Sn = "{";
    var lr = "}";
    var ot = ":";
    var cr = ",";
    var Fn = ".";
    var pr = "|";
    var qi = "?";
    var Lr = "=";
    var kr = "<";
    var gt = "/";
    var lt = ">";
    var Mr = "number";
    var We = "EOF";
    var Cn = "ERROR";
    var Gr = { type: We, pos: { index: -1, line: -1, pos: -1 }, end: -1, length: 0, source: null, text: "" };
    var bu = { [Ve]: 'expression end "}}"', [Ze]: 'expression start "{{"', [ut]: 'tag start "{%"', [et]: 'tag end "%}"', [gn]: 'interpolation start "#{"', [vn]: 'interpolation end "}"' };
    var Nu = W(re());
    var wi = { name: "genericTwigTag", parse(e) {
      let t = e.tokens, r = t.la(-2), n, s = new Nu.GenericTwigTag(t.la(-1).text);
      for (; (n = t.la(0)) && n.type !== et; )
        try {
          s.parts.push(e.matchExpression());
        } catch (u) {
          if (u.errorType === "UNEXPECTED_TOKEN")
            s.parts.push(new Nu.GenericToken(u.tokenType, u.tokenText)), t.next();
          else
            throw u;
        }
      return t.expect(et), s.trimLeft = se(r), s.trimRight = ue(n), s;
    } };
    var Rw = i((e, t) => {
      for (let r = 0; r < t.length; r++)
        if (e.test(be, t[r]))
          return true;
      return false;
    }, "tagMatchesOneOf");
    var vy = i((e, t = []) => ({ name: "genericTwigMultiTag", parse(r, n) {
      let s = r.tokens, u = s.la(-1);
      t.length === 0 && t.push("end" + e);
      let a = wi.parse(r, n), c = e, p = t[t.length - 1];
      for (; c !== p; ) {
        a.sections.push(r.parse((m, D, d) => D.type === ut && Rw(d, t))), s.next();
        let f = wi.parse(r);
        a.sections.push(f), c = f.tagName;
      }
      return R(a, u), b(a, s.la(0)), a;
    } }), "createMultiTagParser");
    var Sy = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    var _u = Symbol();
    var Ko = Symbol();
    var Iu = Symbol();
    var Ru = Symbol();
    var jr = class {
      constructor(t, r) {
        this.tokens = t, this[_u] = {}, this[Ko] = {}, this[Iu] = {}, this[Ru] = {}, this.options = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreDeclarations: true, decodeEntities: true, preserveSourceLiterally: false, allowUnknownTags: false, multiTags: {} }, r), Object.keys(this.options.multiTags).length > 0 && (this.options.allowUnknownTags = true);
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
        return this[_u][t.text] = t, this;
      }
      addBinaryOperator(t) {
        return this[Ko][t.text] = t, this;
      }
      addTag(t) {
        return this[Iu][t.name] = t, this;
      }
      addTest(t) {
        this[Ru][t.text] = t;
      }
      hasTest(t) {
        return !!this[Ru][t];
      }
      getTest(t) {
        return this[Ru][t];
      }
      isUnary(t) {
        return t.type === qr && !!this[_u][t.text];
      }
      getBinaryOperator(t) {
        return t.type === qr && this[Ko][t.text];
      }
      parse(t = null) {
        let r = this.tokens, n = R(new S.SequenceExpression(), r.la(0));
        for (; !r.test(We); ) {
          let s = r.next();
          if (n || (n = R(new S.SequenceExpression(), s)), t && t(r.la(0).text, s, r))
            return b(n, s), n;
          switch (s.type) {
            case Ze: {
              let u = this.matchExpression(), a = new S.PrintExpressionStatement(u), c = r.expect(Ve);
              R(a, s), b(a, c), b(n, c), a.trimLeft = !!u.trimLeft, a.trimRight = !!u.trimRight, n.add(a);
              break;
            }
            case ut:
              n.add(this.matchTag());
              break;
            case ar: {
              let u = _(S.StringLiteral, s, s.text), a = _(S.PrintTextStatement, s, u);
              n.add(a);
              break;
            }
            case _i: {
              let u = _(S.StringLiteral, s, s.text), a = _(S.PrintTextStatement, s, u);
              n.add(a);
              break;
            }
            case kr:
              n.add(this.matchElement());
              break;
            case bi: {
              let u = this.matchDeclaration();
              this.options.ignoreDeclarations || n.add(u);
              break;
            }
            case wt:
              if (!this.options.ignoreComments) {
                let u = _(S.StringLiteral, s, s.text), a = _(S.TwigComment, s, u);
                n.add(a);
              }
              break;
            case Pr:
              if (!this.options.ignoreHtmlComments) {
                let u = _(S.StringLiteral, s, s.text), a = _(S.HtmlComment, s, u);
                n.add(a);
              }
              break;
          }
        }
        return n;
      }
      matchDeclaration() {
        let t = this.tokens, r = t.la(-1), n = null, s = null;
        (n = t.nextIf(be)) || this.error({ title: "Expected declaration start", pos: r.pos, advice: "After '<!', an unquoted symbol like DOCTYPE is expected" });
        let u = new S.Declaration(n.text);
        for (; s = t.next(); )
          if (s.type === be) {
            let a = _(S.Identifier, s, s.text);
            u.parts.push(a);
          } else if (s.type === tt) {
            let a = t.expect(xt);
            u.parts.push(_(S.StringLiteral, a, a.text)), t.expect(At);
          } else if (s.type === Ze) {
            let a = this.matchExpression();
            u.parts.push(Tn(new S.PrintExpressionStatement(a), a)), t.expect(Ve);
          } else {
            if (s.type === lt)
              break;
            this.error({ title: "Expected string, symbol, or expression", pos: s.pos, advice: "Only strings or symbols can be part of a declaration" });
          }
        return R(u, r), b(u, s), u;
      }
      matchElement() {
        let t = this.tokens, r = t.la(0), n = t.la(-1), s;
        (s = t.nextIf(be)) || this.error({ title: "Expected element start", pos: r.pos, advice: t.lat(0) === gt ? `Unexpected closing "${t.la(1).text}" tag. Seems like your DOM is out of control.` : "Expected an element to start" });
        let u = new S.Element(s.text);
        if (this.matchAttributes(u, t), t.nextIf(gt))
          t.expect(lt), u.selfClosing = true;
        else if (t.expect(lt), Sy[s.text])
          u.selfClosing = true;
        else if (s.text.toLowerCase() == "script") {
          let a = t.next(), c = a;
          for (; !t.test(We); ) {
            if (a.type === kr && t.lat(0) === gt) {
              let O = t.la(1);
              if (O.type === be && O.text === s.text) {
                t.next(), t.next(), t.expect(lt);
                break;
              }
            }
            a = t.next();
          }
          t.test(We) && this.error({ title: "Expected <\/script>, but not found", pos: r.pos, advice: "Script tag must have an end tag" });
          let { pos: { index: p, line: f, column: m } } = c, D = a.end - 1, d = { pos: { index: p, line: f, column: m }, end: D }, x = _(S.StringLiteral, d, t.input.input.input.slice(p, D)), F = _(S.PrintTextStatement, d, x);
          u.children.push(F);
        } else
          u.children = this.parse(function(a, c, p) {
            if (c.type === kr && p.lat(0) === gt) {
              let f = p.la(1);
              if (f.type === be && f.text === s.text)
                return p.next(), p.next(), p.expect(lt), true;
            }
            return false;
          }).expressions;
        return R(u, n), b(u, t.la(-1)), Vo(u, "elementNameLoc", r), u;
      }
      matchAttributes(t, r) {
        for (; r.lat(0) !== gt && r.lat(0) !== lt; ) {
          let n = r.nextIf(be);
          if (n) {
            let s = new S.Identifier(n.text);
            if (R(s, n), b(s, n), r.nextIf(Lr)) {
              let u = r.expect(tt), a = true, c = [], p;
              for (; !r.test(At); )
                if (a && (p = r.nextIf(xt)))
                  c[c.length] = _(S.StringLiteral, p, p.text), a = false;
                else if (p = r.nextIf(Ze))
                  c[c.length] = this.matchExpression(), r.expect(Ve), a = true;
                else if (p = r.nextIf(ut))
                  c[c.length] = this.matchTag(), a = true;
                else
                  break;
              if (r.expect(At), !c.length) {
                let D = _(S.StringLiteral, u, "");
                c.push(D);
              }
              let f = c[0];
              for (let D = 1, d = c.length; D < d; D++) {
                let { line: x, column: F } = f.loc.start;
                f = new S.BinaryConcatExpression(f, c[D]), f.loc.start.line = x, f.loc.start.column = F, qe(f, f.right);
              }
              c.length > 1 && (f.wasImplicitConcatenation = true);
              let m = new S.Attribute(s, f);
              Ye(m, s), qe(m, f), t.attributes.push(m);
            } else
              t.attributes.push(Tn(new S.Attribute(s), s));
          } else
            r.nextIf(Ze) ? (t.attributes.push(this.matchExpression()), r.expect(Ve)) : this.error({ title: "Invalid token", pos: r.la(0).pos, advice: "A tag must consist of attributes or expressions. Twig Tags are not allowed." });
        }
      }
      error(t, r = {}) {
        this.tokens.error(t.title, t.pos, t.advice, 1, r);
      }
      getGenericParserFor(t) {
        return this.options.multiTags[t] ? vy(t, this.options.multiTags[t]) : wi;
      }
      matchTag() {
        let t = this.tokens, r = t.la(-1), n = t.expect(be), s = this[Iu][n.text], u = false;
        s || (this.options.allowUnknownTags ? (s = this.getGenericParserFor(n.text), u = true) : t.error(`Unknown tag "${n.text}"`, n.pos, `Expected a known tag such as
- ${Object.getOwnPropertyNames(this[Iu]).join(`
- `)}`, n.length));
        let a = s.parse(this, n), c = t.la(-1);
        return u || (a.trimLeft = r.text.endsWith("-"), a.trimRight = c.text.startsWith("-")), R(a, r), b(a, c), Vo(a, "tagNameLoc", n), a;
      }
      matchExpression(t = 0) {
        let r = this.tokens, n = r.la(0), s, u, a = false;
        r.la(-1).type === Ze && r.la(-1).text.endsWith("-") && (a = true);
        let c = this.getPrimary();
        for (; (s = r.la(0)) && s.type !== We && (u = this.getBinaryOperator(s)) && u.precedence >= t; ) {
          let m = r.next();
          if (u.parse)
            c = u.parse(this, m, c);
          else {
            let D = this.matchExpression(u.associativity === $ ? u.precedence + 1 : u.precedence);
            c = u.createNode(s, c, D);
          }
          s = r.la(0);
        }
        var p = c;
        t === 0 && (b(c, r.la(-1)), p = this.matchConditionalExpression(c), s = r.la(0)), s.type === Ve && s.text.startsWith("-") && (p.trimRight = true), a && (p.trimLeft = a);
        let f = r.la(-1);
        return R(p, n), b(p, f), p;
      }
      getPrimary() {
        let t = this.tokens, r = t.la(0);
        if (this.isUnary(r)) {
          let n = this[_u][r.text];
          t.next();
          let s = this.matchExpression(n.precedence);
          return this.matchPostfixExpression(n.createNode(r, s));
        } else if (t.test(Tt)) {
          t.next();
          let n = this.matchExpression();
          return t.expect(or), this.matchPostfixExpression(n);
        }
        return this.matchPrimaryExpression();
      }
      matchPrimaryExpression() {
        let t = this.tokens, r = t.la(0), n;
        switch (r.type) {
          case Pi:
            n = _(S.NullLiteral, t.next());
            break;
          case Ri:
            n = _(S.BooleanLiteral, t.next(), false);
            break;
          case Ii:
            n = _(S.BooleanLiteral, t.next(), true);
            break;
          case be:
            t.next(), t.test(Tt) ? (n = new S.CallExpression(_(S.Identifier, r, r.text), this.matchArguments()), Ye(n, n.callee), b(n, t.la(-1))) : n = _(S.Identifier, r, r.text);
            break;
          case Mr:
            n = _(S.NumericLiteral, r, Number(t.next()));
            break;
          case tt:
            n = this.matchStringExpression();
            break;
          default:
            r.type === wr ? n = this.matchArray() : r.type === Sn ? n = this.matchMap() : this.error({ title: 'Unexpected token "' + r.type + '" of value "' + r.text + '"', pos: r.pos }, { errorType: "UNEXPECTED_TOKEN", tokenText: r.text, tokenType: r.type });
            break;
        }
        return this.matchPostfixExpression(n);
      }
      matchStringExpression() {
        let t = true, r, n = this.tokens, s = [], u = n.expect(tt);
        for (; !n.test(At); )
          if (t && (r = n.nextIf(xt)))
            s[s.length] = _(S.StringLiteral, r, r.text), t = false;
          else if (r = n.nextIf(gn))
            s[s.length] = this.matchExpression(), n.expect(vn), t = true;
          else
            break;
        let a = n.expect(At);
        if (!s.length)
          return b(_(S.StringLiteral, u, ""), a);
        let c = s[0];
        for (let p = 1, f = s.length; p < f; p++) {
          let { line: m, column: D } = c.loc.start;
          c = new S.BinaryConcatExpression(c, s[p]), c.loc.start.line = m, c.loc.start.column = D, qe(c, c.right);
        }
        return s.length > 1 && (c.wasImplicitConcatenation = true), R(c, u), b(c, a), c;
      }
      matchConditionalExpression(t) {
        let r = this.tokens, n = t, s, u;
        for (; r.nextIf(qi); ) {
          r.nextIf(ot) ? (s = null, u = this.matchExpression()) : (s = this.matchExpression(), r.nextIf(ot) ? u = this.matchExpression() : u = null);
          let { line: a, column: c } = n.loc.start;
          n = new S.ConditionalExpression(n, s, u), n.loc.start = { line: a, column: c }, qe(n, u || s);
        }
        return n;
      }
      matchArray() {
        let t = this.tokens, r = new S.ArrayExpression(), n = t.expect(wr);
        for (R(r, n); !t.test(at) && !t.test(We) && (r.elements.push(this.matchExpression()), !(!t.test(at) && (t.expect(cr), t.test(at)))); )
          ;
        return b(r, t.expect(at)), r;
      }
      matchMap() {
        let t = this.tokens, r, n = new S.ObjectExpression(), s = t.expect(Sn);
        for (R(n, s); !t.test(lr) && !t.test(We); ) {
          let u = false, a, c;
          t.test(tt) ? (a = this.matchStringExpression(), S.is(a, "StringLiteral") || (u = true)) : (r = t.nextIf(be)) ? a = _(S.Identifier, r, r.text) : (r = t.nextIf(Mr)) ? a = _(S.NumericLiteral, r, Number(r.text)) : t.test(Tt) ? (a = this.matchExpression(), u = true) : this.error({ title: "Invalid map key", pos: t.la(0).pos, advice: "Key must be a string, symbol or a number but was " + t.next() }), t.expect(ot), c = this.matchExpression();
          let p = new S.ObjectProperty(a, c, u);
          if (Ye(p, a), qe(p, c), n.properties.push(p), !t.test(lr) && (t.expect(cr), t.test(lr)))
            break;
        }
        return b(n, t.expect(lr)), n;
      }
      matchPostfixExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(We); )
          if (r.test(Fn) || r.test(wr))
            n = this.matchSubscriptExpression(n);
          else if (r.test(pr))
            r.next(), n = this.matchFilterExpression(n);
          else
            break;
        return n;
      }
      matchSubscriptExpression(t) {
        let r = this.tokens;
        if (r.next().type === Fn) {
          let s = r.next(), u = false, a;
          s.type === be ? a = _(S.Identifier, s, s.text) : s.type === Mr ? (a = _(S.NumericLiteral, s, Number(s.text)), u = true) : this.error({ title: "Invalid token", pos: s.pos, advice: "Expected number or symbol, found " + s + " instead" });
          let c = new S.MemberExpression(t, a, u);
          if (Ye(c, t), qe(c, a), r.test(Tt)) {
            let p = new S.CallExpression(c, this.matchArguments());
            return Ye(p, c), b(p, r.la(-1)), p;
          }
          return c;
        } else {
          let s, u;
          if (r.test(ot) ? (r.next(), u = null) : (s = this.matchExpression(), r.test(ot) && (u = s, s = null, r.next())), s)
            return b(Ye(new S.MemberExpression(t, s, true), t), r.expect(at));
          {
            let a = new S.SliceExpression(t, u, r.test(at) ? null : this.matchExpression());
            return Ye(a, t), b(a, r.expect(at)), a;
          }
        }
      }
      matchFilterExpression(t) {
        let r = this.tokens, n = t;
        for (; !r.test(We); ) {
          let u = r.expect(be), a = _(S.Identifier, u, u.text), c;
          var s = false;
          r.test(Tt) ? c = this.matchArguments() : r.test(ot) ? (c = this.matchDjangoFilterArguments(), s = true) : c = [];
          let p = new S.FilterExpression(n, a, c);
          if (Ye(p, n), p.arguments.length ? qe(p, p.arguments[p.arguments.length - 1]) : qe(p, n), n = p, n.isDjango = s, !r.test(pr) || r.test(We))
            break;
          r.next();
        }
        return n;
      }
      matchArguments() {
        let t = this.tokens, r = [];
        for (t.expect(Tt); !t.test(or) && !t.test(We); ) {
          if (t.test(be) && t.lat(1) === Lr) {
            let n = t.next();
            t.next();
            let s = this.matchExpression(), u = new S.NamedArgumentExpression(_(S.Identifier, n, n.text), s);
            qe(u, s), r.push(u);
          } else
            r.push(this.matchExpression());
          if (!t.test(cr))
            return t.expect(or), r;
          t.expect(cr);
        }
        return t.expect(or), r;
      }
      matchDjangoFilterArguments() {
        let t = this.tokens, r = [];
        for (t.expect(ot); !t.test(pr) && !t.test(Ve) && !t.test(et); )
          r.push(this.matchExpression());
        return t.expect([pr, Ve, et]), t.index--, r;
      }
    };
    i(jr, "Parser");
    var Zo = W(vA());
    var bA = W(OA());
    var Lt = Symbol();
    var Qo = Symbol();
    var Ur = class {
      constructor(t, r) {
        this.input = t, this.index = 0;
        let n = Object.assign({}, { ignoreComments: true, ignoreHtmlComments: true, ignoreWhitespace: true, applyWhitespaceTrimming: true }, r);
        if (this[Lt] = p6(t, n), this[Qo] = this[Lt].length, this[Lt].length && this[Lt][this[Lt].length - 1].type === Cn) {
          let s = this[Lt][this[Lt].length - 1];
          this.error(s.message, s.pos, s.advice, s.endPos.index - s.pos.index || 1);
        }
      }
      la(t) {
        var r = this.index + t;
        return r < this[Qo] ? this[Lt][r] : Gr;
      }
      lat(t) {
        return this.la(t).type;
      }
      test(t, r) {
        let n = this.la(0);
        return n.type === t && (!r || n.text === r);
      }
      next() {
        if (this.index === this[Qo])
          return Gr;
        let t = this[Lt][this.index];
        return this.index++, t;
      }
      nextIf(t, r) {
        return this.test(t, r) ? this.next() : false;
      }
      expect(t, r = null, n = null) {
        let s = this.la(0);
        if (Array.isArray(t) || (t = [t]), t.includes(s.type) && (!r || s.text === r))
          return this.next();
        var u = t[0], a = bu[u] || u || r;
        a != r && a + "" + r;
        var c = s.pos;
        c.line == -1 && n && (c = n.pos), this.error("Invalid Token", c, `Expected ${a} but found ${bu[s.type] || s.type || s.text} instead.`, s.length);
      }
      error(t, r, n, s = 1, u = {}) {
        let a = `ERROR: ${t}. `;
        n && (a += n);
        let c = new Error(a + " 	 ");
        throw Object.assign(c, u), c.loc = { start: { line: Math.max(1, r.line || 0), column: Math.max(0, r.column || 0) + 1 }, end: { line: Math.max(1, r.line || 0) + 1, column: 1 } }, c;
      }
    };
    i(Ur, "TokenStream");
    function p6(e, t) {
      let r, n = [], s = false, u = false;
      for (; (r = e.next()) !== Gr; ) {
        let a = u;
        if (u = false, s)
          switch (r.type) {
            case Ze:
            case ut:
              r.text[r.text.length - 1] === "-" && (n[n.length - 1].text = (0, Zo.default)(n[n.length - 1].text));
              break;
            case Ve:
            case et:
              r.text[0] === "-" && (u = true);
              break;
            case wt:
              n[n.length - 1].type === ar && (n[n.length - 1].text = (0, Zo.default)(n.text)), u = true;
              break;
          }
        if (a && (r.type === ar || r.type === xt) && (r.text = (0, bA.default)(r.text)), (r.type !== wt || !t.ignoreComments) && (r.type !== Ni || !t.ignoreWhitespace) && (r.type !== Pr || !t.ignoreHtmlComments) && (n[n.length] = r), s = t.applyWhitespaceTrimming, r.type === Cn)
          return n;
      }
      return n;
    }
    i(p6, "getAllTokens");
    var we = Symbol();
    var bn = class {
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
        return r < this.length ? this.input.charAt(r) : we;
      }
      lac(t) {
        var r = this.index + t;
        return r < this.length ? this.input.charCodeAt(r) : we;
      }
      next() {
        if (this.index === this.length)
          return we;
        var t = this.input.charAt(this.index);
        return this.index++, this.position.column++, t === `
` && (this.position.line += 1, this.position.column = 0), t;
      }
      match(t) {
        let r = this.mark();
        for (let n = 0, s = t.length; n < s; n++) {
          let u = this.next();
          if (u !== t.charAt(n) || u === we)
            return this.rewind(r), false;
        }
        return true;
      }
    };
    i(bn, "CharStream");
    var ae = { TEXT: "TEXT", EXPRESSION: "EXPRESSION", TAG: "TAG", INTERPOLATION: "INTERPOLATION", STRING_SINGLE: "STRING_SINGLE", STRING_DOUBLE: "STRING_DOUBLE", ELEMENT: "ELEMENT", ATTRIBUTE_VALUE: "ATTRIBUTE_VALUE", DECLARATION: "DECLARATION" };
    var Nn = Symbol();
    var Lu = Symbol();
    var f6 = Symbol();
    var NA = { "[": wr, "]": at, "(": Tt, ")": or, "{": Sn, "}": lr, ":": ot, ".": Fn, "|": pr, ",": cr, "?": qi, "=": Lr, "/": gt };
    var Vr = class {
      constructor(t, { preserveSourceLiterally: r = false } = {}) {
        this.input = t, this[Nn] = [ae.TEXT], this[Lu] = [], this[f6] = null, this.options = { preserveSourceLiterally: r === true };
      }
      applyExtension(t) {
        t.unaryOperators && this.addOperators(...t.unaryOperators.map((r) => r.text)), t.binaryOperators && this.addOperators(...t.binaryOperators.map((r) => r.text));
      }
      reset() {
        this.input.reset(), this[Nn] = [ae.TEXT];
      }
      get source() {
        return this.input.source;
      }
      addOperators(...t) {
        this[Lu].push(...t), this[Lu].sort((r, n) => r.length > n.length ? -1 : 1);
      }
      get state() {
        return this[Nn][this[Nn].length - 1];
      }
      pushState(t) {
        this[Nn].push(t);
      }
      popState() {
        this[Nn].length--;
      }
      createToken(t, r) {
        let n = this.input, s = n.mark(), u = s.index;
        return { type: t, pos: r, endPos: s, end: u, length: u - r.index, source: n.input, text: n.input.substr(r.index, u - r.index), toString: function() {
          return this.text;
        } };
      }
      next() {
        let t = this.input, r, n;
        for (; (n = t.la(0)) !== we; ) {
          if (r = t.mark(), this.state !== ae.TEXT && this.state !== ae.STRING_DOUBLE && this.state !== ae.STRING_SINGLE && this.state !== ae.ATTRIBUTE_VALUE && el(n)) {
            for (t.next(); (n = t.la(0)) !== we && el(n); )
              t.next();
            return this.createToken(Ni, r);
          }
          if (n === "{" && t.la(1) === "#")
            for (t.next(), t.next(), t.la(0) === "-" && t.next(); (n = t.la(0)) !== we; ) {
              if (n === "#" && t.la(1) === "}" || n === "-" && t.la(1) === "#" && t.la(2) === "}")
                return n === "-" && t.next(), t.next(), t.next(), this.createToken(wt, r);
              t.next();
            }
          if (this.state === ae.TEXT) {
            let s;
            if (n === "<") {
              if (t.la(1) === "{" || Yr(t.lac(1)) || t.la(1) === "/")
                return t.next(), this.pushState(ae.ELEMENT), this.createToken(kr, r);
              if (t.la(1) === "!" && t.la(2) === "-" && t.la(3) === "-") {
                for (t.next(), t.next(), t.next(), t.next(); (n = t.la(0)) !== we; ) {
                  if (n === "-" && t.la(1) === "-") {
                    t.next(), t.next(), !(n = t.next()) === ">" && this.error("Unexpected end for HTML comment", t.mark(), `Expected comment to end with '>' but found '${n}' instead.`);
                    break;
                  }
                  t.next();
                }
                return this.createToken(Pr, r);
              } else
                return t.la(1) === "!" && (Yr(t.lac(2)) || el(t.la(2))) ? (t.next(), t.next(), this.pushState(ae.DECLARATION), this.createToken(bi, r)) : this.matchText(r);
            } else
              return n === "{" ? this.matchExpressionToken(r) : n === "&" && (s = this.matchEntity(r)) ? s : this.matchText(r);
          } else {
            if (this.state === ae.EXPRESSION)
              return n === "}" && t.la(1) === "}" || n === "-" && t.la(1) === "}" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(Ve, r)) : this.matchExpression(r);
            if (this.state === ae.TAG)
              return n === "%" && t.la(1) === "}" || n === "-" && t.la(1) === "%" && t.la(2) === "}" ? (n === "-" && t.next(), t.next(), t.next(), this.popState(), this.createToken(et, r)) : this.matchExpression(r);
            if (this.state === ae.STRING_SINGLE || this.state === ae.STRING_DOUBLE)
              return this.matchString(r, true);
            if (this.state === ae.INTERPOLATION)
              return n === "}" ? (t.next(), this.popState(), this.createToken(vn, r)) : this.matchExpression(r);
            if (this.state === ae.ELEMENT)
              switch (n) {
                case "/":
                  return t.next(), this.createToken(gt, r);
                case "{":
                  return this.matchExpressionToken(r);
                case ">":
                  return t.next(), this.popState(), this.createToken(lt, r);
                case '"':
                  return t.next(), this.pushState(ae.ATTRIBUTE_VALUE), this.createToken(tt, r);
                case "=":
                  return t.next(), this.createToken(Lr, r);
                default:
                  return this.matchSymbol(r);
              }
            else {
              if (this.state === ae.ATTRIBUTE_VALUE)
                return n === '"' ? (t.next(), this.popState(), this.createToken(At, r)) : this.matchAttributeValue(r);
              if (this.state === ae.DECLARATION)
                switch (n) {
                  case ">":
                    return t.next(), this.popState(), this.createToken(lt, r);
                  case '"':
                    return t.next(), this.pushState(ae.STRING_DOUBLE), this.createToken(tt, r);
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
        return Gr;
      }
      matchExpressionToken(t) {
        let r = this.input;
        switch (r.la(1)) {
          case "{":
            return r.next(), r.next(), this.pushState(ae.EXPRESSION), r.la(0) === "-" && r.next(), this.createToken(Ze, t);
          case "%":
            return r.next(), r.next(), this.pushState(ae.TAG), r.la(0) === "-" && r.next(), this.createToken(ut, t);
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
            return this.pushState(ae.STRING_SINGLE), r.next(), this.createToken(tt, t);
          case '"':
            return this.pushState(ae.STRING_DOUBLE), r.next(), this.createToken(tt, t);
          default: {
            if (Ft(r.lac(0)))
              return r.next(), this.matchNumber(t);
            if (n === "t" && r.match("true") || n === "T" && r.match("TRUE"))
              return this.createToken(Ii, t);
            if (n === "f" && r.match("false") || n === "F" && r.match("FALSE"))
              return this.createToken(Ri, t);
            if (n === "n" && (r.match("null") || r.match("none")) || n === "N" && (r.match("NULL") || r.match("NONE")))
              return this.createToken(Pi, t);
            let { longestMatchingOperator: s, longestMatchEndPos: u } = this.findLongestMatchingOperator(), a = r.lac(0);
            if (a === 95 || Yr(a) || Ft(a)) {
              r.next();
              let c = this.matchSymbol(t);
              return c.text.length <= s.length ? (r.rewind(u), this.createToken(qr, t)) : c;
            } else
              return s ? (r.rewind(u), this.createToken(qr, t)) : NA.hasOwnProperty(n) ? (r.next(), this.createToken(NA[n], t)) : n === "\xA0" ? this.error("Unsupported token: Non-breaking space", t) : this.error(`Unknown token ${n}`, t);
          }
        }
      }
      findLongestMatchingOperator() {
        let t = this.input, r = t.mark(), n = "", s = null;
        for (let u = 0, a = this[Lu], c = a.length; u < c; u++) {
          let p = a[u];
          if (p.length > n.length && t.match(p)) {
            let f = t.lac(0);
            (p.indexOf(" ") === -1 || !(Yr(f) || Ft(f))) && (n = p, s = t.mark()), t.rewind(r);
          }
        }
        return t.rewind(r), { longestMatchingOperator: n, longestMatchEndPos: s };
      }
      error(t, r, n = "") {
        let s = this.createToken(Cn, r);
        return s.message = t, s.advice = n, s;
      }
      matchEntity(t) {
        let r = this.input;
        if (r.next(), r.la(0) === "#")
          if (r.next(), r.la(0) === "x") {
            r.next();
            let n = r.la(0);
            for (; "a" <= n && n <= "f" || "A" <= n && n <= "F" || Ft(r.lac(0)); )
              r.next(), n = r.la(0);
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else if (Ft(r.lac(0))) {
            do
              r.next();
            while (Ft(r.lac(0)));
            if (r.la(0) === ";")
              r.next();
            else
              return r.rewind(t), null;
          } else
            return r.rewind(t), null;
        else {
          for (; Yr(r.lac(0)); )
            r.next();
          if (r.la(0) === ";")
            r.next();
          else
            return r.rewind(t), null;
        }
        return this.createToken(_i, t);
      }
      matchSymbol(t) {
        let r = this.input, n = this.state === ae.ELEMENT, s;
        for (; (s = r.lac(0)) && (s === 95 || Yr(s) || Ft(s) || n && (s === 45 || s === 58)); )
          r.next();
        var u = r.mark();
        return t.index === u.index ? this.error("Expected an Identifier", t, n ? `Expected a valid attribute name, but instead found "${r.la(0)}", which is not part of a valid attribute name.` : `Expected letter, digit or underscore but found ${r.la(0)} instead.`) : this.createToken(be, t);
      }
      matchString(t, r = true) {
        let n = this.input, s = this.state === ae.STRING_SINGLE ? "'" : '"', u;
        if (r && n.la(0) === "#" && n.la(1) === "{")
          return this.pushState(ae.INTERPOLATION), n.next(), n.next(), this.createToken(gn, t);
        if (n.la(0) === s)
          return n.next(), this.popState(), this.createToken(At, t);
        for (; (u = n.la(0)) !== s && u !== we; )
          if (u === "\\" && n.la(1) === s)
            n.next(), n.next();
          else {
            if (r && u === "#" && n.la(1) === "{")
              break;
            n.next();
          }
        var a = this.createToken(xt, t);
        return this.options.preserveSourceLiterally || (a.text = a.text.replace(new RegExp("(?:\\\\)(" + s + ")", "g"), "$1")), a;
      }
      matchAttributeValue(t) {
        let r = this.input, n = this.state === ae.STRING_SINGLE ? "'" : '"', s;
        if (r.la(0) === "{")
          return this.matchExpressionToken(t);
        for (; (s = r.la(0)) !== n && s !== we; )
          if (s === "\\" && r.la(1) === n)
            r.next(), r.next();
          else {
            if (s === "{")
              break;
            if (s === n)
              break;
            r.next();
          }
        var u = this.createToken(xt, t);
        return this.options.preserveSourceLiterally || (u.text = u.text.replace(new RegExp("(?:\\\\)(" + n + ")", "g"), "$1")), u;
      }
      matchNumber(t) {
        let r = this.input, n;
        for (; (n = r.lac(0)) !== we && Ft(n); )
          r.next();
        if (r.la(0) === "." && Ft(r.lac(1)))
          for (r.next(); (n = r.lac(0)) !== we && Ft(n); )
            r.next();
        return this.createToken(Mr, t);
      }
      matchText(t) {
        let r = this.input, n;
        for (; (n = r.la(0)) && n !== we; ) {
          if (n === "{") {
            let s = r.la(1);
            if (s === "{" || s === "#" || s === "%")
              break;
          } else if (n === "<") {
            let s = r.la(1);
            if (s === "/" || s === "!" || Yr(r.lac(1)))
              break;
            if (r.la(1) === "{") {
              let u = r.la(1);
              if (u === "{" || u === "#" || u === "%")
                break;
            }
          }
          r.next();
        }
        return this.createToken(ar, t);
      }
      matchComment(t) {
        let r = this.input, n;
        for (; (n = r.next()) !== we; )
          if (n === "#" && r.la(0) === "}") {
            r.next();
            break;
          }
        return this.createToken(wt, t);
      }
    };
    i(Vr, "Lexer");
    function el(e) {
      return e === `
` || e === " " || e === "	";
    }
    i(el, "isWhitespace");
    function Yr(e) {
      return 65 <= e && e <= 90 || 97 <= e && e <= 122;
    }
    i(Yr, "isAlpha");
    function Ft(e) {
      return 48 <= e && e <= 57;
    }
    i(Ft, "isDigit");
    var tl = [];
    var Mi = [];
    var _n = [];
    var rl = ul("not", "UnaryNotExpression", 50);
    var _A = ul("-", "UnaryNeqExpression", 500);
    var IA = ul("+", "UnaryPosExpression", 500);
    var RA = fe({ text: "or", type: "BinaryOrExpression", precedence: 10, associativity: $ });
    var PA = fe({ text: "and", type: "BinaryAndExpression", precedence: 15, associativity: $ });
    var qA = fe({ text: "b-or", type: "BitwiseOrExpression", precedence: 16, associativity: $ });
    var wA = fe({ text: "b-xor", type: "BitwiseXOrExpression", precedence: 17, associativity: $ });
    var LA = fe({ text: "b-and", type: "BitwiseAndExpression", precedence: 18, associativity: $ });
    var kA = fe({ text: "==", type: "BinaryEqualsExpression", precedence: 20, associativity: $ });
    var MA = fe({ text: "!=", type: "BinaryNotEqualsExpression", precedence: 20, associativity: $ });
    var GA = fe({ text: "<", type: "BinaryLessThanExpression", precedence: 20, associativity: $ });
    var jA = fe({ text: ">", type: "BinaryGreaterThanExpression", precedence: 20, associativity: $ });
    var UA = fe({ text: "<=", type: "BinaryLessThanOrEqualExpression", precedence: 20, associativity: $ });
    var YA = fe({ text: ">=", type: "BinaryGreaterThanOrEqualExpression", precedence: 20, associativity: $ });
    var VA = fe({ text: "not in", type: "BinaryNotInExpression", precedence: 20, associativity: $ });
    var KA = fe({ text: "in", type: "BinaryInExpression", precedence: 20, associativity: $ });
    var HA = fe({ text: "matches", type: "BinaryMatchesExpression", precedence: 20, associativity: $ });
    var WA = fe({ text: "starts with", type: "BinaryStartsWithExpression", precedence: 20, associativity: $ });
    var XA = fe({ text: "ends with", type: "BinaryEndsWithExpression", precedence: 20, associativity: $ });
    var $A = fe({ text: "..", type: "BinaryRangeExpression", precedence: 25, associativity: $ });
    var JA = fe({ text: "+", type: "BinaryAddExpression", precedence: 30, associativity: $ });
    var UH = fe({ text: "-", type: "BinarySubExpression", precedence: 30, associativity: $ });
    Mi.push({ text: "~", precedence: 40, associativity: $, createNode(e, t, r) {
      let n = new Se.BinaryConcatExpression(t, r);
      return Ye(n, t), qe(n, r), n;
    } });
    var zA = fe({ text: "*", type: "BinaryMulExpression", precedence: 60, associativity: $ });
    var QA = fe({ text: "/", type: "BinaryDivExpression", precedence: 60, associativity: $ });
    var ZA = fe({ text: "//", type: "BinaryFloorDivExpression", precedence: 60, associativity: $ });
    var ex = fe({ text: "%", type: "BinaryModExpression", precedence: 60, associativity: $ });
    Mi.push({ text: "is", precedence: 100, associativity: $, parse(e, t, r) {
      let n = e.tokens, s = false;
      n.nextIf(h.OPERATOR, "not") && (s = true);
      let u = d6(e), a = null;
      n.test(h.LPAREN) && (a = e.matchArguments());
      let c = u.createNode(r, a);
      return R(c, t), b(c, n.la(-1)), s ? Tn(new rl(c), c) : c;
    } });
    function d6(e) {
      let t = e.tokens, r = t.la(0);
      r.type !== h.NULL ? t.expect(h.SYMBOL) : t.next();
      let n = r.text;
      if (!e.hasTest(n)) {
        let s = t.expect(h.SYMBOL);
        n += " " + s.text, e.hasTest(n) || e.error({ title: `Unknown test "${n}"`, pos: r.pos });
      }
      return e.getTest(n);
    }
    i(d6, "getTest");
    var tx = fe({ text: "**", type: "BinaryPowerExpression", precedence: 200, associativity: $ });
    var rx = fe({ text: "??", type: "BinaryNullCoalesceExpression", precedence: 300, associativity: $ });
    var nx = kt("even", "TestEvenExpression");
    var ix = kt("odd", "TestOddExpression");
    var sx = kt("defined", "TestDefinedExpression");
    var nl = kt("same as", "TestSameAsExpression");
    _n.push({ text: "sameas", createNode(e, t) {
      return new nl(e, t);
    } });
    var il = kt("null", "TestNullExpression");
    _n.push({ text: "none", createNode(e, t) {
      return new il(e, t);
    } });
    var sl = kt("divisible by", "TestDivisibleByExpression");
    _n.push({ text: "divisibleby", createNode(e, t) {
      return new sl(e, t);
    } });
    var ux = kt("constant", "TestConstantExpression");
    var ax = kt("empty", "TestEmptyExpression");
    var ox = kt("iterable", "TestIterableExpression");
    function kt(e, t) {
      let r = i(class extends Se.Node {
        constructor(n, s) {
          super(), this.expression = n, this.arguments = s;
        }
      }, "TestExpression");
      return (0, Se.type)(r, t), (0, Se.alias)(r, "Expression", "TestExpression"), (0, Se.visitor)(r, "expression", "arguments"), _n.push({ text: e, createNode(n, s) {
        return new r(n, s);
      } }), r;
    }
    i(kt, "createTest");
    function fe(e) {
      let { text: t, precedence: r, associativity: n } = e, s = i(class extends Se.BinaryExpression {
        constructor(a, c) {
          super(t, a, c);
        }
      }, "BinarySubclass");
      (0, Se.type)(s, e.type), (0, Se.alias)(s, "BinaryExpression", "Binary", "Expression"), (0, Se.visitor)(s, "left", "right");
      let u = { text: t, precedence: r, associativity: n };
      return e.parse ? u.parse = e.parse : e.createNode ? u.createNode = e.createNode : u.createNode = (a, c, p) => new s(c, p), Mi.push(u), s;
    }
    i(fe, "createBinaryOperatorNode");
    function ul(e, t, r) {
      let n = i(class extends Se.UnaryExpression {
        constructor(s) {
          super(e, s);
        }
      }, "UnarySubclass");
      return (0, Se.type)(n, t), (0, Se.alias)(n, "Expression", "UnaryLike"), (0, Se.visitor)(n, "argument"), tl.push({ text: e, precedence: r, createNode(s, u) {
        let a = new n(u);
        return R(a, s), qe(a, u), a;
      } }), n;
    }
    i(ul, "createUnaryOperator");
    var v = W(re());
    var Mt = class extends v.Node {
      constructor(t, r) {
        super(), this.escapeType = t, this.expressions = r;
      }
    };
    i(Mt, "AutoescapeBlock");
    (0, v.type)(Mt, "AutoescapeBlock");
    (0, v.alias)(Mt, "Block", "Escape");
    (0, v.visitor)(Mt, "expressions");
    var Ct = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.body = r;
      }
    };
    i(Ct, "BlockStatement");
    (0, v.type)(Ct, "BlockStatement");
    (0, v.alias)(Ct, "Statement", "Scope", "RootScope");
    (0, v.visitor)(Ct, "body");
    var Kr = class extends v.Node {
      constructor(t, r = []) {
        super(), this.callee = t, this.arguments = r;
      }
    };
    i(Kr, "BlockCallExpression");
    (0, v.type)(Kr, "BlockCallExpression");
    (0, v.alias)(Kr, "Expression", "FunctionInvocation");
    (0, v.visitor)(Kr, "arguments");
    var Gt = class extends v.Node {
      constructor(t, r, n, s, u, a) {
        super(), this.name = t, this.source = r, this.key = n, this.argument = s, this.async = u, this.delayBy = a, this.errorVariableName = null, this.body = null, this.otherwise = null;
      }
    };
    i(Gt, "MountStatement");
    (0, v.type)(Gt, "MountStatement");
    (0, v.alias)(Gt, "Statement", "Scope");
    (0, v.visitor)(Gt, "name", "source", "key", "argument", "body", "otherwise");
    var jt = class extends v.Node {
      constructor(t) {
        super(), this.value = t;
      }
    };
    i(jt, "DoStatement");
    (0, v.type)(jt, "DoStatement");
    (0, v.alias)(jt, "Statement");
    (0, v.visitor)(jt, "value");
    var Ut = class extends v.Node {
      constructor(t) {
        super(), this.parent = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false, this.blocks = null;
      }
    };
    i(Ut, "EmbedStatement");
    (0, v.type)(Ut, "EmbedStatement");
    (0, v.alias)(Ut, "Statement", "Include");
    (0, v.visitor)(Ut, "argument", "blocks");
    var Yt = class extends v.Node {
      constructor(t) {
        super(), this.parentName = t;
      }
    };
    i(Yt, "ExtendsStatement");
    (0, v.type)(Yt, "ExtendsStatement");
    (0, v.alias)(Yt, "Statement", "Include");
    (0, v.visitor)(Yt, "parentName");
    var Vt = class extends v.Node {
      constructor(t, r) {
        super(), this.filterExpression = t, this.body = r;
      }
    };
    i(Vt, "FilterBlockStatement");
    (0, v.type)(Vt, "FilterBlockStatement");
    (0, v.alias)(Vt, "Statement", "Block");
    (0, v.visitor)(Vt, "filterExpression", "body");
    var fr = class extends v.Node {
      constructor() {
        super();
      }
    };
    i(fr, "FlushStatement");
    (0, v.type)(fr, "FlushStatement");
    (0, v.alias)(fr, "Statement");
    var Kt = class extends v.Node {
      constructor(t = null, r = null, n = null, s = null, u = null, a = null) {
        super(), this.keyTarget = t, this.valueTarget = r, this.sequence = n, this.condition = s, this.body = u, this.otherwise = a;
      }
    };
    i(Kt, "ForStatement");
    (0, v.type)(Kt, "ForStatement");
    (0, v.alias)(Kt, "Statement", "Scope", "Loop");
    (0, v.visitor)(Kt, "keyTarget", "valueTarget", "sequence", "condition", "body", "otherwise");
    var ct = class extends v.Node {
      constructor(t, r) {
        super(), this.key = t, this.alias = r;
      }
    };
    i(ct, "ImportDeclaration");
    (0, v.type)(ct, "ImportDeclaration");
    (0, v.alias)(ct, "VariableDeclaration");
    (0, v.visitor)(ct, "key", "value");
    var Ht = class extends v.Node {
      constructor(t, r) {
        super(), this.source = t, this.imports = r;
      }
    };
    i(Ht, "FromStatement");
    (0, v.type)(Ht, "FromStatement");
    (0, v.alias)(Ht, "Statement");
    (0, v.visitor)(Ht, "source", "imports");
    var pt = class extends v.Node {
      constructor(t, r = null, n = null) {
        super(), this.test = t, this.consequent = r, this.alternate = n;
      }
    };
    i(pt, "IfStatement");
    (0, v.type)(pt, "IfStatement");
    (0, v.alias)(pt, "Statement", "Conditional");
    (0, v.visitor)(pt, "test", "consequent", "alternate");
    var Wt = class extends v.Node {
      constructor(t) {
        super(), this.source = t, this.argument = null, this.contextFree = false, this.ignoreMissing = false;
      }
    };
    i(Wt, "IncludeStatement");
    (0, v.type)(Wt, "IncludeStatement");
    (0, v.alias)(Wt, "Statement", "Include");
    (0, v.visitor)(Wt, "source", "argument");
    var Xt = class extends v.Node {
      constructor(t, r, n) {
        super(), this.name = t, this.arguments = r, this.body = n;
      }
    };
    i(Xt, "MacroDeclarationStatement");
    (0, v.type)(Xt, "MacroDeclarationStatement");
    (0, v.alias)(Xt, "Statement", "Scope", "RootScope");
    (0, v.visitor)(Xt, "name", "arguments", "body");
    var $t = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.value = r;
      }
    };
    i($t, "VariableDeclarationStatement");
    (0, v.type)($t, "VariableDeclarationStatement");
    (0, v.alias)($t, "Statement");
    (0, v.visitor)($t, "name", "value");
    var Jt = class extends v.Node {
      constructor(t) {
        super(), this.assignments = t;
      }
    };
    i(Jt, "SetStatement");
    (0, v.type)(Jt, "SetStatement");
    (0, v.alias)(Jt, "Statement", "ContextMutation");
    (0, v.visitor)(Jt, "assignments");
    var zt = class extends v.Node {
      constructor(t = null) {
        super(), this.body = t;
      }
    };
    i(zt, "SpacelessBlock");
    (0, v.type)(zt, "SpacelessBlock");
    (0, v.alias)(zt, "Statement", "Block");
    (0, v.visitor)(zt, "body");
    var Qt = class extends v.Node {
      constructor(t, r) {
        super(), this.name = t, this.alias = r;
      }
    };
    i(Qt, "AliasExpression");
    (0, v.type)(Qt, "AliasExpression");
    (0, v.alias)(Qt, "Expression");
    (0, v.visitor)(Qt, "name", "alias");
    var Zt = class extends v.Node {
      constructor(t, r) {
        super(), this.source = t, this.aliases = r;
      }
    };
    i(Zt, "UseStatement");
    (0, v.type)(Zt, "UseStatement");
    (0, v.alias)(Zt, "Statement", "Include");
    (0, v.visitor)(Zt, "source", "aliases");
    var lx = { name: "autoescape", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, u, a, c;
      r.nextIf(h.TAG_END) ? (a = r.la(-1), s = null) : (u = r.nextIf(h.STRING_START)) ? (s = r.expect(h.STRING).text, r.nextIf(h.STRING_END) || e.error({ title: "autoescape type declaration must be a simple string", pos: r.la(0).pos, advice: `The type declaration for autoescape must be a simple string such as 'html' or 'js'.
I expected the current string to end with a ${u.text} but instead found ${h.ERROR_TABLE[r.lat(0)] || r.lat(0)}.` }), a = r.la(0)) : r.nextIf(h.FALSE) ? (s = false, a = r.la(0)) : r.nextIf(h.TRUE) ? (s = true, a = r.la(0)) : e.error({ title: "Invalid autoescape type declaration", pos: r.la(0).pos, advice: `Expected type of autoescape to be a string, boolean or not specified. Found ${r.la(0).type} instead.` });
      let p = new Mt(s);
      R(p, t);
      let f;
      return p.expressions = e.parse((m, D, d) => D.type === h.TAG_START && d.nextIf(h.SYMBOL, "endautoescape") ? (c = D, f = d.expect(h.TAG_END, "", n), true) : false).expressions, b(p, f), p.trimRightAutoescape = ue(a), p.trimLeftEndautoescape = se(c), p;
    } };
    var Gi = W(re());
    var cx = { name: "block", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(h.SYMBOL), u, a, c;
      if (a = r.nextIf(h.TAG_END)) {
        if (u = new Ct(_(Gi.Identifier, s, s.text), e.parse((p, f, m) => {
          let D = !!(f.type === h.TAG_START && m.nextIf(h.SYMBOL, "endblock"));
          return D && (c = f), D;
        }).expressions), r.nextIf(h.SYMBOL, s.text) && r.lat(0) !== h.TAG_END) {
          let p = r.next();
          e.error({ title: "Block name mismatch", pos: p.pos, advice: p.type == h.SYMBOL ? `Expected end of block ${s.text} but instead found end of block ${r.la(0).text}.` : `endblock must be followed by either '%}' or the name of the open block. Found a token of type ${h.ERROR_TABLE[p.type] || p.type} instead.` });
        }
      } else
        u = new Ct(_(Gi.Identifier, s, s.text), new Gi.PrintExpressionStatement(e.matchExpression()));
      return R(u, t), b(u, r.expect(h.TAG_END, null, n)), u.trimRightBlock = a && ue(a), u.trimLeftEndblock = !!(c && se(c)), u;
    } };
    var px = { name: "do", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new jt(e.matchExpression());
      return R(s, t), b(s, r.expect(h.TAG_END, "", n)), s;
    } };
    var mv = W(re());
    var hv = W(Ev());
    var Dv = { name: "embed", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = new Ut(e.matchExpression());
      r.nextIf(h.SYMBOL, "ignore") && (r.expect(h.SYMBOL, "missing"), s.ignoreMissing = true), r.nextIf(h.SYMBOL, "with") && (s.argument = e.matchExpression()), r.nextIf(h.SYMBOL, "only") && (s.contextFree = true), r.expect(h.TAG_END);
      let u = r.la(-1), a;
      return s.blocks = (0, hv.default)(e.parse((c, p, f) => {
        let m = !!(p.type === h.TAG_START && f.nextIf(h.SYMBOL, "endembed"));
        return m && (a = p), m;
      }).expressions, mv.Node.isBlockStatement), R(s, t), b(s, r.expect(h.TAG_END, "", n)), s.trimRightEmbed = ue(u), s.trimLeftEndembed = a && se(a), s;
    } };
    var yv = { name: "extends", parse(e, t) {
      let r = e.tokens, n = new Yt(e.matchExpression());
      return R(n, t), b(n, r.expect(h.TAG_END)), n;
    } };
    var Av = W(re());
    var xv = { name: "filter", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = _(Av.Identifier, t, "filter"), u = e.matchFilterExpression(s);
      r.expect(h.TAG_END);
      let a = r.la(-1), c, p = e.parse((m, D, d) => {
        let x = D.type === h.TAG_START && d.nextIf(h.SYMBOL, "endfilter");
        return x && (c = D), x;
      }).expressions, f = new Vt(u, p);
      return R(f, t), b(f, r.expect(h.TAG_END, "", n)), f.trimRightFilter = ue(a), f.trimLeftEndfilter = c && se(c), f;
    } };
    var Tv = { name: "flush", parse(e, t) {
      let r = e.tokens, n = new fr();
      return R(n, t), b(n, r.expect(h.TAG_END)), n;
    } };
    var Hu = W(re());
    var gv = { name: "for", parse(e, t) {
      let r = e.tokens, n = new Kt(), s = r.la(-2), u = r.expect(h.SYMBOL);
      if (r.nextIf(h.COMMA)) {
        n.keyTarget = _(Hu.Identifier, u, u.text);
        let m = r.expect(h.SYMBOL);
        n.valueTarget = _(Hu.Identifier, m, m.text);
      } else
        n.keyTarget = null, n.valueTarget = _(Hu.Identifier, u, u.text);
      r.expect(h.OPERATOR, "in"), n.sequence = e.matchExpression(), r.nextIf(h.SYMBOL, "if") && (n.condition = e.matchExpression()), r.expect(h.TAG_END);
      let a = r.la(-1), c, p;
      n.body = e.parse((m, D, d) => {
        let x = D.type === h.TAG_START && (d.test(h.SYMBOL, "else") || d.test(h.SYMBOL, "endfor"));
        return x && d.test(h.SYMBOL, "else") && (c = D), x;
      }), r.nextIf(h.SYMBOL, "else") && (r.expect(h.TAG_END), p = r.la(-1), n.otherwise = e.parse((m, D, d) => D.type === h.TAG_START && d.test(h.SYMBOL, "endfor")));
      let f = r.la(-1);
      return r.expect(h.SYMBOL, "endfor", s), R(n, t), b(n, r.expect(h.TAG_END)), n.trimRightFor = ue(a), n.trimLeftElse = !!(c && se(c)), n.trimRightElse = !!(p && ue(p)), n.trimLeftEndfor = se(f), n;
    } };
    var Rl = W(re());
    var vv = { name: "from", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      r.expect(h.SYMBOL, "import");
      do {
        let a = r.expect(h.SYMBOL), c = a;
        r.nextIf(h.SYMBOL, "as") && (c = r.expect(h.SYMBOL));
        let p = new ct(_(Rl.Identifier, a, a.text), _(Rl.Identifier, c, c.text));
        if (R(p, a), b(p, c), s.push(p), !r.nextIf(h.COMMA))
          break;
      } while (!r.test(h.EOF));
      let u = new Ht(n, s);
      return R(u, t), b(u, r.expect(h.TAG_END)), u;
    } };
    var Sv = { name: "if", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = e.matchExpression(), u = null;
      r.expect(h.TAG_END);
      let a = r.la(-1), c = new pt(s, e.parse(Pl).expressions), p, f, m, D;
      do {
        if (r.nextIf(h.SYMBOL, "else"))
          p = r.la(-2), r.expect(h.TAG_END), f = r.la(-1), (u || c).alternate = e.parse(tM).expressions;
        else if (r.nextIf(h.SYMBOL, "elseif")) {
          m = r.la(-2), s = e.matchExpression(), r.expect(h.TAG_END), D = r.la(-1);
          let x = e.parse(Pl).expressions;
          u = (u || c).alternate = new pt(s, x), u.trimLeft = se(m), u.trimRightIf = ue(D);
        } else if (r.nextIf(h.SYMBOL, "elif")) {
          m = r.la(-2), s = e.matchExpression(), r.expect(h.TAG_END), D = r.la(-1);
          let x = e.parse(Pl).expressions;
          u = (u || c).alternate = new pt(s, x), u.trimLeft = se(m), u.trimRightIf = ue(D), u.isElif = true;
        }
        if (r.nextIf(h.SYMBOL, "endif"))
          break;
      } while (!r.test(h.EOF));
      let d = r.la(-2);
      return R(c, t), b(c, r.expect(h.TAG_END, "", n)), c.trimRightIf = ue(a), c.trimLeftElse = !!(p && se(p)), c.trimRightElse = !!(f && ue(f)), c.trimLeftEndif = se(d), c;
    } };
    function Pl(e, t, r) {
      if (t.type === h.TAG_START) {
        let n = r.la(0).text;
        return n === "else" || n === "endif" || n === "elseif" || n == "elif";
      }
      return false;
    }
    i(Pl, "matchConsequent");
    function tM(e, t, r) {
      return t.type === h.TAG_START && r.test(h.SYMBOL, "endif");
    }
    i(tM, "matchAlternate");
    var Fv = W(re());
    var Cv = { name: "import", parse(e, t) {
      let r = e.tokens, n = e.matchExpression();
      r.expect(h.SYMBOL, "as");
      let s = r.expect(h.SYMBOL), u = new ct(n, _(Fv.Identifier, s, s.text));
      return R(u, t), b(u, r.expect(h.TAG_END)), u;
    } };
    var Bv = { name: "include", parse(e, t) {
      let r = e.tokens, n = new Wt(e.matchExpression());
      return r.nextIf(h.SYMBOL, "ignore") && (r.expect(h.SYMBOL, "missing"), n.ignoreMissing = true), r.nextIf(h.SYMBOL, "with") && (n.argument = e.matchExpression()), r.nextIf(h.SYMBOL, "only") && (n.contextFree = true), R(n, t), b(n, r.expect(h.TAG_END)), n;
    } };
    var ql = W(re());
    var Ov = { name: "macro", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = r.expect(h.SYMBOL), u = [];
      for (r.expect(h.LPAREN); !r.test(h.RPAREN) && !r.test(h.EOF); ) {
        let D = r.expect(h.SYMBOL);
        u.push(_(ql.Identifier, D, D.text)), !r.nextIf(h.COMMA) && !r.test(h.RPAREN) && e.error({ title: 'Expected comma or ")"', pos: r.la(0).pos, advice: "The argument list of a macro can only consist of parameter names separated by commas." });
      }
      r.expect(h.RPAREN);
      let a = r.la(0), c, p = e.parse((D, d, x) => {
        let F = !!(d.type === h.TAG_START && x.nextIf(h.SYMBOL, "endmacro"));
        return F && (c = d), F;
      });
      if (r.test(h.SYMBOL)) {
        var f = r.next();
        s.text !== f.text && e.error({ title: `Macro name mismatch, expected "${s.text}" but found "${f.text}"`, pos: f.pos });
      }
      let m = new Xt(_(ql.Identifier, s, s.text), u, p);
      return R(m, t), b(m, r.expect(h.TAG_END, "", n)), m.trimRightMacro = ue(a), m.trimLeftEndmacro = se(c), m;
    } };
    var bv = W(re());
    var Nv = { name: "set", parse(e, t) {
      let r = e.tokens, n = [], s = [], u, a;
      do {
        let f = r.expect(h.SYMBOL);
        n.push(_(bv.Identifier, f, f.text));
      } while (r.nextIf(h.COMMA));
      if (r.nextIf(h.ASSIGNMENT))
        do
          s.push(e.matchExpression());
        while (r.nextIf(h.COMMA));
      else
        n.length !== 1 && e.error({ title: "Illegal multi-set", pos: r.la(0).pos, advice: "When using set with a block, you cannot have multiple targets." }), r.expect(h.TAG_END), u = r.la(-1), s[0] = e.parse((f, m, D) => {
          let d = !!(m.type === h.TAG_START && D.nextIf(h.SYMBOL, "endset"));
          return d && (a = m), d;
        }).expressions;
      n.length !== s.length && e.error({ title: "Mismatch of set names and values", pos: t.pos, advice: `When using set, you must ensure that the number of
assigned variable names is identical to the supplied values. However, here I've found
${n.length} variable names and ${s.length} values.` });
      let c = [];
      for (let f = 0, m = n.length; f < m; f++)
        c[f] = new $t(n[f], s[f]);
      let p = new Jt(c);
      return R(p, t), b(p, r.expect(h.TAG_END)), p.trimRightSet = !!(u && ue(u)), p.trimLeftEndset = !!(a && se(a)), p;
    } };
    var _v = { name: "spaceless", parse(e, t) {
      let r = e.tokens, n = r.la(-2);
      r.expect(h.TAG_END);
      let s = r.la(-1), u, a = e.parse((p, f, m) => {
        let D = !!(f.type === h.TAG_START && m.nextIf(h.SYMBOL, "endspaceless"));
        return u = f, D;
      }).expressions, c = new zt(a);
      return R(c, t), b(c, r.expect(h.TAG_END, "", n)), r.expect(h.SYMBOL, "endfor", n), c.trimRightSpaceless = ue(s), c.trimLeftEndspaceless = !!(u && se(u)), c;
    } };
    var wl = W(re());
    var Iv = { name: "use", parse(e, t) {
      let r = e.tokens, n = e.matchExpression(), s = [];
      if (r.nextIf(h.SYMBOL, "with"))
        do {
          let a = r.expect(h.SYMBOL), c = _(wl.Identifier, a, a.text), p = c;
          if (r.nextIf(h.SYMBOL, "as")) {
            let m = r.expect(h.SYMBOL);
            p = _(wl.Identifier, m, m.text);
          }
          let f = new Qt(c, p);
          Ye(f, c), qe(f, p), s.push(f);
        } while (r.nextIf(h.COMMA));
      let u = new Zt(n, s);
      return R(u, t), b(u, r.expect(h.TAG_END)), u;
    } };
    var Ll = W(re());
    var Rv = { name: "mount", parse(e, t) {
      let r = e.tokens, n = r.la(-2), s = null, u = null, a = null, c = false, p = 0, f = null;
      if (r.test(h.SYMBOL, "async") && r.la(1).type === h.STRING_START && (c = true, r.next()), r.test(h.STRING_START))
        u = e.matchStringExpression();
      else {
        let O = r.expect(h.SYMBOL);
        s = _(Ll.Identifier, O, O.text), r.nextIf(h.SYMBOL, "from") && (u = e.matchStringExpression());
      }
      r.nextIf(h.SYMBOL, "as") && (a = e.matchExpression()), r.nextIf(h.SYMBOL, "with") && (f = e.matchExpression()), c && r.nextIf(h.SYMBOL, "delay") && (r.expect(h.SYMBOL, "placeholder"), r.expect(h.SYMBOL, "by"), p = Number.parseInt(r.expect(h.NUMBER).text, 10), r.nextIf(h.SYMBOL, "s") ? p *= 1e3 : r.expect(h.SYMBOL, "ms"));
      let m = new Gt(s, u, a, f, c, p), D, d, x, F;
      if (c) {
        if (r.expect(h.TAG_END), D = r.la(-1), m.body = e.parse((O, g, j) => g.type === h.TAG_START && (j.test(h.SYMBOL, "catch") || j.test(h.SYMBOL, "endmount"))), r.nextIf(h.SYMBOL, "catch")) {
          d = r.la(-2);
          let O = r.expect(h.SYMBOL);
          m.errorVariableName = _(Ll.Identifier, O, O.text), r.expect(h.TAG_END), x = r.la(-1), m.otherwise = e.parse((g, j, X) => j.type === h.TAG_START && X.test(h.SYMBOL, "endmount"));
        }
        r.expect(h.SYMBOL, "endmount"), F = r.la(-2);
      }
      return R(m, t), b(m, r.expect(h.TAG_END, "", n)), m.trimRightMount = !!(D && ue(D)), m.trimLeftCatch = !!(d && se(d)), m.trimRightCatch = !!(x && ue(x)), m.trimLeftEndmount = !!(F && se(F)), m;
    } };
    var Wu = { tags: [lx, cx, px, Dv, yv, xv, Tv, gv, vv, Sv, Cv, Bv, Ov, Nv, _v, Iv, Rv], unaryOperators: tl, binaryOperators: Mi, tests: _n };
    var Pv = Symbol("ALREADY_INDENTED");
    var rM = Symbol("OPERATOR_PRECEDENCE");
    var nM = [".."];
    var kl = Wu.binaryOperators.reduce((e, t) => (e[t.text] = t.precedence, e), {});
    var iM = i((e, t, r, n) => {
      e[q] = false, e[Et] = true;
      let s = ['"'], u = e, a = [];
      for (; dr.Node.isBinaryConcatExpression(u); )
        s.unshift(t.call(r, ...a, "right")), a.push("left"), u = u.left;
      return s.unshift(t.call(r, ...a)), s.unshift('"'), E(s);
    }, "printInterpolatedString");
    var sM = i((e) => nM.indexOf(e) < 0, "operatorNeedsSpaces");
    var uM = i((e) => e.operator === "or" || e.operator === "and", "hasLogicalOperator");
    var qv = i((e, t) => {
      let r = e[t], n = dr.Node.isBinaryExpression(r), s = kl[e.operator], u = n ? kl[e[t].operator] : Number.MAX_SAFE_INTEGER;
      return u < s || u > s && n && uM(r) || dr.Node.isFilterExpression(r) || dr.Node.isBinaryConcatExpression(e) && dr.Node.isConditionalExpression(r);
    }, "otherNeedsParentheses");
    var aM = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = dr.Node.isBinaryExpression(e.right), s = ["and", "or"].indexOf(e.operator) > -1, u = sM(e.operator), a = yt(t, Pv, false);
      !a && n && (e.right[Pv] = true);
      let c = yt(t, xr, false), f = ur(t)[Ar] !== false;
      c || (e[xr] = true);
      let m = c ? yt(t, "operator") : "";
      e[rM] = kl[e.operator];
      let D = t.call(r, "left"), d = t.call(r, "right"), x = [], F = qv(e, "left"), O = qv(e, "right");
      F && x.push("("), x.push(D), F && x.push(")");
      let g = [u ? B : ne, e.operator, u ? " " : ""];
      O && g.push("("), g.push(d), O && g.push(")");
      let j = a ? E(g) : I(E(g)), X = E(ke(t, [...x, j], e)), Q = !c && f, Me = s && e.operator !== m;
      return Q || !s || c && Me ? C(X) : X;
    }, "_printBinaryExpression");
    var Xu = i((e, t, r, n) => dr.Node.isBinaryConcatExpression(e) && e.wasImplicitConcatenation ? iM(e, t, r, n) : aM(e, t, r), "printBinaryExpression");
    var wv = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = [B, "?"];
      e.consequent && n.push(E([" ", t.call(r, "consequent")])), e.alternate && n.push(B, ": ", t.call(r, "alternate"));
      let s = [t.call(r, "test"), I(E(n))];
      return ke(t, s, e), C(E(s));
    }, "printConditionalExpression");
    var Ml = i((e, t, r) => {
      let n = "<" + e.name, s = oM(t, r, "", "attributes"), u = e.selfClosing ? " />" : ">";
      return e.attributes && e.attributes.length > 0 ? E([n, I(E([" ", s])), u]) : E([n, u]);
    }, "printOpeningTag");
    var oM = i((e, t, r, n) => Ee(E([r, B]), e.map(t, n)), "printSeparatedList");
    var Lv = i((e, t, r) => {
      e[U] = true;
      let n = C(Ml(e, t, r));
      e[U] = false, e[q] = false;
      let s = e.name.toLowerCase();
      if (s == "script" || s == "style") {
        let { value: a } = e.children?.[0]?.value || {};
        return a ? [n, a, E(["</", e.name, ">"])] : [n, E(["</", e.name, ">"])];
      }
      if (!e.selfClosing) {
        e.children = yn(e.children);
        let a = xn(e, t, r, "children"), c = E(["</", e.name, ">"]), p = [n], f = E(a);
        if (Oi(e))
          p.push(I(E([ne, f])), ne);
        else {
          let m = [];
          var u = e.children.findIndex((D) => D.type != "PrintExpressionStatement" && D.type != "PrintTextStatement") == -1;
          a.length > 0 && (u || m.push(P)), m.push(f), p.push(I(E(m))), a.length > 0 && (u || p.push(P));
        }
        return p.push(c), Oi(e) ? C(E(p)) : E(p);
      }
      return n;
    }, "printElement");
    var $u = W(re());
    var lM = i((e) => ["id", "class", "type"].indexOf(e) > -1, "mayCorrectWhitespace");
    var cM = i((e) => e.replace(/\s+/g, " ").trim(), "sanitizeWhitespace");
    var pM = i((e, t, r, ...n) => {
      let s = [], u = e, a = n;
      for (; $u.Node.isBinaryConcatExpression(u); )
        s.unshift(t.call(r, ...a, "right")), a.push("left"), u = u.left;
      return s.unshift(t.call(r, ...a)), E(s);
    }, "printConcatenatedString");
    var kv = i((e, t, r = r) => {
      e[U] = false;
      let n = [t.call(r, "name")];
      if (e[U] = true, e[q] = false, e.value) {
        if (n.push('="'), $u.Node.isBinaryConcatExpression(e.value) && e.value.wasImplicitConcatenation)
          n.push(pM(e.value, t, r, "value"));
        else {
          let s = $u.Node.isStringLiteral(e.value);
          lM(e.name.name) && s && (e.value.value = cM(e.value.value)), n.push(t.call(r, "value"));
        }
        n.push('"');
      }
      return E(n);
    }, "printAttribute");
    var Mv = i((e, t) => {
      e[U] = false;
      let r = [e.name];
      ke(t, r, e);
      let n = E(r);
      return r.length === 1 ? n : C(n);
    }, "printIdentifier");
    var Gv = W(re());
    var jv = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = e.trimLeft ? "{{-" : "{{", s = e.trimRight ? "-}}" : "}}", u = vi(e.value) && !Gv.Node.isObjectExpression(e.value), a = u ? " " : B, c = E([a, t.call(r, "value")]), p = u ? c : I(c);
      return C(E([n, p, a, s]));
    }, "printExpressionStatement");
    var Uv = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = [t.call(r, "object")];
      return n.push(e.computed ? "[" : "."), n.push(t.call(r, "property")), e.computed && n.push("]"), ke(t, n, e), C(E(n));
    }, "printMemberExpression");
    var Gl = W(re());
    var fM = i((e) => Tu(e, (t) => t[Wn] === true), "isInFilterBlock");
    var dM = i((e, t, r, n) => {
      if (!(e.arguments && e.arguments.length > 0))
        return "";
      let u = t.map(r, ...n, "arguments");
      return e.arguments.length === 1 && Gl.Node.isObjectExpression(e.arguments[0]) ? e.isDjango ? C(E([":", u[0]])) : C(E(["(", u[0], ")"])) : e.isDjango ? C(E([":", I(E([ne, Ee(E([",", B]), u)])), ne])) : C(E(["(", I(E([ne, Ee(E([",", B]), u)])), ne, ")"]));
    }, "printArguments");
    var Yv = i((e, t, r, n) => {
      let s = dM(e, t, r, n), u = t.call(r, ...n, "name");
      return E([u, s]);
    }, "printOneFilterExpression");
    var EM = i((e, t = "") => Ee(E([t === "" ? ne : B, "|", t]), e), "joinFilters");
    var Vv = i((e, t, r, n) => {
      let s = e;
      e[U] = false, e[q] = true;
      let u = n.twigFollowOfficialCodingStandards === false, a = u ? " " : "", c = ["target"], p = [Yv(e, t, r, [])];
      for (; Gl.Node.isFilterExpression(s.target); )
        p.unshift(Yv(s.target, t, r, c)), c.push("target"), s = s.target;
      let f = t.call(r, ...c), m = fM(t), D = Si(Fi(e, ...c)), d = [];
      if (D && d.push("("), d.push(f), D && d.push(")"), m && (d.push(E([" ", p[0]])), p = p.slice(1)), p.length === 1)
        d.push(`${a}|${a}`, p[0]);
      else if (p.length > 1) {
        let F = E([u ? B : ne, `|${a}`, EM(p, a)]);
        d.push(I(F));
      }
      let x = gu(t);
      return x === U ? (d.push(" }}"), d.unshift("{{ ")) : x === Et && vu(d), C(E(d));
    }, "printFilterExpression");
    var Kv = i((e, t, r, n) => {
      if (e.properties.length === 0)
        return "{}";
      e[U] = false;
      let s = t.map(r, "properties"), u = n.twigAlwaysBreakObjects ? P : B, a = E([B, Ee(E([",", u]), s)]), c = ["{", I(a), u, "}"];
      return ke(t, c, e), C(E(c));
    }, "printObjectExpression");
    var Hv = W(re());
    var Wv = i((e, t, r, n) => {
      e[q] = !e.computed && Hv.Node.isStringLiteral(e.key) && !Go(e.key.value);
      let s = e.key.wasImplicitConcatenation, u = e.computed && !s, a = [];
      return u && a.push("("), a.push(t.call(r, "key")), u && a.push(")"), a.push(": "), e[q] = true, a.push(t.call(r, "value")), E(a);
    }, "printObjectProperty");
    var Xv = W(re());
    var $v = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = t.map(r, "arguments"), s = [t.call(r, "callee"), "("];
      return e.arguments.length === 0 ? s.push(")") : e.arguments.length === 1 && Xv.Node.isObjectExpression(e.arguments[0]) ? s.push(n[0], ")") : s.push(I(E([ne, Ee(E([",", B]), n)])), ne, ")"), ke(t, s, e), C(E(s));
    }, "printCallExpression");
    var Jv = { TestNullExpression: "null", TestDivisibleByExpression: "divisible by", TestDefinedExpression: "defined", TestEmptyExpression: "empty", TestEvenExpression: "even", TestOddExpression: "odd", TestIterableExpression: "iterable", TestSameAsExpression: "same as" };
    var mM = i((e) => e.constructor.name === "UnarySubclass" && e.operator === "not", "isNegator");
    var zv = i((e, t, r) => {
      let n = e.__proto__.type, s = [t.call(r, "expression"), " is "], u = ur(t), a = Array.isArray(e.arguments) && e.arguments.length > 0;
      if (mM(u) && s.push("not "), Jv[n] ? s.push(Jv[n]) : console.error("TestExpression: No text for " + n + " defined"), a) {
        let c = t.map(r, "arguments"), p = Ee(E([",", B]), c);
        s.push(C(E(["(", I(E([ne, p])), ne, ")"])));
      }
      return E(s);
    }, "printTestExpression");
    var Qv = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = [e.operator, t.call(r, "argument")];
      return ke(t, n, e), C(E(n));
    }, "printUnaryExpression");
    var Zv = W(re());
    var hM = i((e) => Si(e), "argumentNeedsParentheses");
    var DM = i((e) => e === "not", "isLogicalOperator");
    var yM = i((e, t, r) => {
      let n = yt(t, xr, false);
      n || (e[xr] = true);
      let u = ur(t)[Ar] !== false, a = [e.operator, " "], c = hM(e.argument), p = t.call(r, "argument");
      c ? a.push("(", I(E([ne, p])), E([ne, ")"])) : a.push(p);
      let f = E(a);
      return !n && u ? C(f) : f;
    }, "printLogicalExpression");
    var eS = i((e, t, r) => {
      let n = [], s = Zv.Node.isTestExpression(e.argument);
      return DM(e.operator) && !s ? yM(e, t, r) : (s || n.push(e.operator, " "), n.push(t.call(r, "argument")), E(n));
    }, "printUnarySubclass");
    var AM = i((e, t = true) => {
      let r = st(e);
      return r === 0 ? t ? B : "" : r === 1 ? P : E([P, P]);
    }, "newlinesOnly");
    var tS = i((e, t, r) => {
      let n = e[Dr] === true, s = e[yr] === true, u = t.call(r, "value");
      if (Rr(u) && e[Xn])
        return AM(u);
      let a = Uo(u, n, s);
      return Ee(E([P, P]), a);
    }, "printTextStatement");
    var xM = i((e, t) => t === 0 || e[t - 1] !== "\\", "isUnmaskedOccurrence");
    var rS = i((e) => (t) => {
      let r = t.indexOf(e);
      for (; r >= 0; ) {
        if (xM(t, r))
          return true;
        r = t.indexOf(e, r + 1);
      }
      return false;
    }, "containsUnmasked");
    var TM = rS("'");
    var gM = rS('"');
    var vM = i((e, t) => TM(e) ? '"' : gM(e) ? "'" : mn(t), "getQuoteChar");
    var nS = i((e, t, r, n) => {
      let s = yt(t, q, false), u = yt(t, Hn, null);
      if (s) {
        let a = u || vM(e.value, n);
        return a + e.value + a;
      }
      return e.value;
    }, "printStringLiteral");
    var iS = i((e, t, r) => {
      e[q] = true;
      let n = t.map(r, "elements"), s = E([ne, Ee(E([",", B]), n)]);
      return C(E(["[", I(s), ne, "]"]));
    }, "printArrayExpression");
    var sS = i((e, t, r) => {
      let n = t.call(r, "target"), s = e.start ? t.call(r, "start") : "", u = e.end ? t.call(r, "end") : "";
      return E([n, "[", s, ":", u, "]"]);
    }, "printSliceExpression");
    var uS = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", ' use "', t.call(r, "source"), '"'];
      if (e.aliases && e.aliases.length > 0) {
        n.push(" with");
        let u = t.map(r, "aliases");
        n.push(I(E([B, Ee(E([",", B]), u)]))), n.push(B);
      } else
        n.push(" ");
      return n.push(e.trimRight ? "-%}" : "%}"), C(E(n));
    }, "printUseStatement");
    var aS = i((e, t, r) => E([t.call(r, "name"), " as ", t.call(r, "alias")]), "printAliasExpression");
    var oS = W(re());
    var lS = i((e, t, r, n) => {
      e[U] = false;
      let s = Array.isArray(e.body), u = n.twigOutputEndblockName === true;
      if (s) {
        let a = t.call(r, "name"), p = [E([e.trimLeft ? "{%-" : "{%", " block ", a, e.trimRightBlock ? " -%}" : " %}"])];
        if (e.body.length > 0) {
          let m = Pe(e, t, r, "body");
          p.push(m);
        }
        return p.push(P), p.push(e.trimLeftEndblock ? "{%-" : "{%", " endblock", u ? E([" ", a]) : "", e.trimRight ? " -%}" : " %}"), C(E(p));
      } else if (oS.Node.isPrintExpressionStatement(e.body)) {
        let a = [e.trimLeft ? "{%-" : "{%", " block ", t.call(r, "name"), " ", t.call(r, "body", "value"), e.trimRight ? " -%}" : " %}"];
        return E(a);
      }
    }, "printBlockStatement");
    var cS = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " spaceless ", e.trimRightSpaceless ? "-%}" : "%}"];
      return n.push(Pe(e, t, r, "body")), n.push(P), n.push(e.trimLeftEndspaceless ? "{%-" : "{%", " endspaceless ", e.trimRight ? "-%}" : "%}"), C(E(n));
    }, "printSpacelessBlock");
    var SM = i((e, t) => E([e.trimLeft ? "{%-" : "{%", " autoescape ", mn(t), e.escapeType || "html", mn(t), " ", e.trimRightAutoescape ? "-%}" : "%}"]), "createOpener");
    var pS = i((e, t, r, n) => {
      let s = [SM(e, n)];
      return s.push(Pe(e, t, r, "expressions")), s.push(P, e.trimLeftEndautoescape ? "{%-" : "{%", " endautoescape ", e.trimRight ? "-%}" : "%}"), E(s);
    }, "printAutoescapeBlock");
    var fS = i((e, t, r) => {
      let n = e.trimLeft ? "-" : "", s = e.trimRight ? "-" : "";
      return `{%${n} flush ${s}%}`;
    }, "printFlushStatement");
    var dS = i((e, t, r) => {
      e[q] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " include ", t.call(r, "source")];
      if (e.argument) {
        let s = t.call(r, "argument");
        n.push(" with "), n.push(s);
      }
      return e.contextFree && n.push(" only"), n.push(e.trimRight ? " -%}" : " %}"), C(E(n));
    }, "printIncludeStatement");
    var $i = W(re());
    var ES = Symbol("IS_ELSEIF");
    var mS = i((e, t, r) => {
      e[U] = false;
      let n = Array.isArray(e.alternate) && e.alternate.length > 0, s = $i.Node.isIfStatement(e.alternate), u = e[ES] === true, a = e.consequent.length === 0, c = e.consequent.length === 1, p = e.consequent[0], f = !u && !e.alternate && (a || c && !$i.Node.isElement(p) && (!$i.Node.isPrintTextStatement(p) || Su(p.value.value)));
      c && $i.Node.isPrintTextStatement(p) && Su(p.value.value) && (p[Dr] = true, p[yr] = true);
      let m = C(E([e.trimLeft ? "{%- " : "{% ", u ? e.isElif ? "elif" : "elseif" : "if", I(E([B, t.call(r, "test")])), " ", e.trimRightIf ? "-%}" : "%}"])), D = f ? a ? "" : t.call(r, "consequent", "0") : Pe(e, t, r, "consequent"), d = [m, D];
      return n ? (d.push(P, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}"), d.push(Pe(e, t, r, "alternate"))) : s && (e.alternate[ES] = true, d.push(P), d.push(t.call(r, "alternate"))), u || d.push(f ? "" : P, e.trimLeftEndif ? "{%-" : "{%", " endif ", e.trimRight ? "-%}" : "%}"), E(d);
    }, "printIfStatement");
    var FM = i((e) => "" + e / 1e3 + "s", "formatDelay");
    var CM = i((e, t, r) => {
      let n = [], s = [e.trimLeft ? "{%-" : "{%", " mount"];
      e.async === true && s.push(" async"), e.name && s.push(" ", t.call(r, "name")), e.name && e.source && s.push(" from"), e.source && s.push(" ", t.call(r, "source")), e.key && s.push(I(E([B, "as ", t.call(r, "key")]))), n.push(C(E(s))), e.argument && n.push(I(E([" with ", t.call(r, "argument")]))), e.delayBy && n.push(I(E([B, "delay placeholder by ", FM(e.delayBy)])));
      let u = e.body || e.otherwise ? e.trimRightMount : e.trimRight;
      return n.push(E([B, u ? "-%}" : "%}"])), C(E(n));
    }, "buildOpener");
    var BM = i((e, t) => I(E([P, e.call(t, "body")])), "buildBody");
    var OM = i((e, t, r) => {
      let n = [];
      return n.push(E([P, e.trimLeftCatch ? "{%-" : "{%", " catch "])), e.errorVariableName && n.push(t.call(r, "errorVariableName"), " "), n.push(e.trimRightCatch ? "-%}" : "%}"), n.push(I(E([P, t.call(r, "otherwise")]))), E(n);
    }, "buildErrorHandling");
    var hS = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = [CM(e, t, r)];
      return e.body && n.push(BM(t, r)), e.otherwise && n.push(OM(e, t, r)), (e.body || e.otherwise) && n.push(E([P, e.trimLeftEndmount ? "{%-" : "{%", " endmount ", e.trimRight ? "-%}" : "%}"])), E(n);
    }, "printMountStatement");
    var bM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " for "];
      return e.keyTarget && n.push(t.call(r, "keyTarget"), ", "), n.push(t.call(r, "valueTarget"), " in ", t.call(r, "sequence")), e.condition && n.push(I(E([B, "if ", t.call(r, "condition")]))), n.push(E([" ", e.trimRightFor ? "-%}" : "%}"])), C(E(n));
    }, "printFor");
    var DS = i((e, t, r) => {
      e[U] = false;
      let n = [bM(e, t, r)], s = e.body.expressions.length === 0 || e.body.expressions.length === 1 && Dn(e.body.expressions[0]), u = t.call(r, "body");
      if ((!s || e.otherwise) && n.push(An(u)), e.otherwise) {
        n.push(P, e.trimLeftElse ? "{%-" : "{%", " else ", e.trimRightElse ? "-%}" : "%}");
        let a = t.call(r, "otherwise");
        n.push(An(a));
      }
      return n.push(s ? "" : P, e.trimLeftEndfor ? "{%-" : "{%", " endfor ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printForStatement");
    var jl = W(re());
    var NM = i((e) => jl.Node.isObjectExpression(e) || Mo(e) || jl.Node.isArrayExpression(e), "shouldAvoidBreakBeforeClosing");
    var _M = i((e, t, r, n) => {
      let s = e.assignments[n];
      s[Ar] = false;
      let u = NM(s.value);
      return C(E([e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", n), u ? " " : B, e.trimRight ? "-%}" : "%}"]));
    }, "buildSetStatement");
    var IM = i((e) => Array.isArray(e.assignments) && e.assignments.length === 1 && Array.isArray(e.assignments[0].value), "isEmbracingSet");
    var RM = i((e, t, r) => {
      let n = [];
      return Array.isArray(e.assignments) && e.assignments.length > 0 && e.assignments.forEach((u, a) => {
        n.length > 0 && n.push(P), n.push(_M(e, t, r, a));
      }), E(n);
    }, "printRegularSet");
    var PM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " set ", t.call(r, "assignments", "0", "name"), e.trimRightSet ? " -%}" : " %}"];
      e[q] = false;
      let s = Pe(e, t, r, "assignments", "0", "value");
      return n.push(s), n.push(P, e.trimLeftEndset ? "{%-" : "{%", " endset ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printEmbracingSet");
    var yS = i((e, t, r) => (e[q] = true, IM(e) ? PM(e, t, r) : RM(e, t, r)), "printSetStatement");
    var AS = i((e, t, r) => E([e.trimLeft ? "{%-" : "{%", " do ", t.call(r, "value"), e.trimRight ? " -%}" : " %}"]), "printDoStatement");
    var xS = i((e, t, r) => (e[q] = true, E([e.trimLeft ? "{%-" : "{%", " extends ", t.call(r, "parentName"), e.trimRight ? " -%}" : " %}"])), "printExtendsStatement");
    var qM = i((e, t, r) => {
      e[U] = false, e[q] = true;
      let n = [e.trimLeft ? "{%-" : "{%", " embed ", t.call(r, "parent")];
      return e.argument && n.push(I(E([B, "with ", t.call(r, "argument")]))), n.push(E([B, e.trimRightEmbed ? "-%}" : "%}"])), C(E(n));
    }, "printOpener");
    var TS = i((e, t, r) => {
      let n = Pe(e, t, r, "blocks"), s = qM(e, t, r), u = E([P, e.trimLeftEndembed ? "{%-" : "{%", " endembed ", e.trimRight ? "-%}" : "%}"]);
      return E([s, n, u]);
    }, "printEmbedStatement");
    var gS = i((e, t, r) => (e[q] = true, C(E([e.trimLeft ? "{%-" : "{%", " import ", t.call(r, "key"), I(E([B, "as ", t.call(r, "alias")])), B, e.trimRight ? "-%}" : "%}"]))), "printImportDeclaration");
    var wM = i((e) => {
      let t = [e.key.name];
      return e.key.name !== e.alias.name && t.push(" as ", e.alias.name), E(t);
    }, "printImportDeclaration");
    var vS = i((e, t, r) => {
      e[q] = true;
      let n = e.imports.map(wM), s = I(E([B, Ee(E([",", B]), n)]));
      return C(E([e.trimLeft ? "{%-" : "{%", " from ", t.call(r, "source"), " import", s, B, e.trimRight ? "-%}" : "%}"]));
    }, "printFromStatement");
    var SS = i((e) => {
      let t = e.value.value || "", r = Cu(t), n = t.length >= 3 ? t[2] === "-" : false, s = t.length >= 3 ? t.slice(-3, -2) === "-" : false;
      return st(r) === 0 ? Ou(r, n, s) : E([n ? "{#-" : "{#", r, s ? "-#}" : "#}"]);
    }, "printTwigComment");
    var FS = i((e, t, r) => {
      let n = Fu(e.value.value || "");
      return st(n) === 0 ? Bu(n) : E(["<!-- ", n, " -->"]);
    }, "printHtmlComment");
    var CS = i((e, t, r) => {
      e[q] = true, e[Hn] = '"';
      let n = "<!" + (e.declarationType || "").toUpperCase(), s = t.map(r, "parts");
      return $r([n, " ", Ee(" ", s), ">"]);
    }, "printDeclaration");
    var BS = W(re());
    var OS = i((e, t, r) => {
      e[q] = true;
      let s = [Ty(e, t, r)], u = t.map(r, "sections");
      return e.sections.forEach((a, c) => {
        BS.Node.isGenericTwigTag(a) ? s.push(E([P, u[c]])) : Yo(a) || s.push(An(u[c]));
      }), E(s);
    }, "printGenericTwigTag");
    var bS = i((e, t, r) => e.tokenText, "printGenericToken");
    var LM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%-" : "{%", " macro ", t.call(r, "name"), "("], s = t.map(r, "arguments"), u = Ee(E([",", B]), s);
      return n.push(I(E([ne, u]))), n.push(")", B, e.trimRightMacro ? "-%}" : "%}"), C(E(n));
    }, "printOpener");
    var NS = i((e, t, r) => {
      let n = [LM(e, t, r)];
      return n.push(I(E([P, t.call(r, "body")]))), n.push(P, e.trimLeftEndmacro ? "{%-" : "{%", " endmacro ", e.trimRight ? "-%}" : "%}"), E(n);
    }, "printMacroDeclarationStatement");
    var kM = i((e, t, r) => {
      let n = [e.trimLeft ? "{%- " : "{% "], s = t.call(r, "filterExpression");
      return n.push(s, B, e.trimRightFilter ? "-%}" : "%}"), C(E(n));
    }, "printOpeningGroup");
    var _S = i((e, t, r) => {
      e[Wn] = true;
      let n = kM(e, t, r), s = Pe(e, t, r, "body"), u = E([P, e.trimLeftEndfilter ? "{%-" : "{%", " endfilter ", e.trimRight ? "-%}" : "%}"]);
      return E([n, s, u]);
    }, "printFilterBlockStatement");
    var IS = i((e, t, r) => {
      let n = t.call(r, "name");
      e[q] = true;
      let s = t.call(r, "value"), a = vi(e.value) ? E([" ", s]) : I(E([B, s]));
      return E([n, " =", a]);
    }, "printVariableDeclarationStatement");
    var RS = i((e, t, r) => {
      e[q] = true;
      let n = t.call(r, "name"), s = t.call(r, "value");
      return E([n, " = ", s]);
    }, "printNamedArgumentExpression");
    var Ju = "ORIGINAL_SOURCE";
    var MM = i((e, ...t) => {
      let r = new Vr(new bn(e));
      for (let n of t)
        n.unaryOperators && r.addOperators(...n.unaryOperators.map((s) => s.text)), n.binaryOperators && r.addOperators(...n.binaryOperators.map((s) => s.text));
      return r;
    }, "createConfiguredLexer");
    var GM = i((e, ...t) => {
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
    var jM = i((e, t, ...r) => {
      let n = new jr(new Ur(MM(e, ...r), { ignoreWhitespace: true, ignoreComments: false, ignoreHtmlComments: false, applyWhitespaceTrimming: false }), { ignoreComments: false, ignoreHtmlComments: false, ignoreDeclarations: false, decodeEntities: false, multiTags: t, allowUnknownTags: true });
      return GM(n, ...r), n;
    }, "createConfiguredParser");
    var UM = i((e = []) => e.reduce((t, r) => {
      let n = r.split(",");
      return t[n[0].trim()] = n.slice(1).map((s) => s.trim()), t;
    }, {}), "getMultiTagConfig");
    var PS = i((e, t, r) => {
      let n = ns(r), s = UM(r.twigMultiTags || []), u = [Wu, ...bc(n)], c = jM(e, s, ...u).parse();
      return c[Ju] = e, c;
    }, "parse");
    var N = {};
    var YM = i((e) => {
      if (e && e.printers)
        for (let t of Object.keys(e.printers))
          N[t] = e.printers[t];
    }, "applyPlugin");
    var VM = i((e) => {
      let t = ns(e);
      ia(t).forEach((n) => {
        YM(n);
      });
    }, "applyPlugins");
    var KM = Ci("prettier-ignore");
    var HM = Ci("prettier-ignore-start");
    var WM = Ci("prettier-ignore-end");
    var XM = Bi("prettier-ignore");
    var $M = Bi("prettier-ignore-start");
    var JM = Bi("prettier-ignore-end");
    var zM = i((e) => KM(e) || XM(e), "isIgnoreNextComment");
    var QM = i((e) => HM(e) || $M(e), "isIgnoreRegionStartComment");
    var ZM = i((e) => WM(e) || JM(e), "isIgnoreRegionEndComment");
    var Yl = "";
    var Ji = false;
    var Ul = false;
    var qS = i((e) => {
      Ul = Ul && !wS(e) || zM(e), Ji = Ji || QM(e);
    }, "checkForIgnoreStart");
    var eG = i((e) => {
      Ji && ZM(e) && (Ji = false);
    }, "checkForIgnoreEnd");
    var wS = i((e) => !Dn(e), "shouldApplyIgnoreNext");
    var LS = i((e, t, r) => {
      VM(t);
      let n = e.getValue(), s = n.constructor.name;
      n[Ju] && (Yl = n[Ju]), t.twigPrintWidth && (t.printWidth = t.twigPrintWidth), eG(n);
      let u = wS(n) && Ul || Ji, a = N[s];
      return !u && a ? (qS(n), N[s](n, e, r, t)) : (a || console.warn(`No print function available for node type "${s}"`), qS(n), rG(n) ? tG(n) : "");
    }, "print");
    var tG = i((e) => Yl.substring(e.loc.start.index, e.loc.end.index), "getSubstringForNode");
    var rG = i((e) => Yl && e.loc && e.loc.start && e.loc.end && e.loc.start.index && e.loc.end.index, "canGetSubstringForNode");
    N.SequenceExpression = gy;
    N.ConstantValue = (e) => e.value;
    N.StringLiteral = nS;
    N.Identifier = Mv;
    N.UnaryExpression = Qv;
    N.BinaryExpression = Xu;
    N.BinarySubclass = Xu;
    N.UnarySubclass = eS;
    N.TestExpression = zv;
    N.ConditionalExpression = wv;
    N.Element = Lv;
    N.Attribute = kv;
    N.PrintTextStatement = tS;
    N.PrintExpressionStatement = jv;
    N.MemberExpression = Uv;
    N.FilterExpression = Vv;
    N.ObjectExpression = Kv;
    N.ObjectProperty = Wv;
    var kS = i((e) => "" + e.value, "returnNodeValue");
    N.Fragment = (e, t, r) => t.call(r, "value");
    N.NumericLiteral = kS;
    N.BooleanLiteral = kS;
    N.NullLiteral = () => "null";
    N.ArrayExpression = iS;
    N.CallExpression = $v;
    N.NamedArgumentExpression = RS;
    N.SliceExpression = sS;
    N.UseStatement = uS;
    N.AliasExpression = aS;
    N.BlockStatement = lS;
    N.SpacelessBlock = cS;
    N.AutoescapeBlock = pS;
    N.FlushStatement = fS;
    N.IncludeStatement = dS;
    N.IfStatement = mS;
    N.MountStatement = hS;
    N.ForStatement = DS;
    N.BinaryConcatExpression = Xu;
    N.SetStatement = yS;
    N.VariableDeclarationStatement = IS;
    N.DoStatement = AS;
    N.ExtendsStatement = xS;
    N.EmbedStatement = TS;
    N.FilterBlockStatement = _S;
    N.ImportDeclaration = gS;
    N.FromStatement = vS;
    N.MacroDeclarationStatement = NS;
    N.TwigComment = SS;
    N.HtmlComment = FS;
    N.Declaration = CS;
    N.GenericTwigTag = (e, t, r, n) => {
      let s = e.tagName;
      return N[s + "Tag"] ? N[s + "Tag"](e, t, r, n) : OS(e, t, r, n);
    };
    N.GenericToken = bS;
    N.String = (e) => e;
    var MS = W(re());
    function GS(e, t, r, n) {
      let s = e.getValue();
      if (n.embeddedLanguageFormatting == "auto" && s instanceof MS.Element) {
        let u = s.name.toLowerCase();
        if (u == "script" || u == "style") {
          let a = u == "script" ? "babel" : "css", { value: c } = s.children?.[0].value;
          if (c) {
            let p = C(Ml(s, e, t)), f = I([ne, r(c, { ...n, parser: a }, { stripTrailingHardline: true })]);
            return [p, f, P, E(["</", s.name, ">"])];
          }
        }
      }
      return false;
    }
    i(GS, "embed");
    var nG = [{ name: "melody", parsers: ["melody"], group: "Melody", tmScope: "melody.twig", aceMode: "html", codemirrorMode: "clike", codemirrorMimeType: "text/melody-twig", extensions: [".melody.twig", ".html.twig", ".twig", ".django", ".jinja"], linguistLanguageId: 0, vscodeLanguageIds: ["twig", "django", "django-html"] }];
    function iG() {
      return false;
    }
    i(iG, "hasPragma");
    function sG() {
      return -1;
    }
    i(sG, "locStart");
    function uG() {
      return -1;
    }
    i(uG, "locEnd");
    var aG = { melody: { parse: PS, astFormat: "melody", hasPragma: iG, locStart: sG, locEnd: uG } };
    function oG(e) {
      return e.ast_type && e.ast_type !== "comment";
    }
    i(oG, "canAttachComment");
    function lG(e) {
      let t = e.getValue();
      switch (t.ast_type) {
        case "comment":
          return t.value;
        default:
          throw new Error("Not a comment: " + JSON.stringify(t));
      }
    }
    i(lG, "printComment");
    function cG(e, t) {
      delete t.lineno, delete t.col_offset;
    }
    i(cG, "clean");
    var pG = { melody: { print: LS, embed: GS, printComment: lG, canAttachComment: oG, massageAstNode: cG, willPrintOwnComments: () => true } };
    var fG = { twigMelodyPlugins: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Provide additional plugins for Melody. Relative file path from the project root." }, twigMultiTags: { type: "path", category: "Global", array: true, default: [{ value: [] }], description: "Make custom Twig tags known to the parser." }, twigSingleQuote: { type: "boolean", category: "Global", default: true, description: "Use single quotes in Twig files?" }, twigAlwaysBreakObjects: { type: "boolean", category: "Global", default: true, description: "Should objects always break in Twig files?" }, twigPrintWidth: { type: "int", category: "Global", default: 80, description: "Print width for Twig files" }, twigFollowOfficialCodingStandards: { type: "boolean", category: "Global", default: true, description: "See https://twig.symfony.com/doc/2.x/coding_standards.html" }, twigOutputEndblockName: { type: "boolean", category: "Global", default: false, description: "Output the Twig block name in the 'endblock' tag" } };
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
var djangoPlugin = __toESM(require_out());
var htmlPlugin = __toESM(require("prettier/parser-html"));
var import_vscode = require("vscode");
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
    "embeddedLanguageFormatting": "auto",
    "templateType": "django"
  };
  Object.assign(options2, import_prettier.resolveConfig.sync(document.uri.fsPath) ?? []);
  options2.twigSingleQuote = true;
  options2.plugins = [djangoPlugin];
  options2.parser = "melody";
  options2.htmlWhitespaceSensitivity = "ignore";
  options2.embeddedLanguageFormatting = "off";
  options2.templateType = "django";
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
