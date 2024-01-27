const hotelFacilities = require("./raws/hotel_facilities.json")
const crypto = require("crypto")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('hotel_facilities', hotelFacilities.hotel_facilities.map(hotel => ({
      id: crypto.randomUUID(),
      ...hotel,
    })));
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
