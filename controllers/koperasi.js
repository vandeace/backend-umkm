const model = require('../models');
const { Op } = require('sequelize');

exports.create = async (req, res) => {
  try {
    const role = req.user.role;
    console.log(role, 'role');
    if (role == 'admin') {
      return res
        .status(401)
        .send({ message: 'admin cant create data', status: false });
    } else {
      req.body.userId = req.user.id;
      const newData = await model.koperasi.create(req.body);
      const findData = await model.koperasi.findOne({
        where: { id: newData.id },
        attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
      });
      return res.status(200).send({ data: findData, status: true });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to create data!' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await model.koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    if (data) {
      await model.koperasi.update(req.body, {
        where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      });
    } else {
      res.status(404).send({ message: 'Data Not Found' });
    }
    const update = await model.koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    res.send({ data: update });
  } catch (error) {
    res.status(500).send({ message: 'you failed to update data' });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await model.koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    if (data) {
      await model.koperasi.destroy({
        where: { id: req.params.id },
      });
      return res.status(200).send({
        status: true,
        message: `success delete data id ${req.params.id}`,
      });
    } else {
      console.log(error);
      return res.status(500).send({
        message: 'Failed to delete data! data not found',
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Failed to delete data!', status: false });
  }
};

exports.show = async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      console.log(req.query.dateStart, 'req.query.dateStart ');
      console.log(req.query.dateEnd, 'req.query.dateEnd ');
      if (req.query.dateStart && req.query.dateEnd) {
        console.log('run a');
        const start = new Date(req.query.dateStart);
        const end = new Date(req.query.dateEnd);
        const data = await model.koperasi.findAll({
          where: {
            tglRAT: { [Op.between]: [start, end] },
          },
          attributes: {
            exclude: [, 'updatedAt', 'userId', 'UserId'],
          },
        });
        return res.status(200).send({ data: data, status: true });
      } else {
        console.log('run b');
        const data = await model.koperasi.findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
          },
        });
        return res.status(200).send({ data: data, status: true });
      }
    } else {
      const userId = req.user.id;
      const data = await model.koperasi.findAll({
        where: { userId: userId },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
        },
      });
      return res.status(200).send({ data: data, status: true });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Failed to get data!', status: false });
  }
};

exports.detail = async (req, res) => {
  try {
    const data = await model.koperasi.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    if (data) {
      return res.status(200).send({
        status: true,
        message: `success get data id ${req.params.id}`,
        data: data,
      });
    } else {
      console.log(error);
      return res.status(500).send({
        message: 'Failed to get data! data not found',
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: 'Failed to get data!', status: false });
  }
};
