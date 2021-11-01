const { TestWatcher } = require('@jest/core');// this added itself
const { fstat } = require('fs');//added itself
const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');//idk what this is it added itself
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const HTMLgen = require('./src/HTMLgen');
console.log('test to be sure its running')




let EmployeeArray = []

const questions = [
    {
        type:"Input",
        name:"name",
        message:"Add Manager name",
    },
    {
        type:"Input",
        name:"managerid",
        message:"Insert Employee id",
    },
    {
        type:"Input",
        name:"manageremail",
        message:"Enter Email",
    },
    {
        type:"input",
        name:"officenum",
        message:"Office Number:",
    },
    {
        type:"list",
        name:"additional",
        message:"Add another employee?",
        choices:['Engineer','Intern', 'Finished']
    },
]


//if Engineer
const EngQuestions =[
    {
        type:"input",
        name:"EngineerName",
        message:"Add Engineers Name",
    },
    {
        type:"Input",
        name:"EngineerID",
        message:"Add Employee ID",
    
    },
    {
        type:"input",
        name:"EngineerEmail",
        message:"Add Engineer Email",
    },{
        type:"Input",
        name:"GithubUser",
        message:"Add Github Username",
    },
    {
        type:"list",
        name:"additional",
        message:"Add another employee?",
        choices:['Engineer','Intern', 'Finished']
    },

]


const internQuestions = [
   

    {
        type:"input",
        name:"InternName",
        message:"Add Interns Name",
    },
    {
        type:"Input",
        name:"InternID",
        message:"Add Intern ID",
    
    },
    {
        type:"input",
        name:"InternEmail",
        message:"Add Intern Email",
    },
    {
        type:"input",
        name:"InternSchool",
        message:"Add Intern School",
    },
    {
        type:"list",
        name:"additional",
        message:"Add another employee?",
        choices:['Engineer','Intern', 'Finished']
    },

];




function init(){
    inquirer.prompt(questions)
    .then((answers) =>{
        console.log(answers);
        EmployeeArray.push(answers)
        Prompts(answers);
    })
}

function Prompts(answers){
    if(answers.additional === 'Engineer'){
        EPrompts();
    } else if (answers.additional === 'Intern'){
        IPrompts();
    } else {
        console.log(EmployeeArray)
        return HTMLgen(EmployeeArray);
    }
}

function EPrompts(){
    inquirer.prompt(EngQuestions)
    .then((answers) =>{
        console.log(answers);
        EmployeeArray.push(answers)
        Prompts(answers);
    })}

    
function IPrompts(){
    inquirer.prompt(internQuestions)
    .then((answers) =>{
        console.log(answers);
        EmployeeArray.push(answers)
        Prompts(answers);
    })
}



init();