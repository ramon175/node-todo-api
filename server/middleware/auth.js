const {User} = require('../models/user');

var authenticate = (req,res,next) => {
    let token = req.header('x-auth');

    User.findByToken(token).then(user => {
        if(!user){
            return Promise.reject()
        }
        
        req.user = user;
        req.token = token;
        next()
    }).catch(e => res.status(401).send(e))
};

module.exports = {authenticate};