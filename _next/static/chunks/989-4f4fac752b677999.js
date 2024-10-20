(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [989],
  {
    50989: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return eo;
        },
        t: function () {
          return et;
        },
      });
      var o = n(57437),
        r = n(2265),
        s = n(20044),
        a = n.n(s),
        i = (e) => {
          let {
              backgroundUrl: t,
              shuffleAudios: n,
              audio: s,
              videoTagRef: i,
              audioTagRef: c,
            } = e,
            [l, d] = (0, r.useState)(!1),
            u = (0, r.useRef)(null),
            f = "string" == typeof s,
            m = f ? "" !== s : s.length > 0,
            [p, h] = (0, r.useState)("");
          return (
            (0, r.useEffect)(() => {
              (function (e) {
                for (let t of [".mp4", ".mov", ".avi", ".m4v"])
                  if (e.endsWith(t)) return { video: !0 };
                return { video: !1 };
              })(t).video
                ? d(!0)
                : "" !== t &&
                  (d(!1),
                  u.current &&
                    (u.current.style.backgroundImage = "url(".concat(t, ")")));
            }, [t, u]),
            (0, r.useEffect)(() => {
              if (f || 0 !== s.length) {
                if (f) h(s);
                else if (1 === s.length) h(s[0].url);
                else if (n) h(s[Math.floor(Math.random() * s.length)].url);
                else {
                  let e = !f && m && s.find((e) => !0 === e.selected);
                  h(e ? e.url : s[0].url);
                }
              }
            }, [s, n, f, m]),
            (0, o.jsxs)(o.Fragment, {
              children: [
                l && "" !== t
                  ? (0, o.jsx)("video", {
                      src: t,
                      playsInline: !0,
                      loop: !0,
                      muted: m,
                      className: a().backgroundVideo,
                      ref: i,
                    })
                  : (0, o.jsx)("div", {
                      className: a().backgroundImage,
                      style: { backgroundImage: "url(".concat(t, ")") },
                      ref: u,
                    }),
                m && (0, o.jsx)("audio", { src: p, loop: !0, ref: c }),
              ],
            })
          );
        };
      function c(e) {
        let {
            videoTagRef: t,
            audioTagRef: n,
            clickToEnterText: s,
            userFont: i,
            userContainerRef: c,
            animationClass: l,
          } = e,
          d = (0, r.useRef)(null),
          u = () => {
            null !== t.current && ((t.current.volume = 0.25), t.current.play());
          },
          f = () => {
            null !== n.current && ((n.current.volume = 0.25), n.current.play());
          };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: a().clickToEnterOverlay,
            onClick: () => {
              d.current &&
                (d.current.classList.toggle(a().hide),
                (d.current.style.pointerEvents = "none"),
                setTimeout(() => {
                  d.current && (d.current.style.display = "none");
                }, 650)),
                l === a().fadeUp
                  ? c.current.classList.add(l)
                  : l === a().unfold &&
                    document
                      .querySelectorAll(".".concat(a().unfoldStart))
                      .forEach((e, t) => {
                        setTimeout(() => {
                          e.classList.add(a().unfold);
                        }, 300 * t);
                      }),
                f(),
                u();
            },
            ref: d,
            children: (0, o.jsx)("div", {
              className: a().clickToEnterText,
              style: i.clickToEnter,
              children: s,
            }),
          }),
        });
      }
      var l = {
          satoshi: {
            clickToEnter: { fontWeight: 700, fontSize: "32px" },
            username: { fontWeight: 600, fontSize: "39.5px" },
            description: { fontWeight: 570, fontSize: "19px" },
            joinDate: { fontWeight: 400, fontSize: "14.5px" },
            profileViewsCount: { fontWeight: 550, fontSize: "14.5px" },
            discordUsername: { fontWeight: 500, fontSize: "22px" },
            discordStatus: { fontWeight: 450, fontSize: "14.5px" },
            serverName: { fontWeight: 450, fontSize: "20px" },
            memberCount: { fontWeight: 450, fontSize: "13.3px" },
            joinButton: { fontWeight: 450, fontSize: "13px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "16.5px" },
            buttonText: { fontWeight: 450, fontSize: "18px" },
            buttonUrl: { fontWeight: 400, fontSize: "15px" },
            customUrlHeading: { fontWeight: 450, fontSize: "18px" },
            customUrlLink: { fontWeight: 400, fontSize: "16.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "17.5px" },
          },
          firacode: {
            clickToEnter: { fontWeight: 700, fontSize: "29px" },
            username: { fontWeight: 550, fontSize: "36.5px" },
            description: { fontWeight: 570, fontSize: "17.5px" },
            joinDate: { fontWeight: 400, fontSize: "14px" },
            profileViewsCount: { fontWeight: 550, fontSize: "14.5px" },
            discordUsername: { fontWeight: 550, fontSize: "21px" },
            discordStatus: { fontWeight: 300, fontSize: "13.4px" },
            serverName: { fontWeight: 450, fontSize: "17px" },
            memberCount: { fontWeight: 400, fontSize: "12px" },
            joinButton: { fontWeight: 450, fontSize: "13px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "15.5px" },
            buttonText: { fontWeight: 450, fontSize: "17.5px" },
            buttonUrl: { fontWeight: 400, fontSize: "13.5px" },
            customUrlHeading: { fontWeight: 450, fontSize: "18.5px" },
            customUrlLink: { fontWeight: 400, fontSize: "15.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "17px" },
          },
          poppins: {
            clickToEnter: { fontWeight: 700, fontSize: "29px" },
            username: { fontWeight: 600, fontSize: "36.5px" },
            description: { fontWeight: 570, fontSize: "17px" },
            joinDate: { fontWeight: 400, fontSize: "13px" },
            profileViewsCount: { fontWeight: 550, fontSize: "14.5px" },
            discordUsername: { fontWeight: 600, fontSize: "20px" },
            discordStatus: { fontWeight: 300, fontSize: "12.8px" },
            serverName: { fontWeight: 450, fontSize: "19px" },
            memberCount: { fontWeight: 450, fontSize: "13px" },
            joinButton: { fontWeight: 450, fontSize: "11.5px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "16px" },
            buttonText: { fontWeight: 450, fontSize: "17px" },
            buttonUrl: { fontWeight: 400, fontSize: "14px" },
            customUrlHeading: { fontWeight: 450, fontSize: "18.5px" },
            customUrlLink: { fontWeight: 400, fontSize: "15.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "16px" },
          },
          array: {
            clickToEnter: { fontWeight: 500, fontSize: "34px" },
            username: { fontWeight: 400, fontSize: "36.5px" },
            description: { fontWeight: 400, fontSize: "20px" },
            joinDate: { fontWeight: 400, fontSize: "15px" },
            profileViewsCount: { fontWeight: 400, fontSize: "16px" },
            discordUsername: { fontWeight: 400, fontSize: "24.5px" },
            discordStatus: { fontWeight: 100, fontSize: "14.5px" },
            serverName: { fontWeight: 450, fontSize: "21.5px" },
            memberCount: { fontWeight: 450, fontSize: "14px" },
            joinButton: { fontWeight: 400, fontSize: "14.5px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "19px" },
            buttonText: { fontWeight: 200, fontSize: "19.5px" },
            buttonUrl: { fontWeight: 300, fontSize: "17px" },
            customUrlHeading: { fontWeight: 400, fontSize: "21px" },
            customUrlLink: { fontWeight: 300, fontSize: "18px" },
            customUrlButtons: { fontWeight: 300, fontSize: "19px" },
          },
          drippy: {
            clickToEnter: { fontWeight: 200, fontSize: "31px" },
            username: { fontWeight: 400, fontSize: "33.5px" },
            description: { fontWeight: 400, fontSize: "17px" },
            joinDate: { fontWeight: 400, fontSize: "12.5px" },
            profileViewsCount: { fontWeight: 400, fontSize: "16px" },
            discordUsername: { fontWeight: 400, fontSize: "21.5px" },
            discordStatus: { fontWeight: 100, fontSize: "12.5px" },
            serverName: { fontWeight: 450, fontSize: "17px" },
            memberCount: { fontWeight: 400, fontSize: "13px" },
            joinButton: { fontWeight: 450, fontSize: "12px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "15.5px" },
            buttonText: { fontWeight: 450, fontSize: "17.5px" },
            buttonUrl: { fontWeight: 400, fontSize: "13px" },
            customUrlHeading: { fontWeight: 400, fontSize: "17.5px" },
            customUrlLink: { fontWeight: 300, fontSize: "15.5px" },
            customUrlButtons: { fontWeight: 300, fontSize: "16px" },
          },
          minecraft: {
            clickToEnter: { fontWeight: 200, fontSize: "31px" },
            username: { fontWeight: 400, fontSize: "33px" },
            description: { fontWeight: 400, fontSize: "16px" },
            joinDate: { fontWeight: 400, fontSize: "13px" },
            profileViewsCount: { fontWeight: 400, fontSize: "14px" },
            discordUsername: { fontWeight: 400, fontSize: "20.5px" },
            discordStatus: { fontWeight: 100, fontSize: "11.5px" },
            serverName: { fontWeight: 450, fontSize: "16.5px" },
            memberCount: { fontWeight: 450, fontSize: "10.5px" },
            joinButton: { fontWeight: 450, fontSize: "10px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "13.5px" },
            buttonText: { fontWeight: 450, fontSize: "16px" },
            buttonUrl: { fontWeight: 400, fontSize: "12.5px" },
            customUrlHeading: { fontWeight: 400, fontSize: "16.5px" },
            customUrlLink: { fontWeight: 300, fontSize: "13.5px" },
            customUrlButtons: { fontWeight: 300, fontSize: "14.5px" },
          },
          outfit: {
            clickToEnter: { fontWeight: 700, fontSize: "30px" },
            username: { fontWeight: 600, fontSize: "37.5px" },
            description: { fontWeight: 570, fontSize: "18px" },
            joinDate: { fontWeight: 400, fontSize: "14px" },
            profileViewsCount: { fontWeight: 550, fontSize: "15.5px" },
            discordUsername: { fontWeight: 600, fontSize: "21px" },
            discordStatus: { fontWeight: 300, fontSize: "13.8px" },
            serverName: { fontWeight: 450, fontSize: "20px" },
            memberCount: { fontWeight: 450, fontSize: "14px" },
            joinButton: { fontWeight: 450, fontSize: "12.5px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "17px" },
            buttonText: { fontWeight: 450, fontSize: "18px" },
            buttonUrl: { fontWeight: 400, fontSize: "15px" },
            customUrlHeading: { fontWeight: 400, fontSize: "20.5px" },
            customUrlLink: { fontWeight: 300, fontSize: "17.5px" },
            customUrlButtons: { fontWeight: 300, fontSize: "17.5px" },
          },
          chillax: {
            clickToEnter: { fontWeight: 700, fontSize: "30px" },
            username: { fontWeight: 600, fontSize: "37.5px" },
            description: { fontWeight: 570, fontSize: "18px" },
            joinDate: { fontWeight: 400, fontSize: "14px" },
            profileViewsCount: { fontWeight: 550, fontSize: "15.5px" },
            discordUsername: { fontWeight: 600, fontSize: "20px" },
            discordStatus: { fontWeight: 300, fontSize: "12.8px" },
            serverName: { fontWeight: 450, fontSize: "19px" },
            memberCount: { fontWeight: 450, fontSize: "12.5px" },
            joinButton: { fontWeight: 450, fontSize: "12px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "16px" },
            buttonText: { fontWeight: 450, fontSize: "18px" },
            buttonUrl: { fontWeight: 400, fontSize: "15px" },
            customUrlHeading: { fontWeight: 400, fontSize: "19px" },
            customUrlLink: { fontWeight: 300, fontSize: "16px" },
            customUrlButtons: { fontWeight: 300, fontSize: "16px" },
          },
          velocity: {
            clickToEnter: { fontWeight: 600, fontSize: "23px" },
            username: { fontWeight: 600, fontSize: "32px" },
            description: { fontWeight: 570, fontSize: "14px" },
            joinDate: { fontWeight: 400, fontSize: "10.5px" },
            profileViewsCount: { fontWeight: 550, fontSize: "10.5px" },
            discordUsername: { fontWeight: 450, fontSize: "16px" },
            discordStatus: { fontWeight: 300, fontSize: "9px" },
            serverName: { fontWeight: 450, fontSize: "16px" },
            memberCount: { fontWeight: 300, fontSize: "8.5px" },
            joinButton: { fontWeight: 450, fontSize: "10px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "13.5px" },
            buttonText: { fontWeight: 450, fontSize: "14.5px" },
            buttonUrl: { fontWeight: 400, fontSize: "12px" },
            customUrlHeading: { fontWeight: 450, fontSize: "15px" },
            customUrlLink: { fontWeight: 400, fontSize: "13.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "13px" },
          },
          technor: {
            clickToEnter: { fontWeight: 700, fontSize: "30px" },
            username: { fontWeight: 600, fontSize: "36.5px" },
            description: { fontWeight: 550, fontSize: "18px" },
            joinDate: { fontWeight: 400, fontSize: "13.5px" },
            profileViewsCount: { fontWeight: 550, fontSize: "14.5px" },
            discordUsername: { fontWeight: 600, fontSize: "20px" },
            discordStatus: { fontWeight: 300, fontSize: "13px" },
            serverName: { fontWeight: 450, fontSize: "19px" },
            memberCount: { fontWeight: 450, fontSize: "12.5px" },
            joinButton: { fontWeight: 450, fontSize: "12px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "16px" },
            buttonText: { fontWeight: 450, fontSize: "17px" },
            buttonUrl: { fontWeight: 400, fontSize: "14px" },
            customUrlHeading: { fontWeight: 450, fontSize: "18.5px" },
            customUrlLink: { fontWeight: 400, fontSize: "15.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "16px" },
          },
          jetbrains_mono: {
            clickToEnter: { fontWeight: 700, fontSize: "29px" },
            username: { fontWeight: 600, fontSize: "36.5px" },
            description: { fontWeight: 570, fontSize: "17px" },
            joinDate: { fontWeight: 400, fontSize: "13px" },
            profileViewsCount: { fontWeight: 550, fontSize: "14.5px" },
            discordUsername: { fontWeight: 600, fontSize: "20px" },
            discordStatus: { fontWeight: 300, fontSize: "12.8px" },
            serverName: { fontWeight: 450, fontSize: "19px" },
            memberCount: { fontWeight: 450, fontSize: "13px" },
            joinButton: { fontWeight: 450, fontSize: "11.5px" },
            joinButtonLarge: { fontWeight: 450, fontSize: "16px" },
            buttonText: { fontWeight: 450, fontSize: "17px" },
            buttonUrl: { fontWeight: 400, fontSize: "14px" },
            customUrlHeading: { fontWeight: 450, fontSize: "18.5px" },
            customUrlLink: { fontWeight: 400, fontSize: "15.5px" },
            customUrlButtons: { fontWeight: 450, fontSize: "16px" },
          },
        },
        d = n(48667);
      function u(e) {
        let {
          backgroundEffects: t,
          cursorEffects: n,
          cursorEffectsColor: r,
          textColor: s,
          backgroundColor: i,
          cursorUrl: c,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            "snowflakes" === t
              ? (0, o.jsx)(o.Fragment, {
                  children: (0, o.jsxs)("div", {
                    "aria-hidden": "true",
                    className: a().snowflakes,
                    children: [
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className: a().snowflake,
                        children: (0, o.jsx)("div", {
                          className: a().inner,
                          children: "❅",
                        }),
                      }),
                    ],
                  }),
                })
              : "rain" === t
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(d.default, {
                      strategy: "beforeInteractive",
                      src: "https://assets.guns.lol/guns_storm.js",
                      id: "_gunsstorm",
                    }),
                    (0, o.jsx)(d.default, {
                      strategy: "beforeInteractive",
                      id: "_gunsstormcode",
                      children:
                        "\n                                snowStorm.snowColor = '".concat(
                          s,
                          "';\n                                snowStorm.flakesMaxActive = 80;\n                                snowStorm.useTwinkleEffect = true;\n                                snowStorm.autoStart = true;\n                                snowStorm.freezeOnBlur = false;\n                                snowStorm.excludeMobile = false;\n                            "
                        ),
                    }),
                  ],
                })
              : "blurred" === t
              ? (0, o.jsx)("div", { className: a().blurredBackground })
              : "tv" === t
              ? (0, o.jsx)("div", { className: a().oldTV })
              : "night" === t &&
                (0, o.jsx)("div", { className: a().nightTime }),
            (0, o.jsx)(d.default, {
              strategy: "beforeInteractive",
              src: "https://unpkg.com/cursor-effects@latest/dist/browser.js",
              id: "_cursor",
            }),
            "bubbles" === n
              ? (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  id: "_cursorbubbles",
                  children:
                    '\n                        new cursoreffects.bubbleCursor({\n                        color: ["'.concat(
                      r,
                      '"]\n                        });\n                    '
                    ),
                })
              : "dot" == n
              ? (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  id: "_cursordot",
                  children:
                    '\n                        new cursoreffects.followingDotCursor({\n                        color: ["'.concat(
                      r,
                      '"]\n                        });\n                    '
                    ),
                })
              : "snowflakes" === n
              ? (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  id: "_cursorsnowflakes",
                  children:
                    '\n                        new cursoreffects.snowflakeCursor({\n                        color: ["'.concat(
                      r,
                      '"]\n                        });\n                    '
                    ),
                })
              : "particles" === n
              ? (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  id: "_cursorparticles",
                  children:
                    '\n                        new cursoreffects.fairyDustCursor({\n                        colors: ["'.concat(
                      r,
                      '"]\n                        });\n                    '
                    ),
                })
              : "ghost" === n
              ? (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  id: "_cursorghost",
                  children:
                    '\n                        new cursoreffects.trailingCursor({particles: 15, rate: 0.6, baseImageSrc: "'.concat(
                      c,
                      '"});\n                    '
                    ),
                })
              : "cat" === n &&
                (0, o.jsx)(d.default, {
                  strategy: "beforeInteractive",
                  src: "https://assets.guns.lol/oneko.js",
                  id: "_ccat",
                }),
            "" !== c &&
              (0, o.jsx)("style", {
                children:
                  "\n                    * {\n                      cursor: url(".concat(
                    c,
                    ") 16 16, auto !important;\n                    }\n                    "
                  ),
              }),
            (0, o.jsx)("style", {
              children:
                "\n                ::-moz-selection {\n                    background: "
                  .concat(s, ";\n                    color: ")
                  .concat(
                    i,
                    ";\n                }\n                ::selection {\n                    background: "
                  )
                  .concat(s, ";\n                    color: ")
                  .concat(i, ";\n                }\n                "),
            }),
          ],
        });
      }
      let f = {
        profileViews: (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: (0, o.jsx)("path", {
            fill: "currentColor",
            d: "M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5",
          }),
        }),
        userNotFound: (0, o.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: [
            (0, o.jsx)("defs", {
              children: (0, o.jsx)("mask", {
                id: "ipTError0",
                children: (0, o.jsx)("path", {
                  fill: "#555",
                  fillRule: "evenodd",
                  stroke: "#fff",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "4",
                  d: "m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z",
                  clipRule: "evenodd",
                }),
              }),
            }),
            (0, o.jsx)("path", {
              fill: "currentColor",
              d: "M0 0h48v48H0z",
              mask: "url(#ipTError0)",
            }),
          ],
        }),
        userAvatar: (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "4 4 16 16",
          children: (0, o.jsx)("path", {
            fill: "currentColor",
            d: "M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-6 8q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20H6Z",
          }),
        }),
        status: (0, o.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16",
          children: (0, o.jsx)("path", {
            fill: "currentColor",
            d: "M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8",
          }),
        }),
        muted: (0, o.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: [
            (0, o.jsx)("defs", {
              children: (0, o.jsxs)("mask", {
                id: "ipTVolumeMute0",
                children: [
                  (0, o.jsx)("mask", {
                    id: "ipTVolumeMute1",
                    width: "13",
                    height: "13",
                    x: "30",
                    y: "18",
                    maskUnits: "userSpaceOnUse",
                    style: { maskType: "alpha" },
                    children: (0, o.jsx)("path", { d: "M30 18h13v13H30z" }),
                  }),
                  (0, o.jsxs)("g", {
                    fill: "none",
                    stroke: "#fff",
                    strokeLinejoin: "round",
                    strokeWidth: "4",
                    children: [
                      (0, o.jsx)("g", {
                        strokeLinecap: "round",
                        mask: "url(#ipTVolumeMute1)",
                        children: (0, o.jsx)("path", {
                          d: "m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485",
                        }),
                      }),
                      (0, o.jsx)("path", {
                        fill: "#555",
                        d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, o.jsx)("path", {
              fill: "currentColor",
              d: "M0 0h48v48H0z",
              mask: "url(#ipTVolumeMute0)",
            }),
          ],
        }),
        unmuted: (0, o.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: [
            (0, o.jsx)("defs", {
              children: (0, o.jsx)("mask", {
                id: "ipTVolumeNotice0",
                children: (0, o.jsxs)("g", {
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: "4",
                  children: [
                    (0, o.jsx)("path", {
                      fill: "#555",
                      strokeLinejoin: "round",
                      d: "M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z",
                    }),
                    (0, o.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M32 15a11.91 11.91 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A11.936 11.936 0 0 1 32 33",
                    }),
                    (0, o.jsx)("path", {
                      strokeLinecap: "round",
                      d: "M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02",
                    }),
                  ],
                }),
              }),
            }),
            (0, o.jsx)("path", {
              fill: "currentColor",
              d: "M0 0h48v48H0z",
              mask: "url(#ipTVolumeNotice0)",
            }),
          ],
        }),
      };
      var m = n(25691),
        p = n(7330),
        h = n.n(p),
        g = n(22867),
        x = n.n(g),
        _ = n(25905),
        v = (e) => {
          let { config: t, premiumConfig: n } = e,
            s = {
              base: a().tooltipContainer,
              arrow: "".concat(a().toolTipArrow, " border-2"),
              content: "bg-transparent",
            },
            i = t.user_badges,
            c = t.custom_badges,
            l = i.length > 0 && i[0] && "string" == typeof i[0],
            d = c.length > 0 && "string" == typeof c[0][0],
            u = {
              staff: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().staff,
                width: "1em",
                height: "1em",
                viewBox: "2.3 2 19.39 20",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "m16.06 13.09l5.63 5.59l-3.32 3.28l-5.59-5.59v-.92l2.36-2.36h.92m.91-2.53L16 9.6l-4.79 4.8v1.97L5.58 22L2.3 18.68l5.59-5.59h1.97l.78-.78L6.8 8.46H5.5L2.69 5.62L5.31 3l2.8 2.8v1.31L12 10.95l2.66-2.66l-.96-1.01L15 5.97h-2.66l-.65-.65L15 2l.66.66v2.66L16.97 4l3.28 3.28c1.09 1.1 1.09 2.89 0 3.98l-1.97-2.01l-1.31 1.31Z",
                }),
              }),
              premium: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().premium,
                width: "1em",
                height: "1em",
                viewBox: "23 32 465 448",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z",
                }),
              }),
              verified: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().verified,
                width: "1em",
                height: "1em",
                viewBox: "1 1.5 22 21",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z",
                }),
              }),
              donor: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().donor,
                width: "1em",
                height: "1em",
                viewBox: "2.01 2.01 19.98 19.98",
                children: (0, o.jsx)("path", {
                  d: "M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1z",
                  fill: "currentColor",
                }),
              }),
              og: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().og,
                width: "1em",
                height: "1em",
                viewBox: "4.39 2 15.22 20.97",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "m12 8.5l2.116 5.088l5.492.44l-4.184 3.585l1.278 5.36L12 20.1l-4.702 2.872l1.278-5.36l-4.184-3.584l5.492-.44L12 8.5ZM8 2v9H6V2h2Zm10 0v9h-2V2h2Zm-5 0v5h-2V2h2Z",
                }),
              }),
              server_booster: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().serverBooster,
                width: "1em",
                height: "1em",
                viewBox: "4.99 3 14 18",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z",
                }),
              }),
              winner: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().winner,
                width: "1em",
                height: "1em",
                viewBox: "2 2 20 20.75",
                children: (0, o.jsxs)("g", {
                  fill: "currentColor",
                  children: [
                    (0, o.jsx)("path", {
                      d: "M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958Zm-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162Z",
                    }),
                    (0, o.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M16.377 2.347A26.373 26.373 0 0 0 12 2c-1.783 0-3.253.157-4.377.347c-1.139.192-1.708.288-2.184.874c-.475.586-.45 1.219-.4 2.485c.173 4.348 1.111 9.78 6.211 10.26V19.5H9.82a1 1 0 0 0-.98.804l-.19.946H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-2.65l-.19-.946a1 1 0 0 0-.98-.804h-1.43v-3.534c5.1-.48 6.039-5.911 6.211-10.26c.05-1.266.076-1.9-.4-2.485c-.476-.586-1.045-.682-2.184-.874Zm-3.59 3.46a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0V8.31l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163Z",
                      clipRule: "evenodd",
                    }),
                  ],
                }),
              }),
              second: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().second,
                width: "1em",
                height: "1em",
                viewBox: "5 2 14 20",
                children: (0, o.jsxs)("g", {
                  fill: "currentColor",
                  children: [
                    (0, o.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
                      clipRule: "evenodd",
                    }),
                    (0, o.jsx)("path", {
                      d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z",
                    }),
                  ],
                }),
              }),
              third: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().third,
                width: "1em",
                height: "1em",
                viewBox: "5 2 14 20",
                children: (0, o.jsxs)("g", {
                  fill: "currentColor",
                  children: [
                    (0, o.jsx)("path", {
                      fillRule: "evenodd",
                      d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
                      clipRule: "evenodd",
                    }),
                    (0, o.jsx)("path", {
                      d: "m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.461 8.461 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559Z",
                    }),
                  ],
                }),
              }),
              imagehost_access: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().imageHost,
                width: "1em",
                height: "1em",
                viewBox: "2 2 20 20",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "M9.153 5.408C10.42 3.136 11.053 2 12 2c.947 0 1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182c.28.213.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347 0-.674.15-1.329.452l-.595.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941 1.523-1.22 3.983-1.776l.636-.144c.699-.158 1.048-.237 1.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z",
                }),
              }),
              bughunter: (0, o.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: a().bugHunter,
                width: "1em",
                height: "1em",
                viewBox: "4 3.41 16 17.59",
                children: (0, o.jsx)("path", {
                  fill: "currentColor",
                  d: "M19 8h-1.81a5.985 5.985 0 0 0-1.82-1.96l.93-.93a.996.996 0 1 0-1.41-1.41l-1.47 1.47C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L9.11 3.7A.996.996 0 1 0 7.7 5.11l.92.93C7.88 6.55 7.26 7.22 6.81 8H5c-.55 0-1 .45-1 1s.45 1 1 1h1.09c-.05.33-.09.66-.09 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .34.04.67.09 1H5c-.55 0-1 .45-1 1s.45 1 1 1h1.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H19c.55 0 1-.45 1-1s-.45-1-1-1h-1.09c.05-.33.09-.66.09-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.34-.04-.67-.09-1H19c.55 0 1-.45 1-1s-.45-1-1-1m-6 8h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1m0-4h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1",
                }),
              }),
            },
            f = {
              staff: "Staff",
              premium: "Premium",
              verified: "Verified",
              donor: "Donor",
              og: "OG",
              server_booster: "Server Booster",
              winner: "Winner",
              second: "Second",
              third: "Third",
              imagehost_access: "Image Host",
              bughunter: "Bug Hunter",
            },
            m = {
              Staff: "staff",
              Premium: "premium",
              Verified: "verified",
              Donor: "donor",
              OG: "og",
              "Server Booster": "serverBooster",
              Winner: "winner",
              Second: "second",
              Third: "third",
              "Image Host": "imageHost",
              "Bug Hunter": "bugHunter",
            };
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: a().badgeContainer,
              children: [
                l
                  ? i.map((e) =>
                      (0, o.jsx)(
                        r.Fragment,
                        {
                          children: (0, o.jsx)(_.e, {
                            content: f[e],
                            closeDelay: 150,
                            showArrow: !1,
                            offset: 7,
                            classNames: s,
                            children: (0, o.jsxs)(
                              "div",
                              {
                                className: a().badgeContainerFlex,
                                children: [
                                  n.monochrome_badges &&
                                    (0, o.jsx)("style", {
                                      children: "\n                    ."
                                        .concat(
                                          a()[m[f[e]]],
                                          " {\n                        color: "
                                        )
                                        .concat(
                                          n.badge_color,
                                          "!important;\n                        filter: drop-shadow("
                                        )
                                        .concat(
                                          n.badge_color,
                                          " 0 0 2.5px)!important;\n                    }\n                    "
                                        ),
                                    }),
                                  !t.badge_glow &&
                                    (0, o.jsx)("style", {
                                      children:
                                        "\n                    .".concat(
                                          a()[m[f[e]]],
                                          " {\n                        filter: none!important;\n                    }\n                    "
                                        ),
                                    }),
                                  u[e],
                                ],
                              },
                              e
                            ),
                          }),
                        },
                        e
                      )
                    )
                  : i.map(
                      (e) =>
                        e.enabled &&
                        (0, o.jsx)(
                          r.Fragment,
                          {
                            children: (0, o.jsx)(_.e, {
                              content: f[e.name],
                              closeDelay: 150,
                              showArrow: !1,
                              offset: 7,
                              classNames: s,
                              children: (0, o.jsxs)(
                                "div",
                                {
                                  className: a().badgeContainerFlex,
                                  children: [
                                    n.monochrome_badges &&
                                      (0, o.jsx)("style", {
                                        children: "\n                    ."
                                          .concat(
                                            a()[m[f[e.name]]],
                                            " {\n                        color: "
                                          )
                                          .concat(
                                            n.badge_color,
                                            "!important;\n                        filter: drop-shadow("
                                          )
                                          .concat(
                                            n.badge_color,
                                            " 0 0 2.5px)!important;\n                    }\n                    "
                                          ),
                                      }),
                                    !t.badge_glow &&
                                      (0, o.jsx)("style", {
                                        children:
                                          "\n                    .".concat(
                                            a()[m[f[e.name]]],
                                            " {\n                        filter: none!important;\n                    }\n                    "
                                          ),
                                      }),
                                    u[e.name],
                                  ],
                                },
                                e.name
                              ),
                            }),
                          },
                          e.name
                        )
                    ),
                0 !== c.length &&
                  (0, o.jsx)(o.Fragment, {
                    children: d
                      ? c.map((e, t) =>
                          (0, o.jsx)(
                            _.e,
                            {
                              content: e[0],
                              closeDelay: 150,
                              showArrow: !1,
                              offset: 7,
                              classNames: s,
                              children: (0, o.jsx)("div", {
                                className: a().badgeContainerFlex,
                                children: (0, o.jsx)("img", {
                                  src: e[1],
                                  alt: "Custom Badge",
                                  className: a().customBadge,
                                  draggable: !1,
                                }),
                              }),
                            },
                            t
                          )
                        )
                      : c.map(
                          (e, t) =>
                            e.enabled &&
                            (0, o.jsx)(
                              _.e,
                              {
                                content: e.name,
                                closeDelay: 150,
                                showArrow: !1,
                                offset: 7,
                                classNames: s,
                                children: (0, o.jsx)("div", {
                                  className: a().badgeContainerFlex,
                                  children: (0, o.jsx)("img", {
                                    src: e.icon,
                                    alt: "Custom Badge",
                                    className: a().customBadge,
                                    draggable: !1,
                                  }),
                                }),
                              },
                              t
                            )
                        ),
                  }),
              ],
            }),
          });
        },
        j = n(70047),
        b = n(27648),
        w = n(73336),
        y = n(66521),
        S = n(65336);
      let W = {
          base: a().tooltipContainer,
          arrow: "".concat(a().toolTipArrow, " border-2"),
          content: "bg-transparent",
        },
        C = (e) => {
          let { copied: t, copy: n, content: r, children: s } = e;
          return (0, o.jsx)(_.e, {
            content: t ? "Copied" : r,
            closeDelay: 600,
            isDismissable: !0,
            showArrow: !1,
            offset: 10,
            classNames: W,
            children: (0, o.jsx)("span", {
              onClick: n,
              style: { display: "flex" },
              children: s,
            }),
          });
        };
      function N(e) {
        let {
            socials: t,
            isMonochrome: n,
            iconColor: s,
            socialGlow: i,
            font: c,
            ...d
          } = e,
          u = ["eth", "ltc", "bitcoin", "monero"],
          [f, { open: m, close: p }] = (0, S.q)(!1),
          [h, g] = (0, r.useState)(""),
          x = l[c],
          _ = () => {},
          v = (e) => {
            e.preventDefault(), m();
          },
          W = (e) => {
            let t = j.Z[e.social.replace("custom_url", "customUrl")];
            return (0, o.jsx)(b.default, {
              href: "email" !== e.social ? e.value : "mailto:".concat(e.value),
              target: "_blank",
              onClick:
                "custom_url" === e.social
                  ? (t) => {
                      v(t), g(e.value);
                    }
                  : _,
              children:
                "monero" === e.social && n
                  ? j.Z.moneroMonochrome
                  : "custom_url" === e.social && e.icon
                  ? (0, o.jsx)("img", {
                      className: a().customIcon,
                      src: e.icon,
                      alt: "",
                    })
                  : t,
            });
          },
          N = (e) =>
            (0, o.jsx)(w.q, {
              value: e.value,
              children: (t) => {
                let { copied: r, copy: s } = t;
                return (0, o.jsx)(C, {
                  copied: r,
                  copy: s,
                  content: "Copy Address",
                  children:
                    "monero" === e.social && n
                      ? j.Z.moneroMonochrome
                      : j.Z[e.social.replace("custom_url", "customUrl")],
                });
              },
            });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(y.u, {
              opened: f,
              onClose: p,
              title: "Are you sure?",
              centered: !0,
              children: (0, o.jsxs)("div", {
                className: a().customUrlWarning,
                children: [
                  (0, o.jsx)("h1", {
                    style: x.customUrlHeading,
                    children: "You are going to visit",
                  }),
                  (0, o.jsx)("span", {
                    style: x.customUrlLink,
                    children: h.replace("https://", ""),
                  }),
                  (0, o.jsxs)("div", {
                    className: a().modalButtons,
                    children: [
                      (0, o.jsx)(b.default, {
                        href: h,
                        target: "_blank",
                        onClick: p,
                        style: x.customUrlButtons,
                        children: "Visit",
                      }),
                      (0, o.jsx)("button", {
                        onClick: p,
                        style: x.customUrlButtons,
                        children: "Cancel",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, o.jsx)("div", {
              className: a().userSocials,
              ...d,
              children: t.map((e, t) =>
                (0, o.jsxs)(
                  "div",
                  {
                    className: ""
                      .concat(a().userSocial, " ")
                      .concat(a()[e.social]),
                    children: [
                      n
                        ? n &&
                          (0, o.jsx)("style", {
                            children: "\n                                    ."
                              .concat(
                                a()[e.social],
                                " svg {\n                                        color: "
                              )
                              .concat(
                                s,
                                "!important;\n                                        "
                              )
                              .concat(
                                !1 !== i
                                  ? "filter: drop-shadow(".concat(
                                      s,
                                      " 1px 0 7px)!important;"
                                    )
                                  : "filter: none!important",
                                "\n                                    }"
                              ),
                          })
                        : (0, o.jsx)("style", {
                            children: "\n                                ."
                              .concat(
                                a()[e.social],
                                " svg {\n                                    "
                              )
                              .concat(
                                !i && "filter: none!important",
                                "\n                            }\n                            "
                              ),
                          }),
                      u.includes(e.social) ? N(e) : W(e),
                    ],
                  },
                  t
                )
              ),
            }),
          ],
        });
      }
      var z = n(80456);
      function k(e) {
        var t, n;
        let {
            presenceInformation: r,
            font: s,
            description: i,
            discordUserBadges: c,
            discordData: d,
          } = e,
          u = {
            0: "Playing",
            1: "Streaming",
            2: "Listening to",
            3: "Watching",
            5: "Competing",
          },
          m = {
            "Discord Staff":
              "https://cdn.discordapp.com/badge-icons/5e74e9b61934fc1f67c65515d1f7e60d.png",
            "Partnered Server Owner":
              "https://cdn.discordapp.com/badge-icons/3f9748e53446a137a052f3454e2de41e.png",
            "Moderator Programs Alumni":
              "https://cdn.discordapp.com/badge-icons/fee1624003e2fee35cb398e125dc479b.png",
            "HypeSquad Events Member":
              "https://cdn.discordapp.com/badge-icons/bf01d1073931f921909045f3a39fd264.png",
            "HypeSquad Bravery":
              "https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png",
            "HypeSquad Brilliance":
              "https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png",
            "HypeSquad Balance":
              "https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png",
            "Bug Hunter Level 1":
              "https://cdn.discordapp.com/badge-icons/2717692c7dca7289b35297368a940dd0.png",
            "Bug Hunter Level 2":
              "https://cdn.discordapp.com/badge-icons/848f79194d4be5ff5f81505cbd0ce1e6.png",
            "Active Developer":
              "https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png",
            "Early Verified Bot Developer":
              "https://cdn.discordapp.com/badge-icons/6df5892e0f35b051f8b61eace34f4967.png",
            "Early Nitro Supporter":
              "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
            "Early Supporter":
              "https://cdn.discordapp.com/badge-icons/7060786766c9c840eb3019e725d2b358.png",
            "Discord Nitro":
              "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png",
            "Server Booster":
              "https://cdn.discordapp.com/badge-icons/72bed924410c304dbe3d00a6e593ff59.png",
          },
          p = r.activities,
          h = p && p[0],
          g = p && p.find((e) => "Spotify" === e.name),
          x = l[s],
          v = {
            base: a().tooltipContainer,
            arrow: "".concat(a().toolTipArrow, " border-2"),
            content: "bg-transparent",
          },
          j = {
            display:
              (null == h
                ? void 0
                : null === (t = h.emoji) || void 0 === t
                ? void 0
                : t.startsWith("https://")) &&
              (null == h ? void 0 : h.type) === 4 &&
              !g &&
              "flex",
            alignItems:
              (null == h
                ? void 0
                : null === (n = h.emoji) || void 0 === n
                ? void 0
                : n.startsWith("https://")) &&
              (null == h ? void 0 : h.type) === 4 &&
              !g &&
              "flex-end",
          };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: a().discordPresenceContainer,
            style: { marginTop: "20px" },
            children:
              r.success && h
                ? (0, o.jsxs)("div", {
                    className: a().discordUserInformation,
                    children: [
                      (0, o.jsx)("div", {
                        className: a().discordAvatar,
                        children: (0, o.jsxs)("div", {
                          className: a().discordStatus,
                          children: [
                            (0, o.jsx)("img", {
                              src: r.avatar,
                              alt: "Discord Avatar",
                            }),
                            (0, o.jsx)("img", {
                              src: "https://assets.guns.lol/".concat(
                                r.status,
                                ".png"
                              ),
                              className: a().discordStatusIcon,
                              alt: "",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className: a().discordActivity,
                        children: [
                          (0, o.jsxs)("div", {
                            className: a().discordUser,
                            children: [
                              (0, o.jsxs)("div", {
                                className: a().discordUserDiv,
                                children: [
                                  (0, o.jsx)("span", {
                                    style: x.discordUsername,
                                    children: r.username,
                                  }),
                                  (0, o.jsx)("div", {
                                    className: a().discordUserBadges,
                                    children: c.map((e, t) =>
                                      (0, o.jsx)(
                                        _.e,
                                        {
                                          closeDelay: 150,
                                          offset: 3,
                                          content: e,
                                          classNames: v,
                                          children: (0, o.jsx)(
                                            "div",
                                            {
                                              className: a().discordBadge,
                                              children: (0, o.jsx)("img", {
                                                src: m[e],
                                                alt: "Discord Badge",
                                              }),
                                            },
                                            t
                                          ),
                                        },
                                        t
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, o.jsx)("h3", {
                                style: { ...x.discordStatus, ...j },
                                children:
                                  4 !== h.type && 2 !== h.type
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("span", {
                                            className: a().highlight,
                                            children: u[h.type],
                                          }),
                                          " ",
                                          h.name,
                                          (0, o.jsx)("br", {}),
                                          h.details ? h.details : h.state,
                                        ],
                                      })
                                    : g
                                    ? (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          (0, o.jsx)("span", {
                                            className: a().highlight,
                                            children: u[g.type],
                                          }),
                                          " ",
                                          g.details,
                                          (0, o.jsx)("br", {}),
                                          g.state &&
                                            "by ".concat(
                                              g.state.replace(/;/g, ",")
                                            ),
                                        ],
                                      })
                                    : 4 === h.type &&
                                      (0, o.jsxs)(o.Fragment, {
                                        children: [
                                          h.emoji.startsWith("https://")
                                            ? (0, o.jsx)("img", {
                                                src: h.emoji,
                                                alt: "Discord Emoji",
                                                className: a().discordEmoji,
                                              })
                                            : !h.emoji.startsWith("https://") &&
                                              (0, o.jsx)("span", {
                                                className: a().defaultEmoji,
                                                children: h.emoji,
                                              }),
                                          (0, o.jsx)("span", {
                                            children: h.state,
                                          }),
                                        ],
                                      }),
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: a().activityImage,
                            children:
                              4 !== h.type && 2 !== h.type
                                ? h.image &&
                                  "{}" !== JSON.stringify(h.image) &&
                                  (0, o.jsx)(_.e, {
                                    closeDelay: 150,
                                    content: ""
                                      .concat(u[h.type], " ")
                                      .concat(h.name),
                                    classNames: v,
                                    children: (0, o.jsx)("img", {
                                      src: h.image,
                                      alt: "",
                                    }),
                                  })
                                : g
                                ? (0, o.jsx)(_.e, {
                                    closeDelay: 150,
                                    content: "Listening to "
                                      .concat(g.details, " ")
                                      .concat(
                                        g.state &&
                                          "by ".concat(
                                            g.state.replace(/;/g, ",")
                                          )
                                      ),
                                    classNames: v,
                                    children: (0, o.jsx)("img", {
                                      src: g.image,
                                      alt: "",
                                    }),
                                  })
                                : "offline" === h.status && null,
                          }),
                        ],
                      }),
                    ],
                  })
                : r.success && !h
                ? (0, o.jsxs)("div", {
                    className: a().discordUserInformation,
                    children: [
                      (0, o.jsx)("div", {
                        className: a().discordAvatar,
                        children: (0, o.jsxs)("div", {
                          className: a().discordStatus,
                          children: [
                            (0, o.jsx)("img", {
                              src: r.avatar,
                              alt: "Discord Avatar",
                            }),
                            (0, o.jsx)("img", {
                              src: "https://assets.guns.lol/".concat(
                                r.status,
                                ".png"
                              ),
                              className: a().discordStatusIcon,
                              alt: "",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsxs)("div", {
                        className: a().discordActivity,
                        children: [
                          (0, o.jsxs)("div", {
                            className: a().discordUser,
                            children: [
                              (0, o.jsxs)("div", {
                                className: a().discordUserDiv,
                                children: [
                                  (0, o.jsx)("span", {
                                    style: x.discordUsername,
                                    children: r.username,
                                  }),
                                  (0, o.jsx)("div", {
                                    className: a().discordUserBadges,
                                    children: c.map((e, t) =>
                                      (0, o.jsx)(
                                        _.e,
                                        {
                                          closeDelay: 150,
                                          offset: 3,
                                          content: e,
                                          classNames: v,
                                          children: (0, o.jsx)(
                                            "div",
                                            {
                                              className: a().discordBadge,
                                              children: (0, o.jsx)("img", {
                                                src: m[e],
                                                alt: "Discord Badge",
                                              }),
                                            },
                                            t
                                          ),
                                        },
                                        t
                                      )
                                    ),
                                  }),
                                ],
                              }),
                              (0, o.jsx)("h3", {
                                style: { ...x.discordStatus, ...j },
                                children:
                                  "offline" === r.status
                                    ? (0, o.jsxs)("span", {
                                        className: a().offlineText,
                                        children: [
                                          "last seen ",
                                          r.lastSeen
                                            ? (0, z.Q)(
                                                new Date(1e3 * r.lastSeen)
                                              ).replace("about ", "") + " ago"
                                            : "unknown",
                                        ],
                                      })
                                    : (0, o.jsx)("span", {
                                        children: "currently doing nothing",
                                      }),
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", { className: a().activityImage }),
                        ],
                      }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: a().discordNotConnected,
                    children: [
                      (0, o.jsxs)("h1", {
                        style: x.discordUsername,
                        children: [f.userNotFound, " User Not found"],
                      }),
                      d
                        ? (0, o.jsxs)("h3", {
                            style: x.discordStatus,
                            children: [
                              "Join ",
                              (0, o.jsx)(b.default, {
                                href: "https://discord.gg/guns",
                                target: "_blank",
                                children: "discord.gg/guns",
                              }),
                              " to display your status",
                            ],
                          })
                        : (0, o.jsxs)("h3", {
                            style: x.discordStatus,
                            children: [
                              "Go to ",
                              (0, o.jsx)(b.default, {
                                href: "https://guns.lol/account",
                                target: "_blank",
                                children: "guns.lol/account",
                              }),
                              " and connect your Discord account",
                            ],
                          }),
                    ],
                  }),
          }),
        });
      }
      function L(e) {
        let {
            publicSalt: t,
            challenge: n,
            timestamp: s,
            username: i,
            premiumConfig: c,
            views: u,
            containerBorderRadius: m,
            hideCounter: p,
            isUnfold: h,
            animationStartClass: g,
          } = e,
          [x, v] = (0, r.useState)(!1),
          [j, b] = (0, r.useState)(""),
          [w, y] = (0, r.useState)(""),
          S = {
            base: a().tooltipContainer,
            arrow: "".concat(a().toolTipArrow, " border-2"),
            content: "bg-transparent",
          },
          W = l[c.font],
          C = m > 25 && 0.12 * m;
        async function N(e) {
          b(e);
        }
        async function z(e) {
          y(t + e), v(!0);
        }
        return (
          (0, r.useEffect)(() => {
            Object.assign(window, { getToken: N, getResult: z });
            let e = setInterval(() => {
              x &&
                "" !== j &&
                (fetch("https://guns.lol/api/view", {
                  cache: "no-store",
                  body: JSON.stringify({
                    username: decodeURIComponent(i),
                    _t: j,
                    _s: w,
                    _c: n,
                    _ps: btoa(t),
                    _ts: s,
                  }),
                  method: "POST",
                }),
                clearInterval(e));
            }, 200);
          }, [x, j, w]),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(d.default, {
                strategy: "beforeInteractive",
                src: "https://assets.guns.lol/_pow.js",
                id: "_codescript",
              }),
              (0, o.jsx)(d.default, {
                strategy: "beforeInteractive",
                id: "_code",
                children: '\n                            p = new _injPow("'
                  .concat(t, '", "5", "')
                  .concat(
                    n,
                    '", !1)\n                            p.solvepow().then((async (o) => {\n                                if (o != null) {\n                                    await getResult(o.solution);\n                                }\n                            }))\n                        '
                  ),
              }),
              (0, o.jsx)(d.default, {
                strategy: "afterInteractive",
                src: "https://challenges.cloudflare.com/turnstile/v0/api.js",
                id: "_turnstile",
              }),
              (0, o.jsx)("div", {
                className: "cf-turnstile",
                "data-sitekey": "0x4AAAAAAAgU7T2niLQD-TLm",
                "data-callback": "getToken",
              }),
              !c.hide_views &&
                !p &&
                (0, o.jsx)("div", {
                  className: "".concat(a().profileViews, " ").concat(h && g),
                  style: { bottom: C ? 12 + C : 12, left: C ? 15 + C : 15 },
                  children: (0, o.jsx)(_.e, {
                    color: "foreground",
                    content: "Profile Views",
                    closeDelay: 150,
                    showArrow: !1,
                    offset: 2.2,
                    classNames: S,
                    children: (0, o.jsxs)("span", {
                      style: W.profileViewsCount,
                      children: [
                        f.profileViews,
                        " ",
                        u.toLocaleString("en-US"),
                      ],
                    }),
                  }),
                }),
            ],
          })
        );
      }
      function B(e) {
        var t;
        let {
            userData: n,
            config: r,
            premiumConfig: s,
            presenceInformation: i,
            animationStartClass: c,
          } = e,
          d = l[s.font],
          u = {
            base: a().tooltipContainer,
            arrow: "".concat(a().toolTipArrow, " border-2"),
            content: "bg-transparent",
          },
          f = r.use_discord_avatar && n.discord ? i.avatar : r.avatar,
          m = "" !== r.display_name ? r.display_name : n.username,
          p = r.user_badges,
          g = (
            null === (t = n.discord) || void 0 === t ? void 0 : t.user_badges
          )
            ? p.includes("server_booster") ||
              p.find((e) => "server_booster" === e.name)
              ? [...n.discord.user_badges, "Server Booster"]
              : n.discord.user_badges
            : [],
          j = null == i ? void 0 : i.avatarDecoration,
          b = r.custom_badges,
          w = p.length > 0 && p[0] && "string" == typeof p[0],
          y = b.length > 0 && "string" == typeof b[0][0],
          S = (p.length > 0 && w) || (!w && p.some((e) => !0 === e.enabled)),
          W = (b.length > 0 && y) || (!y && b.some((e) => !0 === e.enabled)),
          C = c === a().unfoldStart;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: h().userInformation,
              children: [
                "" !== s.banner &&
                  (0, o.jsx)("img", {
                    src: s.banner,
                    alt: "",
                    className: h().banner,
                  }),
                "" !== r.avatar || (r.use_discord_avatar && n.discord)
                  ? (0, o.jsxs)("div", {
                      className: a().avatarWrapper,
                      children: [
                        j &&
                          (0, o.jsx)("img", {
                            src: j,
                            alt: "",
                            className: a().avatarDecorationLayout1,
                            style: { top: "" !== s.banner ? "21%" : "-7%" },
                          }),
                        (0, o.jsx)("img", {
                          src: f,
                          alt: "",
                          className: ""
                            .concat(h().avatar, " ")
                            .concat("" !== s.banner && h().adjustBanner),
                        }),
                      ],
                    })
                  : (0, o.jsx)("div", {
                      style: { marginTop: "" !== s.banner ? "135px" : "" },
                    }),
                (0, o.jsxs)("div", {
                  className: "".concat(h().userDescription, " ").concat(C && c),
                  children: [
                    (0, o.jsx)(_.e, {
                      color: "foreground",
                      content: "UID ".concat(n.uid.toLocaleString("en-US")),
                      closeDelay: 150,
                      showArrow: !1,
                      offset: -2,
                      classNames: u,
                      children:
                        "typewriter" === r.username_effects
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)("style", {
                                  children:
                                    "\n                                        .username-typewriter .Typewriter {\n                                            font-size: "
                                      .concat(
                                        d.username.fontSize,
                                        ";\n                                            font-weight: "
                                      )
                                      .concat(
                                        d.username.fontWeight,
                                        ";\n                                        }\n                                    "
                                      ),
                                }),
                                (0, o.jsx)("div", {
                                  className: "username-typewriter",
                                  children: (0, o.jsx)(x(), {
                                    options: {
                                      strings: [m],
                                      autoStart: !0,
                                      loop: !0,
                                      wrapperClassName:
                                        h().userDescriptionUsername,
                                      cursorClassName: h().usernameCursor,
                                      stringSplitter: et,
                                    },
                                  }),
                                }),
                              ],
                            })
                          : (0, o.jsx)("h1", {
                              className: ""
                                .concat(h().userDescriptionUsername, " ")
                                .concat(
                                  "rgb" === r.username_effects &&
                                    a().rainbowName
                                ),
                              style: d.username,
                              children: m,
                            }),
                    }),
                    !(!S && !W) &&
                      (0, o.jsx)("div", {
                        className: h().badgeContainerWrapper,
                        children: (0, o.jsx)(v, {
                          config: r,
                          premiumConfig: s,
                        }),
                      }),
                    ("" !== r.description || 0 !== s.typewriter.length) &&
                      (0, o.jsx)("h3", {
                        className: h().userDescriptionText,
                        style: d.description,
                        children:
                          s.typewriter_enabled && 0 !== s.typewriter.length
                            ? (0, o.jsx)(x(), {
                                options: {
                                  strings: s.typewriter,
                                  autoStart: !0,
                                  loop: !0,
                                  stringSplitter: et,
                                },
                              })
                            : r.description,
                      }),
                  ],
                }),
                "enabled" === r.presence &&
                  (0, o.jsx)("div", {
                    className: ""
                      .concat(a().discordPresenceWrapper, " ")
                      .concat(C && c),
                    children: (0, o.jsx)(k, {
                      presenceInformation: i,
                      font: s.font,
                      description: r.description,
                      discordUserBadges: g,
                      discordData: n.discord,
                    }),
                  }),
                r.socials.length > 0 &&
                  (0, o.jsx)("div", {
                    className: ""
                      .concat(h().socialsWrapper, " ")
                      .concat(C && c),
                    children: (0, o.jsx)(N, {
                      socials: r.socials,
                      isMonochrome: r.monochrome,
                      font: s.font,
                      socialGlow: r.social_glow,
                      iconColor: r.icon_color,
                    }),
                  }),
              ],
            }),
            (0, o.jsx)(L, {
              publicSalt: n._PS,
              challenge: n._C,
              timestamp: n._ts,
              username: n.username,
              premiumConfig: s,
              views: r.page_views,
              containerBorderRadius: s.border_radius,
              isUnfold: C,
              animationStartClass: c,
            }),
          ],
        });
      }
      var P = n(96487),
        U = n.n(P);
      let T = (e, t) =>
          "https://open.spotify.com/embed/".concat(e, "/").concat(t),
        D = (e) => {
          let t = e.match(/\/([a-zA-Z]+)\/([a-zA-Z0-9]+)/);
          if (t && 3 === t.length) {
            let [e, n] = [t[1], t[2]];
            return { type: e, code: n };
          }
          return null;
        };
      var I = (e) => {
        let { spotifyUrl: t } = e,
          n = D(t);
        if (n) {
          let { type: e, code: t } = n;
          return (0, o.jsx)("iframe", {
            src: T(e, t),
            height: 80,
            width: "100%",
            frameBorder: "0",
            allowTransparency: !0,
            allow: "encrypted-media",
          });
        }
        return (0, o.jsx)("p", { children: "Invalid Spotify URL" });
      };
      function A(e) {
        var t, n, s, a, i;
        let { config: c, premiumConfig: d } = e,
          u = l[d.font],
          [m, p] = (0, r.useState)({}),
          h = !!d.second_tab_enabled && "enabled" !== c.presence,
          g = async () => {
            try {
              let e = "https://discord.com/api/v9/invites/".concat(
                  x(d.second_tab.discord),
                  "?with_counts=true"
                ),
                t = await fetch(e, { method: "GET" }),
                n = await t.json();
              p({
                error: !1,
                approximate_member_count: "0",
                approximate_presence_count: "0",
                guild: { name: "Loading..." },
              }),
                t.ok
                  ? p(n)
                  : 404 === t.status &&
                    p({
                      error: !0,
                      approximate_member_count: 0,
                      approximate_presence_count: 0,
                      guild: { name: "Not Found" },
                    });
            } catch (e) {
              console.error(e.message),
                p({
                  error: !0,
                  approximate_member_count: "0",
                  approximate_presence_count: "0",
                  guild: { name: "Unknown Error" },
                });
            }
          },
          x = (e) => {
            let t = e.match(
              /(?:discord\.gg\/|discord\.com\/invite\/|discordapp\.com\/invite\/)([a-zA-Z0-9-]+)/
            );
            return t ? t[1] : "";
          };
        return (
          (0, r.useEffect)(() => {
            d.second_tab.discord && g();
          }, [d.second_tab.discord]),
          (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)("div", {
              className: U().secondTab,
              children: d.second_tab.discord
                ? (0, o.jsxs)("div", {
                    className: U().discordServer,
                    children: [
                      (0, o.jsxs)("div", {
                        className: U().discordInformationWrapper,
                        children: [
                          (0, o.jsx)("div", {
                            className: U().guildIcon,
                            children: (
                              null == m
                                ? void 0
                                : null === (t = m.guild) || void 0 === t
                                ? void 0
                                : t.icon
                            )
                              ? (0, o.jsx)("img", {
                                  src: "https://cdn.discordapp.com/icons/"
                                    .concat(m.guild.id, "/")
                                    .concat(m.guild.icon, ".png"),
                                  alt: "",
                                })
                              : (0, o.jsx)("div", {
                                  className: U().missingIcon,
                                  children: (0, o.jsx)("h1", {
                                    children: m.error
                                      ? "!"
                                      : null === (n = m.guild) || void 0 === n
                                      ? void 0
                                      : n.name.charAt(0),
                                  }),
                                }),
                          }),
                          (0, o.jsxs)("div", {
                            className: U().guildInformation,
                            children: [
                              (0, o.jsx)("h1", {
                                style: u.serverName,
                                children:
                                  null === (s = m.guild) || void 0 === s
                                    ? void 0
                                    : s.name,
                              }),
                              (0, o.jsxs)("h3", {
                                style: u.memberCount,
                                children: [
                                  (0, o.jsxs)("span", {
                                    children: [
                                      f.status,
                                      " ",
                                      null ===
                                        (a = m.approximate_presence_count) ||
                                      void 0 === a
                                        ? void 0
                                        : a.toLocaleString("en-US"),
                                      " Online",
                                    ],
                                  }),
                                  (0, o.jsxs)("span", {
                                    children: [
                                      f.status,
                                      " ",
                                      null ===
                                        (i = m.approximate_member_count) ||
                                      void 0 === i
                                        ? void 0
                                        : i.toLocaleString("en-US"),
                                      " Members",
                                    ],
                                  }),
                                ],
                              }),
                              !h &&
                                (0, o.jsx)(b.default, {
                                  href: "https://discord.gg/".concat(
                                    m.error ? "" : x(d.second_tab.discord)
                                  ),
                                  target: "_blank",
                                  style: u.joinButton,
                                  children: "Join",
                                }),
                            ],
                          }),
                        ],
                      }),
                      h
                        ? (0, o.jsx)(b.default, {
                            href: "https://discord.gg/".concat(
                              m.error ? "" : x(d.second_tab.discord)
                            ),
                            className: U().joinButtonLarge,
                            target: "_blank",
                            style: u.joinButtonLarge,
                            children: "Join",
                          })
                        : (0, o.jsx)("div", {
                            className: U().widgetPlaceholder,
                          }),
                    ],
                  })
                : d.second_tab.spotify &&
                  (0, o.jsx)(I, { spotifyUrl: d.second_tab.spotify }),
            }),
          })
        );
      }
      function H(e) {
        var t;
        let {
            userData: n,
            config: r,
            premiumConfig: s,
            presenceInformation: i,
            animationStartClass: c,
          } = e,
          d = l[s.font],
          u = null == i ? void 0 : i.avatarDecoration,
          m = {
            base: a().tooltipContainer,
            arrow: "".concat(a().toolTipArrow, " border-2"),
            content: "bg-transparent",
          },
          p = r.use_discord_avatar && n.discord ? i.avatar : r.avatar,
          h = ((e) => {
            let t = new Date(1e3 * e);
            return (0, z.Q)(t);
          })(n.account_created),
          g =
            s.second_tab_enabled && "enabled" !== r.presence
              ? { display: "inherit!important" }
              : {},
          j = "" !== r.display_name ? r.display_name : n.username,
          b = (
            null === (t = n.discord) || void 0 === t ? void 0 : t.user_badges
          )
            ? r.user_badges.includes("server_booster") ||
              r.user_badges.find((e) => "server_booster" === e.name)
              ? [...n.discord.user_badges, "Server Booster"]
              : n.discord.user_badges
            : [],
          w = "\n                    .".concat(
            U().widgetContainerWrapper,
            " { \n                        margin-top: 27px;\n                    } \n                    "
          ),
          y = "\n                    .".concat(
            a().discordPresenceContainer,
            " { \n                        display: flex!important;\n                    } \n                    "
          ),
          S = r.user_badges,
          W = r.custom_badges,
          C = S.length > 0 && S[0] && "string" == typeof S[0],
          B = W.length > 0 && "string" == typeof W[0][0],
          P = (S.length > 0 && C) || (!C && S.some((e) => !0 === e.enabled)),
          T = (W.length > 0 && B) || (!B && W.some((e) => !0 === e.enabled)),
          D = c === a().unfoldStart;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: "".concat(U().userProfile, " ").concat(D && c),
              children: [
                "" !== r.avatar || (r.use_discord_avatar && n.discord)
                  ? (0, o.jsxs)("div", {
                      className: a().avatarWrapper,
                      children: [
                        u &&
                          (0, o.jsx)("img", {
                            src: u,
                            alt: "",
                            className: a().avatarDecorationLayout2,
                          }),
                        (0, o.jsx)("img", {
                          src: p,
                          alt: "",
                          className: U().avatar,
                        }),
                      ],
                    })
                  : (0, o.jsx)("span", {
                      className: U().userProfileSvg,
                      children: f.userAvatar,
                    }),
                (0, o.jsxs)("div", {
                  className: U().userDescription,
                  children: [
                    (0, o.jsxs)("div", {
                      className: U().usernameWrapper,
                      children: [
                        (0, o.jsx)(_.e, {
                          color: "foreground",
                          content: "UID ".concat(n.uid.toLocaleString("en-US")),
                          closeDelay: 150,
                          showArrow: !1,
                          offset: 6,
                          classNames: m,
                          children:
                            "typewriter" === r.username_effects
                              ? (0, o.jsxs)(o.Fragment, {
                                  children: [
                                    (0, o.jsx)("style", {
                                      children:
                                        "\n                                        .username-typewriter .Typewriter {\n                                            font-size: "
                                          .concat(
                                            d.username.fontSize,
                                            ";\n                                            font-weight: "
                                          )
                                          .concat(
                                            d.username.fontWeight,
                                            ";\n                                            line-height: 41px;\n                                        }\n                                    "
                                          ),
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "username-typewriter ".concat(
                                        U().usernameTypewriter
                                      ),
                                      children: (0, o.jsx)(x(), {
                                        options: {
                                          strings: [j],
                                          autoStart: !0,
                                          loop: !0,
                                          wrapperClassName: U().usernameStyles,
                                          cursorClassName: U().usernameCursor,
                                          stringSplitter: et,
                                        },
                                      }),
                                    }),
                                  ],
                                })
                              : (0, o.jsx)("h1", {
                                  style: { ...d.username, lineHeight: "41px" },
                                  className: "".concat(
                                    "rgb" === r.username_effects &&
                                      a().rainbowName
                                  ),
                                  children: j,
                                }),
                        }),
                        !(!P && !T) &&
                          (0, o.jsx)(v, { config: r, premiumConfig: s }),
                      ],
                    }),
                    ("" !== r.description || 0 !== s.typewriter.length) &&
                      (0, o.jsx)("h3", {
                        className: U().userDescriptionText,
                        style: d.description,
                        children:
                          s.typewriter_enabled && 0 !== s.typewriter.length
                            ? (0, o.jsx)(x(), {
                                options: {
                                  strings: s.typewriter,
                                  autoStart: !0,
                                  loop: !0,
                                  stringSplitter: et,
                                },
                              })
                            : r.description,
                      }),
                    !s.hide_join_date &&
                      (0, o.jsxs)("h2", {
                        style: d.joinDate,
                        children: ["joined ", h, " ago"],
                      }),
                  ],
                }),
              ],
            }),
            s.second_tab_enabled || "enabled" === r.presence
              ? s.second_tab_enabled && "enabled" === r.presence
                ? (0, o.jsx)("style", {
                    children: "\n                    ."
                      .concat(
                        a().discordPresenceContainer,
                        " {\n                        max-width: initial;\n                    }\n                    ."
                      )
                      .concat(
                        a().highlight,
                        " {\n                        display: none;\n                    }\n                    ."
                      )
                      .concat(
                        a().discordActivity,
                        " {\n                        justify-content: space-between;\n                        width: 100%;\n                    }\n                    ."
                      )
                      .concat(
                        a().discordPresenceContainer,
                        " {\n                        display: block;\n                    }\n                    @media (max-width: 720px) {\n                        ."
                      )
                      .concat(
                        a().userContainer,
                        " {\n                            width: 95%;\n                            box-sizing: border-box;\n                        }\n                        ."
                      )
                      .concat(
                        a().discordUser,
                        " {\n                            max-width: 100%\n                        }\n                        ."
                      )
                      .concat(
                        a().highlight,
                        " {\n                            display: inline;\n                        }\n                        "
                      )
                      .concat(
                        s.second_tab_enabled && "enabled" !== r.presence && w,
                        "\n                    }\n                    @media (max-width: 430px) {\n                        ."
                      )
                      .concat(
                        a().userContainer,
                        " {\n                            width: 100%!important;\n                        }\n                    }\n                    "
                      )
                      .concat(!1 === i.success && y, "\n                    "),
                  })
                : (0, o.jsx)("style", {
                    children: "\n                    ."
                      .concat(
                        a().discordPresenceContainer,
                        " {\n                        max-width: initial;\n                    }\n                    ."
                      )
                      .concat(
                        a().discordPresenceContainer,
                        " {\n                        display: block;\n                    }\n                    ."
                      )
                      .concat(
                        a().discordActivity,
                        " {\n                        justify-content: space-between;\n                        width: 100%;\n                    }\n                    @media (max-width: 720px) {\n                        "
                      )
                      .concat(
                        "enabled" !== r.presence && w,
                        "\n                    }\n                    "
                      ),
                  })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)("div", { className: U().profileSeperator }),
                    (0, o.jsx)("style", {
                      children:
                        "\n                        @media (max-width: 745px) {\n                            ."
                          .concat(
                            a().userContainer,
                            " {\n                                width: 95%;\n                                box-sizing: border-box;\n                            }\n                        }\n                        @media (max-width: 400px) {\n                            ."
                          )
                          .concat(
                            a().userContainer,
                            " {\n                                width: 100%;\n                            }\n                        }\n                        "
                          ),
                    }),
                  ],
                }),
            (0, o.jsx)("div", {
              className: ""
                .concat(U().widgetContainerWrapper, " ")
                .concat(D && c),
              style: g,
              children: (0, o.jsxs)("div", {
                className: U().widgetContainer,
                style: g,
                children: [
                  "enabled" === r.presence &&
                    (0, o.jsx)("div", {
                      className: U().widgetContainerFlex,
                      children: (0, o.jsx)(k, {
                        presenceInformation: i,
                        font: s.font,
                        description: r.description,
                        discordData: n.discord,
                        discordUserBadges: s.second_tab_enabled ? [] : b,
                      }),
                    }),
                  s.second_tab_enabled &&
                    (s.second_tab.spotify || s.second_tab.discord) &&
                    (0, o.jsx)("div", {
                      className: U().widgetContainerFlex,
                      style: g,
                      children: (0, o.jsx)(A, { config: r, premiumConfig: s }),
                    }),
                ],
              }),
            }),
            r.socials.length > 0 &&
              (0, o.jsx)("div", {
                className: "".concat(U().socialsWrapper, " ").concat(D && c),
                children: (0, o.jsx)(N, {
                  socials: r.socials,
                  isMonochrome: r.monochrome,
                  font: s.font,
                  socialGlow: r.social_glow,
                  iconColor: r.icon_color,
                }),
              }),
            (0, o.jsx)(L, {
              publicSalt: n._PS,
              challenge: n._C,
              timestamp: n._ts,
              username: n.username,
              premiumConfig: s,
              views: r.page_views,
              containerBorderRadius: s.border_radius,
              isUnfold: D,
              animationStartClass: c,
            }),
          ],
        });
      }
      var M = n(34896),
        E = n.n(M),
        F = n(48180);
      function V(e) {
        let { buttons: t, showUrl: n, font: r, textAlign: s } = e,
          a = l[r];
        return (0, o.jsx)("div", {
          className: E().userButtons,
          children: t.map((e, t) =>
            (0, o.jsx)(
              "div",
              {
                className: E().button,
                style: { height: n ? 65 : "" },
                children: (0, o.jsxs)(b.default, {
                  href: e.button_url,
                  target: "_blank",
                  children: [
                    "" !== e.button_icon &&
                      (0, o.jsx)("div", {
                        className: E().buttonIconWrapper,
                        children: (0, o.jsx)("img", {
                          src: e.button_icon,
                          className: E().buttonIcon,
                          alt: "",
                        }),
                      }),
                    (0, o.jsxs)("div", {
                      className: E().buttonInformationWrapper,
                      style: {
                        marginLeft:
                          "" != e.button_icon && "left" === s ? 60 : "",
                      },
                      children: [
                        (0, o.jsx)("h1", {
                          style: a.buttonText,
                          children: e.button_title,
                        }),
                        n &&
                          (0, o.jsxs)("span", {
                            className: E().buttonShowUrl,
                            style: a.buttonUrl,
                            children: [F.Z.link, " ", e.button_url],
                          }),
                      ],
                    }),
                  ],
                }),
              },
              t
            )
          ),
        });
      }
      function Z(e) {
        let {
            userData: t,
            config: n,
            premiumConfig: r,
            presenceInformation: s,
            animationStartClass: i,
          } = e,
          c = l[r.font],
          d = {
            base: a().tooltipContainer,
            arrow: "".concat(a().toolTipArrow, " border-2"),
            content: "bg-transparent",
          },
          u = n.use_discord_avatar && t.discord ? s.avatar : n.avatar,
          f = "" !== n.display_name ? n.display_name : t.username,
          m = null == s ? void 0 : s.avatarDecoration,
          p = n.user_badges,
          h = n.custom_badges,
          g = p.length > 0 && p[0] && "string" == typeof p[0],
          j = h.length > 0 && "string" == typeof h[0][0],
          b = (p.length > 0 && g) || (!g && p.some((e) => !0 === e.enabled)),
          w = (h.length > 0 && j) || (!j && h.some((e) => !0 === e.enabled)),
          y = i === a().unfoldStart;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: E().userInformation,
            children: [
              ("" !== n.avatar || (n.use_discord_avatar && t.discord)) &&
                (0, o.jsxs)("div", {
                  className: a().avatarWrapper,
                  children: [
                    m &&
                      (0, o.jsx)("img", {
                        src: m,
                        alt: "",
                        className: a().avatarDecorationLayout3,
                      }),
                    (0, o.jsx)("img", {
                      src: u,
                      alt: "",
                      className: E().avatar,
                    }),
                  ],
                }),
              (0, o.jsxs)("div", {
                className: "".concat(E().userDescription, " ").concat(y && i),
                children: [
                  (0, o.jsx)(_.e, {
                    color: "foreground",
                    content: "UID ".concat(t.uid.toLocaleString("en-US")),
                    closeDelay: 150,
                    showArrow: !1,
                    offset: -2,
                    classNames: d,
                    children:
                      "typewriter" === n.username_effects
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)("style", {
                                children:
                                  "\n                                        .username-typewriter .Typewriter {\n                                            font-size: "
                                    .concat(
                                      c.username.fontSize,
                                      ";\n                                            font-weight: "
                                    )
                                    .concat(
                                      c.username.fontWeight,
                                      ";\n                                        }\n                                    "
                                    ),
                              }),
                              (0, o.jsx)("div", {
                                className: "username-typewriter",
                                children: (0, o.jsx)(x(), {
                                  options: {
                                    strings: [f],
                                    autoStart: !0,
                                    loop: !0,
                                    wrapperClassName: E().username,
                                    cursorClassName: E().usernameCursor,
                                    stringSplitter: et,
                                  },
                                }),
                              }),
                            ],
                          })
                        : (0, o.jsx)("h1", {
                            className: ""
                              .concat(E().username, " ")
                              .concat(
                                "rgb" === n.username_effects && a().rainbowName
                              ),
                            style: c.username,
                            children: f,
                          }),
                  }),
                  !(!b && !w) &&
                    (0, o.jsx)("div", {
                      className: E().badgeContainerWrapper,
                      children: (0, o.jsx)(v, { config: n, premiumConfig: r }),
                    }),
                  ("" !== n.description || 0 !== r.typewriter.length) &&
                    (0, o.jsx)("h3", {
                      className: E().description,
                      style: c.description,
                      children:
                        r.typewriter_enabled && 0 !== r.typewriter.length
                          ? (0, o.jsx)(x(), {
                              options: {
                                strings: r.typewriter,
                                autoStart: !0,
                                loop: !0,
                                stringSplitter: et,
                              },
                            })
                          : n.description,
                    }),
                ],
              }),
              n.socials.length > 0 &&
                (0, o.jsx)("div", {
                  className: "".concat(E().socialWrapper, " ").concat(y && i),
                  children: (0, o.jsx)(N, {
                    socials: n.socials,
                    isMonochrome: n.monochrome,
                    font: r.font,
                    socialGlow: n.social_glow,
                    iconColor: n.icon_color,
                  }),
                }),
              r.buttons.length > 0 &&
                (0, o.jsx)("div", {
                  className: "".concat(E().buttonWrapper, " ").concat(y && i),
                  children: (0, o.jsx)(V, {
                    buttons: r.buttons,
                    showUrl: r.show_url,
                    font: r.font,
                    textAlign: r.text_align,
                  }),
                }),
            ],
          }),
        });
      }
      var q = n(40384),
        R = n.n(q),
        O = n(92866),
        G = n.n(O);
      function J(e) {
        let { username: t } = e;
        return (0, o.jsx)("div", {
          className: G().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: G().container,
            children: [
              F.Z.error,
              (0, o.jsx)("h1", { children: "This user is not claimed" }),
              (0, o.jsx)("h3", {
                children:
                  "Claim this name fast by clicking on the button below!",
              }),
              (0, o.jsxs)("div", {
                className: G().containerButtons,
                children: [
                  (0, o.jsx)(b.default, { href: "/", children: "Go Home" }),
                  (0, o.jsx)(b.default, {
                    href: "/register?claim=".concat(t),
                    children: "Claim Now!",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function X() {
        return (0, o.jsx)("div", {
          className: G().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: G().container,
            children: [
              F.Z.error,
              (0, o.jsx)("h1", {
                children: "Uh oh! An unknown error occurred",
              }),
              (0, o.jsxs)("h3", {
                children: [
                  "Please report this error on our ",
                  (0, o.jsx)(b.default, {
                    href: "https://discord.gg/guns",
                    style: { textDecoration: "none", color: "#b252cc" },
                    children: "discord server",
                  }),
                  ".",
                ],
              }),
              (0, o.jsxs)("div", {
                className: G().containerButtons,
                children: [
                  (0, o.jsx)(b.default, { href: "/", children: "Go Home" }),
                  (0, o.jsx)(b.default, {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: "Discord Server",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Y(e) {
        let { reason: t } = e;
        return (0, o.jsx)("div", {
          className: G().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: G().container,
            children: [
              F.Z.error,
              (0, o.jsxs)("h1", {
                children: [
                  "This user has been banned from ",
                  (0, o.jsx)(b.default, {
                    href: "/",
                    style: { textDecoration: "none", color: "#b252cc" },
                    children: "guns.lol",
                  }),
                ],
              }),
              (0, o.jsxs)("h3", { children: ["Reason: ", t] }),
              (0, o.jsxs)("div", {
                className: G().containerButtons,
                children: [
                  (0, o.jsx)(b.default, { href: "/", children: "Go Home" }),
                  (0, o.jsx)(b.default, {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: "Discord Server",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function K() {
        return (0, o.jsx)("div", {
          className: G().containerWrapper,
          children: (0, o.jsxs)("div", {
            className: G().container,
            children: [
              F.Z.error,
              (0, o.jsx)("h1", { children: "This user is not verified yet" }),
              (0, o.jsx)("h3", {
                children: "If that's your account, please check your email.",
              }),
              (0, o.jsxs)("div", {
                className: G().containerButtons,
                children: [
                  (0, o.jsx)(b.default, { href: "/", children: "Go Home" }),
                  (0, o.jsx)(b.default, {
                    href: "https://discord.gg/guns",
                    target: "_blank",
                    children: "Discord Server",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Q = n(99376),
        $ = n(15135),
        ee = n(27447);
      let et = (e) => new (R())().splitGraphemes(e),
        en = (e, t) => {
          let n = parseInt((e = e.replace(/^#/, "")), 16);
          return "rgba("
            .concat((n >> 16) & 255, ", ")
            .concat((n >> 8) & 255, ", ")
            .concat(255 & n, ", ")
            .concat(Math.max(0, Math.min(1, t)), ")");
        };
      function eo(e) {
        let { data: t } = e,
          n = (0, Q.useSearchParams)(),
          [s, d] = (0, r.useState)(!1),
          p = decodeURIComponent((0, Q.useParams)().username),
          [h, g] = (0, r.useState)(!1),
          [x, _] = (0, r.useState)({ volume: 100, muted: !1 }),
          v =
            null === (w = t.config) || void 0 === w
              ? void 0
              : null === (b = w.premium) || void 0 === b
              ? void 0
              : null === (j = b.metadata) || void 0 === j
              ? void 0
              : j.favicon;
        t.alias && t.redirect && (0, Q.redirect)(t.redirect);
        var j,
          b,
          w,
          y,
          S = t.config;
        void 0 === S &&
          (S = {
            socials: [],
            user_badges: [],
            custom_badges: [],
            color: "#1b1b1b",
            text_color: "#FFFFFF",
            bg_color: "#080808",
            gradient_1: "#881c9c",
            gradient_2: "#0d0d0d",
            profile_gradient: !1,
            use_discord_avatar: !1,
            volume_control: !1,
            badge_glow: !0,
            username_glow: !0,
            swap_colors: !1,
            monochrome: !0,
            animated_title: !1,
            page_views: 0,
            blur: 7,
            opacity: 1,
            url: "",
            audio: "",
            avatar: "",
            custom_cursor: "",
            description: "",
            presence: "",
            display_name: "",
            background_effects: "",
            username_effects: "",
            premium: {
              effects_color: "#ffffff",
              badge_color: "#ffffff",
              border_color: "#ffffff",
              typewriter_enabled: !1,
              typewriter: [],
              hide_views: !1,
              border_enabled: !1,
              second_tab_enabled: !1,
              monochrome_badges: !1,
              border_width: 2,
              border_radius: 18,
              second_tab: {},
              cursor_effects: "",
              font: "satoshi",
              page_enter_text: "",
              layout: "default",
              banner: "",
              buttons: [],
              show_url: !1,
              text_align: "center",
              button_shadow: !1,
              button_border_radius: 12,
            },
          });
        let W = S.premium,
          C = (0, r.useRef)(null),
          N = (0, r.useRef)(null),
          z = (0, r.useRef)(null),
          k = l[W.font],
          P = S.text_color,
          U = ""
            .concat(W.border_width, "px solid ")
            .concat(en(W.border_color, S.opacity - 0.2 * S.opacity)),
          T = "2px solid ".concat(
            en(W.border_color, S.opacity - 0.1 * S.opacity)
          ),
          D =
            "simplistic" === W.layout ? { justifyContent: "initial" } : void 0,
          I = {
            "--presenceUsernameColor": P,
            "--presenceStatusColor": en(P, 0.7),
            "--presenceContainerBackground": S.swap_colors
              ? en(S.color, 0.2)
              : en(P, 0.07),
            "--presenceContainerBorder": S.swap_colors
              ? "2px solid ".concat(en(S.color, 0.1))
              : "2px solid ".concat(en(P, 0.05)),
            "--discordServerMembers": en(P, 0.6),
            "--secondTabBackground": S.swap_colors
              ? en(S.color, 0.2)
              : en(P, 0.07),
            "--secondTabBorder": S.swap_colors
              ? "2px solid ".concat(en(S.color, 0.1))
              : "2px solid ".concat(en(P, 0.05)),
            "--discordMissingIcon": en(P, 0.25),
            "--modernLayoutSeperator": en(P, 0.12),
            "--modernLayoutSeperatorBorder": en(P, 0.12),
            "--discordAvatarBorder": "2px solid ".concat(en(S.color, 0.15)),
            "--badgeContainerBackground": S.swap_colors
              ? en(S.color, 0.2)
              : en(P, 0.08),
            "--badgeContainerBorder": "2px solid ".concat(
              en(S.swap_colors ? S.color : P, 0.04)
            ),
            "--userBadge": {
              default: "20.5px",
              modern: "18px",
              simplistic: "20.5px",
            }[W.layout],
            "--textColor": P,
            "--textColorDarker": en(P, 0.5),
            "--iconColor": S.icon_color,
            "--backgroundColor": S.bg_color,
            "--joinStatus": en(P, 0.65),
            "--audioPlayerBar": en(P, 0.35),
            "--avatarBorder": W.border_enabled
              ? T
              : "2px solid ".concat(en(S.color, 0.4)),
            "--containerColor": en(S.color, S.opacity),
            "--containerBlur": "".concat(S.blur, "px"),
            "--containerGradient":
              S.profile_gradient &&
              "linear-gradient(25deg, "
                .concat(en(S.gradient_1, S.opacity), ", ")
                .concat(en(S.gradient_2, S.opacity), ")"),
            "--containerBorder": W.border_enabled && U,
            "--containerRadius": "".concat(W.border_radius, "px"),
            "--containerWidth": {
              default: "38rem",
              modern: "41rem",
              simplistic: "33rem",
            }[W.layout],
            "--containerPadding":
              "modern" !== W.layout
                ? "35px 15px"
                : "modern" === W.layout && "27px 23px",
            "--volumeBackgroundcolor": en(
              S.color,
              0 !== S.opacity ? S.opacity : 0.2
            ),
            "--volumeBorder": "2px solid ".concat(
              en(S.color, 0 !== S.opacity ? S.opacity - 0.1 * S.opacity : 0.05)
            ),
            "--colorUsernameGlow":
              S.username_glow && "0px 0px 16.5px ".concat(P),
            "--usernameEffects":
              !["rgb", "none", ""].includes(S.username_effects) &&
              "url(https://assets.guns.lol/sparkle_".concat(
                S.username_effects,
                ".gif)"
              ),
            "--buttonBackground": en(P, 0.22),
            "--buttonBorder": "2px solid ".concat(en(P, 0.12)),
            "--buttonRadius": "".concat(W.button_border_radius, "px"),
            "--buttonAlign": W.text_align,
            "--buttonBackgroundHover": en(P, 0.32),
            "--buttonBorderHover": "2px solid ".concat(en(P, 0.25)),
            "--buttonUrlColor": en(P, 0.65),
            "--buttonShadow":
              W.button_shadow && "".concat(en(P, 0.22), " 0px 0px 15px"),
            "--profileViewsContainerBorder": "2px solid ".concat(
              en(W.border_color, S.opacity - 0.2 * S.opacity)
            ),
          },
          A = t.premium
            ? "unfold" === W.animation
              ? a().unfoldStart
              : (W.animation, a().fadeUpStart)
            : a().fadeUpStart,
          M = t.premium
            ? "unfold" === W.animation
              ? a().unfold
              : (W.animation, a().fadeUp)
            : a().fadeUp,
          E = {
            modern: "".concat(a().userContainer, " ").concat(A),
            default: "".concat(a().userContainer, " ").concat(A),
            simplistic: "".concat(a().userContainerLayout3, " ").concat(A),
          };
        (0, r.useEffect)(() => {
          if (
            (d("true" === n.get("custom_domain")),
            t.success && !t.ban && S.animated_title)
          ) {
            var e;
            let n, o;
            (e = "" !== S.display_name ? S.display_name : t.username),
              (n = 0),
              (o = !0),
              setInterval(() => {
                n === e.length && (o = !1), 0 === n && (o = !0);
                let t = 0 === (n = o ? n + 1 : n - 1) ? "" : e.slice(0, n);
                document.title = "@" + t;
              }, 380);
          }
          F ||
            q(S.url) ||
            (M === a().fadeUp
              ? setTimeout(function () {
                  z.current && z.current.classList.add(a().fadeUp);
                }, 350)
              : M === a().unfold &&
                document
                  .querySelectorAll(".".concat(a().unfoldStart))
                  .forEach((e, t) => {
                    setTimeout(() => {
                      e.classList.add(a().unfold);
                    }, 300 * t);
                  }));
        }, [n]),
          (0, r.useEffect)(() => {
            g(
              !!(
                ("maxTouchPoints" in navigator &&
                  navigator.maxTouchPoints > 0) ||
                window.matchMedia("(pointer: coarse)").matches ||
                "ontouchstart" in window ||
                navigator.maxTouchPoints
              )
            );
          }, []);
        let F =
            "string" == typeof S.audio ? "" !== S.audio : S.audio.length > 0,
          V = () => {
            let e = !x.muted;
            0 === x.volume && x.muted
              ? (_({ ...x, muted: !1, volume: 100 }),
                N.current &&
                  ((N.current.muted = !1), (N.current.volume = 0.25)),
                !F &&
                  C.current &&
                  ((C.current.muted = !1), (C.current.volume = 0.25)))
              : (_({ ...x, muted: e }),
                N.current &&
                  ((N.current.muted = e),
                  e || (N.current.volume = (x.volume / 100) * 0.25)),
                F ||
                  !C.current ||
                  ((C.current.muted = e),
                  e || (C.current.volume = (x.volume / 100) * 0.25)));
          },
          q = (e) => {
            for (let t of [".mp4", ".mov", ".avi", ".m4v"])
              if (e.endsWith(t)) return !0;
            return !1;
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            v &&
              "" !== v &&
              (0, o.jsx)("link", { rel: "icon", href: v, sizes: "any" }),
            t.success && !t.ban && t.verified
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(i, {
                      backgroundUrl: S.url,
                      audio: S.audio,
                      shuffleAudios: S.shuffle_audios,
                      videoTagRef: C,
                      audioTagRef: N,
                    }),
                    (F || q(S.url)) &&
                      (0, o.jsx)(c, {
                        videoTagRef: C,
                        audioTagRef: N,
                        clickToEnterText:
                          "" === W.page_enter_text
                            ? "click to enter..."
                            : W.page_enter_text,
                        userFont: k,
                        userContainerRef: z,
                        animationClass: M,
                      }),
                    (0, o.jsx)(u, {
                      backgroundEffects: S.background_effects,
                      cursorEffects: W.cursor_effects,
                      cursorEffectsColor: W.effects_color,
                      textColor: P,
                      backgroundColor: S.bg_color,
                      cursorUrl: S.custom_cursor,
                    }),
                    (0, o.jsx)(m.Z, { font: W.font }),
                    (0, o.jsx)("div", {
                      className: a().backgroundColor,
                      style: { backgroundColor: S.bg_color },
                    }),
                    (0, o.jsxs)("div", {
                      style: I,
                      children: [
                        S.volume_control &&
                          (q(S.url) || F) &&
                          (0, o.jsxs)("div", {
                            className: a().volumeButton,
                            children: [
                              x.muted
                                ? (0, o.jsx)("span", {
                                    onClick: V,
                                    children: f.muted,
                                  })
                                : (0, o.jsx)("span", {
                                    onClick: V,
                                    children: f.unmuted,
                                  }),
                              (0, o.jsxs)("div", {
                                className: a().volumeSlider,
                                children: [
                                  (0, o.jsx)("style", {
                                    children:
                                      "\n                                        .mantine-Slider-label {\n                                        display: none\n                                        }\n                                        .mantine-Slider-track::before {\n                                                background: var(--textColorDarker);\n                                            }\n                                        .mantine-Slider-bar {\n                                            background-color: var(--textColor)\n                                        }\n                                        .mantine-Slider-thumb {\n                                            border: 0.15rem solid var(--containerColor);\n                                            box-shadow: var(--textColorDarker) 0px 5px 25px 0px;\n                                        ",
                                  }),
                                  (0, o.jsx)(ee.Z, {
                                    value: x.muted ? 0 : Math.round(x.volume),
                                    onChangeFunction: (e) => {
                                      let t = 0 === e;
                                      _({ volume: e, muted: t }),
                                        N.current &&
                                          ((N.current.volume =
                                            (e / 100) * 0.25),
                                          (N.current.muted = t)),
                                        !F &&
                                          C.current &&
                                          ((C.current.volume =
                                            (e / 100) * 0.25),
                                          (C.current.muted = t)),
                                        console.log({ volume: e, muted: t });
                                    },
                                    step: 1,
                                    max: 100,
                                    min: 0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (0, o.jsx)("div", {
                          className: a().mainContainer,
                          children: (0, o.jsxs)("div", {
                            className: a().userContainerWrapper,
                            style: D,
                            children: [
                              "simplistic" === W.layout &&
                                (0, o.jsx)("div", {
                                  className: a().profileViewsContainer,
                                  children: (0, o.jsx)(L, {
                                    publicSalt: t._PS,
                                    challenge: t._C,
                                    timestamp: t._ts,
                                    username: t.username,
                                    premiumConfig: W,
                                    views: S.page_views,
                                    containerBorderRadius: W.border_radius,
                                    isUnfold: A === a().unfoldStart,
                                    animationStartClass: A,
                                  }),
                                }),
                              W.parallax_animation
                                ? (0, o.jsx)($.Z, {
                                    tiltEnable: !h,
                                    transitionSpeed: 1500,
                                    perspective: 1500,
                                    tiltMaxAngleX: 14,
                                    tiltMaxAngleY: 14,
                                    style: {
                                      position:
                                        "simplistic" === W.layout
                                          ? "relative"
                                          : "fixed",
                                      width: "100%",
                                      maxWidth: "var(--containerWidth)",
                                      display: "flex",
                                      justifyContent: "center",
                                    },
                                    children: (0, o.jsx)("div", {
                                      className: E[W.layout],
                                      style: { position: "initial" },
                                      ref: z,
                                      children:
                                        "default" === W.layout
                                          ? (0, o.jsx)(B, {
                                              userData: t,
                                              config: S,
                                              premiumConfig: W,
                                              presenceInformation: t.presence,
                                              animationStartClass: A,
                                            })
                                          : "modern" === W.layout
                                          ? (0, o.jsx)(H, {
                                              userData: t,
                                              config: S,
                                              premiumConfig: W,
                                              presenceInformation: t.presence,
                                              animationStartClass: A,
                                            })
                                          : (0, o.jsx)(Z, {
                                              userData: t,
                                              config: S,
                                              premiumConfig: W,
                                              presenceInformation: t.presence,
                                              animationStartClass: A,
                                            }),
                                    }),
                                  })
                                : (0, o.jsx)("div", {
                                    className: E[W.layout],
                                    ref: z,
                                    children:
                                      "default" === W.layout
                                        ? (0, o.jsx)(B, {
                                            userData: t,
                                            config: S,
                                            premiumConfig: W,
                                            presenceInformation: t.presence,
                                            animationStartClass: A,
                                          })
                                        : "modern" === W.layout
                                        ? (0, o.jsx)(H, {
                                            userData: t,
                                            config: S,
                                            premiumConfig: W,
                                            presenceInformation: t.presence,
                                            animationStartClass: A,
                                          })
                                        : (0, o.jsx)(Z, {
                                            userData: t,
                                            config: S,
                                            premiumConfig: W,
                                            presenceInformation: t.presence,
                                            animationStartClass: A,
                                          }),
                                  }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : (null === (y = t.error) || void 0 === y
                  ? void 0
                  : y.toLowerCase()) === "user not found"
              ? (0, o.jsx)(J, { username: p })
              : t.error
              ? (0, o.jsx)(X, {})
              : !0 === t.ban
              ? (0, o.jsx)(Y, { reason: t.ban_reason })
              : !t.verified && (0, o.jsx)(K, {}),
          ],
        });
      }
    },
    27447: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(57437),
        r = n(92866),
        s = n.n(r),
        a = n(31898);
      function i(e) {
        let {
          featureName: t,
          onChangeFunction: n,
          defaultValue: r,
          value: i,
          marks: c,
          ...l
        } = e;
        return (0, o.jsxs)("div", {
          className: s().inputContainerWrapper,
          children: [
            (0, o.jsx)("h1", { className: s().featureName, children: t }),
            (0, o.jsx)("div", {
              className: s().inputWrapperDiv,
              children: (0, o.jsx)(a.i, {
                defaultValue: r,
                onChange: n,
                value: i,
                color: "gray",
                marks: c,
                ...l,
              }),
            }),
          ],
        });
      }
    },
    25691: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return s;
        },
        j: function () {
          return r;
        },
      });
      var o = n(2265);
      let r = {
        satoshi: "'Satoshi', sans-serif",
        firacode: "'Fira Code', monospace",
        poppins: "'Poppins', sans-serif",
        array: "'Array', sans-serif",
        drippy: "'Were-Beast', sans-serif",
        minecraft: "'Minecraftia', sans-serif",
        outfit: "'Outfit', sans-serif",
        chillax: "'Chillax', sans-serif",
        velocity: "'Panchang', sans-serif",
        technor: "'Technor', sans-serif",
        jetbrains_mono: "'JetBrains Mono', monospace",
      };
      function s(e) {
        let { font: t } = e;
        return (
          (0, o.useEffect)(() => {
            let e = document.head,
              n = document.createElement("link");
            switch (((n.rel = "stylesheet"), (n.dataset.font = t), t)) {
              case "firacode":
                n.href =
                  "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap";
                break;
              case "poppins":
                n.href =
                  "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
                break;
              case "array":
                n.href =
                  "https://api.fontshare.com/v2/css?f[]=array@400&display=swap";
                break;
              case "drippy":
                n.href = "https://fonts.cdnfonts.com/css/were-beast-2";
                break;
              case "minecraft":
                n.href = "https://fonts.cdnfonts.com/css/minecraftia";
                break;
              case "outfit":
                n.href =
                  "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap";
                break;
              case "chillax":
                n.href =
                  "https://api.fontshare.com/v2/css?f[]=chillax@500&display=swap";
                break;
              case "velocity":
                n.href =
                  "https://api.fontshare.com/v2/css?f[]=panchang@500&display=swap";
                break;
              case "technor":
                n.href =
                  "https://api.fontshare.com/v2/css?f[]=technor@400&display=swap";
                break;
              case "jetbrains_mono":
                n.href =
                  "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@0;1&display=swap";
                break;
              default:
                n.href = "";
            }
            n.href && e.appendChild(n);
            let o = document.createElement("style");
            return (
              (o.dataset.font = t),
              (o.innerHTML =
                "\n            body, * {\n                font-family: ".concat(
                  r[t],
                  " !important;\n            }\n        "
                )),
              e.appendChild(o),
              () => {
                n.parentNode && e.removeChild(n),
                  o.parentNode && e.removeChild(o);
              }
            );
          }, [t]),
          null
        );
      }
    },
    7330: function (e) {
      e.exports = {
        userInformation: "userLayout1_userInformation__GMpFu",
        avatar: "userLayout1_avatar__qnP1r",
        userDescription: "userLayout1_userDescription__ZjN4w",
        userDescriptionText: "userLayout1_userDescriptionText__grrjO",
        userDescriptionUsername: "userLayout1_userDescriptionUsername__ynCxB",
        usernameCursor: "userLayout1_usernameCursor__Iwq_D",
        badgeContainerWrapper: "userLayout1_badgeContainerWrapper__MV2I1",
        banner: "userLayout1_banner__gDnXO",
        adjustBanner: "userLayout1_adjustBanner__ZkAJ8",
        socialsWrapper: "userLayout1_socialsWrapper__9yWdO",
      };
    },
    96487: function (e) {
      e.exports = {
        userProfile: "userLayout2_userProfile__NJZlA",
        avatar: "userLayout2_avatar__Pqgcw",
        userDescription: "userLayout2_userDescription__sYo_t",
        usernameStyles: "userLayout2_usernameStyles__oqjz5",
        usernameCursor: "userLayout2_usernameCursor__4EKZt",
        usernameWrapper: "userLayout2_usernameWrapper__ndZQN",
        usernameTypewriter: "userLayout2_usernameTypewriter__zdo6s",
        widgetContainer: "userLayout2_widgetContainer__oNrZ7",
        widgetContainerFlex: "userLayout2_widgetContainerFlex__Ju8_4",
        secondTab: "userLayout2_secondTab__TnJGU",
        widgetContainerWrapper: "userLayout2_widgetContainerWrapper__vtDOQ",
        guildIcon: "userLayout2_guildIcon__NFphk",
        discordServer: "userLayout2_discordServer__ZTxRU",
        guildInformation: "userLayout2_guildInformation__FiRVE",
        profileSeperator: "userLayout2_profileSeperator__kuDqS",
        socialsWrapper: "userLayout2_socialsWrapper__SOqg0",
        discordInformationWrapper:
          "userLayout2_discordInformationWrapper__hYFJt",
        joinButtonLarge: "userLayout2_joinButtonLarge__eo99Z",
        widgetPlaceholder: "userLayout2_widgetPlaceholder__WMAac",
        userProfileSvg: "userLayout2_userProfileSvg__poFeq",
        missingIcon: "userLayout2_missingIcon__yYJ4k",
      };
    },
    34896: function (e) {
      e.exports = {
        userInformation: "userLayout3_userInformation__XY6Cv",
        avatar: "userLayout3_avatar___QBfi",
        description: "userLayout3_description__m_svC",
        username: "userLayout3_username__aL5xu",
        usernameCursor: "userLayout3_usernameCursor__OsNOm",
        userDescription: "userLayout3_userDescription__cZijh",
        badgeContainerWrapper: "userLayout3_badgeContainerWrapper__68aF4",
        socialWrapper: "userLayout3_socialWrapper__RUQsH",
        buttonWrapper: "userLayout3_buttonWrapper__RpJZm",
        userButtons: "userLayout3_userButtons__LDNnk",
        button: "userLayout3_button__xtBkk",
        buttonShowUrl: "userLayout3_buttonShowUrl__nbq1Z",
        buttonInformationWrapper: "userLayout3_buttonInformationWrapper__YjJT_",
        buttonIcon: "userLayout3_buttonIcon__mzHwy",
        buttonIconWrapper: "userLayout3_buttonIconWrapper__1xEU8",
      };
    },
    20044: function (e) {
      e.exports = {
        snowflake: "userPage_snowflake__tIhFu",
        inner: "userPage_inner__ABjv6",
        "snowflakes-shake": "userPage_snowflakes-shake__f0RbD",
        "snowflakes-fall": "userPage_snowflakes-fall__M5LeS",
        backgroundVideo: "userPage_backgroundVideo__eD52R",
        backgroundImage: "userPage_backgroundImage__11BmZ",
        clickToEnterOverlay: "userPage_clickToEnterOverlay__yTl7T",
        hide: "userPage_hide___is2D",
        clickToEnterText: "userPage_clickToEnterText__3qgKs",
        blurredBackground: "userPage_blurredBackground__9n5Ya",
        nightTime: "userPage_nightTime__oGgX_",
        oldTV: "userPage_oldTV__VWUCS",
        tooltipContainer: "userPage_tooltipContainer__kxmY1",
        verified: "userPage_verified__cKqvm",
        bugHunter: "userPage_bugHunter__wYhyc",
        winner: "userPage_winner__wn9HE",
        second: "userPage_second__T0lnj",
        third: "userPage_third__2mMoK",
        imageHost: "userPage_imageHost__fZBMt",
        serverBooster: "userPage_serverBooster__okX9e",
        premium: "userPage_premium__I_s2h",
        staff: "userPage_staff__Rda7x",
        og: "userPage_og__0_eX9",
        donor: "userPage_donor__F8dCK",
        userSocials: "userPage_userSocials__J9Lve",
        userSocial: "userPage_userSocial__pqgln",
        customIcon: "userPage_customIcon__acNk7",
        youtube: "userPage_youtube__o7aWH",
        onlyfans: "userPage_onlyfans__VtSxO",
        email: "userPage_email__2SHfG",
        discord: "userPage_discord__HqXif",
        spotify: "userPage_spotify__JXTsD",
        instagram: "userPage_instagram__1b1yw",
        x: "userPage_x__ITEC2",
        tiktok: "userPage_tiktok__wU4FE",
        telegram: "userPage_telegram__oXlUA",
        soundcloud: "userPage_soundcloud__sKTNE",
        paypal: "userPage_paypal__o0kMj",
        namemc: "userPage_namemc__6vSfq",
        "ko-fi": "userPage_ko-fi__OtD4v",
        github: "userPage_github__qWBED",
        roblox: "userPage_roblox__rViJ_",
        cashapp: "userPage_cashapp__dV5te",
        twitch: "userPage_twitch__ggEDm",
        reddit: "userPage_reddit__FGMIp",
        steam: "userPage_steam__EhoB0",
        kick: "userPage_kick__vmWm_",
        pinterest: "userPage_pinterest___zLTM",
        lastfm: "userPage_lastfm__uItE3",
        facebook: "userPage_facebook__bRTvk",
        linkedin: "userPage_linkedin__ipF0f",
        snapchat: "userPage_snapchat__BnGsw",
        bitcoin: "userPage_bitcoin__aTvLy",
        ltc: "userPage_ltc__oGQ_X",
        buymeacoffee: "userPage_buymeacoffee__MNCAw",
        eth: "userPage_eth__YMYHq",
        monero: "userPage_monero__qUrgo",
        gitlab: "userPage_gitlab__aJGZ5",
        custom_url: "userPage_custom_url__f0SsA",
        discordPresenceContainer: "userPage_discordPresenceContainer__qZ67h",
        discordUserInformation: "userPage_discordUserInformation__x1y6x",
        discordAvatar: "userPage_discordAvatar__5yihz",
        discordUser: "userPage_discordUser__wDdLz",
        discordUserDiv: "userPage_discordUserDiv__fp0gq",
        highlight: "userPage_highlight__N8An9",
        activityImage: "userPage_activityImage__KIhMA",
        discordStatus: "userPage_discordStatus__ME1mG",
        discordStatusIcon: "userPage_discordStatusIcon__tKlAh",
        offlineText: "userPage_offlineText__N3A_8",
        discordEmoji: "userPage_discordEmoji__vPJ_s",
        discordNotConnected: "userPage_discordNotConnected__tcJd7",
        mainContainer: "userPage_mainContainer__D9vBk",
        userContainerWrapper: "userPage_userContainerWrapper__OVz6p",
        audioPlayer: "userPage_audioPlayer__3L1uR",
        userContainer: "userPage_userContainer__eymIK",
        userContainerLayout3: "userPage_userContainerLayout3__TqoNC",
        unfold: "userPage_unfold__XlZ8v",
        unfoldStart: "userPage_unfoldStart__cFi88",
        fadeUpStart: "userPage_fadeUpStart__fjpAo",
        fadeUp: "userPage_fadeUp__ulAPo",
        backgroundColor: "userPage_backgroundColor__NOc2o",
        profileViews: "userPage_profileViews__2Hqh_",
        rainbowName: "userPage_rainbowName__3k0IU",
        rainbowAnimation: "userPage_rainbowAnimation__cJjwD",
        discordPresenceWrapper: "userPage_discordPresenceWrapper__zBM2B",
        discordActivity: "userPage_discordActivity__727if",
        volumeButton: "userPage_volumeButton__Da10v",
        customBadge: "userPage_customBadge__hOMNg",
        defaultEmoji: "userPage_defaultEmoji__uJ6X2",
        badgeContainer: "userPage_badgeContainer__uuL3l",
        badgeContainerFlex: "userPage_badgeContainerFlex__1W_i0",
        discordUserBadges: "userPage_discordUserBadges__OOAES",
        discordBadge: "userPage_discordBadge__xp77l",
        avatarWrapper: "userPage_avatarWrapper__vWt9O",
        avatarDecorationLayout1: "userPage_avatarDecorationLayout1__dvTIh",
        avatarDecorationLayout2: "userPage_avatarDecorationLayout2__7R3kh",
        avatarDecorationLayout3: "userPage_avatarDecorationLayout3__xBPua",
        customUrlWarning: "userPage_customUrlWarning__If__V",
        modalButtons: "userPage_modalButtons__EDg0a",
        volumeSlider: "userPage_volumeSlider__yHMLi",
        profileViewsContainer: "userPage_profileViewsContainer__1g7i_",
        zoomInSpin: "userPage_zoomInSpin__fMtG3",
      };
    },
  },
]);
