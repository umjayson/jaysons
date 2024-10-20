"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4942],
  {
    15497: function (e, t, r) {
      r.d(t, {
        x: function () {
          return $;
        },
      });
      var n = r(2265),
        o = r(73303),
        i = r(11250),
        a = r(7213),
        p = r(95551),
        c = r(56100),
        u = r(66188),
        l = r(23985);
      let f = ["-xs", "-sm", "-md", "-lg", "-xl"],
        y = {
          identity: function (e) {
            return e;
          },
          color: function (e, t) {
            return "dimmed" === e
              ? "dark" === t.colorScheme
                ? t.colors.dark[2]
                : t.colors.gray[6]
              : t.fn.variant({
                  variant: "filled",
                  color: e,
                  primaryFallback: !1,
                }).background;
          },
          size: function (e) {
            return (0, l.h)(e);
          },
          fontSize: function (e, t) {
            return (0, u.a)({ size: e, sizes: t.fontSizes });
          },
          spacing: function (e, t) {
            return f.includes(e)
              ? `calc(${(0, u.a)({
                  size: e.replace("-", ""),
                  sizes: t.spacing,
                })} * -1)`
              : (0, u.a)({ size: e, sizes: t.spacing });
          },
        },
        s = {
          m: { type: "spacing", property: "margin" },
          mt: { type: "spacing", property: "marginTop" },
          mb: { type: "spacing", property: "marginBottom" },
          ml: { type: "spacing", property: "marginLeft" },
          mr: { type: "spacing", property: "marginRight" },
          mx: { type: "spacing", property: ["marginRight", "marginLeft"] },
          my: { type: "spacing", property: ["marginTop", "marginBottom"] },
          p: { type: "spacing", property: "padding" },
          pt: { type: "spacing", property: "paddingTop" },
          pb: { type: "spacing", property: "paddingBottom" },
          pl: { type: "spacing", property: "paddingLeft" },
          pr: { type: "spacing", property: "paddingRight" },
          px: { type: "spacing", property: ["paddingRight", "paddingLeft"] },
          py: { type: "spacing", property: ["paddingTop", "paddingBottom"] },
          bg: { type: "color", property: "background" },
          c: { type: "color", property: "color" },
          opacity: { type: "identity", property: "opacity" },
          ff: { type: "identity", property: "fontFamily" },
          fz: { type: "fontSize", property: "fontSize" },
          fw: { type: "identity", property: "fontWeight" },
          lts: { type: "size", property: "letterSpacing" },
          ta: { type: "identity", property: "textAlign" },
          lh: { type: "identity", property: "lineHeight" },
          fs: { type: "identity", property: "fontStyle" },
          tt: { type: "identity", property: "textTransform" },
          td: { type: "identity", property: "textDecoration" },
          w: { type: "spacing", property: "width" },
          miw: { type: "spacing", property: "minWidth" },
          maw: { type: "spacing", property: "maxWidth" },
          h: { type: "spacing", property: "height" },
          mih: { type: "spacing", property: "minHeight" },
          mah: { type: "spacing", property: "maxHeight" },
          bgsz: { type: "size", property: "backgroundSize" },
          bgp: { type: "identity", property: "backgroundPosition" },
          bgr: { type: "identity", property: "backgroundRepeat" },
          bga: { type: "identity", property: "backgroundAttachment" },
          pos: { type: "identity", property: "position" },
          top: { type: "identity", property: "top" },
          left: { type: "size", property: "left" },
          bottom: { type: "size", property: "bottom" },
          right: { type: "size", property: "right" },
          inset: { type: "size", property: "inset" },
          display: { type: "identity", property: "display" },
        };
      var d = Object.defineProperty,
        m = Object.getOwnPropertySymbols,
        b = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        v = (e, t, r) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        h = (e, t) => {
          for (var r in t || (t = {})) b.call(t, r) && v(e, r, t[r]);
          if (m) for (var r of m(t)) g.call(t, r) && v(e, r, t[r]);
          return e;
        };
      function O(e, t, r = s) {
        return Object.keys(r)
          .reduce(
            (n, o) => (
              o in e &&
                void 0 !== e[o] &&
                n.push(
                  (function ({ value: e, theme: t, getValue: r, property: n }) {
                    if (null == e) return;
                    if ("object" == typeof e)
                      return (function (e, t) {
                        let r = Object.keys(e)
                          .filter((e) => "base" !== e)
                          .sort(
                            (e, r) =>
                              (0, c.oI)(
                                (0, u.a)({ size: e, sizes: t.breakpoints })
                              ) -
                              (0, c.oI)(
                                (0, u.a)({ size: r, sizes: t.breakpoints })
                              )
                          );
                        return "base" in e ? ["base", ...r] : r;
                      })(e, t).reduce((o, i) => {
                        if ("base" === i && void 0 !== e.base) {
                          let i = r(e.base, t);
                          return (
                            Array.isArray(n)
                              ? n.forEach((e) => {
                                  o[e] = i;
                                })
                              : (o[n] = i),
                            o
                          );
                        }
                        let a = r(e[i], t);
                        return (
                          Array.isArray(n)
                            ? ((o[t.fn.largerThan(i)] = {}),
                              n.forEach((e) => {
                                o[t.fn.largerThan(i)][e] = a;
                              }))
                            : (o[t.fn.largerThan(i)] = { [n]: a }),
                          o
                        );
                      }, {});
                    let o = r(e, t);
                    return Array.isArray(n)
                      ? n.reduce((e, t) => ((e[t] = o), e), {})
                      : { [n]: o };
                  })({
                    value: e[o],
                    getValue: y[r[o].type],
                    property: r[o].property,
                    theme: t,
                  })
                ),
              n
            ),
            []
          )
          .reduce(
            (e, t) => (
              Object.keys(t).forEach((r) => {
                "object" == typeof t[r] && null !== t[r] && r in e
                  ? (e[r] = h(h({}, e[r]), t[r]))
                  : (e[r] = t[r]);
              }),
              e
            ),
            {}
          );
      }
      function w(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      var j = Object.defineProperty,
        k = Object.getOwnPropertySymbols,
        z = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        E = (e, t, r) =>
          t in e
            ? j(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        S = (e, t) => {
          for (var r in t || (t = {})) z.call(t, r) && E(e, r, t[r]);
          if (k) for (var r of k(t)) x.call(t, r) && E(e, r, t[r]);
          return e;
        },
        P = (e, t) => {
          var r = {};
          for (var n in e) z.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && k)
            for (var n of k(e))
              0 > t.indexOf(n) && x.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let A = (0, n.forwardRef)((e, t) => {
        var { className: r, component: o, style: c, sx: u } = e,
          l = P(e, ["className", "component", "style", "sx"]);
        let { systemStyles: f, rest: y } = (0, i.x)(l);
        return n.createElement(
          o || "div",
          S(
            {
              ref: t,
              className: (function (e, t, r) {
                let n = (0, a.rZ)(),
                  { css: o, cx: i } = (0, p.Z)();
                return Array.isArray(e)
                  ? i(
                      r,
                      o(O(t, n)),
                      e.map((e) => o(w(e, n)))
                    )
                  : i(r, o(w(e, n)), o(O(t, n)));
              })(u, f, r),
              style: c,
            },
            y
          )
        );
      });
      A.displayName = "@mantine/core/Box";
      let $ = (0, o.F)(A);
    },
    11250: function (e, t, r) {
      r.d(t, {
        x: function () {
          return c;
        },
      });
      var n = r(58790),
        o = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable,
        p = (e, t) => {
          var r = {};
          for (var n in e) i.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && o)
            for (var n of o(e))
              0 > t.indexOf(n) && a.call(e, n) && (r[n] = e[n]);
          return r;
        };
      function c(e) {
        let {
            m: t,
            mx: r,
            my: o,
            mt: i,
            mb: a,
            ml: c,
            mr: u,
            p: l,
            px: f,
            py: y,
            pt: s,
            pb: d,
            pl: m,
            pr: b,
            bg: g,
            c: v,
            opacity: h,
            ff: O,
            fz: w,
            fw: j,
            lts: k,
            ta: z,
            lh: x,
            fs: E,
            tt: S,
            td: P,
            w: A,
            miw: $,
            maw: N,
            h: I,
            mih: R,
            mah: L,
            bgsz: T,
            bgp: B,
            bgr: Z,
            bga: M,
            pos: C,
            top: D,
            left: F,
            bottom: _,
            right: H,
            inset: U,
            display: W,
          } = e,
          Y = p(e, [
            "m",
            "mx",
            "my",
            "mt",
            "mb",
            "ml",
            "mr",
            "p",
            "px",
            "py",
            "pt",
            "pb",
            "pl",
            "pr",
            "bg",
            "c",
            "opacity",
            "ff",
            "fz",
            "fw",
            "lts",
            "ta",
            "lh",
            "fs",
            "tt",
            "td",
            "w",
            "miw",
            "maw",
            "h",
            "mih",
            "mah",
            "bgsz",
            "bgp",
            "bgr",
            "bga",
            "pos",
            "top",
            "left",
            "bottom",
            "right",
            "inset",
            "display",
          ]);
        return {
          systemStyles: (0, n.L)({
            m: t,
            mx: r,
            my: o,
            mt: i,
            mb: a,
            ml: c,
            mr: u,
            p: l,
            px: f,
            py: y,
            pt: s,
            pb: d,
            pl: m,
            pr: b,
            bg: g,
            c: v,
            opacity: h,
            ff: O,
            fz: w,
            fw: j,
            lts: k,
            ta: z,
            lh: x,
            fs: E,
            tt: S,
            td: P,
            w: A,
            miw: $,
            maw: N,
            h: I,
            mih: R,
            mah: L,
            bgsz: T,
            bgp: B,
            bgr: Z,
            bga: M,
            pos: C,
            top: D,
            left: F,
            bottom: _,
            right: H,
            inset: U,
            display: W,
          }),
          rest: Y,
        };
      }
    },
    87163: function (e, t, r) {
      r.d(t, {
        k: function () {
          return E;
        },
      });
      var n = r(2265),
        o = r(7213),
        i = r(73303),
        a = r(57486),
        p = Object.defineProperty,
        c = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? p(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        d = (e, t) => {
          for (var r in t || (t = {})) f.call(t, r) && s(e, r, t[r]);
          if (l) for (var r of l(t)) y.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => c(e, u(t)),
        b = (0, a.k)((e) => ({
          root: m(d(d({}, e.fn.focusStyles()), e.fn.fontStyles()), {
            cursor: "pointer",
            border: 0,
            padding: 0,
            appearance: "none",
            fontSize: e.fontSizes.md,
            backgroundColor: "transparent",
            textAlign: "left",
            color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
            textDecoration: "none",
            boxSizing: "border-box",
          }),
        })),
        g = r(15497),
        v = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        O = Object.prototype.hasOwnProperty,
        w = Object.prototype.propertyIsEnumerable,
        j = (e, t, r) =>
          t in e
            ? v(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        k = (e, t) => {
          for (var r in t || (t = {})) O.call(t, r) && j(e, r, t[r]);
          if (h) for (var r of h(t)) w.call(t, r) && j(e, r, t[r]);
          return e;
        },
        z = (e, t) => {
          var r = {};
          for (var n in e) O.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
          if (null != e && h)
            for (var n of h(e))
              0 > t.indexOf(n) && w.call(e, n) && (r[n] = e[n]);
          return r;
        };
      let x = (0, n.forwardRef)((e, t) => {
        let r = (0, o.N4)("UnstyledButton", {}, e),
          {
            className: i,
            component: a = "button",
            unstyled: p,
            variant: c,
          } = r,
          u = z(r, ["className", "component", "unstyled", "variant"]),
          { classes: l, cx: f } = b(null, {
            name: "UnstyledButton",
            unstyled: p,
            variant: c,
          });
        return n.createElement(
          g.x,
          k(
            {
              component: a,
              ref: t,
              className: f(l.root, i),
              type: "button" === a ? "button" : void 0,
            },
            u
          )
        );
      });
      x.displayName = "@mantine/core/UnstyledButton";
      let E = (0, i.F)(x);
    },
    20528: function (e, t, r) {
      r.d(t, {
        l: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e, t) {
        let r = (0, n.useRef)(!1);
        (0, n.useEffect)(
          () => () => {
            r.current = !1;
          },
          []
        ),
          (0, n.useEffect)(() => {
            if (r.current) return e();
            r.current = !0;
          }, t);
      }
    },
    39565: function (e, t, r) {
      r.d(t, {
        M: function () {
          return p;
        },
      });
      var n = r(2265),
        o = r(54080);
      let i = n["useId".toString()] || (() => void 0);
      var a = r(78567);
      function p(e) {
        let t = (function () {
            let e = i();
            return e ? `mantine-${e.replace(/:/g, "")}` : "";
          })(),
          [r, p] = (0, n.useState)(t);
        return ((0, o.Y)(() => {
          p((0, a.k)());
        }, []),
        "string" == typeof e)
          ? e
          : "undefined" == typeof window
          ? t
          : r;
      }
    },
    54080: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return o;
        },
      });
      var n = r(2265);
      let o = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
    },
    96159: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return a;
        },
        l: function () {
          return i;
        },
      });
      var n = r(2265),
        o = r(9255);
      function i(...e) {
        return (t) => {
          e.forEach((e) => (0, o.k)(e, t));
        };
      }
      function a(...e) {
        return (0, n.useCallback)(i(...e), e);
      }
    },
    98533: function (e, t, r) {
      r.d(t, {
        J: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e, t) {
        return (function (
          e,
          t,
          { getInitialValueInEffect: r } = { getInitialValueInEffect: !0 }
        ) {
          let [o, i] = (0, n.useState)(
              r
                ? t
                : "boolean" == typeof t
                ? t
                : !!("undefined" != typeof window && "matchMedia" in window) &&
                  window.matchMedia(e).matches
            ),
            a = (0, n.useRef)();
          return (
            (0, n.useEffect)(() => {
              if ("matchMedia" in window)
                return (
                  (a.current = window.matchMedia(e)),
                  i(a.current.matches),
                  (function (e, t) {
                    try {
                      return (
                        e.addEventListener("change", t),
                        () => e.removeEventListener("change", t)
                      );
                    } catch (r) {
                      return e.addListener(t), () => e.removeListener(t);
                    }
                  })(a.current, (e) => i(e.matches))
                );
            }, [e]),
            o
          );
        })("(prefers-reduced-motion: reduce)", e, t);
      }
    },
    9255: function (e, t, r) {
      r.d(t, {
        k: function () {
          return n;
        },
      });
      function n(e, t) {
        "function" == typeof e
          ? e(t)
          : "object" == typeof e &&
            null !== e &&
            "current" in e &&
            (e.current = t);
      }
    },
    78567: function (e, t, r) {
      r.d(t, {
        k: function () {
          return n;
        },
      });
      function n() {
        return `mantine-${Math.random().toString(36).slice(2, 11)}`;
      }
    },
    57486: function (e, t, r) {
      r.d(t, {
        k: function () {
          return s;
        },
      });
      var n = r(95551),
        o = r(7213),
        i = Object.defineProperty,
        a = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        u = (e, t, r) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        l = (e, t) => {
          for (var r in t || (t = {})) p.call(t, r) && u(e, r, t[r]);
          if (a) for (var r of a(t)) c.call(t, r) && u(e, r, t[r]);
          return e;
        };
      function f(e, t) {
        return (
          t &&
            Object.keys(t).forEach((r) => {
              e[r] ? (e[r] = l(l({}, e[r]), t[r])) : (e[r] = l({}, t[r]));
            }),
          e
        );
      }
      function y(e, t, r, n) {
        let o = (e) => ("function" == typeof e ? e(t, r || {}, n) : e || {});
        return Array.isArray(e)
          ? e.map((e) => o(e.styles)).reduce((e, t) => f(e, t), {})
          : o(e);
      }
      function s(e) {
        let t = "function" == typeof e ? e : () => e;
        return function (e, r) {
          let i = (0, o.rZ)(),
            a = (0, o.O2)(null == r ? void 0 : r.name),
            p = (0, o.T1)(),
            c = {
              variant: null == r ? void 0 : r.variant,
              size: null == r ? void 0 : r.size,
            },
            { css: u, cx: l } = (0, n.Z)(),
            s = t(i, e, c),
            d = y(null == r ? void 0 : r.styles, i, e, c),
            m = y(a, i, e, c),
            b = (function ({
              ctx: e,
              theme: t,
              params: r,
              variant: n,
              size: o,
            }) {
              return e.reduce(
                (e, i) => (
                  i.variants &&
                    n in i.variants &&
                    f(e, i.variants[n](t, r, { variant: n, size: o })),
                  i.sizes &&
                    o in i.sizes &&
                    f(e, i.sizes[o](t, r, { variant: n, size: o })),
                  e
                ),
                {}
              );
            })({
              ctx: a,
              theme: i,
              params: e,
              variant: null == r ? void 0 : r.variant,
              size: null == r ? void 0 : r.size,
            }),
            g = Object.fromEntries(
              Object.keys(s).map((e) => {
                let t = l(
                  { [u(s[e])]: !(null == r ? void 0 : r.unstyled) },
                  u(b[e]),
                  u(m[e]),
                  u(d[e])
                );
                return [e, t];
              })
            );
          return {
            classes: (function ({
              cx: e,
              classes: t,
              context: r,
              classNames: n,
              name: o,
              cache: i,
            }) {
              let a = r.reduce(
                (e, t) => (
                  Object.keys(t.classNames).forEach((r) => {
                    "string" != typeof e[r]
                      ? (e[r] = `${t.classNames[r]}`)
                      : (e[r] = `${e[r]} ${t.classNames[r]}`);
                  }),
                  e
                ),
                {}
              );
              return Object.keys(t).reduce(
                (r, p) => (
                  (r[p] = e(
                    t[p],
                    a[p],
                    null != n && n[p],
                    Array.isArray(o)
                      ? o
                          .filter(Boolean)
                          .map(
                            (e) =>
                              `${
                                (null == i ? void 0 : i.key) || "mantine"
                              }-${e}-${p}`
                          )
                          .join(" ")
                      : o
                      ? `${(null == i ? void 0 : i.key) || "mantine"}-${o}-${p}`
                      : null
                  )),
                  r
                ),
                {}
              );
            })({
              cx: l,
              classes: g,
              context: a,
              classNames: null == r ? void 0 : r.classNames,
              name: null == r ? void 0 : r.name,
              cache: p,
            }),
            cx: l,
            theme: i,
          };
        };
      }
    },
    95551: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return b;
        },
      });
      var n = r(54365),
        o = r(70904),
        i = r(32820),
        a = r(2265);
      let p = (0, r(78242).Z)({ key: "mantine", prepend: !0 });
      var c = r(7213),
        u = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        y = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? u(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        d = (e, t) => {
          for (var r in t || (t = {})) f.call(t, r) && s(e, r, t[r]);
          if (l) for (var r of l(t)) y.call(t, r) && s(e, r, t[r]);
          return e;
        };
      let { cssFactory: m } = {
        cssFactory: function (e) {
          let { cache: t } = e,
            r = (...e) => {
              let { ref: r, args: n } = (function (e) {
                  let t;
                  if (1 !== e.length) return { args: e, ref: t };
                  let [r] = e;
                  if (!(r instanceof Object) || !("ref" in r))
                    return { args: e, ref: t };
                  t = r.ref;
                  let n = d({}, r);
                  return delete n.ref, { args: [n], ref: t };
                })(e),
                a = (0, o.O)(n, t.registered);
              return (
                (0, i.My)(t, a, !1),
                `${t.key}-${a.name}${void 0 === r ? "" : ` ${r}`}`
              );
            };
          return {
            css: r,
            cx: (...e) =>
              (function (e, t, r) {
                let n = [],
                  o = (0, i.fp)(e, n, r);
                return n.length < 2 ? r : o + t(n);
              })(t.registered, r, (0, n.Z)(e)),
          };
        },
      };
      function b() {
        let e = (0, c.T1)() || p;
        return (function (e, t) {
          let r = (0, a.useRef)();
          return (
            (!r.current ||
              t.length !== r.current.prevDeps.length ||
              r.current.prevDeps.map((e, r) => e === t[r]).indexOf(!1) >= 0) &&
              (r.current = { v: e(), prevDeps: [...t] }),
            r.current.v
          );
        })(() => m({ cache: e }), [e]);
      }
    },
    73303: function (e, t, r) {
      r.d(t, {
        F: function () {
          return n;
        },
      });
      function n(e) {
        return e;
      }
    },
    32393: function (e, t, r) {
      r.d(t, {
        R: function () {
          return o;
        },
      });
      var n = r(2265);
      function o(e) {
        let t = (0, n.createContext)(null);
        return [
          ({ children: e, value: r }) =>
            n.createElement(t.Provider, { value: r }, e),
          () => {
            let r = (0, n.useContext)(t);
            if (null === r) throw Error(e);
            return r;
          },
        ];
      }
    },
    54365: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      function n() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
    },
    27648: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(72972),
        o = r.n(n);
    },
  },
]);
