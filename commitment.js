// "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

console.log("Using for loop:");
for (let i = 1; i <= 60; i++) {
  console.log(i);
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

console.log("Using while loop:");
let i = 1;
while (i <= 60) {
  console.log(i);
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  i++;
}
