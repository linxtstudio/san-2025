const configs = require('./raws/configs.json')
const crypto = require("crypto")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('configs', configs.configs.map(config => ({
      id: crypto.randomUUID(),
      ...config,
    })));
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
