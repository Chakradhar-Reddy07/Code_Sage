const crypto = require("crypto");

const hashCode = (code) => {
  return crypto
    .createHash("sha256")
    .update(code)
    .digest("hex");
};

module.exports = hashCode;