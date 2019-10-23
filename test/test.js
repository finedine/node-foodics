const NodeFoodics = require("../lib/foodics");

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const API_KEY = ""; // <--- Change to your API key.
const XBUSINESS_HID = ""; // <--- Change to your X-Business hid.
const BRANCH_HID = ""; // <--- Change to your Branch hid.

const nodeFoodics = new NodeFoodics(API_KEY, XBUSINESS_HID, BRANCH_HID);

describe("node-foodics initialize", () => {
  it("should return branches", async () => {
    const response = await nodeFoodics.branches.list();
    response.should.have.property("branches");
  });
});
