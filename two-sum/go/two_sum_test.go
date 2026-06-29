package twosum

import (
	"reflect"
	"testing"
)

func TestTwoSumFound(t *testing.T) {
	result := TwoSum([]int{2, 7, 11, 15}, 9)
	expected := []int{0, 1}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("TwoSum([2,7,11,15], 9) = %v, want %v", result, expected)
	}
}

func TestTwoSumNotFound(t *testing.T) {
	result := TwoSum([]int{1, 2, 3}, 10)
	if len(result) != 0 {
		t.Errorf("TwoSum([1,2,3], 10) = %v, want []", result)
	}
}

func TestTwoSumDuplicates(t *testing.T) {
	result := TwoSum([]int{3, 3}, 6)
	expected := []int{0, 1}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("TwoSum([3,3], 6) = %v, want %v", result, expected)
	}
}
