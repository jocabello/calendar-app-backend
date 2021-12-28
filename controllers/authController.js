const {response} =require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const { generateJWT } = require('../helpers/jwt');

// res = response es para obtener intelicense
const createUser = async (req, res = response) => {

    const {email, password} = (req.body);

    try {

        let user = await User.findOne({ email: email});

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'Email already in use'
            })
        }

        user = new User(req.body);

        // encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        
        await user.save();

        // generar token
        const token = await generateJWT(user.id, user.name);
        
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }

}

const loginUser = async (req, res = response) => {

    const {email, password} = (req.body);

    try {

        const user = await User.findOne({ email: email});

        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'No user with that email'
            })
        }

        const validPass = bcrypt.compareSync(password, user.password);

        if(!validPass){
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect password'
            })
        }

        // generar token
        const token = await generateJWT(user.id, user.name);


        res.json({
            ok:true,
            uid: user.id,
            name: user.name,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

const renewToken = async (req, res = response) => {    
    // const uid = req.uid;
    // const name = req.name;

    const {uid, name} = req;

    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    })    
}


module.exports = {
    createUser,
    loginUser,
    renewToken

}