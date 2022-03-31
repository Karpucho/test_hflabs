const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Card }) {
      this.hasMany(Card, { foreignKey: 'user_id' });
    }
  }
  User.init({
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.TEXT,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
