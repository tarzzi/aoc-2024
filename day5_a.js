const rulesstring = ``;

const rules = rulesstring.split('\n');

const listsstring = ``;

const lists = listsstring.split('\n');

const ruleChecker = (numListRow) => {
  for(let rulenum = 0; rulenum < rules.length; rulenum++){
    let rule = rules[rulenum];
//    console.log('Rule ', rule);
    rule = rule.split('|');
    let numA = rule[0];
    let numB = rule[1];
    
    // find if the string has the rule nums
    if(numListRow.includes(String(numA)) && numListRow.includes(String(numB))){
      // has both numbers, check order
      let numArray = numListRow.split(',');
      let a = numArray.indexOf(numA);
      let b = numArray.indexOf(numB);
      if(a !== -1 && b !== -1 && a > b){
        // else swap positions  
        numArray[b] = Number(numA);
        numArray[a] = Number(numB);
        return ruleChecker(numArray.join(','));
      }
    }
  }  
  return numListRow;
}

const checkedLines = [];
for(let lineNumber = 0; lineNumber < lists.length; lineNumber++){
  let checkedLine = ruleChecker(lists[lineNumber]);
  console.log(checkedLine);
  checkedLines.push(checkedLine);
}

console.log('Checked lines', checkedLines);
let total = 0;
for(let x = 0; x < checkedLines.length; x++){
  
  let l = checkedLines[x].split(',');
  let y = Math.ceil((l.length / 2))-1;
  let m = l[y]; 
  m = Number(m);
//  console.log(m);
  total += m;
}
console.log(total);
