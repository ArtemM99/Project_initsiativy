'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Initiatives',
      [
        {
          title: 'Инициатива 1',
          description: 'Описание инициативы 1',
          shortDescription: 'Краткое описание 1',
          district: 'Округ 1',
          region: 'Регион 1',
          municipality: 'Муниципалитет 1',
          votesFor: 120,
          votesTotal: 150,
          dataEnd: new Date('2025-12-31'),
          status: 'Активна',
          tema: 'Экология',
          userId: 1, // Предполагается, что в БД есть пользователь с ID 1
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Инициатива 2',
          description: 'Описание инициативы 2',
          shortDescription: 'Краткое описание 2',
          district: 'Округ 2',
          region: 'Регион 2',
          municipality: 'Муниципалитет 2',
          votesFor: 80,
          votesTotal: 100,
          dataEnd: new Date('2025-06-30'),
          status: 'Активна',
          tema: 'Здравоохранение',
          userId: 2, // Предполагается, что в БД есть пользователь с ID 2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Initiatives', null, {});
  },
};
