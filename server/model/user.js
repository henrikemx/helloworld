// mapeando a tabela que criamos para que a nossa api consiga enchergar ela 
module.exports = {
  user: function user (queryInterface, Sequelize) {
    return queryInterface.define(
      'user',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
  }
};