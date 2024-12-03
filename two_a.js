const input = `...Task input`;
const inputArray = input.split('\n').map((line) => line.split(' ').map((num) => parseInt(num)));
let safeRows = 0;
for (let i = 0; i < inputArray.length; i++) {
  let row = inputArray[i];
  let safe = true;
  let dirarray = [];
  for (let k = 0; k < row.length - 1; k++) {
    dirarray.push((row[k] - row[k + 1]) == 0 ? 0 : (row[k] - row[k + 1]) < 0 ? -1 : 1);
    let diff = Math.abs(row[k] - row[k + 1]);
    if (diff < 1 || diff > 3) {
      safe = false;
    }
  }
  let unique = [...new Set(dirarray)];
  safeRows = (unique.length > 1 || !safe) ? safeRows : (safeRows + 1);
}
console.log('Safe rows', safeRows);
