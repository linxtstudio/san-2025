const provinces = require('./raws/region_provinces.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('region_provinces', provinces.datas.map(province => ({
      id: province.id,
      name: province.name,
    })));
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
