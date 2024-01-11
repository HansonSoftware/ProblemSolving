/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  if (s == t) {
    return true;
  }
  let frequencies = new Map();

  /* Add s frequencies */
  for (char in s) {
    if (frequencies.get(s[char]) == undefined) {
      frequencies.set(s[char], 1);
    } else {
      frequencies.set(s[char], frequencies.get(s[char]) + 1);
    }
  }
  /* Remove t frequencies */
  for (char in t) {
    if (frequencies.get(t[char]) == undefined) {
      return false;
    } else {
      frequencies.set(t[char], frequencies.get(t[char]) - 1);
    }
  }
  /* Check each frequency == 0, if so is an anagram */
  for (let key of frequencies.keys()) {
    if (frequencies.get(key) != 0) {
      return false;
    }
    return true;
  }
}

describe("Valid Anagram: LC#242", () => {
  /* Test 1 */
  test("true case", () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  });
  /* Test 2 */
  test("false case", () => {
    expect(isAnagram("rat", "car")).toEqual(false);
  });
  /* Test 3 */
  test("false case", () => {
    expect(isAnagram("aacc", "ccac")).toEqual(false);
  });
  /* Test 4 */
  test("false case", () => {
    expect(isAnagram("cccc", "cccc")).toEqual(true);
  });
});
