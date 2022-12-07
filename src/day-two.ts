import { loadInput } from './std';

// set up
const input = loadInput('day-two');
const inputArr = input.split('\n');

let scoreOne = 0;

inputArr.forEach((round: string) => {
  const elfChoice = round.split(' ')[0];
  const myChoice = round.split(' ')[1];

  if (
    (elfChoice == 'A' && myChoice == 'Y') ||
    (elfChoice == 'B' && myChoice == 'Z') ||
    (elfChoice == 'C' && myChoice == 'X')
  ) {
    scoreOne += 6;
  }

  if (
    (elfChoice == 'A' && myChoice == 'X') ||
    (elfChoice == 'B' && myChoice == 'Y') ||
    (elfChoice == 'C' && myChoice == 'Z')
  ) {
    scoreOne += 3;
  }

  if (myChoice == 'X') scoreOne += 1;
  if (myChoice == 'Y') scoreOne += 2;
  if (myChoice == 'Z') scoreOne += 3;
});

let scoreTwo = 0;

inputArr.forEach((round) => {
  const elfChoice = round.split(' ')[0];
  const outcome = round.split(' ')[1];

  if (outcome == 'X') {
    if (elfChoice == 'A') scoreTwo += 3;
    if (elfChoice == 'B') scoreTwo += 1;
    if (elfChoice == 'C') scoreTwo += 2;
  }

  if (outcome == 'Y') {
    if (elfChoice == 'A') scoreTwo += 1;
    if (elfChoice == 'B') scoreTwo += 2;
    if (elfChoice == 'C') scoreTwo += 3;
    scoreTwo += 3;
  }

  if (outcome == 'Z') {
    if (elfChoice == 'A') scoreTwo += 2;
    if (elfChoice == 'B') scoreTwo += 3;
    if (elfChoice == 'C') scoreTwo += 1;
    scoreTwo += 6;
  }
});

console.log(
  `--- Part One ---
My Score is ${scoreOne}.

--- Part Two ---
My Score is ${scoreTwo}.
`
);
