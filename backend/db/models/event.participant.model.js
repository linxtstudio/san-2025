'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventParticipant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventParticipant.hasMany(models.EventParticipantDetail, {
        foreignKey: 'event_participant_id',
        as: 'event_participant_details'
      })
    }
  }
  EventParticipant.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    province_name: DataTypes.STRING,
    city_name: DataTypes.STRING,
    transfer_receipt_image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'event_participants',
    modelName: 'EventParticipant',
    timestamps: false,
  });

  return EventParticipant;
};
