"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1898],
  {
    31898: function (e, r, a) {
      a.d(r, {
        i: function () {
          return ek;
        },
      });
      var t = a(2265),
        o = a(45451),
        n = a(6269),
        l = a(8298),
        i = a(96159),
        s = a(7213);
      function c({ value: e, min: r, max: a }) {
        return Math.min(Math.max(((e - r) / (a - r)) * 100, 0), 100);
      }
      var u = a(57486),
        d = a(23985),
        m = a(66188),
        f = Object.defineProperty,
        b = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        v = (e, r, a) =>
          r in e
            ? f(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[r] = a),
        k = (e, r) => {
          for (var a in r || (r = {})) y.call(r, a) && v(e, a, r[a]);
          if (h) for (var a of h(r)) g.call(r, a) && v(e, a, r[a]);
          return e;
        },
        S = (e, r) => b(e, p(r));
      let w = {
        xs: (0, d.h)(4),
        sm: (0, d.h)(6),
        md: (0, d.h)(8),
        lg: (0, d.h)(10),
        xl: (0, d.h)(12),
      };
      var O = (0, u.k)((e) => ({
          root: S(k({}, e.fn.fontStyles()), {
            WebkitTapHighlightColor: "transparent",
            outline: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            touchAction: "none",
            position: "relative",
          }),
        })),
        x = Object.defineProperty,
        z = Object.defineProperties,
        j = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        P = Object.prototype.hasOwnProperty,
        C = Object.prototype.propertyIsEnumerable,
        N = (e, r, a) =>
          r in e
            ? x(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[r] = a),
        $ = (e, r) => {
          for (var a in r || (r = {})) P.call(r, a) && N(e, a, r[a]);
          if (E) for (var a of E(r)) C.call(r, a) && N(e, a, r[a]);
          return e;
        },
        D = (e, r) => z(e, j(r)),
        M = (0, u.k)(
          (e, { color: r, disabled: a, thumbSize: t }, { size: o }) => ({
            label: {
              position: "absolute",
              top: (0, d.h)(-36),
              backgroundColor:
                "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[9],
              fontSize: e.fontSizes.xs,
              color: e.white,
              padding: `calc(${e.spacing.xs} / 2)`,
              borderRadius: e.radius.sm,
              whiteSpace: "nowrap",
              pointerEvents: "none",
              userSelect: "none",
              touchAction: "none",
            },
            thumb: D($({}, e.fn.focusStyles()), {
              boxSizing: "border-box",
              position: "absolute",
              display: a ? "none" : "flex",
              height: t
                ? (0, d.h)(t)
                : `calc(${(0, m.a)({ sizes: w, size: o })} * 2)`,
              width: t
                ? (0, d.h)(t)
                : `calc(${(0, m.a)({ sizes: w, size: o })} * 2)`,
              backgroundColor:
                "dark" === e.colorScheme
                  ? e.fn.themeColor(r, e.fn.primaryShade())
                  : e.white,
              border: `${(0, d.h)(4)} solid ${
                "dark" === e.colorScheme
                  ? e.white
                  : e.fn.themeColor(r, e.fn.primaryShade())
              }`,
              color:
                "dark" === e.colorScheme
                  ? e.white
                  : e.fn.themeColor(r, e.fn.primaryShade()),
              transform: "translate(-50%, -50%)",
              top: "50%",
              cursor: "pointer",
              borderRadius: 1e3,
              alignItems: "center",
              justifyContent: "center",
              transitionDuration: "100ms",
              transitionProperty: "box-shadow, transform",
              transitionTimingFunction: e.transitionTimingFunction,
              zIndex: 3,
              userSelect: "none",
              touchAction: "none",
            }),
            dragging: {
              transform: "translate(-50%, -50%) scale(1.05)",
              boxShadow: e.shadows.sm,
            },
          })
        ),
        I = a(15497),
        R = a(63400);
      let T = (0, t.forwardRef)(
        (
          {
            max: e,
            min: r,
            value: a,
            position: o,
            label: n,
            dragging: l,
            onMouseDown: i,
            onKeyDownCapture: s,
            color: c,
            classNames: u,
            styles: d,
            size: m,
            labelTransition: f,
            labelTransitionDuration: b,
            labelTransitionTimingFunction: p,
            labelAlwaysOn: h,
            thumbLabel: y,
            onFocus: g,
            onBlur: v,
            showLabelOnHover: k,
            isHovered: S,
            children: w = null,
            disabled: O,
            unstyled: x,
            thumbSize: z,
            variant: j,
          },
          E
        ) => {
          let {
              classes: P,
              cx: C,
              theme: N,
            } = M(
              { color: c, disabled: O, thumbSize: z },
              {
                name: "Slider",
                classNames: u,
                styles: d,
                unstyled: x,
                variant: j,
                size: m,
              }
            ),
            [$, D] = (0, t.useState)(!1),
            T = h || l || $ || (k && S);
          return t.createElement(
            I.x,
            {
              tabIndex: 0,
              role: "slider",
              "aria-label": y,
              "aria-valuemax": e,
              "aria-valuemin": r,
              "aria-valuenow": a,
              ref: E,
              className: C(P.thumb, { [P.dragging]: l }),
              onFocus: () => {
                D(!0), "function" == typeof g && g();
              },
              onBlur: () => {
                D(!1), "function" == typeof v && v();
              },
              onTouchStart: i,
              onMouseDown: i,
              onKeyDownCapture: s,
              onClick: (e) => e.stopPropagation(),
              style: { ["rtl" === N.dir ? "right" : "left"]: `${o}%` },
            },
            w,
            t.createElement(
              R.u,
              {
                mounted: null != n && T,
                duration: b,
                transition: f,
                timingFunction: p || N.transitionTimingFunction,
              },
              (e) => t.createElement("div", { style: e, className: P.label }, n)
            )
          );
        }
      );
      T.displayName = "@mantine/core/SliderThumb";
      var F = (0, u.k)(
        (e, { color: r, disabled: a, thumbSize: t }, { size: o }) => ({
          marksContainer: {
            position: "absolute",
            right: t ? (0, d.h)(t / 2) : (0, m.a)({ sizes: w, size: o }),
            left: t ? (0, d.h)(t / 2) : (0, m.a)({ sizes: w, size: o }),
            "&:has(~ input:disabled)": {
              "& .mantine-Slider-markFilled": {
                border: `${(0, d.h)(2)} solid ${
                  "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[2]
                }`,
                borderColor:
                  "dark" === e.colorScheme
                    ? e.colors.dark[3]
                    : e.colors.gray[4],
              },
            },
          },
          markWrapper: {
            position: "absolute",
            top: `calc(${(0, d.h)((0, m.a)({ sizes: w, size: o }))} / 2)`,
            zIndex: 2,
            height: 0,
          },
          mark: {
            boxSizing: "border-box",
            border: `${(0, d.h)(2)} solid ${
              "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[2]
            }`,
            height: (0, m.a)({ sizes: w, size: o }),
            width: (0, m.a)({ sizes: w, size: o }),
            borderRadius: 1e3,
            transform: `translateX(calc(-${(0, m.a)({
              sizes: w,
              size: o,
            })} / 2))`,
            backgroundColor: e.white,
            pointerEvents: "none",
          },
          markFilled: {
            borderColor: a
              ? "dark" === e.colorScheme
                ? e.colors.dark[3]
                : e.colors.gray[4]
              : e.fn.variant({ variant: "filled", color: r }).background,
          },
          markLabel: {
            transform: `translate(-50%, calc(${e.spacing.xs} / 2))`,
            fontSize: e.fontSizes.sm,
            color:
              "dark" === e.colorScheme ? e.colors.dark[2] : e.colors.gray[6],
            whiteSpace: "nowrap",
            cursor: "pointer",
            userSelect: "none",
          },
        })
      );
      function A({
        marks: e,
        color: r,
        size: a,
        thumbSize: o,
        min: n,
        max: l,
        value: i,
        classNames: s,
        styles: u,
        offset: d,
        onChange: m,
        disabled: f,
        unstyled: b,
        inverted: p,
        variant: h,
      }) {
        let { classes: y, cx: g } = F(
            { color: r, disabled: f, thumbSize: o },
            {
              name: "Slider",
              classNames: s,
              styles: u,
              unstyled: b,
              variant: h,
              size: a,
            }
          ),
          v = e.map((e, r) =>
            t.createElement(
              I.x,
              {
                className: y.markWrapper,
                sx: { left: `${c({ value: e.value, min: n, max: l })}%` },
                key: r,
              },
              t.createElement("div", {
                className: g(y.mark, {
                  [y.markFilled]: (function ({
                    mark: e,
                    offset: r,
                    value: a,
                    inverted: t = !1,
                  }) {
                    return t
                      ? ("number" == typeof r && e.value <= r) || e.value >= a
                      : "number" == typeof r
                      ? e.value >= r && e.value <= a
                      : e.value <= a;
                  })({ mark: e, value: i, offset: d, inverted: p }),
                }),
              }),
              e.label &&
                t.createElement(
                  "div",
                  {
                    className: y.markLabel,
                    onMouseDown: (r) => {
                      r.stopPropagation(), f || m(e.value);
                    },
                    onTouchStart: (r) => {
                      r.stopPropagation(), f || m(e.value);
                    },
                  },
                  e.label
                )
            )
          );
        return t.createElement("div", { className: y.marksContainer }, v);
      }
      A.displayName = "@mantine/core/SliderMarks";
      var L = (0, u.k)(
          (
            e,
            { radius: r, color: a, disabled: t, inverted: o, thumbSize: n },
            { size: l }
          ) => ({
            trackContainer: {
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: `calc(${(0, m.a)({ sizes: w, size: l })} * 2)`,
              cursor: "pointer",
              "&:has(~ input:disabled)": {
                "&": { pointerEvents: "none" },
                "& .mantine-Slider-thumb": { display: "none" },
                "& .mantine-Slider-track::before": {
                  content: '""',
                  backgroundColor: o
                    ? "dark" === e.colorScheme
                      ? e.colors.dark[3]
                      : e.colors.gray[4]
                    : "dark" === e.colorScheme
                    ? e.colors.dark[4]
                    : e.colors.gray[2],
                },
                "& .mantine-Slider-bar": {
                  backgroundColor: o
                    ? "dark" === e.colorScheme
                      ? e.colors.dark[4]
                      : e.colors.gray[2]
                    : "dark" === e.colorScheme
                    ? e.colors.dark[3]
                    : e.colors.gray[4],
                },
              },
            },
            track: {
              position: "relative",
              height: (0, m.a)({ sizes: w, size: l }),
              width: "100%",
              marginRight: n
                ? (0, d.h)(n / 2)
                : (0, m.a)({ size: l, sizes: w }),
              marginLeft: n ? (0, d.h)(n / 2) : (0, m.a)({ size: l, sizes: w }),
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                borderRadius: e.fn.radius(r),
                right: `calc(${
                  n ? (0, d.h)(n / 2) : (0, m.a)({ size: l, sizes: w })
                } * -1)`,
                left: `calc(${
                  n ? (0, d.h)(n / 2) : (0, m.a)({ size: l, sizes: w })
                } * -1)`,
                backgroundColor: o
                  ? t
                    ? "dark" === e.colorScheme
                      ? e.colors.dark[3]
                      : e.colors.gray[4]
                    : e.fn.variant({ variant: "filled", color: a }).background
                  : "dark" === e.colorScheme
                  ? e.colors.dark[4]
                  : e.colors.gray[2],
                zIndex: 0,
              },
            },
            bar: {
              position: "absolute",
              zIndex: 1,
              top: 0,
              bottom: 0,
              backgroundColor: o
                ? "dark" === e.colorScheme
                  ? e.colors.dark[4]
                  : e.colors.gray[2]
                : t
                ? "dark" === e.colorScheme
                  ? e.colors.dark[3]
                  : e.colors.gray[4]
                : e.fn.variant({ variant: "filled", color: a }).background,
              borderRadius: e.fn.radius(r),
            },
          })
        ),
        H = Object.defineProperty,
        _ = Object.defineProperties,
        V = Object.getOwnPropertyDescriptors,
        W = Object.getOwnPropertySymbols,
        B = Object.prototype.hasOwnProperty,
        K = Object.prototype.propertyIsEnumerable,
        U = (e, r, a) =>
          r in e
            ? H(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[r] = a),
        X = (e, r) => {
          for (var a in r || (r = {})) B.call(r, a) && U(e, a, r[a]);
          if (W) for (var a of W(r)) K.call(r, a) && U(e, a, r[a]);
          return e;
        },
        Y = (e, r) => _(e, V(r)),
        Z = (e, r) => {
          var a = {};
          for (var t in e) B.call(e, t) && 0 > r.indexOf(t) && (a[t] = e[t]);
          if (null != e && W)
            for (var t of W(e))
              0 > r.indexOf(t) && K.call(e, t) && (a[t] = e[t]);
          return a;
        };
      function q(e) {
        var {
            filled: r,
            size: a,
            thumbSize: o,
            color: n,
            classNames: l,
            styles: i,
            radius: s,
            children: c,
            offset: u,
            disabled: f,
            marksOffset: b,
            unstyled: p,
            inverted: h,
            variant: y,
            containerProps: g,
          } = e,
          v = Z(e, [
            "filled",
            "size",
            "thumbSize",
            "color",
            "classNames",
            "styles",
            "radius",
            "children",
            "offset",
            "disabled",
            "marksOffset",
            "unstyled",
            "inverted",
            "variant",
            "containerProps",
          ]);
        let { classes: k } = L(
          { color: n, radius: s, disabled: f, inverted: h, thumbSize: o },
          {
            name: "Slider",
            classNames: l,
            styles: i,
            unstyled: p,
            variant: y,
            size: a,
          }
        );
        return t.createElement(
          t.Fragment,
          null,
          t.createElement(
            "div",
            X({ className: k.trackContainer }, g),
            t.createElement(
              "div",
              { className: k.track },
              t.createElement(I.x, {
                className: k.bar,
                sx: {
                  left: `calc(${u}% - ${
                    o ? (0, d.h)(o / 2) : (0, m.a)({ size: a, sizes: w })
                  })`,
                  width: `calc(${r}% + 2 * ${
                    o ? (0, d.h)(o / 2) : (0, m.a)({ size: a, sizes: w })
                  })`,
                },
              }),
              c
            )
          ),
          t.createElement(
            A,
            Y(X({}, v), {
              size: a,
              thumbSize: o,
              color: n,
              offset: b,
              classNames: l,
              styles: i,
              disabled: f,
              unstyled: p,
              inverted: h,
              variant: y,
            })
          )
        );
      }
      q.displayName = "@mantine/core/SliderTrack";
      var G = Object.defineProperty,
        J = Object.defineProperties,
        Q = Object.getOwnPropertyDescriptors,
        ee = Object.getOwnPropertySymbols,
        er = Object.prototype.hasOwnProperty,
        ea = Object.prototype.propertyIsEnumerable,
        et = (e, r, a) =>
          r in e
            ? G(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[r] = a),
        eo = (e, r) => {
          for (var a in r || (r = {})) er.call(r, a) && et(e, a, r[a]);
          if (ee) for (var a of ee(r)) ea.call(r, a) && et(e, a, r[a]);
          return e;
        },
        en = (e, r) => J(e, Q(r)),
        el = (e, r) => {
          var a = {};
          for (var t in e) er.call(e, t) && 0 > r.indexOf(t) && (a[t] = e[t]);
          if (null != e && ee)
            for (var t of ee(e))
              0 > r.indexOf(t) && ea.call(e, t) && (a[t] = e[t]);
          return a;
        };
      let ei = (0, t.forwardRef)((e, r) => {
        var {
            className: a,
            size: o,
            classNames: n,
            styles: l,
            disabled: i,
            unstyled: s,
            variant: c,
          } = e,
          u = el(e, [
            "className",
            "size",
            "classNames",
            "styles",
            "disabled",
            "unstyled",
            "variant",
          ]);
        let { classes: d, cx: m } = O(null, {
          name: "Slider",
          classNames: n,
          styles: l,
          unstyled: s,
          variant: c,
          size: o,
        });
        return t.createElement(
          I.x,
          en(eo({}, u), { tabIndex: -1, className: m(d.root, a), ref: r })
        );
      });
      function es(e, r) {
        return parseFloat(e.toFixed(r));
      }
      ei.displayName = "@mantine/core/SliderRoot";
      var ec = Object.defineProperty,
        eu = Object.defineProperties,
        ed = Object.getOwnPropertyDescriptors,
        em = Object.getOwnPropertySymbols,
        ef = Object.prototype.hasOwnProperty,
        eb = Object.prototype.propertyIsEnumerable,
        ep = (e, r, a) =>
          r in e
            ? ec(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a,
              })
            : (e[r] = a),
        eh = (e, r) => {
          for (var a in r || (r = {})) ef.call(r, a) && ep(e, a, r[a]);
          if (em) for (var a of em(r)) eb.call(r, a) && ep(e, a, r[a]);
          return e;
        },
        ey = (e, r) => eu(e, ed(r)),
        eg = (e, r) => {
          var a = {};
          for (var t in e) ef.call(e, t) && 0 > r.indexOf(t) && (a[t] = e[t]);
          if (null != e && em)
            for (var t of em(e))
              0 > r.indexOf(t) && eb.call(e, t) && (a[t] = e[t]);
          return a;
        };
      let ev = {
          size: "md",
          radius: "xl",
          min: 0,
          max: 100,
          step: 1,
          marks: [],
          label: (e) => e,
          labelTransition: "skew-down",
          labelTransitionDuration: 0,
          labelAlwaysOn: !1,
          thumbLabel: "",
          showLabelOnHover: !0,
          disabled: !1,
          scale: (e) => e,
        },
        ek = (0, t.forwardRef)((e, r) => {
          let a = (0, s.N4)("Slider", ev, e),
            {
              classNames: u,
              styles: d,
              color: m,
              value: f,
              onChange: b,
              onChangeEnd: p,
              size: h,
              radius: y,
              min: g,
              max: v,
              step: k,
              precision: S,
              defaultValue: w,
              name: O,
              marks: x,
              label: z,
              labelTransition: j,
              labelTransitionDuration: E,
              labelTransitionTimingFunction: P,
              labelAlwaysOn: C,
              thumbLabel: N,
              showLabelOnHover: $,
              thumbChildren: D,
              disabled: M,
              unstyled: I,
              thumbSize: R,
              scale: F,
              inverted: A,
              variant: L,
            } = a,
            H = eg(a, [
              "classNames",
              "styles",
              "color",
              "value",
              "onChange",
              "onChangeEnd",
              "size",
              "radius",
              "min",
              "max",
              "step",
              "precision",
              "defaultValue",
              "name",
              "marks",
              "label",
              "labelTransition",
              "labelTransitionDuration",
              "labelTransitionTimingFunction",
              "labelAlwaysOn",
              "thumbLabel",
              "showLabelOnHover",
              "thumbChildren",
              "disabled",
              "unstyled",
              "thumbSize",
              "scale",
              "inverted",
              "variant",
            ]),
            _ =
              null != S
                ? S
                : (function (e) {
                    if (!e) return 0;
                    let r = e.toString().split(".");
                    return r.length > 1 ? r[1].length : 0;
                  })(k),
            V = (0, s.rZ)(),
            [W, B] = (0, t.useState)(!1),
            [K, U] = (0, o.C)({
              value: "number" == typeof f ? (0, n.u)(f, g, v) : f,
              defaultValue: "number" == typeof w ? (0, n.u)(w, g, v) : w,
              finalValue: (0, n.u)(0, g, v),
              onChange: b,
            }),
            X = (0, t.useRef)(K),
            Y = (0, t.useRef)(),
            Z = (0, t.useRef)(),
            G = c({ value: K, min: g, max: v }),
            J = F(K),
            Q = "function" == typeof z ? z(J) : z,
            ee = (0, t.useCallback)(
              ({ x: e }) => {
                if (!M) {
                  let r = (function ({
                    value: e,
                    containerWidth: r,
                    min: a,
                    max: t,
                    step: o,
                    precision: n,
                  }) {
                    let l = (r ? Math.min(Math.max(e, 0), r) / r : e) * (t - a),
                      i = Math.max(
                        (0 !== l ? Math.round(l / o) * o : 0) + a,
                        a
                      );
                    return void 0 !== n ? Number(i.toFixed(n)) : i;
                  })({ value: e, min: g, max: v, step: k, precision: _ });
                  U(r), (X.current = r);
                }
              },
              [M, g, v, k, _, U]
            ),
            { ref: er, active: ea } = (0, l.r)(
              ee,
              { onScrubEnd: () => (null == p ? void 0 : p(X.current)) },
              V.dir
            );
          return t.createElement(
            ei,
            ey(eh({}, H), {
              ref: (0, i.Y)(r, Y),
              onKeyDownCapture: (e) => {
                if (!M)
                  switch (e.key) {
                    case "ArrowUp": {
                      e.preventDefault(), Z.current.focus();
                      let r = es(Math.min(Math.max(K + k, g), v), _);
                      null == p || p(r), U(r);
                      break;
                    }
                    case "ArrowRight": {
                      e.preventDefault(), Z.current.focus();
                      let r = es(
                        Math.min(
                          Math.max("rtl" === V.dir ? K - k : K + k, g),
                          v
                        ),
                        _
                      );
                      null == p || p(r), U(r);
                      break;
                    }
                    case "ArrowDown": {
                      e.preventDefault(), Z.current.focus();
                      let r = es(Math.min(Math.max(K - k, g), v), _);
                      null == p || p(r), U(r);
                      break;
                    }
                    case "ArrowLeft": {
                      e.preventDefault(), Z.current.focus();
                      let r = es(
                        Math.min(
                          Math.max("rtl" === V.dir ? K + k : K - k, g),
                          v
                        ),
                        _
                      );
                      null == p || p(r), U(r);
                      break;
                    }
                    case "Home":
                      e.preventDefault(),
                        Z.current.focus(),
                        null == p || p(g),
                        U(g);
                      break;
                    case "End":
                      e.preventDefault(),
                        Z.current.focus(),
                        null == p || p(v),
                        U(v);
                  }
              },
              onMouseDownCapture: () => {
                var e;
                return null == (e = Y.current) ? void 0 : e.focus();
              },
              size: h,
              classNames: u,
              styles: d,
              disabled: M,
              unstyled: I,
              variant: L,
            }),
            t.createElement(
              q,
              {
                inverted: A,
                offset: 0,
                filled: G,
                marks: x,
                size: h,
                thumbSize: R,
                radius: y,
                color: m,
                min: g,
                max: v,
                value: J,
                onChange: U,
                classNames: u,
                styles: d,
                disabled: M,
                unstyled: I,
                variant: L,
                containerProps: {
                  ref: er,
                  onMouseEnter: $ ? () => B(!0) : void 0,
                  onMouseLeave: $ ? () => B(!1) : void 0,
                },
              },
              t.createElement(
                T,
                {
                  max: v,
                  min: g,
                  value: J,
                  position: G,
                  dragging: ea,
                  color: m,
                  size: h,
                  label: Q,
                  ref: Z,
                  labelTransition: j,
                  labelTransitionDuration: E,
                  labelTransitionTimingFunction: P,
                  labelAlwaysOn: C,
                  classNames: u,
                  styles: d,
                  thumbLabel: N,
                  showLabelOnHover: $,
                  isHovered: W,
                  disabled: M,
                  unstyled: I,
                  thumbSize: R,
                  variant: L,
                },
                D
              )
            ),
            t.createElement("input", { type: "hidden", name: O, value: J })
          );
        });
      ek.displayName = "@mantine/core/Slider";
    },
  },
]);
