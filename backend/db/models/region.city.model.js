'use strict';
const {
  Model
} = require('sequelize');
const RegionProvince = require('./../models/index').RegionProvince

module.exports = (sequelize, DataTypes) => {
  class RegionCity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RegionCity.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'region_cities',
    modelName: 'RegionCity',
    timestamps: false,
  });

  return RegionCity;
};
