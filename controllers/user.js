const { Koperasi, User } = require("../models");
const { Op } = require("sequelize");

exports.update = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId, "userId");
    const data = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (data) {
      await User.update(req.body, {
        where: { id: userId },
      });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
    const update = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({ data: update, message: "success update data", status: true });
  } catch (error) {
    res.status(500).send({ message: "you failed to update data" });
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId, "userId");
    const data = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({ data: data, status: true });
  } catch (error) {
    res.status(500).send({ message: "you failed to get data" });
    console.log(error);
  }
};
