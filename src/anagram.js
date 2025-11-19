function isAnagram(a, b, options = {}) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('isAnagram expects string arguments');
  }

  const {
    ignoreCase = false,
    ignoreWhitespace = false,
    normalizeUnicode = false,
    customNormalizer,
  } = options;

  const applyOptions = (value) => {
    let result = normalizeUnicode ? value.normalize('NFC') : value;

    if (ignoreCase) {
      result = result.toLowerCase();
    }

    if (ignoreWhitespace) {
      result = result.replace(/\s+/g, '');
    }

    if (customNormalizer) {
      result = customNormalizer(result);
      if (typeof result !== 'string') {
        throw new TypeError('customNormalizer must return a string');
      }
    }

    return result;
  };

  const normalizedA = applyOptions(a);
  const normalizedB = applyOptions(b);

  if (normalizedA.length !== normalizedB.length) {
    return false;
  }

  const counts = new Map();

  for (const char of normalizedA) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of normalizedB) {
    const count = counts.get(char);
    if (!count) {
      return false;
    }

    if (count === 1) {
      counts.delete(char);
    } else {
      counts.set(char, count - 1);
    }
  }

  return counts.size === 0;
}

module.exports = { isAnagram };

