import { test } from "node:test";
import assert from "node:assert/strict";
import { readProgress, saveProgress } from "../src/lib/progress.ts";
let value = null;
globalThis.localStorage = {
  getItem: () => value,
  setItem: (_, v) => {
    value = v;
  },
};
test("progress ignores corrupted JSON and invalid identifiers", () => {
  value = "bad";
  assert.deepEqual(readProgress(), []);
  value = '["01-0","01-0","99-9",null]';
  assert.deepEqual(readProgress(), ["01-0"]);
  assert.equal(saveProgress("99-9"), false);
});
test("repeat answers are idempotent and shared by language", () => {
  value = "[]";
  assert.equal(saveProgress("01-0"), true);
  assert.equal(saveProgress("01-0"), true);
  assert.equal(saveProgress("04-3"), true);
  assert.deepEqual(readProgress(), ["01-0", "04-3"]);
});
test("blocked storage does not crash the exercise", () => {
  globalThis.localStorage = {
    getItem: () => {
      throw Error("blocked");
    },
    setItem: () => {
      throw Error("blocked");
    },
  };
  assert.deepEqual(readProgress(), []);
  assert.equal(saveProgress("01-0"), false);
});
