
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const fs = require ('fs');
const inquirer = require('inquirer');
//initialized an empty array to store employees/team members
const teamArray = [];
//const question = () => {
 inquirer.prompt ([
        {
            type: 'input',
            name : 'name',
            message: 'Please enter your Manager name ?',
            validate : nameInput => {
                if (nameInput){
                    return true;
                } else {
                   console.log("Please enter the manage's name");
                   return false;
                }
            }
        },
        {
            type: 'input',
            name : 'id',
            message: 'Please enter your Manager ID ?',
            validate : nameInput => {
                if (nameInput){
                    return true;
                } else {
                   console.log("Please enter the manager's ID");
                   return false;
                }
            }
        },
     
        {
        type: 'input',
        name : 'email',
        message: 'Please enter your Manager email ?',
        validate: function(value) 
                {
                    let pass = value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    );
                    if(pass) {
                         return true;
                     }
                     return 'You have entered an invalid email address!';
                    
                },
            },
         
            {
                type: 'input',
                name : 'officeNumber',
                message: 'Please enter your Manager Office number ?',
                validate : nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                       console.log("Please enter the manager's number");
                       return false;
                    }
                }
            },
    
    ])
    .then(managerInput => {
        const {name,id ,email,officeNumber} = managerInput;
        const manager = new Manager (name,id,email,officeNumber);
        teamArray.push(manager);
        console.log(manager);

    })
;
