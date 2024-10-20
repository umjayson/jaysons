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
      (e._sentryDebugIds[t] = "a30ddb0b-4557-4b4a-ba3d-4055d29ed052"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a30ddb0b-4557-4b4a-ba3d-4055d29ed052"));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [347],
    {
      97828: function (e, t, n) {
        "use strict";
        n.d(t, {
          w: function () {
            return m;
          },
        });
        var i = n(85893),
          a = n(96494),
          r = n(94184),
          s = n.n(r);
        n(67294);
        var o = n(9473),
          l = n(32091),
          u = n(38343),
          c = n(66341),
          d = n(43396),
          p = n(73636),
          _ = n.n(p);
        let m = (e) => {
          let { uri: t, className: n, mainView: r } = e,
            p = (0, o.v9)((e) => e.settings.isMobile),
            m = (0, a.EC)(t),
            N = (0, o.v9)((e) => e.data.entity?.isAudiobook),
            T = m?.type === a.JM.ARTIST || (m?.type === a.JM.SHOW && !N),
            E = (0, o.v9)((e) => e.settings.session.isAnonymous),
            I = (0, l.y)({
              productName: r ? "embed_player_p" : "embed_player_v",
              intent: l.U.ADD_TO_LIBRARY,
            }),
            [h, y] = (0, u.Z)(t);
          return void 0 === h
            ? null
            : (0, i.jsx)("div", {
                "data-testid": "save-on-spotify",
                className: s()(_().wrapper, n),
                children: T
                  ? (0, i.jsx)(c.e, {
                      isMobile: p,
                      shouldUseDeeplink: E,
                      links: I,
                      saved: h[t],
                      savedCb: y,
                      mainView: r,
                    })
                  : (0, i.jsx)(d.S, {
                      isMobile: p,
                      shouldUseDeeplink: E,
                      links: I,
                      saved: h[t],
                      savedCb: y,
                      mainView: r,
                    }),
              });
        };
      },
      1861: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return T;
          },
        });
        var i = n(85893),
          a = n(17296),
          r = n(80852),
          s = n(67757),
          o = n(5996),
          l = n(96494);
        n(67294);
        var u = n(9473),
          c = n(32091),
          d = n(38343),
          p = n(28065),
          _ = n(17569),
          m = n(99992),
          N = n.n(m);
        let T = () => {
          let e = (0, u.v9)((e) => e.data.entity?.type !== l.JM.ARTIST),
            t = (0, u.v9)((e) => e.settings.isMobile),
            n = (0, u.I0)(),
            m = (0, o.NT)(),
            T = (0, u.v9)((e) => e.settings.session.isAnonymous),
            E = (0, u.v9)((e) =>
              e.data.entity?.isAudiobook
                ? e.data.entity.relatedEntityUri
                : e.data.entity.uri
            ),
            I = (0, c.y)({
              productName: "embed_player_p",
              intent: c.U.ADD_TO_LIBRARY,
            }),
            [h, y] = (0, d.Z)(E);
          if (!e || void 0 === h) return null;
          let f = h
              ? m(
                  "embed.saved-on-spotify",
                  "Saved on Spotify",
                  "Button`s text that removes an item to the user`s library"
                )
              : m(
                  "embed.save-on-spotify",
                  "Save on Spotify",
                  "Button`s text that adds an item to the user`s library"
                ),
            A = async () => {
              T
                ? (n(
                    (0, p._)({
                      action_type: "click",
                      action_intent: "deeplink",
                      action_item_id: "save-on-spotify-button",
                    })
                  ),
                  (0, _.M)({ url: I.embeddedEntity, newWindow: !t }))
                : (n(
                    (0, p._)({
                      action_type: "click",
                      action_intent: h[E]
                        ? "remove-from-spotify"
                        : "save-on-spotify",
                    })
                  ),
                  await y(!h[E]));
            };
          return (0, i.jsx)(a.o, {
            iconOnly: h[E] ? r.K : s.G,
            "data-testid": "save-on-spotify-button",
            condensedAll: !0,
            title: f,
            "aria-label": f,
            onClick: A,
            semanticColor: "textBase",
            size: "medium",
            className: N().addToLibraryButton,
          });
        };
      },
      66341: function (e, t, n) {
        "use strict";
        n.d(t, {
          e: function () {
            return E;
          },
        });
        var i = n(85893),
          a = n(28527),
          r = n(54472),
          s = n(17296),
          o = n(43485),
          l = n(5996),
          u = n(94184),
          c = n.n(u);
        n(67294);
        var d = n(9473),
          p = n(47229),
          _ = n(28065),
          m = n(17569),
          N = n(9127),
          T = n.n(N);
        let E = (e) => {
          let {
              saved: t,
              shouldUseDeeplink: n,
              links: u,
              isMobile: N,
              savedCb: E,
              mainView: I,
            } = e,
            h = (0, d.I0)(),
            y = (0, l.NT)(),
            { isCompactLegacy: f } = (0, p.M)(),
            A = t
              ? y(
                  "following",
                  "Following",
                  "Button`s text that adds an item to the user`s library"
                )
              : y(
                  "follow",
                  "Follow",
                  "Button`s text that removes an item to the user`s library"
                ),
            k = t
              ? y(
                  "mwp.context.stop.following",
                  "Stop Following",
                  "Button`s text that removes an item to the user`s library"
                )
              : y(
                  "follow_on_spotify",
                  "Follow on Spotify",
                  "Button`s text that adds an item to the user`s library"
                ),
            g = async () => {
              n
                ? (h(
                    (0, _._)({
                      action_type: "click",
                      action_intent: "deeplink",
                      action_item_id: "follow",
                    })
                  ),
                  (0, m.M)({
                    url: I ? u.embeddedEntity : u.compositeEntity,
                    newWindow: !N,
                  }))
                : (h(
                    (0, _._)({
                      action_type: "click",
                      action_intent: t ? "unfollow" : "follow",
                    })
                  ),
                  await E(!t));
            },
            O = () => (I ? A : k);
          return (0, i.jsx)("div", {
            className: c()(T().followButtonWrapper, { [T().hideBorder]: !I }),
            children: (0, i.jsx)(s.o, {
              "data-testid": "follow-button",
              condensedAll: !0,
              title: O(),
              "aria-label": O(),
              onClick: g,
              semanticColor: "textBase",
              size: "medium",
              iconLeading: f || I ? void 0 : t ? a.k : r.V,
              className: c()(T().followButtonButton, {
                [T().transformNone]: !I,
              }),
              children: (0, i.jsx)(o.x, {
                variant: I ? "bodySmallBold" : f ? "marginal" : "bodySmall",
                className: c()(T().followButtonText, {
                  [T().overflowMenuText]: !I,
                }),
                semanticColor: "textBase",
                "data-testid": "follow-button-label",
                children: O(),
              }),
            }),
          });
        };
      },
      43396: function (e, t, n) {
        "use strict";
        n.d(t, {
          S: function () {
            return E;
          },
        });
        var i = n(85893),
          a = n(80852),
          r = n(67757),
          s = n(17296),
          o = n(43485),
          l = n(5996),
          u = n(94184),
          c = n.n(u);
        n(67294);
        var d = n(9473),
          p = n(47229),
          _ = n(28065),
          m = n(17569),
          N = n(26040),
          T = n.n(N);
        let E = (e) => {
          let {
              saved: t,
              shouldUseDeeplink: n,
              isMobile: u,
              savedCb: N,
              mainView: E,
              links: I,
            } = e,
            h = (0, d.I0)(),
            y = (0, l.NT)(),
            f = t
              ? y(
                  "embed.saved-on-spotify",
                  "Saved on Spotify",
                  "Button`s text that removes an item to the user`s library"
                )
              : y(
                  "embed.save-on-spotify",
                  "Save on Spotify",
                  "Button`s text that adds an item to the user`s library"
                ),
            A = async () => {
              n
                ? (h(
                    (0, _._)({
                      action_type: "click",
                      action_intent: "deeplink",
                      action_item_id: "save-on-spotify-button",
                    })
                  ),
                  (0, m.M)({ url: I.selectedEntity, newWindow: !u }))
                : (h(
                    (0, _._)({
                      action_type: "click",
                      action_intent: t
                        ? "remove-from-spotify"
                        : "save-on-spotify",
                    })
                  ),
                  await N(!t));
            };
          return (0, i.jsx)(s.o, {
            "data-testid": "save-on-spotify-button",
            condensedAll: !0,
            title: f,
            "aria-label": f,
            iconLeading: (0, p.M)().isCompactLegacy ? void 0 : t ? a.K : r.G,
            onClick: A,
            semanticColor: "textBase",
            size: "medium",
            className: c()(T().saveOnSpotifyButton, { [T().overflowMenu]: !E }),
            children: (0, i.jsx)(o.x, {
              "data-testid": "save-button-label",
              className: c()(T().saveOnSpotifyButtonText, {
                [T().overflowMenu]: !E,
              }),
              children: f,
            }),
          });
        };
      },
      67584: function (e, t, n) {
        "use strict";
        let i;
        n.d(t, {
          g: function () {
            return nJ;
          },
        });
        var a,
          r,
          s,
          o,
          l,
          u,
          c,
          d,
          p,
          _,
          m,
          N,
          T,
          E,
          I,
          h,
          y,
          f,
          A,
          k,
          g,
          O,
          v,
          S,
          b,
          R,
          C,
          P,
          w,
          L,
          x,
          D,
          M,
          U,
          G,
          B,
          j,
          F,
          W,
          V,
          H,
          Y,
          K,
          q,
          X,
          J,
          $,
          z,
          Q,
          Z,
          ee,
          et,
          en,
          ei,
          ea,
          er,
          es,
          eo,
          el,
          eu,
          ec,
          ed,
          ep,
          e_,
          em,
          eN,
          eT,
          eE,
          eI,
          eh,
          ey,
          ef,
          eA,
          ek,
          eg,
          eO,
          ev,
          eS,
          eb,
          eR,
          eC,
          eP,
          ew,
          eL,
          ex,
          eD,
          eM,
          eU,
          eG,
          eB,
          ej,
          eF,
          eW,
          eV,
          eH,
          eY,
          eK,
          eq,
          eX,
          eJ,
          e$,
          ez,
          eQ,
          eZ,
          e0,
          e9,
          e1,
          e3,
          e2,
          e5,
          e4,
          e7,
          e6,
          e8,
          te,
          tt,
          tn,
          ti,
          ta,
          tr,
          ts,
          to,
          tl,
          tu,
          tc,
          td,
          tp,
          t_,
          tm,
          tN,
          tT,
          tE,
          tI,
          th,
          ty,
          tf,
          tA,
          tk,
          tg,
          tO,
          tv,
          tS,
          tb,
          tR = n(85893),
          tC = n(37542),
          tP = n(61156),
          tw = n(5996),
          tL = n(67294),
          tx = n(9473);
        ((eh || (eh = {})).InvalidURI = "invalid_uri"),
          ((a = ey || (ey = {})).READY = "ready"),
          (a.PLAYBACK_UPDATE = "playback_update"),
          (a.ERROR = "error"),
          ((r = ef || (ef = {})).PLAY_FROM_START = "play_from_start"),
          (r.PLAY = "play"),
          (r.PAUSE = "pause"),
          (r.RESUME = "resume"),
          (r.TOGGLE_PLAY = "toggle"),
          (r.SEEK = "seek"),
          (r.LOAD_COMPLETE_ACK = "load_complete_ack");
        var tD = n(5603),
          tM = n(28065),
          tU = n(73638),
          tG = n(33829),
          tB = n(32515);
        (eA || (eA = {})).BACKEND = "backend";
        let tj = () => ({
          type: "backend",
          async read(e, t, i) {
            try {
              if ("en" === e) return i(null, {});
              return i(null, await n(45009)(`./${e}/strings.json`));
            } catch {
              return i(null, {});
            }
          },
        });
        var tF = n(23392),
          tW = n(96494);
        let tV = [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "embedTracklistTrack" },
            typeCondition: {
              kind: "NamedType",
              name: { kind: "Name", value: "Track" },
            },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "uri" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contentRating" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "duration" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalMilliseconds" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "playability" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "playable" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "previews" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "audioPreviews" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "items" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "format" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "url" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "artists" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "items" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "uri" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "profile" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "clientRestrictions" },
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: {
                            kind: "Variable",
                            name: {
                              kind: "Name",
                              value: "includeClientRestrictions",
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        ];
        [...tV], [...tV];
        let tH = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "mutation",
                name: { kind: "Name", value: "addItemsToRootlist" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "newPosition" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "NamedType",
                        name: {
                          kind: "Name",
                          value: "RootlistItemPositionInput",
                        },
                      },
                    },
                  },
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "addItemsToRootlist" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "input" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "newPosition" },
                                value: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "newPosition" },
                                },
                              },
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uris" },
                                value: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "uris" },
                                },
                              },
                            ],
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tY = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "mutation",
                name: { kind: "Name", value: "removePlaylistFromRootlist" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "removeItemsFromRootlist" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "input" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uris" },
                                value: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "uris" },
                                },
                              },
                            ],
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          };
        [...tV],
          ((s = ek || (ek = {})).Affinity = "AFFINITY"),
          (s.LastPlayed = "LAST_PLAYED"),
          (s.PlayCount = "PLAY_COUNT"),
          ((o = eg || (eg = {})).LongTerm = "LONG_TERM"),
          (o.MidTerm = "MID_TERM"),
          (o.ShortTerm = "SHORT_TERM"),
          ((l = eO || (eO = {})).Album = "ALBUM"),
          (l.Audiobook = "AUDIOBOOK"),
          (l.Compilation = "COMPILATION"),
          (l.Ep = "EP"),
          (l.Podcast = "PODCAST"),
          (l.Single = "SINGLE"),
          (l.Unknown = "UNKNOWN"),
          ((u = ev || (ev = {})).Autobiography = "AUTOBIOGRAPHY"),
          (u.Biography = "BIOGRAPHY"),
          ((c = eS || (eS = {})).DateAsc = "DATE_ASC"),
          (c.DateDesc = "DATE_DESC"),
          (c.NameAsc = "NAME_ASC"),
          (c.NameDesc = "NAME_DESC"),
          ((d = eb || (eb = {})).Album = "ALBUM"),
          (d.Artist = "ARTIST"),
          (d.Concert = "CONCERT"),
          (d.Episode = "EPISODE"),
          (d.ExclusiveMerch = "EXCLUSIVE_MERCH"),
          (d.Merch = "MERCH"),
          (d.Other = "OTHER"),
          (d.Playlist = "PLAYLIST"),
          (d.Podcast = "PODCAST"),
          (d.Prerelease = "PRERELEASE"),
          (d.Track = "TRACK"),
          ((p = eR || (eR = {})).AssocTypeUnspecified =
            "ASSOC_TYPE_UNSPECIFIED"),
          (p.HasRelatedContent = "HAS_RELATED_CONTENT"),
          (p.IsPrimarilyAbout = "IS_PRIMARILY_ABOUT"),
          ((_ = eC || (eC = {})).BookPageRedirect = "BOOK_PAGE_REDIRECT"),
          (_.Unspecified = "UNSPECIFIED"),
          ((eP || (eP = {})).DiscoveredDevice = "DISCOVERED_DEVICE"),
          ((m = ew || (ew = {})).IntegrationAmazonAlexa =
            "INTEGRATION_AMAZON_ALEXA"),
          (m.IntegrationAndroidAuto = "INTEGRATION_ANDROID_AUTO"),
          (m.IntegrationAndroidAutomotive = "INTEGRATION_ANDROID_AUTOMOTIVE"),
          (m.IntegrationAndroidClock = "INTEGRATION_ANDROID_CLOCK"),
          (m.IntegrationAndroidPhone = "INTEGRATION_ANDROID_PHONE"),
          (m.IntegrationAndroidSystemUi = "INTEGRATION_ANDROID_SYSTEM_UI"),
          (m.IntegrationAndroidTablet = "INTEGRATION_ANDROID_TABLET"),
          (m.IntegrationAndroidTv = "INTEGRATION_ANDROID_TV"),
          (m.IntegrationAppleTv = "INTEGRATION_APPLE_TV"),
          (m.IntegrationAppleWatch = "INTEGRATION_APPLE_WATCH"),
          (m.IntegrationAsusClock = "INTEGRATION_ASUS_CLOCK"),
          (m.IntegrationBixbyRoutines = "INTEGRATION_BIXBY_ROUTINES"),
          (m.IntegrationBmw = "INTEGRATION_BMW"),
          (m.IntegrationBmwProjected = "INTEGRATION_BMW_PROJECTED"),
          (m.IntegrationBoseApp = "INTEGRATION_BOSE_APP"),
          (m.IntegrationCarplay = "INTEGRATION_CARPLAY"),
          (m.IntegrationCarHeadUnitProjected =
            "INTEGRATION_CAR_HEAD_UNIT_PROJECTED"),
          (m.IntegrationCarMode = "INTEGRATION_CAR_MODE"),
          (m.IntegrationCarView = "INTEGRATION_CAR_VIEW"),
          (m.IntegrationComcast = "INTEGRATION_COMCAST"),
          (m.IntegrationDesktop = "INTEGRATION_DESKTOP"),
          (m.IntegrationFacebookPortal = "INTEGRATION_FACEBOOK_PORTAL"),
          (m.IntegrationFacebookVenice = "INTEGRATION_FACEBOOK_VENICE"),
          (m.IntegrationGeneralMotors = "INTEGRATION_GENERAL_MOTORS"),
          (m.IntegrationGoogleClock = "INTEGRATION_GOOGLE_CLOCK"),
          (m.IntegrationGoogleDrivingMode = "INTEGRATION_GOOGLE_DRIVING_MODE"),
          (m.IntegrationGoogleMaps = "INTEGRATION_GOOGLE_MAPS"),
          (m.IntegrationGoogleSmartDisplay =
            "INTEGRATION_GOOGLE_SMART_DISPLAY"),
          (m.IntegrationGoogleSmartSpace = "INTEGRATION_GOOGLE_SMART_SPACE"),
          (m.IntegrationHeadphones = "INTEGRATION_HEADPHONES"),
          (m.IntegrationIosWidget = "INTEGRATION_IOS_WIDGET"),
          (m.IntegrationIpad = "INTEGRATION_IPAD"),
          (m.IntegrationIphone = "INTEGRATION_IPHONE"),
          (m.IntegrationJlr = "INTEGRATION_JLR"),
          (m.IntegrationMercedes = "INTEGRATION_MERCEDES"),
          (m.IntegrationMicrosoftGameBar = "INTEGRATION_MICROSOFT_GAME_BAR"),
          (m.IntegrationMobileWebPlayer = "INTEGRATION_MOBILE_WEB_PLAYER"),
          (m.IntegrationOneplusClock = "INTEGRATION_ONEPLUS_CLOCK"),
          (m.IntegrationOneplusShelf = "INTEGRATION_ONEPLUS_SHELF"),
          (m.IntegrationOplusShelf = "INTEGRATION_OPLUS_SHELF"),
          (m.IntegrationPartnerMobileExperience =
            "INTEGRATION_PARTNER_MOBILE_EXPERIENCE"),
          (m.IntegrationPartnerMobileExperienceOplus =
            "INTEGRATION_PARTNER_MOBILE_EXPERIENCE_OPLUS"),
          (m.IntegrationPartnerMobileExperienceStrava =
            "INTEGRATION_PARTNER_MOBILE_EXPERIENCE_STRAVA"),
          (m.IntegrationPlaystation = "INTEGRATION_PLAYSTATION"),
          (m.IntegrationPlaystationApphub = "INTEGRATION_PLAYSTATION_APPHUB"),
          (m.IntegrationPlaystationMfc = "INTEGRATION_PLAYSTATION_MFC"),
          (m.IntegrationPlaystationPs4 = "INTEGRATION_PLAYSTATION_PS4"),
          (m.IntegrationPlaystationPs5 = "INTEGRATION_PLAYSTATION_PS5"),
          (m.IntegrationPorsche = "INTEGRATION_PORSCHE"),
          (m.IntegrationRecommendationsWidget =
            "INTEGRATION_RECOMMENDATIONS_WIDGET"),
          (m.IntegrationRoku = "INTEGRATION_ROKU"),
          (m.IntegrationSamsungClock = "INTEGRATION_SAMSUNG_CLOCK"),
          (m.IntegrationSamsungFamilyHub = "INTEGRATION_SAMSUNG_FAMILY_HUB"),
          (m.IntegrationSamsungFinder = "INTEGRATION_SAMSUNG_FINDER"),
          (m.IntegrationSamsungKeyboard = "INTEGRATION_SAMSUNG_KEYBOARD"),
          (m.IntegrationSamsungTv = "INTEGRATION_SAMSUNG_TV"),
          (m.IntegrationSamsungWatch = "INTEGRATION_SAMSUNG_WATCH"),
          (m.IntegrationSiriSuggestions = "INTEGRATION_SIRI_SUGGESTIONS"),
          (m.IntegrationSky = "INTEGRATION_SKY"),
          (m.IntegrationSonosApp = "INTEGRATION_SONOS_APP"),
          (m.IntegrationSpeaker = "INTEGRATION_SPEAKER"),
          (m.IntegrationTesla = "INTEGRATION_TESLA"),
          (m.IntegrationTvApp = "INTEGRATION_TV_APP"),
          (m.IntegrationUnspecified = "INTEGRATION_UNSPECIFIED"),
          (m.IntegrationVolkswagen = "INTEGRATION_VOLKSWAGEN"),
          (m.IntegrationVolvo = "INTEGRATION_VOLVO"),
          (m.IntegrationWaze = "INTEGRATION_WAZE"),
          (m.IntegrationWearOs = "INTEGRATION_WEAR_OS"),
          (m.IntegrationWebosTv = "INTEGRATION_WEBOS_TV"),
          (m.IntegrationWebPlayer = "INTEGRATION_WEB_PLAYER"),
          (m.IntegrationXbox = "INTEGRATION_XBOX"),
          (m.IntegrationXboxQuickGuide = "INTEGRATION_XBOX_QUICK_GUIDE"),
          (m.IntegrationXiaomiAppVault = "INTEGRATION_XIAOMI_APP_VAULT"),
          ((N = eL || (eL = {})).ExperienceDriving = "EXPERIENCE_DRIVING"),
          (N.ExperienceGaming = "EXPERIENCE_GAMING"),
          (N.ExperienceUnspecified = "EXPERIENCE_UNSPECIFIED"),
          ((T = ex || (ex = {})).Compact = "COMPACT"),
          (T.Default = "DEFAULT"),
          ((E = eD || (eD = {})).MainBrowse = "MAIN_BROWSE"),
          (E.PodcastBrowse = "PODCAST_BROWSE"),
          ((I = eM || (eM = {})).Explicit = "EXPLICIT"),
          (I.None = "NONE"),
          ((h = eU || (eU = {})).Gif = "GIF"),
          (h.Image = "IMAGE"),
          (h.Unknown = "UNKNOWN"),
          (h.Video = "VIDEO"),
          (h.VideoLooping = "VIDEO_LOOPING"),
          (h.VideoLoopingRandom = "VIDEO_LOOPING_RANDOM"),
          ((y = eG || (eG = {})).Ascending = "ASCENDING"),
          (y.Descending = "DESCENDING"),
          (y.Unspecified = "UNSPECIFIED"),
          ((f = eB || (eB = {})).Albums = "ALBUMS"),
          (f.Artists = "ARTISTS"),
          (f.Audiobooks = "AUDIOBOOKS"),
          (f.Episodes = "EPISODES"),
          (f.Genres = "GENRES"),
          (f.Playlists = "PLAYLISTS"),
          (f.Podcasts = "PODCASTS"),
          (f.TopResults = "TOP_RESULTS"),
          (f.Tracks = "TRACKS"),
          (f.Users = "USERS"),
          ((A = ej || (ej = {})).DarkVibrant = "DARK_VIBRANT"),
          (A.Desaturated = "DESATURATED"),
          (A.LightVibrant = "LIGHT_VIBRANT"),
          (A.Prominent = "PROMINENT"),
          (A.Unrecognized = "UNRECOGNIZED"),
          (A.Vibrant = "VIBRANT"),
          (A.VibrantNonAlarming = "VIBRANT_NON_ALARMING"),
          ((k = eF || (eF = {})).EventPage = "EVENT_PAGE"),
          (k.TicketPage = "TICKET_PAGE"),
          (k.Unknown = "UNKNOWN"),
          ((g = eW || (eW = {})).Explicit = "EXPLICIT"),
          (g.NineteenPlus = "NINETEEN_PLUS"),
          (g.None = "NONE"),
          (g.Unknown = "UNKNOWN"),
          ((O = eV || (eV = {})).ContentTypeAudiobook =
            "CONTENT_TYPE_AUDIOBOOK"),
          (O.ContentTypeCreatorChannel = "CONTENT_TYPE_CREATOR_CHANNEL"),
          (O.ContentTypePodcast = "CONTENT_TYPE_PODCAST"),
          (O.ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"),
          ((v = eH || (eH = {})).C = "C"),
          (v.P = "P"),
          ((eY || (eY = {})).YourEpisodesV2 = "YOUR_EPISODES_V2"),
          ((S = eK || (eK = {})).Curate = "CURATE"),
          (S.Uncurate = "UNCURATE"),
          ((b = eq || (eq = {})).Day = "DAY"),
          (b.Hour = "HOUR"),
          (b.Minute = "MINUTE"),
          (b.Month = "MONTH"),
          (b.Year = "YEAR"),
          ((eX || (eX = {})).YourEpisodesV2 = "YOUR_EPISODES_V2"),
          ((R = eJ || (eJ = {})).EpisodeContentAudiobookChapter =
            "EPISODE_CONTENT_AUDIOBOOK_CHAPTER"),
          (R.EpisodeContentCreatorChannelEpisode =
            "EPISODE_CONTENT_CREATOR_CHANNEL_EPISODE"),
          (R.EpisodeContentUnknown = "EPISODE_CONTENT_UNKNOWN"),
          ((C = e$ || (e$ = {})).Audio = "AUDIO"),
          (C.Unknown = "UNKNOWN"),
          (C.Video = "VIDEO"),
          ((P = ez || (ez = {})).Completed = "COMPLETED"),
          (P.InProgress = "IN_PROGRESS"),
          (P.NotStarted = "NOT_STARTED"),
          ((w = eQ || (eQ = {})).Episode = "EPISODE"),
          (w.PodcastEpisode = "PODCAST_EPISODE"),
          (w.Unknown = "UNKNOWN"),
          ((L = eZ || (eZ = {})).Announcement = "ANNOUNCEMENT"),
          (L.Campaign = "CAMPAIGN"),
          ((x = e0 || (e0 = {})).IntegrationAmazonAlexa =
            "INTEGRATION_AMAZON_ALEXA"),
          (x.IntegrationAndroidAuto = "INTEGRATION_ANDROID_AUTO"),
          (x.IntegrationAndroidAutomotive = "INTEGRATION_ANDROID_AUTOMOTIVE"),
          (x.IntegrationAndroidClock = "INTEGRATION_ANDROID_CLOCK"),
          (x.IntegrationAndroidPhone = "INTEGRATION_ANDROID_PHONE"),
          (x.IntegrationAndroidSystemUi = "INTEGRATION_ANDROID_SYSTEM_UI"),
          (x.IntegrationAndroidTablet = "INTEGRATION_ANDROID_TABLET"),
          (x.IntegrationAndroidTv = "INTEGRATION_ANDROID_TV"),
          (x.IntegrationAppleTv = "INTEGRATION_APPLE_TV"),
          (x.IntegrationAppleWatch = "INTEGRATION_APPLE_WATCH"),
          (x.IntegrationAsusClock = "INTEGRATION_ASUS_CLOCK"),
          (x.IntegrationBixbyRoutines = "INTEGRATION_BIXBY_ROUTINES"),
          (x.IntegrationBmw = "INTEGRATION_BMW"),
          (x.IntegrationBmwProjected = "INTEGRATION_BMW_PROJECTED"),
          (x.IntegrationBoseApp = "INTEGRATION_BOSE_APP"),
          (x.IntegrationCarplay = "INTEGRATION_CARPLAY"),
          (x.IntegrationCarHeadUnitProjected =
            "INTEGRATION_CAR_HEAD_UNIT_PROJECTED"),
          (x.IntegrationCarMode = "INTEGRATION_CAR_MODE"),
          (x.IntegrationCarView = "INTEGRATION_CAR_VIEW"),
          (x.IntegrationComcast = "INTEGRATION_COMCAST"),
          (x.IntegrationDesktop = "INTEGRATION_DESKTOP"),
          (x.IntegrationFacebookPortal = "INTEGRATION_FACEBOOK_PORTAL"),
          (x.IntegrationFacebookVenice = "INTEGRATION_FACEBOOK_VENICE"),
          (x.IntegrationGeneralMotors = "INTEGRATION_GENERAL_MOTORS"),
          (x.IntegrationGoogleClock = "INTEGRATION_GOOGLE_CLOCK"),
          (x.IntegrationGoogleDrivingMode = "INTEGRATION_GOOGLE_DRIVING_MODE"),
          (x.IntegrationGoogleEngage = "INTEGRATION_GOOGLE_ENGAGE"),
          (x.IntegrationGoogleMaps = "INTEGRATION_GOOGLE_MAPS"),
          (x.IntegrationGoogleSmartDisplay =
            "INTEGRATION_GOOGLE_SMART_DISPLAY"),
          (x.IntegrationGoogleSmartSpace = "INTEGRATION_GOOGLE_SMART_SPACE"),
          (x.IntegrationHeadphones = "INTEGRATION_HEADPHONES"),
          (x.IntegrationInstagramRecommendations =
            "INTEGRATION_INSTAGRAM_RECOMMENDATIONS"),
          (x.IntegrationIosWidget = "INTEGRATION_IOS_WIDGET"),
          (x.IntegrationIpad = "INTEGRATION_IPAD"),
          (x.IntegrationIphone = "INTEGRATION_IPHONE"),
          (x.IntegrationJlr = "INTEGRATION_JLR"),
          (x.IntegrationMercedes = "INTEGRATION_MERCEDES"),
          (x.IntegrationMicrosoftGameBar = "INTEGRATION_MICROSOFT_GAME_BAR"),
          (x.IntegrationMobileWebPlayer = "INTEGRATION_MOBILE_WEB_PLAYER"),
          (x.IntegrationMotorolaPartnerMusic =
            "INTEGRATION_MOTOROLA_PARTNER_MUSIC"),
          (x.IntegrationNpvRecommendationsWidget =
            "INTEGRATION_NPV_RECOMMENDATIONS_WIDGET"),
          (x.IntegrationOneplusClock = "INTEGRATION_ONEPLUS_CLOCK"),
          (x.IntegrationOneplusShelf = "INTEGRATION_ONEPLUS_SHELF"),
          (x.IntegrationOplusShelf = "INTEGRATION_OPLUS_SHELF"),
          (x.IntegrationPartnerMobileExperience =
            "INTEGRATION_PARTNER_MOBILE_EXPERIENCE"),
          (x.IntegrationPlaystation = "INTEGRATION_PLAYSTATION"),
          (x.IntegrationPlaystationApphub = "INTEGRATION_PLAYSTATION_APPHUB"),
          (x.IntegrationPlaystationMfc = "INTEGRATION_PLAYSTATION_MFC"),
          (x.IntegrationPlaystationMusichome =
            "INTEGRATION_PLAYSTATION_MUSICHOME"),
          (x.IntegrationPlaystationPs4 = "INTEGRATION_PLAYSTATION_PS4"),
          (x.IntegrationPlaystationPs5 = "INTEGRATION_PLAYSTATION_PS5"),
          (x.IntegrationPorsche = "INTEGRATION_PORSCHE"),
          (x.IntegrationRecommendationsWidget =
            "INTEGRATION_RECOMMENDATIONS_WIDGET"),
          (x.IntegrationRoku = "INTEGRATION_ROKU"),
          (x.IntegrationSamsungClock = "INTEGRATION_SAMSUNG_CLOCK"),
          (x.IntegrationSamsungFamilyHub = "INTEGRATION_SAMSUNG_FAMILY_HUB"),
          (x.IntegrationSamsungFinder = "INTEGRATION_SAMSUNG_FINDER"),
          (x.IntegrationSamsungKeyboard = "INTEGRATION_SAMSUNG_KEYBOARD"),
          (x.IntegrationSamsungTv = "INTEGRATION_SAMSUNG_TV"),
          (x.IntegrationSamsungWatch = "INTEGRATION_SAMSUNG_WATCH"),
          (x.IntegrationSiriSuggestions = "INTEGRATION_SIRI_SUGGESTIONS"),
          (x.IntegrationSky = "INTEGRATION_SKY"),
          (x.IntegrationSonosApp = "INTEGRATION_SONOS_APP"),
          (x.IntegrationSpeaker = "INTEGRATION_SPEAKER"),
          (x.IntegrationTesla = "INTEGRATION_TESLA"),
          (x.IntegrationTvApp = "INTEGRATION_TV_APP"),
          (x.IntegrationUnspecified = "INTEGRATION_UNSPECIFIED"),
          (x.IntegrationVolkswagen = "INTEGRATION_VOLKSWAGEN"),
          (x.IntegrationVolvo = "INTEGRATION_VOLVO"),
          (x.IntegrationWaze = "INTEGRATION_WAZE"),
          (x.IntegrationWearOs = "INTEGRATION_WEAR_OS"),
          (x.IntegrationWebosTv = "INTEGRATION_WEBOS_TV"),
          (x.IntegrationWebPlayer = "INTEGRATION_WEB_PLAYER"),
          (x.IntegrationXbox = "INTEGRATION_XBOX"),
          (x.IntegrationXboxQuickGuide = "INTEGRATION_XBOX_QUICK_GUIDE"),
          (x.IntegrationXiaomiAppVault = "INTEGRATION_XIAOMI_APP_VAULT"),
          ((D = e9 || (e9 = {})).ExperienceDriving = "EXPERIENCE_DRIVING"),
          (D.ExperienceGaming = "EXPERIENCE_GAMING"),
          (D.ExperienceUnspecified = "EXPERIENCE_UNSPECIFIED"),
          ((M = e1 || (e1 = {})).DoNotTranslate = "DO_NOT_TRANSLATE"),
          (M.Translate = "TRANSLATE"),
          ((U = e3 || (e3 = {})).Jpeg = "JPEG"),
          (U.Png = "PNG"),
          (U.Webp = "WEBP"),
          ((G = e2 || (e2 = {})).ImageId = "IMAGE_ID"),
          (G.ImageUrl = "IMAGE_URL"),
          ((B = e5 || (e5 = {})).Album = "ALBUM"),
          (B.Artist = "ARTIST"),
          (B.Collection = "COLLECTION"),
          (B.CollectionNewEpisodes = "COLLECTION_NEW_EPISODES"),
          (B.CollectionYourEpisodes = "COLLECTION_YOUR_EPISODES"),
          (B.Concert = "CONCERT"),
          (B.Episode = "EPISODE"),
          (B.Folder = "FOLDER"),
          (B.LocalFiles = "LOCAL_FILES"),
          (B.LocalTrack = "LOCAL_TRACK"),
          (B.Playlist = "PLAYLIST"),
          (B.Show = "SHOW"),
          (B.Station = "STATION"),
          (B.Track = "TRACK"),
          ((j = e4 || (e4 = {})).Events = "EVENTS"),
          (j.LikedSongs = "LIKED_SONGS"),
          (j.Prereleases = "PRERELEASES"),
          (j.YourEpisodes = "YOUR_EPISODES"),
          (j.YourEpisodesV2 = "YOUR_EPISODES_V2"),
          ((F = e7 || (e7 = {})).Facebook = "FACEBOOK"),
          (F.Instagram = "INSTAGRAM"),
          (F.Other = "OTHER"),
          (F.Soundbetter = "SOUNDBETTER"),
          (F.Twitter = "TWITTER"),
          (F.Wikipedia = "WIKIPEDIA"),
          ((W = e6 || (e6 = {})).Line = "LINE"),
          (W.Text = "TEXT"),
          ((V = e8 || (e8 = {})).LineSynced = "LINE_SYNCED"),
          (V.Unknown = "UNKNOWN"),
          (V.Unsynced = "UNSYNCED"),
          ((H = te || (te = {})).Description = "DESCRIPTION"),
          (H.Guest = "GUEST"),
          (H.Host = "HOST"),
          (H.Lyrics = "LYRICS"),
          (H.Name = "NAME"),
          (H.UnknownField = "UNKNOWN_FIELD"),
          ((Y = tt || (tt = {})).Airplay = "AIRPLAY"),
          (Y.Automotive = "AUTOMOTIVE"),
          (Y.Bluetooth = "BLUETOOTH"),
          (Y.BuiltInSpeaker = "BUILT_IN_SPEAKER"),
          (Y.LineOut = "LINE_OUT"),
          (Y.UnknownOutputDeviceType = "UNKNOWN_OUTPUT_DEVICE_TYPE"),
          ((K = tn || (tn = {})).Disabled = "DISABLED"),
          (K.Enabled = "ENABLED"),
          (K.Unavailable = "UNAVAILABLE"),
          ((q = ti || (ti = {})).FailedItemInFolder = "FAILED_ITEM_IN_FOLDER"),
          (q.FailedItemLimitReached = "FAILED_ITEM_LIMIT_REACHED"),
          (q.FailedItemNotSupported = "FAILED_ITEM_NOT_SUPPORTED"),
          (q.FailedNotInYourLibrary = "FAILED_NOT_IN_YOUR_LIBRARY"),
          (q.Successful = "SUCCESSFUL"),
          ((X = ta || (ta = {})).AgeRestricted = "AGE_RESTRICTED"),
          (X.CatalogueRestricted = "CATALOGUE_RESTRICTED"),
          (X.CountryRestricted = "COUNTRY_RESTRICTED"),
          (X.Explicit = "EXPLICIT"),
          (X.PaymentRequired = "PAYMENT_REQUIRED"),
          (X.Playable = "PLAYABLE"),
          (X.Unavailable = "UNAVAILABLE"),
          (X.Unknown = "UNKNOWN"),
          ((J = tr || (tr = {})).Control = "CONTROL"),
          (J.ListenAndControl = "LISTEN_AND_CONTROL"),
          (($ = ts || (ts = {})).AfterUid = "AFTER_UID"),
          ($.BeforeUid = "BEFORE_UID"),
          ($.BottomOfPlaylist = "BOTTOM_OF_PLAYLIST"),
          ($.TopOfPlaylist = "TOP_OF_PLAYLIST"),
          ((z = to || (to = {})).Add = "ADD"),
          (z.Remove = "REMOVE"),
          ((Q = tl || (tl = {})).BottomOfPlaylist = "BOTTOM_OF_PLAYLIST"),
          (Q.TopOfPlaylist = "TOP_OF_PLAYLIST"),
          ((Z = tu || (tu = {})).Blocked = "BLOCKED"),
          (Z.Contributor = "CONTRIBUTOR"),
          (Z.Unknown = "UNKNOWN"),
          (Z.Viewer = "VIEWER"),
          ((ee = tc || (tc = {})).NewestFirst = "NEWEST_FIRST"),
          (ee.OldestFirst = "OLDEST_FIRST"),
          (ee.Unspecified = "UNSPECIFIED"),
          ((et = td || (td = {})).External = "EXTERNAL"),
          (et.Internal = "INTERNAL"),
          (et.InternalAndExternal = "INTERNAL_AND_EXTERNAL"),
          (et.Unknown = "UNKNOWN"),
          ((en = tp || (tp = {})).Audio = "AUDIO"),
          (en.Mixed = "MIXED"),
          (en.Unknown = "UNKNOWN"),
          (en.Video = "VIDEO"),
          ((ei = t_ || (t_ = {})).Podcast = "PODCAST"),
          (ei.Show = "SHOW"),
          (ei.Unknown = "UNKNOWN"),
          ((ea = tm || (tm = {})).OneDimension = "ONE_DIMENSION"),
          (ea.TwoDimension = "TWO_DIMENSION"),
          (ea.ZeroDimension = "ZERO_DIMENSION"),
          ((er = tN || (tN = {})).Free = "FREE"),
          (er.Premium = "PREMIUM"),
          ((es = tT || (tT = {})).AddToLibrary = "ADD_TO_LIBRARY"),
          (es.Navigate = "NAVIGATE"),
          (es.NotInterested = "NOT_INTERESTED"),
          (es.Play = "PLAY"),
          (es.Share = "SHARE"),
          ((eo = tE || (tE = {})).Album = "ALBUM"),
          (eo.Artist = "ARTIST"),
          (eo.Audiobook = "AUDIOBOOK"),
          (eo.Default = "DEFAULT"),
          (eo.Playlist = "PLAYLIST"),
          (eo.Podcast = "PODCAST"),
          (eo.Track = "TRACK"),
          (eo.Video = "VIDEO"),
          ((el = tI || (tI = {})).TextAnnouncement = "TEXT_ANNOUNCEMENT"),
          (el.TextBase = "TEXT_BASE"),
          (el.TextBrightAccent = "TEXT_BRIGHT_ACCENT"),
          (el.TextNegative = "TEXT_NEGATIVE"),
          (el.TextPositive = "TEXT_POSITIVE"),
          (el.TextSubdued = "TEXT_SUBDUED"),
          (el.TextWarning = "TEXT_WARNING"),
          ((eu = th || (th = {})).AfterUri = "AFTER_URI"),
          (eu.BeforeUri = "BEFORE_URI"),
          (eu.BottomOfRootlist = "BOTTOM_OF_ROOTLIST"),
          (eu.TopOfRootlist = "TOP_OF_ROOTLIST"),
          ((ec = ty || (ty = {})).ContentOnly = "CONTENT_ONLY"),
          (ec.OrganicTraffic = "ORGANIC_TRAFFIC"),
          (ec.OrganicTrafficContentPool = "ORGANIC_TRAFFIC_CONTENT_POOL"),
          ((ed = tf || (tf = {})).ShowContentAudiobook =
            "SHOW_CONTENT_AUDIOBOOK"),
          (ed.ShowContentCreatorChannel = "SHOW_CONTENT_CREATOR_CHANNEL"),
          (ed.ShowContentUnknown = "SHOW_CONTENT_UNKNOWN"),
          ((ep = tA || (tA = {})).ShowTypeAdaptation = "SHOW_TYPE_ADAPTATION"),
          (ep.ShowTypeExclusive = "SHOW_TYPE_EXCLUSIVE"),
          (ep.ShowTypeOriginal = "SHOW_TYPE_ORIGINAL"),
          ((e_ = tk || (tk = {})).V1 = "V1"),
          (e_.V2 = "V2"),
          ((em = tg || (tg = {})).Actor = "ACTOR"),
          (em.Composer = "COMPOSER"),
          (em.Conductor = "CONDUCTOR"),
          (em.Featured = "FEATURED"),
          (em.Main = "MAIN"),
          (em.Orchestra = "ORCHESTRA"),
          (em.Remixer = "REMIXER"),
          (em.Unknown = "UNKNOWN"),
          ((eN = tO || (tO = {})).DoNotTranslate = "DO_NOT_TRANSLATE"),
          (eN.Translate = "TRANSLATE"),
          ((eT = tv || (tv = {})).Abp = "ABP"),
          (eT.AnchorPaywall = "ANCHOR_PAYWALL"),
          (eT.AudiobookDirectSales = "AUDIOBOOK_DIRECT_SALES"),
          (eT.AudiobookPromotion = "AUDIOBOOK_PROMOTION"),
          (eT.OapLinking = "OAP_LINKING"),
          (eT.OapOtp = "OAP_OTP"),
          (eT.Unknown = "UNKNOWN"),
          ((eE = tS || (tS = {})).Album = "ALBUM"),
          (eE.Episode = "EPISODE"),
          (eE.Unknown = "UNKNOWN"),
          (eE.WhatsNewFeedNotification = "WHATS_NEW_FEED_NOTIFICATION"),
          ((eI = tb || (tb = {})).Hidden = "HIDDEN"),
          (eI.New = "NEW"),
          (eI.Seen = "SEEN"),
          (eI.Unknown = "UNKNOWN");
        let tK = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "mutation",
                name: { kind: "Name", value: "addEntitiesToLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "addLibraryItems" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "input" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uris" },
                                value: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "uris" },
                                },
                              },
                            ],
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "library" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "__typename" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tq = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "areAlbumsInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "albums" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Album" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tX = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "areArtistsInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "artists" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Artist" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tJ = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "areTracksInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "tracks" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Track" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          t$ = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "areShowsInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "podcasts" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Audiobook" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Podcast" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tz = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "areEpisodesInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "episodes" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Episode" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "saved" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tQ = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "query",
                name: { kind: "Name", value: "arePlaylistsInLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "ID" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "playlistsV2" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "uris" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "uris" },
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "__typename" },
                          },
                          {
                            kind: "InlineFragment",
                            typeCondition: {
                              kind: "NamedType",
                              name: { kind: "Name", value: "Playlist" },
                            },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "following" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
          tZ = {
            kind: "Document",
            definitions: [
              {
                kind: "OperationDefinition",
                operation: "mutation",
                name: { kind: "Name", value: "removeEntitiesFromLibrary" },
                variableDefinitions: [
                  {
                    kind: "VariableDefinition",
                    variable: {
                      kind: "Variable",
                      name: { kind: "Name", value: "uris" },
                    },
                    type: {
                      kind: "NonNullType",
                      type: {
                        kind: "ListType",
                        type: {
                          kind: "NonNullType",
                          type: {
                            kind: "NamedType",
                            name: { kind: "Name", value: "String" },
                          },
                        },
                      },
                    },
                  },
                ],
                selectionSet: {
                  kind: "SelectionSet",
                  selections: [
                    {
                      kind: "Field",
                      name: { kind: "Name", value: "removeLibraryItems" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "input" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uris" },
                                value: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: "uris" },
                                },
                              },
                            ],
                          },
                        },
                      ],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [
                          {
                            kind: "Field",
                            name: { kind: "Name", value: "library" },
                            selectionSet: {
                              kind: "SelectionSet",
                              selections: [
                                {
                                  kind: "Field",
                                  name: { kind: "Name", value: "__typename" },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          };
        var t0 = n(44096);
        function t9(e) {
          return (
            e === tW.JM.ALBUM ||
            e === tW.JM.ARTIST ||
            e === tW.JM.TRACK ||
            e === tW.JM.SHOW ||
            e === tW.JM.EPISODE ||
            e === tW.JM.PLAYLIST_V2
          );
        }
        function t1(e) {
          return e.map((e) => {
            if (
              "GenericError" === e.__typename ||
              "NotFound" === e.__typename ||
              "RestrictedContent" === e.__typename ||
              "Chapter" === e.__typename
            )
              throw Error(`The typename: ${e.__typename} is not supported`);
            return "Playlist" === e.__typename ? !!e?.following : !!e?.saved;
          });
        }
        class t3 {
          constructor(e) {
            (this.requestGQL = e),
              (this._events = new t0.S()),
              (this._cache = new Map()),
              (this._pendingRequests = new Map());
          }
          getEvents() {
            return this._events;
          }
          async add() {
            let e;
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            if (n.length) {
              n.forEach((t) => {
                if (!(e = (0, tW.EC)(t)) || !t9(e.type))
                  throw Error(`Unknown URI type: ${e?.type}`);
              });
              try {
                let t =
                  e?.type === tW.JM.PLAYLIST_V2
                    ? await this.requestGQL(tH, {
                        newPosition: {
                          fromUri: null,
                          moveType: th.TopOfRootlist,
                        },
                        uris: n,
                      })
                    : await this.requestGQL(tK, { uris: n });
                if (!t || t.errors) throw Error("GraphQL query failed");
                if (!t?.errors)
                  for (let e of n)
                    this._cache.set(e, !0),
                      this._events.emit(t0.E.UPDATE_ITEM, {
                        uri: e,
                        isInLibrary: !0,
                      });
              } catch (e) {
                throw Error(
                  `Error adding ${JSON.stringify(n)} to library: ${e}`
                );
              }
            }
          }
          async remove() {
            let e;
            for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            if (n.length) {
              n.forEach((t) => {
                if (!(e = (0, tW.EC)(t)) || !t9(e.type))
                  throw Error(`Unknown URI type: ${e?.type}`);
              });
              try {
                let t =
                  e?.type === tW.JM.PLAYLIST_V2
                    ? await this.requestGQL(tY, { uris: n })
                    : await this.requestGQL(tZ, { uris: n });
                if (!t || t.errors) throw Error("GraphQL query failed");
                for (let e of n)
                  this._cache.set(e, !1),
                    this._events.emit(t0.E.UPDATE_ITEM, {
                      uri: e,
                      isInLibrary: !1,
                    });
              } catch (e) {
                throw Error(
                  `Error removing ${JSON.stringify(n)} from library: ${e}`
                );
              }
            }
          }
          async containsEntitiesOfType(e, t) {
            if (0 === t.length) return [];
            let n = async (e) => {
              let n = await this.requestGQL(e, { uris: t });
              if (!n || n.errors) throw Error("GraphQL query failed");
              return n;
            };
            switch (e) {
              case tW.JM.ALBUM:
                return t1((await n(tq)).data.albums);
              case tW.JM.ARTIST:
                return t1((await n(tX)).data.artists);
              case tW.JM.TRACK:
                return t1((await n(tJ)).data.tracks);
              case tW.JM.SHOW:
                return t1((await n(t$)).data.podcasts);
              case tW.JM.EPISODE:
                return t1((await n(tz)).data.episodes);
              case tW.JM.PLAYLIST_V2:
                return t1((await n(tQ)).data.playlistsV2);
              default:
                throw Error(`Unknown URI type: ${e}`);
            }
          }
          containsSync(e) {
            return this._cache.get(e);
          }
          async contains() {
            for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++)
              n[i] = arguments[i];
            let a = [];
            {
              let e = [];
              if (
                (n.forEach((t) => {
                  let n = this._cache.get(t);
                  void 0 !== n ? e.push(n) : a.push(t);
                }),
                e.length === n.length)
              )
                return e;
            }
            let r =
              ((e = (e) => {
                let t = (0, tW.EC)(e);
                if (null === t || !t9(t.type))
                  throw Error(`Unknown URI type: ${t?.type}`);
                return t.type;
              }),
              a.reduce((t, n) => {
                let i = e(n);
                return (t[i] = t[i] || []).push(n), t;
              }, {}));
            return (
              await Promise.all(
                Object.entries(r).map(async (e) => {
                  let t,
                    [n, i] = e,
                    a = i.join(",");
                  this._pendingRequests.has(a)
                    ? (t = this._pendingRequests.get(a))
                    : ((t = this.containsEntitiesOfType(n, i)),
                      this._pendingRequests.set(a, t));
                  let r = await t;
                  i.forEach((e, t) => {
                    this._cache.set(e, r[t]),
                      this._events.emit(t0.E.UPDATE_ITEM, {
                        uri: e,
                        isInLibrary: r[t],
                      });
                  }),
                    this._pendingRequests.delete(a);
                })
              ),
              n.map((e) => this._cache.get(e))
            );
          }
        }
        var t2 = n(56361);
        let t5 = (e) => {
          let { instance: t, children: n } = e;
          return (0, tR.jsx)(t2.H.Provider, {
            value: { instance: t },
            children: n,
          });
        };
        var t4 = n(33254),
          t7 = n(47582),
          t6 = n(63770),
          t8 = n(83454);
        let ne = t8.env.DEBUG_EVENT_SENDER,
          nt = (e, t, n) => {
            let i = (0, t7.createEventSender)({
              transport: e,
              suppressPersist: !1,
              context: [
                (0, t6.createClientIdContext)(t),
                (0, t6.createApplicationContext)({
                  version: t8.env.__BUILD_VERSION__,
                }),
                (0, t6.createUserAgentContext)(),
                (0, t6.createCorrelationIdContext)(n),
              ],
            });
            return (
              ne &&
                ((i._send = i.send),
                (i.send = function (e) {
                  for (
                    var t = arguments.length,
                      n = Array(t > 1 ? t - 1 : 0),
                      a = 1;
                    a < t;
                    a++
                  )
                    n[a - 1] = arguments[a];
                  return (
                    console.log("EventSender.send"),
                    console.table(e),
                    i._send(e, ...n)
                  );
                }),
                i.addListeners({
                  [t7.EventSenderEvent.UPLOAD_SUCCEEDED]: (e) => {
                    console.log(
                      `EventSender: uploaded ${e.data.num_events} events`
                    );
                  },
                  [t7.EventSenderEvent.UPLOAD_FAILED]: (e) => {
                    console.error("EventSender: upload failed", e);
                  },
                })),
              i
            );
          };
        var nn = n(26112),
          ni = n(17033);
        async function na(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e3;
          try {
            return await e();
          } catch (i) {
            if (t)
              return (
                await new Promise((e) => setTimeout(e, n)), na(e, t - 1, n)
              );
            throw Error("Import failed after retry.", { cause: i });
          }
        }
        let nr = async (e, t, i) => {
          if (!(0, nn.k)(t) && (await i) === ni.d.FULL) {
            let { createHarmonyPlayer: t } = await na(() =>
              Promise.all([n.e(9786), n.e(5270), n.e(25), n.e(2446)]).then(
                n.bind(n, 5690)
              )
            );
            return t(e);
          }
          let { createOverturePlayer: a } = await na(() =>
            Promise.all([n.e(5270), n.e(2366), n.e(2768)]).then(
              n.bind(n, 44336)
            )
          );
          return a(e, t);
        };
        var ns = n(71934),
          no = n(22622);
        let nl = (e) => {
          var t, n;
          let a;
          if (i) return i;
          let r = (0, ns.qy)({
            providers: {
              endpoints: (0, ns.uG)(),
              token:
                ((t = e.tokenFromServer),
                (n = async () => {
                  let e;
                  if (t && !(Date.now() >= t.accessTokenExpirationTimestampMs))
                    e = t;
                  else {
                    if (
                      null ===
                      (e = (
                        await tF.b
                          .getInstance()
                          .build()
                          .withPath("/embed/api/token")
                          .withoutMarket()
                          .withoutAuthorization()
                          .withEndpointIdentifier("/embed/api/token")
                          .send()
                      ).body)
                    )
                      throw Error("Token is currently unavailable.");
                    tF.b.setSession(e);
                  }
                  let { accessToken: n, accessTokenExpirationTimestampMs: i } =
                    e;
                  return [n, Math.floor(((i || 0) - Date.now()) / 1e3)];
                }),
                (a = null),
                async () => {
                  let e;
                  if (a) return a;
                  a = n();
                  try {
                    e = await a;
                  } finally {
                    a = null;
                  }
                  return e;
                }),
            },
            disconnectBeforeUnload: !0,
            reconnectionRetries: 3,
            requestMode: "fetch",
          });
          return (
            e.useDealer && r.addPlugin(no.dv, { WebSocket: WebSocket }),
            r.on(ns.G0.CONNECTED, () => {
              r.isAuthenticated() || r.authenticate();
            }),
            r.on(ns.G0.DISCONNECTED, () => {
              r.connect();
            }),
            r.connect(),
            (i = r),
            r
          );
        };
        var nu = n(59188);
        let nc = (0, tL.createContext)(null),
          nd = (e) => {
            let { instance: t, children: n } = e;
            return (0, tR.jsx)(nc.Provider, { value: t, children: n });
          };
        var np = n(95829),
          n_ = n(68356),
          nm = n(53894),
          nN = n(98191),
          nT = n(968),
          nE = n(62126),
          nI = n(49792),
          nh = n(1504),
          ny = n(93670),
          nf = (e) => (t) => {
            let {
                data: { entity: n },
                settings: {
                  session: { isAnonymous: i = !1 },
                },
              } = t.getState(),
              a = n?.uri ?? "";
            function r(t) {
              return e.send((0, nN.l)(t));
            }
            let {
                osName: s,
                osVersion: o,
                browserName: l,
                browserVersion: u,
              } = (0, ny.H)(),
              c = (0, nh.b)();
            return (e) => (n) => {
              let { data: d, settings: p } = t.getState(),
                _ = (0, tW.EC)(d.embeded_entity_uri),
                m = d.entity?.isAudiobook ? nT.p.AUDIOBOOK : _?.type,
                N = {
                  device_type: p.isMobile || p.isTablet ? "mobile" : "desktop",
                  view_uri: a,
                  entity_uri: _?.toURI(),
                  entity_type: m,
                  embed_is_video: !!p.isVideoEmbed,
                  page_url: window.location.href,
                  referrer: c,
                  viewport_width: window.innerWidth,
                  viewport_height: window.innerHeight,
                  is_authenticated: !i,
                  browser_name: l,
                  browser_version: u,
                  os_name: s,
                  os_version: o,
                };
              switch (n.type) {
                case nI.N:
                  r({
                    ...N,
                    action_type: "pageview",
                    action_intent: null,
                    action_item_id: null,
                    item_uri: null,
                  });
                  break;
                case nE.C:
                  r({
                    ...N,
                    action_type: n.interactionData.action_type,
                    action_intent: n.interactionData.action_intent,
                    action_item_id: n.interactionData.action_item_id,
                    item_uri: n.interactionData.item_uri,
                  });
              }
              return e(n);
            };
          },
          nA = n(27272),
          nk = n(76892);
        let ng = {
          initialized: !1,
          showOverflowMenu: !1,
          playbackMode: ni.d.UNKNOWN,
          currentPreviewTrackIndex: 0,
        };
        var nO = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ng,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case nI.q:
                return { ...e, initialized: !0 };
              case nk.RA:
                return { ...e, showOverflowMenu: !0 };
              case nk.gm:
                return { ...e, showOverflowMenu: !1 };
              case ni.L:
                return { ...e, playbackMode: t.playbackMode };
              case tG.sV:
                return { ...e, currentPreviewTrackIndex: t.index };
              default:
                return e;
            }
          },
          nv = (e) =>
            (0, n_.UY)({
              data: () => e.data,
              settings: () => e.settings,
              machineState: nO,
            });
        let nS = () => n_.qC;
        var nb = n(54751);
        function nR(e) {
          if ("undefined" != typeof TextEncoder)
            return new TextEncoder().encode(e);
          let t = new Uint8Array(e.length);
          for (let n = 0; n < e.length; n += 1) t[n] = e.charCodeAt(n);
          return t;
        }
        var nC = n(42474),
          nP = n.n(nC);
        let nw = async function (e) {
          let t = nR(e);
          return nP().createHash("sha256").update(t).digest("hex");
        };
        class nL {
          static #e = (this.encode = nR);
          static #t = (this.hash = nw);
        }
        var nx = n(83456);
        function nD(e) {
          return "OperationDefinition" === e.kind;
        }
        let nM = "https://api-partner.spotify.com/pathfinder/v1";
        async function nU(e) {
          return {
            persistedQuery: { version: 1, sha256Hash: await nL.hash(e.body) },
          };
        }
        async function nG(e, t, n, i, a) {
          let { type: r, name: s } = t;
          return e
            .build()
            .withHost(nM)
            .withMethod("mutation" === r ? "POST" : "GET")
            .withoutMarket()
            .withPath("/query")
            .withJsonContentType()
            .withRetries({ retries: 2, retryDelay: 800, retryOn: [503] })
            .withQueryParameters({
              operationName: s,
              variables: JSON.stringify(n),
              extensions: JSON.stringify(i),
              ...a,
            })
            .withEndpointIdentifier(`/query/${s}`)
            .send();
        }
        async function nB(e, t, n, i, a) {
          let { name: r, body: s } = t;
          return e
            .build()
            .withHost(nM)
            .withMethod("POST")
            .withoutMarket()
            .withPath("/query")
            .withJsonContentType()
            .withBody({
              operationName: r,
              variables: n,
              query: s,
              extensions: i,
            })
            .withQueryParameters({ ...a })
            .withEndpointIdentifier(`/query/${r}`)
            .send();
        }
        async function nj(e, t, n) {
          let i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            a = await nU(t);
          try {
            let r = await nG(e, t, n, a, i);
            if (
              r.body?.errors?.some(
                (e) => "PersistedQueryNotFound" === e.message
              )
            )
              return nB(e, t, n, a, i);
            return r;
          } catch (r) {
            if (r instanceof nb.mk && 405 === r.status)
              return nB(e, t, n, a, i);
            throw r;
          }
        }
        var nF = n(35775);
        async function nW() {
          let { checkPlatform: e } = await Promise.all([
            n.e(9786),
            n.e(8581),
          ]).then(n.bind(n, 68581));
          return e();
        }
        let nV = () => nW().catch(() => !1),
          nH = (e) => {
            let {
              settings: { session: t },
            } = e;
            return !!(!t.accessToken || t.isAnonymous);
          },
          nY = (e) => {
            let { settings: t } = e;
            return !!t.isMobile;
          },
          nK = (e) => {
            let { settings: t } = e;
            return !!t.isSafari;
          },
          nq = [
            "spotify:show:4rOoJ6Egrf8K2IrywzwOMk",
            "spotify:show:3jtZt3VSBbBJPwrCGIeyc0",
          ],
          nX = (e, t) => {
            let n = (0, nn.k)(t);
            return (n &&
              (e ||
                (t.data.defaultAudioFileObject.passthrough !== tG.Zq.NONE &&
                  t.data.defaultAudioFileObject.passthroughUrl))) ||
              (!n && e && !nH(t) && !nY(t) && !nK(t)) ||
              (!e &&
                nq.includes(t.data.entity?.relatedEntityUri) &&
                t.data.entity?.hasVideo)
              ? ni.d.FULL
              : ni.d.PREVIEW;
          },
          nJ = (e) => {
            let { children: t } = e,
              { state: n, config: i } = e,
              [a, r] = (0, tL.useState)(
                (0, nA.xC)({ reducer: nv(n), preloadedState: n })
              ),
              [s, o] = (0, tL.useState)(null),
              [l, u] = (0, tL.useState)(null),
              [c, d] = (0, tL.useState)(null),
              [p] = (0, tL.useState)(() => (0, tw.o)(e.config.strings, tj()));
            return (
              (0, t4.u)(i),
              (0, tL.useEffect)(() => {
                var e;
                tF.b.setSession(n.settings.session);
                let t = nl({
                    useDealer: !n.settings.session.isAnonymous,
                    tokenFromServer: n.settings.session,
                  }),
                  a = nV().then((e) => nX(e, n));
                nr(t, n, a).then((e) => {
                  let { playerAPI: t } = e;
                  u(t);
                }),
                  d(
                    new t3(
                      ((e = tF.b.getInstance()),
                      async function (t, n) {
                        let i =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          a = (function (e) {
                            let t = e.definitions.filter(nD);
                            if (0 === t.length)
                              throw Error(
                                "No GraphQL operation definition found in document!"
                              );
                            if (t.length > 1)
                              throw Error(
                                "Too many GraphQL operation definitions found in document! Expected exactly one."
                              );
                            let [n] = t;
                            if (void 0 === n.name)
                              throw Error(
                                "Nameless GraphQL operations are not supported!"
                              );
                            return {
                              type: n.operation,
                              name: n.name.value,
                              body: (0, nx.S)(e),
                            };
                          })(t);
                        if ("subscription" === a.type)
                          throw Error(
                            "GraphQL subscriptions are not supported!"
                          );
                        return (await nj(e, a, n, i)).body;
                      })
                    )
                  );
                let { correlationId: s, clientId: l } = i,
                  c = nt(t, l, s);
                o(c);
                let p = (function (e, t) {
                  let n = nS(),
                    i = [nf(t), nm.Z];
                  return (0, nA.xC)({
                    reducer: nv(e),
                    preloadedState: e,
                    middleware: (e) =>
                      e({ immutableCheck: !1, composeEnhancer: n }).concat(i),
                  });
                })(n, c);
                a.then((e) => (p.dispatch({ type: ni.L, playbackMode: e }), e)),
                  r(p);
              }, [n, i]),
              (function (e, t) {
                let { triggerPlaybackOperation: n } = (0, tB.t)(e, t),
                  i = (0, tL.useRef)(!1);
                (0, tL.useEffect)(() => {
                  if (!e) return () => {};
                  let a = (i) => {
                    let a =
                      t.getState().settings.isVideoEmbed &&
                      t.getState().data?.entity?.hasVideo;
                    switch (i.data?.command) {
                      case ef.PLAY:
                      case ef.PLAY_FROM_START:
                        n((0, tD.hY)(a ? tG.yp.VIDEO : tG.yp.AUDIO)),
                          t.dispatch(
                            (0, tM._)({
                              page: window.location.pathname,
                              action_intent: "play",
                              action_type: "iframe-api",
                            })
                          );
                        break;
                      case ef.PAUSE:
                        n((0, tD.wO)()),
                          t.dispatch(
                            (0, tM._)({
                              page: window.location.pathname,
                              action_intent: "pause",
                              action_type: "iframe-api",
                            })
                          );
                        break;
                      case ef.RESUME:
                        e.getState()?.hasContext
                          ? n((0, tD.v4)())
                          : n((0, tD.hY)()),
                          t.dispatch(
                            (0, tM._)({
                              page: window.location.pathname,
                              action_intent: "resume",
                              action_type: "iframe-api",
                            })
                          );
                        break;
                      case ef.TOGGLE_PLAY:
                        n((0, tD.Xh)()),
                          t.dispatch(
                            (0, tM._)({
                              page: window.location.pathname,
                              action_intent: "toggle",
                              action_type: "iframe-api",
                            })
                          );
                        break;
                      case ef.SEEK:
                        {
                          let e = parseInt(i.data?.timestamp, 10);
                          n((0, tD.O7)(1e3 * e)),
                            t.dispatch(
                              (0, tM._)({
                                page: window.location.pathname,
                                action_intent: "seek",
                                action_type: "iframe-api",
                              })
                            );
                        }
                        break;
                      case ef.LOAD_COMPLETE_ACK:
                        t.dispatch(
                          (0, tM._)({
                            page: window.location.pathname,
                            action_intent: "load-episode",
                            action_type: "iframe-api",
                          })
                        );
                        break;
                      default:
                        return;
                    }
                  };
                  return (
                    window.addEventListener("message", a),
                    i.current ||
                      (window.parent &&
                        window.parent.postMessage({ type: ey.READY }, "*"),
                      (i.current = !0)),
                    () => {
                      window.removeEventListener("message", a);
                    }
                  );
                }, [e, t, n, i]),
                  (0, tL.useEffect)(
                    () =>
                      (function (e) {
                        if (window.parent && e) {
                          let t = (e) => {
                            if (e.data) {
                              let {
                                isPaused: t,
                                isBuffering: n,
                                duration: i,
                                positionAsOfTimestamp: a,
                              } = e.data;
                              window.parent.postMessage(
                                {
                                  type: ey.PLAYBACK_UPDATE,
                                  payload: {
                                    isPaused: t,
                                    isBuffering: n,
                                    duration: i,
                                    position: a,
                                  },
                                },
                                "*"
                              );
                            }
                          };
                          return (
                            e.getEvents().addListener(tU.rg.UPDATE, t),
                            () => {
                              e.getEvents().removeListener(tU.rg.UPDATE, t);
                            }
                          );
                        }
                        return () => {};
                      })(e),
                    [e]
                  );
              })(l, a),
              (0, tR.jsx)(tx.zt, {
                store: a,
                serverState: a.getState(),
                children: (0, tR.jsx)(t5, {
                  instance: c,
                  children: (0, tR.jsx)(tw.wj.Provider, {
                    value: p,
                    children: (0, tR.jsx)(tw.Iw, {
                      value: e.config.locale,
                      children: (0, tR.jsx)(nd, {
                        instance: s,
                        children: (0, tR.jsx)(nu.l, {
                          reduxStore: a,
                          playerAPI: l,
                          children: (0, tR.jsxs)(tP.u, {
                            children: [
                              (0, tR.jsx)("base", {
                                target: e.state.settings.isMobile
                                  ? "_top"
                                  : "_blank",
                              }),
                              (0, tR.jsx)(tC.xB, { styles: nF.ue }),
                              (0, tR.jsx)(np.b, { children: t }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              })
            );
          };
      },
      8950: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return p;
          },
        });
        var i = n(85893),
          a = n(94184),
          r = n.n(a),
          s = n(67294),
          o = n(9473),
          l = n(32091),
          u = n(28065),
          c = n(48247),
          d = n.n(c);
        let p = (e) => {
          let { className: t, onClick: n } = e,
            a = (0, o.I0)(),
            c = (0, s.useCallback)((e) => a((0, u._)(e)), [a]),
            p = (0, l.y)({ productName: "embed_player_p" });
          return (0, i.jsx)("div", {
            onClick: () => {
              n && n(),
                c({
                  action_type: "click",
                  action_intent: "deeplink",
                  action_item_id: "cover-art",
                }),
                window.open(p?.embeddedEntity, "_blank");
            },
            "aria-hidden": !0,
            className: r()(d().coverArt, t),
          });
        };
      },
      53118: function (e, t, n) {
        "use strict";
        var i = n(85893),
          a = n(94507),
          r = n(67294),
          s = n(95829),
          o = n(46883),
          l = n.n(o);
        let u = (e) => (e > 550 ? 64 : 24);
        t.Z = (e) => {
          let { title: t, description: n, links: o } = e,
            [c, d] = (0, r.useState)(32),
            { height: p } = (0, r.useContext)(s.h);
          return (
            (0, r.useEffect)(() => {
              p && d(u(p));
            }, [p]),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("div", {
                className: l().wrapper,
                children: [
                  (0, i.jsx)("div", {
                    className: l().icon,
                    children: (0, i.jsx)(a.V, { iconSize: c }),
                  }),
                  (0, i.jsxs)("div", {
                    className: l().content,
                    children: [
                      (0, i.jsx)("h1", { className: l().title, children: t }),
                      (0, i.jsx)("p", {
                        className: l().description,
                        children: n,
                      }),
                      (0, i.jsx)("div", {
                        className: l().links,
                        children: ((e) => {
                          let t = e.map((e) =>
                            (0, i.jsx)(
                              "a",
                              {
                                target: "_blank",
                                href: e.href,
                                className: e.isPrimaryStyle ? l().primary : "",
                                children: e.title,
                              },
                              e.href
                            )
                          );
                          return (0, i.jsx)(i.Fragment, {
                            children: t.map((e) => e),
                          });
                        })(o),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      },
      20759: function (e, t, n) {
        "use strict";
        n.d(t, {
          R: function () {
            return m;
          },
        });
        var i = n(85893),
          a = n(94184),
          r = n.n(a),
          s = n(67294),
          o = n(9473);
        let l = () => !1,
          u = (e) => {
            let t = (0, s.useMemo)(
                () => (l() ? null : window.matchMedia(e)),
                [e]
              ),
              [n, i] = (0, s.useState)(() => !t || t.matches);
            return (
              (0, s.useEffect)(() => {
                if (!t || !t.addEventListener) return () => {};
                let e = (e) => {
                  i(e.matches);
                };
                return (
                  t.addEventListener("change", e),
                  () => {
                    t.removeEventListener("change", e);
                  }
                );
              }, [t]),
              n
            );
          },
          c = () => u("(prefers-reduced-motion: reduce)");
        var d = n(24697),
          p = n(25975),
          _ = n.n(p);
        let m = (e) => {
          let {
              children: t,
              title: n,
              speed: a = 0.2,
              pauseAtEndEdgeDurationMs: l = 1200,
              initialMouseIntDelayMs: u = 200,
              startAnimationOnMount: p = !0,
              startAnimationOnMountDelayMs: m = 1e3,
              iterationCount: N = "infinite",
              scrollMethod: T = "transform",
            } = e,
            E = (0, s.useRef)(null),
            I = (0, s.useRef)(null),
            h = (0, s.useRef)(null),
            y = (0, s.useRef)(0),
            f = (0, s.useRef)("scrolling"),
            A = (0, o.v9)((e) => e.settings.rtl) ? "rtl" : "ltr",
            k = (0, s.useRef)(void 0),
            g = c(),
            O = (0, s.useRef)({
              initialMouseInteraction: null,
              animationOnMount: null,
            }),
            v = (0, s.useCallback)(
              () =>
                h.current && E.current
                  ? h.current.clientWidth - E.current.clientWidth
                  : 0,
              []
            ),
            S = (0, s.useCallback)(
              () => (k && "rtl" === k.current ? 1 : -1),
              [k]
            ),
            b = (0, s.useCallback)(() => {
              let e = v();
              return e > 0 && A !== k.current ? 0 + -1 * S() * e : 0;
            }, [v, A, S]),
            R = (0, s.useCallback)(() => {
              h.current?.style.setProperty("--trans-x", `${b()}px`);
            }, [b]),
            C = (0, s.useCallback)(() => {
              if (g || y.current) return;
              let e = !1,
                t = 0,
                n = 1,
                i = !1,
                r = (s) => {
                  let o = v();
                  if (o <= 0) return;
                  let u = !0,
                    c = t;
                  if (e) {
                    if (
                      (i
                        ? s > i + l && (i = !1)
                        : "paused" === f.current ||
                          ((c += (((s - e) * 60) / 1e3) * n * a) > o
                            ? ((n *= -1), (i = s), (c = o))
                            : c < 0 &&
                              ((n *= -1),
                              (i = s),
                              (c = 0),
                              (u = "infinite" === N))),
                      (t = c),
                      "transform" === T)
                    ) {
                      let e = S() * t + b();
                      h.current?.style.setProperty("--trans-x", `${e}px`),
                        (I.current.scrollLeft = 0);
                    } else "scroll" === T && (I.current.scrollLeft = t);
                  }
                  (e = s),
                    (y.current = 0),
                    u && (y.current = requestAnimationFrame(r));
                };
              (f.current = "scrolling"), r(0);
            }, [a, l, T, S, b, v, g, N]),
            P = (0, s.useCallback)(() => y.current, []),
            w = (0, s.useCallback)(() => {
              f.current = "paused";
            }, []),
            L = (0, s.useCallback)(() => {
              f.current = "scrolling";
            }, []),
            x = (0, s.useCallback)(() => {
              cancelAnimationFrame(y.current),
                (f.current = "paused"),
                (y.current = 0);
            }, []),
            D = (0, s.useCallback)(() => {
              Object.values(O.current).forEach((e) => e && clearTimeout(e));
            }, []),
            M = (0, s.useCallback)(
              (e) => {
                P()
                  ? w()
                  : "focus" !== e &&
                    (O.current.initialMouseInteraction = setTimeout(C, u));
              },
              [C, w, u, P]
            ),
            U = (0, s.useCallback)(() => {
              O.current.initialMouseInteraction &&
                clearTimeout(O.current.initialMouseInteraction),
                P() && L();
            }, [L, P]);
          return (
            (0, s.useEffect)(() => {
              p &&
                (O.current.animationOnMount &&
                  clearTimeout(O.current.animationOnMount),
                (O.current.animationOnMount = setTimeout(C, m)));
            }, [C, m, p]),
            (0, s.useEffect)(
              () => () => {
                x(), D(), R();
              },
              [x, D, R]
            ),
            (0, s.useEffect)(() => {
              let e = h.current?.children[0];
              e &&
                ((k.current = getComputedStyle(e).direction),
                "rtl" === k.current &&
                  E.current?.classList.add(_().containerRtl)),
                R();
            }, [A, b, R]),
            (function (e) {
              let t = (0, d.y1)(e, 100, { leading: !0 });
              (0, s.useEffect)(
                () => (
                  window.addEventListener("resize", t),
                  () => {
                    window.removeEventListener("resize", t), t.cancel();
                  }
                ),
                [t]
              );
            })(() => {
              x(), R();
            }),
            (0, i.jsx)("div", {
              ref: E,
              className: _().container,
              onMouseOver: () => M("mouse"),
              onFocus: () => M("focus"),
              onMouseOut: U,
              onBlur: U,
              title: g && n ? n : void 0,
              children: (0, i.jsx)("div", {
                ref: I,
                className: r()(_().scrollableContainer, {
                  [_().gradient]: v() > 0,
                }),
                children: (0, i.jsx)("div", {
                  ref: h,
                  className: _().inner,
                  children: t,
                }),
              }),
            })
          );
        };
      },
      71973: function (e, t, n) {
        "use strict";
        n.d(t, {
          S: function () {
            return f;
          },
        });
        var i = n(85893),
          a = n(18872),
          r = n(17296),
          s = n(14957),
          o = n(43485),
          l = n(5996),
          u = n(67294),
          c = n(9473),
          d = n(47229),
          p = n(23392),
          _ = n(96494);
        let m = async (e, t, n) => {
            let { utmParameters: i, customData: a, linkPreview: r } = n,
              s = await e
                .build()
                .withHost("https://spclient.wg.spotify.com/url-dispenser/v1")
                .withPath("/generate-url")
                .withMethod("POST")
                .withJsonContentType()
                .withoutMarket()
                .withEndpointIdentifier("/v1/generate-url")
                .withBody({
                  spotify_uri: t,
                  custom_data: a,
                  link_preview: r,
                  utm_parameters: i,
                })
                .send();
            if (201 === s.status) return s.body;
            throw Error(`Failed to get short link for uri ${t}`);
          },
          N = async (e, t) =>
            (
              await m(e, t, {}).catch(() => ({
                shareable_url: _.EC(t)?.toURL(),
              }))
            ).shareable_url ?? null;
        var T = n(28065),
          E = n(26112);
        async function I(e) {
          if ("clipboard" in navigator)
            try {
              if ("string" == typeof e)
                return await navigator.clipboard.writeText(e);
              if (navigator.clipboard.write)
                return await navigator.clipboard.write([
                  new ClipboardItem({
                    "text/plain": e.then(
                      (e) => new Blob([e], { type: "text/plain" })
                    ),
                  }),
                ]);
              let t = await e;
              return await navigator.clipboard.writeText(t);
            } catch (e) {
              throw Error(
                `Failed to copy to clipboard using Clipboard API. ${e.message}`
              );
            }
          return Promise.resolve();
        }
        var h = n(5297),
          y = n.n(h);
        let f = (e) => {
          let { className: t } = e,
            n = (0, c.v9)(E.w),
            [_, m] = (0, u.useState)(!1),
            [h, f] = (0, u.useState)(null),
            A = (0, c.I0)(),
            { isCompactLegacy: k } = (0, d.M)(),
            g = (0, l.NT)(),
            O = async (e) => {
              await I(e),
                A(
                  (0, T._)({
                    action_type: "click",
                    action_intent: "clipboard-copy",
                  })
                ),
                m(!0);
            },
            v = async () => {
              if (!_ && n) {
                if (h) await O(h);
                else {
                  let e = await N(p.b.getInstance(), n);
                  e && (await O(e)), f(e);
                }
              }
            };
          return (
            (0, u.useEffect)(() => {
              _ && setTimeout(() => m(!1), 2e3);
            }, [_]),
            (0, u.useEffect)(() => {
              f(null);
            }, [n]),
            (0, i.jsx)(r.o, {
              semanticColor: "textBase",
              disabled: !n,
              className: (0, a.cx)(t, { [y().clicked]: _ }),
              onClick: (e) => {
                e.stopPropagation(), v();
              },
              iconLeading: k ? void 0 : s.o,
              condensed: !0,
              children: (0, i.jsx)(o.x, {
                className: (0, a.cx)(y().truncator, y().copyLinkText),
                children: _
                  ? g(
                      "embed_success_share_link",
                      "Copied to clipboard",
                      "Text on a button when an entity link was copied to a clipboard"
                    )
                  : g(
                      "spe.copy_link",
                      "Copy link",
                      "Text on a button that copies an entity link to a clipboard"
                    ),
              }),
            })
          );
        };
      },
      1594: function (e, t, n) {
        "use strict";
        n.d(t, {
          I: function () {
            return O;
          },
        });
        var i = n(85893),
          a = n(17296),
          r = n(94507),
          s = n(28527),
          o = n(5996),
          l = n(94184),
          u = n.n(l),
          c = n(54483),
          d = n.n(c),
          p = n(67294),
          _ = n(9473),
          m = n(32091),
          N = n(47229),
          T = n(28065),
          E = n(90417),
          I = n(26112),
          h = n(17033),
          y = n(97828),
          f = n(23532),
          A = n(71973),
          k = n(32404),
          g = n.n(k);
        let O = (e) => {
          let { playOnSpotifyClick: t, visible: n } = e,
            l = (0, m.y)({ productName: "embed_player_p" }),
            c = (0, o.NT)(),
            k = (0, _.v9)((e) => e.machineState.playbackMode),
            O = (0, p.useRef)(null),
            v = (0, _.I0)(),
            S = () => {
              v((0, E.h6)()),
                v(
                  (0, T._)({
                    action_type: "click",
                    action_intent: "close-context-menu",
                  })
                );
            },
            { isCompactLegacy: b } = (0, N.M)(),
            R = (0, _.v9)((e) =>
              (0, I.k)(e) || e.data.entity?.isAudiobook
                ? e.data.entity.relatedEntityUri
                : e.data.entity.uri
            );
          return (0, i.jsx)(i.Fragment, {
            children:
              k !== h.d.UNKNOWN &&
              (0, i.jsx)(d(), {
                active: n,
                focusTrapOptions: { onDeactivate: S },
                children: (0, i.jsxs)("div", {
                  ref: O,
                  className: u()(g().wrapper, { [g().visible]: n }),
                  children: [
                    (0, i.jsxs)("div", {
                      className: u()(g().menuContent, { [g().visible]: n }),
                      children: [
                        (0, i.jsxs)("ul", {
                          className: u()(g().menu, { [g().visible]: n }),
                          children: [
                            (0, i.jsx)("li", {
                              className: g().menuItem,
                              children: (0, i.jsx)("a", {
                                className: g().menuItemButton,
                                tabIndex: -1,
                                href: l.embeddedEntity,
                                target: "_blank",
                                children: (0, i.jsx)(a.o, {
                                  semanticColor: "textBase",
                                  className: g().menuItemButton,
                                  onClick: () => {
                                    t && t(),
                                      v(
                                        (0, T._)({
                                          action_type: "click",
                                          action_intent: "deeplink",
                                          action_item_id: "play-on-spotify",
                                        })
                                      );
                                  },
                                  iconLeading: b ? void 0 : r.V,
                                  condensed: !0,
                                  children: (0, i.jsx)("div", {
                                    className: g().truncator,
                                    children: c(
                                      "play_on_spotify",
                                      "Play on Spotify",
                                      "Button that plays the viewed content in the Spotify client"
                                    ),
                                  }),
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              className: g().menuItem,
                              children: (0, i.jsx)(y.w, {
                                uri: R,
                                className: g().adaptToOverflowMenu,
                                mainView: !1,
                              }),
                            }),
                            (0, i.jsx)("li", {
                              className: g().menuItem,
                              children: (0, i.jsx)(A.S, {
                                className: g().menuItemButton,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: g().policies,
                          children: [
                            (0, i.jsx)("a", {
                              className: g().link,
                              href: "https://www.spotify.com/legal/privacy-policy/",
                              onClick: () => {
                                v(
                                  (0, T._)({
                                    action_type: "click",
                                    action_intent: "privacypolicy-show",
                                  })
                                );
                              },
                              target: "_blank",
                              children: c(
                                "spe.privacy_policy",
                                "Privacy Policy",
                                "Button`s text that opens privacy policy Spotify`s page"
                              ),
                            }),
                            (0, i.jsx)(f.Z, { className: g().separator }),
                            (0, i.jsx)("a", {
                              className: g().link,
                              href: "https://www.spotify.com/legal",
                              onClick: () => {
                                v(
                                  (0, T._)({
                                    action_type: "click",
                                    action_intent: "termsandconditions-show",
                                  })
                                );
                              },
                              target: "_blank",
                              children: c(
                                "spe.terms_and_conditions",
                                "Terms & Conditions",
                                "Button`s text that opens a terms and conditions Spotify`s page"
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("button", {
                      title: c(
                        "close_button_action",
                        "Close",
                        "Accessibility label for a close button"
                      ),
                      className: g().closeButton,
                      onClick: S,
                      children: (0, i.jsx)(s.k, {}),
                    }),
                  ],
                }),
              }),
          });
        };
      },
      13162: function (e, t, n) {
        "use strict";
        n.d(t, {
          c: function () {
            return p;
          },
        });
        var i = n(85893),
          a = n(17296),
          r = n(26734),
          s = n(5996),
          o = n(9473),
          l = n(28065),
          u = n(90417),
          c = n(38604),
          d = n.n(c);
        let p = () => {
          let e = (0, o.I0)(),
            t = (0, s.NT)()(
              "embed_more",
              "More",
              "Accessibility label for an open context menu button"
            );
          return (0, i.jsx)(a.o, {
            condensedAll: !0,
            size: "small",
            className: d().overflowMenuButton,
            semanticColor: "textBase",
            title: t,
            "aria-label": t,
            onClick: () => {
              e((0, u.Nn)()),
                e(
                  (0, l._)({
                    action_type: "click",
                    action_intent: "open-context-menu",
                  })
                );
            },
            iconOnly: r.N,
          });
        };
      },
      45019: function (e, t, n) {
        "use strict";
        n.d(t, {
          J: function () {
            return y;
          },
        });
        var i = n(85893),
          a = n(72530),
          r = n(4864),
          s = n(5996),
          o = n(94184),
          l = n.n(o),
          u = n(67294),
          c = n(9473),
          d = n(59188),
          p = n(5603),
          _ = n(28065),
          m = n(33829),
          N = n(18303),
          T = n.n(N),
          E = () => (0, i.jsx)("div", { className: T().loadingSpinner }),
          I = n(34719),
          h = n.n(I);
        let y = (e) => {
          let { maxTimeToNotShowLoading: t } = e,
            n = (0, c.v9)((e) => e.data.entity).isPlayable,
            { playbackState: o, triggerPlaybackOperation: N } = (0,
            u.useContext)(d.C),
            T = o?.isBuffering || !1,
            I = o?.isDisabled,
            y = (0, c.I0)(),
            f = !!o?.hasContext,
            A = o?.item?.uri,
            k = !f || (o?.isPaused ?? !0),
            g = (0, s.NT)(),
            O = (0, c.v9)((e) => e.settings.isVideoEmbed),
            [v, S] = (0, u.useState)(
              g(
                "page.loading",
                "Loading",
                "Accessibility label for loading spinner"
              )
            ),
            b = (0, u.useRef)(!1),
            R = (0, u.useRef)(void 0),
            C = (0, u.useRef)(void 0),
            [P, w] = (0, u.useState)(!1);
          (0, u.useEffect)(() => {
            b.current
              ? (T
                  ? (R.current = setTimeout(() => {
                      (R.current = void 0), T && w(!0);
                    }, t || 200))
                  : (R && clearTimeout(R.current),
                    P &&
                      !C &&
                      setTimeout(() => {
                        w(!1);
                      }, 300)),
                P &&
                  (C.current = setTimeout(() => {
                    (C.current = void 0), T || w(!1);
                  }, 300)))
              : (b.current = !0);
          });
          let L = (0, u.useRef)(null);
          return (
            (0, u.useEffect)(() => {
              I || !n
                ? (S(
                    g(
                      "spe.error_heading",
                      "Something went wrong",
                      "Accessibility label for error message"
                    )
                  ),
                  (L.current = (0, i.jsx)(a.z, {
                    className: h().playPauseIcon,
                    title: v,
                  })))
                : P
                ? (S(
                    g(
                      "page.loading",
                      "Loading",
                      "Accessibility label for loading spinner"
                    )
                  ),
                  (L.current = (0, i.jsx)(E, {})))
                : k
                ? (S(
                    g(
                      "embed_play",
                      "Play",
                      "Accessibility label for a button that plays preview of a track"
                    )
                  ),
                  (L.current = (0, i.jsx)(a.z, {
                    className: h().playPauseIcon,
                    title: v,
                  })))
                : (S(
                    g(
                      "embed_pause",
                      "Pause",
                      "Accessibility label for a button that pauses preview of a track"
                    )
                  ),
                  (L.current = (0, i.jsx)(r.p, {
                    className: h().playPauseIcon,
                    title: v,
                  })));
            }, [P, k, g, v, I, n]),
            (0, i.jsx)("button", {
              "data-testid": "play-pause-button",
              className: l()(h().buttonWrapper, {
                [h().disabled]: I || !n,
                [h().adaptForVideo]: O,
              }),
              onClick: () => {
                I ||
                  (n
                    ? (N((0, p.Xh)(O ? m.yp.VIDEO : m.yp.AUDIO)),
                      y(
                        (0, _._)({
                          action_type: "click",
                          action_intent: !1 === k ? "pause" : "play",
                          action_item_id: "now-playing-bar",
                          item_uri: A,
                        })
                      ))
                    : y(
                        (0, _._)({
                          action_type: "playback",
                          action_intent: "track-not-available",
                          action_item_id: "now-playing-bar",
                          item_uri: A,
                        })
                      ));
              },
              "aria-label": v,
              tabIndex: 0,
              children: L.current,
            })
          );
        };
      },
      97164: function (e, t, n) {
        "use strict";
        n.d(t, {
          H: function () {
            return c;
          },
        });
        var i = n(85893),
          a = n(47229),
          r = n(1861),
          s = n(13162),
          o = n(19554),
          l = n(52377),
          u = n.n(l);
        let c = () => {
          let { isCompactLegacy: e } = (0, a.M)();
          return (0, i.jsxs)("div", {
            className: u().playerControlsWrapper,
            children: [
              e &&
                (0, i.jsx)("div", {
                  className: u().addToLibraryCompactWrapper,
                  children: (0, i.jsx)(r.E, {}),
                }),
              (0, i.jsx)("div", {
                className: u().overflowMenuButtonWrapper,
                children: (0, i.jsx)(s.c, {}),
              }),
              (0, i.jsx)(o.D, {}),
            ],
          });
        };
      },
      19554: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return E;
          },
        });
        var i = n(85893),
          a = n(17296),
          r = n(72530),
          s = n(20652),
          o = n(5996),
          l = n(67294),
          u = n(9473),
          c = n(59188),
          d = n(5603),
          p = n(95829),
          _ = n(28065),
          m = n(35775),
          N = n(67510),
          T = n.n(N);
        let E = () => {
          let e = (0, o.NT)(),
            [t, n] = (0, l.useState)({ left: 0, right: 0, animationState: 0 }),
            [N, E] = (0, l.useState)(!0),
            { playbackState: I, triggerPlaybackOperation: h } = (0,
            l.useContext)(c.C),
            y = I?.duration,
            f = I?.positionAsOfTimestamp,
            A = (0, u.v9)((e) => e.data.entity),
            k = A.isPlayable,
            g = I?.item?.uri,
            O = null === A.audioPreview || I?.isDisabled || !k,
            v = (0, u.I0)(),
            S = !I?.hasContext || I?.isPaused,
            b = (0, l.useRef)(!0);
          b.current = t.right < 180;
          let { height: R } = l.useContext(p.h);
          (0, l.useEffect)(() => {
            R && E(R >= m.p4.large);
          }, [R]),
            (0, l.useEffect)(() => {
              if (0 === f) {
                (b.current = !0),
                  n((e) => ({ ...e, left: 0, right: 0, animationState: 2 }));
                return;
              }
              if (y && f && f > 0) {
                let e = (360 * f) / y,
                  t = e > 180 ? 180 : e,
                  i = e > 180 ? e - 180 : 0,
                  a = b.current;
                n((e) => ({
                  ...e,
                  left: 180 === t && a && 2 === e.animationState ? 0 : i,
                  right: t,
                  animationState: 0 === e.animationState ? 1 : e.animationState,
                }));
              }
            }, [y, f]),
            (0, l.useEffect)(() => {
              1 === t.animationState && n((e) => ({ ...e, animationState: 2 }));
            }, [t.animationState]);
          let C = {
              zIndex: 1,
              transform: `rotate(${t.right}deg)`,
              transition:
                0 === t.right || 2 !== t.animationState
                  ? "none"
                  : "transform 1s ease-in-out",
            },
            P = {
              zIndex: 2,
              transform: `rotate(${t.left}deg)`,
              transition:
                0 === t.left || 2 !== t.animationState
                  ? "none"
                  : "transform 1s ease-in-out",
            },
            w = () => {
              O ||
                (h((0, d.Xh)()),
                v(
                  (0, _._)({
                    action_type: "click",
                    action_intent: I?.isPaused === !1 ? "pause" : "play",
                    action_item_id: "now-playing-bar",
                    item_uri: g,
                  })
                ),
                k ||
                  v(
                    (0, _._)({
                      action_type: "playback",
                      action_intent: "track-not-available",
                      action_item_id: "now-playing-bar",
                      item_uri: g,
                    })
                  ));
            };
          return (0, i.jsx)("div", {
            className: T().circularContainer,
            "data-testid": "preview-play-pause",
            children: S
              ? (0, i.jsx)(a.o, {
                  disabled: O,
                  "aria-label": e(
                    "embed_play",
                    "Play",
                    "Accessibility label for a button that plays preview of a track"
                  ),
                  "data-testid": "play-pause-button",
                  onClick: w,
                  semanticColor: "textBase",
                  condensedAll: !0,
                  children: (0, i.jsx)(r.z, {
                    semanticColor: "textBase",
                    size: N ? "xlarge" : "large",
                  }),
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", {
                      className: T().rangeBarRight,
                      children: (0, i.jsx)("div", {
                        className: T().rangeBarProgress,
                        style: C,
                        "data-testid": "progress-right",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: T().rangeBarLeft,
                      children: (0, i.jsx)("div", {
                        className: T().rangeBarProgress,
                        style: P,
                        "data-testid": "progress-left",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: T().circularInner,
                      children: (0, i.jsx)(a.o, {
                        className: T().iconPlayingButton,
                        "aria-label": e(
                          "embed_pause",
                          "Pause",
                          "Accessibility label for a button that pauses preview of a track"
                        ),
                        "data-testid": "play-pause-button",
                        onClick: w,
                        semanticColor: "textBase",
                        condensedAll: !0,
                        children: (0, i.jsx)(s.k, {
                          size: N ? "large" : "medium",
                        }),
                      }),
                    }),
                  ],
                }),
          });
        };
      },
      63301: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return R;
          },
        });
        var i = n(85893),
          a = n(67294),
          r = n(9473),
          s = n(60093),
          o = n(5603),
          l = n(59188),
          u = n(28065),
          c = n(96494);
        function d(e) {
          return e === c.JM.TRACK ||
            e === c.JM.ALBUM ||
            e === c.JM.PLAYLIST ||
            e === c.JM.ARTIST
            ? 5e3
            : 15e3;
        }
        var p = n(5996),
          _ = n(94184),
          m = n.n(_),
          N = n(24697);
        let T = (e) => {
          let { onStepForward: t, onStepBackward: n, value: i } = e;
          return (0, N.y1)(
            (e) => {
              parseFloat(e.target.value) > i ? t?.() : n?.();
            },
            100,
            { trailing: !1, leading: !0, maxWait: 200 }
          );
        };
        var E = n(8745),
          I = n(98395),
          h = n.n(I),
          y = n(53606),
          f = n.n(y);
        function A(e) {
          let { children: t, ...n } = e;
          return (0, i.jsxs)("label", {
            className: f().visibleOnlyToScreenReader,
            children: [t, (0, i.jsx)("input", { ...n })],
          });
        }
        function k(e, t, n) {
          let i = e.current;
          if (null === i) return 0;
          let a = i.getBoundingClientRect();
          return "vertical" === n
            ? 1 - Math.max(0, Math.min((t.clientY - a.top) / a.height, 1))
            : Math.max(0, Math.min((t.clientX - a.left) / a.width, 1));
        }
        let g = (e) => {
          let {
              progressBarRef: t,
              onDragStart: n,
              onDragMove: i,
              onDragEnd: r,
              direction: s = "horizontal",
            } = e,
            [o, l] = (0, a.useState)(!1),
            [u, c] = (0, a.useState)(!1),
            [d, p] = (0, a.useState)(0),
            _ = (0, a.useRef)(n),
            m = (0, a.useRef)(i),
            T = (0, a.useRef)(r);
          (_.current = n), (m.current = i), (T.current = r);
          let E = (0, N.y1)(
              (e) => {
                m.current(k(t, e, s));
              },
              20,
              { leading: !0, maxWait: 20 }
            ),
            I = (0, a.useCallback)(
              (e) => {
                0 === e.button &&
                  (_.current(k(t, e, s)),
                  l(!0),
                  document.addEventListener("pointermove", E),
                  document.addEventListener(
                    "pointerup",
                    (e) => {
                      l(!1),
                        E.cancel(),
                        T.current(k(t, e, s)),
                        document.removeEventListener("pointermove", E);
                    },
                    { once: !0 }
                  ));
              },
              [E, t, s]
            ),
            h = (0, a.useCallback)(
              (e) => {
                p(k(t, e, s));
              },
              [t, s]
            );
          return {
            isDragging: o,
            onPointerDown: I,
            onPointerEnter: (0, a.useCallback)(() => {
              c(!0), document.addEventListener("pointermove", h);
            }, [h]),
            onPointerLeave: (0, a.useCallback)(() => {
              c(!1), document.removeEventListener("pointermove", h);
            }, [h]),
            isHovering: u,
            hoverPercentage: d,
          };
        };
        var O = (e) => {
            let {
                enabled: t,
                max: n,
                current: r,
                withOverhead: s,
                entityType: o,
                onDragStart: l,
                onDragMove: u,
                onDragEnd: c,
                onStepBackward: _,
                onStepForward: N,
                tooltip: I,
              } = e,
              y = (0, p.NT)(),
              f = (0, a.useRef)(null),
              {
                isDragging: k,
                onPointerDown: O,
                onPointerEnter: v,
                onPointerLeave: S,
                isHovering: b,
                hoverPercentage: R,
              } = g({
                progressBarRef: f,
                onDragStart: l,
                onDragMove: u,
                onDragEnd: c,
              }),
              C = { left: `${(b ? R : 0) * 100}%`, zIndex: 1 },
              P = { transform: `translateX(-${100 - (b ? R : 0) * 100}%)` },
              w = Math.max(0, Math.min(1, (r ?? 0) / (n || 1))),
              L = b && n ? n * R : 0,
              x = b && void 0 !== n && n > 0,
              D = { transform: `translateX(-${100 - 100 * w}%)` },
              M = (t && b) || k,
              U = { left: `${100 * w}%` },
              G = T({ onStepForward: N, onStepBackward: _, value: r ?? 0 });
            return (0, i.jsxs)("div", {
              ref: f,
              onPointerDown: t ? O : void 0,
              onPointerEnter: v,
              onPointerLeave: S,
              className: s
                ? h().progressBarContainerWithOverhead
                : h().progressBarContainer,
              children: [
                (0, i.jsx)(A, {
                  disabled: !t,
                  type: "range",
                  min: 0,
                  max: n,
                  value: r ?? 0,
                  step: d(o),
                  onChange: G,
                  "aria-valuetext": `
         ${(0, E.Z)(r ?? 0)} /
         ${(0, E.Z)(n ?? 0)}
        `,
                  children: y(
                    "playback-control.a11y.seek-slider-button",
                    "Change progress",
                    "Text read by accessibility tools explaining what the white dot on the player bar is for"
                  ),
                }),
                x && I && (0, i.jsx)(I, { style: C, children: (0, E.Z)(L) }),
                (0, i.jsxs)("div", {
                  className: h().progressBarLineBackground,
                  children: [
                    (0, i.jsx)("div", {
                      className: h().progressBarLineActive,
                      style: P,
                    }),
                    (0, i.jsx)("div", {
                      "data-testid": "progress-bar-line",
                      id: "progress-bar-line",
                      style: D,
                      className: h().progressBarLine,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  "data-testid": "progress-bar-slider",
                  id: "progress-bar-slider",
                  className: m()(h().progressBarSlider, { [h().visible]: M }),
                  style: U,
                }),
              ],
            });
          },
          v = n(17438),
          S = n.n(v);
        let b = (e) => {
          let { style: t, children: n } = e;
          return (0, i.jsx)("div", {
            style: t,
            className: S().tooltipContainer,
            children: n,
          });
        };
        var R = () => {
          let e = (0, r.v9)((e) => e.data.entity),
            { triggerPlaybackOperation: t, playbackState: n } = (0,
            a.useContext)(l.C),
            c = e.isPlayable && n?.hasContext,
            { metadata: p } = (0, a.useMemo)(() => (0, s.C)(e), [e]),
            _ = n?.duration || Number(p?.duration),
            m = n?.item?.uri,
            [N, T] = (0, a.useState)(null),
            [E, I] = (0, a.useState)(n?.positionAsOfTimestamp || 0),
            h = null !== N ? N : E,
            y = (0, r.I0)(),
            f = (e) => {
              y((0, u._)(e));
            };
          (0, a.useEffect)(() => {
            I(n?.positionAsOfTimestamp || 0);
          }, [n?.positionAsOfTimestamp]);
          let A = (e) => {
            T(e * _);
          };
          return (0, i.jsx)(O, {
            onDragStart: A,
            onDragMove: A,
            onDragEnd: (e) => {
              T(null),
                f({
                  action_type: "click",
                  action_intent: "seek-click",
                  item_uri: m,
                });
              let n = e * _;
              I(n), t((0, o.O7)(n));
            },
            tooltip: b,
            max: _,
            current: h,
            enabled: c ?? !1,
            entityType: e.type,
            onStepBackward: () => {
              I(h - d(e.type)), t((0, o.O7)(h - d(e.type)));
            },
            onStepForward: () => {
              I(h + d(e.type)), t((0, o.O7)(h + d(e.type)));
            },
          });
        };
      },
      22222: function (e, t, n) {
        "use strict";
        n.d(t, {
          r: function () {
            return m;
          },
        });
        var i = n(85893),
          a = n(43485),
          r = n(5996),
          s = n(67294),
          o = n(9473),
          l = n(60093),
          u = n(59188),
          c = n(28065),
          d = n(8745),
          p = n(44809),
          _ = n.n(p);
        let m = () => {
          let e = (0, o.v9)((e) => e.data.entity),
            { playbackState: t } = (0, s.useContext)(u.C),
            { metadata: n } = (0, s.useMemo)(() => (0, l.C)(e), [e]),
            p = t?.duration || Number(n?.duration),
            [m, N] = (0, s.useState)({
              dragPosition: null,
              showRemainingTime: !0,
            }),
            T = (0, r.NT)(),
            { showRemainingTime: E, dragPosition: I } = m,
            [h, y] = (0, s.useState)(
              T(
                "spe.playback-control.progress-timestamp",
                "Progress timestamp",
                "Accessibility label for a numeric progress display in the currently playing track, in minutes and seconds"
              )
            ),
            f = 0;
          Number.isFinite(I)
            ? (f = I * p)
            : t?.positionAsOfTimestamp && (f = t?.positionAsOfTimestamp);
          let A = "";
          (A =
            t?.hasContext || t?.isPaused !== void 0
              ? E
                ? (0, d.Z)((f || 0) - p)
                : (0, d.Z)(f || 0)
              : (0, d.Z)(p)),
            (0, s.useEffect)(() => {
              t?.hasContext || t?.isPaused !== void 0
                ? E
                  ? y(`${A} remaining time. Click to switch to elapsed time`)
                  : y(`${A} elapsed time. Click to switch to remaining time`)
                : y(`${A} audio duration`);
            }, [A, t?.hasContext, t?.isPaused, E]);
          let k = A.replace(/\d/g, "0").replace(/^\d/, "-0"),
            g = (0, o.I0)();
          return (0, i.jsx)("div", {
            role: "timer",
            children: (0, i.jsxs)("button", {
              className: _().progressTimer,
              onClick: () => {
                N({ ...m, showRemainingTime: !m.showRemainingTime }),
                  g(
                    (0, c._)({
                      action_type: "click",
                      action_intent: "change-time-format",
                    })
                  );
              },
              "aria-disabled": !t?.hasContext && t?.isPaused === void 0,
              "aria-label": h,
              children: [
                (0, i.jsx)("span", {
                  className: _().progressTimeSpacer,
                  "aria-hidden": !0,
                  children: k,
                }),
                (0, i.jsx)(a.x, {
                  className: _().actualProgressTime,
                  "data-testid": "progress-timestamp",
                  children: A,
                }),
              ],
            }),
          });
        };
      },
      23532: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return r;
          },
        });
        var i = n(85893),
          a = n(43485);
        let r = (e) => {
          let { className: t } = e;
          return (0, i.jsx)(a.x, {
            className: t,
            "aria-hidden": !0,
            children: "\xb7",
          });
        };
      },
      32967: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return T;
          },
        });
        var i = n(85893),
          a = n(94507),
          r = n(5996),
          s = n(94184),
          o = n.n(s),
          l = n(67294),
          u = n(9473),
          c = n(10427),
          d = n(32091),
          p = n(95829),
          _ = n(28065),
          m = n(35775);
        let N = (e, t, n) =>
          e >= m.p4.large && t >= m.Zo.medium && !n
            ? "large"
            : e >= m.p4.landscape
            ? "medium"
            : "small";
        var T = (e) => {
          let {
              trackListLength: t,
              className: n,
              ariaLabel: s,
              isVideoEntity: m,
            } = e,
            T = (0, u.I0)(),
            [E, I] = (0, l.useState)("large"),
            { width: h, height: y } = l.useContext(p.h),
            f = (0, d.y)({
              productName: m ? "embed_player_v" : "embed_player_p",
            }),
            A = (0, r.NT)();
          return (
            (0, l.useEffect)(() => {
              y && h && !m && I(N(y, h, t));
            }, [y, h, t, m]),
            (0, i.jsx)("a", {
              className: o()(n),
              onClick: () => {
                T(
                  (0, _._)({
                    action_type: "click",
                    action_intent: "deeplink",
                    action_item_id: "spotify-logo",
                  })
                );
              },
              title: "logo",
              href: f?.embeddedEntity || c.S,
              role: "button",
              "aria-label":
                s ||
                A(
                  "play_on_spotify",
                  "Play on Spotify",
                  "Button that plays the viewed content in the Spotify client"
                ),
              "data-testid": "spotify-logo",
              children: (0, i.jsx)(a.V, { size: E }),
            })
          );
        };
      },
      72593: function (e, t, n) {
        "use strict";
        n.d(t, {
          $: function () {
            return T;
          },
        });
        var i = n(85893),
          a = n(60182),
          r = n(5996),
          s = n(94184),
          o = n.n(s);
        n(67294);
        var l = n(9473),
          u = n(17033),
          c = n(94361),
          d = n(5394);
        let p = (e) => {
          let { className: t, isPreview: n, isAudiobook: a, isTrailer: s } = e,
            o = (0, r.NT)(),
            l = "";
          return (
            n && !a
              ? (l = o("embed_preview", "Preview", "Text on a preview tag"))
              : s &&
                ((l = o("track-trailer", "Trailer", "Text on a trailer tag")),
                a &&
                  (l = o(
                    "audiobook.page.sample",
                    "Sample",
                    "Text on a sample tag"
                  ))),
            (0, i.jsx)(d.V, { className: t, text: l })
          );
        };
        var _ = n(5833),
          m = n.n(_);
        let N = (e) => {
            let {
                className: t,
                isPreview: n,
                isExplicit: s,
                isAudiobook: l,
                isTrailer: u,
              } = e,
              d = (0, r.NT)();
            return (0, i.jsxs)(a.d, {
              condensedAll: !0,
              className: o()(m().tagList, t),
              "aria-label": d(
                "spe.tags",
                "Tags",
                'Accessibility label for a list of tags such as "Explicit" and "Preview"'
              ),
              children: [
                (0, i.jsx)(p, {
                  isAudiobook: l,
                  isTrailer: u,
                  isPreview: n,
                  className: o()(m().tag, { [m().hidden]: !(n || u) }),
                }),
                (0, i.jsx)(c.t, {
                  className: o()(m().tag, { [m().hidden]: !s }),
                }),
              ],
            });
          },
          T = () => {
            let e = (0, l.v9)((e) => e.data.entity?.isExplicit ?? !1),
              t = (0, l.v9)((e) => e.machineState.playbackMode),
              n = (0, l.v9)((e) => e.data.entity?.isAudiobook ?? !1),
              a = (0, l.v9)((e) => e.data.entity?.isTrailer ?? !1),
              r = t === u.d.PREVIEW;
            return e || a || n || r
              ? (0, i.jsx)(N, {
                  isPreview: r,
                  isExplicit: e,
                  isAudiobook: n,
                  isTrailer: a,
                  className: m().condensedTags,
                })
              : null;
          };
      },
      94361: function (e, t, n) {
        "use strict";
        n.d(t, {
          t: function () {
            return s;
          },
        });
        var i = n(85893),
          a = n(5996);
        n(67294);
        var r = n(5394);
        let s = (e) => {
          let { className: t, fullText: n = !1 } = e,
            s = (0, a.NT)()(
              "card.a11y.explicit",
              "Explicit",
              "Label for explicit tagging, only read by accessibility tools"
            );
          return (0, i.jsx)(r.V, {
            ariaLabel: s,
            text: n ? s : "E",
            className: t,
          });
        };
      },
      5394: function (e, t, n) {
        "use strict";
        n.d(t, {
          V: function () {
            return u;
          },
        });
        var i = n(85893),
          a = n(43485),
          r = n(94184),
          s = n.n(r),
          o = n(97338),
          l = n.n(o);
        let u = (e) => {
          let { text: t, ariaLabel: n = t, title: r = n, className: o } = e;
          return (0, i.jsx)(a.x, {
            "aria-label": n,
            className: s()(l().container, o),
            title: r,
            children: t,
          });
        };
      },
      70285: function (e, t, n) {
        "use strict";
        n.d(t, {
          Q: function () {
            return O;
          },
        });
        var i = n(85893),
          a = n(96797),
          r = n(5996),
          s = n(64678),
          o = n(94184),
          l = n.n(o),
          u = n(67294),
          c = n(9473),
          d = n(32091),
          p = n(5383),
          _ = n(60093),
          m = n(59188),
          N = n(5603),
          T = n(28065),
          E = n(26112),
          I = n(96494),
          h = n(10095),
          y = (e) => {
            let { uri: t, name: n, onClick: r } = e,
              s = (0, u.useMemo)(
                () => (0, h.bW)((0, I.EC)(t) ?? void 0, !1).toString(),
                [t]
              );
            return (0, i.jsx)(a.h, {
              standalone: !0,
              semanticColor: "textBase",
              onClick: r,
              href: s,
              children: n,
            });
          },
          f = n(20759),
          A = n(23532),
          k = n(34115),
          g = n.n(k);
        let O = (e) => {
          let { showUpsell: t } = e,
            n = (0, c.v9)((e) => e.data.entity),
            { metadata: o } = (0, u.useMemo)(() => (0, _.C)(n), [n]),
            { playbackState: I, triggerPlaybackOperation: h } = (0,
            u.useContext)(m.C),
            k = I?.isPaused,
            O = (0, c.v9)((e) => !!e.data.entity?.isAudiobook),
            v = (0, c.I0)(),
            S = (0, u.useCallback)((e) => v((0, T._)(e)), [v]),
            b = o?.title || "",
            R = o?.subtitle || "",
            C = n.artists,
            P = new Date(o?.releaseDate || ""),
            w = (0, d.y)({ productName: "embed_player_p" }),
            L = (0, r.bU)(),
            x = (0, c.v9)(E.k),
            D = (e) => () => {
              ("title" === e || "cover-art" === e) &&
                x &&
                void 0 !== k &&
                h((0, N.wO)()),
                S({
                  action_type: "click",
                  action_intent: "deeplink",
                  action_item_id: e,
                });
            },
            [M, U] = (0, u.useState)(!1);
          return (
            (0, u.useEffect)(() => {
              U(!0);
            }, []),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)("h2", {
                className: l()(g().subtitle, {
                  [g().alignBelowUpsell]: t,
                  [g().isAudiobook]: O,
                }),
                children: (0, i.jsx)(
                  f.R,
                  {
                    title: b,
                    speed: 0.2,
                    iterationCount: "single",
                    children: (0, i.jsxs)("span", {
                      children: [
                        x &&
                          !O &&
                          (0, i.jsxs)(i.Fragment, {
                            children: [
                              M &&
                                (0, i.jsx)(s.Id, {
                                  options: { day: "numeric", month: "short" },
                                  locale: L,
                                  date: P,
                                }),
                              (0, i.jsx)(A.Z, { className: g().separator }),
                            ],
                          }),
                        R &&
                          (0, i.jsx)(a.h, {
                            standalone: !0,
                            semanticColor: "textBase",
                            dir: "auto",
                            onClick: D("subtitle"),
                            href: w?.compositeEntity,
                            children: R,
                          }),
                        C?.length &&
                          C.map((e, t) => [
                            t > 0 && (0, p.f)(L),
                            (0, i.jsx)(
                              y,
                              {
                                uri: e.uri,
                                name: e.name,
                                onClick: D("artist"),
                              },
                              e.uri
                            ),
                          ]),
                      ],
                    }),
                  },
                  b
                ),
              }),
            })
          );
        };
      },
      86526: function (e, t, n) {
        "use strict";
        n.d(t, {
          D: function () {
            return I;
          },
        });
        var i = n(85893),
          a = n(96797),
          r = n(94184),
          s = n.n(r),
          o = n(67294),
          l = n(9473),
          u = n(32091),
          c = n(60093),
          d = n(59188),
          p = n(5603),
          _ = n(28065),
          m = n(26112),
          N = n(20759),
          T = n(34115),
          E = n.n(T);
        let I = (e) => {
          let t,
            { showUpsell: n } = e,
            r = (0, l.v9)((e) => e.data.entity),
            { metadata: T } = (0, o.useMemo)(() => (0, c.C)(r), [r]),
            { playbackState: I, triggerPlaybackOperation: h } = (0,
            o.useContext)(d.C),
            y = I?.isPaused,
            f = (0, l.I0)(),
            A = (0, o.useCallback)((e) => f((0, _._)(e)), [f]),
            k = T?.title || "",
            g = (0, u.y)({ productName: "embed_player_p" }),
            O = (0, l.v9)(m.k);
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("h1", {
              className: s()(E().title, { [E().alignBelowUpsell]: n }),
              "data-testid": "entity-title",
              children: (0, i.jsx)(
                N.R,
                {
                  title: k,
                  speed: 0.2,
                  iterationCount: "single",
                  children: (0, i.jsx)(a.h, {
                    standalone: !0,
                    semanticColor: "textBase",
                    onClick:
                      ((t = "title"),
                      () => {
                        O && void 0 !== y && h((0, p.wO)()),
                          A({
                            action_type: "click",
                            action_intent: "deeplink",
                            action_item_id: t,
                          });
                      }),
                    href: g?.selectedEntity,
                    children: k,
                  }),
                },
                k
              ),
            }),
          });
        };
      },
      29119: function (e, t, n) {
        "use strict";
        n.d(t, {
          Q: function () {
            return er;
          },
        });
        var i = n(85893),
          a = n(54483),
          r = n.n(a),
          s = n(67294),
          o = n(9473),
          l = n(96701),
          u = n(15384);
        let c = () => {
          let [e, t] = (0, s.useState)(0);
          return {
            skipCount: e,
            incrementSkipCounter: (0, s.useCallback)(() => {
              t(e + 1);
            }, [e]),
            resetSkipCounter: (0, s.useCallback)(() => {
              t(0);
            }, []),
          };
        };
        var d = n(17033),
          p = n(59188),
          _ = n(23753),
          m = n(26112);
        let N = () => {
          let e =
              (0, o.v9)((e) => {
                let { machineState: t } = e;
                return t.playbackMode;
              }) === d.d.PREVIEW,
            { playbackState: t } = (0, s.useContext)(p.C),
            n = (0, _.k)(t),
            i = t?.isPaused,
            a = t?.duration,
            r = t?.hasContext,
            l = (0, o.v9)((e) => {
              let { machineState: t } = e;
              return t.currentPreviewTrackIndex;
            }),
            N = (0, o.v9)((e) => {
              let { data: t } = e;
              return !!t.entity?.isAudiobook;
            }),
            T = (0, o.v9)(m.k),
            E = (0, u.T)(),
            [I, h] = (0, s.useState)(!1),
            [y, f] = (0, s.useState)(!1),
            [A, k] = (0, s.useState)(l + 1),
            {
              skipCount: g,
              incrementSkipCounter: O,
              resetSkipCounter: v,
            } = c();
          return (
            (0, s.useEffect)(() => {
              (l === A || l === A - 2) && (k(() => A + 1), O()), k(() => l + 1);
            }, [l, O, A]),
            (0, s.useEffect)(() => {
              N &&
                a &&
                (r &&
                  null !== n &&
                  (n > 6e4 && g < 1 && (h(!0), O()), n > 0 && i && h(!0)),
                n === a && (h(!0), v())),
                r &&
                  null !== n &&
                  a &&
                  (e
                    ? (n > (2 * a) / 3 || (n > 0 && i) || 3 === g) &&
                      y !== E &&
                      (f(E), h(!0), v())
                    : T &&
                      (n > a / 2 || (n > 0 && i)) &&
                      y !== E &&
                      (f(E), h(!0)));
            }, [n, a, e, i, E, r, y, g, v, N, O, T]),
            { showUpsell: I, setShowUpsell: h }
          );
        };
        var T = n(28065),
          E = n(17296),
          I = n(28527),
          h = n(5996),
          y = n(94184),
          f = n.n(y),
          A = n(8950),
          k = n(13162),
          g = n(45019),
          O = n(52377),
          v = n.n(O);
        let S = () =>
          (0, i.jsxs)("div", {
            className: v().playerControlsWrapper,
            children: [
              (0, i.jsx)("div", {
                className: v().overflowMenuButtonWrapper,
                children: (0, i.jsx)(k.c, {}),
              }),
              (0, i.jsx)("div", {
                className: v().previewPlayPauseWrapper,
                children: (0, i.jsx)(g.J, {}),
              }),
            ],
          });
        var b = n(97164),
          R = n(72593),
          C = n(70285),
          P = n(86526),
          w = n(21481),
          L = n(43485),
          x = n(32091),
          D = n(95829),
          M = n(35775);
        let U = (e, t) =>
          (e < M.p4.landscape && t < M.Zo.small) || e < M.p4.large
            ? "small"
            : "medium";
        var G = n(17569),
          B = n(42657),
          j = n.n(B);
        let F = () => {
            let e = (0, x.y)({ productName: "embed_player_p" }),
              t = (0, h.NT)(),
              { width: n, height: a } = s.useContext(D.h),
              r = (0, o.I0)(),
              l = async () => {
                r(
                  (0, T._)({
                    action_type: "click",
                    action_intent: "deeplink",
                    action_item_id: "get-spotify",
                  })
                ),
                  (0, G.M)({ url: e.embeddedEntity });
              };
            return (0, i.jsx)("div", {
              className: j().getSpotifyButton,
              children: (0, i.jsx)(w.D, {
                size: U(a, n),
                colorSet: "invertedLight",
                onClick: l,
                children: (0, i.jsx)(L.x, {
                  className: j().buttonText,
                  variant: "titleSmall",
                  children: t(
                    "get_spotify",
                    "Get Spotify",
                    "A button the user can press to download / get the Spotify application"
                  ),
                }),
              }),
            });
          },
          W = (e) => {
            try {
              let t = new URL(e);
              return (
                t.searchParams.set("nd", "1"),
                (t.pathname = t.pathname.startsWith("/__noul__")
                  ? t.pathname
                  : `__noul__${t.pathname}`),
                t.toString()
              );
            } catch {
              throw Error("Invalid URL");
            }
          },
          V = () => {
            let e = (0, x.y)({ productName: "embed_player_p" }),
              t = (0, o.v9)((e) => e.settings.isMobile),
              n = (0, h.NT)(),
              { width: a, height: r } = s.useContext(D.h),
              l = (0, o.I0)();
            return (0, i.jsx)("div", {
              className: j().getSpotifyButton,
              children: (0, i.jsx)(w.D, {
                size: U(r, a),
                colorSet: "invertedLight",
                onClick: () => {
                  l(
                    (0, T._)({
                      action_type: "click",
                      action_intent: "deeplink",
                      action_item_id: "buy-this-audiobook",
                    })
                  ),
                    (0, G.M)({
                      url: t ? W(e.embeddedEntity) : e.embeddedEntity,
                    });
                },
                children: (0, i.jsx)(L.x, {
                  className: j().buttonText,
                  variant: "titleSmall",
                  children: n(
                    "audiobook.embed.buy-this-audiobook",
                    "Buy this audiobook",
                    "An upsell button that a user can click to redirect them to the Spotify App and buy the book"
                  ),
                }),
              }),
            });
          };
        var H = n(96494),
          Y = n(38343);
        let K = () => {
          let e = (0, o.v9)((e) => e.data.entity),
            t = (0, o.v9)((e) => e.settings.session.isAnonymous),
            n = (0, x.y)({ productName: "embed_player_p" }),
            a = (0, h.NT)(),
            { width: r, height: l } = s.useContext(D.h),
            u = (0, o.I0)(),
            [c, d] = (0, Y.Z)(e.relatedEntityUri),
            p = async () => {
              t
                ? (u(
                    (0, T._)({
                      action_type: "click",
                      action_intent: "deeplink",
                      action_item_id: "follow",
                    })
                  ),
                  (0, G.M)({ url: n.compositeEntity }))
                : (u(
                    (0, T._)({
                      action_type: "click",
                      action_intent: c?.[e.relatedEntityUri]
                        ? "unfollow"
                        : "follow",
                    })
                  ),
                  await d(!c?.[e.relatedEntityUri]));
            };
          return (0, i.jsx)("div", {
            className: j().getSpotifyButton,
            children: (0, i.jsx)(w.D, {
              size: U(l, r),
              colorSet: "invertedLight",
              onClick: p,
              children: (0, i.jsx)(L.x, {
                className: j().buttonText,
                variant: "titleSmall",
                children:
                  (e.type === H.JM.EPISODE || e.type === H.JM.SHOW) &&
                  c?.[e.relatedEntityUri]
                    ? a(
                        "following",
                        "Following",
                        "Button`s text that adds an item to the user`s library"
                      )
                    : a(
                        "follow",
                        "Follow",
                        "Button`s text that removes an item to the user`s library"
                      ),
              }),
            }),
          });
        };
        var q = n(8333),
          X = n.n(q);
        let J = (e, t, n, i, a, r) => {
            switch (e) {
              case H.JM.EPISODE:
              case H.JM.SHOW:
                if (n)
                  return t(
                    "audiobook.embed.upsell_cta",
                    "Hooked? Take this audiobook everywhere you go, on Spotify",
                    "Text displayed on an upsell menu after a user has listened to 60 seconds of an audiobook sample."
                  );
                if (i && !a)
                  return t(
                    "spe.podcast_full_upsell_cta",
                    "Discover even more from {podcastName}",
                    "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview.",
                    { podcastName: r }
                  );
                return t(
                  "spe.upsell_cta",
                  "Discover even more podcasts on Spotify",
                  "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview."
                );
              case H.JM.TRACK:
                return t(
                  "spe.track_upsell_cta",
                  "Listen to the full track and millions more on Spotify",
                  "Text displayed after user has listened to 20 seconds of a 30 sec track preview."
                );
              case H.JM.PLAYLIST:
              default:
                return t(
                  "spe.track_list_upsell",
                  "Listen to these tracks & millions more on Spotify",
                  "Text displayed after user has listened to 20 seconds of a 30 sec of track list preview."
                );
            }
          },
          $ = () => {
            let e = (0, h.NT)(),
              t = (0, o.v9)((e) => e.data.entity.type),
              n = (0, o.v9)(
                (t) =>
                  t.data.entity?.subtitle ||
                  e(
                    "spe.upsell_cta",
                    "Discover even more podcasts on Spotify",
                    "Text displayed after user has listened to 20 seconds of a 30 sec podcast preview."
                  )
              ),
              a = (0, o.v9)((e) => e.data.entity.isAudiobook || !1),
              r = (0, o.v9)((e) => e.machineState.playbackMode) === d.d.PREVIEW,
              s = (0, o.v9)(m.k);
            return (0, i.jsx)(L.x, {
              variant: "titleSmall",
              className: f()(X().text),
              id: "dialogUpsellTitle",
              children: J(t, e, a, s, r, n),
            });
          };
        var z = n(62038),
          Q = n.n(z),
          Z = n(75790),
          ee = n.n(Z);
        let et = () =>
            (0, i.jsx)("div", { className: ee().backgroundCoverArt }),
          en = (e) => {
            let { onClose: t } = e,
              n = (0, h.NT)(),
              a = (0, o.v9)((e) => {
                let { data: t } = e;
                return t.entity?.isAudiobook;
              }),
              r =
                (0, o.v9)((e) => {
                  let { machineState: t } = e;
                  return t.playbackMode;
                }) === d.d.PREVIEW,
              s = (0, o.v9)(m.k),
              l = (0, o.v9)((e) => {
                let { data: t } = e;
                return !!t.entity?.trackList;
              }),
              u = n(
                "close_button_action",
                "Close",
                "Accessibility label for a close button"
              );
            return (0, i.jsxs)("div", {
              className: f()(Q().fullscreenWrapper, {
                [Q().playlistContainer]: l,
              }),
              children: [
                (0, i.jsxs)("div", {
                  className: Q().ctaWrapper,
                  children: [
                    (0, i.jsx)(et, {}),
                    (0, i.jsxs)("div", {
                      className: Q().content,
                      children: [
                        (0, i.jsx)($, {}),
                        a
                          ? (0, i.jsx)(V, {})
                          : s && !r
                          ? (0, i.jsx)(K, {})
                          : (0, i.jsx)(F, {}),
                        (0, i.jsx)(E.o, {
                          semanticColor: "textBase",
                          iconOnly: I.k,
                          title: u,
                          className: Q().closeButton,
                          onClick: t,
                          "aria-label": u,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: Q().footerWrapper,
                  children: [
                    (0, i.jsx)("div", {
                      className: Q().coverArtWrapper,
                      children: (0, i.jsx)(A.D, {
                        className: Q().coverArtUpsell,
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: f()(Q().metadataWrapper),
                      children: [
                        (0, i.jsx)(P.D, {}),
                        (0, i.jsxs)("span", {
                          className: f()(Q().labelsAndSubtitle),
                          children: [(0, i.jsx)(R.$, {}), (0, i.jsx)(C.Q, {})],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: f()(Q().playerControlsWrapper),
                      children:
                        r && !a ? (0, i.jsx)(b.H, {}) : (0, i.jsx)(S, {}),
                    }),
                  ],
                }),
              ],
            });
          };
        var ei = n(51103),
          ea = n.n(ei);
        let er = () => {
          let e = (0, o.v9)((e) => {
              let { machineState: t } = e;
              return t.playbackMode;
            }),
            { showUpsell: t, setShowUpsell: n } = N(),
            a = (0, o.I0)();
          (0, s.useEffect)(() => {
            t &&
              a(
                (0, T._)({ action_intent: "open-upsell", action_type: "view" })
              );
          }, [a, t]);
          let u = (0, s.useRef)(null);
          return e === d.d.UNKNOWN
            ? null
            : (0, i.jsx)(l.Z, {
                nodeRef: u,
                in: t,
                mountOnEnter: !0,
                unmountOnExit: !0,
                timeout: 200,
                classNames: {
                  enter: ea().transition_enter,
                  enterActive: ea().transition_enterActive,
                  exit: ea().transition_exit,
                  exitActive: ea().transition_exitActive,
                },
                children: (0, i.jsx)(r(), {
                  focusTrapOptions: { initialFocus: !1 },
                  children: (0, i.jsx)("div", {
                    ref: u,
                    role: "dialog",
                    "aria-labelledby": "dialogUpsellTitle",
                    className: ea().upsellContentContainer,
                    children: (0, i.jsx)(en, {
                      onClose: () => {
                        n(!1),
                          a(
                            (0, T._)({
                              action_type: "click",
                              action_intent: "close-upsell",
                            })
                          );
                      },
                    }),
                  }),
                }),
              });
        };
      },
      10427: function (e, t, n) {
        "use strict";
        n.d(t, {
          S: function () {
            return i;
          },
        });
        let i = "https://open.spotify.com";
      },
      5030: function (e, t, n) {
        "use strict";
        n.d(t, {
          p: function () {
            return o;
          },
        });
        var i = n(67294),
          a = n(9473),
          r = n(28065),
          s = n(65298);
        function o() {
          let e = (0, a.I0)(),
            t = (0, i.useCallback)(
              () =>
                "ontouchstart" in document.documentElement
                  ? "touchstart"
                  : "mouseover",
              []
            ),
            n = (0, i.useCallback)(() => {
              document.removeEventListener(t(), n),
                e((0, s.j)()),
                e((0, r._)({ action_type: "interacted", action_intent: t() }));
            }, [e, t]);
          (0, i.useEffect)(
            () => (
              e((0, s.s)()),
              document.addEventListener(t(), n),
              () => {
                document.removeEventListener(t(), n);
              }
            ),
            [e, n, t]
          );
        }
      },
      15384: function (e, t, n) {
        "use strict";
        n.d(t, {
          T: function () {
            return o;
          },
        });
        var i = n(67294),
          a = n(9473),
          r = n(59188),
          s = n(17033);
        let o = () => {
          let e = (0, a.v9)((e) => {
              let { machineState: t } = e;
              return t.playbackMode;
            }),
            t = (0, a.v9)((e) => {
              let { data: t } = e;
              return t.entity;
            }),
            { playbackState: n } = (0, i.useContext)(r.C);
          if ("artist" === t.type && e === s.d.FULL) {
            let e = t.trackList;
            return e?.find((e) => e.uri === n?.item?.uri)?.uid;
          }
          return (
            (e === s.d.FULL ? n?.item?.uid : n?.context?.metadata?.uid) ??
            void 0
          );
        };
      },
      32091: function (e, t, n) {
        "use strict";
        n.d(t, {
          U: function () {
            return i;
          },
          y: function () {
            return p;
          },
        });
        var i,
          a = n(96494),
          r = n(67294),
          s = n(9473),
          o = n(10095),
          l = n(59188),
          u = n(23753);
        let c = (e) => {
          switch (e) {
            case "episode":
            case "track":
              return !1;
            default:
              return !0;
          }
        };
        (i || (i = {})).ADD_TO_LIBRARY = "1";
        let d = (e, t, n, i) => {
          i?.playbackResumeSeconds &&
            e.searchParams.set("t", i.playbackResumeSeconds.toString()),
            i?.intent && "1" === i.intent && e.searchParams.set("intent", "1");
          let a = new URL(
            "undefined" != typeof location && location.href
              ? location.href
              : "https://open.spotify.com"
          );
          e.searchParams.has("utm_source") ||
            e.searchParams.set("utm_source", t),
            e.searchParams.has("utm_medium") ||
              e.searchParams.set("utm_medium", n ? "mobile" : "desktop");
          let r = a.searchParams.get("utm_campaign");
          return r && e.searchParams.set("utm_campaign", r), e;
        };
        function p(e) {
          let { productName: t, intent: n } = e,
            { playbackState: i } = (0, r.useContext)(l.C),
            p = (0, s.v9)((e) => e.data.entity),
            _ = (0, s.v9)((e) => e.settings.entityContext),
            m = (0, s.v9)((e) => e.data.embeded_entity_uri),
            N = (0, s.v9)((e) => e.settings.isMobile),
            T = Math.floor(((0, u.k)(i) ?? 0) / 1e3),
            [E, I] = (0, r.useState)({
              selectedEntity: "",
              compositeEntity: "",
              embeddedEntity: "",
              cta: "",
            }),
            h = p?.isAudiobook || p?.isTrailer;
          return (
            (0, r.useEffect)(() => {
              let e = h ? p.relatedEntityUri : p?.uri,
                i = c(_) ? m : p?.relatedEntityUri,
                r = (e) => (e ? (0, a.EC)(e) : null) ?? void 0,
                s = {
                  compositeEntity: {
                    deepLink: d((0, o.bW)(r(i), !1), t, N, {
                      intent: n,
                    }).toString(),
                    storeLink: d((0, o.iZ)(r(i), !1), t, N, {
                      intent: n,
                    }).toString(),
                  },
                  selectedEntity: {
                    deepLink: d((0, o.bW)(r(e), !1), t, N, {
                      playbackResumeSeconds: T,
                      intent: n,
                    }).toString(),
                    storeLink: d((0, o.iZ)(r(e), !1), t, N, {
                      playbackResumeSeconds: T,
                      intent: n,
                    }).toString(),
                  },
                },
                l = c(_) ? s.compositeEntity : s.selectedEntity;
              I({
                selectedEntity: s.selectedEntity.deepLink,
                compositeEntity: s.compositeEntity.deepLink,
                embeddedEntity: l.deepLink,
                cta: l.storeLink,
              });
            }, [t, p, _, m, T, N, h, n]),
            E
          );
        }
      },
      47229: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return s;
          },
        });
        var i = n(67294),
          a = n(95829),
          r = n(35775);
        function s() {
          let { height: e } = i.useContext(a.h);
          return {
            isCompactLegacy: !!(e && e < r.p4.landscape),
            isCompactTracklist: !!(e && e < r.p4.large),
          };
        }
      },
      38343: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var i = n(67294),
          a = n(9473),
          r = n(56361),
          s = n(44096);
        function o(e) {
          let { instance: t } = (0, i.useContext)(r.H),
            n = t?.containsSync(e),
            o = n ? { [e]: n } : void 0,
            [l, u] = (0, i.useState)(o),
            c = (0, a.v9)((e) => e.settings.session.isAnonymous),
            d = l && void 0 !== l[e],
            p = (0, i.useCallback)(
              async (n) => {
                n ? await t?.add(e) : await t?.remove(e);
              },
              [e, t]
            );
          return (
            (0, i.useEffect)(() => {
              let n;
              if (t && !c) {
                if (d) {
                  let i = (t) => {
                    let { data: n } = t;
                    e === n.uri && u((t) => ({ ...t, [e]: n.isInLibrary }));
                  };
                  t.getEvents().addListener(s.E.UPDATE_ITEM, i),
                    (n = () => {
                      t.getEvents().removeListener(s.E.UPDATE_ITEM, i);
                    });
                } else
                  t.contains(e).then((t) => {
                    let [n] = t;
                    return u((t) => (t ? { ...t, [e]: n } : { [e]: n }));
                  });
              }
              return c && u((t) => ({ ...t, [e]: !1 })), n;
            }, [t, c, e, d]),
            [l, p]
          );
        }
      },
      5383: function (e, t, n) {
        "use strict";
        var i, a;
        n.d(t, {
          f: function () {
            return r;
          },
        }),
          ((a = i || (i = {})).AR = "، "),
          (a.FA = "، "),
          (a.EN = ", ");
        let r = (e) => {
          switch (e) {
            case "ar":
            case "fa":
              return "، ";
            default:
              return ", ";
          }
        };
      },
      23392: function (e, t, n) {
        "use strict";
        let i;
        n.d(t, {
          b: function () {
            return T;
          },
        });
        var a = n(79340),
          r = n(54751),
          s = n(28599),
          o = n.n(s),
          l = n(54098),
          u = n(34139);
        let c = n.n(u)()(l.fetch);
        async function d(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e4,
            i = new (o())(),
            a = i.signal,
            s = setTimeout(() => i.abort(), n);
          return (t && void 0 !== t.retries && t.retries > 0 ? c : l.fetch)(e, {
            ...t,
            signal: a,
          })
            .then((e) => (clearTimeout(s), e))
            .catch((i) => {
              if ("AbortError" === i.name)
                throw new r.V$({
                  timeout: n,
                  url: e,
                  method: t?.method ?? "get",
                });
              throw (clearTimeout(s), i);
            });
        }
        class p {
          constructor(e, t) {
            return (
              (this.method = e),
              (this.url = t),
              (this.postData = null),
              (this.queryParameters = void 0),
              (this.responseType = "json"),
              (this._retryOptions = null),
              (this._headers = {}),
              (this._includeCredentials = !1),
              this
            );
          }
          withQueryParameters(e) {
            this.queryParameters = e;
          }
          withResponseType(e) {
            this.responseType = e;
          }
          withPostData(e) {
            this.postData = e;
          }
          withRetries(e) {
            let { retries: t, retryOn: n, retryDelay: i } = e;
            this._retryOptions = { retries: t, retryDelay: i, retryOn: n };
          }
          addHeader(e, t) {
            return (this._headers[e] = t), this;
          }
          includeCredentials() {
            return (this._includeCredentials = !0), this;
          }
          async send() {
            let e;
            this.postData &&
              (e = this._headers["Content-Type"]?.startsWith(
                "application/json;charset=UTF-8"
              )
                ? JSON.stringify(this.postData)
                : this.postData);
            let t = new URLSearchParams(this.queryParameters).toString();
            return d(`${this.url}${t ? `?${t}` : ""}`, {
              method: this.method,
              body: e,
              credentials: this._includeCredentials ? "include" : void 0,
              headers: {
                "Content-Type":
                  "text" === this.responseType
                    ? "text/plain"
                    : "application/json",
                ...this._headers,
              },
              ...this._retryOptions,
            })
              .then(async (e) => {
                if (!e.ok) {
                  let t = r.mk.fromResponse(e, this.method || "GET");
                  throw ((0, a.ck)(t, new URL(this.url).hostname), t);
                }
                return {
                  body:
                    "text" === this.responseType
                      ? await e.text()
                      : await e.json(),
                  status: e.status,
                };
              })
              .catch((e) => {
                throw e;
              });
          }
        }
        class _ {
          constructor() {
            (this._accessToken = null),
              (this._market = ""),
              (this._headers = []),
              (this._globalRequestHeaders = []),
              (this._shouldSendMarket = !0),
              (this._shouldSendGlobalHeaders = !0),
              (this._locale = null),
              (this._retryStatusCodes = [503]),
              (this._retryDelay = 1e3),
              (this._shouldSendLocale = !1),
              (this._shouldSendAuthorization = !0),
              (this._host = ""),
              (this.path = ""),
              (this.responseType = "json"),
              (this.queryParameters = void 0),
              (this._method = "GET"),
              (this.jsonContentType = !1),
              (this.body = null),
              (this._endpointIdentifier = null),
              (this._startTimestamp = null),
              (this._includeCredentials = !1);
          }
          static setRequestImplementation(e) {
            i = e;
          }
          getRequestImplementation() {
            return i;
          }
          set accessToken(e) {
            this._accessToken = e;
          }
          get market() {
            return this._market;
          }
          set market(e) {
            this._market = e;
          }
          get locale() {
            return this._locale;
          }
          set locale(e) {
            this._locale = e;
          }
          get globalRequestHeaders() {
            return this._globalRequestHeaders;
          }
          set globalRequestHeaders(e) {
            this._globalRequestHeaders = e;
          }
          get startTimestamp() {
            return this._startTimestamp;
          }
          get host() {
            return this._host;
          }
          get method() {
            return this._method;
          }
          get endpointIdentifier() {
            return this._endpointIdentifier;
          }
          withHost(e) {
            return (this._host = e), this;
          }
          withPath(e) {
            return (this.path = e), this;
          }
          withResponseType(e) {
            return (this.responseType = e), this;
          }
          withEndpointIdentifier(e) {
            return (this._endpointIdentifier = e), this;
          }
          withQueryParameters(e) {
            return (this.queryParameters = e), this;
          }
          withBody(e) {
            return (this.body = e), this;
          }
          withMethod(e) {
            return (this._method = e), this;
          }
          withRetries(e) {
            let { retries: t, retryOn: n, retryDelay: i } = e;
            return (
              (this._retryCount = t),
              n && (this._retryStatusCodes = n),
              i && (this._retryDelay = i),
              this
            );
          }
          withoutMarket() {
            return (this._shouldSendMarket = !1), this;
          }
          withoutGlobalHeaders() {
            return (this._shouldSendGlobalHeaders = !1), this;
          }
          withoutAuthorization() {
            return (this._shouldSendAuthorization = !1), this;
          }
          withLocale(e) {
            return (this._shouldSendLocale = !0), e && (this._locale = e), this;
          }
          withJsonContentType() {
            return (this.jsonContentType = !0), this;
          }
          withHeaders(e) {
            return (this._headers = e), this;
          }
          withCredentials() {
            return (this._includeCredentials = !0), this;
          }
          onBeforeSend(e) {}
          onAfterSend(e) {}
          async send() {
            let e = new i(this.method, `${this._host}${this.path}`);
            this._shouldSendMarket &&
              this.market &&
              (this.queryParameters = {
                ...this.queryParameters,
                market: this.market,
              }),
              this._shouldSendLocale &&
                this.locale &&
                (this.queryParameters = {
                  ...this.queryParameters,
                  locale: this.locale,
                }),
              this.locale && e.addHeader("Accept-Language", this.locale),
              this._retryCount &&
                e.withRetries({
                  retries: this._retryCount,
                  retryOn: this._retryStatusCodes,
                  retryDelay: this._retryDelay,
                }),
              e.withQueryParameters(this.queryParameters),
              e.withResponseType(this.responseType),
              this._shouldSendAuthorization &&
                this._accessToken &&
                e.addHeader("Authorization", `Bearer ${this._accessToken}`),
              e.addHeader("Accept", "application/json"),
              this._includeCredentials && e.includeCredentials(),
              this._shouldSendGlobalHeaders &&
                this._globalRequestHeaders.length > 0 &&
                this._globalRequestHeaders.forEach((t) => {
                  let [n, i] = t;
                  e.addHeader(n, i);
                });
            for (let t = 0; t < this._headers.length; t++) {
              let n = this._headers[t];
              e.addHeader(n.key, n.value);
            }
            this.jsonContentType &&
              e.addHeader("Content-Type", "application/json;charset=UTF-8"),
              this.body && e.withPostData(this.body);
            try {
              this.onBeforeSend(e);
            } catch (e) {
              return Promise.reject(e);
            }
            return (
              (this._startTimestamp = Date.now()),
              e
                .send()
                .then((e) => (this.onAfterSend(), e))
                .catch((e) => {
                  throw (this.onAfterSend(e), e);
                })
            );
          }
        }
        class m {
          constructor(e) {
            (this._accessToken = null),
              (this._market = ""),
              (this._locale = ""),
              (this._globalRequestHeaders = []),
              (this._RequestImplementation = e);
          }
          get accessToken() {
            return this._accessToken;
          }
          set accessToken(e) {
            this._accessToken = e;
          }
          get globalRequestHeaders() {
            return this._globalRequestHeaders;
          }
          set globalRequestHeaders(e) {
            this._globalRequestHeaders = e;
          }
          get market() {
            return this._market;
          }
          set market(e) {
            this._market = e;
          }
          get locale() {
            return this._locale;
          }
          set locale(e) {
            this._locale = e;
          }
          resetPendingRequests() {}
          build() {
            _.setRequestImplementation(this._RequestImplementation);
            let e = new _();
            return (
              (e.accessToken = this._accessToken),
              (e.market = this.market),
              (e.locale = this.locale),
              (e.globalRequestHeaders = this.globalRequestHeaders),
              e
            );
          }
        }
        let N = null;
        class T {
          static setSession(e) {
            if (!e) return;
            let { accessToken: t } = e,
              n = this.getInstance();
            (n.accessToken = t), t || n.resetPendingRequests();
          }
          static setLocale(e) {
            this.getInstance().locale = e;
          }
          static setGlobalRequestHeaders(e) {
            this.getInstance().globalRequestHeaders = e;
          }
          static setMarket(e) {
            this.getInstance().market = e;
          }
          static resetInstance() {
            N = null;
          }
          static getInstance() {
            return N || (N = this.createNew()), N;
          }
          static createNew() {
            return new m(p);
          }
        }
      },
      56361: function (e, t, n) {
        "use strict";
        n.d(t, {
          H: function () {
            return i;
          },
        });
        let i = (0, n(67294).createContext)({ instance: null });
      },
      44096: function (e, t, n) {
        "use strict";
        n.d(t, {
          E: function () {
            return i;
          },
          S: function () {
            return r;
          },
        });
        var i,
          a = n(28611);
        (i || (i = {})).UPDATE_ITEM = "update_item";
        class r extends a.vp {}
      },
      33254: function (e, t, n) {
        "use strict";
        let i;
        n.d(t, {
          X: function () {
            return a;
          },
          u: function () {
            return r;
          },
        });
        let a = () => {
            if (!i) throw Error("Config data not set");
            return i;
          },
          r = (e) => {
            i = e;
          };
      },
      10095: function (e, t, n) {
        "use strict";
        n.d(t, {
          bW: function () {
            return r;
          },
          iZ: function () {
            return s;
          },
        });
        var i = n(10427),
          a = n(33254);
        function r(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = new URL(
              "undefined" != typeof location && location.href
                ? location.href
                : i.S
            ),
            r = null;
          e
            ? ((r = new URL(e.toURL())),
              t &&
                n.searchParams.forEach((e, t) => {
                  r.searchParams.set(t, e);
                }))
            : ((r = n), t || (r.search = "")),
            r.searchParams.delete("nd"),
            r.searchParams.delete("fallback"),
            r.searchParams.set("go", "1");
          let s = (0, a.X)();
          return (
            "string" == typeof s?.correlationId &&
              r.searchParams.append("sp_cid", s.correlationId),
            r
          );
        }
        function s(e, t) {
          let n = r(e, t);
          return n.searchParams.set("fallback", "getapp"), n;
        }
      },
      60093: function (e, t, n) {
        "use strict";
        n.d(t, {
          C: function () {
            return i;
          },
        });
        let i = (e) => {
          if (!e) throw Error("Error: Entity Unavailable");
          let t = e.uri,
            n = {};
          return (
            ((n.title = e.title),
            (n.subtitle = e.subtitle),
            (n.duration = (e.duration ?? 0)?.toString()),
            (n.audioPreviewUrl = e.audioPreview?.url ?? void 0),
            (n.videoPreviewUrl = e.videoPreview?.url ?? void 0),
            (n.explicit = e.isExplicit ? "true" : "false"),
            "relatedEntityUri" in e)
              ? (n.releaseDate = e.releaseDate?.isoString)
              : (n.uid = e.uid),
            { uri: t, metadata: n }
          );
        };
      },
      73638: function (e, t, n) {
        "use strict";
        n.d(t, {
          rg: function () {
            return r;
          },
          Bc: function () {
            return u;
          },
        });
        var i,
          a,
          r,
          s,
          o = n(28611);
        class l {
          constructor(e = new o.vp()) {
            (this._emitter = e), (this._emitter = e || new o.vp());
          }
          addListener(e, t, n) {
            return this._emitter.addListener(e, t, n), this;
          }
          removeListener(e, t, n) {
            return this._emitter.removeListener(e, t, n), this;
          }
          onAddListener(e, t) {
            return this._emitter.onAddListener(e, t), this;
          }
          onRemoveListener(e, t) {
            return this._emitter.onRemoveListener(e, t), this;
          }
          emit(e, t) {
            return this._emitter.emit(e, t);
          }
          emitSync(e, t) {
            return this._emitter.emitSync(e, t);
          }
        }
        ((i = r || (r = {})).TRACK_LOADED = "track_loaded"),
          (i.TRACK_ENDED = "track_ended"),
          (i.UPDATE = "update"),
          (i.ERROR = "error"),
          (i.ACTION = "action"),
          (i.QUEUE_ACTION = "queue_action"),
          (i.QUEUE_ACTION_COMPLETE = "queue_action_complete"),
          (i.QUEUE_UPDATE = "queue_update"),
          (i.CONTEXT_WRAPAROUND = "context_wraparound"),
          ((a = s || (s = {})).PLAY = "play"),
          (a.PAUSE = "pause"),
          (a.RESUME = "resume"),
          (a.SKIP_TO_NEXT = "skipToNext"),
          (a.SKIP_TO_PREVIOUS = "skipToPrevious");
        class u extends l {
          emitPlaySync(e, t, n) {
            let { defaultPrevented: i } = this.emitSync("action", {
              action: "play",
              context: e,
              origin: t,
              options: n,
            });
            return i;
          }
          emitPauseSync() {
            let { defaultPrevented: e } = this.emitSync("action", {
              action: "pause",
            });
            return e;
          }
          emitResumeSync() {
            let { defaultPrevented: e } = this.emitSync("action", {
              action: "resume",
            });
            return e;
          }
          emitSkipToNextSync() {
            let { defaultPrevented: e } = this.emitSync("action", {
              action: "skipToNext",
            });
            return e;
          }
          emitSkipToPreviousSync() {
            let { defaultPrevented: e } = this.emitSync("action", {
              action: "skipToPrevious",
            });
            return e;
          }
        }
      },
      59188: function (e, t, n) {
        "use strict";
        n.d(t, {
          C: function () {
            return s;
          },
          l: function () {
            return o;
          },
        });
        var i = n(85893),
          a = n(67294),
          r = n(32515);
        let s = (0, a.createContext)({
            playbackState: null,
            triggerPlaybackOperation: () => {},
          }),
          o = (e) => {
            let { children: t, reduxStore: n, playerAPI: a } = e,
              { playbackState: o, triggerPlaybackOperation: l } = (0, r.t)(
                a,
                n
              );
            return (0, i.jsx)(s.Provider, {
              value: { playbackState: o, triggerPlaybackOperation: l },
              children: t,
            });
          };
      },
      5603: function (e, t, n) {
        "use strict";
        n.d(t, {
          $9: function () {
            return m;
          },
          O7: function () {
            return T;
          },
          WT: function () {
            return u;
          },
          Xh: function () {
            return a;
          },
          ax: function () {
            return d;
          },
          ez: function () {
            return c;
          },
          hY: function () {
            return r;
          },
          qi: function () {
            return N;
          },
          r0: function () {
            return _;
          },
          v4: function () {
            return o;
          },
          vR: function () {
            return p;
          },
          wO: function () {
            return l;
          },
          xu: function () {
            return s;
          },
        });
        var i = n(33829);
        function a() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.yp.AUDIO;
          return { type: i.Nv, mediaType: e };
        }
        function r() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : i.yp.AUDIO;
          return { type: i.NH, mediaType: e };
        }
        function s(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : i.yp.AUDIO;
          return { type: i.Bb, index: e, mediaType: t };
        }
        function o() {
          return { type: i.gk };
        }
        function l() {
          return { type: i.E7 };
        }
        function u() {
          return { type: i.wh };
        }
        function c() {
          return { type: i.Eb };
        }
        function d() {
          return { type: i.ry };
        }
        function p() {
          return { type: i.pe };
        }
        function _() {
          return { type: i.Q2 };
        }
        function m() {
          return { type: i.ot };
        }
        function N(e) {
          return { type: i.sV, index: e };
        }
        function T(e) {
          return { type: i.tG, time: e };
        }
      },
      32515: function (e, t, n) {
        "use strict";
        n.d(t, {
          t: function () {
            return I;
          },
        });
        var i = n(67294),
          a = n(73638),
          r = n(17033);
        let s = (e) => {
          let t = new URL(e.href).searchParams.get("t");
          if (t) {
            let e = parseInt(t, 10);
            if (e > 0) return e;
          }
          return null;
        };
        var o = n(33254),
          l = n(60093),
          u = n(33829),
          c = n(5603);
        let d = () => ({
            featureIdentifier: "embed",
            featureVersion: "3",
            referrerIdentifier: "PlayerStub_UnknownReferrer",
            restrictionIdentifier: (0, o.X)().restrictionId
              ? (0, o.X)().restrictionId
              : void 0,
          }),
          p = (e, t, n, i) =>
            t === r.d.PREVIEW
              ? {
                  ...e,
                  metadata: {
                    ...e.metadata,
                    externalResolvedUrl:
                      i === u.yp.AUDIO
                        ? e.metadata?.audioPreviewUrl
                        : e.metadata?.videoPreviewUrl,
                  },
                }
              : {
                  ...e,
                  metadata: { ...e.metadata, useAuthEndpoint: n ? "yes" : "" },
                },
          _ = (e, t) =>
            t.mediaType !== u.yp.VIDEO
              ? e
              : { ...e, metadata: { ...e.metadata, mediaType: u.yp.VIDEO } },
          m = (e, t) => e?.findIndex((e, n) => n > t && e.isPlayable) ?? -1,
          N = (e, t) => {
            for (let n = t - 1; n >= 0; n--) if (e && e[n].isPlayable) return n;
            return -1;
          },
          T = (e, t, n) =>
            e?.trackList && t === r.d.PREVIEW
              ? (0, l.C)(e.trackList[n ?? 0])
              : (0, l.C)(e);
        var E = function e(t, n, i) {
          let {
              settings: a,
              machineState: o,
              data: { entity: l, defaultAudioFileObject: E },
            } = n.getState(),
            I = a.session.isAnonymous,
            h = o.playbackMode === r.d.PREVIEW,
            y = T(l, o.playbackMode),
            f = t.getState();
          switch (i.type) {
            case u.Nv:
              if (l?.trackList && h && !f?.hasContext) {
                let i = m(l?.trackList, -1);
                o.currentPreviewTrackIndex === l?.trackList.length - 1
                  ? e(t, n, (0, c.xu)(i))
                  : e(t, n, (0, c.xu)(o.currentPreviewTrackIndex));
              } else if (f?.hasContext && f?.isPaused === !1) t.pause();
              else if (f?.hasContext && f?.isPaused === !0) t.resume();
              else {
                let e = s(window.location),
                  n = p(_(y, i), o.playbackMode, !I, i.mediaType);
                t.play(n, d(), { seekTo: e ? 1e3 * e : void 0 }, E);
              }
              break;
            case u.NH:
              {
                let e = s(window.location),
                  n = p(_(y, i), o.playbackMode, !I, i.mediaType);
                t.play(n, d(), { seekTo: e ? 1e3 * e : void 0 }, E);
              }
              break;
            case u.Bb:
              if (h) {
                let e = p(
                  _(T(l, o.playbackMode, i.index), i),
                  o.playbackMode,
                  !I,
                  i.mediaType
                );
                t.play(e, d(), {}, E), n.dispatch((0, c.qi)(i.index));
              } else {
                let e = p(_(y, i), o.playbackMode, !I, i.mediaType);
                t.play(e, d(), { skipTo: { index: i.index } }, E);
              }
              break;
            case u.gk:
              t.resume();
              break;
            case u.E7:
              t.pause();
              break;
            case u.tG:
              if (i.time && Number.isFinite(i.time)) t.seekTo(i.time);
              else if (i.percentage && Number.isFinite(i.percentage)) {
                let e = f?.duration || Number(y.metadata?.duration);
                t.seekTo(i.percentage * e);
              }
              break;
            case u.Eb:
              t.seekForward(15e3);
              break;
            case u.wh:
              t.seekBackward(15e3);
              break;
            case u.pe:
              if (h) {
                let i = l?.trackList?.length ?? 0;
                if (o.currentPreviewTrackIndex < i - 1) {
                  let i = m(l?.trackList, o.currentPreviewTrackIndex);
                  i > 0 && e(t, n, (0, c.xu)(i));
                } else t.skipToNext();
              } else t.skipToNext();
              break;
            case u.ry:
              if (h) {
                if (
                  f &&
                  null !== f.positionAsOfTimestamp &&
                  (f.positionAsOfTimestamp > 3e3 ||
                    0 === o.currentPreviewTrackIndex)
                )
                  t.seekTo(0);
                else if (o.currentPreviewTrackIndex > 0) {
                  let i = N(l?.trackList, o.currentPreviewTrackIndex);
                  i >= 0 && e(t, n, (0, c.xu)(i));
                }
              } else t.skipToPrevious();
              break;
            case u.Q2:
              t.setVolume(0);
              break;
            case u.ot:
              t.setVolume(1);
          }
        };
        let I = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            [o, l] = (0, i.useState)(n),
            [u, d] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            let e = s(window.location);
            e && l({ ...n, positionAsOfTimestamp: 1e3 * e });
          }, [n]);
          let p = (0, i.useCallback)((n) => e && E(e, t, n), [e, t]),
            {
              machineState: { playbackMode: _, currentPreviewTrackIndex: N },
              data: { entity: T },
            } = t.getState();
          return (
            (0, i.useEffect)(() => {
              if (
                u &&
                _ === r.d.PREVIEW &&
                T?.trackList &&
                T.trackList.length > N + 1
              ) {
                let e = m(T?.trackList, N);
                e > 0 && (d(!1), p((0, c.xu)(e)));
              }
            }, [u, p, _, T?.trackList, N]),
            (0, i.useEffect)(() => {
              let t = (e) => {
                  l((t) => ({ ...t, ...e.data }));
                },
                n = (e) => {
                  l((t) => ({
                    ...t,
                    isDisabled: !0,
                    error: { ...e.data, message: e.data.message },
                  }));
                },
                i = () => {
                  d(!0);
                };
              if (e) {
                let r = e.getEvents();
                r.addListener(a.rg.UPDATE, t),
                  r.addListener(a.rg.ERROR, n),
                  r.addListener(a.rg.TRACK_ENDED, i),
                  l((e) => ({ ...e, isDisabled: !1 }));
              } else l((e) => ({ ...e, isDisabled: !0 }));
              return () => {
                if (e) {
                  let r = e.getEvents();
                  r.removeListener(a.rg.UPDATE, t),
                    r.removeListener(a.rg.ERROR, n),
                    r.removeListener(a.rg.TRACK_ENDED, i);
                }
              };
            }, [e]),
            { playbackState: o, triggerPlaybackOperation: p }
          );
        };
      },
      95829: function (e, t, n) {
        "use strict";
        n.d(t, {
          b: function () {
            return o;
          },
          h: function () {
            return s;
          },
        });
        var i = n(85893),
          a = n(67294);
        let r = { width: null, height: null },
          s = (0, a.createContext)(r),
          o = (e) => {
            let { children: t } = e,
              [n, o] = (0, a.useState)(r);
            return (
              (0, a.useEffect)(() => {
                o({ width: window.innerWidth, height: window.innerHeight });
                let e = () => {
                  o({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener("resize", e),
                  () => {
                    window.removeEventListener("resize", e);
                  }
                );
              }, []),
              (0, i.jsx)(s.Provider, { value: { ...n }, children: t })
            );
          };
      },
      28065: function (e, t, n) {
        "use strict";
        n.d(t, {
          _: function () {
            return a;
          },
        });
        var i = n(62126);
        function a(e) {
          return { type: i.C, interactionData: e };
        }
      },
      90417: function (e, t, n) {
        "use strict";
        n.d(t, {
          AI: function () {
            return s;
          },
          Nn: function () {
            return a;
          },
          h6: function () {
            return r;
          },
        });
        var i = n(76892);
        function a() {
          return { type: i.RA };
        }
        function r() {
          return { type: i.gm };
        }
        function s(e) {
          return { type: i.G$, productName: e };
        }
      },
      65298: function (e, t, n) {
        "use strict";
        n.d(t, {
          j: function () {
            return a;
          },
          s: function () {
            return r;
          },
        });
        var i = n(49792);
        function a() {
          return { type: i.q };
        }
        function r() {
          return { type: i.N };
        }
      },
      26112: function (e, t, n) {
        "use strict";
        n.d(t, {
          k: function () {
            return a;
          },
          w: function () {
            return r;
          },
        });
        var i = n(96494);
        let a = (e) => {
            let {
              data: { entity: t },
            } = e;
            return t?.type === i.JM.EPISODE;
          },
          r = (e) => e.data.embeded_entity_uri;
      },
      76437: function (e, t, n) {
        "use strict";
        function i(e) {
          return void 0 !== e.status;
        }
        n.d(t, {
          v: function () {
            return i;
          },
        });
      },
      54751: function (e, t, n) {
        "use strict";
        n.d(t, {
          V$: function () {
            return a;
          },
          mk: function () {
            return i;
          },
        }),
          n(96494);
        class i extends Error {
          static fromResponse(e, t) {
            return new i({
              message: e.statusText,
              url: e.url,
              method: t,
              status: e.status,
              response: e,
            });
          }
          constructor(e) {
            let { message: t, url: n, method: i, status: a, response: r } = e;
            super(t),
              (this.name = "HttpResponseError"),
              (this.requestUrl = n),
              (this.requestMethod = i),
              (this.status = a),
              (this.response = r);
          }
        }
        class a extends i {
          constructor(e) {
            let { timeout: t, url: n, method: i } = e;
            super({
              message: `${i.toUpperCase()} ${n} timed out (${t}ms)`,
              url: n,
              method: i,
              status: 503,
            }),
              (this.name = "HttpRequestTimeoutError"),
              (this.timeout = t);
          }
        }
        n(79340);
      },
      79340: function (e, t, n) {
        "use strict";
        n.d(t, {
          ck: function () {
            return s;
          },
        }),
          n(40361);
        var i = n(99374),
          a = n(37555);
        let r = (e) => void 0 !== e.status,
          s = (e, t) => {
            (0, a.sQ)({
              metric_type: i.MetricTypes.COUNTER,
              what: "error",
              tags: {
                errorName: e.name ?? JSON.stringify(e),
                type: "network",
                serviceName: t,
                status: r(e) ? String(e.status) : "UNKNOWN_STATUS",
              },
              value: 1,
            });
          };
      },
      968: function (e, t, n) {
        "use strict";
        var i, a, r, s;
        n.d(t, {
          p: function () {
            return i;
          },
        }),
          ((r = i || (i = {})).ALBUM = "album"),
          (r.ARTIST = "artist"),
          (r.AUDIOBOOK = "audiobook"),
          (r.CHAPTER = "chapter"),
          (r.EPISODE = "episode"),
          (r.PLAYLIST = "playlist"),
          (r.PLAYLISTV2 = "playlist-v2"),
          (r.SHOW = "show"),
          (r.TRACK = "track"),
          (r.UNKNOWN = "unknown"),
          ((s = a || (a = {})).ALLOWED = "ALLOWED"),
          (s.MANDATORY = "MANDATORY"),
          (s.NONE = "NONE");
      },
      62126: function (e, t, n) {
        "use strict";
        n.d(t, {
          C: function () {
            return i;
          },
        });
        let i = "LOG_INTERACTION";
      },
      76892: function (e, t, n) {
        "use strict";
        n.d(t, {
          G$: function () {
            return r;
          },
          RA: function () {
            return a;
          },
          gm: function () {
            return i;
          },
        });
        let i = "CLOSE_OVERFLOW_MENU",
          a = "SHOW_OVERFLOW_MENU",
          r = "PLAY_ON_SPOTIFY_CLICK";
      },
      17033: function (e, t, n) {
        "use strict";
        var i, a;
        n.d(t, {
          L: function () {
            return r;
          },
          d: function () {
            return i;
          },
        }),
          ((a = i || (i = {})).UNKNOWN = "unknown"),
          (a.FULL = "full-playback"),
          (a.PREVIEW = "preview-playback");
        let r = "SET_PLAYBACK_MODE";
      },
      33829: function (e, t, n) {
        "use strict";
        n.d(t, {
          Bb: function () {
            return s;
          },
          E7: function () {
            return i;
          },
          Eb: function () {
            return c;
          },
          NH: function () {
            return a;
          },
          Nv: function () {
            return r;
          },
          Q2: function () {
            return _;
          },
          Zq: function () {
            return E;
          },
          gk: function () {
            return o;
          },
          ot: function () {
            return m;
          },
          pe: function () {
            return d;
          },
          ry: function () {
            return p;
          },
          sV: function () {
            return N;
          },
          tG: function () {
            return l;
          },
          wh: function () {
            return u;
          },
          yp: function () {
            return T;
          },
        });
        let i = "PAUSE",
          a = "PLAY",
          r = "TOGGLE_PLAY",
          s = "PLAY_INDEX",
          o = "RESUME",
          l = "SEEK",
          u = "SEEK_BACK",
          c = "SEEK_FORWARD",
          d = "PLAY_NEXT",
          p = "PLAY_PREVIOUS",
          _ = "MUTE",
          m = "UNMUTE",
          N = "SET_CURRENT_PREVIEW_TRACK_INDEX;",
          T = { AUDIO: "audio", VIDEO: "video" },
          E = { NONE: "NONE", ALLOWED: "ALLOWED", MANDATORY: "MANDATORY" };
      },
      49792: function (e, t, n) {
        "use strict";
        n.d(t, {
          N: function () {
            return a;
          },
          q: function () {
            return i;
          },
        });
        let i = "INITIALIZE",
          a = "MOUNTED";
      },
      23753: function (e, t, n) {
        "use strict";
        function i(e) {
          return (function (e, t) {
            if (null === e || null === t || null === e.duration) return null;
            let {
              timestamp: n,
              duration: i,
              speed: a,
              hasContext: r,
              isPaused: s,
              isBuffering: o,
            } = e;
            return !r || s || o
              ? t
              : Math.min(t + (Date.now() - n) * (a ?? 0), i);
          })(e, e?.positionAsOfTimestamp ?? null);
        }
        n.d(t, {
          k: function () {
            return i;
          },
        });
      },
      8745: function (e, t) {
        "use strict";
        let n = (e) => (e < 10 ? `0${e}` : `${e}`);
        t.Z = (e) => {
          let t = Math.abs(e),
            i = Math.floor(t / 36e5),
            a = [
              i ? `${i}` : "",
              n(Math.floor((t % 36e5) / 6e4) || 0),
              n(Math.floor((t % 6e4) / 1e3) || 0),
            ]
              .filter((e) => e)
              .join(":");
          return `${e < 0 ? "-" : ""}${a}`;
        };
      },
      93670: function (e, t, n) {
        "use strict";
        n.d(t, {
          H: function () {
            return r;
          },
        });
        var i = n(51206),
          a = n.n(i);
        function r() {
          let e = a().getParser(window.navigator.userAgent),
            t = (function (e) {
              switch (e) {
                case "macOS":
                  return "osx";
                case "Chrome OS":
                  return "chrome";
                default:
                  return e;
              }
            })(e.getOSName() || "not_applicable"),
            n = (function (e, t) {
              if ("Windows" === e)
                switch (t) {
                  case "NT":
                    return "NT";
                  case "XP":
                  case "NT 5.1":
                    return "XP";
                  case "NT 5.0":
                    return "2000";
                  case "NT 5.2":
                    return "2003";
                  case "NT 6.0":
                    return "Vista";
                  case "NT 6.1":
                    return "7";
                  case "NT 6.2":
                    return "8";
                  case "NT 6.3":
                    return "8.1";
                  case "NT 10.0":
                    return "10";
                  default:
                    return "";
                }
              return t;
            })(t, e.getOSVersion());
          return {
            osName: t,
            osVersion: n,
            browserName: e.getBrowserName(),
            browserVersion: e.getBrowserVersion(),
          };
        }
      },
      17569: function (e, t, n) {
        "use strict";
        n.d(t, {
          M: function () {
            return i;
          },
        });
        let i = (e) => {
          let { url: t, newWindow: n = !0 } = e;
          window.open(t, n ? "_blank" : "_top");
        };
      },
      73636: function (e) {
        e.exports = { wrapper: "AddToLibrary_wrapper__FZKUv" };
      },
      99992: function (e) {
        e.exports = {
          addToLibraryButton: "AddToLibraryCompact_addToLibraryButton__eRbCq",
        };
      },
      9127: function (e) {
        e.exports = {
          followButtonWrapper: "FollowButton_followButtonWrapper__uMaPG",
          hideBorder: "FollowButton_hideBorder__OdJB_",
          transformNone: "FollowButton_transformNone__FHnTJ",
          followButtonText: "FollowButton_followButtonText__axhEd",
          overflowMenu: "FollowButton_overflowMenu__uoZzL",
        };
      },
      26040: function (e) {
        e.exports = {
          saveOnSpotifyButton: "SaveOnSpotifyButton_saveOnSpotifyButton__QCoJx",
          overflowMenu: "SaveOnSpotifyButton_overflowMenu__RgKhO",
          saveOnSpotifyButtonText:
            "SaveOnSpotifyButton_saveOnSpotifyButtonText__6Jv6P",
        };
      },
      48247: function (e) {
        e.exports = { coverArt: "CoverArtBase_coverArt__ne0XI" };
      },
      46883: function (e) {
        e.exports = {
          wrapper: "Error_wrapper__rnmqo",
          content: "Error_content__DLtLW",
          title: "Error_title__Itx4f",
          description: "Error_description__wJgFt",
          links: "Error_links__xYnxY",
          primary: "Error_primary__1qg4H",
          icon: "Error_icon__7F4I4",
        };
      },
      18303: function (e) {
        e.exports = {
          loadingSpinner: "LoadingSpinner_loadingSpinner__RhjXu",
          SpinAnimation: "LoadingSpinner_SpinAnimation__yiW4R",
        };
      },
      25975: function (e) {
        e.exports = {
          container: "Marquee_container__CV7du",
          containerRtl: "Marquee_containerRtl__1Gbu_",
          scrollableContainer: "Marquee_scrollableContainer__mcSox",
          gradient: "Marquee_gradient__dpJhe",
          inner: "Marquee_inner__UKCZf",
        };
      },
      5297: function (e) {
        e.exports = {
          wrapper: "CopyLink_wrapper__Pnd_6",
          menuItem: "CopyLink_menuItem__FGDBn",
          copyLinkText: "CopyLink_copyLinkText__c2yNx",
          "in-out": "CopyLink_in-out__3Q56J",
          clicked: "CopyLink_clicked__O9BXe",
          "out-in": "CopyLink_out-in__HDSDy",
          truncator: "CopyLink_truncator__cxtkK",
        };
      },
      32404: function (e) {
        e.exports = {
          wrapper: "OverflowMenuBase_wrapper__CyfQs",
          menuItem: "OverflowMenuBase_menuItem__0Ijn4",
          visible: "OverflowMenuBase_visible__bdlfX",
          menu: "OverflowMenuBase_menu__cJ12M",
          menuContent: "OverflowMenuBase_menuContent__Kcicz",
          closeButton: "OverflowMenuBase_closeButton__pATy_",
          menuItemButton: "OverflowMenuBase_menuItemButton__YuobD",
          policies: "OverflowMenuBase_policies__r_Fbu",
          link: "OverflowMenuBase_link__8OQFz",
          separator: "OverflowMenuBase_separator__l_I5t",
          adaptToOverflowMenu: "OverflowMenuBase_adaptToOverflowMenu__YeDTC",
        };
      },
      38604: function (e) {
        e.exports = {
          overflowMenuButton: "OverflowMenuButton_overflowMenuButton__JPKiT",
        };
      },
      34719: function (e) {
        e.exports = {
          buttonWrapper: "PlayButton_buttonWrapper___CMG4",
          adaptForVideo: "PlayButton_adaptForVideo__bsKjt",
          playPauseIcon: "PlayButton_playPauseIcon__EBXpd",
          disabled: "PlayButton_disabled__F2saR",
        };
      },
      52377: function (e) {
        e.exports = {
          playerControlsWrapper:
            "PlayerControlsShort_playerControlsWrapper__qdkr5",
          addToLibraryCompactWrapper:
            "PlayerControlsShort_addToLibraryCompactWrapper__vXwv0",
          overflowMenuButtonWrapper:
            "PlayerControlsShort_overflowMenuButtonWrapper__qNhz2",
          lower: "PlayerControlsShort_lower__AgQwq",
          previewPlayPauseWrapper:
            "PlayerControlsShort_previewPlayPauseWrapper__39zQA",
          skipButtonsWrapper: "PlayerControlsShort_skipButtonsWrapper__8Nqc6",
        };
      },
      67510: function (e) {
        e.exports = {
          circularContainer: "PreviewPlayButton_circularContainer__IPZte",
          circularInner: "PreviewPlayButton_circularInner___9inH",
          rangeBarRight: "PreviewPlayButton_rangeBarRight__7U2dx",
          rangeBarLeft: "PreviewPlayButton_rangeBarLeft__QqPAO",
          rangeBarProgress: "PreviewPlayButton_rangeBarProgress__m16Uz",
          iconButton: "PreviewPlayButton_iconButton__VbRK0",
        };
      },
      98395: function (e) {
        e.exports = {
          progressBarContainer: "ProgressBar_progressBarContainer__glVHh",
          progressBarContainerWithOverhead:
            "ProgressBar_progressBarContainerWithOverhead__S9RTq",
          progressBarLineActive: "ProgressBar_progressBarLineActive__eawR7",
          progressBarLineBackground:
            "ProgressBar_progressBarLineBackground__S9lxG",
          progressBarLine: "ProgressBar_progressBarLine__a7FZb",
          progressBarSlider: "ProgressBar_progressBarSlider__oFBQJ",
          visible: "ProgressBar_visible__kkOqc",
        };
      },
      17438: function (e) {
        e.exports = {
          tooltipContainer: "ProgressBarHandler_tooltipContainer__X07ra",
        };
      },
      53606: function (e) {
        e.exports = {
          visibleOnlyToScreenReader:
            "ScreenReaderInput_visibleOnlyToScreenReader__TVvYo",
        };
      },
      44809: function (e) {
        e.exports = {
          progressTimeSpacer: "ProgressTimer_progressTimeSpacer__aN1q5",
          actualProgressTime: "ProgressTimer_actualProgressTime__kN3ww",
          progressTimer: "ProgressTimer_progressTimer__EIq8k",
        };
      },
      5833: function (e) {
        e.exports = {
          tagList: "Tags_tagList__6JpKG",
          tag: "Tags_tag__bbXTA",
          hidden: "Tags_hidden__IArVG",
          condensedTags: "Tags_condensedTags__w_NCJ",
        };
      },
      97338: function (e) {
        e.exports = { container: "Tag_container__ju3CN" };
      },
      34115: function (e) {
        e.exports = {
          title: "TitleAndSubtitle_title__Nwyku",
          subtitle: "TitleAndSubtitle_subtitle__P1cxq",
          separator: "TitleAndSubtitle_separator__4WdMW",
        };
      },
      75790: function (e) {
        e.exports = {
          backgroundCoverArt: "BackgroundCoverArt_backgroundCoverArt__i5yOP",
        };
      },
      51103: function (e) {
        e.exports = {
          upsellContentContainer: "Upsell_upsellContentContainer__xjlbk",
          transition_enter: "Upsell_transition_enter__1J8pP",
          transition_enterActive: "Upsell_transition_enterActive__7oD__",
          transition_exit: "Upsell_transition_exit__gTMji",
          transition_exitActive: "Upsell_transition_exitActive__MLvE3",
        };
      },
      42657: function (e) {
        e.exports = {
          getSpotifyButton: "UpsellButton_getSpotifyButton__9XE6r",
          buttonText: "UpsellButton_buttonText__L41pW",
        };
      },
      62038: function (e) {
        e.exports = {
          fullscreenWrapper: "UpsellContent_fullscreenWrapper__yafMY",
          footerWrapper: "UpsellContent_footerWrapper__M_dNe",
          coverArtWrapper: "UpsellContent_coverArtWrapper__O1I7x",
          ctaWrapper: "UpsellContent_ctaWrapper___t9Gy",
          closeButton: "UpsellContent_closeButton__Rxr0B",
          content: "UpsellContent_content__YTOSs",
          metadataWrapper: "UpsellContent_metadataWrapper__iSJfD",
          labelsAndSubtitle: "UpsellContent_labelsAndSubtitle__2mVsp",
          playerControlsWrapper: "UpsellContent_playerControlsWrapper__HdcB9",
          overflowMenuButtonWrapper:
            "UpsellContent_overflowMenuButtonWrapper__Hpw__",
          coverArtUpsell: "UpsellContent_coverArtUpsell__bAFhO",
          playlistContainer: "UpsellContent_playlistContainer__ittRM",
        };
      },
      8333: function (e) {
        e.exports = { text: "UpsellTitle_text__28Mv1" };
      },
      45009: function (e, t, n) {
        var i = {
          "./af/strings.json": [91340, 1340],
          "./am/strings.json": [81098, 1098],
          "./ar-EG/strings.json": [52365, 2365],
          "./ar-MA/strings.json": [70537, 537],
          "./ar-SA/strings.json": [64623, 4623],
          "./ar/strings.json": [45198, 5198],
          "./az/strings.json": [14141, 4141],
          "./bg/strings.json": [34879, 4879],
          "./bho/strings.json": [33065, 3065],
          "./bn/strings.json": [97550, 7550],
          "./bs/strings.json": [26908, 6908],
          "./ca/strings.json": [10416, 416],
          "./cs/strings.json": [23912, 3912],
          "./da/strings.json": [31014, 1014],
          "./de/strings.json": [2589, 2589],
          "./el/strings.json": [25742, 5742],
          "./en-GB/strings.json": [47874, 7874],
          "./es-419/strings.json": [71586, 1586],
          "./es-AR/strings.json": [61426, 1426],
          "./es-MX/strings.json": [7138, 7138],
          "./es/strings.json": [62576, 2576],
          "./et/strings.json": [42139, 2139],
          "./eu/strings.json": [20276, 276],
          "./fa/strings.json": [79978, 9978],
          "./fi/strings.json": [99652, 9652],
          "./fil/strings.json": [74383, 4383],
          "./fr-CA/strings.json": [28725, 5057],
          "./fr/strings.json": [42897, 2897],
          "./gl/strings.json": [51313, 1313],
          "./gu/strings.json": [37649, 7649],
          "./he/strings.json": [6805, 6805],
          "./hi/strings.json": [61521, 1521],
          "./hr/strings.json": [57113, 7113],
          "./hu/strings.json": [73409, 3409],
          "./id/strings.json": [72108, 2108],
          "./is/strings.json": [97606, 7606],
          "./it/strings.json": [68911, 8911],
          "./ja/strings.json": [97055, 7055],
          "./kn/strings.json": [37608, 7608],
          "./ko/strings.json": [42427, 2427],
          "./lt/strings.json": [36386, 6386],
          "./lv/strings.json": [68210, 8210],
          "./mk/strings.json": [24254, 4254],
          "./ml/strings.json": [90903, 903],
          "./mr/strings.json": [62609, 2609],
          "./ms/strings.json": [62434, 5019],
          "./nb/strings.json": [49745, 9745],
          "./ne/strings.json": [34123, 4123],
          "./nl/strings.json": [11290, 1290],
          "./or/strings.json": [38360, 8360],
          "./pa-IN/strings.json": [7604, 7604],
          "./pa-PK/strings.json": [29546, 9546],
          "./pl/strings.json": [91218, 1218],
          "./pt-BR/strings.json": [4355, 4355],
          "./pt-PT/strings.json": [78947, 8947],
          "./ro/strings.json": [93218, 3218],
          "./ru/strings.json": [76722, 6722],
          "./sk/strings.json": [51543, 1543],
          "./sl/strings.json": [21627, 1627],
          "./sr/strings.json": [57700, 7700],
          "./sv/strings.json": [71616, 1616],
          "./sw/strings.json": [95717, 5717],
          "./ta/strings.json": [39400, 9400],
          "./te/strings.json": [80750, 750],
          "./th/strings.json": [53631, 3631],
          "./tr/strings.json": [38554, 8554],
          "./uk/strings.json": [13707, 3707],
          "./ur/strings.json": [65151, 5151],
          "./vi/strings.json": [20202, 202],
          "./zh-CN/strings.json": [27517, 7517],
          "./zh-HK/strings.json": [31885, 1885],
          "./zh-TW/strings.json": [95867, 5867],
          "./zu/strings.json": [9790, 9790],
        };
        function a(e) {
          if (!n.o(i, e))
            return Promise.resolve().then(function () {
              var t = Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = i[e],
            a = t[0];
          return n.e(t[1]).then(function () {
            return n.t(a, 19);
          });
        }
        (a.keys = function () {
          return Object.keys(i);
        }),
          (a.id = 45009),
          (e.exports = a);
      },
    },
  ]);
