console.log("---------Soal 1----------");
console.log(" ");

function calculateRatios(arr) {
  let positiveCount = 0,
    negativeCount = 0,
    zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const n = arr.length;
  const positiveRatio = (positiveCount / n).toFixed(6);
  const negativeRatio = (negativeCount / n).toFixed(6);
  const zeroRatio = (zeroCount / n).toFixed(6);

  return `${positiveRatio}\n${negativeRatio}\n${zeroRatio}`;
}

const arr = [1, 1, 0, -1, -1];
const result = calculateRatios(arr);
console.log(result);

console.log(" ");
console.log("---------Soal 2----------");
console.log(" ");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runQuestion3() {
  console.log(" ");
  console.log("---------Soal 3----------");
  console.log(" ");

  rl.question('Input n = ', (size) => {
    const n = parseInt(size);

    rl.question(`Input ${n} integers = `, (arrInput) => {
      const inputArray = arrInput.split(' ').map(Number);

      function getRatios(arr) {
        let positiveCount = 0,
          negativeCount = 0,
          zeroCount = 0;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i] > 0) {
            positiveCount++;
          } else if (arr[i] < 0) {
            negativeCount++;
          } else {
            zeroCount++;
          }
        }

        const arrayLength = arr.length;
        const positiveRatio = (positiveCount / arrayLength).toFixed(6);
        const negativeRatio = (negativeCount / arrayLength).toFixed(6);
        const zeroRatio = (zeroCount / arrayLength).toFixed(6);

        console.log(positiveRatio);
        console.log(negativeRatio);
        console.log(zeroRatio);

        rl.close();
      }

      getRatios(inputArray);
    });
  });
}

rl.question('Input n = ', (size) => {
  const n = parseInt(size);

  rl.question(`Input ${n} Integers = `, (arrInput) => {
    const inputArray = arrInput.split(' ').map(Number);

    function calculateArrayRatios(arr) {
      let positiveCount = 0,
        negativeCount = 0,
        zeroCount = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          positiveCount++;
        } else if (arr[i] < 0) {
          negativeCount++;
        } else {
          zeroCount++;
        }
      }

      const arrayLength = arr.length;
      const positiveRatio = (positiveCount / arrayLength).toFixed(6);
      const negativeRatio = (negativeCount / arrayLength).toFixed(6);
      const zeroRatio = (zeroCount / arrayLength).toFixed(6);

      console.log(positiveRatio);
      console.log(negativeRatio);
      console.log(zeroRatio);

      runQuestion3(); 
    }

    calculateArrayRatios(inputArray);
  });
});
