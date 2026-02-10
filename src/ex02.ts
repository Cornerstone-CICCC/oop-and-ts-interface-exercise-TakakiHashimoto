// Exercise 2: Interfaces as Function Types
// Create an interface for a function type that takes two numbers as arguments and returns their sum.
// Implement the function using the interface and test it.

interface SumFunction {
  (num1: number, num2: number): number;
}

const sum: SumFunction = (a, b) => a + b;

console.log(sum(10, 20));
// Expected Output: 30
