import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    /**
     * Given an array of integers and a target,
     * return indices of the two numbers that add up to target.
     * Returns empty array if no solution exists.
     */
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        // Quick smoke test
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        assert result.length == 2 && result[0] == 0 && result[1] == 1 : "Test failed";
        System.out.println("Java: twoSum([2,7,11,15], 9) = [" + result[0] + "," + result[1] + "] — PASS");
    }
}
