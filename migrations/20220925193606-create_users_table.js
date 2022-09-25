'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', {
      id: {
         type: Sequelize.INTEGER(11),
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
         first_name: Sequelize.STRING(100),
         last_name: Sequelize.STRING(100),
         createdAt: Sequelize.DATE,
         updatedAt: Sequelize.DATE
     });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable('users');
  }
};
