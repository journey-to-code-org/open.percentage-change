import test from "node:test";import assert from "node:assert/strict";import{percentageChange,percentageDifference,applyPercentage}from"../src/index.js";
test("change",()=>assert.equal(percentageChange(100,125),25));
test("difference",()=>assert.equal(percentageDifference(100,100),0));
test("apply",()=>assert.equal(applyPercentage(200,10),220));
