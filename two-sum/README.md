# Two Sum — Multi-Language Implementation

[![CI](https://github.com/xilon-my/symphony-test/actions/workflows/ci.yml/badge.svg)](https://github.com/xilon-my/symphony-test/actions/workflows/ci.yml)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

Each implementation uses a hash-map approach with **O(n)** time and **O(n)** space complexity.

## Languages

| Language   | Directory      | How to Run Tests                          |
|------------|----------------|-------------------------------------------|
| Python     | `python/`      | `python3 test_two_sum.py`                |
| JavaScript | `javascript/`  | `node test_twoSum.js`                     |
| Go         | `go/`          | `go test ./...`                           |
| Rust       | `rust/`        | `cargo test`                              |
| Java       | `java/`        | `javac TwoSum.java && java TwoSum`       |
| C++        | `cpp/`         | `g++ -std=c++17 test_two_sum.cpp two_sum.cpp -o test && ./test` |

## API

All implementations follow the same signature:

```
twoSum(nums: int[], target: int) -> int[]
```

- **Input**: An array of integers and a target integer.
- **Output**: Indices of the two numbers that sum to `target`, or an empty array if no solution exists.
