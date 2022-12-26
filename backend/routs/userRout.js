const express = require("express");
 const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../model/user");
const isAuth = require("../middlewares/isAuth");
const isSuperAdmin = require ("../middlewares/isSuperAdmin");
const router = express.Router();
const {
  registerRoles,
  loginRoles,
  validator,
} = require("../middlewares/validator");

//register
router.post("/register", registerRoles(), validator, async (req, res) => {
  const { serieNumber, password } = req.body;
  try {
    const existUser = await User.findOne({ serieNumber });
    if (existUser) {
      return res.status(400).send({ msg: "user already exists" });
    }
    const newUser = new User(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(newUser instanceof User);
    newUser.password = hashedPassword;
    await newUser.save();
    res.send({ msg: "user successfully added", newUser });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//login user

router.post("/login", loginRoles(), validator, async (req, res) => {
  const { serieNumber, password } = req.body;

  try {
    const existUser = await User.findOne({ serieNumber });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credentials" });
    }

    const isMatched = await bcrypt.compare(password, existUser.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad credentials" });
    }

    const payload = { id: existUser._id };
    const token = await jwt.sign(payload, process.env.privateKey);
    res.send({ user: existUser, token });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

//get current user
router.get("/current", isAuth(),async (req, res) => {
  res.send(req.user);
});

// get all users
router.get("/", isAuth(), isSuperAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
//Update user
router.put("/:idUpdate",isAuth(),isSuperAdmin, async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.idUpdate },
      { ...req.body }
    );
    if (result.modifiedCount === 1) {
      const updatedUser = await User.findOne({
        _id: req.params.idUpdate,
      });
      return res.send({
        msg: "User is Updated successfully",
        updatedUser,
      });
    } else {
      return res.status(500).send({ msg: "User already Updated " });
    }
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});
//Delete User
router.delete("/:idDelete",isAuth(),isSuperAdmin,async (req,res)=>{
      try {
          const deleted = await User.deleteOne({_id:req.params.idDelete});
          (deleted.deletedCount)? res.send({msg:'User deleted successfully'}):res.send({msg:"User is already deleted"})
      } catch (error) {
          res.status(400).send(error.message);
          console.log(error);
      }
  
  
});

//

module.exports = router;
