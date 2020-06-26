module.exports = [
  {
    name: "Addresses",
    path: "addresses",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/addresses.html#addresses"
  },
  {
    name: "Branch Business Days",
    path: "branch_business_days",
    methods: ["list", "get", "create"],
    link:
      "https://apidocs.foodics.com/core/resources/branch_business_days.html#branch-business-days"
  },
  {
    name: "Branches",
    path: "branches",
    methods: ["list", "get", "update", "delete"],
    link: "https://apidocs.foodics.com/core/resources/branches.html#branches"
  },
  {
    name: "Categories",
    path: "categories",
    methods: ["list", "get", "update", "create", "delete"],
    // TODO: Improve this custom functions
    // custom_methods: [
    //   {
    //     path: "categories/{categoryId}/restore",
    //     method: "PUT",
    //     params: ["categoryId"]
    //   }
    // ],
    link:
      "https://apidocs.foodics.com/core/resources/categories.html#categories"
  },
  {
    name: "Charges",
    path: "charges",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/charges.html#charges"
  },
  {
    name: "Combos",
    path: "combos",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/combos.html#combos"
  },
  {
    name: "Coupons",
    path: "coupons",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/coupons.html#coupons"
  },
  {
    name: "Customers",
    path: "customers",
    methods: ["list", "get", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/customers.html#customers"
  },
  {
    name: "Delivery Zones",
    path: "delivery_zones",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/delivery_zones.html#delivery-zones"
  },
  {
    name: "Devices",
    path: "devices",
    methods: ["list", "get", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/devices.html#devices"
  },
  {
    name: "Discounts",
    path: "discounts",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/discounts.html#discounts"
  },
  {
    name: "Drawer Operations",
    path: "drawer_operations",
    methods: ["list", "get", "create"],
    link:
      "https://apidocs.foodics.com/core/resources/drawer_operations.html#drawer-operations"
  },
  {
    name: "Gift Card Product",
    path: "gift_card_products",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/gift_card_products.html#gift-card-product"
  },
  {
    name: "Gift Card Transactions",
    path: "gift_card_transactions",
    methods: ["list", "get", "create"],
    link:
      "https://apidocs.foodics.com/core/resources/gift_card_transactions.html#gift-card-transactions"
  },
  {
    name: "Gift Cards",
    path: "gift_cards",
    methods: ["get"],
    link:
      "https://apidocs.foodics.com/core/resources/gift_cards.html#gift-cards"
  },
  {
    name: "Groups",
    path: "groups",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/groups.html#groups"
  },
  {
    name: "House Account Transactions",
    path: "house_account_transactions",
    methods: ["list", "get", "create"],
    link:
      "https://apidocs.foodics.com/core/resources/house_account_transactions.html#house-account-transactions"
  },
  {
    name: "Loyalty Transactions",
    path: "loyalty_transactions",
    methods: ["list", "get"],
    link:
      "https://apidocs.foodics.com/core/resources/loyalty.html#the-loyalty-transaction-object"
  },
  {
    name: "Loyalty Rewards",
    path: "loyalty_rewards",
    methods: ["list", "get", "update"],
    link:
      "https://apidocs.foodics.com/core/resources/loyalty.html#the-loyalty-reward-object"
  },
  {
    name: "Menu Display",
    path: "menu_display",
    methods: ["get", "update"],
    link:
      "https://apidocs.foodics.com/core/resources/menu_display.html#menu-display"
  },
  {
    name: "Modifiers",
    path: "modifiers",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/modifiers.html#modifiers"
  },
  {
    name: "Orders",
    path: "orders",
    methods: ["list", "get", "update", "create"],
    link: "https://apidocs.foodics.com/core/resources/orders.html#orders"
  },
  {
    name: "Payment Methods",
    path: "payment_methods",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/payment_methods.html#payment-methods"
  },
  {
    name: "Products",
    path: "products",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/products.html#products"
  },
  {
    name: "Promotions",
    path: "promotions",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/promotions.html#promotions"
  },
  {
    name: "Roles",
    path: "roles",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/roles.html#roles"
  },
  {
    name: "Reasons",
    path: "reasons",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/reasons.html#reasons"
  },
  {
    name: "Sections",
    path: "sections",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/sections.html#sections"
  },
  {
    name: "Settings",
    path: "settings",
    methods: ["list", "update"],
    link: "https://apidocs.foodics.com/core/resources/settings.html#settings"
  },
  {
    name: "Shifts",
    path: "shifts",
    methods: ["list", "get", "create"],
    link: "https://apidocs.foodics.com/core/resources/shifts.html#shifts"
  },
  {
    name: "Tables",
    path: "tables",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/tables.html#tables"
  },
  {
    name: "Tags",
    path: "tags",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/tags.html#tags"
  },
  {
    name: "Tax Groups",
    path: "tax_groups",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/tax_groups.html#tax_groups"
  },
  {
    name: "Taxes",
    path: "taxes",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/taxes.html#taxes"
  },
  {
    name: "Tills",
    path: "tills",
    methods: ["list", "get", "create"],
    link: "https://apidocs.foodics.com/core/resources/tills.html#tills"
  },
  {
    name: "Timed Events",
    path: "timed_events",
    methods: ["list", "get", "update", "create", "delete"],
    link:
      "https://apidocs.foodics.com/core/resources/timed_events.html#timed_events"
  },
  {
    name: "Users",
    path: "users",
    methods: ["list", "get", "update", "create", "delete"],
    link: "https://apidocs.foodics.com/core/resources/users.html#users"
  },
  {
    name: "Users",
    path: "whoami",
    methods: ["get"],
    link: "https://apidocs.foodics.com/core/resources/whoami.html#whoami"
  }
];
