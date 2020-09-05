const mongoose = require('mongoose')



// map global promise get rid of warning
mongoose.Promise=global.Promise;


// Connect Db
const db= mongoose.connect('mongodb://localhost:27017/customercli',{
    // useMongoClient:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
});  

// Import Model

const Customer= require('./models/customer');
const { default: customer } = require('./models/customer');

// Add Customer

const addCustomer=(customer) =>{
    Customer.create(customer).then(customer =>{
        console.info('New Customer Added');
        mongoose.connection.close();
    }).catch((err) => {
        console.info(err)
        mongoose.connection.close();
        
    });
}


// Find Customer

const findCustomer=(name) =>{
    //Make Case insensitive
    const search = new RegExp(name,'i');
    Customer.find({ $or: [{firstName : search}, {lastName: search}]})
    .then( customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.connection.close();
    })
}

const updateCustomer=(_id,customer) =>{

    Customer.update( {_id},customer )
    .then( customer => {
        console.info('customer Updated');
        mongoose.connection.close();
    })
}

const removeCustomer=(_id ) =>{

    Customer.remove( {_id} )
    .then( customer => {
        console.info('customer Removed');
        mongoose.connection.close();
    })
}

const listCustomer=() =>{

    Customer.find( )
    .then( customers => {
        console.info('customer List');
        console.info(customers)
        console.info( `$${customers.length} total number of customer `)
        mongoose.connection.close();
    })
}



module.exports={
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer

}