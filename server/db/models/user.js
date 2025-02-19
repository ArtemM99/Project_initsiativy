'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Initiative,Vote,Recommendation }) {
      
      this.hasMany(Initiative, { foreignKey: 'userId' });
      this.hasMany(Vote, { foreignKey: 'userId' });
      this.hasMany(Recommendation, { foreignKey: 'userId' });
      
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    email: DataTypes.STRING,
    federalDistrict: DataTypes.STRING,
    region: DataTypes.STRING,
    municipality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};