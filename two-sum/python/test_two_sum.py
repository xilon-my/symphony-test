from two_sum import two_sum

if __name__ == "__main__":
    # Test 1: basic case
    result = two_sum([2, 7, 11, 15], 9)
    assert result == [0, 1], f"Expected [0, 1], got {result}"
    print(f"Python: two_sum([2,7,11,15], 9) = {result} — PASS")

    # Test 2: no solution
    result = two_sum([1, 2, 3], 10)
    assert result == [], f"Expected [], got {result}"
    print(f"Python: two_sum([1,2,3], 10) = {result} — PASS")

    # Test 3: duplicate values
    result = two_sum([3, 3], 6)
    assert result == [0, 1], f"Expected [0, 1], got {result}"
    print(f"Python: two_sum([3,3], 6) = {result} — PASS")

    print("All Python tests passed!")
