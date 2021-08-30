// declaration of functions and classes needed to call 
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//declaration allowing for writing to files and creating HTML
const fs = require ('fs');
const inquirer = require('inquirer');
//initialized an empty array to store employees/team members
const teamArray = [];
//get user input by prompting
//input is stored in an array
     const addManager = () => {
    return inquirer.prompt ([
        
        {
            type: 'input',
            name : 'name',
            message: 'Please enter your Manager name ?',
            validate : nameInput => {
                if (nameInput){
                    return true;
                } else {
                   console.log("Please enter the manager's name");
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
                    // check to see if formate for emails is added
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
    // create managers information from inputted data
    .then(managerInput => {
        const {name,id ,email,officeNumber} = managerInput;
        const manager = new Manager (name,id,email,officeNumber);
        teamArray.push(manager);
        //check if information for manager was updated later commented out
        //console.log(manager);

    })
     };
     //prompt for Employee information
    const addEmployee =() => {
        return inquirer.prompt ([
            {
                type:'list',
                name: 'role',
                message : "Whats your employees's role ? Please make a choice!!",
                // chioce either Intern or Engineer
                choices :['Engineer','Intern']
            },
            {
                type:'input',
                name: 'name',
                message : "Whats your employee's name?",
                 validate : nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                       console.log("Please enter the Employee's name");
                       return false;
                    }
                 }
                 },
            
            {
                type: 'input',
                name : 'id',
                message: 'Please enter your Employee ID ?',
                validate : nameInput => {
                    if (nameInput){
                        return true;
                    } else {
                        console.log("Please enter the Employee's ID");
                    return false;
                }
            }
        },
        {
         type: 'input',
        name : 'email',
        message: 'Please enter your Employee email ?',
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
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the employee's github username!")
                }
            }
        },
         {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!");
                }
            }
        },
         {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 
        // based on input get github for Engineer and School for Intern
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};
// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! The resulting HTML file is in index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
// generate html and add data
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
     
   
