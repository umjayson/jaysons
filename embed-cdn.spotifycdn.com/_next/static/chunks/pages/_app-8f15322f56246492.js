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
      (e._sentryDebugIds[t] = "c4407de3-0e81-45ad-94f7-179794e7efed"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c4407de3-0e81-45ad-94f7-179794e7efed"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888],
    {
      8417: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return W;
          },
        });
        var r = (function () {
            function e(e) {
              var t = this;
              (this._insertTag = function (e) {
                var n;
                (n =
                  0 === t.tags.length
                    ? t.insertionPoint
                      ? t.insertionPoint.nextSibling
                      : t.prepend
                      ? t.container.firstChild
                      : t.before
                    : t.tags[t.tags.length - 1].nextSibling),
                  t.container.insertBefore(e, n),
                  t.tags.push(e);
              }),
                (this.isSpeedy = void 0 === e.speedy || e.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = e.nonce),
                (this.key = e.key),
                (this.container = e.container),
                (this.prepend = e.prepend),
                (this.insertionPoint = e.insertionPoint),
                (this.before = null);
            }
            var t = e.prototype;
            return (
              (t.hydrate = function (e) {
                e.forEach(this._insertTag);
              }),
              (t.insert = function (e) {
                if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                  var t;
                  this._insertTag(
                    ((t = document.createElement("style")).setAttribute(
                      "data-emotion",
                      this.key
                    ),
                    void 0 !== this.nonce &&
                      t.setAttribute("nonce", this.nonce),
                    t.appendChild(document.createTextNode("")),
                    t.setAttribute("data-s", ""),
                    t)
                  );
                }
                var n = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                  var r = (function (e) {
                    if (e.sheet) return e.sheet;
                    for (var t = 0; t < document.styleSheets.length; t++)
                      if (document.styleSheets[t].ownerNode === e)
                        return document.styleSheets[t];
                  })(n);
                  try {
                    r.insertRule(e, r.cssRules.length);
                  } catch (e) {}
                } else n.appendChild(document.createTextNode(e));
                this.ctr++;
              }),
              (t.flush = function () {
                this.tags.forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
                  (this.tags = []),
                  (this.ctr = 0);
              }),
              e
            );
          })(),
          i = Math.abs,
          s = String.fromCharCode,
          o = Object.assign;
        function a(e, t, n) {
          return e.replace(t, n);
        }
        function l(e, t) {
          return e.indexOf(t);
        }
        function c(e, t) {
          return 0 | e.charCodeAt(t);
        }
        function u(e, t, n) {
          return e.slice(t, n);
        }
        function d(e) {
          return e.length;
        }
        function h(e, t) {
          return t.push(e), e;
        }
        var p = 1,
          f = 1,
          m = 0,
          _ = 0,
          g = 0,
          y = "";
        function v(e, t, n, r, i, s, o) {
          return {
            value: e,
            root: t,
            parent: n,
            type: r,
            props: i,
            children: s,
            line: p,
            column: f,
            length: o,
            return: "",
          };
        }
        function E(e, t) {
          return o(
            v("", null, null, "", null, null, 0),
            e,
            { length: -e.length },
            t
          );
        }
        function b() {
          return (
            (g = _ < m ? c(y, _++) : 0), f++, 10 === g && ((f = 1), p++), g
          );
        }
        function T() {
          return c(y, _);
        }
        function S(e) {
          switch (e) {
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            case 59:
            case 123:
            case 125:
              return 4;
            case 58:
              return 3;
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }
        function w(e) {
          return (p = f = 1), (m = d((y = e))), (_ = 0), [];
        }
        function O(e) {
          var t, n;
          return ((t = _ - 1),
          (n = (function e(t) {
            for (; b(); )
              switch (g) {
                case t:
                  return _;
                case 34:
                case 39:
                  34 !== t && 39 !== t && e(g);
                  break;
                case 40:
                  41 === t && e(t);
                  break;
                case 92:
                  b();
              }
            return _;
          })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
          u(y, t, n)).trim();
        }
        var R = "-ms-",
          N = "-moz-",
          C = "-webkit-",
          I = "comm",
          A = "rule",
          k = "decl",
          P = "@keyframes";
        function D(e, t) {
          for (var n = "", r = e.length, i = 0; i < r; i++)
            n += t(e[i], i, e, t) || "";
          return n;
        }
        function x(e, t, n, r) {
          switch (e.type) {
            case "@layer":
              if (e.children.length) break;
            case "@import":
            case k:
              return (e.return = e.return || e.value);
            case I:
              return "";
            case P:
              return (e.return = e.value + "{" + D(e.children, r) + "}");
            case A:
              e.value = e.props.join(",");
          }
          return d((n = D(e.children, r)))
            ? (e.return = e.value + "{" + n + "}")
            : "";
        }
        function L(e, t, n, r, s, o, l, c, d, h, p) {
          for (
            var f = s - 1,
              m = 0 === s ? o : [""],
              _ = m.length,
              g = 0,
              y = 0,
              E = 0;
            g < r;
            ++g
          )
            for (
              var b = 0, T = u(e, f + 1, (f = i((y = l[g])))), S = e;
              b < _;
              ++b
            )
              (S = (y > 0 ? m[b] + " " + T : a(T, /&\f/g, m[b])).trim()) &&
                (d[E++] = S);
          return v(e, t, n, 0 === s ? A : c, d, h, p);
        }
        function M(e, t, n, r) {
          return v(e, t, n, k, u(e, 0, r), u(e, r + 1, -1), r);
        }
        var j = function (e, t, n) {
            for (
              var r = 0, i = 0;
              (r = i), (i = T()), 38 === r && 12 === i && (t[n] = 1), !S(i);

            )
              b();
            return u(y, e, _);
          },
          U = function (e, t) {
            var n = -1,
              r = 44;
            do
              switch (S(r)) {
                case 0:
                  38 === r && 12 === T() && (t[n] = 1),
                    (e[n] += j(_ - 1, t, n));
                  break;
                case 2:
                  e[n] += O(r);
                  break;
                case 4:
                  if (44 === r) {
                    (e[++n] = 58 === T() ? "&\f" : ""), (t[n] = e[n].length);
                    break;
                  }
                default:
                  e[n] += s(r);
              }
            while ((r = b()));
            return e;
          },
          F = function (e, t) {
            var n;
            return (n = U(w(e), t)), (y = ""), n;
          },
          $ = new WeakMap(),
          B = function (e) {
            if ("rule" === e.type && e.parent && !(e.length < 1)) {
              for (
                var t = e.value,
                  n = e.parent,
                  r = e.column === n.column && e.line === n.line;
                "rule" !== n.type;

              )
                if (!(n = n.parent)) return;
              if (
                (1 !== e.props.length || 58 === t.charCodeAt(0) || $.get(n)) &&
                !r
              ) {
                $.set(e, !0);
                for (
                  var i = [], s = F(t, i), o = n.props, a = 0, l = 0;
                  a < s.length;
                  a++
                )
                  for (var c = 0; c < o.length; c++, l++)
                    e.props[l] = i[a]
                      ? s[a].replace(/&\f/g, o[c])
                      : o[c] + " " + s[a];
              }
            }
          },
          q = function (e) {
            if ("decl" === e.type) {
              var t = e.value;
              108 === t.charCodeAt(0) &&
                98 === t.charCodeAt(2) &&
                ((e.return = ""), (e.value = ""));
            }
          },
          H = [
            function (e, t, n, r) {
              if (e.length > -1 && !e.return)
                switch (e.type) {
                  case k:
                    e.return = (function e(t, n) {
                      switch (
                        45 ^ c(t, 0)
                          ? (((((((n << 2) ^ c(t, 0)) << 2) ^ c(t, 1)) << 2) ^
                              c(t, 2)) <<
                              2) ^
                            c(t, 3)
                          : 0
                      ) {
                        case 5103:
                          return C + "print-" + t + t;
                        case 5737:
                        case 4201:
                        case 3177:
                        case 3433:
                        case 1641:
                        case 4457:
                        case 2921:
                        case 5572:
                        case 6356:
                        case 5844:
                        case 3191:
                        case 6645:
                        case 3005:
                        case 6391:
                        case 5879:
                        case 5623:
                        case 6135:
                        case 4599:
                        case 4855:
                        case 4215:
                        case 6389:
                        case 5109:
                        case 5365:
                        case 5621:
                        case 3829:
                          return C + t + t;
                        case 5349:
                        case 4246:
                        case 4810:
                        case 6968:
                        case 2756:
                          return C + t + N + t + R + t + t;
                        case 6828:
                        case 4268:
                          return C + t + R + t + t;
                        case 6165:
                          return C + t + R + "flex-" + t + t;
                        case 5187:
                          return (
                            C +
                            t +
                            a(
                              t,
                              /(\w+).+(:[^]+)/,
                              C + "box-$1$2" + R + "flex-$1$2"
                            ) +
                            t
                          );
                        case 5443:
                          return (
                            C +
                            t +
                            R +
                            "flex-item-" +
                            a(t, /flex-|-self/, "") +
                            t
                          );
                        case 4675:
                          return (
                            C +
                            t +
                            R +
                            "flex-line-pack" +
                            a(t, /align-content|flex-|-self/, "") +
                            t
                          );
                        case 5548:
                          return C + t + R + a(t, "shrink", "negative") + t;
                        case 5292:
                          return (
                            C + t + R + a(t, "basis", "preferred-size") + t
                          );
                        case 6060:
                          return (
                            C +
                            "box-" +
                            a(t, "-grow", "") +
                            C +
                            t +
                            R +
                            a(t, "grow", "positive") +
                            t
                          );
                        case 4554:
                          return (
                            C + a(t, /([^-])(transform)/g, "$1" + C + "$2") + t
                          );
                        case 6187:
                          return (
                            a(
                              a(
                                a(t, /(zoom-|grab)/, C + "$1"),
                                /(image-set)/,
                                C + "$1"
                              ),
                              t,
                              ""
                            ) + t
                          );
                        case 5495:
                        case 3959:
                          return a(t, /(image-set\([^]*)/, C + "$1$`$1");
                        case 4968:
                          return (
                            a(
                              a(
                                t,
                                /(.+:)(flex-)?(.*)/,
                                C + "box-pack:$3" + R + "flex-pack:$3"
                              ),
                              /s.+-b[^;]+/,
                              "justify"
                            ) +
                            C +
                            t +
                            t
                          );
                        case 4095:
                        case 3583:
                        case 4068:
                        case 2532:
                          return a(t, /(.+)-inline(.+)/, C + "$1$2") + t;
                        case 8116:
                        case 7059:
                        case 5753:
                        case 5535:
                        case 5445:
                        case 5701:
                        case 4933:
                        case 4677:
                        case 5533:
                        case 5789:
                        case 5021:
                        case 4765:
                          if (d(t) - 1 - n > 6)
                            switch (c(t, n + 1)) {
                              case 109:
                                if (45 !== c(t, n + 4)) break;
                              case 102:
                                return (
                                  a(
                                    t,
                                    /(.+:)(.+)-([^]+)/,
                                    "$1" +
                                      C +
                                      "$2-$3$1" +
                                      N +
                                      (108 == c(t, n + 3) ? "$3" : "$2-$3")
                                  ) + t
                                );
                              case 115:
                                return ~l(t, "stretch")
                                  ? e(a(t, "stretch", "fill-available"), n) + t
                                  : t;
                            }
                          break;
                        case 4949:
                          if (115 !== c(t, n + 1)) break;
                        case 6444:
                          switch (
                            c(t, d(t) - 3 - (~l(t, "!important") && 10))
                          ) {
                            case 107:
                              return a(t, ":", ":" + C) + t;
                            case 101:
                              return (
                                a(
                                  t,
                                  /(.+:)([^;!]+)(;|!.+)?/,
                                  "$1" +
                                    C +
                                    (45 === c(t, 14) ? "inline-" : "") +
                                    "box$3$1" +
                                    C +
                                    "$2$3$1" +
                                    R +
                                    "$2box$3"
                                ) + t
                              );
                          }
                          break;
                        case 5936:
                          switch (c(t, n + 11)) {
                            case 114:
                              return (
                                C + t + R + a(t, /[svh]\w+-[tblr]{2}/, "tb") + t
                              );
                            case 108:
                              return (
                                C +
                                t +
                                R +
                                a(t, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                                t
                              );
                            case 45:
                              return (
                                C + t + R + a(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                              );
                          }
                          return C + t + R + t + t;
                      }
                      return t;
                    })(e.value, e.length);
                    break;
                  case P:
                    return D([E(e, { value: a(e.value, "@", "@" + C) })], r);
                  case A:
                    if (e.length) {
                      var i, s;
                      return (
                        (i = e.props),
                        (s = function (t) {
                          var n;
                          switch (
                            ((n = t),
                            (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n)
                          ) {
                            case ":read-only":
                            case ":read-write":
                              return D(
                                [
                                  E(e, {
                                    props: [
                                      a(t, /:(read-\w+)/, ":" + N + "$1"),
                                    ],
                                  }),
                                ],
                                r
                              );
                            case "::placeholder":
                              return D(
                                [
                                  E(e, {
                                    props: [
                                      a(t, /:(plac\w+)/, ":" + C + "input-$1"),
                                    ],
                                  }),
                                  E(e, {
                                    props: [a(t, /:(plac\w+)/, ":" + N + "$1")],
                                  }),
                                  E(e, {
                                    props: [a(t, /:(plac\w+)/, R + "input-$1")],
                                  }),
                                ],
                                r
                              );
                          }
                          return "";
                        }),
                        i.map(s).join("")
                      );
                    }
                }
            },
          ],
          W = function (e) {
            var t,
              n,
              i,
              o,
              m,
              E,
              R = e.key;
            if ("css" === R) {
              var N = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
              );
              Array.prototype.forEach.call(N, function (e) {
                -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                  (document.head.appendChild(e), e.setAttribute("data-s", ""));
              });
            }
            var C = e.stylisPlugins || H,
              A = {},
              k = [];
            (o = e.container || document.head),
              Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + R + ' "]'),
                function (e) {
                  for (
                    var t = e.getAttribute("data-emotion").split(" "), n = 1;
                    n < t.length;
                    n++
                  )
                    A[t[n]] = !0;
                  k.push(e);
                }
              );
            var P =
                ((n = (t = [B, q].concat(C, [
                  x,
                  ((i = function (e) {
                    E.insert(e);
                  }),
                  function (e) {
                    !e.root && (e = e.return) && i(e);
                  }),
                ])).length),
                function (e, r, i, s) {
                  for (var o = "", a = 0; a < n; a++)
                    o += t[a](e, r, i, s) || "";
                  return o;
                }),
              j = function (e) {
                var t, n;
                return D(
                  ((n = (function e(t, n, r, i, o, m, E, w, R) {
                    for (
                      var N,
                        C = 0,
                        A = 0,
                        k = E,
                        P = 0,
                        D = 0,
                        x = 0,
                        j = 1,
                        U = 1,
                        F = 1,
                        $ = 0,
                        B = "",
                        q = o,
                        H = m,
                        W = i,
                        z = B;
                      U;

                    )
                      switch (((x = $), ($ = b()))) {
                        case 40:
                          if (108 != x && 58 == c(z, k - 1)) {
                            -1 != l((z += a(O($), "&", "&\f")), "&\f") &&
                              (F = -1);
                            break;
                          }
                        case 34:
                        case 39:
                        case 91:
                          z += O($);
                          break;
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                          z += (function (e) {
                            for (; (g = T()); )
                              if (g < 33) b();
                              else break;
                            return S(e) > 2 || S(g) > 3 ? "" : " ";
                          })(x);
                          break;
                        case 92:
                          z += (function (e, t) {
                            for (
                              var n;
                              --t &&
                              b() &&
                              !(g < 48) &&
                              !(g > 102) &&
                              (!(g > 57) || !(g < 65)) &&
                              (!(g > 70) || !(g < 97));

                            );
                            return (
                              (n = _ + (t < 6 && 32 == T() && 32 == b())),
                              u(y, e, n)
                            );
                          })(_ - 1, 7);
                          continue;
                        case 47:
                          switch (T()) {
                            case 42:
                            case 47:
                              h(
                                v(
                                  (N = (function (e, t) {
                                    for (; b(); )
                                      if (e + g === 57) break;
                                      else if (e + g === 84 && 47 === T())
                                        break;
                                    return (
                                      "/*" +
                                      u(y, t, _ - 1) +
                                      "*" +
                                      s(47 === e ? e : b())
                                    );
                                  })(b(), _)),
                                  n,
                                  r,
                                  I,
                                  s(g),
                                  u(N, 2, -2),
                                  0
                                ),
                                R
                              );
                              break;
                            default:
                              z += "/";
                          }
                          break;
                        case 123 * j:
                          w[C++] = d(z) * F;
                        case 125 * j:
                        case 59:
                        case 0:
                          switch ($) {
                            case 0:
                            case 125:
                              U = 0;
                            case 59 + A:
                              -1 == F && (z = a(z, /\f/g, "")),
                                D > 0 &&
                                  d(z) - k &&
                                  h(
                                    D > 32
                                      ? M(z + ";", i, r, k - 1)
                                      : M(a(z, " ", "") + ";", i, r, k - 2),
                                    R
                                  );
                              break;
                            case 59:
                              z += ";";
                            default:
                              if (
                                (h(
                                  (W = L(
                                    z,
                                    n,
                                    r,
                                    C,
                                    A,
                                    o,
                                    w,
                                    B,
                                    (q = []),
                                    (H = []),
                                    k
                                  )),
                                  m
                                ),
                                123 === $)
                              ) {
                                if (0 === A) e(z, n, W, W, q, m, k, w, H);
                                else
                                  switch (
                                    99 === P && 110 === c(z, 3) ? 100 : P
                                  ) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                      e(
                                        t,
                                        W,
                                        W,
                                        i &&
                                          h(
                                            L(
                                              t,
                                              W,
                                              W,
                                              0,
                                              0,
                                              o,
                                              w,
                                              B,
                                              o,
                                              (q = []),
                                              k
                                            ),
                                            H
                                          ),
                                        o,
                                        H,
                                        k,
                                        w,
                                        i ? q : H
                                      );
                                      break;
                                    default:
                                      e(z, W, W, W, [""], H, 0, w, H);
                                  }
                              }
                          }
                          (C = A = D = 0), (j = F = 1), (B = z = ""), (k = E);
                          break;
                        case 58:
                          (k = 1 + d(z)), (D = x);
                        default:
                          if (j < 1) {
                            if (123 == $) --j;
                            else if (
                              125 == $ &&
                              0 == j++ &&
                              125 ==
                                ((g = _ > 0 ? c(y, --_) : 0),
                                f--,
                                10 === g && ((f = 1), p--),
                                g)
                            )
                              continue;
                          }
                          switch (((z += s($)), $ * j)) {
                            case 38:
                              F = A > 0 ? 1 : ((z += "\f"), -1);
                              break;
                            case 44:
                              (w[C++] = (d(z) - 1) * F), (F = 1);
                              break;
                            case 64:
                              45 === T() && (z += O(b())),
                                (P = T()),
                                (A = k =
                                  d(
                                    (B = z +=
                                      (function (e) {
                                        for (; !S(T()); ) b();
                                        return u(y, e, _);
                                      })(_))
                                  )),
                                $++;
                              break;
                            case 45:
                              45 === x && 2 == d(z) && (j = 0);
                          }
                      }
                    return m;
                  })("", null, null, null, [""], (t = w((t = e))), 0, [0], t)),
                  (y = ""),
                  n),
                  P
                );
              };
            m = function (e, t, n, r) {
              (E = n),
                j(e ? e + "{" + t.styles + "}" : t.styles),
                r && (U.inserted[t.name] = !0);
            };
            var U = {
              key: R,
              sheet: new r({
                key: R,
                container: o,
                nonce: e.nonce,
                speedy: e.speedy,
                prepend: e.prepend,
                insertionPoint: e.insertionPoint,
              }),
              nonce: e.nonce,
              inserted: A,
              registered: {},
              insert: m,
            };
            return U.sheet.hydrate(k), U;
          };
      },
      45042: function (e, t, n) {
        "use strict";
        function r(e) {
          var t = Object.create(null);
          return function (n) {
            return void 0 === t[n] && (t[n] = e(n)), t[n];
          };
        }
        n.d(t, {
          Z: function () {
            return r;
          },
        });
      },
      37542: function (e, t, n) {
        "use strict";
        n.d(t, {
          xB: function () {
            return h;
          },
          iv: function () {
            return p;
          },
        });
        var r,
          i = n(67294),
          s = n.t(i, 2),
          o = n(8417),
          a = n(62324),
          l =
            (!!s.useInsertionEffect && s.useInsertionEffect) ||
            i.useLayoutEffect,
          c = i.createContext(
            "undefined" != typeof HTMLElement ? (0, o.Z)({ key: "css" }) : null
          );
        c.Provider;
        var u = i.createContext({}),
          d = n(70444);
        n(8679);
        var h =
          ((r = function (e, t) {
            var n = e.styles,
              r = (0, a.O)([n], void 0, i.useContext(u)),
              s = i.useRef();
            return (
              l(
                function () {
                  var e = t.key + "-global",
                    n = new t.sheet.constructor({
                      key: e,
                      nonce: t.sheet.nonce,
                      container: t.sheet.container,
                      speedy: t.sheet.isSpeedy,
                    }),
                    i = !1,
                    o = document.querySelector(
                      'style[data-emotion="' + e + " " + r.name + '"]'
                    );
                  return (
                    t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                    null !== o &&
                      ((i = !0),
                      o.setAttribute("data-emotion", e),
                      n.hydrate([o])),
                    (s.current = [n, i]),
                    function () {
                      n.flush();
                    }
                  );
                },
                [t]
              ),
              l(
                function () {
                  var e = s.current,
                    n = e[0];
                  if (e[1]) {
                    e[1] = !1;
                    return;
                  }
                  if (
                    (void 0 !== r.next && (0, d.My)(t, r.next, !0),
                    n.tags.length)
                  ) {
                    var i = n.tags[n.tags.length - 1].nextElementSibling;
                    (n.before = i), n.flush();
                  }
                  t.insert("", r, n, !1);
                },
                [t, r.name]
              ),
              null
            );
          }),
          (0, i.forwardRef)(function (e, t) {
            return r(e, (0, i.useContext)(c), t);
          }));
        function p() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return (0, a.O)(t);
        }
      },
      62324: function (e, t, n) {
        "use strict";
        n.d(t, {
          O: function () {
            return f;
          },
        });
        var r,
          i = {
            animationIterationCount: 1,
            aspectRatio: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
          },
          s = n(45042),
          o = /[A-Z]|^ms/g,
          a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
          l = function (e) {
            return 45 === e.charCodeAt(1);
          },
          c = function (e) {
            return null != e && "boolean" != typeof e;
          },
          u = (0, s.Z)(function (e) {
            return l(e) ? e : e.replace(o, "-$&").toLowerCase();
          }),
          d = function (e, t) {
            switch (e) {
              case "animation":
              case "animationName":
                if ("string" == typeof t)
                  return t.replace(a, function (e, t, n) {
                    return (r = { name: t, styles: n, next: r }), t;
                  });
            }
            return 1 === i[e] || l(e) || "number" != typeof t || 0 === t
              ? t
              : t + "px";
          };
        function h(e, t, n) {
          if (null == n) return "";
          if (void 0 !== n.__emotion_styles) return n;
          switch (typeof n) {
            case "boolean":
              return "";
            case "object":
              if (1 === n.anim)
                return (
                  (r = { name: n.name, styles: n.styles, next: r }), n.name
                );
              if (void 0 !== n.styles) {
                var i = n.next;
                if (void 0 !== i)
                  for (; void 0 !== i; )
                    (r = { name: i.name, styles: i.styles, next: r }),
                      (i = i.next);
                return n.styles + ";";
              }
              return (function (e, t, n) {
                var r = "";
                if (Array.isArray(n))
                  for (var i = 0; i < n.length; i++) r += h(e, t, n[i]) + ";";
                else
                  for (var s in n) {
                    var o = n[s];
                    if ("object" != typeof o)
                      null != t && void 0 !== t[o]
                        ? (r += s + "{" + t[o] + "}")
                        : c(o) && (r += u(s) + ":" + d(s, o) + ";");
                    else if (
                      Array.isArray(o) &&
                      "string" == typeof o[0] &&
                      (null == t || void 0 === t[o[0]])
                    )
                      for (var a = 0; a < o.length; a++)
                        c(o[a]) && (r += u(s) + ":" + d(s, o[a]) + ";");
                    else {
                      var l = h(e, t, o);
                      switch (s) {
                        case "animation":
                        case "animationName":
                          r += u(s) + ":" + l + ";";
                          break;
                        default:
                          r += s + "{" + l + "}";
                      }
                    }
                  }
                return r;
              })(e, t, n);
            case "function":
              if (void 0 !== e) {
                var s = r,
                  o = n(e);
                return (r = s), h(e, t, o);
              }
          }
          if (null == t) return n;
          var a = t[n];
          return void 0 !== a ? a : n;
        }
        var p = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
          f = function (e, t, n) {
            if (
              1 === e.length &&
              "object" == typeof e[0] &&
              null !== e[0] &&
              void 0 !== e[0].styles
            )
              return e[0];
            var i,
              s = !0,
              o = "";
            r = void 0;
            var a = e[0];
            null == a || void 0 === a.raw
              ? ((s = !1), (o += h(n, t, a)))
              : (o += a[0]);
            for (var l = 1; l < e.length; l++)
              (o += h(n, t, e[l])), s && (o += a[l]);
            p.lastIndex = 0;
            for (var c = ""; null !== (i = p.exec(o)); ) c += "-" + i[1];
            return {
              name:
                (function (e) {
                  for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
                    (t =
                      (65535 &
                        (t =
                          (255 & e.charCodeAt(r)) |
                          ((255 & e.charCodeAt(++r)) << 8) |
                          ((255 & e.charCodeAt(++r)) << 16) |
                          ((255 & e.charCodeAt(++r)) << 24))) *
                        1540483477 +
                      (((t >>> 16) * 59797) << 16)),
                      (t ^= t >>> 24),
                      (n =
                        ((65535 & t) * 1540483477 +
                          (((t >>> 16) * 59797) << 16)) ^
                        ((65535 & n) * 1540483477 +
                          (((n >>> 16) * 59797) << 16)));
                  switch (i) {
                    case 3:
                      n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                      n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                      (n ^= 255 & e.charCodeAt(r)),
                        (n =
                          (65535 & n) * 1540483477 +
                          (((n >>> 16) * 59797) << 16));
                  }
                  return (
                    (n ^= n >>> 13),
                    (
                      ((n =
                        (65535 & n) * 1540483477 +
                        (((n >>> 16) * 59797) << 16)) ^
                        (n >>> 15)) >>>
                      0
                    ).toString(36)
                  );
                })(o) + c,
              styles: o,
              next: r,
            };
          };
      },
      70444: function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          var r = "";
          return (
            n.split(" ").forEach(function (n) {
              void 0 !== e[n] ? t.push(e[n] + ";") : (r += n + " ");
            }),
            r
          );
        }
        n.d(t, {
          My: function () {
            return s;
          },
          fp: function () {
            return r;
          },
        });
        var i = function (e, t, n) {
            var r = e.key + "-" + t.name;
            !1 === n &&
              void 0 === e.registered[r] &&
              (e.registered[r] = t.styles);
          },
          s = function (e, t, n) {
            i(e, t, n);
            var r = e.key + "-" + t.name;
            if (void 0 === e.inserted[t.name]) {
              var s = t;
              do e.insert(t === s ? "." + r : "", s, e.sheet, !0), (s = s.next);
              while (void 0 !== s);
            }
          };
      },
      28627: function (e, t, n) {
        "use strict";
        n.d(t, {
          P: function () {
            return s;
          },
        });
        var r,
          i,
          s = {};
        n.r(s),
          n.d(s, {
            disable: function () {
              return E;
            },
            disableAll: function () {
              return S;
            },
            enable: function () {
              return v;
            },
            enableAll: function () {
              return T;
            },
            forTag: function () {
              return w;
            },
            intercept: function () {
              return _;
            },
            list: function () {
              return y;
            },
            remove: function () {
              return O;
            },
            setLevel: function () {
              return b;
            },
            unintercept: function () {
              return g;
            },
          }),
          ((r = i || (i = {}))[(r.NONE = 0)] = "NONE"),
          (r[(r.LOG = 1)] = "LOG"),
          (r[(r.DEBUG = 2)] = "DEBUG"),
          (r[(r.INFO = 4)] = "INFO"),
          (r[(r.WARN = 8)] = "WARN"),
          (r[(r.ERROR = 16)] = "ERROR");
        class o {
          constructor() {
            (this.tag = ""), (this.description = "");
          }
          matchesTag() {
            return !1;
          }
          setLevel() {}
          enable() {}
          disable() {}
          log() {}
          debug() {}
          info() {}
          warn() {}
          error() {}
        }
        var a = n(83454);
        class l {
          constructor(e, t = "", n = () => !1) {
            (this._tagParts = []),
              (this._tagText = ""),
              (this._enabled = !0),
              (this._level = i.NONE),
              (this.tag = ""),
              (this.description = ""),
              (this._predicate = function () {
                return !1;
              }),
              (this.tag = e),
              (this.description = t),
              (this._predicate = n),
              (this._tagParts = e.split(".")),
              (this._tagText = `[${e}]`);
          }
          _print(e, t, n) {
            if (!this._enabled && !(this._level & t)) return;
            let r = { args: n, type: e, tag: this.tag };
            this._predicate(r) || console[e](this._tagText, ...n);
          }
          matchesTag(e) {
            let t = Array.isArray(e) ? e : e.split("."),
              n = this._tagParts;
            if (t.length > n.length) return !1;
            for (let e = 0, r = t.length; e < r; e++)
              if (("*" !== t[e] || !n[e]) && t[e] !== n[e]) return !1;
            return !0;
          }
          setLevel(e) {
            let t = 0;
            switch (e) {
              case "error":
                t = i.ERROR;
                break;
              case "warn":
                t = i.WARN | i.ERROR;
                break;
              case "info":
                t = i.INFO | i.WARN | i.ERROR;
                break;
              case "debug":
                t = i.DEBUG | i.INFO | i.WARN | i.ERROR;
                break;
              default:
                t = i.LOG | i.DEBUG | i.INFO | i.WARN | i.ERROR;
            }
            this._level = t;
          }
          enable() {
            this._enabled = !0;
          }
          disable() {
            this._enabled = !1;
          }
          log(...e) {
            this._print("log", i.LOG, e);
          }
          debug(...e) {
            this._print("debug", i.DEBUG, e);
          }
          info(...e) {
            this._print("info", i.INFO, e);
          }
          warn(...e) {
            this._print("warn", i.WARN, e);
          }
          error(...e) {
            this._print("error", i.ERROR, e);
          }
        }
        let c = o;
        try {
          "true" === a.env.DEBUG && (c = l);
        } catch (e) {}
        let u = "__dbgLoggerRegistry",
          d = n.g[u];
        d ||
          ((d = { map: {}, list: [], loggingPredicate: function () {} }),
          Object.defineProperty
            ? Object.defineProperty(n.g, u, { value: d })
            : (n.g[u] = d));
        let h = d.map,
          p = d.list;
        function f(e) {
          return !!(d.loggingPredicate && d.loggingPredicate(e));
        }
        let m = "log";
        function _(e) {
          if ("function" != typeof e)
            throw TypeError("Logging.intercept requires a function predicate.");
          d.loggingPredicate = e;
        }
        function g() {
          d.loggingPredicate = () => {};
        }
        function y(e) {
          let t = Object.keys(h)
            .filter((e) => h[e])
            .sort();
          return e
            ? t.map((e) => ({
                tag: e,
                description: h[e].description || "No description.",
              }))
            : t.reduce(
                (e, t) => ((e[t] = h[t].description || "No description"), e),
                {}
              );
        }
        function v(e) {
          var t;
          let n = Array.isArray(e) ? e : [e],
            r = n.length;
          for (; r--; ) {
            let e =
                null === (t = n[r]) || void 0 === t ? void 0 : t.toLowerCase(),
              i = p.length;
            for (; i--; ) {
              let t = p[i];
              t.matchesTag(e) && t.enable();
            }
          }
        }
        function E(e) {
          var t;
          let n = Array.isArray(e) ? e : [e],
            r = n.length;
          for (; r--; ) {
            let e =
                null === (t = n[r]) || void 0 === t ? void 0 : t.toLowerCase(),
              i = p.length;
            for (; i--; ) {
              let t = p[i];
              t.matchesTag(e) && t.disable();
            }
          }
        }
        function b(e) {
          m = e;
          let t = p.length;
          for (; t--; ) {
            let n = p[t];
            n && n.setLevel(e);
          }
        }
        function T() {
          let e = p.length;
          for (; e--; ) p[e] && p[e].enable();
        }
        function S() {
          let e = p.length;
          for (; e--; ) p[e] && p[e].disable();
        }
        function w(e, t) {
          let n, r;
          if (
            ("string" == typeof e
              ? ((n = e.toLowerCase()), (r = t))
              : ((n = e.tag), (r = e.description)),
            h.hasOwnProperty(n) && h[n])
          )
            return h[n];
          let i = new c(n, r, f);
          return i.setLevel(m), (h[n] = i), p.push(i), i;
        }
        function O(e) {
          let t = e.toLowerCase();
          if (!h.hasOwnProperty(t) || !h[t]) return;
          let n = h[t];
          h[t] = null;
          let r = p.indexOf(n);
          -1 !== r && p.splice(r, 1);
        }
      },
      86360: function (e, t, n) {
        "use strict";
        n.d(t, {
          n: function () {
            return i;
          },
          q: function () {
            return r;
          },
        });
        let r = (function (e, t) {
            try {
              if ("number" == typeof e()) return e;
            } catch (e) {}
            let n = t(),
              r = 0;
            return () => (r = Math.max(r, t() - n));
          })(() => performance.now(), Date.now),
          i = (e, t = r()) => Math.round(Math.abs(t - e));
      },
      44583: function (e, t, n) {
        "use strict";
        function r() {
          let e, t;
          return {
            promise: new Promise((n, r) => {
              (e = n), (t = r);
            }),
            resolve: e,
            reject: t,
          };
        }
        n.d(t, {
          $: function () {
            return r;
          },
        });
      },
      9165: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            Base62: function () {
              return r;
            },
            Base64: function () {
              return i;
            },
          });
        var r = {};
        n.r(r),
          n.d(r, {
            fromBytes: function () {
              return d;
            },
            fromHex: function () {
              return f;
            },
            toBytes: function () {
              return h;
            },
            toHex: function () {
              return p;
            },
          });
        var i = {};
        n.r(i),
          n.d(i, {
            decode: function () {
              return y;
            },
            encode: function () {
              return g;
            },
          });
        let s =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
          o = {},
          a = {};
        function l(e, t, n) {
          let r = [0],
            i = [1];
          for (let s of e)
            (function (e, t, n, r) {
              let i,
                s,
                o = 0;
              for (s = 0; s < t.length; ++s)
                (i = ~~e[s] + t[s] * n + o), (e[s] = i % r), (o = ~~(i / r));
              for (; o; )
                (i = ~~e[s] + o), (e[s] = i % r), (o = ~~(i / r)), ++s;
            })(r, i, s, n),
              (function (e, t, n) {
                let r = 0;
                for (let i = 0; i < e.length; ++i) {
                  let s = e[i] * t + r;
                  (e[i] = s % n), (r = ~~(s / n));
                }
                for (; r; ) e.push(r % n), (r = ~~(r / n));
              })(i, t, n);
          return r;
        }
        function c(e, t) {
          let n = [];
          for (let r of e) n.push(t[r]);
          return n.reverse();
        }
        function u(e, t = 0) {
          for (; e.length < t; ) e.push(0);
          return e;
        }
        function d(e, t) {
          return c(u(l(e.slice(0).reverse(), 256, 62), t), s).join("");
        }
        function h(e, t) {
          return u(l(c(e.split(""), a), 62, 256), t).reverse();
        }
        function p(e, t) {
          let n = l(c(e.split(""), a), 62, 16);
          return c(u(n, t), s).join("");
        }
        function f(e, t) {
          let n = l(c(e.split(""), o), 16, 62);
          return c(u(n, t), s).join("");
        }
        !(function () {
          for (let e = 0, t = s.length; e < t; ++e) a[s[e]] = e;
          for (let e = 0; e < 16; ++e) o["0123456789abcdef"[e]] = e;
          for (let e = 0; e < 16; ++e) o["0123456789ABCDEF"[e]] = e;
        })();
        let m =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          _ = (() => {
            let e = [];
            for (let t = 0; t < 256; ++t) e[t] = 255;
            for (let t = 0; t < m.length; ++t) e[m.charCodeAt(t)] = t;
            return String.fromCharCode(...e);
          })(),
          g = function (e) {
            let t = String(e),
              n = [],
              r = t.length,
              i = 0;
            for (; i < r; ) {
              let e = 255 & t.charCodeAt(i++);
              if (i === r) {
                n.push(m.charAt(e >> 2), m.charAt((3 & e) << 4), "==");
                break;
              }
              let s = t.charCodeAt(i++);
              if (i === r) {
                n.push(
                  m.charAt(e >> 2),
                  m.charAt(((3 & e) << 4) | ((240 & s) >> 4)),
                  m.charAt((15 & s) << 2),
                  "="
                );
                break;
              }
              let o = t.charCodeAt(i++);
              n.push(
                m.charAt(e >> 2),
                m.charAt(((3 & e) << 4) | ((240 & s) >> 4)),
                m.charAt(((15 & s) << 2) | ((192 & o) >> 6)),
                m.charAt(63 & o)
              );
            }
            return n.join("");
          },
          y = function (e) {
            let t, n;
            let r = String(e),
              i = [],
              s = r.length,
              o = 0;
            for (;;) {
              do t = _.charCodeAt(255 & r.charCodeAt(o++));
              while (255 === t && o < s);
              do n = _.charCodeAt(255 & r.charCodeAt(o++));
              while (255 === n && o < s);
              if (255 === n) break;
              i.push(((t << 2) | (n >> 4)) & 255);
              do t = _.charCodeAt(255 & r.charCodeAt(o++));
              while (255 === t && o < s);
              if (255 === t) break;
              i.push(((n << 4) | (t >> 2)) & 255);
              do n = _.charCodeAt(255 & r.charCodeAt(o++));
              while (255 === n && o < s);
              if (255 === n) break;
              i.push(((t << 6) | n) & 255);
            }
            return (function (e) {
              if (e.length < 4096) return String.fromCharCode(...e);
              let t = 0,
                n = [];
              do
                n.push(String.fromCharCode(...e.slice(t, t + 4096))),
                  (t += 4096);
              while (t < e.length);
              return n.join("");
            })(i);
          };
        "undefined" != typeof window &&
          window.btoa &&
          window.atob &&
          ((g = (e) => window.btoa(e)), (y = (e) => window.atob(e)));
      },
      28611: function (e, t, n) {
        "use strict";
        let r;
        n.d(t, {
          B: function () {
            return i;
          },
          vp: function () {
            return h;
          },
        });
        class i {
          constructor(e, t) {
            (this.defaultPrevented = !1),
              (this.immediateStopped = !1),
              (this.stopped = !1),
              (this.type = e),
              (this.data = t);
          }
          preventDefault() {
            this.defaultPrevented = !0;
          }
          stopPropagation() {
            this.stopped = !0;
          }
          stopImmediatePropagation() {
            this.immediateStopped = !0;
          }
        }
        let s = "undefined" != typeof window,
          o = [];
        function a() {
          var e;
          let t = o.splice(0);
          if (t.length)
            for (let n = 0, r = t.length; n < r; n++)
              null === (e = t[n]) || void 0 === e || e.call(t);
        }
        s && "function" == typeof window.postMessage
          ? (function () {
              let e =
                window.location.origin ||
                `${window.location.protocol}//${window.location.hostname}`;
              if (
                ((r = window.postMessage.bind(window, "@execute_deferreds", e)),
                !window.__hasDeferredHandler)
              ) {
                "function" == typeof Object.defineProperty
                  ? Object.defineProperty(window, "__hasDeferredHandler", {
                      value: !0,
                    })
                  : (window.__hasDeferredHandler = !0);
                let t = function (t) {
                  (t.origin === e || "@execute_deferreds" === t.data) && a();
                };
                window.addEventListener
                  ? window.addEventListener("message", t)
                  : window.attachEvent && window.attachEvent("onmessage", t);
              }
            })()
          : "function" == typeof queueMicrotask
          ? (r = queueMicrotask.bind(null, a))
          : (r =
              "function" == typeof setImmediate
                ? setImmediate.bind(null, a)
                : setTimeout.bind(null, a, 10));
        let l = (e) => {
          let t = !o.length;
          o.push(e), t && r();
        };
        function c(e, t, n) {
          for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            if (
              (null == i ? void 0 : i.listener) === t &&
              i.options.once === n.once
            )
              return r;
          }
          return -1;
        }
        function u(e, t, n, r = {}) {
          if (!n) return !1;
          let i = e[t];
          return !i || !i.length || -1 === c(i, n, r);
        }
        function d(e, t, n, r = {}) {
          if (!t || !n) return;
          let i = e[t],
            s = { listener: n, options: r };
          if (!i) {
            e[t] = [s];
            return;
          }
          i.push(s);
        }
        s &&
          ("function" == typeof window.__modDefFn
            ? (l = window.__modDefFn)
            : "function" == typeof Object.defineProperty
            ? Object.defineProperty(window, "__modDefFn", { value: l })
            : (window.__modDefFn = l));
        class h {
          constructor() {
            (this._listeners = {}),
              (this._metaListeners = { add: {}, remove: {} });
          }
          _dispatchFromStore(e, t) {
            let n = t.type,
              r = e[n];
            if (r) {
              for (let e of (r = r.slice(0)))
                if (
                  (e.listener.call(this, t),
                  e.options.once &&
                    this.removeListener(n, e.listener, e.options),
                  t.immediateStopped)
                )
                  break;
            }
          }
          createEvent(e, t) {
            return new i(e, t);
          }
          on(e, t, n = {}) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            if (!t) return this;
            let r = this._listeners;
            if (u(r, e, t, n)) {
              let s = this._metaListeners.add,
                o = s[e];
              if (o && o.length) {
                let r = new i(e, { listener: t, options: n });
                if ((this._dispatchFromStore(s, r), r.defaultPrevented))
                  return this;
              }
              d(r, e, t, n);
            }
            return this;
          }
          addListener(e, t, n = {}) {
            return this.on(e, t, n);
          }
          addListeners(e) {
            for (let t in e) e.hasOwnProperty(t) && this.on(t, e[t]);
            return this;
          }
          once(e, t) {
            return this.on(e, t, { once: !0 });
          }
          removeListener(e, t, n = {}) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            if (!t) return this;
            let r = this._listeners[e];
            if (!r) return this;
            let s = c(r, t, n);
            if (-1 === s) return this;
            let o = this._metaListeners.remove[e];
            if (o && o.length) {
              let r = new i(e, { listener: t, options: n });
              if (
                (this._dispatchFromStore(this._metaListeners.remove, r),
                r.defaultPrevented)
              )
                return this;
            }
            return r.splice(s, 1), this;
          }
          removeListeners(e) {
            for (let t in e)
              e.hasOwnProperty(t) && this.removeListener(t, e[t]);
            return this;
          }
          removeAllListeners(e) {
            return e ? (this._listeners[e] = []) : (this._listeners = {}), this;
          }
          emit(e, t) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let n = this.createEvent(e, t);
            return l(() => this._dispatchFromStore(this._listeners, n)), n;
          }
          emitSync(e, t) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let n = this.createEvent(e, t);
            return this._dispatchFromStore(this._listeners, n), n;
          }
          emitEvent(e) {
            return l(() => this._dispatchFromStore(this._listeners, e)), e;
          }
          emitEventSync(e) {
            return this._dispatchFromStore(this._listeners, e), e;
          }
          emitAndWait(e, t, n) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let r = this.createEvent(e, t);
            return (
              l(() => {
                this._dispatchFromStore(this._listeners, r), n.call(this, r);
              }),
              r
            );
          }
          emitEventAndWait(e, t) {
            return (
              l(() => {
                this._dispatchFromStore(this._listeners, e), t.call(this, e);
              }),
              e
            );
          }
          proxyEmit(e, t, n) {
            if (!e || "function" != typeof e.on)
              throw TypeError("Proxy source must be an EventEmitter");
            if (e === this)
              throw ReferenceError("Cannot create recursive proxy.");
            if (!t || !n)
              throw TypeError(
                "Parameter sourceType and targetType are required."
              );
            let r = (e) => {
              e.stopped ||
                this.emitAndWait(n, e.data, (t) => {
                  t.defaultPrevented && e.preventDefault();
                });
            };
            return e.on(t, r), r;
          }
          proxyEmitSync(e, t, n) {
            if (!e || "function" != typeof e.on)
              throw TypeError("Proxy source must be an EventEmitter");
            if (e === this)
              throw ReferenceError("Cannot create recursive proxy.");
            if (!t || !n)
              throw TypeError(
                "Parameter sourceType and targetType are required."
              );
            let r = (e) => {
              if (e.stopped) return;
              let t = this.createEvent(n, e.data);
              this.emitEventSync(t), t.defaultPrevented && e.preventDefault();
            };
            return e.on(t, r), r;
          }
          proxyEmitAll(e, t) {
            for (let n in t) t.hasOwnProperty(n) && this.proxyEmit(e, n, t[n]);
          }
          proxyEmitAllSync(e, t) {
            for (let n in t)
              t.hasOwnProperty(n) && this.proxyEmitSync(e, n, t[n]);
          }
          onAddListener(e, t, n = {}) {
            let r = this._metaListeners.add;
            return u(r, e, t, n) && d(r, e, t, n), this;
          }
          onRemoveListener(e, t, n = {}) {
            let r = this._metaListeners.remove;
            return u(r, e, t, n) && d(r, e, t, n), this;
          }
        }
      },
      27712: function (e, t) {
        "use strict";
        (t.i = void 0),
          (t.i = function (e) {
            return {
              name: "EventSenderStats2NonAuth",
              environments: [
                "devicenonauth",
                "browsernonauth",
                "desktopnonauth",
              ],
              data: e,
            };
          });
      },
      61299: function (e, t) {
        "use strict";
        (t.t = void 0),
          (t.t = function (e) {
            return {
              name: "RejectedClientEventNonAuth",
              environments: [
                "browsernonauth",
                "desktopnonauth",
                "devicenonauth",
              ],
              data: e,
            };
          });
      },
      47483: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hexToBase64 = void 0);
        var r = n(9165);
        t.hexToBase64 = function (e) {
          if (!e || e.length % 2 != 0)
            throw TypeError("Invalid hexString value.");
          var t = e.split("").reduce(function (e, t, n) {
              return (
                n % 2 == 0
                  ? e.push(t)
                  : (e[e.length - 1] = "" + e[e.length - 1] + t),
                e
              );
            }, []),
            n = String.fromCharCode.apply(
              null,
              t.map(function (e) {
                var t = parseInt(e, 16);
                if (isNaN(t)) throw TypeError("Invalid hexString value.");
                return t;
              })
            );
          return r.Base64.encode(n);
        };
      },
      24844: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createApplicationContext = void 0),
          (t.createApplicationContext = function (e) {
            return function () {
              return { name: "context_application", data: e };
            };
          });
      },
      7623: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createApplicationDesktopContext = void 0),
          (t.createApplicationDesktopContext = function (e) {
            return function () {
              return { name: "context_application_desktop", data: e };
            };
          });
      },
      76262: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createCacheIdContext = void 0);
        var r = n(47483);
        t.createCacheIdContext = function (e) {
          var t = r.hexToBase64(e);
          return function () {
            return { name: "context_cache_id", data: { value: t } };
          };
        };
      },
      13877: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createClientIdContext = void 0);
        var r = n(47483);
        t.createClientIdContext = function (e) {
          var t = r.hexToBase64(e);
          return function () {
            return { name: "context_client_id", data: { value: t } };
          };
        };
      },
      28144: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createClientIpContext = void 0),
          (t.createClientIpContext = function (e) {
            return function () {
              return { name: "context_client_ip", data: { value: e } };
            };
          });
      },
      77115: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createCorrelationIdContext = void 0),
          (t.createCorrelationIdContext = function (e) {
            return function () {
              return { name: "context_correlation_id", data: { value: e } };
            };
          });
      },
      54586: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createDeviceContext = void 0),
          (t.createDeviceContext = function (e) {
            return function () {
              return { name: "context_device", data: e };
            };
          });
      },
      81446: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createDeviceDesktopContext = void 0),
          (t.createDeviceDesktopContext = function (e) {
            return function () {
              return { name: "context_device_desktop", data: e };
            };
          });
      },
      63770: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(97582);
        r.__exportStar(n(24844), t),
          r.__exportStar(n(7623), t),
          r.__exportStar(n(76262), t),
          r.__exportStar(n(13877), t),
          r.__exportStar(n(28144), t),
          r.__exportStar(n(77115), t),
          r.__exportStar(n(54586), t),
          r.__exportStar(n(81446), t),
          r.__exportStar(n(13349), t),
          r.__exportStar(n(30815), t),
          r.__exportStar(n(28964), t);
      },
      13349: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createInstallationIdContext = void 0);
        var r = n(47483);
        t.createInstallationIdContext = function (e) {
          var t = r.hexToBase64(e);
          return function () {
            return { name: "context_installation_id", data: { value: t } };
          };
        };
      },
      30815: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createOsContext = void 0),
          (t.createOsContext = function (e) {
            return function () {
              return { name: "context_os", data: e };
            };
          });
      },
      28964: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createUserAgentContext = void 0),
          (t.createUserAgentContext = function (e) {
            if (!e && "undefined" == typeof navigator)
              throw Error(
                "userAgent is not provided and navigator.UserAgent is not available"
              );
            return function () {
              return {
                name: "context_user_agent",
                data: { value: e || navigator.userAgent },
              };
            };
          });
      },
      47582: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            Environment: function () {
              return a;
            },
            EventSenderEvent: function () {
              return c;
            },
            createEventSender: function () {
              return U;
            },
          }),
          ((o = a || (a = {})).BACKEND = "BACKEND"),
          (o.BROWSER = "BROWSER"),
          (o.BROWSER_NON_AUTH = "BROWSER_NON_AUTH"),
          (o.DESKTOP = "DESKTOP"),
          (o.DESKTOP_NON_AUTH = "DESKTOP_NON_AUTH"),
          (o.DEVICE = "DEVICE"),
          (o.DEVICE_NON_AUTH = "DEVICE_NON_AUTH");
        var r,
          i,
          s,
          o,
          a,
          l,
          c,
          u,
          d = n(97582),
          h = n(71934);
        n(83454),
          ((r = l || (l = {}))[(r.NONE = 0)] = "NONE"),
          (r[(r.LOG = 1)] = "LOG"),
          (r[(r.DEBUG = 2)] = "DEBUG"),
          (r[(r.INFO = 4)] = "INFO"),
          (r[(r.WARN = 8)] = "WARN"),
          (r[(r.ERROR = 16)] = "ERROR");
        class p {
          constructor() {
            (this.tag = ""), (this.description = "");
          }
          matchesTag() {
            return !1;
          }
          setLevel() {}
          enable() {}
          disable() {}
          log() {}
          debug() {}
          info() {}
          warn() {}
          error() {}
        }
        var f = n(83454);
        class m {
          constructor(e, t = "", n = () => !1) {
            (this._tagParts = []),
              (this._tagText = ""),
              (this._enabled = !0),
              (this._level = l.NONE),
              (this.tag = ""),
              (this.description = ""),
              (this._predicate = function () {
                return !1;
              }),
              (this.tag = e),
              (this.description = t),
              (this._predicate = n),
              (this._tagParts = e.split(".")),
              (this._tagText = `[${e}]`);
          }
          _print(e, t, n) {
            if (!this._enabled && !(this._level & t)) return;
            let r = { args: n, type: e, tag: this.tag };
            this._predicate(r) || console[e](this._tagText, ...n);
          }
          matchesTag(e) {
            let t = Array.isArray(e) ? e : e.split("."),
              n = this._tagParts;
            if (t.length > n.length) return !1;
            for (let e = 0, r = t.length; e < r; e++)
              if (("*" !== t[e] || !n[e]) && t[e] !== n[e]) return !1;
            return !0;
          }
          setLevel(e) {
            let t = 0;
            switch (e) {
              case "error":
                t = l.ERROR;
                break;
              case "warn":
                t = l.WARN | l.ERROR;
                break;
              case "info":
                t = l.INFO | l.WARN | l.ERROR;
                break;
              case "debug":
                t = l.DEBUG | l.INFO | l.WARN | l.ERROR;
                break;
              default:
                t = l.LOG | l.DEBUG | l.INFO | l.WARN | l.ERROR;
            }
            this._level = t;
          }
          enable() {
            this._enabled = !0;
          }
          disable() {
            this._enabled = !1;
          }
          log(...e) {
            this._print("log", l.LOG, e);
          }
          debug(...e) {
            this._print("debug", l.DEBUG, e);
          }
          info(...e) {
            this._print("info", l.INFO, e);
          }
          warn(...e) {
            this._print("warn", l.WARN, e);
          }
          error(...e) {
            this._print("error", l.ERROR, e);
          }
        }
        let _ = void 0 !== f && "true" === f.env.DEBUG ? m : p,
          g = "__dbgLoggerRegistry",
          y = n.g[g];
        y ||
          ((y = { map: {}, list: [], loggingPredicate: function () {} }),
          Object.defineProperty
            ? Object.defineProperty(n.g, g, { value: y })
            : (n.g[g] = y));
        let v = y.map,
          E = y.list;
        function b(e) {
          return !!(y.loggingPredicate && y.loggingPredicate(e));
        }
        function T(e, t) {
          let n, r;
          if (
            ("string" == typeof e
              ? ((n = e.toLowerCase()), (r = t))
              : ((n = e.tag), (r = e.description)),
            v.hasOwnProperty(n) && v[n])
          )
            return v[n];
          let i = new _(n, r, b);
          return i.setLevel("log"), (v[n] = i), E.push(i), i;
        }
        var S = n(28611);
        ((i = c || (c = {})).UPLOAD_SUCCEEDED = "upload_succeeded"),
          (i.UPLOAD_FAILED = "upload_failed"),
          (i.UPLOAD_REQUEST_FAILED = "upload_request_failed");
        let w = T("Uploader");
        class O extends S.vp {
          constructor(e) {
            var t;
            super(),
              (this._suppressPersist = !1),
              (this._backoff = !1),
              (this._authorize =
                null === (t = e.authorize) || void 0 === t || t),
              (this._transport = e.transport),
              (this._suppressPersist = !!e.suppressPersist),
              (this._endpoint = this._authorize
                ? "@webgate/gabo-receiver-service/v3/events"
                : "@webgate/gabo-receiver-service/public/v3/events");
          }
          _uploadBatch(e, t = !1) {
            let n = this._transport,
              r =
                t && this._authorize
                  ? n.appendLastTokenQuery(this._endpoint)
                  : this._endpoint;
            return this._transport
              .request(r, {
                method: h.n$.POST,
                metadata: { eventSenderEventNames: e.map((e) => e.event_name) },
                headers: { "content-type": "application/json" },
                responseType: "json",
                parseResponseHeaders: !0,
                payload: JSON.stringify({
                  suppress_persist: this._suppressPersist,
                  events: e,
                }),
                forget: t,
                authorize: !t && this._authorize,
              })
              .then(this._parseUploadResponse.bind(this, e, t));
          }
          _parseUploadResponse(e, t, n) {
            if (t) return Promise.resolve([]);
            let { body: r, headers: i, status: s } = n,
              o = this._authorize;
            if (200 !== s || !r)
              return (
                w.warn("Upload request failed", n),
                this.emit(c.UPLOAD_REQUEST_FAILED, { authorize: o, status: s }),
                (this._backoff = !0),
                Promise.resolve(e)
              );
            let a = [],
              l = [],
              u = [];
            if (r.error && r.error.length) {
              w.info("response errors", e, r.error);
              for (let t = 0, n = r.error.length; t < n; t++) {
                let { transient: n, index: i, reason: s } = r.error[t],
                  o = (function (e, t) {
                    let { event_name: n, fragments: r } = e,
                      { message: i } = r;
                    return {
                      reason: t,
                      contexts: (0, d.__rest)(r, ["message"]),
                      event_data: { name: n, data: i },
                    };
                  })(e[i], s);
                n ? (a.push(e[i]), l.push(o)) : u.push(o);
              }
            }
            this._backoff = !(
              (null == i ? void 0 : i.get("backoff")) !== "true"
            );
            let h = l.length + u.length,
              p = e.length - h;
            return (
              h > 0 &&
                this.emit(c.UPLOAD_FAILED, {
                  authorize: o,
                  rejected: u,
                  will_retry: l,
                }),
              p > 0 &&
                this.emit(c.UPLOAD_SUCCEEDED, {
                  authorize: this._authorize,
                  num_events: p,
                }),
              Promise.resolve(a)
            );
          }
          upload(e, t = []) {
            let n = t;
            if (!e.length)
              return Promise.resolve({ nack: n, backoff: this._backoff });
            let r = [...e];
            return this._uploadBatch(r.splice(0, 20)).then((e) => {
              if (((n = [...n, ...e]), this._backoff)) n = [...n, ...r];
              else if (r.length) return this.upload(r, n);
              return { nack: n, backoff: this._backoff };
            });
          }
          lastUpload(e) {
            return e.length
              ? this._uploadBatch(e.splice(0, 100), !0).then(
                  (e) => 0 === e.length,
                  () => !1
                )
              : Promise.resolve(!0);
          }
          shouldBackoff() {
            return this._backoff;
          }
        }
        let R = { baseTime: 200, ceiling: 0, curve: "linear", jitter: !0 };
        class N {
          constructor(e = {}) {
            (this._curve = e.curve || R.curve),
              (this._baseTime = e.baseTime || R.baseTime),
              (this._ceiling = e.ceiling || R.ceiling),
              (this._jitter = "jitter" in e ? !!e.jitter : R.jitter);
          }
          getTime(e) {
            let t;
            switch (this._curve) {
              case "static":
                t = 1;
                break;
              case "logarithmic":
                t = Math.log(e);
                break;
              case "exponential":
                t = Math.pow(Math.E, e);
                break;
              default:
                t = e + 1;
            }
            let n = Math.min(4294967296, Math.floor(t * this._baseTime));
            return (
              this._ceiling && (n = Math.min(n, this._ceiling)),
              this._jitter
                ? (function (e) {
                    let t = e / 5;
                    return Math.floor(e - t / 2 + Math.random() * t);
                  })(n)
                : n
            );
          }
        }
        let C = {
          backoffInitial: !1,
          baseTime: 200,
          ceiling: 0,
          curve: "linear",
          jitter: !0,
          maxDuration: 1 / 0,
          maxRetries: 1 / 0,
          maxTime: 1 / 0,
          retryPredicate: () => !0,
        };
        class I {
          constructor(e, t) {
            let n, r;
            (this._resolver = {
              promise: new Promise((e, t) => {
                (n = e), (r = t);
              }),
              resolve: n,
              reject: r,
            }),
              (this._ts = 0),
              (this._callCount = 0),
              (this._tickInterval = 0),
              (this._isRunning = !1),
              (this._isDestroyed = !1);
            let i = Object.assign(Object.assign({}, C), t),
              {
                backoffInitial: s,
                maxDuration: o,
                maxRetries: a,
                maxTime: l,
                retryPredicate: c,
              } = i,
              u = (0, d.__rest)(i, [
                "backoffInitial",
                "maxDuration",
                "maxRetries",
                "maxTime",
                "retryPredicate",
              ]);
            (this._fn = e),
              (this._backoffInitial = s),
              (this._maxDuration = o),
              (this._maxRetries = a),
              (this._maxTime = l),
              (this._retryPredicate = c),
              (this._backoffInitial = s),
              (this._counter = new N(u)),
              this._backoffInitial && (this._maxRetries += 1);
          }
          static init(e, t = {}) {
            return new I(e, t).start();
          }
          _destroy() {
            (this._isRunning = !1), (this._isDestroyed = !0);
          }
          _failure(e) {
            if (!this._isDestroyed) {
              if (e && "retryAfter" in e) this._retryAfter(e);
              else {
                let t = this._counter.getTime(this._callCount);
                this._shouldRetry(t, e)
                  ? (this._callCount++,
                    (this._tickInterval = setTimeout(() => this._tick(), t)))
                  : (this._resolver.reject(e), this._destroy());
              }
            }
          }
          _retryAfter(e) {
            this._callCount++,
              (this._tickInterval = setTimeout(
                () => this._tick(),
                e.retryAfter
              ));
          }
          _success(...e) {
            this._isDestroyed ||
              (this._resolver.resolve(...e), this._destroy());
          }
          _shouldRetry(e, t) {
            let n = Date.now() - this._ts + e;
            return (
              this._callCount < this._maxRetries &&
              e < this._maxTime &&
              n < this._maxDuration &&
              this._retryPredicate(t)
            );
          }
          _tick() {
            this._fn()
              .then((...e) => this._success(...e))
              .catch((e) => this._failure(e));
          }
          getResolver() {
            return this._resolver.promise;
          }
          start() {
            return this._isDestroyed
              ? Promise.reject(Error("Backoff already consumed"))
              : (this._isRunning ||
                  ((this._ts = Date.now()),
                  (this._isRunning = !0),
                  this._backoffInitial
                    ? ((this._callCount = 1),
                      (this._tickInterval = setTimeout(
                        () => this._tick(),
                        this._counter.getTime(0)
                      )))
                    : this._tick()),
                this._resolver.promise);
          }
          stop() {
            clearTimeout(this._tickInterval), this._destroy();
          }
          getRetryCount() {
            return this._callCount;
          }
        }
        var A = n(61299);
        ((s = u || (u = {})).INVALID_PAYLOAD = "INVALID_PAYLOAD"),
          (s.INVALID_NAME = "INVALID_NAME"),
          (s.UNKNOWN_OWNER = "UNKNOWN_OWNER"),
          (s.PAYLOAD_SIZE_LIMIT_EXCEEDED = "PAYLOAD_SIZE_LIMIT_EXCEEDED");
        var k = n(27712);
        class P {
          static pushToArrIfMissing(e, t) {
            -1 === e.indexOf(t) && e.push(t);
          }
          static isMissingFromArray(e, t) {
            return -1 === e.indexOf(t);
          }
        }
        class D {
          _addEventsToEventSenderStatsData(e, t) {
            Object.keys(t).map((n) => {
              for (let r = 0; r < t[n].length; r++) {
                let i = t[n][r];
                i.sequence_number <
                  e[i.sequence_id][i.event_name].sequence_number_min &&
                  (e[i.sequence_id][i.event_name].sequence_number_min =
                    i.sequence_number),
                  e[i.sequence_id][i.event_name].storage_size++;
              }
            });
          }
          _initializeESSEventData(e, t, n) {
            for (let [r, i] of (Object.keys(e).includes(n) || (e[n] = {}),
            Object.entries(t)))
              e[n][r] = {
                sequence_number_min: i + 1,
                sequence_number_next: i + 1,
                storage_size: 0,
              };
          }
          _formatESS2UnauthEventData(e) {
            let t = {
              sequence_ids: [],
              event_names: [],
              loss_stats_num_entries_per_sequence_id: [],
              loss_stats_event_name_index: [],
              loss_stats_storage_sizes: [],
              loss_stats_sequence_number_mins: [],
              loss_stats_sequence_number_nexts: [],
            };
            return (
              Object.entries(e).map(([e, n]) => {
                if (P.isMissingFromArray(t.sequence_ids, e))
                  t.sequence_ids.push(e),
                    t.loss_stats_num_entries_per_sequence_id.push(
                      Object.keys(n).length
                    );
                else {
                  let r = t.sequence_ids.indexOf(e);
                  t.loss_stats_num_entries_per_sequence_id[r] +=
                    Object.keys(n).length;
                }
                Object.entries(n).map(([e, n]) => {
                  P.pushToArrIfMissing(t.event_names, e);
                  let r = t.event_names.indexOf(e);
                  t.loss_stats_event_name_index.push(r);
                  let i = Object.keys(n);
                  for (let e = 0; e < i.length; e++)
                    t[`loss_stats_${i[e]}s`].push(n[i[e]]);
                });
              }),
              t
            );
          }
          createESSEvent(e, t, n) {
            let r = {};
            return (
              this._initializeESSEventData(r, t, n),
              this._addEventsToEventSenderStatsData(r, e),
              (0, k.i)(this._formatESS2UnauthEventData(r))
            );
          }
        }
        var x = n(9165);
        class L {
          constructor() {
            (this._sequenceId = x.Base64.encode(
              (function (e) {
                let t = "";
                for (let e = 0; e < 16; e++)
                  t += String.fromCharCode((256 * Math.random()) | 0);
                return t;
              })(16)
            )),
              (this._sequenceNumbers = {});
          }
          static create() {
            return new L();
          }
          getSequenceId() {
            return this._sequenceId;
          }
          nextSequenceNumber(e) {
            return (
              this._sequenceNumbers[e] || (this._sequenceNumbers[e] = 0),
              ++this._sequenceNumbers[e]
            );
          }
          getAllSequenceNumberCounters() {
            return this._sequenceNumbers;
          }
        }
        let M = { baseTime: 200, ceiling: 3e5, maxDuration: 18e5 };
        class j extends S.vp {
          constructor(e) {
            var t;
            super(),
              (this._sequenceIdGenerator = L.create()),
              (this._statsSender = new D()),
              (this._instanceContexts = {}),
              (this._sdkVersion = `4.0.3${
                null !== (t = e._experimentSuffix) && void 0 !== t ? t : ""
              }`),
              (this._transport = e.transport),
              (this._ownerProvider = e.ownerProvider),
              (this._events = { authorized: [], unauthorized: [] }),
              (this._uploaders = e.uploaders),
              (this._ongoingUploads = { authorized: !1, unauthorized: !1 }),
              (this._uploadWaiting = { authorized: !1, unauthorized: !1 }),
              (this._backoffTimeSettings = Object.assign(
                Object.assign({}, M),
                e.backoffTimeOverrides
              )),
              (this.upload = this.upload.bind(this)),
              (this._essLastSent = null),
              "undefined" == typeof window ||
                "function" != typeof window.addEventListener ||
                e.disableBeforeUnloadListener ||
                window.addEventListener(
                  "beforeunload",
                  this.onBeforeDisconnect.bind(this)
                ),
              this.initializeContexts(e.context);
            let n = {
              [c.UPLOAD_SUCCEEDED]: c.UPLOAD_SUCCEEDED,
              [c.UPLOAD_FAILED]: c.UPLOAD_FAILED,
              [c.UPLOAD_REQUEST_FAILED]: c.UPLOAD_REQUEST_FAILED,
            };
            this.proxyEmitAll(this._uploaders.authorized, n),
              this.proxyEmitAll(this._uploaders.unauthorized, n);
          }
          onBeforeDisconnect() {
            this.uploadFlush();
          }
          uploadFlush() {
            return Promise.all([
              this._uploaders.authorized.lastUpload(
                this._events.authorized.splice(0)
              ),
              this._uploaders.unauthorized.lastUpload(
                this._events.unauthorized.splice(0)
              ),
            ])
              .then(([e, t]) => e && t)
              .catch(() => !1);
          }
          initializeContexts(e) {
            if (!(null == e ? void 0 : e.length)) return;
            let t = this._instanceContexts;
            for (let n of e) {
              let e = n();
              (null == e ? void 0 : e.name) && (t[e.name] = e.data);
            }
          }
          initFlush(e) {
            let t = this._uploaders[e].shouldBackoff(),
              {
                ceiling: n,
                maxDuration: r,
                baseTime: i,
              } = this._backoffTimeSettings;
            return I.init(() => this.upload(e), {
              curve: "exponential",
              backoffInitial: t,
              retryPredicate: () => this._transport.isOnline(),
              ceiling: n,
              baseTime: t ? n : i,
              maxDuration: r,
            });
          }
          waitForConnection() {
            return new Promise((e) => {
              this._transport.once(h.G0.CONNECTION_ONLINE, () => e());
            });
          }
          upload(e) {
            return this._uploaders[e]
              .upload(this._events[e].splice(0))
              .then((t) => {
                if (t.nack.length)
                  throw (
                    ((this._events[e] = t.nack.concat(this._events[e])),
                    Error("Backoff requested"))
                  );
                return t;
              });
          }
          sendToGabito(e) {
            let t = e ? "authorized" : "unauthorized";
            this._transport.isOnline() ||
              this._ongoingUploads[t] ||
              (this._ongoingUploads[t] = this.waitForConnection());
            let n = this._ongoingUploads[t];
            if (n)
              return (
                this._uploadWaiting[t] ||
                  ((this._uploadWaiting[t] = !0),
                  (this._ongoingUploads[t] = n.then(
                    () => (
                      (this._ongoingUploads[t] = !1),
                      (this._uploadWaiting[t] = !1),
                      this.sendToGabito(e)
                    )
                  ))),
                this._ongoingUploads[t]
              );
            if (!this._events[t].length)
              return Promise.resolve({
                nack: this._events[t],
                backoff: this._uploaders[t].shouldBackoff(),
              });
            if (
              !this._essLastSent ||
              Date.now() - this._essLastSent.getTime() > 3e5
            ) {
              let e = [
                this.makeEvent(
                  this._statsSender.createESSEvent(
                    this._events,
                    this._sequenceIdGenerator.getAllSequenceNumberCounters(),
                    this._sequenceIdGenerator.getSequenceId()
                  )
                ),
              ];
              this._uploaders.unauthorized.upload(e).finally(() => {
                this._essLastSent = new Date();
              });
            }
            let r = this.initFlush(t)
              .then((e) => ((this._ongoingUploads[t] = !1), e))
              .catch(() =>
                ((this._ongoingUploads[t] = !1), this._transport.isOnline())
                  ? (j.consoleLogger.warn(
                      `The events in the queue could not be uploaded. Throwing away ${this._events[t].length} ${t} events.`
                    ),
                    (this._events[t] = []),
                    {
                      nack: this._events[t],
                      backoff: this._uploaders[t].shouldBackoff(),
                    })
                  : this.sendToGabito(e)
              );
            return (this._ongoingUploads[t] = r), r;
          }
          storeEvent(e, t) {
            let n = this.makeEvent(t);
            this._events[e ? "authorized" : "unauthorized"].push(n);
          }
          makeEvent(e) {
            let t = this._sequenceIdGenerator;
            return {
              sequence_id: t.getSequenceId(),
              sequence_number: t.nextSequenceNumber(e.name),
              event_name: e.name,
              fragments: Object.assign(
                Object.assign(
                  {
                    context_sdk: {
                      version_name: this._sdkVersion,
                      type: "javascript",
                    },
                    context_time: { timestamp: Date.now() },
                  },
                  this._instanceContexts
                ),
                { message: e.data }
              ),
            };
          }
          validateEventData(e, t, n) {
            return e.name
              ? (function (e) {
                  let t = e.length,
                    n = t;
                  for (; n--; ) {
                    let r = e.charCodeAt(n);
                    r > 127 && r <= 2047
                      ? t++
                      : r > 2047 && r <= 65535 && (t += 2),
                      r >= 56320 && r <= 57343 && n--;
                  }
                  return t;
                })(JSON.stringify(e.data)) > 5e3
                ? u.PAYLOAD_SIZE_LIMIT_EXCEEDED
                : t && n && !n()
                ? u.UNKNOWN_OWNER
                : null
              : u.INVALID_NAME;
          }
          checkIsEventAuthorized(e) {
            return !e.endsWith("NonAuth");
          }
          flush(e = !0) {
            return this.sendToGabito(e)
              .then(() => void 0)
              .catch(() => void 0);
          }
          flushAll() {
            return Promise.all([this.sendToGabito(!0), this.sendToGabito(!1)])
              .then(() => void 0)
              .catch(() => void 0);
          }
          finalFlush() {
            return this.uploadFlush();
          }
          log(e, t = {}) {
            this.send(e, t);
          }
          send(e, { flush: t = !0 } = {}) {
            let n = this.checkIsEventAuthorized(e.name),
              r = this.validateEventData(e, n, this._ownerProvider);
            if (
              (r === u.UNKNOWN_OWNER &&
                (j.consoleLogger.warn(
                  `Trying to send an authenticated event without a current owner: ${e.name}`
                ),
                (r = null)),
              r)
            ) {
              let t = (0, A.t)({ event_name: e.name, reject_reason: r });
              return (
                this.storeEvent(!1, t),
                Promise.reject(
                  TypeError(
                    `The event is invalid and has been rejected for reason: ${r}`
                  )
                )
              );
            }
            return (this.storeEvent(n, e), t)
              ? this.flush(n)
              : Promise.resolve();
          }
          hasContext(...e) {
            return e.every((e) => !!this._instanceContexts[e]);
          }
        }
        function U(e) {
          let t = {
            suppressPersist: e.suppressPersist,
            transport: e.transport,
          };
          return new j(
            Object.assign(Object.assign({}, e), {
              uploaders: {
                authorized: new O(t),
                unauthorized: new O(
                  Object.assign(Object.assign({}, t), { authorize: !1 })
                ),
              },
            })
          );
        }
        j.consoleLogger = T("EventSender");
      },
      40361: function (e, t, n) {
        "use strict";
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.silly =
            t.verbose =
            t.debug =
            t.info =
            t.warn =
            t.error =
            t.log =
            t.logger =
            t.default =
              void 0);
        var i = n(31745);
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r(i).default;
          },
        }),
          Object.defineProperty(t, "logger", {
            enumerable: !0,
            get: function () {
              return i.logger;
            },
          }),
          Object.defineProperty(t, "log", {
            enumerable: !0,
            get: function () {
              return i.log;
            },
          }),
          Object.defineProperty(t, "error", {
            enumerable: !0,
            get: function () {
              return i.error;
            },
          }),
          Object.defineProperty(t, "warn", {
            enumerable: !0,
            get: function () {
              return i.warn;
            },
          }),
          Object.defineProperty(t, "info", {
            enumerable: !0,
            get: function () {
              return i.info;
            },
          }),
          Object.defineProperty(t, "debug", {
            enumerable: !0,
            get: function () {
              return i.debug;
            },
          }),
          Object.defineProperty(t, "verbose", {
            enumerable: !0,
            get: function () {
              return i.verbose;
            },
          }),
          Object.defineProperty(t, "silly", {
            enumerable: !0,
            get: function () {
              return i.silly;
            },
          });
      },
      31745: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.silly =
            t.verbose =
            t.debug =
            t.info =
            t.warn =
            t.error =
            t.log =
            t.logger =
              void 0),
          (t.logger = {
            log: (...e) => console.log(...e),
            error: (...e) => console.error(...e),
            warn: (...e) => console.warn(...e),
            info: (...e) => console.info(...e),
            debug: (...e) => console.debug(...e),
            verbose: (...e) => console.log("verbose:", ...e),
            silly: (...e) => console.log("silly:", ...e),
          }),
          (t.default = t.logger),
          (t.log = t.logger.log.bind(t.logger)),
          (t.error = t.logger.error.bind(t.logger)),
          (t.warn = t.logger.warn.bind(t.logger)),
          (t.info = t.logger.info.bind(t.logger)),
          (t.debug = t.logger.debug.bind(t.logger)),
          (t.verbose = t.logger.verbose.bind(t.logger)),
          (t.silly = t.logger.silly.bind(t.logger));
      },
      4934: function (e, t, n) {
        "use strict";
        var r = n(83454),
          i =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    l(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, a);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sendMetric =
            t.reportMetrics =
            t.createSemanticMetrics =
            t.asNanoseconds =
            t.MetricTypes =
              void 0);
        let o = s(n(40361)),
          a = n(60497);
        (t.MetricTypes = {
          COUNTER: "counter",
          GAUGE: "gauge",
          TIMER: "timer",
        }),
          (t.asNanoseconds = function (e) {
            return e;
          });
        let l = (e, t) =>
          i(void 0, void 0, void 0, function* () {
            if (Array.isArray(t.reporter)) {
              let n = t.reporter.map((t) => t.send(e));
              yield Promise.all(n);
            } else yield t.reporter.send(e);
          });
        t.reportMetrics = l;
        let c = (e) => {
          (void 0 !== e.dev ? e.dev : r.env && !1) &&
            (e.reporter = new a.NoopReporter());
          let t = {
              queue: [],
              timeout: void 0,
              flush() {
                return i(this, void 0, void 0, function* () {
                  yield l(this.queue, e),
                    (this.queue = []),
                    (this.timeout = void 0);
                });
              },
            },
            n = !1;
          return (
            void 0 === e.batching && (e.batching = { delay: 4e3 }),
            e.batching &&
              "object" == typeof window &&
              "function" == typeof window.addEventListener &&
              window.addEventListener("beforeunload", () => {
                (n = !0), t.flush();
              }),
            {
              sendMetric: (r) =>
                i(void 0, void 0, void 0, function* () {
                  var i, s;
                  let o = Object.assign({}, r);
                  if (
                    (r.tags && (o.tags = Object.assign({}, r.tags)),
                    (o.key = o.key || e.key),
                    !o.key)
                  )
                    throw Error(
                      `metric.key is required. Got: "${o.key}". Set it in createSemanticMetrics(...) or pass it to sendMetric(...).`
                    );
                  (o.tags = Object.assign(
                    {
                      app: null !== (i = e.app) && void 0 !== i ? i : o.key,
                      application:
                        null !== (s = e.app) && void 0 !== s ? s : o.key,
                    },
                    o.tags
                  )),
                    e.component_id
                      ? (o.component_id = o.component_id || e.component_id)
                      : (o.component_id = e.key),
                    e.batching && !n
                      ? (t.queue.push(o),
                        t.timeout ||
                          (t.timeout = setTimeout(
                            () => t.flush(),
                            e.batching.delay
                          )))
                      : yield l([o], e);
                }),
              config: e,
              isWindowUnloading: n,
              flush: () =>
                e.batching
                  ? t.flush()
                  : (o.default.warn(
                      "Manual flushing only supported in batch mode. Set config.batching: true"
                    ),
                    Promise.resolve()),
            }
          );
        };
        t.createSemanticMetrics = c;
        class u {
          static init(e) {
            u.config &&
              o.default.error(
                "SemanticMetrics has already been initialized. This may lead to dangerous side effects such as your metrics disappearing from Grafana due to the `key` value being overwritten by something else"
              ),
              o.default.warn(
                "The singleton usage of SemanticMetrics will be deprecated. Please use createSemanticMetrics()"
              ),
              (u.config = e);
            let { sendMetric: t, isWindowUnloading: n } = c(e);
            (u.sendMetric = t), (u.isWindowUnloading = n);
          }
        }
        (t.default = u),
          (t.sendMetric = (e) =>
            i(void 0, void 0, void 0, function* () {
              if (!u.config)
                throw Error(
                  "SemanticMetrics has not been initialized. Call SemanticMetrics.init()"
                );
              return u.sendMetric(e);
            }));
      },
      33435: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.WEBAPI_URL = t.INTERNAL_WEBGATE_URL = void 0),
          (t.INTERNAL_WEBGATE_URL = "https://wgint.spotify.net"),
          (t.WEBAPI_URL = "https://api.spotify.com");
      },
      99374: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            },
          s =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0),
          i(n(18441), t),
          i(n(80622), t),
          i(n(16836), t);
        var o = n(4934);
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s(o).default;
          },
        });
      },
      18441: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                "default" === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Time = t.Timer = void 0),
          i(n(4934), t),
          i(n(3946), t),
          i(n(84227), t),
          i(n(1509), t);
        var s = n(1837);
        Object.defineProperty(t, "Timer", {
          enumerable: !0,
          get: function () {
            return s.Timer;
          },
        });
        var o = n(22346);
        Object.defineProperty(t, "Time", {
          enumerable: !0,
          get: function () {
            return o.Time;
          },
        });
      },
      16836: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BrowserMetrics = void 0);
        let r = n(4934),
          i = n(22346);
        function s() {
          let [e] = window.performance.getEntriesByType("navigation");
          return e;
        }
        function o(e) {
          return new Promise((t, n) =>
            window.performance &&
            "function" == typeof performance.getEntriesByType
              ? window.addEventListener("load", () => {
                  let r = performance.getEntriesByType("paint"),
                    i = r.find(({ name: t }) => t === e);
                  return void 0 !== r && i
                    ? t(i.startTime)
                    : n("Time to paint api is not supported on this browser");
                })
              : n("window.performance api is not supported in this browser")
          );
        }
        function a({ name: e, label: t, value: n }, r) {
          let s;
          return (
            (s =
              "cls" === e.toLowerCase()
                ? { metric_type: "gauge", value: n }
                : {
                    metric_type: "timer",
                    value: i.Time.fromMillis(Math.round(n)).asNanos(),
                  }),
            Object.assign(
              Object.assign({ what: `web_vitals_${e.toLowerCase()}` }, s),
              { tags: Object.assign({ name: e, label: t }, r) }
            )
          );
        }
        t.BrowserMetrics = {
          getPageLoadTime: function () {
            return new Promise((e, t) => {
              if (
                !window.performance ||
                "function" != typeof performance.getEntriesByType
              )
                return t(
                  "window.performance api is not supported in this browser"
                );
              if (void 0 === s())
                return t(
                  "navigationTiming api is not supported in this browser"
                );
              let { loadEventEnd: n } = s();
              return n > 0
                ? e(n)
                : window.addEventListener("load", () => {
                    setTimeout(() => {
                      let { loadEventEnd: t } = s();
                      return e(t);
                    }, 0);
                  });
            });
          },
          getResourceTiming: function () {
            return window.performance.getEntriesByType("resource");
          },
          getTimeToFirstPaint: function () {
            return o("first-paint");
          },
          getTimeToFirstContentfulPaint: function () {
            return o("first-contentful-paint");
          },
          sendWebVitalsMetric: function (e, t) {
            return r.sendMetric(a(e, t));
          },
          getWebVitalsMetric: a,
        };
      },
      1509: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    l(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, a);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConsoleReporter = void 0);
        let s = i(n(40361));
        class o {
          constructor(e = 2, t = "info") {
            (this.spacingLevel = e), (this.logLevel = t);
          }
          send(e) {
            return r(this, void 0, void 0, function* () {
              s.default.log(
                this.logLevel,
                `[semantic-metrics] ${JSON.stringify(
                  e,
                  null,
                  this.spacingLevel
                )}`
              );
            });
          }
        }
        t.ConsoleReporter = o;
      },
      84227: function (e, t, n) {
        "use strict";
        var r =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function o(e) {
                  try {
                    l(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function a(e) {
                  try {
                    l(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })
                      ).then(o, a);
                }
                l((r = r.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EventSenderReporter = void 0);
        let s = n(47582),
          o = n(80614),
          a = n(15057),
          l = i(n(40361)),
          c = n(47851),
          u = n(33435);
        function d(e) {
          return (t) =>
            e.isAuthenticated()
              ? o.createSemanticMetricClient(t)
              : a.createSemanticMetricClientNonAuth(t);
        }
        class h {
          constructor(e, t, n = "browser", r) {
            (this.eventSender = e),
              (this.createEvent = t),
              (this.environment = n),
              (this.transport = r);
          }
          static create(e) {
            let t = "getToken" in e ? e.getToken : null,
              n = "ownerProvider" in e ? e.ownerProvider : null,
              i = e.context ? [...e.context] : void 0,
              o = e.environment,
              a = c.createBaseTransport({
                providers: {
                  endpoints: (() => {
                    let t = c.createXResolveProvider();
                    return (n) =>
                      r(this, void 0, void 0, function* () {
                        return Object.assign(
                          Object.assign({}, yield t(n)),
                          e.internal && { webgate: u.INTERNAL_WEBGATE_URL }
                        );
                      });
                  })(),
                  token: () =>
                    new Promise((e) => {
                      if (!t) {
                        e("");
                        return;
                      }
                      t((t, n) => {
                        if (void 0 !== n) {
                          e([t, n]);
                          return;
                        }
                        e(t);
                      });
                    }),
                },
              });
            return (
              t &&
                (a.on(c.TransportEvent.CONNECTED, () => {
                  a.authenticate().catch((e) => {
                    var t, n;
                    l.default.debug(
                      "authentication fail.",
                      null !==
                        (n =
                          null !== (t = null == e ? void 0 : e.message) &&
                          void 0 !== t
                            ? t
                            : null == e
                            ? void 0
                            : e.code) && void 0 !== n
                        ? n
                        : ""
                    );
                  });
                }),
                a.on(c.TransportEvent.AUTHENTICATED, () => {
                  l.default.debug("created authenticated browser transport");
                }),
                a.on(c.TransportEvent.TOKEN_PROVIDER_ERROR, () => {
                  l.default.debug("the token provided isn't working.");
                })),
              a.connect(),
              new h(
                s.createEventSender(
                  Object.assign(
                    { transport: a, context: i },
                    n && { ownerProvider: n }
                  )
                ),
                d(a),
                o,
                a
              )
            );
          }
          static createWithCustomTransport(e) {
            let t = "ownerProvider" in e ? e.ownerProvider : null,
              n = e.context ? [...e.context] : void 0;
            return new h(
              s.createEventSender(
                Object.assign(
                  { transport: e.transport, context: n },
                  t && { ownerProvider: t }
                )
              ),
              d(e.transport),
              e.environment,
              e.transport
            );
          }
          send(e) {
            return r(this, void 0, void 0, function* () {
              for (let t of e) {
                let e = Object.assign({}, t);
                (e.tags = Object.assign({}, e.tags)),
                  e.tags.environment &&
                    l.default.error(
                      "`tags.environment` must not be set. It is a reserved tag and will be overwritten."
                    ),
                  (e.tags.environment = this.environment);
                let n = this.createEvent(Object.assign({}, e));
                this.eventSender.send(n, { flush: !1 });
              }
              return this.eventSender.flush(this.transport.isAuthenticated());
            });
          }
        }
        t.EventSenderReporter = h;
      },
      60497: function (e, t) {
        "use strict";
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, s) {
              function o(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function a(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })
                    ).then(o, a);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NoopReporter = void 0);
        class r {
          send(e) {
            return n(this, void 0, void 0, function* () {});
          }
        }
        t.NoopReporter = r;
      },
      3946: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
      },
      22346: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Time = void 0);
        class n {
          constructor(e = 0) {
            this.nanos = e;
          }
          static fromNanos(e) {
            return new n(e);
          }
          static fromMicros(e) {
            return new n(1e3 * e);
          }
          static fromMillis(e) {
            return new n(1e6 * e);
          }
          static fromSeconds(e) {
            return new n(1e9 * e);
          }
          static from(e) {
            return new n(e.asNanos());
          }
          asSeconds() {
            return this.nanos / 1e9;
          }
          asMillis() {
            return this.nanos / 1e6;
          }
          asMicros() {
            return this.nanos / 1e3;
          }
          asNanos() {
            return Math.round(this.nanos);
          }
        }
        (t.Time = n), (n.ZERO = new n(0));
      },
      1837: function (e, t, n) {
        "use strict";
        var r = n(83454);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Timer =
            t.getHighResolutionTime =
            t.getLowResolutionTime =
            t.getTime =
            t.getBrowserTime =
            t.supportsHighResolutionTime =
              void 0);
        let i = n(22346),
          s = n(4934);
        (t.supportsHighResolutionTime = () =>
          "undefined" == typeof window && "function" == typeof r.hrtime),
          (t.getBrowserTime = () =>
            "undefined" != typeof performance ? performance.now() : Date.now()),
          (t.getTime = () =>
            t.supportsHighResolutionTime() ? r.hrtime() : t.getBrowserTime()),
          (t.getLowResolutionTime = (e) => {
            let n = t.getTime() - e,
              r = i.Time.fromMillis(n);
            return {
              nanoseconds: s.asNanoseconds(r.asNanos()),
              milliseconds: r.asMillis(),
              seconds: r.asSeconds(),
            };
          }),
          (t.getHighResolutionTime = (e) => {
            let [t, n] = r.hrtime(e),
              i = 1e9 * t + n,
              o = i / 1e6,
              a = i / 1e9;
            return {
              nanoseconds: s.asNanoseconds(i),
              milliseconds: o,
              seconds: a,
            };
          });
        class o {
          constructor(e) {
            this.startTime = e;
          }
          static start() {
            return new o(t.getTime());
          }
          end() {
            return t.supportsHighResolutionTime()
              ? t.getHighResolutionTime(this.startTime)
              : t.getLowResolutionTime(this.startTime);
          }
        }
        t.Timer = o;
      },
      80622: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createUniversalReporter = void 0);
        let r = n(84227),
          i = n(63770);
        t.createUniversalReporter = function (e = {}) {
          let t = e.context
            ? [i.createUserAgentContext(), ...e.context]
            : [i.createUserAgentContext()];
          return r.EventSenderReporter.create(
            Object.assign(Object.assign({ environment: "browser" }, e), {
              context: t,
            })
          );
        };
      },
      80614: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createSemanticMetricClient = void 0),
          (t.createSemanticMetricClient = function (e) {
            return {
              name: "SemanticMetricClient",
              environments: ["browser", "device"],
              data: e,
            };
          });
      },
      15057: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createSemanticMetricClientNonAuth = void 0),
          (t.createSemanticMetricClientNonAuth = function (e) {
            return {
              name: "SemanticMetricClientNonAuth",
              environments: ["browsernonauth", "devicenonauth"],
              data: e,
            };
          });
      },
      47851: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            ConnectionObserver: function () {
              return A;
            },
            DEALER_PLUGIN_NAME: function () {
              return H;
            },
            DealerErrors: function () {
              return E;
            },
            DisconnectionReason: function () {
              return v;
            },
            Method: function () {
              return g;
            },
            PluginEvent: function () {
              return y;
            },
            REQUEST_TRANSFORMER_PLUGIN_NAME: function () {
              return eH;
            },
            TransportErrors: function () {
              return m;
            },
            TransportEvent: function () {
              return _;
            },
            createAbortControllerLike: function () {
              return L;
            },
            createBaseTransport: function () {
              return eG;
            },
            createSpotifyComEndpointsProvider: function () {
              return e$;
            },
            createSpotifyComProviders: function () {
              return eq;
            },
            createSpotifyComTokenProvider: function () {
              return eB;
            },
            createTransport: function () {
              return eV;
            },
            createXResolveProvider: function () {
              return eF;
            },
            dealerCreator: function () {
              return z;
            },
            requestTransformerCreator: function () {
              return ez;
            },
          });
        var r,
          i,
          s,
          o,
          a,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m,
          _,
          g,
          y,
          v,
          E,
          b,
          T,
          S,
          w,
          O,
          R,
          N = {};
        n.r(N),
          n.d(N, {
            isSupported: function () {
              return ec;
            },
            request: function () {
              return eu;
            },
          });
        var C = {};
        n.r(C),
          n.d(C, {
            request: function () {
              return eL;
            },
          }),
          ((r = m || (m = {})).HTTP_REQUEST_ABORTED = "HTTP_REQUEST_ABORTED"),
          (r.HTTP_REQUEST_FAILED = "HTTP_REQUEST_FAILED"),
          (r.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED"),
          (r.TRANSPORT_ENDPOINTS_PROVIDER_ERROR =
            "TRANSPORT_ENDPOINTS_PROVIDER_ERROR"),
          (r.TRANSPORT_INVALID_STATE = "TRANSPORT_INVALID_STATE"),
          (r.TRANSPORT_INVALID_TOKEN = "TRANSPORT_INVALID_TOKEN"),
          (r.TRANSPORT_STALE_TOKEN = "TRANSPORT_STALE_TOKEN "),
          (r.TRANSPORT_TOKEN_PROVIDER_ERROR = "TRANSPORT_TOKEN_PROVIDER_ERROR"),
          (r.TRANSPORT_LIFECYCLE_DISABLED = "TRANSPORT_LIFECYCLE_DISABLED"),
          (r.TRANSPORT_UNSUPPORTED_OPTION = "TRANSPORT_UNSUPPORTED_OPTION"),
          (r.XRESOLVE_INCOMPLETE_RESPONSE = "XRESOLVE_INCOMPLETE_RESPONSE"),
          (r.XRESOLVE_INVALID_RESPONSE = "XRESOLVE_INVALID_RESPONSE"),
          (r.XRESOLVE_REQUEST_FAILED_WITH_STATUS =
            "XRESOLVE_REQUEST_FAILED_WITH_STATUS"),
          ((i = _ || (_ = {})).CONNECTION_ONLINE = "online"),
          (i.CONNECTION_OFFLINE = "offline"),
          (i.PRODUCT_STATE_CHANGED = "product_state_changed"),
          (i.ACCESS_TOKEN = "access_token"),
          (i.AUTHENTICATED = "authenticated"),
          (i.AUTHENTICATION_FAILED = "authentication_failed"),
          (i.BEFORE_OFFLINE_DISCONNECT = "before_offline_disconnect"),
          (i.BEFORE_ONLINE_DISCONNECT = "before_online_disconnect"),
          (i.CONNECTED = "connected"),
          (i.CONNECTION_FAILED = "connection_failed"),
          (i.CONNECTION_ID = "connection_id"),
          (i.DISCONNECTED = "disconnected"),
          (i.ENDPOINTS_RESOLVED = "endpoints_resolved"),
          (i.LOGGED_OUT = "logged_out"),
          (i.SHORT_SESSION_DISCONNECTED = "short_session_disconnected"),
          (i.TOKEN_PROVIDER_ERROR = "token_provider_error"),
          (i.RECONNECTED = "reconnected"),
          (i.RECONNECTING = "reconnecting"),
          (i.WINDOW_BEFORE_UNLOAD = "beforeunload"),
          ((s = g || (g = {})).DELETE = "DELETE"),
          (s.GET = "GET"),
          (s.OPTIONS = "OPTIONS"),
          (s.PATCH = "PATCH"),
          (s.POST = "POST"),
          (s.PUT = "PUT"),
          (s.TRACE = "TRACE"),
          ((o = y || (y = {})).TRANSPORT_AUTHENTICATE =
            "transport_authenticate"),
          (o.TRANSPORT_AUTHENTICATE_FAILED = "transport_authenticate_failed"),
          (o.TRANSPORT_CONNECT = "transport_connect"),
          (o.TRANSPORT_DISCONNECT = "transport_disconnect"),
          (o.TRANSPORT_ENDPOINTS_RESOLVED = "transport_endpoints_resolved"),
          (o.TRANSPORT_BEFORE_PROCESS_REQUEST =
            "transport_before_process_request"),
          (o.TRANSPORT_BEFORE_SEND_REQUEST = "transport_before_send_request"),
          (o.TRANSPORT_BEFORE_RETURN_RESPONSE =
            "transport_before_return_response"),
          (o.TRANSPORT_REQUEST = "transport_request"),
          (o.PLUGIN_CONNECTION_INFO = "plugin_connection_info"),
          (o.PLUGIN_DISCONNECTED = "plugin_disconnected"),
          (o.PLUGIN_MESSAGE = "plugin_message"),
          (o.PLUGIN_REQUEST = "plugin_request"),
          (o.PLUGIN_ERROR = "plugin_error"),
          ((a = v || (v = {})).RECONNECTION_FAILED = "reconnection_failed"),
          (a.EXPLICIT = "explicit"),
          (a.LOG_OUT = "log_out"),
          (a.WINDOW_BEFORE_UNLOAD = "window_before_unload");
        var I = n(28611);
        class A extends I.vp {}
        class k extends A {
          constructor(e) {
            super();
            let t = "undefined" != typeof window,
              n = e && e.notifyBeforeUnload;
            (this._navigator = (t && window.navigator) || null),
              t &&
                "function" == typeof window.addEventListener &&
                (window.addEventListener(
                  "online",
                  this.emitSync.bind(this, _.CONNECTION_ONLINE, null)
                ),
                window.addEventListener(
                  "offline",
                  this.emitSync.bind(this, _.CONNECTION_OFFLINE, null)
                ),
                n &&
                  window.addEventListener(
                    _.WINDOW_BEFORE_UNLOAD,
                    this.emitSync.bind(this, _.WINDOW_BEFORE_UNLOAD, null)
                  ));
          }
          static create(e) {
            return new k(e);
          }
          isOnline() {
            let e = this._navigator;
            return !e || !("onLine" in e) || e.onLine;
          }
        }
        class P extends I.vp {
          constructor() {
            super(),
              (this._aborted = !1),
              (this.onabort = null),
              this.on("abort", () => {
                var e;
                return null === (e = this.onabort) || void 0 === e
                  ? void 0
                  : e.call(this);
              });
          }
          static abort() {
            let e = new P();
            return (e._aborted = !0), e;
          }
          static signalAbort(e) {
            "_aborted" in e &&
              !e._aborted &&
              ((e._aborted = !0), e.emit("abort", null));
          }
          get aborted() {
            return this._aborted;
          }
          set aborted(e) {}
          addEventListener(e, t) {
            this.addListener(e, t);
          }
          removeEventListener(e, t) {
            this.removeListener(e, t);
          }
          dispatchEvent() {}
        }
        class D {
          constructor() {
            this.signal = new P();
          }
          abort() {
            let e = this.signal;
            P.signalAbort(e);
          }
        }
        function x() {
          return (
            "undefined" != typeof window &&
            "function" == typeof window.AbortController
          );
        }
        let L = x() ? () => new AbortController() : () => new D();
        ((l = E || (E = {})).DEALER_CONNECTION_ERROR =
          "DEALER_CONNECTION_ERROR"),
          (l.DEALER_AUTHENTICATION_FAILED = "DEALER_AUTHENTICATION_FAILED"),
          (l.DEALER_ERROR = "DEALER_ERROR"),
          (l.ENDPOINT_NOT_DEFINED = "ENDPOINT_NOT_DEFINED"),
          (l.INVALID_ENDPOINT = "INVALID_ENDPOINT");
        class M extends Error {
          constructor(e = E.DEALER_ERROR, t, n = {}) {
            super(t),
              (this.name = "DealerError"),
              (this.message = t),
              (this.code = e),
              (this.raw = n),
              (this.wsCode = n.code || null),
              (this.wsReason = n.reason || null);
          }
        }
        function j() {
          let e, t;
          return {
            promise: new Promise((n, r) => {
              (e = n), (t = r);
            }),
            resolve: e,
            reject: t,
          };
        }
        ((c = b || (b = {})).AUTHENTICATED = "authenticated"),
          (c.AUTHENTICATION_FAILED = "authentication_failed"),
          (c.CONNECTED = "connected"),
          (c.CONNECTION_ID = "connection_id"),
          (c.ERROR = "error"),
          (c.DISCONNECTED = "disconnected"),
          (c.MESSAGE = "message"),
          (c.REQUEST = "request"),
          ((u = T || (T = {}))[(u.CLOSE = 4e3)] = "CLOSE"),
          (u[(u.TIMEOUT = 4001)] = "TIMEOUT");
        var U = n(48764).Buffer;
        let F = function () {},
          $ = /hm:\/\/pusher\/(?:[^]+)?\/connections\/([^]+)/,
          B = "undefined" != typeof window;
        class q extends I.vp {
          constructor(e) {
            super(),
              (this._socket = null),
              (this._lastPingDeferred = null),
              (this._waitingForConnectionId = !0),
              (this._connectionId = null),
              (this._connectionURI = null),
              (this._heartbeatToken = 0),
              (this._heartbeatTimeoutToken = 0),
              (this._connected = !1),
              (this._endpoint = null),
              (this._WebSocket = e.WebSocket || WebSocket),
              (this._heartbeatTimeout = e.heartbeatTimeout || 1e4);
          }
          static create(e) {
            return new q(e);
          }
          _startHeartbeat(e) {
            let t = () => {
              this.ping().then(
                () => this._onHeartbeatSuccess(),
                () => this._onHeartbeatError()
              ),
                (this._heartbeatTimeoutToken = setTimeout(
                  () => this._onHeartbeatError(),
                  this._heartbeatTimeout
                ));
            };
            e ? t() : (this._heartbeatToken = setTimeout(() => t(), 3e4));
          }
          _onHeartbeatError() {
            this._stopHeartbeat(),
              this._socket && this._socket.close(T.TIMEOUT, "internal-timeout");
          }
          _onHeartbeatSuccess() {
            this._stopHeartbeat(), this._startHeartbeat();
          }
          _stopHeartbeat() {
            null !== this._heartbeatToken && clearTimeout(this._heartbeatToken),
              null !== this._heartbeatTimeoutToken &&
                clearTimeout(this._heartbeatTimeoutToken);
          }
          _prepareConnectionId(e) {
            var t;
            let n;
            if (!e.uri) return !1;
            let [, r] = null !== (t = e.uri.match($)) && void 0 !== t ? t : [];
            return (
              !!r &&
              ((n =
                e.headers && e.headers["Spotify-Connection-Id"]
                  ? e.headers["Spotify-Connection-Id"]
                  : decodeURIComponent(r)),
              (this._connectionId = n),
              (this._connectionURI = e.uri),
              this.emit(b.CONNECTION_ID, { id: n, uri: e.uri }),
              !0)
            );
          }
          _reply(e, t) {
            if (!e) throw TypeError("Invalid key.");
            let n = this._socket;
            n &&
              1 === n.readyState &&
              n.send(JSON.stringify({ type: "reply", key: e, payload: t }));
          }
          _parseMessage(e) {
            let t;
            try {
              t = JSON.parse(e);
            } catch (e) {
              return;
            }
            if ("message" === t.type)
              this._waitingForConnectionId && this._prepareConnectionId(t)
                ? ((this._waitingForConnectionId = !1),
                  this._startHeartbeat(!0))
                : this.emit(b.MESSAGE, { message: t });
            else if ("pong" === t.type && this._lastPingDeferred)
              this._lastPingDeferred.resolve(!0),
                (this._lastPingDeferred = null);
            else if ("request" === t.type) {
              let e = t.key;
              e &&
                this.emit(b.REQUEST, {
                  request: t,
                  reply: this._reply.bind(this, e),
                });
            }
          }
          _handleOpen(e) {
            e.resolve(!0),
              (this._connected = !0),
              this.emit(b.AUTHENTICATED, null);
          }
          _handleMessage(e) {
            let t = this,
              n = e.data;
            if (B && window.Blob && n instanceof window.Blob) {
              let e = new FileReader();
              (e.onloadend = function () {
                let e;
                if (this.result) {
                  if (this.result instanceof ArrayBuffer) {
                    e = "";
                    let t = new Uint8Array(this.result);
                    for (let n = 0; n < t.length; n++)
                      e += String.fromCharCode(t[n]);
                  } else e = this.result;
                  t._parseMessage(e);
                }
              }),
                e.readAsText(n);
            } else
              void 0 !== U &&
              "undefined" != typeof ArrayBuffer &&
              n instanceof ArrayBuffer
                ? this._parseMessage(new U(n).toString("ascii"))
                : this._parseMessage(n);
          }
          _handleClose(e) {
            let t = this._connected;
            if (((this._connected = !1), !t)) {
              let t = new M(
                E.DEALER_AUTHENTICATION_FAILED,
                "Dealer connection error",
                e
              );
              this.emit(b.AUTHENTICATION_FAILED, { error: t });
              return;
            }
            this.emitSync(b.DISCONNECTED, { wsCode: e.code, reason: e.reason });
          }
          _handleError(e) {
            let t = new M(
              E.DEALER_CONNECTION_ERROR,
              "Cannot connect to dealer"
            );
            e.reject(t),
              (this._connected = !1),
              this.emit(b.ERROR, { error: t });
          }
          connect(e) {
            return (
              (this._endpoint = e),
              (this._waitingForConnectionId = !0),
              this.emit(b.CONNECTED, null),
              Promise.resolve(!0)
            );
          }
          authenticate(e) {
            let t = j(),
              n = `${this._endpoint}?access_token=${e}`,
              r = (this._socket = new this._WebSocket(n));
            return (
              (r.onopen = this._handleOpen.bind(this, t)),
              (r.onclose = this._handleClose.bind(this)),
              (r.onerror = this._handleError.bind(this, t)),
              (r.onmessage = this._handleMessage.bind(this)),
              t.promise
            );
          }
          disconnect() {
            this._socket &&
              (this._stopHeartbeat(),
              (this._waitingForConnectionId = !0),
              (this._connected = !1),
              this._socket.close(T.CLOSE, "internal-close"),
              (this._socket.onopen = F),
              (this._socket.onerror = F),
              (this._socket.onmessage = F),
              (this._socket.onclose = F),
              (this._socket = null),
              this.emitSync(b.DISCONNECTED, {
                wsCode: T.CLOSE,
                reason: "internal-close",
              }));
          }
          ping() {
            return this._socket && 1 === this._socket.readyState
              ? ((this._lastPingDeferred = j()),
                this._socket.send('{"type":"ping"}'),
                this._lastPingDeferred.promise)
              : Promise.reject(
                  new M(E.DEALER_CONNECTION_ERROR, "Dealer connection error")
                );
          }
          getConnectionId() {
            return this._waitingForConnectionId
              ? new Promise((e) => {
                  this.once(b.CONNECTION_ID, (t) => {
                    e(t.data.id);
                  });
                })
              : Promise.resolve(this._connectionId);
          }
          getConnectionInfo() {
            return this._waitingForConnectionId
              ? new Promise((e) => {
                  this.once(b.CONNECTION_ID, (t) => {
                    e({ id: t.data.id, uri: t.data.uri });
                  });
                })
              : Promise.resolve({
                  id: this._connectionId,
                  uri: this._connectionURI,
                });
          }
          hasConnectionId() {
            return !this._waitingForConnectionId && !!this._connectionId;
          }
        }
        let H = "dealer";
        class W {
          constructor(e) {
            (this.name = H),
              (this._dealer = new q(e)),
              (this.api = {
                hasConnectionInfo: () => this._dealer.hasConnectionId(),
                getConnectionInfo: () =>
                  this._dealer
                    .getConnectionInfo()
                    .then((e) => Object.assign({ plugin: this.name }, e)),
              }),
              (this._onDealerConnectionId =
                this._onDealerConnectionId.bind(this)),
              (this._onDealerDisconnected =
                this._onDealerDisconnected.bind(this)),
              (this._onDealerMessage = this._onDealerMessage.bind(this)),
              (this._onDealerRequest = this._onDealerRequest.bind(this)),
              (this._onTransportConnect = this._onTransportConnect.bind(this)),
              (this._onTransportAuthenticate =
                this._onTransportAuthenticate.bind(this)),
              (this._onTransportDisconnect =
                this._onTransportDisconnect.bind(this));
          }
          _onDealerConnectionId(e) {
            this._mediator &&
              this._mediator.emit(
                y.PLUGIN_CONNECTION_INFO,
                Object.assign({ plugin: this.name }, e.data)
              );
          }
          _onDealerDisconnected(e) {
            if (!this._mediator) return;
            let t = e.data;
            this._mediator.emit(y.PLUGIN_DISCONNECTED, {
              plugin: this.name,
              code: t.wsCode,
              reason: t.reason,
            });
          }
          _onDealerMessage(e) {
            this._mediator &&
              this._mediator.emit(
                y.PLUGIN_MESSAGE,
                Object.assign({ plugin: this.name }, e.data)
              );
          }
          _onDealerRequest(e) {
            this._mediator &&
              this._mediator.emit(
                y.PLUGIN_REQUEST,
                Object.assign({ plugin: this.name }, e.data)
              );
          }
          _onTransportConnect(e) {
            let t = e.data.endpoints,
              n = e.data.awaitPromise;
            if (!t.dealer) {
              n(
                Promise.reject(
                  new M(E.ENDPOINT_NOT_DEFINED, 'No "dealer" endpoint defined.')
                )
              );
              return;
            }
            if (!/^wss:/.test(t.dealer)) {
              n(
                Promise.reject(
                  new M(
                    E.INVALID_ENDPOINT,
                    "Dealer endpoint needs to be wss://"
                  )
                )
              );
              return;
            }
            n(this._dealer.connect(t.dealer));
          }
          _onTransportAuthenticate(e) {
            let t = e.data;
            t.awaitPromise(this._dealer.authenticate(t.token));
          }
          _onTransportDisconnect() {
            this._dealer.disconnect();
          }
          _onDealerError(e) {
            var t;
            null === (t = this._mediator) ||
              void 0 === t ||
              t.emit(y.PLUGIN_ERROR, {
                plugin: this.name,
                error: e.data.error,
              });
          }
          attach(e, t) {
            (this._mediator = t),
              t.addListeners({
                [y.TRANSPORT_CONNECT]: this._onTransportConnect,
                [y.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                [y.TRANSPORT_DISCONNECT]: this._onTransportDisconnect,
              }),
              this._dealer.addListeners({
                [b.DISCONNECTED]: this._onDealerDisconnected,
                [b.CONNECTION_ID]: this._onDealerConnectionId,
                [b.MESSAGE]: this._onDealerMessage,
                [b.REQUEST]: this._onDealerRequest,
                [b.ERROR]: this._onDealerError,
              });
          }
          detach(e, t) {
            (this._mediator = void 0),
              t.removeListeners({
                [y.TRANSPORT_CONNECT]: this._onTransportConnect,
                [y.TRANSPORT_AUTHENTICATE]: this._onTransportAuthenticate,
                [y.TRANSPORT_DISCONNECT]: this._onTransportDisconnect,
              }),
              this._dealer.removeListeners({
                [b.DISCONNECTED]: this._onDealerDisconnected,
                [b.CONNECTION_ID]: this._onDealerConnectionId,
                [b.MESSAGE]: this._onDealerMessage,
                [b.REQUEST]: this._onDealerRequest,
                [b.ERROR]: this._onDealerError,
              });
          }
        }
        function z(e, t) {
          return new W(t);
        }
        ((d = S || (S = {}))[(d.NONE = 0)] = "NONE"),
          (d[(d.LOG = 1)] = "LOG"),
          (d[(d.DEBUG = 2)] = "DEBUG"),
          (d[(d.INFO = 4)] = "INFO"),
          (d[(d.WARN = 8)] = "WARN"),
          (d[(d.ERROR = 16)] = "ERROR");
        class G {
          constructor() {
            (this.tag = ""), (this.description = "");
          }
          matchesTag() {
            return !1;
          }
          setLevel() {}
          enable() {}
          disable() {}
          log() {}
          debug() {}
          info() {}
          warn() {}
          error() {}
        }
        var V = n(83454);
        class Q {
          constructor(e, t = "", n = () => !1) {
            (this._tagParts = []),
              (this._tagText = ""),
              (this._enabled = !0),
              (this._level = S.NONE),
              (this.tag = ""),
              (this.description = ""),
              (this._predicate = function () {
                return !1;
              }),
              (this.tag = e),
              (this.description = t),
              (this._predicate = n),
              (this._tagParts = e.split(".")),
              (this._tagText = `[${e}]`);
          }
          _print(e, t, n) {
            if (!this._enabled && !(this._level & t)) return;
            let r = { args: n, type: e, tag: this.tag };
            this._predicate(r) || console[e](this._tagText, ...n);
          }
          matchesTag(e) {
            let t = Array.isArray(e) ? e : e.split("."),
              n = this._tagParts;
            if (t.length > n.length) return !1;
            for (let e = 0, r = t.length; e < r; e++)
              if (("*" !== t[e] || !n[e]) && t[e] !== n[e]) return !1;
            return !0;
          }
          setLevel(e) {
            let t = 0;
            switch (e) {
              case "error":
                t = S.ERROR;
                break;
              case "warn":
                t = S.WARN | S.ERROR;
                break;
              case "info":
                t = S.INFO | S.WARN | S.ERROR;
                break;
              case "debug":
                t = S.DEBUG | S.INFO | S.WARN | S.ERROR;
                break;
              default:
                t = S.LOG | S.DEBUG | S.INFO | S.WARN | S.ERROR;
            }
            this._level = t;
          }
          enable() {
            this._enabled = !0;
          }
          disable() {
            this._enabled = !1;
          }
          log(...e) {
            this._print("log", S.LOG, e);
          }
          debug(...e) {
            this._print("debug", S.DEBUG, e);
          }
          info(...e) {
            this._print("info", S.INFO, e);
          }
          warn(...e) {
            this._print("warn", S.WARN, e);
          }
          error(...e) {
            this._print("error", S.ERROR, e);
          }
        }
        let Y = void 0 !== V && "true" === V.env.DEBUG ? Q : G,
          K = "__dbgLoggerRegistry",
          X = n.g[K];
        X ||
          ((X = { map: {}, list: [], loggingPredicate: function () {} }),
          Object.defineProperty
            ? Object.defineProperty(n.g, K, { value: X })
            : (n.g[K] = X));
        let J = X.map,
          Z = X.list;
        function ee(e) {
          return !!(X.loggingPredicate && X.loggingPredicate(e));
        }
        function et(e, t) {
          let n, r;
          if (
            ("string" == typeof e
              ? ((n = e.toLowerCase()), (r = t))
              : ((n = e.tag), (r = e.description)),
            J.hasOwnProperty(n) && J[n])
          )
            return J[n];
          let i = new Y(n, r, ee);
          return i.setLevel("log"), (J[n] = i), Z.push(i), i;
        }
        let en = { POST: !0, PUT: !0, DELETE: !0 };
        ((h = w || (w = {}))[(h.UNKNOWN = 0)] = "UNKNOWN"),
          (h[(h.OK = 200)] = "OK"),
          (h[(h.CREATED = 201)] = "CREATED"),
          (h[(h.ACCEPTED = 202)] = "ACCEPTED"),
          (h[(h.NO_CONTENT = 204)] = "NO_CONTENT"),
          (h[(h.PARTIAL_CONTENT = 206)] = "PARTIAL_CONTENT"),
          (h[(h.BAD_REQUEST = 400)] = "BAD_REQUEST"),
          (h[(h.UNAUTHORIZED = 401)] = "UNAUTHORIZED"),
          (h[(h.PAYMENT_REQUIRED = 402)] = "PAYMENT_REQUIRED"),
          (h[(h.FORBIDDEN = 403)] = "FORBIDDEN"),
          (h[(h.NOT_FOUND = 404)] = "NOT_FOUND"),
          (h[(h.METHOD_NOT_ALLOWED = 405)] = "METHOD_NOT_ALLOWED"),
          (h[(h.NOT_ACCEPTABLE = 406)] = "NOT_ACCEPTABLE"),
          (h[(h.PROXY_AUTHENTICATION_REQUIRED = 407)] =
            "PROXY_AUTHENTICATION_REQUIRED"),
          (h[(h.TIMED_OUT = 408)] = "TIMED_OUT"),
          (h[(h.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
          (h[(h.CONFLICT = 409)] = "CONFLICT"),
          (h[(h.GONE = 410)] = "GONE"),
          (h[(h.LENGTH_REQUIRED = 411)] = "LENGTH_REQUIRED"),
          (h[(h.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
          (h[(h.REQUEST_ENTITY_TOO_LARGE = 413)] = "REQUEST_ENTITY_TOO_LARGE"),
          (h[(h.REQUEST_URI_TOO_LONG = 414)] = "REQUEST_URI_TOO_LONG"),
          (h[(h.UNSUPPORTED_MEDIA_TYPE = 415)] = "UNSUPPORTED_MEDIA_TYPE"),
          (h[(h.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
            "REQUESTED_RANGE_NOT_SATISFIABLE"),
          (h[(h.EXPECTATION_FAILED = 417)] = "EXPECTATION_FAILED"),
          (h[(h.INTERNAL_SERVER_ERROR = 500)] = "INTERNAL_SERVER_ERROR"),
          (h[(h.NOT_IMPLEMENTED = 501)] = "NOT_IMPLEMENTED"),
          (h[(h.BAD_GATEWAY = 502)] = "BAD_GATEWAY"),
          (h[(h.SERVICE_UNAVAILABLE = 503)] = "SERVICE_UNAVAILABLE"),
          (h[(h.GATEWAY_TIMEOUT = 504)] = "GATEWAY_TIMEOUT"),
          (h[(h.HTTP_VERSION_NOT_SUPPORTED = 505)] =
            "HTTP_VERSION_NOT_SUPPORTED");
        class er extends Error {
          constructor(e, t, n, r) {
            super(e),
              (this.name = "RequestError"),
              (this.message = e),
              (this.code = t),
              (this.status = n || 0),
              (this.url = r);
          }
        }
        class ei extends er {
          constructor(e) {
            super("Request aborted by signal.", m.HTTP_REQUEST_ABORTED, 0, e),
              (this.name = "RequestAbortedError"),
              (this.message = "Request aborted by signal.");
          }
        }
        class es {
          constructor(e) {
            (this.get = e.get.bind(e)), (this.has = e.has.bind(e));
          }
          get(e) {
            return null;
          }
          has(e) {
            return !1;
          }
        }
        class eo {
          constructor(e, t = 0) {
            (this.url = ""),
              (this.status = 0),
              (this.headers = null),
              (this.body = null),
              (this.offline = !1),
              (this.timing = null),
              (this.metadata = null),
              (this.retries = { count: 0 }),
              (this.url = e),
              (this.status = t),
              (this.ok = t >= 200 && t <= 299);
          }
          getStatusFamily() {
            return 0 | (this.status / 100);
          }
        }
        let ea = et("transport.http.fetch"),
          el = { json: !0, text: !0, arraybuffer: !0, blob: !0 };
        function ec() {
          return "function" == typeof fetch;
        }
        function eu(e) {
          if (!ec()) return Promise.reject(TypeError("Fetch is not supported"));
          let t = e.options.signal;
          if (null == t ? void 0 : t.aborted)
            return Promise.reject(new ei(e.url));
          if (!e.url)
            return Promise.reject(TypeError("Request URL cannot be blank."));
          let n = e.method || "GET",
            r = e.url,
            i = null;
          if (
            (n in en && e.payload
              ? (i = e.payload)
              : e.payload && (r += `?${e.payload}`),
            e.options.responseType && !(e.options.responseType in el))
          )
            return Promise.reject(
              TypeError("Cannot set responseType: not supported in browser.")
            );
          let s = {
            mode: e.options.mode || "cors",
            credentials: e.options.credentials || "same-origin",
            redirect: e.options.redirect || "follow",
            signal: t,
            method: n,
          };
          e.headers.count() && (s.headers = e.headers.toJSON()),
            i && (s.body = i);
          let o = Date.now();
          return fetch(r, s)
            .then(function (t) {
              let n;
              n =
                e.options.ignoreResponseBody || t.status === w.NO_CONTENT
                  ? null
                  : "json" === e.options.responseType
                  ? t.json().catch(function (e) {
                      return (
                        ea.warn("Could not parse response as JSON:", e), null
                      );
                    })
                  : "arraybuffer" === e.options.responseType
                  ? t.arrayBuffer()
                  : "blob" === e.options.responseType
                  ? t.blob()
                  : t.text();
              let r =
                e.options.parseResponseHeaders || t.status > 299
                  ? new es(t.headers)
                  : null;
              return Promise.all([t.url, t.status, r, n]);
            })
            .then(function ([t, n, r, i]) {
              let s = new eo(t, n);
              if (((s.body = i), (s.headers = r), e.options.timing)) {
                let e = Date.now() - o;
                s.timing = { completed: e };
              }
              return s;
            })
            .catch(function (t) {
              if ((null == t ? void 0 : t.name) === "AbortError")
                throw new ei(r);
              let n = new eo(r);
              if (e.options.timing) {
                let e = Date.now() - o;
                n.timing = { completed: e };
              }
              return n;
            })
            .then(function (t) {
              return (
                e.options.connectionObserver &&
                  (t.offline = !e.options.connectionObserver.isOnline()),
                t
              );
            });
        }
        var ed = n(97582);
        let eh = { baseTime: 200, ceiling: 0, curve: "linear", jitter: !0 };
        class ep {
          constructor(e = {}) {
            (this._curve = e.curve || eh.curve),
              (this._baseTime = e.baseTime || eh.baseTime),
              (this._ceiling = e.ceiling || eh.ceiling),
              (this._jitter = "jitter" in e ? !!e.jitter : eh.jitter);
          }
          getTime(e) {
            let t;
            switch (this._curve) {
              case "static":
                t = 1;
                break;
              case "logarithmic":
                t = Math.log(e);
                break;
              case "exponential":
                t = Math.pow(Math.E, e);
                break;
              default:
                t = e + 1;
            }
            let n = Math.min(4294967296, Math.floor(t * this._baseTime));
            return (
              this._ceiling && (n = Math.min(n, this._ceiling)),
              this._jitter
                ? (function (e) {
                    let t = e / 5;
                    return Math.floor(e - t / 2 + Math.random() * t);
                  })(n)
                : n
            );
          }
        }
        let ef = {
          backoffInitial: !1,
          baseTime: 200,
          ceiling: 0,
          curve: "linear",
          jitter: !0,
          maxDuration: 1 / 0,
          maxRetries: 1 / 0,
          maxTime: 1 / 0,
          retryPredicate: () => !0,
        };
        class em {
          constructor(e, t) {
            (this._resolver = j()),
              (this._ts = 0),
              (this._callCount = 0),
              (this._tickInterval = 0),
              (this._isRunning = !1),
              (this._isDestroyed = !1);
            let n = Object.assign(Object.assign({}, ef), t),
              {
                backoffInitial: r,
                maxDuration: i,
                maxRetries: s,
                maxTime: o,
                retryPredicate: a,
              } = n,
              l = (0, ed.__rest)(n, [
                "backoffInitial",
                "maxDuration",
                "maxRetries",
                "maxTime",
                "retryPredicate",
              ]);
            (this._fn = e),
              (this._backoffInitial = r),
              (this._maxDuration = i),
              (this._maxRetries = s),
              (this._maxTime = o),
              (this._retryPredicate = a),
              (this._backoffInitial = r),
              (this._counter = new ep(l)),
              this._backoffInitial && (this._maxRetries += 1);
          }
          static init(e, t = {}) {
            return new em(e, t).start();
          }
          _destroy() {
            (this._isRunning = !1), (this._isDestroyed = !0);
          }
          _failure(e) {
            if (!this._isDestroyed) {
              if (e && "retryAfter" in e) this._retryAfter(e);
              else {
                let t = this._counter.getTime(this._callCount);
                this._shouldRetry(t, e)
                  ? (this._callCount++,
                    (this._tickInterval = setTimeout(() => this._tick(), t)))
                  : (this._resolver.reject(e), this._destroy());
              }
            }
          }
          _retryAfter(e) {
            this._callCount++,
              (this._tickInterval = setTimeout(
                () => this._tick(),
                e.retryAfter
              ));
          }
          _success(...e) {
            this._isDestroyed ||
              (this._resolver.resolve(...e), this._destroy());
          }
          _shouldRetry(e, t) {
            let n = Date.now() - this._ts + e;
            return (
              this._callCount < this._maxRetries &&
              e < this._maxTime &&
              n < this._maxDuration &&
              this._retryPredicate(t)
            );
          }
          _tick() {
            this._fn()
              .then((...e) => this._success(...e))
              .catch((e) => this._failure(e));
          }
          getResolver() {
            return this._resolver.promise;
          }
          start() {
            return this._isDestroyed
              ? Promise.reject(Error("Backoff already consumed"))
              : (this._isRunning ||
                  ((this._ts = Date.now()),
                  (this._isRunning = !0),
                  this._backoffInitial
                    ? ((this._callCount = 1),
                      (this._tickInterval = setTimeout(
                        () => this._tick(),
                        this._counter.getTime(0)
                      )))
                    : this._tick()),
                this._resolver.promise);
          }
          stop() {
            clearTimeout(this._tickInterval), this._destroy();
          }
          getRetryCount() {
            return this._callCount;
          }
        }
        ((p = O || (O = {}))[(p.CONNECTION_ERROR = 0)] = "CONNECTION_ERROR"),
          (p[(p.INFORMATIONAL = 1)] = "INFORMATIONAL"),
          (p[(p.SUCCESS = 2)] = "SUCCESS"),
          (p[(p.REDIRECTION = 3)] = "REDIRECTION"),
          (p[(p.CLIENT_ERROR = 4)] = "CLIENT_ERROR"),
          (p[(p.SERVER_ERROR = 5)] = "SERVER_ERROR");
        class e_ extends Error {
          constructor(e, t, n = null) {
            super(t),
              (this.name = "TransportError"),
              (this.message = t),
              (this.code = e),
              (this.origin = n);
          }
        }
        class eg {
          constructor(e) {
            (this._headers = {}), (this._count = 0), this._setAll(e);
          }
          _setAll(e) {
            let t = 0;
            for (let n in e)
              e.hasOwnProperty(n) &&
                e[n] &&
                ((this._headers[n.toLowerCase()] = e[n]), t++);
            this._count = t;
          }
          get(e) {
            return this._headers[e.toLowerCase()] || null;
          }
          has(e) {
            return !!this._headers[e.toLowerCase()];
          }
          set(e, t) {
            (this._headers[e.toLowerCase()] = t), this._count++;
          }
          delete(e) {
            let t = e.toLowerCase();
            this._headers[t] && this._count--,
              delete this._headers[e.toLowerCase()];
          }
          count() {
            return this._count;
          }
          toJSON() {
            return Object.assign({}, this._headers);
          }
        }
        class ey {
          constructor(e, t) {
            (this.url = e),
              (this.method = (null == t ? void 0 : t.method) || "GET"),
              (this.headers = new eg(null == t ? void 0 : t.headers)),
              (this.options = (null == t ? void 0 : t.options) || {}),
              (this.payload = null == t ? void 0 : t.payload),
              (this.urlExpanded = (null == t ? void 0 : t.urlExpanded) || !1),
              (this.retryOptions = (null == t ? void 0 : t.retryOptions) || {});
          }
          static create(e, t) {
            return new ey(e, t);
          }
          clone() {
            let e = new ey(this.url);
            return (
              (e.method = this.method),
              (e.headers = new eg(this.headers.toJSON())),
              (e.options = this.options),
              (e.payload = this.payload),
              (e.urlExpanded = this.urlExpanded),
              (e.retryOptions = this.retryOptions),
              e
            );
          }
        }
        ((f = R || (R = {})).EVENT_ACCESS_TOKEN = "access_token"),
          (f.EVENT_CONNECTION_ID = "connection_id"),
          (f.EVENT_CONNECTION_OFFLINE = "connection_offline"),
          (f.EVENT_CONNECTION_ONLINE = "connection_online"),
          (f.EVENT_ENDPOINTS_RESOLVED = "endpoints_resolved");
        class ev extends I.vp {
          constructor(e, t) {
            super(),
              (this.EVENT_ACCESS_TOKEN = R.EVENT_ACCESS_TOKEN),
              (this.EVENT_CONNECTION_ID = R.EVENT_CONNECTION_ID),
              (this.EVENT_CONNECTION_OFFLINE = R.EVENT_CONNECTION_OFFLINE),
              (this.EVENT_CONNECTION_ONLINE = R.EVENT_CONNECTION_ONLINE),
              (this.EVENT_ENDPOINTS_RESOLVED = R.EVENT_ENDPOINTS_RESOLVED),
              (this.StatusCode = w),
              (this.StatusFamily = O),
              (this.getConnectionId = e.getConnectionId.bind(e)),
              (this.getEndpoints = e.getEndpoints.bind(e)),
              (this.getInitTime = e.getInitTime.bind(e)),
              (this.getLastToken = e.getLastToken.bind(e)),
              (this.matchMessages = e.matchMessages.bind(e)),
              (this.unmatchMessages = e.unmatchMessages.bind(e)),
              (this.handlePushRequests = e.handlePushRequests.bind(e)),
              (this.unhandlePushRequests = e.unhandlePushRequests.bind(e)),
              (this.hasPlugin = e.hasPlugin.bind(e)),
              (this.getPluginAPI = e.getPluginAPI.bind(e));
            let n = e.request.bind(e);
            (null == t ? void 0 : t.requestOptions)
              ? (this.request = (e, r) =>
                  r
                    ? n(
                        e,
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              null == t ? void 0 : t.requestOptions
                            ),
                            r
                          ),
                          {
                            metadata: Object.assign(
                              Object.assign({}, t.requestOptions.metadata),
                              null == r ? void 0 : r.metadata
                            ),
                            retry: Object.assign(
                              Object.assign({}, t.requestOptions.retry),
                              null == r ? void 0 : r.retry
                            ),
                          }
                        )
                      )
                    : n(e, t.requestOptions))
              : (this.request = n),
              this.proxyEmit(e, _.ACCESS_TOKEN, R.EVENT_ACCESS_TOKEN),
              this.proxyEmit(
                e,
                _.CONNECTION_OFFLINE,
                R.EVENT_CONNECTION_OFFLINE
              ),
              this.proxyEmit(e, _.CONNECTION_ONLINE, R.EVENT_CONNECTION_ONLINE),
              this.proxyEmit(
                e,
                _.ENDPOINTS_RESOLVED,
                R.EVENT_ENDPOINTS_RESOLVED
              ),
              this.onAddListener(
                R.EVENT_CONNECTION_ID,
                this._onAddConnectionIdListener.bind(this, e.on.bind(e))
              ),
              this.onRemoveListener(
                R.EVENT_CONNECTION_ID,
                this._onRemoveConnectionIdListener.bind(
                  this,
                  e.removeListener.bind(e)
                )
              );
          }
          _onAddConnectionIdListener(e, t) {
            t.preventDefault();
            let n = t.data.listener,
              r = (e) => {
                let t = this.createEvent(R.EVENT_CONNECTION_ID, e.data);
                n.call(this, t);
              };
            (n.$proxy_wrapper = r), e(_.CONNECTION_ID, r, t.data.options);
          }
          _onRemoveConnectionIdListener(e, t) {
            t.preventDefault();
            let n = t.data.listener;
            n.$proxy_wrapper &&
              e(_.CONNECTION_ID, n.$proxy_wrapper, t.data.options);
          }
          removeAllListeners() {
            return this;
          }
        }
        class eE {
          constructor() {
            (this._startTime = null), (this._endTime = null);
          }
          static create() {
            return new eE();
          }
          start() {
            if (null !== this._startTime)
              throw Error("Measurement is already in progress.");
            this._startTime = Date.now();
          }
          end() {
            if (null === this._startTime || null !== this._endTime)
              throw Error("Measurement is not in progress.");
            this._endTime = Date.now();
          }
          getMetrics() {
            if (null === this._startTime || null === this._endTime)
              throw Error("Measurement is not done.");
            return { start_time: this._startTime, end_time: this._endTime };
          }
        }
        let eb = et("transport.transport"),
          eT = /^(?:https?:\/\/)?@([^\/]+)\//,
          eS = /^(ws|http)s?:\/\/.*[^\/]$/,
          ew = /^([a-zA-Z]{3},\ \d{1,2}\ [a-zA-Z]{3}\ (\d{1,2}.){3})/,
          eO = { xhr: !0, fetch: !0 };
        function eR(e, t) {
          let n = `access_token=${encodeURIComponent(t)}`,
            [r, i] = e.split("?");
          if (!i) return `${r}?${n}`;
          let s = i.replace(/access_token=[^&]*(&|$)/, `${n}$1`);
          return s !== i ? `${r}?${s}` : `${r}?${n}&${i}`;
        }
        class eN extends I.vp {
          constructor(e) {
            if (
              (super(),
              (this._plugins = {}),
              (this._pluginMediator = new I.vp()),
              (this._connectCalled = !1),
              (this._authenticateCalled = !1),
              (this._endpoints = null),
              (this._lastToken = null),
              (this._lastTokenExpiry = 0),
              (this._refreshTokenPromise = null),
              (this._authenticationPromise = null),
              (this._reconnectTimeout = 0),
              (this._isReconnecting = !1),
              (this._initTime = 0),
              (this._lastDisconnect = 0),
              (this._stateMask = 0),
              (this._quickDisconnectCount = 0),
              (this._counter = new ep({
                curve: "exponential",
                baseTime: 5e3,
                ceiling: 15e3,
              })),
              (this._stateAwareListeners = {
                connected: [],
                authenticated: [],
                connection_id: [],
                transport_connect: [],
                transport_authenticate: [],
              }),
              (this._stateAwareOperationMetrics = { authenticated: null }),
              (this._stateAwareRunners = {
                connected: null,
                authenticated: null,
                connection_id: null,
                transport_connect: null,
                transport_authenticate: null,
              }),
              !e)
            )
              throw TypeError(
                "Argument `options` for Transport cannot be null."
              );
            if (!e.providers)
              throw TypeError(
                "Argument `options.providers` for Transport cannot be null."
              );
            (this._ownerRef = "ownerRef" in e ? Object(e.ownerRef) : {}),
              (this._tokenProvider = e.providers.token),
              (this._endpointsProvider = e.providers.endpoints),
              (this._XHR = e.XHR),
              (this._Fetch = e.Fetch),
              (this._reconnectionRetries =
                e.reconnectionRetries >= 0 ? e.reconnectionRetries : 3),
              (this._requestMode = e.requestMode in eO ? e.requestMode : "xhr"),
              (this._forcePolyfillTypes = e.forcePolyfillTypes || {}),
              (this._disableAutoLogout =
                "disableAutoLogout" in e && !!e.disableAutoLogout),
              (this._disconnectBeforeUnload = e.disconnectBeforeUnload || !1);
            let t = e.createConnectionObserver || k.create;
            (this._connectionObserver = t({
              notifyBeforeUnload: this._disconnectBeforeUnload,
            })),
              (this.authenticate = this.authenticate.bind(this)),
              (this._authenticateWithToken =
                this._authenticateWithToken.bind(this)),
              (this._connectToEndpoints = this._connectToEndpoints.bind(this)),
              (this._parseProvidedToken = this._parseProvidedToken.bind(this)),
              (this._onConnected = this._onConnected.bind(this)),
              (this._onAuthenticated = this._onAuthenticated.bind(this)),
              (this._onAuthenticationFailed =
                this._onAuthenticationFailed.bind(this)),
              this._init();
          }
          static create(e) {
            return new eN(e);
          }
          _init() {
            this.onAddListener(
              _.CONNECTED,
              this._onAddListener.bind(this, "connected")
            ),
              this.onAddListener(
                _.AUTHENTICATED,
                this._onAddListener.bind(this, "authenticated")
              ),
              this.onAddListener(
                _.CONNECTION_ID,
                this._onAddListener.bind(this, "connection_id")
              ),
              this.onRemoveListener(
                _.CONNECTED,
                this._onRemoveListener.bind(this, "connected")
              ),
              this.onRemoveListener(
                _.AUTHENTICATED,
                this._onRemoveListener.bind(this, "authenticated")
              ),
              this.onRemoveListener(
                _.CONNECTION_ID,
                this._onRemoveListener.bind(this, "connection_id")
              ),
              this._pluginMediator.onAddListener(
                y.TRANSPORT_CONNECT,
                this._onAddListener.bind(this, "transport_connect")
              ),
              this._pluginMediator.onAddListener(
                y.TRANSPORT_AUTHENTICATE,
                this._onAddListener.bind(this, "transport_authenticate")
              ),
              this._pluginMediator.onRemoveListener(
                y.TRANSPORT_CONNECT,
                this._onRemoveListener.bind(this, "transport_connect")
              ),
              this._pluginMediator.onRemoveListener(
                y.TRANSPORT_AUTHENTICATE,
                this._onRemoveListener.bind(this, "transport_authenticate")
              ),
              "fetch" !== this._requestMode ||
                (this._Fetch && this._Fetch.isSupported()) ||
                (eb.warn(
                  'Default "fetch" request mode unavailable; Fallback to "xhr"'
                ),
                (this._requestMode = "xhr"));
            let e = this._pluginMediator;
            e.addListeners({
              [y.PLUGIN_DISCONNECTED]: this._onPluginDisconnected.bind(this),
            }),
              this.proxyEmit(e, y.PLUGIN_CONNECTION_INFO, _.CONNECTION_ID),
              this._disableAutoLogout ||
                this.matchMessages("client:logout", () => this._onLogout()),
              this._connectionObserver.on(_.CONNECTION_ONLINE, () =>
                this._onOnline()
              ),
              this._connectionObserver.on(_.CONNECTION_OFFLINE, () =>
                this._onOffline()
              ),
              this._connectionObserver.on(_.WINDOW_BEFORE_UNLOAD, () =>
                this._disconnect(v.WINDOW_BEFORE_UNLOAD)
              );
          }
          _runStateAwareQueues(e, t) {
            for (let n of this._stateAwareListeners[e].splice(0))
              n.call(this, t);
            this._stateAwareRunners[e] = null;
          }
          _connect() {
            return 1 & this._stateMask
              ? Promise.resolve(!1)
              : this._connectionObserver.isOnline()
              ? this._performConnect()
              : new Promise((e, t) => {
                  eb.info("Waiting to go online before connecting"),
                    this._connectionObserver.once(_.CONNECTION_ONLINE, () => {
                      this._performConnect().then(e, t);
                    });
                });
          }
          _performConnect() {
            return new Promise((e) => {
              eb.info("Resolving endpoints"),
                e(this._endpointsProvider(this.toPublic()));
            })
              .catch((e) => {
                let t = (null == e ? void 0 : e.code)
                  ? e
                  : new e_(
                      m.TRANSPORT_ENDPOINTS_PROVIDER_ERROR,
                      (null == e ? void 0 : e.message) ||
                        "Endpoints provider error",
                      null != e ? e : null
                    );
                return (
                  eb.error("Endpoints resolution failed", t), Promise.reject(t)
                );
              })
              .then(this._connectToEndpoints)
              .then(this._onConnected)
              .catch((e) => {
                let t = e && e.error ? e.error : e;
                return (
                  this.emit(_.CONNECTION_FAILED, { error: t }),
                  eb.error("Connection failed", t),
                  Promise.reject(t)
                );
              });
          }
          _connectToEndpoints(e) {
            let t = { webgate: "", webapi: "" };
            for (let n in e) {
              if (!e.hasOwnProperty(n)) continue;
              let r = e[n];
              r && (eS.test(r) && (r += "/"), (t[n] = r));
            }
            (this._endpoints = t),
              this.emit(_.ENDPOINTS_RESOLVED, {
                endpoints: Object.assign({}, t),
              }),
              eb.info("Endpoints resolved");
            let n = [],
              r = (e) => {
                n.push(e);
              };
            return (
              eb.info("Waiting for plugins to connect"),
              new Promise((e, i) => {
                this._pluginMediator.emitAndWait(
                  y.TRANSPORT_CONNECT,
                  { endpoints: Object.assign({}, t), awaitPromise: r },
                  () => {
                    Promise.all(n).then(() => e(!0), i);
                  }
                );
              })
            );
          }
          _refreshToken(e = !1) {
            if (this._refreshTokenPromise) return this._refreshTokenPromise;
            if (!e && this._lastToken && this._lastTokenExpiry > Date.now())
              return Promise.resolve(this._lastToken);
            this._refreshTokenPromise = new Promise((e) => {
              eb.info("Requesting token from provider"),
                e(this._tokenProvider());
            }).then(this._parseProvidedToken);
            let t = () => {
              this._refreshTokenPromise = null;
            };
            return (
              this._refreshTokenPromise.then(t, t),
              this._refreshTokenPromise.catch((e) => {
                let t = (null == e ? void 0 : e.code)
                  ? e
                  : new e_(
                      m.TRANSPORT_TOKEN_PROVIDER_ERROR,
                      (null == e ? void 0 : e.message) ||
                        "Token provider error",
                      e
                    );
                return (
                  this.emit(_.TOKEN_PROVIDER_ERROR, { error: t }),
                  eb.error("Token provider error", t),
                  Promise.reject(t)
                );
              })
            );
          }
          _parseProvidedToken(e) {
            let t, n;
            if (
              (Array.isArray(e)
                ? ((t = e[0]), isNaN((n = parseInt(e[1], 10))) && (n = 3540))
                : ((t = e), (n = 3540)),
              !t)
            )
              throw (
                ((this._lastToken = null),
                (this._lastTokenExpiry = 0),
                eb.error("No token was provided"),
                new e_(
                  m.TRANSPORT_INVALID_TOKEN,
                  `Token provider returned an invalid token, "${t}"`
                ))
              );
            if (this._lastToken === t) {
              eb.error("TokenProvider returned same token twice.");
              let e = new e_(
                m.TRANSPORT_STALE_TOKEN,
                "Token provider returned the same token twice."
              );
              throw ((this._lastToken = null), (this._lastTokenExpiry = 0), e);
            }
            return (
              (this._lastToken = t),
              (this._lastTokenExpiry = Date.now() + 1e3 * n),
              this.emit(_.ACCESS_TOKEN, { token: t }),
              eb.info("Access token set"),
              t
            );
          }
          _authenticateWithToken(e) {
            if (!this._endpoints) return Promise.resolve(!0);
            let t = [],
              n = (e) => {
                t.push(e);
              };
            return (
              eb.info("Waiting for plugins to authenticate"),
              new Promise((r, i) => {
                this._pluginMediator.emitAndWait(
                  y.TRANSPORT_AUTHENTICATE,
                  { token: e, awaitPromise: n },
                  () => {
                    Promise.all(t).then(() => r(!0), i);
                  }
                );
              })
            );
          }
          _authenticate(e) {
            if (!(1 & this._stateMask))
              return Promise.reject(
                new e_(
                  m.TRANSPORT_INVALID_STATE,
                  "Cannot authenticate disconnected transport."
                )
              );
            if (this._authenticationPromise) return this._authenticationPromise;
            let t = eE.create();
            return (
              t.start(),
              (this._authenticationPromise = em
                .init(
                  () => (
                    eb.info("Authenticating"),
                    this._refreshToken(e).then(this._authenticateWithToken)
                  ),
                  {
                    curve: "exponential",
                    maxRetries: 2,
                    baseTime: 500,
                    retryPredicate: (e) => (
                      eb.warn("Retrying authentication due to failure", e), !0
                    ),
                  }
                )
                .then(() => this._onAuthenticated(t))
                .catch((e) => this._onAuthenticationFailed(e, t))),
              this._authenticationPromise
            );
          }
          _performDisconnect(e) {
            return (
              (this._stateMask = 0),
              e &&
                (this.emit(_.DISCONNECTED, { reason: e }),
                eb.info("Disconnected")),
              eb.info("Waiting for plugins to disconnect."),
              this._pluginMediator.emitSync(y.TRANSPORT_DISCONNECT, {
                supressed: !e,
              }),
              !0
            );
          }
          _createReconnector() {
            let e = !1;
            return () => (
              (this._isReconnecting = !0),
              this.emit(_.RECONNECTING, null),
              eb.info("Reconnecting"),
              this._performDisconnect(),
              this._connect()
                .then(
                  () =>
                    !!this._authenticateCalled &&
                    this._authenticate(e).then(
                      (t) => ((e = !1), t),
                      (t) => ((e = !0), Promise.reject(t))
                    )
                )
                .then(
                  () => (
                    (this._isReconnecting = !1),
                    this.emit(_.RECONNECTED, null),
                    eb.info("Reconnected"),
                    !0
                  )
                )
            );
          }
          _tryToReconnect() {
            if (this._isReconnecting) {
              eb.warn("Reconnection triggered while already reconnecting");
              return;
            }
            (this._stateMask = 0),
              em
                .init(this._createReconnector(), {
                  baseTime: 1e3,
                  maxTime: 15e3,
                  maxRetries: this._reconnectionRetries,
                  retryPredicate: (e) => (
                    eb.warn("Retrying reconnection due to failure", e), !0
                  ),
                })
                .catch(() => {
                  (this._stateMask = 0),
                    (this._isReconnecting = !1),
                    this.emit(_.DISCONNECTED, {
                      reason: v.RECONNECTION_FAILED,
                    }),
                    eb.info("Disconnected: reconnection failed");
                });
          }
          _sendRequest(e, t = {}, n = {}) {
            let r = t.signal;
            return (null == r ? void 0 : r.aborted)
              ? Promise.reject(new ei(e))
              : this._processRequestArgs(e, t).then((t) =>
                  (null == r ? void 0 : r.aborted)
                    ? Promise.reject(new ei(e))
                    : t.options.forget
                    ? this._sendFireAndForgetRequest(t)
                    : this._sendRetriedRequest(t, n)
                );
          }
          _processRequestArgs(e, t = {}) {
            var n, r;
            if (null === (n = t.signal) || void 0 === n ? void 0 : n.aborted)
              return Promise.reject(new ei(e));
            let i = e,
              s = !1,
              o = Object.assign(Object.assign({}, t), {
                forcePolyfill: !!(
                  t.responseType && t.responseType in this._forcePolyfillTypes
                ),
                requestMode:
                  null !== (r = null == t ? void 0 : t.requestMode) &&
                  void 0 !== r
                    ? r
                    : this._requestMode,
                connectionObserver: this._connectionObserver,
                metadata: (null == t ? void 0 : t.metadata) || null,
              });
            if (
              ((null == t ? void 0 : t.signal) &&
                !x() &&
                ("fetch" === t.requestMode
                  ? eb.warn(
                      "Request with `{requestMode: fetch}` but no native AbortController."
                    )
                  : (o.requestMode = "xhr")),
              eT.test(i))
            ) {
              s = !0;
              try {
                i = this._tryExpandSpecialURL(i);
              } catch (e) {
                return Promise.reject(e);
              }
              "authorize" in o || ((o.authorize = !0), (o.autoAuthorized = !0));
            }
            let a = Object.assign(
              Object.assign({ maxRetries: 2, curve: "exponential" }, t.retry),
              { retryPredicate: (e) => !(e instanceof ei) }
            );
            return Promise.resolve(
              ey.create(i, {
                method: t.method,
                headers: t.headers,
                payload: t.payload,
                options: o,
                urlExpanded: s,
                retryOptions: a,
              })
            );
          }
          _tryExpandSpecialURL(e) {
            let t = this._endpoints;
            return e.replace(eT, (e, n) => {
              if (!t.hasOwnProperty(n))
                throw TypeError(
                  `Cannot replace endpoint @${n}: endpoint not defined.`
                );
              return t[n];
            });
          }
          _sendFireAndForgetRequest(e) {
            var t;
            let { url: n, method: r, options: i } = e;
            if (null === (t = i.signal) || void 0 === t ? void 0 : t.aborted)
              return Promise.reject(new ei(n));
            if ("GET" !== r && "POST" !== r)
              return Promise.reject(
                new e_(
                  m.TRANSPORT_UNSUPPORTED_OPTION,
                  `Option 'forget' cannot be used for ${r} request.`
                )
              );
            if (!i.autoAuthorized && i.authorize)
              return Promise.reject(
                new e_(
                  m.TRANSPORT_UNSUPPORTED_OPTION,
                  "Option 'forget' cannot be used for authorized request."
                )
              );
            if (
              ((i.requestMode = "xhr"),
              (i.authorize = !1),
              (i.ignoreResponseBody = !0),
              "GET" === r)
            ) {
              if ("function" == typeof fetch) {
                let e = { mode: "no-cors" };
                i.signal && x() && (e.signal = i.signal),
                  fetch(n, e).catch(() => {});
              } else
                "function" == typeof Image
                  ? (new Image().src = n)
                  : this._sendRetriedRequest(e, {}).catch(() => {});
            } else if ("POST" === r) {
              if (
                "undefined" != typeof navigator &&
                (null == navigator ? void 0 : navigator.sendBeacon)
              ) {
                let t = e.headers.get("content-type");
                navigator.sendBeacon(
                  e.url,
                  "string" == typeof e.payload && t
                    ? new Blob([e.payload], { type: t })
                    : e.payload
                );
              } else if ("function" == typeof fetch) {
                let t = e.headers.get("content-type"),
                  r = {
                    method: "POST",
                    body: e.payload,
                    headers: t ? { "content-type": t } : void 0,
                  };
                i.signal && x() && (r.signal = i.signal),
                  fetch(n, r).catch(() => {});
              } else this._sendRetriedRequest(e, {}).catch(() => {});
            }
            return Promise.resolve(new eo(n, 0));
          }
          _sendRetriedRequest(e, t) {
            let n = e.retryOptions,
              r = e.options.signal,
              i = !1,
              s = () =>
                (null == r ? void 0 : r.aborted)
                  ? Promise.reject(new ei(e.url))
                  : this._setAuthHeader(e, i),
              o = this._connectionObserver,
              a = new em(
                () =>
                  (o.isOnline() || e.options.allowOffline
                    ? s()
                    : new Promise((e, t) => {
                        o.once(_.CONNECTION_ONLINE, () => {
                          s().then(e, t);
                        });
                      })
                  )
                    .then(() => {
                      let n;
                      if (null == r ? void 0 : r.aborted)
                        return Promise.reject(new ei(e.url));
                      if (
                        (this._pluginMediator.emitSync(
                          y.TRANSPORT_BEFORE_SEND_REQUEST,
                          { request: e, context: t }
                        ),
                        "fetch" === e.options.requestMode &&
                          this._Fetch &&
                          this._Fetch.isSupported())
                      )
                        n = this._Fetch.request(e);
                      else if (this._XHR) n = this._XHR.request(e);
                      else throw Error("No available request mechanisms.");
                      return n;
                    })
                    .then((t) => {
                      if (null == r ? void 0 : r.aborted)
                        return Promise.reject(new ei(e.url));
                      let s = null;
                      if (
                        (t.headers && (s = t.headers.get("Retry-After")),
                        t.status === w.UNAUTHORIZED &&
                          !e.options.ignoreUnauthorized)
                      )
                        return (i = !0), Promise.reject(t);
                      if (
                        "function" ==
                          typeof (null == n ? void 0 : n.condition) &&
                        (n.condition(t, O) || s)
                      ) {
                        if (null !== s) {
                          if (ew.test(s))
                            t.retryAfter = new Date(s).getTime() - Date.now();
                          else {
                            let e = parseInt(s, 10);
                            e > 0 && (t.retryAfter = 1e3 * e);
                          }
                        }
                        return Promise.reject(t);
                      }
                      return Promise.resolve(t);
                    }),
                n
              );
            return a
              .start()
              .catch(this._handleRetriedRequestError)
              .then((n) =>
                (null == r ? void 0 : r.aborted)
                  ? Promise.reject(new ei(e.url))
                  : ((n.metadata = e.options.metadata),
                    (n.retries = n.retries || { count: 0 }),
                    (n.retries.count = a.getRetryCount()),
                    this._pluginMediator.emitSync(
                      y.TRANSPORT_BEFORE_RETURN_RESPONSE,
                      { context: t, response: n }
                    ),
                    e.options.rejectNotOk && !n.ok)
                  ? Promise.reject(n)
                  : n
              );
          }
          _setAuthHeader(e, t) {
            if (!e.options.authorize) return Promise.resolve(e);
            let n = () =>
              this._refreshToken(t).then(
                (t) => (e.headers.set("Authorization", `Bearer ${t}`), e)
              );
            return 4 & this._stateMask
              ? n()
              : new Promise((e, t) => {
                  eb.info("Auth header setting awaiting authentication."),
                    this.once(_.AUTHENTICATED, () => {
                      eb.info("Auth header set after authentication."),
                        n().then(e, t);
                    });
                });
          }
          _handleRetriedRequestError(e) {
            return e instanceof eo ? Promise.resolve(e) : Promise.reject(e);
          }
          _onAddListener(e, t) {
            let n;
            let r = t.data.options;
            if (r.ignoreCurrentState) return;
            switch (e) {
              case "connected":
                if (!this.isConnected()) return;
                n = Promise.resolve(this.createEvent(_.CONNECTED, null));
                break;
              case "authenticated": {
                if (!this.isAuthenticated()) return;
                let e = this._stateAwareOperationMetrics.authenticated;
                n = Promise.resolve(
                  this.createEvent(_.AUTHENTICATED, { timing: e })
                );
                break;
              }
              case "connection_id": {
                let e = this.getPluginAPI("dealer");
                if (!e || !e.hasConnectionInfo()) return;
                n = e
                  .getConnectionInfo()
                  .then((e) => this.createEvent(_.CONNECTION_ID, e));
                break;
              }
              case "transport_connect":
                if (!this.isConnected() || !this._endpoints) return;
                n = Promise.resolve(
                  this._pluginMediator.createEvent(y.TRANSPORT_CONNECT, {
                    endpoints: Object.assign({}, this._endpoints),
                    awaitPromise: (e) => {},
                  })
                );
                break;
              case "transport_authenticate":
                if (!this.isAuthenticated()) return;
                n = this._refreshToken().then((e) =>
                  this._pluginMediator.createEvent(y.TRANSPORT_AUTHENTICATE, {
                    token: e,
                    awaitPromise: (e) => {},
                  })
                );
                break;
              default:
                return;
            }
            let i = t.data.listener;
            this._stateAwareListeners[e].push(i);
            let s = this._stateAwareRunners;
            !s[e] &&
              ((s[e] = n.then(this._runStateAwareQueues.bind(this, e))),
              r.once && t.preventDefault());
          }
          _onRemoveListener(e, t) {
            let n = t.data.options;
            if (n.ignoreCurrentState || n.once) return;
            let r = t.data.listener,
              i = this._stateAwareListeners[e].indexOf(r);
            -1 !== i && this._stateAwareListeners[e].splice(i, 1);
          }
          _getQuickDisconnectTimeout() {
            return this._counter.getTime(this._quickDisconnectCount);
          }
          _onPluginDisconnected(e) {
            let t = Date.now(),
              n = t - this._lastDisconnect;
            if ((this._performDisconnect(), e.data.code === T.CLOSE)) {
              eb.info(`Plugin "${e.data.plugin}" explicitly disconnected`),
                (this._quickDisconnectCount = 0);
              return;
            }
            this._connectionObserver.isOnline() &&
              (eb.info(
                `Plugin "${e.data.plugin}" unexpectedly disconnect; trying to reconnect`
              ),
              n < 5e3
                ? (this._reconnectTimeout &&
                    clearTimeout(this._reconnectTimeout),
                  this._quickDisconnectCount++,
                  this.emit(_.SHORT_SESSION_DISCONNECTED, {
                    disconnectCount: this._quickDisconnectCount,
                    sessionLength: n,
                  }),
                  (this._reconnectTimeout = setTimeout(
                    this._tryToReconnect.bind(this),
                    this._getQuickDisconnectTimeout()
                  )))
                : ((this._quickDisconnectCount = 0),
                  (this._lastDisconnect = t),
                  this._tryToReconnect()));
          }
          _onOnline() {
            this.emit(_.CONNECTION_ONLINE, null),
              eb.info("ConnectionObserver online"),
              this._connectCalled && this._tryToReconnect();
          }
          _onOffline() {
            this.emit(_.CONNECTION_OFFLINE, null),
              eb.info("ConnectioObserver offline"),
              this._performDisconnect();
          }
          _onConnected() {
            return (
              (this._stateMask |= 1),
              this.emit(_.CONNECTED, null),
              eb.info("Connected"),
              Promise.resolve(!0)
            );
          }
          _onAuthenticated(e) {
            e.end(),
              clearTimeout(this._reconnectTimeout),
              (this._authenticationPromise = null),
              (this._stateMask |= 4),
              (this._initTime = Date.now());
            let t = e.getMetrics();
            return (
              this.emit(_.AUTHENTICATED, { timing: t }),
              (this._stateAwareOperationMetrics.authenticated = t),
              eb.info("Authenticated"),
              Promise.resolve(!0)
            );
          }
          _onAuthenticationFailed(e, t) {
            t.end();
            let n = e && e.error ? e.error : e;
            (this._authenticationPromise = null), (this._stateMask &= -5);
            let r = { error: n, timing: t.getMetrics() };
            return (
              this.emit(_.AUTHENTICATION_FAILED, r),
              this._pluginMediator.emit(y.TRANSPORT_AUTHENTICATE_FAILED, r),
              eb.info("Authentication failed", n),
              Promise.reject(n)
            );
          }
          _onLogout() {
            let e = () => {
              (this._lastToken = null),
                (this._lastTokenExpiry = 0),
                this.emit(_.LOGGED_OUT, null);
            };
            this._disconnect(v.LOG_OUT).then(e, e);
          }
          _disconnect(e) {
            if (!this._connectCalled) return Promise.resolve(!1);
            (this._connectCalled = !1), (this._authenticateCalled = !1);
            let t = this.isConnected()
                ? _.BEFORE_ONLINE_DISCONNECT
                : _.BEFORE_OFFLINE_DISCONNECT,
              n = [];
            return (
              this.emitSync(t, {
                awaitPromise: (e) => {
                  n.push(e.catch(() => {}));
                },
              }),
              Promise.all(n).then(() => this._performDisconnect(e))
            );
          }
          isConnected() {
            return !!(1 & this._stateMask);
          }
          isAuthenticated() {
            return !!(4 & this._stateMask);
          }
          isReconnecting() {
            return this._isReconnecting;
          }
          isOnline() {
            return this._connectionObserver.isOnline();
          }
          connect() {
            return (this._connectCalled = !0), this._connect();
          }
          authenticate() {
            return (this._authenticateCalled = !0), this._authenticate(!0);
          }
          disconnect() {
            return this._disconnect(v.EXPLICIT);
          }
          forceDisconnect() {
            return this._connectCalled
              ? ((this._connectCalled = !1),
                (this._authenticateCalled = !1),
                this._performDisconnect(v.EXPLICIT),
                Promise.resolve(!0))
              : Promise.resolve(!1);
          }
          forceTokenRefresh() {
            return this._refreshToken(!0).then(() => !0);
          }
          getInitTime() {
            return this._initTime;
          }
          getEndpoints() {
            return this._endpoints ? Object.assign({}, this._endpoints) : null;
          }
          getLastToken() {
            return this._lastToken;
          }
          toPublic(e) {
            return new ev(this, e);
          }
          hasOwnerRef(e) {
            return this._ownerRef === e;
          }
          appendTokenQuery(e) {
            return this._refreshToken().then((t) => eR(e, t));
          }
          appendLastTokenQuery(e) {
            return this._lastToken ? eR(e, this._lastToken) : e;
          }
          matchMessages(e, t, n) {
            if (!e) throw TypeError('Message "matcher" cannot be null.');
            if ("function" != typeof t)
              throw TypeError("Message callback cannot be null.");
            let r = (r) => {
              let i = r.data.message;
              i.uri && i.uri.match(e) && (!n || n === r.data.plugin) && t(i);
            };
            (r.__matchMessagesExp = e),
              (r.__matchMessagesPlugin = n),
              (t.__matchMessagesWrapper = r),
              this._pluginMediator.on(y.PLUGIN_MESSAGE, r);
          }
          unmatchMessages(e, t, n) {
            if ("function" != typeof t)
              throw TypeError("Message callback cannot be null.");
            let r = t.__matchMessagesWrapper;
            return (
              !!r &&
              r.__matchMessagesExp === e &&
              r.__matchMessagesPlugin === n &&
              (this._pluginMediator.removeListener(y.PLUGIN_MESSAGE, r), !0)
            );
          }
          handlePushRequests(e, t, n) {
            if (!e) throw TypeError('Push request "matcher" cannot be null.');
            if ("function" != typeof t)
              throw TypeError("Push request callback cannot be null.");
            let r = (r) => {
              let i = r.data.request;
              i.message_ident &&
                i.message_ident.match(e) &&
                (!n || n === r.data.plugin) &&
                Promise.resolve(t(i)).then(r.data.reply);
            };
            (r.__matchRequestExp = e),
              (r.__matchRequestPlugin = n),
              (t.__matchRequestWrapper = r),
              this._pluginMediator.on(y.PLUGIN_REQUEST, r);
          }
          unhandlePushRequests(e, t, n) {
            if ("function" != typeof t)
              throw TypeError("Push request callback cannot be null.");
            let r = t.__matchRequestWrapper;
            return (
              !!r &&
              r.__matchRequestExp === e &&
              r.__matchRequestPlugin === n &&
              (this._pluginMediator.removeListener(y.PLUGIN_REQUEST, r), !0)
            );
          }
          request(e, t) {
            var n;
            let r = { uri: e, options: t, context: {} };
            this._pluginMediator.emitSync(
              y.TRANSPORT_BEFORE_PROCESS_REQUEST,
              r
            );
            let i = this._sendRequest.bind(this, r.uri, r.options, r.context);
            return !this._endpoints && eT.test(r.uri)
              ? (eb.info("Request queued until endpoints resolved", r.uri),
                new Promise((e, t) => {
                  this.once(_.ENDPOINTS_RESOLVED, () => {
                    eb.info("Sending endpoints-queued request", r.uri),
                      i().then(e, t);
                  });
                }))
              : this._connectionObserver.isOnline() ||
                (null === (n = r.options) || void 0 === n
                  ? void 0
                  : n.allowOffline)
              ? i()
              : (eb.info("Request queued until online", r.uri),
                new Promise((e, t) => {
                  this.once(_.CONNECTION_ONLINE, () => {
                    eb.info("Sending offline-queued request", r.uri),
                      i().then(e, t);
                  });
                }));
          }
          addPlugin(e, t) {
            let n = e(this, t),
              r = n.name;
            if (this._plugins[r]) throw TypeError("Plugin is already added.");
            return (
              n.attach(this, this._pluginMediator), (this._plugins[r] = n), r
            );
          }
          removePlugin(e) {
            let t = this._plugins[e];
            return (
              !!t &&
              (t.detach(this, this._pluginMediator),
              (this._plugins[e] = void 0),
              !0)
            );
          }
          hasPlugin(e) {
            return !!this._plugins[e];
          }
          getPluginAPI(e) {
            let t = this._plugins[e];
            return t && t.api ? t.api : null;
          }
          getConnectionId(e = "dealer") {
            let t = this._plugins[e];
            return t
              ? t.api && "getConnectionInfo" in t.api
                ? t.api.getConnectionInfo().then((e) => e.id)
                : Promise.reject(
                    TypeError(`Plugin ${t} is not a socket plugin.`)
                  )
              : Promise.reject(
                  TypeError(`Cannot retrieve connection id for plugin ${t}.`)
                );
          }
          removeAllListeners() {
            return this;
          }
        }
        class eC {
          constructor(e) {
            (this._headers = {}), this._init(e);
          }
          _init(e) {
            if (e)
              for (let t of e.split("\r\n")) {
                let e = t.indexOf(": ");
                if (e > 0) {
                  let n = t.substring(0, e).toLowerCase(),
                    r = t.substring(e + 2);
                  this._headers[n] = r;
                }
              }
          }
          get(e) {
            return this._headers[e.toLowerCase()] || null;
          }
          has(e) {
            return this._headers.hasOwnProperty(e.toLowerCase());
          }
        }
        let eI = et("transport.http.xhr"),
          eA = function () {},
          ek = { json: !0, text: !0, document: !0 };
        function eP() {
          (this.onabort = eA),
            (this.onerror = eA),
            (this.onload = eA),
            (this.onloadend = eA);
        }
        function eD(e, t, n) {
          var r, i;
          if (
            null === (r = e.options.signal) || void 0 === r ? void 0 : r.aborted
          )
            return;
          let s = Date.now(),
            o = this.status,
            a = new eo(this.responseURL || e.url, o);
          a.body = null;
          let l = e.options;
          if (
            (l.timing && (a.timing = { completed: s - t }),
            (null === (i = l.connectionObserver) || void 0 === i
              ? void 0
              : i.isOnline) && (a.offline = !l.connectionObserver.isOnline()),
            (l.parseResponseHeaders || o > 299) &&
              (a.headers = new eC(this.getAllResponseHeaders())),
            !l.ignoreResponseBody && o !== w.NO_CONTENT)
          ) {
            let e = l.responseType || "";
            if (
              !l.forcePolyfill &&
              "response" in this &&
              e === this.responseType
            )
              a.body = this.response;
            else if ("document" === e) a.body = this.responseXML;
            else if ("json" === e)
              try {
                a.body = JSON.parse(this.responseText);
              } catch (e) {
                eI.warn("Could not parse response as JSON:", e),
                  (a.body = null);
              }
            else ("text" === e || "" === e) && (a.body = this.responseText);
          }
          n(a);
        }
        function ex(e, t, n) {
          4 === this.readyState
            ? t(new eo(this.responseURL || e, this.status))
            : n(
                new er(
                  "Request cannot be completed.",
                  m.HTTP_REQUEST_FAILED,
                  this.status,
                  e
                )
              );
        }
        function eL(e) {
          return (function (e) {
            let t = e.options.signal;
            return new Promise((n, r) => {
              if (null == t ? void 0 : t.aborted) {
                r(new ei(e.url));
                return;
              }
              let i = new XMLHttpRequest(),
                s = e.url;
              if (!s) {
                r(TypeError("Request URL cannot be blank."));
                return;
              }
              let o = null,
                a = e.method || "GET",
                l = e.payload || "";
              a in en && l ? (o = l) : l && (s += `?${l}`),
                i.open(a, s, !0),
                (i.onerror = ex.bind(i, s, n, r)),
                (i.onabort = eP),
                (i.onloadend = eP),
                (i.onprogress = eA);
              let c = e.options;
              "include" === c.credentials && (i.withCredentials = !0);
              let u = c.responseType;
              if (u) {
                if (c.forcePolyfill) {
                  if (!(u in ek)) {
                    r(TypeError(`Cannot polyfill responseType "${u}"`));
                    return;
                  }
                } else {
                  if (!("responseType" in i) && !(u in ek)) {
                    r(
                      TypeError(
                        "Cannot set responseType: not supported in browser."
                      )
                    );
                    return;
                  }
                  try {
                    i.responseType = u;
                  } catch (e) {
                    r(TypeError(`Unknown responseType "${u}".`));
                    return;
                  }
                  if (i && u !== i.responseType && !(u in ek)) {
                    r(TypeError(`Unknown responseType "${u}".`));
                    return;
                  }
                }
              }
              let d = e.headers.count() ? e.headers.toJSON() : null;
              if (d) {
                for (let e in d)
                  if (d.hasOwnProperty(e) && d[e])
                    try {
                      i.setRequestHeader(e, d[e]);
                    } catch (e) {
                      r(e);
                      return;
                    }
              }
              t &&
                t.addEventListener("abort", function e() {
                  t.removeEventListener("abort", e), i.abort(), r(new ei(s));
                }),
                (i.onload = eD.bind(i, e, Date.now(), n));
              try {
                i.send(o);
              } catch (e) {
                r(e);
                return;
              }
            });
          })(e);
        }
        class eM extends Error {
          constructor(e, t, n = -1) {
            super(t),
              (this.name = "XResolveError"),
              (this.message = t),
              (this.code = e),
              (this.status = n);
          }
        }
        let ej = { DEALER: "dealer", WEBGATE: "spclient" },
          eU = {
            spclient: "spclient.wg.spotify.com",
            exp: "exp.wg.spotify.com",
            partners: "partners.wg.spotify.com",
          };
        function eF(e = {}) {
          let t = {
              dealer: e.dealer || ej.DEALER,
              webgate: e.webgate || ej.WEBGATE,
            },
            n = `https://apresolve.spotify.com/?type=${t.dealer}&type=${t.webgate}`;
          return function (e) {
            return e
              .request(n, {
                forcePolyfill: !0,
                responseType: "json",
                retry: {
                  maxRetries: 3,
                  curve: "exponential",
                  condition: function (e, t) {
                    return e.getStatusFamily() !== t.SUCCESS;
                  },
                },
                metadata: { noRequestTransform: !0 },
              })
              .then((e) => {
                var n, r, i, s, o;
                let a = e.body,
                  l = {
                    dealer:
                      null !==
                        (r =
                          null === (n = null == a ? void 0 : a[t.dealer]) ||
                          void 0 === n
                            ? void 0
                            : n[0]) && void 0 !== r
                        ? r
                        : "dealer.spotify.com",
                    webgate:
                      null !==
                        (o =
                          null !==
                            (s =
                              null ===
                                (i = null == a ? void 0 : a[t.webgate]) ||
                              void 0 === i
                                ? void 0
                                : i[0]) && void 0 !== s
                            ? s
                            : eU[t.webgate]) && void 0 !== o
                        ? o
                        : eU.spclient,
                    webapi: "https://api.spotify.com/",
                  };
                if (!l.dealer || !l.webgate)
                  throw new eM(
                    m.XRESOLVE_INCOMPLETE_RESPONSE,
                    "X-Resolve responded with incomplete results.",
                    e.status
                  );
                return l;
              })
              .then(
                (e) => (
                  (e.dealer = `wss://${e.dealer.replace(/:443$/, "")}`),
                  (e.webgate = `https://${e.webgate.replace(/:443$/, "")}`),
                  e
                )
              );
          };
        }
        function e$() {
          return () =>
            Promise.resolve({
              webgate: "https://www.spotify.com/api/",
              webapi: "https://api.spotify.com",
            });
        }
        function eB() {
          return () => Promise.resolve("NOT_A_TOKEN");
        }
        function eq() {
          return { endpoints: e$(), token: eB() };
        }
        let eH = "request-transformer";
        class eW {
          constructor(e) {
            (this.name = eH),
              (this._uriTransformer = e.uriTransformer),
              (this._optionsOverrides = e.optionsOverrides),
              (this._include = e.include),
              (this._processRequest = this._processRequest.bind(this));
          }
          _processRequest(e) {
            var t, n;
            let r = e.data;
            if (
              (null ===
                (n =
                  null === (t = r.options) || void 0 === t
                    ? void 0
                    : t.metadata) || void 0 === n
                ? void 0
                : n.noRequestTransform) ||
              (this._include && !this._include(r.uri, r.options))
            )
              return;
            this._uriTransformer && (r.uri = this._uriTransformer(r.uri));
            let i = this._optionsOverrides;
            if (i) {
              if (r.options) {
                let e = Object.assign(
                  Object.assign(Object.assign({}, r.options), i),
                  {
                    metadata: Object.assign(
                      Object.assign({}, r.options.metadata),
                      i.metadata
                    ),
                    retry: Object.assign(
                      Object.assign({}, r.options.retry),
                      i.retry
                    ),
                    headers: Object.assign(
                      Object.assign({}, r.options.headers),
                      i.headers
                    ),
                  }
                );
                r.options = e;
              } else r.options = i;
            }
          }
          attach(e, t) {
            t.on(y.TRANSPORT_BEFORE_PROCESS_REQUEST, this._processRequest);
          }
          detach(e, t) {
            t.removeListener(
              y.TRANSPORT_BEFORE_PROCESS_REQUEST,
              this._processRequest
            );
          }
        }
        function ez(e, t) {
          return new eW(t);
        }
        function eG(e) {
          let t = Object.assign({}, e);
          return t.XHR || (t.XHR = C), (t.Fetch = N), eN.create(t);
        }
        function eV(e) {
          let t = eG(e);
          return t.addPlugin(z, { WebSocket: WebSocket }), t;
        }
      },
      16798: function (e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
          J: function () {
            return r;
          },
        }),
          ((i = r || (r = {})).HTTP_REQUEST_ABORTED = "HTTP_REQUEST_ABORTED"),
          (i.HTTP_REQUEST_FAILED = "HTTP_REQUEST_FAILED"),
          (i.HTTP_REQUEST_TIMEOUT = "HTTP_REQUEST_TIMEOUT"),
          (i.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED"),
          (i.TRANSPORT_ENDPOINTS_PROVIDER_ERROR =
            "TRANSPORT_ENDPOINTS_PROVIDER_ERROR"),
          (i.TRANSPORT_INVALID_STATE = "TRANSPORT_INVALID_STATE"),
          (i.TRANSPORT_INVALID_TOKEN = "TRANSPORT_INVALID_TOKEN"),
          (i.TRANSPORT_STALE_TOKEN = "TRANSPORT_STALE_TOKEN "),
          (i.TRANSPORT_TOKEN_PROVIDER_ERROR = "TRANSPORT_TOKEN_PROVIDER_ERROR"),
          (i.TRANSPORT_LIFECYCLE_DISABLED = "TRANSPORT_LIFECYCLE_DISABLED"),
          (i.TRANSPORT_UNSUPPORTED_OPTION = "TRANSPORT_UNSUPPORTED_OPTION"),
          (i.XRESOLVE_INCOMPLETE_RESPONSE = "XRESOLVE_INCOMPLETE_RESPONSE"),
          (i.XRESOLVE_INVALID_RESPONSE = "XRESOLVE_INVALID_RESPONSE"),
          (i.XRESOLVE_REQUEST_FAILED_WITH_STATUS =
            "XRESOLVE_REQUEST_FAILED_WITH_STATUS");
      },
      90244: function (e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
          j: function () {
            return r;
          },
        }),
          ((i = r || (r = {})).CONNECTION_ONLINE = "online"),
          (i.CONNECTION_OFFLINE = "offline"),
          (i.PRODUCT_STATE_CHANGED = "product_state_changed"),
          (i.ACCESS_TOKEN = "access_token"),
          (i.AUTHENTICATED = "authenticated"),
          (i.AUTHENTICATION_FAILED = "authentication_failed"),
          (i.BEFORE_OFFLINE_DISCONNECT = "before_offline_disconnect"),
          (i.BEFORE_ONLINE_DISCONNECT = "before_online_disconnect"),
          (i.CONNECTED = "connected"),
          (i.CONNECTION_FAILED = "connection_failed"),
          (i.CONNECTION_ID = "connection_id"),
          (i.DISCONNECTED = "disconnected"),
          (i.ENDPOINTS_RESOLVED = "endpoints_resolved"),
          (i.LOGGED_OUT = "logged_out"),
          (i.SHORT_SESSION_DISCONNECTED = "short_session_disconnected"),
          (i.TOKEN_PROVIDER_ERROR = "token_provider_error"),
          (i.RECONNECTED = "reconnected"),
          (i.RECONNECTING = "reconnecting"),
          (i.WINDOW_BEFORE_UNLOAD = "beforeunload");
      },
      92428: function (e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
          n: function () {
            return r;
          },
        }),
          ((i = r || (r = {})).DELETE = "DELETE"),
          (i.GET = "GET"),
          (i.OPTIONS = "OPTIONS"),
          (i.PATCH = "PATCH"),
          (i.POST = "POST"),
          (i.PUT = "PUT"),
          (i.TRACE = "TRACE");
      },
      41587: function (e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
          G: function () {
            return r;
          },
        }),
          ((i = r || (r = {}))[(i.UNKNOWN = 0)] = "UNKNOWN"),
          (i[(i.OK = 200)] = "OK"),
          (i[(i.CREATED = 201)] = "CREATED"),
          (i[(i.ACCEPTED = 202)] = "ACCEPTED"),
          (i[(i.NO_CONTENT = 204)] = "NO_CONTENT"),
          (i[(i.PARTIAL_CONTENT = 206)] = "PARTIAL_CONTENT"),
          (i[(i.BAD_REQUEST = 400)] = "BAD_REQUEST"),
          (i[(i.UNAUTHORIZED = 401)] = "UNAUTHORIZED"),
          (i[(i.PAYMENT_REQUIRED = 402)] = "PAYMENT_REQUIRED"),
          (i[(i.FORBIDDEN = 403)] = "FORBIDDEN"),
          (i[(i.NOT_FOUND = 404)] = "NOT_FOUND"),
          (i[(i.METHOD_NOT_ALLOWED = 405)] = "METHOD_NOT_ALLOWED"),
          (i[(i.NOT_ACCEPTABLE = 406)] = "NOT_ACCEPTABLE"),
          (i[(i.PROXY_AUTHENTICATION_REQUIRED = 407)] =
            "PROXY_AUTHENTICATION_REQUIRED"),
          (i[(i.TIMED_OUT = 408)] = "TIMED_OUT"),
          (i[(i.REQUEST_TIMEOUT = 408)] = "REQUEST_TIMEOUT"),
          (i[(i.CONFLICT = 409)] = "CONFLICT"),
          (i[(i.GONE = 410)] = "GONE"),
          (i[(i.LENGTH_REQUIRED = 411)] = "LENGTH_REQUIRED"),
          (i[(i.PRECONDITION_FAILED = 412)] = "PRECONDITION_FAILED"),
          (i[(i.REQUEST_ENTITY_TOO_LARGE = 413)] = "REQUEST_ENTITY_TOO_LARGE"),
          (i[(i.REQUEST_URI_TOO_LONG = 414)] = "REQUEST_URI_TOO_LONG"),
          (i[(i.UNSUPPORTED_MEDIA_TYPE = 415)] = "UNSUPPORTED_MEDIA_TYPE"),
          (i[(i.REQUESTED_RANGE_NOT_SATISFIABLE = 416)] =
            "REQUESTED_RANGE_NOT_SATISFIABLE"),
          (i[(i.EXPECTATION_FAILED = 417)] = "EXPECTATION_FAILED"),
          (i[(i.INTERNAL_SERVER_ERROR = 500)] = "INTERNAL_SERVER_ERROR"),
          (i[(i.NOT_IMPLEMENTED = 501)] = "NOT_IMPLEMENTED"),
          (i[(i.BAD_GATEWAY = 502)] = "BAD_GATEWAY"),
          (i[(i.SERVICE_UNAVAILABLE = 503)] = "SERVICE_UNAVAILABLE"),
          (i[(i.GATEWAY_TIMEOUT = 504)] = "GATEWAY_TIMEOUT"),
          (i[(i.HTTP_VERSION_NOT_SUPPORTED = 505)] =
            "HTTP_VERSION_NOT_SUPPORTED");
      },
      26659: function (e, t, n) {
        "use strict";
        var r, i;
        n.d(t, {
          S: function () {
            return r;
          },
        }),
          ((i = r || (r = {}))[(i.CONNECTION_ERROR = 0)] = "CONNECTION_ERROR"),
          (i[(i.INFORMATIONAL = 1)] = "INFORMATIONAL"),
          (i[(i.SUCCESS = 2)] = "SUCCESS"),
          (i[(i.REDIRECTION = 3)] = "REDIRECTION"),
          (i[(i.CLIENT_ERROR = 4)] = "CLIENT_ERROR"),
          (i[(i.SERVER_ERROR = 5)] = "SERVER_ERROR");
      },
      71934: function (e, t, n) {
        "use strict";
        n.d(t, {
          n$: function () {
            return b.n;
          },
          JP: function () {
            return v.J;
          },
          G0: function () {
            return E.j;
          },
          OL: function () {
            return D;
          },
          lS: function () {
            return x;
          },
          qy: function () {
            return ev;
          },
          uG: function () {
            return ey.Q;
          },
        });
        var r,
          i,
          s,
          o,
          a,
          l,
          c,
          u,
          d,
          h,
          p,
          f,
          m,
          _,
          g = {};
        n.r(g),
          n.d(g, {
            isSupported: function () {
              return z;
            },
            request: function () {
              return G;
            },
          });
        var y = {};
        n.r(y),
          n.d(y, {
            request: function () {
              return eg;
            },
          });
        var v = n(16798),
          E = n(90244),
          b = n(92428);
        ((r = c || (c = {})).TRANSPORT_AUTHENTICATE = "transport_authenticate"),
          (r.TRANSPORT_AUTHENTICATE_FAILED = "transport_authenticate_failed"),
          (r.TRANSPORT_CONNECT = "transport_connect"),
          (r.TRANSPORT_DISCONNECT = "transport_disconnect"),
          (r.TRANSPORT_ENDPOINTS_RESOLVED = "transport_endpoints_resolved"),
          (r.TRANSPORT_BEFORE_PROCESS_REQUEST =
            "transport_before_process_request"),
          (r.TRANSPORT_BEFORE_SEND_REQUEST = "transport_before_send_request"),
          (r.TRANSPORT_BEFORE_RETURN_RESPONSE =
            "transport_before_return_response"),
          (r.TRANSPORT_REQUEST = "transport_request"),
          (r.PLUGIN_CONNECTION_INFO = "plugin_connection_info"),
          (r.PLUGIN_DISCONNECTED = "plugin_disconnected"),
          (r.PLUGIN_MESSAGE = "plugin_message"),
          (r.PLUGIN_REQUEST = "plugin_request"),
          (r.PLUGIN_ERROR = "plugin_error"),
          ((i = u || (u = {})).RECONNECTION_FAILED = "reconnection_failed"),
          (i.EXPLICIT = "explicit"),
          (i.LOG_OUT = "log_out"),
          (i.WINDOW_BEFORE_UNLOAD = "window_before_unload");
        var T = n(9198);
        class S extends T.vp {}
        class w extends S {
          constructor(e) {
            super();
            let t = "undefined" != typeof window,
              n = e && e.notifyBeforeUnload;
            (this._navigator = (t && window.navigator) || null),
              t &&
                "function" == typeof window.addEventListener &&
                (window.addEventListener(
                  "online",
                  this.emitSync.bind(this, E.j.CONNECTION_ONLINE, null)
                ),
                window.addEventListener(
                  "offline",
                  this.emitSync.bind(this, E.j.CONNECTION_OFFLINE, null)
                ),
                n &&
                  window.addEventListener(
                    E.j.WINDOW_BEFORE_UNLOAD,
                    this.emitSync.bind(this, E.j.WINDOW_BEFORE_UNLOAD, null)
                  ));
          }
          static create(e) {
            return new w(e);
          }
          isOnline() {
            let e = this._navigator;
            return !e || !("onLine" in e) || e.onLine;
          }
        }
        class O extends Error {
          constructor(e, t, n, r) {
            super(e),
              (this.name = "RequestError"),
              (this.message = e),
              (this.code = t),
              (this.status = n || 0),
              (this.url = r);
          }
        }
        class R extends O {
          constructor(e, t) {
            super("Request aborted by signal.", v.J.HTTP_REQUEST_ABORTED, 0, e),
              (this.name = "RequestAbortedError"),
              (this.reason = t);
          }
        }
        class N extends O {
          constructor(e, t) {
            super(
              "Request aborted by timeout.",
              v.J.HTTP_REQUEST_TIMEOUT,
              0,
              e
            ),
              (this.name = "RequestTimeoutError"),
              (this.reason = t);
          }
        }
        let C = "Signal is aborted without reason";
        function I(e, t) {
          let n = Error(t);
          return (n.name = e), n;
        }
        class A extends T.vp {
          constructor() {
            super(),
              (this._aborted = !1),
              (this._reason = void 0),
              (this.onabort = null),
              this.on("abort", () => {
                var e;
                return null === (e = this.onabort) || void 0 === e
                  ? void 0
                  : e.call(this);
              });
          }
          static abort(e) {
            let t = new A();
            return (
              (t._aborted = !0),
              (t._reason = I("AbortError", null != e ? e : C)),
              t
            );
          }
          static signalAbort(e, t) {
            "_aborted" in e &&
              !e._aborted &&
              ((e._aborted = !0),
              "_reason" in e && (e._reason = t || I("AbortError", C)),
              e.emit("abort", null));
          }
          static timeout(e) {
            if (!isFinite(e))
              throw TypeError('Value of "delay" is not supported.');
            let t = new A();
            return (
              setTimeout(() => {
                A.signalAbort(t, I("TimeoutError", "Signal timed out"));
              }, e),
              t
            );
          }
          get aborted() {
            return this._aborted;
          }
          set aborted(e) {}
          get reason() {
            return this._reason;
          }
          addEventListener(e, t) {
            this.addListener(e, t);
          }
          removeEventListener(e, t) {
            this.removeListener(e, t);
          }
          dispatchEvent() {}
        }
        class k {
          constructor() {
            this.signal = new A();
          }
          abort(e) {
            let t = this.signal;
            A.signalAbort(t, e);
          }
        }
        function P() {
          return (
            "undefined" != typeof window &&
            "function" == typeof window.AbortController
          );
        }
        let D = P() ? () => new AbortController() : () => new k();
        "undefined" != typeof window &&
          "function" ==
            typeof (null === (d = window.AbortSignal) || void 0 === d
              ? void 0
              : d.any) &&
          window.AbortSignal.any;
        let x =
          "undefined" != typeof window &&
          "function" ==
            typeof (null === (h = window.AbortSignal) || void 0 === h
              ? void 0
              : h.timeout)
            ? window.AbortSignal.timeout
            : A.timeout;
        function L(e, t) {
          var n;
          return (null === (n = t.reason) || void 0 === n ? void 0 : n.name) ===
            "TimeoutError"
            ? new N(e, t.reason)
            : new R(e, t.reason);
        }
        ((s = p || (p = {})).DEALER_CONNECTION_ERROR =
          "DEALER_CONNECTION_ERROR"),
          (s.DEALER_AUTHENTICATION_FAILED = "DEALER_AUTHENTICATION_FAILED"),
          (s.DEALER_ERROR = "DEALER_ERROR"),
          (s.DEALER_DISCONNECTED_BEFORE_EVENTS =
            "DEALER_DISCONNECTED_BEFORE_EVENTS"),
          (s.ENDPOINT_NOT_DEFINED = "ENDPOINT_NOT_DEFINED"),
          (s.INVALID_ENDPOINT = "INVALID_ENDPOINT"),
          ((o = f || (f = {})).AUTHENTICATED = "authenticated"),
          (o.AUTHENTICATION_FAILED = "authentication_failed"),
          (o.CONNECTED = "connected"),
          (o.CONNECTION_ID = "connection_id"),
          (o.ERROR = "error"),
          (o.DISCONNECTED = "disconnected"),
          (o.MESSAGE = "message"),
          (o.REQUEST = "request");
        var M = n(44583);
        ((a = m || (m = {}))[(a.CLOSE = 4e3)] = "CLOSE"),
          (a[(a.TIMEOUT = 4001)] = "TIMEOUT"),
          n(48764).Buffer;
        var j = n(28627),
          U = n(86360);
        let F = { POST: !0, PUT: !0, PATCH: !0, DELETE: !0 };
        var $ = n(41587);
        class B {
          constructor(e) {
            (this.get = e.get.bind(e)), (this.has = e.has.bind(e));
          }
          get(e) {
            return null;
          }
          has(e) {
            return !1;
          }
        }
        class q {
          constructor(e, t = 0) {
            (this.url = ""),
              (this.status = 0),
              (this.headers = null),
              (this.body = null),
              (this.offline = !1),
              (this.timing = null),
              (this.metadata = null),
              (this.retries = { count: 0 }),
              (this.url = e),
              (this.status = t),
              (this.ok = t >= 200 && t <= 299);
          }
          getStatusFamily() {
            return 0 | (this.status / 100);
          }
        }
        let H = j.P.forTag("transport.http.fetch"),
          W = { json: !0, text: !0, arraybuffer: !0, blob: !0 };
        function z() {
          return "function" == typeof fetch;
        }
        function G(e) {
          if (!z()) return Promise.reject(TypeError("Fetch is not supported"));
          let t = e.options.signal;
          if (null == t ? void 0 : t.aborted)
            return Promise.reject(L(e.url, t));
          if (!e.url)
            return Promise.reject(TypeError("Request URL cannot be blank."));
          let n = e.method || "GET",
            r = e.url,
            i = null;
          if (
            (n in F && !0 === F[n] && e.payload
              ? (i = e.payload)
              : e.payload && (r += `?${e.payload}`),
            e.options.responseType && !(e.options.responseType in W))
          )
            return Promise.reject(
              TypeError("Cannot set responseType: not supported in browser.")
            );
          let s = {
            mode: e.options.mode || "cors",
            credentials: e.options.credentials || "same-origin",
            redirect: e.options.redirect || "follow",
            signal: t,
            method: n,
          };
          e.headers.count() && (s.headers = e.headers.toJSON()),
            i && (s.body = i);
          let o = (0, U.q)();
          return fetch(r, s)
            .then(function (t) {
              let n;
              n =
                e.options.ignoreResponseBody || t.status === $.G.NO_CONTENT
                  ? null
                  : "json" === e.options.responseType
                  ? t.json().catch(function (e) {
                      return (
                        H.warn("Could not parse response as JSON:", e), null
                      );
                    })
                  : "arraybuffer" === e.options.responseType
                  ? t.arrayBuffer()
                  : "blob" === e.options.responseType
                  ? t.blob()
                  : t.text();
              let r =
                e.options.parseResponseHeaders || t.status > 299
                  ? new B(t.headers)
                  : null;
              return Promise.all([t.url, t.status, r, n]);
            })
            .then(function ([t, n, r, i]) {
              let s = (0, U.q)(),
                a = new q(t, n);
              return (
                (a.body = i),
                (a.headers = r),
                e.options.timing && (a.timing = { completed: (0, U.n)(o, s) }),
                a
              );
            })
            .catch(function (t) {
              let n = (0, U.q)();
              if ((null == t ? void 0 : t.name) === "AbortError")
                throw new R(r);
              if ((null == t ? void 0 : t.name) === "TimeoutError")
                throw new N(r);
              let i = new q(r);
              return (
                e.options.timing && (i.timing = { completed: (0, U.n)(o, n) }),
                i
              );
            })
            .then(function (t) {
              return (
                e.options.connectionObserver &&
                  (t.offline = !e.options.connectionObserver.isOnline()),
                t
              );
            });
        }
        "function" == typeof SuppressedError && SuppressedError;
        let V = { baseTime: 200, ceiling: 0, curve: "linear", jitter: !0 };
        class Q {
          constructor(e = {}) {
            (this._curve = e.curve || V.curve),
              (this._baseTime = e.baseTime || V.baseTime),
              (this._ceiling = e.ceiling || V.ceiling),
              (this._jitter = "jitter" in e ? !!e.jitter : V.jitter);
          }
          getTime(e) {
            let t;
            switch (this._curve) {
              case "static":
                t = 1;
                break;
              case "logarithmic":
                t = Math.log(e);
                break;
              case "exponential":
                t = Math.pow(Math.E, e);
                break;
              default:
                t = e + 1;
            }
            let n = Math.min(4294967296, Math.floor(t * this._baseTime));
            return (
              this._ceiling && (n = Math.min(n, this._ceiling)),
              this._jitter
                ? (function (e) {
                    let t = e / 5;
                    return Math.floor(e - t / 2 + Math.random() * t);
                  })(n)
                : n
            );
          }
        }
        let Y = {
          backoffInitial: !1,
          baseTime: 200,
          ceiling: 0,
          curve: "linear",
          jitter: !0,
          maxDuration: 1 / 0,
          maxRetries: 1 / 0,
          maxTime: 1 / 0,
          retryPredicate: () => !0,
        };
        class K {
          constructor(e, t) {
            (this._resolver = (0, M.$)()),
              (this._ts = 0),
              (this._callCount = 0),
              (this._tickInterval = 0),
              (this._isRunning = !1),
              (this._isDestroyed = !1);
            let n = Object.assign(Object.assign({}, Y), t),
              {
                backoffInitial: r,
                maxDuration: i,
                maxRetries: s,
                maxTime: o,
                retryPredicate: a,
              } = n,
              l = (function (e, t) {
                var n = {};
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    0 > t.indexOf(r) &&
                    (n[r] = e[r]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                )
                  for (
                    var i = 0, r = Object.getOwnPropertySymbols(e);
                    i < r.length;
                    i++
                  )
                    0 > t.indexOf(r[i]) &&
                      Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                      (n[r[i]] = e[r[i]]);
                return n;
              })(n, [
                "backoffInitial",
                "maxDuration",
                "maxRetries",
                "maxTime",
                "retryPredicate",
              ]);
            (this._fn = e),
              (this._backoffInitial = r),
              (this._maxDuration = i),
              (this._maxRetries = s),
              (this._maxTime = o),
              (this._retryPredicate = a),
              (this._backoffInitial = r),
              (this._counter = new Q(l)),
              this._backoffInitial && (this._maxRetries += 1);
          }
          static init(e, t = {}) {
            return new K(e, t).start();
          }
          _destroy() {
            (this._isRunning = !1), (this._isDestroyed = !0);
          }
          _failure(e) {
            if (!this._isDestroyed) {
              if (e && "retryAfter" in e) this._retryAfter(e);
              else {
                let t = this._counter.getTime(this._callCount);
                this._shouldRetry(t, e)
                  ? (this._callCount++,
                    (this._tickInterval = setTimeout(() => this._tick(), t)))
                  : (this._resolver.reject(e), this._destroy());
              }
            }
          }
          _retryAfter(e) {
            this._callCount++,
              (this._tickInterval = setTimeout(
                () => this._tick(),
                e.retryAfter
              ));
          }
          _success(...e) {
            this._isDestroyed ||
              (this._resolver.resolve(...e), this._destroy());
          }
          _shouldRetry(e, t) {
            let n = Date.now() - this._ts + e;
            return (
              this._callCount < this._maxRetries &&
              e < this._maxTime &&
              n < this._maxDuration &&
              this._retryPredicate(t)
            );
          }
          _tick() {
            this._fn()
              .then((...e) => this._success(...e))
              .catch((e) => this._failure(e));
          }
          getResolver() {
            return this._resolver.promise;
          }
          start() {
            return this._isDestroyed
              ? Promise.reject(Error("Backoff already consumed"))
              : (this._isRunning ||
                  ((this._ts = Date.now()),
                  (this._isRunning = !0),
                  this._backoffInitial
                    ? ((this._callCount = 1),
                      (this._tickInterval = setTimeout(
                        () => this._tick(),
                        this._counter.getTime(0)
                      )))
                    : this._tick()),
                this._resolver.promise);
          }
          stop() {
            clearTimeout(this._tickInterval), this._destroy();
          }
          getRetryCount() {
            return this._callCount;
          }
        }
        var X = n(26659);
        class J extends Error {
          constructor(e, t, n = null) {
            super(t),
              (this.name = "TransportError"),
              (this.message = t),
              (this.code = e),
              (this.origin = n);
          }
        }
        class Z {
          constructor(e) {
            (this._headers = {}), (this._count = 0), this._setAll(e);
          }
          _setAll(e) {
            let t = 0;
            for (let n in e)
              e.hasOwnProperty(n) &&
                e[n] &&
                ((this._headers[n.toLowerCase()] = e[n]), t++);
            this._count = t;
          }
          get(e) {
            return this._headers[e.toLowerCase()] || null;
          }
          has(e) {
            return !!this._headers[e.toLowerCase()];
          }
          set(e, t) {
            (this._headers[e.toLowerCase()] = t), this._count++;
          }
          delete(e) {
            let t = e.toLowerCase();
            this._headers[t] && this._count--,
              delete this._headers[e.toLowerCase()];
          }
          count() {
            return this._count;
          }
          toJSON() {
            return Object.assign({}, this._headers);
          }
        }
        class ee {
          constructor(e, t) {
            (this.url = e),
              (this.method = (null == t ? void 0 : t.method) || "GET"),
              (this.headers = new Z(null == t ? void 0 : t.headers)),
              (this.options = (null == t ? void 0 : t.options) || {}),
              (this.payload = null == t ? void 0 : t.payload),
              (this.urlExpanded = (null == t ? void 0 : t.urlExpanded) || !1),
              (this.retryOptions = (null == t ? void 0 : t.retryOptions) || {});
          }
          static create(e, t) {
            return new ee(e, t);
          }
          clone() {
            let e = new ee(this.url);
            return (
              (e.method = this.method),
              (e.headers = new Z(this.headers.toJSON())),
              (e.options = this.options),
              (e.payload = this.payload),
              (e.urlExpanded = this.urlExpanded),
              (e.retryOptions = this.retryOptions),
              e
            );
          }
        }
        ((l = _ || (_ = {})).EVENT_ACCESS_TOKEN = "access_token"),
          (l.EVENT_CONNECTION_ID = "connection_id"),
          (l.EVENT_CONNECTION_OFFLINE = "connection_offline"),
          (l.EVENT_CONNECTION_ONLINE = "connection_online"),
          (l.EVENT_ENDPOINTS_RESOLVED = "endpoints_resolved");
        class et extends T.vp {
          constructor(e, t) {
            super(),
              (this.EVENT_ACCESS_TOKEN = _.EVENT_ACCESS_TOKEN),
              (this.EVENT_CONNECTION_ID = _.EVENT_CONNECTION_ID),
              (this.EVENT_CONNECTION_OFFLINE = _.EVENT_CONNECTION_OFFLINE),
              (this.EVENT_CONNECTION_ONLINE = _.EVENT_CONNECTION_ONLINE),
              (this.EVENT_ENDPOINTS_RESOLVED = _.EVENT_ENDPOINTS_RESOLVED),
              (this.StatusCode = $.G),
              (this.StatusFamily = X.S),
              (this.getConnectionId = e.getConnectionId.bind(e)),
              (this.getEndpoints = e.getEndpoints.bind(e)),
              (this.getInitTime = e.getInitTime.bind(e)),
              (this.getLastToken = e.getLastToken.bind(e)),
              (this.matchMessages = e.matchMessages.bind(e)),
              (this.unmatchMessages = e.unmatchMessages.bind(e)),
              (this.handlePushRequests = e.handlePushRequests.bind(e)),
              (this.unhandlePushRequests = e.unhandlePushRequests.bind(e)),
              (this.hasPlugin = e.hasPlugin.bind(e)),
              (this.getPluginAPI = e.getPluginAPI.bind(e));
            let n = e.request.bind(e);
            (null == t ? void 0 : t.requestOptions)
              ? (this.request = (e, r) =>
                  r
                    ? n(
                        e,
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              null == t ? void 0 : t.requestOptions
                            ),
                            r
                          ),
                          {
                            metadata: Object.assign(
                              Object.assign({}, t.requestOptions.metadata),
                              null == r ? void 0 : r.metadata
                            ),
                            retry: Object.assign(
                              Object.assign({}, t.requestOptions.retry),
                              null == r ? void 0 : r.retry
                            ),
                          }
                        )
                      )
                    : n(e, t.requestOptions))
              : (this.request = n),
              this.proxyEmit(e, E.j.ACCESS_TOKEN, _.EVENT_ACCESS_TOKEN),
              this.proxyEmit(
                e,
                E.j.CONNECTION_OFFLINE,
                _.EVENT_CONNECTION_OFFLINE
              ),
              this.proxyEmit(
                e,
                E.j.CONNECTION_ONLINE,
                _.EVENT_CONNECTION_ONLINE
              ),
              this.proxyEmit(
                e,
                E.j.ENDPOINTS_RESOLVED,
                _.EVENT_ENDPOINTS_RESOLVED
              ),
              this.onAddListener(
                _.EVENT_CONNECTION_ID,
                this._onAddConnectionIdListener.bind(this, e.on.bind(e))
              ),
              this.onRemoveListener(
                _.EVENT_CONNECTION_ID,
                this._onRemoveConnectionIdListener.bind(
                  this,
                  e.removeListener.bind(e)
                )
              );
          }
          _onAddConnectionIdListener(e, t) {
            t.preventDefault();
            let n = t.data.listener,
              r = (e) => {
                let t = this.createEvent(_.EVENT_CONNECTION_ID, e.data);
                n.call(this, t);
              };
            (n.$proxy_wrapper = r), e(E.j.CONNECTION_ID, r, t.data.options);
          }
          _onRemoveConnectionIdListener(e, t) {
            t.preventDefault();
            let n = t.data.listener;
            n.$proxy_wrapper &&
              e(E.j.CONNECTION_ID, n.$proxy_wrapper, t.data.options);
          }
          removeAllListeners() {
            return this;
          }
        }
        class en {
          constructor() {
            (this._startTime = null), (this._endTime = null);
          }
          static create() {
            return new en();
          }
          start() {
            if (null !== this._startTime)
              throw Error("Measurement is already in progress.");
            this._startTime = Date.now();
          }
          end() {
            if (null === this._startTime || null !== this._endTime)
              throw Error("Measurement is not in progress.");
            this._endTime = Date.now();
          }
          getMetrics() {
            if (null === this._startTime || null === this._endTime)
              throw Error("Measurement is not done.");
            return { start_time: this._startTime, end_time: this._endTime };
          }
        }
        let er = j.P.forTag("transport.transport"),
          ei = /^(?:https?:\/\/)?@([^\/]+)\//,
          es = /^(ws|http)s?:\/\/.*[^\/]$/,
          eo = /^([a-zA-Z]{3},\ \d{1,2}\ [a-zA-Z]{3}\ (\d{1,2}.){3})/,
          ea = { xhr: !0, fetch: !0 };
        function el(e, t) {
          let n = `access_token=${encodeURIComponent(t)}`,
            [r, i] = e.split("?");
          if (!i) return `${r}?${n}`;
          let s = i.replace(/access_token=[^&]*(&|$)/, `${n}$1`);
          return s !== i ? `${r}?${s}` : `${r}?${n}&${i}`;
        }
        class ec extends T.vp {
          constructor(e) {
            if (
              (super(),
              (this._plugins = {}),
              (this._pluginMediator = new T.vp()),
              (this._connectCalled = !1),
              (this._authenticateCalled = !1),
              (this._endpoints = null),
              (this._lastToken = null),
              (this._lastTokenExpiry = 0),
              (this._refreshTokenPromise = null),
              (this._authenticationPromise = null),
              (this._reconnectTimeout = 0),
              (this._isReconnecting = !1),
              (this._initTime = 0),
              (this._lastDisconnect = 0),
              (this._stateMask = 0),
              (this._quickDisconnectCount = 0),
              (this._counter = new Q({
                curve: "exponential",
                baseTime: 5e3,
                ceiling: 15e3,
              })),
              (this._stateAwareListeners = {
                connected: [],
                authenticated: [],
                connection_id: [],
                transport_connect: [],
                transport_authenticate: [],
              }),
              (this._stateAwareOperationMetrics = { authenticated: null }),
              (this._stateAwareRunners = {
                connected: null,
                authenticated: null,
                connection_id: null,
                transport_connect: null,
                transport_authenticate: null,
              }),
              !e)
            )
              throw TypeError(
                "Argument `options` for Transport cannot be null."
              );
            if (!e.providers)
              throw TypeError(
                "Argument `options.providers` for Transport cannot be null."
              );
            (this._ownerRef = "ownerRef" in e ? Object(e.ownerRef) : {}),
              (this._tokenProvider = e.providers.token),
              (this._endpointsProvider = e.providers.endpoints),
              (this._XHR = e.XHR),
              (this._Fetch = e.Fetch),
              (this._reconnectionRetries =
                e.reconnectionRetries >= 0 ? e.reconnectionRetries : 3),
              (this._requestMode = e.requestMode in ea ? e.requestMode : "xhr"),
              (this._forcePolyfillTypes = e.forcePolyfillTypes || {}),
              (this._disableAutoLogout =
                "disableAutoLogout" in e && !!e.disableAutoLogout),
              (this._disconnectBeforeUnload = e.disconnectBeforeUnload || !1);
            let t = e.createConnectionObserver || w.create;
            (this._connectionObserver = t({
              notifyBeforeUnload: this._disconnectBeforeUnload,
            })),
              (this.authenticate = this.authenticate.bind(this)),
              (this._authenticateWithToken =
                this._authenticateWithToken.bind(this)),
              (this._connectToEndpoints = this._connectToEndpoints.bind(this)),
              (this._parseProvidedToken = this._parseProvidedToken.bind(this)),
              (this._onConnected = this._onConnected.bind(this)),
              (this._onAuthenticated = this._onAuthenticated.bind(this)),
              (this._onAuthenticationFailed =
                this._onAuthenticationFailed.bind(this)),
              this._init();
          }
          static create(e) {
            return new ec(e);
          }
          _init() {
            this.onAddListener(
              E.j.CONNECTED,
              this._onAddListener.bind(this, "connected")
            ),
              this.onAddListener(
                E.j.AUTHENTICATED,
                this._onAddListener.bind(this, "authenticated")
              ),
              this.onAddListener(
                E.j.CONNECTION_ID,
                this._onAddListener.bind(this, "connection_id")
              ),
              this.onRemoveListener(
                E.j.CONNECTED,
                this._onRemoveListener.bind(this, "connected")
              ),
              this.onRemoveListener(
                E.j.AUTHENTICATED,
                this._onRemoveListener.bind(this, "authenticated")
              ),
              this.onRemoveListener(
                E.j.CONNECTION_ID,
                this._onRemoveListener.bind(this, "connection_id")
              ),
              this._pluginMediator.onAddListener(
                c.TRANSPORT_CONNECT,
                this._onAddListener.bind(this, "transport_connect")
              ),
              this._pluginMediator.onAddListener(
                c.TRANSPORT_AUTHENTICATE,
                this._onAddListener.bind(this, "transport_authenticate")
              ),
              this._pluginMediator.onRemoveListener(
                c.TRANSPORT_CONNECT,
                this._onRemoveListener.bind(this, "transport_connect")
              ),
              this._pluginMediator.onRemoveListener(
                c.TRANSPORT_AUTHENTICATE,
                this._onRemoveListener.bind(this, "transport_authenticate")
              ),
              "fetch" !== this._requestMode ||
                (this._Fetch && this._Fetch.isSupported()) ||
                (er.warn(
                  'Default "fetch" request mode unavailable; Fallback to "xhr"'
                ),
                (this._requestMode = "xhr"));
            let e = this._pluginMediator;
            e.addListeners({
              [c.PLUGIN_DISCONNECTED]: this._onPluginDisconnected.bind(this),
            }),
              this.proxyEmit(e, c.PLUGIN_CONNECTION_INFO, E.j.CONNECTION_ID),
              this._disableAutoLogout ||
                this.matchMessages("client:logout", () => this._onLogout()),
              this._connectionObserver.on(E.j.CONNECTION_ONLINE, () =>
                this._onOnline()
              ),
              this._connectionObserver.on(E.j.CONNECTION_OFFLINE, () =>
                this._onOffline()
              ),
              this._connectionObserver.on(E.j.WINDOW_BEFORE_UNLOAD, () =>
                this._disconnect(u.WINDOW_BEFORE_UNLOAD)
              );
          }
          _runStateAwareQueues(e, t) {
            let n = this._stateAwareListeners[e].splice(0);
            try {
              for (let e of n) e.call(this, t);
            } finally {
              this._stateAwareRunners[e] = null;
            }
          }
          _connect() {
            return 1 & this._stateMask
              ? Promise.resolve(!1)
              : this._connectionObserver.isOnline()
              ? this._performConnect()
              : new Promise((e, t) => {
                  er.info("Waiting to go online before connecting"),
                    this._connectionObserver.once(E.j.CONNECTION_ONLINE, () => {
                      this._performConnect().then(e, t);
                    });
                });
          }
          _performConnect() {
            return new Promise((e) => {
              er.info("Resolving endpoints"),
                e(this._endpointsProvider(this.toPublic()));
            })
              .catch((e) => {
                let t = (null == e ? void 0 : e.code)
                  ? e
                  : new J(
                      v.J.TRANSPORT_ENDPOINTS_PROVIDER_ERROR,
                      (null == e ? void 0 : e.message) ||
                        "Endpoints provider error",
                      null != e ? e : null
                    );
                return (
                  er.error("Endpoints resolution failed", t), Promise.reject(t)
                );
              })
              .then(this._connectToEndpoints)
              .then(this._onConnected)
              .catch((e) => {
                let t = e && e.error ? e.error : e;
                return (
                  this.emit(E.j.CONNECTION_FAILED, { error: t }),
                  er.error("Connection failed", t),
                  Promise.reject(t)
                );
              });
          }
          _connectToEndpoints(e) {
            let t = { webgate: "", webapi: "" };
            for (let n in e) {
              if (!e.hasOwnProperty(n)) continue;
              let r = e[n];
              r && (es.test(r) && (r += "/"), (t[n] = r));
            }
            (this._endpoints = t),
              this.emit(E.j.ENDPOINTS_RESOLVED, {
                endpoints: Object.assign({}, t),
              }),
              er.info("Endpoints resolved");
            let n = [],
              r = (e) => {
                n.push(e);
              };
            return (
              er.info("Waiting for plugins to connect"),
              new Promise((e, i) => {
                this._pluginMediator.emitAndWait(
                  c.TRANSPORT_CONNECT,
                  { endpoints: Object.assign({}, t), awaitPromise: r },
                  () => {
                    Promise.all(n).then(() => e(!0), i);
                  }
                );
              })
            );
          }
          _refreshToken(e = !1) {
            if (this._refreshTokenPromise) return this._refreshTokenPromise;
            if (!e && this._lastToken && this._lastTokenExpiry > Date.now())
              return Promise.resolve(this._lastToken);
            this._refreshTokenPromise = new Promise((e) => {
              er.info("Requesting token from provider"),
                e(this._tokenProvider());
            }).then(this._parseProvidedToken);
            let t = () => {
              this._refreshTokenPromise = null;
            };
            return (
              this._refreshTokenPromise.then(t, t),
              this._refreshTokenPromise.catch((e) => {
                let t = (null == e ? void 0 : e.code)
                  ? e
                  : new J(
                      v.J.TRANSPORT_TOKEN_PROVIDER_ERROR,
                      (null == e ? void 0 : e.message) ||
                        "Token provider error",
                      e
                    );
                return (
                  this.emit(E.j.TOKEN_PROVIDER_ERROR, { error: t }),
                  er.error("Token provider error", t),
                  Promise.reject(t)
                );
              })
            );
          }
          _parseProvidedToken(e) {
            let t;
            let n = 3540;
            if (
              (Array.isArray(e)
                ? ((t = e[0]),
                  ("number" ==
                    typeof (n =
                      "string" == typeof e[1] ? parseInt(e[1], 10) : e[1]) &&
                    isFinite(n)) ||
                    (n = 3540))
                : (t = e),
              !t)
            )
              throw (
                ((this._lastToken = null),
                (this._lastTokenExpiry = 0),
                er.error("No token was provided"),
                new J(
                  v.J.TRANSPORT_INVALID_TOKEN,
                  `Token provider returned an invalid token, "${t}"`
                ))
              );
            if (this._lastToken === t) {
              er.error("TokenProvider returned same token twice.");
              let e = new J(
                v.J.TRANSPORT_STALE_TOKEN,
                "Token provider returned the same token twice."
              );
              throw ((this._lastToken = null), (this._lastTokenExpiry = 0), e);
            }
            return (
              (this._lastToken = t),
              (this._lastTokenExpiry = Date.now() + 1e3 * n),
              this.emit(E.j.ACCESS_TOKEN, { token: t }),
              er.info("Access token set"),
              t
            );
          }
          _authenticateWithToken(e) {
            if (!this._endpoints) return Promise.resolve(!0);
            let t = [],
              n = (e) => {
                t.push(e);
              };
            return (
              er.info("Waiting for plugins to authenticate"),
              new Promise((r, i) => {
                this._pluginMediator.emitAndWait(
                  c.TRANSPORT_AUTHENTICATE,
                  { token: e, awaitPromise: n },
                  () => {
                    Promise.all(t).then(() => r(!0), i);
                  }
                );
              })
            );
          }
          _authenticate(e) {
            if (!(1 & this._stateMask))
              return Promise.reject(
                new J(
                  v.J.TRANSPORT_INVALID_STATE,
                  "Cannot authenticate disconnected transport."
                )
              );
            if (this._authenticationPromise) return this._authenticationPromise;
            let t = en.create();
            return (
              t.start(),
              (this._authenticationPromise = K.init(
                () => (
                  er.info("Authenticating"),
                  this._refreshToken(e).then(this._authenticateWithToken)
                ),
                {
                  curve: "exponential",
                  maxRetries: 2,
                  baseTime: 500,
                  retryPredicate: (e) => (
                    er.warn("Retrying authentication due to failure", e), !0
                  ),
                }
              )
                .then(() => this._onAuthenticated(t))
                .catch((e) => this._onAuthenticationFailed(e, t))),
              this._authenticationPromise
            );
          }
          _performDisconnect(e) {
            return (
              (this._stateMask = 0),
              e &&
                (this.emit(E.j.DISCONNECTED, { reason: e }),
                er.info("Disconnected")),
              er.info("Waiting for plugins to disconnect."),
              this._pluginMediator.emitSync(c.TRANSPORT_DISCONNECT, {
                supressed: !e,
              }),
              !0
            );
          }
          _createReconnector() {
            let e = !1;
            return () => (
              (this._isReconnecting = !0),
              this.emit(E.j.RECONNECTING, null),
              er.info("Reconnecting"),
              this._performDisconnect(),
              this._connect()
                .then(
                  () =>
                    !!this._authenticateCalled &&
                    this._authenticate(e).then(
                      (t) => ((e = !1), t),
                      (t) => ((e = !0), Promise.reject(t))
                    )
                )
                .then(
                  () => (
                    (this._isReconnecting = !1),
                    this.emit(E.j.RECONNECTED, null),
                    er.info("Reconnected"),
                    !0
                  )
                )
            );
          }
          _tryToReconnect() {
            if (this._isReconnecting) {
              er.warn("Reconnection triggered while already reconnecting");
              return;
            }
            (this._stateMask = 0),
              K.init(this._createReconnector(), {
                baseTime: 1e3,
                maxTime: 15e3,
                maxRetries: this._reconnectionRetries,
                retryPredicate: (e) => (
                  er.warn("Retrying reconnection due to failure", e), !0
                ),
              }).catch(() => {
                (this._stateMask = 0),
                  (this._isReconnecting = !1),
                  this.emit(E.j.DISCONNECTED, {
                    reason: u.RECONNECTION_FAILED,
                  }),
                  er.info("Disconnected: reconnection failed");
              });
          }
          _sendRequest(e, t = {}, n = {}) {
            let r = t.signal;
            return (null == r ? void 0 : r.aborted)
              ? Promise.reject(L(e, r))
              : this._processRequestArgs(e, t).then((t) =>
                  (null == r ? void 0 : r.aborted)
                    ? Promise.reject(L(e, r))
                    : t.options.forget
                    ? this._sendFireAndForgetRequest(t)
                    : this._sendRetriedRequest(t, n)
                );
          }
          _processRequestArgs(e, t = {}) {
            var n, r;
            if (null === (n = t.signal) || void 0 === n ? void 0 : n.aborted)
              return Promise.reject(L(e, t.signal));
            let i = e,
              s = !1,
              o = Object.assign(Object.assign({}, t), {
                forcePolyfill: !!(
                  t.responseType && t.responseType in this._forcePolyfillTypes
                ),
                requestMode:
                  null !== (r = null == t ? void 0 : t.requestMode) &&
                  void 0 !== r
                    ? r
                    : this._requestMode,
                connectionObserver: this._connectionObserver,
                metadata: (null == t ? void 0 : t.metadata) || null,
              });
            if (
              ((null == t ? void 0 : t.signal) &&
                !P() &&
                ("fetch" === t.requestMode
                  ? er.warn(
                      "Request with `{requestMode: fetch}` but no native AbortController."
                    )
                  : (o.requestMode = "xhr")),
              ei.test(i))
            ) {
              s = !0;
              try {
                i = this._tryExpandSpecialURL(i);
              } catch (e) {
                return Promise.reject(e);
              }
              "authorize" in o || ((o.authorize = !0), (o.autoAuthorized = !0));
            }
            let a = Object.assign(
              Object.assign({ maxRetries: 2, curve: "exponential" }, t.retry),
              { retryPredicate: (e) => !(e instanceof R) }
            );
            return Promise.resolve(
              ee.create(i, {
                method: t.method,
                headers: t.headers,
                payload: t.payload,
                options: o,
                urlExpanded: s,
                retryOptions: a,
              })
            );
          }
          _tryExpandSpecialURL(e) {
            let t = this._endpoints;
            return e.replace(ei, (e, n) => {
              if (!t.hasOwnProperty(n))
                throw TypeError(
                  `Cannot replace endpoint @${n}: endpoint not defined.`
                );
              return t[n];
            });
          }
          _sendFireAndForgetRequest(e) {
            var t;
            let { url: n, method: r, options: i } = e;
            if (null === (t = i.signal) || void 0 === t ? void 0 : t.aborted)
              return Promise.reject(L(n, i.signal));
            if ("GET" !== r && "POST" !== r)
              return Promise.reject(
                new J(
                  v.J.TRANSPORT_UNSUPPORTED_OPTION,
                  `Option 'forget' cannot be used for ${r} request.`
                )
              );
            if (!i.autoAuthorized && i.authorize)
              return Promise.reject(
                new J(
                  v.J.TRANSPORT_UNSUPPORTED_OPTION,
                  "Option 'forget' cannot be used for authorized request."
                )
              );
            if (
              ((i.requestMode = "xhr"),
              (i.authorize = !1),
              (i.ignoreResponseBody = !0),
              "GET" === r)
            ) {
              if ("function" == typeof fetch) {
                let e = { mode: "no-cors" };
                i.signal && P() && (e.signal = i.signal),
                  fetch(n, e).catch(() => {});
              } else
                "function" == typeof Image
                  ? (new Image().src = n)
                  : this._sendRetriedRequest(e, {}).catch(() => {});
            } else if ("POST" === r) {
              if (
                "undefined" != typeof navigator &&
                (null == navigator ? void 0 : navigator.sendBeacon)
              ) {
                let t = e.headers.get("content-type");
                navigator.sendBeacon(
                  e.url,
                  "string" == typeof e.payload && t
                    ? new Blob([e.payload], { type: t })
                    : e.payload
                );
              } else if ("function" == typeof fetch) {
                let t = e.headers.get("content-type"),
                  r = {
                    method: "POST",
                    body: e.payload,
                    headers: t ? { "content-type": t } : void 0,
                  };
                i.signal && P() && (r.signal = i.signal),
                  fetch(n, r).catch(() => {});
              } else this._sendRetriedRequest(e, {}).catch(() => {});
            }
            return Promise.resolve(new q(n, 0));
          }
          _sendRetriedRequest(e, t) {
            let n = e.retryOptions,
              r = e.options.signal,
              i = !1,
              s = () =>
                (null == r ? void 0 : r.aborted)
                  ? Promise.reject(L(e.url, r))
                  : this._setAuthHeader(e, i),
              o = this._connectionObserver,
              a = new K(
                () =>
                  (o.isOnline() || e.options.allowOffline
                    ? s()
                    : new Promise((e, t) => {
                        o.once(E.j.CONNECTION_ONLINE, () => {
                          s().then(e, t);
                        });
                      })
                  )
                    .then(() => {
                      let n;
                      if (null == r ? void 0 : r.aborted)
                        return Promise.reject(L(e.url, r));
                      if (
                        (this._pluginMediator.emitSync(
                          c.TRANSPORT_BEFORE_SEND_REQUEST,
                          { request: e, context: t }
                        ),
                        "fetch" === e.options.requestMode &&
                          this._Fetch &&
                          this._Fetch.isSupported())
                      )
                        n = this._Fetch.request(e);
                      else if (this._XHR) n = this._XHR.request(e);
                      else throw Error("No available request mechanisms.");
                      return n;
                    })
                    .then((t) => {
                      if (null == r ? void 0 : r.aborted)
                        return Promise.reject(L(e.url, r));
                      let s = null;
                      if (
                        (t.headers && (s = t.headers.get("Retry-After")),
                        t.status === $.G.UNAUTHORIZED &&
                          !e.options.ignoreUnauthorized)
                      )
                        return (i = !0), Promise.reject(t);
                      if (
                        "function" ==
                          typeof (null == n ? void 0 : n.condition) &&
                        (n.condition(t, X.S) || s)
                      ) {
                        if (null !== s) {
                          if (eo.test(s))
                            t.retryAfter = new Date(s).getTime() - Date.now();
                          else {
                            let e = parseInt(s, 10);
                            e > 0 && (t.retryAfter = 1e3 * e);
                          }
                        }
                        return Promise.reject(t);
                      }
                      return Promise.resolve(t);
                    }),
                n
              );
            return a
              .start()
              .catch(this._handleRetriedRequestError)
              .then((n) =>
                (null == r ? void 0 : r.aborted)
                  ? Promise.reject(L(e.url, r))
                  : ((n.metadata = e.options.metadata),
                    (n.retries = n.retries || { count: 0 }),
                    (n.retries.count = a.getRetryCount()),
                    this._pluginMediator.emitSync(
                      c.TRANSPORT_BEFORE_RETURN_RESPONSE,
                      { context: t, response: n }
                    ),
                    e.options.rejectNotOk && !n.ok)
                  ? Promise.reject(n)
                  : n
              );
          }
          _setAuthHeader(e, t) {
            if (!e.options.authorize) return Promise.resolve(e);
            let n = () =>
              this._refreshToken(t).then(
                (t) => (e.headers.set("Authorization", `Bearer ${t}`), e)
              );
            return 4 & this._stateMask
              ? n()
              : new Promise((e, t) => {
                  er.info("Auth header setting awaiting authentication."),
                    this.once(E.j.AUTHENTICATED, () => {
                      er.info("Auth header set after authentication."),
                        n().then(e, t);
                    });
                });
          }
          _handleRetriedRequestError(e) {
            return e instanceof q ? Promise.resolve(e) : Promise.reject(e);
          }
          _onAddListener(e, t) {
            let n;
            let r = t.data.options;
            if (r.ignoreCurrentState) return;
            switch (e) {
              case "connected":
                if (!this.isConnected()) return;
                n = Promise.resolve(this.createEvent(E.j.CONNECTED, null));
                break;
              case "authenticated": {
                if (!this.isAuthenticated()) return;
                let e = this._stateAwareOperationMetrics.authenticated;
                n = Promise.resolve(
                  this.createEvent(E.j.AUTHENTICATED, { timing: e })
                );
                break;
              }
              case "connection_id": {
                let e = this.getPluginAPI("dealer");
                if (!e || !e.hasConnectionInfo()) return;
                n = e
                  .getConnectionInfo()
                  .then((e) => this.createEvent(E.j.CONNECTION_ID, e));
                break;
              }
              case "transport_connect":
                if (!this.isConnected() || !this._endpoints) return;
                n = Promise.resolve(
                  this._pluginMediator.createEvent(c.TRANSPORT_CONNECT, {
                    endpoints: Object.assign({}, this._endpoints),
                    awaitPromise: (e) => {},
                  })
                );
                break;
              case "transport_authenticate":
                if (!this.isAuthenticated()) return;
                n = this._refreshToken().then((e) =>
                  this._pluginMediator.createEvent(c.TRANSPORT_AUTHENTICATE, {
                    token: e,
                    awaitPromise: (e) => {},
                  })
                );
                break;
              default:
                return;
            }
            let i = t.data.listener;
            this._stateAwareListeners[e].push(i);
            let s = this._stateAwareRunners;
            !s[e] &&
              ((s[e] = n.then(this._runStateAwareQueues.bind(this, e))),
              r.once && t.preventDefault());
          }
          _onRemoveListener(e, t) {
            let n = t.data.options;
            if (n.ignoreCurrentState || n.once) return;
            let r = t.data.listener,
              i = this._stateAwareListeners[e].indexOf(r);
            -1 !== i && this._stateAwareListeners[e].splice(i, 1);
          }
          _getQuickDisconnectTimeout() {
            return this._counter.getTime(this._quickDisconnectCount);
          }
          _onPluginDisconnected(e) {
            let t = Date.now(),
              n = t - this._lastDisconnect;
            if ((this._performDisconnect(), e.data.code === m.CLOSE)) {
              er.info(`Plugin "${e.data.plugin}" explicitly disconnected`),
                (this._quickDisconnectCount = 0);
              return;
            }
            this._connectionObserver.isOnline() &&
              (er.info(
                `Plugin "${e.data.plugin}" unexpectedly disconnect; trying to reconnect`
              ),
              n < 5e3
                ? (this._reconnectTimeout &&
                    clearTimeout(this._reconnectTimeout),
                  this._quickDisconnectCount++,
                  this.emit(E.j.SHORT_SESSION_DISCONNECTED, {
                    disconnectCount: this._quickDisconnectCount,
                    sessionLength: n,
                  }),
                  (this._reconnectTimeout = setTimeout(
                    this._tryToReconnect.bind(this),
                    this._getQuickDisconnectTimeout()
                  )))
                : ((this._quickDisconnectCount = 0),
                  (this._lastDisconnect = t),
                  this._tryToReconnect()));
          }
          _onOnline() {
            this.emit(E.j.CONNECTION_ONLINE, null),
              er.info("ConnectionObserver online"),
              this._connectCalled && this._tryToReconnect();
          }
          _onOffline() {
            this.emit(E.j.CONNECTION_OFFLINE, null),
              er.info("ConnectioObserver offline"),
              this._performDisconnect();
          }
          _onConnected() {
            return (
              (this._stateMask |= 1),
              this.emit(E.j.CONNECTED, null),
              er.info("Connected"),
              Promise.resolve(!0)
            );
          }
          _onAuthenticated(e) {
            e.end(),
              clearTimeout(this._reconnectTimeout),
              (this._authenticationPromise = null),
              (this._stateMask |= 4),
              (this._initTime = Date.now());
            let t = e.getMetrics();
            return (
              this.emit(E.j.AUTHENTICATED, { timing: t }),
              (this._stateAwareOperationMetrics.authenticated = t),
              er.info("Authenticated"),
              Promise.resolve(!0)
            );
          }
          _onAuthenticationFailed(e, t) {
            t.end();
            let n = e && e.error ? e.error : e;
            (this._authenticationPromise = null), (this._stateMask &= -5);
            let r = { error: n, timing: t.getMetrics() };
            return (
              this.emit(E.j.AUTHENTICATION_FAILED, r),
              this._pluginMediator.emit(c.TRANSPORT_AUTHENTICATE_FAILED, r),
              er.info("Authentication failed", n),
              Promise.reject(n)
            );
          }
          _onLogout() {
            let e = () => {
              (this._lastToken = null),
                (this._lastTokenExpiry = 0),
                this.emit(E.j.LOGGED_OUT, null);
            };
            this._disconnect(u.LOG_OUT).then(e, e);
          }
          _disconnect(e) {
            if (!this._connectCalled) return Promise.resolve(!1);
            (this._connectCalled = !1), (this._authenticateCalled = !1);
            let t = this.isConnected()
                ? E.j.BEFORE_ONLINE_DISCONNECT
                : E.j.BEFORE_OFFLINE_DISCONNECT,
              n = [];
            return (
              this.emitSync(t, {
                awaitPromise: (e) => {
                  n.push(e.catch(() => {}));
                },
              }),
              Promise.all(n).then(() => this._performDisconnect(e))
            );
          }
          isConnected() {
            return !!(1 & this._stateMask);
          }
          isAuthenticated() {
            return !!(4 & this._stateMask);
          }
          isReconnecting() {
            return this._isReconnecting;
          }
          isOnline() {
            return this._connectionObserver.isOnline();
          }
          connect() {
            return (this._connectCalled = !0), this._connect();
          }
          authenticate() {
            return (this._authenticateCalled = !0), this._authenticate(!0);
          }
          disconnect() {
            return this._disconnect(u.EXPLICIT);
          }
          forceDisconnect() {
            return this._connectCalled
              ? ((this._connectCalled = !1),
                (this._authenticateCalled = !1),
                this._performDisconnect(u.EXPLICIT),
                Promise.resolve(!0))
              : Promise.resolve(!1);
          }
          forceTokenRefresh() {
            return this._refreshToken(!0).then(() => !0);
          }
          getInitTime() {
            return this._initTime;
          }
          getEndpoints() {
            return this._endpoints ? Object.assign({}, this._endpoints) : null;
          }
          getLastToken() {
            return this._lastToken;
          }
          toPublic(e) {
            return new et(this, e);
          }
          hasOwnerRef(e) {
            return this._ownerRef === e;
          }
          appendTokenQuery(e) {
            return this._refreshToken().then((t) => el(e, t));
          }
          appendLastTokenQuery(e) {
            return this._lastToken ? el(e, this._lastToken) : e;
          }
          matchMessages(e, t, n) {
            if (!e) throw TypeError('Message "matcher" cannot be null.');
            if ("function" != typeof t)
              throw TypeError("Message callback cannot be null.");
            let r = (r) => {
              let i = r.data.message;
              i.uri && i.uri.match(e) && (!n || n === r.data.plugin) && t(i);
            };
            (r.__matchMessagesExp = e),
              (r.__matchMessagesPlugin = n),
              (t.__matchMessagesWrapper = r),
              this._pluginMediator.on(c.PLUGIN_MESSAGE, r);
          }
          unmatchMessages(e, t, n) {
            if ("function" != typeof t)
              throw TypeError("Message callback cannot be null.");
            let r = t.__matchMessagesWrapper;
            return (
              !!r &&
              r.__matchMessagesExp === e &&
              r.__matchMessagesPlugin === n &&
              (this._pluginMediator.removeListener(c.PLUGIN_MESSAGE, r), !0)
            );
          }
          handlePushRequests(e, t, n) {
            if (!e) throw TypeError('Push request "matcher" cannot be null.');
            if ("function" != typeof t)
              throw TypeError("Push request callback cannot be null.");
            let r = (r) => {
              let i = r.data.request;
              i.message_ident &&
                i.message_ident.match(e) &&
                (!n || n === r.data.plugin) &&
                Promise.resolve(t(i)).then(r.data.reply);
            };
            (r.__matchRequestExp = e),
              (r.__matchRequestPlugin = n),
              (t.__matchRequestWrapper = r),
              this._pluginMediator.on(c.PLUGIN_REQUEST, r);
          }
          unhandlePushRequests(e, t, n) {
            if ("function" != typeof t)
              throw TypeError("Push request callback cannot be null.");
            let r = t.__matchRequestWrapper;
            return (
              !!r &&
              r.__matchRequestExp === e &&
              r.__matchRequestPlugin === n &&
              (this._pluginMediator.removeListener(c.PLUGIN_REQUEST, r), !0)
            );
          }
          request(e, t) {
            var n;
            let r = { uri: e, options: t, context: {} };
            this._pluginMediator.emitSync(
              c.TRANSPORT_BEFORE_PROCESS_REQUEST,
              r
            );
            let i = this._sendRequest.bind(this, r.uri, r.options, r.context);
            return !this._endpoints && ei.test(r.uri)
              ? (er.info("Request queued until endpoints resolved", r.uri),
                new Promise((e, t) => {
                  this.once(E.j.ENDPOINTS_RESOLVED, () => {
                    er.info("Sending endpoints-queued request", r.uri),
                      i().then(e, t);
                  });
                }))
              : this._connectionObserver.isOnline() ||
                (null === (n = r.options) || void 0 === n
                  ? void 0
                  : n.allowOffline)
              ? i()
              : (er.info("Request queued until online", r.uri),
                new Promise((e, t) => {
                  this.once(E.j.CONNECTION_ONLINE, () => {
                    er.info("Sending offline-queued request", r.uri),
                      i().then(e, t);
                  });
                }));
          }
          addPlugin(e, t) {
            let n = e(this, t),
              r = n.name;
            if (this._plugins[r]) throw TypeError("Plugin is already added.");
            return (
              n.attach(this, this._pluginMediator), (this._plugins[r] = n), r
            );
          }
          removePlugin(e) {
            let t = this._plugins[e];
            return (
              !!t &&
              (t.detach(this, this._pluginMediator),
              (this._plugins[e] = void 0),
              !0)
            );
          }
          hasPlugin(e) {
            return !!this._plugins[e];
          }
          getPluginAPI(e) {
            let t = this._plugins[e];
            return t && t.api ? t.api : null;
          }
          getConnectionId(e = "dealer") {
            let t = this._plugins[e];
            return t
              ? t.api && "getConnectionInfo" in t.api
                ? t.api.getConnectionInfo().then((e) => e.id)
                : Promise.reject(
                    TypeError(`Plugin ${t} is not a socket plugin.`)
                  )
              : Promise.reject(
                  TypeError(`Cannot retrieve connection id for plugin ${t}.`)
                );
          }
          removeAllListeners() {
            return this;
          }
        }
        class eu {
          constructor(e) {
            (this._headers = {}), this._init(e);
          }
          _init(e) {
            if (e)
              for (let t of e.split("\r\n")) {
                let e = t.indexOf(": ");
                if (e > 0) {
                  let n = t.substring(0, e).toLowerCase(),
                    r = t.substring(e + 2);
                  this._headers[n] = r;
                }
              }
          }
          get(e) {
            return this._headers[e.toLowerCase()] || null;
          }
          has(e) {
            return this._headers.hasOwnProperty(e.toLowerCase());
          }
        }
        let ed = j.P.forTag("transport.http.xhr"),
          eh = function () {},
          ep = { json: !0, text: !0, document: !0 };
        function ef() {
          (this.onabort = eh),
            (this.onerror = eh),
            (this.onload = eh),
            (this.onloadend = eh);
        }
        function em(e, t, n) {
          var r, i;
          if (
            null === (r = e.options.signal) || void 0 === r ? void 0 : r.aborted
          )
            return;
          let s = (0, U.q)(),
            o = this.status,
            a = new q(this.responseURL || e.url, o);
          a.body = null;
          let l = e.options;
          if (
            (l.timing && (a.timing = { completed: (0, U.n)(t, s) }),
            (null === (i = l.connectionObserver) || void 0 === i
              ? void 0
              : i.isOnline) && (a.offline = !l.connectionObserver.isOnline()),
            (l.parseResponseHeaders || o > 299) &&
              (a.headers = new eu(this.getAllResponseHeaders())),
            !l.ignoreResponseBody && o !== $.G.NO_CONTENT)
          ) {
            let e = l.responseType || "";
            if (
              !l.forcePolyfill &&
              "response" in this &&
              e === this.responseType
            )
              a.body = this.response;
            else if ("document" === e) a.body = this.responseXML;
            else if ("json" === e)
              try {
                a.body = JSON.parse(this.responseText);
              } catch (e) {
                ed.warn("Could not parse response as JSON:", e),
                  (a.body = null);
              }
            else ("text" === e || "" === e) && (a.body = this.responseText);
          }
          n(a);
        }
        function e_(e, t, n) {
          4 === this.readyState
            ? t(new q(this.responseURL || e, this.status))
            : n(
                new O(
                  "Request cannot be completed.",
                  v.J.HTTP_REQUEST_FAILED,
                  this.status,
                  e
                )
              );
        }
        function eg(e) {
          return (function (e) {
            let t = e.options.signal;
            return new Promise((n, r) => {
              if (null == t ? void 0 : t.aborted) {
                r(L(e.url, t));
                return;
              }
              let i = new XMLHttpRequest(),
                s = e.url;
              if (!s) {
                r(TypeError("Request URL cannot be blank."));
                return;
              }
              let o = null,
                a = e.method || "GET",
                l = e.payload || "";
              if (
                l &&
                "[object ReadableStream]" === Object.prototype.toString.call(l)
              ) {
                r(
                  TypeError(
                    "payload is a ReadableStream, which is not supported"
                  )
                );
                return;
              }
              a in F && !0 === F[a] && l ? (o = l) : l && (s += `?${l}`),
                i.open(a, s, !0),
                (i.onerror = e_.bind(i, s, n, r)),
                (i.onabort = ef),
                (i.onloadend = ef),
                (i.onprogress = eh);
              let c = e.options;
              "include" === c.credentials && (i.withCredentials = !0);
              let u = c.responseType;
              if (u) {
                if (c.forcePolyfill) {
                  if (!(u in ep)) {
                    r(TypeError(`Cannot polyfill responseType "${u}"`));
                    return;
                  }
                } else {
                  if (!("responseType" in i) && !(u in ep)) {
                    r(
                      TypeError(
                        "Cannot set responseType: not supported in browser."
                      )
                    );
                    return;
                  }
                  try {
                    i.responseType = u;
                  } catch (e) {
                    r(TypeError(`Unknown responseType "${u}".`));
                    return;
                  }
                  if (i && u !== i.responseType && !(u in ep)) {
                    r(TypeError(`Unknown responseType "${u}".`));
                    return;
                  }
                }
              }
              let d = e.headers.count() ? e.headers.toJSON() : null;
              if (d) {
                for (let e in d)
                  if (d.hasOwnProperty(e) && d[e])
                    try {
                      i.setRequestHeader(e, d[e]);
                    } catch (e) {
                      r(e);
                      return;
                    }
              }
              t &&
                t.addEventListener("abort", function e() {
                  t.removeEventListener("abort", e), i.abort(), r(L(s, t));
                }),
                (i.onload = em.bind(i, e, (0, U.q)(), n));
              try {
                i.send(o);
              } catch (e) {
                r(e);
                return;
              }
            });
          })(e);
        }
        var ey = n(21068);
        function ev(e) {
          let t = Object.assign({}, e);
          return t.XHR || (t.XHR = y), (t.Fetch = g), ec.create(t);
        }
      },
      21068: function (e, t, n) {
        "use strict";
        n.d(t, {
          Q: function () {
            return a;
          },
        });
        var r = n(16798);
        class i extends Error {
          constructor(e, t, n = -1) {
            super(t),
              (this.name = "XResolveError"),
              (this.message = t),
              (this.code = e),
              (this.status = n);
          }
        }
        let s = { DEALER: "dealer", WEBGATE: "spclient" },
          o = {
            spclient: "spclient.wg.spotify.com",
            exp: "exp.wg.spotify.com",
            partners: "partners.wg.spotify.com",
          };
        function a(e = {}) {
          let t = {
              dealer: e.dealer || s.DEALER,
              webgate: e.webgate || s.WEBGATE,
            },
            n = `https://apresolve.spotify.com/?type=${t.dealer}&type=${t.webgate}`;
          return function (e) {
            return e
              .request(n, {
                forcePolyfill: !0,
                responseType: "json",
                retry: {
                  maxRetries: 3,
                  curve: "exponential",
                  condition: function (e, t) {
                    return e.getStatusFamily() !== t.SUCCESS;
                  },
                },
                metadata: { noRequestTransform: !0 },
              })
              .then((e) => {
                var n, s, a, l, c;
                let u = e.body,
                  d = {
                    dealer:
                      null !==
                        (s =
                          null === (n = null == u ? void 0 : u[t.dealer]) ||
                          void 0 === n
                            ? void 0
                            : n[0]) && void 0 !== s
                        ? s
                        : "dealer.spotify.com",
                    webgate:
                      null !==
                        (c =
                          null !==
                            (l =
                              null ===
                                (a = null == u ? void 0 : u[t.webgate]) ||
                              void 0 === a
                                ? void 0
                                : a[0]) && void 0 !== l
                            ? l
                            : o[t.webgate]) && void 0 !== c
                        ? c
                        : o.spclient,
                    webapi: "https://api.spotify.com/",
                  };
                if (!d.dealer || !d.webgate)
                  throw new i(
                    r.J.XRESOLVE_INCOMPLETE_RESPONSE,
                    "X-Resolve responded with incomplete results.",
                    e.status
                  );
                return d;
              })
              .then(
                (e) => (
                  (e.dealer = `wss://${e.dealer.replace(/:443$/, "")}`),
                  (e.webgate = `https://${e.webgate.replace(/:443$/, "")}`),
                  e
                )
              );
          };
        }
      },
      9198: function (e, t, n) {
        "use strict";
        let r;
        n.d(t, {
          vp: function () {
            return h;
          },
        });
        class i {
          constructor(e, t) {
            (this.defaultPrevented = !1),
              (this.immediateStopped = !1),
              (this.stopped = !1),
              (this.type = e),
              (this.data = t);
          }
          preventDefault() {
            this.defaultPrevented = !0;
          }
          stopPropagation() {
            this.stopped = !0;
          }
          stopImmediatePropagation() {
            this.immediateStopped = !0;
          }
        }
        let s = "undefined" != typeof window,
          o = [];
        function a() {
          var e;
          let t = o.splice(0);
          if (t.length)
            for (let n = 0, r = t.length; n < r; n++)
              null === (e = t[n]) || void 0 === e || e.call(t);
        }
        s && "function" == typeof window.postMessage
          ? (function () {
              let e =
                window.location.origin ||
                `${window.location.protocol}//${window.location.hostname}`;
              if (
                ((r = window.postMessage.bind(window, "@execute_deferreds", e)),
                !window.__hasDeferredHandler)
              ) {
                "function" == typeof Object.defineProperty
                  ? Object.defineProperty(window, "__hasDeferredHandler", {
                      value: !0,
                    })
                  : (window.__hasDeferredHandler = !0);
                let t = function (t) {
                  (t.origin === e || "@execute_deferreds" === t.data) && a();
                };
                window.addEventListener
                  ? window.addEventListener("message", t)
                  : window.attachEvent && window.attachEvent("onmessage", t);
              }
            })()
          : "function" == typeof queueMicrotask
          ? (r = queueMicrotask.bind(null, a))
          : (r =
              "function" == typeof setImmediate
                ? setImmediate.bind(null, a)
                : setTimeout.bind(null, a, 10));
        let l = (e) => {
          let t = !o.length;
          o.push(e), t && r();
        };
        function c(e, t, n) {
          for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            if (
              (null == i ? void 0 : i.listener) === t &&
              i.options.once === n.once
            )
              return r;
          }
          return -1;
        }
        function u(e, t, n, r = {}) {
          if (!n) return !1;
          let i = e[t];
          return !i || !i.length || -1 === c(i, n, r);
        }
        function d(e, t, n, r = {}) {
          if (!t || !n) return;
          let i = e[t],
            s = { listener: n, options: r };
          if (!i) {
            e[t] = [s];
            return;
          }
          i.push(s);
        }
        s &&
          ("function" == typeof window.__modDefFn
            ? (l = window.__modDefFn)
            : "function" == typeof Object.defineProperty
            ? Object.defineProperty(window, "__modDefFn", { value: l })
            : (window.__modDefFn = l));
        class h {
          constructor() {
            (this._listeners = {}),
              (this._metaListeners = { add: {}, remove: {} });
          }
          _dispatchFromStore(e, t) {
            let n = t.type,
              r = e[n];
            if (r) {
              for (let e of (r = r.slice(0)))
                if (
                  (e.listener.call(this, t),
                  e.options.once &&
                    this.removeListener(n, e.listener, e.options),
                  t.immediateStopped)
                )
                  break;
            }
          }
          createEvent(e, t) {
            return new i(e, t);
          }
          on(e, t, n = {}) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            if (!t) return this;
            let r = this._listeners;
            if (u(r, e, t, n)) {
              let s = this._metaListeners.add,
                o = s[e];
              if (o && o.length) {
                let r = new i(e, { listener: t, options: n });
                if ((this._dispatchFromStore(s, r), r.defaultPrevented))
                  return this;
              }
              d(r, e, t, n);
            }
            return this;
          }
          addListener(e, t, n = {}) {
            return this.on(e, t, n);
          }
          addListeners(e) {
            for (let t in e) e.hasOwnProperty(t) && this.on(t, e[t]);
            return this;
          }
          once(e, t) {
            return this.on(e, t, { once: !0 });
          }
          removeListener(e, t, n = {}) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            if (!t) return this;
            let r = this._listeners[e];
            if (!r) return this;
            let s = c(r, t, n);
            if (-1 === s) return this;
            let o = this._metaListeners.remove[e];
            if (o && o.length) {
              let r = new i(e, { listener: t, options: n });
              if (
                (this._dispatchFromStore(this._metaListeners.remove, r),
                r.defaultPrevented)
              )
                return this;
            }
            return r.splice(s, 1), this;
          }
          removeListeners(e) {
            for (let t in e)
              e.hasOwnProperty(t) && this.removeListener(t, e[t]);
            return this;
          }
          removeAllListeners(e) {
            return e ? (this._listeners[e] = []) : (this._listeners = {}), this;
          }
          emit(e, t) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let n = this.createEvent(e, t);
            return l(() => this._dispatchFromStore(this._listeners, n)), n;
          }
          emitSync(e, t) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let n = this.createEvent(e, t);
            return this._dispatchFromStore(this._listeners, n), n;
          }
          emitEvent(e) {
            return l(() => this._dispatchFromStore(this._listeners, e)), e;
          }
          emitEventSync(e) {
            return this._dispatchFromStore(this._listeners, e), e;
          }
          emitAndWait(e, t, n) {
            if (!e) throw TypeError("Argument `eventType` is required.");
            let r = this.createEvent(e, t);
            return (
              l(() => {
                this._dispatchFromStore(this._listeners, r), n.call(this, r);
              }),
              r
            );
          }
          emitEventAndWait(e, t) {
            return (
              l(() => {
                this._dispatchFromStore(this._listeners, e), t.call(this, e);
              }),
              e
            );
          }
          proxyEmit(e, t, n) {
            if (!e || "function" != typeof e.on)
              throw TypeError("Proxy source must be an EventEmitter");
            if (e === this)
              throw ReferenceError("Cannot create recursive proxy.");
            if (!t || !n)
              throw TypeError(
                "Parameter sourceType and targetType are required."
              );
            let r = (e) => {
              e.stopped ||
                this.emitAndWait(n, e.data, (t) => {
                  t.defaultPrevented && e.preventDefault();
                });
            };
            return e.on(t, r), r;
          }
          proxyEmitSync(e, t, n) {
            if (!e || "function" != typeof e.on)
              throw TypeError("Proxy source must be an EventEmitter");
            if (e === this)
              throw ReferenceError("Cannot create recursive proxy.");
            if (!t || !n)
              throw TypeError(
                "Parameter sourceType and targetType are required."
              );
            let r = (e) => {
              if (e.stopped) return;
              let t = this.createEvent(n, e.data);
              this.emitEventSync(t), t.defaultPrevented && e.preventDefault();
            };
            return e.on(t, r), r;
          }
          proxyEmitAll(e, t) {
            for (let n in t) t.hasOwnProperty(n) && this.proxyEmit(e, n, t[n]);
          }
          proxyEmitAllSync(e, t) {
            for (let n in t)
              t.hasOwnProperty(n) && this.proxyEmitSync(e, n, t[n]);
          }
          onAddListener(e, t, n = {}) {
            let r = this._metaListeners.add;
            return u(r, e, t, n) && d(r, e, t, n), this;
          }
          onRemoveListener(e, t, n = {}) {
            let r = this._metaListeners.remove;
            return u(r, e, t, n) && d(r, e, t, n), this;
          }
        }
      },
      79742: function (e, t) {
        "use strict";
        (t.byteLength = function (e) {
          var t = l(e),
            n = t[0],
            r = t[1];
          return ((n + r) * 3) / 4 - r;
        }),
          (t.toByteArray = function (e) {
            var t,
              n,
              s = l(e),
              o = s[0],
              a = s[1],
              c = new i(((o + a) * 3) / 4 - a),
              u = 0,
              d = a > 0 ? o - 4 : o;
            for (n = 0; n < d; n += 4)
              (t =
                (r[e.charCodeAt(n)] << 18) |
                (r[e.charCodeAt(n + 1)] << 12) |
                (r[e.charCodeAt(n + 2)] << 6) |
                r[e.charCodeAt(n + 3)]),
                (c[u++] = (t >> 16) & 255),
                (c[u++] = (t >> 8) & 255),
                (c[u++] = 255 & t);
            return (
              2 === a &&
                ((t =
                  (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)),
                (c[u++] = 255 & t)),
              1 === a &&
                ((t =
                  (r[e.charCodeAt(n)] << 10) |
                  (r[e.charCodeAt(n + 1)] << 4) |
                  (r[e.charCodeAt(n + 2)] >> 2)),
                (c[u++] = (t >> 8) & 255),
                (c[u++] = 255 & t)),
              c
            );
          }),
          (t.fromByteArray = function (e) {
            for (
              var t, r = e.length, i = r % 3, s = [], o = 0, a = r - i;
              o < a;
              o += 16383
            )
              s.push(
                (function (e, t, r) {
                  for (var i, s = [], o = t; o < r; o += 3)
                    s.push(
                      n[
                        ((i =
                          ((e[o] << 16) & 16711680) +
                          ((e[o + 1] << 8) & 65280) +
                          (255 & e[o + 2])) >>
                          18) &
                          63
                      ] +
                        n[(i >> 12) & 63] +
                        n[(i >> 6) & 63] +
                        n[63 & i]
                    );
                  return s.join("");
                })(e, o, o + 16383 > a ? a : o + 16383)
              );
            return (
              1 === i
                ? s.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + "==")
                : 2 === i &&
                  s.push(
                    n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                      n[(t >> 4) & 63] +
                      n[(t << 2) & 63] +
                      "="
                  ),
              s.join("")
            );
          });
        for (
          var n = [],
            r = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = 0,
            a = s.length;
          o < a;
          ++o
        )
          (n[o] = s[o]), (r[s.charCodeAt(o)] = o);
        function l(e) {
          var t = e.length;
          if (t % 4 > 0)
            throw Error("Invalid string. Length must be a multiple of 4");
          var n = e.indexOf("=");
          -1 === n && (n = t);
          var r = n === t ? 0 : 4 - (n % 4);
          return [n, r];
        }
        (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      },
      48764: function (e, t, n) {
        "use strict";
        var r = n(79742),
          i = n(80645),
          s =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        function o(e) {
          if (e > 2147483647)
            throw RangeError(
              'The value "' + e + '" is invalid for option "size"'
            );
          var t = new Uint8Array(e);
          return Object.setPrototypeOf(t, a.prototype), t;
        }
        function a(e, t, n) {
          if ("number" == typeof e) {
            if ("string" == typeof t)
              throw TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return u(e);
          }
          return l(e, t, n);
        }
        function l(e, t, n) {
          if ("string" == typeof e)
            return (function (e, t) {
              if (
                (("string" != typeof t || "" === t) && (t = "utf8"),
                !a.isEncoding(t))
              )
                throw TypeError("Unknown encoding: " + t);
              var n = 0 | f(e, t),
                r = o(n),
                i = r.write(e, t);
              return i !== n && (r = r.slice(0, i)), r;
            })(e, t);
          if (ArrayBuffer.isView(e))
            return (function (e) {
              if (I(e, Uint8Array)) {
                var t = new Uint8Array(e);
                return h(t.buffer, t.byteOffset, t.byteLength);
              }
              return d(e);
            })(e);
          if (null == e)
            throw TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof e
            );
          if (
            I(e, ArrayBuffer) ||
            (e && I(e.buffer, ArrayBuffer)) ||
            ("undefined" != typeof SharedArrayBuffer &&
              (I(e, SharedArrayBuffer) ||
                (e && I(e.buffer, SharedArrayBuffer))))
          )
            return h(e, t, n);
          if ("number" == typeof e)
            throw TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          var r = e.valueOf && e.valueOf();
          if (null != r && r !== e) return a.from(r, t, n);
          var i = (function (e) {
            if (a.isBuffer(e)) {
              var t,
                n = 0 | p(e.length),
                r = o(n);
              return 0 === r.length || e.copy(r, 0, 0, n), r;
            }
            return void 0 !== e.length
              ? "number" != typeof e.length || (t = e.length) != t
                ? o(0)
                : d(e)
              : "Buffer" === e.type && Array.isArray(e.data)
              ? d(e.data)
              : void 0;
          })(e);
          if (i) return i;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof e[Symbol.toPrimitive]
          )
            return a.from(e[Symbol.toPrimitive]("string"), t, n);
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        }
        function c(e) {
          if ("number" != typeof e)
            throw TypeError('"size" argument must be of type number');
          if (e < 0)
            throw RangeError(
              'The value "' + e + '" is invalid for option "size"'
            );
        }
        function u(e) {
          return c(e), o(e < 0 ? 0 : 0 | p(e));
        }
        function d(e) {
          for (
            var t = e.length < 0 ? 0 : 0 | p(e.length), n = o(t), r = 0;
            r < t;
            r += 1
          )
            n[r] = 255 & e[r];
          return n;
        }
        function h(e, t, n) {
          var r;
          if (t < 0 || e.byteLength < t)
            throw RangeError('"offset" is outside of buffer bounds');
          if (e.byteLength < t + (n || 0))
            throw RangeError('"length" is outside of buffer bounds');
          return (
            Object.setPrototypeOf(
              (r =
                void 0 === t && void 0 === n
                  ? new Uint8Array(e)
                  : void 0 === n
                  ? new Uint8Array(e, t)
                  : new Uint8Array(e, t, n)),
              a.prototype
            ),
            r
          );
        }
        function p(e) {
          if (e >= 2147483647)
            throw RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
            );
          return 0 | e;
        }
        function f(e, t) {
          if (a.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || I(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e)
            throw TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof e
            );
          var n = e.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === n) return 0;
          for (var i = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
                return R(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return N(e).length;
              default:
                if (i) return r ? -1 : R(e).length;
                (t = ("" + t).toLowerCase()), (i = !0);
            }
        }
        function m(e, t, n) {
          var i,
            s,
            o = !1;
          if (
            ((void 0 === t || t < 0) && (t = 0),
            t > this.length ||
              ((void 0 === n || n > this.length) && (n = this.length),
              n <= 0 || (n >>>= 0) <= (t >>>= 0)))
          )
            return "";
          for (e || (e = "utf8"); ; )
            switch (e) {
              case "hex":
                return (function (e, t, n) {
                  var r = e.length;
                  (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                  for (var i = "", s = t; s < n; ++s) i += A[e[s]];
                  return i;
                })(this, t, n);
              case "utf8":
              case "utf-8":
                return v(this, t, n);
              case "ascii":
                return (function (e, t, n) {
                  var r = "";
                  n = Math.min(e.length, n);
                  for (var i = t; i < n; ++i)
                    r += String.fromCharCode(127 & e[i]);
                  return r;
                })(this, t, n);
              case "latin1":
              case "binary":
                return (function (e, t, n) {
                  var r = "";
                  n = Math.min(e.length, n);
                  for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                  return r;
                })(this, t, n);
              case "base64":
                return (
                  (i = t),
                  (s = n),
                  0 === i && s === this.length
                    ? r.fromByteArray(this)
                    : r.fromByteArray(this.slice(i, s))
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (function (e, t, n) {
                  for (
                    var r = e.slice(t, n), i = "", s = 0;
                    s < r.length - 1;
                    s += 2
                  )
                    i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                  return i;
                })(this, t, n);
              default:
                if (o) throw TypeError("Unknown encoding: " + e);
                (e = (e + "").toLowerCase()), (o = !0);
            }
        }
        function _(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function g(e, t, n, r, i) {
          var s;
          if (0 === e.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (s = n = +n) != s && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)))
            return 0 === t.length ? -1 : y(e, t, n, r, i);
          if ("number" == typeof t)
            return ((t &= 255),
            "function" == typeof Uint8Array.prototype.indexOf)
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : y(e, [t], n, r, i);
          throw TypeError("val must be string, number or Buffer");
        }
        function y(e, t, n, r, i) {
          var s,
            o = 1,
            a = e.length,
            l = t.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (o = 2), (a /= 2), (l /= 2), (n /= 2);
          }
          function c(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o);
          }
          if (i) {
            var u = -1;
            for (s = n; s < a; s++)
              if (c(e, s) === c(t, -1 === u ? 0 : s - u)) {
                if ((-1 === u && (u = s), s - u + 1 === l)) return u * o;
              } else -1 !== u && (s -= s - u), (u = -1);
          } else
            for (n + l > a && (n = a - l), s = n; s >= 0; s--) {
              for (var d = !0, h = 0; h < l; h++)
                if (c(e, s + h) !== c(t, h)) {
                  d = !1;
                  break;
                }
              if (d) return s;
            }
          return -1;
        }
        function v(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n; ) {
            var s,
              o,
              a,
              l,
              c = e[i],
              u = null,
              d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
            if (i + d <= n)
              switch (d) {
                case 1:
                  c < 128 && (u = c);
                  break;
                case 2:
                  (192 & (s = e[i + 1])) == 128 &&
                    (l = ((31 & c) << 6) | (63 & s)) > 127 &&
                    (u = l);
                  break;
                case 3:
                  (s = e[i + 1]),
                    (o = e[i + 2]),
                    (192 & s) == 128 &&
                      (192 & o) == 128 &&
                      (l = ((15 & c) << 12) | ((63 & s) << 6) | (63 & o)) >
                        2047 &&
                      (l < 55296 || l > 57343) &&
                      (u = l);
                  break;
                case 4:
                  (s = e[i + 1]),
                    (o = e[i + 2]),
                    (a = e[i + 3]),
                    (192 & s) == 128 &&
                      (192 & o) == 128 &&
                      (192 & a) == 128 &&
                      (l =
                        ((15 & c) << 18) |
                        ((63 & s) << 12) |
                        ((63 & o) << 6) |
                        (63 & a)) > 65535 &&
                      l < 1114112 &&
                      (u = l);
              }
            null === u
              ? ((u = 65533), (d = 1))
              : u > 65535 &&
                ((u -= 65536),
                r.push(((u >>> 10) & 1023) | 55296),
                (u = 56320 | (1023 & u))),
              r.push(u),
              (i += d);
          }
          return (function (e) {
            var t = e.length;
            if (t <= 4096) return String.fromCharCode.apply(String, e);
            for (var n = "", r = 0; r < t; )
              n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
            return n;
          })(r);
        }
        function E(e, t, n) {
          if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
          if (e + t > n)
            throw RangeError("Trying to access beyond buffer length");
        }
        function b(e, t, n, r, i, s) {
          if (!a.isBuffer(e))
            throw TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < s)
            throw RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw RangeError("Index out of range");
        }
        function T(e, t, n, r, i, s) {
          if (n + r > e.length || n < 0) throw RangeError("Index out of range");
        }
        function S(e, t, n, r, s) {
          return (
            (t = +t),
            (n >>>= 0),
            s || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22),
            i.write(e, t, n, r, 23, 4),
            n + 4
          );
        }
        function w(e, t, n, r, s) {
          return (
            (t = +t),
            (n >>>= 0),
            s || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292),
            i.write(e, t, n, r, 52, 8),
            n + 8
          );
        }
        (t.Buffer = a),
          (t.SlowBuffer = function (e) {
            return +e != e && (e = 0), a.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (t.kMaxLength = 2147483647),
          (a.TYPED_ARRAY_SUPPORT = (function () {
            try {
              var e = new Uint8Array(1),
                t = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(t, Uint8Array.prototype),
                Object.setPrototypeOf(e, t),
                42 === e.foo()
              );
            } catch (e) {
              return !1;
            }
          })()),
          a.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(a.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (a.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(a.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (a.isBuffer(this)) return this.byteOffset;
            },
          }),
          (a.poolSize = 8192),
          (a.from = function (e, t, n) {
            return l(e, t, n);
          }),
          Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(a, Uint8Array),
          (a.alloc = function (e, t, n) {
            return (c(e), e <= 0)
              ? o(e)
              : void 0 !== t
              ? "string" == typeof n
                ? o(e).fill(t, n)
                : o(e).fill(t)
              : o(e);
          }),
          (a.allocUnsafe = function (e) {
            return u(e);
          }),
          (a.allocUnsafeSlow = function (e) {
            return u(e);
          }),
          (a.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== a.prototype;
          }),
          (a.compare = function (e, t) {
            if (
              (I(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
              I(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
              !a.isBuffer(e) || !a.isBuffer(t))
            )
              throw TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (e === t) return 0;
            for (
              var n = e.length, r = t.length, i = 0, s = Math.min(n, r);
              i < s;
              ++i
            )
              if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (a.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (a.concat = function (e, t) {
            if (!Array.isArray(e))
              throw TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return a.alloc(0);
            if (void 0 === t)
              for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
            var n,
              r = a.allocUnsafe(t),
              i = 0;
            for (n = 0; n < e.length; ++n) {
              var s = e[n];
              if (I(s, Uint8Array))
                i + s.length > r.length
                  ? a.from(s).copy(r, i)
                  : Uint8Array.prototype.set.call(r, s, i);
              else if (a.isBuffer(s)) s.copy(r, i);
              else
                throw TypeError('"list" argument must be an Array of Buffers');
              i += s.length;
            }
            return r;
          }),
          (a.byteLength = f),
          (a.prototype._isBuffer = !0),
          (a.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0)
              throw RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) _(this, t, t + 1);
            return this;
          }),
          (a.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0)
              throw RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              _(this, t, t + 3), _(this, t + 1, t + 2);
            return this;
          }),
          (a.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0)
              throw RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              _(this, t, t + 7),
                _(this, t + 1, t + 6),
                _(this, t + 2, t + 5),
                _(this, t + 3, t + 4);
            return this;
          }),
          (a.prototype.toString = function () {
            var e = this.length;
            return 0 === e
              ? ""
              : 0 == arguments.length
              ? v(this, 0, e)
              : m.apply(this, arguments);
          }),
          (a.prototype.toLocaleString = a.prototype.toString),
          (a.prototype.equals = function (e) {
            if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
            return this === e || 0 === a.compare(this, e);
          }),
          (a.prototype.inspect = function () {
            var e = "",
              n = t.INSPECT_MAX_BYTES;
            return (
              (e = this.toString("hex", 0, n)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > n && (e += " ... "),
              "<Buffer " + e + ">"
            );
          }),
          s && (a.prototype[s] = a.prototype.inspect),
          (a.prototype.compare = function (e, t, n, r, i) {
            if (
              (I(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
              !a.isBuffer(e))
            )
              throw TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof e
              );
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              t < 0 || n > e.length || r < 0 || i > this.length)
            )
              throw RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e))
              return 0;
            for (
              var s = i - r,
                o = n - t,
                l = Math.min(s, o),
                c = this.slice(r, i),
                u = e.slice(t, n),
                d = 0;
              d < l;
              ++d
            )
              if (c[d] !== u[d]) {
                (s = c[d]), (o = u[d]);
                break;
              }
            return s < o ? -1 : o < s ? 1 : 0;
          }),
          (a.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (a.prototype.indexOf = function (e, t, n) {
            return g(this, e, t, n, !0);
          }),
          (a.prototype.lastIndexOf = function (e, t, n) {
            return g(this, e, t, n, !1);
          }),
          (a.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" == typeof t)
              (r = t), (n = this.length), (t = 0);
            else if (isFinite(t))
              (t >>>= 0),
                isFinite(n)
                  ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            else
              throw Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            var i,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              h = this.length - t;
            if (
              ((void 0 === n || n > h) && (n = h),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var p = !1; ; )
              switch (r) {
                case "hex":
                  return (function (e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : (r = i);
                    var s = t.length;
                    r > s / 2 && (r = s / 2);
                    for (var o = 0; o < r; ++o) {
                      var a = parseInt(t.substr(2 * o, 2), 16);
                      if (a != a) break;
                      e[n + o] = a;
                    }
                    return o;
                  })(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return (i = t), (s = n), C(R(e, this.length - i), this, i, s);
                case "ascii":
                case "latin1":
                case "binary":
                  return (
                    (o = t),
                    (a = n),
                    C(
                      (function (e) {
                        for (var t = [], n = 0; n < e.length; ++n)
                          t.push(255 & e.charCodeAt(n));
                        return t;
                      })(e),
                      this,
                      o,
                      a
                    )
                  );
                case "base64":
                  return (l = t), (c = n), C(N(e), this, l, c);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return (
                    (u = t),
                    (d = n),
                    C(
                      (function (e, t) {
                        for (
                          var n, r, i = [], s = 0;
                          s < e.length && !((t -= 2) < 0);
                          ++s
                        )
                          (r = (n = e.charCodeAt(s)) >> 8),
                            i.push(n % 256),
                            i.push(r);
                        return i;
                      })(e, this.length - u),
                      this,
                      u,
                      d
                    )
                  );
                default:
                  if (p) throw TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (p = !0);
              }
          }),
          (a.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          }),
          (a.prototype.slice = function (e, t) {
            var n = this.length;
            (e = ~~e),
              (t = void 0 === t ? n : ~~t),
              e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
              t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
              t < e && (t = e);
            var r = this.subarray(e, t);
            return Object.setPrototypeOf(r, a.prototype), r;
          }),
          (a.prototype.readUintLE = a.prototype.readUIntLE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || E(e, t, this.length);
              for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
                r += this[e + s] * i;
              return r;
            }),
          (a.prototype.readUintBE = a.prototype.readUIntBE =
            function (e, t, n) {
              (e >>>= 0), (t >>>= 0), n || E(e, t, this.length);
              for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                r += this[e + --t] * i;
              return r;
            }),
          (a.prototype.readUint8 = a.prototype.readUInt8 =
            function (e, t) {
              return (e >>>= 0), t || E(e, 1, this.length), this[e];
            }),
          (a.prototype.readUint16LE = a.prototype.readUInt16LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || E(e, 2, this.length),
                this[e] | (this[e + 1] << 8)
              );
            }),
          (a.prototype.readUint16BE = a.prototype.readUInt16BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || E(e, 2, this.length),
                (this[e] << 8) | this[e + 1]
              );
            }),
          (a.prototype.readUint32LE = a.prototype.readUInt32LE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || E(e, 4, this.length),
                (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                  16777216 * this[e + 3]
              );
            }),
          (a.prototype.readUint32BE = a.prototype.readUInt32BE =
            function (e, t) {
              return (
                (e >>>= 0),
                t || E(e, 4, this.length),
                16777216 * this[e] +
                  ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
              );
            }),
          (a.prototype.readIntLE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || E(e, t, this.length);
            for (var r = this[e], i = 1, s = 0; ++s < t && (i *= 256); )
              r += this[e + s] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (a.prototype.readIntBE = function (e, t, n) {
            (e >>>= 0), (t >>>= 0), n || E(e, t, this.length);
            for (var r = t, i = 1, s = this[e + --r]; r > 0 && (i *= 256); )
              s += this[e + --r] * i;
            return s >= (i *= 128) && (s -= Math.pow(2, 8 * t)), s;
          }),
          (a.prototype.readInt8 = function (e, t) {
            return ((e >>>= 0), t || E(e, 1, this.length), 128 & this[e])
              ? -((255 - this[e] + 1) * 1)
              : this[e];
          }),
          (a.prototype.readInt16LE = function (e, t) {
            (e >>>= 0), t || E(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (a.prototype.readInt16BE = function (e, t) {
            (e >>>= 0), t || E(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (a.prototype.readInt32LE = function (e, t) {
            return (
              (e >>>= 0),
              t || E(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (a.prototype.readInt32BE = function (e, t) {
            return (
              (e >>>= 0),
              t || E(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (a.prototype.readFloatLE = function (e, t) {
            return (
              (e >>>= 0), t || E(e, 4, this.length), i.read(this, e, !0, 23, 4)
            );
          }),
          (a.prototype.readFloatBE = function (e, t) {
            return (
              (e >>>= 0), t || E(e, 4, this.length), i.read(this, e, !1, 23, 4)
            );
          }),
          (a.prototype.readDoubleLE = function (e, t) {
            return (
              (e >>>= 0), t || E(e, 8, this.length), i.read(this, e, !0, 52, 8)
            );
          }),
          (a.prototype.readDoubleBE = function (e, t) {
            return (
              (e >>>= 0), t || E(e, 8, this.length), i.read(this, e, !1, 52, 8)
            );
          }),
          (a.prototype.writeUintLE = a.prototype.writeUIntLE =
            function (e, t, n, r) {
              if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                var i = Math.pow(2, 8 * n) - 1;
                b(this, e, t, n, i, 0);
              }
              var s = 1,
                o = 0;
              for (this[t] = 255 & e; ++o < n && (s *= 256); )
                this[t + o] = (e / s) & 255;
              return t + n;
            }),
          (a.prototype.writeUintBE = a.prototype.writeUIntBE =
            function (e, t, n, r) {
              if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
                var i = Math.pow(2, 8 * n) - 1;
                b(this, e, t, n, i, 0);
              }
              var s = n - 1,
                o = 1;
              for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
                this[t + s] = (e / o) & 255;
              return t + n;
            }),
          (a.prototype.writeUint8 = a.prototype.writeUInt8 =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || b(this, e, t, 1, 255, 0),
                (this[t] = 255 & e),
                t + 1
              );
            }),
          (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || b(this, e, t, 2, 65535, 0),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                t + 2
              );
            }),
          (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || b(this, e, t, 2, 65535, 0),
                (this[t] = e >>> 8),
                (this[t + 1] = 255 & e),
                t + 2
              );
            }),
          (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || b(this, e, t, 4, 4294967295, 0),
                (this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e),
                t + 4
              );
            }),
          (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
            function (e, t, n) {
              return (
                (e = +e),
                (t >>>= 0),
                n || b(this, e, t, 4, 4294967295, 0),
                (this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
          (a.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              b(this, e, t, n, i - 1, -i);
            }
            var s = 0,
              o = 1,
              a = 0;
            for (this[t] = 255 & e; ++s < n && (o *= 256); )
              e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1),
                (this[t + s] = (((e / o) >> 0) - a) & 255);
            return t + n;
          }),
          (a.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              b(this, e, t, n, i - 1, -i);
            }
            var s = n - 1,
              o = 1,
              a = 0;
            for (this[t + s] = 255 & e; --s >= 0 && (o *= 256); )
              e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1),
                (this[t + s] = (((e / o) >> 0) - a) & 255);
            return t + n;
          }),
          (a.prototype.writeInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || b(this, e, t, 1, 127, -128),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (a.prototype.writeInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || b(this, e, t, 2, 32767, -32768),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              t + 2
            );
          }),
          (a.prototype.writeInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || b(this, e, t, 2, 32767, -32768),
              (this[t] = e >>> 8),
              (this[t + 1] = 255 & e),
              t + 2
            );
          }),
          (a.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || b(this, e, t, 4, 2147483647, -2147483648),
              (this[t] = 255 & e),
              (this[t + 1] = e >>> 8),
              (this[t + 2] = e >>> 16),
              (this[t + 3] = e >>> 24),
              t + 4
            );
          }),
          (a.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || b(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            );
          }),
          (a.prototype.writeFloatLE = function (e, t, n) {
            return S(this, e, t, !0, n);
          }),
          (a.prototype.writeFloatBE = function (e, t, n) {
            return S(this, e, t, !1, n);
          }),
          (a.prototype.writeDoubleLE = function (e, t, n) {
            return w(this, e, t, !0, n);
          }),
          (a.prototype.writeDoubleBE = function (e, t, n) {
            return w(this, e, t, !1, n);
          }),
          (a.prototype.copy = function (e, t, n, r) {
            if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n || 0 === e.length || 0 === this.length)
            )
              return 0;
            if (t < 0) throw RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw RangeError("Index out of range");
            if (r < 0) throw RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              e.length - t < r - n && (r = e.length - t + n);
            var i = r - n;
            return (
              this === e && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(t, n, r)
                : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
              i
            );
          }),
          (a.prototype.fill = function (e, t, n, r) {
            if ("string" == typeof e) {
              if (
                ("string" == typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                void 0 !== r && "string" != typeof r)
              )
                throw TypeError("encoding must be a string");
              if ("string" == typeof r && !a.isEncoding(r))
                throw TypeError("Unknown encoding: " + r);
              if (1 === e.length) {
                var i,
                  s = e.charCodeAt(0);
                (("utf8" === r && s < 128) || "latin1" === r) && (e = s);
              }
            } else
              "number" == typeof e
                ? (e &= 255)
                : "boolean" == typeof e && (e = Number(e));
            if (t < 0 || this.length < t || this.length < n)
              throw RangeError("Out of range index");
            if (n <= t) return this;
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              "number" == typeof e)
            )
              for (i = t; i < n; ++i) this[i] = e;
            else {
              var o = a.isBuffer(e) ? e : a.from(e, r),
                l = o.length;
              if (0 === l)
                throw TypeError(
                  'The value "' + e + '" is invalid for argument "value"'
                );
              for (i = 0; i < n - t; ++i) this[i + t] = o[i % l];
            }
            return this;
          });
        var O = /[^+/0-9A-Za-z-_]/g;
        function R(e, t) {
          t = t || 1 / 0;
          for (var n, r = e.length, i = null, s = [], o = 0; o < r; ++o) {
            if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319 || o + 1 === r) {
                  (t -= 3) > -1 && s.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && s.push(239, 191, 189), (i = n);
                continue;
              }
              n = (((i - 55296) << 10) | (n - 56320)) + 65536;
            } else i && (t -= 3) > -1 && s.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((t -= 1) < 0) break;
              s.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              s.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              s.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else if (n < 1114112) {
              if ((t -= 4) < 0) break;
              s.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            } else throw Error("Invalid code point");
          }
          return s;
        }
        function N(e) {
          return r.toByteArray(
            (function (e) {
              if ((e = (e = e.split("=")[0]).trim().replace(O, "")).length < 2)
                return "";
              for (; e.length % 4 != 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function C(e, t, n, r) {
          for (
            var i = 0;
            i < r && !(i + n >= t.length) && !(i >= e.length);
            ++i
          )
            t[i + n] = e[i];
          return i;
        }
        function I(e, t) {
          return (
            e instanceof t ||
            (null != e &&
              null != e.constructor &&
              null != e.constructor.name &&
              e.constructor.name === t.name)
          );
        }
        var A = (function () {
          for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
            for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
          return t;
        })();
      },
      8679: function (e, t, n) {
        "use strict";
        var r = n(21296),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          s = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          a = {};
        function l(e) {
          return r.isMemo(e) ? o : a[e.$$typeof] || i;
        }
        (a[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (a[r.Memo] = o);
        var c = Object.defineProperty,
          u = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          h = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          f = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (f) {
              var i = p(n);
              i && i !== f && e(t, i, r);
            }
            var o = u(n);
            d && (o = o.concat(d(n)));
            for (var a = l(t), m = l(n), _ = 0; _ < o.length; ++_) {
              var g = o[_];
              if (!s[g] && !(r && r[g]) && !(m && m[g]) && !(a && a[g])) {
                var y = h(n, g);
                try {
                  c(t, g, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      96103: function (e, t) {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          i = n ? Symbol.for("react.portal") : 60106,
          s = n ? Symbol.for("react.fragment") : 60107,
          o = n ? Symbol.for("react.strict_mode") : 60108,
          a = n ? Symbol.for("react.profiler") : 60114,
          l = n ? Symbol.for("react.provider") : 60109,
          c = n ? Symbol.for("react.context") : 60110,
          u = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          h = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          f = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          _ = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          v = n ? Symbol.for("react.responder") : 60118,
          E = n ? Symbol.for("react.scope") : 60119;
        function b(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case u:
                  case d:
                  case s:
                  case a:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case c:
                      case h:
                      case _:
                      case m:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function T(e) {
          return b(e) === d;
        }
        (t.AsyncMode = u),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = c),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = h),
          (t.Fragment = s),
          (t.Lazy = _),
          (t.Memo = m),
          (t.Portal = i),
          (t.Profiler = a),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return T(e) || b(e) === u;
          }),
          (t.isConcurrentMode = T),
          (t.isContextConsumer = function (e) {
            return b(e) === c;
          }),
          (t.isContextProvider = function (e) {
            return b(e) === l;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return b(e) === h;
          }),
          (t.isFragment = function (e) {
            return b(e) === s;
          }),
          (t.isLazy = function (e) {
            return b(e) === _;
          }),
          (t.isMemo = function (e) {
            return b(e) === m;
          }),
          (t.isPortal = function (e) {
            return b(e) === i;
          }),
          (t.isProfiler = function (e) {
            return b(e) === a;
          }),
          (t.isStrictMode = function (e) {
            return b(e) === o;
          }),
          (t.isSuspense = function (e) {
            return b(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === s ||
              e === d ||
              e === a ||
              e === o ||
              e === p ||
              e === f ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === _ ||
                  e.$$typeof === m ||
                  e.$$typeof === l ||
                  e.$$typeof === c ||
                  e.$$typeof === h ||
                  e.$$typeof === y ||
                  e.$$typeof === v ||
                  e.$$typeof === E ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = b);
      },
      21296: function (e, t, n) {
        "use strict";
        e.exports = n(96103);
      },
      80645: function (e, t) {
        (t.read = function (e, t, n, r, i) {
          var s,
            o,
            a = 8 * i - r - 1,
            l = (1 << a) - 1,
            c = l >> 1,
            u = -7,
            d = n ? i - 1 : 0,
            h = n ? -1 : 1,
            p = e[t + d];
          for (
            d += h, s = p & ((1 << -u) - 1), p >>= -u, u += a;
            u > 0;
            s = 256 * s + e[t + d], d += h, u -= 8
          );
          for (
            o = s & ((1 << -u) - 1), s >>= -u, u += r;
            u > 0;
            o = 256 * o + e[t + d], d += h, u -= 8
          );
          if (0 === s) s = 1 - c;
          else {
            if (s === l) return o ? NaN : (1 / 0) * (p ? -1 : 1);
            (o += Math.pow(2, r)), (s -= c);
          }
          return (p ? -1 : 1) * o * Math.pow(2, s - r);
        }),
          (t.write = function (e, t, n, r, i, s) {
            var o,
              a,
              l,
              c = 8 * s - i - 1,
              u = (1 << c) - 1,
              d = u >> 1,
              h = 23 === i ? 5960464477539062e-23 : 0,
              p = r ? 0 : s - 1,
              f = r ? 1 : -1,
              m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              isNaN((t = Math.abs(t))) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (o = u))
                : ((o = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -o)) < 1 && (o--, (l *= 2)),
                  o + d >= 1 ? (t += h / l) : (t += h * Math.pow(2, 1 - d)),
                  t * l >= 2 && (o++, (l /= 2)),
                  o + d >= u
                    ? ((a = 0), (o = u))
                    : o + d >= 1
                    ? ((a = (t * l - 1) * Math.pow(2, i)), (o += d))
                    : ((a = t * Math.pow(2, d - 1) * Math.pow(2, i)), (o = 0)));
              i >= 8;
              e[n + p] = 255 & a, p += f, a /= 256, i -= 8
            );
            for (
              o = (o << i) | a, c += i;
              c > 0;
              e[n + p] = 255 & o, p += f, o /= 256, c -= 8
            );
            e[n + p - f] |= 128 * m;
          });
      },
      83454: function (e, t, n) {
        "use strict";
        var r, i;
        e.exports =
          (null == (r = n.g.process) ? void 0 : r.env) &&
          "object" == typeof (null == (i = n.g.process) ? void 0 : i.env)
            ? n.g.process
            : n(77663);
      },
      6840: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/_app",
          function () {
            return n(75774);
          },
        ]);
      },
      14043: function (e, t, n) {
        "use strict";
        let r, i, s, o, a, l, c, u, d, h, p, f, m, _, g, y, v, E, b;
        let T = "8.9.2";
        function S(e, t, n = [t], r = "npm") {
          let i = e._metadata || {};
          i.sdk ||
            (i.sdk = {
              name: `sentry.javascript.${t}`,
              packages: n.map((e) => ({
                name: `${r}:@sentry/${e}`,
                version: T,
              })),
              version: T,
            }),
            (e._metadata = i);
        }
        let w = globalThis;
        function O(e, t, n) {
          let r = n || w,
            i = (r.__SENTRY__ = r.__SENTRY__ || {}),
            s = (i[T] = i[T] || {});
          return s[e] || (s[e] = t());
        }
        let R = "production";
        function N() {
          return C(w), w;
        }
        function C(e) {
          let t = (e.__SENTRY__ = e.__SENTRY__ || {});
          return (t.version = t.version || T), (t[T] = t[T] || {});
        }
        let I = Object.prototype.toString;
        function A(e) {
          switch (I.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
              return !0;
            default:
              return $(e, Error);
          }
        }
        function k(e, t) {
          return I.call(e) === `[object ${t}]`;
        }
        function P(e) {
          return k(e, "ErrorEvent");
        }
        function D(e) {
          return k(e, "DOMError");
        }
        function x(e) {
          return k(e, "String");
        }
        function L(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "__sentry_template_string__" in e &&
            "__sentry_template_values__" in e
          );
        }
        function M(e) {
          return (
            null === e ||
            L(e) ||
            ("object" != typeof e && "function" != typeof e)
          );
        }
        function j(e) {
          return k(e, "Object");
        }
        function U(e) {
          return "undefined" != typeof Event && $(e, Event);
        }
        function F(e) {
          return !!(e && e.then && "function" == typeof e.then);
        }
        function $(e, t) {
          try {
            return e instanceof t;
          } catch (e) {
            return !1;
          }
        }
        function B(e) {
          return !!(
            "object" == typeof e &&
            null !== e &&
            (e.__isVue || e._isVue)
          );
        }
        function q(e, t = {}) {
          if (!e) return "<unknown>";
          try {
            let n,
              r = e,
              i = [],
              s = 0,
              o = 0,
              a = Array.isArray(t) ? t : t.keyAttrs,
              l = (!Array.isArray(t) && t.maxStringLength) || 80;
            for (
              ;
              r &&
              s++ < 5 &&
              ((n = (function (e, t) {
                let n, r, i, s, o;
                let a = [];
                if (!e || !e.tagName) return "";
                if (w.HTMLElement && e instanceof HTMLElement && e.dataset) {
                  if (e.dataset.sentryComponent)
                    return e.dataset.sentryComponent;
                  if (e.dataset.sentryElement) return e.dataset.sentryElement;
                }
                a.push(e.tagName.toLowerCase());
                let l =
                  t && t.length
                    ? t
                        .filter((t) => e.getAttribute(t))
                        .map((t) => [t, e.getAttribute(t)])
                    : null;
                if (l && l.length)
                  l.forEach((e) => {
                    a.push(`[${e[0]}="${e[1]}"]`);
                  });
                else if (
                  (e.id && a.push(`#${e.id}`), (n = e.className) && x(n))
                )
                  for (o = 0, r = n.split(/\s+/); o < r.length; o++)
                    a.push(`.${r[o]}`);
                let c = ["aria-label", "type", "name", "title", "alt"];
                for (o = 0; o < c.length; o++)
                  (i = c[o]),
                    (s = e.getAttribute(i)) && a.push(`[${i}="${s}"]`);
                return a.join("");
              })(r, a)),
              "html" !== n &&
                (!(s > 1) || !(o + 3 * i.length + n.length >= l)));

            )
              i.push(n), (o += n.length), (r = r.parentNode);
            return i.reverse().join(" > ");
          } catch (e) {
            return "<unknown>";
          }
        }
        function H(e) {
          if (!w.HTMLElement) return null;
          let t = e;
          for (let e = 0; e < 5 && t; e++) {
            if (t instanceof HTMLElement) {
              if (t.dataset.sentryComponent) return t.dataset.sentryComponent;
              if (t.dataset.sentryElement) return t.dataset.sentryElement;
            }
            t = t.parentNode;
          }
          return null;
        }
        let W = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
          z = ["debug", "info", "warn", "error", "log", "assert", "trace"],
          G = {};
        function V(e) {
          if (!("console" in w)) return e();
          let t = w.console,
            n = {},
            r = Object.keys(G);
          r.forEach((e) => {
            let r = G[e];
            (n[e] = t[e]), (t[e] = r);
          });
          try {
            return e();
          } finally {
            r.forEach((e) => {
              t[e] = n[e];
            });
          }
        }
        let Q = (function () {
          let e = !1,
            t = {
              enable: () => {
                e = !0;
              },
              disable: () => {
                e = !1;
              },
              isEnabled: () => e,
            };
          return (
            W
              ? z.forEach((n) => {
                  t[n] = (...t) => {
                    e &&
                      V(() => {
                        w.console[n](`Sentry Logger [${n}]:`, ...t);
                      });
                  };
                })
              : z.forEach((e) => {
                  t[e] = () => void 0;
                }),
            t
          );
        })();
        function Y(e, t = 0) {
          return "string" != typeof e || 0 === t
            ? e
            : e.length <= t
            ? e
            : `${e.slice(0, t)}...`;
        }
        function K(e, t) {
          if (!Array.isArray(e)) return "";
          let n = [];
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            try {
              B(r) ? n.push("[VueViewModel]") : n.push(String(r));
            } catch (e) {
              n.push("[value cannot be serialized]");
            }
          }
          return n.join(t);
        }
        function X(e, t = [], n = !1) {
          return t.some((t) =>
            (function (e, t, n = !1) {
              return (
                !!x(e) &&
                (k(t, "RegExp")
                  ? t.test(e)
                  : !!x(t) && (n ? e === t : e.includes(t)))
              );
            })(e, t, n)
          );
        }
        function J(e, t, n) {
          if (!(t in e)) return;
          let r = e[t],
            i = n(r);
          "function" == typeof i && ee(i, r), (e[t] = i);
        }
        function Z(e, t, n) {
          try {
            Object.defineProperty(e, t, {
              value: n,
              writable: !0,
              configurable: !0,
            });
          } catch (n) {
            W &&
              Q.log(
                `Failed to add non-enumerable property "${t}" to object`,
                e
              );
          }
        }
        function ee(e, t) {
          try {
            let n = t.prototype || {};
            (e.prototype = t.prototype = n), Z(e, "__sentry_original__", t);
          } catch (e) {}
        }
        function et(e) {
          return e.__sentry_original__;
        }
        function en(e) {
          if (A(e))
            return {
              message: e.message,
              name: e.name,
              stack: e.stack,
              ...ei(e),
            };
          if (!U(e)) return e;
          {
            let t = {
              type: e.type,
              target: er(e.target),
              currentTarget: er(e.currentTarget),
              ...ei(e),
            };
            return (
              "undefined" != typeof CustomEvent &&
                $(e, CustomEvent) &&
                (t.detail = e.detail),
              t
            );
          }
        }
        function er(e) {
          try {
            return "undefined" != typeof Element && $(e, Element)
              ? q(e)
              : Object.prototype.toString.call(e);
          } catch (e) {
            return "<unknown>";
          }
        }
        function ei(e) {
          if ("object" != typeof e || null === e) return {};
          {
            let t = {};
            for (let n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t;
          }
        }
        function es(e) {
          return (function e(t, n) {
            if (
              (function (e) {
                if (!j(e)) return !1;
                try {
                  let t = Object.getPrototypeOf(e).constructor.name;
                  return !t || "Object" === t;
                } catch (e) {
                  return !0;
                }
              })(t)
            ) {
              let r = n.get(t);
              if (void 0 !== r) return r;
              let i = {};
              for (let r of (n.set(t, i), Object.keys(t)))
                void 0 !== t[r] && (i[r] = e(t[r], n));
              return i;
            }
            if (Array.isArray(t)) {
              let r = n.get(t);
              if (void 0 !== r) return r;
              let i = [];
              return (
                n.set(t, i),
                t.forEach((t) => {
                  i.push(e(t, n));
                }),
                i
              );
            }
            return t;
          })(e, new Map());
        }
        function eo() {
          let e = w.crypto || w.msCrypto,
            t = () => 16 * Math.random();
          try {
            if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
            e &&
              e.getRandomValues &&
              (t = () => {
                let t = new Uint8Array(1);
                return e.getRandomValues(t), t[0];
              });
          } catch (e) {}
          return "10000000100040008000100000000000".replace(/[018]/g, (e) =>
            (e ^ ((15 & t()) >> (e / 4))).toString(16)
          );
        }
        function ea(e) {
          return e.exception && e.exception.values
            ? e.exception.values[0]
            : void 0;
        }
        function el(e) {
          let { message: t, event_id: n } = e;
          if (t) return t;
          let r = ea(e);
          return r
            ? r.type && r.value
              ? `${r.type}: ${r.value}`
              : r.type || r.value || n || "<unknown>"
            : n || "<unknown>";
        }
        function ec(e, t, n) {
          let r = (e.exception = e.exception || {}),
            i = (r.values = r.values || []),
            s = (i[0] = i[0] || {});
          s.value || (s.value = t || ""), s.type || (s.type = n || "Error");
        }
        function eu(e, t) {
          let n = ea(e);
          if (!n) return;
          let r = n.mechanism;
          if (
            ((n.mechanism = { type: "generic", handled: !0, ...r, ...t }),
            t && "data" in t)
          ) {
            let e = { ...(r && r.data), ...t.data };
            n.mechanism.data = e;
          }
        }
        function ed(e) {
          if (e && e.__sentry_captured__) return !0;
          try {
            Z(e, "__sentry_captured__", !0);
          } catch (e) {}
          return !1;
        }
        function eh(e) {
          return Array.isArray(e) ? e : [e];
        }
        function ep() {
          return { traceId: eo(), spanId: eo().substring(16) };
        }
        function ef() {
          return Date.now() / 1e3;
        }
        let em = (function () {
            let { performance: e } = w;
            if (!e || !e.now) return ef;
            let t = Date.now() - e.now(),
              n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3;
          })(),
          e_ = (() => {
            let { performance: e } = w;
            if (!e || !e.now) return;
            let t = e.now(),
              n = Date.now(),
              r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
              i = e.timing && e.timing.navigationStart,
              s = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
            return r < 36e5 || s < 36e5 ? (r <= s ? e.timeOrigin : i) : n;
          })();
        function eg(e, t = {}) {
          if (
            (!t.user ||
              (!e.ipAddress &&
                t.user.ip_address &&
                (e.ipAddress = t.user.ip_address),
              e.did ||
                t.did ||
                (e.did = t.user.id || t.user.email || t.user.username)),
            (e.timestamp = t.timestamp || em()),
            t.abnormal_mechanism &&
              (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : eo()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
          )
            e.duration = void 0;
          else if ("number" == typeof t.duration) e.duration = t.duration;
          else {
            let t = e.timestamp - e.started;
            e.duration = t >= 0 ? t : 0;
          }
          t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status);
        }
        let ey = "_sentrySpan";
        function ev(e, t) {
          t ? Z(e, ey, t) : delete e[ey];
        }
        class eE {
          constructor() {
            (this._notifyingListeners = !1),
              (this._scopeListeners = []),
              (this._eventProcessors = []),
              (this._breadcrumbs = []),
              (this._attachments = []),
              (this._user = {}),
              (this._tags = {}),
              (this._extra = {}),
              (this._contexts = {}),
              (this._sdkProcessingMetadata = {}),
              (this._propagationContext = ep());
          }
          clone() {
            let e = new eE();
            return (
              (e._breadcrumbs = [...this._breadcrumbs]),
              (e._tags = { ...this._tags }),
              (e._extra = { ...this._extra }),
              (e._contexts = { ...this._contexts }),
              (e._user = this._user),
              (e._level = this._level),
              (e._session = this._session),
              (e._transactionName = this._transactionName),
              (e._fingerprint = this._fingerprint),
              (e._eventProcessors = [...this._eventProcessors]),
              (e._requestSession = this._requestSession),
              (e._attachments = [...this._attachments]),
              (e._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
              (e._propagationContext = { ...this._propagationContext }),
              (e._client = this._client),
              (e._lastEventId = this._lastEventId),
              ev(e, this[ey]),
              e
            );
          }
          setClient(e) {
            this._client = e;
          }
          setLastEventId(e) {
            this._lastEventId = e;
          }
          getClient() {
            return this._client;
          }
          lastEventId() {
            return this._lastEventId;
          }
          addScopeListener(e) {
            this._scopeListeners.push(e);
          }
          addEventProcessor(e) {
            return this._eventProcessors.push(e), this;
          }
          setUser(e) {
            return (
              (this._user = e || {
                email: void 0,
                id: void 0,
                ip_address: void 0,
                username: void 0,
              }),
              this._session && eg(this._session, { user: e }),
              this._notifyScopeListeners(),
              this
            );
          }
          getUser() {
            return this._user;
          }
          getRequestSession() {
            return this._requestSession;
          }
          setRequestSession(e) {
            return (this._requestSession = e), this;
          }
          setTags(e) {
            return (
              (this._tags = { ...this._tags, ...e }),
              this._notifyScopeListeners(),
              this
            );
          }
          setTag(e, t) {
            return (
              (this._tags = { ...this._tags, [e]: t }),
              this._notifyScopeListeners(),
              this
            );
          }
          setExtras(e) {
            return (
              (this._extra = { ...this._extra, ...e }),
              this._notifyScopeListeners(),
              this
            );
          }
          setExtra(e, t) {
            return (
              (this._extra = { ...this._extra, [e]: t }),
              this._notifyScopeListeners(),
              this
            );
          }
          setFingerprint(e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }
          setLevel(e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }
          setTransactionName(e) {
            return (
              (this._transactionName = e), this._notifyScopeListeners(), this
            );
          }
          setContext(e, t) {
            return (
              null === t ? delete this._contexts[e] : (this._contexts[e] = t),
              this._notifyScopeListeners(),
              this
            );
          }
          setSession(e) {
            return (
              e ? (this._session = e) : delete this._session,
              this._notifyScopeListeners(),
              this
            );
          }
          getSession() {
            return this._session;
          }
          update(e) {
            if (!e) return this;
            let t = "function" == typeof e ? e(this) : e,
              [n, r] =
                t instanceof eb
                  ? [t.getScopeData(), t.getRequestSession()]
                  : j(t)
                  ? [e, e.requestSession]
                  : [],
              {
                tags: i,
                extra: s,
                user: o,
                contexts: a,
                level: l,
                fingerprint: c = [],
                propagationContext: u,
              } = n || {};
            return (
              (this._tags = { ...this._tags, ...i }),
              (this._extra = { ...this._extra, ...s }),
              (this._contexts = { ...this._contexts, ...a }),
              o && Object.keys(o).length && (this._user = o),
              l && (this._level = l),
              c.length && (this._fingerprint = c),
              u && (this._propagationContext = u),
              r && (this._requestSession = r),
              this
            );
          }
          clear() {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._requestSession = void 0),
              (this._session = void 0),
              ev(this, void 0),
              (this._attachments = []),
              (this._propagationContext = ep()),
              this._notifyScopeListeners(),
              this
            );
          }
          addBreadcrumb(e, t) {
            let n = "number" == typeof t ? t : 100;
            if (n <= 0) return this;
            let r = { timestamp: ef(), ...e },
              i = this._breadcrumbs;
            return (
              i.push(r),
              (this._breadcrumbs = i.length > n ? i.slice(-n) : i),
              this._notifyScopeListeners(),
              this
            );
          }
          getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1];
          }
          clearBreadcrumbs() {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }
          addAttachment(e) {
            return this._attachments.push(e), this;
          }
          clearAttachments() {
            return (this._attachments = []), this;
          }
          getScopeData() {
            return {
              breadcrumbs: this._breadcrumbs,
              attachments: this._attachments,
              contexts: this._contexts,
              tags: this._tags,
              extra: this._extra,
              user: this._user,
              level: this._level,
              fingerprint: this._fingerprint || [],
              eventProcessors: this._eventProcessors,
              propagationContext: this._propagationContext,
              sdkProcessingMetadata: this._sdkProcessingMetadata,
              transactionName: this._transactionName,
              span: this[ey],
            };
          }
          setSDKProcessingMetadata(e) {
            return (
              (this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e,
              }),
              this
            );
          }
          setPropagationContext(e) {
            return (this._propagationContext = e), this;
          }
          getPropagationContext() {
            return this._propagationContext;
          }
          captureException(e, t) {
            let n = t && t.event_id ? t.event_id : eo();
            if (!this._client)
              return (
                Q.warn(
                  "No client configured on scope - will not capture exception!"
                ),
                n
              );
            let r = Error("Sentry syntheticException");
            return (
              this._client.captureException(
                e,
                {
                  originalException: e,
                  syntheticException: r,
                  ...t,
                  event_id: n,
                },
                this
              ),
              n
            );
          }
          captureMessage(e, t, n) {
            let r = n && n.event_id ? n.event_id : eo();
            if (!this._client)
              return (
                Q.warn(
                  "No client configured on scope - will not capture message!"
                ),
                r
              );
            let i = Error(e);
            return (
              this._client.captureMessage(
                e,
                t,
                {
                  originalException: e,
                  syntheticException: i,
                  ...n,
                  event_id: r,
                },
                this
              ),
              r
            );
          }
          captureEvent(e, t) {
            let n = t && t.event_id ? t.event_id : eo();
            return (
              this._client
                ? this._client.captureEvent(e, { ...t, event_id: n }, this)
                : Q.warn(
                    "No client configured on scope - will not capture event!"
                  ),
              n
            );
          }
          _notifyScopeListeners() {
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach((e) => {
                e(this);
              }),
              (this._notifyingListeners = !1));
          }
        }
        let eb = eE;
        class eT {
          constructor(e, t) {
            let n, r;
            (n = e || new eb()),
              (r = t || new eb()),
              (this._stack = [{ scope: n }]),
              (this._isolationScope = r);
          }
          withScope(e) {
            let t;
            let n = this._pushScope();
            try {
              t = e(n);
            } catch (e) {
              throw (this._popScope(), e);
            }
            return F(t)
              ? t.then(
                  (e) => (this._popScope(), e),
                  (e) => {
                    throw (this._popScope(), e);
                  }
                )
              : (this._popScope(), t);
          }
          getClient() {
            return this.getStackTop().client;
          }
          getScope() {
            return this.getStackTop().scope;
          }
          getIsolationScope() {
            return this._isolationScope;
          }
          getStack() {
            return this._stack;
          }
          getStackTop() {
            return this._stack[this._stack.length - 1];
          }
          _pushScope() {
            let e = this.getScope().clone();
            return (
              this.getStack().push({ client: this.getClient(), scope: e }), e
            );
          }
          _popScope() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop();
          }
        }
        function eS() {
          let e = C(N());
          return (e.stack =
            e.stack ||
            new eT(
              O("defaultCurrentScope", () => new eb()),
              O("defaultIsolationScope", () => new eb())
            ));
        }
        function ew(e) {
          return eS().withScope(e);
        }
        function eO(e, t) {
          let n = eS();
          return n.withScope(() => ((n.getStackTop().scope = e), t(e)));
        }
        function eR(e) {
          return eS().withScope(() => e(eS().getIsolationScope()));
        }
        function eN(e) {
          let t = C(e);
          return t.acs
            ? t.acs
            : {
                withIsolationScope: eR,
                withScope: ew,
                withSetScope: eO,
                withSetIsolationScope: (e, t) => eR(t),
                getCurrentScope: () => eS().getScope(),
                getIsolationScope: () => eS().getIsolationScope(),
              };
        }
        function eC() {
          return eN(N()).getCurrentScope();
        }
        function eI() {
          return eN(N()).getIsolationScope();
        }
        function eA(...e) {
          let t = eN(N());
          if (2 === e.length) {
            let [n, r] = e;
            return n ? t.withSetScope(n, r) : t.withScope(r);
          }
          return t.withScope(e[0]);
        }
        function ek() {
          return eC().getClient();
        }
        let eP = /\(error: (.*)\)/,
          eD = /captureMessage|captureException/;
        function ex(...e) {
          let t = e.sort((e, t) => e[0] - t[0]).map((e) => e[1]);
          return (e, n = 0, r = 0) => {
            let i = [],
              s = e.split("\n");
            for (let e = n; e < s.length; e++) {
              let n = s[e];
              if (n.length > 1024) continue;
              let o = eP.test(n) ? n.replace(eP, "$1") : n;
              if (!o.match(/\S*Error: /)) {
                for (let e of t) {
                  let t = e(o);
                  if (t) {
                    i.push(t);
                    break;
                  }
                }
                if (i.length >= 50 + r) break;
              }
            }
            return (function (e) {
              if (!e.length) return [];
              let t = Array.from(e);
              return (
                /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
                t.reverse(),
                eD.test(t[t.length - 1].function || "") &&
                  (t.pop(), eD.test(t[t.length - 1].function || "") && t.pop()),
                t
                  .slice(0, 50)
                  .map((e) => ({
                    ...e,
                    filename: e.filename || t[t.length - 1].filename,
                    function: e.function || "?",
                  }))
              );
            })(i.slice(r));
          };
        }
        let eL = "<anonymous>";
        function eM(e) {
          try {
            if (!e || "function" != typeof e) return eL;
            return e.name || eL;
          } catch (e) {
            return eL;
          }
        }
        function ej(e) {
          let t = e.exception;
          if (t) {
            let e = [];
            try {
              return (
                t.values.forEach((t) => {
                  t.stacktrace.frames && e.push(...t.stacktrace.frames);
                }),
                e
              );
            } catch (e) {}
          }
        }
        function eU(e, t = 100, n = Infinity) {
          try {
            return (function e(
              t,
              n,
              r = Infinity,
              i = Infinity,
              s = (function () {
                let e = "function" == typeof WeakSet,
                  t = e ? new WeakSet() : [];
                return [
                  function (n) {
                    if (e) return !!t.has(n) || (t.add(n), !1);
                    for (let e = 0; e < t.length; e++)
                      if (t[e] === n) return !0;
                    return t.push(n), !1;
                  },
                  function (n) {
                    if (e) t.delete(n);
                    else
                      for (let e = 0; e < t.length; e++)
                        if (t[e] === n) {
                          t.splice(e, 1);
                          break;
                        }
                  },
                ];
              })()
            ) {
              let [o, a] = s;
              if (
                null == n ||
                (["number", "boolean", "string"].includes(typeof n) &&
                  !Number.isNaN(n))
              )
                return n;
              let l = (function (e, t) {
                try {
                  if ("domain" === e && t && "object" == typeof t && t._events)
                    return "[Domain]";
                  if ("domainEmitter" === e) return "[DomainEmitter]";
                  if ("undefined" != typeof global && t === global)
                    return "[Global]";
                  if ("undefined" != typeof window && t === window)
                    return "[Window]";
                  if ("undefined" != typeof document && t === document)
                    return "[Document]";
                  if (B(t)) return "[VueViewModel]";
                  if (
                    j(t) &&
                    "nativeEvent" in t &&
                    "preventDefault" in t &&
                    "stopPropagation" in t
                  )
                    return "[SyntheticEvent]";
                  if ("number" == typeof t && t != t) return "[NaN]";
                  if ("function" == typeof t) return `[Function: ${eM(t)}]`;
                  if ("symbol" == typeof t) return `[${String(t)}]`;
                  if ("bigint" == typeof t) return `[BigInt: ${String(t)}]`;
                  let n = (function (e) {
                    let t = Object.getPrototypeOf(e);
                    return t ? t.constructor.name : "null prototype";
                  })(t);
                  if (/^HTML(\w*)Element$/.test(n))
                    return `[HTMLElement: ${n}]`;
                  return `[object ${n}]`;
                } catch (e) {
                  return `**non-serializable** (${e})`;
                }
              })(t, n);
              if (!l.startsWith("[object ")) return l;
              if (n.__sentry_skip_normalization__) return n;
              let c =
                "number" == typeof n.__sentry_override_normalization_depth__
                  ? n.__sentry_override_normalization_depth__
                  : r;
              if (0 === c) return l.replace("object ", "");
              if (o(n)) return "[Circular ~]";
              if (n && "function" == typeof n.toJSON)
                try {
                  let t = n.toJSON();
                  return e("", t, c - 1, i, s);
                } catch (e) {}
              let u = Array.isArray(n) ? [] : {},
                d = 0,
                h = en(n);
              for (let t in h) {
                if (!Object.prototype.hasOwnProperty.call(h, t)) continue;
                if (d >= i) {
                  u[t] = "[MaxProperties ~]";
                  break;
                }
                let n = h[t];
                (u[t] = e(t, n, c - 1, i, s)), d++;
              }
              return a(n), u;
            })("", e, t, n);
          } catch (e) {
            return { ERROR: `**non-serializable** (${e})` };
          }
        }
        function eF(e) {
          return new eB((t) => {
            t(e);
          });
        }
        function e$(e) {
          return new eB((t, n) => {
            n(e);
          });
        }
        ((re = rt || (rt = {}))[(re.PENDING = 0)] = "PENDING"),
          (re[(re.RESOLVED = 1)] = "RESOLVED"),
          (re[(re.REJECTED = 2)] = "REJECTED");
        class eB {
          constructor(e) {
            eB.prototype.__init.call(this),
              eB.prototype.__init2.call(this),
              eB.prototype.__init3.call(this),
              eB.prototype.__init4.call(this),
              (this._state = rt.PENDING),
              (this._handlers = []);
            try {
              e(this._resolve, this._reject);
            } catch (e) {
              this._reject(e);
            }
          }
          then(e, t) {
            return new eB((n, r) => {
              this._handlers.push([
                !1,
                (t) => {
                  if (e)
                    try {
                      n(e(t));
                    } catch (e) {
                      r(e);
                    }
                  else n(t);
                },
                (e) => {
                  if (t)
                    try {
                      n(t(e));
                    } catch (e) {
                      r(e);
                    }
                  else r(e);
                },
              ]),
                this._executeHandlers();
            });
          }
          catch(e) {
            return this.then((e) => e, e);
          }
          finally(e) {
            return new eB((t, n) => {
              let r, i;
              return this.then(
                (t) => {
                  (i = !1), (r = t), e && e();
                },
                (t) => {
                  (i = !0), (r = t), e && e();
                }
              ).then(() => {
                if (i) {
                  n(r);
                  return;
                }
                t(r);
              });
            });
          }
          __init() {
            this._resolve = (e) => {
              this._setResult(rt.RESOLVED, e);
            };
          }
          __init2() {
            this._reject = (e) => {
              this._setResult(rt.REJECTED, e);
            };
          }
          __init3() {
            this._setResult = (e, t) => {
              if (this._state === rt.PENDING) {
                if (F(t)) {
                  t.then(this._resolve, this._reject);
                  return;
                }
                (this._state = e), (this._value = t), this._executeHandlers();
              }
            };
          }
          __init4() {
            this._executeHandlers = () => {
              if (this._state === rt.PENDING) return;
              let e = this._handlers.slice();
              (this._handlers = []),
                e.forEach((e) => {
                  e[0] ||
                    (this._state === rt.RESOLVED && e[1](this._value),
                    this._state === rt.REJECTED && e[2](this._value),
                    (e[0] = !0));
                });
            };
          }
        }
        let eq = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
          eH = "sentry.source",
          eW = "sentry.sample_rate",
          ez = "sentry.op",
          eG = "sentry.origin",
          eV = "sentry.idle_span_finish_reason",
          eQ = "sentry.measurement_unit",
          eY = "sentry.measurement_value",
          eK = "sentry.exclusive_time",
          eX = "baggage",
          eJ = "sentry-",
          eZ = /^sentry-/;
        function e0(e) {
          if (e)
            return (function (e) {
              if (0 !== Object.keys(e).length)
                return Object.entries(e).reduce((e, [t, n], r) => {
                  let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
                    s = 0 === r ? i : `${e},${i}`;
                  return s.length > 8192
                    ? (W &&
                        Q.warn(
                          `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`
                        ),
                      e)
                    : s;
                }, "");
            })(
              Object.entries(e).reduce(
                (e, [t, n]) => (n && (e[`${eJ}${t}`] = n), e),
                {}
              )
            );
        }
        function e1(e) {
          return e
            .split(",")
            .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
            .reduce((e, [t, n]) => ((e[t] = n), e), {});
        }
        let e2 = RegExp(
          "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
        );
        function e3(e = eo(), t = eo().substring(16), n) {
          let r = "";
          return void 0 !== n && (r = n ? "-1" : "-0"), `${e}-${t}${r}`;
        }
        function e5(e) {
          let t = e._sentryMetrics;
          if (!t) return;
          let n = {};
          for (let [, [e, r]] of t) n[e] || (n[e] = []), n[e].push(es(r));
          return n;
        }
        function e4(e, t) {
          e.setAttribute("http.response.status_code", t);
          let n = (function (e) {
            if (e < 400 && e >= 100) return { code: 1 };
            if (e >= 400 && e < 500)
              switch (e) {
                case 401:
                  return { code: 2, message: "unauthenticated" };
                case 403:
                  return { code: 2, message: "permission_denied" };
                case 404:
                  return { code: 2, message: "not_found" };
                case 409:
                  return { code: 2, message: "already_exists" };
                case 413:
                  return { code: 2, message: "failed_precondition" };
                case 429:
                  return { code: 2, message: "resource_exhausted" };
                case 499:
                  return { code: 2, message: "cancelled" };
                default:
                  return { code: 2, message: "invalid_argument" };
              }
            if (e >= 500 && e < 600)
              switch (e) {
                case 501:
                  return { code: 2, message: "unimplemented" };
                case 503:
                  return { code: 2, message: "unavailable" };
                case 504:
                  return { code: 2, message: "deadline_exceeded" };
                default:
                  return { code: 2, message: "internal_error" };
              }
            return { code: 2, message: "unknown_error" };
          })(t);
          "unknown_error" !== n.message && e.setStatus(n);
        }
        function e6(e) {
          let { traceId: t, spanId: n } = e.spanContext();
          return e3(t, n, te(e));
        }
        function e8(e) {
          return "number" == typeof e
            ? e9(e)
            : Array.isArray(e)
            ? e[0] + e[1] / 1e9
            : e instanceof Date
            ? e9(e.getTime())
            : em();
        }
        function e9(e) {
          return e > 9999999999 ? e / 1e3 : e;
        }
        function e7(e) {
          if ("function" == typeof e.getSpanJSON) return e.getSpanJSON();
          try {
            let { spanId: t, traceId: n } = e.spanContext();
            if (
              e.attributes &&
              e.startTime &&
              e.name &&
              e.endTime &&
              e.status
            ) {
              let {
                attributes: r,
                startTime: i,
                name: s,
                endTime: o,
                parentSpanId: a,
                status: l,
              } = e;
              return es({
                span_id: t,
                trace_id: n,
                data: r,
                description: s,
                parent_span_id: a,
                start_timestamp: e8(i),
                timestamp: e8(o) || void 0,
                status: tt(l),
                op: r[ez],
                origin: r[eG],
                _metrics_summary: e5(e),
              });
            }
            return { span_id: t, trace_id: n };
          } catch (e) {
            return {};
          }
        }
        function te(e) {
          let { traceFlags: t } = e.spanContext();
          return 1 === t;
        }
        function tt(e) {
          return e && 0 !== e.code
            ? 1 === e.code
              ? "ok"
              : e.message || "unknown_error"
            : void 0;
        }
        let tn = "_sentryChildSpans",
          tr = "_sentryRootSpan";
        function ti(e, t) {
          let n = e[tr] || e;
          Z(t, tr, n), e[tn] ? e[tn].add(t) : Z(e, tn, new Set([t]));
        }
        function ts(e) {
          let t = new Set();
          return (
            (function e(n) {
              if (!t.has(n) && te(n))
                for (let r of (t.add(n), n[tn] ? Array.from(n[tn]) : [])) e(r);
            })(e),
            Array.from(t)
          );
        }
        function to(e) {
          return e[tr] || e;
        }
        function ta() {
          let e = eN(N());
          return e.getActiveSpan ? e.getActiveSpan() : eC()[ey];
        }
        let tl = "_frozenDsc";
        function tc(e, t) {
          let n = t.getOptions(),
            { publicKey: r } = t.getDsn() || {},
            i = es({
              environment: n.environment || R,
              release: n.release,
              public_key: r,
              trace_id: e,
            });
          return t.emit("createDsc", i), i;
        }
        function tu(e) {
          let t = ek();
          if (!t) return {};
          let n = tc(e7(e).trace_id || "", t),
            r = to(e);
          if (!r) return n;
          let i = r[tl];
          if (i) return i;
          let s = e7(r),
            o = s.data || {},
            a = o[eW];
          null != a && (n.sample_rate = `${a}`);
          let l = o[eH];
          return (
            l && "url" !== l && (n.transaction = s.description),
            (n.sampled = String(te(r))),
            t.emit("createDsc", n),
            n
          );
        }
        function td(e, t) {
          let {
            extra: n,
            tags: r,
            user: i,
            contexts: s,
            level: o,
            sdkProcessingMetadata: a,
            breadcrumbs: l,
            fingerprint: c,
            eventProcessors: u,
            attachments: d,
            propagationContext: h,
            transactionName: p,
            span: f,
          } = t;
          th(e, "extra", n),
            th(e, "tags", r),
            th(e, "user", i),
            th(e, "contexts", s),
            th(e, "sdkProcessingMetadata", a),
            o && (e.level = o),
            p && (e.transactionName = p),
            f && (e.span = f),
            l.length && (e.breadcrumbs = [...e.breadcrumbs, ...l]),
            c.length && (e.fingerprint = [...e.fingerprint, ...c]),
            u.length && (e.eventProcessors = [...e.eventProcessors, ...u]),
            d.length && (e.attachments = [...e.attachments, ...d]),
            (e.propagationContext = { ...e.propagationContext, ...h });
        }
        function th(e, t, n) {
          if (n && Object.keys(n).length)
            for (let r in ((e[t] = { ...e[t] }), n))
              Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
        }
        function tp(e, t, n, r, i, s) {
          let { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e,
            l = {
              ...t,
              event_id: t.event_id || n.event_id || eo(),
              timestamp: t.timestamp || ef(),
            },
            c = n.integrations || e.integrations.map((e) => e.name);
          (function (e, t) {
            let {
              environment: n,
              release: r,
              dist: i,
              maxValueLength: s = 250,
            } = t;
            "environment" in e || (e.environment = "environment" in t ? n : R),
              void 0 === e.release && void 0 !== r && (e.release = r),
              void 0 === e.dist && void 0 !== i && (e.dist = i),
              e.message && (e.message = Y(e.message, s));
            let o = e.exception && e.exception.values && e.exception.values[0];
            o && o.value && (o.value = Y(o.value, s));
            let a = e.request;
            a && a.url && (a.url = Y(a.url, s));
          })(l, e),
            c.length > 0 &&
              ((l.sdk = l.sdk || {}),
              (l.sdk.integrations = [...(l.sdk.integrations || []), ...c])),
            void 0 === t.type &&
              (function (e, t) {
                let n;
                let r = w._sentryDebugIds;
                if (!r) return;
                let i = tf.get(t);
                i ? (n = i) : ((n = new Map()), tf.set(t, n));
                let s = Object.keys(r).reduce((e, i) => {
                  let s;
                  let o = n.get(i);
                  o ? (s = o) : ((s = t(i)), n.set(i, s));
                  for (let t = s.length - 1; t >= 0; t--) {
                    let n = s[t];
                    if (n.filename) {
                      e[n.filename] = r[i];
                      break;
                    }
                  }
                  return e;
                }, {});
                try {
                  e.exception.values.forEach((e) => {
                    e.stacktrace.frames.forEach((e) => {
                      e.filename && (e.debug_id = s[e.filename]);
                    });
                  });
                } catch (e) {}
              })(l, e.stackParser);
          let u = (function (e, t) {
            if (!t) return e;
            let n = e ? e.clone() : new eb();
            return n.update(t), n;
          })(r, n.captureContext);
          n.mechanism && eu(l, n.mechanism);
          let d = i ? i.getEventProcessors() : [],
            h = O("globalScope", () => new eb()).getScopeData();
          s && td(h, s.getScopeData()), u && td(h, u.getScopeData());
          let p = [...(n.attachments || []), ...h.attachments];
          return (
            p.length && (n.attachments = p),
            (function (e, t) {
              let {
                fingerprint: n,
                span: r,
                breadcrumbs: i,
                sdkProcessingMetadata: s,
              } = t;
              (function (e, t) {
                let {
                    extra: n,
                    tags: r,
                    user: i,
                    contexts: s,
                    level: o,
                    transactionName: a,
                  } = t,
                  l = es(n);
                l && Object.keys(l).length && (e.extra = { ...l, ...e.extra });
                let c = es(r);
                c && Object.keys(c).length && (e.tags = { ...c, ...e.tags });
                let u = es(i);
                u && Object.keys(u).length && (e.user = { ...u, ...e.user });
                let d = es(s);
                d &&
                  Object.keys(d).length &&
                  (e.contexts = { ...d, ...e.contexts }),
                  o && (e.level = o),
                  a && "transaction" !== e.type && (e.transaction = a);
              })(e, t),
                r &&
                  (function (e, t) {
                    (e.contexts = {
                      trace: (function (e) {
                        let { spanId: t, traceId: n } = e.spanContext(),
                          { parent_span_id: r } = e7(e);
                        return es({
                          parent_span_id: r,
                          span_id: t,
                          trace_id: n,
                        });
                      })(t),
                      ...e.contexts,
                    }),
                      (e.sdkProcessingMetadata = {
                        dynamicSamplingContext: tu(t),
                        ...e.sdkProcessingMetadata,
                      });
                    let n = e7(to(t)).description;
                    n &&
                      !e.transaction &&
                      "transaction" === e.type &&
                      (e.transaction = n);
                  })(e, r),
                (e.fingerprint = e.fingerprint ? eh(e.fingerprint) : []),
                n && (e.fingerprint = e.fingerprint.concat(n)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint,
                (function (e, t) {
                  let n = [...(e.breadcrumbs || []), ...t];
                  e.breadcrumbs = n.length ? n : void 0;
                })(e, i),
                (e.sdkProcessingMetadata = {
                  ...e.sdkProcessingMetadata,
                  ...s,
                });
            })(l, h),
            (function e(t, n, r, i = 0) {
              return new eB((s, o) => {
                let a = t[i];
                if (null === n || "function" != typeof a) s(n);
                else {
                  let l = a({ ...n }, r);
                  eq &&
                    a.id &&
                    null === l &&
                    Q.log(`Event processor "${a.id}" dropped event`),
                    F(l)
                      ? l.then((n) => e(t, n, r, i + 1).then(s)).then(null, o)
                      : e(t, l, r, i + 1)
                          .then(s)
                          .then(null, o);
                }
              });
            })([...d, ...h.eventProcessors], l, n).then((e) =>
              (e &&
                (function (e) {
                  let t = {};
                  try {
                    e.exception.values.forEach((e) => {
                      e.stacktrace.frames.forEach((e) => {
                        e.debug_id &&
                          (e.abs_path
                            ? (t[e.abs_path] = e.debug_id)
                            : e.filename && (t[e.filename] = e.debug_id),
                          delete e.debug_id);
                      });
                    });
                  } catch (e) {}
                  if (0 === Object.keys(t).length) return;
                  (e.debug_meta = e.debug_meta || {}),
                    (e.debug_meta.images = e.debug_meta.images || []);
                  let n = e.debug_meta.images;
                  Object.keys(t).forEach((e) => {
                    n.push({ type: "sourcemap", code_file: e, debug_id: t[e] });
                  });
                })(e),
              "number" == typeof o && o > 0)
                ? (function (e, t, n) {
                    if (!e) return null;
                    let r = {
                      ...e,
                      ...(e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map((e) => ({
                          ...e,
                          ...(e.data && { data: eU(e.data, t, n) }),
                        })),
                      }),
                      ...(e.user && { user: eU(e.user, t, n) }),
                      ...(e.contexts && { contexts: eU(e.contexts, t, n) }),
                      ...(e.extra && { extra: eU(e.extra, t, n) }),
                    };
                    return (
                      e.contexts &&
                        e.contexts.trace &&
                        r.contexts &&
                        ((r.contexts.trace = e.contexts.trace),
                        e.contexts.trace.data &&
                          (r.contexts.trace.data = eU(
                            e.contexts.trace.data,
                            t,
                            n
                          ))),
                      e.spans &&
                        (r.spans = e.spans.map((e) => ({
                          ...e,
                          ...(e.data && { data: eU(e.data, t, n) }),
                        }))),
                      r
                    );
                  })(e, o, a)
                : e
            )
          );
        }
        let tf = new WeakMap(),
          tm = [
            "user",
            "level",
            "extra",
            "contexts",
            "tags",
            "fingerprint",
            "requestSession",
            "propagationContext",
          ];
        function t_(e, t) {
          return eC().captureException(
            e,
            t
              ? t instanceof eb ||
                "function" == typeof t ||
                Object.keys(t).some((e) => tm.includes(e))
                ? { captureContext: t }
                : t
              : void 0
          );
        }
        function tg(e, t) {
          return eC().captureEvent(e, t);
        }
        function ty(e) {
          eI().addEventProcessor(e);
        }
        function tv(e) {
          let t = ek(),
            n = eI(),
            r = eC(),
            { release: i, environment: s = R } = (t && t.getOptions()) || {},
            { userAgent: o } = w.navigator || {},
            a = (function (e) {
              let t = em(),
                n = {
                  sid: eo(),
                  init: !0,
                  timestamp: t,
                  started: t,
                  duration: 0,
                  status: "ok",
                  errors: 0,
                  ignoreDuration: !1,
                  toJSON: () =>
                    es({
                      sid: `${n.sid}`,
                      init: n.init,
                      started: new Date(1e3 * n.started).toISOString(),
                      timestamp: new Date(1e3 * n.timestamp).toISOString(),
                      status: n.status,
                      errors: n.errors,
                      did:
                        "number" == typeof n.did || "string" == typeof n.did
                          ? `${n.did}`
                          : void 0,
                      duration: n.duration,
                      abnormal_mechanism: n.abnormal_mechanism,
                      attrs: {
                        release: n.release,
                        environment: n.environment,
                        ip_address: n.ipAddress,
                        user_agent: n.userAgent,
                      },
                    }),
                };
              return e && eg(n, e), n;
            })({
              release: i,
              environment: s,
              user: r.getUser() || n.getUser(),
              ...(o && { userAgent: o }),
              ...e,
            }),
            l = n.getSession();
          return (
            l && "ok" === l.status && eg(l, { status: "exited" }),
            tE(),
            n.setSession(a),
            r.setSession(a),
            a
          );
        }
        function tE() {
          let e = eI(),
            t = eC(),
            n = t.getSession() || e.getSession();
          if (n) {
            let e;
            (e = {}), "ok" === n.status && (e = { status: "exited" }), eg(n, e);
          }
          tb(), e.setSession(), t.setSession();
        }
        function tb() {
          let e = eI(),
            t = eC(),
            n = ek(),
            r = t.getSession() || e.getSession();
          r && n && n.captureSession(r);
        }
        function tT(e = !1) {
          if (e) {
            tE();
            return;
          }
          tb();
        }
        function tS(e) {
          if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
            return !1;
          let t =
            e ||
            (function () {
              let e = ek();
              return e && e.getOptions();
            })();
          return (
            !!t &&
            (t.enableTracing || "tracesSampleRate" in t || "tracesSampler" in t)
          );
        }
        let tw = [];
        function tO(e, t) {
          for (let n of t) n && n.afterAllSetup && n.afterAllSetup(e);
        }
        function tR(e, t, n) {
          if (n[t.name]) {
            eq &&
              Q.log(
                `Integration skipped because it was already installed: ${t.name}`
              );
            return;
          }
          if (
            ((n[t.name] = t),
            -1 === tw.indexOf(t.name) &&
              "function" == typeof t.setupOnce &&
              (t.setupOnce(), tw.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            "function" == typeof t.preprocessEvent)
          ) {
            let n = t.preprocessEvent.bind(t);
            e.on("preprocessEvent", (t, r) => n(t, r, e));
          }
          if ("function" == typeof t.processEvent) {
            let n = t.processEvent.bind(t),
              r = Object.assign((t, r) => n(t, r, e), { id: t.name });
            e.addEventProcessor(r);
          }
          eq && Q.log(`Integration installed: ${t.name}`);
        }
        let tN = [
            /^Script error\.?$/,
            /^Javascript error: Script error\.? on line 0$/,
            /^ResizeObserver loop completed with undelivered notifications.$/,
            /^Cannot redefine property: googletag$/,
            "undefined is not an object (evaluating 'a.L')",
            'can\'t redefine non-configurable property "solana"',
            "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)",
            "Can't find variable: _AutofillCallbackHandler",
          ],
          tC = (e = {}) => ({
            name: "InboundFilters",
            processEvent: (t, n, r) => {
              var i, s;
              return (
                (i = (function (e = {}, t = {}) {
                  return {
                    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                    ignoreErrors: [
                      ...(e.ignoreErrors || []),
                      ...(t.ignoreErrors || []),
                      ...(e.disableErrorDefaults ? [] : tN),
                    ],
                    ignoreTransactions: [
                      ...(e.ignoreTransactions || []),
                      ...(t.ignoreTransactions || []),
                    ],
                    ignoreInternal:
                      void 0 === e.ignoreInternal || e.ignoreInternal,
                  };
                })(e, r.getOptions())).ignoreInternal &&
                (function (e) {
                  try {
                    return "SentryError" === e.exception.values[0].type;
                  } catch (e) {}
                  return !1;
                })(t)
                  ? (eq &&
                      Q.warn(`Event dropped due to being internal Sentry Error.
Event: ${el(t)}`),
                    0)
                  : ((s = i.ignoreErrors),
                    !t.type &&
                      s &&
                      s.length &&
                      (function (e) {
                        let t;
                        let n = [];
                        e.message && n.push(e.message);
                        try {
                          t = e.exception.values[e.exception.values.length - 1];
                        } catch (e) {}
                        return (
                          t &&
                            t.value &&
                            (n.push(t.value),
                            t.type && n.push(`${t.type}: ${t.value}`)),
                          n
                        );
                      })(t).some((e) => X(e, s)))
                  ? (eq &&
                      Q.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${el(t)}`),
                    0)
                  : t.type ||
                    !t.exception ||
                    !t.exception.values ||
                    0 === t.exception.values.length ||
                    t.message ||
                    t.exception.values.some(
                      (e) =>
                        e.stacktrace ||
                        (e.type && "Error" !== e.type) ||
                        e.value
                    )
                  ? !(function (e, t) {
                      if ("transaction" !== e.type || !t || !t.length)
                        return !1;
                      let n = e.transaction;
                      return !!n && X(n, t);
                    })(t, i.ignoreTransactions)
                    ? !(function (e, t) {
                        if (!t || !t.length) return !1;
                        let n = tI(e);
                        return !!n && X(n, t);
                      })(t, i.denyUrls)
                      ? (function (e, t) {
                          if (!t || !t.length) return !0;
                          let n = tI(e);
                          return !n || X(n, t);
                        })(t, i.allowUrls) ||
                        (eq &&
                          Q.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${el(t)}.
Url: ${tI(t)}`),
                        0)
                      : (eq &&
                          Q.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${el(t)}.
Url: ${tI(t)}`),
                        0)
                    : (eq &&
                        Q.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${el(t)}`),
                      0)
                  : (eq &&
                      Q.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${el(t)}`),
                    0)
              )
                ? t
                : null;
            },
          });
        function tI(e) {
          try {
            let t;
            try {
              t = e.exception.values[0].stacktrace.frames;
            } catch (e) {}
            return t
              ? (function (e = []) {
                  for (let t = e.length - 1; t >= 0; t--) {
                    let n = e[t];
                    if (
                      n &&
                      "<anonymous>" !== n.filename &&
                      "[native code]" !== n.filename
                    )
                      return n.filename || null;
                  }
                  return null;
                })(t)
              : null;
          } catch (t) {
            return eq && Q.error(`Cannot extract url for event ${el(e)}`), null;
          }
        }
        let tA = new WeakMap(),
          tk = () => ({
            name: "FunctionToString",
            setupOnce() {
              r = Function.prototype.toString;
              try {
                Function.prototype.toString = function (...e) {
                  let t = et(this),
                    n = tA.has(ek()) && void 0 !== t ? t : this;
                  return r.apply(n, e);
                };
              } catch (e) {}
            },
            setup(e) {
              tA.set(e, !0);
            },
          }),
          tP = () => {
            let e;
            return {
              name: "Dedupe",
              processEvent(t) {
                if (t.type) return t;
                try {
                  var n;
                  if (
                    (n = e) &&
                    ((function (e, t) {
                      let n = e.message,
                        r = t.message;
                      return !!(
                        (n || r) &&
                        (!n || r) &&
                        (n || !r) &&
                        n === r &&
                        tx(e, t) &&
                        tD(e, t)
                      );
                    })(t, n) ||
                      (function (e, t) {
                        let n = tL(t),
                          r = tL(e);
                        return !!(
                          n &&
                          r &&
                          n.type === r.type &&
                          n.value === r.value &&
                          tx(e, t) &&
                          tD(e, t)
                        );
                      })(t, n))
                  )
                    return (
                      eq &&
                        Q.warn(
                          "Event dropped due to being a duplicate of previously captured event."
                        ),
                      null
                    );
                } catch (e) {}
                return (e = t);
              },
            };
          };
        function tD(e, t) {
          let n = ej(e),
            r = ej(t);
          if (!n && !r) return !0;
          if ((n && !r) || (!n && r) || r.length !== n.length) return !1;
          for (let e = 0; e < r.length; e++) {
            let t = r[e],
              i = n[e];
            if (
              t.filename !== i.filename ||
              t.lineno !== i.lineno ||
              t.colno !== i.colno ||
              t.function !== i.function
            )
              return !1;
          }
          return !0;
        }
        function tx(e, t) {
          let n = e.fingerprint,
            r = t.fingerprint;
          if (!n && !r) return !0;
          if ((n && !r) || (!n && r)) return !1;
          try {
            return !(n.join("") !== r.join(""));
          } catch (e) {
            return !1;
          }
        }
        function tL(e) {
          return e.exception && e.exception.values && e.exception.values[0];
        }
        function tM() {
          if (!("fetch" in w)) return !1;
          try {
            return (
              new Headers(),
              new Request("http://www.example.com"),
              new Response(),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function tj(e) {
          return (
            e &&
            /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(
              e.toString()
            )
          );
        }
        let tU = {},
          tF = {};
        function t$(e, t) {
          (tU[e] = tU[e] || []), tU[e].push(t);
        }
        function tB(e, t) {
          tF[e] || (t(), (tF[e] = !0));
        }
        function tq(e, t) {
          let n = e && tU[e];
          if (n)
            for (let r of n)
              try {
                r(t);
              } catch (t) {
                W &&
                  Q.error(
                    `Error while triggering instrumentation handler.
Type: ${e}
Name: ${eM(r)}
Error:`,
                    t
                  );
              }
        }
        function tH(e) {
          let t = "history";
          t$(t, e), tB(t, tW);
        }
        function tW() {
          if (
            !(function () {
              let e = w.chrome,
                t = e && e.app && e.app.runtime,
                n =
                  "history" in w &&
                  !!w.history.pushState &&
                  !!w.history.replaceState;
              return !t && n;
            })()
          )
            return;
          let e = w.onpopstate;
          function t(e) {
            return function (...t) {
              let n = t.length > 2 ? t[2] : void 0;
              if (n) {
                let e = i,
                  t = String(n);
                (i = t), tq("history", { from: e, to: t });
              }
              return e.apply(this, t);
            };
          }
          (w.onpopstate = function (...t) {
            let n = w.location.href,
              r = i;
            if (((i = n), tq("history", { from: r, to: n }), e))
              try {
                return e.apply(this, t);
              } catch (e) {}
          }),
            J(w.history, "pushState", t),
            J(w.history, "replaceState", t);
        }
        let tz =
          /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function tG(e, t = !1) {
          let {
            host: n,
            path: r,
            pass: i,
            port: s,
            projectId: o,
            protocol: a,
            publicKey: l,
          } = e;
          return `${a}://${l}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${
            r ? `${r}/` : r
          }${o}`;
        }
        function tV(e) {
          let t = tz.exec(e);
          if (!t) {
            V(() => {
              console.error(`Invalid Sentry Dsn: ${e}`);
            });
            return;
          }
          let [n, r, i = "", s, o = "", a] = t.slice(1),
            l = "",
            c = a,
            u = c.split("/");
          if (
            (u.length > 1 && ((l = u.slice(0, -1).join("/")), (c = u.pop())), c)
          ) {
            let e = c.match(/^\d+/);
            e && (c = e[0]);
          }
          return tQ({
            host: s,
            pass: i,
            path: l,
            projectId: c,
            port: o,
            protocol: n,
            publicKey: r,
          });
        }
        function tQ(e) {
          return {
            protocol: e.protocol,
            publicKey: e.publicKey || "",
            pass: e.pass || "",
            host: e.host,
            port: e.port || "",
            path: e.path || "",
            projectId: e.projectId,
          };
        }
        function tY(e, t = []) {
          return [e, t];
        }
        function tK(e, t) {
          for (let n of e[1]) {
            let e = n[0].type;
            if (t(n, e)) return !0;
          }
          return !1;
        }
        function tX(e) {
          return w.__SENTRY__ && w.__SENTRY__.encodePolyfill
            ? w.__SENTRY__.encodePolyfill(e)
            : new TextEncoder().encode(e);
        }
        let tJ = {
          session: "session",
          sessions: "session",
          attachment: "attachment",
          transaction: "transaction",
          event: "error",
          client_report: "internal",
          user_report: "default",
          profile: "profile",
          profile_chunk: "profile",
          replay_event: "replay",
          replay_recording: "replay",
          check_in: "monitor",
          feedback: "feedback",
          span: "span",
          statsd: "metric_bucket",
        };
        function tZ(e) {
          if (!e || !e.sdk) return;
          let { name: t, version: n } = e.sdk;
          return { name: t, version: n };
        }
        function t0(e, t, n, r) {
          let i =
            e.sdkProcessingMetadata &&
            e.sdkProcessingMetadata.dynamicSamplingContext;
          return {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t && { sdk: t }),
            ...(!!n && r && { dsn: tG(r) }),
            ...(i && { trace: es({ ...i }) }),
          };
        }
        class t1 extends Error {
          constructor(e, t = "warn") {
            super(e),
              (this.message = e),
              (this.name = new.target.prototype.constructor.name),
              Object.setPrototypeOf(this, new.target.prototype),
              (this.logLevel = t);
          }
        }
        function t2(e) {
          if ("boolean" == typeof e) return Number(e);
          let t = "string" == typeof e ? parseFloat(e) : e;
          if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
            eq &&
              Q.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
                  e
                )} of type ${JSON.stringify(typeof e)}.`
              );
            return;
          }
          return t;
        }
        let t3 = "Not capturing exception because it's already been captured.";
        class t5 {
          constructor(e) {
            if (
              ((this._options = e),
              (this._integrations = {}),
              (this._numProcessing = 0),
              (this._outcomes = {}),
              (this._hooks = {}),
              (this._eventProcessors = []),
              e.dsn
                ? (this._dsn = (function (e) {
                    let t = "string" == typeof e ? tV(e) : tQ(e);
                    if (
                      t &&
                      (function (e) {
                        if (!W) return !0;
                        let { port: t, projectId: n, protocol: r } = e;
                        return (
                          !["protocol", "publicKey", "host", "projectId"].find(
                            (t) =>
                              !e[t] &&
                              (Q.error(`Invalid Sentry Dsn: ${t} missing`), !0)
                          ) &&
                          (n.match(/^\d+$/)
                            ? "http" === r || "https" === r
                              ? !(t && isNaN(parseInt(t, 10))) ||
                                (Q.error(
                                  `Invalid Sentry Dsn: Invalid port ${t}`
                                ),
                                !1)
                              : (Q.error(
                                  `Invalid Sentry Dsn: Invalid protocol ${r}`
                                ),
                                !1)
                            : (Q.error(
                                `Invalid Sentry Dsn: Invalid projectId ${n}`
                              ),
                              !1))
                        );
                      })(t)
                    )
                      return t;
                  })(e.dsn))
                : eq && Q.warn("No DSN provided, client will not send events."),
              this._dsn)
            ) {
              var t, n, r, i;
              let s =
                ((t = this._dsn),
                (n = e.tunnel),
                (r = e._metadata ? e._metadata.sdk : void 0),
                n ||
                  `${(function (e) {
                    let t = e.protocol ? `${e.protocol}:` : "",
                      n = e.port ? `:${e.port}` : "";
                    return `${t}//${e.host}${n}${
                      e.path ? `/${e.path}` : ""
                    }/api/`;
                  })(t)}${t.projectId}/envelope/?${Object.keys(
                    (i = {
                      sentry_key: t.publicKey,
                      sentry_version: "7",
                      ...(r && { sentry_client: `${r.name}/${r.version}` }),
                    })
                  )
                    .map(
                      (e) =>
                        `${encodeURIComponent(e)}=${encodeURIComponent(i[e])}`
                    )
                    .join("&")}`);
              this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: s,
              });
            }
          }
          captureException(e, t, n) {
            let r = eo();
            if (ed(e)) return eq && Q.log(t3), r;
            let i = { event_id: r, ...t };
            return (
              this._process(
                this.eventFromException(e, i).then((e) =>
                  this._captureEvent(e, i, n)
                )
              ),
              i.event_id
            );
          }
          captureMessage(e, t, n, r) {
            let i = { event_id: eo(), ...n },
              s = L(e) ? e : String(e),
              o = M(e)
                ? this.eventFromMessage(s, t, i)
                : this.eventFromException(e, i);
            return (
              this._process(o.then((e) => this._captureEvent(e, i, r))),
              i.event_id
            );
          }
          captureEvent(e, t, n) {
            let r = eo();
            if (t && t.originalException && ed(t.originalException))
              return eq && Q.log(t3), r;
            let i = { event_id: r, ...t },
              s = (e.sdkProcessingMetadata || {}).capturedSpanScope;
            return this._process(this._captureEvent(e, i, s || n)), i.event_id;
          }
          captureSession(e) {
            "string" != typeof e.release
              ? eq &&
                Q.warn(
                  "Discarded session because of missing or non-string release"
                )
              : (this.sendSession(e), eg(e, { init: !1 }));
          }
          getDsn() {
            return this._dsn;
          }
          getOptions() {
            return this._options;
          }
          getSdkMetadata() {
            return this._options._metadata;
          }
          getTransport() {
            return this._transport;
          }
          flush(e) {
            let t = this._transport;
            return t
              ? (this.emit("flush"),
                this._isClientDoneProcessing(e).then((n) =>
                  t.flush(e).then((e) => n && e)
                ))
              : eF(!0);
          }
          close(e) {
            return this.flush(e).then(
              (e) => ((this.getOptions().enabled = !1), this.emit("close"), e)
            );
          }
          getEventProcessors() {
            return this._eventProcessors;
          }
          addEventProcessor(e) {
            this._eventProcessors.push(e);
          }
          init() {
            this._isEnabled() && this._setupIntegrations();
          }
          getIntegrationByName(e) {
            return this._integrations[e];
          }
          addIntegration(e) {
            let t = this._integrations[e.name];
            tR(this, e, this._integrations), t || tO(this, [e]);
          }
          sendEvent(e, t = {}) {
            this.emit("beforeSendEvent", e, t);
            let n = (function (e, t, n, r) {
              var i;
              let s = tZ(n),
                o = e.type && "replay_event" !== e.type ? e.type : "event";
              (i = n && n.sdk) &&
                ((e.sdk = e.sdk || {}),
                (e.sdk.name = e.sdk.name || i.name),
                (e.sdk.version = e.sdk.version || i.version),
                (e.sdk.integrations = [
                  ...(e.sdk.integrations || []),
                  ...(i.integrations || []),
                ]),
                (e.sdk.packages = [
                  ...(e.sdk.packages || []),
                  ...(i.packages || []),
                ]));
              let a = t0(e, s, r, t);
              return delete e.sdkProcessingMetadata, tY(a, [[{ type: o }, e]]);
            })(e, this._dsn, this._options._metadata, this._options.tunnel);
            for (let e of t.attachments || [])
              n = (function (e, t) {
                let [n, r] = e;
                return [n, [...r, t]];
              })(
                n,
                (function (e) {
                  let t = "string" == typeof e.data ? tX(e.data) : e.data;
                  return [
                    es({
                      type: "attachment",
                      length: t.length,
                      filename: e.filename,
                      content_type: e.contentType,
                      attachment_type: e.attachmentType,
                    }),
                    t,
                  ];
                })(e)
              );
            let r = this.sendEnvelope(n);
            r && r.then((t) => this.emit("afterSendEvent", e, t), null);
          }
          sendSession(e) {
            let t = (function (e, t, n, r) {
              let i = tZ(n);
              return tY(
                {
                  sent_at: new Date().toISOString(),
                  ...(i && { sdk: i }),
                  ...(!!r && t && { dsn: tG(t) }),
                },
                [
                  "aggregates" in e
                    ? [{ type: "sessions" }, e]
                    : [{ type: "session" }, e.toJSON()],
                ]
              );
            })(e, this._dsn, this._options._metadata, this._options.tunnel);
            this.sendEnvelope(t);
          }
          recordDroppedEvent(e, t, n) {
            if (this._options.sendClientReports) {
              let n = `${e}:${t}`;
              eq && Q.log(`Adding outcome: "${n}"`),
                (this._outcomes[n] = this._outcomes[n] + 1 || 1);
            }
          }
          on(e, t) {
            this._hooks[e] || (this._hooks[e] = []), this._hooks[e].push(t);
          }
          emit(e, ...t) {
            this._hooks[e] && this._hooks[e].forEach((e) => e(...t));
          }
          sendEnvelope(e) {
            return (this.emit("beforeEnvelope", e),
            this._isEnabled() && this._transport)
              ? this._transport
                  .send(e)
                  .then(
                    null,
                    (e) => (eq && Q.error("Error while sending event:", e), e)
                  )
              : (eq && Q.error("Transport disabled"), eF({}));
          }
          _setupIntegrations() {
            let { integrations: e } = this._options;
            (this._integrations = (function (e, t) {
              let n = {};
              return (
                t.forEach((t) => {
                  t && tR(e, t, n);
                }),
                n
              );
            })(this, e)),
              tO(this, e);
          }
          _updateSessionFromEvent(e, t) {
            let n = !1,
              r = !1,
              i = t.exception && t.exception.values;
            if (i)
              for (let e of ((r = !0), i)) {
                let t = e.mechanism;
                if (t && !1 === t.handled) {
                  n = !0;
                  break;
                }
              }
            let s = "ok" === e.status;
            ((s && 0 === e.errors) || (s && n)) &&
              (eg(e, {
                ...(n && { status: "crashed" }),
                errors: e.errors || Number(r || n),
              }),
              this.captureSession(e));
          }
          _isClientDoneProcessing(e) {
            return new eB((t) => {
              let n = 0,
                r = setInterval(() => {
                  0 == this._numProcessing
                    ? (clearInterval(r), t(!0))
                    : ((n += 1), e && n >= e && (clearInterval(r), t(!1)));
                }, 1);
            });
          }
          _isEnabled() {
            return (
              !1 !== this.getOptions().enabled && void 0 !== this._transport
            );
          }
          _prepareEvent(e, t, n, r = eI()) {
            let i = this.getOptions(),
              s = Object.keys(this._integrations);
            return (
              !t.integrations && s.length > 0 && (t.integrations = s),
              this.emit("preprocessEvent", e, t),
              e.type || r.setLastEventId(e.event_id || t.event_id),
              tp(i, e, t, n, this, r).then((e) => {
                if (null === e) return e;
                let t = {
                  ...r.getPropagationContext(),
                  ...(n ? n.getPropagationContext() : void 0),
                };
                if (!(e.contexts && e.contexts.trace) && t) {
                  let { traceId: n, spanId: r, parentSpanId: i, dsc: s } = t;
                  e.contexts = {
                    trace: es({ trace_id: n, span_id: r, parent_span_id: i }),
                    ...e.contexts,
                  };
                  let o = s || tc(n, this);
                  e.sdkProcessingMetadata = {
                    dynamicSamplingContext: o,
                    ...e.sdkProcessingMetadata,
                  };
                }
                return e;
              })
            );
          }
          _captureEvent(e, t = {}, n) {
            return this._processEvent(e, t, n).then(
              (e) => e.event_id,
              (e) => {
                eq && ("log" === e.logLevel ? Q.log(e.message) : Q.warn(e));
              }
            );
          }
          _processEvent(e, t, n) {
            let r = this.getOptions(),
              { sampleRate: i } = r,
              s = t6(e),
              o = t4(e),
              a = e.type || "error",
              l = `before send for type \`${a}\``,
              c = void 0 === i ? void 0 : t2(i);
            if (o && "number" == typeof c && Math.random() > c)
              return (
                this.recordDroppedEvent("sample_rate", "error", e),
                e$(
                  new t1(
                    `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
                    "log"
                  )
                )
              );
            let u = "replay_event" === a ? "replay" : a,
              d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
            return this._prepareEvent(e, t, n, d)
              .then((n) => {
                if (null === n)
                  throw (
                    (this.recordDroppedEvent("event_processor", u, e),
                    new t1(
                      "An event processor returned `null`, will not send event.",
                      "log"
                    ))
                  );
                return t.data && !0 === t.data.__sentry__
                  ? n
                  : (function (e, t) {
                      let n = `${t} must return \`null\` or a valid event.`;
                      if (F(e))
                        return e.then(
                          (e) => {
                            if (!j(e) && null !== e) throw new t1(n);
                            return e;
                          },
                          (e) => {
                            throw new t1(`${t} rejected with ${e}`);
                          }
                        );
                      if (!j(e) && null !== e) throw new t1(n);
                      return e;
                    })(
                      (function (e, t, n) {
                        let {
                          beforeSend: r,
                          beforeSendTransaction: i,
                          beforeSendSpan: s,
                        } = e;
                        if (t4(t) && r) return r(t, n);
                        if (t6(t)) {
                          if (t.spans && s) {
                            let e = [];
                            for (let n of t.spans) {
                              let t = s(n);
                              t && e.push(t);
                            }
                            t.spans = e;
                          }
                          if (i) return i(t, n);
                        }
                        return t;
                      })(r, n, t),
                      l
                    );
              })
              .then((r) => {
                if (null === r)
                  throw (
                    (this.recordDroppedEvent("before_send", u, e),
                    new t1(
                      `${l} returned \`null\`, will not send event.`,
                      "log"
                    ))
                  );
                let i = n && n.getSession();
                !s && i && this._updateSessionFromEvent(i, r);
                let o = r.transaction_info;
                return (
                  s &&
                    o &&
                    r.transaction !== e.transaction &&
                    (r.transaction_info = { ...o, source: "custom" }),
                  this.sendEvent(r, t),
                  r
                );
              })
              .then(null, (e) => {
                if (e instanceof t1) throw e;
                throw (
                  (this.captureException(e, {
                    data: { __sentry__: !0 },
                    originalException: e,
                  }),
                  new t1(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`))
                );
              });
          }
          _process(e) {
            this._numProcessing++,
              e.then(
                (e) => (this._numProcessing--, e),
                (e) => (this._numProcessing--, e)
              );
          }
          _clearOutcomes() {
            let e = this._outcomes;
            return (
              (this._outcomes = {}),
              Object.keys(e).map((t) => {
                let [n, r] = t.split(":");
                return { reason: n, category: r, quantity: e[t] };
              })
            );
          }
        }
        function t4(e) {
          return void 0 === e.type;
        }
        function t6(e) {
          return "transaction" === e.type;
        }
        let t8 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function t9(e, t) {
          let n = ne(e, t),
            r = {
              type: t && t.name,
              value: (function (e) {
                let t = e && e.message;
                return t
                  ? t.error && "string" == typeof t.error.message
                    ? t.error.message
                    : t
                  : "No error message";
              })(t),
            };
          return (
            n.length && (r.stacktrace = { frames: n }),
            void 0 === r.type &&
              "" === r.value &&
              (r.value = "Unrecoverable error caught"),
            r
          );
        }
        function t7(e, t) {
          return { exception: { values: [t9(e, t)] } };
        }
        function ne(e, t) {
          let n = t.stacktrace || t.stack || "",
            r = t && nt.test(t.message) ? 1 : 0,
            i = "number" == typeof t.framesToPop ? t.framesToPop : 0;
          try {
            return e(n, r, i);
          } catch (e) {}
          return [];
        }
        let nt = /Minified React error #\d+;/i;
        function nn(e, t, n, r, i) {
          let s;
          if (P(t) && t.error) return t7(e, t.error);
          if (D(t) || k(t, "DOMException")) {
            if ("stack" in t) s = t7(e, t);
            else {
              let i = t.name || (D(t) ? "DOMError" : "DOMException"),
                o = t.message ? `${i}: ${t.message}` : i;
              ec((s = nr(e, o, n, r)), o);
            }
            return (
              "code" in t &&
                (s.tags = { ...s.tags, "DOMException.code": `${t.code}` }),
              s
            );
          }
          return A(t)
            ? t7(e, t)
            : (j(t) || U(t)
                ? eu(
                    (s = (function (e, t, n, r) {
                      let i = ek(),
                        s = i && i.getOptions().normalizeDepth,
                        o = (function (e) {
                          for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                              let n = e[t];
                              if (n instanceof Error) return n;
                            }
                        })(t),
                        a = {
                          __serialized__: (function e(t, n = 3, r = 102400) {
                            let i = eU(t, n);
                            return ~-encodeURI(JSON.stringify(i)).split(/%..|./)
                              .length > r
                              ? e(t, n - 1, r)
                              : i;
                          })(t, s),
                        };
                      if (o)
                        return { exception: { values: [t9(e, o)] }, extra: a };
                      let l = {
                        exception: {
                          values: [
                            {
                              type: U(t)
                                ? t.constructor.name
                                : r
                                ? "UnhandledRejection"
                                : "Error",
                              value: (function (
                                e,
                                { isUnhandledRejection: t }
                              ) {
                                let n = (function (e, t = 40) {
                                    let n = Object.keys(en(e));
                                    if ((n.sort(), !n.length))
                                      return "[object has no keys]";
                                    if (n[0].length >= t) return Y(n[0], t);
                                    for (let e = n.length; e > 0; e--) {
                                      let r = n.slice(0, e).join(", ");
                                      if (!(r.length > t)) {
                                        if (e === n.length) return r;
                                        return Y(r, t);
                                      }
                                    }
                                    return "";
                                  })(e),
                                  r = t ? "promise rejection" : "exception";
                                if (P(e))
                                  return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
                                if (U(e)) {
                                  let t = (function (e) {
                                    try {
                                      let t = Object.getPrototypeOf(e);
                                      return t ? t.constructor.name : void 0;
                                    } catch (e) {}
                                  })(e);
                                  return `Event \`${t}\` (type=${e.type}) captured as ${r}`;
                                }
                                return `Object captured as ${r} with keys: ${n}`;
                              })(t, { isUnhandledRejection: r }),
                            },
                          ],
                        },
                        extra: a,
                      };
                      if (n) {
                        let t = ne(e, n);
                        t.length &&
                          (l.exception.values[0].stacktrace = { frames: t });
                      }
                      return l;
                    })(e, t, n, i)),
                    { synthetic: !0 }
                  )
                : (ec((s = nr(e, t, n, r)), `${t}`, void 0),
                  eu(s, { synthetic: !0 })),
              s);
        }
        function nr(e, t, n, r) {
          let i = {};
          if (r && n) {
            let r = ne(e, n);
            r.length &&
              (i.exception = {
                values: [{ value: t, stacktrace: { frames: r } }],
              });
          }
          if (L(t)) {
            let {
              __sentry_template_string__: e,
              __sentry_template_values__: n,
            } = t;
            return (i.logentry = { message: e, params: n }), i;
          }
          return (i.message = t), i;
        }
        let ni = 0;
        function ns(e, t = {}, n) {
          if ("function" != typeof e) return e;
          try {
            let t = e.__sentry_wrapped__;
            if (t) return t;
            if (et(e)) return e;
          } catch (t) {
            return e;
          }
          let r = function () {
            let r = Array.prototype.slice.call(arguments);
            try {
              n && "function" == typeof n && n.apply(this, arguments);
              let i = r.map((e) => ns(e, t));
              return e.apply(this, i);
            } catch (e) {
              throw (
                (ni++,
                setTimeout(() => {
                  ni--;
                }),
                eA((n) => {
                  n.addEventProcessor(
                    (e) => (
                      t.mechanism &&
                        (ec(e, void 0, void 0), eu(e, t.mechanism)),
                      (e.extra = { ...e.extra, arguments: r }),
                      e
                    )
                  ),
                    t_(e);
                }),
                e)
              );
            }
          };
          try {
            for (let t in e)
              Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          } catch (e) {}
          ee(r, e), Z(e, "__sentry_wrapped__", r);
          try {
            Object.getOwnPropertyDescriptor(r, "name").configurable &&
              Object.defineProperty(r, "name", { get: () => e.name });
          } catch (e) {}
          return r;
        }
        class no extends t5 {
          constructor(e) {
            let t = { parentSpanIsAlwaysRootSpan: !0, ...e };
            S(t, "browser", ["browser"], w.SENTRY_SDK_SOURCE || "npm"),
              super(t),
              t.sendClientReports &&
                w.document &&
                w.document.addEventListener("visibilitychange", () => {
                  "hidden" === w.document.visibilityState &&
                    this._flushOutcomes();
                });
          }
          eventFromException(e, t) {
            return (function (e, t, n, r) {
              let i = nn(e, t, (n && n.syntheticException) || void 0, r);
              return (
                eu(i),
                (i.level = "error"),
                n && n.event_id && (i.event_id = n.event_id),
                eF(i)
              );
            })(this._options.stackParser, e, t, this._options.attachStacktrace);
          }
          eventFromMessage(e, t = "info", n) {
            return (function (e, t, n = "info", r, i) {
              let s = nr(e, t, (r && r.syntheticException) || void 0, i);
              return (
                (s.level = n),
                r && r.event_id && (s.event_id = r.event_id),
                eF(s)
              );
            })(
              this._options.stackParser,
              e,
              t,
              n,
              this._options.attachStacktrace
            );
          }
          captureUserFeedback(e) {
            if (!this._isEnabled()) {
              t8 && Q.warn("SDK not enabled, will not capture user feedback.");
              return;
            }
            let t = (function (e, { metadata: t, tunnel: n, dsn: r }) {
              return tY(
                {
                  event_id: e.event_id,
                  sent_at: new Date().toISOString(),
                  ...(t &&
                    t.sdk && {
                      sdk: { name: t.sdk.name, version: t.sdk.version },
                    }),
                  ...(!!n && !!r && { dsn: tG(r) }),
                },
                [[{ type: "user_report" }, e]]
              );
            })(e, {
              metadata: this.getSdkMetadata(),
              dsn: this.getDsn(),
              tunnel: this.getOptions().tunnel,
            });
            this.sendEnvelope(t);
          }
          _prepareEvent(e, t, n) {
            return (
              (e.platform = e.platform || "javascript"),
              super._prepareEvent(e, t, n)
            );
          }
          _flushOutcomes() {
            var e;
            let t = this._clearOutcomes();
            if (0 === t.length) {
              t8 && Q.log("No outcomes to send");
              return;
            }
            if (!this._dsn) {
              t8 && Q.log("No dsn provided, will not send outcomes");
              return;
            }
            t8 && Q.log("Sending outcomes:", t);
            let n = tY(
              (e = this._options.tunnel && tG(this._dsn)) ? { dsn: e } : {},
              [
                [
                  { type: "client_report" },
                  { timestamp: ef(), discarded_events: t },
                ],
              ]
            );
            this.sendEnvelope(n);
          }
        }
        function na(e) {
          t$("dom", e), tB("dom", nl);
        }
        function nl() {
          if (!w.document) return;
          let e = tq.bind(null, "dom"),
            t = nc(e, !0);
          w.document.addEventListener("click", t, !1),
            w.document.addEventListener("keypress", t, !1),
            ["EventTarget", "Node"].forEach((t) => {
              let n = w[t] && w[t].prototype;
              n &&
                n.hasOwnProperty &&
                n.hasOwnProperty("addEventListener") &&
                (J(n, "addEventListener", function (t) {
                  return function (n, r, i) {
                    if ("click" === n || "keypress" == n)
                      try {
                        let r = (this.__sentry_instrumentation_handlers__ =
                            this.__sentry_instrumentation_handlers__ || {}),
                          s = (r[n] = r[n] || { refCount: 0 });
                        if (!s.handler) {
                          let r = nc(e);
                          (s.handler = r), t.call(this, n, r, i);
                        }
                        s.refCount++;
                      } catch (e) {}
                    return t.call(this, n, r, i);
                  };
                }),
                J(n, "removeEventListener", function (e) {
                  return function (t, n, r) {
                    if ("click" === t || "keypress" == t)
                      try {
                        let n = this.__sentry_instrumentation_handlers__ || {},
                          i = n[t];
                        i &&
                          (i.refCount--,
                          i.refCount <= 0 &&
                            (e.call(this, t, i.handler, r),
                            (i.handler = void 0),
                            delete n[t]),
                          0 === Object.keys(n).length &&
                            delete this.__sentry_instrumentation_handlers__);
                      } catch (e) {}
                    return e.call(this, t, n, r);
                  };
                }));
            });
        }
        function nc(e, t = !1) {
          return (n) => {
            if (!n || n._sentryCaptured) return;
            let r = (function (e) {
              try {
                return e.target;
              } catch (e) {
                return null;
              }
            })(n);
            if (
              "keypress" === n.type &&
              (!r ||
                !r.tagName ||
                ("INPUT" !== r.tagName &&
                  "TEXTAREA" !== r.tagName &&
                  !r.isContentEditable))
            )
              return;
            Z(n, "_sentryCaptured", !0),
              r && !r._sentryId && Z(r, "_sentryId", eo());
            let i = "keypress" === n.type ? "input" : n.type;
            !(function (e) {
              if (e.type !== o) return !1;
              try {
                if (!e.target || e.target._sentryId !== a) return !1;
              } catch (e) {}
              return !0;
            })(n) &&
              (e({ event: n, name: i, global: t }),
              (o = n.type),
              (a = r ? r._sentryId : void 0)),
              clearTimeout(s),
              (s = w.setTimeout(() => {
                (a = void 0), (o = void 0);
              }, 1e3));
          };
        }
        let nu = "__sentry_xhr_v3__";
        function nd(e) {
          t$("xhr", e), tB("xhr", nh);
        }
        function nh() {
          if (!w.XMLHttpRequest) return;
          let e = XMLHttpRequest.prototype;
          J(e, "open", function (e) {
            return function (...t) {
              let n = 1e3 * em(),
                r = x(t[0]) ? t[0].toUpperCase() : void 0,
                i = (function (e) {
                  if (x(e)) return e;
                  try {
                    return e.toString();
                  } catch (e) {}
                })(t[1]);
              if (!r || !i) return e.apply(this, t);
              (this[nu] = { method: r, url: i, request_headers: {} }),
                "POST" === r &&
                  i.match(/sentry_key/) &&
                  (this.__sentry_own_request__ = !0);
              let s = () => {
                let e = this[nu];
                if (e && 4 === this.readyState) {
                  try {
                    e.status_code = this.status;
                  } catch (e) {}
                  tq("xhr", {
                    endTimestamp: 1e3 * em(),
                    startTimestamp: n,
                    xhr: this,
                  });
                }
              };
              return (
                "onreadystatechange" in this &&
                "function" == typeof this.onreadystatechange
                  ? J(this, "onreadystatechange", function (e) {
                      return function (...t) {
                        return s(), e.apply(this, t);
                      };
                    })
                  : this.addEventListener("readystatechange", s),
                J(this, "setRequestHeader", function (e) {
                  return function (...t) {
                    let [n, r] = t,
                      i = this[nu];
                    return (
                      i &&
                        x(n) &&
                        x(r) &&
                        (i.request_headers[n.toLowerCase()] = r),
                      e.apply(this, t)
                    );
                  };
                }),
                e.apply(this, t)
              );
            };
          }),
            J(e, "send", function (e) {
              return function (...t) {
                let n = this[nu];
                return (
                  n &&
                    (void 0 !== t[0] && (n.body = t[0]),
                    tq("xhr", { startTimestamp: 1e3 * em(), xhr: this })),
                  e.apply(this, t)
                );
              };
            });
        }
        function np(e, t) {
          let n = ek(),
            r = eI();
          if (!n) return;
          let { beforeBreadcrumb: i = null, maxBreadcrumbs: s = 100 } =
            n.getOptions();
          if (s <= 0) return;
          let o = { timestamp: ef(), ...e },
            a = i ? V(() => i(o, t)) : o;
          null !== a &&
            (n.emit && n.emit("beforeAddBreadcrumb", a, t),
            r.addBreadcrumb(a, s));
        }
        function nf() {
          "console" in w &&
            z.forEach(function (e) {
              e in w.console &&
                J(w.console, e, function (t) {
                  return (
                    (G[e] = t),
                    function (...t) {
                      tq("console", { args: t, level: e });
                      let n = G[e];
                      n && n.apply(w.console, t);
                    }
                  );
                });
            });
        }
        function nm(e) {
          let t = "fetch";
          t$(t, e), tB(t, n_);
        }
        function n_() {
          (function () {
            if ("string" == typeof EdgeRuntime) return !0;
            if (!tM()) return !1;
            if (tj(w.fetch)) return !0;
            let e = !1,
              t = w.document;
            if (t && "function" == typeof t.createElement)
              try {
                let n = t.createElement("iframe");
                (n.hidden = !0),
                  t.head.appendChild(n),
                  n.contentWindow &&
                    n.contentWindow.fetch &&
                    (e = tj(n.contentWindow.fetch)),
                  t.head.removeChild(n);
              } catch (e) {
                W &&
                  Q.warn(
                    "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                    e
                  );
              }
            return e;
          })() &&
            J(w, "fetch", function (e) {
              return function (...t) {
                let { method: n, url: r } = (function (e) {
                    if (0 === e.length) return { method: "GET", url: "" };
                    if (2 === e.length) {
                      let [t, n] = e;
                      return {
                        url: ny(t),
                        method: ng(n, "method")
                          ? String(n.method).toUpperCase()
                          : "GET",
                      };
                    }
                    let t = e[0];
                    return {
                      url: ny(t),
                      method: ng(t, "method")
                        ? String(t.method).toUpperCase()
                        : "GET",
                    };
                  })(t),
                  i = {
                    args: t,
                    fetchData: { method: n, url: r },
                    startTimestamp: 1e3 * em(),
                  };
                tq("fetch", { ...i });
                let s = Error().stack;
                return e.apply(w, t).then(
                  (e) => (
                    tq("fetch", {
                      ...i,
                      endTimestamp: 1e3 * em(),
                      response: e,
                    }),
                    e
                  ),
                  (e) => {
                    throw (
                      (tq("fetch", {
                        ...i,
                        endTimestamp: 1e3 * em(),
                        error: e,
                      }),
                      A(e) &&
                        void 0 === e.stack &&
                        ((e.stack = s), Z(e, "framesToPop", 1)),
                      e)
                    );
                  }
                );
              };
            });
        }
        function ng(e, t) {
          return !!e && "object" == typeof e && !!e[t];
        }
        function ny(e) {
          return "string" == typeof e
            ? e
            : e
            ? ng(e, "url")
              ? e.url
              : e.toString
              ? e.toString()
              : ""
            : "";
        }
        let nv = ["fatal", "error", "warning", "log", "info", "debug"];
        function nE(e) {
          if (!e) return {};
          let t = e.match(
            /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
          );
          if (!t) return {};
          let n = t[6] || "",
            r = t[8] || "";
          return {
            host: t[4],
            path: t[5],
            protocol: t[2],
            search: n,
            hash: r,
            relative: t[5] + n + r,
          };
        }
        let nb = (e = {}) => {
            let t = {
              console: !0,
              dom: !0,
              fetch: !0,
              history: !0,
              sentry: !0,
              xhr: !0,
              ...e,
            };
            return {
              name: "Breadcrumbs",
              setup(e) {
                var n;
                t.console &&
                  (function (e) {
                    let t = "console";
                    t$(t, e), tB(t, nf);
                  })(function (t) {
                    var n;
                    if (ek() !== e) return;
                    let r = {
                      category: "console",
                      data: { arguments: t.args, logger: "console" },
                      level:
                        "warn" === (n = t.level)
                          ? "warning"
                          : nv.includes(n)
                          ? n
                          : "log",
                      message: K(t.args, " "),
                    };
                    if ("assert" === t.level) {
                      if (!1 !== t.args[0]) return;
                      (r.message = `Assertion failed: ${
                        K(t.args.slice(1), " ") || "console.assert"
                      }`),
                        (r.data.arguments = t.args.slice(1));
                    }
                    np(r, { input: t.args, level: t.level });
                  }),
                  t.dom &&
                    na(
                      ((n = t.dom),
                      function (t) {
                        let r, i;
                        if (ek() !== e) return;
                        let s =
                            "object" == typeof n
                              ? n.serializeAttribute
                              : void 0,
                          o =
                            "object" == typeof n &&
                            "number" == typeof n.maxStringLength
                              ? n.maxStringLength
                              : void 0;
                        o &&
                          o > 1024 &&
                          (t8 &&
                            Q.warn(
                              `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`
                            ),
                          (o = 1024)),
                          "string" == typeof s && (s = [s]);
                        try {
                          let e = t.event,
                            n = e && e.target ? e.target : e;
                          (r = q(n, { keyAttrs: s, maxStringLength: o })),
                            (i = H(n));
                        } catch (e) {
                          r = "<unknown>";
                        }
                        if (0 === r.length) return;
                        let a = { category: `ui.${t.name}`, message: r };
                        i && (a.data = { "ui.component_name": i }),
                          np(a, {
                            event: t.event,
                            name: t.name,
                            global: t.global,
                          });
                      })
                    ),
                  t.xhr &&
                    nd(function (t) {
                      if (ek() !== e) return;
                      let { startTimestamp: n, endTimestamp: r } = t,
                        i = t.xhr[nu];
                      if (!n || !r || !i) return;
                      let { method: s, url: o, status_code: a, body: l } = i;
                      np(
                        {
                          category: "xhr",
                          data: { method: s, url: o, status_code: a },
                          type: "http",
                        },
                        {
                          xhr: t.xhr,
                          input: l,
                          startTimestamp: n,
                          endTimestamp: r,
                        }
                      );
                    }),
                  t.fetch &&
                    nm(function (t) {
                      if (ek() !== e) return;
                      let { startTimestamp: n, endTimestamp: r } = t;
                      if (
                        !(
                          !r ||
                          (t.fetchData.url.match(/sentry_key/) &&
                            "POST" === t.fetchData.method)
                        )
                      ) {
                        if (t.error)
                          np(
                            {
                              category: "fetch",
                              data: t.fetchData,
                              level: "error",
                              type: "http",
                            },
                            {
                              data: t.error,
                              input: t.args,
                              startTimestamp: n,
                              endTimestamp: r,
                            }
                          );
                        else {
                          let e = t.response;
                          np(
                            {
                              category: "fetch",
                              data: {
                                ...t.fetchData,
                                status_code: e && e.status,
                              },
                              type: "http",
                            },
                            {
                              input: t.args,
                              response: e,
                              startTimestamp: n,
                              endTimestamp: r,
                            }
                          );
                        }
                      }
                    }),
                  t.history &&
                    tH(function (t) {
                      if (ek() !== e) return;
                      let n = t.from,
                        r = t.to,
                        i = nE(w.location.href),
                        s = n ? nE(n) : void 0,
                        o = nE(r);
                      (s && s.path) || (s = i),
                        i.protocol === o.protocol &&
                          i.host === o.host &&
                          (r = o.relative),
                        i.protocol === s.protocol &&
                          i.host === s.host &&
                          (n = s.relative),
                        np({
                          category: "navigation",
                          data: { from: n, to: r },
                        });
                    }),
                  t.sentry &&
                    e.on("beforeSendEvent", function (t) {
                      ek() === e &&
                        np(
                          {
                            category: `sentry.${
                              "transaction" === t.type ? "transaction" : "event"
                            }`,
                            event_id: t.event_id,
                            level: t.level,
                            message: el(t),
                          },
                          { event: t }
                        );
                    });
              },
            };
          },
          nT = [
            "EventTarget",
            "Window",
            "Node",
            "ApplicationCache",
            "AudioTrackList",
            "BroadcastChannel",
            "ChannelMergerNode",
            "CryptoOperation",
            "EventSource",
            "FileReader",
            "HTMLUnknownElement",
            "IDBDatabase",
            "IDBRequest",
            "IDBTransaction",
            "KeyOperation",
            "MediaController",
            "MessagePort",
            "ModalWindow",
            "Notification",
            "SVGElementInstance",
            "Screen",
            "SharedWorker",
            "TextTrack",
            "TextTrackCue",
            "TextTrackList",
            "WebSocket",
            "WebSocketWorker",
            "Worker",
            "XMLHttpRequest",
            "XMLHttpRequestEventTarget",
            "XMLHttpRequestUpload",
          ],
          nS = (e = {}) => {
            let t = {
              XMLHttpRequest: !0,
              eventTarget: !0,
              requestAnimationFrame: !0,
              setInterval: !0,
              setTimeout: !0,
              ...e,
            };
            return {
              name: "BrowserApiErrors",
              setupOnce() {
                t.setTimeout && J(w, "setTimeout", nw),
                  t.setInterval && J(w, "setInterval", nw),
                  t.requestAnimationFrame && J(w, "requestAnimationFrame", nO),
                  t.XMLHttpRequest &&
                    "XMLHttpRequest" in w &&
                    J(XMLHttpRequest.prototype, "send", nR);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : nT).forEach(nN);
              },
            };
          };
        function nw(e) {
          return function (...t) {
            let n = t[0];
            return (
              (t[0] = ns(n, {
                mechanism: {
                  data: { function: eM(e) },
                  handled: !1,
                  type: "instrument",
                },
              })),
              e.apply(this, t)
            );
          };
        }
        function nO(e) {
          return function (t) {
            return e.apply(this, [
              ns(t, {
                mechanism: {
                  data: { function: "requestAnimationFrame", handler: eM(e) },
                  handled: !1,
                  type: "instrument",
                },
              }),
            ]);
          };
        }
        function nR(e) {
          return function (...t) {
            let n = this;
            return (
              ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(
                (e) => {
                  e in n &&
                    "function" == typeof n[e] &&
                    J(n, e, function (t) {
                      let n = {
                          mechanism: {
                            data: { function: e, handler: eM(t) },
                            handled: !1,
                            type: "instrument",
                          },
                        },
                        r = et(t);
                      return r && (n.mechanism.data.handler = eM(r)), ns(t, n);
                    });
                }
              ),
              e.apply(this, t)
            );
          };
        }
        function nN(e) {
          let t = w[e] && w[e].prototype;
          t &&
            t.hasOwnProperty &&
            t.hasOwnProperty("addEventListener") &&
            (J(t, "addEventListener", function (t) {
              return function (n, r, i) {
                try {
                  "function" == typeof r.handleEvent &&
                    (r.handleEvent = ns(r.handleEvent, {
                      mechanism: {
                        data: {
                          function: "handleEvent",
                          handler: eM(r),
                          target: e,
                        },
                        handled: !1,
                        type: "instrument",
                      },
                    }));
                } catch (e) {}
                return t.apply(this, [
                  n,
                  ns(r, {
                    mechanism: {
                      data: {
                        function: "addEventListener",
                        handler: eM(r),
                        target: e,
                      },
                      handled: !1,
                      type: "instrument",
                    },
                  }),
                  i,
                ]);
              };
            }),
            J(t, "removeEventListener", function (e) {
              return function (t, n, r) {
                try {
                  let i = n && n.__sentry_wrapped__;
                  i && e.call(this, t, i, r);
                } catch (e) {}
                return e.call(this, t, n, r);
              };
            }));
        }
        let nC = null;
        function nI(e) {
          let t = "error";
          t$(t, e), tB(t, nA);
        }
        function nA() {
          (nC = w.onerror),
            (w.onerror = function (e, t, n, r, i) {
              return (
                tq("error", { column: r, error: i, line: n, msg: e, url: t }),
                !!nC && !nC.__SENTRY_LOADER__ && nC.apply(this, arguments)
              );
            }),
            (w.onerror.__SENTRY_INSTRUMENTED__ = !0);
        }
        let nk = null;
        function nP(e) {
          let t = "unhandledrejection";
          t$(t, e), tB(t, nD);
        }
        function nD() {
          (nk = w.onunhandledrejection),
            (w.onunhandledrejection = function (e) {
              return (
                tq("unhandledrejection", e),
                !nk || !!nk.__SENTRY_LOADER__ || nk.apply(this, arguments)
              );
            }),
            (w.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
        }
        let nx = (e = {}) => {
          let t = { onerror: !0, onunhandledrejection: !0, ...e };
          return {
            name: "GlobalHandlers",
            setupOnce() {
              Error.stackTraceLimit = 50;
            },
            setup(e) {
              t.onerror &&
                (nI((t) => {
                  let { stackParser: n, attachStacktrace: r } = nM();
                  if (ek() !== e || ni > 0) return;
                  let { msg: i, url: s, line: o, column: a, error: l } = t,
                    c = (function (e, t, n, r) {
                      let i = (e.exception = e.exception || {}),
                        s = (i.values = i.values || []),
                        o = (s[0] = s[0] || {}),
                        a = (o.stacktrace = o.stacktrace || {}),
                        l = (a.frames = a.frames || []),
                        c = isNaN(parseInt(r, 10)) ? void 0 : r,
                        u = isNaN(parseInt(n, 10)) ? void 0 : n,
                        d =
                          x(t) && t.length > 0
                            ? t
                            : (function () {
                                try {
                                  return w.document.location.href;
                                } catch (e) {
                                  return "";
                                }
                              })();
                      return (
                        0 === l.length &&
                          l.push({
                            colno: c,
                            filename: d,
                            function: "?",
                            in_app: !0,
                            lineno: u,
                          }),
                        e
                      );
                    })(nn(n, l || i, void 0, r, !1), s, o, a);
                  (c.level = "error"),
                    tg(c, {
                      originalException: l,
                      mechanism: { handled: !1, type: "onerror" },
                    });
                }),
                nL("onerror")),
                t.onunhandledrejection &&
                  (nP((t) => {
                    let { stackParser: n, attachStacktrace: r } = nM();
                    if (ek() !== e || ni > 0) return;
                    let i = (function (e) {
                        if (M(e)) return e;
                        try {
                          if ("reason" in e) return e.reason;
                          if ("detail" in e && "reason" in e.detail)
                            return e.detail.reason;
                        } catch (e) {}
                        return e;
                      })(t),
                      s = M(i)
                        ? {
                            exception: {
                              values: [
                                {
                                  type: "UnhandledRejection",
                                  value: `Non-Error promise rejection captured with value: ${String(
                                    i
                                  )}`,
                                },
                              ],
                            },
                          }
                        : nn(n, i, void 0, r, !0);
                    (s.level = "error"),
                      tg(s, {
                        originalException: i,
                        mechanism: {
                          handled: !1,
                          type: "onunhandledrejection",
                        },
                      });
                  }),
                  nL("onunhandledrejection"));
            },
          };
        };
        function nL(e) {
          t8 && Q.log(`Global Handler attached: ${e}`);
        }
        function nM() {
          let e = ek();
          return (
            (e && e.getOptions()) || {
              stackParser: () => [],
              attachStacktrace: !1,
            }
          );
        }
        let nj = () => ({
          name: "HttpContext",
          preprocessEvent(e) {
            if (!w.navigator && !w.location && !w.document) return;
            let t =
                (e.request && e.request.url) || (w.location && w.location.href),
              { referrer: n } = w.document || {},
              { userAgent: r } = w.navigator || {},
              i = {
                ...(e.request && e.request.headers),
                ...(n && { Referer: n }),
                ...(r && { "User-Agent": r }),
              },
              s = { ...e.request, ...(t && { url: t }), headers: i };
            e.request = s;
          },
        });
        function nU(e, t) {
          (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
            (e.mechanism = {
              ...e.mechanism,
              ...("AggregateError" === e.type && { is_exception_group: !0 }),
              exception_id: t,
            });
        }
        function nF(e, t, n, r) {
          (e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
            (e.mechanism = {
              ...e.mechanism,
              type: "chained",
              source: t,
              exception_id: n,
              parent_id: r,
            });
        }
        let n$ = (e = {}) => {
          let t = e.limit || 5,
            n = e.key || "cause";
          return {
            name: "LinkedErrors",
            preprocessEvent(e, r, i) {
              let s = i.getOptions();
              !(function (e, t, n = 250, r, i, s, o) {
                if (
                  !s.exception ||
                  !s.exception.values ||
                  !o ||
                  !$(o.originalException, Error)
                )
                  return;
                let a =
                  s.exception.values.length > 0
                    ? s.exception.values[s.exception.values.length - 1]
                    : void 0;
                a &&
                  (s.exception.values = (function e(t, n, r, i, s, o, a, l) {
                    if (o.length >= r + 1) return o;
                    let c = [...o];
                    if ($(i[s], Error)) {
                      nU(a, l);
                      let o = t(n, i[s]),
                        u = c.length;
                      nF(o, s, u, l),
                        (c = e(t, n, r, i[s], s, [o, ...c], o, u));
                    }
                    return (
                      Array.isArray(i.errors) &&
                        i.errors.forEach((i, o) => {
                          if ($(i, Error)) {
                            nU(a, l);
                            let u = t(n, i),
                              d = c.length;
                            nF(u, `errors[${o}]`, d, l),
                              (c = e(t, n, r, i, s, [u, ...c], u, d));
                          }
                        }),
                      c
                    );
                  })(
                    e,
                    t,
                    i,
                    o.originalException,
                    r,
                    s.exception.values,
                    a,
                    0
                  ).map((e) => (e.value && (e.value = Y(e.value, n)), e)));
              })(t9, s.stackParser, s.maxValueLength, n, t, e, r);
            },
          };
        };
        function nB(e, t, n, r) {
          let i = {
            filename: e,
            function: "<anonymous>" === t ? "?" : t,
            in_app: !0,
          };
          return (
            void 0 !== n && (i.lineno = n), void 0 !== r && (i.colno = r), i
          );
        }
        let nq = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
          nH =
            /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
          nW = /\((\S*)(?::(\d+))(?::(\d+))\)/,
          nz =
            /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
          nG = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
          nV = ex(
            [
              30,
              (e) => {
                let t = nq.exec(e);
                if (t) {
                  let [, e, n, r] = t;
                  return nB(e, "?", +n, +r);
                }
                let n = nH.exec(e);
                if (n) {
                  if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = nW.exec(n[2]);
                    e && ((n[2] = e[1]), (n[3] = e[2]), (n[4] = e[3]));
                  }
                  let [e, t] = nQ(n[1] || "?", n[2]);
                  return nB(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
                }
              },
            ],
            [
              50,
              (e) => {
                let t = nz.exec(e);
                if (t) {
                  if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = nG.exec(t[3]);
                    e &&
                      ((t[1] = t[1] || "eval"),
                      (t[3] = e[1]),
                      (t[4] = e[2]),
                      (t[5] = ""));
                  }
                  let e = t[3],
                    n = t[1] || "?";
                  return (
                    ([n, e] = nQ(n, e)),
                    nB(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
                  );
                }
              },
            ]
          ),
          nQ = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension"),
              r = -1 !== e.indexOf("safari-web-extension");
            return n || r
              ? [
                  -1 !== e.indexOf("@") ? e.split("@")[0] : "?",
                  n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
                ]
              : [e, t];
          },
          nY = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
          nK = {};
        function nX(e) {
          let t = nK[e];
          if (t) return t;
          let n = w[e];
          if (tj(n)) return (nK[e] = n.bind(w));
          let r = w.document;
          if (r && "function" == typeof r.createElement)
            try {
              let t = r.createElement("iframe");
              (t.hidden = !0), r.head.appendChild(t);
              let i = t.contentWindow;
              i && i[e] && (n = i[e]), r.head.removeChild(t);
            } catch (t) {
              nY &&
                Q.warn(
                  `Could not create sandbox iframe for ${e} check, bailing to window.${e}: `,
                  t
                );
            }
          return n ? (nK[e] = n.bind(w)) : n;
        }
        function nJ(...e) {
          return nX("setTimeout")(...e);
        }
        function nZ(e, t, n = Date.now()) {
          return (e[t] || e.all || 0) > n;
        }
        function n0(e, { statusCode: t, headers: n }, r = Date.now()) {
          let i = { ...e },
            s = n && n["x-sentry-rate-limits"],
            o = n && n["retry-after"];
          if (s)
            for (let e of s.trim().split(",")) {
              let [t, n, , , s] = e.split(":", 5),
                o = parseInt(t, 10),
                a = (isNaN(o) ? 60 : o) * 1e3;
              if (n)
                for (let e of n.split(";"))
                  "metric_bucket" === e
                    ? (!s || s.split(";").includes("custom")) && (i[e] = r + a)
                    : (i[e] = r + a);
              else i.all = r + a;
            }
          else
            o
              ? (i.all =
                  r +
                  (function (e, t = Date.now()) {
                    let n = parseInt(`${e}`, 10);
                    if (!isNaN(n)) return 1e3 * n;
                    let r = Date.parse(`${e}`);
                    return isNaN(r) ? 6e4 : r - t;
                  })(o, r))
              : 429 === t && (i.all = r + 6e4);
          return i;
        }
        function n1(e, t) {
          if ("event" === t || "transaction" === t)
            return Array.isArray(e) ? e[1] : void 0;
        }
        function n2(e, t = nX("fetch")) {
          let n = 0,
            r = 0;
          return (function (
            e,
            t,
            n = (function (e) {
              let t = [];
              function n(e) {
                return t.splice(t.indexOf(e), 1)[0];
              }
              return {
                $: t,
                add: function (r) {
                  if (!(void 0 === e || t.length < e))
                    return e$(
                      new t1(
                        "Not adding Promise because buffer limit was reached."
                      )
                    );
                  let i = r();
                  return (
                    -1 === t.indexOf(i) && t.push(i),
                    i
                      .then(() => n(i))
                      .then(null, () => n(i).then(null, () => {})),
                    i
                  );
                },
                drain: function (e) {
                  return new eB((n, r) => {
                    let i = t.length;
                    if (!i) return n(!0);
                    let s = setTimeout(() => {
                      e && e > 0 && n(!1);
                    }, e);
                    t.forEach((e) => {
                      eF(e).then(() => {
                        --i || (clearTimeout(s), n(!0));
                      }, r);
                    });
                  });
                },
              };
            })(e.bufferSize || 64)
          ) {
            let r = {};
            return {
              send: function (i) {
                let s = [];
                if (
                  (tK(i, (t, n) => {
                    let i = tJ[n];
                    if (nZ(r, i)) {
                      let r = n1(t, n);
                      e.recordDroppedEvent("ratelimit_backoff", i, r);
                    } else s.push(t);
                  }),
                  0 === s.length)
                )
                  return eF({});
                let o = tY(i[0], s),
                  a = (t) => {
                    tK(o, (n, r) => {
                      let i = n1(n, r);
                      e.recordDroppedEvent(t, tJ[r], i);
                    });
                  };
                return n
                  .add(() =>
                    t({
                      body: (function (e) {
                        let [t, n] = e,
                          r = JSON.stringify(t);
                        function i(e) {
                          "string" == typeof r
                            ? (r = "string" == typeof e ? r + e : [tX(r), e])
                            : r.push("string" == typeof e ? tX(e) : e);
                        }
                        for (let e of n) {
                          let [t, n] = e;
                          if (
                            (i(`
${JSON.stringify(t)}
`),
                            "string" == typeof n || n instanceof Uint8Array)
                          )
                            i(n);
                          else {
                            let e;
                            try {
                              e = JSON.stringify(n);
                            } catch (t) {
                              e = JSON.stringify(eU(n));
                            }
                            i(e);
                          }
                        }
                        return "string" == typeof r
                          ? r
                          : (function (e) {
                              let t = new Uint8Array(
                                  e.reduce((e, t) => e + t.length, 0)
                                ),
                                n = 0;
                              for (let r of e) t.set(r, n), (n += r.length);
                              return t;
                            })(r);
                      })(o),
                    }).then(
                      (e) => (
                        void 0 !== e.statusCode &&
                          (e.statusCode < 200 || e.statusCode >= 300) &&
                          eq &&
                          Q.warn(
                            `Sentry responded with status code ${e.statusCode} to sent event.`
                          ),
                        (r = n0(r, e)),
                        e
                      ),
                      (e) => {
                        throw (a("network_error"), e);
                      }
                    )
                  )
                  .then(
                    (e) => e,
                    (e) => {
                      if (e instanceof t1)
                        return (
                          eq &&
                            Q.error(
                              "Skipped sending event because buffer is full."
                            ),
                          a("queue_overflow"),
                          eF({})
                        );
                      throw e;
                    }
                  );
              },
              flush: (e) => n.drain(e),
            };
          })(e, function (i) {
            let s = i.body.length;
            (n += s), r++;
            let o = {
              body: i.body,
              method: "POST",
              referrerPolicy: "origin",
              headers: e.headers,
              keepalive: n <= 6e4 && r < 15,
              ...e.fetchOptions,
            };
            if (!t)
              return (
                (nK.fetch = void 0), e$("No fetch implementation available")
              );
            try {
              return t(e.url, o).then(
                (e) => (
                  (n -= s),
                  r--,
                  {
                    statusCode: e.status,
                    headers: {
                      "x-sentry-rate-limits": e.headers.get(
                        "X-Sentry-Rate-Limits"
                      ),
                      "retry-after": e.headers.get("Retry-After"),
                    },
                  }
                )
              );
            } catch (e) {
              return (nK.fetch = void 0), (n -= s), r--, e$(e);
            }
          });
        }
        function n3(e) {
          return [tC(), tk(), nS(), nb(), nx(), n$(), tP(), nj()];
        }
        var n5,
          n4,
          n6,
          n8,
          n9,
          n7,
          re,
          rt,
          rn,
          rr,
          ri = n(83454);
        class rs {
          constructor(e = {}) {
            (this._traceId = e.traceId || eo()),
              (this._spanId = e.spanId || eo().substring(16));
          }
          spanContext() {
            return {
              spanId: this._spanId,
              traceId: this._traceId,
              traceFlags: 0,
            };
          }
          end(e) {}
          setAttribute(e, t) {
            return this;
          }
          setAttributes(e) {
            return this;
          }
          setStatus(e) {
            return this;
          }
          updateName(e) {
            return this;
          }
          isRecording() {
            return !1;
          }
          addEvent(e, t, n) {
            return this;
          }
        }
        function ro(e) {
          if (!e || 0 === e.length) return;
          let t = {};
          return (
            e.forEach((e) => {
              let n = e.attributes || {},
                r = n[eQ],
                i = n[eY];
              "string" == typeof r &&
                "number" == typeof i &&
                (t[e.name] = { value: i, unit: r });
            }),
            t
          );
        }
        let ra = "_sentryScope",
          rl = "_sentryIsolationScope";
        function rc(e) {
          return { scope: e[ra], isolationScope: e[rl] };
        }
        class ru {
          constructor(e = {}) {
            (this._traceId = e.traceId || eo()),
              (this._spanId = e.spanId || eo().substring(16)),
              (this._startTime = e.startTimestamp || em()),
              (this._attributes = {}),
              this.setAttributes({
                [eG]: "manual",
                [ez]: e.op,
                ...e.attributes,
              }),
              (this._name = e.name),
              e.parentSpanId && (this._parentSpanId = e.parentSpanId),
              "sampled" in e && (this._sampled = e.sampled),
              e.endTimestamp && (this._endTime = e.endTimestamp),
              (this._events = []),
              (this._isStandaloneSpan = e.isStandalone),
              this._endTime && this._onSpanEnded();
          }
          spanContext() {
            let { _spanId: e, _traceId: t, _sampled: n } = this;
            return { spanId: e, traceId: t, traceFlags: n ? 1 : 0 };
          }
          setAttribute(e, t) {
            void 0 === t
              ? delete this._attributes[e]
              : (this._attributes[e] = t);
          }
          setAttributes(e) {
            Object.keys(e).forEach((t) => this.setAttribute(t, e[t]));
          }
          updateStartTime(e) {
            this._startTime = e8(e);
          }
          setStatus(e) {
            return (this._status = e), this;
          }
          updateName(e) {
            return (this._name = e), this;
          }
          end(e) {
            this._endTime ||
              ((this._endTime = e8(e)),
              (function (e) {
                if (!eq) return;
                let {
                    description: t = "< unknown name >",
                    op: n = "< unknown op >",
                  } = e7(e),
                  { spanId: r } = e.spanContext(),
                  i = to(e) === e,
                  s = `[Tracing] Finishing "${n}" ${
                    i ? "root " : ""
                  }span "${t}" with ID ${r}`;
                Q.log(s);
              })(this),
              this._onSpanEnded());
          }
          getSpanJSON() {
            return es({
              data: this._attributes,
              description: this._name,
              op: this._attributes[ez],
              parent_span_id: this._parentSpanId,
              span_id: this._spanId,
              start_timestamp: this._startTime,
              status: tt(this._status),
              timestamp: this._endTime,
              trace_id: this._traceId,
              origin: this._attributes[eG],
              _metrics_summary: e5(this),
              profile_id: this._attributes["sentry.profile_id"],
              exclusive_time: this._attributes[eK],
              measurements: ro(this._events),
              is_segment:
                (this._isStandaloneSpan && to(this) === this) || void 0,
              segment_id: this._isStandaloneSpan
                ? to(this).spanContext().spanId
                : void 0,
            });
          }
          isRecording() {
            return !this._endTime && !!this._sampled;
          }
          addEvent(e, t, n) {
            eq && Q.log("[Tracing] Adding an event to span:", e);
            let r = rd(t) ? t : n || em(),
              i = rd(t) ? {} : t || {},
              s = { name: e, time: e8(r), attributes: i };
            return this._events.push(s), this;
          }
          isStandaloneSpan() {
            return !!this._isStandaloneSpan;
          }
          _onSpanEnded() {
            let e = ek();
            if (
              (e && e.emit("spanEnd", this),
              !(this._isStandaloneSpan || this === to(this)))
            )
              return;
            if (this._isStandaloneSpan) {
              (function (e) {
                let t = ek();
                if (!t) return;
                let n = e[1];
                if (!n || 0 === n.length) {
                  t.recordDroppedEvent("before_send", "span");
                  return;
                }
                let r = t.getTransport();
                r &&
                  r.send(e).then(null, (e) => {
                    eq && Q.error("Error while sending span:", e);
                  });
              })(
                (function (e, t) {
                  let n = tu(e[0]),
                    r = t && t.getDsn(),
                    i = t && t.getOptions().tunnel,
                    s = {
                      sent_at: new Date().toISOString(),
                      ...(!!n.trace_id && !!n.public_key && { trace: n }),
                      ...(!!i && r && { dsn: tG(r) }),
                    },
                    o = t && t.getOptions().beforeSendSpan,
                    a = o ? (e) => o(e7(e)) : (e) => e7(e),
                    l = [];
                  for (let t of e) {
                    let e = a(t);
                    e && l.push([{ type: "span" }, e]);
                  }
                  return tY(s, l);
                })([this], e)
              );
              return;
            }
            let t = this._convertSpanToTransaction();
            t && (rc(this).scope || eC()).captureEvent(t);
          }
          _convertSpanToTransaction() {
            if (!rh(e7(this))) return;
            this._name ||
              (eq &&
                Q.warn(
                  "Transaction has no name, falling back to `<unlabeled transaction>`."
                ),
              (this._name = "<unlabeled transaction>"));
            let { scope: e, isolationScope: t } = rc(this),
              n = (e || eC()).getClient() || ek();
            if (!0 !== this._sampled) {
              eq &&
                Q.log(
                  "[Tracing] Discarding transaction because its trace was not chosen to be sampled."
                ),
                n && n.recordDroppedEvent("sample_rate", "transaction");
              return;
            }
            let r = ts(this)
                .filter(
                  (e) =>
                    e !== this && !(e instanceof ru && e.isStandaloneSpan())
                )
                .map((e) => e7(e))
                .filter(rh),
              i = this._attributes[eH],
              s = {
                contexts: {
                  trace: (function (e) {
                    let { spanId: t, traceId: n } = e.spanContext(),
                      {
                        data: r,
                        op: i,
                        parent_span_id: s,
                        status: o,
                        origin: a,
                      } = e7(e);
                    return es({
                      parent_span_id: s,
                      span_id: t,
                      trace_id: n,
                      data: r,
                      op: i,
                      status: o,
                      origin: a,
                    });
                  })(this),
                },
                spans:
                  r.length > 1e3
                    ? r
                        .sort((e, t) => e.start_timestamp - t.start_timestamp)
                        .slice(0, 1e3)
                    : r,
                start_timestamp: this._startTime,
                timestamp: this._endTime,
                transaction: this._name,
                type: "transaction",
                sdkProcessingMetadata: {
                  capturedSpanScope: e,
                  capturedSpanIsolationScope: t,
                  ...es({ dynamicSamplingContext: tu(this) }),
                },
                _metrics_summary: e5(this),
                ...(i && { transaction_info: { source: i } }),
              },
              o = ro(this._events);
            return (
              o &&
                Object.keys(o).length &&
                (eq &&
                  Q.log(
                    "[Measurements] Adding measurements to transaction event",
                    JSON.stringify(o, void 0, 2)
                  ),
                (s.measurements = o)),
              s
            );
          }
        }
        function rd(e) {
          return (
            (e && "number" == typeof e) || e instanceof Date || Array.isArray(e)
          );
        }
        function rh(e) {
          return (
            !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
          );
        }
        let rp = "__SENTRY_SUPPRESS_TRACING__";
        function rf(e) {
          let t = eN(N());
          if (t.startInactiveSpan) return t.startInactiveSpan(e);
          let n = (function (e) {
              let t = { isStandalone: (e.experimental || {}).standalone, ...e };
              if (e.startTime) {
                let n = { ...t };
                return (
                  (n.startTimestamp = e8(e.startTime)), delete n.startTime, n
                );
              }
              return t;
            })(e),
            r = e.scope || eC(),
            i = (function (e) {
              let t = e[ey];
              if (!t) return;
              let n = ek();
              return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan
                ? to(t)
                : t;
            })(r);
          return e.onlyIfParent && !i
            ? new rs()
            : (function ({
                parentSpan: e,
                spanContext: t,
                forceTransaction: n,
                scope: r,
              }) {
                var i;
                let s;
                if (!tS()) return new rs();
                let o = eI();
                if (e && !n)
                  (s = (function (e, t, n) {
                    let { spanId: r, traceId: i } = e.spanContext(),
                      s = !t.getScopeData().sdkProcessingMetadata[rp] && te(e),
                      o = s
                        ? new ru({
                            ...n,
                            parentSpanId: r,
                            traceId: i,
                            sampled: s,
                          })
                        : new rs({ traceId: i });
                    ti(e, o);
                    let a = ek();
                    return (
                      a &&
                        (a.emit("spanStart", o),
                        n.endTimestamp && a.emit("spanEnd", o)),
                      o
                    );
                  })(e, r, t)),
                    ti(e, s);
                else if (e) {
                  let n = tu(e),
                    { traceId: i, spanId: o } = e.spanContext(),
                    a = te(e);
                  Z(
                    (s = rm({ traceId: i, parentSpanId: o, ...t }, r, a)),
                    tl,
                    n
                  );
                } else {
                  let {
                    traceId: e,
                    dsc: n,
                    parentSpanId: i,
                    sampled: a,
                  } = {
                    ...o.getPropagationContext(),
                    ...r.getPropagationContext(),
                  };
                  (s = rm({ traceId: e, parentSpanId: i, ...t }, r, a)),
                    n && Z(s, tl, n);
                }
                return (
                  (function (e) {
                    if (!eq) return;
                    let {
                        description: t = "< unknown name >",
                        op: n = "< unknown op >",
                        parent_span_id: r,
                      } = e7(e),
                      { spanId: i } = e.spanContext(),
                      s = te(e),
                      o = to(e),
                      a = o === e,
                      l = `[Tracing] Starting ${s ? "sampled" : "unsampled"} ${
                        a ? "root " : ""
                      }span`,
                      c = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
                    if ((r && c.push(`parent ID: ${r}`), !a)) {
                      let { op: e, description: t } = e7(o);
                      c.push(`root ID: ${o.spanContext().spanId}`),
                        e && c.push(`root op: ${e}`),
                        t && c.push(`root description: ${t}`);
                    }
                    Q.log(`${l}
  ${c.join("\n  ")}`);
                  })(s),
                  (i = s) && (Z(i, rl, o), Z(i, ra, r)),
                  s
                );
              })({
                parentSpan: i,
                spanContext: n,
                forceTransaction: e.forceTransaction,
                scope: r,
              });
        }
        function rm(e, t, n) {
          let r = ek(),
            i = (r && r.getOptions()) || {},
            { name: s = "", attributes: o } = e,
            [a, l] = t.getScopeData().sdkProcessingMetadata[rp]
              ? [!1]
              : (function (e, t) {
                  let n;
                  if (!tS(e)) return [!1];
                  let r = t2(
                    (n =
                      "function" == typeof e.tracesSampler
                        ? e.tracesSampler(t)
                        : void 0 !== t.parentSampled
                        ? t.parentSampled
                        : void 0 !== e.tracesSampleRate
                        ? e.tracesSampleRate
                        : 1)
                  );
                  return void 0 === r
                    ? (eq &&
                        Q.warn(
                          "[Tracing] Discarding transaction because of invalid sample rate."
                        ),
                      [!1])
                    : r
                    ? Math.random() < r
                      ? [!0, r]
                      : (eq &&
                          Q.log(
                            `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
                              n
                            )})`
                          ),
                        [!1, r])
                    : (eq &&
                        Q.log(
                          `[Tracing] Discarding transaction because ${
                            "function" == typeof e.tracesSampler
                              ? "tracesSampler returned 0 or false"
                              : "a negative sampling decision was inherited or tracesSampleRate is set to 0"
                          }`
                        ),
                      [!1, r]);
                })(i, {
                  name: s,
                  parentSampled: n,
                  attributes: o,
                  transactionContext: { name: s, parentSampled: n },
                }),
            c = new ru({
              ...e,
              attributes: { [eH]: "custom", ...e.attributes },
              sampled: a,
            });
          return (
            void 0 !== l && c.setAttribute(eW, l),
            r && r.emit("spanStart", c),
            c
          );
        }
        let r_ = (e, t) =>
            e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good",
          rg = (e, t, n, r) => {
            let i, s;
            return (o) => {
              t.value >= 0 &&
                (o || r) &&
                ((s = t.value - (i || 0)) || void 0 === i) &&
                ((i = t.value),
                (t.delta = s),
                (t.rating = r_(t.value, n)),
                e(t));
            };
          },
          ry = () =>
            `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
          rv = () =>
            w.performance &&
            performance.getEntriesByType &&
            performance.getEntriesByType("navigation")[0],
          rE = () => {
            let e = rv();
            return (e && e.activationStart) || 0;
          },
          rb = (e, t) => {
            let n = rv(),
              r = "navigate";
            return (
              n &&
                ((w.document && w.document.prerendering) || rE() > 0
                  ? (r = "prerender")
                  : w.document && w.document.wasDiscarded
                  ? (r = "restore")
                  : n.type && (r = n.type.replace(/_/g, "-"))),
              {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: ry(),
                navigationType: r,
              }
            );
          },
          rT = (e, t, n) => {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                let r = new PerformanceObserver((e) => {
                  Promise.resolve().then(() => {
                    t(e.getEntries());
                  });
                });
                return (
                  r.observe(Object.assign({ type: e, buffered: !0 }, n || {})),
                  r
                );
              }
            } catch (e) {}
          },
          rS = (e) => {
            let t = (t) => {
              ("pagehide" === t.type ||
                (w.document && "hidden" === w.document.visibilityState)) &&
                e(t);
            };
            w.document &&
              (addEventListener("visibilitychange", t, !0),
              addEventListener("pagehide", t, !0));
          },
          rw = (e) => {
            let t = !1;
            return (n) => {
              t || (e(n), (t = !0));
            };
          },
          rO = -1,
          rR = () => {
            rO =
              "hidden" !== w.document.visibilityState || w.document.prerendering
                ? 1 / 0
                : 0;
          },
          rN = (e) => {
            "hidden" === w.document.visibilityState &&
              rO > -1 &&
              ((rO = "visibilitychange" === e.type ? e.timeStamp : 0),
              removeEventListener("visibilitychange", rN, !0),
              removeEventListener("prerenderingchange", rN, !0));
          },
          rC = () => {
            addEventListener("visibilitychange", rN, !0),
              addEventListener("prerenderingchange", rN, !0);
          },
          rI = () => (
            w.document && rO < 0 && (rR(), rC()),
            {
              get firstHiddenTime() {
                return rO;
              },
            }
          ),
          rA = (e) => {
            w.document && w.document.prerendering
              ? addEventListener("prerenderingchange", () => e(), !0)
              : e();
          },
          rk = [1800, 3e3],
          rP = (e, t = {}) => {
            rA(() => {
              let n;
              let r = rI(),
                i = rb("FCP"),
                s = rT("paint", (e) => {
                  e.forEach((e) => {
                    "first-contentful-paint" === e.name &&
                      (s.disconnect(),
                      e.startTime < r.firstHiddenTime &&
                        ((i.value = Math.max(e.startTime - rE(), 0)),
                        i.entries.push(e),
                        n(!0)));
                  });
                });
              s && (n = rg(e, i, rk, t.reportAllChanges));
            });
          },
          rD = [0.1, 0.25],
          rx = (e, t = {}) => {
            rP(
              rw(() => {
                let n;
                let r = rb("CLS", 0),
                  i = 0,
                  s = [],
                  o = (e) => {
                    e.forEach((e) => {
                      if (!e.hadRecentInput) {
                        let t = s[0],
                          n = s[s.length - 1];
                        i &&
                        e.startTime - n.startTime < 1e3 &&
                        e.startTime - t.startTime < 5e3
                          ? ((i += e.value), s.push(e))
                          : ((i = e.value), (s = [e]));
                      }
                    }),
                      i > r.value && ((r.value = i), (r.entries = s), n());
                  },
                  a = rT("layout-shift", o);
                a &&
                  ((n = rg(e, r, rD, t.reportAllChanges)),
                  rS(() => {
                    o(a.takeRecords()), n(!0);
                  }),
                  setTimeout(n, 0));
              })
            );
          },
          rL = [100, 300],
          rM = (e, t = {}) => {
            rA(() => {
              let n;
              let r = rI(),
                i = rb("FID"),
                s = (e) => {
                  e.startTime < r.firstHiddenTime &&
                    ((i.value = e.processingStart - e.startTime),
                    i.entries.push(e),
                    n(!0));
                },
                o = (e) => {
                  e.forEach(s);
                },
                a = rT("first-input", o);
              (n = rg(e, i, rL, t.reportAllChanges)),
                a &&
                  rS(
                    rw(() => {
                      o(a.takeRecords()), a.disconnect();
                    })
                  );
            });
          },
          rj = 0,
          rU = 1 / 0,
          rF = 0,
          r$ = (e) => {
            e.forEach((e) => {
              e.interactionId &&
                ((rU = Math.min(rU, e.interactionId)),
                (rj = (rF = Math.max(rF, e.interactionId))
                  ? (rF - rU) / 7 + 1
                  : 0));
            });
          },
          rB = () => (l ? rj : performance.interactionCount || 0),
          rq = () => {
            "interactionCount" in performance ||
              l ||
              (l = rT("event", r$, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
              }));
          },
          rH = [200, 500],
          rW = () => rB() - 0,
          rz = [],
          rG = {},
          rV = (e) => {
            let t = rz[rz.length - 1],
              n = rG[e.interactionId];
            if (n || rz.length < 10 || e.duration > t.latency) {
              if (n)
                n.entries.push(e),
                  (n.latency = Math.max(n.latency, e.duration));
              else {
                let t = {
                  id: e.interactionId,
                  latency: e.duration,
                  entries: [e],
                };
                (rG[t.id] = t), rz.push(t);
              }
              rz.sort((e, t) => t.latency - e.latency),
                rz.splice(10).forEach((e) => {
                  delete rG[e.id];
                });
            }
          },
          rQ = () => {
            let e = Math.min(rz.length - 1, Math.floor(rW() / 50));
            return rz[e];
          },
          rY = (e, t = {}) => {
            rA(() => {
              let n;
              rq();
              let r = rb("INP"),
                i = (e) => {
                  e.forEach((e) => {
                    e.interactionId && rV(e),
                      "first-input" !== e.entryType ||
                        rz.some((t) =>
                          t.entries.some(
                            (t) =>
                              e.duration === t.duration &&
                              e.startTime === t.startTime
                          )
                        ) ||
                        rV(e);
                  });
                  let t = rQ();
                  t &&
                    t.latency !== r.value &&
                    ((r.value = t.latency), (r.entries = t.entries), n());
                },
                s = rT("event", i, {
                  durationThreshold:
                    null != t.durationThreshold ? t.durationThreshold : 40,
                });
              (n = rg(e, r, rH, t.reportAllChanges)),
                s &&
                  ("PerformanceEventTiming" in w &&
                    "interactionId" in PerformanceEventTiming.prototype &&
                    s.observe({ type: "first-input", buffered: !0 }),
                  rS(() => {
                    i(s.takeRecords()),
                      r.value < 0 &&
                        rW() > 0 &&
                        ((r.value = 0), (r.entries = [])),
                      n(!0);
                  }));
            });
          },
          rK = [2500, 4e3],
          rX = {},
          rJ = (e, t = {}) => {
            rA(() => {
              let n;
              let r = rI(),
                i = rb("LCP"),
                s = (e) => {
                  let t = e[e.length - 1];
                  t &&
                    t.startTime < r.firstHiddenTime &&
                    ((i.value = Math.max(t.startTime - rE(), 0)),
                    (i.entries = [t]),
                    n());
                },
                o = rT("largest-contentful-paint", s);
              if (o) {
                n = rg(e, i, rK, t.reportAllChanges);
                let r = rw(() => {
                  rX[i.id] ||
                    (s(o.takeRecords()),
                    o.disconnect(),
                    (rX[i.id] = !0),
                    n(!0));
                });
                ["keydown", "click"].forEach((e) => {
                  w.document && addEventListener(e, () => setTimeout(r, 0), !0);
                }),
                  rS(r);
              }
            });
          },
          rZ = [800, 1800],
          r0 = (e) => {
            w.document && w.document.prerendering
              ? rA(() => r0(e))
              : w.document && "complete" !== w.document.readyState
              ? addEventListener("load", () => r0(e), !0)
              : setTimeout(e, 0);
          },
          r1 = (e, t = {}) => {
            let n = rb("TTFB"),
              r = rg(e, n, rZ, t.reportAllChanges);
            r0(() => {
              let e = rv();
              if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (n.value = Math.max(t - rE(), 0)), (n.entries = [e]), r(!0);
              }
            });
          },
          r2 = {},
          r3 = {};
        function r5(e, t = !1) {
          return io("cls", e, ie, c, t);
        }
        function r4(e, t = !1) {
          return io("lcp", e, ir, d, t);
        }
        function r6(e) {
          return io("fid", e, it, u);
        }
        function r8(e) {
          return io("inp", e, is, p);
        }
        function r9(e, t) {
          return (
            ia(e, t),
            r3[e] ||
              ((function (e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                  rT(
                    e,
                    (t) => {
                      r7(e, { entries: t });
                    },
                    t
                  );
              })(e),
              (r3[e] = !0)),
            il(e, t)
          );
        }
        function r7(e, t) {
          let n = r2[e];
          if (n && n.length)
            for (let r of n)
              try {
                r(t);
              } catch (t) {
                nY &&
                  Q.error(
                    `Error while triggering instrumentation handler.
Type: ${e}
Name: ${eM(r)}
Error:`,
                    t
                  );
              }
        }
        function ie() {
          return rx(
            (e) => {
              r7("cls", { metric: e }), (c = e);
            },
            { reportAllChanges: !0 }
          );
        }
        function it() {
          return rM((e) => {
            r7("fid", { metric: e }), (u = e);
          });
        }
        function ir() {
          return rJ(
            (e) => {
              r7("lcp", { metric: e }), (d = e);
            },
            { reportAllChanges: !0 }
          );
        }
        function ii() {
          return r1((e) => {
            r7("ttfb", { metric: e }), (h = e);
          });
        }
        function is() {
          return rY((e) => {
            r7("inp", { metric: e }), (p = e);
          });
        }
        function io(e, t, n, r, i = !1) {
          let s;
          return (
            ia(e, t),
            r3[e] || ((s = n()), (r3[e] = !0)),
            r && t({ metric: r }),
            il(e, t, i ? s : void 0)
          );
        }
        function ia(e, t) {
          (r2[e] = r2[e] || []), r2[e].push(t);
        }
        function il(e, t, n) {
          return () => {
            n && n();
            let r = r2[e];
            if (!r) return;
            let i = r.indexOf(t);
            -1 !== i && r.splice(i, 1);
          };
        }
        function ic(e) {
          return "number" == typeof e && isFinite(e);
        }
        function iu(e, t, n, { ...r }) {
          let i = e7(e).start_timestamp;
          return (
            i &&
              i > t &&
              "function" == typeof e.updateStartTime &&
              e.updateStartTime(t),
            (function (e, t) {
              let n = eN(N());
              return n.withActiveSpan
                ? n.withActiveSpan(e, t)
                : eA((n) => (ev(n, e || void 0), t(n)));
            })(e, () => {
              let e = rf({ startTime: t, ...r });
              return e && e.end(n), e;
            })
          );
        }
        function id() {
          return w && w.addEventListener && w.performance;
        }
        function ih(e) {
          return e / 1e3;
        }
        let ip = 0,
          im = {};
        function i_(e, t, n, r, i, s) {
          let o = s ? t[s] : t[`${n}End`],
            a = t[`${n}Start`];
          a &&
            o &&
            iu(e, r + ih(a), r + ih(o), {
              op: "browser",
              name: i || n,
              attributes: { [eG]: "auto.ui.browser.metrics" },
            });
        }
        function ig(e, t, n, r) {
          let i = t[n];
          null != i && i < 2147483647 && (e[r] = i);
        }
        let iy = [],
          iv = new Map(),
          iE = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press",
          },
          ib = { idleTimeout: 1e3, finalTimeout: 3e4, childSpanTimeout: 15e3 };
        function iT(e, t = {}) {
          let n;
          let r = new Map(),
            i = !1,
            s = "externalFinish",
            o = !t.disableAutoFinish,
            {
              idleTimeout: a = ib.idleTimeout,
              finalTimeout: l = ib.finalTimeout,
              childSpanTimeout: c = ib.childSpanTimeout,
              beforeSpanEnd: u,
            } = t,
            d = ek();
          if (!d || !tS()) return new rs();
          let h = eC(),
            p = ta(),
            f = (function (e) {
              let t = rf(e);
              return (
                ev(eC(), t),
                eq && Q.log("[Tracing] Started span is an idle span"),
                t
              );
            })(e);
          function m() {
            n && (clearTimeout(n), (n = void 0));
          }
          function _(e) {
            m(),
              (n = setTimeout(() => {
                !i && 0 === r.size && o && ((s = "idleTimeout"), f.end(e));
              }, a));
          }
          function g(e) {
            n = setTimeout(() => {
              !i && o && ((s = "heartbeatFailed"), f.end(e));
            }, c);
          }
          function y(e) {
            (i = !0), r.clear(), ev(h, p);
            let t = e7(f),
              { start_timestamp: n } = t;
            if (!n) return;
            (t.data || {})[eV] || f.setAttribute(eV, s),
              Q.log(`[Tracing] Idle span "${t.op}" finished`);
            let o = ts(f).filter((e) => e !== f),
              c = 0;
            o.forEach((t) => {
              t.isRecording() &&
                (t.setStatus({ code: 2, message: "cancelled" }),
                t.end(e),
                eq &&
                  Q.log(
                    "[Tracing] Cancelling span since span ended early",
                    JSON.stringify(t, void 0, 2)
                  ));
              let { timestamp: n = 0, start_timestamp: r = 0 } = e7(t),
                i = r <= e,
                s = n - r <= (l + a) / 1e3;
              if (eq) {
                let e = JSON.stringify(t, void 0, 2);
                i
                  ? s ||
                    Q.log(
                      "[Tracing] Discarding span since it finished after idle span final timeout",
                      e
                    )
                  : Q.log(
                      "[Tracing] Discarding span since it happened after idle span was finished",
                      e
                    );
              }
              (!s || !i) && (f[tn] && f[tn].delete(t), c++);
            }),
              c > 0 && f.setAttribute("sentry.idle_span_discarded_spans", c);
          }
          return (
            (f.end = new Proxy(f.end, {
              apply(e, t, n) {
                u && u(f);
                let [r, ...i] = n,
                  s = e8(r || em()),
                  o = ts(f).filter((e) => e !== f);
                if (!o.length) return y(s), Reflect.apply(e, t, [s, ...i]);
                let a = o.map((e) => e7(e).timestamp).filter((e) => !!e),
                  c = a.length ? Math.max(...a) : void 0,
                  d = e7(f).start_timestamp,
                  h = Math.min(
                    d ? d + l / 1e3 : 1 / 0,
                    Math.max(d || -1 / 0, Math.min(s, c || 1 / 0))
                  );
                return y(h), Reflect.apply(e, t, [h, ...i]);
              },
            })),
            d.on("spanStart", (e) => {
              if (!i && e !== f && !e7(e).timestamp && ts(f).includes(e)) {
                var t;
                (t = e.spanContext().spanId),
                  m(),
                  r.set(t, !0),
                  g(em() + c / 1e3);
              }
            }),
            d.on("spanEnd", (e) => {
              var t;
              i ||
                ((t = e.spanContext().spanId),
                r.has(t) && r.delete(t),
                0 === r.size && _(em() + a / 1e3));
            }),
            d.on("idleSpanEnableAutoFinish", (e) => {
              e === f && ((o = !0), _(), r.size && g());
            }),
            t.disableAutoFinish || _(),
            setTimeout(() => {
              i ||
                (f.setStatus({ code: 2, message: "deadline_exceeded" }),
                (s = "finalTimeout"),
                f.end());
            }, l),
            f
          );
        }
        let iS = !1;
        function iw() {
          let e = ta(),
            t = e && to(e);
          if (t) {
            let e = "internal_error";
            eq && Q.log(`[Tracing] Root span: ${e} -> Global error occured`),
              t.setStatus({ code: 2, message: e });
          }
        }
        iw.tag = "sentry_tracingErrorCallback";
        let iO = { traceFetch: !0, traceXHR: !0, enableHTTPTimings: !0 };
        function iR(e) {
          let { url: t } = e7(e).data || {};
          if (!t || "string" != typeof t) return;
          let n = r9("resource", ({ entries: r }) => {
            r.forEach((r) => {
              "resource" === r.entryType &&
                "initiatorType" in r &&
                "string" == typeof r.nextHopProtocol &&
                ("fetch" === r.initiatorType ||
                  "xmlhttprequest" === r.initiatorType) &&
                r.name.endsWith(t) &&
                ((function (e) {
                  let { name: t, version: n } = (function (e) {
                      let t = "unknown",
                        n = "unknown",
                        r = "";
                      for (let i of e) {
                        if ("/" === i) {
                          [t, n] = e.split("/");
                          break;
                        }
                        if (!isNaN(Number(i))) {
                          (t = "h" === r ? "http" : r), (n = e.split(r)[1]);
                          break;
                        }
                        r += i;
                      }
                      return r === e && (t = r), { name: t, version: n };
                    })(e.nextHopProtocol),
                    r = [];
                  return (r.push(
                    ["network.protocol.version", n],
                    ["network.protocol.name", t]
                  ),
                  e_)
                    ? [
                        ...r,
                        ["http.request.redirect_start", iN(e.redirectStart)],
                        ["http.request.fetch_start", iN(e.fetchStart)],
                        [
                          "http.request.domain_lookup_start",
                          iN(e.domainLookupStart),
                        ],
                        [
                          "http.request.domain_lookup_end",
                          iN(e.domainLookupEnd),
                        ],
                        ["http.request.connect_start", iN(e.connectStart)],
                        [
                          "http.request.secure_connection_start",
                          iN(e.secureConnectionStart),
                        ],
                        ["http.request.connection_end", iN(e.connectEnd)],
                        ["http.request.request_start", iN(e.requestStart)],
                        ["http.request.response_start", iN(e.responseStart)],
                        ["http.request.response_end", iN(e.responseEnd)],
                      ]
                    : r;
                })(r).forEach((t) => e.setAttribute(...t)),
                setTimeout(n));
            });
          });
        }
        function iN(e = 0) {
          return ((e_ || performance.timeOrigin) + e) / 1e3;
        }
        function iC(e) {
          try {
            return new URL(e, w.location.origin).href;
          } catch (e) {
            return;
          }
        }
        let iI = {
            ...ib,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !0,
            _experiments: {},
            ...iO,
          },
          iA = (e = {}) => {
            iS || ((iS = !0), nI(iw), nP(iw));
            let {
                enableInp: t,
                enableLongTask: n,
                _experiments: { enableInteractions: r },
                beforeStartSpan: i,
                idleTimeout: s,
                finalTimeout: o,
                childSpanTimeout: a,
                markBackgroundSpan: l,
                traceFetch: c,
                traceXHR: u,
                shouldCreateSpanForRequest: d,
                enableHTTPTimings: p,
                instrumentPageLoad: _,
                instrumentNavigation: g,
              } = { ...iI, ...e },
              y = (function () {
                let e = id();
                if (e && e_) {
                  e.mark && w.performance.mark("sentry-tracing-init");
                  let t = r6(({ metric: e }) => {
                      let t = e.entries[e.entries.length - 1];
                      if (!t) return;
                      let n = ih(e_),
                        r = ih(t.startTime);
                      nY && Q.log("[Measurements] Adding FID"),
                        (im.fid = { value: e.value, unit: "millisecond" }),
                        (im["mark.fid"] = { value: n + r, unit: "second" });
                    }),
                    n = r5(({ metric: e }) => {
                      let t = e.entries[e.entries.length - 1];
                      t &&
                        (nY && Q.log("[Measurements] Adding CLS"),
                        (im.cls = { value: e.value, unit: "" }),
                        (m = t));
                    }, !0),
                    r = r4(({ metric: e }) => {
                      let t = e.entries[e.entries.length - 1];
                      t &&
                        (nY && Q.log("[Measurements] Adding LCP"),
                        (im.lcp = { value: e.value, unit: "millisecond" }),
                        (f = t));
                    }, !0),
                    i = io(
                      "ttfb",
                      ({ metric: e }) => {
                        e.entries[e.entries.length - 1] &&
                          (nY && Q.log("[Measurements] Adding TTFB"),
                          (im.ttfb = { value: e.value, unit: "millisecond" }));
                      },
                      ii,
                      h
                    );
                  return () => {
                    t(), n(), r(), i();
                  };
                }
                return () => void 0;
              })();
            t &&
              (function () {
                if (id() && e_) {
                  let e = r8(({ metric: e }) => {
                    let t;
                    let n = ek();
                    if (!n || void 0 == e.value) return;
                    let r = e.entries.find(
                      (t) => t.duration === e.value && iE[t.name]
                    );
                    if (!r) return;
                    let { interactionId: i } = r,
                      s = iE[r.name],
                      o = n.getOptions(),
                      a = ih(e_ + r.startTime),
                      l = ih(e.value),
                      c = eC(),
                      u = ta(),
                      d = u ? to(u) : void 0,
                      h =
                        (null != i ? iv.get(i) : void 0) ||
                        (d
                          ? e7(d).description
                          : c.getScopeData().transactionName),
                      p = c.getUser(),
                      f = n.getIntegrationByName("Replay"),
                      m = f && f.getReplayId(),
                      _ =
                        void 0 !== p ? p.email || p.id || p.ip_address : void 0;
                    try {
                      t = c.getScopeData().contexts.profile.profile_id;
                    } catch (e) {}
                    let g = rf({
                      name: q(r.target),
                      op: `ui.interaction.${s}`,
                      attributes: es({
                        release: o.release,
                        environment: o.environment,
                        transaction: h,
                        [eK]: e.value,
                        [eG]: "auto.http.browser.inp",
                        user: _ || void 0,
                        profile_id: t || void 0,
                        replay_id: m || void 0,
                      }),
                      startTime: a,
                      experimental: { standalone: !0 },
                    });
                    g.addEvent("inp", { [eQ]: "millisecond", [eY]: e.value }),
                      g.end(a + l);
                  });
                }
              })(),
              n &&
                r9("longtask", ({ entries: e }) => {
                  for (let t of e) {
                    if (!ta()) return;
                    let e = ih(e_ + t.startTime),
                      n = ih(t.duration),
                      r = rf({
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        startTime: e,
                        attributes: { [eG]: "auto.ui.browser.metrics" },
                      });
                    r && r.end(e + n);
                  }
                }),
              r &&
                r9("event", ({ entries: e }) => {
                  for (let t of e) {
                    if (!ta()) return;
                    if ("click" === t.name) {
                      let e = ih(e_ + t.startTime),
                        n = ih(t.duration),
                        r = {
                          name: q(t.target),
                          op: `ui.interaction.${t.name}`,
                          startTime: e,
                          attributes: { [eG]: "auto.ui.browser.metrics" },
                        },
                        i = H(t.target);
                      i && (r.attributes["ui.component_name"] = i);
                      let s = rf(r);
                      s && s.end(e + n);
                    }
                  }
                });
            let v = { name: void 0, source: void 0 };
            function E(e, t) {
              let n = "pageload" === t.op,
                r = i ? i(t) : t,
                l = r.attributes || {};
              t.name !== r.name && ((l[eH] = "custom"), (r.attributes = l)),
                (v.name = r.name),
                (v.source = l[eH]);
              let c = iT(r, {
                idleTimeout: s,
                finalTimeout: o,
                childSpanTimeout: a,
                disableAutoFinish: n,
                beforeSpanEnd: (e) => {
                  y(),
                    (function (e) {
                      let t = id();
                      if (!t || !w.performance.getEntries || !e_) return;
                      nY &&
                        Q.log(
                          "[Tracing] Adding & adjusting spans using Performance API"
                        );
                      let n = ih(e_),
                        r = t.getEntries(),
                        { op: i, start_timestamp: s } = e7(e);
                      if (
                        (r.slice(ip).forEach((t) => {
                          let r = ih(t.startTime),
                            o = ih(t.duration);
                          if ("navigation" !== i || !s || !(n + r < s))
                            switch (t.entryType) {
                              case "navigation":
                                [
                                  "unloadEvent",
                                  "redirect",
                                  "domContentLoadedEvent",
                                  "loadEvent",
                                  "connect",
                                ].forEach((r) => {
                                  i_(e, t, r, n);
                                }),
                                  i_(
                                    e,
                                    t,
                                    "secureConnection",
                                    n,
                                    "TLS/SSL",
                                    "connectEnd"
                                  ),
                                  i_(
                                    e,
                                    t,
                                    "fetch",
                                    n,
                                    "cache",
                                    "domainLookupStart"
                                  ),
                                  i_(e, t, "domainLookup", n, "DNS"),
                                  t.responseEnd &&
                                    (iu(
                                      e,
                                      n + ih(t.requestStart),
                                      n + ih(t.responseEnd),
                                      {
                                        op: "browser",
                                        name: "request",
                                        attributes: {
                                          [eG]: "auto.ui.browser.metrics",
                                        },
                                      }
                                    ),
                                    iu(
                                      e,
                                      n + ih(t.responseStart),
                                      n + ih(t.responseEnd),
                                      {
                                        op: "browser",
                                        name: "response",
                                        attributes: {
                                          [eG]: "auto.ui.browser.metrics",
                                        },
                                      }
                                    ));
                                break;
                              case "mark":
                              case "paint":
                              case "measure": {
                                (function (e, t, n, r, i) {
                                  let s = i + n;
                                  iu(e, s, s + r, {
                                    name: t.name,
                                    op: t.entryType,
                                    attributes: {
                                      [eG]: "auto.resource.browser.metrics",
                                    },
                                  });
                                })(e, t, r, o, n);
                                let i = rI(),
                                  s = t.startTime < i.firstHiddenTime;
                                "first-paint" === t.name &&
                                  s &&
                                  (nY && Q.log("[Measurements] Adding FP"),
                                  (im.fp = {
                                    value: t.startTime,
                                    unit: "millisecond",
                                  })),
                                  "first-contentful-paint" === t.name &&
                                    s &&
                                    (nY && Q.log("[Measurements] Adding FCP"),
                                    (im.fcp = {
                                      value: t.startTime,
                                      unit: "millisecond",
                                    }));
                                break;
                              }
                              case "resource":
                                (function (e, t, n, r, i, s) {
                                  if (
                                    "xmlhttprequest" === t.initiatorType ||
                                    "fetch" === t.initiatorType
                                  )
                                    return;
                                  let o = nE(n),
                                    a = {
                                      [eG]: "auto.resource.browser.metrics",
                                    };
                                  ig(
                                    a,
                                    t,
                                    "transferSize",
                                    "http.response_transfer_size"
                                  ),
                                    ig(
                                      a,
                                      t,
                                      "encodedBodySize",
                                      "http.response_content_length"
                                    ),
                                    ig(
                                      a,
                                      t,
                                      "decodedBodySize",
                                      "http.decoded_response_content_length"
                                    ),
                                    "renderBlockingStatus" in t &&
                                      (a["resource.render_blocking_status"] =
                                        t.renderBlockingStatus),
                                    o.protocol &&
                                      (a["url.scheme"] = o.protocol
                                        .split(":")
                                        .pop()),
                                    o.host && (a["server.address"] = o.host),
                                    (a["url.same_origin"] = n.includes(
                                      w.location.origin
                                    ));
                                  let l = s + r;
                                  iu(e, l, l + i, {
                                    name: n.replace(w.location.origin, ""),
                                    op: t.initiatorType
                                      ? `resource.${t.initiatorType}`
                                      : "resource.other",
                                    attributes: a,
                                  });
                                })(e, t, t.name, r, o, n);
                            }
                        }),
                        (ip = Math.max(r.length - 1, 0)),
                        (function (e) {
                          let t = w.navigator;
                          if (!t) return;
                          let n = t.connection;
                          n &&
                            (n.effectiveType &&
                              e.setAttribute(
                                "effectiveConnectionType",
                                n.effectiveType
                              ),
                            n.type && e.setAttribute("connectionType", n.type),
                            ic(n.rtt) &&
                              (im["connection.rtt"] = {
                                value: n.rtt,
                                unit: "millisecond",
                              })),
                            ic(t.deviceMemory) &&
                              e.setAttribute(
                                "deviceMemory",
                                `${t.deviceMemory} GB`
                              ),
                            ic(t.hardwareConcurrency) &&
                              e.setAttribute(
                                "hardwareConcurrency",
                                String(t.hardwareConcurrency)
                              );
                        })(e),
                        "pageload" === i)
                      ) {
                        (function (e) {
                          let t = rv();
                          if (!t) return;
                          let { responseStart: n, requestStart: r } = t;
                          r <= n &&
                            (nY &&
                              Q.log("[Measurements] Adding TTFB Request Time"),
                            (e["ttfb.requestTime"] = {
                              value: n - r,
                              unit: "millisecond",
                            }));
                        })(im),
                          ["fcp", "fp", "lcp"].forEach((e) => {
                            if (!im[e] || !s || n >= s) return;
                            let t = im[e].value,
                              r = Math.abs((n + ih(t) - s) * 1e3),
                              i = r - t;
                            nY &&
                              Q.log(
                                `[Measurements] Normalized ${e} from ${t} to ${r} (${i})`
                              ),
                              (im[e].value = r);
                          });
                        let t = im["mark.fid"];
                        t &&
                          im.fid &&
                          (iu(e, t.value, t.value + ih(im.fid.value), {
                            name: "first input delay",
                            op: "ui.action",
                            attributes: { [eG]: "auto.ui.browser.metrics" },
                          }),
                          delete im["mark.fid"]),
                          "fcp" in im || delete im.cls,
                          Object.keys(im).forEach((e) => {
                            !(function (e, t, n) {
                              let r = ta(),
                                i = r && to(r);
                              i && i.addEvent(e, { [eY]: t, [eQ]: n });
                            })(e, im[e].value, im[e].unit);
                          }),
                          f &&
                            (nY && Q.log("[Measurements] Adding LCP Data"),
                            f.element &&
                              e.setAttribute("lcp.element", q(f.element)),
                            f.id && e.setAttribute("lcp.id", f.id),
                            f.url &&
                              e.setAttribute(
                                "lcp.url",
                                f.url.trim().slice(0, 200)
                              ),
                            e.setAttribute("lcp.size", f.size)),
                          m &&
                            m.sources &&
                            (nY && Q.log("[Measurements] Adding CLS Data"),
                            m.sources.forEach((t, n) =>
                              e.setAttribute(`cls.source.${n + 1}`, q(t.node))
                            ));
                      }
                      (f = void 0), (m = void 0), (im = {});
                    })(e);
                },
              });
              function u() {
                ["interactive", "complete"].includes(w.document.readyState) &&
                  e.emit("idleSpanEnableAutoFinish", c);
              }
              return (
                n &&
                  w.document &&
                  (w.document.addEventListener("readystatechange", () => {
                    u();
                  }),
                  u()),
                c
              );
            }
            return {
              name: "BrowserTracing",
              afterAllSetup(e) {
                let n, i;
                let h = w.location && w.location.href;
                e.on("startNavigationSpan", (t) => {
                  ek() === e &&
                    (n &&
                      (t8 &&
                        Q.log(
                          `[Tracing] Finishing current root span with op: ${
                            e7(n).op
                          }`
                        ),
                      n.end()),
                    (n = E(e, { op: "navigation", ...t })));
                }),
                  e.on("startPageLoadSpan", (t, r = {}) => {
                    if (ek() !== e) return;
                    n &&
                      (t8 &&
                        Q.log(
                          `[Tracing] Finishing current root span with op: ${
                            e7(n).op
                          }`
                        ),
                      n.end());
                    let i = (function (e, t) {
                      let n = (function (e) {
                          let t;
                          if (!e) return;
                          let n = e.match(e2);
                          if (n)
                            return (
                              "1" === n[3]
                                ? (t = !0)
                                : "0" === n[3] && (t = !1),
                              {
                                traceId: n[1],
                                parentSampled: t,
                                parentSpanId: n[2],
                              }
                            );
                        })(e),
                        r = (function (e) {
                          let t =
                            e && (x(e) || Array.isArray(e))
                              ? Array.isArray(e)
                                ? e.reduce((e, t) => {
                                    let n = e1(t);
                                    for (let t of Object.keys(n)) e[t] = n[t];
                                    return e;
                                  }, {})
                                : e1(e)
                              : void 0;
                          if (!t) return;
                          let n = Object.entries(t).reduce(
                            (e, [t, n]) => (
                              t.match(eZ) && (e[t.slice(eJ.length)] = n), e
                            ),
                            {}
                          );
                          return Object.keys(n).length > 0 ? n : void 0;
                        })(t),
                        {
                          traceId: i,
                          parentSpanId: s,
                          parentSampled: o,
                        } = n || {};
                      return n
                        ? {
                            traceId: i || eo(),
                            parentSpanId: s || eo().substring(16),
                            spanId: eo().substring(16),
                            sampled: o,
                            dsc: r || {},
                          }
                        : { traceId: i || eo(), spanId: eo().substring(16) };
                    })(
                      r.sentryTrace || iD("sentry-trace"),
                      r.baggage || iD("baggage")
                    );
                    eC().setPropagationContext(i),
                      (n = E(e, { op: "pageload", ...t }));
                  }),
                  e.on("spanEnd", (e) => {
                    let t = e7(e).op;
                    if (e !== to(e) || ("navigation" !== t && "pageload" !== t))
                      return;
                    let n = eC(),
                      r = n.getPropagationContext();
                    n.setPropagationContext({
                      ...r,
                      sampled: void 0 !== r.sampled ? r.sampled : te(e),
                      dsc: r.dsc || tu(e),
                    });
                  }),
                  w.location &&
                    (_ &&
                      ik(e, {
                        name: w.location.pathname,
                        startTime: e_ ? e_ / 1e3 : void 0,
                        attributes: {
                          [eH]: "url",
                          [eG]: "auto.pageload.browser",
                        },
                      }),
                    g &&
                      tH(({ to: t, from: n }) => {
                        if (void 0 === n && h && -1 !== h.indexOf(t)) {
                          h = void 0;
                          return;
                        }
                        n !== t &&
                          ((h = void 0),
                          iP(e, {
                            name: w.location.pathname,
                            attributes: {
                              [eH]: "url",
                              [eG]: "auto.navigation.browser",
                            },
                          }));
                      })),
                  l &&
                    (w && w.document
                      ? w.document.addEventListener("visibilitychange", () => {
                          let e = ta();
                          if (!e) return;
                          let t = to(e);
                          if (w.document.hidden && t) {
                            let e = "cancelled",
                              { op: n, status: r } = e7(t);
                            t8 &&
                              Q.log(
                                `[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`
                              ),
                              r || t.setStatus({ code: 2, message: e }),
                              t.setAttribute(
                                "sentry.cancellation_reason",
                                "document.hidden"
                              ),
                              t.end();
                          }
                        })
                      : t8 &&
                        Q.warn(
                          "[Tracing] Could not set up background tab detection due to lack of global document"
                        )),
                  r &&
                    w.document &&
                    addEventListener(
                      "click",
                      () => {
                        let e = "ui.action.click",
                          t = ta(),
                          n = t && to(t);
                        if (
                          n &&
                          ["navigation", "pageload"].includes(e7(n).op)
                        ) {
                          t8 &&
                            Q.warn(
                              `[Tracing] Did not create ${e} span because a pageload or navigation span is in progress.`
                            );
                          return;
                        }
                        if (
                          (i &&
                            (i.setAttribute(eV, "interactionInterrupted"),
                            i.end(),
                            (i = void 0)),
                          !v.name)
                        ) {
                          t8 &&
                            Q.warn(
                              `[Tracing] Did not create ${e} transaction because _latestRouteName is missing.`
                            );
                          return;
                        }
                        i = iT(
                          {
                            name: v.name,
                            op: e,
                            attributes: { [eH]: v.source || "url" },
                          },
                          {
                            idleTimeout: s,
                            finalTimeout: o,
                            childSpanTimeout: a,
                          }
                        );
                      },
                      { once: !1, capture: !0 }
                    ),
                  t &&
                    (function (e) {
                      let t = ({ entries: t }) => {
                        t.forEach((t) => {
                          if (!("duration" in t) || !e.name) return;
                          let n = t.interactionId;
                          if (!(null == n || iv.has(n))) {
                            if (iy.length > 10) {
                              let e = iy.shift();
                              iv.delete(e);
                            }
                            iy.push(n), iv.set(n, e.name);
                          }
                        });
                      };
                      r9("event", t), r9("first-input", t);
                    })(v),
                  (function (e) {
                    let {
                        traceFetch: t,
                        traceXHR: n,
                        shouldCreateSpanForRequest: r,
                        enableHTTPTimings: i,
                        tracePropagationTargets: s,
                      } = {
                        traceFetch: iO.traceFetch,
                        traceXHR: iO.traceXHR,
                        ...e,
                      },
                      o = "function" == typeof r ? r : (e) => !0,
                      a = (e) =>
                        (function (e, t) {
                          let n = w.location && w.location.href;
                          if (n) {
                            let r, i;
                            try {
                              (r = new URL(e, n)), (i = new URL(n).origin);
                            } catch (e) {
                              return !1;
                            }
                            let s = r.origin === i;
                            return t
                              ? X(r.toString(), t) || (s && X(r.pathname, t))
                              : s;
                          }
                          {
                            let n = !!e.match(/^\/(?!\/)/);
                            return t ? X(e, t) : n;
                          }
                        })(e, s),
                      l = {};
                    t &&
                      nm((e) => {
                        let t = (function (
                          e,
                          t,
                          n,
                          r,
                          i = "auto.http.browser"
                        ) {
                          if (!e.fetchData) return;
                          let s = tS() && t(e.fetchData.url);
                          if (e.endTimestamp && s) {
                            let t = e.fetchData.__span;
                            if (!t) return;
                            let n = r[t];
                            n &&
                              ((function (e, t) {
                                if (t.response) {
                                  e4(e, t.response.status);
                                  let n =
                                    t.response &&
                                    t.response.headers &&
                                    t.response.headers.get("content-length");
                                  if (n) {
                                    let t = parseInt(n);
                                    t > 0 &&
                                      e.setAttribute(
                                        "http.response_content_length",
                                        t
                                      );
                                  }
                                } else
                                  t.error &&
                                    e.setStatus({
                                      code: 2,
                                      message: "internal_error",
                                    });
                                e.end();
                              })(n, e),
                              delete r[t]);
                            return;
                          }
                          let o = eC(),
                            a = ek(),
                            { method: l, url: c } = e.fetchData,
                            u = (function (e) {
                              try {
                                return new URL(e).href;
                              } catch (e) {
                                return;
                              }
                            })(c),
                            d = u ? nE(u).host : void 0,
                            h = !!ta(),
                            p =
                              s && h
                                ? rf({
                                    name: `${l} ${c}`,
                                    attributes: {
                                      url: c,
                                      type: "fetch",
                                      "http.method": l,
                                      "http.url": u,
                                      "server.address": d,
                                      [eG]: i,
                                      [ez]: "http.client",
                                    },
                                  })
                                : new rs();
                          if (
                            ((e.fetchData.__span = p.spanContext().spanId),
                            (r[p.spanContext().spanId] = p),
                            n(e.fetchData.url) && a)
                          ) {
                            let t = e.args[0];
                            e.args[1] = e.args[1] || {};
                            let n = e.args[1];
                            n.headers = (function (e, t, n, r, i) {
                              let {
                                  traceId: s,
                                  spanId: o,
                                  sampled: a,
                                  dsc: l,
                                } = {
                                  ...eI().getPropagationContext(),
                                  ...n.getPropagationContext(),
                                },
                                c = i ? e6(i) : e3(s, o, a),
                                u = e0(l || (i ? tu(i) : tc(s, t))),
                                d =
                                  r.headers ||
                                  ("undefined" != typeof Request &&
                                  $(e, Request)
                                    ? e.headers
                                    : void 0);
                              if (!d) return { "sentry-trace": c, baggage: u };
                              if (
                                "undefined" != typeof Headers &&
                                $(d, Headers)
                              ) {
                                let e = new Headers(d);
                                return (
                                  e.append("sentry-trace", c),
                                  u && e.append(eX, u),
                                  e
                                );
                              }
                              if (Array.isArray(d)) {
                                let e = [...d, ["sentry-trace", c]];
                                return u && e.push([eX, u]), e;
                              }
                              {
                                let e = "baggage" in d ? d.baggage : void 0,
                                  t = [];
                                return (
                                  Array.isArray(e)
                                    ? t.push(...e)
                                    : e && t.push(e),
                                  u && t.push(u),
                                  {
                                    ...d,
                                    "sentry-trace": c,
                                    baggage:
                                      t.length > 0 ? t.join(",") : void 0,
                                  }
                                );
                              }
                            })(t, a, o, n, tS() && h ? p : void 0);
                          }
                          return p;
                        })(e, o, a, l);
                        if (t) {
                          let n = iC(e.fetchData.url),
                            r = n ? nE(n).host : void 0;
                          t.setAttributes({
                            "http.url": n,
                            "server.address": r,
                          });
                        }
                        i && t && iR(t);
                      }),
                      n &&
                        nd((e) => {
                          let t = (function (e, t, n, r) {
                            let i = e.xhr,
                              s = i && i[nu];
                            if (!i || i.__sentry_own_request__ || !s) return;
                            let o = tS() && t(s.url);
                            if (e.endTimestamp && o) {
                              let e = i.__sentry_xhr_span_id__;
                              if (!e) return;
                              let t = r[e];
                              t &&
                                void 0 !== s.status_code &&
                                (e4(t, s.status_code), t.end(), delete r[e]);
                              return;
                            }
                            let a = iC(s.url),
                              l = a ? nE(a).host : void 0,
                              c = !!ta(),
                              u =
                                o && c
                                  ? rf({
                                      name: `${s.method} ${s.url}`,
                                      attributes: {
                                        type: "xhr",
                                        "http.method": s.method,
                                        "http.url": a,
                                        url: s.url,
                                        "server.address": l,
                                        [eG]: "auto.http.browser",
                                        [ez]: "http.client",
                                      },
                                    })
                                  : new rs();
                            (i.__sentry_xhr_span_id__ = u.spanContext().spanId),
                              (r[i.__sentry_xhr_span_id__] = u);
                            let d = ek();
                            return (
                              i.setRequestHeader &&
                                n(s.url) &&
                                d &&
                                (function (e, t, n) {
                                  let r = eC(),
                                    {
                                      traceId: i,
                                      spanId: s,
                                      sampled: o,
                                      dsc: a,
                                    } = {
                                      ...eI().getPropagationContext(),
                                      ...r.getPropagationContext(),
                                    };
                                  (function (e, t, n) {
                                    try {
                                      e.setRequestHeader("sentry-trace", t),
                                        n && e.setRequestHeader(eX, n);
                                    } catch (e) {}
                                  })(
                                    e,
                                    n && tS() ? e6(n) : e3(i, s, o),
                                    e0(a || (n ? tu(n) : tc(i, t)))
                                  );
                                })(i, d, tS() && c ? u : void 0),
                              u
                            );
                          })(e, o, a, l);
                          i && t && iR(t);
                        });
                  })({
                    traceFetch: c,
                    traceXHR: u,
                    tracePropagationTargets:
                      e.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: d,
                    enableHTTPTimings: p,
                  });
              },
            };
          };
        function ik(e, t, n) {
          e.emit("startPageLoadSpan", t, n), eC().setTransactionName(t.name);
          let r = ta();
          return "pageload" === (r && e7(r).op) ? r : void 0;
        }
        function iP(e, t) {
          eI().setPropagationContext(ep()),
            eC().setPropagationContext(ep()),
            e.emit("startNavigationSpan", t),
            eC().setTransactionName(t.name);
          let n = ta();
          return "navigation" === (n && e7(n).op) ? n : void 0;
        }
        function iD(e) {
          var t;
          let n =
            ((t = `meta[name=${e}]`),
            w.document && w.document.querySelector
              ? w.document.querySelector(t)
              : null);
          return n ? n.getAttribute("content") : void 0;
        }
        var ix = n(11163);
        let iL = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
          iM = ix.events ? ix : ix.default;
        function ij(e) {
          let t;
          let n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              s = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = s(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = s((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        let iU =
          /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function iF(...e) {
          let t = "",
            n = !1;
          for (let r = e.length - 1; r >= -1 && !n; r--) {
            let i = r >= 0 ? e[r] : "/";
            i && ((t = `${i}/${t}`), (n = "/" === i.charAt(0)));
          }
          return (
            (t = (function (e, t) {
              let n = 0;
              for (let t = e.length - 1; t >= 0; t--) {
                let r = e[t];
                "." === r
                  ? e.splice(t, 1)
                  : ".." === r
                  ? (e.splice(t, 1), n++)
                  : n && (e.splice(t, 1), n--);
              }
              if (t) for (; n--; n) e.unshift("..");
              return e;
            })(
              t.split("/").filter((e) => !!e),
              !n
            ).join("/")),
            (n ? "/" : "") + t || "."
          );
        }
        function i$(e) {
          let t = 0;
          for (; t < e.length && "" === e[t]; t++);
          let n = e.length - 1;
          for (; n >= 0 && "" === e[n]; n--);
          return t > n ? [] : e.slice(t, n - t + 1);
        }
        let iB = (e = {}) => {
            let t = e.root,
              n = e.prefix || "app:///",
              r = "window" in w && void 0 !== w.window,
              i =
                e.iteratee ||
                (function ({ isBrowser: e, root: t, prefix: n }) {
                  return (r) => {
                    if (!r.filename) return r;
                    let i =
                        /^[a-zA-Z]:\\/.test(r.filename) ||
                        (r.filename.includes("\\") &&
                          !r.filename.includes("/")),
                      s = /^\//.test(r.filename);
                    if (e) {
                      if (t) {
                        let e = r.filename;
                        0 === e.indexOf(t) && (r.filename = e.replace(t, n));
                      }
                    } else if (i || s) {
                      let e;
                      let s = i
                          ? r.filename
                              .replace(/^[a-zA-Z]:/, "")
                              .replace(/\\/g, "/")
                          : r.filename,
                        o = t
                          ? (function (e, t) {
                              (e = iF(e).slice(1)), (t = iF(t).slice(1));
                              let n = i$(e.split("/")),
                                r = i$(t.split("/")),
                                i = Math.min(n.length, r.length),
                                s = i;
                              for (let e = 0; e < i; e++)
                                if (n[e] !== r[e]) {
                                  s = e;
                                  break;
                                }
                              let o = [];
                              for (let e = s; e < n.length; e++) o.push("..");
                              return (o = o.concat(r.slice(s))).join("/");
                            })(t, s)
                          : (function (e) {
                              let t =
                                  e.length > 1024
                                    ? `<truncated>${e.slice(-1024)}`
                                    : e,
                                n = iU.exec(t);
                              return n ? n.slice(1) : [];
                            })(s)[2];
                      r.filename = `${n}${o}`;
                    }
                    return r;
                  };
                })({ isBrowser: r, root: t, prefix: n });
            return {
              name: "RewriteFrames",
              processEvent(e) {
                let t = e;
                return (
                  e.exception &&
                    Array.isArray(e.exception.values) &&
                    (t = (function (e) {
                      try {
                        return {
                          ...e,
                          exception: {
                            ...e.exception,
                            values: e.exception.values.map((e) => {
                              var t;
                              return {
                                ...e,
                                ...(e.stacktrace && {
                                  stacktrace: {
                                    ...(t = e.stacktrace),
                                    frames:
                                      t &&
                                      t.frames &&
                                      t.frames.map((e) => i(e)),
                                  },
                                }),
                              };
                            }),
                          },
                        };
                      } catch (t) {
                        return e;
                      }
                    })(t)),
                  t
                );
              },
            };
          },
          iq = ({ assetPrefixPath: e }) => ({
            ...iB({
              iteratee: (t) => {
                try {
                  let { origin: n } = new URL(t.filename);
                  t.filename = ij([
                    t,
                    "access",
                    (e) => e.filename,
                    "optionalAccess",
                    (e) => e.replace,
                    "call",
                    (e) => e(n, "app://"),
                    "access",
                    (e) => e.replace,
                    "call",
                    (t) => t(e, ""),
                  ]);
                } catch (e) {}
                return (
                  t.filename &&
                    t.filename.startsWith("app:///_next") &&
                    (t.filename = decodeURI(t.filename)),
                  t.filename &&
                    t.filename.match(
                      /^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/
                    ) &&
                    (t.in_app = !1),
                  t
                );
              },
            }),
            name: "NextjsClientStackFrameNormalization",
          });
        function iH(e) {
          return "/" === e[e.length - 1] ? e.slice(0, -1) : e;
        }
        var iW = n(83454);
        function iz() {
          return (
            "undefined" != typeof window &&
            (!(
              !(
                "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ &&
                __SENTRY_BROWSER_BUNDLE__
              ) &&
              "[object process]" ===
                Object.prototype.toString.call(void 0 !== iW ? iW : 0)
            ) ||
              (void 0 !== w.process && "renderer" === w.process.type))
          );
        }
        let iG = "sentryReplaySession",
          iV = "Unable to send Replay";
        function iQ(e) {
          let t;
          let n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              s = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = s(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = s((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        function iY(e) {
          let t = iQ([e, "optionalAccess", (e) => e.host]);
          return iQ([t, "optionalAccess", (e) => e.shadowRoot]) === e;
        }
        function iK(e) {
          return "[object ShadowRoot]" === Object.prototype.toString.call(e);
        }
        function iX(e) {
          try {
            var t;
            let n = e.rules || e.cssRules;
            return n
              ? ((t = Array.from(n, iJ).join("")).includes(
                  " background-clip: text;"
                ) &&
                  !t.includes(" -webkit-background-clip: text;") &&
                  (t = t.replace(
                    " background-clip: text;",
                    " -webkit-background-clip: text; background-clip: text;"
                  )),
                t)
              : null;
          } catch (e) {
            return null;
          }
        }
        function iJ(e) {
          let t;
          if ("styleSheet" in e)
            try {
              t =
                iX(e.styleSheet) ||
                (function (e) {
                  let { cssText: t } = e;
                  if (t.split('"').length < 3) return t;
                  let n = ["@import", `url(${JSON.stringify(e.href)})`];
                  return (
                    "" === e.layerName
                      ? n.push("layer")
                      : e.layerName && n.push(`layer(${e.layerName})`),
                    e.supportsText && n.push(`supports(${e.supportsText})`),
                    e.media.length && n.push(e.media.mediaText),
                    n.join(" ") + ";"
                  );
                })(e);
            } catch (e) {}
          else if ("selectorText" in e && e.selectorText.includes(":"))
            return e.cssText.replace(
              /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm,
              "$1\\$2"
            );
          return t || e.cssText;
        }
        ((n5 = rn || (rn = {}))[(n5.Document = 0)] = "Document"),
          (n5[(n5.DocumentType = 1)] = "DocumentType"),
          (n5[(n5.Element = 2)] = "Element"),
          (n5[(n5.Text = 3)] = "Text"),
          (n5[(n5.CDATA = 4)] = "CDATA"),
          (n5[(n5.Comment = 5)] = "Comment");
        class iZ {
          constructor() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
          getId(e) {
            var t;
            return e
              ? (() => -1,
                null !=
                (t = iQ([
                  this,
                  "access",
                  (e) => e.getMeta,
                  "call",
                  (t) => t(e),
                  "optionalAccess",
                  (e) => e.id,
                ]))
                  ? t
                  : -1)
              : -1;
          }
          getNode(e) {
            return this.idNodeMap.get(e) || null;
          }
          getIds() {
            return Array.from(this.idNodeMap.keys());
          }
          getMeta(e) {
            return this.nodeMetaMap.get(e) || null;
          }
          removeNodeFromMap(e) {
            let t = this.getId(e);
            this.idNodeMap.delete(t),
              e.childNodes &&
                e.childNodes.forEach((e) => this.removeNodeFromMap(e));
          }
          has(e) {
            return this.idNodeMap.has(e);
          }
          hasNode(e) {
            return this.nodeMetaMap.has(e);
          }
          add(e, t) {
            let n = t.id;
            this.idNodeMap.set(n, e), this.nodeMetaMap.set(e, t);
          }
          replace(e, t) {
            let n = this.getNode(e);
            if (n) {
              let e = this.nodeMetaMap.get(n);
              e && this.nodeMetaMap.set(t, e);
            }
            this.idNodeMap.set(e, t);
          }
          reset() {
            (this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap());
          }
        }
        function i0({ maskInputOptions: e, tagName: t, type: n }) {
          return (
            "OPTION" === t && (t = "SELECT"),
            !!(
              e[t.toLowerCase()] ||
              (n && e[n]) ||
              "password" === n ||
              ("INPUT" === t && !n && e.text)
            )
          );
        }
        function i1({ isMasked: e, element: t, value: n, maskInputFn: r }) {
          let i = n || "";
          return e ? (r && (i = r(i, t)), "*".repeat(i.length)) : i;
        }
        function i2(e) {
          return e.toLowerCase();
        }
        function i3(e) {
          return e.toUpperCase();
        }
        let i5 = "__rrweb_original__";
        function i4(e) {
          let t = e.type;
          return e.hasAttribute("data-rr-is-password")
            ? "password"
            : t
            ? i2(t)
            : null;
        }
        function i6(e, t, n) {
          return "INPUT" === t && ("radio" === n || "checkbox" === n)
            ? e.getAttribute("value") || ""
            : e.value;
        }
        let i8 = 1,
          i9 = RegExp("[^a-z0-9-_:]");
        function i7() {
          return i8++;
        }
        let se = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
          st = /^(?:[a-z+]+:)?\/\//i,
          sn = /^www\..*/i,
          sr = /^(data:)([^,]*),(.*)/i;
        function si(e, t) {
          return (e || "").replace(se, (e, n, r, i, s, o) => {
            let a = r || s || o,
              l = n || i || "";
            if (!a) return e;
            if (st.test(a) || sn.test(a) || sr.test(a))
              return `url(${l}${a}${l})`;
            if ("/" === a[0])
              return `url(${l}${
                (t.indexOf("//") > -1
                  ? t.split("/").slice(0, 3).join("/")
                  : t.split("/")[0]
                ).split("?")[0] + a
              }${l})`;
            let c = t.split("/"),
              u = a.split("/");
            for (let e of (c.pop(), u))
              "." !== e && (".." === e ? c.pop() : c.push(e));
            return `url(${l}${c.join("/")}${l})`;
          });
        }
        let ss = /^[^ \t\n\r\u000c]+/,
          so = /^[, \t\n\r\u000c]+/;
        function sa(e, t) {
          if (!t || "" === t.trim()) return t;
          let n = e.createElement("a");
          return (n.href = t), n.href;
        }
        function sl() {
          let e = document.createElement("a");
          return (e.href = ""), e.href;
        }
        function sc(e, t, n, r, i, s) {
          return r
            ? "src" !== n &&
              ("href" !== n || ("use" === t && "#" === r[0])) &&
              ("xlink:href" !== n || "#" === r[0]) &&
              ("background" !== n ||
                ("table" !== t && "td" !== t && "th" !== t))
              ? "srcset" === n
                ? (function (e, t) {
                    if ("" === t.trim()) return t;
                    let n = 0;
                    function r(e) {
                      let r;
                      let i = e.exec(t.substring(n));
                      return i ? ((r = i[0]), (n += r.length), r) : "";
                    }
                    let i = [];
                    for (; r(so), !(n >= t.length); ) {
                      let s = r(ss);
                      if ("," === s.slice(-1))
                        (s = sa(e, s.substring(0, s.length - 1))), i.push(s);
                      else {
                        let r = "";
                        s = sa(e, s);
                        let o = !1;
                        for (;;) {
                          let e = t.charAt(n);
                          if ("" === e) {
                            i.push((s + r).trim());
                            break;
                          }
                          if (o) ")" === e && (o = !1);
                          else {
                            if ("," === e) {
                              (n += 1), i.push((s + r).trim());
                              break;
                            }
                            "(" === e && (o = !0);
                          }
                          (r += e), (n += 1);
                        }
                      }
                    }
                    return i.join(", ");
                  })(e, r)
                : "style" === n
                ? si(r, sl())
                : "object" === t && "data" === n
                ? sa(e, r)
                : "function" == typeof s
                ? s(n, r, i)
                : r
              : sa(e, r)
            : r;
        }
        function su(e, t, n) {
          return ("video" === e || "audio" === e) && "autoplay" === t;
        }
        function sd(e, t, n = 1 / 0, r = 0) {
          return !e || e.nodeType !== e.ELEMENT_NODE || r > n
            ? -1
            : t(e)
            ? r
            : sd(e.parentNode, t, n, r + 1);
        }
        function sh(e, t) {
          return (n) => {
            if (null === n) return !1;
            try {
              if (e) {
                if ("string" == typeof e) {
                  if (n.matches(`.${e}`)) return !0;
                } else if (
                  (function (e, t) {
                    for (let n = e.classList.length; n--; ) {
                      let r = e.classList[n];
                      if (t.test(r)) return !0;
                    }
                    return !1;
                  })(n, e)
                )
                  return !0;
              }
              if (t && n.matches(t)) return !0;
              return !1;
            } catch (e) {
              return !1;
            }
          };
        }
        function sp(e, t, n, r, i, s) {
          try {
            let o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (null === o) return !1;
            if ("INPUT" === o.tagName) {
              let e = o.getAttribute("autocomplete");
              if (
                [
                  "current-password",
                  "new-password",
                  "cc-number",
                  "cc-exp",
                  "cc-exp-month",
                  "cc-exp-year",
                  "cc-csc",
                ].includes(e)
              )
                return !0;
            }
            let a = -1,
              l = -1;
            if (s) {
              if ((l = sd(o, sh(r, i))) < 0) return !0;
              a = sd(o, sh(t, n), l >= 0 ? l : 1 / 0);
            } else {
              if ((a = sd(o, sh(t, n))) < 0) return !1;
              l = sd(o, sh(r, i), a >= 0 ? a : 1 / 0);
            }
            return a >= 0 ? !(l >= 0) || a <= l : !(l >= 0) && !!s;
          } catch (e) {}
          return !!s;
        }
        function sf(e) {
          return null == e ? "" : e.toLowerCase();
        }
        function sm(e, t) {
          let n;
          let {
              doc: r,
              mirror: i,
              blockClass: s,
              blockSelector: o,
              unblockSelector: a,
              maskAllText: l,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: h,
              skipChild: p = !1,
              inlineStylesheet: f = !0,
              maskInputOptions: m = {},
              maskAttributeFn: y,
              maskTextFn: v,
              maskInputFn: E,
              slimDOMOptions: b,
              dataURLOptions: T = {},
              inlineImages: S = !1,
              recordCanvas: w = !1,
              onSerialize: O,
              onIframeLoad: R,
              iframeLoadTimeout: N = 5e3,
              onStylesheetLoad: C,
              stylesheetLoadTimeout: I = 5e3,
              keepIframeSrcFn: A = () => !1,
              newlyAddedElement: k = !1,
            } = t,
            { preserveWhiteSpace: P = !0 } = t,
            D = (function (e, t) {
              let {
                  doc: n,
                  mirror: r,
                  blockClass: i,
                  blockSelector: s,
                  unblockSelector: o,
                  maskAllText: a,
                  maskAttributeFn: l,
                  maskTextClass: c,
                  unmaskTextClass: u,
                  maskTextSelector: d,
                  unmaskTextSelector: h,
                  inlineStylesheet: p,
                  maskInputOptions: f = {},
                  maskTextFn: m,
                  maskInputFn: y,
                  dataURLOptions: v = {},
                  inlineImages: E,
                  recordCanvas: b,
                  keepIframeSrcFn: T,
                  newlyAddedElement: S = !1,
                } = t,
                w = (function (e, t) {
                  if (!t.hasNode(e)) return;
                  let n = t.getId(e);
                  return 1 === n ? void 0 : n;
                })(n, r);
              switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                  if ("CSS1Compat" !== e.compatMode)
                    return {
                      type: rn.Document,
                      childNodes: [],
                      compatMode: e.compatMode,
                    };
                  return { type: rn.Document, childNodes: [] };
                case e.DOCUMENT_TYPE_NODE:
                  return {
                    type: rn.DocumentType,
                    name: e.name,
                    publicId: e.publicId,
                    systemId: e.systemId,
                    rootId: w,
                  };
                case e.ELEMENT_NODE:
                  return (function (e, t) {
                    let n;
                    let {
                        doc: r,
                        blockClass: i,
                        blockSelector: s,
                        unblockSelector: o,
                        inlineStylesheet: a,
                        maskInputOptions: l = {},
                        maskAttributeFn: c,
                        maskInputFn: u,
                        dataURLOptions: d = {},
                        inlineImages: h,
                        recordCanvas: p,
                        keepIframeSrcFn: f,
                        newlyAddedElement: m = !1,
                        rootId: y,
                        maskAllText: v,
                        maskTextClass: E,
                        unmaskTextClass: b,
                        maskTextSelector: T,
                        unmaskTextSelector: S,
                      } = t,
                      w = (function (e, t, n, r) {
                        try {
                          if (r && e.matches(r)) return !1;
                          if ("string" == typeof t) {
                            if (e.classList.contains(t)) return !0;
                          } else
                            for (let n = e.classList.length; n--; ) {
                              let r = e.classList[n];
                              if (t.test(r)) return !0;
                            }
                          if (n) return e.matches(n);
                        } catch (e) {}
                        return !1;
                      })(e, i, s, o),
                      O = (function (e) {
                        if (e instanceof HTMLFormElement) return "form";
                        let t = i2(e.tagName);
                        return i9.test(t) ? "div" : t;
                      })(e),
                      R = {},
                      N = e.attributes.length;
                    for (let t = 0; t < N; t++) {
                      let n = e.attributes[t];
                      n.name &&
                        !su(O, n.name, n.value) &&
                        (R[n.name] = sc(r, O, i2(n.name), n.value, e, c));
                    }
                    if ("link" === O && a) {
                      let t = Array.from(r.styleSheets).find(
                          (t) => t.href === e.href
                        ),
                        n = null;
                      t && (n = iX(t)),
                        n &&
                          (delete R.rel,
                          delete R.href,
                          (R._cssText = si(n, t.href)));
                    }
                    if (
                      "style" === O &&
                      e.sheet &&
                      !(e.innerText || e.textContent || "").trim().length
                    ) {
                      let t = iX(e.sheet);
                      t && (R._cssText = si(t, sl()));
                    }
                    if (
                      "input" === O ||
                      "textarea" === O ||
                      "select" === O ||
                      "option" === O
                    ) {
                      let t = i4(e),
                        n = i6(e, i3(O), t),
                        r = e.checked;
                      if ("submit" !== t && "button" !== t && n) {
                        let r = sp(
                          e,
                          E,
                          T,
                          b,
                          S,
                          i0({ type: t, tagName: i3(O), maskInputOptions: l })
                        );
                        R.value = i1({
                          isMasked: r,
                          element: e,
                          value: n,
                          maskInputFn: u,
                        });
                      }
                      r && (R.checked = r);
                    }
                    if (
                      ("option" === O &&
                        (e.selected && !l.select
                          ? (R.selected = !0)
                          : delete R.selected),
                      "canvas" === O && p)
                    ) {
                      if ("2d" === e.__context)
                        !(function (e) {
                          let t = e.getContext("2d");
                          if (!t) return !0;
                          for (let n = 0; n < e.width; n += 50)
                            for (let r = 0; r < e.height; r += 50) {
                              let i = t.getImageData;
                              if (
                                new Uint32Array(
                                  (i5 in i ? i[i5] : i).call(
                                    t,
                                    n,
                                    r,
                                    Math.min(50, e.width - n),
                                    Math.min(50, e.height - r)
                                  ).data.buffer
                                ).some((e) => 0 !== e)
                              )
                                return !1;
                            }
                          return !0;
                        })(e) &&
                          (R.rr_dataURL = e.toDataURL(d.type, d.quality));
                      else if (!("__context" in e)) {
                        let t = e.toDataURL(d.type, d.quality),
                          n = document.createElement("canvas");
                        (n.width = e.width),
                          (n.height = e.height),
                          t !== n.toDataURL(d.type, d.quality) &&
                            (R.rr_dataURL = t);
                      }
                    }
                    if ("img" === O && h) {
                      _ ||
                        (g = (_ = r.createElement("canvas")).getContext("2d"));
                      let t = e.crossOrigin;
                      e.crossOrigin = "anonymous";
                      let n = () => {
                        e.removeEventListener("load", n);
                        try {
                          (_.width = e.naturalWidth),
                            (_.height = e.naturalHeight),
                            g.drawImage(e, 0, 0),
                            (R.rr_dataURL = _.toDataURL(d.type, d.quality));
                        } catch (t) {
                          console.warn(
                            `Cannot inline img src=${e.currentSrc}! Error: ${t}`
                          );
                        }
                        t
                          ? (R.crossOrigin = t)
                          : e.removeAttribute("crossorigin");
                      };
                      e.complete && 0 !== e.naturalWidth
                        ? n()
                        : e.addEventListener("load", n);
                    }
                    if (
                      (("audio" === O || "video" === O) &&
                        ((R.rr_mediaState = e.paused ? "paused" : "played"),
                        (R.rr_mediaCurrentTime = e.currentTime)),
                      !m &&
                        (e.scrollLeft && (R.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (R.rr_scrollTop = e.scrollTop)),
                      w)
                    ) {
                      let { width: t, height: n } = e.getBoundingClientRect();
                      R = {
                        class: R.class,
                        rr_width: `${t}px`,
                        rr_height: `${n}px`,
                      };
                    }
                    "iframe" !== O ||
                      f(R.src) ||
                      (e.contentDocument || (R.rr_src = R.src), delete R.src);
                    try {
                      customElements.get(O) && (n = !0);
                    } catch (e) {}
                    return {
                      type: rn.Element,
                      tagName: O,
                      attributes: R,
                      childNodes: [],
                      isSVG:
                        !!("svg" === e.tagName || e.ownerSVGElement) || void 0,
                      needBlock: w,
                      rootId: y,
                      isCustom: n,
                    };
                  })(e, {
                    doc: n,
                    blockClass: i,
                    blockSelector: s,
                    unblockSelector: o,
                    inlineStylesheet: p,
                    maskAttributeFn: l,
                    maskInputOptions: f,
                    maskInputFn: y,
                    dataURLOptions: v,
                    inlineImages: E,
                    recordCanvas: b,
                    keepIframeSrcFn: T,
                    newlyAddedElement: S,
                    rootId: w,
                    maskAllText: a,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                  });
                case e.TEXT_NODE:
                  return (function (e, t) {
                    let {
                        maskAllText: n,
                        maskTextClass: r,
                        unmaskTextClass: i,
                        maskTextSelector: s,
                        unmaskTextSelector: o,
                        maskTextFn: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        rootId: u,
                      } = t,
                      d = e.parentNode && e.parentNode.tagName,
                      h = e.textContent,
                      p = "STYLE" === d || void 0,
                      f = "SCRIPT" === d || void 0,
                      m = "TEXTAREA" === d || void 0;
                    if (p && h) {
                      try {
                        e.nextSibling ||
                          e.previousSibling ||
                          (iQ([
                            e,
                            "access",
                            (e) => e.parentNode,
                            "access",
                            (e) => e.sheet,
                            "optionalAccess",
                            (e) => e.cssRules,
                          ]) &&
                            (h = iX(e.parentNode.sheet)));
                      } catch (t) {
                        console.warn(
                          `Cannot get CSS styles from text's parentNode. Error: ${t}`,
                          e
                        );
                      }
                      h = si(h, sl());
                    }
                    f && (h = "SCRIPT_PLACEHOLDER");
                    let _ = sp(e, r, s, i, o, n);
                    return (
                      p ||
                        f ||
                        m ||
                        !h ||
                        !_ ||
                        (h = a
                          ? a(h, e.parentElement)
                          : h.replace(/[\S]/g, "*")),
                      m &&
                        h &&
                        (l.textarea || _) &&
                        (h = c ? c(h, e.parentNode) : h.replace(/[\S]/g, "*")),
                      "OPTION" === d &&
                        h &&
                        (h = i1({
                          isMasked: sp(
                            e,
                            r,
                            s,
                            i,
                            o,
                            i0({ type: null, tagName: d, maskInputOptions: l })
                          ),
                          element: e,
                          value: h,
                          maskInputFn: c,
                        })),
                      {
                        type: rn.Text,
                        textContent: h || "",
                        isStyle: p,
                        rootId: u,
                      }
                    );
                  })(e, {
                    maskAllText: a,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: d,
                    unmaskTextSelector: h,
                    maskTextFn: m,
                    maskInputOptions: f,
                    maskInputFn: y,
                    rootId: w,
                  });
                case e.CDATA_SECTION_NODE:
                  return { type: rn.CDATA, textContent: "", rootId: w };
                case e.COMMENT_NODE:
                  return {
                    type: rn.Comment,
                    textContent: e.textContent || "",
                    rootId: w,
                  };
                default:
                  return !1;
              }
            })(e, {
              doc: r,
              mirror: i,
              blockClass: s,
              blockSelector: o,
              maskAllText: l,
              unblockSelector: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: h,
              inlineStylesheet: f,
              maskInputOptions: m,
              maskAttributeFn: y,
              maskTextFn: v,
              maskInputFn: E,
              dataURLOptions: T,
              inlineImages: S,
              recordCanvas: w,
              keepIframeSrcFn: A,
              newlyAddedElement: k,
            });
          if (!D) return console.warn(e, "not serialized"), null;
          n = i.hasNode(e)
            ? i.getId(e)
            : !(function (e, t) {
                if (t.comment && e.type === rn.Comment) return !0;
                if (e.type === rn.Element) {
                  if (
                    (t.script &&
                      ("script" === e.tagName ||
                        ("link" === e.tagName &&
                          ("preload" === e.attributes.rel ||
                            "modulepreload" === e.attributes.rel) &&
                          "script" === e.attributes.as) ||
                        ("link" === e.tagName &&
                          "prefetch" === e.attributes.rel &&
                          "string" == typeof e.attributes.href &&
                          e.attributes.href.endsWith(".js")))) ||
                    (t.headFavicon &&
                      (("link" === e.tagName &&
                        "shortcut icon" === e.attributes.rel) ||
                        ("meta" === e.tagName &&
                          (sf(e.attributes.name).match(
                            /^msapplication-tile(image|color)$/
                          ) ||
                            "application-name" === sf(e.attributes.name) ||
                            "icon" === sf(e.attributes.rel) ||
                            "apple-touch-icon" === sf(e.attributes.rel) ||
                            "shortcut icon" === sf(e.attributes.rel)))))
                  )
                    return !0;
                  if ("meta" === e.tagName) {
                    if (
                      (t.headMetaDescKeywords &&
                        sf(e.attributes.name).match(
                          /^description|keywords$/
                        )) ||
                      (t.headMetaSocial &&
                        (sf(e.attributes.property).match(/^(og|twitter|fb):/) ||
                          sf(e.attributes.name).match(/^(og|twitter):/) ||
                          "pinterest" === sf(e.attributes.name)))
                    )
                      return !0;
                    if (
                      t.headMetaRobots &&
                      ("robots" === sf(e.attributes.name) ||
                        "googlebot" === sf(e.attributes.name) ||
                        "bingbot" === sf(e.attributes.name))
                    )
                      return !0;
                    if (
                      t.headMetaHttpEquiv &&
                      void 0 !== e.attributes["http-equiv"]
                    )
                      return !0;
                    else if (
                      t.headMetaAuthorship &&
                      ("author" === sf(e.attributes.name) ||
                        "generator" === sf(e.attributes.name) ||
                        "framework" === sf(e.attributes.name) ||
                        "publisher" === sf(e.attributes.name) ||
                        "progid" === sf(e.attributes.name) ||
                        sf(e.attributes.property).match(/^article:/) ||
                        sf(e.attributes.property).match(/^product:/))
                    )
                      return !0;
                    else if (
                      t.headMetaVerification &&
                      ("google-site-verification" === sf(e.attributes.name) ||
                        "yandex-verification" === sf(e.attributes.name) ||
                        "csrf-token" === sf(e.attributes.name) ||
                        "p:domain_verify" === sf(e.attributes.name) ||
                        "verify-v1" === sf(e.attributes.name) ||
                        "verification" === sf(e.attributes.name) ||
                        "shopify-checkout-api-token" === sf(e.attributes.name))
                    )
                      return !0;
                  }
                }
                return !1;
              })(D, b) &&
              (P ||
                D.type !== rn.Text ||
                D.isStyle ||
                D.textContent.replace(/^\s+|\s+$/gm, "").length)
            ? i7()
            : -2;
          let x = Object.assign(D, { id: n });
          if ((i.add(e, x), -2 === n)) return null;
          O && O(e);
          let L = !p;
          if (x.type === rn.Element) {
            (L = L && !x.needBlock), delete x.needBlock;
            let t = e.shadowRoot;
            t && iK(t) && (x.isShadowHost = !0);
          }
          if ((x.type === rn.Document || x.type === rn.Element) && L) {
            b.headWhitespace &&
              x.type === rn.Element &&
              "head" === x.tagName &&
              (P = !1);
            let t = {
              doc: r,
              mirror: i,
              blockClass: s,
              blockSelector: o,
              maskAllText: l,
              unblockSelector: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: d,
              unmaskTextSelector: h,
              skipChild: p,
              inlineStylesheet: f,
              maskInputOptions: m,
              maskAttributeFn: y,
              maskTextFn: v,
              maskInputFn: E,
              slimDOMOptions: b,
              dataURLOptions: T,
              inlineImages: S,
              recordCanvas: w,
              preserveWhiteSpace: P,
              onSerialize: O,
              onIframeLoad: R,
              iframeLoadTimeout: N,
              onStylesheetLoad: C,
              stylesheetLoadTimeout: I,
              keepIframeSrcFn: A,
            };
            for (let n of Array.from(e.childNodes)) {
              let e = sm(n, t);
              e && x.childNodes.push(e);
            }
            if (e.nodeType === e.ELEMENT_NODE && e.shadowRoot)
              for (let n of Array.from(e.shadowRoot.childNodes)) {
                let r = sm(n, t);
                r &&
                  (iK(e.shadowRoot) && (r.isShadow = !0), x.childNodes.push(r));
              }
          }
          return (
            e.parentNode &&
              iY(e.parentNode) &&
              iK(e.parentNode) &&
              (x.isShadow = !0),
            x.type === rn.Element &&
              "iframe" === x.tagName &&
              (function (e, t, n) {
                let r;
                let i = e.contentWindow;
                if (!i) return;
                let s = !1;
                try {
                  r = i.document.readyState;
                } catch (e) {
                  return;
                }
                if ("complete" !== r) {
                  let r = setTimeout(() => {
                    s || (t(), (s = !0));
                  }, n);
                  e.addEventListener("load", () => {
                    clearTimeout(r), (s = !0), t();
                  });
                  return;
                }
                let o = "about:blank";
                if (i.location.href !== o || e.src === o || "" === e.src)
                  return setTimeout(t, 0), e.addEventListener("load", t);
                e.addEventListener("load", t);
              })(
                e,
                () => {
                  let t = e.contentDocument;
                  if (t && R) {
                    let n = sm(t, {
                      doc: t,
                      mirror: i,
                      blockClass: s,
                      blockSelector: o,
                      unblockSelector: a,
                      maskAllText: l,
                      maskTextClass: c,
                      unmaskTextClass: u,
                      maskTextSelector: d,
                      unmaskTextSelector: h,
                      skipChild: !1,
                      inlineStylesheet: f,
                      maskInputOptions: m,
                      maskAttributeFn: y,
                      maskTextFn: v,
                      maskInputFn: E,
                      slimDOMOptions: b,
                      dataURLOptions: T,
                      inlineImages: S,
                      recordCanvas: w,
                      preserveWhiteSpace: P,
                      onSerialize: O,
                      onIframeLoad: R,
                      iframeLoadTimeout: N,
                      onStylesheetLoad: C,
                      stylesheetLoadTimeout: I,
                      keepIframeSrcFn: A,
                    });
                    n && R(e, n);
                  }
                },
                N
              ),
            x.type === rn.Element &&
              "link" === x.tagName &&
              "stylesheet" === x.attributes.rel &&
              (function (e, t, n) {
                let r,
                  i = !1;
                try {
                  r = e.sheet;
                } catch (e) {
                  return;
                }
                if (r) return;
                let s = setTimeout(() => {
                  i || (t(), (i = !0));
                }, n);
                e.addEventListener("load", () => {
                  clearTimeout(s), (i = !0), t();
                });
              })(
                e,
                () => {
                  if (C) {
                    let t = sm(e, {
                      doc: r,
                      mirror: i,
                      blockClass: s,
                      blockSelector: o,
                      unblockSelector: a,
                      maskAllText: l,
                      maskTextClass: c,
                      unmaskTextClass: u,
                      maskTextSelector: d,
                      unmaskTextSelector: h,
                      skipChild: !1,
                      inlineStylesheet: f,
                      maskInputOptions: m,
                      maskAttributeFn: y,
                      maskTextFn: v,
                      maskInputFn: E,
                      slimDOMOptions: b,
                      dataURLOptions: T,
                      inlineImages: S,
                      recordCanvas: w,
                      preserveWhiteSpace: P,
                      onSerialize: O,
                      onIframeLoad: R,
                      iframeLoadTimeout: N,
                      onStylesheetLoad: C,
                      stylesheetLoadTimeout: I,
                      keepIframeSrcFn: A,
                    });
                    t && C(e, t);
                  }
                },
                I
              ),
            x
          );
        }
        function s_(e) {
          let t;
          let n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              s = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = s(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = s((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        function sg(e, t, n = document) {
          let r = { capture: !0, passive: !0 };
          return (
            n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
          );
        }
        let sy =
            "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
          sv = {
            map: {},
            getId: () => (console.error(sy), -1),
            getNode: () => (console.error(sy), null),
            removeNodeFromMap() {
              console.error(sy);
            },
            has: () => (console.error(sy), !1),
            reset() {
              console.error(sy);
            },
          };
        function sE(e, t, n = {}) {
          let r = null,
            i = 0;
          return function (...s) {
            let o = Date.now();
            i || !1 !== n.leading || (i = o);
            let a = t - (o - i),
              l = this;
            a <= 0 || a > t
              ? (r &&
                  ((function (...e) {
                    sj("clearTimeout")(...e);
                  })(r),
                  (r = null)),
                (i = o),
                e.apply(l, s))
              : r ||
                !1 === n.trailing ||
                (r = sU(() => {
                  (i = !1 === n.leading ? 0 : Date.now()),
                    (r = null),
                    e.apply(l, s);
                }, a));
          };
        }
        function sb(e, t, n) {
          try {
            if (!(t in e)) return () => {};
            let r = e[t],
              i = n(r);
            return (
              "function" == typeof i &&
                ((i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                  __rrweb_original__: { enumerable: !1, value: r },
                })),
              (e[t] = i),
              () => {
                e[t] = r;
              }
            );
          } catch (e) {
            return () => {};
          }
        }
        "undefined" != typeof window &&
          window.Proxy &&
          window.Reflect &&
          (sv = new Proxy(sv, {
            get: (e, t, n) => (
              "map" === t && console.error(sy), Reflect.get(e, t, n)
            ),
          }));
        let sT = Date.now;
        function sS(e) {
          let t = e.document;
          return {
            left: t.scrollingElement
              ? t.scrollingElement.scrollLeft
              : void 0 !== e.pageXOffset
              ? e.pageXOffset
              : s_([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollLeft,
                ]) ||
                s_([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollLeft,
                ]) ||
                s_([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.scrollLeft,
                ]) ||
                0,
            top: t.scrollingElement
              ? t.scrollingElement.scrollTop
              : void 0 !== e.pageYOffset
              ? e.pageYOffset
              : s_([
                  t,
                  "optionalAccess",
                  (e) => e.documentElement,
                  "access",
                  (e) => e.scrollTop,
                ]) ||
                s_([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.parentElement,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                s_([
                  t,
                  "optionalAccess",
                  (e) => e.body,
                  "optionalAccess",
                  (e) => e.scrollTop,
                ]) ||
                0,
          };
        }
        function sw() {
          return (
            window.innerHeight ||
            (document.documentElement &&
              document.documentElement.clientHeight) ||
            (document.body && document.body.clientHeight)
          );
        }
        function sO() {
          return (
            window.innerWidth ||
            (document.documentElement &&
              document.documentElement.clientWidth) ||
            (document.body && document.body.clientWidth)
          );
        }
        function sR(e) {
          return e
            ? e.nodeType === e.ELEMENT_NODE
              ? e
              : e.parentElement
            : null;
        }
        function sN(e, t, n, r, i) {
          if (!e) return !1;
          let s = sR(e);
          if (!s) return !1;
          let o = sh(t, n);
          if (!i) {
            let e = r && s.matches(r);
            return o(s) && !e;
          }
          let a = sd(s, o),
            l = -1;
          return (
            !(a < 0) &&
            (r && (l = sd(s, sh(null, r))), (a > -1 && l < 0) || a < l)
          );
        }
        function sC(e, t) {
          return -2 === t.getId(e);
        }
        function sI(e) {
          return !!e.changedTouches;
        }
        function sA(e, t) {
          return !!("IFRAME" === e.nodeName && t.getMeta(e));
        }
        function sk(e, t) {
          return !!(
            "LINK" === e.nodeName &&
            e.nodeType === e.ELEMENT_NODE &&
            e.getAttribute &&
            "stylesheet" === e.getAttribute("rel") &&
            t.getMeta(e)
          );
        }
        function sP(e) {
          return !!s_([e, "optionalAccess", (e) => e.shadowRoot]);
        }
        /[1-9][0-9]{12}/.test(Date.now().toString()) ||
          (sT = () => new Date().getTime());
        class sD {
          constructor() {
            (this.id = 1),
              (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map());
          }
          getId(e) {
            var t;
            return (t = this.styleIDMap.get(e)), null != t ? t : -1;
          }
          has(e) {
            return this.styleIDMap.has(e);
          }
          add(e, t) {
            let n;
            return this.has(e)
              ? this.getId(e)
              : ((n = void 0 === t ? this.id++ : t),
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n);
          }
          getStyle(e) {
            return this.idStyleMap.get(e) || null;
          }
          reset() {
            (this.styleIDMap = new WeakMap()),
              (this.idStyleMap = new Map()),
              (this.id = 1);
          }
          generateId() {
            return this.id++;
          }
        }
        function sx(e) {
          let t = null;
          return (
            s_([
              e,
              "access",
              (e) => e.getRootNode,
              "optionalCall",
              (e) => e(),
              "optionalAccess",
              (e) => e.nodeType,
            ]) === Node.DOCUMENT_FRAGMENT_NODE &&
              e.getRootNode().host &&
              (t = e.getRootNode().host),
            t
          );
        }
        function sL(e) {
          let t = e.ownerDocument;
          return (
            !!t &&
            (t.contains(e) ||
              (function (e) {
                let t = e.ownerDocument;
                if (!t) return !1;
                let n = (function (e) {
                  let t,
                    n = e;
                  for (; (t = sx(n)); ) n = t;
                  return n;
                })(e);
                return t.contains(n);
              })(e))
          );
        }
        let sM = {};
        function sj(e) {
          let t = sM[e];
          if (t) return t;
          let n = window.document,
            r = window[e];
          if (n && "function" == typeof n.createElement)
            try {
              let t = n.createElement("iframe");
              (t.hidden = !0), n.head.appendChild(t);
              let i = t.contentWindow;
              i && i[e] && (r = i[e]), n.head.removeChild(t);
            } catch (e) {}
          return (sM[e] = r.bind(window));
        }
        function sU(...e) {
          return sj("setTimeout")(...e);
        }
        var sF =
            (((n4 = sF || {})[(n4.DomContentLoaded = 0)] = "DomContentLoaded"),
            (n4[(n4.Load = 1)] = "Load"),
            (n4[(n4.FullSnapshot = 2)] = "FullSnapshot"),
            (n4[(n4.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
            (n4[(n4.Meta = 4)] = "Meta"),
            (n4[(n4.Custom = 5)] = "Custom"),
            (n4[(n4.Plugin = 6)] = "Plugin"),
            n4),
          s$ =
            (((n6 = s$ || {})[(n6.Mutation = 0)] = "Mutation"),
            (n6[(n6.MouseMove = 1)] = "MouseMove"),
            (n6[(n6.MouseInteraction = 2)] = "MouseInteraction"),
            (n6[(n6.Scroll = 3)] = "Scroll"),
            (n6[(n6.ViewportResize = 4)] = "ViewportResize"),
            (n6[(n6.Input = 5)] = "Input"),
            (n6[(n6.TouchMove = 6)] = "TouchMove"),
            (n6[(n6.MediaInteraction = 7)] = "MediaInteraction"),
            (n6[(n6.StyleSheetRule = 8)] = "StyleSheetRule"),
            (n6[(n6.CanvasMutation = 9)] = "CanvasMutation"),
            (n6[(n6.Font = 10)] = "Font"),
            (n6[(n6.Log = 11)] = "Log"),
            (n6[(n6.Drag = 12)] = "Drag"),
            (n6[(n6.StyleDeclaration = 13)] = "StyleDeclaration"),
            (n6[(n6.Selection = 14)] = "Selection"),
            (n6[(n6.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
            (n6[(n6.CustomElement = 16)] = "CustomElement"),
            n6),
          sB =
            (((n8 = sB || {})[(n8.MouseUp = 0)] = "MouseUp"),
            (n8[(n8.MouseDown = 1)] = "MouseDown"),
            (n8[(n8.Click = 2)] = "Click"),
            (n8[(n8.ContextMenu = 3)] = "ContextMenu"),
            (n8[(n8.DblClick = 4)] = "DblClick"),
            (n8[(n8.Focus = 5)] = "Focus"),
            (n8[(n8.Blur = 6)] = "Blur"),
            (n8[(n8.TouchStart = 7)] = "TouchStart"),
            (n8[(n8.TouchMove_Departed = 8)] = "TouchMove_Departed"),
            (n8[(n8.TouchEnd = 9)] = "TouchEnd"),
            (n8[(n8.TouchCancel = 10)] = "TouchCancel"),
            n8),
          sq =
            (((n9 = sq || {})[(n9.Mouse = 0)] = "Mouse"),
            (n9[(n9.Pen = 1)] = "Pen"),
            (n9[(n9.Touch = 2)] = "Touch"),
            n9);
        class sH {
          constructor() {
            (this.length = 0), (this.head = null), (this.tail = null);
          }
          get(e) {
            if (e >= this.length) throw Error("Position outside of list range");
            let t = this.head;
            for (let n = 0; n < e; n++)
              t =
                (function (e) {
                  let t;
                  let n = e[0],
                    r = 1;
                  for (; r < e.length; ) {
                    let i = e[r],
                      s = e[r + 1];
                    if (
                      ((r += 2),
                      ("optionalAccess" === i || "optionalCall" === i) &&
                        null == n)
                    )
                      return;
                    "access" === i || "optionalAccess" === i
                      ? ((t = n), (n = s(n)))
                      : ("call" === i || "optionalCall" === i) &&
                        ((n = s((...e) => n.call(t, ...e))), (t = void 0));
                  }
                  return n;
                })([t, "optionalAccess", (e) => e.next]) || null;
            return t;
          }
          addNode(e) {
            let t = { value: e, previous: null, next: null };
            if (
              ((e.__ln = t), e.previousSibling && "__ln" in e.previousSibling)
            ) {
              let n = e.previousSibling.__ln.next;
              (t.next = n),
                (t.previous = e.previousSibling.__ln),
                (e.previousSibling.__ln.next = t),
                n && (n.previous = t);
            } else if (
              e.nextSibling &&
              "__ln" in e.nextSibling &&
              e.nextSibling.__ln.previous
            ) {
              let n = e.nextSibling.__ln.previous;
              (t.previous = n),
                (t.next = e.nextSibling.__ln),
                (e.nextSibling.__ln.previous = t),
                n && (n.next = t);
            } else
              this.head && (this.head.previous = t),
                (t.next = this.head),
                (this.head = t);
            null === t.next && (this.tail = t), this.length++;
          }
          removeNode(e) {
            let t = e.__ln;
            this.head &&
              (t.previous
                ? ((t.previous.next = t.next),
                  t.next
                    ? (t.next.previous = t.previous)
                    : (this.tail = t.previous))
                : ((this.head = t.next),
                  this.head ? (this.head.previous = null) : (this.tail = null)),
              e.__ln && delete e.__ln,
              this.length--);
          }
        }
        let sW = (e, t) => `${e}@${t}`;
        class sz {
          constructor() {
            (this.frozen = !1),
              (this.locked = !1),
              (this.texts = []),
              (this.attributes = []),
              (this.attributeMap = new WeakMap()),
              (this.removes = []),
              (this.mapRemoves = []),
              (this.movedMap = {}),
              (this.addedSet = new Set()),
              (this.movedSet = new Set()),
              (this.droppedSet = new Set()),
              (this.processMutations = (e) => {
                e.forEach(this.processMutation), this.emit();
              }),
              (this.emit = () => {
                if (this.frozen || this.locked) return;
                let e = [],
                  t = new Set(),
                  n = new sH(),
                  r = (e) => {
                    let t = e,
                      n = -2;
                    for (; -2 === n; )
                      n = (t = t && t.nextSibling) && this.mirror.getId(t);
                    return n;
                  },
                  i = (i) => {
                    if (!i.parentNode || !sL(i)) return;
                    let s = iY(i.parentNode)
                        ? this.mirror.getId(sx(i))
                        : this.mirror.getId(i.parentNode),
                      o = r(i);
                    if (-1 === s || -1 === o) return n.addNode(i);
                    let a = sm(i, {
                      doc: this.doc,
                      mirror: this.mirror,
                      blockClass: this.blockClass,
                      blockSelector: this.blockSelector,
                      maskAllText: this.maskAllText,
                      unblockSelector: this.unblockSelector,
                      maskTextClass: this.maskTextClass,
                      unmaskTextClass: this.unmaskTextClass,
                      maskTextSelector: this.maskTextSelector,
                      unmaskTextSelector: this.unmaskTextSelector,
                      skipChild: !0,
                      newlyAddedElement: !0,
                      inlineStylesheet: this.inlineStylesheet,
                      maskInputOptions: this.maskInputOptions,
                      maskAttributeFn: this.maskAttributeFn,
                      maskTextFn: this.maskTextFn,
                      maskInputFn: this.maskInputFn,
                      slimDOMOptions: this.slimDOMOptions,
                      dataURLOptions: this.dataURLOptions,
                      recordCanvas: this.recordCanvas,
                      inlineImages: this.inlineImages,
                      onSerialize: (e) => {
                        sA(e, this.mirror) && this.iframeManager.addIframe(e),
                          sk(e, this.mirror) &&
                            this.stylesheetManager.trackLinkElement(e),
                          sP(i) &&
                            this.shadowDomManager.addShadowRoot(
                              i.shadowRoot,
                              this.doc
                            );
                      },
                      onIframeLoad: (e, t) => {
                        this.iframeManager.attachIframe(e, t),
                          this.shadowDomManager.observeAttachShadow(e);
                      },
                      onStylesheetLoad: (e, t) => {
                        this.stylesheetManager.attachLinkElement(e, t);
                      },
                    });
                    a &&
                      (e.push({ parentId: s, nextId: o, node: a }),
                      t.add(a.id));
                  };
                for (; this.mapRemoves.length; )
                  this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let e of this.movedSet)
                  (!sV(this.removes, e, this.mirror) ||
                    this.movedSet.has(e.parentNode)) &&
                    i(e);
                for (let e of this.addedSet)
                  sQ(this.droppedSet, e) || sV(this.removes, e, this.mirror)
                    ? sQ(this.movedSet, e)
                      ? i(e)
                      : this.droppedSet.add(e)
                    : i(e);
                let s = null;
                for (; n.length; ) {
                  let e = null;
                  if (s) {
                    let t = this.mirror.getId(s.value.parentNode),
                      n = r(s.value);
                    -1 !== t && -1 !== n && (e = s);
                  }
                  if (!e) {
                    let t = n.tail;
                    for (; t; ) {
                      let n = t;
                      if (((t = t.previous), n)) {
                        let t = this.mirror.getId(n.value.parentNode);
                        if (-1 === r(n.value)) continue;
                        if (-1 !== t) {
                          e = n;
                          break;
                        }
                        {
                          let t = n.value;
                          if (
                            t.parentNode &&
                            t.parentNode.nodeType ===
                              Node.DOCUMENT_FRAGMENT_NODE
                          ) {
                            let r = t.parentNode.host;
                            if (-1 !== this.mirror.getId(r)) {
                              e = n;
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (!e) {
                    for (; n.head; ) n.removeNode(n.head.value);
                    break;
                  }
                  (s = e.previous), n.removeNode(e.value), i(e.value);
                }
                let o = {
                  texts: this.texts
                    .map((e) => ({
                      id: this.mirror.getId(e.node),
                      value: e.value,
                    }))
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  attributes: this.attributes
                    .map((e) => {
                      let { attributes: t } = e;
                      if ("string" == typeof t.style) {
                        let n = JSON.stringify(e.styleDiff),
                          r = JSON.stringify(e._unchangedStyles);
                        n.length < t.style.length &&
                          (n + r).split("var(").length ===
                            t.style.split("var(").length &&
                          (t.style = e.styleDiff);
                      }
                      return { id: this.mirror.getId(e.node), attributes: t };
                    })
                    .filter((e) => !t.has(e.id))
                    .filter((e) => this.mirror.has(e.id)),
                  removes: this.removes,
                  adds: e,
                };
                (o.texts.length ||
                  o.attributes.length ||
                  o.removes.length ||
                  o.adds.length) &&
                  ((this.texts = []),
                  (this.attributes = []),
                  (this.attributeMap = new WeakMap()),
                  (this.removes = []),
                  (this.addedSet = new Set()),
                  (this.movedSet = new Set()),
                  (this.droppedSet = new Set()),
                  (this.movedMap = {}),
                  this.mutationCb(o));
              }),
              (this.processMutation = (e) => {
                if (!sC(e.target, this.mirror))
                  switch (e.type) {
                    case "characterData": {
                      let t = e.target.textContent;
                      sN(
                        e.target,
                        this.blockClass,
                        this.blockSelector,
                        this.unblockSelector,
                        !1
                      ) ||
                        t === e.oldValue ||
                        this.texts.push({
                          value:
                            sp(
                              e.target,
                              this.maskTextClass,
                              this.maskTextSelector,
                              this.unmaskTextClass,
                              this.unmaskTextSelector,
                              this.maskAllText
                            ) && t
                              ? this.maskTextFn
                                ? this.maskTextFn(t, sR(e.target))
                                : t.replace(/[\S]/g, "*")
                              : t,
                          node: e.target,
                        });
                      break;
                    }
                    case "attributes": {
                      let t = e.target,
                        n = e.attributeName,
                        r = e.target.getAttribute(n);
                      if ("value" === n) {
                        let n = i4(t),
                          i = t.tagName;
                        r = i6(t, i, n);
                        let s = i0({
                          maskInputOptions: this.maskInputOptions,
                          tagName: i,
                          type: n,
                        });
                        r = i1({
                          isMasked: sp(
                            e.target,
                            this.maskTextClass,
                            this.maskTextSelector,
                            this.unmaskTextClass,
                            this.unmaskTextSelector,
                            s
                          ),
                          element: t,
                          value: r,
                          maskInputFn: this.maskInputFn,
                        });
                      }
                      if (
                        sN(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !1
                        ) ||
                        r === e.oldValue
                      )
                        return;
                      let i = this.attributeMap.get(e.target);
                      if (
                        "IFRAME" === t.tagName &&
                        "src" === n &&
                        !this.keepIframeSrcFn(r)
                      ) {
                        if (t.contentDocument) return;
                        n = "rr_src";
                      }
                      if (
                        (i ||
                          ((i = {
                            node: e.target,
                            attributes: {},
                            styleDiff: {},
                            _unchangedStyles: {},
                          }),
                          this.attributes.push(i),
                          this.attributeMap.set(e.target, i)),
                        "type" === n &&
                          "INPUT" === t.tagName &&
                          "password" === (e.oldValue || "").toLowerCase() &&
                          t.setAttribute("data-rr-is-password", "true"),
                        !su(t.tagName, n) &&
                          ((i.attributes[n] = sc(
                            this.doc,
                            i2(t.tagName),
                            i2(n),
                            r,
                            t,
                            this.maskAttributeFn
                          )),
                          "style" === n))
                      ) {
                        if (!this.unattachedDoc)
                          try {
                            this.unattachedDoc =
                              document.implementation.createHTMLDocument();
                          } catch (e) {
                            this.unattachedDoc = this.doc;
                          }
                        let n = this.unattachedDoc.createElement("span");
                        for (let r of (e.oldValue &&
                          n.setAttribute("style", e.oldValue),
                        Array.from(t.style))) {
                          let e = t.style.getPropertyValue(r),
                            s = t.style.getPropertyPriority(r);
                          e !== n.style.getPropertyValue(r) ||
                          s !== n.style.getPropertyPriority(r)
                            ? "" === s
                              ? (i.styleDiff[r] = e)
                              : (i.styleDiff[r] = [e, s])
                            : (i._unchangedStyles[r] = [e, s]);
                        }
                        for (let e of Array.from(n.style))
                          "" === t.style.getPropertyValue(e) &&
                            (i.styleDiff[e] = !1);
                      }
                      break;
                    }
                    case "childList":
                      if (
                        sN(
                          e.target,
                          this.blockClass,
                          this.blockSelector,
                          this.unblockSelector,
                          !0
                        )
                      )
                        return;
                      e.addedNodes.forEach((t) => this.genAdds(t, e.target)),
                        e.removedNodes.forEach((t) => {
                          let n = this.mirror.getId(t),
                            r = iY(e.target)
                              ? this.mirror.getId(e.target.host)
                              : this.mirror.getId(e.target);
                          sN(
                            e.target,
                            this.blockClass,
                            this.blockSelector,
                            this.unblockSelector,
                            !1
                          ) ||
                            sC(t, this.mirror) ||
                            -1 === this.mirror.getId(t) ||
                            (this.addedSet.has(t)
                              ? (sG(this.addedSet, t), this.droppedSet.add(t))
                              : (this.addedSet.has(e.target) && -1 === n) ||
                                (function e(t, n) {
                                  if (iY(t)) return !1;
                                  let r = n.getId(t);
                                  return (
                                    !n.has(r) ||
                                    ((!t.parentNode ||
                                      t.parentNode.nodeType !==
                                        t.DOCUMENT_NODE) &&
                                      (!t.parentNode || e(t.parentNode, n)))
                                  );
                                })(e.target, this.mirror) ||
                                (this.movedSet.has(t) && this.movedMap[sW(n, r)]
                                  ? sG(this.movedSet, t)
                                  : this.removes.push({
                                      parentId: r,
                                      id: n,
                                      isShadow:
                                        !!(iY(e.target) && iK(e.target)) ||
                                        void 0,
                                    })),
                            this.mapRemoves.push(t));
                        });
                  }
              }),
              (this.genAdds = (e, t) => {
                if (
                  !this.processedNodeManager.inOtherBuffer(e, this) &&
                  !(this.addedSet.has(e) || this.movedSet.has(e))
                ) {
                  if (this.mirror.hasNode(e)) {
                    if (sC(e, this.mirror)) return;
                    this.movedSet.add(e);
                    let n = null;
                    t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                      n &&
                        -1 !== n &&
                        (this.movedMap[sW(this.mirror.getId(e), n)] = !0);
                  } else this.addedSet.add(e), this.droppedSet.delete(e);
                  !sN(
                    e,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1
                  ) &&
                    (e.childNodes.forEach((e) => this.genAdds(e)),
                    sP(e) &&
                      e.shadowRoot.childNodes.forEach((t) => {
                        this.processedNodeManager.add(t, this),
                          this.genAdds(t, e);
                      }));
                }
              });
          }
          init(e) {
            [
              "mutationCb",
              "blockClass",
              "blockSelector",
              "unblockSelector",
              "maskAllText",
              "maskTextClass",
              "unmaskTextClass",
              "maskTextSelector",
              "unmaskTextSelector",
              "inlineStylesheet",
              "maskInputOptions",
              "maskAttributeFn",
              "maskTextFn",
              "maskInputFn",
              "keepIframeSrcFn",
              "recordCanvas",
              "inlineImages",
              "slimDOMOptions",
              "dataURLOptions",
              "doc",
              "mirror",
              "iframeManager",
              "stylesheetManager",
              "shadowDomManager",
              "canvasManager",
              "processedNodeManager",
            ].forEach((t) => {
              this[t] = e[t];
            });
          }
          freeze() {
            (this.frozen = !0), this.canvasManager.freeze();
          }
          unfreeze() {
            (this.frozen = !1), this.canvasManager.unfreeze(), this.emit();
          }
          isFrozen() {
            return this.frozen;
          }
          lock() {
            (this.locked = !0), this.canvasManager.lock();
          }
          unlock() {
            (this.locked = !1), this.canvasManager.unlock(), this.emit();
          }
          reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset();
          }
        }
        function sG(e, t) {
          e.delete(t), t.childNodes.forEach((t) => sG(e, t));
        }
        function sV(e, t, n) {
          return (
            0 !== e.length &&
            (function e(t, n, r) {
              let { parentNode: i } = n;
              if (!i) return !1;
              let s = r.getId(i);
              return !!t.some((e) => e.id === s) || e(t, i, r);
            })(e, t, n)
          );
        }
        function sQ(e, t) {
          return (
            0 !== e.size &&
            (function e(t, n) {
              let { parentNode: r } = n;
              return !!r && (!!t.has(r) || e(t, r));
            })(e, t)
          );
        }
        let sY = (e) =>
          y
            ? (...t) => {
                try {
                  return e(...t);
                } catch (e) {
                  if (y && !0 === y(e)) return () => {};
                  throw e;
                }
              }
            : e;
        function sK(e) {
          let t;
          let n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              s = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = s(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = s((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        let sX = [];
        function sJ(e) {
          try {
            if ("composedPath" in e) {
              let t = e.composedPath();
              if (t.length) return t[0];
            } else if ("path" in e && e.path.length) return e.path[0];
          } catch (e) {}
          return e && e.target;
        }
        function sZ(e, t) {
          let n = new sz();
          sX.push(n), n.init(e);
          let r = window.MutationObserver || window.__rrMutationObserver,
            i = sK([
              window,
              "optionalAccess",
              (e) => e.Zone,
              "optionalAccess",
              (e) => e.__symbol__,
              "optionalCall",
              (e) => e("MutationObserver"),
            ]);
          i && window[i] && (r = window[i]);
          let s = new r(
            sY((t) => {
              (e.onMutation && !1 === e.onMutation(t)) ||
                n.processMutations.bind(n)(t);
            })
          );
          return (
            s.observe(t, {
              attributes: !0,
              attributeOldValue: !0,
              characterData: !0,
              characterDataOldValue: !0,
              childList: !0,
              subtree: !0,
            }),
            s
          );
        }
        function s0({
          scrollCb: e,
          doc: t,
          mirror: n,
          blockClass: r,
          blockSelector: i,
          unblockSelector: s,
          sampling: o,
        }) {
          return sg(
            "scroll",
            sY(
              sE(
                sY((o) => {
                  let a = sJ(o);
                  if (!a || sN(a, r, i, s, !0)) return;
                  let l = n.getId(a);
                  if (a === t && t.defaultView) {
                    let n = sS(t.defaultView);
                    e({ id: l, x: n.left, y: n.top });
                  } else e({ id: l, x: a.scrollLeft, y: a.scrollTop });
                }),
                o.scroll || 100
              )
            ),
            t
          );
        }
        let s1 = ["INPUT", "TEXTAREA", "SELECT"],
          s2 = new WeakMap();
        function s3(e) {
          var t;
          return (
            (t = []),
            (s8("CSSGroupingRule") &&
              e.parentRule instanceof CSSGroupingRule) ||
            (s8("CSSMediaRule") && e.parentRule instanceof CSSMediaRule) ||
            (s8("CSSSupportsRule") &&
              e.parentRule instanceof CSSSupportsRule) ||
            (s8("CSSConditionRule") && e.parentRule instanceof CSSConditionRule)
              ? t.unshift(Array.from(e.parentRule.cssRules).indexOf(e))
              : e.parentStyleSheet &&
                t.unshift(Array.from(e.parentStyleSheet.cssRules).indexOf(e)),
            t
          );
        }
        function s5(e, t, n) {
          let r, i;
          return e
            ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (i = n.getId(e)),
              { styleId: i, id: r })
            : {};
        }
        function s4({ mirror: e, stylesheetManager: t }, n) {
          let r = null;
          r = "#document" === n.nodeName ? e.getId(n) : e.getId(n.host);
          let i =
              "#document" === n.nodeName
                ? sK([
                    n,
                    "access",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.Document,
                  ])
                : sK([
                    n,
                    "access",
                    (e) => e.ownerDocument,
                    "optionalAccess",
                    (e) => e.defaultView,
                    "optionalAccess",
                    (e) => e.ShadowRoot,
                  ]),
            s = sK([i, "optionalAccess", (e) => e.prototype])
              ? Object.getOwnPropertyDescriptor(
                  sK([i, "optionalAccess", (e) => e.prototype]),
                  "adoptedStyleSheets"
                )
              : void 0;
          return null !== r && -1 !== r && i && s
            ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: s.configurable,
                enumerable: s.enumerable,
                get() {
                  return sK([
                    s,
                    "access",
                    (e) => e.get,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (e) => e(this),
                  ]);
                },
                set(e) {
                  let n = sK([
                    s,
                    "access",
                    (e) => e.set,
                    "optionalAccess",
                    (e) => e.call,
                    "call",
                    (t) => t(this, e),
                  ]);
                  if (null !== r && -1 !== r)
                    try {
                      t.adoptStyleSheets(e, r);
                    } catch (e) {}
                  return n;
                },
              }),
              sY(() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                  configurable: s.configurable,
                  enumerable: s.enumerable,
                  get: s.get,
                  set: s.set,
                });
              }))
            : () => {};
        }
        function s6(e, t = {}) {
          let n = e.doc.defaultView;
          if (!n) return () => {};
          let r = sZ(e, e.doc),
            i = (function ({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
              let i;
              if (!1 === t.mousemove) return () => {};
              let s = "number" == typeof t.mousemove ? t.mousemove : 50,
                o =
                  "number" == typeof t.mousemoveCallback
                    ? t.mousemoveCallback
                    : 500,
                a = [],
                l = sE(
                  sY((t) => {
                    let n = Date.now() - i;
                    e(
                      a.map((e) => ((e.timeOffset -= n), e)),
                      t
                    ),
                      (a = []),
                      (i = null);
                  }),
                  o
                ),
                c = sY(
                  sE(
                    sY((e) => {
                      let t = sJ(e),
                        { clientX: n, clientY: s } = sI(e)
                          ? e.changedTouches[0]
                          : e;
                      i || (i = sT()),
                        a.push({
                          x: n,
                          y: s,
                          id: r.getId(t),
                          timeOffset: sT() - i,
                        }),
                        l(
                          "undefined" != typeof DragEvent &&
                            e instanceof DragEvent
                            ? s$.Drag
                            : e instanceof MouseEvent
                            ? s$.MouseMove
                            : s$.TouchMove
                        );
                    }),
                    s,
                    { trailing: !1 }
                  )
                ),
                u = [
                  sg("mousemove", c, n),
                  sg("touchmove", c, n),
                  sg("drag", c, n),
                ];
              return sY(() => {
                u.forEach((e) => e());
              });
            })(e),
            s = (function ({
              mouseInteractionCb: e,
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: i,
              unblockSelector: s,
              sampling: o,
            }) {
              if (!1 === o.mouseInteraction) return () => {};
              let a =
                  !0 === o.mouseInteraction || void 0 === o.mouseInteraction
                    ? {}
                    : o.mouseInteraction,
                l = [],
                c = null,
                u = (t) => (o) => {
                  let a = sJ(o);
                  if (sN(a, r, i, s, !0)) return;
                  let l = null,
                    u = t;
                  if ("pointerType" in o) {
                    switch (o.pointerType) {
                      case "mouse":
                        l = sq.Mouse;
                        break;
                      case "touch":
                        l = sq.Touch;
                        break;
                      case "pen":
                        l = sq.Pen;
                    }
                    l === sq.Touch
                      ? sB[t] === sB.MouseDown
                        ? (u = "TouchStart")
                        : sB[t] === sB.MouseUp && (u = "TouchEnd")
                      : sq.Pen;
                  } else sI(o) && (l = sq.Touch);
                  null !== l
                    ? ((c = l),
                      ((u.startsWith("Touch") && l === sq.Touch) ||
                        (u.startsWith("Mouse") && l === sq.Mouse)) &&
                        (l = null))
                    : sB[t] === sB.Click && ((l = c), (c = null));
                  let d = sI(o) ? o.changedTouches[0] : o;
                  if (!d) return;
                  let h = n.getId(a),
                    { clientX: p, clientY: f } = d;
                  sY(e)({
                    type: sB[u],
                    id: h,
                    x: p,
                    y: f,
                    ...(null !== l && { pointerType: l }),
                  });
                };
              return (
                Object.keys(sB)
                  .filter(
                    (e) =>
                      Number.isNaN(Number(e)) &&
                      !e.endsWith("_Departed") &&
                      !1 !== a[e]
                  )
                  .forEach((e) => {
                    let n = i2(e),
                      r = u(e);
                    if (window.PointerEvent)
                      switch (sB[e]) {
                        case sB.MouseDown:
                        case sB.MouseUp:
                          n = n.replace("mouse", "pointer");
                          break;
                        case sB.TouchStart:
                        case sB.TouchEnd:
                          return;
                      }
                    l.push(sg(n, r, t));
                  }),
                sY(() => {
                  l.forEach((e) => e());
                })
              );
            })(e),
            o = s0(e),
            a = (function ({ viewportResizeCb: e }, { win: t }) {
              let n = -1,
                r = -1;
              return sg(
                "resize",
                sY(
                  sE(
                    sY(() => {
                      let t = sw(),
                        i = sO();
                      (n !== t || r !== i) &&
                        (e({ width: Number(i), height: Number(t) }),
                        (n = t),
                        (r = i));
                    }),
                    200
                  )
                ),
                t
              );
            })(e, { win: n }),
            l = (function ({
              inputCb: e,
              doc: t,
              mirror: n,
              blockClass: r,
              blockSelector: i,
              unblockSelector: s,
              ignoreClass: o,
              ignoreSelector: a,
              maskInputOptions: l,
              maskInputFn: c,
              sampling: u,
              userTriggeredOnInput: d,
              maskTextClass: h,
              unmaskTextClass: p,
              maskTextSelector: f,
              unmaskTextSelector: m,
            }) {
              function _(e) {
                let n = sJ(e),
                  u = e.isTrusted,
                  _ = n && i3(n.tagName);
                if (
                  ("OPTION" === _ && (n = n.parentElement),
                  !n || !_ || 0 > s1.indexOf(_) || sN(n, r, i, s, !0))
                )
                  return;
                let y = n;
                if (y.classList.contains(o) || (a && y.matches(a))) return;
                let v = i4(n),
                  E = i6(y, _, v),
                  b = !1,
                  T = i0({ maskInputOptions: l, tagName: _, type: v }),
                  S = sp(n, h, f, p, m, T);
                ("radio" === v || "checkbox" === v) && (b = n.checked),
                  (E = i1({
                    isMasked: S,
                    element: n,
                    value: E,
                    maskInputFn: c,
                  })),
                  g(
                    n,
                    d
                      ? { text: E, isChecked: b, userTriggered: u }
                      : { text: E, isChecked: b }
                  );
                let w = n.name;
                "radio" === v &&
                  w &&
                  b &&
                  t
                    .querySelectorAll(`input[type="radio"][name="${w}"]`)
                    .forEach((e) => {
                      if (e !== n) {
                        let t = i1({
                          isMasked: S,
                          element: e,
                          value: i6(e, _, v),
                          maskInputFn: c,
                        });
                        g(
                          e,
                          d
                            ? { text: t, isChecked: !b, userTriggered: !1 }
                            : { text: t, isChecked: !b }
                        );
                      }
                    });
              }
              function g(t, r) {
                let i = s2.get(t);
                if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                  s2.set(t, r);
                  let i = n.getId(t);
                  sY(e)({ ...r, id: i });
                }
              }
              let y = (
                  "last" === u.input ? ["change"] : ["input", "change"]
                ).map((e) => sg(e, sY(_), t)),
                v = t.defaultView;
              if (!v)
                return () => {
                  y.forEach((e) => e());
                };
              let E = v.Object.getOwnPropertyDescriptor(
                  v.HTMLInputElement.prototype,
                  "value"
                ),
                b = [
                  [v.HTMLInputElement.prototype, "value"],
                  [v.HTMLInputElement.prototype, "checked"],
                  [v.HTMLSelectElement.prototype, "value"],
                  [v.HTMLTextAreaElement.prototype, "value"],
                  [v.HTMLSelectElement.prototype, "selectedIndex"],
                  [v.HTMLOptionElement.prototype, "selected"],
                ];
              return (
                E &&
                  E.set &&
                  y.push(
                    ...b.map((e) =>
                      (function e(t, n, r, i, s = window) {
                        let o = s.Object.getOwnPropertyDescriptor(t, n);
                        return (
                          s.Object.defineProperty(
                            t,
                            n,
                            i
                              ? r
                              : {
                                  set(e) {
                                    sU(() => {
                                      r.set.call(this, e);
                                    }, 0),
                                      o && o.set && o.set.call(this, e);
                                  },
                                }
                          ),
                          () => e(t, n, o || {}, !0)
                        );
                      })(
                        e[0],
                        e[1],
                        {
                          set() {
                            sY(_)({ target: this, isTrusted: !1 });
                          },
                        },
                        !1,
                        v
                      )
                    )
                  ),
                sY(() => {
                  y.forEach((e) => e());
                })
              );
            })(e),
            c = (function ({
              mediaInteractionCb: e,
              blockClass: t,
              blockSelector: n,
              unblockSelector: r,
              mirror: i,
              sampling: s,
              doc: o,
            }) {
              let a = sY((o) =>
                  sE(
                    sY((s) => {
                      let a = sJ(s);
                      if (!a || sN(a, t, n, r, !0)) return;
                      let {
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d,
                      } = a;
                      e({
                        type: o,
                        id: i.getId(a),
                        currentTime: l,
                        volume: c,
                        muted: u,
                        playbackRate: d,
                      });
                    }),
                    s.media || 500
                  )
                ),
                l = [
                  sg("play", a(0), o),
                  sg("pause", a(1), o),
                  sg("seeked", a(2), o),
                  sg("volumechange", a(3), o),
                  sg("ratechange", a(4), o),
                ];
              return sY(() => {
                l.forEach((e) => e());
              });
            })(e),
            u = (function (
              { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
              { win: r }
            ) {
              let i, s;
              if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype)
                return () => {};
              let o = r.CSSStyleSheet.prototype.insertRule;
              r.CSSStyleSheet.prototype.insertRule = new Proxy(o, {
                apply: sY((r, i, s) => {
                  let [o, a] = s,
                    { id: l, styleId: c } = s5(i, t, n.styleMirror);
                  return (
                    ((l && -1 !== l) || (c && -1 !== c)) &&
                      e({ id: l, styleId: c, adds: [{ rule: o, index: a }] }),
                    r.apply(i, s)
                  );
                }),
              });
              let a = r.CSSStyleSheet.prototype.deleteRule;
              (r.CSSStyleSheet.prototype.deleteRule = new Proxy(a, {
                apply: sY((r, i, s) => {
                  let [o] = s,
                    { id: a, styleId: l } = s5(i, t, n.styleMirror);
                  return (
                    ((a && -1 !== a) || (l && -1 !== l)) &&
                      e({ id: a, styleId: l, removes: [{ index: o }] }),
                    r.apply(i, s)
                  );
                }),
              })),
                r.CSSStyleSheet.prototype.replace &&
                  ((i = r.CSSStyleSheet.prototype.replace),
                  (r.CSSStyleSheet.prototype.replace = new Proxy(i, {
                    apply: sY((r, i, s) => {
                      let [o] = s,
                        { id: a, styleId: l } = s5(i, t, n.styleMirror);
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          e({ id: a, styleId: l, replace: o }),
                        r.apply(i, s)
                      );
                    }),
                  }))),
                r.CSSStyleSheet.prototype.replaceSync &&
                  ((s = r.CSSStyleSheet.prototype.replaceSync),
                  (r.CSSStyleSheet.prototype.replaceSync = new Proxy(s, {
                    apply: sY((r, i, s) => {
                      let [o] = s,
                        { id: a, styleId: l } = s5(i, t, n.styleMirror);
                      return (
                        ((a && -1 !== a) || (l && -1 !== l)) &&
                          e({ id: a, styleId: l, replaceSync: o }),
                        r.apply(i, s)
                      );
                    }),
                  })));
              let l = {};
              s9("CSSGroupingRule")
                ? (l.CSSGroupingRule = r.CSSGroupingRule)
                : (s9("CSSMediaRule") && (l.CSSMediaRule = r.CSSMediaRule),
                  s9("CSSConditionRule") &&
                    (l.CSSConditionRule = r.CSSConditionRule),
                  s9("CSSSupportsRule") &&
                    (l.CSSSupportsRule = r.CSSSupportsRule));
              let c = {};
              return (
                Object.entries(l).forEach(([r, i]) => {
                  (c[r] = {
                    insertRule: i.prototype.insertRule,
                    deleteRule: i.prototype.deleteRule,
                  }),
                    (i.prototype.insertRule = new Proxy(c[r].insertRule, {
                      apply: sY((r, i, s) => {
                        let [o, a] = s,
                          { id: l, styleId: c } = s5(
                            i.parentStyleSheet,
                            t,
                            n.styleMirror
                          );
                        return (
                          ((l && -1 !== l) || (c && -1 !== c)) &&
                            e({
                              id: l,
                              styleId: c,
                              adds: [{ rule: o, index: [...s3(i), a || 0] }],
                            }),
                          r.apply(i, s)
                        );
                      }),
                    })),
                    (i.prototype.deleteRule = new Proxy(c[r].deleteRule, {
                      apply: sY((r, i, s) => {
                        let [o] = s,
                          { id: a, styleId: l } = s5(
                            i.parentStyleSheet,
                            t,
                            n.styleMirror
                          );
                        return (
                          ((a && -1 !== a) || (l && -1 !== l)) &&
                            e({
                              id: a,
                              styleId: l,
                              removes: [{ index: [...s3(i), o] }],
                            }),
                          r.apply(i, s)
                        );
                      }),
                    }));
                }),
                sY(() => {
                  (r.CSSStyleSheet.prototype.insertRule = o),
                    (r.CSSStyleSheet.prototype.deleteRule = a),
                    i && (r.CSSStyleSheet.prototype.replace = i),
                    s && (r.CSSStyleSheet.prototype.replaceSync = s),
                    Object.entries(l).forEach(([e, t]) => {
                      (t.prototype.insertRule = c[e].insertRule),
                        (t.prototype.deleteRule = c[e].deleteRule);
                    });
                })
              );
            })(e, { win: n }),
            d = s4(e, e.doc),
            h = (function (
              {
                styleDeclarationCb: e,
                mirror: t,
                ignoreCSSAttributes: n,
                stylesheetManager: r,
              },
              { win: i }
            ) {
              let s = i.CSSStyleDeclaration.prototype.setProperty;
              i.CSSStyleDeclaration.prototype.setProperty = new Proxy(s, {
                apply: sY((i, o, a) => {
                  let [l, c, u] = a;
                  if (n.has(l)) return s.apply(o, [l, c, u]);
                  let { id: d, styleId: h } = s5(
                    sK([
                      o,
                      "access",
                      (e) => e.parentRule,
                      "optionalAccess",
                      (e) => e.parentStyleSheet,
                    ]),
                    t,
                    r.styleMirror
                  );
                  return (
                    ((d && -1 !== d) || (h && -1 !== h)) &&
                      e({
                        id: d,
                        styleId: h,
                        set: { property: l, value: c, priority: u },
                        index: s3(o.parentRule),
                      }),
                    i.apply(o, a)
                  );
                }),
              });
              let o = i.CSSStyleDeclaration.prototype.removeProperty;
              return (
                (i.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                  apply: sY((i, s, a) => {
                    let [l] = a;
                    if (n.has(l)) return o.apply(s, [l]);
                    let { id: c, styleId: u } = s5(
                      sK([
                        s,
                        "access",
                        (e) => e.parentRule,
                        "optionalAccess",
                        (e) => e.parentStyleSheet,
                      ]),
                      t,
                      r.styleMirror
                    );
                    return (
                      ((c && -1 !== c) || (u && -1 !== u)) &&
                        e({
                          id: c,
                          styleId: u,
                          remove: { property: l },
                          index: s3(s.parentRule),
                        }),
                      i.apply(s, a)
                    );
                  }),
                })),
                sY(() => {
                  (i.CSSStyleDeclaration.prototype.setProperty = s),
                    (i.CSSStyleDeclaration.prototype.removeProperty = o);
                })
              );
            })(e, { win: n }),
            p = e.collectFonts
              ? (function ({ fontCb: e, doc: t }) {
                  let n = t.defaultView;
                  if (!n) return () => {};
                  let r = [],
                    i = new WeakMap(),
                    s = n.FontFace;
                  n.FontFace = function (e, t, n) {
                    let r = new s(e, t, n);
                    return (
                      i.set(r, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: n,
                        fontSource:
                          "string" == typeof t
                            ? t
                            : JSON.stringify(Array.from(new Uint8Array(t))),
                      }),
                      r
                    );
                  };
                  let o = sb(t.fonts, "add", function (t) {
                    return function (n) {
                      return (
                        sU(
                          sY(() => {
                            let t = i.get(n);
                            t && (e(t), i.delete(n));
                          }),
                          0
                        ),
                        t.apply(this, [n])
                      );
                    };
                  });
                  return (
                    r.push(() => {
                      n.FontFace = s;
                    }),
                    r.push(o),
                    sY(() => {
                      r.forEach((e) => e());
                    })
                  );
                })(e)
              : () => {},
            f = (function (e) {
              let {
                  doc: t,
                  mirror: n,
                  blockClass: r,
                  blockSelector: i,
                  unblockSelector: s,
                  selectionCb: o,
                } = e,
                a = !0,
                l = sY(() => {
                  let e = t.getSelection();
                  if (
                    !e ||
                    (a && sK([e, "optionalAccess", (e) => e.isCollapsed]))
                  )
                    return;
                  a = e.isCollapsed || !1;
                  let l = [],
                    c = e.rangeCount || 0;
                  for (let t = 0; t < c; t++) {
                    let {
                      startContainer: o,
                      startOffset: a,
                      endContainer: c,
                      endOffset: u,
                    } = e.getRangeAt(t);
                    sN(o, r, i, s, !0) ||
                      sN(c, r, i, s, !0) ||
                      l.push({
                        start: n.getId(o),
                        startOffset: a,
                        end: n.getId(c),
                        endOffset: u,
                      });
                  }
                  o({ ranges: l });
                });
              return l(), sg("selectionchange", l);
            })(e),
            m = (function ({ doc: e, customElementCb: t }) {
              let n = e.defaultView;
              return n && n.customElements
                ? sb(n.customElements, "define", function (e) {
                    return function (n, r, i) {
                      try {
                        t({ define: { name: n } });
                      } catch (e) {}
                      return e.apply(this, [n, r, i]);
                    };
                  })
                : () => {};
            })(e),
            _ = [];
          for (let t of e.plugins) _.push(t.observer(t.callback, n, t.options));
          return sY(() => {
            sX.forEach((e) => e.reset()),
              r.disconnect(),
              i(),
              s(),
              o(),
              a(),
              l(),
              c(),
              u(),
              d(),
              h(),
              p(),
              f(),
              m(),
              _.forEach((e) => e());
          });
        }
        function s8(e) {
          return void 0 !== window[e];
        }
        function s9(e) {
          return !!(
            void 0 !== window[e] &&
            window[e].prototype &&
            "insertRule" in window[e].prototype &&
            "deleteRule" in window[e].prototype
          );
        }
        class s7 {
          constructor(e) {
            (this.generateIdFn = e),
              (this.iframeIdToRemoteIdMap = new WeakMap()),
              (this.iframeRemoteIdToIdMap = new WeakMap());
          }
          getId(e, t, n, r) {
            let i = n || this.getIdToRemoteIdMap(e),
              s = r || this.getRemoteIdToIdMap(e),
              o = i.get(t);
            return (
              o || ((o = this.generateIdFn()), i.set(t, o), s.set(o, t)), o
            );
          }
          getIds(e, t) {
            let n = this.getIdToRemoteIdMap(e),
              r = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getId(e, t, n, r));
          }
          getRemoteId(e, t, n) {
            let r = n || this.getRemoteIdToIdMap(e);
            return "number" != typeof t ? t : r.get(t) || -1;
          }
          getRemoteIds(e, t) {
            let n = this.getRemoteIdToIdMap(e);
            return t.map((t) => this.getRemoteId(e, t, n));
          }
          reset(e) {
            if (!e) {
              (this.iframeIdToRemoteIdMap = new WeakMap()),
                (this.iframeRemoteIdToIdMap = new WeakMap());
              return;
            }
            this.iframeIdToRemoteIdMap.delete(e),
              this.iframeRemoteIdToIdMap.delete(e);
          }
          getIdToRemoteIdMap(e) {
            let t = this.iframeIdToRemoteIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeIdToRemoteIdMap.set(e, t)), t
            );
          }
          getRemoteIdToIdMap(e) {
            let t = this.iframeRemoteIdToIdMap.get(e);
            return (
              t || ((t = new Map()), this.iframeRemoteIdToIdMap.set(e, t)), t
            );
          }
        }
        function oe(e) {
          let t;
          let n = e[0],
            r = 1;
          for (; r < e.length; ) {
            let i = e[r],
              s = e[r + 1];
            if (
              ((r += 2),
              ("optionalAccess" === i || "optionalCall" === i) && null == n)
            )
              return;
            "access" === i || "optionalAccess" === i
              ? ((t = n), (n = s(n)))
              : ("call" === i || "optionalCall" === i) &&
                ((n = s((...e) => n.call(t, ...e))), (t = void 0));
          }
          return n;
        }
        class ot {
          constructor() {
            (this.crossOriginIframeMirror = new s7(i7)),
              (this.crossOriginIframeRootIdMap = new WeakMap());
          }
          addIframe() {}
          addLoadListener() {}
          attachIframe() {}
        }
        class on {
          constructor(e) {
            (this.iframes = new WeakMap()),
              (this.crossOriginIframeMap = new WeakMap()),
              (this.crossOriginIframeMirror = new s7(i7)),
              (this.crossOriginIframeRootIdMap = new WeakMap()),
              (this.mutationCb = e.mutationCb),
              (this.wrappedEmit = e.wrappedEmit),
              (this.stylesheetManager = e.stylesheetManager),
              (this.recordCrossOriginIframes = e.recordCrossOriginIframes),
              (this.crossOriginIframeStyleMirror = new s7(
                this.stylesheetManager.styleMirror.generateId.bind(
                  this.stylesheetManager.styleMirror
                )
              )),
              (this.mirror = e.mirror),
              this.recordCrossOriginIframes &&
                window.addEventListener(
                  "message",
                  this.handleMessage.bind(this)
                );
          }
          addIframe(e) {
            this.iframes.set(e, !0),
              e.contentWindow &&
                this.crossOriginIframeMap.set(e.contentWindow, e);
          }
          addLoadListener(e) {
            this.loadListener = e;
          }
          attachIframe(e, t) {
            this.mutationCb({
              adds: [{ parentId: this.mirror.getId(e), nextId: null, node: t }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            }),
              oe([
                this,
                "access",
                (e) => e.loadListener,
                "optionalCall",
                (t) => t(e),
              ]),
              e.contentDocument &&
                e.contentDocument.adoptedStyleSheets &&
                e.contentDocument.adoptedStyleSheets.length > 0 &&
                this.stylesheetManager.adoptStyleSheets(
                  e.contentDocument.adoptedStyleSheets,
                  this.mirror.getId(e.contentDocument)
                );
          }
          handleMessage(e) {
            if (
              "rrweb" !== e.data.type ||
              e.origin !== e.data.origin ||
              !e.source
            )
              return;
            let t = this.crossOriginIframeMap.get(e.source);
            if (!t) return;
            let n = this.transformCrossOriginEvent(t, e.data.event);
            n && this.wrappedEmit(n, e.data.isCheckout);
          }
          transformCrossOriginEvent(e, t) {
            switch (t.type) {
              case sF.FullSnapshot: {
                this.crossOriginIframeMirror.reset(e),
                  this.crossOriginIframeStyleMirror.reset(e),
                  this.replaceIdOnNode(t.data.node, e);
                let n = t.data.node.id;
                return (
                  this.crossOriginIframeRootIdMap.set(e, n),
                  this.patchRootIdOnNode(t.data.node, n),
                  {
                    timestamp: t.timestamp,
                    type: sF.IncrementalSnapshot,
                    data: {
                      source: s$.Mutation,
                      adds: [
                        {
                          parentId: this.mirror.getId(e),
                          nextId: null,
                          node: t.data.node,
                        },
                      ],
                      removes: [],
                      texts: [],
                      attributes: [],
                      isAttachIframe: !0,
                    },
                  }
                );
              }
              case sF.Meta:
              case sF.Load:
              case sF.DomContentLoaded:
                break;
              case sF.Plugin:
                return t;
              case sF.Custom:
                return (
                  this.replaceIds(t.data.payload, e, [
                    "id",
                    "parentId",
                    "previousId",
                    "nextId",
                  ]),
                  t
                );
              case sF.IncrementalSnapshot:
                switch (t.data.source) {
                  case s$.Mutation:
                    return (
                      t.data.adds.forEach((t) => {
                        this.replaceIds(t, e, [
                          "parentId",
                          "nextId",
                          "previousId",
                        ]),
                          this.replaceIdOnNode(t.node, e);
                        let n = this.crossOriginIframeRootIdMap.get(e);
                        n && this.patchRootIdOnNode(t.node, n);
                      }),
                      t.data.removes.forEach((t) => {
                        this.replaceIds(t, e, ["parentId", "id"]);
                      }),
                      t.data.attributes.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t.data.texts.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t
                    );
                  case s$.Drag:
                  case s$.TouchMove:
                  case s$.MouseMove:
                    return (
                      t.data.positions.forEach((t) => {
                        this.replaceIds(t, e, ["id"]);
                      }),
                      t
                    );
                  case s$.ViewportResize:
                    return !1;
                  case s$.MediaInteraction:
                  case s$.MouseInteraction:
                  case s$.Scroll:
                  case s$.CanvasMutation:
                  case s$.Input:
                    return this.replaceIds(t.data, e, ["id"]), t;
                  case s$.StyleSheetRule:
                  case s$.StyleDeclaration:
                    return (
                      this.replaceIds(t.data, e, ["id"]),
                      this.replaceStyleIds(t.data, e, ["styleId"]),
                      t
                    );
                  case s$.Font:
                    return t;
                  case s$.Selection:
                    return (
                      t.data.ranges.forEach((t) => {
                        this.replaceIds(t, e, ["start", "end"]);
                      }),
                      t
                    );
                  case s$.AdoptedStyleSheet:
                    return (
                      this.replaceIds(t.data, e, ["id"]),
                      this.replaceStyleIds(t.data, e, ["styleIds"]),
                      oe([
                        t,
                        "access",
                        (e) => e.data,
                        "access",
                        (e) => e.styles,
                        "optionalAccess",
                        (e) => e.forEach,
                        "call",
                        (t) =>
                          t((t) => {
                            this.replaceStyleIds(t, e, ["styleId"]);
                          }),
                      ]),
                      t
                    );
                }
            }
            return !1;
          }
          replace(e, t, n, r) {
            for (let i of r)
              (Array.isArray(t[i]) || "number" == typeof t[i]) &&
                (Array.isArray(t[i])
                  ? (t[i] = e.getIds(n, t[i]))
                  : (t[i] = e.getId(n, t[i])));
            return t;
          }
          replaceIds(e, t, n) {
            return this.replace(this.crossOriginIframeMirror, e, t, n);
          }
          replaceStyleIds(e, t, n) {
            return this.replace(this.crossOriginIframeStyleMirror, e, t, n);
          }
          replaceIdOnNode(e, t) {
            this.replaceIds(e, t, ["id", "rootId"]),
              "childNodes" in e &&
                e.childNodes.forEach((e) => {
                  this.replaceIdOnNode(e, t);
                });
          }
          patchRootIdOnNode(e, t) {
            e.type === rn.Document || e.rootId || (e.rootId = t),
              "childNodes" in e &&
                e.childNodes.forEach((e) => {
                  this.patchRootIdOnNode(e, t);
                });
          }
        }
        class or {
          init() {}
          addShadowRoot() {}
          observeAttachShadow() {}
          reset() {}
        }
        class oi {
          constructor(e) {
            (this.shadowDoms = new WeakSet()),
              (this.restoreHandlers = []),
              (this.mutationCb = e.mutationCb),
              (this.scrollCb = e.scrollCb),
              (this.bypassOptions = e.bypassOptions),
              (this.mirror = e.mirror),
              this.init();
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document);
          }
          addShadowRoot(e, t) {
            if (!iK(e) || this.shadowDoms.has(e)) return;
            this.shadowDoms.add(e);
            let n = sZ(
              {
                ...this.bypassOptions,
                doc: t,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this,
              },
              e
            );
            this.restoreHandlers.push(() => n.disconnect()),
              this.restoreHandlers.push(
                s0({
                  ...this.bypassOptions,
                  scrollCb: this.scrollCb,
                  doc: e,
                  mirror: this.mirror,
                })
              ),
              sU(() => {
                e.adoptedStyleSheets &&
                  e.adoptedStyleSheets.length > 0 &&
                  this.bypassOptions.stylesheetManager.adoptStyleSheets(
                    e.adoptedStyleSheets,
                    this.mirror.getId(e.host)
                  ),
                  this.restoreHandlers.push(
                    s4(
                      {
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager,
                      },
                      e
                    )
                  );
              }, 0);
          }
          observeAttachShadow(e) {
            e.contentWindow &&
              e.contentDocument &&
              this.patchAttachShadow(
                e.contentWindow.Element,
                e.contentDocument
              );
          }
          patchAttachShadow(e, t) {
            let n = this;
            this.restoreHandlers.push(
              sb(e.prototype, "attachShadow", function (e) {
                return function (r) {
                  let i = e.call(this, r);
                  return (
                    this.shadowRoot &&
                      sL(this) &&
                      n.addShadowRoot(this.shadowRoot, t),
                    i
                  );
                };
              })
            );
          }
          reset() {
            this.restoreHandlers.forEach((e) => {
              try {
                e();
              } catch (e) {}
            }),
              (this.restoreHandlers = []),
              (this.shadowDoms = new WeakSet());
          }
        }
        class os {
          reset() {}
          freeze() {}
          unfreeze() {}
          lock() {}
          unlock() {}
          snapshot() {}
        }
        class oo {
          constructor(e) {
            (this.trackedLinkElements = new WeakSet()),
              (this.styleMirror = new sD()),
              (this.mutationCb = e.mutationCb),
              (this.adoptedStyleSheetCb = e.adoptedStyleSheetCb);
          }
          attachLinkElement(e, t) {
            "_cssText" in t.attributes &&
              this.mutationCb({
                adds: [],
                removes: [],
                texts: [],
                attributes: [{ id: t.id, attributes: t.attributes }],
              }),
              this.trackLinkElement(e);
          }
          trackLinkElement(e) {
            this.trackedLinkElements.has(e) ||
              (this.trackedLinkElements.add(e),
              this.trackStylesheetInLinkElement(e));
          }
          adoptStyleSheets(e, t) {
            if (0 === e.length) return;
            let n = { id: t, styleIds: [] },
              r = [];
            for (let t of e) {
              let e;
              this.styleMirror.has(t)
                ? (e = this.styleMirror.getId(t))
                : ((e = this.styleMirror.add(t)),
                  r.push({
                    styleId: e,
                    rules: Array.from(t.rules || CSSRule, (e, t) => ({
                      rule: iJ(e),
                      index: t,
                    })),
                  })),
                n.styleIds.push(e);
            }
            r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n);
          }
          reset() {
            this.styleMirror.reset(),
              (this.trackedLinkElements = new WeakSet());
          }
          trackStylesheetInLinkElement(e) {}
        }
        class oa {
          constructor() {
            (this.nodeMap = new WeakMap()),
              (this.loop = !0),
              this.periodicallyClear();
          }
          periodicallyClear() {
            !(function (...e) {
              sj("requestAnimationFrame")(...e);
            })(() => {
              this.clear(), this.loop && this.periodicallyClear();
            });
          }
          inOtherBuffer(e, t) {
            let n = this.nodeMap.get(e);
            return n && Array.from(n).some((e) => e !== t);
          }
          add(e, t) {
            this.nodeMap.set(e, (this.nodeMap.get(e) || new Set()).add(t));
          }
          clear() {
            this.nodeMap = new WeakMap();
          }
          destroy() {
            this.loop = !1;
          }
        }
        let ol = new iZ();
        function oc(e = {}) {
          let t;
          let {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: s = "rr-block",
            blockSelector: o = null,
            unblockSelector: a = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: c = null,
            maskAllText: u = !1,
            maskTextClass: d = "rr-mask",
            unmaskTextClass: h = null,
            maskTextSelector: p = null,
            unmaskTextSelector: f = null,
            inlineStylesheet: m = !0,
            maskAllInputs: _,
            maskInputOptions: g,
            slimDOMOptions: b,
            maskAttributeFn: T,
            maskInputFn: S,
            maskTextFn: w,
            maxCanvasSize: O = null,
            packFn: R,
            sampling: N = {},
            dataURLOptions: C = {},
            mousemoveWait: I,
            recordCanvas: A = !1,
            recordCrossOriginIframes: k = !1,
            recordAfter: P = "DOMContentLoaded" === e.recordAfter
              ? e.recordAfter
              : "load",
            userTriggeredOnInput: D = !1,
            collectFonts: x = !1,
            inlineImages: L = !1,
            plugins: M,
            keepIframeSrcFn: j = () => !1,
            ignoreCSSAttributes: U = new Set([]),
            errorHandler: F,
            onMutation: $,
            getCanvasManager: B,
          } = e;
          y = F;
          let q = !k || window.parent === window,
            H = !1;
          if (!q)
            try {
              window.parent.document && (H = !1);
            } catch (e) {
              H = !0;
            }
          if (q && !n) throw Error("emit function is required");
          void 0 !== I && void 0 === N.mousemove && (N.mousemove = I),
            ol.reset();
          let W =
              !0 === _
                ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    radio: !0,
                    checkbox: !0,
                  }
                : void 0 !== g
                ? g
                : {},
            z =
              !0 === b || "all" === b
                ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: "all" === b,
                    headMetaDescKeywords: "all" === b,
                  }
                : b || {};
          !(function (e = window) {
            "NodeList" in e &&
              !e.NodeList.prototype.forEach &&
              (e.NodeList.prototype.forEach = Array.prototype.forEach),
              "DOMTokenList" in e &&
                !e.DOMTokenList.prototype.forEach &&
                (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
              Node.prototype.contains ||
                (Node.prototype.contains = (...e) => {
                  let t = e[0];
                  if (!(0 in e)) throw TypeError("1 argument is required");
                  do if (this === t) return !0;
                  while ((t = t && t.parentNode));
                  return !1;
                });
          })();
          let G = 0,
            V = (e) => {
              for (let t of M || [])
                t.eventProcessor && (e = t.eventProcessor(e));
              return R && !H && (e = R(e)), e;
            };
          v = (e, s) => {
            if (
              ((e.timestamp = sT()),
              ij([
                sX,
                "access",
                (e) => e[0],
                "optionalAccess",
                (e) => e.isFrozen,
                "call",
                (e) => e(),
              ]) &&
                e.type !== sF.FullSnapshot &&
                !(
                  e.type === sF.IncrementalSnapshot &&
                  e.data.source === s$.Mutation
                ) &&
                sX.forEach((e) => e.unfreeze()),
              q)
            )
              ij([n, "optionalCall", (t) => t(V(e), s)]);
            else if (H) {
              let t = {
                type: "rrweb",
                event: V(e),
                origin: window.location.origin,
                isCheckout: s,
              };
              window.parent.postMessage(t, "*");
            }
            if (e.type === sF.FullSnapshot) (t = e), (G = 0);
            else if (e.type === sF.IncrementalSnapshot) {
              if (e.data.source === s$.Mutation && e.data.isAttachIframe)
                return;
              G++;
              let n = i && G >= i,
                s = r && t && e.timestamp - t.timestamp > r;
              (n || s) && en(!0);
            }
          };
          let Q = (e) => {
              v({
                type: sF.IncrementalSnapshot,
                data: { source: s$.Mutation, ...e },
              });
            },
            Y = (e) =>
              v({
                type: sF.IncrementalSnapshot,
                data: { source: s$.Scroll, ...e },
              }),
            K = (e) =>
              v({
                type: sF.IncrementalSnapshot,
                data: { source: s$.CanvasMutation, ...e },
              }),
            X = new oo({
              mutationCb: Q,
              adoptedStyleSheetCb: (e) =>
                v({
                  type: sF.IncrementalSnapshot,
                  data: { source: s$.AdoptedStyleSheet, ...e },
                }),
            }),
            J =
              "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ &&
              __RRWEB_EXCLUDE_IFRAME__
                ? new ot()
                : new on({
                    mirror: ol,
                    mutationCb: Q,
                    stylesheetManager: X,
                    recordCrossOriginIframes: k,
                    wrappedEmit: v,
                  });
          for (let e of M || [])
            e.getMirror &&
              e.getMirror({
                nodeMirror: ol,
                crossOriginIframeMirror: J.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: J.crossOriginIframeStyleMirror,
              });
          let Z = new oa(),
            ee = (function (e, t) {
              try {
                return e ? e(t) : new os();
              } catch (e) {
                return (
                  console.warn("Unable to initialize CanvasManager"), new os()
                );
              }
            })(B, {
              mirror: ol,
              win: window,
              mutationCb: (e) =>
                v({
                  type: sF.IncrementalSnapshot,
                  data: { source: s$.CanvasMutation, ...e },
                }),
              recordCanvas: A,
              blockClass: s,
              blockSelector: o,
              unblockSelector: a,
              maxCanvasSize: O,
              sampling: N.canvas,
              dataURLOptions: C,
              errorHandler: F,
            }),
            et =
              "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ &&
              __RRWEB_EXCLUDE_SHADOW_DOM__
                ? new or()
                : new oi({
                    mutationCb: Q,
                    scrollCb: Y,
                    bypassOptions: {
                      onMutation: $,
                      blockClass: s,
                      blockSelector: o,
                      unblockSelector: a,
                      maskAllText: u,
                      maskTextClass: d,
                      unmaskTextClass: h,
                      maskTextSelector: p,
                      unmaskTextSelector: f,
                      inlineStylesheet: m,
                      maskInputOptions: W,
                      dataURLOptions: C,
                      maskAttributeFn: T,
                      maskTextFn: w,
                      maskInputFn: S,
                      recordCanvas: A,
                      inlineImages: L,
                      sampling: N,
                      slimDOMOptions: z,
                      iframeManager: J,
                      stylesheetManager: X,
                      canvasManager: ee,
                      keepIframeSrcFn: j,
                      processedNodeManager: Z,
                    },
                    mirror: ol,
                  }),
            en = (e = !1) => {
              v(
                {
                  type: sF.Meta,
                  data: {
                    href: window.location.href,
                    width: sO(),
                    height: sw(),
                  },
                },
                e
              ),
                X.reset(),
                et.init(),
                sX.forEach((e) => e.lock());
              let t = (function (e, t) {
                let {
                  mirror: n = new iZ(),
                  blockClass: r = "rr-block",
                  blockSelector: i = null,
                  unblockSelector: s = null,
                  maskAllText: o = !1,
                  maskTextClass: a = "rr-mask",
                  unmaskTextClass: l = null,
                  maskTextSelector: c = null,
                  unmaskTextSelector: u = null,
                  inlineStylesheet: d = !0,
                  inlineImages: h = !1,
                  recordCanvas: p = !1,
                  maskAllInputs: f = !1,
                  maskAttributeFn: m,
                  maskTextFn: _,
                  maskInputFn: g,
                  slimDOM: y = !1,
                  dataURLOptions: v,
                  preserveWhiteSpace: E,
                  onSerialize: b,
                  onIframeLoad: T,
                  iframeLoadTimeout: S,
                  onStylesheetLoad: w,
                  stylesheetLoadTimeout: O,
                  keepIframeSrcFn: R = () => !1,
                } = t || {};
                return sm(e, {
                  doc: e,
                  mirror: n,
                  blockClass: r,
                  blockSelector: i,
                  unblockSelector: s,
                  maskAllText: o,
                  maskTextClass: a,
                  unmaskTextClass: l,
                  maskTextSelector: c,
                  unmaskTextSelector: u,
                  skipChild: !1,
                  inlineStylesheet: d,
                  maskInputOptions:
                    !0 === f
                      ? {
                          color: !0,
                          date: !0,
                          "datetime-local": !0,
                          email: !0,
                          month: !0,
                          number: !0,
                          range: !0,
                          search: !0,
                          tel: !0,
                          text: !0,
                          time: !0,
                          url: !0,
                          week: !0,
                          textarea: !0,
                          select: !0,
                        }
                      : !1 === f
                      ? {}
                      : f,
                  maskAttributeFn: m,
                  maskTextFn: _,
                  maskInputFn: g,
                  slimDOMOptions:
                    !0 === y || "all" === y
                      ? {
                          script: !0,
                          comment: !0,
                          headFavicon: !0,
                          headWhitespace: !0,
                          headMetaDescKeywords: "all" === y,
                          headMetaSocial: !0,
                          headMetaRobots: !0,
                          headMetaHttpEquiv: !0,
                          headMetaAuthorship: !0,
                          headMetaVerification: !0,
                        }
                      : !1 === y
                      ? {}
                      : y,
                  dataURLOptions: v,
                  inlineImages: h,
                  recordCanvas: p,
                  preserveWhiteSpace: E,
                  onSerialize: b,
                  onIframeLoad: T,
                  iframeLoadTimeout: S,
                  onStylesheetLoad: w,
                  stylesheetLoadTimeout: O,
                  keepIframeSrcFn: R,
                  newlyAddedElement: !1,
                });
              })(document, {
                mirror: ol,
                blockClass: s,
                blockSelector: o,
                unblockSelector: a,
                maskAllText: u,
                maskTextClass: d,
                unmaskTextClass: h,
                maskTextSelector: p,
                unmaskTextSelector: f,
                inlineStylesheet: m,
                maskAllInputs: W,
                maskAttributeFn: T,
                maskInputFn: S,
                maskTextFn: w,
                slimDOM: z,
                dataURLOptions: C,
                recordCanvas: A,
                inlineImages: L,
                onSerialize: (e) => {
                  sA(e, ol) && J.addIframe(e),
                    sk(e, ol) && X.trackLinkElement(e),
                    sP(e) && et.addShadowRoot(e.shadowRoot, document);
                },
                onIframeLoad: (e, t) => {
                  J.attachIframe(e, t), et.observeAttachShadow(e);
                },
                onStylesheetLoad: (e, t) => {
                  X.attachLinkElement(e, t);
                },
                keepIframeSrcFn: j,
              });
              if (!t) return console.warn("Failed to snapshot the document");
              v({
                type: sF.FullSnapshot,
                data: { node: t, initialOffset: sS(window) },
              }),
                sX.forEach((e) => e.unlock()),
                document.adoptedStyleSheets &&
                  document.adoptedStyleSheets.length > 0 &&
                  X.adoptStyleSheets(
                    document.adoptedStyleSheets,
                    ol.getId(document)
                  );
            };
          E = en;
          try {
            let e = [],
              t = (e) =>
                sY(s6)(
                  {
                    onMutation: $,
                    mutationCb: Q,
                    mousemoveCb: (e, t) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: t, positions: e },
                      }),
                    mouseInteractionCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.MouseInteraction, ...e },
                      }),
                    scrollCb: Y,
                    viewportResizeCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.ViewportResize, ...e },
                      }),
                    inputCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.Input, ...e },
                      }),
                    mediaInteractionCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.MediaInteraction, ...e },
                      }),
                    styleSheetRuleCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.StyleSheetRule, ...e },
                      }),
                    styleDeclarationCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.StyleDeclaration, ...e },
                      }),
                    canvasMutationCb: K,
                    fontCb: (e) =>
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.Font, ...e },
                      }),
                    selectionCb: (e) => {
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.Selection, ...e },
                      });
                    },
                    customElementCb: (e) => {
                      v({
                        type: sF.IncrementalSnapshot,
                        data: { source: s$.CustomElement, ...e },
                      });
                    },
                    blockClass: s,
                    ignoreClass: l,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: d,
                    unmaskTextClass: h,
                    maskTextSelector: p,
                    unmaskTextSelector: f,
                    maskInputOptions: W,
                    inlineStylesheet: m,
                    sampling: N,
                    recordCanvas: A,
                    inlineImages: L,
                    userTriggeredOnInput: D,
                    collectFonts: x,
                    doc: e,
                    maskAttributeFn: T,
                    maskInputFn: S,
                    maskTextFn: w,
                    keepIframeSrcFn: j,
                    blockSelector: o,
                    unblockSelector: a,
                    slimDOMOptions: z,
                    dataURLOptions: C,
                    mirror: ol,
                    iframeManager: J,
                    stylesheetManager: X,
                    shadowDomManager: et,
                    processedNodeManager: Z,
                    canvasManager: ee,
                    ignoreCSSAttributes: U,
                    plugins:
                      ij([
                        M,
                        "optionalAccess",
                        (e) => e.filter,
                        "call",
                        (e) => e((e) => e.observer),
                        "optionalAccess",
                        (e) => e.map,
                        "call",
                        (e) =>
                          e((e) => ({
                            observer: e.observer,
                            options: e.options,
                            callback: (t) =>
                              v({
                                type: sF.Plugin,
                                data: { plugin: e.name, payload: t },
                              }),
                          })),
                      ]) || [],
                  },
                  {}
                );
            J.addLoadListener((n) => {
              try {
                e.push(t(n.contentDocument));
              } catch (e) {
                console.warn(e);
              }
            });
            let n = () => {
              en(), e.push(t(document));
            };
            return (
              "interactive" === document.readyState ||
              "complete" === document.readyState
                ? n()
                : (e.push(
                    sg("DOMContentLoaded", () => {
                      v({ type: sF.DomContentLoaded, data: {} }),
                        "DOMContentLoaded" === P && n();
                    })
                  ),
                  e.push(
                    sg(
                      "load",
                      () => {
                        v({ type: sF.Load, data: {} }), "load" === P && n();
                      },
                      window
                    )
                  )),
              () => {
                e.forEach((e) => e()), Z.destroy(), (E = void 0), (y = void 0);
              }
            );
          } catch (e) {
            console.warn(e);
          }
        }
        function ou(e) {
          return e > 9999999999 ? e : 1e3 * e;
        }
        function od(e) {
          return e > 9999999999 ? e / 1e3 : e;
        }
        function oh(e, t) {
          "sentry.transaction" !== t.category &&
            (["ui.click", "ui.input"].includes(t.category)
              ? e.triggerUserActivity()
              : e.checkAndHandleExpiredSession(),
            e.addUpdate(
              () => (
                e.throttledAddEvent({
                  type: sF.Custom,
                  timestamp: 1e3 * (t.timestamp || 0),
                  data: { tag: "breadcrumb", payload: eU(t, 10, 1e3) },
                }),
                "console" === t.category
              )
            ));
        }
        function op(e) {
          return e.closest("button,a") || e;
        }
        function of(e) {
          let t = om(e);
          return t && t instanceof Element ? op(t) : t;
        }
        function om(e) {
          return "object" == typeof e && e && "target" in e ? e.target : e;
        }
        (oc.mirror = ol),
          (oc.takeFullSnapshot = function (e) {
            if (!E)
              throw Error("please take full snapshot after start recording");
            E(e);
          });
        class o_ {
          constructor(e, t, n = oh) {
            (this._lastMutation = 0),
              (this._lastScroll = 0),
              (this._clicks = []),
              (this._timeout = t.timeout / 1e3),
              (this._threshold = t.threshold / 1e3),
              (this._scollTimeout = t.scrollTimeout / 1e3),
              (this._replay = e),
              (this._ignoreSelector = t.ignoreSelector),
              (this._addBreadcrumbEvent = n);
          }
          addListeners() {
            var e;
            let t =
              ((e = () => {
                this._lastMutation = oy();
              }),
              b ||
                ((b = []),
                J(w, "open", function (e) {
                  return function (...t) {
                    if (b)
                      try {
                        b.forEach((e) => e());
                      } catch (e) {}
                    return e.apply(w, t);
                  };
                })),
              b.push(e),
              () => {
                let t = b ? b.indexOf(e) : -1;
                t > -1 && b.splice(t, 1);
              });
            this._teardown = () => {
              t(),
                (this._clicks = []),
                (this._lastMutation = 0),
                (this._lastScroll = 0);
            };
          }
          removeListeners() {
            this._teardown && this._teardown(),
              this._checkClickTimeout && clearTimeout(this._checkClickTimeout);
          }
          handleClick(e, t) {
            var n;
            if (
              ((n = this._ignoreSelector),
              !og.includes(t.tagName) ||
                ("INPUT" === t.tagName &&
                  !["submit", "button"].includes(
                    t.getAttribute("type") || ""
                  )) ||
                ("A" === t.tagName &&
                  (t.hasAttribute("download") ||
                    (t.hasAttribute("target") &&
                      "_self" !== t.getAttribute("target")))) ||
                (n && t.matches(n)) ||
                !(e.data && "number" == typeof e.data.nodeId && e.timestamp))
            )
              return;
            let r = {
              timestamp: od(e.timestamp),
              clickBreadcrumb: e,
              clickCount: 0,
              node: t,
            };
            this._clicks.some(
              (e) =>
                e.node === r.node && 1 > Math.abs(e.timestamp - r.timestamp)
            ) ||
              (this._clicks.push(r),
              1 === this._clicks.length && this._scheduleCheckClicks());
          }
          registerMutation(e = Date.now()) {
            this._lastMutation = od(e);
          }
          registerScroll(e = Date.now()) {
            this._lastScroll = od(e);
          }
          registerClick(e) {
            let t = op(e);
            this._handleMultiClick(t);
          }
          _handleMultiClick(e) {
            this._getClicks(e).forEach((e) => {
              e.clickCount++;
            });
          }
          _getClicks(e) {
            return this._clicks.filter((t) => t.node === e);
          }
          _checkClicks() {
            let e = [],
              t = oy();
            for (let n of (this._clicks.forEach((n) => {
              !n.mutationAfter &&
                this._lastMutation &&
                (n.mutationAfter =
                  n.timestamp <= this._lastMutation
                    ? this._lastMutation - n.timestamp
                    : void 0),
                !n.scrollAfter &&
                  this._lastScroll &&
                  (n.scrollAfter =
                    n.timestamp <= this._lastScroll
                      ? this._lastScroll - n.timestamp
                      : void 0),
                n.timestamp + this._timeout <= t && e.push(n);
            }),
            e)) {
              let e = this._clicks.indexOf(n);
              e > -1 &&
                (this._generateBreadcrumbs(n), this._clicks.splice(e, 1));
            }
            this._clicks.length && this._scheduleCheckClicks();
          }
          _generateBreadcrumbs(e) {
            let t = this._replay,
              n = e.scrollAfter && e.scrollAfter <= this._scollTimeout,
              r = e.mutationAfter && e.mutationAfter <= this._threshold,
              { clickCount: i, clickBreadcrumb: s } = e;
            if (!n && !r) {
              let n =
                  1e3 *
                  Math.min(e.mutationAfter || this._timeout, this._timeout),
                r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                o = {
                  type: "default",
                  message: s.message,
                  timestamp: s.timestamp,
                  category: "ui.slowClickDetected",
                  data: {
                    ...s.data,
                    url: w.location.href,
                    route: t.getCurrentRoute(),
                    timeAfterClickMs: n,
                    endReason: r,
                    clickCount: i || 1,
                  },
                };
              this._addBreadcrumbEvent(t, o);
              return;
            }
            if (i > 1) {
              let e = {
                type: "default",
                message: s.message,
                timestamp: s.timestamp,
                category: "ui.multiClick",
                data: {
                  ...s.data,
                  url: w.location.href,
                  route: t.getCurrentRoute(),
                  clickCount: i,
                  metric: !0,
                },
              };
              this._addBreadcrumbEvent(t, e);
            }
          }
          _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
              (this._checkClickTimeout = nJ(() => this._checkClicks(), 1e3));
          }
        }
        let og = ["A", "BUTTON", "INPUT"];
        function oy() {
          return Date.now() / 1e3;
        }
        function ov(e) {
          return { timestamp: Date.now() / 1e3, type: "default", ...e };
        }
        ((n7 = rr || (rr = {}))[(n7.Document = 0)] = "Document"),
          (n7[(n7.DocumentType = 1)] = "DocumentType"),
          (n7[(n7.Element = 2)] = "Element"),
          (n7[(n7.Text = 3)] = "Text"),
          (n7[(n7.CDATA = 4)] = "CDATA"),
          (n7[(n7.Comment = 5)] = "Comment");
        let oE = new Set([
            "id",
            "class",
            "aria-label",
            "role",
            "name",
            "alt",
            "title",
            "data-test-id",
            "data-testid",
            "disabled",
            "aria-disabled",
            "data-sentry-component",
          ]),
          ob = (e) => (t) => {
            if (!e.isEnabled()) return;
            let n = (function (e) {
              let { target: t, message: n } = (function (e) {
                let t;
                let n = "click" === e.name,
                  r = null;
                try {
                  (r = n ? of(e.event) : om(e.event)),
                    (t = q(r, { maxStringLength: 200 }) || "<unknown>");
                } catch (e) {
                  t = "<unknown>";
                }
                return { target: r, message: t };
              })(e);
              return ov({ category: `ui.${e.name}`, ...oT(t, n) });
            })(t);
            if (!n) return;
            let r = "click" === t.name,
              i = r ? t.event : void 0;
            r &&
              e.clickDetector &&
              i &&
              i.target &&
              !i.altKey &&
              !i.metaKey &&
              !i.ctrlKey &&
              !i.shiftKey &&
              (function (e, t, n) {
                e.handleClick(t, n);
              })(e.clickDetector, n, of(t.event)),
              oh(e, n);
          };
        function oT(e, t) {
          let n = oc.mirror.getId(e),
            r = n && oc.mirror.getNode(n),
            i = r && oc.mirror.getMeta(r),
            s = i && i.type === rr.Element ? i : null;
          return {
            message: t,
            data: s
              ? {
                  nodeId: n,
                  node: {
                    id: n,
                    tagName: s.tagName,
                    textContent: Array.from(s.childNodes)
                      .map((e) => e.type === rr.Text && e.textContent)
                      .filter(Boolean)
                      .map((e) => e.trim())
                      .join(""),
                    attributes: (function (e) {
                      let t = {};
                      for (let n in (!e["data-sentry-component"] &&
                        e["data-sentry-element"] &&
                        (e["data-sentry-component"] = e["data-sentry-element"]),
                      e))
                        if (oE.has(n)) {
                          let r = n;
                          ("data-testid" === n || "data-test-id" === n) &&
                            (r = "testId"),
                            (t[r] = e[n]);
                        }
                      return t;
                    })(s.attributes),
                  },
                }
              : {},
          };
        }
        let oS = {
          resource: function (e) {
            let {
              entryType: t,
              initiatorType: n,
              name: r,
              responseEnd: i,
              startTime: s,
              decodedBodySize: o,
              encodedBodySize: a,
              responseStatus: l,
              transferSize: c,
            } = e;
            return ["fetch", "xmlhttprequest"].includes(n)
              ? null
              : {
                  type: `${t}.${n}`,
                  start: oR(s),
                  end: oR(i),
                  name: r,
                  data: {
                    size: c,
                    statusCode: l,
                    decodedBodySize: o,
                    encodedBodySize: a,
                  },
                };
          },
          paint: function (e) {
            let { duration: t, entryType: n, name: r, startTime: i } = e,
              s = oR(i);
            return { type: n, name: r, start: s, end: s + t, data: void 0 };
          },
          navigation: function (e) {
            let {
              entryType: t,
              name: n,
              decodedBodySize: r,
              duration: i,
              domComplete: s,
              encodedBodySize: o,
              domContentLoadedEventStart: a,
              domContentLoadedEventEnd: l,
              domInteractive: c,
              loadEventStart: u,
              loadEventEnd: d,
              redirectCount: h,
              startTime: p,
              transferSize: f,
              type: m,
            } = e;
            return 0 === i
              ? null
              : {
                  type: `${t}.${m}`,
                  start: oR(p),
                  end: oR(s),
                  name: n,
                  data: {
                    size: f,
                    decodedBodySize: r,
                    encodedBodySize: o,
                    duration: i,
                    domInteractive: c,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: l,
                    loadEventStart: u,
                    loadEventEnd: d,
                    domComplete: s,
                    redirectCount: h,
                  },
                };
          },
        };
        function ow(e, t) {
          return ({ metric: n }) => void t.replayPerformanceEntries.push(e(n));
        }
        function oO(e) {
          return oS[e.entryType] ? oS[e.entryType](e) : null;
        }
        function oR(e) {
          return ((e_ || w.performance.timeOrigin) + e) / 1e3;
        }
        function oN(e) {
          let t = e.entries[e.entries.length - 1];
          return ok(e, "largest-contentful-paint", t ? t.element : void 0);
        }
        function oC(e) {
          let t = e.entries[0];
          return ok(
            e,
            "cumulative-layout-shift",
            t && t.sources ? t.sources[0].node : void 0
          );
        }
        function oI(e) {
          let t = e.entries[e.entries.length - 1];
          return ok(e, "first-input-delay", t ? t.target : void 0);
        }
        function oA(e) {
          let t = e.entries[e.entries.length - 1];
          return ok(e, "interaction-to-next-paint", t ? t.target : void 0);
        }
        function ok(e, t, n) {
          let r = e.value,
            i = e.rating,
            s = oR(r);
          return {
            type: "web-vital",
            name: t,
            start: s,
            end: s,
            data: {
              value: r,
              size: r,
              rating: i,
              nodeId: n ? oc.mirror.getId(n) : void 0,
            },
          };
        }
        let oP = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function oD(e, t) {
          oP && (Q.info(e), t && oL(e));
        }
        function ox(e, t) {
          oP &&
            (Q.info(e),
            t &&
              nJ(() => {
                oL(e);
              }, 0));
        }
        function oL(e) {
          np(
            {
              category: "console",
              data: { logger: "replay" },
              level: "info",
              message: e,
            },
            { level: "info" }
          );
        }
        class oM extends Error {
          constructor() {
            super("Event buffer exceeded maximum size of 20000000.");
          }
        }
        class oj {
          constructor() {
            (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
          }
          get hasEvents() {
            return this.events.length > 0;
          }
          get type() {
            return "sync";
          }
          destroy() {
            this.events = [];
          }
          async addEvent(e) {
            let t = JSON.stringify(e).length;
            if (((this._totalSize += t), this._totalSize > 2e7)) throw new oM();
            this.events.push(e);
          }
          finish() {
            return new Promise((e) => {
              let t = this.events;
              this.clear(), e(JSON.stringify(t));
            });
          }
          clear() {
            (this.events = []), (this._totalSize = 0), (this.hasCheckout = !1);
          }
          getEarliestTimestamp() {
            let e = this.events.map((e) => e.timestamp).sort()[0];
            return e ? ou(e) : null;
          }
        }
        class oU {
          constructor(e) {
            (this._worker = e), (this._id = 0);
          }
          ensureReady() {
            return (
              this._ensureReadyPromise ||
                (this._ensureReadyPromise = new Promise((e, t) => {
                  this._worker.addEventListener(
                    "message",
                    ({ data: n }) => {
                      n.success ? e() : t();
                    },
                    { once: !0 }
                  ),
                    this._worker.addEventListener(
                      "error",
                      (e) => {
                        t(e);
                      },
                      { once: !0 }
                    );
                })),
              this._ensureReadyPromise
            );
          }
          destroy() {
            oD("[Replay] Destroying compression worker"),
              this._worker.terminate();
          }
          postMessage(e, t) {
            let n = this._getAndIncrementId();
            return new Promise((r, i) => {
              let s = ({ data: t }) => {
                if (t.method === e && t.id === n) {
                  if (
                    (this._worker.removeEventListener("message", s), !t.success)
                  ) {
                    oP && Q.error("[Replay]", t.response),
                      i(Error("Error in compression worker"));
                    return;
                  }
                  r(t.response);
                }
              };
              this._worker.addEventListener("message", s),
                this._worker.postMessage({ id: n, method: e, arg: t });
            });
          }
          _getAndIncrementId() {
            return this._id++;
          }
        }
        class oF {
          constructor(e) {
            (this._worker = new oU(e)),
              (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1);
          }
          get hasEvents() {
            return !!this._earliestTimestamp;
          }
          get type() {
            return "worker";
          }
          ensureReady() {
            return this._worker.ensureReady();
          }
          destroy() {
            this._worker.destroy();
          }
          addEvent(e) {
            let t = ou(e.timestamp);
            (!this._earliestTimestamp || t < this._earliestTimestamp) &&
              (this._earliestTimestamp = t);
            let n = JSON.stringify(e);
            return ((this._totalSize += n.length), this._totalSize > 2e7)
              ? Promise.reject(new oM())
              : this._sendEventToWorker(n);
          }
          finish() {
            return this._finishRequest();
          }
          clear() {
            (this._earliestTimestamp = null),
              (this._totalSize = 0),
              (this.hasCheckout = !1),
              this._worker.postMessage("clear").then(null, (e) => {
                oP &&
                  Q.warn(
                    '[Replay] Sending "clear" message to worker failed',
                    e
                  );
              });
          }
          getEarliestTimestamp() {
            return this._earliestTimestamp;
          }
          _sendEventToWorker(e) {
            return this._worker.postMessage("addEvent", e);
          }
          async _finishRequest() {
            let e = await this._worker.postMessage("finish");
            return (this._earliestTimestamp = null), (this._totalSize = 0), e;
          }
        }
        class o$ {
          constructor(e) {
            (this._fallback = new oj()),
              (this._compression = new oF(e)),
              (this._used = this._fallback),
              (this._ensureWorkerIsLoadedPromise =
                this._ensureWorkerIsLoaded());
          }
          get type() {
            return this._used.type;
          }
          get hasEvents() {
            return this._used.hasEvents;
          }
          get hasCheckout() {
            return this._used.hasCheckout;
          }
          set hasCheckout(e) {
            this._used.hasCheckout = e;
          }
          destroy() {
            this._fallback.destroy(), this._compression.destroy();
          }
          clear() {
            return this._used.clear();
          }
          getEarliestTimestamp() {
            return this._used.getEarliestTimestamp();
          }
          addEvent(e) {
            return this._used.addEvent(e);
          }
          async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish();
          }
          ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise;
          }
          async _ensureWorkerIsLoaded() {
            try {
              await this._compression.ensureReady();
            } catch (e) {
              oD(
                "[Replay] Failed to load the compression worker, falling back to simple buffer"
              );
              return;
            }
            await this._switchToCompressionWorker();
          }
          async _switchToCompressionWorker() {
            let { events: e, hasCheckout: t } = this._fallback,
              n = [];
            for (let t of e) n.push(this._compression.addEvent(t));
            (this._compression.hasCheckout = t),
              (this._used = this._compression);
            try {
              await Promise.all(n);
            } catch (e) {
              oP &&
                Q.warn(
                  "[Replay] Failed to add events when switching buffers.",
                  e
                );
            }
          }
        }
        function oB() {
          try {
            return "sessionStorage" in w && !!w.sessionStorage;
          } catch (e) {
            return !1;
          }
        }
        function oq(e) {
          return void 0 !== e && Math.random() < e;
        }
        function oH(e) {
          let t = Date.now(),
            n = e.id || eo(),
            r = e.started || t,
            i = e.lastActivity || t;
          return {
            id: n,
            started: r,
            lastActivity: i,
            segmentId: e.segmentId || 0,
            sampled: e.sampled,
            previousSessionId: e.previousSessionId,
          };
        }
        function oW(e) {
          if (oB())
            try {
              w.sessionStorage.setItem(iG, JSON.stringify(e));
            } catch (e) {}
        }
        function oz(
          { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
          { previousSessionId: r } = {}
        ) {
          let i = oH({
            sampled: oq(e) ? "session" : !!t && "buffer",
            previousSessionId: r,
          });
          return n && oW(i), i;
        }
        function oG(e, t, n = +new Date()) {
          return null === e || void 0 === t || t < 0 || (0 !== t && e + t <= n);
        }
        function oV(
          e,
          {
            maxReplayDuration: t,
            sessionIdleExpire: n,
            targetTime: r = Date.now(),
          }
        ) {
          return oG(e.started, t, r) || oG(e.lastActivity, n, r);
        }
        function oQ(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
          return (
            !!oV(e, { sessionIdleExpire: t, maxReplayDuration: n }) &&
            ("buffer" !== e.sampled || 0 !== e.segmentId)
          );
        }
        function oY(
          {
            traceInternals: e,
            sessionIdleExpire: t,
            maxReplayDuration: n,
            previousSessionId: r,
          },
          i
        ) {
          let s =
            i.stickySession &&
            (function (e) {
              if (!oB()) return null;
              try {
                let t = w.sessionStorage.getItem(iG);
                if (!t) return null;
                let n = JSON.parse(t);
                return ox("[Replay] Loading existing session", e), oH(n);
              } catch (e) {
                return null;
              }
            })(e);
          return s
            ? oQ(s, { sessionIdleExpire: t, maxReplayDuration: n })
              ? (ox(
                  "[Replay] Session in sessionStorage is expired, creating new one..."
                ),
                oz(i, { previousSessionId: s.id }))
              : s
            : (ox("[Replay] Creating new session", e),
              oz(i, { previousSessionId: r }));
        }
        function oK(e, t, n) {
          return !!oJ(e, t) && (oX(e, t, n), !0);
        }
        async function oX(e, t, n) {
          if (!e.eventBuffer) return null;
          try {
            n && "buffer" === e.recordingMode && e.eventBuffer.clear(),
              n && (e.eventBuffer.hasCheckout = !0);
            let r = e.getOptions(),
              i = (function (e, t) {
                try {
                  if ("function" == typeof t && e.type === sF.Custom)
                    return t(e);
                } catch (e) {
                  return (
                    oP &&
                      Q.error(
                        "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
                        e
                      ),
                    null
                  );
                }
                return e;
              })(t, r.beforeAddRecordingEvent);
            if (!i) return;
            return await e.eventBuffer.addEvent(i);
          } catch (r) {
            let t = r && r instanceof oM ? "addEventSizeExceeded" : "addEvent";
            oP && Q.error(r), await e.stop({ reason: t });
            let n = ek();
            n && n.recordDroppedEvent("internal_sdk_error", "replay");
          }
        }
        function oJ(e, t) {
          if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
          let n = ou(t.timestamp);
          return (
            !(n + e.timeouts.sessionIdlePause < Date.now()) &&
            (!(
              n >
              e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
            ) ||
              (ox(
                `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
                e.getOptions()._experiments.traceInternals
              ),
              !1))
          );
        }
        function oZ(e) {
          return "transaction" === e.type;
        }
        function o0(e) {
          return "feedback" === e.type;
        }
        function o1(e) {
          return !!e.category;
        }
        function o2(e, t) {
          return t.map(({ type: t, start: n, end: r, name: i, data: s }) => {
            let o = e.throttledAddEvent({
              type: sF.Custom,
              timestamp: n,
              data: {
                tag: "performanceSpan",
                payload: {
                  op: t,
                  description: i,
                  startTimestamp: n,
                  endTimestamp: r,
                  data: s,
                },
              },
            });
            return "string" == typeof o ? Promise.resolve(null) : o;
          });
        }
        function o3(e, t) {
          var n;
          e.isEnabled() &&
            null !== t &&
            ((n = t.name),
            ((!oP || !e.getOptions()._experiments.traceInternals) &&
              (function (e, t) {
                let n = t && t.getDsn(),
                  r = t && t.getOptions().tunnel;
                return (!!n && e.includes(n.host)) || (!!r && iH(e) === iH(r));
              })(n, ek())) ||
              e.addUpdate(() => (o2(e, [t]), !0)));
        }
        function o5(e) {
          if (!e) return;
          let t = new TextEncoder();
          try {
            if ("string" == typeof e) return t.encode(e).length;
            if (e instanceof URLSearchParams)
              return t.encode(e.toString()).length;
            if (e instanceof FormData) {
              let n = an(e);
              return t.encode(n).length;
            }
            if (e instanceof Blob) return e.size;
            if (e instanceof ArrayBuffer) return e.byteLength;
          } catch (e) {}
        }
        function o4(e) {
          if (!e) return;
          let t = parseInt(e, 10);
          return isNaN(t) ? void 0 : t;
        }
        function o6(e) {
          try {
            if ("string" == typeof e) return [e];
            if (e instanceof URLSearchParams) return [e.toString()];
            if (e instanceof FormData) return [an(e)];
            if (!e) return [void 0];
          } catch (t) {
            return (
              oP && Q.warn("[Replay] Failed to serialize body", e),
              [void 0, "BODY_PARSE_ERROR"]
            );
          }
          return (
            oP &&
              Q.info("[Replay] Skipping network body because of body type", e),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
          );
        }
        function o8(e, t) {
          if (!e)
            return { headers: {}, size: void 0, _meta: { warnings: [t] } };
          let n = { ...e._meta },
            r = n.warnings || [];
          return (n.warnings = [...r, t]), (e._meta = n), e;
        }
        function o9(e, t) {
          if (!t) return null;
          let {
            startTimestamp: n,
            endTimestamp: r,
            url: i,
            method: s,
            statusCode: o,
            request: a,
            response: l,
          } = t;
          return {
            type: e,
            start: n / 1e3,
            end: r / 1e3,
            name: i,
            data: es({ method: s, statusCode: o, request: a, response: l }),
          };
        }
        function o7(e) {
          return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
        }
        function ae(e, t, n) {
          if (!t && 0 === Object.keys(e).length) return;
          if (!t) return { headers: e };
          if (!n) return { headers: e, size: t };
          let r = { headers: e, size: t },
            { body: i, warnings: s } = (function (e) {
              if (!e || "string" != typeof e) return { body: e };
              let t = e.length > 15e4,
                n = (function (e) {
                  let t = e[0],
                    n = e[e.length - 1];
                  return ("[" === t && "]" === n) || ("{" === t && "}" === n);
                })(e);
              if (t) {
                let t = e.slice(0, 15e4);
                return n
                  ? { body: t, warnings: ["MAYBE_JSON_TRUNCATED"] }
                  : { body: `${t}…`, warnings: ["TEXT_TRUNCATED"] };
              }
              if (n)
                try {
                  return { body: JSON.parse(e) };
                } catch (e) {}
              return { body: e };
            })(n);
          return (
            (r.body = i), s && s.length > 0 && (r._meta = { warnings: s }), r
          );
        }
        function at(e, t) {
          return Object.keys(e).reduce((n, r) => {
            let i = r.toLowerCase();
            return t.includes(i) && e[r] && (n[i] = e[r]), n;
          }, {});
        }
        function an(e) {
          return new URLSearchParams(e).toString();
        }
        function ar(e, t = w.document.baseURI) {
          if (
            e.startsWith("http://") ||
            e.startsWith("https://") ||
            e.startsWith(w.location.origin)
          )
            return e;
          let n = new URL(e, t);
          if (n.origin !== new URL(t).origin) return e;
          let r = n.href;
          return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
        }
        async function ai(e, t, n) {
          try {
            let r = await as(e, t, n),
              i = o9("resource.fetch", r);
            o3(n.replay, i);
          } catch (e) {
            oP && Q.error("[Replay] Failed to capture fetch breadcrumb", e);
          }
        }
        async function as(e, t, n) {
          var r, i;
          let s = Date.now(),
            { startTimestamp: o = s, endTimestamp: a = s } = t,
            {
              url: l,
              method: c,
              status_code: u = 0,
              request_body_size: d,
              response_body_size: h,
            } = e.data,
            p =
              ((r = n.networkDetailAllowUrls),
              X(ar(l), r) && ((i = n.networkDetailDenyUrls), !X(ar(l), i)));
          return {
            startTimestamp: o,
            endTimestamp: a,
            url: l,
            method: c,
            statusCode: u,
            request: p
              ? (function (
                  { networkCaptureBodies: e, networkRequestHeaders: t },
                  n,
                  r
                ) {
                  let i = n
                    ? 1 === n.length && "string" != typeof n[0]
                      ? au(n[0], t)
                      : 2 === n.length
                      ? au(n[1], t)
                      : {}
                    : {};
                  if (!e) return ae(i, r, void 0);
                  let [s, o] = o6(al(n)),
                    a = ae(i, r, s);
                  return o ? o8(a, o) : a;
                })(n, t.input, d)
              : o7(d),
            response: await ao(p, n, t.response, h),
          };
        }
        async function ao(
          e,
          { networkCaptureBodies: t, networkResponseHeaders: n },
          r,
          i
        ) {
          if (!e && void 0 !== i) return o7(i);
          let s = r ? ac(r.headers, n) : {};
          if (!r || (!t && void 0 !== i)) return ae(s, i, void 0);
          let [o, a] = await aa(r),
            l = (function (
              e,
              {
                networkCaptureBodies: t,
                responseBodySize: n,
                captureDetails: r,
                headers: i,
              }
            ) {
              try {
                let s = e && e.length && void 0 === n ? o5(e) : n;
                if (!r) return o7(s);
                if (t) return ae(i, s, e);
                return ae(i, s, void 0);
              } catch (e) {
                return (
                  oP && Q.warn("[Replay] Failed to serialize response body", e),
                  ae(i, n, void 0)
                );
              }
            })(o, {
              networkCaptureBodies: t,
              responseBodySize: i,
              captureDetails: e,
              headers: s,
            });
          return a ? o8(l, a) : l;
        }
        async function aa(e) {
          let t = (function (e) {
            try {
              return e.clone();
            } catch (e) {
              oP && Q.warn("[Replay] Failed to clone response body", e);
            }
          })(e);
          if (!t) return [void 0, "BODY_PARSE_ERROR"];
          try {
            return [
              await new Promise((e, n) => {
                let r = nJ(
                  () => n(Error("Timeout while trying to read response body")),
                  500
                );
                ad(t)
                  .then(
                    (t) => e(t),
                    (e) => n(e)
                  )
                  .finally(() => clearTimeout(r));
              }),
            ];
          } catch (e) {
            return (
              oP && Q.warn("[Replay] Failed to get text body from response", e),
              [void 0, "BODY_PARSE_ERROR"]
            );
          }
        }
        function al(e = []) {
          if (2 === e.length && "object" == typeof e[1]) return e[1].body;
        }
        function ac(e, t) {
          let n = {};
          return (
            t.forEach((t) => {
              e.get(t) && (n[t] = e.get(t));
            }),
            n
          );
        }
        function au(e, t) {
          if (!e) return {};
          let n = e.headers;
          return n
            ? n instanceof Headers
              ? ac(n, t)
              : Array.isArray(n)
              ? {}
              : at(n, t)
            : {};
        }
        async function ad(e) {
          return await e.text();
        }
        async function ah(e, t, n) {
          try {
            let r = (function (e, t, n) {
                var r, i;
                let s = Date.now(),
                  {
                    startTimestamp: o = s,
                    endTimestamp: a = s,
                    input: l,
                    xhr: c,
                  } = t,
                  {
                    url: u,
                    method: d,
                    status_code: h = 0,
                    request_body_size: p,
                    response_body_size: f,
                  } = e.data;
                if (!u) return null;
                if (
                  !c ||
                  ((r = n.networkDetailAllowUrls), !X(ar(u), r)) ||
                  ((i = n.networkDetailDenyUrls), X(ar(u), i))
                ) {
                  let e = o7(p);
                  return {
                    startTimestamp: o,
                    endTimestamp: a,
                    url: u,
                    method: d,
                    statusCode: h,
                    request: e,
                    response: o7(f),
                  };
                }
                let m = c[nu],
                  _ = m ? at(m.request_headers, n.networkRequestHeaders) : {},
                  g = at(
                    (function (e) {
                      let t = e.getAllResponseHeaders();
                      return t
                        ? t.split("\r\n").reduce((e, t) => {
                            let [n, r] = t.split(": ");
                            return (e[n.toLowerCase()] = r), e;
                          }, {})
                        : {};
                    })(c),
                    n.networkResponseHeaders
                  ),
                  [y, v] = n.networkCaptureBodies ? o6(l) : [void 0],
                  [E, b] = n.networkCaptureBodies
                    ? (function (e) {
                        let t = [];
                        try {
                          return [e.responseText];
                        } catch (e) {
                          t.push(e);
                        }
                        try {
                          return (function (e, t) {
                            try {
                              if ("string" == typeof e) return [e];
                              if (e instanceof Document)
                                return [e.body.outerHTML];
                              if ("json" === t && e && "object" == typeof e)
                                return [JSON.stringify(e)];
                              if (!e) return [void 0];
                            } catch (t) {
                              return (
                                oP &&
                                  Q.warn(
                                    "[Replay] Failed to serialize body",
                                    e
                                  ),
                                [void 0, "BODY_PARSE_ERROR"]
                              );
                            }
                            return (
                              oP &&
                                Q.info(
                                  "[Replay] Skipping network body because of body type",
                                  e
                                ),
                              [void 0, "UNPARSEABLE_BODY_TYPE"]
                            );
                          })(e.response, e.responseType);
                        } catch (e) {
                          t.push(e);
                        }
                        return (
                          oP &&
                            Q.warn(
                              "[Replay] Failed to get xhr response body",
                              ...t
                            ),
                          [void 0]
                        );
                      })(c)
                    : [void 0],
                  T = ae(_, p, y),
                  S = ae(g, f, E);
                return {
                  startTimestamp: o,
                  endTimestamp: a,
                  url: u,
                  method: d,
                  statusCode: h,
                  request: v ? o8(T, v) : T,
                  response: b ? o8(S, b) : S,
                };
              })(e, t, n),
              i = o9("resource.xhr", r);
            o3(n.replay, i);
          } catch (e) {
            oP && Q.error("[Replay] Failed to capture xhr breadcrumb", e);
          }
        }
        async function ap(e) {
          try {
            return Promise.all(
              o2(e, [
                (function (e) {
                  let {
                      jsHeapSizeLimit: t,
                      totalJSHeapSize: n,
                      usedJSHeapSize: r,
                    } = e,
                    i = Date.now() / 1e3;
                  return {
                    type: "memory",
                    name: "memory",
                    start: i,
                    end: i,
                    data: {
                      memory: {
                        jsHeapSizeLimit: t,
                        totalJSHeapSize: n,
                        usedJSHeapSize: r,
                      },
                    },
                  };
                })(w.performance.memory),
              ])
            );
          } catch (e) {
            return [];
          }
        }
        async function af({ client: e, scope: t, replayId: n, event: r }) {
          let i = {
            event_id: n,
            integrations:
              "object" != typeof e._integrations ||
              null === e._integrations ||
              Array.isArray(e._integrations)
                ? void 0
                : Object.keys(e._integrations),
          };
          e.emit("preprocessEvent", r, i);
          let s = await tp(e.getOptions(), r, i, t, e, eI());
          if (!s) return null;
          s.platform = s.platform || "javascript";
          let o = e.getSdkMetadata(),
            { name: a, version: l } = (o && o.sdk) || {};
          return (
            (s.sdk = {
              ...s.sdk,
              name: a || "sentry.javascript.unknown",
              version: l || "0.0.0",
            }),
            s
          );
        }
        async function am({
          recordingData: e,
          replayId: t,
          segmentId: n,
          eventContext: r,
          timestamp: i,
          session: s,
        }) {
          var o;
          let a;
          let l = (function ({ recordingData: e, headers: t }) {
              let n;
              let r = `${JSON.stringify(t)}
`;
              if ("string" == typeof e) n = `${r}${e}`;
              else {
                let t = new TextEncoder().encode(r);
                (n = new Uint8Array(t.length + e.length)).set(t),
                  n.set(e, t.length);
              }
              return n;
            })({ recordingData: e, headers: { segment_id: n } }),
            { urls: c, errorIds: u, traceIds: d, initialTimestamp: h } = r,
            p = ek(),
            f = eC(),
            m = p && p.getTransport(),
            _ = p && p.getDsn();
          if (!p || !m || !_ || !s.sampled) return eF({});
          let g = {
              type: "replay_event",
              replay_start_timestamp: h / 1e3,
              timestamp: i / 1e3,
              error_ids: u,
              trace_ids: d,
              urls: c,
              replay_id: t,
              segment_id: n,
              replay_type: s.sampled,
            },
            y = await af({ scope: f, client: p, replayId: t, event: g });
          if (!y)
            return (
              p.recordDroppedEvent("event_processor", "replay", g),
              oD("An event processor returned `null`, will not send event."),
              eF({})
            );
          delete y.sdkProcessingMetadata;
          let v =
            ((o = p.getOptions().tunnel),
            tY(t0(y, tZ(y), o, _), [
              [{ type: "replay_event" }, y],
              [
                {
                  type: "replay_recording",
                  length:
                    "string" == typeof l
                      ? new TextEncoder().encode(l).length
                      : l.length,
                },
                l,
              ],
            ]));
          try {
            a = await m.send(v);
          } catch (t) {
            let e = Error(iV);
            try {
              e.cause = t;
            } catch (e) {}
            throw e;
          }
          if (
            "number" == typeof a.statusCode &&
            (a.statusCode < 200 || a.statusCode >= 300)
          )
            throw new a_(a.statusCode);
          let E = n0({}, a);
          if (nZ(E, "replay")) throw new ag(E);
          return a;
        }
        class a_ extends Error {
          constructor(e) {
            super(`Transport returned status code ${e}`);
          }
        }
        class ag extends Error {
          constructor(e) {
            super("Rate limit hit"), (this.rateLimits = e);
          }
        }
        async function ay(e, t = { count: 0, interval: 5e3 }) {
          let { recordingData: n, options: r } = e;
          if (n.length)
            try {
              return await am(e), !0;
            } catch (n) {
              var i, s;
              if (n instanceof a_ || n instanceof ag) throw n;
              if (
                ((i = "Replays"),
                (s = { _retryCount: t.count }),
                eI().setContext(i, s),
                oP &&
                  r._experiments &&
                  r._experiments.captureExceptions &&
                  t_(n),
                t.count >= 3)
              ) {
                let e = Error(`${iV} - max retries exceeded`);
                try {
                  e.cause = n;
                } catch (e) {}
                throw e;
              }
              return (
                (t.interval *= ++t.count),
                new Promise((n, r) => {
                  nJ(async () => {
                    try {
                      await ay(e, t), n(!0);
                    } catch (e) {
                      r(e);
                    }
                  }, t.interval);
                })
              );
            }
        }
        let av = "__THROTTLED";
        class aE {
          constructor({ options: e, recordingOptions: t }) {
            aE.prototype.__init.call(this),
              aE.prototype.__init2.call(this),
              aE.prototype.__init3.call(this),
              aE.prototype.__init4.call(this),
              aE.prototype.__init5.call(this),
              aE.prototype.__init6.call(this),
              (this.eventBuffer = null),
              (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              (this.recordingMode = "session"),
              (this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5,
              }),
              (this._lastActivity = Date.now()),
              (this._isEnabled = !1),
              (this._isPaused = !1),
              (this._requiresManualStart = !1),
              (this._hasInitializedCoreListeners = !1),
              (this._context = {
                errorIds: new Set(),
                traceIds: new Set(),
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: "",
              }),
              (this._recordingOptions = t),
              (this._options = e),
              (this._debouncedFlush = (function (e, t, n) {
                let r, i, s;
                let o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                function a() {
                  return l(), (r = e());
                }
                function l() {
                  void 0 !== i && clearTimeout(i),
                    void 0 !== s && clearTimeout(s),
                    (i = s = void 0);
                }
                function c() {
                  return (
                    i && clearTimeout(i),
                    (i = nJ(a, t)),
                    o && void 0 === s && (s = nJ(a, o)),
                    r
                  );
                }
                return (
                  (c.cancel = l),
                  (c.flush = function () {
                    return void 0 !== i || void 0 !== s ? a() : r;
                  }),
                  c
                );
              })(() => this._flush(), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay,
              })),
              (this._throttledAddEvent = (function (e, t, n) {
                let r = new Map(),
                  i = (e) => {
                    let t = e - 5;
                    r.forEach((e, n) => {
                      n < t && r.delete(n);
                    });
                  },
                  s = () => [...r.values()].reduce((e, t) => e + t, 0),
                  o = !1;
                return (...t) => {
                  let n = Math.floor(Date.now() / 1e3);
                  if ((i(n), s() >= 300)) {
                    let e = o;
                    return (o = !0), e ? "__SKIPPED" : av;
                  }
                  o = !1;
                  let a = r.get(n) || 0;
                  return r.set(n, a + 1), e(...t);
                };
              })(
                (e, t) =>
                  oJ(this, e) ? oX(this, e, t) : Promise.resolve(null),
                0,
                0
              ));
            let { slowClickTimeout: n, slowClickIgnoreSelectors: r } =
                this.getOptions(),
              i = n
                ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : "",
                  }
                : void 0;
            i && (this.clickDetector = new o_(this, i));
          }
          getContext() {
            return this._context;
          }
          isEnabled() {
            return this._isEnabled;
          }
          isPaused() {
            return this._isPaused;
          }
          isRecordingCanvas() {
            return !!this._canvas;
          }
          getOptions() {
            return this._options;
          }
          initializeSampling(e) {
            let { errorSampleRate: t, sessionSampleRate: n } = this._options,
              r = t <= 0 && n <= 0;
            if (((this._requiresManualStart = r), !r)) {
              if ((this._initializeSessionForSampling(e), !this.session)) {
                this._handleException(
                  Error("Unable to initialize and create session")
                );
                return;
              }
              !1 !== this.session.sampled &&
                ((this.recordingMode =
                  "buffer" === this.session.sampled &&
                  0 === this.session.segmentId
                    ? "buffer"
                    : "session"),
                ox(
                  `[Replay] Starting replay in ${this.recordingMode} mode`,
                  this._options._experiments.traceInternals
                ),
                this._initializeRecording());
            }
          }
          start() {
            if (this._isEnabled && "session" === this.recordingMode)
              throw Error("Replay recording is already in progress");
            if (this._isEnabled && "buffer" === this.recordingMode)
              throw Error(
                "Replay buffering is in progress, call `flush()` to save the replay"
              );
            ox(
              "[Replay] Starting replay in session mode",
              this._options._experiments.traceInternals
            ),
              this._updateUserActivity();
            let e = oY(
              {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                traceInternals: this._options._experiments.traceInternals,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 1,
                allowBuffering: !1,
              }
            );
            (this.session = e), this._initializeRecording();
          }
          startBuffering() {
            if (this._isEnabled)
              throw Error("Replay recording is already in progress");
            ox(
              "[Replay] Starting replay in buffer mode",
              this._options._experiments.traceInternals
            );
            let e = oY(
              {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
                traceInternals: this._options._experiments.traceInternals,
              },
              {
                stickySession: this._options.stickySession,
                sessionSampleRate: 0,
                allowBuffering: !0,
              }
            );
            (this.session = e),
              (this.recordingMode = "buffer"),
              this._initializeRecording();
          }
          startRecording() {
            try {
              var e;
              let t;
              let n = this._canvas;
              this._stopRecording = oc({
                ...this._recordingOptions,
                ...("buffer" === this.recordingMode && {
                  checkoutEveryNms: 6e4,
                }),
                emit:
                  ((e = this),
                  (t = !1),
                  (n, r) => {
                    if (!e.checkAndHandleExpiredSession()) {
                      oP &&
                        Q.warn(
                          "[Replay] Received replay event after session expired."
                        );
                      return;
                    }
                    let i = r || !t;
                    (t = !0),
                      e.clickDetector &&
                        (function (e, t) {
                          try {
                            if (3 !== t.type) return;
                            let { source: n } = t.data;
                            if (
                              (n === s$.Mutation &&
                                e.registerMutation(t.timestamp),
                              n === s$.Scroll && e.registerScroll(t.timestamp),
                              t.data.source === s$.MouseInteraction)
                            ) {
                              let { type: n, id: r } = t.data,
                                i = oc.mirror.getNode(r);
                              i instanceof HTMLElement &&
                                n === sB.Click &&
                                e.registerClick(i);
                            }
                          } catch (e) {}
                        })(e.clickDetector, n),
                      e.addUpdate(() => {
                        if (
                          ("buffer" === e.recordingMode &&
                            i &&
                            e.setInitialState(),
                          !oK(e, n, i))
                        )
                          return !0;
                        if (!i) return !1;
                        if (
                          (i &&
                            e.session &&
                            0 === e.session.segmentId &&
                            oK(
                              e,
                              (function (e) {
                                let t = e.getOptions();
                                return {
                                  type: sF.Custom,
                                  timestamp: Date.now(),
                                  data: {
                                    tag: "options",
                                    payload: {
                                      shouldRecordCanvas: e.isRecordingCanvas(),
                                      sessionSampleRate: t.sessionSampleRate,
                                      errorSampleRate: t.errorSampleRate,
                                      useCompressionOption: t.useCompression,
                                      blockAllMedia: t.blockAllMedia,
                                      maskAllText: t.maskAllText,
                                      maskAllInputs: t.maskAllInputs,
                                      useCompression:
                                        !!e.eventBuffer &&
                                        "worker" === e.eventBuffer.type,
                                      networkDetailHasUrls:
                                        t.networkDetailAllowUrls.length > 0,
                                      networkCaptureBodies:
                                        t.networkCaptureBodies,
                                      networkRequestHasHeaders:
                                        t.networkRequestHeaders.length > 0,
                                      networkResponseHasHeaders:
                                        t.networkResponseHeaders.length > 0,
                                    },
                                  },
                                };
                              })(e),
                              !1
                            ),
                          e.session && e.session.previousSessionId)
                        )
                          return !0;
                        if (
                          "buffer" === e.recordingMode &&
                          e.session &&
                          e.eventBuffer
                        ) {
                          let t = e.eventBuffer.getEarliestTimestamp();
                          t &&
                            (oD(
                              `[Replay] Updating session start time to earliest event in buffer to ${new Date(
                                t
                              )}`,
                              e.getOptions()._experiments.traceInternals
                            ),
                            (e.session.started = t),
                            e.getOptions().stickySession && oW(e.session));
                        }
                        return "session" === e.recordingMode && e.flush(), !0;
                      });
                  }),
                onMutation: this._onMutationHandler,
                ...(n
                  ? {
                      recordCanvas: n.recordCanvas,
                      getCanvasManager: n.getCanvasManager,
                      sampling: n.sampling,
                      dataURLOptions: n.dataURLOptions,
                    }
                  : {}),
              });
            } catch (e) {
              this._handleException(e);
            }
          }
          stopRecording() {
            try {
              return (
                this._stopRecording &&
                  (this._stopRecording(), (this._stopRecording = void 0)),
                !0
              );
            } catch (e) {
              return this._handleException(e), !1;
            }
          }
          async stop({ forceFlush: e = !1, reason: t } = {}) {
            if (this._isEnabled) {
              this._isEnabled = !1;
              try {
                oD(
                  `[Replay] Stopping Replay${t ? ` triggered by ${t}` : ""}`,
                  this._options._experiments.traceInternals
                ),
                  this._removeListeners(),
                  this.stopRecording(),
                  this._debouncedFlush.cancel(),
                  e && (await this._flush({ force: !0 })),
                  this.eventBuffer && this.eventBuffer.destroy(),
                  (this.eventBuffer = null),
                  (function () {
                    if (oB())
                      try {
                        w.sessionStorage.removeItem(iG);
                      } catch (e) {}
                  })(),
                  (this.session = void 0);
              } catch (e) {
                this._handleException(e);
              }
            }
          }
          pause() {
            this._isPaused ||
              ((this._isPaused = !0),
              this.stopRecording(),
              oD(
                "[Replay] Pausing replay",
                this._options._experiments.traceInternals
              ));
          }
          resume() {
            this._isPaused &&
              this._checkSession() &&
              ((this._isPaused = !1),
              this.startRecording(),
              oD(
                "[Replay] Resuming replay",
                this._options._experiments.traceInternals
              ));
          }
          async sendBufferedReplayOrFlush({ continueRecording: e = !0 } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            let t = Date.now();
            oD(
              "[Replay] Converting buffer to session",
              this._options._experiments.traceInternals
            ),
              await this.flushImmediate();
            let n = this.stopRecording();
            e &&
              n &&
              "session" !== this.recordingMode &&
              ((this.recordingMode = "session"),
              this.session &&
                (this._updateUserActivity(t),
                this._updateSessionActivity(t),
                this._maybeSaveSession()),
              this.startRecording());
          }
          addUpdate(e) {
            let t = e();
            "buffer" !== this.recordingMode &&
              !0 !== t &&
              this._debouncedFlush();
          }
          triggerUserActivity() {
            if ((this._updateUserActivity(), !this._stopRecording)) {
              if (!this._checkSession()) return;
              this.resume();
              return;
            }
            this.checkAndHandleExpiredSession(), this._updateSessionActivity();
          }
          updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity();
          }
          conditionalFlush() {
            return "buffer" === this.recordingMode
              ? Promise.resolve()
              : this.flushImmediate();
          }
          flush() {
            return this._debouncedFlush();
          }
          flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush();
          }
          cancelFlush() {
            this._debouncedFlush.cancel();
          }
          getSessionId() {
            return this.session && this.session.id;
          }
          checkAndHandleExpiredSession() {
            if (
              this._lastActivity &&
              oG(this._lastActivity, this.timeouts.sessionIdlePause) &&
              this.session &&
              "session" === this.session.sampled
            ) {
              this.pause();
              return;
            }
            return !!this._checkSession();
          }
          setInitialState() {
            let e = `${w.location.pathname}${w.location.hash}${w.location.search}`,
              t = `${w.location.origin}${e}`;
            (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              this._clearContext(),
              (this._context.initialUrl = t),
              (this._context.initialTimestamp = Date.now()),
              this._context.urls.push(t);
          }
          throttledAddEvent(e, t) {
            let n = this._throttledAddEvent(e, t);
            if (n === av) {
              let e = ov({ category: "replay.throttled" });
              this.addUpdate(
                () =>
                  !oK(this, {
                    type: 5,
                    timestamp: e.timestamp || 0,
                    data: { tag: "breadcrumb", payload: e, metric: !0 },
                  })
              );
            }
            return n;
          }
          getCurrentRoute() {
            let e = this.lastActiveSpan || ta(),
              t = e && to(e),
              n = ((t && e7(t).data) || {})[eH];
            if (t && n && ["route", "custom"].includes(n))
              return e7(t).description;
          }
          _initializeRecording() {
            this.setInitialState(),
              this._updateSessionActivity(),
              (this.eventBuffer = (function ({
                useCompression: e,
                workerUrl: t,
              }) {
                if (e && window.Worker) {
                  let e = (function (e) {
                    try {
                      let t =
                        e ||
                        ("undefined" !=
                          typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ &&
                        __SENTRY_EXCLUDE_REPLAY_WORKER__
                          ? ""
                          : (function () {
                              let e = new Blob([
                                'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(J)return J.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});',
                              ]);
                              return URL.createObjectURL(e);
                            })());
                      if (!t) return;
                      oD(
                        `[Replay] Using compression worker${
                          e ? ` from ${e}` : ""
                        }`
                      );
                      let n = new Worker(t);
                      return new o$(n);
                    } catch (e) {
                      oD("[Replay] Failed to create compression worker");
                    }
                  })(t);
                  if (e) return e;
                }
                return oD("[Replay] Using simple buffer"), new oj();
              })({
                useCompression: this._options.useCompression,
                workerUrl: this._options.workerUrl,
              })),
              this._removeListeners(),
              this._addListeners(),
              (this._isEnabled = !0),
              (this._isPaused = !1),
              this.startRecording();
          }
          _handleException(e) {
            oP && Q.error("[Replay]", e),
              oP &&
                this._options._experiments &&
                this._options._experiments.captureExceptions &&
                t_(e);
          }
          _initializeSessionForSampling(e) {
            let t = this._options.errorSampleRate > 0,
              n = oY(
                {
                  sessionIdleExpire: this.timeouts.sessionIdleExpire,
                  maxReplayDuration: this._options.maxReplayDuration,
                  traceInternals: this._options._experiments.traceInternals,
                  previousSessionId: e,
                },
                {
                  stickySession: this._options.stickySession,
                  sessionSampleRate: this._options.sessionSampleRate,
                  allowBuffering: t,
                }
              );
            this.session = n;
          }
          _checkSession() {
            if (!this.session) return !1;
            let e = this.session;
            return (
              !oQ(e, {
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
                maxReplayDuration: this._options.maxReplayDuration,
              }) || (this._refreshSession(e), !1)
            );
          }
          async _refreshSession(e) {
            this._isEnabled &&
              (await this.stop({ reason: "refresh session" }),
              this.initializeSampling(e.id));
          }
          _addListeners() {
            try {
              w.document.addEventListener(
                "visibilitychange",
                this._handleVisibilityChange
              ),
                w.addEventListener("blur", this._handleWindowBlur),
                w.addEventListener("focus", this._handleWindowFocus),
                w.addEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.addListeners(),
                this._hasInitializedCoreListeners ||
                  ((function (e) {
                    let t = ek();
                    na(ob(e)),
                      tH((t) => {
                        if (!e.isEnabled()) return;
                        let n = (function (e) {
                          let { from: t, to: n } = e,
                            r = Date.now() / 1e3;
                          return {
                            type: "navigation.push",
                            start: r,
                            end: r,
                            name: n,
                            data: { previous: t },
                          };
                        })(t);
                        null !== n &&
                          (e.getContext().urls.push(n.name),
                          e.triggerUserActivity(),
                          e.addUpdate(() => (o2(e, [n]), !1)));
                      }),
                      (function (e) {
                        let t = ek();
                        t &&
                          t.on("beforeAddBreadcrumb", (t) =>
                            (function (e, t) {
                              if (!e.isEnabled() || !o1(t)) return;
                              let n =
                                !o1(t) ||
                                [
                                  "fetch",
                                  "xhr",
                                  "sentry.event",
                                  "sentry.transaction",
                                ].includes(t.category) ||
                                t.category.startsWith("ui.")
                                  ? null
                                  : "console" === t.category
                                  ? (function (e) {
                                      let t = e.data && e.data.arguments;
                                      if (!Array.isArray(t) || 0 === t.length)
                                        return ov(e);
                                      let n = !1,
                                        r = t.map((e) => {
                                          if (!e) return e;
                                          if ("string" == typeof e)
                                            return e.length > 5e3
                                              ? ((n = !0),
                                                `${e.slice(0, 5e3)}…`)
                                              : e;
                                          if ("object" == typeof e)
                                            try {
                                              let t = eU(e, 7);
                                              if (
                                                JSON.stringify(t).length > 5e3
                                              )
                                                return (
                                                  (n = !0),
                                                  `${JSON.stringify(
                                                    t,
                                                    null,
                                                    2
                                                  ).slice(0, 5e3)}…`
                                                );
                                              return t;
                                            } catch (e) {}
                                          return e;
                                        });
                                      return ov({
                                        ...e,
                                        data: {
                                          ...e.data,
                                          arguments: r,
                                          ...(n
                                            ? {
                                                _meta: {
                                                  warnings: [
                                                    "CONSOLE_ARG_TRUNCATED",
                                                  ],
                                                },
                                              }
                                            : {}),
                                        },
                                      });
                                    })(t)
                                  : ov(t);
                              n && oh(e, n);
                            })(e, t)
                          );
                      })(e),
                      (function (e) {
                        let t = ek();
                        try {
                          let {
                              networkDetailAllowUrls: n,
                              networkDetailDenyUrls: r,
                              networkCaptureBodies: i,
                              networkRequestHeaders: s,
                              networkResponseHeaders: o,
                            } = e.getOptions(),
                            a = {
                              replay: e,
                              networkDetailAllowUrls: n,
                              networkDetailDenyUrls: r,
                              networkCaptureBodies: i,
                              networkRequestHeaders: s,
                              networkResponseHeaders: o,
                            };
                          t &&
                            t.on("beforeAddBreadcrumb", (e, t) =>
                              (function (e, t, n) {
                                if (t.data)
                                  try {
                                    var r, i;
                                    "xhr" === t.category &&
                                      (r = n) &&
                                      r.xhr &&
                                      ((function (e, t) {
                                        let { xhr: n, input: r } = t;
                                        if (!n) return;
                                        let i = o5(r),
                                          s = n.getResponseHeader(
                                            "content-length"
                                          )
                                            ? o4(
                                                n.getResponseHeader(
                                                  "content-length"
                                                )
                                              )
                                            : (function (e, t) {
                                                try {
                                                  let n =
                                                    "json" === t &&
                                                    e &&
                                                    "object" == typeof e
                                                      ? JSON.stringify(e)
                                                      : e;
                                                  return o5(n);
                                                } catch (e) {
                                                  return;
                                                }
                                              })(n.response, n.responseType);
                                        void 0 !== i &&
                                          (e.data.request_body_size = i),
                                          void 0 !== s &&
                                            (e.data.response_body_size = s);
                                      })(t, n),
                                      ah(t, n, e)),
                                      "fetch" === t.category &&
                                        (i = n) &&
                                        i.response &&
                                        ((function (e, t) {
                                          let { input: n, response: r } = t,
                                            i = o5(n ? al(n) : void 0),
                                            s = r
                                              ? o4(
                                                  r.headers.get(
                                                    "content-length"
                                                  )
                                                )
                                              : void 0;
                                          void 0 !== i &&
                                            (e.data.request_body_size = i),
                                            void 0 !== s &&
                                              (e.data.response_body_size = s);
                                        })(t, n),
                                        ai(t, n, e));
                                  } catch (e) {
                                    oP &&
                                      Q.warn(
                                        "Error when enriching network breadcrumb"
                                      );
                                  }
                              })(a, e, t)
                            );
                        } catch (e) {}
                      })(e),
                      ty(
                        Object.assign(
                          (t, n) =>
                            e.isEnabled()
                              ? "replay_event" === t.type
                                ? (delete t.breadcrumbs, t)
                                : (!t.type || oZ(t) || o0(t)) &&
                                  e.checkAndHandleExpiredSession()
                                ? o0(t)
                                  ? (e.flush(),
                                    (t.contexts.feedback.replay_id =
                                      e.getSessionId()),
                                    e.triggerUserActivity(),
                                    e.addUpdate(
                                      () =>
                                        !t.timestamp ||
                                        (e.throttledAddEvent({
                                          type: sF.Custom,
                                          timestamp: 1e3 * t.timestamp,
                                          data: {
                                            tag: "breadcrumb",
                                            payload: {
                                              timestamp: t.timestamp,
                                              type: "default",
                                              category: "sentry.feedback",
                                              data: { feedbackId: t.event_id },
                                            },
                                          },
                                        }),
                                        !1)
                                    ),
                                    t)
                                  : !t.type &&
                                    t.exception &&
                                    t.exception.values &&
                                    t.exception.values.length &&
                                    n.originalException &&
                                    n.originalException.__rrweb__ &&
                                    !e.getOptions()._experiments
                                      .captureExceptions
                                  ? (oP &&
                                      Q.log(
                                        "[Replay] Ignoring error from rrweb internals",
                                        t
                                      ),
                                    null)
                                  : ((("buffer" === e.recordingMode &&
                                      t.message !== iV &&
                                      t.exception &&
                                      !t.type &&
                                      oq(e.getOptions().errorSampleRate)) ||
                                      "session" === e.recordingMode) &&
                                      (t.tags = {
                                        ...t.tags,
                                        replayId: e.getSessionId(),
                                      }),
                                    t)
                                : t
                              : t,
                          { id: "Replay" }
                        )
                      ),
                      t &&
                        (t.on("beforeSendEvent", (t) => {
                          e.isEnabled() &&
                            !t.type &&
                            (function (e, t) {
                              let n =
                                t.exception &&
                                t.exception.values &&
                                t.exception.values[0] &&
                                t.exception.values[0].value;
                              "string" == typeof n &&
                                (n.match(
                                  /(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/
                                ) ||
                                  n.match(
                                    /(does not match server-rendered HTML|Hydration failed because)/i
                                  )) &&
                                oh(e, ov({ category: "replay.hydrate-error" }));
                            })(e, t);
                        }),
                        t.on("afterSendEvent", (t, n) => {
                          if (!e.isEnabled() || (t.type && !oZ(t))) return;
                          let r = n && n.statusCode;
                          if (r && !(r < 200) && !(r >= 300)) {
                            if (oZ(t)) {
                              (function (e, t) {
                                let n = e.getContext();
                                t.contexts &&
                                  t.contexts.trace &&
                                  t.contexts.trace.trace_id &&
                                  n.traceIds.size < 100 &&
                                  n.traceIds.add(t.contexts.trace.trace_id);
                              })(e, t);
                              return;
                            }
                            (function (e, t) {
                              let n = e.getContext();
                              if (
                                (t.event_id &&
                                  n.errorIds.size < 100 &&
                                  n.errorIds.add(t.event_id),
                                "buffer" !== e.recordingMode ||
                                  !t.tags ||
                                  !t.tags.replayId)
                              )
                                return;
                              let { beforeErrorSampling: r } = e.getOptions();
                              ("function" != typeof r || r(t)) &&
                                nJ(() => {
                                  e.sendBufferedReplayOrFlush();
                                });
                            })(e, t);
                          }
                        }),
                        t.on("createDsc", (t) => {
                          let n = e.getSessionId();
                          n &&
                            e.isEnabled() &&
                            "session" === e.recordingMode &&
                            e.checkAndHandleExpiredSession() &&
                            (t.replay_id = n);
                        }),
                        t.on("spanStart", (t) => {
                          e.lastActiveSpan = t;
                        }),
                        t.on("spanEnd", (t) => {
                          e.lastActiveSpan = t;
                        }),
                        t.on("beforeSendFeedback", (t, n) => {
                          let r = e.getSessionId();
                          n &&
                            n.includeReplay &&
                            e.isEnabled() &&
                            r &&
                            t.contexts &&
                            t.contexts.feedback &&
                            (t.contexts.feedback.replay_id = r);
                        }));
                  })(this),
                  (this._hasInitializedCoreListeners = !0));
            } catch (e) {
              this._handleException(e);
            }
            this._performanceCleanupCallback = (function (e) {
              function t(t) {
                e.performanceEntries.includes(t) ||
                  e.performanceEntries.push(t);
              }
              function n({ entries: e }) {
                e.forEach(t);
              }
              let r = [];
              return (
                ["navigation", "paint", "resource"].forEach((e) => {
                  r.push(r9(e, n));
                }),
                r.push(
                  r4(ow(oN, e)),
                  r5(ow(oC, e)),
                  r6(ow(oI, e)),
                  r8(ow(oA, e))
                ),
                () => {
                  r.forEach((e) => e());
                }
              );
            })(this);
          }
          _removeListeners() {
            try {
              w.document.removeEventListener(
                "visibilitychange",
                this._handleVisibilityChange
              ),
                w.removeEventListener("blur", this._handleWindowBlur),
                w.removeEventListener("focus", this._handleWindowFocus),
                w.removeEventListener("keydown", this._handleKeyboardEvent),
                this.clickDetector && this.clickDetector.removeListeners(),
                this._performanceCleanupCallback &&
                  this._performanceCleanupCallback();
            } catch (e) {
              this._handleException(e);
            }
          }
          __init() {
            this._handleVisibilityChange = () => {
              "visible" === w.document.visibilityState
                ? this._doChangeToForegroundTasks()
                : this._doChangeToBackgroundTasks();
            };
          }
          __init2() {
            this._handleWindowBlur = () => {
              let e = ov({ category: "ui.blur" });
              this._doChangeToBackgroundTasks(e);
            };
          }
          __init3() {
            this._handleWindowFocus = () => {
              let e = ov({ category: "ui.focus" });
              this._doChangeToForegroundTasks(e);
            };
          }
          __init4() {
            this._handleKeyboardEvent = (e) => {
              !(function (e, t) {
                if (!e.isEnabled()) return;
                e.updateUserActivity();
                let n = (function (e) {
                  var t;
                  let {
                    metaKey: n,
                    shiftKey: r,
                    ctrlKey: i,
                    altKey: s,
                    key: o,
                    target: a,
                  } = e;
                  if (
                    !a ||
                    "INPUT" === (t = a).tagName ||
                    "TEXTAREA" === t.tagName ||
                    t.isContentEditable ||
                    !o
                  )
                    return null;
                  let l = n || i || s,
                    c = 1 === o.length;
                  if (!l && c) return null;
                  let u = q(a, { maxStringLength: 200 }) || "<unknown>",
                    d = oT(a, u);
                  return ov({
                    category: "ui.keyDown",
                    message: u,
                    data: {
                      ...d.data,
                      metaKey: n,
                      shiftKey: r,
                      ctrlKey: i,
                      altKey: s,
                      key: o,
                    },
                  });
                })(t);
                n && oh(e, n);
              })(this, e);
            };
          }
          _doChangeToBackgroundTasks(e) {
            !this.session ||
              oV(this.session, {
                maxReplayDuration: this._options.maxReplayDuration,
                sessionIdleExpire: this.timeouts.sessionIdleExpire,
              }) ||
              (e && this._createCustomBreadcrumb(e), this.conditionalFlush());
          }
          _doChangeToForegroundTasks(e) {
            if (this.session) {
              if (!this.checkAndHandleExpiredSession()) {
                oD(
                  "[Replay] Document has become active, but session has expired"
                );
                return;
              }
              e && this._createCustomBreadcrumb(e);
            }
          }
          _updateUserActivity(e = Date.now()) {
            this._lastActivity = e;
          }
          _updateSessionActivity(e = Date.now()) {
            this.session &&
              ((this.session.lastActivity = e), this._maybeSaveSession());
          }
          _createCustomBreadcrumb(e) {
            this.addUpdate(() => {
              this.throttledAddEvent({
                type: sF.Custom,
                timestamp: e.timestamp || 0,
                data: { tag: "breadcrumb", payload: e },
              });
            });
          }
          _addPerformanceEntries() {
            let e = this.performanceEntries
              .map(oO)
              .filter(Boolean)
              .concat(this.replayPerformanceEntries);
            return (
              (this.performanceEntries = []),
              (this.replayPerformanceEntries = []),
              Promise.all(o2(this, e))
            );
          }
          _clearContext() {
            this._context.errorIds.clear(),
              this._context.traceIds.clear(),
              (this._context.urls = []);
          }
          _updateInitialTimestampFromEventBuffer() {
            let { session: e, eventBuffer: t } = this;
            if (!e || !t || this._requiresManualStart || e.segmentId) return;
            let n = t.getEarliestTimestamp();
            n &&
              n < this._context.initialTimestamp &&
              (this._context.initialTimestamp = n);
          }
          _popEventContext() {
            let e = {
              initialTimestamp: this._context.initialTimestamp,
              initialUrl: this._context.initialUrl,
              errorIds: Array.from(this._context.errorIds),
              traceIds: Array.from(this._context.traceIds),
              urls: this._context.urls,
            };
            return this._clearContext(), e;
          }
          async _runFlush() {
            let e = this.getSessionId();
            if (!this.session || !this.eventBuffer || !e) {
              oP &&
                Q.error("[Replay] No session or eventBuffer found to flush.");
              return;
            }
            if (
              (await this._addPerformanceEntries(),
              this.eventBuffer &&
                this.eventBuffer.hasEvents &&
                (await ap(this), this.eventBuffer && e === this.getSessionId()))
            )
              try {
                this._updateInitialTimestampFromEventBuffer();
                let t = Date.now();
                if (
                  t - this._context.initialTimestamp >
                  this._options.maxReplayDuration + 3e4
                )
                  throw Error("Session is too long, not sending replay");
                let n = this._popEventContext(),
                  r = this.session.segmentId++;
                this._maybeSaveSession();
                let i = await this.eventBuffer.finish();
                await ay({
                  replayId: e,
                  recordingData: i,
                  segmentId: r,
                  eventContext: n,
                  session: this.session,
                  options: this.getOptions(),
                  timestamp: t,
                });
              } catch (t) {
                this._handleException(t), this.stop({ reason: "sendReplay" });
                let e = ek();
                e && e.recordDroppedEvent("send_error", "replay");
              }
          }
          __init5() {
            this._flush = async ({ force: e = !1 } = {}) => {
              if (!this._isEnabled && !e) return;
              if (!this.checkAndHandleExpiredSession()) {
                oP &&
                  Q.error(
                    "[Replay] Attempting to finish replay event after session expired."
                  );
                return;
              }
              if (!this.session) return;
              let t = this.session.started,
                n = Date.now() - t;
              this._debouncedFlush.cancel();
              let r = n < this._options.minReplayDuration,
                i = n > this._options.maxReplayDuration + 5e3;
              if (r || i) {
                oD(
                  `[Replay] Session duration (${Math.floor(n / 1e3)}s) is too ${
                    r ? "short" : "long"
                  }, not sending replay.`,
                  this._options._experiments.traceInternals
                ),
                  r && this._debouncedFlush();
                return;
              }
              let s = this.eventBuffer;
              if (
                (s &&
                  0 === this.session.segmentId &&
                  !s.hasCheckout &&
                  oD(
                    "[Replay] Flushing initial segment without checkout.",
                    this._options._experiments.traceInternals
                  ),
                !this._flushLock)
              ) {
                (this._flushLock = this._runFlush()),
                  await this._flushLock,
                  (this._flushLock = void 0);
                return;
              }
              try {
                await this._flushLock;
              } catch (e) {
                oP && Q.error(e);
              } finally {
                this._debouncedFlush();
              }
            };
          }
          _maybeSaveSession() {
            this.session && this._options.stickySession && oW(this.session);
          }
          __init6() {
            this._onMutationHandler = (e) => {
              let t = e.length,
                n = this._options.mutationLimit,
                r = this._options.mutationBreadcrumbLimit,
                i = n && t > n;
              if (t > r || i) {
                let e = ov({
                  category: "replay.mutations",
                  data: { count: t, limit: i },
                });
                this._createCustomBreadcrumb(e);
              }
              return (
                !i ||
                (this.stop({
                  reason: "mutationLimit",
                  forceFlush: "session" === this.recordingMode,
                }),
                !1)
              );
            };
          }
        }
        function ab(e, t) {
          return [...e, ...t].join(",");
        }
        let aT =
            'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
          aS = ["content-length", "content-type", "accept"],
          aw = !1;
        class aO {
          static __initStatic() {
            this.id = "Replay";
          }
          constructor({
            flushMinDelay: e = 5e3,
            flushMaxDelay: t = 5500,
            minReplayDuration: n = 4999,
            maxReplayDuration: r = 36e5,
            stickySession: i = !0,
            useCompression: s = !0,
            workerUrl: o,
            _experiments: a = {},
            maskAllText: l = !0,
            maskAllInputs: c = !0,
            blockAllMedia: u = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: h = 1e4,
            slowClickTimeout: p = 7e3,
            slowClickIgnoreSelectors: f = [],
            networkDetailAllowUrls: m = [],
            networkDetailDenyUrls: _ = [],
            networkCaptureBodies: g = !0,
            networkRequestHeaders: y = [],
            networkResponseHeaders: v = [],
            mask: E = [],
            maskAttributes: b = ["title", "placeholder"],
            unmask: T = [],
            block: S = [],
            unblock: w = [],
            ignore: O = [],
            maskFn: R,
            beforeAddRecordingEvent: N,
            beforeErrorSampling: C,
          } = {}) {
            this.name = aO.id;
            let I = (function ({
              mask: e,
              unmask: t,
              block: n,
              unblock: r,
              ignore: i,
            }) {
              return {
                maskTextSelector: ab(e, [".sentry-mask", "[data-sentry-mask]"]),
                unmaskTextSelector: ab(t, []),
                blockSelector: ab(n, [
                  ".sentry-block",
                  "[data-sentry-block]",
                  'base[href="/"]',
                ]),
                unblockSelector: ab(r, []),
                ignoreSelector: ab(i, [
                  ".sentry-ignore",
                  "[data-sentry-ignore]",
                  'input[type="file"]',
                ]),
              };
            })({ mask: E, unmask: T, block: S, unblock: w, ignore: O });
            if (
              ((this._recordingOptions = {
                maskAllInputs: c,
                maskAllText: l,
                maskInputOptions: { password: !0 },
                maskTextFn: R,
                maskInputFn: R,
                maskAttributeFn: (e, t, n) =>
                  (function ({
                    el: e,
                    key: t,
                    maskAttributes: n,
                    maskAllText: r,
                    privacyOptions: i,
                    value: s,
                  }) {
                    return !r ||
                      (i.unmaskTextSelector && e.matches(i.unmaskTextSelector))
                      ? s
                      : n.includes(t) ||
                        ("value" === t &&
                          "INPUT" === e.tagName &&
                          ["submit", "button"].includes(
                            e.getAttribute("type") || ""
                          ))
                      ? s.replace(/[\S]/g, "*")
                      : s;
                  })({
                    maskAttributes: b,
                    maskAllText: l,
                    privacyOptions: I,
                    key: e,
                    value: t,
                    el: n,
                  }),
                ...I,
                slimDOMOptions: "all",
                inlineStylesheet: !0,
                inlineImages: !1,
                collectFonts: !0,
                errorHandler: (e) => {
                  try {
                    e.__rrweb__ = !0;
                  } catch (e) {}
                },
              }),
              (this._initialOptions = {
                flushMinDelay: e,
                flushMaxDelay: t,
                minReplayDuration: Math.min(n, 15e3),
                maxReplayDuration: Math.min(r, 36e5),
                stickySession: i,
                useCompression: s,
                workerUrl: o,
                blockAllMedia: u,
                maskAllInputs: c,
                maskAllText: l,
                mutationBreadcrumbLimit: d,
                mutationLimit: h,
                slowClickTimeout: p,
                slowClickIgnoreSelectors: f,
                networkDetailAllowUrls: m,
                networkDetailDenyUrls: _,
                networkCaptureBodies: g,
                networkRequestHeaders: aR(y),
                networkResponseHeaders: aR(v),
                beforeAddRecordingEvent: N,
                beforeErrorSampling: C,
                _experiments: a,
              }),
              this._initialOptions.blockAllMedia &&
                (this._recordingOptions.blockSelector = this._recordingOptions
                  .blockSelector
                  ? `${this._recordingOptions.blockSelector},${aT}`
                  : aT),
              this._isInitialized && iz())
            )
              throw Error(
                "Multiple Sentry Session Replay instances are not supported"
              );
            this._isInitialized = !0;
          }
          get _isInitialized() {
            return aw;
          }
          set _isInitialized(e) {
            aw = e;
          }
          setupOnce() {
            iz() && (this._setup(), setTimeout(() => this._initialize()));
          }
          start() {
            this._replay && this._replay.start();
          }
          startBuffering() {
            this._replay && this._replay.startBuffering();
          }
          stop() {
            return this._replay
              ? this._replay.stop({
                  forceFlush: "session" === this._replay.recordingMode,
                })
              : Promise.resolve();
          }
          flush(e) {
            return this._replay && this._replay.isEnabled()
              ? this._replay.sendBufferedReplayOrFlush(e)
              : Promise.resolve();
          }
          getReplayId() {
            if (this._replay && this._replay.isEnabled())
              return this._replay.getSessionId();
          }
          _initialize() {
            this._replay &&
              (this._maybeLoadFromReplayCanvasIntegration(),
              this._replay.initializeSampling());
          }
          _setup() {
            let e = (function (e) {
              let t = ek(),
                n = t && t.getOptions(),
                r = { sessionSampleRate: 0, errorSampleRate: 0, ...es(e) };
              if (!n)
                return (
                  V(() => {
                    console.warn("SDK client is not available.");
                  }),
                  r
                );
              let i = t2(n.replaysSessionSampleRate),
                s = t2(n.replaysOnErrorSampleRate);
              return (
                null == i &&
                  null == s &&
                  V(() => {
                    console.warn(
                      "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."
                    );
                  }),
                null != i && (r.sessionSampleRate = i),
                null != s && (r.errorSampleRate = s),
                r
              );
            })(this._initialOptions);
            this._replay = new aE({
              options: e,
              recordingOptions: this._recordingOptions,
            });
          }
          _maybeLoadFromReplayCanvasIntegration() {
            try {
              let e = ek().getIntegrationByName("ReplayCanvas");
              if (!e) return;
              this._replay._canvas = e.getOptions();
            } catch (e) {}
          }
        }
        function aR(e) {
          return [...aS, ...e.map((e) => e.toLowerCase())];
        }
        aO.__initStatic();
        var aN = window;
        (aN.__sentryRewritesTunnelPath__ = void 0),
          (aN.SENTRY_RELEASE = { id: "dfdf429a-8d4b-4a84-b4b8-7a51e8b97ac9" }),
          (aN.__sentryBasePath = void 0),
          (aN.__rewriteFramesAssetPrefixPath__ = ""),
          (function (e) {
            var t, n;
            let r = {
              environment:
                (function (e) {
                  let t = e ? ri.env.NEXT_PUBLIC_VERCEL_ENV : ri.env.VERCEL_ENV;
                  return t ? `vercel-${t}` : void 0;
                })(!0) || "production",
              defaultIntegrations: (function (e) {
                let t = n3(e);
                ("undefined" == typeof __SENTRY_TRACING__ ||
                  __SENTRY_TRACING__) &&
                  tS(e) &&
                  t.push(
                    (function (e = {}) {
                      let t = iA({
                          ...e,
                          instrumentNavigation: !1,
                          instrumentPageLoad: !1,
                        }),
                        {
                          instrumentPageLoad: n = !0,
                          instrumentNavigation: r = !0,
                        } = e;
                      return {
                        ...t,
                        afterAllSetup(e) {
                          var i;
                          r &&
                            ((i = e),
                            w.document.getElementById("__NEXT_DATA__")
                              ? iM.events.on("routeChangeStart", (e) => {
                                  let t, n;
                                  let r = e.split(/[\?#]/, 1)[0],
                                    s = (function (e) {
                                      let t = (w.__BUILD_MANIFEST || {})
                                        .sortedPages;
                                      if (t)
                                        return t.find((t) => {
                                          let n = (function (e) {
                                            let t = e.split("/"),
                                              n = "";
                                            t[t.length - 1].match(
                                              /^\[\[\.\.\..+\]\]$/
                                            ) && (t.pop(), (n = "(?:/(.+?))?"));
                                            let r = t
                                              .map((e) =>
                                                e
                                                  .replace(
                                                    /^\[\.\.\..+\]$/,
                                                    "(.+?)"
                                                  )
                                                  .replace(
                                                    /^\[.*\]$/,
                                                    "([^/]+?)"
                                                  )
                                              )
                                              .join("/");
                                            return RegExp(`^${r}${n}(?:/)?$`);
                                          })(t);
                                          return e.match(n);
                                        });
                                    })(r);
                                  s
                                    ? ((t = s), (n = "route"))
                                    : ((t = r), (n = "url")),
                                    iP(i, {
                                      name: t,
                                      attributes: {
                                        [ez]: "navigation",
                                        [eG]: "auto.navigation.nextjs.pages_router_instrumentation",
                                        [eH]: n,
                                      },
                                    });
                                })
                              : nm((e) => {
                                  if (
                                    void 0 !== e.endTimestamp ||
                                    "GET" !== e.fetchData.method
                                  )
                                    return;
                                  let t = (function (e) {
                                    if (
                                      !e[0] ||
                                      "object" != typeof e[0] ||
                                      void 0 === e[0].searchParams ||
                                      !e[1] ||
                                      "object" != typeof e[1] ||
                                      !("headers" in e[1])
                                    )
                                      return null;
                                    try {
                                      let t = e[0],
                                        n = e[1].headers;
                                      if (
                                        "1" !== n.RSC ||
                                        "1" === n["Next-Router-Prefetch"]
                                      )
                                        return null;
                                      return { targetPathname: t.pathname };
                                    } catch (e) {
                                      return null;
                                    }
                                  })(e.args);
                                  null !== t &&
                                    iP(i, {
                                      name: t.targetPathname,
                                      attributes: {
                                        [ez]: "navigation",
                                        [eG]: "auto.navigation.nextjs.app_router_instrumentation",
                                        [eH]: "url",
                                      },
                                    });
                                })),
                            t.afterAllSetup(e),
                            n &&
                              (w.document.getElementById("__NEXT_DATA__")
                                ? (function (e) {
                                    let {
                                      route: t,
                                      params: n,
                                      sentryTrace: r,
                                      baggage: i,
                                    } = (function () {
                                      let e;
                                      let t =
                                        w.document.getElementById(
                                          "__NEXT_DATA__"
                                        );
                                      if (t && t.innerHTML)
                                        try {
                                          e = JSON.parse(t.innerHTML);
                                        } catch (e) {
                                          iL &&
                                            Q.warn(
                                              "Could not extract __NEXT_DATA__"
                                            );
                                        }
                                      if (!e) return {};
                                      let n = {},
                                        { page: r, query: i, props: s } = e;
                                      return (
                                        (n.route = r),
                                        (n.params = i),
                                        s &&
                                          s.pageProps &&
                                          ((n.sentryTrace =
                                            s.pageProps._sentryTraceData),
                                          (n.baggage =
                                            s.pageProps._sentryBaggage)),
                                        n
                                      );
                                    })();
                                    ik(
                                      e,
                                      {
                                        name: t || w.location.pathname,
                                        startTime: e_ ? e_ / 1e3 : void 0,
                                        attributes: {
                                          [ez]: "pageload",
                                          [eG]: "auto.pageload.nextjs.pages_router_instrumentation",
                                          [eH]: t ? "route" : "url",
                                          ...(n &&
                                            e.getOptions().sendDefaultPii && {
                                              ...n,
                                            }),
                                        },
                                      },
                                      { sentryTrace: r, baggage: i }
                                    );
                                  })(e)
                                : ik(e, {
                                    name: w.location.pathname,
                                    startTime: e_ ? e_ / 1e3 : void 0,
                                    attributes: {
                                      [ez]: "pageload",
                                      [eG]: "auto.pageload.nextjs.app_router_instrumentation",
                                      [eH]: "url",
                                    },
                                  }));
                        },
                      };
                    })()
                  );
                let n = w.__rewriteFramesAssetPrefixPath__ || "";
                return t.push(iq({ assetPrefixPath: n })), t;
              })(e),
              ...e,
            };
            (function (e) {
              let t = w.__sentryRewritesTunnelPath__;
              if (t && e.dsn) {
                let n = tV(e.dsn);
                if (!n) return;
                let r = n.host.match(
                  /^o(\d+)\.ingest(?:\.([a-z]{2}))?\.sentry\.io$/
                );
                if (r) {
                  let i = r[1],
                    s = r[2],
                    o = `${t}?o=${i}&p=${n.projectId}`;
                  s && (o += `&r=${s}`),
                    (e.tunnel = o),
                    iL && Q.info(`Tunneling events to "${o}"`);
                } else
                  iL &&
                    Q.warn(
                      "Provided DSN is not a Sentry SaaS DSN. Will not tunnel events."
                    );
              }
            })(r),
              S(r, "nextjs", ["nextjs", "react"]),
              (function (e) {
                let t = { ...e };
                S(t, "react"),
                  (function (e = {}) {
                    var t;
                    let n = (function (e = {}) {
                      return {
                        defaultIntegrations: n3(),
                        release:
                          "string" == typeof __SENTRY_RELEASE__
                            ? __SENTRY_RELEASE__
                            : w.SENTRY_RELEASE && w.SENTRY_RELEASE.id
                            ? w.SENTRY_RELEASE.id
                            : void 0,
                        autoSessionTracking: !0,
                        sendClientReports: !0,
                        ...e,
                      };
                    })(e);
                    if (
                      (function () {
                        let e = w.chrome ? "chrome" : "browser",
                          t = w[e],
                          n = t && t.runtime && t.runtime.id,
                          r = (w.location && w.location.href) || "",
                          i =
                            !!n &&
                            w === w.top &&
                            [
                              "chrome-extension:",
                              "moz-extension:",
                              "ms-browser-extension:",
                            ].some((e) => r.startsWith(`${e}//`));
                        return !!n && !i;
                      })()
                    ) {
                      V(() => {
                        console.error(
                          "[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/"
                        );
                      });
                      return;
                    }
                    t8 &&
                      !tM() &&
                      Q.warn(
                        "No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."
                      ),
                      (function (e, t) {
                        !0 === t.debug &&
                          (eq
                            ? Q.enable()
                            : V(() => {
                                console.warn(
                                  "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."
                                );
                              })),
                          eC().update(t.initialScope);
                        let n = new e(t);
                        eC().setClient(n), n.init();
                      })(no, {
                        ...n,
                        stackParser: Array.isArray((t = n.stackParser || nV))
                          ? ex(...t)
                          : t,
                        integrations: (function (e) {
                          let t = e.defaultIntegrations || [],
                            n = e.integrations;
                          t.forEach((e) => {
                            e.isDefaultInstance = !0;
                          });
                          let r = (function (e) {
                              let t = {};
                              return (
                                e.forEach((e) => {
                                  let { name: n } = e,
                                    r = t[n];
                                  (r &&
                                    !r.isDefaultInstance &&
                                    e.isDefaultInstance) ||
                                    (t[n] = e);
                                }),
                                Object.keys(t).map((e) => t[e])
                              );
                            })(
                              Array.isArray(n)
                                ? [...t, ...n]
                                : "function" == typeof n
                                ? eh(n(t))
                                : t
                            ),
                            i = (function (e, t) {
                              for (let n = 0; n < e.length; n++)
                                if (!0 === t(e[n])) return n;
                              return -1;
                            })(r, (e) => "Debug" === e.name);
                          if (-1 !== i) {
                            let [e] = r.splice(i, 1);
                            r.push(e);
                          }
                          return r;
                        })(n),
                        transport: n.transport || n2,
                      }),
                      n.autoSessionTracking &&
                        (function () {
                          if (void 0 === w.document) {
                            t8 &&
                              Q.warn(
                                "Session tracking in non-browser environment with @sentry/browser is not supported."
                              );
                            return;
                          }
                          tv({ ignoreDuration: !0 }),
                            tT(),
                            tH(({ from: e, to: t }) => {
                              void 0 !== e &&
                                e !== t &&
                                (tv({ ignoreDuration: !0 }), tT());
                            });
                        })();
                  })(t);
              })(r),
              (t = "runtime"),
              (n = "browser"),
              eI().setTag(t, n);
            let i = (e) =>
              "transaction" === e.type && "/404" === e.transaction ? null : e;
            (i.id = "NextClient404Filter"), ty(i);
          })({
            dsn: "https://4cc707ab12ea4779b417479c0550a5cb@o22381.ingest.sentry.io/4505164808585216",
            ignoreErrors: [
              /Extension context invalidated./,
              /querySelectorAll/,
              "Object Not Found Matching Id",
            ],
            tracesSampleRate: 0,
            debug: !1,
            sampleRate: 0.2,
            release: "1376ca630589cae525410f109e4f8b0eb1e9a8c4",
            replaysOnErrorSampleRate: 1,
            replaysSessionSampleRate: 0,
            integrations: [new aO({ maskAllText: !0, blockAllMedia: !0 })],
          });
      },
      75774: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            CustomApp: function () {
              return w;
            },
            default: function () {
              return R;
            },
            reportWebVitals: function () {
              return O;
            },
          });
        var r,
          i,
          s,
          o = n(85893),
          a = {
            background: {
              base: "#283ea3",
              highlight: "#233790",
              press: "#152054",
              elevated: {
                base: "#233790",
                highlight: "#233790",
                press: "#152054",
              },
              tinted: {
                base: "#283ea3",
                highlight: "#283ea3",
                press: "#283ea3",
              },
            },
          },
          l = n(67294),
          c = (0, n(85444).vJ)(
            s ||
              ((r = [
                "\n  /*\n    Reset the box-sizing\n\n    Heads up! This reset may cause conflicts with some third-party widgets.\n    For recommendations on resolving such conflicts, see\n    http://getbootstrap.com/getting-started/#third-box-sizing\n  */\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Body reset */\n\n  body {\n    margin: 0;\n  }\n\n  body, input, textarea, button {\n    font-family: var(--encore-body-font-stack);\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n",
              ]),
              i || (i = r.slice(0)),
              (s = Object.freeze(
                Object.defineProperties(r, { raw: { value: Object.freeze(i) } })
              )))
          ),
          u = function () {
            return l.createElement(l.Fragment, null, l.createElement(c, null));
          };
        n(66524), n(15575), n(8721), n(35606), n(88339);
        var d = n(99374),
          h = n(9008),
          p = n.n(h),
          f = n(11163),
          m = n.n(f);
        let _ = (0, l.createContext)(void 0);
        class g extends l.Component {
          static getDerivedStateFromError(e) {
            return { error: e };
          }
          render() {
            return (0, o.jsx)(_.Provider, {
              value: this.state.error,
              children: this.props.children,
            });
          }
          constructor(...e) {
            super(...e), (this.state = { error: void 0 });
          }
        }
        n(23423);
        var y = n(37555),
          v = n(35775);
        n(88199);
        var E = n(1504),
          b = n(28810);
        let T = (e) => {
            let t = parseInt(e.slice(1, 3), 16),
              n = parseInt(e.slice(3, 5), 16),
              r = parseInt(e.slice(5, 7), 16);
            return `${t}, ${n}, ${r}`;
          },
          S = function (e) {
            let {
              desiredSize: t = Number.MAX_SAFE_INTEGER,
              desiredHeight: n = t,
              desiredWidth: r = t,
              desiredLabel: i = "",
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            if (!e || e.length <= 0) return;
            if (i) {
              let [t] = e.filter((e) => e.label === i);
              if (t) return t;
            }
            if (1 === e.length) return e[0];
            let [s] = e
              .map((e) => {
                let t = [(e.width || 0) * (e.height || 0), n * r];
                return { ratio: Math.max(...t) / Math.min(...t), image: e };
              })
              .sort((e, t) => e.ratio - t.ratio);
            return s.image;
          },
          w = (e) => {
            let { Component: t, pageProps: n } = e,
              r = n.state ? n.state.data.backgroundColor : a.background.base,
              i = n.state
                ? S(b.m(n?.state?.data?.entity?.coverArt?.sources ?? []), {
                    desiredSize: v.dN.largeScreen.small,
                  })?.url
                : "";
            return (
              (0, l.useEffect)(() => {
                let e = (0, E.b)();
                e && "discord.com" !== e && (e = "other referrers"),
                  (0, y.sQ)({
                    metric_type: d.MetricTypes.COUNTER,
                    what: "embed_rendered_referrer",
                    tags: { referrer: e },
                    value: 1,
                  });
              }, []),
              (0, o.jsxs)(l.Fragment, {
                children: [
                  (0, o.jsxs)(p(), {
                    children: [
                      (0, o.jsx)("title", { children: "Spotify Embed" }),
                      (0, o.jsx)("link", {
                        rel: "preload",
                        href: i,
                        as: "image",
                      }),
                    ],
                  }),
                  (0, o.jsx)(u, {}),
                  (0, o.jsx)(g, {
                    children: (0, o.jsx)("div", {
                      style: {
                        "--background-color": `${T(r)}`,
                        "--image-src": `url('${i}')`,
                      },
                      "data-testid": "main-page",
                      children: (0, o.jsx)(t, { ...n }),
                    }),
                  }),
                ],
              })
            );
          };
        function O(e) {
          (0, y.p1)(),
            (0, y.sQ)(
              d.BrowserMetrics.getWebVitalsMetric(e, {
                route: m().router?.route ?? "unknown",
              })
            );
        }
        var R = w;
      },
      23423: function () {
        !(function () {
          "use strict";
          try {
            if (
              window.hasOwnProperty("localStorage") &&
              null !== window.localStorage
            ) {
              let e = `swxTest_${Math.round(1e7 * Math.random())}`;
              window.localStorage.setItem(e, "test"),
                window.localStorage.removeItem(e);
            }
          } catch (t) {
            let e = {};
            Object.defineProperty(window, "localStorage", {
              setItem: (t, n) => ((e[t] = n), e[t]),
              getItem: (t) => (t in e ? e[t] : void 0),
              removeItem: (t) => {
                delete e[t];
              },
              clear: () => (e = {}),
            });
          }
        })();
      },
      37555: function (e, t, n) {
        "use strict";
        let r;
        n.d(t, {
          p1: function () {
            return o;
          },
          sQ: function () {
            return a;
          },
        });
        var i = n(99374),
          s = n(83454);
        function o() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "embed-standalone-prod";
          if (!r) {
            let { sendMetric: t } = (0, i.createSemanticMetrics)({
              key: e,
              dev:
                !"production".startsWith("prod") &&
                !(function () {
                  let e = s.env.DEBUG_SEMANTIC_METRICS;
                  return "1" === e || "2" === e;
                })(),
              reporter: (function () {
                let { DEBUG_SEMANTIC_METRICS: e } = s.env;
                return "1" === e
                  ? [new i.ConsoleReporter()]
                  : [
                      (0, i.createUniversalReporter)(),
                      ...("2" === e ? [new i.ConsoleReporter()] : []),
                    ];
              })(),
              component_id: "embed-standalone-prod",
            });
            r = t;
          }
        }
        async function a(e) {
          if (!r)
            throw Error(
              "Invalid call to sendMetric before initSemanticMetrics."
            );
          return (
            e.tags || (e.tags = {}),
            "slingshot" in e.tags ||
              (e.tags.slingshot =
                "1" === s.env.IS_SLINGSHOT ? "true" : "false"),
            r(e)
          );
        }
      },
      35775: function (e, t, n) {
        "use strict";
        n.d(t, {
          Ki: function () {
            return d;
          },
          Zo: function () {
            return p;
          },
          dN: function () {
            return f;
          },
          eL: function () {
            return a;
          },
          p4: function () {
            return h;
          },
          ue: function () {
            return c;
          },
        });
        var r = n(37542),
          i = n(85444);
        let s = (0, r.iv)`
  color: ${"rgb(255, 255, 255)"};
`;
        (0, r.iv)`
  ${s};
  font-weight: 450;
`;
        let o = `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
        (0, r.iv)`
  ${o}
`;
        let a = (0, i.iv)`
${o}
`,
          l = (0, r.iv)`
  h1,
  h2 {
    margin: 0;
    font-size: initial;
    font-weight: normal;
  }

  .no-focus-outline {
    *:focus {
      outline: 0;
    }
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    &:focus-visible {
      outline: #3673d4 auto 5px !important;
      border-bottom: none !important;
    }

    &::after {
      border-bottom: none !important;
    }
  }

  a {
    ${s};
    text-decoration: none;

    &:focus-visible {
      text-decoration: underline !important;
    }
  }

  button {
    user-select: none;
  }
`,
          c = (0, r.iv)`
  body {
    ${s};
  }

  ${l};
`;
        (0, r.iv)`
  body {
    ${s};
  }

  ${l};
`;
        let u = (e) => {
            let { width: t, breakPointType: n = "max-width" } = e;
            return function () {
              for (var e = arguments.length, r = Array(e), s = 0; s < e; s++)
                r[s] = arguments[s];
              return (0, i.iv)`
    @media screen and (${n}: ${t}px) {
      ${(0, i.iv)(...r)}
    }
  `;
            };
          },
          d = {
            small: u({ width: 375 }),
            medium: u({ width: 479 }),
            large: u({ width: 589 }),
            xLarge: u({ width: 1024, breakPointType: "min-width" }),
          },
          h = {
            compactLegacy: 80,
            landscape: 152,
            landscapeLegacy: 232,
            large: 352,
          },
          p = { small: 360, medium: 510 };
        h.landscapeLegacy, h.large;
        let f = {
          landscape: { small: 90, large: 120 },
          landscapeLegacy: { small: 152, medium: 160, large: 200 },
          portrait: 176,
          largeScreen: { small: 216, large: 272 },
        };
      },
      1504: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return i;
          },
        });
        let r = (e) => (e ? new URL(e).hostname : ""),
          i = () => {
            let e = document.referrer;
            if (!e || e.includes("open.spotify.com")) {
              let e = new URL(window.location.href).searchParams.get(
                "referrer"
              );
              if (e) return r(e);
            }
            return r(e);
          };
      },
      28810: function (e, t, n) {
        "use strict";
        function r(e) {
          return [...e].sort((e, t) => (e.width || 0) - (t.width || 0));
        }
        function i(e) {
          return [...e].sort((e, t) => (t.width || 0) - (e.width || 0));
        }
        n.d(t, {
          l: function () {
            return i;
          },
          m: function () {
            return r;
          },
        });
      },
      66524: function () {},
      15575: function () {},
      8721: function () {},
      35606: function () {},
      88339: function () {},
      88199: function () {},
      77663: function (e) {
        !(function () {
          var t = {
              229: function (e) {
                var t,
                  n,
                  r,
                  i = (e.exports = {});
                function s() {
                  throw Error("setTimeout has not been defined");
                }
                function o() {
                  throw Error("clearTimeout has not been defined");
                }
                function a(e) {
                  if (t === setTimeout) return setTimeout(e, 0);
                  if ((t === s || !t) && setTimeout)
                    return (t = setTimeout), setTimeout(e, 0);
                  try {
                    return t(e, 0);
                  } catch (n) {
                    try {
                      return t.call(null, e, 0);
                    } catch (n) {
                      return t.call(this, e, 0);
                    }
                  }
                }
                !(function () {
                  try {
                    t = "function" == typeof setTimeout ? setTimeout : s;
                  } catch (e) {
                    t = s;
                  }
                  try {
                    n = "function" == typeof clearTimeout ? clearTimeout : o;
                  } catch (e) {
                    n = o;
                  }
                })();
                var l = [],
                  c = !1,
                  u = -1;
                function d() {
                  c &&
                    r &&
                    ((c = !1),
                    r.length ? (l = r.concat(l)) : (u = -1),
                    l.length && h());
                }
                function h() {
                  if (!c) {
                    var e = a(d);
                    c = !0;
                    for (var t = l.length; t; ) {
                      for (r = l, l = []; ++u < t; ) r && r[u].run();
                      (u = -1), (t = l.length);
                    }
                    (r = null),
                      (c = !1),
                      (function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === o || !n) && clearTimeout)
                          return (n = clearTimeout), clearTimeout(e);
                        try {
                          n(e);
                        } catch (t) {
                          try {
                            return n.call(null, e);
                          } catch (t) {
                            return n.call(this, e);
                          }
                        }
                      })(e);
                  }
                }
                function p(e, t) {
                  (this.fun = e), (this.array = t);
                }
                function f() {}
                (i.nextTick = function (e) {
                  var t = Array(arguments.length - 1);
                  if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                  l.push(new p(e, t)), 1 !== l.length || c || a(h);
                }),
                  (p.prototype.run = function () {
                    this.fun.apply(null, this.array);
                  }),
                  (i.title = "browser"),
                  (i.browser = !0),
                  (i.env = {}),
                  (i.argv = []),
                  (i.version = ""),
                  (i.versions = {}),
                  (i.on = f),
                  (i.addListener = f),
                  (i.once = f),
                  (i.off = f),
                  (i.removeListener = f),
                  (i.removeAllListeners = f),
                  (i.emit = f),
                  (i.prependListener = f),
                  (i.prependOnceListener = f),
                  (i.listeners = function (e) {
                    return [];
                  }),
                  (i.binding = function (e) {
                    throw Error("process.binding is not supported");
                  }),
                  (i.cwd = function () {
                    return "/";
                  }),
                  (i.chdir = function (e) {
                    throw Error("process.chdir is not supported");
                  }),
                  (i.umask = function () {
                    return 0;
                  });
              },
            },
            n = {};
          function r(e) {
            var i = n[e];
            if (void 0 !== i) return i.exports;
            var s = (n[e] = { exports: {} }),
              o = !0;
            try {
              t[e](s, s.exports, r), (o = !1);
            } finally {
              o && delete n[e];
            }
            return s.exports;
          }
          r.ab = "//";
          var i = r(229);
          e.exports = i;
        })();
      },
      9008: function (e, t, n) {
        e.exports = n(7828);
      },
      11163: function (e, t, n) {
        e.exports = n(9090);
      },
      69921: function (e, t) {
        "use strict";
        var n,
          r = Symbol.for("react.element"),
          i = Symbol.for("react.portal"),
          s = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          u = Symbol.for("react.server_context"),
          d = Symbol.for("react.forward_ref"),
          h = Symbol.for("react.suspense"),
          p = Symbol.for("react.suspense_list"),
          f = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          _ = Symbol.for("react.offscreen");
        (n = Symbol.for("react.module.reference")),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === s ||
              e === a ||
              e === o ||
              e === h ||
              e === p ||
              e === _ ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === f ||
                  e.$$typeof === l ||
                  e.$$typeof === c ||
                  e.$$typeof === d ||
                  e.$$typeof === n ||
                  void 0 !== e.getModuleId))
            );
          }),
          (t.typeOf = function (e) {
            if ("object" == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case r:
                  switch ((e = e.type)) {
                    case s:
                    case a:
                    case o:
                    case h:
                    case p:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case u:
                        case c:
                        case d:
                        case m:
                        case f:
                        case l:
                          return e;
                        default:
                          return t;
                      }
                  }
                case i:
                  return t;
              }
            }
          });
      },
      59864: function (e, t, n) {
        "use strict";
        e.exports = n(69921);
      },
      96774: function (e) {
        e.exports = function (e, t, n, r) {
          var i = n ? n.call(r, e, t) : void 0;
          if (void 0 !== i) return !!i;
          if (e === t) return !0;
          if ("object" != typeof e || !e || "object" != typeof t || !t)
            return !1;
          var s = Object.keys(e),
            o = Object.keys(t);
          if (s.length !== o.length) return !1;
          for (
            var a = Object.prototype.hasOwnProperty.bind(t), l = 0;
            l < s.length;
            l++
          ) {
            var c = s[l];
            if (!a(c)) return !1;
            var u = e[c],
              d = t[c];
            if (
              !1 === (i = n ? n.call(r, u, d, c) : void 0) ||
              (void 0 === i && u !== d)
            )
              return !1;
          }
          return !0;
        };
      },
      85444: function (e, t, n) {
        "use strict";
        n.d(t, {
          vJ: function () {
            return eP;
          },
          iv: function () {
            return eE;
          },
          ZP: function () {
            return ex;
          },
          F4: function () {
            return eD;
          },
        });
        var r,
          i = n(59864),
          s = n(67294),
          o = n(96774),
          a = n.n(o),
          l = function (e) {
            function t(e, t, r) {
              var i = t.trim().split(f);
              t = i;
              var s = i.length,
                o = e.length;
              switch (o) {
                case 0:
                case 1:
                  var a = 0;
                  for (e = 0 === o ? "" : e[0] + " "; a < s; ++a)
                    t[a] = n(e, t[a], r).trim();
                  break;
                default:
                  var l = (a = 0);
                  for (t = []; a < s; ++a)
                    for (var c = 0; c < o; ++c)
                      t[l++] = n(e[c] + " ", i[a], r).trim();
              }
              return t;
            }
            function n(e, t, n) {
              var r = t.charCodeAt(0);
              switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
                case 38:
                  return t.replace(m, "$1" + e.trim());
                case 58:
                  return e.trim() + t.replace(m, "$1" + e.trim());
                default:
                  if (0 < 1 * n && 0 < t.indexOf("\f"))
                    return t.replace(
                      m,
                      (58 === e.charCodeAt(0) ? "" : "$1") + e.trim()
                    );
              }
              return e + t;
            }
            function r(e, t, n, s) {
              var o = e + ";",
                a = 2 * t + 3 * n + 4 * s;
              if (944 === a) {
                e = o.indexOf(":", 9) + 1;
                var l = o.substring(e, o.length - 1).trim();
                return (
                  (l = o.substring(0, e).trim() + l + ";"),
                  1 === I || (2 === I && i(l, 1)) ? "-webkit-" + l + l : l
                );
              }
              if (0 === I || (2 === I && !i(o, 1))) return o;
              switch (a) {
                case 1015:
                  return 97 === o.charCodeAt(10) ? "-webkit-" + o + o : o;
                case 951:
                  return 116 === o.charCodeAt(3) ? "-webkit-" + o + o : o;
                case 963:
                  return 110 === o.charCodeAt(5) ? "-webkit-" + o + o : o;
                case 1009:
                  if (100 !== o.charCodeAt(4)) break;
                case 969:
                case 942:
                  return "-webkit-" + o + o;
                case 978:
                  return "-webkit-" + o + "-moz-" + o + o;
                case 1019:
                case 983:
                  return "-webkit-" + o + "-moz-" + o + "-ms-" + o + o;
                case 883:
                  if (45 === o.charCodeAt(8)) return "-webkit-" + o + o;
                  if (0 < o.indexOf("image-set(", 11))
                    return o.replace(O, "$1-webkit-$2") + o;
                  break;
                case 932:
                  if (45 === o.charCodeAt(4))
                    switch (o.charCodeAt(5)) {
                      case 103:
                        return (
                          "-webkit-box-" +
                          o.replace("-grow", "") +
                          "-webkit-" +
                          o +
                          "-ms-" +
                          o.replace("grow", "positive") +
                          o
                        );
                      case 115:
                        return (
                          "-webkit-" +
                          o +
                          "-ms-" +
                          o.replace("shrink", "negative") +
                          o
                        );
                      case 98:
                        return (
                          "-webkit-" +
                          o +
                          "-ms-" +
                          o.replace("basis", "preferred-size") +
                          o
                        );
                    }
                  return "-webkit-" + o + "-ms-" + o + o;
                case 964:
                  return "-webkit-" + o + "-ms-flex-" + o + o;
                case 1023:
                  if (99 !== o.charCodeAt(8)) break;
                  return (
                    "-webkit-box-pack" +
                    (l = o
                      .substring(o.indexOf(":", 15))
                      .replace("flex-", "")
                      .replace("space-between", "justify")) +
                    "-webkit-" +
                    o +
                    "-ms-flex-pack" +
                    l +
                    o
                  );
                case 1005:
                  return h.test(o)
                    ? o.replace(d, ":-webkit-") + o.replace(d, ":-moz-") + o
                    : o;
                case 1e3:
                  switch (
                    ((t = (l = o.substring(13).trim()).indexOf("-") + 1),
                    l.charCodeAt(0) + l.charCodeAt(t))
                  ) {
                    case 226:
                      l = o.replace(v, "tb");
                      break;
                    case 232:
                      l = o.replace(v, "tb-rl");
                      break;
                    case 220:
                      l = o.replace(v, "lr");
                      break;
                    default:
                      return o;
                  }
                  return "-webkit-" + o + "-ms-" + l + o;
                case 1017:
                  if (-1 === o.indexOf("sticky", 9)) break;
                case 975:
                  switch (
                    ((t = (o = e).length - 10),
                    (a =
                      (l = (33 === o.charCodeAt(t) ? o.substring(0, t) : o)
                        .substring(e.indexOf(":", 7) + 1)
                        .trim()).charCodeAt(0) +
                      (0 | l.charCodeAt(7))))
                  ) {
                    case 203:
                      if (111 > l.charCodeAt(8)) break;
                    case 115:
                      o = o.replace(l, "-webkit-" + l) + ";" + o;
                      break;
                    case 207:
                    case 102:
                      o =
                        o.replace(
                          l,
                          "-webkit-" + (102 < a ? "inline-" : "") + "box"
                        ) +
                        ";" +
                        o.replace(l, "-webkit-" + l) +
                        ";" +
                        o.replace(l, "-ms-" + l + "box") +
                        ";" +
                        o;
                  }
                  return o + ";";
                case 938:
                  if (45 === o.charCodeAt(5))
                    switch (o.charCodeAt(6)) {
                      case 105:
                        return (
                          (l = o.replace("-items", "")),
                          "-webkit-" +
                            o +
                            "-webkit-box-" +
                            l +
                            "-ms-flex-" +
                            l +
                            o
                        );
                      case 115:
                        return (
                          "-webkit-" +
                          o +
                          "-ms-flex-item-" +
                          o.replace(T, "") +
                          o
                        );
                      default:
                        return (
                          "-webkit-" +
                          o +
                          "-ms-flex-line-pack" +
                          o.replace("align-content", "").replace(T, "") +
                          o
                        );
                    }
                  break;
                case 973:
                case 989:
                  if (45 !== o.charCodeAt(3) || 122 === o.charCodeAt(4)) break;
                case 931:
                case 953:
                  if (!0 === w.test(e))
                    return 115 ===
                      (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                      ? r(
                          e.replace("stretch", "fill-available"),
                          t,
                          n,
                          s
                        ).replace(":fill-available", ":stretch")
                      : o.replace(l, "-webkit-" + l) +
                          o.replace(l, "-moz-" + l.replace("fill-", "")) +
                          o;
                  break;
                case 962:
                  if (
                    ((o =
                      "-webkit-" +
                      o +
                      (102 === o.charCodeAt(5) ? "-ms-" + o : "") +
                      o),
                    211 === n + s &&
                      105 === o.charCodeAt(13) &&
                      0 < o.indexOf("transform", 10))
                  )
                    return (
                      o
                        .substring(0, o.indexOf(";", 27) + 1)
                        .replace(p, "$1-webkit-$2") + o
                    );
              }
              return o;
            }
            function i(e, t) {
              var n = e.indexOf(1 === t ? ":" : "{"),
                r = e.substring(0, 3 !== t ? n : 10);
              return (
                (n = e.substring(n + 1, e.length - 1)),
                D(2 !== t ? r : r.replace(S, "$1"), n, t)
              );
            }
            function s(e, t) {
              var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
              return n !== t + ";"
                ? n.replace(b, " or ($1)").substring(4)
                : "(" + t + ")";
            }
            function o(e, t, n, r, i, s, o, a, c, u) {
              for (var d, h = 0, p = t; h < P; ++h)
                switch ((d = k[h].call(l, e, p, n, r, i, s, o, a, c, u))) {
                  case void 0:
                  case !1:
                  case !0:
                  case null:
                    break;
                  default:
                    p = d;
                }
              if (p !== t) return p;
            }
            function a(e) {
              return (
                void 0 !== (e = e.prefix) &&
                  ((D = null),
                  e
                    ? "function" != typeof e
                      ? (I = 1)
                      : ((I = 2), (D = e))
                    : (I = 0)),
                a
              );
            }
            function l(e, n) {
              var a = e;
              if ((33 > a.charCodeAt(0) && (a = a.trim()), (a = [a]), 0 < P)) {
                var l = o(-1, n, a, a, N, R, 0, 0, 0, 0);
                void 0 !== l && "string" == typeof l && (n = l);
              }
              var d = (function e(n, a, l, d, h) {
                for (
                  var p,
                    f,
                    m,
                    v,
                    b,
                    T = 0,
                    S = 0,
                    w = 0,
                    O = 0,
                    k = 0,
                    D = 0,
                    L = (m = p = 0),
                    M = 0,
                    j = 0,
                    U = 0,
                    F = 0,
                    $ = l.length,
                    B = $ - 1,
                    q = "",
                    H = "",
                    W = "",
                    z = "";
                  M < $;

                ) {
                  if (
                    ((f = l.charCodeAt(M)),
                    M === B &&
                      0 !== S + O + w + T &&
                      (0 !== S && (f = 47 === S ? 10 : 47),
                      (O = w = T = 0),
                      $++,
                      B++),
                    0 === S + O + w + T)
                  ) {
                    if (
                      M === B &&
                      (0 < j && (q = q.replace(u, "")), 0 < q.trim().length)
                    ) {
                      switch (f) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                          break;
                        default:
                          q += l.charAt(M);
                      }
                      f = 59;
                    }
                    switch (f) {
                      case 123:
                        for (
                          p = (q = q.trim()).charCodeAt(0), m = 1, F = ++M;
                          M < $;

                        ) {
                          switch ((f = l.charCodeAt(M))) {
                            case 123:
                              m++;
                              break;
                            case 125:
                              m--;
                              break;
                            case 47:
                              switch ((f = l.charCodeAt(M + 1))) {
                                case 42:
                                case 47:
                                  e: {
                                    for (L = M + 1; L < B; ++L)
                                      switch (l.charCodeAt(L)) {
                                        case 47:
                                          if (
                                            42 === f &&
                                            42 === l.charCodeAt(L - 1) &&
                                            M + 2 !== L
                                          ) {
                                            M = L + 1;
                                            break e;
                                          }
                                          break;
                                        case 10:
                                          if (47 === f) {
                                            M = L + 1;
                                            break e;
                                          }
                                      }
                                    M = L;
                                  }
                              }
                              break;
                            case 91:
                              f++;
                            case 40:
                              f++;
                            case 34:
                            case 39:
                              for (; M++ < B && l.charCodeAt(M) !== f; );
                          }
                          if (0 === m) break;
                          M++;
                        }
                        if (
                          ((m = l.substring(F, M)),
                          0 === p &&
                            (p = (q = q.replace(c, "").trim()).charCodeAt(0)),
                          64 === p)
                        ) {
                          switch (
                            (0 < j && (q = q.replace(u, "")),
                            (f = q.charCodeAt(1)))
                          ) {
                            case 100:
                            case 109:
                            case 115:
                            case 45:
                              j = a;
                              break;
                            default:
                              j = A;
                          }
                          if (
                            ((F = (m = e(a, j, m, f, h + 1)).length),
                            0 < P &&
                              ((b = o(
                                3,
                                m,
                                (j = t(A, q, U)),
                                a,
                                N,
                                R,
                                F,
                                f,
                                h,
                                d
                              )),
                              (q = j.join("")),
                              void 0 !== b &&
                                0 === (F = (m = b.trim()).length) &&
                                ((f = 0), (m = ""))),
                            0 < F)
                          )
                            switch (f) {
                              case 115:
                                q = q.replace(E, s);
                              case 100:
                              case 109:
                              case 45:
                                m = q + "{" + m + "}";
                                break;
                              case 107:
                                (m =
                                  (q = q.replace(_, "$1 $2")) + "{" + m + "}"),
                                  (m =
                                    1 === I || (2 === I && i("@" + m, 3))
                                      ? "@-webkit-" + m + "@" + m
                                      : "@" + m);
                                break;
                              default:
                                (m = q + m), 112 === d && ((H += m), (m = ""));
                            }
                          else m = "";
                        } else m = e(a, t(a, q, U), m, d, h + 1);
                        (W += m),
                          (m = U = j = L = p = 0),
                          (q = ""),
                          (f = l.charCodeAt(++M));
                        break;
                      case 125:
                      case 59:
                        if (
                          1 <
                          (F = (q = (0 < j ? q.replace(u, "") : q).trim())
                            .length)
                        )
                          switch (
                            (0 === L &&
                              (45 === (p = q.charCodeAt(0)) ||
                                (96 < p && 123 > p)) &&
                              (F = (q = q.replace(" ", ":")).length),
                            0 < P &&
                              void 0 !==
                                (b = o(1, q, a, n, N, R, H.length, d, h, d)) &&
                              0 === (F = (q = b.trim()).length) &&
                              (q = "\0\0"),
                            (p = q.charCodeAt(0)),
                            (f = q.charCodeAt(1)),
                            p)
                          ) {
                            case 0:
                              break;
                            case 64:
                              if (105 === f || 99 === f) {
                                z += q + l.charAt(M);
                                break;
                              }
                            default:
                              58 !== q.charCodeAt(F - 1) &&
                                (H += r(q, p, f, q.charCodeAt(2)));
                          }
                        (U = j = L = p = 0), (q = ""), (f = l.charCodeAt(++M));
                    }
                  }
                  switch (f) {
                    case 13:
                    case 10:
                      47 === S
                        ? (S = 0)
                        : 0 === 1 + p &&
                          107 !== d &&
                          0 < q.length &&
                          ((j = 1), (q += "\0")),
                        0 < P * x && o(0, q, a, n, N, R, H.length, d, h, d),
                        (R = 1),
                        N++;
                      break;
                    case 59:
                    case 125:
                      if (0 === S + O + w + T) {
                        R++;
                        break;
                      }
                    default:
                      switch ((R++, (v = l.charAt(M)), f)) {
                        case 9:
                        case 32:
                          if (0 === O + T + S)
                            switch (k) {
                              case 44:
                              case 58:
                              case 9:
                              case 32:
                                v = "";
                                break;
                              default:
                                32 !== f && (v = " ");
                            }
                          break;
                        case 0:
                          v = "\\0";
                          break;
                        case 12:
                          v = "\\f";
                          break;
                        case 11:
                          v = "\\v";
                          break;
                        case 38:
                          0 === O + S + T && ((j = U = 1), (v = "\f" + v));
                          break;
                        case 108:
                          if (0 === O + S + T + C && 0 < L)
                            switch (M - L) {
                              case 2:
                                112 === k &&
                                  58 === l.charCodeAt(M - 3) &&
                                  (C = k);
                              case 8:
                                111 === D && (C = D);
                            }
                          break;
                        case 58:
                          0 === O + S + T && (L = M);
                          break;
                        case 44:
                          0 === S + w + O + T && ((j = 1), (v += "\r"));
                          break;
                        case 34:
                        case 39:
                          0 === S && (O = O === f ? 0 : 0 === O ? f : O);
                          break;
                        case 91:
                          0 === O + S + w && T++;
                          break;
                        case 93:
                          0 === O + S + w && T--;
                          break;
                        case 41:
                          0 === O + S + T && w--;
                          break;
                        case 40:
                          0 === O + S + T &&
                            (0 === p && (2 * k + 3 * D == 533 || (p = 1)), w++);
                          break;
                        case 64:
                          0 === S + w + O + T + L + m && (m = 1);
                          break;
                        case 42:
                        case 47:
                          if (!(0 < O + T + w))
                            switch (S) {
                              case 0:
                                switch (2 * f + 3 * l.charCodeAt(M + 1)) {
                                  case 235:
                                    S = 47;
                                    break;
                                  case 220:
                                    (F = M), (S = 42);
                                }
                                break;
                              case 42:
                                47 === f &&
                                  42 === k &&
                                  F + 2 !== M &&
                                  (33 === l.charCodeAt(F + 2) &&
                                    (H += l.substring(F, M + 1)),
                                  (v = ""),
                                  (S = 0));
                            }
                      }
                      0 === S && (q += v);
                  }
                  (D = k), (k = f), M++;
                }
                if (0 < (F = H.length)) {
                  if (
                    ((j = a),
                    0 < P &&
                      void 0 !== (b = o(2, H, j, n, N, R, F, d, h, d)) &&
                      0 === (H = b).length)
                  )
                    return z + H + W;
                  if (((H = j.join(",") + "{" + H + "}"), 0 != I * C)) {
                    switch ((2 !== I || i(H, 2) || (C = 0), C)) {
                      case 111:
                        H = H.replace(y, ":-moz-$1") + H;
                        break;
                      case 112:
                        H =
                          H.replace(g, "::-webkit-input-$1") +
                          H.replace(g, "::-moz-$1") +
                          H.replace(g, ":-ms-input-$1") +
                          H;
                    }
                    C = 0;
                  }
                }
                return z + H + W;
              })(A, a, n, 0, 0);
              return (
                0 < P &&
                  void 0 !== (l = o(-2, d, a, a, N, R, d.length, 0, 0, 0)) &&
                  (d = l),
                (C = 0),
                (R = N = 1),
                d
              );
            }
            var c = /^\0+/g,
              u = /[\0\r\f]/g,
              d = /: */g,
              h = /zoo|gra/,
              p = /([,: ])(transform)/g,
              f = /,\r+?/g,
              m = /([\t\r\n ])*\f?&/g,
              _ = /@(k\w+)\s*(\S*)\s*/,
              g = /::(place)/g,
              y = /:(read-only)/g,
              v = /[svh]\w+-[tblr]{2}/,
              E = /\(\s*(.*)\s*\)/g,
              b = /([\s\S]*?);/g,
              T = /-self|flex-/g,
              S = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
              w = /stretch|:\s*\w+\-(?:conte|avail)/,
              O = /([^-])(image-set\()/,
              R = 1,
              N = 1,
              C = 0,
              I = 1,
              A = [],
              k = [],
              P = 0,
              D = null,
              x = 0;
            return (
              (l.use = function e(t) {
                switch (t) {
                  case void 0:
                  case null:
                    P = k.length = 0;
                    break;
                  default:
                    if ("function" == typeof t) k[P++] = t;
                    else if ("object" == typeof t)
                      for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                    else x = 0 | !!t;
                }
                return e;
              }),
              (l.set = a),
              void 0 !== e && a(e),
              l
            );
          },
          c = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1,
          },
          u = n(45042),
          d =
            /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
          h = (0, u.Z)(function (e) {
            return (
              d.test(e) ||
              (111 === e.charCodeAt(0) &&
                110 === e.charCodeAt(1) &&
                91 > e.charCodeAt(2))
            );
          }),
          p = n(8679),
          f = n.n(p),
          m = n(83454);
        function _() {
          return (_ =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        var g = function (e, t) {
            for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
              n.push(t[r], e[r + 1]);
            return n;
          },
          y = function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "[object Object]" ===
                (e.toString
                  ? e.toString()
                  : Object.prototype.toString.call(e)) &&
              !(0, i.typeOf)(e)
            );
          },
          v = Object.freeze([]),
          E = Object.freeze({});
        function b(e) {
          return "function" == typeof e;
        }
        function T(e) {
          return e.displayName || e.name || "Component";
        }
        function S(e) {
          return e && "string" == typeof e.styledComponentId;
        }
        var w =
            (void 0 !== m &&
              void 0 !== m.env &&
              (m.env.REACT_APP_SC_ATTR || m.env.SC_ATTR)) ||
            "data-styled",
          O = "undefined" != typeof window && "HTMLElement" in window,
          R = !!("boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : void 0 !== m &&
              void 0 !== m.env &&
              (void 0 !== m.env.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !== m.env.REACT_APP_SC_DISABLE_SPEEDY
                ? "false" !== m.env.REACT_APP_SC_DISABLE_SPEEDY &&
                  m.env.REACT_APP_SC_DISABLE_SPEEDY
                : void 0 !== m.env.SC_DISABLE_SPEEDY &&
                  "" !== m.env.SC_DISABLE_SPEEDY &&
                  "false" !== m.env.SC_DISABLE_SPEEDY &&
                  m.env.SC_DISABLE_SPEEDY)),
          N = {};
        function C(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          throw Error(
            "An error occurred. See https://git.io/JUIaE#" +
              e +
              " for more information." +
              (n.length > 0 ? " Args: " + n.join(", ") : "")
          );
        }
        var I = (function () {
            function e(e) {
              (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
            }
            var t = e.prototype;
            return (
              (t.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t;
              }),
              (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                  for (var n = this.groupSizes, r = n.length, i = r; e >= i; )
                    (i <<= 1) < 0 && C(16, "" + e);
                  (this.groupSizes = new Uint32Array(i)),
                    this.groupSizes.set(n),
                    (this.length = i);
                  for (var s = r; s < i; s++) this.groupSizes[s] = 0;
                }
                for (
                  var o = this.indexOfGroup(e + 1), a = 0, l = t.length;
                  a < l;
                  a++
                )
                  this.tag.insertRule(o, t[a]) && (this.groupSizes[e]++, o++);
              }),
              (t.clearGroup = function (e) {
                if (e < this.length) {
                  var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                  this.groupSizes[e] = 0;
                  for (var i = n; i < r; i++) this.tag.deleteRule(n);
                }
              }),
              (t.getGroup = function (e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (
                  var n = this.groupSizes[e],
                    r = this.indexOfGroup(e),
                    i = r + n,
                    s = r;
                  s < i;
                  s++
                )
                  t += this.tag.getRule(s) + "/*!sc*/\n";
                return t;
              }),
              e
            );
          })(),
          A = new Map(),
          k = new Map(),
          P = 1,
          D = function (e) {
            if (A.has(e)) return A.get(e);
            for (; k.has(P); ) P++;
            var t = P++;
            return A.set(e, t), k.set(t, e), t;
          },
          x = function (e, t) {
            t >= P && (P = t + 1), A.set(e, t), k.set(t, e);
          },
          L = "style[" + w + '][data-styled-version="5.3.11"]',
          M = RegExp("^" + w + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
          j = function (e, t, n) {
            for (var r, i = n.split(","), s = 0, o = i.length; s < o; s++)
              (r = i[s]) && e.registerName(t, r);
          },
          U = function (e, t) {
            for (
              var n = (t.textContent || "").split("/*!sc*/\n"),
                r = [],
                i = 0,
                s = n.length;
              i < s;
              i++
            ) {
              var o = n[i].trim();
              if (o) {
                var a = o.match(M);
                if (a) {
                  var l = 0 | parseInt(a[1], 10),
                    c = a[2];
                  0 !== l &&
                    (x(c, l), j(e, c, a[3]), e.getTag().insertRules(l, r)),
                    (r.length = 0);
                } else r.push(o);
              }
            }
          },
          F = function () {
            return n.nc;
          },
          $ = function (e) {
            var t = document.head,
              n = e || t,
              r = document.createElement("style"),
              i = (function (e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                  var r = t[n];
                  if (r && 1 === r.nodeType && r.hasAttribute(w)) return r;
                }
              })(n),
              s = void 0 !== i ? i.nextSibling : null;
            r.setAttribute(w, "active"),
              r.setAttribute("data-styled-version", "5.3.11");
            var o = F();
            return o && r.setAttribute("nonce", o), n.insertBefore(r, s), r;
          },
          B = (function () {
            function e(e) {
              var t = (this.element = $(e));
              t.appendChild(document.createTextNode("")),
                (this.sheet = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (
                    var t = document.styleSheets, n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var i = t[n];
                    if (i.ownerNode === e) return i;
                  }
                  C(17);
                })(t)),
                (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                try {
                  return this.sheet.insertRule(t, e), this.length++, !0;
                } catch (e) {
                  return !1;
                }
              }),
              (t.deleteRule = function (e) {
                this.sheet.deleteRule(e), this.length--;
              }),
              (t.getRule = function (e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText
                  ? t.cssText
                  : "";
              }),
              e
            );
          })(),
          q = (function () {
            function e(e) {
              var t = (this.element = $(e));
              (this.nodes = t.childNodes), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                if (e <= this.length && e >= 0) {
                  var n = document.createTextNode(t),
                    r = this.nodes[e];
                  return (
                    this.element.insertBefore(n, r || null), this.length++, !0
                  );
                }
                return !1;
              }),
              (t.deleteRule = function (e) {
                this.element.removeChild(this.nodes[e]), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.nodes[e].textContent : "";
              }),
              e
            );
          })(),
          H = (function () {
            function e(e) {
              (this.rules = []), (this.length = 0);
            }
            var t = e.prototype;
            return (
              (t.insertRule = function (e, t) {
                return (
                  e <= this.length &&
                  (this.rules.splice(e, 0, t), this.length++, !0)
                );
              }),
              (t.deleteRule = function (e) {
                this.rules.splice(e, 1), this.length--;
              }),
              (t.getRule = function (e) {
                return e < this.length ? this.rules[e] : "";
              }),
              e
            );
          })(),
          W = O,
          z = { isServer: !O, useCSSOMInjection: !R },
          G = (function () {
            function e(e, t, n) {
              void 0 === e && (e = E),
                void 0 === t && (t = {}),
                (this.options = _({}, z, {}, e)),
                (this.gs = t),
                (this.names = new Map(n)),
                (this.server = !!e.isServer),
                !this.server &&
                  O &&
                  W &&
                  ((W = !1),
                  (function (e) {
                    for (
                      var t = document.querySelectorAll(L), n = 0, r = t.length;
                      n < r;
                      n++
                    ) {
                      var i = t[n];
                      i &&
                        "active" !== i.getAttribute(w) &&
                        (U(e, i), i.parentNode && i.parentNode.removeChild(i));
                    }
                  })(this));
            }
            e.registerId = function (e) {
              return D(e);
            };
            var t = e.prototype;
            return (
              (t.reconstructWithOptions = function (t, n) {
                return (
                  void 0 === n && (n = !0),
                  new e(
                    _({}, this.options, {}, t),
                    this.gs,
                    (n && this.names) || void 0
                  )
                );
              }),
              (t.allocateGSInstance = function (e) {
                return (this.gs[e] = (this.gs[e] || 0) + 1);
              }),
              (t.getTag = function () {
                var e, t, n, r;
                return (
                  this.tag ||
                  (this.tag =
                    ((t = (e = this.options).isServer),
                    (n = e.useCSSOMInjection),
                    (r = e.target),
                    new I(t ? new H(r) : n ? new B(r) : new q(r))))
                );
              }),
              (t.hasNameForId = function (e, t) {
                return this.names.has(e) && this.names.get(e).has(t);
              }),
              (t.registerName = function (e, t) {
                if ((D(e), this.names.has(e))) this.names.get(e).add(t);
                else {
                  var n = new Set();
                  n.add(t), this.names.set(e, n);
                }
              }),
              (t.insertRules = function (e, t, n) {
                this.registerName(e, t), this.getTag().insertRules(D(e), n);
              }),
              (t.clearNames = function (e) {
                this.names.has(e) && this.names.get(e).clear();
              }),
              (t.clearRules = function (e) {
                this.getTag().clearGroup(D(e)), this.clearNames(e);
              }),
              (t.clearTag = function () {
                this.tag = void 0;
              }),
              (t.toString = function () {
                return (function (e) {
                  for (
                    var t = e.getTag(), n = t.length, r = "", i = 0;
                    i < n;
                    i++
                  ) {
                    var s,
                      o = ((s = i), k.get(s));
                    if (void 0 !== o) {
                      var a = e.names.get(o),
                        l = t.getGroup(i);
                      if (a && l && a.size) {
                        var c = w + ".g" + i + '[id="' + o + '"]',
                          u = "";
                        void 0 !== a &&
                          a.forEach(function (e) {
                            e.length > 0 && (u += e + ",");
                          }),
                          (r += "" + l + c + '{content:"' + u + '"}/*!sc*/\n');
                      }
                    }
                  }
                  return r;
                })(this);
              }),
              e
            );
          })(),
          V = /(a)(d)/gi,
          Q = function (e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97));
          };
        function Y(e) {
          var t,
            n = "";
          for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Q(t % 52) + n;
          return (Q(t % 52) + n).replace(V, "$1-$2");
        }
        var K = function (e, t) {
            for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
            return e;
          },
          X = function (e) {
            return K(5381, e);
          };
        function J(e) {
          for (var t = 0; t < e.length; t += 1) {
            var n = e[t];
            if (b(n) && !S(n)) return !1;
          }
          return !0;
        }
        var Z = X("5.3.11"),
          ee = (function () {
            function e(e, t, n) {
              (this.rules = e),
                (this.staticRulesId = ""),
                (this.isStatic = (void 0 === n || n.isStatic) && J(e)),
                (this.componentId = t),
                (this.baseHash = K(Z, t)),
                (this.baseStyle = n),
                G.registerId(t);
            }
            return (
              (e.prototype.generateAndInjectStyles = function (e, t, n) {
                var r = this.componentId,
                  i = [];
                if (
                  (this.baseStyle &&
                    i.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                  this.isStatic && !n.hash)
                ) {
                  if (
                    this.staticRulesId &&
                    t.hasNameForId(r, this.staticRulesId)
                  )
                    i.push(this.staticRulesId);
                  else {
                    var s = ey(this.rules, e, t, n).join(""),
                      o = Y(K(this.baseHash, s) >>> 0);
                    if (!t.hasNameForId(r, o)) {
                      var a = n(s, "." + o, void 0, r);
                      t.insertRules(r, o, a);
                    }
                    i.push(o), (this.staticRulesId = o);
                  }
                } else {
                  for (
                    var l = this.rules.length,
                      c = K(this.baseHash, n.hash),
                      u = "",
                      d = 0;
                    d < l;
                    d++
                  ) {
                    var h = this.rules[d];
                    if ("string" == typeof h) u += h;
                    else if (h) {
                      var p = ey(h, e, t, n),
                        f = Array.isArray(p) ? p.join("") : p;
                      (c = K(c, f + d)), (u += f);
                    }
                  }
                  if (u) {
                    var m = Y(c >>> 0);
                    if (!t.hasNameForId(r, m)) {
                      var _ = n(u, "." + m, void 0, r);
                      t.insertRules(r, m, _);
                    }
                    i.push(m);
                  }
                }
                return i.join(" ");
              }),
              e
            );
          })(),
          et = /^\s*\/\/.*$/gm,
          en = [":", "[", ".", "#"];
        function er(e) {
          var t,
            n,
            r,
            i,
            s = void 0 === e ? E : e,
            o = s.options,
            a = void 0 === o ? E : o,
            c = s.plugins,
            u = void 0 === c ? v : c,
            d = new l(a),
            h = [],
            p = (function (e) {
              function t(t) {
                if (t)
                  try {
                    e(t + "}");
                  } catch (e) {}
              }
              return function (n, r, i, s, o, a, l, c, u, d) {
                switch (n) {
                  case 1:
                    if (0 === u && 64 === r.charCodeAt(0))
                      return e(r + ";"), "";
                    break;
                  case 2:
                    if (0 === c) return r + "/*|*/";
                    break;
                  case 3:
                    switch (c) {
                      case 102:
                      case 112:
                        return e(i[0] + r), "";
                      default:
                        return r + (0 === d ? "/*|*/" : "");
                    }
                  case -2:
                    r.split("/*|*/}").forEach(t);
                }
              };
            })(function (e) {
              h.push(e);
            }),
            f = function (e, r, s) {
              return (0 === r && -1 !== en.indexOf(s[n.length])) || s.match(i)
                ? e
                : "." + t;
            };
          function m(e, s, o, a) {
            void 0 === a && (a = "&");
            var l = e.replace(et, ""),
              c = s && o ? o + " " + s + " { " + l + " }" : l;
            return (
              (t = a),
              (r = RegExp("\\" + (n = s) + "\\b", "g")),
              (i = RegExp("(\\" + n + "\\b){2,}")),
              d(o || !s ? "" : s, c)
            );
          }
          return (
            d.use(
              [].concat(u, [
                function (e, t, i) {
                  2 === e &&
                    i.length &&
                    i[0].lastIndexOf(n) > 0 &&
                    (i[0] = i[0].replace(r, f));
                },
                p,
                function (e) {
                  if (-2 === e) {
                    var t = h;
                    return (h = []), t;
                  }
                },
              ])
            ),
            (m.hash = u.length
              ? u
                  .reduce(function (e, t) {
                    return t.name || C(15), K(e, t.name);
                  }, 5381)
                  .toString()
              : ""),
            m
          );
        }
        var ei = s.createContext(),
          es = (ei.Consumer, s.createContext()),
          eo = (es.Consumer, new G()),
          ea = er();
        function el() {
          return (0, s.useContext)(ei) || eo;
        }
        function ec() {
          return (0, s.useContext)(es) || ea;
        }
        function eu(e) {
          var t = (0, s.useState)(e.stylisPlugins),
            n = t[0],
            r = t[1],
            i = el(),
            o = (0, s.useMemo)(
              function () {
                var t = i;
                return (
                  e.sheet
                    ? (t = e.sheet)
                    : e.target &&
                      (t = t.reconstructWithOptions({ target: e.target }, !1)),
                  e.disableCSSOMInjection &&
                    (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                  t
                );
              },
              [e.disableCSSOMInjection, e.sheet, e.target]
            ),
            l = (0, s.useMemo)(
              function () {
                return er({
                  options: { prefix: !e.disableVendorPrefixes },
                  plugins: n,
                });
              },
              [e.disableVendorPrefixes, n]
            );
          return (
            (0, s.useEffect)(
              function () {
                a()(n, e.stylisPlugins) || r(e.stylisPlugins);
              },
              [e.stylisPlugins]
            ),
            s.createElement(
              ei.Provider,
              { value: o },
              s.createElement(es.Provider, { value: l }, e.children)
            )
          );
        }
        var ed = (function () {
            function e(e, t) {
              var n = this;
              (this.inject = function (e, t) {
                void 0 === t && (t = ea);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) ||
                  e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
              }),
                (this.toString = function () {
                  return C(12, String(n.name));
                }),
                (this.name = e),
                (this.id = "sc-keyframes-" + e),
                (this.rules = t);
            }
            return (
              (e.prototype.getName = function (e) {
                return void 0 === e && (e = ea), this.name + e.hash;
              }),
              e
            );
          })(),
          eh = /([A-Z])/,
          ep = /([A-Z])/g,
          ef = /^ms-/,
          em = function (e) {
            return "-" + e.toLowerCase();
          };
        function e_(e) {
          return eh.test(e) ? e.replace(ep, em).replace(ef, "-ms-") : e;
        }
        var eg = function (e) {
          return null == e || !1 === e || "" === e;
        };
        function ey(e, t, n, r) {
          if (Array.isArray(e)) {
            for (var i, s = [], o = 0, a = e.length; o < a; o += 1)
              "" !== (i = ey(e[o], t, n, r)) &&
                (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
            return s;
          }
          return eg(e)
            ? ""
            : S(e)
            ? "." + e.styledComponentId
            : b(e)
            ? "function" != typeof e ||
              (e.prototype && e.prototype.isReactComponent) ||
              !t
              ? e
              : ey(e(t), t, n, r)
            : e instanceof ed
            ? n
              ? (e.inject(n, r), e.getName(r))
              : e
            : y(e)
            ? (function e(t, n) {
                var r,
                  i = [];
                for (var s in t)
                  t.hasOwnProperty(s) &&
                    !eg(t[s]) &&
                    ((Array.isArray(t[s]) && t[s].isCss) || b(t[s])
                      ? i.push(e_(s) + ":", t[s], ";")
                      : y(t[s])
                      ? i.push.apply(i, e(t[s], s))
                      : i.push(
                          e_(s) +
                            ": " +
                            (null == (r = t[s]) ||
                            "boolean" == typeof r ||
                            "" === r
                              ? ""
                              : "number" != typeof r ||
                                0 === r ||
                                s in c ||
                                s.startsWith("--")
                              ? String(r).trim()
                              : r + "px") +
                            ";"
                        ));
                return n ? [n + " {"].concat(i, ["}"]) : i;
              })(e)
            : e.toString();
        }
        var ev = function (e) {
          return Array.isArray(e) && (e.isCss = !0), e;
        };
        function eE(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return b(e) || y(e)
            ? ev(ey(g(v, [e].concat(n))))
            : 0 === n.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : ev(ey(g(e, n)));
        }
        var eb = function (e, t, n) {
            return (
              void 0 === n && (n = E),
              (e.theme !== n.theme && e.theme) || t || n.theme
            );
          },
          eT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
          eS = /(^-|-$)/g;
        function ew(e) {
          return e.replace(eT, "-").replace(eS, "");
        }
        var eO = function (e) {
          return Y(X(e) >>> 0);
        };
        function eR(e) {
          return "string" == typeof e;
        }
        var eN = function (e) {
            return (
              "function" == typeof e ||
              ("object" == typeof e && null !== e && !Array.isArray(e))
            );
          },
          eC = s.createContext();
        eC.Consumer;
        var eI = {},
          eA = function (e) {
            return (function e(t, n, r) {
              if ((void 0 === r && (r = E), !(0, i.isValidElementType)(n)))
                return C(1, String(n));
              var s = function () {
                return t(n, r, eE.apply(void 0, arguments));
              };
              return (
                (s.withConfig = function (i) {
                  return e(t, n, _({}, r, {}, i));
                }),
                (s.attrs = function (i) {
                  return e(
                    t,
                    n,
                    _({}, r, {
                      attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
                    })
                  );
                }),
                s
              );
            })(function e(t, n, r) {
              var i = S(t),
                o = !eR(t),
                a = n.attrs,
                l = void 0 === a ? v : a,
                c = n.componentId,
                u =
                  void 0 === c
                    ? ((w = n.displayName),
                      (O = n.parentComponentId),
                      (eI[(R = "string" != typeof w ? "sc" : ew(w))] =
                        (eI[R] || 0) + 1),
                      (N = R + "-" + eO("5.3.11" + R + eI[R])),
                      O ? O + "-" + N : N)
                    : c,
                d = n.displayName,
                p =
                  void 0 === d
                    ? eR(t)
                      ? "styled." + t
                      : "Styled(" + T(t) + ")"
                    : d,
                m =
                  n.displayName && n.componentId
                    ? ew(n.displayName) + "-" + n.componentId
                    : n.componentId || u,
                g =
                  i && t.attrs
                    ? Array.prototype.concat(t.attrs, l).filter(Boolean)
                    : l,
                y = n.shouldForwardProp;
              i &&
                t.shouldForwardProp &&
                (y = n.shouldForwardProp
                  ? function (e, r, i) {
                      return (
                        t.shouldForwardProp(e, r, i) &&
                        n.shouldForwardProp(e, r, i)
                      );
                    }
                  : t.shouldForwardProp);
              var w,
                O,
                R,
                N,
                C,
                I = new ee(r, m, i ? t.componentStyle : void 0),
                A = I.isStatic && 0 === l.length,
                k = function (e, t) {
                  return (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      l,
                      c,
                      u = e.attrs,
                      d = e.componentStyle,
                      p = e.defaultProps,
                      f = e.foldedComponentIds,
                      m = e.shouldForwardProp,
                      g = e.styledComponentId,
                      y = e.target,
                      v =
                        (void 0 ===
                          (i = eb(t, (0, s.useContext)(eC), p) || E) && (i = E),
                        (o = _({}, t, { theme: i })),
                        (a = {}),
                        u.forEach(function (e) {
                          var t,
                            n,
                            r,
                            i = e;
                          for (t in (b(i) && (i = i(o)), i))
                            o[t] = a[t] =
                              "className" === t
                                ? ((n = a[t]),
                                  (r = i[t]),
                                  n && r ? n + " " + r : n || r)
                                : i[t];
                        }),
                        [o, a]),
                      T = v[0],
                      S = v[1],
                      w =
                        ((l = el()),
                        (c = ec()),
                        r
                          ? d.generateAndInjectStyles(E, l, c)
                          : d.generateAndInjectStyles(T, l, c)),
                      O = S.$as || t.$as || S.as || t.as || y,
                      R = eR(O),
                      N = S !== t ? _({}, t, {}, S) : t,
                      C = {};
                    for (var I in N)
                      "$" !== I[0] &&
                        "as" !== I &&
                        ("forwardedAs" === I
                          ? (C.as = N[I])
                          : (m ? m(I, h, O) : !R || h(I)) && (C[I] = N[I]));
                    return (
                      t.style &&
                        S.style !== t.style &&
                        (C.style = _({}, t.style, {}, S.style)),
                      (C.className = Array.prototype
                        .concat(
                          f,
                          g,
                          w !== g ? w : null,
                          t.className,
                          S.className
                        )
                        .filter(Boolean)
                        .join(" ")),
                      (C.ref = n),
                      (0, s.createElement)(O, C)
                    );
                  })(C, e, t, A);
                };
              return (
                (k.displayName = p),
                ((C = s.forwardRef(k)).attrs = g),
                (C.componentStyle = I),
                (C.displayName = p),
                (C.shouldForwardProp = y),
                (C.foldedComponentIds = i
                  ? Array.prototype.concat(
                      t.foldedComponentIds,
                      t.styledComponentId
                    )
                  : v),
                (C.styledComponentId = m),
                (C.target = i ? t.target : t),
                (C.withComponent = function (t) {
                  var i = n.componentId,
                    s = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                      for (r = 0; r < s.length; r++)
                        t.indexOf((n = s[r])) >= 0 || (i[n] = e[n]);
                      return i;
                    })(n, ["componentId"]),
                    o = i && i + "-" + (eR(t) ? t : ew(T(t)));
                  return e(t, _({}, s, { attrs: g, componentId: o }), r);
                }),
                Object.defineProperty(C, "defaultProps", {
                  get: function () {
                    return this._foldedDefaultProps;
                  },
                  set: function (e) {
                    this._foldedDefaultProps = i
                      ? (function e(t) {
                          for (
                            var n = arguments.length,
                              r = Array(n > 1 ? n - 1 : 0),
                              i = 1;
                            i < n;
                            i++
                          )
                            r[i - 1] = arguments[i];
                          for (var s = 0; s < r.length; s++) {
                            var o = r[s];
                            if (eN(o))
                              for (var a in o)
                                "__proto__" !== a &&
                                  "constructor" !== a &&
                                  "prototype" !== a &&
                                  (function (t, n, r) {
                                    var i = t[r];
                                    eN(n) && eN(i) ? e(i, n) : (t[r] = n);
                                  })(t, o[a], a);
                          }
                          return t;
                        })({}, t.defaultProps, e)
                      : e;
                  },
                }),
                Object.defineProperty(C, "toString", {
                  value: function () {
                    return "." + C.styledComponentId;
                  },
                }),
                o &&
                  f()(C, t, {
                    attrs: !0,
                    componentStyle: !0,
                    displayName: !0,
                    foldedComponentIds: !0,
                    shouldForwardProp: !0,
                    styledComponentId: !0,
                    target: !0,
                    withComponent: !0,
                  }),
                C
              );
            }, e);
          };
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "textPath",
          "tspan",
        ].forEach(function (e) {
          eA[e] = eA(e);
        });
        var ek = (function () {
          function e(e, t) {
            (this.rules = e),
              (this.componentId = t),
              (this.isStatic = J(e)),
              G.registerId(this.componentId + 1);
          }
          var t = e.prototype;
          return (
            (t.createStyles = function (e, t, n, r) {
              var i = r(ey(this.rules, t, n, r).join(""), ""),
                s = this.componentId + e;
              n.insertRules(s, s, i);
            }),
            (t.removeStyles = function (e, t) {
              t.clearRules(this.componentId + e);
            }),
            (t.renderStyles = function (e, t, n, r) {
              e > 2 && G.registerId(this.componentId + e),
                this.removeStyles(e, n),
                this.createStyles(e, t, n, r);
            }),
            e
          );
        })();
        function eP(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = eE.apply(void 0, [e].concat(n)),
            o = "sc-global-" + eO(JSON.stringify(i)),
            a = new ek(i, o);
          function l(e) {
            var t = el(),
              n = ec(),
              r = (0, s.useContext)(eC),
              i = (0, s.useRef)(t.allocateGSInstance(o)).current;
            return (
              t.server && c(i, e, t, r, n),
              (0, s.useLayoutEffect)(
                function () {
                  if (!t.server)
                    return (
                      c(i, e, t, r, n),
                      function () {
                        return a.removeStyles(i, t);
                      }
                    );
                },
                [i, e, t, r, n]
              ),
              null
            );
          }
          function c(e, t, n, r, i) {
            if (a.isStatic) a.renderStyles(e, N, n, i);
            else {
              var s = _({}, t, { theme: eb(t, r, l.defaultProps) });
              a.renderStyles(e, s, n, i);
            }
          }
          return s.memo(l);
        }
        function eD(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var i = eE.apply(void 0, [e].concat(n)).join("");
          return new ed(eO(i), i);
        }
        ((r = function () {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString();
            if (!t) return "";
            var n = F();
            return (
              "<style " +
              [
                n && 'nonce="' + n + '"',
                w + '="true"',
                'data-styled-version="5.3.11"',
              ]
                .filter(Boolean)
                .join(" ") +
              ">" +
              t +
              "</style>"
            );
          }),
            (this.getStyleTags = function () {
              return e.sealed ? C(2) : e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              if (e.sealed) return C(2);
              var t,
                n =
                  (((t = {})[w] = ""),
                  (t["data-styled-version"] = "5.3.11"),
                  (t.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  t),
                r = F();
              return (
                r && (n.nonce = r),
                [s.createElement("style", _({}, n, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new G({ isServer: !0 })),
            (this.sealed = !1);
        }.prototype).collectStyles = function (e) {
          return this.sealed
            ? C(2)
            : s.createElement(eu, { sheet: this.instance }, e);
        }),
          (r.interleaveWithNodeStream = function (e) {
            return C(3);
          });
        var ex = eA;
      },
      97582: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            __addDisposableResource: function () {
              return x;
            },
            __assign: function () {
              return s;
            },
            __asyncDelegator: function () {
              return O;
            },
            __asyncGenerator: function () {
              return w;
            },
            __asyncValues: function () {
              return R;
            },
            __await: function () {
              return S;
            },
            __awaiter: function () {
              return f;
            },
            __classPrivateFieldGet: function () {
              return k;
            },
            __classPrivateFieldIn: function () {
              return D;
            },
            __classPrivateFieldSet: function () {
              return P;
            },
            __createBinding: function () {
              return _;
            },
            __decorate: function () {
              return a;
            },
            __disposeResources: function () {
              return M;
            },
            __esDecorate: function () {
              return c;
            },
            __exportStar: function () {
              return g;
            },
            __extends: function () {
              return i;
            },
            __generator: function () {
              return m;
            },
            __importDefault: function () {
              return A;
            },
            __importStar: function () {
              return I;
            },
            __makeTemplateObject: function () {
              return N;
            },
            __metadata: function () {
              return p;
            },
            __param: function () {
              return l;
            },
            __propKey: function () {
              return d;
            },
            __read: function () {
              return v;
            },
            __rest: function () {
              return o;
            },
            __runInitializers: function () {
              return u;
            },
            __setFunctionName: function () {
              return h;
            },
            __spread: function () {
              return E;
            },
            __spreadArray: function () {
              return T;
            },
            __spreadArrays: function () {
              return b;
            },
            __values: function () {
              return y;
            },
          });
        var r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
        function i(e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Class extends value " +
                String(t) +
                " is not a constructor or null"
            );
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        };
        function o(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              0 > t.indexOf(r) &&
              (n[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var i = 0, r = Object.getOwnPropertySymbols(e);
              i < r.length;
              i++
            )
              0 > t.indexOf(r[i]) &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          return n;
        }
        function a(e, t, n, r) {
          var i,
            s = arguments.length,
            o =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (i = e[a]) &&
                (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
          return s > 3 && o && Object.defineProperty(t, n, o), o;
        }
        function l(e, t) {
          return function (n, r) {
            t(n, r, e);
          };
        }
        function c(e, t, n, r, i, s) {
          function o(e) {
            if (void 0 !== e && "function" != typeof e)
              throw TypeError("Function expected");
            return e;
          }
          for (
            var a,
              l = r.kind,
              c = "getter" === l ? "get" : "setter" === l ? "set" : "value",
              u = !t && e ? (r.static ? e : e.prototype) : null,
              d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
              h = !1,
              p = n.length - 1;
            p >= 0;
            p--
          ) {
            var f = {};
            for (var m in r) f[m] = "access" === m ? {} : r[m];
            for (var m in r.access) f.access[m] = r.access[m];
            f.addInitializer = function (e) {
              if (h)
                throw TypeError(
                  "Cannot add initializers after decoration has completed"
                );
              s.push(o(e || null));
            };
            var _ = (0, n[p])(
              "accessor" === l ? { get: d.get, set: d.set } : d[c],
              f
            );
            if ("accessor" === l) {
              if (void 0 === _) continue;
              if (null === _ || "object" != typeof _)
                throw TypeError("Object expected");
              (a = o(_.get)) && (d.get = a),
                (a = o(_.set)) && (d.set = a),
                (a = o(_.init)) && i.unshift(a);
            } else (a = o(_)) && ("field" === l ? i.unshift(a) : (d[c] = a));
          }
          u && Object.defineProperty(u, r.name, d), (h = !0);
        }
        function u(e, t, n) {
          for (var r = arguments.length > 2, i = 0; i < t.length; i++)
            n = r ? t[i].call(e, n) : t[i].call(e);
          return r ? n : void 0;
        }
        function d(e) {
          return "symbol" == typeof e ? e : "".concat(e);
        }
        function h(e, t, n) {
          return (
            "symbol" == typeof t &&
              (t = t.description ? "[".concat(t.description, "]") : ""),
            Object.defineProperty(e, "name", {
              configurable: !0,
              value: n ? "".concat(n, " ", t) : t,
            })
          );
        }
        function p(e, t) {
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.metadata
          )
            return Reflect.metadata(e, t);
        }
        function f(e, t, n, r) {
          return new (n || (n = Promise))(function (i, s) {
            function o(e) {
              try {
                l(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function a(e) {
              try {
                l(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })
                  ).then(o, a);
            }
            l((r = r.apply(e, t || [])).next());
          });
        }
        function m(e, t) {
          var n,
            r,
            i,
            s,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (s = { next: a(0), throw: a(1), return: a(2) }),
            "function" == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function a(a) {
            return function (l) {
              return (function (a) {
                if (n) throw TypeError("Generator is already executing.");
                for (; s && ((s = 0), a[0] && (o = 0)), o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, a[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                      case 0:
                      case 1:
                        i = a;
                        break;
                      case 4:
                        return o.label++, { value: a[1], done: !1 };
                      case 5:
                        o.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          o.label = a[1];
                          break;
                        }
                        if (6 === a[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = a);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(a);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    a = t.call(e, o);
                  } catch (e) {
                    (a = [6, e]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        }
        var _ = Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var i = Object.getOwnPropertyDescriptor(t, n);
              (!i ||
                ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
                (i = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, i);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            };
        function g(e, t) {
          for (var n in e)
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              _(t, e, n);
        }
        function y(e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        }
        function v(e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            s = n.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
              o.push(r.value);
          } catch (e) {
            i = { error: e };
          } finally {
            try {
              r && !r.done && (n = s.return) && n.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        }
        function E() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(v(arguments[t]));
          return e;
        }
        function b() {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
          for (var r = Array(e), i = 0, t = 0; t < n; t++)
            for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
              r[i] = s[o];
          return r;
        }
        function T(e, t, n) {
          if (n || 2 == arguments.length)
            for (var r, i = 0, s = t.length; i < s; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        function S(e) {
          return this instanceof S ? ((this.v = e), this) : new S(e);
        }
        function w(e, t, n) {
          if (!Symbol.asyncIterator)
            throw TypeError("Symbol.asyncIterator is not defined.");
          var r,
            i = n.apply(e, t || []),
            s = [];
          return (
            (r = {}),
            o("next"),
            o("throw"),
            o("return"),
            (r[Symbol.asyncIterator] = function () {
              return this;
            }),
            r
          );
          function o(e) {
            i[e] &&
              (r[e] = function (t) {
                return new Promise(function (n, r) {
                  s.push([e, t, n, r]) > 1 || a(e, t);
                });
              });
          }
          function a(e, t) {
            try {
              var n;
              (n = i[e](t)).value instanceof S
                ? Promise.resolve(n.value.v).then(l, c)
                : u(s[0][2], n);
            } catch (e) {
              u(s[0][3], e);
            }
          }
          function l(e) {
            a("next", e);
          }
          function c(e) {
            a("throw", e);
          }
          function u(e, t) {
            e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
          }
        }
        function O(e) {
          var t, n;
          return (
            (t = {}),
            r("next"),
            r("throw", function (e) {
              throw e;
            }),
            r("return"),
            (t[Symbol.iterator] = function () {
              return this;
            }),
            t
          );
          function r(r, i) {
            t[r] = e[r]
              ? function (t) {
                  return (n = !n)
                    ? { value: S(e[r](t)), done: !1 }
                    : i
                    ? i(t)
                    : t;
                }
              : i;
          }
        }
        function R(e) {
          if (!Symbol.asyncIterator)
            throw TypeError("Symbol.asyncIterator is not defined.");
          var t,
            n = e[Symbol.asyncIterator];
          return n
            ? n.call(e)
            : ((e = y(e)),
              (t = {}),
              r("next"),
              r("throw"),
              r("return"),
              (t[Symbol.asyncIterator] = function () {
                return this;
              }),
              t);
          function r(n) {
            t[n] =
              e[n] &&
              function (t) {
                return new Promise(function (r, i) {
                  (function (e, t, n, r) {
                    Promise.resolve(r).then(function (t) {
                      e({ value: t, done: n });
                    }, t);
                  })(r, i, (t = e[n](t)).done, t.value);
                });
              };
          }
        }
        function N(e, t) {
          return (
            Object.defineProperty
              ? Object.defineProperty(e, "raw", { value: t })
              : (e.raw = t),
            e
          );
        }
        var C = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            };
        function I(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              "default" !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                _(t, e, n);
          return C(t, e), t;
        }
        function A(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function k(e, t, n, r) {
          if ("a" === n && !r)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        }
        function P(e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n;
        }
        function D(e, t) {
          if (null === t || ("object" != typeof t && "function" != typeof t))
            throw TypeError("Cannot use 'in' operator on non-object");
          return "function" == typeof e ? t === e : e.has(t);
        }
        function x(e, t, n) {
          if (null != t) {
            var r;
            if ("object" != typeof t && "function" != typeof t)
              throw TypeError("Object expected.");
            if (n) {
              if (!Symbol.asyncDispose)
                throw TypeError("Symbol.asyncDispose is not defined.");
              r = t[Symbol.asyncDispose];
            }
            if (void 0 === r) {
              if (!Symbol.dispose)
                throw TypeError("Symbol.dispose is not defined.");
              r = t[Symbol.dispose];
            }
            if ("function" != typeof r)
              throw TypeError("Object not disposable.");
            e.stack.push({ value: t, dispose: r, async: n });
          } else n && e.stack.push({ async: !0 });
          return t;
        }
        var L =
          "function" == typeof SuppressedError
            ? SuppressedError
            : function (e, t, n) {
                var r = Error(n);
                return (
                  (r.name = "SuppressedError"),
                  (r.error = e),
                  (r.suppressed = t),
                  r
                );
              };
        function M(e) {
          function t(t) {
            (e.error = e.hasError
              ? new L(t, e.error, "An error was suppressed during disposal.")
              : t),
              (e.hasError = !0);
          }
          return (function n() {
            for (; e.stack.length; ) {
              var r = e.stack.pop();
              try {
                var i = r.dispose && r.dispose.call(r.value);
                if (r.async)
                  return Promise.resolve(i).then(n, function (e) {
                    return t(e), n();
                  });
              } catch (e) {
                t(e);
              }
            }
            if (e.hasError) throw e.error;
          })();
        }
        t.default = {
          __extends: i,
          __assign: s,
          __rest: o,
          __decorate: a,
          __param: l,
          __metadata: p,
          __awaiter: f,
          __generator: m,
          __createBinding: _,
          __exportStar: g,
          __values: y,
          __read: v,
          __spread: E,
          __spreadArrays: b,
          __spreadArray: T,
          __await: S,
          __asyncGenerator: w,
          __asyncDelegator: O,
          __asyncValues: R,
          __makeTemplateObject: N,
          __importStar: I,
          __importDefault: A,
          __classPrivateFieldGet: k,
          __classPrivateFieldSet: P,
          __classPrivateFieldIn: D,
          __addDisposableResource: x,
          __disposeResources: M,
        };
      },
    },
    function (e) {
      var t = function (t) {
        return e((e.s = t));
      };
      e.O(0, [9774, 179], function () {
        return t(14043), t(6840), t(9090);
      }),
        (_N_E = e.O());
    },
  ]);
