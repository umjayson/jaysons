!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "d2b2e6d8-9b5f-4f94-95bd-22c03764a47f"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-d2b2e6d8-9b5f-4f94-95bd-22c03764a47f"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2366],
    {
      29288: function (e) {
        var t;
        "undefined" != typeof self && self,
          (t = function () {
            return (function (e) {
              function t(r) {
                if (i[r]) return i[r].exports;
                var n = (i[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports
                );
              }
              var i = {};
              return (
                (t.m = e),
                (t.c = i),
                (t.d = function (e, i, r) {
                  t.o(e, i) ||
                    Object.defineProperty(e, i, {
                      configurable: !1,
                      enumerable: !0,
                      get: r,
                    });
                }),
                (t.n = function (e) {
                  var i =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return t.d(i, "a", i), i;
                }),
                (t.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (t.p = ""),
                t((t.s = 18))
              );
            })([
              function (e, t, i) {
                (function (t) {
                  var i;
                  (i =
                    "undefined" != typeof window
                      ? window
                      : void 0 !== t
                      ? t
                      : "undefined" != typeof self
                      ? self
                      : {}),
                    (e.exports = i);
                }.call(t, i(6)));
              },
              function (e, t) {
                function i(e, t, i) {
                  var r = e[t];
                  (y.call(e, t) && a(r, i) && (void 0 !== i || t in e)) ||
                    (e[t] = i);
                }
                function r(e, t) {
                  return (
                    !!(t = null == t ? c : t) &&
                    ("number" == typeof e || E.test(e)) &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e < t
                  );
                }
                function n(e) {
                  var t = e && e.constructor;
                  return e === (("function" == typeof t && t.prototype) || m);
                }
                function a(e, t) {
                  return e === t || (e != e && t != t);
                }
                function s(e) {
                  var t, i;
                  return (
                    null != e &&
                    "number" == typeof (t = e.length) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t <= c &&
                    !((i = o(e) ? v.call(e) : "") == p || i == f)
                  );
                }
                function o(e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t);
                }
                var l,
                  d,
                  _,
                  u,
                  h,
                  c = 9007199254740991,
                  p = "[object Function]",
                  f = "[object GeneratorFunction]",
                  E = /^(?:0|[1-9]\d*)$/,
                  m = Object.prototype,
                  y = m.hasOwnProperty,
                  v = m.toString,
                  g = m.propertyIsEnumerable,
                  R =
                    ((l = Object.keys),
                    (d = Object),
                    function (e) {
                      return l(d(e));
                    }),
                  S = Math.max,
                  T = !g.call({ valueOf: 1 }, "valueOf"),
                  A = Array.isArray,
                  L =
                    ((_ = function (e, t) {
                      if (T || n(t) || s(t))
                        return void (function (e, t, r, n) {
                          r || (r = {});
                          for (var a = -1, s = t.length; ++a < s; ) {
                            var o = t[a],
                              l = void 0;
                            i(r, o, void 0 === l ? e[o] : l);
                          }
                        })(
                          t,
                          s(t)
                            ? (function (e, t) {
                                var i =
                                    A(e) ||
                                    (e &&
                                      "object" == typeof e &&
                                      s(e) &&
                                      y.call(e, "callee") &&
                                      (!g.call(e, "callee") ||
                                        "[object Arguments]" == v.call(e)))
                                      ? (function (e, t) {
                                          for (
                                            var i = -1, r = Array(e);
                                            ++i < e;

                                          )
                                            r[i] = t(i);
                                          return r;
                                        })(e.length, String)
                                      : [],
                                  n = i.length,
                                  a = !!n;
                                for (var o in e)
                                  !y.call(e, o) ||
                                    (a && ("length" == o || r(o, n))) ||
                                    i.push(o);
                                return i;
                              })(t)
                            : (function (e) {
                                if (!n(e)) return R(e);
                                var t = [];
                                for (var i in Object(e))
                                  y.call(e, i) &&
                                    "constructor" != i &&
                                    t.push(i);
                                return t;
                              })(t),
                          e
                        );
                      for (var a in t) y.call(t, a) && i(e, a, t[a]);
                    }),
                    (u = function (e, t) {
                      var i = -1,
                        n = t.length,
                        l = n > 1 ? t[n - 1] : void 0,
                        d = n > 2 ? t[2] : void 0;
                      for (
                        l =
                          _.length > 3 && "function" == typeof l
                            ? (n--, l)
                            : void 0,
                          d &&
                            (function (e, t, i) {
                              if (!o(i)) return !1;
                              var n = typeof t;
                              return (
                                !!("number" == n
                                  ? s(i) && r(t, i.length)
                                  : "string" == n && (t in i)) && a(i[t], e)
                              );
                            })(t[0], t[1], d) &&
                            ((l = n < 3 ? void 0 : l), (n = 1)),
                          e = Object(e);
                        ++i < n;

                      ) {
                        var u = t[i];
                        u && _(e, u, i, l);
                      }
                      return e;
                    }),
                    (h = S(void 0 === h ? u.length - 1 : h, 0)),
                    function () {
                      for (
                        var e = arguments,
                          t = -1,
                          i = S(e.length - h, 0),
                          r = Array(i);
                        ++t < i;

                      )
                        r[t] = e[h + t];
                      t = -1;
                      for (var n = Array(h + 1); ++t < h; ) n[t] = e[t];
                      return (
                        (n[h] = r),
                        (function (e, t, i) {
                          switch (i.length) {
                            case 0:
                              return e.call(t);
                            case 1:
                              return e.call(t, i[0]);
                            case 2:
                              return e.call(t, i[0], i[1]);
                            case 3:
                              return e.call(t, i[0], i[1], i[2]);
                          }
                          return e.apply(t, i);
                        })(u, this, n)
                      );
                    });
                e.exports = L;
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e, t, i) {
                    (i = void 0 === i ? 1 : i), (e[t] = e[t] || 0), (e[t] += i);
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r },
                  a = {};
                (a.now = function () {
                  var e = n.default.performance,
                    t = e && e.timing;
                  return t &&
                    "number" == typeof t.navigationStart &&
                    "function" == typeof e.now
                    ? t.navigationStart + e.now()
                    : Date.now();
                }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(20)) && r.__esModule ? r : { default: r },
                  a = n.default.methodFactory;
                (n.default.methodFactory = function (e, t, i) {
                  var r = a(e, t, i);
                  return function () {
                    for (var e = ["[mux]"], t = 0; t < arguments.length; t++)
                      e.push(arguments[t]);
                    r.apply(void 0, e);
                  };
                }),
                  n.default.setLevel(n.default.getLevel()),
                  (t.default = n.default);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = function (e) {
                  if ("string" != typeof e || "" === e) return ["localhost"];
                  var t = (e.match(
                      /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
                    ) || [])[4],
                    i = void 0;
                  return (
                    t && (i = (t.match(/[^\.]+\.[^\.]+$/) || [])[0]), [t, i]
                  );
                };
                (t.extractHostnameAndDomain = r),
                  (t.extractHostname = function (e) {
                    return r(e)[0];
                  }),
                  (t.extractDomain = function (e) {
                    return r(e)[1];
                  });
              },
              function (e, t) {
                var i;
                i = (function () {
                  return this;
                })();
                try {
                  i = i || Function("return this")() || (0, eval)("this");
                } catch (e) {
                  "object" == typeof window && (i = window);
                }
                e.exports = i;
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.generateUUID = function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                      /[xy]/g,
                      function (e) {
                        var t = (16 * Math.random()) | 0;
                        return ("x" === e ? t : (3 & t) | 8).toString(16);
                      }
                    );
                  }),
                  (t.generateShortID = function () {
                    return (
                      "000000" +
                      ((2176782336 * Math.random()) << 0).toString(36)
                    ).slice(-6);
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e) {
                    var t = {};
                    return (
                      (e = e || "")
                        .trim()
                        .split(/[\r\n]+/)
                        .forEach(function (e) {
                          if (e) {
                            var i = e.split(": "),
                              n = i.shift();
                            n &&
                              r.indexOf(n.toLowerCase()) >= 0 &&
                              (t[n] = i.join(": "));
                          }
                        }),
                      t
                    );
                  });
                var r = ["x-cdn", "content-type"];
              },
              function (e, t, i) {
                "use strict";
                var r = SyntaxError,
                  n = Function,
                  a = TypeError,
                  s = function (e) {
                    try {
                      return n(
                        '"use strict"; return (' + e + ").constructor;"
                      )();
                    } catch (e) {}
                  },
                  o = Object.getOwnPropertyDescriptor;
                if (o)
                  try {
                    o({}, "");
                  } catch (e) {
                    o = null;
                  }
                var l = function () {
                    throw new a();
                  },
                  d = o
                    ? (function () {
                        try {
                          return arguments.callee, l;
                        } catch (e) {
                          try {
                            return o(arguments, "callee").get;
                          } catch (e) {
                            return l;
                          }
                        }
                      })()
                    : l,
                  _ = i(46)(),
                  u =
                    Object.getPrototypeOf ||
                    function (e) {
                      return e.__proto__;
                    },
                  h = {},
                  c = "undefined" == typeof Uint8Array ? void 0 : u(Uint8Array),
                  p = {
                    "%AggregateError%":
                      "undefined" == typeof AggregateError
                        ? void 0
                        : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%":
                      "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
                    "%ArrayIteratorPrototype%": _
                      ? u([][Symbol.iterator]())
                      : void 0,
                    "%AsyncFromSyncIteratorPrototype%": void 0,
                    "%AsyncFunction%": h,
                    "%AsyncGenerator%": h,
                    "%AsyncGeneratorFunction%": h,
                    "%AsyncIteratorPrototype%": h,
                    "%Atomics%":
                      "undefined" == typeof Atomics ? void 0 : Atomics,
                    "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
                    "%Boolean%": Boolean,
                    "%DataView%":
                      "undefined" == typeof DataView ? void 0 : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%":
                      "undefined" == typeof Float32Array
                        ? void 0
                        : Float32Array,
                    "%Float64Array%":
                      "undefined" == typeof Float64Array
                        ? void 0
                        : Float64Array,
                    "%FinalizationRegistry%":
                      "undefined" == typeof FinalizationRegistry
                        ? void 0
                        : FinalizationRegistry,
                    "%Function%": n,
                    "%GeneratorFunction%": h,
                    "%Int8Array%":
                      "undefined" == typeof Int8Array ? void 0 : Int8Array,
                    "%Int16Array%":
                      "undefined" == typeof Int16Array ? void 0 : Int16Array,
                    "%Int32Array%":
                      "undefined" == typeof Int32Array ? void 0 : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": _
                      ? u(u([][Symbol.iterator]()))
                      : void 0,
                    "%JSON%": "object" == typeof JSON ? JSON : void 0,
                    "%Map%": "undefined" == typeof Map ? void 0 : Map,
                    "%MapIteratorPrototype%":
                      "undefined" != typeof Map && _
                        ? u(new Map()[Symbol.iterator]())
                        : void 0,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%":
                      "undefined" == typeof Promise ? void 0 : Promise,
                    "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%":
                      "undefined" == typeof Reflect ? void 0 : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" == typeof Set ? void 0 : Set,
                    "%SetIteratorPrototype%":
                      "undefined" != typeof Set && _
                        ? u(new Set()[Symbol.iterator]())
                        : void 0,
                    "%SharedArrayBuffer%":
                      "undefined" == typeof SharedArrayBuffer
                        ? void 0
                        : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": _
                      ? u(""[Symbol.iterator]())
                      : void 0,
                    "%Symbol%": _ ? Symbol : void 0,
                    "%SyntaxError%": r,
                    "%ThrowTypeError%": d,
                    "%TypedArray%": c,
                    "%TypeError%": a,
                    "%Uint8Array%":
                      "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
                    "%Uint8ClampedArray%":
                      "undefined" == typeof Uint8ClampedArray
                        ? void 0
                        : Uint8ClampedArray,
                    "%Uint16Array%":
                      "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
                    "%Uint32Array%":
                      "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%":
                      "undefined" == typeof WeakMap ? void 0 : WeakMap,
                    "%WeakRef%":
                      "undefined" == typeof WeakRef ? void 0 : WeakRef,
                    "%WeakSet%":
                      "undefined" == typeof WeakSet ? void 0 : WeakSet,
                  },
                  f = function e(t) {
                    var i;
                    if ("%AsyncFunction%" === t) i = s("async function () {}");
                    else if ("%GeneratorFunction%" === t)
                      i = s("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t)
                      i = s("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                      var r = e("%AsyncGeneratorFunction%");
                      r && (i = r.prototype);
                    } else if ("%AsyncIteratorPrototype%" === t) {
                      var n = e("%AsyncGenerator%");
                      n && (i = u(n.prototype));
                    }
                    return (p[t] = i), i;
                  },
                  E = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": [
                      "AsyncGeneratorFunction",
                      "prototype",
                      "prototype",
                    ],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": [
                      "GeneratorFunction",
                      "prototype",
                      "prototype",
                    ],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": [
                      "ReferenceError",
                      "prototype",
                    ],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": [
                      "SharedArrayBuffer",
                      "prototype",
                    ],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": [
                      "Uint8ClampedArray",
                      "prototype",
                    ],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"],
                  },
                  m = i(10),
                  y = i(49),
                  v = m.call(Function.call, Array.prototype.concat),
                  g = m.call(Function.apply, Array.prototype.splice),
                  R = m.call(Function.call, String.prototype.replace),
                  S = m.call(Function.call, String.prototype.slice),
                  T =
                    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                  A = /\\(\\)?/g,
                  L = function (e) {
                    var t = S(e, 0, 1),
                      i = S(e, -1);
                    if ("%" === t && "%" !== i)
                      throw new r(
                        "invalid intrinsic syntax, expected closing `%`"
                      );
                    if ("%" === i && "%" !== t)
                      throw new r(
                        "invalid intrinsic syntax, expected opening `%`"
                      );
                    var n = [];
                    return (
                      R(e, T, function (e, t, i, r) {
                        n[n.length] = i ? R(r, A, "$1") : t || e;
                      }),
                      n
                    );
                  },
                  P = function (e, t) {
                    var i,
                      n = e;
                    if ((y(E, n) && (n = "%" + (i = E[n])[0] + "%"), y(p, n))) {
                      var s = p[n];
                      if ((s === h && (s = f(n)), void 0 === s && !t))
                        throw new a(
                          "intrinsic " +
                            e +
                            " exists, but is not available. Please file an issue!"
                        );
                      return { alias: i, name: n, value: s };
                    }
                    throw new r("intrinsic " + e + " does not exist!");
                  };
                e.exports = function (e, t) {
                  if ("string" != typeof e || 0 === e.length)
                    throw new a("intrinsic name must be a non-empty string");
                  if (arguments.length > 1 && "boolean" != typeof t)
                    throw new a('"allowMissing" argument must be a boolean');
                  var i = L(e),
                    n = i.length > 0 ? i[0] : "",
                    s = P("%" + n + "%", t),
                    l = s.name,
                    d = s.value,
                    _ = !1,
                    u = s.alias;
                  u && ((n = u[0]), g(i, v([0, 1], u)));
                  for (var h = 1, c = !0; h < i.length; h += 1) {
                    var f = i[h],
                      E = S(f, 0, 1),
                      m = S(f, -1);
                    if (
                      ('"' === E ||
                        "'" === E ||
                        "`" === E ||
                        '"' === m ||
                        "'" === m ||
                        "`" === m) &&
                      E !== m
                    )
                      throw new r(
                        "property names with quotes must have matching quotes"
                      );
                    if (
                      (("constructor" !== f && c) || (_ = !0),
                      (n += "." + f),
                      y(p, (l = "%" + n + "%")))
                    )
                      d = p[l];
                    else if (null != d) {
                      if (!(f in d)) {
                        if (!t)
                          throw new a(
                            "base intrinsic for " +
                              e +
                              " exists, but the property is not available."
                          );
                        return;
                      }
                      if (o && h + 1 >= i.length) {
                        var R = o(d, f);
                        d =
                          (c = !!R) && "get" in R && !("originalValue" in R.get)
                            ? R.get
                            : d[f];
                      } else (c = y(d, f)), (d = d[f]);
                      c && !_ && (p[l] = d);
                    }
                  }
                  return d;
                };
              },
              function (e, t, i) {
                "use strict";
                var r = i(48);
                e.exports = Function.prototype.bind || r;
              },
              function (e, t, i) {
                "use strict";
                var r = String.prototype.replace,
                  n = /%20/g,
                  a = "RFC3986";
                e.exports = {
                  default: a,
                  formatters: {
                    RFC1738: function (e) {
                      return r.call(e, n, "+");
                    },
                    RFC3986: function (e) {
                      return String(e);
                    },
                  },
                  RFC1738: "RFC1738",
                  RFC3986: a,
                };
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.findMediaElement = t.getMuxPlayerId = void 0);
                var r = i(7),
                  n = function (e) {
                    return e && void 0 !== e.nodeName
                      ? (e.muxId ||
                          (e.muxId = e.id || (0, r.generateShortID)()),
                        e.muxId)
                      : e;
                  };
                (t.getMuxPlayerId = n),
                  (t.findMediaElement = function (e) {
                    var t = void 0;
                    return (
                      e && void 0 !== e.nodeName
                        ? (e = n((t = e)))
                        : (t = document.querySelector(e)),
                      [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
                    );
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    return (
                      "1" ===
                      (n.default.doNotTrack ||
                        (n.default.navigator &&
                          (n.default.navigator.doNotTrack ||
                            n.default.navigator.msDoNotTrack)))
                    );
                  });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r };
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r },
                  a = {};
                (a.exists = function () {
                  var e = n.default.performance;
                  return void 0 !== (e && e.timing);
                }),
                  (a.domContentLoadedEventEnd = function () {
                    var e = n.default.performance,
                      t = e && e.timing;
                    return t && t.domContentLoadedEventEnd;
                  }),
                  (a.navigationStart = function () {
                    var e = n.default.performance,
                      t = e && e.timing;
                    return t && t.navigationStart;
                  }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                var r = i(44),
                  n = i(54),
                  a = i(11);
                e.exports = { formats: a, parse: n, stringify: r };
              },
              function (e, t, i) {
                "use strict";
                var r = i(11),
                  n = Object.prototype.hasOwnProperty,
                  a = Array.isArray,
                  s = (function () {
                    for (var e = [], t = 0; t < 256; ++t)
                      e.push(
                        "%" +
                          ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()
                      );
                    return e;
                  })(),
                  o = function (e) {
                    for (; e.length > 1; ) {
                      var t = e.pop(),
                        i = t.obj[t.prop];
                      if (a(i)) {
                        for (var r = [], n = 0; n < i.length; ++n)
                          void 0 !== i[n] && r.push(i[n]);
                        t.obj[t.prop] = r;
                      }
                    }
                  },
                  l = function (e, t) {
                    for (
                      var i = t && t.plainObjects ? Object.create(null) : {},
                        r = 0;
                      r < e.length;
                      ++r
                    )
                      void 0 !== e[r] && (i[r] = e[r]);
                    return i;
                  };
                e.exports = {
                  arrayToObject: l,
                  assign: function (e, t) {
                    return Object.keys(t).reduce(function (e, i) {
                      return (e[i] = t[i]), e;
                    }, e);
                  },
                  combine: function (e, t) {
                    return [].concat(e, t);
                  },
                  compact: function (e) {
                    for (
                      var t = [{ obj: { o: e }, prop: "o" }], i = [], r = 0;
                      r < t.length;
                      ++r
                    )
                      for (
                        var n = t[r],
                          a = n.obj[n.prop],
                          s = Object.keys(a),
                          l = 0;
                        l < s.length;
                        ++l
                      ) {
                        var d = s[l],
                          _ = a[d];
                        "object" == typeof _ &&
                          null !== _ &&
                          -1 === i.indexOf(_) &&
                          (t.push({ obj: a, prop: d }), i.push(_));
                      }
                    return o(t), e;
                  },
                  decode: function (e, t, i) {
                    var r = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === i)
                      return r.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                      return decodeURIComponent(r);
                    } catch (e) {
                      return r;
                    }
                  },
                  encode: function (e, t, i, n, a) {
                    if (0 === e.length) return e;
                    var o = e;
                    if (
                      ("symbol" == typeof e
                        ? (o = Symbol.prototype.toString.call(e))
                        : "string" != typeof e && (o = String(e)),
                      "iso-8859-1" === i)
                    )
                      return escape(o).replace(/%u[0-9a-f]{4}/gi, function (e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                      });
                    for (var l = "", d = 0; d < o.length; ++d) {
                      var _ = o.charCodeAt(d);
                      45 === _ ||
                      46 === _ ||
                      95 === _ ||
                      126 === _ ||
                      (_ >= 48 && _ <= 57) ||
                      (_ >= 65 && _ <= 90) ||
                      (_ >= 97 && _ <= 122) ||
                      (a === r.RFC1738 && (40 === _ || 41 === _))
                        ? (l += o.charAt(d))
                        : _ < 128
                        ? (l += s[_])
                        : _ < 2048
                        ? (l += s[192 | (_ >> 6)] + s[128 | (63 & _)])
                        : _ < 55296 || _ >= 57344
                        ? (l +=
                            s[224 | (_ >> 12)] +
                            s[128 | ((_ >> 6) & 63)] +
                            s[128 | (63 & _)])
                        : ((d += 1),
                          (l +=
                            s[
                              240 |
                                ((_ =
                                  65536 +
                                  (((1023 & _) << 10) |
                                    (1023 & o.charCodeAt(d)))) >>
                                  18)
                            ] +
                            s[128 | ((_ >> 12) & 63)] +
                            s[128 | ((_ >> 6) & 63)] +
                            s[128 | (63 & _)]));
                    }
                    return l;
                  },
                  isBuffer: function (e) {
                    return (
                      !(!e || "object" != typeof e) &&
                      !!(
                        e.constructor &&
                        e.constructor.isBuffer &&
                        e.constructor.isBuffer(e)
                      )
                    );
                  },
                  isRegExp: function (e) {
                    return (
                      "[object RegExp]" === Object.prototype.toString.call(e)
                    );
                  },
                  maybeMap: function (e, t) {
                    if (a(e)) {
                      for (var i = [], r = 0; r < e.length; r += 1)
                        i.push(t(e[r]));
                      return i;
                    }
                    return t(e);
                  },
                  merge: function e(t, i, r) {
                    if (!i) return t;
                    if ("object" != typeof i) {
                      if (a(t)) t.push(i);
                      else {
                        if (!t || "object" != typeof t) return [t, i];
                        ((r && (r.plainObjects || r.allowPrototypes)) ||
                          !n.call(Object.prototype, i)) &&
                          (t[i] = !0);
                      }
                      return t;
                    }
                    if (!t || "object" != typeof t) return [t].concat(i);
                    var s = t;
                    return (
                      a(t) && !a(i) && (s = l(t, r)),
                      a(t) && a(i)
                        ? (i.forEach(function (i, a) {
                            if (n.call(t, a)) {
                              var s = t[a];
                              s &&
                              "object" == typeof s &&
                              i &&
                              "object" == typeof i
                                ? (t[a] = e(s, i, r))
                                : t.push(i);
                            } else t[a] = i;
                          }),
                          t)
                        : Object.keys(i).reduce(function (t, a) {
                            var s = i[a];
                            return (
                              n.call(t, a)
                                ? (t[a] = e(t[a], s, r))
                                : (t[a] = s),
                              t
                            );
                          }, s)
                    );
                  },
                };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function n(e) {
                  var t = {};
                  for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
                  return t;
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e) {
                    var t = {},
                      i = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        var n = !1;
                        if (e.hasOwnProperty(r) && void 0 !== e[r]) {
                          var s = r.split("_"),
                            d = s[0],
                            _ = o[d];
                          _ ||
                            (a.default.info(
                              "Data key word `" +
                                s[0] +
                                "` not expected in " +
                                r
                            ),
                            (_ = d + "_")),
                            s.splice(1).forEach(function (e) {
                              "url" === e && (n = !0),
                                l[e]
                                  ? (_ += l[e])
                                  : Number(e) &&
                                    Math.floor(Number(e)) === Number(e)
                                  ? (_ += e)
                                  : (a.default.info(
                                      "Data key word `" +
                                        e +
                                        "` not expected in " +
                                        r
                                    ),
                                    (_ += "_" + e + "_"));
                            }),
                            n ? (i[_] = e[r]) : (t[_] = e[r]);
                        }
                      }),
                      (0, s.default)(t, i)
                    );
                  });
                var a = r(i(4)),
                  s = r(i(1)),
                  o = n({
                    a: "env",
                    b: "beacon",
                    c: "custom",
                    d: "ad",
                    e: "event",
                    f: "experiment",
                    m: "mux",
                    n: "response",
                    p: "player",
                    q: "request",
                    r: "retry",
                    s: "session",
                    t: "timestamp",
                    u: "viewer",
                    v: "video",
                    w: "page",
                    x: "view",
                    y: "sub",
                  }),
                  l = n({
                    ad: "ad",
                    ag: "aggregate",
                    ap: "api",
                    al: "application",
                    ar: "architecture",
                    as: "asset",
                    au: "autoplay",
                    av: "average",
                    bi: "bitrate",
                    br: "break",
                    bw: "browser",
                    by: "bytes",
                    ca: "cached",
                    cb: "cancel",
                    cd: "code",
                    cg: "category",
                    ch: "changed",
                    cn: "config",
                    co: "count",
                    ce: "counter",
                    cp: "complete",
                    cr: "creative",
                    ct: "content",
                    cu: "current",
                    cx: "connection",
                    dg: "downscaling",
                    dm: "domain",
                    dn: "cdn",
                    do: "downscale",
                    du: "duration",
                    dv: "device",
                    ec: "encoding",
                    en: "end",
                    eg: "engine",
                    em: "embed",
                    er: "error",
                    es: "errorcode",
                    et: "errortext",
                    ee: "event",
                    ev: "events",
                    ex: "expires",
                    fi: "first",
                    fm: "family",
                    ft: "format",
                    fq: "frequency",
                    fr: "frame",
                    fs: "fullscreen",
                    he: "headers",
                    ho: "host",
                    hn: "hostname",
                    ht: "height",
                    id: "id",
                    ii: "init",
                    in: "instance",
                    ip: "ip",
                    is: "is",
                    ke: "key",
                    la: "language",
                    lb: "labeled",
                    le: "level",
                    li: "live",
                    ld: "loaded",
                    lo: "load",
                    ls: "lists",
                    lt: "latency",
                    ma: "max",
                    md: "media",
                    me: "message",
                    mf: "manifest",
                    mi: "mime",
                    ml: "midroll",
                    mm: "min",
                    mn: "manufacturer",
                    mo: "model",
                    mx: "mux",
                    ne: "newest",
                    nm: "name",
                    no: "number",
                    on: "on",
                    os: "os",
                    pa: "paused",
                    pb: "playback",
                    pd: "producer",
                    pe: "percentage",
                    pf: "played",
                    pg: "program",
                    ph: "playhead",
                    pi: "plugin",
                    pl: "preroll",
                    pn: "playing",
                    po: "poster",
                    pr: "preload",
                    ps: "position",
                    py: "property",
                    ra: "rate",
                    rd: "requested",
                    re: "rebuffer",
                    rf: "rendition",
                    rm: "remote",
                    ro: "ratio",
                    rp: "response",
                    rq: "request",
                    rs: "requests",
                    sa: "sample",
                    se: "session",
                    sk: "seek",
                    sm: "stream",
                    so: "source",
                    sq: "sequence",
                    sr: "series",
                    st: "start",
                    su: "startup",
                    sv: "server",
                    sw: "software",
                    ta: "tag",
                    tc: "tech",
                    te: "text",
                    th: "throughput",
                    ti: "time",
                    tl: "total",
                    to: "to",
                    tt: "title",
                    ty: "type",
                    ug: "upscaling",
                    up: "upscale",
                    ur: "url",
                    us: "user",
                    va: "variant",
                    vd: "viewed",
                    vi: "video",
                    ve: "version",
                    vw: "view",
                    vr: "viewer",
                    wd: "width",
                    wa: "watch",
                    wt: "waiting",
                  });
              },
              function (e, t, i) {
                "use strict";
                e.exports = i(19).default;
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var i = [],
                          r = !0,
                          n = !1,
                          a = void 0;
                        try {
                          for (
                            var s, o = e[Symbol.iterator]();
                            !(r = (s = o.next()).done) &&
                            (i.push(s.value), !t || i.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (n = !0), (a = e);
                        } finally {
                          try {
                            !r && o.return && o.return();
                          } finally {
                            if (n) throw a;
                          }
                        }
                        return i;
                      })(e, t);
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  a = r(i(0)),
                  s = i(12),
                  o = r(i(4)),
                  l = r(i(13)),
                  d = r(i(3)),
                  _ = r(i(21)),
                  u = r(i(61)),
                  h = r(i(62)),
                  c = {},
                  p = function e(t) {
                    var i = arguments;
                    "string" == typeof t
                      ? e.hasOwnProperty(t)
                        ? a.default.setTimeout(function () {
                            (i = Array.prototype.splice.call(i, 1)),
                              e[t].apply(null, i);
                          }, 0)
                        : o.default.warn("`" + t + "` is an unknown task")
                      : "function" == typeof t
                      ? a.default.setTimeout(function () {
                          t(e);
                        }, 0)
                      : o.default.warn("`" + t + "` is invalid.");
                  };
                (p.loaded = d.default.now()),
                  (p.NAME = "mux-embed"),
                  (p.VERSION = "4.2.3"),
                  (p.API_VERSION = "2.1"),
                  (p.PLAYER_TRACKED = !1),
                  (p.monitor = function (e, t) {
                    return (0, u.default)(p, e, t);
                  }),
                  (p.destroyMonitor = function (e) {
                    var t = n((0, s.findMediaElement)(e), 1)[0];
                    t && t.mux && "function" == typeof t.mux.destroy
                      ? t.mux.destroy()
                      : o.default.error(
                          "A video element monitor for `" +
                            e +
                            "` has not been initialized via `mux.monitor`."
                        );
                  }),
                  (p.addHLSJS = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    c[i]
                      ? c[i].addHLSJS(t)
                      : o.default.error(
                          "A monitor for `" + i + "` has not been initialized."
                        );
                  }),
                  (p.addDashJS = function (e, t) {
                    var i = (0, s.getMuxPlayerId)(e);
                    c[i]
                      ? c[i].addDashJS(t)
                      : o.default.error(
                          "A monitor for `" + i + "` has not been initialized."
                        );
                  }),
                  (p.removeHLSJS = function (e) {
                    var t = (0, s.getMuxPlayerId)(e);
                    c[t]
                      ? c[t].removeHLSJS()
                      : o.default.error(
                          "A monitor for `" + t + "` has not been initialized."
                        );
                  }),
                  (p.removeDashJS = function (e) {
                    var t = (0, s.getMuxPlayerId)(e);
                    c[t]
                      ? c[t].removeDashJS()
                      : o.default.error(
                          "A monitor for `" + t + "` has not been initialized."
                        );
                  }),
                  (p.init = function (e, t) {
                    (0, l.default)() &&
                      t &&
                      t.respectDoNotTrack &&
                      o.default.info(
                        "The browser's Do Not Track flag is enabled - Mux beaconing is disabled."
                      );
                    var i = (0, s.getMuxPlayerId)(e);
                    c[i] = new _.default(p, i, t);
                  }),
                  (p.emit = function (e, t, i) {
                    var r = (0, s.getMuxPlayerId)(e);
                    c[r]
                      ? (c[r].emit(t, i), "destroy" === t && delete c[r])
                      : o.default.error(
                          "A monitor for `" + r + "` has not been initialized."
                        );
                  }),
                  void 0 !== a.default &&
                    "function" == typeof a.default.addEventListener &&
                    a.default.addEventListener(
                      "unload",
                      function () {
                        p.WINDOW_UNLOADING = !0;
                      },
                      !1
                    ),
                  (p.checkDoNotTrack = l.default),
                  (p.log = o.default),
                  (p.utils = h.default),
                  (t.default = p);
              },
              function (e, t, i) {
                var r, n;
                void 0 !==
                  (n =
                    "function" ==
                    typeof (r = function () {
                      "use strict";
                      function e(e, t) {
                        var i = e[t];
                        if ("function" == typeof i.bind) return i.bind(e);
                        try {
                          return Function.prototype.bind.call(i, e);
                        } catch (t) {
                          return function () {
                            return Function.prototype.apply.apply(i, [
                              e,
                              arguments,
                            ]);
                          };
                        }
                      }
                      function t() {
                        console.log &&
                          (console.log.apply
                            ? console.log.apply(console, arguments)
                            : Function.prototype.apply.apply(console.log, [
                                console,
                                arguments,
                              ])),
                          console.trace && console.trace();
                      }
                      function i(e, t) {
                        for (var i = 0; i < d.length; i++) {
                          var r = d[i];
                          this[r] = i < e ? s : this.methodFactory(r, e, t);
                        }
                        this.log = this.debug;
                      }
                      function r(e, t, r) {
                        return function () {
                          typeof console !== o &&
                            (i.call(this, t, r),
                            this[e].apply(this, arguments));
                        };
                      }
                      function n(i, n, a) {
                        var d;
                        return (
                          "debug" === (d = i) && (d = "log"),
                          (typeof console !== o &&
                            ("trace" === d && l
                              ? t
                              : void 0 !== console[d]
                              ? e(console, d)
                              : void 0 !== console.log
                              ? e(console, "log")
                              : s)) ||
                            r.apply(this, arguments)
                        );
                      }
                      function a(e, t, r) {
                        function a() {
                          var e;
                          if (typeof window !== o && _) {
                            try {
                              e = window.localStorage[_];
                            } catch (e) {}
                            if (typeof e === o)
                              try {
                                var t = window.document.cookie,
                                  i = t.indexOf(encodeURIComponent(_) + "=");
                                -1 !== i &&
                                  (e = /^([^;]+)/.exec(t.slice(i))[1]);
                              } catch (e) {}
                            return void 0 === l.levels[e] && (e = void 0), e;
                          }
                        }
                        var s,
                          l = this,
                          _ = "loglevel";
                        "string" == typeof e
                          ? (_ += ":" + e)
                          : "symbol" == typeof e && (_ = void 0),
                          (l.name = e),
                          (l.levels = {
                            TRACE: 0,
                            DEBUG: 1,
                            INFO: 2,
                            WARN: 3,
                            ERROR: 4,
                            SILENT: 5,
                          }),
                          (l.methodFactory = r || n),
                          (l.getLevel = function () {
                            return s;
                          }),
                          (l.setLevel = function (t, r) {
                            if (
                              ("string" == typeof t &&
                                void 0 !== l.levels[t.toUpperCase()] &&
                                (t = l.levels[t.toUpperCase()]),
                              !(
                                "number" == typeof t &&
                                t >= 0 &&
                                t <= l.levels.SILENT
                              ))
                            )
                              throw (
                                "log.setLevel() called with invalid level: " + t
                              );
                            if (
                              ((s = t),
                              !1 !== r &&
                                (function (e) {
                                  var t = (d[e] || "silent").toUpperCase();
                                  if (typeof window !== o && _) {
                                    try {
                                      return void (window.localStorage[_] = t);
                                    } catch (e) {}
                                    try {
                                      window.document.cookie =
                                        encodeURIComponent(_) + "=" + t + ";";
                                    } catch (e) {}
                                  }
                                })(t),
                              i.call(l, t, e),
                              typeof console === o && t < l.levels.SILENT)
                            )
                              return "No console available for logging";
                          }),
                          (l.setDefaultLevel = function (e) {
                            a() || l.setLevel(e, !1);
                          }),
                          (l.enableAll = function (e) {
                            l.setLevel(l.levels.TRACE, e);
                          }),
                          (l.disableAll = function (e) {
                            l.setLevel(l.levels.SILENT, e);
                          });
                        var u = a();
                        null == u && (u = null == t ? "WARN" : t),
                          l.setLevel(u, !1);
                      }
                      var s = function () {},
                        o = "undefined",
                        l =
                          typeof window !== o &&
                          typeof window.navigator !== o &&
                          /Trident\/|MSIE /.test(window.navigator.userAgent),
                        d = ["trace", "debug", "info", "warn", "error"],
                        _ = new a(),
                        u = {};
                      _.getLogger = function (e) {
                        if (
                          ("symbol" != typeof e && "string" != typeof e) ||
                          "" === e
                        )
                          throw TypeError(
                            "You must supply a name when creating a logger."
                          );
                        var t = u[e];
                        return (
                          t ||
                            (t = u[e] =
                              new a(e, _.getLevel(), _.methodFactory)),
                          t
                        );
                      };
                      var h = typeof window !== o ? window.log : void 0;
                      return (
                        (_.noConflict = function () {
                          return (
                            typeof window !== o &&
                              window.log === _ &&
                              (window.log = h),
                            _
                          );
                        }),
                        (_.getLoggers = function () {
                          return u;
                        }),
                        (_.default = _),
                        _
                      );
                    })
                      ? r.call(t, i, t, e)
                      : r) && (e.exports = n);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var i = [],
                          r = !0,
                          n = !1,
                          a = void 0;
                        try {
                          for (
                            var s, o = e[Symbol.iterator]();
                            !(r = (s = o.next()).done) &&
                            (i.push(s.value), !t || i.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (n = !0), (a = e);
                        } finally {
                          try {
                            !r && o.return && o.return();
                          } finally {
                            if (n) throw a;
                          }
                        }
                        return i;
                      })(e, t);
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  a = r(i(4)),
                  s = r(i(1)),
                  o = i(7),
                  l = i(5),
                  d = r(i(0)),
                  _ = r(i(14)),
                  u = r(i(2)),
                  h = r(i(22)),
                  c = i(27),
                  p = i(28),
                  f = r(i(29)),
                  E = r(i(30)),
                  m = r(i(31)),
                  y = r(i(32)),
                  v = r(i(33)),
                  g = r(i(34)),
                  R = r(i(35)),
                  S = r(i(36)),
                  T = r(i(37)),
                  A = r(i(38)),
                  L = r(i(39)),
                  P = r(i(40)),
                  b = r(i(41)),
                  I = r(i(42)),
                  D = r(i(60)),
                  C = [
                    "viewstart",
                    "ended",
                    "loadstart",
                    "pause",
                    "play",
                    "playing",
                    "ratechange",
                    "waiting",
                    "adplay",
                    "adpause",
                    "adended",
                    "aderror",
                    "adplaying",
                    "adrequest",
                    "adresponse",
                    "adbreakstart",
                    "adbreakend",
                    "adfirstquartile",
                    "admidpoint",
                    "adthirdquartile",
                    "rebufferstart",
                    "rebufferend",
                    "seeked",
                    "error",
                    "hb",
                    "requestcompleted",
                    "requestfailed",
                    "requestcanceled",
                    "renditionchange",
                  ],
                  O = function (e, t, i) {
                    var r = this;
                    (this.DOM_CONTENT_LOADED_EVENT_END =
                      _.default.domContentLoadedEventEnd()),
                      (this.NAVIGATION_START = _.default.navigationStart()),
                      (this.mux = e),
                      (this.id = t),
                      ((i = (0, s.default)(
                        {
                          debug: !1,
                          minimumRebufferDuration: 250,
                          sustainedRebufferThreshold: 1e3,
                          playbackHeartbeatTime: 25,
                          beaconDomain: "litix.io",
                          sampleRate: 1,
                          disableCookies: !1,
                          respectDoNotTrack: !1,
                          disableRebufferTracking: !1,
                          errorTranslator: function (e) {
                            return e;
                          },
                        },
                        i
                      )).data = i.data || {}),
                      i.data.property_key &&
                        ((i.data.env_key = i.data.property_key),
                        delete i.data.property_key),
                      a.default.setLevel(i.debug ? "debug" : "warn"),
                      (this.getPlayheadTime = i.getPlayheadTime),
                      (this.getStateData = i.getStateData || function () {}),
                      (this.getAdData = i.getAdData || function () {}),
                      (this.minimumRebufferDuration =
                        i.minimumRebufferDuration),
                      (this.sustainedRebufferThreshold =
                        i.sustainedRebufferThreshold),
                      (this.playbackHeartbeatTime = i.playbackHeartbeatTime),
                      (this.disableRebufferTracking =
                        i.disableRebufferTracking),
                      this.disableRebufferTracking &&
                        this.mux.log.warn(
                          "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."
                        ),
                      (this.errorTranslator = i.errorTranslator),
                      (this.playbackEventDispatcher = new I.default(
                        e,
                        i.data.env_key,
                        i
                      )),
                      (this.data = {
                        player_instance_id: (0, o.generateUUID)(),
                        mux_sample_rate: i.sampleRate,
                        beacon_domain: i.beaconDomain,
                      }),
                      (this.data.view_sequence_number = 1),
                      (this.data.player_sequence_number = 1),
                      (this.oldEmit = this.emit),
                      (this.emit = function (e, t) {
                        (t = (0, s.default)(
                          { viewer_time: this.mux.utils.now() },
                          t
                        )),
                          this.oldEmit(e, t);
                      });
                    var n = function () {
                      void 0 === this.data.view_start &&
                        ((this.data.view_start = this.mux.utils.now()),
                        this.emit("viewstart"));
                    }.bind(this);
                    this.on("viewinit", function (e, t) {
                      this._resetVideoData(),
                        this._resetViewData(),
                        this._resetErrorData(),
                        this._updateStateData(),
                        (0, s.default)(this.data, t),
                        this._initializeViewData(),
                        this.one("play", n),
                        this.one("adbreakstart", n);
                    });
                    var l = function (e) {
                      this.emit("viewend"),
                        this.send("viewend"),
                        this.emit("viewinit", e);
                    }.bind(this);
                    this.on("videochange", function (e, t) {
                      l(t);
                    }),
                      this.on("programchange", function (e, t) {
                        this.data.player_is_paused &&
                          this.mux.log.warn(
                            "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."
                          ),
                          l((0, s.default)(t, { view_program_changed: !0 })),
                          n(),
                          this.emit("play"),
                          this.emit("playing");
                      }),
                      this.on("destroy", this.destroy);
                    var u = this.destroy.bind(this);
                    void 0 !== d.default &&
                      "function" == typeof d.default.addEventListener &&
                      d.default.addEventListener("unload", u, !1),
                      this.on("destroy", function () {
                        void 0 !== d.default &&
                          "function" == typeof d.default.removeEventListener &&
                          d.default.removeEventListener("unload", u);
                      }),
                      this.on("playerready", function (e, t) {
                        (0, s.default)(this.data, t);
                      }),
                      C.forEach(function (e) {
                        r.on(e, function (t, i) {
                          0 !== e.indexOf("ad") && this._updateStateData(),
                            (0, s.default)(this.data, i),
                            this._sanitizeData();
                        }),
                          r.on("after" + e, function () {
                            ("error" !== e || this.viewErrored) && this.send(e);
                          });
                      }),
                      this.on("viewend", function (e, t) {
                        (0, s.default)(r.data, t);
                      }),
                      this.one("playerready", function (e) {
                        var t = this.mux.utils.now();
                        this.data.player_init_time &&
                          (this.data.player_startup_time =
                            t - this.data.player_init_time),
                          !this.mux.PLAYER_TRACKED &&
                            this.NAVIGATION_START &&
                            ((this.mux.PLAYER_TRACKED = !0),
                            (this.data.player_init_time ||
                              this.DOM_CONTENT_LOADED_EVENT_END) &&
                              (this.data.page_load_time =
                                Math.min(
                                  this.data.player_init_time || 1 / 0,
                                  this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0
                                ) - this.NAVIGATION_START)),
                          this.send("playerready"),
                          delete this.data.player_startup_time,
                          delete this.data.page_load_time;
                      }),
                      m.default.apply(this),
                      b.default.apply(this),
                      A.default.apply(this),
                      g.default.apply(this),
                      E.default.apply(this),
                      T.default.apply(this),
                      y.default.apply(this),
                      v.default.apply(this),
                      L.default.apply(this),
                      R.default.apply(this),
                      S.default.apply(this),
                      P.default.apply(this),
                      D.default.apply(this),
                      i.hlsjs && this.addHLSJS(i),
                      i.dashjs && this.addDashJS(i),
                      this.emit("viewinit", i.data);
                  };
                (0, s.default)(O.prototype, f.default.prototype),
                  (0, s.default)(O.prototype, g.default.prototype),
                  (0, s.default)(O.prototype, A.default.prototype),
                  (0, s.default)(O.prototype, E.default.prototype),
                  (0, s.default)(O.prototype, y.default.prototype),
                  (0, s.default)(O.prototype, v.default.prototype),
                  (0, s.default)(O.prototype, L.default.prototype),
                  (0, s.default)(O.prototype, R.default.prototype),
                  (0, s.default)(O.prototype, S.default.prototype),
                  (O.prototype.destroy = function () {
                    this._destroyed ||
                      ((this._destroyed = !0),
                      void 0 !== this.data.view_start &&
                        (this.emit("viewend"), this.send("viewend")),
                      this.playbackEventDispatcher.destroy(),
                      this.removeHLSJS(),
                      this.removeDashJS(),
                      d.default.clearTimeout(this._heartBeatTimeout));
                  }),
                  (O.prototype.send = function (e) {
                    var t = (0, s.default)({}, this.data);
                    if (
                      (1 === t.player_error_code &&
                        (delete t.player_error_code,
                        delete t.player_error_message),
                      t.player_source_duration === 1 / 0 ||
                      t.video_source_duration === 1 / 0
                        ? (t.video_source_is_live = !0)
                        : (t.player_source_duration > 0 ||
                            t.video_source_duration > 0) &&
                          (t.video_source_is_live = !1),
                      (t.video_source_url =
                        t.video_source_url || t.player_source_url),
                      t.video_source_url)
                    ) {
                      var i = n(
                          (0, l.extractHostnameAndDomain)(t.video_source_url),
                          2
                        ),
                        r = i[0],
                        a = i[1];
                      (t.video_source_domain = a),
                        (t.video_source_hostname = r);
                    }
                    delete t.ad_request_id,
                      this.playbackEventDispatcher.send(e, t),
                      this.data.view_sequence_number++,
                      this.data.player_sequence_number++,
                      this._restartHeartBeat();
                  }),
                  (O.prototype._updateStateData = function () {
                    (0, s.default)(this.data, this.getStateData()),
                      this.getPlayheadTime &&
                        (this.data.player_playhead_time =
                          this.getPlayheadTime()),
                      this._sanitizeData();
                  }),
                  (O.prototype._sanitizeData = function () {
                    var e = this;
                    [
                      "player_width",
                      "player_height",
                      "video_source_width",
                      "video_source_height",
                      "player_playhead_time",
                      "video_source_bitrate",
                    ].forEach(function (t) {
                      var i = parseInt(e.data[t], 10);
                      e.data[t] = isNaN(i) ? void 0 : i;
                    }),
                      ["player_source_url", "video_source_url"].forEach(
                        function (t) {
                          if (e.data[t]) {
                            var i = e.data[t].toLowerCase();
                            (0 !== i.indexOf("data:") &&
                              0 !== i.indexOf("blob:")) ||
                              (e.data[t] = "MSE style URL");
                          }
                        }
                      );
                  }),
                  (O.prototype._resetVideoData = function (e, t) {
                    var i = this;
                    Object.keys(this.data).forEach(function (e) {
                      0 === e.indexOf("video_") && delete i.data[e];
                    });
                  }),
                  (O.prototype._resetViewData = function () {
                    var e = this;
                    Object.keys(this.data).forEach(function (t) {
                      0 === t.indexOf("view_") && delete e.data[t];
                    }),
                      (this.data.view_sequence_number = 1);
                  }),
                  (O.prototype._resetErrorData = function (e, t) {
                    delete this.data.player_error_code,
                      delete this.data.player_error_message;
                  }),
                  (O.prototype._initializeViewData = function () {
                    var e = this,
                      t = (this.data.view_id = (0, o.generateUUID)());
                    this.data.video_id ||
                      (this.data.video_id = (0, h.default)(
                        this.data.player_source_url
                      ));
                    var i = function () {
                      t === e.data.view_id &&
                        (0, u.default)(e.data, "player_view_count", 1);
                    };
                    this.data.player_is_paused ? this.one("play", i) : i();
                  }),
                  (O.prototype._restartHeartBeat = function () {
                    var e = this;
                    d.default.clearTimeout(this._heartBeatTimeout),
                      this.viewErrored ||
                        (this._heartBeatTimeout = d.default.setTimeout(
                          function () {
                            e.data.player_is_paused || e.emit("hb");
                          },
                          1e4
                        ));
                  }),
                  (O.prototype.addHLSJS = function (e) {
                    return e.hlsjs
                      ? this.hlsjs
                        ? void this.mux.log.warn(
                            "An instance of HLS.js is already being monitored for this player."
                          )
                        : ((this.hlsjs = e.hlsjs),
                          void (0, c.monitorHlsJs)(
                            this.mux,
                            this.id,
                            e.hlsjs,
                            {},
                            e.Hls || d.default.Hls
                          ))
                      : void this.mux.log.warn(
                          "You must pass a valid hlsjs instance in order to track it."
                        );
                  }),
                  (O.prototype.removeHLSJS = function () {
                    this.hlsjs &&
                      ((0, c.stopMonitoringHlsJs)(this.hlsjs),
                      (this.hlsjs = void 0));
                  }),
                  (O.prototype.addDashJS = function (e) {
                    return e.dashjs
                      ? this.dashjs
                        ? void this.mux.log.warn(
                            "An instance of Dash.js is already being monitored for this player."
                          )
                        : ((this.dashjs = e.dashjs),
                          void (0, p.monitorDashJS)(
                            this.mux,
                            this.id,
                            e.dashjs
                          ))
                      : void this.mux.log.warn(
                          "You must pass a valid dashjs instance in order to track it."
                        );
                  }),
                  (O.prototype.removeDashJS = function () {
                    this.dashjs &&
                      ((0, p.stopMonitoringDashJS)(this.dashjs),
                      (this.dashjs = void 0));
                  }),
                  (t.default = O);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e) {
                    var t = n.default.createElement("a");
                    t.href = e;
                    var i = t.pathname.replace(/\.[^/.]+$/, "");
                    return a.default.encode(t.host + i).split("=")[0];
                  });
                var n = r(i(23)),
                  a = r(i(25));
              },
              function (e, t, i) {
                (function (t) {
                  var r,
                    n =
                      void 0 !== t
                        ? t
                        : "undefined" != typeof window
                        ? window
                        : {},
                    a = i(24);
                  "undefined" != typeof document
                    ? (r = document)
                    : (r = n["__GLOBAL_DOCUMENT_CACHE@4"]) ||
                      (r = n["__GLOBAL_DOCUMENT_CACHE@4"] = a),
                    (e.exports = r);
                }.call(t, i(6)));
              },
              function (e, t) {},
              function (e, t, i) {
                (function (e, r) {
                  var n, a, s, o, l, d;
                  "object" == typeof e && e && e.exports,
                    ((a = function (e) {
                      this.message = e;
                    }).prototype = Error()),
                    (a.prototype.name = "InvalidCharacterError"),
                    (s = function (e) {
                      throw new a(e);
                    }),
                    (o =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
                    (l = /[\t\n\f\r ]/g),
                    (d = {
                      encode: function (e) {
                        (e = String(e)),
                          /[^\0-\xFF]/.test(e) &&
                            s(
                              "The string to be encoded contains characters outside of the Latin1 range."
                            );
                        for (
                          var t,
                            i,
                            r,
                            n = e.length % 3,
                            a = "",
                            l = -1,
                            d = e.length - n;
                          ++l < d;

                        )
                          (r =
                            (t = e.charCodeAt(l) << 16) +
                            (e.charCodeAt(++l) << 8) +
                            e.charCodeAt(++l)),
                            (a +=
                              o.charAt((r >> 18) & 63) +
                              o.charAt((r >> 12) & 63) +
                              o.charAt((r >> 6) & 63) +
                              o.charAt(63 & r));
                        return (
                          2 == n
                            ? ((r =
                                (t = e.charCodeAt(l) << 8) + e.charCodeAt(++l)),
                              (a +=
                                o.charAt(r >> 10) +
                                o.charAt((r >> 4) & 63) +
                                o.charAt((r << 2) & 63) +
                                "="))
                            : 1 == n &&
                              ((r = e.charCodeAt(l)),
                              (a +=
                                o.charAt(r >> 2) +
                                o.charAt((r << 4) & 63) +
                                "==")),
                          a
                        );
                      },
                      decode: function (e) {
                        var t = (e = String(e).replace(l, "")).length;
                        t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                          (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                            s(
                              "Invalid character: the string to be decoded is not correctly encoded."
                            );
                        for (var i, r, n = 0, a = "", d = -1; ++d < t; )
                          (r = o.indexOf(e.charAt(d))),
                            (i = n % 4 ? 64 * i + r : r),
                            n++ % 4 &&
                              (a += String.fromCharCode(
                                255 & (i >> ((-2 * n) & 6))
                              ));
                        return a;
                      },
                      version: "0.1.0",
                    }),
                    void 0 !==
                      (n = function () {
                        return d;
                      }.call(t, i, t, e)) && (e.exports = n);
                }.call(t, i(26)(e), i(6)));
              },
              function (e, t) {
                e.exports = function (e) {
                  return (
                    e.webpackPolyfill ||
                      ((e.deprecate = function () {}),
                      (e.paths = []),
                      e.children || (e.children = []),
                      Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                          return e.l;
                        },
                      }),
                      Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                          return e.i;
                        },
                      }),
                      (e.webpackPolyfill = 1)),
                    e
                  );
                };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.stopMonitoringHlsJs = t.monitorHlsJs = void 0);
                var n = r(i(8)),
                  a = r(i(14)),
                  s = i(5),
                  o = function (e) {
                    if (!e) return {};
                    var t = a.default.navigationStart(),
                      i = e.loading,
                      r = i ? i.start : e.trequest,
                      n = i ? i.first : e.tfirst,
                      s = i ? i.end : e.tload;
                    return {
                      bytesLoaded: e.total,
                      requestStart: Math.round(t + r),
                      responseStart: Math.round(t + n),
                      responseEnd: Math.round(t + s),
                    };
                  },
                  l = function (e) {
                    if (e && "function" == typeof e.getAllResponseHeaders)
                      return (0, n.default)(e.getAllResponseHeaders());
                  };
                (t.monitorHlsJs = function (e, t, i) {
                  var r =
                      (arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      arguments[4]),
                    n = e.log;
                  if (!a.default.exists())
                    return void n.warn(
                      "performance timing not supported. Not tracking HLS.js."
                    );
                  var d = function (i, r) {
                      return e.emit(t, i, r);
                    },
                    _ = function (e, t) {
                      var i = t.levels,
                        r = t.audioTracks,
                        n = t.url,
                        a = t.stats,
                        _ = t.networkDetails,
                        u = {},
                        h = {};
                      i.forEach(function (e, t) {
                        u[t] = {
                          width: e.width,
                          height: e.height,
                          bitrate: e.bitrate,
                          attrs: e.attrs,
                        };
                      }),
                        r.forEach(function (e, t) {
                          h[t] = {
                            name: e.name,
                            language: e.lang,
                            bitrate: e.bitrate,
                          };
                        });
                      var c = o(a);
                      d("requestcompleted", {
                        request_event_type: e,
                        request_bytes_loaded: c.bytesLoaded,
                        request_start: c.requestStart,
                        request_response_start: c.responseStart,
                        request_response_end: c.responseEnd,
                        request_type: "manifest",
                        request_hostname: (0, s.extractHostname)(n),
                        request_response_headers: l(_),
                        request_rendition_lists: {
                          media: u,
                          audio: h,
                          video: {},
                        },
                      });
                    };
                  i.on(r.Events.MANIFEST_LOADED, _);
                  var u = function (e, t) {
                    var i = t.details,
                      r = t.level,
                      n = t.networkDetails,
                      a = o(t.stats);
                    d("requestcompleted", {
                      request_event_type: e,
                      request_bytes_loaded: a.bytesLoaded,
                      request_start: a.requestStart,
                      request_response_start: a.responseStart,
                      request_response_end: a.responseEnd,
                      request_current_level: r,
                      request_type: "manifest",
                      request_hostname: (0, s.extractHostname)(i.url),
                      request_response_headers: l(n),
                    });
                  };
                  i.on(r.Events.LEVEL_LOADED, u);
                  var h = function (e, t) {
                    var i = t.details,
                      r = t.networkDetails,
                      n = o(t.stats);
                    d("requestcompleted", {
                      request_event_type: e,
                      request_bytes_loaded: n.bytesLoaded,
                      request_start: n.requestStart,
                      request_response_start: n.responseStart,
                      request_response_end: n.responseEnd,
                      request_type: "manifest",
                      request_hostname: (0, s.extractHostname)(i.url),
                      request_response_headers: l(r),
                    });
                  };
                  i.on(r.Events.AUDIO_TRACK_LOADED, h);
                  var c = function (e, t) {
                    var r = t.stats,
                      n = t.networkDetails,
                      a = t.frag,
                      _ = o(r),
                      u = {
                        request_event_type: e,
                        request_bytes_loaded: _.bytesLoaded,
                        request_start: _.requestStart,
                        request_response_start: _.responseStart,
                        request_response_end: _.responseEnd,
                        request_hostname: n
                          ? (0, s.extractHostname)(n.responseURL)
                          : void 0,
                        request_response_headers: l(n),
                        request_media_duration: a.duration,
                      };
                    "main" === a.type
                      ? ((u.request_type = "media"),
                        (u.request_current_level = a.level),
                        (u.request_video_width = (
                          i.levels[a.level] || {}
                        ).width),
                        (u.request_video_height = (
                          i.levels[a.level] || {}
                        ).height))
                      : (u.request_type = a.type),
                      d("requestcompleted", u);
                  };
                  i.on(r.Events.FRAG_LOADED, c);
                  var p = function (e, t) {
                    var i = t.details,
                      n = t.response,
                      a = t.context,
                      o = t.frag;
                    if (
                      i === r.ErrorDetails.MANIFEST_LOAD_ERROR ||
                      i === r.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
                      i === r.ErrorDetails.FRAG_LOAD_ERROR ||
                      i === r.ErrorDetails.FRAG_LOAD_TIMEOUT ||
                      i === r.ErrorDetails.LEVEL_LOAD_ERROR ||
                      i === r.ErrorDetails.LEVEL_LOAD_TIMEOUT
                    ) {
                      var l = (o && o.url) || (a && a.url) || "";
                      d("requestfailed", {
                        request_error: i,
                        request_url: l,
                        request_hostname: (0, s.extractHostname)(l),
                        request_type:
                          i === r.ErrorDetails.FRAG_LOAD_ERROR ||
                          i === r.ErrorDetails.FRAG_LOAD_TIMEOUT
                            ? "media"
                            : "manifest",
                        request_error_code: n && n.code,
                        request_error_text: n && n.text,
                      });
                    }
                  };
                  i.on(r.Events.ERROR, p);
                  var f = function (e, t) {
                    var i = t.frag,
                      r = (i && i._url) || "";
                    d("requestcanceled", {
                      request_cancel: e,
                      request_url: r,
                      request_type: "media",
                      request_hostname: (0, s.extractHostname)(r),
                    });
                  };
                  i.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, f);
                  var E = function (e, t) {
                    var r = t.level,
                      a = i.levels[r];
                    if (a && a.attrs && a.attrs.BANDWIDTH) {
                      var s = a.attrs.BANDWIDTH;
                      s
                        ? d("renditionchange", {
                            video_source_bitrate: s,
                            video_source_width: a.width,
                            video_source_height: a.height,
                          })
                        : n.warn(
                            "missing BANDWIDTH from HLS manifest parsed by HLS.js"
                          );
                    }
                  };
                  i.on(r.Events.LEVEL_SWITCHED, E),
                    (i._stopMuxMonitor = function () {
                      i.off(r.Events.MANIFEST_LOADED, _),
                        i.off(r.Events.LEVEL_LOADED, u),
                        i.off(r.Events.AUDIO_TRACK_LOADED, h),
                        i.off(r.Events.FRAG_LOADED, c),
                        i.off(r.Events.ERROR, p),
                        i.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, f),
                        i.off(r.Events.LEVEL_SWITCHED, E),
                        i.off(r.Events.DESTROYING, i._stopMuxMonitor),
                        delete i._stopMuxMonitor;
                    }),
                    i.on(r.Events.DESTROYING, i._stopMuxMonitor);
                }),
                  (t.stopMonitoringHlsJs = function (e) {
                    e &&
                      "function" == typeof e._stopMuxMonitor &&
                      e._stopMuxMonitor();
                  });
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.stopMonitoringDashJS = t.monitorDashJS = void 0);
                var n = r(i(0)),
                  a = r(i(8)),
                  s = i(5),
                  o = function (e, t) {
                    if (!e || "function" != typeof e.getRequests) return {};
                    var i = e.getRequests({ state: "executed" });
                    if (0 === i.length) return {};
                    var r = i[i.length - 1],
                      n = (0, s.extractHostname)(r.url),
                      o = r.bytesLoaded,
                      l = new Date(r.requestStartDate).getTime(),
                      d = new Date(r.firstByteDate).getTime(),
                      _ = new Date(r.requestEndDate).getTime(),
                      u = isNaN(r.duration) ? 0 : r.duration,
                      h =
                        "function" == typeof t.getMetricsFor
                          ? t.getMetricsFor(r.mediaType).HttpList
                          : t.getDashMetrics().getHttpRequests(r.mediaType),
                      c = void 0;
                    return (
                      h.length > 0 &&
                        (c = (0, a.default)(
                          h[h.length - 1]._responseHeaders || ""
                        )),
                      {
                        requestStart: l,
                        requestResponseStart: d,
                        requestResponseEnd: _,
                        requestBytesLoaded: o,
                        requestResponseHeaders: c,
                        requestMediaDuration: u,
                        requestHostname: n,
                      }
                    );
                  },
                  l = function (e, t) {
                    var i = t.getQualityFor(e),
                      r = t.getCurrentTrackFor(e).bitrateList;
                    return r
                      ? {
                          currentLevel: i,
                          renditionWidth: r[i].width || null,
                          renditionHeight: r[i].height || null,
                          renditionBitrate: r[i].bandwidth,
                        }
                      : {};
                  };
                (t.monitorDashJS = function (e, t, i) {
                  var r =
                    (arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3],
                    e.log);
                  if (!i || !i.on)
                    return void r.warn(
                      "Invalid dash.js player reference. Monitoring blocked."
                    );
                  var a = function (i, r) {
                      return e.emit(t, i, r);
                    },
                    d = function (e) {
                      var t = e.type,
                        i = (e.data || {}).url;
                      a("requestcompleted", {
                        request_event_type: t,
                        request_start: 0,
                        request_response_start: 0,
                        request_response_end: 0,
                        request_bytes_loaded: -1,
                        request_type: "manifest",
                        request_hostname: (0, s.extractHostname)(i),
                      });
                    };
                  i.on("manifestLoaded", d);
                  var _ = {},
                    u = function (e) {
                      var t = e.type,
                        r = e.fragmentModel,
                        n = (e.chunk || {}).mediaInfo || {},
                        s = n.type,
                        l = n.bitrateList,
                        d = {};
                      (l = l || []).forEach(function (e, t) {
                        (d[t] = {}),
                          (d[t].width = e.width),
                          (d[t].height = e.height),
                          (d[t].bitrate = e.bandwidth),
                          (d[t].attrs = {});
                      }),
                        "video" === s
                          ? (_.video = d)
                          : "audio" === s
                          ? (_.audio = d)
                          : (_.media = d);
                      var u = o(r, i),
                        h = u.requestStart,
                        c = u.requestResponseStart,
                        p = u.requestResponseEnd,
                        f = u.requestResponseHeaders,
                        E = u.requestMediaDuration;
                      a("requestcompleted", {
                        request_event_type: t,
                        request_start: h,
                        request_response_start: c,
                        request_response_end: p,
                        request_bytes_loaded: -1,
                        request_type: s + "_init",
                        request_response_headers: f,
                        request_hostname: u.requestHostname,
                        request_media_duration: E,
                        request_rendition_lists: _,
                      });
                    };
                  i.on("initFragmentLoaded", u);
                  var h = function (e) {
                    var t = e.type,
                      r = e.fragmentModel,
                      n = e.chunk || {},
                      s = n.mediaInfo,
                      d = n.start,
                      _ = (s || {}).type,
                      u = o(r, i),
                      h = u.requestStart,
                      c = u.requestResponseStart,
                      p = u.requestResponseEnd,
                      f = u.requestBytesLoaded,
                      E = u.requestResponseHeaders,
                      m = u.requestMediaDuration,
                      y = u.requestHostname,
                      v = l(_, i),
                      g = v.currentLevel,
                      R = v.renditionWidth,
                      S = v.renditionHeight;
                    a("requestcompleted", {
                      request_event_type: t,
                      request_start: h,
                      request_response_start: c,
                      request_response_end: p,
                      request_bytes_loaded: f,
                      request_type: _,
                      request_response_headers: E,
                      request_hostname: y,
                      request_media_start_time: d,
                      request_media_duration: m,
                      request_current_level: g,
                      request_labeled_bitrate: v.renditionBitrate,
                      request_video_width: R,
                      request_video_height: S,
                    });
                  };
                  i.on("mediaFragmentLoaded", h);
                  var c = {
                      video: void 0,
                      audio: void 0,
                      totalBitrate: void 0,
                    },
                    p = function () {
                      if (c.video && "number" == typeof c.video.bitrate) {
                        if (!c.video.width || !c.video.height)
                          return void r.warn(
                            "have bitrate info for video but missing width/height"
                          );
                        var e = c.video.bitrate;
                        return (
                          c.audio &&
                            "number" == typeof c.audio.bitrate &&
                            (e += c.audio.bitrate),
                          e !== c.totalBitrate
                            ? ((c.totalBitrate = e),
                              {
                                video_source_bitrate: e,
                                video_source_height: c.video.height,
                                video_source_width: c.video.width,
                              })
                            : void 0
                        );
                      }
                    },
                    f = function (e, t, n) {
                      if ("number" != typeof e.newQuality)
                        return void r.warn(
                          "missing evt.newQuality in qualityChangeRendered event",
                          e
                        );
                      var s = e.mediaType;
                      if ("audio" === s || "video" === s) {
                        var o = i.getBitrateInfoListFor(s).find(function (t) {
                          return t.qualityIndex === e.newQuality;
                        });
                        if (!o || "number" != typeof o.bitrate)
                          return void r.warn("missing bitrate info for " + s);
                        c[s] = o;
                        var l = p();
                        l && a("renditionchange", l);
                      }
                    };
                  i.on("qualityChangeRendered", f);
                  var E = function (e) {
                    var t = e.error,
                      i = e.event,
                      r = (i = i || {}).request || {},
                      o =
                        (n.default.event && n.default.event.currentTarget) ||
                        {};
                    a("requestfailed", {
                      request_error: t + "_" + i.id + "_" + r.type,
                      request_url: i.url,
                      request_hostname: (0, s.extractHostname)(i.url),
                      request_type: r.mediaType,
                      request_error_code: o.status,
                      request_error_type: o.statusText,
                    });
                  };
                  i.on("error", E),
                    (i._stopMuxMonitor = function () {
                      i.off("manifestLoaded", d),
                        i.off("initFragmentLoaded", u),
                        i.off("mediaFragmentLoaded", h),
                        i.off("qualityChangeRendered", f),
                        i.off("error", E),
                        delete i._stopMuxMonitor;
                    });
                }),
                  (t.stopMonitoringDashJS = function (e) {
                    e &&
                      "function" == typeof e._stopMuxMonitor &&
                      e._stopMuxMonitor();
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = function () {},
                  n = 0;
                (r.prototype.on = function (e, t, i) {
                  return (
                    (t._eventEmitterGuid = t._eventEmitterGuid || ++n),
                    (this._listeners = this._listeners || {}),
                    (this._listeners[e] = this._listeners[e] || []),
                    i && (t = t.bind(i)),
                    this._listeners[e].push(t),
                    t
                  );
                }),
                  (r.prototype.off = function (e, t) {
                    var i = this._listeners && this._listeners[e];
                    i &&
                      i.forEach(function (e, r) {
                        e._eventEmitterGuid === t._eventEmitterGuid &&
                          i.splice(r, 1);
                      });
                  }),
                  (r.prototype.one = function (e, t, i) {
                    var r = this;
                    t._eventEmitterGuid = t._eventEmitterGuid || ++n;
                    var a = function n() {
                      r.off(e, n), t.apply(i || this, arguments);
                    };
                    (a._eventEmitterGuid = t._eventEmitterGuid), this.on(e, a);
                  }),
                  (r.prototype.emit = function (e, t) {
                    var i = this;
                    if (this._listeners) {
                      t = t || {};
                      var r = this._listeners["before*"] || [],
                        n = this._listeners[e] || [],
                        a = this._listeners["after" + e] || [],
                        s = function (t, r) {
                          (t = t.slice()).forEach(function (t) {
                            t.call(i, { type: e }, r);
                          });
                        };
                      s(r, t), s(n, t), s(a, t);
                    }
                  }),
                  (t.default = r);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r },
                  a = function () {
                    (this._playbackHeartbeatInterval = null),
                      (this._playheadShouldBeProgressing = !1),
                      this.on("playing", function () {
                        this._playheadShouldBeProgressing = !0;
                      }),
                      this.on("play", this._startPlaybackHeartbeatInterval),
                      this.on("playing", this._startPlaybackHeartbeatInterval),
                      this.on(
                        "adbreakstart",
                        this._startPlaybackHeartbeatInterval
                      ),
                      this.on("adplay", this._startPlaybackHeartbeatInterval),
                      this.on(
                        "adplaying",
                        this._startPlaybackHeartbeatInterval
                      ),
                      this.on("seeking", this._startPlaybackHeartbeatInterval),
                      this.on(
                        "devicewake",
                        this._startPlaybackHeartbeatInterval
                      ),
                      this.on(
                        "viewstart",
                        this._startPlaybackHeartbeatInterval
                      ),
                      this.on("pause", this._stopPlaybackHeartbeatInterval),
                      this.on("ended", this._stopPlaybackHeartbeatInterval),
                      this.on("viewend", this._stopPlaybackHeartbeatInterval),
                      this.on("error", this._stopPlaybackHeartbeatInterval),
                      this.on("aderror", this._stopPlaybackHeartbeatInterval),
                      this.on("adpause", this._stopPlaybackHeartbeatInterval),
                      this.on("adended", this._stopPlaybackHeartbeatInterval),
                      this.on(
                        "adbreakend",
                        this._stopPlaybackHeartbeatInterval
                      ),
                      this.on("seeked", function () {
                        this.data.player_is_paused
                          ? this._stopPlaybackHeartbeatInterval()
                          : this._startPlaybackHeartbeatInterval();
                      }),
                      this.on("timeupdate", function () {
                        null !== this._playbackHeartbeatInterval &&
                          this.emit("playbackheartbeat");
                      }),
                      this.on("devicesleep", function (e, t) {
                        null !== this._playbackHeartbeatInterval &&
                          (n.default.clearInterval(
                            this._playbackHeartbeatInterval
                          ),
                          this.emit("playbackheartbeatend", {
                            viewer_time: t.viewer_time,
                          }),
                          (this._playbackHeartbeatInterval = null));
                      });
                  };
                (a.prototype._startPlaybackHeartbeatInterval = function () {
                  var e = this;
                  null === this._playbackHeartbeatInterval &&
                    (this.emit("playbackheartbeat"),
                    (this._playbackHeartbeatInterval = n.default.setInterval(
                      function () {
                        e.emit("playbackheartbeat");
                      },
                      this.playbackHeartbeatTime
                    )));
                }),
                  (a.prototype._stopPlaybackHeartbeatInterval = function () {
                    (this._playheadShouldBeProgressing = !1),
                      null !== this._playbackHeartbeatInterval &&
                        (n.default.clearInterval(
                          this._playbackHeartbeatInterval
                        ),
                        this.emit("playbackheartbeatend"),
                        (this._playbackHeartbeatInterval = null));
                  }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    var e = this;
                    this.on("viewinit", function () {
                      e.viewErrored = !1;
                    }),
                      this.on("error", function () {
                        try {
                          var t = e.errorTranslator({
                            player_error_code: e.data.player_error_code,
                            player_error_message: e.data.player_error_message,
                          });
                          t
                            ? ((e.data.player_error_code = t.player_error_code),
                              (e.data.player_error_message =
                                t.player_error_message),
                              (e.viewErrored = !0))
                            : (delete e.data.player_error_code,
                              delete e.data.player_error_message);
                        } catch (t) {
                          e.mux.log.warn(
                            "Exception in error translator callback.",
                            t
                          ),
                            (e.viewErrored = !0);
                        }
                      });
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(2)) && r.__esModule ? r : { default: r },
                  a = function () {
                    (this._watchTimeTrackerLastCheckedTime = null),
                      this.on("playbackheartbeat", this._updateWatchTime),
                      this.on(
                        "playbackheartbeatend",
                        this._clearWatchTimeState
                      );
                  };
                (a.prototype._updateWatchTime = function (e, t) {
                  var i = t.viewer_time;
                  null === this._watchTimeTrackerLastCheckedTime &&
                    (this._watchTimeTrackerLastCheckedTime = i),
                    (0, n.default)(
                      this.data,
                      "view_watch_time",
                      i - this._watchTimeTrackerLastCheckedTime
                    ),
                    (this._watchTimeTrackerLastCheckedTime = i);
                }),
                  (a.prototype._clearWatchTimeState = function (e, t) {
                    this._updateWatchTime(e, t),
                      (this._watchTimeTrackerLastCheckedTime = null);
                  }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(2)) && r.__esModule ? r : { default: r },
                  a = function () {
                    (this._playbackTimeTrackerLastPlayheadPosition = -1),
                      this.on("playbackheartbeat", this._updatePlaybackTime),
                      this.on(
                        "playbackheartbeatend",
                        this._clearPlaybackTimeState
                      ),
                      this.on("seeking", this._clearPlaybackTimeState);
                  };
                (a.prototype._updatePlaybackTime = function () {
                  var e = this.data.player_playhead_time;
                  if (
                    this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                    e > this._playbackTimeTrackerLastPlayheadPosition
                  ) {
                    var t = e - this._playbackTimeTrackerLastPlayheadPosition;
                    t <= 1e3 &&
                      (0, n.default)(
                        this.data,
                        "view_content_playback_time",
                        t
                      );
                  }
                  this._playbackTimeTrackerLastPlayheadPosition = e;
                }),
                  (a.prototype._clearPlaybackTimeState = function () {
                    this._updatePlaybackTime(),
                      (this._playbackTimeTrackerLastPlayheadPosition = -1);
                  }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r = function () {
                  this.on("playbackheartbeat", this._updatePlayheadTime),
                    this.on("playbackheartbeatend", this._updatePlayheadTime),
                    this.on("timeupdate", this._updatePlayheadTime),
                    this.on("destroy", function () {
                      this.off("timeupdate", this._updatePlayheadTime);
                    });
                };
                (r.prototype._updateMaxPlayheadPosition = function () {
                  this.data.view_max_playhead_position =
                    void 0 === this.data.view_max_playhead_position
                      ? this.data.player_playhead_time
                      : Math.max(
                          this.data.view_max_playhead_position,
                          this.data.player_playhead_time
                        );
                }),
                  (r.prototype._updatePlayheadTime = function (e, t) {
                    if (t.player_playhead_time)
                      (this.data.player_playhead_time = t.player_playhead_time),
                        this._updateMaxPlayheadPosition();
                    else if (this.getPlayheadTime) {
                      var i = this.getPlayheadTime();
                      void 0 !== i &&
                        ((this.data.player_playhead_time = i),
                        this._updateMaxPlayheadPosition());
                    }
                  }),
                  (t.default = r);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(i(3)),
                  a = r(i(2)),
                  s = function () {
                    (this._lastCheckedTime = null),
                      (this._lastPlayheadTime = null),
                      (this._lastPlayheadTimeUpdatedTime = null),
                      this.on("playbackheartbeat", this._checkIfRebuffering),
                      this.on(
                        "playbackheartbeatend",
                        this._cleanupRebufferTracker
                      ),
                      this.on("seeking", function () {
                        this._cleanupRebufferTracker(null, {
                          viewer_time: n.default.now(),
                        });
                      });
                  };
                (s.prototype._checkIfRebuffering = function (e, t) {
                  if (!this.disableRebufferTracking) {
                    if (
                      this.isSeeking ||
                      this.isAdBreak ||
                      !this._playheadShouldBeProgressing
                    )
                      return void this._cleanupRebufferTracker(e, t);
                    if (null === this._lastCheckedTime)
                      return (
                        this._prepareRebufferTrackerState(t.viewer_time),
                        void this._updateRebufferMetrics()
                      );
                    if (
                      this._lastPlayheadTime !== this.data.player_playhead_time
                    )
                      return void this._cleanupRebufferTracker(e, t, !0);
                    var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    i >= this.sustainedRebufferThreshold &&
                      (this._rebuffering
                        ? this._updateRebufferMetrics(
                            t.viewer_time - this._lastCheckedTime
                          )
                        : ((this._rebuffering = !0),
                          (0, a.default)(this.data, "view_rebuffer_count", 1),
                          this._updateRebufferMetrics(i),
                          this.emit("rebufferstart"))),
                      (this._lastCheckedTime = t.viewer_time);
                  }
                }),
                  (s.prototype._clearRebufferTrackerState = function () {
                    (this._lastCheckedTime = null),
                      (this._lastPlayheadTime = null),
                      (this._lastPlayheadTimeUpdatedTime = null);
                  }),
                  (s.prototype._prepareRebufferTrackerState = function (e) {
                    (this._lastCheckedTime = e),
                      (this._lastPlayheadTime = this.data.player_playhead_time),
                      (this._lastPlayheadTimeUpdatedTime = e);
                  }),
                  (s.prototype._cleanupRebufferTracker = function (e, t) {
                    var i =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (!this.disableRebufferTracking) {
                      if (this._rebuffering)
                        (this._rebuffering = !1),
                          this._updateRebufferMetrics(
                            t.viewer_time - this._lastCheckedTime
                          ),
                          this.emit("rebufferend", {
                            viewer_time: t.viewer_time,
                          });
                      else {
                        if (null === this._lastCheckedTime)
                          return void this._updateRebufferMetrics();
                        var r =
                            this.data.player_playhead_time -
                            this._lastPlayheadTime,
                          n = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                        r > 0 && n - r > this.minimumRebufferDuration
                          ? ((0, a.default)(
                              this.data,
                              "view_rebuffer_count",
                              1
                            ),
                            this._updateRebufferMetrics(n - r),
                            this.emit("rebufferstart", {
                              viewer_time: this._lastPlayheadTimeUpdatedTime,
                            }),
                            this.emit("rebufferend", {
                              viewer_time:
                                this._lastPlayheadTimeUpdatedTime + n - r,
                            }))
                          : this._updateRebufferMetrics();
                      }
                      i
                        ? this._prepareRebufferTrackerState(t.viewer_time)
                        : this._clearRebufferTrackerState();
                    }
                  }),
                  (s.prototype._updateRebufferMetrics = function (e) {
                    e > 0 &&
                      (0, a.default)(this.data, "view_rebuffer_duration", e),
                      this.data.view_watch_time >= 0 &&
                        this.data.view_rebuffer_count > 0 &&
                        ((this.data.view_rebuffer_frequency =
                          this.data.view_rebuffer_count /
                          this.data.view_watch_time),
                        (this.data.view_rebuffer_percentage =
                          this.data.view_rebuffer_duration /
                          this.data.view_watch_time));
                  }),
                  (t.default = s);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(3)) && r.__esModule ? r : { default: r },
                  a = function () {
                    this.on("viewinit", function () {
                      var e = this.data,
                        t = e.view_id;
                      if (!e.view_program_changed) {
                        var i = function (e, i) {
                          var r = i.viewer_time;
                          "playing" === e.type &&
                          void 0 === this.data.view_time_to_first_frame
                            ? this.calculateTimeToFirstFrame(
                                r || n.default.now(),
                                t
                              )
                            : "adplaying" === e.type &&
                              (void 0 === this.data.view_time_to_first_frame ||
                                this.inPrerollPosition()) &&
                              this.calculateTimeToFirstFrame(
                                r || n.default.now(),
                                t
                              );
                        };
                        this.one("playing", i),
                          this.one("adplaying", i),
                          this.one("viewend", function () {
                            this.off("playing", i), this.off("adplaying", i);
                          });
                      }
                    });
                  };
                (a.prototype.calculateTimeToFirstFrame = function (e, t) {
                  t === this.data.view_id &&
                    (this._updateWatchTime(null, { viewer_time: e }),
                    (this.data.view_time_to_first_frame =
                      this.data.view_watch_time),
                    (this.data.player_autoplay_on ||
                      this.data.video_is_autoplay) &&
                      this.NAVIGATION_START &&
                      (this.data.view_aggregate_startup_time =
                        this.data.view_start +
                        this.data.view_watch_time -
                        this.NAVIGATION_START));
                }),
                  (t.default = a);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    var e = this;
                    this.on("viewinit", function () {
                      this._lastPlayheadPosition = -1;
                    }),
                      [
                        "pause",
                        "rebufferstart",
                        "seeking",
                        "error",
                        "adbreakstart",
                        "hb",
                      ].forEach(function (t) {
                        e.on(t, function () {
                          if (
                            this._lastPlayheadPosition >= 0 &&
                            this.data.player_playhead_time >= 0 &&
                            this._lastPlayerWidth >= 0 &&
                            this._lastSourceWidth > 0 &&
                            this._lastPlayerHeight >= 0 &&
                            this._lastSourceHeight > 0
                          ) {
                            var e =
                              this.data.player_playhead_time -
                              this._lastPlayheadPosition;
                            if (e < 0)
                              return void (this._lastPlayheadPosition = -1);
                            var t = Math.min(
                                this._lastPlayerWidth / this._lastSourceWidth,
                                this._lastPlayerHeight / this._lastSourceHeight
                              ),
                              i = Math.max(0, t - 1),
                              r = Math.max(0, 1 - t);
                            (this.data.view_max_upscale_percentage = Math.max(
                              this.data.view_max_upscale_percentage || 0,
                              i
                            )),
                              (this.data.view_max_downscale_percentage =
                                Math.max(
                                  this.data.view_max_downscale_percentage || 0,
                                  r
                                )),
                              (0, n.default)(
                                this.data,
                                "view_total_content_playback_time",
                                e
                              ),
                              (0, n.default)(
                                this.data,
                                "view_total_upscaling",
                                i * e
                              ),
                              (0, n.default)(
                                this.data,
                                "view_total_downscaling",
                                r * e
                              );
                          }
                          this._lastPlayheadPosition = -1;
                        });
                      }),
                      ["playing", "hb"].forEach(function (t) {
                        e.on(t, function () {
                          (this._lastPlayheadPosition =
                            this.data.player_playhead_time),
                            (this._lastPlayerWidth = this.data.player_width),
                            (this._lastPlayerHeight = this.data.player_height),
                            (this._lastSourceWidth =
                              this.data.video_source_width),
                            (this._lastSourceHeight =
                              this.data.video_source_height);
                        });
                      });
                  });
                var r,
                  n = (r = i(2)) && r.__esModule ? r : { default: r };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    (this.isSeeking = !1),
                      this.on("seeking", function (e, t) {
                        (0, s.default)(this.data, t),
                          (this._lastSeekingTime = n.default.now()),
                          !1 === this.isSeeking &&
                            ((this.isSeeking = !0), this.send("seeking"));
                      }),
                      this.on("seeked", function () {
                        this.isSeeking = !1;
                        var e = this._lastSeekingTime || n.default.now(),
                          t = n.default.now() - e;
                        (0, a.default)(this.data, "view_seek_count", 1),
                          (0, a.default)(this.data, "view_seek_duration", t);
                        var i = this.data.view_max_seek_time || 0;
                        this.data.view_max_seek_time = Math.max(i, t);
                      }),
                      this.on("viewend", function () {
                        this.isSeeking = !1;
                      });
                  });
                var n = r(i(3)),
                  a = r(i(2)),
                  s = r(i(1));
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var i = [],
                          r = !0,
                          n = !1,
                          a = void 0;
                        try {
                          for (
                            var s, o = e[Symbol.iterator]();
                            !(r = (s = o.next()).done) &&
                            (i.push(s.value), !t || i.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (n = !0), (a = e);
                        } finally {
                          try {
                            !r && o.return && o.return();
                          } finally {
                            if (n) throw a;
                          }
                        }
                        return i;
                      })(e, t);
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  a = r(i(2)),
                  s = i(5),
                  o = r(i(1)),
                  l = function (e, t) {
                    e.push(t),
                      e.sort(function (e, t) {
                        return e.viewer_time - t.viewer_time;
                      });
                  },
                  d = [
                    "adbreakstart",
                    "adrequest",
                    "adresponse",
                    "adplay",
                    "adplaying",
                    "adpause",
                    "adended",
                    "adbreakend",
                    "aderror",
                  ],
                  _ = function () {
                    var e = this;
                    this.on("viewinit", function () {
                      (this.isAdBreak = !1),
                        (this._currentAdRequestNumber = 0),
                        (this._currentAdResponseNumber = 0),
                        (this._adRequests = []),
                        (this._adResponses = []),
                        (this._adHasPlayed = !1),
                        (this._wouldBeNewAdPlay = !0),
                        (this._prerollPlayTime = void 0);
                    }),
                      d.forEach(function (t) {
                        return e.on(t, e._updateAdData);
                      });
                    var t = function () {
                      e.isAdBreak = !1;
                    };
                    this.on("adbreakstart", function () {
                      this.isAdBreak = !0;
                    }),
                      this.on("play", t),
                      this.on("playing", t),
                      this.on("viewend", t),
                      this.on("adrequest", function (e, t) {
                        (t = (0, o.default)(
                          {
                            ad_request_id:
                              "generatedAdRequestId" +
                              this._currentAdRequestNumber++,
                          },
                          t
                        )),
                          l(this._adRequests, t),
                          (0, a.default)(this.data, "view_ad_request_count"),
                          this.inPrerollPosition() &&
                            ((this.data.view_preroll_requested = !0),
                            this._adHasPlayed ||
                              (0, a.default)(
                                this.data,
                                "view_preroll_request_count"
                              ));
                      }),
                      this.on("adresponse", function (e, t) {
                        (t = (0, o.default)(
                          {
                            ad_request_id:
                              "generatedAdRequestId" +
                              this._currentAdResponseNumber++,
                          },
                          t
                        )),
                          l(this._adResponses, t);
                        var i = this.findAdRequest(t.ad_request_id);
                        i &&
                          (0, a.default)(
                            this.data,
                            "view_ad_request_time",
                            Math.max(0, t.viewer_time - i.viewer_time)
                          );
                      }),
                      this.on("adplay", function (e, t) {
                        (this._adHasPlayed = !0),
                          this._wouldBeNewAdPlay &&
                            ((this._wouldBeNewAdPlay = !1),
                            (0, a.default)(this.data, "view_ad_played_count")),
                          this.inPrerollPosition() &&
                            !this.data.view_preroll_played &&
                            ((this.data.view_preroll_played = !0),
                            this._adRequests.length > 0 &&
                              (this.data.view_preroll_request_time = Math.max(
                                0,
                                t.viewer_time - this._adRequests[0].viewer_time
                              )),
                            this.data.view_start &&
                              (this.data.view_startup_preroll_request_time =
                                Math.max(
                                  0,
                                  t.viewer_time - this.data.view_start
                                )),
                            (this._prerollPlayTime = t.viewer_time));
                      }),
                      this.on("adplaying", function (e, t) {
                        this.inPrerollPosition() &&
                          void 0 === this.data.view_preroll_load_time &&
                          void 0 !== this._prerollPlayTime &&
                          ((this.data.view_preroll_load_time =
                            t.viewer_time - this._prerollPlayTime),
                          (this.data.view_startup_preroll_load_time =
                            t.viewer_time - this._prerollPlayTime));
                      }),
                      this.on("adended", function () {
                        this._wouldBeNewAdPlay = !0;
                      }),
                      this.on("aderror", function () {
                        this._wouldBeNewAdPlay = !0;
                      });
                  };
                (_.prototype.inPrerollPosition = function () {
                  return (
                    void 0 === this.data.view_content_playback_time ||
                    this.data.view_content_playback_time <= 1e3
                  );
                }),
                  (_.prototype.findAdRequest = function (e) {
                    for (var t = 0; t < this._adRequests.length; t++)
                      if (this._adRequests[t].ad_request_id === e)
                        return this._adRequests[t];
                  }),
                  (_.prototype._updateAdData = function (e, t) {
                    if (this.inPrerollPosition()) {
                      if (
                        !this.data.view_preroll_ad_tag_hostname &&
                        t.ad_tag_url
                      ) {
                        var i = n(
                            (0, s.extractHostnameAndDomain)(t.ad_tag_url),
                            2
                          ),
                          r = i[0],
                          a = i[1];
                        (this.data.view_preroll_ad_tag_domain = a),
                          (this.data.view_preroll_ad_tag_hostname = r);
                      }
                      if (
                        !this.data.view_preroll_ad_asset_hostname &&
                        t.ad_asset_url
                      ) {
                        var o = n(
                            (0, s.extractHostnameAndDomain)(t.ad_asset_url),
                            2
                          ),
                          l = o[0],
                          d = o[1];
                        (this.data.view_preroll_ad_asset_domain = d),
                          (this.data.view_preroll_ad_asset_hostname = l);
                      }
                    }
                  }),
                  (t.default = _);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    var e = this,
                      t = void 0,
                      i = void 0,
                      r = function () {
                        e.disableRebufferTracking ||
                          ((0, a.default)(
                            e.data,
                            "view_waiting_rebuffer_count",
                            1
                          ),
                          (t = n.default.now()),
                          (i = window.setInterval(function () {
                            if (t) {
                              var i = n.default.now();
                              (0, a.default)(
                                e.data,
                                "view_waiting_rebuffer_duration",
                                i - t
                              ),
                                (t = i);
                            }
                          }, 250)));
                      },
                      s = function () {
                        e.disableRebufferTracking ||
                          (t &&
                            ((0, a.default)(
                              e.data,
                              "view_waiting_rebuffer_duration",
                              n.default.now() - t
                            ),
                            (t = !1),
                            window.clearInterval(i)));
                      },
                      o = !1,
                      l = function () {
                        o = !0;
                      },
                      d = function () {
                        (o = !1), s();
                      };
                    this.on("waiting", function () {
                      o && r();
                    }),
                      this.on("playing", function () {
                        s(), l();
                      }),
                      this.on("pause", d),
                      this.on("seeking", d);
                  });
                var n = r(i(3)),
                  a = r(i(2));
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    var e = this;
                    this.one("playbackheartbeat", s),
                      this.on("playbackheartbeatend", function () {
                        e.off("before*", o), e.one("playbackheartbeat", s);
                      });
                  });
                var n = r(i(1)),
                  a = r(i(3)),
                  s = function () {
                    (this.lastWallClockTime = a.default.now()),
                      this.on("before*", o);
                  },
                  o = function (e) {
                    var t = a.default.now(),
                      i = this.lastWallClockTime;
                    (this.lastWallClockTime = t),
                      t - i > 3e4 &&
                        (this.emit("devicesleep", { viewer_time: i }),
                        (0, n.default)(this.data, { viewer_time: i }),
                        this.send("devicesleep"),
                        this.emit("devicewake", { viewer_time: t }),
                        (0, n.default)(this.data, { viewer_time: t }),
                        this.send("devicewake"));
                  };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  a = r(i(0)),
                  s = i(43),
                  o = r(i(4)),
                  l = r(i(56)),
                  d = r(i(13)),
                  _ = r(i(57)),
                  u = r(i(17)),
                  h = r(i(58)),
                  c = r(i(1)),
                  p = [
                    "env_key",
                    "view_id",
                    "view_sequence_number",
                    "player_sequence_number",
                    "beacon_domain",
                    "player_playhead_time",
                    "viewer_time",
                    "mux_api_version",
                    "event",
                    "video_id",
                    "player_instance_id",
                  ],
                  f = ["viewstart", "error", "ended", "viewend"],
                  E = function (e, t) {
                    var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    (this.mux = e),
                      (this.envKey = t),
                      (this.eventQueue = new h.default(
                        (0, l.default)(t, i.beaconDomain)
                      )),
                      (this.previousBeaconData = null),
                      (this.lastEventTime = null),
                      (this.sampleRate = i.sampleRate),
                      (this.disableCookies = i.disableCookies),
                      (this.respectDoNotTrack = i.respectDoNotTrack);
                    var r = i.platform || {};
                    this.pageLevelData = {
                      mux_api_version: this.mux.API_VERSION,
                      mux_embed: this.mux.NAME,
                      mux_embed_version: this.mux.VERSION,
                      viewer_application_name: r.name,
                      viewer_application_version: r.version,
                      viewer_application_engine: r.layout,
                      viewer_device_name: r.product,
                      viewer_device_category: "",
                      viewer_device_manufacturer: r.manufacturer,
                      viewer_os_family: r.os && r.os.family,
                      viewer_os_architecture: r.os && r.os.architecture,
                      viewer_os_version: r.os && r.os.version,
                    };
                    var n = (0, _.default)();
                    n &&
                      (this.pageLevelData = (0, c.default)(this.pageLevelData, {
                        viewer_connection_type: n,
                      })),
                      void 0 !== a.default &&
                        a.default.location &&
                        a.default.location.href &&
                        (this.pageLevelData.page_url = a.default.location.href),
                      (this.viewerData = this.disableCookies
                        ? {}
                        : (0, s.getAndUpdateViewerData)());
                  };
                (E.prototype.send = function (e, t) {
                  if (e) {
                    if (this.respectDoNotTrack && (0, d.default)())
                      return o.default.info(
                        "Not sending `" +
                          e +
                          "` because Do Not Track is enabled"
                      );
                    if (!t || "object" !== (void 0 === t ? "undefined" : n(t)))
                      return o.default.error(
                        "A data object was expected in send() but was not provided"
                      );
                    var i = this.disableCookies
                        ? {}
                        : (0, s.getAndUpdateSessionData)(),
                      r = {};
                    (0, c.default)(r, this.pageLevelData),
                      (0, c.default)(r, t),
                      (0, c.default)(r, i),
                      (0, c.default)(r, this.viewerData),
                      (r.event = e),
                      (r.env_key = this.envKey),
                      r.user_id &&
                        ((r.viewer_user_id = r.user_id), delete r.user_id);
                    var a = r.mux_sample_number >= this.sampleRate,
                      l = this._deduplicateBeaconData(e, r),
                      _ = (0, u.default)(l);
                    if (((this.lastEventTime = this.mux.utils.now()), a))
                      return o.default.info(
                        "Not sending event due to sample rate restriction",
                        e,
                        r,
                        _
                      );
                    if (!this.envKey)
                      return o.default.info(
                        "Not sending event due to missing environment key",
                        e,
                        r,
                        _
                      );
                    if (!this.rateLimited) {
                      if (
                        (o.default.info("Sending event", e, r, _),
                        (this.rateLimited = !this.eventQueue.queueEvent(e, _)),
                        this.mux.WINDOW_UNLOADING && "viewend" === e)
                      )
                        this.eventQueue.destroy(!0);
                      else if (
                        (f.indexOf(e) >= 0 && this.eventQueue.flushEvents(),
                        this.rateLimited)
                      )
                        return (
                          (r.event = "eventrateexceeded"),
                          (_ = (0, u.default)(r)),
                          this.eventQueue.queueEvent(r.event, _),
                          o.default.error(
                            "Beaconing disabled due to rate limit."
                          )
                        );
                    }
                  }
                }),
                  (E.prototype.destroy = function () {
                    this.eventQueue.destroy(!1);
                  }),
                  (E.prototype._deduplicateBeaconData = function (e, t) {
                    var i = this,
                      r = {},
                      a = t.view_id;
                    if (
                      !a ||
                      "viewstart" === e ||
                      "viewend" === e ||
                      !this.previousBeaconData ||
                      this.mux.utils.now() - this.lastEventTime >= 6e5
                    )
                      (r = (0, c.default)({}, t)),
                        a && (this.previousBeaconData = r),
                        a &&
                          "viewend" === e &&
                          (this.previousBeaconData = null);
                    else {
                      var s = 0 === e.indexOf("request");
                      Object.keys(t).forEach(function (a) {
                        var o,
                          l = t[a];
                        (l !== i.previousBeaconData[a] ||
                          p.indexOf(a) > -1 ||
                          ((o = i.previousBeaconData[a]),
                          !(!s || 0 !== a.indexOf("request_")) &&
                            ("request_response_headers" === a ||
                              "object" !==
                                (void 0 === l ? "undefined" : n(l)) ||
                              "object" !==
                                (void 0 === o ? "undefined" : n(o)) ||
                              Object.keys(l || {}).length !==
                                Object.keys(o || {}).length)) ||
                          ("renditionchange" === e &&
                            0 === a.indexOf("video_source_"))) &&
                          ((r[a] = l), (i.previousBeaconData[a] = l));
                      });
                    }
                    return r;
                  }),
                  (t.default = E);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.getAndUpdateSessionData = t.getAndUpdateViewerData =
                    void 0);
                var n = r(i(15)),
                  a = r(i(55)),
                  s = i(7),
                  o = r(i(3)),
                  l = function () {
                    var e = void 0;
                    try {
                      e = n.default.parse(a.default.get("muxData") || "");
                    } catch (t) {
                      e = {};
                    }
                    return e;
                  },
                  d = function (e) {
                    try {
                      a.default.set("muxData", n.default.stringify(e), {
                        expires: 7300,
                      });
                    } catch (e) {}
                  };
                (t.getAndUpdateViewerData = function () {
                  var e = l();
                  return (
                    (e.mux_viewer_id =
                      e.mux_viewer_id || (0, s.generateUUID)()),
                    (e.msn = e.msn || Math.random()),
                    d(e),
                    { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
                  );
                }),
                  (t.getAndUpdateSessionData = function () {
                    var e = l(),
                      t = o.default.now();
                    return (
                      e.session_start &&
                        ((e.sst = e.session_start), delete e.session_start),
                      e.session_id &&
                        ((e.sid = e.session_id), delete e.session_id),
                      e.session_expires &&
                        ((e.sex = e.session_expires), delete e.session_expires),
                      (!e.sex || e.sex < t) &&
                        ((e.sid = (0, s.generateUUID)()), (e.sst = t)),
                      (e.sex = t + 15e5),
                      d(e),
                      {
                        session_id: e.sid,
                        session_start: e.sst,
                        session_expires: e.sex,
                      }
                    );
                  });
              },
              function (e, t, i) {
                "use strict";
                var r = i(45),
                  n = i(16),
                  a = i(11),
                  s = Object.prototype.hasOwnProperty,
                  o = {
                    brackets: function (e) {
                      return e + "[]";
                    },
                    comma: "comma",
                    indices: function (e, t) {
                      return e + "[" + t + "]";
                    },
                    repeat: function (e) {
                      return e;
                    },
                  },
                  l = Array.isArray,
                  d = Array.prototype.push,
                  _ = function (e, t) {
                    d.apply(e, l(t) ? t : [t]);
                  },
                  u = Date.prototype.toISOString,
                  h = a.default,
                  c = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: n.encode,
                    encodeValuesOnly: !1,
                    format: h,
                    formatter: a.formatters[h],
                    indices: !1,
                    serializeDate: function (e) {
                      return u.call(e);
                    },
                    skipNulls: !1,
                    strictNullHandling: !1,
                  },
                  p = function e(t, i, a, s, o, d, u, h, p, f, E, m, y, v, g) {
                    var R,
                      S,
                      T = t;
                    if (g.has(t)) throw RangeError("Cyclic object value");
                    if (
                      ("function" == typeof u
                        ? (T = u(i, T))
                        : T instanceof Date
                        ? (T = f(T))
                        : "comma" === a &&
                          l(T) &&
                          (T = n.maybeMap(T, function (e) {
                            return e instanceof Date ? f(e) : e;
                          })),
                      null === T)
                    ) {
                      if (s) return d && !y ? d(i, c.encoder, v, "key", E) : i;
                      T = "";
                    }
                    if (
                      "string" == typeof (R = T) ||
                      "number" == typeof R ||
                      "boolean" == typeof R ||
                      "symbol" == typeof R ||
                      "bigint" == typeof R ||
                      n.isBuffer(T)
                    )
                      return d
                        ? [
                            m(y ? i : d(i, c.encoder, v, "key", E)) +
                              "=" +
                              m(d(T, c.encoder, v, "value", E)),
                          ]
                        : [m(i) + "=" + m(String(T))];
                    var A = [];
                    if (void 0 === T) return A;
                    if ("comma" === a && l(T))
                      S = [
                        { value: T.length > 0 ? T.join(",") || null : void 0 },
                      ];
                    else if (l(u)) S = u;
                    else {
                      var L = Object.keys(T);
                      S = h ? L.sort(h) : L;
                    }
                    for (var P = 0; P < S.length; ++P) {
                      var b = S[P],
                        I =
                          "object" == typeof b && void 0 !== b.value
                            ? b.value
                            : T[b];
                      if (!o || null !== I) {
                        var D = l(T)
                          ? "function" == typeof a
                            ? a(i, b)
                            : i
                          : i + (p ? "." + b : "[" + b + "]");
                        g.set(t, !0),
                          _(
                            A,
                            e(I, D, a, s, o, d, u, h, p, f, E, m, y, v, r())
                          );
                      }
                    }
                    return A;
                  },
                  f = function (e) {
                    if (!e) return c;
                    if (
                      null !== e.encoder &&
                      void 0 !== e.encoder &&
                      "function" != typeof e.encoder
                    )
                      throw TypeError("Encoder has to be a function.");
                    var t = e.charset || c.charset;
                    if (
                      void 0 !== e.charset &&
                      "utf-8" !== e.charset &&
                      "iso-8859-1" !== e.charset
                    )
                      throw TypeError(
                        "The charset option must be either utf-8, iso-8859-1, or undefined"
                      );
                    var i = a.default;
                    if (void 0 !== e.format) {
                      if (!s.call(a.formatters, e.format))
                        throw TypeError("Unknown format option provided.");
                      i = e.format;
                    }
                    var r = a.formatters[i],
                      n = c.filter;
                    return (
                      ("function" == typeof e.filter || l(e.filter)) &&
                        (n = e.filter),
                      {
                        addQueryPrefix:
                          "boolean" == typeof e.addQueryPrefix
                            ? e.addQueryPrefix
                            : c.addQueryPrefix,
                        allowDots:
                          void 0 === e.allowDots ? c.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel:
                          "boolean" == typeof e.charsetSentinel
                            ? e.charsetSentinel
                            : c.charsetSentinel,
                        delimiter:
                          void 0 === e.delimiter ? c.delimiter : e.delimiter,
                        encode:
                          "boolean" == typeof e.encode ? e.encode : c.encode,
                        encoder:
                          "function" == typeof e.encoder
                            ? e.encoder
                            : c.encoder,
                        encodeValuesOnly:
                          "boolean" == typeof e.encodeValuesOnly
                            ? e.encodeValuesOnly
                            : c.encodeValuesOnly,
                        filter: n,
                        format: i,
                        formatter: r,
                        serializeDate:
                          "function" == typeof e.serializeDate
                            ? e.serializeDate
                            : c.serializeDate,
                        skipNulls:
                          "boolean" == typeof e.skipNulls
                            ? e.skipNulls
                            : c.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling:
                          "boolean" == typeof e.strictNullHandling
                            ? e.strictNullHandling
                            : c.strictNullHandling,
                      }
                    );
                  };
                e.exports = function (e, t) {
                  var i,
                    n,
                    a = e,
                    s = f(t);
                  "function" == typeof s.filter
                    ? (a = (0, s.filter)("", a))
                    : l(s.filter) && (n = s.filter);
                  var d = [];
                  if ("object" != typeof a || null === a) return "";
                  i =
                    t && t.arrayFormat in o
                      ? t.arrayFormat
                      : t && "indices" in t
                      ? t.indices
                        ? "indices"
                        : "repeat"
                      : "indices";
                  var u = o[i];
                  n || (n = Object.keys(a)), s.sort && n.sort(s.sort);
                  for (var h = r(), c = 0; c < n.length; ++c) {
                    var E = n[c];
                    (s.skipNulls && null === a[E]) ||
                      _(
                        d,
                        p(
                          a[E],
                          E,
                          u,
                          s.strictNullHandling,
                          s.skipNulls,
                          s.encode ? s.encoder : null,
                          s.filter,
                          s.sort,
                          s.allowDots,
                          s.serializeDate,
                          s.format,
                          s.formatter,
                          s.encodeValuesOnly,
                          s.charset,
                          h
                        )
                      );
                  }
                  var m = d.join(s.delimiter),
                    y = !0 === s.addQueryPrefix ? "?" : "";
                  return (
                    s.charsetSentinel &&
                      ("iso-8859-1" === s.charset
                        ? (y += "utf8=%26%2310003%3B&")
                        : (y += "utf8=%E2%9C%93&")),
                    m.length > 0 ? y + m : ""
                  );
                };
              },
              function (e, t, i) {
                "use strict";
                var r = i(9),
                  n = i(50),
                  a = i(52),
                  s = r("%TypeError%"),
                  o = r("%WeakMap%", !0),
                  l = r("%Map%", !0),
                  d = n("WeakMap.prototype.get", !0),
                  _ = n("WeakMap.prototype.set", !0),
                  u = n("WeakMap.prototype.has", !0),
                  h = n("Map.prototype.get", !0),
                  c = n("Map.prototype.set", !0),
                  p = n("Map.prototype.has", !0),
                  f = function (e, t) {
                    for (var i, r = e; null !== (i = r.next); r = i)
                      if (i.key === t)
                        return (
                          (r.next = i.next), (i.next = e.next), (e.next = i), i
                        );
                  },
                  E = function (e, t) {
                    var i = f(e, t);
                    return i && i.value;
                  },
                  m = function (e, t, i) {
                    var r = f(e, t);
                    r
                      ? (r.value = i)
                      : (e.next = { key: t, next: e.next, value: i });
                  };
                e.exports = function () {
                  var e,
                    t,
                    i,
                    r = {
                      assert: function (e) {
                        if (!r.has(e))
                          throw new s("Side channel does not contain " + a(e));
                      },
                      get: function (r) {
                        if (
                          o &&
                          r &&
                          ("object" == typeof r || "function" == typeof r)
                        ) {
                          if (e) return d(e, r);
                        } else if (l) {
                          if (t) return h(t, r);
                        } else if (i) return E(i, r);
                      },
                      has: function (r) {
                        if (
                          o &&
                          r &&
                          ("object" == typeof r || "function" == typeof r)
                        ) {
                          if (e) return u(e, r);
                        } else if (l) {
                          if (t) return p(t, r);
                        } else if (i) return !!f(i, r);
                        return !1;
                      },
                      set: function (r, n) {
                        o &&
                        r &&
                        ("object" == typeof r || "function" == typeof r)
                          ? (e || (e = new o()), _(e, r, n))
                          : l
                          ? (t || (t = new l()), c(t, r, n))
                          : (i || (i = { key: {}, next: null }), m(i, r, n));
                      },
                    };
                  return r;
                };
              },
              function (e, t, i) {
                "use strict";
                var r = "undefined" != typeof Symbol && Symbol,
                  n = i(47);
                e.exports = function () {
                  return (
                    "function" == typeof r &&
                    "function" == typeof Symbol &&
                    "symbol" == typeof r("foo") &&
                    "symbol" == typeof Symbol("bar") &&
                    n()
                  );
                };
              },
              function (e, t, i) {
                "use strict";
                e.exports = function () {
                  if (
                    "function" != typeof Symbol ||
                    "function" != typeof Object.getOwnPropertySymbols
                  )
                    return !1;
                  if ("symbol" == typeof Symbol.iterator) return !0;
                  var e = {},
                    t = Symbol("test"),
                    i = Object(t);
                  if (
                    "string" == typeof t ||
                    "[object Symbol]" !== Object.prototype.toString.call(t) ||
                    "[object Symbol]" !== Object.prototype.toString.call(i)
                  )
                    return !1;
                  for (t in ((e[t] = 42), e)) return !1;
                  if (
                    ("function" == typeof Object.keys &&
                      0 !== Object.keys(e).length) ||
                    ("function" == typeof Object.getOwnPropertyNames &&
                      0 !== Object.getOwnPropertyNames(e).length)
                  )
                    return !1;
                  var r = Object.getOwnPropertySymbols(e);
                  if (
                    1 !== r.length ||
                    r[0] !== t ||
                    !Object.prototype.propertyIsEnumerable.call(e, t)
                  )
                    return !1;
                  if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    if (42 !== n.value || !0 !== n.enumerable) return !1;
                  }
                  return !0;
                };
              },
              function (e, t, i) {
                "use strict";
                var r = Array.prototype.slice,
                  n = Object.prototype.toString;
                e.exports = function (e) {
                  var t = this;
                  if (
                    "function" != typeof t ||
                    "[object Function]" !== n.call(t)
                  )
                    throw TypeError(
                      "Function.prototype.bind called on incompatible " + t
                    );
                  for (
                    var i,
                      a = r.call(arguments, 1),
                      s = Math.max(0, t.length - a.length),
                      o = [],
                      l = 0;
                    l < s;
                    l++
                  )
                    o.push("$" + l);
                  if (
                    ((i = Function(
                      "binder",
                      "return function (" +
                        o.join(",") +
                        "){ return binder.apply(this,arguments); }"
                    )(function () {
                      if (this instanceof i) {
                        var n = t.apply(this, a.concat(r.call(arguments)));
                        return Object(n) === n ? n : this;
                      }
                      return t.apply(e, a.concat(r.call(arguments)));
                    })),
                    t.prototype)
                  ) {
                    var d = function () {};
                    (d.prototype = t.prototype),
                      (i.prototype = new d()),
                      (d.prototype = null);
                  }
                  return i;
                };
              },
              function (e, t, i) {
                "use strict";
                var r = i(10);
                e.exports = r.call(
                  Function.call,
                  Object.prototype.hasOwnProperty
                );
              },
              function (e, t, i) {
                "use strict";
                var r = i(9),
                  n = i(51),
                  a = n(r("String.prototype.indexOf"));
                e.exports = function (e, t) {
                  var i = r(e, !!t);
                  return "function" == typeof i && a(e, ".prototype.") > -1
                    ? n(i)
                    : i;
                };
              },
              function (e, t, i) {
                "use strict";
                var r = i(10),
                  n = i(9),
                  a = n("%Function.prototype.apply%"),
                  s = n("%Function.prototype.call%"),
                  o = n("%Reflect.apply%", !0) || r.call(s, a),
                  l = n("%Object.getOwnPropertyDescriptor%", !0),
                  d = n("%Object.defineProperty%", !0),
                  _ = n("%Math.max%");
                if (d)
                  try {
                    d({}, "a", { value: 1 });
                  } catch (e) {
                    d = null;
                  }
                e.exports = function (e) {
                  var t = o(r, s, arguments);
                  return (
                    l &&
                      d &&
                      l(t, "length").configurable &&
                      d(t, "length", {
                        value: 1 + _(0, e.length - (arguments.length - 1)),
                      }),
                    t
                  );
                };
                var u = function () {
                  return o(r, a, arguments);
                };
                d ? d(e.exports, "apply", { value: u }) : (e.exports.apply = u);
              },
              function (e, t, i) {
                function r(e, t, i) {
                  var r = "double" === (i.quoteStyle || t) ? '"' : "'";
                  return r + e + r;
                }
                function n(e) {
                  return !(
                    "[object Array]" !== o(e) ||
                    (x && "object" == typeof e && x in e)
                  );
                }
                function a(e) {
                  if (M)
                    return e && "object" == typeof e && e instanceof Symbol;
                  if ("symbol" == typeof e) return !0;
                  if (!e || "object" != typeof e || !N) return !1;
                  try {
                    return N.call(e), !0;
                  } catch (e) {}
                  return !1;
                }
                function s(e, t) {
                  return Y.call(e, t);
                }
                function o(e) {
                  return b.call(e);
                }
                function l(e, t) {
                  if (e.indexOf) return e.indexOf(t);
                  for (var i = 0, r = e.length; i < r; i++)
                    if (e[i] === t) return i;
                  return -1;
                }
                function d(e) {
                  var t = e.charCodeAt(0),
                    i = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
                  return i
                    ? "\\" + i
                    : "\\x" +
                        (t < 16 ? "0" : "") +
                        t.toString(16).toUpperCase();
                }
                function _(e) {
                  return "Object(" + e + ")";
                }
                function u(e) {
                  return e + " { ? }";
                }
                function h(e, t, i, r) {
                  return (
                    e + " (" + t + ") {" + (r ? c(i, r) : i.join(", ")) + "}"
                  );
                }
                function c(e, t) {
                  if (0 === e.length) return "";
                  var i = "\n" + t.prev + t.base;
                  return i + e.join("," + i) + "\n" + t.prev;
                }
                function p(e, t) {
                  var i = n(e),
                    r = [];
                  if (i) {
                    r.length = e.length;
                    for (var a = 0; a < e.length; a++)
                      r[a] = s(e, a) ? t(e[a], e) : "";
                  }
                  var o,
                    l = "function" == typeof O ? O(e) : [];
                  if (M) {
                    o = {};
                    for (var d = 0; d < l.length; d++) o["$" + l[d]] = l[d];
                  }
                  for (var _ in e)
                    s(e, _) &&
                      ((i && String(Number(_)) === _ && _ < e.length) ||
                        (M && o["$" + _] instanceof Symbol) ||
                        (/[^\w$]/.test(_)
                          ? r.push(t(_, e) + ": " + t(e[_], e))
                          : r.push(_ + ": " + t(e[_], e))));
                  if ("function" == typeof O)
                    for (var u = 0; u < l.length; u++)
                      w.call(e, l[u]) &&
                        r.push("[" + t(l[u]) + "]: " + t(e[l[u]], e));
                  return r;
                }
                var f = "function" == typeof Map && Map.prototype,
                  E =
                    Object.getOwnPropertyDescriptor && f
                      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
                      : null,
                  m = f && E && "function" == typeof E.get ? E.get : null,
                  y = f && Map.prototype.forEach,
                  v = "function" == typeof Set && Set.prototype,
                  g =
                    Object.getOwnPropertyDescriptor && v
                      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
                      : null,
                  R = v && g && "function" == typeof g.get ? g.get : null,
                  S = v && Set.prototype.forEach,
                  T =
                    "function" == typeof WeakMap && WeakMap.prototype
                      ? WeakMap.prototype.has
                      : null,
                  A =
                    "function" == typeof WeakSet && WeakSet.prototype
                      ? WeakSet.prototype.has
                      : null,
                  L =
                    "function" == typeof WeakRef && WeakRef.prototype
                      ? WeakRef.prototype.deref
                      : null,
                  P = Boolean.prototype.valueOf,
                  b = Object.prototype.toString,
                  I = Function.prototype.toString,
                  D = String.prototype.match,
                  C =
                    "function" == typeof BigInt
                      ? BigInt.prototype.valueOf
                      : null,
                  O = Object.getOwnPropertySymbols,
                  N =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? Symbol.prototype.toString
                      : null,
                  M =
                    "function" == typeof Symbol &&
                    "object" == typeof Symbol.iterator,
                  w = Object.prototype.propertyIsEnumerable,
                  k =
                    ("function" == typeof Reflect
                      ? Reflect.getPrototypeOf
                      : Object.getPrototypeOf) ||
                    ([].__proto__ === Array.prototype
                      ? function (e) {
                          return e.__proto__;
                        }
                      : null),
                  U = i(53).custom,
                  F = U && a(U) ? U : null,
                  x =
                    "function" == typeof Symbol && void 0 !== Symbol.toStringTag
                      ? Symbol.toStringTag
                      : null;
                e.exports = function e(t, i, f, E) {
                  function v(t, i, r) {
                    if ((i && (E = E.slice()).push(i), r)) {
                      var n = { depth: g.depth };
                      return (
                        s(g, "quoteStyle") && (n.quoteStyle = g.quoteStyle),
                        e(t, n, f + 1, E)
                      );
                    }
                    return e(t, g, f + 1, E);
                  }
                  var g = i || {};
                  if (
                    s(g, "quoteStyle") &&
                    "single" !== g.quoteStyle &&
                    "double" !== g.quoteStyle
                  )
                    throw TypeError(
                      'option "quoteStyle" must be "single" or "double"'
                    );
                  if (
                    s(g, "maxStringLength") &&
                    ("number" == typeof g.maxStringLength
                      ? g.maxStringLength < 0 && g.maxStringLength !== 1 / 0
                      : null !== g.maxStringLength)
                  )
                    throw TypeError(
                      'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
                    );
                  var b = !s(g, "customInspect") || g.customInspect;
                  if ("boolean" != typeof b && "symbol" !== b)
                    throw TypeError(
                      "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
                    );
                  if (
                    s(g, "indent") &&
                    null !== g.indent &&
                    "	" !== g.indent &&
                    !(parseInt(g.indent, 10) === g.indent && g.indent > 0)
                  )
                    throw TypeError(
                      'options "indent" must be "\\t", an integer > 0, or `null`'
                    );
                  if (void 0 === t) return "undefined";
                  if (null === t) return "null";
                  if ("boolean" == typeof t) return t ? "true" : "false";
                  if ("string" == typeof t)
                    return (function e(t, i) {
                      if (t.length > i.maxStringLength) {
                        var n = t.length - i.maxStringLength;
                        return (
                          e(t.slice(0, i.maxStringLength), i) +
                          "... " +
                          n +
                          " more character" +
                          (n > 1 ? "s" : "")
                        );
                      }
                      return r(
                        t
                          .replace(/(['\\])/g, "\\$1")
                          .replace(/[\x00-\x1f]/g, d),
                        "single",
                        i
                      );
                    })(t, g);
                  if ("number" == typeof t)
                    return 0 === t ? (1 / 0 / t > 0 ? "0" : "-0") : String(t);
                  if ("bigint" == typeof t) return String(t) + "n";
                  var O = void 0 === g.depth ? 5 : g.depth;
                  if (
                    (void 0 === f && (f = 0),
                    f >= O && O > 0 && "object" == typeof t)
                  )
                    return n(t) ? "[Array]" : "[Object]";
                  var w = (function (e, t) {
                    var i;
                    if ("	" === e.indent) i = "	";
                    else {
                      if (!("number" == typeof e.indent && e.indent > 0))
                        return null;
                      i = Array(e.indent + 1).join(" ");
                    }
                    return { base: i, prev: Array(t + 1).join(i) };
                  })(g, f);
                  if (void 0 === E) E = [];
                  else if (l(E, t) >= 0) return "[Circular]";
                  if ("function" == typeof t) {
                    var U = (function (e) {
                        if (e.name) return e.name;
                        var t = D.call(I.call(e), /^function\s*([\w$]+)/);
                        return t ? t[1] : null;
                      })(t),
                      Y = p(t, v);
                    return (
                      "[Function" +
                      (U ? ": " + U : " (anonymous)") +
                      "]" +
                      (Y.length > 0 ? " { " + Y.join(", ") + " }" : "")
                    );
                  }
                  if (a(t)) {
                    var B = M
                      ? String(t).replace(/^(Symbol\(.*\))_[^)]*$/, "$1")
                      : N.call(t);
                    return "object" != typeof t || M ? B : _(B);
                  }
                  if (
                    !(!t || "object" != typeof t) &&
                    (("undefined" != typeof HTMLElement &&
                      t instanceof HTMLElement) ||
                      ("string" == typeof t.nodeName &&
                        "function" == typeof t.getAttribute))
                  ) {
                    for (
                      var G = "<" + String(t.nodeName).toLowerCase(),
                        K = t.attributes || [],
                        H = 0;
                      H < K.length;
                      H++
                    )
                      G +=
                        " " +
                        K[H].name +
                        "=" +
                        r(
                          String(K[H].value).replace(/"/g, "&quot;"),
                          "double",
                          g
                        );
                    return (
                      (G += ">"),
                      t.childNodes && t.childNodes.length && (G += "..."),
                      (G += "</" + String(t.nodeName).toLowerCase() + ">")
                    );
                  }
                  if (n(t)) {
                    if (0 === t.length) return "[]";
                    var j = p(t, v);
                    return w &&
                      !(function (e) {
                        for (var t = 0; t < e.length; t++)
                          if (l(e[t], "\n") >= 0) return !1;
                        return !0;
                      })(j)
                      ? "[" + c(j, w) + "]"
                      : "[ " + j.join(", ") + " ]";
                  }
                  if (
                    !(
                      "[object Error]" !== o(t) ||
                      (x && "object" == typeof t && x in t)
                    )
                  ) {
                    var q = p(t, v);
                    return 0 === q.length
                      ? "[" + String(t) + "]"
                      : "{ [" + String(t) + "] " + q.join(", ") + " }";
                  }
                  if ("object" == typeof t && b) {
                    if (F && "function" == typeof t[F]) return t[F]();
                    if ("symbol" !== b && "function" == typeof t.inspect)
                      return t.inspect();
                  }
                  if (
                    (function (e) {
                      if (!m || !e || "object" != typeof e) return !1;
                      try {
                        m.call(e);
                        try {
                          R.call(e);
                        } catch (e) {
                          return !0;
                        }
                        return e instanceof Map;
                      } catch (e) {}
                      return !1;
                    })(t)
                  ) {
                    var V = [];
                    return (
                      y.call(t, function (e, i) {
                        V.push(v(i, t, !0) + " => " + v(e, t));
                      }),
                      h("Map", m.call(t), V, w)
                    );
                  }
                  if (
                    (function (e) {
                      if (!R || !e || "object" != typeof e) return !1;
                      try {
                        R.call(e);
                        try {
                          m.call(e);
                        } catch (e) {
                          return !0;
                        }
                        return e instanceof Set;
                      } catch (e) {}
                      return !1;
                    })(t)
                  ) {
                    var W = [];
                    return (
                      S.call(t, function (e) {
                        W.push(v(e, t));
                      }),
                      h("Set", R.call(t), W, w)
                    );
                  }
                  if (
                    (function (e) {
                      if (!T || !e || "object" != typeof e) return !1;
                      try {
                        T.call(e, T);
                        try {
                          A.call(e, A);
                        } catch (e) {
                          return !0;
                        }
                        return e instanceof WeakMap;
                      } catch (e) {}
                      return !1;
                    })(t)
                  )
                    return u("WeakMap");
                  if (
                    (function (e) {
                      if (!A || !e || "object" != typeof e) return !1;
                      try {
                        A.call(e, A);
                        try {
                          T.call(e, T);
                        } catch (e) {
                          return !0;
                        }
                        return e instanceof WeakSet;
                      } catch (e) {}
                      return !1;
                    })(t)
                  )
                    return u("WeakSet");
                  if (
                    (function (e) {
                      if (!L || !e || "object" != typeof e) return !1;
                      try {
                        return L.call(e), !0;
                      } catch (e) {}
                      return !1;
                    })(t)
                  )
                    return u("WeakRef");
                  if (
                    !(
                      "[object Number]" !== o(t) ||
                      (x && "object" == typeof t && x in t)
                    )
                  )
                    return _(v(Number(t)));
                  if (
                    (function (e) {
                      if (!e || "object" != typeof e || !C) return !1;
                      try {
                        return C.call(e), !0;
                      } catch (e) {}
                      return !1;
                    })(t)
                  )
                    return _(v(C.call(t)));
                  if (
                    !(
                      "[object Boolean]" !== o(t) ||
                      (x && "object" == typeof t && x in t)
                    )
                  )
                    return _(P.call(t));
                  if (
                    !(
                      "[object String]" !== o(t) ||
                      (x && "object" == typeof t && x in t)
                    )
                  )
                    return _(v(String(t)));
                  if (
                    ("[object Date]" !== o(t) ||
                      (x && "object" == typeof t && x in t)) &&
                    ("[object RegExp]" !== o(t) ||
                      (x && "object" == typeof t && x in t))
                  ) {
                    var $ = p(t, v),
                      Q = k
                        ? k(t) === Object.prototype
                        : t instanceof Object || t.constructor === Object,
                      J = t instanceof Object ? "" : "null prototype",
                      z =
                        !Q && x && Object(t) === t && x in t
                          ? o(t).slice(8, -1)
                          : J
                          ? "Object"
                          : "",
                      X =
                        (Q || "function" != typeof t.constructor
                          ? ""
                          : t.constructor.name
                          ? t.constructor.name + " "
                          : "") +
                        (z || J
                          ? "[" + [].concat(z || [], J || []).join(": ") + "] "
                          : "");
                    return 0 === $.length
                      ? X + "{}"
                      : w
                      ? X + "{" + c($, w) + "}"
                      : X + "{ " + $.join(", ") + " }";
                  }
                  return String(t);
                };
                var Y =
                  Object.prototype.hasOwnProperty ||
                  function (e) {
                    return e in this;
                  };
              },
              function (e, t) {},
              function (e, t, i) {
                "use strict";
                var r = i(16),
                  n = Object.prototype.hasOwnProperty,
                  a = Array.isArray,
                  s = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: r.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1,
                  },
                  o = function (e, t) {
                    return e &&
                      "string" == typeof e &&
                      t.comma &&
                      e.indexOf(",") > -1
                      ? e.split(",")
                      : e;
                  },
                  l = function (e, t) {
                    var i,
                      l = {},
                      d = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                      _ =
                        t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                      u = d.split(t.delimiter, _),
                      h = -1,
                      c = t.charset;
                    if (t.charsetSentinel)
                      for (i = 0; i < u.length; ++i)
                        0 === u[i].indexOf("utf8=") &&
                          ("utf8=%E2%9C%93" === u[i]
                            ? (c = "utf-8")
                            : "utf8=%26%2310003%3B" === u[i] &&
                              (c = "iso-8859-1"),
                          (h = i),
                          (i = u.length));
                    for (i = 0; i < u.length; ++i)
                      if (i !== h) {
                        var p,
                          f,
                          E = u[i],
                          m = E.indexOf("]="),
                          y = -1 === m ? E.indexOf("=") : m + 1;
                        -1 === y
                          ? ((p = t.decoder(E, s.decoder, c, "key")),
                            (f = t.strictNullHandling ? null : ""))
                          : ((p = t.decoder(
                              E.slice(0, y),
                              s.decoder,
                              c,
                              "key"
                            )),
                            (f = r.maybeMap(o(E.slice(y + 1), t), function (e) {
                              return t.decoder(e, s.decoder, c, "value");
                            }))),
                          f &&
                            t.interpretNumericEntities &&
                            "iso-8859-1" === c &&
                            (f = f.replace(/&#(\d+);/g, function (e, t) {
                              return String.fromCharCode(parseInt(t, 10));
                            })),
                          E.indexOf("[]=") > -1 && (f = a(f) ? [f] : f),
                          n.call(l, p)
                            ? (l[p] = r.combine(l[p], f))
                            : (l[p] = f);
                      }
                    return l;
                  },
                  d = function (e, t, i, r) {
                    for (
                      var n = r ? t : o(t, i), a = e.length - 1;
                      a >= 0;
                      --a
                    ) {
                      var s,
                        l = e[a];
                      if ("[]" === l && i.parseArrays) s = [].concat(n);
                      else {
                        s = i.plainObjects ? Object.create(null) : {};
                        var d =
                            "[" === l.charAt(0) &&
                            "]" === l.charAt(l.length - 1)
                              ? l.slice(1, -1)
                              : l,
                          _ = parseInt(d, 10);
                        i.parseArrays || "" !== d
                          ? !isNaN(_) &&
                            l !== d &&
                            String(_) === d &&
                            _ >= 0 &&
                            i.parseArrays &&
                            _ <= i.arrayLimit
                            ? ((s = [])[_] = n)
                            : (s[d] = n)
                          : (s = { 0: n });
                      }
                      n = s;
                    }
                    return n;
                  },
                  _ = function (e, t, i, r) {
                    if (e) {
                      var a = i.allowDots
                          ? e.replace(/\.([^.[]+)/g, "[$1]")
                          : e,
                        s = /(\[[^[\]]*])/g,
                        o = i.depth > 0 && /(\[[^[\]]*])/.exec(a),
                        l = o ? a.slice(0, o.index) : a,
                        _ = [];
                      if (l) {
                        if (
                          !i.plainObjects &&
                          n.call(Object.prototype, l) &&
                          !i.allowPrototypes
                        )
                          return;
                        _.push(l);
                      }
                      for (
                        var u = 0;
                        i.depth > 0 && null !== (o = s.exec(a)) && u < i.depth;

                      ) {
                        if (
                          ((u += 1),
                          !i.plainObjects &&
                            n.call(Object.prototype, o[1].slice(1, -1)) &&
                            !i.allowPrototypes)
                        )
                          return;
                        _.push(o[1]);
                      }
                      return (
                        o && _.push("[" + a.slice(o.index) + "]"), d(_, t, i, r)
                      );
                    }
                  },
                  u = function (e) {
                    if (!e) return s;
                    if (
                      null !== e.decoder &&
                      void 0 !== e.decoder &&
                      "function" != typeof e.decoder
                    )
                      throw TypeError("Decoder has to be a function.");
                    if (
                      void 0 !== e.charset &&
                      "utf-8" !== e.charset &&
                      "iso-8859-1" !== e.charset
                    )
                      throw TypeError(
                        "The charset option must be either utf-8, iso-8859-1, or undefined"
                      );
                    var t = void 0 === e.charset ? s.charset : e.charset;
                    return {
                      allowDots:
                        void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
                      allowPrototypes:
                        "boolean" == typeof e.allowPrototypes
                          ? e.allowPrototypes
                          : s.allowPrototypes,
                      allowSparse:
                        "boolean" == typeof e.allowSparse
                          ? e.allowSparse
                          : s.allowSparse,
                      arrayLimit:
                        "number" == typeof e.arrayLimit
                          ? e.arrayLimit
                          : s.arrayLimit,
                      charset: t,
                      charsetSentinel:
                        "boolean" == typeof e.charsetSentinel
                          ? e.charsetSentinel
                          : s.charsetSentinel,
                      comma: "boolean" == typeof e.comma ? e.comma : s.comma,
                      decoder:
                        "function" == typeof e.decoder ? e.decoder : s.decoder,
                      delimiter:
                        "string" == typeof e.delimiter ||
                        r.isRegExp(e.delimiter)
                          ? e.delimiter
                          : s.delimiter,
                      depth:
                        "number" == typeof e.depth || !1 === e.depth
                          ? +e.depth
                          : s.depth,
                      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                      interpretNumericEntities:
                        "boolean" == typeof e.interpretNumericEntities
                          ? e.interpretNumericEntities
                          : s.interpretNumericEntities,
                      parameterLimit:
                        "number" == typeof e.parameterLimit
                          ? e.parameterLimit
                          : s.parameterLimit,
                      parseArrays: !1 !== e.parseArrays,
                      plainObjects:
                        "boolean" == typeof e.plainObjects
                          ? e.plainObjects
                          : s.plainObjects,
                      strictNullHandling:
                        "boolean" == typeof e.strictNullHandling
                          ? e.strictNullHandling
                          : s.strictNullHandling,
                    };
                  };
                e.exports = function (e, t) {
                  var i = u(t);
                  if ("" === e || null == e)
                    return i.plainObjects ? Object.create(null) : {};
                  for (
                    var n = "string" == typeof e ? l(e, i) : e,
                      a = i.plainObjects ? Object.create(null) : {},
                      s = Object.keys(n),
                      o = 0;
                    o < s.length;
                    ++o
                  ) {
                    var d = s[o],
                      h = _(d, n[d], i, "string" == typeof e);
                    a = r.merge(a, h, i);
                  }
                  return !0 === i.allowSparse ? a : r.compact(a);
                };
              },
              function (e, t, i) {
                "use strict";
                var r,
                  n,
                  a =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        };
                !(function (s) {
                  var o = !1;
                  if (
                    (void 0 !==
                      (n =
                        "function" == typeof (r = s)
                          ? r.call(t, i, t, e)
                          : r) && (e.exports = n),
                    (o = !0),
                    "object" === a(t) && ((e.exports = s()), (o = !0)),
                    !o)
                  ) {
                    var l = window.Cookies,
                      d = (window.Cookies = s());
                    d.noConflict = function () {
                      return (window.Cookies = l), d;
                    };
                  }
                })(function () {
                  var e = function () {
                    for (var e = 0, t = {}; e < arguments.length; e++) {
                      var i = arguments[e];
                      for (var r in i) t[r] = i[r];
                    }
                    return t;
                  };
                  return (function t(i) {
                    function r(t, n, a) {
                      var s;
                      if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                          if (
                            "number" ==
                            typeof (a = e({ path: "/" }, r.defaults, a)).expires
                          ) {
                            var o = new Date();
                            o.setMilliseconds(
                              o.getMilliseconds() + 864e5 * a.expires
                            ),
                              (a.expires = o);
                          }
                          try {
                            (s = JSON.stringify(n)),
                              /^[\{\[]/.test(s) && (n = s);
                          } catch (e) {}
                          return (
                            (n = i.write
                              ? i.write(n, t)
                              : encodeURIComponent(String(n)).replace(
                                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                                  decodeURIComponent
                                )),
                            (t = (t = (t = encodeURIComponent(
                              String(t)
                            )).replace(
                              /%(23|24|26|2B|5E|60|7C)/g,
                              decodeURIComponent
                            )).replace(/[\(\)]/g, escape)),
                            (document.cookie = [
                              t,
                              "=",
                              n,
                              a.expires
                                ? "; expires=" + a.expires.toUTCString()
                                : "",
                              a.path ? "; path=" + a.path : "",
                              a.domain ? "; domain=" + a.domain : "",
                              a.secure ? "; secure" : "",
                            ].join(""))
                          );
                        }
                        t || (s = {});
                        for (
                          var l = document.cookie
                              ? document.cookie.split("; ")
                              : [],
                            d = /(%[0-9A-Z]{2})+/g,
                            _ = 0;
                          _ < l.length;
                          _++
                        ) {
                          var u = l[_].split("="),
                            h = u.slice(1).join("=");
                          '"' === h.charAt(0) && (h = h.slice(1, -1));
                          try {
                            var c = u[0].replace(d, decodeURIComponent);
                            if (
                              ((h = i.read
                                ? i.read(h, c)
                                : i(h, c) || h.replace(d, decodeURIComponent)),
                              this.json)
                            )
                              try {
                                h = JSON.parse(h);
                              } catch (e) {}
                            if (t === c) {
                              s = h;
                              break;
                            }
                            t || (s[c] = h);
                          } catch (e) {}
                        }
                        return s;
                      }
                    }
                    return (
                      (r.set = r),
                      (r.get = function (e) {
                        return r.call(r, e);
                      }),
                      (r.getJSON = function () {
                        return r.apply({ json: !0 }, [].slice.call(arguments));
                      }),
                      (r.defaults = {}),
                      (r.remove = function (t, i) {
                        r(t, "", e(i, { expires: -1 }));
                      }),
                      (r.withConverter = t),
                      r
                    );
                  })(function () {});
                });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e, t) {
                    return (
                      (t = t || "litix.io"),
                      (e = e || "").match(/^[a-z0-9]+$/)
                        ? "https://" + e + "." + t
                        : "https://img.litix.io/a.gif"
                    );
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r },
                  a = function () {
                    var e = n.default.navigator,
                      t =
                        e &&
                        (e.connection || e.mozConnection || e.webkitConnection);
                    return t && t.type;
                  };
                t.default = function () {
                  var e = void 0;
                  switch (a()) {
                    case "cellular":
                      e = "cellular";
                      break;
                    case "ethernet":
                      e = "wired";
                      break;
                    case "wifi":
                      e = "wifi";
                      break;
                    case void 0:
                      break;
                    default:
                      e = "other";
                  }
                  return e;
                };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(i(0)),
                  a = r(i(4)),
                  s = r(i(59)),
                  o = r(i(1)),
                  l = r(i(17)),
                  d =
                    !!n.default.XMLHttpRequest &&
                    "withCredentials" in new n.default.XMLHttpRequest(),
                  _ = {
                    maxBeaconSize: 300,
                    maxQueueLength: 3600,
                    baseTimeBetweenBeacons: 5e3,
                  },
                  u = function (e, t) {
                    (this._beaconUrl = e || "https://img.litix.io"),
                      (this._eventQueue = []),
                      (this._postInFlight = !1),
                      (this._failureCount = 0),
                      (this._sendTimeout = !1),
                      (this._options = (0, o.default)({}, _, t));
                  };
                (u.prototype.queueEvent = function (e, t) {
                  var i = (0, o.default)({}, t);
                  return d
                    ? (this._eventQueue.length <=
                        this._options.maxQueueLength ||
                        "eventrateexceeded" === e) &&
                        (this._eventQueue.push(i),
                        this._sendTimeout || this._startBeaconSending(),
                        this._eventQueue.length <= this._options.maxQueueLength)
                    : (s.default.send(this._beaconUrl, i), !0);
                }),
                  (u.prototype.flushEvents = function () {
                    d &&
                      (this._eventQueue.length && this._sendBeaconQueue(),
                      this._startBeaconSending());
                  }),
                  (u.prototype.destroy = function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    (this.destroyed = !0),
                      e ? this._clearBeaconQueue() : this.flushEvents(),
                      n.default.clearTimeout(this._sendTimeout);
                  }),
                  (u.prototype._clearBeaconQueue = function () {
                    var e = n.default.navigator,
                      t =
                        this._eventQueue.length > this._options.maxBeaconSize
                          ? this._eventQueue.length -
                            this._options.maxBeaconSize
                          : 0,
                      i = this._eventQueue.slice(t);
                    if (
                      (t > 0 &&
                        (0, o.default)(
                          i[i.length - 1],
                          (0, l.default)({
                            mux_view_message: "event queue truncated",
                          })
                        ),
                      e.sendBeacon)
                    )
                      e.sendBeacon(
                        this._beaconUrl,
                        JSON.stringify({ events: i })
                      );
                    else if (n.default.XMLHttpRequest) {
                      var r = new n.default.XMLHttpRequest();
                      r.open("POST", this._beaconUrl),
                        r.setRequestHeader("Content-Type", "application/json"),
                        r.send(JSON.stringify({ events: i }));
                    } else s.default.send(this._beaconUrl, i[i.length - 1]);
                  }),
                  (u.prototype._sendBeaconQueue = function () {
                    var e = this;
                    if (n.default.XMLHttpRequest && !this._postInFlight) {
                      var t = new n.default.XMLHttpRequest(),
                        i = this._eventQueue.slice(
                          0,
                          this._options.maxBeaconSize
                        );
                      (this._eventQueue = this._eventQueue.slice(
                        this._options.maxBeaconSize
                      )),
                        (this._postInFlight = !0),
                        (t.onreadystatechange = function () {
                          4 === t.readyState &&
                            (200 !== t.status
                              ? ((e._eventQueue = i.concat(e._eventQueue)),
                                (e._failureCount += 1),
                                a.default.info(
                                  "Error sending beacon: " + t.status
                                ),
                                a.default.info(t.responseText))
                              : (e._failureCount = 0),
                            (e._postInFlight = !1));
                        }),
                        t.open("POST", this._beaconUrl),
                        t.setRequestHeader("Content-Type", "application/json"),
                        t.send(JSON.stringify({ events: i }));
                    }
                  }),
                  (u.prototype._getNextBeaconTime = function () {
                    if (!this._failureCount)
                      return this._options.baseTimeBetweenBeacons;
                    var e = Math.pow(2, this._failureCount - 1);
                    return (
                      (1 + (e *= Math.random())) *
                      this._options.baseTimeBetweenBeacons
                    );
                  }),
                  (u.prototype._startBeaconSending = function () {
                    var e = this;
                    n.default.clearTimeout(this._sendTimeout),
                      this.destroyed ||
                        (this._sendTimeout = n.default.setTimeout(function () {
                          e._eventQueue.length && e._sendBeaconQueue(),
                            e._startBeaconSending();
                        }, this._getNextBeaconTime()));
                  }),
                  (t.default = u);
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(i(15)),
                  a = r(i(0)),
                  s = {};
                (s.send = function (e, t) {
                  function i() {
                    r.src = o + (s ? "&rc=" + s : "");
                  }
                  var r = new Image(),
                    s = 0,
                    o = e + "?" + n.default.stringify(t);
                  return (
                    r.addEventListener("error", function () {
                      s > 3 ||
                        a.default.setTimeout(function () {
                          s++, i();
                        }, 5e3 * s);
                    }),
                    i(),
                    r
                  );
                }),
                  (t.default = s);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function () {
                    var e = 0,
                      t = 0,
                      i = 0,
                      r = 0,
                      n = 0,
                      a = 0,
                      s = 0;
                    this.on("requestcompleted", function (a, s) {
                      var o = s.request_start,
                        l = s.request_response_start,
                        d = s.request_response_end,
                        _ = s.request_bytes_loaded;
                      r++;
                      var u = void 0,
                        h = void 0;
                      if (
                        (l ? ((u = l - o), (h = d - l)) : (h = d - o),
                        h > 0 && _ > 0)
                      ) {
                        var c = (_ / h) * 8e3;
                        n++,
                          (t += _),
                          (i += h),
                          (this.data.view_min_request_throughput = Math.min(
                            this.data.view_min_request_throughput || 1 / 0,
                            c
                          )),
                          (this.data.view_average_request_throughput =
                            (t / i) * 8e3),
                          (this.data.view_request_count = r),
                          u > 0 &&
                            ((e += u),
                            (this.data.view_max_request_latency = Math.max(
                              this.data.view_max_request_latency || 0,
                              u
                            )),
                            (this.data.view_average_request_latency = e / n));
                      }
                    }),
                      this.on("requestfailed", function (e, t) {
                        r++,
                          a++,
                          (this.data.view_request_count = r),
                          (this.data.view_request_failed_count = a);
                      }),
                      this.on("requestcanceled", function (e, t) {
                        r++,
                          s++,
                          (this.data.view_request_count = r),
                          (this.data.view_request_canceled_count = s);
                      });
                  });
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var r,
                  n =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  a = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                      return (function (e, t) {
                        var i = [],
                          r = !0,
                          n = !1,
                          a = void 0;
                        try {
                          for (
                            var s, o = e[Symbol.iterator]();
                            !(r = (s = o.next()).done) &&
                            (i.push(s.value), !t || i.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (n = !0), (a = e);
                        } finally {
                          try {
                            !r && o.return && o.return();
                          } finally {
                            if (n) throw a;
                          }
                        }
                        return i;
                      })(e, t);
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  };
                t.default = function (e, t, i) {
                  var r = a((0, o.findMediaElement)(t), 3),
                    _ = r[0],
                    u = r[1],
                    h = r[2],
                    c = e.log,
                    p = e.utils.getComputedStyle,
                    f = e.utils.secondsToMs;
                  if (!_)
                    return c.error(
                      "No element was found with the `" +
                        u +
                        "` query selector."
                    );
                  if ("video" !== h && "audio" !== h)
                    return c.error(
                      "The element of `" + u + "` was not a media element."
                    );
                  ((i = (0, s.default)(
                    { automaticErrorTracking: !0 },
                    i
                  )).data = (0, s.default)(
                    {
                      player_software: "HTML5 Video Element",
                      player_software_version: "No Versions",
                      player_mux_plugin_name: "VideoElementMonitor",
                      player_mux_plugin_version: "4.2.3",
                    },
                    i.data
                  )),
                    (i.getPlayheadTime = function () {
                      return f(_.currentTime);
                    }),
                    (i.getStateData = function () {
                      var e = this.hlsjs && this.hlsjs.url,
                        t =
                          this.dashjs &&
                          n("function" === this.dashjs.getSource) &&
                          this.dashjs.getSource();
                      return {
                        player_is_paused: _.paused,
                        player_playhead_time: f(_.currentTime),
                        player_width: parseInt(p(_, "width")),
                        player_height: parseInt(p(_, "height")),
                        player_autoplay_on: _.autoplay,
                        player_preload_on: _.preload,
                        video_poster_url: _.poster,
                        video_source_url: e || t || _.currentSrc,
                        video_source_duration: f(_.duration),
                        video_source_height: _.videoHeight,
                        video_source_width: _.videoWidth,
                      };
                    }),
                    (_.mux = _.mux || {}),
                    (_.mux.deleted = !1),
                    (_.mux.emit = function (t, i) {
                      e.emit(u, t, i);
                    });
                  var E = function () {
                    c.error(
                      "The monitor for this video element has already been destroyed."
                    );
                  };
                  (_.mux.destroy = function () {
                    Object.keys(_.mux.listeners).forEach(function (e) {
                      _.removeEventListener(e, _.mux.listeners[e], !1);
                    }),
                      delete _.mux.listeners,
                      (_.mux.destroy = E),
                      (_.mux.swapElement = E),
                      (_.mux.emit = E),
                      (_.mux.addHLSJS = E),
                      (_.mux.addDashJS = E),
                      (_.mux.removeHLSJS = E),
                      (_.mux.removeDashJS = E),
                      (_.mux.deleted = !0),
                      e.emit(u, "destroy");
                  }),
                    (_.mux.swapElement = function (t) {
                      var i = a((0, o.findMediaElement)(t), 3),
                        r = i[0],
                        n = i[1],
                        l = i[2];
                      return r
                        ? "video" !== l && "audio" !== l
                          ? e.log.error(
                              "The element of `" +
                                n +
                                "` was not a media element."
                            )
                          : ((r.muxId = _.muxId),
                            delete _.muxId,
                            (r.mux = r.mux || {}),
                            (r.mux.listeners = (0, s.default)(
                              {},
                              _.mux.listeners
                            )),
                            delete _.mux.listeners,
                            Object.keys(r.mux.listeners).forEach(function (e) {
                              _.removeEventListener(e, r.mux.listeners[e], !1),
                                r.addEventListener(e, r.mux.listeners[e], !1);
                            }),
                            (r.mux.swapElement = _.mux.swapElement),
                            (r.mux.destroy = _.mux.destroy),
                            delete _.mux,
                            void (_ = r))
                        : e.log.error(
                            "No element was found with the `" +
                              n +
                              "` query selector."
                          );
                    }),
                    (_.mux.addHLSJS = function (t) {
                      e.addHLSJS(u, t);
                    }),
                    (_.mux.addDashJS = function (t) {
                      e.addDashJS(u, t);
                    }),
                    (_.mux.removeHLSJS = function () {
                      e.removeHLSJS(u);
                    }),
                    (_.mux.removeDashJS = function () {
                      e.removeDashJS(u);
                    }),
                    e.init(u, i),
                    e.emit(u, "playerready"),
                    _.paused ||
                      (e.emit(u, "play"),
                      _.readyState > 2 && e.emit(u, "playing")),
                    (_.mux.listeners = {}),
                    l.forEach(function (t) {
                      ("error" !== t || i.automaticErrorTracking) &&
                        ((_.mux.listeners[t] = function () {
                          var i = {};
                          if ("error" === t) {
                            if (!_.error) return;
                            (i.player_error_code = _.error.code),
                              (i.player_error_message =
                                d[_.error.code] || _.error.message);
                          }
                          e.emit(u, t, i);
                        }),
                        _.addEventListener(t, _.mux.listeners[t], !1));
                    });
                };
                var s = (r = i(1)) && r.__esModule ? r : { default: r },
                  o = i(12),
                  l = [
                    "loadstart",
                    "pause",
                    "play",
                    "playing",
                    "seeking",
                    "seeked",
                    "timeupdate",
                    "ratechange",
                    "stalled",
                    "waiting",
                    "error",
                    "ended",
                  ],
                  d = {
                    1: "MEDIA_ERR_ABORTED",
                    2: "MEDIA_ERR_NETWORK",
                    3: "MEDIA_ERR_DECODE",
                    4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
                  };
              },
              function (e, t, i) {
                "use strict";
                function r(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var n = r(i(63)),
                  a = r(i(2)),
                  s = r(i(64)),
                  o = r(i(65)),
                  l = r(i(1)),
                  d = r(i(8)),
                  _ = i(5),
                  u = r(i(3)),
                  h = {};
                (h.safeCall = n.default),
                  (h.safeIncrement = a.default),
                  (h.getComputedStyle = s.default),
                  (h.secondsToMs = o.default),
                  (h.assign = l.default),
                  (h.headersStringToObject = d.default),
                  (h.extractHostnameAndDomain = _.extractHostnameAndDomain),
                  (h.extractHostname = _.extractHostname),
                  (h.now = u.default.now),
                  (t.default = h);
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e, t, i, r) {
                    var a = r;
                    if (e && "function" == typeof e[t])
                      try {
                        a = e[t].apply(e, i);
                      } catch (e) {
                        n.default.info("safeCall error", e);
                      }
                    return a;
                  });
                var r,
                  n = (r = i(4)) && r.__esModule ? r : { default: r };
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e, t) {
                    if (
                      e &&
                      t &&
                      n.default &&
                      "function" == typeof n.default.getComputedStyle
                    ) {
                      var i = void 0;
                      return (
                        a && a.has(e) && (i = a.get(e)),
                        i ||
                          ((i = n.default.getComputedStyle(e, null)),
                          a && a.set(e, i)),
                        i.getPropertyValue(t)
                      );
                    }
                  });
                var r,
                  n = (r = i(0)) && r.__esModule ? r : { default: r },
                  a = void 0;
                n.default && n.default.WeakMap && (a = new WeakMap());
              },
              function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 }),
                  (t.default = function (e) {
                    return Math.floor(1e3 * e);
                  });
              },
            ]);
          }),
          (e.exports = t());
      },
      7301: function (e, t, i) {
        "use strict";
        i.d(t, {
          D1: function () {
            return L;
          },
          Le: function () {
            return M;
          },
          _8: function () {
            return tH;
          },
          OU: function () {
            return b;
          },
          J_: function () {
            return P;
          },
          rU: function () {
            return T;
          },
          KG: function () {
            return k;
          },
          nA: function () {
            return x;
          },
          MD: function () {
            return tq;
          },
        });
        var r,
          n,
          a,
          s,
          o,
          l,
          d,
          _,
          u,
          h,
          c,
          p,
          f,
          E,
          m,
          y,
          v,
          g,
          R,
          S,
          T,
          A,
          L,
          P,
          b,
          I,
          D,
          C,
          O,
          N,
          M,
          w,
          k,
          U,
          F,
          x,
          Y = i(29288),
          B = i(28627),
          G = i(28611),
          K = i(71934),
          H = i(14440),
          j = i(86360);
        ((r = R || (R = {})).FRAGMENT_FETCHED = "fragment_fetched"),
          (r.FRAGMENT_FETCH_ERROR = "fragment_fetch_error"),
          (r.VIDEO_PROFILE_CHANGED = "video_profile"),
          ((n = S || (S = {})).URL = "URL"),
          (n.MSE = "MSE"),
          ((a = T || (T = {})).KEY_SESSION_MESSAGE = "message"),
          (a.KEY_SESSION_STATUSES_CHANGE = "keystatuseschange"),
          (a.MEDIA_SOURCE_OPEN = "sourceopen"),
          (a.MEDIA_SOURCE_CLOSE = "sourceclose"),
          (a.SOURCE_BUFFER_UPDATE_END = "updateend"),
          (a.MS_KEY_ADDED = "mskeyadded"),
          (a.MS_KEY_ERROR = "mskeyerror"),
          (a.MS_KEY_MESSAGE = "mskeymessage"),
          (a.MS_NEEDKEY = "msneedkey"),
          (a.WEBKIT_KEY_ADDED = "webkitkeyadded"),
          (a.WEBKIT_KEY_ERROR = "webkitkeyerror"),
          (a.WEBKIT_KEY_MESSAGE = "webkitkeymessage"),
          (a.WEBKIT_NEEDKEY = "webkitneedkey"),
          (a.V0_1B_KEY_ADDED = "keyadded"),
          (a.V0_1B_KEY_ERROR = "keyerror"),
          (a.V0_1B_KEY_MESSAGE = "keymessage"),
          (a.V0_1B_NEEDKEY = "needkey"),
          (a.MEDIA_CANPLAY = "canplay"),
          (a.MEDIA_CANPLAYTHROUGH = "canplaythrough"),
          (a.MEDIA_DURATIONCHANGE = "durationchange"),
          (a.MEDIA_ENCRYPTED = "encrypted"),
          (a.MEDIA_ENDED = "ended"),
          (a.MEDIA_ERROR = "error"),
          (a.MEDIA_LOADEDMETADATA = "loadedmetadata"),
          (a.MEDIA_PAUSE = "pause"),
          (a.MEDIA_PLAY = "play"),
          (a.MEDIA_PLAYING = "playing"),
          (a.MEDIA_SEEKING = "seeking"),
          (a.MEDIA_TIMEUPDATE = "timeupdate"),
          (a.MEDIA_WAITING = "waiting"),
          (a.MEDIA_RATECHANGE = "ratechange"),
          (a.MEDIA_RESIZE = "resize"),
          (a.INTERNAL_ENCRYPTED = "__encrypted"),
          (a.INTERNAL_PLAYER_CANPLAY = "__canplay"),
          (a.INTERNAL_PLAYER_CANPLAYTHROUGH = "__canplaythrough"),
          (a.INTERNAL_MEDIA_REQUIRES_DURATION = "__requiresduration"),
          (a.INTERNAL_PLAYER_LOADED_METADATA = "__loadedmetadata"),
          (a.BUFFER_APPEND_ERROR = "append_error"),
          (a.BUFFER_STALLED = "stalled"),
          (a.BUFFERING_START = "buffering_start"),
          (a.BUFFERING_END = "buffering_end"),
          (a.BUFFER_SOURCE_OPEN = "source_open"),
          (a.BUFFER_SOURCE_CLOSE = "source_close"),
          (a.BUFFER_UPDATE_END = "update_end"),
          (a.BUFFER_QUOTA_EXCEEDED = "quota_exceeded"),
          (a.EME_LICENSE_REQUEST_ERROR = "license_request_error"),
          (a.EME_LICENSE_REQUEST_CAPPED = "license_request_capped"),
          (a.LIST_PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed"),
          (a.LIST_PLAYER_BEFORE_LIST_CHANGE = "before_list_change"),
          (a.LIST_PLAYER_BEFORE_NEXT = "before_next"),
          (a.LIST_PLAYER_BEFORE_PLAYER_LOAD = "before_player_load"),
          (a.LIST_PLAYER_BEFORE_PREVIOUS = "before_previous"),
          (a.LIST_PLAYER_BEFORE_TRACK_LOAD = "before_track_load"),
          (a.LIST_PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change"),
          (a.LIST_PLAYER_BUFFER_STALLED = "stalled"),
          (a.LIST_PLAYER_BUFFERING_START = "buffering_start"),
          (a.LIST_PLAYER_BUFFERING_END = "buffering_end"),
          (a.LIST_PLAYER_REBUFFERING_START = "rebuffering_start"),
          (a.LIST_PLAYER_REBUFFERING_END = "rebuffering_end"),
          (a.LIST_PLAYER_CAPPED = "capped"),
          (a.LIST_PLAYER_CLEARED = "cleared"),
          (a.LIST_PLAYER_DURATION_CHANGED = "duration_changed"),
          (a.LIST_PLAYER_ERROR = "error"),
          (a.LIST_PLAYER_ERROR_SYNC = "error_sync"),
          (a.LIST_PLAYER_LIST_CHANGED = "list_change"),
          (a.LIST_PLAYER_LIST_ENDED = "list_ended"),
          (a.LIST_PLAYER_LOAD_VIDEO = "load_video"),
          (a.LIST_PLAYER_MAX_LIST_ERRORS_REACHED = "max_list_errors_reached"),
          (a.LIST_PLAYER_PAUSED = "paused"),
          (a.LIST_PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
          (a.LIST_PLAYER_PLAYER_LOAD = "player_load"),
          (a.LIST_PLAYER_PLAYING = "playing"),
          (a.LIST_PLAYER_POSITION_CHANGED = "position_changed"),
          (a.LIST_PLAYER_PROGRESS = "progress"),
          (a.LIST_PLAYER_REPEAT_MODE_CHANGED = "repeat_mode_changed"),
          (a.LIST_PLAYER_SHUFFLE_CHANGED = "shuffle_changed"),
          (a.LIST_PLAYER_STOPPED = "stopped"),
          (a.LIST_PLAYER_STOPPED_VIDEO = "stopped_video"),
          (a.LIST_PLAYER_TRACKING_DATA_CREATED = "tracking_data_created"),
          (a.LIST_PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
          (a.LIST_PLAYER_TRACK_ENDED = "track_ended"),
          (a.LIST_PLAYER_TRACK_LOADED = "track_loaded"),
          (a.LIST_PLAYER_TRACK_TIMEOUT = "track_timeout"),
          (a.LIST_PLAYER_TRACK_UNPLAYABLE = "track_unplayable"),
          (a.LIST_PLAYER_DATA_CREATED = "tracking_data_created"),
          (a.LIST_PLAYER_DATA_FINALIZED = "tracking_data_finalized"),
          (a.LIST_PLAYER_VOLUME_CHANGED = "volume_changed"),
          (a.LIST_PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended"),
          (a.LIST_PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed"),
          (a.LIST_PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed"),
          (a.LIST_PLAYER_SEEK_HANDLED = "list_player_seek_handled"),
          (a.LIST_PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed"),
          (a.LIST_PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed"),
          (a.LIST_PLAYER_MUTED_CHANGED = "muted_changed"),
          (a.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED =
            "subtitle_languages_loaded"),
          (a.LOGGER_ERROR = "error"),
          (a.PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed"),
          (a.PLAYER_BEFORE_LOAD = "before_load"),
          (a.PLAYER_BEFORE_STOP = "before_stop"),
          (a.PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change"),
          (a.PLAYER_BUFFER_STALLED = "stalled"),
          (a.PLAYER_BUFFERING_START = "buffering_start"),
          (a.PLAYER_BUFFERING_END = "buffering_end"),
          (a.PLAYER_CAN_PRELOAD = "can_preload"),
          (a.PLAYER_CAPPED = "capped"),
          (a.PLAYER_DURATION_CHANGED = "duration_changed"),
          (a.PLAYER_ENDED = "ended"),
          (a.PLAYER_ENDED_VIDEO = "ended_video"),
          (a.PLAYER_ERROR = "error"),
          (a.PLAYER_WARNING = "warning"),
          (a.PLAYER_FIRST_BYTES = "first_bytes"),
          (a.PLAYER_KEY_RECEIVED = "key"),
          (a.PLAYER_LOAD = "load"),
          (a.PLAYER_LOAD_VIDEO = "load_video"),
          (a.PLAYER_LOADING_FAILED = "loading_failed"),
          (a.PLAYER_MUTED_CHANGED = "muted_changed"),
          (a.PLAYER_PAUSED = "paused"),
          (a.PLAYER_PLAY = "play"),
          (a.PLAYER_PLAYING = "playing"),
          (a.PLAYER_POSITION_CHANGED = "position_changed"),
          (a.PLAYER_PRELOADING_ERROR = "preloading_error"),
          (a.PLAYER_PROGRESS = "progress"),
          (a.PLAYER_REBUFFERING_START = "rebuffering_start"),
          (a.PLAYER_REBUFFERING_END = "rebuffering_end"),
          (a.PLAYER_STALLED = "stalled"),
          (a.PLAYER_STOPPED = "stopped"),
          (a.PLAYER_STOPPED_VIDEO = "stopped_video"),
          (a.PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
          (a.PLAYER_TIMEOUT = "timeout"),
          (a.PLAYER_PLAYBACK_START = "playback_start"),
          (a.PLAYER_TRACKING_DATA_CREATED = "tracking_data_created"),
          (a.PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
          (a.PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended"),
          (a.PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed"),
          (a.PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed"),
          (a.PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed"),
          (a.PLAYER_SEEKING = "seeking"),
          (a.PLAYER_FRAGMENT_FETCHED = "fragment_fetched"),
          (a.PLAYER_FRAGMENT_FETCH_ERROR = "fragment_fetch_error"),
          (a.PLAYER_VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved"),
          (a.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED =
            "video_manifest_resolve_failed"),
          (a.PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed"),
          (a.PLAYER_SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded"),
          (a.PLAYER_VIDEO_RESIZED = "resize"),
          (a.PLAYER_MANAGER_READY = "ready"),
          (a.TRACKER_PLAYBACK_START = "playback_start"),
          (a.TRACKER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
          (a.TRACKER_TRACKING_DATA_CREATED = "tracking_data_created"),
          (a.TRACKER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
          (a.TRACKER_FIRST_QUARTILE = "tracking_first_quartile"),
          (a.TRACKER_MIDPOINT = "tracking_midpoint"),
          (a.TRACKER_THIRD_QUARTILE = "tracking_third_quartile"),
          (a.VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved"),
          (a.VIDEO_MANIFEST_RESOLVE_FAILED = "video_manifest_resolve_failed"),
          (a.ABR_MANAGER_BITRATE_CHANGE = "bitrate_change"),
          (a.REPORTING_START = "reporting_start"),
          (a.REPORTING_CREATIVE_VIEW = "reporting_creative_view"),
          (a.REPORTING_FIRST_QUARTILE = "reporting_first_quartile"),
          (a.REPORTING_MIDPOINT = "reporting_midpoint"),
          (a.REPORTING_THIRD_QUARTILE = "reporting_third_quartile"),
          (a.REPORTING_COMPLETE = "reporting_complete"),
          (a.REPORTING_PAUSE = "reporting_pause"),
          (a.REPORTING_RESUME = "reporting_resume"),
          (a.REPORTING_ERROR = "reporting_error"),
          ((s = A || (A = {})).WIDEVINE = "com.widevine.alpha"),
          (s.PLAYREADY = "com.microsoft.playready"),
          (s.PLAYREADY_HARDWARE = "com.microsoft.playready.hardware"),
          (s.FAIRPLAY = "com.apple.fps.1_0"),
          (s.INVALID_SPOTIFY_KEY = "com.spotify.invalid"),
          ((o = L || (L = {})).AD_MANIFEST_REQUEST_FAILED_WITH_STATUS =
            "AD_MANIFEST_REQUEST_FAILED_WITH_STATUS"),
          (o.AD_MANIFEST_INVALID = "AD_MANIFEST_INVALID"),
          (o.CAPPING_USER_IS_CAPPED = "CAPPING_USER_IS_CAPPED"),
          (o.EME_API_NOT_SUPPORTED = "EME_API_NOT_SUPPORTED"),
          (o.EME_MEDIA_KEYS_NOT_SUPPORTED = "EME_MEDIA_KEYS_NOT_SUPPORTED"),
          (o.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED =
            "EME_MEDIA_KEY_SESSION_NOT_SUPPORTED"),
          (o.EME_NO_SUPPORTED_KEYSYSTEM = "EME_NO_SUPPORTED_KEYSYSTEM"),
          (o.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED =
            "EME_PLAYER_MEDIA_KEYS_SETTING_FAILED"),
          (o.EME_ERROR_UNKNOWN = "EME_ERROR_UNKNOWN"),
          (o.EME_LICENSE_REQUEST_EMPTY_RESPONSE =
            "EME_LICENSE_REQUEST_EMPTY_RESPONSE"),
          (o.EME_LICENSE_REQUEST_FAILED_WITH_STATUS =
            "EME_LICENSE_REQUEST_FAILED_WITH_STATUS"),
          (o.EME_LICENSE_REQUEST_WIDEVINE_ERROR =
            "EME_LICENSE_REQUEST_WIDEVINE_ERROR"),
          (o.EME_LICENSE_UPDATE_FAILED = "EME_LICENSE_UPDATE_FAILED"),
          (o.EME_HEADER_KEY_VALUE_MISMATCH = "EME_HEADER_KEY_VALUE_MISMATCH"),
          (o.EME_HEADER_MISSING_CHALLENGE = "EME_HEADER_MISSING_CHALLENGE"),
          (o.EME_INIT_DATA_MALFORMED = "EME_INIT_DATA_MALFORMED"),
          (o.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM =
            "EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM"),
          (o.EME_MEDIA_KEY_SESSION_V0_1B_ERROR =
            "EME_MEDIA_KEY_SESSION_V0_1B_ERROR"),
          (o.EME_MEDIA_KEY_SESSION_SAFARI_ERROR =
            "EME_MEDIA_KEY_SESSION_SAFARI_ERROR"),
          (o.EME_NO_SUPPORTED_CONFIGURATION = "EME_NO_SUPPORTED_CONFIGURATION"),
          (o.EME_NOT_SUPPORTED_ERROR = "EME_NOT_SUPPORTED_ERROR"),
          (o.EME_INVALID_STATE_ERROR = "EME_INVALID_STATE_ERROR"),
          (o.EME_UNKNOWN_ERROR = "EME_UNKNOWN_ERROR"),
          (o.DISALLOW_PROTECTED_TRACK_ERROR = "DISALLOW_PROTECTED_TRACK_ERROR"),
          (o.FILE_FORMAT_NOT_SUPPORTED = "FILE_FORMAT_NOT_SUPPORTED"),
          (o.FILE_MALFORMED_SEEKTABLE = "FILE_MALFORMED_SEEKTABLE"),
          (o.FILE_MALFORMED_PSSH = "FILE_MALFORMED_PSSH"),
          (o.FILE_NOT_RESOLVED = "FILE_NOT_RESOLVED"),
          (o.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO =
            "FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO"),
          (o.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO =
            "FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO"),
          (o.FRAGMENT_REQUEST_FAILED_WITH_ZERO =
            "FRAGMENT_REQUEST_FAILED_WITH_ZERO"),
          (o.FRAGMENT_REQUEST_FAILED_WITH_STATUS =
            "FRAGMENT_REQUEST_FAILED_WITH_STATUS"),
          (o.FRAGMENT_REQUEST_EMPTY_RESPONSE =
            "FRAGMENT_REQUEST_EMPTY_RESPONSE"),
          (o.FRAGMENT_REQUEST_UNEXPECTED_LENGTH =
            "FRAGMENT_REQUEST_UNEXPECTED_LENGTH"),
          (o.INVALID_TRACK = "INVALID_TRACK"),
          (o.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE =
            "PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE"),
          (o.PLAYER_BUFFER_QUOTA_EXCEEDED = "PLAYER_BUFFER_QUOTA_EXCEEDED"),
          (o.PLAYER_CANNOT_FIND_PLAYABLE_URI =
            "PLAYER_CANNOT_FIND_PLAYABLE_URI"),
          (o.PLAYER_INVALID_INTERNAL_STATE = "PLAYER_INVALID_INTERNAL_STATE"),
          (o.PLAYER_CONTAINER_ELEMENT_NOT_FOUND =
            "PLAYER_CONTAINER_ELEMENT_NOT_FOUND"),
          (o.PLAYER_MEDIA_ERROR = "PLAYER_MEDIA_ERROR"),
          (o.PLAYER_PLAYBACK_ERROR = "PLAYER_PLAYBACK_ERROR"),
          (o.PLAYER_TIMEOUT_ERROR = "PLAYER_TIMEOUT_ERROR"),
          (o.MEDIA_ABORTED = "MEDIA_ABORTED"),
          (o.MEDIA_DECODING_ERROR = "MEDIA_DECODING_ERROR"),
          (o.MEDIA_NETWORK_ERROR = "MEDIA_NETWORK_ERROR"),
          (o.MEDIA_NOT_SUPPORTED = "MEDIA_NOT_SUPPORTED"),
          (o.LICENSE_RESOLVE_INVALID_RESPONSE =
            "LICENSE_RESOLVE_INVALID_RESPONSE"),
          (o.LICENSE_RESOLVER_CANT_RESOLVE_URL =
            "LICENSE_RESOLVER_CANT_RESOLVE_URL"),
          (o.LICENSE_RESOLVER_DEPRECATED_VERSION =
            "LICENSE_RESOLVER_DEPRECATED_VERSION"),
          (o.LIST_PLAYER_NO_TRACK_PLAYER = "LIST_PLAYER_NO_TRACK_PLAYER"),
          (o.LIST_PLAYER_NO_LIST = "LIST_PLAYER_NO_LIST"),
          (o.LIST_PLAYER_INVALID_ARGUMENT = "LIST_PLAYER_INVALID_ARGUMENT"),
          (o.LIST_PLAYER_FORBIDDEN = "LIST_PLAYER_FORBIDDEN"),
          (o.STORAGE_ERROR = "STORAGE_ERROR"),
          (o.STORAGE_FAILED_WITH_STATUS = "STORAGE_FAILED_WITH_STATUS"),
          (o.STORAGE_RETURNED_NO_TRACKS = "STORAGE_RETURNED_NO_TRACKS"),
          (o.STORAGE_TRACK_MANIFEST_FAILED = "STORAGE_TRACK_MANIFEST_FAILED"),
          (o.STORAGE_TRACK_MANIFEST_EMPTY = "STORAGE_TRACK_MANIFEST_EMPTY"),
          (o.STORAGE_VIDEO_MANIFEST_FAILED = "STORAGE_VIDEO_MANIFEST_FAILED"),
          (o.TRACK_DATA_ALREADY_FINALIZED = "TRACK_DATA_ALREADY_FINALIZED"),
          (o.TSV_SENDING_FAILED = "TSV_SENDING_FAILED"),
          (o.PLAYBACK_STATS_SENDING_FAILED = "PLAYBACK_STATS_SENDING_FAILED"),
          (o.PLAYBACK_START_SENDING_FAILED = "PLAYBACK_START_SENDING_FAILED"),
          (o.UNKNOWN = "UNKNOWN"),
          ((l = P || (P = {})).SUCCESS = "RESULT_SUCCESS"),
          (l.INVALID = "RESULT_INVALID"),
          (l.FORBIDDEN = "RESULT_FORBIDDEN"),
          (l.OUT_OF_BOUNDS = "RESULT_OUT_OF_BOUNDS"),
          (l.NO_LIST = "RESULT_NO_LIST"),
          (l.NO_TRACK = "RESULT_NO_TRACK"),
          (l.LIST_END = "RESULT_LIST_END"),
          (l.INVALID_TRACK = "RESULT_INVALID_TRACK"),
          (l.CANCELLED = "CANCELLED"),
          (l.NO_TRACK_PLAYER = "NO_TRACK_PLAYER"),
          ((d = b || (b = {})).MP3 = "MP3"),
          (d.MP4 = "MP4"),
          (d.MP4_DUAL = "MP4_DUAL"),
          (d.MP4_CBCS = "MP4_CBCS"),
          (d.MP4_FLAC = "MP4_FLAC"),
          (d.MANIFEST_ID = "MANIFEST_ID"),
          (d.AD_MANIFEST = "AD_MANIFEST"),
          (d.GENERIC_MEDIA = "GENERIC_MEDIA");
        class q extends Error {
          constructor(e, t) {
            super(),
              (this.unrecoverable = !1),
              (this.listPlayerIgnore = !1),
              (this.debug = {}),
              (this.name = "PlaybackError"),
              (this.code = e),
              (this.message = t);
          }
          static fatal(e, t) {
            let i = new q(e, t);
            return (i.unrecoverable = !0), i;
          }
        }
        var V = i(44583);
        class W extends Error {
          constructor(e = L.EME_ERROR_UNKNOWN, t) {
            super(t),
              (this.status = -1),
              (this.licenseServer = ""),
              (this.shouldRefreshEndpoint = !1),
              (this.unrecoverable = !1),
              (this.debug = {}),
              (this.code = e),
              (this.message = t),
              (this.name = "EMEError");
          }
          static fatal(e = L.EME_ERROR_UNKNOWN, t) {
            let i = new W(e, t);
            return (i.unrecoverable = !0), i;
          }
        }
        class $ extends Error {
          constructor(e, t) {
            super(t),
              (this.name = "CappingError"),
              (this.message = t),
              (this.code = e);
          }
        }
        function Q(e) {
          let t = document.createEvent("Event");
          t.initEvent("encrypted", !1, !1),
            (t.initDataType = "cenc"),
            (t.initData = e.initData),
            (t.fromPolyfill = !0),
            this.dispatchEvent(t);
        }
        class J extends G.B {
          constructor(e) {
            super(T.KEY_SESSION_MESSAGE, null),
              (this.messageType = "license-request"),
              (this.message = e);
          }
        }
        class z extends G.vp {
          constructor(e) {
            super(),
              (this._nativeKeySession = null),
              (this._lastUpdateDeferred = (0, V.$)()),
              (this._lastGenerateDeferred = (0, V.$)()),
              (this.addEventListener = this.addListener),
              (this.removeEventListener = this.removeListener),
              (this._nativeMediaKeys = e),
              (this._onKeyMessage = this._onKeyMessage.bind(this)),
              (this._onKeyAdded = this._onKeyAdded.bind(this)),
              (this._onKeyError = this._onKeyError.bind(this));
          }
          _attach() {
            let e = this._nativeKeySession;
            e &&
              (e.addEventListener(T.MS_KEY_ADDED, this._onKeyAdded),
              e.addEventListener(T.MS_KEY_ERROR, this._onKeyError),
              e.addEventListener(T.MS_KEY_MESSAGE, this._onKeyMessage));
          }
          _detach() {
            let e = this._nativeKeySession;
            e &&
              (e.removeEventListener(T.MS_KEY_ADDED, this._onKeyAdded),
              e.removeEventListener(T.MS_KEY_ERROR, this._onKeyError),
              e.removeEventListener(T.MS_KEY_MESSAGE, this._onKeyMessage));
          }
          _onKeyMessage(e) {
            e.message &&
              e.message.buffer &&
              (this.emitEvent(new J(e.message.buffer)),
              this._lastGenerateDeferred &&
                (this._lastGenerateDeferred.resolve(!0),
                (this._lastGenerateDeferred = null)));
          }
          _onKeyAdded() {
            this._lastUpdateDeferred &&
              (this._lastUpdateDeferred.resolve(!0),
              (this._lastUpdateDeferred = null)),
              this._lastGenerateDeferred &&
                (this._lastGenerateDeferred.resolve(!0),
                (this._lastGenerateDeferred = null)),
              this.emit(T.KEY_SESSION_STATUSES_CHANGE, null);
          }
          _onKeyError() {
            let e = this._nativeKeySession && this._nativeKeySession.error;
            this._lastGenerateDeferred &&
              (this._lastGenerateDeferred.reject(e),
              (this._lastGenerateDeferred = null)),
              this._lastUpdateDeferred &&
                (this._lastUpdateDeferred.reject(e),
                (this._lastUpdateDeferred = null)),
              this.emit(T.KEY_SESSION_STATUSES_CHANGE, null);
          }
          generateRequest(e, t) {
            return new Promise((e, i) => {
              this._lastGenerateDeferred &&
                ((this._lastGenerateDeferred.resolve = e),
                (this._lastGenerateDeferred.reject = i)),
                (this._nativeKeySession = this._nativeMediaKeys.createSession(
                  "audio/mp4",
                  new Uint8Array(t),
                  null
                )),
                this._attach();
            });
          }
          update(e) {
            return new Promise((t, i) => {
              this._lastGenerateDeferred &&
                ((this._lastGenerateDeferred.resolve = t),
                (this._lastGenerateDeferred.reject = i)),
                this._nativeKeySession &&
                  this._nativeKeySession.update(new Uint8Array(e));
            });
          }
          close() {
            return new Promise((e) => {
              this._nativeKeySession && this._nativeKeySession.close(),
                this._detach(),
                e(!0);
            });
          }
        }
        class X {
          constructor(e) {
            (this._lastBoundSetter = null),
              (this.shouldRefreshPerTrack = !0),
              (this._nativeMediaKeys = new MSMediaKeys(e));
          }
          attach(e) {
            return new Promise((t) => {
              if (e.readyState >= 1) {
                e.msSetMediaKeys(this._nativeMediaKeys), t();
                return;
              }
              let i = () => {
                e.removeEventListener(T.MEDIA_LOADEDMETADATA, i),
                  (this._lastBoundSetter = null),
                  e.msSetMediaKeys(this._nativeMediaKeys);
              };
              (this._lastBoundSetter = i),
                e.addEventListener(T.MEDIA_LOADEDMETADATA, i),
                e.addEventListener(T.MS_NEEDKEY, Q),
                t();
            });
          }
          detach(e) {
            this._lastBoundSetter &&
              (e.removeEventListener(T.MS_NEEDKEY, Q),
              e.removeEventListener(
                T.MEDIA_LOADEDMETADATA,
                this._lastBoundSetter
              ),
              (this._lastBoundSetter = null));
          }
          setServerCertificate() {
            return Promise.reject(
              new W(
                L.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM,
                "Cannot set server certificate on this platform."
              )
            );
          }
          createSession() {
            return new z(this._nativeMediaKeys);
          }
        }
        function Z(e) {
          let t = this.mediaKeys;
          return (
            t && t !== e && t.detach(this),
            delete this.mediaKeys,
            (this.mediaKeys = e),
            e && e.attach(this),
            Promise.resolve()
          );
        }
        class ee {
          constructor(e, t) {
            if (
              ((this._configuration = null),
              (this.keySystem = e),
              !this._checkConfig(t))
            )
              throw new W(
                L.EME_NO_SUPPORTED_CONFIGURATION,
                "No supported configurations"
              );
          }
          _checkConfig(e) {
            var t, i;
            let r = this.keySystem;
            for (let n of e) {
              let e;
              let a = {
                initDataTypes: n.initDataTypes,
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                sessionTypes: ["temporary"],
                label: n.label,
              };
              if (
                n.audioCapabilities &&
                n.audioCapabilities.length &&
                a.audioCapabilities
              )
                for (let i of ((e = !1), n.audioCapabilities)) {
                  let n =
                    null === (t = i.contentType) || void 0 === t
                      ? void 0
                      : t.split(";")[0];
                  MSMediaKeys.isTypeSupported(r, n) &&
                    (a.audioCapabilities.push(i), (e = !0));
                }
              if (
                n.videoCapabilities &&
                n.videoCapabilities.length &&
                a.videoCapabilities
              )
                for (let t of ((e = !1), n.videoCapabilities)) {
                  let n =
                    null === (i = t.contentType) || void 0 === i
                      ? void 0
                      : i.split(";")[0];
                  MSMediaKeys.isTypeSupported(r, n) &&
                    (a.videoCapabilities.push(t), (e = !0));
                }
              if (e) return (this._configuration = a), !0;
            }
            return !1;
          }
          getConfiguration() {
            return this._configuration;
          }
          createMediaKeys() {
            return new Promise((e) => {
              e(new X(this.keySystem));
            });
          }
        }
        let et = B.P.forTag("eme_polyfill.v0_1b");
        class ei extends G.vp {
          constructor(e, t, i) {
            super(),
              (this._mediaElement = null),
              (this._lastUpdateDeferred = null),
              (this._lastGenerateResolver = null),
              (this.sessionId = null),
              (this._keySystem = e),
              (this._mediaElement = t),
              (this._prefix = i),
              (this.addEventListener = this.addListener),
              (this.removeEventListener = this.removeListener);
          }
          _addPrefix(e) {
            return this._prefix
              ? this._prefix +
                  e.replace(/\b[a-z]/, function (e) {
                    return e.toUpperCase();
                  })
              : e;
          }
          generateComplete(e) {
            this.emitEvent(new J(e)),
              this._lastGenerateResolver &&
                (this._lastGenerateResolver.resolve(!0),
                (this._lastGenerateResolver = null));
          }
          updateComplete() {
            this._lastUpdateDeferred &&
              (this._lastUpdateDeferred.resolve(!0),
              (this._lastUpdateDeferred = null)),
              this.emit(T.KEY_SESSION_STATUSES_CHANGE, null);
          }
          handleErrorEvent(e) {
            let t = new W(
              L.EME_MEDIA_KEY_SESSION_V0_1B_ERROR,
              "MediaKeySession v0.1b Error"
            );
            (t.debug.errorCode = e.errorCode),
              (t.debug.systemCode = e.systemCode),
              !e.sessionId && this._lastGenerateResolver
                ? (this._lastGenerateResolver.reject(t),
                  (this._lastGenerateResolver = null))
                : e.sessionId && this._lastUpdateDeferred
                ? (this._lastUpdateDeferred.reject(t),
                  (this._lastUpdateDeferred = null))
                : this.emit(T.KEY_SESSION_STATUSES_CHANGE, null);
          }
          generateRequest(e, t) {
            return this._mediaElement
              ? new Promise((e, i) => {
                  this._lastGenerateResolver = { resolve: e, reject: i };
                  try {
                    this._mediaElement[this._addPrefix("generateKeyRequest")](
                      this._keySystem,
                      new Uint8Array(t)
                    );
                  } catch (e) {
                    i(e), (this._lastGenerateResolver = null);
                  }
                })
              : Promise.reject(
                  ReferenceError("InvalidState: Media keys are not attached.")
                );
          }
          update(e) {
            if (!this._mediaElement)
              return Promise.reject(
                ReferenceError("InvalidState: Media keys are not attached.")
              );
            if (this._lastUpdateDeferred) {
              let t = this.update.bind(this, e);
              return this._lastUpdateDeferred.promise.then(t, t);
            }
            let t = (0, V.$)();
            this._lastUpdateDeferred = t;
            try {
              this._mediaElement[this._addPrefix("addKey")](
                this._keySystem,
                new Uint8Array(e),
                null,
                this.sessionId
              );
            } catch (e) {
              t.reject(e), (this._lastUpdateDeferred = null);
            }
            return t.promise;
          }
          close() {
            if (this.sessionId && this._mediaElement)
              try {
                this._mediaElement[this._addPrefix("cancelKeyRequest")](
                  this._keySystem,
                  this.sessionId
                );
              } catch (e) {
                et.warn("Could not close keysession", e);
              }
            return Promise.resolve(!0);
          }
        }
        class er {
          constructor(e, t = "") {
            (this._mediaElement = null),
              (this._waitingForSessionIds = []),
              (this._sessionMap = {}),
              (this.shouldRefreshPerTrack = !0),
              (this._keySystem = e),
              (this._prefix = t),
              (this._onKeyMessage = this._onKeyMessage.bind(this)),
              (this._onKeyAdded = this._onKeyAdded.bind(this)),
              (this._onKeyError = this._onKeyError.bind(this));
          }
          attach(e) {
            this._mediaElement = e;
            let t = this._prefix;
            e.addEventListener(t + T.V0_1B_NEEDKEY, Q);
            let i = e.addEventListener.bind(e);
            i(t + T.V0_1B_KEY_ADDED, this._onKeyAdded),
              i(t + T.V0_1B_KEY_ERROR, this._onKeyError),
              i(t + T.V0_1B_KEY_MESSAGE, this._onKeyMessage);
          }
          detach(e) {
            this._mediaElement = null;
            let t = this._prefix;
            e.removeEventListener(t + T.V0_1B_NEEDKEY, Q);
            let i = e.removeEventListener.bind(e);
            i(t + T.V0_1B_KEY_ADDED, this._onKeyAdded),
              i(t + T.V0_1B_KEY_ERROR, this._onKeyError),
              i(t + T.V0_1B_KEY_MESSAGE, this._onKeyMessage);
          }
          _getSession(e) {
            let t = this._sessionMap[e];
            if (t) return t;
            let i = this._waitingForSessionIds.shift();
            return i ? ((i.sessionId = e), (this._sessionMap[e] = i), i) : null;
          }
          _onKeyMessage(e) {
            let t = this._getSession(e.sessionId);
            if (!t) {
              et.warn("Got keymessage without session.");
              return;
            }
            t.generateComplete(e.message);
          }
          _onKeyAdded(e) {
            let t = this._getSession(e.sessionId);
            if (!t) {
              et.warn("Got keyadded without session.");
              return;
            }
            t.updateComplete();
          }
          _onKeyError(e) {
            let t = this._getSession(e.sessionId);
            if (!t) {
              et.warn("Got keyerror without session.");
              return;
            }
            t.handleErrorEvent(e);
          }
          setServerCertificate() {
            return Promise.reject(
              new W(
                L.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM,
                "Cannot set server certificate on this platform."
              )
            );
          }
          createSession() {
            let e = new ei(this._keySystem, this._mediaElement, this._prefix);
            return this._waitingForSessionIds.push(e), e;
          }
        }
        function en(e) {
          let t = this.mediaKeys;
          return (
            t && t !== e && t.detach(this),
            delete this.mediaKeys,
            (this.mediaKeys = e),
            e && e.attach(this),
            Promise.resolve()
          );
        }
        class ea {
          constructor(e, t, i) {
            if (
              ((this._configuration = null),
              (this.keySystem = e),
              (this._prefix = i),
              !this._checkConfig(t))
            )
              throw new W(
                L.EME_NO_SUPPORTED_CONFIGURATION,
                "No supported configurations"
              );
          }
          _checkConfig(e) {
            var t, i;
            let r = this.keySystem,
              n = document.createElement("video");
            for (let a of e) {
              let e = {
                  initDataTypes: a.initDataTypes,
                  audioCapabilities: [],
                  videoCapabilities: [],
                  persistentState: "optional",
                  distinctiveIdentifier: "optional",
                  sessionTypes: ["temporary"],
                  label: a.label,
                },
                s = !1;
              if (
                a.audioCapabilities &&
                a.audioCapabilities.length &&
                e.audioCapabilities
              )
                for (let i of ((s = !1), a.audioCapabilities)) {
                  let a =
                    null === (t = i.contentType) || void 0 === t
                      ? void 0
                      : t.split(";")[0];
                  a &&
                    n.canPlayType(a, r) &&
                    (e.audioCapabilities.push(i), (s = !0));
                }
              if (
                a.videoCapabilities &&
                a.videoCapabilities.length &&
                e.videoCapabilities
              )
                for (let t of ((s = !1), a.videoCapabilities)) {
                  let a =
                    null === (i = t.contentType) || void 0 === i
                      ? void 0
                      : i.split(";")[0];
                  a &&
                    n.canPlayType(a, r) &&
                    (e.videoCapabilities.push(t), (s = !0));
                }
              if (s) return (this._configuration = e), !0;
            }
            return !1;
          }
          getConfiguration() {
            return this._configuration;
          }
          createMediaKeys() {
            return new Promise((e) => {
              e(new er(this.keySystem, this._prefix));
            });
          }
        }
        function es(e) {
          navigator.requestMediaKeySystemAccess = function (t, i) {
            return new Promise((r) => {
              r(new ea(t, i, e));
            });
          };
          let t = HTMLMediaElement.prototype;
          delete t.mediaKeys, (t.setMediaKeys = en);
        }
        let eo = B.P.forTag("eme_polyfill.safari");
        class el extends G.vp {
          constructor(e, t) {
            super(),
              (this._attached = !1),
              (this._nativeKeySession = null),
              (this._lastGenerateResolver = (0, V.$)()),
              (this._lastUpdateResolver = (0, V.$)()),
              (this.addEventListener = this.addListener),
              (this.removeEventListener = this.removeListener),
              (this._nativeMediaKeys = e),
              (this._serverCertificate = t),
              (this._onKeyMessage = this._onKeyMessage.bind(this)),
              (this._onKeyAdded = this._onKeyAdded.bind(this)),
              (this._onKeyError = this._onKeyError.bind(this));
          }
          _attach() {
            if (this._attached) return;
            let e = this._nativeKeySession;
            if (!e) {
              eo.warn("Tried to attach with no WebKitMediaKeySession");
              return;
            }
            e.addEventListener(T.WEBKIT_KEY_MESSAGE, this._onKeyMessage),
              e.addEventListener(T.WEBKIT_KEY_ADDED, this._onKeyAdded),
              e.addEventListener(T.WEBKIT_KEY_ERROR, this._onKeyError);
          }
          _detach() {
            if (!this._attached) return;
            let e = this._nativeKeySession;
            if (!e) {
              eo.warn("Tried to detach with no WebKitMediaKeySession");
              return;
            }
            e.removeEventListener(T.WEBKIT_KEY_MESSAGE, this._onKeyMessage),
              e.removeEventListener(T.WEBKIT_KEY_ADDED, this._onKeyAdded),
              e.removeEventListener(T.WEBKIT_KEY_ERROR, this._onKeyError);
          }
          _onKeyMessage(e) {
            e.message &&
              e.message.buffer &&
              (this.emitEvent(new J(e.message.buffer)),
              this._lastGenerateResolver &&
                (this._lastGenerateResolver.resolve(!0),
                (this._lastGenerateResolver = null)));
          }
          _onKeyAdded() {
            this._lastUpdateResolver &&
              (this._lastUpdateResolver.resolve(!0),
              (this._lastUpdateResolver = null)),
              this.emit(T.KEY_SESSION_STATUSES_CHANGE, null);
          }
          _onKeyError() {
            let e = this._nativeKeySession && this._nativeKeySession.error,
              t = new W(
                L.EME_MEDIA_KEY_SESSION_SAFARI_ERROR,
                (e && e.message) || "MediaKeySession Safari Error"
              );
            e &&
              ((t.debug.errorCode = e.code),
              (t.debug.systemCode = e.systemCode)),
              this._lastGenerateResolver
                ? (this._lastGenerateResolver.reject(t),
                  (this._lastGenerateResolver = null))
                : this._lastUpdateResolver &&
                  (this._lastUpdateResolver.reject(t),
                  (this._lastUpdateResolver = null));
          }
          _rebuildInitData(e) {
            let t = new Uint8Array(e);
            if (new DataView(t.buffer).getUint32(0, !0) + 4 !== t.byteLength)
              throw new W(L.EME_INIT_DATA_MALFORMED, "Malformed init data");
            let i = (function (e) {
              let t = Math.floor(e.byteLength / 2),
                i = new Uint16Array(t),
                r = new DataView(e.buffer);
              for (let e = 0; e < t; e++) i[e] = r.getUint16(2 * e, !0);
              return String.fromCharCode.apply(null, i);
            })(t.slice(4)).match(/^skd:\/\/([0-9a-fA-F]+)/);
            if (!(null == i ? void 0 : i[1]))
              throw new W(L.EME_INIT_DATA_MALFORMED, "Invalid content ID");
            let r = new Uint8Array(
                (function (e) {
                  let t = new Uint8Array(2 * e.length),
                    i = new DataView(t.buffer),
                    r = e.split("");
                  for (let e = 0, t = r.length; e < t; e++) {
                    let t = r[e].charCodeAt(0);
                    i.setUint16(2 * e, t, !0);
                  }
                  return t.buffer;
                })(i[1])
              ),
              n = this._serverCertificate,
              a = new Uint8Array(
                t.byteLength + 4 + r.byteLength + 4 + n.byteLength
              ),
              s = 0;
            a.set(t, s), (s += t.byteLength);
            let o = new DataView(a.buffer);
            return (
              o.setUint32(s, r.byteLength, !0),
              (s += 4),
              a.set(r, s),
              (s += r.byteLength),
              o.setUint32(s, n.byteLength, !0),
              (s += 4),
              a.set(n, s),
              a
            );
          }
          generateRequest(e, t) {
            return new Promise((e, i) => {
              this._lastGenerateResolver = { resolve: e, reject: i };
              try {
                let e = this._rebuildInitData(t);
                (this._nativeKeySession = this._nativeMediaKeys.createSession(
                  "video/mp4",
                  new Uint8Array(e),
                  null
                )),
                  this._attach();
              } catch (e) {
                (this._lastGenerateResolver = null), i(e);
              }
            });
          }
          update(e) {
            let t = (0, V.$)();
            if (((this._lastUpdateResolver = t), !this._nativeKeySession))
              return (
                eo.warn("Tried to update with no WebKitMediaKeySession"),
                t.promise
              );
            try {
              this._nativeKeySession.update(new Uint8Array(e));
            } catch (e) {
              t.reject(e);
            }
            return t.promise;
          }
          close() {
            return new Promise((e) => {
              this._detach(), e(!0);
            });
          }
        }
        class ed {
          constructor(e) {
            (this._lastBoundSetter = null),
              (this._serverCertificate = null),
              (this.shouldRefreshPerTrack = !0),
              (this._nativeMediaKeys = new WebKitMediaKeys(e));
          }
          attach(e) {
            return new Promise((t) => {
              if (e.readyState >= 1) {
                e.webkitSetMediaKeys(this._nativeMediaKeys), t();
                return;
              }
              let i = () => {
                e.removeEventListener(T.MEDIA_LOADEDMETADATA, i),
                  (this._lastBoundSetter = null),
                  e.webkitSetMediaKeys(this._nativeMediaKeys);
              };
              (this._lastBoundSetter = i),
                e.addEventListener(T.MEDIA_LOADEDMETADATA, i),
                e.addEventListener(T.WEBKIT_NEEDKEY, Q),
                t();
            });
          }
          detach(e) {
            e.removeEventListener(T.WEBKIT_NEEDKEY, Q),
              this._lastBoundSetter &&
                (e.removeEventListener(
                  T.MEDIA_LOADEDMETADATA,
                  this._lastBoundSetter
                ),
                (this._lastBoundSetter = null));
          }
          setServerCertificate(e) {
            return (
              (this._serverCertificate = new Uint8Array(e)), Promise.resolve(!0)
            );
          }
          createSession() {
            if (!this._serverCertificate)
              throw new W(
                L.EME_INVALID_STATE_ERROR,
                "The server certificate is not available"
              );
            return new el(this._nativeMediaKeys, this._serverCertificate);
          }
        }
        class e_ {
          constructor(e, t) {
            this.keySystem = e;
            let i = this._checkConfig(t);
            if (!i)
              throw new W(
                L.EME_NO_SUPPORTED_CONFIGURATION,
                "No supported configurations"
              );
            this._configuration = i;
          }
          _checkConfig(e) {
            let t = this.keySystem,
              i = !1;
            for (let r of e) {
              let e = {
                initDataTypes: r.initDataTypes,
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                sessionTypes: ["temporary"],
              };
              if (r.audioCapabilities)
                for (let n of r.audioCapabilities) {
                  if (!n.contentType) continue;
                  let r = n.contentType.split(";")[0];
                  WebKitMediaKeys.isTypeSupported(t, r) &&
                    (e.audioCapabilities.push(n), (i = !0));
                }
              if (r.videoCapabilities)
                for (let n of r.videoCapabilities) {
                  if (!n.contentType) continue;
                  let r = n.contentType.split(";")[0];
                  WebKitMediaKeys.isTypeSupported(t, r) &&
                    (e.videoCapabilities.push(n), (i = !0));
                }
              if (i) return e;
            }
            return null;
          }
          getConfiguration() {
            return this._configuration;
          }
          createMediaKeys() {
            return new Promise((e) => {
              e(new ed(this.keySystem));
            });
          }
        }
        function eu(e) {
          let t = this.mediaKeys;
          return (t && t !== e && t.detach(this),
          delete this.mediaKeys,
          (this.mediaKeys = e),
          e)
            ? e.attach(this)
            : Promise.resolve();
        }
        let eh = B.P.forTag("eme_polyfills.tester"),
          ec = {
            [A.WIDEVINE]: {
              commonName: "widevine",
              licenseServer: "https://@webgate/widevine-license",
              withCertificate: !0,
              pssh_field: { audio: "pssh_widevine", video: "encryption_data" },
            },
            [A.PLAYREADY]: {
              commonName: "playready",
              licenseServer: "https://@webgate/playready-license",
              withCertificate: !1,
              pssh_field: { audio: "pssh_playready", video: "encryption_data" },
            },
            [A.PLAYREADY_HARDWARE]: {
              commonName: "playready",
              licenseServer: "https://@webgate/playready-license",
              withCertificate: !1,
              pssh_field: { audio: "pssh_playready", video: "encryption_data" },
            },
            [A.FAIRPLAY]: {
              commonName: "fairplay",
              licenseServer: "https://@webgate/fairplay-license",
              withCertificate: !0,
              pssh_field: { audio: "pssh_fairplay", video: "asset_id" },
            },
            [A.INVALID_SPOTIFY_KEY]: {
              commonName: "spotify-invalid",
              licenseServer: "https://@webgate",
              withCertificate: !1,
              pssh_field: { audio: "pssh_invalid", video: "encryption_data" },
            },
          },
          ep = [
            {
              label: "video-sw-decode",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="flac"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/webm; codecs="opus"',
                  robustness: "SW_SECURE_CRYPTO",
                },
              ],
              videoCapabilities: [
                {
                  contentType: 'video/mp4; codecs="avc1.64002a"',
                  robustness: "SW_SECURE_DECODE",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d402a"',
                  robustness: "SW_SECURE_DECODE",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d401f"',
                  robustness: "SW_SECURE_DECODE",
                },
                {
                  contentType: 'video/webm; codecs="vp9"',
                  robustness: "SW_SECURE_DECODE",
                },
                {
                  contentType: 'video/webm; codecs="vp8"',
                  robustness: "SW_SECURE_DECODE",
                },
              ],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "video-sw-crypto",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="flac"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/webm; codecs="opus"',
                  robustness: "SW_SECURE_CRYPTO",
                },
              ],
              videoCapabilities: [
                {
                  contentType: 'video/mp4; codecs="avc1.64002a"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d402a"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d401f"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'video/webm; codecs="vp9"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'video/webm; codecs="vp8"',
                  robustness: "SW_SECURE_CRYPTO",
                },
              ],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "video-no-robustness",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                { contentType: 'audio/mp4; codecs="flac"', robustness: "" },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "",
                },
                { contentType: 'audio/webm; codecs="opus"', robustness: "" },
              ],
              videoCapabilities: [
                {
                  contentType: 'video/mp4; codecs="avc1.64002a"',
                  robustness: "",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d402a"',
                  robustness: "",
                },
                {
                  contentType: 'video/mp4; codecs="avc1.4d401f"',
                  robustness: "",
                },
                { contentType: 'video/webm; codecs="vp9"', robustness: "" },
                { contentType: 'video/webm; codecs="vp8"', robustness: "" },
              ],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "audio-flac-sw-crypto",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="flac"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "SW_SECURE_CRYPTO",
                },
              ],
              videoCapabilities: [],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "audio-flac-no-robustness",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                { contentType: 'audio/mp4; codecs="flac"', robustness: "" },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "",
                },
              ],
              videoCapabilities: [],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "audio-sw-crypto",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "SW_SECURE_CRYPTO",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "SW_SECURE_CRYPTO",
                },
              ],
              videoCapabilities: [],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
            {
              label: "audio-no-robustness",
              initDataTypes: ["cenc"],
              audioCapabilities: [
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.2"',
                  robustness: "",
                },
                {
                  contentType: 'audio/mp4; codecs="mp4a.40.5"',
                  robustness: "",
                },
              ],
              videoCapabilities: [],
              distinctiveIdentifier: "optional",
              persistentState: "optional",
              sessionTypes: ["temporary"],
            },
          ];
        function ef(e, t) {
          var i, r;
          for (let n of e) {
            let e;
            let a = { audioCapabilities: [], videoCapabilities: [] },
              s = !1;
            if (
              null === (i = n.audioCapabilities) || void 0 === i
                ? void 0
                : i.length
            )
              for (let i of ((s = !1), n.audioCapabilities))
                (e = i.contentType) &&
                  t(e) &&
                  (a.audioCapabilities.push(i), (s = !0));
            if (
              null === (r = n.videoCapabilities) || void 0 === r
                ? void 0
                : r.length
            )
              for (let i of ((s = !1), n.videoCapabilities))
                (e = i.contentType) &&
                  t(e) &&
                  (a.videoCapabilities.push(i), (s = !0));
            if (s) return a;
          }
          return null;
        }
        let eE = /([^;]+)(?:;\s?codecs="(.*)")?/;
        function em(e) {
          var t;
          let [, i = "unknown", r = "unknown"] =
            null !== (t = e.match(eE)) && void 0 !== t ? t : [];
          return { mimeType: i, codec: r, contentType: e };
        }
        let ey = /([^;]+)(?:;\s?codecs="(.*)")?/,
          ev = B.P.forTag("playback.eme_manager"),
          eg = {
            EMPTY: "-no-robustness",
            SW_CRYPTO: "-sw-crypto",
            SW_DECODE: "-sw-decode",
            HW_CRYPTO: "-hw-crypto",
            HW_DECODE: "-hw-decode",
            HW_ALL: "-hw-all",
          };
        function eR(e, t) {
          var i;
          let r = [],
            n = RegExp(`codecs="(${t.join("|")})"`);
          for (let t of e)
            n.test(null !== (i = t.contentType) && void 0 !== i ? i : "") ||
              r.push(t);
          return r.length ? r : null;
        }
        class eS extends G.vp {
          constructor(e) {
            var t;
            super(),
              (this._unauthServerCertificateBase = ""),
              (this._disallowCodecs = {}),
              (this._keySystemDeferred = (0, V.$)()),
              (this._configuration = (0, V.$)()),
              (this._keySystemSettings = null),
              (this._keySessions = []),
              (this._configs = []),
              (this._pendingCertificateRequest = null),
              (this._certificate = null),
              (this._transport = e.transport),
              (this._emeImpl = e.emeImpl),
              (this._noServerCertificate = !!e.noServerCertificate),
              (this._precacheServerCertificate =
                null === (t = e.precacheServerCertificate) ||
                void 0 === t ||
                t),
              (this._unauthServerCertificateBase =
                e.unauthServerCertificateBase ||
                "https://spclient.wg.spotify.com"),
              (this._configFilter = (function (e) {
                let t = ["--ensure-no-match--"];
                if (null == e ? void 0 : e.length) {
                  let i = e.length;
                  for (; i--; ) {
                    let r = e[i];
                    r && eg.hasOwnProperty(r) && t.push(eg[r]);
                  }
                }
                return RegExp(`(${t.join("|")})$`);
              })(e.disallowRobustnessValues || [])),
              (this._disallowCodecs = e.disallowCodecs),
              (this._preferredKeySystems = e.preferredKeySystems || [
                A.WIDEVINE,
                A.PLAYREADY,
                A.PLAYREADY_HARDWARE,
                A.FAIRPLAY,
              ]);
          }
          static create(e) {
            return new Promise((t) => {
              let i =
                "undefined" != typeof navigator &&
                (null == navigator
                  ? void 0
                  : navigator.requestMediaKeySystemAccess) &&
                "undefined" == typeof WebKitMediaKeys &&
                "undefined" != typeof MediaKeySystemAccess &&
                (null == MediaKeySystemAccess
                  ? void 0
                  : MediaKeySystemAccess.prototype.getConfiguration)
                  ? (eh.log("Using native EME implementation."), "native")
                  : "undefined" != typeof HTMLMediaElement &&
                    (null == HTMLMediaElement
                      ? void 0
                      : HTMLMediaElement.prototype.webkitGenerateKeyRequest)
                  ? (eh.log(
                      'Detected "webkit" Prefixed EME v0.1b. Polyfilling.'
                    ),
                    es("webkit"),
                    "v0.1b-webkit")
                  : "undefined" != typeof HTMLMediaElement &&
                    (null == HTMLMediaElement
                      ? void 0
                      : HTMLMediaElement.prototype.generateKeyRequest)
                  ? (eh.log("Detected Unprefixed EME v0.1b. Polyfilling."),
                    es(),
                    "v0.1b")
                  : "undefined" != typeof MSMediaKeys
                  ? (eh.log("Detected MS IE EME. Polyfilling."),
                    (function () {
                      navigator.requestMediaKeySystemAccess = function (e, t) {
                        return new Promise((i) => {
                          i(new ee(e, t));
                        });
                      };
                      let e = HTMLMediaElement.prototype;
                      delete e.mediaKeys, (e.setMediaKeys = Z);
                    })(),
                    "ms-ie")
                  : "function" == typeof WebKitMediaKeys
                  ? (eh.log("Detected Safari EME. Polyfilling."),
                    (function () {
                      navigator.requestMediaKeySystemAccess = function (e, t) {
                        return new Promise((i) => {
                          i(new e_(e, t));
                        });
                      };
                      let e = HTMLMediaElement.prototype;
                      delete e.mediaKeys, (e.setMediaKeys = eu);
                    })(),
                    "safari")
                  : (eh.warn("Detected no EME APIs."), null);
              if (!i)
                throw W.fatal(
                  L.EME_API_NOT_SUPPORTED,
                  "Platform does not support navigator.requestMediaKeySystemAccess"
                );
              t(
                new eS(
                  Object.assign(Object.assign({}, e), { emeImpl: i })
                ).init()
              );
            });
          }
          _prepareConfiguration(e) {
            let t = e.getConfiguration();
            ev.info("KeySystem configured as", t.label),
              (t.audioCapabilities && t.audioCapabilities.length) ||
                this._appendProbableMediaCapabilities(e.keySystem, t);
            let i = {
              keySystem: e.keySystem,
              keySystemImpl: this._emeImpl,
              audioFormats: this._parseCapabilities(t.audioCapabilities),
              videoFormats: this._parseCapabilities(t.videoCapabilities),
            };
            return (
              (this._keySystemSettings = ec[e.keySystem]),
              this._configuration.resolve(i),
              i
            );
          }
          _parseCapabilities(e) {
            var t;
            if (!e) return [];
            let i = [];
            for (let r of e) {
              if (!(null == r ? void 0 : r.contentType)) continue;
              let [, e, n] =
                null !== (t = r.contentType.match(ey)) && void 0 !== t ? t : [];
              e &&
                i.push({
                  contentType: r.contentType,
                  mimeType: e,
                  codec: null != n ? n : "",
                });
            }
            return i;
          }
          _appendProbableMediaCapabilities(e, t) {
            let i = ef(
              this._configs,
              (t) =>
                (-1 === t.indexOf("webm") ||
                  (e !== A.PLAYREADY && e !== A.PLAYREADY_HARDWARE)) &&
                !!MediaSource.isTypeSupported(t)
            );
            i &&
              ((t.audioCapabilities = i.audioCapabilities),
              (t.videoCapabilities = i.videoCapabilities));
          }
          _trySetServerCertificate(e, t) {
            let i = this._certificate;
            return (
              i && i.expiry > Date.now()
                ? Promise.resolve(i)
                : this._requestServerCertificate(e)
            )
              .then((e) => t.setServerCertificate(e.contents))
              .then(() => this)
              .catch(
                (e) => (
                  ev.warn("Error from setting server certificate", e), this
                )
              );
          }
          _cacheServerCertificate(e) {
            let t = "";
            switch (e) {
              case A.FAIRPLAY:
                t = "fairplay";
                break;
              case A.WIDEVINE:
                t = "widevine";
                break;
              default:
                return Promise.resolve(this);
            }
            return this._requestServerCertificate(
              `${this._unauthServerCertificateBase}/${t}-license`,
              !1
            ).then(
              () => this,
              (e) => (ev.warn("Cannot precache server certificate", e), this)
            );
          }
          _requestServerCertificate(e, t = !0) {
            return this._pendingCertificateRequest
              ? this._pendingCertificateRequest
              : this._transport
                  .request(`${e}/v1/application-certificate`, {
                    authorize: t,
                    responseType: "arraybuffer",
                    parseResponseHeaders: !0,
                    retry: {
                      condition: (e, t) =>
                        e.getStatusFamily() === t.SERVER_ERROR,
                    },
                  })
                  .then((e) => {
                    var t;
                    if (!e.body) throw TypeError("Response body is invalid");
                    this._pendingCertificateRequest = null;
                    let i = 3600,
                      r =
                        null === (t = e.headers) || void 0 === t
                          ? void 0
                          : t.get("cache-control");
                    if (r) {
                      let e = r.match(/(?:^|,|\s)max-age=(\d+)(?:,|$)/);
                      e && e[1] && (i = 1e3 * parseInt(e[1], 10));
                    }
                    return (
                      (this._certificate = {
                        expiry: Date.now() + (i - 600),
                        contents: e.body,
                      }),
                      this._certificate
                    );
                  });
          }
          _extractPlayReadyChallenge(e, t) {
            var i;
            let r = null,
              n = new Uint16Array(e),
              a = String.fromCharCode.apply(null, n);
            if (-1 === a.indexOf("PlayReadyKeyMessage"))
              return ev.info("Using unextracted PlayReady message."), e;
            let s = new DOMParser().parseFromString(a, "application/xml"),
              o = s.getElementsByTagName("Challenge")[0],
              l =
                null === (i = null == o ? void 0 : o.childNodes[0]) ||
                void 0 === i
                  ? void 0
                  : i.nodeValue;
            if (l)
              try {
                r = atob(l);
                let e = s.getElementsByTagName("name"),
                  t = s.getElementsByTagName("value");
                if (e.length !== t.length)
                  throw new W(
                    L.EME_HEADER_KEY_VALUE_MISMATCH,
                    "Mismatched header <name>/<value> pair in key message"
                  );
              } catch (e) {
                this.emit(T.EME_LICENSE_REQUEST_ERROR, { signal: t, error: e }),
                  (r = null);
              }
            else
              this.emit(T.EME_LICENSE_REQUEST_ERROR, {
                signal: t,
                error: new W(
                  L.EME_HEADER_KEY_VALUE_MISMATCH,
                  "Mismatched header <name>/<value> pair in key message"
                ),
              });
            return r;
          }
          _onMessage(e, t) {
            e.timeMap.generate.end = (0, j.q)();
            let i = "message" in t ? t.message : null,
              r = "messageType" in t ? t.messageType : void 0;
            if (
              (ev.info("Got EME message event with type", r),
              i &&
                e.keySystem === A.PLAYREADY &&
                (i = this._extractPlayReadyChallenge(i, e.signal)),
              !i)
            ) {
              ev.info("Ignoring message event: no valid request payload");
              return;
            }
            if (!e.licenseServer) {
              ev.info("Ignoring message event: no licenseServer url");
              return;
            }
            e.timeMap.request.start = (0, j.q)();
            let n = e.licenseServer;
            e.keySystem === A.FAIRPLAY &&
              (n = `${n}${-1 !== n.indexOf("?") ? "&" : "?"}assetId=hex`),
              this._transport
                .request(n, {
                  method: "POST",
                  payload: i,
                  responseType: "arraybuffer",
                  retry: {
                    condition: (e, t) =>
                      400 !== e.status &&
                      402 !== e.status &&
                      403 !== e.status &&
                      (!e.body || e.getStatusFamily() !== t.SUCCESS),
                  },
                })
                .then(this._handleLicenseResponse.bind(this, e));
          }
          _handleLicenseResponse(e, t) {
            let i, r;
            let n = (t) => {
              e.licenseServer && (t.licenseServer = e.licenseServer),
                this.emit(T.EME_LICENSE_REQUEST_ERROR, {
                  signal: e.signal,
                  error: t,
                });
            };
            if (((e.timeMap.request.end = (0, j.q)()), 200 === t.status)) {
              if (!t.body) {
                ((i = new W(
                  L.EME_LICENSE_REQUEST_EMPTY_RESPONSE,
                  "Empty license response body"
                )).status = t.status),
                  n(i);
                return;
              }
              try {
                (e.timeMap.update.start = (0, j.q)()),
                  e.keySession.update(t.body).catch((e) => {
                    n(
                      new W(
                        L.EME_LICENSE_UPDATE_FAILED,
                        e.message || "License update failed."
                      )
                    );
                  }),
                  ev.info("KeySession updated.");
              } catch (t) {
                let { message: e } = t;
                n(
                  new W(
                    L.EME_LICENSE_UPDATE_FAILED,
                    e || "License update failed."
                  )
                );
              }
              return;
            }
            try {
              if (t.body) {
                let e = new Uint8Array(t.body),
                  i = String.fromCharCode.apply(String, e);
                r = JSON.parse(i).errorMsg;
              }
            } catch (e) {}
            402 === t.status
              ? this.emit(T.EME_LICENSE_REQUEST_CAPPED, {
                  signal: e.signal,
                  error: new $(L.CAPPING_USER_IS_CAPPED, "User is capped."),
                })
              : (400 === t.status && "widevine error" === r
                  ? (((i = W.fatal(
                      L.EME_LICENSE_REQUEST_WIDEVINE_ERROR,
                      "Widevine license server failed to parse request."
                    )).status = t.status),
                    (i.shouldRefreshEndpoint = !0))
                  : (((i = new W(
                      L.EME_LICENSE_REQUEST_FAILED_WITH_STATUS,
                      `License request failed (${r || "unknown"})`
                    )).status = t.status),
                    (i.shouldRefreshEndpoint =
                      400 === t.status || 403 === t.status)),
                n(i));
          }
          _selectKeySystem(e) {
            let t = this._preferredKeySystems;
            for (let i = 0, r = t.length; i < r; i++) {
              let r = t[i];
              if (r && r in e) return e[r];
            }
            return null;
          }
          _testMediaKeys(e) {
            return new Promise((t) => {
              t(e.createMediaKeys());
            }).then(
              (t) => {
                if (!t)
                  return Promise.reject(
                    W.fatal(
                      L.EME_MEDIA_KEYS_NOT_SUPPORTED,
                      "Cannot create MediaKeys from KeySystemAccess"
                    )
                  );
                e.keySystem === A.FAIRPLAY &&
                  t.setServerCertificate(new ArrayBuffer(0));
                try {
                  if (!t.createSession()) throw Error("");
                } catch (t) {
                  let { message: e } = t;
                  return Promise.reject(
                    W.fatal(
                      L.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED,
                      e || "Cannot create MediaKeySession from KeySystemAccess"
                    )
                  );
                }
                return Promise.resolve(e);
              },
              (e) => (
                ev.error(e.name),
                Promise.reject(
                  W.fatal(
                    L.EME_MEDIA_KEYS_NOT_SUPPORTED,
                    e.message || "Unknown error"
                  )
                )
              )
            );
          }
          _saveSession(e) {
            this._keySessions.push(e);
          }
          destroySessions() {
            let e = [];
            for (let t of this._keySessions)
              try {
                let i = t.keySession;
                if (!i) continue;
                t.onMessageListener &&
                  i.removeEventListener(
                    T.KEY_SESSION_MESSAGE,
                    t.onMessageListener
                  ),
                  t.onKeyStatusChangeListener &&
                    i.removeEventListener(
                      T.KEY_SESSION_STATUSES_CHANGE,
                      t.onKeyStatusChangeListener
                    );
                let r = Promise.resolve(i.close()).catch((e) => {
                  ev.warn("Failed to close KeySession", e);
                });
                e.push(r),
                  (t.keySession = null),
                  (t.onMessageListener = null),
                  (t.onKeyStatusChangeListener = null),
                  ev.info("Closed KeySession");
              } catch (e) {
                ev.warn("Failed to close KeySession", e);
              }
            return (this._keySessions = []), Promise.all(e);
          }
          init() {
            let e = [];
            for (let t of ep)
              if (!(t.label && this._configFilter.test(t.label))) {
                if (this._disallowCodecs) {
                  let e = (function (e, { audio: t, video: i }) {
                    var r, n, a, s;
                    if (
                      !(null == t ? void 0 : t.length) &&
                      !(null == i ? void 0 : i.length)
                    )
                      return e;
                    let { audioCapabilities: o, videoCapabilities: l } = e;
                    return ((null == t ? void 0 : t.length) &&
                      (null === (r = e.audioCapabilities) || void 0 === r
                        ? void 0
                        : r.length) &&
                      !(o =
                        null !== (n = eR(e.audioCapabilities, t)) &&
                        void 0 !== n
                          ? n
                          : void 0)) ||
                      ((null == i ? void 0 : i.length) &&
                        (null === (a = e.videoCapabilities) || void 0 === a
                          ? void 0
                          : a.length) &&
                        !(l =
                          null !== (s = eR(e.videoCapabilities, i)) &&
                          void 0 !== s
                            ? s
                            : void 0))
                      ? null
                      : Object.assign(Object.assign({}, e), {
                          audioCapabilities: o,
                          videoCapabilities: l,
                        });
                  })(t, this._disallowCodecs);
                  if (!e) continue;
                  t = e;
                }
                e.push(t);
              }
            return (this._configs = e), this.requestMediaKeySystemAccess();
          }
          requestMediaKeySystemAccess() {
            let e = this._keySystemDeferred,
              t = {},
              i = [];
            for (let e in A)
              Object.prototype.hasOwnProperty.call(A, e) &&
                i.push(
                  navigator
                    .requestMediaKeySystemAccess(A[e], this._configs)
                    .then((e) => {
                      t[e.keySystem] = e;
                    })
                    .catch(() => {})
                );
            return Promise.all(i)
              .then(() => this._selectKeySystem(t))
              .then((e) =>
                e
                  ? (ev.info("Supported keySystem: ", e.keySystem),
                    this._testMediaKeys(e))
                  : Promise.reject(
                      new W(
                        L.EME_NO_SUPPORTED_KEYSYSTEM,
                        "No supported keysystem was found."
                      )
                    )
              )
              .then(
                (t) => (
                  this._prepareConfiguration(t),
                  e.resolve(t),
                  this._precacheServerCertificate
                    ? this._cacheServerCertificate(t.keySystem)
                    : this
                )
              )
              .catch((t) => {
                let i = t.code || L.EME_NO_SUPPORTED_KEYSYSTEM,
                  r = t.message || "No supported keysystem";
                return e.reject(W.fatal(i, r)), e.promise.then(() => this);
              });
          }
          createMediaKeys(e) {
            return this._keySystemDeferred.promise
              .then((e) => e.createMediaKeys())
              .then((t) => this.setMediaKeys(e, t))
              .then(() =>
                this._configuration.promise.then(() => {
                  let t = this._keySystemSettings;
                  return t && !this._noServerCertificate && t.withCertificate
                    ? this._trySetServerCertificate(
                        t.licenseServer,
                        e.mediaKeys
                      )
                    : this;
                })
              );
          }
          setMediaKeys(e, t) {
            return e.setMediaKeys(t).then(() => {
              if (!e.mediaKeys)
                throw new W(
                  L.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED,
                  "Failed to set MediaKeys on HTMLMediaElement"
                );
              return this;
            });
          }
          removeMediaKeys(e) {
            let t = e.mediaKeys;
            return Promise.resolve(e.setMediaKeys(null)).then(() => t);
          }
          getKeySystemInfo() {
            return this._configuration.promise;
          }
          getKeySystemImpl() {
            return this._emeImpl;
          }
          createSessionWithParams(e) {
            return new Promise((t, i) => {
              ev.info("Creating KeySession", e.keySystem);
              let r = e.mediaKeys.createSession(),
                n = {
                  generate: { start: null, end: null },
                  request: { start: null, end: null },
                  update: { start: null, end: null },
                },
                a =
                  (this._keySystemSettings &&
                    this._keySystemSettings.licenseServer) ||
                  void 0,
                s = this._onMessage.bind(this, {
                  keySystem: e.keySystem,
                  keySession: r,
                  licenseServer: e.licenseServer || a,
                  signal: e.signal,
                  timeMap: n,
                });
              r.addEventListener(T.KEY_SESSION_MESSAGE, s);
              let o = () => {
                ev.info("KeyStatus change"), (n.update.end = (0, j.q)());
                let e = (e) =>
                  null !== e.start && null !== e.end
                    ? (0, j.n)(e.start, e.end)
                    : 0;
                t({
                  elapsed: {
                    generate: e(n.generate),
                    request: e(n.request),
                    update: e(n.update),
                  },
                });
              };
              return (
                r.addEventListener(T.KEY_SESSION_STATUSES_CHANGE, o),
                this._saveSession({
                  keySession: r,
                  onMessageListener: s,
                  onKeyStatusChangeListener: o,
                }),
                ev.info("Generating KeySession request", e.keySystem),
                (n.generate.start = (0, j.q)()),
                Promise.resolve(
                  r.generateRequest(e.initDataType, e.initData.buffer)
                ).catch((e) => {
                  let t;
                  if (e) {
                    switch (e.name) {
                      case "NotSupportedError":
                        t = L.EME_NOT_SUPPORTED_ERROR;
                        break;
                      case "InvalidStateError":
                        t = L.EME_INVALID_STATE_ERROR;
                        break;
                      default:
                        t = L.EME_UNKNOWN_ERROR;
                    }
                    i(new W(t, e.message || "Unknown error message."));
                  }
                })
              );
            });
          }
        }
        ((_ = I || (I = {})).SHOWING = "showing"),
          (_.HIDDEN = "hidden"),
          (_.DISABLED = "disabled");
        let eT = Array.prototype.slice,
          eA =
            "function" == typeof Array.from
              ? (e) => Array.from(e)
              : (e) => eT.call(e);
        function eL(e, t) {
          for (let i of eA(e.getElementsByTagName(t))) e.removeChild(i);
        }
        function eP(e) {
          return { id: e.id, text: e.text };
        }
        let eb = "visible",
          eI = "hidden",
          eD =
            /^[A-Za-z]{2,4}([_-][A-Za-z]{4})?([_-]([A-Za-z]{2}|[0-9]{3}))?$|[A-Za-z]{2,3}-x-cc/;
        class eC extends G.vp {
          constructor(e) {
            super(),
              (this._isVisible = !1),
              (this._player = null),
              (this._crossOrigin = null),
              (this._currentVideoContent = null),
              (this._unsubscribers = []),
              (this._displayedCues = []),
              (this._deactivateListeners = !1),
              (this._activeLanguage = void 0),
              (this._preferredLanguage = e.language.toLowerCase()),
              e.deactivateListeners && (this._deactivateListeners = !0),
              (this._onEnter = this._onEnter.bind(this)),
              (this._onExit = this._onExit.bind(this)),
              (this._onLoadedMetadata = this._onLoadedMetadata.bind(this)),
              this.setPlayer(e.player);
          }
          _subscribeToCueEvents(e) {
            var t;
            let { track: i } = e;
            if (!i) throw Error("No track");
            if (!(null === (t = i.cues) || void 0 === t ? void 0 : t.length)) {
              let t = () => {
                this._subscribeToCueEvents(e), e.removeEventListener("load", t);
              };
              e.addEventListener("load", t);
              return;
            }
            (this._displayedCues = i.activeCues
              ? Array.from(i.activeCues)
              : []),
              this._emitDisplayedCues();
            for (let e = 0; e < i.cues.length; e++) {
              let t = i.cues[e];
              t &&
                (t.addEventListener("enter", this._onEnter),
                t.addEventListener("exit", this._onExit),
                this._unsubscribers.push(() => {
                  t.removeEventListener("enter", this._onEnter),
                    t.removeEventListener("exit", this._onExit);
                }));
            }
          }
          _unsubscribeFromCueEvents() {
            this._unsubscribers.forEach((e) => e()), (this._unsubscribers = []);
          }
          _onEnter(e) {
            let t = e.target;
            this._displayedCues.indexOf(t) > -1 ||
              (this._displayedCues.push(t), this._emitDisplayedCues());
          }
          _onExit(e) {
            let t = e.target,
              i = this._displayedCues.indexOf(t);
            i > -1 &&
              (this._displayedCues.splice(i, 1), this._emitDisplayedCues());
          }
          _emitDisplayedCues() {
            this.emit(T.PLAYER_DISPLAYED_CUES_CHANGED, {
              cues: this._displayedCues.map(eP),
            });
          }
          _updateVisibleState() {
            var e, t;
            if (!this._player) return;
            let i = this.getActiveLanguage();
            Array.from(
              null !==
                (t =
                  null === (e = this._player) || void 0 === e
                    ? void 0
                    : e.querySelectorAll("track")) && void 0 !== t
                ? t
                : []
            ).forEach((e) => {
              e.style.visibility = this._isVisible ? eb : eI;
            });
            let r = this._player.textTracks;
            for (let e = 0, t = r.length; e < t; e++) {
              let t = r[e];
              t &&
                (t.language.toLowerCase() === i
                  ? (t.mode = this._isVisible ? I.SHOWING : I.HIDDEN)
                  : (t.mode = I.DISABLED));
            }
          }
          _updateTextTracks() {
            let e = this._player;
            e &&
              (e.readyState >= 1
                ? this._switchActiveTextTrack()
                : this._currentVideoContent &&
                  e.addEventListener(
                    T.MEDIA_LOADEDMETADATA,
                    this._onLoadedMetadata
                  ));
          }
          _switchActiveTextTrack() {
            let e = this._player;
            if (!e || !this._currentVideoContent) return;
            let t = this._updateActiveLanguage(),
              i = null,
              r = null;
            eA(e.getElementsByTagName("track")).forEach((e) => {
              e.default && (i = e), e.srclang.toLowerCase() === t && (r = e);
            }),
              i &&
                ((i.default = !1),
                (i.track.mode = I.DISABLED),
                this._unsubscribeFromCueEvents()),
              r &&
                ((r.default = !0),
                (r.track.mode = this._isVisible ? I.SHOWING : I.HIDDEN),
                this._deactivateListeners || this._subscribeToCueEvents(r));
          }
          _onLoadedMetadata() {
            let e = this._player;
            if (e && (eL(e, "track"), this._currentVideoContent)) {
              for (let { lang: t, url: i } of ((e.crossOrigin = "anonymous"),
              this._updateActiveLanguage(),
              this._currentVideoContent.getSubtitles())) {
                let r = document.createElement("track");
                (r.label = `${t} subtitles`),
                  (r.kind = "subtitles"),
                  (r.srclang = t),
                  (r.src = i),
                  (r.style.visibility = this._isVisible ? eb : eI),
                  e.appendChild(r);
              }
              setTimeout(() => this._switchActiveTextTrack());
            }
          }
          _updateActiveLanguage() {
            if (!this._player || !this._currentVideoContent) {
              this._activeLanguage = void 0;
              return;
            }
            let e = this._currentVideoContent.getSubtitleLanguages(),
              t = this._preferredLanguage.split("-")[0],
              i = null;
            for (let r of e) {
              let e = r.toLowerCase();
              if (e === this._preferredLanguage)
                return (this._activeLanguage = e), this._activeLanguage;
              e.split("-")[0] === t && null === i && (i = e);
            }
            return (
              (this._activeLanguage = null != i ? i : "en-us"),
              this._activeLanguage
            );
          }
          getActiveLanguage() {
            if (this._player && this._currentVideoContent)
              return this._activeLanguage;
          }
          setVideoContent(e) {
            var t;
            this._unsubscribeFromCueEvents(),
              (this._displayedCues = []),
              (this._currentVideoContent = e),
              e
                ? this.emit(T.PLAYER_SUBTITLE_LANGUAGES_LOADED, {
                    languages:
                      null !== (t = e.getSubtitleLanguages()) && void 0 !== t
                        ? t
                        : [],
                  })
                : this.clear(),
              this._updateTextTracks();
          }
          setPlayer(e) {
            var t;
            let i = (null == e ? void 0 : e.tagName) === "VIDEO" ? e : null;
            this._player !== i && this.clear(),
              (this._player = i || null),
              (this._crossOrigin =
                null !== (t = null == i ? void 0 : i.crossOrigin) &&
                void 0 !== t
                  ? t
                  : null),
              this._updateTextTracks();
          }
          getAvailableLanguages() {
            var e, t;
            return null !==
              (t =
                null === (e = this._currentVideoContent) || void 0 === e
                  ? void 0
                  : e.getSubtitleLanguages()) && void 0 !== t
              ? t
              : [];
          }
          setLanguage(e) {
            if (!e.length)
              throw TypeError(
                "Argument `code` must be a non-empty string. Hide subtitles using `hideSubtitles()`."
              );
            if (!eD.test(e))
              throw TypeError(
                "Argument `code` must be a valid BCP 47 formatted language code"
              );
            this._preferredLanguage !== e.toLowerCase() &&
              ((this._preferredLanguage = e.toLowerCase()),
              this._switchActiveTextTrack());
          }
          hide() {
            (this._isVisible = !1), this._updateVisibleState();
          }
          show() {
            (this._isVisible = !0), this._updateVisibleState();
          }
          deactivateListeners() {
            !this._deactivateListeners &&
              this._player &&
              ((this._deactivateListeners = !0),
              this._unsubscribeFromCueEvents());
          }
          activateListeners() {
            this._deactivateListeners &&
              ((this._deactivateListeners = !1), this._updateTextTracks());
          }
          areListenersActivated() {
            return !this._deactivateListeners;
          }
          clear() {
            let e = this._player;
            e &&
              (this._unsubscribeFromCueEvents(),
              (this._currentVideoContent = null),
              (this._displayedCues = []),
              eL(e, "track"),
              e.removeEventListener(
                T.MEDIA_LOADEDMETADATA,
                this._onLoadedMetadata
              ),
              (e.crossOrigin = this._crossOrigin));
          }
          visible() {
            return this._isVisible;
          }
        }
        class eO extends Error {
          constructor(e = L.STORAGE_ERROR, t = "File Error") {
            super(t),
              (this.canPlayNext = !0),
              (this.debug = {}),
              (this.code = e),
              (this.message = t),
              (this.name = "FileError");
          }
        }
        class eN {
          constructor(e) {
            (this._mediaType = e.mediaType),
              (this._fileId = e.fileId),
              (this._uri = e.uri),
              (this._audioGain = e.audioGain),
              (this._logData = e.logData),
              (this._hasNonFatalErrors = !!e.hasNonFatalErrors),
              (this._disableCache = e.disableCache),
              (this._keySystem = e.keySystem),
              (this._licenseEndpoint = e.licenseEndpoint),
              (this._mediaFormat = e.mediaFormat),
              (this._mediator = e.mediator),
              (this._noAuth = e.noAuth),
              (this._contentMetadata = e.contentMetadata);
          }
          getFileId() {
            return this._fileId;
          }
          getAudioGain() {
            return this._audioGain;
          }
          getMediaType() {
            return this._mediaType;
          }
          getLogData() {
            return this._logData;
          }
          setLogData(e) {
            this._logData = e;
          }
          toLogJSON() {
            return {
              uri: this._uri,
              fileId: this._fileId,
              mediaFormat: this._mediaFormat,
              mediaURL: this._mediaURL,
            };
          }
          hasNonFatalErrors() {
            return this._hasNonFatalErrors;
          }
          getContentMetadata() {
            return this._contentMetadata || {};
          }
          getInitParams() {
            return this.isProtected()
              ? { initDataType: this._protection, initData: this._pssh }
              : null;
          }
          getKeySystem() {
            var e;
            return null !== (e = this._keySystem) && void 0 !== e ? e : null;
          }
          getLicenseEndpoint() {
            var e;
            return null !== (e = this._licenseEndpoint) && void 0 !== e
              ? e
              : null;
          }
        }
        var eM = i(34376);
        function ew(e) {
          let t = eM.D.decode(e),
            i = new Uint8Array(t.length);
          for (let e = 0, r = t.length; e < r; e++) i[e] = t.charCodeAt(e);
          return i;
        }
        let ek = /avc1\.(([0-9a-f]{2})[0-9a-f]{2}([0-9a-f]{2}))/;
        function eU(e, t) {
          let i = e.toLowerCase().match(ek),
            r = t.toLowerCase().match(ek);
          if (!i || !r) return !1;
          let [, n, a, s] = i,
            [, o, l, d] = r;
          return (
            n === o ||
            ("4d" === a && "4d" === l && parseInt(s, 16) >= parseInt(d, 16))
          );
        }
        function eF(e) {
          let {
            codec: t,
            formats: i,
            profiles: r,
            encryptionIndex: n,
            disallowProfile: a,
            preferredVideoResolution: s,
            allowMixedAVC1Codecs: o,
          } = e;
          for (let e of i) {
            let i = [],
              l = "spotify/unknown-mimeType",
              d = "unknown-codec";
            for (let s of r) {
              let r = "audio_codec" in s ? s.audio_codec : s.video_codec;
              !(
                !(t in s) ||
                (void 0 !== n &&
                  Array.isArray(s.encryption_indices) &&
                  -1 === s.encryption_indices.indexOf(n)) ||
                (a &&
                  a(
                    Object.assign(
                      { mimeType: s.mime_type },
                      "video_codec" in s
                        ? {
                            type: "video",
                            codec: s.video_codec,
                            bitrate: s.video_bitrate,
                            height: s.video_height,
                            width: s.video_width,
                            resolution: s.video_resolution,
                          }
                        : {
                            type: "audio",
                            codec: s.audio_codec,
                            bitrate: s.audio_bitrate,
                          }
                    )
                  ))
              ) &&
                ("unknown-codec" === d &&
                s.mime_type === e.mimeType &&
                (r === e.codec || eU(e.codec, r))
                  ? ((l = e.mimeType),
                    (d = o ? e.codec : r),
                    i.push(s),
                    (s.__effective_codec = e.codec))
                  : s.mime_type === l &&
                    (r === d || (o && eU(d, r))) &&
                    (i.push(s), (s.__effective_codec = d)));
            }
            if (i.length)
              return (function (e, t) {
                return e.sort((e, i) =>
                  "video_bitrate" in e && "video_bitrate" in i
                    ? t
                      ? e.video_resolution === i.video_resolution
                        ? e.video_bitrate - i.video_bitrate
                        : e.video_resolution - i.video_resolution
                      : e.video_bitrate - i.video_bitrate
                    : e.max_bitrate - i.max_bitrate
                );
              })(i, s);
          }
          return [];
        }
        function ex(e) {
          if (!e) return;
          let t =
            e.__effective_codec ||
            ("audio_codec" in e ? e.audio_codec : e.video_codec);
          return `${e.mime_type};codecs="${t}"`;
        }
        class eY extends eN {
          constructor(e) {
            super(e),
              (this._supportedFormats = { audio: [], video: [] }),
              (this._baseURL = ""),
              (this._fallbackURLs = []),
              (this._loaded = !1),
              (this._initTemplate = ""),
              (this._segmentTemplate = ""),
              (this._segmentLength = 0),
              (this._assetID = ""),
              (this._segments = []),
              (this._duration = 0),
              (this._videoProfiles = { selected: null, available: [] }),
              (this._audioProfiles = { selected: null, available: [] }),
              (this._subtitleLanguages = []),
              (this._subtitleTemplate = ""),
              (this._trackingData = null),
              (this._resolver = e.resolver),
              (this._keySystem = e.keySystem),
              (this._keySystemSettings = e.keySystemSettings),
              (this._disallowProfile = e.disallowProfile),
              (this._supportedFormats = e.supportedFormats),
              (this._videoResolution = e.videoResolution),
              (this._allowMixedAVC1Codecs = e.allowMixedAVC1Codecs),
              (this._trackingData = e.trackingData),
              (this._contentMetadata = e.metadata);
          }
          _calculateSegments(e) {
            this._duration = e.end_time_millis / 1e3;
            let t = this._segmentLength;
            this._initSegment = {
              init: !0,
              cacheBufferSet: !1,
              timeStart: -1,
              timeEnd: -1,
              byteRanges: {},
            };
            let i = [];
            for (let e = 0; e < this._duration; e += t)
              i.push({
                cacheBufferSet: !e && !this._disableCache,
                timeStart: e,
                timeEnd: e + t,
                byteRanges: {},
              });
            (i[i.length - 1].isFinal = !0), (this._segments = i);
          }
          _parseManifest(e) {
            var t, i, r;
            let n, a;
            let s = e.contents[0];
            if (!s)
              return (
                ((n = new eO(
                  L.FILE_MALFORMED_SEEKTABLE,
                  "Malformed seektable: no contents."
                )).track = this.toLogJSON()),
                Promise.reject(n)
              );
            if (
              ((this._fallbackURLs = e.base_urls.slice()),
              (this._baseURL =
                null !== (t = this._fallbackURLs.shift()) && void 0 !== t
                  ? t
                  : ""),
              (this._initTemplate = e.initialization_template),
              (this._segmentTemplate = e.segment_template),
              (this._segmentLength = s.segment_length),
              null === (i = s.encryption_infos) || void 0 === i
                ? void 0
                : i.length)
            ) {
              let e;
              let t = s.encryption_infos,
                i = this._keySystemSettings.commonName;
              for (let r = 0, n = t.length; r < n; r++) {
                let n = t[r];
                if (n && n.key_system === i) {
                  (a = r),
                    (e = n.encryption_data),
                    (this._licenseEndpoint = `@webgate${n.license_server_endpoint}`);
                  break;
                }
              }
              if (!e)
                return (
                  ((n = new eO(
                    L.FILE_FORMAT_NOT_SUPPORTED,
                    "KeySystem does not support the file format."
                  )).track = this.toLogJSON()),
                  Promise.reject(n)
                );
              switch (this._keySystemSettings.commonName) {
                case "widevine":
                case "playready":
                  this._protection = "cenc";
                  try {
                    this._pssh = ew(e);
                  } catch (e) {
                    return (
                      ((n = new eO(
                        L.FILE_MALFORMED_PSSH,
                        "Invalid PSSH value."
                      )).track = this.toLogJSON()),
                      Promise.reject(n)
                    );
                  }
                  break;
                case "fairplay":
                  (this._protection = "cbcs"), (this._pssh = new Uint8Array(0));
                  try {
                    this._assetID = s.encoding_id;
                  } catch (e) {
                    return (
                      ((n = new eO(
                        L.FILE_MALFORMED_PSSH,
                        "Invalid PSSH value."
                      )).track = this.toLogJSON()),
                      Promise.reject(n)
                    );
                  }
                  break;
                default:
                  return (
                    ((n = new eO(
                      L.FILE_FORMAT_NOT_SUPPORTED,
                      "KeySystem does not support the file format."
                    )).track = this.toLogJSON()),
                    Promise.reject(n)
                  );
              }
            }
            return (
              (this._videoProfiles.available = eF({
                codec: "video_codec",
                formats: this._supportedFormats.video,
                profiles: s.profiles,
                encryptionIndex: a,
                disallowProfile: this._disallowProfile,
                preferredVideoResolution: this._videoResolution,
                allowMixedAVC1Codecs: this._allowMixedAVC1Codecs,
              })),
              (this._audioProfiles.available = eF({
                codec: "audio_codec",
                formats: this._supportedFormats.audio,
                profiles: s.profiles,
                encryptionIndex: a,
                disallowProfile: this._disallowProfile,
              })),
              this._calculateSegments(e),
              (this._subtitleLanguages = e.subtitle_language_codes || []),
              (null === (r = e.subtitle_base_urls) || void 0 === r
                ? void 0
                : r.length) && e.subtitle_template
                ? (this._subtitleTemplate = `${e.subtitle_base_urls[0]}${e.subtitle_template}`)
                : (this._subtitleTemplate = ""),
              Promise.resolve()
            );
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            if (this._loaded)
              return (
                (e.resolveLatency = 0),
                (e.manifestLatency = 0),
                Promise.resolve(this)
              );
            if (!this._fileId)
              throw TypeError("Missing: provide either fileId or resolvedURL");
            let t = (0, j.q)();
            return this._resolver
              .getManifest(this._fileId, this._noAuth)
              .then(
                (i) => (
                  (e.resolveLatency = 0),
                  (e.manifestLatency = (0, j.n)(t)),
                  this._parseManifest(i)
                )
              )
              .then(() => ((this._loaded = !0), this));
          }
          isProtected() {
            return !!this._protection && !!this._pssh;
          }
          setVideoResolution(e) {
            this._videoResolution = e;
          }
          getMediaProfileInfo() {
            return { audio: this._audioProfiles, video: this._videoProfiles };
          }
          getSubtitles() {
            return this._subtitleLanguages.map((e) => ({
              lang: e,
              url: this._subtitleTemplate.replace("{{language_code}}", e),
            }));
          }
          getSubtitleLanguages() {
            return this._subtitleLanguages;
          }
          getCurrentBitrates() {
            var e, t, i, r;
            return {
              audio:
                null !==
                  (t =
                    null === (e = this._audioProfiles.selected) || void 0 === e
                      ? void 0
                      : e.audio_bitrate) && void 0 !== t
                  ? t
                  : 0,
              video:
                null !==
                  (r =
                    null === (i = this._videoProfiles.selected) || void 0 === i
                      ? void 0
                      : i.video_bitrate) && void 0 !== r
                  ? r
                  : 0,
            };
          }
          getTrackingEvents() {
            return this._trackingData;
          }
          getTrackingEventData(e) {
            let t = this._trackingData ? this._trackingData[e] : null;
            return t ? { tracking_event: e, urls: t.urls } : null;
          }
        }
        function eB(e) {
          return !!e && "getMediaProfileInfo" in e;
        }
        function eG(e) {
          return (
            !!e &&
            "getCurrentBitrates" in e &&
            "canLowerBitrate" in e &&
            "adaptToBandwidth" in e
          );
        }
        function eK(e) {
          return !!e && "getTrackingEventData" in e && "getTrackingEvents" in e;
        }
        class eH {
          constructor(e) {
            this.bandwidthEstimator = e.bandwidthEstimator;
          }
          static create(e) {
            return new eH(e);
          }
          getSample(e, t) {
            var i, r, n, a, s, o, l;
            let d = this.bandwidthEstimator.getBandwidthEstimate(),
              _ = (function (e, t) {
                let i = e.length;
                for (let r = 0; r < i; r++)
                  if (e.start(r) <= t && t <= e.end(r))
                    return (e.end(r) - t) * 1e3;
                return 0;
              })(e.buffered, e.currentTime);
            if ("audio" === t.getMediaType() && t.strategy === S.MSE) {
              let e =
                  null ===
                    (r =
                      null === (i = t.getSegmentForTime(0)) || void 0 === i
                        ? void 0
                        : i.bufferSet) || void 0 === r
                    ? void 0
                    : r.audio,
                n = null == e ? void 0 : e.bitrate;
              return {
                bandwidth: d,
                bufferAvailability: _,
                audio: {
                  mimeType: null == e ? void 0 : e.mimeType,
                  bitrate: n,
                },
              };
            }
            if (eB(t)) {
              let { audio: i, video: r } = t.getMediaProfileInfo(),
                u =
                  "getVideoPlaybackQuality" in e
                    ? e.getVideoPlaybackQuality()
                    : {
                        creationTime: void 0,
                        droppedVideoFrames: void 0,
                        totalVideoFrames: void 0,
                      };
              return {
                bandwidth: d,
                bufferAvailability: _,
                video: {
                  creationTime: u.creationTime,
                  droppedVideoFrames: u.droppedVideoFrames,
                  totalVideoFrames: u.totalVideoFrames,
                  bitrate:
                    null === (n = r.selected) || void 0 === n
                      ? void 0
                      : n.video_bitrate,
                  availableBitrates: r.available.map((e) => e.video_bitrate),
                  height:
                    null === (a = r.selected) || void 0 === a
                      ? void 0
                      : a.video_height,
                  width:
                    null === (s = r.selected) || void 0 === s
                      ? void 0
                      : s.video_width,
                  resolution:
                    null === (o = r.selected) || void 0 === o
                      ? void 0
                      : o.video_resolution,
                  mimeType: ex(r.selected),
                },
                audio: {
                  bitrate:
                    null === (l = i.selected) || void 0 === l
                      ? void 0
                      : l.audio_bitrate,
                  mimeType: ex(i.selected),
                },
              };
            }
            return null;
          }
        }
        let ej = B.P.forTag("playback.audio_processor");
        class eq {
          constructor(e) {
            if (
              ((this._audioContext = null),
              (this._mediaElementSource = null),
              (this._gainNode = null),
              (this._nodes = []),
              null == e ? void 0 : e.disable)
            ) {
              ej.info("AudioProcessor disabled");
              return;
            }
            if (
              ((this._audioContext =
                (null == e ? void 0 : e.audioContext) ||
                ("undefined" != typeof AudioContext
                  ? new AudioContext()
                  : null)),
              !this._audioContext)
            ) {
              ej.warn(
                "The AudioContext API is not supported. Any future operation related to `AudioProcessor` will be skipped."
              );
              return;
            }
            (this._gainNode = this._audioContext.createGain()),
              this._buildNodePipeline(null == e ? void 0 : e.nodes);
          }
          static create(e) {
            return new eq(e);
          }
          _setMediaElementSource(e) {
            var t;
            this._audioContext &&
              (this._mediaElementSource &&
                (ej.info("Disconnecting previous media element source"),
                this._mediaElementSource.disconnect()),
              ej.info("Creating new media element source"),
              (this._mediaElementSource =
                this._audioContext.createMediaElementSource(e) || null),
              this._mediaElementSource.connect(
                null !== (t = this._nodes[0]) && void 0 !== t
                  ? t
                  : this._audioContext.destination
              ));
          }
          _buildNodePipeline(e = []) {
            var t;
            if (!this._audioContext) return;
            for (let e of (ej.info("Disconnecting previous nodes"),
            this._nodes))
              e.disconnect();
            let i = [this._gainNode, ...e],
              r = null;
            for (let e of i) r && r.connect(e), (r = e);
            null === (t = i[i.length - 1]) ||
              void 0 === t ||
              t.connect(this._audioContext.destination),
              ej.info("Node pipeline built"),
              (this._nodes = i);
          }
          setPlayer(e) {
            var t;
            if (e) {
              if (
                (null === (t = this._mediaElementSource) || void 0 === t
                  ? void 0
                  : t.mediaElement) === e
              ) {
                ej.info("The new player is the same as the current player");
                return;
              }
              this._setMediaElementSource(e);
            }
          }
          getPlayer() {
            var e;
            return (
              (null === (e = this._mediaElementSource) || void 0 === e
                ? void 0
                : e.mediaElement) || null
            );
          }
          setAudioGain(e = 0) {
            if (!this._gainNode)
              return ej.info("The default gain node is not available"), !1;
            let t = Math.pow(10, e / 20);
            return (
              (this._gainNode.gain.value = t),
              ej.info("Main gain set to", t),
              !0
            );
          }
          getAudioContext() {
            return this._audioContext;
          }
          resume() {
            return this._audioContext && "running" !== this._audioContext.state
              ? this._audioContext.resume()
              : Promise.resolve();
          }
          suspend() {
            return this._audioContext &&
              "suspended" !== this._audioContext.state
              ? this._audioContext.suspend()
              : Promise.resolve();
          }
          destroy() {
            var e;
            this._audioContext &&
              (null === (e = this._mediaElementSource) ||
                void 0 === e ||
                e.connect(this._audioContext.destination)),
              (this._nodes = []),
              (this._audioContext = null),
              (this._gainNode = null),
              (this._mediaElementSource = null),
              ej.info("The AudioProcessor is destroyed");
          }
        }
        let eV = B.P.forTag("playback.media_source_manager");
        function eW(e) {
          if (!e) return "";
          let t = [];
          for (let i in e) {
            if (!e.hasOwnProperty(i)) continue;
            let r = e[i] ? `="${e[i]}"` : "";
            t.push(`${i}${r}`);
          }
          return t.length ? `; ${t.join("; ")}` : "";
        }
        class e$ extends G.vp {
          constructor(e) {
            super(),
              (this._mediaSource = null),
              (this._sourceBuffers = {}),
              (this._currentInitSegments = {}),
              (this._updateQueue = []),
              (this._playId = 0),
              (this._lastBufferClearTime = (0, j.q)()),
              (this._customSourceBufferParams = "");
            let {
              mimeTypes: t,
              customSourceBufferParams: i,
              disableBufferAbort: r,
            } = e;
            (this._mimeTypes = t),
              (this._customSourceBufferParams = eW(i)),
              (this._disableBufferAbort = !!r),
              (this._onSourceOpen = this._onSourceOpen.bind(this)),
              (this._onSourceClose = this._onSourceClose.bind(this)),
              (this._onUpdateEnd = this._onUpdateEnd.bind(this)),
              (this.dequeueUpdates = this.dequeueUpdates.bind(this)),
              e.noInit || this._init();
          }
          static create(e) {
            return new e$(e);
          }
          _init() {
            (this._mediaSource = new MediaSource()),
              this._mediaSource.addEventListener(
                T.MEDIA_SOURCE_OPEN,
                this._onSourceOpen
              ),
              this._mediaSource.addEventListener(
                T.MEDIA_SOURCE_CLOSE,
                this._onSourceClose
              ),
              (this._sourceBuffers = {}),
              (this._currentInitSegments = {});
          }
          _onSourceOpen() {
            var e;
            eV.info("MediaSource opened.");
            let t = this._mediaSource;
            if (
              (null === (e = null == t ? void 0 : t.sourceBuffers) ||
              void 0 === e
                ? void 0
                : e.length) === 0 &&
              (null == t ? void 0 : t.readyState) === "open"
            ) {
              let e = this._mimeTypes;
              for (let i of (eV.info(
                "Creating source buffers for MIME types",
                e
              ),
              ["video", "audio"])) {
                let r = e[i];
                if (r) {
                  let e = r + this._customSourceBufferParams,
                    i = t.addSourceBuffer(e);
                  i.addEventListener(
                    T.SOURCE_BUFFER_UPDATE_END,
                    this._onUpdateEnd
                  ),
                    (this._sourceBuffers[r] = i);
                }
              }
            }
            this.dequeueUpdates(), this.emit(T.BUFFER_SOURCE_OPEN, null);
          }
          _onSourceClose() {
            eV.info("MediaSource closed."),
              this._destroySourceBuffers(),
              this.emit(T.BUFFER_SOURCE_CLOSE, null);
          }
          _destroySourceBuffers() {
            let e = this._mediaSource;
            if (!e) return;
            let t = e.sourceBuffers;
            if (t.length)
              for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                if (r) {
                  r.removeEventListener(
                    T.SOURCE_BUFFER_UPDATE_END,
                    this._onUpdateEnd
                  );
                  try {
                    e.removeSourceBuffer(r), eV.info("Removed source buffer");
                  } catch (e) {
                    eV.warn("Failed to remove sourcebuffer", e);
                  }
                }
              }
            (this._sourceBuffers = {}), (this._currentInitSegments = {});
          }
          _onUpdateEnd() {
            this.dequeueUpdates(), this.emit(T.BUFFER_UPDATE_END, null);
          }
          _endUpdate(e) {
            var t;
            this._isUpdating()
              ? this._updateQueue.push(e)
              : (null === (t = this._mediaSource) || void 0 === t
                  ? void 0
                  : t.readyState) === "open" &&
                (eV.info("Signals end of stream."),
                this._mediaSource.endOfStream(),
                e.resolve && e.resolve(!0));
          }
          _durationUpdate(e) {
            this._isUpdating()
              ? this._updateQueue.push(e)
              : (this._mediaSource && (this._mediaSource.duration = e.duration),
                e.resolve && e.resolve(!0));
          }
          _isUpdating() {
            if (!this._mediaSource) return !1;
            let e = this._mediaSource.sourceBuffers;
            for (let t = 0, i = e.length; t < i; t++) {
              let i = e[t];
              if (i && i.updating) return !0;
            }
            return !1;
          }
          _appendUpdate(e) {
            var t, i;
            let r = this._sourceBuffers[e.mimeType];
            if (!r || r.updating) {
              this._updateQueue.push(e);
              return;
            }
            let n = e.buffer;
            if (
              e.segment.init &&
              this._currentInitSegments[e.mimeType] === e.profileId
            ) {
              null === (t = e.resolve) || void 0 === t || t.call(e, !0),
                Promise.resolve().then(this.dequeueUpdates);
              return;
            }
            if (
              e.initBuffer &&
              e.buffer &&
              this._currentInitSegments[e.mimeType] !== e.profileId
            ) {
              let t = new Uint8Array(
                e.initBuffer.byteLength + e.buffer.byteLength
              );
              t.set(new Uint8Array(e.initBuffer), 0),
                t.set(new Uint8Array(e.buffer), e.initBuffer.byteLength),
                (n = t.buffer);
            }
            try {
              r.appendBuffer(n);
            } catch (i) {
              let t = !1;
              "QuotaExceededError" === i.name
                ? (eV.warn("Failed to append buffer: exceeded quota."),
                  (t = !0),
                  this.emitSync(T.BUFFER_QUOTA_EXCEEDED, null))
                : eV.warn("Failed to append buffer", i),
                new Promise((e) => {
                  t ? setTimeout(e, 1e3) : e();
                })
                  .then(() => {
                    var t;
                    null === (t = e.reject) || void 0 === t || t.call(e, i),
                      this.dequeueUpdates();
                  })
                  .then(() => {
                    e.init && this._updateQueue.push(e);
                  });
              return;
            }
            let a = n.byteLength > e.buffer.byteLength;
            (e.segment.init || a) &&
              (this._currentInitSegments[e.mimeType] = e.profileId),
              null === (i = e.resolve) || void 0 === i || i.call(e, !0),
              a
                ? eV.info(
                    `Injected combined init segment and playable segment (${e.mimeType}, ${e.profileId})`
                  )
                : e.init &&
                  eV.info(
                    `Injected individual init segment (${e.mimeType}, ${e.profileId})`
                  );
          }
          _abortUpdate(e) {
            var t;
            null === (t = e.resolve) || void 0 === t || t.call(e, !1),
              Promise.resolve().then(this.dequeueUpdates);
          }
          dequeueUpdates() {
            let e = this._updateQueue.shift();
            e && this.tryUpdate(e);
          }
          tryUpdate(e) {
            if (e.playId !== this._playId) {
              eV.info("Try update dropped: playId has changed"),
                this._abortUpdate(e);
              return;
            }
            if (e.timestamp < this._lastBufferClearTime) {
              eV.info(
                "Try update dropped: update is older than the last clear"
              ),
                this._abortUpdate(e);
              return;
            }
            let t = this._mediaSource;
            t && "open" !== t.readyState && "ended" !== t.readyState
              ? this._updateQueue.push(e)
              : "end" === e.type
              ? this._endUpdate(e)
              : "duration" === e.type
              ? this._durationUpdate(e)
              : "append" === e.type && this._appendUpdate(e);
          }
          appendBufferData(e, t, i, r = (0, j.q)()) {
            let n = [];
            if (e.audio) {
              let a = (0, V.$)();
              this.tryUpdate({
                playId: i,
                timestamp: r,
                segment: t,
                type: "append",
                profileId: e.audio.profileId,
                buffer: e.audio.buffer,
                initBuffer: e.audio.initBuffer,
                mimeType: e.audio.mimeType,
                init: !!t.init,
                resolve: a.resolve,
                reject: a.reject,
              }),
                n.push(a.promise);
            }
            if (e.video) {
              let a = (0, V.$)();
              this.tryUpdate({
                playId: i,
                timestamp: r,
                segment: t,
                type: "append",
                profileId: e.video.profileId,
                buffer: e.video.buffer,
                initBuffer: e.video.initBuffer,
                mimeType: e.video.mimeType,
                init: !!t.init,
                resolve: a.resolve,
                reject: a.reject,
              }),
                n.push(a.promise);
            }
            return Promise.all(n);
          }
          endOfStream(e) {
            this._mediaSource &&
              "ended" !== this._mediaSource.readyState &&
              this.tryUpdate({ playId: e, timestamp: (0, j.q)(), type: "end" });
          }
          abort(e = !1) {
            if (
              ((this._lastBufferClearTime = (0, j.q)()),
              this._disableBufferAbort)
            ) {
              eV.info("MediaSource abort skipped; action disabled.");
              return;
            }
            let t = this._mediaSource;
            if (t) {
              let i = t.sourceBuffers;
              for (let r = 0, n = i.length; r < n; r++) {
                let n = i[r];
                if ("open" === t.readyState && n)
                  try {
                    n.abort();
                    let t = n.buffered;
                    if (e && t.length) {
                      let e = t.start(0),
                        i = t.end(t.length - 1);
                      n.remove(e, i), eV.info("Cleared buffer range", e, i);
                    }
                  } catch (e) {
                    eV.warn("MediaSourceManager.clear failed.", e);
                  }
              }
            }
            this._currentInitSegments = {};
          }
          destroy() {
            let e = this._mediaSource;
            e &&
              (eV.info("Source destroyed"),
              e.removeEventListener("sourceopen", this._onSourceOpen),
              e.removeEventListener("sourceclose", this._onSourceClose),
              this._destroySourceBuffers(),
              (this._mediaSource = null));
          }
          recreate(e) {
            this.abort(),
              this.destroy(),
              (this._mimeTypes = e.mimeTypes),
              e.customSourceBufferParams &&
                (this._customSourceBufferParams = eW(
                  e.customSourceBufferParams
                )),
              this._init();
          }
          setDuration(e) {
            return new Promise((t) => {
              this.tryUpdate({
                playId: this._playId,
                timestamp: (0, j.q)(),
                type: "duration",
                duration: e,
                resolve: t,
              });
            });
          }
          getMediaSource() {
            return this._mediaSource;
          }
          setPlayId(e) {
            this._playId = e;
          }
          getPlayId() {
            return this._playId;
          }
        }
        let eQ = B.P.forTag("playback.buffer_fill_operation");
        class eJ {
          constructor(e) {
            var t;
            (this._batchSize = 1),
              (this._prioritizeFirst = !1),
              (this._segmentsToAppend = []),
              (this._abortController = (0, K.OL)()),
              (this.status = "pending"),
              (this.timeStart = e.timeStart),
              (this.timeEnd = e.timeEnd),
              (this.done = new Promise((e) => {
                this._resolveDone = e;
              })),
              (this._getBufferedTimeRanges = e.getBufferedTimeRanges),
              (this._getBufferSetForSegment = e.getBufferSetForSegment),
              (this._getSegmentsForRange = e.getSegmentsForRange),
              (this._appendBufferData = e.appendBufferData),
              (this._batchSize =
                null !== (t = e.batchSize) && void 0 !== t ? t : 1),
              (this._prioritizeFirst = !!e.prioritizeFirst);
          }
          _filterBufferedSegments(e) {
            let t = this._getBufferedTimeRanges(),
              i = [];
            if (null == t ? void 0 : t.length)
              e: for (let r of e) {
                let e = t.length;
                for (; e--; ) {
                  let i = t.start(e),
                    n = t.end(e);
                  if (
                    i <= r.timeStart &&
                    (n >= r.timeEnd || n + 1e-5 > r.timeEnd)
                  )
                    continue e;
                }
                i.push(r);
              }
            else i = e;
            return i;
          }
          _fill(e, t = !1) {
            var i;
            if (e.aborted) return;
            let r = this._segmentsToAppend,
              n = r.length,
              a = r.splice(0, t ? 1 : Math.max(1, this._batchSize));
            if (!a.length) {
              (this.status = "ended"),
                null === (i = this._resolveDone) ||
                  void 0 === i ||
                  i.call(this);
              return;
            }
            eQ.log(`Segments to download: ${a.length}/${n}`);
            let s = (0, j.q)();
            Promise.all(
              a.map((t) =>
                this._getBufferSetForSegment(t, e).then((i) =>
                  e.aborted
                    ? Promise.resolve([!1])
                    : this._appendBufferData(i, t, s)
                )
              )
            ).then(
              (t) => {
                var i, r;
                if (!e.aborted) {
                  if (-1 !== [].concat(...t).indexOf(!1)) {
                    (this.status = "failed"),
                      null === (i = this._resolveDone) ||
                        void 0 === i ||
                        i.call(this),
                      eQ.warn(
                        `Fill operation ${this.timeStart}-${this.timeEnd} append failed.`
                      ),
                      this._clear();
                    return;
                  }
                  if (this._segmentsToAppend.length) {
                    this._fill(e);
                    return;
                  }
                  (this.status = "ended"),
                    null === (r = this._resolveDone) ||
                      void 0 === r ||
                      r.call(this),
                    this._clear();
                }
              },
              (e) => {
                var t;
                if (e.code === K.JP.HTTP_REQUEST_ABORTED) {
                  this.status = "aborted";
                  return;
                }
                (this.status = "failed"),
                  null === (t = this._resolveDone) ||
                    void 0 === t ||
                    t.call(this),
                  this._clear(),
                  eQ.warn(
                    `Fill operation ${this.timeStart}-${this.timeEnd} failed.`,
                    "QuotaExceededError" === e.name
                      ? "Exceeded buffer quota"
                      : e
                  );
              }
            );
          }
          _clear() {
            this._segmentsToAppend = [];
          }
          start() {
            var e;
            if (
              this._abortController.signal.aborted ||
              "pending" !== this.status
            )
              return this.done;
            (this.status = "started"),
              eQ.log(
                "Starting fill operation for range",
                this.timeStart,
                this.timeEnd
              );
            let t = this._getSegmentsForRange(this.timeStart, this.timeEnd);
            return (
              ((this._segmentsToAppend = this._filterBufferedSegments(t)),
              this._segmentsToAppend.length)
                ? this._fill(
                    this._abortController.signal,
                    this._prioritizeFirst
                  )
                : (eQ.warn(
                    "Fill operation ended early: all segments are buffered."
                  ),
                  (this.status = "ended"),
                  null === (e = this._resolveDone) ||
                    void 0 === e ||
                    e.call(this)),
              this.done
            );
          }
          abort() {
            var e;
            return (
              "aborted" === this.status ||
                ("started" === this.status &&
                  eQ.info(
                    `Fill operation ${this.timeStart}-${this.timeEnd} aborted.`
                  ),
                (this.status = "aborted"),
                null === (e = this._resolveDone) ||
                  void 0 === e ||
                  e.call(this),
                this._abortController.abort(),
                this._clear()),
              this
            );
          }
        }
        ((u = D || (D = {}))[(u.AUDIO = 12)] = "AUDIO"),
          (u[(u.VIDEO = 20)] = "VIDEO");
        class ez extends G.vp {
          constructor(e, t = {}, i = {}) {
            var r, n;
            super(),
              (this._bufferTarget = { audio: D.AUDIO, video: D.VIDEO }),
              (this._currentFillOperation = null),
              (this._tracker = e);
            let {
              customSourceBufferParams: a,
              noInit: s,
              disableBufferAbort: o,
            } = i;
            (this._bufferTarget.audio =
              (null === (r = i.bufferTarget) || void 0 === r
                ? void 0
                : r.audio) || D.AUDIO),
              (this._bufferTarget.video =
                (null === (n = i.bufferTarget) || void 0 === n
                  ? void 0
                  : n.video) || D.VIDEO),
              (this._mediaSourceManager = e$.create({
                mimeTypes: t,
                noInit: s,
                customSourceBufferParams: a,
                disableBufferAbort: o,
              })),
              this.proxyEmitAll(this._mediaSourceManager, {
                [T.BUFFER_SOURCE_OPEN]: T.BUFFER_SOURCE_OPEN,
                [T.BUFFER_SOURCE_CLOSE]: T.BUFFER_SOURCE_CLOSE,
                [T.BUFFER_QUOTA_EXCEEDED]: T.BUFFER_QUOTA_EXCEEDED,
                [T.BUFFER_UPDATE_END]: T.BUFFER_UPDATE_END,
              });
          }
          static create(e, t = {}, i = {}) {
            return new ez(e, t, i);
          }
          _trackBufferingProgress(e) {
            e.audio &&
              e.audio.buffer &&
              this._tracker.trackBytesDownloaded(e.audio.buffer.byteLength),
              e.video &&
                e.video.buffer &&
                this._tracker.trackBytesDownloaded(e.video.buffer.byteLength);
          }
          _trackBufferURLs(e) {
            var t, i, r, n, a, s;
            (null === (t = e.audio) || void 0 === t ? void 0 : t.bandwidth) !==
              null &&
              this._tracker.trackBufferURL(
                (null === (i = e.audio) || void 0 === i
                  ? void 0
                  : i.bufferURL) || "",
                {
                  bandwidth:
                    (null === (r = e.audio) || void 0 === r
                      ? void 0
                      : r.bandwidth) || 0,
                }
              ),
              (null === (n = e.video) || void 0 === n
                ? void 0
                : n.bandwidth) !== null &&
                this._tracker.trackBufferURL(
                  (null === (a = e.video) || void 0 === a
                    ? void 0
                    : a.bufferURL) || "",
                  {
                    bandwidth:
                      (null === (s = e.video) || void 0 === s
                        ? void 0
                        : s.bandwidth) || 0,
                  }
                );
          }
          dequeueUpdates() {
            this._mediaSourceManager.dequeueUpdates();
          }
          abort(e = !1) {
            var t;
            null === (t = this._currentFillOperation) ||
              void 0 === t ||
              t.abort(),
              (this._currentFillOperation = null),
              this._mediaSourceManager.abort(e);
          }
          getMediaSource() {
            return this._mediaSourceManager.getMediaSource();
          }
          destroy() {
            this._mediaSourceManager.destroy();
          }
          checkBufferHealth(e, t, i) {
            var r;
            let n = this._currentFillOperation;
            if (!i && (null == n ? void 0 : n.status) === "started") return;
            let a = this._mediaSourceManager,
              s = a.getMediaSource();
            if (!s || "closed" === s.readyState) return;
            let o = t;
            if (o >= s.duration) {
              let t = e.getFinalSegment();
              t && (o = t.timeStart);
            }
            let l = (function (e, t) {
              var i;
              let r =
                null === (i = e.sourceBuffers[e.sourceBuffers.length - 1]) ||
                void 0 === i
                  ? void 0
                  : i.buffered;
              if (r)
                for (let e = 0; e < r.length; e++) {
                  let i = r.start(e),
                    n = r.end(e);
                  if (i <= t && t <= n) return { start: i, end: n };
                }
              return null;
            })(s, o);
            if (l && !e.getSegmentAfterTime(l.end) && "ended" === s.readyState)
              return;
            let d =
                "video" === e.getMediaType()
                  ? this._bufferTarget.video
                  : this._bufferTarget.audio,
              _ =
                null !== (r = null == l ? void 0 : l.end) && void 0 !== r
                  ? r
                  : o,
              u = _ - o;
            if (u > d) return;
            let h = _ + (d - u);
            if (
              !n ||
              "started" !== n.status ||
              n.timeStart < _ ||
              n.timeEnd > h
            ) {
              null == n || n.abort();
              let t = a.getPlayId();
              (this._currentFillOperation = new eJ({
                timeStart: _,
                timeEnd: h,
                getBufferedTimeRanges: () => {
                  var e, t;
                  return null !==
                    (t =
                      null ===
                        (e = s.sourceBuffers[s.sourceBuffers.length - 1]) ||
                      void 0 === e
                        ? void 0
                        : e.buffered) && void 0 !== t
                    ? t
                    : null;
                },
                getBufferSetForSegment: (i, r) =>
                  e.getBufferSetForSegment(i, r).then(
                    (e) => (
                      this._trackBufferingProgress(e),
                      this._trackBufferURLs(e),
                      e
                    ),
                    (i) => (
                      t === a.getPlayId() &&
                        i.code !== K.JP.HTTP_REQUEST_ABORTED &&
                        this.emit(T.BUFFER_APPEND_ERROR, {
                          error: i,
                          canPlayNext: !0,
                          track: e.toLogJSON(),
                        }),
                      Promise.reject(i)
                    )
                  ),
                getSegmentsForRange: (t, i = 1 / 0) =>
                  e.getSegmentsForRange(t, i),
                appendBufferData: (e, i, r) =>
                  a
                    .appendBufferData(e, i, t, r)
                    .then(
                      (e) => (
                        i.isFinal &&
                          (null == e ? void 0 : e.indexOf(!1)) === -1 &&
                          this._mediaSourceManager.endOfStream(t),
                        e
                      )
                    ),
                prioritizeFirst: !l,
              })),
                this._currentFillOperation.start();
            }
          }
          isPositionInCurrentFillRange(e, t) {
            let i = this._currentFillOperation;
            if ((null == i ? void 0 : i.status) !== "started") return !1;
            let r =
              "video" === e.getMediaType()
                ? this._bufferTarget.video
                : this._bufferTarget.audio;
            return i.timeStart >= t || i.timeEnd >= t + r;
          }
          recreate(e) {
            this._mediaSourceManager.recreate({ mimeTypes: e });
          }
          injectInitSegment(e) {
            let t = this._mediaSourceManager,
              i = t.getMediaSource();
            if (!i || "closed" === i.readyState) return Promise.resolve(!1);
            let r = e.getInitSegment();
            if (!r) return Promise.resolve(!1);
            let n = (0, j.q)(),
              a = t.getPlayId();
            return e
              .getInitBufferSet()
              .then((e) => t.appendBufferData(e, r, a, n))
              .then(() => !0);
          }
          setDuration(e) {
            return this._mediaSourceManager.setDuration(e);
          }
          setPlayId(e) {
            this._mediaSourceManager.setPlayId(e);
          }
          getBufferTarget() {
            return this._bufferTarget;
          }
        }
        class eX extends eN {
          constructor(e) {
            super(e),
              (this.strategy = S.URL),
              (this._url = e.url),
              (this._mimeType = e.mimeType);
          }
          load() {
            if (this._mimeType) {
              var e, t;
              if (
                ((e = this._mimeType),
                (t = this.getMediaType()),
                "" === document.createElement(t).canPlayType(e))
              )
                throw new eO(
                  L.FILE_FORMAT_NOT_SUPPORTED,
                  "Content is not playable."
                );
            }
            return Promise.resolve(this);
          }
          unload() {}
          isProtected() {
            return !1;
          }
          getMediaTypeMimeTypes() {
            var e, t;
            return "video" === this._mediaType
              ? {
                  video:
                    null !== (e = this._mimeType) && void 0 !== e
                      ? e
                      : "video/mp4",
                }
              : {
                  audio:
                    null !== (t = this._mimeType) && void 0 !== t
                      ? t
                      : "audio/mp3",
                };
          }
          getURL() {
            return this._url;
          }
          getLoadingApproach() {
            return { approach: "src" };
          }
        }
        ((h = C || (C = {}))[(h.MP3_256 = 3)] = "MP3_256"),
          (h[(h.MP3_320 = 4)] = "MP3_320"),
          (h[(h.MP3_160 = 5)] = "MP3_160"),
          (h[(h.MP3_96 = 6)] = "MP3_96"),
          (h[(h.MP4_128 = 10)] = "MP4_128"),
          (h[(h.MP4_256 = 11)] = "MP4_256"),
          (h[(h.MP4_128_DUAL = 12)] = "MP4_128_DUAL"),
          (h[(h.MP4_256_DUAL = 13)] = "MP4_256_DUAL"),
          (h[(h.MP4_128_CBCS = 14)] = "MP4_128_CBCS"),
          (h[(h.MP4_256_CBCS = 15)] = "MP4_256_CBCS"),
          (h[(h.MP4_FLAC = 17)] = "MP4_FLAC");
        let eZ = {
          [C.MP3_256]: "audio/mp3",
          [C.MP3_320]: "audio/mp3",
          [C.MP3_160]: "audio/mp3",
          [C.MP3_96]: "audio/mp3",
          [C.MP4_128]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_256]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_128_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_256_DUAL]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_128_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_256_CBCS]: 'audio/mp4; codecs="mp4a.40.2"',
          [C.MP4_FLAC]: 'audio/mp4; codecs="flac"',
        };
        class e0 extends eN {
          constructor(e) {
            if (
              (super(e),
              (this._loaded = !1),
              (this._lastResolveToken = 0),
              (this._fallbackURLs = []),
              (this._contentSegments = []),
              (this._duration = 0),
              (this._segmentLength = 0),
              (this._protection = "cenc"),
              (this._fileId = e.fileId),
              (this._resolver = e.resolver),
              (this._keySystem = e.keySystem),
              (this._keySystemSettings = ec[this._keySystem]),
              (this._fileFormat = e.fileFormat),
              (this._disableCache = e.disableCache),
              (this._preloadedManifest = e.preloadedManifest),
              (this._preresolvedURL = e.preresolvedURL),
              this._fileFormat)
            )
              this._mimeType = eZ[this._fileFormat];
            else
              switch (this._mediaFormat) {
                case b.MP3:
                  this._mimeType = eZ[C.MP3_160];
                  break;
                case b.MP4:
                case b.MP4_DUAL:
                case b.MP4_CBCS:
                  this._mimeType = eZ[C.MP4_128];
                  break;
                default:
                  throw TypeError(`Unknown audio format ${this._mediaFormat}`);
              }
          }
          _getCDNURLs(e) {
            if (this._preresolvedURL)
              return (
                (this._currentURL = this._preresolvedURL),
                (this._fallbackURLs = []),
                e && (e.resolveLatency = 0),
                Promise.resolve(!0)
              );
            let t = this._fileId;
            clearTimeout(this._lastResolveToken);
            let i = () => (
                (this._lastResolveTime = (0, j.q)()),
                this._resolver
                  .getCDNURL(t, this._fileFormat)
                  .then(
                    (t) => (
                      e &&
                        this._lastResolveTime &&
                        (e.resolveLatency = (0, j.n)(this._lastResolveTime)),
                      t
                    )
                  )
              ),
              r = this._lastResolveTime
                ? (0, j.n)(this._lastResolveTime)
                : 1 / 0;
            return (
              r < 1001
                ? new Promise((e, t) => {
                    this._lastResolveToken = setTimeout(() => {
                      i().then(e, t);
                    }, 1001 - r);
                  })
                : i()
            )
              .then(
                (e) => (
                  (this._fallbackURLs = e.uris),
                  (this._currentURL = this._fallbackURLs.shift()),
                  !0
                )
              )
              .catch(
                (e) => (e && (e.track = this.toLogJSON()), Promise.reject(e))
              );
          }
          _getManifest(e) {
            if (this._preloadedManifest)
              return (
                e && (e.manifestLatency = 0),
                Promise.resolve(this._preloadedManifest)
              );
            let t = (0, j.q)();
            return this._resolver
              .getManifest(this._fileId)
              .then((i) => (e && (e.manifestLatency = (0, j.n)(t)), i));
          }
          _calculateSegments(e) {
            let t = e.offset;
            this._initSegment = {
              init: !0,
              cacheBufferSet: !this._disableCache,
              timeStart: 0,
              timeEnd: 0,
              byteRanges: { audio: { start: 0, end: t - 1 } },
            };
            let i = e.segments,
              r = e.timescale,
              n = i.length,
              a = Array(n),
              s = 0,
              o = 0;
            for (let e = 0; e < n; e++) {
              let n = i[e];
              if (!(null == n ? void 0 : n.length)) continue;
              let [l, d] = n,
                _ = d / r,
                u = {
                  init: !1,
                  cacheBufferSet: !e && !this._disableCache,
                  timeStart: s,
                  timeEnd: s + _,
                  byteRanges: { audio: { start: t, end: t + (l - 1) } },
                };
              (a[e] = u),
                (t += l),
                (o += d),
                (s += _),
                Math.floor(_) > this._segmentLength &&
                  (this._segmentLength = Math.floor(_));
            }
            (a[a.length - 1].isFinal = !0),
              (this._contentSegments = a),
              (this._duration = o / r);
          }
          _calculateSegmentsV1(e) {
            let t = e.offset;
            this._initSegment = {
              init: !0,
              cacheBufferSet: !this._disableCache,
              timeStart: 0,
              timeEnd: 0,
              byteRanges: { audio: { start: 0, end: t - 1 } },
            };
            let i = e.references,
              r = e.timescale,
              n = i.length,
              a = Array(n),
              s = 0,
              o = 0;
            for (let e = 0; e < n; e++) {
              let n = i[e];
              if (!n) continue;
              let l = n.duration / r,
                d = {
                  init: !1,
                  cacheBufferSet: !e && !this._disableCache,
                  timeStart: o,
                  timeEnd: o + l,
                  byteRanges: { audio: { start: t, end: t + (n.size - 1) } },
                };
              (a[e] = d),
                (t += n.size),
                (s += n.duration),
                (o += l),
                Math.floor(l) > this._segmentLength &&
                  (this._segmentLength = Math.floor(l));
            }
            (a[a.length - 1].isFinal = !0),
              (this._contentSegments = a),
              (this._duration = s / r);
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            return this._loaded
              ? ((e.resolveLatency = 0),
                (e.manifestLatency = 0),
                Promise.resolve(this))
              : Promise.all([this._getCDNURLs(e), this._getManifest(e)]).then(
                  ([e, t]) => {
                    var i;
                    let r;
                    if (((this._loaded = !0), !e || !t)) return this;
                    if (this._keySystem === A.INVALID_SPOTIFY_KEY)
                      return (this._pssh = new Uint8Array(0)), this;
                    let n = this._keySystemSettings.pssh_field.audio,
                      a = t.hasOwnProperty(n) ? t[n] : null;
                    if (
                      (!a &&
                        "pssh_widevine" === n &&
                        "pssh" in t &&
                        (a = null !== (i = t.pssh) && void 0 !== i ? i : null),
                      !a)
                    )
                      return (
                        ((r = new eO(
                          L.FILE_FORMAT_NOT_SUPPORTED,
                          "KeySystem does not support the file format."
                        )).track = this.toLogJSON()),
                        Promise.reject(r)
                      );
                    if (
                      ((this._protection = t.protection || "cenc"),
                      (this._pssh = ew(a)),
                      "segments" in t && t.segments)
                    )
                      this._calculateSegments(t);
                    else {
                      if (!("references" in t) || !t.references)
                        return (
                          ((r = new eO(
                            L.FILE_MALFORMED_SEEKTABLE,
                            "Malformed seektable."
                          )).track = this.toLogJSON()),
                          Promise.reject(r)
                        );
                      this._calculateSegmentsV1(t);
                    }
                    return this;
                  }
                );
          }
          isProtected() {
            return !!this._protection && !!this._pssh;
          }
          getMediaTypeMimeTypes() {
            return { audio: this._mimeType };
          }
        }
        let e1 = "application/vnd.apple.mpegurl";
        function e4(e) {
          var t;
          let i = e.segments
              .map((e) => {
                if (e.byteEnd && void 0 !== e.byteStart) {
                  let t = `${1 + e.byteEnd - e.byteStart}`;
                  return (
                    (t += `@${e.byteStart}`),
                    `#EXTINF:${e.duration},
#EXT-X-BYTERANGE:${t}
${e.url}`
                  );
                }
                return `#EXTINF:${e.duration},
${e.url}`;
              })
              .join("\n"),
            r = e.assetID
              ? `#EXT-X-KEY:METHOD=SAMPLE-AES,URI="skd://${e.assetID}",KEYFORMATVERSIONS="1",KEYFORMAT="com.apple.streamingkeydelivery"`
              : "",
            n = e.map ? `#EXT-X-MAP:URI="${e.map.url}"` : "";
          return (
            (null === (t = e.map) || void 0 === t ? void 0 : t.byteEnd) &&
              void 0 !== e.map.byteStart &&
              (n += `,BYTERANGE="${1 + e.map.byteEnd}@${e.map.byteStart}"`),
            `#EXTM3U
#EXT-X-VERSION:6
#EXT-X-TARGETDURATION:${Math.floor(e.targetDuration)}
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-PLAYLIST-TYPE:VOD
${
  n
    ? `${r}
${n}`
    : r
}
${i}
#EXT-X-ENDLIST`
          );
        }
        function e2(e) {
          return `data:application/vnd.apple.mpegurl;base64,${btoa(e)}`;
        }
        function e3(e) {
          let t = new Blob([e], { type: e1 });
          return URL.createObjectURL(t);
        }
        function e6(e) {
          return e3(e4(e));
        }
        function e8(e) {
          return e2(e4(e));
        }
        class e5 extends e0 {
          constructor() {
            super(...arguments), (this._hlsURL = null), (this.strategy = S.URL);
          }
          unload() {
            this._hlsURL && URL.revokeObjectURL(this._hlsURL),
              (this._hlsURL = null);
          }
          getURL() {
            var e, t;
            let i = this._currentURL,
              r = this._initSegment;
            if (!i || !r)
              throw new eO(
                L.FILE_NOT_RESOLVED,
                "Cannot return HLS Manifest URL: File not resolved."
              );
            this.unload();
            let n = {
                url: i,
                byteStart:
                  null === (e = r.byteRanges.audio) || void 0 === e
                    ? void 0
                    : e.start,
                byteEnd:
                  null === (t = r.byteRanges.audio) || void 0 === t
                    ? void 0
                    : t.end,
              },
              a = this._contentSegments.map((e) => {
                var t, r;
                return {
                  url: i,
                  duration: e.timeEnd - e.timeStart,
                  byteStart:
                    null === (t = e.byteRanges.audio) || void 0 === t
                      ? void 0
                      : t.start,
                  byteEnd:
                    null === (r = e.byteRanges.audio) || void 0 === r
                      ? void 0
                      : r.end,
                };
              }),
              s = "undefined" == typeof MediaSource ? e6 : e8;
            return (
              (this._hlsURL = s({
                assetID: this._fileId,
                targetDuration: 10,
                map: n,
                segments: a,
              })),
              this._hlsURL
            );
          }
          getLoadingApproach() {
            return { approach: "source", type: e1 };
          }
        }
        class e9 extends Error {
          constructor(e, t, i, r = {}) {
            super(t),
              (this.code = e),
              (this.message = t),
              (this.status = i),
              (this.debug = r),
              (this.name = "FragmentError");
          }
        }
        class e7 extends e0 {
          constructor(e) {
            super(e),
              (this._profileId = `${Date.now()}`),
              (this._lastFetchedBuffer = null),
              (this.strategy = S.MSE),
              (this._transport = e.transport),
              (this._abrManager = e.abrManager),
              (this._parseSegmentResponse =
                this._parseSegmentResponse.bind(this));
          }
          _parseSegmentResponse(e, t) {
            let {
                requestURL: i,
                segment: r,
                byteRangeHeader: n,
                expectedLength: a,
              } = e.metadata,
              s = `${r.timeStart}-${r.timeEnd}`;
            switch (e.status) {
              case 0: {
                if (e.offline)
                  return Promise.reject(
                    new e9(
                      L.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO,
                      "Request failed with status 0.",
                      0,
                      { time_range: s, byte_range: n }
                    )
                  );
                let a = new e9(
                    L.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO,
                    "Request failed with status 0.",
                    0
                  ),
                  o = !1;
                if (
                  (this._currentURL !== i
                    ? (o = !0)
                    : this._fallbackURLs.length &&
                      this._currentURL === i &&
                      ((o = !0),
                      (this._currentURL = this._fallbackURLs.shift())),
                  (a.debug.has_fallback = o),
                  o)
                )
                  return this.getBufferSetForSegment(r, t);
                return Promise.reject(a);
              }
              case 200:
              case 206: {
                let t = e.body;
                if (!t)
                  return Promise.reject(
                    new e9(
                      L.FRAGMENT_REQUEST_EMPTY_RESPONSE,
                      "Empty response for successful buffer.",
                      e.status,
                      { time_range: s, byte_range: n }
                    )
                  );
                if (t.byteLength !== a)
                  return Promise.reject(
                    new e9(
                      L.FRAGMENT_REQUEST_UNEXPECTED_LENGTH,
                      "Received buffer of unexpected length.",
                      e.status,
                      {
                        time_range: s,
                        byte_range: n,
                        received_length: t.byteLength,
                        expected_length: a,
                      }
                    )
                  );
                let o = {
                  audio: {
                    profileId: this._profileId,
                    bufferURL: i,
                    byteStart: r.byteRanges.audio.start,
                    byteEnd: r.byteRanges.audio.end,
                    buffer: t,
                    mimeType: this._mimeType,
                    bandwidth: (8e3 * t.byteLength) / e.timing.completed,
                  },
                };
                return (
                  r.cacheBufferSet && t && t.byteLength && (r.bufferSet = o),
                  this._abrManager.sample(t.byteLength, e.timing.completed),
                  Promise.resolve(o)
                );
              }
              case 403:
                return this._getCDNURLs().then(() =>
                  this.getBufferSetForSegment(r, t)
                );
              default: {
                let a = !1;
                return (
                  this._currentURL !== i
                    ? (a = !0)
                    : this._fallbackURLs.length &&
                      this._currentURL === i &&
                      ((a = !0),
                      (this._currentURL = this._fallbackURLs.shift())),
                  a
                    ? this.getBufferSetForSegment(r, t)
                    : Promise.reject(
                        new e9(
                          L.FRAGMENT_REQUEST_FAILED_WITH_STATUS,
                          `Buffer request failed with status ${e.status}`,
                          e.status,
                          { time_range: s, byte_range: n }
                        )
                      )
                );
              }
            }
          }
          unload() {
            (this._lastFetchedBuffer = null),
              this._disableCache &&
                (this._initSegment && (this._initSegment.bufferSet = null),
                this._contentSegments[0] &&
                  (this._contentSegments[0].bufferSet = null));
          }
          getCalculatedDuration() {
            return this._duration;
          }
          getSegmentLength() {
            return this._segmentLength;
          }
          getInitSegment() {
            return this._initSegment;
          }
          getSegmentForTime(e) {
            var t, i;
            if (
              !(null === (t = this._contentSegments) || void 0 === t
                ? void 0
                : t.length)
            )
              return null;
            if (0 === e || 0.01 === e)
              return null !== (i = this._contentSegments[0]) && void 0 !== i
                ? i
                : null;
            for (let t of this._contentSegments)
              if (t.timeStart <= e && t.timeEnd >= e) return t;
            return null;
          }
          getSegmentAfterTime(e) {
            var t, i;
            if (
              !(null === (t = this._contentSegments) || void 0 === t
                ? void 0
                : t.length)
            )
              return null;
            if (0 === e || 0.01 === e)
              return null !== (i = this._contentSegments[1]) && void 0 !== i
                ? i
                : null;
            for (let t of this._contentSegments) if (t.timeStart > e) return t;
            return null;
          }
          getSegmentsForRange(e, t = 1 / 0) {
            var i;
            let r = [];
            if (
              null === (i = this._contentSegments) || void 0 === i
                ? void 0
                : i.length
            )
              for (let i of this._contentSegments)
                i.timeStart <= t && i.timeEnd >= e && r.push(i);
            return r;
          }
          getFinalSegment() {
            var e, t;
            return null !==
              (t =
                null === (e = this._contentSegments) || void 0 === e
                  ? void 0
                  : e[this._contentSegments.length - 1]) && void 0 !== t
              ? t
              : null;
          }
          getInitBufferSet(e) {
            var t, i;
            if (!this._initSegment)
              throw new eO(
                L.FILE_NOT_RESOLVED,
                "Cannot return the init bufferset: file not resolved."
              );
            return (
              null ===
                (i =
                  null === (t = this._initSegment.bufferSet) || void 0 === t
                    ? void 0
                    : t.audio) || void 0 === i
                ? void 0
                : i.buffer.byteLength
            )
              ? Promise.resolve(this._initSegment.bufferSet)
              : (this._initBufferPromise ||
                  (this._initBufferPromise = this.getBufferSetForSegment(
                    this._initSegment,
                    e
                  ).then((e) => {
                    var t;
                    if (
                      !(null === (t = e.audio) || void 0 === t
                        ? void 0
                        : t.buffer.byteLength)
                    )
                      throw Error("Empty initialization segment buffer");
                    return e;
                  })),
                this._initBufferPromise);
          }
          getBufferSetForSegment(e, t) {
            var i;
            if (
              (null === (i = this._lastFetchedBuffer) || void 0 === i
                ? void 0
                : i.segment) === e
            )
              return Promise.resolve(this._lastFetchedBuffer.bufferSet);
            if (e.bufferSet) return Promise.resolve(e.bufferSet);
            if (!this._currentURL)
              return Promise.reject(
                new eO(
                  L.FILE_NOT_RESOLVED,
                  "Cannot fetch buffer: No resolved URL"
                )
              );
            let r = e.byteRanges.audio,
              n = `${r.start}-${r.end}`,
              a = r.end + 1 - r.start,
              s = this._currentURL;
            return (e.init ? Promise.resolve(null) : this.getInitBufferSet(t))
              .then((i) =>
                Promise.all([
                  i,
                  this._transport
                    .request(s, {
                      method: "GET",
                      responseType: "arraybuffer",
                      headers: { Range: `bytes=${n}` },
                      signal: t,
                      timing: !0,
                      metadata: {
                        requestURL: s,
                        segment: e,
                        byteRangeHeader: n,
                        expectedLength: a,
                      },
                      retry: {
                        condition: (e, t) => {
                          if (0 === e.status) return e.offline;
                          let i = e.getStatusFamily();
                          return (
                            429 === e.status ||
                            i === t.CONNECTION_ERROR ||
                            i === t.SERVER_ERROR ||
                            (i === t.SUCCESS &&
                              !!e.body &&
                              e.body.byteLength !== a)
                          );
                        },
                      },
                    })
                    .then((e) => this._parseSegmentResponse(e, t)),
                ])
              )
              .then(([t, i]) => {
                var r;
                return (
                  (null === (r = null == t ? void 0 : t.audio) || void 0 === r
                    ? void 0
                    : r.buffer) &&
                    i.audio &&
                    (i.audio.initBuffer = t.audio.buffer),
                  (this._lastFetchedBuffer = { segment: e, bufferSet: i }),
                  i
                );
              });
          }
        }
        class te extends eY {
          constructor(e) {
            super(e),
              (this._hlsURLs = []),
              (this.strategy = S.URL),
              this._keySystem === A.FAIRPLAY &&
                (this._supportedFormats.audio.push({
                  mimeType: "audio/mp2t",
                  codec: "mp4a.40.2",
                }),
                this._supportedFormats.video.push({
                  mimeType: "video/mp2t",
                  codec: "avc1.4d402a",
                }));
          }
          _getHLSURLForProfile(e, t) {
            let i = this._duration,
              r = this._segmentLength,
              n = this._segmentTemplate,
              a = [];
            for (let t = 0; t < i; t += r) {
              let s = t + r > i ? i - t : r,
                o = n
                  .replace("{{profile_id}}", e.id.toString(10))
                  .replace("{{segment_timestamp}}", t.toString(10))
                  .replace("{{file_type}}", e.file_type);
              a.push({ duration: s, url: `${this._baseURL}${o}` });
            }
            let s = ("undefined" == typeof MediaSource ? e6 : e8)({
              assetID: this._assetID,
              targetDuration: r,
              map: t ? { url: t } : void 0,
              segments: a,
            });
            return this._hlsURLs.push(s), s;
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            return super.load(e).then(() => {
              var e, t;
              return (
                (this._audioProfiles.selected =
                  null !== (e = this._audioProfiles.available[0]) &&
                  void 0 !== e
                    ? e
                    : null),
                (this._videoProfiles.selected =
                  null !== (t = this._videoProfiles.available[0]) &&
                  void 0 !== t
                    ? t
                    : null),
                this
              );
            });
          }
          getURL() {
            var e, t;
            if (!this._baseURL)
              throw new eO(
                L.FILE_NOT_RESOLVED,
                "Cannot return HLS Manifest URL: File not resolved."
              );
            this.unload();
            let i = [],
              r = this._audioProfiles.available[0];
            if (r) {
              let e =
                "ts" !== r.file_type
                  ? this._resolver.getInitSegmentURLs(
                      this._baseURL,
                      this._initTemplate,
                      r,
                      void 0
                    ).audio
                  : "";
              i.push(
                `#EXT-X-MEDIA:TYPE=AUDIO,GROUP-ID="audio",LANGUAGE="eng",NAME="English",AUTOSELECT=YES,URI="${this._getHLSURLForProfile(
                  r,
                  e
                )}"`
              );
            }
            for (let n of this._videoProfiles.available) {
              let a =
                  (null !== (e = null == r ? void 0 : r.max_bitrate) &&
                  void 0 !== e
                    ? e
                    : 0) + n.max_bitrate,
                s =
                  (null !== (t = null == r ? void 0 : r.audio_bitrate) &&
                  void 0 !== t
                    ? t
                    : 0) + n.video_bitrate,
                o =
                  "ts" !== n.file_type
                    ? this._resolver.getInitSegmentURLs(
                        this._baseURL,
                        this._initTemplate,
                        void 0,
                        n
                      ).video
                    : "";
              i.push(`#EXT-X-STREAM-INF:BANDWIDTH=${a},AVERAGE-BANDWIDTH=${s},RESOLUTION=${
                n.video_width
              }x${n.video_height},CODECS="${
                (null == r ? void 0 : r.audio_codec)
                  ? `${r.audio_codec}, ${n.video_codec}`
                  : n.video_codec
              }"${(null == r ? void 0 : r.audio_codec) ? ',AUDIO="audio"' : ""}
${this._getHLSURLForProfile(n, o)}`);
            }
            let n = ("undefined" == typeof MediaSource ? e3 : e2)(`#EXTM3U
${i.join("\n")}`);
            return this._hlsURLs.push(n), n;
          }
          unload() {
            for (let e of this._hlsURLs) URL.revokeObjectURL(e);
            this._hlsURLs = [];
          }
          getMediaTypeMimeTypes() {
            var e, t;
            return {
              audio: ex(
                null === (e = this._audioProfiles.available) || void 0 === e
                  ? void 0
                  : e[0]
              ),
              video: ex(
                null === (t = this._videoProfiles.available) || void 0 === t
                  ? void 0
                  : t[0]
              ),
            };
          }
          getLoadingApproach() {
            return { approach: "source", type: e1 };
          }
          adaptToBandwidth() {
            return Promise.resolve(!1);
          }
          canLowerBitrate() {
            return !1;
          }
        }
        class tt extends eY {
          constructor(e) {
            super(e),
              (this._initSegmentBuffers = {}),
              (this.strategy = S.MSE),
              (this._transport = e.transport),
              (this._abrManager = e.abrManager),
              (this._parseSegmentResponse =
                this._parseSegmentResponse.bind(this));
          }
          _isQualityMatched(e, t, i) {
            var r, n, a, s;
            if (this._videoResolution) {
              let t =
                  null !== (r = this._videoResolution.max) && void 0 !== r
                    ? r
                    : 9007199254740991,
                s =
                  null !== (n = this._videoResolution.min) && void 0 !== n
                    ? n
                    : 0;
              if (i) {
                let i =
                  null !== (a = this._videoResolution.start) && void 0 !== a
                    ? a
                    : t;
                return e.video_resolution <= i;
              }
              return e.video_resolution >= s && e.video_resolution <= t;
            }
            let o =
                null !== (s = null == t ? void 0 : t.audio_bitrate) &&
                void 0 !== s
                  ? s
                  : 0,
              l = this._abrManager.getBandwidthEstimate();
            return e.video_bitrate + o < l - 1e5;
          }
          _updateVariants(e) {
            var t;
            let i = this._audioProfiles.available[0];
            this._audioProfiles.selected = null != i ? i : null;
            let r = this._videoProfiles,
              n = r.selected,
              a = null,
              s = r.available,
              o = s.length;
            if (o) {
              for (; o--; ) {
                let t = s[o];
                if (t && this._isQualityMatched(t, i, !!e)) {
                  a = t;
                  break;
                }
              }
              a || (a = s[0]),
                (this._videoProfiles.selected = a),
                (null == n ? void 0 : n.id) !== a.id &&
                  (null === (t = this._mediator) ||
                    void 0 === t ||
                    t.emit(R.VIDEO_PROFILE_CHANGED, {
                      profile: {
                        type: "video",
                        mimeType: a.mime_type,
                        codec: a.video_codec,
                        bitrate: a.video_bitrate,
                        height: a.video_height,
                        width: a.video_width,
                        resolution: a.video_resolution,
                      },
                    }));
            }
          }
          _constructSegmentURL(e, t, i) {
            if (!t && !i)
              throw Error("Both audioProfile and videoProfile is null");
            return e.init
              ? this._resolver.getInitSegmentURLs(
                  this._baseURL,
                  this._initTemplate,
                  t,
                  i
                )
              : this._resolver.getSegmentURLs(
                  this._baseURL,
                  this._segmentTemplate,
                  e.timeStart,
                  t,
                  i
                );
          }
          _parseSegmentResponse(e) {
            var t, i, r, n;
            let {
                segment: a,
                profile: s,
                timeStart: o,
                loggingURL: l,
              } = e.metadata,
              d = ex(s),
              _ = s
                ? "audio_bitrate" in s
                  ? s.audio_bitrate
                  : s.video_bitrate
                : 0,
              u = "video_resolution" in s ? s.video_resolution : void 0,
              h = `${a.timeStart}-${a.timeEnd}`,
              c = "video_resolution" in s ? "video" : "audio";
            switch (e.status) {
              case 0: {
                let e = new e9(
                  L.FRAGMENT_REQUEST_FAILED_WITH_ZERO,
                  "Request failed with status 0.",
                  0,
                  { time_range: h, mimeType: d, resolution: u, bitrate: _ }
                );
                return (
                  null === (t = this._mediator) ||
                    void 0 === t ||
                    t.emit(R.FRAGMENT_FETCH_ERROR, {
                      media_type: "video",
                      segment_type: c,
                      url: l,
                      start_time: o,
                      init: a.init,
                      error: e,
                    }),
                  Promise.reject(e)
                );
              }
              case 200:
              case 206: {
                let t = e.body;
                if (!(null == t ? void 0 : t.byteLength)) {
                  let t = new e9(
                    L.FRAGMENT_REQUEST_EMPTY_RESPONSE,
                    "Empty response for successful buffer.",
                    e.status,
                    { time_range: h, mimeType: d, resolution: u, bitrate: _ }
                  );
                  return (
                    null === (i = this._mediator) ||
                      void 0 === i ||
                      i.emit(R.FRAGMENT_FETCH_ERROR, {
                        media_type: "video",
                        segment_type: c,
                        url: l,
                        start_time: o,
                        init: a.init,
                        error: t,
                      }),
                    Promise.reject(t)
                  );
                }
                let n = t.byteLength,
                  p = (8e3 * n) / e.timing.completed;
                return (
                  null === (r = this._mediator) ||
                    void 0 === r ||
                    r.emit(R.FRAGMENT_FETCHED, {
                      media_type: "video",
                      segment_type: c,
                      url: l,
                      init: a.init,
                      byte_length: n,
                      start_time: o,
                      end_time: Date.now(),
                      resolution: u,
                      bandwidth: p,
                    }),
                  Promise.resolve({
                    profileId: `${this._fileId}-${s.id}`,
                    bufferURL: l,
                    byteStart: 0,
                    byteEnd: n - 1,
                    buffer: t,
                    mimeType: d,
                    resolution: u,
                    bitrate: _,
                    bandwidth: p,
                  })
                );
              }
            }
            let p = new e9(
              L.FRAGMENT_REQUEST_FAILED_WITH_STATUS,
              `Buffer request failed with status ${e.status}`,
              e.status,
              { time_range: h, mimeType: d, resolution: u, bitrate: _ }
            );
            return (
              null === (n = this._mediator) ||
                void 0 === n ||
                n.emit(R.FRAGMENT_FETCH_ERROR, {
                  media_type: "video",
                  segment_type: c,
                  url: l,
                  init: a.init,
                  start_time: o,
                  error: p,
                }),
              Promise.reject(p)
            );
          }
          _fetchBufferData(e, t, i, r, n) {
            return this._transport
              .request(e, {
                method: "GET",
                responseType: "arraybuffer",
                timing: !0,
                signal: n,
                retry: {
                  condition: (e, t) => {
                    if (0 === e.status) return !0;
                    let i = e.getStatusFamily();
                    return (
                      429 === e.status ||
                      i === t.CONNECTION_ERROR ||
                      i === t.SERVER_ERROR
                    );
                  },
                },
                metadata: {
                  timeStart: Date.now(),
                  segment: t,
                  profile: i,
                  loggingURL: r,
                },
              })
              .then(this._parseSegmentResponse);
          }
          _fetchInitSegmentBuffers(e, t, i) {
            let r;
            let n = this._initSegment;
            if (!n)
              return Promise.reject(
                new eO(
                  L.FILE_NOT_RESOLVED,
                  "Cannot fetch Init Segment buffers: File not resolved."
                )
              );
            try {
              r = this._constructSegmentURL(n, e, t);
            } catch (e) {
              return Promise.reject(e);
            }
            let a = this._initSegmentBuffers,
              s = 0,
              o = 0,
              l = (0, j.q)(),
              d = (e) => {
                (o += e),
                  --s ||
                    (this._abrManager.sample(o, (0, j.n)(l)),
                    this._updateVariants());
              },
              _ = Promise.resolve(null);
            if (e) {
              let t = a[e.id];
              (null == t ? void 0 : t.buffer.byteLength)
                ? (_ = Promise.resolve(t))
                : (null == r ? void 0 : r.audio) &&
                  (s++,
                  (_ = this._fetchBufferData(
                    r.audio,
                    n,
                    e,
                    r.audioLogging,
                    i
                  ).then((t) => ((a[e.id] = t), d(t.buffer.byteLength), t))));
            }
            let u = Promise.resolve(null);
            if (t) {
              let e = a[t.id];
              (null == e ? void 0 : e.buffer.byteLength)
                ? (u = Promise.resolve(e))
                : (null == r ? void 0 : r.video) &&
                  (s++,
                  (u = this._fetchBufferData(
                    r.video,
                    n,
                    t,
                    r.videoLogging,
                    i
                  ).then((e) => ((a[t.id] = e), d(e.buffer.byteLength), e))));
            }
            return Promise.all([_, u]).then(([e, t]) => ({
              audio: e,
              video: t,
            }));
          }
          _fetchBufferSetForSegment(e, t, i, r) {
            let n;
            try {
              n = this._constructSegmentURL(e, t, i);
            } catch (e) {
              return Promise.reject(e);
            }
            return this._fetchInitSegmentBuffers(t, i, r)
              .then((a) => {
                let s = 0,
                  o = 0,
                  l = (0, j.q)(),
                  d = (e) => {
                    (o += e),
                      --s ||
                        (this._abrManager.sample(o, (0, j.n)(l)),
                        this._updateVariants());
                  },
                  _ = null;
                !e.init &&
                  (null == n ? void 0 : n.audio) &&
                  (s++,
                  (_ = this._fetchBufferData(
                    n.audio,
                    e,
                    t,
                    n.audioLogging,
                    r
                  ).then((e) => (d(e.buffer.byteLength), e))));
                let u = null;
                return (
                  !e.init &&
                    (null == n ? void 0 : n.video) &&
                    (s++,
                    (u = this._fetchBufferData(
                      n.video,
                      e,
                      i,
                      n.videoLogging,
                      r
                    ).then((e) => (d(e.buffer.byteLength), e)))),
                  Promise.all([a, _, u])
                );
              })
              .then(([t, i, r]) => {
                var n, a;
                let s;
                return (
                  e.init
                    ? (s = {
                        audio:
                          null !== (n = t.audio) && void 0 !== n ? n : void 0,
                        video:
                          null !== (a = t.video) && void 0 !== a ? a : void 0,
                      })
                    : ((s = {
                        audio: null != i ? i : void 0,
                        video: null != r ? r : void 0,
                      }),
                      e.cacheBufferSet && (e.bufferSet = s),
                      s.audio &&
                        (null == t ? void 0 : t.audio) &&
                        (s.audio.initBuffer = t.audio.buffer),
                      s.video &&
                        (null == t ? void 0 : t.video) &&
                        (s.video.initBuffer = t.video.buffer)),
                  s
                );
              })
              .catch((e) => Promise.reject(e));
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            return super.load(e).then(() => (this._updateVariants(!0), this));
          }
          adaptToBandwidth() {
            return this._updateVariants(), Promise.resolve(!0);
          }
          canLowerBitrate() {
            var e;
            let t = this._videoProfiles.available[0];
            return (
              (null === (e = this._videoProfiles.selected) || void 0 === e
                ? void 0
                : e.id) !== (null == t ? void 0 : t.id)
            );
          }
          getMediaTypeMimeTypes() {
            return {
              audio: ex(this._audioProfiles.selected),
              video: ex(this._videoProfiles.selected),
            };
          }
          unload() {
            this._initSegment && (this._initSegmentBuffers = {}),
              this._segments.forEach((e) => {
                e.bufferSet = null;
              });
          }
          getCalculatedDuration() {
            return this._duration;
          }
          getSegmentLength() {
            return this._segmentLength;
          }
          getInitSegment() {
            return this._initSegment;
          }
          getInitBufferSet() {
            var e, t;
            let i =
                null !== (e = this._audioProfiles.selected) && void 0 !== e
                  ? e
                  : void 0,
              r =
                null !== (t = this._videoProfiles.selected) && void 0 !== t
                  ? t
                  : void 0;
            return this._fetchInitSegmentBuffers(i, r).then((e) => {
              var t, i;
              return {
                audio: null !== (t = e.audio) && void 0 !== t ? t : void 0,
                video: null !== (i = e.video) && void 0 !== i ? i : void 0,
              };
            });
          }
          getSegmentForTime(e) {
            var t;
            if (
              !(null === (t = this._segments) || void 0 === t
                ? void 0
                : t.length)
            )
              return null;
            if (0 === e || 0.01 === e) return this._segments[0];
            for (let t of this._segments)
              if (t.timeStart <= e && t.timeEnd >= e) return t;
            return null;
          }
          getSegmentAfterTime(e) {
            var t;
            if (
              !(null === (t = this._segments) || void 0 === t
                ? void 0
                : t.length)
            )
              return null;
            if (0 === e || 0.01 === e) return this._segments[1];
            for (let t of this._segments) if (t.timeStart > e) return t;
            return null;
          }
          getSegmentsForRange(e, t) {
            var i;
            let r = [];
            if (
              null === (i = this._segments) || void 0 === i ? void 0 : i.length
            )
              for (let i of this._segments)
                i.timeStart <= t && i.timeEnd >= e && r.push(i);
            return r;
          }
          getFinalSegment() {
            var e, t;
            return null !==
              (t =
                null === (e = this._segments) || void 0 === e
                  ? void 0
                  : e[this._segments.length - 1]) && void 0 !== t
              ? t
              : null;
          }
          getBufferSetForSegment(e, t) {
            var i, r;
            if (!e) return Promise.reject(TypeError("No segment provided"));
            let n = this._audioProfiles.selected,
              a = this._videoProfiles.selected,
              s =
                null ===
                  (r =
                    null === (i = e.bufferSet) || void 0 === i
                      ? void 0
                      : i.video) || void 0 === r
                  ? void 0
                  : r.resolution;
            return e.bufferSet && (!a || (s && s >= a.video_resolution))
              ? Promise.resolve(e.bufferSet)
              : this._fetchBufferSetForSegment(
                  e,
                  null != n ? n : void 0,
                  null != a ? a : void 0,
                  t
                );
          }
        }
        class ti extends eN {
          constructor(e) {
            super(e),
              (this._url = ""),
              (this.strategy = S.URL),
              (this._fileId = e.fileId),
              (this._resolver = e.resolver);
          }
          _getCDNURLs(e) {
            let t = this._fileId,
              i = (0, j.q)();
            return this._resolver
              .getCDNURL(t)
              .then((t) => (e && (e.resolveLatency = (0, j.n)(i)), t));
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            return this._getCDNURLs(e).then((e) => ((this._url = e.uri), this));
          }
          unload() {}
          isProtected() {
            return !1;
          }
          getMediaTypeMimeTypes() {
            return { audio: "audio/mp3" };
          }
          getURL() {
            return this._url;
          }
          getLoadingApproach() {
            return { approach: "source", type: "audio/mp3" };
          }
        }
        class tr extends Error {
          constructor(e, t) {
            super(),
              (this.status = -1),
              (this.debug = {}),
              (this.canPlayNext = !0),
              (this.unrecoverable = !1),
              (this.name = "AdManifestError"),
              (this.code = e),
              (this.message = t);
          }
          static fatal(e, t) {
            let i = new tr(e, t);
            return (i.unrecoverable = !1), (i.canPlayNext = !0), i;
          }
        }
        let tn = (e) => {
          let t = {};
          for (let i in e) e.hasOwnProperty(i) && (t[i] = { urls: e[i] });
          return t;
        };
        class ta extends eN {
          constructor(e) {
            super(e),
              (this._loaded = !1),
              (this._playableContentSorted = []),
              (this._mimeType = ""),
              (this._manifestURL = ""),
              (this._adURL = ""),
              (this._product = ""),
              (this._audioFiles = []),
              (this._videoFiles = []),
              (this._trackingData = null),
              (this.strategy = S.URL),
              (this._abrManager = e.abrManager),
              (this._transport = e.transport),
              (this._manifestURL = e.manifestURL),
              (this._preloadedManifest = e.preloadedManifest),
              (this._hasNonFatalErrors = !1),
              (this._getManifest = this._getManifest.bind(this)),
              (this._parseManifest = this._parseManifest.bind(this)),
              (this._getPlayableContent = this._getPlayableContent.bind(this));
          }
          _isPlayable(e, t) {
            return "" !== document.createElement(t).canPlayType(e);
          }
          _parseManifest(e) {
            if (!(null == e ? void 0 : e.manifest))
              throw new tr(
                L.STORAGE_TRACK_MANIFEST_EMPTY,
                "Received empty manifest."
              );
            let { manifest: t } = e;
            (this._videoFiles = t.video_files),
              (this._audioFiles = t.audio_files),
              (this._contentMetadata = t.metadata),
              (this._videoManifestId = t.video_manifest_id),
              (this._product = t.product),
              (this._trackingData = tn(t.tracking_events));
          }
          _getManifest(e) {
            if (this._preloadedManifest)
              return (
                e && (e.manifestLatency = 0),
                Promise.resolve(this._preloadedManifest)
              );
            let t = (0, j.q)(),
              i = this._manifestURL;
            return this._transport
              .request(i, {
                responseType: "json",
                authorize: !0,
                retry: {
                  condition: (e, t) => {
                    let i = e.getStatusFamily();
                    return (
                      429 === e.status ||
                      i === t.SERVER_ERROR ||
                      i === t.CONNECTION_ERROR
                    );
                  },
                },
              })
              .then((r) => {
                if (200 !== r.status) {
                  let e = new tr(
                    L.AD_MANIFEST_REQUEST_FAILED_WITH_STATUS,
                    `Ad manifest request failed with status code ${r.status}`
                  );
                  return (
                    (e.debug.manifestURL = i),
                    (e.status = r.status),
                    Promise.reject(e)
                  );
                }
                if (!r.body) {
                  let e = new tr(
                    L.AD_MANIFEST_INVALID,
                    "Received empty manifest."
                  );
                  return (
                    (e.debug.manifestURL = i),
                    (e.status = r.status),
                    Promise.reject(e)
                  );
                }
                return (
                  e && (e.manifestLatency = (0, j.n)(t)),
                  Promise.resolve(r.body)
                );
              });
          }
          _getPlayableContent() {
            let e = "video" === this._product;
            if (e && this._videoManifestId) return;
            let t = e ? this._videoFiles : this._audioFiles;
            if (!t.length)
              throw new eO(
                L.FILE_NOT_RESOLVED,
                `Manifest's ${
                  e ? "video_files" : "audio_files"
                } array is empty.`
              );
            let i = t.filter((e) =>
              this._isPlayable(e.type, this.getMediaType())
            );
            if (!i.length)
              throw new eO(
                L.FILE_FORMAT_NOT_SUPPORTED,
                "No playable content found."
              );
            this._playableContentSorted = i.sort(
              (e, t) => t.bitrate - e.bitrate
            );
          }
          load(e = { resolveLatency: 0, manifestLatency: 0 }) {
            return this._loaded
              ? ((e.resolveLatency = 0),
                (e.manifestLatency = 0),
                Promise.resolve(this))
              : this._getManifest(e)
                  .then(this._parseManifest)
                  .then(this._getPlayableContent)
                  .then(() => ((this._loaded = !0), Promise.resolve(this)));
          }
          unload() {
            this._adURL = "";
          }
          isProtected() {
            return !1;
          }
          getMediaTypeMimeTypes() {
            return { [this._mediaType]: this._mimeType };
          }
          getURL() {
            if ("" !== this._adURL) return this._adURL;
            let e = this._abrManager.getBandwidthEstimate(),
              t =
                this._playableContentSorted[
                  this._playableContentSorted.length - 1
                ];
            for (let i of this._playableContentSorted)
              if (i.bitrate <= e) {
                t = i;
                break;
              }
            return (
              t && ((this._adURL = t.url), (this._mimeType = t.type)),
              this._adURL
            );
          }
          getLoadingApproach() {
            return { approach: "src" };
          }
          getManifestId() {
            return this._videoManifestId;
          }
          getTrackingEvents() {
            if (!this._trackingData)
              throw new eO(
                L.FILE_NOT_RESOLVED,
                "Cannot return Tracking Events: File not resolved."
              );
            return this._trackingData;
          }
          getTrackingEventData(e) {
            let t = this._trackingData ? this._trackingData[e] : null;
            return t ? { tracking_event: e, urls: t.urls } : null;
          }
        }
        function ts(e, t) {
          var i;
          return {
            mediaType: e.mediaType,
            logData: e.logData,
            audioGain: e.audioGain,
            uri: e.uri,
            fileId: e.fileId,
            mediaFormat: e.format,
            hasNonFatalErrors:
              null !== (i = e.hasNonFatalErrors) && void 0 !== i ? i : e.isAd,
            disableCache: t.disableCache,
            keySystem: t.keySystem,
            licenseEndpoint: e.licenseEndpoint,
            mediator: t.mediator,
            noAuth: e.noAuth,
            mimeType: e.mimeType,
          };
        }
        function to(e, t, i) {
          if (!e.fileId)
            return Promise.reject(
              new q(L.INVALID_TRACK, `Invalid ${e.format} Track: No fileId.`)
            );
          let r = Object.assign(Object.assign({}, ts(e, t)), {
            transport: t.transport,
            abrManager: t.abrManager,
            supportedFormats: t.supportedFormats,
            fileId: e.fileId,
            keySystemSettings: ec[t.keySystem],
            resolver: t.videoResolver,
            disallowProfile: t.disallowProfile,
            allowMixedAVC1Codecs: t.allowMixedAVC1Codecs,
            trackingData: (null == i ? void 0 : i.trackingData) || null,
            metadata: null == i ? void 0 : i.metadata,
          });
          return t.keySystem === A.FAIRPLAY
            ? new te(r).load(t.measures)
            : new tt(r).load(t.measures);
        }
        let tl = B.P.forTag("playback.player"),
          td = /^blob:/,
          t_ = {
            [b.MP4]: !0,
            [b.MP4_DUAL]: !0,
            [b.MP4_CBCS]: !0,
            [b.MP4_FLAC]: !0,
            [b.MP3]: !1,
            [b.MANIFEST_ID]: !0,
            [b.AD_MANIFEST]: !0,
            [b.GENERIC_MEDIA]: !0,
          },
          tu = {
            start: T.REPORTING_START,
            creative_view: T.REPORTING_CREATIVE_VIEW,
            first_quartile: T.REPORTING_FIRST_QUARTILE,
            midpoint: T.REPORTING_MIDPOINT,
            third_quartile: T.REPORTING_THIRD_QUARTILE,
            complete: T.REPORTING_COMPLETE,
            pause: T.REPORTING_PAUSE,
            resume: T.REPORTING_RESUME,
            error: T.REPORTING_ERROR,
          },
          th = { audio: 2, video: 2 };
        function tc(e) {
          return Math.ceil(1e3 * e);
        }
        function tp(e) {
          return document.createElement(e);
        }
        class tf extends G.vp {
          constructor(e) {
            var t, i, r, n, a;
            super(),
              (this._cubicVolume = !1),
              (this._player = null),
              (this._emeManager = null),
              (this._mediator = new G.vp()),
              (this._currentContent = null),
              (this._upcomingContent = null),
              (this._preloadingTracks = {}),
              (this._playId = 0),
              (this._abortController = null),
              (this._loaded = !1),
              (this._licenseRequested = !1),
              (this._playerActivated = !1),
              (this._pauseToken = 0),
              (this._syntheticEndedToken = 0),
              (this._activeMimeTypes = {}),
              (this._playerVolume = 1),
              (this._muted = !1),
              (this._playerSpeed = 1),
              (this._fatalOnNextError = !1),
              (this._canPreloadEmitted = !1),
              (this._lastTimeUpdatePostion = 0),
              (this._rebuffering = !1),
              (this._preferredBitrate = 0),
              (this._disableLicensePrefetch = !1),
              (this._allowMixedAVC1Codecs = !0),
              (this._disableBufferingBeforeLicense = !1),
              (this._rebufferTarget = th),
              (this._audioResolver = e.audioResolver),
              (this._clearBufferOnSeek = !!e.clearBufferOnSeek),
              (this._createPlayer = e.createPlayer || tp),
              (this._cubicVolume = e.cubicVolume),
              (this._disableCache = !!e.disableCache),
              (this._licenseURLResolver = e.licenseURLResolver),
              (this._newBufferPerTrack = !!e.newBufferPerTrack),
              (this._newElementPerTrack = !!e.newElementPerTrack),
              (this._newMediaKeysPerTrack = e.newMediaKeysPerTrack),
              (this._rebufferOnQuotaExceeded = !!e.rebufferOnQuotaExceeded),
              (this._disableLicensePrefetch = !!e.disableLicensePrefetch),
              (this._synthesizeEnded = !!e.synthesizeEnded),
              (this._tracker = e.tracker),
              (this._transport = e.transport),
              (this._videoPlayerContainer = e.videoPlayerContainer),
              (this._audioPlayerContainer = e.audioPlayerContainer),
              (this._playerContainerManager = e.playerContainerManager || {
                inject: this._defaultPlayerContainerInjector.bind(this),
                eject: this._defaultPlayerContainerEjector.bind(this),
              }),
              (this._allowMixedAVC1Codecs =
                null === (t = e.allowMixedAVC1Codecs) || void 0 === t || t),
              (this._videoResolver = e.videoResolver),
              (this._abrManager = e.abrManager),
              (this._initialBandwidthSampler = e.initialBandwidthSampler),
              (this._emeManager = e.disallowProtectedTracks
                ? null
                : e.emeManager || null),
              (this._disallowProfile = e.disallowProfile),
              (this._disableBufferingBeforeLicense =
                !!e.disableBufferingBeforeLicense),
              (this._cache = new H.z(e.trackCacheSize || 2)),
              (this._subtitleManager = new eC({
                language: e.preferredSubtitleLanguage || navigator.language,
                player: this._player,
              })),
              (this._videoResolution = e.videoResolution),
              tl.info("Setting Player track cache to:", e.trackCacheSize || 2),
              (this._bufferManager = ez.create(this._tracker, void 0, {
                disableBufferAbort: !!e.disableBufferAbort,
                reinjectInitsOnAbort: !!e.reinjectInitsOnAbort,
                noInit: !0,
                customSourceBufferParams: e.customSourceBufferParams,
                bufferTarget: e.bufferTarget,
              })),
              (this._statistics = eH.create({
                bandwidthEstimator: this._abrManager,
              })),
              (this._newKeySystemAccessPerTrack = e.newKeySystemAccessPerTrack),
              (this._loadingTimeout = e.loadingTimeout);
            let s = this._bufferManager.getBufferTarget();
            (this._rebufferTarget = {
              audio: Math.min(
                null !==
                  (r =
                    null === (i = e.rebufferTarget) || void 0 === i
                      ? void 0
                      : i.audio) && void 0 !== r
                  ? r
                  : th.audio,
                s.audio
              ),
              video: Math.min(
                null !==
                  (a =
                    null === (n = e.rebufferTarget) || void 0 === n
                      ? void 0
                      : n.video) && void 0 !== a
                  ? a
                  : th.video,
                s.video
              ),
            }),
              (this._audioProcessor = eq.create(e.audioProcessorOptions)),
              (this._preloadThreshold = e.preloadThreshold || 10),
              (this._onCanPlay = this._onCanPlay.bind(this)),
              (this._onCanPlayThrough = this._onCanPlayThrough.bind(this)),
              (this._onTimeUpdate = this._onTimeUpdate.bind(this)),
              (this._onDurationChange = this._onDurationChange.bind(this)),
              (this._onPlay = this._onPlay.bind(this)),
              (this._onPlaying = this._onPlaying.bind(this)),
              (this._onPause = this._onPause.bind(this)),
              (this._onSeeking = this._onSeeking.bind(this)),
              (this._onEncrypted = this._onEncrypted.bind(this)),
              (this._onEnded = this._onEnded.bind(this)),
              (this._onError = this._onError.bind(this)),
              (this._onRequiresDuration = this._onRequiresDuration.bind(this)),
              (this._onQuotaExceeded = this._onQuotaExceeded.bind(this)),
              (this._onLoadedMetadata = this._onLoadedMetadata.bind(this)),
              (this._onWaiting = this._onWaiting.bind(this)),
              (this._onFragmentFetched = this._onFragmentFetched.bind(this)),
              (this._onProfileChanged = this._onProfileChanged.bind(this)),
              (this._onPlayedThresholdReached =
                this._onPlayedThresholdReached.bind(this)),
              (this._onSyntheticEnded = this._onSyntheticEnded.bind(this)),
              (this._onLicenseRequestCapped =
                this._onLicenseRequestCapped.bind(this)),
              (this._onLicenseRequestError =
                this._onLicenseRequestError.bind(this)),
              (this._onNavigatorOffline = this._onNavigatorOffline.bind(this)),
              (this._onBufferError = this._onBufferError.bind(this)),
              (this._onBufferUpdateEnd = this._onBufferUpdateEnd.bind(this)),
              (this._emitWarning = this._emitWarning.bind(this)),
              (this._handleLoadingComplete =
                this._handleLoadingComplete.bind(this)),
              (this._onRateChange = this._onRateChange.bind(this)),
              (this._onVideoResize = this._onVideoResize.bind(this)),
              (this._setAudioGain = this._setAudioGain.bind(this)),
              this._init(),
              (this._getCacheKey = this._getCacheKey.bind(this));
          }
          static create(e) {
            let t = Object.assign({}, e);
            return e.disallowProtectedTracks
              ? tf.createWithOptions(t)
              : eS
                  .create({
                    transport: e.transport,
                    disallowRobustnessValues: e.disallowRobustnessValues,
                    disallowCodecs: e.disallowCodecs,
                    noServerCertificate: e.noServerCertificate,
                    precacheServerCertificate: e.precacheServerCertificate,
                    unauthServerCertificateBase: e.unauthServerCertificateBase,
                    preferredKeySystems: e.preferredKeySystems,
                  })
                  .then((e) => {
                    t.emeManager = e;
                    let i = new tf(t);
                    return t.preinitMediaElement ? i._preinitMediaElement() : i;
                  })
                  .catch((i) => {
                    if (e.enableWithoutEME) return tf.createWithOptions(t);
                    throw i;
                  });
          }
          static createWithOptions(e) {
            return new Promise((t) => {
              let i = new tf(e);
              t(e.preinitMediaElement ? i._preinitMediaElement() : i);
            });
          }
          _init() {
            this._disableCache && tl.info("Cache disabled."),
              this._transport.on(
                this._transport.EVENT_CONNECTION_OFFLINE,
                this._onNavigatorOffline
              ),
              this.proxyEmitAllSync(this._tracker, {
                [T.TRACKER_TRACKING_DATA_CREATED]:
                  T.PLAYER_TRACKING_DATA_CREATED,
                [T.TRACKER_TRACKING_DATA_FINALIZED]:
                  T.PLAYER_TRACKING_DATA_FINALIZED,
                [T.TRACKER_PLAYBACK_START]: T.PLAYER_PLAYBACK_START,
              }),
              this._tracker.on(
                T.TRACKER_PLAYED_THRESHOLD_REACHED,
                this._onPlayedThresholdReached
              ),
              this._emeManager &&
                this._emeManager.addListeners({
                  [T.EME_LICENSE_REQUEST_CAPPED]: this._onLicenseRequestCapped,
                  [T.EME_LICENSE_REQUEST_ERROR]: this._onLicenseRequestError,
                }),
              this._bufferManager.addListeners({
                [T.BUFFER_APPEND_ERROR]: this._onBufferError,
                [T.BUFFER_QUOTA_EXCEEDED]: this._onQuotaExceeded,
                [T.BUFFER_UPDATE_END]: this._onBufferUpdateEnd,
              }),
              this._mediator.addListeners({
                [R.FRAGMENT_FETCHED]: this._onFragmentFetched,
                [R.VIDEO_PROFILE_CHANGED]: this._onProfileChanged,
              }),
              this.proxyEmitAll(this._mediator, {
                [R.FRAGMENT_FETCH_ERROR]: T.PLAYER_FRAGMENT_FETCH_ERROR,
              }),
              this.proxyEmitSync(
                this._subtitleManager,
                T.PLAYER_DISPLAYED_CUES_CHANGED,
                T.PLAYER_DISPLAYED_CUES_CHANGED
              ),
              this.proxyEmit(
                this._subtitleManager,
                T.PLAYER_SUBTITLE_LANGUAGES_LOADED,
                T.PLAYER_SUBTITLE_LANGUAGES_LOADED
              ),
              this.proxyEmitAll(this._videoResolver, {
                [T.VIDEO_MANIFEST_RESOLVED]: T.PLAYER_VIDEO_MANIFEST_RESOLVED,
                [T.VIDEO_MANIFEST_RESOLVE_FAILED]:
                  T.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED,
              }),
              this._tracker.addListeners({
                [T.TRACKER_FIRST_QUARTILE]: () =>
                  this._emitReporting("first_quartile"),
                [T.TRACKER_MIDPOINT]: () => this._emitReporting("midpoint"),
                [T.TRACKER_THIRD_QUARTILE]: () =>
                  this._emitReporting("third_quartile"),
              }),
              this.addListeners({
                [T.PLAYER_PLAYBACK_START]: () => {
                  this._emitReporting("start"),
                    this._emitReporting("creative_view");
                },
                [T.PLAYER_ENDED]: () => this._emitReporting("complete"),
                [T.PLAYER_ERROR]: () => this._emitReporting("error"),
              }),
              this._initialBandwidthSampler.sample().catch(() => {});
          }
          _onRateChange() {
            if (!this._player) return;
            let e = this._player.playbackRate;
            0 !== e && this._tracker.trackSpeedChanged(e),
              this.emit(T.PLAYER_PLAYBACK_SPEED_CHANGED, {
                playback_speed: e,
                playback_speed_selected: this._playerSpeed,
                rebuffering: this._rebuffering,
              });
          }
          _onLicenseRequestError(e) {
            if (e.data.signal.aborted) return;
            let t = this._currentContent;
            if (!t) return;
            let i = e.data.error,
              r = t.getKeySystem();
            i.shouldRefreshEndpoint &&
              r &&
              this._licenseURLResolver.remove(r, t.getMediaType()),
              this._emitError(i, !i.unrecoverable, t.toLogJSON());
          }
          _onFragmentFetched(e) {
            let { data: t } = e;
            this._tracker.trackFragment(t),
              this.emit(T.PLAYER_FRAGMENT_FETCHED, t);
          }
          _onProfileChanged(e) {
            let { data: t } = e;
            this._tracker.trackProfileChanged(t.profile),
              this.emit(T.PLAYER_VIDEO_PROFILE_CHANGED, t);
          }
          _defaultPlayerContainerInjector(e, t) {
            let i = this._getContainerElement(
              "video" === t
                ? this._videoPlayerContainer
                : this._audioPlayerContainer
            );
            i &&
              e.parentNode !== i &&
              (i.appendChild(e),
              "video" === t &&
                this.emit(T.PLAYER_VIDEO_ELEMENT_APPENDED, null));
          }
          _defaultPlayerContainerEjector(e, t, i) {
            let r = this._getContainerElement(
              "video" === t
                ? this._videoPlayerContainer
                : this._audioPlayerContainer
            );
            r &&
              e.parentNode === r &&
              (this._newElementPerTrack || i !== t) &&
              (r.removeChild(e),
              "video" === t &&
                (this._subtitleManager.setPlayer(null),
                this.emit(T.PLAYER_VIDEO_ELEMENT_REMOVED, null)));
          }
          _onLicenseRequestCapped(e) {
            !e.data.signal.aborted &&
              this._currentContent &&
              (this.pause(), this.emit(T.PLAYER_CAPPED, null));
          }
          _shouldNextErrorBeFatal() {
            let e = this._currentContent;
            if (
              !e ||
              e.hasNonFatalErrors() ||
              !e.isProtected() ||
              !this._player
            )
              return !1;
            let t = this._player.error;
            if (!t || !(t instanceof MediaError))
              return (this._fatalOnNextError = !1), !1;
            switch (t.code) {
              case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              case MediaError.MEDIA_ERR_DECODE:
                return !0;
              default:
                return !1;
            }
          }
          _onNavigatorOffline() {
            this._tracker.trackNavigatorOffline();
          }
          _onBufferError(e) {
            this._emitError(e.data.error, e.data.canPlayNext, e.data.track);
          }
          _onBufferUpdateEnd() {
            var e;
            this._setRebufferingState(!0),
              this._rebuffering &&
                this._player &&
                (null === (e = this._currentContent) || void 0 === e
                  ? void 0
                  : e.strategy) === S.MSE &&
                this._bufferManager.checkBufferHealth(
                  this._currentContent,
                  this._player.currentTime
                );
          }
          _addPlayerEvents(e) {
            e.addEventListener(T.MEDIA_TIMEUPDATE, this._onTimeUpdate),
              e.addEventListener(T.MEDIA_PLAY, this._onPlay),
              e.addEventListener(T.MEDIA_PLAYING, this._onPlaying),
              e.addEventListener(T.MEDIA_PAUSE, this._onPause),
              e.addEventListener(T.MEDIA_SEEKING, this._onSeeking),
              e.addEventListener(T.MEDIA_ENCRYPTED, this._onEncrypted),
              e.addEventListener(T.MEDIA_ENDED, this._onEnded),
              e.addEventListener(T.MEDIA_ERROR, this._onError),
              e.addEventListener(
                T.MEDIA_LOADEDMETADATA,
                this._onLoadedMetadata
              ),
              e.addEventListener(
                T.MEDIA_DURATIONCHANGE,
                this._onDurationChange
              ),
              e.addEventListener(T.MEDIA_WAITING, this._onWaiting),
              e.addEventListener(T.MEDIA_CANPLAY, this._onCanPlay),
              e.addEventListener(
                T.MEDIA_CANPLAYTHROUGH,
                this._onCanPlayThrough
              ),
              e.addEventListener(T.MEDIA_RATECHANGE, this._onRateChange),
              e.addEventListener(
                T.INTERNAL_MEDIA_REQUIRES_DURATION,
                this._onRequiresDuration
              ),
              e.addEventListener(T.MEDIA_RESIZE, this._onVideoResize);
          }
          _removePlayerEvents(e) {
            e.removeEventListener(T.MEDIA_TIMEUPDATE, this._onTimeUpdate),
              e.removeEventListener(T.MEDIA_PLAY, this._onPlay),
              e.removeEventListener(T.MEDIA_PLAYING, this._onPlaying),
              e.removeEventListener(T.MEDIA_PAUSE, this._onPause),
              e.removeEventListener(T.MEDIA_SEEKING, this._onSeeking),
              e.removeEventListener(T.MEDIA_ENCRYPTED, this._onEncrypted),
              e.removeEventListener(T.MEDIA_ENDED, this._onEnded),
              e.removeEventListener(T.MEDIA_ERROR, this._onError),
              e.removeEventListener(T.MEDIA_WAITING, this._onWaiting),
              e.removeEventListener(T.MEDIA_CANPLAY, this._onCanPlay),
              e.removeEventListener(T.MEDIA_RATECHANGE, this._onRateChange),
              e.removeEventListener(
                T.MEDIA_CANPLAYTHROUGH,
                this._onCanPlayThrough
              ),
              e.removeEventListener(
                T.MEDIA_LOADEDMETADATA,
                this._onLoadedMetadata
              ),
              e.removeEventListener(
                T.MEDIA_DURATIONCHANGE,
                this._onDurationChange
              ),
              e.removeEventListener(
                T.INTERNAL_MEDIA_REQUIRES_DURATION,
                this._onRequiresDuration
              ),
              e.removeEventListener(T.MEDIA_RESIZE, this._onVideoResize);
          }
          _recreateMediaElement(e, t, i, r) {
            var n, a, s;
            if (r.aborted)
              return (
                tl.info("Recreate player dropped: operation aborted."),
                Promise.resolve(null)
              );
            let o = this._player,
              l = Promise.resolve(null);
            if (o) {
              let r;
              if (
                !this._newElementPerTrack &&
                !("AUDIO" === o.tagName && "video" === t) &&
                !(
                  o === this._audioProcessor.getPlayer() &&
                  !(null === (n = this._upcomingContent) || void 0 === n
                    ? void 0
                    : n.isProtected())
                ) &&
                ((r = !0),
                Object.keys(e).forEach((t) => {
                  let i = e[t];
                  'audio/mp2t;codecs="mp4a.40.2"' !== i &&
                    i &&
                    !o.canPlayType(i) &&
                    (r = !1);
                }),
                r)
              )
                return (
                  tl.info("Reusing media element."),
                  (!(
                    e.audio === this._activeMimeTypes.audio &&
                    e.video === this._activeMimeTypes.video
                  ) ||
                    this._newBufferPerTrack) &&
                    i === S.MSE &&
                    (tl.info("Recreating buffer."),
                    this._bufferManager.recreate(e),
                    (this._activeMimeTypes = e)),
                  Promise.resolve({ player: o, mediaKeys: o.mediaKeys })
                );
              this._removePlayerEvents(o),
                o.pause(),
                (l = this._cleanMediaKeys(o)),
                (this._player = null),
                null === (a = this._playerContainerManager) ||
                  void 0 === a ||
                  a.eject(o, "video"),
                null === (s = this._playerContainerManager) ||
                  void 0 === s ||
                  s.eject(o, "audio");
            }
            tl.info(`Creating new media element for media type ${t}.`);
            let d = this._createPlayer(t),
              _ = this._playerVolume;
            return (
              (d.volume = this._cubicVolume ? Math.pow(_, 3) : _),
              (d.autoplay = !1),
              (d.loop = !1),
              (d.muted = this._muted),
              "playsInline" in d && (d.playsInline = !0),
              (this._player = d),
              (this._playerActivated = !1),
              this._addPlayerEvents(d),
              i === S.MSE && this._bufferManager.recreate(e),
              (this._activeMimeTypes = e),
              l.then((e) => ({ player: d, mediaKeys: e }))
            );
          }
          _getContainerElement(e) {
            var t;
            if ("string" == typeof e) {
              let i = document.querySelector(e);
              if (i) return i;
              let r = new q(
                L.PLAYER_CONTAINER_ELEMENT_NOT_FOUND,
                "Container element was not found in the DOM"
              );
              return (
                (r.listPlayerIgnore = !0),
                this._emitWarning(
                  r,
                  null === (t = this._currentContent) || void 0 === t
                    ? void 0
                    : t.toLogJSON()
                ),
                null
              );
            }
            return e || null;
          }
          _onVideoResize() {
            if (!(this._player instanceof HTMLVideoElement)) return;
            let { videoWidth: e, videoHeight: t } = this._player;
            this.emit(T.PLAYER_VIDEO_RESIZED, { width: e, height: t });
          }
          _onDurationChange() {
            var e;
            let t =
                null === (e = this._abortController) || void 0 === e
                  ? void 0
                  : e.signal,
              i = () => {
                if (!this._player) return;
                if (null == t ? void 0 : t.aborted) {
                  tl.info("Duration changed drop: operation aborted.");
                  return;
                }
                let e = tc(this._player.duration),
                  i = tc(this._player.currentTime);
                this._tracker.setActualDuration(e),
                  this.emit(T.PLAYER_DURATION_CHANGED, {
                    timestamp: Date.now(),
                    position: i,
                    duration: e,
                  });
              };
            this._loaded ? i() : this.once(T.PLAYER_LOAD, i);
          }
          _onPlay() {
            var e;
            if (!this._player || !this._currentContent) return;
            let t = tc(this._player.currentTime);
            this._tracker.trackPlay(t, this._player.playbackRate),
              this.emit(T.PLAYER_PLAY, {
                timestamp: Date.now(),
                position: t,
                logData:
                  null !== (e = this._currentContent.getLogData()) &&
                  void 0 !== e
                    ? e
                    : null,
              });
          }
          _onPlaying() {
            if (!this._player) return;
            this._playerActivated = !0;
            let e = this._currentContent,
              t = tc(this._player.currentTime);
            this._tracker.trackPlaying(t),
              this.emit(T.PLAYER_PLAYING, {
                timestamp: Date.now(),
                position: t,
                logData: e ? e.getLogData() : null,
              });
          }
          _onPause() {
            var e;
            if (!this._player) return;
            let t = tc(this._player.currentTime);
            this._tracker.trackPaused(t);
            let i = this._currentContent
              ? this._currentContent.getLogData()
              : null;
            (this._pauseToken = setTimeout(() => {
              clearTimeout(this._syntheticEndedToken),
                this.emit(T.PLAYER_PAUSED, { position: t, logData: i });
            }, 10)),
              this._player &&
                (null === (e = this._currentContent) || void 0 === e
                  ? void 0
                  : e.strategy) === S.MSE &&
                this._bufferManager.checkBufferHealth(
                  this._currentContent,
                  this._player.currentTime
                );
          }
          _onSeeking() {
            var e;
            this.emit(T.PLAYER_SEEKING, null),
              this._setRebufferingState(),
              (null === (e = this._currentContent) || void 0 === e
                ? void 0
                : e.strategy) === S.MSE &&
                this._player &&
                !this._bufferManager.isPositionInCurrentFillRange(
                  this._currentContent,
                  this._player.currentTime
                ) &&
                (tl.log("Aborting buffer operations."),
                this._bufferManager.abort(this._clearBufferOnSeek)),
              (this._lastTimeUpdatePostion = 0),
              this._onTimeUpdate();
          }
          _onRequiresDuration() {
            this._currentContent &&
              this._currentContent.isProtected() &&
              this._player &&
              (this._player.duration =
                this._currentContent.getCalculatedDuration());
          }
          _onQuotaExceeded() {
            this._player &&
              this._rebufferOnQuotaExceeded &&
              (tl.info("Exceeded quota: rebuffering current track."),
              this._bufferManager.abort(!0),
              (this._player.currentTime = this._player.currentTime),
              this._onTimeUpdate());
          }
          _onEncrypted(e) {
            tl.info("Got Encrypted event"),
              this._currentContent &&
                this.emitSync(T.INTERNAL_ENCRYPTED, {
                  initData: e.initData,
                  fromPolyfill: !!e.fromPolyfill,
                });
          }
          _onEnded() {
            !this._currentContent ||
              (this._synthesizeEnded && this._currentContent.isProtected()) ||
              (tl.info("Native ended emitted."), this._emitEnded());
          }
          _onSyntheticEnded() {
            this._synthesizeEnded &&
              this._currentContent &&
              this._currentContent.isProtected() &&
              (tl.info("Synthetic ended emitted."), this._emitEnded());
          }
          _onError() {
            let e, t, i, r;
            if (!this._player) return;
            let n = this._player.error,
              a = !1,
              s = this._currentContent,
              o = !1;
            s &&
              ((a = s.isProtected()),
              (e = s.toLogJSON()),
              (o = s.hasNonFatalErrors()),
              s.unload());
            let l = !0,
              d = !s || o || !this._fatalOnNextError,
              _ =
                n && n.msExtendedCode
                  ? `0x${(n.msExtendedCode >>> 0).toString(16).toUpperCase()}`
                  : null,
              u = `data:${(null == e ? void 0 : e.fileId) || "unknown"}`;
            if (n instanceof MediaError) {
              switch (n.code) {
                case MediaError.MEDIA_ERR_ABORTED:
                  (t = L.MEDIA_ABORTED), (i = "Media aborted.");
                  break;
                case MediaError.MEDIA_ERR_NETWORK:
                  (t = L.MEDIA_NETWORK_ERROR), (i = "Network error.");
                  break;
                case MediaError.MEDIA_ERR_DECODE:
                  (t = L.MEDIA_DECODING_ERROR),
                    (i = "Media decoding error."),
                    (l = d);
                  break;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                  (t = L.MEDIA_NOT_SUPPORTED),
                    (i = "Media not supported."),
                    (l = d);
                  break;
                default:
                  (t = L.PLAYER_MEDIA_ERROR), (i = "Media error."), (r = !0);
              }
              let e = n.message || _ || u || n.toString();
              i += ` (${e})`;
            } else
              (t = L.PLAYER_PLAYBACK_ERROR),
                (i = "Error message undefined"),
                (r = !0);
            this._bufferManager.abort(!0);
            let h = new q(t, i);
            l || (h.unrecoverable = !0),
              (h.listPlayerIgnore = o),
              (h.debug.src_url = u),
              (h.debug.protected = a),
              (h.debug.extendedCode = _),
              (h.debug.rawExCode = (n && n.msExtendedCode) || null),
              r &&
                n &&
                ((h.debug.nativeCode = n.code || null),
                (h.debug.errorData = n)),
              this._emitError(h, l, e);
          }
          _onLoadedMetadata() {
            this.emitSync(T.INTERNAL_PLAYER_LOADED_METADATA, null);
          }
          _onCanPlay() {
            this._setRebufferingState(),
              this.emitSync(T.INTERNAL_PLAYER_CANPLAY, null),
              this.emit(T.PLAYER_FIRST_BYTES, null);
          }
          _onCanPlayThrough() {
            this._setRebufferingState(),
              this.emitSync(T.INTERNAL_PLAYER_CANPLAYTHROUGH, null);
          }
          _onWaiting() {
            var e;
            clearTimeout(this._syntheticEndedToken);
            let t = this._player;
            if (!t || !this._currentContent) return;
            let i = t.seeking;
            this._setRebufferingState();
            let r =
                !!eG(this._currentContent) &&
                this._currentContent.canLowerBitrate(),
              n = this._tracker;
            this.emit(
              T.PLAYER_BUFFERING_START,
              Object.assign(
                {
                  position: tc(t.currentTime),
                  msPlayed: this._tracker.getMSPlayed(),
                  canLowerBitrate: r,
                  seeking: i,
                },
                n.getStallsInformation()
              )
            );
            let a =
              null === (e = this._abortController) || void 0 === e
                ? void 0
                : e.signal;
            this._getRebufferingLatency().then((e) => {
              (null != a && a.aborted) ||
                (i || this._tracker.trackMsStalled(e),
                this.emit(
                  T.PLAYER_BUFFERING_END,
                  Object.assign(
                    {
                      position: tc(t.currentTime),
                      msPlayed: this._tracker.getMSPlayed(),
                      canLowerBitrate: r,
                      msStalled: e,
                      seeking: i,
                    },
                    n.getStallsInformation()
                  )
                ));
            });
          }
          _onPlayedThresholdReached(e) {
            this._currentContent &&
              this._player &&
              this.emit(T.PLAYER_PLAYED_THRESHOLD_REACHED, {
                played: e.data.played,
                threshold: e.data.threshold,
                position: tc(this._player.currentTime),
              });
          }
          _emitEnded() {
            this._currentContent &&
              "video" === this._currentContent.getMediaType() &&
              this.emit(T.PLAYER_ENDED_VIDEO, null),
              clearTimeout(this._pauseToken),
              this.emit(T.PLAYER_ENDED, null);
          }
          _emitError(e, t, i) {
            tl.error("Player Error", e, i, t),
              this._tracker.setHadError(!0),
              !this._disableCache &&
                i &&
                i.fileId &&
                this._cache.remove(i.fileId),
              this.emit(T.PLAYER_ERROR, {
                playId: this._playId,
                error: e,
                track: i,
                canPlayNext: t,
                position: this._player ? tc(this._player.currentTime) : 0,
              });
          }
          _emitWarning(e, t) {
            tl.warn("Player Warning", e, t, !0),
              this._tracker.trackWarning(),
              this.emit(T.PLAYER_WARNING, {
                playId: this._playId,
                error: e,
                track: t,
                canPlayNext: !0,
                position: this._player ? tc(this._player.currentTime) : 0,
              });
          }
          _emitReporting(e) {
            if (!eK(this._currentContent)) return;
            let t = this._currentContent.getTrackingEventData(e);
            t &&
              0 !== t.urls.length &&
              this.emitAndWait(tu[e], t, (e) => {
                if (!e.defaultPrevented)
                  for (let e of t.urls)
                    this._transport.request(e, { forget: !0 });
              });
          }
          _prepareMediaElement(e, t) {
            if (t.aborted || !this._upcomingContent)
              return (
                tl.info("Loading content dropped: operation aborted."),
                Promise.resolve(!1)
              );
            let i = this._upcomingContent.getMediaTypeMimeTypes();
            return this._recreateMediaElement(
              i,
              this._upcomingContent.getMediaType(),
              this._upcomingContent.strategy,
              t
            ).then((i) => {
              var r;
              if (!i || t.aborted)
                return (
                  tl.info(
                    "Loading content dropped after recreate: operation aborted."
                  ),
                  Promise.resolve(!1)
                );
              let { player: n, mediaKeys: a } = i;
              if (
                ("VIDEO" === n.tagName &&
                  (e.poster
                    ? (n.poster = e.poster)
                    : n.removeAttribute("poster")),
                (n.muted = !!e.muted),
                (n.loop = !!e.loop),
                !this._emeManager ||
                  !(null === (r = this._upcomingContent) || void 0 === r
                    ? void 0
                    : r.isProtected()))
              )
                return Promise.resolve(!0);
              let s = (e) => {
                var t;
                return (
                  (e.unrecoverable = !0),
                  this._emitError(
                    e,
                    !1,
                    null === (t = this._upcomingContent) || void 0 === t
                      ? void 0
                      : t.toLogJSON()
                  ),
                  Promise.reject(e)
                );
              };
              return !a ||
                this._newMediaKeysPerTrack ||
                (void 0 === this._newMediaKeysPerTrack && !n.mediaKeys) ||
                (null == a ? void 0 : a.shouldRefreshPerTrack)
                ? (tl.info("Creating media keys"),
                  this._emeManager.createMediaKeys(n).then(() => !0, s))
                : n.mediaKeys !== a
                ? (tl.info("Reusing previous media keys"),
                  this._emeManager.setMediaKeys(n, a).then(() => !0, s))
                : Promise.resolve(!0);
            });
          }
          _isRebufferingTargetReached() {
            var e;
            let t = this._player,
              i = this._currentContent;
            if (!t || !i) return !1;
            if (i.strategy !== S.MSE) return !0;
            let r =
              null !== (e = this._rebufferTarget[i.getMediaType()]) &&
              void 0 !== e
                ? e
                : 0;
            if (!r) return !0;
            let n = Math.max(t.currentTime, 1),
              a = Math.min(r, Math.floor(t.duration - n)),
              s = t.buffered;
            for (let e = 0, t = s.length; e < t; e++) {
              let t = s.start(e),
                i = s.end(e);
              if (t <= n && n <= i && a <= i - n) return !0;
            }
            return !1;
          }
          _setPlaybackRate() {
            var e;
            let t = this._player,
              i = this._currentContent;
            if (!t || !i) return;
            if (i.strategy === S.MSE && this._rebuffering) {
              t.playbackRate = 0;
              return;
            }
            let r = (
              null === (e = this._loadingOptions) || void 0 === e
                ? void 0
                : e.useDefaultPlaybackSpeed
            )
              ? 1
              : this._playerSpeed;
            (t.playbackRate = r), (t.defaultPlaybackRate = r);
          }
          _setRebufferingState(e) {
            let t = this._rebuffering,
              i = !this._isRebufferingTargetReached();
            (e && i) ||
              ((this._rebuffering = i),
              this._setPlaybackRate(),
              !t && this._rebuffering
                ? (tl.log("Rebuffering start"),
                  this.emit(T.PLAYER_REBUFFERING_START, null))
                : t &&
                  !this._rebuffering &&
                  (tl.log("Rebuffering end"),
                  this._tracker.trackPlayLatency(),
                  this.emit(T.PLAYER_REBUFFERING_END, null)));
          }
          _configureLoadingTimeout(e, t, i) {
            let r = null != i ? i : this._loadingTimeout,
              n = new q(
                L.PLAYER_TIMEOUT_ERROR,
                `Timeout: track could not be loaded within ${r} ms.`
              );
            return r
              ? setTimeout(() => {
                  e.aborted || (null == t || t.abort(), this._emitError(n, !0));
                }, r)
              : void 0;
          }
          _handleLoadingComplete(e, t) {
            var i;
            clearTimeout(t);
            let r = this._currentContent && this._currentContent.getMediaType();
            return (
              this._player &&
                r &&
                (null === (i = this._playerContainerManager) ||
                  void 0 === i ||
                  i.inject(this._player, r)),
              (this._upcomingContent = null),
              e
            );
          }
          _handleLoadingError(e, t, i, r, n) {
            if ((clearTimeout(r), (this._upcomingContent = null), i.aborted))
              return Promise.resolve(!1);
            if (
              (this._tracker.trackLoadFailed(),
              this.emit(T.PLAYER_LOADING_FAILED, {
                uri: e,
                logData: t.logData,
              }),
              n)
            ) {
              let i = n.track || {
                uri: e,
                fileId: t.fileId,
                mediaFormat: t.format,
                deviceId: t.logData.deviceId,
              };
              this._emitError(
                n,
                "StorageError" !== n.name || !!n.canPlayNext,
                i
              );
            }
            return Promise.reject(n);
          }
          _handleLoadedMetadata(e, t, i) {
            if (e.aborted) {
              tl.info("LoadedMetadata operations dropped: operation aborted.");
              return;
            }
            this._loaded = !0;
            let r = this._player;
            if (!r) return;
            this._setRebufferingState(), this._bufferManager.dequeueUpdates();
            let n = i.position > r.duration ? 0 : i.position;
            (this._lastTimeUpdatePostion = 0),
              (isNaN(r.currentTime) || r.currentTime < n) &&
                (tl.info("Resetting initial position after metadata."),
                (r.currentTime = n)),
              this._tracker.trackLoadDone(tc(r.currentTime)),
              this.emitSync(T.PLAYER_LOAD, {
                autoplay: i.autoplay,
                position: tc(n),
                logData: t,
              }),
              Promise.resolve().then(() => {
                this._onTimeUpdate();
              });
            let a = () => {
              r.currentTime < n &&
                (tl.info("Resetting initial position after playable."),
                (r.currentTime = n));
            };
            i.autoplay &&
              !r.error &&
              (a = () => {
                if (
                  (r.currentTime < n &&
                    (tl.info("Resetting initial position after playable."),
                    (r.currentTime = n)),
                  e.aborted)
                ) {
                  tl.info("Play trigger dropped: operation aborted");
                  return;
                }
                new Promise((e) => e(this._player && this._player.play()))
                  .then(() => this._audioProcessor.resume())
                  .catch((e) => {
                    if (e) {
                      if ("NotSupportedError" === e.name)
                        return Promise.reject(e);
                      if ("NotAllowedError" === e.name)
                        return (
                          this.emit(T.PLAYER_AUTOPLAY_FAILED, null),
                          Promise.reject(e)
                        );
                    }
                    return this._player
                      ? this._player.play()
                      : Promise.resolve();
                  })
                  .catch(() => {
                    this._onPause();
                  });
              }),
              r.readyState > 2
                ? (tl.info("Ready to play, triggering play."), a())
                : (tl.info("Waiting to be playable."),
                  this.once(T.INTERNAL_PLAYER_CANPLAY, a));
          }
          _handleCanPlayThrough(e) {
            var t;
            if (e.aborted) {
              tl.info("CanPlayThrough operations dropped: operation aborted.");
              return;
            }
            this._tracker.trackCanPlayThrough(),
              (null === (t = this._currentContent) || void 0 === t
                ? void 0
                : t.strategy) !== S.MSE && this._tracker.trackPlayLatency();
          }
          _loadContent(e, t) {
            if (t.aborted || !this._upcomingContent)
              return (
                tl.info("Loading content dropped: operation aborted."),
                Promise.resolve(!1)
              );
            if (!this._player)
              throw new q(
                L.PLAYER_INVALID_INTERNAL_STATE,
                "Cannot load content without an HTMLMediaElement"
              );
            this._canPreloadEmitted = !1;
            let i = this._upcomingContent;
            (this._upcomingContent = null),
              (this._currentContent = i),
              this._setAudioGain(i),
              this._subtitleManager.setVideoContent(
                i && "getSubtitles" in i && "getSubtitleLanguages" in i
                  ? i
                  : null
              );
            let r = e.callback;
            r &&
              this.once(T.PLAYER_LOAD, () => {
                if (t.aborted) {
                  tl.info("Load content event dropped: operation aborted.");
                  return;
                }
                r();
              }),
              this.once(
                T.INTERNAL_PLAYER_LOADED_METADATA,
                this._handleLoadedMetadata.bind(
                  this,
                  t,
                  this._currentContent.getLogData(),
                  e
                )
              ),
              this.once(
                T.INTERNAL_PLAYER_CANPLAYTHROUGH,
                this._handleCanPlayThrough.bind(this, t)
              );
            let n = e.position,
              a =
                "getCalculatedDuration" in i
                  ? i.getCalculatedDuration()
                  : 1 / 0;
            a && n > a && (n = e.position = 0);
            try {
              this._player.currentTime = n;
            } catch (e) {
              tl.warn("Cannot set initial position before loading.", e);
            }
            let s = e.playbackSpeed;
            return (!e.useDefaultPlaybackSpeed && s && this.setPlaybackSpeed(s),
            this._tracker.setProtected(i.isProtected()),
            tl.info(`Detecting strategy for ${i.constructor.name}`),
            i.strategy === S.MSE)
              ? this._loadMSEContent(i, e, t)
              : this._loadURLContent(i, e, t);
          }
          _loadURLContent(e, t, i) {
            var r, n, a;
            if (!this._player || !e)
              return Promise.reject(
                new q(
                  L.PLAYER_INVALID_INTERNAL_STATE,
                  "Invalid playback state."
                )
              );
            tl.info("Loading URL content.");
            let s = e.getURL();
            if (!s)
              return Promise.reject(
                new q(L.PLAYER_INVALID_INTERNAL_STATE, "Content not loaded.")
              );
            if (e.isProtected()) {
              tl.info("URL content is protected");
              let e = (t) => {
                t.data.fromPolyfill &&
                  (this.removeListener(T.INTERNAL_ENCRYPTED, e),
                  this._requestLicense(i, { initData: t.data.initData }));
              };
              this.on(T.INTERNAL_ENCRYPTED, e);
            }
            if ("video" === e.getMediaType() && eB(e)) {
              let t = e.getMediaProfileInfo();
              this._tracker.trackVideoLoadStart({
                bitrate:
                  null === (r = t.video.selected) || void 0 === r
                    ? void 0
                    : r.video_bitrate,
                audioProfile:
                  null !== (n = t.audio.selected) && void 0 !== n ? n : void 0,
                videoProfile:
                  null !== (a = t.video.selected) && void 0 !== a ? a : void 0,
              });
            }
            this._tracker.trackBufferLoadStart(),
              this._tracker.trackBufferURL(s, { bandwidth: 0 });
            let o = e.getLoadingApproach();
            if ("src" === o.approach)
              tl.info("URL content loaded using src attribute"),
                (this._player.src = s);
            else {
              tl.info("URL content loaded using source element");
              let e = document.createElement("source");
              (e.src = s), (e.type = o.type), this._player.appendChild(e);
            }
            return this._player.load(), Promise.resolve(!0);
          }
          _loadMSEContent(e, t, i) {
            var r, n, a;
            if (!this._player || !e)
              return Promise.reject(
                new q(
                  L.PLAYER_INVALID_INTERNAL_STATE,
                  "Invalid playback state."
                )
              );
            if (
              (tl.info(`Loading MSE Content: ${e.getFileId()}`),
              e.isProtected())
            ) {
              tl.log("MSE content is protected");
              let e = () =>
                this._requestLicense(i).then(() => {
                  !i.aborted &&
                    ((this._licenseRequested = !0),
                    this._disableBufferingBeforeLicense &&
                      this._onTimeUpdate());
                });
              this._disableLicensePrefetch
                ? this.once(T.INTERNAL_ENCRYPTED, e)
                : this._bufferManager.once(T.BUFFER_SOURCE_OPEN, e);
            }
            let s = this._bufferManager,
              o = s.getMediaSource();
            if (!o)
              return Promise.reject(
                new q(L.PLAYER_INVALID_INTERNAL_STATE, "No media source.")
              );
            if ("video" === e.getMediaType() && eB(e)) {
              let t = e.getMediaProfileInfo();
              this._tracker.trackVideoLoadStart({
                bitrate:
                  null === (r = t.video.selected) || void 0 === r
                    ? void 0
                    : r.video_bitrate,
                audioProfile:
                  null !== (n = t.audio.selected) && void 0 !== n ? n : void 0,
                videoProfile:
                  null !== (a = t.video.selected) && void 0 !== a ? a : void 0,
              });
            }
            return (
              (this._player.src = URL.createObjectURL(o)),
              this._setPlaybackRate(),
              new Promise((r, n) => {
                s.once(T.BUFFER_SOURCE_OPEN, () => {
                  this._tracker.trackBufferLoadStart(),
                    this._getRebufferingLatency().then((e) => {
                      i.aborted || this._tracker.trackInitialRebuffering(e);
                    }),
                    ("video" === e.getMediaType()
                      ? s.setDuration(e.getCalculatedDuration())
                      : Promise.resolve(!0)
                    )
                      .then(() =>
                        e.isProtected() && this._disableBufferingBeforeLicense
                          ? s.injectInitSegment(e)
                          : (this._bufferManager.checkBufferHealth(
                              e,
                              t.position,
                              !0
                            ),
                            !0)
                      )
                      .then(r, n);
                });
              })
            );
          }
          _getRebufferingLatency() {
            return new Promise((e) => {
              if (!this._player) {
                e(0);
                return;
              }
              let t = (0, j.q)();
              this.once(T.PLAYER_REBUFFERING_END, () => {
                e((0, j.n)(t));
              });
            });
          }
          _requestLicense(e, t = {}) {
            let i;
            if (e.aborted)
              return (
                tl.info("Request license dropped: operation aborted."),
                Promise.resolve(!1)
              );
            if (!this._player || !this._currentContent || !this._emeManager)
              return Promise.resolve(!1);
            let r = (0, j.q)(),
              n = this._player.mediaKeys,
              a = this._currentContent,
              s = a.getFileId(),
              o = a.getLogData(),
              l = a.toLogJSON(),
              d = a.getKeySystem();
            if (!d) return Promise.resolve(!1);
            let _ = a.getLicenseEndpoint();
            if (_) i = Promise.resolve(_);
            else {
              if (!s)
                return Promise.reject(
                  TypeError("Missing: fileId or licenseEndpoint")
                );
              i = this._licenseURLResolver
                .get(d, a.getMediaType())
                .then((e) => e.replace(/\{contentId\}/, s));
            }
            let u = this._emeManager,
              h = this._tracker;
            return (
              h.setKeySystem(d),
              h.setKeySystemImpl(u.getKeySystemImpl()),
              Promise.all([i, a.getInitParams()])
                .then(([i, a]) => {
                  if (!a) return Promise.resolve(!1);
                  h.setLicenseSessionLatency((0, j.n)(r));
                  let s = a.initDataType,
                    o = t.initData || a.initData;
                  return n && o && s
                    ? u.createSessionWithParams({
                        keySystem: d,
                        signal: e,
                        initData: o,
                        mediaKeys: n,
                        licenseServer: i,
                        initDataType: s,
                      })
                    : Promise.resolve(!1);
                })
                .then((t) => {
                  if (e.aborted)
                    return (
                      tl.info("License tracking dropped: operation aborted."),
                      Promise.resolve(!1)
                    );
                  "boolean" != typeof t &&
                    "elapsed" in t &&
                    (h.setLicenseGenerationLatency(t.elapsed.generate),
                    h.setLicenseRequestLatency(t.elapsed.request),
                    h.setLicenseUpdateLatency(t.elapsed.update));
                  let i = (0, j.n)(r);
                  return (
                    h.setKeyLatency(i),
                    this.emit(T.PLAYER_KEY_RECEIVED, {
                      requestTime: i,
                      logData: o,
                    }),
                    tl.info("License updated."),
                    Promise.resolve(!0)
                  );
                })
                .catch((t) => {
                  if (e.aborted) return Promise.resolve(!1);
                  let i = !t || !("canPlayNext" in t) || t.canPlayNext;
                  return this._emitError(t, !!i, l), Promise.reject(t);
                })
            );
          }
          _onTimeUpdate() {
            var e;
            if (
              !this._loaded ||
              !(null === (e = this._player) || void 0 === e
                ? void 0
                : e.readyState) ||
              !this._currentContent
            )
              return;
            let t = this._currentContent,
              i = this._player.seeking,
              r = this._player.currentTime;
            if (
              t.isProtected() &&
              this._disableBufferingBeforeLicense &&
              !this._licenseRequested
            ) {
              tl.log(
                "Dropping time update event: buffering before license disabled."
              );
              return;
            }
            if (
              !i &&
              this._lastTimeUpdatePostion &&
              this._lastTimeUpdatePostion === r
            ) {
              tl.warn("Dropping duplicate time update.");
              return;
            }
            (this._lastTimeUpdatePostion = i ? 0 : r),
              t.strategy === S.MSE &&
                this._bufferManager.checkBufferHealth(t, r, i);
            let n = this._player.duration,
              a = tc(r),
              s = t.getLogData();
            i
              ? (this._tracker.trackPositionChanged(a),
                this.emit(T.PLAYER_POSITION_CHANGED, {
                  position: a,
                  logData: s,
                }))
              : (this._tracker.trackProgress(
                  a,
                  eG(t) ? t.getCurrentBitrates().video : 0
                ),
                this.emit(T.PLAYER_PROGRESS, {
                  timestamp: Date.now(),
                  position: a,
                  played: this._tracker.getMSPlayed(),
                  interval: 500,
                  logData: s,
                }));
            let o = n - r <= this._preloadThreshold;
            !this._canPreloadEmitted && o
              ? ((this._canPreloadEmitted = !0),
                this.emit(T.PLAYER_CAN_PRELOAD, null))
              : this._canPreloadEmitted && !o && (this._canPreloadEmitted = !1),
              clearTimeout(this._syntheticEndedToken),
              this._synthesizeEnded &&
                t.isProtected() &&
                this._isPlaying() &&
                (this._syntheticEndedToken = setTimeout(
                  this._onSyntheticEnded,
                  tc(n - r)
                ));
          }
          _isPlaying() {
            return !!this._player && !this._player.paused;
          }
          _cleanMediaKeys(e, t = this._emeManager) {
            return t
              ? t
                  .removeMediaKeys(e)
                  .catch(
                    (e) => (
                      tl.warn("Failed to remove current media keys.", e), null
                    )
                  )
              : Promise.resolve(null);
          }
          _checkKeySystemAccess() {
            if (
              !this._newKeySystemAccessPerTrack ||
              !this._player ||
              !this._emeManager
            )
              return Promise.resolve();
            let e = this._player,
              t = this._emeManager;
            return this._cleanMediaKeys(e, t)
              .then(() => t.requestMediaKeySystemAccess())
              .then(() => {})
              .catch(
                (e) => (
                  tl.warn("Failed to request new media key system access.", e),
                  Promise.reject(e)
                )
              );
          }
          _createContent(
            e,
            t = { manifestLatency: 0, resolveLatency: 0 },
            i = !1
          ) {
            return (
              this._emeManager
                ? this._emeManager.getKeySystemInfo()
                : this.getMediaConfig().then((e) => ({
                    keySystem: A.INVALID_SPOTIFY_KEY,
                    audioFormats: e.formatsInfo.audio,
                    videoFormats: e.formatsInfo.video,
                  }))
            )
              .then((i) =>
                (function (e, t) {
                  var i, r, n, a;
                  let s = ts(e, t);
                  switch (e.format) {
                    case b.MP3: {
                      let r =
                        null !== (i = e.url) && void 0 !== i
                          ? i
                          : e.resolvedURL;
                      if (r)
                        return new eX(
                          Object.assign(Object.assign({}, s), { url: r })
                        ).load();
                      if (e.fileId)
                        return new ti(
                          Object.assign(Object.assign({}, s), {
                            fileId: e.fileId,
                            resolver: t.audioResolver,
                          })
                        ).load();
                      return Promise.reject(
                        new q(
                          L.INVALID_TRACK,
                          `Invalid ${e.format} Track: No url or fileId.`
                        )
                      );
                    }
                    case b.GENERIC_MEDIA: {
                      let t =
                        null !== (r = e.url) && void 0 !== r
                          ? r
                          : e.resolvedURL;
                      if (t)
                        return new eX(
                          Object.assign(Object.assign({}, s), { url: t })
                        ).load();
                      return Promise.reject(
                        new q(
                          L.INVALID_TRACK,
                          `Invalid ${e.format} Track: No url.`
                        )
                      );
                    }
                    case b.MP4:
                    case b.MP4_DUAL:
                    case b.MP4_CBCS:
                    case b.MP4_FLAC: {
                      if (!e.fileId)
                        return Promise.reject(
                          new q(
                            L.INVALID_TRACK,
                            `Invalid ${e.format} Track: No fileId.`
                          )
                        );
                      let i = Object.assign(Object.assign({}, s), {
                        transport: t.transport,
                        abrManager: t.abrManager,
                        fileId: e.fileId,
                        keySystemSettings: ec[t.keySystem],
                        resolver: t.audioResolver,
                        fileFormat: e.fileFormat,
                        preloadedManifest: e.preloadedManifest,
                        preresolvedURL:
                          null !== (n = e.url) && void 0 !== n
                            ? n
                            : e.resolvedURL,
                      });
                      if (t.keySystem === A.FAIRPLAY)
                        return new e5(i).load(t.measures);
                      return new e7(i).load(t.measures);
                    }
                    case b.MANIFEST_ID:
                      return to(e, t);
                    case b.AD_MANIFEST: {
                      let i =
                        null !== (a = e.url) && void 0 !== a
                          ? a
                          : e.resolvedURL;
                      if (!i)
                        return Promise.reject(
                          new q(
                            L.INVALID_TRACK,
                            `Invalid ${e.format} Track: No url.`
                          )
                        );
                      return new ta(
                        Object.assign(Object.assign({}, s), {
                          abrManager: t.abrManager,
                          transport: t.transport,
                          manifestURL: i,
                          preloadedManifest: e.preloadedManifest,
                        })
                      )
                        .load(t.measures)
                        .then((i) => {
                          let r = i.getManifestId();
                          return r
                            ? to(
                                Object.assign(Object.assign({}, e), {
                                  fileId: r,
                                  format: b.MANIFEST_ID,
                                }),
                                t,
                                {
                                  trackingData: i.getTrackingEvents(),
                                  metadata: i.getContentMetadata(),
                                }
                              )
                            : i;
                        });
                    }
                    default:
                      return Promise.reject(
                        new q(
                          L.INVALID_TRACK,
                          "Cannot create PlayableContent: Invalid MediaFormat."
                        )
                      );
                  }
                })(e, {
                  transport: this._transport,
                  abrManager: this._abrManager,
                  supportedFormats: {
                    audio: i.audioFormats,
                    video: i.videoFormats,
                  },
                  mediator: this._mediator,
                  keySystem: i.keySystem,
                  audioResolver: this._audioResolver,
                  videoResolver: this._videoResolver,
                  disableCache: this._disableCache,
                  disallowProfile: this._disallowProfile,
                  allowMixedAVC1Codecs: this._allowMixedAVC1Codecs,
                  measures: t,
                })
              )
              .then((r) => {
                if (i) return r;
                let n = this._tracker;
                n.setResolveLatency(t.resolveLatency),
                  n.setManifestLatency(t.manifestLatency);
                let a = this._getCacheKey(e);
                return a && this._cache.set(a, r), r;
              });
          }
          _preinitMediaElement() {
            if (this._player || !this._emeManager) return Promise.resolve(this);
            let e = (0, K.OL)();
            return this._emeManager
              .getKeySystemInfo()
              .then((t) => {
                var i, r;
                let n = {
                  audio:
                    null === (i = t.audioFormats[0]) || void 0 === i
                      ? void 0
                      : i.contentType,
                  video:
                    null === (r = t.videoFormats[0]) || void 0 === r
                      ? void 0
                      : r.contentType,
                };
                return n.audio || n.video
                  ? this._recreateMediaElement(
                      n,
                      n.video ? "video" : "audio",
                      t.keySystem === A.FAIRPLAY ? S.URL : S.MSE,
                      e.signal
                    )
                  : null;
              })
              .then(
                () => this,
                (e) => (
                  tl.warn(
                    "Cannot precreate media element:",
                    null == e ? void 0 : e.message
                  ),
                  this
                )
              );
          }
          _setAudioGain(e) {
            var t;
            null === (t = this._audioProcessor) ||
              void 0 === t ||
              t.setAudioGain(e.getAudioGain());
          }
          _getCacheKey({ fileId: e, url: t, format: i }) {
            var r;
            let n = !this._disableCache && t_[i],
              a = null !== (r = null != e ? e : t) && void 0 !== r ? r : null;
            return n ? a : null;
          }
          _getContentPromise(e, t) {
            let i = this._cache,
              r = this._getCacheKey(e);
            if (r) {
              let n = this._preloadingTracks[r],
                a = i.get(r);
              if (n)
                return (
                  tl.info("Waiting for preloading track.", r),
                  n
                    .then(
                      (e) => (
                        tl.info("Preloading succeeded.", r),
                        t.setResolveLatency(e.resolveLatency),
                        t.setManifestLatency(e.manifestLatency),
                        i.get(r)
                      )
                    )
                    .catch(
                      () => (
                        tl.info("Preloading failed, creating new track", r),
                        this._createContent(e)
                      )
                    )
                );
              if (a)
                return this._newKeySystemAccessPerTrack && this._emeManager
                  ? this._emeManager
                      .getKeySystemInfo()
                      .then(({ keySystem: i }) =>
                        i === a.getKeySystem()
                          ? (tl.info("Using cached track.", r, a),
                            t.setMemoryCached(!0),
                            a)
                          : (tl.info(
                              "Mismatched keysystem for cached track. Creating new track",
                              r
                            ),
                            this._createContent(e))
                      )
                  : (tl.info("Using cached track.", r, a),
                    t.setMemoryCached(!0),
                    Promise.resolve(a));
            }
            return tl.info("Creating new content", r), this._createContent(e);
          }
          getMediaSource() {
            return this._bufferManager.getMediaSource();
          }
          load(e, t, i) {
            var r, n, a, s, o, l, d, _;
            let u = ((_ = t.uriProperty),
              null == e ? void 0 : e.hasOwnProperty(_))
                ? t.uriProperty
                : "uri",
              h = e[u];
            if ((tl.info("load", h), !h))
              return Promise.reject(
                new q(
                  L.PLAYER_CANNOT_FIND_PLAYABLE_URI,
                  "Cannot find a playable URI."
                )
              );
            if (!e.logData)
              return Promise.reject(
                Error("Invalid track: logging info not specified")
              );
            this.stop(e.logData, e.mediaType),
              (this._loaded = !1),
              (this._licenseRequested = !1),
              (this._rebuffering = !0),
              (this._currentContent = null),
              this._subtitleManager.setVideoContent(null),
              t.muted && this.setMuted(!0),
              (this._preloadThreshold =
                t.preloadThreshold || this._preloadThreshold);
            let c = ++this._playId;
            this._abortController = (0, K.OL)();
            let p = this._abortController.signal,
              f = this._tracker;
            f.trackLoadStart(h, e.fileId, c.toString(), e.logData, e.metadata);
            let E = this._configureLoadingTimeout(
              p,
              this._abortController,
              t.loadingTimeout
            );
            void 0 !== E && p.addEventListener("abort", () => clearTimeout(E)),
              this.emit(T.PLAYER_BEFORE_LOAD, {
                track: e,
                options: t,
                logData: e.logData,
                uri: h,
                timestamp: Date.now(),
              }),
              this._bufferManager.setPlayId(c);
            let m = (
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.useDefaultPlaybackSpeed
              )
                ? 1
                : null !==
                    (a =
                      null === (n = e.options) || void 0 === n
                        ? void 0
                        : n.playbackSpeed) && void 0 !== a
                ? a
                : this._playerSpeed,
              y = {
                position: (t.position || 0) / 1e3,
                autoplay: null === (s = t.autoplay) || void 0 === s || s,
                poster: e.poster,
                useDefaultPlaybackSpeed: !!(null === (o = e.options) ||
                void 0 === o
                  ? void 0
                  : o.useDefaultPlaybackSpeed),
                playbackSpeed: m,
                callback: i,
                muted: null !== (l = t.muted) && void 0 !== l && l,
                loop: null !== (d = t.loop) && void 0 !== d && d,
              };
            return (
              (this._loadingOptions = y),
              f.setPlayIntended(y.autoplay),
              f.setPlayedThreshold(t.playedThreshold),
              this._checkKeySystemAccess()
                .then(() => this._getContentPromise(e, f))
                .then((t) => {
                  if (
                    (f.trackStrategy(t.strategy),
                    t.isProtected() && !this._emeManager)
                  )
                    throw new q(
                      L.DISALLOW_PROTECTED_TRACK_ERROR,
                      "Protected tracks not supported"
                    );
                  t.setLogData(e.logData),
                    t.strategy === S.MSE &&
                      f.setCalculatedDuration(tc(t.getCalculatedDuration())),
                    (this._upcomingContent = t);
                })
                .then(() => this._prepareMediaElement(y, p))
                .then(() => {
                  var e;
                  this._subtitleManager.setPlayer(this._player),
                    (null === (e = this._upcomingContent) || void 0 === e
                      ? void 0
                      : e.isProtected()) &&
                      (tl.info(
                        "Attaching HTMLMediaElement to the audio processor"
                      ),
                      this._audioProcessor.setPlayer(this._player));
                })
                .then(() => this._loadContent(y, p))
                .then(
                  (e) => this._handleLoadingComplete(e, E),
                  this._handleLoadingError.bind(this, h, e, p, E)
                )
            );
          }
          preload(e) {
            let t = this._getCacheKey(e),
              i = this._cache;
            if (!t || i.get(t) || !this._emeManager)
              return Promise.resolve(null);
            let r = this._preloadingTracks,
              n = r[t];
            if (n) return n;
            tl.info("Preloading track", t);
            let a = { manifestLatency: 0, resolveLatency: 0 },
              s = this._createContent(e, a, !0)
                .then((e) => {
                  if (e.strategy !== S.MSE) return e;
                  let t = e.getSegmentForTime(0);
                  return t ? e.getBufferSetForSegment(t).then(() => e) : e;
                })
                .then(
                  (e) => (i.set(t, e), delete r[t], tl.info("Cached", t), a)
                )
                .catch(
                  (e) => (
                    delete r[t],
                    tl.warn("Preloading error", e),
                    this.emit(T.PLAYER_PRELOADING_ERROR, {
                      error: e,
                      track: e.track || null,
                      canPlayNext: !("canPlayNext" in e) || e.canPlayNext,
                      preloading: !0,
                    }),
                    Promise.reject(e)
                  )
                );
            return (r[t] = s), s;
          }
          togglePlay() {
            return this._isPlaying() ? this.pause() : this.resume();
          }
          setSubtitleLanguage(e) {
            this._subtitleManager.setLanguage(e);
          }
          getSubtitleLanguages() {
            return this._subtitleManager.getAvailableLanguages();
          }
          getActiveSubtitleLanguage() {
            return this._subtitleManager.getActiveLanguage();
          }
          deactivateCueEvents() {
            this._subtitleManager.deactivateListeners();
          }
          activateCueEvents() {
            this._subtitleManager.activateListeners();
          }
          setVolume(e, t) {
            if (
              !this.emitSync(T.PLAYER_BEFORE_VOLUME_CHANGE, {
                volume: e,
                options: t,
              }).defaultPrevented
            ) {
              if (e < 0 || e > 1)
                throw new q(
                  L.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE,
                  "Volume should be in range [0, 1]"
                );
              (this._playerVolume = e),
                this._player &&
                  (this._muted && e > 0 && this.setMuted(!1),
                  (this._player.volume = this._cubicVolume ? e * e * e : e));
            }
          }
          getVolume() {
            return this._playerVolume;
          }
          getPlayerState() {
            var e, t, i, r;
            let n = this._player,
              a = this._currentContent,
              s = {
                src: (null == n ? void 0 : n.src)
                  ? `data:${(null == a ? void 0 : a.getFileId()) || "unknown"}`
                  : void 0,
                height: (null == n ? void 0 : n.clientHeight) || 0,
                width: (null == n ? void 0 : n.clientWidth) || 0,
              },
              o = {};
            if (a) {
              let e = a.getMediaTypeMimeTypes();
              (o.audio_format = e.audio),
                (o.video_format = e.video),
                "video" === a.getMediaType() &&
                  n instanceof HTMLVideoElement &&
                  ((o.video_height = n.videoHeight),
                  (o.video_width = n.videoWidth),
                  (s.poster = n.poster));
            }
            let l = null;
            if (eK(a)) {
              let e = a.getTrackingEvents();
              e &&
                (l = {
                  mute: e.mute,
                  unmute: e.unmute,
                  rewind: e.rewind,
                  fullscreen: e.fullscreen,
                  accept_invitation_linear: e.accept_invitation_linear,
                  close_linear: e.close_linear,
                  exit_fullscreen: e.exit_fullscreen,
                });
            }
            return {
              playing: !(null == n ? void 0 : n.paused),
              position: n ? tc(n.currentTime) : 0,
              duration: n ? tc(n.duration) : 0,
              volume: null !== (t = this._playerVolume) && void 0 !== t ? t : 1,
              muted: this._muted,
              loop:
                null !== (i = null == n ? void 0 : n.loop) && void 0 !== i && i,
              playback_speed:
                null !== (r = null == n ? void 0 : n.playbackRate) &&
                void 0 !== r
                  ? r
                  : 0,
              playback_speed_selected: this._playerSpeed,
              buffering: this._rebuffering,
              media_type: (null == a ? void 0 : a.getMediaType()) || null,
              media_info: o,
              player_element: s,
              content_metadata:
                (null == a ? void 0 : a.getContentMetadata()) || {},
              tracking_data: l,
            };
          }
          getPlayerPosition() {
            return this._player ? tc(this._player.currentTime) : 0;
          }
          seek(e) {
            var t;
            if (!this._player) return;
            let i =
                null === (t = this._abortController) || void 0 === t
                  ? void 0
                  : t.signal,
              r = () => {
                if (!this._player || (null == i ? void 0 : i.aborted)) {
                  tl.info("Seek dropped: operation aborted.");
                  return;
                }
                let t = e / 1e3;
                t < 0
                  ? (t = 0)
                  : t >= this._player.duration && (t = this._player.duration),
                  (this._player.currentTime = t);
              };
            this._loaded ? r() : this.once(T.PLAYER_LOAD, r),
              this._getRebufferingLatency().then((e) => {
                (null != i && i.aborted) ||
                  this._tracker.trackSeekRebuffering(e);
              });
          }
          pause() {
            return this._audioProcessor
              .suspend()
              .then(() =>
                this._player && this._isPlaying()
                  ? (this._emitReporting("pause"),
                    Promise.resolve(this._player.pause()))
                  : Promise.resolve()
              );
          }
          resume() {
            return this._audioProcessor
              .resume()
              .then(() =>
                this._player && !this._isPlaying()
                  ? (this._emitReporting("resume"),
                    Promise.resolve(this._player.play()))
                  : Promise.resolve()
              );
          }
          stop(e, t) {
            var i, r, n;
            let a = [],
              s = e || {};
            this.emit(T.PLAYER_BEFORE_STOP, {
              timestamp: Date.now(),
              logData: s,
            }),
              null === (i = this._abortController) || void 0 === i || i.abort(),
              this._tracker.trackStopped(
                this._player ? tc(this._player.currentTime) : -1,
                e,
                this.getStatistics() || void 0
              ),
              this._bufferManager.abort(!0),
              this._emeManager && a.push(this._emeManager.destroySessions());
            let o = this._player;
            if (o) {
              this._subtitleManager.clear(),
                (this._fatalOnNextError = this._shouldNextErrorBeFatal()),
                this._fatalOnNextError &&
                  tl.warn(
                    "MediaError detected: next immediate media error will be fatal."
                  );
              let e = o.src;
              if (e)
                td.test(e) && URL.revokeObjectURL(e), o.removeAttribute("src");
              else {
                let e = eA(o.getElementsByTagName("source"));
                for (let t of (tl.info(
                  `HTMLSourceElements to removed: ${e.length}`
                ),
                e))
                  o.removeChild(t);
                tl.info("Releasing HLS URLs");
              }
              o.load();
            }
            null === (r = this._currentContent) || void 0 === r || r.unload();
            let l = this._currentContent && this._currentContent.getMediaType();
            return (
              o &&
                l &&
                (null === (n = this._playerContainerManager) ||
                  void 0 === n ||
                  n.eject(o, l, t),
                o.ownerDocument !== document && document.adoptNode(o)),
              this.emit(T.PLAYER_STOPPED, null),
              Promise.all(a).then(() => !0)
            );
          }
          setMuted(e = !0) {
            let t = this._player;
            t &&
              ((this._muted = e),
              (t.muted = e),
              this.emitSync(T.PLAYER_MUTED_CHANGED, { muted: e }));
          }
          hideSubtitles() {
            this._subtitleManager.hide();
          }
          showSubtitles() {
            this._subtitleManager.show();
          }
          areSubtitlesShown() {
            return this._subtitleManager.visible();
          }
          getKeySystemInfo() {
            return this._emeManager
              ? this._emeManager.getKeySystemInfo()
              : Promise.resolve(null);
          }
          getVideoVariants() {
            let e = this._currentContent;
            if ((null == e ? void 0 : e.getMediaType()) !== "video") return [];
            let t = [];
            if (!eB(e)) return t;
            for (let i of e.getMediaProfileInfo().video.available)
              t.push({
                width: i.video_width,
                height: i.video_height,
                bitrate: i.video_bitrate,
              });
            return t;
          }
          setPreferredBitrate(e) {
            return "number" != typeof e
              ? Promise.resolve(P.INVALID)
              : ((this._preferredBitrate = e),
                this._currentContent &&
                  "video" === this._currentContent.getMediaType() &&
                  e > 0 &&
                  this._bufferManager.abort(!0),
                this._abrManager.overrideBitrate(e),
                Promise.resolve(P.SUCCESS));
          }
          getCurrentBandwidth() {
            return this._abrManager.getBandwidthEstimate();
          }
          setBackgrounded(e) {
            this._abrManager.overrideBitrate(
              e ? 1e-32 : this._preferredBitrate
            );
          }
          setVideoResolution(e) {
            var t, i, r;
            (this._videoResolution = Object.assign(
              Object.assign({}, this._videoResolution),
              e
            )),
              (r = this._currentContent) &&
                "setVideoResolution" in r &&
                (null === (i = (t = this._currentContent).setVideoResolution) ||
                  void 0 === i ||
                  i.call(t, this._videoResolution));
          }
          activateElement() {
            var e;
            return this._playerActivated || !this._player || this._player.src
              ? (this._audioProcessor.resume(), !1)
              : (null === (e = this._player) || void 0 === e || e.load(),
                (this._playerActivated = !0),
                !0);
          }
          getMediaConfig() {
            return void 0 === this._mediaConfig
              ? (function (e, t) {
                  let i = t || tp("video"),
                    r = (e) => {
                      i.canPlayType("audio/mp3") &&
                        (e.formats.audio.push("audio/mp3"),
                        e.formatsInfo.audio.push({
                          mimeType: "audio/mp3",
                          codec: "mp3",
                          contentType: 'audio/mp3; codecs="mp3"',
                        }),
                        (e.supports.unprotected_audio = !0));
                    };
                  if (e)
                    return e.getKeySystemInfo().then((e) => {
                      let { audioFormats: t, videoFormats: i } = e,
                        n = {
                          supports: {
                            protected_audio: !!t.length,
                            unprotected_audio: !0,
                            protected_video: !!i.length,
                            unprotected_video: !0,
                          },
                          formats: {
                            audio: t.map((e) => e.contentType),
                            video: i.map((e) => e.contentType),
                          },
                          formatsInfo: { audio: [...t], video: [...i] },
                        };
                      return (
                        (n.keysystem = e.keySystem),
                        (n.keysystem_impl = e.keySystemImpl),
                        r(n),
                        n
                      );
                    });
                  let n =
                      "undefined" != typeof window && window.MediaSource
                        ? (e) => MediaSource.isTypeSupported(e)
                        : (e) =>
                            "probably" === i.canPlayType(e) ||
                            "probably" === i.canPlayType(e.split(";")[0]),
                    a = ef([ep[0]], n),
                    s = [],
                    o = [],
                    l = [],
                    d = [];
                  if (a) {
                    let { audioCapabilities: e, videoCapabilities: t } = a;
                    for (let t of e)
                      s.push(t.contentType), l.push(em(t.contentType));
                    for (let e of t)
                      o.push(e.contentType), d.push(em(e.contentType));
                  }
                  let _ = {
                    supports: {
                      protected_audio: !1,
                      unprotected_audio: !!s.length,
                      protected_video: !1,
                      unprotected_video: !!o.length,
                    },
                    formats: { audio: s, video: o },
                    formatsInfo: { audio: l, video: d },
                  };
                  return r(_), Promise.resolve(_);
                })(this._emeManager, this._player).then(
                  (e) => ((this._mediaConfig = e), this._mediaConfig)
                )
              : Promise.resolve(this._mediaConfig);
          }
          setPlaybackSpeed(e) {
            return (
              !!isFinite(e) &&
              !(e <= 0) &&
              ((this._playerSpeed = null != e ? e : 1),
              this._setPlaybackRate(),
              !0)
            );
          }
          getStatistics() {
            return this._player && this._currentContent
              ? this._statistics.getSample(this._player, this._currentContent)
              : null;
          }
          getAudioProcessor() {
            return this._audioProcessor;
          }
        }
        var tE = i(51952);
        class tm extends Error {
          constructor(e, t) {
            super(t),
              (this.debug = {}),
              (this.name = "LoggingError"),
              (this.message = t),
              (this.code = e);
          }
        }
        var ty = { tagged: "7.39.0-70e5e54c", version: "7.39.0" };
        let tv = B.P.forTag("playback.logger");
        class tg extends G.vp {
          constructor(e) {
            super(),
              (this._currentTrackingData = null),
              (this._sequenceId = 0),
              (this._sequenceSessionStorage = {}),
              (this._sessionId = "0"),
              (this._transport = e.transport),
              (this._logSender = e.logSender),
              (this._player = e.player),
              this._init();
          }
          static create(e) {
            return new tg(e);
          }
          _init() {
            let e = this._player;
            e.on(T.PLAYER_LOAD, this._onPlayerLoad.bind(this)),
              e.on(T.PLAYER_ERROR, this._onError.bind(this, !1)),
              e.on(T.PLAYER_WARNING, this._onError.bind(this, !0)),
              e.on(T.PLAYER_PRELOADING_ERROR, this._onError.bind(this, !1)),
              e.on(
                T.PLAYER_TRACKING_DATA_CREATED,
                this._onTrackingDataCreated.bind(this)
              ),
              e.on(
                T.PLAYER_TRACKING_DATA_FINALIZED,
                this._onTrackingDataFinalized.bind(this)
              ),
              e.on(T.PLAYER_PLAYBACK_START, this._onPlaybackStart.bind(this));
          }
          _emitError(e, t) {
            this.emit(T.LOGGER_ERROR, { error: e, trackingData: t });
          }
          _onError(e, t) {
            var i, r, n;
            let a = t.data,
              s = this._currentTrackingData;
            if (!s || s.noLog) return;
            let o = a.error,
              l =
                null !== (i = null == o ? void 0 : o.debug) && void 0 !== i
                  ? i
                  : {};
            l.position = "position" in a ? a.position : 0;
            let d = {
              track: a.track || {},
              debug: l,
              preloading: "preloading" in a && !!a.preloading,
              session_id: this._sessionId,
              playback_id: s.playbackId || null,
              player_play_id: "playId" in a ? a.playId : null,
              http_status_code:
                null !== (r = null == o ? void 0 : o.status) && void 0 !== r
                  ? r
                  : null,
              license_server:
                null !== (n = null == o ? void 0 : o.licenseServer) &&
                void 0 !== n
                  ? n
                  : null,
            };
            this._logError(o.code || L.UNKNOWN, o, d, s, e);
          }
          _onPlayerLoad(e) {
            let t = e.data.logData;
            if (t) {
              if (t.impressionURLs)
                for (let e of t.impressionURLs) this._logImpression(e);
              else t.impressionURL && this._logImpression(t.impressionURL);
            }
          }
          _onPlaybackStart(e) {
            let t = e.data.trackingData;
            t.noLog || t.noStats || this._logPlaybackStart(t);
          }
          _onTrackingDataCreated(e) {
            let t = e.data.trackingData;
            if (t.noLog) {
              this._currentTrackingData = null;
              return;
            }
            (this._currentTrackingData = t),
              this._setSessionId(),
              t.noTSV || this._setSequenceId();
          }
          _setSessionId() {
            this._sessionId = this._transport.getInitTime().toString();
          }
          _setSequenceId() {
            this._sessionId &&
              (this._sequenceId = this._getSequenceId(this._sessionId));
          }
          _onTrackingDataFinalized(e) {
            let t = e.data.trackingData;
            if (t.noLog) return;
            let i =
              this._sessionId !== this._transport.getInitTime().toString();
            if ((i && this._setSessionId(), t.playbackId && !t.noTSV)) {
              if ((i && this._setSequenceId(), !t.playIntended && !t.played)) {
                this._rollbackSequenceId(this._sessionId);
                return;
              }
              this._logTrackStreamVerification(t);
            }
            t.noStats || this._logPlaybackStats(t);
          }
          _logTrackStreamVerification(e) {
            let t = {
              play_track: e.currentTrackUri,
              playback_id: e.playbackId,
              ms_played: e.msPlayed,
              ms_nominal_played: e.msNominalPlayed,
              session_id: this._sessionId,
              sequence_id: this._sequenceId,
              next_playback_id: e.nextPlaybackId,
              playback_service: e.playbackService,
            };
            tv.debug("Logged TrackStreamVerification", t),
              this._logSender.logTrackStreamVerification(t).catch((i) => {
                let r = new tm(
                  L.TSV_SENDING_FAILED,
                  i.message || "Unknown reason."
                );
                this._logError(r.code, i, t, e, !1), this._emitError(r, e);
              });
          }
          _logPlaybackStats(e) {
            let t = {
              play_track: e.currentTrackUri,
              file_id: e.fileId,
              playback_id: e.playbackId,
              internal_play_id: e.internalPlayId,
              memory_cached: e.memoryCached,
              persistent_cached: e.persistentCached,
              audio_format: e.audioCodec || "",
              video_format: e.videoCodec || "",
              manifest_id: e.fileId,
              protected: e.isProtected,
              key_system: e.keySystem,
              key_system_impl: e.keySystemImpl,
              urls_json: JSON.stringify(e.urls),
              start_time: e.loadTime,
              end_time: e.stopTime,
              external_start_time: e.externalLoadTime,
              ms_play_latency: e.msPlayLatency,
              ms_init_latency: e.msInitLatency,
              ms_head_latency: e.msHeadLatency,
              ms_manifest_latency: e.msManifestLatency,
              ms_resolve_latency: e.msResolveLatency,
              ms_license_session_latency: e.msLicenseSessionLatency,
              ms_license_generation_latency: e.msLicenseGenerationLatency,
              ms_license_request_latency: e.msLicenseRequestLatency,
              ms_license_update_latency: e.msLicenseUpdateLatency,
              ms_played: e.msPlayed,
              ms_nominal_played: e.msNominalPlayed,
              ms_file_duration: e.msFileDuration,
              ms_actual_duration: e.msActualDuration,
              ms_metadata_duration: e.msMetadataDuration,
              ms_start_position: e.startPosition,
              ms_end_position: e.position,
              ms_initial_rebuffer: e.msInitialRebuffering,
              ms_seek_rebuffer: e.msSeekRebuffering,
              ms_seek_rebuffer_longest: e.maxMsSeekRebuffering,
              ms_stall_rebuffer: e.msStalled,
              ms_stall_rebuffer_longest: e.maxMsStalled,
              n_stalls: e.nStalls,
              n_rendition_upgrade: e.nRenditionUpgrade,
              n_rendition_downgrade: e.nRenditionDowngrade,
              bps_bandwidth_max: e.bpsBandwidthMax,
              bps_bandwidth_min: e.bpsBandwidthMin,
              bps_bandwidth_avg: e.bpsBandwidthAvg,
              n_seekback: e.nSeeksBackward,
              n_seekforward: e.nSeeksForward,
              start_bitrate: e.startBitrate || e.bitrate || 0,
              audio_quality: e.audioQuality,
              time_weighted_bitrate: e.timeWeightedBitrate,
              reason_start: e.reasonStart,
              reason_end: e.reasonEnd,
              initially_paused: !e.playIntended,
              had_error: e.hadError,
              n_warnings: e.nWarnings,
              n_navigator_offline: e.nOffline,
              session_id: this._sessionId,
              sequence_id: this._sequenceId,
              client_id: e.clientId,
              correlation_id: e.correlationId,
              n_dropped_video_frames: e.droppedVideoFrames,
              n_total_video_frames: e.totalVideoFrames,
              resolution_max: e.maxResolution || 0,
              resolution_min: e.minResolution || 0,
              total_bytes: e.totalBytes,
              strategy: e.strategy,
            };
            tv.info("Logging PlaybackStats"),
              this._logSender.logJSSDKPlaybackStats(t).catch((i) => {
                let r = new tm(
                  L.PLAYBACK_STATS_SENDING_FAILED,
                  i.message || "Unknown reason."
                );
                this._logError(r.code, i, t, e, !1), this._emitError(r, e);
              });
          }
          _logPlaybackStart(e) {
            let t = {
              play_track: e.currentTrackUri,
              file_id: e.fileId,
              playback_id: e.playbackId,
              session_id: this._sessionId,
              ms_start_position: e.startPosition,
              initially_paused: !e.playIntended,
              client_id: e.clientId,
              correlation_id: e.correlationId,
            };
            tv.info("Logging PlaybackStart"),
              this._logSender.logJSSDKPlaybackStart(t).catch((i) => {
                let r = new tm(
                  L.PLAYBACK_START_SENDING_FAILED,
                  i.message || "Unknown reason."
                );
                this._logError(r.code, i, t, e, !1), this._emitError(r, e);
              });
          }
          _getSequenceId(e) {
            let t = this._sequenceSessionStorage[e];
            return (
              t || (t = 0),
              t + 1 >= 9007199254740991 && (t = 0),
              (this._sequenceSessionStorage[e] = t + 1),
              t
            );
          }
          _rollbackSequenceId(e) {
            let t = this._sequenceSessionStorage[e];
            t && (this._sequenceSessionStorage[e] = Math.max(t - 1, 0));
          }
          _logImpression(e) {
            this._transport.request(e, { forget: !0 }).catch(function (e) {
              tv.warn("Unable to send impression request", e);
            });
          }
          _logError(e, t, i, r, n) {
            let a = {
              source: "playback",
              source_version: ty.tagged || tE.eV.UNKNOWN,
              type: e || tE.eV.UNKNOWN,
              message: (t && t.message) || tE.eV.EMPTY,
              stack: '""',
              json_data: JSON.stringify(i || {}),
              json_data_version: "1.0.0",
              client_id: r.clientId,
              correlation_id: r.correlationId,
            };
            n
              ? this._logSender
                  .logJSSDKWarning(a)
                  .catch((e) => tv.warn("Failed to log warning", a, e))
              : this._logSender
                  .logJSSDKError(a)
                  .catch((e) => tv.warn("Failed to log error", a, e));
          }
        }
        class tR extends Error {
          constructor(e = L.STORAGE_ERROR, t = "Storage Error") {
            super(t),
              (this.status = -1),
              (this.fileId = ""),
              (this.debug = {}),
              (this.canPlayNext = !0),
              (this.code = e),
              (this.message = t),
              (this.name = "StorageError");
          }
        }
        let tS = B.P.forTag("playback.storage_resolve");
        class tT {
          constructor(e) {
            this._transport = e;
          }
          _parseResponse(e, t) {
            var i;
            let r;
            if (200 !== t.status)
              return (
                ((r = new tR(
                  L.STORAGE_FAILED_WITH_STATUS,
                  `Storage Resolve responded with ${t.status}`
                )).status = t.status),
                (r.fileId = e),
                Promise.reject(r)
              );
            let n = t.body;
            return (
              null === (i = null == n ? void 0 : n.cdnurl) || void 0 === i
                ? void 0
                : i.length
            )
              ? Promise.resolve({
                  uri: n.cdnurl[0],
                  uris: n.cdnurl,
                  protection: "cenc",
                })
              : (((r = new tR(
                  L.STORAGE_RETURNED_NO_TRACKS,
                  `Storage Resolve returned no tracks for fileId ${e}`
                )).fileId = e),
                Promise.reject(r));
          }
          getCDNURL(e, t) {
            tS.info("Requesting CDN URL for ", e);
            let i = "files/audio/interactive",
              r = t ? `v2/${i}/${t}/${e}` : `${i}/${e}`,
              n = `@webgate/storage-resolve/${r}?version=10000000&product=9&platform=39&alt=json`;
            return this._transport
              .request(n, {
                responseType: "json",
                retry: {
                  condition: (e, t) => {
                    let i = e.getStatusFamily();
                    return (
                      429 === e.status ||
                      i === t.SERVER_ERROR ||
                      i === t.CONNECTION_ERROR
                    );
                  },
                },
              })
              .then(this._parseResponse.bind(this, e));
          }
          getManifest(e) {
            let t = `https://seektables.scdn.co/seektable/${e}.json`;
            return (
              tS.info("Requesting JSON manifest for ", e),
              this._transport
                .request(t, {
                  responseType: "json",
                  retry: {
                    condition: (e, t) => {
                      let i = e.getStatusFamily();
                      return (
                        429 === e.status ||
                        i === t.SERVER_ERROR ||
                        i === t.CONNECTION_ERROR
                      );
                    },
                  },
                })
                .then((t) => {
                  let i;
                  return 200 !== t.status
                    ? (((i = new tR(
                        L.STORAGE_TRACK_MANIFEST_FAILED,
                        `Track manifest request failed with status code ${t.status}`
                      )).debug.file_id = e),
                      (i.status = t.status),
                      Promise.reject(i))
                    : t.body
                    ? t.body
                    : (((i = new tR(
                        L.STORAGE_TRACK_MANIFEST_EMPTY,
                        "Received empty manifest."
                      )).debug.file_id = e),
                      (i.status = t.status),
                      Promise.reject(i));
                })
            );
          }
        }
        class tA extends Error {
          constructor(e, t) {
            super(t),
              (this.debug = {}),
              (this.name = "TrackingError"),
              (this.message = t),
              (this.code = e);
          }
        }
        class tL {
          constructor() {
            (this._version = "1.0.0"), (this._map = {});
          }
          clear() {
            this._map = {};
          }
          track(e, t) {
            let i = this._map[e];
            i ||
              ((i = { url: e, segments: 0, bandwidths: [], totalBandwidth: 0 }),
              (this._map[e] = i)),
              (i.segments += 1),
              i.bandwidths.push(t.bandwidth),
              (i.totalBandwidth += t.bandwidth);
          }
          toJSON() {
            let e = [];
            for (let t in this._map) {
              if (!this._map[t]) continue;
              let i = this._map[t];
              i &&
                e.push({
                  url: t,
                  segments: i.segments,
                  avg_bw: parseFloat(
                    (i.totalBandwidth / i.bandwidths.length).toFixed(7)
                  ),
                });
            }
            return { version: this._version, urls: e };
          }
        }
        class tP {
          constructor() {
            (this._bitrates = {}),
              (this._isFinalized = !1),
              (this._needsEndSegment = !1),
              (this._segments = []),
              (this._cdnURLTracker = new tL()),
              (this.currentSpeed = 1),
              (this.audioCodec = null),
              (this.bitrate = 0),
              (this.audioQuality = void 0),
              (this.urls = {}),
              (this.currentTrackUri = ""),
              (this.displayTrack = ""),
              (this.externalLoadTime = 0),
              (this.fileId = ""),
              (this.gaiaDevId = "none"),
              (this.hadError = !1),
              (this.internalPlayId = ""),
              (this.isProtected = !1),
              (this.keySystem = ""),
              (this.keySystemImpl = ""),
              (this.lastPlayPosition = -1),
              (this.loadTime = 0),
              (this.localTimeMs = -1),
              (this.maxContinuous = 0),
              (this.msInitialRebuffering = 0),
              (this.maxMsSeekRebuffering = 0),
              (this.maxMsStalled = 0),
              (this.memoryCached = !1),
              (this.msActualDuration = 0),
              (this.msMetadataDuration = 0),
              (this.msFileDuration = 0),
              (this.msHeadLatency = null),
              (this.msInitLatency = null),
              (this.msKeyLatency = null),
              (this.msLicenseGenerationLatency = null),
              (this.msLicenseRequestLatency = null),
              (this.msLicenseSessionLatency = null),
              (this.msLicenseUpdateLatency = null),
              (this.msManifestLatency = null),
              (this.msPlayed = 0),
              (this.msNominalPlayed = 0),
              (this.msPlayedUnion = 0),
              (this.msPlayLatency = null),
              (this.msResolveLatency = null),
              (this.msSeekRebuffering = 0),
              (this.msSeeksBackward = 0),
              (this.msSeeksForward = 0),
              (this.nextPlaybackId = ""),
              (this.nOffline = 0),
              (this.noLog = !1),
              (this.noTSV = !1),
              (this.noStats = !1),
              (this.nWarnings = 0),
              (this.msStalled = 0),
              (this.nSeeksBackward = 0),
              (this.nSeeksForward = 0),
              (this.nSpeedChanges = 0),
              (this.nStalls = 0),
              (this.nRenditionUpgrade = 0),
              (this.nRenditionDowngrade = 0),
              (this.bpsBandwidthMax = 0),
              (this.bpsBandwidthMin = 0),
              (this.bpsBandwidthAvg = 0),
              (this.totalBandwidth = 0),
              (this.lastBitrate = 0),
              (this.persistentCached = !1),
              (this.playbackId = ""),
              (this.playContext = ""),
              (this.played = !1),
              (this.position = 0),
              (this.reasonEnd = "unknown"),
              (this.reasonStart = "unknown"),
              (this.referrer = "unknown"),
              (this.referrerVendor = "unknown"),
              (this.referrerVersion = "unknown"),
              (this.sourceEnd = "unknown"),
              (this.sourceStart = "unknown"),
              (this.startPosition = 0),
              (this.stopTime = 0),
              (this.streamingRule = "none"),
              (this.timeWeightedBitrate = 0),
              (this.totalBytes = 0),
              (this.playIntended = !1),
              (this.videoCodec = null),
              (this.clientId = "unknown"),
              (this.correlationId = "unknown"),
              (this.droppedVideoFrames = 0),
              (this.totalVideoFrames = 0),
              (this.maxResolution = 0),
              (this.minResolution = 0),
              (this.playbackService = ""),
              (this.strategy = "");
          }
          static create() {
            return new tP();
          }
          _calculateUnion() {
            let e = this._segments.slice(0),
              t = 0,
              i = 0,
              r = 0,
              n = 0,
              a = 0,
              s = 0,
              o = this.maxContinuous;
            for (; a < e.length; a++)
              a % 2 != 0 &&
                void 0 !== e[a - 1] &&
                "start" === e[a - 1].type &&
                (o = (s = e[a].time - e[a - 1].time) > o ? s : o);
            for (
              this.maxContinuous = o, e.sort((e, t) => e.time - t.time);
              n < e.length;
              n++
            )
              "start" === e[n].type && (0 === i && (r = n), ++i),
                "end" === e[n].type && 0 == --i && (t += e[n].time - e[r].time);
            return t;
          }
          _calculateWeightedBitrate(e) {
            let t = this._bitrates,
              i = 0;
            for (let r in t)
              r &&
                t.hasOwnProperty(r) &&
                e > 0 &&
                (i += (parseInt(r, 10) * t[r]) / e);
            return Math.round(i);
          }
          registerVideoVariant(e) {
            let t = e.bitrate;
            t &&
              ((this._bitrates[t] = this._bitrates[t] || 0),
              this.startBitrate || (this.startBitrate = t)),
              e.audioProfile && (this.audioCodec = e.audioProfile.audio_codec),
              e.videoProfile &&
                ((this.videoCodec = e.videoProfile.video_codec),
                (this.lastBitrate = e.videoProfile.video_bitrate),
                (this.minResolution = e.videoProfile.video_resolution),
                (this.maxResolution = e.videoProfile.video_resolution));
          }
          addStartSegment() {
            this._segments.push({ type: "start", time: this.position }),
              (this._needsEndSegment = !0);
          }
          addEndSegment() {
            this._needsEndSegment &&
              (this._segments.push({ type: "end", time: this.position }),
              (this._needsEndSegment = !1));
          }
          addMSPlayed(e) {
            if (e) {
              if (e < 0)
                throw TypeError(`Cannot add negative msPlayed value: ${e}`);
              (this.msPlayed += e / this.currentSpeed),
                (this.msNominalPlayed += e);
            }
          }
          addSpeedChange(e) {
            ++this.nSpeedChanges, (this.currentSpeed = e);
          }
          trackBitrate(e, t) {
            let i = e || "dummy";
            (this._bitrates[i] = this._bitrates[i] || 0),
              (this._bitrates[i] += t);
          }
          trackBufferURL(e, t) {
            let i = e.substring(0, 5);
            "data:" !== i && "blob:" !== i && this._cdnURLTracker.track(e, t);
          }
          finalize() {
            if (this._isFinalized)
              throw new tA(
                L.TRACK_DATA_ALREADY_FINALIZED,
                "TrackData already finalized."
              );
            (this.msPlayedUnion = this._calculateUnion()),
              this.nSeeksBackward ||
                this.nSeeksForward ||
                this.nSpeedChanges ||
                ((this.msNominalPlayed = this.maxContinuous =
                  this.msPlayedUnion),
                (this.msPlayed = this.msNominalPlayed / this.currentSpeed),
                (this.nSpeedChanges = 0));
            let e = this.msPlayed;
            return (
              (this.timeWeightedBitrate = this._calculateWeightedBitrate(e)),
              this.startBitrate || (this.startBitrate = this.bitrate),
              (this.urls = this._cdnURLTracker.toJSON()),
              (this._isFinalized = !0),
              !0
            );
          }
          getURLsJSON() {
            var e, t;
            return null !==
              (t =
                null === (e = this._cdnURLTracker.toJSON().urls) || void 0 === e
                  ? void 0
                  : e.map(({ url: e }) => e)) && void 0 !== t
              ? t
              : [];
          }
          getPlaybackStats() {
            let e;
            switch (this.keySystem) {
              case A.WIDEVINE:
                e = "widevine";
                break;
              case A.PLAYREADY:
              case A.PLAYREADY_HARDWARE:
                e = "playready";
                break;
              default:
                e = "none";
            }
            return {
              ms_total_est: this.msActualDuration,
              ms_metadata_duration: this.msMetadataDuration,
              ms_manifest_latency: this.msManifestLatency || 0,
              ms_latency: this.msPlayLatency || 0,
              start_offset_ms: this.startPosition,
              ms_initial_buffering: this.msInitialRebuffering,
              ms_initial_rebuffer: this.msInitialRebuffering,
              ms_seek_rebuffering: this.msSeekRebuffering,
              ms_stalled: this.msStalled,
              max_ms_seek_rebuffering: this.maxMsSeekRebuffering,
              max_ms_stalled: this.maxMsStalled,
              n_stalls: this.nStalls,
              n_rendition_upgrade: this.nRenditionUpgrade,
              n_rendition_downgrade: this.nRenditionDowngrade,
              bps_bandwidth_max: this.bpsBandwidthMax,
              bps_bandwidth_min: this.bpsBandwidthMin,
              bps_bandwidth_avg: this.bpsBandwidthAvg,
              audiocodec: this.audioCodec
                ? this.audioCodec.toLowerCase()
                : void 0,
              videocodec: this.videoCodec
                ? this.videoCodec.toLowerCase()
                : void 0,
              start_bitrate: this.startBitrate || this.bitrate || void 0,
              full_screen: void 0,
              time_weighted_bitrate: this.timeWeightedBitrate,
              buffering_percentage: void 0,
              prefetched_bytes: void 0,
              prefetched_bytes_loaded: void 0,
              prefetched_initial_bitrate: void 0,
              key_system: e,
              ms_key_latency: this.msKeyLatency || 0,
              total_bytes: this.totalBytes,
              local_time_ms: this.localTimeMs,
              ms_played_background: void 0,
              n_dropped_video_frames: this.droppedVideoFrames,
              n_total_video_frames: this.totalVideoFrames,
              resolution_max: this.maxResolution,
              resolution_min: this.minResolution,
              strategy: this.strategy,
            };
          }
          isFinalized() {
            return this._isFinalized;
          }
        }
        let tb = B.P.forTag("playback.tracker");
        class tI extends G.vp {
          constructor(e = {}) {
            super(),
              (this._playedThreshold = 31e3),
              (this._playedThresholdReached = !1),
              (this._trackingData = null),
              (this._quartileTrackingEvents = {
                firstEventFired: !1,
                midEventFired: !1,
                thirdEventFired: !1,
              }),
              (this._playedThreshold = e.playerThreshold || 31e3);
          }
          static create(e) {
            return new tI(e);
          }
          _checkPlayedThreshold() {
            let e = this._trackingData;
            e &&
              this._playedThreshold &&
              !this._playedThresholdReached &&
              !(e.msPlayed < this._playedThreshold) &&
              ((this._playedThresholdReached = !0),
              this.emit(T.TRACKER_PLAYED_THRESHOLD_REACHED, {
                played: (e && e.msPlayed) || 0,
                threshold: this._playedThreshold,
              }));
          }
          _checkPercentileThresholds() {
            let e = this._trackingData;
            if (!e) return;
            let t = e.msActualDuration || e.msFileDuration;
            if (!t) return;
            let i = Math.ceil(t / 4);
            !this._quartileTrackingEvents.firstEventFired &&
              e.position >= i &&
              ((this._quartileTrackingEvents.firstEventFired = !0),
              this.emit(T.TRACKER_FIRST_QUARTILE, null)),
              !this._quartileTrackingEvents.midEventFired &&
                e.position >= 2 * i &&
                ((this._quartileTrackingEvents.midEventFired = !0),
                this.emit(T.TRACKER_MIDPOINT, null)),
              !this._quartileTrackingEvents.thirdEventFired &&
                e.position >= 3 * i &&
                ((this._quartileTrackingEvents.thirdEventFired = !0),
                this.emit(T.TRACKER_THIRD_QUARTILE, null));
          }
          getMSPlayed() {
            return this._trackingData ? this._trackingData.msPlayed : 0;
          }
          getStallsInformation() {
            return this._trackingData
              ? {
                  nStalls: this._trackingData.nStalls,
                  msTotalStalled: this._trackingData.msStalled,
                }
              : { nStalls: 0, msTotalStalled: 0 };
          }
          trackLoadStart(e, t, i, r, n) {
            let a = tP.create();
            (this._trackingData = a),
              (this._playedThresholdReached = !1),
              (this._quartileTrackingEvents = {
                firstEventFired: !1,
                midEventFired: !1,
                thirdEventFired: !1,
              }),
              (a.fileId = null != t ? t : ""),
              (a.currentTrackUri = e),
              (a.loadTime = Date.now()),
              (a.loadStartMonotonic = (0, j.q)()),
              (a.internalPlayId = i),
              (a.externalLoadTime = r.externalLoadTime || 0),
              (a.displayTrack = r.displayTrack || ""),
              (a.playbackId = r.playbackId || ""),
              (a.playContext = r.playContext || ""),
              (a.reasonStart = r.reason || "unknown"),
              (a.sourceStart = r.source || "unknown"),
              (a.clientId = r.clientId || ""),
              (a.correlationId = r.correlationId || ""),
              (a.playbackService = r.playbackService || "");
            let s = r.referrer || {};
            (a.referrer = void 0 !== s.name ? s.name : "unknown"),
              (a.referrerVersion =
                void 0 !== s.version ? s.version : "unknown"),
              (a.referrerVendor = void 0 !== s.vendor ? s.vendor : "unknown");
            let o = r.format || {};
            o.codec && (a.audioCodec = o.codec.toLowerCase()),
              o.bitrate && (a.bitrate = o.bitrate),
              o.audioQuality && (a.audioQuality = o.audioQuality),
              (a.gaiaDevId = r.deviceId || "none"),
              (a.noLog = r.noLog || !1),
              (a.noTSV = r.noTSV || !1),
              (a.noStats = r.noStats || !1),
              (a.contentMetadata = n),
              "number" == typeof (null == n ? void 0 : n.displayDuration) &&
                (a.msMetadataDuration = n.displayDuration),
              this.emit(T.TRACKER_TRACKING_DATA_CREATED, { trackingData: a });
          }
          trackBufferLoadStart() {
            let e = this._trackingData;
            e && (e.bufferLoadStartMonotonic = (0, j.q)());
          }
          trackBytesDownloaded(e) {
            let t = this._trackingData;
            t && (t.totalBytes += e);
          }
          trackLoadDone(e) {
            let t = this._trackingData;
            t &&
              (t.bufferLoadStartMonotonic &&
                (t.msInitLatency = (0, j.n)(t.bufferLoadStartMonotonic)),
              (t.localTimeMs = Date.now()),
              (t.position = e),
              t.addStartSegment());
          }
          trackPlay(e, t) {
            let i = this._trackingData;
            i &&
              (i.played ||
                this.emit(T.TRACKER_PLAYBACK_START, { trackingData: i }),
              (i.played = !0),
              (i.position = e),
              (i.startPosition = e),
              i.addSpeedChange(t || 1));
          }
          trackCanPlayThrough() {
            if (!this._trackingData) return;
            let e = (0, j.q)();
            this.trackHeadLatency(e);
          }
          trackPlayLatency(e = (0, j.q)()) {
            let t = this._trackingData;
            t &&
              !t.nSeeksBackward &&
              !t.nSeeksForward &&
              t.loadStartMonotonic &&
              (t.msPlayLatency = (0, j.n)(t.loadStartMonotonic, e));
          }
          trackHeadLatency(e = (0, j.q)()) {
            let t = this._trackingData;
            t &&
              t.bufferLoadStartMonotonic &&
              (t.msHeadLatency = (0, j.n)(t.bufferLoadStartMonotonic, e));
          }
          trackBufferURL(e, t) {
            let i = this._trackingData;
            i && i.trackBufferURL(e, t);
          }
          trackNavigatorOffline() {
            let e = this._trackingData;
            e && (e.nOffline += 1);
          }
          trackInitialRebuffering(e) {
            let t = this._trackingData;
            t && (t.msInitialRebuffering = e);
          }
          trackSeekRebuffering(e) {
            let t = this._trackingData;
            t &&
              (e > t.maxMsSeekRebuffering && (t.maxMsSeekRebuffering = e),
              (t.msSeekRebuffering += e));
          }
          trackMsStalled(e) {
            let t = this._trackingData;
            t &&
              (e > t.maxMsStalled && (t.maxMsStalled = e),
              (t.msStalled += e),
              t.nStalls++);
          }
          trackLoadFailed() {
            let e = this._trackingData;
            e &&
              (this.trackPlayLatency(), (e.position = 0), e.addStartSegment());
          }
          trackStopped(e, t, i) {
            var r, n, a, s;
            let o = this._trackingData;
            if (!o || o.isFinalized()) return;
            if (
              ((o.stopTime = Date.now()),
              o.lastPlayPosition >= 0 && e >= 0 && o.lastPlayPosition < e)
            ) {
              let t = e - o.lastPlayPosition;
              o.addMSPlayed(t);
            }
            o.addEndSegment(),
              (o.sourceEnd = t.source || "unknown"),
              (o.reasonEnd = t.reason || "unknown"),
              (o.nextPlaybackId = t.playbackId || ""),
              (o.droppedVideoFrames =
                null !==
                  (n =
                    null === (r = null == i ? void 0 : i.video) || void 0 === r
                      ? void 0
                      : r.droppedVideoFrames) && void 0 !== n
                  ? n
                  : 0),
              (o.totalVideoFrames =
                null !==
                  (s =
                    null === (a = null == i ? void 0 : i.video) || void 0 === a
                      ? void 0
                      : a.totalVideoFrames) && void 0 !== s
                  ? s
                  : 0),
              o.finalize(),
              tb.info("Tracker data finalized.");
            let l = o.getPlaybackStats();
            this.emit(T.TRACKER_TRACKING_DATA_FINALIZED, {
              trackingData: o,
              playbackStats: l,
            });
          }
          trackPositionChanged(e) {
            let t = this._trackingData;
            if (!t) return;
            let i = t.position;
            e !== i &&
              (t.addEndSegment(),
              e > i
                ? (t.nSeeksForward++, (t.msSeeksForward += e - i))
                : e < i && (t.nSeeksBackward++, (t.msSeeksBackward += i - e)),
              (t.position = e),
              (t.lastPlayPosition = -1),
              t.addStartSegment());
          }
          trackPlaying(e) {
            let t = this._trackingData;
            if (t) {
              if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                let i = e - t.lastPlayPosition;
                t.addMSPlayed(i);
              }
              (t.position = e), (t.lastPlayPosition = e);
            }
          }
          trackPaused(e) {
            let t = this._trackingData;
            if (t) {
              if (t.lastPlayPosition >= 0 && t.lastPlayPosition < e) {
                let i = e - t.lastPlayPosition;
                t.addMSPlayed(i);
              }
              (t.position = e), (t.lastPlayPosition = e);
            }
          }
          trackProgress(e, t) {
            let i = this._trackingData;
            if (!(null == i ? void 0 : i.played)) return;
            let r = 0;
            if (i.lastPlayPosition >= 0) {
              if ((r = e - i.lastPlayPosition) < 0) {
                tb.warn("Skipping msPlayed calculation: late progress event.");
                return;
              }
              i.addMSPlayed(r);
            }
            this._checkPlayedThreshold(),
              (i.position = e),
              (i.lastPlayPosition = e),
              this._checkPercentileThresholds(),
              t && i.trackBitrate(t, r);
          }
          trackSpeedChanged(e) {
            let t = this._trackingData;
            t && t.addSpeedChange(e);
          }
          trackVideoLoadStart(e) {
            let t = this._trackingData;
            t && t.registerVideoVariant(e);
          }
          trackWarning() {
            let e = this._trackingData;
            e && e.nWarnings++;
          }
          trackOffline() {
            let e = this._trackingData;
            e && e.nOffline++;
          }
          trackStrategy(e) {
            let t = this._trackingData;
            t && (t.strategy = e);
          }
          setActualDuration(e) {
            let t = this._trackingData;
            t && (t.msActualDuration = e);
          }
          setKeySystem(e) {
            let t = this._trackingData;
            t && (t.keySystem = e);
          }
          setKeySystemImpl(e) {
            let t = this._trackingData;
            t && (t.keySystemImpl = e);
          }
          setManifestLatency(e) {
            let t = this._trackingData;
            t && (t.msManifestLatency = e);
          }
          setPlayIntended(e) {
            let t = this._trackingData;
            t && (t.playIntended = e);
          }
          setKeyLatency(e) {
            let t = this._trackingData;
            t && (t.msKeyLatency = e);
          }
          setMemoryCached(e) {
            let t = this._trackingData;
            t && (t.memoryCached = e);
          }
          setPersistentCached(e) {
            let t = this._trackingData;
            t && (t.persistentCached = e);
          }
          setProtected(e) {
            let t = this._trackingData;
            t && (t.isProtected = e);
          }
          setHadError(e) {
            let t = this._trackingData;
            t && (t.hadError = e);
          }
          setLicenseSessionLatency(e) {
            let t = this._trackingData;
            t && (t.msLicenseSessionLatency = e);
          }
          setLicenseGenerationLatency(e) {
            let t = this._trackingData;
            t && (t.msLicenseGenerationLatency = e);
          }
          setLicenseRequestLatency(e) {
            let t = this._trackingData;
            t && (t.msLicenseRequestLatency = e);
          }
          setLicenseUpdateLatency(e) {
            let t = this._trackingData;
            t && (t.msLicenseUpdateLatency = e);
          }
          setResolveLatency(e) {
            let t = this._trackingData;
            t && (t.msResolveLatency = e);
          }
          setCalculatedDuration(e) {
            let t = this._trackingData;
            t && (t.msFileDuration = e);
          }
          setPlayedThreshold(e) {
            this._playedThreshold = e;
          }
          trackFragment(e) {
            let t = this._trackingData;
            if (!t) return;
            let { bandwidth: i, resolution: r } = e;
            r &&
              ((r < t.minResolution || !t.minResolution) &&
                (t.minResolution = r),
              r > t.maxResolution && (t.maxResolution = r)),
              (i < t.bpsBandwidthMin || !t.bpsBandwidthMin) &&
                (t.bpsBandwidthMin = i),
              i > t.bpsBandwidthMax && (t.bpsBandwidthMax = i),
              (t.bpsBandwidthAvg = t.bpsBandwidthAvg
                ? (t.bpsBandwidthAvg + i) / 2
                : i);
          }
          trackProfileChanged(e) {
            let t = this._trackingData;
            if (!t) return;
            let { bitrate: i } = e;
            i < t.lastBitrate && t.nRenditionDowngrade++,
              i > t.lastBitrate && t.nRenditionUpgrade++,
              (t.lastBitrate = i);
          }
        }
        class tD extends G.vp {
          constructor(e) {
            super(),
              (this._transport = e),
              (this._parseManifestResponse =
                this._parseManifestResponse.bind(this));
          }
          static create(e) {
            return new tD(e);
          }
          _parseManifestResponse(e) {
            var t;
            let i = e.metadata.startTime;
            if (200 !== e.status) {
              let t = new tR(
                L.STORAGE_VIDEO_MANIFEST_FAILED,
                `Video manifest request failed with status ${e.status}`
              );
              return (
                (t.status = e.status),
                this.emit(T.VIDEO_MANIFEST_RESOLVE_FAILED, {
                  url: e.url,
                  error: t,
                  start_time: i,
                }),
                Promise.reject(t)
              );
            }
            let r = e.body,
              n =
                null === (t = e.headers) || void 0 === t
                  ? void 0
                  : t.get("content-length");
            return (
              this.emit(T.VIDEO_MANIFEST_RESOLVED, {
                url: e.url,
                manifest_size: n ? parseInt(n, 10) : JSON.stringify(r).length,
                start_time: i,
                end_time: Date.now(),
              }),
              Promise.resolve(r)
            );
          }
          getInitSegmentURLs(e, t, i, r) {
            let n = "";
            i &&
              (n =
                e +
                t
                  .replace("{{profile_id}}", i.id.toString(10))
                  .replace("{{file_type}}", i.file_type));
            let a = "";
            return (
              r &&
                (a =
                  e +
                  t
                    .replace("{{profile_id}}", r.id.toString(10))
                    .replace("{{file_type}}", r.file_type)),
              { audio: n, video: a, audioLogging: n, videoLogging: a }
            );
          }
          getSegmentURLs(e, t, i, r, n) {
            let a = "";
            r &&
              (a =
                e +
                t
                  .replace("{{profile_id}}", r.id.toString(10))
                  .replace("{{file_type}}", r.file_type));
            let s = "";
            return (
              n &&
                (s =
                  e +
                  t
                    .replace("{{profile_id}}", n.id.toString(10))
                    .replace("{{file_type}}", n.file_type)),
              {
                audio: a.replace("{{segment_timestamp}}", i.toString()),
                video: s.replace("{{segment_timestamp}}", i.toString()),
                audioLogging: a,
                videoLogging: s,
              }
            );
          }
          getManifest(e, t = !1) {
            let i = `${
              t
                ? "@webgate/manifests/v9/unauth/json/sources"
                : "@webgate/manifests/v9/json/sources"
            }/${e}/options/supports_drm`;
            return this._transport
              .request(i, {
                authorize: !t,
                responseType: "json",
                parseResponseHeaders: !0,
                retry: {
                  condition: (e, t) => {
                    let i = e.getStatusFamily();
                    return (
                      429 === e.status ||
                      i === t.SERVER_ERROR ||
                      i === t.CONNECTION_ERROR
                    );
                  },
                },
                metadata: { startTime: Date.now() },
              })
              .then(this._parseManifestResponse);
          }
        }
        var tC = i(26659);
        class tO extends Error {
          constructor(e, t) {
            super(),
              (this.status = -1),
              (this.debug = {}),
              (this.canPlayNext = !0),
              (this.unrecoverable = !1),
              (this.name = "LicenseError"),
              (this.code = e),
              (this.message = t);
          }
          static fatal(e, t) {
            let i = new tO(e, t);
            return (i.unrecoverable = !0), (i.canPlayNext = !1), i;
          }
        }
        class tN {
          constructor(e) {
            (this._sdk = { name: "", version: "" }),
              (this._securityLevel = null),
              (this._urls = {}),
              e.sdk && (this._sdk = e.sdk),
              e.securityLevel && (this._securityLevel = e.securityLevel),
              (this._transport = e.transport),
              (this._useTestLicenseServer = !!e.useTestLicenseServer),
              this._transport.on(this._transport.EVENT_CONNECTION_ID, () => {
                this._urls = {};
              });
          }
          getFallbackLicenseURL(e, t) {
            switch (e) {
              case "com.widevine.alpha":
                return `@webgate/${
                  this._useTestLicenseServer
                    ? "widevine-license-test"
                    : "widevine-license"
                }/v1/${t}/license`;
              case "com.microsoft.playready":
                return `@webgate/playready-license/v1/${t}/license/{contentId}`;
              case "com.apple.fps.1_0":
                return `@webgate/fairplay-license/v1/${t}/license`;
              default:
                return;
            }
          }
          get(e, t) {
            let i = `${e}:${t}`,
              r = this._urls[i];
            if (r && r.expires > Date.now() + 6e4)
              return Promise.resolve(r.uri);
            let n = this._useTestLicenseServer
                ? "&use_test_license_server=true"
                : "",
              a = `@webgate/melody/v1/license_url?keysystem=${e}&mediatype=${t}&sdk_name=${this._sdk.name}&sdk_version=${this._sdk.version}${n}`;
            return this._transport
              .request(a, {
                responseType: "json",
                signal: (0, K.lS)(1e3),
                retry: {
                  condition: (e) => {
                    let t = e.getStatusFamily();
                    return (
                      429 === e.status ||
                      t === tC.S.SERVER_ERROR ||
                      t === tC.S.CONNECTION_ERROR
                    );
                  },
                },
              })
              .then(
                (r) => {
                  let n;
                  let a = r.body;
                  if (a && 200 === r.status)
                    return (
                      (a.expires *= 1e3),
                      (a.uri = `@webgate/${a.uri}`),
                      this._securityLevel &&
                        (a.uri += [
                          -1 !== a.uri.indexOf("?") ? "&" : "?",
                          "sl=",
                          this._securityLevel,
                        ].join("")),
                      (this._urls[i] = a),
                      a.uri
                    );
                  if (a) {
                    if (
                      400 === r.status &&
                      a &&
                      "deprecated-version" === a.code
                    )
                      n = tO.fatal(
                        L.LICENSE_RESOLVER_DEPRECATED_VERSION,
                        "This version of the SDK is no longer supported. Please upgrade"
                      );
                    else if (r.getStatusFamily() === tC.S.SERVER_ERROR) {
                      let i = this.getFallbackLicenseURL(e, t);
                      if (i) return i;
                      n = new tO(
                        L.LICENSE_RESOLVER_CANT_RESOLVE_URL,
                        `Unsupported keysystem ${e}`
                      );
                    } else
                      n = new tO(
                        L.LICENSE_RESOLVER_CANT_RESOLVE_URL,
                        `License URL endpoint responded with status ${r.status}`
                      );
                  } else
                    n = tO.fatal(
                      L.LICENSE_RESOLVE_INVALID_RESPONSE,
                      "License URL endpoint responded with invalid response"
                    );
                  return (n.status = r.status), Promise.reject(n);
                },
                (i) => {
                  if (i.code === K.JP.HTTP_REQUEST_TIMEOUT) {
                    let i = this.getFallbackLicenseURL(e, t);
                    if (i) return i;
                    new tO(
                      L.LICENSE_RESOLVER_CANT_RESOLVE_URL,
                      `Unsupported keysystem ${e}`
                    );
                  }
                  return Promise.reject(
                    new tO(
                      L.LICENSE_RESOLVER_CANT_RESOLVE_URL,
                      "License URL endpoint request failed"
                    )
                  );
                }
              );
          }
          remove(e, t) {
            this._urls[`${e}:${t}`] = null;
          }
        }
        class tM {
          constructor(e) {
            this._melodyLogger = new tE.Hx(e);
          }
          logTrackStreamVerification(e) {
            return this._melodyLogger.sendLog(
              "/v1/msg/batch",
              { type: "track_stream_verification", message: e },
              { batch: !0 }
            );
          }
          logJSSDKPlaybackStats(e) {
            return this._melodyLogger.sendLog(
              "/v1/msg/batch",
              { type: "jssdk_playback_stats", message: e },
              { batch: !0 }
            );
          }
          logJSSDKPlaybackStart(e) {
            return this._melodyLogger.sendLog(
              "/v1/msg/batch",
              { type: "jssdk_playback_start", message: e },
              { batch: !0 }
            );
          }
          logJSSDKError(e) {
            return this._melodyLogger.sendLog(
              "/v1/msg/batch",
              { type: "jssdk_error", message: e },
              { batch: !0 }
            );
          }
          logJSSDKWarning(e) {
            return this._melodyLogger.sendLog(
              "/v1/msg/batch",
              { type: "jssdk_warning", message: e },
              { batch: !0 }
            );
          }
        }
        ((c = O || (O = {}))[(c.ABORTED = 101)] = "ABORTED"),
          (c[(c.NETWORK = 102)] = "NETWORK"),
          (c[(c.MEDIA_DECODING = 103)] = "MEDIA_DECODING"),
          (c[(c.SRC_NOT_SUPPORTED = 104)] = "SRC_NOT_SUPPORTED"),
          (c[(c.EME = 105)] = "EME"),
          (c[(c.GENERIC = 100)] = "GENERIC");
        let tw = {
          [L.MEDIA_ABORTED]: O.ABORTED,
          [L.MEDIA_DECODING_ERROR]: O.MEDIA_DECODING,
          [L.MEDIA_NOT_SUPPORTED]: O.SRC_NOT_SUPPORTED,
          [L.MEDIA_NETWORK_ERROR]: O.NETWORK,
        };
        function tk(e) {
          var t;
          let i = e.match(/^https?:\/\/([^\/]+@)?([^\/?#]+)/);
          return null !== (t = null == i ? void 0 : i[2]) && void 0 !== t
            ? t
            : "";
        }
        ((p = N || (N = {})).READY = "playerready"),
          (p.VIDEO_CHANGE = "videochange"),
          (p.PLAY = "play"),
          (p.PLAYING = "playing"),
          (p.PAUSE = "pause"),
          (p.TIMEUPDATE = "timeupdate"),
          (p.SEEKING = "seeking"),
          (p.SEEKED = "seeked"),
          (p.ERROR = "error"),
          (p.ENDED = "ended"),
          (p.RENDITION_CHANGE = "renditionchange"),
          (p.REQUEST_COMPLETED = "requestcompleted"),
          (p.REQUEST_FAILED = "requestfailed"),
          (p.REQUEST_CANCELED = "requestcanceled");
        let tU = {
          player_is_paused: !0,
          player_width: 0,
          player_height: 0,
          video_source_height: 0,
          video_source_width: 0,
          player_is_fullscreen: void 0,
          player_autoplay_on: void 0,
          player_preload_on: void 0,
          video_source_url: void 0,
          video_source_mime_type: void 0,
          video_source_duration: void 0,
          video_poster_url: void 0,
          player_language_code: void 0,
        };
        class tF {
          constructor(e) {
            (this._playerId = `spotify-playback-${Date.now()}`),
              (this._currentContentInfo = null),
              (this._readyDeferred = (0, V.$)()),
              (this._isMuxInitialized = !1),
              (this._muxInitData = null),
              (this._player = e.player),
              (this._mux = e.mux),
              (this._getPlayheadTime = this._getPlayheadTime.bind(this)),
              (this._getStateData = this._getStateData.bind(this)),
              this._init(e);
          }
          static create(e) {
            return new tF(e);
          }
          _init(e) {
            Promise.all([Promise.resolve(e.deviceInfo)])
              .then(([t]) => {
                var i;
                (this._muxInitData = {
                  data: Object.assign(
                    {
                      env_key: e.envKey || "2qbjhhcl4u87btjbo7dh8vi2n",
                      player_name:
                        null !== (i = null == t ? void 0 : t.platform_name) &&
                        void 0 !== i
                          ? i
                          : null == t
                          ? void 0
                          : t.platform,
                      player_version: null == t ? void 0 : t.version,
                      viewer_device_manufacturer: null == t ? void 0 : t.brand,
                      viewer_device_category: null == t ? void 0 : t.type,
                      viewer_device_name: null == t ? void 0 : t.model,
                      player_software_name: e.sdk || "spotify-playback",
                      player_software_version: e.sdkVersion || ty.version,
                      player_mux_plugin_name: "spotify-playback-mux-reporter",
                      player_mux_plugin_version: ty.version,
                    },
                    e.muxCustomDimensions
                  ),
                  getPlayheadTime: this._getPlayheadTime,
                  getStateData: this._getStateData,
                }),
                  this._player.addListeners({
                    [T.PLAYER_BEFORE_LOAD]: this._onBeforeLoad.bind(this),
                    [T.PLAYER_PLAY]: this._onPlay.bind(this),
                    [T.PLAYER_PLAYING]: this._onPlaying.bind(this),
                    [T.PLAYER_PAUSED]: this._onPause.bind(this),
                    [T.PLAYER_PROGRESS]: this._onProgress.bind(this),
                    [T.PLAYER_SEEKING]: this._onSeeking.bind(this),
                    [T.PLAYER_POSITION_CHANGED]:
                      this._onPositionChanged.bind(this),
                    [T.PLAYER_ERROR]: this._onError.bind(this),
                    [T.PLAYER_ENDED]: this._onEnded.bind(this),
                    [T.PLAYER_DURATION_CHANGED]:
                      this._onDurationChanged.bind(this),
                    [T.PLAYER_VIDEO_RESIZED]: this._onVideoResized.bind(this),
                    [T.PLAYER_VIDEO_PROFILE_CHANGED]:
                      this._onVideoProfileChanged.bind(this),
                    [T.PLAYER_FRAGMENT_FETCHED]:
                      this._onFragmentFetched.bind(this),
                    [T.PLAYER_FRAGMENT_FETCH_ERROR]:
                      this._onFragmentFetchError.bind(this),
                    [T.PLAYER_VIDEO_MANIFEST_RESOLVED]:
                      this._onVideoManifestResolved.bind(this),
                    [T.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED]:
                      this._onVideoManifestResolveFailed.bind(this),
                  });
              })
              .then(this._readyDeferred.resolve, this._readyDeferred.reject);
          }
          _getPlayheadTime() {
            return this._player.getPlayerPosition();
          }
          _getStateData() {
            return this._currentContentInfo
              ? Object.assign(
                  Object.assign({}, this._currentContentInfo.stateData),
                  {
                    player_language_code:
                      this._player.getActiveSubtitleLanguage(),
                  }
                )
              : null;
          }
          _onDurationChanged(e) {
            this._currentContentInfo &&
              (this._currentContentInfo.stateData.video_source_duration =
                e.data.duration);
          }
          _onVideoResized(e) {
            this._currentContentInfo &&
              ((this._currentContentInfo.stateData.player_width = e.data.width),
              (this._currentContentInfo.stateData.player_height =
                e.data.height));
          }
          _onBeforeLoad(e) {
            let { track: t, options: i, logData: r } = e.data,
              n = !!this._currentContentInfo;
            if (
              "video" !== t.mediaType ||
              (null == r ? void 0 : r.noLog) ||
              (null == r ? void 0 : r.noMuxEvents)
            ) {
              n && this._mux.emit(this._playerId, N.VIDEO_CHANGE, {}),
                (this._currentContentInfo = null);
              return;
            }
            let a = {
                video_id: t.fileId,
                video_title: (null == r ? void 0 : r.displayTitle) || void 0,
                video_series: (null == r ? void 0 : r.displayGroup) || void 0,
                video_duration:
                  (null == r ? void 0 : r.displayDuration) || void 0,
              },
              s = Object.assign({}, tU);
            (this._currentContentInfo = {
              track: t,
              options: i,
              videoData: a,
              stateData: s,
            }),
              !this._isMuxInitialized && this._muxInitData
                ? (this._mux.init(this._playerId, this._muxInitData),
                  this._mux.emit(this._playerId, N.READY),
                  (this._isMuxInitialized = !0))
                : n && this._mux.emit(this._playerId, N.VIDEO_CHANGE, a);
          }
          _onPlay() {
            var e, t;
            if (!this._currentContentInfo) return;
            let i = this._currentContentInfo.stateData,
              r = this._player.getPlayerState(),
              n = r.media_info,
              a =
                (null ===
                  (t =
                    null === (e = this._currentContentInfo) || void 0 === e
                      ? void 0
                      : e.options) || void 0 === t
                  ? void 0
                  : t.autoplay) || !1,
              { width: s, height: o, src: l, poster: d } = r.player_element;
            (i.player_is_paused = !r.playing),
              (i.player_width = s || 0),
              (i.player_height = o || 0),
              (i.video_source_height = n.video_height || 0),
              (i.video_source_width = n.video_width || 0),
              (i.player_autoplay_on = a),
              (i.video_source_url = l),
              (i.video_source_mime_type = n.video_format),
              (i.video_source_duration = r.duration),
              (i.video_poster_url = d),
              this._mux.emit(
                this._playerId,
                N.PLAY,
                this._currentContentInfo.videoData
              );
          }
          _onPlaying() {
            this._currentContentInfo &&
              ((this._currentContentInfo.stateData.player_is_paused = !1),
              this._mux.emit(this._playerId, N.PLAYING));
          }
          _onPause() {
            this._currentContentInfo &&
              ((this._currentContentInfo.stateData.player_is_paused = !0),
              this._mux.emit(this._playerId, N.PAUSE));
          }
          _onProgress(e) {
            this._currentContentInfo &&
              this._mux.emit(this._playerId, N.TIMEUPDATE, {
                player_playhead_time: e.data.position,
              });
          }
          _onSeeking() {
            this._currentContentInfo &&
              this._mux.emit(this._playerId, N.SEEKING);
          }
          _onPositionChanged() {
            this._currentContentInfo &&
              this._mux.emit(this._playerId, N.SEEKED);
          }
          _onError(e) {
            var t, i;
            let r;
            let n =
              null ===
                (i =
                  null === (t = e.data) || void 0 === t ? void 0 : t.error) ||
              void 0 === i
                ? void 0
                : i.code;
            this._currentContentInfo &&
              n &&
              this._mux.emit(this._playerId, N.ERROR, {
                player_error_code:
                  ((r = tw[n]),
                  /_REQUEST_|_RESPONSE$/.test(n)
                    ? (r = O.NETWORK)
                    : r || (r = /^EME_/.test(n) ? O.EME : O.GENERIC),
                  r),
                player_error_message: n,
              });
          }
          _onEnded() {
            this._currentContentInfo && this._mux.emit(this._playerId, N.ENDED);
          }
          _onVideoProfileChanged(e) {
            if (!this._currentContentInfo) return;
            let t = e.data.profile,
              i = this._currentContentInfo.stateData;
            (i.video_source_height = t.height || 0),
              (i.video_source_width = t.width || 0),
              (i.video_source_mime_type = t.mimeType),
              this._mux.emit(this._playerId, N.RENDITION_CHANGE, {
                video_source_bitrate: t.bitrate,
                video_source_width: t.width,
                video_source_height: t.height,
              });
          }
          _onFragmentFetched(e) {
            let t = e.data;
            if (!this._currentContentInfo && "video" !== t.media_type) return;
            let i = `${t.segment_type}${t.init ? "_init" : ""}`;
            this._mux.emit(this._playerId, N.REQUEST_COMPLETED, {
              request_type: i,
              request_hostname: tk(t.url),
              request_start: t.start_time,
              request_response_end: t.end_time,
              request_bytes_loaded: t.byte_length,
            });
          }
          _onFragmentFetchError(e) {
            let t = e.data;
            if (!this._currentContentInfo && "video" !== t.media_type) return;
            let i = `${t.segment_type}${t.init ? "_init" : ""}`;
            this._mux.emit(this._playerId, N.REQUEST_FAILED, {
              request_type: i,
              request_hostname: tk(t.url),
              request_start: t.start_time,
              request_error: t.error.code,
              request_error_code: t.error.status,
              request_error_text: "",
            });
          }
          _onVideoManifestResolved(e) {
            let t = e.data;
            this._currentContentInfo &&
              this._mux.emit(this._playerId, N.REQUEST_COMPLETED, {
                request_type: "manifest",
                request_hostname: tk(t.url),
                request_start: t.start_time,
                request_response_end: t.end_time,
                request_bytes_loaded: t.manifest_size,
              });
          }
          _onVideoManifestResolveFailed(e) {
            let t = e.data;
            this._currentContentInfo &&
              this._mux.emit(this._playerId, N.REQUEST_FAILED, {
                request_type: "manifest",
                request_hostname: tk(t.url),
                request_start: t.start_time,
                request_error: t.error.code,
                request_error_code: t.error.status,
                request_error_text: "",
              });
          }
          ready() {
            return this._readyDeferred.promise;
          }
        }
        class tx {
          constructor(e) {
            if (((this._estimate = 0), (this._totalWeight = 0), e < 0))
              throw TypeError("Halflife must be set to a positive value.");
            this._weightingDecrease = Math.exp(Math.log(0.5) / e);
          }
          sample(e, t) {
            let i = Math.pow(this._weightingDecrease, e),
              r = t * (1 - i) + i * this._estimate;
            isNaN(r) || ((this._estimate = r), (this._totalWeight += t));
          }
          getEstimate() {
            return (
              this._estimate / 1 -
              Math.pow(this._weightingDecrease, this._totalWeight)
            );
          }
        }
        class tY {
          constructor(e = 4e5) {
            (this._totalBytes = 0),
              (this._overrideBitrate = 0),
              (this._currentBandwidth = e),
              (this._short = new tx(2)),
              (this._long = new tx(5)),
              this._init();
          }
          _init() {
            if ("undefined" == typeof navigator) return;
            let e = navigator;
            e.connection &&
              e.connection.downlink &&
              ((this._currentBandwidth = 1e6 * e.connection.downlink),
              (this._onConnectionChange = this._onConnectionChange.bind(this)),
              e.connection.addEventListener(
                "change",
                this._onConnectionChange
              ));
          }
          _onConnectionChange(e) {
            let t = e.target.downlink || 0;
            this._setBandwidth(t);
          }
          _setBandwidth(e) {
            this._currentBandwidth = 1e6 * e;
          }
          getBandwidthEstimate() {
            return this._overrideBitrate
              ? this._overrideBitrate
              : this._totalBytes < 128e3
              ? this._currentBandwidth
              : Math.min(this._short.getEstimate(), this._long.getEstimate());
          }
          sample(e, t) {
            if (e < 16e3) return;
            let i = t / 1e3,
              r = (8 * e) / i;
            (this._totalBytes += e),
              this._short.sample(i, r),
              this._long.sample(i, r);
          }
          overrideBitrate(e) {
            e <= 0 ? (this._overrideBitrate = 0) : (this._overrideBitrate = e);
          }
        }
        class tB {
          constructor(e, t) {
            (this._transport = e), (this._abrManager = t);
          }
          _fetch(e, t) {
            let i = (0, j.q)();
            return this._transport
              .request(e, {
                responseType: "arraybuffer",
                headers: { Range: t },
              })
              .then((e) =>
                e.ok && e.body
                  ? { bytes: e.body.byteLength, time: (0, j.q)() - i }
                  : null
              );
          }
          sample() {
            let e = `https://web-sdk-assets.spotifycdn.com/bandwidth_sampling_data?no-cache=${Math.random()}`;
            return this._fetch(e, "bytes=0-0")
              .then(() => this._fetch(e, "bytes=0-"))
              .then((e) => {
                e && this._abrManager.sample(e.bytes, e.time);
              });
          }
        }
        let tG = (e, t) => new tB(e, t);
        function tK(e) {
          return "uri" in e;
        }
        ((f = M || (M = {})).NULL_VALUE = "NULL_VALUE"),
          (f.LIST_START = "LIST_START"),
          (f.LIST_END = "LIST_END"),
          (f.FORBIDDEN = "FORBIDDEN"),
          (f.IGNORE = "IGNORE"),
          (f.PAUSE = "PAUSE"),
          ((E = w || (w = {})).AAC_LC = "mp4a.40.2"),
          (E.AAC_HE = "mp4a.40.5"),
          (E.FLAC = "flac"),
          (E.OPUS = "opus"),
          (E.VP9 = "vp9"),
          (E.VP8 = "vp8"),
          (E.H264_31 = "avc1.4d401f"),
          ((m = k || (k = {})).APPLOAD = "appload"),
          (m.BACK_BUTTON = "backbtn"),
          (m.CLICK_ROW = "clickrow"),
          (m.CLICK_SIDE = "clickside"),
          (m.END_PLAY = "endplay"),
          (m.FORWARD_BUTTON = "fwdbtn"),
          (m.LOGOUT = "logout"),
          (m.PLAY_BUTTON = "playbtn"),
          (m.POPUP = "popup"),
          (m.REMOTE = "remote"),
          (m.TRACK_DONE = "trackdone"),
          (m.TRACK_ERROR = "trackerror"),
          (m.UNKNOWN = "unknown"),
          (m.URI_OPEN = "uriopen"),
          (m.CAPPED = "capped"),
          (m.SEEK = "seek"),
          ((y = U || (U = {})).UNKNOWN = "UNKNOWN"),
          (y.DEFAULT = "DEFAULT"),
          (y.LOW = "LOW"),
          (y.NORMAL = "NORMAL"),
          (y.HIGH = "HIGH"),
          (y.VERY_HIGH = "VERY_HIGH"),
          (y.HIFI = "HIFI"),
          ((v = F || (F = {})).NONE = "NONE"),
          (v.CONTEXT = "CONTEXT"),
          (v.TRACK = "TRACK"),
          ((g = x || (x = {})).EMPTY = "EMPTY"),
          (g.SW_CRYPTO = "SW_CRYPTO"),
          (g.SW_DECODE = "SW_DECODE"),
          (g.HW_CRYPTO = "HW_CRYPTO"),
          (g.HW_DECODE = "HW_DECODE"),
          (g.HW_ALL = "HW_ALL");
        class tH extends G.vp {
          constructor(e) {
            if (
              (super(),
              (this._trackPlayerPromise = (0, V.$)()),
              (this._maxListErrors = 5),
              (this._uid = 0),
              (this._loadedList = null),
              (this._loadedOptions = null),
              (this._currentTrack = null),
              (this._currentTrackOptions = null),
              (this._listPlayCount = 0),
              (this._listErrorCount = 0),
              (this._shuffled = !1),
              (this._repeatMode = F.NONE),
              (this._currentSeqId = 0),
              !e.trackPlayer)
            )
              throw TypeError("Argument `options.trackPlayer` not found.");
            e.maxListErrors && (this._maxListErrors = e.maxListErrors),
              (this._setListOptions = this._setListOptions.bind(this)),
              (this._replaceCurrentList = this._replaceCurrentList.bind(this)),
              (this._handleCapped = this._handleCapped.bind(this)),
              (this._handlePlaying = this._handlePlaying.bind(this)),
              (this._handlePaused = this._handlePaused.bind(this)),
              (this._handleEnded = this._handleEnded.bind(this)),
              (this._handleCanPreload = this._handleCanPreload.bind(this)),
              (this._handleError = this._handleError.bind(this)),
              (this._handlePositionChanged =
                this._handlePositionChanged.bind(this)),
              (this._handleDurationChanged =
                this._handleDurationChanged.bind(this)),
              (this._handleTimeout = this._handleTimeout.bind(this)),
              (this._handlePlayerInitError =
                this._handlePlayerInitError.bind(this)),
              (this._handleProgress = this._handleProgress.bind(this)),
              (this._handlePlayedThresholdReached =
                this._handlePlayedThresholdReached.bind(this)),
              (this._handleBeforeLoad = this._handleBeforeLoad.bind(this)),
              this._init(e.trackPlayer);
          }
          static create(e) {
            return new tH(e);
          }
          _init(e) {
            this._trackPlayerPromise.promise.catch(() => {}),
              Promise.resolve(e)
                .then((e) => {
                  this._attachPlayerEvents(e),
                    this._trackPlayerPromise.resolve(e);
                })
                .catch(this._handlePlayerInitError);
          }
          _attachPlayerEvents(e) {
            e.addListeners({
              [T.PLAYER_CAN_PRELOAD]: this._handleCanPreload,
              [T.PLAYER_CAPPED]: this._handleCapped,
              [T.PLAYER_ENDED]: this._handleEnded,
              [T.PLAYER_ERROR]: this._handleError,
              [T.PLAYER_PAUSED]: this._handlePaused,
              [T.PLAYER_PLAYING]: this._handlePlaying,
              [T.PLAYER_TIMEOUT]: this._handleTimeout,
              [T.PLAYER_POSITION_CHANGED]: this._handlePositionChanged,
              [T.PLAYER_DURATION_CHANGED]: this._handleDurationChanged,
              [T.PLAYER_PROGRESS]: this._handleProgress,
              [T.PLAYER_BEFORE_LOAD]: this._handleBeforeLoad,
              [T.PLAYER_PLAYED_THRESHOLD_REACHED]:
                this._handlePlayedThresholdReached,
            }),
              this.proxyEmitAllSync(e, {
                [T.PLAYER_BEFORE_VOLUME_CHANGE]:
                  T.LIST_PLAYER_BEFORE_VOLUME_CHANGE,
                [T.PLAYER_LOAD]: T.LIST_PLAYER_PLAYER_LOAD,
                [T.REPORTING_START]: T.REPORTING_START,
                [T.REPORTING_CREATIVE_VIEW]: T.REPORTING_CREATIVE_VIEW,
                [T.REPORTING_FIRST_QUARTILE]: T.REPORTING_FIRST_QUARTILE,
                [T.REPORTING_MIDPOINT]: T.REPORTING_MIDPOINT,
                [T.REPORTING_THIRD_QUARTILE]: T.REPORTING_THIRD_QUARTILE,
                [T.REPORTING_COMPLETE]: T.REPORTING_COMPLETE,
                [T.REPORTING_PAUSE]: T.REPORTING_PAUSE,
                [T.REPORTING_RESUME]: T.REPORTING_RESUME,
                [T.REPORTING_ERROR]: T.REPORTING_ERROR,
              }),
              this.proxyEmitAll(e, {
                [T.PLAYER_AUTOPLAY_FAILED]: T.LIST_PLAYER_AUTOPLAY_FAILED,
                [T.PLAYER_TRACKING_DATA_CREATED]:
                  T.LIST_PLAYER_TRACKING_DATA_CREATED,
                [T.PLAYER_TRACKING_DATA_FINALIZED]:
                  T.LIST_PLAYER_TRACKING_DATA_FINALIZED,
                [T.PLAYER_BUFFER_STALLED]: T.LIST_PLAYER_BUFFER_STALLED,
                [T.PLAYER_BUFFERING_START]: T.LIST_PLAYER_BUFFERING_START,
                [T.PLAYER_BUFFERING_END]: T.LIST_PLAYER_BUFFERING_END,
                [T.PLAYER_REBUFFERING_START]: T.LIST_PLAYER_REBUFFERING_START,
                [T.PLAYER_REBUFFERING_END]: T.LIST_PLAYER_REBUFFERING_END,
                [T.PLAYER_VIDEO_ELEMENT_APPENDED]:
                  T.LIST_PLAYER_VIDEO_ELEMENT_APPENDED,
                [T.PLAYER_VIDEO_ELEMENT_REMOVED]:
                  T.LIST_PLAYER_VIDEO_ELEMENT_REMOVED,
                [T.PLAYER_DISPLAYED_CUES_CHANGED]:
                  T.LIST_PLAYER_DISPLAYED_CUES_CHANGED,
                [T.LIST_PLAYER_VIDEO_PROFILE_CHANGED]:
                  T.PLAYER_VIDEO_PROFILE_CHANGED,
                [T.LIST_PLAYER_PLAYBACK_SPEED_CHANGED]:
                  T.PLAYER_PLAYBACK_SPEED_CHANGED,
                [T.LIST_PLAYER_MUTED_CHANGED]: T.PLAYER_MUTED_CHANGED,
                [T.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED]:
                  T.PLAYER_SUBTITLE_LANGUAGES_LOADED,
              });
          }
          _translatePosition(e) {
            var t, i, r;
            return null !==
              (r =
                null ===
                  (i =
                    null === (t = this._loadedList) || void 0 === t
                      ? void 0
                      : t.translatePosition) || void 0 === i
                  ? void 0
                  : i.call(t, e)) && void 0 !== r
              ? r
              : e;
          }
          _translateDuration(e) {
            var t, i, r;
            let n = isNaN(e) ? 0 : e;
            return null !==
              (r =
                null ===
                  (i =
                    null === (t = this._loadedList) || void 0 === t
                      ? void 0
                      : t.translateDuration) || void 0 === i
                  ? void 0
                  : i.call(t, n)) && void 0 !== r
              ? r
              : n;
          }
          _handleProgress(e) {
            let { data: t } = e;
            this.emit(
              T.LIST_PLAYER_PROGRESS,
              Object.assign(Object.assign({}, t), {
                position: this._translatePosition(t.position),
              })
            );
          }
          _handleBeforeLoad(e) {
            let { data: t } = e;
            this.emit(
              T.LIST_PLAYER_BEFORE_PLAYER_LOAD,
              Object.assign(Object.assign({}, t), {
                options: Object.assign(Object.assign({}, t.options), {
                  position: this._translatePosition(t.options.position),
                }),
              })
            );
          }
          _handlePlayerInitError(e) {
            this._trackPlayerPromise.reject(
              new q(
                L.LIST_PLAYER_NO_TRACK_PLAYER,
                e.message || "Track player promise was rejected."
              )
            );
          }
          _handleCapped() {
            let e = this._currentTrack;
            e &&
              this.emit(T.LIST_PLAYER_CAPPED, {
                uid: this._uid,
                track: e,
                options: this._currentTrackOptions,
                list: this._loadedList,
              });
          }
          _handlePlaying(e) {
            let t = this._currentTrack;
            t &&
              this.emit(T.LIST_PLAYER_PLAYING, {
                uid: this._uid,
                track: t,
                options: this._currentTrackOptions,
                list: this._loadedList,
                position: this._translatePosition(e.data.position),
              });
          }
          _handlePaused(e) {
            let t = this._currentTrack;
            t &&
              this.emit(T.LIST_PLAYER_PAUSED, {
                uid: this._uid,
                track: t,
                options: this._currentTrackOptions,
                list: this._loadedList,
                position: this._translatePosition(e.data.position),
              });
          }
          _handleCanPreload() {
            this._preloadUpcomingTrack().catch(() => {});
          }
          _handleEnded() {
            let e = this._currentTrack;
            e &&
              (this.emit(T.LIST_PLAYER_TRACK_ENDED, {
                uid: this._uid,
                track: e,
                options: this._currentTrackOptions,
                list: this._loadedList,
              }),
              this.next(k.TRACK_DONE));
          }
          _handleTimeout() {
            let e = this._currentTrack;
            e &&
              (this.emit(T.LIST_PLAYER_TRACK_TIMEOUT, {
                uid: this._uid,
                track: e,
                options: this._currentTrackOptions,
                list: this._loadedList,
              }),
              this.next(k.TRACK_ERROR));
          }
          _handlePositionChanged(e) {
            let t = this._currentTrack;
            t &&
              this.emit(T.LIST_PLAYER_POSITION_CHANGED, {
                uid: this._uid,
                track: t,
                options: this._currentTrackOptions,
                list: this._loadedList,
                position: this._translatePosition(e.data.position),
              });
          }
          _handleDurationChanged(e) {
            let t = this._currentTrack;
            t &&
              this.emit(T.LIST_PLAYER_DURATION_CHANGED, {
                uid: this._uid,
                track: t,
                options: this._currentTrackOptions,
                list: this._loadedList,
                position: this._translatePosition(e.data.position),
                duration: this._translateDuration(e.data.duration),
              });
          }
          _handlePlayedThresholdReached(e) {
            let t = this._currentTrack;
            t &&
              this.emit(T.LIST_PLAYER_PLAYED_THRESHOLD_REACHED, {
                uid: this._uid,
                track: t,
                options: this._currentTrackOptions,
                list: this._loadedList,
                threshold: e.data.threshold,
                position: this._translatePosition(e.data.position),
              });
          }
          _handleError(e) {
            let t = this._currentTrack,
              i = e.data;
            if (!t) return;
            (i.position = this._translatePosition(e.data.position)),
              this.emit(T.LIST_PLAYER_ERROR, i),
              this.emitSync(T.LIST_PLAYER_ERROR_SYNC, i);
            let r = !!i.error && i.error.listPlayerIgnore;
            !r && this._listErrorCount++,
              i.canPlayNext &&
                (r || this._listErrorCount <= this._maxListErrors
                  ? this.next(k.TRACK_ERROR)
                  : this.emit(T.LIST_PLAYER_MAX_LIST_ERRORS_REACHED, {
                      count: this._listErrorCount,
                      threshold: this._maxListErrors,
                    }));
          }
          _handleTrackLoaded(e) {
            this.emitSync(T.LIST_PLAYER_TRACK_LOADED, e);
          }
          _incrementSeqId() {
            return (
              this._currentSeqId >= 9007199254740991
                ? (this._currentSeqId = 0)
                : (this._currentSeqId += 1),
              this._currentSeqId
            );
          }
          _getTrackPlayer() {
            return this._trackPlayerPromise.promise;
          }
          _setListIndex(e, t) {
            let i = t.index && -1 !== t.index ? t.index : 0;
            return Promise.all([e, t, e.startAt(i)]);
          }
          _setListOptions([e, t, i]) {
            return Promise.all([
              e.setShuffle(!!this._shuffled),
              e.setRepeatMode(this._repeatMode),
            ]).then(() => [e, t]);
          }
          _replaceCurrentList([e, t]) {
            return (
              this.emitSync(T.LIST_PLAYER_BEFORE_LIST_CHANGE, {
                newList: e,
                newOptions: t,
                oldList: this._loadedList,
                oldOptions: this._loadedOptions,
              }),
              (this._loadedList = e),
              (this._loadedOptions = t),
              (this._listPlayCount = 0),
              (this._listErrorCount = 0),
              this.emit(T.LIST_PLAYER_LIST_CHANGED, { list: e, options: t }),
              P.SUCCESS
            );
          }
          _changeTrack(e, t, i) {
            let r;
            if (this._currentSeqId !== i) return Promise.resolve(P.CANCELLED);
            this.emitSync(T.LIST_PLAYER_BEFORE_TRACK_LOAD, {
              list: this._loadedList,
              newTrack: e,
              oldTrack: this._currentTrack,
            }),
              this._uid++;
            let n = ++this._listPlayCount,
              a = this._loadedOptions,
              s = !0,
              o = 0,
              l = 3e4,
              d = !1,
              _ = !1;
            a &&
              (1 === n
                ? ((s = !a.paused), (o = a.initialPosition || a.position || 0))
                : (o = a.position || 0),
              (d = a.muted || !1),
              (_ = a.loop || !1));
            let u = t === k.TRACK_DONE;
            if (e.options) {
              let t = e.options;
              void 0 !== t.paused && (s = !t.paused),
                void 0 !== t.position && (o = t.position),
                void 0 !== t.playedThreshold && (l = t.playedThreshold),
                void 0 !== t.loadingTimeout && (r = t.loadingTimeout),
                void 0 !== t.muted && (d = t.muted),
                void 0 !== t.loop && (_ = t.loop);
            }
            (this._currentTrack = e),
              (this._currentTrackOptions = {
                reason: t,
                paused: !s,
                position: o,
                playedThreshold: l,
                muted: d,
                loop: _,
              });
            let h = this._handleTrackLoaded.bind(this, {
              uid: this._uid,
              track: this._currentTrack,
              options: this._currentTrackOptions,
              list: this._loadedList,
            });
            return this._getTrackPlayer().then((t) =>
              this._currentSeqId !== i
                ? P.CANCELLED
                : (Promise.resolve(
                    t.load(
                      e,
                      {
                        uriProperty: "playableURI",
                        autoplay: s,
                        position: o,
                        playedThreshold: l,
                        continuePrevious: u,
                        loadingTimeout: r,
                        muted: d,
                        loop: _,
                      },
                      h
                    )
                  ).catch(() => {}),
                  P.SUCCESS)
            );
          }
          _preloadUpcomingTrack() {
            let e = this._loadedList;
            return e
              ? e
                  .peekNext({ reason: k.TRACK_DONE, listConstants: M })
                  .then((e) =>
                    e === M.FORBIDDEN
                      ? P.FORBIDDEN
                      : e === M.NULL_VALUE
                      ? P.INVALID
                      : e === M.LIST_END
                      ? P.LIST_END
                      : tK(e) && e.playable
                      ? this.preloadTrack(e)
                      : P.INVALID
                  )
              : Promise.reject(
                  new q(
                    L.LIST_PLAYER_NO_LIST,
                    "Cannot perform operation; no list was loaded."
                  )
                );
          }
          preloadTrack(e) {
            return this._getTrackPlayer().then(
              (t) => (t.preload(e).catch(() => {}), P.SUCCESS)
            );
          }
          activateElement() {
            return this._getTrackPlayer().then(
              (e) => (e.activateElement(), P.SUCCESS)
            );
          }
          load(e, t) {
            let i = (function (e = {}) {
              let t = {
                index: -1,
                position: 0,
                initialPosition: 0,
                playbackSpeed: 1,
                duration: -1,
                paused: !1,
                reason: k.UNKNOWN,
                muted: !1,
                loop: !1,
              };
              return (
                void 0 !== e.index && (t.index = e.index),
                void 0 !== e.position && (t.position = e.position),
                void 0 !== e.initialPosition &&
                  (t.initialPosition = e.initialPosition),
                void 0 !== e.duration && (t.duration = e.duration),
                void 0 !== e.paused && (t.paused = e.paused),
                void 0 !== e.playbackSpeed &&
                  (t.playbackSpeed = e.playbackSpeed),
                void 0 !== e.reason && (t.reason = e.reason),
                void 0 !== e.muted && (t.muted = e.muted),
                void 0 !== e.loop && (t.loop = e.loop),
                t
              );
            })(t || this._loadedOptions || {});
            return this._setListIndex(e, i)
              .then(this._setListOptions)
              .then(this._replaceCurrentList);
          }
          play(e, t) {
            return this.load(e, t).then(() => {
              if (this._loadedList !== e) return P.CANCELLED;
              let t = this._loadedOptions
                ? this._loadedOptions.reason
                : k.UNKNOWN;
              return this.next(t);
            });
          }
          canChangeTrack() {
            return this._loadedList
              ? this._loadedList
                  .peekNext({ reason: k.FORWARD_BUTTON, listConstants: M })
                  .then((e) => e !== M.FORBIDDEN)
              : Promise.resolve(!0);
          }
          next(e) {
            if (!e)
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_INVALID_ARGUMENT,
                  "The argument `reason` is required."
                )
              );
            let t = this._loadedList;
            if (!t)
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_NO_LIST,
                  "Cannot perform operation; no list was loaded."
                )
              );
            this.emitSync(T.LIST_PLAYER_BEFORE_NEXT, { list: t, reason: e });
            let i = this._incrementSeqId(),
              r = { reason: e, listConstants: M };
            return t
              .next(r)
              .then((r) =>
                this._currentSeqId !== i
                  ? P.CANCELLED
                  : r === M.FORBIDDEN
                  ? P.FORBIDDEN
                  : r === M.NULL_VALUE
                  ? this.next(e)
                  : r === M.LIST_END
                  ? (this.emit(T.LIST_PLAYER_LIST_ENDED, {
                      list: t,
                      reason: k.END_PLAY,
                    }),
                    this.clear(e),
                    P.LIST_END)
                  : tK(r)
                  ? r.playable
                    ? this._changeTrack(r, e, i)
                    : (this.emit(T.LIST_PLAYER_TRACK_UNPLAYABLE, {
                        track: r,
                        list: t,
                      }),
                      this.next(e))
                  : P.INVALID
              );
          }
          previous(e) {
            if (!e)
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_INVALID_ARGUMENT,
                  "The argument `reason` is required."
                )
              );
            let t = this._loadedList;
            if (!t)
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_NO_LIST,
                  "Cannot perform operation; no list was loaded."
                )
              );
            this.emitSync(T.LIST_PLAYER_BEFORE_PREVIOUS, {
              list: t,
              reason: e,
            });
            let i = this._incrementSeqId(),
              r = { reason: e, listConstants: M };
            return t
              .previous(r)
              .then((r) =>
                this._currentSeqId !== i
                  ? P.CANCELLED
                  : r === M.FORBIDDEN
                  ? P.FORBIDDEN
                  : r === M.NULL_VALUE
                  ? this.previous(e)
                  : r === M.LIST_START
                  ? (this.emit(T.LIST_PLAYER_LIST_ENDED, {
                      list: t,
                      reason: k.END_PLAY,
                    }),
                    this.clear(e),
                    P.LIST_END)
                  : tK(r)
                  ? r.playable
                    ? this._changeTrack(r, e, i)
                    : (this.emit(T.LIST_PLAYER_TRACK_UNPLAYABLE, {
                        track: r,
                        list: t,
                      }),
                      this.previous(e))
                  : P.INVALID
              );
          }
          pause() {
            return this._loadedList
              ? this._currentTrack
                ? this._getTrackPlayer().then((e) =>
                    e
                      .pause()
                      .then(() => P.SUCCESS)
                      .catch((e) =>
                        (null == e ? void 0 : e.name) === "AbortError"
                          ? P.CANCELLED
                          : P.FORBIDDEN
                      )
                  )
                : Promise.resolve(P.SUCCESS)
              : Promise.reject(
                  new q(
                    L.LIST_PLAYER_NO_LIST,
                    "Cannot perform operation; no list was loaded."
                  )
                );
          }
          resume() {
            return this._loadedList
              ? this._currentTrack
                ? this._getTrackPlayer().then((e) =>
                    e
                      .resume()
                      .then(() => P.SUCCESS)
                      .catch((e) =>
                        (null == e ? void 0 : e.name) === "AbortError"
                          ? P.CANCELLED
                          : P.FORBIDDEN
                      )
                  )
                : Promise.resolve(P.SUCCESS)
              : Promise.reject(
                  new q(
                    L.LIST_PLAYER_NO_LIST,
                    "Cannot perform operation; no list was loaded."
                  )
                );
          }
          togglePlay() {
            return this._loadedList
              ? this._currentTrack
                ? this._getTrackPlayer().then((e) =>
                    e
                      .togglePlay()
                      .then(() => P.SUCCESS)
                      .catch((e) =>
                        (null == e ? void 0 : e.name) === "AbortError"
                          ? P.CANCELLED
                          : P.FORBIDDEN
                      )
                  )
                : Promise.resolve(P.SUCCESS)
              : Promise.reject(
                  new q(
                    L.LIST_PLAYER_NO_LIST,
                    "Cannot perform operation; no list was loaded."
                  )
                );
          }
          stop(e) {
            let t = { reason: e || k.UNKNOWN },
              i = this._currentTrack;
            return (
              i &&
                i.logData &&
                ((t.source = i.logData.source),
                (t.playbackService = i.logData.playbackService)),
              this._incrementSeqId(),
              this._getTrackPlayer().then(
                (e) => (
                  e.stop(t),
                  this.emit(T.LIST_PLAYER_STOPPED, {
                    uid: this._uid,
                    options: this._currentTrackOptions,
                    list: this._loadedList,
                  }),
                  P.SUCCESS
                )
              )
            );
          }
          clear(e) {
            return this.stop(e).then(
              () => (
                (this._loadedList = null),
                (this._loadedOptions = null),
                (this._currentTrack = null),
                (this._currentTrackOptions = null),
                this.emit(T.LIST_PLAYER_CLEARED, null),
                P.SUCCESS
              )
            );
          }
          setShuffle(e) {
            let t = !!e;
            if (this._shuffled !== t) {
              (this._shuffled = t),
                this.emit(T.LIST_PLAYER_SHUFFLE_CHANGED, {
                  player: this,
                  shuffled: t,
                });
              let e = this._loadedList;
              e && e.setShuffle(this._shuffled);
            }
            return Promise.resolve(P.SUCCESS);
          }
          setRepeatMode(e) {
            if (!(e in F))
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_INVALID_ARGUMENT,
                  "The value of repeat mode is not a correct RepeatMode enum value"
                )
              );
            if (this._repeatMode !== e) {
              (this._repeatMode = e),
                this.emit(T.LIST_PLAYER_REPEAT_MODE_CHANGED, {
                  player: this,
                  repeatMode: e,
                });
              let t = this._loadedList;
              t && t.setRepeatMode(this._repeatMode);
            }
            return Promise.resolve(P.SUCCESS);
          }
          getVolume() {
            return this._getTrackPlayer().then((e) => e.getVolume());
          }
          setVolume(e, t = null) {
            return this._getTrackPlayer().then(
              (i) => (
                i.setVolume(e, { commandId: null != t ? t : void 0 }),
                this.emit(T.LIST_PLAYER_VOLUME_CHANGED, {
                  volume: e,
                  commandId: t,
                }),
                P.SUCCESS
              )
            );
          }
          seek(e, t = k.SEEK) {
            var i, r;
            let n = this._loadedList;
            if (!n)
              return Promise.reject(
                new q(
                  L.LIST_PLAYER_NO_LIST,
                  "Cannot perform operation; no list was loaded."
                )
              );
            if ("function" == typeof n.allowSeeking && !n.allowSeeking())
              return Promise.reject(
                new q(L.LIST_PLAYER_FORBIDDEN, "The operation is not allowed.")
              );
            let a =
              null !==
                (r =
                  null === (i = n.handleSeek) || void 0 === i
                    ? void 0
                    : i.call(n, e, { reason: t, listConstants: M })) &&
              void 0 !== r
                ? r
                : e;
            return a === M.PAUSE
              ? this.pause().then(
                  (t) => (
                    this.emit(T.LIST_PLAYER_SEEK_HANDLED, {
                      position: e,
                      reason: a,
                    }),
                    t
                  )
                )
              : a === M.IGNORE
              ? (this.emit(T.LIST_PLAYER_SEEK_HANDLED, {
                  position: e,
                  reason: a,
                }),
                Promise.resolve(P.SUCCESS))
              : this._currentTrack
              ? this._getTrackPlayer().then((e) => (e.seek(a), P.SUCCESS))
              : Promise.resolve(P.SUCCESS);
          }
          getListConstants() {
            return M;
          }
          getLoadedList() {
            return this._loadedList;
          }
          getLoadedOptions() {
            return this._loadedOptions;
          }
          getPlayerState() {
            return this._getTrackPlayer().then((e) => {
              let t = e.getPlayerState();
              return Object.assign(Object.assign({}, t), {
                position: this._translatePosition(t.position),
                duration: this._translateDuration(t.duration),
              });
            });
          }
          getState() {
            return this.getPlayerState().then((e) => ({
              playbackState: e,
              track: this._currentTrack,
              list: this._loadedList,
              options: this._loadedOptions,
            }));
          }
          getMediaConfig() {
            return this._getTrackPlayer().then((e) => e.getMediaConfig());
          }
          hideSubtitles() {
            return this._getTrackPlayer()
              .then((e) => e.hideSubtitles())
              .then(() => P.SUCCESS);
          }
          showSubtitles() {
            return this._getTrackPlayer()
              .then((e) => e.showSubtitles())
              .then(() => P.SUCCESS);
          }
          areSubtitlesShown() {
            return this._getTrackPlayer().then((e) => e.areSubtitlesShown());
          }
          getSubtitleLanguages() {
            return this._getTrackPlayer().then((e) => e.getSubtitleLanguages());
          }
          getActiveSubtitleLanguage() {
            return this._getTrackPlayer().then((e) => {
              var t;
              return null !== (t = e.getActiveSubtitleLanguage()) &&
                void 0 !== t
                ? t
                : null;
            });
          }
          deactivateCueEvents() {
            return this._getTrackPlayer()
              .then((e) => e.deactivateCueEvents())
              .then(() => P.SUCCESS);
          }
          activateCueEvents() {
            return this._getTrackPlayer()
              .then((e) => e.activateCueEvents())
              .then(() => P.SUCCESS);
          }
          getCurrentBandwidth() {
            return this._getTrackPlayer().then((e) => e.getCurrentBandwidth());
          }
          setSubtitleLanguage(e) {
            return this._getTrackPlayer()
              .then((t) => t.setSubtitleLanguage(e))
              .then(() => P.SUCCESS);
          }
          setPlaybackSpeed(e) {
            return this._getTrackPlayer()
              .then((t) => t.setPlaybackSpeed(e))
              .then((e) => (e ? P.SUCCESS : P.FORBIDDEN));
          }
          setMuted(e) {
            return this._getTrackPlayer().then(
              (t) => (t.setMuted(e), P.SUCCESS)
            );
          }
          getStatistics() {
            return this._getTrackPlayer().then((e) => e.getStatistics());
          }
          getAudioProcessor() {
            return this._getTrackPlayer().then((e) => e.getAudioProcessor());
          }
        }
        let tj = B.P.forTag("playback.init");
        function tq(e) {
          return new Promise((t, i) => {
            var r, n, a, s, o, l, d, _, u, h, c;
            if (!e.transport) {
              i(TypeError("Argument transport is required."));
              return;
            }
            if (
              ("undefined" == typeof window ||
                ("boolean" == typeof window.isSecureContext
                  ? window.isSecureContext
                  : (function () {
                      if ("undefined" == typeof window || !window.location)
                        return !1;
                      let e = window.location;
                      if ("https" === e.protocol || "file" === e.protocol)
                        return !0;
                      let t = e.hostname;
                      return !!/^127(\.[0-255]){3}$|^locahost\.?$|\.localhost\.?$/.test(
                        t
                      );
                    })()) ||
                null === (r = window.console) ||
                void 0 === r ||
                r.warn(
                  "%cDRM might not be available from unsecure contexts",
                  "background: #222; color: #bada55; font-size: 40px"
                ),
              e.playerContainerManager &&
                ("function" !=
                  typeof (null === (n = e.playerContainerManager) ||
                  void 0 === n
                    ? void 0
                    : n.eject) ||
                  "function" !=
                    typeof (null === (a = e.playerContainerManager) ||
                    void 0 === a
                      ? void 0
                      : a.inject)))
            ) {
              i(
                TypeError(
                  "Both inject and eject PlayerContainerManager functions must be present."
                )
              );
              return;
            }
            let { transport: p } = e,
              [f = "", E = ""] = (e.sdkId || "").split(":"),
              m = new tY(),
              y = Object.assign(Object.assign({}, e), {
                abrManager: m,
                initialBandwidthSampler: tG(p, m),
                tracker: tI.create(),
                audioResolver: new tT(p),
                videoResolver: new tD(p),
                licenseURLResolver: new tN({
                  transport: p,
                  sdk: { name: f, version: E },
                  securityLevel: e.securityLevel,
                  useTestLicenseServer: e.useTestLicenseServer,
                }),
                newBufferPerTrack:
                  null === (s = e.newBufferPerTrack) || void 0 === s || s,
                preinitMediaElement:
                  null === (o = e.preinitMediaElement) || void 0 === o || o,
                audioProcessorOptions: Object.assign(
                  Object.assign({}, e.audioProcessorOptions),
                  {
                    disable:
                      null !==
                        (d =
                          null === (l = e.audioProcessorOptions) || void 0 === l
                            ? void 0
                            : l.disable) && void 0 !== d
                        ? d
                        : !!e.createPlayer,
                  }
                ),
              });
            !e.unauthenticatedLogs ||
              (null === (_ = e.loggerOptions) || void 0 === _
                ? void 0
                : _.endpoint) ||
              (e.loggerOptions = Object.assign(
                Object.assign({}, e.loggerOptions),
                { endpoint: "https://spclient.wg.spotify.com/melody/unauth" }
              )),
              (null === (u = null == e ? void 0 : e.loggerOptions) ||
              void 0 === u
                ? void 0
                : u.deviceInfo) ||
                Promise.all([
                  null === (h = e.loggerOptions) || void 0 === h
                    ? void 0
                    : h.platform,
                  null === (c = e.loggerOptions) || void 0 === c
                    ? void 0
                    : c.clientVersion,
                ]).then(([t, i]) => {
                  e.loggerOptions = Object.assign(
                    Object.assign({}, e.loggerOptions),
                    { deviceInfo: { platform: t, version: i } }
                  );
                }),
              tf
                .create(y)
                .then((t) => {
                  let i = Object.assign({ disableMux: !0 }, e.loggerOptions),
                    r = new tM(
                      Object.assign(Object.assign({}, i), {
                        transport: p,
                        sdkId: e.sdkId,
                        platform: Promise.resolve(i.deviceInfo).then((e) => {
                          var t;
                          return null !==
                            (t = null == e ? void 0 : e.platform) &&
                            void 0 !== t
                            ? t
                            : "";
                        }),
                        clientVersion: Promise.resolve(i.deviceInfo).then(
                          (e) => {
                            var t;
                            return null !==
                              (t = null == e ? void 0 : e.version) &&
                              void 0 !== t
                              ? t
                              : "";
                          }
                        ),
                      })
                    ),
                    n = tg.create({ transport: p, player: t, logSender: r });
                  return (
                    i.disableMux ||
                      tF
                        .create({
                          player: t,
                          mux: Y,
                          envKey: null == i ? void 0 : i.muxEnvKey,
                          sdk: f,
                          sdkVersion: E,
                          deviceInfo: i.deviceInfo,
                          muxCustomDimensions: i.muxCustomDimensions,
                        })
                        .ready()
                        .then(
                          () => tj.info("MuxReporter ready"),
                          (e) =>
                            tj.error(
                              "Failed to instantiate MuxReporter",
                              null == e ? void 0 : e.message
                            )
                        ),
                    { player: t, logger: n }
                  );
                })
                .then(t, i);
          });
        }
      },
      30864: function (e, t, i) {
        "use strict";
        i.d(t, {
          D: function () {
            return n;
          },
          t: function () {
            return a;
          },
        });
        var r = i(7301);
        let n = {
          MP3: r.OU.MP3,
          MP4: r.OU.MP4,
          MP4_DUAL: r.OU.MP4_DUAL,
          MP4_CBCS: r.OU.MP4_CBCS,
          MP4_FLAC: r.OU.MP4_FLAC,
          MANIFEST_ID: r.OU.MANIFEST_ID,
          AD_MANIFEST: r.OU.AD_MANIFEST,
          GENERIC_MEDIA: r.OU.GENERIC_MEDIA,
        };
        class a {
          constructor(e) {
            var t, i, a, s, o;
            if (((this.isAd = !1), !e.uri))
              throw TypeError("Missing required `uri` option.");
            if (
              !e.fileId &&
              !(null !== (t = e.url) && void 0 !== t ? t : e.resolvedURL)
            )
              throw TypeError("Missing: provide either fileId or url");
            (this.uri = e.uri),
              (this.playableURI = this.uri),
              (this.fileId = e.fileId || ""),
              (this.playable = null === (i = e.playable) || void 0 === i || i),
              (this.mediaType = e.mediaType || "audio"),
              (this.metadata = e.metadata || {}),
              (this.url =
                null !== (a = e.url) && void 0 !== a ? a : e.resolvedURL),
              (this.noManifest =
                null !== (s = e.noManifest) && void 0 !== s ? s : !!this.url),
              (this.noAuth = null !== (o = e.noAuth) && void 0 !== o && o),
              (this.preloadedManifest = e.preloadedManifest),
              (this.licenseEndpoint = e.licenseEndpoint),
              (this.fileFormat = e.fileFormat),
              (this.poster = e.poster),
              (this.options = e.options),
              (this.audioGain = e.audioGain),
              (this.mimeType = e.mimeType);
            let { format: l } = e;
            if (l) {
              if (n.hasOwnProperty(l)) this.format = n[l];
              else throw TypeError("Invalid `format` option.");
            } else
              this.format =
                this.url && !this.fileId ? r.OU.GENERIC_MEDIA : r.OU.MP4;
            this.logData = Object.assign(Object.assign({}, e.logData), {
              noLog: !1,
              noTSV: !0,
              noStats: !1,
            });
          }
          static create(e) {
            return new a(e);
          }
        }
      },
      2366: function (e, t, i) {
        "use strict";
        i.d(t, {
          oQ: function () {
            return n;
          },
          nA: function () {
            return a.nA;
          },
          Sy: function () {
            return h;
          },
          cr: function () {
            return c;
          },
          SK: function () {
            return u;
          },
        });
        var r,
          n,
          a = i(7301),
          s = i(71934),
          o = i(28611);
        ((r = n || (n = {})).PLAYER_INITIALIZATION_DONE =
          "PLAYER_INITIALIZATION_DONE"),
          (r.PLAYER_INITIALIZATION_FAILED = "PLAYER_INITIALIZATION_FAILED"),
          (r.STATE_CHANGED = "STATE_CHANGED"),
          (r.AUTOPLAY_FAILED = "AUTOPLAY_FAILED"),
          (r.BEFORE_LIST_CHANGE = "BEFORE_LIST_CHANGE"),
          (r.BEFORE_NEXT = "BEFORE_NEXT"),
          (r.BEFORE_PREVIOUS = "BEFORE_PREVIOUS"),
          (r.BEFORE_TRACK_LOAD = "BEFORE_TRACK_LOAD"),
          (r.BUFFER_STALLED = "BUFFER_STALLED"),
          (r.BUFFERING_START = "BUFFERING_START"),
          (r.BUFFERING_END = "BUFFERING_END"),
          (r.REBUFFERING_START = "REBUFFERING_START"),
          (r.REBUFFERING_END = "REBUFFERING_END"),
          (r.CAPPED = "CAPPED"),
          (r.CLEARED = "CLEARED"),
          (r.DISPLAYED_CUES_CHANGED = "DISPLAYED_CUES_CHANGED"),
          (r.SUBTITLE_LANGUAGES_LOADED = "SUBTITLE_LANGUAGES_LOADED"),
          (r.DURATION_CHANGED = "DURATION_CHANGED"),
          (r.ERROR = "ERROR"),
          (r.ERROR_SYNC = "ERROR_SYNC"),
          (r.LIST_CHANGED = "LIST_CHANGED"),
          (r.LIST_ENDED = "LIST_ENDED"),
          (r.LOAD_VIDEO = "LOAD_VIDEO"),
          (r.MAX_LIST_ERRORS_REACHED = "MAX_LIST_ERRORS_REACHED"),
          (r.PAUSED = "PAUSED"),
          (r.PLAYING = "PLAYING"),
          (r.PLAYED_THRESHOLD_REACHED = "PLAYED_THRESHOLD_REACHED"),
          (r.POSITION_CHANGED = "POSITION_CHANGED"),
          (r.PROGRESS = "PROGRESS"),
          (r.REPEAT_MODE_CHANGED = "REPEAT_MODE_CHANGED"),
          (r.SHUFFLE_CHANGED = "SHUFFLE_CHANGED"),
          (r.STOPPED = "STOPPED"),
          (r.STOPPED_VIDEO = "STOPPED_VIDEO"),
          (r.TRACKING_DATA_CREATED = "TRACKING_DATA_CREATED"),
          (r.TRACKING_DATA_FINALIZED = "TRACKING_DATA_FINALIZED"),
          (r.TRACK_ENDED = "TRACK_ENDED"),
          (r.TRACK_LOADED = "TRACK_LOADED"),
          (r.TRACK_TIMEOUT = "TRACK_TIMEOUT"),
          (r.TRACK_UNPLAYABLE = "TRACK_UNPLAYABLE"),
          (r.VOLUME_CHANGED = "VOLUME_CHANGED"),
          (r.VIDEO_ELEMENT_APPENDED = "VIDEO_ELEMENT_APPENDED"),
          (r.VIDEO_ELEMENT_REMOVED = "VIDEO_ELEMENT_REMOVED"),
          (r.SPEED_CHANGED = "SPEED_CHANGED"),
          (r.MUTED_CHANGED = "MUTED_CHANGED"),
          (r.REPORTING_START = "REPORTING_START"),
          (r.REPORTING_FIRST_QUARTILE = "REPORTING_FIRST_QUARTILE"),
          (r.REPORTING_MIDPOINT = "REPORTING_MIDPOINT"),
          (r.REPORTING_THIRD_QUARTILE = "REPORTING_THIRD_QUARTILE"),
          (r.REPORTING_COMPLETE = "REPORTING_COMPLETE"),
          (r.REPORTING_PAUSE = "REPORTING_PAUSE"),
          (r.REPORTING_RESUME = "REPORTING_RESUME"),
          (r.REPORTING_CREATIVE_VIEW = "REPORTING_CREATIVE_VIEW"),
          (r.REPORTING_ERROR = "REPORTING_ERROR");
        var l = i(30864);
        class d {
          constructor(e) {
            (this._index = -1), (this._tracks = []), (this._tracks = e.tracks);
          }
          static create(e) {
            let t = [];
            for (let i of e.tracks)
              i instanceof l.t ? t.push(i) : t.push(l.t.create(i));
            return new d({ tracks: t });
          }
          startAt(e) {
            return (
              e > this._tracks.length || e < 0
                ? (this._index = -1)
                : (this._index = e - 1),
              Promise.resolve(a.J_.SUCCESS)
            );
          }
          next(e, t) {
            let i = this._index + 1;
            if (i >= this._tracks.length)
              return Promise.resolve(e.listConstants.LIST_END);
            let r = this._tracks[i];
            return (t || (this._index = i), r)
              ? Promise.resolve(r)
              : Promise.reject(a.Le.NULL_VALUE);
          }
          peekNext(e) {
            return this.next(e, !0);
          }
          allowSeeking() {
            return !0;
          }
          previous(e) {
            let t = this._index - 1;
            if (t < 0) return Promise.resolve(e.listConstants.LIST_START);
            let i = this._tracks[t];
            return ((this._index = t), i)
              ? Promise.resolve(i)
              : Promise.reject(a.Le.NULL_VALUE);
          }
          setShuffle() {
            return Promise.resolve(a.J_.SUCCESS);
          }
          setRepeatMode() {
            return Promise.resolve(a.J_.SUCCESS);
          }
        }
        class _ extends o.vp {
          constructor(e) {
            super(),
              (this._playerPromise = e.playerPromise),
              (this._listPlayer = e.listPlayer),
              (this._transport = e.transport),
              (this._autoActivateElement = !!e.autoActivateElement),
              this._init();
          }
          static create(e) {
            return new _(e);
          }
          _init() {
            let e = this._listPlayer;
            this.proxyEmitAll(e, {
              [a.rU.LIST_PLAYER_AUTOPLAY_FAILED]: n.AUTOPLAY_FAILED,
              [a.rU.LIST_PLAYER_BEFORE_LIST_CHANGE]: n.BEFORE_LIST_CHANGE,
              [a.rU.LIST_PLAYER_BUFFER_STALLED]: n.BUFFER_STALLED,
              [a.rU.LIST_PLAYER_BUFFERING_START]: n.BUFFERING_START,
              [a.rU.LIST_PLAYER_BUFFERING_END]: n.BUFFERING_END,
              [a.rU.LIST_PLAYER_REBUFFERING_START]: n.REBUFFERING_START,
              [a.rU.LIST_PLAYER_REBUFFERING_END]: n.REBUFFERING_END,
              [a.rU.LIST_PLAYER_CLEARED]: n.CLEARED,
              [a.rU.LIST_PLAYER_DURATION_CHANGED]: n.DURATION_CHANGED,
              [a.rU.LIST_PLAYER_ERROR]: n.ERROR,
              [a.rU.LIST_PLAYER_LIST_CHANGED]: n.LIST_CHANGED,
              [a.rU.LIST_PLAYER_LIST_ENDED]: n.LIST_ENDED,
              [a.rU.LIST_PLAYER_MAX_LIST_ERRORS_REACHED]:
                n.MAX_LIST_ERRORS_REACHED,
              [a.rU.LIST_PLAYER_PAUSED]: n.PAUSED,
              [a.rU.LIST_PLAYER_PLAYING]: n.PLAYING,
              [a.rU.LIST_PLAYER_PLAYED_THRESHOLD_REACHED]:
                n.PLAYED_THRESHOLD_REACHED,
              [a.rU.LIST_PLAYER_POSITION_CHANGED]: n.POSITION_CHANGED,
              [a.rU.LIST_PLAYER_PROGRESS]: n.PROGRESS,
              [a.rU.LIST_PLAYER_REPEAT_MODE_CHANGED]: n.REPEAT_MODE_CHANGED,
              [a.rU.LIST_PLAYER_SHUFFLE_CHANGED]: n.SHUFFLE_CHANGED,
              [a.rU.LIST_PLAYER_STOPPED]: n.STOPPED,
              [a.rU.LIST_PLAYER_TRACKING_DATA_CREATED]: n.TRACKING_DATA_CREATED,
              [a.rU.LIST_PLAYER_TRACKING_DATA_FINALIZED]:
                n.TRACKING_DATA_FINALIZED,
              [a.rU.LIST_PLAYER_TRACK_ENDED]: n.TRACK_ENDED,
              [a.rU.LIST_PLAYER_TRACK_LOADED]: n.TRACK_LOADED,
              [a.rU.LIST_PLAYER_TRACK_TIMEOUT]: n.TRACK_TIMEOUT,
              [a.rU.LIST_PLAYER_TRACK_UNPLAYABLE]: n.TRACK_UNPLAYABLE,
              [a.rU.LIST_PLAYER_VOLUME_CHANGED]: n.VOLUME_CHANGED,
              [a.rU.LIST_PLAYER_VIDEO_ELEMENT_APPENDED]:
                n.VIDEO_ELEMENT_APPENDED,
              [a.rU.LIST_PLAYER_VIDEO_ELEMENT_REMOVED]: n.VIDEO_ELEMENT_REMOVED,
              [a.rU.PLAYER_DISPLAYED_CUES_CHANGED]: n.DISPLAYED_CUES_CHANGED,
              [a.rU.PLAYER_SUBTITLE_LANGUAGES_LOADED]:
                n.SUBTITLE_LANGUAGES_LOADED,
              [a.rU.PLAYER_PLAYBACK_SPEED_CHANGED]: n.SPEED_CHANGED,
              [a.rU.PLAYER_MUTED_CHANGED]: n.MUTED_CHANGED,
            }),
              this.proxyEmitAllSync(e, {
                [a.rU.LIST_PLAYER_BEFORE_NEXT]: n.BEFORE_NEXT,
                [a.rU.LIST_PLAYER_BEFORE_PREVIOUS]: n.BEFORE_PREVIOUS,
                [a.rU.LIST_PLAYER_BEFORE_TRACK_LOAD]: n.BEFORE_TRACK_LOAD,
                [a.rU.LIST_PLAYER_ERROR_SYNC]: n.ERROR_SYNC,
                [a.rU.REPORTING_START]: n.REPORTING_START,
                [a.rU.REPORTING_FIRST_QUARTILE]: n.REPORTING_FIRST_QUARTILE,
                [a.rU.REPORTING_MIDPOINT]: n.REPORTING_MIDPOINT,
                [a.rU.REPORTING_THIRD_QUARTILE]: n.REPORTING_THIRD_QUARTILE,
                [a.rU.REPORTING_COMPLETE]: n.REPORTING_COMPLETE,
                [a.rU.REPORTING_PAUSE]: n.REPORTING_PAUSE,
                [a.rU.REPORTING_RESUME]: n.REPORTING_RESUME,
                [a.rU.REPORTING_CREATIVE_VIEW]: n.REPORTING_CREATIVE_VIEW,
                [a.rU.REPORTING_ERROR]: n.REPORTING_ERROR,
              }),
              (this._emitStateChanged = this._emitStateChanged.bind(this)),
              this.on(n.CLEARED, this._emitStateChanged),
              this.on(n.PAUSED, this._emitStateChanged),
              this.on(n.PLAYING, this._emitStateChanged),
              this.on(n.POSITION_CHANGED, this._emitStateChanged),
              this.on(n.STOPPED, this._emitStateChanged),
              this.on(n.LIST_CHANGED, this._emitStateChanged),
              this.on(n.VOLUME_CHANGED, this._emitStateChanged),
              this.on(n.SPEED_CHANGED, this._emitStateChanged),
              this.on(n.MUTED_CHANGED, this._emitStateChanged),
              this.on(n.TRACK_LOADED, this._emitStateChanged),
              this.on(n.DURATION_CHANGED, this._emitStateChanged),
              this.on(n.REBUFFERING_START, this._emitStateChanged),
              this.on(n.REBUFFERING_END, this._emitStateChanged),
              this._playerPromise
                .then(() => this.emit(n.PLAYER_INITIALIZATION_DONE, null))
                .catch((e) =>
                  this.emit(n.PLAYER_INITIALIZATION_FAILED, { error: e })
                ),
              this._transport.on(s.G0.BEFORE_ONLINE_DISCONNECT, (e) => {
                e.data.awaitPromise(
                  this._listPlayer.stop(a.KG.END_PLAY).catch((e) => {})
                );
              });
          }
          _emitStateChanged() {
            this._listPlayer.getState().then((e) => {
              this.emit(n.STATE_CHANGED, { state: e });
            });
          }
          playTracks(e, t) {
            return (
              this._autoActivateElement && this._listPlayer.activateElement(),
              new Promise((t) => {
                t(d.create({ tracks: e }));
              }).then((e) => this._listPlayer.play(e, t))
            );
          }
          playList(e, t) {
            return (
              this._autoActivateElement && this._listPlayer.activateElement(),
              this._listPlayer.play(e, t)
            );
          }
          getState() {
            return this.getCurrentState();
          }
          getCurrentState() {
            return this._listPlayer.getState();
          }
          pause() {
            return this._listPlayer.pause();
          }
          resume() {
            return this._listPlayer.resume();
          }
          togglePlay() {
            return this._listPlayer.togglePlay();
          }
          stop() {
            return this._listPlayer.stop(a.KG.END_PLAY);
          }
          seek(e) {
            return this._listPlayer.seek(e);
          }
          nextTrack() {
            return this._listPlayer.next(a.KG.FORWARD_BUTTON);
          }
          previousTrack() {
            return this._listPlayer.previous(a.KG.BACK_BUTTON);
          }
          getVolume() {
            return this._listPlayer.getVolume();
          }
          setVolume(e) {
            return this._listPlayer.setVolume(e);
          }
          setPlaybackSpeed(e) {
            return this._listPlayer.setPlaybackSpeed(e);
          }
          setMuted(e) {
            return this._listPlayer.setMuted(e);
          }
          activateElement() {
            return this._listPlayer.activateElement();
          }
          preloadTrack(e) {
            return this._listPlayer.preloadTrack(e);
          }
          hideSubtitles() {
            return this._listPlayer.hideSubtitles();
          }
          showSubtitles() {
            return this._listPlayer.showSubtitles();
          }
          getSubtitleLanguages() {
            return this._listPlayer.getSubtitleLanguages();
          }
          setSubtitleLanguage(e) {
            return this._listPlayer.setSubtitleLanguage(e);
          }
          areSubtitlesShown() {
            return this._listPlayer.areSubtitlesShown();
          }
          getActiveSubtitleLanguage() {
            return this._listPlayer.getActiveSubtitleLanguage();
          }
          getMediaConfig() {
            return this._listPlayer.getMediaConfig();
          }
          deactivateSubtitleEvents() {
            return this._listPlayer.deactivateCueEvents();
          }
          activateSubtitleEvents() {
            return this._listPlayer.activateCueEvents();
          }
        }
        Object.assign(Object.assign({}, s.JP), a.D1);
        let u = l.t.create,
          h = d.create;
        function c(e) {
          var t, i, r, n, s, o, l;
          let { transport: d, autoActivateElement: u, config: h } = e,
            c = null == h ? void 0 : h.mux,
            p = (0, a.MD)(
              Object.assign(Object.assign({}, h), {
                loggerOptions: {
                  platform: e.platform_identifier,
                  disableMux:
                    null ===
                      (i =
                        null !== (t = null == c ? void 0 : c.disable) &&
                        void 0 !== t
                          ? t
                          : null == h
                          ? void 0
                          : h.disableMux) ||
                    void 0 === i ||
                    i,
                  muxEnvKey:
                    null !== (r = null == c ? void 0 : c.envKey) && void 0 !== r
                      ? r
                      : null == h
                      ? void 0
                      : h.muxEnvKey,
                  muxCustomDimensions: null == c ? void 0 : c.customDimensions,
                  deviceInfo:
                    null !== (n = null == c ? void 0 : c.deviceInfo) &&
                    void 0 !== n
                      ? n
                      : null === (s = null == h ? void 0 : h.loggerOptions) ||
                        void 0 === s
                      ? void 0
                      : s.deviceInfo,
                },
                sdkId: "overture:2.25.0",
                transport: d.toPublic(),
                audioProcessorOptions: {
                  disable:
                    null ===
                      (l =
                        null ===
                          (o = null == h ? void 0 : h.audioProcessorOptions) ||
                        void 0 === o
                          ? void 0
                          : o.disable) ||
                    void 0 === l ||
                    l,
                },
              })
            ).then((e) => e.player),
            f = a._8.create({ trackPlayer: p });
          return _.create({
            listPlayer: f,
            playerPromise: p,
            transport: d,
            autoActivateElement: u,
          });
        }
      },
    },
  ]);
