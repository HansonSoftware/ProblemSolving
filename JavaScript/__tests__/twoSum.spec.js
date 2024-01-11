/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  return [];
}

describe("Two Sum: LC#1", () => {
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
