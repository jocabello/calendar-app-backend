const {response} =require('express');
const Event = require('../models/EventModel');


const getEvents = async (req, res = response) =>{

    // hasta .find() para traer todo, .populate('user') para que se despliegue el contenido de user{}, argumento 'name' es para desplegar solo ese keyvalue pair del objeto user. _id siempre vendrá. para trer más valores como password usar 'name password' (dentro de '' ambos)
    const event = await Event.find().populate('user', 'name');

    try {
        res.json({
            ok: true,
            event
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

const createEvent = async(req, res = response) =>{

    // verificar que tengo el evento
    // console.log(req.body);

    const event = new Event(req.body);

    try {

        event.user = req.uid;
        
        const eventSaved =  await event.save();

        res.json({
            ok: true,
            event: eventSaved
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

const updateEvent = async (req, res = response) =>{

    const eventId = req.params.id;
    const uid = req.uid;


    try {

        const event = await Event.findById(eventId);
        
        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'Not authorized'
            });
        }

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        // {new:true} opción para que retorne el nuevo objeto y no el viejo por defecto
        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new:true});

        res.json({
            ok: true,
            event: updatedEvent
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}

const deleteEvent = async (req, res = response) =>{

    const eventId = req.params.id;
    const uid = req.uid;


    try {

        const event = await Event.findById(eventId);
        
        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'Not authorized'
            });
        }

        if(!event){
            return res.status(404).json({
                ok: false,
                msg: 'Event not found'
            });
        }

        await Event.findByIdAndDelete(eventId);

        res.json({
            ok: true
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact an admin'
        })
    }
}


module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}