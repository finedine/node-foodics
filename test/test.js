const NodeFoodics = require("../lib/foodics");

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const API_KEY = "XYZ"; // <--- Change to your API key.
const ENVIRONMENT = "staging"; // <--- Change the environment you want to test.

const nodeFoodics = new NodeFoodics(API_KEY, ENVIRONMENT);

describe("node-foodics initialize", () => {
  it("should return branches", async () => {});
});
