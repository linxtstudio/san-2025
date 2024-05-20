'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventParticipantAttendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventParticipantAttendance.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    event_participant_id: DataTypes.UUID,
    attended_at: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'event_participant_attendances',
    modelName: 'EventParticipantAttendance',
    timestamps: false,
  });

  return EventParticipantAttendance;
};