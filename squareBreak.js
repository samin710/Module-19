// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

// for(let i = 1; i<=100; i++){
//     if(i === 4 && i > 1){
//         console.log(i);
//         break;
//     }
// }

for (let i = 1; i <= 100; i++) {
  if (Number.isInteger(Math.sqrt(i)) && i > 1) {
    // Check if i is a perfect square
    console.log(`Stopped at square number: ${i}`);
    break;
  }
  console.log(i);
}
