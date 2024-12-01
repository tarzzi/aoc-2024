// task input const input = [...]
let arrA = [];
let arrB = [];


for (let i = 0; i < input.length; i++) {  
    let x = input[i];
    let d = i + 1;
    if (d % 2 !== 0) {
        arrA.push(x);
    } else {
        arrB.push(x);
    }
}


arrA.sort((a, b) => a - b);
arrB.sort((a, b) => a - b);

let arrBmap = {};

arrB.forEach(num => {
  if (arrBmap[num] === undefined) {
    arrBmap[num] = 1;
  } else {
    arrBmap[num]++;
  }
});

let sumOfDifference = 0;

for (let k = 0; k < arrA.length; k++) {
  let aNum = arrA[k];  
  let count = arrBmap[aNum];
  if(count){
  let total = aNum*count;
    sumOfDifference += total;    
  }
}

console.log("sum", sumOfDifference);