module.exports = {
  friendlyName: "Goto",

  description: "Goto url.",

  inputs: {
    urlIdentifier: {
      type: "string",
      required: true
    }
  },

  exits: {
    success: {
      responseType: "redirect"
    },
    notFound: {
      description: "URL not registered",
      statusCode: 404
    }
  },

  fn: async function(inputs, exits) {
    var record = await URLModel.findOne({ id: inputs.urlIdentifier });
    if (record) return exits.success(record.longURL);
    return exits.notFound();
  }
};
