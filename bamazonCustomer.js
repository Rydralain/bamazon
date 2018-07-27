/*
FUNCTIONALITY SUMMARY
    List items
    Select item
    Select quantity
    display results
    (restart/quit)
*/

// premade mysql connection to the db
const connection = require('./bamazonConnect.js');

// inquirer for easy CLI options
const inquirer = require('inquirer');


function itemSelect(){
    // fetch all in-stock items
    // display them as a selectable list in inquirer (and cancel option)
    // after, allow quantity select
    // check if selected quantity is valid
    // send db update
    purchaseItem(item, quantity);
}

function purchaseItem(item, quantity){
    // form query
    // send query
    // return results
    // ask to continue or end
}

// start action loooop
itemSelect();