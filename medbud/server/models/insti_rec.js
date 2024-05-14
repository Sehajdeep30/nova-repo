module.exports = (sequelize, DataTypes) => {
    const Insti_rec = sequelize.define(
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

