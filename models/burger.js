module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    burger: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eaten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      len: [1]
    }
  });

  return burger;
};

