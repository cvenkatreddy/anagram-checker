
const { isAnagram } = require("../anagram");

test("basic anagram", () => {
  expect(isAnagram("listen", "silent")).toBe(true);
});

test("not anagram", () => {
  expect(isAnagram("foo", "bar")).toBe(false);
});

test("case sensitive by default", () => {
  expect(isAnagram("aa", "Aa")).toBe(false);
});

test("ignoreCase", () => {
  expect(isAnagram("aA", "Aa", { ignoreCase: true })).toBe(true);
});

test("ignoreWhitespace", () => {
  expect(isAnagram("a a", "aa", { ignoreWhitespace: true })).toBe(true);
});

test("Check custom normalizer", () => {
  expect(isAnagram("résumé", "sérumé", { normalizeUnicode: true });
});
