const isAssociation= (req, res, next) =>{
    if(req.user.role == 'association'){
        next();
    }
    else{res.status(401).send({msg:"not Authorized"});}
}
module.exports =isAssociation;