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
    connection.query("select * from products", function(err, res){
        if(err) throw err;
        var itemsList = []
        // making array for inquirer
        for(let i = 0; i < res.length; i++){
            itemsList[i] = [];
            itemsList[i].name = res[i].product_name + " - $" + res[i].price + " - [" + res[i].stock_quantity + "]";
            itemsList[i].value = i;
        }
        itemsList[res.length] = "CANCEL";
        // display them as a selectable list in inquirer
        listQuestion = {
            type : "list",
            name : "productSelect",
            message : "Select a product",
            choices : itemsList
        };
        inquirer.prompt(listQuestion).then(answers => {
            // after, allow quantity select
            let selected = {}
            selected = res[answers.productSelect];
            selectQuantity(selected.product_id, selected.stock_quantity);
        });
    });
}

function selectQuantity(itemID, stockLevel){
    // prep question
    let getQuantity = {
        type: "input",
        name: "quantity",
        Message: "How many would you like to purchase? (or 'exit' to quit)"
    }
    inquirer.prompt(getQuantity).then(answers => {
        let quantity = parseInt(answers.quantity);
        if(quantity <= stockLevel){
            console.log("ok");
        }
        else if(answers.quantity == "exit"){
            console.log("Cancelling");
            itemSelect();
        }
        else{
            console.log("Insufficient stock.")
            selectQuantity(itemID, stockLevel);
        }
    });
}

function purchaseItem(item, quantity){
    // form query
    // send query
    // return results
    // ask to continue or end
}

// start action loooop
itemSelect();
