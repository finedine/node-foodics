[![NPM version][npm-image]][npm-url]

# node-foodics
Simple NodeJS wrapper for [Foodics API](https://dash.foodics.com/api-docs).

## Getting Started

### Installation

`npm install node-foodics`

### Setup

Basically require `node-foodics` and use `init(apiKey, xbusinessHid, branchHid)` function to initialize wrapper.

### Example
```
var nodeFoodics = require("node-foodics");
..
var FoodicsClient = nodeFoodics.init(API_KEY, XBUSINESS_HID, BRANCH_HID);  
```

## Available Functions
* **getBranch(callback, error) -> returns { branch }** // *branch is an object*
* **getCategories(callback, error) -> returns { categories }** // *categories is an array*
* **getItems(callback, error) -> returns { products }** // *products is an array*
* **getTables(callback, error) -> returns { tables }** // *tables is an array*
* **getEmployees(callback, error) -> returns { users }** // *users is an array which contains only [APP USERS](https://dash.foodics.com/api-docs#users)*
* **getModifiers(callback, error) -> returns { modifiers }** // *modifiers is an array*
* **getTickets(callback, error) -> returns { orders }** // *orders is an array which contains only today's orders.*
* **openTicket(data, callback, error) -> returns { order_hid }** // *order_hid is a string which indicates Foodics order. `data` object should match with the request body in [Foodics Create Order](https://dash.foodics.com/api-docs#create-order)*

## Contributing
If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/ts-node.svg?style=flat
[npm-url]: https://npmjs.org/package/ts-node
