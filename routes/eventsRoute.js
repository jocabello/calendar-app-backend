/*
    rutas de eventos
    host + /api/events
*/
const {Router} = require('express');
const {check} = require('express-validator');

const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/eventsController");
const { validateJWT } = require("../middlewares/validateJWT");
const { reqValidator } = require("../middlewares/reqValidator");
const { isDate } = require('../helpers/isDate');

const router = Router();

// mejor manera de propagar la la validación del JWT
router.use(validateJWT);


// todas tienen que pasar por la validación del JWT

// obtener eventos
router.get('/', getEvents);

// crear
router.post(
    '/',
    [
        check('title', 'Title required').not().isEmpty(),
        check('start', 'Start date required').custom(isDate),
        check('end', 'End date required').custom(isDate),
        reqValidator
    ],
    createEvent
);


// actualizar
router.put(
    '/:id',
    [
        check('title', 'Title required').not().isEmpty(),
        check('start', 'Start date required').custom(isDate),
        check('end', 'End date required').custom(isDate),
        reqValidator
    ],
    updateEvent
);

// eliminar
router.delete('/:id', deleteEvent);

module.exports = router;