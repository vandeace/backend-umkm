const { Koperasi, User } = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

exports.update = async (req, res) => {
  try {
    const saltRounds = 10;
    const userId = req.user.id;
    const data = await User.findOne({
      where: { id: userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (data) {
      console.log(req.body, "body");

      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        const value = {
          ...req.body,
          password: hash,
        };
        const newUser = await User.update(value, {
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

      // await User.update(req.body, {
      //   where: { id: userId },
      // });
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
