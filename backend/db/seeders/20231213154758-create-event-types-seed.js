const crypto = require("crypto")

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('event_types', [
      {
        id: crypto.randomUUID(),
        name: 'SAN Main Event',
        description: 'Merupakan acara utama dari keseluruhan rangkaian acara SAN 2024, dengan melakukan dance anda akan otomatis terdaftar sebagai peserta acara ini, Let\'s join us!',
        fee_type: 'donation',
        fee_nominal: 15000,
        sequence: 1,
      },
      {
        id: crypto.randomUUID(),
        name: 'Performance',
        description: 'Daftar sebagai peserta penampilan di salah satu event SAN 2024',
        fee_type: 'ticket',
        fee_nominal: 0,
        sequence: 2,
      },
      {
        id: crypto.randomUUID(),
        name: 'Pool Party',
        description: 'Merupakan salah satu acara pesta yang diselenggarakan oleh SAN 2024, walaupun berbayar acara ini tak kalah seru dibanding dengan yang lain',
        fee_type: 'ticket',
        fee_nominal: 25000,
        sequence: 3,
      },
      {
        id: crypto.randomUUID(),
        name: 'Workshop',
        description: 'Ayo daftar acara workshop agar menambah wawasan dan skill anda',
        fee_type: 'ticket',
        fee_nominal: 25000,
        sequence: 4,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    //
  }
};
