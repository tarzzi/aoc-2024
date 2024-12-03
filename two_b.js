const input = `...input`;

let safeRows = 0;
const inputArray = input
  .split('\n')
  .map((line) => line.split(' ').map((num) => parseInt(num)));

const loopRow = (row) => {
  let lastDirection;
  for (let k = 0; k < row.length - 1; k++) {
    const sub = row[k] - row[k + 1];
    const direction = sub == 0 ? 0 : sub < 0 ? -1 : 1;
    const absDiff = Math.abs(row[k] - row[k + 1]);
    const notInRange = absDiff < 1 || absDiff > 3;
    const isDirectionChanged =
      lastDirection !== undefined && direction !== lastDirection;
    if (notInRange || isDirectionChanged) {
      return false;
    }
    lastDirection = direction;
  }
  return true;
};

for (let i = 0; i < inputArray.length; i++) {
  let row = inputArray[i];
  let rowIsSafe = true;
  for (let j = 0; j < row.length; j++) {
    let skipRow = row.filter((x, index) => j !== index);
    rowIsSafe = loopRow(skipRow);
    if (rowIsSafe) {
      safeRows++;
      break;
    }
  }
}
console.log('Safe rows', safeRows);
