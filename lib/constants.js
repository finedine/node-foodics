function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}
define("BASE_URL", "https://dash.foodics.com/api/v2");
define("BRANCHES", "/branches");
define("CATEGORIES", "/categories");
define("PRODUCTS", "/products");
define("FLOOR_TABLES", "/floor-tables");
define("USERS", "/users");
define("ORDERS", "/orders");
define("MODIFIERS", "/modifiers");
define("DELIVERY_ZONES", "/delivery-zones");
