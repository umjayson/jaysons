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
      (e._sentryDebugIds[r] = "1012c2f1-53b3-4b20-ad75-fca39cd6a871"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-1012c2f1-53b3-4b20-ad75-fca39cd6a871"));
  } catch (e) {}
})();
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8581],
  {
    68581: function (e, r, t) {
      t.d(r, {
        checkPlatform: function () {
          return c;
        },
      });
      var n = t(69786);
      function c() {
        return URL && URL.createObjectURL
          ? n.C.create({
              noServerCertificate: !0,
              transport: {
                request: (...e) =>
                  Promise.reject(
                    TypeError("Unexpected call to mock Transport.request")
                  ),
              },
            }).then(() => !0)
          : Promise.reject(TypeError("URL.createObjectURL is not supported"));
      }
    },
  },
]);
