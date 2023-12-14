const cities = require("./raws/region_cities.json")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('region_cities', cities.datas.map(city => ({
      name: city.name,
      province_id: city.id_provinsi,
    })));
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
