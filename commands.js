#!/user/bin/env node

const program = require('commander');
const { prompt } = require('inquirer')
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require('./index');
const { default: customer } = require('./models/customer');

const questions=[
    {
        type:'input',
        name:'firstName',
        message:'Customer First Name'
    },
    {
        type:'input',
        name:'lastName',
        message:'Customer Last Name'
    },
    {
        type:'input',
        name:'phone',
        message:'Customer Phone Number'
    },
    {
        type:'input',
        name:'email',
        message:'Customer Email Address'
    }
];






program
    .version('1.0.0')
    .description('Client Management System')


program
    .command('add')
    .alias('a')
    .description('Add a Customer')
    .action(() => {
    prompt(questions).then(answer => addCustomer(answer))
    });



program
    .command('add <firstName> <lastName> <phone> <email> ')
    .alias('a')
    .description('Add a Customer')
    .action((firstName,lastName,phone,email) =>{
        addCustomer({firstName,lastName,phone,email});
    })
program
    .command('find <name>')
    .alias('f')
    .description('Find A Customer ')
    .action(name => findCustomer(name))




program
    .command('update <_id>')
    .alias('u')
    .description('Customer Updated')
    .action((_id) => {
    prompt(questions).then(answer => updateCustomer(_id,answer))
    });



program
    .command('remove <_id>')
    .alias('r')
    .description('Remove Customer')
    .action(_id => removeCustomer(_id));
    
program
    .command('show')
    .alias('s')
    .description('All The Customer')
    .action(() => listCustomer() )


program.parse(process.argv);
