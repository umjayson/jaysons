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
      (e._sentryDebugIds[t] = "cf3429d2-5b7a-4cef-8c34-105617c13a8b"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-cf3429d2-5b7a-4cef-8c34-105617c13a8b"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9786],
  {
    84899: function (e, t, i) {
      i.d(t, {
        y: function () {
          return s;
        },
      });
      let s = [
        {
          label: "video-hw-all",
          robustness: { audio: "SW_SECURE_CRYPTO", video: "HW_SECURE_ALL" },
        },
        {
          label: "video-hw-decode",
          robustness: { audio: "SW_SECURE_CRYPTO", video: "HW_SECURE_DECODE" },
        },
        {
          label: "video-hw-crypto",
          robustness: { audio: "SW_SECURE_CRYPTO", video: "HW_SECURE_CRYPTO" },
        },
        {
          label: "video-sw-decode",
          robustness: { audio: "SW_SECURE_CRYPTO", video: "SW_SECURE_DECODE" },
        },
        {
          label: "video-sw-crypto",
          robustness: { audio: "SW_SECURE_CRYPTO", video: "SW_SECURE_CRYPTO" },
        },
        { label: "video-no-robustness", robustness: { audio: "", video: "" } },
        {
          label: "audio-flac-sw-crypto",
          robustness: { audio: "SW_SECURE_CRYPTO" },
          includesOpus: !1,
        },
        {
          label: "audio-flac-no-robustness",
          robustness: { audio: "" },
          includesOpus: !1,
        },
        {
          label: "audio-sw-crypto",
          robustness: { audio: "SW_SECURE_CRYPTO" },
          includesFlac: !1,
          includesOpus: !1,
        },
        {
          label: "audio-no-robustness",
          robustness: { audio: "" },
          includesFlac: !1,
          includesOpus: !1,
        },
      ].map(
        ({
          label: e,
          robustness: t,
          includesFlac: i = !0,
          includesOpus: s = !0,
        }) => {
          let r = [
              ...(i
                ? [
                    {
                      contentType: 'audio/mp4; codecs="flac"',
                      robustness: t.audio,
                    },
                  ]
                : []),
              {
                contentType: 'audio/mp4; codecs="mp4a.40.2"',
                robustness: t.audio,
              },
              {
                contentType: 'audio/mp4; codecs="mp4a.40.5"',
                robustness: t.audio,
              },
              ...(s
                ? [
                    {
                      contentType: 'audio/webm; codecs="opus"',
                      robustness: t.audio,
                    },
                  ]
                : []),
            ],
            n = [
              {
                contentType: 'video/mp4; codecs="avc1.64002a"',
                robustness: t.video,
              },
              {
                contentType: 'video/mp4; codecs="avc1.4d402a"',
                robustness: t.video,
              },
              {
                contentType: 'video/mp4; codecs="avc1.4d401f"',
                robustness: t.video,
              },
              { contentType: 'video/webm; codecs="vp9"', robustness: t.video },
              { contentType: 'video/webm; codecs="vp8"', robustness: t.video },
            ];
          return {
            label: e,
            initDataTypes: ["cenc"],
            audioCapabilities: void 0 !== t.audio ? r : [],
            videoCapabilities: void 0 !== t.video ? n : [],
            distinctiveIdentifier: "optional",
            persistentState: "optional",
            sessionTypes: ["temporary"],
          };
        }
      );
    },
    63908: function (e, t, i) {
      i.d(t, {
        D: function () {
          return r;
        },
      });
      var s = i(80842);
      let r = {
        [s.v.WIDEVINE]: {
          commonName: "widevine",
          licenseServer: "https://@webgate/widevine-license",
          withCertificate: !0,
          pssh_field: { audio: "pssh_widevine", video: "encryption_data" },
        },
        [s.v.PLAYREADY]: {
          commonName: "playready",
          licenseServer: "https://@webgate/playready-license",
          withCertificate: !1,
          pssh_field: { audio: "pssh_playready", video: "encryption_data" },
        },
        [s.v.PLAYREADY_HARDWARE]: {
          commonName: "playready",
          licenseServer: "https://@webgate/playready-license",
          withCertificate: !1,
          pssh_field: { audio: "pssh_playready", video: "encryption_data" },
        },
        [s.v.FAIRPLAY]: {
          commonName: "fairplay",
          licenseServer: "https://@webgate/fairplay-license",
          withCertificate: !0,
          pssh_field: { audio: "pssh_fairplay", video: "asset_id" },
        },
        [s.v.INVALID_SPOTIFY_KEY]: {
          commonName: "spotify-invalid",
          licenseServer: "https://@webgate",
          withCertificate: !1,
          pssh_field: { audio: "pssh_invalid", video: "encryption_data" },
        },
      };
    },
    69786: function (e, t, i) {
      i.d(t, {
        C: function () {
          return w;
        },
      });
      var s = i(18958),
        r = i(28627),
        n = i(44583),
        _ = i(86360),
        E = i(70771),
        a = i(95834),
        o = i(80842);
      class l extends Error {
        constructor(e = a.D.EME_ERROR_UNKNOWN, t) {
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
        static fatal(e = a.D.EME_ERROR_UNKNOWN, t) {
          let i = new l(e, t);
          return (i.unrecoverable = !0), i;
        }
      }
      class d extends Error {
        constructor(e, t) {
          super(t),
            (this.name = "CappingError"),
            (this.message = t),
            (this.code = e);
        }
      }
      function A(e) {
        let t = document.createEvent("Event");
        t.initEvent("encrypted", !1, !1),
          (t.initDataType = "cenc"),
          (t.initData = e.initData),
          (t.fromPolyfill = !0),
          this.dispatchEvent(t);
      }
      class R extends s.B {
        constructor(e) {
          super(E.j.KEY_SESSION_MESSAGE, null),
            (this.messageType = "license-request"),
            (this.message = e);
        }
      }
      class S extends s.vp {
        constructor(e) {
          super(),
            (this._nativeKeySession = null),
            (this._lastUpdateDeferred = (0, n.$)()),
            (this._lastGenerateDeferred = (0, n.$)()),
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
            (e.addEventListener(E.j.MS_KEY_ADDED, this._onKeyAdded),
            e.addEventListener(E.j.MS_KEY_ERROR, this._onKeyError),
            e.addEventListener(E.j.MS_KEY_MESSAGE, this._onKeyMessage));
        }
        _detach() {
          let e = this._nativeKeySession;
          e &&
            (e.removeEventListener(E.j.MS_KEY_ADDED, this._onKeyAdded),
            e.removeEventListener(E.j.MS_KEY_ERROR, this._onKeyError),
            e.removeEventListener(E.j.MS_KEY_MESSAGE, this._onKeyMessage));
        }
        _onKeyMessage(e) {
          e.message &&
            e.message.buffer &&
            (this.emitEvent(new R(e.message.buffer)),
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
            this.emit(E.j.KEY_SESSION_STATUSES_CHANGE, null);
        }
        _onKeyError() {
          let e = this._nativeKeySession && this._nativeKeySession.error;
          this._lastGenerateDeferred &&
            (this._lastGenerateDeferred.reject(e),
            (this._lastGenerateDeferred = null)),
            this._lastUpdateDeferred &&
              (this._lastUpdateDeferred.reject(e),
              (this._lastUpdateDeferred = null)),
            this.emit(E.j.KEY_SESSION_STATUSES_CHANGE, null);
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
      class h {
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
              e.removeEventListener(E.j.MEDIA_LOADEDMETADATA, i),
                (this._lastBoundSetter = null),
                e.msSetMediaKeys(this._nativeMediaKeys);
            };
            (this._lastBoundSetter = i),
              e.addEventListener(E.j.MEDIA_LOADEDMETADATA, i),
              e.addEventListener(E.j.MS_NEEDKEY, A),
              t();
          });
        }
        detach(e) {
          this._lastBoundSetter &&
            (e.removeEventListener(E.j.MS_NEEDKEY, A),
            e.removeEventListener(
              E.j.MEDIA_LOADEDMETADATA,
              this._lastBoundSetter
            ),
            (this._lastBoundSetter = null));
        }
        setServerCertificate() {
          return Promise.reject(
            new l(
              a.D.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM,
              "Cannot set server certificate on this platform."
            )
          );
        }
        createSession() {
          return new S(this._nativeMediaKeys);
        }
      }
      function u(e) {
        let t = this.mediaKeys;
        return (
          t && t !== e && t.detach(this),
          delete this.mediaKeys,
          (this.mediaKeys = e),
          e && e.attach(this),
          Promise.resolve()
        );
      }
      class c {
        constructor(e, t) {
          if (
            ((this._configuration = null),
            (this.keySystem = e),
            !this._checkConfig(t))
          )
            throw new l(
              a.D.EME_NO_SUPPORTED_CONFIGURATION,
              "No supported configurations"
            );
        }
        _checkConfig(e) {
          var t, i;
          let s = this.keySystem;
          for (let r of e) {
            let e;
            let n = {
              initDataTypes: r.initDataTypes,
              audioCapabilities: [],
              videoCapabilities: [],
              persistentState: "optional",
              distinctiveIdentifier: "optional",
              sessionTypes: ["temporary"],
              label: r.label,
            };
            if (
              r.audioCapabilities &&
              r.audioCapabilities.length &&
              n.audioCapabilities
            )
              for (let i of ((e = !1), r.audioCapabilities)) {
                let r =
                  null === (t = i.contentType) || void 0 === t
                    ? void 0
                    : t.split(";")[0];
                MSMediaKeys.isTypeSupported(s, r) &&
                  (n.audioCapabilities.push(i), (e = !0));
              }
            if (
              r.videoCapabilities &&
              r.videoCapabilities.length &&
              n.videoCapabilities
            )
              for (let t of ((e = !1), r.videoCapabilities)) {
                let r =
                  null === (i = t.contentType) || void 0 === i
                    ? void 0
                    : i.split(";")[0];
                MSMediaKeys.isTypeSupported(s, r) &&
                  (n.videoCapabilities.push(t), (e = !0));
              }
            if (e) return (this._configuration = n), !0;
          }
          return !1;
        }
        getConfiguration() {
          return this._configuration;
        }
        createMediaKeys() {
          return new Promise((e) => {
            e(new h(this.keySystem));
          });
        }
      }
      let T = r.P.forTag("eme_polyfill.v0_1b");
      class p extends s.vp {
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
          this.emitEvent(new R(e)),
            this._lastGenerateResolver &&
              (this._lastGenerateResolver.resolve(!0),
              (this._lastGenerateResolver = null));
        }
        updateComplete() {
          this._lastUpdateDeferred &&
            (this._lastUpdateDeferred.resolve(!0),
            (this._lastUpdateDeferred = null)),
            this.emit(E.j.KEY_SESSION_STATUSES_CHANGE, null);
        }
        handleErrorEvent(e) {
          let t = new l(
            a.D.EME_MEDIA_KEY_SESSION_V0_1B_ERROR,
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
              : this.emit(E.j.KEY_SESSION_STATUSES_CHANGE, null);
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
          let t = (0, n.$)();
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
              T.warn("Could not close keysession", e);
            }
          return Promise.resolve(!0);
        }
      }
      class y {
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
          e.addEventListener(t + E.j.V0_1B_NEEDKEY, A);
          let i = e.addEventListener.bind(e);
          i(t + E.j.V0_1B_KEY_ADDED, this._onKeyAdded),
            i(t + E.j.V0_1B_KEY_ERROR, this._onKeyError),
            i(t + E.j.V0_1B_KEY_MESSAGE, this._onKeyMessage);
        }
        detach(e) {
          this._mediaElement = null;
          let t = this._prefix;
          e.removeEventListener(t + E.j.V0_1B_NEEDKEY, A);
          let i = e.removeEventListener.bind(e);
          i(t + E.j.V0_1B_KEY_ADDED, this._onKeyAdded),
            i(t + E.j.V0_1B_KEY_ERROR, this._onKeyError),
            i(t + E.j.V0_1B_KEY_MESSAGE, this._onKeyMessage);
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
            T.warn("Got keymessage without session.");
            return;
          }
          t.generateComplete(e.message);
        }
        _onKeyAdded(e) {
          let t = this._getSession(e.sessionId);
          if (!t) {
            T.warn("Got keyadded without session.");
            return;
          }
          t.updateComplete();
        }
        _onKeyError(e) {
          let t = this._getSession(e.sessionId);
          if (!t) {
            T.warn("Got keyerror without session.");
            return;
          }
          t.handleErrorEvent(e);
        }
        setServerCertificate() {
          return Promise.reject(
            new l(
              a.D.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM,
              "Cannot set server certificate on this platform."
            )
          );
        }
        createSession() {
          let e = new p(this._keySystem, this._mediaElement, this._prefix);
          return this._waitingForSessionIds.push(e), e;
        }
      }
      function L(e) {
        let t = this.mediaKeys;
        return (
          t && t !== e && t.detach(this),
          delete this.mediaKeys,
          (this.mediaKeys = e),
          e && e.attach(this),
          Promise.resolve()
        );
      }
      class f {
        constructor(e, t, i) {
          if (
            ((this._configuration = null),
            (this.keySystem = e),
            (this._prefix = i),
            !this._checkConfig(t))
          )
            throw new l(
              a.D.EME_NO_SUPPORTED_CONFIGURATION,
              "No supported configurations"
            );
        }
        _checkConfig(e) {
          var t, i;
          let s = this.keySystem,
            r = document.createElement("video");
          for (let n of e) {
            let e = {
                initDataTypes: n.initDataTypes,
                audioCapabilities: [],
                videoCapabilities: [],
                persistentState: "optional",
                distinctiveIdentifier: "optional",
                sessionTypes: ["temporary"],
                label: n.label,
              },
              _ = !1;
            if (
              n.audioCapabilities &&
              n.audioCapabilities.length &&
              e.audioCapabilities
            )
              for (let i of ((_ = !1), n.audioCapabilities)) {
                let n =
                  null === (t = i.contentType) || void 0 === t
                    ? void 0
                    : t.split(";")[0];
                n &&
                  r.canPlayType(n, s) &&
                  (e.audioCapabilities.push(i), (_ = !0));
              }
            if (
              n.videoCapabilities &&
              n.videoCapabilities.length &&
              e.videoCapabilities
            )
              for (let t of ((_ = !1), n.videoCapabilities)) {
                let n =
                  null === (i = t.contentType) || void 0 === i
                    ? void 0
                    : i.split(";")[0];
                n &&
                  r.canPlayType(n, s) &&
                  (e.videoCapabilities.push(t), (_ = !0));
              }
            if (_) return (this._configuration = e), !0;
          }
          return !1;
        }
        getConfiguration() {
          return this._configuration;
        }
        createMediaKeys() {
          return new Promise((e) => {
            e(new y(this.keySystem, this._prefix));
          });
        }
      }
      function D(e) {
        navigator.requestMediaKeySystemAccess = function (t, i) {
          return new Promise((s) => {
            s(new f(t, i, e));
          });
        };
        let t = HTMLMediaElement.prototype;
        delete t.mediaKeys, (t.setMediaKeys = L);
      }
      let I = r.P.forTag("eme_polyfill.safari");
      class v extends s.vp {
        constructor(e, t) {
          super(),
            (this._attached = !1),
            (this._nativeKeySession = null),
            (this._lastGenerateResolver = (0, n.$)()),
            (this._lastUpdateResolver = (0, n.$)()),
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
            I.warn("Tried to attach with no WebKitMediaKeySession");
            return;
          }
          e.addEventListener(E.j.WEBKIT_KEY_MESSAGE, this._onKeyMessage),
            e.addEventListener(E.j.WEBKIT_KEY_ADDED, this._onKeyAdded),
            e.addEventListener(E.j.WEBKIT_KEY_ERROR, this._onKeyError);
        }
        _detach() {
          if (!this._attached) return;
          let e = this._nativeKeySession;
          if (!e) {
            I.warn("Tried to detach with no WebKitMediaKeySession");
            return;
          }
          e.removeEventListener(E.j.WEBKIT_KEY_MESSAGE, this._onKeyMessage),
            e.removeEventListener(E.j.WEBKIT_KEY_ADDED, this._onKeyAdded),
            e.removeEventListener(E.j.WEBKIT_KEY_ERROR, this._onKeyError);
        }
        _onKeyMessage(e) {
          e.message &&
            e.message.buffer &&
            (this.emitEvent(new R(e.message.buffer)),
            this._lastGenerateResolver &&
              (this._lastGenerateResolver.resolve(!0),
              (this._lastGenerateResolver = null)));
        }
        _onKeyAdded() {
          this._lastUpdateResolver &&
            (this._lastUpdateResolver.resolve(!0),
            (this._lastUpdateResolver = null)),
            this.emit(E.j.KEY_SESSION_STATUSES_CHANGE, null);
        }
        _onKeyError() {
          let e = this._nativeKeySession && this._nativeKeySession.error,
            t = new l(
              a.D.EME_MEDIA_KEY_SESSION_SAFARI_ERROR,
              (e && e.message) || "MediaKeySession Safari Error"
            );
          e &&
            ((t.debug.errorCode = e.code), (t.debug.systemCode = e.systemCode)),
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
            throw new l(a.D.EME_INIT_DATA_MALFORMED, "Malformed init data");
          let i = (function (e) {
            let t = Math.floor(e.byteLength / 2),
              i = new Uint16Array(t),
              s = new DataView(e.buffer);
            for (let e = 0; e < t; e++) i[e] = s.getUint16(2 * e, !0);
            return String.fromCharCode.apply(null, i);
          })(t.slice(4)).match(/^skd:\/\/([0-9a-fA-F]+)/);
          if (!(null == i ? void 0 : i[1]))
            throw new l(a.D.EME_INIT_DATA_MALFORMED, "Invalid content ID");
          let s = new Uint8Array(
              (function (e) {
                let t = new Uint8Array(2 * e.length),
                  i = new DataView(t.buffer),
                  s = e.split("");
                for (let e = 0, t = s.length; e < t; e++) {
                  let t = s[e].charCodeAt(0);
                  i.setUint16(2 * e, t, !0);
                }
                return t.buffer;
              })(i[1])
            ),
            r = this._serverCertificate,
            n = new Uint8Array(
              t.byteLength + 4 + s.byteLength + 4 + r.byteLength
            ),
            _ = 0;
          n.set(t, _), (_ += t.byteLength);
          let E = new DataView(n.buffer);
          return (
            E.setUint32(_, s.byteLength, !0),
            (_ += 4),
            n.set(s, _),
            (_ += s.byteLength),
            E.setUint32(_, r.byteLength, !0),
            (_ += 4),
            n.set(r, _),
            n
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
          let t = (0, n.$)();
          if (((this._lastUpdateResolver = t), !this._nativeKeySession))
            return (
              I.warn("Tried to update with no WebKitMediaKeySession"), t.promise
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
      class m {
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
              e.removeEventListener(E.j.MEDIA_LOADEDMETADATA, i),
                (this._lastBoundSetter = null),
                e.webkitSetMediaKeys(this._nativeMediaKeys);
            };
            (this._lastBoundSetter = i),
              e.addEventListener(E.j.MEDIA_LOADEDMETADATA, i),
              e.addEventListener(E.j.WEBKIT_NEEDKEY, A),
              t();
          });
        }
        detach(e) {
          e.removeEventListener(E.j.WEBKIT_NEEDKEY, A),
            this._lastBoundSetter &&
              (e.removeEventListener(
                E.j.MEDIA_LOADEDMETADATA,
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
            throw new l(
              a.D.EME_INVALID_STATE_ERROR,
              "The server certificate is not available"
            );
          return new v(this._nativeMediaKeys, this._serverCertificate);
        }
      }
      class P {
        constructor(e, t) {
          this.keySystem = e;
          let i = this._checkConfig(t);
          if (!i)
            throw new l(
              a.D.EME_NO_SUPPORTED_CONFIGURATION,
              "No supported configurations"
            );
          this._configuration = i;
        }
        _checkConfig(e) {
          let t = this.keySystem,
            i = !1;
          for (let s of e) {
            let e = {
              initDataTypes: s.initDataTypes,
              audioCapabilities: [],
              videoCapabilities: [],
              persistentState: "optional",
              distinctiveIdentifier: "optional",
              sessionTypes: ["temporary"],
            };
            if (s.audioCapabilities)
              for (let r of s.audioCapabilities) {
                if (!r.contentType) continue;
                let s = r.contentType.split(";")[0];
                WebKitMediaKeys.isTypeSupported(t, s) &&
                  (e.audioCapabilities.push(r), (i = !0));
              }
            if (s.videoCapabilities)
              for (let r of s.videoCapabilities) {
                if (!r.contentType) continue;
                let s = r.contentType.split(";")[0];
                WebKitMediaKeys.isTypeSupported(t, s) &&
                  (e.videoCapabilities.push(r), (i = !0));
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
            e(new m(this.keySystem));
          });
        }
      }
      function N(e) {
        let t = this.mediaKeys;
        return (t && t !== e && t.detach(this),
        delete this.mediaKeys,
        (this.mediaKeys = e),
        e)
          ? e.attach(this)
          : Promise.resolve();
      }
      let O = r.P.forTag("eme_polyfills.tester");
      var M = i(63908),
        C = i(84899),
        g = i(80278);
      let K = /([^;]+)(?:;\s?codecs="(.*)")?/,
        Y = r.P.forTag("playback.eme_manager"),
        b = {
          EMPTY: "-no-robustness",
          SW_CRYPTO: "-sw-crypto",
          SW_DECODE: "-sw-decode",
          HW_CRYPTO: "-hw-crypto",
          HW_DECODE: "-hw-decode",
          HW_ALL: "-hw-all",
        };
      function U(e, t) {
        var i;
        let s = [],
          r = RegExp(`codecs="(${t.join("|")})"`);
        for (let t of e)
          r.test(null !== (i = t.contentType) && void 0 !== i ? i : "") ||
            s.push(t);
        return s.length ? s : null;
      }
      class w extends s.vp {
        constructor(e) {
          var t;
          super(),
            (this._unauthServerCertificateBase = ""),
            (this._disallowCodecs = {}),
            (this._keySystemDeferred = (0, n.$)()),
            (this._configuration = (0, n.$)()),
            (this._keySystemSettings = null),
            (this._keySessions = []),
            (this._configs = []),
            (this._pendingCertificateRequest = null),
            (this._certificate = null),
            (this._transport = e.transport),
            (this._emeImpl = e.emeImpl),
            (this._noServerCertificate = !!e.noServerCertificate),
            (this._precacheServerCertificate =
              null === (t = e.precacheServerCertificate) || void 0 === t || t),
            (this._unauthServerCertificateBase =
              e.unauthServerCertificateBase ||
              "https://spclient.wg.spotify.com"),
            (this._configFilter = (function (e) {
              let t = ["--ensure-no-match--"];
              if (null == e ? void 0 : e.length) {
                let i = e.length;
                for (; i--; ) {
                  let s = e[i];
                  s && b.hasOwnProperty(s) && t.push(b[s]);
                }
              }
              return RegExp(`(${t.join("|")})$`);
            })(e.disallowRobustnessValues || [])),
            (this._disallowCodecs = e.disallowCodecs),
            (this._preferredKeySystems = e.preferredKeySystems || [
              o.v.WIDEVINE,
              o.v.PLAYREADY,
              o.v.PLAYREADY_HARDWARE,
              o.v.FAIRPLAY,
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
                ? (O.log("Using native EME implementation."), "native")
                : "undefined" != typeof HTMLMediaElement &&
                  (null == HTMLMediaElement
                    ? void 0
                    : HTMLMediaElement.prototype.webkitGenerateKeyRequest)
                ? (O.log('Detected "webkit" Prefixed EME v0.1b. Polyfilling.'),
                  D("webkit"),
                  "v0.1b-webkit")
                : "undefined" != typeof HTMLMediaElement &&
                  (null == HTMLMediaElement
                    ? void 0
                    : HTMLMediaElement.prototype.generateKeyRequest)
                ? (O.log("Detected Unprefixed EME v0.1b. Polyfilling."),
                  D(),
                  "v0.1b")
                : "undefined" != typeof MSMediaKeys
                ? (O.log("Detected MS IE EME. Polyfilling."),
                  !(function () {
                    navigator.requestMediaKeySystemAccess = function (e, t) {
                      return new Promise((i) => {
                        i(new c(e, t));
                      });
                    };
                    let e = HTMLMediaElement.prototype;
                    delete e.mediaKeys, (e.setMediaKeys = u);
                  })(),
                  "ms-ie")
                : "function" == typeof WebKitMediaKeys
                ? (O.log("Detected Safari EME. Polyfilling."),
                  !(function () {
                    navigator.requestMediaKeySystemAccess = function (e, t) {
                      return new Promise((i) => {
                        i(new P(e, t));
                      });
                    };
                    let e = HTMLMediaElement.prototype;
                    delete e.mediaKeys, (e.setMediaKeys = N);
                  })(),
                  "safari")
                : (O.warn("Detected no EME APIs."), null);
            if (!i)
              throw l.fatal(
                a.D.EME_API_NOT_SUPPORTED,
                "Platform does not support navigator.requestMediaKeySystemAccess"
              );
            t(
              new w(Object.assign(Object.assign({}, e), { emeImpl: i })).init()
            );
          });
        }
        _prepareConfiguration(e) {
          let t = e.getConfiguration();
          Y.info("KeySystem configured as", t.label),
            (t.audioCapabilities && t.audioCapabilities.length) ||
              this._appendProbableMediaCapabilities(e.keySystem, t);
          let i = {
            keySystem: e.keySystem,
            keySystemImpl: this._emeImpl,
            audioFormats: this._parseCapabilities(t.audioCapabilities),
            videoFormats: this._parseCapabilities(t.videoCapabilities),
          };
          return (
            (this._keySystemSettings = M.D[e.keySystem]),
            this._configuration.resolve(i),
            i
          );
        }
        _parseCapabilities(e) {
          var t;
          if (!e) return [];
          let i = [];
          for (let s of e) {
            if (!(null == s ? void 0 : s.contentType)) continue;
            let [, e, r] =
              null !== (t = s.contentType.match(K)) && void 0 !== t ? t : [];
            e &&
              i.push({
                contentType: s.contentType,
                mimeType: e,
                codec: null != r ? r : "",
              });
          }
          return i;
        }
        _appendProbableMediaCapabilities(e, t) {
          let i = (0, g.M)(
            this._configs,
            (t) =>
              (-1 === t.indexOf("webm") ||
                (e !== o.v.PLAYREADY && e !== o.v.PLAYREADY_HARDWARE)) &&
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
              (e) => (Y.warn("Error from setting server certificate", e), this)
            );
        }
        _cacheServerCertificate(e) {
          let t = "";
          switch (e) {
            case o.v.FAIRPLAY:
              t = "fairplay";
              break;
            case o.v.WIDEVINE:
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
            (e) => (Y.warn("Cannot precache server certificate", e), this)
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
                    condition: (e, t) => e.getStatusFamily() === t.SERVER_ERROR,
                  },
                })
                .then((e) => {
                  var t;
                  if (!e.body) throw TypeError("Response body is invalid");
                  this._pendingCertificateRequest = null;
                  let i = 3600,
                    s =
                      null === (t = e.headers) || void 0 === t
                        ? void 0
                        : t.get("cache-control");
                  if (s) {
                    let e = s.match(/(?:^|,|\s)max-age=(\d+)(?:,|$)/);
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
          let s = null,
            r = new Uint16Array(e),
            n = String.fromCharCode.apply(null, r);
          if (-1 === n.indexOf("PlayReadyKeyMessage"))
            return Y.info("Using unextracted PlayReady message."), e;
          let _ = new DOMParser().parseFromString(n, "application/xml"),
            o = _.getElementsByTagName("Challenge")[0],
            d =
              null === (i = null == o ? void 0 : o.childNodes[0]) ||
              void 0 === i
                ? void 0
                : i.nodeValue;
          if (d)
            try {
              s = atob(d);
              let e = _.getElementsByTagName("name"),
                t = _.getElementsByTagName("value");
              if (e.length !== t.length)
                throw new l(
                  a.D.EME_HEADER_KEY_VALUE_MISMATCH,
                  "Mismatched header <name>/<value> pair in key message"
                );
            } catch (e) {
              this.emit(E.j.EME_LICENSE_REQUEST_ERROR, { signal: t, error: e }),
                (s = null);
            }
          else
            this.emit(E.j.EME_LICENSE_REQUEST_ERROR, {
              signal: t,
              error: new l(
                a.D.EME_HEADER_KEY_VALUE_MISMATCH,
                "Mismatched header <name>/<value> pair in key message"
              ),
            });
          return s;
        }
        _onMessage(e, t) {
          e.timeMap.generate.end = (0, _.q)();
          let i = "message" in t ? t.message : null,
            s = "messageType" in t ? t.messageType : void 0;
          if (
            (Y.info("Got EME message event with type", s),
            i &&
              e.keySystem === o.v.PLAYREADY &&
              (i = this._extractPlayReadyChallenge(i, e.signal)),
            !i)
          ) {
            Y.info("Ignoring message event: no valid request payload");
            return;
          }
          if (!e.licenseServer) {
            Y.info("Ignoring message event: no licenseServer url");
            return;
          }
          e.timeMap.request.start = (0, _.q)();
          let r = e.licenseServer;
          e.keySystem === o.v.FAIRPLAY &&
            (r = `${r}${-1 !== r.indexOf("?") ? "&" : "?"}assetId=hex`),
            this._transport
              .request(r, {
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
          let i, s;
          let r = (t) => {
            e.licenseServer && (t.licenseServer = e.licenseServer),
              this.emit(E.j.EME_LICENSE_REQUEST_ERROR, {
                signal: e.signal,
                error: t,
              });
          };
          if (((e.timeMap.request.end = (0, _.q)()), 200 === t.status)) {
            if (!t.body) {
              ((i = new l(
                a.D.EME_LICENSE_REQUEST_EMPTY_RESPONSE,
                "Empty license response body"
              )).status = t.status),
                r(i);
              return;
            }
            try {
              (e.timeMap.update.start = (0, _.q)()),
                e.keySession.update(t.body).catch((e) => {
                  r(
                    new l(
                      a.D.EME_LICENSE_UPDATE_FAILED,
                      e.message || "License update failed."
                    )
                  );
                }),
                Y.info("KeySession updated.");
            } catch (t) {
              let { message: e } = t;
              r(
                new l(
                  a.D.EME_LICENSE_UPDATE_FAILED,
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
              s = JSON.parse(i).errorMsg;
            }
          } catch (e) {}
          402 === t.status
            ? this.emit(E.j.EME_LICENSE_REQUEST_CAPPED, {
                signal: e.signal,
                error: new d(a.D.CAPPING_USER_IS_CAPPED, "User is capped."),
              })
            : (400 === t.status && "widevine error" === s
                ? (((i = l.fatal(
                    a.D.EME_LICENSE_REQUEST_WIDEVINE_ERROR,
                    "Widevine license server failed to parse request."
                  )).status = t.status),
                  (i.shouldRefreshEndpoint = !0))
                : (((i = new l(
                    a.D.EME_LICENSE_REQUEST_FAILED_WITH_STATUS,
                    `License request failed (${s || "unknown"})`
                  )).status = t.status),
                  (i.shouldRefreshEndpoint =
                    400 === t.status || 403 === t.status)),
              r(i));
        }
        _selectKeySystem(e) {
          let t = this._preferredKeySystems;
          for (let i = 0, s = t.length; i < s; i++) {
            let s = t[i];
            if (s && s in e) return e[s];
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
                  l.fatal(
                    a.D.EME_MEDIA_KEYS_NOT_SUPPORTED,
                    "Cannot create MediaKeys from KeySystemAccess"
                  )
                );
              e.keySystem === o.v.FAIRPLAY &&
                t.setServerCertificate(new ArrayBuffer(0));
              try {
                if (!t.createSession()) throw Error("");
              } catch (t) {
                let { message: e } = t;
                return Promise.reject(
                  l.fatal(
                    a.D.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED,
                    e || "Cannot create MediaKeySession from KeySystemAccess"
                  )
                );
              }
              return Promise.resolve(e);
            },
            (e) => (
              Y.error(e.name),
              Promise.reject(
                l.fatal(
                  a.D.EME_MEDIA_KEYS_NOT_SUPPORTED,
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
                  E.j.KEY_SESSION_MESSAGE,
                  t.onMessageListener
                ),
                t.onKeyStatusChangeListener &&
                  i.removeEventListener(
                    E.j.KEY_SESSION_STATUSES_CHANGE,
                    t.onKeyStatusChangeListener
                  );
              let s = Promise.resolve(i.close()).catch((e) => {
                Y.warn("Failed to close KeySession", e);
              });
              e.push(s),
                (t.keySession = null),
                (t.onMessageListener = null),
                (t.onKeyStatusChangeListener = null),
                Y.info("Closed KeySession");
            } catch (e) {
              Y.warn("Failed to close KeySession", e);
            }
          return (this._keySessions = []), Promise.all(e);
        }
        init() {
          let e = [];
          for (let t of C.y)
            if (!(t.label && this._configFilter.test(t.label))) {
              if (this._disallowCodecs) {
                let e = (function (e, { audio: t, video: i }) {
                  var s, r, n, _;
                  if (
                    !(null == t ? void 0 : t.length) &&
                    !(null == i ? void 0 : i.length)
                  )
                    return e;
                  let { audioCapabilities: E, videoCapabilities: a } = e;
                  return ((null == t ? void 0 : t.length) &&
                    (null === (s = e.audioCapabilities) || void 0 === s
                      ? void 0
                      : s.length) &&
                    !(E =
                      null !== (r = U(e.audioCapabilities, t)) && void 0 !== r
                        ? r
                        : void 0)) ||
                    ((null == i ? void 0 : i.length) &&
                      (null === (n = e.videoCapabilities) || void 0 === n
                        ? void 0
                        : n.length) &&
                      !(a =
                        null !== (_ = U(e.videoCapabilities, i)) && void 0 !== _
                          ? _
                          : void 0))
                    ? null
                    : Object.assign(Object.assign({}, e), {
                        audioCapabilities: E,
                        videoCapabilities: a,
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
          for (let e in o.v)
            Object.prototype.hasOwnProperty.call(o.v, e) &&
              i.push(
                navigator
                  .requestMediaKeySystemAccess(o.v[e], this._configs)
                  .then((e) => {
                    t[e.keySystem] = e;
                  })
                  .catch(() => {})
              );
          return Promise.all(i)
            .then(() => this._selectKeySystem(t))
            .then((e) =>
              e
                ? (Y.info("Supported keySystem: ", e.keySystem),
                  this._testMediaKeys(e))
                : Promise.reject(
                    new l(
                      a.D.EME_NO_SUPPORTED_KEYSYSTEM,
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
              let i = t.code || a.D.EME_NO_SUPPORTED_KEYSYSTEM,
                s = t.message || "No supported keysystem";
              return e.reject(l.fatal(i, s)), e.promise.then(() => this);
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
                  ? this._trySetServerCertificate(t.licenseServer, e.mediaKeys)
                  : this;
              })
            );
        }
        setMediaKeys(e, t) {
          return e.setMediaKeys(t).then(() => {
            if (!e.mediaKeys)
              throw new l(
                a.D.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED,
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
            Y.info("Creating KeySession", e.keySystem);
            let s = e.mediaKeys.createSession(),
              r = {
                generate: { start: null, end: null },
                request: { start: null, end: null },
                update: { start: null, end: null },
              },
              n =
                (this._keySystemSettings &&
                  this._keySystemSettings.licenseServer) ||
                void 0,
              o = this._onMessage.bind(this, {
                keySystem: e.keySystem,
                keySession: s,
                licenseServer: e.licenseServer || n,
                signal: e.signal,
                timeMap: r,
              });
            s.addEventListener(E.j.KEY_SESSION_MESSAGE, o);
            let d = () => {
              Y.info("KeyStatus change"), (r.update.end = (0, _.q)());
              let e = (e) =>
                null !== e.start && null !== e.end
                  ? (0, _.n)(e.start, e.end)
                  : 0;
              t({
                elapsed: {
                  generate: e(r.generate),
                  request: e(r.request),
                  update: e(r.update),
                },
              });
            };
            return (
              s.addEventListener(E.j.KEY_SESSION_STATUSES_CHANGE, d),
              this._saveSession({
                keySession: s,
                onMessageListener: o,
                onKeyStatusChangeListener: d,
              }),
              Y.info("Generating KeySession request", e.keySystem),
              (r.generate.start = (0, _.q)()),
              Promise.resolve(
                s.generateRequest(e.initDataType, e.initData.buffer)
              ).catch((e) => {
                let t;
                if (e) {
                  switch (e.name) {
                    case "NotSupportedError":
                      t = a.D.EME_NOT_SUPPORTED_ERROR;
                      break;
                    case "InvalidStateError":
                      t = a.D.EME_INVALID_STATE_ERROR;
                      break;
                    default:
                      t = a.D.EME_UNKNOWN_ERROR;
                  }
                  i(new l(t, e.message || "Unknown error message."));
                }
              })
            );
          });
        }
      }
    },
    80278: function (e, t, i) {
      function s(e, t) {
        var i, s;
        for (let r of e) {
          let e;
          let n = { audioCapabilities: [], videoCapabilities: [] },
            _ = !1;
          if (
            null === (i = r.audioCapabilities) || void 0 === i
              ? void 0
              : i.length
          )
            for (let i of ((_ = !1), r.audioCapabilities))
              (e = i.contentType) &&
                t(e) &&
                (n.audioCapabilities.push(i), (_ = !0));
          if (
            null === (s = r.videoCapabilities) || void 0 === s
              ? void 0
              : s.length
          )
            for (let i of ((_ = !1), r.videoCapabilities))
              (e = i.contentType) &&
                t(e) &&
                (n.videoCapabilities.push(i), (_ = !0));
          if (_) return n;
        }
        return null;
      }
      i.d(t, {
        $: function () {
          return n;
        },
        M: function () {
          return s;
        },
      });
      let r = /([^;]+)(?:;\s?codecs="(.*)")?/;
      function n(e) {
        var t;
        let [, i = "unknown", s = "unknown"] =
          null !== (t = e.match(r)) && void 0 !== t ? t : [];
        return { mimeType: i, codec: s, contentType: e };
      }
    },
    95834: function (e, t, i) {
      var s, r;
      i.d(t, {
        D: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).AD_MANIFEST_REQUEST_FAILED_WITH_STATUS =
          "AD_MANIFEST_REQUEST_FAILED_WITH_STATUS"),
        (r.AD_MANIFEST_INVALID = "AD_MANIFEST_INVALID"),
        (r.CAPPING_USER_IS_CAPPED = "CAPPING_USER_IS_CAPPED"),
        (r.EME_API_NOT_SUPPORTED = "EME_API_NOT_SUPPORTED"),
        (r.EME_MEDIA_KEYS_NOT_SUPPORTED = "EME_MEDIA_KEYS_NOT_SUPPORTED"),
        (r.EME_MEDIA_KEY_SESSION_NOT_SUPPORTED =
          "EME_MEDIA_KEY_SESSION_NOT_SUPPORTED"),
        (r.EME_NO_SUPPORTED_KEYSYSTEM = "EME_NO_SUPPORTED_KEYSYSTEM"),
        (r.EME_PLAYER_MEDIA_KEYS_SETTING_FAILED =
          "EME_PLAYER_MEDIA_KEYS_SETTING_FAILED"),
        (r.EME_ERROR_UNKNOWN = "EME_ERROR_UNKNOWN"),
        (r.EME_LICENSE_REQUEST_EMPTY_RESPONSE =
          "EME_LICENSE_REQUEST_EMPTY_RESPONSE"),
        (r.EME_LICENSE_REQUEST_FAILED_WITH_STATUS =
          "EME_LICENSE_REQUEST_FAILED_WITH_STATUS"),
        (r.EME_LICENSE_REQUEST_WIDEVINE_ERROR =
          "EME_LICENSE_REQUEST_WIDEVINE_ERROR"),
        (r.EME_LICENSE_UPDATE_FAILED = "EME_LICENSE_UPDATE_FAILED"),
        (r.EME_HEADER_KEY_VALUE_MISMATCH = "EME_HEADER_KEY_VALUE_MISMATCH"),
        (r.EME_HEADER_MISSING_CHALLENGE = "EME_HEADER_MISSING_CHALLENGE"),
        (r.EME_INIT_DATA_MALFORMED = "EME_INIT_DATA_MALFORMED"),
        (r.EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM =
          "EME_CANNOT_SET_CERTIFICATE_FOR_PLATFORM"),
        (r.EME_MEDIA_KEY_SESSION_V0_1B_ERROR =
          "EME_MEDIA_KEY_SESSION_V0_1B_ERROR"),
        (r.EME_MEDIA_KEY_SESSION_SAFARI_ERROR =
          "EME_MEDIA_KEY_SESSION_SAFARI_ERROR"),
        (r.EME_NO_SUPPORTED_CONFIGURATION = "EME_NO_SUPPORTED_CONFIGURATION"),
        (r.EME_NOT_SUPPORTED_ERROR = "EME_NOT_SUPPORTED_ERROR"),
        (r.EME_INVALID_STATE_ERROR = "EME_INVALID_STATE_ERROR"),
        (r.EME_UNKNOWN_ERROR = "EME_UNKNOWN_ERROR"),
        (r.DISALLOW_PROTECTED_TRACK_ERROR = "DISALLOW_PROTECTED_TRACK_ERROR"),
        (r.FILE_FORMAT_NOT_SUPPORTED = "FILE_FORMAT_NOT_SUPPORTED"),
        (r.FILE_MALFORMED_SEEKTABLE = "FILE_MALFORMED_SEEKTABLE"),
        (r.FILE_MALFORMED_PSSH = "FILE_MALFORMED_PSSH"),
        (r.FILE_NOT_RESOLVED = "FILE_NOT_RESOLVED"),
        (r.FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO =
          "FRAGMENT_ONLINE_REQUEST_FAILED_WITH_ZERO"),
        (r.FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO =
          "FRAGMENT_OFFLINE_REQUEST_FAILED_WITH_ZERO"),
        (r.FRAGMENT_REQUEST_FAILED_WITH_ZERO =
          "FRAGMENT_REQUEST_FAILED_WITH_ZERO"),
        (r.FRAGMENT_REQUEST_FAILED_WITH_STATUS =
          "FRAGMENT_REQUEST_FAILED_WITH_STATUS"),
        (r.FRAGMENT_REQUEST_EMPTY_RESPONSE = "FRAGMENT_REQUEST_EMPTY_RESPONSE"),
        (r.FRAGMENT_REQUEST_UNEXPECTED_LENGTH =
          "FRAGMENT_REQUEST_UNEXPECTED_LENGTH"),
        (r.INVALID_TRACK = "INVALID_TRACK"),
        (r.PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE =
          "PLAYER_ATTEMPTED_VOLUME_OUT_OF_RANGE"),
        (r.PLAYER_BUFFER_QUOTA_EXCEEDED = "PLAYER_BUFFER_QUOTA_EXCEEDED"),
        (r.PLAYER_CANNOT_FIND_PLAYABLE_URI = "PLAYER_CANNOT_FIND_PLAYABLE_URI"),
        (r.PLAYER_INVALID_INTERNAL_STATE = "PLAYER_INVALID_INTERNAL_STATE"),
        (r.PLAYER_CONTAINER_ELEMENT_NOT_FOUND =
          "PLAYER_CONTAINER_ELEMENT_NOT_FOUND"),
        (r.PLAYER_MEDIA_ERROR = "PLAYER_MEDIA_ERROR"),
        (r.PLAYER_PLAYBACK_ERROR = "PLAYER_PLAYBACK_ERROR"),
        (r.PLAYER_TIMEOUT_ERROR = "PLAYER_TIMEOUT_ERROR"),
        (r.MEDIA_ABORTED = "MEDIA_ABORTED"),
        (r.MEDIA_DECODING_ERROR = "MEDIA_DECODING_ERROR"),
        (r.MEDIA_NETWORK_ERROR = "MEDIA_NETWORK_ERROR"),
        (r.MEDIA_NOT_SUPPORTED = "MEDIA_NOT_SUPPORTED"),
        (r.LICENSE_RESOLVE_INVALID_RESPONSE =
          "LICENSE_RESOLVE_INVALID_RESPONSE"),
        (r.LICENSE_RESOLVER_CANT_RESOLVE_URL =
          "LICENSE_RESOLVER_CANT_RESOLVE_URL"),
        (r.LICENSE_RESOLVER_DEPRECATED_VERSION =
          "LICENSE_RESOLVER_DEPRECATED_VERSION"),
        (r.LIST_PLAYER_NO_TRACK_PLAYER = "LIST_PLAYER_NO_TRACK_PLAYER"),
        (r.LIST_PLAYER_NO_LIST = "LIST_PLAYER_NO_LIST"),
        (r.LIST_PLAYER_INVALID_ARGUMENT = "LIST_PLAYER_INVALID_ARGUMENT"),
        (r.LIST_PLAYER_FORBIDDEN = "LIST_PLAYER_FORBIDDEN"),
        (r.STORAGE_ERROR = "STORAGE_ERROR"),
        (r.STORAGE_FAILED_WITH_STATUS = "STORAGE_FAILED_WITH_STATUS"),
        (r.STORAGE_RETURNED_NO_TRACKS = "STORAGE_RETURNED_NO_TRACKS"),
        (r.STORAGE_TRACK_MANIFEST_FAILED = "STORAGE_TRACK_MANIFEST_FAILED"),
        (r.STORAGE_TRACK_MANIFEST_EMPTY = "STORAGE_TRACK_MANIFEST_EMPTY"),
        (r.STORAGE_VIDEO_MANIFEST_FAILED = "STORAGE_VIDEO_MANIFEST_FAILED"),
        (r.TRACK_DATA_ALREADY_FINALIZED = "TRACK_DATA_ALREADY_FINALIZED"),
        (r.TSV_SENDING_FAILED = "TSV_SENDING_FAILED"),
        (r.PLAYBACK_STATS_SENDING_FAILED = "PLAYBACK_STATS_SENDING_FAILED"),
        (r.PLAYBACK_START_SENDING_FAILED = "PLAYBACK_START_SENDING_FAILED"),
        (r.UNKNOWN = "UNKNOWN");
    },
    70771: function (e, t, i) {
      var s, r;
      i.d(t, {
        j: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).KEY_SESSION_MESSAGE = "message"),
        (r.KEY_SESSION_STATUSES_CHANGE = "keystatuseschange"),
        (r.MEDIA_SOURCE_OPEN = "sourceopen"),
        (r.MEDIA_SOURCE_CLOSE = "sourceclose"),
        (r.SOURCE_BUFFER_UPDATE_END = "updateend"),
        (r.MS_KEY_ADDED = "mskeyadded"),
        (r.MS_KEY_ERROR = "mskeyerror"),
        (r.MS_KEY_MESSAGE = "mskeymessage"),
        (r.MS_NEEDKEY = "msneedkey"),
        (r.WEBKIT_KEY_ADDED = "webkitkeyadded"),
        (r.WEBKIT_KEY_ERROR = "webkitkeyerror"),
        (r.WEBKIT_KEY_MESSAGE = "webkitkeymessage"),
        (r.WEBKIT_NEEDKEY = "webkitneedkey"),
        (r.V0_1B_KEY_ADDED = "keyadded"),
        (r.V0_1B_KEY_ERROR = "keyerror"),
        (r.V0_1B_KEY_MESSAGE = "keymessage"),
        (r.V0_1B_NEEDKEY = "needkey"),
        (r.MEDIA_CANPLAY = "canplay"),
        (r.MEDIA_CANPLAYTHROUGH = "canplaythrough"),
        (r.MEDIA_DURATIONCHANGE = "durationchange"),
        (r.MEDIA_ENCRYPTED = "encrypted"),
        (r.MEDIA_ENDED = "ended"),
        (r.MEDIA_ERROR = "error"),
        (r.MEDIA_LOADEDMETADATA = "loadedmetadata"),
        (r.MEDIA_PAUSE = "pause"),
        (r.MEDIA_PLAY = "play"),
        (r.MEDIA_PLAYING = "playing"),
        (r.MEDIA_SEEKING = "seeking"),
        (r.MEDIA_TIMEUPDATE = "timeupdate"),
        (r.MEDIA_WAITING = "waiting"),
        (r.MEDIA_RATECHANGE = "ratechange"),
        (r.MEDIA_RESIZE = "resize"),
        (r.INTERNAL_ENCRYPTED = "__encrypted"),
        (r.INTERNAL_PLAYER_CANPLAY = "__canplay"),
        (r.INTERNAL_PLAYER_CANPLAYTHROUGH = "__canplaythrough"),
        (r.INTERNAL_MEDIA_REQUIRES_DURATION = "__requiresduration"),
        (r.INTERNAL_PLAYER_LOADED_METADATA = "__loadedmetadata"),
        (r.BUFFER_APPEND_ERROR = "append_error"),
        (r.BUFFER_STALLED = "stalled"),
        (r.BUFFERING_START = "buffering_start"),
        (r.BUFFERING_END = "buffering_end"),
        (r.BUFFER_SOURCE_OPEN = "source_open"),
        (r.BUFFER_SOURCE_CLOSE = "source_close"),
        (r.BUFFER_UPDATE_END = "update_end"),
        (r.BUFFER_QUOTA_EXCEEDED = "quota_exceeded"),
        (r.EME_LICENSE_REQUEST_ERROR = "license_request_error"),
        (r.EME_LICENSE_REQUEST_CAPPED = "license_request_capped"),
        (r.LIST_PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed"),
        (r.LIST_PLAYER_BEFORE_LIST_CHANGE = "before_list_change"),
        (r.LIST_PLAYER_BEFORE_NEXT = "before_next"),
        (r.LIST_PLAYER_BEFORE_PLAYER_LOAD = "before_player_load"),
        (r.LIST_PLAYER_BEFORE_PREVIOUS = "before_previous"),
        (r.LIST_PLAYER_BEFORE_TRACK_LOAD = "before_track_load"),
        (r.LIST_PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change"),
        (r.LIST_PLAYER_BUFFER_STALLED = "stalled"),
        (r.LIST_PLAYER_BUFFERING_START = "buffering_start"),
        (r.LIST_PLAYER_BUFFERING_END = "buffering_end"),
        (r.LIST_PLAYER_REBUFFERING_START = "rebuffering_start"),
        (r.LIST_PLAYER_REBUFFERING_END = "rebuffering_end"),
        (r.LIST_PLAYER_CAPPED = "capped"),
        (r.LIST_PLAYER_CLEARED = "cleared"),
        (r.LIST_PLAYER_DURATION_CHANGED = "duration_changed"),
        (r.LIST_PLAYER_ERROR = "error"),
        (r.LIST_PLAYER_ERROR_SYNC = "error_sync"),
        (r.LIST_PLAYER_LIST_CHANGED = "list_change"),
        (r.LIST_PLAYER_LIST_ENDED = "list_ended"),
        (r.LIST_PLAYER_LOAD_VIDEO = "load_video"),
        (r.LIST_PLAYER_MAX_LIST_ERRORS_REACHED = "max_list_errors_reached"),
        (r.LIST_PLAYER_PAUSED = "paused"),
        (r.LIST_PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
        (r.LIST_PLAYER_PLAYER_LOAD = "player_load"),
        (r.LIST_PLAYER_PLAYING = "playing"),
        (r.LIST_PLAYER_POSITION_CHANGED = "position_changed"),
        (r.LIST_PLAYER_PROGRESS = "progress"),
        (r.LIST_PLAYER_REPEAT_MODE_CHANGED = "repeat_mode_changed"),
        (r.LIST_PLAYER_SHUFFLE_CHANGED = "shuffle_changed"),
        (r.LIST_PLAYER_STOPPED = "stopped"),
        (r.LIST_PLAYER_STOPPED_VIDEO = "stopped_video"),
        (r.LIST_PLAYER_TRACKING_DATA_CREATED = "tracking_data_created"),
        (r.LIST_PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
        (r.LIST_PLAYER_TRACK_ENDED = "track_ended"),
        (r.LIST_PLAYER_TRACK_LOADED = "track_loaded"),
        (r.LIST_PLAYER_TRACK_TIMEOUT = "track_timeout"),
        (r.LIST_PLAYER_TRACK_UNPLAYABLE = "track_unplayable"),
        (r.LIST_PLAYER_DATA_CREATED = "tracking_data_created"),
        (r.LIST_PLAYER_DATA_FINALIZED = "tracking_data_finalized"),
        (r.LIST_PLAYER_VOLUME_CHANGED = "volume_changed"),
        (r.LIST_PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended"),
        (r.LIST_PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed"),
        (r.LIST_PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed"),
        (r.LIST_PLAYER_SEEK_HANDLED = "list_player_seek_handled"),
        (r.LIST_PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed"),
        (r.LIST_PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed"),
        (r.LIST_PLAYER_MUTED_CHANGED = "muted_changed"),
        (r.LIST_PLAYER_SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded"),
        (r.LIST_PLAYER_PLAYING_PROFILE_CHANGED = "playing_profile_changed"),
        (r.LOGGER_ERROR = "error"),
        (r.PLAYER_AUTOPLAY_FAILED = "player_autoplay_failed"),
        (r.PLAYER_BEFORE_LOAD = "before_load"),
        (r.PLAYER_BEFORE_STOP = "before_stop"),
        (r.PLAYER_BEFORE_VOLUME_CHANGE = "before_volume_change"),
        (r.PLAYER_BUFFER_STALLED = "stalled"),
        (r.PLAYER_BUFFERING_START = "buffering_start"),
        (r.PLAYER_BUFFERING_END = "buffering_end"),
        (r.PLAYER_CAN_PRELOAD = "can_preload"),
        (r.PLAYER_CAPPED = "capped"),
        (r.PLAYER_DURATION_CHANGED = "duration_changed"),
        (r.PLAYER_ENDED = "ended"),
        (r.PLAYER_ENDED_VIDEO = "ended_video"),
        (r.PLAYER_ERROR = "error"),
        (r.PLAYER_WARNING = "warning"),
        (r.PLAYER_LOG_CLIENT_EVENT = "log_client_event"),
        (r.PLAYER_FIRST_BYTES = "first_bytes"),
        (r.PLAYER_KEY_RECEIVED = "key"),
        (r.PLAYER_LOAD = "load"),
        (r.PLAYER_LOAD_VIDEO = "load_video"),
        (r.PLAYER_LOADING_FAILED = "loading_failed"),
        (r.PLAYER_MUTED_CHANGED = "muted_changed"),
        (r.PLAYER_PAUSED = "paused"),
        (r.PLAYER_PLAY = "play"),
        (r.PLAYER_PLAYING = "playing"),
        (r.PLAYER_POSITION_CHANGED = "position_changed"),
        (r.PLAYER_PRELOADING_ERROR = "preloading_error"),
        (r.PLAYER_PROGRESS = "progress"),
        (r.PLAYER_REBUFFERING_START = "rebuffering_start"),
        (r.PLAYER_REBUFFERING_END = "rebuffering_end"),
        (r.PLAYER_STALLED = "stalled"),
        (r.PLAYER_STOPPED = "stopped"),
        (r.PLAYER_STOPPED_VIDEO = "stopped_video"),
        (r.PLAYER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
        (r.PLAYER_TIMEOUT = "timeout"),
        (r.PLAYER_PLAYBACK_START = "playback_start"),
        (r.PLAYER_TRACKING_DATA_CREATED = "tracking_data_created"),
        (r.PLAYER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
        (r.PLAYER_VIDEO_ELEMENT_APPENDED = "video_element_appended"),
        (r.PLAYER_VIDEO_ELEMENT_REMOVED = "video_element_removed"),
        (r.PLAYER_VIDEO_PROFILE_CHANGED = "video_profile_changed"),
        (r.PLAYER_DISPLAYED_CUES_CHANGED = "displayed_cues_changed"),
        (r.PLAYER_SEEKING = "seeking"),
        (r.PLAYER_FRAGMENT_FETCHED = "fragment_fetched"),
        (r.PLAYER_FRAGMENT_FETCH_ERROR = "fragment_fetch_error"),
        (r.PLAYER_VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved"),
        (r.PLAYER_VIDEO_MANIFEST_RESOLVE_FAILED =
          "video_manifest_resolve_failed"),
        (r.PLAYER_PLAYBACK_SPEED_CHANGED = "playback_speed_changed"),
        (r.PLAYER_SUBTITLE_LANGUAGES_LOADED = "subtitle_languages_loaded"),
        (r.PLAYER_VIDEO_RESIZED = "resize"),
        (r.PLAYER_PLAYING_PROFILE_CHANGED = "playing_profile_changed"),
        (r.PLAYER_MANAGER_READY = "ready"),
        (r.TRACKER_PLAYBACK_START = "playback_start"),
        (r.TRACKER_PLAYED_THRESHOLD_REACHED = "played_threshold_reached"),
        (r.TRACKER_TRACKING_DATA_CREATED = "tracking_data_created"),
        (r.TRACKER_TRACKING_DATA_FINALIZED = "tracking_data_finalized"),
        (r.TRACKER_FIRST_QUARTILE = "tracking_first_quartile"),
        (r.TRACKER_MIDPOINT = "tracking_midpoint"),
        (r.TRACKER_THIRD_QUARTILE = "tracking_third_quartile"),
        (r.TRACKER_LOG_CLIENT_EVENT = "tracker_log_client_event"),
        (r.VIDEO_MANIFEST_RESOLVED = "video_manifest_resolved"),
        (r.VIDEO_MANIFEST_RESOLVE_FAILED = "video_manifest_resolve_failed"),
        (r.ABR_MANAGER_BITRATE_CHANGE = "bitrate_change"),
        (r.REPORTING_START = "reporting_start"),
        (r.REPORTING_CREATIVE_VIEW = "reporting_creative_view"),
        (r.REPORTING_FIRST_QUARTILE = "reporting_first_quartile"),
        (r.REPORTING_MIDPOINT = "reporting_midpoint"),
        (r.REPORTING_THIRD_QUARTILE = "reporting_third_quartile"),
        (r.REPORTING_COMPLETE = "reporting_complete"),
        (r.REPORTING_PAUSE = "reporting_pause"),
        (r.REPORTING_RESUME = "reporting_resume"),
        (r.REPORTING_ERROR = "reporting_error");
    },
    80842: function (e, t, i) {
      var s, r;
      i.d(t, {
        v: function () {
          return s;
        },
      }),
        ((r = s || (s = {})).WIDEVINE = "com.widevine.alpha"),
        (r.PLAYREADY = "com.microsoft.playready"),
        (r.PLAYREADY_HARDWARE = "com.microsoft.playready.hardware"),
        (r.FAIRPLAY = "com.apple.fps.1_0"),
        (r.INVALID_SPOTIFY_KEY = "com.spotify.invalid");
    },
    18958: function (e, t, i) {
      let s;
      i.d(t, {
        B: function () {
          return r;
        },
        vp: function () {
          return A;
        },
      });
      class r {
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
      let n = "undefined" != typeof window,
        _ = [];
      function E() {
        var e;
        let t = _.splice(0);
        if (t.length)
          for (let i = 0, s = t.length; i < s; i++)
            null === (e = t[i]) || void 0 === e || e.call(t);
      }
      n && "function" == typeof window.postMessage
        ? (function () {
            let e =
              window.location.origin ||
              `${window.location.protocol}//${window.location.hostname}`;
            if (
              ((s = window.postMessage.bind(window, "@execute_deferreds", e)),
              !window.__hasDeferredHandler)
            ) {
              "function" == typeof Object.defineProperty
                ? Object.defineProperty(window, "__hasDeferredHandler", {
                    value: !0,
                  })
                : (window.__hasDeferredHandler = !0);
              let t = function (t) {
                (t.origin === e || "@execute_deferreds" === t.data) && E();
              };
              window.addEventListener
                ? window.addEventListener("message", t)
                : window.attachEvent && window.attachEvent("onmessage", t);
            }
          })()
        : "function" == typeof queueMicrotask
        ? (s = queueMicrotask.bind(null, E))
        : (s =
            "function" == typeof setImmediate
              ? setImmediate.bind(null, E)
              : setTimeout.bind(null, E, 10));
      let a = (e) => {
        let t = !_.length;
        _.push(e), t && s();
      };
      function o(e, t, i) {
        for (let s = 0, r = e.length; s < r; s++) {
          let r = e[s];
          if (
            (null == r ? void 0 : r.listener) === t &&
            r.options.once === i.once
          )
            return s;
        }
        return -1;
      }
      function l(e, t, i, s = {}) {
        if (!i) return !1;
        let r = e[t];
        return !r || !r.length || -1 === o(r, i, s);
      }
      function d(e, t, i, s = {}) {
        if (!t || !i) return;
        let r = e[t],
          n = { listener: i, options: s };
        if (!r) {
          e[t] = [n];
          return;
        }
        r.push(n);
      }
      n &&
        ("function" == typeof window.__modDefFn
          ? (a = window.__modDefFn)
          : "function" == typeof Object.defineProperty
          ? Object.defineProperty(window, "__modDefFn", { value: a })
          : (window.__modDefFn = a));
      class A {
        constructor() {
          (this._listeners = {}),
            (this._metaListeners = { add: {}, remove: {} });
        }
        _dispatchFromStore(e, t) {
          let i = t.type,
            s = e[i];
          if (s) {
            for (let e of (s = s.slice(0)))
              if (
                (e.listener.call(this, t),
                e.options.once && this.removeListener(i, e.listener, e.options),
                t.immediateStopped)
              )
                break;
          }
        }
        createEvent(e, t) {
          return new r(e, t);
        }
        on(e, t, i = {}) {
          if (!e) throw TypeError("Argument `eventType` is required.");
          if (!t) return this;
          let s = this._listeners;
          if (l(s, e, t, i)) {
            let n = this._metaListeners.add,
              _ = n[e];
            if (_ && _.length) {
              let s = new r(e, { listener: t, options: i });
              if ((this._dispatchFromStore(n, s), s.defaultPrevented))
                return this;
            }
            d(s, e, t, i);
          }
          return this;
        }
        addListener(e, t, i = {}) {
          return this.on(e, t, i);
        }
        addListeners(e) {
          for (let t in e) e.hasOwnProperty(t) && this.on(t, e[t]);
          return this;
        }
        once(e, t) {
          return this.on(e, t, { once: !0 });
        }
        removeListener(e, t, i = {}) {
          if (!e) throw TypeError("Argument `eventType` is required.");
          if (!t) return this;
          let s = this._listeners[e];
          if (!s) return this;
          let n = o(s, t, i);
          if (-1 === n) return this;
          let _ = this._metaListeners.remove[e];
          if (_ && _.length) {
            let s = new r(e, { listener: t, options: i });
            if (
              (this._dispatchFromStore(this._metaListeners.remove, s),
              s.defaultPrevented)
            )
              return this;
          }
          return s.splice(n, 1), this;
        }
        removeListeners(e) {
          for (let t in e) e.hasOwnProperty(t) && this.removeListener(t, e[t]);
          return this;
        }
        removeAllListeners(e) {
          return e ? (this._listeners[e] = []) : (this._listeners = {}), this;
        }
        emit(e, t) {
          if (!e) throw TypeError("Argument `eventType` is required.");
          let i = this.createEvent(e, t);
          return a(() => this._dispatchFromStore(this._listeners, i)), i;
        }
        emitSync(e, t) {
          if (!e) throw TypeError("Argument `eventType` is required.");
          let i = this.createEvent(e, t);
          return this._dispatchFromStore(this._listeners, i), i;
        }
        emitEvent(e) {
          return a(() => this._dispatchFromStore(this._listeners, e)), e;
        }
        emitEventSync(e) {
          return this._dispatchFromStore(this._listeners, e), e;
        }
        emitAndWait(e, t, i) {
          if (!e) throw TypeError("Argument `eventType` is required.");
          let s = this.createEvent(e, t);
          return (
            a(() => {
              this._dispatchFromStore(this._listeners, s), i.call(this, s);
            }),
            s
          );
        }
        emitEventAndWait(e, t) {
          return (
            a(() => {
              this._dispatchFromStore(this._listeners, e), t.call(this, e);
            }),
            e
          );
        }
        proxyEmit(e, t, i) {
          if (!e || "function" != typeof e.on)
            throw TypeError("Proxy source must be an EventEmitter");
          if (e === this)
            throw ReferenceError("Cannot create recursive proxy.");
          if (!t || !i)
            throw TypeError(
              "Parameter sourceType and targetType are required."
            );
          let s = (e) => {
            e.stopped ||
              this.emitAndWait(i, e.data, (t) => {
                t.defaultPrevented && e.preventDefault();
              });
          };
          return e.on(t, s), s;
        }
        proxyEmitSync(e, t, i) {
          if (!e || "function" != typeof e.on)
            throw TypeError("Proxy source must be an EventEmitter");
          if (e === this)
            throw ReferenceError("Cannot create recursive proxy.");
          if (!t || !i)
            throw TypeError(
              "Parameter sourceType and targetType are required."
            );
          let s = (e) => {
            if (e.stopped) return;
            let t = this.createEvent(i, e.data);
            this.emitEventSync(t), t.defaultPrevented && e.preventDefault();
          };
          return e.on(t, s), s;
        }
        proxyEmitAll(e, t) {
          for (let i in t) t.hasOwnProperty(i) && this.proxyEmit(e, i, t[i]);
        }
        proxyEmitAllSync(e, t) {
          for (let i in t)
            t.hasOwnProperty(i) && this.proxyEmitSync(e, i, t[i]);
        }
        onAddListener(e, t, i = {}) {
          let s = this._metaListeners.add;
          return l(s, e, t, i) && d(s, e, t, i), this;
        }
        onRemoveListener(e, t, i = {}) {
          let s = this._metaListeners.remove;
          return l(s, e, t, i) && d(s, e, t, i), this;
        }
      }
    },
  },
]);
