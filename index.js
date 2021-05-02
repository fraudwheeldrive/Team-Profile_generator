const fs = require('fs');
const inquirer = require ('inquirer');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fileName = ('./dist/index.html');
const generatePage = require('./src/page-template');

//array for emplyoee roles 
const employeeRoll = ["Engineer" , "Intern" , "Manager"];

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

const teamBuilder = () => {
    console.log (`
    ======================
    Team Profile Generator
    ======================
    `);

return inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 'Please enter Employees name?',
        validate: name => {
            if (name) {
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
        validate: email => {
            if (email) {
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
        name: 'employeeID',
        message: 'please enter Employees ID number',
        validate: employeeID => {
            if (employeeID) {
                return true;
            } else {
                console.log('Please enter a valid Employee ID number');
                return  false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'role',
        message: "please choose the role of the Employee you are adding",
        choices: employeeRoll,
    },




]);
};
teamBuilder().then(answers => console.log(answers));







//fs.writeFile('/index.html', pageHTML, err=> {
//    if (err) throw err;

//    console.log('Team Profile Generated, Thank you.')
//})



