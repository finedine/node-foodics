const NodeFoodics = require("../lib/foodics");

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const API_KEY = "8d90d06e-bb3d-43f1-8407-xxxxxx"; // <--- Change to your API key.
const ENVIRONMENT = "staging"; // <--- Change the environment you want to test.

const nodeFoodics = new NodeFoodics(null, ENVIRONMENT);

describe("node-foodics initialize", () => {
  it("should return who you are", async () => {
    // const whoami = await nodeFoodics.authentication(code, id, secret, redirect)
    // console.log(whoami);
  });
});
