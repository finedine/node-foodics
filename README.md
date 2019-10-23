[![NPM version][npm-image]][npm-url]

# node-foodics

Simple Node.js wrapper for [Foodics API](https://dash.foodics.com/api-docs).

## Getting Started

### Installation
___
```sh
npm install node-foodics
```

### Setup

Basically require `node-foodics` and create a new instance with `new NodeFoodics()`.

If you have all of your credentials, you can use `new NodeFoodics(token, xbusiness, branchHid)` initialization to access all functions.

If you already have your `token`, then you can create instance using `new NodeFoodics(token)` OR you can set token using `foodics.setToken(token)`. Using this initialization you'll be able to use [Get Allowed Businesses](https://dash.foodics.com/api-docs#get-allowed-businesses) function. All other endpoints require `X-Business`.

After you have your `X-Business`, you can set it using `foodics.setXBusiness(xbusiness)`.

### Example
___
```javascript
const NodeFoodics = require("node-foodics");
..
const foodics = new NodeFoodics(token, xbusiness, branchHid);
// OR
const foodics = new NodeFoodics();
foodics.setToken(token);
const businesses = await foodics.allowedbusinesses.list();
foodics.setXBusiness(businesses[0].hid);
```

### Filtering

You can find more information about allowed filters in detail pages.
For LIST functions, you can pass a filter object for filtering.

##### Example
___
```javascript
const businesses = await foodics.categories.list({
  sku: "SKU_01"
});
```

## Available Functions

| Endpoint              | Function | Usage                                  | Detail                                                             |
| --------------------- | -------- | -------------------------------------- | ------------------------------------------------------------------ |
| Authentication        |          | authentication(secret)                 | [Detail](https://dash.foodics.com/api-docs#authentication)         |
| Allowed Businesses    | LIST     | allowedbusinesses.list()               | [Detail](https://dash.foodics.com/api-docs#get-allowed-businesses) |
| Branches              | LIST     | branches.list(filter)                  | [Detail](https://dash.foodics.com/api-docs#branches)               |
| Branches              | GET      | branches.get(hid)                      | [Detail](https://dash.foodics.com/api-docs#branches)               |
| Branches              | UPDATE   | branches.update(hid, payload)          | [Detail](https://dash.foodics.com/api-docs#branches)               |
| Categories            | LIST     | categories.list(filter)                | [Detail](https://dash.foodics.com/api-docs#categories)             |
| Categories            | GET      | categories.get(hid)                    | [Detail](https://dash.foodics.com/api-docs#categories)             |
| Categories            | UPDATE   | categories.update(hid, payload)        | [Detail](https://dash.foodics.com/api-docs#categories)             |
| Categories            | CREATE   | categories.create(payload)             | [Detail](https://dash.foodics.com/api-docs#categories)             |
| Categories            | DELETE   | categories.delete(hid)                 | [Detail](https://dash.foodics.com/api-docs#categories)             |
| Cities                | LIST     | cities.list(filter)                    | [Detail](https://dash.foodics.com/api-docs#cities)                 |
| Combos                | CREATE   | combos.create(payload)                 | [Detail](https://dash.foodics.com/api-docs#combos)                 |
| Countries             | LIST     | countries.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#countries)              |
| Customers             | LIST     | customers.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#customers)              |
| Customers             | GET      | customers.get(hid)                     | [Detail](https://dash.foodics.com/api-docs#customers)              |
| Customers             | UPDATE   | customers.update(hid, payload)         | [Detail](https://dash.foodics.com/api-docs#customers)              |
| Customers             | CREATE   | customers.create(payload)              | [Detail](https://dash.foodics.com/api-docs#customers)              |
| CustomerAddresses     | LIST     | customeraddresses.list(filter)         | [Detail](https://dash.foodics.com/api-docs#customeraddresses)      |
| CustomerAddresses     | GET      | customeraddresses.get(hid)             | [Detail](https://dash.foodics.com/api-docs#customeraddresses)      |
| CustomerAddresses     | UPDATE   | customeraddresses.update(hid, payload) | [Detail](https://dash.foodics.com/api-docs#customeraddresses)      |
| CustomerAddresses     | CREATE   | customeraddresses.create(payload)      | [Detail](https://dash.foodics.com/api-docs#customeraddresses)      |
| CustomerAddresses     | DELETE   | customeraddresses.delete(hid)          | [Detail](https://dash.foodics.com/api-docs#customeraddresses)      |
| DeliveryZones         | LIST     | deliveryzones.list(filter)             | [Detail](https://dash.foodics.com/api-docs#deliveryzones)          |
| DeliveryZones         | GET      | deliveryzones.get(hid)                 | [Detail](https://dash.foodics.com/api-docs#deliveryzones)          |
| DeliveryZones         | UPDATE   | deliveryzones.update(hid, payload)     | [Detail](https://dash.foodics.com/api-docs#deliveryzones)          |
| DeliveryZones         | CREATE   | deliveryzones.create(payload)          | [Detail](https://dash.foodics.com/api-docs#deliveryzones)          |
| DeliveryZones         | DELETE   | deliveryzones.delete(hid)              | [Detail](https://dash.foodics.com/api-docs#deliveryzones)          |
| Devices               | LIST     | devices.list(filter)                   | [Detail](https://dash.foodics.com/api-docs#devices)                |
| Devices               | GET      | devices.get(hid)                       | [Detail](https://dash.foodics.com/api-docs#devices)                |
| Discounts             | LIST     | discounts.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#discounts)              |
| Discounts             | GET      | discounts.get(hid)                     | [Detail](https://dash.foodics.com/api-docs#discounts)              |
| Discounts             | UPDATE   | discounts.update(hid, payload)         | [Detail](https://dash.foodics.com/api-docs#discounts)              |
| Discounts             | CREATE   | discounts.create(payload)              | [Detail](https://dash.foodics.com/api-docs#discounts)              |
| Discounts             | DELETE   | discounts.delete(hid)                  | [Detail](https://dash.foodics.com/api-docs#discounts)              |
| FloorLocations        | LIST     | floorlocations.list(filter)            | [Detail](https://dash.foodics.com/api-docs#floorlocations)         |
| FloorLocations        | GET      | floorlocations.get(hid)                | [Detail](https://dash.foodics.com/api-docs#floorlocations)         |
| FloorLocations        | UPDATE   | floorlocations.update(hid, payload)    | [Detail](https://dash.foodics.com/api-docs#floorlocations)         |
| FloorLocations        | CREATE   | floorlocations.create(payload)         | [Detail](https://dash.foodics.com/api-docs#floorlocations)         |
| FloorLocations        | DELETE   | floorlocations.delete(hid)             | [Detail](https://dash.foodics.com/api-docs#floorlocations)         |
| FloorTables           | LIST     | floortables.list(filter)               | [Detail](https://dash.foodics.com/api-docs#floortables)            |
| FloorTables           | GET      | floortables.get(hid)                   | [Detail](https://dash.foodics.com/api-docs#floortables)            |
| FloorTables           | UPDATE   | floortables.update(hid, payload)       | [Detail](https://dash.foodics.com/api-docs#floortables)            |
| FloorTables           | CREATE   | floortables.create(payload)            | [Detail](https://dash.foodics.com/api-docs#floortables)            |
| FloorTables           | DELETE   | floortables.delete(hid)                | [Detail](https://dash.foodics.com/api-docs#floortables)            |
| InventoryItemTags     | LIST     | inventoryitemtags.list(filter)         | [Detail](https://dash.foodics.com/api-docs#inventoryitemtags)      |
| InventoryItemTags     | GET      | inventoryitemtags.get(hid)             | [Detail](https://dash.foodics.com/api-docs#inventoryitemtags)      |
| InventoryItemTags     | UPDATE   | inventoryitemtags.update(hid, payload) | [Detail](https://dash.foodics.com/api-docs#inventoryitemtags)      |
| InventoryItemTags     | CREATE   | inventoryitemtags.create(payload)      | [Detail](https://dash.foodics.com/api-docs#inventoryitemtags)      |
| InventoryItemTags     | DELETE   | inventoryitemtags.delete(hid)          | [Detail](https://dash.foodics.com/api-docs#inventoryitemtags)      |
| InventoryItems        | LIST     | inventoryitems.list(filter)            | [Detail](https://dash.foodics.com/api-docs#inventoryitems)         |
| InventoryItems        | GET      | inventoryitems.get(hid)                | [Detail](https://dash.foodics.com/api-docs#inventoryitems)         |
| InventoryItems        | UPDATE   | inventoryitems.update(hid, payload)    | [Detail](https://dash.foodics.com/api-docs#inventoryitems)         |
| InventoryItems        | CREATE   | inventoryitems.create(payload)         | [Detail](https://dash.foodics.com/api-docs#inventoryitems)         |
| InventoryItems        | DELETE   | inventoryitems.delete(hid)             | [Detail](https://dash.foodics.com/api-docs#inventoryitems)         |
| InventoryLevels       | LIST     | inventorylevels.list(filter)           | [Detail](https://dash.foodics.com/api-docs#inventorylevels)        |
| InventorySnapshots    | LIST     | inventorysnapshots.list(filter)        | [Detail](https://dash.foodics.com/api-docs#inventorysnapshots)     |
| InventorySnapshots    | GET      | inventorysnapshots.get(hid)            | [Detail](https://dash.foodics.com/api-docs#inventorysnapshots)     |
| InventoryTransactions | LIST     | inventorytransactions.list(filter)     | [Detail](https://dash.foodics.com/api-docs#inventorytransactions)  |
| InventoryTransactions | GET      | inventorytransactions.get(hid)         | [Detail](https://dash.foodics.com/api-docs#inventorytransactions)  |
| InventoryTransactions | CREATE   | inventorytransactions.create(payload)  | [Detail](https://dash.foodics.com/api-docs#inventorytransactions)  |
| Modifiers             | LIST     | modifiers.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#modifiers)              |
| Modifiers             | GET      | modifiers.get(hid)                     | [Detail](https://dash.foodics.com/api-docs#modifiers)              |
| Modifiers             | UPDATE   | modifiers.update(hid, payload)         | [Detail](https://dash.foodics.com/api-docs#modifiers)              |
| Modifiers             | CREATE   | modifiers.create(payload)              | [Detail](https://dash.foodics.com/api-docs#modifiers)              |
| Modifiers             | DELETE   | modifiers.delete(hid)                  | [Detail](https://dash.foodics.com/api-docs#modifiers)              |
| OrderTags             | LIST     | ordertags.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#ordertags)              |
| Orders                | LIST     | orders.list(filter)                    | [Detail](https://dash.foodics.com/api-docs#orders)                 |
| Orders                | GET      | orders.get(hid)                        | [Detail](https://dash.foodics.com/api-docs#orders)                 |
| Orders                | CREATE   | orders.create(payload)                 | [Detail](https://dash.foodics.com/api-docs#orders)                 |
| Orders                | UPDATE   | orders.update(hid, payload)            | [Detail](https://dash.foodics.com/api-docs#orders)                 |
| Orders                | CANCEL   | orders.cancel(hid)                     | [Detail](https://dash.foodics.com/api-docs#orders)                 |
| PaymentMethods        | LIST     | paymentmethods.list(filter)            | [Detail](https://dash.foodics.com/api-docs#paymentmethods)         |
| PaymentMethods        | GET      | paymentmethods.get(hid)                | [Detail](https://dash.foodics.com/api-docs#paymentmethods)         |
| PaymentMethods        | CREATE   | paymentmethods.create(payload)         | [Detail](https://dash.foodics.com/api-docs#paymentmethods)         |
| PaymentMethods        | UPDATE   | paymentmethods.update(hid, payload)    | [Detail](https://dash.foodics.com/api-docs#paymentmethods)         |
| ProductTags           | LIST     | producttags.list(filter)               | [Detail](https://dash.foodics.com/api-docs#producttags)            |
| ProductTags           | GET      | producttags.get(hid)                   | [Detail](https://dash.foodics.com/api-docs#producttags)            |
| ProductTags           | CREATE   | producttags.create(payload)            | [Detail](https://dash.foodics.com/api-docs#producttags)            |
| ProductTags           | UPDATE   | producttags.update(hid, payload)       | [Detail](https://dash.foodics.com/api-docs#producttags)            |
| ProductTags           | DELETE   | producttags.delete(hid)                | [Detail](https://dash.foodics.com/api-docs#producttags)            |
| Products              | LIST     | products.list(filter)                  | [Detail](https://dash.foodics.com/api-docs#products)               |
| Products              | GET      | products.get(hid)                      | [Detail](https://dash.foodics.com/api-docs#products)               |
| Products              | CREATE   | products.create(payload)               | [Detail](https://dash.foodics.com/api-docs#products)               |
| Products              | UPDATE   | products.update(hid, payload)          | [Detail](https://dash.foodics.com/api-docs#products)               |
| Products              | DELETE   | products.delete(hid)                   | [Detail](https://dash.foodics.com/api-docs#products)               |
| PurchaseOrders        | LIST     | purchaseorders.list(filter)            | [Detail](https://dash.foodics.com/api-docs#purchaseorders)         |
| PurchaseOrders        | GET      | purchaseorders.get(hid)                | [Detail](https://dash.foodics.com/api-docs#purchaseorders)         |
| PurchaseOrders        | CREATE   | purchaseorders.create(payload)         | [Detail](https://dash.foodics.com/api-docs#purchaseorders)         |
| CurrentBusiness       | LIST     | currentbusiness.list(filter)           | [Detail](https://dash.foodics.com/api-docs#currentbusiness)        |
| RestoreData           | LIST     | restoredata.list(filter)               | [Detail](https://dash.foodics.com/api-docs#restoredata)            |
| Shifts                | LIST     | shifts.list(filter)                    | [Detail](https://dash.foodics.com/api-docs#shifts)                 |
| Suppliers             | LIST     | suppliers.list(filter)                 | [Detail](https://dash.foodics.com/api-docs#suppliers)              |
| Suppliers             | GET      | suppliers.get(hid)                     | [Detail](https://dash.foodics.com/api-docs#suppliers)              |
| Suppliers             | CREATE   | suppliers.create(payload)              | [Detail](https://dash.foodics.com/api-docs#suppliers)              |
| Suppliers             | UPDATE   | suppliers.update(hid, payload)         | [Detail](https://dash.foodics.com/api-docs#suppliers)              |
| Suppliers             | DELETE   | suppliers.delete(hid)                  | [Detail](https://dash.foodics.com/api-docs#suppliers)              |
| Taxes                 | LIST     | taxes.list(filter)                     | [Detail](https://dash.foodics.com/api-docs#taxes)                  |
| Taxes                 | GET      | taxes.get(hid)                         | [Detail](https://dash.foodics.com/api-docs#taxes)                  |
| Taxes                 | CREATE   | taxes.create(payload)                  | [Detail](https://dash.foodics.com/api-docs#taxes)                  |
| Taxes                 | UPDATE   | taxes.update(hid, payload)             | [Detail](https://dash.foodics.com/api-docs#taxes)                  |
| Taxes                 | DELETE   | taxes.delete(hid)                      | [Detail](https://dash.foodics.com/api-docs#taxes)                  |
| TimedEvents           | LIST     | timedevents.list(filter)               | [Detail](https://dash.foodics.com/api-docs#timedevents)            |
| TimedEvents           | GET      | timedevents.get(hid)                   | [Detail](https://dash.foodics.com/api-docs#timedevents)            |
| TimedEvents           | CREATE   | timedevents.create(payload)            | [Detail](https://dash.foodics.com/api-docs#timedevents)            |
| TimedEvents           | UPDATE   | timedevents.update(hid, payload)       | [Detail](https://dash.foodics.com/api-docs#timedevents)            |
| TimedEvents           | DELETE   | timedevents.delete(hid)                | [Detail](https://dash.foodics.com/api-docs#timedevents)            |
| TillLogs              | LIST     | tilllogs.list(filter)                  | [Detail](https://dash.foodics.com/api-docs#tilllogs)               |
| TillOperations        | LIST     | tilloperations.list(filter)            | [Detail](https://dash.foodics.com/api-docs#tilloperations)         |
| Users                 | LIST     | users.list(filter)                     | [Detail](https://dash.foodics.com/api-docs#users)                  |
| Users                 | GET      | users.get(hid)                         | [Detail](https://dash.foodics.com/api-docs#users)                  |
| Users                 | CREATE   | users.create(payload)                  | [Detail](https://dash.foodics.com/api-docs#users)                  |
| Users                 | UPDATE   | users.update(hid, payload)             | [Detail](https://dash.foodics.com/api-docs#users)                  |
| Warehouses            | LIST     | warehouses.list(filter)                | [Detail](https://dash.foodics.com/api-docs#warehouses)             |
| Warehouses            | GET      | warehouses.get(hid)                    | [Detail](https://dash.foodics.com/api-docs#warehouses)             |

## Contributing

If you want to contribute to a project and make it better, your help is very welcome.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

[npm-image]: https://img.shields.io/npm/v/node-foodics.svg?style=flat
[npm-url]: https://www.npmjs.com/package/node-foodics
