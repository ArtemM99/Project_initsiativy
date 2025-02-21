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
            'Проект по озеленению дворов, парков и улиц в Москве. В рамках проекта планируется высадка новых деревьев и кустарников, установка клумб и создание экотроп для прогулок и отдыха жителей города. Ожидается, что проект улучшит экологическую ситуацию, повысит качество жизни горожан и создаст новые зелёные зоны для отдыха. Будет установлено более 500 новых скамеек и урн в парках и общественных местах, а также проведены работы по благоустройству уличного освещения.',
          shortDescription: 'Озеленение города',
          district: 'Центральный округ',
          region: 'Москва',
          municipality: 'ЦАО',
          votesFor: 320,
          votesTotal: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRBIO57xGqbQRdx4tS66ZrjWpsIEUFvSQMw&s',
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
            'Инициатива по очистке водоёмов и берегов рек и озёр от мусора. В рамках проекта планируется организация акций по уборке мусора на берегах рек и озёр, создание новых зон отдыха, а также установка урн и информационных табличек о необходимости соблюдения чистоты. Одной из главных задач является повышение осведомленности местных жителей о важности охраны водных ресурсов и защите экосистем. Также будет улучшено состояние инфраструктуры, связанной с водными объектами, включая новые парковки и освещение вокруг рек.',
          shortDescription: 'Очистка рек и озёр',
          district: 'Южный округ',
          region: 'Санкт-Петербург',
          municipality: 'Фрунзенский район',
          votesFor: 210,
          votesTotal: 'https://liter.kz/cache/imagine/1200/uploads/news/2023/05/07/64578ef01b38a533846928.jpeg',
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
            'Программа по улучшению качества медицинских услуг, открытие новых клиник и консультационных пунктов в удалённых районах. В рамках программы будет улучшена инфраструктура медицинских учреждений, введены новые технологии и методы диагностики. Также планируется увеличение доступности медицинской помощи для людей с ограниченными возможностями и улучшение качества работы медицинского персонала. Особое внимание уделяется профилактическим мероприятиям, обучению населения и повышению осведомлённости о здоровье.',
          shortDescription: 'Повышение доступности медицины',
          district: 'Северный округ',
          region: 'Нижний Новгород',
          municipality: 'Советский район',
          votesFor: 500,
          votesTotal: 'https://sbermed.ai/_next/image?url=https%3A%2F%2Fsbermed.ai%2Fuploads%2Fmicrobiologist_with_protection_glasses_using_microscope_dressed_ppe_suit_scaled_66d89184a3.jpg&w=3840&q=75',
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
            'Проект по повышению безопасности дорожного движения с установкой дополнительных пешеходных переходов, светофоров и улучшением дорожного покрытия. В рамках инициативы будут установлены новые светофоры на опасных перекрёстках и пешеходных переходах, проведены работы по ремонту дорожного покрытия и улучшению освещения. Кроме того, проект включает в себя создание новых пешеходных и велосипедных дорожек, улучшение состояния автобусных остановок и улучшение условий для людей с ограниченными возможностями.',
          shortDescription: 'Повышение безопасности на дорогах',
          district: 'Западный округ',
          region: 'Казань',
          municipality: 'Авиастроительный район',
          votesFor: 150,
          votesTotal: 'https://66bit.ru/assets/portfolio/portfolios/bkd/photoInLaptop.png',
          dataEnd: new Date('2025-11-10'),
          status: 'Активна',
          tema: 'Транспорт',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Умные парковки',
          description: 
            'Проект по внедрению системы умных парковок, используя датчики и мобильные приложения для удобного поиска и использования парковочных мест в городе.',
          shortDescription: 'Инновационные решения для парковки',
          district: 'Восточный округ',
          region: 'Москва',
          municipality: 'ВАО',
          votesFor: 600,
          votesTotal: 'https://optim.tildacdn.com/tild3933-3061-4537-a563-326232396464/-/resize/500x/-/format/webp/H29926-1536x1152.jpg',
          dataEnd: new Date('2025-12-31'),
          status: 'Запланирован',
          tema: 'Инновации',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Велодорожки в городе',
          description: 
            'Проект по созданию сети велодорожек по всему городу для безопасного и удобного передвижения велосипедистов, включая новые парковки и велосипедные станции.',
          shortDescription: 'Развитие инфраструктуры для велосипедистов',
          district: 'Южный округ',
          region: 'Москва',
          municipality: 'ЮАО',
          votesFor: 450,
          votesTotal: 'https://icbcom.ru/assets/images/decisions-images/94.jpg',
          dataEnd: new Date('2025-11-30'),
          status: 'Активна',
          tema: 'Транспорт',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Спортивные площадки для всех',
          description: 
            'Проект по строительству новых спортивных площадок в каждом районе города, где жители смогут заниматься спортом и отдыхать на свежем воздухе.',
          shortDescription: 'Доступ к спорту для всех жителей',
          district: 'Северный округ',
          region: 'Москва',
          municipality: 'САО',
          votesFor: 530,
          votesTotal: 'https://kenguru.pro/upload/iblock/127/1274007f1d59b6477ed90776b9a5cc90.jpg',
          dataEnd: new Date('2025-10-15'),
          status: 'Активна',
          tema: 'Спорт',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Зарядные станции для электромобилей',
          description: 
            'Проект по установке зарядных станций для электромобилей в общественных местах и на парковках для улучшения экологии и стимулирования перехода на экологически чистый транспорт.',
          shortDescription: 'Установка зарядных станций для экологичного транспорта',
          district: 'Западный округ',
          region: 'Москва',
          municipality: 'ЗАО',
          votesFor: 750,
          votesTotal: 'https://soyuzmash.ru/upload/iblock/435/435690858ab42573bd68789d35d36a19.jpeg',
          dataEnd: new Date('2025-09-30'),
          status: 'Активна',
          tema: 'Экология',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],    
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Initiatives', null, {});
  }
  }

