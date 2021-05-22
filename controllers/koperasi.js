const { Koperasi, User } = require("../models");
const { Op } = require("sequelize");

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const newData = await Koperasi.create(req.body);
    const findData = await Koperasi.findOne({
      where: { id: newData.id },
      attributes: { exclude: ["createdAt", "updatedAt", "UserId", "userId"] },
    });
    res.status(200).send({ data: findData });
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
