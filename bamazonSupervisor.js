/*
FUNCTIONALITY SUMMARY
    View sales by department
    Create department
    (restart/quit)
*/

// this code would all be a little better if I was builidng a department object to store data,
// but I'm past out of time for this assignment, so an oop redesign is out of scope - I may not even get to this file at all

// premade mysql connection to the db
const connection = require('./bamazonConnect.js');

// inquirer for easy CLI options
const inquirer = require('inquirer');

const Table = require('cli-table');

function modeSelect(){
    // sales report | create dept
}

function showSalesPrompts(){
    // get dept list
    // show selectable inquirer list
    // showSales(deptID)
}

function showSales(deptID){
    // query for dept name & overhead
    // query for transactions for this dept
    // add up transaction revenue
    // display table
}

