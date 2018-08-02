# bamazon

The Bamazon application includes functionality for a customer to select items for purchase in a CLI. There are additional files prepared with notes and structure for the creation of manager and supervisor functions.

The database and module design is as follows:
![Overview](https://rydralain.github.io/bamazon/screenshots/overview.png)
Note that there was a minor change from the original specifications where the department_name in the products table has been changed to department_id for normalization reasons. This data is readily available through join on that column.

The basic flow of the application is as follows:

Run the customer application
![Overview](https://rydralain.github.io/bamazon/screenshots/1.png)

Select an item (or cancel)
![Overview](https://rydralain.github.io/bamazon/screenshots/2.png)

Select a quantity (or exit)
![Overview](https://rydralain.github.io/bamazon/screenshots/3.png)

If an invalid quantity is selected, you can try again or exit
![Overview](https://rydralain.github.io/bamazon/screenshots/4.png)

Otherwise, the purchase is made and you are able to restart or quit
![Overview](https://rydralain.github.io/bamazon/screenshots/5.png)
