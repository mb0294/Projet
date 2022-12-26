const express = require("express");
const verifName = require("../middlewares/verifname");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();
const upload = require("../utils/multer");
const Athelet = require("../model/Athlete");
const isAssociation = require("../middlewares/isAssociation");
const isTrainer = require("../middlewares/isTrainer");


//Add newAthelet

router.post( "/add",upload("athelet").single("fileName"),verifName,isAuth(),isAssociation,async (req, res) => {

    try {

      const existAthelet = await Athelet.findOne({ serieNumber: req.body.serieNumber });
      if (existAthelet) {
        return res.status(400).send({ msg: "Athelet exists already" });
      }
      let newAthelet = new Athelet({
        ...req.body,
        user: req.user._id,
      });
      await newAthelet.save();
      res.send(newAthelet);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  }
);
// get all Athelets
router.get("/allAthelets", async (req, res) => {
  try {
    const Athelets = await Athelet.find();
    res.send(Athelets);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
  //Update Athelet
  router.put("/:idUpdate",isAuth(),isAssociation, async (req, res) => {
    try {
      const result = await Athelet.updateOne(
        { _id: req.params.idUpdate },
        { ...req.body }
      );
      if (result.modifiedCount === 1) {
        const updatedAthelet = await Athelet.findOne({
          _id: req.params.idUpdate,
        });
        return res.send({
          msg: "Athelet is Updated successfully",
          updatedAthelet,
        });
      } else {
        return res.status(500).send({ msg: "Athelet already Updated " });
      }
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error);
    }
  });
  //Delete Athelet
  router.delete("/:idDelete",isAuth(),isAssociation,async (req,res)=>{
        try {
            const deleted = await Athelet.deleteOne({_id:req.params.idDelete});
            (deleted.deletedCount)? res.send({msg:'Athelet deleted successfully'}):res.send({msg:"Trainer is already deleted"})
        } catch (error) {
            res.status(400).send(error.message);
            console.log(error);
        }
        
    
    
  });
         //get One Athelet
 router.get("/:id", async (req, res) => {
  try {
    const findOneAthelet = await Athelet.findOne( {id:req.params._id} );
  
    res.send(findOneAthelet);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }});
module.exports = router;