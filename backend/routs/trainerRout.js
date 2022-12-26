const express = require("express");
const verifserieNumber = require("../middlewares/verifname");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();
const upload = require("../utils/multer");
const Trainer = require("../model/Trainer");
const isAssociation = require("../middlewares/isAssociation");




//Add newTrainer
router.post( "/add",upload("trainer").single("fileName"),verifserieNumber,isAuth(),isAssociation,async (req, res) => {

    try {

      const existTrainer = await Trainer.findOne({ id: req.body._id });
      if (existTrainer) {
        return res.status(400).send({ msg: "Trainer exists already" });
      }
      let newTrainer = new Trainer({
        ...req.body,
        user: req.user._id,
      });
      await newTrainer.save();
      res.send(newTrainer);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  }
);
// get all trainers
router.get("/alltrainers", async (req, res) => {
    try {
      const trainers = await Trainer.find();
      res.send(trainers);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  });
  //Update Trainer
router.put("/:idUpdate",isAuth(),isAssociation, async (req, res) => {
    try {
      const result = await Trainer.updateOne(
        { _id: req.params.idUpdate },
        { ...req.body }
      );
      if (result.modifiedCount === 1) {
        const updatedTrainer = await Trainer.findOne({
          _id: req.params.idUpdate,
        });
        return res.send({
          msg: "Trainer is Updated successfully",
          updatedTrainer,
        });
      } else {
        return res.status(500).send({ msg: "Trainer already Updated " });
      }
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  });
  //Delete Trainer
  router.delete("/:idDelete",isAuth(),isAssociation,async (req,res)=>{
        try {
            const deleted = await Trainer.deleteOne({_id:req.params.idDelete});
            (deleted.deletedCount)? res.send({msg:'Trainer deleted successfully'}):res.send({msg:"Trainer is already deleted"})
        } catch (error) {
            res.status(400).send(error.message);
            console.log(error);
        }
    
    
  });
module.exports = router;