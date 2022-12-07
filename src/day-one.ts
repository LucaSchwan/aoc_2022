import { loadInput } from './std';

// set up
const input = loadInput('day-one');
const inputArr = input.split('\n');
let elfCalories = [0];

let elfIndex = 0;
inputArr.forEach((calorie: string) => {
  if (calorie == '') {
    elfIndex++;
    elfCalories.push(0);
    return;
  }

  elfCalories[elfIndex] += Number(calorie);
});

elfCalories = elfCalories.sort((n1, n2) => n2 - n1);

console.log(
  `--- Part One ---
The elf carrying the most calories carries ${elfCalories[0]} calories.

--- Part Two ---
The top three elves are carrying ${
    elfCalories[0] + elfCalories[1] + elfCalories[2]
  } calories`
);
