'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
          'products',
          {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER,
            },
            title: {
              allowNull: false,
              type: Sequelize.STRING,
            },
            description: {
              allowNull: false,
              type: Sequelize.TEXT,
            },
            sku: {
              allowNull: false,
              type: Sequelize.STRING(8),
              unique: true,
              validate: {
                isAlphanumeric: true,
                len: [8, 8],
              },
            },
            price: {
              allowNull: false,
              type: Sequelize.DECIMAL(10, 2),
            },
            category_id: {
              type: Sequelize.INTEGER,
              references: {
                model: 'categories',
                key: 'id',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            },
            created_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW,
            },
            updated_at: {
              allowNull: false,
              type: Sequelize.DATE,
              defaultValue: Sequelize.NOW,
            },
          },
          { transaction }
      );

      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.dropTable('products', { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw err;
    }
  },
};
