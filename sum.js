// Subtask-1:

// Display sum of all the odd numbers from 91 to 129.

// Subtask-2:

// Display sum of all the even numbers from 51 to 85.

console.log("Task - 1");

let sum = 0;

for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
console.log("Sum:", sum);

sum = 0;

console.log("Task - 2");

for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Sum:", sum);
