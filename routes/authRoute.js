/*
    rutas de usuarios - auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');

const { createUser, loginUser, renewToken } = require('../controllers/authController');
const { validateJWT } = require('../middlewares/validateJWT');
const { reqValidator } = require('../middlewares/reqValidator');


router.post(
    '/new',
    [ // middlewares
        check('name', 'name required').not().isEmpty(),
        check('email', 'invalid email').isEmail(),
        check('password', 'at least 6 characters').isLength({min: 6}),
        reqValidator
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'invalid email').isEmail(),
        check('password', 'at least 6 characters').isLength({min: 6}),
        reqValidator
    ],
    loginUser
);

router.get(
    '/renew',
    [validateJWT],
    renewToken
);

module.exports = router;