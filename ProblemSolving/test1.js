console.log ("---------Soal 1----------");
console.log(" ");

function findMinMaxSum(arr) {

    arr.sort((a, b) => a - b);
  
    let minSum = arr[0] + arr[1] + arr[2] + arr[3];
  
    let maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  
    return `${minSum} ${maxSum}`;
  }
  
  const arr = [1, 3, 5, 7, 9];
  const result1 = findMinMaxSum(arr);
  console.log(result1);

console.log(" ");
console.log ("---------Soal 2----------");
console.log(" ");
  
function calculateMinMaxSum(input) {

    const arr = input.split(' ').map(Number);
  
    arr.sort((a, b) => a - b);
  
    const minSum = arr[0] + arr[1] + arr[2] + arr[3];
  
    const maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  
    return `${minSum} ${maxSum}`;
  }
  
  const input1 = '1 2 3 4 5';
  const result2 = calculateMinMaxSum(input1);
  console.log(result2);

console.log(" ");
console.log ("---------Soal 3----------");
console.log(" ");

function calculateSumsExceptOne(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          sum += arr[j];
        }
      }
      result.push(sum);
    }
  
    return result;
  }
  
  const input = [1, 2, 3, 4, 5];
  const result = calculateSumsExceptOne(input);
  console.log(result);

  
  
  