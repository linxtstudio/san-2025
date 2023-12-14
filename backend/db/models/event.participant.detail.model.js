'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventParticipantDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventParticipantDetail.belongsTo(models.EventParticipant, {
        foreignKey: 'event_participant_id',
        as: 'event_participant'
      })

      EventParticipantDetail.belongsTo(models.EventType, {
          foreignKey: 'event_type_id',
          as: 'event_type'
      })
    }
  }
  EventParticipantDetail.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    event_participant_id: DataTypes.UUID,
    event_type_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'event_participant_details',
    modelName: 'EventParticipantDetail',
    timestamps: false,
  });
  return EventParticipantDetail;
};
