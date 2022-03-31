'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Card.init({
    text: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
