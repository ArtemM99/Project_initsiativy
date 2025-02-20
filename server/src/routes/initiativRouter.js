const express = require('express');
const { Initiative } = require('../../db/models/');
const iventRouteer = express.Router();
iventRouteer.get('/', async (req, res) => {
  try {
    const init = await Initiative.findAll();
    res.json(init);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
    console.log(error);
  }
});

iventRouteer.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const initiative = await Initiative.findByPk(id);
    if (!initiative) {
      return res.status(404).json({ message: 'Инициатива не найдена' });
    }
    res.json(initiative);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера' });
    console.log(error);
  }
});

module.exports = iventRouteer;
