#include "two_sum.h"
#include <iostream>
#include <cassert>

int main() {
    // Test 1: basic case
    auto result = twoSum({2, 7, 11, 15}, 9);
    assert(result.size() == 2 && result[0] == 0 && result[1] == 1);
    std::cout << "C++: twoSum([2,7,11,15], 9) = [" << result[0] << "," << result[1] << "] — PASS" << std::endl;

    // Test 2: no solution
    auto empty = twoSum({1, 2, 3}, 10);
    assert(empty.empty());
    std::cout << "C++: twoSum([1,2,3], 10) = [] — PASS" << std::endl;

    return 0;
}
