!(function () {
  try {
    var t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      e = Error().stack;
    e &&
      ((t._sentryDebugIds = t._sentryDebugIds || {}),
      (t._sentryDebugIds[e] = "49dda069-2027-4405-9802-5f9264a34b0a"),
      (t._sentryDebugIdIdentifier =
        "sentry-dbid-49dda069-2027-4405-9802-5f9264a34b0a"));
  } catch (t) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5270],
  {
    34376: function (t, e, n) {
      n.d(e, {
        D: function () {
          return r;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          decode: function () {
            return u;
          },
          encode: function () {
            return a;
          },
        });
      let i = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        s = {},
        l = {};
      !(function () {
        for (let t = 0, e = i.length; t < e; ++t) l[i[t]] = t;
        for (let t = 0; t < 16; ++t) s["0123456789abcdef"[t]] = t;
        for (let t = 0; t < 16; ++t) s["0123456789ABCDEF"[t]] = t;
      })();
      let o =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        h = (() => {
          let t = [];
          for (let e = 0; e < 256; ++e) t[e] = 255;
          for (let e = 0; e < o.length; ++e) t[o.charCodeAt(e)] = e;
          return String.fromCharCode(...t);
        })(),
        a = function (t) {
          let e = String(t),
            n = [],
            r = e.length,
            i = 0;
          for (; i < r; ) {
            let t = 255 & e.charCodeAt(i++);
            if (i === r) {
              n.push(o.charAt(t >> 2), o.charAt((3 & t) << 4), "==");
              break;
            }
            let s = e.charCodeAt(i++);
            if (i === r) {
              n.push(
                o.charAt(t >> 2),
                o.charAt(((3 & t) << 4) | ((240 & s) >> 4)),
                o.charAt((15 & s) << 2),
                "="
              );
              break;
            }
            let l = e.charCodeAt(i++);
            n.push(
              o.charAt(t >> 2),
              o.charAt(((3 & t) << 4) | ((240 & s) >> 4)),
              o.charAt(((15 & s) << 2) | ((192 & l) >> 6)),
              o.charAt(63 & l)
            );
          }
          return n.join("");
        },
        u = function (t) {
          let e, n;
          let r = String(t),
            i = [],
            s = r.length,
            l = 0;
          for (;;) {
            do e = h.charCodeAt(255 & r.charCodeAt(l++));
            while (255 === e && l < s);
            do n = h.charCodeAt(255 & r.charCodeAt(l++));
            while (255 === n && l < s);
            if (255 === n) break;
            i.push(((e << 2) | (n >> 4)) & 255);
            do e = h.charCodeAt(255 & r.charCodeAt(l++));
            while (255 === e && l < s);
            if (255 === e) break;
            i.push(((n << 4) | (e >> 2)) & 255);
            do n = h.charCodeAt(255 & r.charCodeAt(l++));
            while (255 === n && l < s);
            if (255 === n) break;
            i.push(((e << 6) | n) & 255);
          }
          return (function (t) {
            if (t.length < 4096) return String.fromCharCode(...t);
            let e = 0,
              n = [];
            do
              n.push(String.fromCharCode(...t.slice(e, e + 4096))), (e += 4096);
            while (e < t.length);
            return n.join("");
          })(i);
        };
      "undefined" != typeof window &&
        window.btoa &&
        window.atob &&
        ((a = (t) => window.btoa(t)), (u = (t) => window.atob(t)));
    },
    51952: function (t, e, n) {
      var r, i;
      n.d(e, {
        eV: function () {
          return l;
        },
        Hx: function () {
          return a;
        },
      });
      let s =
        "undefined" != typeof globalThis &&
        "function" == typeof globalThis.queueMicrotask
          ? globalThis.queueMicrotask.bind(globalThis)
          : (function () {
              if ("undefined" == typeof Promise) return (t) => setTimeout(t, 0);
              let t = Promise.resolve();
              return (e) => {
                t.then(e).catch((t) =>
                  setTimeout(() => {
                    throw t;
                  }, 0)
                );
              };
            })();
      ((i = r || (r = {})).INVALID_IDENT_DATA = "INVALID_IDENT_DATA"),
        (i.LOGGING_REQUEST_FAILED = "LOGGING_REQUEST_FAILED");
      let l = {
        UNKNOWN: "unknown",
        EMPTY: "",
        ZERO: 0,
        EMPTY_VERSION: "0.0.0",
      };
      class o extends Error {
        constructor(t, e, n) {
          super(e),
            (this.name = "LoggingError"),
            (this.code = t),
            (this.status = n || 0);
        }
      }
      function h(t, e) {
        let n = t.indexOf(e);
        return -1 === n ? [t, ""] : [t.slice(0, n), t.slice(n + e.length)];
      }
      class a {
        constructor(t) {
          (this._transport = t.transport),
            (this._endpoint = t.endpoint || "@webgate/melody"),
            (this._batchQueue = []),
            (this._identData = Promise.all([
              t.sdkId,
              t.platform,
              t.clientVersion,
            ]).then(([t, e, n]) => ({
              sdk_id: t || l.EMPTY,
              platform: e || l.EMPTY,
              client_version: n || l.EMPTY_VERSION,
            })));
        }
        _assertValidIdentData(t) {
          if (!t.sdk_id)
            throw new o(
              r.INVALID_IDENT_DATA,
              "sdkId must be a non-empty string.",
              0
            );
        }
        _sendBatchedLogs() {
          return this._identData.then((t) => {
            this._assertValidIdentData(t);
            let e = this._batchQueue.splice(0, this._batchQueue.length);
            if (e.length) {
              let n = e.reduce(function (t, e) {
                var n;
                let r = e.endpoint;
                return (
                  void 0 === r ||
                    ((t[r] = null !== (n = t[r]) && void 0 !== n ? n : []),
                    t[r].push(e)),
                  t
                );
              }, {});
              return Promise.all(
                Object.keys(n).map((e) => {
                  var i;
                  let s =
                    null === (i = n[e]) || void 0 === i
                      ? void 0
                      : i.map(({ payload: t }) => t);
                  return (null == s ? void 0 : s.length)
                    ? this._transport
                        .request(`${this._endpoint}${e}`, {
                          method: "POST",
                          payload: JSON.stringify(
                            Object.assign({ messages: s }, t)
                          ),
                          retry: {
                            maxRetries: 5,
                            condition: (t) => 202 !== t.status,
                          },
                        })
                        .then(
                          ({ status: t }) =>
                            202 === t ||
                            Promise.reject(
                              new o(
                                r.LOGGING_REQUEST_FAILED,
                                `Logging service responded with status ${t}`,
                                t
                              )
                            )
                        )
                    : Promise.resolve(!0);
                })
              ).then(() => !0);
            }
            return Promise.resolve(!0);
          });
        }
        _sendLog(t, e) {
          return this.sendLog(t, e);
        }
        sendLog(t, e, n) {
          let i = null == n ? void 0 : n.forget;
          if (null == n ? void 0 : n.batch) {
            if (i)
              throw Error("'forget' cannot be used together with 'batch'.");
            return new Promise((n) => {
              this._batchQueue.push({ endpoint: t, payload: e }),
                s(() => {
                  this._sendBatchedLogs().then(n);
                });
            });
          }
          return this._identData
            .then((n) => {
              this._assertValidIdentData(n);
              let r = this._endpoint + t,
                s = i ? this._transport.getLastToken() : null;
              return (
                s &&
                  (r = (function (t, e, n) {
                    let [r, i] = h(t, "#"),
                      [s, l] = h(r, "?"),
                      o = i ? `#${i}` : "",
                      a = `${e}=${encodeURIComponent(n)}`;
                    for (let t of l.split("&"))
                      t.length > 0 && h(t, "=")[0] !== e && (a += `&${t}`);
                    return `${s}?${a}${o}`;
                  })(r, "access_token", s)),
                this._transport.request(r, {
                  method: "POST",
                  payload: JSON.stringify(
                    Object.assign(Object.assign({}, e), n)
                  ),
                  forget: i,
                  retry: { maxRetries: 5, condition: (t) => 202 !== t.status },
                })
              );
            })
            .then(
              ({ status: t }) =>
                !!i ||
                202 === t ||
                Promise.reject(
                  new o(
                    r.LOGGING_REQUEST_FAILED,
                    `Logging service responded with status ${t}`,
                    t
                  )
                )
            );
        }
      }
    },
    14440: function (t, e, n) {
      n.d(e, {
        z: function () {
          return l;
        },
      });
      let r = "Node already exists in another list!";
      class i {
        constructor(t) {
          (this.listId = null),
            (this.key = ""),
            (this.prev = null),
            (this.next = null),
            (this.value = null),
            (this.value = t);
        }
      }
      class s {
        constructor() {
          (this._id = {}),
            (this.length = 0),
            (this.first = null),
            (this.last = null);
        }
        append(t) {
          if (t.listId) throw Error(r);
          return (
            (t.listId = this._id),
            this.first
              ? this.last &&
                ((t.prev = this.last),
                (t.next = null),
                (this.last.next = t),
                (this.last = t))
              : ((this.first = t), (this.last = t)),
            ++this.length
          );
        }
        insertAfter(t, e) {
          if (e.listId) throw Error(r);
          return (
            (e.listId = this._id),
            (e.prev = t),
            (e.next = t.next),
            t.next && (t.next.prev = e),
            (t.next = e),
            e.prev === this.last && (this.last = e),
            ++this.length
          );
        }
        remove(t) {
          return (
            !!this.length &&
            t.listId === this._id &&
            (this.length > 1
              ? (t.prev && (t.prev.next = t.next),
                t.next && (t.next.prev = t.prev),
                t === this.first
                  ? (this.first = t.next)
                  : t === this.last && (this.last = t.prev))
              : ((this.first = null), (this.last = null)),
            (t.listId = null),
            (t.prev = null),
            (t.next = null),
            this.length--,
            !0)
          );
        }
      }
      class l {
        constructor(t) {
          (this._limit = 100),
            (this._list = new s()),
            (this._map = {}),
            (this._limit = t);
        }
        get(t) {
          let e = this._map[t];
          if (!e) return null;
          let n = this._list;
          return n.remove(e), n.append(e), e.value;
        }
        set(t, e) {
          if (!t) throw TypeError("Cache key cannot be empty.");
          let n = this._list,
            r = this._map;
          if (n.length >= this._limit) {
            let t = n.first;
            (r[t.key] = null), n.remove(t);
          }
          let s = r[t];
          s ? (n.remove(s), (s.value = e)) : ((s = new i(e)).key = t),
            n.append(s),
            (r[t] = s);
        }
        remove(t) {
          let e = this._map,
            n = e[t];
          return n ? (this._list.remove(n), (e[t] = null), n.value) : null;
        }
        keys() {
          let t = [],
            e = this._list.first;
          for (; e; ) t.push(e.key), (e = e.next);
          return t.reverse();
        }
        values() {
          let t = [],
            e = this._list.first;
          for (; e; ) t.push(e.value), (e = e.next);
          return t.reverse();
        }
        size() {
          return this._list.length;
        }
        clear() {
          let t = this._list.length;
          return (this._list = new s()), (this._map = {}), t;
        }
      }
    },
  },
]);
