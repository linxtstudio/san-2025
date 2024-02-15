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
        as: 'event_participant_details',
        onDelete: 'CASCADE',
      })

      EventParticipant.hasOne(models.EventParticipantHotelFacility, {
        foreignKey: 'event_participant_id',
        as: 'event_participant_hotel_facility',
        onDelete: 'CASCADE',
      })

      EventParticipant.belongsTo(models.RegionCity, {
        foreignKey: 'city_id',
        as: 'city'
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
    city_id: DataTypes.INTEGER,
    transfer_receipt_image: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    total_transaction: DataTypes.INTEGER,
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
