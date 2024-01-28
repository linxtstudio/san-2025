'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hotel_facilities', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      room_availability: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      max_pax: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      sequence: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('hotel_facilities')
  }
};
