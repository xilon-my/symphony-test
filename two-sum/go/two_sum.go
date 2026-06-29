package twosum

// TwoSum returns indices of the two numbers that add up to target.
// Returns empty slice if no solution exists.
func TwoSum(nums []int, target int) []int {
	seen := make(map[int]int)
	for i, num := range nums {
		complement := target - num
		if j, ok := seen[complement]; ok {
			return []int{j, i}
		}
		seen[num] = i
	}
	return []int{}
}
