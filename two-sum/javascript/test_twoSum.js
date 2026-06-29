const { twoSum } = require('./twoSum');

function assertEqual(actual, expected, label) {
    const pass = JSON.stringify(actual) === JSON.stringify(expected);
    console.log(`JavaScript: ${label} — ${pass ? 'PASS' : 'FAIL'}`);
    if (!pass) {
        console.error(`  Expected: ${JSON.stringify(expected)}, got: ${JSON.stringify(actual)}`);
        process.exit(1);
    }
}

// Test 1: basic case
assertEqual(twoSum([2, 7, 11, 15], 9), [0, 1], 'twoSum([2,7,11,15], 9)');

// Test 2: no solution
assertEqual(twoSum([1, 2, 3], 10), [], 'twoSum([1,2,3], 10)');

// Test 3: duplicate values
assertEqual(twoSum([3, 3], 6), [0, 1], 'twoSum([3,3], 6)');

console.log('All JavaScript tests passed!');
