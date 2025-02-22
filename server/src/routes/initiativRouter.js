const express = require('express');
const { Initiative } = require('../../db/models/');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
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
iventRouteer.post('/',verifyAccessToken, async (req, res) => {
  const {title,
    description,
    shortDescription,
    district,
    region,
    municipality,
    votesFor,
    votesTotal,
    dataEnd,
    status,
    tema} = req.body
  try {
    const initiative = await Initiative.create({...req.body, userId:res.locals.user.id});
    res.status(201).json(initiative);
  } catch (error) {
    res.status(400).json({ message: 'Ошибка при создании инициативы', error });
  }
});

module.exports = iventRouteer;
