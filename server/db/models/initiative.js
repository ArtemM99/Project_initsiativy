'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Vote, Recommendation }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Vote, { foreignKey: 'initiativeId' });
      this.hasMany(Recommendation, { foreignKey: 'initiativeId' });
    }
  }
  Initiative.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    shortDescription: DataTypes.TEXT,
    district: DataTypes.STRING,
    region: DataTypes.STRING,
    municipality: DataTypes.STRING,
    votesFor: DataTypes.INTEGER,
    votesTotal: DataTypes.TEXT,
    dataEnd: DataTypes.DATE,
    status: DataTypes.STRING,
    tema: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};