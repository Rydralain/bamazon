/*
FUNCTIONALITY SUMMARY
    View items
    View low-stock items
    Add stock quantity
    Add product definition
    (restart/quit)
*/


// premade mysql connection to the db
const connection = require('./bamazonConnect.js');

// inquirer for easy CLI options
const inquirer = require('inquirer');

function modeSelect(){
    // 3 modes: all inventory, low-stock inventory, add product
}

function getAll(){
    // get list of all items
    // send array to showItems
}

function getLowStock(){
    // get list of low-stock items
    // send array to showItems
}

function showItems(itemArray){
    // expecting [].name [].quantity
    // selectable inquirer list (and cancel option)
    // then ask how much to add
    // increaseStock(item, quantity)
}

function increaseStock(item, quantity){
    // form query
    // send query
    // return results
    // ask to continue or end
}

function showAddProduct(){
    // get department list
    // prompt for name, department, price, starting stock
}