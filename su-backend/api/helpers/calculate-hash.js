module.exports = {
  friendlyName: "Calculate hash",

  description: "Calculate sha512 hash from input",

  sync: true,

  inputs: {
    raw_text: {
      type: "string",
      required: true
    }
  },

  exits: {
    success: {
      description: "All done."
    }
  },

  fn: function(inputs, exits) {
    const crypto = require("crypto");
    var hash = crypto.createHash("sha256").update(inputs.raw_text);
    var hashBase64 = hash.digest("hex");
    return exits.success(hashBase64.substr(0, 10));
  }
};
