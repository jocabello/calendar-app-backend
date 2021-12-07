const {response} =require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {

    // 'x-token' desde headers
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token not found in the request'
        })
    }

    try {

        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);

        // resuqest son pasadas con estos valores con el next()
        req.uid = uid;
        req.name = name;

        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        })
    }

    next();
};

module.exports = {validateJWT};