const _ = require("lodash");
const superagent = require("superagent");

const constants = require("./constants");
const endpoints = require("./endpoints");

class NodeFoodics {
  constructor(access_token = null, env = "PRODUCTION") {
    if (!this) return new NodeFoodics(access_token);

    // Set access_token as provided.
    this.access_token = access_token;

    // By default, set environment to PRODUCTION.
    this.environment = env;
    this.setEnvironment(this.environment);

    // Generate authentication function.
    this._buildAuthFunction();
    if (this.access_token) {
      // Generate all API functions.
      this._buildFunctions();
    }
  }

  // This function takes an Access Token and builds all API functions.
  setToken(access_token = null) {
    this._clearAllFunctions();
    this.access_token = access_token;
    // Generate only authentication function.
    this._buildAuthFunction();
    if (this.access_token) {
      // Generate all API functions.
      this._buildFunctions();
    }
  }

  // This function sets environment for deciding Foodics API Base URL.
  setEnvironment(env = "PRODUCTION") {
    if (env.toLowerCase() === "production" || env.toLowerCase() === "staging") {
      this.base_url = constants[`${env.toUpperCase()}_BASE_URL`];
    } else {
      this._clearAllFunctions(); // Clear all built functions.
      throw Error(
        `Provided environment is not supported. Available values: PRODUCTION, STAGING.`
      );
    }
  }

  // This function builds authentication function that retrieves an object contains {token_type, expires_in, access_token, refresh_token}.
  // code -> the authorization code your app obtained upon user authorization
  // client_id -> your app client id, given to you at the time you created your app. Also, is accessible through your developer account.
  // client_secret -> your app secret, given to you at the time you created your app. Also, is accessible through your developer account
  // redirect_uri -> must be the same redirect uri you redirected the user to during user authorization
  // DETAIL: https://apidocs.foodics.com/core/authentication.html#_5-requesting-access-token
  _buildAuthFunction() {
    this.authentication = (code, client_id, client_secret, redirect_uri) => {
      return new Promise(async (resolve, reject) => {
        try {
          let url = `${this.base_url}/oauth/token`;
          if (!code) reject(new Error("'code' must be provided!"));
          if (!client_id) reject(new Error("'client_id' must be provided!"));
          if (!client_secret)
            reject(new Error("'client_secret' must be provided!"));
          if (!redirect_uri)
            reject(new Error("'redirect_uri' must be provided!"));
          const res = await superagent
            .post(url)
            .set("Content-Type", "application/json")
            .send({
              code,
              client_id,
              client_secret,
              redirect_uri,
              grant_type: "authorization_code"
            });
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
    };
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
          .set("Authorization", `Bearer ${this.token}`)
          .set("X-business", this.xbusiness)
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
  //         .set("Authorization", `Bearer ${this.token}`)
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
