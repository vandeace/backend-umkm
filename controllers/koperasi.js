const { Koperasi, User } = require("../models");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    const role = req.user.role;
    if (role == "admin") {
      return res
        .status(401)
        .send({ message: "admin cant create data", status: false });
    } else {
      req.body.userId = req.user.id;
      const newData = await Koperasi.create(req.body);
      const findData = await Koperasi.findOne({
        where: { id: newData.id },
        attributes: { exclude: ["createdAt", "updatedAt", "UserId", "userId"] },
      });
      return res.status(200).send({ data: findData, status: true });
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to create data!" });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await Koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
    });
    if (data) {
      await Koperasi.update(req.body, {
        where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
    const update = await Koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
    });
    res.send({ data: update });
  } catch (error) {
    res.status(500).send({ message: "you failed to update data" });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const userId = req.user.id;
    const data = await Koperasi.findOne({
      where: { [Op.and]: [{ id: req.params.id }, { userId: userId }] },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
    });
    if (data) {
      await Koperasi.destroy({
        where: { id: req.params.id },
      });
      return res.status(200).send({
        status: true,
        message: `success delete data id ${req.params.id}`,
      });
    } else {
      console.log(error);
      return res.status(500).send({
        message: "Failed to delete data! data not found",
        status: false,
      });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Failed to delete data!", status: false });
  }
};

exports.show = async (req, res) => {
  try {
    if (req.user.role === "admin") {
      if (req.query.dateStart && req.query.dateEnd) {
        const start = new Date(req.query.dateStart);
        const end = new Date(req.query.dateEnd);
        const data = await Koperasi.findAll({
          where: {
            tglRAT: { [Op.between]: [start, end] },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt", "userId", "UserId"],
          },
        });
        return res.status(200).send({ data: data, status: true });
      } else {
        console.log("jalan a");
        const data = await Koperasi.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt", "userId", "UserId"],
          },
        });
        return res.status(200).send({ data: data, status: true });
      }
    } else {
      const x = new Date("2013-05-23");
      const y = new Date("2013-05-23");
      console.log(y, "y");
      console.log(x, "x");
      const userId = req.user.id;
      const data = await Koperasi.findAll({
        where: { userId: userId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "UserId"],
        },
      });
      return res.status(200).send({ data: data, status: true });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Failed to get data!", status: false });
  }
};
