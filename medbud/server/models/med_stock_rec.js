module.exports = (sequelize, DataTypes) => {
    const Med_stock = sequelize.define(
  'Med_stock',
  {
    instiId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      itemCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    itemQuantity: {
      type: DataTypes.INTEGER,
    },
  },

);

return Med_stock;}

