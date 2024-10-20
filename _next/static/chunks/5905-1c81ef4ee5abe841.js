(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5905],
  {
    40257: function (e, t, r) {
      "use strict";
      var n, o;
      e.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (o = r.g.process) ? void 0 : o.env)
          ? r.g.process
          : r(44227);
    },
    44227: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                r,
                n,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function l() {
                throw Error("clearTimeout has not been defined");
              }
              function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (r) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : l;
                } catch (e) {
                  r = l;
                }
              })();
              var s = [],
                c = !1,
                u = -1;
              function d() {
                c &&
                  n &&
                  ((c = !1),
                  n.length ? (s = n.concat(s)) : (u = -1),
                  s.length && f());
              }
              function f() {
                if (!c) {
                  var e = a(d);
                  c = !0;
                  for (var t = s.length; t; ) {
                    for (n = s, s = []; ++u < t; ) n && n[u].run();
                    (u = -1), (t = s.length);
                  }
                  (n = null),
                    (c = !1),
                    (function (e) {
                      if (r === clearTimeout) return clearTimeout(e);
                      if ((r === l || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(e);
                      try {
                        r(e);
                      } catch (t) {
                        try {
                          return r.call(null, e);
                        } catch (t) {
                          return r.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function p(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                s.push(new p(e, t)), 1 !== s.length || c || a(f);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = m),
                (o.addListener = m),
                (o.once = m),
                (o.off = m),
                (o.removeListener = m),
                (o.removeAllListeners = m),
                (o.emit = m),
                (o.prependListener = m),
                (o.prependOnceListener = m),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { exports: {} }),
            l = !0;
          try {
            t[e](i, i.exports, n), (l = !1);
          } finally {
            l && delete r[e];
          }
          return i.exports;
        }
        n.ab = "//";
        var o = n(229);
        e.exports = o;
      })();
    },
    25905: function (e, t, r) {
      "use strict";
      r.d(t, {
        e: function () {
          return rd;
        },
      });
      var n,
        o,
        i,
        l,
        a,
        s = r(2265);
      let c = {},
        u = 0,
        d = !1,
        f = null,
        p = null,
        m = "undefined" != typeof document ? s.useLayoutEffect : () => {},
        g = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        b = s.createContext(g),
        v = s.createContext(!1),
        h = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        y = new WeakMap(),
        w =
          "function" == typeof s.useId
            ? function (e) {
                let t = s.useId(),
                  [r] = (0, s.useState)(T()),
                  n = r ? "react-aria" : `react-aria${g.prefix}`;
                return e || `${n}-${t}`;
              }
            : function (e) {
                let t = (0, s.useContext)(b);
                t !== g ||
                  h ||
                  console.warn(
                    "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
                  );
                let r = (function (e = !1) {
                    let t = (0, s.useContext)(b),
                      r = (0, s.useRef)(null);
                    if (null === r.current && !e) {
                      var n, o;
                      let e =
                        null ===
                          (o =
                            s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                        void 0 === o
                          ? void 0
                          : null === (n = o.ReactCurrentOwner) || void 0 === n
                          ? void 0
                          : n.current;
                      if (e) {
                        let r = y.get(e);
                        null == r
                          ? y.set(e, { id: t.current, state: e.memoizedState })
                          : e.memoizedState !== r.state &&
                            ((t.current = r.id), y.delete(e));
                      }
                      r.current = ++t.current;
                    }
                    return r.current;
                  })(!!e),
                  n = `react-aria${t.prefix}`;
                return e || `${n}-${r}`;
              };
      function x() {
        return !1;
      }
      function E() {
        return !0;
      }
      function k(e) {
        return () => {};
      }
      function T() {
        return "function" == typeof s.useSyncExternalStore
          ? s.useSyncExternalStore(k, x, E)
          : (0, s.useContext)(v);
      }
      let L = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        C = new Map();
      var P = function () {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
      function M(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let r of e) "function" == typeof r && r(...t);
                  };
                })(r, o))
              : ("className" === e || "UNSAFE_className" === e) &&
                "string" == typeof r &&
                "string" == typeof o
              ? (t[e] = P(r, o))
              : "id" === e && r && o
              ? (t.id = (function (e, t) {
                  if (e === t) return e;
                  let r = C.get(e);
                  if (r) return r(t), t;
                  let n = C.get(t);
                  return n ? (n(e), e) : t;
                })(r, o))
              : (t[e] = void 0 !== o ? o : r);
          }
        }
        return t;
      }
      function O(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          ((null === (t = window.navigator.userAgentData) || void 0 === t
            ? void 0
            : t.brands.some((t) => e.test(t.brand))) ||
            e.test(window.navigator.userAgent))
        );
      }
      let S = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        z = (e) =>
          e && "window" in e && e.window === e ? e : S(e).defaultView || window,
        R = null,
        j = new Set(),
        A = new Map(),
        N = !1,
        D = !1;
      function I(e, t) {
        for (let r of j) r(e, t);
      }
      function H(e) {
        var t, r;
        (N = !0),
          e.metaKey ||
            ((t = /^Mac/i),
            !(
              "undefined" != typeof window &&
              null != window.navigator &&
              t.test(
                (null === (r = window.navigator.userAgentData) || void 0 === r
                  ? void 0
                  : r.platform) || window.navigator.platform
              )
            ) && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((R = "keyboard"), I("keyboard", e));
      }
      function _(e) {
        (R = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((N = !0), I("pointer", e));
      }
      function F(e) {
        ((0 === e.mozInputSource && e.isTrusted) ||
          (O(/Android/i) && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)) &&
          ((N = !0), (R = "virtual"));
      }
      function W(e) {
        e.target !== window &&
          e.target !== document &&
          (N || D || ((R = "virtual"), I("virtual", e)), (N = !1), (D = !1));
      }
      function $() {
        (N = !1), (D = !0);
      }
      function B(e) {
        if ("undefined" == typeof window || A.get(z(e))) return;
        let t = z(e),
          r = S(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (N = !0), n.apply(this, arguments);
        }),
          r.addEventListener("keydown", H, !0),
          r.addEventListener("keyup", H, !0),
          r.addEventListener("click", F, !0),
          t.addEventListener("focus", W, !0),
          t.addEventListener("blur", $, !1),
          "undefined" != typeof PointerEvent
            ? (r.addEventListener("pointerdown", _, !0),
              r.addEventListener("pointermove", _, !0),
              r.addEventListener("pointerup", _, !0))
            : (r.addEventListener("mousedown", _, !0),
              r.addEventListener("mousemove", _, !0),
              r.addEventListener("mouseup", _, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              V(e);
            },
            { once: !0 }
          ),
          A.set(t, { focus: n });
      }
      let V = (e, t) => {
        let r = z(e),
          n = S(e);
        t && n.removeEventListener("DOMContentLoaded", t),
          A.has(r) &&
            ((r.HTMLElement.prototype.focus = A.get(r).focus),
            n.removeEventListener("keydown", H, !0),
            n.removeEventListener("keyup", H, !0),
            n.removeEventListener("click", F, !0),
            r.removeEventListener("focus", W, !0),
            r.removeEventListener("blur", $, !1),
            "undefined" != typeof PointerEvent
              ? (n.removeEventListener("pointerdown", _, !0),
                n.removeEventListener("pointermove", _, !0),
                n.removeEventListener("pointerup", _, !0))
              : (n.removeEventListener("mousedown", _, !0),
                n.removeEventListener("mousemove", _, !0),
                n.removeEventListener("mouseup", _, !0)),
            A.delete(r));
      };
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let r = S(void 0);
          "loading" !== r.readyState
            ? B(void 0)
            : ((t = () => {
                B(void 0);
              }),
              r.addEventListener("DOMContentLoaded", t)),
            () => V(e, t);
        })();
      let G = !1,
        Y = 0;
      function K() {
        (G = !0),
          setTimeout(() => {
            G = !1;
          }, 50);
      }
      function U(e) {
        "touch" === e.pointerType && K();
      }
      function X() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", U)
              : document.addEventListener("touchend", K),
            Y++,
            () => {
              --Y > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", U)
                  : document.removeEventListener("touchend", K));
            }
          );
      }
      function q(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: n,
            isDisabled: o,
          } = e,
          [i, l] = (0, s.useState)(!1),
          a = (0, s.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, s.useEffect)(X, []);
        let { hoverProps: c, triggerHoverEnd: u } = (0, s.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((a.pointerType = n),
                o ||
                  "touch" === n ||
                  a.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              a.isHovered = !0;
              let i = e.currentTarget;
              (a.target = i),
                t && t({ type: "hoverstart", target: i, pointerType: n }),
                r && r(!0),
                l(!0);
            },
            i = (e, t) => {
              if (
                ((a.pointerType = ""),
                (a.target = null),
                "touch" === t || !a.isHovered)
              )
                return;
              a.isHovered = !1;
              let o = e.currentTarget;
              n && n({ type: "hoverend", target: o, pointerType: t }),
                r && r(!1),
                l(!1);
            },
            s = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((s.onPointerEnter = (t) => {
                  (G && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (s.onPointerLeave = (e) => {
                  !o &&
                    e.currentTarget.contains(e.target) &&
                    i(e, e.pointerType);
                }))
              : ((s.onTouchStart = () => {
                  a.ignoreEmulatedMouseEvents = !0;
                }),
                (s.onMouseEnter = (t) => {
                  a.ignoreEmulatedMouseEvents || G || e(t, "mouse"),
                    (a.ignoreEmulatedMouseEvents = !1);
                }),
                (s.onMouseLeave = (e) => {
                  !o && e.currentTarget.contains(e.target) && i(e, "mouse");
                })),
            { hoverProps: s, triggerHoverEnd: i }
          );
        }, [t, r, n, o, a]);
        return (
          (0, s.useEffect)(() => {
            o && u({ currentTarget: a.target }, a.pointerType);
          }, [o]),
          { hoverProps: c, isHovered: i }
        );
      }
      let J = new Map(),
        Q = new Set();
      function Z() {
        if ("undefined" == typeof window) return;
        function e(e) {
          return "propertyName" in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let n = J.get(r.target);
          if (
            n &&
            (n.delete(r.propertyName),
            0 === n.size &&
              (r.target.removeEventListener("transitioncancel", t),
              J.delete(r.target)),
            0 === J.size)
          ) {
            for (let e of Q) e();
            Q.clear();
          }
        };
        document.body.addEventListener("transitionrun", (r) => {
          if (!e(r) || !r.target) return;
          let n = J.get(r.target);
          n ||
            ((n = new Set()),
            J.set(r.target, n),
            r.target.addEventListener("transitioncancel", t, { once: !0 })),
            n.add(r.propertyName);
        }),
          document.body.addEventListener("transitionend", t);
      }
      function ee(e) {
        if (
          (function () {
            if (null == et) {
              et = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (et = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return et;
          })()
        )
          e.focus({ preventScroll: !0 });
        else {
          let t = (function (e) {
            let t = e.parentNode,
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n; )
              (t.offsetHeight < t.scrollHeight ||
                t.offsetWidth < t.scrollWidth) &&
                r.push({
                  element: t,
                  scrollTop: t.scrollTop,
                  scrollLeft: t.scrollLeft,
                }),
                (t = t.parentNode);
            return (
              n instanceof HTMLElement &&
                r.push({
                  element: n,
                  scrollTop: n.scrollTop,
                  scrollLeft: n.scrollLeft,
                }),
              r
            );
          })(e);
          e.focus(),
            (function (e) {
              for (let { element: t, scrollTop: r, scrollLeft: n } of e)
                (t.scrollTop = r), (t.scrollLeft = n);
            })(t);
        }
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? Z()
          : document.addEventListener("DOMContentLoaded", Z));
      let et = null;
      function er(e) {
        let t = (0, s.useRef)(null);
        return (
          m(() => {
            t.current = e;
          }, [e]),
          (0, s.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
      class en {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function eo(e) {
        let t = (0, s.useRef)({ isFocused: !1, observer: null });
        m(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let r = er((t) => {
          null == e || e(t);
        });
        return (0, s.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target;
              n.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    n.disabled && r(new en("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let r =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: r })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: r,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
      function ei(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && r.stopPropagation();
        };
      }
      let el = s.createContext(null),
        ea = new Set(["id"]),
        es = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        ec = new Set([
          "href",
          "hrefLang",
          "target",
          "rel",
          "download",
          "ping",
          "referrerPolicy",
        ]),
        eu = /^(data-.*)$/;
      function ed(e, t = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(e, t), r);
      }
      let ef = { top: "top", bottom: "top", left: "left", right: "left" },
        ep = { top: "bottom", bottom: "top", left: "right", right: "left" },
        em = { top: "left", left: "top" },
        eg = { top: "height", left: "width" },
        eb = { width: "totalWidth", height: "totalHeight" },
        ev = {},
        eh = "undefined" != typeof document && window.visualViewport;
      function ey(e) {
        let t = 0,
          r = 0,
          n = 0,
          o = 0,
          i = 0,
          l = 0,
          a = {},
          s = (null == eh ? void 0 : eh.scale) > 1;
        if ("BODY" === e.tagName) {
          var c, u;
          let s = document.documentElement;
          (n = s.clientWidth),
            (o = s.clientHeight),
            (t =
              null !== (c = null == eh ? void 0 : eh.width) && void 0 !== c
                ? c
                : n),
            (r =
              null !== (u = null == eh ? void 0 : eh.height) && void 0 !== u
                ? u
                : o),
            (a.top = s.scrollTop || e.scrollTop),
            (a.left = s.scrollLeft || e.scrollLeft),
            eh && ((i = eh.offsetTop), (l = eh.offsetLeft));
        } else
          ({ width: t, height: r, top: i, left: l } = eT(e)),
            (a.top = e.scrollTop),
            (a.left = e.scrollLeft),
            (n = t),
            (o = r);
        return (
          O(/AppleWebKit/i) &&
            !O(/Chrome/i) &&
            ("BODY" === e.tagName || "HTML" === e.tagName) &&
            s &&
            ((a.top = 0), (a.left = 0), (i = eh.pageTop), (l = eh.pageLeft)),
          {
            width: t,
            height: r,
            totalWidth: n,
            totalHeight: o,
            scroll: a,
            top: i,
            left: l,
          }
        );
      }
      function ew(e, t, r, n, o, i, l) {
        let a = o.scroll[e],
          s = n[eg[e]],
          c = n.scroll[ef[e]] + i,
          u = s + n.scroll[ef[e]] - i,
          d = t - a + l[e] - n[ef[e]],
          f = t - a + r + l[e] - n[ef[e]];
        return d < c ? c - d : f > u ? Math.max(u - f, c - d) : 0;
      }
      function ex(e) {
        if (ev[e]) return ev[e];
        let [t, r] = e.split(" "),
          n = ef[t] || "right",
          o = em[n];
        ef[r] || (r = "center");
        let i = eg[n],
          l = eg[o];
        return (
          (ev[e] = {
            placement: t,
            crossPlacement: r,
            axis: n,
            crossAxis: o,
            size: i,
            crossSize: l,
          }),
          ev[e]
        );
      }
      function eE(e, t, r, n, o, i, l, a, s, c) {
        let {
            placement: u,
            crossPlacement: d,
            axis: f,
            crossAxis: p,
            size: m,
            crossSize: g,
          } = n,
          b = {};
        (b[p] = e[p]),
          "center" === d
            ? (b[p] += (e[g] - r[g]) / 2)
            : d !== p && (b[p] += e[g] - r[g]),
          (b[p] += i);
        let v = e[p] - r[g] + s + c,
          h = e[p] + e[g] - s - c;
        if (((b[p] = ed(b[p], v, h)), u === f)) {
          let r = a ? l[m] : t[eb[m]];
          b[ep[f]] = Math.floor(r - e[f] + o);
        } else b[f] = Math.floor(e[f] + e[m] + o);
        return b;
      }
      function ek(e, t, r, n, o, i) {
        let { placement: l, axis: a, size: s } = i;
        return l === a
          ? Math.max(0, r[a] - e[a] - e.scroll[a] + t[a] - n[a] - n[ep[a]] - o)
          : Math.max(
              0,
              e[s] +
                e[a] +
                e.scroll[a] -
                t[a] -
                r[a] -
                r[s] -
                n[a] -
                n[ep[a]] -
                o
            );
      }
      function eT(e) {
        let {
            top: t,
            left: r,
            width: n,
            height: o,
          } = e.getBoundingClientRect(),
          {
            scrollTop: i,
            scrollLeft: l,
            clientTop: a,
            clientLeft: s,
          } = document.documentElement;
        return { top: t + i - a, left: r + l - s, width: n, height: o };
      }
      function eL(e, t) {
        let r,
          n = window.getComputedStyle(e);
        if ("fixed" === n.position) {
          let {
            top: t,
            left: n,
            width: o,
            height: i,
          } = e.getBoundingClientRect();
          r = { top: t, left: n, width: o, height: i };
        } else {
          r = eT(e);
          let n = eT(t),
            o = window.getComputedStyle(t);
          (n.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop),
            (n.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft),
            (r.top -= n.top),
            (r.left -= n.left);
        }
        return (
          (r.top -= parseInt(n.marginTop, 10) || 0),
          (r.left -= parseInt(n.marginLeft, 10) || 0),
          r
        );
      }
      function eC(e) {
        let t = window.getComputedStyle(e);
        return (
          "none" !== t.transform ||
          /transform|perspective/.test(t.willChange) ||
          "none" !== t.filter ||
          "paint" === t.contain ||
          ("backdropFilter" in t && "none" !== t.backdropFilter) ||
          ("WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter)
        );
      }
      let eP = new WeakMap(),
        eM = new Set([
          "Arab",
          "Syrc",
          "Samr",
          "Mand",
          "Thaa",
          "Mend",
          "Nkoo",
          "Adlm",
          "Rohg",
          "Hebr",
        ]),
        eO = new Set([
          "ae",
          "ar",
          "arc",
          "bcc",
          "bqi",
          "ckb",
          "dv",
          "fa",
          "glk",
          "he",
          "ku",
          "mzn",
          "nqo",
          "pnb",
          "ps",
          "sd",
          "ug",
          "ur",
          "yi",
        ]),
        eS = Symbol.for("react-aria.i18n.locale");
      function ez() {
        let e =
          ("undefined" != typeof window && window[eS]) ||
          ("undefined" != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch (t) {
          e = "en-US";
        }
        return {
          locale: e,
          direction: !(function (e) {
            if (Intl.Locale) {
              let t = new Intl.Locale(e).maximize(),
                r =
                  "function" == typeof t.getTextInfo
                    ? t.getTextInfo()
                    : t.textInfo;
              if (r) return "rtl" === r.direction;
              if (t.script) return eM.has(t.script);
            }
            let t = e.split("-")[0];
            return eO.has(t);
          })(e)
            ? "ltr"
            : "rtl",
        };
      }
      let eR = ez(),
        ej = new Set();
      function eA() {
        for (let e of ((eR = ez()), ej)) e(eR);
      }
      let eN = s.createContext(null),
        eD = "undefined" != typeof document && window.visualViewport,
        eI = [
          "input:not([disabled]):not([type=hidden])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[contenteditable]",
        ];
      function eH(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      eI.join(":not([hidden]),"),
        eI.push('[tabindex]:not([tabindex="-1"]):not([disabled])'),
        eI.join(':not([hidden]):not([tabindex="-1"]),');
      class e_ {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new eF({ scopeRef: e });
          n.addChild(o),
            (o.parent = n),
            this.fastMap.set(e, o),
            r && (o.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              eH(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r &&
            (r.removeChild(t),
            n.size > 0 && n.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new e_();
          for (let n of this.traverse())
            r.addTreeNode(
              n.scopeRef,
              null !==
                (t =
                  null === (e = n.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              n.nodeToRestore
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new eF({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class eF {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      let eW = new e_();
      function e$(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
          let t = e.target.ownerDocument;
          if (
            !t ||
            !t.documentElement.contains(e.target) ||
            e.target.closest("[data-react-aria-top-layer]")
          )
            return !1;
        }
        return t.current && !t.current.contains(e.target);
      }
      let eB = [];
      var [eV, eG] = (function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            {
              strict: t = !0,
              errorMessage:
                r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
              name: n,
            } = e,
            o = s.createContext(void 0);
          return (
            (o.displayName = n),
            [
              o.Provider,
              function e() {
                var n;
                let i = s.useContext(o);
                if (!i && t) {
                  let t = Error(r);
                  throw (
                    ((t.name = "ContextError"),
                    null == (n = Error.captureStackTrace) ||
                      n.call(Error, t, e),
                    t)
                  );
                }
                return i;
              },
              o,
            ]
          );
        })({ name: "ProviderContext", strict: !1 }),
        eY = (e, t, r = !0) => {
          if (!t) return [e, {}];
          let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
          return r
            ? [
                Object.keys(e)
                  .filter((e) => !t.includes(e))
                  .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
                n,
              ]
            : [e, n];
        },
        eK = ["small", "medium", "large"],
        eU = {
          theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: eK,
            borderRadius: eK,
          },
          classGroups: {
            shadow: [{ shadow: eK }],
            "font-size": [{ text: ["tiny", ...eK] }],
            "bg-image": ["bg-stripe-gradient"],
          },
        },
        eX = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        eq = (e) => !e || "object" != typeof e || 0 === Object.keys(e).length,
        eJ = (e, t) => JSON.stringify(e) === JSON.stringify(t);
      function eQ(e) {
        let t = [];
        return (
          (function e(t, r) {
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, r) : r.push(t);
            });
          })(e, t),
          t
        );
      }
      var eZ = (...e) => eQ(e).filter(Boolean),
        e0 = (e, t) => {
          let r = {},
            n = Object.keys(e),
            o = Object.keys(t);
          for (let i of n)
            if (o.includes(i)) {
              let n = e[i],
                o = t[i];
              "object" == typeof n && "object" == typeof o
                ? (r[i] = e0(n, o))
                : Array.isArray(n) || Array.isArray(o)
                ? (r[i] = eZ(o, n))
                : (r[i] = o + " " + n);
            } else r[i] = e[i];
          for (let e of o) n.includes(e) || (r[e] = t[e]);
          return r;
        },
        e1 = (e) =>
          e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
        e5 = /^\[(.+)\]$/;
      function e2(e, t) {
        var r = e;
        return (
          t.split("-").forEach(function (e) {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      var e4 = /\s+/;
      function e3() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              if ("string" == typeof t) return t;
              for (var r, n = "", o = 0; o < t.length; o++)
                t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function e7() {
        for (var e, t, r, n = arguments.length, o = Array(n), i = 0; i < n; i++)
          o[i] = arguments[i];
        var l = function (n) {
          var i = o[0];
          return (
            (t = (e = (function (e) {
              var t, r, n, o, i, l, a, s, c, u, d;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    r = new Map(),
                    n = new Map();
                  function o(o, i) {
                    r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
                  }
                  return {
                    get: function (e) {
                      var t = r.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = n.get(e))
                        ? (o(e, t), t)
                        : void 0;
                    },
                    set: function (e, t) {
                      r.has(e) ? r.set(e, t) : o(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((r = 1 === (t = e.separator || ":").length),
                  (n = t[0]),
                  (o = t.length),
                  function (e) {
                    for (
                      var i, l = [], a = 0, s = 0, c = 0;
                      c < e.length;
                      c++
                    ) {
                      var u = e[c];
                      if (0 === a) {
                        if (u === n && (r || e.slice(c, c + o) === t)) {
                          l.push(e.slice(s, c)), (s = c + o);
                          continue;
                        }
                        if ("/" === u) {
                          i = c;
                          continue;
                        }
                      }
                      "[" === u ? a++ : "]" === u && a--;
                    }
                    var d = 0 === l.length ? e : e.substring(s),
                      f = d.startsWith("!"),
                      p = f ? d.substring(1) : d;
                    return {
                      modifiers: l,
                      hasImportantModifier: f,
                      baseClassName: p,
                      maybePostfixModifierPosition: i && i > s ? i - s : void 0,
                    };
                  }),
                ...((s = e.theme),
                (c = e.prefix),
                (u = { nextPart: new Map(), validators: [] }),
                ((d = Object.entries(e.classGroups)),
                c
                  ? d.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? c + e
                            : "object" == typeof e
                            ? Object.fromEntries(
                                Object.entries(e).map(function (e) {
                                  return [c + e[0], e[1]];
                                })
                              )
                            : e;
                        }),
                      ];
                    })
                  : d).forEach(function (e) {
                  var t = e[0];
                  (function e(t, r, n, o) {
                    t.forEach(function (t) {
                      if ("string" == typeof t) {
                        ("" === t ? r : e2(r, t)).classGroupId = n;
                        return;
                      }
                      if ("function" == typeof t) {
                        if (t.isThemeGetter) {
                          e(t(o), r, n, o);
                          return;
                        }
                        r.validators.push({ validator: t, classGroupId: n });
                        return;
                      }
                      Object.entries(t).forEach(function (t) {
                        var i = t[0];
                        e(t[1], e2(r, i), n, o);
                      });
                    });
                  })(e[1], u, t, s);
                }),
                (i = e.conflictingClassGroups),
                (a =
                  void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l),
                {
                  getClassGroupId: function (e) {
                    var t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        var n = t[0],
                          o = r.nextPart.get(n),
                          i = o ? e(t.slice(1), o) : void 0;
                        if (i) return i;
                        if (0 !== r.validators.length) {
                          var l = t.join("-");
                          return r.validators.find(function (e) {
                            return (0, e.validator)(l);
                          })?.classGroupId;
                        }
                      })(t, u) ||
                        (function (e) {
                          if (e5.test(e)) {
                            var t = e5.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var r = i[e] || [];
                    return t && a[e] ? [].concat(r, a[e]) : r;
                  },
                }),
              };
            })(
              o.slice(1).reduce(function (e, t) {
                return t(e);
              }, i())
            )).cache.get),
            (r = e.cache.set),
            (l = a),
            a(n)
          );
        };
        function a(n) {
          var o,
            i,
            l,
            a,
            s,
            c = t(n);
          if (c) return c;
          var u =
            ((i = (o = e).splitModifiers),
            (l = o.getClassGroupId),
            (a = o.getConflictingClassGroupIds),
            (s = new Set()),
            n
              .trim()
              .split(e4)
              .map(function (e) {
                var t = i(e),
                  r = t.modifiers,
                  n = t.hasImportantModifier,
                  o = t.baseClassName,
                  a = t.maybePostfixModifierPosition,
                  s = l(a ? o.substring(0, a) : o),
                  c = !!a;
                if (!s) {
                  if (!a || !(s = l(o)))
                    return { isTailwindClass: !1, originalClassName: e };
                  c = !1;
                }
                var u = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                        : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? u + "!" : u,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: c,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  n = e.hasPostfixModifier,
                  o = t + r;
                return (
                  !s.has(o) &&
                  (s.add(o),
                  a(r, n).forEach(function (e) {
                    return s.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return r(n, u), u;
        }
        return function () {
          return l(e3.apply(null, arguments));
        };
      }
      function e8(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var e9 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        e6 = /^\d+\/\d+$/,
        te = new Set(["px", "full", "screen"]),
        tt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        tr =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        tn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function to(e) {
        return tu(e) || te.has(e) || e6.test(e) || ti(e);
      }
      function ti(e) {
        return tv(e, "length", th);
      }
      function tl(e) {
        return tv(e, "size", ty);
      }
      function ta(e) {
        return tv(e, "position", ty);
      }
      function ts(e) {
        return tv(e, "url", tw);
      }
      function tc(e) {
        return tv(e, "number", tu);
      }
      function tu(e) {
        return !Number.isNaN(Number(e));
      }
      function td(e) {
        return e.endsWith("%") && tu(e.slice(0, -1));
      }
      function tf(e) {
        return tx(e) || tv(e, "number", tx);
      }
      function tp(e) {
        return e9.test(e);
      }
      function tm() {
        return !0;
      }
      function tg(e) {
        return tt.test(e);
      }
      function tb(e) {
        return tv(e, "", tE);
      }
      function tv(e, t, r) {
        var n = e9.exec(e);
        return !!n && (n[1] ? n[1] === t : r(n[2]));
      }
      function th(e) {
        return tr.test(e);
      }
      function ty() {
        return !1;
      }
      function tw(e) {
        return e.startsWith("url(");
      }
      function tx(e) {
        return Number.isInteger(Number(e));
      }
      function tE(e) {
        return tn.test(e);
      }
      function tk() {
        var e = e8("colors"),
          t = e8("spacing"),
          r = e8("blur"),
          n = e8("brightness"),
          o = e8("borderColor"),
          i = e8("borderRadius"),
          l = e8("borderSpacing"),
          a = e8("borderWidth"),
          s = e8("contrast"),
          c = e8("grayscale"),
          u = e8("hueRotate"),
          d = e8("invert"),
          f = e8("gap"),
          p = e8("gradientColorStops"),
          m = e8("gradientColorStopPositions"),
          g = e8("inset"),
          b = e8("margin"),
          v = e8("opacity"),
          h = e8("padding"),
          y = e8("saturate"),
          w = e8("scale"),
          x = e8("sepia"),
          E = e8("skew"),
          k = e8("space"),
          T = e8("translate"),
          L = function () {
            return ["auto", "contain", "none"];
          },
          C = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"];
          },
          P = function () {
            return ["auto", tp, t];
          },
          M = function () {
            return [tp, t];
          },
          O = function () {
            return ["", to];
          },
          S = function () {
            return ["auto", tu, tp];
          },
          z = function () {
            return [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ];
          },
          R = function () {
            return ["solid", "dashed", "dotted", "double", "none"];
          },
          j = function () {
            return [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ];
          },
          A = function () {
            return [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ];
          },
          N = function () {
            return ["", "0", tp];
          },
          D = function () {
            return [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ];
          },
          I = function () {
            return [tu, tc];
          },
          H = function () {
            return [tu, tp];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [tm],
            spacing: [to],
            blur: ["none", "", tg, tp],
            brightness: I(),
            borderColor: [e],
            borderRadius: ["none", "", "full", tg, tp],
            borderSpacing: M(),
            borderWidth: O(),
            contrast: I(),
            grayscale: N(),
            hueRotate: H(),
            invert: N(),
            gap: M(),
            gradientColorStops: [e],
            gradientColorStopPositions: [td, ti],
            inset: P(),
            margin: P(),
            opacity: I(),
            padding: M(),
            saturate: I(),
            scale: I(),
            sepia: N(),
            skew: H(),
            space: M(),
            translate: M(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", tp] }],
            container: ["container"],
            columns: [{ columns: [tg] }],
            "break-after": [{ "break-after": D() }],
            "break-before": [{ "break-before": D() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [].concat(z(), [tp]) }],
            overflow: [{ overflow: C() }],
            "overflow-x": [{ "overflow-x": C() }],
            "overflow-y": [{ "overflow-y": C() }],
            overscroll: [{ overscroll: L() }],
            "overscroll-x": [{ "overscroll-x": L() }],
            "overscroll-y": [{ "overscroll-y": L() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", tf] }],
            basis: [{ basis: P() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", tp] }],
            grow: [{ grow: N() }],
            shrink: [{ shrink: N() }],
            order: [{ order: ["first", "last", "none", tf] }],
            "grid-cols": [{ "grid-cols": [tm] }],
            "col-start-end": [{ col: ["auto", { span: ["full", tf] }, tp] }],
            "col-start": [{ "col-start": S() }],
            "col-end": [{ "col-end": S() }],
            "grid-rows": [{ "grid-rows": [tm] }],
            "row-start-end": [{ row: ["auto", { span: [tf] }, tp] }],
            "row-start": [{ "row-start": S() }],
            "row-end": [{ "row-end": S() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", tp] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", tp] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal"].concat(A()) }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              { content: ["normal"].concat(A(), ["baseline"]) },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              { "place-content": [].concat(A(), ["baseline"]) },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [h] }],
            px: [{ px: [h] }],
            py: [{ py: [h] }],
            ps: [{ ps: [h] }],
            pe: [{ pe: [h] }],
            pt: [{ pt: [h] }],
            pr: [{ pr: [h] }],
            pb: [{ pb: [h] }],
            pl: [{ pl: [h] }],
            m: [{ m: [b] }],
            mx: [{ mx: [b] }],
            my: [{ my: [b] }],
            ms: [{ ms: [b] }],
            me: [{ me: [b] }],
            mt: [{ mt: [b] }],
            mr: [{ mr: [b] }],
            mb: [{ mb: [b] }],
            ml: [{ ml: [b] }],
            "space-x": [{ "space-x": [k] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [k] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", tp, t] }],
            "min-w": [{ "min-w": ["min", "max", "fit", tp, to] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [tg] },
                  tg,
                  tp,
                ],
              },
            ],
            h: [{ h: [tp, t, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", tp, to] }],
            "max-h": [{ "max-h": [tp, t, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", tg, ti] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  tc,
                ],
              },
            ],
            "font-family": [{ font: [tm] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  tp,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", tu, tc] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  tp,
                  to,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", tp] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", tp] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [v] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [v] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [].concat(R(), ["wavy"]) }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", to] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", tp, to] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: M() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  tp,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", tp] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [v] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [].concat(z(), [ta]) }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", tl] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  ts,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [v] }],
            "border-style": [{ border: [].concat(R(), ["hidden"]) }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [v] }],
            "divide-style": [{ divide: R() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: [""].concat(R()) }],
            "outline-offset": [{ "outline-offset": [tp, to] }],
            "outline-w": [{ outline: [to] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: O() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [v] }],
            "ring-offset-w": [{ "ring-offset": [to] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", tg, tb] }],
            "shadow-color": [{ shadow: [tm] }],
            opacity: [{ opacity: [v] }],
            "mix-blend": [{ "mix-blend": j() }],
            "bg-blend": [{ "bg-blend": j() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [s] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", tg, tp] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [x] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [s] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [v] }],
            "backdrop-saturate": [{ "backdrop-saturate": [y] }],
            "backdrop-sepia": [{ "backdrop-sepia": [x] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [l] }],
            "border-spacing-x": [{ "border-spacing-x": [l] }],
            "border-spacing-y": [{ "border-spacing-y": [l] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  tp,
                ],
              },
            ],
            duration: [{ duration: H() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", tp] }],
            delay: [{ delay: H() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", tp] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [tf, tp] }],
            "translate-x": [{ "translate-x": [T] }],
            "translate-y": [{ "translate-y": [T] }],
            "skew-x": [{ "skew-x": [E] }],
            "skew-y": [{ "skew-y": [E] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  tp,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  tp,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": M() }],
            "scroll-mx": [{ "scroll-mx": M() }],
            "scroll-my": [{ "scroll-my": M() }],
            "scroll-ms": [{ "scroll-ms": M() }],
            "scroll-me": [{ "scroll-me": M() }],
            "scroll-mt": [{ "scroll-mt": M() }],
            "scroll-mr": [{ "scroll-mr": M() }],
            "scroll-mb": [{ "scroll-mb": M() }],
            "scroll-ml": [{ "scroll-ml": M() }],
            "scroll-p": [{ "scroll-p": M() }],
            "scroll-px": [{ "scroll-px": M() }],
            "scroll-py": [{ "scroll-py": M() }],
            "scroll-ps": [{ "scroll-ps": M() }],
            "scroll-pe": [{ "scroll-pe": M() }],
            "scroll-pt": [{ "scroll-pt": M() }],
            "scroll-pr": [{ "scroll-pr": M() }],
            "scroll-pb": [{ "scroll-pb": M() }],
            "scroll-pl": [{ "scroll-pl": M() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": ["auto", "scroll", "contents", "transform", tp],
              },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [to, tc] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      var tT = e7(tk),
        tL = Object.prototype.hasOwnProperty,
        tC = new Set(["string", "number", "boolean"]),
        tP = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        tM = (e) => e || void 0,
        tO = (...e) => tM(eQ(e).filter(Boolean).join(" ")),
        tS = null,
        tz = {},
        tR = !1,
        tj =
          (...e) =>
          (t) =>
            t.twMerge
              ? ((!tS || tR) &&
                  ((tR = !1),
                  (tS = eq(tz)
                    ? tT
                    : (function (e) {
                        for (
                          var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          r[n - 1] = arguments[n];
                        return "function" == typeof e
                          ? e7.apply(void 0, [tk, e].concat(r))
                          : e7.apply(
                              void 0,
                              [
                                function () {
                                  return (function (e, t) {
                                    for (var r in t)
                                      (function e(t, r, n) {
                                        if (
                                          !tL.call(t, r) ||
                                          tC.has(typeof n) ||
                                          null === n
                                        ) {
                                          t[r] = n;
                                          return;
                                        }
                                        if (
                                          Array.isArray(n) &&
                                          Array.isArray(t[r])
                                        ) {
                                          t[r] = t[r].concat(n);
                                          return;
                                        }
                                        if (
                                          "object" == typeof n &&
                                          "object" == typeof t[r]
                                        ) {
                                          if (null === t[r]) {
                                            t[r] = n;
                                            return;
                                          }
                                          for (var o in n) e(t[r], o, n[o]);
                                        }
                                      })(e, r, t[r]);
                                    return e;
                                  })(tk(), e);
                                },
                              ].concat(r)
                            );
                      })(tz))),
                tM(tS(tO(e))))
              : tO(e),
        tA = (e, t) => {
          for (let r in t)
            e.hasOwnProperty(r) ? (e[r] = tO(e[r], t[r])) : (e[r] = t[r]);
          return e;
        },
        tN = ((e, t) => {
          let {
              extend: r = null,
              slots: n = {},
              variants: o = {},
              compoundVariants: i = [],
              compoundSlots: l = [],
              defaultVariants: a = {},
            } = e,
            s = { ...tP, ...t },
            c =
              null != r && r.base
                ? tO(r.base, null == e ? void 0 : e.base)
                : null == e
                ? void 0
                : e.base,
            u =
              null != r && r.variants && !eq(r.variants)
                ? e0(o, r.variants)
                : o,
            d =
              null != r && r.defaultVariants && !eq(r.defaultVariants)
                ? { ...r.defaultVariants, ...a }
                : a;
          eq(s.twMergeConfig) ||
            eJ(s.twMergeConfig, tz) ||
            ((tR = !0), (tz = s.twMergeConfig));
          let f = eq(null == r ? void 0 : r.slots),
            p = eq(n)
              ? {}
              : {
                  base: tO(
                    null == e ? void 0 : e.base,
                    f && (null == r ? void 0 : r.base)
                  ),
                  ...n,
                },
            m = f
              ? p
              : tA(
                  { ...(null == r ? void 0 : r.slots) },
                  eq(p) ? { base: null == e ? void 0 : e.base } : p
                ),
            g = (e) => {
              if (eq(u) && eq(n) && f)
                return tj(
                  c,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className
                )(s);
              if (i && !Array.isArray(i))
                throw TypeError(
                  `The "compoundVariants" prop must be an array. Received: ${typeof i}`
                );
              if (l && !Array.isArray(l))
                throw TypeError(
                  `The "compoundSlots" prop must be an array. Received: ${typeof l}`
                );
              let t = (e, t, r = [], n) => {
                  let o = r;
                  if ("string" == typeof t)
                    o = o.concat(
                      e1(t)
                        .split(" ")
                        .map((t) => `${e}:${t}`)
                    );
                  else if (Array.isArray(t))
                    o = o.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                  else if ("object" == typeof t && "string" == typeof n) {
                    for (let r in t)
                      if (t.hasOwnProperty(r) && r === n) {
                        let i = t[r];
                        if (i && "string" == typeof i) {
                          let t = e1(i);
                          o[n]
                            ? (o[n] = o[n].concat(
                                t.split(" ").map((t) => `${e}:${t}`)
                              ))
                            : (o[n] = t.split(" ").map((t) => `${e}:${t}`));
                        } else
                          Array.isArray(i) &&
                            i.length > 0 &&
                            (o[n] = i.reduce(
                              (t, r) => t.concat(`${e}:${r}`),
                              []
                            ));
                      }
                  }
                  return o;
                },
                o = (r, n = u, o = null, i = null) => {
                  var l;
                  let a = n[r];
                  if (!a || eq(a)) return null;
                  let c =
                    null != (l = null == i ? void 0 : i[r])
                      ? l
                      : null == e
                      ? void 0
                      : e[r];
                  if (null === c) return null;
                  let f = eX(c),
                    p =
                      (Array.isArray(s.responsiveVariants) &&
                        s.responsiveVariants.length > 0) ||
                      !0 === s.responsiveVariants,
                    m = null == d ? void 0 : d[r],
                    g = [];
                  if ("object" == typeof f && p)
                    for (let [e, r] of Object.entries(f)) {
                      let n = a[r];
                      if ("initial" === e) {
                        m = r;
                        continue;
                      }
                      (Array.isArray(s.responsiveVariants) &&
                        !s.responsiveVariants.includes(e)) ||
                        (g = t(e, n, g, o));
                    }
                  let b = a[f] || a[eX(m)];
                  return "object" == typeof g && "string" == typeof o && g[o]
                    ? tA(g, b)
                    : g.length > 0
                    ? (g.push(b), g)
                    : b;
                },
                a = (e, t) => {
                  if (!u || "object" != typeof u) return null;
                  let r = [];
                  for (let n in u) {
                    let i = o(n, u, e, t),
                      l = "base" === e && "string" == typeof i ? i : i && i[e];
                    l && (r[r.length] = l);
                  }
                  return r;
                },
                p = {};
              for (let t in e) void 0 !== e[t] && (p[t] = e[t]);
              let g = (t, r) => {
                  var n;
                  let o =
                    "object" == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (n = e[t]) ? void 0 : n.initial }
                      : {};
                  return { ...d, ...p, ...o, ...r };
                },
                b = (e = [], t) => {
                  let r = [];
                  for (let { class: n, className: o, ...i } of e) {
                    let e = !0;
                    for (let [r, n] of Object.entries(i)) {
                      let o = g(r, t);
                      if (Array.isArray(n)) {
                        if (!n.includes(o[r])) {
                          e = !1;
                          break;
                        }
                      } else if (o[r] !== n) {
                        e = !1;
                        break;
                      }
                    }
                    e && (n && r.push(n), o && r.push(o));
                  }
                  return r;
                },
                v = (e) => {
                  let t = b(i, e);
                  return eZ(b(null == r ? void 0 : r.compoundVariants, e), t);
                },
                h = (e) => {
                  let t = v(e);
                  if (!Array.isArray(t)) return t;
                  let r = {};
                  for (let e of t)
                    if (
                      ("string" == typeof e && (r.base = tj(r.base, e)(s)),
                      "object" == typeof e)
                    )
                      for (let [t, n] of Object.entries(e))
                        r[t] = tj(r[t], n)(s);
                  return r;
                },
                y = (e) => {
                  if (l.length < 1) return null;
                  let t = {};
                  for (let {
                    slots: r = [],
                    class: n,
                    className: o,
                    ...i
                  } of l) {
                    if (!eq(i)) {
                      let t = !0;
                      for (let r of Object.keys(i)) {
                        let n = g(r, e)[r];
                        if (
                          void 0 === n ||
                          (Array.isArray(i[r]) ? !i[r].includes(n) : i[r] !== n)
                        ) {
                          t = !1;
                          break;
                        }
                      }
                      if (!t) continue;
                    }
                    for (let e of r) (t[e] = t[e] || []), t[e].push([n, o]);
                  }
                  return t;
                };
              if (!eq(n) || !f) {
                let e = {};
                if ("object" == typeof m && !eq(m))
                  for (let t of Object.keys(m))
                    e[t] = (e) => {
                      var r, n;
                      return tj(
                        m[t],
                        a(t, e),
                        (null != (r = h(e)) ? r : [])[t],
                        (null != (n = y(e)) ? n : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className
                      )(s);
                    };
                return e;
              }
              return tj(
                c,
                u ? Object.keys(u).map((e) => o(e, u)) : null,
                v(),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              )(s);
            };
          return (
            (g.variantKeys = (() => {
              if (!(!u || "object" != typeof u)) return Object.keys(u);
            })()),
            (g.extend = r),
            (g.base = c),
            (g.slots = m),
            (g.variants = u),
            (g.defaultVariants = d),
            (g.compoundSlots = l),
            (g.compoundVariants = i),
            g
          );
        })(
          {
            slots: {
              base: [
                "z-0",
                "relative",
                "bg-transparent",
                "before:content-['']",
                "before:hidden",
                "before:z-[-1]",
                "before:absolute",
                "before:rotate-45",
                "before:w-2.5",
                "before:h-2.5",
                "before:rounded-sm",
                "data-[arrow=true]:before:block",
                "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top]:before:left-1/2",
                "data-[placement=top]:before:-translate-x-1/2",
                "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top-start]:before:left-3",
                "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=top-end]:before:right-3",
                "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom]:before:left-1/2",
                "data-[placement=bottom]:before:-translate-x-1/2",
                "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom-start]:before:left-3",
                "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
                "data-[placement=bottom-end]:before:right-3",
                "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
                "data-[placement=left]:before:top-1/2",
                "data-[placement=left]:before:-translate-y-1/2",
                "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=left-start]:before:top-1/4",
                "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=left-end]:before:bottom-1/4",
                "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
                "data-[placement=right]:before:top-1/2",
                "data-[placement=right]:before:-translate-y-1/2",
                "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=right-start]:before:top-1/4",
                "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
                "data-[placement=right-end]:before:bottom-1/4",
                "outline-none",
                "data-[focus-visible=true]:z-10",
                "data-[focus-visible=true]:outline-2",
                "data-[focus-visible=true]:outline-focus",
                "data-[focus-visible=true]:outline-offset-2",
              ],
              content: [
                "z-10",
                "px-2.5",
                "py-1",
                "w-full",
                "inline-flex",
                "flex-col",
                "items-center",
                "justify-center",
                "box-border",
                "subpixel-antialiased",
                "outline-none",
                "box-border",
              ],
              trigger: ["z-10"],
              backdrop: ["hidden"],
              arrow: [],
            },
            variants: {
              size: {
                sm: { content: "text-tiny" },
                md: { content: "text-small" },
                lg: { content: "text-medium" },
              },
              color: {
                default: {
                  base: "before:bg-content1 before:shadow-small",
                  content: "bg-content1",
                },
                foreground: {
                  base: "before:bg-foreground",
                  content: "bg-foreground text-background",
                },
                primary: {
                  base: "before:bg-primary",
                  content: "bg-primary text-primary-foreground",
                },
                secondary: {
                  base: "before:bg-secondary",
                  content: "bg-secondary text-secondary-foreground",
                },
                success: {
                  base: "before:bg-success",
                  content: "bg-success text-success-foreground",
                },
                warning: {
                  base: "before:bg-warning",
                  content: "bg-warning text-warning-foreground",
                },
                danger: {
                  base: "before:bg-danger",
                  content: "bg-danger text-danger-foreground",
                },
              },
              radius: {
                none: { content: "rounded-none" },
                sm: { content: "rounded-small" },
                md: { content: "rounded-medium" },
                lg: { content: "rounded-large" },
                full: { content: "rounded-full" },
              },
              shadow: {
                sm: { content: "shadow-small" },
                md: { content: "shadow-medium" },
                lg: { content: "shadow-large" },
              },
              backdrop: {
                transparent: {},
                opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
                blur: {
                  backdrop:
                    "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
                },
              },
              triggerScaleOnOpen: {
                true: {
                  trigger: [
                    "aria-expanded:scale-[0.97]",
                    "aria-expanded:opacity-70",
                    "subpixel-antialiased",
                  ],
                },
                false: {},
              },
              disableAnimation: { true: { base: "animate-none" } },
              isTriggerDisabled: {
                true: { trigger: "opacity-disabled pointer-events-none" },
                false: {},
              },
            },
            defaultVariants: {
              color: "default",
              radius: "lg",
              size: "md",
              shadow: "md",
              backdrop: "transparent",
              triggerScaleOnOpen: !0,
            },
            compoundVariants: [
              {
                backdrop: ["opaque", "blur"],
                class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
              },
            ],
          },
          {
            ...n,
            twMerge: null == (o = null == n ? void 0 : n.twMerge) || o,
            twMergeConfig: {
              ...(null == n ? void 0 : n.twMergeConfig),
              theme: {
                ...(null == (i = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : i.theme),
                ...eU.theme,
              },
              classGroups: {
                ...(null == (l = null == n ? void 0 : n.twMergeConfig)
                  ? void 0
                  : l.classGroups),
                ...eU.classGroups,
              },
            },
          }
        ),
        tD = (e) => (e ? "true" : void 0);
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var tI = (e) => {
          let t = {
            top: { originY: 1 },
            bottom: { originY: 0 },
            left: { originX: 1 },
            right: { originX: 0 },
            "top-start": { originX: 0, originY: 1 },
            "top-end": { originX: 1, originY: 1 },
            "bottom-start": { originX: 0, originY: 0 },
            "bottom-end": { originX: 1, originY: 0 },
            "right-start": { originX: 0, originY: 0 },
            "right-end": { originX: 0, originY: 1 },
            "left-start": { originX: 1, originY: 0 },
            "left-end": { originX: 1, originY: 1 },
          };
          return (null == t ? void 0 : t[e]) || {};
        },
        tH = (e) =>
          ({
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right",
            "top-start": "top start",
            "top-end": "top end",
            "bottom-start": "bottom start",
            "bottom-end": "bottom end",
            "left-start": "left top",
            "left-end": "left bottom",
            "right-start": "right top",
            "right-end": "right bottom",
          }[e]),
        t_ = (e, t) => {
          if (t.includes("-")) {
            let [, r] = t.split("-");
            return "".concat(e, "-").concat(r);
          }
          return e;
        },
        tF = (null == globalThis ? void 0 : globalThis.document)
          ? s.useLayoutEffect
          : s.useEffect,
        tW = r(54887);
      let t$ = s.createContext(null);
      function tB(e) {
        let { children: t } = e,
          r = (0, s.useContext)(t$),
          [n, o] = (0, s.useState)(0),
          i = (0, s.useMemo)(
            () => ({
              parent: r,
              modalCount: n,
              addModal() {
                o((e) => e + 1), r && r.addModal();
              },
              removeModal() {
                o((e) => e - 1), r && r.removeModal();
              },
            }),
            [r, n]
          );
        return s.createElement(t$.Provider, { value: i }, t);
      }
      function tV(e) {
        let t;
        let { modalProviderProps: r } = {
          modalProviderProps: {
            "aria-hidden":
              (!!(t = (0, s.useContext)(t$)) && t.modalCount > 0) || null,
          },
        };
        return s.createElement("div", {
          "data-overlay-container": !0,
          ...e,
          ...r,
        });
      }
      function tG(e) {
        return s.createElement(tB, null, s.createElement(tV, e));
      }
      function tY(e) {
        let t = T(),
          { portalContainer: r = t ? null : document.body, ...n } = e;
        if (
          (s.useEffect(() => {
            if (null == r ? void 0 : r.closest("[data-overlay-container]"))
              throw Error(
                "An OverlayContainer must not be inside another container. Please change the portalContainer prop."
              );
          }, [r]),
          !r)
        )
          return null;
        let o = s.createElement(tG, n);
        return tW.createPortal(o, r);
      }
      var tK = r(47337),
        tU = r(24470);
      function tX({ children: e, features: t, strict: r = !1 }) {
        let [, n] = (0, s.useState)(!tq(t)),
          o = (0, s.useRef)(void 0);
        if (!tq(t)) {
          let { renderer: e, ...r } = t;
          (o.current = e), (0, tU.K)(r);
        }
        return (
          (0, s.useEffect)(() => {
            tq(t) &&
              t().then(({ renderer: e, ...t }) => {
                (0, tU.K)(t), (o.current = e), n(!0);
              });
          }, []),
          s.createElement(
            tK.u.Provider,
            { value: { renderer: o.current, strict: r } },
            e
          )
        );
      }
      function tq(e) {
        return "function" == typeof e;
      }
      var tJ = r(55149),
        tQ = r(1306);
      let tZ = { renderer: r(481).b, ...tJ.s, ...tQ.E };
      var t0 = r(21043),
        t1 = r(5908);
      let t5 = (0, t0.D)(t1.w);
      var t2 = r(11534);
      function t4() {
        let e = (0, s.useRef)(!1);
        return (
          (0, t2.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var t3 = r(58345),
        t7 = r(64252),
        t8 = r(53576);
      class t9 extends s.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function t6({ children: e, isPresent: t }) {
        let r = (0, s.useId)(),
          n = (0, s.useRef)(null),
          o = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: e, height: i, top: l, left: a } = o.current;
            if (t || !n.current || !e || !i) return;
            n.current.dataset.motionPopId = r;
            let s = document.createElement("style");
            return (
              document.head.appendChild(s),
              s.sheet &&
                s.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(s);
              }
            );
          }, [t]),
          s.createElement(
            t9,
            { isPresent: t, childRef: n, sizeRef: o },
            s.cloneElement(e, { ref: n })
          )
        );
      }
      let re = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: n,
        custom: o,
        presenceAffectsLayout: i,
        mode: l,
      }) => {
        let a = (0, t8.h)(rt),
          c = (0, s.useId)(),
          u = (0, s.useMemo)(
            () => ({
              id: c,
              initial: t,
              isPresent: r,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (a.set(e, !0), a.values())) if (!t) return;
                n && n();
              },
              register: (e) => (a.set(e, !1), () => a.delete(e)),
            }),
            i ? void 0 : [r]
          );
        return (
          (0, s.useMemo)(() => {
            a.forEach((e, t) => a.set(t, !1));
          }, [r]),
          s.useEffect(() => {
            r || a.size || !n || n();
          }, [r]),
          "popLayout" === l && (e = s.createElement(t6, { isPresent: r }, e)),
          s.createElement(t7.O.Provider, { value: u }, e)
        );
      };
      function rt() {
        return new Map();
      }
      var rr = r(58881),
        rn = r(13223);
      let ro = (e) => e.key || "",
        ri = ({
          children: e,
          custom: t,
          initial: r = !0,
          onExitComplete: n,
          exitBeforeEnter: o,
          presenceAffectsLayout: i = !0,
          mode: l = "sync",
        }) => {
          var a;
          (0, rn.k)(!o, "Replace exitBeforeEnter with mode='wait'");
          let c =
              (0, s.useContext)(rr.p).forceRender ||
              (function () {
                let e = t4(),
                  [t, r] = (0, s.useState)(0),
                  n = (0, s.useCallback)(() => {
                    e.current && r(t + 1);
                  }, [t]);
                return [(0, s.useCallback)(() => t3.Wi.postRender(n), [n]), t];
              })()[0],
            u = t4(),
            d = (function (e) {
              let t = [];
              return (
                s.Children.forEach(e, (e) => {
                  (0, s.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            f = d,
            p = (0, s.useRef)(new Map()).current,
            m = (0, s.useRef)(f),
            g = (0, s.useRef)(new Map()).current,
            b = (0, s.useRef)(!0);
          if (
            ((0, t2.L)(() => {
              (b.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let r = ro(e);
                    t.set(r, e);
                  });
                })(d, g),
                (m.current = f);
            }),
            (a = () => {
              (b.current = !0), g.clear(), p.clear();
            }),
            (0, s.useEffect)(() => () => a(), []),
            b.current)
          )
            return s.createElement(
              s.Fragment,
              null,
              f.map((e) =>
                s.createElement(
                  re,
                  {
                    key: ro(e),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: i,
                    mode: l,
                  },
                  e
                )
              )
            );
          f = [...f];
          let v = m.current.map(ro),
            h = d.map(ro),
            y = v.length;
          for (let e = 0; e < y; e++) {
            let t = v[e];
            -1 !== h.indexOf(t) || p.has(t) || p.set(t, void 0);
          }
          return (
            "wait" === l && p.size && (f = []),
            p.forEach((e, r) => {
              if (-1 !== h.indexOf(r)) return;
              let o = g.get(r);
              if (!o) return;
              let a = v.indexOf(r),
                b = e;
              b ||
                ((b = s.createElement(
                  re,
                  {
                    key: ro(o),
                    isPresent: !1,
                    onExitComplete: () => {
                      p.delete(r);
                      let e = Array.from(g.keys()).filter(
                        (e) => !h.includes(e)
                      );
                      if (
                        (e.forEach((e) => g.delete(e)),
                        (m.current = d.filter((t) => {
                          let n = ro(t);
                          return n === r || e.includes(n);
                        })),
                        !p.size)
                      ) {
                        if (!1 === u.current) return;
                        c(), n && n();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: l,
                  },
                  o
                )),
                p.set(r, b)),
                f.splice(a, 0, b);
            }),
            (f = f.map((e) => {
              let t = e.key;
              return p.has(t)
                ? e
                : s.createElement(
                    re,
                    {
                      key: ro(e),
                      isPresent: !0,
                      presenceAffectsLayout: i,
                      mode: l,
                    },
                    e
                  );
            })),
            s.createElement(
              s.Fragment,
              null,
              p.size ? f : f.map((e) => (0, s.cloneElement)(e))
            )
          );
        };
      var rl = {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { type: "spring", bounce: 0, duration: 0.2 },
          },
          exit: {
            transform: "scale(0.85)",
            opacity: 0,
            transition: { type: "easeOut", duration: 0.15 },
          },
        },
        ra = r(40257),
        rs = {},
        rc = r(57437),
        ru =
          ((a = (e, t) => {
            let r;
            let {
              Component: n,
              children: o,
              content: i,
              isOpen: l,
              portalContainer: a,
              placement: g,
              disableAnimation: b,
              motionProps: v,
              getTriggerProps: h,
              getTooltipProps: y,
              getTooltipContentProps: x,
            } = (function (e) {
              var t, r;
              let n = eG(),
                [o, i] = eY(e, tN.variantKeys),
                {
                  ref: l,
                  as: a,
                  isOpen: g,
                  content: b,
                  children: v,
                  defaultOpen: h,
                  onOpenChange: y,
                  isDisabled: x,
                  trigger: E,
                  shouldFlip: k = !0,
                  containerPadding: P = 12,
                  placement: O = "top",
                  delay: z = 0,
                  closeDelay: j = 500,
                  showArrow: A = !1,
                  offset: N = 7,
                  crossOffset: D = 0,
                  isDismissable: I,
                  shouldCloseOnBlur: H = !0,
                  portalContainer: _,
                  isKeyboardDismissDisabled: F = !1,
                  updatePositionDeps: W = [],
                  shouldCloseOnInteractOutside: $,
                  className: B,
                  onClose: V,
                  motionProps: G,
                  classNames: Y,
                  ...K
                } = o,
                U =
                  null !=
                    (r =
                      null != (t = null == e ? void 0 : e.disableAnimation)
                        ? t
                        : null == n
                        ? void 0
                        : n.disableAnimation) && r,
                X = (function (e = {}) {
                  let { delay: t = 1500, closeDelay: r = 500 } = e,
                    {
                      isOpen: n,
                      open: o,
                      close: i,
                    } = (function (e) {
                      let [t, r] = (function (e, t, r) {
                          let [n, o] = (0, s.useState)(e || t),
                            i = (0, s.useRef)(void 0 !== e),
                            l = void 0 !== e;
                          (0, s.useEffect)(() => {
                            let e = i.current;
                            e !== l &&
                              console.warn(
                                `WARN: A component changed from ${
                                  e ? "controlled" : "uncontrolled"
                                } to ${l ? "controlled" : "uncontrolled"}.`
                              ),
                              (i.current = l);
                          }, [l]);
                          let a = l ? e : n,
                            c = (0, s.useCallback)(
                              (e, ...t) => {
                                let n = (e, ...t) => {
                                  r && !Object.is(a, e) && r(e, ...t),
                                    l || (a = e);
                                };
                                "function" == typeof e
                                  ? (console.warn(
                                      "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
                                    ),
                                    o((r, ...o) => {
                                      let i = e(l ? a : r, ...o);
                                      return (n(i, ...t), l) ? r : i;
                                    }))
                                  : (l || o(e), n(e, ...t));
                              },
                              [l, a, r]
                            );
                          return [a, c];
                        })(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
                        n = (0, s.useCallback)(() => {
                          r(!0);
                        }, [r]),
                        o = (0, s.useCallback)(() => {
                          r(!1);
                        }, [r]),
                        i = (0, s.useCallback)(() => {
                          r(!t);
                        }, [r, t]);
                      return {
                        isOpen: t,
                        setOpen: r,
                        open: n,
                        close: o,
                        toggle: i,
                      };
                    })(e),
                    l = (0, s.useMemo)(() => `${++u}`, []),
                    a = (0, s.useRef)(),
                    m = () => {
                      c[l] = v;
                    },
                    g = () => {
                      for (let e in c) e !== l && (c[e](!0), delete c[e]);
                    },
                    b = () => {
                      clearTimeout(a.current),
                        (a.current = null),
                        g(),
                        m(),
                        (d = !0),
                        o(),
                        f && (clearTimeout(f), (f = null)),
                        p && (clearTimeout(p), (p = null));
                    },
                    v = (e) => {
                      e || r <= 0
                        ? (clearTimeout(a.current), (a.current = null), i())
                        : a.current ||
                          (a.current = setTimeout(() => {
                            (a.current = null), i();
                          }, r)),
                        f && (clearTimeout(f), (f = null)),
                        d &&
                          (p && clearTimeout(p),
                          (p = setTimeout(() => {
                            delete c[l], (p = null), (d = !1);
                          }, Math.max(500, r))));
                    },
                    h = () => {
                      g(),
                        m(),
                        n || f || d
                          ? n || b()
                          : (f = setTimeout(() => {
                              (f = null), (d = !0), b();
                            }, t));
                    };
                  return (
                    (0, s.useEffect)(
                      () => () => {
                        clearTimeout(a.current), c[l] && delete c[l];
                      },
                      [l]
                    ),
                    {
                      isOpen: n,
                      open: (e) => {
                        e || !(t > 0) || a.current ? b() : h();
                      },
                      close: v,
                    }
                  );
                })({
                  delay: z,
                  closeDelay: j,
                  isDisabled: x,
                  defaultOpen: h,
                  isOpen: g,
                  onOpenChange: (e) => {
                    null == y || y(e), e || null == V || V();
                  },
                }),
                Z = (0, s.useRef)(null),
                et = (0, s.useRef)(null),
                en = (0, s.useId)(),
                ef = X.isOpen && !x;
              (0, s.useImperativeHandle)(l, () => ({
                UNSAFE_getDOMNode: () => et.current,
              }));
              let { triggerProps: em, tooltipProps: eg } = (function (e, t, r) {
                  let { isDisabled: n, trigger: o } = e,
                    i = (function (e) {
                      let [t, r] = (0, s.useState)(void 0),
                        n = (0, s.useRef)(null),
                        o = w(t),
                        i = (0, s.useCallback)((e) => {
                          n.current = e;
                        }, []);
                      return (
                        L && C.set(o, i),
                        m(
                          () => () => {
                            C.delete(o);
                          },
                          [o]
                        ),
                        (0, s.useEffect)(() => {
                          let e = n.current;
                          e && ((n.current = null), r(e));
                        }),
                        o
                      );
                    })(),
                    l = (0, s.useRef)(!1),
                    a = (0, s.useRef)(!1),
                    c = () => {
                      (l.current || a.current) && t.open(a.current);
                    },
                    u = (e) => {
                      l.current || a.current || t.close(e);
                    };
                  (0, s.useEffect)(() => {
                    let e = (e) => {
                      r &&
                        r.current &&
                        "Escape" === e.key &&
                        (e.stopPropagation(), t.close(!0));
                    };
                    if (t.isOpen)
                      return (
                        document.addEventListener("keydown", e, !0),
                        () => {
                          document.removeEventListener("keydown", e, !0);
                        }
                      );
                  }, [r, t]);
                  let d = () => {
                      (a.current = !1), (l.current = !1), u(!0);
                    },
                    { hoverProps: f } = q({
                      isDisabled: n,
                      onHoverStart: () => {
                        "focus" !== o &&
                          ("pointer" === R
                            ? (l.current = !0)
                            : (l.current = !1),
                          c());
                      },
                      onHoverEnd: () => {
                        "focus" !== o &&
                          ((a.current = !1), (l.current = !1), u());
                      },
                    }),
                    { focusableProps: p } = (function (e, t) {
                      let { focusProps: r } = (function (e) {
                          let {
                              isDisabled: t,
                              onFocus: r,
                              onBlur: n,
                              onFocusChange: o,
                            } = e,
                            i = (0, s.useCallback)(
                              (e) => {
                                if (e.target === e.currentTarget)
                                  return n && n(e), o && o(!1), !0;
                              },
                              [n, o]
                            ),
                            l = eo(i),
                            a = (0, s.useCallback)(
                              (e) => {
                                let t = S(e.target);
                                e.target === e.currentTarget &&
                                  t.activeElement === e.target &&
                                  (r && r(e), o && o(!0), l(e));
                              },
                              [o, r, l]
                            );
                          return {
                            focusProps: {
                              onFocus: !t && (r || o || n) ? a : void 0,
                              onBlur: !t && (n || o) ? i : void 0,
                            },
                          };
                        })(e),
                        { keyboardProps: n } = {
                          keyboardProps: e.isDisabled
                            ? {}
                            : {
                                onKeyDown: ei(e.onKeyDown),
                                onKeyUp: ei(e.onKeyUp),
                              },
                        },
                        o = M(r, n),
                        i = (function (e) {
                          let t = (0, s.useContext)(el) || {};
                          m(() => {
                            if (t && t.ref && e)
                              return (
                                (t.ref.current = e.current),
                                () => {
                                  t.ref && (t.ref.current = null);
                                }
                              );
                          });
                          let { ref: r, ...n } = t;
                          return n;
                        })(t),
                        l = e.isDisabled ? {} : i,
                        a = (0, s.useRef)(e.autoFocus);
                      return (
                        (0, s.useEffect)(() => {
                          a.current &&
                            t.current &&
                            (function (e) {
                              let t = S(e);
                              if ("virtual" === R) {
                                var r;
                                let n = t.activeElement;
                                (r = () => {
                                  t.activeElement === n &&
                                    e.isConnected &&
                                    ee(e);
                                }),
                                  requestAnimationFrame(() => {
                                    0 === J.size ? r() : Q.add(r);
                                  });
                              } else ee(e);
                            })(t.current),
                            (a.current = !1);
                        }, [t]),
                        {
                          focusableProps: M(
                            {
                              ...o,
                              tabIndex:
                                e.excludeFromTabOrder && !e.isDisabled
                                  ? -1
                                  : void 0,
                            },
                            l
                          ),
                        }
                      );
                    })(
                      {
                        isDisabled: n,
                        onFocus: () => {
                          "pointer" !== R && ((a.current = !0), c());
                        },
                        onBlur: () => {
                          (a.current = !1), (l.current = !1), u(!0);
                        },
                      },
                      r
                    );
                  return {
                    triggerProps: {
                      "aria-describedby": t.isOpen ? i : void 0,
                      ...M(p, f, { onPointerDown: d, onKeyDown: d }),
                    },
                    tooltipProps: { id: i },
                  };
                })({ isDisabled: x, trigger: E }, X, Z),
                { tooltipProps: ev } = (function (e, t) {
                  let r = (function (e, t = {}) {
                      let { labelable: r, isLink: n, propNames: o } = t,
                        i = {};
                      for (let t in e)
                        Object.prototype.hasOwnProperty.call(e, t) &&
                          (ea.has(t) ||
                            (r && es.has(t)) ||
                            (n && ec.has(t)) ||
                            (null == o ? void 0 : o.has(t)) ||
                            eu.test(t)) &&
                          (i[t] = e[t]);
                      return i;
                    })(e, { labelable: !0 }),
                    { hoverProps: n } = q({
                      onHoverStart: () => (null == t ? void 0 : t.open(!0)),
                      onHoverEnd: () => (null == t ? void 0 : t.close()),
                    });
                  return { tooltipProps: M(r, n, { role: "tooltip" }) };
                })({ isOpen: ef, ...M(o, eg) }, X),
                {
                  overlayProps: eh,
                  placement: eM,
                  updatePosition: eO,
                } = (function (e) {
                  var t;
                  let r;
                  let { direction: n } =
                      ((r = (function () {
                        let e = T(),
                          [t, r] = (0, s.useState)(eR);
                        return ((0, s.useEffect)(
                          () => (
                            0 === ej.size &&
                              window.addEventListener("languagechange", eA),
                            ej.add(r),
                            () => {
                              ej.delete(r),
                                0 === ej.size &&
                                  window.removeEventListener(
                                    "languagechange",
                                    eA
                                  );
                            }
                          ),
                          []
                        ),
                        e)
                          ? { locale: "en-US", direction: "ltr" }
                          : t;
                      })()),
                      (0, s.useContext)(eN) || r),
                    {
                      arrowSize: o = 0,
                      targetRef: i,
                      overlayRef: l,
                      scrollRef: a = l,
                      placement: c = "bottom",
                      containerPadding: u = 12,
                      shouldFlip: d = !0,
                      boundaryElement: f = "undefined" != typeof document
                        ? document.body
                        : null,
                      offset: p = 0,
                      crossOffset: g = 0,
                      shouldUpdatePosition: b = !0,
                      isOpen: v = !0,
                      onClose: h,
                      maxHeight: y,
                      arrowBoundaryOffset: w = 0,
                    } = e,
                    [x, E] = (0, s.useState)({
                      position: {},
                      arrowOffsetLeft: void 0,
                      arrowOffsetTop: void 0,
                      maxHeight: void 0,
                      placement: void 0,
                    }),
                    k = [
                      b,
                      c,
                      l.current,
                      i.current,
                      a.current,
                      u,
                      d,
                      f,
                      p,
                      g,
                      v,
                      n,
                      y,
                      w,
                      o,
                    ],
                    L = (0, s.useRef)(null == eD ? void 0 : eD.scale);
                  (0, s.useEffect)(() => {
                    v && (L.current = null == eD ? void 0 : eD.scale);
                  }, [v]);
                  let C = (0, s.useCallback)(() => {
                    var e, t;
                    if (
                      !1 === b ||
                      !v ||
                      !l.current ||
                      !i.current ||
                      !a.current ||
                      !f ||
                      (null == eD ? void 0 : eD.scale) !== L.current
                    )
                      return;
                    let r = l.current;
                    !y &&
                      l.current &&
                      ((r.style.top = "0px"),
                      (r.style.bottom = ""),
                      (r.style.maxHeight =
                        (null !==
                          (t =
                            null === (e = window.visualViewport) || void 0 === e
                              ? void 0
                              : e.height) && void 0 !== t
                          ? t
                          : window.innerHeight) + "px"));
                    let s = (function (e) {
                      let t,
                        {
                          placement: r,
                          targetNode: n,
                          overlayNode: o,
                          scrollNode: i,
                          padding: l,
                          shouldFlip: a,
                          boundaryElement: s,
                          offset: c,
                          crossOffset: u,
                          maxHeight: d,
                          arrowSize: f = 0,
                          arrowBoundaryOffset: p = 0,
                        } = e,
                        m =
                          o instanceof HTMLElement
                            ? (function (e) {
                                let t = e.offsetParent;
                                if (
                                  (t &&
                                    t === document.body &&
                                    "static" ===
                                      window.getComputedStyle(t).position &&
                                    !eC(t) &&
                                    (t = document.documentElement),
                                  null == t)
                                )
                                  for (t = e.parentElement; t && !eC(t); )
                                    t = t.parentElement;
                                return t || document.documentElement;
                              })(o)
                            : document.documentElement,
                        g = m === document.documentElement,
                        b = window.getComputedStyle(m).position,
                        v = g ? eT(n) : eL(n, m);
                      if (!g) {
                        let { marginTop: e, marginLeft: t } =
                          window.getComputedStyle(n);
                        (v.top += parseInt(e, 10) || 0),
                          (v.left += parseInt(t, 10) || 0);
                      }
                      let h = eT(o),
                        y = {
                          top:
                            parseInt(
                              (t = window.getComputedStyle(o)).marginTop,
                              10
                            ) || 0,
                          bottom: parseInt(t.marginBottom, 10) || 0,
                          left: parseInt(t.marginLeft, 10) || 0,
                          right: parseInt(t.marginRight, 10) || 0,
                        };
                      (h.width += y.left + y.right),
                        (h.height += y.top + y.bottom);
                      let w = {
                          top: i.scrollTop,
                          left: i.scrollLeft,
                          width: i.scrollWidth,
                          height: i.scrollHeight,
                        },
                        x = ey(s),
                        E = ey(m),
                        k = "BODY" === s.tagName ? eT(m) : eL(m, s);
                      return (
                        "HTML" === m.tagName &&
                          "BODY" === s.tagName &&
                          ((E.scroll.top = 0), (E.scroll.left = 0)),
                        (function (
                          e,
                          t,
                          r,
                          n,
                          o,
                          i,
                          l,
                          a,
                          s,
                          c,
                          u,
                          d,
                          f,
                          p,
                          m,
                          g
                        ) {
                          let b = ex(e),
                            {
                              size: v,
                              crossAxis: h,
                              crossSize: y,
                              placement: w,
                              crossPlacement: x,
                            } = b,
                            E = eE(t, a, r, b, u, d, c, f, m, g),
                            k = u,
                            T = ek(a, c, t, o, i + u, b);
                          if (l && n[v] > T) {
                            let e = ex(`${ep[w]} ${x}`),
                              n = eE(t, a, r, e, u, d, c, f, m, g);
                            ek(a, c, t, o, i + u, e) > T &&
                              ((b = e), (E = n), (k = u));
                          }
                          let L = "bottom";
                          "top" === b.axis
                            ? "top" === b.placement
                              ? (L = "top")
                              : "bottom" === b.placement && (L = "bottom")
                            : "top" === b.crossAxis &&
                              ("top" === b.crossPlacement
                                ? (L = "bottom")
                                : "bottom" === b.crossPlacement && (L = "top"));
                          let C = ew(h, E[h], r[y], a, s, i, c);
                          E[h] += C;
                          let P = (function (e, t, r, n, o, i, l, a) {
                            let s = n ? r.height : t[eb.height],
                              c =
                                null != e.top
                                  ? r.top + e.top
                                  : r.top + (s - e.bottom - l),
                              u =
                                "top" !== a
                                  ? Math.max(
                                      0,
                                      t.height +
                                        t.top +
                                        t.scroll.top -
                                        c -
                                        (o.top + o.bottom + i)
                                    )
                                  : Math.max(
                                      0,
                                      c +
                                        l -
                                        (t.top + t.scroll.top) -
                                        (o.top + o.bottom + i)
                                    );
                            return Math.min(t.height - 2 * i, u);
                          })(E, a, c, f, o, i, r.height, L);
                          p && p < P && (P = p),
                            (r.height = Math.min(r.height, P)),
                            (C = ew(
                              h,
                              (E = eE(t, a, r, b, k, d, c, f, m, g))[h],
                              r[y],
                              a,
                              s,
                              i,
                              c
                            )),
                            (E[h] += C);
                          let M = {},
                            O = t[h] + 0.5 * t[y] - E[h],
                            S = m / 2 + g,
                            z = r[y] - m / 2 - g,
                            R = ed(
                              O,
                              t[h] - E[h] + m / 2,
                              t[h] + t[y] - E[h] - m / 2
                            );
                          return (
                            (M[h] = ed(R, S, z)),
                            {
                              position: E,
                              maxHeight: P,
                              arrowOffsetLeft: M.left,
                              arrowOffsetTop: M.top,
                              placement: b.placement,
                            }
                          );
                        })(
                          r,
                          v,
                          h,
                          w,
                          y,
                          l,
                          a,
                          x,
                          E,
                          k,
                          c,
                          u,
                          !!b && "static" !== b,
                          d,
                          f,
                          p
                        )
                      );
                    })({
                      placement:
                        "rtl" === n
                          ? c.replace("start", "right").replace("end", "left")
                          : c.replace("start", "left").replace("end", "right"),
                      overlayNode: l.current,
                      targetNode: i.current,
                      scrollNode: a.current,
                      padding: u,
                      shouldFlip: d,
                      boundaryElement: f,
                      offset: p,
                      crossOffset: g,
                      maxHeight: y,
                      arrowSize: o,
                      arrowBoundaryOffset: w,
                    });
                    (r.style.top = ""),
                      (r.style.bottom = ""),
                      Object.keys(s.position).forEach(
                        (e) => (r.style[e] = s.position[e] + "px")
                      ),
                      (r.style.maxHeight =
                        null != s.maxHeight ? s.maxHeight + "px" : void 0),
                      E(s);
                  }, k);
                  m(C, k),
                    m(
                      () => (
                        window.addEventListener("resize", t, !1),
                        () => {
                          window.removeEventListener("resize", t, !1);
                        }
                      ),
                      [(t = C)]
                    ),
                    (function (e) {
                      let { ref: t, onResize: r } = e;
                      (0, s.useEffect)(() => {
                        let e = null == t ? void 0 : t.current;
                        if (e) {
                          if (!(void 0 !== window.ResizeObserver))
                            return (
                              window.addEventListener("resize", r, !1),
                              () => {
                                window.removeEventListener("resize", r, !1);
                              }
                            );
                          {
                            let t = new window.ResizeObserver((e) => {
                              e.length && r();
                            });
                            return (
                              t.observe(e),
                              () => {
                                e && t.unobserve(e);
                              }
                            );
                          }
                        }
                      }, [r, t]);
                    })({ ref: l, onResize: C });
                  let P = (0, s.useRef)(!1);
                  m(() => {
                    let e;
                    let t = () => {
                        (P.current = !0),
                          clearTimeout(e),
                          (e = setTimeout(() => {
                            P.current = !1;
                          }, 500)),
                          C();
                      },
                      r = () => {
                        P.current && t();
                      };
                    return (
                      null == eD || eD.addEventListener("resize", t),
                      null == eD || eD.addEventListener("scroll", r),
                      () => {
                        null == eD || eD.removeEventListener("resize", t),
                          null == eD || eD.removeEventListener("scroll", r);
                      }
                    );
                  }, [C]);
                  let M = (0, s.useCallback)(() => {
                    P.current || h();
                  }, [h, P]);
                  return (
                    (function (e) {
                      let { triggerRef: t, isOpen: r, onClose: n } = e;
                      (0, s.useEffect)(() => {
                        if (!r || null === n) return;
                        let e = (e) => {
                          let r = e.target;
                          if (
                            !t.current ||
                            (r instanceof Node && !r.contains(t.current))
                          )
                            return;
                          let o = n || eP.get(t.current);
                          o && o();
                        };
                        return (
                          window.addEventListener("scroll", e, !0),
                          () => {
                            window.removeEventListener("scroll", e, !0);
                          }
                        );
                      }, [r, n, t]);
                    })({ triggerRef: i, isOpen: v, onClose: h && M }),
                    {
                      overlayProps: {
                        style: {
                          position: "absolute",
                          zIndex: 1e5,
                          ...x.position,
                          maxHeight: x.maxHeight,
                        },
                      },
                      placement: x.placement,
                      arrowProps: {
                        "aria-hidden": "true",
                        role: "presentation",
                        style: {
                          left: x.arrowOffsetLeft,
                          top: x.arrowOffsetTop,
                        },
                      },
                      updatePosition: C,
                    }
                  );
                })({
                  isOpen: ef,
                  targetRef: Z,
                  placement: tH(O),
                  overlayRef: et,
                  offset: A ? N + 3 : N,
                  crossOffset: D,
                  shouldFlip: k,
                  containerPadding: P,
                });
              tF(() => {
                W.length && eO();
              }, W);
              let { overlayProps: eS } = (function (e, t) {
                  let {
                    onClose: r,
                    shouldCloseOnBlur: n,
                    isOpen: o,
                    isDismissable: i = !1,
                    isKeyboardDismissDisabled: l = !1,
                    shouldCloseOnInteractOutside: a,
                  } = e;
                  (0, s.useEffect)(
                    () => (
                      o && eB.push(t),
                      () => {
                        let e = eB.indexOf(t);
                        e >= 0 && eB.splice(e, 1);
                      }
                    ),
                    [o, t]
                  );
                  let c = () => {
                    eB[eB.length - 1] === t && r && r();
                  };
                  !(function (e) {
                    let {
                        ref: t,
                        onInteractOutside: r,
                        isDisabled: n,
                        onInteractOutsideStart: o,
                      } = e,
                      i = (0, s.useRef)({
                        isPointerDown: !1,
                        ignoreEmulatedMouseEvents: !1,
                      }),
                      l = er((e) => {
                        r &&
                          e$(e, t) &&
                          (o && o(e), (i.current.isPointerDown = !0));
                      }),
                      a = er((e) => {
                        r && r(e);
                      });
                    (0, s.useEffect)(() => {
                      let e = i.current;
                      if (n) return;
                      let r = S(t.current);
                      if ("undefined" != typeof PointerEvent) {
                        let n = (r) => {
                          e.isPointerDown && e$(r, t) && a(r),
                            (e.isPointerDown = !1);
                        };
                        return (
                          r.addEventListener("pointerdown", l, !0),
                          r.addEventListener("pointerup", n, !0),
                          () => {
                            r.removeEventListener("pointerdown", l, !0),
                              r.removeEventListener("pointerup", n, !0);
                          }
                        );
                      }
                      {
                        let n = (r) => {
                            e.ignoreEmulatedMouseEvents
                              ? (e.ignoreEmulatedMouseEvents = !1)
                              : e.isPointerDown && e$(r, t) && a(r),
                              (e.isPointerDown = !1);
                          },
                          o = (r) => {
                            (e.ignoreEmulatedMouseEvents = !0),
                              e.isPointerDown && e$(r, t) && a(r),
                              (e.isPointerDown = !1);
                          };
                        return (
                          r.addEventListener("mousedown", l, !0),
                          r.addEventListener("mouseup", n, !0),
                          r.addEventListener("touchstart", l, !0),
                          r.addEventListener("touchend", o, !0),
                          () => {
                            r.removeEventListener("mousedown", l, !0),
                              r.removeEventListener("mouseup", n, !0),
                              r.removeEventListener("touchstart", l, !0),
                              r.removeEventListener("touchend", o, !0);
                          }
                        );
                      }
                    }, [t, n, l, a]);
                  })({
                    ref: t,
                    onInteractOutside:
                      i && o
                        ? (e) => {
                            (!a || a(e.target)) &&
                              (eB[eB.length - 1] === t &&
                                (e.stopPropagation(), e.preventDefault()),
                              c());
                          }
                        : null,
                    onInteractOutsideStart: (e) => {
                      (!a || a(e.target)) &&
                        eB[eB.length - 1] === t &&
                        (e.stopPropagation(), e.preventDefault());
                    },
                  });
                  let { focusWithinProps: u } = (function (e) {
                    let {
                        isDisabled: t,
                        onBlurWithin: r,
                        onFocusWithin: n,
                        onFocusWithinChange: o,
                      } = e,
                      i = (0, s.useRef)({ isFocusWithin: !1 }),
                      l = (0, s.useCallback)(
                        (e) => {
                          i.current.isFocusWithin &&
                            !e.currentTarget.contains(e.relatedTarget) &&
                            ((i.current.isFocusWithin = !1),
                            r && r(e),
                            o && o(!1));
                        },
                        [r, o, i]
                      ),
                      a = eo(l),
                      c = (0, s.useCallback)(
                        (e) => {
                          i.current.isFocusWithin ||
                            document.activeElement !== e.target ||
                            (n && n(e),
                            o && o(!0),
                            (i.current.isFocusWithin = !0),
                            a(e));
                        },
                        [n, o, a]
                      );
                    return t
                      ? {
                          focusWithinProps: { onFocus: void 0, onBlur: void 0 },
                        }
                      : { focusWithinProps: { onFocus: c, onBlur: l } };
                  })({
                    isDisabled: !n,
                    onBlurWithin: (e) => {
                      !(
                        !e.relatedTarget ||
                        (function (e, t = null) {
                          if (
                            e instanceof Element &&
                            e.closest("[data-react-aria-top-layer]")
                          )
                            return !0;
                          for (let { scopeRef: r } of eW.traverse(
                            eW.getTreeNode(t)
                          ))
                            if (r && eH(e, r.current)) return !0;
                          return !1;
                        })(e.relatedTarget, null)
                      ) &&
                        (!a || a(e.relatedTarget)) &&
                        r();
                    },
                  });
                  return {
                    overlayProps: {
                      onKeyDown: (e) => {
                        "Escape" !== e.key ||
                          l ||
                          e.nativeEvent.isComposing ||
                          (e.stopPropagation(), e.preventDefault(), c());
                      },
                      ...u,
                    },
                    underlayProps: {
                      onPointerDown: (e) => {
                        e.target === e.currentTarget && e.preventDefault();
                      },
                    },
                  };
                })(
                  {
                    isOpen: ef,
                    onClose: X.close,
                    isDismissable: I,
                    shouldCloseOnBlur: H,
                    isKeyboardDismissDisabled: F,
                    shouldCloseOnInteractOutside: $,
                  },
                  et
                ),
                ez = (0, s.useMemo)(() => {
                  var t, r, n;
                  return tN({
                    ...i,
                    disableAnimation: U,
                    radius:
                      null != (t = null == e ? void 0 : e.radius) ? t : "md",
                    size: null != (r = null == e ? void 0 : e.size) ? r : "md",
                    shadow:
                      null != (n = null == e ? void 0 : e.shadow) ? n : "sm",
                  });
                }, [
                  (function (e) {
                    if (!e || "object" != typeof e) return "";
                    try {
                      return JSON.stringify(e);
                    } catch (e) {
                      return "";
                    }
                  })(i),
                  U,
                  null == e ? void 0 : e.radius,
                  null == e ? void 0 : e.size,
                  null == e ? void 0 : e.shadow,
                ]),
                eI = (0, s.useCallback)(
                  function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null;
                    return {
                      ...M(em, e),
                      ref: (function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return (e) => {
                          t.forEach((t) =>
                            (function (e, t) {
                              if (null != e) {
                                if ("function" == typeof e) {
                                  e(t);
                                  return;
                                }
                                try {
                                  e.current = t;
                                } catch (r) {
                                  throw Error(
                                    "Cannot assign value '"
                                      .concat(t, "' to ref '")
                                      .concat(e, "'")
                                  );
                                }
                              }
                            })(t, e)
                          );
                        };
                      })(t, Z),
                      "aria-describedby": ef ? en : void 0,
                    };
                  },
                  [em, ef, en, X]
                ),
                e_ = (0, s.useCallback)(
                  () => ({
                    ref: et,
                    "data-slot": "base",
                    "data-open": tD(ef),
                    "data-arrow": tD(A),
                    "data-disabled": tD(x),
                    "data-placement": t_(eM, O),
                    ...M(ev, eS, K),
                    style: M(eh.style, K.style, o.style),
                    className: ez.base({ class: null == Y ? void 0 : Y.base }),
                    id: en,
                  }),
                  [ez, ef, A, x, eM, O, ev, eS, K, eh, o, en]
                ),
                eF = (0, s.useCallback)(
                  () => ({
                    "data-slot": "content",
                    "data-open": tD(ef),
                    "data-arrow": tD(A),
                    "data-disabled": tD(x),
                    "data-placement": t_(eM, O),
                    className: ez.content({
                      class: (function (...e) {
                        for (var t, r, n = 0, o = ""; n < e.length; )
                          (t = e[n++]) &&
                            (r = (function e(t) {
                              var r,
                                n,
                                o = "";
                              if ("string" == typeof t || "number" == typeof t)
                                o += t;
                              else if ("object" == typeof t) {
                                if (Array.isArray(t))
                                  for (r = 0; r < t.length; r++)
                                    t[r] &&
                                      (n = e(t[r])) &&
                                      (o && (o += " "), (o += n));
                                else
                                  for (r in t)
                                    t[r] && (o && (o += " "), (o += r));
                              }
                              return o;
                            })(t)) &&
                            (o && (o += " "), (o += r));
                        return o;
                      })(null == Y ? void 0 : Y.content, B),
                    }),
                  }),
                  [ez, ef, A, x, eM, O, Y]
                );
              return {
                Component: a || "div",
                content: b,
                children: v,
                isOpen: ef,
                triggerRef: Z,
                showArrow: A,
                portalContainer: _,
                placement: O,
                disableAnimation: U,
                isDisabled: x,
                motionProps: G,
                getTooltipContentProps: eF,
                getTriggerProps: eI,
                getTooltipProps: e_,
              };
            })({ ...e, ref: t });
            try {
              let e = s.Children.count(o);
              if (1 !== e) throw Error();
              r = (0, s.isValidElement)(o)
                ? (0, s.cloneElement)(o, h(o.props, o.ref))
                : (0, rc.jsx)("p", { ...h(), children: o });
            } catch (e) {
              (r = (0, rc.jsx)("span", {})),
                (function (e, t, ...r) {
                  var n;
                  let o = `[Next UI] : ${e}`;
                  "undefined" == typeof console ||
                    rs[o] ||
                    ((rs[o] = !0),
                    (null == (n = null == ra ? void 0 : ra.env)
                      ? void 0
                      : n.NODE_ENV) === "production") ||
                    console.warn(o, r);
                })(
                  "Tooltip must have only one child node. Please, check your code."
                );
            }
            let { ref: E, id: k, style: P, ...O } = y(),
              z = (0, rc.jsx)("div", {
                ref: E,
                id: k,
                style: P,
                children: (0, rc.jsx)(tX, {
                  features: tZ,
                  children: (0, rc.jsx)(t5.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    variants: rl,
                    ...M(v, O),
                    style: { ...tI(g) },
                    children: (0, rc.jsx)(n, { ...x(), children: i }),
                  }),
                }),
              });
            return (0, rc.jsxs)(rc.Fragment, {
              children: [
                r,
                b && l
                  ? (0, rc.jsx)(tY, {
                      portalContainer: a,
                      children: (0, rc.jsx)("div", {
                        ref: E,
                        id: k,
                        style: P,
                        ...O,
                        children: (0, rc.jsx)(n, { ...x(), children: i }),
                      }),
                    })
                  : (0, rc.jsx)(ri, {
                      children: l
                        ? (0, rc.jsx)(tY, { portalContainer: a, children: z })
                        : null,
                    }),
              ],
            });
          }),
          (0, s.forwardRef)(a));
      ru.displayName = "NextUI.Tooltip";
      var rd = ru;
    },
  },
]);
