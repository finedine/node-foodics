const _ = require("lodash");
const superagent = require("superagent");

const constants = require("./constants");
const endpoints = require("./endpoints");

class NodeFoodics {
  constructor(token, xbusiness, branch) {
    if (!token || !xbusiness || !branch) {
      throw new Error(
        "Credentials must be provided. (token, xBusiness, branchHid)"
      );
    }

    if (!this) return new NodeFoodics(token, xbusiness, branch);

    this.token = token;
    this.xbusiness = xbusiness;
    this.branch = branch;

    this.buildFunctions();
  }

  buildFunctions() {
    _.forEach(endpoints, e => {
      // Create LIST function
      this[`${e.name.toLowerCase()}.list`] = (params = null) => {
        this.generateListFunction(e.path, params);
      };
      // Create GET function

      // Create UPDATE function
    });
  }

  generateListFunction(path, params = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (params && params.length > 0) {
          url += params;
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          return res.body;
        } else if (res && !res.ok) {
          throw res.error;
        } else {
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }
}

module.exports = NodeFoodics