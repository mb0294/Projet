const express = require("express");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();
const upload = require("../utils/multer");
const Event = require("../model/Event");
const isSuperAdmin = require("../middlewares/isSuperAdmin");



// ADD EVENT
router.post( "/addevent",upload("event").single("file"),isAuth(),isSuperAdmin,async (req, res) => {
 console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;

    try {

      let newEvent = new Event({...req.body, user: req.user._id,});
       newEvent.image = `${url}/${req.file.path}`;
      await newEvent.save();
      res.send(newEvent);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  }
);
// get all Events
router.get("/allEvents", async (req, res) => {
  try {
    const events = await Event.find().sort({createdOn:-1});
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});
//Delete Event
router.delete("/:idDelete",isAuth(),isSuperAdmin,async (req,res)=>{
  try {
      const deleted = await Event.deleteOne({_id:req.params.idDelete});
      (deleted.deletedCount)? res.send({msg:'Event deleted successfully'}):res.send({msg:"Event is already deleted"})
  } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
  }});
 //get One Event
 router.get("/:id", async (req, res) => {
  try {
    const findOneEvent = await Event.findOne( {_id:req.params.id} );
  
    res.send(findOneEvent);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error);
  }
});



module.exports = router;