import { loadInput } from './std';

// set up
const input = loadInput('day-three');
const inputArr = input.split('\n');

let sumOne = 0;

inputArr.forEach((backpack) => {
  const compartementSize = backpack.length / 2;
  const firstCompartement = backpack.split('').slice(0, compartementSize);
  const secondCompartement = backpack
    .split('')
    .slice(compartementSize, compartementSize * 2);

  let found = false;
  firstCompartement.forEach((item) => {
    if (found) return;
    if (secondCompartement.includes(item)) {
      if (item.charCodeAt(0) > 90) sumOne += item.charCodeAt(0) - 96;
      else sumOne += item.charCodeAt(0) - 38;
      found = true;
    }
  });
});

let sumTwo = 0;

for (let i = 0; i < inputArr.length; i += 3) {
  const group = inputArr.slice(i, i + 3);

  let found = false;
  group[0].split('').forEach((item) => {
    if (found) return;
    if (group[1].includes(item) && group[2].includes(item)) {
      if (item.charCodeAt(0) > 90) sumTwo += item.charCodeAt(0) - 96;
      else sumTwo += item.charCodeAt(0) - 38;
      found = true;
    }
  });
}

console.log(
  `--- Part One ---
The sum of the misplaced items is ${sumOne}.

--- Part Two ---
The sum of the badges is ${sumTwo}
`
);
