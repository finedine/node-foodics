var FoodicsClient = require("../lib/foodics");

var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should();

var API_KEY = ""; // <--- Change to your API key.
var XBUSINESS_HID = ""; // <--- Change to your X-Business hid.
var BRANCH_HID = ""; // <--- Change to your X-Business hid.

describe("node-foodics initialize", () => {
  it("should init node-foodics", () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    expect(foodicsClient).to.be.a("object");
  });
  it("should return branch", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getBranch(
      response => {
        response.should.have.property("branch").and.to.be.a("object");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return categories", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getCategories(
      response => {
        response.should.have.property("categories").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return items", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getItems(
      response => {
        response.should.have.property("products").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return floor-tables", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getTables(
      response => {
        response.should.have.property("tables").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return employees", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getEmployees(
      response => {
        response.should.have.property("users").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return modifiers", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getModifiers(
      response => {
        response.should.have.property("modifiers").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
  it("should return tickets", async () => {
    var foodicsClient = FoodicsClient.init(API_KEY, XBUSINESS_HID, BRANCH_HID);
    await foodicsClient.getTickets(
      response => {
        response.should.have.property("orders").and.to.be.a("array");
      },
      error => {
        throw error;
      }
    );
  });
});
