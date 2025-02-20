'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Иван',
          lastName: 'Иванов',
          middleName: 'Иванович',
          email: 'ivan.ivanov@example.com',
          federalDistrict: 'Центральный',
          region: 'Московская область',
          municipality: 'Москва',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Петр',
          lastName: 'Петров',
          middleName: 'Петрович',
          email: 'petr.petrov@example.com',
          federalDistrict: 'Южный',
          region: 'Ростовская область',
          municipality: 'Ростов-на-Дону',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
