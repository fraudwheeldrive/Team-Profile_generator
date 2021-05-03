
const fs = require('fs');
const inquirer = require ('inquirer');
//const generatePage = require('./src/page-template');


const teamBuilder = () => {

    console.log (`
    ======================
    Team Profile Generator
    ======================
    `);

// build employee object     
return inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'Please enter Employees name?',
        validate: nameInput => {
            if (nameInput) {
            return true;
        } else {
            console.log('Please enter valid Employees name');
            return false;
        }
    }
},
    {
        type: 'input',
        name: 'email',
        message: 'please enter Employees email address',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid Employee email address');
                return  false;
            }
        }
    },
    {
        //need to ensure this only accepts numbers and not just strings
        type: 'input',
        name: 'employeeId',
        message: 'please enter Employees ID number',
        validate: employeeIdInput => {
            if (employeeIdInput) {
                return true;
            } else {
                console.log('Please enter a valid Employee ID number');
                return  false;
            }
        }
    },
]);
};

const teamSpec = profileData => {
    console.log (`
    ====================
    Choose Employee Role
    ====================
    `);

    if (!profileData.team) {
        profileData.team = [];
      }
      console.log(profileData);
 


    return inquirer
    .prompt([
  
    {
        type: 'list',
        name: 'role',
        message: "please choose the role of the Employee you are adding",
        choices: ["Engineer" , "Intern" , "Manager"]
    }
 ]);
};

const createEng = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "githubName",
            message:"please enter your Engineers github Username.",
            validate: githubNameInput => {
                if (githubNameInput) 
                {
                    return true;
                } else {
                    console.log("please enter your Engineers Github user name");
                    return false;
                }
            }
        }
    ])

};

const createInt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "schoolName",
            message:"please enter your Intern's school name.",
            validate: schoolNameInput => {
                if (schoolNameInput) 
                {
                    return true;
                } else {
                    console.log("please enter your intern's school name");
                    return false;
                }
            }
        }
    ])

};
const createMan = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNum",
            message:"please enter your Managers office telphone Number.",
            validate: officeNumInput => {
                if (officeNumInput) 
                {
                    return true;
                } else {
                    console.log("please enter your manager's office telephone number");
                    return false;
                }
            }
        }
    ])

};

//add another employee 

const newEmployee = () => {
    console. log (`
    ========================
    add additional Employees
    ========================
    `);
      // if no profiles created, create one
      
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another Employee?',
            choices: ["yes" , "no"],
          }
    ])
};

  
 //call teamBuilder       
teamBuilder()
// call teamSpec is allow user to choose role 
.then(teamSpec)
//.then(profileData => {
//    console.log(profileData);
//  })
// filter through selection to promp proper question array 
.then(input=> {
    if (input.role === "Engineer") {
    return createEng()

    } else if 
(input.role === "Intern") {
 return createInt()

    } else if 
  (input.role === "Manager") {
return createMan()
  }
})
// once done call newEmployee to add additonal employee
  .then(newEmployee)

  .then(input => {
      if (input.confirmAddEmployee === 'yes') {
          return teamBuilder()
          // add function to export data 
 //     } else generatePage()
      }
  });



        
        
        
        
    
    
  
  




