/**
 * Credits / Some snippets forked from https://github.com/41Baloo/
 */
class _injPow {
  constructor(n, e, t, r = !0) {
    (this.workers = []),
      (this.challenge = t),
      (this.difficulty = e),
      (this.publicSalt = n),
      (this.numeric = r),
      (this.workerScript =
        "\n        importScripts('https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js');\n\n        self.onmessage = function(e) {\n\n            function incrementHexString(str) {\n                const chars = '0123456789abcdef';\n                let carry = 1;\n                let res = '';\n                for (let i = str.length - 1; i >= 0; i--) {\n                    let index = chars.indexOf(str[i]) + carry;\n                    if (index >= chars.length) {\n                        index = 0;\n                        carry = 1;\n                    } else {\n                        carry = 0;\n                    }\n                    res = chars[index] + res;\n                }\n                return carry ? '0' + res : res;\n            }\n\n            function getStringByIndex(index, length) {\n                const chars = '0123456789abcdef';\n                let res = '';\n                for (let i = 0; i < length; i++) {\n                    res = chars[index % chars.length] + res;\n                    index = Math.floor(index / chars.length);\n                }\n                return res.padStart(length, '0');\n            }\n\n            const {\n                publicSalt,\n                challenge,\n                start,\n                end,\n                numeric,\n                difficulty,\n            } = e.data;\n            let resp = {\n                match: \"\",\n                solution: \"\",\n                access: \"\"\n            };\n\n            if (numeric) {\n                for (let i = start; i <= end; i++) {\n                    if (CryptoJS.SHA256(publicSalt + i).toString() === challenge) {\n                        resp.solution = i;\n                        resp.access = CryptoJS.SHA256(i.toString() + publicSalt).toString();\n                        self.postMessage(resp);\n                        self.close();\n                        return;\n                    }\n                }\n            } else {\n                for (let i = start; i <= end; i++) {\n                    let current = getStringByIndex(i, difficulty);\n                    if (CryptoJS.SHA256(publicSalt + current).toString() === challenge) {\n                        resp.solution = current;\n                        resp.access = CryptoJS.SHA256(current + publicSalt).toString();\n                        self.postMessage(resp);\n                        self.close();\n                        return;\n                    }\n                }\n            }\n\n            self.postMessage(resp);\n            self.close();\n        };\n        ");
  }
  spawnWorker(n, e, t, r, s) {
    const i = new Worker(n);
    this.workers.push(i),
      (i.onmessage = (n) => {
        const e = n.data;
        "" !== e.solution
          ? (this.workers.forEach((n) => {
              n.terminate();
            }),
            r(e))
          : s("No solution found");
      }),
      i.postMessage({
        challenge: this.challenge,
        publicSalt: this.publicSalt,
        start: e,
        end: t,
        numeric: this.numeric,
        difficulty: this.difficulty,
      });
  }
  async solvepow() {
    const n = [],
      e = new Blob([this.workerScript], { type: "text/javascript" }),
      t = URL.createObjectURL(e);
    for (let e = 0; e < 1048576; e += 262144)
      n.push(
        new Promise((n, r) => {
          this.spawnWorker(t, e, Math.min(e + 262144 - 1, 1048575), n, r);
        })
      );
    try {
      return (
        Promise.any ||
          (Promise.any = function (n) {
            return new Promise((e, t) => {
              let r = [],
                s = !1,
                i = n.length;
              n.forEach((n, c) => {
                Promise.resolve(n)
                  .then((n) => {
                    s || ((s = !0), e(n));
                  })
                  .catch((n) => {
                    (r[c] = n),
                      (i -= 1),
                      0 === i &&
                        t(new AggregateError(r, "All promises were rejected"));
                  });
              });
            });
          }),
        await Promise.any(n)
      );
    } catch (n) {
      return console.log(n), null;
    }
  }
}
