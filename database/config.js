
const mongoose = require('mongoose');

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }



const dbConnection = async () => {
    
    try {

        await mongoose.connect(process.env.DB_CNN);
        console.log('Connected to db...');

    } catch (error) {

        console.log(error);
        throw new Error('Error at initializing databse');
    }
}

module.exports = {dbConnection}

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));