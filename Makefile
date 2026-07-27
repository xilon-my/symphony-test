.PHONY: test python javascript go rust java cpp

test: python javascript go rust java cpp

python:
	cd two-sum/python && python3 test_two_sum.py

javascript:
	cd two-sum/javascript && node test_twoSum.js

go:
	cd two-sum/go && go test ./...

rust:
	cd two-sum/rust && cargo test

java:
	cd two-sum/java && javac TwoSum.java && java TwoSum

cpp:
	cd two-sum/cpp && g++ -std=c++17 test_two_sum.cpp two_sum.cpp -o test && ./test
