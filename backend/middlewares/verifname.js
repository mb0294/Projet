const verifserieNumber = (req,res,next) => {
    if (req.body.serieNumber =="" )
    {res.status(400).send({msg:"serieNumber is required"});}
    else {
        next()
    }
}
module.exports = verifserieNumber;