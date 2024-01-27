'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventParticipantHotelFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventParticipantHotelFacility.belongsTo(models.HotelFacility, {
        foreignKey: 'hotel_facility_id',
        as: 'hotel_facility'
      })
    }
  }
  EventParticipantHotelFacility.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    event_participant_id: DataTypes.UUID,
    hotel_facility_id: DataTypes.UUID,
    stay_duration: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'event_participant_hotel_facilities',
    modelName: 'EventParticipantHotelFacility',
    timestamps: false,
  });

  return EventParticipantHotelFacility;
};
