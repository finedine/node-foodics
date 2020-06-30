const NodeFoodics = require("../lib/foodics");

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const API_KEY = "8d90d06e-bb3d-43f1-8407-xxxxxx"; // <--- Change to your API key.
const ENVIRONMENT = "STAGING"; // <--- Change the environment you want to test.
const CODE =
  "def50200be01db760be41ea98e849f0dd2fd4abc774e06e8eccd78bec4f3219a93e1b46ba71bdf84c23e835ce84cdfc81f11d0c16430000c89f55cf5cd6327a9517842342745d836d0895df58ad6345ee23675208a1f2f16b459ec92b698336e107cbd8f24cb4700cf781aa0325f19ba7dcd223db0d7c993cf07ee0a789157a7e54cf94ce97dbd6b4892596ecdbdd3cce90b4cc7005f0e27476cd098dadbea5020040ae8951559c8acc2e717ccd0724f7775efa5153faf8ce20a4822c5d25624aa8f0a2de2206732c83bae350f2ff0d771a643b1f1dd9dfa91ed48948cffafe75fe1b39c08dcc205524a4d2f87e394cc5602a384efe371bb5034e9496c0c7a96cb48af5e7ec723de708bc874e42a5f97dde0247f960d6d19b1d535e6522f77b95f6fc63fc495c6e95e6dffcdc2fbf10a182271d2a54001b6185b25e9c5c9d954e049a5cb22a42bb69a64232d49c639f2d58d6d77677f5944a0139a2631af7e7ed7f771b3c67ff0369edd9df323c48d68743bbdf9fd42f1365144482c01d8afb1a79e4b1cd26f510e144cee4542ef2e20fa40ef14cbfd0227973108dba02bd7149ed7041c41f36031f64aef8f07c09d9bbd8157c631430b65230ecdc532";
const CLIENT_ID = "902fd432-1219-477f-a5bb-92f1ae7f8adc";
const CLIENT_SECRET = "Tm2OMauuwLDRQ9ILA0Zr2MRhzKt8d9g8abwP9Fg8";
const REDIRECT_URL = "http://localhost:8080/v1/integrations/foodics/auth";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiZTcyY2M5NWQzMzkyMTA4MDRlMzA1MzhiMjc0M2IzMDhkMzEyODViZGM5M2M5OTMwOGRmNDFiNGNlMWI5MDc0MDM0ZDRlZWQzMzRjMWNiIn0.eyJhdWQiOiI5MDJmZDQzMi0xMjE5LTQ3N2YtYTViYi05MmYxYWU3ZjhhZGMiLCJqdGkiOiJkYmU3MmNjOTVkMzM5MjEwODA0ZTMwNTM4YjI3NDNiMzA4ZDMxMjg1YmRjOTNjOTkzMDhkZjQxYjRjZTFiOTA3NDAzNGQ0ZWVkMzM0YzFjYiIsImlhdCI6MTU5MzUwNzgzOSwibmJmIjoxNTkzNTA3ODM5LCJleHAiOjE3NTEyNzQyMzksInN1YiI6IjkwZTYyNDI4LWE4ZGYtNGM5MC05ODQ4LWMzZjNiYTc2YmNmMiIsInNjb3BlcyI6W10sImJ1c2luZXNzIjoiOTBlNjI0MjgtYjBjYy00ZDNjLTlkYjItMmFlZmVlZDJmMGFkIiwicmVmZXJlbmNlIjoiODU0NTQxIn0.FqM7-DJJ02C-kFSJmVtDenG994ljI5KSiFAEx7dMHU6vZfErEzC2H1sYs9tGzRgi6LDNZlUT1hAMqepgvfhHr86C4lgPJFo2Lx6RTgV11nGnFCVyWGfghV-KzpngqZidfpydDUWppNqJHppnPDMvOzEOncscV-lJdtMKX-Dop8S9AuEhqBcQ384BCFswZx9ze0pBUAUxBdYPmCyFnJR9FsNxUMz2lRWPcM6ILVG6POzrNi-VygkWRpD-_nY3a0PzRsmiZyBlWThLfIZBSPM-LCTEKmLg5OpME1TMYHei36rXGOAybO24tfai8vvKPCk1ZMQLJDEK6uhVSzDrlTXNvvCQ7oiZ1oDq9Lot_VhGUXm2f7nFFjZYafa007QH7xjSXvv5R2WVZwu6E1qkx7G-4qu3T-sQd6Pb3RUyteYYWAi34_C2zPZzeF70qIyd7Gy8qgjHgdyTjNp2rm3ujWnDn8oZVm6VLcdxMWwiWod-uzWKXG-qYkk6f_QdNJccy9FY3JtzfDqDBQGyOQmKZ_c7n4Sy2ZzUU_e8JSQZ4SyryuhltZoOz1872IWWh2zusJ_4feCnrkKQi6ffqWJuGkIA_pFhyE_yq8lN88-iPGR7RDB3eN867pPrtpj3ongLyyncgpuXg9U4yas_IoGGv7nd_BOil_I9VRnQrMXVx7nm3ts";

describe("node-foodics initialize", () => {
  // it("should return access token", async () => {
  //   try {
  //     const nodeFoodics = new NodeFoodics(null, ENVIRONMENT);
  //     const result = await nodeFoodics.authentication(
  //       CODE,
  //       CLIENT_ID,
  //       CLIENT_SECRET,
  //       REDIRECT_URL
  //     );
  //     expect(result.access_token).to.exist();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });
  it("should return WHOAMI", async () => {
    try {
      const nodeFoodics = new NodeFoodics(ACCESS_TOKEN, ENVIRONMENT);
      const result = await nodeFoodics.whoami.get();
      expect(result.data.oauth_client).to.equal("FineDine");
    } catch (error) {
      console.error(error);
    }
  });
  it("should return PRODUCTS", async () => {
    try {
      const nodeFoodics = new NodeFoodics(ACCESS_TOKEN, ENVIRONMENT);
      const result = await nodeFoodics.products.list({is_deleted: false});
      expect(result).to.have.property("data");
    } catch (error) {
      console.error(error);
    }
  });
  it("should return A SINGLE PRODUCT", async () => {
    try {
      const nodeFoodics = new NodeFoodics(ACCESS_TOKEN, ENVIRONMENT);
      const result = await nodeFoodics.products.get("90edc7fa-6691-47a9-9dd1-d55cfc90ce0b");
      expect(result).to.have.property("data");
    } catch (error) {
      console.error(error);
    }
  });
  it("should return A SINGLE PRODUCT", async () => {
    try {
      const nodeFoodics = new NodeFoodics(ACCESS_TOKEN, ENVIRONMENT);
      const result = await nodeFoodics.products.get("90edc7fa-6691-47a9-9dd1-d55cfc90ce0b");
      expect(result).to.have.property("data");
    } catch (error) {
      console.error(error);
    }
  });
});
