'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Config extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Config.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    code: DataTypes.STRING,
    value: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    tableName: 'configs',
    modelName: 'Config',
    timestamps: false,
  });

  return Config;
};
