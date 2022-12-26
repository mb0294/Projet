const isTrainer= (req, res, next) =>{
    if(req.user.role == 'trainer'){
        next();
    }
    else{res.status(401).send({msg:"not Authorized"});}
}
module.exports =isTrainer;