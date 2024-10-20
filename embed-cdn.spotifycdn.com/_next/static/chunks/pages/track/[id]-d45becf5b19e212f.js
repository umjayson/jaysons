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
      r = Error().stack;
    r &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[r] = "ac1b78fd-b8cf-4b72-b573-fe2e469ff936"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ac1b78fd-b8cf-4b72-b573-fe2e469ff936"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [856],
    {
      19810: function (e, r, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          "/track/[id]",
          function () {
            return t(1981);
          },
        ]);
      },
      31738: function (e, r, t) {
        "use strict";
        t.d(r, {
          W: function () {
            return i;
          },
        });
        var n = t(85893),
          a = t(43740),
          s = t.n(a);
        let i = () =>
          (0, n.jsx)("div", { className: s().backgroundColorContainer });
      },
      13930: function (e, r, t) {
        "use strict";
        t.d(r, {
          B: function () {
            return _;
          },
        });
        var n = t(85893),
          a = t(18872),
          s = t(67294),
          i = t(59188),
          o = t(95829),
          l = t(35775),
          c = t(8950),
          d = t(9603),
          u = t.n(d);
        let _ = (e) => {
          let { isPreview: r, hasPlaybackContext: t, onClick: d } = e,
            [_, p] = (0, s.useState)(!1),
            { width: x, height: C } = (0, s.useContext)(o.h),
            f = (0, s.useRef)(null),
            { playbackState: b } = (0, s.useContext)(i.C),
            v = b?.isPaused;
          return (
            (0, s.useEffect)(
              () => (
                x && C && x >= l.Zo.medium && C >= l.p4.large && !r && t
                  ? (f.current = setTimeout(() => p(!0), 200))
                  : p(!1),
                () => {
                  f.current && clearTimeout(f.current);
                }
              ),
              [r, v, f, x, C, t]
            ),
            (0, n.jsx)(c.D, {
              className: (0, a.cx)(u().coverArtSingle, {
                [u().scaleDownCoverArt]: _,
              }),
              onClick: d,
            })
          );
        };
      },
      19747: function (e, r, t) {
        "use strict";
        t.d(r, {
          G: function () {
            return l;
          },
        });
        var n = t(85893);
        t(67294);
        var a = t(9473),
          s = t(1594),
          i = t(95253),
          o = t.n(i);
        let l = (e) => {
          let { playOnSpotifyClick: r } = e,
            t = (0, a.v9)((e) => e.machineState.showOverflowMenu);
          return (0, n.jsx)("div", {
            className: o().wrapper,
            children: (0, n.jsx)(s.I, { playOnSpotifyClick: r, visible: t }),
          });
        };
      },
      1981: function (e, r, t) {
        "use strict";
        t.r(r),
          t.d(r, {
            __N_SSP: function () {
              return M;
            },
            default: function () {
              return z;
            },
          });
        var n = t(85893),
          a = t(37542),
          s = t(67294),
          i = t(67584),
          o = t(53118),
          l = t(94184),
          c = t.n(l),
          d = t(9473),
          u = t(5030),
          _ = t(59188),
          p = t(17033),
          x = t(97828),
          C = t(31738),
          f = t(13930),
          b = t(19747),
          v = t(47229),
          g = t(1861),
          y = t(13162),
          h = t(45019),
          j = t(63301),
          m = t(22222),
          k = t(33515),
          w = t.n(k);
        let W = () => {
          let { playbackState: e } = (0, s.useContext)(_.C),
            r = !!e?.hasContext,
            { isCompactLegacy: t } = (0, v.M)();
          return (0, n.jsxs)("div", {
            className: c()(w().playerControlsWrapper, {
              [w().hasPlaybackContext]: r,
            }),
            children: [
              (0, n.jsxs)("div", {
                className: c()(w().baselineWrapper),
                children: [
                  (0, n.jsx)("div", {
                    className: c()(w().progressBarWrapper, {
                      [w().hasPlaybackContext]: r,
                    }),
                    dir: "ltr",
                    children: (0, n.jsx)(j.Z, {}),
                  }),
                  (0, n.jsx)(m.r, {}),
                  t && (0, n.jsx)(g.E, {}),
                  (0, n.jsx)(y.c, {}),
                ],
              }),
              (0, n.jsx)("div", {
                className: c()(w().playButtonWrapper),
                children: (0, n.jsx)(h.J, {}),
              }),
            ],
          });
        };
        var N = t(97164),
          P = t(32967),
          S = t(72593),
          A = t(70285),
          D = t(86526),
          B = t(29119),
          T = t(52294),
          E = t.n(T);
        let I = () => {
          (0, u.p)();
          let e = (0, d.v9)((e) => e.machineState.initialized),
            r = (0, d.v9)((e) => e.machineState.playbackMode),
            { playbackState: t } = (0, s.useContext)(_.C),
            a = !!t?.hasContext,
            i = r === p.d.PREVIEW,
            o = a && !i,
            l = (0, d.v9)((e) => e.data.entity?.uri);
          return l
            ? (0, n.jsxs)("div", {
                "data-testid": "embed-widget-container",
                className: c()("encore-dark-theme", E().widgetContainer),
                children: [
                  (0, n.jsx)(C.W, {}),
                  (0, n.jsxs)("div", {
                    "data-testid": `initialized-${e}`,
                    className: c()(E().singleGridContainer, {
                      [E().hasPlaybackContext]: o,
                    }),
                    children: [
                      (0, n.jsx)("div", {
                        className: c()(E().coverArtContainer, {
                          [E().hasPlaybackContext]: o,
                        }),
                        children: (0, n.jsx)(f.B, {
                          isPreview: i,
                          hasPlaybackContext: a,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: E().spotifyLogoContainer,
                        children: (0, n.jsx)(P.Z, {}),
                      }),
                      (0, n.jsxs)("div", {
                        className: c()(E().metadataWrapper, {
                          [E().hasPlaybackContext]: o,
                          [E().preview]: i,
                        }),
                        children: [
                          (0, n.jsx)(D.D, {}),
                          (0, n.jsxs)("span", {
                            className: c()(E().labelsAndSubtitle, {
                              [E().preview]: i,
                            }),
                            children: [
                              (0, n.jsx)(S.$, {}),
                              (0, n.jsx)(A.Q, {}),
                            ],
                          }),
                          (0, n.jsx)(x.w, { uri: l, mainView: !0 }),
                        ],
                      }),
                      r !== p.d.UNKNOWN &&
                        (i ? (0, n.jsx)(N.H, {}) : (0, n.jsx)(W, {})),
                    ],
                  }),
                  (0, n.jsx)(b.G, {}),
                  (0, n.jsx)(B.Q, {}),
                ],
              })
            : null;
        };
        var G = t(95829),
          O = t(76437),
          Z = t(35775),
          M = !0,
          z = (e) => {
            let r = (0, O.v)(e) ? e.rtl : e.state.settings.rtl;
            return (s.useEffect(() => {
              document
                .querySelector("html")
                ?.setAttribute("dir", r ? "rtl" : "ltr");
            }, [r]),
            (0, O.v)(e))
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(a.xB, { styles: Z.ue }),
                    (0, n.jsx)(G.b, { children: (0, n.jsx)(o.Z, { ...e }) }),
                  ],
                })
              : (0, n.jsx)(i.g, { ...e, children: (0, n.jsx)(I, {}) });
          };
      },
      43740: function (e) {
        e.exports = {
          backgroundColorContainer:
            "BackgroundColorContainer_backgroundColorContainer__YZSQ7",
        };
      },
      9603: function (e) {
        e.exports = {
          coverArtSingle: "CoverArtSingle_coverArtSingle__KLcKa",
          scaleDownCoverArt: "CoverArtSingle_scaleDownCoverArt__xWqrS",
        };
      },
      95253: function (e) {
        e.exports = {
          wrapper: "OverflowMenuSingle_wrapper__1m1hM",
          menuItem: "OverflowMenuSingle_menuItem__BSbDk",
        };
      },
      33515: function (e) {
        e.exports = {
          playerControlsWrapper: "PlayerControls_playerControlsWrapper__eaDbG",
          hasPlaybackContext: "PlayerControls_hasPlaybackContext__jaGyB",
          baselineWrapper: "PlayerControls_baselineWrapper__rDAnZ",
          progressBarWrapper: "PlayerControls_progressBarWrapper__Twz28",
          playButtonWrapper: "PlayerControls_playButtonWrapper__4IRvr",
        };
      },
      52294: function (e) {
        e.exports = {
          widgetContainer: "TrackWidget_widgetContainer__gADzr",
          singleGridContainer: "TrackWidget_singleGridContainer__iYPj8",
          coverArtContainer: "TrackWidget_coverArtContainer__YVwp8",
          hasPlaybackContext: "TrackWidget_hasPlaybackContext__YVVG2",
          spotifyLogoContainer: "TrackWidget_spotifyLogoContainer__9m41A",
          metadataWrapper: "TrackWidget_metadataWrapper__GzypS",
          preview: "TrackWidget_preview__8DxyA",
          labelsAndSubtitle: "TrackWidget_labelsAndSubtitle__nBrZb",
        };
      },
    },
    function (e) {
      e.O(0, [3714, 3562, 2049, 347, 2888, 9774, 179], function () {
        return e((e.s = 19810));
      }),
        (_N_E = e.O());
    },
  ]);
