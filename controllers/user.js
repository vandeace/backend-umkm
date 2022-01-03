const model = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

exports.update = async (req, res) => {
  try {
    const saltRounds = 10;
    const userId = req.body.userId;

    const data = await model.user.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (data) {
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const value = {
          ...req.body,
          password: hash,
        };
        const newUser = await model.user.update(value, {
          where: { id: userId },
        });

        jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, (err, token) => {
          const dataUser = {
            id: newUser.id,
            email: newUser.email,
            role: newUser.role,
            fullName: newUser.fullName,
            token: token,
          };
          res.status(200).send(dataUser);
        });
      });
    } else {
      res.status(404).send({ message: 'Data Not Found' });
    }
    const update = await model.user.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.send({ data: update, message: 'success update data', status: true });
  } catch (error) {
    res.status(500).send({ message: 'you failed to update data' });
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await model.user.findOne({
      where: { id: userId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.send({ data: data, status: true });
  } catch (error) {
    res.status(500).send({ message: 'you failed to get data' });
    console.log(error);
  }
};

exports.list = async (req, res) => {
  try {
    if (req.user.role === 'user') {
      res.status(500).send({ message: 'you not authorized' });
    }
    const data = await model.user.findAll({
      where: {
        role: 'user',
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.send({ data: data, status: true });
  } catch (error) {
    res.status(500).send({ message: 'you failed to get data' });
    console.log(error);
  }
};
