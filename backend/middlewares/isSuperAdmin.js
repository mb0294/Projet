const isSuperAdmin= (req, res, next) =>{
    if(req.user.role == 'superAdmin'){
        next();
    }
    else{res.status(401).send({msg:"not Authorized"});}
}
module.exports =isSuperAdmin;