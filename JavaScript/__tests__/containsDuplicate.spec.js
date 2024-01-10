/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  if (nums.length == 0 || nums.length == 1) {
    return false;
  }

  const set = new Set(nums);
  return !(set.size == nums.length);
}

describe("Contains Duplicate: LC#217", () => {
  /* Test 1 */
  test("[1, 2, 3, 1] -> true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });
  /* Test 2 */
  test("[1, 2, 3, 4] -> false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
  /* Test 3 */
  test("[1,1,1,3,3,4,3,2,4,2] -> true", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
