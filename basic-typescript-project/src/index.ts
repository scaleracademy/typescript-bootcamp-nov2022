import { readFile } from 'node:fs/promises';

async function readOddNums() {
  const data = await readFile(__dirname + '/../file.txt', 'utf8');
  console.log(data.toString()) 
}

readOddNums();