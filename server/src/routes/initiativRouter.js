const express = require('express');
const { Initiative } = require('../../db/models');
const { User } = require('../../db/models');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Создание инициативы
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, shortDescription, district, region, municipality, dataEnd, status, tema } = req.body;
  if (!title || !description || !shortDescription || !district || !region || !municipality || !dataEnd || !status || !tema) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const user = req.user; // Данные пользователя, полученные через middleware

    const initiative = await Initiative.create({
      title,
      description,
      shortDescription,
      district,
      region,
      municipality,
      dataEnd,
      status,
      tema,
      userId: user.id,
      votesFor: 0,
      votesTotal: 0
    });

    return res.status(201).json({ initiative });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Получение списка всех инициатив
router.get('/', async (req, res) => {
  try {
    const initiatives = await Initiative.findAll({
      include: [User] // Чтобы получить информацию о пользователе-авторе инициативы
    });
    return res.json({ initiatives });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Получение информации об одной инициативе по id
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const initiative = await Initiative.findOne({
      where: { id },
      include: [User] // Чтобы получить информацию о пользователе-авторе инициативы
    });

    if (!initiative) {
      return res.status(404).json({ error: 'Initiative not found' });
    }

    return res.json({ initiative });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Редактирование инициативы
router.put('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { title, description, shortDescription, district, region, municipality, dataEnd, status, tema } = req.body;

  if (!title || !description || !shortDescription || !district || !region || !municipality || !dataEnd || !status || !tema) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const initiative = await Initiative.findOne({ where: { id } });

    if (!initiative) {
      return res.status(404).json({ error: 'Initiative not found' });
    }

    if (initiative.userId !== req.user.id) {
      return res.status(403).json({ error: 'You are not the author of this initiative' });
    }

    initiative.title = title;
    initiative.description = description;
    initiative.shortDescription = shortDescription;
    initiative.district = district;
    initiative.region = region;
    initiative.municipality = municipality;
    initiative.dataEnd = dataEnd;
    initiative.status = status;
    initiative.tema = tema;

    await initiative.save();

    return res.json({ initiative });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Удаление инициативы
router.delete('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const initiative = await Initiative.findOne({ where: { id } });

    if (!initiative) {
      return res.status(404).json({ error: 'Initiative not found' });
    }

    if (initiative.userId !== req.user.id) {
      return res.status(403).json({ error: 'You are not the author of this initiative' });
    }

    await initiative.destroy();

    return res.status(200).json({ message: 'Initiative deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;