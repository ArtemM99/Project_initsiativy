'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Initiatives',
      [
        {
          title: 'Зелёный город',
          description:
            'Проект по озеленению дворов, парков и улиц. Высадка деревьев, установка клумб и создание экотроп.',
          shortDescription: 'Озеленение города',
          district: 'Центральный округ',
          region: 'Москва',
          municipality: 'ЦАО',
          votesFor: 320,
          votesTotal: 400,
          dataEnd: new Date('2025-12-31'),
          status: 'Активна',
          tema: 'Экология',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Чистая река',
          description:
            'Инициатива по очистке водоёмов и берегов от мусора, создание зон отдыха и установка урн.',
          shortDescription: 'Очистка рек и озёр',
          district: 'Южный округ',
          region: 'Санкт-Петербург',
          municipality: 'Фрунзенский район',
          votesFor: 210,
          votesTotal: 300,
          dataEnd: new Date('2025-08-15'),
          status: 'Активна',
          tema: 'Экология',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Доступная медицина',
          description:
            'Программа по улучшению качества медицинских услуг, открытие новых клиник и консультационных пунктов.',
          shortDescription: 'Повышение доступности медицины',
          district: 'Северный округ',
          region: 'Нижний Новгород',
          municipality: 'Советский район',
          votesFor: 500,
          votesTotal: 600,
          dataEnd: new Date('2025-06-30'),
          status: 'Активна',
          tema: 'Здравоохранение',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Безопасные дороги',
          description:
            'Установка дополнительных пешеходных переходов, светофоров и улучшение дорожного покрытия.',
          shortDescription: 'Повышение безопасности на дорогах',
          district: 'Западный округ',
          region: 'Казань',
          municipality: 'Авиастроительный район',
          votesFor: 150,
          votesTotal: 200,
          dataEnd: new Date('2025-11-10'),
          status: 'Активна',
          tema: 'Транспорт',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Initiatives', null, {});
  }
  }

