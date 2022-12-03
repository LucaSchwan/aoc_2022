import path from 'path';
import fs from 'fs';

export const loadInput = (input: string) => {
  return fs.readFileSync(
    path.join(__dirname, `../input/${input}.txt`),
    'utf-8'
  );
};
