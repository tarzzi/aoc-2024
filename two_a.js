const input = `...Task input`;
const inputArray = input.split('\n').map((line) => line.split(' ').map((num) => parseInt(num)));
let safeRows = 0;
for (let i = 0; i < inputArray.length; i++) {
  let row = inputArray[i];
  let safe = true;
  let dirarray = [];
  for (let k = 0; k < row.length - 1; k++) {
    let sub = row[k] - row[k + 1];
    dirarray.push(sub == 0 ? 0 : sub < 0 ? -1 : 1);
    const diff = Math.abs(row[k] - row[k + 1]);
    safe = (diff < 1 || diff > 3) ? false : safe;
  }
  let unique = [...new Set(dirarray)];
  safeRows = !(unique.length > 1 || !safe) ? (safeRows + 1) : safeRows;
}
