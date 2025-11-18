
/**
 * Check if two strings are anagrams.
 * @param {string} a 
 * @param {string} b 
 * @param {object} [options]
 * @param {boolean} [options.ignoreCase]
 * @param {boolean} [options.ignoreWhitespace]
 * @param {boolean} [options.normalizeUnicode]
 * @returns {boolean}
 */
function normalize(str, opts = {}) {
  let s = str;
  if (opts.normalizeUnicode) s = s.normalize("NFC");
  if (opts.ignoreWhitespace) s = s.replace(/\s+/g, "");
  if (opts.ignoreCase) s = s.toLowerCase();
  return s;
}

function isAnagram(a, b, options = {}) {
  const A = normalize(a, options);
  const B = normalize(b, options);
  if (A.length !== B.length) return false;

  const freq = new Map();
  for (const ch of A) freq.set(ch, (freq.get(ch) || 0) + 1);

  for (const ch of B) {
    if (!freq.has(ch)) return false;
    const n = freq.get(ch) - 1;
    if (n === 0) freq.delete(ch); else freq.set(ch, n);
  }
  return freq.size === 0;
}

module.exports = { isAnagram };
