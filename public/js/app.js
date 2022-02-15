(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/vue.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ziggy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ziggy */ "./resources/js/ziggy.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






_inertiajs_progress__WEBPACK_IMPORTED_MODULE_3__.InertiaProgress.init();
(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
  resolve: function () {
    var _resolve = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name));

            case 2:
              return _context.abrupt("return", _context.sent["default"]);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function resolve(_x) {
      return _resolve.apply(this, arguments);
    }

    return resolve;
  }(),
  setup: function setup(_ref) {
    var el = _ref.el,
        App = _ref.App,
        props = _ref.props,
        plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_1__.h)(App, props);
      }
    }).use(plugin).use(ziggy__WEBPACK_IMPORTED_MODULE_4__.ZiggyVue, _ziggy__WEBPACK_IMPORTED_MODULE_5__.Ziggy).component("Link", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Link).component("Head", _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.Head).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});

/***/ }),

/***/ "./resources/js/ziggy.js":
/*!*******************************!*\
  !*** ./resources/js/ziggy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ziggy": () => (/* binding */ Ziggy)
/* harmony export */ });
var Ziggy = {
  "url": "http:\/\/awesome-app.test",
  "port": null,
  "defaults": {},
  "routes": {
    "homepage": {
      "uri": "\/",
      "methods": ["GET", "HEAD"]
    },
    "about": {
      "uri": "about",
      "methods": ["GET", "HEAD"]
    },
    "contact": {
      "uri": "contact",
      "methods": ["GET", "HEAD"]
    }
  }
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}



/***/ }),

/***/ "./vendor/tightenco/ziggy/dist/vue.js":
/*!********************************************!*\
  !*** ./vendor/tightenco/ziggy/dist/vue.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  function n(t, n) {
    for (var r = 0; r < n.length; r++) {
      var e = n[r];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }

  function r(t, r, e) {
    return r && n(t.prototype, r), e && n(t, e), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }

  function e() {
    return e = Object.assign || function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var r = arguments[n];

        for (var e in r) {
          Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
        }
      }

      return t;
    }, e.apply(this, arguments);
  }

  function i(t) {
    return i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, i(t);
  }

  function o(t, n) {
    return o = Object.setPrototypeOf || function (t, n) {
      return t.__proto__ = n, t;
    }, o(t, n);
  }

  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function f(t, n, r) {
    return f = u() ? Reflect.construct : function (t, n, r) {
      var e = [null];
      e.push.apply(e, n);
      var i = new (Function.bind.apply(t, e))();
      return r && o(i, r.prototype), i;
    }, f.apply(null, arguments);
  }

  function c(t) {
    var n = "function" == typeof Map ? new Map() : void 0;
    return c = function c(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

      if (void 0 !== n) {
        if (n.has(t)) return n.get(t);
        n.set(t, r);
      }

      function r() {
        return f(t, arguments, i(this).constructor);
      }

      return r.prototype = Object.create(t.prototype, {
        constructor: {
          value: r,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), o(r, t);
    }, c(t);
  }

  var a = String.prototype.replace,
      l = /%20/g,
      s = "RFC3986",
      v = {
    "default": s,
    formatters: {
      RFC1738: function RFC1738(t) {
        return a.call(t, l, "+");
      },
      RFC3986: function RFC3986(t) {
        return String(t);
      }
    },
    RFC1738: "RFC1738",
    RFC3986: s
  },
      p = Object.prototype.hasOwnProperty,
      d = Array.isArray,
      y = function () {
    for (var t = [], n = 0; n < 256; ++n) {
      t.push("%" + ((n < 16 ? "0" : "") + n.toString(16)).toUpperCase());
    }

    return t;
  }(),
      h = function h(t, n) {
    for (var r = n && n.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e) {
      void 0 !== t[e] && (r[e] = t[e]);
    }

    return r;
  },
      b = {
    arrayToObject: h,
    assign: function assign(t, n) {
      return Object.keys(n).reduce(function (t, r) {
        return t[r] = n[r], t;
      }, t);
    },
    combine: function combine(t, n) {
      return [].concat(t, n);
    },
    compact: function compact(t) {
      for (var n = [{
        obj: {
          o: t
        },
        prop: "o"
      }], r = [], e = 0; e < n.length; ++e) {
        for (var i = n[e], o = i.obj[i.prop], u = Object.keys(o), f = 0; f < u.length; ++f) {
          var c = u[f],
              a = o[c];
          "object" == _typeof(a) && null !== a && -1 === r.indexOf(a) && (n.push({
            obj: o,
            prop: c
          }), r.push(a));
        }
      }

      return function (t) {
        for (; t.length > 1;) {
          var n = t.pop(),
              r = n.obj[n.prop];

          if (d(r)) {
            for (var e = [], i = 0; i < r.length; ++i) {
              void 0 !== r[i] && e.push(r[i]);
            }

            n.obj[n.prop] = e;
          }
        }
      }(n), t;
    },
    decode: function decode(t, n, r) {
      var e = t.replace(/\+/g, " ");
      if ("iso-8859-1" === r) return e.replace(/%[0-9a-f]{2}/gi, unescape);

      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    },
    encode: function encode(t, n, r, e, i) {
      if (0 === t.length) return t;
      var o = t;
      if ("symbol" == _typeof(t) ? o = Symbol.prototype.toString.call(t) : "string" != typeof t && (o = String(t)), "iso-8859-1" === r) return escape(o).replace(/%u[0-9a-f]{4}/gi, function (t) {
        return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
      });

      for (var u = "", f = 0; f < o.length; ++f) {
        var c = o.charCodeAt(f);
        45 === c || 46 === c || 95 === c || 126 === c || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || i === v.RFC1738 && (40 === c || 41 === c) ? u += o.charAt(f) : c < 128 ? u += y[c] : c < 2048 ? u += y[192 | c >> 6] + y[128 | 63 & c] : c < 55296 || c >= 57344 ? u += y[224 | c >> 12] + y[128 | c >> 6 & 63] + y[128 | 63 & c] : (c = 65536 + ((1023 & c) << 10 | 1023 & o.charCodeAt(f += 1)), u += y[240 | c >> 18] + y[128 | c >> 12 & 63] + y[128 | c >> 6 & 63] + y[128 | 63 & c]);
      }

      return u;
    },
    isBuffer: function isBuffer(t) {
      return !(!t || "object" != _typeof(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
    },
    isRegExp: function isRegExp(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    },
    maybeMap: function maybeMap(t, n) {
      if (d(t)) {
        for (var r = [], e = 0; e < t.length; e += 1) {
          r.push(n(t[e]));
        }

        return r;
      }

      return n(t);
    },
    merge: function t(n, r, e) {
      if (!r) return n;

      if ("object" != _typeof(r)) {
        if (d(n)) n.push(r);else {
          if (!n || "object" != _typeof(n)) return [n, r];
          (e && (e.plainObjects || e.allowPrototypes) || !p.call(Object.prototype, r)) && (n[r] = !0);
        }
        return n;
      }

      if (!n || "object" != _typeof(n)) return [n].concat(r);
      var i = n;
      return d(n) && !d(r) && (i = h(n, e)), d(n) && d(r) ? (r.forEach(function (r, i) {
        if (p.call(n, i)) {
          var o = n[i];
          o && "object" == _typeof(o) && r && "object" == _typeof(r) ? n[i] = t(o, r, e) : n.push(r);
        } else n[i] = r;
      }), n) : Object.keys(r).reduce(function (n, i) {
        var o = r[i];
        return n[i] = p.call(n, i) ? t(n[i], o, e) : o, n;
      }, i);
    }
  },
      g = Object.prototype.hasOwnProperty,
      m = {
    brackets: function brackets(t) {
      return t + "[]";
    },
    comma: "comma",
    indices: function indices(t, n) {
      return t + "[" + n + "]";
    },
    repeat: function repeat(t) {
      return t;
    }
  },
      j = Array.isArray,
      O = String.prototype.split,
      w = Array.prototype.push,
      R = function R(t, n) {
    w.apply(t, j(n) ? n : [n]);
  },
      E = Date.prototype.toISOString,
      S = v["default"],
      k = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: b.encode,
    encodeValuesOnly: !1,
    format: S,
    formatter: v.formatters[S],
    indices: !1,
    serializeDate: function serializeDate(t) {
      return E.call(t);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
      x = function t(n, r, e, i, o, u, f, c, a, l, s, v, p, d) {
    var y,
        h = n;

    if ("function" == typeof f ? h = f(r, h) : h instanceof Date ? h = l(h) : "comma" === e && j(h) && (h = b.maybeMap(h, function (t) {
      return t instanceof Date ? l(t) : t;
    })), null === h) {
      if (i) return u && !p ? u(r, k.encoder, d, "key", s) : r;
      h = "";
    }

    if ("string" == typeof (y = h) || "number" == typeof y || "boolean" == typeof y || "symbol" == _typeof(y) || "bigint" == typeof y || b.isBuffer(h)) {
      if (u) {
        var g = p ? r : u(r, k.encoder, d, "key", s);

        if ("comma" === e && p) {
          for (var m = O.call(String(h), ","), w = "", E = 0; E < m.length; ++E) {
            w += (0 === E ? "" : ",") + v(u(m[E], k.encoder, d, "value", s));
          }

          return [v(g) + "=" + w];
        }

        return [v(g) + "=" + v(u(h, k.encoder, d, "value", s))];
      }

      return [v(r) + "=" + v(String(h))];
    }

    var S,
        x = [];
    if (void 0 === h) return x;
    if ("comma" === e && j(h)) S = [{
      value: h.length > 0 ? h.join(",") || null : void 0
    }];else if (j(f)) S = f;else {
      var T = Object.keys(h);
      S = c ? T.sort(c) : T;
    }

    for (var C = 0; C < S.length; ++C) {
      var N = S[C],
          F = "object" == _typeof(N) && void 0 !== N.value ? N.value : h[N];

      if (!o || null !== F) {
        var D = j(h) ? "function" == typeof e ? e(r, N) : r : r + (a ? "." + N : "[" + N + "]");
        R(x, t(F, D, e, i, o, u, f, c, a, l, s, v, p, d));
      }
    }

    return x;
  },
      T = Object.prototype.hasOwnProperty,
      C = Array.isArray,
      N = {
    allowDots: !1,
    allowPrototypes: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: b.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
      F = function F(t) {
    return t.replace(/&#(\d+);/g, function (t, n) {
      return String.fromCharCode(parseInt(n, 10));
    });
  },
      D = function D(t, n) {
    return t && "string" == typeof t && n.comma && t.indexOf(",") > -1 ? t.split(",") : t;
  },
      $ = function $(t, n, r, e) {
    if (t) {
      var i = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          o = /(\[[^[\]]*])/g,
          u = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
          f = u ? i.slice(0, u.index) : i,
          c = [];

      if (f) {
        if (!r.plainObjects && T.call(Object.prototype, f) && !r.allowPrototypes) return;
        c.push(f);
      }

      for (var a = 0; r.depth > 0 && null !== (u = o.exec(i)) && a < r.depth;) {
        if (a += 1, !r.plainObjects && T.call(Object.prototype, u[1].slice(1, -1)) && !r.allowPrototypes) return;
        c.push(u[1]);
      }

      return u && c.push("[" + i.slice(u.index) + "]"), function (t, n, r, e) {
        for (var i = e ? n : D(n, r), o = t.length - 1; o >= 0; --o) {
          var u,
              f = t[o];
          if ("[]" === f && r.parseArrays) u = [].concat(i);else {
            u = r.plainObjects ? Object.create(null) : {};
            var c = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                a = parseInt(c, 10);
            r.parseArrays || "" !== c ? !isNaN(a) && f !== c && String(a) === c && a >= 0 && r.parseArrays && a <= r.arrayLimit ? (u = [])[a] = i : "__proto__" !== c && (u[c] = i) : u = {
              0: i
            };
          }
          i = u;
        }

        return i;
      }(c, n, r, e);
    }
  },
      A = /*#__PURE__*/function () {
    function t(t, n, r) {
      var e, i;
      this.name = t, this.definition = n, this.bindings = null != (e = n.bindings) ? e : {}, this.wheres = null != (i = n.wheres) ? i : {}, this.config = r;
    }

    var n = t.prototype;
    return n.matchesUrl = function (t) {
      if (!this.definition.methods.includes("GET")) return !1;
      var n = this.template.replace(/\/{[^}?]*\?}/g, "(/[^/?]+)?").replace(/{[^}?]*\?}/g, "([^/?]+)?").replace(/{[^}]+}/g, "[^/?]+").replace(/^\w+:\/\//, "");
      return new RegExp("^" + n + "$").test(t.replace(/\/+$/, "").split("?").shift());
    }, n.compile = function (t) {
      var n = this;
      return this.parameterSegments.length ? this.template.replace(/{([^}?]+)\??}/g, function (r, e) {
        var i, o;
        if ([null, void 0].includes(t[e]) && n.parameterSegments.find(function (t) {
          return t.name === e;
        }).required) throw new Error("Ziggy error: '" + e + "' parameter is required for route '" + n.name + "'.");
        return n.parameterSegments[n.parameterSegments.length - 1].name === e && ".*" === n.wheres[e] ? null != (o = t[e]) ? o : "" : encodeURIComponent(null != (i = t[e]) ? i : "");
      }).replace(/\/+$/, "") : this.template;
    }, r(t, [{
      key: "template",
      get: function get() {
        return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
      }
    }, {
      key: "parameterSegments",
      get: function get() {
        var t, n;
        return null != (t = null == (n = this.template.match(/{[^}?]+\??}/g)) ? void 0 : n.map(function (t) {
          return {
            name: t.replace(/{|\??}/g, ""),
            required: !/\?}$/.test(t)
          };
        })) ? t : [];
      }
    }]), t;
  }(),
      B = /*#__PURE__*/function (t) {
    var n, i;

    function u(n, r, i, o) {
      var u;

      if (void 0 === i && (i = !0), (u = t.call(this) || this).t = null != o ? o : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u.t = e({}, u.t, {
        absolute: i
      }), n) {
        if (!u.t.routes[n]) throw new Error("Ziggy error: route '" + n + "' is not in the route list.");
        u.i = new A(n, u.t.routes[n], u.t), u.u = u.l(r);
      }

      return u;
    }

    i = t, (n = u).prototype = Object.create(i.prototype), n.prototype.constructor = n, o(n, i);
    var f = u.prototype;
    return f.toString = function () {
      var t = this,
          n = Object.keys(this.u).filter(function (n) {
        return !t.i.parameterSegments.some(function (t) {
          return t.name === n;
        });
      }).filter(function (t) {
        return "_query" !== t;
      }).reduce(function (n, r) {
        var i;
        return e({}, n, ((i = {})[r] = t.u[r], i));
      }, {});
      return this.i.compile(this.u) + function (t, n) {
        var r,
            e = t,
            i = function (t) {
          if (!t) return k;
          if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
          var n = t.charset || k.charset;
          if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          var r = v["default"];

          if (void 0 !== t.format) {
            if (!g.call(v.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            r = t.format;
          }

          var e = v.formatters[r],
              i = k.filter;
          return ("function" == typeof t.filter || j(t.filter)) && (i = t.filter), {
            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : k.addQueryPrefix,
            allowDots: void 0 === t.allowDots ? k.allowDots : !!t.allowDots,
            charset: n,
            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : k.charsetSentinel,
            delimiter: void 0 === t.delimiter ? k.delimiter : t.delimiter,
            encode: "boolean" == typeof t.encode ? t.encode : k.encode,
            encoder: "function" == typeof t.encoder ? t.encoder : k.encoder,
            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : k.encodeValuesOnly,
            filter: i,
            format: r,
            formatter: e,
            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : k.serializeDate,
            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : k.skipNulls,
            sort: "function" == typeof t.sort ? t.sort : null,
            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : k.strictNullHandling
          };
        }(n);

        "function" == typeof i.filter ? e = (0, i.filter)("", e) : j(i.filter) && (r = i.filter);
        var o = [];
        if ("object" != _typeof(e) || null === e) return "";
        var u = m[n && n.arrayFormat in m ? n.arrayFormat : n && "indices" in n ? n.indices ? "indices" : "repeat" : "indices"];
        r || (r = Object.keys(e)), i.sort && r.sort(i.sort);

        for (var f = 0; f < r.length; ++f) {
          var c = r[f];
          i.skipNulls && null === e[c] || R(o, x(e[c], c, u, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset));
        }

        var a = o.join(i.delimiter),
            l = !0 === i.addQueryPrefix ? "?" : "";
        return i.charsetSentinel && (l += "iso-8859-1" === i.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), a.length > 0 ? l + a : "";
      }(e({}, n, this.u._query), {
        addQueryPrefix: !0,
        arrayFormat: "indices",
        encodeValuesOnly: !0,
        skipNulls: !0,
        encoder: function encoder(t, n) {
          return "boolean" == typeof t ? Number(t) : n(t);
        }
      });
    }, f.current = function (t, n) {
      var r = this,
          e = this.t.absolute ? this.v().host + this.v().pathname : this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/"),
          i = Object.entries(this.t.routes).find(function (n) {
        return new A(t, n[1], r.t).matchesUrl(e);
      }) || [void 0, void 0],
          o = i[0],
          u = i[1];
      if (!t) return o;
      var f = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
      if ([null, void 0].includes(n) || !f) return f;
      var c = new A(o, u, this.t);
      n = this.l(n, c);
      var a = this.p(u);
      return !(!Object.values(n).every(function (t) {
        return !t;
      }) || Object.values(a).length) || Object.entries(n).every(function (t) {
        return a[t[0]] == t[1];
      });
    }, f.v = function () {
      var t,
          n,
          r,
          e,
          i,
          o,
          u = "undefined" != typeof window ? window.location : {},
          f = u.host,
          c = u.pathname,
          a = u.search;
      return {
        host: null != (t = null == (n = this.t.location) ? void 0 : n.host) ? t : void 0 === f ? "" : f,
        pathname: null != (r = null == (e = this.t.location) ? void 0 : e.pathname) ? r : void 0 === c ? "" : c,
        search: null != (i = null == (o = this.t.location) ? void 0 : o.search) ? i : void 0 === a ? "" : a
      };
    }, f.has = function (t) {
      return Object.keys(this.t.routes).includes(t);
    }, f.l = function (t, n) {
      var r = this;
      void 0 === t && (t = {}), void 0 === n && (n = this.i), t = ["string", "number"].includes(_typeof(t)) ? [t] : t;
      var i = n.parameterSegments.filter(function (t) {
        return !r.t.defaults[t.name];
      });
      if (Array.isArray(t)) t = t.reduce(function (t, n, r) {
        var o, u;
        return e({}, t, i[r] ? ((o = {})[i[r].name] = n, o) : ((u = {})[n] = "", u));
      }, {});else if (1 === i.length && !t[i[0].name] && (t.hasOwnProperty(Object.values(n.bindings)[0]) || t.hasOwnProperty("id"))) {
        var o;
        (o = {})[i[0].name] = t, t = o;
      }
      return e({}, this.h(n), this.g(t, n));
    }, f.h = function (t) {
      var n = this;
      return t.parameterSegments.filter(function (t) {
        return n.t.defaults[t.name];
      }).reduce(function (t, r, i) {
        var o,
            u = r.name;
        return e({}, t, ((o = {})[u] = n.t.defaults[u], o));
      }, {});
    }, f.g = function (t, n) {
      var r = n.bindings,
          i = n.parameterSegments;
      return Object.entries(t).reduce(function (t, n) {
        var o,
            u,
            f = n[0],
            c = n[1];
        if (!c || "object" != _typeof(c) || Array.isArray(c) || !i.some(function (t) {
          return t.name === f;
        })) return e({}, t, ((u = {})[f] = c, u));

        if (!c.hasOwnProperty(r[f])) {
          if (!c.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + r[f] + "'.");
          r[f] = "id";
        }

        return e({}, t, ((o = {})[f] = c[r[f]], o));
      }, {});
    }, f.p = function (t) {
      var n,
          r = this.v().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, ""),
          i = function i(t, n, r) {
        void 0 === n && (n = "");
        var i = [t, n].map(function (t) {
          return t.split(r);
        }),
            o = i[0];
        return i[1].reduce(function (t, n, r) {
          var i;
          return /{[^}?]+\??}/.test(n) && o[r] ? e({}, t, ((i = {})[n.replace(/.*{|\??}.*/g, "")] = o[r].replace(n.match(/^[^{]*/g), "").replace(n.match(/[^}]*$/g), ""), i)) : t;
        }, {});
      };

      return e({}, i(this.v().host, t.domain, "."), i(r, t.uri, "/"), function (t, n) {
        var r = N;
        if ("" === t || null == t) return r.plainObjects ? Object.create(null) : {};

        for (var e = "string" == typeof t ? function (t, n) {
          var r,
              e = {},
              i = (n.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(n.delimiter, Infinity === n.parameterLimit ? void 0 : n.parameterLimit),
              o = -1,
              u = n.charset;
          if (n.charsetSentinel) for (r = 0; r < i.length; ++r) {
            0 === i[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === i[r] ? u = "utf-8" : "utf8=%26%2310003%3B" === i[r] && (u = "iso-8859-1"), o = r, r = i.length);
          }

          for (r = 0; r < i.length; ++r) {
            if (r !== o) {
              var f,
                  c,
                  a = i[r],
                  l = a.indexOf("]="),
                  s = -1 === l ? a.indexOf("=") : l + 1;
              -1 === s ? (f = n.decoder(a, N.decoder, u, "key"), c = n.strictNullHandling ? null : "") : (f = n.decoder(a.slice(0, s), N.decoder, u, "key"), c = b.maybeMap(D(a.slice(s + 1), n), function (t) {
                return n.decoder(t, N.decoder, u, "value");
              })), c && n.interpretNumericEntities && "iso-8859-1" === u && (c = F(c)), a.indexOf("[]=") > -1 && (c = C(c) ? [c] : c), e[f] = T.call(e, f) ? b.combine(e[f], c) : c;
            }
          }

          return e;
        }(t, r) : t, i = r.plainObjects ? Object.create(null) : {}, o = Object.keys(e), u = 0; u < o.length; ++u) {
          var f = o[u],
              c = $(f, e[f], r, "string" == typeof t);
          i = b.merge(i, c, r);
        }

        return b.compact(i);
      }(null == (n = this.v().search) ? void 0 : n.replace(/^\?/, "")));
    }, f.valueOf = function () {
      return this.toString();
    }, f.check = function (t) {
      return this.has(t);
    }, r(u, [{
      key: "params",
      get: function get() {
        return this.p(this.t.routes[this.current()]);
      }
    }]), u;
  }( /*#__PURE__*/c(String));

  t.ZiggyVue = {
    install: function install(t, n) {
      return t.mixin({
        methods: {
          route: function route(t, r, e, i) {
            return void 0 === i && (i = n), function (t, n, r, e) {
              var i = new B(t, n, r, e);
              return t ? i.toString() : i;
            }(t, r, e, i);
          }
        }
      });
    }
  };
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": [
		"./resources/js/Pages/About.vue",
		"/js/vendor",
		"resources_js_Pages_About_vue"
	],
	"./About.vue": [
		"./resources/js/Pages/About.vue",
		"/js/vendor",
		"resources_js_Pages_About_vue"
	],
	"./Contact": [
		"./resources/js/Pages/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Contact_vue"
	],
	"./Contact.vue": [
		"./resources/js/Pages/Contact.vue",
		"/js/vendor",
		"resources_js_Pages_Contact_vue"
	],
	"./Home": [
		"./resources/js/Pages/Home.vue",
		"/js/vendor",
		"resources_js_Pages_Home_vue"
	],
	"./Home.vue": [
		"./resources/js/Pages/Home.vue",
		"/js/vendor",
		"resources_js_Pages_Home_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);