const eventTypes = require("./raws/event_types.json")
const crypto = require("crypto")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('event_types', eventTypes.event_types.map(eventType => ({
      id: crypto.randomUUID(),
        ...eventType,
    })))
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
