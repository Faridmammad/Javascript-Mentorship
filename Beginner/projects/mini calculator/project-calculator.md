# 🧮 Mini Project: Simple javascript calculator

Welcome to your first **JavaScript mini project**!  
In this lesson, you'll build a **simple calculator** using everything you've learned:  
Variables, Operators, Loops, Conditionals, and Functions.

This project will help you:
- Combine all your skills
- Write real, working code
- See how small parts build a complete app

---

## 🛠 Project overview

You’ll create a calculator that:
- Takes two numbers and an operator (`+`, `-`, `*`, `/`)
- Calculates the result
- Prints it to the console
- Can be reused with a function

We’ll build it **step by step**.

---

## Step 1: Basic math in console

Start simple. Write code that calculates and prints:
- `5 + 3`
- `10 - 4`
- `6 * 7`
- `15 / 3`

Example:
```javascript
console.log(5 + 3);
console.log(10 - 4);
``` 


👉 Output:  
`8`  
`6`  
`42`  
`5`

---

## Step 2: Use variables

Instead of hardcoding numbers, use variables.

```javascript
let num1 = 10;
let num2 = 5;
let result = num1 + num2;
console.log(result);
``` 


Try with `-`, `*`, `/`.

---

## Step 3: Create calculation functions

Create separate functions for each operation.

```javascript
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
``` 


Test them:
```javascript
console.log(add(5, 3));        // 8
console.log(divide(10, 2));    // 5
``` 


---

## Step 4: Build the main function

Create a function `calculator(num1, num2, operator)` that:
- Takes two numbers and an operator as string
- Uses `if` or `else if` to decide which operation to run
- Returns the result

Example:
```javascript
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else {
    return "Invalid operator";
  }
}
``` 


Test it:
```javascript
console.log(calculator(8, 2, "+")); // 10
console.log(calculator(8, 2, "x")); // Invalid operator
``` 


---

## Step 5: Handle division by zero

Improve the `divide` function to avoid errors.

```javascript
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  } else {
    return a / b;
  }
}
``` 


Now test:
```javascript
console.log(divide(10, 0)); // Cannot divide by zero
``` 


---

## Step 6: Print a nice message

Instead of just returning a number, make it user-friendly.

```javascript
function calculateAndShow(num1, num2, operator) {
  let result = calculator(num1, num2, operator);
  console.log(num1 + " " + operator + " " + num2 + " = " + result);
}
``` 


Test:

```javascript
calculateAndShow(10, 5, "+"); // 10 + 5 = 15
calculateAndShow(10, 0, "/"); // 10 / 0 = Cannot divide by zero
``` 


---

## Step 7: Bonus — loop for multiple calculations

Use a `for` loop to run 3 calculations.

```javascript
let calculations = [
  [4, 2, "+"],
  [10, 3, "-"],
  [5, 6, "*"]
];
``` 


```javascript
for (let i = 0; i < calculations.length; i++) {
  let calc = calculations[i];
  calculateAndShow(calc[0], calc[1], calc[2]);
}
``` 


👉 Output:
```javascript
4 + 2 = 6  
10 - 3 = 7
5 * 6 = 30
``` 


---

## Final code (Put it all together)

```javascript
// Step 3: Functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}
``` 


```javascript
// Step 4: Main calculator
function calculator(num1, num2, operator) {
  if (operator === "+") return add(num1, num2);
  if (operator === "-") return subtract(num1, num2);
  if (operator === "*") return multiply(num1, num2);
  if (operator === "/") return divide(num1, num2);
  return "Invalid operator";
}
``` 


```javascript
// Step 6: Display
function calculateAndShow(num1, num2, operator) {
  let result = calculator(num1, num2, operator);
  console.log(num1 + " " + operator + " " + num2 + " = " + result);
}
``` 


```javascript
// Test
calculateAndShow(8, 4, "+");
calculateAndShow(8, 4, "/");
calculateAndShow(5, 0, "/");
calculateAndShow(5, 3, "%");
``` 


---



