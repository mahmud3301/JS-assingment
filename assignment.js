//  Problem 01

function mindGame(number) {
    return (number * 3 + 10) / 2 - 5;
  }
  
let theNumber = mindGame(33);
console.log(theNumber)

//  Problem 02

function evenOdd(str) {
    let strToEvenOdd = str.length;
    return strToEvenOdd % 2 === 0? 'Even':'Odd';
  }
  
let evenOrOdd = evenOdd('Phero');
console.log(evenOrOdd);

// problem 03

function isLGSeven(num) {
  if (num - 7 < 0) {
    return num - 7;
  }
  else {
    return num * 2;
  }
}

let theAbsNum = isLGSeven(6)
console.log(theAbsNum); 

//   problem 04

function findingBadData(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

let arrayNumbers = [1, 2, 5];
let theBadData = findingBadData(arrayNumbers);
console.log(theBadData);

// problem 05

function gemsToDiamond(gem1, gem2, gem3) {
    let totalDiamonds = gem1 * 21 + gem2 * 32 + gem3 * 43;
    if (totalDiamonds >= 1000) {
      totalDiamonds = totalDiamonds - 2000;
    }
    return totalDiamonds;
  }

let ourGems = gemsToDiamond(100, 5, 1);
console.log(ourGems);