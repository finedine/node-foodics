const moment = require("moment");
const request = require("request");
const Promise = require("bluebird");
const constants = require("./constants.js");
const NodeFoodics = require("./foodics.new.js");

module.exports.branchHid = "";

module.exports.options = {
  url: "",
  headers: {
    Authorization: "",
    Accept: "application/json",
    "X-business": ""
  }
};

// Helpers
const getReqBody = function getReqBody(opts) {
  return new Promise((resolve, reject) => {
    request.get(opts, (error, response, body) => {
      if (error) return reject(error);
      return resolve(body);
    });
  });
};

const postReq = function postReq(options) {
  return new Promise((resolve, reject) => {
    request.post(options, (error, response, body) => {
      if (error) return reject(error);
      return resolve(body);
    });
  });
};

module.exports.init = function init(token, xBusiness, branch) {
  this.options.headers["X-business"] = xBusiness;
  this.options.headers.Authorization = `Bearer ${token}`;
  this.branchHid = branch;
  return this;
};

module.exports.getBranch = (callback, error) => {
  const url = `${constants.BASE_URL + constants.BRANCHES}/${this.branchHid}`;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getBranches = (callback, error) => {
  const url = constants.BASE_URL + constants.BRANCHES;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getCategories = (callback, error) => {
  const url = constants.BASE_URL + constants.CATEGORIES;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getItems = (callback, error) => {
  const url = constants.BASE_URL + constants.PRODUCTS;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getTables = (callback, error) => {
  const url = `${constants.BASE_URL +
    constants.FLOOR_TABLES}?filters[branch_hid]=${this.branchHid}`;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getEmployees = (callback, error) => {
  const url = `${constants.BASE_URL +
    constants.USERS}?filters[type]=5&filters[branch_hid]=${this.branchHid}`;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getModifiers = (callback, error) => {
  const url = constants.BASE_URL + constants.MODIFIERS;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getTickets = (callback, error) => {
  const url = `${constants.BASE_URL + constants.ORDERS}?filters[branch_hid]=${
    this.branchHid
  }&filters[business_date]=${moment().format("YYYY-MM-DD")}`;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.getTicket = (orderHid, callback, error) => {
  const url = `${constants.BASE_URL + constants.ORDERS}/${orderHid}`;
  this.options.url = url;
  this.options.json = true;
  return getReqBody(this.options).then(
    body => {
      callback(body);
    },
    err => {
      error(err);
    }
  );
};

module.exports.openTicket = (data, callback, error) => {
  const url = constants.BASE_URL + constants.ORDERS;
  this.options.url = url;
  this.options.json = data;
  postReq(this.options).then(response => callback(response), err => error(err));
};

module.exports.createDefaultDeliveryZone = (cityHid, callback, error) => {
  const url = constants.BASE_URL + constants.DELIVERY_ZONES;
  this.options.url = url;
  this.options.json = {
    name: {
      en: "Default Delivery Zone",
      ar: "Default Delivery Zone"
    },
    cityHid
  };
  return postReq(this.options).then(
    response => callback(response),
    err => error(err)
  );
};

const foodicsNew = new NodeFoodics("X", "Y", "Z");
console.log(foodicsNew);