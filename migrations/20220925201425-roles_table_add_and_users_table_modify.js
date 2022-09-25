'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.STRING(100),
          allowNull: false
        }
      ),
    await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.STRING(20),
          allowNull: false
        }
      ),
      await queryInterface.addColumn(
        'users',
        'role',
        {
          type: Sequelize.INTEGER(11),
          allowNull: false
        }
      )

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn('users', 'email'),
     await queryInterface.removeColumn('users', 'password'),
     await queryInterface.removeColumn('users', 'role')
  }
};
