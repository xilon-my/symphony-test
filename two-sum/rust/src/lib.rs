/// Returns indices of the two numbers that add up to target.
/// Returns empty vector if no solution exists.
pub fn two_sum(nums: &[i32], target: i32) -> Vec<usize> {
    let mut seen = std::collections::HashMap::new();
    for (i, &num) in nums.iter().enumerate() {
        let complement = target - num;
        if let Some(&j) = seen.get(&complement) {
            return vec![j, i];
        }
        seen.insert(num, i);
    }
    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_two_sum_found() {
        assert_eq!(two_sum(&[2, 7, 11, 15], 9), vec![0, 1]);
    }

    #[test]
    fn test_two_sum_not_found() {
        assert_eq!(two_sum(&[1, 2, 3], 10), vec![]);
    }
}
