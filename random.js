const CryptoJS = require("crypto-js");

function random(size) {
  const r = CryptoJS.lib.WordArray.random(32 + size).toString();
  return r.slice(32)
}

module.exports = {
  random
}
