'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HotelFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HotelFacility.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    room_availability: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    max_pax: DataTypes.INTEGER,
    sequence: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'hotel_facilities',
    modelName: 'HotelFacility',
    timestamps: false,
  });

  return HotelFacility;
};
