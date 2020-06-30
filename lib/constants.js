function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}
define("PRODUCTION_BASE_URL", "https://api.foodics.com");
define("STAGING_BASE_URL", "https://api-sandbox.foodics.com");
