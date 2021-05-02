const fs = require('fs');
const inquirer = require ('inquirer');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fileName = ('./dist/index.html');


// prompt user to start inquirer process
// 1st questions asked to build out employee object 
//1. name
//2. email
//3. employee id

// then prompt which role (use lise)
//if Manager, need to ask office number and save to array 
//if Intern, need to add school to employee object and save to array 
//if Engineer, need to add githubname to employee object to save to array 

// finish initial run through of questions , then prompt if you would like to add 
//additional employee if yes, loop back through if no, need to generate HTML page in 
//Dist






    const teamManager  =[
//1. Team Managers Name 
     {
        type: 'input',
        name: 'Team Manager Name',
        message:'what is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("please enter the Team Managers Name");
                return false;
            }
        }
    },
// 2.Team Managers ID?
    {
    type: 'input',
        name: 'id',
        message:'what is your employee ID',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("please enter your Employee ID");
                return false;
            }
        }
    },
// 3.what is your Team Managers Email?
    {
        type: 'input',
            name: 'email',
            message:'what is your email Address?',
            validate: emailInput => {
                if (eamilInput) {
                    return true;
                } else {
                    console.log("please enter your Email Address");
                    return false;
                }
            }
        },
// 4.Team managers Phone Number
        {
            type: 'input',
                name: 'Office Number',
                message:'Please add Team Managers Office Number ',
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log("please enter an office number");
                        return false;
                    }
                }
            },
    ]
         




// TODO: Create a function to create a HTML file
  
 function writeToFile(fileName, createWebPage) {
    return new Promise((resolve, reject) => {
      fs.writeFile (fileName, createWebPage, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Profile was created!'
        });
      });
    });


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(teamManager);
}

// Function call to initialize app
//init()
//.then(data => {
//    return generateMarkdown(data);
//})
//.then(createReadme => {
//    return writeToFile(fileName, createReadme);
//})
//.then (writeFile => {
//    console.log(writeFile);
//})
//.catch (err => {
//    console.log(err)
//});
// },


 }
