module.exports = [
  {
    name: "Branches",
    path: "branches",
    availables: ["list", "get", "update"]
  },
  {
    name: "Categories",
    path: "categories",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "Cities",
    path: "cities",
    availables: ["list"]
  },
  {
    name: "Combos",
    path: "combos",
    availables: ["create"]
  },
  {
    name: "Countries",
    path: "countries",
    availables: ["list"]
  },
  {
    name: "Customers",
    path: "customers",
    availables: ["list", "get", "update", "create"],
    pagination: true,
    limit: 50
  },
  {
    name: "CustomerAddresses",
    path: "customer-addresses",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "DeliveryZones",
    path: "delivery-zones",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "Devices",
    path: "devices",
    availables: ["list", "get"]
  },
  {
    name: "Discounts",
    path: "discounts",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorLocations",
    path: "floor-locations",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "FloorTables",
    path: "floor-tables",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItemTags",
    path: "inventory-item-tags",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryItems",
    path: "inventory-items",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "InventoryLevels",
    path: "inventory-levels",
    availables: ["list"],
    parameters: ["branchHid"]
  },
  {
    name: "InventorySnapshots",
    path: "inventory-snapshots",
    availables: ["list", "get"]
  },
  {
    name: "InventoryTransactions",
    path: "inventory-transactions",
    availables: ["list", "get", "create"]
  },
  {
    name: "Modifiers",
    path: "modifiers",
    availables: ["list", "get", "update", "create", "delete"]
  },
  {
    name: "OrderTags",
    path: "order-tags",
    availables: ["list"]
  },
  {
    name: "Orders",
    path: "orders",
    availables: ["list", "get", "create", "update", "cancel"]
  },
  {
    name: "PaymentMethods",
    path: "payment-methods",
    availables: ["list", "get", "create", "update"]
  },
  {
    name: "ProductTags",
    path: "product-tags",
    availables: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "Products",
    path: "products",
    availables: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "PurchaseOrders",
    path: "purchase-orders",
    availables: ["list", "get", "create"]
  },
  {
    name: "CurrentBusiness",
    path: "current-business",
    availables: ["list"]
  },
  {
    name: "RestoreData",
    path: "restore-data",
    availables: ["list"]
  },
  {
    name: "Shifts",
    path: "shifts",
    availables: ["list"]
  },
  {
    name: "Suppliers",
    path: "suppliers",
    availables: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "Taxes",
    path: "taxes",
    availables: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "TimedEvents",
    path: "timed-events",
    availables: ["list", "get", "create", "update", "delete"]
  },
  {
    name: "TillLogs",
    path: "till-logs",
    availables: ["list"]
  },
  {
    name: "TillOperations",
    path: "till-operations",
    availables: ["list"]
  },
  {
    name: "Users",
    path: "users",
    availables: ["list", "get", "create", "update"]
  },
  {
    name: "Warehouses",
    path: "warehouses",
    availables: ["list", "get"]
  }
];
