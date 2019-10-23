const _ = require("lodash");
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

  buildFunctions() {}
}
