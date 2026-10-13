import { test } from "node:test";
import assert from "node:assert/strict";
import { calculateRisk } from "../src/lib/risk.ts";
test("linear cash example: 10 units, 50 loss, 150 gain, 25% gross break-even", () => {
  const r = calculateRisk(10000, 0.5, 100, 95, 115, 0);
  assert.equal(r.units, 10);
  assert.equal(r.loss, 50);
  assert.equal(r.gain, 150);
  assert.equal(r.rr, 3);
  assert.equal(r.breakEven, 25);
});
test("fees reduce quantity and net reward while preserving risk budget", () => {
  const r = calculateRisk(10000, 0.5, 100, 95, 115, 5);
  assert.equal(r.units, 9);
  assert.equal(r.loss, 50);
  assert.equal(r.gain, 130);
  assert.equal(r.breakEven, (50 / 180) * 100);
});
test("cash exposure is capped by available capital including fees", () => {
  const r = calculateRisk(100, 0.5, 100, 99.99, 115, 0);
  assert.equal(r.units, 1);
  assert.equal(r.exposure, 100);
  assert.equal(r.capped, true);
  assert.ok(r.loss <= r.budget);
});
test("capital cap accounts for fees", () => {
  const r = calculateRisk(100, 10, 100, 99.99, 115, 5);
  assert.equal(r.units, 0.95);
  assert.equal(r.exposure + 5, 100);
});
test("non-profitable net target has no feasible break-even percentage", () => {
  const r = calculateRisk(10000, 0.5, 100, 95, 100.01, 49);
  assert.equal(r.breakEven, null);
  assert.ok(r.gain < 0);
});
for (const [name, values] of [
  ["blank or NaN", [NaN, 0.5, 100, 95, 115, 0]],
  ["negative capital", [-100, 0.5, 100, 95, 115, 0]],
  ["risk over 100", [100, 101, 100, 95, 115, 0]],
  ["zero risk", [100, 0, 100, 95, 115, 0]],
  ["stop equal entry", [100, 0.5, 100, 100, 115, 0]],
  ["short incompatible with cash model", [100, 0.5, 100, 105, 115, 0]],
  ["negative stop", [100, 0.5, 100, -1, 115, 0]],
  ["target below entry", [100, 0.5, 100, 95, 99, 0]],
  ["negative costs", [100, 0.5, 100, 95, 115, -1]],
  ["costs consume budget", [100, 0.5, 100, 95, 115, 0.5]],
  ["infinite input", [Infinity, 0.5, 100, 95, 115, 0]],
  ["overflow", [Number.MAX_VALUE, 100, 1, 0.5, Number.MAX_VALUE, 0]],
])
  test("rejects " + name, () => assert.equal(calculateRisk(...values), null));
