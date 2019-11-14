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
    const criteria = { id: inputs.urlIdentifier };
    var record = await URLModel.findOne(criteria);
    if (record) {
      await URLModel.updateOne(criteria).set({
        accessed_times: record.accessed_times + 1
      });
      return exits.success(record.longURL);
    }
    return exits.notFound();
  }
};
