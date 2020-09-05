const moongose= require('mongoose')


// Customer Schema


const customerSchema = moongose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
});


// Define And Export

module.exports = moongose.model('Customer',customerSchema);