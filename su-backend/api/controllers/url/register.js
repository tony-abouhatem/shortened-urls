module.exports = {
  friendlyName: "Register",

  description: "Register url.",

  inputs: {
    longURL: {
      type: "string",
      required: true
    }
  },

  fn: async function(inputs) {
    const id = sails.helpers.calculateHash.with({ raw_text: inputs.longURL });
    await URLModel.findOrCreate({ id }, { id, longURL: inputs.longURL });
    // .exec(function (err, newOrExistingRecord, wasCreated) {
    // });

    return { urlIdentifier: id };
  }
};
