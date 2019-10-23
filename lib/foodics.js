const _ = require("lodash");
const superagent = require("superagent");

const constants = require("./constants");
const endpoints = require("./endpoints");

class NodeFoodics {
  constructor(token = null, xbusiness = null, branchHid = null) {
    if (!this) return new NodeFoodics(token, xbusiness, branch);

    this.token = token;
    this.xbusiness = xbusiness;
    this.branchHid = branchHid;

    if (this.token && this.xbusiness) {
      this._buildAuthFunction();
      this._buildAllowedBusinessesFunction();
      this._buildFunctions();
    } else if (!token && !this.xbusiness) {
      // Generate only authentication function
      this._buildAuthFunction();
      this._clearAllFunctions();
    }
  }

  setToken(token) {
    this.token = token;
    this._buildAllowedBusinessesFunction();
    this._clearAllFunctions();
  }

  setXBusiness(xbusiness) {
    this.xbusiness = xbusiness;
    this._buildFunctions();
  }

  setBranchHid(branchHid) {
    this.branchHid = branchHid;
  }

  _buildAuthFunction() {
    this.authentication = secret => {
      return new Promise(async (resolve, reject) => {
        try {
          let url = `${constants.BASE_URL}/token`;
          if (!secret) reject(new Error("'secret' must be provided!"));
          const res = await superagent
            .post(url)
            .set("Content-Type", "application/json")
            .send({ secret });
          if (res && res.ok) {
            resolve(res.body);
          } else if (res && !res.ok) {
            reject(res.error);
          } else {
            throw new Error("Unknown error");
          }
        } catch (error) {
          throw error;
        }
      });
    };
  }

  _buildAllowedBusinessesFunction() {
    this.allowedbusinesses = {
      list: () => {
        return new Promise(async (resolve, reject) => {
          try {
            let url = `${constants.BASE_URL}/businesses`;
            const res = await superagent
              .get(url)
              .set("Authorization", `Bearer ${this.token}`)
              .set("Content-Type", "application/json");
            if (res && res.ok) {
              resolve(res.body);
            } else if (res && !res.ok) {
              reject(res.error);
            } else {
              throw new Error("Unknown error");
            }
          } catch (error) {
            throw error;
          }
        });
      }
    };
  }

  _buildFunctions() {
    _.forEach(endpoints, e => {
      this[e.name.toLowerCase()] = this[e.name.toLowerCase()]
        ? this[e.name.toLowerCase()]
        : {};
      _.forEach(e.availables, method => {
        this[e.name.toLowerCase()][method] = (params = null) => {
          return this[`_${method}FunctionBuilder`](e.path, params);
        };
      });
    });
  }

  _listFunctionBuilder(path, params = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (params && _.size(params) > 0) {
          url += `?`;
          _.forEach(params, (val, key) => (url += `filters[${key}]=${val}`));
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _getFunctionBuilder(path, hid = null) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (hid) {
          url += `/${hid}`;
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _createFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _updateFunctionBuilder(path, hid, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _deleteFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _cancelFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
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
          throw new Error("Unknown error");
        }
      } catch (error) {
        throw error;
      }
    });
  }

  _clearAllFunctions() {
    _.forEach(endpoints, e => (this[e.name.toLowerCase()] = null));
  }
}

module.exports = NodeFoodics;
