'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('event_participant_hotel_facilities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      event_participant_id: {
        type: Sequelize.UUID
      },
      hotel_facility_id: {
        type: Sequelize.UUID
      },
      stay_duration: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('event_participant_hotel_facilities')
  }
};
