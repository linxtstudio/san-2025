'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'event_participants',
        'total_transaction',
        {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
        'event_participants',
        'total_transaction'
    );
  }
};
