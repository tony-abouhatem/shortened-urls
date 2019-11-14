module.exports = {
  friendlyName: "Statistics",

  description: "Statistics url.",

  exits: {},

  fn: async function() {
    const statistics = {};
    statistics.urlsCount = await URLModel.count();
    statistics.lastUrlCreated = await URLModel.find()
      .sort("createdAt DESC")
      .limit(1);
    statistics.mostUrlAccessed = await URLModel.find()
      .sort("access_times DESC")
      .limit(1);
    statistics.lastUrlAccessed = await URLModel.find()
      .sort("updatedAt DESC")
      .limit(1);
    return statistics;
  }
};
