const _ = require("lodash");
const superagent = require("superagent");

const constants = require("./constants");
const endpoints = require("./endpoints");

class NodeFoodics {
  constructor(access_token, any, env) {
    if (!this) return new NodeFoodics(access_token);

    // Set access_token as provided.
    this.access_token = access_token;

    // By default, set environment to PRODUCTION.
    var envStage = env ? env : 'STAGING';        
    this.setEnvironment(envStage);

    if (this.access_token) {
      // Generate all API functions.
      this._buildFunctions();
    }
  }

  // This function sets environment for deciding Foodics API Base URL.
  setEnvironment(env) {
    if (env.toLowerCase() === "production" || env.toLowerCase() === "staging") {
      this.base_url = constants[`${env.toUpperCase()}_BASE_URL`];
    } else {
      this._clearAllFunctions(); // Clear all built functions.
      throw Error(
        `Provided environment is not supported. Available values: PRODUCTION, STAGING.`
      );
    }
  }

  // This function builds all functions defined in ./endpoints.js file.
  _buildFunctions() {
    _.forEach(endpoints, (e) => {
      let name = e.name.toLowerCase().split(" ").join("_");
      this[name] = this[name] ? this[name] : {};
      _.forEach(e.methods, (method) => {
        this[name][method] = (...args) => {
          return this[`_${method}FunctionBuilder`](e.path, args);
        };
      });
    });
  }

  _listFunctionBuilder(path, filters = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (filters && _.size(filters) > 0) {
          url += `?`;
          _.forEach(filters, (val, key) => (url += `filters[${key}]=${val}`));
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  _getFunctionBuilder(path, id = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (id) {
          url += `/${id}`;
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  _createFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .post(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  _updateFunctionBuilder(path, hid, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .post(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  _deleteFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}`;
        const res = await superagent
          .delete(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  _cancelFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${this.base_url}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}/cancel`;
        const res = await superagent
          .post(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          reject(res.error);
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  // This function clears all built functions except authentication function.
  _clearAllFunctions() {
    _.forEach(endpoints, (e) => (this[e.name.toLowerCase()] = null));
  }

  // TODO: Improve this custom builder
  // _customFunctionBuilder(method, path, params = null) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let url = `${this.base_url}/${path}`;
  //       if (path.includes("{")) {
  //       }
  //       if (filters && _.size(filters) > 0) {
  //         url += `?`;
  //         _.forEach(filters, (val, key) => (url += `filters[${key}]=${val}`));
  //       }
  //       const res = await superagent
  //         .get(url)
  //         .set("Authorization", `Bearer ${this.access_token}`)
  //         .set("X-business", this.xbusiness)
  //         .set("Content-Type", "application/json");
  //       if (res && res.ok) {
  //         resolve(res.body);
  //       } else if (res && !res.ok) {
  //         reject(res.error);
  //       } else {
  //         reject(new Error("Unknown error"));
  //       }
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // }
}

module.exports = NodeFoodics;
