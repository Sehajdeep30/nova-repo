module.exports = (sequelize, DataTypes) => {
    const Med_stock = sequelize.define(
  'Insti_rec',
  {
    instiId: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    
    instiName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  },
);

return Insti_rec;}

