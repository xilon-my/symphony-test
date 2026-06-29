/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    return [];
}

module.exports = { twoSum };
