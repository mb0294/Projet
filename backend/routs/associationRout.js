const express = require("express");
const verifserieNumber = require("../middlewares/verifname");
const isAuth = require("../middlewares/isauth");
const router = express.Router();
const upload = require("../utils/multer");
const isAssociation = require("../middlewares/isAssociation");
const Association = require("../model/Association");
const isSuperAdmin = require("../middlewares/isSuperAdmin");


//Add newAssociation
router.post( "/add",upload("association").single("fileName"),verifserieNumber,isAuth(),isAssociation,async (req, res) => {

    try {

      const existAssociacitio = await Association.findOne({ serieNumber: req.body.serieNumber });
      if (existAssociacitio) {
        return res.status(400).send({ msg: "Association exists already" });
      }
      let newAssociation = new Association({
        ...req.body,
        user: req.user._id,
      });
      await newAssociation.save();
      res.send(newAssociation);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  }
);
//get SEARCH assocition
router.get("/search",async (req, res) => {
  const associations = await Association.find(
    {"associationName":{$regex:req.query.search, $options:"i"}},kjhjhgu).populate("user", "-password");
  res.send(associations);
});
// get all associations
router.get("/allassociations", async (req, res) => {
  try {
    const assocition = await Association.find();
    res.send(assocition);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
//Update Association
router.put("/:idUpdate",isAuth(),isSuperAdmin, async (req, res) => {
  try {
    const result = await Association.updateOne(
      { _id: req.params.idUpdate },
      { ...req.body }
    );
    if (result.modifiedCount === 1) {
      const updatedAssocition = await Association.findOne({
        _id: req.params.idUpdate,
      });
      return res.send({
        msg: "Assocition is Updated successfully",
        updatedAssocition,
      });
    } else {
      return res.status(500).send({ msg: "Assocition already Updated " });
    }
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});
//Delete Assocition
router.delete("/:idDelete",isAuth(),isSuperAdmin,async (req,res)=>{
      try {
          const deleted = await Association.deleteOne({_id:req.params.idDelete});
          (deleted.deletedCount)? res.send({msg:'Association deleted successfully'}):res.send({msg:"Association is already deleted"})
      } catch (error) {
          res.status(400).send(error.message);
          console.log(error);
      }
  
  
})
// //get One Assocition
router.get("/:id", async (req, res) => {
  //xxconst id = req.params._id;
  try {
    const findOneAssocition = await Association.findOne( {_id:req.params.id} );
  
    res.send(findOneAssocition);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});
module.exports = router;
